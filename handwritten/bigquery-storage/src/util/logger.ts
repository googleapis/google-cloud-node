// Copyright 2023 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import * as util from 'util';

/*! The external function used to emit logs. */
let logFunction: ((msg: string) => void) | null = null;

/**
 * Log function to use for debug output. By default, we don't perform any
 * logging.
 *
 * @private
 * @internal
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function logger(source: string, msg: string, ...otherArgs: any[]) {
  if (logFunction) {
    const time = new Date().toISOString();
    const formattedMsg = util.format(
      `D ${time} | ${source} | ${msg} |`,
      ...otherArgs,
    );
    logFunction(formattedMsg);
  }
}

/**
 * Sets or disables the log function for all active Firestore instances.
 *
 * @param logger A log function that takes a message (such as `console.log`) or
 * `null` to turn off logging.
 */
export function setLogFunction(logger: ((msg: string) => void) | null): void {
  logFunction = logger;
}
