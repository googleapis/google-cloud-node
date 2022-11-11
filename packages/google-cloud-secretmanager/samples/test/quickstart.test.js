// Copyright 2019 Google LLC
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
const cp = require('child_process');
const {v4} = require('uuid');

const {SecretManagerServiceClient} = require('@google-cloud/secret-manager');
const client = new SecretManagerServiceClient();

const secretId = v4();

const execSync = cmd => cp.execSync(cmd, {encoding: 'utf-8'});

describe('Secret Manager samples', () => {
  let projectId;
  before(async () => {
    projectId = await client.getProjectId();
  });

  it('runs the quickstart', async () => {
    const stdout = execSync(
      `node quickstart.js projects/${projectId} ${secretId}-quickstart bar`
    );
    assert(stdout !== null);
  });
});