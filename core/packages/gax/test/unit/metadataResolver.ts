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
import * as path from 'path';
import {describe, it, beforeEach, afterEach} from 'mocha';
import {
  clearMetadataCache,
  extractClientServiceFromPackageName,
  extractFromEnvironment,
  extractFromSettings,
  extractMetadataFromPackage,
  extractRepo,
  extractServiceFromApiName,
  findPackageJson,
  getCallerFile,
  resolveStaticTraceContext,
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

    it('returns undefined for invalid or absent repo', () => {
      assert.strictEqual(extractRepo(undefined), undefined);
      assert.strictEqual(extractRepo(null), undefined);
      assert.strictEqual(extractRepo('not-a-repo'), undefined);
    });
  });

  describe('extractClientServiceFromPackageName', () => {
    it('extracts service from scoped @google-cloud packages', () => {
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

    it('extracts service from unscoped google-cloud-* packages', () => {
      assert.strictEqual(
        extractClientServiceFromPackageName('google-cloud-redis'),
        'redis',
      );
    });

    it('returns the package name as fallback', () => {
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

  describe('extractMetadataFromPackage', () => {
    it('extracts all metadata fields from package.json object', () => {
      const pkg = {
        name: '@google-cloud/redis',
        version: '6.1.0',
        repository: {
          type: 'git',
          url: 'https://github.com/googleapis/google-cloud-node.git',
          directory: 'packages/google-cloud-redis',
        },
      };
      const metadata = extractMetadataFromPackage(pkg);
      assert.strictEqual(metadata.gcpArtifact, '@google-cloud/redis');
      assert.strictEqual(metadata.gcpClientService, 'redis');
      assert.strictEqual(metadata.gcpVersion, '6.1.0');
      assert.strictEqual(metadata.gcpRepo, 'googleapis/google-cloud-node');
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

    it('extracts service from apiName', () => {
      const settings = new CallSettings({
        apiName: 'google.cloud.redis.v1.CloudRedis',
      });
      const metadata = extractFromSettings(settings);
      assert.strictEqual(metadata.gcpClientService, 'redis');
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

  describe('findPackageJson', () => {
    it('finds package.json climbing up directories', () => {
      const result = findPackageJson(__dirname);
      assert.ok(result);
      assert.strictEqual(result.pkg.name, 'google-gax');
    });
  });

  describe('getCallerFile', () => {
    it('returns a caller file outside gax src', () => {
      const caller = getCallerFile();
      // When called from mocha unit test, the caller is the test file
      assert.ok(caller);
      assert.ok(caller.includes('metadataResolver'));
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
        },
      });

      const resolved = resolveStaticTraceContext(settings, __filename);
      // Because GOOGLE_SDK_NODE_ENABLE_TRACING is explicitly set, the extra protoc param
      // does not matter and dynamic runtime resolution is used instead.
      assert.notStrictEqual(resolved.gcpArtifact, '@explicit/client');
      assert.notStrictEqual(resolved.gcpClientService, 'explicit-service');
      assert.strictEqual(resolved.gcpArtifact, 'google-gax');
      assert.strictEqual(resolved.gcpClientService, 'redis');
    });

    it('merges partial explicit internalTelemetryInfo with dynamically resolved values', () => {
      const partial: StaticTraceContext = {
        gcpClientService: 'custom-service',
      };
      const settings = new CallSettings({
        apiName: 'google.example.v1.Echo',
        otherArgs: {
          internalTelemetryInfo: partial,
          headers: {
            'x-goog-api-client': 'gapic/2.0.0',
          },
        },
      });

      const resolved = resolveStaticTraceContext(settings, __filename);
      assert.strictEqual(resolved.gcpClientService, 'custom-service');
      assert.strictEqual(resolved.gcpArtifact, 'google-gax');
      assert.ok(resolved.gcpRepo);
    });

    it('resolves metadata dynamically for simulated package directory', () => {
      const redisClientPath = path.resolve(
        __dirname,
        '../../../../../../packages/google-cloud-redis/src/v1/cloud_redis_client.ts',
      );
      const settings = new CallSettings({
        apiName: 'google.cloud.redis.v1.CloudRedis',
      });

      const resolved = resolveStaticTraceContext(settings, redisClientPath);
      assert.strictEqual(resolved.gcpArtifact, '@google-cloud/redis');
      assert.strictEqual(resolved.gcpClientService, 'redis');
      assert.strictEqual(resolved.gcpRepo, 'googleapis/google-cloud-node');
      assert.ok(resolved.gcpVersion);
    });

    it('caches resolved metadata by directory', () => {
      const redisClientPath = path.resolve(
        __dirname,
        '../../../../../../packages/google-cloud-redis/src/v1/cloud_redis_client.ts',
      );
      const settings = new CallSettings({
        apiName: 'google.cloud.redis.v1.CloudRedis',
      });

      const resolvedFirst = resolveStaticTraceContext(
        settings,
        redisClientPath,
      );
      const resolvedSecond = resolveStaticTraceContext(
        settings,
        redisClientPath,
      );
      assert.strictEqual(resolvedFirst.gcpArtifact, resolvedSecond.gcpArtifact);
      assert.strictEqual(
        resolvedFirst.gcpClientService,
        resolvedSecond.gcpClientService,
      );
    });
  });
});
