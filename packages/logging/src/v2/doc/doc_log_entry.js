/*
 * Copyright 2017, Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/*
 * Note: this file is purely for documentation. Any contents are not expected
 * to be loaded as the JS file.
 */

/**
 * An individual entry in a log.
 *
 * @property {string} logName
 *   Required. The resource name of the log to which this log entry belongs:
 *
 *       "projects/[PROJECT_ID]/logs/[LOG_ID]"
 *       "organizations/[ORGANIZATION_ID]/logs/[LOG_ID]"
 *       "billingAccounts/[BILLING_ACCOUNT_ID]/logs/[LOG_ID]"
 *       "folders/[FOLDER_ID]/logs/[LOG_ID]"
 *
 *   `[LOG_ID]` must be URL-encoded within `log_name`. Example:
 *   `"organizations/1234567890/logs/cloudresourcemanager.googleapis.com%2Factivity"`.
 *   `[LOG_ID]` must be less than 512 characters long and can only include the
 *   following characters: upper and lower case alphanumeric characters,
 *   forward-slash, underscore, hyphen, and period.
 *
 *   For backward compatibility, if `log_name` begins with a forward-slash, such
 *   as `/projects/...`, then the log entry is ingested as usual but the
 *   forward-slash is removed. Listing the log entry will not show the leading
 *   slash and filtering for a log name with a leading slash will never return
 *   any results.
 *
 * @property {Object} resource
 *   Required. The monitored resource associated with this log entry.
 *   Example: a log entry that reports a database error would be
 *   associated with the monitored resource designating the particular
 *   database that reported the error.
 *
 *   This object should have the same structure as [google.api.MonitoredResource]{@link external:"google.api.MonitoredResource"}
 *
 * @property {Object} protoPayload
 *   The log entry payload, represented as a protocol buffer.  Some
 *   Google Cloud Platform services use this field for their log
 *   entry payloads.
 *
 *   This object should have the same structure as [google.protobuf.Any]{@link external:"google.protobuf.Any"}
 *
 * @property {string} textPayload
 *   The log entry payload, represented as a Unicode string (UTF-8).
 *
 * @property {Object} jsonPayload
 *   The log entry payload, represented as a structure that is
 *   expressed as a JSON object.
 *
 *   This object should have the same structure as [google.protobuf.Struct]{@link external:"google.protobuf.Struct"}
 *
 * @property {Object} timestamp
 *   Optional. The time the event described by the log entry occurred.  If
 *   omitted in a new log entry, Stackdriver Logging will insert the time the
 *   log entry is received.  Stackdriver Logging might reject log entries whose
 *   time stamps are more than a couple of hours in the future. Log entries
 *   with time stamps in the past are accepted.
 *
 *   This object should have the same structure as [google.protobuf.Timestamp]{@link external:"google.protobuf.Timestamp"}
 *
 * @property {Object} receiveTimestamp
 *   Output only. The time the log entry was received by Stackdriver Logging.
 *
 *   This object should have the same structure as [google.protobuf.Timestamp]{@link external:"google.protobuf.Timestamp"}
 *
 * @property {number} severity
 *   Optional. The severity of the log entry. The default value is
 *   `LogSeverity.DEFAULT`.
 *
 *   The number should be among the values of [google.logging.type.LogSeverity]{@link external:"google.logging.type.LogSeverity"}
 *
 * @property {string} insertId
 *   Optional. A unique identifier for the log entry. If you provide a value,
 *   then Stackdriver Logging considers other log entries in the same project,
 *   with the same `timestamp`, and with the same `insert_id` to be duplicates
 *   which can be removed.  If omitted in new log entries, then Stackdriver
 *   Logging will insert its own unique identifier. The `insert_id` is used
 *   to order log entries that have the same `timestamp` value.
 *
 * @property {Object} httpRequest
 *   Optional. Information about the HTTP request associated with this
 *   log entry, if applicable.
 *
 *   This object should have the same structure as [google.logging.type.HttpRequest]{@link external:"google.logging.type.HttpRequest"}
 *
 * @property {Object.<string, string>} labels
 *   Optional. A set of user-defined (key, value) data that provides additional
 *   information about the log entry.
 *
 * @property {Object} operation
 *   Optional. Information about an operation associated with the log entry, if
 *   applicable.
 *
 *   This object should have the same structure as [LogEntryOperation]{@link LogEntryOperation}
 *
 * @property {string} trace
 *   Optional. Resource name of the trace associated with the log entry, if any.
 *   If it contains a relative resource name, the name is assumed to be relative
 *   to `//tracing.googleapis.com`. Example:
 *   `projects/my-projectid/traces/06796866738c859f2f19b7cfb3214824`
 *
 * @property {Object} sourceLocation
 *   Optional. Source code location information associated with the log entry,
 *   if any.
 *
 *   This object should have the same structure as [LogEntrySourceLocation]{@link LogEntrySourceLocation}
 *
 * @class
 * @see [google.logging.v2.LogEntry definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/logging/v2/log_entry.proto}
 */
var LogEntry = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Additional information about a potentially long-running operation with which
 * a log entry is associated.
 *
 * @property {string} id
 *   Optional. An arbitrary operation identifier. Log entries with the
 *   same identifier are assumed to be part of the same operation.
 *
 * @property {string} producer
 *   Optional. An arbitrary producer identifier. The combination of
 *   `id` and `producer` must be globally unique.  Examples for `producer`:
 *   `"MyDivision.MyBigCompany.com"`, `"github.com/MyProject/MyApplication"`.
 *
 * @property {boolean} first
 *   Optional. Set this to True if this is the first log entry in the operation.
 *
 * @property {boolean} last
 *   Optional. Set this to True if this is the last log entry in the operation.
 *
 * @class
 * @see [google.logging.v2.LogEntryOperation definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/logging/v2/log_entry.proto}
 */
var LogEntryOperation = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Additional information about the source code location that produced the log
 * entry.
 *
 * @property {string} file
 *   Optional. Source file name. Depending on the runtime environment, this
 *   might be a simple name or a fully-qualified name.
 *
 * @property {number} line
 *   Optional. Line within the source file. 1-based; 0 indicates no line number
 *   available.
 *
 * @property {string} function
 *   Optional. Human-readable name of the function or method being invoked, with
 *   optional context such as the class or package name. This information may be
 *   used in contexts such as the logs viewer, where a file and line number are
 *   less meaningful. The format can vary by language. For example:
 *   `qual.if.ied.Class.method` (Java), `dir/package.func` (Go), `function`
 *   (Python).
 *
 * @class
 * @see [google.logging.v2.LogEntrySourceLocation definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/logging/v2/log_entry.proto}
 */
var LogEntrySourceLocation = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};