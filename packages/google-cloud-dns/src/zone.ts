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

'use strict';

import * as arrify from 'arrify';
import {ServiceObject, DeleteCallback} from '@google-cloud/common';
import {paginator} from '@google-cloud/paginator';
import {promisifyAll} from '@google-cloud/promisify';
import * as extend from 'extend';
const flatten = require('lodash.flatten');
import * as fs from 'fs';
import groupBy = require('lodash.groupby');
import * as is from 'is';
import {teenyRequest} from 'teeny-request';
const zonefile = require('dns-zonefile');

import {Change, CreateChangeCallback, CreateChangeRequest} from './change';
import {Record, RecordMetadata, RecordObject} from './record';
import {DNS} from '.';
import * as r from 'request';

/**
 * Config to set for the change.
 *
 * @typedef {object} CreateChangeRequest
 * @property {Record|Record[]} add {@link Record} objects to add to this zone.
 * @property {Record|Record[]} delete {@link Record} objects to delete
 *     from this zone. Be aware that the resource records here must match
 *     exactly to be deleted.
 */
export interface CreateChangeRequest {
  add?: Record|Record[];
  delete?: Record|Record[];
}

/**
 * @typedef {array} CreateChangeResponse
 * @property {Change} 0 A {@link Change} object.
 * @property {object} 1 The full API response.
 */
export type CreateChangeResponse = [Change, r.Response];

/**
 * @callback CreateChangeCallback
 * @param {?Error} err Request error, if any.
 * @param {?Change} change A {@link Change} object.
 * @param {object} apiResponse The full API response.
 */
export interface CreateChangeCallback {
  (err: Error|null, change?: Change, apiResponse?: r.Response): void;
}

/**
 * @typedef {array} DeleteZoneResponse
 * @property {object} 0 The full API response.
 */
export type DeleteZoneResponse = [r.Response];

/**
 * @callback DeleteZoneCallback
 * @param {?Error} err Request error, if any.
 * @param {object} apiResponse The full API response.
 */
export interface DeleteZoneCallback extends DeleteCallback {}

export interface DeleteZoneConfig {
  force?: boolean;
}

export interface GetRecordsCallback {
  (err: Error|null, records?: Record[]|null, nextQuery?: {}|null,
   apiResponse?: r.Response): void;
}

export type GetRecordsResponse = [Record[], r.Response];

export interface GetRecordsRequest {
  autoPaginate?: boolean;
  maxApiCalls?: number;
  maxResults?: number;
  name?: string;
  pageToken?: string;
  type?: string;
  filterByTypes_?: {[index: string]: boolean};
}

/**
 * Query object for listing changes.
 *
 * @typedef {object} GetChangesRequest
 * @property {boolean} [autoPaginate=true] Have pagination handled automatically.
 * @property {number} [maxApiCalls] Maximum number of API calls to make.
 * @property {number} [maxResults] Maximum number of items plus prefixes to
 *     return.
 * @property {string} [pageToken] A previously-returned page token
 *     representing part of the larger set of results to view.
 * @property {string} [sort] Set to 'asc' for ascending, and 'desc' for
 *     descending or omit for no sorting.
 */
export interface GetChangesRequest {
  autoPaginate?: boolean;
  maxApiCalls?: number;
  maxResults?: number;
  pageToken?: string;
  sort?: string;
  sortOrder?: string;
}

/**
 * @typedef {array} GetChangesResponse
 * @property {Change[]} 0 Array of {@link Change} instances.
 * @property {object} 1 The full API response.
 */
export type GetChangesResponse = [Change[], r.Response];

/**
 * @callback GetChangesCallback
 * @param {?Error} err Request error, if any.
 * @param {Change[]} changes Array of {@link Change} instances.
 * @param {object} apiResponse The full API response.
 */

export interface GetChangesCallback {
  (err: Error|null, changes?: Change[]|null, nextQuery?: {}|null,
   apiResponse?: r.Response): void;
}

/**
 * @typedef {array} ZoneExportResponse
 * @property {object} 0 The full API response.
 */
export type ZoneExportResponse = [r.Response];

/**
 * @callback ZoneExportCallback
 * @param {?Error} err Request error, if any.
 * @param {object} apiResponse The full API response.
 */
export interface ZoneExportCallback {
  (err: Error|null): void;
}

/**
 * A Zone object is used to interact with your project's managed zone. It will
 * help you add or delete records, delete your zone, and many other convenience
 * methods.
 *
 * @class
 *
 * @example
 * const {DNS} = require('@google-cloud/dns');
 * const dns = new DNS();
 *
 * const zone = dns.zone('zone-id');
 */
class Zone extends ServiceObject {
  constructor(dns: DNS, name: string) {
    const methods = {
      /**
       * Create a zone.
       *
       * @method Zone#create
       * @param {CreateZoneRequest} metadata Metadata to set for the zone.
       * @param {CreateZoneCallback} [callback] Callback function.
       * @returns {Promise<CreateZoneResponse>}
       *
       * @example
       * const {DNS} = require('@google-cloud/dns');
       * const dns = new DNS();
       *
       * const config = {
       *   dnsName: 'example.com.',
       *   // ...
       * };
       *
       * zone.create(config, (err, zone, apiResponse) => {
       *   if (!err) {
       *     // The zone was created successfully.
       *   }
       * });
       *
       * //-
       * // If the callback is omitted, we'll return a Promise.
       * //-
       * zone.create(config).then((data) => {
       *   const zone = data[0];
       *   const apiResponse = data[1];
       * });
       */
      create: true,
      /**
       * @typedef {array} ZoneExistsResponse
       * @property {boolean} 0 Whether the {@link Zone} exists.
       */
      /**
       * @callback ZoneExistsCallback
       * @param {?Error} err Request error, if any.
       * @param {boolean} exists Whether the {@link Zone} exists.
       */
      /**
       * Check if the zone exists.
       *
       * @method Zone#exists
       * @param {ZoneExistsCallback} [callback] Callback function.
       * @returns {Promise<ZoneExistsResponse>}
       *
       * @example
       * const {DNS} = require('@google-cloud/dns');
       * const dns = new DNS();
       * const zone = dns.zone('zone-id');
       *
       * zone.exists((err, exists) => {});
       *
       * //-
       * // If the callback is omitted, we'll return a Promise.
       * //-
       * zone.exists().then((data) => {
       *   const exists = data[0];
       * });
       */
      exists: true,
      /**
       * @typedef {array} GetZoneResponse
       * @property {Zone} 0 The {@link Zone}.
       * @property {object} 1 The full API response.
       */
      /**
       * @callback GetZoneCallback
       * @param {?Error} err Request error, if any.
       * @param {Zone} zone The {@link Zone}.
       * @param {object} apiResponse The full API response.
       */
      /**
       * Get a zone if it exists.
       *
       * You may optionally use this to "get or create" an object by providing
       * an object with `autoCreate` set to `true`. Any extra configuration that
       * is normally required for the `create` method must be contained within
       * this object as well.
       *
       * @method Zone#get
       * @param {options} [options] Configuration object.
       * @param {boolean} [options.autoCreate=false] Automatically create the
       *     object if it does not exist.
       * @param {GetZoneCallback} [callback] Callback function.
       * @returns {Promise<GetZoneResponse>}
       *
       * @example
       * const {DNS} = require('@google-cloud/dns');
       * const dns = new DNS();
       * const zone = dns.zone('zone-id');
       *
       * zone.get((err, zone, apiResponse) => {
       *   // `zone.metadata` has been populated.
       * });
       *
       * //-
       * // If the callback is omitted, we'll return a Promise.
       * //-
       * zone.get().then(data => {
       *   const zone = data[0];
       *   const apiResponse = data[1];
       * });
       */
      get: true,
      /**
       * @typedef {array} GetZoneMetadataResponse
       * @property {object} 0 The {@link Zone} metadata.
       * @property {object} 1 The full API response.
       */
      /**
       * @callback GetZoneMetadataCallback
       * @param {?Error} err Request error, if any.
       * @param {object} metadata The {@link Zone} metadata.
       * @param {object} apiResponse The full API response.
       */
      /**
       * Get the metadata for the zone.
       *
       * @see [ManagedZones: get API Documentation]{@link https://cloud.google.com/dns/api/v1/managedZones/get}
       *
       * @method Zone#getMetadata
       * @param {GetZoneMetadataCallback} [callback] Callback function.
       * @returns {Promise<GetZoneMetadataResponse>}
       *
       * @example
       * const {DNS} = require('@google-cloud/dns');
       * const dns = new DNS();
       * const zone = dns.zone('zone-id');
       *
       * zone.getMetadata((err, metadata, apiResponse) => {});
       *
       * //-
       * // If the callback is omitted, we'll return a Promise.
       * //-
       * zone.getMetadata().then((data) => {
       *   const metadata = data[0];
       *   const apiResponse = data[1];
       * });
       */
      getMetadata: true,
    };
    /**
     * @name Zone#metadata
     * @type {object}
     */
    super({
      parent: dns,
      /**
       * @name Zone#baseUrl
       * @type {string}
       * @default "/managedZones"
       */
      baseUrl: '/managedZones',
      /**
       * @name Zone#id
       * @type {string}
       */
      id: name,
      createMethod: dns.createZone.bind(dns),
      methods,
      requestModule: teenyRequest as typeof r,
    });
    /**
     * @name Zone#name
     * @type {string}
     */
    this.name = name;
  }

  /**
   * Add records to this zone. This is a convenience wrapper around
   * {@link Zone#createChange}.
   *
   * @see [ManagedZones: create API Documentation]{@link https://cloud.google.com/dns/api/v1/managedZones/create}
   *
   * @param {Record|Record[]} record The {@link Record} object(s) to add.
   * @param {CreateChangeCallback} [callback] Callback function.
   * @returns {Promise<CreateChangeResponse>}
   */
  addRecords(records: Record|Record[]): Promise<CreateChangeResponse>;
  addRecords(records: Record|Record[], callback: CreateChangeCallback): void;
  addRecords(records: Record|Record[], callback?: CreateChangeCallback):
      void|Promise<CreateChangeResponse> {
    this.createChange({add: records}, callback!);
  }
  /**
   * Create a reference to a {@link Change} object in this zone.
   *
   * @param {string} id The change id.
   * @returns {Change}
   *
   * @example
   * const {DNS} = require('@google-cloud/dns');
   * const dns = new DNS();
   * const zone = dns.zone('zone-id');
   * const change = zone.change('change-id');
   */
  change(id?: string) {
    return new Change(this, id);
  }

  /**
   * Create a change of resource record sets for the zone.
   *
   * @see [ManagedZones: create API Documentation]{@link https://cloud.google.com/dns/api/v1/managedZones/create}
   *
   * @param {CreateChangeRequest} config The configuration object.
   * @param {CreateChangeCallback} [callback] Callback function.
   * @returns {Promise<CreateChangeResponse>}
   *
   * @example
   * const {DNS} = require('@google-cloud/dns');
   * const dns = new DNS();
   * const zone = dns.zone('zone-id');
   *
   * const oldARecord = zone.record('a', {
   *   name: 'example.com.',
   *   data: '1.2.3.4',
   *   ttl: 86400
   * });
   *
   * const newARecord = zone.record('a', {
   *   name: 'example.com.',
   *   data: '5.6.7.8',
   *   ttl: 86400
   * });
   *
   * const config = {
   *   add: newARecord,
   *   delete: oldARecord
   * };
   *
   * zone.createChange(config, (err, change, apiResponse) => {
   *   if (!err) {
   *     // The change was created successfully.
   *   }
   * });
   *
   * //-
   * // If the callback is omitted, we'll return a Promise.
   * //-
   * zone.createChange(config).then((data) => {
   *   const change = data[0];
   *   const apiResponse = data[1];
   * });
   */
  createChange(config: CreateChangeRequest): Promise<CreateChangeResponse>;
  createChange(config: CreateChangeRequest, callback: CreateChangeCallback):
      void;
  createChange(config: CreateChangeRequest, callback?: CreateChangeCallback):
      void|Promise<CreateChangeResponse> {
    if (!config || (!config.add && !config.delete)) {
      throw new Error('Cannot create a change with no additions or deletions.');
    }
    const groupByType = (recordsIn: RecordObject[]) => {
      const recordsByType = groupBy(recordsIn, 'type');
      const recordsOut: RecordObject[] = [];
      // tslint:disable-next-line:forin
      for (const recordType in recordsByType) {
        const recordsByName = groupBy(recordsByType[recordType], 'name');
        // tslint:disable-next-line:forin
        for (const recordName in recordsByName) {
          const records = recordsByName[recordName];
          const templateRecord = extend({}, records[0]);
          if (records.length > 1) {
            // Combine the `rrdatas` values from all records of the same type.
            templateRecord.rrdatas =
                flatten(records.map((x: RecordObject) => x.rrdatas));
          }
          recordsOut.push(templateRecord);
        }
      }
      return recordsOut;
    };
    const body = extend(
        {
          additions: groupByType(arrify(config.add).map(x => x.toJSON())),
          deletions: groupByType(arrify(config.delete).map(x => x.toJSON())),
        },
        config);
    delete body.add;
    delete body.delete;
    this.request(
        {
          method: 'POST',
          uri: '/changes',
          json: body,
        },
        (err, resp) => {
          if (err) {
            callback!(err, null, resp);
            return;
          }
          const change = this.change(resp.id);
          change.metadata = resp;
          callback!(null, change, resp);
        });
  }

  /**
   * Delete the zone.
   *
   * Only empty zones can be deleted. Set `options.force` to `true` to call
   * {@link Zone#empty} before deleting the zone. Two API calls will then be
   * made (one to empty, another to delete), which means <strong> this is not an
   * atomic request</strong>.
   *
   * @see [ManagedZones: delete API Documentation]{@link https://cloud.google.com/dns/api/v1/managedZones/delete}
   *
   * @param {object} [options] Configuration object.
   * @param {boolean} [options.force=false] Empty the zone before deleting.
   * @param {DeleteZoneCallback} [callback] Callback function.
   * @returns {Promise<DeleteZoneResponse>}
   *
   * @example
   * const {DNS} = require('@google-cloud/dns');
   * const dns = new DNS();
   * const zone = dns.zone('zone-id');
   *
   * zone.delete((err, apiResponse) => {
   *   if (!err) {
   *     // The zone is now deleted.
   *   }
   * });
   *
   * //-
   * // Use `force` to first empty the zone before deleting it.
   * //-
   * zone.delete({
   *   force: true
   * }, (err, apiResponse) => {
   *   if (!err) {
   *     // The zone is now deleted.
   *   }
   * });
   *
   * //-
   * // If the callback is omitted, we'll return a Promise.
   * //-
   * zone.delete().then(data => {
   *   const apiResponse = data[0];
   * });
   */
  delete(options?: DeleteZoneConfig): Promise<DeleteZoneResponse>;
  delete(callback: DeleteZoneCallback): void;
  delete(options: DeleteZoneConfig, callback: DeleteZoneCallback): void;
  delete(
      optionsOrCallback?: DeleteZoneConfig|DeleteZoneCallback,
      callback?: DeleteZoneCallback): void|Promise<DeleteZoneResponse> {
    const options =
        typeof optionsOrCallback === 'object' ? optionsOrCallback : {};
    callback =
        typeof optionsOrCallback === 'function' ? optionsOrCallback : callback;
    if (options.force) {
      this.empty(this.delete.bind(this, callback));
      return;
    }
    super.delete(callback!);
  }

  /**
   * Delete records from this zone. This is a convenience wrapper around
   * {@link Zone#createChange}.
   *
   * This method accepts {@link Record} objects or string record types in
   * its place. This means that you can delete all A records or NS records, etc.
   * If used this way, two API requests are made (one to get, then another to
   * delete), which means **the operation is not atomic** and could result in
   * unexpected changes.
   *
   * @see [ManagedZones: create API Documentation]{@link https://cloud.google.com/dns/api/v1/managedZones/create}
   *
   * @param {Record|Record[]|string} record If given a string, it is interpreted
   *     as a record type. All records that match that type will be retrieved
   * and then deleted. You can also provide a {@link Record} object or array of
   *     {@link Record} objects.
   * @param {CreateChangeCallback} [callback] Callback function.
   * @returns {Promise<CreateChangeResponse>}
   *
   * @example
   * const {DNS} = require('@google-cloud/dns');
   * const dns = new DNS();
   * const zone = dns.zone('zone-id');
   *
   * const oldARecord = zone.record('a', {
   *   name: 'example.com.',
   *   data: '1.2.3.4',
   *   ttl: 86400
   * });
   *
   * const callback = (err, change, apiResponse) => {
   *   if (!err) {
   *     // Delete change modification was created.
   *   }
   * };
   *
   * zone.deleteRecords(oldARecord, callback);
   *
   * //-
   * // Delete multiple records at once.
   * //-
   * const oldNs1Record = zone.record('ns', {
   *   name: 'example.com.',
   *   data: 'ns-cloud1.googledomains.com.',
   *   ttl: 86400
   * });
   *
   * const oldNs2Record = zone.record('ns', {
   *   name: 'example.com.',
   *   data: 'ns-cloud2.googledomains.com.',
   *   ttl: 86400
   * });
   *
   * zone.deleteRecords([
   *   oldNs1Record,
   *   oldNs2Record
   * ], callback);
   *
   * //-
   * // Possibly a simpler way to perform the above change is deleting records
   * by
   * // type.
   * //-
   * zone.deleteRecords('ns', callback);
   *
   * //-
   * // You can also delete records of multiple types.
   * //-
   * zone.deleteRecords(['ns', 'a'], callback);
   *
   * //-
   * // If the callback is omitted, we'll return a Promise.
   * //-
   * zone.deleteRecords(oldARecord).then((data) => {
   *   const change = data[0];
   *   const apiResponse = data[1];
   * });
   */
  deleteRecords(records?: Record|Record[]|
                string): Promise<CreateChangeResponse>;
  deleteRecords(callback: CreateChangeCallback): void;
  deleteRecords(
      records: Record|Record[]|string, callback: CreateChangeCallback): void;
  deleteRecords(
      recordsOrCallback?: Record|Record[]|string|CreateChangeCallback,
      callback?: CreateChangeCallback): void|Promise<CreateChangeResponse> {
    let records: Array<Record|string>;
    if (typeof recordsOrCallback === 'function') {
      callback = recordsOrCallback;
      records = [];
    } else {
      records = arrify<Record|string>(recordsOrCallback);
    }

    if (is.string(records[0])) {
      this.deleteRecordsByType_(records as string[], callback!);
      return;
    }
    this.createChange({delete: records as Record[]}, callback!);
  }
  /**
   * Emptying your zone means leaving only 'NS' and 'SOA' records. This method
   * will first fetch the non-NS and non-SOA records from your zone using
   * {@link Zone#getRecords}, then use {@link Zone#createChange} to
   * create a deletion change.
   *
   * @see [ManagedZones: create API Documentation]{@link https://cloud.google.com/dns/api/v1/managedZones/create}
   *
   * @param {CreateChangeCallback} [callback] Callback function.
   * @returns {Promise<CreateChangeResponse>}
   */
  empty(): Promise<CreateChangeResponse|[]>;
  empty(callback: CreateChangeCallback): void;
  empty(callback?: CreateChangeCallback):
      void|Promise<CreateChangeResponse|[]> {
    this.getRecords((err, records) => {
      if (err) {
        callback!(err);
        return;
      }
      const recordsToDelete = records!.filter(record => {
        return record.type !== 'NS' && record.type !== 'SOA';
      });
      if (recordsToDelete.length === 0) {
        callback!(null);
      } else {
        this.deleteRecords(recordsToDelete, callback!);
      }
    });
  }
  /**
   * Provide a path to a zone file to copy records into the zone.
   *
   * @see [ResourceRecordSets: list API Documentation]{@link https://cloud.google.com/dns/api/v1/resourceRecordSets/list}
   *
   * @param {string} localPath The fully qualified path to the zone file.
   * @param {ZoneExportCallback} [callback] Callback function.
   * @returns {Promise<ZoneExportResponse>}
   *
   * @example
   * const {DNS} = require('@google-cloud/dns');
   * const dns = new DNS();
   * const zone = dns.zone('zone-id');
   *
   * const zoneFilename = '/Users/stephen/zonefile.zone';
   *
   * zone.export(zoneFilename, err => {
   *   if (!err) {
   *     // The zone file was created successfully.
   *   }
   * });
   *
   * //-
   * // If the callback is omitted, we'll return a Promise.
   * //-
   * zone.export(zoneFilename).then(() => {});
   */
  export(localPath: string): Promise<ZoneExportResponse>;
  export(localPath: string, callback: ZoneExportCallback): void;
  export(localPath: string, callback?: ZoneExportCallback):
      void|Promise<ZoneExportResponse> {
    this.getRecords((err, records) => {
      if (err) {
        callback!(err);
        return;
      }
      const stringRecords = records!.map(x => x.toString()).join('\n');
      fs.writeFile(localPath, stringRecords, 'utf-8', err => {
        callback!(err || null);
      });
    });
  }
  /**
   * Get the list of changes associated with this zone. A change is an atomic
   * update to a collection of records.
   *
   * @see [Changes: get API Documentation]{@link https://cloud.google.com/dns/api/v1/changes/get}
   *
   * @param {GetChangesRequest} [query] Query object for listing changes.
   * @param {GetChangesCallback} [callback] Callback function.
   * @returns {Promise<GetChangesResponse>}
   *
   * @example
   * const {DNS} = require('@google-cloud/dns');
   * const dns = new DNS();
   *
   * const callback = (err, changes, nextQuery, apiResponse) => {
   *   // The `metadata` property is populated for you with the metadata at the
   *   // time of fetching.
   *   changes[0].metadata;
   *
   *   // However, in cases where you are concerned the metadata could have
   *   // changed, use the `getMetadata` method.
   *   changes[0].getMetadata((err, metadata) => {});
   *   if (nextQuery) {
   *     // nextQuery will be non-null if there are more results.
   *     zone.getChanges(nextQuery, callback);
   *   }
   * };
   *
   * const zone = dns.zone('zone-id');
   *
   * zone.getChanges(callback);
   *
   * //-
   * // If the callback is omitted, we'll return a Promise.
   * //-
   * zone.getChanges().then((data) => {
   *   const changes = data[0];
   * });
   */
  getChanges(query?: GetChangesRequest): Promise<GetChangesResponse>;
  getChanges(callback: GetChangesCallback): void;
  getChanges(query: GetChangesRequest, callback: GetChangesCallback): void;
  getChanges(
      queryOrCallback?: GetChangesRequest|GetChangesCallback,
      callback?: GetChangesCallback): void|Promise<GetChangesResponse> {
    let query = queryOrCallback as GetChangesRequest;
    if (typeof query === 'function') {
      callback = query;
      query = {};
    }
    if (query.sort) {
      query.sortOrder = query.sort === 'asc' ? 'ascending' : 'descending';
      delete query.sort;
    }
    this.request(
        {
          uri: '/changes',
          qs: query,
        },
        (err, resp) => {
          if (err) {
            callback!(err, null, null, resp);
            return;
          }
          const changes = (resp.changes || []).map((change: Change) => {
            const changeInstance = this.change(change.id);
            changeInstance.metadata = change;
            return changeInstance;
          });
          let nextQuery = null;
          if (resp.nextPageToken) {
            nextQuery = extend({}, query, {
              pageToken: resp.nextPageToken,
            });
          }
          callback!(null, changes, nextQuery, resp);
        });
  }
  /**
   * Query object for listing records.
   *
   * @typedef {object} GetRecordsRequest
   * @property {boolean} [autoPaginate=true] Have pagination handled automatically.
   * @property {number} [maxApiCalls] Maximum number of API calls to make.
   * @property {number} [maxResults] Maximum number of items plus prefixes to
   *     return.
   * @property {string} [name] Restricts the list to return only records with this
   *     fully qualified domain name.
   * @property {string} [pageToken] A previously-returned page token
   *     representing part of the larger set of results to view.
   * @property {string} [type] Restricts the list to return only records of this
   *     type. If present, the "name" parameter must also be present.
   */
  /**
   * @typedef {array} GetRecordsResponse
   * @property {Record[]} 0 Array of {@link Record} instances.
   * @property {object} 1 The full API response.
   */
  /**
   * @callback GetRecordsCallback
   * @param {?Error} err Request error, if any.
   * @param {Record[]} records Array of {@link Record} instances.
   * @param {object} apiResponse The full API response.
   */
  /**
   * Get the list of records for this zone.
   *
   * @see [ResourceRecordSets: list API Documentation]{@link https://cloud.google.com/dns/api/v1/resourceRecordSets/list}
   *
   * @param {GetRecordsRequest} [query] Query object for listing records.
   * @param {GetRecordsCallback} [callback] Callback function.
   * @returns {Promise<GetRecordsResponse>}
   *
   * @example
   * const {DNS} = require('@google-cloud/dns');
   * const dns = new DNS();
   *
   * const callback = (err, records, nextQuery, apiResponse) => {
   *   if (!err) {
   *     // records is an array of Record objects.
   *   }
   *
   *   if (nextQuery) {
   *     zone.getRecords(nextQuery, callback);
   *   }
   * };
   *
   * const zone = dns.zone('zone-id');
   *
   * zone.getRecords(callback);
   *
   * //-
   * // Provide a query for further customization.
   * //-
   *
   * // Get the namespace records for example.com.
   * const query = {
   *   name: 'example.com.',
   *   type: 'NS'
   * };
   *
   * zone.getRecords(query, callback);
   *
   * //-
   * // If you only want records of a specific type or types, provide them in
   * // place of the query object.
   * //-
   * zone.getRecords('ns', (err, records) => {
   *   if (!err) {
   *     // records is an array of NS Record objects in your zone.
   *   }
   * });
   *
   * //-
   * // You can also specify multiple record types.
   * //-
   * zone.getRecords(['ns', 'a', 'cname'], (err, records) => {
   *   if (!err) {
   *     // records is an array of NS, A, and CNAME records in your zone.
   *   }
   * });
   *
   * //-
   * // If the callback is omitted, we'll return a Promise.
   * //-
   * zone.getRecords(query).then(data => {
   *   const records = data[0];
   * });
   */
  getRecords(query?: GetRecordsRequest|string|
             string[]): Promise<GetRecordsResponse>;
  getRecords(callback: GetRecordsCallback): void;
  getRecords(
      query: GetRecordsRequest|string|string[],
      callback: GetRecordsCallback): void;
  getRecords(
      queryOrCallback?: GetRecordsRequest|GetRecordsCallback|string|string[],
      callback?: GetRecordsCallback): void|Promise<GetRecordsResponse> {
    let query: string|string[]|GetRecordsRequest;
    if (typeof queryOrCallback === 'function') {
      callback = queryOrCallback;
      query = [];
    } else {
      query = queryOrCallback!;
    }

    if (is.string(query) || is.array(query)) {
      const filterByTypes_: {[index: string]: boolean} = {};
      // For faster lookups, store the record types the user wants in an object.
      arrify(query as string).forEach(type => {
        filterByTypes_[type.toUpperCase()] = true;
      });
      query = {
        filterByTypes_,
      };
    }
    const requestQuery = extend({}, query) as GetRecordsRequest;
    delete requestQuery.filterByTypes_;
    this.request(
        {
          uri: '/rrsets',
          qs: requestQuery,
        },
        (err, resp) => {
          if (err) {
            callback!(err, null, null, resp);
            return;
          }
          let records = (resp.rrsets || []).map((record: RecordMetadata) => {
            return this.record(record.type!, record);
          });
          if ((query as GetRecordsRequest).filterByTypes_) {
            records = records.filter((record: RecordMetadata) => {
              return (query as GetRecordsRequest).filterByTypes_![record.type!];
            });
          }
          let nextQuery: {}|null = null;
          if (resp.nextPageToken) {
            nextQuery = extend({}, query, {
              pageToken: resp.nextPageToken,
            });
          }
          callback!(null, records, nextQuery, resp);
        });
  }
/**
 * Copy the records from a zone file into this zone.
 *
 * @see [ManagedZones: create API Documentation]{@link https://cloud.google.com/dns/api/v1/managedZones/create}
 *
 * @param {string} localPath The fully qualified path to the zone file.
 * @param {CreateChangeCallback} [callback] Callback function.
 * @returns {Promise<CreateChangeResponse>}
 * @example
 * const {DNS} = require('@google-cloud/dns');
 * const dns = new DNS();
 * const zone = dns.zone('zone-id');
 *
 * const zoneFilename = '/Users/dave/zonefile.zone';
 *
 * zone.import(zoneFilename, (err, change, apiResponse) => {
 *   if (!err) {
 *     // The change was created successfully.
 *   }
 * });
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * zone.import(zoneFilename).then(data => {
 *   const change = data[0];
 *   const apiResponse = data[1];
 * });
 */
import(localPath: string): Promise<CreateChangeResponse>;
import(localPath: string, callback: CreateChangeCallback): void;
import(localPath: string, callback?: CreateChangeCallback): void|Promise<CreateChangeResponse> {fs.readFile(localPath, 'utf-8', (err, file) => {
    if (err) {
      callback!(err);
      return;
    }
    const parsedZonefile = zonefile.parse(file);
    const defaultTTL = parsedZonefile.$ttl;
    delete parsedZonefile.$ttl;
    const recordTypes = Object.keys(parsedZonefile);
    const recordsToCreate: Record[] = [];
    recordTypes.forEach(recordType => {
      const recordTypeSet = arrify(parsedZonefile[recordType]);
      recordTypeSet.forEach(record => {
        record.ttl = record.ttl || defaultTTL;
        recordsToCreate.push(Record.fromZoneRecord_(this, recordType, record));
      });
    });
    this.addRecords(recordsToCreate, callback!);
  });}
  /**
   * A {@link Record} object can be used to construct a record you want to
   * add to your zone, or to refer to an existing one.
   *
   * Note that using this method will not itself make any API requests. You will
   * use the object returned in other API calls, for example to add a record to
   * your zone or to delete an existing one.
   *
   * @param {string} type The type of record to construct or the type of record
   *     you are referencing.
   * @param {object} metadata The metadata of this record.
   * @param {string} metadata.name The name of the record, e.g.
   *     `www.example.com.`.
   * @param {string[]} metadata.data Defined in
   *     [RFC 1035, section 5](https://goo.gl/9EiM0e) and
   *     [RFC 1034, section 3.6.1](https://goo.gl/Hwhsu9).
   * @param {number} metadata.ttl Seconds that the resource is cached by
   *     resolvers.
   * @returns {Record}
   *
   * @example
   * const {DNS} = require('@google-cloud/dns');
   * const dns = new DNS();
   *
   * const zone = dns.zone('zone-id');
   *
   * //-
   * // Reference an existing record to delete from your zone.
   * //-
   * const oldARecord = zone.record('a', {
   *   name: 'example.com.',
   *   data: '1.2.3.4',
   *   ttl: 86400
   * });
   *
   * //-
   * // Construct a record to add to your zone.
   * //-
   * const newARecord = zone.record('a', {
   *   name: 'example.com.',
   *   data: '5.6.7.8',
   *   ttl: 86400
   * });
   *
   * //-
   * // Use these records together to create a change.
   * //-
   * zone.createChange({
   *   add: newARecord,
   *   delete: oldARecord
   * }, (err, change, apiResponse) => {});
   */
  record(type: string, metadata: RecordMetadata) {return new Record(this, type, metadata);}

  /**
   * Provide a record type that should be deleted and replaced with other records.
   *
   * **This is not an atomic request.** Two API requests are made
   * (one to get records of the type that you've requested, then another to
   * replace them), which means the operation is not atomic and could result in
   * unexpected changes.
   *
   * @see [ManagedZones: create API Documentation]{@link https://cloud.google.com/dns/api/v1/managedZones/create}
   *
   * @param {string|string[]} recordTypes The type(s) of records to replace.
   * @param {Record|Record[]} newRecords The {@link Record} object(s) to add.
   * @param {CreateChangeCallback} [callback] Callback function.
   * @returns {Promise<CreateChangeResponse>}
   *
   * @example
   * const {DNS} = require('@google-cloud/dns');
   * const dns = new DNS();
   *
   * const zone = dns.zone('zone-id');
   *
   * const newNs1Record = zone.record('ns', {
   *   name: 'example.com.',
   *   data: 'ns-cloud1.googledomains.com.',
   *   ttl: 86400
   * });
   *
   * const newNs2Record = zone.record('ns', {
   *   name: 'example.com.',
   *   data: 'ns-cloud2.googledomains.com.',
   *   ttl: 86400
   * });
   *
   * const newNsRecords = [
   *   newNs1Record,
   *   newNs2Record
   * ];
   *
   * zone.replaceRecords('ns', newNsRecords, (err, change, apiResponse) => {
   *   if (!err) {
   *     // The change was created successfully.
   *   }
   * });
   *
   * //-
   * // If the callback is omitted, we'll return a Promise.
   * //-
   * zone.replaceRecords('ns', newNsRecords).then(data => {
   *   const change = data[0];
   *   const apiResponse = data[1];
   * });
   */
  replaceRecords(recordType: string|string[], newRecords: Record|Record[]): Promise<CreateChangeResponse>;
  replaceRecords(
      recordType: string|string[], newRecords: Record|Record[],
      callback: CreateChangeCallback): void;
  replaceRecords(
      recordType: string|string[], newRecords: Record|Record[],
      callback?: CreateChangeCallback): void|Promise<CreateChangeResponse> {
    this.getRecords(recordType, (err, recordsToDelete) => {
      if (err) {
        callback!(err);
        return;
      }
      this.createChange(
          {
            add: newRecords,
            delete: recordsToDelete!,
          },
          callback!);
    });
  }

  /**
   * Delete records from the zone matching an array of types.
   *
   * @private
   *
   * @param {string[]} recordTypes Types of records to delete. Ex: 'NS', 'A'.
   * @param {function} callback Callback function.
   *
   * @example
   * const {DNS} = require('@google-cloud/dns');
   * const dns = new DNS();
   * const zone = dns.zone('zone-id');
   * zone.deleteRecordsByType_(['NS', 'A'], (err, change, apiResponse) => {
   *   if (!err) {
   *     // The change was created successfully.
   *   }
   * });
   */
  deleteRecordsByType_(recordTypes: string[]): Promise<CreateChangeResponse>;
  deleteRecordsByType_(recordTypes: string[], callback: CreateChangeCallback):
      void;
  deleteRecordsByType_(recordTypes: string[], callback?: CreateChangeCallback):
      void|Promise<CreateChangeResponse> {
    this.getRecords(recordTypes, (err, records) => {
      if (err) {
        callback!(err);
        return;
      }
      if (records!.length === 0) {
        callback!(null);
        return;
      }
      this.deleteRecords(records!, callback!);
    });
  }
}

/**
 * Get the list of {@link Change} objects associated with this zone as a
 * readable object stream.
 *
 * @method Zone#getChangesStream
 * @param {GetChangesRequest} [query] Query object for listing changes.
 * @returns {ReadableStream} A readable stream that emits {@link Change}
 *     instances.
 *
 * @example
 * zone.getChangesStream()
 *   .on('error', console.error)
 *   .on('data', change => {
 *     // change is a Change object.
 *   })
 *   .on('end', () => {
 *     // All changes retrieved.
 *   });
 *
 * //-
 * // If you anticipate many results, you can end a stream early to prevent
 * // unnecessary processing and API requests.
 * //-
 * zone.getChangesStream()
 *   .on('data', function(change) {
 *     this.end();
 *   });
 */
Zone.prototype.getChangesStream = paginator.streamify('getChanges');

/**
 * Get the list of {module:dns/record} objects for this zone as a readable
 * object stream.
 *
 * @method Zone#getRecordsStream
 * @param {GetRecordsRequest} [query] Query object for listing records.
 * @returns {ReadableStream} A readable stream that emits {@link Record}
 *     instances.
 *
 * @example
 * const {DNS} = require('@google-cloud/dns');
 * const dns = new DNS();
 * const zone = dns.zone('zone-id');
 *
 * zone.getRecordsStream()
 *   .on('error', console.error)
 *   .on('data', record => {
 *     // record is a Record object.
 *   })
 *   .on('end', () => {
 *     // All records retrieved.
 *   });
 *
 * //-
 * // If you anticipate many results, you can end a stream early to prevent
 * // unnecessary processing and API requests.
 * //-
 * zone.getRecordsStream()
 *   .on('data', function(change) {
 *     this.end();
 *   });
 */
Zone.prototype.getRecordsStream = paginator.streamify('getRecords');

/*! Developer Documentation
 *
 * These methods can be auto-paginated.
 */
paginator.extend(Zone, ['getChanges', 'getRecords']);

/*! Developer Documentation
 *
 * All async methods (except for streams) will return a Promise in the event
 * that a callback is omitted.
 */
promisifyAll(Zone, {
  exclude: ['change', 'record'],
});

/**
 * Reference to the {@link Zone} class.
 * @name module:@google-cloud/dns.Zone
 * @see Zone
 */
export {Zone};
