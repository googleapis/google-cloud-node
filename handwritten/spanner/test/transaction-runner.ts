/*!
 * Copyright 2019 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import * as assert from 'assert';
import {before, beforeEach, afterEach, describe, it} from 'mocha';
import {EventEmitter} from 'events';
import {grpc} from 'google-gax';
import * as proxyquire from 'proxyquire';
import * as sinon from 'sinon';
import * as through from 'through2';
import {RunTransactionOptions} from '../src/transaction-runner';
import {google} from '../protos/protos';
import IsolationLevel = google.spanner.v1.TransactionOptions.IsolationLevel;
import ReadLockMode = google.spanner.v1.TransactionOptions.ReadWrite.ReadLockMode;
import {randomUUID} from 'crypto';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const concat = require('concat-stream');

class FakeTransaction extends EventEmitter {
  multiplexedSessionPreviousTransactionId;
  async begin(): Promise<void> {}
  request() {}
  requestStream() {}
  useInRunner() {}
  setReadWriteTransactionOptions(options: RunTransactionOptions) {}
}

describe('TransactionRunner', () => {
  const sandbox = sinon.createSandbox();

  const RETRY_KEY = 'google.rpc.retryinfo-bin';
  const DECODE = sandbox.stub();

  const RETRY_INFO = {
    decode: DECODE,
  };

  const LOOKUP = sandbox.stub().withArgs(RETRY_KEY).returns(RETRY_INFO);
  const FROM_JSON = sandbox.stub().returns({lookup: LOOKUP});

  const SESSION = {
    parent: {},
    transaction: () => fakeTransaction,
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let Runner;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let TransactionRunner;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let AsyncTransactionRunner;

  let fakeTransaction;

  before(() => {
    const runners = proxyquire('../src/transaction-runner', {
      protobufjs: {Root: {fromJSON: FROM_JSON}},
    });

    Runner = runners.Runner;
    TransactionRunner = runners.TransactionRunner;
    AsyncTransactionRunner = runners.AsyncTransactionRunner;
  });

  beforeEach(() => {
    fakeTransaction = new FakeTransaction();
    sandbox.stub(fakeTransaction, 'begin').resolves();
    sandbox.stub(fakeTransaction, 'request');
    sandbox.stub(fakeTransaction, 'requestStream');
  });

  afterEach(() => sandbox.restore());

  describe('Runner', () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let ExtendedRunner;

    let runFn;
    let runner;

    beforeEach(() => {
      runFn = sandbox.stub();

      ExtendedRunner = class ExtendedRunner extends Runner {
        protected async _run(transaction): Promise<void> {
          return runFn(transaction);
        }
      };

      runner = new ExtendedRunner(SESSION, fakeTransaction);
    });

    describe('initialization', () => {
      it('should initialize `attempts` to 0', () => {
        assert.strictEqual(runner.attempts, 0);
      });

      it('should localize the `session`', () => {
        assert.strictEqual(runner.session, SESSION);
      });

      it('should localize the `transaction`', () => {
        assert.strictEqual(runner.transaction, fakeTransaction);
      });

      it('should set default `options`', () => {
        const expectedOptions = {
          timeout: 3600000,
          isolationLevel: IsolationLevel.ISOLATION_LEVEL_UNSPECIFIED,
          readLockMode: ReadLockMode.READ_LOCK_MODE_UNSPECIFIED,
        };

        assert.deepStrictEqual(runner.options, expectedOptions);
      });

      it('should accept user `options`', () => {
        const options = {
          isolationLevel: IsolationLevel.SERIALIZABLE,
          readLockMode: ReadLockMode.OPTIMISTIC,
          timeout: 1000,
        };
        const r = new ExtendedRunner(SESSION, fakeTransaction, options);

        assert.deepStrictEqual(r.options, options);
        assert.notStrictEqual(r.options, options);
      });
    });

    describe('getNextDelay', () => {
      const FAKE_RETRY_INFO = Buffer.from('fake-retry-info');

      const FAKE_ERROR = new Error('err') as grpc.ServiceError;
      FAKE_ERROR.metadata = new grpc.Metadata();
      FAKE_ERROR.metadata.set(RETRY_KEY, FAKE_RETRY_INFO);

      it('should extract `retryInfo` when available', () => {
        const fakeRetryDelay = {
          nanos: 10,
          seconds: 5,
        };

        DECODE.withArgs(FAKE_RETRY_INFO).returns({retryDelay: fakeRetryDelay});

        const expectedDelay = 5000.00001;
        const delay = runner.getNextDelay(FAKE_ERROR);

        assert.strictEqual(delay, expectedDelay);
      });

      it('should check if `seconds` is a Long', () => {
        const fakeRetryDelay = {
          nanos: 10,
          seconds: {toNumber: () => 5},
        };

        DECODE.withArgs(FAKE_RETRY_INFO).returns({retryDelay: fakeRetryDelay});

        const expectedDelay = 5000.00001;
        const delay = runner.getNextDelay(FAKE_ERROR);

        assert.strictEqual(delay, expectedDelay);
      });

      it('should create a backoff when `retryInfo` is absent', () => {
        const random = Math.random();

        runner.attempts = 3;
        sandbox.stub(global.Math, 'random').returns(random);

        const badError = new Error('err') as grpc.ServiceError;
        badError.metadata = new grpc.Metadata();

        const expectedDelay = Math.pow(2, 3) * 1000 + Math.floor(random * 1000);
        const delay = runner.getNextDelay(badError);

        assert.strictEqual(delay, expectedDelay);
      });

      it('should use a backoff of max 32 seconds when `retryInfo` is absent', () => {
        const random = Math.random();

        runner.attempts = 10;
        sandbox.stub(global.Math, 'random').returns(random);

        const badError = new Error('err') as grpc.ServiceError;
        badError.metadata = new grpc.Metadata();

        const expectedDelay = Math.pow(2, 5) * 1000 + Math.floor(random * 1000);
        const delay = runner.getNextDelay(badError);

        assert.strictEqual(delay, expectedDelay);
      });
    });

    describe('getTransaction', () => {
      it('should return and forget the prepared transaction', async () => {
        sandbox
          .stub(SESSION, 'transaction')
          .throws(new Error('Should not be called'));

        const cachedTransaction = runner.transaction;
        const transaction = await runner.getTransaction();

        assert.strictEqual(transaction, cachedTransaction);
        assert.strictEqual(runner.transaction, undefined);
      });

      it('should create a new transaction if need be', async () => {
        const expectedTransaction = new FakeTransaction();
        const beginStub = sandbox.stub(expectedTransaction, 'begin').resolves();

        sandbox.stub(SESSION, 'transaction').returns(expectedTransaction);
        delete runner.transaction;

        const transaction = await runner.getTransaction();

        assert.strictEqual(transaction, expectedTransaction);
        assert.strictEqual(beginStub.callCount, 0);
        runner.attempts++;
        await runner.getTransaction();
        assert.strictEqual(beginStub.callCount, 1);
      });

      describe('when multiplexed session is enabled for read/write transaction', () => {
        it('should set the multiplexedSessionPreviousTransactionId in the new transaction object', async () => {
          const expectedTransaction = new FakeTransaction();
          const fakePreviousTransactionId = 'fake-transaction-id';
          sandbox.stub(expectedTransaction, 'begin').resolves();

          sandbox.stub(SESSION, 'transaction').returns(expectedTransaction);
          delete runner.transaction;

          runner.multiplexedSessionPreviousTransactionId =
            fakePreviousTransactionId;

          // multiplexed session
          runner.session = Object.assign({multiplexed: true}, SESSION);

          const transaction = await runner.getTransaction();

          assert.strictEqual(
            transaction.multiplexedSessionPreviousTransactionId,
            fakePreviousTransactionId,
          );
        });
      });
    });

    describe('run', () => {
      let getTransactionStub;
      beforeEach(() => {
        getTransactionStub = sandbox
          .stub(runner, 'getTransaction')
          .resolves(fakeTransaction);
      });

      it('should run a transaction', async () => {
        await runner.run();

        const transaction = runFn.lastCall.args[0];

        assert.strictEqual(transaction, fakeTransaction);
        assert.strictEqual(runFn.callCount, 1);
      });

      it('should return the transaction results', async () => {
        const fakeReturnValue = 10;

        runFn.resolves(fakeReturnValue);

        const returnVal = await runner.run();

        assert.strictEqual(returnVal, fakeReturnValue);
      });

      it('should reject for non-retryable errors', done => {
        const fakeError = new Error('err') as grpc.ServiceError;
        fakeError.code = grpc.status.UNKNOWN;

        runFn.rejects(fakeError);

        runner.run().catch(err => {
          assert.strictEqual(err, fakeError);
          done();
        });
      });

      it('should retry on ABORTED errors', async () => {
        const fakeReturnValue = 11;
        const fakeError = new Error('err') as grpc.ServiceError;
        fakeError.code = grpc.status.ABORTED;

        runFn.onCall(0).rejects(fakeError);
        runFn.onCall(1).resolves(fakeReturnValue);

        const delayStub = sandbox
          .stub(runner, 'getNextDelay')
          .withArgs(fakeError)
          .returns(0);

        const returnValue = await runner.run();

        assert.strictEqual(returnValue, fakeReturnValue);
        assert.strictEqual(runner.attempts, 1);
        assert.strictEqual(delayStub.callCount, 1);
      });

      it('should throw a DeadlineError if the timeout is exceeded', done => {
        const fakeError = new Error('err') as grpc.ServiceError;
        fakeError.code = grpc.status.ABORTED;

        runFn.onCall(0).rejects(fakeError);
        sandbox.stub(runner, 'getNextDelay').returns(2);
        runner.options.timeout = 1;

        runner
          .run()
          .then(() => {
            done(new Error('missing expected DEADLINE_EXCEEDED error'));
          })
          .catch(err => {
            assert.strictEqual(err.code, grpc.status.DEADLINE_EXCEEDED);
            assert.deepStrictEqual(err.errors, [fakeError]);
            done();
          });
      });

      describe('when multiplexed session is enabled for read/write', () => {
        it('should update the multiplexedSessionPreviousTransactionId before retrying aborted transaction', async () => {
          const fakeReturnValue = 12;
          const fakeError = new Error('err') as grpc.ServiceError;
          fakeError.code = grpc.status.ABORTED;

          const fakeTransaction1 = Object.assign(
            {id: randomUUID()},
            new FakeTransaction(),
          );
          const fakeTransaction2 = Object.assign(
            {id: randomUUID()},
            new FakeTransaction(),
          );
          const fakeTransaction3 = Object.assign(
            {id: randomUUID()},
            new FakeTransaction(),
          );

          getTransactionStub.onCall(0).resolves(fakeTransaction1);
          getTransactionStub.onCall(1).resolves(fakeTransaction2);
          getTransactionStub.onCall(2).resolves(fakeTransaction3);

          runFn.onCall(0).callsFake(() => {
            // assert on first call the multiplexedSessionPreviousTransactionId is set to undefined
            assert.strictEqual(
              runner.multiplexedSessionPreviousTransactionId,
              undefined,
            );
            return Promise.reject(fakeError);
          });

          // first retry
          runFn.onCall(1).callsFake(() => {
            // assert on second call the multiplexedSessionPreviousTransactionId is set to first transaction id
            assert.strictEqual(
              runner.multiplexedSessionPreviousTransactionId,
              fakeTransaction1.id,
            );
            return Promise.reject(fakeError);
          });

          // second retry
          runFn.onCall(2).callsFake(() => {
            // assert on third call multiplexedSessionPreviousTransactionId is set to second transaction id
            assert.strictEqual(
              runner.multiplexedSessionPreviousTransactionId,
              fakeTransaction2.id,
            );
            return Promise.resolve(fakeReturnValue);
          });

          const delayStub = sandbox
            .stub(runner, 'getNextDelay')
            .withArgs(fakeError)
            .returns(0);

          const returnValue = await runner.run();

          assert.strictEqual(returnValue, fakeReturnValue);
          // assert that retry happens twice
          assert.strictEqual(runner.attempts, 2);
          assert.strictEqual(delayStub.callCount, 2);
        });
      });
    });
  });

  describe('TransactionRunner', () => {
    let runFn;
    let runner;

    beforeEach(() => {
      runFn = sandbox.stub();
      runner = new TransactionRunner(SESSION, fakeTransaction, runFn);
      sandbox.stub(runner, 'getNextDelay').returns(0);
    });

    describe('initialization', () => {
      it('should pass the `session` to `Runner`', () => {
        assert.strictEqual(runner.session, SESSION);
      });

      it('should pass the `transaction` to `Runner`', () => {
        assert.strictEqual(runner.transaction, fakeTransaction);
      });

      it('should pass `options` to `Runner`', () => {
        const options = {
          isolationLevel: IsolationLevel.REPEATABLE_READ,
          readLockMode: ReadLockMode.PESSIMISTIC,
          timeout: 1,
        };
        const r = new TransactionRunner(
          SESSION,
          fakeTransaction,
          runFn,
          options,
        );

        assert.deepStrictEqual(r.options, options);
      });

      it('should localize the `runFn`', () => {
        assert.strictEqual(runner.runFn, runFn);
      });
    });

    describe('run', () => {
      it('should correctly call the `runFn`', async () => {
        setImmediate(() => fakeTransaction.emit('end'));
        await runner.run();

        const {args} = runFn.lastCall;

        assert.deepStrictEqual(args, [null, fakeTransaction]);
      });

      describe('transaction requests', () => {
        const CONFIG = {};

        let callbackStub;

        beforeEach(() => {
          callbackStub = sandbox.spy();

          runFn.callsFake((err, transaction) => {
            assert.ifError(err);
            transaction.request(CONFIG, callbackStub);
          });
        });

        it('should return the request response', async () => {
          const fakeResponse = {};

          fakeTransaction.request.withArgs(CONFIG).callsFake((_, callback) => {
            callback(null, fakeResponse);
            setImmediate(() => fakeTransaction.emit('end'));
          });

          await runner.run();

          const [error, response] = callbackStub.lastCall.args;

          assert.strictEqual(error, null);
          assert.strictEqual(response, fakeResponse);
          assert.strictEqual(runFn.callCount, 1);
        });

        it('should return non-retryable request errors', async () => {
          const fakeError = new Error('err') as grpc.ServiceError;
          fakeError.code = grpc.status.UNKNOWN;

          fakeTransaction.request.withArgs(CONFIG).callsFake((_, callback) => {
            callback(fakeError);
            setImmediate(() => fakeTransaction.emit('end'));
          });

          await runner.run();

          const error = callbackStub.lastCall.args[0];

          assert.strictEqual(error, fakeError);
          assert.strictEqual(callbackStub.callCount, 1);
          assert.strictEqual(runFn.callCount, 1);
        });

        it('should intercept ABORTED request errors', async () => {
          const fakeError = new Error('err') as grpc.ServiceError;
          fakeError.code = grpc.status.ABORTED;

          fakeTransaction.request
            .onCall(0)
            .callsFake((_, callback) => callback(fakeError));

          fakeTransaction.request.onCall(1).callsFake((_, callback) => {
            callback(null);
            setImmediate(() => fakeTransaction.emit('end'));
          });

          await runner.run();

          assert.strictEqual(callbackStub.callCount, 1);
          assert.strictEqual(runFn.callCount, 2);
        });
      });

      describe('transaction streams', () => {
        const CONFIG = {};

        it('should pipe the data through', done => {
          const fakeStream = through.obj();
          fakeTransaction.requestStream.withArgs(CONFIG).returns(fakeStream);

          const fakeData = [{a: 'b'}, {c: 'd'}, {e: 'f'}];
          fakeData.forEach(data => fakeStream.push(data));
          fakeStream.push(null);

          runFn.callsFake((err, transaction) => {
            assert.ifError(err);

            transaction.requestStream(CONFIG).pipe(
              concat(data => {
                assert.deepStrictEqual(data, fakeData);
                done();
              }),
            );
          });

          runner.run().catch(done);
        });

        it('should destroy on non-retryable streaming errors', done => {
          const fakeStream = through.obj();
          fakeTransaction.requestStream.withArgs(CONFIG).returns(fakeStream);

          const fakeError = new Error('err') as grpc.ServiceError;
          fakeError.code = grpc.status.UNKNOWN;

          runFn.callsFake((err, transaction) => {
            assert.ifError(err);

            transaction.requestStream(CONFIG).on('error', err => {
              assert.strictEqual(err, fakeError);
              done();
            });
          });

          runner.run().catch(done);
          setImmediate(() => fakeStream.destroy(fakeError));
        });

        it('should intercept ABORTED streaming errors', done => {
          const badStream = through.obj();
          const goodStream = through.obj();

          const fakeError = new Error('err') as grpc.ServiceError;
          fakeError.code = grpc.status.ABORTED;

          const fakeData = [{a: 'b'}, {c: 'd'}, {e: 'f'}];
          fakeData.forEach(data => goodStream.push(data));
          goodStream.push(null);

          fakeTransaction.requestStream.onCall(0).returns(badStream);
          fakeTransaction.requestStream.onCall(1).returns(goodStream);

          runFn.callsFake((err, transaction) => {
            assert.ifError(err);

            transaction
              .requestStream(CONFIG)
              .on('error', done)
              .pipe(
                concat(data => {
                  assert.deepStrictEqual(data, fakeData);
                  assert.strictEqual(runFn.callCount, 2);
                  done();
                }),
              );
          });

          runner.run().catch(done);
          setImmediate(() => badStream.destroy(fakeError));
        });
      });
    });
  });

  describe('AsyncTransactionRunner', () => {
    let runFn;
    let runner;

    beforeEach(() => {
      runFn = sandbox.stub();
      runner = new AsyncTransactionRunner(SESSION, fakeTransaction, runFn);
      sandbox.stub(runner, 'getNextDelay').returns(0);
    });

    describe('initialization', () => {
      it('should pass the `session` to `Runner`', () => {
        assert.strictEqual(runner.session, SESSION);
      });

      it('should pass the `transaction` to `Runner`', () => {
        assert.strictEqual(runner.transaction, fakeTransaction);
      });

      it('should pass `options` to `Runner`', () => {
        const options = {
          isolationLevel: IsolationLevel.REPEATABLE_READ,
          readLockMode: ReadLockMode.OPTIMISTIC,
          timeout: 1,
        };
        const r = new AsyncTransactionRunner(
          SESSION,
          fakeTransaction,
          runFn,
          options,
        );

        assert.deepStrictEqual(r.options, options);
      });

      it('should localize the `runFn`', () => {
        assert.strictEqual(runner.runFn, runFn);
      });
    });

    describe('run', () => {
      it('should correctly call the `runFn`', async () => {
        runFn.resolves();
        await runner.run();

        const {args} = runFn.lastCall;

        assert.deepStrictEqual(args, [fakeTransaction]);
      });

      it('should resolve with the `runFn` return value', async () => {
        const fakeReturnValue = 'abc';

        runFn.resolves(fakeReturnValue);

        const returnValue = await runner.run();

        assert.strictEqual(returnValue, fakeReturnValue);
      });
    });
  });
});
