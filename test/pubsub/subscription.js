/**
 * Copyright 2014 Google Inc. All Rights Reserved.
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

/*global describe, it, beforeEach, afterEach */

'use strict';

var assert = require('assert');
var util = require('../../lib/common/util.js');
var Subscription = require('../../lib/pubsub/subscription.js');

describe('Subscription', function() {
  var PROJECT_ID = 'test-project';
  var SUB_NAME = 'test-subscription';
  var SUB_FULL_NAME = '/subscriptions/' + PROJECT_ID + '/' + SUB_NAME;
  var pubsubMock = {
    projectId: PROJECT_ID,
    makeReq_: util.noop
  };
  var message = 'howdy';
  var messageBuffer = new Buffer(message).toString('base64');
  var messageObj = {
    ackId: 3,
    pubsubEvent: {
      message: {
        data: messageBuffer
      }
    }
  };
  var expectedMessage = { id: 3, data: message };
  var subscription;

  beforeEach(function() {
    subscription = new Subscription(pubsubMock, { name: SUB_NAME });
  });

  describe('initialization', function() {
    it('should format name', function(done) {
      var formatName_ = Subscription.formatName_;
      Subscription.formatName_ = function() {
        Subscription.formatName_ = formatName_;
        done();
      };
      new Subscription(pubsubMock, { name: SUB_NAME });
    });

    it('should honor configuration settings', function() {
      var CONFIG = {
        name: SUB_NAME,
        autoAck: true,
        interval: 100
      };
      var sub = new Subscription(pubsubMock, CONFIG);
      assert.strictEqual(sub.autoAck, CONFIG.autoAck);
      assert.strictEqual(sub.interval, CONFIG.interval);
    });

    it('should not be closed', function() {
      assert.strictEqual(subscription.closed, false);
    });

    it('should default autoAck to false if not specified', function() {
      var sub = new Subscription(pubsubMock, { name: SUB_NAME });
      assert.strictEqual(sub.autoAck, false);
    });

    it('should set default interval if one is not specified', function() {
      var sub = new Subscription(pubsubMock, { name: SUB_NAME });
      assert.equal(sub.interval, 10);
    });
  });

  describe('formatName_', function() {
    it('should format name', function() {
      var formattedName = Subscription.formatName_(PROJECT_ID, SUB_NAME);
      assert.equal(formattedName, SUB_FULL_NAME);
    });

    it('should format name when given a complete name', function() {
      var formattedName = Subscription.formatName_(PROJECT_ID, SUB_FULL_NAME);
      assert.equal(formattedName, SUB_FULL_NAME);
    });
  });

  describe('listenForEvents_', function() {
    afterEach(function() {
      subscription.removeAllListeners();
    });

    it('should start pulling once a message listener is bound', function(done) {
      subscription.startPulling_ = function() {
        done();
      };
      subscription.on('message', util.noop);
    });

    it('should close when no more message listeners are bound', function() {
      subscription.startPulling_ = util.noop;
      subscription.on('message', util.noop);
      subscription.on('message', util.noop);
      // 2 listeners: sub should be open.
      assert.strictEqual(subscription.closed, false);
      subscription.removeListener('message', util.noop);
      // 1 listener: sub should be open.
      assert.strictEqual(subscription.closed, false);
      subscription.removeListener('message', util.noop);
      // 0 listeners: sub should be closed.
      assert.strictEqual(subscription.closed, true);
    });
  });

  describe('ack', function() {
    it('should throw if no IDs are provided', function() {
      assert.throws(function() {
        subscription.ack();
      }, /At least one ID/);
      assert.throws(function() {
        subscription.ack([]);
      }, /At least one ID/);
    });

    it('should accept a single id', function() {
      assert.doesNotThrow(function() {
        subscription.ack(1, util.noop);
      });
    });

    it('should accept an array of ids', function() {
      assert.doesNotThrow(function() {
        subscription.ack([1], util.noop);
      });
    });

    it('should make an array out of ids', function(done) {
      var ID = 1;
      subscription.makeReq_ = function(method, path, qs, body) {
        assert.equal(body.subscription, SUB_FULL_NAME);
        assert.deepEqual(body.ackId, [ID]);
        done();
      };
      subscription.ack(ID, assert.ifError);
    });

    it('should make correct api request', function(done) {
      var IDS = [1, 2, 3];
      subscription.makeReq_ = function(method, path, qs, body) {
        assert.equal(body.subscription, SUB_FULL_NAME);
        assert.deepEqual(body.ackId, IDS);
        done();
      };
      subscription.ack(IDS, assert.ifError);
    });

    it('should pass callback to request', function(done) {
      subscription.makeReq_ = function(method, path, qs, body, callback) {
        callback();
      };
      subscription.ack(1, done);
    });
  });

  describe('pull', function() {
    beforeEach(function() {
      subscription.ack = util.noop;
      subscription.makeReq_ = function(method, path, qs, body, callback) {
        callback(null, messageObj);
      };
    });

    it('should make correct api request', function(done) {
      subscription.makeReq_ = function(method, path, qs, body) {
        assert.equal(method, 'POST');
        assert.equal(path, 'subscriptions/pull');
        assert.equal(body.subscription, SUB_FULL_NAME);
        assert.strictEqual(body.returnImmediately, false);
        done();
      };
      subscription.pull({}, assert.ifError);
    });

    it('should not require configuration options', function(done) {
      subscription.pull(done);
    });

    it('should default returnImmediately to false', function(done) {
      subscription.makeReq_ = function(method, path, qs, body) {
        assert.strictEqual(body.returnImmediately, false);
        done();
      };
      subscription.pull({}, assert.ifError);
    });

    it('should honor options', function(done) {
      subscription.makeReq_ = function(method, path, qs, body) {
        assert.strictEqual(body.returnImmediately, true);
        done();
      };
      subscription.pull({ returnImmediately: true }, assert.ifError);
    });

    it('should pass error to callback', function(done) {
      var error = new Error('Error.');
      subscription.makeReq_ = function(method, path, qs, body, callback) {
        callback(error);
      };
      subscription.pull(function(err) {
        assert.equal(err, error);
        done();
      });
    });

    describe('autoAck false', function() {
      beforeEach(function() {
        subscription.autoAck = false;
      });

      it('should not ack', function() {
        subscription.ack = function() {
          throw new Error('Should not have acked.');
        };
        subscription.pull({}, assert.ifError);
      });

      it('should execute callback with message', function(done) {
        subscription.pull({}, function(err, msg) {
          assert.deepEqual(msg, expectedMessage);
          done();
        });
      });
    });

    describe('autoAck true', function() {
      beforeEach(function() {
        subscription.autoAck = true;
        subscription.ack = function(id, callback) {
          callback();
        };
      });

      it('should ack', function(done) {
        subscription.ack = function() {
          done();
        };
        subscription.pull({}, assert.ifError);
      });

      it('should pass id to ack', function(done) {
        subscription.ack = function(id) {
          assert.equal(id, expectedMessage.id);
          done();
        };
        subscription.pull({}, assert.ifError);
      });

      it('should pass callback to ack', function(done) {
        subscription.pull({}, done);
      });

      it('should invoke callback with error from ack', function(done) {
        var error = new Error('Error.');
        subscription.ack = function(id, callback) {
          callback(error);
        };
        subscription.pull({}, function(err) {
          assert.equal(err, error);
          done();
        });
      });

      it('should execute callback', function(done) {
        subscription.pull({}, done);
      });
    });
  });

  describe('startPulling_', function() {
    beforeEach(function() {
      subscription.pull = util.noop;
    });

    it('should pull at specified interval', function(done) {
      var INTERVAL = 5;
      subscription.pull = function(options, callback) {
        // After pull is called once, overwrite with `done`.
        // This is to override the function passed to `setTimeout`, so we are
        // sure it's the same pull function when we execute it.
        subscription.pull = function() {
          done();
        };
        callback();
      };
      var setTimeout = global.setTimeout;
      global.setTimeout = function(fn, interval) {
        global.setTimeout = setTimeout;
        assert.equal(interval, INTERVAL);
        // This should execute the `done` function from when we overrided it
        // above.
        fn();
      };
      subscription.interval = INTERVAL;
      subscription.startPulling_();
    });

    it('should stop pulling if subscription is closed', function() {
      var pulledCount = 0;
      subscription.pull = function() {
        if (++pulledCount === 3) {
          subscription.pull = function() {
            throw Error('Should have stopped pulling.');
          };
          subscription.close();
        }
      };
      subscription.startPulling_();
    });

    it('should set returnImmediately to false when pulling', function(done) {
      subscription.pull = function(options) {
        assert.strictEqual(options.returnImmediately, false);
        done();
      };
      subscription.startPulling_();
    });

    it('should emit an error event if one is encountered', function(done) {
      var error = new Error('Error.');
      subscription.pull = function(options, callback) {
        subscription.pull = function() {};
        setImmediate(function() {
          callback(error);
        });
      };
      subscription
        .once('error', function(err) {
          assert.equal(err, error);
          done();
        })
        .startPulling_();
    });

    it('should emit a message event', function(done) {
      subscription.pull = function(options, callback) {
        callback(null, { hi: 'there' });
      };
      subscription
        .once('message', function(msg) {
          assert.deepEqual(msg, { hi: 'there' });
          done();
        });
    });
  });

  describe('delete', function() {
    it('should delete a subscription', function(done) {
      subscription.makeReq_ = function(method, path) {
        assert.equal(method, 'DELETE');
        assert.equal(path, 'subscriptions/' + subscription.name);
        done();
      };
      subscription.delete();
    });

    it('should close a subscription once deleted', function() {
      subscription.makeReq_ = function(method, path, qs, body, callback) {
        callback();
      };
      subscription.closed = false;
      subscription.delete();
      assert.strictEqual(subscription.closed, true);
    });

    it('should remove all listeners', function(done) {
      subscription.makeReq_ = function(method, path, qs, body, callback) {
        callback();
      };
      subscription.removeAllListeners = function() {
        done();
      };
      subscription.delete();
    });

    it('should execute callback when deleted', function(done) {
      subscription.makeReq_ = function(method, path, qs, body, callback) {
        callback();
      };
      subscription.delete(done);
    });

    it('should execute callback with an api error', function(done) {
      var error = new Error('Error.');
      subscription.makeReq_ = function(method, path, qs, body, callback) {
        callback(error);
      };
      subscription.delete(function(err) {
        assert.equal(err, error);
        done();
      });
    });
  });

  describe('formatMessage_', function() {
    it('should decode stringified JSON to object', function() {
      var obj = { hi: 'there' };
      var stringified = new Buffer(JSON.stringify(obj)).toString('base64');
      var msg = Subscription.formatMessage_({
        ackId: 3,
        pubsubEvent: { message: { data: stringified } }
      });
      assert.deepEqual(msg, { id: 3, data: obj });
    });

    it('should decode buffer to string', function() {
      var msg = Subscription.formatMessage_(messageObj);
      assert.deepEqual(msg, expectedMessage);
    });
  });
});
