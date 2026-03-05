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

const assert = require('assert');
const {
  AlwaysOffSampler,
  AlwaysOnSampler,
  NodeTracerProvider,
  InMemorySpanExporter,
} = require('@opentelemetry/sdk-trace-node');
const {SpanStatusCode, TracerProvider} = require('@opentelemetry/api');
// eslint-disable-next-line n/no-extraneous-require
const {SimpleSpanProcessor} = require('@opentelemetry/sdk-trace-base');
const {
  TRACER_NAME,
  TRACER_VERSION,
  SPAN_NAMESPACE_PREFIX,
  getActiveOrNoopSpan,
  setSpanError,
  setSpanErrorAndException,
  startTrace,
} = require('../src/instrument');
const {
  ATTR_OTEL_SCOPE_NAME,
  ATTR_OTEL_SCOPE_VERSION,
  SEMATTRS_DB_NAME,
  SEMATTRS_DB_SQL_TABLE,
  SEMATTRS_DB_STATEMENT,
  SEMATTRS_DB_SYSTEM,
  SEMATTRS_EXCEPTION_MESSAGE,
} = require('@opentelemetry/semantic-conventions');

const {disableContextAndManager, setGlobalContextManager} = require('./helper');

const {
  AsyncHooksContextManager,
} = require('@opentelemetry/context-async-hooks');

describe('startTrace', () => {
  const globalExporter = new InMemorySpanExporter();
  const sampler = new AlwaysOnSampler();

  const globalProvider = new NodeTracerProvider({
    sampler: sampler,
    exporter: globalExporter,
    spanProcessors: [new SimpleSpanProcessor(globalExporter)],
  });
  globalProvider.register();

  const contextManager = new AsyncHooksContextManager();
  setGlobalContextManager(contextManager);

  afterEach(() => {
    globalExporter.forceFlush();
  });

  after(async () => {
    globalExporter.forceFlush();
    await globalProvider.shutdown();
    disableContextAndManager(contextManager);
  });

  it('with TracerProvider in global configuration', () => {
    startTrace('mySpan', {}, span => {
      span.end();

      assert.equal(
        span.name,
        SPAN_NAMESPACE_PREFIX + '.mySpan',
        'name mismatch',
      );
    });
  });

  it('with TracerProvider in options, skips using global TracerProvider', () => {
    const overridingExporter = new InMemorySpanExporter();
    const overridingProvider = new NodeTracerProvider({
      sampler: sampler,
      exporter: overridingExporter,
      spanProcessors: [new SimpleSpanProcessor(overridingExporter)],
    });

    startTrace(
      'aSpan',
      {opts: {tracerProvider: overridingProvider}},
      async span => {
        await new Promise(resolve => setTimeout(resolve, 400));
        span.end();

        const gotSpansFromGlobal = globalExporter.getFinishedSpans();
        assert.strictEqual(
          gotSpansFromGlobal.length,
          0,
          'Expected no spans from the global tracerProvider and exporter but got ${gotSpansFromGlobal.length}',
        );

        const gotSpansFromCurrent = overridingExporter.getFinishedSpans();
        assert.strictEqual(
          gotSpansFromCurrent.length,
          1,
          'Expected exactly 1 span but got ${gotSpansFromCurrent.length}',
        );

        overridingExporter.forceFlush();
        await overridingProvider.shutdown();
      },
    );
  });

  it('sanity check: TRACER_NAME, TRACER_VERSION', () => {
    assert.equal(!TRACER_NAME, false, 'TRACER_NAME must be set');
    assert.equal(!TRACER_VERSION, false, 'TRACER_VERSION must be set');
  });

  it('with semantic attributes', () => {
    const opts = {
      tableName: 'table',
      dbName: 'projects/PROJECT_ID/instances/INSTANCE_ID/databases/DATABASE_ID',
    };
    startTrace('aSpan', opts, span => {
      assert.equal(
        span.attributes[ATTR_OTEL_SCOPE_NAME],
        TRACER_NAME,
        'Missing OTEL_SCOPE_NAME attribute',
      );

      assert.equal(
        span.attributes[ATTR_OTEL_SCOPE_VERSION],
        TRACER_VERSION,
        'Missing OTEL_SCOPE_VERSION attribute',
      );

      assert.equal(
        span.attributes['gcp.client.service'],
        'spanner',
        'Missing gcp.client.service attribute',
      );

      assert.equal(
        span.attributes['gcp.client.version'],
        TRACER_VERSION,
        'Missing gcp.client.version attribute',
      );

      assert.equal(
        span.attributes['gcp.client.repo'],
        'googleapis/nodejs-spanner',
        'Missing gcp.client.repo attribute',
      );

      assert.equal(
        span.attributes['gcp.resource.name'],
        '//spanner.googleapis.com/projects/PROJECT_ID/instances/INSTANCE_ID/databases/DATABASE_ID',
        'Missing gcp.resource.name attribute',
      );

      assert.equal(
        span.attributes[SEMATTRS_DB_SQL_TABLE],
        'table',
        'Missing DB_SQL_TABLE attribute',
      );

      assert.equal(
        span.attributes[SEMATTRS_DB_NAME],
        'projects/PROJECT_ID/instances/INSTANCE_ID/databases/DATABASE_ID',
        'Missing DB_NAME attribute',
      );
    });
  });

  it('with enableExtendedTracing=true, no sql value set', () => {
    const opts = {opts: {enableExtendedTracing: true}};
    startTrace('aSpan', opts, span => {
      assert.equal(
        span.attributes[SEMATTRS_DB_STATEMENT],
        undefined,
        'Unexpected DB_STATEMENT attribute',
      );
    });
  });

  it('with enableExtendedTracing=true, sql string value set', () => {
    const opts = {
      opts: {enableExtendedTracing: true},
      sql: 'SELECT CURRENT_TIMESTAMP()',
    };

    startTrace('aSpan', opts, span => {
      assert.equal(
        span.attributes[SEMATTRS_DB_STATEMENT],
        'SELECT CURRENT_TIMESTAMP()',
        'Mismatched DB_STATEMENT attribute',
      );
    });
  });

  it('with enableExtendedTracing=false, sql string value set', () => {
    const opts = {
      opts: {enableExtendedTracing: false},
      sql: 'SELECt CURRENT_TIMESTAMP()',
    };

    startTrace('aSpan', opts, span => {
      assert.equal(
        span.attributes[SEMATTRS_DB_STATEMENT],
        undefined,
        'Mismatched DB_STATEMENT attribute',
      );
    });
  });

  it('with enableExtendedTracing=true, sql ExecuteSqlRequest value set', () => {
    const req = {sql: 'SELECT 1=1'};
    const opts = {
      opts: {enableExtendedTracing: true},
      sql: req,
    };

    startTrace('aSpan', opts, span => {
      assert.equal(
        span.attributes[SEMATTRS_DB_STATEMENT],
        'SELECT 1=1',
        'Mismatched DB_STATEMENT attribute',
      );
    });
  });

  it('with enableExtendedTracing=false, sql ExecuteSqlRequest value set', () => {
    const req = {sql: 'SELECT 1=1'};
    const opts = {
      opts: {enableExtendedTracing: true},
      sql: req,
    };

    startTrace('aSpan', opts, span => {
      assert.equal(
        span.attributes[SEMATTRS_DB_STATEMENT],
        req.sql,
        'Mismatched DB_STATEMENT attribute',
      );
    });
  });

  it('alwaysOffSampler used, no spans exported', () => {
    const overridingExporter = new InMemorySpanExporter();
    const overridingProvider = new NodeTracerProvider({
      sampler: new AlwaysOffSampler(),
      exporter: overridingExporter,
      spanProcessors: [new SimpleSpanProcessor(overridingExporter)],
    });
    overridingProvider.register();

    startTrace(
      'aSpan',
      {opts: {tracerProvider: overridingProvider}},
      async span => {
        await new Promise(resolve => setTimeout(resolve, 400));
        span.end();

        const gotSpansFromGlobal = globalExporter.getFinishedSpans();
        assert.strictEqual(
          gotSpansFromGlobal.length,
          0,
          'Expected no spans but got ${gotSpansFromGlobal.length}',
        );

        const gotSpansFromCurrent = overridingExporter.getFinishedSpans();
        assert.strictEqual(
          gotSpansFromCurrent.length,
          0,
          'Expected no spans but got ${gotSpansFromCurrent.length}',
        );

        overridingExporter.forceFlush();
        await overridingProvider.shutdown();
      },
    );
  });
});

describe('getActiveOrNoopSpan', () => {
  let globalProvider: typeof TracerProvider;
  let exporter: typeof InMemorySpanExporter;

  before(() => {
    exporter = new InMemorySpanExporter();
    globalProvider = new NodeTracerProvider({
      sampler: new AlwaysOffSampler(),
      exporter: exporter,
      spanProcessors: [new SimpleSpanProcessor(exporter)],
    });
    globalProvider.register();
  });

  beforeEach(() => {
    exporter.forceFlush();
  });

  after(async () => {
    await globalProvider.shutdown();
  });

  it('with no value should return a noopSpan and nothing exported', () => {
    const span = getActiveOrNoopSpan();
    assert.strictEqual(!span, false, 'the span MUST not be null regardless');
    span.updateName('aSpan should not crash');
    span.setStatus({message: 'done here'});
  });

  it('with a started span should return the currently active one', () => {
    startTrace('aSpan', {}, span => {
      const activeSpan = getActiveOrNoopSpan();
      assert.strictEqual(
        span.name,
        SPAN_NAMESPACE_PREFIX + '.aSpan',
        'names must match',
      );
      assert.strictEqual(
        span.name,
        activeSpan.name,
        `names must match between activeSpan or current one\n\tGot:  ${span.name}\n\tWant: ${activeSpan.name}`,
      );
      assert.strictEqual(
        span.startTime,
        activeSpan.startTime,
        'startTimes must match',
      );
      assert.ok(
        span.duration,
        undefined,
        'the unended span must have an undefined duration',
      );
      assert.ok(
        activeSpan.duration,
        undefined,
        'the unended span must have an undefined duration, got ${activeSpan.duration}',
      );
      assert.strictEqual(
        span.duration,
        activeSpan.duration,
        'durations must match',
      );
      span.end();
    });
  });
});

describe('setError', () => {
  const exporter = new InMemorySpanExporter();
  const provider = new NodeTracerProvider({
    sampler: new AlwaysOnSampler(),
    exporter: exporter,
    spanProcessors: [new SimpleSpanProcessor(exporter)],
  });
  provider.register();

  const contextManager = new AsyncHooksContextManager();
  setGlobalContextManager(contextManager);

  afterEach(() => {
    exporter.forceFlush();
  });

  after(async () => {
    exporter.forceFlush();
    await provider.shutdown();
    disableContextAndManager(contextManager);
  });

  it('passing in null error or null span should have no effect', () => {
    startTrace('aSpan', {opts: {tracerProvider: provider}}, span => {
      const status1 = span.status;
      let res = setSpanError(span, null);
      assert.strictEqual(res, false, 'nothing was set');
      const status2 = span.status;
      assert.strictEqual(
        status1,
        status2,
        'setting null error should have no effect',
      );

      res = setSpanError(null, null);
      assert.strictEqual(res, false, 'nothing was set');
    });
  });

  it('a non-empty string should set the message', () => {
    startTrace('aSpan', {opts: {tracerProvider: provider}}, span => {
      const res = setSpanError(span, 'this one');
      assert.strictEqual(res, true, 'value was set');
      span.end();

      const spans = exporter.getFinishedSpans();
      assert.strictEqual(spans.length, 1, 'exactly 1 span must be exported');

      const expSpan = spans[0];
      const status2 = expSpan.status;
      assert.strictEqual(status2.message, 'this one');
      assert.strictEqual(status2.code, SpanStatusCode.ERROR);
    });
  });
});

describe('setErrorAndException', () => {
  const exporter = new InMemorySpanExporter();
  const provider = new NodeTracerProvider({
    sampler: new AlwaysOnSampler(),
    exporter: exporter,
    spanProcessors: [new SimpleSpanProcessor(exporter)],
  });
  provider.register();

  const contextManager = new AsyncHooksContextManager();
  setGlobalContextManager(contextManager);

  afterEach(() => {
    exporter.forceFlush();
  });

  after(async () => {
    await provider.shutdown();
    disableContextAndManager(contextManager);
  });

  it('passing in null error or null span should have no effect', () => {
    startTrace('aSpan', {opts: {tracerProvider: provider}}, span => {
      const status1 = span.status;
      let res = setSpanErrorAndException(span, null);
      assert.strictEqual(res, false, 'nothing was set');
      const status2 = span.status;
      assert.strictEqual(
        status1,
        status2,
        'setting null error should have no effect',
      );

      res = setSpanErrorAndException(null, null);
      assert.strictEqual(res, false, 'nothing was set');
    });
  });

  it('a non-empty string should set the message', () => {
    startTrace('aSpan', {opts: {tracerProvider: provider}}, span => {
      const res = setSpanErrorAndException(span, 'this one');
      assert.strictEqual(res, true, 'value was set');
      span.end();

      const spans = exporter.getFinishedSpans();
      assert.strictEqual(spans.length, 1, 'exactly 1 span must be exported');

      const expSpan = spans[0];
      const status2 = expSpan.status;
      assert.strictEqual(status2.message, 'this one');
      assert.strictEqual(status2.code, SpanStatusCode.ERROR);

      assert.strictEqual(
        expSpan.events[0].attributes[SEMATTRS_EXCEPTION_MESSAGE],
        'this one',
        'the exception must have been recorded',
      );
    });
  });
});
