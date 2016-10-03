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

const proxyquire = require(`proxyquire`).noPreserveCache();
const pubsub = proxyquire(`@google-cloud/pubsub`, {})();
const uuid = require(`node-uuid`);

const topicName = `nodejs-docs-samples-test-${uuid.v4()}`;
const projectId = process.env.GCLOUD_PROJECT;
const fullTopicName = `projects/${projectId}/topics/${topicName}`;

describe(`pubsub:quickstart`, () => {
  let pubsubMock, PubSubMock;

  after((done) => {
    pubsub.topic(topicName).delete(() => {
      // Ignore any error, the topic might not have been created
      done();
    });
  });

  it(`should create a topic`, (done) => {
    const expectedTopicName = `my-new-topic`;

    pubsubMock = {
      createTopic: (_topicName, _callback) => {
        assert.equal(_topicName, expectedTopicName);
        assert.equal(typeof _callback, 'function');

        pubsub.createTopic(topicName, (err, topic, apiResponse) => {
          _callback(err, topic, apiResponse);
          assert.ifError(err);
          assert.notEqual(topic, undefined);
          assert.equal(topic.name, fullTopicName);
          assert.notEqual(apiResponse, undefined);
          assert.equal(console.log.calledOnce, true);
          assert.deepEqual(console.log.firstCall.args, [`Topic ${topic.name} created.`]);
          done();
        });
      }
    };
    PubSubMock = sinon.stub().returns(pubsubMock);

    proxyquire(`../quickstart`, {
      '@google-cloud/pubsub': PubSubMock
    });
  });
});
