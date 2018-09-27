
import * as semver from 'semver';
import {LOGGING_TRACE_KEY as COMMON_TRACE_KEY} from './common';
import * as types from './types/core';


require('winston');
const winstonVersion = require('winston/package.json').version;

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
// This is a class.
// tslint:disable-next-line:variable-name
export const LoggingWinston: types.Logger = semver.lt(winstonVersion, '3.0.0') ?
    require('./winston2').LoggingWinston :
    require('./winston3').LoggingWinston;
// winstons are required instead of imported so they are not executed unless
// they're used.

export const LOGGING_TRACE_KEY = COMMON_TRACE_KEY;
