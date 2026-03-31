// Copyright 2018 Google LLC
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

import {Transform, TransformOptions} from 'stream';
import {Bytes, Mutation} from './mutation';
import {TableUtils} from './utils/table';

export type Value = string | number | boolean | Uint8Array;

export enum DataEvent {
  LAST_ROW_KEY_UPDATE,
}

export interface Chunk {
  rowContents: Value;
  commitRow: boolean;
  resetRow: boolean;
  rowKey?: string | Bytes;
  familyName?: {value: string};
  qualifier?: Qualifier | {value: Value};
  timestampMicros?: number | Long;
  labels?: string[];
  value?: string | Buffer;
  valueSize?: number;
}
export interface Data {
  chunks: Chunk[];
  lastScannedRowKey?: Buffer;
}
export interface Family {
  [qualifier: string]: Qualifier[];
}
export interface Qualifier {
  value?: string | Buffer;
  labels?: string[];
  timestamp?: number | Long;
  size?: number;
}
export interface Row {
  key?: Value;
  data?: {[index: string]: Family};
}
export interface TransformErrorProps {
  message: string;
  chunk: Chunk | null;
}
export interface ChunkPushLastScannedRowData {
  eventType: DataEvent.LAST_ROW_KEY_UPDATE;
  lastScannedRowKey?: string;
}

export type ChunkPushData = Row | ChunkPushLastScannedRowData;

class TransformError extends Error {
  constructor(props: TransformErrorProps) {
    super();
    this.name = 'TransformError';
    this.message = `${props.message}: ${JSON.stringify(props.chunk)}`;
  }
}

/**
 * Enum for chunk formatter Row state.
 * NEW_ROW: initial state or state after commitRow or resetRow
 * ROW_IN_PROGRESS: state after first valid chunk without commitRow or resetRow
 * CELL_IN_PROGRESS: state when valueSize > 0(partial cell)
 */
export enum RowStateEnum {
  NEW_ROW = 1,
  ROW_IN_PROGRESS = 2,
  CELL_IN_PROGRESS = 3,
}

/**
 * ChunkTransformer formats all incoming chunks in to row
 * keeps all intermediate state until end of stream.
 * Should use new instance for each request.
 */
export class ChunkTransformer extends Transform {
  options: TransformOptions;
  _destroyed: boolean;
  lastRowKey?: Value;
  state?: number;
  row?: Row;
  family?: Family;
  qualifiers?: Qualifier[];
  qualifier?: Qualifier;
  constructor(options: TransformOptions = {}) {
    options.objectMode = true; // forcing object mode
    super(options);
    this.options = options;
    this._destroyed = false;
    this.lastRowKey = undefined;
    this.reset();
  }

  /**
   * called at end of the stream.
   * @public
   * @param {callback} cb callback will be called with error if there is any uncommitted row
   */
  _flush(cb: Function): void {
    if (typeof this.row!.key !== 'undefined') {
      this.destroy(
        new TransformError({
          message: 'Response ended with pending row without commit',
          chunk: null,
        }),
      );
      return;
    }
    cb();
  }

  /**
   * transform the readrowsresponse chunks into friendly format. Chunks contain
   * 3 properties:
   *
   * `rowContents` The row contents, this essentially is all data pertaining
   *     to a single family.
   *
   * `commitRow` This is a boolean telling us the all previous chunks for this
   *     row are ok to consume.
   *
   * `resetRow` This is a boolean telling us that all the previous chunks are to
   *     be discarded.
   *
   * @public
   *
   * @param {object} data readrows response containing array of chunks.
   * @param {object} [_encoding] encoding options.
   * @param {callback} next callback will be called once data is processed, with error if any error in processing
   */
  _transform(data: Data, _encoding: string, next: Function): void {
    for (const chunk of data.chunks!) {
      switch (this.state) {
        case RowStateEnum.NEW_ROW:
          this.processNewRow(chunk);
          break;
        case RowStateEnum.ROW_IN_PROGRESS:
          this.processRowInProgress(chunk);
          break;
        case RowStateEnum.CELL_IN_PROGRESS:
          this.processCellInProgress(chunk);
          break;
        default:
          break;
      }
      if (this._destroyed) {
        next();
        return;
      }
    }
    if (data.lastScannedRowKey && data.lastScannedRowKey.length > 0) {
      this.lastRowKey = Mutation.convertFromBytes(
        data.lastScannedRowKey as Bytes,
        {
          userOptions: this.options,
        },
      );
      /**
       * Push an event that will update the lastRowKey in the user stream after
       * all rows ahead of this event have reached the user stream. This will
       * ensure that a retry excludes the lastScannedRow as this is required
       * for the TestReadRows_Retry_LastScannedRow conformance test to pass. It
       * is important to use a 'data' event to update the last row key in order
       * to allow all the data queued ahead of this event to reach the user
       * stream first.
       */
      this.push({
        eventType: DataEvent.LAST_ROW_KEY_UPDATE,
        lastScannedRowKey: this.lastRowKey,
      });
    }
    next();
  }

  /**
   * called when stream is destroyed.
   * @public
   * @param {error} err error if any
   */
  destroy(err?: Error): this {
    if (this._destroyed) return this;
    this._destroyed = true;
    if (err) {
      this.emit('error', err);
    }
    this.emit('close');
    return this;
  }

  /**
   * Resets state of formatter
   * @private
   */
  reset(): void {
    this.family = {} as Family;
    this.qualifiers = [];
    this.qualifier = {};
    this.row = {};
    this.state = RowStateEnum.NEW_ROW;
  }

  /**
   * sets lastRowkey and calls reset when row is committed.
   * @private
   */
  commit(): void {
    const row = this.row;
    this.reset();
    this.lastRowKey = row!.key;
  }

  /**
   * Validates valuesize and commitrow in a chunk
   * @private
   * @param {chunk} chunk chunk to validate for valuesize and commitRow
   */
  validateValueSizeAndCommitRow(chunk: Chunk): void {
    if (chunk.valueSize! > 0 && chunk.commitRow) {
      this.destroy(
        new TransformError({
          message: 'A row cannot be have a value size and be a commit row',
          chunk,
        }),
      );
    }
  }

  /**
   * Validates resetRow condition for chunk
   * @private
   * @param {chunk} chunk chunk to validate for resetrow
   */
  validateResetRow(chunk: Chunk): void {
    const containsData =
      (chunk.rowKey && chunk.rowKey.length !== 0) ||
      chunk.familyName ||
      chunk.qualifier ||
      (chunk.value && chunk.value.length !== 0) ||
      // timestampMicros is an int64 in the protobuf definition,
      // which can be either a number or an instance of Long.
      // If it's a number...
      (typeof chunk.timestampMicros === 'number' &&
        chunk.timestampMicros! > 0) ||
      // If it's an instance of Long...
      (typeof chunk.timestampMicros === 'object' &&
        'compare' in chunk.timestampMicros &&
        typeof chunk.timestampMicros.compare === 'function' &&
        chunk.timestampMicros.compare(0) === 1);
    if (chunk.resetRow && containsData) {
      this.destroy(
        new TransformError({
          message: 'A reset should have no data',
          chunk,
        }),
      );
    }
  }

  /**
   * Validates state for new row.
   * @private
   * @param {chunk} chunk chunk to validate
   * @param {newRowKey} newRowKey newRowKey of the new row
   */
  validateNewRow(chunk: Chunk, newRowKey: string | Buffer): void {
    const row = this.row;
    const lastRowKey = this.lastRowKey;
    let errorMessage: string | undefined;

    if (typeof row!.key !== 'undefined') {
      errorMessage = 'A new row cannot have existing state';
    } else if (
      typeof chunk.rowKey === 'undefined' ||
      chunk.rowKey.length === 0 ||
      newRowKey.length === 0
    ) {
      errorMessage = 'A row key must be set';
    } else if (chunk.resetRow) {
      errorMessage = 'A new row cannot be reset';
    } else if (lastRowKey === newRowKey) {
      errorMessage = 'A commit happened but the same key followed';
    } else if (
      typeof lastRowKey !== 'undefined' &&
      TableUtils.lessThanOrEqualTo(newRowKey as string, lastRowKey as string)
    ) {
      errorMessage = 'A row key must be strictly increasing';
    } else if (!chunk.familyName) {
      errorMessage = 'A family must be set';
    } else if (chunk.qualifier === null || chunk.qualifier === undefined) {
      errorMessage = 'A column qualifier must be set';
    }
    if (errorMessage) {
      this.destroy(new TransformError({message: errorMessage, chunk}));
      return;
    }
    this.validateValueSizeAndCommitRow(chunk);
  }

  /**
   * Validates state for rowInProgress
   * @private
   * @param {chunk} chunk chunk to validate
   */
  validateRowInProgress(chunk: Chunk): void {
    const row = this.row;
    if (chunk.rowKey && chunk.rowKey.length) {
      const newRowKey = Mutation.convertFromBytes(chunk.rowKey as Bytes, {
        userOptions: this.options,
      });
      const oldRowKey = row!.key || '';
      if (
        newRowKey &&
        chunk.rowKey &&
        (newRowKey as string).length !== 0 &&
        newRowKey.toString() !== oldRowKey.toString()
      ) {
        this.destroy(
          new TransformError({
            message: 'A commit is required between row keys',
            chunk,
          }),
        );
        return;
      }
    }
    if (
      chunk.familyName &&
      (chunk.qualifier === null || chunk.qualifier === undefined)
    ) {
      this.destroy(
        new TransformError({
          message: 'A qualifier must be specified',
          chunk,
        }),
      );
      return;
    }
    this.validateResetRow(chunk);
    this.validateValueSizeAndCommitRow(chunk);
  }

  /**
   * Validates chunk for cellInProgress state.
   * @private
   * @param {chunk} chunk chunk to validate
   */
  validateCellInProgress(chunk: Chunk): void {
    this.validateResetRow(chunk);
    this.validateValueSizeAndCommitRow(chunk);
  }

  /**
   * Moves to next state in processing.
   * @private
   * @param {chunk} chunk chunk in process
   */
  moveToNextState(chunk: Chunk): void {
    const row = this.row;
    if (chunk.commitRow) {
      this.push(row);
      this.commit();
      this.lastRowKey = row!.key;
    } else {
      if (chunk.valueSize! > 0) {
        this.state = RowStateEnum.CELL_IN_PROGRESS;
      } else {
        this.state = RowStateEnum.ROW_IN_PROGRESS;
      }
    }
  }

  /**
   * Process chunk when in NEW_ROW state.
   * @private
   * @param {chunks} chunk chunk to process
   */
  processNewRow(chunk: Chunk): void {
    const newRowKey = Mutation.convertFromBytes(chunk.rowKey! as Bytes, {
      userOptions: this.options,
    }) as string;
    this.validateNewRow(chunk, newRowKey);
    if (chunk.familyName && chunk.qualifier) {
      const row = this.row!;
      row.key = newRowKey;
      row.data = {};
      this.family = row.data[chunk.familyName.value] = {} as Family;
      const qualifierName = Mutation.convertFromBytes(
        chunk.qualifier.value as Bytes,
        {
          userOptions: this.options,
        },
      );
      this.qualifiers = this.family[qualifierName as {} as string] = [];
      this.qualifier = {
        value: Mutation.convertFromBytes(chunk.value! as Bytes, {
          userOptions: this.options,
          isPossibleNumber: true,
        }) as string,
        labels: chunk.labels,
        timestamp: chunk.timestampMicros,
      };
      this.qualifiers.push(this.qualifier);
      this.moveToNextState(chunk);
    }
  }

  /**
   * Process chunk when in ROW_IN_PROGRESS state.
   * @private
   * @param {chunk} chunk chunk to process
   */
  processRowInProgress(chunk: Chunk): void {
    this.validateRowInProgress(chunk);
    if (chunk.resetRow) {
      return this.reset();
    }
    const row = this.row!;
    if (chunk.familyName) {
      this.family = row.data![chunk.familyName.value] =
        row.data![chunk.familyName.value] || {};
    }
    if (chunk.qualifier) {
      const qualifierName = Mutation.convertFromBytes(
        chunk.qualifier.value as Bytes,
        {
          userOptions: this.options,
        },
      ) as string;
      this.qualifiers = this.family![qualifierName] =
        this.family![qualifierName] || [];
    }
    this.qualifier = {
      value: Mutation.convertFromBytes(chunk.value! as Bytes, {
        userOptions: this.options,
        isPossibleNumber: true,
      }) as string,
      labels: chunk.labels,
      timestamp: chunk.timestampMicros,
    };
    this.qualifiers!.push(this.qualifier);
    this.moveToNextState(chunk);
  }

  /**
   * Process chunk when in CELl_IN_PROGRESS state.
   * @private
   * @param {chunk} chunk chunk to process
   */
  processCellInProgress(chunk: Chunk): void {
    this.validateCellInProgress(chunk);
    if (chunk.resetRow) {
      return this.reset();
    }
    const chunkQualifierValue = Mutation.convertFromBytes(
      chunk.value! as Bytes,
      {
        userOptions: this.options,
      },
    );

    if (
      chunkQualifierValue instanceof Buffer &&
      this.qualifier!.value instanceof Buffer
    ) {
      this.qualifier!.value = Buffer.concat([
        this.qualifier!.value,
        chunkQualifierValue,
      ]);
    } else {
      (this.qualifier!.value as string) += chunkQualifierValue;
    }
    this.moveToNextState(chunk);
  }
}
