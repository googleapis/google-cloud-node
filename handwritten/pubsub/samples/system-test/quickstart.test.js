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
  after(() => pubsub.topic(topicName).delete().catch(() => {}));

  it(`should create a topic`, (done) => {
    const expectedTopicName = `my-new-topic`;
    const pubsubMock = {
      createTopic: (_topicName) => {
        assert.equal(_topicName, expectedTopicName);

        return pubsub.createTopic(topicName)
          .then((results) => {
            const topic = results[0];
            assert.equal(topic.name, fullTopicName);

            setTimeout(() => {
              assert.equal(console.log.callCount, 1);
              assert.deepEqual(console.log.getCall(0).args, [`Topic ${topic.name} created.`]);
              done();
            }, 200);

            return results;
          });
      }
    };

    proxyquire(`../quickstart`, {
      '@google-cloud/pubsub': sinon.stub().returns(pubsubMock)
    });
  });
});
