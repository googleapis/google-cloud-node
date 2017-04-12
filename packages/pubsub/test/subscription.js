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

'use strict';

var assert = require('assert');
var extend = require('extend');
var GrpcServiceObject = require('@google-cloud/common-grpc').ServiceObject;
var nodeutil = require('util');
var proxyquire = require('proxyquire');
var util = require('@google-cloud/common').util;

var promisified = false;
var fakeUtil = extend({}, util, {
  promisifyAll: function(Class) {
    if (Class.name === 'Subscription') {
      promisified = true;
    }
  }
});

function FakeGrpcServiceObject() {
  this.calledWith_ = arguments;
  GrpcServiceObject.apply(this, arguments);
}

nodeutil.inherits(FakeGrpcServiceObject, GrpcServiceObject);

function FakeIAM() {
  this.calledWith_ = [].slice.call(arguments);
}

function FakeSnapshot() {
  this.calledWith_ = arguments;
}

var formatMessageOverride;

describe('Subscription', function() {
  var Subscription;
  var subscription;

  var PROJECT_ID = 'test-project';
  var SUB_NAME = 'test-subscription';
  var SUB_FULL_NAME = 'projects/' + PROJECT_ID + '/subscriptions/' + SUB_NAME;
  var PUBSUB = {
    projectId: PROJECT_ID,
    request: util.noop
  };
  var message = 'howdy';
  var messageBuffer = new Buffer(message).toString('base64');
  var messageBinary = new Buffer(message).toString('binary');
  var messageObj = {
    receivedMessages: [{
      ackId: 'abc',
      message: {
        data: messageBuffer,
        messageId: 7
      }
    }]
  };
  var expectedMessage = {
    ackId: 'abc',
    data: message,
    id: 7
  };
  var expectedMessageAsBinary = {
    ackId: 'abc',
    data: messageBinary,
    id: 7
  };

  before(function() {
    Subscription = proxyquire('../src/subscription.js', {
      '@google-cloud/common': {
        util: fakeUtil
      },
      '@google-cloud/common-grpc': {
        ServiceObject: FakeGrpcServiceObject
      },
      './iam.js': FakeIAM,
      './snapshot.js': FakeSnapshot
    });

    var formatMessage = Subscription.formatMessage_;
    Subscription.formatMessage_ = function() {
      return (formatMessageOverride || formatMessage).apply(null, arguments);
    };
  });

  beforeEach(function() {
    subscription = new Subscription(PUBSUB, { name: SUB_NAME });
  });

  afterEach(function() {
    formatMessageOverride = null;
  });

  describe('initialization', function() {
    it('should promisify all the things', function() {
      assert(promisified);
    });

    describe('name', function() {
      var FORMATTED_NAME = 'formatted-name';
      var GENERATED_NAME = 'generated-name';

      var formatName_;
      var generateName_;

      before(function() {
        formatName_ = Subscription.formatName_;
        generateName_ = Subscription.generateName_;

        Subscription.formatName_ = function() {
          return FORMATTED_NAME;
        };

        Subscription.generateName_ = function() {
          return GENERATED_NAME;
        };
      });

      afterEach(function() {
        Subscription.formatName_ = function() {
          return FORMATTED_NAME;
        };

        Subscription.generateName_ = function() {
          return GENERATED_NAME;
        };
      });

      after(function() {
        Subscription.formatName_ = formatName_;
        Subscription.generateName_ = generateName_;
      });

      it('should generate name', function(done) {
        Subscription.formatName_ = function(projectId, name) {
          assert.strictEqual(name, GENERATED_NAME);
          done();
        };

        new Subscription(PUBSUB, {});
      });

      it('should format name', function() {
        Subscription.formatName_ = function(projectId, name) {
          assert.strictEqual(projectId, PROJECT_ID);
          assert.strictEqual(name, SUB_NAME);
          return FORMATTED_NAME;
        };

        var subscription = new Subscription(PUBSUB, { name: SUB_NAME });
        assert.strictEqual(subscription.name, FORMATTED_NAME);
      });
    });

    it('should honor configuration settings', function() {
      var CONFIG = {
        name: SUB_NAME,
        autoAck: true,
        interval: 100,
        maxInProgress: 3,
        encoding: 'binary',
        timeout: 30000
      };
      var sub = new Subscription(PUBSUB, CONFIG);
      assert.strictEqual(sub.autoAck, CONFIG.autoAck);
      assert.strictEqual(sub.interval, CONFIG.interval);
      assert.strictEqual(sub.encoding, CONFIG.encoding);
      assert.strictEqual(sub.maxInProgress, CONFIG.maxInProgress);
      assert.strictEqual(sub.timeout, CONFIG.timeout);
    });

    it('should be closed', function() {
      assert.strictEqual(subscription.closed, true);
    });

    it('should default autoAck to false if not specified', function() {
      assert.strictEqual(subscription.autoAck, false);
    });

    it('should set default interval if one is not specified', function() {
      assert.equal(subscription.interval, 10);
    });

    it('should start inProgressAckIds as an empty object', function() {
      assert.deepEqual(subscription.inProgressAckIds, {});
    });

    it('should default maxInProgress to Infinity if not specified', function() {
      assert.strictEqual(subscription.maxInProgress, Infinity);
    });

    it('should set messageListeners to 0', function() {
      assert.strictEqual(subscription.messageListeners, 0);
    });

    it('should not be paused', function() {
      assert.strictEqual(subscription.paused, false);
    });

    it('should default encoding to utf-8 if not specified', function() {
      assert.strictEqual(subscription.encoding, 'utf-8');
    });

    it('should default timeout to 92 seconds', function() {
      assert.strictEqual(subscription.timeout, 92000);
    });

    it('should create an iam object', function() {
      assert.deepEqual(subscription.iam.calledWith_, [
        PUBSUB,
        SUB_FULL_NAME
      ]);
    });

    it('should inherit from GrpcServiceObject', function() {
      assert(subscription instanceof GrpcServiceObject);

      var calledWith = subscription.calledWith_[0];

      assert.strictEqual(calledWith.parent, PUBSUB);
      assert.strictEqual(calledWith.id, SUB_FULL_NAME);
      assert.deepEqual(calledWith.methods, {
        exists: true,
        get: true,
        getMetadata: {
          protoOpts: {
            service: 'Subscriber',
            method: 'getSubscription'
          },
          reqOpts: {
            subscription: subscription.name
          }
        }
      });
    });

    it('should allow creating if it is a Topic', function(done) {
      var topicInstance = {};

      var pubSubInstance = extend({}, PUBSUB, {
        subscribe: {
          bind: function(context, topic) {
            assert.strictEqual(context, pubSubInstance);
            assert.strictEqual(topic, topicInstance);
            done();
          }
        }
      });

      var subscription = new Subscription(pubSubInstance, {
        name: SUB_NAME,
        topic: topicInstance
      });
      assert(subscription instanceof GrpcServiceObject);

      var calledWith = subscription.calledWith_[0];
      assert.deepEqual(calledWith.methods.create, true);
    });
  });

  describe('formatMessage_', function() {
    it('should decode stringified JSON to object', function() {
      var obj = { hi: 'there' };
      var stringified = new Buffer(JSON.stringify(obj)).toString('base64');
      var attributes = {};
      var publishTime = {
        seconds: '1480413405',
        nanos: 617000000
      };

      var seconds = parseInt(publishTime.seconds, 10);
      var milliseconds = parseInt(publishTime.nanos, 10) / 1e6;
      var expectedDate = new Date(seconds * 1000 + milliseconds);

      var msg = Subscription.formatMessage_({
        ackId: 'abc',
        message: {
          data: stringified,
          messageId: 7,
          attributes: attributes,
          publishTime: publishTime
        }
      });

      assert.deepEqual(msg, {
        ackId: 'abc',
        id: 7,
        data: obj,
        attributes: attributes,
        timestamp: expectedDate
      });
    });

    it('should work if nanos is 0', function() {
      var obj = { hi: 'there' };
      var stringified = new Buffer(JSON.stringify(obj)).toString('base64');
      var attributes = {};
      var publishTime = {
        seconds: '1480413405',
        nanos: 0
      };

      var seconds = parseInt(publishTime.seconds, 10);
      var milliseconds = parseInt(publishTime.nanos, 10) / 1e6;
      var expectedDate = new Date(seconds * 1000 + milliseconds);

      var msg = Subscription.formatMessage_({
        ackId: 'abc',
        message: {
          data: stringified,
          messageId: 7,
          attributes: attributes,
          publishTime: publishTime
        }
      });

      assert.deepEqual(msg, {
        ackId: 'abc',
        id: 7,
        data: obj,
        attributes: attributes,
        timestamp: expectedDate
      });
    });

    it('should decode buffer to string', function() {
      var msg = Subscription.formatMessage_(messageObj.receivedMessages[0]);
      assert.deepEqual(msg, expectedMessage);
    });

    it('should decode buffer to specified encoding', function() {
      var msg = Subscription
        .formatMessage_(messageObj.receivedMessages[0], 'binary');
      assert.deepEqual(msg, expectedMessageAsBinary);
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

  describe('ack', function() {
    it('should throw if no IDs are provided', function() {
      assert.throws(function() {
        subscription.ack();
      }, /At least one ID must be specified before it can be acknowledged\./);
      assert.throws(function() {
        subscription.ack([]);
      }, /At least one ID must be specified before it can be acknowledged\./);
    });

    it('should accept a single id', function() {
      assert.doesNotThrow(function() {
        subscription.request = util.noop;
        subscription.ack(1, util.noop);
      });
    });

    it('should accept an array of ids', function() {
      assert.doesNotThrow(function() {
        subscription.request = util.noop;
        subscription.ack([1], util.noop);
      });
    });

    it('should make an array out of ids', function(done) {
      var ID = 'abc';

      subscription.request = function(protoOpts, reqOpts) {
        assert.deepEqual(reqOpts.ackIds, [ID]);
        done();
      };

      subscription.ack(ID, assert.ifError);
    });

    it('should make correct api request', function(done) {
      var IDS = [1, 2, 3];

      subscription.request = function(protoOpts, reqOpts) {
        assert.strictEqual(protoOpts.service, 'Subscriber');
        assert.strictEqual(protoOpts.method, 'acknowledge');

        assert.strictEqual(reqOpts.subscription, subscription.name);
        assert.strictEqual(reqOpts.ackIds, IDS);

        done();
      };

      subscription.ack(IDS, assert.ifError);
    });

    it('should honor the timeout setting', function(done) {
      var options = {
        timeout: 10
      };

      subscription.request = function(protoOpts) {
        assert.strictEqual(protoOpts.timeout, options.timeout);
        done();
      };

      subscription.ack('abc', options, assert.ifError);
    });

    it('should not require a callback', function() {
      assert.doesNotThrow(function() {
        subscription.ack('abc');
        subscription.ack('abc', {
          timeout: 10
        });
      });
    });

    it('should unmark the ack ids as being in progress', function(done) {
      subscription.request = function(protoOpts, reqOpts, callback) {
        callback();
      };

      subscription.inProgressAckIds = { id1: true, id2: true, id3: true };

      subscription.ack(['id1', 'id2'], function(err) {
        assert.ifError(err);

        var inProgressAckIds = subscription.inProgressAckIds;
        assert.strictEqual(inProgressAckIds.id1, undefined);
        assert.strictEqual(inProgressAckIds.id2, undefined);
        assert.strictEqual(inProgressAckIds.id3, true);

        done();
      });
    });

    it('should not unmark if there was an error', function(done) {
      subscription.request = function(protoOpts, reqOpts, callback) {
        callback(new Error('Error.'));
      };

      subscription.inProgressAckIds = { id1: true, id2: true, id3: true };

      subscription.ack(['id1', 'id2'], function() {
        var inProgressAckIds = subscription.inProgressAckIds;
        assert.strictEqual(inProgressAckIds.id1, true);
        assert.strictEqual(inProgressAckIds.id2, true);
        assert.strictEqual(inProgressAckIds.id3, true);

        done();
      });
    });

    it('should refresh paused status', function(done) {
      subscription.request = function(protoOpts, reqOpts, callback) {
        callback();
      };

      subscription.refreshPausedStatus_ = done;

      subscription.ack(1, assert.ifError);
    });

    it('should pass error to callback', function(done) {
      var error = new Error('Error.');

      subscription.request = function(protoOpts, reqOpts, callback) {
        callback(error);
      };

      subscription.ack(1, function(err) {
        assert.strictEqual(err, error);
        done();
      });
    });

    it('should pass apiResponse to callback', function(done) {
      var resp = { success: true };
      subscription.request = function(protoOpts, reqOpts, callback) {
        callback(null, resp);
      };
      subscription.ack(1, function(err, apiResponse) {
        assert.deepEqual(resp, apiResponse);
        done();
      });
    });
  });

  describe('createSnapshot', function() {
    var SNAPSHOT_NAME = 'a';

    it('should throw if a name is not provided', function() {
      assert.throws(function() {
        subscription.createSnapshot();
      }, /A name is required to create a snapshot\./);
    });

    it('should make the correct api request', function(done) {
      var FULL_SNAPSHOT_NAME = 'a/b/c/d';

      FakeSnapshot.formatName_ = function(projectId, name) {
        assert.strictEqual(projectId, PROJECT_ID);
        assert.strictEqual(name, SNAPSHOT_NAME);
        return FULL_SNAPSHOT_NAME;
      };

      subscription.request = function(protoOpts, reqOpts) {
        assert.strictEqual(protoOpts.service, 'Subscriber');
        assert.strictEqual(protoOpts.method, 'createSnapshot');

        assert.strictEqual(reqOpts.name, FULL_SNAPSHOT_NAME);
        assert.strictEqual(reqOpts.subscription, subscription.name);

        done();
      };

      subscription.createSnapshot(SNAPSHOT_NAME, assert.ifError);
    });

    it('should return an error to the callback', function(done) {
      var error = new Error('err');
      var resp = {};

      subscription.request = function(protoOpts, reqOpts, callback) {
        callback(error, resp);
      };

      function callback(err, snapshot, apiResponse) {
        assert.strictEqual(err, error);
        assert.strictEqual(snapshot, null);
        assert.strictEqual(apiResponse, resp);
        done();
      }

      subscription.createSnapshot(SNAPSHOT_NAME, callback);
    });

    it('should return a snapshot object to the callback', function(done) {
      var fakeSnapshot = {};
      var resp = {};

      subscription.request = function(protoOpts, reqOpts, callback) {
        callback(null, resp);
      };

      subscription.snapshot = function(name) {
        assert.strictEqual(name, SNAPSHOT_NAME);
        return fakeSnapshot;
      };

      function callback(err, snapshot, apiResponse) {
        assert.strictEqual(err, null);
        assert.strictEqual(snapshot, fakeSnapshot);
        assert.strictEqual(snapshot.metadata, resp);
        assert.strictEqual(apiResponse, resp);
        done();
      }

      subscription.createSnapshot(SNAPSHOT_NAME, callback);
    });
  });

  describe('delete', function() {
    it('should delete a subscription', function(done) {
      subscription.request = function(protoOpts, reqOpts) {
        assert.strictEqual(protoOpts.service, 'Subscriber');
        assert.strictEqual(protoOpts.method, 'deleteSubscription');

        assert.strictEqual(reqOpts.subscription, subscription.name);

        done();
      };

      subscription.delete();
    });

    it('should close a subscription once deleted', function() {
      subscription.request = function(protoOpts, reqOpts, callback) {
        callback();
      };
      subscription.closed = false;
      subscription.delete();
      assert.strictEqual(subscription.closed, true);
    });

    it('should remove all listeners', function(done) {
      subscription.request = function(protoOpts, reqOpts, callback) {
        callback();
      };
      subscription.removeAllListeners = function() {
        done();
      };
      subscription.delete();
    });

    it('should execute callback when deleted', function(done) {
      subscription.request = function(protoOpts, reqOpts, callback) {
        callback();
      };
      subscription.delete(done);
    });

    it('should execute callback with an api error', function(done) {
      var error = new Error('Error.');
      subscription.request = function(protoOpts, reqOpts, callback) {
        callback(error);
      };
      subscription.delete(function(err) {
        assert.equal(err, error);
        done();
      });
    });

    it('should execute callback with apiResponse', function(done) {
      var resp = { success: true };
      subscription.request = function(protoOpts, reqOpts, callback) {
        callback(null, resp);
      };
      subscription.delete(function(err, apiResponse) {
        assert.deepEqual(resp, apiResponse);
        done();
      });
    });
  });

  describe('pull', function() {
    beforeEach(function() {
      subscription.ack = util.noop;
      subscription.request = function(protoOpts, reqOpts, callback) {
        callback(null, messageObj);
      };
    });

    it('should not require configuration options', function(done) {
      subscription.pull(done);
    });

    it('should default returnImmediately to false', function(done) {
      subscription.request = function(protoOpts, reqOpts) {
        assert.strictEqual(reqOpts.returnImmediately, false);
        done();
      };
      subscription.pull({}, assert.ifError);
    });

    it('should honor options', function(done) {
      subscription.request = function(protoOpts, reqOpts) {
        assert.strictEqual(reqOpts.returnImmediately, true);
        done();
      };
      subscription.pull({ returnImmediately: true }, assert.ifError);
    });

    it('should make correct api request', function(done) {
      subscription.request = function(protoOpts, reqOpts) {
        assert.strictEqual(protoOpts.service, 'Subscriber');
        assert.strictEqual(protoOpts.method, 'pull');
        assert.strictEqual(protoOpts.timeout, 92000);

        assert.strictEqual(reqOpts.subscription, subscription.name);
        assert.strictEqual(reqOpts.returnImmediately, false);
        assert.strictEqual(reqOpts.maxMessages, 1);

        done();
      };

      subscription.pull({ maxResults: 1 }, assert.ifError);
    });

    it('should pass a timeout if specified', function(done) {
      var timeout = 30000;

      var subscription = new Subscription(PUBSUB, {
        name: SUB_NAME,
        timeout: timeout
      });

      subscription.request = function(protoOpts) {
        assert.strictEqual(protoOpts.timeout, 30000);
        done();
      };

      subscription.pull(assert.ifError);
    });

    it('should store the active request', function() {
      var requestInstance = {};

      subscription.request = function() {
        return requestInstance;
      };

      subscription.pull(assert.ifError);
      assert.strictEqual(subscription.activeRequest_, requestInstance);
    });

    it('should clear the active request', function(done) {
      var requestInstance = {};

      subscription.request = function(protoOpts, reqOpts, callback) {
        setImmediate(function() {
          callback(null, {});
          assert.strictEqual(subscription.activeRequest_, null);
          done();
        });

        return requestInstance;
      };

      subscription.pull(assert.ifError);
    });

    it('should pass error to callback', function(done) {
      var error = new Error('Error.');
      subscription.request = function(protoOpts, reqOpts, callback) {
        callback(error);
      };
      subscription.pull(function(err) {
        assert.equal(err, error);
        done();
      });
    });

    it('should not return messages if request timed out', function(done) {
      subscription.request = function(protoOpts, reqOpts, callback) {
        callback({ code: 504 });
      };

      subscription.pull({}, function(err, messages) {
        assert.ifError(err);
        assert.deepEqual(messages, []);
        done();
      });
    });

    it('should call formatMessage_ with encoding', function(done) {
      subscription.encoding = 'encoding-value';

      formatMessageOverride = function(msg, encoding) {
        assert.strictEqual(msg, messageObj.receivedMessages[0]);
        assert.strictEqual(encoding, subscription.encoding);
        setImmediate(done);
        return msg;
      };

      subscription.pull({}, assert.ifError);
    });

    it('should decorate the message', function(done) {
      subscription.decorateMessage_ = function() {
        done();
      };

      subscription.pull({}, assert.ifError);
    });

    it('should refresh paused status', function(done) {
      subscription.refreshPausedStatus_ = function() {
        done();
      };

      subscription.pull({}, assert.ifError);
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
        subscription.decorateMessage_ = function(msg) { return msg; };
        subscription.pull({}, function(err, msgs) {
          assert.ifError(err);
          assert.deepEqual(msgs, [expectedMessage]);
          done();
        });
      });

      it('should pass apiResponse to callback', function(done) {
        subscription.pull(function(err, msgs, apiResponse) {
          assert.ifError(err);
          assert.strictEqual(apiResponse, messageObj);
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

      it('should not autoAck if no messages returned', function(done) {
        subscription.request = function(protoOpts, reqOpts, callback) {
          callback(null, { receivedMessages: [] });
        };
        subscription.ack = function() {
          throw new Error('I should not run.');
        };
        subscription.pull(function() {
          done();
        });
      });

      it('should pass id to ack', function(done) {
        subscription.ack = function(id) {
          assert.equal(id, expectedMessage.ackId);
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

      it('should return pull response as apiResponse', function(done) {
        var resp = {
          receivedMessages: [{
            ackId: 1,
            message: {
              messageId: 'abc',
              data: new Buffer('message').toString('base64')
            }
          }]
        };

        subscription.ack = function(id, callback) {
          callback(null, { success: true });
        };

        subscription.request = function(protoOpts, reqOpts, callback) {
          callback(null, resp);
        };

        subscription.pull({}, function(err, msgs, apiResponse) {
          assert.deepEqual(resp, apiResponse);
          done();
        });
      });
    });
  });

  describe('seek', function() {
    it('should throw if a name or date is not provided', function() {
      assert.throws(function() {
        subscription.seek();
      }, /Either a snapshot name or Date is needed to seek to\./);
    });

    it('should make the correct api request', function(done) {
      var FAKE_SNAPSHOT_NAME = 'a';
      var FAKE_FULL_SNAPSHOT_NAME = 'a/b/c/d';

      FakeSnapshot.formatName_ = function(projectId, name) {
        assert.strictEqual(projectId, PROJECT_ID);
        assert.strictEqual(name, FAKE_SNAPSHOT_NAME);
        return FAKE_FULL_SNAPSHOT_NAME;
      };

      subscription.request = function(protoOpts, reqOpts, callback) {
        assert.strictEqual(protoOpts.service, 'Subscriber');
        assert.strictEqual(protoOpts.method, 'seek');

        assert.strictEqual(reqOpts.subscription, subscription.name);
        assert.strictEqual(reqOpts.snapshot, FAKE_FULL_SNAPSHOT_NAME);

        // done function
        callback();
      };

      subscription.seek(FAKE_SNAPSHOT_NAME, done);
    });

    it('should optionally accept a Date object', function(done) {
      var date = new Date();

      subscription.request = function(protoOpts, reqOpts, callback) {
        var seconds = Math.floor(date.getTime() / 1000);
        assert.strictEqual(reqOpts.time.seconds, seconds);

        var nanos = date.getMilliseconds() * 1e6;
        assert.strictEqual(reqOpts.time.nanos, nanos);

        // done function
        callback();
      };

      subscription.seek(date, done);
    });
  });

  describe('setAckDeadline', function() {
    it('should set the ack deadline', function(done) {
      subscription.request = function(protoOpts, reqOpts) {
        assert.strictEqual(protoOpts.service, 'Subscriber');
        assert.strictEqual(protoOpts.method, 'modifyAckDeadline');

        assert.deepEqual(reqOpts, {
          subscription: subscription.name,
          ackIds: ['abc'],
          ackDeadlineSeconds: 10
        });

        done();
      };

      subscription.setAckDeadline({ ackIds: ['abc'], seconds: 10 }, done);
    });

    it('should execute the callback', function(done) {
      subscription.request = function(protoOpts, reqOpts, callback) {
        callback();
      };
      subscription.setAckDeadline({}, done);
    });

    it('should execute the callback with apiResponse', function(done) {
      var resp = { success: true };
      subscription.request = function(protoOpts, reqOpts, callback) {
        callback(null, resp);
      };
      subscription.setAckDeadline({}, function(err, apiResponse) {
        assert.deepEqual(resp, apiResponse);
        done();
      });
    });
  });

  describe('snapshot', function() {
    it('should call through to pubsub#snapshot', function() {
      var FAKE_SNAPSHOT_NAME = 'a';
      var FAKE_SNAPSHOT = {};

      PUBSUB.snapshot = function(name) {
        assert.strictEqual(this, subscription);
        assert.strictEqual(name, FAKE_SNAPSHOT_NAME);
        return FAKE_SNAPSHOT;
      };

      var snapshot = subscription.snapshot(FAKE_SNAPSHOT_NAME);
      assert.strictEqual(snapshot, FAKE_SNAPSHOT);
    });
  });

  describe('decorateMessage_', function() {
    var message = {
      ackId: 'b'
    };

    it('should return the message', function() {
      var decoratedMessage = subscription.decorateMessage_(message);
      assert.strictEqual(decoratedMessage.ackId, message.ackId);
    });

    it('should mark the message as being in progress', function() {
      subscription.decorateMessage_(message);
      assert.strictEqual(subscription.inProgressAckIds[message.ackId], true);
    });

    describe('ack', function() {
      it('should add an ack function to ack', function() {
        var decoratedMessage = subscription.decorateMessage_(message);
        assert.equal(typeof decoratedMessage.ack, 'function');
      });

      it('should pass the ackId to subscription.ack', function(done) {
        subscription.ack = function(ackId, callback) {
          assert.strictEqual(ackId, message.ackId);
          callback();
        };

        subscription.decorateMessage_(message).ack(done);
      });
    });

    describe('skip', function() {
      it('should add a skip function', function() {
        var decoratedMessage = subscription.decorateMessage_(message);
        assert.equal(typeof decoratedMessage.skip, 'function');
      });

      it('should unmark the message as being in progress', function() {
        subscription.decorateMessage_(message).skip();

        var inProgressAckIds = subscription.inProgressAckIds;
        assert.strictEqual(inProgressAckIds[message.ackId], undefined);
      });

      it('should refresh the paused status', function(done) {
        subscription.refreshPausedStatus_ = done;
        subscription.decorateMessage_(message).skip();
      });
    });
  });

  describe('refreshPausedStatus_', function() {
    it('should pause if the ackIds in progress is too high', function() {
      subscription.inProgressAckIds = { id1: true, id2: true, id3: true };

      subscription.maxInProgress = 2;
      subscription.refreshPausedStatus_();
      assert.strictEqual(subscription.paused, true);

      subscription.maxInProgress = 3;
      subscription.refreshPausedStatus_();
      assert.strictEqual(subscription.paused, true);

      subscription.maxInProgress = Infinity;
      subscription.refreshPausedStatus_();
      assert.strictEqual(subscription.paused, false);
    });

    it('should start pulling if paused and listeners exist', function(done) {
      subscription.startPulling_ = done;

      subscription.inProgressAckIds = { id1: true, id2: true, id3: true };
      subscription.paused = true;
      subscription.maxInProgress = Infinity;
      subscription.messageListeners = 1;
      subscription.refreshPausedStatus_();
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

    it('should track the number of listeners', function() {
      subscription.startPulling_ = util.noop;

      assert.strictEqual(subscription.messageListeners, 0);

      subscription.on('message', util.noop);
      assert.strictEqual(subscription.messageListeners, 1);

      subscription.removeListener('message', util.noop);
      assert.strictEqual(subscription.messageListeners, 0);
    });

    it('should only run a single pulling loop', function() {
      var startPullingCallCount = 0;

      subscription.startPulling_ = function() {
        startPullingCallCount++;
      };

      subscription.on('message', util.noop);
      subscription.on('message', util.noop);

      assert.strictEqual(startPullingCallCount, 1);
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

    it('should abort the HTTP request when listeners removed', function(done) {
      subscription.startPulling_ = util.noop;

      subscription.activeRequest_ = {
        abort: done
      };

      subscription.on('message', util.noop);
      subscription.removeAllListeners();
    });
  });

  describe('startPulling_', function() {
    beforeEach(function() {
      subscription.pull = util.noop;
    });

    it('should not pull if subscription is closed', function() {
      subscription.pull = function() {
        throw new Error('Should not be called.');
      };

      subscription.closed = true;
      subscription.startPulling_();
    });

    it('should not pull if subscription is paused', function() {
      subscription.pull = function() {
        throw new Error('Should not be called.');
      };

      subscription.paused = true;
      subscription.startPulling_();
    });

    it('should set returnImmediately to false when pulling', function(done) {
      subscription.pull = function(options) {
        assert.strictEqual(options.returnImmediately, false);
        done();
      };

      subscription.closed = false;
      subscription.startPulling_();
    });

    it('should not set maxResults if no maxInProgress is set', function(done) {
      subscription.pull = function(options) {
        assert.strictEqual(options.maxResults, undefined);
        done();
      };

      subscription.closed = false;
      subscription.startPulling_();
    });

    it('should set maxResults properly with maxInProgress', function(done) {
      subscription.pull = function(options) {
        assert.strictEqual(options.maxResults, 1);
        done();
      };

      subscription.closed = false;
      subscription.maxInProgress = 4;
      subscription.inProgressAckIds = { id1: true, id2: true, id3: true };
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

      subscription.closed = false;
      subscription
        .once('error', function(err) {
          assert.equal(err, error);
          done();
        })
        .startPulling_();
    });

    it('should emit an error event with apiResponse', function(done) {
      var error = new Error('Error.');
      var resp = { success: false };
      subscription.pull = function(options, callback) {
        subscription.pull = function() {};
        setImmediate(function() {
          callback(error, null, resp);
        });
      };

      subscription.closed = false;
      subscription
        .once('error', function(err, apiResponse) {
          assert.equal(err, error);
          assert.deepEqual(resp, apiResponse);
          done();
        })
        .startPulling_();
    });

    it('should emit a message event', function(done) {
      subscription.pull = function(options, callback) {
        callback(null, [{ hi: 'there' }]);
      };

      subscription
        .once('message', function(msg) {
          assert.deepEqual(msg, { hi: 'there' });
          done();
        });
    });

    it('should emit a message event with apiResponse', function(done) {
      var resp = { success: true, msgs: [{ hi: 'there' }] };
      subscription.pull = function(options, callback) {
        callback(null, [{ hi: 'there' }], resp);
      };
      subscription
        .once('message', function(msg, apiResponse) {
          assert.deepEqual(resp, apiResponse);
          done();
        });
    });

    it('should pull at specified interval', function(done) {
      var INTERVAL = 5;
      subscription.pull = function(options, callback) {
        assert.strictEqual(options.returnImmediately, false);
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

      subscription.closed = false;
      subscription.interval = INTERVAL;
      subscription.startPulling_();
    });
  });
});
