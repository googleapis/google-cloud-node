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

/*!
 * @module logging-winston
 */

'use strict';

var extend = require('extend');
var is = require('is');
var logging = require('@google-cloud/logging');
var mapValues = require('lodash.mapvalues');
var util = require('util');
var winston = require('winston');

/**
 * Map of npm output levels to Stackdriver Logging levels.
 *
 * @type {object}
 * @private
 */
var NPM_LEVEL_NAME_TO_CODE = {
  error: 3,
  warn: 4,
  info: 6,
  verbose: 7,
  debug: 7,
  silly: 7
};

/**
 * Map of Stackdriver Logging levels.
 *
 * @type {object}
 * @private
 */
var STACKDRIVER_LOGGING_LEVEL_CODE_TO_NAME = {
  0: 'emergency',
  1: 'alert',
  2: 'critical',
  3: 'error',
  4: 'warning',
  5: 'notice',
  6: 'info',
  7: 'debug'
};

/**
 * This module provides support for streaming your winston logs to
 * [Stackdriver Logging]{@link https://cloud.google.com/logging}.
 *
 * If your app is running on Google Cloud Platform, all configuration and
 * authentication is handled for you. We also auto-detect the appropriate
 * resource descriptor to report the log entries against.
 *
 * If you are running your application in another environment, such as locally,
 * on-premise, or on another cloud provider, you will need to provide additional
 * configuration.
 *
 * @constructor
 * @alias module:logging-winston
 *
 * @param {object} options - [Configuration object](#/docs). Refer to this link
 *     for authentication information.
 * @param {object=} options.level - The default log level. Winston will filter
 *     messages with a severity lower than this.
 * @param {object=} options.levels - Custom logging levels as supported by
 *     winston. This list is used to translate your log level to the Stackdriver
 *     Logging level. Each property should have an integer value between 0 (most
 *     severe) and 7 (least severe). If you are passing a list of levels to your
 *     winston logger, you should provide the same list here.
 * @param {boolean=} options.inspectMetadata - Serialize winston-provided log
 *     metadata using `util.inspect`. Default: false
 * @param {string=} options.logName - The name of the log that will receive
 *     messages written to this transport. Default: `winston_log`
 * @param {object=} options.resource - The monitored resource that the transport
 *     corresponds to. On Google Cloud Platform, this is detected automatically,
 *     but you may optionally specify a specific monitored resource. For more
 *     information see the
 *     [official documentation]{@link https://cloud.google.com/logging/docs/api/reference/rest/v2/MonitoredResource}.
 *
 * @example
 * var transport = require('@google-cloud/logging-winston');
 * var winston = require('winston');
 *
 * winston.add(transport, {
 *   projectId: 'grape-spaceship-123',
 *   keyFilename: '/path/to/keyfile.json',
 *   level: 'warning', // log at 'warning' and above
 *   resource: {
 *     type: 'global'
 *   }
 * });
 *
 * winston.emerg('antimatter containment field collapse imminent');
 */
function LoggingWinston(options) {
  if (!(this instanceof LoggingWinston)) {
    return new LoggingWinston(options);
  }

  options = extend({
    scopes: ['https://www.googleapis.com/auth/logging.write']
  }, options);

  var logName = options.logName || 'winston_log';

  winston.Transport.call(this, {
    level: options.level,
    name: logName
  });

  this.inspectMetadata_ = options.inspectMetadata === true;
  this.levels_ = options.levels || NPM_LEVEL_NAME_TO_CODE;
  this.log_ = logging(options).log(logName);
  this.resource_ = options.resource;
}

winston.transports.StackdriverLogging = LoggingWinston;
util.inherits(LoggingWinston, winston.Transport);

/**
 * Relay a log entry to the logging agent. This is normally called by winston.
 *
 * @param {string} levelName - The severity level at which this entry is being
 *     logged. This should match one of the levels provided to the constructor
 *     which defaults to npm levels. This level will be translated to the
 *     appropriate Stackdriver logging severity level.
 * @param {string} msg - The message to be logged.
 * @param {object=} metadata - Winston-provided metadata that should be attached
 *     to the log entry. Each property will be converted to a string using
 *     `util.inspect`.
 * @param {function=} callback - A callback that is invoked when the logging
 *     agent either succeeds or gives up writing the log entry to the remote
 *     server.
 */
LoggingWinston.prototype.log = function(levelName, msg, metadata, callback) {
  if (is.fn(metadata)) {
    callback = metadata;
    metadata = {};
  }

  if (!this.levels_[levelName]) {
    throw new Error('Unknown log level: ' + levelName);
  }

  var levelCode = this.levels_[levelName];
  var stackdriverLevel = STACKDRIVER_LOGGING_LEVEL_CODE_TO_NAME[levelCode];

  var entryMetadata = {
    resource: this.resource_,
  };

  // Stackdriver Logs Viewer picks up the summary line from the `message`
  // property of the jsonPayload.
  // https://cloud.google.com/logging/docs/view/logs_viewer_v2#expanding.
  //
  // For error messages at severity 'error' and higher, Stackdriver
  // Error Reporting will pick up error messages if the full stack trace is
  // included in the textPayload or the message property of the jsonPayload.
  // https://cloud.google.com/error-reporting/docs/formatting-error-messages
  // We prefer to format messages as jsonPayload (by putting it as a message
  // property on an object) as that works is accepted by Error Reporting in
  // for more resource types.
  //
  // TODO(ofrobots): when resource.type is 'global' we need to additionally
  // provide serviceContext.service as part of the entry for Error Reporting to
  // automatically pick up the error.
  if (metadata && metadata.stack) {
    msg += (msg ? ' ' : '') + metadata.stack;
  }

  var data = {
    message: msg
  };

  if (is.object(metadata)) {
    data.metadata =
      this.inspectMetadata_ ? mapValues(metadata, util.inspect) : metadata;
  }

  var entry = this.log_.entry(entryMetadata, data);
  this.log_[stackdriverLevel](entry, callback);
};

module.exports = LoggingWinston;
