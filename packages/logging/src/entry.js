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

/*!
 * @module logging/entry
 */

'use strict';

var commonGrpc = require('@google-cloud/common-grpc');
var EventId = require('eventid');
var extend = require('extend');
var is = require('is');

var eventId = new EventId();

/**
 * Create an entry object to define new data to insert into a log.
 *
 * @resource [LogEntry JSON representation]{@link https://cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry}
 *
 * @alias module:logging/entry
 * @constructor
 *
 * @param {object=} metadata - See a
 *     [LogEntry Resource](https://cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry).
 * @param {object|string} data - The data to use as the value for this log
 *     entry.
 *
 *     If providing an object, these value types are supported:
 *     - `String`
 *     - `Number`
 *     - `Boolean`
 *     - `Buffer`
 *     - `Object`
 *     - `Array`
 *
 *     Any other types are stringified with `String(value)`.
 * @return {module:logging/entry}
 *
 * @example
 * var syslog = logging.log('syslog');
 *
 * var metadata = {
 *   resource: {
 *     type: 'gce_instance',
 *     labels: {
 *       zone: 'global',
 *       instance_id: '3'
 *     }
 *   }
 * };
 *
 * var entry = syslog.entry(metadata, {
 *   delegate: 'my_username'
 * });
 *
 * syslog.alert(entry, function(err, apiResponse) {
 *   if (!error) {
 *     // Log entry inserted successfully.
 *   }
 * });
 *
 * //-
 * // You will also receive `Entry` objects when using
 * // {module:logging#getEntries} and {module:logging/log#getEntries}.
 * //-
 * logging.getEntries(function(err, entries) {
 *   if (!err) {
 *     // entries[0].data = The data value from the log entry.
 *   }
 * });
 */
function Entry(metadata, data) {
  this.metadata = extend({
    timestamp: new Date()
  }, metadata);

  // JavaScript date has a very coarse granularity (millisecond), which makes
  // it quite likely that multiple log entries would have the same timestamp.
  // The Logging API doesn't guarantee to preserve insertion order for entries
  // with the same timestamp. The service does use `insertId` as a secondary
  // ordering for entries with the same timestamp. `insertId` needs to be
  // globally unique (within the project) however.
  //
  // We use a globally unique monotonically increasing EventId as the
  // insertId.
  this.metadata.insertId = this.metadata.insertId || eventId.new();

  this.data = data;
}

/**
 * Create an Entry object from an API response, such as `entries:list`.
 *
 * @private
 *
 * @param {object} entry - An API representation of an entry. See a
 *     [LogEntry](https://cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry).
 * @return {module:logging/entry}
 */
Entry.fromApiResponse_ = function(entry) {
  var data = entry[entry.payload];

  if (entry.payload === 'jsonPayload') {
    data = commonGrpc.Service.structToObj_(data);
  }

  var serializedEntry = new Entry(entry, data);

  if (serializedEntry.metadata.timestamp) {
    var ms = serializedEntry.metadata.timestamp.seconds * 1000;
    ms += serializedEntry.metadata.timestamp.nanos / 1e6;
    serializedEntry.metadata.timestamp = new Date(ms);
  }

  return serializedEntry;
};

/**
 * Serialize an entry to the format the API expects.
 *
 * @param {object=} options - Configuration object.
 * @param {boolean} options.removeCircular - Replace circular references in an
 *     object with a string value, `[Circular]`.
 * @private
 */
Entry.prototype.toJSON = function(options) {
  options = options || {};

  var entry = extend(true, {}, this.metadata);

  if (is.object(this.data)) {
    entry.jsonPayload = commonGrpc.Service.objToStruct_(this.data, {
      removeCircular: !!options.removeCircular,
      stringify: true
    });
  } else if (is.string(this.data)) {
    entry.textPayload = this.data;
  }

  if (is.date(entry.timestamp)) {
    var seconds = entry.timestamp.getTime() / 1000;
    var secondsRounded = Math.floor(seconds);

    entry.timestamp = {
      seconds: secondsRounded,
      nanos: Math.floor((seconds - secondsRounded) * 1e9)
    };
  }

  return entry;
};

module.exports = Entry;
