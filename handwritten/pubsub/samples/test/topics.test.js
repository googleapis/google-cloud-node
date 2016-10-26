/**
 * Copyright 2016, Google, Inc.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

const proxyquire = require(`proxyquire`).noCallThru();

describe(`pubsub:topics`, () => {
  it(`should handle errors`, () => {
    const topicName = `foo`;
    const error = new Error(`error`);
    const callback = sinon.spy();
    const topicMock = {
      publish: sinon.stub().yields(error),
      delete: sinon.stub().yields(error),
      iam: {
        getPolicy: sinon.stub().yields(error),
        setPolicy: sinon.stub().yields(error),
        testPermissions: sinon.stub().yields(error)
      }
    };
    const pubsubMock = {
      topic: sinon.stub().returns(topicMock),
      getTopics: sinon.stub().yields(error),
      createTopic: sinon.stub().yields(error)
    };
    const PubSubMock = sinon.stub().returns(pubsubMock);
    const program = proxyquire(`../topics`, {
      '@google-cloud/pubsub': PubSubMock
    });

    program.createTopic(topicName, callback);
    program.deleteTopic(topicName, callback);
    program.publishMessage(topicName, {}, callback);
    program.publishOrderedMessage(topicName, {}, callback);
    program.listTopics(callback);
    program.getTopicPolicy(topicName, callback);
    program.setTopicPolicy(topicName, callback);
    program.testTopicPermissions(topicName, callback);

    assert.equal(callback.callCount, 8);
    assert.equal(callback.alwaysCalledWithExactly(error), true);
  });
});
