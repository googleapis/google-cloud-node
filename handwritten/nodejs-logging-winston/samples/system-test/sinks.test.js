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

const logging = require('@google-cloud/logging')();
const path = require(`path`);
const storage = require('@google-cloud/storage')();
const test = require(`ava`);
const tools = require(`@google-cloud/nodejs-repo-tools`);
const uuid = require(`uuid`);

const cwd = path.join(__dirname, `..`);
const cmd = `node sinks.js`;

const bucketName = `nodejs-docs-samples-test-${uuid.v4()}`;
const sinkName = `nodejs-docs-samples-test-${uuid.v4()}`;
const filter = `severity > WARNING`;

test.before(tools.checkCredentials);
test.before(async (t) => {
  await storage.createBucket(bucketName);
});

test.after.always(async (t) => {
  try {
    await logging.sink(sinkName).delete();
  } catch (err) {} // ignore error
  try {
    await storage.bucket(bucketName).delete();
  } catch (err) {} // ignore error
});

test.serial(`should create a sink`, async (t) => {
  const output = await tools.runAsync(`${cmd} create ${sinkName} ${bucketName} "${filter}"`, cwd);
  t.is(output, `Created sink ${sinkName} to ${bucketName}`);
  const [metadata] = await logging.sink(sinkName).getMetadata();
  t.is(metadata.name, sinkName);
  t.is(metadata.destination.includes(bucketName), true);
  t.is(metadata.filter, filter);
});

test.serial(`should get a sink`, async (t) => {
  const output = await tools.runAsync(`${cmd} get ${sinkName}`, cwd);
  t.is(output.includes(sinkName), true);
});

test.serial(`should list sinks`, async (t) => {
  t.plan(0);
  await tools.tryTest(async (assert) => {
    const output = await tools.runAsync(`${cmd} list`, cwd);
    assert(output.includes(`Sinks:`));
    assert(output.includes(sinkName));
  }).start();
});

test.serial(`should update a sink`, async (t) => {
  const newFilter = 'severity >= WARNING';
  const output = await tools.runAsync(`${cmd} update ${sinkName} "${newFilter}"`, cwd);
  t.is(output, `Sink ${sinkName} updated.`);
  const [metadata] = await logging.sink(sinkName).getMetadata();
  t.is(metadata.name, sinkName);
  t.is(metadata.destination.includes(bucketName), true);
  t.is(metadata.filter, newFilter);
});

test.serial(`should delete a sink`, async (t) => {
  const output = await tools.runAsync(`${cmd} delete ${sinkName}`, cwd);
  t.is(output, `Sink ${sinkName} deleted.`);
  await t.throws(logging.sink(sinkName).getMetadata());
});
