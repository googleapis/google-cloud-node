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
  Log,
  middleware as commonMiddleware,
} from '@google-cloud/logging';
import {GCPEnv} from 'google-auth-library';
import * as winston from 'winston';

import {LOGGING_TRACE_KEY} from '../common';
import {LoggingWinston} from '../index';
import * as types from '../types/core';

import {makeChildLogger} from './make-child-logger';

export const REQUEST_LOG_SUFFIX = '_reqlog';

type Middleware = ReturnType<typeof commonMiddleware.express.makeMiddleware>;

export async function makeMiddleware(
  logger: winston.Logger,
  transport: LoggingWinston
): Promise<Middleware>;
export async function makeMiddleware(
  logger: winston.Logger,
  options?: types.Options
): Promise<Middleware>;
export async function makeMiddleware(
  logger: winston.Logger,
  optionsOrTransport?: types.Options | LoggingWinston
): Promise<Middleware> {
  let transport: LoggingWinston;

  // If a transport was not provided, instantiate one.
  if (!(optionsOrTransport instanceof LoggingWinston)) {
    const options = {logName: 'winston_log', ...optionsOrTransport};

    transport = new LoggingWinston(options);
    logger.add(transport);
  } else {
    transport = optionsOrTransport;
  }

  const auth = transport.common.stackdriverLog.logging.auth;
  const [env, projectId] = await Promise.all([
    auth.getEnv(),
    auth.getProjectId(),
  ]);

  // Unless we are running on Google App Engine or Cloud Functions, generate a
  // parent request log entry that all the request specific logs ("app logs")
  // will nest under. GAE and GCF generate the parent request logs
  // automatically.
  let emitRequestLogEntry;
  if (env !== GCPEnv.APP_ENGINE && env !== GCPEnv.CLOUD_FUNCTIONS) {
    const requestLogName = Log.formatName_(
      projectId,
      `${transport.common.logName}${REQUEST_LOG_SUFFIX}`
    );

    emitRequestLogEntry = (httpRequest: HttpRequest, trace: string) => {
      logger.info({
        // The request logs must have a log name distinct from the app logs
        // for log correlation to work.
        logName: requestLogName,
        [LOGGING_TRACE_KEY]: trace,
        httpRequest,
        message: httpRequest.requestUrl || 'http request',
      });
    };
  }

  return commonMiddleware.express.makeMiddleware(
    projectId,
    (trace: string) => makeChildLogger(logger, trace),
    emitRequestLogEntry
  );
}
