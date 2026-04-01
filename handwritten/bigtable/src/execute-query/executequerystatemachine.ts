// Copyright 2025 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
import {
  PreparedStatement,
  PreparedStatementDataCallback,
} from './preparedstatement';
import {Bigtable} from '..';
import {ServiceError, RetryOptions} from 'google-gax';
import {google} from '../../protos/protos';
import * as SqlTypes from './types';
import {AbortableDuplex} from '..';
import {ByteBufferTransformer} from './bytebuffertransformer';
import {
  DEFAULT_RETRY_COUNT,
  isExpiredQueryError,
  RETRYABLE_STATUS_CODES,
} from '../utils/retry-options';
import {ExecuteQueryStreamWithMetadata} from './values';
import {ProtobufReaderTransformer} from './protobufreadertransformer';
import {MetadataConsumer} from './metadataconsumer';
import {DEFAULT_BACKOFF_SETTINGS} from '../tabular-api-surface';
import {isRstStreamError} from '../utils/createReadStreamInternal';
const pumpify = require('pumpify');

/**
 * Creates a stream with some additional functionalities used by
 * the ExecuteQueryStateMachine.
 */
interface CallerStream extends ExecuteQueryStreamWithMetadata {
  /**
   * Sets the metadata used to parse the executeQuery responses.
   */
  updateMetadata: (metadata: SqlTypes.ResultSetMetadata) => void;
  /**
   * @returns the latest resumeToken before which all data was processed.
   */
  getLatestResumeToken: () => Uint8Array | string | null;
  /**
   * @param callback guaranteed to be called *after* the last message
   * was processed.
   */
  onDrain: (callback: () => void) => void;
  /**
   * No other data event will be emitted after this method is called.
   */
  close: () => void;
  /**
   * keeps a reference to the state machine.
   */
  _stateMachine: ExecuteQueryStateMachine;
}

interface StreamRetryOptions {
  maxRetries: number;
  totalTimeout: number;
  retryCodes: Set<number>;
  initialRetryDelayMillis: number;
  retryDelayMultiplier: number;
  maxRetryDelayMillis: number;
}

export type State =
  /**
   * This is the starting state. When the executeQuery starts we try to
   * fetch the query plan from the PreparedStatement object. It is done via a callback
   * If the query plan is expired, it might take time to refresh and the callback
   * won't be called immediately.
   */
  | 'AwaitingQueryPlan'
  /**
   * We may have recieved some data from the server, but no resumeToken has beed reached.
   * This is an important distinction, because before the resumeToken, if the server
   * returns an "expired query plan" error, we can still try to refresh it.
   */
  | 'BeforeFirstResumeToken'
  /**
   * After the first resumeToken has been reached, we can't refresh the query plan,
   * because the schema could have changed in the mean time. This would cause the
   * new rows to be parsed differently than the previous ones. That's why, in this
   * state, we treat the "expired query plan" error as non-retryable.
   */
  | 'AfterFirstResumeToken'
  /**
   * When we need to properly dispose of the* old responseStream and buteBuffer, we
   * enter a "Draining..." state. Depending on what we want to do next, we have
   * DrainAndRefreshQueryPlan - moves to AwaitingQueryPlan after draining completed
   * DrainingBeforeResumeToken - moves to BeforeFirstResumeToken after draining completed
   * DrainingAfterResumeToken - moves to AfterFirstResumeToken after draining completed
   *
   * We want to make a new request only when all requests already written to the Reader
   * by our previous active request stream were processed.
   *
   * For simplicity, we will drop the previous Bigtable stream and ByteBuffer transform
   * and recreate them. We could also keep the ByteBuffer alive, but that would require
   * us to clean up its internal state and still wait for the entire buffer to be
   * read—just one step upstream.
   *
   * Please note that we cannot use gax's built-in streaming retries, as we have no way
   * of informing it that we'd like to wait for an event before retrying. An alternative
   * approach would be to purge all buffers of all streams before making a request, but
   * there is no standard API for that. Additionally, this would not help us with gax,
   * as we cannot traverse all streams upstream of our ByteBuffer to purge their buffers,
   * nor can we rely on implementation details.
   *
   * We cannot simply wait until all events are processed by ByteBuffer's _transform() method,
   * as there might still be events left in ByteBuffer's readable buffer that we do not want
   * to discard.
   *
   * Our solution is to wait until all events in the Reader's writable buffer are processed
   * and use the last resumeToken seen by the Reader to make a new request.
   *
   * We will detach (unpipe) the ByteBuffer from the Reader and wait until all requests
   * written to theReader by the ByteBuffer are processed using the _transform() method.
   * This ensures that all events written before detachment are handled by _transform(),
   * and the last resumption token seen by the Reader is the correct one to use.
   *
   * Thus, we will wait for the buffer to clear before making a new request and use the
   * last resumeToken seen by the Reader to determine the correct token for the retry request.
   *
   * This guarantees that no responses will be lost—everything processed by the
   * Reader's `_transform()` method has been pushed to the caller and won't be discarded.
   * Additionally, no duplicates will occur, as no more responses will be seen by `_transform()`
   * until a new request is made.
   */
  | 'DrainAndRefreshQueryPlan'
  /**
   * Moves to BeforeFirstResumeToken after draining. For more info see 'DrainAndRefreshQueryPlan' state.
   */
  | 'DrainingBeforeResumeToken'
  /**
   * Moves to AfterFirstResumeToken after draining. For more info see 'DrainAndRefreshQueryPlan' state.
   */
  | 'DrainingAfterResumeToken'
  /**
   * This state indicates that the stream has finished without error.
   */
  | 'Finished'
  /**
   * This state indicates that a non-retryable error occured and the stream
   * cannot be recovered.
   */
  | 'Failed';

const DEFAULT_TOTAL_TIMEOUT_MS = 60000;

/**
 * This object handles creating and piping the streams
 * which are used to process the responses from the server.
 * It's main purpose is to make sure that the callerStream, which
 * the user gets as a result of Instance.executeQuery, behaves properly:
 * -  closes in case of a failure
 * -  doesn't close in case of a retryable error.
 *
 *  We create the following streams:
 * responseStream -> byteBuffer -> readerStream -> resultStream
 *
 * The last two (readerStream and resultStream) are connected
 * and returned to the caller - hence called the callerStream.
 *
 * When a request is made responseStream and byteBuffer are created,
 * connected  and piped to the readerStream.
 *
 * On retry, the old responseStream-byteBuffer pair is discarded and a
 * new pair is crated.
 *
 * For more info please refer to the `State` type
 */
export class ExecuteQueryStateMachine {
  private bigtable: Bigtable;
  private callerStream: CallerStream;
  private originalEnd: (chunk?: any, encoding?: any, cb?: () => void) => void;
  private retryOptions: StreamRetryOptions;
  private valuesStream: AbortableDuplex | null;
  private requestParams: any;
  private lastPreparedStatementBytes?: Uint8Array | string;
  private preparedStatement: PreparedStatement;
  private state: State;
  private deadlineTs: number;
  private protoBytesEncoding?: BufferEncoding;
  private numErrors: number;
  private retryTimer: NodeJS.Timeout | null;
  private timeoutTimer: NodeJS.Timeout | null;

  constructor(
    bigtable: Bigtable,
    callerStream: CallerStream,
    preparedStatement: PreparedStatement,
    requestParams: any,
    retryOptions?: Partial<RetryOptions> | null,
    protoBytesEncoding?: BufferEncoding,
  ) {
    this.bigtable = bigtable;
    this.callerStream = callerStream;
    this.originalEnd = callerStream.end.bind(callerStream);
    this.callerStream.end = this.handleCallersEnd.bind(this);
    this.requestParams = requestParams;
    this.retryOptions = this.parseRetryOptions(retryOptions);
    this.deadlineTs = Date.now() + this.retryOptions.totalTimeout;
    this.valuesStream = null;
    this.preparedStatement = preparedStatement;
    this.protoBytesEncoding = protoBytesEncoding;
    this.numErrors = 0;
    this.retryTimer = null;
    this.timeoutTimer = setTimeout(
      this.handleTotalTimeout,
      this.calculateTotalTimeout(),
    );

    this.state = 'AwaitingQueryPlan';
    this.preparedStatement.getData(
      this.handleQueryPlan,
      this.calculateTotalTimeout(),
    );
  }

  private parseRetryOptions = (
    input?: Partial<RetryOptions> | null,
  ): StreamRetryOptions => {
    const rCodes = input?.retryCodes
      ? new Set(input?.retryCodes)
      : RETRYABLE_STATUS_CODES;
    const backoffSettings = input?.backoffSettings;
    const clientTotalTimeout =
      this?.bigtable?.options?.BigtableClient?.clientConfig?.interfaces &&
      this?.bigtable?.options?.BigtableClient?.clientConfig?.interfaces[
        'google.bigtable.v2.Bigtable'
      ]?.methods['ExecuteQuery']?.timeout_millis;
    return {
      maxRetries: backoffSettings?.maxRetries || DEFAULT_RETRY_COUNT,
      totalTimeout:
        backoffSettings?.totalTimeoutMillis ||
        clientTotalTimeout ||
        DEFAULT_TOTAL_TIMEOUT_MS,
      retryCodes: rCodes,
      initialRetryDelayMillis:
        backoffSettings?.initialRetryDelayMillis ||
        DEFAULT_BACKOFF_SETTINGS.initialRetryDelayMillis,
      retryDelayMultiplier:
        backoffSettings?.retryDelayMultiplier ||
        DEFAULT_BACKOFF_SETTINGS.retryDelayMultiplier,
      maxRetryDelayMillis:
        backoffSettings?.maxRetryDelayMillis ||
        DEFAULT_BACKOFF_SETTINGS.maxRetryDelayMillis,
    };
  };

  private calculateTotalTimeout = () => {
    return Math.max(this.deadlineTs - Date.now(), 0);
  };

  private fail = (err: Error) => {
    if (this.state !== 'Failed' && this.state !== 'Finished') {
      this.state = 'Failed';
      this.clearTimers();
      this.callerStream.emit('error', err);
    }
  };

  private createValuesStream = (): AbortableDuplex => {
    const reqOpts: google.bigtable.v2.IExecuteQueryRequest = {
      ...this.requestParams,
      preparedQuery: this.lastPreparedStatementBytes,
      resumeToken: this.callerStream.getLatestResumeToken(),
    };

    const retryOpts = {
      currentRetryAttempt: 0,
      // Handling retries in this client.
      // Options below prevent gax from retrying.
      noResponseRetries: 0,
      shouldRetryFn: () => {
        return false;
      },
    };

    const responseStream = this.bigtable.request({
      client: 'BigtableClient',
      method: 'executeQuery',
      reqOpts,
      gaxOpts: retryOpts,
    });

    const byteBuffer = new ByteBufferTransformer(this.protoBytesEncoding);
    const rowValuesStream = pumpify.obj([responseStream, byteBuffer]);

    let aborted = false;
    const abort = () => {
      if (!aborted) {
        aborted = true;
        responseStream.abort();
      }
    };
    rowValuesStream.abort = abort;

    return rowValuesStream;
  };

  private makeNewRequest = (
    preparedStatementBytes?: Uint8Array | string,
    metadata?: SqlTypes.ResultSetMetadata,
  ) => {
    if (this.valuesStream !== null) {
      // assume old streams were scrached.
      this.fail(
        new Error(
          'Internal error: making a request before streams from the last one was cleaned up.',
        ),
      );
    }

    if (preparedStatementBytes) {
      this.lastPreparedStatementBytes = preparedStatementBytes;
    }
    if (metadata) {
      this.callerStream.updateMetadata(metadata);
    }
    this.valuesStream = this.createValuesStream();

    this.valuesStream
      .on('error', this.handleStreamError)
      .on('data', this.handleStreamData)
      .on('close', this.handleStreamEnd)
      .on('end', this.handleStreamEnd);

    this.valuesStream.pipe(this.callerStream, {end: false});
  };

  private discardOldValueStream = () => {
    if (this.valuesStream) {
      this.valuesStream.abort();
      this.valuesStream.unpipe(this.callerStream);
      this.valuesStream.removeAllListeners('error');
      this.valuesStream.removeAllListeners('data');
      this.valuesStream.removeAllListeners('end');
      this.valuesStream.removeAllListeners('close');
      this.valuesStream.destroy();
      this.valuesStream = null;
    }
  };

  private getNextRetryDelay = (): number => {
    // 0 - 100 ms jitter
    const jitter = Math.floor(Math.random() * 100);
    const calculatedNextRetryDelay =
      this.retryOptions.initialRetryDelayMillis *
        Math.pow(this.retryOptions.retryDelayMultiplier, this.numErrors) +
      jitter;

    return Math.min(
      calculatedNextRetryDelay,
      this.retryOptions.maxRetryDelayMillis,
    );
  };

  private clearTimers = (): void => {
    if (this.retryTimer) {
      clearTimeout(this.retryTimer);
      this.retryTimer = null;
    }
    if (this.timeoutTimer) {
      clearTimeout(this.timeoutTimer);
      this.timeoutTimer = null;
    }
  };

  // Transitions:

  private startNextAttempt = (): void => {
    if (this.state === 'DrainAndRefreshQueryPlan') {
      this.state = 'AwaitingQueryPlan';
      this.preparedStatement.getData(
        this.handleQueryPlan,
        this.calculateTotalTimeout(),
      );
    } else if (this.state === 'DrainingBeforeResumeToken') {
      this.state = 'BeforeFirstResumeToken';
      this.makeNewRequest(this.lastPreparedStatementBytes);
    } else if (this.state === 'DrainingAfterResumeToken') {
      this.state = 'AfterFirstResumeToken';
      this.makeNewRequest(this.lastPreparedStatementBytes);
    } else {
      this.fail(
        new Error(
          `startNextAttempt can't be invoked on a current state ${this.state}`,
        ),
      );
    }
  };

  private handleDrainingDone = (): void => {
    if (
      this.state === 'DrainAndRefreshQueryPlan' ||
      this.state === 'DrainingBeforeResumeToken' ||
      this.state === 'DrainingAfterResumeToken'
    ) {
      this.retryTimer = setTimeout(
        this.startNextAttempt,
        this.getNextRetryDelay(),
      );
    } else {
      this.fail(
        new Error(
          `handleDrainingDone can't be invoked on a current state ${this.state}`,
        ),
      );
    }
  };

  private handleTotalTimeout = (): void => {
    this.discardOldValueStream();
    if (this.retryTimer) {
      clearTimeout(this.retryTimer);
      this.retryTimer = null;
    }
    this.fail(new Error('Deadline exceeded.'));
  };

  private handleStreamError = (err: ServiceError): void => {
    this.discardOldValueStream();
    if (
      this.retryOptions.retryCodes.has(err.code) || // retryable error
      isRstStreamError(err)
    ) {
      // We want to make a new request only when all requests already written to the Reader by our
      // previous active request stream were processed.
      this.numErrors += 1;
      if (this.numErrors <= this.retryOptions.maxRetries) {
        if (this.state === 'AfterFirstResumeToken') {
          this.state = 'DrainingAfterResumeToken';
          this.callerStream.onDrain(this.handleDrainingDone);
        } else if (this.state === 'BeforeFirstResumeToken') {
          this.state = 'DrainingBeforeResumeToken';
          this.callerStream.onDrain(this.handleDrainingDone);
        } else {
          this.fail(
            new Error(
              `Can't handle a stream error in the current state ${this.state}`,
            ),
          );
        }
      } else {
        this.fail(
          new Error(`Maximum retry limit exeeded. Last error: ${err.message}`),
        );
      }
    } else if (isExpiredQueryError(err)) {
      if (this.state === 'AfterFirstResumeToken') {
        this.fail(new Error('Query plan expired during a retry attempt.'));
      } else if (this.state === 'BeforeFirstResumeToken') {
        this.state = 'DrainAndRefreshQueryPlan';
        // If the server returned the "expired query error" we mark it as expired.
        this.preparedStatement.markAsExpired();
        this.callerStream.onDrain(this.handleDrainingDone);
      } else {
        this.fail(
          new Error(
            `Can't handle expired query error in the current state ${this.state}`,
          ),
        );
      }
    } else {
      this.fail(new Error(`Unexpected error: ${err.message}`));
    }
  };

  private handleQueryPlan: PreparedStatementDataCallback = (
    err?: Error,
    preparedStatementBytes?: Uint8Array | string,
    metadata?: SqlTypes.ResultSetMetadata,
  ) => {
    if (this.state === 'AwaitingQueryPlan') {
      if (err) {
        this.numErrors += 1;
        if (this.numErrors <= this.retryOptions.maxRetries) {
          this.preparedStatement.getData(
            this.handleQueryPlan,
            this.calculateTotalTimeout(),
          );
        } else {
          this.fail(
            new Error(
              `Failed to get query plan. Maximum retry limit exceeded. Last error: ${err.message}`,
            ),
          );
        }
      } else {
        this.state = 'BeforeFirstResumeToken';
        this.makeNewRequest(preparedStatementBytes, metadata);
      }
    } else {
      this.fail(
        new Error(
          `handleQueryPlan can't be invoked on a current state ${this.state}`,
        ),
      );
    }
  };

  /**
   * This method is called when the valuesStream emits data.
   * The valuesStream yelds data only after the resume token
   * is recieved, hence the state change.
   */
  private handleStreamData = (data: any) => {
    if (
      this.state === 'BeforeFirstResumeToken' ||
      this.state === 'AfterFirstResumeToken'
    ) {
      this.state = 'AfterFirstResumeToken';
    } else {
      this.fail(
        new Error(
          `Internal Error: recieved data in an invalid state ${this.state}`,
        ),
      );
    }
  };

  private handleStreamEnd = (): void => {
    if (
      this.state === 'AfterFirstResumeToken' ||
      this.state === 'BeforeFirstResumeToken'
    ) {
      this.clearTimers();
      this.state = 'Finished';
      this.originalEnd();
    } else if (this.state === 'Finished') {
      // noop
    } else {
      this.fail(
        new Error(
          `Internal Error: Cannot handle stream end in state: ${this.state}`,
        ),
      );
    }
  };

  /**
   * The caller should be able to call callerStream.end() to stop receiving
   * more rows and cancel the stream prematurely. However this has a side effect
   * the 'end' event will be emitted.
   * We don't want that, because it also gets emitted if the stream ended
   * normally. To tell these two situations apart, we'll overwrite the end
   * function, but save the "original" end() function which will be called
   * on valuesStream.on('end').
   */
  private handleCallersEnd = (
    chunk?: any,
    encoding?: any,
    cb?: () => void,
  ): CallerStream => {
    if (this.state !== 'Failed' && this.state !== 'Finished') {
      this.clearTimers();
      this.discardOldValueStream();
      this.state = 'Finished';
      this.callerStream.close();
    }
    return this.callerStream;
  };
}

export function createCallerStream(
  readerStream: ProtobufReaderTransformer,
  resultStream: ExecuteQueryStreamWithMetadata,
  metadataConsumer: MetadataConsumer,
  setCallerCancelled: (v: boolean) => void,
): CallerStream {
  const callerStream = pumpify.obj([readerStream, resultStream]);
  callerStream.getMetadata = resultStream.getMetadata.bind(resultStream);
  callerStream.updateMetadata = metadataConsumer.consume.bind(metadataConsumer);
  callerStream.getLatestResumeToken = () => readerStream.resumeToken;
  callerStream.onDrain = readerStream.onDrain.bind(readerStream);
  callerStream.close = () => {
    setCallerCancelled(true);
    callerStream.destroy();
  };
  return callerStream;
}
