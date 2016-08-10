// Copyright 2015-2016, Google, Inc.
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

var uuid = require('node-uuid');
var program = require('../topics');
var topicName = 'nodejs-docs-samples-test-' + uuid.v4();
var projectId = process.env.GCLOUD_PROJECT;
var name = 'projects/' + projectId + '/topics/' + topicName;

describe('pubsub:topics', function () {
  describe('create', function () {
    it('should create a topic', function (done) {
      program.create(topicName, function (err, topic) {
        assert.ifError(err);
        assert.equal(topic.name, name);
        assert(console.log.calledWith('Created topic: %s', topicName));
        done();
      });
    });
  });

  describe('list', function () {
    it('should list topics', function (done) {
      program.list(function (err, topics) {
        assert.ifError(err);
        assert(Array.isArray(topics));
        assert(topics.length > 0);
        var recentlyCreatedTopics = topics.filter(function (topic) {
          return topic.name === name;
        });
        assert.equal(recentlyCreatedTopics.length, 1, 'list has newly created topic');
        assert(console.log.calledWith('Found %d topics!', topics.length));
        done();
      });
    });
  });

  describe('publish', function () {
    it('should publish a message', function (done) {
      var json = '{"data":"Hello World!"}';
      program.publish(topicName, json, function (err, messageIds) {
        assert.ifError(err);
        assert(Array.isArray(messageIds));
        assert(messageIds.length > 0);
        assert(console.log.calledWith('Published %d messages!', messageIds.length));
        done();
      });
    });
  });

  describe('delete', function () {
    it('should delete a topic', function (done) {
      program.delete(topicName, function (err) {
        assert.ifError(err);
        assert(console.log.calledWith('Deleted topic: %s', topicName));
        done();
      });
    });
  });
});
