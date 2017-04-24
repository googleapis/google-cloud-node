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

const logging = require(`@google-cloud/logging`)();
const storage = require(`@google-cloud/storage`)();
const test = require(`ava`);
const tools = require(`@google-cloud/nodejs-repo-tools`);
const uuid = require(`uuid`);

const program = require(`../sinks`);

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

test.beforeEach(tools.stubConsole);
test.afterEach.always(tools.restoreConsole);

test.cb.serial(`should create a new sink`, (t) => {
  program.createSink(sinkName, bucketName, filter, (err, sink, apiResponse) => {
    t.ifError(err);
    t.truthy(sink);
    t.is(sink.name, sinkName);
    t.not(apiResponse, undefined);
    t.end();
  });
});

test.cb.serial(`should get the metadata for a sink`, (t) => {
  const expected = {
    name: sinkName,
    destination: `storage.googleapis.com/${bucketName}`,
    filter: filter,
    outputVersionFormat: `V2`,
    writerIdentity: `serviceAccount:cloud-logs@system.gserviceaccount.com`
  };

  program.getSinkMetadata(sinkName, (err, metadata) => {
    t.ifError(err);
    for (let key in expected) {
      t.is(metadata[key], expected[key]);
    }
    t.end();
  });
});

test.serial(`should list sinks`, async (t) => {
  await tools.tryTest(async () => {
    await new Promise((resolve, reject) => {
      program.listSinks((err, sinks) => {
        try {
          t.ifError(err);
          t.true(Array.isArray(sinks));
          t.true(sinks.some((sink) => sink.name === sinkName));
          resolve();
        } catch (err) {
          reject(err);
        }
      });
    });
  }).start();
});

test.cb.serial(`should update metdata for a sink`, (t) => {
  const newFilter = `severity > ALERT`;
  const expected = {
    name: sinkName,
    destination: `storage.googleapis.com/${bucketName}`,
    filter: newFilter,
    outputVersionFormat: `V2`,
    writerIdentity: `serviceAccount:cloud-logs@system.gserviceaccount.com`
  };

  program.updateSink(sinkName, newFilter, (err, apiResponse) => {
    t.ifError(err);
    t.not(apiResponse, undefined);

    program.getSinkMetadata(sinkName, (err, metadata) => {
      t.ifError(err);
      for (let key in expected) {
        t.is(metadata[key], expected[key]);
      }
      t.end();
    });
  });
});

test.cb.serial(`should delete a sink`, (t) => {
  program.deleteSink(sinkName, (err, apiResponse) => {
    t.ifError(err);
    t.not(apiResponse, undefined);

    program.getSinkMetadata(sinkName, (err) => {
      t.truthy(err);
      t.true(err.code === 404 || err.code === 5);
      t.end();
    });
  });
});
