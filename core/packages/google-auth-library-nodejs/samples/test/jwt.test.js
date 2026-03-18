// Copyright 2018 Google LLC
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

const cp = require('child_process');
const {assert} = require('chai');
const {describe, it} = require('mocha');
const fs = require('fs');
const {promisify} = require('util');

const execSync = (cmd, opts) => {
  return cp.execSync(cmd, Object.assign({encoding: 'utf-8'}, opts));
};

const readFile = promisify(fs.readFile);
const keyFile = process.env.GOOGLE_APPLICATION_CREDENTIALS;

describe('samples', () => {
  it('should acquire application default credentials', async () => {
    const output = execSync('node adc');
    assert.match(output, /DNS Info:/);
  });

  it('should create a JWT', async () => {
    const output = execSync('node jwt');
    assert.match(output, /DNS Info:/);
  });

  it('should read from a keyfile', async () => {
    const output = execSync('node keyfile');
    assert.match(output, /DNS Info:/);
  });

  it('should allow directly passing creds', async () => {
    const keys = JSON.parse(await readFile(keyFile, 'utf8'));
    const stdout = execSync('node credentials', {
      env: Object.assign({}, process.env, {
        CLIENT_EMAIL: keys.client_email,
        PRIVATE_KEY: keys.private_key,
      }),
    });
    assert.match(stdout, /DNS Info:/);
  });

  it('should obtain headers for a request', async () => {
    const output = execSync('node headers');
    assert.match(output, /Headers:/);
    assert.match(output, /DNS Info:/);
  });

  it('should fetch ID token for Cloud Run', async () => {
    // process.env.CLOUD_RUN_URL should be a cloud run service running
    // gcr.io/cloudrun/hello:
    const url =
      process.env.CLOUD_RUN_URL || 'https://hello-rftcw63abq-uc.a.run.app';
    const output = execSync(`node idtokens-serverless ${url}`);
    assert.match(output, /What's next?/);
  });

  it.skip('should fetch ID token for IAP', async () => {
    // process.env.IAP_URL should be an App Engine app, protected with IAP:
    const url =
      process.env.IAP_URL || 'https://nodejs-docs-samples-iap.appspot.com';
    const targetAudience =
      process.env.IAP_CLIENT_ID ||
      '170454875485-fbn7jalc9214bb67lslv1pbvmnijrb20.apps.googleusercontent.com';
    const output = execSync(`node idtokens-iap ${url} ${targetAudience}`);
    assert.match(output, /Hello, world/);
  });

  it('should sign the blobs with IAM credentials API', () => {
    const out = execSync('node signBlob');
    assert.ok(out.length > 0);
  });
});
