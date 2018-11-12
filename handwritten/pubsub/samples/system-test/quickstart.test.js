/**
 * Copyright 2017, Google, Inc.
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

const proxyquire = require('proxyquire').noPreserveCache();
const {PubSub} = proxyquire('@google-cloud/pubsub', {});
const sinon = require('sinon');
const assert = require('assert');
const tools = require('@google-cloud/nodejs-repo-tools');
const uuid = require('uuid');

const projectId = process.env.GCLOUD_PROJECT;
const pubsub = new PubSub({projectId});

const topicName = `nodejs-docs-samples-test-${uuid.v4()}`;
const fullTopicName = `projects/${projectId}/topics/${topicName}`;

before(tools.stubConsole);
after(async () => {
  tools.restoreConsole();
  return await pubsub
    .topic(topicName)
    .delete()
    .catch(() => {});
});

it(`should create a topic`, async () => {
  const expectedTopicName = `my-topic`;
  const pubsubMock = {
    createTopic: _topicName => {
      assert.strictEqual(_topicName, expectedTopicName);
      return pubsub.createTopic(topicName).then(([topic]) => {
        assert.strictEqual(topic.name, fullTopicName);
        setTimeout(() => {
          try {
            assert.strictEqual(console.log.callCount, 1);
            assert.deepStrictEqual(console.log.getCall(0).args, [
              `Topic ${topic.name} created.`,
            ]);
          } catch (err) {}
        }, 200);
        return [topic];
      });
    },
  };

  proxyquire(`../quickstart`, {
    '@google-cloud/pubsub': {
      PubSub: sinon.stub().returns(pubsubMock),
    },
  });
});
