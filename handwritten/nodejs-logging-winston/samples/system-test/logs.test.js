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
const test = require(`ava`);
const tools = require(`@google-cloud/nodejs-repo-tools`);
const uuid = require(`uuid`);

const cwd = path.join(__dirname, `..`);
const cmd = `node logs.js`;

const logName = `nodejs-docs-samples-test-${uuid.v4()}`;
const message = `Hello world!`;

test.before(tools.checkCredentials);

test.serial(`should write a log entry`, async (t) => {
  const output = await tools.runAsync(`${cmd} write ${logName} '{"type":"global"}' '{"message":"${message}"}'`, cwd);
  t.is(output, `Wrote to ${logName}`);
});

test.serial(`should write a simple log entry`, async (t) => {
  const output = await tools.runAsync(`${cmd} write-simple ${logName}`, cwd);
  t.is(output, `Wrote to ${logName}`);
});
