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

import {
  getRMWRRequest,
  getRMWRRequestInverse,
} from '../../testproxy/services/utils/request/readModifyWriteRow';
import * as protos from '../../protos/protos';
import * as assert from 'assert';

describe('Check getRMWRRequest and getRMWRRequestInverse are inverses', () => {
  const testCases: protos.google.bigtable.v2.IReadModifyWriteRowRequest[] = [
    {
      tableName: 'test-table',
      rowKey: Buffer.from('test-row-key'),
      rules: [
        {
          familyName: 'cf1',
          columnQualifier: Buffer.from('cq1'),
          appendValue: Buffer.from('append-val'),
        },
        {
          familyName: 'cf2',
          columnQualifier: Buffer.from('cq2'),
          incrementAmount: 10,
        },
      ],
    },
    {
      authorizedViewName: 'test-authorized-view',
      rowKey: Buffer.from('test-row-key'),
      rules: [
        {
          familyName: 'cf1',
          columnQualifier: Buffer.from('cq1'),
          appendValue: Buffer.from('append-val'),
        },
        {
          familyName: 'cf2',
          columnQualifier: Buffer.from('cq2'),
          incrementAmount: 10,
        },
      ],
    },
    {
      tableName: 'another-table',
      rowKey: Buffer.from('row-key-2'),
      rules: [
        {
          familyName: 'cf3',
          columnQualifier: Buffer.from('cq3'),
          incrementAmount: -5,
        },
      ],
    },
    {
      tableName: 'test-table-4',
      rowKey: Buffer.from('test-row-key-4'),
      rules: [
        {
          familyName: 'cf1',
          columnQualifier: Buffer.from('cq1'),
          appendValue: Buffer.from('append-val1'),
        },
        {
          familyName: 'cf2',
          columnQualifier: Buffer.from('cq2'),
          incrementAmount: 11,
        },
        {
          familyName: 'cf3',
          columnQualifier: Buffer.from('cq3'),
          appendValue: Buffer.from('append-val2'),
        },
      ],
      appProfileId: 'my-app-profile',
    }, // appProfileId
    // Add more test cases with different combinations of fields
  ];
  testCases.forEach((test, index) => {
    it(`Run test ${index}`, () => {
      const inverseResult = getRMWRRequestInverse(test);
      const result = getRMWRRequest(inverseResult);
      assert.deepStrictEqual(result, test);
    });
  });
});
