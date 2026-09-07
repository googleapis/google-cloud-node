/*!
 * Copyright 2017 Google Inc. All Rights Reserved.
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
import * as events from 'events';
import * as extend from 'extend';
import PQueue from 'p-queue';
import * as proxyquire from 'proxyquire';
import * as sinon from 'sinon';
import stackTrace = require('stack-trace');
import timeSpan = require('time-span');

import {Database} from '../src/database';
import {Session} from '../src/session';
import * as sp from '../src/session-pool';
import {Transaction} from '../src/transaction';
import {grpc} from 'google-gax';
const {startTrace} = require('../src/instrument');

let pQueueOverride: typeof PQueue | null = null;

function FakePQueue(options) {
  return new (pQueueOverride || PQueue)(options);
}

FakePQueue.default = FakePQueue;

export class FakeTransaction {
  options;
  constructor(options?) {
    this.options = options;
  }
  async begin(): Promise<void> {}
}

const fakeStackTrace = extend({}, stackTrace);

function noop() {}

describe('SessionPool', () => {
  let sessionPool: sp.SessionPool;
  // tslint:disable-next-line variable-name
  let SessionPool: typeof sp.SessionPool;
  let inventory;

  const DATABASE = {
    batchCreateSessions: noop,
    databaseRole: 'parent_role',
  } as unknown as Database;

  const sandbox = sinon.createSandbox();
  const shouldNotBeCalled = sandbox.stub().throws('Should not be called.');

  const createSession = (name = 'id', props?): Session => {
    props = props || {};

    return Object.assign(new Session(DATABASE, name), props, {
      create: sandbox.stub().resolves(),
      delete: sandbox.stub().resolves(),
      keepAlive: sandbox.stub().resolves(),
      transaction: sandbox.stub().returns(new FakeTransaction()),
    });
  };

  const createStackFrame = (): stackTrace.StackFrame => {
    return {
      getFunctionName: sandbox.stub().returns('myFunction'),
      getMethodName: sandbox.stub().returns('MyClass.myMethod'),
      getFileName: sandbox.stub().returns('path/to/file.js'),
      getLineNumber: sandbox.stub().returns('99'),
      getColumnNumber: sandbox.stub().returns('13'),
      getTypeName: sandbox.stub().returns('type'),
      isNative: sandbox.stub().returns(false),
      isConstructor: sandbox.stub().returns(false),
    };
  };

  before(() => {
    SessionPool = proxyquire('../src/session-pool.js', {
      'p-queue': FakePQueue,
      'stack-trace': fakeStackTrace,
    }).SessionPool;
  });

  beforeEach(() => {
    process.env.GOOGLE_CLOUD_SPANNER_MULTIPLEXED_SESSIONS = 'false';
    process.env.GOOGLE_CLOUD_SPANNER_MULTIPLEXED_SESSIONS_PARTITIONED_OPS =
      'false';
    process.env.GOOGLE_CLOUD_SPANNER_MULTIPLEXED_SESSIONS_FOR_RW = 'false';
    DATABASE.session = createSession;
    sessionPool = new SessionPool(DATABASE);
    inventory = sessionPool._inventory;
  });

  afterEach(() => {
    delete process.env.GOOGLE_CLOUD_SPANNER_MULTIPLEXED_SESSIONS;
    delete process.env
      .GOOGLE_CLOUD_SPANNER_MULTIPLEXED_SESSIONS_PARTITIONED_OPS;
    delete process.env.GOOGLE_CLOUD_SPANNER_MULTIPLEXED_SESSIONS_FOR_RW;
    pQueueOverride = null;
    sandbox.restore();
  });

  describe('formatTrace', () => {
    let stackFrame: stackTrace.StackFrame;
    let fakeTrace: stackTrace.StackFrame[];
    let file: string;

    beforeEach(() => {
      stackFrame = createStackFrame();
      fakeTrace = [stackFrame];
      file = `${stackFrame.getFileName()}:${stackFrame.getLineNumber()}:${stackFrame.getColumnNumber()}`;
    });

    it('should return a trace with the method name', () => {
      (stackFrame.getFunctionName as sinon.SinonStub).returns(undefined);

      const expected = `Session leak detected!\n    at ${stackFrame.getMethodName()} (${file})`;
      const actual = SessionPool.formatTrace(fakeTrace);

      assert.strictEqual(expected, actual);
    });

    it('should return a trace with the function name', () => {
      (stackFrame.getMethodName as sinon.SinonStub).returns(undefined);

      const expected = `Session leak detected!\n    at ${stackFrame.getFunctionName()} (${file})`;
      const actual = SessionPool.formatTrace(fakeTrace);

      assert.strictEqual(expected, actual);
    });
  });

  describe('available', () => {
    it('should return the number of available sessions', () => {
      inventory.sessions = [createSession(), createSession(), createSession()];

      assert.strictEqual(sessionPool.available, 3);
    });
  });

  describe('borrowed', () => {
    beforeEach(() => {
      inventory.borrowed = new Set([createSession(), createSession()]);
    });

    it('should return the number of borrowed sessions', () => {
      assert.strictEqual(sessionPool.borrowed, 2);
    });

    it('should factor in any creation pending sessions', () => {
      sessionPool._pending = 1;
      assert.strictEqual(sessionPool.borrowed, 3);
    });
  });

  describe('isFull', () => {
    it('should indicate if the pool is full', () => {
      sessionPool.options.max = 1;

      assert.strictEqual(sessionPool.isFull, false);
      inventory.borrowed = new Set([createSession()]);
      assert.strictEqual(sessionPool.isFull, true);
    });
  });

  describe('size', () => {
    it('should return the size of the pool', () => {
      inventory.sessions = [createSession(), createSession(), createSession()];
      inventory.borrowed = new Set([createSession()]);

      assert.strictEqual(sessionPool.size, 4);
    });
  });

  describe('writes', () => {
    beforeEach(() => {
      inventory.sessions = [createSession(), createSession(), createSession()];
    });

    it('should get the total number of read/write sessions', () => {
      assert.strictEqual(sessionPool.size, 3);
    });

    it('should factor in borrowed sessions', () => {
      const session = createSession('id', {});

      inventory.borrowed.add(session);

      assert.strictEqual(sessionPool.size, 4);
      assert.strictEqual(sessionPool.available, 3);
      assert.strictEqual(sessionPool.borrowed, 1);
    });
  });

  describe('instantiation', () => {
    it('should localize the database instance', () => {
      assert.strictEqual(sessionPool.database, DATABASE);
    });

    describe('options', () => {
      it('should apply defaults', () => {
        assert.strictEqual(sessionPool.options.acquireTimeout, Infinity);
        assert.strictEqual(sessionPool.options.concurrency, Infinity);
        assert.strictEqual(sessionPool.options.fail, false);
        assert.strictEqual(sessionPool.options.idlesAfter, 10);
        assert.strictEqual(sessionPool.options.keepAlive, 30);
        assert.strictEqual(sessionPool.options.labels, undefined);
        assert.strictEqual(sessionPool.options.min, 25);
        assert.strictEqual(sessionPool.options.max, 100);
        assert.strictEqual(sessionPool.options.maxIdle, 1);
      });

      it('should not override user options', () => {
        sessionPool = new SessionPool(DATABASE, {acquireTimeout: 0});
        assert.strictEqual(sessionPool.options.acquireTimeout, 0);
      });

      it('should override user options for databaseRole', () => {
        sessionPool = new SessionPool(DATABASE, {databaseRole: 'child_role'});
        assert.strictEqual(sessionPool.options.databaseRole, 'child_role');
      });

      it('should use default value of Database for databaseRole', () => {
        sessionPool = new SessionPool(DATABASE);
        assert.strictEqual(sessionPool.options.databaseRole, 'parent_role');
      });

      describe('min and max', () => {
        const minGtMax = /Min sessions may not be greater than max sessions\./;

        it('should not accept min>max', () => {
          assert.throws(() => {
            return new SessionPool(DATABASE, {min: 20, max: 10});
          }, minGtMax);
        });
      });
    });

    it('should set isOpen to false', () => {
      assert.strictEqual(sessionPool.isOpen, false);
    });

    it('should create an inventory object', () => {
      assert.deepStrictEqual(inventory, {
        sessions: [],
        borrowed: new Set(),
      });
    });

    it('should create a request queue', () => {
      const poolOptions = {
        concurrency: 11,
      };

      pQueueOverride = class {
        constructor(options) {
          return options;
        }
      } as typeof PQueue;

      sessionPool = new SessionPool(DATABASE, poolOptions);
      assert.deepStrictEqual(sessionPool._requests, {
        concurrency: poolOptions.concurrency,
      });
    });

    it('should create an acquire queue', () => {
      pQueueOverride = class {
        constructor(options) {
          return options;
        }
      } as typeof PQueue;

      sessionPool = new SessionPool(DATABASE);
      assert.deepStrictEqual(sessionPool._acquires, {
        concurrency: 1,
      });
    });

    it('should create a map of traces', () => {
      assert.deepStrictEqual(sessionPool._traces, new Map());
    });

    it('should inherit from EventEmitter', () => {
      assert(sessionPool instanceof events.EventEmitter);
    });
  });

  describe('close', () => {
    beforeEach(() => {
      inventory.sessions = [createSession(), createSession(), createSession()];
      inventory.borrowed = new Set([createSession(), createSession()]);
      sessionPool._destroy = sandbox.stub().resolves();
    });

    it('should clear the inventory', done => {
      sessionPool.close(() => {
        assert.strictEqual(sessionPool.size, 0);
        done();
      });
    });

    it('should stop housekeeping', done => {
      sessionPool._stopHouseKeeping = done;
      sessionPool.close(noop);
    });

    it('should set isOpen to false', () => {
      sessionPool.isOpen = true;
      sessionPool.close(noop);

      assert.strictEqual(sessionPool.isOpen, false);
    });

    it('should emit the close event', done => {
      sessionPool.on('close', done);
      sessionPool.close(noop);
    });

    it('should destroy all the sessions', done => {
      const sessions = [...inventory.sessions, ...inventory.borrowed];

      let destroyed = 0;

      sessionPool._destroy = async session => {
        assert.strictEqual(session, sessions[destroyed++]);
      };

      sessionPool.close(err => {
        assert.ifError(err);
        assert.strictEqual(destroyed, sessions.length);
        done();
      });
    });

    it('should execute the callback on idle', done => {
      const stub = sandbox.stub(sessionPool._requests, 'onIdle').resolves();

      sessionPool.close(err => {
        assert.ifError(err);
        assert.strictEqual(stub.callCount, 1);
        done();
      });
    });

    it('should return a leak error', done => {
      const fakeLeaks = ['a', 'b'];

      sandbox.stub(sessionPool, '_getLeaks').returns(fakeLeaks);

      sessionPool.close((err?: sp.SessionLeakError) => {
        assert.strictEqual(err!.name, 'SessionLeakError');
        assert.strictEqual(
          err!.message,
          `${fakeLeaks.length} session leak(s) detected.`,
        );
        assert.strictEqual(err!.messages, fakeLeaks);
        done();
      });
    });
  });

  describe('getSession', () => {
    it('should acquire a session', done => {
      const fakeSession = createSession();

      sandbox.stub(sessionPool, '_acquire').resolves(fakeSession);

      sessionPool.getSession((err, session) => {
        assert.ifError(err);
        assert.strictEqual(session, fakeSession);
        done();
      });
    });

    it('should pass any errors to the callback', done => {
      const error = new Error('err');

      sandbox.stub(sessionPool, '_acquire').rejects(error);

      sessionPool.getSession(err => {
        assert.strictEqual(err, error);
        done();
      });
    });

    it('should pass back the session and txn', done => {
      const fakeTxn = new FakeTransaction() as unknown as Transaction;
      const fakeSession = createSession();

      fakeSession.txn = fakeTxn;

      sandbox.stub(sessionPool, '_acquire').resolves(fakeSession);

      sessionPool.getSession((err, session, txn) => {
        assert.ifError(err);
        assert.strictEqual(session, fakeSession);
        assert.strictEqual(txn, fakeTxn);
        done();
      });
    });
  });

  describe('open', () => {
    let fillStub: sinon.SinonStub<[], Promise<void>>;

    beforeEach(() => {
      sessionPool._stopHouseKeeping = sandbox.stub();
      fillStub = sandbox.stub(sessionPool, '_fill').resolves();
    });

    it('should create an onclose promise', () => {
      sessionPool.open();

      assert(sessionPool._onClose instanceof Promise);
      setImmediate(() => sessionPool.emit('close'));
      return sessionPool._onClose;
    });

    it('should start housekeeping', done => {
      sessionPool._startHouseKeeping = done;
      sessionPool.open();
    });

    it('should set isOpen to true', () => {
      sessionPool.open();
      assert.strictEqual(sessionPool.isOpen, true);
    });

    it('should emit the open event', done => {
      sessionPool.on('open', done);
      sessionPool.open();
    });

    it('should fill the pool', () => {
      sessionPool.open();
      assert.strictEqual(fillStub.callCount, 1);
    });

    it('should not trigger unhandled promise rejection', () => {
      const error = {
        code: grpc.status.PERMISSION_DENIED,
        message: 'spanner.sessions.create',
      } as grpc.ServiceError;

      sandbox.restore();
      sandbox.stub(sessionPool, '_fill').rejects(error);

      const originalRejection = process.listeners('unhandledRejection').pop();
      if (originalRejection) {
        process.removeListener('unhandledRejection', originalRejection!);
      }

      process.once('unhandledRejection', err => {
        assert.ifError(err);
      });

      sessionPool.open();

      if (originalRejection) {
        process.listeners('unhandledRejection').push(originalRejection!);
      }
    });

    it('should not trigger unhandled promise rejection when default credentials not set', () => {
      const error = {
        message: 'Could not load the default credentials',
      } as grpc.ServiceError;

      sandbox.restore();
      sandbox.stub(sessionPool, '_fill').rejects(error);

      const originalRejection = process.listeners('unhandledRejection').pop();
      if (originalRejection) {
        process.removeListener('unhandledRejection', originalRejection!);
      }

      process.once('unhandledRejection', err => {
        assert.ifError(err);
      });

      sessionPool.open();

      if (originalRejection) {
        process.listeners('unhandledRejection').push(originalRejection!);
      }
    });

    it('should not trigger unhandled promise rejection when projectId not set', () => {
      const error = {
        message: 'Unable to detect a Project Id in the current environment',
      } as grpc.ServiceError;

      sandbox.restore();
      sandbox.stub(sessionPool, '_fill').rejects(error);

      const originalRejection = process.listeners('unhandledRejection').pop();
      if (originalRejection) {
        process.removeListener('unhandledRejection', originalRejection!);
      }

      process.once('unhandledRejection', err => {
        assert.ifError(err);
      });

      sessionPool.open();

      if (originalRejection) {
        process.listeners('unhandledRejection').push(originalRejection!);
      }
    });
  });

  describe('release', () => {
    let prepStub: sinon.SinonStub<[Session], void>;

    beforeEach(() => {
      prepStub = sandbox.stub(sessionPool, '_prepareTransaction').resolves();
    });

    it('should throw an error when returning unknown resources', () => {
      const badResource = createSession();

      try {
        sessionPool.release(badResource);
        shouldNotBeCalled();
      } catch (e) {
        assert.strictEqual(
          (e as sp.ReleaseError).message,
          'Unable to release unknown resource.',
        );
        assert.strictEqual((e as sp.ReleaseError).resource, badResource);
      }
    });

    it('should delete any old transactions', () => {
      const session = createSession();

      sessionPool._release = noop;
      inventory.borrowed.add(session);
      session.txn = {} as Transaction;

      sessionPool.release(session);
      assert.strictEqual(session.txn, undefined);
    });

    it('should update the lastUsed timestamp', () => {
      const session = createSession();

      sessionPool._release = noop;
      inventory.borrowed.add(session);
      session.lastUsed = null!;

      sessionPool.release(session);
      assert(isAround(session.lastUsed, Date.now()));
    });

    describe('read and write', () => {
      let fakeSession;

      beforeEach(() => {
        fakeSession = createSession('id');
        inventory.borrowed.add(fakeSession);
      });

      it('should release the read/write session', done => {
        prepStub.resolves();
        sandbox
          .stub(sessionPool, '_release')
          .withArgs(fakeSession)
          .callsFake(() => done());

        sessionPool.release(fakeSession);
      });
    });
  });

  describe('_acquire', () => {
    beforeEach(() => {
      sessionPool.isOpen = true;
      sessionPool._isValidSession = () => true;
    });

    it('should return a closed error if not open', async () => {
      sessionPool.isOpen = false;

      try {
        await sessionPool._acquire();
        shouldNotBeCalled();
      } catch (e) {
        assert.strictEqual(
          (e as sp.ReleaseError).message,
          'Database is closed.',
        );
      }
    });

    it('should return a timeout error if a timeout happens', async () => {
      sessionPool.options.acquireTimeout = 1;

      sessionPool._acquires.add = fn => {
        return new Promise(r => setTimeout(r, 3)).then(fn);
      };

      try {
        await sessionPool._acquire();
        shouldNotBeCalled();
      } catch (e) {
        assert.strictEqual(
          (e as sp.ReleaseError).message,
          'Timeout occurred while acquiring session.',
        );
      }
    });

    it('should return a session', async () => {
      const fakeSession = createSession();
      const now = Date.now();

      const stub = sandbox
        .stub(sessionPool, '_getSession')
        .resolves(fakeSession);
      const session = await sessionPool._acquire();
      const [startTime] = stub.getCall(0).args;

      assert(isAround(startTime, now));
      assert.strictEqual(session, fakeSession);
    });

    it('should drop expired sessions', async () => {
      const badSession = createSession();
      const goodSession = createSession();

      sessionPool._isValidSession = session => session === goodSession;
      inventory.borrowed.add(badSession);
      inventory.borrowed.add(goodSession);

      const stub = sandbox.stub(sessionPool, '_getSession');

      stub.onFirstCall().resolves(badSession);
      stub.onSecondCall().resolves(goodSession);

      const session = await sessionPool._acquire();

      assert.strictEqual(session, goodSession);
      assert.strictEqual(sessionPool.size, 1);
    });

    it('should capture the stack trace', async () => {
      const id = 'abc';
      const fakeSession = createSession();
      const fakeTrace = [];

      fakeSession.id = id;
      sandbox.stub(sessionPool, '_getSession').resolves(fakeSession);
      sandbox.stub(fakeStackTrace, 'get').returns(fakeTrace);

      await sessionPool._acquire();

      const trace = sessionPool._traces.get(id);
      assert.strictEqual(trace, fakeTrace);
    });

    it('should convert read sessions to write sessions', async () => {
      const fakeSession = createSession('id');

      sandbox.stub(sessionPool, '_getSession').resolves(fakeSession);
      const prepStub = sandbox
        .stub(sessionPool, '_prepareTransaction')
        .withArgs(fakeSession);

      const session = await sessionPool._acquire();

      assert.strictEqual(session, fakeSession);
      assert.strictEqual(prepStub.callCount, 1);
    });
  });

  describe('_borrow', () => {
    it('should mark the session as borrowed', () => {
      const fakeSession = createSession();

      inventory.sessions.push(fakeSession);

      sessionPool._borrow(fakeSession);

      assert.strictEqual(inventory.sessions.indexOf(fakeSession), -1);
      assert(inventory.borrowed.has(fakeSession));
    });
  });

  describe('_borrowFrom', () => {
    it('should borrow the last pushed session', () => {
      const fakeSession1 = createSession();
      const fakeSession2 = createSession();

      inventory.sessions.push(fakeSession1);
      inventory.sessions.push(fakeSession2);

      let session = sessionPool._borrowFrom();
      assert.strictEqual(session, fakeSession2);
      session = sessionPool._borrowFrom();
      assert.strictEqual(session, fakeSession1);
    });
  });

  describe('_borrowNextAvailableSession', () => {
    it('should borrow  when available', () => {
      const fakeSession = createSession();

      inventory.sessions.push(fakeSession);
      sandbox.stub(sessionPool, '_borrowFrom').returns(fakeSession);

      const session = sessionPool._borrowNextAvailableSession();

      assert.strictEqual(session, fakeSession);
    });
  });

  describe('_createSession', () => {
    let stub: sinon.SinonStub<[number], Promise<void>>;

    beforeEach(() => {
      stub = sandbox.stub(sessionPool, '_createSessions').resolves();
    });

    it('should create a single session', async () => {
      await sessionPool._createSession();
      const [numbers] = stub.lastCall.args;
      assert.deepStrictEqual(numbers, 1);
    });
  });

  describe('_createSessions', () => {
    const OPTIONS = 3;
    const RESPONSE = [[{}, {}, {}]];

    let stub;
    let releaseStub;

    beforeEach(() => {
      stub = sandbox.stub(DATABASE, 'batchCreateSessions').resolves(RESPONSE);
      releaseStub = sandbox.stub(sessionPool, 'release');
    });

    it('should update the number of pending sessions', async () => {
      await sessionPool._createSessions(OPTIONS);
      assert.strictEqual(sessionPool.size, 3);
    });

    it('should create the appropriate number of sessions', async () => {
      await sessionPool._createSessions(OPTIONS);
      const [options] = stub.lastCall.args;
      assert.strictEqual(options.count, 3);
    });

    it('should pass the session labels', async () => {
      const labels = {foo: 'bar'};
      sessionPool.options.labels = labels;
      await sessionPool._createSessions(OPTIONS);
      const [options] = stub.lastCall.args;
      assert.strictEqual(options.labels, labels);
    });

    it('should pass the session database role', async () => {
      const databaseRole = 'child_role';
      sessionPool.options.databaseRole = databaseRole;
      await sessionPool._createSessions(OPTIONS);
      const [options] = stub.lastCall.args;
      assert.strictEqual(options.databaseRole, databaseRole);
    });

    it('should make multiple requests if needed', async () => {
      stub.onCall(0).resolves([[{}, {}]]);
      stub.onCall(1).resolves([[{}]]);

      await sessionPool._createSessions(OPTIONS);

      assert.strictEqual(stub.callCount, 2);
      assert.strictEqual(sessionPool.size, 3);
    });

    it('should reject with any request errors', async () => {
      const error = new Error('err');
      stub.rejects(error);

      try {
        await sessionPool._createSessions(OPTIONS);
        throw new Error('Should not make it this far.');
      } catch (e) {
        assert.strictEqual(e, error);
      }
    });

    it('should add each session to the inventory', async () => {
      await sessionPool._createSessions(OPTIONS);
      assert.strictEqual(sessionPool.borrowed, 3);

      setImmediate(() => {
        RESPONSE[0].forEach((fakeSession, i) => {
          const [session] = releaseStub.getCall(i).args;
          assert.strictEqual(session, fakeSession);
        });
      });
    });

    it('should prepare the correct number of write sessions', async () => {
      await sessionPool._createSessions(OPTIONS);

      setImmediate(() => {
        assert.strictEqual(sessionPool.size, OPTIONS);
      });
    });
  });

  describe('_destroy', () => {
    it('should delete the session', async () => {
      const fakeSession = createSession();
      const stub = fakeSession.delete as sinon.SinonStub;

      await sessionPool._destroy(fakeSession);
      assert.strictEqual(stub.callCount, 1);
    });

    it('should emit any errors', done => {
      const error = new Error('err');
      const fakeSession = createSession();
      const stub = fakeSession.delete as sinon.SinonStub;

      stub.rejects(error);

      sessionPool.on('error', err => {
        assert.strictEqual(err, error);
        done();
      });

      void sessionPool._destroy(fakeSession);
    });
  });

  describe('_evictIdleSessions', () => {
    let destroyStub: sinon.SinonStub<[Session], Promise<void>>;
    let fakeSessions;

    beforeEach(() => {
      inventory.sessions = [
        createSession('id'),
        createSession('id'),
        createSession('id'),
      ];

      sessionPool.options.maxIdle = 0;
      sessionPool.options.min = 0;

      fakeSessions = [...inventory.sessions];

      sandbox
        .stub(sessionPool, '_getIdleSessions')
        .returns(fakeSessions.slice());

      fakeSessions.reverse();
      destroyStub = sandbox.stub(sessionPool, '_destroy').resolves();
    });

    it('should evict the sessions', () => {
      sessionPool._evictIdleSessions();

      assert.strictEqual(destroyStub.callCount, fakeSessions.length);

      fakeSessions.forEach((session, i) => {
        const destroyed = destroyStub.getCall(i).args[0];
        assert.strictEqual(destroyed, session);
      });
    });

    it('should respect the maxIdle option', () => {
      sessionPool.options.maxIdle = 2;
      sessionPool._evictIdleSessions();

      assert.strictEqual(destroyStub.callCount, 1);
      const destroyed = destroyStub.getCall(0).args[0];
      assert.strictEqual(destroyed, fakeSessions[0]);
    });

    it('should respect the min value', () => {
      sessionPool.options.min = 1;
      sessionPool._evictIdleSessions();

      assert.strictEqual(destroyStub.callCount, 2);

      fakeSessions.slice(0, 2).forEach((session, i) => {
        const destroyed = destroyStub.getCall(i).args[0];
        assert.strictEqual(destroyed, session);
      });
    });

    it('should not evict if the session is not there', () => {
      sandbox.restore();
      fakeSessions[1] = undefined;
      sandbox
        .stub(sessionPool, '_getIdleSessions')
        .returns(fakeSessions.slice());
      destroyStub = sandbox.stub(sessionPool, '_destroy').resolves();

      sessionPool._evictIdleSessions();

      assert.strictEqual(destroyStub.callCount, fakeSessions.length - 1);
    });
  });

  describe('_fill', () => {
    let stub: sinon.SinonStub<[number], Promise<void>>;

    beforeEach(() => {
      stub = sandbox.stub(sessionPool, '_createSessions');
      sessionPool.options.min = 8;
    });

    it('should create the min number of required sessions', async () => {
      await sessionPool._fill();

      const amount = stub.lastCall.args[0];

      assert.strictEqual(amount, 8);
    });

    it('should respect the current size of the pool', async () => {
      inventory.sessions = [createSession(), createSession(), createSession()];

      await sessionPool._fill();

      const amount = stub.lastCall.args[0];

      assert.strictEqual(amount, 5);
    });

    it('should noop when no sessions are needed', async () => {
      sessionPool.options.min = 0;
      await sessionPool._fill();

      assert.strictEqual(stub.callCount, 0);
    });

    it('should emit any request errors that occur', done => {
      const error = new Error('err');

      stub.rejects(error);

      sessionPool._fill().catch(err => {
        assert.strictEqual(err, error);
        done();
      });
    });
  });

  describe('_getIdleSessions', () => {
    it('should return a list of idle sessions', () => {
      const idlesAfter = (sessionPool.options.idlesAfter = 1); // 1 minute
      const idleTimestamp = Date.now() - idlesAfter * 60000;

      const fake = (inventory.sessions = [
        {lastUsed: Date.now()},
        {lastUsed: idleTimestamp},
        {lastUsed: idleTimestamp},
      ]);

      const expectedSessions = [fake[1], fake[2]];
      const idleSessions = sessionPool._getIdleSessions();

      assert.deepStrictEqual(idleSessions, expectedSessions);
    });
  });

  describe('_getLeaks', () => {
    it('should return an array of leaks', () => {
      const trace1 = [createStackFrame()];
      const trace2 = [createStackFrame(), createStackFrame()];

      const formatted1 = 'c';
      const formatted2 = 'd';

      const stub = sandbox.stub(SessionPool, 'formatTrace');

      stub.withArgs(trace1).returns(formatted1);
      stub.withArgs(trace2).returns(formatted2);

      sessionPool._traces.set('a', trace1);
      sessionPool._traces.set('b', trace2);

      const leaks = sessionPool._getLeaks();

      assert.deepStrictEqual(leaks, [formatted1, formatted2]);
    });
  });

  describe('_getSession', () => {
    let startTime: number;

    beforeEach(() => {
      sessionPool._onClose = new Promise(resolve => {
        sessionPool.on('close', resolve);
      });
      sessionPool.options.max = 0;
      startTime = Date.now();
    });

    it('should return a session if one is available', async () => {
      const fakeSession = createSession();

      inventory.sessions = [fakeSession];

      sandbox
        .stub(sessionPool, '_borrowNextAvailableSession')
        .returns(fakeSession);

      const session = await sessionPool._getSession(startTime);
      assert.strictEqual(session, fakeSession);
    });

    it('should return an error if empty and fail = true', async () => {
      sessionPool.options.fail = true;

      try {
        await sessionPool._getSession(startTime);
        shouldNotBeCalled();
      } catch (e) {
        assert.strictEqual(
          (e as sp.ReleaseError).message,
          'No resources available.',
        );
      }
    });

    it('should throw a closed error if the pool closes', async () => {
      setTimeout(() => sessionPool.emit('close'), 100);

      try {
        await sessionPool._getSession(startTime);
        shouldNotBeCalled();
      } catch (e) {
        assert.strictEqual(
          (e as sp.ReleaseError).message,
          'Database is closed.',
        );
      }
    });

    it('should return a session when it becomes available', async () => {
      const fakeSession = createSession();

      sandbox
        .stub(sessionPool, '_borrowNextAvailableSession')
        .returns(fakeSession);
      setTimeout(() => sessionPool.emit('session-available'), 100);

      const session = await sessionPool._getSession(startTime);
      assert.strictEqual(session, fakeSession);
    });

    it('should use the acquireTimeout if set', async () => {
      const end = timeSpan();
      const timeout = (sessionPool.options.acquireTimeout = 100);

      try {
        await sessionPool._getSession(startTime);
        shouldNotBeCalled();
      } catch (e) {
        assert(isAround(timeout, end()));
        assert.strictEqual(
          (e as sp.ReleaseError).message,
          'Timeout occurred while acquiring session.',
        );
      }
    });

    it('should create a session if the pool is not full', async () => {
      const fakeSession = createSession();
      const stub = sandbox
        .stub(sessionPool, '_createSessions')
        .withArgs(1)
        .callsFake(() => {
          // this will fire off via _createSessions
          setImmediate(() => sessionPool.emit('session-available'));
          return Promise.resolve();
        });

      sessionPool.options.max = 1;
      sessionPool.options.incStep = 25;
      sandbox
        .stub(sessionPool, '_borrowNextAvailableSession')
        .returns(fakeSession);

      const session = await sessionPool._getSession(startTime);

      assert.strictEqual(session, fakeSession);
      assert.strictEqual(stub.callCount, 1);
    });

    it('should create enough sessions for the minimum configured to be reached', async () => {
      const fakeSession = createSession();
      const stub = sandbox
        .stub(sessionPool, '_createSessions')
        .withArgs(20)
        .callsFake(() => {
          // this will fire off via _createSessions
          setImmediate(() => sessionPool.emit('session-available'));
          return Promise.resolve();
        });

      sessionPool.options.min = 20;
      sessionPool.options.max = 400;
      sessionPool.options.incStep = 10;
      sandbox
        .stub(sessionPool, '_borrowNextAvailableSession')
        .returns(fakeSession);

      const session = await sessionPool._getSession(startTime);

      assert.strictEqual(session, fakeSession);
      assert.strictEqual(stub.callCount, 1);
    });

    it('should wait for a pending session to become available', async () => {
      const fakeSession = createSession();

      sessionPool.options.max = 2;
      sessionPool._pending = 1;
      const stub = sandbox.stub(sessionPool, '_createSession').callsFake(() => {
        return Promise.reject(new Error('should not be called'));
      });
      sandbox
        .stub(sessionPool, '_borrowNextAvailableSession')
        .returns(fakeSession);
      setTimeout(() => sessionPool.emit('session-available'), 100);

      const session = await sessionPool._getSession(startTime);
      assert.strictEqual(session, fakeSession);
      assert.strictEqual(stub.callCount, 0);
    });

    it('should return any create errors', async () => {
      const error = new Error('err');

      sessionPool.options.max = 1;
      sandbox.stub(sessionPool, '_createSessions').rejects(error);

      try {
        await sessionPool._getSession(startTime);
        shouldNotBeCalled();
      } catch (e) {
        assert.strictEqual(e, error);
      }
    });

    it('should remove the available listener on error', async () => {
      sessionPool.options.acquireTimeout = 100;

      const promise = sessionPool._getSession(startTime);

      assert.strictEqual(sessionPool.listenerCount('session-available'), 1);

      try {
        await promise;
        shouldNotBeCalled();
      } catch (e) {
        assert.strictEqual(sessionPool.listenerCount('available'), 0);
      }
    });
  });

  describe('_isValidSession', () => {
    it('should return true if the session is good', () => {
      const fakeSession = createSession('id', {lastUsed: Date.now()});
      const isValid = sessionPool._isValidSession(fakeSession);

      assert.strictEqual(isValid, true);
    });

    it('should return true if the session has gone bad', () => {
      const fakeSession = createSession('id', {
        lastUsed: Date.now() - 61 * 60000,
      });
      const isValid = sessionPool._isValidSession(fakeSession);

      assert.strictEqual(isValid, false);
    });
  });

  describe('_ping', () => {
    beforeEach(() => {
      sandbox.stub(sessionPool, '_borrow');
    });

    it('should borrow the session', async () => {
      const fakeSession = createSession();
      const stub = sessionPool._borrow as sinon.SinonStub;

      stub.withArgs(fakeSession);
      await sessionPool._ping(fakeSession);

      assert.strictEqual(stub.callCount, 1);
    });

    it('should discard it if expired', async () => {
      const fakeSession = createSession();
      const keepAliveStub = fakeSession.keepAlive as sinon.SinonStub;

      inventory.borrowed.add(fakeSession);
      sandbox.stub(sessionPool, '_isValidSession').returns(false);
      await sessionPool._ping(fakeSession);

      const inPool = inventory.borrowed.has(fakeSession);

      assert.strictEqual(inPool, false);
      assert.strictEqual(keepAliveStub.callCount, 0);
    });

    it('should keep alive the session then release it', async () => {
      const fakeSession = createSession();
      const keepAliveStub = fakeSession.keepAlive as sinon.SinonStub;

      const releaseStub = sandbox
        .stub(sessionPool, 'release')
        .withArgs(fakeSession);
      sandbox.stub(sessionPool, '_isValidSession').returns(true);

      await sessionPool._ping(fakeSession);

      assert.strictEqual(keepAliveStub.callCount, 1);
      assert.strictEqual(releaseStub.callCount, 1);
    });

    it('should destroy the session if the ping fails', async () => {
      const fakeSession = createSession();
      const keepAliveStub = fakeSession.keepAlive as sinon.SinonStub;

      keepAliveStub.rejects();
      sandbox.stub(sessionPool, '_isValidSession').returns(true);

      const destroyStub = sandbox
        .stub(sessionPool, '_destroy')
        .withArgs(fakeSession)
        .resolves();

      await sessionPool._ping(fakeSession);

      const inPool = inventory.borrowed.has(fakeSession);

      assert.strictEqual(inPool, false);
      assert.strictEqual(destroyStub.callCount, 1);
    });
  });

  describe('_pingIdleSessions', () => {
    it('should ping each idle session', async () => {
      const fakeSessions = [createSession(), createSession(), createSession()];

      const pingStub = sandbox.stub(sessionPool, '_ping').resolves();
      sandbox.stub(sessionPool, '_getIdleSessions').returns(fakeSessions);
      sandbox.stub(sessionPool, '_fill').resolves();

      await sessionPool._pingIdleSessions();

      assert.strictEqual(pingStub.callCount, 3);

      fakeSessions.forEach((session, i) => {
        const pinged = pingStub.getCall(i).args[0];
        assert.strictEqual(pinged, session);
      });
    });

    it('should fill the pool after pinging', async () => {
      const fillStub = sandbox.stub(sessionPool, '_fill').resolves();

      sandbox.stub(sessionPool, '_getIdleSessions').returns([]);
      await sessionPool._pingIdleSessions();

      assert.strictEqual(fillStub.callCount, 1);
    });

    it('should not throw error when database not found', async () => {
      const fakeSessions = [createSession()];
      sandbox.stub(sessionPool, '_getIdleSessions').returns(fakeSessions);

      const error = {
        code: grpc.status.NOT_FOUND,
        message: 'Database not found',
      } as grpc.ServiceError;
      sandbox.stub(sessionPool, '_fill').rejects(error);

      try {
        await sessionPool._pingIdleSessions();
      } catch (err) {
        assert.ifError(err);
      }
    });
  });

  describe('_release', () => {
    it('should release the session', () => {
      const fakeSession = createSession('id');

      inventory.borrowed.add(fakeSession);
      sessionPool._release(fakeSession);

      assert.strictEqual(inventory.borrowed.has(fakeSession), false);
      assert.strictEqual(inventory.sessions.indexOf(fakeSession), 0);
    });

    it('should delete any stack traces', () => {
      const id = 'abc';
      const fakeSession = createSession(id);

      sessionPool._traces.set(id, []);
      sessionPool._release(fakeSession);

      assert.strictEqual(sessionPool._traces.has(id), false);
    });
  });

  describe('_startHouseKeeping', () => {
    it('should set an interval to evict idle sessions', done => {
      const expectedInterval = sessionPool.options.idlesAfter! * 60000;
      const clock = sandbox.useFakeTimers();

      sandbox.stub(sessionPool, '_evictIdleSessions').callsFake(done);

      sessionPool._startHouseKeeping();
      clock.tick(expectedInterval);
    });

    it('should set an interval to ping sessions', done => {
      const expectedInterval = sessionPool.options.keepAlive! * 60000;
      const clock = sandbox.useFakeTimers();

      sandbox
        .stub(sessionPool, '_pingIdleSessions')
        .callsFake(async () => done());

      sessionPool._startHouseKeeping();
      clock.tick(expectedInterval);
    });
  });

  describe('_stopHouseKeeping', () => {
    it('should clear the intervals', () => {
      sessionPool._pingHandle = setTimeout(noop, 1);
      sessionPool._evictHandle = setTimeout(noop, 1);

      const fakeHandles = [sessionPool._pingHandle, sessionPool._evictHandle];
      const stub = sandbox.stub(global, 'clearInterval');

      sessionPool._stopHouseKeeping();

      fakeHandles.forEach((fakeHandle, i) => {
        const [handle] = stub.getCall(i).args;
        assert.strictEqual(handle, fakeHandle);
      });
    });
  });

  describe('trace annotations on active span', () => {
    beforeEach(() => {
      sessionPool.isOpen = true;
      sessionPool._isValidSession = () => true;
    });

    it('annotations when acquiring a session', done => {
      const topLevelSpanName = 'testSessionPool.acquire';
      startTrace(topLevelSpanName, {}, async span => {
        const fakeSession = createSession();
        const now = Date.now();

        const stub = sandbox
          .stub(sessionPool, '_getSession')
          .resolves(fakeSession);
        const session = await sessionPool._acquire();
        const [startTime] = stub.getCall(0).args;

        assert(isAround(startTime, now));
        assert.strictEqual(session, fakeSession);

        await sessionPool._release(session);
        span.end();

        const events = span.events;
        assert.strictEqual(!events, false, 'Events must be set');
        assert.strictEqual(
          events.length > 0,
          true,
          'Expecting at least 1 event',
        );

        // Sort the events by earliest time of occurence.
        events.sort((evtA, evtB) => {
          return evtA.time < evtB.time;
        });

        const gotEventNames: string[] = [];
        events.forEach(event => {
          gotEventNames.push(event.name);
        });

        const wantEventNames = ['Acquiring session', 'Acquired session'];
        assert.deepEqual(
          gotEventNames,
          wantEventNames,
          `Mismatched events\n\tGot:  ${gotEventNames}\n\tWant: ${wantEventNames}`,
        );

        done();
      });
    });
  });
});

function isAround(actual, expected) {
  return actual > expected - 50 && actual < expected + 50;
}
