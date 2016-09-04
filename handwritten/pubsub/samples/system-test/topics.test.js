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
var fullTopicName = 'projects/' + projectId + '/topics/' + topicName;
var message = { data: 'Hello, world!' };

describe('pubsub:topics', function () {
  describe('createTopic', function () {
    it('should create a topic', function (done) {
      program.createTopic(topicName, function (err, topic, apiResponse) {
        assert.ifError(err);
        assert.equal(topic.name, fullTopicName);
        assert(console.log.calledWith('Created topic: %s', topicName));
        assert.notEqual(apiResponse, undefined);
        // Listing is eventually consistent, so give the index time to update
        setTimeout(done, 5000);
      });
    });
  });

  describe('listTopics', function () {
    it('should list topics', function (done) {
      program.listTopics(function (err, topics) {
        assert.ifError(err);
        assert(Array.isArray(topics));
        assert(topics.length > 0);
        var recentlyCreatedTopics = topics.filter(function (topic) {
          return topic.name === fullTopicName;
        });
        assert.equal(recentlyCreatedTopics.length, 1, 'list has newly created topic');
        assert(console.log.calledWith('Found %d topics!', topics.length));
        done();
      });
    });
  });

  describe('publishMessage', function () {
    it('should publish a message', function (done) {
      program.publishMessage(topicName, message, function (err, messageIds, apiResponse) {
        assert.ifError(err);
        assert(Array.isArray(messageIds));
        assert(messageIds.length > 0);
        assert(console.log.calledWith('Published %d message(s)!', messageIds.length));
        assert.notEqual(apiResponse, undefined);
        done();
      });
    });
  });

  describe('deleteTopic', function () {
    it('should delete a topic', function (done) {
      program.deleteTopic(topicName, function (err, apiResponse) {
        assert.ifError(err);
        assert(console.log.calledWith('Deleted topic: %s', topicName));
        assert.notEqual(apiResponse, undefined);
        done();
      });
    });
  });
});
