// Copyright 2017 Google LLC
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

import * as assert from 'assert';
import {describe, it} from 'mocha';
import {Test} from './testTypes';
const testcases = require('../../system-test/read-rows-acceptance-test.json')
  .tests as Test[];
import {PassThrough} from 'stream';
import {Table} from '../src/table.js';
import {Row} from '../src/row.js';
import {protobuf} from 'google-gax';
import * as fs from 'fs';
import * as path from 'path';
import {Instance} from '../src/instance';
import {Bigtable, AbortableDuplex} from '../src';
import {ClientSideMetricsConfigManager} from '../src/client-side-metrics/metrics-config-manager';
import {
  ITabularApiSurface,
  OperationMetricsCollector,
} from '../src/client-side-metrics/operation-metrics-collector';
import {
  MethodName,
  StreamingState,
} from '../src/client-side-metrics/client-side-metrics-attributes';

class FakeOperationMetricsCollector extends OperationMetricsCollector {
  onOperationComplete() {}
  onResponse() {}
  onAttemptStart() {}
  onAttemptComplete() {}
  onOperationStart() {}
  wrapRequest() {}
  onMetadataReceived() {}
  onRowReachesUser() {}
  onStatusMetadataReceived() {}
}

class FakeMetricsConfigManager extends ClientSideMetricsConfigManager {
  createOperation(
    methodName: MethodName,
    streaming: StreamingState,
    table: ITabularApiSurface,
  ): OperationMetricsCollector {
    return new FakeOperationMetricsCollector(table, methodName, streaming, []);
  }
}

const protosJson = path.resolve(__dirname, '../protos/protos.json');
const root = protobuf.Root.fromJSON(
  JSON.parse(fs.readFileSync(protosJson).toString()),
);
const ReadRowsResponse = root.lookupType('google.bigtable.v2.ReadRowsResponse');
const CellChunk = root.lookupType(
  'google.bigtable.v2.ReadRowsResponse.CellChunk',
);
describe('Read Row Acceptance tests', () => {
  testcases.forEach(test => {
    it(test.name, done => {
      const table = new Table({id: 'xyz'} as Instance, 'my-table');
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const results: any[] = [];
      const rawResults = test.results || [];
      const errorCount = rawResults.filter(result => result.error).length;
      rawResults
        .filter(result => !result.error)
        .forEach(result => {
          const existingRow = results.find(filter => filter.key === result.rk);
          const row = existingRow || {key: result.rk, data: {}};
          const data = row.data;
          if (typeof existingRow === 'undefined') {
            results.push(row);
          }
          const family = data[result.fm] || {};
          data[result.fm] = family;
          const qualifier = family[result.qual] || [];
          family[result.qual] = qualifier;
          const resultLabels: string[] = [];
          if (result.label !== '') {
            resultLabels.push(result.label);
          }
          qualifier.push({
            value: result.value,
            timestamp: '' + result.ts,
            labels: resultLabels,
          });
        });

      table.bigtable = {} as Bigtable;
      table.bigtable._metricsConfigManager = new FakeMetricsConfigManager([]);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (table.bigtable.request as any) = () => {
        const stream = new PassThrough({
          objectMode: true,
        });

        (stream as {} as AbortableDuplex).abort = () => {};

        setImmediate(() => {
          test.chunks_base64
            .map(chunk => {
              const cellChunk = CellChunk.decode(
                Buffer.from(chunk as string, 'base64'),
              ); //.decode64(chunk);
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              let readRowsResponse: any = {chunks: [cellChunk]};
              readRowsResponse = ReadRowsResponse.create(readRowsResponse);
              readRowsResponse = ReadRowsResponse.toObject(readRowsResponse, {
                defaults: true,
                longs: String,
                oneofs: true,
              });
              return readRowsResponse;
            })
            .forEach(readRowsResponse => stream.push(readRowsResponse));
          stream.push(null);
        });

        return stream;
      };

      const tableRows = results.map(rawRow => {
        const row = new Row(table, rawRow.key);
        row.data = rawRow.data;
        return row;
      });

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const errors: any[] = [];
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const rows: any[] = [];

      table
        .createReadStream({})
        .on('error', err => {
          errors.push(err);
          verify();
        })
        .on('data', row => {
          rows.push(row);
        })
        .on('end', () => {
          verify();
        });
      function verify() {
        assert.strictEqual(errors.length, errorCount, ' error count mismatch');
        assert.strictEqual(rows.length, results.length, 'row count mismatch');
        assert.deepStrictEqual(rows, tableRows, 'row mismatch');
        done();
      }
    });
  });
});
