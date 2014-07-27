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

var assert = require('assert'),
    async = require('async');

var env = require('./env.js'),
    gcloud = require('../lib');

var topicNames = ['topic1', 'topic2', 'topic3'];
var subscriptions = [];

var conn = new gcloud.pubsub.Connection({
  projectId: env.projectId,
  email:  env.serviceAccount,
  pemFilePath: env.pemKey,
});


describe('Topic', function() {

  before(function(done) {
    // TODO: Handle pagination.
    var createFn = function(name, callback) {
      conn.createTopic(name, callback);
    };
    conn.listTopics(function(err, topics) {
      if (err) { done(err); }
      var fns = [];
      for (var i=0; i<topics.length; i++) {
        fns[i] = function(t) {
          return function(done) {
            t.del(done);
          }
        }(topics[i]);
      }
      async.parallel(fns, function(err) {
        if (err) { done(err); }
        async.map(topicNames, createFn, done);
      });
    })
  });

  it('should be listed', function(done) {
    // TODO(jbd): Add pagination.
    conn.listTopics(function(err, topics) {
      assert(topics.length, 3);
      done(err);
    });
  });

  it('should be created', function(done) {
    conn.createTopic('topic4', done);
  });

  it('should be gettable', function(done) {
    conn.getTopic('topic1', done);
  });

  it('should publish a message', function(done) {
    conn.getTopic('topic1', function(err, topic) {
      topic.publish('message from me', done);
    });
  });

  it('should be deleted', function(done) {
    conn.getTopic('topic1', function(err, topic) {
      topic.del(done);
    });
  });

});

describe('Subscription', function() {

  it('should be listed', function() {

  });

  it('should get a subscription', function() {

  });

  it('should create a subscription', function() {

  });

});