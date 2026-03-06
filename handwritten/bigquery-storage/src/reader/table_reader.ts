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

import * as protos from '../../protos/protos';
import {TableReference, ReadClient} from './read_client';
import {logger} from '../util/logger';
import {ArrowRecordBatchTableRowTransform} from './arrow_transform';
import {ArrowTableReader} from './arrow_reader';

type ReadSessionInfo = protos.google.cloud.bigquery.storage.v1.IReadSession;

interface TableCell {
  v?: any;
}
interface TableRow {
  /**
   * Represents a single row in the result set, consisting of one or more fields.
   */
  f?: Array<TableCell>;
}
interface TableDataList {
  /**
   * Rows of results.
   */
  rows?: Array<TableRow>;
  /**
   * Total rows of the entire table. In order to show default value 0 we have to present it as string.
   */
  totalRows?: string;
}

type GetRowsOptions = {
  /**
   * Row limit of the table.
   */
  maxResults?: number;
  /**
   * Subset of fields to return, supports select into sub fields. Example: selected_fields = "a,e.d.f";
   */
  selectedFields?: string;
};
type RowsResponse = [any[], ReadSessionInfo | null, TableDataList];

/**
 * A BigQuery Storage API Reader that can be used to reader data into BigQuery Table
 * using the Storage API.
 *
 * @class
 * @memberof reader
 */
export class TableReader {
  private _arrowReader: ArrowTableReader;
  private _tableRef: TableReference;

  /**
   * Creates a new Reader instance.
   *
   * @param {Object} params - The parameters for the JSONWriter.
   * @param {TableReference} params.table - The stream connection
   *   to the BigQuery streaming insert operation.
   */
  constructor(readClient: ReadClient, tableRef: TableReference) {
    this._tableRef = tableRef;
    this._arrowReader = new ArrowTableReader(readClient, tableRef);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private trace(msg: string, ...otherArgs: any[]) {
    logger(
      'table_reader',
      `[table: ${this._tableRef.tableId}]`,
      msg,
      ...otherArgs,
    );
  }

  getSessionInfo(): ReadSessionInfo | undefined | null {
    return this._arrowReader.getSessionInfo();
  }

  async getRowStream(
    options?: GetRowsOptions,
  ): Promise<ResourceStream<TableRow>> {
    this.trace('getRowStream', options);
    const stream = await this._arrowReader.getRecordBatchStream(options);
    return stream.pipe(
      new ArrowRecordBatchTableRowTransform(),
    ) as ResourceStream<TableRow>;
  }

  /**
   * Retrieves table data as rows in same format
   * as tabledata.list BigQuery v2 API.
   * Extra parameters returned contain Storage Read API specific information
   * like ReadSession and totalRows count.
   *
   * @param {options} GetRowsOptions
   */
  async getRows(options?: GetRowsOptions): Promise<RowsResponse> {
    this.trace('getRows', options);
    const stream = await this.getRowStream(options);
    const session = this.getSessionInfo();
    return new Promise<RowsResponse>((resolve, reject) => {
      const rows: TableRow[] = [];
      stream.on('data', (data: TableRow) => {
        rows.push(data);
      });
      stream.on('error', err => {
        this.trace('reject called on joined stream', err);
        reject(err);
      });
      stream.on('end', () => {
        this.trace('resolve called on joined stream');
        const totalRows = `${session?.estimatedRowCount ?? 0}`;
        resolve([rows, session ?? null, {rows, totalRows}]);
      });
    });
  }

  close() {
    this._arrowReader.close();
  }
}
