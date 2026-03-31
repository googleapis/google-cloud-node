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

import {Transform, TransformCallback} from 'stream';
import {
  RecordBatchReader,
  RecordBatch,
  RecordBatchStreamReader,
  DataType,
} from 'apache-arrow';
import * as protos from '../../protos/protos';

type ReadRowsResponse =
  protos.google.cloud.bigquery.storage.v1.IReadRowsResponse;
type ReadSession = protos.google.cloud.bigquery.storage.v1.IReadSession;

interface TableCell {
  v?: any;
}
interface TableRow {
  f?: Array<TableCell>;
}

/**
 * ArrowRawTransform implements a node stream Transform that reads
 * ReadRowsResponse from BigQuery Storage Read API and convert
 * a raw Arrow Record Batch.
 */
export class ArrowRawTransform extends Transform {
  constructor() {
    super({
      readableObjectMode: false,
      writableObjectMode: true,
    });
  }

  _transform(
    response: ReadRowsResponse,
    _: BufferEncoding,
    callback: TransformCallback,
  ): void {
    if (
      !(
        response.arrowRecordBatch &&
        response.arrowRecordBatch.serializedRecordBatch
      )
    ) {
      callback(null);
      return;
    }
    callback(null, response.arrowRecordBatch?.serializedRecordBatch);
  }
}

/**
 * ArrowRecordReaderTransform implements a node stream Transform that reads
 * a byte stream of raw Arrow Record Batch and convert to a stream of Arrow
 * RecordBatchStreamReader.
 */
export class ArrowRecordReaderTransform extends Transform {
  private session: ReadSession;

  constructor(session: ReadSession) {
    super({
      objectMode: true,
    });
    this.session = session;
  }

  _transform(
    serializedRecordBatch: Uint8Array,
    _: BufferEncoding,
    callback: TransformCallback,
  ): void {
    const buf = Buffer.concat([
      this.session.arrowSchema?.serializedSchema as Uint8Array,
      serializedRecordBatch,
    ]);
    const reader = RecordBatchReader.from(buf);
    callback(null, reader);
  }
}

/**
 * ArrowRecordBatchTransform implements a node stream Transform that reads
 * a RecordBatchStreamReader and convert a stream of Arrow RecordBatch.
 */
export class ArrowRecordBatchTransform extends Transform {
  constructor() {
    super({
      objectMode: true,
    });
  }

  _transform(
    reader: RecordBatchStreamReader,
    _: BufferEncoding,
    callback: TransformCallback,
  ): void {
    const batches = reader.readAll();
    for (const row of batches) {
      this.push(row);
    }
    callback(null);
  }
}

/**
 * ArrowRecordBatchTableRowTransform implements a node stream Transform that reads
 * an Arrow RecordBatch and convert a stream of BigQuery TableRow.
 */
export class ArrowRecordBatchTableRowTransform extends Transform {
  constructor() {
    super({
      objectMode: true,
    });
  }

  _transform(
    batch: RecordBatch,
    _: BufferEncoding,
    callback: TransformCallback,
  ): void {
    const rows = new Array(batch.numRows);
    for (let i = 0; i < batch.numRows; i++) {
      rows[i] = {
        f: new Array(batch.numCols),
      };
    }
    for (let j = 0; j < batch.numCols; j++) {
      const column = batch.selectAt([j]);
      const field = column.schema.fields[0];
      const columnName = field.name;
      for (let i = 0; i < batch.numRows; i++) {
        const fieldData = column.get(i);
        const fieldValue = fieldData?.toJSON()[columnName];
        rows[i].f[j] = {
          v: convertArrowValue(fieldValue, field.type as DataType),
        };
      }
    }
    for (let i = 0; i < batch.numRows; i++) {
      this.push(rows[i]);
    }
    callback(null);
  }
}

function convertArrowValue(fieldValue: any, type: DataType): any {
  if (fieldValue === null) {
    return null;
  }
  if (DataType.isList(type)) {
    const arr = fieldValue.toJSON();
    return arr.map((v: any) => {
      // Arrays/lists in BigQuery have the same datatype for every element
      // so getting the first one is all we need
      const elemType = type.children[0].type;
      return {v: convertArrowValue(v, elemType)};
    });
  }
  if (DataType.isStruct(type)) {
    const tableRow: TableRow = {};
    Object.keys(fieldValue).forEach(key => {
      const elemType = type.children.find(f => f.name === key);
      if (!tableRow.f) {
        tableRow.f = [];
      }
      tableRow.f.push({
        v: convertArrowValue(fieldValue[key], elemType?.type as DataType),
      });
    });
    return tableRow;
  }
  if (DataType.isTimestamp(type)) {
    // timestamp comes in microsecond, convert to nanoseconds
    // to make it compatible with BigQuery.timestamp.
    return fieldValue * 1000;
  }
  return fieldValue;
}
