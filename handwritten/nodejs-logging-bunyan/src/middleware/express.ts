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
import {
  HttpRequest,
  middleware as commonMiddleware,
} from '@google-cloud/logging';
import * as bunyan from 'bunyan';
import {GCPEnv} from 'google-auth-library';

import {
  LOGGING_TRACE_KEY,
  LOGGING_SPAN_KEY,
  LOGGING_SAMPLED_KEY,
  LoggingBunyan,
} from '../index';
import * as types from '../types/core';

export const APP_LOG_SUFFIX = 'applog';

// @types/bunyan doesn't export Logger. Access it via ReturnType on
// createLogger.
export type Logger = ReturnType<typeof bunyan.createLogger>;

export interface MiddlewareOptions extends types.Options {
  level?: types.LogLevel;
}

export interface MiddlewareReturnType {
  logger: Logger;
  mw: ReturnType<typeof commonMiddleware.express.makeMiddleware>;
}

/**
 * Express middleware
 */
export async function middleware(
  options?: MiddlewareOptions
): Promise<MiddlewareReturnType> {
  const defaultOptions = {logName: 'bunyan_log', level: 'info'};
  options = Object.assign({}, defaultOptions, options);

  const loggingBunyanApp = new LoggingBunyan(
    Object.assign({}, options, {
      // For request bundling to work, the parent (request) and child (app) logs
      // need to have distinct names. For exact requirements see:
      // https://cloud.google.com/appengine/articles/logging#linking_app_logs_and_requests
      logName: `${options.logName}_${APP_LOG_SUFFIX}`,
    })
  );
  const logger = bunyan.createLogger({
    name: `${options.logName}_${APP_LOG_SUFFIX}`,
    streams: [loggingBunyanApp.stream(options.level as types.LogLevel)],
  });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const auth = (loggingBunyanApp.cloudLog as any).logging.auth;
  const [env, projectId] = await Promise.all([
    auth.getEnv(),
    auth.getProjectId(),
  ]);

  // Unless we are running on Google App Engine or Cloud Functions, generate a
  // parent request log entry that all the request-specific logs ("app logs")
  // will nest under. GAE and GCF generate the parent request logs
  // automatically.
  let emitRequestLog;
  if (env !== GCPEnv.APP_ENGINE && env !== GCPEnv.CLOUD_FUNCTIONS) {
    const loggingBunyanReq = new LoggingBunyan(options);
    const requestLogger = bunyan.createLogger({
      name: options.logName!,
      streams: [loggingBunyanReq.stream(options.level as types.LogLevel)],
    });
    emitRequestLog = (
      httpRequest: HttpRequest,
      trace: string,
      span?: string,
      sampled?: boolean
    ) => {
      requestLogger.info({
        [LOGGING_TRACE_KEY]: trace,
        [LOGGING_SPAN_KEY]: span,
        [LOGGING_SAMPLED_KEY]: sampled,
        httpRequest,
      });
    };
  }

  return {
    logger,
    mw: commonMiddleware.express.makeMiddleware(
      projectId,
      makeChildLogger,
      emitRequestLog
    ),
  };

  function makeChildLogger(trace: string, span?: string) {
    return logger.child(
      {[LOGGING_TRACE_KEY]: trace, [LOGGING_SPAN_KEY]: span},
      true /* simple child */
    );
  }
}
