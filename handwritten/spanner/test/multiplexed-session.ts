/*!
 * Copyright 2024 Google LLC. All Rights Reserved.
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
import {beforeEach, afterEach, describe, it} from 'mocha';
import * as events from 'events';
import * as sinon from 'sinon';
import {Database} from '../src/database';
import {Session} from '../src/session';
import {MultiplexedSession} from '../src/multiplexed-session';
import {Transaction} from '../src/transaction';
import {FakeTransaction} from './session-pool';
import {grpc} from 'google-gax';

describe('MultiplexedSession', () => {
  let multiplexedSession;

  function noop() {}
  const DATABASE = {
    createSession: noop,
    databaseRole: 'parent_role',
  } as unknown as Database;

  let fakeMuxSession;
  let createSessionStub;
  const sandbox = sinon.createSandbox();

  const createSession = (name = 'id', props?): Session => {
    props = props || {multiplexed: true};

    return Object.assign(new Session(DATABASE, name), props, {
      create: sandbox.stub().resolves(),
      transaction: sandbox.stub().returns(new FakeTransaction()),
    });
  };

  beforeEach(() => {
    fakeMuxSession = createSession();
    createSessionStub = sandbox
      .stub(DATABASE, 'createSession')
      .withArgs({multiplexed: true})
      .callsFake(() => {
        return Promise.resolve([fakeMuxSession]);
      });
    multiplexedSession = new MultiplexedSession(DATABASE);
  });

  afterEach(() => {
    sandbox.restore();
  });

  describe('instantiation', () => {
    it('should correctly initialize the fields', () => {
      assert.strictEqual(multiplexedSession.database, DATABASE);
      assert.strictEqual(multiplexedSession.refreshRate, 7);
      assert.deepStrictEqual(multiplexedSession._multiplexedSession, null);
      assert(multiplexedSession instanceof events.EventEmitter);
      assert.strictEqual(
        (multiplexedSession as MultiplexedSession)._sharedMuxSessionWaitPromise,
        null,
      );
    });
  });

  describe('createSession', () => {
    let _createSessionStub;
    let _maintainStub;

    beforeEach(() => {
      _maintainStub = sandbox.stub(multiplexedSession, '_maintain');
      _createSessionStub = sandbox
        .stub(multiplexedSession, '_createSession')
        .resolves();
    });

    it('should create mux session', () => {
      multiplexedSession.createSession();
      assert.strictEqual(_createSessionStub.callCount, 1);
    });

    it('should start housekeeping', done => {
      multiplexedSession.createSession();
      setImmediate(() => {
        try {
          assert.strictEqual(_maintainStub.callCount, 1);
          done();
        } catch (err) {
          done(err);
        }
      });
    });

    it('should not throw error when database not found', async () => {
      const error = {
        code: grpc.status.NOT_FOUND,
        message: 'Database not found',
      } as grpc.ServiceError;
      const multiplexedSession = new MultiplexedSession(DATABASE);
      sandbox.stub(multiplexedSession, '_createSession').rejects(error);

      try {
        await multiplexedSession.createSession();
      } catch (err) {
        assert.ifError(err);
      }
    });
  });

  describe('_maintain', () => {
    let clock;
    let createSessionStub;

    beforeEach(() => {
      createSessionStub = sandbox
        .stub(multiplexedSession, '_createSession')
        .resolves();
      clock = sandbox.useFakeTimers();
    });

    afterEach(() => {
      clock.restore();
    });

    it('should set an interval to refresh mux sessions', () => {
      const expectedInterval =
        multiplexedSession.refreshRate! * 24 * 60 * 60000;

      multiplexedSession._maintain();
      clock.tick(expectedInterval);
      assert.strictEqual(createSessionStub.callCount, 1);
    });
  });

  describe('_createSession', () => {
    it('should create the mux sessions with multiplexed option', async () => {
      await multiplexedSession._createSession();
      assert.strictEqual(createSessionStub.callCount, 1);
      assert.deepStrictEqual(createSessionStub.lastCall.args[0], {
        multiplexed: true,
      });
    });

    it('should reject with any request errors', async () => {
      const error = new Error('create session error');
      createSessionStub.rejects(error);

      try {
        await multiplexedSession._createSession();
        throw new Error('Should not make it this far.');
      } catch (e) {
        assert.strictEqual(e, error);
      }
    });
  });

  describe('getSession', () => {
    it('should acquire a session', done => {
      sandbox.stub(multiplexedSession, '_getSession').resolves(fakeMuxSession);
      multiplexedSession.getSession((err, session) => {
        assert.ifError(err);
        assert.strictEqual(session, fakeMuxSession);
        done();
      });
    });

    it('should pass any errors to the callback', done => {
      const error = new Error('err');
      sandbox.stub(multiplexedSession, '_getSession').rejects(error);
      multiplexedSession.getSession(err => {
        assert.strictEqual(err, error);
        done();
      });
    });

    it('should pass back the session and txn', done => {
      const fakeTxn = new FakeTransaction() as unknown as Transaction;
      sandbox.stub(multiplexedSession, '_getSession').resolves(fakeMuxSession);
      multiplexedSession.getSession((err, session, txn) => {
        assert.ifError(err);
        assert.strictEqual(session, fakeMuxSession);
        assert.deepStrictEqual(txn, fakeTxn);
        done();
      });
    });
  });

  describe('_getSession', () => {
    it('should return a session if one is available (Cache Hit)', async () => {
      const createSessionStub = sandbox
        .stub(multiplexedSession, '_createSession')
        .resolves(fakeMuxSession);
      multiplexedSession._multiplexedSession = fakeMuxSession;
      assert.doesNotThrow(async () => {
        const session = await multiplexedSession._getSession();
        assert.strictEqual(session, fakeMuxSession);
      });
      // ensure _createSession was not called
      sinon.assert.notCalled(createSessionStub);
    });

    it('should wait for a pending session to become available (Join Existing)', async () => {
      const multiplexedSession = new MultiplexedSession(DATABASE);

      // create a manual lock to simulate another request currently running
      let resolveLock!: () => void;
      const pendingLock = new Promise<void>(resolve => {
        resolveLock = resolve;
      });

      // inject the lock into the class
      multiplexedSession._sharedMuxSessionWaitPromise = pendingLock;

      // stub _createSession to verify it is NOT called (since we are joining an existing one)
      const createSessionStub = sandbox
        .stub(multiplexedSession, '_createSession')
        .resolves();

      // call _getSession() but do not await it yet
      // it will hit the "await this._sharedMuxSessionWaitPromise" line and pause there
      const getSessionPromise = multiplexedSession._getSession();

      // now, simulate the "other" request finishing successfully:
      // set the session (as if the background task finished)
      multiplexedSession._multiplexedSession = fakeMuxSession;

      // now resolve the lock to wake up _getSession
      resolveLock();

      // wait for the method to finish
      const session = await getSessionPromise;
      assert.strictEqual(session, fakeMuxSession);

      // ensure _createSession was not called
      sinon.assert.notCalled(createSessionStub);
    });

    it('should create a new session if none exists and no creation is in progress', async () => {
      // ensure _multiplexedSession & _sharedMuxSessionWaitPromise is null
      multiplexedSession._multiplexedSession = null;
      multiplexedSession._sharedMuxSessionWaitPromise = null;

      // stub _createSession to simulate success
      const createSessionStub = sandbox
        .stub(multiplexedSession, '_createSession')
        .callsFake(async () => {
          multiplexedSession._multiplexedSession = fakeMuxSession;
        });

      assert.doesNotThrow(async () => {
        const session = await multiplexedSession._getSession();
        assert.strictEqual(session, fakeMuxSession);
      });

      // ensure _createSession was called
      sinon.assert.calledOnce(createSessionStub);
    });

    it('should propagate errors if session creation fails', async () => {
      const fakeError = new Error('Network Error');
      // ensure that _multiplexedSession is null
      multiplexedSession._multiplexedSession = null;

      // stub creation to fail
      const createSessionStub = sandbox
        .stub(multiplexedSession, '_createSession')
        .rejects(fakeError);

      try {
        await multiplexedSession._getSession();
      } catch (err) {
        assert.strictEqual(err, fakeError);
      }
      // ensure _createSession was called
      sinon.assert.calledOnce(createSessionStub);
    });
  });
});
