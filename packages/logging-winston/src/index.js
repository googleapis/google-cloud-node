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

var _ = require('lodash'); 
var util = require('util');
var winston = require('winston');
var Transport = winston.Transport;

/**
 * Stackdriver Logging severity levels.
 * @private
 * @const
 */
var levels = require('./levels.js');

/**
 * Mapping on npmLevels to Stackdriver Logging levels.
 * @private
 * @const
 */
var npmLevels = {error: 3, warn: 4, info: 6, verbose: 7, debug: 7, silly: 7};

/**
 * @private
 * @const
*/
var levelNames = Object.keys(levels);

/**
 * @overview This module provides support for streaming your winston logs to
 * [Stackdriver Logging]{@link https://cloud.google.com/logging}.
 *
 * @example
 * var winston = require('winston');
 * var StackdriverTransport = require('@google-cloud/logging-winston');
 * var logger = new winston.Logger({
 *   transports: new winston.transports.StackdriverLogging();
 * });
 * logger.error('warp nacelles offline');
 * logger.verbose('sheilds at 99%');
 */

/**
 * @overview
 * ### configuration
 *
 * If your app is running on Google Cloud Platform, we handle all configuation
 * & authentication for you. We also auto-detect the appropriate [resource
 * descriptor]{@link todo://add/link} to report the log entries against.
 *
 * If you are running your application in a different environment, for example,
 * locally, on-premise, or on another cloud provider, you may need to provide
 * some configuration.
 *
 * @example
 * var logger = new winston.Logger({
 *   levels: winston.config.syslog.levels,
 *   transports: new winston.transports.StackdriverLogging({
 *     projectId: 'grape-spaceship-123',
 *     keyFilename: '/path/to/key.json',
 *     levels: winstong.config.syslog.levels,
 *     level: 'warning', // log at 'warning' and above
 *     resource: {
 *       type: 'global'
 *     }
 *   });
 * });
 * logger.emerg('antimatter containment field collapse in 10 seconds');
 */

/**
 * @typedef {object} OptionsObject
 * @property {string=} logName - The name of the log that will receive
 *     messages written to this stream (default: 'winston_log').
 * @property {object=} levels - Custom logging levels as supported by winston.
 *     We use this list of levels to translate your log level to the Stackdriver
 *     Logging level. Each property should have an integer value between 0 (most 
 *     severe) and 7 (least severe). If you are passing a list of levels to your
 *     winston logger, you should provide the same list here.
 * @property {object=} level - Default log level for the transport. Winston
 *     will filter messages with a severity lower than this.
 * @property {object=} resource - The monitored resource that the stream
 *     corresponds to. On Google Cloud Platform we infer this automatically, but
 *     you may optionally specify a specific monitored resource. For more
 *     information see the [official documentation]{@link
 * https://cloud.google.com/logging/docs/api/reference/rest/v2/MonitoredResource}.
 * @property {string=} projectId - The project ID from the Google
 *     Developer's Console, e.g. 'grape-spaceship-123'. We will also check the
 *     environment variable `GCLOUD_PROJECT` for your project ID.
 * @property {string=} keyFilename - Full path to the a .json, .pem, or .p12
 *     key downloaded from the Google Developers Console. NOTE: .pem and .p12
 *     require you to specify `options.email` as well.
 * @property {string=} email - Account email address. Required when using a .pem
 *     or .p12 keyFilename.
 * @property {object=} credentials - Credentials object.
 * @property {string} credentials.client_email
 * @property {string} credentials.private_key
 * @property {boolean=} autoRetry - Automatically retry requests if the
 *     response is related to rate limits or certain intermittent server errors.
 *     We will exponentially backoff subsequent requests by default. (default:
 *     true)
 * @property {number=} maxRetries - Maximum number of automatic retries
 *     attempted before returning the error. (default: 3)
 * @property {function=} promise - Custom promise module to use instead
 *     of native Promises.
 */

/**
 * Constructs a new object which can be used as a Winston stream.
 * @param {OptionsObject=} options - optional configuration object.
 * @constructor
 */
var StackdriverTransport =
    winston.transports.StackdriverLogging = function(options) {
      options = options || {};
      var logName = options.logName || 'winston_log';

      var transportOptions = {level: options.level, name: logName};
      Transport.call(this, transportOptions);

      this.levels_ = options.levels || npmLevels;
      this.metadata_ = {logName: logName};
      if (options.resource) {
        this.metadata_.resource = _.assign({}, options.resource);
      }
      var logging = require('@google-cloud/logging')(options);
      this.logger_ = logging.log(logName);
    };

util.inherits(StackdriverTransport, Transport);

/**
 * Relays a log entry to the logging agent. This is normally called by winston.
 * @param {string} level - The severity level at which this entry is being
 *     logged. This should match one of the levels provided to the constructor
 *     which defaults to npm levels. This level will be translated to the
 *     appropriate Stackdriver logging severity level.
 * @param {string} msg - The message to be logged.
 * @param {object=} meta - Winston provided metadata that should be attached to
 *     log entry. Each property will be converted to a string using
 *     `util.inspect`.
 * @param {function=} callback A callback that is invoked when the logging agent
 *     either succeeds or gives up writing the log entry to the remote server.
 */
StackdriverTransport.prototype.log = function(level, msg, meta, callback) {
  if (_.isFunction(meta) && !callback) {
    callback = meta;
    meta = null;
  }

  if (!_.has(this.levels_, level)) {
    throw new Error('unknown log level ' + level);
  }

  // Translate `level` to a Stackdriver logging level.
  var numericLevel = this.levels_[level];
  var stackdriverLevel = levelNames[numericLevel];

  var metadata = this.metadata_;
  if (meta) {
    // Logging proto requires that the label values be strings, so we convert
    // using util.inspect.
    var labels = {};
    Object.keys(meta).forEach(function(key) {
      labels[key] = util.inspect(meta[key]);
    });
    metadata = _.assign({labels: labels}, metadata);
  }

  var entry = this.logger_.entry(metadata, msg);
  this.logger_[stackdriverLevel](entry, callback);
};

module.exports = StackdriverTransport;
