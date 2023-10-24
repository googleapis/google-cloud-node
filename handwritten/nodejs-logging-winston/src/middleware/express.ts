// Copyright 2018 Google LLC
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

import {
  HttpRequest,
  Log,
  LogSync,
  middleware as commonMiddleware,
} from '@google-cloud/logging';
import {GCPEnv} from 'google-auth-library';
import * as winston from 'winston';

import {
  LOGGING_TRACE_KEY,
  LOGGING_SPAN_KEY,
  LOGGING_SAMPLED_KEY,
} from '../common';
import {LoggingWinston, Options} from '../index';
import {makeChildLogger} from './make-child-logger';

export const REQUEST_LOG_SUFFIX = '_reqlog';

type Middleware = ReturnType<typeof commonMiddleware.express.makeMiddleware>;

export async function makeMiddleware(
  logger: winston.Logger,
  transport: LoggingWinston,
  skipParentEntryForCloudRun?: boolean
): Promise<Middleware>;
export async function makeMiddleware(
  logger: winston.Logger,
  options?: Options,
  skipParentEntryForCloudRun?: boolean
): Promise<Middleware>;
export async function makeMiddleware(
  logger: winston.Logger,
  optionsOrTransport?: Options | LoggingWinston,
  skipParentEntryForCloudRun?: boolean
): Promise<Middleware> {
  let transport: LoggingWinston;

  // If no custom transports are provided, use default or instantiate one.
  const cloudTransport = logger.transports.find(
    t => t instanceof LoggingWinston
  );

  // If user provides a custom transport, always add it to the logger.
  if (optionsOrTransport instanceof LoggingWinston) {
    transport = optionsOrTransport;
    logger.add(transport);
  } else if (cloudTransport && !optionsOrTransport) {
    // Check if logger already contains a Cloud transport
    transport = cloudTransport as LoggingWinston;
  } else {
    const options = {logName: 'winston_log', ...optionsOrTransport};
    transport = new LoggingWinston(options);
    logger.add(transport);
  }

  const auth = (
    transport.common.redirectToStdout
      ? (transport.common.cloudLog as LogSync)
      : (transport.common.cloudLog as Log)
  ).logging.auth;
  const [env, projectId] = await Promise.all([
    auth.getEnv(),
    auth.getProjectId(),
  ]);

  // Unless we are running on Google App Engine or Cloud Functions, generate a
  // parent request log entry that all the request specific logs ("app logs")
  // will nest under. GAE and GCF generate the parent request logs
  // automatically.
  // Cloud Run also generates the parent request log automatically, but skipping
  // the parent request entry has to be explicity enabled until the next major
  // release in which we can change the default behavior.
  let emitRequestLogEntry;
  if (
    env !== GCPEnv.APP_ENGINE &&
    env !== GCPEnv.CLOUD_FUNCTIONS &&
    (env !== GCPEnv.CLOUD_RUN || !skipParentEntryForCloudRun)
  ) {
    const requestLogName = Log.formatName_(
      projectId,
      `${transport.common.logName}${REQUEST_LOG_SUFFIX}`
    );

    emitRequestLogEntry = (
      httpRequest: HttpRequest,
      trace: string,
      span?: string,
      sampled?: boolean
    ) => {
      logger.info({
        // The request logs must have a log name distinct from the app logs
        // for log correlation to work.
        logName: requestLogName,
        [LOGGING_TRACE_KEY]: trace,
        [LOGGING_SPAN_KEY]: span,
        [LOGGING_SAMPLED_KEY]: sampled,
        httpRequest,
        message: httpRequest.requestUrl || 'http request',
      });
    };
  }

  return commonMiddleware.express.makeMiddleware(
    projectId,
    (trace: string, span?: string, sampled?: boolean) =>
      makeChildLogger(logger, trace, span, sampled),
    emitRequestLogEntry
  );
}
