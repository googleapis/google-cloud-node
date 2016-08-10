// Copyright 2016, Google, Inc.
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

var proxyquire = require('proxyquire').noCallThru();
var topicName = 'foo';

function getSample () {
  var topicMock = {
    get: sinon.stub(),
    publish: sinon.stub().callsArgWith(1, null, [1]),
    delete: sinon.stub().callsArgWith(0, null)
  };
  topicMock.get.callsArgWith(1, null, topicMock);
  var topicsMock = [
    {
      name: topicName
    }
  ];

  var pubsubMock = {
    topic: sinon.stub().returns(topicMock),
    getTopics: sinon.stub().callsArgWith(0, null, topicsMock)
  };
  var gcloudMock = {
    pubsub: sinon.stub().returns(pubsubMock)
  };
  return {
    program: proxyquire('../topics', {
      gcloud: gcloudMock
    }),
    mocks: {
      gcloud: gcloudMock,
      pubsub: pubsubMock,
      topics: topicsMock,
      topic: topicMock
    }
  };
}

describe('pubsub:topics', function () {
  describe('create', function () {
    it('should create a topic', function () {
      var sample = getSample();
      sample.program.create(topicName, function (err, topic) {
        assert.ifError(err);
        assert.strictEqual(topic, sample.mocks.topic);
        assert(console.log.calledWith('Created topic: %s', topicName));
      });
    });
    it('should require name', function () {
      var sample = getSample();
      sample.program.create(undefined, function (err, topic) {
        assert(err);
        assert(err.message = '"name" is required!');
        assert.equal(topic, undefined);
      });
    });
    it('should handle error', function () {
      var sample = getSample();
      var error = 'error';
      sample.mocks.topic.get.callsArgWith(1, new Error(error));
      sample.program.create(topicName, function (err) {
        assert(err);
        assert(err.message === 'error');
      });
    });
  });

  describe('delete', function () {
    it('should delete a topic', function () {
      var sample = getSample();
      sample.program.delete(topicName, function (err) {
        assert.ifError(err);
        assert(console.log.calledWith('Deleted topic: %s', topicName));
      });
    });
    it('should require name', function () {
      var sample = getSample();
      sample.program.delete(undefined, function (err, topic) {
        assert(err);
        assert(err.message = '"name" is required!');
        assert.equal(topic, undefined);
      });
    });
    it('should handle error', function () {
      var sample = getSample();
      var error = 'error';
      sample.mocks.topic.delete.callsArgWith(0, new Error(error));
      sample.program.delete(topicName, function (err) {
        assert(err);
        assert(err.message === 'error');
      });
    });
  });

  describe('publish', function () {
    it('should publish a message', function () {
      var sample = getSample();
      sample.program.publish(topicName, '{"data":"hello world"}', function (err, messageIds) {
        assert.ifError(err);
        assert.deepEqual(messageIds, [1]);
        assert(console.log.calledWith('Published %d messages!', messageIds.length));
      });
    });
    it('should require name', function () {
      var sample = getSample();
      sample.program.publish(undefined, undefined, function (err, messageIds) {
        assert(err);
        assert(err.message = '"name" is required!');
        assert.equal(messageIds, undefined);
      });
    });
    it('should require message', function () {
      var sample = getSample();
      sample.program.publish(topicName, undefined, function (err, messageIds) {
        assert(err);
        assert(err.message = '"message" is required!');
        assert.equal(messageIds, undefined);
      });
    });
    it('should require a valid JSON string', function () {
      var sample = getSample();
      sample.program.publish(topicName, 'asdf', function (err, messageIds) {
        assert(err);
        assert(err.message = '"message" must be a valid JSON string!');
        assert.equal(messageIds, undefined);
      });
    });
    it('should handle error', function () {
      var sample = getSample();
      var error = 'error';
      sample.mocks.topic.publish.callsArgWith(1, new Error(error));
      sample.program.publish(topicName, '{"data":"hello world"}', function (err, messageIds) {
        assert(err);
        assert(err.message === 'error');
        assert.equal(messageIds, undefined);
      });
    });
  });

  describe('list', function () {
    it('should list topics', function () {
      var sample = getSample();
      sample.program.list(function (err, topics) {
        assert.ifError(err);
        assert.strictEqual(topics, sample.mocks.topics);
        assert(console.log.calledWith('Found %d topics!', topics.length));
      });
    });
    it('should handle error', function () {
      var sample = getSample();
      var error = 'error';
      sample.mocks.pubsub.getTopics.callsArgWith(0, new Error(error));
      sample.program.list(function (err, topics) {
        assert(err);
        assert(err.message === 'error');
        assert.equal(topics, undefined);
      });
    });
  });

  describe('printUsage', function () {
    it('should print usage', function () {
      var program = getSample().program;

      program.printUsage();

      assert(console.log.calledWith('Usage: node topics COMMAND [ARGS...]'));
      assert(console.log.calledWith('\nCommands:\n'));
      assert(console.log.calledWith('\tcreate TOPIC_NAME'));
      assert(console.log.calledWith('\tdelete TOPIC_NAME'));
      assert(console.log.calledWith('\tpublish TOPIC_NAME MESSAGE'));
      assert(console.log.calledWith('\tlist'));
      assert(console.log.calledWith('\nExamples:\n'));
      assert(console.log.calledWith('\tnode topics create my-topic'));
      assert(console.log.calledWith('\tnode topics list'));
      assert(console.log.calledWith('\tnode topics publish my-topic \'{"data":"Hello world!"}\''));
      assert(console.log.calledWith('\tnode topics delete my-topic'));
    });
  });

  describe('main', function () {
    it('should call the right commands', function () {
      var program = getSample().program;

      sinon.stub(program, 'create');
      program.main(['create']);
      assert(program.create.calledOnce);

      sinon.stub(program, 'delete');
      program.main(['delete']);
      assert(program.delete.calledOnce);

      sinon.stub(program, 'list');
      program.main(['list']);
      assert(program.list.calledOnce);

      sinon.stub(program, 'publish');
      program.main(['publish']);
      assert(program.publish.calledOnce);

      sinon.stub(program, 'printUsage');
      program.main(['--help']);
      assert(program.printUsage.calledOnce);
    });
  });
});
