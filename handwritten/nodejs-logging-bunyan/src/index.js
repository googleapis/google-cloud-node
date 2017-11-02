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

'use strict';

var extend = require('extend');
var logging = require('@google-cloud/logging');
var util = require('util');
var Writable = require('stream').Writable;

/*!
 * Map of Stackdriver logging levels.
 *
 * @type {object}
 * @private
 */
var BUNYAN_TO_STACKDRIVER = {
  60: 'CRITICAL',
  50: 'ERROR',
  40: 'WARNING',
  30: 'INFO',
  20: 'DEBUG',
  10: 'DEBUG',
};

/*!
 * Key to use in the Bunyan payload to allow users to indicate a trace for the
 * request, and to store as an intermediate value on the log entry before it
 * gets written to the Stackdriver logging API.
 */
var LOGGING_TRACE_KEY = 'logging.googleapis.com/trace';

/**
 * This module provides support for streaming your Bunyan logs to
 * [Stackdriver Logging](https://cloud.google.com/logging).
 *
 * @class
 *
 * @param {object} [options]
 * @param {string} [options.logName] The name of the log that will receive
 *     messages written to this bunyan stream. Default: `bunyan_Log`.
 * @param {object} [options.resource] The monitored resource that the log
 *     stream corresponds to. On Google Cloud Platform, this is detected
 *     automatically, but you may optionally specify a specific monitored
 *     resource. For more information, see the
 *     [official documentation]{@link https://cloud.google.com/logging/docs/api/reference/rest/v2/MonitoredResource}
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
 * const LoggingBunyan = require('@google-cloud/logging-bunyan');
 *
 * @example <caption>Create a client that uses <a href="https://cloud.google.com/docs/authentication/production#providing_credentials_to_your_application">Application Default Credentials (ADC)</a>:</caption>
 * const loggingBunyan = new LoggingBunyan();
 *
 * @example <caption>Create a client with <a href="https://cloud.google.com/docs/authentication/production#obtaining_and_providing_service_account_credentials_manually">explicit credentials</a>:</caption>
 * const loggingBunyan = new LoggingBunyan({
 *   projectId: 'your-project-id',
 *   keyFilename: '/path/to/keyfile.json'
 * });
 *
 * @example <caption>include:samples/quickstart.js</caption>
 * region_tag:logging_bunyan_quickstart
 * Full quickstart example:
 *
 */
function LoggingBunyan(options) {
  if (!(this instanceof LoggingBunyan)) {
    return new LoggingBunyan(options);
  }

  options = options || {};

  this.logName_ = options.logName || 'bunyan_log';
  this.resource_ = options.resource;
  this.serviceContext_ = options.serviceContext;

  this.log_ = logging(options).log(this.logName_, {
    removeCircular: true,
  });

  Writable.call(this, {
    objectMode: true,
  });
}
util.inherits(LoggingBunyan, Writable);

/**
 * Convenience method that Builds a bunyan stream object that you can put in
 * the bunyan streams list.
 *
 * @param {string|number} level A bunyan logging level. Log entries at or
 *     above this level will be routed to Stackdriver Logging.
 *
 * @example
 * const logger = bunyan.createLogger({
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
    stream: this,
  };
};

/**
 * Format a bunyan record into a Stackdriver log entry.
 *
 * @param {object} record - Bunyan log record.
 *
 * @private
 */
LoggingBunyan.prototype.formatEntry_ = function(record) {
  if (typeof record === 'string') {
    throw new Error(
      '@google-cloud/logging-bunyan only works as a raw bunyan stream type.'
    );
  }

  // Stackdriver Log Viewer picks up the summary line from the 'message' field
  // of the payload. Unless the user has provided a 'message' property also,
  // move the 'msg' to 'message'.
  if (!record.message) {
    // If this is an error, report the full stack trace. This allows Stackdriver
    // Error Reporting to pick up errors automatically (for severity 'error' or
    // higher). In this case we leave the 'msg' property intact.
    // https://cloud.google.com/error-reporting/docs/formatting-error-messages
    //
    if (record.err && record.err.stack) {
      record.message = record.err.stack;
      record.serviceContext = this.serviceContext_;
    } else if (record.msg) {
      // Simply rename `msg` to `message`.
      record.message = record.msg;
      delete record.msg;
    }
  }

  var entryMetadata = {
    resource: this.resource_,
    timestamp: record.time,
    severity: BUNYAN_TO_STACKDRIVER[record.level],
  };

  // If the record contains a httpRequest property, provide it on the entry
  // metadata. This allows Stackdriver to use request log formatting.
  // https://cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry#HttpRequest
  // Note that the httpRequest field must properly validate as a HttpRequest
  // proto message, or the log entry would be rejected by the API. We do no
  // validation here.
  if (record.httpRequest) {
    entryMetadata.httpRequest = record.httpRequest;
    delete record.httpRequest;
  }

  if (record[LOGGING_TRACE_KEY]) {
    entryMetadata.trace = record[LOGGING_TRACE_KEY];
    delete record[LOGGING_TRACE_KEY];
  }

  return this.log_.entry(entryMetadata, record);
};

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
 * Intercept log entries as they are written so we can attempt to add the trace
 * ID in the same continuation as the function that wrote the log, because the
 * trace agent currently uses continuation local storage for the trace context.
 *
 * By the time the Writable stream buffer gets flushed and _write gets called
 * we may well be in a different continuation.
 *
 * @param {object} record
 * @param {string} encoding
 * @param {function} callback
 */
LoggingBunyan.prototype.write = function(record, encoding, callback) {
  record = extend({}, record);
  if (!record[LOGGING_TRACE_KEY]) {
    var trace = getCurrentTraceFromAgent();
    if (trace) {
      record[LOGGING_TRACE_KEY] = trace;
    }
  }

  Writable.prototype.write.call(this, record, encoding, callback);
};

/**
 * Relay a log entry to the logging agent. This is called by bunyan through
 * Writable#write.
 *
 * @param {object} record - Bunyan log record.
 *
 * @private
 */
LoggingBunyan.prototype._write = function(record, encoding, callback) {
  var entry = this.formatEntry_(record);
  this.log_.write(entry, callback);
};

/**
 * Relay an array of log entries to the logging agent. This is called by bunyan
 * through Writable#write.
 *
 * @param {object[]} records - Array of WritableStream WriteReq objects.
 *
 * @private
 */
LoggingBunyan.prototype._writev = function(chunks, callback) {
  var self = this;

  var entries = chunks.map(function(request) {
    return self.formatEntry_(request.chunk);
  });

  this.log_.write(entries, callback);
};

/**
 * The default export of the `@google-cloud/logging-bunyan` package is the
 * {@link LoggingBunyan} class.
 *
 * See {@link LoggingBunyan} for client methods and configuration options.
 *
 * @module {constructor} @google-cloud/logging-bunyan
 * @alias nodejs-logging-bunyan
 *
 * @example <caption>Install the client library with <a href="https://www.npmjs.com/">npm</a>:</caption>
 * npm install --save @google-cloud/logging-bunyan
 *
 * @example <caption>Import the client library</caption>
 * const LoggingBunyan = require('@google-cloud/logging-bunyan');
 *
 * @example <caption>Create a client that uses <a href="https://cloud.google.com/docs/authentication/production#providing_credentials_to_your_application">Application Default Credentials (ADC)</a>:</caption>
 * const loggingBunyan = new LoggingBunyan();
 *
 * @example <caption>Create a client with <a href="https://cloud.google.com/docs/authentication/production#obtaining_and_providing_service_account_credentials_manually">explicit credentials</a>:</caption>
 * const loggingBunyan = new LoggingBunyan({
 *   projectId: 'your-project-id',
 *   keyFilename: '/path/to/keyfile.json'
 * });
 *
 * @example <caption>include:samples/quickstart.js</caption>
 * region_tag:logging_bunyan_quickstart
 * Full quickstart example:
 */
module.exports = LoggingBunyan;

module.exports.BUNYAN_TO_STACKDRIVER = BUNYAN_TO_STACKDRIVER;

/**
 * Value: `logging.googleapis.com/trace`
 *
 * @name LoggingBunyan.LOGGING_TRACE_KEY
 * @type {string}
 */
module.exports.LOGGING_TRACE_KEY = LOGGING_TRACE_KEY;
