// Copyright 2021 Google LLC
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

const compute = require('@google-cloud/compute');

const {describe, it} = require('mocha');
const cp = require('child_process');
const {assert} = require('chai');

const instancesClient = new compute.InstancesClient({fallback: 'rest'});

const execSync = cmd => cp.execSync(cmd, {encoding: 'utf-8'});

describe('samples', () => {
  it('should print all instances list', async () => {
    const projectId = await instancesClient.getProjectId();
    const output = execSync(`node quickstart.js ${projectId}`);
    assert.match(output, /Instances found:/);
  });
});
