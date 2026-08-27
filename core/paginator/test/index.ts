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

import {PassThrough, Transform} from 'stream';
import * as crypto from 'crypto';
import * as P from '../src';
import {paginator, ParsedArguments} from '../src';

const util = {
  noop: () => {
    // do nothing
  },
};

class FakeResourceStream extends Transform {
  calledWith: unknown[];
  constructor(...args: unknown[]) {
    super({objectMode: true});
    this.calledWith = args;
  }
}

// Mock the resource-stream module so runAsStream_ instantiates the fake class
jest.mock('../src/resource-stream', () => {
  const {Transform} = require('stream');
  return {
    ResourceStream: class FakeResourceStream extends Transform {
      calledWith: unknown[];
      constructor(...args: unknown[]) {
        super({objectMode: true});
        this.calledWith = args;
      }
    },
  };
});

// Retrieve the mocked ResourceStream class to check instances
import {ResourceStream} from '../src/resource-stream';

afterEach(() => {
  jest.restoreAllMocks();
});

/* eslint-disable  @typescript-eslint/no-explicit-any */
function createFakeStream<T = any>() {
  return new PassThrough({objectMode: true}) as P.ResourceStream<T>;
}

describe('paginator', () => {
  const UUID = crypto.randomUUID();
  const FakeClass = function (this: any) {
    // do nothing
  } as any;

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
      expect(originalMethod).not.toBe(overwrittenMethod);
    });

    it('should store the original method as a private member', () => {
      const originalMethod = FakeClass.prototype.methodToExtend;
      paginator.extend(FakeClass, 'methodToExtend');
      expect(originalMethod).toBe(FakeClass.prototype.methodToExtend_);
    });

    it('should accept an array or string method names', () => {
      const originalMethod = FakeClass.prototype.methodToExtend;
      const anotherMethod = FakeClass.prototype.anotherMethodToExtend;
      const methodsToExtend = ['methodToExtend', 'anotherMethodToExtend'];
      paginator.extend(FakeClass, methodsToExtend);
      expect(originalMethod).not.toBe(FakeClass.prototype.methodToExtend);
      expect(anotherMethod).not.toBe(FakeClass.prototype.anotherMethodToExtend);
    });

    it('should parse the arguments', done => {
      jest.spyOn(paginator, 'parseArguments_').mockImplementation(args => {
        try {
          expect([].slice.call(args)).toEqual([1, 2, 3]);
          done();
        } catch (e) {
          done(e);
        }
        return args as ParsedArguments;
      });
      jest.spyOn(paginator, 'run_').mockImplementation(util.noop);
      paginator.extend(FakeClass, 'methodToExtend');
      FakeClass.prototype.methodToExtend(1, 2, 3);
    });

    it('should call router when the original method is called', done => {
      const expectedReturnValue = FakeClass.prototype.methodToExtend();
      const parsedArguments = {a: 'b', c: 'd'} as ParsedArguments;

      jest.spyOn(paginator, 'parseArguments_').mockReturnValue(parsedArguments);
      jest
        .spyOn(paginator, 'run_')
        .mockImplementation((args, originalMethod) => {
          try {
            expect(args).toBe(parsedArguments);
            expect(originalMethod()).toBe(expectedReturnValue);
            done();
          } catch (e) {
            done(e);
          }
        });

      paginator.extend(FakeClass, 'methodToExtend');
      FakeClass.prototype.methodToExtend();
    });

    it('should maintain `this` context', done => {
      FakeClass.prototype.methodToExtend = function (this: any) {
        return this.uuid;
      };

      const cls = new (FakeClass as any)();
      cls.uuid = crypto.randomUUID();

      jest.spyOn(paginator, 'run_').mockImplementation((_, originalMethod) => {
        try {
          expect(originalMethod()).toBe(cls.uuid);
          done();
        } catch (e) {
          done(e);
        }
      });

      paginator.extend(FakeClass, 'methodToExtend');
      cls.methodToExtend();
    });

    it('should return what the router returns', () => {
      const uniqueValue = 234;
      jest.spyOn(paginator, 'run_').mockImplementation(() => {
        return uniqueValue;
      });
      paginator.extend(FakeClass, 'methodToExtend');
      expect(FakeClass.prototype.methodToExtend()).toBe(uniqueValue);
    });
  });

  describe('streamify', () => {
    beforeEach(() => {
      FakeClass.prototype.streamMethod = paginator.streamify('methodToExtend');
    });

    it('should return a function', () => {
      const fakeStreamMethod = FakeClass.prototype.streamMethod;
      expect(typeof fakeStreamMethod).toBe('function');
    });

    it('should parse the arguments', done => {
      const fakeArgs = [1, 2, 3];

      jest.spyOn(paginator, 'parseArguments_').mockImplementation(args => {
        try {
          expect([].slice.call(args)).toEqual(fakeArgs);
          done();
        } catch (e) {
          done(e);
        }
        return args as ParsedArguments;
      });
      jest
        .spyOn(paginator, 'runAsStream_')
        .mockImplementation(createFakeStream);
      FakeClass.prototype.streamMethod(...fakeArgs);
    });

    it('should run the method as a stream', done => {
      const parsedArguments = {a: 'b', c: 'd'} as ParsedArguments;
      jest.spyOn(paginator, 'parseArguments_').mockReturnValue(parsedArguments);
      jest
        .spyOn(paginator, 'runAsStream_')
        .mockImplementation((args, callback) => {
          try {
            expect(args).toBe(parsedArguments);
            expect(callback()).toBe(UUID);
            setImmediate(done);
          } catch (e) {
            done(e);
          }
          return createFakeStream();
        });

      FakeClass.prototype.streamMethod();
    });

    it('should apply the proper context', done => {
      const parsedArguments = {a: 'b', c: 'd'} as ParsedArguments;
      FakeClass.prototype.methodToExtend = function (this: any) {
        return this;
      };
      jest.spyOn(paginator, 'parseArguments_').mockReturnValue(parsedArguments);
      jest
        .spyOn(paginator, 'runAsStream_')
        .mockImplementation((_, callback) => {
          try {
            expect(callback()).toBe(FakeClass.prototype);
            setImmediate(done);
          } catch (e) {
            done(e);
          }
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
      jest.spyOn(paginator, 'parseArguments_').mockReturnValue(parsedArguments);
      jest
        .spyOn(paginator, 'runAsStream_')
        .mockImplementation((_, callback) => {
          try {
            expect(callback()).toBe(fakeValue);
            setImmediate(done);
          } catch (e) {
            done(e);
          }
          return createFakeStream();
        });
      FakeClass.prototype.streamMethod();
    });

    it('should return a stream', () => {
      const fakeStream = createFakeStream();
      jest
        .spyOn(paginator, 'parseArguments_')
        .mockReturnValue({} as ParsedArguments);
      jest.spyOn(paginator, 'runAsStream_').mockReturnValue(fakeStream);
      const stream = FakeClass.prototype.streamMethod();
      expect(stream).toBe(fakeStream);
    });
  });

  describe('parseArguments_', () => {
    it('should set defaults', () => {
      const parsedArguments = paginator.parseArguments_([]);

      expect(Object.keys(parsedArguments.query!).length).toBe(0);
      expect(parsedArguments.autoPaginate).toBe(true);
      expect(parsedArguments.maxApiCalls).toBe(-1);
      expect(parsedArguments.maxResults).toBe(-1);
      expect(parsedArguments.callback).toBeUndefined();
    });

    it('should detect a callback if first argument is a function', () => {
      const args = [util.noop];
      const parsedArguments = paginator.parseArguments_(args);

      expect(parsedArguments.callback).toBe(args[0]);
    });

    it('should use any other first argument as query', () => {
      const args = ['string'];
      const parsedArguments = paginator.parseArguments_(args);

      expect(parsedArguments.query).toBe(args[0]);
    });

    it('should not make an undefined value the query', () => {
      const args = [undefined, util.noop];
      const parsedArguments = paginator.parseArguments_(args);

      expect(parsedArguments.query).toEqual({});
    });

    it('should detect a callback if last argument is a function', () => {
      const args = ['string', util.noop];
      const parsedArguments = paginator.parseArguments_(args);

      expect(parsedArguments.callback).toBe(args[1]);
    });

    it('should not assign a callback if a fn is not provided', () => {
      const args = ['string'];
      const parsedArguments = paginator.parseArguments_(args);

      expect(parsedArguments.callback).toBeUndefined();
    });

    it('should set maxApiCalls from query.maxApiCalls', () => {
      const args = [{maxApiCalls: 10}];
      const parsedArguments = paginator.parseArguments_(args);

      expect(parsedArguments.maxApiCalls).toBe(args[0].maxApiCalls);
      expect((parsedArguments.query as any).maxApiCalls).toBeUndefined();
    });

    it('should set maxResults from query.maxResults', () => {
      const args = [{maxResults: 10}];
      const parsedArguments = paginator.parseArguments_(args);

      expect(parsedArguments.maxResults).toBe(args[0].maxResults);
    });

    it('should set maxResults from query.pageSize', () => {
      const args = [{pageSize: 10}];
      const parsedArguments = paginator.parseArguments_(args);

      expect(parsedArguments.maxResults).toBe(args[0].pageSize);
    });

    it('should set autoPaginate: false if there is a maxResults', () => {
      const args = [{maxResults: 10}, util.noop];
      const parsedArguments = paginator.parseArguments_(args);

      expect(parsedArguments.autoPaginate).toBe(false);
    });

    it('should set autoPaginate: false query.autoPaginate', () => {
      const args = [{autoPaginate: false}, util.noop];
      const parsedArguments = paginator.parseArguments_(args);

      expect(parsedArguments.autoPaginate).toBe(false);
    });

    it('should parse streamOptions', () => {
      const args = [{maxResults: 10, highWaterMark: 8}];
      const parsedArguments = paginator.parseArguments_(args);

      expect(parsedArguments.maxResults).toBe(10);
      expect(parsedArguments.streamOptions).toEqual({
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

          jest
            .spyOn(paginator, 'runAsStream_')
            .mockImplementation((args, originalMethod) => {
              try {
                expect(args).toBe(parsedArguments);
                originalMethod();
              } catch (e) {
                done(e);
              }
              return createFakeStream();
            });

          paginator.run_(parsedArguments, done);
        });

        it('should execute callback on error', done => {
          const error = new Error('Error.');

          const parsedArguments = {
            autoPaginate: true,
            callback(err: Error) {
              try {
                expect(err).toBe(error);
                done();
              } catch (e) {
                done(e);
              }
            },
          };

          jest.spyOn(paginator, 'runAsStream_').mockImplementation(() => {
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
              try {
                expect(results_).toEqual(results);
                done();
              } catch (e) {
                done(e);
              }
            },
          };

          jest.spyOn(paginator, 'runAsStream_').mockImplementation(() => {
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
              try {
                expect(results_).toEqual(results);
                expect(query).toBeUndefined();
                expect(fakeRes).toEqual({msg: 'OK'});
                expect(anotherArg).toBe(10);
                done();
              } catch (e) {
                done(e);
              }
            },
          };

          jest.spyOn(paginator, 'runAsStream_').mockImplementation(() => {
            const stream = createFakeStream();
            setImmediate(() => {
              results.forEach(result => stream.push(result));
              stream.push(null);
              (stream as any)._otherArgs = args;
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
          jest
            .spyOn(paginator, 'runAsStream_')
            .mockImplementation((args, originalMethod) => {
              try {
                expect(args).toBe(parsedArguments);
                originalMethod();
                done();
              } catch (e) {
                done(e);
              }
              return createFakeStream();
            });

          paginator.run_(parsedArguments, util.noop);
        });

        it('should reject a promise on error', async () => {
          const error = new Error('Error.');

          jest.spyOn(paginator, 'runAsStream_').mockImplementation(() => {
            const stream = createFakeStream();
            setImmediate(() => {
              stream.emit('error', error);
            });
            return stream;
          });

          await expect(
            paginator.run_(parsedArguments, util.noop),
          ).rejects.toThrow(error);
        });

        it('should resolve with all results on end', async () => {
          const results = [{a: 1}, {b: 2}, {c: 3}];

          jest.spyOn(paginator, 'runAsStream_').mockImplementation(() => {
            const stream = createFakeStream();
            setImmediate(() => {
              results.forEach(result => stream.push(result));
              stream.push(null);
            });
            return stream;
          });

          const [results_] = await paginator.run_(parsedArguments, util.noop);
          expect(results_).toEqual(results);
        });

        it('should resolve with all results and extra args', async () => {
          const results = [{a: 1}, {b: 2}, {c: 3}];
          const args: any[] = [{msg: 'OK'}, 10];

          jest.spyOn(paginator, 'runAsStream_').mockImplementation(() => {
            const stream = createFakeStream();
            setImmediate(() => {
              results.forEach(result => stream.push(result));
              stream.push(null);
              (stream as any)._otherArgs = args;
            });
            return stream;
          });

          const [results_, query_, fakeRes, anotherArg] = await paginator.run_(
            parsedArguments,
            util.noop,
          );
          expect(results_).toEqual(results);
          expect(query_).toBeUndefined();
          expect(fakeRes).toEqual({msg: 'OK'});
          expect(anotherArg).toBe(10);
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
          jest
            .spyOn(paginator, 'runAsStream_')
            .mockImplementation(createFakeStream);
          paginator.run_(parsedArguments, (query: {}, callback: () => void) => {
            try {
              expect(query).toEqual(parsedArguments.query);
              callback();
            } catch (e) {
              done(e);
            }
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
          jest
            .spyOn(paginator, 'runAsStream_')
            .mockImplementation(createFakeStream);
          paginator.run_(parsedArguments, (query: {}) => {
            expect(query).toEqual(parsedArguments.query);
          });
        });
      });
    });

    describe('runAsStream_', () => {
      it('should create a resource stream', () => {
        const fakeArgs = {};
        const fakeFn = jest.fn();
        const stream = paginator.runAsStream_(
          fakeArgs,
          fakeFn,
        ) as unknown as FakeResourceStream;

        expect(stream instanceof ResourceStream).toBe(true);
        const [args, requestFn] = (stream as any).calledWith;
        expect(args).toBe(fakeArgs);
        expect(requestFn).toBe(fakeFn);
      });
    });
  });
});
