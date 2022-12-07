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
const path = require('path');
const {describe, it, before} = require('mocha');
const cp = require('child_process');
const iot = require('@google-cloud/iot');
const client = new iot.v1.DeviceManagerClient();
const execSync = cmd => cp.execSync(cmd, {encoding: 'utf-8'});
const cwd = path.join(__dirname, '..');

describe('iot samples', () => {
  let projectId;

  before(async () => {
    projectId = await client.getProjectId();
  });

  it('should run the quickstart', async () => {
    const stdout = execSync(
      `node quickstart projects/${projectId}/locations/us-central1`,
      {cwd}
    );
    assert(stdout !== null);
  });
});
