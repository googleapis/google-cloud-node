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

var arrify = require('arrify');
var common = require('@google-cloud/common');
var commonGrpc = require('@google-cloud/common-grpc');
var extend = require('extend');
var googleProtoFiles = require('google-proto-files');
var is = require('is');
var util = require('util');

/**
 * @private
 * @type {module:bigtable/cluster}
 */
var Cluster = require('./cluster.js');

/**
 * @private
 * @type {module:bigtable/instance}
 */
var Instance = require('./instance.js');

/**
 * @alias module:bigtable
 * @constructor
 *
 * @resource [Creating a Cloud Bigtable Cluster]{@link https://cloud.google.com/bigtable/docs/creating-compute-instance}
 * @resource [Cloud Bigtable Concepts Overview]{@link https://cloud.google.com/bigtable/docs/concepts}
 *
 * @param {object=} options - [Configuration object](#/docs).
 * @param {string=} options.apiEndpoint - Override the default API endpoint used
 *     to reach Bigtable. This is useful for connecting to your local Bigtable
 *     emulator.
 *
 * @example
 * //-
 * // <h3>The Bigtable Emulator</h3>
 * //
 * // Make sure you have the <a href="https://cloud.google.com/sdk/downloads">
 * // gcloud SDK installed</a>, then run:
 * //
 * // <pre>
 * //   $ gcloud beta emulators bigtable start
 * // </pre>
 * //
 * // Before running your Node.js app, set the environment variables that this
 * // library will look for to connect to the emulator:
 * //
 * // <pre>
 * //   $ $(gcloud beta emulators bigtable env-init)
 * // </pre>
 * //-
 *
 * //-
 * // <h3>Creating a Bigtable Instance and Cluster</h3>
 * //
 * // Before you create your table, you first need to create a Bigtable Instance
 * // and cluster for the table to be served from.
 * //-
 * var callback = function(err, instance, operation) {
 *   operation
 *     .on('error', console.log)
 *     .on('complete', function() {
 *       // `instance` is your newly created Instance object.
 *     });
 * };
 *
 * var instance = bigtable.instance('my-instance');
 *
 * instance.create({
 *   clusters: [
 *     {
 *       name: 'my-cluster',
 *       location: 'us-central1-b',
 *       nodes: 3
 *     }
 *   ]
 * }, callback);
 *
 * //-
 * // This can also be done from either the Google Cloud Platform Console or the
 * // `gcloud` cli tool. Please refer to the
 * // <a href="https://cloud.google.com/bigtable/docs/creating-instance">
 * // official Bigtable documentation</a> for more information.
 * //-
 *
 * //-
 * // <h3>Creating Tables</h3>
 * //
 * // After creating your instance and enabling the Bigtable APIs, you are now
 * // ready to create your table with {module:bigtable/instance#createTable}.
 * //-
 * instance.createTable('prezzy', function(err, table) {
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
 * var table = instance.table('prezzy');
 *
 * table.createFamily('follows', function(err, family) {
 *   // `family` is your newly created Family object.
 * });
 *
 * //-
 * // It is also possible to create your column families when creating a new
 * // table.
 * //-
 * var options = {
 *   families: ['follows']
 * };
 *
 * instance.createTable('prezzy', options, function(err, table) {});
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
 * table.createReadStream()
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

  var baseUrl = 'bigtable.googleapis.com';
  var adminBaseUrl = 'bigtableadmin.googleapis.com';

  var customEndpoint = options.apiEndpoint ||
    process.env.BIGTABLE_EMULATOR_HOST;

  if (customEndpoint) {
    baseUrl = customEndpoint;
    adminBaseUrl = baseUrl;
  }

  var config = {
    baseUrl: baseUrl,
    service: 'bigtable',
    apiVersion: 'v2',
    customEndpoint: !!customEndpoint,
    protoServices: {
      Bigtable: googleProtoFiles.bigtable.v2,
      BigtableTableAdmin: {
        baseUrl: adminBaseUrl,
        path: googleProtoFiles.bigtable.admin.v2.table,
        service: 'bigtable.admin'
      },
      BigtableInstanceAdmin: {
        baseUrl: adminBaseUrl,
        path: googleProtoFiles.bigtable.admin.v2.instance,
        service: 'bigtable.admin'
      },
      Operations: {
        baseUrl: adminBaseUrl,
        path: googleProtoFiles('longrunning/operations.proto'),
        service: 'longrunning',
        apiVersion: 'v1'
      }
    },
    scopes: [
      'https://www.googleapis.com/auth/bigtable.admin',
      'https://www.googleapis.com/auth/bigtable.data',
      'https://www.googleapis.com/auth/cloud-platform'
    ],
    packageJson: require('../package.json')
  };

  commonGrpc.Service.call(this, config, options);

  this.projectName = 'projects/' + this.projectId;
}

util.inherits(Bigtable, commonGrpc.Service);

/**
 * Create a Compute instance.
 *
 * @resource [Creating a Compute Instance]{@link https://cloud.google.com/bigtable/docs/creating-compute-instance}
 *
 * @param {string} name - The unique name of the instance.
 * @param {object=} options - Instance creation options.
 * @param {object[]} options.clusters - The clusters to be created within the
 *     instance.
 * @param {string} options.displayName - The descriptive name for this instance
 *     as it appears in UIs.
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request.
 * @param {module:bigtable/instance} callback.instance - The newly created
 *     instance.
 * @param {Operation} callback.operation - An operation object that can be used
 *     to check the status of the request.
 * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * var callback = function(err, instance, operation, apiResponse) {
 *   if (err) {
 *     // Error handling omitted.
 *   }
 *
 *   operation
 *     .on('error', console.log)
 *     .on('complete', function() {
 *       // The instance was created successfully.
 *     });
 * };
 *
 * var options = {
 *   displayName: 'my-sweet-instance',
 *   clusters: [
 *     {
 *       name: 'my-sweet-cluster',
 *       nodes: 3,
 *       location: 'us-central1-b',
 *       storage: 'ssd'
 *     }
 *   ]
 * };
 *
 * bigtable.createInstance('my-instance', options, callback);
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * bigtable.createInstance('my-instance', options).then(function(data) {
 *   var instance = data[0];
 *   var operation = data[1];
 *   var apiResponse = data[2];
 * });
 */
Bigtable.prototype.createInstance = function(name, options, callback) {
  var self = this;

  if (is.function(options)) {
    callback = options;
    options = {};
  }

  var protoOpts = {
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
        location: Cluster.getLocation_(self.projectId, cluster.location),
        serveNodes: cluster.nodes,
        defaultStorageType: Cluster.getStorageType_(cluster.storage)
      };

      return clusters;
    }, {});

  this.request(protoOpts, reqOpts, function(err, resp) {
    if (err) {
      callback(err, null, null, resp);
      return;
    }

    var instance = self.instance(name);
    var operation = self.operation(resp.name);
    operation.metadata = resp;

    callback(null, instance, operation, resp);
  });
};

/**
 * Get Instance objects for all of your Compute instances.
 *
 * @param {object} query - Query object.
 * @param {boolean} query.autoPaginate - Have pagination handled
 *     automatically. Default: true.
 * @param {number} query.maxApiCalls - Maximum number of API calls to make.
 * @param {number} query.maxResults - Maximum number of results to return.
 * @param {string} query.pageToken - Token returned from a previous call, to
 *     request the next page of results.
 * @param {function} callback - The callback function.
 * @param {?error} callback.error - An error returned while making this request.
 * @param {module:bigtable/instance[]} callback.instances - List of all
 *     instances.
 * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * bigtable.getInstances(function(err, instances) {
 *   if (!err) {
 *     // `instances` is an array of Instance objects.
 *   }
 * });
 *
 * //-
 * // To control how many API requests are made and page through the results
 * // manually, set `autoPaginate` to false.
 * //-
 * var callback = function(err, instances, nextQuery, apiResponse) {
 *   if (nextQuery) {
 *     // More results exist.
 *     bigtable.getInstances(nextQuery, calback);
 *   }
 * };
 *
 * bigtable.getInstances({
 *   autoPaginate: false
 * }, callback);
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * bigtable.getInstances().then(function(data) {
 *   var instances = data[0];
 * });
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

  var reqOpts = extend({}, query, {
    parent: this.projectName
  });

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
 * Get {module:bigtable/instance} objects for all of your Compute instances as a
 * readable object stream.
 *
 * @param {object=} query - Configuration object. See
 *     {module:bigtable#getInstances} for a complete list of options.
 * @return {stream}
 *
 * @example
 * bigtable.getInstancesStream()
 *   .on('error', console.error)
 *   .on('data', function(instance) {
 *     // `instance` is an Instance object.
 *   })
 *   .on('end', function() {
 *     // All instances retrieved.
 *   });
 *
 * //-
 * // If you anticipate many results, you can end a stream early to prevent
 * // unnecessary processing and API requests.
 * //-
 * bigtable.getInstancesStream()
 *   .on('data', function(instance) {
 *     this.end();
 *   });
 */
Bigtable.prototype.getInstancesStream =
  common.paginator.streamify('getInstances');

/**
 * Get a reference to a Compute instance.
 *
 * @param {string} name - The name of the instance.
 * @return {module:bigtable/instance}
 */
Bigtable.prototype.instance = function(name) {
  return new Instance(this, name);
};

/**
 * Get a reference to an Operation.
 *
 * @param {string} name - The name of the instance.
 * @return {Operation}
 */
Bigtable.prototype.operation = function(name) {
  return new commonGrpc.Operation(this, name);
};

/*! Developer Documentation
 *
 * These methods can be auto-paginated.
 */
common.paginator.extend(Bigtable, ['getInstances']);

/*! Developer Documentation
 *
 * All async methods (except for streams) will return a Promise in the event
 * that a callback is omitted.
 */
common.util.promisifyAll(Bigtable, {
  exclude: ['instance', 'operation']
});

module.exports = Bigtable;
