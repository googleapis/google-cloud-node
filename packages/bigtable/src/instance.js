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
 * @module bigtable/instance
 */

'use strict';

var common = require('@google-cloud/common');
var commonGrpc = require('@google-cloud/common-grpc');
var extend = require('extend');
var is = require('is');
var util = require('util');

/**
 * @private
 * @type {module:bigtable/cluster}
 */
var Cluster = require('./cluster.js');

/**
 * @private
 * @type {module:bigtable/family}
 */
var Family = require('./family.js');

/**
 * @private
 * @type {module:bigtable/table}
 */
var Table = require('./table.js');

/**
 * Create an Instance object to interact with a Compute instance.
 *
 * @constructor
 * @alias module:bigtable/instance
 *
 * @param {string} name - Name of the instance.
 *
 * @example
 * var instance = bigtable.instance('my-instance');
 */
function Instance(bigtable, name) {
  var id = name;

  if (id.indexOf('/') === -1) {
    id = bigtable.projectName + '/instances/' + name;
  }

  var methods = {

    /**
     * Create an instance.
     *
     * @param {object=} options - See {module:bigtable#createInstance}.
     *
     * @example
     * instance.create(function(err, instance, operation, apiResponse) {
     *   if (err) {
     *     // Error handling omitted.
     *   }
     *
     *   operation
     *     .on('error', console.error)
     *     .on('complete', function() {
     *       // The instance was created successfully.
     *     });
     * });
     *
     * //-
     * // If the callback is omitted, we'll return a Promise.
     * //-
     * instance.create().then(function(data) {
     *   var instance = data[0];
     *   var operation = data[1];
     *   var apiResponse = data[2];
     * });
     */
    create: true,

    /**
     * Delete the instance.
     *
     * @param {function=} callback - The callback function.
     * @param {?error} callback.err - An error returned while making this
     *     request.
     * @param {object} callback.apiResponse - The full API response.
     *
     * @example
     * instance.delete(function(err, apiResponse) {});
     *
     * //-
     * // If the callback is omitted, we'll return a Promise.
     * //-
     * instance.delete().then(function(data) {
     *   var apiResponse = data[0];
     * });
     */
    delete: {
      protoOpts: {
        service: 'BigtableInstanceAdmin',
        method: 'deleteInstance'
      },
      reqOpts: {
        name: id
      }
    },

    /**
     * Check if an instance exists.
     *
     * @param {function} callback - The callback function.
     * @param {?error} callback.err - An error returned while making this
     *     request.
     * @param {boolean} callback.exists - Whether the instance exists or not.
     *
     * @example
     * instance.exists(function(err, exists) {});
     *
     * //-
     * // If the callback is omitted, we'll return a Promise.
     * //-
     * instance.exists().then(function(data) {
     *   var exists = data[0];
     * });
     */
    exists: true,

    /**
     * Get an instance if it exists.
     *
     * @example
     * instance.get(function(err, instance, apiResponse) {
     *   // The `instance` data has been populated.
     * });
     *
     * //-
     * // If the callback is omitted, we'll return a Promise.
     * //-
     * instance.get().then(function(data) {
     *   var instance = data[0];
     *   var apiResponse = data[1];
     * });
     */
    get: true,

    /**
     * Get the instance metadata.
     *
     * @param {function} callback - The callback function.
     * @param {?error} callback.err - An error returned while making this
     *     request.
     * @param {object} callback.metadata - The metadata.
     * @param {object} callback.apiResponse - The full API response.
     *
     * @example
     * instance.getMetadata(function(err, metadata, apiResponse) {});
     *
     * //-
     * // If the callback is omitted, we'll return a Promise.
     * //-
     * instance.getMetadata().then(function(data) {
     *   var metadata = data[0];
     *   var apiResponse = data[1];
     * });
     */
    getMetadata: {
      protoOpts: {
        service: 'BigtableInstanceAdmin',
        method: 'getInstance'
      },
      reqOpts: {
        name: id
      }
    },

    /**
     * Set the instance metadata.
     *
     * @param {object} metadata - Metadata object.
     * @param {string} metadata.displayName - The descriptive name for this
     *     instance as it appears in UIs. It can be changed at any time, but
     *     should be kept globally unique to avoid confusion.
     * @param {function} callback - The callback function.
     * @param {?error} callback.err - An error returned while making this
     *     request.
     * @param {object} callback.apiResponse - The full API response.
     *
     * @example
     * var metadata = {
     *   displayName: 'updated-name'
     * };
     *
     * instance.setMetadata(metadata, function(err, apiResponse) {});
     *
     * //-
     * // If the callback is omitted, we'll return a Promise.
     * //-
     * instance.setMetadata(metadata).then(function(data) {
     *   var apiResponse = data[0];
     * });
     */
    setMetadata: {
      protoOpts: {
        service: 'BigtableInstanceAdmin',
        method: 'updateInstance'
      },
      reqOpts: {
        name: id
      }
    }
  };

  var config = {
    parent: bigtable,
    id: id,
    methods: methods,
    createMethod: function(_, options, callback) {
      bigtable.createInstance(name, options, callback);
    }
  };

  commonGrpc.ServiceObject.call(this, config);
}

util.inherits(Instance, commonGrpc.ServiceObject);

/**
 * Create a cluster.
 *
 * @param {string} name - The name to be used when referring to the new
 *     cluster within its instance.
 * @param {object=} options - Cluster creation options.
 * @param {string} options.location - The location where this cluster's nodes
 *     and storage reside. For best performance clients should be located as
 *     as close as possible to this cluster. Currently only zones are
 *     supported.
 * @param {number} options.nodes - The number of nodes allocated to this
 *     cluster. More nodes enable higher throughput and more consistent
 *     performance.
 * @param {string} options.storage - The type of storage used by this cluster
 *     to serve its parent instance's tables. Options are 'hdd' or 'ssd'.
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request.
 * @param {module:bigtable/cluster} callback.cluster - The newly created
 *     cluster.
 * @param {Operation} callback.operation - An operation object that can be used
 *     to check the status of the request.
 * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * var callback = function(err, cluster, operation, apiResponse) {
 *   if (err) {
 *     // Error handling omitted.
 *   }
 *
 *   operation
 *     .on('error', console.log)
 *     .on('complete', function() {
 *       // The cluster was created successfully.
 *     });
 * };
 *
 * var options = {
 *   location: 'us-central1-b',
 *   nodes: 3,
 *   storage: 'ssd'
 * };
 *
 * instance.createCluster('my-cluster', options, callback);
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * instance.createCluster('my-cluster', options).then(function(data) {
 *   var cluster = data[0];
 *   var operation = data[1];
 *   var apiResponse = data[2];
 * });
 */
Instance.prototype.createCluster = function(name, options, callback) {
  var self = this;

  if (is.function(options)) {
    callback = options;
    options = {};
  }

  var protoOpts = {
    service: 'BigtableInstanceAdmin',
    method: 'createCluster'
  };

  var reqOpts = {
    parent: this.id,
    clusterId: name
  };

  if (!is.empty(options)) {
    reqOpts.cluster = {};
  }

  if (options.location) {
    reqOpts.cluster.location = Cluster.getLocation_(
      this.parent.projectName,
      options.location
    );
  }

  if (options.nodes) {
    reqOpts.cluster.serveNodes = options.nodes;
  }

  if (options.storage) {
    var storageType = Cluster.getStorageType_(options.storage);
    reqOpts.cluster.defaultStorageType = storageType;
  }

  this.request(protoOpts, reqOpts, function(err, resp) {
    if (err) {
      callback(err, null, null, resp);
      return;
    }

    var bigtable = self.parent;

    var cluster = self.cluster(name);
    var operation = bigtable.operation(resp.name);
    operation.metadata = resp;

    callback(null, cluster, operation, resp);
  });
};

/**
 * Create a table on your Bigtable instance.
 *
 * @resource [Designing Your Schema]{@link https://cloud.google.com/bigtable/docs/schema-design}
 * @resource [Splitting Keys]{@link https://cloud.google.com/bigtable/docs/managing-tables#splits}
 *
 * @throws {error} If a name is not provided.
 *
 * @param {string} name - The name of the table.
 * @param {object=} options - Table creation options.
 * @param {object|string[]} options.families - Column families to be created
 *     within the table.
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
 * instance.createTable('prezzy', callback);
 *
 * //-
 * // Optionally specify column families to be created within the table.
 * //-
 * var options = {
 *   families: ['follows']
 * };
 *
 * instance.createTable('prezzy', options, callback);
 *
 * //-
 * // You can also specify garbage collection rules for your column families.
 * // See {module:bigtable/table#createFamily} for more information about
 * // column families and garbage collection rules.
 * //-
 * var options = {
 *   families: [
 *     {
 *       name: 'follows',
 *       rule:  {
 *         age: {
 *           seconds: 0,
 *           nanos: 5000
 *         },
 *         versions: 3,
 *         union: true
 *       }
 *     }
 *   ]
 * };
 *
 * instance.createTable('prezzy', options, callback);
 *
 * //-
 * // Pre-split the table based on the row key to spread the load across
 * // multiple Cloud Bigtable nodes.
 * //-
 * var options = {
 *   splits: ['10', '20']
 * };
 *
 * instance.createTable('prezzy', options, callback);
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * instance.createTable('prezzy', options).then(function(data) {
 *   var table = data[0];
 *   var apiResponse = data[1];
 * });
 */
Instance.prototype.createTable = function(name, options, callback) {
  var self = this;

  if (!name) {
    throw new Error('A name is required to create a table.');
  }

  options = options || {};

  if (is.function(options)) {
    callback = options;
    options = {};
  }

  var protoOpts = {
    service: 'BigtableTableAdmin',
    method: 'createTable'
  };

  var reqOpts = {
    parent: this.id,
    tableId: name,
    table: {
      // The granularity at which timestamps are stored in the table.
      // Currently only milliseconds is supported, so it's not configurable.
      granularity: 0
    }
  };

  if (options.splits) {
    reqOpts.initialSplits = options.splits.map(function(key) {
      return {
        key: key
      };
    });
  }

  if (options.families) {
    var columnFamilies = options.families.reduce(function(families, family) {
      if (is.string(family)) {
        family = {
          name: family
        };
      }

      var columnFamily = families[family.name] = {};

      if (family.rule) {
        columnFamily.gcRule = Family.formatRule_(family.rule);
      }

      return families;
    }, {});

    reqOpts.table.columnFamilies = columnFamilies;
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
 * Get a reference to a Bigtable Cluster.
 *
 * @param {string} name - The name of the cluster.
 * @return {module:bigtable/cluster}
 */
Instance.prototype.cluster = function(name) {
  return new Cluster(this, name);
};

/**
 * Get Cluster objects for all of your clusters.
 *
 * @param {object=} query - Query object.
 * @param {boolean} query.autoPaginate - Have pagination handled
 *     automatically. Default: true.
 * @param {number} query.maxApiCalls - Maximum number of API calls to make.
 * @param {number} query.maxResults - Maximum number of results to return.
 * @param {string} query.pageToken - Token returned from a previous call, to
 *     request the next page of results.
 * @param {function} callback - The callback function.
 * @param {?error} callback.error - An error returned while making this request.
 * @param {module:bigtable/cluster[]} callback.clusters - List of all
 *     Clusters.
 * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * instance.getClusters(function(err, clusters) {
 *   if (!err) {
 *     // `clusters` is an array of Cluster objects.
 *   }
 * });
 *
 * //-
 * // To control how many API requests are made and page through the results
 * // manually, set `autoPaginate` to false.
 * //-
 * var callback = function(err, clusters, nextQuery, apiResponse) {
 *   if (nextQuery) {
 *     // More results exist.
 *     instance.getClusters(nextQuery, calback);
 *   }
 * };
 *
 * instance.getClusters({
 *   autoPaginate: false
 * }, callback);
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * instance.getClusters().then(function(data) {
 *   var clusters = data[0];
 * });
 */
Instance.prototype.getClusters = function(query, callback) {
  var self = this;

  if (is.function(query)) {
    callback = query;
    query = {};
  }

  var protoOpts = {
    service: 'BigtableInstanceAdmin',
    method: 'listClusters'
  };

  var reqOpts = extend({}, query, {
    parent: this.id
  });

  this.request(protoOpts, reqOpts, function(err, resp) {
    if (err) {
      callback(err, null, null, resp);
      return;
    }

    var clusters = resp.clusters.map(function(clusterObj) {
      var cluster = self.cluster(clusterObj.name);
      cluster.metadata = clusterObj;
      return cluster;
    });

    var nextQuery = null;

    if (resp.nextPageToken) {
      nextQuery = extend({}, query, {
        pageToken: resp.nextPageToken
      });
    }

    callback(null, clusters, nextQuery, resp);
  });
};

/**
 * Get {module:bigtable/cluster} objects for all of your clusters as a readable
 * object stream.
 *
 * @param {object=} query - Configuration object. See
 *     {module:bigtable/instance#getClusters} for a complete list of options.
 * @return {stream}
 *
 * @example
 * instance.getClustersStream()
 *   .on('error', console.error)
 *   .on('data', function(cluster) {
 *     // `cluster` is a Cluster object.
 *   })
 *   .on('end', function() {
 *     // All clusters retrieved.
 *   });
 *
 * //-
 * // If you anticipate many results, you can end a stream early to prevent
 * // unnecessary processing and API requests.
 * //-
 * instance.getClustersStream()
 *   .on('data', function(cluster) {
 *     this.end();
 *   });
 */
Instance.prototype.getClustersStream =
  common.paginator.streamify('getClusters');

/**
 * Get Table objects for all the tables in your Compute instance.
 *
 * @param {object=} query - Query object.
 * @param {boolean} query.autoPaginate - Have pagination handled automatically.
 *     Default: true.
 * @param {number} query.maxApiCalls - Maximum number of API calls to make.
 * @param {number} query.maxResults - Maximum number of items to return.
 * @param {string} query.pageToken - A previously-returned page token
 *     representing part of a larger set of results to view.
 * @param {string} query.view - View over the table's fields. Possible options
 *     are 'name', 'schema' or 'full'. Default: 'name'.
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request.
 * @param {module:bigtable/table[]} callback.tables - List of all Tables.
 * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * instance.getTables(function(err, tables) {
 *   if (!err) {
 *     // `tables` is an array of Table objects.
 *   }
 * });
 *
 * //-
 * // To control how many API requests are made and page through the results
 * // manually, set `autoPaginate` to false.
 * //-
 * var callback = function(err, tables, nextQuery, apiResponse) {
 *   if (nextQuery) {
 *     // More results exist.
 *     instance.getTables(nextQuery, calback);
 *   }
 * };
 *
 * instance.getTables({
 *   autoPaginate: false
 * }, callback);
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * instance.getTables().then(function(data) {
 *   var tables = data[0];
 * });
 */
Instance.prototype.getTables = function(query, callback) {
  var self = this;

  if (is.function(query)) {
    callback = query;
    query = {};
  }

  var protoOpts = {
    service: 'BigtableTableAdmin',
    method: 'listTables'
  };

  var reqOpts = extend({}, query, {
    parent: this.id,
    view: Table.VIEWS[query.view || 'unspecified']
  });

  this.request(protoOpts, reqOpts, function(err, resp) {
    if (err) {
      callback(err, null, resp);
      return;
    }

    var tables = resp.tables.map(function(metadata) {
      var name = metadata.name.split('/').pop();
      var table = self.table(name);

      table.metadata = metadata;
      return table;
    });

    var nextQuery = null;
    if (resp.nextPageToken) {
      nextQuery = extend({}, query, {
        pageToken: resp.nextPageToken
      });
    }

    callback(null, tables, nextQuery, resp);
  });
};

/**
 * Get {module:bigtable/table} objects for all the tables in your Compute
 * instance as a readable object stream.
 *
 * @param {object=} query - Configuration object. See
 *     {module:bigtable/instance#getTables} for a complete list of options.
 * @return {stream}
 *
 * @example
 * instance.getTablesStream()
 *   .on('error', console.error)
 *   .on('data', function(table) {
 *     // table is a Table object.
 *   })
 *   .on('end', function() {
 *     // All tables retrieved.
 *   });
 *
 * //-
 * // If you anticipate many results, you can end a stream early to prevent
 * // unnecessary processing and API requests.
 * //-
 * instance.getTablesStream()
 *   .on('data', function(table) {
 *     this.end();
 *   });
 */
Instance.prototype.getTablesStream = common.paginator.streamify('getTables');

/**
 * Get a reference to a Bigtable table.
 *
 * @param {string} name - The name of the table.
 * @return {module:bigtable/table}
 *
 * @example
 * var table = instance.table('presidents');
 */
Instance.prototype.table = function(name) {
  return new Table(this, name);
};

/*! Developer Documentation
 *
 * These methods can be auto-paginated.
 */
common.paginator.extend(Instance, ['getClusters', 'getTables']);

/*! Developer Documentation
 *
 * All async methods (except for streams) will return a Promise in the event
 * that a callback is omitted.
 */
common.util.promisifyAll(Instance, {
  exclude: ['cluster', 'table']
});

module.exports = Instance;
