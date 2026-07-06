/*!
 * Copyright 2021 Google LLC
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

/**
 * This is a helper library for synchronously writing logs to any transport.
 */

import {Logging} from '.';
import {Entry, LABELS_KEY, LogEntry, StructuredJson} from './entry';
import {Writable} from 'stream';
import {populateInstrumentationInfo} from './utils/instrumentation';
import {
  LogSeverityFunctions,
  assignSeverityToEntries,
  snakecaseKeys,
  formatLogName,
  WriteOptions,
} from './utils/log-common';

export interface LogSyncOptions {
  // The flag indicating if "message" field should be used to store structured,
  // non-text data inside jsonPayload field. By default this value is true
  useMessageField?: boolean;
}

/**
 * A logSync is a named collection of entries in structured log format. In Cloud
 * Logging, structured logs refer to log entries that use the jsonPayload field
 * to add structure to their payloads. In most GCP environments, like GKE and
 * Cloud Functions, structured logs written to process.stdout are automatically
 * picked up and formatted by logging agents.
 *
 * Recommended for Serverless environment logging, especially where async log
 * calls made by the `Log` class can be dropped by the CPU.
 *
 * See {@link https://cloud.google.com/logging/docs/structured-logging|Structured Logging}
 *
 * @class
 *
 * @param {Logging} logging {@link Logging} instance.
 * @param {string} name Name of the logSync.
 * @param {Writable} [transport] transport A custom writable transport stream.
 *     Default: process.stdout.
 *
 * @example
 * ```
 * const {Logging} = require('@google-cloud/logging');
 * const logging = new Logging();
 * const log = logging.logSync('mylog');
 * ```
 */
class LogSync implements LogSeverityFunctions {
  formattedName_: string;
  logging: Logging;
  name: string;
  transport: Writable;
  useMessageField_: boolean;

  // not projectId, formattedname is expected
  constructor(
    logging: Logging,
    name: string,
    transport?: Writable,
    options?: LogSyncOptions
  ) {
    options = options || {};
    this.formattedName_ = formatLogName(logging.projectId, name);
    this.logging = logging;
    /**
     * @name Log#name
     * @type {string}
     */
    this.name = this.formattedName_.split('/').pop()!;
    // Default to writing to stdout
    this.transport = transport || process.stdout;
    this.useMessageField_ = options.useMessageField ?? true;
  }

  /**
   * Write a log entry with a severity of "ALERT".
   *
   * This is a simple wrapper around {@link LogSync#write}. All arguments are
   * the same as documented there.
   *
   * @param {Entry|Entry[]} entry A log entry, or array of entries, to write.
   * @param {?WriteOptions} [options] Write options
   * @example
   * ```
   * const {Logging} = require('@google-cloud/logging');
   * const logging = new Logging();
   * const log = logging.logSync('my-log');
   *
   * const entry = log.entry('gce_instance', {
   *   instance: 'my_instance'
   * });
   *
   * log.alert(entry);
   * ```
   */
  alert(entry: Entry | Entry[], options?: WriteOptions) {
    this.write(
      assignSeverityToEntries(entry, 'ALERT'),
      options! as WriteOptions
    );
  }

  /**
   * Write a log entry with a severity of "CRITICAL".
   *
   * This is a simple wrapper around {@link LogSync#write}. All arguments are
   * the same as documented there.
   *
   * @param {Entry|Entry[]} entry A log entry, or array of entries, to write.
   * @param {?WriteOptions} [options] Write options
   * @example
   * ```
   * const {Logging} = require('@google-cloud/logging');
   * const logging = new Logging();
   * const log = logging.logSync('my-log');
   *
   * const entry = log.entry('gce_instance', {
   *   instance: 'my_instance'
   * });
   *
   * log.critical(entry);
   * ```
   */
  critical(entry: Entry | Entry[], options?: WriteOptions) {
    this.write(
      assignSeverityToEntries(entry, 'CRITICAL'),
      options! as WriteOptions
    );
  }

  /**
   * Write a log entry with a severity of "DEBUG".
   *
   * This is a simple wrapper around {@link LogSync#write}. All arguments are
   * the same as documented there.
   *
   * @param {Entry|Entry[]} entry A log entry, or array of entries, to write.
   * @param {?WriteOptions} [options] Write options
   * @example
   * ```
   * const {Logging} = require('@google-cloud/logging');
   * const logging = new Logging();
   * const log = logging.logSync('my-log');
   *
   * const entry = log.entry('gce_instance', {
   *   instance: 'my_instance'
   * });
   *
   * log.debug(entry);
   * ```
   */
  debug(entry: Entry | Entry[], options?: WriteOptions) {
    this.write(
      assignSeverityToEntries(entry, 'DEBUG'),
      options! as WriteOptions
    );
  }

  /**
   * Write a log entry with a severity of "EMERGENCY".
   *
   * This is a simple wrapper around {@link LogSync#write}. All arguments are
   * the same as documented there.
   *
   * @param {Entry|Entry[]} entry A log entry, or array of entries, to write.
   * @param {?WriteOptions} [options] Write options
   * @example
   * ```
   * const {Logging} = require('@google-cloud/logging');
   * const logging = new Logging();
   * const log = logging.logSync('my-log');
   *
   * const entry = log.entry('gce_instance', {
   *   instance: 'my_instance'
   * });
   *
   * log.emergency(entry);
   * ```
   */
  emergency(entry: Entry | Entry[], options?: WriteOptions) {
    this.write(
      assignSeverityToEntries(entry, 'EMERGENCY'),
      options as WriteOptions
    );
  }

  // TODO(future): dedupe entry code across LogSync & Log classes.
  /**
   * Create an entry object for this log.
   *
   * Using this method will not itself do any logging.
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
   * const log = logging.logSync('my-log');
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
   * This is a simple wrapper around {@link LogSync#write}. All arguments are
   * the same as documented there.
   *
   * @param {Entry|Entry[]} entry A log entry, or array of entries, to write.
   * @param {?WriteOptions} [options] Write options
   * @example
   * ```
   * const {Logging} = require('@google-cloud/logging');
   * const logging = new Logging();
   * const log = logging.logSync('my-log');
   *
   * const entry = log.entry('gce_instance', {
   *   instance: 'my_instance'
   * });
   *
   * log.error(entry);
   * ```
   */
  error(entry: Entry | Entry[], options?: WriteOptions) {
    this.write(
      assignSeverityToEntries(entry, 'ERROR'),
      options! as WriteOptions
    );
  }

  /**
   * Write a log entry with a severity of "INFO".
   *
   * This is a simple wrapper around {@link LogSync#write}. All arguments are
   * the same as documented there.
   *
   * @param {Entry|Entry[]} entry A log entry, or array of entries, to write.
   * @param {?WriteOptions} [options] Write options
   * @example
   * ```
   * const {Logging} = require('@google-cloud/logging');
   * const logging = new Logging();
   * const log = logging.logSync('my-log');
   *
   * const entry = log.entry('gce_instance', {
   *   instance: 'my_instance'
   * });
   *
   * log.info(entry);
   * ```
   */
  info(entry: Entry | Entry[], options?: WriteOptions) {
    this.write(
      assignSeverityToEntries(entry, 'INFO'),
      options! as WriteOptions
    );
  }

  /**
   * Write a log entry with a severity of "NOTICE".
   *
   * This is a simple wrapper around {@link LogSync#write}. All arguments are
   * the same as documented there.
   *
   * @param {Entry|Entry[]} entry A log entry, or array of entries, to write.
   * @param {?WriteOptions} [options] Write options
   * @example
   * ```
   * const {Logging} = require('@google-cloud/logging');
   * const logging = new Logging();
   * const log = logging.logSync('my-log');
   *
   * const entry = log.entry('gce_instance', {
   *   instance: 'my_instance'
   * });
   *
   * log.notice(entry);
   * ```
   */
  notice(entry: Entry | Entry[], options?: WriteOptions) {
    this.write(
      assignSeverityToEntries(entry, 'NOTICE'),
      options! as WriteOptions
    );
  }

  /**
   * Write a log entry with a severity of "WARNING".
   *
   * This is a simple wrapper around {@link LogSync#write}. All arguments are
   * the same as documented there.
   *
   * @param {Entry|Entry[]} entry A log entry, or array of entries, to write.
   * @param {?WriteOptions} [options] Write options
   * @example
   * ```
   * const {Logging} = require('@google-cloud/logging');
   * const logging = new Logging();
   * const log = logging.logSync('my-log');
   *
   * const entry = log.entry('gce_instance', {
   *   instance: 'my_instance'
   * });
   *
   * log.warning(entry);
   * ```
   */
  warning(entry: Entry | Entry[], options?: WriteOptions) {
    this.write(
      assignSeverityToEntries(entry, 'WARNING'),
      options as WriteOptions
    );
  }

  /**
   * Write log entries to a custom transport (default: process.stdout).
   *
   * @param {Entry|Entry[]} entry A log entry, or array of entries, to write.
   * @param {?WriteOptions} [options] Write options
   *
   * @example
   * ```
   * const entry = log.entry('gce_instance', {
   *   instance: 'my_instance'
   * });
   *
   * log.write(entry);
   *
   * //-
   * // You may also pass multiple log entries to write.
   * //-
   * const secondEntry = log.entry('compute.googleapis.com', {
   *   user: 'my_username'
   * });
   *
   * log.write([entry, secondEntry]);
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
   * log.write(entries, options);
   *
   * log.write(entries);
   * });
   * ```
   */
  write(entry: Entry | Entry[], opts?: WriteOptions) {
    const options = opts ? (opts as WriteOptions) : {};
    // We expect projectId and resource to be set before this fn is called...
    let structuredEntries: StructuredJson[];
    this.formattedName_ = formatLogName(this.logging.projectId, this.name);
    try {
      // Make sure to add instrumentation info
      structuredEntries = populateInstrumentationInfo(entry)[0].map(entry => {
        if (!(entry instanceof Entry)) {
          entry = this.entry(entry);
        }
        return entry.toStructuredJSON(
          this.logging.projectId,
          this.useMessageField_
        );
      });
      for (const entry of structuredEntries) {
        entry.logName = this.formattedName_;
        entry.resource =
          snakecaseKeys(options.resource?.labels) ||
          entry.resource ||
          this.logging.detectedResource;
        entry[LABELS_KEY] = options.labels || entry[LABELS_KEY];
        this.transport.write(JSON.stringify(entry) + '\n');
      }
    } catch (err) {
      // Ignore errors (client libraries do not panic).
    }
  }
}

/**
 * Reference to the {@link LogSync} class.
 * @name module:@google-cloud/logging.LogSync
 * @see LogSync
 */
export {LogSync};
