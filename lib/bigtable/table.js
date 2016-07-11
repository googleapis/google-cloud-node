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
 * @module bigtable/table
 */

'use strict';

var nodeutil = require('util');
var arrify = require('arrify');
var is = require('is');
var propAssign = require('prop-assign');
var through = require('through2');
var concat = require('concat-stream');
var pumpify = require('pumpify');
var flatten = require('lodash.flatten');

/**
 * @type {module:bigtable/family}
 * @private
 */
var Family = require('./family.js');

/**
 * @type {module:bigtable/row}
 * @private
 */
var Row = require('./row.js');

/**
 * @type {module:bigtable/filter}
 * @private
 */
var Filter = require('./filter.js');

/**
 * @type {module:bigtable/mutation}
 * @private
 */
var Mutation = require('./mutation.js');

/**
 * @type {module:common/grpcServiceObject}
 * @private
 */
var GrpcServiceObject = require('../common/grpc-service-object.js');

/**
 * Create a Table object to interact with a Google Cloud Bigtable table.
 *
 * @constructor
 * @alias module:bigtable/table
 *
 * @param {string} name - Name of the table.
 *
 * @example
 * var gcloud = require('gcloud');
 *
 * var bigtable = gcloud.bigtable({
 *   keyFilename: '/path/to/keyfile.json',
 *   projectId: 'grape-spaceship-123',
 *   cluster: 'gcloud-node',
 *   zone: 'us-central1-b'
 * });
 *
 * var table = bigtable.table('prezzy');
 */
function Table(bigtable, name) {
  var id = Table.formatName_(bigtable.clusterName, name);

  var methods = {

    /**
     * Create a table.
     *
     * @param {object=} options - See {module:bigtable#createTable}.
     *
     * @example
     * table.create(function(err, table, apiResponse) {
     *   if (!err) {
     *     // The table was created successfully.
     *   }
     * });
     */
    create: true,

    /**
     * Delete the table.
     *
     * @param {function=} callback - The callback function.
     * @param {?error} callback.err - An error returned while making this
     *     request.
     * @param {object} callback.apiResponse - The full API response.
     *
     * @example
     * table.delete(function(err, apiResponse) {});
     */
    delete: {
      protoOpts: {
        service: 'BigtableTableService',
        method: 'deleteTable'
      },
      reqOpts: {
        name: id
      }
    },

    /**
     * Check if a table exists.
     *
     * @param {function} callback - The callback function.
     * @param {?error} callback.err - An error returned while making this
     *     request.
     * @param {boolean} callback.exists - Whether the table exists or not.
     *
     * @example
     * table.exists(function(err, exists) {});
     */
    exists: true,

    /**
     * Get a table if it exists.
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
     * table.get(function(err, table, apiResponse) {
     *   // The `table` data has been populated.
     * });
     */
    get: true,

    /**
     * Get the table's metadata.
     *
     * @param {function=} callback - The callback function.
     * @param {?error} callback.err - An error returned while making this
     *     request.
     * @param {object} callback.metadata - The table's metadata.
     * @param {object} callback.apiResponse - The full API response.
     *
     * @example
     * table.getMetadata(function(err, metadata, apiResponse) {});
     */
    getMetadata: {
      protoOpts: {
        service: 'BigtableTableService',
        method: 'getTable'
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
      bigtable.createTable(name, options, callback);
    }
  };

  GrpcServiceObject.call(this, config);
}

nodeutil.inherits(Table, GrpcServiceObject);

/**
 * Formats the table name to include the Bigtable cluster.
 *
 * @private
 *
 * @param {string} clusterName - The formatted cluster name.
 * @param {string} name - The table name.
 *
 * @example
 * Table.formatName_(
 *   'projects/my-project/zones/my-zone/clusters/my-cluster',
 *   'my-table'
 * );
 * // 'projects/my-project/zones/my-zone/clusters/my-cluster/tables/my-table'
 */
Table.formatName_ = function(clusterName, name) {
  if (name.indexOf('/') > -1) {
    return name;
  }

  return clusterName + '/tables/' + name;
};

/**
 * Formats a row range into the desired proto format.
 *
 * @private
 *
 * @param {object} range - The range object.
 * @param {string} range.start - The lower bound for the range.
 * @param {string} range.end - The upper bound for the range.
 * @return {object}
 *
 * @example
 * Table.formatRowRange_({
 *   start: 'gwashington',
 *   end: 'alincoln'
 * });
 * // {
 * //   startKey: new Buffer('gwashington'),
 * //   endKey: new Buffer('alincoln')
 * // }
 */
Table.formatRowRange_ = function(range) {
  var rowRange = {};

  if (range.start) {
    rowRange.startKey = Mutation.convertToBytes(range.start);
  }

  if (range.end) {
    rowRange.endKey = Mutation.convertToBytes(range.end);
  }

  return rowRange;
};

/**
 * Create a column family.
 *
 * Optionally you can send garbage collection rules and expressions when
 * creating a family. Garbage collection executes opportunistically in the
 * background, so it's possible for reads to return a cell even if it
 * matches the active expression for its family.
 *
 * @resource [Garbage Collection Proto Docs]{@link https://github.com/googleapis/googleapis/blob/master/google/bigtable/admin/table/v1/bigtable_table_data.proto#L59}
 *
 * @param {string} name - The name of column family.
 * @param {string|object=} rule - Garbage collection rule.
 * @param {object=} rule.age - Delete cells in a column older than the given
 *     age. Values must be at least 1 millisecond.
 * @param {number} rule.versions - Maximum number of versions to delete cells
 *     in a column, except for the most recent.
 * @param {boolean} rule.intersect - Cells to delete should match all rules.
 * @param {boolean} rule.union - Cells to delete should match any of the rules.
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request.
 * @param {module:bigtable/family} callback.family - The newly created Family.
 * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * var callback = function(err, family, apiResponse) {
 *   // `family` is a Family object
 * };
 *
 * var rule = {
 *   age: {
 *     seconds: 0,
 *     nanos: 5000
 *   },
 *   versions: 3,
 *   union: true
 * };
 *
 * table.createFamily('follows', rule, callback);
 *
 * //-
 * // Alternatively you can send a garbage collection expression.
 * //-
 * var expression = 'version() > 3 || (age() > 3d && version() > 1)';
 *
 * table.createFamily('follows', expression, callback);
 */
Table.prototype.createFamily = function(name, rule, callback) {
  var self = this;

  if (is.function(rule)) {
    callback = rule;
    rule = null;
  }

  var grpcOpts = {
    service: 'BigtableTableService',
    method: 'createColumnFamily'
  };

  var reqOpts = {
    name: this.id,
    columnFamilyId: name
  };

  if (is.string(rule)) {
    reqOpts.columnFamily = {
      gcExpression: rule
    };
  } else if (is.object(rule)) {
    reqOpts.columnFamily = {
      gcRule: Family.formatRule_(rule)
    };
  }

  this.request(grpcOpts, reqOpts, function(err, resp) {
    if (err) {
      callback(err, null, resp);
      return;
    }

    var family = self.family(resp.name);
    family.metadata = resp;
    callback(null, family, resp);
  });
};

/**
 * Delete all rows in the table, optionally corresponding to a particular
 * prefix.
 *
 * @param {options=} options - Configuration object.
 * @param {string} options.prefix - Row key prefix, when omitted all rows
 *     will be deleted.
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request.
 * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * //-
 * // You can supply a prefix to delete all corresponding rows.
 * //-
 * var callback = function(err, apiResponse) {
 *   if (!err) {
 *     // Rows successfully deleted.
 *   }
 * };
 *
 * table.deleteRows({
 *   prefix: 'alincoln'
 * }, callback);
 *
 * //-
 * // If you choose to omit the prefix, all rows in the table will be deleted.
 * //-
 * table.deleteRows(callback);
 */
Table.prototype.deleteRows = function(options, callback) {
  if (is.function(options)) {
    callback = options;
    options = {};
  }

  var grpcOpts = {
    service: 'BigtableTableService',
    method: 'bulkDeleteRows'
  };

  var reqOpts = {
    tableName: this.id
  };

  if (options.prefix) {
    reqOpts.rowKeyPrefix = Mutation.convertToBytes(options.prefix);
  } else {
    reqOpts.deleteAllDataFromTable = true;
  }

  this.request(grpcOpts, reqOpts, callback);
};

/**
 * Get a reference to a Table Family.
 *
 * @param {string} name - The family name.
 * @return {module:bigtable/family}
 *
 * @example
 * var family = table.family('my-family');
 */
Table.prototype.family = function(name) {
  return new Family(this, name);
};

/**
 * Get Family objects for all the column familes in your table.
 *
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request.
 * @param {module:bigtable/family[]} callback.families - The list of families.
 * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * table.getFamilies(function(err, families, apiResponse) {
 *   // `families` is an array of Family objects.
 * });
 */
Table.prototype.getFamilies = function(callback) {
  var self = this;

  this.getMetadata(function(err, resp) {
    if (err) {
      callback(err, null, resp);
      return;
    }

    var families = Object.keys(resp.columnFamilies).map(function(familyId) {
      var family = self.family(familyId);
      family.metadata = resp.columnFamilies[familyId];
      return family;
    });

    callback(null, families, resp);
  });
};

/**
 * Get Row objects for the rows currently in your table.
 *
 * @param {options=} options - Configuration object.
 * @param {string} options.key - An individual row key.
 * @param {string[]} options.keys - A list of row keys.
 * @param {string} options.start - Start value for key range.
 * @param {string} options.end - End value for key range.
 * @param {object[]} options.ranges - A list of key ranges.
 * @param {module:bigtable/filter} options.filter - Row filters allow you to
 *     both make advanced queries and format how the data is returned.
 * @param {boolean} options.interleave - Allow for interleaving.
 * @param {number} options.limit - Maximum number of rows to be returned.
 * @param {function=} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request.
 * @param {module:bigtable/row[]} callback.rows - List of Row objects.
 *
 * @example
 * //-
 * // While this method does accept a callback, this is not recommended for
 * // large datasets as it will buffer all rows before executing the callback.
 * // Instead we recommend using the streaming API by simply omitting the
 * // callback.
 * //-
 * var callback = function(err, rows) {
 *   if (!err) {
 *     // `rows` is an array of Row objects.
 *   }
 * };
 *
 * table.getRows(callback);
 *
 * //-
 * // Specify a single row to be returned.
 * //-
 * table.getRows({
 *   key: 'alincoln'
 * }, callback);
 *
 * //-
 * // Specify arbitrary keys for a non-contiguous set of rows.
 * // The total size of the keys must remain under 1MB, after encoding.
 * //-
 * table.getRows({
 *   keys: [
 *     'alincoln',
 *     'gwashington'
 *   ]
 * }, callback);
 *
 * //-
 * // Specify a contiguous range of rows to read by supplying `start` and `end`
 * // keys.
 * //
 * // If the `start` key is omitted, it is interpreted as an empty string.
 * // If the `end` key is omitted, it is interpreted as infinity.
 * //-
 * table.getRows({
 *   start: 'alincoln',
 *   end: 'gwashington'
 * }, callback);
 *
 * //-
 * // Specify multiple ranges.
 * //-
 * table.getRows({
 *   ranges: [{
 *     start: 'alincoln',
 *     end: 'gwashington'
 *   }, {
 *     start: 'tjefferson',
 *     end: 'jadams'
 *   }]
 * }, callback);
 *
 * //-
 * // By default, rows are read sequentially, producing results which are
 * // guaranteed to arrive in increasing row order. Setting `interleave` to
 * // true allows multiple rows to be interleaved in the response, which
 * // increases throughput but breaks this guarantee and may force the client
 * // to use more memory to buffer partially-received rows.
 * //-
 * table.getRows({
 *   interleave: true
 * }, callback);
 *
 * //-
 * // Apply a {module:bigtable/filter} to the contents of the specified rows.
 * //-
 * table.getRows({
 *   filter: [
 *     {
 *       column: 'gwashington'
 *     }, {
 *       value: 1
 *     }
 *   ]
 * }, callback);
 *
 * //-
 * // Get the rows from your table as a readable object stream.
 * //-
 * table.getRows()
 *   .on('error', console.error)
 *   .on('data', function(row) {
 *     // `row` is a Row object.
 *   })
 *   .on('end', function() {
 *     // All rows retrieved.
 *   });
 *
 * //-
 * // If you anticipate many results, you can end a stream early to prevent
 * // unnecessary processing.
 * //-
 * table.getRows()
 *   .on('data', function(row) {
 *     this.end();
 *   });
 */
Table.prototype.getRows = function(options, callback) {
  var self = this;

  if (is.function(options)) {
    callback = options;
    options = {};
  }

  options = options || {};

  var grpcOpts = {
    service: 'BigtableService',
    method: 'readRows'
  };

  var reqOpts = {
    tableName: this.id,
    objectMode: true
  };

  if (options.key) {
    reqOpts.rowKey = Mutation.convertToBytes(options.key);
  } else if (options.start || options.end) {
    reqOpts.rowRange = Table.formatRowRange_(options);
  } else if (options.keys || options.ranges) {
    reqOpts.rowSet = {};

    if (options.keys) {
      reqOpts.rowSet.rowKeys = options.keys.map(Mutation.convertToBytes);
    }

    if (options.ranges) {
      reqOpts.rowSet.rowRanges = options.ranges.map(Table.formatRowRange_);
    }
  }

  if (options.filter) {
    reqOpts.filter = Filter.parse(options.filter);
  }

  if (options.interleave) {
    reqOpts.allowRowInterleaving = options.interleave;
  }

  if (options.limit) {
    reqOpts.numRowsLimit = options.limit;
  }

  var stream = pumpify.obj([
    this.requestStream(grpcOpts, reqOpts),
    through.obj(function(rowData, enc, next) {
      var row = self.row(Mutation.convertFromBytes(rowData.rowKey));

      row.data = Row.formatChunks_(rowData.chunks);
      next(null, row);
    })
  ]);

  if (!is.function(callback)) {
    return stream;
  }

  stream
    .on('error', callback)
    .pipe(concat(function(rows) {
      callback(null, rows);
    }));
};

/**
 * Insert or update rows in your table.
 *
 * @param {object|object[]} entries - List of entries to be inserted.
 *     See {module:bigtable/table#mutate}.
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request.
 * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * var entries = [
 *  {
 *     key: 'alincoln',
 *     data: {
 *       follows: {
 *         gwashington: 1
 *       }
 *     }
 *   }
 * ];
 *
 * table.insert(entries, function(err, apiResponse) {});
 *
 * //-
 * // By default whenever you insert new data, the server will capture a
 * // timestamp of when your data was inserted. It's possible to provide a
 * // date object to be used instead.
 * //-
 * var entries = [
 *   {
 *     key: 'gwashington',
 *     data: {
 *       follows: {
 *         jadams: {
 *           value: 1,
 *           timestamp: new Date('March 22, 2016')
 *         }
 *       }
 *     }
 *   }
 * ];
 *
 * table.insert(entries, function(err, apiResponse) {});
 */
Table.prototype.insert = function(entries, callback) {
  entries = arrify(entries).map(propAssign('method', Mutation.methods.INSERT));

  return this.mutate(entries, callback);
};

/**
 * Apply a set of changes to be atomically applied to the specified row(s).
 * Mutations are applied in order, meaning that earlier mutations can be masked
 * by later ones.
 *
 * @param {object|object[]} entries - List of entities to be inserted or
 *     deleted.
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request.
 * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * //-
 * // Insert entities. See {module:bigtable/table#insert}
 * //-
 * var callback = function(err, apiResponse) {
 *   if (!err) {
 *     // Mutations were successful.
 *   }
 * };
 *
 * var entries = [
 *   {
 *     method: 'insert',
 *     key: 'gwashington',
 *     data: {
 *       follows: {
 *         jadams: 1
 *       }
 *     }
 *   }
 * ];
 *
 * table.mutate(entries, callback)
 *
 * //-
 * // Delete entities. See {module:bigtable/row#deleteCells}
 * //-
 * var entries = [
 *   {
 *     method: 'delete',
 *     key: 'gwashington'
 *   }
 * ];
 *
 * table.mutate(entries, callback);
 *
 * //-
 * // Delete specific columns within a row.
 * //-
 * var entries = [
 *   {
 *     method: 'delete',
 *     key: 'gwashington',
 *     data: [
 *       'follows:jadams'
 *     ]
 *   }
 * ];
 *
 * table.mutate(entries, callback);
 *
 * //-
 * // Mix and match mutations. This must contain at least one entry and at
 * // most 100,000.
 * //-
 * var entries = [
 *   {
 *     method: 'insert',
 *     key: 'alincoln',
 *     data: {
 *       follows: {
 *         gwashington: 1
 *       }
 *     }
 *   }, {
 *     method: 'delete',
 *     key: 'jadams',
 *     data: [
 *       'follows:gwashington'
 *     ]
 *   }
 * ];
 *
 * table.mutate(entries, callback);
 */
Table.prototype.mutate = function(entries, callback) {
  entries = flatten(arrify(entries)).map(Mutation.parse);

  var grpcOpts = {
    service: 'BigtableService',
    method: 'mutateRows'
  };

  var reqOpts = {
    tableName: this.id,
    entries: entries
  };

  this.request(grpcOpts, reqOpts, callback);
};

/**
 * Get a reference to a table row.
 *
 * @param {string} key - The row key.
 * @return {module:bigtable/row}
 *
 * @example
 * var row = table.row('lincoln');
 */
Table.prototype.row = function(key) {
  return new Row(this, key);
};

/**
 * Returns a sample of row keys in the table. The returned row keys will delimit
 * contigous sections of the table of approximately equal size, which can be
 * used to break up the data for distributed tasks like mapreduces.
 *
 * @param {function=} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request.
 * @param {object[]} callback.keys - The list of keys.
 *
 * @example
 * table.sampleRowKeys(function(err, keys) {
 *   // keys = [
 *   //   {
 *   //     key: '',
 *   //     offset: '805306368'
 *   //   },
 *   //   ...
 *   // ]
 * });
 *
 * //-
 * // Get the keys from your table as a readable object stream.
 * //-
 * table.sampleRowKeys()
 *   .on('error', console.error)
 *   .on('data', function(key) {
 *     // Do something with the `key` object.
 *   });
 *
 * //-
 * // If you anticipate many results, you can end a stream early to prevent
 * // unnecessary processing.
 * //-
 * table.sampleRowKeys()
 *   .on('data', function(key) {
 *     this.end();
 *   });
 */
Table.prototype.sampleRowKeys = function(callback) {
  var grpcOpts = {
    service: 'BigtableService',
    method: 'sampleRowKeys'
  };

  var reqOpts = {
    tableName: this.id,
    objectMode: true
  };

  var stream = pumpify.obj([
    this.requestStream(grpcOpts, reqOpts),
    through.obj(function(key, enc, next) {
      next(null, {
        key: key.rowKey,
        offset: key.offsetBytes
      });
    })
  ]);

  if (!is.function(callback)) {
    return stream;
  }

  stream
    .on('error', callback)
    .pipe(concat(function(keys) {
      callback(null, keys);
    }));
};

module.exports = Table;
