/**
 * Copyright 2016 Google Inc. All Rights Reserved.
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

var EventEmitter = require('events').EventEmitter;
var assert = require('assert');
var restifyInterface = require('../../../src/interfaces/restify.js');

// node v0.12 compatibility
if (!EventEmitter.prototype.listenerCount) {
  EventEmitter.prototype.listenerCount = function(eventName) {
    return EventEmitter.listenerCount(this, eventName);
  };
}

describe('restifyInterface', function() {
  var UNCAUGHT_EVENT = 'uncaughtException';
  var FINISH = 'finish';
  var noOp = function() {return;};
  describe('Attachment to the uncaughtException event', function() {
    it('Should attach one listener after instantiation', function() {
      var ee = new EventEmitter();
      assert.strictEqual(ee.listenerCount(UNCAUGHT_EVENT), 0,
        'Listeners on event should be zero');
      // return the bound function which the user will actually interface with
      var errorHandlerInstance = restifyInterface(null, null);
      // execute the handler the user will use with the stubbed server instance
      errorHandlerInstance(ee);
      assert.strictEqual(ee.listenerCount(UNCAUGHT_EVENT), 1,
        'Listeners on event should now be one');
    });
  });
  describe('Request handler lifecycle events', function() {
    var ee = new EventEmitter();
    var errorHandlerInstance = restifyInterface(null, null);
    var requestHandlerInstance = errorHandlerInstance(ee);
    describe('default path on invalid input', function() {
      it('Should not throw', function() {
        assert.doesNotThrow(function() {
          requestHandlerInstance(null, null, noOp);
        });
      });
    });
    describe('default path without req/res error', function() {
      ee.removeAllListeners();
      var req = new EventEmitter();
      var res = new EventEmitter();
      res.statusCode = 200;
      it('Should have 0 listeners on the finish event', function() {
        assert.strictEqual(res.listenerCount(FINISH), 0);
      });
      it('Should not throw while handling the req/res objects', function() {
        assert.doesNotThrow(function() {
          requestHandlerInstance(req, res, noOp);
        });
      });
      it('Should have 1 listener', function() {
        assert.strictEqual(res.listenerCount(FINISH), 1);
      });
      it('Should not throw when emitting the finish event', function() {
        assert.doesNotThrow(function() {
          res.emit(FINISH);
        });
      });
    });
    describe('default path with req/res error', function(done) {
      ee.removeAllListeners();
      var client = {
        sendError: function() {
          assert(true, 'sendError should be called');
        }
      };
      var config = {
        getServiceContext: function() {
          assert(true, 'getServiceContext should be called');
          return {
            service: 'stub-service',
            version: 'stub-version'
          };
        },
        lacksCredentials: function() {
          return false;
        },
        getVersion: function() {
          return '1';
        }
      };
      var errorHandlerInstance = restifyInterface(client, config);
      var requestHandlerInstance = errorHandlerInstance(ee);
      var req = new EventEmitter();
      var res = new EventEmitter();
      res.statusCode = 500;
      it('Should have 0 Listeners on the finish event', function() {
        assert.strictEqual(res.listenerCount(FINISH), 0);
      });
      it('Should not throw on instantiation', function() {
        assert.doesNotThrow(function() {
          requestHandlerInstance(req, res, noOp);
        });
      });
      it('Should have 1 listener on the finish event', function() {
        assert.strictEqual(res.listenerCount(FINISH), 1);
      });
      it('Should not throw on emission of the finish event', function() {
        assert.doesNotThrow(function() {
          res.emit(FINISH);
        });
      });
      describe('Exercise the uncaughtException event path', function() {
        it('Should call the sendError function property', function(done) {
          client.sendError = function() {
            assert(true, 'sendError should be called');
            done();
          };
          assert.doesNotThrow(function() {
            ee.emit(UNCAUGHT_EVENT);
          });
        });
      });
    });
  });
});
