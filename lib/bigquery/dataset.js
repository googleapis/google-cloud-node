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
 * @module bigquery/dataset
 */

'use strict';

var extend = require('extend');

/**
 * @type {module:bigquery/table}
 * @private
 */
var Table = require('./table.js');

/**
 * @type {module:common/util}
 * @private
 */
var util = require('../common/util.js');

/*! Developer Documentation
 *
 * @param {module:bigquery} bigQuery - BigQuery instance.
 * @param {string} id - The ID of the Dataset.
 */
/**
 * Interact with your BigQuery dataset. Create a Dataset instance with
 * {module:bigquery#createDataset} or {module:bigquery#dataset}.
 *
 * @alias module:bigquery/dataset
 * @constructor
 */
function Dataset(bigQuery, id) {
  this.bigQuery = bigQuery;
  this.id = id;
  this.metadata = {};
}

/**
 * Create a table given a tableId or configuration object.
 *
 * @param {object} options - Table id or configuration object.
 * @param {string} options.id - The id of the table.
 * @param {string|object} options.schema - A comma-separated list of name:type
 *     pairs. Valid types are "string", "integer", "float", "boolean", and
 *     "timestamp". If the type is omitted, it is assumed to be "string".
 *     Example: "name:string, age:integer". Schemas can also be specified as a
 *     JSON array of fields, which allows for nested and repeated fields. See
 *     a [Table resource]{@link http://goo.gl/sl8Dmg} for more detailed
 *     information.
 * @param {function} callback - The callback function.
 *
 * @example
 * var tableConfig = {
 *   id: 'institution_data',
 *
 *   // From the data.gov CSV dataset (http://goo.gl/kSE7z6):
 *   schema: 'UNITID,INSTNM,ADDR,CITY,STABBR,ZIP,FIPS,OBEREG,CHFNM,...'
 * };
 *
 * dataset.createTable(tableConfig, function(err, table) {});
 */
Dataset.prototype.createTable = function(options, callback) {
  var that = this;

  extend(true, options, {
    tableReference: {
      datasetId: this.id,
      projectId: this.bigQuery.projectId,
      tableId: options.id
    }
  });

  if (util.is(options.schema, 'string')) {
    options.schema = Table.createSchemaFromString_(options.schema);
  }

  delete options.id;

  this.makeReq_('POST', '/tables', null, options, function(err, resp) {
    if (err) {
      callback(err);
      return;
    }

    var table = that.table(resp.tableReference.tableId);
    table.metadata = resp;

    callback(null, table);
  });
};

/**
 * Delete the dataset.
 *
 * @param {object=} options - The configuration object.
 * @param {boolean} options.force - Force delete dataset and all tables.
 *     Default: false.
 * @param {function} callback - The callback function.
 *
 * @example
 * //-
 * // Delete the dataset, only if it does not have any tables.
 * //-
 * dataset.delete(function(err) {});
 *
 * //-
 * // Delete the dataset and any tables it contains.
 * //-
 * dataset.delete({ force: true }, function(err) {});
 */
Dataset.prototype.delete = function(options, callback) {
  if (!callback) {
    callback = options;
    options = {};
  }

  var query = {
    deleteContents: !!options.force
  };

  this.makeReq_('DELETE', '', query, null, callback);
};

/**
 * Get the metadata for the Dataset.
 *
 * @param {function} callback - The callback function.
 *
 * @example
 * dataset.getMetadata(function(err, metadata) {});
 */
Dataset.prototype.getMetadata = function(callback) {
  var that = this;
  this.makeReq_('GET', '', null, null, function(err, resp) {
    if (err) {
      callback(err);
      return;
    }

    that.metadata = resp;

    callback(null, that.metadata);
  });
};

/**
 * Get a list of tables.
 *
 * @param {object=} query - Configuration object.
 * @param {number} query.maxResults - Maximum number of results to return.
 * @param {string} query.pageToken - Token returned from a previous call, to
 *     request the next page of results.
 * @param {function} callback - The callback function.
 *
 * @example
 * dataset.getTables(function(err, tables, nextQuery) {
 *   // If `nextQuery` is non-null, there are more results to fetch.
 * });
 */
Dataset.prototype.getTables = function(query, callback) {
  var that = this;

  if (util.is(query, 'function')) {
    callback = query;
    query = {};
  }

  query = query || {};

  this.makeReq_('GET', '/tables', query, null, function(err, resp) {
    if (err) {
      callback(err);
      return;
    }

    var nextQuery = null;

    if (resp.nextPageToken) {
      nextQuery = extend({}, query, {
        pageToken: resp.nextPageToken
      });
    }

    var tables = (resp.tables || []).map(function(tableObject) {
      var table = that.table(tableObject.id);
      table.metadata = tableObject;
      return table;
    });

    callback(null, tables, nextQuery);
  });
};

/**
 * Run a query scoped to your dataset.
 *
 * See {module:bigquery#query} for full documentation of this method.
 */
Dataset.prototype.query = function(options, callback) {
  if (util.is(options, 'string')) {
    options = {
      query: options
    };
  }

  options = extend(true, {}, options, {
    defaultDataset: {
      datasetId: this.id
    }
  });

  return this.bigQuery.query(options, callback);
};

/**
 * Sets the metadata of the Dataset object.
 *
 * @param {object} metadata - Metadata to save on the Dataset.
 * @param {function} callback - The callback function.
 *
 * @example
 * var metadata = {
 *   description: 'Information for every institution in the 2013 IPEDS universe'
 * };
 *
 * dataset.setMetadata(metadata, function(err) {});
 */
Dataset.prototype.setMetadata = function(metadata, callback) {
  var that = this;

  this.makeReq_('PUT', '', null, metadata, function(err, resp) {
    if (err) {
      callback(err);
      return;
    }

    that.metadata = resp;

    callback(null, that.metadata);
  });
};

/**
 * Return a new instance of reference to an existing Table object.
 *
 * @param {string} id - The ID of the table.
 * @return {module:bigquery/table}
 *
 * @example
 * var institutions = dataset.table('institution_data');
 */
Dataset.prototype.table = function(id) {
  return new Table(this, id);
};

/**
 * Pass through this request to BigQuery's request handler, first prepending the
 * path with the dataset.
 *
 * @private
 *
 * @param {string} method - Action.
 * @param {string} path - Request path.
 * @param {*} query - Request query object.
 * @param {*} body - Request body contents.
 * @param {function} callback - The callback function.
 */
Dataset.prototype.makeReq_ = function(method, path, query, body, callback) {
  path = '/datasets/' + this.id + path;
  this.bigQuery.makeReq_(method, path, query, body, callback);
};

module.exports = Dataset;
