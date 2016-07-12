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

var googleProtoFiles = require('google-proto-files');
var is = require('is');
var nodeutil = require('util');
var format = require('string-format-obj');
var extend = require('extend');

/**
 * @type {module:bigtable/table}
 * @private
 */
var Table = require('./table.js');

/**
 * @type {module:common/grpcService}
 * @private
 */
var GrpcService = require('../common/grpc-service.js');

/**
 * @type {module:common/util}
 * @private
 */
var util = require('../common/util.js');

/**
 * Interact with
 * [Google Cloud Bigtable](https://cloud.google.com/bigtable/).
 *
 * @constructor
 * @alias module:bigtable
 *
 * @classdesc
 * The `gcloud.bigtable` object allows you interact with Google Cloud Bigtable.
 *
 * To learn more about Bigtable, read the
 * [Google Cloud Bigtable Concepts Overview](https://cloud.google.com/bigtable/docs/concepts)
 *
 * @resource [Creating a Cloud Bigtable Cluster]{@link https://cloud.google.com/bigtable/docs/creating-compute-instance}
 *
 * @param {object=} options - [Configuration object](#/docs).
 * @param {string} options.cluster - The cluster name that hosts your tables.
 * @param {string|module:compute/zone} options.zone - The zone in which your
 *     cluster resides.
 *
 * @example
 * var gcloud = require('gcloud')({
 *   keyFilename: '/path/to/keyfile.json',
 *   projectId: 'my-project'
 * });
 *
 * var bigtable = gcloud.bigtable({
 *   zone: 'us-central1-b',
 *   cluster: 'gcloud-node'
 * });
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
    options = util.normalizeArguments(this, options);
    return new Bigtable(options);
  }

  options = extend({}, options, {
    zone: options.zone.name || options.zone
  });

  this.clusterName = format(
    'projects/{projectId}/zones/{zone}/clusters/{cluster}',
    options
  );

  var config = {
    baseUrl: 'bigtable.googleapis.com',
    service: 'bigtable',
    apiVersion: 'v1',
    protoServices: {
      BigtableService: googleProtoFiles.bigtable.v1,
      BigtableTableService: {
        path: googleProtoFiles.bigtable.admin,
        service: 'bigtable.admin.table'
      }
    },
    scopes: [
      'https://www.googleapis.com/auth/bigtable.admin',
      'https://www.googleapis.com/auth/bigtable.data'
    ]
  };

  GrpcService.call(this, config, options);
}

nodeutil.inherits(Bigtable, GrpcService);

/**
 * Formats the full table name into a user friendly version.
 *
 * @private
 *
 * @param {string} name - The formatted Table name.
 * @return {string}
 *
 * @example
 * Bigtable.formatTableName_('projects/p/zones/z/clusters/c/tables/my-table');
 * // => 'my-table'
 */
Bigtable.formatTableName_ = function(name) {
  if (name.indexOf('/') === -1) {
    return name;
  }

  var parts = name.split('/');
  return parts[parts.length - 1];
};

/**
 * Create a table on your Bigtable cluster.
 *
 * @resource [Designing Your Schema]{@link https://cloud.google.com/bigtable/docs/schema-design}
 * @resource [Splitting Keys]{@link https://cloud.google.com/bigtable/docs/managing-tables#splits}
 *
 * @param {string} name - The name of the table.
 * @param {object=} options - Table creation options.
 * @param {string} options.operation - Operation used for table that has already
 *    been queued to be created.
 * @param {string[]} options.splits - Initial
 *    [split keys](https://cloud.google.com/bigtable/docs/managing-tables#splits).
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request.
 * @param {module:bigtable/table} callback.table - The newly created table.
 * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * var callback = function(err, table, apiResponse) {
 *   // `table` is a Table object.
 * };
 *
 * bigtable.createTable('prezzy', callback);
 *
 * //-
 * // Pre-split the table based on the row key to spread the load across
 * // multiple Cloud Bigtable nodes.
 * //-
 * var options = {
 *   splits: ['10', '20']
 * };
 *
 * bigtable.createTable('prezzy', options, callback);
 */
Bigtable.prototype.createTable = function(name, options, callback) {
  var self = this;

  options = options || {};

  if (is.function(options)) {
    callback = options;
    options = {};
  }

  var protoOpts = {
    service: 'BigtableTableService',
    method: 'createTable'
  };

  var reqOpts = {
    name: this.clusterName,
    tableId: name,
    table: {
      // The granularity at which timestamps are stored in the table.
      // Currently only milliseconds is supported, so it's not configurable.
      granularity: 0
    }
  };

  if (options.operation) {
    reqOpts.table.currentOperation = options.operation;
  }

  if (options.splits) {
    reqOpts.initialSplitKeys = options.splits;
  }

  this.request(protoOpts, reqOpts, function(err, resp) {
    if (err) {
      callback(err, null, resp);
      return;
    }

    var table = self.table(resp.name);
    table.metadata = resp;

    callback(null, table, resp);
  });
};

/**
 * Get Table objects for all the tables in your Bigtable cluster.
 *
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request.
 * @param {module:bigtable/table[]} callback.tables - List of all Tables.
 * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * bigtable.getTables(function(err, tables) {
 *   if (!err) {
 *     // `tables` is an array of Table objects.
 *   }
 * });
 */
Bigtable.prototype.getTables = function(callback) {
  var self = this;

  var protoOpts = {
    service: 'BigtableTableService',
    method: 'listTables'
  };

  var reqOpts = {
    name: this.clusterName
  };

  this.request(protoOpts, reqOpts, function(err, resp) {
    if (err) {
      callback(err, null, resp);
      return;
    }

    var tables = resp.tables.map(function(metadata) {
      var name = Bigtable.formatTableName_(metadata.name);
      var table = self.table(name);

      table.metadata = metadata;
      return table;
    });

    callback(null, tables, resp);
  });
};

/**
 * Get a reference to a Bigtable table.
 *
 * @param {string} name - The name of the table.
 * @return {module:bigtable/table}
 *
 * @example
 * var table = bigtable.table('presidents');
 */
Bigtable.prototype.table = function(name) {
  return new Table(this, name);
};

module.exports = Bigtable;
