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
var pubsub = require('../../lib/pubsub');

describe('Subscription', function() {
  it('should ack messages if autoAck is set', function(done) {
    var sub = new pubsub.Subscription({}, 'sub1');
    sub.autoAck = true;
    sub.conn.makeReq = function(method, path, qs, body, callback) {
      if (path === 'subscriptions/pull') {
        callback(null, { ackId: 'ackd-id' });
        return;
      }
      if (path === 'subscriptions/acknowledge') {
        done();
      }
    };
    sub.pull({}, function() {});
  });

  it('should be closed', function(done) {
    var sub = new pubsub.Subscription({}, 'sub1');
    sub.close();
    assert.strictEqual(sub.closed, true);
    done();
  });

  it('should pull messages', function(done) {
    var conn = new pubsub.Connection({
      projectId: 'test-project'
    });
    conn.makeReq = function(method, path, qs, body, callback) {
      switch (path) {
        case 'subscriptions//subscriptions/test-project/sub1':
          callback(null, {});
          return;
        case 'subscriptions/pull':
          callback(null, { ackId: 123 });
          return;
      }
    };
    var sub = conn.subscribe('sub1', { autoAck: false });
    sub.on('message', function() {
      done();
    });
  });

  it('should pull and ack messages', function(done) {
    var conn = new pubsub.Connection({
      projectId: 'test-project'
    });
    conn.makeReq = function(method, path, qs, body, callback) {
      switch (path) {
        case 'subscriptions//subscriptions/test-project/sub1':
          callback(null, {});
          return;
        case 'subscriptions/pull':
          setImmediate(function() {
            callback(null, { ackId: 123 });
          });
          return;
        case 'subscriptions/acknowledge':
          callback(null, true);
          return;
      }
    };
    var sub = conn.subscribe('sub1', { autoAck: true });
    sub.on('message', function() {
      done();
    });
  });
});
