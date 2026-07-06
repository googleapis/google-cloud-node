/*!
 * Copyright 2015 Google Inc. All Rights Reserved.
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

import {callbackifyAll} from '@google-cloud/promisify';
import * as dotProp from 'dot-prop';
import * as extend from 'extend';
import {CallOptions} from 'google-gax';
import {GetEntriesCallback, GetEntriesResponse, Logging} from '.';
import {Entry, EntryJson, LogEntry} from './entry';
import {populateInstrumentationInfo} from './utils/instrumentation';
import {
  LogSeverityFunctions,
  assignSeverityToEntries,
  snakecaseKeys,
  formatLogName,
  WriteOptions as CommonOptions,
} from './utils/log-common';

export interface WriteOptions extends CommonOptions {
  dryRun?: boolean;
  gaxOptions?: CallOptions;
  partialSuccess?: boolean;
}

export interface GetEntriesRequest {
  autoPaginate?: boolean;
  filter?: string;
  gaxOptions?: CallOptions;
  log?: string;
  maxApiCalls?: number;
  maxResults?: number;
  orderBy?: string;
  pageSize?: number;
  pageToken?: string;
  resourceNames?: string[] | string;
}

export interface TailEntriesRequest {
  resourceNames?: string[] | string;
  filter?: string;
  bufferWindow?: number;
  log?: string;
  gaxOptions?: CallOptions;
}

export interface LogOptions {
  removeCircular?: boolean;
  maxEntrySize?: number; // see: https://cloud.google.com/logging/quotas
  jsonFieldsToTruncate?: string[];
  defaultWriteDeleteCallback?: ApiResponseCallback;
  partialSuccess?: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Metadata = any;
export type ApiResponse = [Metadata];
export interface ApiResponseCallback {
  (err: Error | null, apiResponse?: Metadata): void;
}
export type DeleteCallback = ApiResponseCallback;

/**
 * A log is a named collection of entries, each entry representing a timestamped
 * event. Logs can be produced by Google Cloud Platform services, by third-party
 * services, or by your applications. For example, the log `apache-access` is
 * produced by the Apache Web Server, but the log
 * `compute.googleapis.com/activity_log` is produced by Google Compute Engine.
 *
 * See {@link https://cloud.google.com/logging/docs/basic-concepts#logs|Introduction to Logs}
 *
 * @class
 *
 * @param {Logging} logging {@link Logging} instance.
 * @param {string} name Name of the log.
 * @param {object} [options] Configuration object.
 * @param {boolean} [options.removeCircular] Replace circular references in
 *     logged objects with a string value, `[Circular]`. (Default: false)
 * @param {number} [options.maxEntrySize] A max entry size
 * @param {string[]} [options.jsonFieldsToTruncate] A list of JSON properties at the given full path to be truncated.
 *     Received values will be prepended to predefined list in the order received and duplicates discarded.
 * @param {ApiResponseCallback} [options.defaultWriteDeleteCallback] A default global callback to be used for {@link Log#write}
 *     and {@link Log#delete} APIs when {@link ApiResponseCallback} callback was not supplied by caller in function parameters.
 *     Note that {@link LogOptions#defaultWriteDeleteCallback} is useful when {@link Log#write} and {@link Log#delete} APIs are called
 *     without `await` and without callback added explicitly to every call - this way {@link LogOptions#defaultWriteDeleteCallback}
 *     can serve as global callback handler, which for example could be used to catch all errors and eliminate crashes.
 * @param {boolean} [options.partialSuccess] Global flag indicating Whether a batch's valid entries should be written even if
 *     some other entry failed due to errors. Default is true.
 *     See {@link https://cloud.google.com/logging/docs/reference/v2/rest/v2/entries/write#body.request_body.FIELDS.partial_success|partialSuccess} for more info.
 * @example
 * ```
 * import {Logging} from '@google-cloud/logging';
 * import {LogOptions} from '@google-cloud/logging/build/src/log';
 * const options: LogOptions = {
 *   maxEntrySize: 256,
 *   jsonFieldsToTruncate: [
 *     'jsonPayload.fields.metadata.structValue.fields.custom.stringValue',
 *   ],
 *   defaultWriteDeleteCallback: (err: any) => {
 *     if (err) {
 *       console.log('Error: ' + err);
 *     }
 *   },
 * };
 * const logging = new Logging();
 * const log = logging.log('syslog', options);
 * ```
 */
class Log implements LogSeverityFunctions {
  formattedName_: string;
  removeCircular_: boolean;
  maxEntrySize?: number;
  logging: Logging;
  name: string;
  jsonFieldsToTruncate: string[];
  defaultWriteDeleteCallback?: ApiResponseCallback;
  partialSuccess: boolean;

  constructor(logging: Logging, name: string, options?: LogOptions) {
    options = options || {};
    this.formattedName_ = formatLogName(logging.projectId, name);
    this.removeCircular_ = options.removeCircular === true;
    this.maxEntrySize = options.maxEntrySize;
    this.logging = logging;
    /**
     * @name Log#name
     * @type {string}
     */
    this.name = this.formattedName_.split('/').pop()!;
    this.jsonFieldsToTruncate = [
      // Winston:
      'jsonPayload.fields.metadata.structValue.fields.stack.stringValue',
      // Bunyan:
      'jsonPayload.fields.msg.stringValue',
      'jsonPayload.fields.err.structValue.fields.stack.stringValue',
      'jsonPayload.fields.err.structValue.fields.message.stringValue',
      // All:
      'jsonPayload.fields.message.stringValue',
    ];

    // Prepend all custom fields to be truncated to a list with defaults, thus
    // custom fields will be truncated first. Make sure to filter out fields
    // which are not in EntryJson.jsonPayload
    if (
      options.jsonFieldsToTruncate !== null &&
      options.jsonFieldsToTruncate !== undefined
    ) {
      const filteredList = options.jsonFieldsToTruncate.filter(
        str =>
          str !== null &&
          !this.jsonFieldsToTruncate.includes(str) &&
          str.startsWith('jsonPayload')
      );
      const uniqueSet = new Set(filteredList);
      this.jsonFieldsToTruncate = Array.from(uniqueSet).concat(
        this.jsonFieldsToTruncate
      );
    }

    /**
     * The default callback for {@link Log#write} and {@link Log#delete} APIs
     * is going to be used only when {@link LogOptions#defaultWriteDeleteCallback}
     * was set by user and only for APIs which does not accept a callback as parameter
     */
    this.defaultWriteDeleteCallback = options.defaultWriteDeleteCallback;

    /**
    Turning partialSuccess by default to be true if not provided in options. This should improve
    overall logging reliability since only oversized entries will be dropped
    from request. See {@link https://cloud.google.com/logging/quotas#log-limits} for more info
     */
    this.partialSuccess = options.partialSuccess ?? true;
  }

  /**
   * Write a log entry with a severity of "ALERT".
   *
   * This is a simple wrapper around {@link Log.write|Log.write}. All arguments are
   * the same as documented there.
   *
   * @param {Entry|Entry[]} entry A log entry, or array of entries, to write.
   * @param {?WriteOptions} [options] Write options
   * @param {LogWriteCallback} [callback] Callback function.
   * @returns {Promise<LogWriteResponse>}
   * @example
   * ```
   * const {Logging} = require('@google-cloud/logging');
   * const logging = new Logging();
   * const log = logging.log('my-log');
   *
   * const entry = log.entry('gce_instance', {
   *   instance: 'my_instance'
   * });
   *
   * log.alert(entry, (err, apiResponse) => {});
   *
   * //-
   * // If the callback is omitted, we'll return a Promise.
   * //-
   * log.alert(entry).then(data => {
   *   const apiResponse = data[0];
   * });
   * ```
   */
  alert(entry: Entry | Entry[], options?: WriteOptions): Promise<ApiResponse>;
  alert(
    entry: Entry | Entry[],
    options: WriteOptions,
    callback: ApiResponseCallback
  ): void;
  alert(entry: Entry | Entry[], callback: ApiResponseCallback): void;
  alert(
    entry: Entry | Entry[],
    options?: WriteOptions | ApiResponseCallback
  ): Promise<ApiResponse> {
    return this.write(
      assignSeverityToEntries(entry, 'ALERT'),
      options! as WriteOptions
    );
  }

  /**
   * Write a log entry with a severity of "CRITICAL".
   *
   * This is a simple wrapper around {@link Log.write|Log.write}. All arguments are
   * the same as documented there.
   *
   * @param {Entry|Entry[]} entry A log entry, or array of entries, to write.
   * @param {?WriteOptions} [options] Write options
   * @param {LogWriteCallback} [callback] Callback function.
   * @returns {Promise<LogWriteResponse>}
   * @example
   * ```
   * const {Logging} = require('@google-cloud/logging');
   * const logging = new Logging();
   * const log = logging.log('my-log');
   *
   * const entry = log.entry('gce_instance', {
   *   instance: 'my_instance'
   * });
   *
   * log.critical(entry, (err, apiResponse) => {});
   *
   * //-
   * // If the callback is omitted, we'll return a Promise.
   * //-
   * log.critical(entry).then(data => {
   *   const apiResponse = data[0];
   * });
   * ```
   */
  critical(
    entry: Entry | Entry[],
    options?: WriteOptions
  ): Promise<ApiResponse>;
  critical(
    entry: Entry | Entry[],
    options: WriteOptions,
    callback: ApiResponseCallback
  ): void;
  critical(entry: Entry | Entry[], callback: ApiResponseCallback): void;
  critical(
    entry: Entry | Entry[],
    options?: WriteOptions | ApiResponseCallback
  ): Promise<ApiResponse> {
    return this.write(
      assignSeverityToEntries(entry, 'CRITICAL'),
      options! as WriteOptions
    );
  }

  /**
   * Write a log entry with a severity of "DEBUG".
   *
   * This is a simple wrapper around {@link Log.write|Log.write}. All arguments are
   * the same as documented there.
   *
   * @param {Entry|Entry[]} entry A log entry, or array of entries, to write.
   * @param {?WriteOptions} [options] Write options
   * @param {LogWriteCallback} [callback] Callback function.
   * @returns {Promise<LogWriteResponse>}
   * @example
   * ```
   * const {Logging} = require('@google-cloud/logging');
   * const logging = new Logging();
   * const log = logging.log('my-log');
   *
   * const entry = log.entry('gce_instance', {
   *   instance: 'my_instance'
   * });
   *
   * log.debug(entry, (err, apiResponse) => {});
   *
   * //-
   * // If the callback is omitted, we'll return a Promise.
   * //-
   * log.debug(entry).then(data => {
   *   const apiResponse = data[0];
   * });
   * ```
   */
  debug(entry: Entry | Entry[], options?: WriteOptions): Promise<ApiResponse>;
  debug(
    entry: Entry | Entry[],
    options: WriteOptions,
    callback: ApiResponseCallback
  ): void;
  debug(entry: Entry | Entry[], callback: ApiResponseCallback): void;
  debug(
    entry: Entry | Entry[],
    options?: WriteOptions | ApiResponseCallback
  ): Promise<ApiResponse> {
    return this.write(
      assignSeverityToEntries(entry, 'DEBUG'),
      options! as WriteOptions
    );
  }

  /**
   * @typedef {array} DeleteLogResponse
   * @property {object} 0 The full API response.
   */
  /**
   * @callback DeleteLogCallback
   * @param {?Error} err Request error, if any.
   * @param {object} apiResponse The full API response.
   */
  /**
   * Delete the log.
   *
   * See {@link https://cloud.google.com/logging/docs/reference/v2/rest/v2/projects.logs/delete|projects.logs.delete API Documentation}
   *
   * @param {object} [gaxOptions] Request configuration options, outlined
   *     here: https://googleapis.github.io/gax-nodejs/global.html#CallOptions.
   * @param {DeleteLogCallback} [callback] Callback function.
   * @returns {Promise<DeleteLogResponse>}
   *
   * @example
   * ```
   * const {Logging} = require('@google-cloud/logging');
   * const logging = new Logging();
   * const log = logging.log('my-log');
   *
   * log.delete((err, apiResponse) => {
   *   if (!err) {
   *     // The log was deleted.
   *   }
   * });
   *
   * //-
   * // If the callback is omitted, we'll return a Promise.
   * //-
   * log.delete().then(data => {
   *   const apiResponse = data[0];
   * });
   *
   * ```
   * @example <caption>include:samples/logs.js</caption>
   * region_tag:logging_delete_log
   * Another example:
   */
  delete(gaxOptions?: CallOptions): Promise<ApiResponse>;
  delete(gaxOptions: CallOptions, callback: DeleteCallback): void;
  delete(callback: DeleteCallback): void;
  async delete(
    gaxOptions?: CallOptions | DeleteCallback
  ): Promise<ApiResponse> {
    const projectId = await this.logging.auth.getProjectId();
    this.formattedName_ = formatLogName(projectId, this.name);
    const reqOpts = {
      logName: this.formattedName_,
    };
    return this.logging.loggingService.deleteLog(
      reqOpts,
      gaxOptions! as CallOptions,
      this.defaultWriteDeleteCallback
    );
  }

  /**
   * Write a log entry with a severity of "EMERGENCY".
   *
   * This is a simple wrapper around {@link Log.write|Log.write}. All arguments are
   * the same as documented there.
   *
   * @param {Entry|Entry[]} entry A log entry, or array of entries, to write.
   * @param {?WriteOptions} [options] Write options
   * @param {LogWriteCallback} [callback] Callback function.
   * @returns {Promise<LogWriteResponse>}
   * @example
   * ```
   * const {Logging} = require('@google-cloud/logging');
   * const logging = new Logging();
   * const log = logging.log('my-log');
   *
   * const entry = log.entry('gce_instance', {
   *   instance: 'my_instance'
   * });
   *
   * log.emergency(entry, (err, apiResponse) => {});
   *
   * //-
   * // If the callback is omitted, we'll return a Promise.
   * //-
   * log.emergency(entry).then(data => {
   *   const apiResponse = data[0];
   * });
   * ```
   */
  emergency(
    entry: Entry | Entry[],
    options: WriteOptions,
    callback: ApiResponseCallback
  ): void;
  emergency(entry: Entry | Entry[], callback: ApiResponseCallback): void;
  emergency(
    entry: Entry | Entry[],
    options?: WriteOptions | ApiResponseCallback
  ): Promise<ApiResponse> {
    return this.write(
      assignSeverityToEntries(entry, 'EMERGENCY'),
      options as WriteOptions
    );
  }

  /**
   * Create an entry object for this log.
   *
   * Using this method will not itself make any API requests. You will use
   * the object returned in other API calls, such as
   * {@link Log#write}.
   *
   * Note, {@link https://cloud.google.com/logging/quotas|Cloud Logging Quotas and limits}
   * dictates that the maximum log entry size, including all
   * [LogEntry Resource properties]{@link https://cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry},
   * cannot exceed _approximately_ 256 KB.
   *
   * See {@link https://cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry|LogEntry JSON representation}
   *
   * @param {?object} metadata See a
   *     [LogEntry
   * Resource](https://cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry).
   * @param {object|string} data The data to use as the value for this log
   *     entry.
   * @returns {Entry}
   *
   * @example
   * ```
   * const {Logging} = require('@google-cloud/logging');
   * const logging = new Logging();
   * const log = logging.log('my-log');
   *
   * const metadata = {
   *   resource: {
   *     type: 'gce_instance',
   *     labels: {
   *       zone: 'global',
   *       instance_id: '3'
   *     }
   *   }
   * };
   *
   * const entry = log.entry(metadata, {
   *   delegate: 'my_username'
   * });
   *
   * entry.toJSON();
   * // {
   * //   logName: 'projects/grape-spaceship-123/logs/syslog',
   * //   resource: {
   * //     type: 'gce_instance',
   * //     labels: {
   * //       zone: 'global',
   * //       instance_id: '3'
   * //     }
   * //   },
   * //   jsonPayload: {
   * //     delegate: 'my_username'
   * //   }
   * // }
   * ```
   */
  entry(metadata?: LogEntry): Entry;
  entry(data?: string | {}): Entry;
  entry(metadata?: LogEntry, data?: string | {}): Entry;
  entry(metadataOrData?: LogEntry | string | {}, data?: string | {}) {
    let metadata: LogEntry;
    if (
      !data &&
      metadataOrData !== null &&
      Object.prototype.hasOwnProperty.call(metadataOrData, 'httpRequest')
    ) {
      // If user logs entry(metadata.httpRequest)
      metadata = metadataOrData as LogEntry;
      data = {};
    } else if (!data) {
      // If user logs entry(message)
      data = metadataOrData as string | {};
      metadata = {};
    } else {
      // If user logs entry(metadata, message)
      metadata = metadataOrData as LogEntry;
    }
    return this.logging.entry(metadata, data);
  }

  /**
   * Write a log entry with a severity of "ERROR".
   *
   * This is a simple wrapper around {@link Log.write|Log.write}. All arguments are
   * the same as documented there.
   *
   * @param {Entry|Entry[]} entry A log entry, or array of entries, to write.
   * @param {?WriteOptions} [options] Write options
   * @param {LogWriteCallback} [callback] Callback function.
   * @returns {Promise<LogWriteResponse>}
   * @example
   * ```
   * const {Logging} = require('@google-cloud/logging');
   * const logging = new Logging();
   * const log = logging.log('my-log');
   *
   * const entry = log.entry('gce_instance', {
   *   instance: 'my_instance'
   * });
   *
   * log.error(entry, (err, apiResponse) => {});
   *
   * //-
   * // If the callback is omitted, we'll return a Promise.
   * //-
   * log.error(entry).then(data => {
   *   const apiResponse = data[0];
   * });
   * ```
   */
  error(entry: Entry | Entry[], options?: WriteOptions): Promise<ApiResponse>;
  error(
    entry: Entry | Entry[],
    options: WriteOptions,
    callback: ApiResponseCallback
  ): void;
  error(entry: Entry | Entry[], callback: ApiResponseCallback): void;
  error(
    entry: Entry | Entry[],
    options?: WriteOptions | ApiResponseCallback
  ): Promise<ApiResponse> {
    return this.write(
      assignSeverityToEntries(entry, 'ERROR'),
      options! as WriteOptions
    );
  }

  /**
   * This method is a wrapper around {module:logging#getEntries}, but with a
   * filter specified to only return entries from this log.
   *
   * See {@link https://cloud.google.com/logging/docs/reference/v2/rest/v2/entries/list|entries.list API Documentation}
   *
   * @param {GetEntriesRequest} [query] Query object for listing entries.
   * @param {GetEntriesCallback} [callback] Callback function.
   * @returns {Promise<GetEntriesResponse>}
   *
   * @example
   * ```
   * const {Logging} = require('@google-cloud/logging');
   * const logging = new Logging();
   * const log = logging.log('my-log');
   *
   * log.getEntries((err, entries) => {
   *   // `entries` is an array of Cloud Logging entry objects.
   *   // See the `data` property to read the data from the entry.
   * });
   *
   * //-
   * // To control how many API requests are made and page through the results
   * // manually, set `autoPaginate` to `false`.
   * //-
   * function callback(err, entries, nextQuery, apiResponse) {
   *   if (nextQuery) {
   *     // More results exist.
   *     log.getEntries(nextQuery, callback);
   *   }
   * }
   *
   * log.getEntries({
   *   autoPaginate: false
   * }, callback);
   *
   * //-
   * // If the callback is omitted, we'll return a Promise.
   * //-
   * log.getEntries().then(data => {
   *   const entries = data[0];
   * });
   * ```
   */
  getEntries(options?: GetEntriesRequest): Promise<GetEntriesResponse>;
  getEntries(callback: GetEntriesCallback): void;
  getEntries(options: GetEntriesRequest, callback: GetEntriesCallback): void;
  async getEntries(
    opts?: GetEntriesRequest | GetEntriesCallback
  ): Promise<GetEntriesResponse> {
    const options = extend({}, opts as GetEntriesRequest);
    const projectId = await this.logging.auth.getProjectId();
    this.formattedName_ = formatLogName(projectId, this.name);
    if (options.filter && !options.filter.includes('logName=')) {
      options.filter = `(${options.filter}) AND logName="${this.formattedName_}"`;
    } else if (!options.filter) {
      options.filter = `logName="${this.formattedName_}"`;
    }
    return this.logging.getEntries(options);
  }

  /**
   * This method is a wrapper around {module:logging#getEntriesStream}, but with
   * a filter specified to only return {module:logging/entry} objects from this
   * log.
   *
   * @method Log#getEntriesStream
   * @param {GetEntriesRequest} [query] Query object for listing entries.
   * @returns {ReadableStream} A readable stream that emits {@link Entry}
   *     instances.
   *
   * @example
   * ```
   * const {Logging} = require('@google-cloud/logging');
   * const logging = new Logging();
   * const log = logging.log('my-log');
   *
   * log.getEntriesStream()
   *   .on('error', console.error)
   *   .on('data', entry => {
   *     // `entry` is a Cloud Logging entry object.
   *     // See the `data` property to read the data from the entry.
   *   })
   *   .on('end', function() {
   *     // All entries retrieved.
   *   });
   *
   * //-
   * // If you anticipate many results, you can end a stream early to prevent
   * // unnecessary processing and API requests.
   * //-
   * log.getEntriesStream()
   *   .on('data', function(entry) {
   *     this.end();
   *   });
   * ```
   */
  getEntriesStream(options: GetEntriesRequest) {
    options = extend(
      {
        log: this.name,
      },
      options
    );
    return this.logging.getEntriesStream(options);
  }

  /**
   * This method is a wrapper around {module:logging#tailEntries}, but with
   * a filter specified to only return {module:logging/entry} objects from this
   * log.
   *
   * @method Log#tailEntries
   * @param {TailEntriesRequest} [query] Query object for tailing entries.
   * @returns {DuplexStream} A duplex stream that emits TailEntriesResponses
   * containing an array of {@link Entry} instances.
   *
   * @example
   * ```
   * const {Logging} = require('@google-cloud/logging');
   * const logging = new Logging();
   * const log = logging.log('my-log');
   *
   * log.tailEntries()
   *   .on('error', console.error)
   *   .on('data', resp => {
   *     console.log(resp.entries);
   *     console.log(resp.suppressionInfo);
   *   })
   *   .on('end', function() {
   *     // All entries retrieved.
   *   });
   *
   * //-
   * // If you anticipate many results, you can end a stream early to prevent
   * // unnecessary processing and API requests.
   * //-
   * log.tailEntries()
   *   .on('data', function(entry) {
   *     this.end();
   *   });
   * ```
   */
  tailEntries(options?: TailEntriesRequest) {
    options = extend(
      {
        log: this.name,
      },
      options
    );
    return this.logging.tailEntries(options);
  }

  /**
   * Write a log entry with a severity of "INFO".
   *
   * This is a simple wrapper around {@link Log.write|Log.write}. All arguments are
   * the same as documented there.
   *
   * @param {Entry|Entry[]} entry A log entry, or array of entries, to write.
   * @param {?WriteOptions} [options] Write options
   * @param {LogWriteCallback} [callback] Callback function.
   * @returns {Promise<LogWriteResponse>}
   * @example
   * ```
   * const {Logging} = require('@google-cloud/logging');
   * const logging = new Logging();
   * const log = logging.log('my-log');
   *
   * const entry = log.entry('gce_instance', {
   *   instance: 'my_instance'
   * });
   *
   * log.info(entry, (err, apiResponse) => {});
   *
   * //-
   * // If the callback is omitted, we'll return a Promise.
   * //-
   * log.info(entry).then(data => {
   *   const apiResponse = data[0];
   * });
   * ```
   */
  info(entry: Entry | Entry[], options?: WriteOptions): Promise<ApiResponse>;
  info(
    entry: Entry | Entry[],
    options: WriteOptions,
    callback: ApiResponseCallback
  ): void;
  info(entry: Entry | Entry[], callback: ApiResponseCallback): void;
  info(
    entry: Entry | Entry[],
    options?: WriteOptions | ApiResponseCallback
  ): Promise<ApiResponse> {
    return this.write(
      assignSeverityToEntries(entry, 'INFO'),
      options! as WriteOptions
    );
  }

  /**
   * Write a log entry with a severity of "NOTICE".
   *
   * This is a simple wrapper around {@link Log.write|Log.write}. All arguments are
   * the same as documented there.
   *
   * @param {Entry|Entry[]} entry A log entry, or array of entries, to write.
   * @param {?WriteOptions} [options] Write options
   * @param {LogWriteCallback} [callback] Callback function.
   * @returns {Promise<LogWriteResponse>}
   * @example
   * ```
   * const {Logging} = require('@google-cloud/logging');
   * const logging = new Logging();
   * const log = logging.log('my-log');
   *
   * const entry = log.entry('gce_instance', {
   *   instance: 'my_instance'
   * });
   *
   * log.notice(entry, (err, apiResponse) => {});
   *
   * //-
   * // If the callback is omitted, we'll return a Promise.
   * //-
   * log.notice(entry).then(data => {
   *   const apiResponse = data[0];
   * });
   * ```
   */
  notice(entry: Entry | Entry[], options?: WriteOptions): Promise<ApiResponse>;
  notice(
    entry: Entry | Entry[],
    options: WriteOptions,
    callback: ApiResponseCallback
  ): void;
  notice(entry: Entry | Entry[], callback: ApiResponseCallback): void;
  notice(
    entry: Entry | Entry[],
    options?: WriteOptions | ApiResponseCallback
  ): Promise<ApiResponse> {
    return this.write(
      assignSeverityToEntries(entry, 'NOTICE'),
      options! as WriteOptions
    );
  }

  /**
   * Write a log entry with a severity of "WARNING".
   *
   * This is a simple wrapper around {@link Log.write|Log.write}. All arguments are
   * the same as documented there.
   *
   * @param {Entry|Entry[]} entry A log entry, or array of entries, to write.
   * @param {?WriteOptions} [options] Write options
   * @param {LogWriteCallback} [callback] Callback function.
   * @returns {Promise<LogWriteResponse>}
   * @example
   * ```
   * const {Logging} = require('@google-cloud/logging');
   * const logging = new Logging();
   * const log = logging.log('my-log');
   *
   * const entry = log.entry('gce_instance', {
   *   instance: 'my_instance'
   * });
   *
   * log.warning(entry, (err, apiResponse) => {});
   *
   * //-
   * // If the callback is omitted, we'll return a Promise.
   * //-
   * log.warning(entry).then(data => {
   *   const apiResponse = data[0];
   * });
   * ```
   */
  warning(entry: Entry | Entry[], options?: WriteOptions): Promise<ApiResponse>;
  warning(
    entry: Entry | Entry[],
    options: WriteOptions,
    callback: ApiResponseCallback
  ): void;
  warning(entry: Entry | Entry[], callback: ApiResponseCallback): void;
  warning(
    entry: Entry | Entry[],
    options?: WriteOptions | ApiResponseCallback
  ): Promise<ApiResponse> {
    return this.write(
      assignSeverityToEntries(entry, 'WARNING'),
      options as WriteOptions
    );
  }

  /**
   * @typedef {array} LogWriteResponse
   * @property {object} 0 The full API response.
   */
  /**
   * @callback LogWriteCallback
   * @param {?Error} err Request error, if any.
   * @param {object} apiResponse The full API response.
   */
  /**
   * Write options.
   *
   * @typedef {object} WriteOptions
   * @property {boolean} [dryRun] If true, the request should expect normal
   *     response, but the entries won't be persisted nor exported.
   * @property {object} gaxOptions Request configuration options, outlined here:
   *     https://googleapis.github.io/gax-nodejs/global.html#CallOptions.
   * @property {object[]} labels Labels to set on the log.
   * @property {boolean} [partialSuccess] Whether valid entries should be
   *     written even if some other entries fail due to INVALID_ARGUMENT
   *     or PERMISSION_DENIED errors.
   * @property {object} resource A default monitored resource for entries where
   *     one isn't specified.
   */
  /**
   * Write log entries to Cloud Logging.
   *
   * Note, {@link https://cloud.google.com/logging/quotas|Cloud Logging Quotas and limits}
   * dictates that the maximum cumulative size of all entries per write,
   * including all [LogEntry Resource properties]{@link https://cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry},
   * cannot exceed _approximately_ 10 MB.
   *
   * See {@link https://cloud.google.com/logging/docs/reference/v2/rest/v2/entries/write|entries.write API Documentation}
   *
   * @param {Entry|Entry[]} entry A log entry, or array of entries, to write.
   * @param {?WriteOptions} [options] Write options
   * @param {LogWriteCallback} [callback] Callback function.
   * @returns {Promise<LogWriteResponse>}
   *
   * @example
   * ```
   * const entry = log.entry('gce_instance', {
   *   instance: 'my_instance'
   * });
   *
   * log.write(entry, (err, apiResponse) => {
   *   if (!err) {
   *     // The log entry was written.
   *   }
   * });
   *
   * //-
   * // You may also pass multiple log entries to write.
   * //-
   * const secondEntry = log.entry('compute.googleapis.com', {
   *   user: 'my_username'
   * });
   *
   * log.write([
   *   entry,
   *   secondEntry
   * ], (err, apiResponse) => {
   *   if (!err) {
   *     // The log entries were written.
   *   }
   * });
   *
   * //-
   * // To save some steps, you can also pass in plain values as your entries.
   * // Note, however, that you must provide a configuration object to specify
   * // the resource.
   * //-
   * const entries = [
   *   {
   *     user: 'my_username'
   *   },
   *   {
   *     home: process.env.HOME
   *   }
   * ];
   *
   * const options = {
   *   resource: 'compute.googleapis.com'
   * };
   *
   * log.write(entries, options, (err, apiResponse) => {});
   *
   * //-
   * // If the callback is omitted, we'll return a Promise.
   * //-
   * log.write(entries).then(data => {
   *   const apiResponse = data[0];
   * });
   *
   * ```
   * @example <caption>include:samples/logs.js</caption>
   * region_tag:logging_write_log_entry
   * Another example:
   *
   * @example <caption>include:samples/logs.js</caption>
   * region_tag:logging_write_log_entry_advanced
   * Another example:
   */
  write(entry: Entry | Entry[], options?: WriteOptions): Promise<ApiResponse>;
  write(
    entry: Entry | Entry[],
    options: WriteOptions,
    callback: ApiResponseCallback
  ): void;
  write(entry: Entry | Entry[], callback: ApiResponseCallback): void;
  async write(
    entry: Entry | Entry[],
    opts?: WriteOptions | ApiResponseCallback
  ): Promise<ApiResponse> {
    const options = opts ? (opts as WriteOptions) : {};
    // Extract projectId & resource from Logging - inject & memoize if not.
    await this.logging.setProjectId();
    this.formattedName_ = formatLogName(this.logging.projectId, this.name);
    const resource = await this.getOrSetResource(options);
    // Extract & format additional context from individual entries. Make sure to add instrumentation info
    const info = populateInstrumentationInfo(entry);
    const decoratedEntries = this.decorateEntries(info[0]);
    // If instrumentation info was added or this.partialSuccess was set, make sure we set
    // partialSuccess in outgoing write request, so entire request will make it through and
    // only oversized entries will be dropped if any
    if (info[1] || (options.partialSuccess ?? this.partialSuccess)) {
      options.partialSuccess = true;
    }
    this.truncateEntries(decoratedEntries);
    // Clobber `labels` and `resource` fields with WriteOptions from the user.
    const reqOpts = extend(
      {
        logName: this.formattedName_,
        entries: decoratedEntries,
        resource,
      },
      options
    );
    delete reqOpts.gaxOptions;
    // Propagate maxRetries properly into writeLogEntries call
    if (!options.gaxOptions?.maxRetries && this.logging.options?.maxRetries) {
      options.gaxOptions = extend(
        {
          maxRetries: this.logging.options.maxRetries,
        },
        options.gaxOptions
      );
    }
    return this.logging.loggingService.writeLogEntries(
      reqOpts,
      options.gaxOptions,
      this.defaultWriteDeleteCallback
    );
  }

  /**
   * getOrSetResource looks for GCP service context first at the user
   * declaration level (snakecasing keys), then in the Logging instance,
   * before finally detecting a resource from the environment.
   * The resource is then memoized at the Logging instance level for future use.
   *
   * @param options
   * @private
   */
  private async getOrSetResource(options: WriteOptions) {
    if (options.resource) {
      if (options.resource.labels) snakecaseKeys(options.resource.labels);
      return options.resource;
    }
    await this.logging.setDetectedResource();
    return this.logging.detectedResource;
  }

  /**
   * All entries are passed through here in order be formatted and serialized.
   * User provided Entry values are formatted per LogEntry specifications.
   * Read more about the LogEntry format:
   * https://cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry
   *
   * @private
   *
   * @param {object[]} entries - Entry objects.
   * @returns {object[]} Serialized entries.
   * @throws if there is an error during serialization.
   */
  private decorateEntries(entries: Entry[]): EntryJson[] {
    return entries.map(entry => {
      if (!(entry instanceof Entry)) {
        entry = this.entry(entry);
      }
      return entry.toJSON(
        {
          removeCircular: this.removeCircular_,
        },
        this.logging.projectId
      );
    });
  }

  // TODO consider refactoring `truncateEntries` so that it does not mutate
  /**
   * Truncate log entries at maxEntrySize, so that error is not thrown, see:
   * https://cloud.google.com/logging/quotas
   *
   * @private
   *
   * @param {object|string} the JSON log entry.
   * @returns {object|string} truncated JSON log entry.
   */
  private truncateEntries(entries: EntryJson[]) {
    return entries.forEach(entry => {
      if (this.maxEntrySize === undefined) return;

      const payloadSize = JSON.stringify(entry).length;
      if (payloadSize < this.maxEntrySize) return;

      let delta = payloadSize - this.maxEntrySize;
      if (entry.textPayload) {
        entry.textPayload = entry.textPayload.slice(
          0,
          Math.max(entry.textPayload.length - delta, 0)
        );
      } else {
        for (const field of this.jsonFieldsToTruncate) {
          const msg: string = dotProp.get(entry, field, '');
          if (msg !== null && msg !== undefined && msg !== '') {
            dotProp.set(
              entry,
              field,
              msg.slice(0, Math.max(msg.length - delta, 0))
            );
            delta -= Math.min(msg.length, delta);
            if (delta <= 0) {
              break;
            }
          }
        }
      }
    });
  }

  // TODO: in a future breaking release, delete this extranenous function.
  /**
   * Return an array of log entries with the desired severity assigned.
   *
   * @private
   *
   * @param {object|object[]} entries - Log entries.
   * @param {string} severity - The desired severity level.
   */
  static assignSeverityToEntries_(
    entries: Entry | Entry[],
    severity: string
  ): Entry[] {
    return assignSeverityToEntries(entries, severity);
  }

  // TODO: in a future breaking release, delete this extranenous function.
  /**
   * Format the name of a log. A log's full name is in the format of
   * 'projects/{projectId}/logs/{logName}'.
   *
   * @private
   *
   * @returns {string}
   */
  static formatName_(projectId: string, name: string) {
    return formatLogName(projectId, name);
  }
}

/*! Developer Documentation
 *
 * All async methods (except for streams) will call a callback in the event
 * that a callback is provided .
 */
callbackifyAll(Log, {exclude: ['entry', 'getEntriesStream']});

/**
 * Reference to the {@link Log} class.
 * @name module:@google-cloud/logging.Log
 * @see Log
 */
export {Log};
