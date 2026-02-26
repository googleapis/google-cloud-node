// Copyright 2024 Google LLC
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

import * as chaiAsPromised from 'chai-as-promised';
import {expect, use} from 'chai';
import {describe, it, beforeEach, afterEach, Test} from 'mocha';
import {
  Attributes,
  context,
  diag,
  DiagConsoleLogger,
  DiagLogLevel,
  ROOT_CONTEXT,
  SpanContext,
  trace,
  TraceFlags,
  Tracer,
  TracerProvider,
  Context as OpenTelemetryContext,
} from '@opentelemetry/api';
import {TraceExporter} from '@google-cloud/opentelemetry-cloud-trace-exporter';
import {FirestoreOpenTelemetryOptions, Settings} from '@google-cloud/firestore';
import {
  AlwaysOnSampler,
  BatchSpanProcessor,
  ConsoleSpanExporter,
  InMemorySpanExporter,
  NodeTracerProvider,
  ReadableSpan,
  SpanProcessor,
  TimedEvent,
} from '@opentelemetry/sdk-trace-node';
import {setLogFunction, Firestore} from '../src';
import {verifyInstance} from '../test/util/helpers';
import {
  ATTRIBUTE_GCP_RESOURCE_NAME,
  ATTRIBUTE_KEY_DOC_COUNT,
  ATTRIBUTE_SETTINGS_PREFIX,
  SPAN_NAME_AGGREGATION_QUERY_GET,
  SPAN_NAME_BATCH_COMMIT,
  SPAN_NAME_BATCH_GET_DOCUMENTS,
  SPAN_NAME_BULK_WRITER_COMMIT,
  SPAN_NAME_COL_REF_ADD,
  SPAN_NAME_COL_REF_LIST_DOCUMENTS,
  SPAN_NAME_DOC_REF_CREATE,
  SPAN_NAME_DOC_REF_DELETE,
  SPAN_NAME_DOC_REF_GET,
  SPAN_NAME_DOC_REF_LIST_COLLECTIONS,
  SPAN_NAME_DOC_REF_SET,
  SPAN_NAME_DOC_REF_UPDATE,
  SPAN_NAME_PARTITION_QUERY,
  SPAN_NAME_QUERY_GET,
  SPAN_NAME_TRANSACTION_COMMIT,
  SPAN_NAME_TRANSACTION_GET_AGGREGATION_QUERY,
  SPAN_NAME_TRANSACTION_GET_DOCUMENT,
  SPAN_NAME_TRANSACTION_GET_DOCUMENTS,
  SPAN_NAME_TRANSACTION_GET_QUERY,
  SPAN_NAME_TRANSACTION_RUN,
} from '../src/telemetry/trace-util';
import {AsyncLocalStorageContextManager} from '@opentelemetry/context-async-hooks';
import {cloudtrace_v1, auth as gAuth} from '@googleapis/cloudtrace';
import Schema$Trace = cloudtrace_v1.Schema$Trace;
import Schema$TraceSpan = cloudtrace_v1.Schema$TraceSpan;
import {logger} from '../src/logger';

use(chaiAsPromised);

const NUM_TRACE_ID_BYTES = 32;
const NUM_SPAN_ID_BYTES = 16;
const SPAN_NAME_TEST_ROOT = 'TestRootSpan';
const GET_TRACE_INITIAL_WAIT_MILLIS = 2000;
const GET_TRACE_RETRY_BACKOFF_MILLIS = 2000;
const GET_TRACE_MAX_RETRY_COUNT = 10;

const E2E_TEST_SUITE_TITLE = 'E2E';
const IN_MEMORY_TEST_SUITE_TITLE = 'IN-MEMORY';
const GLOBAL_OTEL_TEST_SUITE_TITLE = 'GLOBAL-OTEL';
const NON_GLOBAL_OTEL_TEST_SUITE_TITLE = 'NON-GLOBAL-OTEL';
const GRPC_TEST_SUITE_TITLE = 'GRPC';
const REST_TEST_SUITE_TITLE = 'REST';

// Enable OpenTelemetry debug message for local debugging.
diag.setLogger(new DiagConsoleLogger(), DiagLogLevel.DEBUG);

// Enable Firestore debug messages for local debugging.
if (process.env.NODE_ENV === 'DEBUG') {
  setLogFunction((msg: string) => {
    console.log(`LOG: ${msg}`);
  });
}

interface TestConfig {
  // In-Memory tests check trace correctness by inspecting traces in memory by
  // utilizing InMemorySpanExporter. These tests have `e2e` set to `false`.
  // End-to-End tests check trace correctness by querying the Google Cloud Trace
  // backend and making sure it has recorded all the expected spans. These
  // tests have `e2e` set to `true`.
  e2e: boolean;

  // OpenTelemetry allows registering a specific OpenTelemetry instance as the
  // "global" instance. We should make sure that the tracing works in two
  // circumstances: (1) the user provides us with a specific OpenTelemetry
  // instance. (2) the user does not provide an instance and we find the
  // global instance to use.
  useGlobalOpenTelemetry: boolean;

  // Whether the Firestore instance should use gRPC or REST.
  preferRest: boolean;
}

// Unfortunately the in-memory spans and Cloud Trace spans do not share the
// same data-structures. This interface is useful to abstract that away for
// testing.
// Also note that Cloud Trace currently does NOT return span attributes nor
// span events. So we'll have to leave those as empty and not check them for
// end-to-end tests.
class SpanData {
  constructor(
    public id: string | null | undefined,
    public parentId: string | null | undefined,
    public traceId: string,
    public name: string | null | undefined,
    public attributes: Attributes,
    public events: TimedEvent[],
  ) {}
  static fromInMemorySpan(span: ReadableSpan): SpanData {
    return new SpanData(
      span.spanContext().spanId,
      span.parentSpanContext?.spanId,
      span.spanContext().traceId,
      span.name,
      span.attributes,
      span.events,
    );
  }

  static fromCloudTraceSpan(span: Schema$TraceSpan, traceId: string): SpanData {
    return new SpanData(
      span.spanId,
      span.parentSpanId,
      traceId,
      span.name,
      {},
      [],
    );
  }
}

describe.skipEnterprise('Tracing Tests', () => {
  let firestore: Firestore;
  let tracerProvider: NodeTracerProvider;
  let inMemorySpanExporter: InMemorySpanExporter;
  let consoleSpanExporter: ConsoleSpanExporter;
  let gcpTraceExporter: TraceExporter;
  let tracer: Tracer;
  let cloudTraceInfo: Schema$Trace;
  let testConfig: TestConfig;

  // Custom SpanContext for each test, required for trace ID injection.
  let customSpanContext: SpanContext;

  // Custom Context for each test, required for trace ID injection.
  let customContext: OpenTelemetryContext;

  const spanIdToChildrenSpanIds = new Map<string, string[]>();
  const spanIdToSpanData = new Map<string, SpanData>();
  let rootSpanIds: string[] = [];

  function afterEachTest(): Promise<void> {
    spanIdToChildrenSpanIds.clear();
    spanIdToSpanData.clear();
    rootSpanIds = [];

    return verifyInstance(firestore);
  }

  function getOpenTelemetryOptions(
    tracerProvider: TracerProvider,
  ): FirestoreOpenTelemetryOptions {
    const options: FirestoreOpenTelemetryOptions = {
      tracerProvider: undefined,
    };

    // If we are *not* using a global OpenTelemetry instance, a TracerProvider
    // must be passed to the Firestore SDK.
    if (!testConfig.useGlobalOpenTelemetry) {
      options.tracerProvider = tracerProvider;
    }

    return options;
  }

  function generateRandomHexString(length: number): string {
    if (length <= 0) {
      throw new Error('Length must be a positive integer');
    }

    const hexCharacters = '0123456789abcdef';
    let hexString = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * hexCharacters.length);
      hexString += hexCharacters[randomIndex];
    }

    return hexString;
  }

  function getNewSpanContext(): SpanContext {
    const spanContext: SpanContext = {
      traceId: generateRandomHexString(NUM_TRACE_ID_BYTES),
      spanId: generateRandomHexString(NUM_SPAN_ID_BYTES),
      traceFlags: TraceFlags.SAMPLED,
    };
    logger('getNewSpanContext', null, `custom span context:${spanContext}`);
    return spanContext;
  }

  function beforeEachTest(test: Test) {
    testConfig = {
      preferRest: test.parent?.title === REST_TEST_SUITE_TITLE,
      useGlobalOpenTelemetry:
        test.parent?.parent?.title === GLOBAL_OTEL_TEST_SUITE_TITLE,
      e2e: test.parent?.parent?.parent?.title === E2E_TEST_SUITE_TITLE,
    };

    logger('beforeEach', null, 'Starting test with config:', testConfig);

    // Remove the global tracer provider in case anything was registered
    // in order to avoid duplicate global tracers.
    trace.disable();
    context.disable();

    // Set up a context manager.
    const contextManager = new AsyncLocalStorageContextManager();
    contextManager.enable();
    context.setGlobalContextManager(contextManager);

    inMemorySpanExporter = new InMemorySpanExporter();
    consoleSpanExporter = new ConsoleSpanExporter();
    gcpTraceExporter = new TraceExporter();

    const spanProcessors: SpanProcessor[] = [
      // Always add the console exporter for local debugging.
      new BatchSpanProcessor(consoleSpanExporter),
    ];

    if (testConfig.e2e) {
      spanProcessors.push(new BatchSpanProcessor(gcpTraceExporter));
    } else {
      spanProcessors.push(new BatchSpanProcessor(inMemorySpanExporter));
    }

    // Create a new tracer and span processor for each test to make sure there
    // are no overlaps when reading the results.
    tracerProvider = new NodeTracerProvider({
      sampler: new AlwaysOnSampler(),
      spanProcessors,
    });

    if (testConfig.useGlobalOpenTelemetry) {
      trace.setGlobalTracerProvider(tracerProvider);
    }

    // Using a unique tracer name for each test.
    tracer = tracerProvider.getTracer(`${test.title}${Date.now()}`);

    customSpanContext = getNewSpanContext();
    customContext = trace.setSpanContext(ROOT_CONTEXT, customSpanContext);

    const settings: Settings = {
      preferRest: testConfig.preferRest,
      openTelemetry: getOpenTelemetryOptions(tracerProvider),
    };

    // Named-database tests use an environment variable to specify the database ID. Add it to the settings.
    if (process.env.FIRESTORE_NAMED_DATABASE) {
      settings.databaseId = process.env.FIRESTORE_NAMED_DATABASE;
    }
    // If a database ID has not been specified in the settings, check whether
    // it's been specified using an environment variable.
    if (!settings.databaseId && process.env.DATABASE_ID) {
      settings.databaseId = process.env.DATABASE_ID;
    }
    // If a Project ID has not been specified in the settings, check whether
    // it's been specified using an environment variable.
    if (!settings.projectId && process.env.PROJECT_ID) {
      settings.projectId = process.env.PROJECT_ID;
    }

    firestore = new Firestore(settings);
  }

  function getSettingsAttributes(): Attributes {
    const settingsAttributes: Attributes = {};
    settingsAttributes['otel.scope.name'] = require('../../package.json').name;
    settingsAttributes['otel.scope.version'] =
      require('../../package.json').version;
    settingsAttributes[`${ATTRIBUTE_SETTINGS_PREFIX}.database_id`] =
      firestore.databaseId;
    settingsAttributes[`${ATTRIBUTE_SETTINGS_PREFIX}.host`] =
      'firestore.googleapis.com:443';
    settingsAttributes[`${ATTRIBUTE_SETTINGS_PREFIX}.prefer_REST`] =
      testConfig.preferRest;
    settingsAttributes[`${ATTRIBUTE_SETTINGS_PREFIX}.max_idle_channels`] = 1;
    settingsAttributes[`${ATTRIBUTE_SETTINGS_PREFIX}.initial_retry_delay`] =
      '0.1s';
    settingsAttributes[`${ATTRIBUTE_SETTINGS_PREFIX}.initial_rpc_timeout`] =
      '60s';
    settingsAttributes[`${ATTRIBUTE_SETTINGS_PREFIX}.total_timeout`] = '600s';
    settingsAttributes[`${ATTRIBUTE_SETTINGS_PREFIX}.max_retry_delay`] = '60s';
    settingsAttributes[`${ATTRIBUTE_SETTINGS_PREFIX}.max_rpc_timeout`] = '60s';
    settingsAttributes[`${ATTRIBUTE_SETTINGS_PREFIX}.retry_delay_multiplier`] =
      '1.3';
    settingsAttributes[`${ATTRIBUTE_SETTINGS_PREFIX}.rpc_timeout_multiplier`] =
      '1';

    // Project ID is not set on the Firestore object until _after_ the first
    // operation is done. Therefore, the spans that are created _before_ the
    // first operation do not contain a project ID.
    try {
      const projectId = firestore.projectId;
      settingsAttributes[`${ATTRIBUTE_SETTINGS_PREFIX}.project_id`] = projectId;
    } catch (e) {
      // Project ID has not been set yet.
    }

    return settingsAttributes;
  }

  // Take a function and runs it inside a new root span. This makes it possible to
  // encapsulate all the SDK-generated spans inside a test root span. It also makes
  // it easy to query a trace storage backend for a known trace ID and span Id.
  function runFirestoreOperationInRootSpan<F extends () => void>(
    fn: F,
  ): Promise<void> {
    return tracer.startActiveSpan(
      SPAN_NAME_TEST_ROOT,
      {},
      customContext,
      async span => {
        await fn();
        span.end();
      },
    );
  }

  // Returns true on success, and false otherwise.
  async function waitForCompletedInMemorySpans(): Promise<boolean> {
    await tracerProvider.forceFlush();
    await inMemorySpanExporter.forceFlush();
    await new Promise(resolve => setTimeout(resolve, 1000));
    return true;
  }

  // Returns true on success, and false otherwise.
  async function waitForCompletedCloudTraceSpans(
    numExpectedSpans: number,
  ): Promise<boolean> {
    const auth = new gAuth.GoogleAuth({
      projectId: firestore.projectId,
      scopes: ['https://www.googleapis.com/auth/cloud-platform'],
    });
    const client = new cloudtrace_v1.Cloudtrace({auth});
    const projectTraces = new cloudtrace_v1.Resource$Projects$Traces(
      client.context,
    );

    // Querying the trace from Cloud Trace immediately is almost always going
    // to fail. So we have an initial delay before making our first attempt.
    await new Promise(resolve =>
      setTimeout(resolve, GET_TRACE_INITIAL_WAIT_MILLIS),
    );

    let remainingAttempts = GET_TRACE_MAX_RETRY_COUNT;
    let receivedFullTrace = false;
    do {
      try {
        const getTraceResponse = await projectTraces.get({
          projectId: firestore.projectId,
          traceId: customSpanContext.traceId,
        });

        cloudTraceInfo = getTraceResponse.data;

        receivedFullTrace = cloudTraceInfo.spans?.length === numExpectedSpans;
        logger(
          'waitForCompletedCloudTraceSpans',
          null,
          `fetched a trace with ${cloudTraceInfo.spans?.length} spans`,
        );
      } catch (error) {
        logger(
          'waitForCompletedCloudTraceSpans',
          null,
          'failed with error:',
          error,
        );
      }

      // Using a constant backoff for each attempt.
      if (!receivedFullTrace) {
        logger(
          'waitForCompletedCloudTraceSpans',
          null,
          `Could not fetch a full trace from the server. Retrying in ${GET_TRACE_RETRY_BACKOFF_MILLIS}ms.`,
        );
        await new Promise(resolve =>
          setTimeout(resolve, GET_TRACE_RETRY_BACKOFF_MILLIS),
        );
      }
    } while (!receivedFullTrace && --remainingAttempts > 0);
    return receivedFullTrace;
  }

  async function waitForCompletedSpans(
    numExpectedSpans: number,
  ): Promise<void> {
    let success = false;
    if (testConfig.e2e) {
      success = await waitForCompletedCloudTraceSpans(numExpectedSpans);
    } else {
      success = await waitForCompletedInMemorySpans();
    }

    if (success) {
      buildSpanMaps();
    }

    // Tests are able to perform some Firestore operations inside
    // `runFirestoreOperationInRootSpan`, and some Firestore operations outside
    // of it. Therefore, if a given test intends to capture some (but not all) spans,
    // the in-memory trace will have more spans than `numExpectedSpans`.
    expect(spanIdToSpanData.size).to.greaterThanOrEqual(
      numExpectedSpans,
      `Could not find expected number of spans (${numExpectedSpans})`,
    );
  }

  function buildSpanMapsFromInMemorySpanExporter(): void {
    const spans = inMemorySpanExporter.getFinishedSpans();
    spans.forEach(span => {
      const id = span?.spanContext().spanId;
      const parentId = span?.parentSpanContext?.spanId;
      if (!parentId || span.name === SPAN_NAME_TEST_ROOT) {
        rootSpanIds.push(id);
      } else {
        let children = spanIdToChildrenSpanIds.get(parentId);
        // Initialize to empty array if it hasn't been seen before.
        if (!children) {
          children = [];
        }
        // Add the new child.
        children.push(id);
        spanIdToChildrenSpanIds.set(parentId, children);
      }
      spanIdToSpanData.set(id, SpanData.fromInMemorySpan(span));
    });
  }

  function buildSpanMapsFromCloudTraceInfo(): void {
    const spans = cloudTraceInfo.spans;
    spans?.forEach(span => {
      const id = span.spanId;
      const parentId = span.parentSpanId;
      if (!parentId || span.name === SPAN_NAME_TEST_ROOT) {
        rootSpanIds.push(id!);
      } else {
        let children = spanIdToChildrenSpanIds.get(parentId);
        if (!children) {
          children = [];
        }
        children.push(id!);
        spanIdToChildrenSpanIds.set(parentId, children);
      }
      spanIdToSpanData.set(
        id!,
        SpanData.fromCloudTraceSpan(span, customSpanContext.traceId),
      );
    });
  }

  function buildSpanMaps(): void {
    if (testConfig.e2e) {
      buildSpanMapsFromCloudTraceInfo();
    } else {
      buildSpanMapsFromInMemorySpanExporter();
    }
    logger(
      'buildSpanMaps',
      null,
      'Built the following spans:',
      rootSpanIds,
      spanIdToSpanData,
      spanIdToChildrenSpanIds,
    );
  }

  function getChildSpans(spanId: string): string[] | undefined {
    return spanIdToChildrenSpanIds.get(spanId);
  }

  // Returns the first span it can find with the given name, or null if it cannot find a span with the given name.
  // If there are multiple spans with the same name, it'll return the first one.
  function getSpanByName(spanName: string): SpanData | null {
    for (const spanData of spanIdToSpanData.values()) {
      if (spanData.name === spanName) {
        return spanData;
      }
    }
    return null;
  }

  // Returns the array of spans that match the given span hierarchy names starting
  // at the given root. Returns an empty list if it cannot find such hierarchy under
  // the given root.
  function dfsSpanHierarchy(
    rootSpanId: string,
    spanNamesHierarchy: string[],
  ): SpanData[] {
    // This function returns an empty list if it cannot find a full match.
    const notAMatch: SpanData[] = [];
    const rootSpan = spanIdToSpanData.get(rootSpanId);

    if (spanNamesHierarchy.length === 0 || !rootSpan) {
      return notAMatch;
    }

    if (spanIdToSpanData.get(rootSpanId)?.name !== spanNamesHierarchy[0]) {
      // The root names didn't match.
      return notAMatch;
    } else {
      // The root names matched. The new hierarchy to match can be obtained by
      // popping the first element of `spanNamesHierarchy`.
      const newSpanNamesHierarchy = spanNamesHierarchy.slice(1);

      const children = getChildSpans(rootSpanId);
      if (!children || children.length === 0) {
        if (newSpanNamesHierarchy.length === 0) {
          // The root span doesn't have any more children, and there are no
          // more span names to match. This is a successful match, and it is
          // a base case for the recursion.
          return [rootSpan];
        } else {
          // The root span doesn't have any more children, but there are still
          // more span names to match.
          return notAMatch;
        }
      } else {
        // See which (if any) of the child trees matches `newSpanNamesHierarchy`.
        for (let childIndex = 0; childIndex < children.length; ++childIndex) {
          const newRootSpanId = children[childIndex];
          const subtreeMatch = dfsSpanHierarchy(
            newRootSpanId,
            newSpanNamesHierarchy,
          );
          if (subtreeMatch.length > 0) {
            // We found a full match in the child tree.
            return [rootSpan].concat(subtreeMatch);
          }
        }

        // If none of the child trees matched `newSpanNamesHierarchy`, we were
        // not able to find a full match anywhere in our child trees.
        return notAMatch;
      }
    }
  }

  // Asserts that the span hierarchy exists for the given span names.
  // The hierarchy starts with the root span, followed by the child span,
  // grandchild span, and so on. It also asserts that all the given spans belong
  // to the same trace, and that Firestore-generated spans contain the expected
  // Firestore attributes.
  function expectSpanHierarchy(...spanNamesHierarchy: string[]): void {
    expect(spanNamesHierarchy.length).to.be.greaterThan(
      0,
      'The expected spans hierarchy was empty',
    );

    let matchingSpanHierarchy: SpanData[] = [];

    // The Firestore operations that have been executed generate a number of
    // spans. The span names, however, are not unique. For example, we could have:
    // "DocRef.Get" (id:1) -> "grpc.GET" (id:2) -> "POST" (id:3)
    // "DocRef.Set" (id:4) -> "grpc.SET" (id:5) -> "POST" (id:6)
    // Note that span names are not unique (e.g. span 3 and span 6).
    // Let's say we want to check if the following span hierarchy exists:
    // [DocRef.Set -> grpc.SET -> POST]
    // We start at each root span (span 1 and span 4 in this case), and check if
    // the span hierarchy matches the given `spanNamesHierarchy`.
    for (let i = 0; i < rootSpanIds.length; ++i) {
      matchingSpanHierarchy = dfsSpanHierarchy(
        rootSpanIds[i],
        spanNamesHierarchy,
      );
      if (matchingSpanHierarchy.length > 0) break;
    }

    expect(matchingSpanHierarchy.length).to.be.greaterThan(
      0,
      `Was not able to find the following span hierarchy: ${spanNamesHierarchy}`,
    );
    logger(
      'expectSpanHierarchy',
      null,
      'Found the following span hierarchy:',
      matchingSpanHierarchy,
    );

    for (let i = 0; i + 1 < matchingSpanHierarchy.length; ++i) {
      const parentSpan = matchingSpanHierarchy[i];
      const childSpan = matchingSpanHierarchy[i + 1];
      expect(childSpan.traceId).to.equal(
        parentSpan.traceId,
        `'${childSpan.name}' and '${parentSpan.name}' spans do not belong to the same trace`,
      );

      // The Cloud Trace API does not return span attributes and events.
      if (!testConfig.e2e) {
        const settingsAttributes = getSettingsAttributes();
        for (const attributesKey in settingsAttributes) {
          if (
            attributesKey.endsWith('.project_id') &&
            i + 1 !== matchingSpanHierarchy.length
          ) {
            // Project ID is not set on the Firestore object until _after_ the first
            // operation is done. Therefore, the spans that are created _before_ the
            // first operation do not contain a project ID. So, we'll just compare
            // this attribute on the leaf spans.
          } else {
            expect(childSpan.attributes[attributesKey]).to.be.equal(
              settingsAttributes[attributesKey],
            );
          }
        }
      }
    }
  }

  // Ensures that the given span exists and has exactly all the given attributes.
  function expectSpanHasAttributes(
    spanName: string,
    attributes: Attributes,
  ): void {
    // The Cloud Trace API does not return span attributes and events.
    if (testConfig.e2e) {
      return;
    }

    // Expect that the span exists first.
    const span = getSpanByName(spanName);
    expect(span, `Could not find the span named ${spanName}`).to.not.be.null;

    // Assert that the expected attributes are present in the span attributes.
    // Note that the span attributes may be a superset of the attributes passed
    // to this function.
    for (const attributesKey in attributes) {
      expect(span!.attributes[attributesKey]).to.be.equal(
        attributes[attributesKey],
      );
    }
  }

  // Ensures that the given span exists and has the given attributes.
  function expectSpanHasEvents(spanName: string, eventNames: string[]): void {
    // The Cloud Trace API does not return span attributes and events.
    if (testConfig.e2e) {
      return;
    }

    // Expect that the span exists first.
    const span = getSpanByName(spanName);
    expect(span, `Could not find the span named ${spanName}`).to.not.be.null;

    // Assert that the expected attributes are present in the span attributes.
    // Note that the span attributes may be a superset of the attributes passed
    // to this function.
    if (span?.events) {
      const numEvents = eventNames.length;
      expect(numEvents).to.equal(span.events.length);
      for (let i = 0; i < numEvents; ++i) {
        expect(span.events[i].name).to.equal(eventNames[i]);
      }
    }
  }

  describe(IN_MEMORY_TEST_SUITE_TITLE, () => {
    describe(NON_GLOBAL_OTEL_TEST_SUITE_TITLE, () => {
      describe(GRPC_TEST_SUITE_TITLE, () => {
        beforeEach(function () {
          beforeEachTest(this.currentTest!);
        });
        runTestCases();
        afterEach(async () => afterEachTest());
      });
      describe(REST_TEST_SUITE_TITLE, () => {
        beforeEach(function () {
          beforeEachTest(this.currentTest!);
        });
        runTestCases();
        afterEach(async () => afterEachTest());
      });
    });
    describe(GLOBAL_OTEL_TEST_SUITE_TITLE, () => {
      describe(GRPC_TEST_SUITE_TITLE, () => {
        beforeEach(function () {
          beforeEachTest(this.currentTest!);
        });
        runTestCases();
        afterEach(async () => afterEachTest());
      });
      describe(REST_TEST_SUITE_TITLE, () => {
        beforeEach(function () {
          beforeEachTest(this.currentTest!);
        });
        runTestCases();
        afterEach(async () => afterEachTest());
      });
    });
  });

  describe(E2E_TEST_SUITE_TITLE, () => {
    describe(NON_GLOBAL_OTEL_TEST_SUITE_TITLE, () => {
      describe(GRPC_TEST_SUITE_TITLE, () => {
        beforeEach(function () {
          beforeEachTest(this.currentTest!);
        });
        runTestCases();
        afterEach(async () => afterEachTest());
      });
      describe(REST_TEST_SUITE_TITLE, () => {
        beforeEach(function () {
          beforeEachTest(this.currentTest!);
        });
        runTestCases();
        afterEach(async () => afterEachTest());
      });
    });
    describe(GLOBAL_OTEL_TEST_SUITE_TITLE, () => {
      describe(GRPC_TEST_SUITE_TITLE, () => {
        beforeEach(function () {
          beforeEachTest(this.currentTest!);
        });
        runTestCases();
        afterEach(async () => afterEachTest());
      });
      describe(REST_TEST_SUITE_TITLE, () => {
        beforeEach(function () {
          beforeEachTest(this.currentTest!);
        });
        runTestCases();
        afterEach(async () => afterEachTest());
      });
    });
  });

  function runTestCases() {
    it('document reference get()', async () => {
      await runFirestoreOperationInRootSpan(() =>
        firestore.collection('foo').doc('bar').get(),
      );
      await waitForCompletedSpans(3);
      expectSpanHierarchy(
        SPAN_NAME_TEST_ROOT,
        SPAN_NAME_DOC_REF_GET,
        SPAN_NAME_BATCH_GET_DOCUMENTS,
      );
      expectSpanHasEvents(SPAN_NAME_BATCH_GET_DOCUMENTS, [
        'Firestore.batchGetDocuments: Start',
        'Firestore.batchGetDocuments: First response received',
        'Firestore.batchGetDocuments: Completed',
      ]);

      expectSpanHasAttributes(SPAN_NAME_BATCH_GET_DOCUMENTS, {
        [ATTRIBUTE_GCP_RESOURCE_NAME]: `//firestore.googleapis.com/projects/${firestore.projectId}/databases/${firestore.databaseId}`,
      });
    });

    it('document reference create()', async () => {
      await runFirestoreOperationInRootSpan(() =>
        firestore.collection('foo').doc().create({}),
      );
      await waitForCompletedSpans(3);
      expectSpanHierarchy(
        SPAN_NAME_TEST_ROOT,
        SPAN_NAME_DOC_REF_CREATE,
        SPAN_NAME_BATCH_COMMIT,
      );

      expectSpanHasAttributes(SPAN_NAME_BATCH_COMMIT, {
        [ATTRIBUTE_GCP_RESOURCE_NAME]: `//firestore.googleapis.com/projects/${firestore.projectId}/databases/${firestore.databaseId}`,
      });
    });

    it('document reference delete()', async () => {
      await runFirestoreOperationInRootSpan(() =>
        firestore.collection('foo').doc('bar').delete(),
      );
      await waitForCompletedSpans(3);
      expectSpanHierarchy(
        SPAN_NAME_TEST_ROOT,
        SPAN_NAME_DOC_REF_DELETE,
        SPAN_NAME_BATCH_COMMIT,
      );

      expectSpanHasAttributes(SPAN_NAME_BATCH_COMMIT, {
        [ATTRIBUTE_GCP_RESOURCE_NAME]: `//firestore.googleapis.com/projects/${firestore.projectId}/databases/${firestore.databaseId}`,
      });
    });

    it('document reference set()', async () => {
      await runFirestoreOperationInRootSpan(() =>
        firestore.collection('foo').doc('bar').set({foo: 'bar'}),
      );
      await waitForCompletedSpans(3);
      expectSpanHierarchy(
        SPAN_NAME_TEST_ROOT,
        SPAN_NAME_DOC_REF_SET,
        SPAN_NAME_BATCH_COMMIT,
      );

      expectSpanHasAttributes(SPAN_NAME_BATCH_COMMIT, {
        [ATTRIBUTE_GCP_RESOURCE_NAME]: `//firestore.googleapis.com/projects/${firestore.projectId}/databases/${firestore.databaseId}`,
      });
    });

    it('document reference update()', async () => {
      // Make sure the document exists before updating it.
      // Perform the `set` operation outside of the root span.
      await firestore.collection('foo').doc('bar').set({foo: 'bar'});

      await runFirestoreOperationInRootSpan(() =>
        firestore.collection('foo').doc('bar').update('foo', 'bar2'),
      );
      await waitForCompletedSpans(3);
      expectSpanHierarchy(
        SPAN_NAME_TEST_ROOT,
        SPAN_NAME_DOC_REF_UPDATE,
        SPAN_NAME_BATCH_COMMIT,
      );

      expectSpanHasAttributes(SPAN_NAME_BATCH_COMMIT, {
        [ATTRIBUTE_GCP_RESOURCE_NAME]: `//firestore.googleapis.com/projects/${firestore.projectId}/databases/${firestore.databaseId}`,
      });
    });

    it('document reference list collections', async () => {
      await runFirestoreOperationInRootSpan(() =>
        firestore.collection('foo').doc('bar').listCollections(),
      );
      await waitForCompletedSpans(2);
      expectSpanHierarchy(
        SPAN_NAME_TEST_ROOT,
        SPAN_NAME_DOC_REF_LIST_COLLECTIONS,
      );

      expectSpanHasAttributes(SPAN_NAME_DOC_REF_LIST_COLLECTIONS, {
        [ATTRIBUTE_GCP_RESOURCE_NAME]: `//firestore.googleapis.com/projects/${firestore.projectId}/databases/${firestore.databaseId}`,
      });
    });

    it('aggregate query get()', async () => {
      await runFirestoreOperationInRootSpan(() =>
        firestore.collection('foo').count().get(),
      );
      await waitForCompletedSpans(2);
      expectSpanHierarchy(SPAN_NAME_TEST_ROOT, SPAN_NAME_AGGREGATION_QUERY_GET);
      expectSpanHasEvents(SPAN_NAME_AGGREGATION_QUERY_GET, [
        'Firestore.runAggregationQuery: Start',
        'Firestore.runAggregationQuery: First response received',
        'Firestore.runAggregationQuery: Completed',
      ]);
    });

    it('collection reference add()', async () => {
      await runFirestoreOperationInRootSpan(() =>
        firestore.collection('foo').add({foo: 'bar'}),
      );
      await waitForCompletedSpans(4);
      expectSpanHierarchy(
        SPAN_NAME_TEST_ROOT,
        SPAN_NAME_COL_REF_ADD,
        SPAN_NAME_DOC_REF_CREATE,
        SPAN_NAME_BATCH_COMMIT,
      );

      expectSpanHasAttributes(SPAN_NAME_BATCH_COMMIT, {
        [ATTRIBUTE_GCP_RESOURCE_NAME]: `//firestore.googleapis.com/projects/${firestore.projectId}/databases/${firestore.databaseId}`,
      });
    });

    // Enterprise: field mask is not supported
    it.skipEnterprise('collection reference list documents', async () => {
      await runFirestoreOperationInRootSpan(() =>
        firestore.collection('foo').listDocuments(),
      );
      await waitForCompletedSpans(2);
      expectSpanHierarchy(
        SPAN_NAME_TEST_ROOT,
        SPAN_NAME_COL_REF_LIST_DOCUMENTS,
      );

      expectSpanHasAttributes(SPAN_NAME_COL_REF_LIST_DOCUMENTS, {
        [ATTRIBUTE_GCP_RESOURCE_NAME]: `//firestore.googleapis.com/projects/${firestore.projectId}/databases/${firestore.databaseId}`,
      });
    });

    it('query get()', async () => {
      await runFirestoreOperationInRootSpan(() =>
        firestore.collection('foo').where('foo', '==', 'bar').limit(1).get(),
      );
      await waitForCompletedSpans(2);
      expectSpanHierarchy(SPAN_NAME_TEST_ROOT, SPAN_NAME_QUERY_GET);
      expectSpanHasEvents(SPAN_NAME_QUERY_GET, [
        'RunQuery',
        'Firestore.runQuery: Start',
        'Firestore.runQuery: First response received',
        'Firestore.runQuery: Completed',
      ]);

      expectSpanHasAttributes(SPAN_NAME_QUERY_GET, {
        [ATTRIBUTE_GCP_RESOURCE_NAME]: `//firestore.googleapis.com/projects/${firestore.projectId}/databases/${firestore.databaseId}`,
      });
    });

    it('firestore getAll()', async () => {
      const docRef1 = firestore.collection('foo').doc('1');
      const docRef2 = firestore.collection('foo').doc('2');
      await runFirestoreOperationInRootSpan(() =>
        firestore.getAll(docRef1, docRef2),
      );
      await waitForCompletedSpans(2);
      expectSpanHierarchy(SPAN_NAME_TEST_ROOT, SPAN_NAME_BATCH_GET_DOCUMENTS);
      expectSpanHasEvents(SPAN_NAME_BATCH_GET_DOCUMENTS, [
        'Firestore.batchGetDocuments: Start',
        'Firestore.batchGetDocuments: First response received',
        'Firestore.batchGetDocuments: Completed',
      ]);

      expectSpanHasAttributes(SPAN_NAME_BATCH_GET_DOCUMENTS, {
        [ATTRIBUTE_GCP_RESOURCE_NAME]: `//firestore.googleapis.com/projects/${firestore.projectId}/databases/${firestore.databaseId}`,
      });
    });

    it('transaction', async () => {
      const docRef1 = firestore.collection('foo').doc('bar');
      const docRef2 = firestore.collection('foo').doc('bar');

      await runFirestoreOperationInRootSpan(async () => {
        return firestore.runTransaction(async transaction => {
          await transaction.get(docRef1);
          await transaction.getAll(docRef1, docRef2);
          await transaction.get(firestore.collection('foo').limit(1));
          await transaction.get(firestore.collection('nonexistent').count());
          transaction.set(firestore.collection('foo').doc(), {foo: 'bar'});
        });
      });

      await waitForCompletedSpans(7);
      expectSpanHierarchy(
        SPAN_NAME_TEST_ROOT,
        SPAN_NAME_TRANSACTION_RUN,
        SPAN_NAME_TRANSACTION_GET_DOCUMENT,
      );

      expectSpanHasAttributes(SPAN_NAME_TRANSACTION_GET_DOCUMENT, {
        [ATTRIBUTE_GCP_RESOURCE_NAME]: `//firestore.googleapis.com/projects/${firestore.projectId}/databases/${firestore.databaseId}`,
      });

      expectSpanHierarchy(
        SPAN_NAME_TEST_ROOT,
        SPAN_NAME_TRANSACTION_RUN,
        SPAN_NAME_TRANSACTION_GET_DOCUMENTS,
      );

      expectSpanHasAttributes(SPAN_NAME_TRANSACTION_GET_DOCUMENTS, {
        [ATTRIBUTE_GCP_RESOURCE_NAME]: `//firestore.googleapis.com/projects/${firestore.projectId}/databases/${firestore.databaseId}`,
      });

      expectSpanHierarchy(
        SPAN_NAME_TEST_ROOT,
        SPAN_NAME_TRANSACTION_RUN,
        SPAN_NAME_TRANSACTION_GET_QUERY,
      );

      expectSpanHasAttributes(SPAN_NAME_TRANSACTION_GET_QUERY, {
        [ATTRIBUTE_GCP_RESOURCE_NAME]: `//firestore.googleapis.com/projects/${firestore.projectId}/databases/${firestore.databaseId}`,
      });

      expectSpanHierarchy(
        SPAN_NAME_TEST_ROOT,
        SPAN_NAME_TRANSACTION_RUN,
        SPAN_NAME_TRANSACTION_GET_AGGREGATION_QUERY,
      );

      expectSpanHasAttributes(SPAN_NAME_TRANSACTION_GET_AGGREGATION_QUERY, {
        [ATTRIBUTE_GCP_RESOURCE_NAME]: `//firestore.googleapis.com/projects/${firestore.projectId}/databases/${firestore.databaseId}`,
      });

      expectSpanHierarchy(
        SPAN_NAME_TEST_ROOT,
        SPAN_NAME_TRANSACTION_RUN,
        SPAN_NAME_TRANSACTION_COMMIT,
      );

      expectSpanHasAttributes(SPAN_NAME_TRANSACTION_COMMIT, {
        [ATTRIBUTE_GCP_RESOURCE_NAME]: `//firestore.googleapis.com/projects/${firestore.projectId}/databases/${firestore.databaseId}`,
      });
    });

    it('batch', async () => {
      const writeBatch = firestore.batch();
      const documentRef = firestore.doc('col/doc');
      writeBatch.set(documentRef, {foo: 'bar'});

      await runFirestoreOperationInRootSpan(() => writeBatch.commit());
      await waitForCompletedSpans(2);
      expectSpanHierarchy(SPAN_NAME_TEST_ROOT, SPAN_NAME_BATCH_COMMIT);
    });

    // Service not implemented for Enterprise DB: PartitionQuery
    it.skipEnterprise('partition query', async () => {
      await runFirestoreOperationInRootSpan(async () => {
        const query = firestore.collectionGroup('foo');
        let numPartitions = 0;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        for await (const partition of query.getPartitions(3)) {
          numPartitions++;
        }
        return numPartitions;
      });

      await waitForCompletedSpans(2);
      expectSpanHierarchy(SPAN_NAME_TEST_ROOT, SPAN_NAME_PARTITION_QUERY);
      expectSpanHasAttributes(SPAN_NAME_PARTITION_QUERY, {
        [ATTRIBUTE_GCP_RESOURCE_NAME]: `//firestore.googleapis.com/projects/${firestore.projectId}/databases/${firestore.databaseId}`,
      });
    });

    it('bulk writer', async () => {
      await runFirestoreOperationInRootSpan(async () => {
        const bulkWriter = firestore.bulkWriter();
        // No need to await the set operations as 'close()' will commit all writes before closing.
        void bulkWriter.set(firestore.collection('foo').doc(), {foo: 1});
        void bulkWriter.set(firestore.collection('foo').doc(), {foo: 2});
        void bulkWriter.set(firestore.collection('foo').doc(), {foo: 3});
        void bulkWriter.set(firestore.collection('foo').doc(), {foo: 4});
        void bulkWriter.set(firestore.collection('foo').doc(), {foo: 5});
        await bulkWriter.close();
      });

      await waitForCompletedSpans(2);
      expectSpanHierarchy(SPAN_NAME_TEST_ROOT, SPAN_NAME_BULK_WRITER_COMMIT);
      expectSpanHasAttributes(SPAN_NAME_BULK_WRITER_COMMIT, {
        [ATTRIBUTE_KEY_DOC_COUNT]: 5,
        [ATTRIBUTE_GCP_RESOURCE_NAME]: `//firestore.googleapis.com/projects/${firestore.projectId}/databases/${firestore.databaseId}`,
      });
    });
  }
});
