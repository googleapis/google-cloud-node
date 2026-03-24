// Copyright 2016 Google LLC
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

import * as assert from 'assert';
import {describe, it, beforeEach, afterEach} from 'mocha';
import * as sinon from 'sinon';

import {Service} from '../src';
import {Operation} from '../src/operation';
import {
  Metadata,
  ServiceObject,
  ServiceObjectConfig,
} from '../src/service-object';
import {util} from '../src/util';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const asAny = (o: {}) => o as any;

describe('Operation', () => {
  const FAKE_SERVICE = {} as Service;
  const OPERATION_ID = '/a/b/c/d';
  const sandbox = sinon.createSandbox();
  let operation: Operation;
  beforeEach(() => {
    operation = new Operation({parent: FAKE_SERVICE, id: OPERATION_ID});
  });

  afterEach(() => {
    sandbox.restore();
  });

  describe('instantiation', () => {
    const parent = {};

    it('should extend ServiceObject and EventEmitter', () => {
      const svcObj = ServiceObject;
      assert(operation instanceof Operation);
      assert(operation instanceof svcObj);
      assert(operation.on);
    });

    it('should pass ServiceObject the correct config', () => {
      assert.strictEqual(operation.baseUrl, '');
      assert.strictEqual(operation.parent, FAKE_SERVICE);
      assert.strictEqual(operation.id, OPERATION_ID);
      assert.deepStrictEqual(asAny(operation).methods, {
        exists: true,
        get: true,
        getMetadata: {
          reqOpts: {
            name: OPERATION_ID,
          },
        },
      });
    });

    it('should allow overriding baseUrl', () => {
      const baseUrl = 'baseUrl';
      const operation = new Operation({baseUrl, parent} as ServiceObjectConfig);
      assert.strictEqual(operation.baseUrl, baseUrl);
    });

    it('should localize listener variables', () => {
      assert.strictEqual(operation.completeListeners, 0);
      assert.strictEqual(operation.hasActiveListeners, false);
    });

    it('should call listenForEvents_', () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const stub = sandbox.stub(Operation.prototype as any, 'listenForEvents_');
      new Operation({parent} as ServiceObjectConfig);
      assert.ok(stub.called);
    });
  });

  describe('promise', () => {
    beforeEach(() => {
      asAny(operation).startPolling_ = () => Promise.resolve();
    });

    it('should reject the promise if an error occurs', () => {
      const error = new Error('err');
      setImmediate(() => {
        operation.emit('error', error);
      });
      return operation.promise().then(
        () => {
          throw new Error('Promise should have been rejected.');
        },
        (err: Error) => {
          assert.strictEqual(err, error);
        },
      );
    });

    it('should resolve the promise on complete', () => {
      const metadata = {};

      setImmediate(() => {
        operation.emit('complete', metadata);
      });

      return operation.promise().then(data => {
        assert.deepStrictEqual(data, [metadata]);
      });
    });
  });

  describe('listenForEvents_', () => {
    beforeEach(() => {
      asAny(operation).startPolling_ = util.noop;
    });

    it('should start polling when complete listener is bound', done => {
      asAny(operation).startPolling_ = () => done();
      operation.on('complete', util.noop);
    });

    it('should track the number of listeners', () => {
      assert.strictEqual(operation.completeListeners, 0);
      operation.on('complete', util.noop);
      assert.strictEqual(operation.completeListeners, 1);
      operation.removeListener('complete', util.noop);
      assert.strictEqual(operation.completeListeners, 0);
    });

    it('should only run a single pulling loop', () => {
      let startPollingCallCount = 0;
      asAny(operation).startPolling_ = () => startPollingCallCount++;
      operation.on('complete', util.noop);
      operation.on('complete', util.noop);
      assert.strictEqual(startPollingCallCount, 1);
    });

    it('should close when no more message listeners are bound', () => {
      operation.on('complete', util.noop);
      operation.on('complete', util.noop);
      assert.strictEqual(operation.hasActiveListeners, true);
      operation.removeListener('complete', util.noop);
      assert.strictEqual(operation.hasActiveListeners, true);
      operation.removeListener('complete', util.noop);
      assert.strictEqual(operation.hasActiveListeners, false);
    });
  });

  describe('poll_', () => {
    it('should call getMetdata', done => {
      asAny(operation).getMetadata = () => done();
      asAny(operation).poll_(assert.ifError);
    });

    describe('could not get metadata', () => {
      it('should callback with an error', done => {
        const error = new Error('Error.');
        sandbox.stub(operation, 'getMetadata').callsArgWith(0, error);
        asAny(operation).poll_((err: Error) => {
          assert.strictEqual(err, error);
          done();
        });
      });

      it('should callback with the operation error', done => {
        const apiResponse = {
          error: {},
        } as Metadata;
        sandbox
          .stub(operation, 'getMetadata')
          .callsArgWith(0, null, apiResponse);
        asAny(operation).poll_((err: Error) => {
          assert.strictEqual(err, apiResponse.error);
          done();
        });
      });
    });

    describe('operation incomplete', () => {
      const apiResponse = {done: false};

      beforeEach(() => {
        sandbox
          .stub(operation, 'getMetadata')
          .callsArgWith(0, null, apiResponse);
      });

      it('should callback with no arguments', done => {
        asAny(operation).poll_((err: Error, resp: {}) => {
          assert.strictEqual(resp, undefined);
          done();
        });
      });
    });

    describe('operation complete', () => {
      const apiResponse = {done: true};
      beforeEach(() => {
        sandbox
          .stub(operation, 'getMetadata')
          .callsArgWith(0, null, apiResponse);
      });

      it('should emit complete with metadata', done => {
        asAny(operation).poll_((err: Error, resp: {}) => {
          assert.strictEqual(resp, apiResponse);
          done();
        });
      });
    });
  });

  describe('startPolling_', () => {
    beforeEach(() => {
      sandbox.stub(asAny(Operation).prototype, 'listenForEvents_');
      operation.hasActiveListeners = true;
    });

    it('should not call getMetadata if no listeners', done => {
      operation.hasActiveListeners = false;
      sandbox.stub(operation, 'getMetadata').callsFake(done); // if called, test will fail.
      asAny(operation).startPolling_();
      done();
    });

    it('should call getMetadata if listeners are registered', done => {
      operation.hasActiveListeners = true;
      sandbox.stub(operation, 'getMetadata').callsFake(() => done());
      asAny(operation).startPolling_();
    });

    describe('API error', () => {
      const error = new Error('Error.');
      beforeEach(() => {
        sandbox.stub(operation, 'getMetadata').callsArgWith(0, error);
      });

      it('should emit the error', done => {
        operation.on('error', (err: Error) => {
          assert.strictEqual(err, error);
          done();
        });
        asAny(operation).startPolling_();
      });
    });

    describe('operation pending', () => {
      const apiResponse = {done: false};

      beforeEach(() => {
        sandbox
          .stub(operation, 'getMetadata')
          .callsArgWith(0, null, apiResponse);
      });

      it('should call startPolling_ after 500 ms by default', done => {
        const startPolling_ = asAny(operation).startPolling_;
        let startPollingCalled = false;

        sandbox.stub(global, 'setTimeout').callsFake((fn, timeoutMs) => {
          fn(); // should call startPolling_
          assert.strictEqual(timeoutMs, 500);
          return asAny({});
        });

        asAny(operation).startPolling_ = function () {
          if (!startPollingCalled) {
            // Call #1.
            startPollingCalled = true;
            // eslint-disable-next-line prefer-rest-params
            startPolling_.apply(this, arguments);
            return;
          }
          // This is from the setTimeout call.
          assert.strictEqual(this, operation);
          done();
        };

        asAny(operation).startPolling_();
      });

      it('should call startPolling_ after 2000 ms if configured to do so', done => {
        // Mock a long running operation with a 2000 ms timeout:
        const op = new Operation({
          parent: FAKE_SERVICE,
          id: OPERATION_ID,
          pollIntervalMs: 2000,
        });
        op.hasActiveListeners = true;
        sandbox.stub(op, 'getMetadata').callsArgWith(0, null, apiResponse);
        const startPolling_ = asAny(op).startPolling_;
        let startPollingCalled = false;

        sandbox.stub(global, 'setTimeout').callsFake((fn, timeoutMs) => {
          fn(); // should call startPolling_
          assert.strictEqual(timeoutMs, 2000);
          return asAny({});
        });

        asAny(op).startPolling_ = function () {
          if (!startPollingCalled) {
            // Call #1.
            startPollingCalled = true;
            // eslint-disable-next-line prefer-rest-params
            startPolling_.apply(this, arguments);
            return;
          }
          // This is from the setTimeout call.
          assert.strictEqual(this, op);
          done();
        };

        asAny(op).startPolling_();
      });
    });

    describe('operation complete', () => {
      const apiResponse = {done: true};

      beforeEach(() => {
        sandbox
          .stub(operation, 'getMetadata')
          .callsArgWith(0, null, apiResponse);
      });

      it('should emit complete with metadata', async () => {
        operation.on('complete', (metadata: {}) => {
          assert.strictEqual(metadata, apiResponse);
        });
        await asAny(operation).startPolling_();
      });
    });
  });
});
