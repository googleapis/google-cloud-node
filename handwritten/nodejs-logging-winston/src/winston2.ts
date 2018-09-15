/*!
 * Copyright 2016 Google Inc. All Rights Reserved.
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

import * as is from '@sindresorhus/is';

import {LOGGING_TRACE_KEY, LoggingCommon} from './common';
import * as types from './types/core';

// cant have type checking on winston because it may be version 2 or 3
const winston: {transports: {}, Transport: WinstonTransport} =
    require('winston');

type Callback = (err: Error, apiResponse: {}) => void;

export class LoggingWinston extends winston.Transport {
  private common: LoggingCommon;

  static readonly LOGGING_TRACE_KEY = LOGGING_TRACE_KEY;

  constructor(options?: types.Options) {
    options = options || {};

    const logName = options.logName || 'winston_log';

    super({
      level: options.level,
      name: logName,
    });

    this.common = new LoggingCommon(options);
  }

  log(levelName: string, msg: string, metadata: types.Metadata,
      callback: Callback) {
    if (is.default.function_(metadata)) {
      callback = metadata as Callback;
      metadata = {};
    }

    this.common.log(levelName, msg, metadata, callback);
  }
}

// We need to add StackdriverLogging to winston.transport which does not
// contain this type.

// tslint:disable-next-line:no-any
(winston.transports as any).StackdriverLogging = LoggingWinston;

// Minimal definition for winston 2's Transport class.
type WinstonTransport = {
  new (options: {level?: string; name?: string;}): {};
};
