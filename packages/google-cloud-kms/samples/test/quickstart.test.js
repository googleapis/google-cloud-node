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

'use strict';

const {describe, it, before, beforeEach, afterEach} = require('mocha');
const {assert} = require('chai');

const {KeyManagementServiceClient} = require('@google-cloud/kms');
const client = new KeyManagementServiceClient();

const locationId = 'us-east1';
const originalConsoleLog = console.log;

describe('Cloud KMS samples', () => {
  let projectId;
  before(async () => {
    projectId = await client.getProjectId();
  });

  beforeEach(async () => {
    console.log = () => {};
  });

  afterEach(async () => {
    console.log = originalConsoleLog;
  });

  it('quickstarts', async () => {
    const sample = require('../quickstart');
    const keyRings = await sample.main(projectId, locationId);

    assert.isNotEmpty(keyRings);
  });
});
