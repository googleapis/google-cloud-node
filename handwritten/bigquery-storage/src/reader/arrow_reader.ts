// Copyright 2024 Google LLC
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

import {ResourceStream} from '@google-cloud/paginator';
import {RecordBatch} from 'apache-arrow';

import * as protos from '../../protos/protos';
import {TableReference, ReadClient} from './read_client';
import {logger} from '../util/logger';
import {
  ArrowRawTransform,
  ArrowRecordBatchTransform,
  ArrowRecordReaderTransform,
} from './arrow_transform';
import {ReadSession, GetStreamOptions} from './read_session';
import {ArrowFormat} from './data_format';

type ReadSessionInfo = protos.google.cloud.bigquery.storage.v1.IReadSession;

/**
 * A BigQuery Storage API Reader that can be used to read data
 * from BigQuery Tables using the Storage API in Arrow format.
 *
 * @class
 * @memberof reader
 */
export class ArrowTableReader {
  private _tableRef: TableReference;
  private _session: ReadSession;

  /**
   * Creates a new ArrowTableReader instance. Usually created via
   * ReadClient.createArrowTableReader().
   *
   * @param {ReadClient} readClient - Storage Read Client.
   * @param {TableReference} table - target table to read data from.
   */
  constructor(readClient: ReadClient, tableRef: TableReference) {
    this._tableRef = tableRef;
    this._session = new ReadSession(readClient, tableRef, ArrowFormat);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private trace(msg: string, ...otherArgs: any[]) {
    logger(
      'arrow_table_reader',
      `[table: ${this._tableRef.tableId}]`,
      msg,
      ...otherArgs,
    );
  }

  getSessionInfo(): ReadSessionInfo | undefined | null {
    return this._session.getSessionInfo();
  }

  /**
   * Get a byte stream of Arrow Record Batch.
   *
   * @param {GetStreamOptions} options
   */
  async getStream(
    options?: GetStreamOptions,
  ): Promise<ResourceStream<Uint8Array>> {
    this.trace('getStream', options);
    const stream = await this._session.getStream(options);
    return stream.pipe(new ArrowRawTransform()) as ResourceStream<Uint8Array>;
  }

  /**
   * Get a stream of Arrow RecordBatch objects.
   *
   * @param {GetStreamOptions} options
   */
  async getRecordBatchStream(
    options?: GetStreamOptions,
  ): Promise<ResourceStream<RecordBatch>> {
    this.trace('getRecordBatchStream', options);
    const stream = await this._session.getStream(options);
    const info = this._session.getSessionInfo();
    return stream
      .pipe(new ArrowRawTransform())
      .pipe(new ArrowRecordReaderTransform(info!))
      .pipe(new ArrowRecordBatchTransform()) as ResourceStream<RecordBatch>;
  }

  close() {
    this._session.close();
  }
}
