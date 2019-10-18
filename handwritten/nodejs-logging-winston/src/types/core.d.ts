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

import * as TransportStream from 'winston-transport';
import {GoogleAuth} from 'google-auth-library';


export interface Options {
  /**
   * The default log level. Winston will filter messages with a severity lower
   * than this.
   */
  level?: string;
  /**
   * Custom logging levels as supported by winston. This list is used to
   * translate your log level to the Stackdriver Logging level. Each property
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
  /**
   * The project ID from the Google Cloud Console, e.g. 'grape-spaceship-123'.
   * We will also check the environment variable `GCLOUD_PROJECT` for your
   * project ID. If your app is running in an environment which supports {@link
   * https://cloud.google.com/docs/authentication/production#providing_credentials_to_your_application
   * Application Default Credentials}, your project ID will be detected
   * automatically.
   */
  projectId?: string;
  /**
   * Full path to the a .json, .pem, or .p12 key downloaded from the Google
   * Cloud Console. If you provide a path to a JSON file, the `projectId` option
   * above is not necessary. NOTE: .pem and .p12 require you to specify the
   * `email` option as well.
   */
  keyFilename?: string;
  /**
   * Account email address. Required when using a .pem or .p12 keyFilename.
   */
  email?: string;
  /**
   * Credentials object.
   */
  credentials?: Credentials;
  /**
   * Automatically retry requests if the response is related to rate limits or
   * certain intermittent server errors. We will exponentially backoff
   * subsequent requests by default.
   */
  autoRetry?: boolean;
  /**
   * Maximum number of automatic retries attempted before returning the error.
   */
  maxRetries?: number;
  /**
   * Custom promise module to use instead of native Promises.
   */
  // TODO: address the correct type of promise.
  promise?: {};

  scopes?: string[]|string;

  logname?: string;

  prefix?: string;

  labels?: {[key: string]: string};

  apiEndpoint?: string;

  // An attempt will be made to truncate messages larger than maxEntrySize.
  maxEntrySize?: number;
}

export interface MonitoredResource {
  type?: string;
  labels?: {[key: string]: string};
}

export interface ServiceContext {
  /**
   * An identifier of the service, such as the name of the executable, job, or
   * Google App Engine service name.
   */
  service?: string;
  /**
   * Represents the version of the service.
   */
  version?: string;
}

export interface Credentials {
  client_email: string;
  private_key: string;
}

export interface StackdriverData {
  serviceContext?: ServiceContext;
  message?: string;
  metadata?: Metadata;
}

export interface StackdriverEntryMetadata {
  resource?: MonitoredResource;
  httpRequest?: HttpRequest;
  labels?: {};
  trace?: {};
  timestamp?: Date;
  logName?: string;
}

export enum STACKDRIVER_LOGGING_LEVELS {
  emergency,
  alert,
  critical,
  error,
  warning,
  notice,
  info,
  debug
}

export type StackdriverLoggingLevelNames = keyof typeof STACKDRIVER_LOGGING_LEVELS;

// Mapped types are only supported in type aliases and not in interfaces and
// classes.
type StackdriverLogFunctions = {
  [P in StackdriverLoggingLevelNames]:
      (entry: StackdriverEntry|StackdriverEntry[], options?: {},
       callback?: (err: Error, apiResponse: {}) => void) =>
          Promise<LogWriteResponse>;
};

interface StackdriverOtherFunctions {
  write:
      (entry: StackdriverEntry|StackdriverEntry[], options?: {},
       callback?:
           (err: Error, apiResponse: {}) => void) => Promise<LogWriteResponse>;
  entry: (metadata: {}, data: {}|string) => StackdriverEntry;
  logging: { auth: GoogleAuth };
}

export type StackdriverLog = StackdriverLogFunctions&StackdriverOtherFunctions;

export interface StackdriverLogging {
  Entry?: StackdriverEntry;
  Log?: StackdriverLog;
  Logging?: StackdriverLogging;
  entry?:
      (resource?: MonitoredResource,
       data?: {message: string}|string) => StackdriverEntry;
  // define additional properties and methods.
}

export interface Metadata {
  stack?: string;
  httpRequest?: HttpRequest;
  labels?: {};
  // And arbitrary other properties.
  // tslint:disable-next-line:no-any
  [key: string]: any;
}

export interface StackdriverEntry {
  constructor:
      (metadata?: StackdriverEntryMetadata,
       data?: {message: string}|string) => StackdriverEntry;
  data?: {message: string}|string;
  metadata?: StackdriverEntryMetadata;
  jsonPayload?:{[key: string]: any};
}
type LogWriteResponse = Array<{}>;

export interface HttpRequest {
  requestMethod: string;
  requestUrl: string;
  requestSize: string;
  status: number;
  responseSize: string;
  userAgent: string;
  remoteIp: string;
  serverIp: string;
  referer: string;
  latency: string;
  cacheLookup: boolean;
  cacheHit: boolean;
  cacheValidatedWithOriginServer: boolean;
  cacheFillBytes: string;
  protocol: string;
}

export type Winston3LogArg = {
  /**
   * the logging message
   */
  message: string,
  /**
   * the log level defined in NPM_LEVEL_NAME_TO_CODE
   */
  level: string,
  /**
   * the stack for an error
   */
  stack?: string,
  /**
   * not used but should not be passed through to common
   */
  splat?: {},
  /**
   * set httpRequest to a http.clientRequest object to log it
   */
  httpRequest?: HttpRequest, labels: {}
}&{[key: string]: string | {}};


export interface Logger extends TransportStream {
  new(options?: Options):any;
  LOGGING_TRACE_KEY:string;
}
