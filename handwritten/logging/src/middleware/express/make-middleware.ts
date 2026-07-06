/*!
 * Copyright 2018 Google LLC
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

import * as http from 'http';
import onFinished = require('on-finished');
import {getOrInjectContext} from '../../utils/context';
import {
  makeHttpRequestData,
  ServerRequest,
  CloudLoggingHttpRequest,
} from '../../utils/http-request';

interface AnnotatedRequestType<LoggerType> extends ServerRequest {
  log: LoggerType;
}

/**
 * Generates an express middleware that installs a request-specific logger on
 * the `request` object. It optionally can do HttpRequest timing that can be
 * used for generating request logs. This can be used to integrate with logging
 * libraries such as winston and bunyan.
 *
 * @param projectId Generated traceIds will be associated with this project.
 * @param makeChildLogger A function that generates logger instances that will
 * be installed onto `req` as `req.log`. The logger should include the trace in
 * each log entry's metadata (associated with the LOGGING_TRACE_KEY property.
 * @param emitRequestLog Optional. A function that will emit a parent request
 * log. While some environments like GAE and GCF emit parent request logs
 * automatically, other environments do not. When provided this function will be
 * called with a populated `CloudLoggingHttpRequest` which can be emitted as
 * request log.
 */
export function makeMiddleware<LoggerType>(
  projectId: string,
  makeChildLogger: (
    trace: string,
    span?: string,
    traceSampled?: boolean
  ) => LoggerType,
  emitRequestLog?: (
    httpRequest: CloudLoggingHttpRequest,
    trace: string,
    span?: string,
    traceSampled?: boolean
  ) => void
) {
  return (req: ServerRequest, res: http.ServerResponse, next: Function) => {
    // TODO(ofrobots): use high-resolution timer.
    const requestStartMs = Date.now();

    // Detect & establish context if we were the first actor to detect lack of
    // context so traceContext is always available when using middleware.
    const traceContext = getOrInjectContext(req, projectId, true);

    // Install a child logger on the request object, with detected trace and
    // span.
    (req as AnnotatedRequestType<LoggerType>).log = makeChildLogger(
      traceContext.trace,
      traceContext.spanId,
      traceContext.traceSampled
    );

    // Emit a 'Request Log' on the parent logger, with detected trace and
    // span.
    if (emitRequestLog) {
      onFinished(res, () => {
        const latencyMs = Date.now() - requestStartMs;
        const httpRequest = makeHttpRequestData(req, res, latencyMs);
        emitRequestLog(
          httpRequest,
          traceContext.trace,
          traceContext.spanId,
          traceContext.traceSampled
        );
      });
    }

    next();
  };
}
