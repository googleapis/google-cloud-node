/**
 * Copyright 2019 Google LLC
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

const {Storage} = require(`@google-cloud/storage`);
const {assert} = require('chai');
const cp = require('child_process');

const execSync = cmd => cp.execSync(cmd, {encoding: 'utf-8'});

const storage = new Storage();
const SERVICE_ACCOUNT_EMAIL = process.env.HMAC_KEY_TEST_SERVICE_ACCOUNT;
const SERVICE_ACCOUNT_PROJECT = process.env.HMAC_PROJECT;

describe('HMAC SA Key samples', () => {
  let hmacKey;

  before(async () => {
    await cleanUpHmacKeys(SERVICE_ACCOUNT_EMAIL, SERVICE_ACCOUNT_PROJECT);
    [hmacKey] = await storage.createHmacKey(SERVICE_ACCOUNT_EMAIL, {
      projectId: SERVICE_ACCOUNT_PROJECT,
    });
  });

  after(async () => {
    await cleanUpHmacKeys(SERVICE_ACCOUNT_EMAIL, SERVICE_ACCOUNT_PROJECT);
  });

  it('should create an HMAC Key', async () => {
    const output = execSync(
      `node hmacKeyCreate.js ${SERVICE_ACCOUNT_EMAIL} ${SERVICE_ACCOUNT_PROJECT}`
    );
    assert.include(output, 'The base64 encoded secret is:');
  });

  it('should list HMAC Keys', async () => {
    const output = execSync(`node hmacKeysList.js ${SERVICE_ACCOUNT_PROJECT}`);
    assert.include(output, `Service Account Email: ${SERVICE_ACCOUNT_EMAIL}`);
  });

  it('should get HMAC Key', async () => {
    const output = execSync(
      `node hmacKeyGet.js ${hmacKey.metadata.accessId} ${SERVICE_ACCOUNT_PROJECT}`
    );
    assert.include(output, 'The HMAC key metadata is:');
  });

  it('should deactivate HMAC Key', async () => {
    const output = execSync(
      `node hmacKeyDeactivate.js ${hmacKey.metadata.accessId} ${SERVICE_ACCOUNT_PROJECT}`
    );
    assert.include(output, 'The HMAC key is now inactive.');
  });

  it('should activate HMAC Key', async () => {
    const output = execSync(
      `node hmacKeyActivate.js ${hmacKey.metadata.accessId} ${SERVICE_ACCOUNT_PROJECT}`
    );
    assert.include(output, 'The HMAC key is now active.');
  });

  it(`should delete HMAC key`, async () => {
    // Deactivate then delete
    execSync(
      `node hmacKeyDeactivate.js ${hmacKey.metadata.accessId} ${SERVICE_ACCOUNT_PROJECT}`
    );
    const output = execSync(
      `node hmacKeyDelete.js ${hmacKey.metadata.accessId} ${SERVICE_ACCOUNT_PROJECT}`
    );
    assert.include(
      output,
      `The key is deleted, though it may still appear in getHmacKeys() results.`
    );
  });
});

async function cleanUpHmacKeys(serviceAccountEmail, projectId) {
  // list all HMAC keys for the given service account.
  const [hmacKeys] = await storage.getHmacKeys({
    projectId,
    serviceAccountEmail: serviceAccountEmail,
  });
  // deactivate and delete the key
  for (const hmacKey of hmacKeys) {
    if (hmacKey.metadata.state === 'ACTIVE') {
      await hmacKey.setMetadata({state: 'INACTIVE'});
    }
    await hmacKey.delete();
  }
}
