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

import {Database, Session, SessionPool} from '../src';
import {SessionFactory} from '../src/session-factory';
import {
  ReleaseError,
  SessionLeakError,
  SessionPoolExhaustedError,
  isSessionNotFoundError,
} from '../src/session-pool';
import {
  isDatabaseNotFoundError,
  isInstanceNotFoundError,
  isDefaultCredentialsNotSetError,
  isProjectIdNotSetInEnvironmentError,
  isCreateSessionPermissionError,
} from '../src/helper';
import * as sinon from 'sinon';
import * as assert from 'assert';
import {MultiplexedSession} from '../src/multiplexed-session';
import {grpc, ServiceError} from 'google-gax';

export class FakeTransaction {
  options;
  constructor(options?) {
    this.options = options;
  }
  async begin(): Promise<void> {}
}

describe('SessionFactory', () => {
  let sessionFactory;
  let fakeSession;
  let fakeMuxSession;
  const sandbox = sinon.createSandbox();
  const NAME = 'table-name';
  function noop() {}
  const DATABASE = {
    createSession: noop,
    batchCreateSessions: noop,
    databaseRole: 'parent_role',
  } as unknown as Database;

  const createMuxSession = (name = 'id', props?): Session => {
    props = props || {};

    const muxSession = Object.assign(new Session(DATABASE, name), props, {
      create: sandbox.stub().resolves(),
      transaction: sandbox.stub().returns(new FakeTransaction()),
    });

    muxSession.metadata = {
      multiplexed: true,
    };

    return muxSession;
  };

  const createSession = (name = 'id', props?): Session => {
    props = props || {};

    const session = Object.assign(new Session(DATABASE, name), props, {
      create: sandbox.stub().resolves(),
    });

    session.metadata = {multiplexed: false};
    return session;
  };

  beforeEach(() => {
    fakeSession = createSession();
    fakeMuxSession = createMuxSession();
    sandbox
      .stub(DATABASE, 'batchCreateSessions')
      .withArgs({count: 1})
      .callsFake(() => {
        return Promise.resolve([[fakeSession]]);
      });
    sandbox
      .stub(DATABASE, 'createSession')
      .withArgs({multiplexed: true})
      .callsFake(() => {
        return Promise.resolve([fakeMuxSession]);
      });
    sessionFactory = new SessionFactory(DATABASE, NAME);
    sessionFactory.parent = DATABASE;
  });

  afterEach(() => {
    sandbox.restore();
  });

  describe('instantiation', () => {
    it('should create a MultiplexedSession object', () => {
      assert(sessionFactory.multiplexedSession_ instanceof MultiplexedSession);
    });

    it('should initiate the multiplexed session creation', () => {
      const createSessionStub = sandbox
        .stub(MultiplexedSession.prototype, 'createSession')
        .callsFake(() => {});

      new SessionFactory(DATABASE, NAME);

      assert.strictEqual(createSessionStub.callCount, 1);
    });
  });

  describe('getSessionSync', () => {
    it('should return the cached multiplexed session when available', () => {
      sandbox
        .stub(sessionFactory.multiplexedSession_, 'getSessionSync')
        .returns(fakeMuxSession);
      assert.strictEqual(sessionFactory.getSessionSync(), fakeMuxSession);
    });

    it('should return null when no multiplexed session is cached', () => {
      sandbox
        .stub(sessionFactory.multiplexedSession_, 'getSessionSync')
        .returns(null);
      assert.strictEqual(sessionFactory.getSessionSync(), null);
    });

    it('should safely return null if multiplexedSession_ does not implement getSessionSync', () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      sessionFactory.multiplexedSession_ = {} as any;
      assert.strictEqual(sessionFactory.getSessionSync(), null);
    });
  });

  describe('getSession', () => {
    it('should return the multiplexed session', done => {
      (
        sandbox.stub(
          sessionFactory.multiplexedSession_,
          'getSession',
        ) as sinon.SinonStub
      ).callsFake(callback => callback(null, fakeMuxSession));
      sessionFactory.getSession((err, resp) => {
        assert.strictEqual(err, null);
        assert.strictEqual(resp, fakeMuxSession);
        assert.strictEqual(resp?.metadata.multiplexed, true);
        assert.strictEqual(fakeMuxSession.metadata.multiplexed, true);
        done();
      });
    });

    it('should propagate error when multiplexed session return fails', done => {
      const fakeError = new Error();
      (
        sandbox.stub(
          sessionFactory.multiplexedSession_,
          'getSession',
        ) as sinon.SinonStub
      ).callsFake(callback => callback(fakeError, null));
      sessionFactory.getSession((err, resp) => {
        assert.strictEqual(err, fakeError);
        assert.strictEqual(resp, null);
        done();
      });
    });
  });

  describe('deprecated methods', () => {
    it('should delegate getSessionForPartitionedOps to getSession', done => {
      const getSessionStub = (
        sandbox.stub(sessionFactory, 'getSession') as sinon.SinonStub
      ).callsFake(cb => cb(null, fakeMuxSession));
      sessionFactory.getSessionForPartitionedOps((err, session) => {
        assert.ifError(err);
        assert.strictEqual(session, fakeMuxSession);
        assert.strictEqual(getSessionStub.callCount, 1);
        done();
      });
    });

    it('should delegate getSessionForReadWrite to getSession and return a transaction', done => {
      const getSessionStub = (
        sandbox.stub(sessionFactory, 'getSession') as sinon.SinonStub
      ).callsFake(cb => cb(null, fakeMuxSession));
      sessionFactory.getSessionForReadWrite((err, session, txn) => {
        assert.ifError(err);
        assert.strictEqual(session, fakeMuxSession);
        assert(txn instanceof FakeTransaction);
        assert.strictEqual(getSessionStub.callCount, 1);
        done();
      });
    });

    it('should provide a no-op release method', () => {
      assert.doesNotThrow(() => {
        sessionFactory.release(fakeMuxSession);
      });
    });

    it('should return the session pool object', () => {
      assert.strictEqual(sessionFactory.getPool(), sessionFactory.pool_);
    });

    it('should return true for isMultiplexedEnabled and isMultiplexedEnabledForRW', () => {
      assert.strictEqual(sessionFactory.isMultiplexedEnabled(), true);
      assert.strictEqual(sessionFactory.isMultiplexedEnabledForRW(), true);
    });
  });

  describe('close', () => {
    it('should close the multiplexed session', () => {
      const closeSpy = sandbox.spy(sessionFactory.multiplexedSession_, 'close');
      sessionFactory.close();
      assert.strictEqual(closeSpy.callCount, 1);
    });
  });
});

describe('Deprecated SessionPool and helper exports', () => {
  const DATABASE = {} as unknown as Database;

  it('should merge DEFAULTS and validate min/max in SessionPool', () => {
    const pool = new SessionPool(DATABASE, {max: 50});
    assert.strictEqual(pool.options.max, 50);
    assert.strictEqual(pool.options.min, 25);
    assert.strictEqual(pool.currentWriteFraction, 0);
    assert.strictEqual(pool.pendingPrepare, 0);

    assert.throws(() => {
      new SessionPool(DATABASE, {min: 100, max: 10});
    }, /Min sessions may not be greater than max sessions/);
  });

  it('should format stack frames with SessionPool.formatTrace', () => {
    const frame = {
      getFunctionName: () => null,
      getMethodName: () => 'method',
      getFileName: () => 'file.js',
      getLineNumber: () => 1,
      getColumnNumber: () => 2,
    };
    assert.strictEqual(
      SessionPool.formatTrace([frame]),
      'Session leak detected!\n    at method (file.js:1:2)',
    );
  });

  it('should update isOpen and emit events on SessionPool open and close', done => {
    const pool = new SessionPool(DATABASE);
    let opened = false;
    let closed = false;
    pool.on('open', () => {
      opened = true;
    });
    pool.on('close', () => {
      closed = true;
    });
    pool.open();
    assert.strictEqual(pool.isOpen, true);
    assert.strictEqual(opened, true);

    pool.close(err => {
      assert.strictEqual(err, undefined);
      assert.strictEqual(pool.isOpen, false);
      assert.strictEqual(closed, true);
      done();
    });
  });

  describe('SessionPool#getSession', () => {
    let session;
    let transaction;
    let database;

    beforeEach(() => {
      transaction = {};
      session = {transaction: sinon.stub().returns(transaction)};
      database = {
        queryOptions_: {optimizerVersion: '1'},
        sessionFactory_: {
          getSession: sinon
            .stub()
            .callsFake(callback => process.nextTick(callback, null, session)),
        },
      };
    });

    it('should return the multiplexed session with a new transaction', done => {
      new SessionPool(database).getSession((err, s, txn) => {
        assert.ifError(err);
        assert.strictEqual(s, session);
        assert.strictEqual(txn, transaction);
        assert.ok(
          session.transaction.calledOnceWithExactly(database.queryOptions_),
        );
        done();
      });
    });

    it('should return the multiplexed session from getReadSession and getWriteSession', done => {
      const pool = new SessionPool(database);
      pool.getReadSession((err, s) => {
        assert.ifError(err);
        assert.strictEqual(s, session);
        pool.getWriteSession((err, s, txn) => {
          assert.ifError(err);
          assert.strictEqual(s, session);
          assert.strictEqual(txn, transaction);
          done();
        });
      });
    });

    it('should return errors from getting the multiplexed session', done => {
      const error = new Error('err');
      database.sessionFactory_.getSession.callsFake(callback =>
        process.nextTick(callback, error),
      );
      new SessionPool(database).getSession((err, s) => {
        assert.strictEqual(err, error);
        assert.strictEqual(s, null);
        done();
      });
    });

    it('should return an error asynchronously if not associated with a database', done => {
      let returned = false;
      new SessionPool({} as Database).getSession((err, s) => {
        assert.strictEqual(returned, true);
        assert.ok(err instanceof Error);
        assert.strictEqual(s, null);
        done();
      });
      returned = true;
    });
  });

  it('should export ReleaseError, SessionLeakError, SessionPoolExhaustedError, and isSessionNotFoundError', () => {
    const releaseErr = new ReleaseError('res');
    assert.strictEqual(releaseErr.resource, 'res');

    const leakErr = new SessionLeakError(['stack1']);
    assert.deepStrictEqual(leakErr.messages, ['stack1']);

    const exhaustedErr = new SessionPoolExhaustedError(['stack2']);
    assert.deepStrictEqual(exhaustedErr.messages, ['stack2']);

    assert.strictEqual(
      isSessionNotFoundError({
        code: grpc.status.NOT_FOUND,
        message:
          'Session not found: projects/p/instances/i/databases/d/sessions/s',
      } as ServiceError),
      true,
    );
    assert.strictEqual(isSessionNotFoundError(undefined), false);
  });

  it('should export deprecated helper error check functions', () => {
    assert.strictEqual(
      isDatabaseNotFoundError({
        code: grpc.status.NOT_FOUND,
        message: 'Database not found: db',
      } as ServiceError),
      true,
    );
    assert.strictEqual(
      isInstanceNotFoundError({
        code: grpc.status.NOT_FOUND,
        message: 'Instance not found: inst',
      } as ServiceError),
      true,
    );
    assert.strictEqual(
      isDefaultCredentialsNotSetError({
        message: 'Could not load the default credentials',
      } as ServiceError),
      true,
    );
    assert.strictEqual(
      isProjectIdNotSetInEnvironmentError({
        message: 'Unable to detect a Project Id in the current environment',
      } as ServiceError),
      true,
    );
    assert.strictEqual(
      isCreateSessionPermissionError({
        code: grpc.status.PERMISSION_DENIED,
        message: "Caller is missing IAM permission 'spanner.sessions.create'",
      } as ServiceError),
      true,
    );
  });
});
