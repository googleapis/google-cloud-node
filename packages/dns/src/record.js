/*!
 * Copyright 2014 Google Inc. All Rights Reserved.
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
 * @module dns/record
 */

'use strict';

var arrify = require('arrify');
var common = require('@google-cloud/common');
var extend = require('extend');
var format = require('string-format-obj');

/**
 * Create a Resource Record object.
 *
 * @constructor
 * @alias module:dns/record
 *
 * @param {object} type - The record type, e.g. `A`, `AAAA`, `MX`.
 * @param {object} metadata - The metadata of this record.
 * @param {string} metadata.name - The name of the record, e.g.
 *     `www.example.com.`.
 * @param {string[]} metadata.data - Defined in
 *     [RFC 1035, section 5](https://goo.gl/9EiM0e) and
 *     [RFC 1034, section 3.6.1](https://goo.gl/Hwhsu9).
 * @param {number} metadata.ttl - Seconds that the resource is cached by
 *     resolvers.
 *
 * @example
 * var zone = dns.zone('my-awesome-zone');
 *
 * var record = zone.record('a', {
 *   name: 'example.com.',
 *   ttl: 86400,
 *   data: '1.2.3.4'
 * });
 */
function Record(zone, type, metadata) {
  this.zone_ = zone;

  this.type = type;
  this.metadata = metadata;

  extend(this, this.toJSON());

  if (this.rrdatas) {
    this.data = this.rrdatas;
    delete this.rrdatas;
  }
}

/**
 * Create a Record instance from a resource record set in a zone file.
 *
 * @private
 *
 * @param {module:dns/zone} zone     [description]
 * @param {string} type - The record type, e.g. `A`, `AAAA`, `MX`.
 * @param {object} bindData - Metadata parsed from dns-zonefile. Properties vary
 *     based on the type of record.
 * @return {module:dns/record}
 */
Record.fromZoneRecord_ = function(zone, type, bindData) {
  var typeToZoneFormat = {
    a: '{ip}',
    aaaa: '{ip}',
    cname: '{alias}',
    mx: '{preference} {host}',
    ns: '{host}',
    soa: '{mname} {rname} {serial} {retry} {refresh} {expire} {minimum}',
    spf: '{data}',
    srv: '{priority} {weight} {port} {target}',
    txt: '{txt}'
  };

  var metadata = {
    data: format(typeToZoneFormat[type.toLowerCase()], bindData),
    name: bindData.name,
    ttl: bindData.ttl
  };

  return new Record(zone, type, metadata);
};

/**
 * Delete this record by creating a change on your zone. This is a convenience
 * method for:
 *
 *     zone.createChange({
 *       delete: record
 *     }, function(err, change, apiResponse) {});
 *
 * @resource [ManagedZones: create API Documentation]{@link https://cloud.google.com/dns/api/v1/managedZones/create}
 *
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An API error.
 * @param {?module:dns/change} callback.change - A {module:dns/change} object.
 * @param {object} callback.apiResponse - Raw API response.
 *
 * @example
 * record.delete(function(err, change, apiResponse) {
 *   if (!err) {
 *     // Delete change modification was created.
 *   }
 * });
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * record.delete().then(function(data) {
 *   var change = data[0];
 *   var apiResponse = data[1];
 * });
 */
Record.prototype.delete = function(callback) {
  this.zone_.deleteRecords(this, callback);
};

/**
 * Serialize the record instance to the format the API expects.
 *
 * @private
 */
Record.prototype.toJSON = function() {
  var recordObject = extend({}, this.metadata, {
    type: this.type.toUpperCase()
  });

  if (recordObject.data) {
    recordObject.rrdatas = arrify(recordObject.data);
    delete recordObject.data;
  }

  return recordObject;
};

/**
 * Convert the record to a string, formatted for a zone file.
 *
 * @private
 *
 * @return {string}
 */
Record.prototype.toString = function() {
  var json = this.toJSON();

  return (json.rrdatas || [{}]).map(function(data) {
    json.rrdata = data;
    return format('{name} {ttl} IN {type} {rrdata}', json);
  }).join('\n');
};

/*! Developer Documentation
 *
 * All async methods (except for streams) will return a Promise in the event
 * that a callback is omitted.
 */
common.util.promisifyAll(Record, {
  exclude: ['toJSON', 'toString']
});

module.exports = Record;
