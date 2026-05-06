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
import {Readable} from 'stream';
import {google} from '../../protos/protos';
import {PreparedStatement} from '../../src/execute-query/preparedstatement';

export const createMetadata = (
  ...values: [string | null, google.bigtable.v2.Type][]
): google.bigtable.v2.ExecuteQueryResponse => {
  return google.bigtable.v2.ExecuteQueryResponse.create({
    metadata: {
      protoSchema: {
        columns: values.map(v =>
          google.bigtable.v2.ColumnMetadata.create({
            name: v[0],
            type: v[1],
          }),
        ),
      },
    },
  });
};

export const createPreparedStatement = (
  ...values: [string | null, google.bigtable.v2.Type][]
): PreparedStatement => {
  const metadataPB = createMetadata(...values).metadata!;
  const prepareQueryResponse = google.bigtable.v2.PrepareQueryResponse.create({
    metadata: metadataPB,
    preparedQuery: 'xd',
    validUntil: null,
  });
  return new PreparedStatement(
    undefined as any,
    prepareQueryResponse,
    {} as any,
    {},
  );
};

export const createPrepareQueryResponse = (
  ...values: [string | null, google.bigtable.v2.Type][]
): google.bigtable.v2.PrepareQueryResponse => {
  const metadataPB = createMetadata(...values).metadata!;
  return google.bigtable.v2.PrepareQueryResponse.create({
    metadata: metadataPB,
    preparedQuery: 'xd',
    validUntil: null,
  });
};

export const pbType = (
  value: google.bigtable.v2.IType,
): google.bigtable.v2.Type => {
  return google.bigtable.v2.Type.create(value);
};

export const createProtoRows = (
  resumeToken?: string,
  batchChecksum?: number,
  reset?: boolean,
  ...values: google.bigtable.v2.IValue[]
): google.bigtable.v2.ExecuteQueryResponse => {
  const bytes = google.bigtable.v2.ProtoRows.encode(
    google.bigtable.v2.ProtoRows.create({
      values: values.map(v => google.bigtable.v2.Value.create(v)),
    }),
  ).finish();

  return {
    response: 'results',
    results: {
      protoRowsBatch: values.length > 0 ? {batchData: bytes} : undefined,
      resumeToken: resumeToken ? Buffer.from(resumeToken) : undefined,
      batchChecksum: batchChecksum,
      reset: reset || false,
    },
  } as google.bigtable.v2.ExecuteQueryResponse;
};

interface BigtableError {
  status: any;
  message: any;
  code: any;
}

interface CustomCallback {
  callback: any;
}

type DataObject =
  | BigtableError
  | google.bigtable.v2.ExecuteQueryResponse
  | CustomCallback;

export class ArrayReadableStream extends Readable {
  private data: DataObject[];
  private index: number;
  private aborted: boolean;

  constructor(data: DataObject[]) {
    super({objectMode: true, highWaterMark: 0});
    this.data = data;
    this.index = 0;
    this.aborted = false;
  }

  _read() {
    if (!this.aborted && this.index < this.data.length) {
      const item = this.data[this.index];
      this.index++;
      if ((item as BigtableError).code !== undefined) {
        this.emit('error', item as BigtableError);
      } else if ((item as CustomCallback).callback !== undefined) {
        (item as CustomCallback).callback();
        this._read();
      } else {
        this.push(item as google.bigtable.v2.ExecuteQueryResponse);
      }
    } else {
      this.push(null); // No more data
    }
  }

  abort() {
    this.aborted = true;
    super.destroy();
  }

  end() {
    super.destroy();
  }
}
