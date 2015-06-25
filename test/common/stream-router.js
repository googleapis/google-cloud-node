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
var mockery = require('mockery');
var util = require('../../lib/common/util.js');
var uuid = require('node-uuid');

describe('streamRouter', function() {
  var streamRouter;
  var streamRouterOverrides = {};

  var UUID = uuid.v1();

  function FakeClass() {}

  before(function() {
    mockery.enable({
      useCleanCache: true,
      warnOnUnregistered: false
    });
    streamRouter = require('../../lib/common/stream-router.js');
    var streamRouter_Cached = extend(true, {}, streamRouter);

    Object.keys(streamRouter).forEach(function(streamRouterMethod) {
      if (typeof streamRouter[streamRouterMethod] !== 'function') {
        return;
      }

      streamRouter[streamRouterMethod] = function() {
        var args = arguments;

        if (streamRouterOverrides[streamRouterMethod]) {
          return streamRouterOverrides[streamRouterMethod].apply(this, args);
        } else {
          return streamRouter_Cached[streamRouterMethod].apply(this, args);
        }
      };
    });
  });

  after(function() {
    mockery.deregisterAll();
    mockery.disable();
  });

  beforeEach(function() {
    FakeClass.prototype = { methodToExtend: function() { return UUID; } };
    streamRouterOverrides = {};
  });

  describe('extend', function() {
    it('should overwrite a method on a class', function() {
      var originalMethod = FakeClass.prototype.methodToExtend;
      streamRouter.extend(FakeClass, 'methodToExtend');
      var overwrittenMethod = FakeClass.prototype.methodToExtend;

      assert.notEqual(originalMethod, overwrittenMethod);
    });

    it('should accept an array or string method names', function() {
      var originalMethod = FakeClass.prototype.methodToExtend;

      FakeClass.prototype.anotherMethodToExtend = function() {};
      var anotherMethod = FakeClass.prototype.anotherMethodToExtend;

      var methodsToExtend = ['methodToExtend', 'anotherMethodToExtend'];
      streamRouter.extend(FakeClass, methodsToExtend);

      assert.notEqual(originalMethod, FakeClass.prototype.methodToExtend);
      assert.notEqual(anotherMethod, FakeClass.prototype.anotherMethodToExtend);
    });

    it('should call router when the original method is called', function(done) {
      var expectedReturnValue = FakeClass.prototype.methodToExtend();

      streamRouterOverrides.router_ = function(args, originalMethod) {
        assert.deepEqual([].slice.call(args), [1, 2, 3]);
        assert.equal(originalMethod(), expectedReturnValue);
        done();
      };

      streamRouter.extend(FakeClass, 'methodToExtend');
      FakeClass.prototype.methodToExtend(1, 2, 3);
    });

    it('should maintain `this` context', function(done) {
      FakeClass.prototype.methodToExtend = function() { return this.uuid; };

      var cls = new FakeClass();
      cls.uuid = uuid.v1();

      streamRouterOverrides.router_ = function(args, originalMethod) {
        assert.equal(originalMethod(), cls.uuid);
        done();
      };

      streamRouter.extend(FakeClass, 'methodToExtend');
      cls.methodToExtend();
    });

    it('should return what the router returns', function() {
      var uniqueValue = 234;
      streamRouterOverrides.router_ = function() {
        return uniqueValue;
      };

      streamRouter.extend(FakeClass, 'methodToExtend');
      assert.equal(FakeClass.prototype.methodToExtend(), uniqueValue);
    });
  });

  describe('router_', function() {
    var ARGS_WITHOUT_CALLBACK = [1, 2, 3];
    var ARGS_WITH_CALLBACK = ARGS_WITHOUT_CALLBACK.concat(util.noop);

    describe('stream mode', function() {
      it('should call original method when stream opens', function(done) {
        function originalMethod() {
          var args = arguments;

          ARGS_WITHOUT_CALLBACK.forEach(function(arg, index) {
            assert.strictEqual(args[index], arg);
          });

          done();
        }

        var rs = streamRouter.router_(ARGS_WITHOUT_CALLBACK, originalMethod);
        rs.on('data', util.noop); // Trigger the underlying `_read` event.
      });

      it('should emit an error if one occurs', function(done) {
        var error = new Error('Error.');

        function originalMethod() {
          var callback = [].slice.call(arguments).pop();
          setImmediate(function() {
            callback(error);
          });
        }

        var rs = streamRouter.router_(ARGS_WITHOUT_CALLBACK, originalMethod);
        rs.on('data', util.noop); // Trigger the underlying `_read` event.
        rs.on('error', function(err) {
          assert.deepEqual(err, error);
          done();
        });
      });

      it('should push results onto the stream', function(done) {
        var results = ['a', 'b', 'c'];
        var resultsReceived = [];

        function originalMethod() {
          var callback = [].slice.call(arguments).pop();
          setImmediate(function() {
            callback(null, results);
          });
        }

        var rs = streamRouter.router_(ARGS_WITHOUT_CALLBACK, originalMethod);
        rs.on('data', function(result) {
          resultsReceived.push(result);
        });
        rs.on('end', function() {
          assert.deepEqual(results, resultsReceived);
          done();
        });
      });

      it('should get more results if nextQuery exists', function(done) {
        var nextQuery = { a: 'b', c: 'd' };
        var nextQuerySent = false;

        function originalMethod() {
          var query = arguments[0];
          var callback = [].slice.call(arguments).pop();

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

        var rs = streamRouter.router_(ARGS_WITHOUT_CALLBACK, originalMethod);
        rs.on('data', util.noop); // Trigger the underlying `_read` event.
      });

      it('should not push more results if stream ends early', function(done) {
        var results = ['a', 'b', 'c'];

        function originalMethod() {
          var callback = [].slice.call(arguments).pop();
          setImmediate(function() {
            callback(null, results);
          });
        }

        var rs = streamRouter.router_(ARGS_WITHOUT_CALLBACK, originalMethod);
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

        function originalMethod() {
          originalMethodCalledCount++;

          var callback = [].slice.call(arguments).pop();

          setImmediate(function() {
            callback(null, results, {});
          });
        }

        var rs = streamRouter.router_(ARGS_WITHOUT_CALLBACK, originalMethod);
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

    describe('callback mode', function() {
      it('should call original method', function(done) {
        function originalMethod() {
          assert.deepEqual([].slice.call(arguments), ARGS_WITH_CALLBACK);
          done();
        }

        streamRouter.router_(ARGS_WITH_CALLBACK, originalMethod);
      });
    });
  });
});
