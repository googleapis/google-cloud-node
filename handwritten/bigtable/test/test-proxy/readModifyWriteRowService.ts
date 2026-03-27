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

import * as assert from 'assert';

import {describe} from 'mocha';
import {protos} from '../../src';
import {BigtableClient} from '../../src/v2';
import type {Callback, CallOptions} from 'google-gax';
import {readModifyWriteRow} from '../../testproxy/services/read-modify-write-row';
import {createClient} from '../../testproxy/services/create-client';

describe('TestProxy/ReadModifyWriteRow', () => {
  const testCases: protos.google.bigtable.v2.IReadModifyWriteRowRequest[] = [
    {
      tableName: 'projects/projectId/instances/instance/tables/test-table',
      appProfileId: 'test-app-profile',
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
  ];
  describe('Ensure the proper request is passed to the Gapic Layer', () => {
    testCases.forEach((readModifyWriteRowRequest, index) => {
      it(`Run test ${index}`, done => {
        (async () => {
          const clientMap = new Map();
          const createClientFunction = createClient({clientMap});
          await new Promise((resolve, reject) => {
            createClientFunction(
              {
                request: {
                  clientId: 'TestReadModifyWriteRow_NoRetry_TransientError',
                  dataTarget: 'localhost:1234',
                  projectId: 'projectId',
                  instanceId: 'instance',
                  appProfileId: '',
                },
              },
              (...args: any) => {
                if (args[0]) {
                  reject(args[0]);
                }
                resolve(args[1]);
              },
            );
          });
          const bigtable = clientMap.get(
            'TestReadModifyWriteRow_NoRetry_TransientError',
          );
          // Mock out the Gapic layer so we can see requests coming into it
          const bigtableClient = new BigtableClient(
            bigtable.options.BigtableClient,
          );
          bigtable.api['BigtableClient'] = bigtableClient;
          bigtableClient.readModifyWriteRow = (
            request?: protos.google.bigtable.v2.IReadModifyWriteRowRequest,
            optionsOrCallback?:
              | CallOptions
              | Callback<
                  protos.google.bigtable.v2.IReadModifyWriteRowResponse,
                  | protos.google.bigtable.v2.IReadModifyWriteRowRequest
                  | null
                  | undefined,
                  {} | null | undefined
                >,
            callback?: Callback<
              protos.google.bigtable.v2.IReadModifyWriteRowResponse,
              | protos.google.bigtable.v2.IReadModifyWriteRowRequest
              | null
              | undefined,
              {} | null | undefined
            >,
          ) => {
            try {
              // If the Gapic request is correct then the test passes.
              assert.deepStrictEqual(request, readModifyWriteRowRequest);
            } catch (e) {
              // If the Gapic request is incorrect then the test fails with an error.
              done(e);
            }
            if (callback) {
              callback(null, {});
            }
            return new Promise(resolve => {
              const response: protos.google.bigtable.v2.IReadModifyWriteRowResponse =
                {};
              resolve([response, {}, undefined]);
            });
          };
          const readModifyWriteRowFunction = readModifyWriteRow({
            clientMap,
          });
          await new Promise((resolve, reject) => {
            readModifyWriteRowFunction(
              {
                request: {
                  clientId: 'TestReadModifyWriteRow_NoRetry_TransientError',
                  request: readModifyWriteRowRequest,
                },
              },
              (...args: any) => {
                if (args[0]) {
                  reject(args[0]);
                }
                resolve(args[1]);
              },
            );
          });
          done();
        })().catch(err => {
          throw err;
        });
      });
    });
  });
});
