/**
 * Copyright 2026 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import * as assert from 'assert';
import {describe, it, beforeEach, afterEach} from 'mocha';
import {
  clearMetadataCache,
  extractClientServiceFromPackageName,
  extractFromEnvironment,
  extractFromSettings,
  extractRepo,
  extractServiceFromApiName,
  resolveStaticTraceContext,
  DEFAULT_GCP_REPO,
} from '../../src/observability/metadataResolver';
import {CallSettings} from '../../src/gax';
import {StaticTraceContext} from '../../src/observability/TracerHelper';

describe('metadataResolver', () => {
  beforeEach(() => {
    clearMetadataCache();
    delete process.env.GOOGLE_SDK_NODE_CLIENT_SERVICE;
    delete process.env.GOOGLE_SDK_NODE_CLIENT_VERSION;
    delete process.env.GOOGLE_SDK_NODE_REPO;
    delete process.env.GOOGLE_SDK_NODE_ARTIFACT;
    delete process.env.GOOGLE_SDK_NODE_ENABLE_TRACING;
    delete process.env.GCP_CLIENT_SERVICE;
    delete process.env.GCP_CLIENT_VERSION;
    delete process.env.GCP_REPO;
    delete process.env.GCP_ARTIFACT;
  });

  afterEach(() => {
    clearMetadataCache();
    delete process.env.GOOGLE_SDK_NODE_CLIENT_SERVICE;
    delete process.env.GOOGLE_SDK_NODE_CLIENT_VERSION;
    delete process.env.GOOGLE_SDK_NODE_REPO;
    delete process.env.GOOGLE_SDK_NODE_ARTIFACT;
    delete process.env.GOOGLE_SDK_NODE_ENABLE_TRACING;
    delete process.env.GCP_CLIENT_SERVICE;
    delete process.env.GCP_CLIENT_VERSION;
    delete process.env.GCP_REPO;
    delete process.env.GCP_ARTIFACT;
  });

  describe('extractRepo', () => {
    it('extracts repo slug from https github url', () => {
      assert.strictEqual(
        extractRepo('https://github.com/googleapis/google-cloud-node.git'),
        'googleapis/google-cloud-node',
      );
    });

    it('extracts repo slug from git+https url', () => {
      assert.strictEqual(
        extractRepo('git+https://github.com/googleapis/nodejs-storage.git'),
        'googleapis/nodejs-storage',
      );
    });

    it('extracts repo slug from git@ github url', () => {
      assert.strictEqual(
        extractRepo('git@github.com:googleapis/google-cloud-node.git'),
        'googleapis/google-cloud-node',
      );
    });

    it('extracts repo slug from object with url property', () => {
      assert.strictEqual(
        extractRepo({
          type: 'git',
          url: 'https://github.com/googleapis/google-cloud-node.git',
          directory: 'packages/google-cloud-redis',
        }),
        'googleapis/google-cloud-node',
      );
    });

    it('extracts repo slug from shorthand string', () => {
      assert.strictEqual(
        extractRepo('googleapis/google-cloud-node'),
        'googleapis/google-cloud-node',
      );
    });

    it('returns undefined for invalid repo inputs', () => {
      assert.strictEqual(extractRepo(undefined), undefined);
      assert.strictEqual(extractRepo(''), undefined);
      assert.strictEqual(extractRepo({}), undefined);
    });
  });

  describe('extractClientServiceFromPackageName', () => {
    it('extracts service from @google-cloud scoped packages', () => {
      assert.strictEqual(
        extractClientServiceFromPackageName('@google-cloud/redis'),
        'redis',
      );
      assert.strictEqual(
        extractClientServiceFromPackageName('@google-cloud/storage'),
        'storage',
      );
      assert.strictEqual(
        extractClientServiceFromPackageName('@google-cloud/secret-manager'),
        'secret-manager',
      );
    });

    it('extracts service from other scoped packages', () => {
      assert.strictEqual(
        extractClientServiceFromPackageName('@googlemaps/places'),
        'places',
      );
      assert.strictEqual(
        extractClientServiceFromPackageName('@google-shopping/accounts'),
        'accounts',
      );
    });

    it('extracts service from unscoped google-cloud- packages', () => {
      assert.strictEqual(
        extractClientServiceFromPackageName('google-cloud-redis'),
        'redis',
      );
    });

    it('falls back to unchanged name for standard packages', () => {
      assert.strictEqual(
        extractClientServiceFromPackageName('google-gax'),
        'google-gax',
      );
    });
  });

  describe('extractServiceFromApiName', () => {
    it('extracts service name before version segment', () => {
      assert.strictEqual(
        extractServiceFromApiName('google.cloud.redis.v1.CloudRedis'),
        'redis',
      );
      assert.strictEqual(
        extractServiceFromApiName('google.storage.v1.Storage'),
        'storage',
      );
      assert.strictEqual(
        extractServiceFromApiName('google.example.v1.Echo'),
        'example',
      );
    });

    it('extracts service name when version is beta or alpha', () => {
      assert.strictEqual(
        extractServiceFromApiName('google.cloud.redis.v1beta1.CloudRedis'),
        'redis',
      );
    });

    it('handles empty apiName', () => {
      assert.strictEqual(extractServiceFromApiName(''), undefined);
    });
  });

  describe('extractFromSettings', () => {
    it('extracts version from x-goog-api-client header', () => {
      const settings = new CallSettings({
        otherArgs: {
          headers: {
            'x-goog-api-client': 'gax/6.0.0 gapic/6.1.0 gl-node/22.0.0',
          },
        },
      });
      const metadata = extractFromSettings(settings);
      assert.strictEqual(metadata.gcpVersion, '6.1.0');
    });

    it('extracts service and artifact from apiName', () => {
      const settings = new CallSettings({
        apiName: 'google.cloud.redis.v1.CloudRedis',
      });
      const metadata = extractFromSettings(settings);
      assert.strictEqual(metadata.gcpClientService, 'redis');
      assert.strictEqual(metadata.gcpArtifact, '@google-cloud/redis');
    });

    it('extracts custom libName from x-goog-api-client header', () => {
      const settings = new CallSettings({
        apiName: 'google.cloud.storage.v1.Storage',
        otherArgs: {
          headers: {
            'x-goog-api-client':
              'gl-node/22.0.0 auth/11.0.0 gax/6.5.0 @google-cloud/storage/7.1.0',
          },
        },
      });
      const metadata = extractFromSettings(settings);
      assert.strictEqual(metadata.gcpClientService, 'storage');
      assert.strictEqual(metadata.gcpArtifact, '@google-cloud/storage');
      assert.strictEqual(metadata.gcpVersion, '7.1.0');
    });

    it('handles undefined settings', () => {
      const metadata = extractFromSettings(undefined);
      assert.deepStrictEqual(metadata, {});
    });
  });

  describe('extractFromEnvironment', () => {
    it('extracts metadata from GOOGLE_SDK_NODE_* environment variables', () => {
      process.env.GOOGLE_SDK_NODE_CLIENT_SERVICE = 'my-service';
      process.env.GOOGLE_SDK_NODE_CLIENT_VERSION = '2.3.4';
      process.env.GOOGLE_SDK_NODE_REPO = 'custom/repo';
      process.env.GOOGLE_SDK_NODE_ARTIFACT = '@custom/package';

      const metadata = extractFromEnvironment();
      assert.strictEqual(metadata.gcpClientService, 'my-service');
      assert.strictEqual(metadata.gcpVersion, '2.3.4');
      assert.strictEqual(metadata.gcpRepo, 'custom/repo');
      assert.strictEqual(metadata.gcpArtifact, '@custom/package');
    });

    it('extracts metadata from GCP_* environment variables', () => {
      process.env.GCP_CLIENT_SERVICE = 'gcp-service';
      process.env.GCP_CLIENT_VERSION = '3.0.0';
      process.env.GCP_REPO = 'gcp/repo';
      process.env.GCP_ARTIFACT = '@gcp/package';

      const metadata = extractFromEnvironment();
      assert.strictEqual(metadata.gcpClientService, 'gcp-service');
      assert.strictEqual(metadata.gcpVersion, '3.0.0');
      assert.strictEqual(metadata.gcpRepo, 'gcp/repo');
      assert.strictEqual(metadata.gcpArtifact, '@gcp/package');
    });
  });

  describe('resolveStaticTraceContext', () => {
    it('uses explicit internalTelemetryInfo when GOOGLE_SDK_NODE_ENABLE_TRACING is not set', () => {
      delete process.env.GOOGLE_SDK_NODE_ENABLE_TRACING;
      const explicit: StaticTraceContext = {
        gcpClientService: 'custom-service',
        gcpVersion: '1.2.3',
        gcpRepo: 'custom/repo',
        gcpArtifact: '@custom/client',
      };
      const settings = new CallSettings({
        otherArgs: {
          internalTelemetryInfo: explicit,
        },
      });

      const resolved = resolveStaticTraceContext(settings);
      assert.deepStrictEqual(resolved, explicit);
    });

    it('ignores explicit internalTelemetryInfo when GOOGLE_SDK_NODE_ENABLE_TRACING is set', () => {
      process.env.GOOGLE_SDK_NODE_ENABLE_TRACING = 'true';
      const explicit: StaticTraceContext = {
        gcpClientService: 'explicit-service',
        gcpVersion: '9.9.9',
        gcpRepo: 'explicit/repo',
        gcpArtifact: '@explicit/client',
      };
      const settings = new CallSettings({
        apiName: 'google.cloud.redis.v1.CloudRedis',
        otherArgs: {
          internalTelemetryInfo: explicit,
          headers: {
            'x-goog-api-client': 'gax/6.5.0 gapic/4.5.1',
          },
        },
      });

      const resolved = resolveStaticTraceContext(settings);
      assert.strictEqual(resolved.gcpClientService, 'redis');
      assert.strictEqual(resolved.gcpArtifact, '@google-cloud/redis');
      assert.strictEqual(resolved.gcpVersion, '4.5.1');
      assert.strictEqual(resolved.gcpRepo, DEFAULT_GCP_REPO);
    });

    it('resolves metadata dynamically from settings without filesystem access', () => {
      const settings = new CallSettings({
        apiName: 'google.cloud.spanner.v1.Spanner',
        otherArgs: {
          headers: {
            'x-goog-api-client': 'gapic/7.8.0',
          },
        },
      });

      const resolved = resolveStaticTraceContext(settings);
      assert.strictEqual(resolved.gcpClientService, 'spanner');
      assert.strictEqual(resolved.gcpArtifact, '@google-cloud/spanner');
      assert.strictEqual(resolved.gcpVersion, '7.8.0');
      assert.strictEqual(resolved.gcpRepo, 'googleapis/google-cloud-node');
    });

    it('caches resolved metadata by apiName', () => {
      const settings = new CallSettings({
        apiName: 'google.cloud.redis.v1.CloudRedis',
        otherArgs: {
          headers: {
            'x-goog-api-client': 'gapic/1.0.0',
          },
        },
      });

      const resolvedFirst = resolveStaticTraceContext(settings);
      const resolvedSecond = resolveStaticTraceContext(settings);
      assert.strictEqual(resolvedFirst.gcpArtifact, resolvedSecond.gcpArtifact);
      assert.strictEqual(
        resolvedFirst.gcpClientService,
        resolvedSecond.gcpClientService,
      );
      assert.strictEqual(resolvedFirst.gcpVersion, resolvedSecond.gcpVersion);
    });
  });
});
