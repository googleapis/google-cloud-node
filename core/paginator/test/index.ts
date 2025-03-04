// Copyright 2015 Google LLC
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
import * as proxyquire from 'proxyquire';
import * as sinon from 'sinon';
import {PassThrough, Transform} from 'stream';
import * as uuid from 'uuid';
import * as P from '../src';
import {paginator, ParsedArguments} from '../src';

const util = {
  noop: () => {
    // do nothing
  },
};

class FakeResourceStream extends Transform {
  calledWith: IArguments;
  constructor() {
    super({objectMode: true});
    /* eslint-disable-next-line prefer-rest-params */
    this.calledWith = arguments;
  }
}

const p = proxyquire('../src', {
  './resource-stream': {ResourceStream: FakeResourceStream},
}) as typeof P;

const sandbox = sinon.createSandbox();

// eslint-disable-next-line no-undef
afterEach(() => {
  sandbox.restore();
});

/* eslint-disable  @typescript-eslint/no-explicit-any */
function createFakeStream<T = any>() {
  return new PassThrough({objectMode: true}) as P.ResourceStream<T>;
}

describe('paginator', () => {
  const UUID = uuid.v1();
  function FakeClass() {
    // do nothing
  }

  beforeEach(() => {
    FakeClass.prototype.methodToExtend = () => {
      return UUID;
    };
    delete FakeClass.prototype.methodToExtend_;
  });

  describe('extend', () => {
    it('should overwrite a method on a class', () => {
      const originalMethod = FakeClass.prototype.methodToExtend;
      paginator.extend(FakeClass, 'methodToExtend');
      const overwrittenMethod = FakeClass.prototype.methodToExtend;
      assert.notStrictEqual(originalMethod, overwrittenMethod);
    });

    it('should store the original method as a private member', () => {
      const originalMethod = FakeClass.prototype.methodToExtend;
      paginator.extend(FakeClass, 'methodToExtend');
      assert.strictEqual(originalMethod, FakeClass.prototype.methodToExtend_);
    });

    it('should accept an array or string method names', () => {
      const originalMethod = FakeClass.prototype.methodToExtend;
      const anotherMethod = FakeClass.prototype.anotherMethodToExtend;
      const methodsToExtend = ['methodToExtend', 'anotherMethodToExtend'];
      paginator.extend(FakeClass, methodsToExtend);
      assert.notStrictEqual(originalMethod, FakeClass.prototype.methodToExtend);
      assert.notStrictEqual(
        anotherMethod,
        FakeClass.prototype.anotherMethodToExtend,
      );
    });

    it('should parse the arguments', done => {
      sandbox.stub(paginator, 'parseArguments_').callsFake(args => {
        assert.deepStrictEqual([].slice.call(args), [1, 2, 3]);
        done();
        return args as ParsedArguments;
      });
      sandbox.stub(paginator, 'run_').callsFake(util.noop);
      paginator.extend(FakeClass, 'methodToExtend');
      FakeClass.prototype.methodToExtend(1, 2, 3);
    });

    it('should call router when the original method is called', done => {
      const expectedReturnValue = FakeClass.prototype.methodToExtend();
      const parsedArguments = {a: 'b', c: 'd'} as ParsedArguments;

      sandbox.stub(paginator, 'parseArguments_').returns(parsedArguments);
      sandbox.stub(paginator, 'run_').callsFake((args, originalMethod) => {
        assert.strictEqual(args, parsedArguments);
        assert.strictEqual(originalMethod(), expectedReturnValue);
        done();
      });

      paginator.extend(FakeClass, 'methodToExtend');
      FakeClass.prototype.methodToExtend();
    });

    it('should maintain `this` context', done => {
      FakeClass.prototype.methodToExtend = function () {
        return this.uuid;
      };

      /* eslint-disable  @typescript-eslint/no-explicit-any */
      const cls = new (FakeClass as any)();
      cls.uuid = uuid.v1();

      sandbox.stub(paginator, 'run_').callsFake((_, originalMethod) => {
        assert.strictEqual(originalMethod(), cls.uuid);
        done();
      });

      paginator.extend(FakeClass, 'methodToExtend');
      cls.methodToExtend();
    });

    it('should return what the router returns', () => {
      const uniqueValue = 234;
      sandbox.stub(paginator, 'run_').callsFake(() => {
        return uniqueValue;
      });
      paginator.extend(FakeClass, 'methodToExtend');
      assert.strictEqual(FakeClass.prototype.methodToExtend(), uniqueValue);
    });
  });

  describe('streamify', () => {
    beforeEach(() => {
      FakeClass.prototype.streamMethod = paginator.streamify('methodToExtend');
    });

    it('should return a function', () => {
      const fakeStreamMethod = FakeClass.prototype.streamMethod;
      assert.strictEqual(typeof fakeStreamMethod, 'function');
    });

    it('should parse the arguments', done => {
      const fakeArgs = [1, 2, 3];

      sandbox.stub(paginator, 'parseArguments_').callsFake(args => {
        assert.deepStrictEqual(fakeArgs, [].slice.call(args));
        done();
        return args as ParsedArguments;
      });
      sandbox.stub(paginator, 'runAsStream_').callsFake(createFakeStream);
      FakeClass.prototype.streamMethod(...fakeArgs);
    });

    it('should run the method as a stream', done => {
      const parsedArguments = {a: 'b', c: 'd'} as ParsedArguments;
      sandbox.stub(paginator, 'parseArguments_').callsFake(() => {
        return parsedArguments;
      });
      sandbox.stub(paginator, 'runAsStream_').callsFake((args, callback) => {
        assert.strictEqual(args, parsedArguments);
        assert.strictEqual(callback(), UUID);
        setImmediate(done);
        return createFakeStream();
      });

      FakeClass.prototype.streamMethod();
    });

    it('should apply the proper context', done => {
      const parsedArguments = {a: 'b', c: 'd'} as ParsedArguments;
      FakeClass.prototype.methodToExtend = function () {
        return this;
      };
      sandbox.stub(paginator, 'parseArguments_').callsFake(() => {
        return parsedArguments;
      });
      sandbox.stub(paginator, 'runAsStream_').callsFake((_, callback) => {
        assert.strictEqual(callback(), FakeClass.prototype);
        setImmediate(done);
        return createFakeStream();
      });
      FakeClass.prototype.streamMethod();
    });

    it('should check for a private member', done => {
      const parsedArguments = {a: 'b', c: 'd'} as ParsedArguments;
      const fakeValue = 123;

      FakeClass.prototype.methodToExtend_ = () => {
        return fakeValue;
      };
      sandbox.stub(paginator, 'parseArguments_').callsFake(() => {
        return parsedArguments;
      });
      sandbox.stub(paginator, 'runAsStream_').callsFake((_, callback) => {
        assert.strictEqual(callback(), fakeValue);
        setImmediate(done);
        return createFakeStream();
      });
      FakeClass.prototype.streamMethod();
    });

    it('should return a stream', () => {
      const fakeStream = createFakeStream();
      sandbox.stub(paginator, 'parseArguments_').returns({});
      sandbox.stub(paginator, 'runAsStream_').returns(fakeStream);
      const stream = FakeClass.prototype.streamMethod();
      assert.strictEqual(fakeStream, stream);
    });
  });

  describe('parseArguments_', () => {
    it('should set defaults', () => {
      const parsedArguments = paginator.parseArguments_([]);

      assert.strictEqual(Object.keys(parsedArguments.query!).length, 0);
      assert.strictEqual(parsedArguments.autoPaginate, true);
      assert.strictEqual(parsedArguments.maxApiCalls, -1);
      assert.strictEqual(parsedArguments.maxResults, -1);
      assert.strictEqual(parsedArguments.callback, undefined);
    });

    it('should detect a callback if first argument is a function', () => {
      const args = [util.noop];
      const parsedArguments = paginator.parseArguments_(args);

      assert.strictEqual(parsedArguments.callback, args[0]);
    });

    it('should use any other first argument as query', () => {
      const args = ['string'];
      const parsedArguments = paginator.parseArguments_(args);

      assert.strictEqual(parsedArguments.query, args[0]);
    });

    it('should not make an undefined value the query', () => {
      const args = [undefined, util.noop];
      const parsedArguments = paginator.parseArguments_(args);

      assert.deepStrictEqual(parsedArguments.query, {});
    });

    it('should detect a callback if last argument is a function', () => {
      const args = ['string', util.noop];
      const parsedArguments = paginator.parseArguments_(args);

      assert.strictEqual(parsedArguments.callback, args[1]);
    });

    it('should not assign a callback if a fn is not provided', () => {
      const args = ['string'];
      const parsedArguments = paginator.parseArguments_(args);

      assert.strictEqual(parsedArguments.callback, undefined);
    });

    it('should set maxApiCalls from query.maxApiCalls', () => {
      const args = [{maxApiCalls: 10}];
      const parsedArguments = paginator.parseArguments_(args);

      assert.strictEqual(parsedArguments.maxApiCalls, args[0].maxApiCalls);
      assert.strictEqual(parsedArguments.query!.maxApiCalls, undefined);
    });

    it('should set maxResults from query.maxResults', () => {
      const args = [{maxResults: 10}];
      const parsedArguments = paginator.parseArguments_(args);

      assert.strictEqual(parsedArguments.maxResults, args[0].maxResults);
    });

    it('should set maxResults from query.pageSize', () => {
      const args = [{pageSize: 10}];
      const parsedArguments = paginator.parseArguments_(args);

      assert.strictEqual(parsedArguments.maxResults, args[0].pageSize);
    });

    it('should set autoPaginate: false if there is a maxResults', () => {
      const args = [{maxResults: 10}, util.noop];
      const parsedArguments = paginator.parseArguments_(args);

      assert.strictEqual(parsedArguments.autoPaginate, false);
    });

    it('should set autoPaginate: false query.autoPaginate', () => {
      const args = [{autoPaginate: false}, util.noop];
      const parsedArguments = paginator.parseArguments_(args);

      assert.strictEqual(parsedArguments.autoPaginate, false);
    });

    it('should parse streamOptions', () => {
      const args = [{maxResults: 10, highWaterMark: 8}];
      const parsedArguments = paginator.parseArguments_(args);

      assert.strictEqual(parsedArguments.maxResults, 10);
      assert.deepStrictEqual(parsedArguments.streamOptions, {
        highWaterMark: 8,
      });
    });
  });

  describe('run_', () => {
    describe('autoPaginate', () => {
      describe('originalmethod is callback based', () => {
        it('should call runAsStream_ when autoPaginate:true', done => {
          const parsedArguments = {
            autoPaginate: true,
            callback: util.noop,
          };

          sandbox
            .stub(paginator, 'runAsStream_')
            .callsFake((args, originalMethod) => {
              assert.strictEqual(args, parsedArguments);
              originalMethod();
              return createFakeStream();
            });

          paginator.run_(parsedArguments, done);
        });

        it('should execute callback on error', done => {
          const error = new Error('Error.');

          const parsedArguments = {
            autoPaginate: true,
            callback(err: Error) {
              assert.strictEqual(err, error);
              done();
            },
          };

          sandbox.stub(paginator, 'runAsStream_').callsFake(() => {
            const stream = createFakeStream();
            setImmediate(() => {
              stream.emit('error', error);
            });
            return stream;
          });

          paginator.run_(parsedArguments, util.noop);
        });

        it('should return all results on end', done => {
          const results = [{a: 1}, {b: 2}, {c: 3}];

          const parsedArguments = {
            autoPaginate: true,
            callback(err: Error, results_: {}) {
              assert.deepStrictEqual(results_, results);
              done();
            },
          };

          sandbox.stub(paginator, 'runAsStream_').callsFake(() => {
            const stream = createFakeStream();
            setImmediate(() => {
              results.forEach(result => stream.push(result));
              stream.push(null);
            });
            return stream;
          });

          paginator.run_(parsedArguments, util.noop);
        });

        it('should return all results and extra args', done => {
          const results = [{a: 1}, {b: 2}, {c: 3}];
          const args: any[] = [{msg: 'OK'}, 10];

          const parsedArguments = {
            autoPaginate: true,
            callback(
              err: Error,
              results_: {},
              query: {},
              fakeRes: {},
              anotherArg: number,
            ) {
              assert.deepStrictEqual(results_, results);
              assert.deepStrictEqual(query, undefined);
              assert.deepStrictEqual(fakeRes, {msg: 'OK'});
              assert.deepStrictEqual(anotherArg, 10);
              done();
            },
          };

          sandbox.stub(paginator, 'runAsStream_').callsFake(() => {
            const stream = createFakeStream();
            setImmediate(() => {
              results.forEach(result => stream.push(result));
              stream.push(null);
              stream._otherArgs = args;
            });
            return stream;
          });

          paginator.run_(parsedArguments, util.noop);
        });
      });

      describe('original method is promise based', () => {
        const parsedArguments = {
          autoPaginate: true,
        };
        it('should call runAsStream_ when autoPaginate:true', done => {
          sandbox
            .stub(paginator, 'runAsStream_')
            .callsFake((args, originalMethod) => {
              assert.strictEqual(args, parsedArguments);
              originalMethod();
              return createFakeStream();
            });

          paginator.run_(parsedArguments, done);
        });

        it('should reject a promise on error', () => {
          const error = new Error('Error.');

          sandbox.stub(paginator, 'runAsStream_').callsFake(() => {
            const stream = createFakeStream();
            setImmediate(() => {
              stream.emit('error', error);
            });
            return stream;
          });

          paginator
            .run_(parsedArguments, util.noop)
            .then(util.noop, (err: Error) => assert.strictEqual(err, error));
        });

        it('should resolve with all results on end', () => {
          const results = [{a: 1}, {b: 2}, {c: 3}];

          sandbox.stub(paginator, 'runAsStream_').callsFake(() => {
            const stream = createFakeStream();
            setImmediate(() => {
              results.forEach(result => stream.push(result));
              stream.push(null);
            });
            return stream;
          });

          paginator
            .run_(parsedArguments, util.noop)
            .then(([results_]: [1]) =>
              assert.deepStrictEqual(results_, results),
            );
        });

        it('should resolve with all results and extra args', done => {
          const results = [{a: 1}, {b: 2}, {c: 3}];
          const args: any[] = [{msg: 'OK'}, 10];

          sandbox.stub(paginator, 'runAsStream_').callsFake(() => {
            const stream = createFakeStream();
            setImmediate(() => {
              results.forEach(result => stream.push(result));
              stream.push(null);
              stream._otherArgs = args;
            });
            return stream;
          });

          paginator
            .run_(parsedArguments, util.noop)
            .then(([results_, query_, fakeRes, anotherArg]: unknown[]) => {
              assert.deepStrictEqual(results_, results);
              assert.deepStrictEqual(query_, undefined);
              assert.deepEqual(fakeRes, {msg: 'OK'});
              assert.deepEqual(anotherArg, 10);
              done();
            });
        });
      });
    });

    describe('manual pagination', () => {
      describe('originalmethod is callback based', () => {
        it('should recognize autoPaginate: false', done => {
          const parsedArguments = {
            autoPaginate: false,
            query: {
              a: 'b',
              c: 'd',
            },
            callback: done,
          } as ParsedArguments;
          sandbox.stub(paginator, 'runAsStream_').callsFake(createFakeStream);
          paginator.run_(parsedArguments, (query: {}, callback: () => void) => {
            assert.deepStrictEqual(query, parsedArguments.query);
            callback();
          });
        });
      });

      describe('original method is promise based', () => {
        it('should recognize autoPaginate: false', () => {
          const parsedArguments = {
            autoPaginate: false,
            query: {
              a: 'b',
              c: 'd',
            },
          } as ParsedArguments;
          sandbox.stub(paginator, 'runAsStream_').callsFake(createFakeStream);
          paginator.run_(parsedArguments, (query: {}) => {
            assert.deepStrictEqual(query, parsedArguments.query);
          });
        });
      });
    });

    describe('runAsStream_', () => {
      it('should create a resource stream', () => {
        const fakeArgs = {};
        const fakeFn = sandbox.spy();
        const stream = p.paginator.runAsStream_(
          fakeArgs,
          fakeFn,
        ) as unknown as FakeResourceStream;

        assert(stream instanceof FakeResourceStream);
        const [args, requestFn] = stream.calledWith;
        assert.strictEqual(args, fakeArgs);
        assert.strictEqual(requestFn, fakeFn);
      });
    });
  });
});
