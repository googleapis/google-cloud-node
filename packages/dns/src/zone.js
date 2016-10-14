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
 * @module dns/zone
 */

'use strict';

var arrify = require('arrify');
var common = require('@google-cloud/common');
var exec = require('methmeth');
var extend = require('extend');
var fs = require('fs');
var is = require('is');
var util = require('util');
var zonefile = require('dns-zonefile');

/**
 * @type {module:dns/change}
 * @private
 */
var Change = require('./change.js');

/**
 * @type {module:dns/record}
 * @private
 */
var Record = require('./record.js');

/**
 * A Zone object is used to interact with your project's managed zone. It will
 * help you add or delete records, delete your zone, and many other convenience
 * methods.
 *
 * @constructor
 * @alias module:dns/zone
 *
 * @example
 * var zone = dns.zone('zone-id');
 */
function Zone(dns, name) {
  var methods = {
    /**
     * Create a zone.
     *
     * @param {object} config - See {module:dns#createZone}.
     *
     * @example
     * var config = {
     *   dnsName: 'example.com.',
     *   // ...
     * };
     *
     * zone.create(config, function(err, zone, apiResponse) {
     *   if (!err) {
     *     // The zone was created successfully.
     *   }
     * });
     *
     * //-
     * // If the callback is omitted, we'll return a Promise.
     * //-
     * zone.create(config).then(function(data) {
     *   var zone = data[0];
     *   var apiResponse = data[1];
     * });
     */
    create: true,

    /**
     * Check if the zone exists.
     *
     * @param {function} callback - The callback function.
     * @param {?error} callback.err - An error returned while making this
     *     request.
     * @param {boolean} callback.exists - Whether the zone exists or not.
     *
     * @example
     * zone.exists(function(err, exists) {});
     *
     * //-
     * // If the callback is omitted, we'll return a Promise.
     * //-
     * zone.exists().then(function(data) {
     *   var exists = data[0];
     * });
     */
    exists: true,

    /**
     * Get a zone if it exists.
     *
     * You may optionally use this to "get or create" an object by providing an
     * object with `autoCreate` set to `true`. Any extra configuration that is
     * normally required for the `create` method must be contained within this
     * object as well.
     *
     * @param {options=} options - Configuration object.
     * @param {boolean} options.autoCreate - Automatically create the object if
     *     it does not exist. Default: `false`
     *
     * @example
     * zone.get(function(err, zone, apiResponse) {
     *   // `zone.metadata` has been populated.
     * });
     *
     * //-
     * // If the callback is omitted, we'll return a Promise.
     * //-
     * zone.get().then(function(data) {
     *   var zone = data[0];
     *   var apiResponse = data[1];
     * });
     */
    get: true,

    /**
     * Get the metadata for the zone.
     *
     * @resource [ManagedZones: get API Documentation]{@link https://cloud.google.com/dns/api/v1/managedZones/get}
     *
     * @param {function} callback - The callback function.
     * @param {?error} callback.err - An API error.
     * @param {?object} callback.metadata - Metadata of the zone from the API.
     * @param {object} callback.apiResponse - Raw API response.
     *
     * @example
     * zone.getMetadata(function(err, metadata, apiResponse) {});
     *
     * //-
     * // If the callback is omitted, we'll return a Promise.
     * //-
     * zone.getMetadata().then(function(data) {
     *   var metadata = data[0];
     *   var apiResponse = data[1];
     * });
     */
    getMetadata: true
  };

  common.ServiceObject.call(this, {
    parent: dns,
    baseUrl: '/managedZones',
    id: name,
    createMethod: dns.createZone.bind(dns),
    methods: methods
  });

  this.name = name;
}

util.inherits(Zone, common.ServiceObject);

/**
 * Add records to this zone. This is a convenience wrapper around
 * {module:dns/zone#createChange}.
 *
 * @resource [ManagedZones: create API Documentation]{@link https://cloud.google.com/dns/api/v1/managedZones/create}
 *
 * @param {module:dns/record|module:dns/record[]} record - The record objects to
 *     add.
 * @param {?error} callback.err - An API error.
 * @param {?module:dns/change} callback.change - A {module:dns/change} object.
 * @param {object} callback.apiResponse - Raw API response.
 */
Zone.prototype.addRecords = function(records, callback) {
  this.createChange({
    add: records
  }, callback);
};

/**
 * Create a reference to a change object in this zone.
 *
 * @param {string} id - The change id.
 * @return {module:dns/change}
 *
 * @example
 * var change = zone.change('change-id');
 */
Zone.prototype.change = function(id) {
  return new Change(this, id);
};

/**
 * Create a change of resource record sets for the zone.
 *
 * @resource [ManagedZones: create API Documentation]{@link https://cloud.google.com/dns/api/v1/managedZones/create}
 *
 * @param {object} config - The configuration object.
 * @param {module:dns/record|module:dns/record[]} config.add - Record objects
 *     to add to this zone.
 * @param {module:dns/record|module:dns/record[]} config.delete - Record
 *     objects to delete from this zone. Be aware that the resource records here
 *     must match exactly to be deleted.
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An API error.
 * @param {?module:dns/change} callback.change - A {module:dns/change} object.
 * @param {object} callback.apiResponse - Raw API response.
 *
 * @example
 * var oldARecord = zone.record('a', {
 *   name: 'example.com.',
 *   data: '1.2.3.4',
 *   ttl: 86400
 * });
 *
 * var newARecord = zone.record('a', {
 *   name: 'example.com.',
 *   data: '5.6.7.8',
 *   ttl: 86400
 * });
 *
 * var config = {
 *   add: newARecord,
 *   delete: oldARecord
 * };
 *
 * zone.createChange(config, function(err, change, apiResponse) {
 *   if (!err) {
 *     // The change was created successfully.
 *   }
 * });
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * zone.createChange(config).then(function(data) {
 *   var change = data[0];
 *   var apiResponse = data[1];
 * });
 */
Zone.prototype.createChange = function(config, callback) {
  var self = this;

  if (!config || !config.add && !config.delete) {
    throw new Error('Cannot create a change with no additions or deletions.');
  }

  var body = extend({}, config, {
    additions: arrify(config.add).map(exec('toJSON')),
    deletions: arrify(config.delete).map(exec('toJSON'))
  });

  delete body.add;
  delete body.delete;

  this.request({
    method: 'POST',
    uri: '/changes',
    json: body
  }, function(err, resp) {
    if (err) {
      callback(err, null, resp);
      return;
    }

    var change = self.change(resp.id);
    change.metadata = resp;

    callback(null, change, resp);
  });
};

/**
 * Delete the zone.
 *
 * Only empty zones can be deleted. Set options.force to `true` to call
 * {module:dns/zone#empty} before deleting the zone. Two API calls will then be
 * made (one to empty, another to delete), which means <strong> this is not an
 * atomic request</strong>.
 *
 * @resource [ManagedZones: delete API Documentation]{@link https://cloud.google.com/dns/api/v1/managedZones/delete}
 *
 * @param {object=} options - Configuration object.
 * @param {boolean} options.force - Empty the zone before deleting.
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An API error.
 * @param {object} callback.apiResponse - Raw API response.
 *
 * @example
 * zone.delete(function(err, apiResponse) {
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
 * }, function(err, apiResponse) {
 *   if (!err) {
 *     // The zone is now deleted.
 *   }
 * });
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * zone.delete().then(function(data) {
 *   var apiResponse = data[0];
 * });
 */
Zone.prototype.delete = function(options, callback) {
  if (is.fn(options)) {
    callback = options;
    options = {};
  }

  if (options.force) {
    this.empty(this.delete.bind(this, callback));
    return;
  }

  common.ServiceObject.prototype.delete.call(this, callback);
};

/**
 * Delete records from this zone. This is a convenience wrapper around
 * {module:dns/zone#createChange}.
 *
 * This method accepts {module:dns/record} objects or string record types in
 * its place. This means that you can delete all A records or NS records, etc.
 * If used this way, two API requests are made (one to get, then another to
 * delete), which means <strong>the operation is not atomic</strong> and could
 * result in unexpected changes.
 *
 * @resource [ManagedZones: create API Documentation]{@link https://cloud.google.com/dns/api/v1/managedZones/create}
 *
 * @param {module:dns/record|module:dns/record[]|string} record - If given a
 *     string, it is interpreted as a record type. All records that match that
 *     type will be retrieved and then deleted. You can also provide a
 *     {module:dns/record} object or array of objects.
 * @param {?error} callback.err - An API error.
 * @param {?module:dns/change} callback.change - A {module:dns/change} object.
 * @param {object} callback.apiResponse - Raw API response.
 *
 * @example
 * var oldARecord = zone.record('a', {
 *   name: 'example.com.',
 *   data: '1.2.3.4',
 *   ttl: 86400
 * });
 *
 * var callback = function(err, change, apiResponse) {
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
 * var oldNs1Record = zone.record('ns', {
 *   name: 'example.com.',
 *   data: 'ns-cloud1.googledomains.com.',
 *   ttl: 86400
 * });
 *
 * var oldNs2Record = zone.record('ns', {
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
 * // Possibly a simpler way to perform the above change is deleting records by
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
 * zone.deleteRecords(oldARecord).then(function(data) {
 *   var change = data[0];
 *   var apiResponse = data[1];
 * });
 */
Zone.prototype.deleteRecords = function(records, callback) {
  records = arrify(records);

  if (is.string(records[0])) {
    this.deleteRecordsByType_(records, callback);
    return;
  }

  this.createChange({
    delete: records
  }, callback);
};

/**
 * Emptying your zone means leaving only 'NS' and 'SOA' records. This method
 * will first fetch the non-NS and non-SOA records from your zone using
 * {module:dns/zone#getRecords}, then use {module:dns/zone#createChange} to
 * create a deletion change.
 *
 * @resource [ManagedZones: create API Documentation]{@link https://cloud.google.com/dns/api/v1/managedZones/create}
 *
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An API error.
 * @param {?module:dns/change} callback.change - A {module:dns/change} object.
 * @param {object} callback.apiResponse - Raw API response.
 */
Zone.prototype.empty = function(callback) {
  var self = this;

  this.getRecords(function(err, records) {
    if (err) {
      callback(err);
      return;
    }

    var recordsToDelete = records.filter(function(record) {
      return record.type !== 'NS' && record.type !== 'SOA';
    });

    if (recordsToDelete.length === 0) {
      callback();
    } else {
      self.deleteRecords(recordsToDelete, callback);
    }
  });
};

/**
 * Provide a path to a zone file to copy records into the zone.
 *
 * @resource [ResourceRecordSets: list API Documentation]{@link https://cloud.google.com/dns/api/v1/resourceRecordSets/list}
 *
 * @param {string} localPath - The fully qualified path to the zone file.
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An API or file system error.
 *
 * @example
 * var zoneFilename = '/Users/stephen/zonefile.zone';
 *
 * zone.export(zoneFilename, function(err) {
 *   if (!err) {
 *     // The zone file was created successfully.
 *   }
 * });
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * zone.export(zoneFilename).then(function() {});
 */
Zone.prototype.export = function(localPath, callback) {
  this.getRecords(function(err, records) {
    if (err) {
      callback(err);
      return;
    }

    var stringRecords = records.map(exec('toString')).join('\n');

    fs.writeFile(localPath, stringRecords, 'utf-8', function(err) {
      callback(err || null);
    });
  });
};

/**
 * Get the list of changes associated with this zone. A change is an atomic
 * update to a collection of records.
 *
 * @resource [Changes: get API Documentation]{@link https://cloud.google.com/dns/api/v1/changes/get}
 *
 * @param {object=} query - The query object.
 * @param {boolean} query.autoPaginate - Have pagination handled automatically.
 *     Default: true.
 * @param {number} query.maxApiCalls - Maximum number of API calls to make.
 * @param {number} query.maxResults - Maximum number of results to return.
 * @param {string} query.pageToken - The page token.
 * @param {string} query.sort - Set to 'asc' for ascending, and 'desc' for
 *     descending or omit for no sorting.
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An API error.
 * @param {?module:dns/change[]} callback.changes - An array of
 *     {module:dns/change} objects.
 * @param {object} callback.apiResponse - Raw API response.
 *
 * @example
 * var callback = function(err, changes, nextQuery, apiResponse) {
 *   // The `metadata` property is populated for you with the metadata at the
 *   // time of fetching.
 *   changes[0].metadata;
 *
 *   // However, in cases where you are concerned the metadata could have
 *   // changed, use the `getMetadata` method.
 *   changes[0].getMetadata(function(err, metadata) {});

 *   if (nextQuery) {
 *     // nextQuery will be non-null if there are more results.
 *     zone.getChanges(nextQuery, callback);
 *   }
 * };
 *
 * zone.getChanges(callback);
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * zone.getChanges().then(function(data) {
 *   var changes = data[0];
 * });
 */
Zone.prototype.getChanges = function(query, callback) {
  var self = this;

  if (is.fn(query)) {
    callback = query;
    query = {};
  }

  if (query.sort) {
    query.sortOrder = query.sort === 'asc' ? 'ascending' : 'descending';
    delete query.sort;
  }

  this.request({
    uri: '/changes',
    qs: query
  }, function(err, resp) {
    if (err) {
      callback(err, null, null, resp);
      return;
    }

    var changes = (resp.changes || []).map(function(change) {
      var changeInstance = self.change(change.id);
      changeInstance.metadata = change;
      return changeInstance;
    });

    var nextQuery = null;
    if (resp.nextPageToken) {
      nextQuery = extend({}, query, {
        pageToken: resp.nextPageToken
      });
    }

    callback(null, changes, nextQuery, resp);
  });
};

/**
 * Get the list of {module:dns/change} objects associated with this zone as a
 * readable object stream.
 *
 * @param {object=} query - Configuration object. See
 *     {module:dns/zone#getChanges} for a complete list of options.
 * @return {stream}
 *
 * @example
 * zone.getChangesStream()
 *   .on('error', console.error)
 *   .on('data', function(change) {
 *     // change is a Change object.
 *   })
 *   .on('end', function() {
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
Zone.prototype.getChangesStream = common.paginator.streamify('getChanges');

/**
 * Get the list of records for this zone.
 *
 * @resource [ResourceRecordSets: list API Documentation]{@link https://cloud.google.com/dns/api/v1/resourceRecordSets/list}
 *
 * @param {object=} query - The query object.
 * @param {boolean} query.autoPaginate - Have pagination handled automatically.
 *     Default: true.
 * @param {number} query.maxApiCalls - Maximum number of API calls to make.
 * @param {number} query.maxResults - Maximum number of results to be returned.
 * @param {string} query.name - Restricts the list to return only records with
 *     this fully qualified domain name.
 * @param {string} query.pageToken - The page token.
 * @param {string} query.type - Restricts the list to return only records of
 *     this type. If present, the "name" parameter must also be present.
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An API error.
 * @param {?module:dns/record[]} callback.records - An array of
 *     {module:dns/record} objects.
 * @param {object} callback.apiResponse - Raw API response.
 *
 * @example
 * var callback = function(err, records, nextQuery, apiResponse) {
 *   if (!err) {
 *     // records is an array of Record objects.
 *   }
 *
 *   if (nextQuery) {
 *     zone.getRecords(nextQuery, callback);
 *   }
 * };
 *
 * zone.getRecords(callback);
 *
 * //-
 * // Provide a query for further customization.
 * //-
 *
 * // Get the namespace records for example.com.
 * var query = {
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
 * zone.getRecords('ns', function(err, records) {
 *   if (!err) {
 *     // records is an array of NS Record objects in your zone.
 *   }
 * });
 *
 * //-
 * // You can also specify multiple record types.
 * //-
 * zone.getRecords(['ns', 'a', 'cname'], function(err, records) {
 *   if (!err) {
 *     // records is an array of NS, A, and CNAME records in your zone.
 *   }
 * });
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * zone.getRecords(query).then(function(data) {
 *   var records = data[0];
 * });
 */
Zone.prototype.getRecords = function(query, callback) {
  var self = this;

  if (is.fn(query)) {
    callback = query;
    query = {};
  }

  if (is.string(query) || is.array(query)) {
    var filterByTypes_ = {};

    // For faster lookups, store the record types the user wants in an object.
    arrify(query).forEach(function(type) {
      filterByTypes_[type.toUpperCase()] = true;
    });

    query = {
      filterByTypes_: filterByTypes_
    };
  }

  var requestQuery = extend({}, query);
  delete requestQuery.filterByTypes_;

  this.request({
    uri: '/rrsets',
    qs: requestQuery
  }, function(err, resp) {
    if (err) {
      callback(err, null, null, resp);
      return;
    }

    var records = (resp.rrsets || []).map(function(record) {
      return self.record(record.type, record);
    });

    if (query.filterByTypes_) {
      records = records.filter(function(record) {
        return query.filterByTypes_[record.type];
      });
    }

    var nextQuery = null;
    if (resp.nextPageToken) {
      nextQuery = extend({}, query, {
        pageToken: resp.nextPageToken
      });
    }

    callback(null, records, nextQuery, resp);
  });
};

/**
 * Get the list of {module:dns/record} objects for this zone as a readable
 * object stream.
 *
 * @param {object=} query - Configuration object. See
 *     {module:dns/zone#getRecords} for a complete list of options.
 * @return {stream}
 *
 * @example
 * zone.getRecordsStream()
 *   .on('error', console.error)
 *   .on('data', function(record) {
 *     // record is a Record object.
 *   })
 *   .on('end', function() {
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
Zone.prototype.getRecordsStream = common.paginator.streamify('getRecords');

/**
 * Copy the records from a zone file into this zone.
 *
 * @resource [ManagedZones: create API Documentation]{@link https://cloud.google.com/dns/api/v1/managedZones/create}
 *
 * @param {string} localPath - The fully qualified path to the zone file.
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An API or file system error.
 * @param {?module:dns/change} callback.change - A {module:dns/change} object.
 * @param {?object} callback.apiResponse - Raw API response.
 *
 * @example
 * var zoneFilename = '/Users/dave/zonefile.zone';
 *
 * zone.import(zoneFilename, function(err, change, apiResponse) {
 *   if (!err) {
 *     // The change was created successfully.
 *   }
 * });
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * zone.import(zoneFilename).then(function(data) {
 *   var change = data[0];
 *   var apiResponse = data[1];
 * });
 */
Zone.prototype.import = function(localPath, callback) {
  var self = this;

  fs.readFile(localPath, 'utf-8', function(err, file) {
    if (err) {
      callback(err);
      return;
    }

    var parsedZonefile = zonefile.parse(file);
    var recordTypes = Object.keys(parsedZonefile);
    var recordsToCreate = [];

    recordTypes.forEach(function(recordType) {
      var recordTypeSet = arrify(parsedZonefile[recordType]);

      recordTypeSet.forEach(function(record) {
        recordsToCreate.push(Record.fromZoneRecord_(self, recordType, record));
      });
    });

    self.addRecords(recordsToCreate, callback);
  });
};

/**
 * A {module:dns/record} object can be used to construct a record you want to
 * add to your zone, or to refer to an existing one.
 *
 * Note that using this method will not itself make any API requests. You will
 * use the object returned in other API calls, for example to add a record to
 * your zone or to delete an existing one.
 *
 * @param {string} type - The type of record to construct or the type of record
 *     you are referencing.
 * @param {object} metadata - The metadata of this record.
 * @param {string} metadata.name - The name of the record, e.g.
 *     `www.example.com.`.
 * @param {string[]} metadata.data - Defined in
 *     [RFC 1035, section 5](https://goo.gl/9EiM0e) and
 *     [RFC 1034, section 3.6.1](https://goo.gl/Hwhsu9).
 * @param {number} metadata.ttl - Seconds that the resource is cached by
 *     resolvers.
 * @return {module:dns/record}
 *
 * @example
 * //-
 * // Reference an existing record to delete from your zone.
 * //-
 * var oldARecord = zone.record('a', {
 *   name: 'example.com.',
 *   data: '1.2.3.4',
 *   ttl: 86400
 * });
 *
 * //-
 * // Construct a record to add to your zone.
 * //-
 * var newARecord = zone.record('a', {
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
 * }, function(err, change, apiResponse) {});
 */
Zone.prototype.record = function(type, metadata) {
  return new Record(this, type, metadata);
};

/**
 * Provide a record type that should be deleted and replaced with other records.
 *
 * <strong>This is not an atomic request.</strong> Two API requests are made
 * (one to get records of the type that you've requested, then another to
 * replace them), which means the operation is not atomic and could result in
 * unexpected changes.
 *
 * @resource [ManagedZones: create API Documentation]{@link https://cloud.google.com/dns/api/v1/managedZones/create}
 *
 * @param {string|string[]} recordTypes - Type(s) of records to replace.
 * @param {module:dns/record|module:dns/record[]} newRecords - The record
 *     objects to add.
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An API error.
 * @param {?module:dns/change} callback.change - A {module:dns/change} object.
 * @param {?object} callback.apiResponse - Raw API response.
 *
 * @example
 * var newNs1Record = zone.record('ns', {
 *   name: 'example.com.',
 *   data: 'ns-cloud1.googledomains.com.',
 *   ttl: 86400
 * });
 *
 * var newNs2Record = zone.record('ns', {
 *   name: 'example.com.',
 *   data: 'ns-cloud2.googledomains.com.',
 *   ttl: 86400
 * });
 *
 * var newNsRecords = [
 *   newNs1Record,
 *   newNs2Record
 * ];
 *
 * zone.replaceRecords('ns', newNsRecords, function(err, change, apiResponse) {
 *   if (!err) {
 *     // The change was created successfully.
 *   }
 * });
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * zone.replaceRecords('ns', newNsRecords).then(function(data) {
 *   var change = data[0];
 *   var apiResponse = data[1];
 * });
 */
Zone.prototype.replaceRecords = function(recordType, newRecords, callback) {
  var self = this;

  this.getRecords(recordType, function(err, recordsToDelete) {
    if (err) {
      callback(err);
      return;
    }

    self.createChange({
      add: newRecords,
      delete: recordsToDelete
    }, callback);
  });
};

/**
 * Delete records from the zone matching an array of types.
 *
 * @private
 *
 * @param {string[]} recordTypes - Types of records to delete. Ex: 'NS', 'A'.
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An API error.
 * @param {?module:dns/change} callback.change - A {module:dns/change} object.
 * @param {?object} callback.apiResponse - Raw API response.
 *
 * @example
 * zone.deleteRecordsByType_(['NS', 'A'], function(err, change, apiResponse) {
 *   if (!err) {
 *     // The change was created successfully.
 *   }
 * });
 */
Zone.prototype.deleteRecordsByType_ = function(recordTypes, callback) {
  var self = this;

  this.getRecords(recordTypes, function(err, records) {
    if (err) {
      callback(err);
      return;
    }

    if (records.length === 0) {
      callback();
      return;
    }

    self.deleteRecords(records, callback);
  });
};

/*! Developer Documentation
 *
 * These methods can be auto-paginated.
 */
common.paginator.extend(Zone, ['getChanges', 'getRecords']);

/*! Developer Documentation
 *
 * All async methods (except for streams) will return a Promise in the event
 * that a callback is omitted.
 */
common.util.promisifyAll(Zone, {
  exclude: ['change', 'record']
});

module.exports = Zone;
