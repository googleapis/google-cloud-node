/**
 * Copyright 2015 Google Inc. All Rights Reserved.
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
'use strict';

// Default configuration
module.exports = {
  debug: {
    enabled: true,

    // An identifier for the current code deployment.
    description: 'test config',

    serviceContext: {
      // An identifier for the current code's service name
      service: 'test service name',

      // An identifier for the current code's version
      version: 'test version'
    },

    // Log levels: 0-disabled,1-error,2-warn,3-info,4-debug.
    logLevel: 4,

    capture: {
      // Whether to include details about stack frames belonging to node-core.
      includeNodeModules: true,
    },

    // This is only for testing the config priority
    testPriority: 'from the config file',

  // These configuration options are for internal experimentation only.
  internal: {
    registerDelayOnFetcherErrorSec: 300 // 5 minutes.
  }
}
};
