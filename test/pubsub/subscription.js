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

/*global describe, it */

'use strict';

var assert = require('assert');
var util = require('../../lib/common/util.js');
var Subscription = require('../../lib/pubsub/subscription.js');

describe('PubSub/Subscription', function() {
  function getSubscription(config, makeReqOverride) {
    if (typeof config === 'string') {
      config = { name: config };
    }
    config.pubsub = {
      id: 'test-project',
      makeReq: makeReqOverride || util.noop
    };
    config.topic = {
      name: 'topic'
    };
    return new Subscription(config);
  }

  it('should ack messages if autoAck is set', function() {
    var acked = false;
    function makeReqOverride(method, path, qs, body, callback) {
      if (path === 'subscriptions') {
        callback(null);
        return;
      }
      if (path === 'subscriptions/pull') {
        callback(null, { ackId: 'ackd-id' });
        return;
      }
      if (path === 'subscriptions/acknowledge') {
        acked = true;
      }
    }
    var config = {
      name: 'sub',
      autoAck: true,
      autoCreate: false
    };
    var sub = getSubscription(config, makeReqOverride);
    sub.pull({}, function() {});
    assert.strictEqual(acked, true);
  });

  it('should be closed', function() {
    var sub = getSubscription('sub');
    sub.close();
    assert.strictEqual(sub.closed, true);
  });

  it('should pull messages', function(done) {
    var message = { ackId: 123 };
    function makeReqOverride(method, path, qs, body, callback) {
      if ('subscriptions/pull') {
        callback(null, message);
        return;
      }
    }
    var config = { name: 'sub', autoAck: false, exists: true };
    var sub = getSubscription(config, makeReqOverride);
    sub.once('message', function(messageObj) {
      assert.equal(messageObj, message);
      done();
    });
  });

  it('should pull and ack messages', function(done) {
    var message = { ackId: 123 };
    function makeReqOverride(method, path, qs, body, callback) {
      if (path === 'subscriptions/pull') {
        setTimeout(callback.bind(null, null, message), 1);
        return;
      }
      if (path === 'subscriptions/acknowledge') {
        callback(null, true);
        return;
      }
    }
    var config = {
      name: 'sub',
      autoAck: true,
      autoCreate: false
    };
    var sub = getSubscription(config, makeReqOverride);
    sub.once('message', function() {
      done();
    });
  });

  it('should attempt to get by default', function() {
    function makeReqOverride(method, path, qs, body, callback) {
      if (method === 'GET' &&
          path === 'subscriptions//subscriptions/test-project/hi') {
        callback(null);
      }
    }
    var sub = getSubscription({ name: 'hi' }, makeReqOverride);
    assert.strictEqual(sub.exists_, true);
  });

  it('should not attempt to create or get when specified not to', function() {
    var attemptedToCreate = false;
    var attemptedToGet = false;
    function makeReqOverride(method, path, qs, body, callback) {
      if (method === 'GET' &&
          path === 'subscriptions//subscriptions/test-project/hi') {
        attemptedToGet = true;
        callback();
        return;
      }
      if (method === 'POST' && path === 'subscriptions') {
        attemptedToCreate = true;
        callback();
        return;
      }
    }
    var config = {
      name: '/subscriptions/test-project/hi',
      autoCreate: false
    };
    var sub = getSubscription(config, makeReqOverride);
    assert.strictEqual(attemptedToCreate, false);
    assert.strictEqual(attemptedToGet, false);
    assert.strictEqual(sub.exists_, true);
  });

  it('should delete and re-create when ackDeadlineSeconds do not match',
    function() {
    var attemptedToRecreate = false;
    var attemptedToDelete = false;
    var attemptedToGet = false;
    function makeReqOverride(method, path, qs, body, callback) {
      if (method === 'GET' &&
          path === 'subscriptions//subscriptions/test-project/hi') {
        attemptedToGet = true;
        callback(null, { ackDeadlineSeconds: 60 });
        return;
      }
      if (method === 'DELETE') {
        attemptedToDelete = true;
        callback();
        return;
      }
      if (method === 'POST' && path === 'subscriptions' &&
          body.ackDeadlineSeconds === 30) {
        attemptedToRecreate = true;
        callback();
        return;
      }
    }
    var config = {
      name: '/subscriptions/test-project/hi',
      ackDeadlineSeconds: 30
    };
    var sub = getSubscription(config, makeReqOverride);
    assert.strictEqual(attemptedToRecreate, true);
    assert.strictEqual(attemptedToDelete, true);
    assert.strictEqual(attemptedToGet, true);
    assert.strictEqual(sub.exists_, true);
  });
});
