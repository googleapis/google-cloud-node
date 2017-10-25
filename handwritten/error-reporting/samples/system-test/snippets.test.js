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

const cwd = path.join(__dirname, `..`);
const cmd = `node snippets.js`;

test.before(tools.checkCredentials);

test.serial(`should setup using implicit credentials`, async (t) => {
  t.plan(0);
  // There's no output, the command should just succeed
  await tools.runAsync(`${cmd} setup-implicit`, cwd);
});

test.serial(`should report errors manually`, async (t) => {
  const output = await tools.runAsync(`${cmd} manual`, cwd);
  t.is(output.includes('Done reporting error event!'), true);
  t.is(output.includes('Done reporting Error object!'), true);
  t.is(output.includes('Done reporting error string!'), true);
});
