/*!
 * Copyright 2017 Google Inc. All Rights Reserved.
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

/*!
 * @module logging-bunyan
 */

'use strict';

var logging = require('@google-cloud/logging');

/**
 * Map of Stackdriver logging levels.
 *
 * @type {object}
 * @private
 */
var BUNYAN_TO_STACKDRIVER = {
  60: 'critical',
  50: 'error',
  40: 'warning',
  30: 'info',
  20: 'debug',
  10: 'debug'
};

/**
 * This module provides support for streaming your Bunyan logs to
 * [Stackdriver Logging]{@link https://cloud.google.com/logging}.
 *
 * If your app is running on Google Cloud Platform, all configuration and
 * authentication is handled for you. We also auto-detect the appropriate
 * resource descriptor to report the log entries against.
 *
 * If you are running your application in anther environment, such as locally,
 * on-premise, or on another cloud provider, you will need to provide additional
 * configuration.
 *
 * @constructor
 * @alias module:logging-bunyan
 *
 * @param {object} options - [Configuration object](#/docs). Refer to this link
 *     for authentication information.
 * @param {string=} options.logName - The name of the log that will receive
 *     messages written to this bunyan stream. Default: `bunyan_Log`.
 * @param {object=} options.resource - The monitored resource that the log
 *     stream corresponds to. On Google Cloud Platform, this is detected
 *     automatically, but you may optionally specify a specific monitored
 *     resource. For more information, see the
 *     [official documentation]{@link https://cloud.google.com/logging/docs/api/reference/rest/v2/MonitoredResource}
 *
 * @example
 * var bunyan = require('bunyan');
 *
 * var loggingBunyan = require('@google-cloud/logging-bunyan')({
 *   projectId: 'grape-spaceship-123',
 *   keyFilename: '/path/to/keyfile.json',
 *   resource: {
 *     type: 'global'
 *   }
 * });
 *
 * var logger = bunyan.createLogger({
 *   name: 'my-service',
 *   streams: [
 *     loggingBunyan.stream('info')
 *   ]
 * });
 *
 */
function LoggingBunyan(options) {
  if (!(this instanceof LoggingBunyan)) {
    return new LoggingBunyan(options);
  }

  options = options || {};

  this.logName_ = options.logName || 'bunyan_log';
  this.resource_ = options.resource;

  this.log_ = logging(options).log(this.logName_, {
    removeCircular: true
  });
}

/**
 * Convenience method that Builds a bunyan stream object that you can put in
 * the bunyan streams list.
 *
 * @param {string|number} level - A bunyan logging level. Log entries at or
 *     above this level will be routed to Stackdriver Logging.
 *
 * @example
 * var logger = bunyan.createLogger({
 *   name: 'my-service',
 *   streams: [
 *     loggingBunyan.stream('info')
 *   ]
 * });
 */
LoggingBunyan.prototype.stream = function(level) {
  return {
    level: level,
    type: 'raw',
    stream: this
  };
};

/**
 * Relay a log entry to the logging agent. This is normally called by bunyan.
 *
 * @param {object} record - Bunyan log record.
 *
 * @private
 */
LoggingBunyan.prototype.write = function(record) {
  if (typeof record === 'string') {
    throw new Error(
      '@google-cloud/logging-bunyan only works as a raw bunyan stream type.'
    );
  }

  var level = BUNYAN_TO_STACKDRIVER[record.level];

  var entryMetadata = {
    resource: this.resource_,
    timestamp: record.time
  };

  var entry = this.log_.entry(entryMetadata, record);

  this.log_[level](entry, function() {
    // no-op to avoid a promise being returned.
  });
};

module.exports = LoggingBunyan;
module.exports.BUNYAN_TO_STACKDRIVER = BUNYAN_TO_STACKDRIVER;
