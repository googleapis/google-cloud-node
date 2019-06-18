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
import {GCPEnv} from 'google-auth-library';
import * as winston from 'winston';

import {LOGGING_TRACE_KEY} from '../common';
import {LoggingWinston} from '../index';
import * as types from '../types/core';

import {makeChildLogger} from './make-child-logger';

export const APP_LOG_SUFFIX = 'applog';

export interface MiddlewareOptions extends types.Options {
  level?: string;
  levels?: winston.config.AbstractConfigSetLevels;
}

export async function middleware(options?: MiddlewareOptions) {
  const defaultOptions = {
    logName: 'winston_log',
    level: 'info',
    levels: winston.config.syslog.levels,
  };
  options = Object.assign({}, defaultOptions, options);

  const loggingWinstonApp = new LoggingWinston({
    ...options,
    logName: `${options.logName}_${APP_LOG_SUFFIX}`,
  });
  const logger = winston.createLogger({
    level: options.level,
    levels: options.levels,
    transports: [loggingWinstonApp],
  });

  const auth = loggingWinstonApp.common.stackdriverLog.logging.auth;
  const [env, projectId] = await Promise.all([
    auth.getEnv(),
    auth.getProjectId(),
  ]);

  // Unless we are running on Google App Engine or Cloud Functions, generate a
  // parent request log entry that all the request specific logs ("app logs")
  // will nest under. GAE and GCF generate the parent request logs
  // automatically.
  let emitRequestLog;
  if (env !== GCPEnv.APP_ENGINE && env !== GCPEnv.CLOUD_FUNCTIONS) {
    const loggingWinstonReq = new LoggingWinston(options);
    const requestLogger = winston.createLogger({
      level: options.level,
      levels: options.levels,
      transports: [loggingWinstonReq],
    });
    emitRequestLog = (httpRequest: HttpRequest, trace: string) => {
      requestLogger.info({
        [LOGGING_TRACE_KEY]: trace,
        httpRequest,
        message: httpRequest.requestUrl || 'http request',
      });
    };
  }

  return {
    logger,
    mw: commonMiddleware.express.makeMiddleware(
      projectId,
      (trace: string) => {
        return makeChildLogger(logger, trace);
      },
      emitRequestLog
    ),
  };
}
