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

import * as TransportStream from 'winston-transport';

import {LOGGING_TRACE_KEY, LoggingCommon} from './common';
import * as types from './types/core';

type Callback = (err: Error, apiResponse: {}) => void;

export class LoggingWinston extends TransportStream {
  static readonly LOGGING_TRACE_KEY = LOGGING_TRACE_KEY;

  private common: LoggingCommon;
  constructor(options?: types.Options) {
    options = options || {};

    super({
      level: options.level,
    });

    this.common = new LoggingCommon(options);
  }

  log({message, level, splat, stack, ...metadata}: types.Winston3LogArg,
      callback: Callback) {
    // If the whole message is an error we have to manually copy the stack into
    // metadata. Errors dont have enumerable properties so they don't
    // destructure.
    if (stack) metadata.stack = stack;

    this.common.log(level, message, metadata || {}, callback);
  }
}