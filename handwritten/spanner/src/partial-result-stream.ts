/*!
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {common as p} from 'protobufjs';
import {Readable, Transform} from 'stream';
import * as streamEvents from 'stream-events';
import {grpc, CallOptions} from 'google-gax';
import {DeadlineError, isRetryableInternalError} from './transaction-runner';

import {codec, JSONOptions, Json, Field, Value} from './codec';
import {protos} from '@google-cloud/spanner-api';
import google = protos.google;

import {isDefined, isEmpty, isString} from './helper';
import {SpannerRowParser} from './row-parser';

export type ResumeToken = string | Uint8Array;

/**
 * @callback RequestFunction
 * @param {string} [resumeToken] The token used to resume getting results.
 * @returns {Stream}
 */
interface RequestFunction {
  (resumeToken?: ResumeToken): Readable;
}

/**
 * @typedef RowOptions
 * @property {boolean} [json=false] Indicates if the Row objects should be
 *     formatted into JSON.
 * @property {JSONOptions} [jsonOptions] JSON options.
 * @property {number} [maxResumeRetries=20] The maximum number of times that the
 *     stream will retry to push data downstream, when the downstream indicates
 *     that it is not ready for any more data. Increase this value if you
 *     experience 'Stream is still not ready to receive data' errors as a
 *     result of a slow writer in your receiving stream.
 * @property {object} [columnsMetadata] An object map that can be used to pass
 * additional properties for each column type which can help in deserializing
 * the data coming from backend. (Eg: We need to pass Proto Function and Enum
 * map to deserialize proto messages and enums, respectively.)
 */
export interface RowOptions {
  json?: boolean;
  jsonOptions?: JSONOptions;
  maxResumeRetries?: number;
  /**
   * An object where column names as keys and custom objects as corresponding
   * values for deserialization. It's specifically useful for data types like
   * protobuf where deserialization logic is on user-specific code. When provided,
   * the custom object enables deserialization of backend-received column data.
   * If not provided, data remains serialized as buffer for Proto Messages and
   * integer for Proto Enums.
   *
   * @example
   * To obtain Proto Messages and Proto Enums as JSON objects, you must supply
   * additional metadata. This metadata should include the protobufjs-cli
   * generated proto message function and enum object. It encompasses the essential
   * logic for proper data deserialization.
   *
   * Eg: To read data from Proto Columns in json format using DQL, you should pass
   * columnsMetadata where key is the name of the column and value is the protobufjs-cli
   * generated proto message function and enum object.
   *
   *     const query = {
   *       sql: `SELECT SingerId,
   *                    FirstName,
   *                    LastName,
   *                    SingerInfo,
   *                    SingerGenre,
   *                    SingerInfoArray,
   *                    SingerGenreArray
   *             FROM Singers
   *             WHERE SingerId = 6`,
   *       columnsMetadata: {
   *         SingerInfo: music.SingerInfo,
   *         SingerInfoArray: music.SingerInfo,
   *         SingerGenre: music.Genre,
   *         SingerGenreArray: music.Genre,
   *       },
   *     };
   */
  columnsMetadata?: object;
  gaxOptions?: CallOptions;
}

/**
 * By default rows are an Array of values in the form of objects containing
 * `name` and `value` properties.
 *
 * If you prefer plain objects, you can use the {@link Row#toJSON} method.
 * NOTE: If you have duplicate field names only the last field will be present.
 *
 * @typedef {Array.<{name: string, value}>} Row
 */
export interface Row extends Array<Field> {
  /**
   * Converts the Row object into a pojo (plain old JavaScript object).
   *
   * @memberof Row
   * @name toJSON
   *
   * @param {JSONOptions} [options] JSON options.
   * @returns {object}
   */
  toJSON(options?: JSONOptions): Json;
}

/**
 * @callback PartialResultStream~rowCallback
 * @param {Row|object} row The row data.
 */
interface RowCallback {
  (row: Row | Json): void;
}

/**
 * @callback PartialResultStream~statsCallback
 * @param {object} stats The result stats.
 */
interface StatsCallback {
  (stats: google.spanner.v1.ResultSetStats): void;
}

/**
 * @callback PartialResultStream~responseCallback
 * @param {object} response The full API response.
 */
interface ResponseCallback {
  (response: google.spanner.v1.PartialResultSet): void;
}

interface ResultEvents {
  addListener(event: 'data', listener: RowCallback): this;
  addListener(event: 'stats', listener: StatsCallback): this;
  addListener(event: 'response', listener: ResponseCallback): this;

  emit(event: 'data', data: Row | Json): boolean;
  emit(event: 'stats', data: google.spanner.v1.ResultSetStats): boolean;
  emit(event: 'response', data: google.spanner.v1.PartialResultSet): boolean;

  on(event: 'data', listener: RowCallback): this;
  on(event: 'stats', listener: StatsCallback): this;
  on(event: 'response', listener: ResponseCallback): this;

  once(event: 'data', listener: RowCallback): this;
  once(event: 'stats', listener: StatsCallback): this;
  once(event: 'response', listener: ResponseCallback): this;

  prependListener(event: 'data', listener: RowCallback): this;
  prependListener(event: 'stats', listener: StatsCallback): this;
  prependListener(event: 'response', listener: ResponseCallback): this;

  prependOnceListener(event: 'data', listener: RowCallback): this;
  prependOnceListener(event: 'stats', listener: StatsCallback): this;
  prependOnceListener(event: 'response', listener: ResponseCallback): this;
}

/**
 * The PartialResultStream transforms partial result set objects into Row
 * objects.
 *
 * @class
 * @extends {Transform}
 *
 * @param {RowOptions} [options] The row options.
 */
export class PartialResultStream extends Transform implements ResultEvents {
  private _destroyed: boolean;
  private _options: RowOptions;
  private _numPushFailed = 0;
  private _parser: SpannerRowParser;
  constructor(options = {}) {
    super({objectMode: true});

    this._destroyed = false;
    this._options = Object.assign({maxResumeRetries: 20}, options);
    this._parser = new SpannerRowParser(this._options);
  }
  /**
   * Destroys the stream.
   *
   * @param {Error} [err] Optional error to destroy stream with.
   */
  destroy(err?: Error): this {
    if (this._destroyed) {
      return this;
    }

    this._destroyed = true;

    process.nextTick(() => {
      if (err) {
        this.emit('error', err);
      }
      this.emit('close');
    });
    return this;
  }
  /**
   * Processes each chunk.
   *
   * @private
   *
   * @param {object} chunk The partial result set.
   * @param {string} encoding Chunk encoding (Not used in object streams).
   * @param {function} next Function to be called upon completion.
   */
  _transform(
    chunk: google.spanner.v1.PartialResultSet,
    enc: string,
    next: Function,
  ): void {
    this.emit('response', chunk);

    if (chunk.stats) {
      this.emit('stats', chunk.stats);
    }

    try {
      const rows = this._parser.processChunk(chunk);
      let canPush = true;
      for (const row of rows) {
        canPush = this.push(row) && canPush;
      }

      if (!isEmpty(chunk.values)) {
        if (!canPush) {
          this.emit('paused');
        }
      }

      if (chunk.last) {
        this.push(null);
        return;
      }

      if (canPush) {
        next();
      } else {
        const initialPauseMs = 2;
        setTimeout(() => {
          this._tryResume(next, 2 * initialPauseMs);
        }, initialPauseMs);
      }
    } catch (err) {
      next(err as Error);
    }
  }

  private _tryResume(next: Function, timeout: number) {
    // Try to push an empty chunk to check whether more data can be accepted.
    if (this.push(undefined)) {
      this._numPushFailed = 0;
      this.emit('resumed');
      next();
    } else {
      // Downstream returned false indicating that it is still not ready for
      // more data.
      this._numPushFailed++;
      if (this._numPushFailed === this._options.maxResumeRetries) {
        this.destroy(
          new Error(
            `Stream is still not ready to receive data after ${this._numPushFailed} attempts to resume.`,
          ),
        );
        return;
      }
      setTimeout(() => {
        const nextTimeout = Math.min(timeout * 2, 1024);
        this._tryResume(next, nextTimeout);
      }, timeout);
    }
  }

  _resetPendingValues() {
    this._parser.resetPendingValues();
  }
}

/**
 * Rows returned from queries may be chunked.
 */
export function partialResultStream(
  requestFn: RequestFunction,
  options?: RowOptions,
): PartialResultStream {
  const retryableCodes = [grpc.status.UNAVAILABLE];
  const maxQueued = 10;
  let lastResumeToken: ResumeToken;
  const startTime = Date.now();
  const timeout = options?.gaxOptions?.timeout ?? Infinity;

  const partialRSStream = new PartialResultStream(options);
  const userStream = streamEvents(partialRSStream);

  let withoutCheckpointCount = 0;

  // Natively consume the chunks using async iterator and manage retries explicitly,
  // bypassing checkpoint-stream, pumpify, merge-stream, and events-intercept.
  const makeRequest = async (): Promise<void> => {
    let shouldRetry = false;
    let retryError: grpc.ServiceError | undefined;
    let chunkBuffer: google.spanner.v1.PartialResultSet[] = [];

    try {
      if (isDefined(lastResumeToken) && lastResumeToken.length > 0) {
        partialRSStream._resetPendingValues();
      }

      const activeRequestStream = requestFn(lastResumeToken);

      for await (const chunk of activeRequestStream) {
        chunkBuffer.push(chunk);

        const hasToken = _hasResumeToken(chunk);
        if (hasToken) {
          lastResumeToken = chunk.resumeToken;
          withoutCheckpointCount = 0;
        } else {
          withoutCheckpointCount++;
        }

        let shouldFlushQueue = false;
        if (hasToken || chunkBuffer.length > maxQueued) {
          shouldFlushQueue = true;
        }

        if (shouldFlushQueue) {
          for (const bufferedChunk of chunkBuffer) {
            const canContinue = partialRSStream.write(bufferedChunk);
            if (!canContinue) {
              await new Promise<void>(resolve =>
                partialRSStream.once('drain', resolve),
              );
            }
          }
          chunkBuffer = [];
        }
      }

      // If we cleanly exit the loop without throwing, the stream ended successfully.
      for (const bufferedChunk of chunkBuffer) {
        const canContinue = partialRSStream.write(bufferedChunk);
        if (!canContinue) {
          await new Promise<void>(resolve =>
            partialRSStream.once('drain', resolve),
          );
        }
      }
      chunkBuffer = [];
      partialRSStream.end();
    } catch (err: unknown) {
      retryError = err as grpc.ServiceError;
      shouldRetry = true;
    }

    // Process Retry block fully detached from the active await
    if (shouldRetry && retryError) {
      const elapsed = Date.now() - startTime;
      if (elapsed >= timeout) {
        // Unrecoverable. Flush the queue like checkpoint-stream did on error.
        for (const bufferedChunk of chunkBuffer) {
          partialRSStream.write(bufferedChunk);
        }
        userStream.destroy(new DeadlineError(retryError));
        return;
      }

      if (
        !(
          retryError.code &&
          (retryableCodes.includes(retryError.code) ||
            isRetryableInternalError(retryError))
        ) ||
        withoutCheckpointCount > maxQueued
      ) {
        // Unrecoverable. Flush the queue like checkpoint-stream did on error.
        for (const bufferedChunk of chunkBuffer) {
          partialRSStream.write(bufferedChunk);
        }
        userStream.destroy(retryError);
        return;
      }

      // Safe to retry
      // chunkBuffer is gracefully dropped out of scope (similar to .reset()),
      // preventing duplicate rows from being emitted when Spanner replays the un-checkpointed chunks!
      setImmediate(() => makeRequest());
    }
  };

  userStream.once('reading', makeRequest);

  return userStream as PartialResultStream;
}

function _hasResumeToken(chunk: google.spanner.v1.PartialResultSet): boolean {
  return isDefined(chunk.resumeToken) && chunk.resumeToken.length > 0;
}
