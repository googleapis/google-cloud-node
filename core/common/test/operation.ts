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
  let operation: Operation;
  beforeEach(() => {
    operation = new Operation({parent: FAKE_SERVICE, id: OPERATION_ID});
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  describe('instantiation', () => {
    const parent = {};

    it('should extend ServiceObject and EventEmitter', () => {
      const svcObj = ServiceObject;
      expect(operation).toBeInstanceOf(Operation);
      expect(operation).toBeInstanceOf(svcObj);
      expect(operation.on).toBeDefined();
    });

    it('should pass ServiceObject the correct config', () => {
      expect(operation.baseUrl).toBe('');
      expect(operation.parent).toBe(FAKE_SERVICE);
      expect(operation.id).toBe(OPERATION_ID);
      expect(asAny(operation).methods).toEqual({
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
      expect(operation.baseUrl).toBe(baseUrl);
    });

    it('should localize listener variables', () => {
      expect(operation.completeListeners).toBe(0);
      expect(operation.hasActiveListeners).toBe(false);
    });

    it('should call listenForEvents_', () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const stub = jest.spyOn(Operation.prototype as any, 'listenForEvents_').mockImplementation(() => {});
      new Operation({parent} as ServiceObjectConfig);
      expect(stub).toHaveBeenCalled();
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
          expect(err).toBe(error);
        },
      );
    });

    it('should resolve the promise on complete', () => {
      const metadata = {};

      setImmediate(() => {
        operation.emit('complete', metadata);
      });

      return operation.promise().then(data => {
        expect(data).toEqual([metadata]);
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
      expect(operation.completeListeners).toBe(0);
      operation.on('complete', util.noop);
      expect(operation.completeListeners).toBe(1);
      operation.removeListener('complete', util.noop);
      expect(operation.completeListeners).toBe(0);
    });

    it('should only run a single pulling loop', () => {
      let startPollingCallCount = 0;
      asAny(operation).startPolling_ = () => startPollingCallCount++;
      operation.on('complete', util.noop);
      operation.on('complete', util.noop);
      expect(startPollingCallCount).toBe(1);
    });

    it('should close when no more message listeners are bound', () => {
      operation.on('complete', util.noop);
      operation.on('complete', util.noop);
      expect(operation.hasActiveListeners).toBe(true);
      operation.removeListener('complete', util.noop);
      expect(operation.hasActiveListeners).toBe(true);
      operation.removeListener('complete', util.noop);
      expect(operation.hasActiveListeners).toBe(false);
    });
  });

  describe('poll_', () => {
    it('should call getMetadata', done => {
      asAny(operation).getMetadata = () => done();
      asAny(operation).poll_((err: Error) => {
        expect(err).toBeNull();
      });
    });

    describe('could not get metadata', () => {
      it('should callback with an error', done => {
        const error = new Error('Error.');
        jest.spyOn(operation, 'getMetadata').mockImplementation((callback: any) => callback(error));
        asAny(operation).poll_((err: Error) => {
          expect(err).toBe(error);
          done();
        });
      });

      it('should callback with the operation error', done => {
        const apiResponse = {
          error: {},
        } as Metadata;
        jest.spyOn(operation, 'getMetadata').mockImplementation((callback: any) => callback(null, apiResponse));
        asAny(operation).poll_((err: Error) => {
          expect(err).toBe(apiResponse.error);
          done();
        });
      });
    });

    describe('operation incomplete', () => {
      const apiResponse = {done: false};

      beforeEach(() => {
        jest.spyOn(operation, 'getMetadata').mockImplementation((callback: any) => callback(null, apiResponse));
      });

      it('should callback with no arguments', done => {
        asAny(operation).poll_((err: Error, resp: {}) => {
          expect(resp).toBeUndefined();
          done();
        });
      });
    });

    describe('operation complete', () => {
      const apiResponse = {done: true};
      beforeEach(() => {
        jest.spyOn(operation, 'getMetadata').mockImplementation((callback: any) => callback(null, apiResponse));
      });

      it('should emit complete with metadata', done => {
        asAny(operation).poll_((err: Error, resp: {}) => {
          expect(resp).toBe(apiResponse);
          done();
        });
      });
    });
  });

  describe('startPolling_', () => {
    beforeEach(() => {
      jest.spyOn(Operation.prototype as any, 'listenForEvents_').mockImplementation(() => {});
      operation.hasActiveListeners = true;
    });

    it('should not call getMetadata if no listeners', done => {
      operation.hasActiveListeners = false;
      jest.spyOn(operation, 'getMetadata').mockImplementation(done); // if called, test will fail.
      asAny(operation).startPolling_();
      done();
    });

    it('should call getMetadata if listeners are registered', done => {
      operation.hasActiveListeners = true;
      jest.spyOn(operation, 'getMetadata').mockImplementation(() => done());
      asAny(operation).startPolling_();
    });

    describe('API error', () => {
      const error = new Error('Error.');
      beforeEach(() => {
        jest.spyOn(operation, 'getMetadata').mockImplementation((callback: any) => callback(error));
      });

      it('should emit the error', done => {
        operation.on('error', (err: Error) => {
          expect(err).toBe(error);
          done();
        });
        asAny(operation).startPolling_();
      });
    });

    describe('operation pending', () => {
      const apiResponse = {done: false};

      beforeEach(() => {
        jest.spyOn(operation, 'getMetadata').mockImplementation((callback: any) => callback(null, apiResponse));
      });

      it('should call startPolling_ after 500 ms by default', done => {
        const startPolling_ = asAny(operation).startPolling_;
        let startPollingCalled = false;

        jest.spyOn(global, 'setTimeout').mockImplementation((fn: any, timeoutMs: any) => {
          fn(); // should call startPolling_
          expect(timeoutMs).toBe(500);
          return {} as any;
        });

        asAny(operation).startPolling_ = function (this: any) {
          if (!startPollingCalled) {
            // Call #1.
            startPollingCalled = true;
            // eslint-disable-next-line prefer-rest-params
            startPolling_.apply(this, arguments);
            return;
          }
          // This is from the setTimeout call.
          expect(this).toBe(operation);
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
        jest.spyOn(op, 'getMetadata').mockImplementation((callback: any) => callback(null, apiResponse));
        const startPolling_ = asAny(op).startPolling_;
        let startPollingCalled = false;

        jest.spyOn(global, 'setTimeout').mockImplementation((fn: any, timeoutMs: any) => {
          fn(); // should call startPolling_
          expect(timeoutMs).toBe(2000);
          return {} as any;
        });

        asAny(op).startPolling_ = function (this: any) {
          if (!startPollingCalled) {
            // Call #1.
            startPollingCalled = true;
            // eslint-disable-next-line prefer-rest-params
            startPolling_.apply(this, arguments);
            return;
          }
          // This is from the setTimeout call.
          expect(this).toBe(op);
          done();
        };

        asAny(op).startPolling_();
      });
    });

    describe('operation complete', () => {
      const apiResponse = {done: true};

      beforeEach(() => {
        jest.spyOn(operation, 'getMetadata').mockImplementation((callback: any) => callback(null, apiResponse));
      });

      it('should emit complete with metadata', async () => {
        operation.on('complete', (metadata: {}) => {
          expect(metadata).toBe(apiResponse);
        });
        await asAny(operation).startPolling_();
      });
    });
  });
});
