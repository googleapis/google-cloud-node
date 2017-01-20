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

/**
 * @typedef {object} DebugAgentConfig
 */

module.exports = {
  // FIXME(ofrobots): presently this is dependent what cwd() is at the time this
  // file is first required. We should make the default config static.
  /**
   * @property {?string}
   * @memberof DebugAgentConfig
   * @default
   */
  workingDirectory: process.cwd(),

  /**
   * @property {?string} A user specified way of identifying the service
   * that the debug agent is monitoring.
   * @memberof DebugAgentConfig
   * @default
   */
  description: null,

  // FIXME(ofrobots): today we prioritize GAE_MODULE_NAME/GAE_MODULE_VERSION
  // over the user specified config. We should reverse that.
  /**
   * @property {object} Identifies the context of the running service -
   * [ServiceContext](https://cloud.google.com/error-reporting/reference/rest/v1beta1/ServiceContext?authuser=2).
   * This information is utilized in the UI to identify all the running
   * instances of your service. This is discovered automatically when your
   * application is running on Google Cloud Platform. You may optionally choose
   * to provide this information yourself to identify your service differently
   * from the default mechanism.
   * @memberof DebugAgentConfig
   * @default
   */
  serviceContext: {
    /**
     * @property {?string} the service name
     * @default
     */
    service: null,

    /**
     * @property {?string} the service version
     * @default
     */
    version: null
  },

  /**
   * @property {?string}   The path within your repository to the directory
   * containing the package.json for your deployed application. This should be
   * provided if your deployed application appears as a subdirectory of your
   * repository. Usually this is unnecessary, but may be useful in cases where
   * the debug agent is unable to resolve breakpoint locations unambiguously.
   * @memberof DebugAgentConfig
   * @default
   */
  appPathRelativeToRepository: null,

  /**
   * @property {number} agent log level 0-disabled, 1-error, 2-warn, 3-info,
   * 4-debug
   * @memberof DebugAgentConfig
   * @default
   */
  logLevel: 1,

  /**
   * @property {number} How frequently should the list of breakpoints be
   * refreshed from the cloud debug server.
   * @memberof DebugAgentConfig
   * @default
   */
  breakpointUpdateIntervalSec: 10,

  /**
   * @property {number} breakpoints and logpoints older than this number of
   * seconds will be expired on the server.
   * @memberof DebugAgentConfig
   * @default
   */
  breakpointExpirationSec: 60 * 60 * 24,  // 24 hours

  /**
   * @property {object} configuration options on what is captured on a
   * snapshot.
   * @memberof DebugAgentConfig
   */
  capture: {
    /**
     * @property {boolean} Whether to include details about stack frames
     * belonging to node-core.
     * @default
     */
    includeNodeModules: false,


    /**
     * @property {number} Maximum number of stack frames to capture data for.
     * The limit is aimed to reduce overall capture time.
     * @default
     */
    maxFrames: 20,

    /**
     * @property {number} We collect locals and arguments on a few top frames.
     * For the rest only collect the source location
     * @default
     */
    maxExpandFrames: 5,

    /**
     * @property {number} To reduce the overall capture time, limit the number
     * of properties gathered on large objects. A value of 0 disables the limit.
     * @default
     */
    maxProperties: 10,

    /**
     * @property {number} Total 'size' of data to gather. This is NOT the
     * number of bytes of data that are sent over the wire, but instead a very
     * very coarse approximation based on the length of names and values of the
     * properties. This should be somewhat proportional to the amount of
     * processing needed to capture the data and subsequently the network
     * traffic. A value of 0 disables the limit.
     * @default
     */
    maxDataSize: 20000,

    /**
     * @property {number} To limit the size of the buffer, we truncate long
     * strings. A value of 0 disables truncation.
     * @default
     */
    maxStringLength: 100
  },

  /**
   * @property {object} options affecting log points.
   * @memberof DebugAgentConfig
   */
  log: {
    /**
     * @property {number} The maximum number of logs to record per second per
     * logpoint.
     * @memberof DebugAgentConfig
     * @default
     */
    maxLogsPerSecond: 50,

    /**
     * @property {number} Number of seconds to wait after the
     * `maxLogsPerSecond` rate is hit before logging resumes per logpoint.
     * @default
     */
    logDelaySeconds: 1
  },

  /**
   * @property {object} These configuration options are for internal
   * experimentation only.
   * @memberof DebugAgentConfig
   * @private
   */
  internal: {
    registerDelayOnFetcherErrorSec: 300,  // 5 minutes.
    maxRegistrationRetryDelay: 40
  }
};
