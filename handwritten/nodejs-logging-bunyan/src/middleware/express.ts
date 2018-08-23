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

export type LogObject = {
  // tslint:disable-next-line:no-any bunyan interface.
  [level in bunyan.LogLevelString]: (...args: any[]) => void;
};

export interface AnnotatedRequest extends Request {
  log: LogObject;
}

function makeLogFunction(
    level: bunyan.LogLevelString,
    logger: ReturnType<typeof bunyan.createLogger>, trace: string|null) {
  // tslint:disable-next-line:no-any bunyan interface.
  return (...args: any[]) => {
    let fields;
    if (args[0] instanceof Error) {
      // logger.info(err, ...);
      fields = {err: args[0]};
      args[0] = fields;
    } else if (typeof args[0] !== 'object' || Array.isArray(args[0])) {
      // logger.info(msg, ...);
      fields = {};
      args.unshift(fields);
    } else {
      // logger.info({...}, msg, ....);
      fields = args[0];
    }
    if (trace) {
      fields[LOGGING_TRACE_KEY] = trace;
    }
    return logger[level].apply(logger, args);
  };
}

function makeLogObject(
    logger: ReturnType<typeof bunyan.createLogger>,
    trace: string|null): LogObject {
  const log = {} as LogObject;
  const levels: bunyan.LogLevelString[] =
      ['trace', 'debug', 'info', 'warn', 'error', 'fatal'];
  levels.forEach((level: bunyan.LogLevelString) => {
    log[level] = makeLogFunction(level, logger, trace);
  });
  return log;
}

export interface MiddlewareOptions extends types.Options {
  level?: types.LogLevel;
}

export interface MiddlewareReturnType {
  logger: ReturnType<typeof bunyan.createLogger>;
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

      (req as AnnotatedRequest).log = makeLogObject(logger, trace);
      next();
    }
  };
}
