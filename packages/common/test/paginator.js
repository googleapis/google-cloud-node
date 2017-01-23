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

'use strict';

var assert = require('assert');
var extend = require('extend');
var proxyquire = require('proxyquire');
var stream = require('stream');
var through = require('through2');
var uuid = require('uuid');

var paginator = require('../src/paginator.js');
var util = extend({}, require('../src/util.js'));

var overrides = {};

function override(name, object) {
  var cachedObject = extend({}, object);
  overrides[name] = {};

  Object.keys(object).forEach(function(methodName) {
    if (typeof object[methodName] !== 'function') {
      return;
    }

    object[methodName] = function() {
      var args = arguments;

      if (overrides[name][methodName]) {
        return overrides[name][methodName].apply(this, args);
      }

      return cachedObject[methodName].apply(this, args);
    };
  });
}

function resetOverrides() {
  overrides = Object.keys(overrides).reduce(function(acc, name) {
    acc[name] = {};
    return acc;
  }, {});
}

describe('paginator', function() {
  var UUID = uuid.v1();

  function FakeClass() {}

  before(function() {
    override('util', util);
    paginator = proxyquire('../src/paginator.js', {
      './util.js': util
    });
    override('paginator', paginator);
  });

  beforeEach(function() {
    FakeClass.prototype = { methodToExtend: function() { return UUID; } };
    resetOverrides();
  });

  after(function() {
    resetOverrides();
  });

  describe('extend', function() {
    it('should overwrite a method on a class', function() {
      var originalMethod = FakeClass.prototype.methodToExtend;
      paginator.extend(FakeClass, 'methodToExtend');
      var overwrittenMethod = FakeClass.prototype.methodToExtend;

      assert.notEqual(originalMethod, overwrittenMethod);
    });

    it('should store the original method as a private member', function() {
      var originalMethod = FakeClass.prototype.methodToExtend;
      paginator.extend(FakeClass, 'methodToExtend');

      assert.strictEqual(originalMethod, FakeClass.prototype.methodToExtend_);
    });

    it('should accept an array or string method names', function() {
      var originalMethod = FakeClass.prototype.methodToExtend;

      FakeClass.prototype.anotherMethodToExtend = function() {};
      var anotherMethod = FakeClass.prototype.anotherMethodToExtend;

      var methodsToExtend = ['methodToExtend', 'anotherMethodToExtend'];
      paginator.extend(FakeClass, methodsToExtend);

      assert.notEqual(originalMethod, FakeClass.prototype.methodToExtend);
      assert.notEqual(anotherMethod, FakeClass.prototype.anotherMethodToExtend);
    });

    it('should parse the arguments', function(done) {
      overrides.paginator.parseArguments_ = function(args) {
        assert.deepEqual([].slice.call(args), [1, 2, 3]);
        done();
      };

      overrides.paginator.run_ = util.noop;

      paginator.extend(FakeClass, 'methodToExtend');
      FakeClass.prototype.methodToExtend(1, 2, 3);
    });

    it('should call router when the original method is called', function(done) {
      var expectedReturnValue = FakeClass.prototype.methodToExtend();
      var parsedArguments = { a: 'b', c: 'd' };

      overrides.paginator.parseArguments_ = function() {
        return parsedArguments;
      };

      overrides.paginator.run_ = function(args, originalMethod) {
        assert.strictEqual(args, parsedArguments);
        assert.equal(originalMethod(), expectedReturnValue);
        done();
      };

      paginator.extend(FakeClass, 'methodToExtend');
      FakeClass.prototype.methodToExtend();
    });

    it('should maintain `this` context', function(done) {
      FakeClass.prototype.methodToExtend = function() { return this.uuid; };

      var cls = new FakeClass();
      cls.uuid = uuid.v1();

      overrides.paginator.run_ = function(args, originalMethod) {
        assert.equal(originalMethod(), cls.uuid);
        done();
      };

      paginator.extend(FakeClass, 'methodToExtend');
      cls.methodToExtend();
    });

    it('should return what the router returns', function() {
      var uniqueValue = 234;
      overrides.paginator.run_ = function() {
        return uniqueValue;
      };

      paginator.extend(FakeClass, 'methodToExtend');
      assert.equal(FakeClass.prototype.methodToExtend(), uniqueValue);
    });
  });

  describe('streamify', function() {
    beforeEach(function() {
      FakeClass.prototype.streamMethod = paginator.streamify('methodToExtend');
    });

    it('should return a function', function() {
      var fakeStreamMethod = FakeClass.prototype.streamMethod;
      assert.strictEqual(typeof fakeStreamMethod, 'function');
    });

    it('should parse the arguments', function(done) {
      var fakeArgs = [1, 2, 3];

      overrides.paginator.parseArguments_ = function(args) {
        assert.deepEqual(fakeArgs, [].slice.call(args));
        done();
      };

      overrides.paginator.runAsStream_ = util.noop;
      FakeClass.prototype.streamMethod.apply(FakeClass.prototype, fakeArgs);
    });

    it('should run the method as a stream', function(done) {
      var parsedArguments = { a: 'b', c: 'd' };

      overrides.paginator.parseArguments_ = function() {
        return parsedArguments;
      };

      overrides.paginator.runAsStream_ = function(args, callback) {
        assert.strictEqual(args, parsedArguments);
        assert.strictEqual(callback(), UUID);
        done();
      };

      FakeClass.prototype.streamMethod();
    });

    it('should apply the proper context', function(done) {
      var parsedArguments = { a: 'b', c: 'd' };

      FakeClass.prototype.methodToExtend = function() { return this; };

      overrides.paginator.parseArguments_ = function() {
        return parsedArguments;
      };

      overrides.paginator.runAsStream_ = function(args, callback) {
        assert.strictEqual(callback(), FakeClass.prototype);
        done();
      };

      FakeClass.prototype.streamMethod();
    });

    it('should check for a private member', function(done) {
      var parsedArguments = { a: 'b', c: 'd' };
      var fakeValue = 123;

      FakeClass.prototype.methodToExtend_ = function() { return fakeValue; };

      overrides.paginator.parseArguments_ = function() {
        return parsedArguments;
      };

      overrides.paginator.runAsStream_ = function(args, callback) {
        assert.strictEqual(callback(), fakeValue);
        done();
      };

      FakeClass.prototype.streamMethod();
    });

    it('should return a stream', function() {
      var fakeStream = through.obj();

      overrides.paginator.parseArguments_ = util.noop;

      overrides.paginator.runAsStream_ = function() {
        return fakeStream;
      };

      var stream = FakeClass.prototype.streamMethod();

      assert.strictEqual(fakeStream, stream);
    });
  });

  describe('parseArguments_', function() {
    it('should set defaults', function() {
      var parsedArguments = paginator.parseArguments_([]);

      assert.strictEqual(Object.keys(parsedArguments.query).length, 0);
      assert.strictEqual(parsedArguments.autoPaginate, true);
      assert.strictEqual(parsedArguments.maxApiCalls, -1);
      assert.strictEqual(parsedArguments.maxResults, -1);
      assert.strictEqual(parsedArguments.callback, undefined);
    });

    it('should detect a callback if first argument is a function', function() {
      var args = [ util.noop ];
      var parsedArguments = paginator.parseArguments_(args);

      assert.strictEqual(parsedArguments.callback, args[0]);
    });

    it('should use any other first argument as query', function() {
      var args = [ 'string' ];
      var parsedArguments = paginator.parseArguments_(args);

      assert.strictEqual(parsedArguments.query, args[0]);
    });

    it('should not make an undefined value the query', function() {
      var args = [ undefined, util.noop ];
      var parsedArguments = paginator.parseArguments_(args);

      assert.deepEqual(parsedArguments.query, {});
    });

    it('should detect a callback if last argument is a function', function() {
      var args = [ 'string', util.noop ];
      var parsedArguments = paginator.parseArguments_(args);

      assert.strictEqual(parsedArguments.callback, args[1]);
    });

    it('should not assign a callback if a fn is not provided', function() {
      var args = [ 'string' ];
      var parsedArguments = paginator.parseArguments_(args);

      assert.strictEqual(parsedArguments.callback, undefined);
    });

    it('should set maxApiCalls from query.maxApiCalls', function() {
      var args = [ { maxApiCalls: 10 } ];
      var parsedArguments = paginator.parseArguments_(args);

      assert.strictEqual(parsedArguments.maxApiCalls, args[0].maxApiCalls);
      assert.strictEqual(parsedArguments.query.maxApiCalls, undefined);
    });

    it('should set maxResults from query.maxResults', function() {
      var args = [ { maxResults: 10 } ];
      var parsedArguments = paginator.parseArguments_(args);

      assert.strictEqual(parsedArguments.maxResults, args[0].maxResults);
    });

    it('should set maxResults from query.pageSize', function() {
      var args = [ { pageSize: 10 } ];
      var parsedArguments = paginator.parseArguments_(args);

      assert.strictEqual(parsedArguments.maxResults, args[0].pageSize);
    });

    it('should set autoPaginate: false if there is a maxResults', function() {
      var args = [ { maxResults: 10 }, util.noop ];
      var parsedArguments = paginator.parseArguments_(args);

      assert.strictEqual(parsedArguments.autoPaginate, false);
    });

    it('should set autoPaginate: false query.autoPaginate', function() {
      var args = [ { autoPaginate: false }, util.noop ];
      var parsedArguments = paginator.parseArguments_(args);

      assert.strictEqual(parsedArguments.autoPaginate, false);
    });
  });

  describe('run_', function() {
    beforeEach(function() {
      overrides.paginator.runAsStream_ = util.noop;
    });

    describe('autoPaginate', function() {
      it('should call runAsStream_ when autoPaginate:true', function(done) {
        var parsedArguments = {
          autoPaginate: true,
          callback: util.noop
        };

        overrides.paginator.runAsStream_ = function(args, originalMethod) {
          assert.strictEqual(args, parsedArguments);
          originalMethod();
          return through();
        };

        paginator.run_(parsedArguments, done);
      });

      it('should execute callback on error', function(done) {
        var error = new Error('Error.');

        var parsedArguments = {
          autoPaginate: true,
          callback: function(err) {
            assert.strictEqual(err, error);
            done();
          }
        };

        overrides.paginator.runAsStream_ = function() {
          var stream = through();
          setImmediate(function() {
            stream.emit('error', error);
          });
          return stream;
        };

        paginator.run_(parsedArguments, util.noop);
      });

      it('should return all results on end', function(done) {
        var results = ['a', 'b', 'c'];

        var parsedArguments = {
          autoPaginate: true,
          callback: function(err, results_) {
            assert.deepEqual(results_.toString().split(''), results);
            done();
          }
        };

        overrides.paginator.runAsStream_ = function() {
          var stream = through();

          setImmediate(function() {
            results.forEach(function(result) {
              stream.push(result);
            });

            stream.push(null);
          });

          return stream;
        };

        paginator.run_(parsedArguments, util.noop);
      });
    });

    describe('manual pagination', function() {
      it('should recoginze autoPaginate: false', function(done) {
        var parsedArguments = {
          autoPaginate: false,
          query: {
            a: 'b',
            c: 'd'
          },
          callback: done
        };

        paginator.run_(parsedArguments, function(query, callback) {
          assert.deepEqual(query, parsedArguments.query);

          callback();
        });
      });
    });
  });

  describe('runAsStream_', function() {
    var PARSED_ARGUMENTS = {
      query: {
        a: 'b', c: 'd'
      }
    };

    beforeEach(function() {
      overrides.util.createLimiter = function(makeRequest) {
        var transformStream = new stream.Transform({ objectMode: true });
        transformStream.destroy = through.obj().destroy.bind(transformStream);

        setImmediate(function() {
          transformStream.emit('reading');
        });

        return {
          makeRequest: makeRequest,
          stream: transformStream
        };
      };
    });

    it('should call original method when stream opens', function(done) {
      function originalMethod(query) {
        assert.strictEqual(query, PARSED_ARGUMENTS.query);
        done();
      }

      paginator.runAsStream_(PARSED_ARGUMENTS, originalMethod);
    });

    it('should emit an error if one occurs', function(done) {
      var error = new Error('Error.');

      function originalMethod(query, callback) {
        setImmediate(function() {
          callback(error);
        });
      }

      var rs = paginator.runAsStream_(PARSED_ARGUMENTS, originalMethod);
      rs.on('error', function(err) {
        assert.deepEqual(err, error);
        done();
      });
    });

    it('should push results onto the stream', function(done) {
      var results = ['a', 'b', 'c'];
      var resultsReceived = [];

      function originalMethod(query, callback) {
        setImmediate(function() {
          callback(null, results);
        });
      }

      var rs = paginator.runAsStream_(PARSED_ARGUMENTS, originalMethod);
      rs.on('data', function(result) {
        resultsReceived.push(result);
      });
      rs.on('end', function() {
        assert.deepEqual(resultsReceived, ['a', 'b', 'c']);
        done();
      });
    });

    describe('maxApiCalls', function() {
      var maxApiCalls = 10;

      it('should create a limiter', function(done) {
        overrides.util.createLimiter = function(makeRequest, options) {
          assert.strictEqual(options.maxApiCalls, maxApiCalls);

          setImmediate(done);

          return {
            stream: through.obj()
          };
        };

        paginator.runAsStream_({ maxApiCalls: maxApiCalls }, util.noop);
      });
    });

    describe('limits', function() {
      var limit = 1;

      function originalMethod(query, callback) {
        setImmediate(function() {
          callback(null, [1, 2, 3]);
        });
      }

      it('should respect maxResults', function(done) {
        var numResultsReceived = 0;

        paginator.runAsStream_({ maxResults: limit }, originalMethod)
          .on('data', function() { numResultsReceived++; })
          .on('end', function() {
            assert.strictEqual(numResultsReceived, limit);
            done();
          });
      });
    });

    it('should get more results if nextQuery exists', function(done) {
      var nextQuery = { a: 'b', c: 'd' };
      var nextQuerySent = false;

      function originalMethod(query, callback) {
        if (nextQuerySent) {
          assert.deepEqual(query, nextQuery);
          done();
          return;
        }

        setImmediate(function() {
          nextQuerySent = true;
          callback(null, [], nextQuery);
        });
      }

      paginator.runAsStream_(PARSED_ARGUMENTS, originalMethod);
    });

    it('should not push more results if stream ends early', function(done) {
      var results = ['a', 'b', 'c'];

      function originalMethod(query, callback) {
        setImmediate(function() {
          callback(null, results);
        });
      }

      var rs = paginator.runAsStream_(PARSED_ARGUMENTS, originalMethod);
      rs.on('data', function(result) {
        if (result === 'b') {
          // Pre-maturely end the stream.
          this.end();
        }

        assert.notEqual(result, 'c');
      });
      rs.on('end', function() {
        done();
      });
    });

    it('should not get more results if stream ends early', function(done) {
      var results = ['a', 'b', 'c'];

      var originalMethodCalledCount = 0;

      function originalMethod(query, callback) {
        originalMethodCalledCount++;

        setImmediate(function() {
          callback(null, results, {});
        });
      }

      var rs = paginator.runAsStream_(PARSED_ARGUMENTS, originalMethod);
      rs.on('data', function(result) {
        if (result === 'b') {
          // Pre-maturely end the stream.
          this.end();
        }
      });
      rs.on('end', function() {
        assert.equal(originalMethodCalledCount, 1);
        done();
      });
    });
  });
});
