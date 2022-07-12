// Copyright 2017 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import TransportStream = require('winston-transport');

import {
  LOGGING_TRACE_KEY as COMMON_TRACE_KEY,
  LOGGING_SPAN_KEY as COMMON_SPAN_KEY,
  LOGGING_SAMPLED_KEY as COMMON_SAMPLED_KEY,
  LoggingCommon,
  getCurrentTraceFromAgent,
} from './common';
import * as express from './middleware/express';
import {getDefaultMetadataForTracing} from './default-metadata';
import {
  MonitoredResource,
  ServiceContext,
  LoggingOptions,
} from '@google-cloud/logging';

const LEVEL = Symbol.for('level');

// Export the express middleware as 'express'.
export {express};
export {getDefaultMetadataForTracing};
export {getCurrentTraceFromAgent};

type Callback = (err: Error | null, apiResponse?: {}) => void;

export interface Options extends LoggingOptions {
  /**
   * The default log level. Winston will filter messages with a severity lower
   * than this.
   */
  level?: string;
  /**
   * Custom logging levels as supported by winston. This list is used to
   * translate your log level to the Cloud Logging level. Each property
   * should have an integer value between 0 (most severe) and 7 (least severe).
   * If you are passing a list of levels to your winston logger, you should
   * provide the same list here.
   */
  levels?: {[name: string]: number};
  /**
   *  Serialize winston-provided log metadata using `util.inspect`.
   */
  inspectMetadata?: boolean;
  /**
   * The name of the log that will receive messages written to this transport.
   */
  logName?: string;
  /**
   * The monitored resource that the transport corresponds to. On Google Cloud
   * Platform, this is detected automatically, but you may optionally specify a
   * specific monitored resource. For more information see the
   * [official documentation]{@link
   * https://cloud.google.com/logging/docs/api/reference/rest/v2/MonitoredResource}.
   */
  resource?: MonitoredResource;
  /**
   * For logged errors, we provide this as the service context. For more
   * information see [this guide]{@link
   * https://cloud.google.com/error-reporting/docs/formatting-error-messages}
   * and the [official documentation]{@link
   * https://cloud.google.com/error-reporting/reference/rest/v1beta1/ServiceContext}.
   */
  serviceContext?: ServiceContext;

  logname?: string;

  prefix?: string;

  labels?: {[key: string]: string};

  // An attempt will be made to truncate messages larger than maxEntrySize.
  // Please note that this parameter is ignored when redirectToStdout is set.
  maxEntrySize?: number;

  // A default global callback to be used for {@link LoggingWinston#log} when callback is
  // not supplied by caller in function parameters
  defaultCallback?: Callback;

  /**
   * Boolen flag that opts-in redirecting the output to STDOUT instead of ingesting logs to Cloud
   * Logging using Logging API. Defaults to {@code false}. Redirecting logs can be used in
   * Google Cloud environments with installed logging agent to delegate log ingestions to the
   * agent. Redirected logs are formatted as one line Json string following the structured logging guidelines.
   */
  redirectToStdout?: boolean;
}

/**
 * This module provides support for streaming your winston logs to
 * [Cloud Logging](https://cloud.google.com/logging).
 *
 * @class
 *
 * @param {object} [options]
 * @param {object} [options.level] The default log level. Winston will filter
 *     messages with a severity lower than this.
 * @param {object} [options.levels] Custom logging levels as supported by
 *     winston. This list is used to translate your log level to the Cloud
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
 *     [official documentation]{@link
 * https://cloud.google.com/logging/docs/api/reference/rest/v2/MonitoredResource}.
 * @param {object} [options.serviceContext] For logged errors, we provide this
 *     as the service context. For more information see
 *     [this guide]{@link
 * https://cloud.google.com/error-reporting/docs/formatting-error-messages} and
 * the [official documentation]{@link
 * https://cloud.google.com/error-reporting/reference/rest/v1beta1/ServiceContext}.
 * @param {string} [options.serviceContext.service] An identifier of the
 *     service, such as the name of the executable, job, or Google App Engine
 *     service name.
 * @param {string} [options.serviceContext.version] Represents the version of
 *     the service.
 * @param {string} [options.projectId] The project ID from the Google Cloud
 *     Console, e.g. 'grape-spaceship-123'. We will also check the environment
 *     variable `GCLOUD_PROJECT` for your project ID. If your app is running in
 *     an environment which supports {@link
 * https://cloud.google.com/docs/authentication/production#providing_credentials_to_your_application
 * Application Default Credentials}, your project ID will be detected
 * automatically.
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
 * const {LoggingWinston} = require('@google-cloud/logging-winston');
 *
 * @example <caption>Create a client that uses <a
 * href="https://cloud.google.com/docs/authentication/production#providing_credentials_to_your_application">Application
 * Default Credentials (ADC)</a>:</caption> const loggingWinston = new
 * LoggingWinston();
 *
 * @example <caption>Create a client with <a
 * href="https://cloud.google.com/docs/authentication/production#obtaining_and_providing_service_account_credentials_manually">explicit
 * credentials</a>:</caption> const loggingWinston = new LoggingWinston({
 *   projectId: 'your-project-id',
 *   keyFilename: '/path/to/keyfile.json'
 * });
 *
 * @example <caption>include:samples/quickstart.js</caption>
 * region_tag:logging_winston_quickstart
 * Full quickstart example:
 */
export class LoggingWinston extends TransportStream {
  static readonly LOGGING_TRACE_KEY = COMMON_TRACE_KEY;
  static readonly LOGGING_SPAN_KEY = COMMON_SPAN_KEY;
  static readonly LOGGING_SAMPLED_KEY = COMMON_SAMPLED_KEY;

  common: LoggingCommon;

  constructor(options?: Options) {
    options = options || {};
    super({
      level: options.level,
    });
    this.common = new LoggingCommon(options);
  }

  // eslint-disable-next-line
  log(info: any, callback: Callback) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const {message, level, splat, stack, ...metadata} = info;

    // If the whole message is an error we have to manually copy the stack into
    // metadata. Errors dont have enumerable properties so they don't
    // destructure.
    if (stack) metadata.stack = stack;
    this.common.log(info[LEVEL] || level, message, metadata || {}, callback);
  }
}

// LOGGING_TRACE_KEY is Cloud Logging specific and has the format:
// logging.googleapis.com/trace
// For more information, see: https://cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry#FIELDS.trace
export const LOGGING_TRACE_KEY = COMMON_TRACE_KEY;

// LOGGING_SPAN_KEY is Cloud Logging specific and has the format:
// logging.googleapis.com/spanId
// For more information, see: https://cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry#FIELDS.span_id
export const LOGGING_SPAN_KEY = COMMON_SPAN_KEY;

// LOGGING_SAMPLED_KEY is Cloud Logging specific and has the format:
// logging.googleapis.com/trace_sampled
// The value of this field must be either true or false. For more information,
// see traceSampled on the LogEntry page:	https://cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry#FIELDS.trace_sampled
export const LOGGING_SAMPLED_KEY = COMMON_SAMPLED_KEY;
