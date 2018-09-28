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

import * as context from '@opencensus/propagation-stackdriver';
import * as bunyan from 'bunyan';
import * as http from 'http';

export type Request = http.IncomingMessage;
export type Response = http.ServerResponse;
export type NextFunction = (err?: Error) => void;

import {LOGGING_TRACE_KEY, LoggingBunyan} from '../index';
import * as types from '../types/core';

// @types/bunyan doesn't export Logger. Access it via ReturnType on
// createLogger.
type Logger = ReturnType<typeof bunyan.createLogger>;

export interface AnnotatedRequest extends Request {
  log: Logger;
}

export interface MiddlewareOptions extends types.Options {
  level?: types.LogLevel;
}

export interface MiddlewareReturnType {
  logger: Logger;
  // tslint:disable-next-line:no-any express middleware.
  mw: (req: Request, res: Response, next: NextFunction) => any;
}

/**
 * Express middleware
 */
export async function middleware(options?: MiddlewareOptions):
    Promise<MiddlewareReturnType> {
  const defaultOptions = {logName: 'bunyan_log', level: 'info'};
  options = Object.assign({}, defaultOptions, options);

  const bunyan = require('bunyan');
  const loggingBunyan = new LoggingBunyan(options);
  const projectId =
      await loggingBunyan.stackdriverLog.logging.auth.getProjectId();
  // Failure to acquire projectId from auth would throw to the user.

  const logger = bunyan.createLogger({
    name: options.logName,
    streams: [loggingBunyan.stream(options.level as types.LogLevel)]
  });

  return {
    logger,
    mw: (req: Request, res: Response, next: NextFunction) => {
      const wrapper = {
        setHeader(name: string, value: string) {
          req.headers[name] = value;
        },
        getHeader(name: string) {
          return req.headers[name];
        }
      };

      let spanContext = context.extract(wrapper);
      if (!spanContext) {
        // We were the first actor to detect lack of context. Establish context.
        spanContext = context.generate();
        context.inject(wrapper, spanContext);
      }

      const trace = `projects/${projectId}/traces/${spanContext.traceId}`;

      (req as AnnotatedRequest).log =
          logger.child({[LOGGING_TRACE_KEY]: trace}, true /*simple child */);
      next();
    }
  };
}
