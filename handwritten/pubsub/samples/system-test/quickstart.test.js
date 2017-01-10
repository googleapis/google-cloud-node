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

require(`../../system-test/_setup`);

const proxyquire = require(`proxyquire`).noPreserveCache();
const pubsub = proxyquire(`@google-cloud/pubsub`, {})();
const uuid = require(`uuid`);

const topicName = `nodejs-docs-samples-test-${uuid.v4()}`;
const projectId = process.env.GCLOUD_PROJECT;
const fullTopicName = `projects/${projectId}/topics/${topicName}`;

test.before(stubConsole);
test.after.always(() => {
  restoreConsole();
  return pubsub.topic(topicName).delete().catch(() => {});
});

test.cb(`should create a topic`, (t) => {
  const expectedTopicName = `my-new-topic`;
  const pubsubMock = {
    createTopic: (_topicName) => {
      t.is(_topicName, expectedTopicName);

      return pubsub.createTopic(topicName)
        .then(([topic]) => {
          t.is(topic.name, fullTopicName);

          setTimeout(() => {
            try {
              t.is(console.log.callCount, 1);
              t.deepEqual(console.log.getCall(0).args, [`Topic ${topic.name} created.`]);
              t.end();
            } catch (err) {
              t.end(err);
            }
          }, 200);

          return [topic];
        });
    }
  };

  proxyquire(`../quickstart`, {
    '@google-cloud/pubsub': sinon.stub().returns(pubsubMock)
  });
});
