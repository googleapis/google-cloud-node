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
import {Readable, Transform} from 'stream';
import * as streamEvents from 'stream-events';
import {grpc, CallOptions} from 'google-gax';
import {DeadlineError, isRetryableInternalError} from './transaction-runner';

import {codec, JSONOptions, Json, Field, Value} from './codec';
import {protos} from '@google-cloud/spanner-api';
import google = protos.google;
import {isDefined, isEmpty, isString} from './helper';

const originalDecode = codec.decode;
const originalConvertFieldsToJson = codec.convertFieldsToJson;

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
 * @property {number} [maxResumeRetries=20] Deprecated. This option is no longer
 *     used. Backpressure is now handled natively via Node.js stream flow
 *     control without polling or retry limits.
 * @property {object} [columnsMetadata] An object map that can be used to pass
 * additional properties for each column type which can help in deserializing
 * the data coming from backend. (Eg: We need to pass Proto Function and Enum
 * map to deserialize proto messages and enums, respectively.)
 */
export interface RowOptions {
  json?: boolean;
  jsonOptions?: JSONOptions;
  /**
   * @deprecated Backpressure is now handled natively via Node.js stream flow
   * control without polling or retry limits.
   */
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
 * Row implementation extending Array to provide a shared, non-enumerable
 * toJSON method without per-row closures or Object.setPrototypeOf overhead.
 */
class RowImpl extends Array<Field> implements Row {
  toJSON(options?: JSONOptions): Json {
    return codec.convertFieldsToJson(this, options);
  }
}
Object.defineProperty(RowImpl.prototype, 'constructor', {
  value: Array,
  writable: true,
  configurable: true,
  enumerable: false,
});

/**
 * Creates an array of decoder functions for the specified struct fields.
 *
 * @private
 */
export function createFieldDecoders(
  fields: google.spanner.v1.StructType.Field[],
  options?: RowOptions,
): Function[] {
  const jsonMode = Boolean(options?.json);
  const jsonOptions = options?.jsonOptions;
  const columnsMetadata = options?.columnsMetadata;

  return fields.map(({name, type}) => {
    const columnMetadata =
      columnsMetadata &&
      name !== null &&
      name !== undefined &&
      Object.prototype.hasOwnProperty.call(columnsMetadata, name)
        ? (columnsMetadata as Record<string, object>)[name]
        : undefined;
    if (codec.decode !== originalDecode) {
      return (val: Value) =>
        codec.decode(val, type as google.spanner.v1.Type, columnMetadata);
    }
    return codec.getDecoder(
      type as google.spanner.v1.Type,
      columnMetadata,
      jsonMode ? jsonOptions || {} : undefined,
    );
  });
}

/**
 * Directly creates a plain JSON object from row cell values, bypassing
 * Struct, Row, and WrappedNumber class wrappers when possible.
 *
 * @private
 */
export function createJsonRow(
  fields: google.spanner.v1.StructType.Field[],
  decoders: Function[],
  values: Value[],
  includeNameless?: boolean,
): Json {
  const json: Json = {};
  const len = fields.length;

  for (let i = 0; i < len; i++) {
    const {name} = fields[i];
    if (!name && !includeNameless) {
      continue;
    }
    const fieldName = name || `_${i}`;
    try {
      json[fieldName] = decoders[i](values[i]);
    } catch (e) {
      (e as Error).message = [
        `Serializing column "${fieldName}" encountered an error: ${
          (e as Error).message
        }`,
        'Call row.toJSON({ wrapNumbers: true }) to receive a custom type.',
      ].join(' ');
      throw e;
    }
  }
  return json;
}

/**
 * Converts an array of decoded cell values into a Row.
 *
 * @private
 */
export function createRow(
  fields: google.spanner.v1.StructType.Field[],
  decoders: Function[],
  values: Value[],
): Row {
  const len = fields.length;
  const row = new RowImpl(len);
  for (let i = 0; i < len; i++) {
    row[i] = {
      name: fields[i].name,
      value: decoders[i](values[i]),
    };
  }
  return row;
}

/**
 * Formats raw row values into either a plain JSON object or a Row instance
 * according to the provided RowOptions.
 *
 * @private
 */
export function formatRow(
  fields: google.spanner.v1.StructType.Field[],
  decoders: Function[],
  values: Value[],
  options?: RowOptions,
): Row {
  const jsonMode = Boolean(options?.json);
  const jsonOptions = options?.jsonOptions;
  const isJsonStubbed =
    codec.convertFieldsToJson !== originalConvertFieldsToJson;

  if (jsonMode && !isJsonStubbed) {
    return createJsonRow(
      fields,
      decoders,
      values,
      Boolean(jsonOptions?.includeNameless),
    ) as unknown as Row;
  }

  const row = createRow(fields, decoders, values);
  return jsonMode ? (row.toJSON(jsonOptions) as unknown as Row) : row;
}

/**
 * Directly decodes rows from a PartialResultSet without going through the stream
 * pipeline. Used by the fast-path for queries returning small results in a single chunk.
 *
 * @private
 */
export function decodeRowsDirect(
  chunk: google.spanner.v1.PartialResultSet,
  options?: RowOptions,
  existingFields?: google.spanner.v1.StructType.Field[],
  existingDecoders?: Function[],
): Row[] {
  const fields =
    existingFields ||
    ((chunk.metadata?.rowType?.fields ||
      []) as google.spanner.v1.StructType.Field[]);
  const numFields = fields.length;
  const chunkValues = chunk.values || [];
  const numValues = chunkValues.length;
  if (numFields === 0 || numValues === 0) {
    return [];
  }

  const rowCount = Math.floor(numValues / numFields);
  const rows: Row[] = new Array(rowCount);

  const decoders: Function[] =
    existingDecoders || createFieldDecoders(fields, options);

  const rowValues: Value[] = new Array(numFields);

  for (let rowIndex = 0; rowIndex < rowCount; rowIndex++) {
    const offset = rowIndex * numFields;
    for (let columnIndex = 0; columnIndex < numFields; columnIndex++) {
      rowValues[columnIndex] = GrpcService.decodeValue_(
        chunkValues[offset + columnIndex],
      );
    }
    rows[rowIndex] = formatRow(fields, decoders, rowValues, options);
  }

  return rows;
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
  private _fields!: google.spanner.v1.StructType.Field[];
  private _decoders!: Function[];
  private _options: RowOptions;
  private _pendingValue?: Value;
  private _rowValues?: Value[];
  private _valueIndex: number;
  private _resumeCallback?: () => void;
  private _isFirstChunk = true;
  constructor(options = {}) {
    super({objectMode: true});

    this._options = Object.assign({}, options);
    this._valueIndex = 0;
    this._isFirstChunk = true;
  }
  /**
   * Destroys the stream.
   *
   * @param {Error} [err] Optional error to destroy stream with.
   */
  destroy(err?: Error): this {
    if (this.destroyed) {
      return this;
    }

    this._rowValues = undefined;
    this._resumeCallback = undefined;

    return super.destroy(err);
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
    if (this.destroyed) {
      return;
    }

    this.emit('response', chunk);

    if (chunk.stats) {
      this.emit('stats', chunk.stats);
    }

    if (!this._fields && chunk.metadata) {
      this._fields = chunk.metadata.rowType!
        .fields as google.spanner.v1.StructType.Field[];
      this._decoders = createFieldDecoders(this._fields, this._options);
    }

    let canAcceptMore = true;
    if (!isEmpty(chunk.values)) {
      try {
        canAcceptMore = this._addChunk(chunk);
      } catch (err) {
        next(err as Error);
        return;
      }
    }

    if (chunk.last) {
      if (this._valueIndex !== 0 || this._pendingValue !== undefined) {
        next(
          new Error(
            'Stream received chunk.last=true before row or chunked value was complete.',
          ),
        );
        return;
      }
      this.push(null);
      if (!canAcceptMore) {
        this.emit('paused');
      }
      // Calling next() notifies Node's stream machinery that processing of this
      // chunk is complete on the Writable side of this Transform stream.
      // This is a local, synchronous callback to Node's internal buffer; it does
      // not block the event loop or wait for upstream network I/O or gRPC trailers.
      next();
      return;
    }

    if (canAcceptMore) {
      next();
    } else {
      // Downstream buffer has reached highWaterMark and cannot accept more data
      // at the moment. Hold the completion callback until the downstream consumer
      // drains and Node invokes _read(), resuming the upstream request stream.
      this._resumeCallback = next as () => void;
      this.emit('paused');
    }
  }

  _flush(callback: Function): void {
    if (this._valueIndex !== 0 || this._pendingValue !== undefined) {
      callback(
        new Error(
          'Stream ended prematurely before row or chunked value was complete.',
        ),
      );
      return;
    }
    callback();
  }

  _read(size: number): void {
    if (this._resumeCallback) {
      const callback = this._resumeCallback;
      this._resumeCallback = undefined;
      this.emit('resumed');
      callback();
    }
    super._read(size);
  }

  /**
   * Manages stream chunks, chunked value merging across chunk boundaries,
   * row assembly, and resume token checkpoints.
   *
   * Processing follows 4 distinct stages:
   * 1. Single-chunk fast path: If the entire stream response is in this first chunk,
   *    decode rows directly and bypass incremental chunk buffering.
   * 2. Pending value merge: If the previous chunk ended with an incomplete chunked
   *    value, merge it with the incoming continuation value at chunkValues[0].
   * 3. Chunked value hold: If this chunk ends with a chunked value, hold the tail
   *    value (chunkValues[numValues - 1]) in `this._pendingValue` for the next chunk.
   * 4. Complete value decoding: Iterate from `startIndex` to `endIndex`, decoding
   *    and adding values into row buffers via `_addValue`.
   *
   * @private
   * @param {google.spanner.v1.PartialResultSet} chunk The partial result set.
   * @returns {boolean} Whether downstream can accept more data.
   */
  private _addChunk(chunk: google.spanner.v1.PartialResultSet): boolean {
    const isFirstChunk = this._isFirstChunk;
    this._isFirstChunk = false;

    // Stage 1: Fast path for single-chunk stream responses:
    if (isFirstChunk && chunk.last && !chunk.chunkedValue) {
      return this._addSingleChunk(chunk);
    }

    const chunkValues = chunk.values;
    const numValues = chunkValues.length;
    let startIndex = 0;
    let endIndex = numValues;
    let canAcceptMore = true;

    // Stage 2: Merge pending chunked value from the previous chunk with the
    // incoming continuation value at chunkValues[0].
    if (this._pendingValue !== undefined && numValues > 0) {
      const currentField = this._valueIndex;
      const field = this._fields[currentField];
      const headValue = this._pendingValue;
      const continuationValue = GrpcService.decodeValue_(chunkValues[0]);
      const merged = PartialResultStream.merge(
        field.type as google.spanner.v1.Type,
        headValue,
        continuationValue,
      );

      // We consumed chunkValues[0] as the continuation of the pending value.
      startIndex = 1;

      // If this chunk only had 1 value and is still chunked, the last element
      // of merged remains pending for the next chunk.
      let mergedCount = merged.length;
      if (numValues === 1 && chunk.chunkedValue) {
        mergedCount--;
        this._pendingValue = merged[mergedCount];
      } else {
        this._pendingValue = undefined;
      }

      for (let i = 0; i < mergedCount; i++) {
        if (this.destroyed) {
          return false;
        }
        if (!this._addValue(merged[i]) && canAcceptMore) {
          canAcceptMore = false;
        }
      }
    }

    // Stage 3: If this chunk ends with a chunked value, hold the tail value for
    // merging with the next chunk instead of decoding it into the current row now.
    if (chunk.chunkedValue && numValues > 0) {
      if (numValues > 1 || !startIndex) {
        endIndex = numValues - 1;
        this._pendingValue = GrpcService.decodeValue_(
          chunkValues[numValues - 1],
        );
      }
    }

    // Stage 4: Decode in-place and push complete values into row buffers.
    for (let i = startIndex; i < endIndex; i++) {
      if (this.destroyed) {
        return false;
      }
      const value = GrpcService.decodeValue_(chunkValues[i]);
      if (!this._addValue(value) && canAcceptMore) {
        canAcceptMore = false;
      }
    }

    return canAcceptMore;
  }

  /**
   * Fast-path handler for single-chunk stream responses. Decodes rows directly
   * and pushes them into the stream without incremental chunk buffering.
   *
   * @private
   * @param {google.spanner.v1.PartialResultSet} chunk The partial result set.
   * @returns {boolean} Whether the stream can accept more data.
   */
  private _addSingleChunk(chunk: google.spanner.v1.PartialResultSet): boolean {
    const chunkValues = chunk.values || [];
    if (chunkValues.length % this._fields.length !== 0) {
      throw new Error(
        'Stream received chunk.last=true before row or chunked value was complete.',
      );
    }
    const rows = decodeRowsDirect(
      chunk,
      this._options,
      this._fields,
      this._decoders,
    );
    let canAcceptMore = true;
    for (let i = 0; i < rows.length; i++) {
      if (this.destroyed) {
        return false;
      }
      const accepted = this.push(rows[i]);
      if (!accepted && canAcceptMore) {
        canAcceptMore = false;
      }
    }
    return canAcceptMore;
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
    if (this.destroyed) {
      return false;
    }

    if (!this._rowValues) {
      this._rowValues = new Array(this._fields.length);
    }

    this._rowValues[this._valueIndex++] = value;

    if (this._valueIndex !== this._fields.length) {
      return true;
    }

    this._valueIndex = 0;

    return this.push(
      formatRow(this._fields, this._decoders, this._rowValues, this._options),
    );
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
    if (head.length === 0) {
      return tail;
    }
    if (tail.length === 0) {
      return head;
    }

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
  let lastResumeToken: ResumeToken | undefined;
  let lastRequestStream: Readable | undefined;
  let dataListener:
    ((chunk: google.spanner.v1.PartialResultSet) => void) | undefined;
  let endListener: (() => void) | undefined;
  let errorListener: ((err: grpc.ServiceError) => void) | undefined;
  const startTime = Date.now();
  const timeout = options?.gaxOptions?.timeout ?? Infinity;

  const chunkQueue: google.spanner.v1.PartialResultSet[] = [];
  const partialResultStreamInstance = new PartialResultStream(options);
  const userStream = streamEvents(partialResultStreamInstance);

  let withoutCheckpointCount = 0;
  let safeToRetry = true;
  let receivedLast = false;
  let isDownstreamPaused = false;
  let isStreamEnded = false;
  let isDestroyed = false;

  const drainQueue = (): void => {
    if (isDestroyed || userStream.destroyed) {
      return;
    }

    let lastCheckpointIndex = -1;
    for (let i = chunkQueue.length - 1; i >= 0; i--) {
      if (_hasResumeToken(chunkQueue[i]) || chunkQueue[i].last) {
        lastCheckpointIndex = i;
        break;
      }
    }

    let safeCount = 0;
    if (
      isStreamEnded ||
      receivedLast ||
      !safeToRetry ||
      withoutCheckpointCount > maxQueued
    ) {
      safeCount = chunkQueue.length;
    } else if (lastCheckpointIndex !== -1) {
      safeCount = lastCheckpointIndex + 1;
    }

    while (safeCount > 0 && !isDownstreamPaused && !userStream.destroyed) {
      const chunk = chunkQueue.shift()!;
      safeCount--;
      if (lastCheckpointIndex >= 0) {
        lastCheckpointIndex--;
      } else if (!isStreamEnded && !receivedLast) {
        safeToRetry = false;
      }

      const canAcceptMore = userStream.write(chunk);
      if (!canAcceptMore) {
        isDownstreamPaused = true;
        if (lastRequestStream && !lastRequestStream.isPaused()) {
          lastRequestStream.pause();
        }
        break;
      }
    }

    if (
      (isStreamEnded || receivedLast) &&
      chunkQueue.length === 0 &&
      !userStream.destroyed &&
      userStream.writable &&
      !userStream.writableEnded
    ) {
      userStream.end();
    }
  };

  const handleResume = (): void => {
    isDownstreamPaused = false;
    drainQueue();
    if (
      lastRequestStream &&
      lastRequestStream.isPaused() &&
      !isDownstreamPaused
    ) {
      lastRequestStream.resume();
    }
  };

  userStream.on('paused', () => {
    isDownstreamPaused = true;
    if (lastRequestStream && !lastRequestStream.isPaused()) {
      lastRequestStream.pause();
    }
  });

  userStream.on('resumed', handleResume);
  userStream.on('drain', handleResume);

  const destroyRequestStream = (allowDrain = false): void => {
    if (lastRequestStream) {
      const streamToClean = lastRequestStream;
      lastRequestStream = undefined;
      if (dataListener) {
        streamToClean.removeListener('data', dataListener);
        dataListener = undefined;
      }
      if (endListener) {
        streamToClean.removeListener('end', endListener);
        endListener = undefined;
      }
      if (errorListener) {
        streamToClean.removeListener('error', errorListener);
        errorListener = undefined;
      }
      streamToClean.on('error', () => {});
      if (allowDrain || receivedLast) {
        streamToClean.resume();
      } else {
        streamToClean.destroy();
      }
    }
  };

  const flushAndDestroy = (err: Error): void => {
    isDestroyed = true;
    destroyRequestStream(false);
    if (!userStream.destroyed && userStream.writable) {
      while (chunkQueue.length > 0) {
        const chunk = chunkQueue.shift()!;
        userStream.write(chunk);
      }
    }
    setImmediate(() => userStream.destroy(err));
  };

  const makeRequest = (): void => {
    if (isDestroyed || userStream.destroyed) {
      return;
    }

    lastRequestStream = requestFn(lastResumeToken);

    if (isDownstreamPaused) {
      lastRequestStream.pause();
    }

    dataListener = (chunk: google.spanner.v1.PartialResultSet) => {
      if (receivedLast) {
        return;
      }

      chunkQueue.push(chunk);

      if (chunk.last) {
        receivedLast = true;
        destroyRequestStream(true);
      }

      if (_hasResumeToken(chunk)) {
        lastResumeToken = chunk.resumeToken;
        safeToRetry = true;
        withoutCheckpointCount = 0;
      } else if (!chunk.last) {
        withoutCheckpointCount++;
      }

      drainQueue();
    };

    endListener = () => {
      if (receivedLast) {
        return;
      }
      destroyRequestStream(true);
      isStreamEnded = true;
      drainQueue();
    };

    errorListener = (err: grpc.ServiceError) => {
      if (receivedLast) {
        return;
      }
      destroyRequestStream(false);
      setImmediate(() => retry(err));
    };

    lastRequestStream.on('data', dataListener);
    lastRequestStream.on('end', endListener);
    lastRequestStream.on('error', errorListener);
  };

  const retry = (err: grpc.ServiceError): void => {
    if (isDestroyed || userStream.destroyed) {
      return;
    }

    const elapsed = Date.now() - startTime;
    if (elapsed >= timeout) {
      flushAndDestroy(new DeadlineError(err));
      return;
    }

    if (
      !(
        err.code &&
        (retryableCodes.includes(err.code) || isRetryableInternalError(err))
      ) ||
      !safeToRetry
    ) {
      flushAndDestroy(err);
      return;
    }

    while (
      chunkQueue.length > 0 &&
      !_hasResumeToken(chunkQueue[chunkQueue.length - 1])
    ) {
      chunkQueue.pop();
    }
    withoutCheckpointCount = 0;

    makeRequest();
  };

  userStream.once('reading', makeRequest);
  userStream.once('close', () => {
    isDestroyed = true;
    destroyRequestStream(false);
    chunkQueue.length = 0;
  });

  return userStream;
}

function _hasResumeToken(chunk: google.spanner.v1.PartialResultSet): boolean {
  return isDefined(chunk.resumeToken) && chunk.resumeToken.length > 0;
}
