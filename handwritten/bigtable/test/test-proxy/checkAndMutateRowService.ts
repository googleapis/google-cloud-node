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
import {checkAndMutateRow} from '../../testproxy/services/check-and-mutate-row';
import {createClient} from '../../testproxy/services/create-client';

describe('TestProxy/CheckAndMutateRow', () => {
  const testCases: protos.google.bigtable.v2.ICheckAndMutateRowRequest[] = [
    {
      tableName: 'projects/projectId/instances/instance/tables/test-table',
      appProfileId: 'test-app-profile',
      rowKey: Buffer.from('test-row-key'),
      predicateFilter: null,
      trueMutations: [
        {
          setCell: {
            familyName: 'cf1',
            timestampMicros: 1000007,
            columnQualifier: Buffer.from('cq1'),
            value: Buffer.from('value1'),
          },
        },
        {
          setCell: {
            familyName: 'cf2',
            timestampMicros: 1000007,
            columnQualifier: Buffer.from('cq2'),
            value: Buffer.from('value2'),
          },
        },
      ],
      falseMutations: [
        {
          setCell: {
            familyName: 'cf1',
            timestampMicros: 1000007,
            columnQualifier: Buffer.from('cq1'),
            value: Buffer.from('value1'),
          },
        },
        {
          setCell: {
            familyName: 'cf2',
            timestampMicros: 1000007,
            columnQualifier: Buffer.from('cq2'),
            value: Buffer.from('value2'),
          },
        },
      ],
    },
    {
      tableName: 'projects/projectId/instances/instance/tables/test-table',
      appProfileId: 'test-app-profile',
      rowKey: Buffer.from('test-row-key'),
      predicateFilter: null,
      trueMutations: [
        {
          setCell: {
            familyName: '',
            timestampMicros: 1000007,
            columnQualifier: Buffer.from(''),
            value: Buffer.from(''),
          },
        },
        {
          setCell: {
            familyName: '',
            timestampMicros: 1000007,
            columnQualifier: Buffer.from(''),
            value: Buffer.from(''),
          },
        },
      ],
      falseMutations: [],
    },
  ];
  describe('Ensure the proper request is passed to the Gapic Layer', () => {
    const clientId = 'TestCheckAndMutateRow_NoRetry_TransientError';
    testCases.forEach((checkAndMutateRowRequest, index) => {
      it(`Run test ${index}`, done => {
        (async () => {
          const clientMap = new Map();
          const createClientFunction = createClient({clientMap});
          await new Promise((resolve, reject) => {
            createClientFunction(
              {
                request: {
                  clientId,
                  dataTarget: 'localhost:1234',
                  projectId: 'projectId',
                  instanceId: 'instance',
                  appProfileId: '',
                },
              },
              (error: Error | null, response: {} | null) => {
                if (error) {
                  reject(error);
                }
                resolve(response);
              },
            );
          });
          {
            // Mock out the Gapic layer so we can see requests coming into it
            const bigtable = clientMap.get(clientId);
            const bigtableClient = new BigtableClient(
              bigtable.options.BigtableClient,
            );
            bigtable.api['BigtableClient'] = bigtableClient;
            bigtableClient.checkAndMutateRow = (
              request?: protos.google.bigtable.v2.ICheckAndMutateRowRequest,
              optionsOrCallback?:
                | CallOptions
                | Callback<
                    protos.google.bigtable.v2.ICheckAndMutateRowResponse,
                    | protos.google.bigtable.v2.ICheckAndMutateRowRequest
                    | null
                    | undefined,
                    {} | null | undefined
                  >,
              callback?: Callback<
                protos.google.bigtable.v2.ICheckAndMutateRowResponse,
                | protos.google.bigtable.v2.ICheckAndMutateRowRequest
                | null
                | undefined,
                {} | null | undefined
              >,
            ) => {
              try {
                // If the Gapic request is correct then the test passes.
                assert.deepStrictEqual(request, checkAndMutateRowRequest);
              } catch (e) {
                // If the Gapic request is incorrect then the test fails with an error.
                done(e);
              }
              if (callback) {
                callback(null, {});
              }
              return new Promise(resolve => {
                const response: protos.google.bigtable.v2.ICheckAndMutateRowResponse =
                  {};
                resolve([response, {}, undefined]);
              });
            };
          }
          await new Promise((resolve, reject) => {
            checkAndMutateRow({clientMap})(
              {
                request: {
                  clientId,
                  request: checkAndMutateRowRequest,
                },
              },
              (error: Error | null, response: {} | null) => {
                if (error) {
                  reject(error);
                }
                resolve(response);
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
