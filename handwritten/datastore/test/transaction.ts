// Copyright 2014 Google LLC
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

import * as pfy from '@google-cloud/promisify';
import arrify = require('arrify');
import * as assert from 'assert';
import {afterEach, beforeEach, before, describe, it} from 'mocha';
import * as proxyquire from 'proxyquire';

import {
  Datastore,
  DatastoreOptions,
  DatastoreRequest,
  Query,
  TransactionOptions,
  Transaction,
  AggregateField,
} from '../src';
import {Entities, Entity, entity} from '../src/entity';
import * as tsTypes from '../src/transaction';
import * as sinon from 'sinon';
import {Callback, CallOptions, ClientStub} from 'google-gax';
import {
  CommitCallback,
  CreateReadStreamOptions,
  GetCallback,
  RequestCallback,
  RequestConfig,
} from '../src/request';
import {SECOND_DATABASE_ID} from './index';
import {google} from '../protos/protos';
import {RunCallback} from '../src/transaction';
import * as protos from '../protos/protos';
import {AggregateQuery} from '../src/aggregate';
import {RunQueryCallback, RunQueryInfo, RunQueryOptions} from '../src/query';
import * as mocha from 'mocha';
const async = require('async');

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Any = any;
type Path = string | [string] | [string, number];

let promisified = false;
const fakePfy = Object.assign({}, pfy, {
  promisifyAll(klass: Function, options: pfy.PromisifyAllOptions) {
    if (klass.name !== 'Transaction') {
      return;
    }
    promisified = true;
    assert.deepStrictEqual(options.exclude, [
      'createAggregationQuery',
      'createQuery',
      'delete',
      'insert',
      '#runAsync',
      'save',
      'update',
      'upsert',
    ]);
  },
});

async.each(
  [{}, {databaseId: SECOND_DATABASE_ID}],
  (clientOptions: DatastoreOptions) => {
    describe('Transaction', () => {
      let Transaction: typeof tsTypes.Transaction;
      let transaction: tsTypes.Transaction;
      const TRANSACTION_ID = 'transaction-id';
      const PROJECT_ID = 'project-id';
      const NAMESPACE = 'a-namespace';

      const DEFAULT_DATASTORE = {
        request_() {},
        projectId: PROJECT_ID,
        namespace: NAMESPACE,
      } as {} as Datastore;

      const DATASTORE = Object.assign(DEFAULT_DATASTORE, clientOptions);

      function key(path: Path) {
        return new entity.Key({path: arrify(path)});
      }

      before(() => {
        Transaction = proxyquire('../src/transaction.js', {
          '@google-cloud/promisify': fakePfy,
        }).Transaction;
      });

      beforeEach(() => {
        transaction = new Transaction(DATASTORE);
      });

      describe('instantiation', () => {
        it('should promisify all the things', () => {
          assert(promisified);
        });

        it('should localize the datastore instance', () => {
          assert.strictEqual(transaction.datastore, DATASTORE);
        });

        it('should localize the namespace', () => {
          assert.strictEqual(transaction.namespace, NAMESPACE);
        });

        it('should localize the transaction ID', () => {
          const options = {
            id: 'transaction-id',
          };

          const transaction = new Transaction(DATASTORE, options);
          assert.strictEqual(transaction.id, options.id);
        });

        it('should localize readOnly', () => {
          const options = {
            readOnly: true,
          };

          const transaction = new Transaction(DATASTORE, options);
          assert.strictEqual(transaction.readOnly, true);
        });

        it('should localize request function', done => {
          const fakeDataset: Any = {
            request_: {
              bind(context: {}) {
                assert.strictEqual(context, fakeDataset);

                setImmediate(() => {
                  assert.strictEqual(transaction.request, fakeDataset.request);
                  done();
                });

                return fakeDataset.request;
              },
            },
          };

          const transaction = new Transaction(fakeDataset);
        });

        it('should localize default properties', () => {
          assert.deepStrictEqual(transaction.modifiedEntities_, []);
          assert.deepStrictEqual(transaction.requestCallbacks_, []);
          assert.deepStrictEqual(transaction.requests_, []);
        });
      });

      describe('testing various transaction functions when transaction.run returns a response', () => {
        type RequestType =
          | protos.google.datastore.v1.ICommitRequest
          | protos.google.datastore.v1.IBeginTransactionRequest
          | protos.google.datastore.v1.ILookupRequest
          | protos.google.datastore.v1.IRunQueryRequest
          | protos.google.datastore.v1.IRunAggregationQueryRequest;
        // These tests were created to ensure that various transaction functions work correctly after run is called.
        // This allows us to catch any breaking changes to code usages that should remain the same.
        const testRunResp = {
          transaction: Buffer.from(Array.from(Array(100).keys())),
        };
        enum GapicFunctionName {
          BEGIN_TRANSACTION = 'beginTransaction',
          LOOKUP = 'lookup',
          RUN_QUERY = 'runQuery',
          RUN_AGGREGATION_QUERY = 'runAggregationQuery',
          COMMIT = 'commit',
        }

        // MockedTransactionWrapper is a helper class for mocking out various
        // Gapic functions and ensuring that responses and errors actually make it
        // back to the user.
        class MockedTransactionWrapper {
          datastore: Datastore;
          transaction: Transaction;
          dataClient?: ClientStub;
          mockedBeginTransaction: Function;
          functionsMocked: {
            name: GapicFunctionName;
            mockedFunction: Function;
          }[];
          // The callBackSignaler lets the user of this object get a signal when the mocked function is called.
          // This is useful for tests that need to know when the mocked function is called.
          callBackSignaler: (
            callbackReached: GapicFunctionName,
            request?: RequestType
          ) => void = () => {};

          constructor(
            err: Error | null = null,
            resp: google.datastore.v1.IBeginTransactionResponse = testRunResp
          ) {
            const namespace = 'run-without-mock';
            const projectId = 'project-id';
            const options = {
              projectId,
              namespace,
            };
            const datastore = new Datastore(options);
            const dataClientName = 'DatastoreClient';
            // Create a fresh transaction for each test because transaction state changes after a commit.
            this.transaction = datastore.transaction();
            // In this before hook, save the original beginTransaction method in a variable.
            // After tests are finished, reassign beginTransaction to the variable.
            // This way, mocking beginTransaction in this block doesn't affect other tests.
            const gapic = Object.freeze({
              v1: require('../src/v1'),
            });
            // Datastore Gapic clients haven't been initialized yet, so we initialize them here.
            datastore.clients_.set(
              dataClientName,
              new gapic.v1[dataClientName](options)
            );
            const dataClient = datastore.clients_.get(dataClientName);
            // Mock begin transaction
            this.mockedBeginTransaction = () => {};
            if (dataClient && dataClient.beginTransaction) {
              this.mockedBeginTransaction = dataClient.beginTransaction;
            }
            if (dataClient && dataClient.beginTransaction) {
              dataClient.beginTransaction = (
                request: protos.google.datastore.v1.IBeginTransactionRequest,
                options: CallOptions,
                callback: Callback<
                  protos.google.datastore.v1.IBeginTransactionResponse,
                  | protos.google.datastore.v1.IBeginTransactionRequest
                  | null
                  | undefined,
                  {} | null | undefined
                >
              ) => {
                // Calls a user provided function that will receive this string
                // Usually used to track when this code was reached relative to other code
                this.callBackSignaler(
                  GapicFunctionName.BEGIN_TRANSACTION,
                  request
                );
                callback(err, resp);
              };
            }
            this.dataClient = dataClient;
            this.functionsMocked = [];
            this.datastore = datastore;
          }

          // This mocks out a gapic function to just call the callback received in the Gapic function.
          // The callback will send back the error and response arguments provided as parameters.
          mockGapicFunction<ResponseType>(
            functionName: GapicFunctionName,
            response: ResponseType,
            error: Error | null
          ) {
            const dataClient = this.dataClient;
            // Check here that function hasn't been mocked out already
            // Ensures that this mocking object is not being misused.
            this.functionsMocked.forEach(fn => {
              if (fn.name === functionName) {
                throw Error(`${functionName} has already been mocked out`);
              }
            });
            if (dataClient && dataClient[functionName]) {
              this.functionsMocked.push({
                name: functionName,
                mockedFunction: dataClient[functionName],
              });
            }
            if (dataClient && dataClient[functionName]) {
              dataClient[functionName] = (
                request: RequestType,
                options: CallOptions,
                callback: Callback<
                  ResponseType,
                  RequestType | null | undefined,
                  {} | null | undefined
                >
              ) => {
                this.callBackSignaler(functionName, request);
                callback(error, response);
              };
            }
          }

          // This resets beginTransaction from the Gapic layer to what it originally was.
          // Resetting beginTransaction ensures other tests don't use the beginTransaction mock.
          resetBeginTransaction() {
            if (this.dataClient && this.dataClient.beginTransaction) {
              this.dataClient.beginTransaction = this.mockedBeginTransaction;
            }
          }

          // This resets Gapic functions mocked out by the tests to what they originally were.
          // Resetting mocked out Gapic functions ensures other tests don't use these mocked out functions.
          resetGapicFunctions() {
            this.functionsMocked.forEach(functionMocked => {
              if (this.dataClient) {
                this.dataClient[functionMocked.name] =
                  functionMocked.mockedFunction;
              }
            });
          }
        }

        let transactionWrapper: MockedTransactionWrapper;
        let transaction: Transaction;

        afterEach(() => {
          transactionWrapper.resetBeginTransaction();
          transactionWrapper.resetGapicFunctions();
        });

        describe('sending an error back from the beginTransaction gapic function', () => {
          const testErrorMessage = 'test-beginTransaction-error';
          beforeEach(async () => {
            transactionWrapper = new MockedTransactionWrapper(
              new Error(testErrorMessage),
              undefined
            );
          });
          it('should send back the error when awaiting a promise', async () => {
            try {
              await transactionWrapper.transaction.commit();
              assert.fail('The run call should have failed.');
            } catch (error: any) {
              assert.strictEqual(error['message'], testErrorMessage);
            }
          });
          it('should send back the error when using a callback', done => {
            const commitCallback: CommitCallback = (
              error: Error | null | undefined,
              response?: google.datastore.v1.ICommitResponse
            ) => {
              try {
                assert(error);
                assert.strictEqual(error.message, testErrorMessage);
                assert.deepStrictEqual(response, undefined);
                done();
              } catch (e) {
                done(e);
              }
            };
            transactionWrapper.transaction.commit(commitCallback);
          });
        });

        describe('commit', () => {
          // These tests were created to catch regressions for transaction.commit changes.
          const testCommitResp = {
            mutationResults: [
              {
                key: {
                  path: [
                    {
                      kind: 'some-kind',
                    },
                  ],
                },
              },
            ],
          };
          const testErrorMessage = 'test-commit-error';

          beforeEach(async () => {
            transactionWrapper = new MockedTransactionWrapper();
          });

          describe('should pass error back to the user', async () => {
            beforeEach(() => {
              transactionWrapper.mockGapicFunction(
                GapicFunctionName.COMMIT,
                testCommitResp,
                new Error(testErrorMessage)
              );
            });

            it('should send back the error when awaiting a promise', async () => {
              try {
                await transactionWrapper.transaction.run();
                await transactionWrapper.transaction.commit();
                assert.fail('The run call should have failed.');
              } catch (error: any) {
                assert.strictEqual(error['message'], testErrorMessage);
              }
            });
            it('should send back the error when using a callback', done => {
              const commitCallback: CommitCallback = (
                error: Error | null | undefined,
                response?: google.datastore.v1.ICommitResponse
              ) => {
                try {
                  assert(error);
                  assert.strictEqual(error.message, testErrorMessage);
                  assert.strictEqual(response, testCommitResp);
                  done();
                } catch (e) {
                  done(e);
                }
              };
              transactionWrapper.transaction.run(() => {
                transactionWrapper.transaction.commit(commitCallback);
              });
            });
          });
          describe('should pass response back to the user', async () => {
            beforeEach(() => {
              transactionWrapper.mockGapicFunction(
                GapicFunctionName.COMMIT,
                testCommitResp,
                null
              );
            });
            it('should send back the response when awaiting a promise', async () => {
              await transactionWrapper.transaction.run();
              const [commitResults] =
                await transactionWrapper.transaction.commit();
              assert.strictEqual(commitResults, testCommitResp);
            });
            it('should send back the response when using a callback', done => {
              const commitCallback: CommitCallback = (
                error: Error | null | undefined,
                response?: google.datastore.v1.ICommitResponse
              ) => {
                try {
                  assert.strictEqual(error, null);
                  assert.strictEqual(response, testCommitResp);
                  done();
                } catch (e) {
                  done(e);
                }
              };
              transactionWrapper.transaction.run(() => {
                transactionWrapper.transaction.commit(commitCallback);
              });
            });
          });
        });
        describe('runAggregationQuery', () => {
          // These tests were created to catch regressions for transaction.runAggregationQuery changes.
          const runAggregationQueryUserResp = [{'average rating': 100}];
          const runAggregationQueryResp = {
            batch: {
              aggregationResults: [
                {
                  aggregateProperties: {
                    'average rating': {
                      meaning: 0,
                      excludeFromIndexes: false,
                      doubleValue: 100,
                      valueType: 'doubleValue',
                    },
                  },
                },
              ],
              moreResults:
                google.datastore.v1.QueryResultBatch.MoreResultsType
                  .NO_MORE_RESULTS,
              readTime: {seconds: '1699390681', nanos: 961667000},
            },
            query: null,
            transaction: testRunResp.transaction,
          };
          const testErrorMessage = 'test-run-Aggregate-Query-error';
          let aggregate: AggregateQuery;

          beforeEach(async () => {
            transactionWrapper = new MockedTransactionWrapper();
            transaction = transactionWrapper.transaction;
            const q = transactionWrapper.datastore.createQuery('Character');
            aggregate = transactionWrapper.datastore
              .createAggregationQuery(q)
              .addAggregation(AggregateField.average('appearances'));
          });

          describe('should pass error back to the user', async () => {
            beforeEach(() => {
              transactionWrapper.mockGapicFunction(
                GapicFunctionName.RUN_AGGREGATION_QUERY,
                runAggregationQueryResp,
                new Error(testErrorMessage)
              );
            });

            it('should send back the error when awaiting a promise', async () => {
              try {
                await transaction.run();
                await transaction.runAggregationQuery(aggregate);
                assert.fail('The run call should have failed.');
              } catch (error: any) {
                assert.strictEqual(error['message'], testErrorMessage);
              }
            });
            it('should send back the error when using a callback', done => {
              const runAggregateQueryCallback: RequestCallback = (
                error: Error | null | undefined,
                response?: unknown
              ) => {
                try {
                  assert(error);
                  assert.strictEqual(error.message, testErrorMessage);
                  assert.deepStrictEqual(response, runAggregationQueryUserResp);
                  done();
                } catch (e) {
                  done(e);
                }
              };
              transaction.run(() => {
                transaction.runAggregationQuery(
                  aggregate,
                  runAggregateQueryCallback
                );
              });
            });
          });
          describe('should pass response back to the user', async () => {
            beforeEach(() => {
              transactionWrapper.mockGapicFunction(
                GapicFunctionName.RUN_AGGREGATION_QUERY,
                runAggregationQueryResp,
                null
              );
            });
            it('should send back the response when awaiting a promise', async () => {
              await transaction.run();
              const allResults =
                await transaction.runAggregationQuery(aggregate);
              const [runAggregateQueryResults] = allResults;
              assert.deepStrictEqual(
                runAggregateQueryResults,
                runAggregationQueryUserResp
              );
            });
            it('should send back the response when using a callback', done => {
              const runAggregateQueryCallback: CommitCallback = (
                error: Error | null | undefined,
                response?: unknown
              ) => {
                try {
                  assert.strictEqual(error, null);
                  assert.deepStrictEqual(response, runAggregationQueryUserResp);
                  done();
                } catch (e) {
                  done(e);
                }
              };
              transaction.run(() => {
                transaction.runAggregationQuery(
                  aggregate,
                  runAggregateQueryCallback
                );
              });
            });
          });
        });
        describe('runQuery', () => {
          // These tests were created to catch regressions for transaction.runQuery changes.
          const runQueryResp = {
            batch: {
              entityResults: [],
              endCursor: {
                type: 'Buffer',
                data: Buffer.from(Array.from(Array(100).keys())),
              },
            },
          };
          const runQueryUserResp: Entity[] = [];
          const runQueryUserInfo: RunQueryInfo = {
            moreResults: undefined,
            endCursor: '[object Object]',
          };
          const testErrorMessage = 'test-run-Query-error';
          let q: Query;

          beforeEach(async () => {
            transactionWrapper = new MockedTransactionWrapper();
            transaction = transactionWrapper.transaction;
            q = transactionWrapper.datastore.createQuery('Character');
          });

          describe('should pass error back to the user', async () => {
            beforeEach(() => {
              transactionWrapper.mockGapicFunction(
                GapicFunctionName.RUN_QUERY,
                runQueryResp,
                new Error(testErrorMessage)
              );
            });

            it('should send back the error when awaiting a promise', async () => {
              try {
                await transaction.run();
                await transaction.runQuery(q);
                assert.fail('The run call should have failed.');
              } catch (error: any) {
                assert.strictEqual(error['message'], testErrorMessage);
              }
            });
            it('should send back the error when using a callback', done => {
              const callback: RunQueryCallback = (
                error: Error | null | undefined,
                entities?: Entity[],
                info?: RunQueryInfo
              ) => {
                try {
                  assert(error);
                  assert.strictEqual(error.message, testErrorMessage);
                  assert.deepStrictEqual(entities, undefined);
                  assert.deepStrictEqual(info, undefined);
                  done();
                } catch (e) {
                  done(e);
                }
              };
              transaction.run(() => {
                transaction.runQuery(q, callback);
              });
            });
          });
          describe('should pass response back to the user', async () => {
            beforeEach(() => {
              transactionWrapper.mockGapicFunction(
                GapicFunctionName.RUN_QUERY,
                runQueryResp,
                null
              );
            });
            it('should send back the response when awaiting a promise', async () => {
              await transaction.run();
              const [runQueryResults, info] = await transaction.runQuery(q);
              assert.deepStrictEqual(runQueryResults, runQueryUserResp);
              assert.deepStrictEqual(info, runQueryUserInfo);
            });
            it('should send back the response when using a callback', done => {
              const callback: RunQueryCallback = (
                error: Error | null | undefined,
                entities?: Entity[],
                info?: RunQueryInfo
              ) => {
                try {
                  assert.strictEqual(error, null);
                  assert.deepStrictEqual(entities, runQueryUserResp);
                  assert.deepStrictEqual(info, runQueryUserInfo);
                  done();
                } catch (e) {
                  done(e);
                }
              };
              transaction.run(() => {
                transaction.runQuery(q, callback);
              });
            });
          });
        });
        describe('get', () => {
          // These tests were created to catch regressions for transaction.get changes.
          const getResp = {
            found: [
              {
                entity: {
                  key: {
                    path: [
                      {
                        kind: 'Post',
                        name: 'post1',
                        idType: 'name',
                      },
                    ],
                    partitionId: {
                      projectId: 'projectId',
                      databaseId: 'databaseId',
                      namespaceId: 'namespaceId',
                    },
                  },
                  excludeFromIndexes: false,
                  properties: {},
                },
              },
            ],
            missing: [],
            deferred: [],
            transaction: testRunResp.transaction,
            readTime: {
              seconds: '1699470605',
              nanos: 201398000,
            },
          };
          const getUserResp = 'post1';
          const testErrorMessage = 'test-run-Query-error';
          let key: entity.Key;

          beforeEach(async () => {
            transactionWrapper = new MockedTransactionWrapper();
            transaction = transactionWrapper.transaction;
            key = transactionWrapper.datastore.key(['Company', 'Google']);
          });

          describe('should pass error back to the user', async () => {
            beforeEach(() => {
              transactionWrapper.mockGapicFunction(
                GapicFunctionName.LOOKUP,
                getResp,
                new Error(testErrorMessage)
              );
            });

            it('should send back the error when awaiting a promise', async () => {
              try {
                await transaction.run();
                await transaction.get(key);
                assert.fail('The run call should have failed.');
              } catch (error: any) {
                assert.strictEqual(error['message'], testErrorMessage);
              }
            });
            it('should send back the error when using a callback', done => {
              const callback: GetCallback = (
                err?: Error | null,
                entity?: Entities
              ) => {
                try {
                  assert(err);
                  assert.strictEqual(err.message, testErrorMessage);
                  assert.deepStrictEqual(entity, undefined);
                  done();
                } catch (e) {
                  done(e);
                }
              };
              transaction.run(() => {
                transaction.get(key, callback);
              });
            });
          });
          describe('should pass response back to the user', async () => {
            beforeEach(() => {
              transactionWrapper.mockGapicFunction(
                GapicFunctionName.LOOKUP,
                getResp,
                null
              );
            });
            it('should send back the response when awaiting a promise', async () => {
              await transaction.run();
              const [results] = await transaction.get(key);
              const result = results[transactionWrapper.datastore.KEY];
              assert.deepStrictEqual(result.name, getUserResp);
            });
            it('should send back the response when using a callback', done => {
              const callback: GetCallback = (
                err?: Error | null,
                entity?: Entities
              ) => {
                try {
                  const result = entity[transactionWrapper.datastore.KEY];
                  assert.strictEqual(err, null);
                  assert.deepStrictEqual(result.name, getUserResp);
                  done();
                } catch (e) {
                  done(e);
                }
              };
              transaction.run(() => {
                transaction.get(key, callback);
              });
            });
          });
        });
        describe('concurrency', async () => {
          // Items in this enum represent different points in time in the user code.
          enum UserCodeEvent {
            RUN_CALLBACK,
            COMMIT_CALLBACK,
            GET_CALLBACK,
            RUN_QUERY_CALLBACK,
            RUN_AGGREGATION_QUERY_CALLBACK,
            CUSTOM_EVENT,
          }
          // A transaction event represents a point in time particular code is reached
          // when running code that uses a transaction.
          type TransactionEvent = GapicFunctionName | UserCodeEvent;

          // This object is a sample response from 'commit' in the Gapic layer.
          const testCommitResp = {
            mutationResults: [
              {
                key: {
                  path: [
                    {
                      kind: 'some-kind',
                    },
                  ],
                },
              },
            ],
          };
          // This object is a sample response from 'lookup' in the Gapic layer.
          const testLookupResp = {
            found: [
              {
                entity: {
                  key: {
                    path: [
                      {
                        kind: 'Post',
                        name: 'post1',
                        idType: 'name',
                      },
                    ],
                    partitionId: {
                      projectId: 'projectId',
                      databaseId: 'databaseId',
                      namespaceId: 'namespaceId',
                    },
                  },
                  excludeFromIndexes: false,
                  properties: {},
                },
              },
            ],
            missing: [],
            deferred: [],
            transaction: testRunResp.transaction,
            readTime: {
              seconds: '1699470605',
              nanos: 201398000,
            },
          };
          // This object is a sample response from 'runQuery' in the Gapic layer.
          const testRunQueryResp = {
            batch: {
              entityResults: [],
              endCursor: {
                type: 'Buffer',
                data: Buffer.from(Array.from(Array(100).keys())),
              },
            },
          };
          // This object is a sample response from 'runAggregationQuery' in the Gapic layer.
          const testRunAggregationQueryResp = {
            batch: {
              aggregationResults: [
                {
                  aggregateProperties: {
                    'average rating': {
                      meaning: 0,
                      excludeFromIndexes: false,
                      doubleValue: 100,
                      valueType: 'doubleValue',
                    },
                  },
                },
              ],
              moreResults:
                google.datastore.v1.QueryResultBatch.MoreResultsType
                  .NO_MORE_RESULTS,
              readTime: {seconds: '1699390681', nanos: 961667000},
            },
            query: null,
            transaction: testRunResp.transaction,
          };
          let transactionWrapper: MockedTransactionWrapper;
          let transaction: Transaction;

          beforeEach(async () => {
            transactionWrapper = new MockedTransactionWrapper();
            transaction = transactionWrapper.transaction;
          });

          afterEach(() => {
            transactionWrapper.resetBeginTransaction();
            transactionWrapper.resetGapicFunctions();
          });

          type GapicRequestData = {
            call: GapicFunctionName;
            request?: RequestType;
          };

          /**
           * This object is used for testing the order that different events occur.
           * The events can include user code reached, gapic code reached and callbacks called.
           *
           * @param {MockedTransactionWrapper} [transactionWrapper] A TransactionWrapper instance.
           * @param {mocha.Done} [done] A function for signalling the test is complete.
           * @param {TransactionEvent[]} [expectedOrder] The order events are expected to occur.
           * @param {MockedTransactionWrapper} [transactionWrapper] A TransactionWrapper instance.
           */
          class TransactionOrderTester {
            /**
             * expectedRequests equal the request data in the order they are expected to
             * be passed into the Gapic layer.
             * @private
             */
            readonly #expectedRequests?: GapicRequestData[];
            /**
             * requests are the actual order of the requests that are passed into the
             * gapic layer
             * @private
             */
            readonly #requests: GapicRequestData[] = [];
            /**
             * expectedEventOrder is the order the test expects different events to occur
             * such as a callback being called, Gapic functions being called or user
             * code being run.
             */
            readonly #expectedEventOrder: TransactionEvent[] = [];
            /**
             * eventOrder is the order events actually occur in the test and will be compared with
             * expectedEventOrder.
             * @private
             */
            #eventOrder: TransactionEvent[] = [];
            // A transaction wrapper object is used to contain the transaction and mocked Gapic functions.
            #transactionWrapper: MockedTransactionWrapper;
            // Stores the mocha done function so that it can be called from this object.
            readonly #done: mocha.Done;

            /**
             * Each time an event occurs this function is called to check to see if all
             * events happened that were supposed to happen. If all events in the test
             * happened then this function passes tests if the events happened in the
             * right order.
             */
            #checkForCompletion() {
              if (this.#eventOrder.length >= this.#expectedEventOrder.length) {
                try {
                  assert.deepStrictEqual(
                    this.#eventOrder,
                    this.#expectedEventOrder
                  );
                  if (this.#expectedRequests) {
                    assert.deepStrictEqual(
                      this.#requests,
                      this.#expectedRequests
                    );
                  }
                  this.#done();
                } catch (e) {
                  this.#done(e);
                }
              }
            }

            constructor(
              transactionWrapper: MockedTransactionWrapper,
              done: mocha.Done,
              expectedOrder: TransactionEvent[],
              expectedRequests?: {
                call: GapicFunctionName;
                request?: RequestType;
              }[]
            ) {
              this.#expectedEventOrder = expectedOrder;
              this.#expectedRequests = expectedRequests;
              this.#done = done;
              transactionWrapper.callBackSignaler = (
                call: GapicFunctionName,
                request?: RequestType
              ) => {
                try {
                  this.#requests.push({call, request});
                  this.#eventOrder.push(call);
                  this.#checkForCompletion();
                } catch (e) {
                  done(e);
                }
              };
              this.#transactionWrapper = transactionWrapper;
            }

            /**
             * Returns a callback that will record an event so that order of events
             * can be compared later.
             *
             * @param {UserCodeEvent} [event] The event that should be recorded.
             */
            push(event: UserCodeEvent) {
              return () => {
                try {
                  this.#eventOrder.push(event);
                  this.#checkForCompletion();
                } catch (e) {
                  this.#done(e);
                }
              };
            }
          }

          describe('should pass response back to the user', async () => {
            beforeEach(() => {
              transactionWrapper.mockGapicFunction(
                GapicFunctionName.COMMIT,
                testCommitResp,
                null
              );
            });

            it('should call the callbacks in the proper order with run and commit', done => {
              const tester = new TransactionOrderTester(
                transactionWrapper,
                done,
                [
                  UserCodeEvent.CUSTOM_EVENT,
                  GapicFunctionName.BEGIN_TRANSACTION,
                  UserCodeEvent.RUN_CALLBACK,
                  GapicFunctionName.COMMIT,
                  UserCodeEvent.COMMIT_CALLBACK,
                ]
              );
              transaction.run(tester.push(UserCodeEvent.RUN_CALLBACK));
              transaction.commit(tester.push(UserCodeEvent.COMMIT_CALLBACK));
              tester.push(UserCodeEvent.CUSTOM_EVENT)();
            });
            it('should call the callbacks in the proper order with commit', done => {
              const tester = new TransactionOrderTester(
                transactionWrapper,
                done,
                [
                  UserCodeEvent.CUSTOM_EVENT,
                  GapicFunctionName.BEGIN_TRANSACTION,
                  GapicFunctionName.COMMIT,
                  UserCodeEvent.COMMIT_CALLBACK,
                ]
              );
              transaction.commit(tester.push(UserCodeEvent.COMMIT_CALLBACK));
              tester.push(UserCodeEvent.CUSTOM_EVENT)();
            });
            it('should call the callbacks in the proper order with two run calls', done => {
              const tester = new TransactionOrderTester(
                transactionWrapper,
                done,
                [
                  UserCodeEvent.CUSTOM_EVENT,
                  GapicFunctionName.BEGIN_TRANSACTION,
                  UserCodeEvent.RUN_CALLBACK,
                  UserCodeEvent.RUN_CALLBACK,
                ]
              );
              transaction.run(tester.push(UserCodeEvent.RUN_CALLBACK));
              transaction.run(tester.push(UserCodeEvent.RUN_CALLBACK));
              tester.push(UserCodeEvent.CUSTOM_EVENT)();
            });
            it('should call the callbacks in the proper order with commit and then run', done => {
              const tester = new TransactionOrderTester(
                transactionWrapper,
                done,
                [
                  UserCodeEvent.CUSTOM_EVENT,
                  GapicFunctionName.BEGIN_TRANSACTION,
                  UserCodeEvent.RUN_CALLBACK,
                  GapicFunctionName.COMMIT,
                  UserCodeEvent.COMMIT_CALLBACK,
                ]
              );
              transaction.commit(tester.push(UserCodeEvent.COMMIT_CALLBACK));
              transaction.run(tester.push(UserCodeEvent.RUN_CALLBACK));
              tester.push(UserCodeEvent.CUSTOM_EVENT)();
            });
          });
          describe('should pass response back to the user and check the request', async () => {
            let key: entity.Key;
            beforeEach(() => {
              key = transactionWrapper.datastore.key(['Company', 'Google']);
              transactionWrapper.mockGapicFunction(
                GapicFunctionName.COMMIT,
                testCommitResp,
                null
              );
              transactionWrapper.mockGapicFunction(
                GapicFunctionName.LOOKUP,
                testLookupResp,
                null
              );
              transactionWrapper.mockGapicFunction(
                GapicFunctionName.RUN_QUERY,
                testRunQueryResp,
                null
              );
              transactionWrapper.mockGapicFunction(
                GapicFunctionName.RUN_AGGREGATION_QUERY,
                testRunAggregationQueryResp,
                null
              );
            });
            const beginTransactionRequest = {
              transactionOptions: {},
              projectId: 'project-id',
            };
            const commitRequest = {
              mode: 'TRANSACTIONAL',
              transaction: testRunResp.transaction,
              projectId: 'project-id',
              mutations: [
                {
                  upsert: {
                    properties: {},
                    key: {
                      partitionId: {
                        namespaceId: 'run-without-mock',
                      },
                      path: [
                        {
                          kind: 'Company',
                          name: 'Google',
                        },
                      ],
                    },
                  },
                },
              ],
            };
            const lookupTransactionRequest = {
              keys: [
                {
                  partitionId: {
                    namespaceId: 'run-without-mock',
                  },
                  path: [
                    {
                      kind: 'Company',
                      name: 'Google',
                    },
                  ],
                },
              ],
              projectId: 'project-id',
              readOptions: {
                transaction: testRunResp.transaction,
              },
            };
            describe('put, commit', () => {
              const expectedRequests = [
                {
                  call: GapicFunctionName.BEGIN_TRANSACTION,
                  request: beginTransactionRequest,
                },
                {
                  call: GapicFunctionName.COMMIT,
                  request: commitRequest,
                },
              ];
              it('should verify that there is a BeginTransaction call while beginning later', done => {
                const tester = new TransactionOrderTester(
                  transactionWrapper,
                  done,
                  [
                    GapicFunctionName.BEGIN_TRANSACTION,
                    GapicFunctionName.COMMIT,
                    UserCodeEvent.COMMIT_CALLBACK,
                  ],
                  expectedRequests
                );
                transaction.save({
                  key,
                  data: '',
                });
                transaction.commit(tester.push(UserCodeEvent.COMMIT_CALLBACK));
              });
              it('should verify that there is a BeginTransaction call while beginning early', done => {
                const tester = new TransactionOrderTester(
                  transactionWrapper,
                  done,
                  [
                    GapicFunctionName.BEGIN_TRANSACTION,
                    UserCodeEvent.RUN_CALLBACK,
                    GapicFunctionName.COMMIT,
                    UserCodeEvent.COMMIT_CALLBACK,
                  ],
                  expectedRequests
                );
                transaction.save({
                  key,
                  data: '',
                });
                transaction.run(tester.push(UserCodeEvent.RUN_CALLBACK));
                transaction.commit(tester.push(UserCodeEvent.COMMIT_CALLBACK));
              });
            });
            describe('lookup, lookup, put, commit', () => {
              const expectedRequests = [
                {
                  call: GapicFunctionName.BEGIN_TRANSACTION,
                  request: beginTransactionRequest,
                },
                {
                  call: GapicFunctionName.COMMIT,
                  request: commitRequest,
                },
                {
                  call: GapicFunctionName.LOOKUP,
                  request: lookupTransactionRequest,
                },
                {
                  call: GapicFunctionName.LOOKUP,
                  request: lookupTransactionRequest,
                },
              ];
              it('should verify that there is a BeginTransaction call while beginning later', done => {
                const tester = new TransactionOrderTester(
                  transactionWrapper,
                  done,
                  [
                    GapicFunctionName.BEGIN_TRANSACTION,
                    GapicFunctionName.COMMIT,
                    UserCodeEvent.COMMIT_CALLBACK,
                    GapicFunctionName.LOOKUP,
                    GapicFunctionName.LOOKUP,
                    UserCodeEvent.GET_CALLBACK,
                    UserCodeEvent.GET_CALLBACK,
                  ],
                  expectedRequests
                );
                transaction.get(key, tester.push(UserCodeEvent.GET_CALLBACK));
                transaction.get(key, tester.push(UserCodeEvent.GET_CALLBACK));
                transactionWrapper.transaction.save({
                  key,
                  data: '',
                });
                transaction.commit(tester.push(UserCodeEvent.COMMIT_CALLBACK));
              });
              it('should verify that there is a BeginTransaction call while beginning early', done => {
                const tester = new TransactionOrderTester(
                  transactionWrapper,
                  done,
                  [
                    GapicFunctionName.BEGIN_TRANSACTION,
                    UserCodeEvent.RUN_CALLBACK,
                    GapicFunctionName.COMMIT,
                    UserCodeEvent.COMMIT_CALLBACK,
                    GapicFunctionName.LOOKUP,
                    GapicFunctionName.LOOKUP,
                    UserCodeEvent.GET_CALLBACK,
                    UserCodeEvent.GET_CALLBACK,
                  ],
                  expectedRequests
                );
                transaction.run(tester.push(UserCodeEvent.RUN_CALLBACK));
                transaction.get(key, tester.push(UserCodeEvent.GET_CALLBACK));
                transaction.get(key, tester.push(UserCodeEvent.GET_CALLBACK));
                transactionWrapper.transaction.save({
                  key,
                  data: '',
                });
                transaction.commit(tester.push(UserCodeEvent.COMMIT_CALLBACK));
              });
            });
          });
        });
      });

      describe('run without setting up transaction id', () => {
        // These tests were created so that when transaction.run is restructured we
        // can be confident that it works the same way as before.
        const testRunResp = {
          transaction: Buffer.from(Array.from(Array(100).keys())),
        };
        const namespace = 'run-without-mock';
        const projectId = 'project-id';
        const testErrorMessage = 'test-error';
        const options = {
          projectId,
          namespace,
        };
        const datastore = new Datastore(options);
        const transactionWithoutMock = datastore.transaction();
        const dataClientName = 'DatastoreClient';
        let dataClient: ClientStub | undefined;
        let originalBeginTransactionMethod: Function;

        beforeEach(async () => {
          // In this before hook, save the original beginTransaction method in a variable.
          // After tests are finished, reassign beginTransaction to the variable.
          // This way, mocking beginTransaction in this block doesn't affect other tests.
          const gapic = Object.freeze({
            v1: require('../src/v1'),
          });
          // Datastore Gapic clients haven't been initialized yet, so we initialize them here.
          datastore.clients_.set(
            dataClientName,
            new gapic.v1[dataClientName](options)
          );
          dataClient = datastore.clients_.get(dataClientName);
          if (dataClient && dataClient.beginTransaction) {
            originalBeginTransactionMethod = dataClient.beginTransaction;
          }
        });

        afterEach(() => {
          // beginTransaction has likely been mocked out in these tests.
          // We should reassign beginTransaction back to its original value for tests outside this block.
          if (dataClient && originalBeginTransactionMethod) {
            dataClient.beginTransaction = originalBeginTransactionMethod;
          }
        });

        function setupBeginTransaction(err: Error | null | undefined) {
          if (dataClient) {
            dataClient.beginTransaction = (
              request: protos.google.datastore.v1.IBeginTransactionRequest,
              options: CallOptions,
              callback: Callback<
                protos.google.datastore.v1.IBeginTransactionResponse,
                | protos.google.datastore.v1.IBeginTransactionRequest
                | null
                | undefined,
                {} | null | undefined
              >
            ) => {
              callback(err, testRunResp);
            };
          }
        }

        describe('should pass error back to the user', async () => {
          beforeEach(() => {
            // Mock out begin transaction and send error back to the user
            // from the Gapic layer.
            setupBeginTransaction(new Error(testErrorMessage));
          });

          it('should send back the error when awaiting a promise', async () => {
            try {
              await transactionWithoutMock.run();
              assert.fail('The run call should have failed.');
            } catch (error: any) {
              assert.strictEqual(error['message'], testErrorMessage);
            }
          });
          it('should send back the error when using a callback', done => {
            const runCallback: RunCallback = (
              error: Error | null,
              transaction: Transaction | null,
              response?: google.datastore.v1.IBeginTransactionResponse
            ) => {
              try {
                assert(error);
                assert.strictEqual(error.message, testErrorMessage);
                assert.strictEqual(transaction, null);
                assert.strictEqual(response, testRunResp);
                done();
              } catch (e) {
                done(e);
              }
            };
            transactionWithoutMock.run({}, runCallback);
          });
        });
        describe('should pass response back to the user', async () => {
          beforeEach(() => {
            // Mock out begin transaction and send a response
            // back to the user from the Gapic layer.
            setupBeginTransaction(null);
          });
          it('should send back the response when awaiting a promise', async () => {
            const [transaction, resp] = await transactionWithoutMock.run();
            assert.strictEqual(transaction, transactionWithoutMock);
            assert.strictEqual(resp, testRunResp);
          });
          it('should send back the response when using a callback', done => {
            const runCallback: RunCallback = (
              error: Error | null,
              transaction: Transaction | null,
              response?: google.datastore.v1.IBeginTransactionResponse
            ) => {
              try {
                assert.strictEqual(error, null);
                assert.deepStrictEqual(response, testRunResp);
                assert.strictEqual(transaction, transactionWithoutMock);
                done();
              } catch (e) {
                done(e);
              }
            };
            transactionWithoutMock.run({}, runCallback);
          });
        });
      });

      describe('commit', () => {
        beforeEach(done => {
          transaction.id = TRANSACTION_ID;
          transaction.request_ = (config, callback) => {
            callback(null, {
              transaction: Buffer.from(Array.from(Array(100).keys())),
            });
            // Delay to give the transaction mutex the opportunity to unlock before running tests.
            setImmediate(() => {
              done();
            });
          };
          transaction.run();
        });

        afterEach(() => {
          sinon.restore();
        });

        it('should commit', done => {
          transaction.request_ = config => {
            assert.strictEqual(config.client, 'DatastoreClient');
            assert.strictEqual(config.method, 'commit');
            assert.deepStrictEqual(config.gaxOpts, {});
            done();
          };
          transaction.commit();
        });

        it('should accept gaxOptions', done => {
          const gaxOptions = {};

          transaction.request_ = config => {
            assert.deepStrictEqual(config.gaxOpts, {});
            done();
          };

          transaction.commit(gaxOptions);
        });

        it('should skip the commit', done => {
          transaction.skipCommit = true;

          // If called, the test will blow up.
          transaction.request_ = done;

          transaction.commit(done);
        });

        describe('errors', () => {
          const error = new Error('Error.');
          const apiResponse = {};

          const rollbackError = new Error('Error.');
          const rollbackApiResponse = {};

          beforeEach(() => {
            transaction.rollback = ((callback: Function) => {
              callback(rollbackError, rollbackApiResponse);
            }) as Any;

            transaction.request_ = (config, callback) => {
              callback(error, apiResponse);
            };
          });

          it('should pass the commit error to the callback', done => {
            transaction.commit((err, resp) => {
              assert.strictEqual(err, error);
              assert.strictEqual(resp, apiResponse);
              done();
            });
          });
        });

        it('should pass apiResponse to callback', done => {
          const resp = {success: true};
          transaction.request_ = (config, callback) => {
            callback(null, resp);
          };
          transaction.commit((err, apiResponse) => {
            assert.ifError(err);
            assert.deepStrictEqual(resp, apiResponse);
            done();
          });
        });

        it('should group mutations & execute original methods', () => {
          const deleteArg1 = key(['Product', 123]);
          const deleteArg2 = key(['Product', 234]);

          const saveArg1 = {key: key(['Product', 345]), data: ''};
          const saveArg2 = {key: key(['Product', 456]), data: ''};

          // Queue saves & deletes in varying order.
          transaction.delete(deleteArg1);
          transaction.save(saveArg1);
          transaction.delete(deleteArg2);
          transaction.save(saveArg2);

          const args: Array<{}> = [];

          const deleteStub = sinon
            .stub(Datastore.prototype, 'delete')
            .callsFake(a => {
              args.push(a);
            });
          const saveStub = sinon
            .stub(Datastore.prototype, 'save')
            .callsFake(a => {
              args.push(a);
            });

          transaction.request_ = () => {};

          transaction.commit();

          assert.strictEqual(deleteStub.calledOnce, true);
          assert.strictEqual(saveStub.calledOnce, true);

          assert.strictEqual(args.length, 2);

          // Save arguments must come first.
          assert.deepStrictEqual(args, [
            [saveArg1, saveArg2],
            [deleteArg1, deleteArg2],
          ]);
        });

        it('should honor ordering of mutations (last wins)', () => {
          // The delete should be ignored.
          transaction.delete(key(['Product', 123]));
          transaction.save({key: key(['Product', 123]), data: ''});

          const deleteSpy = sinon
            .stub(Datastore.prototype, 'delete')
            .callsFake(() => {});
          const saveStub = sinon
            .stub(Datastore.prototype, 'save')
            .callsFake(() => {});

          transaction.request_ = () => {};

          transaction.commit();
          assert.strictEqual(deleteSpy.notCalled, true);
          assert.strictEqual(saveStub.calledOnce, true);
        });

        it('should not squash key-incomplete mutations', done => {
          transaction.save({key: key(['Product']), data: ''});
          transaction.save({key: key(['Product']), data: ''});

          sinon
            .stub(Datastore.prototype, 'save')
            .callsFake((entities: Entity[]) => {
              assert.strictEqual(entities.length, 2);
              done();
            });

          transaction.request_ = () => {};

          transaction.commit();
        });

        it('should send the built request object', done => {
          transaction.requests_ = [
            {
              mutations: [{a: 'b'}, {c: 'd'}],
            },
            {
              mutations: [{e: 'f'}, {g: 'h'}],
            },
          ];

          transaction.request_ = config => {
            assert.deepStrictEqual(config.reqOpts, {
              mutations: [{a: 'b'}, {c: 'd'}, {e: 'f'}, {g: 'h'}],
            });
            done();
          };

          transaction.commit();
        });

        it('should execute the queued callbacks', () => {
          let cb1Called = false;
          let cb2Called = false;

          transaction.requestCallbacks_ = [
            () => {
              cb1Called = true;
            },
            () => {
              cb2Called = true;
            },
          ];

          transaction.request_ = (config, cb) => {
            cb();
          };

          transaction.commit();

          assert(cb1Called);
          assert(cb2Called);
        });
      });

      describe('createQuery', () => {
        it('should return query from datastore.createQuery', () => {
          const args = ['0', '1']; // Query only accepts to accept string||null values
          const createQueryReturnValue = {};

          transaction.datastore.createQuery = function (...ags: Any) {
            assert.strictEqual(this, transaction);
            assert.strictEqual(ags[0], args[0]);
            assert.strictEqual(ags[1], args[1]);
            return createQueryReturnValue as Query;
          };

          const query = transaction.createQuery(args[0], args[1]); // verbose de-structure
          assert.strictEqual(query, createQueryReturnValue);
        });
      });

      describe('delete', () => {
        it('should push entities into a queue', () => {
          const keys = [
            key('Product123'),
            key('Product234'),
            key('Product345'),
          ];

          transaction.delete(keys);

          assert.strictEqual(transaction.modifiedEntities_.length, keys.length);

          transaction.modifiedEntities_.forEach((queuedEntity: Entity) => {
            assert.strictEqual(queuedEntity.method, 'delete');
            assert(keys.indexOf(queuedEntity.entity.key) > -1);
            assert.deepStrictEqual(queuedEntity.args, [
              queuedEntity.entity.key,
            ]);
          });
        });
      });

      describe('insert', () => {
        afterEach(() => {
          sinon.restore();
        });

        it('should prepare entity objects', done => {
          const entityObject = {};
          const preparedEntityObject = {prepared: true};
          const expectedEntityObject = Object.assign({}, preparedEntityObject, {
            method: 'insert',
          });

          sinon
            .stub(DatastoreRequest, 'prepareEntityObject_')
            .callsFake(obj => {
              assert.strictEqual(obj, entityObject);
              return preparedEntityObject as {};
            });

          transaction.save = (entities: Entity[]) => {
            assert.deepStrictEqual(entities[0], expectedEntityObject);
            done();
          };

          transaction.insert(entityObject);
        });

        it('should pass the correct arguments to save', done => {
          transaction.save = (entities: Entity[]) => {
            assert.deepStrictEqual(JSON.parse(JSON.stringify(entities)), [
              {
                key: {
                  namespace: 'ns',
                  kind: 'Company',
                  path: ['Company', null],
                },
                data: {},
                method: 'insert',
              },
            ]);
            done();
          };
          const key = new entity.Key({namespace: 'ns', path: ['Company']});
          transaction.insert({key, data: {}});
        });
      });

      describe('rollback', () => {
        beforeEach(() => {
          transaction.id = TRANSACTION_ID;
        });

        it('should rollback', done => {
          transaction.request_ = config => {
            assert.strictEqual(config.client, 'DatastoreClient');
            assert.strictEqual(config.method, 'rollback');
            assert.deepStrictEqual(config.gaxOpts, {});
            done();
          };
          transaction.rollback();
        });

        it('should allow setting gaxOptions', done => {
          const gaxOptions = {};

          transaction.request_ = config => {
            assert.strictEqual(config.gaxOpts, gaxOptions);
            done();
          };

          transaction.rollback(gaxOptions);
        });

        it('should pass error to callback', done => {
          const error = new Error('Error.');
          transaction.request_ = (config, callback) => {
            callback(error);
          };
          transaction.rollback(err => {
            assert.deepStrictEqual(err, error);
            done();
          });
        });

        it('should pass apiResponse to callback', done => {
          const resp = {success: true};
          transaction.request_ = (config, callback) => {
            callback(null, resp);
          };
          transaction.rollback((err, apiResponse) => {
            assert.ifError(err);
            assert.deepStrictEqual(resp, apiResponse);
            done();
          });
        });

        it('should set skipCommit', done => {
          transaction.request_ = (config, callback) => {
            callback();
          };
          transaction.rollback(() => {
            assert.strictEqual(transaction.skipCommit, true);
            done();
          });
        });

        it('should set skipCommit when rollback errors', done => {
          transaction.request_ = (config, callback) => {
            callback(new Error('Error.'));
          };
          transaction.rollback(() => {
            assert.strictEqual(transaction.skipCommit, true);
            done();
          });
        });
      });

      describe('run', () => {
        it('should make the correct API request', done => {
          transaction.request_ = config => {
            assert.strictEqual(config.client, 'DatastoreClient');
            assert.strictEqual(config.method, 'beginTransaction');
            assert.deepStrictEqual(config.reqOpts, {transactionOptions: {}});
            assert.strictEqual(config.gaxOpts, undefined);
            done();
          };

          transaction.run(assert.ifError);
        });

        it('should allow setting gaxOptions', done => {
          const gaxOptions = {};

          transaction.request_ = config => {
            assert.strictEqual(config.gaxOpts, gaxOptions);
            done();
          };

          transaction.run({gaxOptions});
        });

        describe('options.readOnly', () => {
          it('should respect the readOnly option', done => {
            const options = {
              readOnly: true,
            };

            transaction.request_ = (config: Any) => {
              assert.deepStrictEqual(
                config.reqOpts.transactionOptions.readOnly,
                {}
              );
              done();
            };

            transaction.run(options, assert.ifError);
          });

          it('should respect the global readOnly option', done => {
            transaction.readOnly = true;

            transaction.request_ = config => {
              assert.deepStrictEqual(
                config.reqOpts!.transactionOptions!.readOnly,
                {}
              );
              done();
            };

            transaction.run(assert.ifError);
          });
        });

        describe('options.transactionId', () => {
          it('should respect the transactionId option', done => {
            const options = {
              transactionId: 'transaction-id',
            };

            transaction.request_ = config => {
              assert.deepStrictEqual(
                config.reqOpts!.transactionOptions!.readWrite,
                {
                  previousTransaction: options.transactionId,
                }
              );
              done();
            };

            transaction.run(options, assert.ifError);
          });

          it('should respect the global transactionId option', done => {
            transaction.id = 'transaction-id';

            transaction.request_ = config => {
              assert.deepStrictEqual(
                config.reqOpts!.transactionOptions!.readWrite,
                {
                  previousTransaction: transaction.id,
                }
              );
              done();
            };

            transaction.run(assert.ifError);
          });
        });

        describe('options.transactionOptions', () => {
          it('should allow full override of transactionOptions', done => {
            transaction.readOnly = true;

            const options = {
              transactionOptions: {
                readWrite: {
                  previousTransaction: 'transaction-id',
                },
              },
            } as {} as TransactionOptions;

            transaction.request_ = (config: RequestConfig) => {
              assert.deepStrictEqual(config.reqOpts, options);
              done();
            };

            transaction.run(options, assert.ifError);
          });
        });

        describe('error', () => {
          const error = new Error('Error.');
          const apiResponse = {};

          beforeEach(() => {
            transaction.request_ = (config, callback) => {
              callback(error, apiResponse);
            };
          });

          it('should pass error & API response to callback', done => {
            transaction.run((err, transaction, apiResponse_) => {
              assert.strictEqual(err, error);
              assert.strictEqual(transaction, null);
              assert.strictEqual(apiResponse_, apiResponse);
              done();
            });
          });
        });

        describe('success', () => {
          const apiResponse = {
            transaction: TRANSACTION_ID,
          };

          beforeEach(() => {
            transaction.request_ = (config, callback) => {
              callback(null, apiResponse);
            };
          });

          it('should set transaction id', done => {
            delete transaction.id;
            transaction.run((err: Error | null) => {
              assert.ifError(err);
              assert.strictEqual(transaction.id, TRANSACTION_ID);
              done();
            });
          });

          it('should exec callback with Transaction & apiResponse', done => {
            transaction.run((err, transaction_, apiResponse_) => {
              assert.ifError(err);
              assert.strictEqual(transaction_, transaction);
              assert.deepStrictEqual(apiResponse_, apiResponse);
              done();
            });
          });
        });
      });

      describe('save', () => {
        it('should push entities into a queue', () => {
          const entities = [
            {key: key('Product123'), data: 123},
            {key: key('Product234'), data: 234},
            {key: key('Product345'), data: 345},
          ];
          transaction.save(entities);
          assert.strictEqual(
            transaction.modifiedEntities_.length,
            entities.length
          );
          transaction.modifiedEntities_.forEach((queuedEntity: Entity) => {
            assert.strictEqual(queuedEntity.method, 'save');
            const match = entities.filter(ent => {
              return ent.key === queuedEntity.entity.key;
            })[0];
            assert.deepStrictEqual(queuedEntity.args, [match]);
          });
        });
      });

      describe('update', () => {
        afterEach(() => {
          sinon.restore();
        });

        it('should prepare entity objects', done => {
          const entityObject = {};
          const preparedEntityObject = {prepared: true};
          const expectedEntityObject = Object.assign({}, preparedEntityObject, {
            method: 'update',
          });

          sinon
            .stub(DatastoreRequest, 'prepareEntityObject_')
            .callsFake(obj => {
              assert.strictEqual(obj, entityObject);
              return preparedEntityObject as {};
            });

          transaction.save = (entities: Entity[]) => {
            assert.deepStrictEqual(entities[0], expectedEntityObject);
            done();
          };

          transaction.update(entityObject);
        });

        it('should pass the correct arguments to save', done => {
          transaction.save = (entities: Entity[]) => {
            assert.deepStrictEqual(JSON.parse(JSON.stringify(entities)), [
              {
                key: {
                  namespace: 'ns',
                  kind: 'Company',
                  path: ['Company', null],
                },
                data: {},
                method: 'update',
              },
            ]);
            done();
          };
          const key = new entity.Key({namespace: 'ns', path: ['Company']});
          transaction.update({key, data: {}});
        });
      });

      describe('upsert', () => {
        afterEach(() => {
          sinon.restore();
        });

        it('should prepare entity objects', done => {
          const entityObject = {};
          const preparedEntityObject = {prepared: true};
          const expectedEntityObject = Object.assign({}, preparedEntityObject, {
            method: 'upsert',
          });

          sinon
            .stub(DatastoreRequest, 'prepareEntityObject_')
            .callsFake(obj => {
              assert.strictEqual(obj, entityObject);
              return preparedEntityObject as {};
            });

          transaction.save = (entities: Entity[]) => {
            assert.deepStrictEqual(entities[0], expectedEntityObject);
            done();
          };

          transaction.upsert(entityObject);
        });

        it('should pass the correct arguments to save', done => {
          transaction.save = (entities: Entity[]) => {
            assert.deepStrictEqual(JSON.parse(JSON.stringify(entities)), [
              {
                key: {
                  namespace: 'ns',
                  kind: 'Company',
                  path: ['Company', null],
                },
                data: {},
                method: 'upsert',
              },
            ]);
            done();
          };
          const key = new entity.Key({namespace: 'ns', path: ['Company']});
          transaction.upsert({key, data: {}});
        });
      });
    });
  }
);
