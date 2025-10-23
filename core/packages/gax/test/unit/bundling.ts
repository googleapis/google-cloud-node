/**
 * Copyright 2020 Google LLC
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

/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable no-prototype-builtins */

import assert from 'assert';
import {status} from '@grpc/grpc-js';
import * as sinon from 'sinon';
import {describe, it, beforeEach} from 'mocha';

import {BundleDescriptor} from '../../src/bundlingCalls/bundleDescriptor';
import {
  BundleExecutor,
  BundleOptions,
} from '../../src/bundlingCalls/bundleExecutor';
import {computeBundleId} from '../../src/bundlingCalls/bundlingUtils';
import {deepCopyForResponse, Task} from '../../src/bundlingCalls/task';
import {GoogleError} from '../../src/googleError';

import {createApiCall} from './utils';
import {SimpleCallbackFunction, RequestType} from '../../src/apitypes';

function createOuter(value: {}, otherValue?: {}) {
  if (otherValue === undefined) {
    otherValue = value;
  }
  return {inner: {field1: value, field2: otherValue}, field1: value};
}

function byteLength(obj: {}) {
  return JSON.stringify(obj).length;
}

describe('computeBundleId', () => {
  describe('computes the bundle identifier', () => {
    const testCases = [
      {
        message: 'single field value',
        object: {field1: 'dummy_value'},
        fields: ['field1'],
        want: '["dummy_value"]',
      },
      {
        message: 'composite value with missing field2',
        object: {field1: 'dummy_value'},
        fields: ['field1', 'field2'],
        want: '["dummy_value",null]',
      },
      {
        message: 'a composite value',
        object: {field1: 'dummy_value', field2: 'other_value'},
        fields: ['field1', 'field2'],
        want: '["dummy_value","other_value"]',
      },
      {
        message: 'null',
        object: {field1: null},
        fields: ['field1'],
        want: '[null]',
      },
      {
        message: 'partially nonexisting fields',
        object: {field1: 'dummy_value', field2: 'other_value'},
        fields: ['field1', 'field3'],
        want: '["dummy_value",null]',
      },
      {
        message: 'numeric',
        object: {field1: 42},
        fields: ['field1'],
        want: '[42]',
      },
      {
        message: 'structured data',
        object: {field1: {foo: 'bar', baz: 42}},
        fields: ['field1'],
        want: '[{"foo":"bar","baz":42}]',
      },
      {
        message: 'a simple dotted value',
        object: createOuter('this is dotty'),
        fields: ['inner.field1'],
        want: '["this is dotty"]',
      },
      {
        message: 'a complex case',
        object: createOuter('what!?'),
        fields: ['inner.field1', 'inner.field2', 'field1'],
        want: '["what!?","what!?","what!?"]',
      },
    ];
    testCases.forEach(t => {
      it(t.message, () => {
        assert.strictEqual(
          computeBundleId(t.object as unknown as RequestType, t.fields),
          t.want,
        );
      });
    });
  });

  describe('returns undefined if failed', () => {
    const testCases = [
      {
        message: 'empty discriminator fields',
        object: {field1: 'dummy_value'},
        fields: [],
      },
      {
        message: 'nonexisting fields',
        object: {field1: 'dummy_value'},
        fields: ['field3'],
      },
      {
        message: 'fails to look up in the middle',
        object: createOuter('this is dotty'),
        fields: ['inner.field3'],
      },
    ];
    testCases.forEach(t => {
      it(t.message, () => {
        assert.strictEqual(computeBundleId(t.object, t.fields), undefined);
      });
    });
  });
});

describe('deepCopyForResponse', () => {
  it('copies deeply', () => {
    const input = {foo: {bar: [1, 2]}};
    const output = deepCopyForResponse(input, null);
    assert.deepStrictEqual(output, input);
    assert.notStrictEqual(output.foo, input.foo);
    assert.notStrictEqual(output.foo.bar, input.foo.bar);
  });

  it('respects subresponseInfo', () => {
    const input = {foo: [1, 2, 3, 4], bar: {foo: [1, 2, 3, 4]}};
    const output = deepCopyForResponse(input, {
      field: 'foo',
      start: 0,
      end: 2,
    });
    assert.deepStrictEqual(output, {foo: [1, 2], bar: {foo: [1, 2, 3, 4]}});
    assert.notStrictEqual(output.bar, input.bar);

    const output2 = deepCopyForResponse(input, {
      field: 'foo',
      start: 2,
      end: 4,
    });
    assert.deepStrictEqual(output2, {foo: [3, 4], bar: {foo: [1, 2, 3, 4]}});
    assert.notStrictEqual(output2.bar, input.bar);
  });

  it('deep copies special values', () => {
    class Copyable {
      constructor(public id: {}) {}
      copy() {
        return new Copyable(this.id);
      }
    }
    const input = {
      copyable: new Copyable(0),
      arraybuffer: new ArrayBuffer(10),
      nullvalue: null,
      array: [1, 2, 3],
      number: 1,
      boolean: false,
      obj: {
        foo: 1,
      },
    };
    const output = deepCopyForResponse(input, null);
    assert.deepStrictEqual(output, input);
    assert.notStrictEqual(output.copyable, input.copyable);
    assert.notStrictEqual(output.arraybuffer, input.arraybuffer);
    assert.notStrictEqual(output.array, input.array);
  });

  it('ignores erroneous subresponseInfo', () => {
    const input = {foo: 1, bar: {foo: [1, 2, 3, 4]}};
    const output = deepCopyForResponse(input, {
      field: 'foo',
      start: 0,
      end: 2,
    });
    assert.deepStrictEqual(output, input);
  });
});

describe('Task', () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function testTask(apiCall?: any) {
    return new Task(apiCall, {}, 'field1', null);
  }

  let id = 0;
  function extendElements(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    task: any,
    elements: string[] | number[],
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    callback?: any,
  ) {
    if (!callback) {
      callback = () => {};
    }
    callback.id = id++;
    let bytes = 0;
    elements.forEach((element: string | number) => {
      bytes += byteLength(element);
    });
    task.extend(elements, bytes, callback);
  }

  describe('extend', () => {
    const data = 'a simple msg';
    const testCases = [
      {
        data: [],
        message: 'no messages added',
        want: 0,
      },
      {
        data: [data],
        message: 'a single message added',
        want: 1,
      },
      {
        data: [data, data, data, data, data],
        message: '5 messages added',
        want: 5,
      },
    ];
    describe('increases the element count', () => {
      testCases.forEach(t => {
        it(t.message, () => {
          const task = testTask();
          const baseCount = task.getElementCount();
          extendElements(task, t.data);
          assert.strictEqual(
            task.getElementCount(),
            baseCount! + t.want,
            t.message,
          );
        });
      });
    });

    describe('increases the byte size', () => {
      const sizePerData = JSON.stringify(data).length;
      testCases.forEach(t => {
        it(t.message, () => {
          const task = testTask();
          const baseSize = task.getRequestByteSize();
          extendElements(task, t.data);
          assert.strictEqual(
            task.getRequestByteSize(),
            baseSize! + t.want * sizePerData,
          );
        });
      });
    });
  });

  describe('run', () => {
    const data = 'test message';
    const testCases = [
      {
        data: [],
        message: 'no messages added',
        expected: null,
      },
      {
        data: [[data]],
        message: 'a single message added',
        expected: [data],
      },
      {
        data: [
          [data, data],
          [data, data, data],
        ],
        message: 'a single message added',
        expected: [data, data, data, data, data],
      },
      {
        data: [[data, data, data, data, data]],
        message: '5 messages added',
        expected: [data, data, data, data, data],
      },
    ];
    function createApiCall(expected: {}) {
      return function apiCall(req: {field1: {}}, callback: Function) {
        assert.deepStrictEqual(req.field1, expected);
        return callback(null, req);
      };
    }

    describe('sends bundled elements', () => {
      testCases.forEach(t => {
        it(t.message, done => {
          const apiCall = sinon.spy(createApiCall(t.expected!));
          const task = testTask(apiCall as unknown as SimpleCallbackFunction);
          const callback = sinon.spy((err, data) => {
            assert.strictEqual(err, null);
            assert(data instanceof Object);
            if (callback.callCount === t.data.length) {
              assert.strictEqual(apiCall.callCount, 1);
              done();
            }
          });
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (t as any).data.forEach((d: string[]) => {
            extendElements(task!, d, callback);
          });
          task!.run();
          if (t.expected === null) {
            assert.strictEqual(callback.callCount, 0);
            assert.strictEqual(apiCall.callCount, 0);
            done();
          }
        });
      });
    });

    describe('calls back with the subresponse fields', () => {
      testCases.forEach(t => {
        it(t.message, done => {
          const apiCall = sinon.spy(createApiCall(t.expected!));
          const task = testTask(apiCall as unknown as SimpleCallbackFunction);
          task!._subresponseField = 'field1';
          let callbackCount = 0;
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (t as any).data.forEach((d: string[]) => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            extendElements(task!, d, (err: any, data: {field1: []}) => {
              assert.strictEqual(err, null);
              assert.strictEqual(data.field1.length, d.length);
              callbackCount++;
              if (callbackCount === t.data.length) {
                assert.strictEqual(apiCall.callCount, 1);
                done();
              }
            });
          });
          task!.run();
          if (t.expected === null) {
            assert.strictEqual(callbackCount, 0);
            assert.strictEqual(apiCall.callCount, 0);
            done();
          }
        });
      });
    });

    describe('calls back with fail if API fails', () => {
      testCases.slice(1).forEach(t => {
        it(t.message, done => {
          const err = new Error('failure');
          const apiCall = sinon.spy((resp, callback) => {
            callback(err);
          });
          const task = testTask(apiCall as unknown as SimpleCallbackFunction);
          task!._subresponseField = 'field1';
          const callback = sinon.spy((e, data) => {
            assert.strictEqual(e, err);
            assert.strictEqual(data, undefined);
            if (callback.callCount === t.data.length) {
              assert.strictEqual(apiCall.callCount, 1);
              done();
            }
          });
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (t as any).data.forEach((d: string[]) => {
            extendElements(task!, d, callback);
          });
          task!.run();
        });
      });
    });
  });

  it('cancels existing data', done => {
    const apiCall = sinon.spy((resp, callback) => {
      callback(null, resp);
    });
    const task = testTask(apiCall as unknown as SimpleCallbackFunction);
    task!._subresponseField = 'field1';
    const callback = sinon.spy(() => {
      if (callback.callCount === 2) {
        done();
      }
    });
    extendElements(task!, [1, 2, 3], (err: {}, resp: {field1: number[]}) => {
      assert.deepStrictEqual(resp.field1, [1, 2, 3]);
      callback();
    });
    extendElements(task!, [4, 5, 6], (err: GoogleError) => {
      assert(err instanceof GoogleError);
      assert.strictEqual(err!.code, status.CANCELLED);
    });
    const cancelId = task!._data[task!._data.length - 1].callback.id;

    extendElements(task!, [7, 8, 9], (err: {}, resp: {field1: number[]}) => {
      assert.deepStrictEqual(resp.field1, [7, 8, 9]);
      callback();
    });

    task!.cancel(cancelId!);
    task!.run();
  });

  it('cancels ongoing API call', done => {
    const apiCall = sinon.spy((resp, callback) => {
      const timeoutId = setTimeout(() => {
        callback(null, resp);
      }, 100);
      return {
        cancel() {
          clearTimeout(timeoutId);
          callback(new Error('cancelled'));
        },
      };
    });

    const task = testTask(apiCall);
    const callback = sinon.spy(() => {
      if (callback.callCount === 2) {
        done();
      }
    });
    extendElements(task, [1, 2, 3], (err: GoogleError) => {
      assert(err instanceof GoogleError);
      assert.strictEqual(err!.code, status.CANCELLED);
      callback();
    });
    extendElements(task, [1, 2, 3], (err: GoogleError) => {
      assert(err instanceof GoogleError);
      assert.strictEqual(err!.code, status.CANCELLED);
      callback();
    });
    task.run();
    task._data.forEach(data => {
      task.cancel(data.callback.id!);
    });
  });

  it('partially cancels ongoing API call', done => {
    const apiCall = sinon.spy((resp, callback) => {
      const timeoutId = setTimeout(() => {
        callback(null, resp);
      }, 100);
      return {
        cancel: () => {
          clearTimeout(timeoutId);
          callback(new Error('cancelled'));
        },
      };
    });

    const task = testTask(apiCall);
    task._subresponseField = 'field1';
    const callback = sinon.spy(() => {
      if (callback.callCount === 2) {
        done();
      }
    });
    extendElements(task, [1, 2, 3], (err: GoogleError) => {
      assert(err instanceof GoogleError);
      assert.strictEqual(err!.code, status.CANCELLED);
      callback();
    });
    const cancelId = task._data[task._data.length - 1].callback.id;
    extendElements(task, [4, 5, 6], (err: {}, resp: {field1: number[]}) => {
      assert.deepStrictEqual(resp.field1, [4, 5, 6]);
      callback();
    });
    task.run();
    task.cancel(cancelId!);
  });
});

describe('Executor', () => {
  function apiCall(request: {}, callback: Function) {
    callback(null, request);
    return {cancel: () => {}};
  }
  function failing(request: {}, callback: Function) {
    callback(new Error('failure'));
    return {cancel: () => {}};
  }

  function newExecutor(options: BundleOptions) {
    const descriptor = new BundleDescriptor(
      'field1',
      ['field2'],
      'field1',
      byteLength,
    );
    return new BundleExecutor(options, descriptor);
  }

  it('groups api calls by the id', () => {
    const executor = newExecutor({delayThreshold: 10});
    executor.schedule(apiCall, {field1: [1, 2], field2: 'id1'});
    executor.schedule(apiCall, {field1: [3], field2: 'id2'});
    executor.schedule(apiCall, {field1: [4, 5], field2: 'id1'});
    executor.schedule(apiCall, {field1: [6], field2: 'id2'});

    assert(executor._tasks.hasOwnProperty('["id1"]'));
    assert(executor._tasks.hasOwnProperty('["id2"]'));
    assert.strictEqual(Object.keys(executor._tasks).length, 2);

    let task = executor._tasks['["id1"]'];
    assert.strictEqual(task._data.length, 2);
    assert.deepStrictEqual(task._data[0].elements, [1, 2]);
    assert.deepStrictEqual(task._data[1].elements, [4, 5]);

    task = executor._tasks['["id2"]'];
    assert.strictEqual(task._data.length, 2);
    assert.deepStrictEqual(task._data[0].elements, [3]);
    assert.deepStrictEqual(task._data[1].elements, [6]);

    for (const bundleId in executor._timers) {
      clearTimeout(executor._timers[bundleId]);
    }
  });

  it('emits errors when the api call fails', done => {
    const executor = newExecutor({delayThreshold: 10});
    const callback = sinon.spy(err => {
      assert(err instanceof Error);
      if (callback.callCount === 2) {
        done();
      }
    });
    executor.schedule(failing, {field1: [1], field2: 'id'}, callback);
    executor.schedule(failing, {field1: [2], field2: 'id'}, callback);
  });

  it('runs unbundleable tasks immediately', done => {
    const executor = newExecutor({delayThreshold: 10});
    const spy = sinon.spy(apiCall);
    let counter = 0;
    let unbundledCallCounter = 0;
    function onEnd() {
      assert.strictEqual(spy.callCount, 3);
      done();
    }
    executor.schedule(spy, {field1: [1, 2], field2: 'id1'}, (err, resp) => {
      // @ts-ignore unknown field
      assert.deepStrictEqual(resp.field1, [1, 2]);
      assert.strictEqual(unbundledCallCounter, 2);
      counter++;
      if (counter === 4) {
        onEnd();
      }
    });
    executor.schedule(spy, {field1: [3]}, (err, resp) => {
      // @ts-ignore unknown field
      assert.deepStrictEqual(resp.field1, [3]);
      unbundledCallCounter++;
      counter++;
    });
    executor.schedule(spy, {field1: [4], field2: 'id1'}, (err, resp) => {
      // @ts-ignore unknown field
      assert.deepStrictEqual(resp.field1, [4]);
      assert.strictEqual(unbundledCallCounter, 2);
      counter++;
      if (counter === 4) {
        onEnd();
      }
    });
    executor.schedule(spy, {field1: [5, 6]}, (err, resp) => {
      // @ts-ignore unknown field
      assert.deepStrictEqual(resp.field1, [5, 6]);
      unbundledCallCounter++;
      counter++;
    });
  });

  describe('callback', () => {
    const executor = newExecutor({delayThreshold: 10});
    let spyApi = sinon.spy(apiCall);

    function timedAPI(request: {}, callback: Function) {
      let canceled = false;
      // This invokes callback asynchronously by using setTimeout with 0msec, so
      // the callback invocation can be canceled in the same event loop of this
      // API is called.
      setTimeout(() => {
        if (!canceled) {
          callback(null, request);
        }
      }, 0);
      return () => {
        canceled = true;
        callback(new Error('canceled'));
      };
    }

    beforeEach(() => {
      spyApi = sinon.spy(apiCall);
    });

    it("shouldn't block next event after cancellation", done => {
      const canceller = executor.schedule(
        spyApi,
        {field1: [1, 2], field2: 'id'},
        err => {
          assert(err instanceof GoogleError);
          assert.strictEqual(err!.code, status.CANCELLED);
          assert.strictEqual(spyApi.callCount, 0);

          executor.schedule(
            spyApi,
            {field1: [3, 4], field2: 'id'},
            (err, resp) => {
              // @ts-ignore unknown field
              assert.deepStrictEqual(resp.field1, [3, 4]);
              assert.strictEqual(spyApi.callCount, 1);
              done();
            },
          );
        },
      );
      assert.strictEqual(spyApi.callCount, 0);
      canceller.cancel();
    });

    it('distinguishes a running task and a scheduled one', done => {
      let counter = 0;
      // @ts-ignore cancellation logic is broken here
      executor.schedule(timedAPI, {field1: [1, 2], field2: 'id'}, err => {
        assert.strictEqual(err, null);
        counter++;
        // counter should be 2 because event2 callback should be called
        // earlier (it should be called immediately on cancel).
        assert.strictEqual(counter, 2);
        done();
      });
      executor._runNow('id');

      const canceller =
        // @ts-ignore cancellation logic is broken here
        executor.schedule(timedAPI, {field1: [1, 2], field2: 'id'}, err => {
          assert(err instanceof GoogleError);
          assert.strictEqual(err!.code, status.CANCELLED);
          counter++;
        });
      canceller.cancel();
    });
  });

  it('respects element count', () => {
    const threshold = 5;
    const executor = newExecutor({elementCountThreshold: threshold});
    const spy = sinon.spy((request, callback) => {
      assert.strictEqual(request.field1.length, threshold);
      callback(null, request);
      return {cancel: () => {}};
    });
    for (let i = 0; i < threshold - 1; ++i) {
      executor.schedule(spy, {field1: [1], field2: 'id1'});
      executor.schedule(spy, {field1: [2], field2: 'id2'});
    }
    assert.strictEqual(spy.callCount, 0);

    executor.schedule(spy, {field1: [1], field2: 'id1'});
    assert.strictEqual(spy.callCount, 1);

    executor.schedule(spy, {field1: [2], field2: 'id2'});
    assert.strictEqual(spy.callCount, 2);

    assert.strictEqual(Object.keys(executor._tasks).length, 0);
  });

  it('respects bytes count', () => {
    const unitSize = byteLength(1);
    const count = 5;
    const threshold = unitSize * count;

    const executor = newExecutor({requestByteThreshold: threshold});
    const spy = sinon.spy((request, callback) => {
      assert.strictEqual(request.field1.length, count);
      assert(byteLength(request.field1) >= threshold);
      callback(null, request);
      return {cancel: () => {}};
    });
    for (let i = 0; i < count - 1; ++i) {
      executor.schedule(spy, {field1: [1], field2: 'id1'});
      executor.schedule(spy, {field1: [2], field2: 'id2'});
    }
    assert.strictEqual(spy.callCount, 0);

    executor.schedule(spy, {field1: [1], field2: 'id1'});
    assert.strictEqual(spy.callCount, 1);

    executor.schedule(spy, {field1: [2], field2: 'id2'});
    assert.strictEqual(spy.callCount, 2);

    assert.strictEqual(Object.keys(executor._tasks).length, 0);
  });

  it('respects element limit', done => {
    const threshold = 5;
    const limit = 7;
    const executor = newExecutor({
      elementCountThreshold: threshold,
      elementCountLimit: limit,
    });
    const spy = sinon.spy((request, callback) => {
      assert(Array.isArray(request.field1));
      callback(null, request);
      return {cancel: () => {}};
    });
    executor.schedule(spy, {field1: [1, 2], field2: 'id'});
    executor.schedule(spy, {field1: [3, 4], field2: 'id'});
    assert.strictEqual(spy.callCount, 0);
    assert.strictEqual(Object.keys(executor._tasks).length, 1);

    executor.schedule(spy, {field1: [5, 6, 7], field2: 'id'});
    assert.strictEqual(spy.callCount, 1);
    assert.strictEqual(Object.keys(executor._tasks).length, 1);

    executor.schedule(spy, {field1: [8, 9, 10, 11, 12], field2: 'id'});
    assert.strictEqual(spy.callCount, 3);
    assert.strictEqual(Object.keys(executor._tasks).length, 0);

    executor.schedule(
      spy,
      {field1: [1, 2, 3, 4, 5, 6, 7, 8], field2: 'id'},
      err => {
        assert(err instanceof GoogleError);
        assert.strictEqual(err!.code, status.INVALID_ARGUMENT);
        done();
      },
    );
  });

  it('respects bytes limit', done => {
    const unitSize = byteLength(1);
    const threshold = 5;
    const limit = 7;
    const executor = newExecutor({
      requestByteThreshold: threshold * unitSize,
      requestByteLimit: limit * unitSize,
    });
    const spy = sinon.spy((request, callback) => {
      assert(Array.isArray(request.field1));
      callback(null, request);
      return {cancel: () => {}};
    });
    executor.schedule(spy, {field1: [1, 2], field2: 'id'});
    executor.schedule(spy, {field1: [3, 4], field2: 'id'});
    assert.strictEqual(spy.callCount, 0);
    assert.strictEqual(Object.keys(executor._tasks).length, 1);

    executor.schedule(spy, {field1: [5, 6, 7], field2: 'id'});
    assert.strictEqual(spy.callCount, 1);
    assert.strictEqual(Object.keys(executor._tasks).length, 1);

    executor.schedule(spy, {field1: [8, 9, 0, 1, 2], field2: 'id'});
    assert.strictEqual(spy.callCount, 3);
    assert.strictEqual(Object.keys(executor._tasks).length, 0);

    executor.schedule(
      spy,
      {field1: [1, 2, 3, 4, 5, 6, 7], field2: 'id'},
      err => {
        assert(err instanceof GoogleError);
        assert.strictEqual(err!.code, status.INVALID_ARGUMENT);
        done();
      },
    );
  });

  it('does not invoke runNow twice', done => {
    const threshold = 2;
    const executor = newExecutor({
      elementCountThreshold: threshold,
      delayThreshold: 10,
    });
    executor._runNow = sinon.spy(executor._runNow.bind(executor));
    const spy = sinon.spy((request, callback) => {
      assert.strictEqual(request.field1.length, threshold);
      callback(null, request);
      return {cancel: () => {}};
    });
    executor.schedule(spy, {field1: [1, 2], field2: 'id1'});
    setTimeout(() => {
      assert.strictEqual(spy.callCount, 1);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      assert.strictEqual((executor._runNow as any).callCount, 1);
      done();
    }, 20);
  });

  describe('timer', () => {
    it('waits on the timer', done => {
      const executor = newExecutor({delayThreshold: 50});
      const spy = sinon.spy(apiCall);
      const start = new Date().getTime();
      function onEnd() {
        assert.strictEqual(spy.callCount, 1);
        const now = new Date().getTime();
        assert(now - start >= 49);
        done();
      }
      const tasks = 5;
      const callback = sinon.spy(() => {
        if (callback.callCount === tasks) {
          onEnd();
        }
      });
      for (let i = 0; i < tasks; i++) {
        executor.schedule(spy, {field1: [i], field2: 'id'}, callback);
      }
    });

    it('reschedules after timer', done => {
      const executor = newExecutor({delayThreshold: 50});
      const spy = sinon.spy(apiCall);
      const start = new Date().getTime();
      executor.schedule(spy, {field1: [0], field2: 'id'}, () => {
        assert.strictEqual(spy.callCount, 1);
        const firstEnded = new Date().getTime();
        assert(firstEnded - start >= 49);
        executor.schedule(spy, {field1: [1], field2: 'id'}, () => {
          assert.strictEqual(spy.callCount, 2);
          const secondEnded = new Date().getTime();
          assert(secondEnded - firstEnded >= 49);
          done();
        });
      });
    });
  });
});

describe('bundleable', () => {
  function func(argument: {}, metadata: {}, options: {}, callback: Function) {
    callback(null, argument);
  }
  const bundleOptions = {elementCountThreshold: 12, delayThreshold: 10};
  const descriptor = new BundleDescriptor(
    'field1',
    ['field2'],
    'field1',
    byteLength,
  );
  const settings = {
    settings: {bundleOptions},
    descriptor,
  };

  it('bundles requests', done => {
    const spy = sinon.spy(func);
    const callback = sinon.spy(obj => {
      try {
        assert(Array.isArray(obj));
        assert.deepStrictEqual(obj[0].field1, [1, 2, 3]);
        if (callback.callCount === 2) {
          assert.strictEqual(spy.callCount, 1);
          done();
        }
      } catch (err) {
        done(err);
      }
    });
    const apiCall = createApiCall(spy, settings);
    void apiCall({field1: [1, 2, 3], field2: 'id'}, undefined, (err, obj) => {
      if (err) {
        done(err);
      } else {
        callback([obj]);
      }
    });
    apiCall({field1: [1, 2, 3], field2: 'id'}, undefined)
      .then(callback)
      .catch(done);
  });

  it('does not fail if bundle field is not set', done => {
    const spy = sinon.spy(func);
    const warnStub = sinon.stub(process, 'emitWarning');
    const callback = sinon.spy(obj => {
      assert(Array.isArray(obj));
      assert.strictEqual(obj[0].field1, undefined);
      if (callback.callCount === 2) {
        assert.strictEqual(spy.callCount, 2);
        assert.strictEqual(warnStub.callCount, 1);
        warnStub.restore();
        done();
      }
    });
    const apiCall = createApiCall(spy, settings);

    function error(err: Error) {
      warnStub.restore();
      done(err);
    }
    apiCall({field2: 'id1'}, undefined).then(callback, error);
    apiCall({field2: 'id2'}, undefined).then(callback, error);
  });

  it('suppresses bundling behavior by call options', done => {
    const spy = sinon.spy(func);
    let callbackCount = 0;
    function bundledCallback(obj: Array<{field1: number[]}>) {
      assert(Array.isArray(obj));
      callbackCount++;
      assert.deepStrictEqual(obj[0].field1, [1, 2, 3]);
      if (callbackCount === 3) {
        assert.strictEqual(spy.callCount, 2);
        done();
      }
    }
    function unbundledCallback(obj: Array<{field1: number[]}>) {
      assert(Array.isArray(obj));
      callbackCount++;
      assert.strictEqual(callbackCount, 1);
      assert.deepStrictEqual(obj[0].field1, [1, 2, 3]);
    }
    const apiCall = createApiCall(spy, settings);
    apiCall({field1: [1, 2, 3], field2: 'id'}, undefined)
      //@ts-ignore
      .then(bundledCallback)
      .catch(done);
    apiCall({field1: [1, 2, 3], field2: 'id'}, {isBundling: false})
      //@ts-ignore
      .then(unbundledCallback)
      .catch(done);
    apiCall({field1: [1, 2, 3], field2: 'id'}, undefined)
      //@ts-ignore
      .then(bundledCallback)
      .catch(done);
  });

  it('cancels partially on bundling method', done => {
    const apiCall = createApiCall(func, settings);
    let expectedSuccess = false;
    let expectedFailure = false;
    apiCall({field1: [1, 2, 3], field2: 'id'}, undefined)
      .then(obj => {
        assert(Array.isArray(obj));
        // @ts-ignore response type
        assert.deepStrictEqual(obj[0].field1, [1, 2, 3]);
        expectedSuccess = true;
        if (expectedSuccess && expectedFailure) {
          done();
        }
      })
      .catch(done);
    const p = apiCall({field1: [1, 2, 3], field2: 'id'}, undefined);
    p.then(() => {
      done(new Error('should not succeed'));
    }).catch(err => {
      assert(err instanceof GoogleError);
      assert.strictEqual(err!.code, status.CANCELLED);

      expectedFailure = true;
      if (expectedSuccess && expectedFailure) {
        done();
      }
    });
    p.cancel();
  });

  it('properly processes camel case fields', done => {
    const descriptor = new BundleDescriptor(
      'data',
      ['log_name'],
      'data',
      byteLength,
    );
    const settings = {
      settings: {bundleOptions},
      descriptor,
    };
    const spy = sinon.spy(func);
    const callback = sinon.spy(() => {
      try {
        if (callback.callCount === 4) {
          assert.strictEqual(spy.callCount, 2); // we expect two requests, each has two items
          done();
        }
      } catch (err) {
        done(err);
      }
    });
    const apiCall = createApiCall(spy, settings);
    void apiCall({data: ['data1'], logName: 'log1'}, undefined, err => {
      if (err) {
        done(err);
      } else {
        callback();
      }
    });
    void apiCall({data: ['data1'], logName: 'log2'}, undefined, err => {
      if (err) {
        done(err);
      } else {
        callback();
      }
    });
    void apiCall({data: ['data2'], logName: 'log1'}, undefined, err => {
      if (err) {
        done(err);
      } else {
        callback();
      }
    });
    void apiCall({data: ['data2'], logName: 'log2'}, undefined, err => {
      if (err) {
        done(err);
      } else {
        callback();
      }
    });
  });
});
