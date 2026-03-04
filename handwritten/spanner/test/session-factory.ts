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
import * as sinon from 'sinon';
import * as assert from 'assert';
import {MultiplexedSession} from '../src/multiplexed-session';
import {util} from '@google-cloud/common';
import * as db from '../src/database';
import {FakeTransaction} from './session-pool';
import {ReleaseError} from '../src/session-pool';

describe('SessionFactory', () => {
  let sessionFactory;
  let fakeSession;
  let fakeMuxSession;
  const sandbox = sinon.createSandbox();
  const NAME = 'table-name';
  const POOL_OPTIONS = {};
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
      transaction: sandbox.stub().returns(new FakeTransaction()),
    });

    session.metadata = {multiplexed: false};

    return session;
  };

  beforeEach(() => {
    fakeSession = createSession();
    fakeMuxSession = createMuxSession();
    sandbox.stub(DATABASE, 'batchCreateSessions').callsFake(() => {
      return Promise.resolve([[fakeSession, fakeSession, fakeSession]]);
    });
    sandbox
      .stub(DATABASE, 'createSession')
      .withArgs({multiplexed: true})
      .callsFake(() => {
        return Promise.resolve([fakeMuxSession]);
      });
    sessionFactory = new SessionFactory(DATABASE, NAME, POOL_OPTIONS);
    sessionFactory.parent = DATABASE;
  });

  afterEach(() => {
    sandbox.restore();
  });

  describe('instantiation', () => {
    describe('when multiplexed session is disabled', () => {
      before(() => {
        process.env.GOOGLE_CLOUD_SPANNER_MULTIPLEXED_SESSIONS = 'false';
      });

      after(() => {
        delete process.env.GOOGLE_CLOUD_SPANNER_MULTIPLEXED_SESSIONS;
      });

      it('should create a SessionPool object', () => {
        assert(sessionFactory.pool_ instanceof SessionPool);
      });

      it('should accept a custom Pool class', () => {
        function FakePool() {}
        FakePool.prototype.on = util.noop;
        FakePool.prototype.open = util.noop;

        const sessionFactory = new SessionFactory(
          DATABASE,
          NAME,
          FakePool as {} as db.SessionPoolConstructor,
        );
        assert(sessionFactory.pool_ instanceof FakePool);
      });

      it('should open the pool', () => {
        const openStub = sandbox
          .stub(SessionPool.prototype, 'open')
          .callsFake(() => {});

        new SessionFactory(DATABASE, NAME, POOL_OPTIONS);

        assert.strictEqual(openStub.callCount, 1);
      });

      it('should correctly initialize the isMultiplexedEnabled field when GOOGLE_CLOUD_SPANNER_MULTIPLEXED_SESSIONS is disabled', () => {
        const sessionFactory = new SessionFactory(DATABASE, NAME, POOL_OPTIONS);
        assert.strictEqual(sessionFactory.isMultiplexed, false);
      });
    });

    describe('when multiplexed session is default', () => {
      it('should create a MultiplexedSession object', () => {
        assert(
          sessionFactory.multiplexedSession_ instanceof MultiplexedSession,
        );
      });

      it('should initiate the multiplexed session creation', () => {
        const createSessionStub = sandbox
          .stub(MultiplexedSession.prototype, 'createSession')
          .callsFake(() => {});

        new SessionFactory(DATABASE, NAME, POOL_OPTIONS);

        assert.strictEqual(createSessionStub.callCount, 1);
      });

      it('should correctly initialize the isMultiplexedEnabled field when GOOGLE_CLOUD_SPANNER_MULTIPLEXED_SESSIONS is enabled', () => {
        const sessionFactory = new SessionFactory(DATABASE, NAME, POOL_OPTIONS);
        assert.strictEqual(sessionFactory.isMultiplexed, true);
      });
    });

    describe('when multiplexed session is disabled for r/w', () => {
      before(() => {
        process.env.GOOGLE_CLOUD_SPANNER_MULTIPLEXED_SESSIONS = 'false';
        process.env.GOOGLE_CLOUD_SPANNER_MULTIPLEXED_SESSIONS_FOR_RW = 'false';
      });

      after(() => {
        delete process.env.GOOGLE_CLOUD_SPANNER_MULTIPLEXED_SESSIONS;
        delete process.env.GOOGLE_CLOUD_SPANNER_MULTIPLEXED_SESSIONS_FOR_RW;
      });

      it('should correctly initialize the isMultiplexedRW field', () => {
        const sessionFactory = new SessionFactory(DATABASE, NAME, POOL_OPTIONS);
        assert.strictEqual(sessionFactory.isMultiplexedRW, false);
      });
    });

    describe('when multiplexed session is default for r/w', () => {
      it('should correctly initialize the isMultiplexedRW field', () => {
        const sessionFactory = new SessionFactory(DATABASE, NAME, POOL_OPTIONS);
        assert.strictEqual(sessionFactory.isMultiplexedRW, true);
      });
    });
  });

  describe('getSession', () => {
    describe('when multiplexed session is disabled', () => {
      before(() => {
        process.env.GOOGLE_CLOUD_SPANNER_MULTIPLEXED_SESSIONS = 'false';
      });

      after(() => {
        delete process.env.GOOGLE_CLOUD_SPANNER_MULTIPLEXED_SESSIONS;
      });

      it('should retrieve a regular session from the pool', done => {
        (
          sandbox.stub(sessionFactory.pool_, 'getSession') as sinon.SinonStub
        ).callsFake(callback => callback(null, fakeSession));
        sessionFactory.getSession((err, resp) => {
          assert.strictEqual(err, null);
          assert.strictEqual(resp, fakeSession);
          done();
        });
      });

      it('should propagate errors when regular session retrieval fails', done => {
        const fakeError = new Error();
        (
          sandbox.stub(sessionFactory.pool_, 'getSession') as sinon.SinonStub
        ).callsFake(callback => callback(fakeError, null));
        sessionFactory.getSession((err, resp) => {
          assert.strictEqual(err, fakeError);
          assert.strictEqual(resp, null);
          done();
        });
      });
    });

    describe('when multiplexed session is default', () => {
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
  });

  describe('getSessionForReadWrite', () => {
    describe('when multiplexed session for r/w disabled', () => {
      before(() => {
        process.env.GOOGLE_CLOUD_SPANNER_MULTIPLEXED_SESSIONS = 'false';
        process.env.GOOGLE_CLOUD_SPANNER_MULTIPLEXED_SESSIONS_FOR_RW = 'false';
      });

      after(() => {
        delete process.env.GOOGLE_CLOUD_SPANNER_MULTIPLEXED_SESSIONS;
        delete process.env.GOOGLE_CLOUD_SPANNER_MULTIPLEXED_SESSIONS_FOR_RW;
      });

      it('should retrieve a regular session from the pool', done => {
        (
          sandbox.stub(sessionFactory.pool_, 'getSession') as sinon.SinonStub
        ).callsFake(callback => callback(null, fakeSession));
        sessionFactory.getSessionForReadWrite((err, resp) => {
          assert.strictEqual(err, null);
          assert.strictEqual(resp, fakeSession);
          done();
        });
      });

      it('should propagate errors when regular session retrieval fails', done => {
        const fakeError = new Error();
        (
          sandbox.stub(sessionFactory.pool_, 'getSession') as sinon.SinonStub
        ).callsFake(callback => callback(fakeError, null));
        sessionFactory.getSessionForReadWrite((err, resp) => {
          assert.strictEqual(err, fakeError);
          assert.strictEqual(resp, null);
          done();
        });
      });
    });

    describe('when multiplexed session for r/w not disabled', () => {
      it('should return the multiplexed session', done => {
        (
          sandbox.stub(
            sessionFactory.multiplexedSession_,
            'getSession',
          ) as sinon.SinonStub
        ).callsFake(callback => callback(null, fakeMuxSession));
        sessionFactory.getSessionForReadWrite((err, resp) => {
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
        sessionFactory.getSessionForReadWrite((err, resp) => {
          assert.strictEqual(err, fakeError);
          assert.strictEqual(resp, null);
          done();
        });
      });
    });
  });

  describe('getPool', () => {
    it('should return the session pool object', () => {
      const pool = sessionFactory.getPool();
      assert(pool instanceof SessionPool);
      assert.deepStrictEqual(pool, sessionFactory.pool_);
    });
  });

  describe('release', () => {
    describe('when GOOGLE_CLOUD_SPANNER_MULTIPLEXED_SESSIONS is not disabled', () => {
      it('should not call the release method', () => {
        const releaseStub = sandbox.stub(sessionFactory.pool_, 'release');
        const fakeMuxSession = createMuxSession();
        sessionFactory.release(fakeMuxSession);
        assert.strictEqual(releaseStub.callCount, 0);
      });
    });

    describe('when GOOGLE_CLOUD_SPANNER_MULTIPLEXED_SESSIONS is disabled', () => {
      before(() => {
        process.env.GOOGLE_CLOUD_SPANNER_MULTIPLEXED_SESSIONS = 'false';
      });

      after(() => {
        delete process.env.GOOGLE_CLOUD_SPANNER_MULTIPLEXED_SESSIONS;
      });

      it('should call the release method to release a regular session', () => {
        const releaseStub = sandbox.stub(sessionFactory.pool_, 'release');
        const fakeSession = createSession();
        sessionFactory.release(fakeSession);
        assert.strictEqual(releaseStub.callCount, 1);
      });

      it('should propagate an error when release fails', () => {
        const fakeSession = createSession();
        try {
          sessionFactory.release(fakeSession);
          assert.fail('Expected error was not thrown');
        } catch (error) {
          assert.strictEqual(
            (error as ReleaseError).message,
            'Unable to release unknown resource.',
          );
          assert.strictEqual((error as ReleaseError).resource, fakeSession);
        }
      });
    });
  });

  describe('isMultiplexedEnabled', () => {
    describe('when GOOGLE_CLOUD_SPANNER_MULTIPLEXED_SESSIONS is not disabled', () => {
      it('should have enabled the multiplexed', () => {
        const sessionFactory = new SessionFactory(DATABASE, NAME, POOL_OPTIONS);
        assert.strictEqual(sessionFactory.isMultiplexedEnabled(), true);
      });
    });

    describe('when GOOGLE_CLOUD_SPANNER_MULTIPLEXED_SESSIONS is disabled', () => {
      before(() => {
        process.env.GOOGLE_CLOUD_SPANNER_MULTIPLEXED_SESSIONS = 'false';
      });
      after(() => {
        delete process.env.GOOGLE_CLOUD_SPANNER_MULTIPLEXED_SESSIONS;
      });
      it('should not have enabled the multiplexed', () => {
        const sessionFactory = new SessionFactory(DATABASE, NAME, POOL_OPTIONS);
        assert.strictEqual(sessionFactory.isMultiplexedEnabled(), false);
      });
    });
  });

  describe('isMultiplexedEnabledForRW', () => {
    describe('when multiplexed session is not disabled for read/write transactions', () => {
      it('should have enabled the multiplexed', () => {
        const sessionFactory = new SessionFactory(DATABASE, NAME, POOL_OPTIONS);
        assert.strictEqual(sessionFactory.isMultiplexedEnabledForRW(), true);
      });
    });

    describe('when multiplexed session is disabled for read/write transactions', () => {
      before(() => {
        process.env.GOOGLE_CLOUD_SPANNER_MULTIPLEXED_SESSIONS = 'false';
        process.env.GOOGLE_CLOUD_SPANNER_MULTIPLEXED_SESSIONS_FOR_RW = 'false';
      });
      after(() => {
        delete process.env.GOOGLE_CLOUD_SPANNER_MULTIPLEXED_SESSIONS;
        delete process.env.GOOGLE_CLOUD_SPANNER_MULTIPLEXED_SESSIONS_FOR_RW;
      });
      it('should not have enabled the multiplexed', () => {
        const sessionFactory = new SessionFactory(DATABASE, NAME, POOL_OPTIONS);
        assert.strictEqual(sessionFactory.isMultiplexedEnabledForRW(), false);
      });
    });
  });
});
