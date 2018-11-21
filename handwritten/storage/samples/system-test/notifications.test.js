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

const path = require(`path`);
const {PubSub} = require('@google-cloud/pubsub');
const {Storage} = require(`@google-cloud/storage`);
const assert = require('assert');
const tools = require(`@google-cloud/nodejs-repo-tools`);
const uuid = require(`uuid`);

const storage = new Storage();
const cwd = path.join(__dirname, `..`);
const bucketName = `nodejs-storage-samples-${uuid.v4()}`;
const bucket = storage.bucket(bucketName);
const notificationId = '1';
const notification = bucket.notification(notificationId);
const topicName = `nodejs-storage-samples-${uuid.v4()}`;
const pubsub = new PubSub();
const topic = pubsub.topic(topicName);
const cmd = `node notifications.js`;

before(async () => {
  await bucket.create();
  await topic.create();
  await topic.iam.setPolicy({
    bindings: [
      {
        role: 'roles/pubsub.editor',
        members: ['allUsers'],
      },
    ],
  });
});

after(async () => {
  try {
    await bucket.delete();
  } catch (e) {}

  try {
    await topic.delete();
  } catch (e) {}
});

beforeEach(tools.stubConsole);
afterEach(tools.restoreConsole);

it(`should create a notification`, async () => {
  const results = await tools.runAsyncWithIO(
    `${cmd} create ${bucketName} ${topicName}`,
    cwd
  );
  assert.strictEqual(
    (results.stdout + results.stderr).includes(
      `Notification subscription created.`
    ),
    true
  );
  const [exists] = await notification.exists();
  assert.strictEqual(exists, true);
});

it(`should list notifications`, async () => {
  await tools
    .tryTest(async assert => {
      const results = await tools.runAsyncWithIO(
        `${cmd} list ${bucketName}`,
        cwd
      );
      const output = results.stdout + results.stderr;
      assert(
        output.includes(`Notifications:`),
        `"${output}" should include "Notifications:"`
      );
      assert(
        output.includes(notificationId),
        `"${output}" should include "${notificationId}"`
      );
    })
    .start();
});

it('should get metadata', async () => {
  await tools
    .tryTest(async assert => {
      const metadata = await notification.getMetadata();
      const results = await tools.runAsyncWithIO(
        `${cmd} get-metadata ${bucketName} ${notificationId}`,
        cwd
      );
      const output = results.stdout + results.stderr;
      assert(output.includes(`ID:`), `"${output}" should include "ID:"`);
      assert(
        output.includes(metadata.id),
        `"${output}" should include "${metadata.id}"`
      );
      assert(output.includes(`Topic:`), `"${output}" should include "Topic:"`);
      assert(
        output.includes(metadata.topic),
        `"${output}" should include "${metadata.topic}"`
      );
      assert(
        output.includes(`Event Types:`),
        `"${output}" should include "Event Types:"`
      );
      assert(
        output.includes(metadata.event_types),
        `"${output}" should include "${metadata.event_types}"`
      );
      assert(
        output.includes(`Custom Attributes:`),
        `"${output}" should include "Custom Attributes:"`
      );
      assert(
        output.includes(metadata.custom_attributes),
        `"${output}" should include "${metadata.custom_attributes}"`
      );
      assert(
        output.includes(`Payload Format:`),
        `"${output}" should include "Payload Format:"`
      );
      assert(
        output.includes(metadata.payload_format),
        `"${output}" should include "${metadata.payload_format}"`
      );
      assert(
        output.includes(`Object Name Prefix:`),
        `"${output}" should include "Object Name Prefix:"`
      );
      assert(
        output.includes(metadata.object_name_prefix),
        `"${output}" should include "${metadata.object_name_prefix}"`
      );
      assert(output.includes(`Etag:`), `"${output}" should include "Etag:"`);
      assert(
        output.includes(`Self Link:`),
        `"${output}" should include "Self Link:"`
      );
      assert(
        output.includes(metadata.selfLink),
        `"${output}" should include "${metadata.selfLink}"`
      );
      assert(output.includes(`Kind:`), `"${output}" should include "Kind:"`);
      assert(
        output.includes(metadata.kind),
        `"${output}" should include "${metadata.kind}"`
      );
    })
    .start();
});

it('should delete a notification', async () => {
  const results = await tools.runAsyncWithIO(
    `${cmd} delete ${bucketName} ${notificationId}`,
    cwd
  );
  assert.strictEqual(
    (results.stdout + results.stderr).includes(
      `Notification ${notificationId} deleted.`
    ),
    true
  );
  const [exists] = await notification.exists();
  assert.strictEqual(exists, false);
});
