// Copyright 2016 Google LLC
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

import * as util from 'util';
import {
  Logging,
  protos,
  ServiceContext,
  SeverityNames,
  Log,
  LogSync,
} from '@google-cloud/logging';
import {
  setInstrumentationStatus,
  createDiagnosticEntry,
} from '@google-cloud/logging/build/src/utils/instrumentation';
import {LogSeverityFunctions} from '@google-cloud/logging/build/src/utils/log-common';
import mapValues = require('lodash.mapvalues');
import {Options} from '.';
import {Entry, LogEntry} from '@google-cloud/logging/build/src/entry';
import path = require('path');
import {LogSyncOptions} from '@google-cloud/logging/build/src/log-sync';

type Callback = (err: Error | null, apiResponse?: {}) => void;
export type MonitoredResource = protos.google.api.MonitoredResource;

export interface StackdriverData {
  serviceContext?: ServiceContext;
  message?: string;
  metadata?: Metadata | MetadataArg;
}

export interface Metadata {
  stack?: string;
  httpRequest?: protos.google.logging.type.IHttpRequest;
  labels?: {};
  // And arbitrary other properties.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

// Map of npm output levels to Cloud Logging levels.
const NPM_LEVEL_NAME_TO_CODE = {
  error: 3,
  warn: 4,
  info: 6,
  verbose: 7,
  debug: 7,
  silly: 7,
};

// Map of Cloud Logging levels.
const CLOUD_LOGGING_LEVEL_CODE_TO_NAME: {
  [key: number]: SeverityNames;
} = {
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
export const LOGGING_TRACE_KEY = 'logging.googleapis.com/trace';

/*!
 * Log entry data key to allow users to indicate a spanId for the request.
 */
export const LOGGING_SPAN_KEY = 'logging.googleapis.com/spanId';

/*!
 * Log entry data key to allow users to indicate a traceSampled flag for the request.
 */
export const LOGGING_SAMPLED_KEY = 'logging.googleapis.com/trace_sampled';

// The variable to hold cached library version
let libraryVersion: string;

/*!
 * Gets the current fully qualified trace ID when available from the
 * @google-cloud/trace-agent library in the LogEntry.trace field format of:
 * "projects/[PROJECT-ID]/traces/[TRACE-ID]".
 */
export function getCurrentTraceFromAgent(): string | null {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const agent = (global as any)._google_trace_agent;
  if (!agent || !agent.getCurrentContextId || !agent.getWriterProjectId) {
    return null;
  }

  const traceId = agent.getCurrentContextId();
  if (!traceId) {
    return null;
  }

  const traceProjectId = agent.getWriterProjectId();
  if (!traceProjectId) {
    return null;
  }

  return `projects/${traceProjectId}/traces/${traceId}`;
}

export class LoggingCommon {
  readonly logName: string;
  private inspectMetadata: boolean;
  private levels: {[name: string]: number};
  cloudLog: LogSeverityFunctions;
  private resource: protos.google.api.IMonitoredResource | undefined;
  private serviceContext: ServiceContext | undefined;
  private prefix: string | undefined;
  private labels: object | undefined;
  private defaultCallback?: Callback;
  redirectToStdout: boolean;
  // LOGGING_TRACE_KEY is Cloud Logging specific and has the format:
  // logging.googleapis.com/trace
  static readonly LOGGING_TRACE_KEY = LOGGING_TRACE_KEY;
  // LOGGING_TRACE_KEY is Cloud Logging specific and has the format:
  // logging.googleapis.com/spanId
  static readonly LOGGING_SPAN_KEY = LOGGING_SPAN_KEY;

  constructor(options?: Options) {
    options = Object.assign(
      {
        scopes: ['https://www.googleapis.com/auth/logging.write'],
      },
      options
    );

    this.logName = options.logName || 'winston_log';
    this.inspectMetadata = options.inspectMetadata === true;
    this.levels = options.levels || NPM_LEVEL_NAME_TO_CODE;
    this.redirectToStdout = options.redirectToStdout ?? false;

    if (!this.redirectToStdout) {
      this.cloudLog = new Logging(options).log(this.logName, {
        removeCircular: true,
        // See: https://cloud.google.com/logging/quotas, a log size of
        // 250,000 has been chosen to keep us comfortably within the
        // 256,000 limit.
        maxEntrySize: options.maxEntrySize || 250000,
      });
    } else {
      const logSyncOptions: LogSyncOptions = {
        useMessageField: options.useMessageField ?? true,
      };
      this.cloudLog = new Logging(options).logSync(
        this.logName,
        undefined,
        logSyncOptions
      );
    }
    this.resource = options.resource;
    this.serviceContext = options.serviceContext;
    this.prefix = options.prefix;
    this.labels = options.labels;
    this.defaultCallback = options.defaultCallback;
  }

  log(
    level: string,
    message: string,
    metadata: MetadataArg | undefined,
    callback: Callback
  ) {
    metadata = metadata || ({} as MetadataArg);
    // First create instrumentation record if it is never written before
    let instrumentationEntry: Entry | undefined;
    if (!setInstrumentationStatus(true)) {
      instrumentationEntry = createDiagnosticEntry(
        'nodejs-winston',
        getNodejsLibraryVersion()
      );
      // Update instrumentation record resource, logName and timestamp
      instrumentationEntry.metadata.resource = this.resource;
      instrumentationEntry.metadata.logName = metadata.logName;
      instrumentationEntry.metadata.timestamp = metadata.timestamp;
    }
    message = message || '';
    const hasMetadata = Object.keys(metadata).length;

    if (this.levels[level] === undefined) {
      throw new Error('Unknown log level: ' + level);
    }

    const levelCode = this.levels[level];
    const cloudLevel = CLOUD_LOGGING_LEVEL_CODE_TO_NAME[levelCode];

    const data: StackdriverData = {};

    // Cloud Logs Viewer picks up the summary line from the `message`
    // property of the jsonPayload.
    // https://cloud.google.com/logging/docs/view/logs_viewer_v2#expanding.
    //
    // For error messages at severity 'error' and higher,
    // Error Reporting will pick up error messages if the full stack trace is
    // included in the textPayload or the message property of the jsonPayload.
    // https://cloud.google.com/error-reporting/docs/formatting-error-messages
    // We prefer to format messages as jsonPayload (by putting it as a message
    // property on an object) as that works and is accepted by Error Reporting
    // in far more resource types.
    //
    if (metadata.stack) {
      message += (message ? ' ' : '') + metadata.stack;
      data.serviceContext = this.serviceContext;
    }

    data.message = this.prefix ? `[${this.prefix}] ` : '';
    data.message += message;

    const entryMetadata: LogEntry = {
      resource: this.resource,
    };

    // If the metadata contains a logName property, promote it to the entry
    // metadata.
    if (metadata.logName) {
      entryMetadata.logName = metadata.logName;
    }

    // If the metadata contains a httpRequest property, promote it to the
    // entry metadata. This allows Cloud Logging to use request log formatting.
    // https://cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry#HttpRequest
    // Note that the httpRequest field must properly validate as HttpRequest
    // proto message, or the log entry would be rejected by the API. We no do
    // validation here.
    if (metadata.httpRequest) {
      entryMetadata.httpRequest = metadata.httpRequest;
    }

    // If the metadata contains a timestamp property, promote it to the entry
    // metadata. As Winston 3 buffers logs when a transport (such as this one)
    // invokes its log callback asynchronously, a timestamp assigned at log time
    // is more accurate than one assigned in a transport.
    if (metadata.timestamp instanceof Date) {
      entryMetadata.timestamp = metadata.timestamp;
    }

    // If the metadata contains a labels property, promote it to the entry
    // metadata.
    // https://cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry
    if (this.labels || metadata.labels) {
      entryMetadata.labels = !this.labels
        ? metadata.labels
        : Object.assign({}, this.labels, metadata.labels);
    }

    const trace = metadata[LOGGING_TRACE_KEY] || getCurrentTraceFromAgent();
    if (trace) {
      entryMetadata.trace = trace as string;
    }

    const spanId = metadata[LOGGING_SPAN_KEY];
    if (spanId) {
      entryMetadata.spanId = spanId as string;
    }

    if (LOGGING_SAMPLED_KEY in metadata) {
      entryMetadata.traceSampled = metadata[LOGGING_SAMPLED_KEY] === '1';
    }

    // we have tests that assert that metadata is always passed.
    // not sure if its correct but for now we always set it even if it has
    // nothing in it
    data.metadata = this.inspectMetadata
      ? mapValues(metadata, util.inspect)
      : metadata;

    if (hasMetadata) {
      // clean entryMetadata props
      delete data.metadata![LOGGING_TRACE_KEY];
      delete data.metadata![LOGGING_SPAN_KEY];
      delete data.metadata![LOGGING_SAMPLED_KEY];
      delete data.metadata!.httpRequest;
      delete data.metadata!.labels;
      delete data.metadata!.timestamp;
      delete data.metadata!.logName;
    }

    const entries: Entry[] = [];
    entries.push(this.entry(entryMetadata, data));
    // Check if instrumentation entry needs to be added as well
    if (instrumentationEntry) {
      // Make sure instrumentation entry is updated by underlying logger
      instrumentationEntry = this.entry(
        instrumentationEntry.metadata,
        instrumentationEntry.data
      );
      if (levelCode !== NPM_LEVEL_NAME_TO_CODE.info) {
        // We using info level for diagnostic records
        this.cloudLog[
          CLOUD_LOGGING_LEVEL_CODE_TO_NAME[NPM_LEVEL_NAME_TO_CODE.info]
        ]([instrumentationEntry], this.defaultCallback);
      } else entries.push(instrumentationEntry);
    }
    // Make sure that both callbacks are called in case if provided
    const newCallback: Callback = (err: Error | null, apiResponse?: {}) => {
      let callbackError: unknown;
      if (callback) {
        try {
          callback(err, apiResponse);
        } catch (error) {
          callbackError = error;
        }
      }
      if (this.defaultCallback) {
        this.defaultCallback(err, apiResponse);
      }
      // In case if original error was null and callback thrown exception, rethrow it to make sure
      // we do not swallow it since upon success the exceptions normally should not be thrown. Also
      // we should retrhrow callbackError when defaultCallback was not provided to keep
      // prevous behaviour intact
      if ((!this.defaultCallback || err === null) && callbackError) {
        throw callbackError;
      }
    };
    this.cloudLog[cloudLevel](entries, newCallback);
    // The LogSync class does not supports callback. However Writable class always
    // provides onwrite() callback which needs to be called after each log is written,
    // so the stream would remove writing state. Since this.defaultCallback can also be set, we
    // should call it explicitly as well.
    if (this.redirectToStdout) {
      newCallback(null, undefined);
    }
  }

  entry(metadata?: LogEntry, data?: string | {}): Entry {
    if (this.redirectToStdout) {
      return (this.cloudLog as LogSync).entry(metadata, data);
    }
    return (this.cloudLog as Log).entry(metadata, data);
  }
}

export function getNodejsLibraryVersion() {
  if (libraryVersion) {
    return libraryVersion;
  }
  libraryVersion = require(path.resolve(
    __dirname,
    '../../',
    'package.json'
  )).version;
  return libraryVersion;
}

type MetadataArg = {
  stack?: {};
  /**
   * set httpRequest to a http.clientRequest object to log it
   */
  httpRequest?: protos.google.logging.type.IHttpRequest;
  labels?: {};
  timestamp?: {};
  logName?: string;
} & {[key: string]: string | {}};
