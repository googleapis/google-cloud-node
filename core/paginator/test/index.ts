/**
 * Copyright 2015 Google Inc. All Rights Reserved.
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
import * as proxyquire from 'proxyquire';
import * as sinon from 'sinon';
import * as stream from 'stream';
import * as streamEvents from 'stream-events';
import * as through from 'through2';
import * as uuid from 'uuid';

import {paginator, Paginator, ParsedArguments} from '../src';

const util = {
  noop: () => {}
};

const p = proxyquire('../src', {
  'stream-events': fakeStreamEvents,
});

// tslint:disable-next-line:no-any
let streamEventsOverride: any;
function fakeStreamEvents() {
  return (streamEventsOverride || streamEvents).apply(null, arguments);
}

let sandbox: sinon.SinonSandbox;
beforeEach(() => {
  sandbox = sinon.createSandbox();
});
afterEach(() => {
  sandbox.restore();
  streamEventsOverride = null;
});

describe('paginator', () => {
  const UUID = uuid.v1();
  function FakeClass() {}

  beforeEach(() => {
    FakeClass.prototype.methodToExtend = () => {
      return UUID;
    };
    delete FakeClass.prototype.methodToExtend_;
  });

  // tslint:disable-next-line:no-any
  function stub(methodName: keyof Paginator, stub: (...args: any[]) => void) {
    return sandbox.stub(paginator, methodName).callsFake(stub);
  }

  describe('extend', () => {
    it('should overwrite a method on a class', () => {
      const originalMethod = FakeClass.prototype.methodToExtend;
      paginator.extend(FakeClass, 'methodToExtend');
      const overwrittenMethod = FakeClass.prototype.methodToExtend;
      assert.notEqual(originalMethod, overwrittenMethod);
    });

    it('should store the original method as a private member', () => {
      const originalMethod = FakeClass.prototype.methodToExtend;
      paginator.extend(FakeClass, 'methodToExtend');
      assert.strictEqual(originalMethod, FakeClass.prototype.methodToExtend_);
    });

    it('should accept an array or string method names', () => {
      const originalMethod = FakeClass.prototype.methodToExtend;
      FakeClass.prototype.anotherMethodToExtend = () => {};
      const anotherMethod = FakeClass.prototype.anotherMethodToExtend;
      const methodsToExtend = ['methodToExtend', 'anotherMethodToExtend'];
      paginator.extend(FakeClass, methodsToExtend);
      assert.notEqual(originalMethod, FakeClass.prototype.methodToExtend);
      assert.notEqual(anotherMethod, FakeClass.prototype.anotherMethodToExtend);
    });

    it('should parse the arguments', (done) => {
      stub('parseArguments_', args => {
        assert.deepEqual([].slice.call(args), [1, 2, 3]);
        done();
      });
      stub('run_', util.noop);
      paginator.extend(FakeClass, 'methodToExtend');
      FakeClass.prototype.methodToExtend(1, 2, 3);
    });

    it('should call router when the original method is called', (done) => {
      const expectedReturnValue = FakeClass.prototype.methodToExtend();
      const parsedArguments = {a: 'b', c: 'd'};

      stub('parseArguments_', () => {
        return parsedArguments;
      });

      stub('run_', (args, originalMethod) => {
        assert.strictEqual(args, parsedArguments);
        assert.equal(originalMethod(), expectedReturnValue);
        done();
      });

      paginator.extend(FakeClass, 'methodToExtend');
      FakeClass.prototype.methodToExtend();
    });

    it('should maintain `this` context', (done) => {
      FakeClass.prototype.methodToExtend = function() {
        return this.uuid;
      };

      // tslint:disable-next-line:no-any
      const cls = new (FakeClass as any)();
      cls.uuid = uuid.v1();

      stub('run_', (args, originalMethod) => {
        assert.equal(originalMethod(), cls.uuid);
        done();
      });

      paginator.extend(FakeClass, 'methodToExtend');
      cls.methodToExtend();
    });

    it('should return what the router returns', () => {
      const uniqueValue = 234;
      stub('run_', () => {
        return uniqueValue;
      });

      paginator.extend(FakeClass, 'methodToExtend');
      assert.equal(FakeClass.prototype.methodToExtend(), uniqueValue);
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

    it('should parse the arguments', (done) => {
      const fakeArgs = [1, 2, 3];

      stub('parseArguments_', args => {
        assert.deepEqual(fakeArgs, [].slice.call(args));
        done();
      });

      stub('runAsStream_', util.noop);
      FakeClass.prototype.streamMethod.apply(FakeClass.prototype, fakeArgs);
    });

    it('should run the method as a stream', (done) => {
      const parsedArguments = {a: 'b', c: 'd'};

      stub('parseArguments_', () => {
        return parsedArguments;
      });

      stub('runAsStream_', (args, callback) => {
        assert.strictEqual(args, parsedArguments);
        assert.strictEqual(callback(), UUID);
        done();
      });

      FakeClass.prototype.streamMethod();
    });

    it('should apply the proper context', (done) => {
      const parsedArguments = {a: 'b', c: 'd'};

      FakeClass.prototype.methodToExtend = function() {
        return this;
      };

      stub('parseArguments_', () => {
        return parsedArguments;
      });

      stub('runAsStream_', (args, callback) => {
        assert.strictEqual(callback(), FakeClass.prototype);
        done();
      });

      FakeClass.prototype.streamMethod();
    });

    it('should check for a private member', (done) => {
      const parsedArguments = {a: 'b', c: 'd'};
      const fakeValue = 123;

      FakeClass.prototype.methodToExtend_ = () => {
        return fakeValue;
      };

      stub('parseArguments_', () => {
        return parsedArguments;
      });

      stub('runAsStream_', (args, callback) => {
        assert.strictEqual(callback(), fakeValue);
        done();
      });

      FakeClass.prototype.streamMethod();
    });

    it('should return a stream', () => {
      const fakeStream = through.obj();

      stub('parseArguments_', util.noop);

      stub('runAsStream_', () => {
        return fakeStream;
      });

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

      assert.deepEqual(parsedArguments.query, {});
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
      it('should call runAsStream_ when autoPaginate:true', (done) => {
        const parsedArguments = {
          autoPaginate: true,
          callback: util.noop,
        };

        stub('runAsStream_', (args, originalMethod) => {
          assert.strictEqual(args, parsedArguments);
          originalMethod();
          return through();
        });

        paginator.run_(parsedArguments, done);
      });

      it('should execute callback on error', (done) => {
        const error = new Error('Error.');

        const parsedArguments = {
          autoPaginate: true,
          callback(err: Error) {
            assert.strictEqual(err, error);
            done();
          },
        };

        stub('runAsStream_', () => {
          const stream = through();
          setImmediate(() => {
            stream.emit('error', error);
          });
          return stream;
        });

        paginator.run_(parsedArguments, util.noop);
      });

      it('should return all results on end', (done) => {
        const results = [{a: 1}, {b: 2}, {c: 3}];

        const parsedArguments = {
          autoPaginate: true,
          callback(err: Error, results_: {}) {
            assert.deepStrictEqual(results_, results);
            done();
          },
        };

        stub('runAsStream_', () => {
          const stream = through.obj();
          setImmediate(() => {
            results.forEach(result => stream.push(result));
            stream.push(null);
          });
          return stream;
        });

        paginator.run_(parsedArguments, util.noop);
      });
    });

    describe('manual pagination', () => {
      it('should recoginze autoPaginate: false', (done) => {
        const parsedArguments = {
          autoPaginate: false,
          query: {
            a: 'b',
            c: 'd',
          },
          callback: done,
        } as ParsedArguments;
        stub('runAsStream_', util.noop);
        paginator.run_(parsedArguments, (query: {}, callback: () => void) => {
          assert.deepEqual(query, parsedArguments.query);
          callback();
        });
      });
    });
  });

  describe('runAsStream_', () => {
    const PARSED_ARGUMENTS = {
      query: {maxApiCalls: 12345, pageSize: 23456},
    };

    let limiterStub: sinon.SinonStub;
    beforeEach(() => {
      limiterStub = sandbox.stub(p, 'createLimiter').callsFake(makeRequest => {
        const transformStream = new stream.Transform({objectMode: true});
        transformStream.destroy = through.obj().destroy.bind(transformStream);

        setImmediate(() => {
          transformStream.emit('reading');
        });

        return {
          makeRequest,
          stream: transformStream,
        };
      });
    });

    it('should call original method when stream opens', (done) => {
      function originalMethod(query: {}) {
        assert.strictEqual(query, PARSED_ARGUMENTS.query);
        done();
      }
      p.paginator.runAsStream_(PARSED_ARGUMENTS, originalMethod);
    });

    it('should emit an error if one occurs', (done) => {
      const error = new Error('Error.');

      function originalMethod(query: {}, callback: (err: Error) => void) {
        setImmediate(() => {
          callback(error);
        });
      }

      const rs = p.paginator.runAsStream_(PARSED_ARGUMENTS, originalMethod);
      rs.on('error', (err: Error) => {
        assert.deepEqual(err, error);
        done();
      });
    });

    it('should push results onto the stream', (done) => {
      const results = ['a', 'b', 'c'];
      const resultsReceived: Array<{}> = [];

      function originalMethod(
          query: {}, callback: (err: Error|null, results: {}) => void) {
        setImmediate(() => {
          callback(null, results);
        });
      }

      const rs = p.paginator.runAsStream_(PARSED_ARGUMENTS, originalMethod);
      rs.on('data', (result: {}) => {
        resultsReceived.push(result);
      });
      rs.on('end', () => {
        assert.deepEqual(resultsReceived, ['a', 'b', 'c']);
        done();
      });
    });

    describe('maxApiCalls', () => {
      const maxApiCalls = 10;

      it('should create a limiter', (done) => {
        limiterStub.restore();
        sandbox.stub(p, 'createLimiter').callsFake((makeRequest, options) => {
          assert.strictEqual(options.maxApiCalls, maxApiCalls);
          setImmediate(done);
          return {
            stream: through.obj(),
          };
        });
        p.paginator.runAsStream_({maxApiCalls}, util.noop);
      });
    });

    describe('streamOptions', () => {
      const streamOptions = {
        highWaterMark: 8,
      };

      it('should pass through stream options', (done) => {
        limiterStub.restore();
        sandbox.stub(p, 'createLimiter').callsFake((makeRequest, options) => {
          assert.strictEqual(options.streamOptions, streamOptions);

          setImmediate(done);

          return {
            stream: through.obj(),
          };
        });

        p.paginator.runAsStream_(
            {
              maxApiCalls: 100,
              streamOptions,
            } as ParsedArguments,
            util.noop);
      });
    });

    describe('limits', () => {
      const limit = 1;

      function originalMethod(
          query: {}, callback: (err: Error|null, results: number[]) => void) {
        setImmediate(() => {
          callback(null, [1, 2, 3]);
        });
      }

      it('should respect maxResults', (done) => {
        let numResultsReceived = 0;

        p.paginator.runAsStream_({maxResults: limit}, originalMethod)
            .on('data',
                () => {
                  numResultsReceived++;
                })
            .on('end', () => {
              assert.strictEqual(numResultsReceived, limit);
              done();
            });
      });
    });

    it('should get more results if nextQuery exists', (done) => {
      const nextQuery = {a: 'b', c: 'd'};
      let nextQuerySent = false;

      function originalMethod(
          query: {},
          callback: (err: Error|null, res: Array<{}>, nextQuery: {}) => void) {
        if (nextQuerySent) {
          assert.deepEqual(query, nextQuery);
          done();
          return;
        }

        setImmediate(() => {
          nextQuerySent = true;
          callback(null, [], nextQuery);
        });
      }

      p.paginator.runAsStream_(PARSED_ARGUMENTS, originalMethod);
    });

    it('should not push more results if stream ends early', (done) => {
      const results = ['a', 'b', 'c'];

      function originalMethod(
          query: {}, callback: (err: Error|null, results: string[]) => void) {
        setImmediate(() => {
          callback(null, results);
        });
      }

      const rs = paginator.runAsStream_(PARSED_ARGUMENTS, originalMethod);
      rs.on('data', (result: string) => {
        if (result === 'b') {
          // Pre-maturely end the stream.
          rs.end();
        }

        assert.notEqual(result, 'c');
      });
      rs.on('end', () => {
        done();
      });
    });

    it('should not get more results if stream ends early', (done) => {
      const results = ['a', 'b', 'c'];

      let originalMethodCalledCount = 0;

      function originalMethod(
          query: {},
          callback: (err: Error|null, results: string[], body: {}) => void) {
        originalMethodCalledCount++;

        setImmediate(() => {
          callback(null, results, {});
        });
      }

      const rs = paginator.runAsStream_(PARSED_ARGUMENTS, originalMethod);
      rs.on('data', (result: string) => {
        if (result === 'b') {
          // Pre-maturely end the stream.
          rs.end();
        }
      });
      rs.on('end', () => {
        assert.equal(originalMethodCalledCount, 1);
        done();
      });
    });
  });
});

describe('createLimiter', () => {
  function REQUEST_FN() {}
  const OPTIONS = {
    streamOptions: {
      highWaterMark: 8,
    },
  };

  it('should create an object stream with stream-events', (done) => {
    streamEventsOverride = (stream: stream.Readable) => {
      // tslint:disable-next-line:no-any
      assert.strictEqual((stream as any)._readableState.objectMode, true);
      setImmediate(done);
      return stream;
    };

    p.createLimiter(REQUEST_FN, OPTIONS);
  });

  it('should return a makeRequest function', () => {
    const limiter = p.createLimiter(REQUEST_FN, OPTIONS);
    assert.equal(typeof limiter.makeRequest, 'function');
  });

  it('should return the created stream', () => {
    const streamEventsStream = {};

    streamEventsOverride = () => {
      return streamEventsStream;
    };

    const limiter = p.createLimiter(REQUEST_FN, OPTIONS);
    assert.strictEqual(limiter.stream, streamEventsStream);
  });

  it('should pass stream options to through', () => {
    const limiter = p.createLimiter(REQUEST_FN, OPTIONS);

    assert.strictEqual(
        // tslint:disable-next-line:no-any
        (limiter.stream as any)._readableState.highWaterMark,
        OPTIONS.streamOptions.highWaterMark);
  });

  describe('makeRequest', () => {
    it('should pass arguments to request method', (done) => {
      const args = [{}, {}];

      const limiter = p.createLimiter((obj1: {}, obj2: {}) => {
        assert.strictEqual(obj1, args[0]);
        assert.strictEqual(obj2, args[1]);
        done();
      });

      limiter.makeRequest.apply(null, args);
    });

    it('should not make more requests than the limit', (done) => {
      let callsMade = 0;
      const maxApiCalls = 10;

      const limiter = p.createLimiter(() => {
        callsMade++;
        limiter.makeRequest();
      }, {
        maxApiCalls,
      });

      limiter.makeRequest();

      limiter.stream.on('data', util.noop).on('end', () => {
        assert.strictEqual(callsMade, maxApiCalls);
        done();
      });
    });
  });
});
