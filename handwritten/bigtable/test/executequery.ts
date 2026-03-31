// Copyright 2025 Google LLC
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
import * as promisify from '@google-cloud/promisify';
import * as assert from 'assert';
import {before, beforeEach, afterEach, describe, it} from 'mocha';
import * as sinon from 'sinon';
import * as proxyquire from 'proxyquire';
import {grpc} from 'google-gax';
import * as inst from '../src/instance';
import {Bigtable} from '../src';
import {google} from '../protos/protos';
import * as SqlTypes from '../src/execute-query/types';
import * as pumpify from 'pumpify';
import {
  ArrayReadableStream,
  createMetadata,
  createPrepareQueryResponse,
  createProtoRows,
  pbType,
} from './utils/proto-bytes';
import {QueryResultRow} from '../src/execute-query/values';
import {
  PreparedStatement,
  SHOULD_REFRESH_SOON_PERIOD_MS,
} from '../src/execute-query/preparedstatement';
import {MetadataConsumer} from '../src/execute-query/metadataconsumer';
import {PassThrough} from 'stream';
import * as SqlValues from '../src/execute-query/values';

const sandbox = sinon.createSandbox();

const fakePromisify = Object.assign({}, promisify, {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  promisifyAll(klass: Function, options: any) {
    if (klass.name !== 'Instance') {
      return;
    }
    assert.deepStrictEqual(options.exclude, [
      'appProfile',
      'cluster',
      'table',
      'getBackupsStream',
      'getTablesStream',
      'getAppProfilesStream',
      'view',
    ]);
  },
});

class MockPreparedStatement {
  callbacks: any[] = [];
  markedAsExpired = false;
  getData = (cb: any, timeout: any) => {
    this.callbacks.push(cb);
  };
  getParameterTypes = () => {
    return {};
  };
  markAsExpired = () => {
    this.markedAsExpired = true;
  };
}

function createResultSetMetadata(
  ...values: [string | null, google.bigtable.v2.Type][]
): SqlTypes.ResultSetMetadata {
  return MetadataConsumer.parseMetadata(createMetadata(...values).metadata!);
}

const performCallbacks = (callbacks: any[], interval: number) => {
  let counter = 0;
  const performNext = () => {
    callbacks[counter++]();
    if (counter < callbacks.length) {
      setTimeout(performNext, interval);
    }
  };
  performNext();
};

const createExpiredQueryError = () => {
  return {
    code: grpc.status.FAILED_PRECONDITION,
    details: 'failed precondition',
    statusDetails: [
      {
        violations: [
          {
            type: 'PREPARED_QUERY_EXPIRED',
            description:
              'The prepared query has expired. Please re-issue the ExecuteQuery with a valid prepared query.',
          },
        ],
      },
    ],
  };
};

describe('Bigtable/ExecuteQueryStateMachine', () => {
  const INSTANCE_ID = 'my-instance';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const BIGTABLE = {
    projectName: 'projects/my-project',
    projectId: 'my-project',
    request: () => {},
  } as Bigtable;
  let Instance: typeof inst.Instance;
  let instance: inst.Instance;
  let checksumValidStub: any;

  before(() => {
    Instance = proxyquire('../src/instance.js', {
      '@google-cloud/promisify': fakePromisify,
      pumpify,
    }).Instance;
  });

  beforeEach(() => {
    instance = new Instance(BIGTABLE, INSTANCE_ID);
    checksumValidStub = sinon
      .stub(SqlValues, 'checksumValid')
      .callsFake(() => true);
  });

  afterEach(() => {
    sandbox.restore();
    checksumValidStub.restore();
  });

  describe('happy_path', () => {
    it('responses within timeout', done => {
      const bigtableStream = new PassThrough({
        objectMode: true,
        highWaterMark: 0,
      }) as any;
      bigtableStream.abort = () => {};
      BIGTABLE.request = () => bigtableStream as any;
      const preparedStatement = new MockPreparedStatement();
      const resultStream = instance.createExecuteQueryStream({
        preparedStatement,
      } as any) as any;
      const responses: QueryResultRow[] = [];
      resultStream.on('data', (row: any) => {
        responses.push(row);
      });
      performCallbacks(
        [
          () => {
            clearTimeout(resultStream._stateMachine.timeoutTimer);
            assert.equal(resultStream._stateMachine.state, 'AwaitingQueryPlan');
            preparedStatement.callbacks[0](
              undefined,
              'bytes',
              createResultSetMetadata(['f1', pbType({int64Type: {}})]),
            );
          },
          () => {
            assert.equal(
              resultStream._stateMachine.state,
              'BeforeFirstResumeToken',
            );
            bigtableStream.write(
              createProtoRows(undefined, undefined, undefined, {intValue: 1}),
            );
          },
          () => {
            assert.equal(
              resultStream._stateMachine.state,
              'BeforeFirstResumeToken',
            );
            bigtableStream.write(
              createProtoRows(undefined, 111, undefined, {intValue: 2}),
            );
          },
          () => {
            assert.equal(
              resultStream._stateMachine.state,
              'BeforeFirstResumeToken',
            );
            bigtableStream.write(
              createProtoRows('token1', undefined, undefined),
            );
          },
          () => {
            assert.equal(
              resultStream._stateMachine.state,
              'AfterFirstResumeToken',
            );
            bigtableStream.write(
              createProtoRows('token2', undefined, undefined),
            );
          },
          () => {
            assert.equal(
              resultStream._stateMachine.state,
              'AfterFirstResumeToken',
            );
            bigtableStream.emit('end');
            bigtableStream.emit('close');
          },
          () => {
            assert.equal(resultStream._stateMachine.state, 'Finished');
            assert.equal(responses.length, 2);
            assert.equal(responses[0].get(0), 1);
            assert.equal(responses[1].get(0), 2);
            done();
          },
        ],
        1,
      );
    });
  });

  describe('queryPlanErrors', () => {
    it('one query plan error', done => {
      const bigtableStream = new PassThrough({
        objectMode: true,
        highWaterMark: 0,
      }) as any;
      bigtableStream.abort = () => {};
      BIGTABLE.request = () => bigtableStream as any;
      const preparedStatement = new MockPreparedStatement();
      const resultStream = instance.createExecuteQueryStream({
        preparedStatement,
      } as any) as any;
      const responses: QueryResultRow[] = [];
      resultStream.on('data', (row: any) => {
        responses.push(row);
      });

      performCallbacks(
        [
          () => {
            clearTimeout(resultStream._stateMachine.timeoutTimer);
            assert.equal(resultStream._stateMachine.state, 'AwaitingQueryPlan');
            assert.equal(preparedStatement.callbacks.length, 1);
          },
          () => {
            preparedStatement.callbacks[0](new Error('fetching QP failed'));
          },
          () => {
            assert.equal(resultStream._stateMachine.state, 'AwaitingQueryPlan');
            assert.equal(preparedStatement.callbacks.length, 2);
            preparedStatement.callbacks[1](
              undefined,
              'bytes',
              createResultSetMetadata(['f1', pbType({int64Type: {}})]),
            );
          },
          () => {
            assert.equal(
              resultStream._stateMachine.state,
              'BeforeFirstResumeToken',
            );
            bigtableStream.write(
              createProtoRows('token1', 111, undefined, {intValue: 1}),
            );
          },
          () => {
            assert.equal(
              resultStream._stateMachine.state,
              'AfterFirstResumeToken',
            );
            bigtableStream.emit('end');
            bigtableStream.emit('close');
          },
          () => {
            assert.equal(resultStream._stateMachine.state, 'Finished');
            assert.equal(responses[0].get(0), 1);
            done();
          },
        ],
        1,
      );
    });

    it('query plan expired error', done => {
      const bigtableStream = new PassThrough({
        objectMode: true,
        highWaterMark: 0,
      }) as any;
      bigtableStream.abort = () => {};

      const bigtableStream2 = new PassThrough({
        objectMode: true,
        highWaterMark: 0,
      }) as any;
      bigtableStream.abort = () => {};

      const expiredError = createExpiredQueryError();
      BIGTABLE.request = () => bigtableStream as any;
      const preparedStatement = new MockPreparedStatement();
      const resultStream = instance.createExecuteQueryStream({
        preparedStatement,
      } as any) as any;
      const responses: QueryResultRow[] = [];
      resultStream.on('data', (row: any) => {
        responses.push(row);
      });

      performCallbacks(
        [
          () => {
            clearTimeout(resultStream._stateMachine.timeoutTimer);
            assert.equal(resultStream._stateMachine.state, 'AwaitingQueryPlan');
            assert.equal(preparedStatement.callbacks.length, 1);
          },
          () => {
            preparedStatement.callbacks[0](
              undefined,
              'bytes',
              createResultSetMetadata(['f1', pbType({int64Type: {}})]),
            );
          },
          () => {
            assert.equal(
              resultStream._stateMachine.state,
              'BeforeFirstResumeToken',
            );
            BIGTABLE.request = () => {
              return bigtableStream2 as any;
            };
            bigtableStream.emit('error', expiredError);
          },
          () => {
            assert.equal(
              resultStream._stateMachine.state,
              'DrainAndRefreshQueryPlan',
            );
            assert.equal(resultStream._stateMachine.retryTimer !== null, true);
            assert.equal(preparedStatement.markedAsExpired, true);
            // speed up the retry timer
            clearTimeout(resultStream._stateMachine.retryTimer);
            resultStream._stateMachine.startNextAttempt();
          },
          () => {
            assert.equal(resultStream._stateMachine.state, 'AwaitingQueryPlan');
            assert.equal(preparedStatement.callbacks.length, 2);
            preparedStatement.callbacks[1](
              undefined,
              'bytes',
              createResultSetMetadata(['f2', pbType({int64Type: {}})]),
            );
          },
          () => {
            assert.equal(
              resultStream._stateMachine.state,
              'BeforeFirstResumeToken',
            );
            bigtableStream2.write(
              createProtoRows('token1', 111, undefined, {intValue: 1}),
            );
          },
          () => {
            assert.equal(
              resultStream._stateMachine.state,
              'AfterFirstResumeToken',
            );
            bigtableStream2.emit('end');
            bigtableStream2.emit('close');
          },
          () => {
            assert.equal(resultStream._stateMachine.state, 'Finished');
            assert.throws(() => {
              // we make sure that the column name from the first preparedStatement is not present.
              responses[0].get('f1');
            });
            assert.equal(responses[0].get('f2'), 1);
            done();
          },
        ],
        1,
      );
    });

    it('query plan expired error after data was recieved', done => {
      const bigtableStream = new PassThrough({
        objectMode: true,
        highWaterMark: 0,
      }) as any;
      bigtableStream.abort = () => {};

      const bigtableStream2 = new PassThrough({
        objectMode: true,
        highWaterMark: 0,
      }) as any;
      bigtableStream.abort = () => {};

      const expiredError = createExpiredQueryError();
      BIGTABLE.request = () => bigtableStream as any;
      const preparedStatement = new MockPreparedStatement();
      const resultStream = instance.createExecuteQueryStream({
        preparedStatement,
      } as any) as any;
      const responses: QueryResultRow[] = [];
      resultStream.on('data', (row: any) => {
        responses.push(row);
      });

      performCallbacks(
        [
          () => {
            clearTimeout(resultStream._stateMachine.timeoutTimer);
            assert.equal(resultStream._stateMachine.state, 'AwaitingQueryPlan');
            assert.equal(preparedStatement.callbacks.length, 1);
          },
          () => {
            preparedStatement.callbacks[0](
              undefined,
              'bytes',
              createResultSetMetadata(['f1', pbType({int64Type: {}})]),
            );
          },
          () => {
            assert.equal(
              resultStream._stateMachine.state,
              'BeforeFirstResumeToken',
            );
            bigtableStream.write(
              createProtoRows(undefined, undefined, undefined, {intValue: 1}),
            );
          },
          () => {
            assert.equal(
              resultStream._stateMachine.state,
              'BeforeFirstResumeToken',
            );
            BIGTABLE.request = () => {
              return bigtableStream2 as any;
            };
            bigtableStream.emit('error', expiredError);
          },
          () => {
            assert.equal(
              resultStream._stateMachine.state,
              'DrainAndRefreshQueryPlan',
            );
            assert.equal(resultStream._stateMachine.retryTimer !== null, true);
            // speed up the retry timer
            clearTimeout(resultStream._stateMachine.retryTimer);
            resultStream._stateMachine.startNextAttempt();
          },
          () => {
            assert.equal(resultStream._stateMachine.state, 'AwaitingQueryPlan');
            assert.equal(preparedStatement.callbacks.length, 2);
            preparedStatement.callbacks[1](
              undefined,
              'bytes',
              createResultSetMetadata(['f1', pbType({int64Type: {}})]),
            );
          },
          () => {
            assert.equal(
              resultStream._stateMachine.state,
              'BeforeFirstResumeToken',
            );
            bigtableStream2.write(
              createProtoRows('token1', 111, undefined, {intValue: 2}),
            );
          },
          () => {
            assert.equal(
              resultStream._stateMachine.state,
              'AfterFirstResumeToken',
            );
            bigtableStream2.emit('end');
            bigtableStream2.emit('close');
          },
          () => {
            assert.equal(resultStream._stateMachine.state, 'Finished');
            // assert we only got the second response, the first one was discarded
            assert.equal(responses.length, 1);
            assert.equal(responses[0].get(0), 2);
            done();
          },
        ],
        1,
      );
    });

    it('query plan expired error after token', done => {
      const bigtableStream = new PassThrough({
        objectMode: true,
        highWaterMark: 0,
      }) as any;
      bigtableStream.abort = () => {};

      const expiredError = createExpiredQueryError();
      BIGTABLE.request = () => bigtableStream as any;
      const preparedStatement = new MockPreparedStatement();
      const resultStream = instance.createExecuteQueryStream({
        preparedStatement,
      } as any) as any;
      let errorEmitted = false;
      const rowsEmitted = 0;
      const responses: QueryResultRow[] = [];
      resultStream
        .on('error', () => {
          errorEmitted = true;
        })
        .on('data', (row: any) => {
          responses.push(row);
        });

      performCallbacks(
        [
          () => {
            clearTimeout(resultStream._stateMachine.timeoutTimer);
            assert.equal(resultStream._stateMachine.state, 'AwaitingQueryPlan');
            assert.equal(preparedStatement.callbacks.length, 1);
          },
          () => {
            preparedStatement.callbacks[0](
              undefined,
              'bytes',
              createResultSetMetadata(['f1', pbType({int64Type: {}})]),
            );
          },
          () => {
            assert.equal(
              resultStream._stateMachine.state,
              'BeforeFirstResumeToken',
            );
            bigtableStream.write(
              createProtoRows('token1', 111, undefined, {intValue: 1}),
            );
          },
          () => {
            assert.equal(
              resultStream._stateMachine.state,
              'AfterFirstResumeToken',
            );
            bigtableStream.write(expiredError);
          },
          () => {
            assert.equal(resultStream._stateMachine.state, 'Failed');
            assert.equal(responses.length, 1);
            assert.equal(responses[0].get(0), 1);
            assert.equal(errorEmitted, true);
            done();
          },
        ],
        1,
      );
    });
  });

  describe('streamEnding', () => {
    it('empty stream', done => {
      const bigtableStream = new PassThrough({
        objectMode: true,
        highWaterMark: 0,
      }) as any;
      bigtableStream.abort = () => {};
      BIGTABLE.request = () => bigtableStream as any;
      const preparedStatement = new MockPreparedStatement();
      const resultStream = instance.createExecuteQueryStream({
        preparedStatement,
      } as any) as any;
      let errorEmitted = false;
      const responses: QueryResultRow[] = [];
      resultStream.on('data', (row: any) => {
        responses.push(row);
      });
      let streamEnded = false;
      resultStream.on('end', () => {
        streamEnded = true;
      });
      resultStream.on('error', () => {
        errorEmitted = true;
      });

      performCallbacks(
        [
          () => {
            clearTimeout(resultStream._stateMachine.timeoutTimer);
            assert.equal(resultStream._stateMachine.state, 'AwaitingQueryPlan');
            assert.equal(preparedStatement.callbacks.length, 1);
          },
          () => {
            preparedStatement.callbacks[0](
              undefined,
              'bytes',
              createResultSetMetadata(['f1', pbType({int64Type: {}})]),
            );
          },
          () => {
            assert.equal(
              resultStream._stateMachine.state,
              'BeforeFirstResumeToken',
            );
            bigtableStream.emit('end');
            bigtableStream.emit('close');
          },
          () => {
            assert.equal(resultStream._stateMachine.state, 'Finished');
            assert.equal(errorEmitted, false);
            assert.equal(responses.length, 0);
            assert.equal(streamEnded, true);
            done();
          },
        ],
        1,
      );
    });

    it('unexpected end after some data before token', done => {
      const bigtableStream = new PassThrough({
        objectMode: true,
        highWaterMark: 0,
      }) as any;
      bigtableStream.abort = () => {};
      BIGTABLE.request = () => bigtableStream as any;
      const preparedStatement = new MockPreparedStatement();
      const resultStream = instance.createExecuteQueryStream({
        preparedStatement,
      } as any) as any;
      let errorEmitted = false;
      let rowsEmitted = 0;
      resultStream
        .on('error', () => {
          errorEmitted = true;
        })
        .on('data', () => {
          rowsEmitted += 1;
        });

      performCallbacks(
        [
          () => {
            clearTimeout(resultStream._stateMachine.timeoutTimer);
            assert.equal(resultStream._stateMachine.state, 'AwaitingQueryPlan');
            assert.equal(preparedStatement.callbacks.length, 1);
          },
          () => {
            preparedStatement.callbacks[0](
              undefined,
              'bytes',
              createResultSetMetadata(['f1', pbType({int64Type: {}})]),
            );
          },
          () => {
            assert.equal(
              resultStream._stateMachine.state,
              'BeforeFirstResumeToken',
            );
            bigtableStream.write(
              createProtoRows(undefined, undefined, undefined, {intValue: 1}),
            );
          },
          () => {
            assert.equal(
              resultStream._stateMachine.state,
              'BeforeFirstResumeToken',
            );
            bigtableStream.emit('end');
            bigtableStream.emit('close');
          },
          () => {
            assert.equal(resultStream._stateMachine.state, 'Failed');
            assert.equal(errorEmitted, true);
            assert.equal(rowsEmitted, 0);
            done();
          },
        ],
        1,
      );
    });

    it('unexpected end before a token', done => {
      const bigtableStream = new PassThrough({
        objectMode: true,
        highWaterMark: 0,
      }) as any;
      bigtableStream.abort = () => {};
      BIGTABLE.request = () => bigtableStream as any;
      const preparedStatement = new MockPreparedStatement();
      const resultStream = instance.createExecuteQueryStream({
        preparedStatement,
      } as any) as any;
      let errorEmitted = false;
      const responses: QueryResultRow[] = [];
      resultStream.on('data', (row: any) => {
        responses.push(row);
      });
      resultStream.on('error', () => {
        errorEmitted = true;
      });
      performCallbacks(
        [
          () => {
            clearTimeout(resultStream._stateMachine.timeoutTimer);
            assert.equal(resultStream._stateMachine.state, 'AwaitingQueryPlan');
            assert.equal(preparedStatement.callbacks.length, 1);
          },
          () => {
            preparedStatement.callbacks[0](
              undefined,
              'bytes',
              createResultSetMetadata(['f1', pbType({int64Type: {}})]),
            );
          },
          () => {
            assert.equal(
              resultStream._stateMachine.state,
              'BeforeFirstResumeToken',
            );
            bigtableStream.write(
              createProtoRows(undefined, undefined, undefined, {intValue: 1}),
            );
          },
          () => {
            assert.equal(
              resultStream._stateMachine.state,
              'BeforeFirstResumeToken',
            );
            bigtableStream.write(
              createProtoRows('token1', 111, undefined, {intValue: 2}),
            );
          },
          () => {
            assert.equal(
              resultStream._stateMachine.state,
              'AfterFirstResumeToken',
            );
            bigtableStream.write(
              createProtoRows(undefined, undefined, undefined, {intValue: 3}),
            );
          },
          () => {
            assert.equal(
              resultStream._stateMachine.state,
              'AfterFirstResumeToken',
            );
            bigtableStream.emit('end');
            bigtableStream.emit('close');
          },
          () => {
            assert.equal(resultStream._stateMachine.state, 'Failed');
            assert.equal(errorEmitted, true);
            assert.equal(responses.length, 2);
            assert.equal(responses[0].get(0), 1);
            assert.equal(responses[1].get(0), 2);
            done();
          },
        ],
        1,
      );
    });

    it('empty response - query returned no rows', done => {
      const bigtableStream = new PassThrough({
        objectMode: true,
        highWaterMark: 0,
      }) as any;
      bigtableStream.abort = () => {};
      BIGTABLE.request = () => bigtableStream as any;
      const preparedStatement = new MockPreparedStatement();
      const resultStream = instance.createExecuteQueryStream({
        preparedStatement,
      } as any) as any;
      let errorEmitted = false;
      let rowsEmitted = 0;
      resultStream
        .on('error', () => {
          errorEmitted = true;
        })
        .on('data', () => {
          rowsEmitted += 1;
        });

      performCallbacks(
        [
          () => {
            clearTimeout(resultStream._stateMachine.timeoutTimer);
            assert.equal(resultStream._stateMachine.state, 'AwaitingQueryPlan');
            assert.equal(preparedStatement.callbacks.length, 1);
          },
          () => {
            preparedStatement.callbacks[0](
              undefined,
              'bytes',
              createResultSetMetadata(['f1', pbType({int64Type: {}})]),
            );
          },
          () => {
            assert.equal(
              resultStream._stateMachine.state,
              'BeforeFirstResumeToken',
            );
            bigtableStream.write(
              createProtoRows('token1', undefined, undefined),
            );
          },
          () => {
            assert.equal(
              resultStream._stateMachine.state,
              'AfterFirstResumeToken',
            );
            bigtableStream.emit('end');
            bigtableStream.emit('close');
          },
          () => {
            assert.equal(resultStream._stateMachine.state, 'Finished');
            assert.equal(errorEmitted, false);
            assert.equal(rowsEmitted, 0);
            done();
          },
        ],
        1,
      );
    });
  });

  describe('streamErrors', () => {
    it('retryable error before anything', done => {
      const bigtableStream = new PassThrough({
        objectMode: true,
        highWaterMark: 0,
      }) as any;
      bigtableStream.abort = () => {};

      const bigtableStream2 = new PassThrough({
        objectMode: true,
        highWaterMark: 0,
      }) as any;
      bigtableStream.abort = () => {};

      const retryableError = {
        code: grpc.status.DEADLINE_EXCEEDED,
        message: 'retryable error',
      };

      BIGTABLE.request = () => bigtableStream as any;
      const preparedStatement = new MockPreparedStatement();
      const resultStream = instance.createExecuteQueryStream({
        preparedStatement,
      } as any) as any;
      const responses: QueryResultRow[] = [];
      resultStream.on('data', (row: any) => {
        responses.push(row);
      });
      performCallbacks(
        [
          () => {
            clearTimeout(resultStream._stateMachine.timeoutTimer);
            assert.equal(resultStream._stateMachine.state, 'AwaitingQueryPlan');
            preparedStatement.callbacks[0](
              undefined,
              'bytes',
              createResultSetMetadata(['f1', pbType({int64Type: {}})]),
            );
          },
          () => {
            assert.equal(
              resultStream._stateMachine.state,
              'BeforeFirstResumeToken',
            );
            BIGTABLE.request = () => {
              return bigtableStream2 as any;
            };
            bigtableStream.emit('error', retryableError);
          },
          () => {
            assert.equal(
              resultStream._stateMachine.state,
              'DrainingBeforeResumeToken',
            );
            assert.equal(resultStream._stateMachine.retryTimer !== null, true);
            // speed up the retry timer
            clearTimeout(resultStream._stateMachine.retryTimer);
            resultStream._stateMachine.startNextAttempt();
          },
          () => {
            assert.equal(preparedStatement.callbacks.length, 1); // query plan was not refreshed
            assert.equal(
              resultStream._stateMachine.state,
              'BeforeFirstResumeToken',
            );
            bigtableStream2.write(
              createProtoRows(undefined, undefined, undefined, {intValue: 1}),
            );
          },
          () => {
            assert.equal(
              resultStream._stateMachine.state,
              'BeforeFirstResumeToken',
            );
            bigtableStream2.write(
              createProtoRows('token', 111, undefined, {intValue: 2}),
            );
          },
          () => {
            assert.equal(
              resultStream._stateMachine.state,
              'AfterFirstResumeToken',
            );
            bigtableStream2.emit('end');
            bigtableStream2.emit('close');
          },
          () => {
            assert.equal(resultStream._stateMachine.state, 'Finished');
            assert.equal(responses.length, 2);
            assert.equal(responses[0].get(0), 1);
            assert.equal(responses[1].get(0), 2);
            done();
          },
        ],
        1,
      );
    });

    it('retryable error before token', done => {
      const bigtableStream = new PassThrough({
        objectMode: true,
        highWaterMark: 0,
      }) as any;
      bigtableStream.abort = () => {};

      const bigtableStream2 = new PassThrough({
        objectMode: true,
        highWaterMark: 0,
      }) as any;
      bigtableStream.abort = () => {};

      const retryableError = {
        code: grpc.status.DEADLINE_EXCEEDED,
        message: 'retryable error',
      };

      BIGTABLE.request = () => bigtableStream as any;
      const preparedStatement = new MockPreparedStatement();
      const resultStream = instance.createExecuteQueryStream({
        preparedStatement,
      } as any) as any;
      const responses: QueryResultRow[] = [];
      resultStream.on('data', (row: any) => {
        responses.push(row);
      });
      performCallbacks(
        [
          () => {
            clearTimeout(resultStream._stateMachine.timeoutTimer);
            assert.equal(resultStream._stateMachine.state, 'AwaitingQueryPlan');
            preparedStatement.callbacks[0](
              undefined,
              'bytes',
              createResultSetMetadata(['f1', pbType({int64Type: {}})]),
            );
          },
          () => {
            assert.equal(
              resultStream._stateMachine.state,
              'BeforeFirstResumeToken',
            );
            bigtableStream.write(
              createProtoRows(undefined, undefined, undefined, {intValue: 1}),
            );
          },
          () => {
            assert.equal(
              resultStream._stateMachine.state,
              'BeforeFirstResumeToken',
            );
            BIGTABLE.request = () => {
              return bigtableStream2 as any;
            };
            bigtableStream.emit('error', retryableError);
          },
          () => {
            assert.equal(
              resultStream._stateMachine.state,
              'DrainingBeforeResumeToken',
            );
            assert.equal(resultStream._stateMachine.retryTimer !== null, true);
            // speed up the retry timer
            clearTimeout(resultStream._stateMachine.retryTimer);
            resultStream._stateMachine.startNextAttempt();
          },
          () => {
            assert.equal(preparedStatement.callbacks.length, 1); // query plan was not refreshed
            assert.equal(
              resultStream._stateMachine.state,
              'BeforeFirstResumeToken',
            );
            bigtableStream2.write(
              createProtoRows(undefined, undefined, undefined, {intValue: 2}),
            );
          },
          () => {
            assert.equal(
              resultStream._stateMachine.state,
              'BeforeFirstResumeToken',
            );
            bigtableStream2.write(
              createProtoRows('token', 111, undefined, {intValue: 3}),
            );
          },
          () => {
            assert.equal(
              resultStream._stateMachine.state,
              'AfterFirstResumeToken',
            );
            bigtableStream2.emit('end');
            bigtableStream2.emit('close');
          },
          () => {
            assert.equal(resultStream._stateMachine.state, 'Finished');
            assert.equal(responses.length, 2);
            // the first message before the retry should have been discarded
            assert.equal(responses[0].get(0), 2);
            assert.equal(responses[1].get(0), 3);
            done();
          },
        ],
        1,
      );
    });

    it('retryable error before token, byteBuffer keeps emitting data', done => {
      // in this test we simulate a situation where even though the
      // error was emitted, a data event emitted after it. This can
      // happen if an event is buffered in the readable part of the byteBuffer
      const bigtableStream = new PassThrough({
        objectMode: true,
        highWaterMark: 0,
      }) as any;
      bigtableStream.abort = () => {};

      const bigtableStream2 = new PassThrough({
        objectMode: true,
        highWaterMark: 0,
      }) as any;
      bigtableStream.abort = () => {};

      const retryableError = {
        code: grpc.status.DEADLINE_EXCEEDED,
        message: 'retryable error',
      };

      BIGTABLE.request = () => bigtableStream as any;
      const preparedStatement = new MockPreparedStatement();
      const resultStream = instance.createExecuteQueryStream({
        preparedStatement,
      } as any) as any;
      const responses: QueryResultRow[] = [];
      resultStream.on('data', (row: any) => {
        responses.push(row);
      });
      let valuesStream: any = null;
      performCallbacks(
        [
          () => {
            clearTimeout(resultStream._stateMachine.timeoutTimer);
            assert.equal(resultStream._stateMachine.state, 'AwaitingQueryPlan');
            preparedStatement.callbacks[0](
              undefined,
              'bytes',
              createResultSetMetadata(['f1', pbType({int64Type: {}})]),
            );
          },
          () => {
            assert.equal(
              resultStream._stateMachine.state,
              'BeforeFirstResumeToken',
            );
            bigtableStream.write(
              createProtoRows(undefined, undefined, undefined, {intValue: 1}),
            );
          },
          () => {
            assert.equal(
              resultStream._stateMachine.state,
              'BeforeFirstResumeToken',
            );
            BIGTABLE.request = () => {
              return bigtableStream2 as any;
            };
            valuesStream = resultStream._stateMachine.valuesStream;
            bigtableStream.emit('error', retryableError);
          },
          () => {
            // emit data after the error was emitted
            valuesStream.emit('data', [
              [
                createProtoRows(undefined, undefined, undefined, {intValue: 2})
                  .results?.protoRowsBatch?.batchData,
              ],
              'unreachableToken',
            ]);
          },
          () => {
            assert.equal(
              resultStream._stateMachine.state,
              'DrainingBeforeResumeToken',
            );
            assert.equal(resultStream._stateMachine.retryTimer !== null, true);
            // speed up the retry timer
            clearTimeout(resultStream._stateMachine.retryTimer);
            resultStream._stateMachine.startNextAttempt();
          },
          () => {
            assert.equal(preparedStatement.callbacks.length, 1); // query plan was not refreshed
            assert.equal(
              resultStream._stateMachine.state,
              'BeforeFirstResumeToken',
            );
            bigtableStream2.write(
              createProtoRows(undefined, undefined, undefined, {intValue: 3}),
            );
          },
          () => {
            assert.equal(
              resultStream._stateMachine.state,
              'BeforeFirstResumeToken',
            );
            bigtableStream2.write(
              createProtoRows('token', 111, undefined, {intValue: 4}),
            );
          },
          () => {
            assert.equal(
              resultStream._stateMachine.state,
              'AfterFirstResumeToken',
            );
            bigtableStream2.emit('end');
            bigtableStream2.emit('close');
          },
          () => {
            assert.equal(resultStream._stateMachine.state, 'Finished');
            assert.equal(responses.length, 2);
            // the first message before the retry should have been discarded
            assert.equal(responses[0].get(0), 3);
            assert.equal(responses[1].get(0), 4);
            done();
          },
        ],
        1,
      );
    });

    it('retryable error before token then expire', done => {
      const bigtableStream = new PassThrough({
        objectMode: true,
        highWaterMark: 0,
      }) as any;
      bigtableStream.abort = () => {};

      const bigtableStream2 = new PassThrough({
        objectMode: true,
        highWaterMark: 0,
      }) as any;
      bigtableStream2.abort = () => {};

      const bigtableStream3 = new PassThrough({
        objectMode: true,
        highWaterMark: 0,
      }) as any;
      bigtableStream3.abort = () => {};

      const retryableError = {
        code: grpc.status.DEADLINE_EXCEEDED,
        message: 'retryable error',
      };

      const expiredError = createExpiredQueryError();

      BIGTABLE.request = () => bigtableStream as any;
      const preparedStatement = new MockPreparedStatement();
      const resultStream = instance.createExecuteQueryStream({
        preparedStatement,
      } as any) as any;
      const responses: QueryResultRow[] = [];
      resultStream.on('data', (row: any) => {
        responses.push(row);
      });
      performCallbacks(
        [
          () => {
            clearTimeout(resultStream._stateMachine.timeoutTimer);
            assert.equal(resultStream._stateMachine.state, 'AwaitingQueryPlan');
            preparedStatement.callbacks[0](
              undefined,
              'bytes',
              createResultSetMetadata(['f1', pbType({int64Type: {}})]),
            );
          },
          () => {
            assert.equal(
              resultStream._stateMachine.state,
              'BeforeFirstResumeToken',
            );
            bigtableStream.write(
              createProtoRows(undefined, undefined, undefined, {intValue: 1}),
            );
          },
          () => {
            assert.equal(
              resultStream._stateMachine.state,
              'BeforeFirstResumeToken',
            );
            BIGTABLE.request = () => {
              return bigtableStream2 as any;
            };
            bigtableStream.emit('error', retryableError);
          },
          () => {
            assert.equal(
              resultStream._stateMachine.state,
              'DrainingBeforeResumeToken',
            );
            assert.equal(resultStream._stateMachine.retryTimer !== null, true);
            // speed up the retry timer
            clearTimeout(resultStream._stateMachine.retryTimer);
            resultStream._stateMachine.startNextAttempt();
          },
          () => {
            assert.equal(preparedStatement.callbacks.length, 1); // query plan was not refreshed
            assert.equal(
              resultStream._stateMachine.state,
              'BeforeFirstResumeToken',
            );
            BIGTABLE.request = () => {
              return bigtableStream3 as any;
            };
            bigtableStream2.emit('error', expiredError);
          },
          () => {
            assert.equal(
              resultStream._stateMachine.state,
              'DrainAndRefreshQueryPlan',
            );
            assert.equal(resultStream._stateMachine.retryTimer !== null, true);
            // speed up the retry timer
            clearTimeout(resultStream._stateMachine.retryTimer);
            resultStream._stateMachine.startNextAttempt();
          },
          () => {
            assert.equal(resultStream._stateMachine.state, 'AwaitingQueryPlan');
            assert.equal(preparedStatement.callbacks.length, 2);
            preparedStatement.callbacks[1](
              undefined,
              'bytes',
              createResultSetMetadata(['f2', pbType({int64Type: {}})]),
            );
          },
          () => {
            assert.equal(
              resultStream._stateMachine.state,
              'BeforeFirstResumeToken',
            );
            bigtableStream3.write(
              createProtoRows('token1', 111, undefined, {intValue: 2}),
            );
          },
          () => {
            assert.equal(
              resultStream._stateMachine.state,
              'AfterFirstResumeToken',
            );
            bigtableStream3.emit('end');
            bigtableStream3.emit('close');
          },
          () => {
            assert.equal(resultStream._stateMachine.state, 'Finished');
            assert.equal(responses.length, 1);
            // the first message before the retry should have been discarded
            assert.equal(responses[0].get('f2'), 2);
            assert.throws(() => {
              // we make sure that the column name from the first preparedStatement is not present.
              responses[0].get('f1');
            });
            done();
          },
        ],
        1,
      );
    });

    it('retryable error after token then expire', done => {
      const bigtableStream = new PassThrough({
        objectMode: true,
        highWaterMark: 0,
      }) as any;
      bigtableStream.abort = () => {};

      const bigtableStream2 = new PassThrough({
        objectMode: true,
        highWaterMark: 0,
      }) as any;
      bigtableStream2.abort = () => {};

      const bigtableStream3 = new PassThrough({
        objectMode: true,
        highWaterMark: 0,
      }) as any;
      bigtableStream3.abort = () => {};

      const retryableError = {
        code: grpc.status.DEADLINE_EXCEEDED,
        message: 'retryable error',
      };

      const expiredError = createExpiredQueryError();

      BIGTABLE.request = () => bigtableStream as any;
      const preparedStatement = new MockPreparedStatement();
      const resultStream = instance.createExecuteQueryStream({
        preparedStatement,
      } as any) as any;
      let errorEmitted = false;
      const responses: QueryResultRow[] = [];
      resultStream.on('data', (row: any) => {
        responses.push(row);
      });
      resultStream.on('error', () => {
        errorEmitted = true;
      });
      performCallbacks(
        [
          () => {
            clearTimeout(resultStream._stateMachine.timeoutTimer);
            assert.equal(resultStream._stateMachine.state, 'AwaitingQueryPlan');
            preparedStatement.callbacks[0](
              undefined,
              'bytes',
              createResultSetMetadata(['f1', pbType({int64Type: {}})]),
            );
          },
          () => {
            assert.equal(
              resultStream._stateMachine.state,
              'BeforeFirstResumeToken',
            );
            bigtableStream.write(
              createProtoRows('token1', 111, undefined, {intValue: 1}),
            );
          },
          () => {
            assert.equal(
              resultStream._stateMachine.state,
              'AfterFirstResumeToken',
            );
            BIGTABLE.request = () => {
              return bigtableStream2 as any;
            };
            bigtableStream.emit('error', retryableError);
          },
          () => {
            assert.equal(
              resultStream._stateMachine.state,
              'DrainingAfterResumeToken',
            );
            assert.equal(resultStream._stateMachine.retryTimer !== null, true);
            // speed up the retry timer
            clearTimeout(resultStream._stateMachine.retryTimer);
            resultStream._stateMachine.startNextAttempt();
          },
          () => {
            assert.equal(preparedStatement.callbacks.length, 1); // query plan was not refreshed
            assert.equal(
              resultStream._stateMachine.state,
              'AfterFirstResumeToken',
            );
            BIGTABLE.request = () => {
              return bigtableStream3 as any;
            };
            bigtableStream2.emit('error', expiredError);
          },
          () => {
            assert.equal(resultStream._stateMachine.state, 'Failed');
            assert.equal(errorEmitted, true);
            assert.equal(responses.length, 1);
            assert.equal(responses[0].get(0), 1);
            done();
          },
        ],
        1,
      );
    });

    it('non-retryable error before token', done => {
      const bigtableStream = new PassThrough({
        objectMode: true,
        highWaterMark: 0,
      }) as any;
      bigtableStream.abort = () => {};

      const bigtableStream2 = new PassThrough({
        objectMode: true,
        highWaterMark: 0,
      }) as any;
      bigtableStream.abort = () => {};

      const nonretryableError = {
        code: grpc.status.PERMISSION_DENIED,
        message: 'non-retryable error',
      };

      BIGTABLE.request = () => bigtableStream as any;
      const preparedStatement = new MockPreparedStatement();
      const resultStream = instance.createExecuteQueryStream({
        preparedStatement,
      } as any) as any;
      let errorEmitted = false;
      let rowsEmitted = 0;
      resultStream
        .on('error', () => {
          errorEmitted = true;
        })
        .on('data', () => {
          rowsEmitted += 1;
        });
      performCallbacks(
        [
          () => {
            clearTimeout(resultStream._stateMachine.timeoutTimer);
            assert.equal(resultStream._stateMachine.state, 'AwaitingQueryPlan');
            preparedStatement.callbacks[0](
              undefined,
              'bytes',
              createResultSetMetadata(['f1', pbType({int64Type: {}})]),
            );
          },
          () => {
            assert.equal(
              resultStream._stateMachine.state,
              'BeforeFirstResumeToken',
            );
            bigtableStream.write(
              createProtoRows(undefined, undefined, undefined, {intValue: 1}),
            );
          },
          () => {
            assert.equal(
              resultStream._stateMachine.state,
              'BeforeFirstResumeToken',
            );
            BIGTABLE.request = () => {
              return bigtableStream2 as any;
            };
            bigtableStream.emit('error', nonretryableError);
          },
          () => {
            assert.equal(resultStream._stateMachine.state, 'Failed');
            assert.equal(errorEmitted, true);
            assert.equal(rowsEmitted, 0);
            done();
          },
        ],
        1,
      );
    });

    it('non-retryable error after token', done => {
      const bigtableStream = new PassThrough({
        objectMode: true,
        highWaterMark: 0,
      }) as any;
      bigtableStream.abort = () => {};

      const bigtableStream2 = new PassThrough({
        objectMode: true,
        highWaterMark: 0,
      }) as any;
      bigtableStream2.abort = () => {};

      const nonretryableError = {
        code: grpc.status.PERMISSION_DENIED,
        message: 'non-retryable error',
      };

      BIGTABLE.request = () => bigtableStream as any;
      const preparedStatement = new MockPreparedStatement();
      const resultStream = instance.createExecuteQueryStream({
        preparedStatement,
      } as any) as any;
      let errorEmitted = false;
      const responses: QueryResultRow[] = [];
      resultStream.on('data', (row: any) => {
        responses.push(row);
      });
      resultStream.on('error', () => {
        errorEmitted = true;
      });
      performCallbacks(
        [
          () => {
            clearTimeout(resultStream._stateMachine.timeoutTimer);
            assert.equal(resultStream._stateMachine.state, 'AwaitingQueryPlan');
            preparedStatement.callbacks[0](
              undefined,
              'bytes',
              createResultSetMetadata(['f1', pbType({int64Type: {}})]),
            );
          },
          () => {
            assert.equal(
              resultStream._stateMachine.state,
              'BeforeFirstResumeToken',
            );
            bigtableStream.write(
              createProtoRows('token1', 111, undefined, {intValue: 1}),
            );
          },
          () => {
            assert.equal(
              resultStream._stateMachine.state,
              'AfterFirstResumeToken',
            );
            BIGTABLE.request = () => {
              return bigtableStream2 as any;
            };
            bigtableStream.emit('error', nonretryableError);
          },
          () => {
            assert.equal(resultStream._stateMachine.state, 'Failed');
            assert.equal(errorEmitted, true);
            assert.equal(responses.length, 1);
            assert.equal(responses[0].get(0), 1);
            done();
          },
        ],
        1,
      );
    });
  });

  describe('timeouts', () => {
    it('timeout immediately', done => {
      const bigtableStream = new PassThrough({
        objectMode: true,
        highWaterMark: 0,
      }) as any;
      bigtableStream.abort = () => {};
      BIGTABLE.request = () => bigtableStream as any;
      const preparedStatement = new MockPreparedStatement();
      const resultStream = instance.createExecuteQueryStream({
        preparedStatement,
      } as any) as any;
      let errorEmitted = false;
      let rowsEmitted = 0;
      resultStream
        .on('error', () => {
          errorEmitted = true;
        })
        .on('data', () => {
          rowsEmitted += 1;
        });
      performCallbacks(
        [
          () => {
            clearTimeout(resultStream._stateMachine.timeoutTimer);
            assert.equal(resultStream._stateMachine.state, 'AwaitingQueryPlan');
          },
          () => {
            resultStream._stateMachine.handleTotalTimeout();
          },
          () => {
            assert.equal(resultStream._stateMachine.state, 'Failed');
            assert.equal(errorEmitted, true);
            assert.equal(rowsEmitted, 0);
            done();
          },
        ],
        1,
      );
    });

    it('timeout after PQ', done => {
      const bigtableStream = new PassThrough({
        objectMode: true,
        highWaterMark: 0,
      }) as any;
      bigtableStream.abort = () => {};
      BIGTABLE.request = () => bigtableStream as any;
      const preparedStatement = new MockPreparedStatement();
      const resultStream = instance.createExecuteQueryStream({
        preparedStatement,
      } as any) as any;
      let errorEmitted = false;
      let rowsEmitted = 0;
      resultStream
        .on('error', () => {
          errorEmitted = true;
        })
        .on('data', () => {
          rowsEmitted += 1;
        });
      performCallbacks(
        [
          () => {
            clearTimeout(resultStream._stateMachine.timeoutTimer);
            assert.equal(resultStream._stateMachine.state, 'AwaitingQueryPlan');
            assert.equal(preparedStatement.callbacks.length, 1);
          },
          () => {
            preparedStatement.callbacks[0](new Error('fetching QP failed!'));
          },
          () => {
            assert.equal(errorEmitted, false);
            assert.equal(resultStream._stateMachine.state, 'AwaitingQueryPlan');
            assert.equal(preparedStatement.callbacks.length, 2);
            preparedStatement.callbacks[1](
              new Error('fetching QP failed again!'),
            );
          },
          () => {
            assert.equal(errorEmitted, false);
            resultStream._stateMachine.handleTotalTimeout();
          },
          () => {
            assert.equal(resultStream._stateMachine.state, 'Failed');
            assert.equal(errorEmitted, true);
            assert.equal(rowsEmitted, 0);
            done();
          },
        ],
        1,
      );
    });

    it('timeout before token', done => {
      const bigtableStream = new PassThrough({
        objectMode: true,
        highWaterMark: 0,
      }) as any;
      bigtableStream.abort = () => {};
      BIGTABLE.request = () => bigtableStream as any;
      const preparedStatement = new MockPreparedStatement();
      const resultStream = instance.createExecuteQueryStream({
        preparedStatement,
      } as any) as any;
      let errorEmitted = false;
      let rowsEmitted = 0;
      resultStream
        .on('error', () => {
          errorEmitted = true;
        })
        .on('data', () => {
          rowsEmitted += 1;
        });

      performCallbacks(
        [
          () => {
            clearTimeout(resultStream._stateMachine.timeoutTimer);
            assert.equal(resultStream._stateMachine.state, 'AwaitingQueryPlan');
            assert.equal(preparedStatement.callbacks.length, 1);
          },
          () => {
            preparedStatement.callbacks[0](
              undefined,
              'bytes',
              createResultSetMetadata(['f1', pbType({int64Type: {}})]),
            );
          },
          () => {
            assert.equal(
              resultStream._stateMachine.state,
              'BeforeFirstResumeToken',
            );
            resultStream._stateMachine.handleTotalTimeout();
          },
          () => {
            assert.equal(resultStream._stateMachine.state, 'Failed');
            assert.equal(errorEmitted, true);
            assert.equal(rowsEmitted, 0);
            done();
          },
        ],
        1,
      );
    });

    it('timeout after token', done => {
      const bigtableStream = new PassThrough({
        objectMode: true,
        highWaterMark: 0,
      }) as any;
      bigtableStream.abort = () => {};
      BIGTABLE.request = () => bigtableStream as any;
      const preparedStatement = new MockPreparedStatement();
      const resultStream = instance.createExecuteQueryStream({
        preparedStatement,
      } as any) as any;
      let errorEmitted = false;
      const responses: QueryResultRow[] = [];
      resultStream.on('data', (row: any) => {
        responses.push(row);
      });
      resultStream.on('error', () => {
        errorEmitted = true;
      });

      performCallbacks(
        [
          () => {
            clearTimeout(resultStream._stateMachine.timeoutTimer);
            assert.equal(resultStream._stateMachine.state, 'AwaitingQueryPlan');
            assert.equal(preparedStatement.callbacks.length, 1);
          },
          () => {
            preparedStatement.callbacks[0](
              undefined,
              'bytes',
              createResultSetMetadata(['f1', pbType({int64Type: {}})]),
            );
          },
          () => {
            assert.equal(
              resultStream._stateMachine.state,
              'BeforeFirstResumeToken',
            );
            bigtableStream.write(
              createProtoRows('token1', 111, undefined, {intValue: 1}),
            );
          },
          () => {
            assert.equal(
              resultStream._stateMachine.state,
              'AfterFirstResumeToken',
            );
            resultStream._stateMachine.handleTotalTimeout();
          },
          () => {
            assert.equal(resultStream._stateMachine.state, 'Failed');
            assert.equal(errorEmitted, true);
            assert.equal(responses.length, 1);
            assert.equal(responses[0].get(0), 1);
            done();
          },
        ],
        1,
      );
    });
  });
});

describe('Bigtable/ExecuteQueryPreparedStatementObject', () => {
  const INSTANCE_ID = 'my-instance';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const BIGTABLE = {
    projectName: 'projects/my-project',
    projectId: 'my-project',
    request: () => {},
  } as Bigtable;

  let clock: sinon.SinonFakeTimers;

  beforeEach(() => {
    clock = sinon.useFakeTimers({
      toFake: ['setTimeout', 'clearTimeout', 'Date'],
    });
  });

  afterEach(() => {
    clock.restore();
    sandbox.restore();
  });

  describe('happy_path', () => {
    it('getting prepared query plan', done => {
      const preparedStatement = new PreparedStatement(
        BIGTABLE,
        createPrepareQueryResponse(['f', pbType({int64Type: {}})]),
        {} as any,
        {a: SqlTypes.Int64()},
      );
      preparedStatement.getData((err, pqBytes, metadata) => {
        assert.equal(err, undefined);
        assert.equal(pqBytes, 'xd');
        assert.equal(metadata?.get('f').type, 'int64');
        done();
      }, 1000);
      clock.runAll();
    });

    it('getting prepared query plan close to validUntil', done => {
      const resp = createPrepareQueryResponse(['f', pbType({int64Type: {}})]);
      let pqRequestCb = null;
      let requestCounter = 0;
      (BIGTABLE as any).request = (req: any, cb: any) => {
        requestCounter += 1;
        pqRequestCb = cb;
      };
      const someTimestamp = 1740000000;
      resp.validUntil = google.protobuf.Timestamp.create({
        seconds: someTimestamp / 1000,
        nanos: 0,
      });
      const preparedStatement = new PreparedStatement(
        BIGTABLE,
        resp,
        {} as any,
        {
          a: SqlTypes.Int64(),
        },
      );
      // Set the time to 100 ms after the "should-refresh" point in time
      clock.setSystemTime(someTimestamp - SHOULD_REFRESH_SOON_PERIOD_MS + 100);
      let getDataCalls = 0;
      const doneAfterGetData = () => {
        getDataCalls += 1;
        if (getDataCalls > 1) {
          // assert only one request was made.
          assert.equal(requestCounter, 1);
          done();
        }
      };
      preparedStatement.getData((err, pqBytes, metadata) => {
        assert.equal(err, undefined);
        assert.equal(pqBytes, 'xd');
        assert.equal(metadata?.get('f').type, 'int64');
        doneAfterGetData();
      }, 1000);
      clock.runAll();

      // refresh is scheduled
      assert.equal(pqRequestCb !== null, true);

      // both getData calls should get the old value before the refresh finishes
      preparedStatement.getData((err, pqBytes, metadata) => {
        assert.equal(err, undefined);
        assert.equal(pqBytes, 'xd');
        assert.equal(metadata?.get('f').type, 'int64');
        doneAfterGetData();
      }, 1000);
      clock.runAll();
    });

    it('getting prepared query plan past validUntil', done => {
      const resp = createPrepareQueryResponse(['f', pbType({int64Type: {}})]);
      const someTimestamp = 1740000000;
      resp.validUntil = google.protobuf.Timestamp.create({
        seconds: someTimestamp / 1000,
        nanos: 0,
      });
      const preparedStatement = new PreparedStatement(
        BIGTABLE,
        resp,
        {} as any,
        {
          a: SqlTypes.Int64(),
        },
      );
      // Set the time to 100 ms after the "validUntil" point in time
      clock.setSystemTime(someTimestamp + 100);
      preparedStatement.getData((err, pqBytes, metadata) => {
        assert.equal(err, undefined);
        assert.equal(pqBytes, 'xd');
        assert.equal(metadata?.get('f').type, 'int64');
        done();
      }, 1000);
      clock.runAll();
    });

    it('multiple getData calls result in only one request', done => {
      const originalResp = createPrepareQueryResponse([
        'f1',
        pbType({int64Type: {}}),
      ]);
      const secondResp = createPrepareQueryResponse([
        'f2',
        pbType({int64Type: {}}),
      ]);
      let pqRequestCb = null;
      let requestCounter = 0;
      (BIGTABLE as any).request = (req: any, cb: any) => {
        requestCounter += 1;
        pqRequestCb = cb;
      };
      const someTimestamp = 1740000000;
      originalResp.validUntil = google.protobuf.Timestamp.create({
        seconds: someTimestamp / 1000,
        nanos: 0,
      });
      const preparedStatement = new PreparedStatement(
        BIGTABLE,
        originalResp,
        {} as any,
        {
          a: SqlTypes.Int64(),
        },
      );
      // Set the time to 100 ms after the "should-refresh" point in time
      clock.setSystemTime(someTimestamp - SHOULD_REFRESH_SOON_PERIOD_MS + 100);
      preparedStatement.getData((err, pqBytes, metadata) => {
        assert.equal(err, undefined);
        assert.equal(pqBytes, 'xd');
        assert.equal(metadata?.get('f1').type, 'int64');
      }, 1000);
      clock.runAll();

      // refresh is scheduled
      assert.equal(pqRequestCb !== null, true);

      // second getData call
      preparedStatement.getData((err, pqBytes, metadata) => {
        assert.equal(err, undefined);
        assert.equal(pqBytes, 'xd');
        assert.equal(metadata?.get('f1').type, 'int64');
      }, 1000);
      clock.runAll();

      // assert only one request was made even though getData was called twice
      assert.equal(requestCounter, 1);

      // Bigtable returns the prepareQuery response
      pqRequestCb!(null, secondResp);

      preparedStatement.getData((err, pqBytes, metadata) => {
        assert.equal(err, undefined);
        assert.equal(pqBytes, 'xd');
        assert.equal(metadata?.get('f2').type, 'int64');
        assert.throws(() => {
          // we make sure that the column name from the first preparedStatement is not present.
          metadata?.get('f1');
        });
      }, 1000);
      clock.runAll();
      done();
    });
  });

  describe('other_cases', () => {
    it('getting data after expiration hangs', done => {
      const resp = createPrepareQueryResponse(['f', pbType({int64Type: {}})]);
      const preparedStatement = new PreparedStatement(
        BIGTABLE,
        resp,
        {} as any,
        {
          a: SqlTypes.Int64(),
        },
      );
      (BIGTABLE as any).request = (req: any, cb: any) => cb(null, resp);

      preparedStatement.markAsExpired();
      assert.equal(preparedStatement.isExpired(), true);
      assert.equal((preparedStatement as any).isRefreshing, false);
      assert.equal((preparedStatement as any).timer, null);

      let callbackCalled = false;
      preparedStatement.getData((err, pqBytes, metadata) => {
        callbackCalled = true;
        assert.equal(err, undefined);
        assert.equal(pqBytes, 'xd');
        assert.equal(metadata?.get('f').type, 'int64');
      }, 1000);

      // getData scheduled getting the query plan immediately after
      assert.equal((preparedStatement as any).timer !== null, true);
      assert.equal(callbackCalled, false);
      clock.tick(1);
      assert.equal((preparedStatement as any).timer, null);
      assert.equal(callbackCalled, true);
      done();
    });

    it('plan expired during getData callback', done => {
      const resp = createPrepareQueryResponse(['f', pbType({int64Type: {}})]);
      const preparedStatement = new PreparedStatement(
        BIGTABLE,
        resp,
        {} as any,
        {
          a: SqlTypes.Int64(),
        },
      );
      (BIGTABLE as any).request = (req: any, cb: any) => cb(null, resp);

      preparedStatement.markAsExpired();
      assert.equal(preparedStatement.isExpired(), true);
      assert.equal((preparedStatement as any).isRefreshing, false);
      assert.equal((preparedStatement as any).timer, null);

      let callbackCalled = false;
      preparedStatement.getData((err, pqBytes, metadata) => {
        callbackCalled = true;
        assert.equal(err, undefined);
        assert.equal(pqBytes, 'xd');
        assert.equal(metadata?.get('f').type, 'int64');
        preparedStatement.markAsExpired();
      }, 1000);

      // this callback gets served second. It will get an error
      // because the query got expired between the last refresh and serving of this callback
      preparedStatement.getData((err, pqBytes, metadata) => {
        assert.equal(callbackCalled, true);
        assert.equal(pqBytes, undefined);
        assert.equal(metadata, undefined);
        assert.equal(err?.message, 'Getting a fresh query plan failed.');
      }, 1000);

      // getData scheduled getting the query plan immediately after
      assert.equal((preparedStatement as any).timer !== null, true);
      assert.equal(callbackCalled, false);
      clock.tick(1);
      assert.equal((preparedStatement as any).timer, null);
      assert.equal(callbackCalled, true);
      done();
    });

    it('plan refresh failed', done => {
      const resp = createPrepareQueryResponse(['f', pbType({int64Type: {}})]);
      const preparedStatement = new PreparedStatement(
        BIGTABLE,
        resp,
        {} as any,
        {
          a: SqlTypes.Int64(),
        },
      );
      (BIGTABLE as any).request = (req: any, cb: any) =>
        cb(new Error('Problem'));

      preparedStatement.markAsExpired();
      assert.equal(preparedStatement.isExpired(), true);
      assert.equal((preparedStatement as any).isRefreshing, false);
      assert.equal((preparedStatement as any).timer, null);

      let callbackCalled = false;
      preparedStatement.getData((err, pqBytes, metadata) => {
        callbackCalled = true;
        assert.equal(pqBytes, undefined);
        assert.equal(metadata, undefined);
        assert.equal(err?.message, 'Problem');
      }, 1000);

      assert.equal(callbackCalled, false);
      clock.tick(1);
      assert.equal((preparedStatement as any).timer, null);
      assert.equal(callbackCalled, true);
      done();
    });
  });
});
