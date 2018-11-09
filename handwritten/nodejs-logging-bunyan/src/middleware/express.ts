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
import {HttpRequest, middleware as commonMiddleware} from '@google-cloud/logging';
import * as bunyan from 'bunyan';

import {LOGGING_TRACE_KEY, LoggingBunyan} from '../index';
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
export async function middleware(options?: MiddlewareOptions):
    Promise<MiddlewareReturnType> {
  const defaultOptions = {logName: 'bunyan_log', level: 'info'};
  options = Object.assign({}, defaultOptions, options);

  // TODO: Create a http request logger unless we are running on GAE or GCF.

  const loggingBunyanApp = new LoggingBunyan(Object.assign({}, options, {
    // For request bundling to work, the parent (request) and child (app) logs
    // need to have distinct names. For exact requirements see:
    // https://cloud.google.com/appengine/articles/logging#linking_app_logs_and_requests
    logName: `${options.logName}_${APP_LOG_SUFFIX}`
  }));
  const logger = bunyan.createLogger({
    name: `${options.logName}_${APP_LOG_SUFFIX}`,
    streams: [loggingBunyanApp.stream(options.level as types.LogLevel)]
  });

  const projectId =
      await loggingBunyanApp.stackdriverLog.logging.auth.getProjectId();

  return {
    logger,
    mw: commonMiddleware.express.makeMiddleware(projectId, makeChildLogger)
  };

  function makeChildLogger(trace: string) {
    return logger.child({[LOGGING_TRACE_KEY]: trace}, true /* simple child */);
  }
}
