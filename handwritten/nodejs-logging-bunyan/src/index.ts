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

import {Writable} from 'stream';
import * as util from 'util';

const logging = require('@google-cloud/logging');

import * as types from './types/core';

// Map of Stackdriver logging levels.
const BUNYAN_TO_STACKDRIVER: Map<number, string> = new Map([
  [60, 'CRITICAL'],
  [50, 'ERROR'],
  [40, 'WARNING'],
  [30, 'INFO'],
  [20, 'DEBUG'],
  [10, 'DEBUG'],
]);

/**
 * Key to use in the Bunyan payload to allow users to indicate a trace for the
 * request, and to store as an intermediate value on the log entry before it
 * gets written to the Stackdriver logging API.
 */
export const LOGGING_TRACE_KEY = 'logging.googleapis.com/trace';

/**
 * Gets the current fully qualified trace ID when available from the
 * @google-cloud/trace-agent library in the LogEntry.trace field format of:
 * "projects/[PROJECT-ID]/traces/[TRACE-ID]".
 */
function getCurrentTraceFromAgent() {
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

export class LoggingBunyan extends Writable {
  private logName: string;
  private resource: types.MonitoredResource|undefined;
  private serviceContext: types.ServiceContext|undefined;
  private stackdriverLog:
      types.StackdriverLog;  // TODO: add type for @google-cloud/logging
  constructor(options?: types.Options) {
    options = options || {};
    super({objectMode: true});
    this.logName = options.logName || 'bunyan_log';
    this.resource = options.resource;
    this.serviceContext = options.serviceContext;
    this.stackdriverLog = logging(options).log(this.logName, {
      removeCircular: true,
    });
  }

  /**
   * Convenience method that Builds a bunyan stream object that you can put in
   * the bunyan streams list.
   */
  stream(level: types.LogLevel): types.StreamResponse {
    return {level, type: 'raw', stream: this as NodeJS.WritableStream};
  }

  /**
   * Format a bunyan record into a Stackdriver log entry.
   */
  private formatEntry_(record: string|types.BunyanLogRecord) {
    if (typeof record === 'string') {
      throw new Error(
          '@google-cloud/logging-bunyan only works as a raw bunyan stream type.');
    }
    // Stackdriver Log Viewer picks up the summary line from the 'message' field
    // of the payload. Unless the user has provided a 'message' property also,
    // move the 'msg' to 'message'.
    if (!record.message) {
      // If this is an error, report the full stack trace. This allows
      // Stackdriver Error Reporting to pick up errors automatically (for
      // severity 'error' or higher). In this case we leave the 'msg' property
      // intact.
      // https://cloud.google.com/error-reporting/docs/formatting-error-messages
      //
      if (record.err && record.err.stack) {
        record.message = record.err.stack;
        record.serviceContext = this.serviceContext;
      } else if (record.msg) {
        // Simply rename `msg` to `message`.
        record.message = record.msg;
        delete record.msg;
      }
    }

    const entryMetadata: types.StackdriverEntryMetadata = {
      resource: this.resource,
      timestamp: record.time,
      severity: BUNYAN_TO_STACKDRIVER.get(Number(record.level))
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

    // If the record contains a labels property, promote it to the entry
    // metadata.
    // https://cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry
    if (record.labels) {
      entryMetadata.labels = record.labels;
      delete record.labels;
    }

    // record does not have index signature.
    // tslint:disable-next-line:no-any
    if ((record as any)[LOGGING_TRACE_KEY]) {
      // tslint:disable-next-line:no-any
      entryMetadata.trace = (record as any)[LOGGING_TRACE_KEY];
      // tslint:disable-next-line:no-any
      delete (record as any)[LOGGING_TRACE_KEY];
    }

    return this.stackdriverLog.entry(entryMetadata, record);
  }

  /**
   * Intercept log entries as they are written so we can attempt to add the
   * trace ID in the same continuation as the function that wrote the log,
   * because the trace agent currently uses continuation local storage for the
   * trace context.
   *
   * By the time the Writable stream buffer gets flushed and _write gets called
   * we may well be in a different continuation.
   */
  write(record: types.BunyanLogRecord, callback?: Function): boolean;
  write(record: types.BunyanLogRecord, encoding?: string, callback?: Function):
      boolean;
  // Writable.write used 'any' in function signature.
  // tslint:disable-next-line:no-any
  write(...args: any[]): boolean {
    let record = args[0];
    let encoding: string|null = null;
    let callback: Function;
    if (typeof args[1] === 'string') {
      encoding = args[1];
      callback = args[2];
    } else {
      callback = args[1];
    }
    record = Object.assign({}, record);
    // record does not have index signature.
    // tslint:disable-next-line:no-any
    if (!(record as any)[LOGGING_TRACE_KEY]) {
      const trace = getCurrentTraceFromAgent();
      if (trace) {
        // tslint:disable-next-line:no-any
        (record as any)[LOGGING_TRACE_KEY] = trace;
      }
    }
    if (encoding !== null) {
      return super.write.call(this, record, encoding, callback);
    } else {
      return super.write.call(this, record, callback);
    }
  }

  /**
   * Relay a log entry to the logging agent. This is called by bunyan through
   * Writable#write.
   */
  _write(
      record: types.BunyanLogRecord, encoding?: string, callback?: Function) {
    const entry = this.formatEntry_(record);
    this.stackdriverLog.write(entry, callback);
  }

  /**
   * Relay an array of log entries to the logging agent. This is called by
   * bunyan through Writable#write.
   */
  // Writable._write used 'any' in function signature.
  _writev(
      chunks: Array<{
        // tslint:disable-next-line:no-any
        chunk: any; encoding: string;
      }>,
      callback?: Function) {
    const entries = chunks.map((request: {
                                 // tslint:disable-next-line:no-any
                                 chunk: any; encoding: string;
                               }) => {
      return this.formatEntry_(request.chunk);
    });

    this.stackdriverLog.write(entries, callback);
  }
}

module.exports.BUNYAN_TO_STACKDRIVER = BUNYAN_TO_STACKDRIVER;

/**
 * Value: `logging.googleapis.com/trace`
 *
 * @name LoggingBunyan.LOGGING_TRACE_KEY
 * @type {string}
 */
module.exports.LOGGING_TRACE_KEY = LOGGING_TRACE_KEY;
