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
var is = require('is');
var extend = require('extend');
var nodeutil = require('util');

var Bigtable = require('./index.js');
var Cluster = require('./cluster.js');
var Table = require('./table.js');

/**
 *
 */
function Instance(bigtable, name) {
  this.instanceName = bigtable.projectName + '/instances/' + name;

  var methods = {

    /**
     *
     */
    create: true,

    /**
     *
     */
    delete: {
      protoOpts: {
        service: 'BigtableInstanceAdmin',
        method: 'deleteInstance'
      },
      reqOpts: {
        name: this.instanceName
      }
    },

    /**
     *
     */
    get: true,

    /**
     *
     */
    getMetadata: {
      protoOpts: {
        service: 'BigtableInstanceAdmin',
        method: 'getInstance'
      },
      reqOpts: {
        name: this.instanceName
      }
    },

    /**
     *
     */
    setMetadata: {
      protoOpts: {
        service: 'BigtableInstanceAdmin',
        method: 'updateInstance'
      },
      reqOpts: {
        name: this.instanceName
      }
    }
  };

  var config = {
    parent: bigtable,
    // id: id,
    methods: methods,
    createMethod: function(_, options, callback) {
      bigtable.createInstance(name, options, callback);
    }
  };

  common.GrpcServiceObject.call(this, config);
}

nodeutil.inherits(Instance, common.GrpcServiceObject);

/**
 * Formats the full table name into a user friendly version.
 *
 * @private
 *
 * @param {string} name - The formatted Table name.
 * @return {string}
 *
 * @example
 * Instance.formatTableName_('projects/p/zones/z/clusters/c/tables/my-table');
 * // => 'my-table'
 */
Instance.formatTableName_ = function(name) {
  if (name.indexOf('/') === -1) {
    return name;
  }

  var parts = name.split('/');
  return parts[parts.length - 1];
};

/**
 *
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
    parent: this.instanceName,
    clusterId: name
  };

  if (!is.empty(options)) {
    reqOpts.cluster = {};
  }

  if (options.location) {
    reqOpts.cluster.location = options.location;
  }

  if (options.nodes) {
    reqOpts.cluster.serveNodes = options.nodes;
  }

  if (options.storage) {
    var storageType = Bigtable.getStorageType_(options.storage);
    reqOpts.cluster.defaultStorageType = storageType;
  }

  this.request(protoOpts, reqOpts, function(err, resp) {
    if (err) {
      callback(err, null, null, resp);
      return;
    }

    var cluster = self.cluster(name);
    var operation = {};
    // var operation = self.parent.operation(resp.name, resp);

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
 * // Optionally specify column families to be created within the table.
 * //-
 * var options = {
 *   families: ['follows']
 * };
 *
 * bigtable.createTable('prezzy', options, callback);
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
 * bigtable.createTable('prezzy', options, callback);
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
Instance.prototype.createTable = function(name, options, callback) {
  var self = this;

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
    parent: this.instanceName,
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
 *
 */
Instance.prototype.cluster = function(name) {
  return new Cluster(this, name);
};

/**
 *
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

  var reqOpts = {
    parent: this.instanceName
  };

  if (query.pageToken) {
    reqOpts.pageToken = query.pageToken;
  }

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

    var nextQuery = extend({}, query, { pageToken: resp.nextPageToken });

    callback(null, clusters, nextQuery, resp);
  });
};

/**
 * Get Table objects for all the tables in your Bigtable cluster.
 *
 * @param {function} callback - The callback function.
 * @param {object=} query - Query object.
 * @param {boolean} query.autoPaginate - Have pagination handled automatically.
 *     Default: true.
 * @param {number} query.maxApiCalls - Maximum number of API calls to make.
 * @param {number} query.maxResults - Maximum number of items to return.
 * @param {string} query.pageToken - A previously-returned page token
 *     representing part of a larger set of results to view.
 * @param {string} query.view - View over the table's fields. Possible options
 *     are 'name', 'schema' or 'full'. Defaults to 'name'.
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request.
 * @param {module:bigtable/table[]} callback.tables - List of all Tables.
 * @param {object} callback.nextQuery - If present, query with this object to
 *     check for more results.
 * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * bigtable.getTables(function(err, tables) {
 *   if (!err) {
 *     // `tables` is an array of Table objects.
 *   }
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

  var reqOpts = {
    parent: this.instanceName,
    view: Table.VIEWS[query.view || 'unspecified']
  };

  if (query.pageToken) {
    reqOpts.pageToken = query.pageToken;
  }

  this.request(protoOpts, reqOpts, function(err, resp) {
    if (err) {
      callback(err, null, resp);
      return;
    }

    var tables = resp.tables.map(function(metadata) {
      var name = Instance.formatTableName_(metadata.name);
      var table = self.table(name);

      table.metadata = metadata;
      return table;
    });

    var nextQuery = null;
    if (resp.nextPageToken) {
      nextQuery = extend(true, query, { pageToken: resp.nextPageToken });
    }

    callback(null, tables, nextQuery, resp);
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
Instance.prototype.table = function(name) {
  return new Table(this, name);
};

module.exports = Instance;
