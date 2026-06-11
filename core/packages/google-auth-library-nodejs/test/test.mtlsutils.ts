// Copyright 2026 Google LLC
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

import * as assert from 'assert';
import {describe, it, beforeEach, afterEach} from 'mocha';
import * as sinon from 'sinon';
import * as fs from 'fs';
import * as path from 'path';
import * as os from 'os';
import {canMtlsBeEnabled, getClientCertAndKey} from '../src/auth/mtlsutils';
import * as util from '../src/util';

describe('mtlsutils', () => {
  let sandbox: sinon.SinonSandbox;
  let tempDir: string;

  beforeEach(async () => {
    sandbox = sinon.createSandbox();
    sandbox.stub(process, 'env').value({...process.env});
    tempDir = await fs.promises.mkdtemp(path.join(os.tmpdir(), 'mtls-tests-'));
  });

  afterEach(async () => {
    sandbox.restore();
    await fs.promises.rm(tempDir, {recursive: true, force: true});
  });

  describe('canMtlsBeEnabled', () => {
    it('returns false if GOOGLE_API_USE_CLIENT_CERTIFICATE is false', async () => {
      process.env.GOOGLE_API_USE_CLIENT_CERTIFICATE = 'false';
      const result = await canMtlsBeEnabled();
      assert.strictEqual(result, false);
    });

    it('returns false if GOOGLE_API_USE_MTLS_ENDPOINT is never', async () => {
      process.env.GOOGLE_API_USE_MTLS_ENDPOINT = 'never';
      const result = await canMtlsBeEnabled();
      assert.strictEqual(result, false);
    });

    it('returns true if valid cert config file is present', async () => {
      process.env.GOOGLE_API_CERTIFICATE_CONFIG =
        './test/fixtures/external-account-cert/cert_config.json';
      const result = await canMtlsBeEnabled();
      assert.strictEqual(result, true);
    });

    it('throws error if cert config file is malformed', async () => {
      process.env.GOOGLE_API_CERTIFICATE_CONFIG =
        './test/fixtures/external-account-cert/cert_config_empty.json';
      await assert.rejects(canMtlsBeEnabled());
    });

    it('throws error if cert config has missing files', async () => {
      process.env.GOOGLE_API_CERTIFICATE_CONFIG =
        './test/fixtures/external-account-cert/cert_config_missing_cert_path.json';
      await assert.rejects(canMtlsBeEnabled());
    });

    it('returns false if no config is present', async () => {
      delete process.env.GOOGLE_API_CERTIFICATE_CONFIG;
      sandbox
        .stub(util, 'getWellKnownCertificateConfigFileLocation')
        .returns(path.join(tempDir, 'non_existent.json'));
      const result = await canMtlsBeEnabled();
      assert.strictEqual(result, false);
    });

    it('returns true if GOOGLE_API_USE_MTLS_ENDPOINT is always, even if no config file is present', async () => {
      process.env.GOOGLE_API_USE_MTLS_ENDPOINT = 'always';
      delete process.env.GOOGLE_API_CERTIFICATE_CONFIG;
      sandbox
        .stub(util, 'getWellKnownCertificateConfigFileLocation')
        .returns(path.join(tempDir, 'non_existent.json'));
      const result = await canMtlsBeEnabled();
      assert.strictEqual(result, true);
    });

    it('throws error if GOOGLE_API_USE_MTLS_ENDPOINT is always and GOOGLE_API_USE_CLIENT_CERTIFICATE is false', async () => {
      process.env.GOOGLE_API_USE_MTLS_ENDPOINT = 'always';
      process.env.GOOGLE_API_USE_CLIENT_CERTIFICATE = 'false';
      await assert.rejects(
        canMtlsBeEnabled(),
        /mTLS is configured to ALWAYS, but client certificate usage was explicitly disabled via GOOGLE_API_USE_CLIENT_CERTIFICATE=false\./,
      );
    });
  });

  describe('getClientCertAndKey', () => {
    it('loads cert and key from config successfully', async () => {
      const result = await getClientCertAndKey(
        './test/fixtures/external-account-cert/cert_config.json',
      );
      assert.ok(result.cert);
      assert.ok(result.key);
    });

    it('throws error if files resolved by config are malformed', async () => {
      await assert.rejects(
        getClientCertAndKey(
          './test/fixtures/external-account-cert/cert_config_with_malformed_key.json',
        ),
      );
    });
  });
});
