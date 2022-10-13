// Copyright 2020 Google LLC
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
//

'use strict';

const path = require('path');
const {assert} = require('chai');
const cp = require('child_process');
const {describe, it, before} = require('mocha');
const {
  DashboardsServiceClient,
} = require('@google-cloud/monitoring-dashboards');

// Creates a client
const ds = new DashboardsServiceClient();
const execSync = cmd => cp.execSync(cmd, {encoding: 'utf-8'});

const cwd = path.join(__dirname, '..');

describe('Sample Integration Tests', () => {
  let projectId;
  before(async () => {
    projectId = await ds.getProjectId();
  });
  it('should run quickstart.js', async () => {
    const stdout = execSync(`node ./quickstart.js projects/${projectId}`, {
      cwd,
    });
    // build should have exited with success status.
    assert.include(stdout, 'Listing Dashboards');
  });
});
