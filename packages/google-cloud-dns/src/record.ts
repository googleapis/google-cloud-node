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

import {promisifyAll} from '@google-cloud/promisify';
import arrify = require('arrify');
import {Change, CreateChangeCallback} from './change';
import {Zone} from './zone';
import {Metadata} from '@google-cloud/common';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const format = require('string-format-obj');

export interface RecordObject {
  rrdatas?: Array<{}>;
  rrdata?: {};
  data?: {};
  type?: string;
}

export interface RecordMetadata {
  name: string;
  data: string | string[];
  ttl: number;
  type?: string;
  signatureRrdatas?: string[];
}

/**
 * @typedef {array} DeleteRecordResponse
 * @property {Change} 0 A {@link Change} object.
 * @property {object} 1 The full API response.
 */
export type DeleteRecordResponse = [Change, Metadata];

/**
 * @callback DeleteRecordCallback
 * @param {?Error} err Request error, if any.
 * @param {?Change} change A {@link Change} object.
 * @param {object} apiResponse The full API response.
 */
export interface DeleteRecordCallback {
  (err: Error | null, change?: Change, apiResponse?: Metadata): void;
}

/**
 * Create a Resource Record object.
 *
 * @class
 *
 * @param {string} type The record type, e.g. `A`, `AAAA`, `MX`.
 * @param {object} metadata The metadata of this record.
 * @param {string} metadata.name The name of the record, e.g.
 *     `www.example.com.`.
 * @param {string[]} metadata.data Defined in
 *     [RFC 1035, section 5](https://goo.gl/9EiM0e) and
 *     [RFC 1034, section 3.6.1](https://goo.gl/Hwhsu9).
 * @param {number} metadata.ttl Seconds that the resource is cached by
 *     resolvers.
 *
 * @example
 * const {DNS} = require('@google-cloud/dns');
 * const dns = new DNS();
 * const zone = dns.zone('my-awesome-zone');
 *
 * const record = zone.record('a', {
 *   name: 'example.com.',
 *   ttl: 86400,
 *   data: '1.2.3.4'
 * });
 */
export class Record implements RecordObject {
  zone_: Zone;
  type: string;
  metadata: RecordMetadata;
  rrdatas?: Array<{}>;
  data?: {};
  constructor(zone: Zone, type: string, metadata: RecordMetadata) {
    this.zone_ = zone;
    /**
     * @name Record#type
     * @type {string}
     */
    this.type = type;
    /**
     * @name Record#metadata
     * @type {object}
     * @property {string} name
     * @property {string[]} data
     * @property {number} metadata.ttl
     */
    this.metadata = metadata;
    Object.assign(this, this.toJSON());
    if (this.rrdatas) {
      /**
       * @name Record#data
       * @type {?object[]}
       */
      this.data = this.rrdatas;
      delete this.rrdatas;
    }
  }

  delete(): Promise<DeleteRecordResponse>;
  delete(callback: CreateChangeCallback): void;
  /**
   * Delete this record by creating a change on your zone. This is a convenience
   * method for:
   *
   *     zone.createChange({
   *       delete: record
   *     }, (err, change, apiResponse) => {});
   *
   * @see [ManagedZones: create API Documentation]{@link https://cloud.google.com/dns/api/v1/managedZones/create}
   *
   * @param {DeleteRecordCallback} [callback] Callback function.
   * @returns {Promise<DeleteRecordResponse>}
   *
   * @example
   * const {DNS} = require('@google-cloud/dns');
   * const dns = new DNS();
   * const zone = dns.zone('zone-id');
   * const record = zone.record('a', {
   *   name: 'example.com.',
   *   ttl: 86400,
   *   data: '1.2.3.4'
   * });
   *
   * record.delete((err, change, apiResponse) => {
   *   if (!err) {
   *     // Delete change modification was created.
   *   }
   * });
   *
   * //-
   * // If the callback is omitted, we'll return a Promise.
   * //-
   * record.delete().then((data) => {
   *   const change = data[0];
   *   const apiResponse = data[1];
   * });
   */
  delete(
    callback?: CreateChangeCallback
  ): void | Promise<DeleteRecordResponse> {
    this.zone_.deleteRecords(this, callback!);
  }
  /**
   * Serialize the record instance to the format the API expects.
   *
   * @returns {object}
   */
  toJSON() {
    const recordObject: RecordObject = Object.assign({}, this.metadata, {
      type: this.type.toUpperCase(),
    });
    if (recordObject.data) {
      recordObject.rrdatas = arrify(recordObject.data);
      delete recordObject.data;
    }
    return recordObject;
  }
  /**
   * Convert the record to a string, formatted for a zone file.
   *
   * @returns {string}
   */
  toString() {
    const json = this.toJSON();
    return (json.rrdatas || [{}])
      .map(data => {
        json.rrdata = data;
        return format('{name} {ttl} IN {type} {rrdata}', json);
      })
      .join('\n');
  }
  /**
   * Create a Record instance from a resource record set in a zone file.
   *
   * @private
   *
   * @param {Zone} zone The zone.
   * @param {string} type The record type, e.g. `A`, `AAAA`, `MX`.
   * @param {object} bindData Metadata parsed from dns-zonefile. Properties vary
   *     based on the type of record.
   * @returns {Record}
   */
  static fromZoneRecord_(zone: Zone, type: string, bindData: RecordMetadata) {
    const typeToZoneFormat = {
      a: '{ip}',
      aaaa: '{ip}',
      cname: '{alias}',
      mx: '{preference} {host}',
      ns: '{host}',
      soa: '{mname} {rname} {serial} {retry} {refresh} {expire} {minimum}',
      spf: '{data}',
      srv: '{priority} {weight} {port} {target}',
      txt: '{txt}',
    } as {[index: string]: string};
    const metadata = {
      data: format(typeToZoneFormat[type.toLowerCase()], bindData),
      name: bindData.name,
      ttl: bindData.ttl,
    };
    return new Record(zone, type, metadata);
  }
}

/*! Developer Documentation
 *
 * All async methods (except for streams) will return a Promise in the event
 * that a callback is omitted.
 */
promisifyAll(Record, {
  exclude: ['toJSON', 'toString'],
});
