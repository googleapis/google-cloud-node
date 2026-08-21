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

import {Span, trace, Tracer} from '@opentelemetry/api';

export interface StaticTraceContext {
  gcpClientService?: string;
  gcpVersion?: string;
  gcpRepo?: string;
  gcpArtifact?: string;
}

export interface DynamicTraceContext {
  clientName: string;
  methodName: string;
  rpcType: 'grpc' | 'http';
}

export function getGaxTracer(): Tracer {
  return trace.getTracer('google-gax');
}

export async function traceAttempt<T>(
  dynamicArgs: DynamicTraceContext,
  staticArgs: StaticTraceContext,
  fn: () => Promise<T>,
): Promise<T> {
  const spanName = `${dynamicArgs.clientName}.${dynamicArgs.methodName}`;
  return getGaxTracer().startActiveSpan(spanName, {}, async (span: Span) => {
    span.setAttributes({
      'gcp.client.service': staticArgs.gcpClientService,
      'gcp.client.version': staticArgs.gcpVersion,
      'gcp.repo': staticArgs.gcpRepo,
      'gcp.artifact': staticArgs.gcpArtifact,
      'gcp.method.name': dynamicArgs.methodName,
      'gcp.method.type': dynamicArgs.rpcType,
    });

    try {
      const result = await fn();
      return result;
    } catch (e) {
      const err = e as Error;
      span.setAttributes({
        'error.message': err.message,
        'error.type': err.constructor?.name ?? err.name,
      });
      span.recordException(err);
      if (err.name) {
        span.setAttribute('exception.type', err.name);
      }
      throw e;
    } finally {
      span.end();
    }
  });
}
