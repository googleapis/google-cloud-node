// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

const path = require('path');
const {assert} = require('chai');
const {describe, it, before} = require('mocha');
const cp = require('child_process');
const {CloudBuildClient} = require('@google-cloud/cloudbuild');
const cb = new CloudBuildClient();

const execSync = cmd => cp.execSync(cmd, {encoding: 'utf-8'});

const cwd = path.join(__dirname, '..');

// Use list-build-triggers.js to figure out the ID of the trigger
// you would like to execute.
const TRIGGER_ID =
  process.env.TRIGGER || 'c9033094-51a9-44c5-b3a0-1d882deb4464';

describe('Sample Integration Tests', () => {
  let projectId;

  before(async () => {
    projectId = await cb.getProjectId();
  });
  it('should run quickstart.js', async () => {
    const stdout = execSync(
      `node ./quickstart.js ${projectId} ${TRIGGER_ID} cloud-build-mvp`,
      {cwd}
    );
    // build should have exited with success status.
    assert.include(stdout, 'status: Success');
  });
});
