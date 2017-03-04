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

var arrify = require('arrify');
var common = require('@google-cloud/common');
var commonGrpc = require('@google-cloud/common-grpc');
var concat = require('concat-stream');
var flatten = require('lodash.flatten');
var is = require('is');
var propAssign = require('prop-assign');
var pumpify = require('pumpify');
var through = require('through2');
var util = require('util');

/**
 * @type {module:bigtable/family}
 * @private
 */
var Family = require('./family.js');

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
 * @type {module:bigtable/row}
 * @private
 */
var Row = require('./row.js');

/**
 * Create a Table object to interact with a Cloud Bigtable table.
 *
 * @constructor
 * @alias module:bigtable/table
 *
 * @param {string} name - Name of the table.
 *
 * @example
 * var instance = bigtable.instance('my-instance');
 * var table = instance.table('prezzy');
 */
function Table(instance, name) {
  var id = Table.formatName_(instance.id, name);

  var methods = {

    /**
     * Create a table.
     *
     * @param {object=} options - See {module:bigtable/instance#createTable}.
     *
     * @example
     * table.create(function(err, table, apiResponse) {
     *   if (!err) {
     *     // The table was created successfully.
     *   }
     * });
     *
     * //-
     * // If the callback is omitted, we'll return a Promise.
     * //-
     * table.create().then(function(data) {
     *   var table = data[0];
     *   var apiResponse = data[1];
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
     *
     * //-
     * // If the callback is omitted, we'll return a Promise.
     * //-
     * table.delete().then(function(data) {
     *   var apiResponse = data[0];
     * });
     */
    delete: {
      protoOpts: {
        service: 'BigtableTableAdmin',
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
     *
     * //-
     * // If the callback is omitted, we'll return a Promise.
     * //-
     * table.exists().then(function(data) {
     *   var exists = data[0];
     * });
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
     * @param {string} options.view - The view to be applied to the table
     *   fields. See {module:bigtable/table#getMetadata}.
     *
     * @example
     * table.get(function(err, table, apiResponse) {
     *   // The `table` data has been populated.
     * });
     *
     * //-
     * // If the callback is omitted, we'll return a Promise.
     * //-
     * table.get().then(function(data) {
     *   var table = data[0];
     *   var apiResponse = data[0];
     * });
     */
    get: true
  };

  var config = {
    parent: instance,
    id: id,
    methods: methods,
    createMethod: function(_, options, callback) {
      instance.createTable(name, options, callback);
    }
  };

  commonGrpc.ServiceObject.call(this, config);
}

util.inherits(Table, commonGrpc.ServiceObject);

/**
 * The view to be applied to the returned table's fields.
 * Defaults to schema if unspecified.
 *
 * @private
 */
Table.VIEWS = {
  unspecified: 0,
  name: 1,
  schema: 2,
  full: 4
};

/**
 * Formats the table name to include the Bigtable cluster.
 *
 * @private
 *
 * @param {string} instanceName - The formatted instance name.
 * @param {string} name - The table name.
 *
 * @example
 * Table.formatName_(
 *   'projects/my-project/zones/my-zone/instances/my-instance',
 *   'my-table'
 * );
 * // 'projects/my-project/zones/my-zone/instances/my-instance/tables/my-table'
 */
Table.formatName_ = function(instanceName, name) {
  if (name.indexOf('/') > -1) {
    return name;
  }

  return instanceName + '/tables/' + name;
};

/**
 * Creates a range based off of a key prefix.
 *
 * @private
 *
 * @param {string} start - The key prefix/starting bound.
 * @return {object} range
 *
 * @example
 * Table.createPrefixRange_('start');
 * // => {
 * //   start: 'start',
 * //   end: {
 * //     value: 'staru',
 * //     inclusive: false
 * //   }
 * // }
 */
Table.createPrefixRange_ = function(start) {
  var prefix = start.replace(new RegExp('[\xff]+$'), '');
  var endKey = '';

  if (prefix) {
    var position = prefix.length - 1;
    var charCode = prefix.charCodeAt(position);
    var nextChar = String.fromCharCode(charCode + 1);

    endKey = prefix.substring(0, position) + nextChar;
  }

  return {
    start: start,
    end: {
      value: endKey,
      inclusive: !endKey
    }
  };
};

/**
 * Create a column family.
 *
 * Optionally you can send garbage collection rules and when creating a family.
 * Garbage collection executes opportunistically in the background, so it's
 * possible for reads to return a cell even if it matches the active expression
 * for its family.
 *
 * @resource [Garbage Collection Proto Docs]{@link https://github.com/googleapis/googleapis/blob/master/google/bigtable/admin/table/v1/bigtable_table_data.proto#L59}
 *
 * @throws {error} If a name is not provided.
 *
 * @param {string} name - The name of column family.
 * @param {object=} rule - Garbage collection rule.
 * @param {object} rule.age - Delete cells in a column older than the given
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
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * table.createFamily('follows').then(function(data) {
 *   var family = data[0];
 *   var apiResponse = data[1];
 * });
 */
Table.prototype.createFamily = function(name, rule, callback) {
  var self = this;

  if (is.function(rule)) {
    callback = rule;
    rule = null;
  }

  if (!name) {
    throw new Error('A name is required to create a family.');
  }

  var grpcOpts = {
    service: 'BigtableTableAdmin',
    method: 'modifyColumnFamilies'
  };

  var mod = {
    id: name,
    create: {}
  };

  if (rule) {
    mod.create.gcRule = Family.formatRule_(rule);
  }

  var reqOpts = {
    name: this.id,
    modifications: [mod]
  };

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
 * Get {module:bigtable/row} objects for the rows currently in your table as a
 * readable object stream.
 *
 * @param {options=} options - Configuration object.
 * @param {boolean} options.decode - If set to `false` it will not decode Buffer
 *     values returned from Bigtable. Default: true.
 * @param {string} options.end - End value for key range.
* @param {module:bigtable/filter} options.filter - Row filters allow you to
 *     both make advanced queries and format how the data is returned.
 * @param {string[]} options.keys - A list of row keys.
 * @param {number} options.limit - Maximum number of rows to be returned.
 * @param {string} options.prefix - Prefix that the row key must match.
 * @param {object[]} options.ranges - A list of key ranges.
 * @param {string} options.start - Start value for key range.
 * @return {stream}
 *
 * @example
 * table.createReadStream()
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
 * table.createReadStream()
 *   .on('data', function(row) {
 *     this.end();
 *   });
 *
 * //-
 * // Specify arbitrary keys for a non-contiguous set of rows.
 * // The total size of the keys must remain under 1MB, after encoding.
 * //-
 * table.createReadStream({
 *   keys: [
 *     'alincoln',
 *     'gwashington'
 *   ]
 * });
 *
 * //-
 * // Scan for row keys that contain a specific prefix.
 * //-
 * table.createReadStream({
 *   prefix: 'gwash'
 * });
 *
 * //-
 * // Specify a contiguous range of rows to read by supplying `start` and `end`
 * // keys.
 * //
 * // If the `start` key is omitted, it is interpreted as an empty string.
 * // If the `end` key is omitted, it is interpreted as infinity.
 * //-
 * table.createReadStream({
 *   start: 'alincoln',
 *   end: 'gwashington'
 * });
 *
 * //-
 * // Specify multiple ranges.
 * //-
 * table.createReadStream({
 *   ranges: [{
 *     start: 'alincoln',
 *     end: 'gwashington'
 *   }, {
 *     start: 'tjefferson',
 *     end: 'jadams'
 *   }]
 * });
 *
 * //-
 * // Apply a {module:bigtable/filter} to the contents of the specified rows.
 * //-
 * table.createReadStream({
 *   filter: [
 *     {
 *       column: 'gwashington'
 *     }, {
 *       value: 1
 *     }
 *   ]
 * });
 */
Table.prototype.createReadStream = function(options) {
  var self = this;

  options = options || {};
  options.ranges = options.ranges || [];

  var grpcOpts = {
    service: 'Bigtable',
    method: 'readRows'
  };

  var reqOpts = {
    tableName: this.id,
    objectMode: true
  };

  if (options.start || options.end) {
    options.ranges.push({
      start: options.start,
      end: options.end
    });
  }

  if (options.prefix) {
    options.ranges.push(Table.createPrefixRange_(options.prefix));
  }

  if (options.keys || options.ranges.length) {
    reqOpts.rows = {};

    if (options.keys) {
      reqOpts.rows.rowKeys = options.keys.map(Mutation.convertToBytes);
    }

    if (options.ranges.length) {
      reqOpts.rows.rowRanges = options.ranges.map(function(range) {
        return Filter.createRange(range.start, range.end, 'Key');
      });
    }
  }

  if (options.filter) {
    reqOpts.filter = Filter.parse(options.filter);
  }

  if (options.limit) {
    reqOpts.rowsLimit = options.limit;
  }

  return pumpify.obj([
    this.requestStream(grpcOpts, reqOpts),
    through.obj(function(data, enc, next) {
      var throughStream = this;
      var rows = Row.formatChunks_(data.chunks, {
        decode: options.decode
      });

      rows.forEach(function(rowData) {
        var row = self.row(rowData.key);

        row.data = rowData.data;
        throughStream.push(row);
      });

      next();
    })
  ]);
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
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * table.deleteRows().then(function(data) {
 *   var apiResponse = data[0];
 * });
 */
Table.prototype.deleteRows = function(options, callback) {
  if (is.function(options)) {
    callback = options;
    options = {};
  }

  var grpcOpts = {
    service: 'BigtableTableAdmin',
    method: 'dropRowRange'
  };

  var reqOpts = {
    name: this.id
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
 * @throws {error} If a name is not provided.
 *
 * @param {string} name - The family name.
 * @return {module:bigtable/family}
 *
 * @example
 * var family = table.family('my-family');
 */
Table.prototype.family = function(name) {
  if (!name) {
    throw new Error('A family name must be provided.');
  }

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
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * table.getFamilies().then(function(data) {
 *   var families = data[0];
 *   var apiResponse = data[1];
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
 * Get the table's metadata.
 *
 * @param {object=} options - Table request options.
 * @param {string} options.view - The view to be applied to the table fields.
 * @param {function=} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this
 *     request.
 * @param {object} callback.metadata - The table's metadata.
 * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * table.getMetadata(function(err, metadata, apiResponse) {});
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * table.getMetadata().then(function(data) {
 *   var metadata = data[0];
 *   var apiResponse = data[1];
 * });
 */
Table.prototype.getMetadata = function(options, callback) {
  var self = this;

  if (is.function(options)) {
    callback = options;
    options = {};
  }

  var protoOpts = {
    service: 'BigtableTableAdmin',
    method: 'getTable'
  };

  var reqOpts = {
    name: this.id,
    view: Table.VIEWS[options.view || 'unspecified']
  };

  this.request(protoOpts, reqOpts, function(err, resp) {
    if (err) {
      callback(err, null, resp);
      return;
    }

    self.metadata = resp;
    callback(null, self.metadata, resp);
  });
};

/**
 * Get {module:bigtable/row} objects for the rows currently in your table.
 *
 * This method is not recommended for large datasets as it will buffer all rows
 * before returning the results. Instead we recommend using the streaming API
 * via {module:bigtable/table#createReadStream}.
 *
 * @param {object=} options - Configuration object. See
 *     {module:bigtable/table#createReadStream} for a complete list of options.
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request.
 * @param {module:bigtable/row[]} callback.rows - List of Row objects.
 *
 * @example
 * table.getRows(function(err, rows) {
 *   if (!err) {
 *     // `rows` is an array of Row objects.
 *   }
 * });
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * table.getRows().then(function(data) {
 *   var rows = data[0];
 * });
 */
Table.prototype.getRows = function(options, callback) {
  if (is.function(options)) {
    callback = options;
    options = {};
  }

  this.createReadStream(options)
    .on('error', callback)
    .pipe(concat(function(rows) {
      callback(null, rows);
    }));
};

/**
 * Insert or update rows in your table. It should be noted that gRPC only allows
 * you to send payloads that are less than or equal to 4MB. If you're inserting
 * more than that you may need to send smaller individual requests.
 *
 * @param {object|object[]} entries - List of entries to be inserted.
 *     See {module:bigtable/table#mutate}.
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request.
 * @param {object[]} callback.err.errors - If present, these represent partial
 *     failures. It's possible for part of your request to be completed
 *     successfully, while the other part was not.
 *
 * @example
 * var callback = function(err) {
 *   if (err) {
 *     // An API error or partial failure occurred.
 *
 *     if (err.name === 'PartialFailureError') {
 *       // err.errors[].code = 'Response code'
 *       // err.errors[].message = 'Error message'
 *       // err.errors[].entry = The original entry
 *     }
 *   }
 * };
 *
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
 * table.insert(entries, callback);
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
 * table.insert(entries, callback);
 *
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * table.insert(entries).then(function() {
 *   // All requested inserts have been processed.
 * });
 * //-
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
 * @param {object[]} callback.err.errors - If present, these represent partial
 *     failures. It's possible for part of your request to be completed
 *     successfully, while the other part was not.
 *
 * @example
 * //-
 * // Insert entities. See {module:bigtable/table#insert}.
 * //-
 * var callback = function(err) {
 *   if (err) {
 *     // An API error or partial failure occurred.
 *
 *     if (err.name === 'PartialFailureError') {
 *       // err.errors[].code = 'Response code'
 *       // err.errors[].message = 'Error message'
 *       // err.errors[].entry = The original entry
 *     }
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
 * table.mutate(entries, callback);
 *
 * //-
 * // Delete entities. See {module:bigtable/row#deleteCells}.
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
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * table.mutate(entries).then(function() {
 *   // All requested mutations have been processed.
 * });
 */
Table.prototype.mutate = function(entries, callback) {
  entries = flatten(arrify(entries));

  var grpcOpts = {
    service: 'Bigtable',
    method: 'mutateRows'
  };

  var reqOpts = {
    objectMode: true,
    tableName: this.id,
    entries: entries.map(Mutation.parse)
  };

  var mutationErrors = [];

  this.requestStream(grpcOpts, reqOpts)
    .on('error', callback)
    .on('data', function(obj) {
      obj.entries.forEach(function(entry) {
        // Mutation was successful.
        if (entry.status.code === 0) {
          return;
        }

        var status = commonGrpc.Service.decorateStatus_(entry.status);
        status.entry = entries[entry.index];

        mutationErrors.push(status);
      });
    })
    .on('end', function() {
      var err = null;

      if (mutationErrors.length > 0) {
        err = new common.util.PartialFailureError({
          errors: mutationErrors
        });
      }

      callback(err);
    });
};

/**
 * Get a reference to a table row.
 *
 * @throws {error} If a key is not provided.
 *
 * @param {string} key - The row key.
 * @return {module:bigtable/row}
 *
 * @example
 * var row = table.row('lincoln');
 */
Table.prototype.row = function(key) {
  if (!key) {
    throw new Error('A row key must be provided.');
  }

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
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * table.sampleRowKeys().then(function(data) {
 *   var keys = data[0];
 * });
 */
Table.prototype.sampleRowKeys = function(callback) {
  this.sampleRowKeysStream()
    .on('error', callback)
    .pipe(concat(function(keys) {
      callback(null, keys);
    }));
};

/**
 * Returns a sample of row keys in the table as a readable object stream.
 *
 * See {module:bigtable/table#sampleRowKeys} for more details.
 *
 * @return {stream}
 *
 * @example
 * table.sampleRowKeysStream()
 *   .on('error', console.error)
 *   .on('data', function(key) {
 *     // Do something with the `key` object.
 *   });
 *
 * //-
 * // If you anticipate many results, you can end a stream early to prevent
 * // unnecessary processing.
 * //-
 * table.sampleRowKeysStream()
 *   .on('data', function(key) {
 *     this.end();
 *   });
 */
Table.prototype.sampleRowKeysStream = function() {
  var grpcOpts = {
    service: 'Bigtable',
    method: 'sampleRowKeys'
  };

  var reqOpts = {
    tableName: this.id,
    objectMode: true
  };

  return pumpify.obj([
    this.requestStream(grpcOpts, reqOpts),
    through.obj(function(key, enc, next) {
      next(null, {
        key: key.rowKey,
        offset: key.offsetBytes
      });
    })
  ]);
};

/*! Developer Documentation
 *
 * All async methods (except for streams) will return a Promise in the event
 * that a callback is omitted.
 */
common.util.promisifyAll(Table, {
  exclude: ['family', 'row']
});

module.exports = Table;
