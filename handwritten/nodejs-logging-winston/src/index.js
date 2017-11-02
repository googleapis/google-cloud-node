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

'use strict';

var extend = require('extend');
var is = require('is');
var Logging = require('@google-cloud/logging');
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
  silly: 7,
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
  7: 'debug',
};

/*!
 * Log entry data key to allow users to indicate a trace for the request.
 */
var LOGGING_TRACE_KEY = 'logging.googleapis.com/trace';

/**
 * This module provides support for streaming your winston logs to
 * [Stackdriver Logging](https://cloud.google.com/logging).
 *
 * @class
 *
 * @param {object} [options]
 * @param {object} [options.level] The default log level. Winston will filter
 *     messages with a severity lower than this.
 * @param {object} [options.levels] Custom logging levels as supported by
 *     winston. This list is used to translate your log level to the Stackdriver
 *     Logging level. Each property should have an integer value between 0 (most
 *     severe) and 7 (least severe). If you are passing a list of levels to your
 *     winston logger, you should provide the same list here.
 * @param {boolean} [options.inspectMetadata=false] Serialize winston-provided log
 *     metadata using `util.inspect`.
 * @param {string} [options.logName=winston_log] The name of the log that will receive
 *     messages written to this transport.
 * @param {object} [options.resource] The monitored resource that the transport
 *     corresponds to. On Google Cloud Platform, this is detected automatically,
 *     but you may optionally specify a specific monitored resource. For more
 *     information see the
 *     [official documentation]{@link https://cloud.google.com/logging/docs/api/reference/rest/v2/MonitoredResource}.
 * @param {object} [options.serviceContext] For logged errors, we provide this
 *     as the service context. For more information see
 *     [this guide]{@link https://cloud.google.com/error-reporting/docs/formatting-error-messages}
 *     and the [official documentation]{@link https://cloud.google.com/error-reporting/reference/rest/v1beta1/ServiceContext}.
 * @param {string} [options.serviceContext.service] An identifier of the
 *     service, such as the name of the executable, job, or Google App Engine
 *     service name.
 * @param {string} [options.serviceContext.version] Represents the version of
 *     the service.
 * @param {string} [options.projectId] The project ID from the Google Cloud
 *     Console, e.g. 'grape-spaceship-123'. We will also check the environment
 *     variable `GCLOUD_PROJECT` for your project ID. If your app is running in
 *     an environment which supports {@link https://cloud.google.com/docs/authentication/production#providing_credentials_to_your_application Application Default Credentials},
 *     your project ID will be detected automatically.
 * @param {string} [options.keyFilename] Full path to the a .json, .pem, or .p12
 *     key downloaded from the Google Cloud Console. If you provide a path
 *     to a JSON file, the `projectId` option above is not necessary. NOTE: .pem
 *     and .p12 require you to specify the `email` option as well.
 * @param {string} [options.email] Account email address. Required when using a
 *     .pem or .p12 keyFilename.
 * @param {object} [options.credentials] Credentials object.
 * @param {string} [options.credentials.client_email]
 * @param {string} [options.credentials.private_key]
 * @param {boolean} [options.autoRetry=true] Automatically retry requests if the
 *     response is related to rate limits or certain intermittent server errors.
 *     We will exponentially backoff subsequent requests by default.
 * @param {number} [options.maxRetries=3] Maximum number of automatic retries
 *     attempted before returning the error.
 * @param {constructor} [options.promise] Custom promise module to use instead
 *     of native Promises.
 *
 * @example <caption>Import the client library</caption>
 * const LoggingWinston = require('@google-cloud/logging-winston');
 *
 * @example <caption>Create a client that uses <a href="https://cloud.google.com/docs/authentication/production#providing_credentials_to_your_application">Application Default Credentials (ADC)</a>:</caption>
 * const loggingWinston = new LoggingWinston();
 *
 * @example <caption>Create a client with <a href="https://cloud.google.com/docs/authentication/production#obtaining_and_providing_service_account_credentials_manually">explicit credentials</a>:</caption>
 * const loggingWinston = new LoggingWinston({
 *   projectId: 'your-project-id',
 *   keyFilename: '/path/to/keyfile.json'
 * });
 *
 * @example <caption>include:samples/quickstart.js</caption>
 * region_tag:logging_winston_quickstart
 * Full quickstart example:
 */
function LoggingWinston(options) {
  if (!(this instanceof LoggingWinston)) {
    return new LoggingWinston(options);
  }

  options = extend(
    {
      scopes: ['https://www.googleapis.com/auth/logging.write'],
    },
    options
  );

  var logName = options.logName || 'winston_log';

  winston.Transport.call(this, {
    level: options.level,
    name: logName,
  });

  this.inspectMetadata_ = options.inspectMetadata === true;
  this.levels_ = options.levels || NPM_LEVEL_NAME_TO_CODE;
  this.log_ = new Logging(options).log(logName);
  this.resource_ = options.resource;
  this.serviceContext_ = options.serviceContext;
}

winston.transports.StackdriverLogging = LoggingWinston;
util.inherits(LoggingWinston, winston.Transport);

/*!
 * Gets the current fully qualified trace ID when available from the
 * @google-cloud/trace-agent library in the LogEntry.trace field format of:
 * "projects/[PROJECT-ID]/traces/[TRACE-ID]".
 */
function getCurrentTraceFromAgent() {
  var agent = global._google_trace_agent;
  if (!agent || !agent.getCurrentContextId || !agent.getWriterProjectId) {
    return null;
  }

  var traceId = agent.getCurrentContextId();
  if (!traceId) {
    return null;
  }

  var traceProjectId = agent.getWriterProjectId();
  if (!traceProjectId) {
    return null;
  }

  return `projects/${traceProjectId}/traces/${traceId}`;
}

/**
 * Relay a log entry to the logging agent. This is normally called by winston.
 *
 * @param {string} levelName - The severity level at which this entry is being
 *     logged. This should match one of the levels provided to the constructor
 *     which defaults to npm levels. This level will be translated to the
 *     appropriate Stackdriver logging severity level.
 * @param {string} msg The message to be logged.
 * @param {object} [metadata] Winston-provided metadata that should be attached
 *     to the log entry. If a `httpRequest` property is set, it will be treated
 *     as a [HttpRequest]{@link https://cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry#HttpRequest}
 *     request log message. If `options.inspectMetadata` is set, we will convert
 *     the remaining properties to `string`s before reporting.
 * @param {function} callback A callback that is invoked when the logging
 *     agent either succeeds or gives up writing the log entry to the remote
 *     server.
 */
LoggingWinston.prototype.log = function(levelName, msg, metadata, callback) {
  if (is.fn(metadata)) {
    callback = metadata;
    metadata = {};
  }

  if (this.levels_[levelName] === undefined) {
    throw new Error('Unknown log level: ' + levelName);
  }

  var levelCode = this.levels_[levelName];
  var stackdriverLevel = STACKDRIVER_LOGGING_LEVEL_CODE_TO_NAME[levelCode];

  var entryMetadata = {
    resource: this.resource_,
  };

  var data = {};

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
  if (metadata && metadata.stack) {
    msg += (msg ? ' ' : '') + metadata.stack;
    data.serviceContext = this.serviceContext_;
  }

  data.message = msg;

  if (is.object(metadata)) {
    data.metadata = this.inspectMetadata_
      ? mapValues(metadata, util.inspect)
      : metadata;

    // If the metadata contains a httpRequest property, promote it to the entry
    // metadata. This allows Stackdriver to use request log formatting.
    // https://cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry#HttpRequest
    // Note that the httpRequest field must properly validate as HttpRequest
    // proto message, or the log entry would be rejected by the API. We no do
    // validation here.
    if (metadata.httpRequest) {
      entryMetadata.httpRequest = metadata.httpRequest;
      delete data.metadata.httpRequest;
    }
  }

  if (metadata && metadata[LOGGING_TRACE_KEY]) {
    entryMetadata.trace = metadata[LOGGING_TRACE_KEY];
    delete data.metadata[LOGGING_TRACE_KEY];
  } else {
    var trace = getCurrentTraceFromAgent();
    if (trace) {
      entryMetadata.trace = trace;
    }
  }

  var entry = this.log_.entry(entryMetadata, data);
  this.log_[stackdriverLevel](entry, callback);
};

/**
 * Value: `logging.googleapis.com/trace`
 *
 * @name LoggingWinston.LOGGING_TRACE_KEY
 * @type {string}
 */
LoggingWinston.LOGGING_TRACE_KEY = LOGGING_TRACE_KEY;

/**
 * The default export of the `@google-cloud/logging-winston` package is the
 * {@link LoggingWinston} class.
 *
 * See {@link LoggingWinston} for client methods and configuration options.
 *
 * @module {constructor} @google-cloud/logging-winston
 * @alias nodejs-logging-winston
 *
 * @example <caption>Install the client library with <a href="https://www.npmjs.com/">npm</a>:</caption>
 * npm install --save @google-cloud/logging-winston
 *
 * @example <caption>Import the client library</caption>
 * const LoggingWinston = require('@google-cloud/logging-winston');
 *
 * @example <caption>Create a client that uses <a href="https://cloud.google.com/docs/authentication/production#providing_credentials_to_your_application">Application Default Credentials (ADC)</a>:</caption>
 * const loggingWinston = new LoggingWinston();
 *
 * @example <caption>Create a client with <a href="https://cloud.google.com/docs/authentication/production#obtaining_and_providing_service_account_credentials_manually">explicit credentials</a>:</caption>
 * const loggingWinston = new LoggingWinston({
 *   projectId: 'your-project-id',
 *   keyFilename: '/path/to/keyfile.json'
 * });
 *
 * @example <caption>include:samples/quickstart.js</caption>
 * region_tag:logging_winston_quickstart
 * Full quickstart example:
 */
module.exports = LoggingWinston;
