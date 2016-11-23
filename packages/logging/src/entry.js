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

var common = require('@google-cloud/common');
var extend = require('extend');
var is = require('is');
var isCircular = require('is-circular');

/**
 * Create an entry object to define new data to insert into a log.
 *
 * @resource [LogEntry JSON representation]{@link https://cloud.google.com/logging/docs/api/ref_v2beta1/rest/v2beta1/LogEntry}
 *
 * @alias module:logging/entry
 * @constructor
 *
 * @param {object=} metadata - See a
 *     [LogEntry Resource](https://cloud.google.com/logging/docs/api/ref_v2beta1/rest/v2beta1/LogEntry).
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

  this.data = data;
}

/**
 * Create an Entry object from an API response, such as `entries:list`.
 *
 * @private
 *
 * @param {object} entry - An API representation of an entry. See a
 *     [LogEntry](https://cloud.google.com/logging/docs/api/ref_v2beta1/rest/v2beta1/LogEntry).
 * @return {module:logging/entry}
 */
Entry.fromApiResponse_ = function(entry) {
  var data = entry[entry.payload];

  if (entry.payload === 'jsonPayload') {
    data = common.GrpcService.structToObj_(data);
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
 * @private
 */
Entry.prototype.toJSON = function() {
  if (is.object(this.data) && isCircular([this.data])) {
    throw new Error('The JSON data for this entry has a circular reference.');
  }

  var entry = extend(true, {}, this.metadata);

  if (is.object(this.data)) {
    entry.jsonPayload = common.GrpcService.objToStruct_(this.data, {
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
