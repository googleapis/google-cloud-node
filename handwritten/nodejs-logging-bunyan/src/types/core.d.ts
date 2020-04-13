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

export interface Options {
  /**
   * The name of the log that will receive messages written to this bunyan
   * stream. Default: `bunyan_Log`.
   */
  logName?: string;
  /**
   * The monitored resource that the log stream corresponds to. On Google Cloud
   * Platform, this is detected automatically, but you may optionally specify a
   * specific monitored resource. For more information, see the
   * [official documentation]{@link https://cloud.google.com/logging/docs/api/reference/rest/v2/MonitoredResource}
   */
  resource?: MonitoredResource;
  /**
   * For logged errors, we provide this as the service context. For more
   * information see [this guide]{@link https://cloud.google.com/error-reporting/docs/formatting-error-messages}
   * and the [official documentation]{@link https://cloud.google.com/error-reporting/reference/rest/v1beta1/ServiceContext}.
   */
  serviceContext?: ServiceContext;
  /**
   * The project ID from the Google Cloud
   *     Console, e.g. 'grape-spaceship-123'. We will also check the environment
   *     variable `GCLOUD_PROJECT` for your project ID. If your app is running in
   *     an environment which supports {@link https://cloud.google.com/docs/authentication/production#providing_credentials_to_your_application Application Default Credentials},
   *     your project ID will be detected automatically.
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
  /**
   * The host name of the service to send requests.
   * Defaults to `logging.googleapis.com`.
   */
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

export interface StackdriverLog {
  critical: (
    entry: StackdriverEntry | StackdriverEntry[],
    options?: {},
    callback?: (err: Error, apiResponse: {}) => void
  ) => Promise<LogWriteResponse>;
  debug: (
    entry: StackdriverEntry | StackdriverEntry[],
    options?: {},
    callback?: (err: Error, apiResponse: {}) => void
  ) => Promise<LogWriteResponse>;
  emergency: (
    entry: StackdriverEntry | StackdriverEntry[],
    options?: {},
    callback?: (err: Error, apiResponse: {}) => void
  ) => Promise<LogWriteResponse>;
  error: (
    entry: StackdriverEntry | StackdriverEntry[],
    options?: {},
    callback?: (err: Error, apiResponse: {}) => void
  ) => Promise<LogWriteResponse>;
  info: (
    entry: StackdriverEntry | StackdriverEntry[],
    options?: {},
    callback?: (err: Error, apiResponse: {}) => void
  ) => Promise<LogWriteResponse>;
  notice: (
    entry: StackdriverEntry | StackdriverEntry[],
    options?: {},
    callback?: (err: Error, apiResponse: {}) => void
  ) => Promise<LogWriteResponse>;
  warning: (
    entry: StackdriverEntry | StackdriverEntry[],
    options?: {},
    callback?: (err: Error, apiResponse: {}) => void
  ) => Promise<LogWriteResponse>;
  write: (
    entry: StackdriverEntry | StackdriverEntry[],
    options?: {},
    callback?: (err: Error, apiResponse: {}) => void
  ) => Promise<LogWriteResponse>;
  alert: (
    entry: StackdriverEntry | StackdriverEntry[],
    options?: {},
    callback?: (err: Error, apiResponse: {}) => void
  ) => Promise<LogWriteResponse>;
  entry: (metadata: {}, data: {} | string) => StackdriverEntry;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  logging: any;
}

export interface Credentials {
  client_email?: string;
  private_key?: string;
}

export interface StackdriverEntryMetadata {
  resource?: MonitoredResource;
  timestamp?: Date;
  severity?: string; // figure out the correct type later
  httpRequest?: HttpRequest;
  labels?: {};
  trace?: {};
}

export interface StackdriverLog {
  critical: (
    entry: StackdriverEntry | StackdriverEntry[],
    options?: {},
    callback?: (err: Error, apiResponse: {}) => void
  ) => Promise<LogWriteResponse>;
  debug: (
    entry: StackdriverEntry | StackdriverEntry[],
    options?: {},
    callback?: (err: Error, apiResponse: {}) => void
  ) => Promise<LogWriteResponse>;
  emergency: (
    entry: StackdriverEntry | StackdriverEntry[],
    options?: {},
    callback?: (err: Error, apiResponse: {}) => void
  ) => Promise<LogWriteResponse>;
  error: (
    entry: StackdriverEntry | StackdriverEntry[],
    options?: {},
    callback?: (err: Error, apiResponse: {}) => void
  ) => Promise<LogWriteResponse>;
  info: (
    entry: StackdriverEntry | StackdriverEntry[],
    options?: {},
    callback?: (err: Error, apiResponse: {}) => void
  ) => Promise<LogWriteResponse>;
  notice: (
    entry: StackdriverEntry | StackdriverEntry[],
    options?: {},
    callback?: (err: Error, apiResponse: {}) => void
  ) => Promise<LogWriteResponse>;
  warning: (
    entry: StackdriverEntry | StackdriverEntry[],
    options?: {},
    callback?: (err: Error, apiResponse: {}) => void
  ) => Promise<LogWriteResponse>;
  write: (
    entry: StackdriverEntry | StackdriverEntry[],
    options?: {},
    callback?: (err: Error, apiResponse: {}) => void
  ) => Promise<LogWriteResponse>;
  alert: (
    entry: StackdriverEntry | StackdriverEntry[],
    options?: {},
    callback?: (err: Error, apiResponse: {}) => void
  ) => Promise<LogWriteResponse>;
  entry: (metadata: {}, data: {} | string) => StackdriverEntry;
}

export interface StackdriverLogging {
  Entry?: StackdriverEntry;
  Log?: StackdriverLog;
  Logging?: StackdriverLogging;
  entry?: (
    resource?: MonitoredResource,
    data?: {message: string} | string
  ) => StackdriverEntry;
  // define additional properties and methods.
}

export interface StackdriverEntry {
  constructor: (
    metadata?: StackdriverEntryMetadata,
    data?: {message: string} | string
  ) => StackdriverEntry;
  data?: StackdriverData | string;
  metadata?: StackdriverEntryMetadata;
}

export interface StackdriverData {
  serviceContext?: ServiceContext;
  message?: string;
  metadata?: Metadata;
  pid?: string;
  test?: {circular?: string};
}

export interface Metadata {
  stack?: string;
  httpRequest?: HttpRequest;
}

type LogWriteResponse = {}[];

export interface HttpRequest {
  requestMethod?: string;
  requestUrl?: string;
  requestSize?: number;
  status?: number;
  responseSize?: number;
  userAgent?: string;
  remoteIp?: string;
  serverIp?: string;
  referer?: string;
  latency?: string | {seconds: number; nanos: number};
  cacheLookup?: boolean;
  cacheHit?: boolean;
  cacheValidatedWithOriginServer?: boolean;
  cacheFillBytes?: number;
  protocol?: string;
}

export interface BunyanLogRecord {
  message?: string;
  msg?: string;
  err?: Error;
  serviceContext?: ServiceContext;
  level?: string;
  time?: Date;
  httpRequest?: HttpRequest;
  labels?: {};
  // And arbitrary other properties.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

export type LogLevel =
  | 'trace'
  | 'debug'
  | 'info'
  | 'warn'
  | 'error'
  | 'fatal'
  | number;

export interface StreamResponse {
  level: LogLevel;
  type: string;
  stream: NodeJS.WritableStream;
}
