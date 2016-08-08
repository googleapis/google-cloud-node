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

/*!
 * @module bigtable
 */

'use strict';

var common = require('@google-cloud/common');
var extend = require('extend');
var format = require('string-format-obj');
var googleProtoFiles = require('google-proto-files');
var is = require('is');
var util = require('util');
var arrify = require('arrify');

var Instance = require('./instance.js');
var Family = require('./family.js');
var Table = require('./table.js');

var PKG = require('../package.json');

/**
 * @alias module:bigtable
 * @constructor
 *
 * @resource [Creating a Cloud Bigtable Cluster]{@link https://cloud.google.com/bigtable/docs/creating-compute-instance}
 * @resource [Google Cloud Bigtable Concepts Overview]{@link https://cloud.google.com/bigtable/docs/concepts}
 *
 * @throws {error} If a cluster is not provided.
 * @throws {error} If a zone is not provided.
 *
 * @param {object=} options - [Configuration object](#/docs).
 * @param {string} options.cluster - The cluster name that hosts your tables.
 * @param {string|module:compute/zone} options.zone - The zone in which your
 *     cluster resides.
 *
 * //-
 * // <h3>Creating a Cluster</h3>
 * //
 * // Before you create your table, you first need to create a Bigtable Cluster
 * // for the table to be served from. This can be done from either the
 * // Google Cloud Platform Console or the `gcloud` cli tool. Please refer to
 * // the <a href="https://cloud.google.com/bigtable/docs/creating-compute-instance">
 * // official Bigtable documentation</a> for more information.
 * //-
 *
 * //-
 * // <h3>Creating Tables</h3>
 * //
 * // After creating your cluster and enabling the Bigtable APIs, you are now
 * // ready to create your table with {module:bigtable#createTable}.
 * //-
 * bigtable.createTable('prezzy', function(err, table) {
 *   // `table` is your newly created Table object.
 * });
 *
 * //-
 * // <h3>Creating Column Families</h3>
 * //
 * // Column families are used to group together various pieces of data within
 * // your table. You can think of column families as a mechanism to categorize
 * // all of your data.
 * //
 * // We can create a column family with {module:bigtable/table#createFamily}.
 * //-
 * var table = bigtable.table('prezzy');
 *
 * table.createFamily('follows', function(err, family) {
 *   // `family` is your newly created Family object.
 * });
 *
 * //-
 * // <h3>Creating Rows</h3>
 * //
 * // New rows can be created within your table using
 * // {module:bigtable/table#insert}. You must provide a unique key for each row
 * // to be inserted, this key can then be used to retrieve your row at a later
 * // time.
 * //
 * // With Bigtable, all columns have a unique id composed of a column family
 * // and a column qualifier. In the example below `follows` is the column
 * // family and `tjefferson` is the column qualifier. Together they could be
 * // referred to as `follows:tjefferson`.
 * //-
 * var rows = [
 *   {
 *     key: 'wmckinley',
 *     data: {
 *       follows: {
 *         tjefferson: 1
 *       }
 *     }
 *   }
 * ];
 *
 * table.insert(rows, function(err) {
 *   if (!err) {
 *     // Your rows were successfully inserted.
 *   }
 * });
 *
 * //-
 * // <h3>Retrieving Rows</h3>
 * //
 * // If you're anticipating a large number of rows to be returned, we suggest
 * // using the {module:bigtable/table#getRows} streaming API.
 * //-
 * table.getRows()
 *   .on('error', console.error)
 *   .on('data', function(row) {
 *     // `row` is a Row object.
 *   });
 *
 * //-
 * // If you're not anticpating a large number of results, a callback mode
 * // is also available.
 * //-
 * var callback = function(err, rows) {
 *   // `rows` is an array of Row objects.
 * };
 *
 * table.getRows(callback);
 *
 * //-
 * // A range of rows can be retrieved by providing `start` and `end` row keys.
 * //-
 * var options = {
 *   start: 'gwashington',
 *   end: 'wmckinley'
 * };
 *
 * table.getRows(options, callback);
 *
 * //-
 * // Retrieve an individual row with {module:bigtable/row#get}.
 * //-
 * var row = table.row('alincoln');
 *
 * row.get(function(err) {
 *   // `row.data` is now populated.
 * });
 *
 * //-
 * // <h3>Accessing Row Data</h3>
 * //
 * // When retrieving rows, upon success the `row.data` property will be
 * // populated by an object. That object will contain additional objects
 * // for each family in your table that the row has data for.
 * //
 * // By default, when retrieving rows, each column qualifier will provide you
 * // with all previous versions of the data. So your `row.data` object could
 * // resemble the following.
 * //-
 * console.log(row.data);
 * // {
 * //   follows: {
 * //     wmckinley: [
 * //       {
 * //         value: 1,
 * //         timestamp: 1466017315951
 * //       }, {
 * //         value: 2,
 * //         timestamp: 1458619200000
 * //       }
 * //     ]
 * //   }
 * // }
 *
 * //-
 * // The `timestamp` field can be used to order cells from newest to oldest.
 * // If you only wish to retrieve the most recent version of the data, you
 * // can specify the number of cells with a {module:bigtable/filter} object.
 * //-
 * var filter = [
 *   {
 *     column: {
 *       cellLimit: 1
 *     }
 *   }
 * ];
 *
 * table.getRows({
 *   filter: filter
 * }, callback);
 *
 * //-
 * // <h3>Deleting Row Data</h3>
 * //
 * // We can delete all of an individual row's cells using
 * // {module:bigtable/row#delete}.
 * //-
 * var callback = function(err) {
 *   if (!err) {
 *     // All cells for this row were deleted successfully.
 *   }
 * };
 *
 * row.delete(callback);
 *
 * //-
 * // To delete a specific set of cells, we can provide an array of
 * // column families and qualifiers.
 * //-
 * var cells = [
 *   'follows:gwashington',
 *   'traits'
 * ];
 *
 * row.delete(cells, callback);
 *
 * //-
 * // <h3>Deleting Rows</h3>
 * //
 * // If you wish to delete multiple rows entirely, we can do so with
 * // {module:bigtable/table#deleteRows}. You can provide this method with a
 * // row key prefix.
 * //-
 * var options = {
 *   prefix: 'gwash'
 * };
 *
 * table.deleteRows(options, function(err) {
 *   if (!err) {
 *     // Rows were deleted successfully.
 *   }
 * });
 *
 * //-
 * // If you omit the prefix, you can delete all rows in your table.
 * //-
 * table.deleteRows(function(err) {
 *   if (!err) {
 *     // All rows were deleted successfully.
 *   }
 * });
 */
function Bigtable(options) {
  if (!(this instanceof Bigtable)) {
    options = common.util.normalizeArguments(this, options);
    return new Bigtable(options);
  }

  var config = {
    baseUrl: 'bigtable.googleapis.com',
    service: 'bigtable',
    apiVersion: 'v2',
    protoServices: {
      Bigtable: googleProtoFiles('bigtable/v2/bigtable.proto'),
      BigtableTableAdmin: {
        baseUrl: 'bigtableadmin.googleapis.com',
        path: googleProtoFiles('bigtable/admin/v2/bigtable_table_admin.proto'),
        service: 'bigtable.admin'
      },
      BigtableInstanceAdmin: {
        baseUrl: 'bigtableadmin.googleapis.com',
        path: googleProtoFiles(
          'bigtable/admin/v2/bigtable_instance_admin.proto'
        ),
        service: 'bigtable.admin'
      },
      Operations: {
        path: googleProtoFiles('longrunning/operations.proto'),
        service: 'longrunning',
        apiVersion: undefined
      }
    },
    scopes: [
      'https://www.googleapis.com/auth/bigtable.admin',
      'https://www.googleapis.com/auth/bigtable.data',
      'https://www.googleapis.com/auth/cloud-platform'
    ],
    userAgent: PKG.name + '/' + PKG.version
  };

  common.GrpcService.call(this, config, options);

  this.projectName = 'projects/' + this.projectId;
}

util.inherits(Bigtable, common.GrpcService);

/**
 * @private
 */
Bigtable.getStorageType_ = function(type) {
  var storageTypes = {
    unspecified: 0,
    ssd: 1,
    hdd: 2
  };

  if (is.string(type)) {
    type = type.toLowerCase();
  }

  return storageTypes[type] || storageTypes.unspecified;
};

/**
 * @param {string} name
 * @param {object} options
 * @param {string} options.displayName
 * @param {object[]} options.clusters
 * @param {function} callback
 * @param {?error} callback.err
 * @param {module:bigtable/instance} callback.instance
 * @param {module:common/operation} callback.operation
 * @param {object} callback.apiResponse
 *
 * @example
 * var callback = function(err, instance, operation, apiResponse) {
 *   if (err) {
 *     // Error handling omitted.
 *   }
 *
 *   operation.on('complete', function() {
 *     // The instance has successfully been created.
 *   });
 * };
 *
 * var options = {
 *   displayName: 'my-sweet-instance',
 *   clusters: [
 *     {
 *       name: 'my-sweet-cluster',
 *       nodes: 10,
 *       location: 'us-central1-b',
 *       storage: 'ssd'
 *     }
 *   ]
 * };
 *
 * bigtable.createInstance('my-instance', options, callback);
 */
Bigtable.prototype.createInstance = function(name, options, callback) {
  var self = this;

  if (is.function(options)) {
    callback = options;
    options = {};
  }

  var protoOpts = {
    baseUrl: this.adminBaseUrl_,
    service: 'BigtableInstanceAdmin',
    method: 'createInstance'
  };

  var reqOpts = {
    parent: this.projectName,
    instanceId: name,
    instance: {
      displayName: options.displayName || name
    }
  };

  reqOpts.clusters = arrify(options.clusters)
    .reduce(function(clusters, cluster) {
      clusters[cluster.name] = {
        location: reqOpts.parent + '/locations/' + cluster.location,
        serveNodes: cluster.nodes,
        defaultStorageType: Bigtable.getStorageType_(cluster.storage)
      };

      return clusters;
    }, {});

  this.request(protoOpts, reqOpts, function(err, resp) {
    if (err) {
      callback(err, null, null, resp);
      return;
    }

    var instance = self.instance(name);
    // operation responses have a field called `metadata`, so if we assign the
    // the response as `metadata` the user has to do this to retrieve metadata:
    // operation.metadata.metadata.somerandomkey
    var operation = {};
    // var operation = self.operation(resp.name, resp);
    callback(null, instance, operation, resp);
  });
};

/**
 * @TODO streamify
 *
 * @param {object} query
 * @param {?} query.pageToken
 * @param {function} callback
 * @param {?error} callback.error
 * @param {module:bigtable/instance[]} callback.instances
 * @param {object} callback.nextQuery
 * @param {object} callback.apiResponse
 */
Bigtable.prototype.getInstances = function(query, callback) {
  var self = this;

  if (is.function(query)) {
    callback = query;
    query = {};
  }

  var protoOpts = {
    service: 'BigtableInstanceAdmin',
    method: 'listInstances'
  };

  var reqOpts = {
    parent: this.projectName
  };

  if (query.pageToken) {
    reqOpts.pageToken = query.pageToken;
  }

  this.request(protoOpts, reqOpts, function(err, resp) {
    if (err) {
      callback(err, null, null, resp);
      return;
    }

    var instances = resp.instances.map(function(instanceData) {
      var instance = self.instance(instanceData.name);
      instance.metadata = instanceData;
      return instance;
    });

    var nextQuery = null;
    if (resp.nextPageToken) {
      nextQuery = extend({}, query, { pageToken: resp.nextPageToken });
    }

    callback(null, instances, nextQuery, resp);
  });
};

/**
 * @param {string} name
 * @return {module:bigtable/instance}
 */
Bigtable.prototype.instance = function(name) {
  return new Instance(this, name);
};

module.exports = Bigtable;
