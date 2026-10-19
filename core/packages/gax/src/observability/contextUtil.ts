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

import {
  Attributes,
  context,
  Context,
  createContextKey,
  isSpanContextValid,
  Span,
  trace,
} from '@opentelemetry/api';
import {CallSettings} from '../gax';
import {ignoredClientHeaderTokens} from '../util';
export const DEFAULT_GCP_REPO = 'googleapis/google-cloud-node';

// Context keys for GAX client request and per-attempt spans.
export const CLIENT_REQUEST_SPAN_KEY = createContextKey(
  'google-gax-client-request-span',
);
export const ATTEMPT_SPAN_KEY = createContextKey('google-gax-attempt-span');

/**
 * Active OpenTelemetry trace/span identifiers and span references for the current context.
 */
export interface ActiveTraceContext {
  traceId: string;
  spanId: string;
  span: Span;
  attemptSpan?: Span;
  clientRequestSpan?: Span;
}

/**
 * Static metadata about the Google Cloud client library used to populate
 * telemetry span attributes (`gcp.client.*`, `server.*`, `url.domain`).
 */
export interface StaticTraceContext {
  /**
   * The target GCP service endpoint or domain (e.g. 'storage.googleapis.com').
   * Populates `gcp.client.service`.
   */
  gcpClientService?: string;
  /**
   * The version of the client library (e.g. '1.2.3').
   * Populates `gcp.client.version`.
   */
  gcpVersion?: string;
  /**
   * The GitHub repository name hosting the client library (e.g. 'googleapis/google-cloud-node').
   * Populates `gcp.client.repo`.
   */
  gcpRepo?: string;
  /**
   * The NPM package name of the client library (e.g. '@google-cloud/storage').
   * Populates `gcp.client.artifact`.
   */
  gcpArtifact?: string;
  /**
   * Server domain name or IP address for the RPC call.
   * Populates `server.address`.
   */
  serverAddress?: string;
  /**
   * Server port number for the RPC call.
   * Populates `server.port`.
   */
  serverPort?: number;
  /**
   * Target service domain (e.g. 'cloudkms.googleapis.com').
   * Populates `url.domain`.
   */
  urlDomain?: string;
}

/**
 * Dynamic metadata specific to the individual RPC invocation used to populate
 * telemetry span names and attributes.
 */
export interface DynamicTraceContext {
  /**
   * The name of the client class making the call (e.g. 'StorageClient').
   */
  clientName: string;
  /**
   * The name of the API method or RPC being invoked (e.g. 'GetObject').
   */
  methodName: string;
  /**
   * The transport protocol used for the RPC ('grpc' or 'http').
   * Populates `rpc.system.name`.
   */
  rpcType: 'grpc' | 'http';
  /**
   * Server domain name or IP address for the RPC call.
   * Populates `server.address`.
   */
  serverAddress?: string;
  /**
   * Server port number for the RPC call.
   * Populates `server.port`.
   */
  serverPort?: number;
  /**
   * Target service domain (e.g. 'cloudkms.googleapis.com').
   * Populates `url.domain`.
   */
  urlDomain?: string;
}

/**
 * Dynamic metadata specific to an individual RPC transport attempt (low level network span).
 */
export interface AttemptTraceContext extends DynamicTraceContext {
  /**
   * The fully-qualified protobuf service name (e.g. 'google.cloud.kms.v1.KeyManagementService').
   * Combined with `methodName` to populate `rpc.method`.
   */
  apiName?: string;
  /**
   * The ordinal resend count for this attempt (0 for the initial attempt, 1 for the first retry, etc.).
   * Populates `gcp.grpc.resend_count` (gRPC) or `http.request.resend_count` (HTTP) when > 0;
   * omitted from span attributes when 0 or undefined.
   */
  resendCount?: number;
  /**
   * The HTTP request method for REST fallback attempts (e.g. 'GET', 'POST', 'PUT', 'PATCH', 'DELETE').
   * Populates `http.request.method`.
   */
  httpMethod?: string;
  /**
   * The URL path template for REST fallback attempts (e.g. '/v1/{name}:access').
   * Populates `url.template`.
   */
  urlTemplate?: string;
}

/**
 * Derives the GCP client service name from an NPM package name.
 * @deprecated Retained for backwards compatibility.
 */
export function extractClientServiceFromPackageName(name: string): string {
  const scopedMatch = name.match(/^@[^/]+\/(?:google-cloud-)?(.*)$/);
  if (scopedMatch && scopedMatch[1]) {
    return scopedMatch[1];
  }
  const unscopedMatch = name.match(/^google-cloud-(.*)$/);
  if (unscopedMatch && unscopedMatch[1]) {
    return unscopedMatch[1];
  }
  return name;
}

/**
 * Derives the GCP service name from a protobuf apiName (e.g. google.cloud.redis.v1.CloudRedis).
 */
export function extractServiceFromApiName(apiName: string): string | undefined {
  if (!apiName) {
    return undefined;
  }
  const parts = apiName.split('.');
  const versionIndex = parts.findIndex(p => /^v\d+(?:[a-z\d_]+)?$/i.test(p));
  if (versionIndex > 0) {
    return parts[versionIndex - 1];
  }
  if (parts.length >= 2) {
    const candidate = parts[parts.length - 2];
    if (candidate && candidate !== 'google' && candidate !== 'cloud') {
      return candidate;
    }
    const last = parts[parts.length - 1];
    if (last) {
      return last[0].toLowerCase() + last.slice(1);
    }
  }
  return undefined;
}

/**
 * Extracts static metadata from CallSettings headers or apiName.
 */
export function extractFromSettings(
  settings?: CallSettings,
): StaticTraceContext {
  const result: StaticTraceContext = {};
  if (!settings) {
    return result;
  }

  // Extract artifact and version from x-goog-api-client header.
  const otherArgsWithMeta = settings.otherArgs as
    | {
        headers?: Record<string, string | string[]>;
        metadataBuilder?: () => {
          get?: (key: string) => unknown[];
          [key: string]: unknown;
        };
      }
    | undefined;
  let rawClientHeader: unknown =
    otherArgsWithMeta?.headers?.['x-goog-api-client'];
  // Fall back to metadataBuilder if header is not in otherArgs.headers.
  if (
    !rawClientHeader &&
    typeof otherArgsWithMeta?.metadataBuilder === 'function'
  ) {
    try {
      const built = otherArgsWithMeta.metadataBuilder();
      // Support both gRPC Metadata instances (.get) and plain objects.
      if (built && typeof built.get === 'function') {
        rawClientHeader = built.get('x-goog-api-client');
      } else if (built && typeof built === 'object') {
        rawClientHeader = built['x-goog-api-client'];
      }
    } catch {
      // Ignore metadataBuilder errors
    }
  }
  // Normalize array values into a single space-delimited string.
  const clientHeader = Array.isArray(rawClientHeader)
    ? rawClientHeader.join(' ')
    : rawClientHeader;
  if (typeof clientHeader === 'string') {
    const tokens = clientHeader.trim().split(/\s+/);
    for (const token of tokens) {
      const match = token.match(/^([^/]+(?:\/[^/]+)?)\/([^\s]+)$/);
      if (match) {
        const [, name, ver] = match;
        if (name === 'gapic') {
          result.gcpVersion = ver;
        } else if (name === 'gccl') {
          if (!result.gcpVersion) {
            result.gcpVersion = ver;
          }
        } else if (!ignoredClientHeaderTokens.includes(name)) {
          result.gcpArtifact = name;
          if (!result.gcpVersion) {
            result.gcpVersion = ver;
          }
        }
      }
    }
  }

  // Resolve service name and default artifact from apiName.
  if (typeof settings.apiName === 'string' && settings.apiName) {
    const serviceFromApi = extractServiceFromApiName(settings.apiName);
    if (serviceFromApi) {
      result.gcpClientService = serviceFromApi;
      if (!result.gcpArtifact) {
        result.gcpArtifact =
          serviceFromApi === 'gax'
            ? 'google-gax'
            : `@google-cloud/${serviceFromApi}`;
      }
    }
  }

  // Extract server address and port from endpoint settings.
  const otherArgs = settings.otherArgs as
    | {
        servicePath?: string;
        apiEndpoint?: string;
        port?: number | string;
        servicePort?: number | string;
      }
    | undefined;
  const endpoint =
    (settings as {servicePath?: string; apiEndpoint?: string}).servicePath ||
    (settings as {servicePath?: string; apiEndpoint?: string}).apiEndpoint ||
    otherArgs?.servicePath ||
    otherArgs?.apiEndpoint;
  if (endpoint && typeof endpoint === 'string') {
    const match = endpoint.match(/^(\[[^\]]+\]|[^:]+):(\d+)$/);
    if (match) {
      result.serverAddress = match[1];
      result.serverPort = Number(match[2]);
    } else {
      result.serverAddress = endpoint;
    }
  }

  // Resolve server port if not already parsed from endpoint.
  const rawPort =
    (settings as {port?: number | string; servicePort?: number | string})
      .port ||
    (settings as {port?: number | string; servicePort?: number | string})
      .servicePort ||
    otherArgs?.port ||
    otherArgs?.servicePort;
  const port = typeof rawPort === 'string' ? parseInt(rawPort, 10) : rawPort;
  if (port && typeof port === 'number' && !result.serverPort) {
    result.serverPort = port;
  }

  return result;
}

/**
 * Extracts static metadata from process environment variables.
 */
export function extractFromEnvironment(): StaticTraceContext {
  const env: Record<string, string | undefined> =
    typeof process === 'object' && typeof process.env === 'object'
      ? process.env
      : {};

  const result: StaticTraceContext = {};

  const service = env.GOOGLE_SDK_NODE_CLIENT_SERVICE || env.GCP_CLIENT_SERVICE;
  if (service?.trim()) {
    result.gcpClientService = service.trim();
  }

  const version = env.GOOGLE_SDK_NODE_CLIENT_VERSION || env.GCP_CLIENT_VERSION;
  if (version?.trim()) {
    result.gcpVersion = version.trim();
  }

  const artifact = env.GOOGLE_SDK_NODE_ARTIFACT || env.GCP_ARTIFACT;
  if (artifact?.trim()) {
    result.gcpArtifact = artifact.trim();
  }

  const serverAddress =
    env.GOOGLE_SDK_NODE_SERVER_ADDRESS || env.SERVER_ADDRESS;
  if (serverAddress?.trim()) {
    result.serverAddress = serverAddress.trim();
  }

  const serverPort = env.GOOGLE_SDK_NODE_SERVER_PORT || env.SERVER_PORT;
  if (serverPort && !isNaN(Number(serverPort))) {
    result.serverPort = Number(serverPort);
  }

  return result;
}

/**
 * Clears the cached static metadata.
 * @deprecated Static metadata is no longer cached across calls; retained as a no-op for backwards compatibility.
 */
export function clearMetadataCache(): void {}

/**
 * Resolves static trace context dynamically at runtime by inspecting CallSettings,
 * environment variables, and standard defaults.
 *
 * Precedence: environment variables > dynamic resolution from settings.
 *
 * @param {CallSettings} [settings] - Call settings for the RPC invocation.
 * @param {string} [_callerFilePath] - Optional explicit path to the caller source file (deprecated).
 * @returns {StaticTraceContext} The resolved static trace context.
 */
export function resolveStaticTraceContext(
  settings?: CallSettings,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _callerFilePath?: string,
): StaticTraceContext {
  const envMeta = extractFromEnvironment();
  const dynamic = extractFromSettings(settings);

  const context: StaticTraceContext = {
    gcpClientService: envMeta.gcpClientService ?? dynamic.gcpClientService,
    gcpVersion: envMeta.gcpVersion ?? dynamic.gcpVersion,
    gcpRepo: DEFAULT_GCP_REPO,
    gcpArtifact: envMeta.gcpArtifact ?? dynamic.gcpArtifact,
  };

  const serverAddress = envMeta.serverAddress ?? dynamic.serverAddress;
  if (serverAddress !== undefined) {
    context.serverAddress = serverAddress;
  }

  const serverPort = envMeta.serverPort ?? dynamic.serverPort;
  if (serverPort !== undefined) {
    context.serverPort = serverPort;
  }

  return context;
}

/**
 * Builds the common initial client, transport, and domain attributes shared by
 * client request spans and low level network attempt spans.
 *
 * @param {DynamicTraceContext} dynamicArgs - Dynamic trace context for the call or attempt.
 * @param {StaticTraceContext} staticArgs - Static trace context for the client library.
 * @param {string} [urlDomain] - Resolved `url.domain` attribute value, if available.
 * @returns {Attributes} The initial span attributes map.
 */
export function buildInitialAttributes(
  dynamicArgs: DynamicTraceContext,
  staticArgs: StaticTraceContext,
  urlDomain?: string,
): Attributes {
  const attributes: Attributes = {
    'gcp.client.service': staticArgs.gcpClientService,
    'gcp.client.version': staticArgs.gcpVersion,
    'gcp.client.repo': staticArgs.gcpRepo,
    'gcp.client.artifact': staticArgs.gcpArtifact,
    'rpc.system.name': dynamicArgs.rpcType,
  };
  if (urlDomain !== undefined) {
    attributes['url.domain'] = urlDomain;
  }
  return attributes;
}

/**
 * Returns the span if defined and its span context is valid.
 */
function getValidSpan(span: Span | undefined): Span | undefined {
  return span && isSpanContextValid(span.spanContext()) ? span : undefined;
}

/**
 * Returns the active trace and span IDs (`traceId` and `spanId`) along with
 * the active span references (`span`, `attemptSpan`, `clientRequestSpan`) if a
 * GAX attempt span, GAX client request span, or outer OpenTelemetry span is
 * active and has a valid span context, or `undefined` otherwise.
 *
 * @param {Context} [activeContext=context.active()] - The OpenTelemetry context to inspect.
 * @returns {ActiveTraceContext | undefined} The active trace context, or undefined.
 */
export function getActiveTraceContext(
  activeContext: Context = context.active(),
): ActiveTraceContext | undefined {
  // Retrieve GAX-managed spans from the context if valid.
  const attemptSpan = getValidSpan(
    activeContext.getValue(ATTEMPT_SPAN_KEY) as Span | undefined,
  );
  const clientRequestSpan = getValidSpan(
    activeContext.getValue(CLIENT_REQUEST_SPAN_KEY) as Span | undefined,
  );
  // Prefer attempt span > client request span > outer OpenTelemetry span.
  const activeSpan =
    attemptSpan ??
    clientRequestSpan ??
    getValidSpan(trace.getSpan(activeContext));
  if (!activeSpan) {
    return undefined;
  }
  const spanContext = activeSpan.spanContext();
  return {
    traceId: spanContext.traceId,
    spanId: spanContext.spanId,
    span: activeSpan,
    attemptSpan,
    clientRequestSpan,
  };
}
