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

import {GrpcService} from './common-grpc/service';
import * as checkpointStream from 'checkpoint-stream';
import * as eventsIntercept from 'events-intercept';
import mergeStream = require('merge-stream');
import {common as p} from 'protobufjs';
import {Readable, Transform} from 'stream';
import * as streamEvents from 'stream-events';
import {grpc, CallOptions} from 'google-gax';
import {DeadlineError, isRetryableInternalError} from './transaction-runner';

import {codec, JSONOptions, Json, Field, Value} from './codec';
import {google} from '../protos/protos';
import * as stream from 'stream';
import {isDefined, isEmpty, isString} from './helper';

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
  private _fields!: google.spanner.v1.StructType.Field[];
  private _options: RowOptions;
  private _pendingValue?: p.IValue;
  private _pendingValueForResume?: p.IValue;
  private _values: p.IValue[];
  private _numPushFailed = 0;
  constructor(options = {}) {
    super({objectMode: true});

    this._destroyed = false;
    this._options = Object.assign({maxResumeRetries: 20}, options);
    this._values = [];
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

    if (!this._fields && chunk.metadata) {
      this._fields = chunk.metadata.rowType!
        .fields as google.spanner.v1.StructType.Field[];
    }

    let res = true;
    if (!isEmpty(chunk.values)) {
      res = this._addChunk(chunk);
    }

    if (chunk.last) {
      this.push(null);
      return;
    }

    if (res) {
      next();
    } else {
      // Wait a little before we push any more data into the pipeline as a
      // component downstream has indicated that a break is needed. Pause the
      // request stream to prevent it from filling up the buffer while we are
      // waiting.
      // The stream will initially pause for 2ms, and then double the pause time
      // for each new pause.
      const initialPauseMs = 2;
      setTimeout(() => {
        this._tryResume(next, 2 * initialPauseMs);
      }, initialPauseMs);
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
    if (this._pendingValueForResume) {
      this._pendingValue = this._pendingValueForResume;
    } else {
      delete this._pendingValue;
    }
  }

  /**
   * Manages any chunked values.
   *
   * @private
   *
   * @param {object} chunk The partial result set.
   */
  private _addChunk(chunk: google.spanner.v1.PartialResultSet): boolean {
    const values: Value[] = chunk.values.map(GrpcService.decodeValue_);

    // If we have a chunk to merge, merge the values now.
    if (this._pendingValue) {
      const currentField = this._values.length % this._fields.length;
      const field = this._fields[currentField];
      const merged = PartialResultStream.merge(
        field.type as google.spanner.v1.Type,
        this._pendingValue,
        values.shift(),
      );

      values.unshift(...merged);
      delete this._pendingValue;
    }

    // If the chunk is chunked, store the last value for merging with the next
    // chunk to be processed.
    if (chunk.chunkedValue) {
      this._pendingValue = values.pop();
      if (_hasResumeToken(chunk)) {
        this._pendingValueForResume = this._pendingValue;
      }
    } else if (_hasResumeToken(chunk)) {
      delete this._pendingValueForResume;
    }

    let res = true;
    values.forEach(value => {
      res = this._addValue(value) && res;
      if (!res) {
        this.emit('paused');
      }
    });
    return res;
  }
  /**
   * Manages complete values, pushing a completed row into the stream once all
   * values have been received.
   *
   * @private
   *
   * @param {*} value The complete value.
   */
  private _addValue(value: Value): boolean {
    const values = this._values;

    values.push(value);

    if (values.length !== this._fields.length) {
      return true;
    }

    this._values = [];

    const row: Row = this._createRow(values);

    if (this._options.json) {
      return this.push(row.toJSON(this._options.jsonOptions));
    }

    return this.push(row);
  }
  /**
   * Converts an array of values into a row.
   *
   * @private
   *
   * @param {Array.<*>} values The row values.
   * @returns {Row}
   */
  private _createRow(values: Value[]): Row {
    const fields = values.map((value, index) => {
      const {name, type} = this._fields[index];
      const columnMetadata = this._options.columnsMetadata?.[name];
      return {
        name,
        value: codec.decode(
          value,
          type as google.spanner.v1.Type,
          columnMetadata,
        ),
      };
    });

    Object.defineProperty(fields, 'toJSON', {
      value: (options?: JSONOptions): Json => {
        return codec.convertFieldsToJson(fields, options);
      },
    });

    return fields as Row;
  }
  /**
   * Attempts to merge chunked values together.
   *
   * @static
   * @private
   *
   * @param {object} type The value type.
   * @param {*} head The head of the combined value.
   * @param {*} tail The tail of the combined value.
   * @returns {Array.<*>}
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static merge(
    type: google.spanner.v1.Type,
    head: Value,
    tail: Value,
  ): Value[] {
    if (
      type.code === google.spanner.v1.TypeCode.ARRAY ||
      type.code === 'ARRAY' ||
      type.code === google.spanner.v1.TypeCode.STRUCT ||
      type.code === 'STRUCT'
    ) {
      if (head === null || tail === null) {
        return [head, tail];
      }
      return [PartialResultStream.mergeLists(type, head, tail)];
    }

    if (isString(head) && isString(tail)) {
      return [head + tail];
    }

    return [head, tail];
  }
  /**
   * Attempts to merge chunked lists together.
   *
   * @static
   * @private
   *
   * @param {object} type The list type.
   * @param {Array.<*>} head The beginning of the list.
   * @param {Array.<*>} tail The end of the list.
   * @returns {Array.<*>}
   */
  static mergeLists(
    type: google.spanner.v1.Type,
    head: Value[],
    tail: Value[],
  ): Value[] {
    let listType: google.spanner.v1.Type;

    if (
      type.code === 'ARRAY' ||
      type.code === google.spanner.v1.TypeCode.ARRAY
    ) {
      listType = type.arrayElementType as google.spanner.v1.Type;
    } else {
      listType = type.structType!.fields![head.length - 1]
        .type as google.spanner.v1.Type;
    }

    const merged = PartialResultStream.merge(
      listType,
      head.pop(),
      tail.shift(),
    );

    return [...head, ...merged, ...tail];
  }
}

/**
 * Rows returned from queries may be chunked, requiring them to be stitched
 * together. This function returns a stream that will properly assemble these
 * rows, as well as retry after an error. Rows are only emitted if they hit a
 * "checkpoint", which is when a `resumeToken` is returned from the API. Without
 * that token, it's unsafe for the query to be retried, as we wouldn't want to
 * emit the same data multiple times.
 *
 * @private
 *
 * @param {RequestFunction} requestFn The function that makes an API request. It
 *     will receive one argument, `resumeToken`, which should be used however is
 *     necessary to send to the API for additional requests.
 * @param {RowOptions} [options] Options for formatting rows.
 * @returns {PartialResultStream}
 */
export function partialResultStream(
  requestFn: RequestFunction,
  options?: RowOptions,
): PartialResultStream {
  const retryableCodes = [grpc.status.UNAVAILABLE];
  const maxQueued = 10;
  let lastResumeToken: ResumeToken;
  let lastRequestStream: Readable;
  const startTime = Date.now();
  const timeout = options?.gaxOptions?.timeout ?? Infinity;

  // mergeStream allows multiple streams to be connected into one. This is good;
  // if we need to retry a request and pipe more data to the user's stream.
  // We also add an additional stream that can be used to flush any remaining
  // items in the checkpoint stream that have been received, and that did not
  // contain a resume token.
  const requestsStream = mergeStream();
  const flushStream = new stream.PassThrough({objectMode: true});
  requestsStream.add(flushStream);
  const partialRSStream = new PartialResultStream(options);
  const userStream = streamEvents(partialRSStream);
  // We keep track of the number of PartialResultSets that did not include a
  // resume token, as that is an indication whether it is safe to retry the
  // stream halfway.
  let withoutCheckpointCount = 0;
  const batchAndSplitOnTokenStream = checkpointStream.obj({
    maxQueued,
    isCheckpointFn: (chunk: google.spanner.v1.PartialResultSet): boolean => {
      const withCheckpoint = _hasResumeToken(chunk);
      if (withCheckpoint) {
        withoutCheckpointCount = 0;
      } else {
        withoutCheckpointCount++;
      }
      return withCheckpoint;
    },
  });

  // This listener ensures that the last request that executed successfully
  // after one or more retries will end the requestsStream.
  const endListener = () => {
    setImmediate(() => {
      // Push a fake PartialResultSet without any values but with a resume token
      // into the stream to ensure that the checkpoint stream is emptied, and
      // then push `null` to end the stream.
      flushStream.push({resumeToken: '_'});
      flushStream.push(null);
      requestsStream.end();
    });
  };
  const makeRequest = (): void => {
    if (isDefined(lastResumeToken) && lastResumeToken.length > 0) {
      partialRSStream._resetPendingValues();
    }
    lastRequestStream = requestFn(lastResumeToken);
    lastRequestStream.on('end', endListener);
    requestsStream.add(lastRequestStream);
  };

  const retry = (err: grpc.ServiceError): void => {
    const elapsed = Date.now() - startTime;
    if (elapsed >= timeout) {
      // The timeout has reached so this will flush any rows the
      // checkpoint stream has queued. After that, we will destroy the
      // user's stream with the Deadline exceeded error.
      setImmediate(() =>
        batchAndSplitOnTokenStream.destroy(new DeadlineError(err)),
      );
      return;
    }

    if (
      !(
        err.code &&
        (retryableCodes!.includes(err.code) || isRetryableInternalError(err))
      ) ||
      // If we have received too many chunks without a resume token, it is not
      // safe to retry.
      withoutCheckpointCount > maxQueued
    ) {
      // This is not a retryable error so this will flush any rows the
      // checkpoint stream has queued. After that, we will destroy the
      // user's stream with the same error.
      setImmediate(() => batchAndSplitOnTokenStream.destroy(err));
      return;
    }

    if (lastRequestStream) {
      lastRequestStream.removeListener('end', endListener);
      lastRequestStream.destroy();
    }
    // Delay the retry until all the values that are already in the stream
    // pipeline have been handled. This ensures that the checkpoint stream is
    // reset to the correct point. Calling .reset() directly here could cause
    // any values that are currently in the pipeline and that have not been
    // handled yet, to be pushed twice into the entire stream.
    setImmediate(() => {
      // Empty queued rows on the checkpoint stream (will not emit them to user).
      batchAndSplitOnTokenStream.reset();
      makeRequest();
    });
  };

  userStream.once('reading', makeRequest);
  eventsIntercept.patch(requestsStream);

  // need types for events-intercept
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (requestsStream as any).intercept('error', err =>
    // Retry __after__ all pending data has been processed to ensure that the
    // checkpoint stream is reset at the correct position.
    setImmediate(() => retry(err)),
  );

  return (
    requestsStream
      .pipe(batchAndSplitOnTokenStream)
      // If we get this error, the checkpoint stream has flushed any rows
      // it had queued. We can now destroy the user's stream, as our retry
      // attempts are over.
      .on('error', (err: Error) => userStream.destroy(err))
      .on('checkpoint', (row: google.spanner.v1.PartialResultSet) => {
        lastResumeToken = row.resumeToken;
      })
      .pipe(userStream)
      .on('paused', () => requestsStream.pause())
      .on('resumed', () => requestsStream.resume())
  );
}

function _hasResumeToken(chunk: google.spanner.v1.PartialResultSet): boolean {
  return isDefined(chunk.resumeToken) && chunk.resumeToken.length > 0;
}
