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
import {
  canMtlsBeEnabled,
  getClientCertAndKey,
  CertificateSourceUnavailableError,
  InvalidConfigurationError,
  getMtlsEndpointUsagePolicy,
  MtlsEndpointUsagePolicy,
  shouldMtlsEndpointBeUsed,
} from '../src/auth/mtlsutils';
import * as util from '../src/util';

describe('mtlsutils', () => {
  let sandbox: sinon.SinonSandbox;
  let tempDir: string;

  beforeEach(async () => {
    sandbox = sinon.createSandbox();
    sandbox.stub(process, 'env').value({...process.env});
    delete process.env.GOOGLE_API_USE_CLIENT_CERTIFICATE;
    delete process.env.GOOGLE_API_USE_MTLS_ENDPOINT;
    delete process.env.GOOGLE_API_CERTIFICATE_CONFIG;
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

    it('returns true even if cert config file is malformed', async () => {
      process.env.GOOGLE_API_CERTIFICATE_CONFIG =
        './test/fixtures/external-account-cert/cert_config_empty.json';
      const result = await canMtlsBeEnabled();
      assert.strictEqual(result, true);
    });

    it('returns true even if cert config is missing required workload properties', async () => {
      process.env.GOOGLE_API_CERTIFICATE_CONFIG =
        './test/fixtures/external-account-cert/cert_config_missing_cert_path.json';
      const result = await canMtlsBeEnabled();
      assert.strictEqual(result, true);
    });

    it('returns true even if cert config referenced files do not exist', async () => {
      const invalidConfigPath = path.join(tempDir, 'invalid_config.json');
      const invalidConfigJson = {
        cert_configs: {
          workload: {
            cert_path: path.join(tempDir, 'non_existent.crt'),
            key_path: path.join(tempDir, 'non_existent.key'),
          },
        },
      };
      await fs.promises.writeFile(
        invalidConfigPath,
        JSON.stringify(invalidConfigJson),
      );
      process.env.GOOGLE_API_CERTIFICATE_CONFIG = invalidConfigPath;
      const result = await canMtlsBeEnabled();
      assert.strictEqual(result, true);
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

    it('returns false if GOOGLE_API_USE_CLIENT_CERTIFICATE is false, even if GOOGLE_API_USE_MTLS_ENDPOINT is always', async () => {
      process.env.GOOGLE_API_USE_MTLS_ENDPOINT = 'always';
      process.env.GOOGLE_API_USE_CLIENT_CERTIFICATE = 'false';
      const result = await canMtlsBeEnabled();
      assert.strictEqual(result, false);
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

    it('throws error if cert config file is malformed', async () => {
      await assert.rejects(
        getClientCertAndKey(
          './test/fixtures/external-account-cert/cert_config_empty.json',
        ),
        InvalidConfigurationError,
      );
    });

    it('throws error if cert config is missing required workload properties', async () => {
      await assert.rejects(
        getClientCertAndKey(
          './test/fixtures/external-account-cert/cert_config_missing_cert_path.json',
        ),
        InvalidConfigurationError,
      );
    });

    it('throws error if cert config referenced files do not exist', async () => {
      const invalidConfigPath = path.join(tempDir, 'invalid_config.json');
      const invalidConfigJson = {
        cert_configs: {
          workload: {
            cert_path: path.join(tempDir, 'non_existent.crt'),
            key_path: path.join(tempDir, 'non_existent.key'),
          },
        },
      };
      await fs.promises.writeFile(
        invalidConfigPath,
        JSON.stringify(invalidConfigJson),
      );
      await assert.rejects(
        getClientCertAndKey(invalidConfigPath),
        CertificateSourceUnavailableError,
      );
    });
  });

  describe('getMtlsEndpointUsagePolicy', () => {
    it('returns NEVER or ALWAYS case-insensitively', () => {
      process.env.GOOGLE_API_USE_MTLS_ENDPOINT = 'NeVeR';
      assert.strictEqual(
        getMtlsEndpointUsagePolicy(),
        MtlsEndpointUsagePolicy.NEVER,
      );

      process.env.GOOGLE_API_USE_MTLS_ENDPOINT = 'AlWaYs';
      assert.strictEqual(
        getMtlsEndpointUsagePolicy(),
        MtlsEndpointUsagePolicy.ALWAYS,
      );
    });
  });

  describe('shouldMtlsEndpointBeUsed', () => {
    it('returns true if GOOGLE_API_USE_MTLS_ENDPOINT is always', async () => {
      process.env.GOOGLE_API_USE_MTLS_ENDPOINT = 'always';
      const result = await shouldMtlsEndpointBeUsed();
      assert.strictEqual(result, true);
    });

    it('returns false if GOOGLE_API_USE_MTLS_ENDPOINT is never', async () => {
      process.env.GOOGLE_API_USE_MTLS_ENDPOINT = 'never';
      const result = await shouldMtlsEndpointBeUsed();
      assert.strictEqual(result, false);
    });

    it('returns true if GOOGLE_API_USE_MTLS_ENDPOINT is auto and cert config is present', async () => {
      process.env.GOOGLE_API_USE_MTLS_ENDPOINT = 'auto';
      process.env.GOOGLE_API_CERTIFICATE_CONFIG =
        './test/fixtures/external-account-cert/cert_config.json';
      const result = await shouldMtlsEndpointBeUsed();
      assert.strictEqual(result, true);
    });

    it('returns false if GOOGLE_API_USE_MTLS_ENDPOINT is auto and no cert config is present', async () => {
      process.env.GOOGLE_API_USE_MTLS_ENDPOINT = 'auto';
      delete process.env.GOOGLE_API_CERTIFICATE_CONFIG;
      sandbox
        .stub(util, 'getWellKnownCertificateConfigFileLocation')
        .returns(path.join(tempDir, 'non_existent.json'));
      const result = await shouldMtlsEndpointBeUsed();
      assert.strictEqual(result, false);
    });

    it('returns true if GOOGLE_API_USE_MTLS_ENDPOINT is always and GOOGLE_API_USE_CLIENT_CERTIFICATE is false', async () => {
      process.env.GOOGLE_API_USE_MTLS_ENDPOINT = 'always';
      process.env.GOOGLE_API_USE_CLIENT_CERTIFICATE = 'false';
      const result = await shouldMtlsEndpointBeUsed();
      assert.strictEqual(result, true);
    });
  });
});
