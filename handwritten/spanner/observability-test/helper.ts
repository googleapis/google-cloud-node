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

import {ContextManager, context} from '@opentelemetry/api';
import * as assert from 'assert';
const {ReadableSpan} = require('@opentelemetry/sdk-trace-base');
import {SEMATTRS_DB_NAME} from '@opentelemetry/semantic-conventions';

export const createSessionEvents = [
  'Requesting a multiplexed session',
  'Created a multiplexed session',
];

export const batchCreateSessionsEvents = [
  'Requesting 25 sessions',
  'Creating 25 sessions',
  'Requested for 25 sessions returned 25',
];

export const waitingSessionsEvents = [
  'Waiting for a multiplexed session to become available',
  'Acquired multiplexed session',
  'Using Session',
];

export const cacheSessionEvents = ['Cache hit: has usable multiplexed session'];

/**
 * This utility exists as a test helper because mocha has builtin "context"
 * and referring to context causes type/value collision errors.
 */
export function setGlobalContextManager(manager: ContextManager) {
  context.setGlobalContextManager(manager);
}

/**
 * This utility exists as a test helper because mocha has builtin "context"
 * and referring to context causes type/value collision errors.
 */
export function disableContextAndManager(manager: ContextManager) {
  manager.disable();
  context.disable();
}

export function generateWithAllSpansHaveDBName(dbName: String): Function {
  return function (spans: (typeof ReadableSpan)[]) {
    spans.forEach(span => {
      assert.deepStrictEqual(
        span.attributes[SEMATTRS_DB_NAME],
        dbName,
        `Span ${span.name} has mismatched DB_NAME`,
      );
    });
  };
}

export async function verifySpansAndEvents(
  traceExporter,
  expectedSpans,
  expectedEvents,
) {
  await traceExporter.forceFlush();
  const spans = traceExporter.getFinishedSpans();
  const actualEventNames: string[] = [];
  const actualSpanNames: string[] = [];
  spans.forEach(span => {
    actualSpanNames.push(span.name);
    span.events.forEach(event => {
      actualEventNames.push(event.name);
    });
  });
  assert.deepStrictEqual(
    actualSpanNames,
    expectedSpans,
    `span names mismatch:\n\tGot:  ${actualSpanNames}\n\tWant: ${expectedSpans}`,
  );
  assert.deepStrictEqual(
    actualEventNames,
    expectedEvents,
    `Unexpected events:\n\tGot:  ${actualEventNames}\n\tWant: ${expectedEvents}`,
  );
}
