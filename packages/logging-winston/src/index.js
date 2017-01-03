/**
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

'use strict';

var is = require('is');
var logging = require('@google-cloud/logging');
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
 * @param {object} options - [Configuration object](#/docs). Refer to this link
 *     for authentication information.
 * @param {object=} options.level - The default log level. Winston will filter
 *     messages with a severity lower than this.
 * @param {object=} options.levels - Custom logging levels as supported by
 *     winston. This list is used to translate your log level to the Stackdriver
 *     Logging level. Each property should have an integer value between 0 (most
 *     severe) and 7 (least severe). If you are passing a list of levels to your
 *     winston logger, you should provide the same list here.
 * @param {string=} options.logName - The name of the log that will receive
 *     messages written to this transport. Default: `winston_log`
 * @param {object=} options.resource - The monitored resource that the transport
 *     corresponds to. On Google Cloud Platform, this is detected automatically,
 *     but you may optionally specify a specific monitored resource. For more
 *     information see the
 *     [official documentation]{@link https://cloud.google.com/logging/docs/api/reference/rest/v2/MonitoredResource}.
 *
 * @example
 * var winston = require('winston');
 * var transport = require('@google-cloud/logging-winston');
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

  options = options || {};

  // options.levels must be a map from level names to stackdriver severities.
  if (options.levels) {
    for (var key in options.levels) {
      var level = options.levels[key];
      if (!is.number(level) || level < 0 || level > 7) {
        throw new Error('invalid options.levels: ' + key + ':' + level);
      }
    }
  }

  this.levels_ = options.levels || NPM_LEVEL_NAME_TO_CODE;

  // options.level must be a valid entry from the levels_.
  if (options.level && !this.levels_[options.level]) {
    throw new Error('invalid options.level: ' + options.level);
  }

  var logName = options.logName || 'winston_log';

  winston.Transport.call(this, {
    level: options.level,
    name: logName
  });

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

  var labels = {};

  // Logging proto requires that the label values be strings, so we convert
  // using util.inspect.
  if (is.object(metadata)) {
    for (var key in metadata) {
      labels[key] = util.inspect(metadata[key]);
    }
  }

  var entryMetadata = {
    resource: this.resource_,
    labels: labels
  };

  var entry = this.log_.entry(entryMetadata, msg);
  this.log_[stackdriverLevel](entry, callback);
};

module.exports = LoggingWinston;
