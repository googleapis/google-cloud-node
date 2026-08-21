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
  getGaxTracer,
  traceAttempt,
  DynamicTraceContext,
  StaticTraceContext,
} from '../../src/observability/TracerHelper';
import {OtelHarness} from './otelHarness';

describe('TracerHelper', () => {
  let harness: OtelHarness;

  beforeEach(() => {
    harness = new OtelHarness();
    harness.setup();
  });

  afterEach(() => {
    harness.teardown();
  });

  describe('getGaxTracer', () => {
    it('returns a tracer for google-gax', () => {
      const tracer = getGaxTracer();
      assert.ok(tracer);
    });
  });

  describe('traceAttempt', () => {
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

    it('creates and ends a span with correct name and attributes on success', async () => {
      const expectedResult = {data: 'test'};
      const result = await traceAttempt(dynamicArgs, staticArgs, async () => {
        return expectedResult;
      });

      assert.deepStrictEqual(result, expectedResult);

      const spans = harness.getSpans('google-gax');
      assert.strictEqual(spans.length, 1);

      const span = spans[0];
      assert.strictEqual(span.name, 'StorageClient.GetObject');
      assert.strictEqual(span.ended, true);
      assert.strictEqual(
        span.attributes['gcp.client.service'],
        'storage.googleapis.com',
      );
      assert.strictEqual(span.attributes['gcp.client.version'], '1.2.3');
      assert.strictEqual(
        span.attributes['gcp.repo'],
        'googleapis/google-cloud-node',
      );
      assert.strictEqual(
        span.attributes['gcp.artifact'],
        '@google-cloud/storage',
      );
      assert.strictEqual(span.attributes['gcp.method.name'], 'GetObject');
      assert.strictEqual(span.attributes['gcp.method.type'], 'grpc');
      assert.strictEqual(span.events.length, 0);
    });

    it('records error attributes, exceptions, and rethrows when fn throws an Error', async () => {
      const error = new Error('RPC Failed');
      error.name = 'CustomRpcError';

      await assert.rejects(
        async () => {
          await traceAttempt(dynamicArgs, staticArgs, async () => {
            throw error;
          });
        },
        (err: Error) => {
          assert.strictEqual(err.message, 'RPC Failed');
          return true;
        },
      );

      const spans = harness.getSpans('google-gax');
      assert.strictEqual(spans.length, 1);

      const span = spans[0];
      assert.strictEqual(span.name, 'StorageClient.GetObject');
      assert.strictEqual(span.ended, true);
      assert.strictEqual(span.attributes['error.message'], 'RPC Failed');
      assert.strictEqual(span.attributes['error.type'], 'Error');
      assert.strictEqual(span.attributes['exception.type'], 'CustomRpcError');
      assert.strictEqual(span.events.length, 1);
      assert.strictEqual(span.events[0].name, 'exception');
      assert.strictEqual(
        span.events[0].attributes?.['exception.message'],
        'RPC Failed',
      );
    });

    it('handles missing optional static arguments gracefully', async () => {
      const emptyStaticArgs: StaticTraceContext = {};
      const result = await traceAttempt(
        dynamicArgs,
        emptyStaticArgs,
        async () => {
          return 42;
        },
      );

      assert.strictEqual(result, 42);

      const spans = harness.getSpans('google-gax');
      assert.strictEqual(spans.length, 1);

      const span = spans[0];
      assert.strictEqual(span.name, 'StorageClient.GetObject');
      assert.strictEqual(span.ended, true);
      assert.strictEqual(span.attributes['gcp.client.service'], undefined);
      assert.strictEqual(span.attributes['gcp.client.version'], undefined);
      assert.strictEqual(span.attributes['gcp.repo'], undefined);
      assert.strictEqual(span.attributes['gcp.artifact'], undefined);
      assert.strictEqual(span.attributes['gcp.method.name'], 'GetObject');
      assert.strictEqual(span.attributes['gcp.method.type'], 'grpc');
    });

    it('supports http rpcType', async () => {
      const httpDynamicArgs: DynamicTraceContext = {
        clientName: 'ComputeClient',
        methodName: 'InsertInstance',
        rpcType: 'http',
      };

      await traceAttempt(httpDynamicArgs, staticArgs, async () => {
        return 'ok';
      });

      const spans = harness.getSpans('google-gax');
      assert.strictEqual(spans.length, 1);
      assert.strictEqual(spans[0].attributes['gcp.method.type'], 'http');
    });
  });
});
