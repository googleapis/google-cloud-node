/*!
 * Copyright 2024 Google LLC. All Rights Reserved.
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
import {before, beforeEach, afterEach, describe, it} from 'mocha';
import * as extend from 'extend';
import PQueue from 'p-queue';
import * as proxyquire from 'proxyquire';
import * as sinon from 'sinon';
import stackTrace = require('stack-trace');
const {
  AlwaysOnSampler,
  NodeTracerProvider,
  InMemorySpanExporter,
} = require('@opentelemetry/sdk-trace-node');
// eslint-disable-next-line n/no-extraneous-require
const {SimpleSpanProcessor} = require('@opentelemetry/sdk-trace-base');
// eslint-disable-next-line n/no-extraneous-require
const {SpanStatusCode} = require('@opentelemetry/api');

import {Database} from '../src/database';
import {Session} from '../src/session';
import * as sp from '../src/session-pool';

let pQueueOverride: typeof PQueue | null = null;

function FakePQueue(options) {
  return new (pQueueOverride || PQueue)(options);
}

FakePQueue.default = FakePQueue;

class FakeTransaction {
  options;
  constructor(options?) {
    this.options = options;
  }
  async begin(): Promise<void> {}
}

const fakeStackTrace = extend({}, stackTrace);

describe('SessionPool', () => {
  let sessionPool: sp.SessionPool;
  // tslint:disable-next-line variable-name
  let SessionPool: typeof sp.SessionPool;

  function noop() {}
  const DATABASE = {
    batchCreateSessions: noop,
    databaseRole: 'parent_role',
  } as unknown as Database;

  const sandbox = sinon.createSandbox();
  sandbox.stub().throws('Should not be called.');

  const createSession = (name = 'id', props?): Session => {
    props = props || {};

    return Object.assign(new Session(DATABASE, name), props, {
      create: sandbox.stub().resolves(),
      delete: sandbox.stub().resolves(),
      keepAlive: sandbox.stub().resolves(),
      transaction: sandbox.stub().returns(new FakeTransaction()),
    });
  };

  before(() => {
    SessionPool = proxyquire('../src/session-pool.js', {
      'p-queue': FakePQueue,
      'stack-trace': fakeStackTrace,
    }).SessionPool;
  });

  afterEach(() => {
    pQueueOverride = null;
    sandbox.restore();
  });

  const traceExporter = new InMemorySpanExporter();
  const sampler = new AlwaysOnSampler();
  const provider = new NodeTracerProvider({
    sampler: sampler,
    exporter: traceExporter,
    spanProcessors: [new SimpleSpanProcessor(traceExporter)],
  });

  beforeEach(() => {
    DATABASE.session = createSession;
    DATABASE._observabilityOptions = {
      tracerProvider: provider,
    };
    sessionPool = new SessionPool(DATABASE);
    sessionPool._observabilityOptions = DATABASE._observabilityOptions;
    traceExporter.reset();
  });

  describe('_createSessions', () => {
    const OPTIONS = 3;
    it('on exception from Database.batchCreateSessions', async () => {
      const ourException = new Error('this fails intentionally');
      sandbox.stub(DATABASE, 'batchCreateSessions').throws(ourException);
      sandbox.stub(sessionPool, 'release');

      await assert.rejects(async () => {
        await sessionPool._createSessions(OPTIONS);
      }, ourException);

      traceExporter.forceFlush();
      const spans = traceExporter.getFinishedSpans();

      const actualSpanNames: string[] = [];
      const actualEventNames: string[] = [];
      spans.forEach(span => {
        actualSpanNames.push(span.name);
        span.events.forEach(event => {
          actualEventNames.push(event.name);
        });
      });

      const expectedSpanNames = ['CloudSpanner.SessionPool.createSessions'];
      assert.deepStrictEqual(
        actualSpanNames,
        expectedSpanNames,
        `span names mismatch:\n\tGot:  ${actualSpanNames}\n\tWant: ${expectedSpanNames}`,
      );

      const expectedEventNames = [
        'Requesting 3 sessions',
        'Creating 3 sessions',
        'Requested for 3 sessions returned 0',
        'exception',
      ];
      assert.deepStrictEqual(
        actualEventNames,
        expectedEventNames,
        `Unexpected events:\n\tGot:  ${actualEventNames}\n\tWant: ${expectedEventNames}`,
      );

      const firstSpan = spans[0];
      assert.strictEqual(
        SpanStatusCode.ERROR,
        firstSpan.status.code,
        'Unexpected an span status code',
      );
      assert.strictEqual(
        ourException.message,
        firstSpan.status.message,
        'Unexpected span status message',
      );
    });

    it('without error', async () => {
      const RESPONSE = [[{}, {}, {}]];

      sandbox.stub(DATABASE, 'batchCreateSessions').resolves(RESPONSE);
      sandbox.stub(sessionPool, 'release');

      await sessionPool._createSessions(OPTIONS);
      assert.strictEqual(sessionPool.size, 3);

      traceExporter.forceFlush();
      const spans = traceExporter.getFinishedSpans();

      const actualSpanNames: string[] = [];
      const actualEventNames: string[] = [];
      spans.forEach(span => {
        actualSpanNames.push(span.name);
        span.events.forEach(event => {
          actualEventNames.push(event.name);
        });
      });

      const expectedSpanNames = ['CloudSpanner.SessionPool.createSessions'];
      assert.deepStrictEqual(
        actualSpanNames,
        expectedSpanNames,
        `span names mismatch:\n\tGot:  ${actualSpanNames}\n\tWant: ${expectedSpanNames}`,
      );

      const expectedEventNames = [
        'Requesting 3 sessions',
        'Creating 3 sessions',
        'Requested for 3 sessions returned 3',
      ];
      assert.deepStrictEqual(
        actualEventNames,
        expectedEventNames,
        `Unexpected events:\n\tGot:  ${actualEventNames}\n\tWant: ${expectedEventNames}`,
      );

      const firstSpan = spans[0];
      assert.strictEqual(
        SpanStatusCode.UNSET,
        firstSpan.status.code,
        'Unexpected an span status code',
      );
      assert.strictEqual(
        undefined,
        firstSpan.status.message,
        'Unexpected span status message',
      );
    });
  });
});
