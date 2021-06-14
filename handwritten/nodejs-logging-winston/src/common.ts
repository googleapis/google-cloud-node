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
} from '@google-cloud/logging';
import mapValues = require('lodash.mapvalues');
import {Options} from '.';
import {LogEntry} from '@google-cloud/logging/build/src/entry';

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

// Map of npm output levels to Stackdriver Logging levels.
const NPM_LEVEL_NAME_TO_CODE = {
  error: 3,
  warn: 4,
  info: 6,
  verbose: 7,
  debug: 7,
  silly: 7,
};

// Map of Stackdriver Logging levels.
const STACKDRIVER_LOGGING_LEVEL_CODE_TO_NAME: {
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
  stackdriverLog: Log;
  private resource: protos.google.api.IMonitoredResource | undefined;
  private serviceContext: ServiceContext | undefined;
  private prefix: string | undefined;
  private labels: object | undefined;
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
    this.stackdriverLog = new Logging(options).log(this.logName, {
      removeCircular: true,
      // See: https://cloud.google.com/logging/quotas, a log size of
      // 250,000 has been chosen to keep us comfortably within the
      // 256,000 limit.
      maxEntrySize: options.maxEntrySize || 250000,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    });
    this.resource = options.resource;
    this.serviceContext = options.serviceContext;
    this.prefix = options.prefix;
    this.labels = options.labels;
  }

  log(
    level: string,
    message: string,
    metadata: MetadataArg | undefined,
    callback: Callback
  ) {
    metadata = metadata || ({} as MetadataArg);
    message = message || '';
    const hasMetadata = Object.keys(metadata).length;

    if (this.levels[level] === undefined) {
      throw new Error('Unknown log level: ' + level);
    }

    const levelCode = this.levels[level];
    const stackdriverLevel = STACKDRIVER_LOGGING_LEVEL_CODE_TO_NAME[levelCode];

    const data: StackdriverData = {};

    // Stackdriver Logs Viewer picks up the summary line from the `message`
    // property of the jsonPayload.
    // https://cloud.google.com/logging/docs/view/logs_viewer_v2#expanding.
    //
    // For error messages at severity 'error' and higher, Stackdriver
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
    // entry metadata. This allows Stackdriver to use request log formatting.
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

    const entry = this.stackdriverLog.entry(entryMetadata, data);
    this.stackdriverLog[stackdriverLevel](entry, callback);
  }
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
