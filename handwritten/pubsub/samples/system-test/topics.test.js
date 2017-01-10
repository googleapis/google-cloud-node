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

const pubsub = require(`@google-cloud/pubsub`)();
const uuid = require(`uuid`);
const path = require(`path`);

const cwd = path.join(__dirname, `..`);
const topicNameOne = `nodejs-docs-samples-test-${uuid.v4()}`;
const topicNameTwo = `nodejs-docs-samples-test-${uuid.v4()}`;
const subscriptionNameOne = `nodejs-docs-samples-test-${uuid.v4()}`;
const subscriptionNameTwo = `nodejs-docs-samples-test-${uuid.v4()}`;
const projectId = process.env.GCLOUD_PROJECT;
const fullTopicNameOne = `projects/${projectId}/topics/${topicNameOne}`;
const message = { data: `Hello, world!` };
const cmd = `node topics.js`;

test.before(async () => {
  try {
    await pubsub.createTopic(topicNameTwo);
  } catch (err) {} // ignore error
});

test.after.always(async () => {
  try {
    await pubsub.subscription(subscriptionNameOne).delete();
  } catch (err) {} // ignore error
  try {
    await pubsub.topic(topicNameOne).delete();
  } catch (err) {} // ignore error
  try {
    await pubsub.subscription(subscriptionNameTwo).delete();
  } catch (err) {} // ignore error
  try {
    await pubsub.topic(topicNameTwo).delete();
  } catch (err) {} // ignore error
});

test.serial(`should create a topic`, async (t) => {
  const output = await runAsync(`${cmd} create ${topicNameOne}`, cwd);
  t.is(output, `Topic ${fullTopicNameOne} created.`);
  const [exists] = await pubsub.topic(topicNameOne).exists();
  t.true(exists);
});

test.serial(`should list topics`, async (t) => {
  await tryTest(async () => {
    const output = await runAsync(`${cmd} list`, cwd);
    t.true(output.includes(`Topics:`));
    t.true(output.includes(fullTopicNameOne));
  }).start();
});

test.serial(`should publish a simple message`, async (t) => {
  const [subscription] = await pubsub.topic(topicNameOne).subscribe(subscriptionNameOne);
  await runAsync(`${cmd} publish ${topicNameOne} "${message.data}"`, cwd);
  const [messages] = await subscription.pull();
  t.is(messages[0].data, message.data);
});

test.serial(`should publish a JSON message`, async (t) => {
  const [subscription] = await pubsub.topic(topicNameOne).subscribe(subscriptionNameOne);
  await runAsync(`${cmd} publish ${topicNameOne} '${JSON.stringify(message)}'`, cwd);
  const [messages] = await subscription.pull();
  t.deepEqual(messages[0].data, message);
});

test.serial(`should publish ordered messages`, async (t) => {
  const topics = require(`../topics`);

  const [subscription] = await pubsub.topic(topicNameTwo).subscribe(subscriptionNameTwo);
  let messageIds = await topics.publishOrderedMessage(topicNameTwo, message.data);
  let [messages] = await subscription.pull();
  t.is(messages[0].id, messageIds[0]);
  t.is(messages[0].data, message.data);
  t.is(messages[0].attributes.counterId, '1');
  messageIds = await topics.publishOrderedMessage(topicNameTwo, message.data);
  [messages] = await subscription.pull();
  t.is(messages[0].id, messageIds[0]);
  t.is(messages[0].data, message.data);
  t.is(messages[0].attributes.counterId, '2');
  await topics.publishOrderedMessage(topicNameTwo, message.data);
});

test.serial(`should set the IAM policy for a topic`, async (t) => {
  await runAsync(`${cmd} set-policy ${topicNameOne}`, cwd);
  const results = await pubsub.topic(topicNameOne).iam.getPolicy();
  const policy = results[0];
  t.deepEqual(policy.bindings, [
    {
      role: `roles/pubsub.editor`,
      members: [`group:cloud-logs@google.com`]
    },
    {
      role: `roles/pubsub.viewer`,
      members: [`allUsers`]
    }
  ]);
});

test.serial(`should get the IAM policy for a topic`, async (t) => {
  const [policy] = await pubsub.topic(topicNameOne).iam.getPolicy();
  const output = await runAsync(`${cmd} get-policy ${topicNameOne}`, cwd);
  t.is(output, `Policy for topic: ${JSON.stringify(policy.bindings)}.`);
});

test.serial(`should test permissions for a topic`, async (t) => {
  const output = await runAsync(`${cmd} test-permissions ${topicNameOne}`, cwd);
  t.true(output.includes(`Tested permissions for topic`));
});

test.serial(`should delete a topic`, async (t) => {
  const output = await runAsync(`${cmd} delete ${topicNameOne}`, cwd);
  t.is(output, `Topic ${fullTopicNameOne} deleted.`);
  const [exists] = await pubsub.topic(topicNameOne).exists();
  t.false(exists);
});
