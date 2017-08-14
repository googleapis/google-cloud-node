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
 * @module bigquery/table
 */

'use strict';

var arrify = require('arrify');
var common = require('@google-cloud/common');
var duplexify = require('duplexify');
var extend = require('extend');
var format = require('string-format-obj');
var fs = require('fs');
var is = require('is');
var path = require('path');
var streamEvents = require('stream-events');
var util = require('util');

/**
 * The file formats accepted by BigQuery.
 *
 * @type {object}
 * @private
 */
var FORMATS = {
  avro: 'AVRO',
  csv: 'CSV',
  json: 'NEWLINE_DELIMITED_JSON'
};

/*! Developer Documentation
 *
 * @param {module:bigquery/dataset} dataset - Dataset instance.
 * @param {string} id - The ID of the table.
 */
/**
 * Table objects are returned by methods such as
 * {module:bigquery/dataset#table}, {module:bigquery/dataset#createTable}, and
 * {module:bigquery/dataset#getTables}.
 *
 * @alias module:bigquery/table
 * @constructor
 *
 * @example
 * var dataset = bigquery.dataset('my-dataset');
 *
 * var table = dataset.table('my-table');
 */
function Table(dataset, id) {
  var methods = {
    /**
     * Create a table.
     *
     * @param {object=} options - See {module:bigquery/dataset#createTable}.
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
     * Delete a table and all its data.
     *
     * @resource [Tables: delete API Documentation]{@link https://cloud.google.com/bigquery/docs/reference/v2/tables/delete}
     *
     * @param {function} callback - The callback function.
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
    delete: true,

    /**
     * Check if the table exists.
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
     *
     * @example
     * table.get(function(err, table, apiResponse) {
     *   // `table.metadata` has been populated.
     * });
     *
     * //-
     * // If the callback is omitted, we'll return a Promise.
     * //-
     * table.get().then(function(data) {
     *   var table = data[0];
     *   var apiResponse = data[1];
     * });
     */
    get: true,

    /**
     * Return the metadata associated with the Table.
     *
     * @resource [Tables: get API Documentation]{@link https://cloud.google.com/bigquery/docs/reference/v2/tables/get}
     *
     * @param {function} callback - The callback function.
     * @param {?error} callback.err - An error returned while making this
     *     request.
     * @param {object} callback.metadata - The metadata of the Table.
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
    getMetadata: true
  };

  common.ServiceObject.call(this, {
    parent: dataset,
    baseUrl: '/tables',
    id: id,
    createMethod: dataset.createTable.bind(dataset),
    methods: methods
  });

  this.bigQuery = dataset.bigQuery;
  this.dataset = dataset;

  this.interceptors.push({
    request: function(reqOpts) {
      if (reqOpts.method === 'PATCH' && reqOpts.json.etag) {
        reqOpts.headers = reqOpts.headers || {};
        reqOpts.headers['If-Match'] = reqOpts.json.etag;
      }

      return reqOpts;
    }
  });
}

util.inherits(Table, common.ServiceObject);

/**
 * Convert a comma-separated name:type string to a table schema object.
 *
 * @static
 * @private
 *
 * @param {string} str - Comma-separated schema string.
 * @return {object} Table schema in the format the API expects.
 */
Table.createSchemaFromString_ = function(str) {
  return str.split(/\s*,\s*/).reduce(function(acc, pair) {
    acc.fields.push({
      name: pair.split(':')[0],
      type: (pair.split(':')[1] || 'STRING').toUpperCase()
    });

    return acc;
  }, {
    fields: []
  });
};

/**
 * Convert a row entry from native types to their encoded types that the API
 * expects.
 *
 * @static
 * @private
 *
 * @param {*} value - The value to be converted.
 * @return {*} The converted value.
 */
Table.encodeValue_ = function(value) {
  if (value instanceof Buffer) {
    return value.toString('base64');
  }

  if (is.date(value)) {
    return value.toJSON();
  }

  if (is.array(value)) {
    return value.map(Table.encodeValue_);
  }

  if (is.object(value)) {
    return Object.keys(value).reduce(function(acc, key) {
      acc[key] = Table.encodeValue_(value[key]);
      return acc;
    }, {});
  }

  return value;
};

/**
 * Copy data from one table to another, optionally creating that table.
 *
 * @resource [Jobs: insert API Documentation]{@link https://cloud.google.com/bigquery/docs/reference/v2/jobs/insert}
 *
 * @param {module:bigquery/table} destination - The destination table.
 * @param {object=} metadata - Metadata to set with the copy operation. The
 *     metadata object should be in the format of the
 *     [`configuration.copy`](http://goo.gl/dKWIyS) property of a Jobs resource.
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request
 * @param {module:bigquery/job} callback.job - The job used to copy your table.
 * @param {object} callback.apiResponse - The full API response.
 *
 * @throws {Error} If a destination other than a Table object is provided.
 *
 * @example
 * var yourTable = dataset.table('your-table');
 * table.copy(yourTable, function(err, job, apiResponse) {
 *   // `job` is a Job object that can be used to check the status of the
 *   // request.
 * });
 *
 * //-
 * // See the <a href="http://goo.gl/dKWIyS">`configuration.copy`</a> object for
 * // all available options.
 * //-
 * var metadata = {
 *   createDisposition: 'CREATE_NEVER',
 *   writeDisposition: 'WRITE_TRUNCATE'
 * };
 *
 * table.copy(yourTable, metadata, function(err, job, apiResponse) {});
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * table.copy(yourTable, metadata).then(function(data) {
 *   var job = data[0];
 *   var apiResponse = data[1];
 * });
 */
Table.prototype.copy = function(destination, metadata, callback) {
  var self = this;

  if (!(destination instanceof Table)) {
    throw new Error('Destination must be a Table object.');
  }

  if (is.fn(metadata)) {
    callback = metadata;
    metadata = {};
  }

  var jobPrefix = metadata.jobPrefix;
  delete metadata.jobPrefix;

  var body = {
    configuration: {
      copy: extend(true, metadata || {}, {
        destinationTable: {
          datasetId: destination.dataset.id,
          projectId: destination.bigQuery.projectId,
          tableId: destination.id
        },
        sourceTable: {
          datasetId: this.dataset.id,
          projectId: this.bigQuery.projectId,
          tableId: this.id
        }
      })
    },
    jobPrefix: jobPrefix
  };

  this.bigQuery.createJob(body, callback);
};

/**
 * Copy data from multiple tables into this table.
 *
 * @resource [Jobs: insert API Documentation]{@link https://cloud.google.com/bigquery/docs/reference/v2/jobs/insert}
 *
 * @param {module:bigquery/table|module:bigquery/table[]} sourceTables - The
 *     source table(s) to copy data from.
 * @param {object=} metadata - Metadata to set with the copy operation. The
 *     metadata object should be in the format of the
 *     [`configuration.copy`](http://goo.gl/dKWIyS) property of a Jobs resource.
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request
 * @param {module:bigquery/job} callback.job - The job used to copy your table.
 * @param {object} callback.apiResponse - The full API response.
 *
 * @throws {Error} If a source other than a Table object is provided.
 *
 * @example
 * var sourceTables = [
 *   dataset.table('your-table'),
 *   dataset.table('your-second-table')
 * ];
 *
 * table.copyFrom(sourceTables, function(err, job, apiResponse) {
 *   // `job` is a Job object that can be used to check the status of the
 *   // request.
 * });
 *
 * //-
 * // See the <a href="http://goo.gl/dKWIyS">`configuration.copy`</a> object for
 * // all available options.
 * //-
 * var metadata = {
 *   createDisposition: 'CREATE_NEVER',
 *   writeDisposition: 'WRITE_TRUNCATE'
 * };
 *
 * table.copyFrom(sourceTables, metadata, function(err, job, apiResponse) {});
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * table.copyFrom(sourceTables, metadata).then(function(data) {
 *   var job = data[0];
 *   var apiResponse = data[1];
 * });
 */
Table.prototype.copyFrom = function(sourceTables, metadata, callback) {
  var self = this;

  sourceTables = arrify(sourceTables);

  sourceTables.forEach(function(sourceTable) {
    if (!(sourceTable instanceof Table)) {
      throw new Error('Source must be a Table object.');
    }
  });

  if (is.fn(metadata)) {
    callback = metadata;
    metadata = {};
  }

  var jobPrefix = metadata.jobPrefix;
  delete metadata.jobPrefix;

  var body = {
    configuration: {
      copy: extend(true, metadata || {}, {
        destinationTable: {
          datasetId: this.dataset.id,
          projectId: this.bigQuery.projectId,
          tableId: this.id
        },

        sourceTables: sourceTables.map(function(sourceTable) {
          return {
            datasetId: sourceTable.dataset.id,
            projectId: sourceTable.bigQuery.projectId,
            tableId: sourceTable.id
          };
        })
      })
    },
    jobPrefix: jobPrefix
  };

  this.bigQuery.createJob(body, callback);
};

/**
 * Run a query scoped to your dataset as a readable object stream.
 *
 * See {module:bigquery#createQueryStream} for full documentation of this
 * method.
 */
Table.prototype.createQueryStream = function(query) {
  return this.dataset.createQueryStream(query);
};

/**
 * Create a readable stream of the rows of data in your table. This method is
 * simply a wrapper around {module:bigquery/table#getRows}.
 *
 * @resource [Tabledata: list API Documentation]{@link https://cloud.google.com/bigquery/docs/reference/v2/tabledata/list}
 *
 * @return {ReadableStream}
 *
 * @example
 * table.createReadStream(options)
 *   .on('error', console.error)
 *   .on('data', function(row) {})
 *   .on('end', function() {
 *     // All rows have been retrieved.
 *   });
 *
 * //-
 * // If you anticipate many results, you can end a stream early to prevent
 * // unnecessary processing and API requests.
 * //-
 * table.createReadStream()
 *   .on('data', function(row) {
 *     this.end();
 *   });
 */
Table.prototype.createReadStream = common.paginator.streamify('getRows');

/**
 * Load data into your table from a readable stream of JSON, CSV, or
 * AVRO data.
 *
 * @resource [Jobs: insert API Documentation]{@link https://cloud.google.com/bigquery/docs/reference/v2/jobs/insert}
 *
 * @param {string|object=} metadata - Metadata to set with the load operation.
 *     The metadata object should be in the format of the
 *     [`configuration.load`](http://goo.gl/BVcXk4) property of a Jobs resource.
 *     If a string is given, it will be used as the filetype.
 * @return {WritableStream}
 *
 * @throws {Error} If source format isn't recognized.
 *
 * @example
 * //-
 * // Load data from a CSV file.
 * //-
 * var request = require('request');
 *
 * var csvUrl = 'http://goo.gl/kSE7z6';
 *
 * var metadata = {
 *   allowJaggedRows: true,
 *   skipLeadingRows: 1
 * };
 *
 * request.get(csvUrl)
 *   .pipe(table.createWriteStream(metadata))
 *   .on('complete', function(job) {
 *     // `job` is a Job object that can be used to check the status of the
 *     // request.
 *   });
 *
 * //-
 * // Load data from a JSON file.
 * //-
 * var fs = require('fs');
 *
 * fs.createReadStream('./test/testdata/testfile.json')
 *   .pipe(table.createWriteStream('json'))
 *   .on('complete', function(job) {});
 */
Table.prototype.createWriteStream = function(metadata) {
  var self = this;

  metadata = metadata || {};

  var fileTypes = Object.keys(FORMATS).map(function(key) {
    return FORMATS[key];
  });

  if (is.string(metadata)) {
    metadata = {
      sourceFormat: FORMATS[metadata.toLowerCase()]
    };
  }

  if (is.string(metadata.schema)) {
    metadata.schema = Table.createSchemaFromString_(metadata.schema);
  }

  extend(true, metadata, {
    destinationTable: {
      projectId: self.bigQuery.projectId,
      datasetId: self.dataset.id,
      tableId: self.id
    }
  });

  if (metadata.hasOwnProperty('sourceFormat') &&
      fileTypes.indexOf(metadata.sourceFormat) < 0) {
    throw new Error('Source format not recognized: ' + metadata.sourceFormat);
  }

  var dup = streamEvents(duplexify());

  dup.once('writing', function() {
    common.util.makeWritableStream(dup, {
      makeAuthenticatedRequest: self.bigQuery.makeAuthenticatedRequest,
      metadata: {
        configuration: {
          load: metadata
        }
      },
      request: {
        uri: format('{base}/{projectId}/jobs', {
          base: 'https://www.googleapis.com/upload/bigquery/v2/projects',
          projectId: self.bigQuery.projectId
        })
      }
    }, function(data) {
      var job = self.bigQuery.job(data.jobReference.jobId);
      job.metadata = data;

      dup.emit('complete', job);
    });
  });

  return dup;
};

/**
 * Export table to Cloud Storage.
 *
 * @resource [Jobs: insert API Documentation]{@link https://cloud.google.com/bigquery/docs/reference/v2/jobs/insert}
 *
 * @param {module:storage/file} destination - Where the file should be exported
 *     to.
 * @param {object=} options - The configuration object.
 * @param {string} options.format - The format to export the data in. Allowed
 *     options are "CSV", "JSON", or "AVRO". Default: "CSV".
 * @param {boolean} options.gzip - Specify if you would like the file compressed
 *     with GZIP. Default: false.
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request
 * @param {module:bigquery/job} callback.job - The job used to export the table.
 * @param {object} callback.apiResponse - The full API response.
 *
 * @throws {Error} If destination isn't a File object.
 * @throws {Error} If destination format isn't recongized.
 *
 * @example
 * var gcs = require('@google-cloud/storage')({
 *   projectId: 'grape-spaceship-123'
 * });
 * var exportedFile = gcs.bucket('institutions').file('2014.csv');
 *
 * //-
 * // To use the default options, just pass a {module:storage/file} object.
 * //
 * // Note: The exported format type will be inferred by the file's extension.
 * // If you wish to override this, or provide an array of destination files,
 * // you must provide an `options` object.
 * //-
 * table.export(exportedFile, function(err, job, apiResponse) {
 *   // `job` is a Job object that can be used to check the status of the
 *   // request.
 * });
 *
 * //-
 * // If you need more customization, pass an `options` object.
 * //-
 * var options = {
 *   format: 'json',
 *   gzip: true
 * };
 *
 * table.export(exportedFile, options, function(err, job, apiResponse) {});
 *
 * //-
 * // You can also specify multiple destination files.
 * //-
 * table.export([
 *   gcs.bucket('institutions').file('2014.json'),
 *   gcs.bucket('institutions-copy').file('2014.json')
 * ], options, function(err, job, apiResponse) {});
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * table.export(exportedFile, options).then(function(data) {
 *   var job = data[0];
 *   var apiResponse = data[1];
 * });
 */
Table.prototype.export = function(destination, options, callback) {
  var self = this;

  if (is.fn(options)) {
    callback = options;
    options = {};
  }

  extend(true, options, {
    destinationUris: arrify(destination).map(function(dest) {
      if (!common.util.isCustomType(dest, 'storage/file')) {
        throw new Error('Destination must be a File object.');
      }

      // If no explicit format was provided, attempt to find a match from the
      // file's extension. If no match, don't set, and default upstream to CSV.
      var format = path.extname(dest.name).substr(1).toLowerCase();
      if (!options.destinationFormat && !options.format && FORMATS[format]) {
        options.destinationFormat = FORMATS[format];
      }

      return 'gs://' + dest.bucket.name + '/' + dest.name;
    })
  });

  if (options.format) {
    options.format = options.format.toLowerCase();

    if (FORMATS[options.format]) {
      options.destinationFormat = FORMATS[options.format];
      delete options.format;
    } else {
      throw new Error('Destination format not recognized: ' + options.format);
    }
  }

  if (options.gzip) {
    options.compression = 'GZIP';
    delete options.gzip;
  }

  var jobPrefix = options.jobPrefix;
  delete options.jobPrefix;

  var body = {
    configuration: {
      extract: extend(true, options, {
        sourceTable: {
          datasetId: this.dataset.id,
          projectId: this.bigQuery.projectId,
          tableId: this.id
        }
      })
    },
    jobPrefix: jobPrefix
  };

  this.bigQuery.createJob(body, callback);
};

/**
 * Retrieves table data from a specified set of rows. The rows are returned to
 * your callback as an array of objects matching your table's schema.
 *
 * @resource [Tabledata: list API Documentation]{@link https://cloud.google.com/bigquery/docs/reference/v2/tabledata/list}
 *
 * @param {object=} options - The configuration object.
 * @param {boolean} options.autoPaginate - Have pagination handled
 *     automatically. Default: true.
 * @param {number} options.maxApiCalls - Maximum number of API calls to make.
 * @param {number} options.maxResults - Maximum number of results to return.
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request
 * @param {array} callback.rows - The table data from specified set of rows.
 *
 * @example
 * table.getRows(function(err, rows) {
 *   if (!err) {
 *     // rows is an array of results.
 *   }
 * });
 *
 * //-
 * // To control how many API requests are made and page through the results
 * // manually, set `autoPaginate` to `false`.
 * //-
 * function manualPaginationCallback(err, rows, nextQuery, apiResponse) {
 *   if (nextQuery) {
 *     // More results exist.
 *     table.getRows(nextQuery, manualPaginationCallback);
 *   }
 * }
 *
 * table.getRows({
 *   autoPaginate: false
 * }, manualPaginationCallback);
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * table.getRows().then(function(data) {
 *   var rows = data[0];
});
 */
Table.prototype.getRows = function(options, callback) {
  var self = this;

  if (is.fn(options)) {
    callback = options;
    options = {};
  }

  callback = callback || common.util.noop;

  this.request({
    uri: '/data',
    qs: options
  }, function(err, resp) {
    if (err) {
      onComplete(err, null, null, resp);
      return;
    }

    var nextQuery = null;

    if (resp.pageToken) {
      nextQuery = extend({}, options, {
        pageToken: resp.pageToken
      });
    }

    if (resp.rows && resp.rows.length > 0 && !self.metadata.schema) {
      // We don't know the schema for this table yet. Do a quick stat.
      self.getMetadata(function(err, metadata, apiResponse) {
        if (err) {
          onComplete(err, null, null, apiResponse);
          return;
        }

        onComplete(null, resp.rows, nextQuery, resp);
      });

      return;
    }

    onComplete(null, resp.rows, nextQuery, resp);
  });

  function onComplete(err, rows, nextQuery, resp) {
    if (err) {
      callback(err, null, null, resp);
      return;
    }

    rows = self.bigQuery.mergeSchemaWithRows_(self.metadata.schema, rows || []);
    callback(null, rows, nextQuery, resp);
  }
};

/**
 * Load data from a local file or Storage file ({module:storage/file}).
 *
 * By loading data this way, you create a load job that will run your data load
 * asynchronously. If you would like instantaneous access to your data, insert
 * it using {module:bigquery/table#insert}.
 *
 * Note: The file type will be inferred by the given file's extension. If you
 * wish to override this, you must provide `metadata.format`.
 *
 * @resource [Jobs: insert API Documentation]{@link https://cloud.google.com/bigquery/docs/reference/v2/jobs/insert}
 *
 * @param {string|module:storage/file} source - The source file to import.
 * @param {object=} metadata - Metadata to set with the load operation. The
 *     metadata object should be in the format of the
 *     [`configuration.load`](http://goo.gl/BVcXk4) property of a Jobs resource.
 * @param {string} metadata.format - The format the data being imported is in.
 *     Allowed options are "CSV", "JSON", or "AVRO".
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request
 * @param {module:bigquery/job} callback.job - The job used to import your data.
 * @param {object} callback.apiResponse - The full API response.
 *
 * @throws {Error} If the source isn't a string file name or a File instance.
 *
 * @example
 * //-
 * // Load data from a local file.
 * //-
 * table.import('./institutions.csv', function(err, job, apiResponse) {
 *   // `job` is a Job object that can be used to check the status of the
 *   // request.
 * });
 *
 * //-
 * // You may also pass in metadata in the format of a Jobs resource. See
 * // (http://goo.gl/BVcXk4) for a full list of supported values.
 * //-
 * var metadata = {
 *   encoding: 'ISO-8859-1',
 *   sourceFormat: 'NEWLINE_DELIMITED_JSON'
 * };
 *
 * table.import('./my-data.csv', metadata, function(err, job, apiResponse) {});
 *
 * //-
 * // Load data from a file in your Cloud Storage bucket.
 * //-
 * var gcs = require('@google-cloud/storage')({
 *   projectId: 'grape-spaceship-123'
 * });
 * var data = gcs.bucket('institutions').file('data.csv');
 * table.import(data, function(err, job, apiResponse) {});
 *
 * //-
 * // Load data from multiple files in your Cloud Storage bucket(s).
 * //-
 * table.import([
 *   gcs.bucket('institutions').file('2011.csv'),
 *   gcs.bucket('institutions').file('2012.csv')
 * ], function(err, job, apiResponse) {});
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * table.import(data).then(function(data) {
 *   var job = data[0];
 *   var apiResponse = data[1];
 * });
 */
Table.prototype.import = function(source, metadata, callback) {
  var self = this;

  if (is.fn(metadata)) {
    callback = metadata;
    metadata = {};
  }

  callback = callback || common.util.noop;
  metadata = metadata || {};

  if (metadata.format) {
    metadata.sourceFormat = FORMATS[metadata.format.toLowerCase()];
    delete metadata.format;
  }

  if (is.string(source)) {
    // A path to a file was given. If a sourceFormat wasn't specified, try to
    // find a match from the file's extension.
    var detectedFormat = FORMATS[path.extname(source).substr(1).toLowerCase()];
    if (!metadata.sourceFormat && detectedFormat) {
      metadata.sourceFormat = detectedFormat;
    }

    // Read the file into a new write stream.
    return fs.createReadStream(source)
      .pipe(this.createWriteStream(metadata))
      .on('error', callback)
      .on('complete', function(resp) {
        // TODO(ryanseys): Does this have to create a job object?
        callback(null, resp, resp);
      });
  }

  var jobPrefix = metadata.jobPrefix;
  delete metadata.jobPrefix;

  var body = {
    configuration: {
      load: {
        destinationTable: {
          projectId: this.bigQuery.projectId,
          datasetId: this.dataset.id,
          tableId: this.id
        }
      }
    },
    jobPrefix: jobPrefix
  };

  extend(true, body.configuration.load, metadata, {
    sourceUris: arrify(source).map(function(src) {
      if (!common.util.isCustomType(src, 'storage/file')) {
        throw new Error('Source must be a File object.');
      }

      // If no explicit format was provided, attempt to find a match from
      // the file's extension. If no match, don't set, and default upstream
      // to CSV.
      var format = FORMATS[path.extname(src.name).substr(1).toLowerCase()];
      if (!metadata.sourceFormat && format) {
        body.configuration.load.sourceFormat = format;
      }

      return 'gs://' + src.bucket.name + '/' + src.name;
    })
  });

  this.bigQuery.createJob(body, callback);
};

/**
 * Stream data into BigQuery one record at a time without running a load job.
 *
 * There are more strict quota limits using this method so it is highly
 * recommended that you load data into BigQuery using
 * {module:bigquery/table#import} instead.
 *
 * @resource [Tabledata: insertAll API Documentation]{@link https://cloud.google.com/bigquery/docs/reference/v2/tabledata/insertAll}
 * @resource [Troubleshooting Errors]{@link https://developers.google.com/bigquery/troubleshooting-errors}
 *
 * @param {object|object[]} rows - The rows to insert into the table.
 * @param {object=} options - Configuration object.
 * @param {boolean} options.ignoreUnknownValues - Accept rows that contain
 *     values that do not match the schema. The unknown values are ignored.
 *     Default: `false`.
 * @param {boolean} options.raw - If `true`, the `rows` argument is expected to
 *     be formatted as according to the
 *     [specification](https://cloud.google.com/bigquery/docs/reference/v2/tabledata/insertAll).
 * @param {boolean} options.skipInvalidRows - Insert all valid rows of a
 *     request, even if invalid rows exist. Default: `false`.
 * @param {string} options.templateSuffix - Treat the destination table as a
 *     base template, and insert the rows into an instance table named
 *     "{destination}{templateSuffix}". BigQuery will manage creation of
 *     the instance table, using the schema of the base template table. See
 *     [Automatic table creation using template tables](https://cloud.google.com/bigquery/streaming-data-into-bigquery#template-tables)
 *     for considerations when working with templates tables.
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request.
 * @param {object[]} callback.err.errors - If present, these represent partial
 *     failures. It's possible for part of your request to be completed
 *     successfully, while the other part was not.
 * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * //-
 * // Insert a single row.
 * //-
 * table.insert({
 *   INSTNM: 'Motion Picture Institute of Michigan',
 *   CITY: 'Troy',
 *   STABBR: 'MI'
 * }, insertHandler);
 *
 * //-
 * // Insert multiple rows at a time.
 * //-
 * var rows = [
 *   {
 *     INSTNM: 'Motion Picture Institute of Michigan',
 *     CITY: 'Troy',
 *     STABBR: 'MI'
 *   },
 *   // ...
 * ];
 *
 * table.insert(rows, insertHandler);
 *
 * //-
 * // Insert a row as according to the <a href="https://cloud.google.com/bigquery/docs/reference/v2/tabledata/insertAll">
 * // specification</a>.
 * //-
 * var row = {
 *   insertId: '1',
 *   json: {
 *     INSTNM: 'Motion Picture Institute of Michigan',
 *     CITY: 'Troy',
 *     STABBR: 'MI'
 *   }
 * };
 *
 * var options = {
 *   raw: true
 * };
 *
 * table.insert(row, options, insertHandler);
 *
 * //-
 * // Handling the response. See <a href="https://developers.google.com/bigquery/troubleshooting-errors">
 * // Troubleshooting Errors</a> for best practices on how to handle errors.
 * //-
 * function insertHandler(err, apiResponse) {
 *   if (err) {
 *     // An API error or partial failure occurred.
 *
 *     if (err.name === 'PartialFailureError') {
 *       // Some rows failed to insert, while others may have succeeded.
 *
 *       // err.errors (object[]):
 *       // err.errors[].row (original row object passed to `insert`)
 *       // err.errors[].errors[].reason
 *       // err.errors[].errors[].message
 *     }
 *   }
 * }
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * table.insert(rows)
 *   .then(function(data) {
 *     var apiResponse = data[0];
 *   })
 *   .catch(function(err) {
 *     // An API error or partial failure occurred.
 *
 *     if (err.name === 'PartialFailureError') {
 *       // Some rows failed to insert, while others may have succeeded.
 *
 *       // err.errors (object[]):
 *       // err.errors[].row (original row object passed to `insert`)
 *       // err.errors[].errors[].reason
 *       // err.errors[].errors[].message
 *     }
 *   });
 */
Table.prototype.insert = function(rows, options, callback) {
  if (is.fn(options)) {
    callback = options;
    options = {};
  }

  var json = extend(true, options, {
    rows: arrify(rows)
  });

  if (!options.raw) {
    json.rows = arrify(rows).map(function(row) {
      return {
        json: Table.encodeValue_(row)
      };
    });
  }

  delete options.raw;

  this.request({
    method: 'POST',
    uri: '/insertAll',
    json: json
  }, function(err, resp) {
    if (err) {
      callback(err, resp);
      return;
    }

    var partialFailures = (resp.insertErrors || []).map(function(insertError) {
      return {
        errors: insertError.errors.map(function(error) {
          return {
            message: error.message,
            reason: error.reason
          };
        }),
        row: rows[insertError.index]
      };
    });

    if (partialFailures.length > 0) {
      err = new common.util.PartialFailureError({
        errors: partialFailures,
        response: resp
      });
    }

    callback(err, resp);
  });
};

/**
 * Run a query scoped to your dataset.
 *
 * See {module:bigquery#query} for full documentation of this method.
 */
Table.prototype.query = function(query, callback) {
  this.dataset.query(query, callback);
};

/**
 * Set the metadata on the table.
 *
 * @resource [Tables: update API Documentation]{@link https://cloud.google.com/bigquery/docs/reference/v2/tables/update}
 *
 * @param {object} metadata - The metadata key/value object to set.
 * @param {string} metadata.description - A user-friendly description of the
 *     table.
 * @param {string} metadata.name - A descriptive name for the table.
 * @param {string|object} metadata.schema - A comma-separated list of name:type
 *     pairs. Valid types are "string", "integer", "float", "boolean", "bytes",
 *     "record", and "timestamp". If the type is omitted, it is assumed to be
 *     "string". Example: "name:string, age:integer". Schemas can also be
 *     specified as a JSON array of fields, which allows for nested and repeated
 *     fields. See a [Table resource](http://goo.gl/sl8Dmg) for more detailed
 *     information.
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request.
  * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * var metadata = {
 *   name: 'My recipes',
 *   description: 'A table for storing my recipes.',
 *   schema: 'name:string, servings:integer, cookingTime:float, quick:boolean'
 * };
 *
 * table.setMetadata(metadata, function(err, metadata, apiResponse) {});
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * table.setMetadata(metadata).then(function(data) {
 *   var metadata = data[0];
 *   var apiResponse = data[1];
 * });
 */
Table.prototype.setMetadata = function(metadata, callback) {
  var self = this;

  if (metadata.name) {
    metadata.friendlyName = metadata.name;
    delete metadata.name;
  }

  if (is.string(metadata.schema)) {
    metadata.schema = Table.createSchemaFromString_(metadata.schema);
  }

  this.request({
    method: 'PUT',
    uri: '',
    json: metadata
  }, function(err, resp) {
    if (err) {
      callback(err, resp);
      return;
    }

    self.metadata = resp;

    callback(null, resp);
  });
};

/*! Developer Documentation
 *
 * These methods can be auto-paginated.
 */
common.paginator.extend(Table, ['getRows']);

/*! Developer Documentation
 *
 * All async methods (except for streams) will return a Promise in the event
 * that a callback is omitted.
 */
common.util.promisifyAll(Table);

module.exports = Table;
