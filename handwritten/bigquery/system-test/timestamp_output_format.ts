// Copyright 2026 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import * as assert from 'assert';
import {describe, it, before, after} from 'mocha';
import {BigQuery} from '../src/bigquery';
import {randomUUID} from 'crypto';
import {RequestResponse} from '@google-cloud/common/build/src/service-object';

const bigquery = new BigQuery();

interface TestCase {
  name: string;
  timestampOutputFormat?: string;
  useInt64Timestamp?: boolean;
  expectedError?: string;
  expectedTsValue?: string;
}

describe('Timestamp Output Format System Tests', () => {
  const datasetId = `timestamp_test_${randomUUID().replace(/-/g, '_')}`;
  const tableId = `timestamp_table_${randomUUID().replace(/-/g, '_')}`;
  const dataset = bigquery.dataset(datasetId);
  const table = dataset.table(tableId);
  const insertedTsValue = '2023-01-01T12:00:00.123456789123Z';
  const expectedTsValueMicroseconds = '2023-01-01T12:00:00.123456000Z';
  const expectedTsValueNanoseconds = '2023-01-01T12:00:00.123456789123Z';

  before(async () => {
    await dataset.create();
    await table.create({
      schema: [{name: 'ts', type: 'TIMESTAMP', timestampPrecision: '12'}],
    });
    // Insert a row to test retrieval
    await table.insert([{ts: insertedTsValue}]);
  });

  after(async () => {
    try {
      await dataset.delete({force: true});
    } catch (e) {
      console.error('Error deleting dataset:', e);
    }
  });

  const testCases: TestCase[] = [
    {
      name: 'should call getRows with TIMESTAMP_OUTPUT_FORMAT_UNSPECIFIED and useInt64Timestamp=true',
      timestampOutputFormat: 'TIMESTAMP_OUTPUT_FORMAT_UNSPECIFIED',
      useInt64Timestamp: true,
      expectedTsValue: expectedTsValueMicroseconds,
    },
    {
      name: 'should call getRows with TIMESTAMP_OUTPUT_FORMAT_UNSPECIFIED and useInt64Timestamp=false',
      timestampOutputFormat: 'TIMESTAMP_OUTPUT_FORMAT_UNSPECIFIED',
      useInt64Timestamp: false,
      expectedTsValue: expectedTsValueMicroseconds,
    },
    {
      name: 'should call getRows with FLOAT64 and useInt64Timestamp=true (expect error)',
      timestampOutputFormat: 'FLOAT64',
      useInt64Timestamp: true,
      expectedError:
        'Cannot specify both use_int64_timestamp and timestamp_output_format.',
    },
    {
      name: 'should call getRows with FLOAT64 and useInt64Timestamp=false',
      timestampOutputFormat: 'FLOAT64',
      useInt64Timestamp: false,
      expectedTsValue: expectedTsValueMicroseconds,
    },
    {
      name: 'should call getRows with INT64 and useInt64Timestamp=true',
      timestampOutputFormat: 'INT64',
      useInt64Timestamp: true,
      expectedTsValue: expectedTsValueMicroseconds,
    },
    {
      name: 'should call getRows with INT64 and useInt64Timestamp=false',
      timestampOutputFormat: 'INT64',
      useInt64Timestamp: false,
      expectedTsValue: expectedTsValueMicroseconds,
    },
    {
      name: 'should call getRows with ISO8601_STRING and useInt64Timestamp=true (expect error)',
      timestampOutputFormat: 'ISO8601_STRING',
      useInt64Timestamp: true,
      expectedError:
        'Cannot specify both use_int64_timestamp and timestamp_output_format.',
    },
    {
      name: 'should call getRows with ISO8601_STRING and useInt64Timestamp=false',
      timestampOutputFormat: 'ISO8601_STRING',
      useInt64Timestamp: false,
      expectedTsValue: expectedTsValueNanoseconds,
    },
    // Additional test cases for undefined combinations
    {
      name: 'should call getRows with timestampOutputFormat undefined and useInt64Timestamp undefined',
      timestampOutputFormat: undefined,
      useInt64Timestamp: undefined,
      expectedTsValue: expectedTsValueNanoseconds,
    },
    {
      name: 'should call getRows with timestampOutputFormat undefined and useInt64Timestamp=true',
      timestampOutputFormat: undefined,
      useInt64Timestamp: true,
      expectedTsValue: expectedTsValueMicroseconds,
    },
    {
      name: 'should call getRows with timestampOutputFormat undefined and useInt64Timestamp=false',
      timestampOutputFormat: undefined,
      useInt64Timestamp: false,
      expectedTsValue: expectedTsValueMicroseconds,
    },
    {
      name: 'should call getRows with TIMESTAMP_OUTPUT_FORMAT_UNSPECIFIED and useInt64Timestamp undefined',
      timestampOutputFormat: 'TIMESTAMP_OUTPUT_FORMAT_UNSPECIFIED',
      useInt64Timestamp: undefined,
      expectedTsValue: expectedTsValueMicroseconds,
    },
    {
      name: 'should call getRows with FLOAT64 and useInt64Timestamp undefined (expect error)',
      timestampOutputFormat: 'FLOAT64',
      useInt64Timestamp: undefined,
      expectedTsValue: expectedTsValueMicroseconds,
    },
    {
      name: 'should call getRows with INT64 and useInt64Timestamp undefined',
      timestampOutputFormat: 'INT64',
      useInt64Timestamp: undefined,
      expectedTsValue: expectedTsValueMicroseconds,
    },
    {
      name: 'should call getRows with ISO8601_STRING and useInt64Timestamp undefined (expect error)',
      timestampOutputFormat: 'ISO8601_STRING',
      useInt64Timestamp: undefined,
      expectedTsValue: expectedTsValueNanoseconds,
    },
  ];

  testCases.forEach(
    ({
      name,
      timestampOutputFormat,
      useInt64Timestamp,
      expectedError,
      expectedTsValue,
    }) => {
      it(name, async () => {
        const options: {[key: string]: any} = {};
        if (timestampOutputFormat !== undefined) {
          options['formatOptions.timestampOutputFormat'] =
            timestampOutputFormat;
        }
        if (useInt64Timestamp !== undefined) {
          options['formatOptions.useInt64Timestamp'] = useInt64Timestamp;
        }

        if (expectedError) {
          try {
            await table.getRows(options);
            assert.fail('The call should have thrown an error.');
          } catch (e) {
            assert.strictEqual((e as Error).message, expectedError);
          }
        } else {
          const [rows] = await table.getRows(options);
          assert(rows.length > 0);
          assert.strictEqual(rows[0].ts.value, expectedTsValue);
        }
      });
    },
  );

  it('should make a request with ISO8601_STRING when no format options are being used', done => {
    void (async () => {
      const originalRequest = table.request;
      const requestPromise: Promise<RequestResponse> = new Promise(
        (resolve, reject) => {
          const innerPromise = new Promise((innerResolve, innerReject) => {
            innerResolve({});
          });
          resolve(innerPromise as Promise<RequestResponse>);
        },
      );
      table.request = reqOpts => {
        table.request = originalRequest;
        if (
          reqOpts.qs['formatOptions.timestampOutputFormat'] === 'ISO8601_STRING'
        ) {
          done();
        } else {
          done(
            new Error(
              'The default timestampOutputFormat should be ISO8601_STRING',
            ),
          );
        }
        return requestPromise;
      };
      await table.getRows({});
    })();
  });
});
