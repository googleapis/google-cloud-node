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
const {describe, it, before} = require('mocha');
const cp = require('child_process');
const monitoring = require('@google-cloud/monitoring');

const client = new monitoring.AlertPolicyServiceClient();

const execSync = cmd => cp.execSync(cmd, {encoding: 'utf-8'});
// Tests in this suite can trigger the upstream error,
// "points were written more frequently than the maximum
//  sampling period configured for the metric":
const delay = async test => {
  const retries = test.currentRetry();
  if (retries === 0) return; // no retry on the first failure.
  // see: https://cloud.google.com/storage/docs/exponential-backoff:
  const ms = Math.pow(2, retries) * 250 + Math.random() * 1000;
  return new Promise(done => {
    console.info(`retrying "${test.title}" in ${ms}ms`);
    setTimeout(done, ms);
  });
};
describe('quickstart', () => {
  let projectId;
  before(async () => {
    projectId = await client.getProjectId();
  });
  it('should run the quickstart', async function () {
    this.retries(8);
    await delay(this.test); // delay the start of the test, if this is a retry.
    const result = execSync(`node quickstart.js ${projectId}`);
    assert.match(result, /Done writing time series data/);
  });
});
