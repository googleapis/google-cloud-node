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
import {context, INVALID_SPAN_CONTEXT, trace} from '@opentelemetry/api';
import {describe, it, beforeEach, afterEach} from 'mocha';
import {
  ATTEMPT_SPAN_KEY,
  buildInitialAttributes,
  clearMetadataCache,
  CLIENT_REQUEST_SPAN_KEY,
  DynamicTraceContext,
  extractClientServiceFromPackageName,
  extractFromEnvironment,
  extractFromSettings,
  extractServiceFromApiName,
  getActiveTraceContext,
  resolveEndpointAndDomain,
  resolveRpcMethod,
  resolveStaticTraceContext,
  StaticTraceContext,
  DEFAULT_GCP_REPO,
} from '../../src/observability/contextUtil';
import {traceAttempt, traceCall} from '../../src/observability/TracerHelper';
import {CallSettings} from '../../src/gax';
import {OtelHarness} from './otelHarness';

describe('contextUtil', () => {
  beforeEach(() => {
    clearMetadataCache();
    delete process.env.GOOGLE_SDK_NODE_CLIENT_SERVICE;
    delete process.env.GOOGLE_SDK_NODE_CLIENT_VERSION;
    delete process.env.GOOGLE_SDK_NODE_ARTIFACT;
    delete process.env.GOOGLE_SDK_NODE_ENABLE_TRACING;
    delete process.env.GOOGLE_SDK_NODE_SERVER_ADDRESS;
    delete process.env.GOOGLE_SDK_NODE_SERVER_PORT;
    delete process.env.SERVER_ADDRESS;
    delete process.env.SERVER_PORT;
    delete process.env.GCP_CLIENT_SERVICE;
    delete process.env.GCP_CLIENT_VERSION;
    delete process.env.GCP_ARTIFACT;
  });

  afterEach(() => {
    clearMetadataCache();
    delete process.env.GOOGLE_SDK_NODE_CLIENT_SERVICE;
    delete process.env.GOOGLE_SDK_NODE_CLIENT_VERSION;
    delete process.env.GOOGLE_SDK_NODE_ARTIFACT;
    delete process.env.GOOGLE_SDK_NODE_ENABLE_TRACING;
    delete process.env.GOOGLE_SDK_NODE_SERVER_ADDRESS;
    delete process.env.GOOGLE_SDK_NODE_SERVER_PORT;
    delete process.env.SERVER_ADDRESS;
    delete process.env.SERVER_PORT;
    delete process.env.GCP_CLIENT_SERVICE;
    delete process.env.GCP_CLIENT_VERSION;
    delete process.env.GCP_ARTIFACT;
  });

  describe('extractClientServiceFromPackageName', () => {
    it('extracts service from scoped and unscoped package names', () => {
      assert.strictEqual(
        extractClientServiceFromPackageName('@google-cloud/redis'),
        'redis',
      );
      assert.strictEqual(
        extractClientServiceFromPackageName('google-cloud-redis'),
        'redis',
      );
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

    it('handles apiName ending with a dot or malformed segments gracefully', () => {
      assert.strictEqual(extractServiceFromApiName('google.cloud.'), undefined);
      assert.strictEqual(extractServiceFromApiName('...'), undefined);
      assert.strictEqual(extractServiceFromApiName('google.'), undefined);
      assert.strictEqual(extractServiceFromApiName('.'), undefined);
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

    it('does not treat gccl as artifact when preceding gapic token sets gcpVersion', () => {
      const settings = new CallSettings({
        apiName: 'google.cloud.redis.v1.CloudRedis',
        otherArgs: {
          headers: {
            'x-goog-api-client':
              'gl-node/22.0.0 auth/11.0.0 gax/6.5.0 gapic/6.1.0 gccl/6.1.0',
          },
        },
      });
      const metadata = extractFromSettings(settings);
      assert.strictEqual(metadata.gcpVersion, '6.1.0');
      assert.strictEqual(metadata.gcpClientService, 'redis');
      assert.notStrictEqual(metadata.gcpArtifact, 'gccl');
      assert.strictEqual(metadata.gcpArtifact, '@google-cloud/redis');
    });

    it('extracts version from gccl when gapic is absent and never treats gccl as artifact', () => {
      const settings = new CallSettings({
        apiName: 'google.cloud.redis.v1.CloudRedis',
        otherArgs: {
          headers: {
            'x-goog-api-client':
              'gl-node/22.0.0 auth/11.0.0 gax/6.5.0 gccl/6.2.0',
          },
        },
      });
      const metadata = extractFromSettings(settings);
      assert.strictEqual(metadata.gcpVersion, '6.2.0');
      assert.strictEqual(metadata.gcpClientService, 'redis');
      assert.strictEqual(metadata.gcpArtifact, '@google-cloud/redis');
    });

    it('extracts version from metadataBuilder when headers is not set directly on otherArgs', () => {
      const grpcSettings = new CallSettings({
        apiName: 'google.cloud.redis.v1.CloudRedis',
        otherArgs: {
          metadataBuilder: () => ({
            get: (key: string) =>
              key === 'x-goog-api-client'
                ? ['gax/5.0.6 gapic/6.1.0 gl-node/22.0.0 grpc/1.10.0']
                : [],
          }),
        },
      });
      const grpcMeta = extractFromSettings(grpcSettings);
      assert.strictEqual(grpcMeta.gcpVersion, '6.1.0');
      assert.strictEqual(grpcMeta.gcpClientService, 'redis');
      assert.strictEqual(grpcMeta.gcpArtifact, '@google-cloud/redis');

      const fallbackSettings = new CallSettings({
        apiName: 'google.cloud.redis.v1.CloudRedis',
        otherArgs: {
          metadataBuilder: () => ({
            'x-goog-api-client': [
              'gax/5.0.6 gapic/6.1.0 gl-node/22.0.0 rest/5.0.6 grpc-web/5.0.6',
            ],
          }),
        },
      });
      const fallbackMeta = extractFromSettings(fallbackSettings);
      assert.strictEqual(fallbackMeta.gcpVersion, '6.1.0');
      assert.strictEqual(fallbackMeta.gcpClientService, 'redis');
      assert.strictEqual(fallbackMeta.gcpArtifact, '@google-cloud/redis');
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
      process.env.GOOGLE_SDK_NODE_ARTIFACT = '@custom/package';

      const metadata = extractFromEnvironment();
      assert.strictEqual(metadata.gcpClientService, 'my-service');
      assert.strictEqual(metadata.gcpVersion, '2.3.4');
      assert.strictEqual(metadata.gcpArtifact, '@custom/package');
    });

    it('extracts metadata from GCP_* environment variables', () => {
      process.env.GCP_CLIENT_SERVICE = 'gcp-service';
      process.env.GCP_CLIENT_VERSION = '3.0.0';
      process.env.GCP_ARTIFACT = '@gcp/package';

      const metadata = extractFromEnvironment();
      assert.strictEqual(metadata.gcpClientService, 'gcp-service');
      assert.strictEqual(metadata.gcpVersion, '3.0.0');
      assert.strictEqual(metadata.gcpArtifact, '@gcp/package');
    });
  });

  describe('resolveStaticTraceContext', () => {
    it('prioritizes environment variables over dynamic settings', () => {
      process.env.GOOGLE_SDK_NODE_CLIENT_SERVICE = 'env-service';
      process.env.GOOGLE_SDK_NODE_CLIENT_VERSION = '5.0.0';
      process.env.GOOGLE_SDK_NODE_ARTIFACT = '@custom/env-artifact';

      const settings = new CallSettings({
        apiName: 'google.cloud.redis.v1.CloudRedis',
        otherArgs: {
          headers: {
            'x-goog-api-client': 'gapic/1.0.0',
          },
        },
      });

      const resolved = resolveStaticTraceContext(settings);
      assert.strictEqual(resolved.gcpClientService, 'env-service');
      assert.strictEqual(resolved.gcpVersion, '5.0.0');
      assert.strictEqual(resolved.gcpArtifact, '@custom/env-artifact');
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

    it('resolves distinct endpoints and ports for clients sharing the same apiName', () => {
      const usEastSettings = new CallSettings({
        apiName: 'google.cloud.kms.v1.KeyManagementService',
        otherArgs: {
          servicePath: 'us-east1-cloudkms.googleapis.com',
          port: 443,
          headers: {
            'x-goog-api-client': 'gapic/1.0.0',
          },
        },
      });
      const emulatorSettings = new CallSettings({
        apiName: 'google.cloud.kms.v1.KeyManagementService',
        otherArgs: {
          servicePath: 'localhost:8080',
          headers: {
            'x-goog-api-client': 'gapic/2.0.0',
          },
        },
      });

      const resolvedUsEast = resolveStaticTraceContext(usEastSettings);
      const resolvedEmulator = resolveStaticTraceContext(emulatorSettings);

      assert.strictEqual(
        resolvedUsEast.serverAddress,
        'us-east1-cloudkms.googleapis.com',
      );
      assert.strictEqual(resolvedUsEast.serverPort, 443);
      assert.strictEqual(resolvedUsEast.gcpVersion, '1.0.0');

      assert.strictEqual(resolvedEmulator.serverAddress, 'localhost');
      assert.strictEqual(resolvedEmulator.serverPort, 8080);
      assert.strictEqual(resolvedEmulator.gcpVersion, '2.0.0');
    });

    it('extracts serverAddress and serverPort from settings', () => {
      const settingsWithEndpoint = new CallSettings({
        apiName: 'google.cloud.redis.v1.CloudRedis',
        otherArgs: {
          servicePath: 'redis.googleapis.com:443',
        },
      });
      const metadata = resolveStaticTraceContext(settingsWithEndpoint);
      assert.strictEqual(metadata.serverAddress, 'redis.googleapis.com');
      assert.strictEqual(metadata.serverPort, 443);
    });

    it('extracts serverAddress and serverPort from environment variables', () => {
      process.env.GOOGLE_SDK_NODE_SERVER_ADDRESS = 'custom.endpoint.com';
      process.env.GOOGLE_SDK_NODE_SERVER_PORT = '8443';
      const metadata = resolveStaticTraceContext();
      assert.strictEqual(metadata.serverAddress, 'custom.endpoint.com');
      assert.strictEqual(metadata.serverPort, 8443);
    });
  });

  describe('resolveEndpointAndDomain', () => {
    const dynamicArgs: DynamicTraceContext = {
      clientName: 'KeyManagementServiceClient',
      methodName: 'GetKeyRing',
      rpcType: 'grpc',
    };

    it('splits embedded ports from host:port and [ipv6]:port server addresses', () => {
      assert.deepStrictEqual(
        resolveEndpointAndDomain(
          {...dynamicArgs, serverAddress: 'example.com:8443'},
          {},
        ),
        {rawAddress: 'example.com', rawPort: 8443, urlDomain: 'example.com'},
      );
      assert.deepStrictEqual(
        resolveEndpointAndDomain(
          {...dynamicArgs, serverAddress: '[::1]:8080'},
          {},
        ),
        {rawAddress: '[::1]', rawPort: 8080, urlDomain: '[::1]'},
      );
      // An explicit server port takes precedence over the embedded port.
      assert.deepStrictEqual(
        resolveEndpointAndDomain(
          {...dynamicArgs, serverAddress: 'example.com:8443', serverPort: 443},
          {},
        ),
        {rawAddress: 'example.com', rawPort: 443, urlDomain: 'example.com'},
      );
    });

    it('prefers dynamic endpoint and domain values over static ones', () => {
      const staticArgs: StaticTraceContext = {
        serverAddress: 'static.example.com',
        serverPort: 9443,
        urlDomain: 'static.googleapis.com',
      };
      assert.deepStrictEqual(
        resolveEndpointAndDomain(
          {
            ...dynamicArgs,
            serverAddress: 'dynamic.example.com',
            serverPort: 8443,
            urlDomain: 'dynamic.googleapis.com',
          },
          staticArgs,
        ),
        {
          rawAddress: 'dynamic.example.com',
          rawPort: 8443,
          urlDomain: 'dynamic.googleapis.com',
        },
      );
      assert.deepStrictEqual(
        resolveEndpointAndDomain(dynamicArgs, staticArgs),
        {
          rawAddress: 'static.example.com',
          rawPort: 9443,
          urlDomain: 'static.googleapis.com',
        },
      );
    });

    it('falls back to the server address, then gcpClientService, for url.domain', () => {
      assert.deepStrictEqual(
        resolveEndpointAndDomain(
          {...dynamicArgs, serverAddress: 'example.com'},
          {gcpClientService: 'cloudkms'},
        ),
        {
          rawAddress: 'example.com',
          rawPort: undefined,
          urlDomain: 'example.com',
        },
      );
      // Short service names are expanded to "<service>.googleapis.com".
      assert.deepStrictEqual(
        resolveEndpointAndDomain(dynamicArgs, {gcpClientService: 'cloudkms'}),
        {
          rawAddress: undefined,
          rawPort: undefined,
          urlDomain: 'cloudkms.googleapis.com',
        },
      );
      // Fully-qualified service domains are used as-is.
      assert.deepStrictEqual(
        resolveEndpointAndDomain(dynamicArgs, {
          gcpClientService: 'storage.googleapis.com',
        }),
        {
          rawAddress: undefined,
          rawPort: undefined,
          urlDomain: 'storage.googleapis.com',
        },
      );
    });

    it('derives the server address from url.domain and applies defaultPort when provided', () => {
      assert.deepStrictEqual(
        resolveEndpointAndDomain(
          dynamicArgs,
          {gcpClientService: 'cloudkms'},
          443,
        ),
        {
          rawAddress: 'cloudkms.googleapis.com',
          rawPort: 443,
          urlDomain: 'cloudkms.googleapis.com',
        },
      );
      // An explicit server port is kept over defaultPort.
      assert.deepStrictEqual(
        resolveEndpointAndDomain(
          {...dynamicArgs, serverAddress: 'example.com', serverPort: 8443},
          {},
          443,
        ),
        {rawAddress: 'example.com', rawPort: 8443, urlDomain: 'example.com'},
      );
      // defaultPort is not applied when there is no address or domain.
      assert.deepStrictEqual(resolveEndpointAndDomain(dynamicArgs, {}, 443), {
        rawAddress: undefined,
        rawPort: undefined,
        urlDomain: undefined,
      });
    });
  });

  describe('resolveRpcMethod', () => {
    it('prefixes methodName with apiName when apiName is available', () => {
      assert.strictEqual(
        resolveRpcMethod({
          apiName: 'google.cloud.kms.v1.KeyManagementService',
          methodName: 'GetKeyRing',
        }),
        'google.cloud.kms.v1.KeyManagementService/GetKeyRing',
      );
      assert.strictEqual(
        resolveRpcMethod({methodName: 'GetKeyRing'}),
        'GetKeyRing',
      );
      assert.strictEqual(
        resolveRpcMethod({apiName: '', methodName: 'GetKeyRing'}),
        'GetKeyRing',
      );
    });
  });

  describe('buildInitialAttributes', () => {
    it('builds initial client, transport, and url.domain attributes', () => {
      const dynamicArgs: DynamicTraceContext = {
        clientName: 'StorageClient',
        methodName: 'GetObject',
        rpcType: 'grpc',
      };
      const staticArgs: StaticTraceContext = {
        gcpClientService: 'storage',
        gcpVersion: '1.2.3',
        gcpRepo: DEFAULT_GCP_REPO,
        gcpArtifact: '@google-cloud/storage',
      };

      assert.deepStrictEqual(
        buildInitialAttributes(
          dynamicArgs,
          staticArgs,
          'storage.googleapis.com',
        ),
        {
          'gcp.client.service': 'storage',
          'gcp.client.version': '1.2.3',
          'gcp.client.repo': DEFAULT_GCP_REPO,
          'gcp.client.artifact': '@google-cloud/storage',
          'rpc.system.name': 'grpc',
          'url.domain': 'storage.googleapis.com',
        },
      );

      assert.deepStrictEqual(buildInitialAttributes(dynamicArgs, staticArgs), {
        'gcp.client.service': 'storage',
        'gcp.client.version': '1.2.3',
        'gcp.client.repo': DEFAULT_GCP_REPO,
        'gcp.client.artifact': '@google-cloud/storage',
        'rpc.system.name': 'grpc',
      });

      assert.deepStrictEqual(
        buildInitialAttributes(
          {
            clientName: 'ComputeClient',
            methodName: 'InsertInstance',
            rpcType: 'http',
          },
          {},
        ),
        {
          'gcp.client.service': undefined,
          'gcp.client.version': undefined,
          'gcp.client.repo': undefined,
          'gcp.client.artifact': undefined,
          'rpc.system.name': 'http',
        },
      );
    });
  });

  describe('getActiveTraceContext', () => {
    let harness: OtelHarness;

    const dynamicArgs: DynamicTraceContext = {
      clientName: 'StorageClient',
      methodName: 'GetObject',
      rpcType: 'grpc',
    };

    const staticArgs: StaticTraceContext = {
      gcpClientService: 'storage.googleapis.com',
      gcpVersion: '1.2.3',
      gcpRepo: 'googleapis/google-cloud-node',
      gcpArtifact: '@google-cloud/storage',
    };

    beforeEach(() => {
      harness = new OtelHarness();
      harness.setup();
    });

    afterEach(() => {
      harness.teardown();
    });

    it('returns undefined when no span is active', () => {
      assert.strictEqual(getActiveTraceContext(), undefined);
    });

    it('falls back to an active outer OpenTelemetry span when no GAX span is active', () => {
      trace.getTracer('user-app').startActiveSpan('user-span', span => {
        const activeTrace = getActiveTraceContext();
        assert.ok(activeTrace);
        assert.strictEqual(activeTrace.traceId, span.spanContext().traceId);
        assert.strictEqual(activeTrace.spanId, span.spanContext().spanId);
        assert.strictEqual(activeTrace.span, span);
        assert.strictEqual(activeTrace.attemptSpan, undefined);
        assert.strictEqual(activeTrace.clientRequestSpan, undefined);
        span.end();
      });
    });

    it('returns client request span and trace/span IDs inside traceCall', async () => {
      let captured = getActiveTraceContext();
      await traceCall(dynamicArgs, staticArgs, async () => {
        captured = getActiveTraceContext();
        return 'ok';
      });

      const span = harness.requireSingleSpan('google-gax');
      assert.ok(captured);
      assert.strictEqual(captured.traceId, span.spanContext().traceId);
      assert.strictEqual(captured.spanId, span.spanContext().spanId);
      assert.strictEqual(
        captured.clientRequestSpan?.spanContext().spanId,
        span.spanContext().spanId,
      );
      assert.strictEqual(captured.span, captured.clientRequestSpan);
      assert.strictEqual(captured.attemptSpan, undefined);
    });

    it('returns attempt span, client request span, and trace/span IDs inside traceAttempt', async () => {
      let callCaptured = getActiveTraceContext();
      let attemptCaptured = getActiveTraceContext();
      await traceCall(dynamicArgs, staticArgs, async () => {
        callCaptured = getActiveTraceContext();
        return traceAttempt(dynamicArgs, staticArgs, async () => {
          attemptCaptured = getActiveTraceContext();
          return 'ok';
        });
      });

      const spans = harness.getSpans('google-gax');
      assert.strictEqual(spans.length, 2);
      const attemptSpan = spans[0];
      const clientSpan = spans[1];

      assert.ok(callCaptured);
      assert.strictEqual(
        callCaptured.traceId,
        clientSpan.spanContext().traceId,
      );
      assert.strictEqual(callCaptured.spanId, clientSpan.spanContext().spanId);
      assert.strictEqual(callCaptured.span, callCaptured.clientRequestSpan);
      assert.strictEqual(callCaptured.attemptSpan, undefined);

      assert.ok(attemptCaptured);
      assert.strictEqual(
        attemptCaptured.traceId,
        attemptSpan.spanContext().traceId,
      );
      assert.strictEqual(
        attemptCaptured.spanId,
        attemptSpan.spanContext().spanId,
      );
      assert.strictEqual(attemptCaptured.span, attemptCaptured.attemptSpan);
      assert.strictEqual(
        attemptCaptured.clientRequestSpan,
        callCaptured.clientRequestSpan,
      );
    });

    it('returns undefined when span context is invalid (no-op tracer)', async () => {
      trace.disable();
      let captured: ReturnType<typeof getActiveTraceContext>;
      await traceCall(dynamicArgs, staticArgs, async () => {
        captured = getActiveTraceContext();
        return 'ok';
      });
      assert.strictEqual(captured, undefined);
    });

    it('falls back to a valid outer span when attemptSpan and clientRequestSpan are NoopSpans', () => {
      const noopSpan = trace.wrapSpanContext(INVALID_SPAN_CONTEXT);
      trace.getTracer('user-app').startActiveSpan('user-span', userSpan => {
        const ctxWithNoopGaxSpans = context
          .active()
          .setValue(CLIENT_REQUEST_SPAN_KEY, noopSpan)
          .setValue(ATTEMPT_SPAN_KEY, noopSpan);

        context.with(ctxWithNoopGaxSpans, () => {
          const activeTrace = getActiveTraceContext();
          assert.ok(activeTrace);
          assert.strictEqual(
            activeTrace.traceId,
            userSpan.spanContext().traceId,
          );
          assert.strictEqual(activeTrace.spanId, userSpan.spanContext().spanId);
          assert.strictEqual(activeTrace.span, userSpan);
          assert.strictEqual(activeTrace.attemptSpan, undefined);
          assert.strictEqual(activeTrace.clientRequestSpan, undefined);
        });
        userSpan.end();
      });
    });
  });
});
