// Copyright 2020 Google LLC
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
const assert = require('assert');
const {execSync} = require('child_process');
const {describe, it, before} = require('mocha');
const cwd = path.join(__dirname, '..');
const {ApiGatewayServiceClient} = require('@google-cloud/api-gateway');
const client = new ApiGatewayServiceClient();

describe('Quickstart', () => {
  let projectId;
  before(async () => {
    projectId = await client.getProjectId();
  });
  it('should run quickstart', async () => {
    const stdout = execSync(`node ./quickstart.js ${projectId}`, {
      cwd,
    }).toString('utf8');
    assert(stdout.match(/name: projects.*/));
  });
});
