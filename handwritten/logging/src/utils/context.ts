/*!
 * Copyright 2021 Google LLC
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

/*
 * This file contains helper functions, used in both middleware and
 * non-middleware scenarios, to extract trace, span and traceSampled properties
 * from available HTTP header context.
 *
 * Specifically:
 * - We extract trace context if `traceparent` is available via W3 protocol
 * - We extract trace context if `X-Cloud-Trace-Context` is available from the
 * user or Google Cloud Trace.
 * - In the middleware scenario, we auto-inject a Google trace context if one
 * is not available.
 */

import * as http from 'http';
import * as uuid from 'uuid';
import * as crypto from 'crypto';
import {trace, isSpanContextValid} from '@opentelemetry/api';

/** Header that carries span context across Google infrastructure. */
export const X_CLOUD_TRACE_HEADER = 'x-cloud-trace-context';
const SPAN_ID_RANDOM_BYTES = 8;
const spanIdBuffer = Buffer.alloc(SPAN_ID_RANDOM_BYTES);
const randomFillSync = crypto.randomFillSync;
const randomBytes = crypto.randomBytes;
const spanRandomBuffer = randomFillSync
  ? () => randomFillSync(spanIdBuffer)
  : () => randomBytes(SPAN_ID_RANDOM_BYTES);

/** Header that carries span context across W3C compliant infrastructure. */
export const W3C_TRACE_PARENT_HEADER = 'traceparent';

/**
 * An transport and environment neutral API for getting request headers.
 */
export interface HeaderWrapper {
  getHeader(name: string): string | string[] | undefined;
  setHeader(name: string, value: string): void;
}

/**
 * makeHeaderWrapper returns a wrapper with set and get header functionality,
 * returning null if the incoming request object doesn't contain the 'header'
 * propery.
 * @param req
 */
export function makeHeaderWrapper(
  req: http.IncomingMessage,
): HeaderWrapper | null {
  if (!req.headers) return null;
  const wrapper = {
    setHeader(name: string, value: string) {
      req.headers[name] = value;
    },
    getHeader(name: string) {
      return req.headers[name];
    },
  };
  return wrapper;
}

/**
 * CloudTraceContext: Cloud Logging compliant trace context.
 */
export interface CloudTraceContext {
  trace: string;
  spanId?: string;
  traceSampled?: boolean;
}

/**
 * getOrInjectContext returns a CloudTraceContext with as many available trace
 * and span properties as possible. It examines HTTP headers for trace context.
 * Optionally, it can inject a Google compliant trace context when no context is
 * available from headers.
 *
 * @param req
 * @param projectId
 * @param inject
 */
export function getOrInjectContext(
  req: http.IncomingMessage,
  projectId: string,
  inject?: boolean,
): CloudTraceContext {
  const defaultContext = toCloudTraceContext({}, projectId);

  // Get trace context from OpenTelemetry span context.
  const otelContext = getContextFromOtelContext(projectId);
  if (otelContext) return otelContext;

  const wrapper = makeHeaderWrapper(req);

  if (wrapper) {
    // Detect 'traceparent' header.
    const traceContext = getContextFromTraceParent(wrapper, projectId);
    if (traceContext) return traceContext;
    // Detect 'X-Cloud-Trace-Context' header.
    const cloudContext = getContextFromXCloudTrace(wrapper, projectId);
    if (cloudContext) return cloudContext;
    // Optional: Generate and inject a context for the user as last resort.
    if (inject) {
      wrapper.setHeader(X_CLOUD_TRACE_HEADER, makeCloudTraceHeader());
      return getContextFromXCloudTrace(wrapper, projectId)!;
    }
  }
  return defaultContext;
}

/**
 * toCloudTraceContext converts any context format to cloudTraceContext format.
 * @param context
 * @param projectId
 */
function toCloudTraceContext(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  anyContext: any,
  projectId: string,
): CloudTraceContext {
  const context: CloudTraceContext = {
    trace: '',
  };
  if (anyContext?.trace) {
    context.trace = `projects/${projectId}/traces/${anyContext.trace}`;
  }
  if (anyContext?.spanId) {
    context.spanId = anyContext.spanId;
  }
  if ('traceSampled' in anyContext) {
    context.traceSampled = anyContext.traceSampled;
  }
  return context;
}

/**
 * makeCloudTraceHeader generates valid X-Cloud-Trace-Context trace and spanId.
 */
function makeCloudTraceHeader(): string {
  const trace = uuid.v4().replace(/-/g, '');
  const spanId = spanRandomBuffer().toString('hex');
  return `${trace}/${spanId}`;
}

/**
 * getContextFromOtelContext looks for the active open telemetry span context
 * per Open Telemetry specifications for tracing contexts.
 *
 * @param projectId
 */
export function getContextFromOtelContext(
  projectId: string,
): CloudTraceContext | null {
  const spanContext = trace.getActiveSpan()?.spanContext();
  const FLAG_SAMPLED = 1; // 00000001
  if (spanContext !== undefined && isSpanContextValid(spanContext)) {
    const otelSpanContext = {
      trace: spanContext?.traceId,
      spanId: spanContext?.spanId,
      traceSampled: (spanContext.traceFlags & FLAG_SAMPLED) !== 0,
    };

    return toCloudTraceContext(otelSpanContext, projectId);
  }

  return null;
}

/**
 * getContextFromXCloudTrace looks for the HTTP header 'x-cloud-trace-context'
 * per Google Cloud specifications for Cloud Tracing.
 *
 * @param headerWrapper
 * @param projectId
 */
export function getContextFromXCloudTrace(
  headerWrapper: HeaderWrapper,
  projectId: string,
): CloudTraceContext | null {
  const context = parseXCloudTraceHeader(headerWrapper);
  if (!context) return null;
  return toCloudTraceContext(context, projectId);
}

/**
 * getOrInjectTraceParent looks for the HTTP header 'traceparent'
 * per W3C specifications for OpenTelemetry and OpenCensus
 * Read more about W3C protocol: https://www.w3.org/TR/trace-context/
 *
 * @param headerWrapper
 * @param projectId
 */
export function getContextFromTraceParent(
  headerWrapper: HeaderWrapper,
  projectId: string,
): CloudTraceContext | null {
  const context = parseTraceParentHeader(headerWrapper);
  if (!context) return null;
  return toCloudTraceContext(context, projectId);
}

/**
 * parseXCloudTraceHeader looks for trace context in `X-Cloud-Trace-Context`
 * header
 * @param headerWrapper
 */
export function parseXCloudTraceHeader(
  headerWrapper: HeaderWrapper,
): CloudTraceContext | null {
  const regex = /([a-f\d]+)?(\/?([a-f\d]+))?(;?o=(\d))?/;
  const match = headerWrapper
    .getHeader(X_CLOUD_TRACE_HEADER)
    ?.toString()
    .match(regex);
  if (!match) return null;
  return {
    trace: match[1],
    spanId: match[3],
    traceSampled: match[5] === '1',
  };
}

/**
 * parseTraceParentHeader is a custom implementation of the `parseTraceParent`
 * function in @opentelemetry-core/trace.
 * For more information see {@link https://www.w3.org/TR/trace-context/}
 * @param headerWrapper
 */
export function parseTraceParentHeader(
  headerWrapper: HeaderWrapper,
): CloudTraceContext | null {
  const VERSION_PART = '(?!ff)[\\da-f]{2}';
  const TRACE_ID_PART = '(?![0]{32})[\\da-f]{32}';
  const PARENT_ID_PART = '(?![0]{16})[\\da-f]{16}';
  const FLAGS_PART = '[\\da-f]{2}';
  const TRACE_PARENT_REGEX = new RegExp(
    `^\\s?(${VERSION_PART})-(${TRACE_ID_PART})-(${PARENT_ID_PART})-(${FLAGS_PART})(-.*)?\\s?$`,
  );
  const match = headerWrapper
    .getHeader(W3C_TRACE_PARENT_HEADER)
    ?.toString()
    .match(TRACE_PARENT_REGEX);
  if (!match) return null;
  // According to the specification the implementation should be compatible
  // with future versions. If there are more parts, we only reject it if it's using version 00
  // See https://www.w3.org/TR/trace-context/#versioning-of-traceparent
  if (match[1] === '00' && match[5]) return null;
  return {
    trace: match[2],
    spanId: match[3],
    traceSampled: (parseInt(match[4], 16) & 1) === 1,
  };
}
