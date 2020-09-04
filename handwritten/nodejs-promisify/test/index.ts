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

/* eslint-disable @typescript-eslint/no-empty-function,prefer-rest-params */

import * as assert from 'assert';
import {describe, it, afterEach, beforeEach} from 'mocha';
import * as sinon from 'sinon';
import * as util from '../src';

const noop = () => {};
const sandbox = sinon.createSandbox();

describe('promisifyAll', () => {
  const fakeArgs = [null, 1, 2, 3];
  const fakeError = new Error('err.');

  let FakeClass: any;

  beforeEach(() => {
    FakeClass = class {
      methodName(callback: Function) {
        callback(...fakeArgs);
      }
      methodSingle(callback: Function) {
        callback(null, fakeArgs[1]);
      }
      methodError(callback: Function) {
        callback(fakeError);
      }
    };
    FakeClass.prototype.method_ = noop;
    FakeClass.prototype._method = noop;
    FakeClass.prototype.methodStream = noop;
    FakeClass.prototype.promise = noop;

    util.promisifyAll(FakeClass);
    const fc = new FakeClass();
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should promisify the correct method', () => {
    assert(FakeClass.prototype.methodName.promisified_);
    assert(FakeClass.prototype.methodSingle.promisified_);
    assert(FakeClass.prototype.methodError.promisified_);

    assert.strictEqual(FakeClass.prototype.method_, noop);
    assert.strictEqual(FakeClass.prototype._method, noop);
    assert.strictEqual(FakeClass.prototype.methodStream, noop);
    assert.strictEqual(FakeClass.prototype.promise, noop);
  });

  // The ts compiler will convert a class to the current node version target,
  // in this case v4, which means that using the class keyword to create a
  // class won't actually test that this method works on ES classes. Using
  // eval works around that compilation. The class syntax is a syntax error
  // in node v4 which is why the eval call is wrapped in a try catch block.
  try {
    eval(`
      const assert2 = require('assert');
      const util = require('../src');
      it('should work on ES classes', () => {
        class MyESClass {
          myMethod(str, callback) {
            callback(str.toUpperCase());
          }
        }
        util.promisifyAll(MyESClass);
        assert2(MyESClass.prototype.myMethod.promisified_);
      });
    `);
  } catch (error) {
    it.skip('should work on ES classes');
  }

  it('should optionally accept an exclude list', () => {
    function FakeClass2() {}
    FakeClass2.prototype.methodSync = noop;
    FakeClass2.prototype.method = () => {};
    util.promisifyAll(FakeClass2, {
      exclude: ['methodSync'],
    });
    assert.strictEqual(FakeClass2.prototype.methodSync, noop);
    assert(FakeClass2.prototype.method.promisified_);
  });

  it('should honor excluded properties first', done => {
    function FakeClass2() {}
    Object.defineProperty(FakeClass2.prototype, 'method', {
      get: () => {
        done(new Error('Accessor method should not be called.'));
        return {};
      },
    });
    assert.doesNotThrow(() => {
      util.promisifyAll(FakeClass2, {
        exclude: ['method'],
      });
      done();
    });
  });

  it('should pass the options object to promisify', done => {
    const fakeOptions = {
      a: 'a',
    } as util.PromisifyAllOptions;

    const stub = sandbox
      .stub(util, 'promisify')
      .callsFake((method, options) => {
        assert.strictEqual(method, FakeClass2.prototype.method);
        assert.strictEqual(options, fakeOptions);
        done();
        stub.restore();
      });

    function FakeClass2() {}
    FakeClass2.prototype.method = () => {};
    util.promisifyAll(FakeClass2, fakeOptions);
  });

  it('should not re-promisify methods', () => {
    const method = FakeClass.prototype.methodName;
    util.promisifyAll(FakeClass);
    assert.strictEqual(FakeClass.prototype.methodName, method);
  });
});

describe('promisify', () => {
  const fakeContext = {};
  let func: Function;
  let fakeArgs: Array<Error | number | null>;

  beforeEach(() => {
    fakeArgs = [null, 1, 2, 3];
    func = util.promisify(function (this: {}, callback: () => void) {
      (callback as any).apply(this, fakeArgs);
    });
  });

  it('should not re-promisify the function', () => {
    const original = func;
    func = util.promisify(func);
    assert.strictEqual(original, func);
  });

  it('should not return a promise in callback mode', done => {
    let returnVal: any;
    returnVal = func.call(fakeContext, function (this: {}) {
      const args = [...arguments];
      assert.deepStrictEqual(args, fakeArgs);
      assert.strictEqual(this, fakeContext);
      assert(!returnVal);
      returnVal = null; // this is to suppress prefer-const.
      done();
    });
  });

  it('should return a promise when the callback is omitted', () => {
    return func().then((args: Array<{}>) => {
      assert.deepStrictEqual(args, fakeArgs.slice(1));
    });
  });

  it('should reject the promise on a failed request', () => {
    const error = new Error('err');
    fakeArgs = [error];
    return func().then(
      () => {
        throw new Error('Should have gone to failure block');
      },
      (err: Error) => {
        assert.strictEqual(err, error);
      }
    );
  });

  it('should allow the Promise object to be overridden', () => {
    const FakePromise = class {};
    const promise = func.call({Promise: FakePromise});
    assert(promise instanceof FakePromise);
  });

  it('should resolve singular arguments', () => {
    const fakeArg = 'hi';

    func = util.promisify(
      (callback: () => void) => {
        (callback as any).apply(func, [null, fakeArg]);
      },
      {
        singular: true,
      }
    );

    return func().then((arg: {}) => {
      assert.strictEqual(arg, fakeArg);
    });
  });

  it('should ignore singular when multiple args are present', () => {
    const fakeArgs: any[] = ['a', 'b'];

    func = util.promisify(
      (callback: Function) => {
        callback.apply(func, [null].concat(fakeArgs));
      },
      {
        singular: true,
      }
    );

    return func().then((args: Array<{}>) => {
      assert.deepStrictEqual(args, fakeArgs);
    });
  });

  describe('trailing undefined arguments', () => {
    it('should not return a promise in callback mode', () => {
      const func = util.promisify((optional: Function) => {
        assert.strictEqual(typeof optional, 'function');
        optional(null);
      });

      const returnVal = func(() => {});
      assert.strictEqual(returnVal, undefined);
    });

    it('should return a promise when callback omitted', done => {
      const func = util.promisify((optional: Function, ...args: Array<{}>) => {
        assert.strictEqual(args.length, 0);
        assert.strictEqual(typeof optional, 'function');
        optional(null);
      });

      func(undefined, undefined).then(() => {
        done();
      });
    });

    it('should not mistake non-function args for callbacks', done => {
      const func = util.promisify(
        (foo: {}, optional: Function, ...args: Array<{}>) => {
          assert.strictEqual(args.length, 0);
          assert.strictEqual(typeof optional, 'function');
          optional(null);
        }
      );

      func('foo').then(() => {
        done();
      });
    });
  });
});

describe('callbackifyAll', () => {
  const fakeArgs = [1, 2, 3];
  const fakeError = new Error('err.');

  let FakeClass: any;

  beforeEach(() => {
    FakeClass = class {
      async methodName() {
        return fakeArgs;
      }
      async methodError() {
        throw fakeError;
      }
    };
    FakeClass.prototype.method_ = noop;
    FakeClass.prototype._method = noop;
    FakeClass.prototype.methodStream = noop;

    util.callbackifyAll(FakeClass);
  });

  it('should callbackify the correct method', () => {
    assert(FakeClass.prototype.methodName.callbackified_);
    assert(FakeClass.prototype.methodError.callbackified_);

    assert.strictEqual(FakeClass.prototype.method_, noop);
    assert.strictEqual(FakeClass.prototype._method, noop);
    assert.strictEqual(FakeClass.prototype.methodStream, noop);
  });

  it('should optionally accept an exclude list', () => {
    function FakeClass2() {}
    FakeClass2.prototype.methodSync = noop;
    FakeClass2.prototype.method = () => {};
    util.callbackifyAll(FakeClass2, {
      exclude: ['methodSync'],
    });
    assert.strictEqual(FakeClass2.prototype.methodSync, noop);
    assert(FakeClass2.prototype.method.callbackified_);
    assert.strictEqual(FakeClass2.prototype.methodSync, noop);
  });

  it('should honor excluded properties first', done => {
    function FakeClass2() {}
    Object.defineProperty(FakeClass2.prototype, 'method', {
      get: () => {
        done(new Error('Accessor method should not be called.'));
        return {};
      },
    });
    assert.doesNotThrow(() => {
      util.callbackifyAll(FakeClass2, {
        exclude: ['method'],
      });
      done();
    });
  });

  it('should not re-callbackify method', () => {
    const method = FakeClass.prototype.methodName;
    util.callbackifyAll(FakeClass);
    assert.strictEqual(FakeClass.prototype.methodName, method);
  });
});

describe('callbackify', () => {
  let func: Function;
  let fakeArgs: number[];

  beforeEach(() => {
    fakeArgs = [1, 2, 3];

    func = util.callbackify(async (_this: {}) => {
      return fakeArgs;
    });
  });

  it('should not re-callbackify the function', () => {
    const original = func;
    func = util.callbackify(func);
    assert.strictEqual(original, func);
  });

  it('should return a promise when callback is not provided', () => {
    func().then((args: []) => {
      assert.deepStrictEqual(args, fakeArgs);
    });
  });

  it('should call the callback if it is provided', done => {
    func(function (this: {}) {
      const args = [].slice.call(arguments);
      assert.deepStrictEqual(args, [null, ...fakeArgs]);
      done();
    });
  });

  it('should call the provided callback with undefined', done => {
    func = util.callbackify(async (_this: {}) => {});
    func((err: Error, resp: {}) => {
      assert.strictEqual(err, null);
      assert.strictEqual(resp, undefined);
      done();
    });
  });

  it('should call the provided callback with null', done => {
    func = util.callbackify(async (_this: {}) => {
      return null;
    });
    func(function (this: {}) {
      const args = [].slice.call(arguments);
      assert.deepStrictEqual(args, [null, null]);
      done();
    });
  });

  it('should call the callback with error when promise rejects', () => {
    const error = new Error('err');
    func = util.callbackify(async () => {
      throw error;
    });
    func((err: Error) => assert.strictEqual(err, error));
  });

  it('should call the callback only a single time when the promise resolves but callback throws an error', () => {
    const error = new Error('err');
    const callback = sinon.stub().throws(error);
    const originalRejection = process.listeners('unhandledRejection').pop();
    if (originalRejection) {
      process.removeListener('unhandledRejection', originalRejection!);
    }
    process.once('unhandledRejection', err => {
      assert.strictEqual(error, err);
      assert.ok(callback.calledOnce);
      if (originalRejection) {
        process.listeners('unhandledRejection').push(originalRejection!);
      }
    });
    func(callback);
  });
});
