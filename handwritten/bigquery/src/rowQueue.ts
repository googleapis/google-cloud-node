/*!
 * Copyright 2022 Google LLC. All Rights Reserved.
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

import * as common from '@google-cloud/common';
import * as extend from 'extend';
import {randomUUID} from 'crypto';
import {RequestCallback, Table, InsertStreamOptions} from '.';
import {GoogleErrorBody} from '@google-cloud/common/build/src/util';
import bigquery from './types';
import {BATCH_LIMITS, RowBatch} from './rowBatch';
import {Stream} from 'stream';
import {RowBatchOptions, InsertRowsOptions, RowMetadata} from './table';

export interface MaxInsertOptions {
  maxOutstandingRows: number;
  maxOutstandingBytes: number;
  maxDelayMillis: number;
}

export const defaultOptions: MaxInsertOptions = {
  // The maximum number of rows we'll batch up for insert().
  maxOutstandingRows: 300,

  // The maximum size of the total batched up rows for insert().
  maxOutstandingBytes: 9 * 1024 * 1024,

  // The maximum time we'll wait to send batched rows, in milliseconds.
  maxDelayMillis: 10000,
};

export type InsertRowsStreamResponse = bigquery.ITableDataInsertAllResponse;

export type InsertRowsCallback = RequestCallback<
  bigquery.ITableDataInsertAllResponse | bigquery.ITable
>;
export interface InsertRow {
  insertId?: string;
  json?: bigquery.IJsonObject;
}

export type TableRow = bigquery.ITableRow;
export interface PartialInsertFailure {
  message: string;
  reason: string;
  row: RowMetadata;
}

/**
 * Standard row queue used for inserting rows.
 *
 *
 * @param {Table} table The table.
 * @param {Duplex} dup Row stream.
 * @param {InsertStreamOptions} options Insert and batch options.
 */
export class RowQueue {
  table: Table;
  stream: Stream;
  insertRowsOptions: InsertRowsOptions = {};
  batch: RowBatch;
  batchOptions?: RowBatchOptions;
  inFlight: boolean;
  pending?: ReturnType<typeof setTimeout>;
  constructor(table: Table, dup: Stream, options?: InsertStreamOptions) {
    this.table = table;
    this.stream = dup;
    this.inFlight = false;

    const opts = typeof options === 'object' ? options : {};

    if (opts.insertRowsOptions) {
      this.insertRowsOptions = opts.insertRowsOptions;
    } else {
      this.insertRowsOptions = {};
    }
    if (opts.batchOptions) {
      this.setOptions(opts.batchOptions);
    } else {
      this.setOptions();
    }

    this.batch = new RowBatch(this.batchOptions!);
  }

  /**
   * Adds a row to the queue.
   *
   * @param {RowMetadata} row The row to insert.
   * @param {InsertRowsCallback} callback The insert callback.
   */
  add(row: RowMetadata, callback: InsertRowsCallback): void {
    if (!this.insertRowsOptions.raw) {
      row = {
        json: Table.encodeValue_(row)!,
      };

      if (this.insertRowsOptions.createInsertId !== false) {
        row.insertId = randomUUID();
      }
    }

    if (!this.batch.canFit(row)) {
      this.insert();
    }
    this.batch.add(row, callback);

    if (this.batch.isFull()) {
      this.insert();
    } else if (!this.pending) {
      const {maxMilliseconds} = this.batchOptions!;
      this.pending = setTimeout(() => {
        this.insert();
      }, maxMilliseconds);
    }
  }
  /**
   * Cancels any pending inserts and calls _insert immediately.
   */
  insert(callback?: InsertRowsCallback): void {
    const {rows, callbacks} = this.batch;

    this.batch = new RowBatch(this.batchOptions!);

    if (this.pending) {
      clearTimeout(this.pending);
      delete this.pending;
    }
    if (rows.length > 0) {
      this._insert(rows, callbacks, callback);
    }
  }

  /**
   * Accepts a batch of rows and inserts them into table.
   *
   * @param {object[]} rows The rows to insert.
   * @param {InsertCallback[]} callbacks The corresponding callback functions.
   * @param {function} [callback] Callback to be fired when insert is done.
   */
  _insert(
    rows: RowMetadata | RowMetadata[],
    callbacks: InsertRowsCallback[],
    cb?: InsertRowsCallback,
  ): void {
    const json = extend(true, {}, this.insertRowsOptions, {rows});

    delete json.createInsertId;
    delete json.partialRetries;
    delete json.raw;

    this.table.request(
      {
        method: 'POST',
        uri: '/insertAll',
        json,
      },
      (err, resp) => {
        const partialFailures = (resp?.insertErrors || []).map(
          (insertError: GoogleErrorBody) => {
            return {
              errors: insertError.errors!.map(error => {
                return {
                  message: error.message,
                  reason: error.reason,
                };
              }),
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              row: rows[(insertError as any).index],
            };
          },
        );

        if (partialFailures.length > 0) {
          err = new common.util.PartialFailureError({
            errors: partialFailures,
            response: resp,
          } as GoogleErrorBody);

          callbacks.forEach(callback => callback!(err, resp));
          this.stream.emit('error', err);
        } else {
          callbacks.forEach(callback => callback!(err, resp));
          this.stream.emit('response', resp);
          cb?.(err, resp);
        }
        cb?.(err, resp);
      },
    );
  }

  /**
   * Sets the batching options.
   *
   *
   * @param {RowBatchOptions} [options] The batching options.
   */
  setOptions(options = {} as RowBatchOptions): void {
    const defaults = this.getOptionDefaults();

    const {maxBytes, maxRows, maxMilliseconds} = extend(
      true,
      defaults,
      options,
    );

    this.batchOptions = {
      maxBytes: Math.min(maxBytes, BATCH_LIMITS.maxBytes),
      maxRows: Math.min(maxRows!, BATCH_LIMITS.maxRows),
      maxMilliseconds: maxMilliseconds,
    };
  }

  getOptionDefaults(): RowBatchOptions {
    // Return a unique copy to avoid shenanigans.
    const defaults: RowBatchOptions = {
      maxBytes: defaultOptions.maxOutstandingBytes,
      maxRows: defaultOptions.maxOutstandingRows,
      maxMilliseconds: defaultOptions.maxDelayMillis,
    };
    return defaults;
  }
}
