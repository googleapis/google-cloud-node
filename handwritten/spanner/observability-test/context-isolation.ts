/*!
 * Copyright 2026 Google LLC. All Rights Reserved.
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
import {before, after, beforeEach, afterEach, describe, it} from 'mocha';
import * as sinon from 'sinon';
import {context, trace} from '@opentelemetry/api';
import {NodeTracerProvider} from '@opentelemetry/sdk-trace-node';
import {AlwaysOnSampler} from '@opentelemetry/sdk-trace-base';
import {Database} from '../src/database';
import {SessionPool} from '../src/session-pool';
import {MultiplexedSession} from '../src/multiplexed-session';
import {MetricsTracerFactory} from '../src/metrics/metrics-tracer-factory';
import {
  ensureInitialContextManagerSet,
  _resetTracingEnabledForTest,
} from '../src/instrument';

describe('OpenTelemetry Context Isolation Tests', () => {
  const sandbox = sinon.createSandbox();
  let provider: NodeTracerProvider;

  const MOCK_DATABASE = {
    batchCreateSessions: sandbox.stub().resolves([[]]),
    databaseRole: 'parent_role',
    _observabilityOptions: {},
  } as unknown as Database;

  before(() => {
    _resetTracingEnabledForTest();
    ensureInitialContextManagerSet();

    provider = new NodeTracerProvider({
      sampler: new AlwaysOnSampler(),
    });
    provider.register();
    _resetTracingEnabledForTest();
  });

  after(async () => {
    await provider.shutdown();
  });

  afterEach(() => {
    sandbox.restore();
  });

  describe('SessionPool background housekeeping timers', () => {
    let sessionPool: SessionPool;

    beforeEach(() => {
      sessionPool = new SessionPool(MOCK_DATABASE, {
        min: 0,
        max: 10,
        idlesAfter: 10,
        keepAlive: 30,
      });
    });

    afterEach(() => {
      sessionPool._stopHouseKeeping();
    });

    it('should schedule evict and keep-alive setInterval calls in ROOT_CONTEXT', () => {
      const tracer = trace.getTracer('test');

      const setIntervalStub = sandbox
        .stub(global, 'setInterval')
        .callsFake(() => {
          const activeSpan = trace.getSpan(context.active());

          // Assert that the active context is ROOT_CONTEXT (i.e., no active span)
          assert.strictEqual(
            activeSpan,
            undefined,
            'setInterval scheduling must be isolated within ROOT_CONTEXT and not carry any active request span',
          );
          return {
            unref: () => {},
          } as unknown as NodeJS.Timeout;
        });

      // Start an active request context
      tracer.startActiveSpan('request-span', span => {
        try {
          // Start housekeeping under the request context
          sessionPool._startHouseKeeping();
        } finally {
          span.end();
        }
      });

      // Verify that both evict and ping intervals were scheduled
      assert.strictEqual(setIntervalStub.callCount, 2);
    });
  });

  describe('MultiplexedSession background maintenance timer', () => {
    let multiplexedSession: MultiplexedSession;

    beforeEach(() => {
      multiplexedSession = new MultiplexedSession(MOCK_DATABASE);
    });

    afterEach(() => {
      if (multiplexedSession._refreshHandle) {
        clearInterval(multiplexedSession._refreshHandle);
      }
    });

    it('should schedule multiplexed session maintenance setInterval in ROOT_CONTEXT', () => {
      const tracer = trace.getTracer('test');

      const setIntervalStub = sandbox
        .stub(global, 'setInterval')
        .callsFake(() => {
          const activeSpan = trace.getSpan(context.active());

          // Assert that the active context is ROOT_CONTEXT (i.e., no active span)
          assert.strictEqual(
            activeSpan,
            undefined,
            'setInterval scheduling must be isolated within ROOT_CONTEXT and not carry any active request span',
          );
          return {
            unref: () => {},
          } as unknown as NodeJS.Timeout;
        });

      // Start an active request context
      tracer.startActiveSpan('request-span', span => {
        try {
          // Start maintenance under the request context
          multiplexedSession._maintain();
        } finally {
          span.end();
        }
      });

      // Verify that the refresh interval was scheduled
      assert.strictEqual(setIntervalStub.callCount, 1);
    });
  });

  describe('MetricsTracerFactory background cleanup timer', () => {
    beforeEach(async () => {
      MetricsTracerFactory.enabled = true;
      await MetricsTracerFactory.resetInstance();
    });

    afterEach(async () => {
      await MetricsTracerFactory.resetInstance();
    });

    it('should schedule MetricsTracerFactory cleanup setInterval in ROOT_CONTEXT', () => {
      const tracer = trace.getTracer('test');

      const setIntervalStub = sandbox
        .stub(global, 'setInterval')
        .callsFake(() => {
          const activeSpan = trace.getSpan(context.active());

          // Assert that the active context is ROOT_CONTEXT (i.e., no active span)
          assert.strictEqual(
            activeSpan,
            undefined,
            'setInterval scheduling must be isolated within ROOT_CONTEXT and not carry any active request span',
          );
          return {
            unref: () => {},
          } as unknown as NodeJS.Timeout;
        });

      // Start an active request context
      tracer.startActiveSpan('request-span', span => {
        try {
          // Instantiate the singleton under a request context
          MetricsTracerFactory.getInstance('mock-project-id');
        } finally {
          span.end();
        }
      });

      // Verify that the cleanup interval was scheduled
      assert.strictEqual(setIntervalStub.callCount, 1);
    });
  });
});
