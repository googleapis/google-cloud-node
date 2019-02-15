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

import * as util from 'util';
import * as types from './types/core';

const {Logging} = require('@google-cloud/logging');
import mapValues = require('lodash.mapvalues');

type Callback = (err: Error, apiResponse: {}) => void;

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
const STACKDRIVER_LOGGING_LEVEL_CODE_TO_NAME:
    {[key: number]: types.StackdriverLoggingLevelNames} = {
      0: 'emergency',
      1: 'alert',
      2: 'critical',
      3: 'error',
      4: 'warning',
      5: 'notice',
      6: 'info',
      7: 'debug'
    };

/*!
 * Log entry data key to allow users to indicate a trace for the request.
 */
export const LOGGING_TRACE_KEY = 'logging.googleapis.com/trace';

/*!
 * Gets the current fully qualified trace ID when available from the
 * @google-cloud/trace-agent library in the LogEntry.trace field format of:
 * "projects/[PROJECT-ID]/traces/[TRACE-ID]".
 */
function getCurrentTraceFromAgent(): string|null {
  const agent = global._google_trace_agent;
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
  private inspectMetadata: boolean;
  private levels: {[name: string]: number};
  stackdriverLog:
      types.StackdriverLog;  // TODO: add type for @google-cloud/logging
  private resource: types.MonitoredResource|undefined;
  private serviceContext: types.ServiceContext|undefined;
  private prefix: string|undefined;
  private labels: object|undefined;
  static readonly LOGGING_TRACE_KEY = LOGGING_TRACE_KEY;

  constructor(options?: types.Options) {
    options = Object.assign(
        {
          scopes: ['https://www.googleapis.com/auth/logging.write'],
        },
        options);

    const logName = options.logName || 'winston_log';

    this.inspectMetadata = options.inspectMetadata === true;
    this.levels = options.levels || NPM_LEVEL_NAME_TO_CODE;
    this.stackdriverLog = new Logging(options).log(logName, {
      removeCircular: true,
    });
    this.resource = options.resource;
    this.serviceContext = options.serviceContext;
    this.prefix = options.prefix;
    this.labels = options.labels;
  }

  log(level: string, message: string, metadata: MetadataArg|undefined,
      callback: Callback) {
    metadata = metadata || {} as MetadataArg;
    message = message || '';
    const hasMetadata = Object.keys(metadata).length;

    if (this.levels[level] === undefined) {
      throw new Error('Unknown log level: ' + level);
    }

    const levelCode = this.levels[level];
    const stackdriverLevel = STACKDRIVER_LOGGING_LEVEL_CODE_TO_NAME[levelCode];

    const data: types.StackdriverData = {};

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
    if (metadata.stack) {
      message += (message ? ' ' : '') + metadata.stack;
      data.serviceContext = this.serviceContext;
    }

    data.message = this.prefix ? `[${this.prefix}] ` : '';
    data.message += message;

    const entryMetadata: types.StackdriverEntryMetadata = {
      resource: this.resource,
    };

    // If the metadata contains a httpRequest property, promote it to the
    // entry metadata. This allows Stackdriver to use request log formatting.
    // https://cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry#HttpRequest
    // Note that the httpRequest field must properly validate as HttpRequest
    // proto message, or the log entry would be rejected by the API. We no do
    // validation here.
    if (metadata.httpRequest) {
      entryMetadata.httpRequest = metadata.httpRequest;
    }

    // If the metadata contains a labels property, promote it to the entry
    // metadata.
    // https://cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry
    if (this.labels || metadata.labels) {
      entryMetadata.labels = !this.labels ?
          metadata.labels :
          Object.assign({}, this.labels, metadata.labels);
    }

    const trace = metadata[LOGGING_TRACE_KEY] || getCurrentTraceFromAgent();
    if (trace) {
      entryMetadata.trace = trace;
    }

    // we have tests that assert that metadata is always passed.
    // not sure if its correct but for now we always set it even if it has
    // nothing in it
    data.metadata =
        this.inspectMetadata ? mapValues(metadata, util.inspect) : metadata;

    if (hasMetadata) {
      // clean entryMetadata props
      delete data.metadata![LOGGING_TRACE_KEY];
      delete data.metadata!.httpRequest;
      delete data.metadata!.labels;
    }

    const entry = this.stackdriverLog.entry(entryMetadata, data);
    this.stackdriverLog[stackdriverLevel](entry, callback);
  }
}

type MetadataArg = {
  stack?: {},
  /**
   * set httpRequest to a http.clientRequest object to log it
   */
  httpRequest?: types.HttpRequest,
  labels?: {}
}&{[key: string]: string | {}};
