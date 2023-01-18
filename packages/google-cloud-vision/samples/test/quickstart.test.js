// Copyright 2017 Google LLC
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

const {assert} = require('chai');
const {describe, it} = require('mocha');
const cp = require('child_process');
// Imports the Vision library
const {ProductSearchClient} = require('@google-cloud/vision').v1p4beta1;
const visionClient = new ProductSearchClient();

const execSync = cmd => cp.execSync(cmd, {encoding: 'utf-8'});

describe('quickstart', async () => {
  let projectId;
  before(async () => {
    projectId = await visionClient.getProjectId();
  });
  it('should detect labels in a remote file', async () => {
    const stdout = execSync(
      `node quickstart.js projects/${projectId}/locations/us-west1`
    );
    assert.ok(stdout != null);
  });
});
