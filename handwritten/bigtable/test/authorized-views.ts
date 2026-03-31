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

import {beforeEach, describe} from 'mocha';
import {AbortableDuplex, Bigtable, RawFilter, RequestCallback} from '../src';
import {PassThrough} from 'stream';
import * as assert from 'assert';
import {Mutation} from '../src/mutation';
import * as mocha from 'mocha';
import {Row} from '../src';

describe('Bigtable/AuthorizedViews', () => {
  describe('Authorized View methods should have requests that match Table and Row requests', () => {
    const bigtable = new Bigtable({});
    const fakeTableName = 'fake-table';
    const fakeInstanceName = 'fake-instance';
    const fakeViewName = 'fake-view';
    const instance = bigtable.instance(fakeInstanceName);
    const table = instance.table(fakeTableName);
    const view = instance.view(fakeTableName, fakeViewName);

    /** This function mocks out the request function and compares the request
     * passed into it to ensure it is correct.
     *
     * @param done The function to call when ending the mocha test
     * @param compareFn The function that maps the requestCount to the
     * request that we would expect to be passed into `request`.
     */
    function mockCallbackRequest(
      done: mocha.Done,
      compareFn: (requestCount: number) => unknown,
      resp?: {},
    ) {
      let requestCount = 0;
      table.bigtable.request = (
        config?: any,
        callback?: RequestCallback<any>,
      ) => {
        try {
          requestCount++;
          delete config['retryOpts'];
          if (
            config &&
            config.gaxOpts &&
            config.gaxOpts.otherArgs &&
            config.gaxOpts.otherArgs.options
          ) {
            delete config.gaxOpts.otherArgs['options'];
          }
          assert.deepStrictEqual(config, compareFn(requestCount));
        } catch (err: unknown) {
          done(err);
        }
        if (callback) {
          callback(null, resp);
        }
        const stream = new PassThrough({
          objectMode: true,
        });
        setImmediate(() => {
          stream.end();
        });
        return stream as {} as AbortableDuplex;
      };
    }

    /**
     * This function gets the basic structure of the requests we would
     * expect when first making a request for a table and then for an
     * authorized view.
     *
     * @param requestCount The number of calls that have been made to request()
     *
     * @return The expected table or authorized view in the request that will
     * reach the request options.
     */
    function getBaseRequestOptions(requestCount: number) {
      const requestForTable = {
        tableName: `projects/{{projectId}}/instances/${fakeInstanceName}/tables/${fakeTableName}`,
      };
      const requestForAuthorizedView = {
        authorizedViewName: `projects/{{projectId}}/instances/${fakeInstanceName}/tables/${fakeTableName}/authorizedViews/${fakeViewName}`,
      };
      return requestCount === 1 ? requestForTable : requestForAuthorizedView;
    }

    describe('Table', () => {
      describe('should make ReadRows grpc requests', () => {
        /**
         * This function mocks out the request function to expect a readRows
         * request when the tests are run.
         *
         * @param done The function to call when ending the mocha test
         */
        function setupReadRows(done: mocha.Done) {
          mockCallbackRequest(done, requestCount => {
            return {
              client: 'BigtableClient',
              method: 'readRows',
              gaxOpts: {
                maxRetries: 4,
                otherArgs: {
                  headers: {
                    'bigtable-attempt': 0,
                  },
                },
              },
              reqOpts: Object.assign(
                {
                  appProfileId: undefined,
                  rows: {
                    rowKeys: [],
                    rowRanges: [
                      {
                        startKeyClosed: Buffer.from('7'),
                        endKeyClosed: Buffer.from('9'),
                      },
                    ],
                  },
                  filter: {
                    columnQualifierRegexFilter: Buffer.from('abc'),
                  },
                  rowsLimit: 5,
                },
                getBaseRequestOptions(requestCount),
              ),
            };
          });
        }

        it('requests for createReadStream should match', done => {
          setupReadRows(done);
          (async () => {
            const opts = {
              decode: true,
              end: '9',
              filter: [{column: 'abc'}],
              gaxOptions: {
                maxRetries: 4,
              },
              limit: 5,
              start: '7',
            };
            await table.createReadStream(opts);
            await view.createReadStream(opts);
            done();
          })().catch(err => {
            throw err;
          });
        });
        it('requests for getRows should match', done => {
          setupReadRows(done);
          (async () => {
            const opts = {
              decode: true,
              end: '9',
              filter: [{column: 'abc'}],
              gaxOptions: {
                maxRetries: 4,
              },
              limit: 5,
              start: '7',
            };
            await table.getRows(opts);
            await view.getRows(opts);
            done();
          })().catch(err => {
            throw err;
          });
        });
      });
      describe('should make MutateRows grpc requests', () => {
        /**
         * This function mocks out the request function to expect a mutateRows
         * request when the tests are run.
         *
         * @param done The function to call when ending the mocha test
         */
        function setupMutateRows(done: mocha.Done) {
          mockCallbackRequest(done, requestCount => {
            return {
              client: 'BigtableClient',
              method: 'mutateRows',
              gaxOpts: {
                maxRetries: 0,
                otherArgs: {
                  headers: {
                    ['bigtable-attempt']: 0,
                  },
                },
              },
              reqOpts: Object.assign(getBaseRequestOptions(requestCount), {
                appProfileId: undefined,
                entries: [
                  {
                    rowKey: Buffer.from('some-id'),
                    mutations: [
                      {
                        setCell: {
                          familyName: 'follows',
                          columnQualifier:
                            Mutation.convertToBytes('tjefferson'),
                          timestampMicros: 2,
                          value: Mutation.convertToBytes(1),
                        },
                      },
                    ],
                  },
                ],
              }),
            };
          });
        }
        it('requests for mutate should match', done => {
          (async () => {
            setupMutateRows(done);
            const mutation = {
              key: 'some-id',
              data: {
                follows: {
                  tjefferson: {
                    value: 1,
                    timestamp: 2,
                  },
                },
              },
              method: Mutation.methods.INSERT,
            };
            // Currently the client retries on an end event if all the data
            // hasn't been sent back so maxRetries needs to be 0.
            const gaxOptions = {maxRetries: 0};
            table.maxRetries = 0;
            await table.mutate(mutation, {gaxOptions});
            view.maxRetries = 0;
            await view.mutate(mutation, {gaxOptions});
            done();
          })().catch(err => {
            throw err;
          });
        });
        it('requests for insert should match', done => {
          (async () => {
            setupMutateRows(done);
            const mutation = {
              key: 'some-id',
              data: {
                follows: {
                  tjefferson: {
                    value: 1,
                    timestamp: 2,
                  },
                },
              },
            };
            // Currently the client retries on an end event if all the data
            // hasn't been sent back so maxRetries needs to be 0.
            const gaxOptions = {maxRetries: 0};
            table.maxRetries = 0;
            await table.insert(mutation, gaxOptions);
            view.maxRetries = 0;
            await view.insert(mutation, gaxOptions);
            done();
          })().catch(err => {
            throw err;
          });
        });
      });
      describe('should make SampleRowKeys grpc requests', () => {
        /**
         * This function mocks out the request function to expect a sampleRowKeys
         * request when the tests are run.
         *
         * @param done The function to call when ending the mocha test
         */
        function setupSampleRowKeys(done: mocha.Done) {
          mockCallbackRequest(done, requestCount => {
            return {
              client: 'BigtableClient',
              method: 'sampleRowKeys',
              gaxOpts: {
                maxRetries: 4,
              },
              reqOpts: Object.assign(getBaseRequestOptions(requestCount), {
                appProfileId: undefined,
              }),
            };
          });
        }
        it('requests for sampleRowKeys should match', done => {
          setupSampleRowKeys(done);
          (async () => {
            const opts = {
              maxRetries: 4,
            };
            await table.sampleRowKeys(opts);
            await view.sampleRowKeys(opts);
            done();
          })().catch(err => {
            throw err;
          });
        });
        it('requests for sampleRowKeysStream should match', done => {
          setupSampleRowKeys(done);
          (async () => {
            const gaxOptions = {maxRetries: 4};
            await table.sampleRowKeysStream(gaxOptions);
            await view.sampleRowKeysStream(gaxOptions);
            done();
          })().catch(err => {
            throw err;
          });
        });
      });
    });
    describe('Row', () => {
      const rowId = 'row-id';
      let row: Row;

      beforeEach(() => {
        row = table.row(rowId);
      });

      describe('should make readModifyWriteRow grpc requests', () => {
        /**
         * This function mocks out the request function to expect a readRows
         * request when the tests are run.
         *
         * @param done The function to call when ending the mocha test
         */
        function setupReadModifyWriteRow(done: mocha.Done) {
          mockCallbackRequest(
            done,
            requestCount => {
              return {
                client: 'BigtableClient',
                method: 'readModifyWriteRow',
                gaxOpts: {
                  maxRetries: 4,
                  otherArgs: {},
                },
                reqOpts: Object.assign(
                  {
                    appProfileId: undefined,
                    rowKey: Buffer.from(rowId),
                    rules: [
                      {
                        familyName: 'columnFamilyName',
                        columnQualifier: Buffer.from('columnName'),
                        incrementAmount: 7,
                      },
                    ],
                  },
                  getBaseRequestOptions(requestCount),
                ),
              };
            },
            {
              row: {
                families: [
                  {
                    name: 'columnFamilyName',
                    columns: [
                      {
                        qualifier: Buffer.from('columnName'),
                        cells: [
                          {
                            labels: [],
                            timestampMicros: '4',
                            value: Mutation.convertToBytes(7),
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            },
          );
        }

        it('requests for createRules should match', done => {
          setupReadModifyWriteRow(done);
          (async () => {
            const rule = {
              column: 'columnFamilyName:columnName',
              increment: 7,
            };
            const gaxOpts = {maxRetries: 4};
            await row.createRules(rule, gaxOpts);
            await view.createRules({rules: rule, rowId: rowId}, gaxOpts);
            done();
          })().catch(err => {
            throw err;
          });
        });
        it('requests for increment should match', done => {
          setupReadModifyWriteRow(done);
          (async () => {
            // Change the response so that format families can run.
            const column = 'columnFamilyName:columnName';
            const gaxOpts = {maxRetries: 4};
            await row.increment(column, 7, gaxOpts);
            await view.increment({column, rowId}, 7, gaxOpts);
            done();
          })().catch(err => {
            throw err;
          });
        });
      });
      describe('should make checkAndMutateRequest grpc requests', () => {
        /**
         * This function mocks out the request function to expect a readRows
         * request when the tests are run.
         *
         * @param done The function to call when ending the mocha test
         */
        function setupCheckAndMutateRow(done: mocha.Done) {
          mockCallbackRequest(
            done,
            requestCount => {
              return {
                client: 'BigtableClient',
                method: 'checkAndMutateRow',
                gaxOpts: {
                  maxRetries: 4,
                  otherArgs: {},
                },
                reqOpts: Object.assign(
                  {
                    appProfileId: undefined,
                    rowKey: Buffer.from(rowId),
                    predicateFilter: {
                      familyNameRegexFilter: 'columnFamilyName',
                    },
                    trueMutations: [
                      {
                        deleteFromColumn: {
                          familyName: 'columnFamilyName',
                          columnQualifier: Buffer.from('columnName'),
                          timeRange: undefined,
                        },
                      },
                    ],
                    falseMutations: [],
                  },
                  getBaseRequestOptions(requestCount),
                ),
              };
            },
            {
              row: {
                families: [
                  {
                    name: 'columnFamilyName',
                    columns: [
                      {
                        qualifier: Buffer.from('columnName'),
                        cells: [
                          {
                            labels: [],
                            timestampMicros: '4',
                            value: Mutation.convertToBytes(7),
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            },
          );
        }

        it('requests for filter should match', done => {
          setupCheckAndMutateRow(done);
          (async () => {
            const filter: RawFilter = {
              family: 'columnFamilyName',
              value: 'columnName',
            };
            const mutations = [
              {
                method: 'delete',
                data: ['columnFamilyName:columnName'],
              },
            ];
            await row.filter(filter, {
              onMatch: mutations,
              gaxOptions: {maxRetries: 4},
            });
            await view.filter(
              {filter, rowId},
              {
                onMatch: mutations,
                gaxOptions: {maxRetries: 4},
              },
            );
            done();
          })().catch(err => {
            throw err;
          });
        });
      });
    });
  });
});
