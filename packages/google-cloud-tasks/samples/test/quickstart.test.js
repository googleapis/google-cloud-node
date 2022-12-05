// Copyright 2018 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

const assert = require('assert');
const {describe, it, before} = require('mocha');
const {execSync} = require('child_process');
const {CloudTasksClient} = require('@google-cloud/tasks').v2;
const client = new CloudTasksClient();

describe('Cloud Task Sample Tests', async () => {
  let projectId;

  before(async () => {
    projectId = await client.getProjectId();
  });

  it('quickstart sample should list tasks', async () => {
    const stdout = execSync(
      `node quickstart.js projects/${projectId}/locations/us-central1`
    );
    assert.ok(stdout !== null);
  });
});
