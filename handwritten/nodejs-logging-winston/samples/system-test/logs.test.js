// Copyright 2015-2016, Google, Inc.
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

require(`../../system-test/_setup`);

const uuid = require(`uuid`);
const program = require(`../logs`);

const logName = `nodejs-docs-samples-test-${uuid.v4()}`;
const projectId = process.env.GCLOUD_PROJECT;
const filter = `resource.type="global" AND logName="projects/${projectId}/logs/${logName}"`;
const message = `Hello world!`;

test.beforeEach(stubConsole);
test.afterEach.always(restoreConsole);

test.cb.serial(`should write a log entry`, (t) => {
  const options = {
    resource: {
      type: `global`
    },
    entry: {
      message: message
    }
  };

  program.writeLogEntryAdvanced(logName, options, (err, apiResponse) => {
    t.ifError(err);
    t.not(apiResponse, undefined);
    t.end();
  });
});

test.serial(`should list log entries`, async (t) => {
  await tryTest(async () => {
    await new Promise((resolve, reject) => {
      program.listLogEntriesAdvanced(filter, 5, null, (err, entries) => {
        try {
          t.ifError(err);
          t.true(Array.isArray(entries));
          t.true(entries.some((entry) => entry.data && entry.data.message === message));
          resolve();
        } catch (err) {
          reject(err);
        }
      });
    });
  }).start();
});

test.cb.serial(`should delete a log`, (t) => {
  program.deleteLog(logName, (err, apiResponse) => {
    // Ignore "Not Found" error
    if (err && err.code !== 404) {
      t.ifError(err);
      t.not(apiResponse, undefined);
    }
    t.end();
  });
});
