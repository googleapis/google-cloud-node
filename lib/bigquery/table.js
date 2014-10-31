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

var crypto = require('crypto');
var duplexify = require('duplexify');
var extend = require('extend');
var fs = require('fs');
var path = require('path');
var streamEvents = require('stream-events');
var through = require('through2');

/**
 * @type {module:storage/file}
 * @private
 */
var File = require('../storage/file');

/**
 * @type {module:common/util}
 * @private
 */
var util = require('../common/util');

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
 */
function Table(dataset, id) {
  this.bigQuery = dataset.bigQuery;
  this.dataset = dataset;
  this.id = id;
  this.metadata = {};
}

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
      type: pair.split(':')[1] || 'string'
    });

    return acc;
  }, {
    fields: []
  });
};

/**
 * Merge a rowset returned from the API with a table schema.
 *
 * @static
 * @private
 *
 * @param {object} schema
 * @param {array} rows
 * @return {array} Fields using their matching names from the table's schema.
 */
Table.mergeSchemaWithRows_ = function(schema, rows) {
  return rows.map(mergeSchema).map(flattenRows);

  function mergeSchema(row) {
    return row.f.map(function(field, index) {
      var fieldObject = {};
      fieldObject[schema.fields[index].name] = field.v;
      return fieldObject;
    });
  }

  function flattenRows(rows) {
    return rows.reduce(function(acc, row) {
      var key = Object.keys(row)[0];
      acc[key] = row[key];
      return acc;
    }, {});
  }
};

/**
 * Copy data from one table to another, optionally creating that table.
 *
 * @param {module:bigquery/table} destination - The destination table.
 * @param {object=} metadata - Metadata to set with the copy operation. The
 *     metadata object should be in the format of the
 *     [`configuration.copy`]{@link http://goo.gl/dKWIyS} property of a Jobs
 *     resource.
 * @param {function} callback - The callback function.
 *
 * @throws {Error} If a destination other than a Table object is provided.
 *
 * @example
 * table.copy(dataset.table('institution_data'), function(err, job) {});
 *
 * //-
 * // See the [`configuration.copy`]{@link http://goo.gl/dKWIyS} object for all
 * // available options.
 * //-
 * var metadata = {
 *   createDisposition: 'CREATE_NEVER',
 *   writeDisposition: 'WRITE_TRUNCATE'
 * };
 *
 * table.copy(options, metadata, function(err, job) {});
 */
Table.prototype.copy = function(destination, metadata, callback) {
  var that = this;

  if (!(destination instanceof Table)) {
    throw new Error('Destination must be a Table object.');
  }

  if (util.is(metadata, 'function')) {
    callback = metadata;
    metadata = {};
  }

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
    }
  };

  this.bigQuery.makeReq_('POST', '/jobs', null, body, function(err, resp) {
    if (err) {
      callback(err);
      return;
    }

    var job = that.bigQuery.job(resp.jobReference.jobId);
    job.metadata = resp;

    callback(null, job);
  });
};

/**
 * Create a readable stream of the rows of data in your table.
 *
 * @return {ReadStream}
 *
 * @example
 * var through2 = require('through2');
 *
 * table.createReadStream()
 *   .pipe(through2.obj(function(row, enc, next) {
 *     this.push(JSON.stringify(row) + '\n');
 *   }))
 *   .pipe(fs.createWriteStream('./institutions.json'));
 */
Table.prototype.createReadStream = function() {
  var that = this;

  var stream = streamEvents(through.obj());
  stream.once('reading', function() {
    that.getRows(handleResponse);
  });
  return stream;

  function handleResponse(err, rows, nextQuery) {
    if (err) {
      stream.emit('error', err);
      stream.end();
      return;
    }

    rows.forEach(function(row) {
      stream.push(row);
    });

    if (nextQuery) {
      that.getRows(nextQuery, handleResponse);
    } else {
      stream.end();
    }
  }
};

/**
 * Load data into your table from a readable stream of JSON or CSV-formatted
 * data.
 *
 * @param {string|object=} metadata - Metadata to set with the load operation.
 *     The metadata object should be in the format of the
 *     [`configuration.load`]{@link http://goo.gl/BVcXk4} property of a Jobs
 *     resource. If a string is given, it will be used as the filetype.
 * @return {WriteStream}
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
 *     // job is a Job object, which you can use to check the status of the load
 *     // operation.
 *     job.getMetadata(function(err, metadata) {
 *       // metadata.status
 *     });
 *   });
 *
 * //-
 * // Load data from a JSON file.
 * //-
 * var fs = require('fs');
 *
 * fs.createReadStream('./institutions.json')
 *   .pipe(table.createWriteStream('json'))
 *   .on('complete', function(job) {});
 */
Table.prototype.createWriteStream = function(metadata) {
  var that = this;

  metadata = metadata || {};

  var fileTypeMap = {
    csv: 'CSV',
    json: 'NEWLINE_DELIMITED_JSON'
  };
  var fileTypes = Object.keys(fileTypeMap).map(function(key) {
    return fileTypeMap[key];
  });

  if (util.is(metadata, 'string')) {
    metadata = {
      sourceFormat: fileTypeMap[metadata.toLowerCase()]
    };
  }

  if (util.is(metadata.schema, 'string')) {
    metadata.schema = Table.createSchemaFromString_(metadata.schema);
  }

  extend(true, metadata, {
    destinationTable: {
      projectId: that.bigQuery.projectId,
      datasetId: that.dataset.id,
      tableId: that.id
    }
  });

  if (metadata.hasOwnProperty('sourceFormat') &&
      fileTypes.indexOf(metadata.sourceFormat) < 0) {
    throw new Error('Source format not recognized: ' + metadata.sourceFormat);
  }

  var dup = streamEvents(duplexify());

  dup.once('writing', function() {
    util.makeWritableStream(dup, {
      connection: that.bigQuery.connection_,
      metadata: {
        configuration: {
          load: metadata
        }
      },
      request: {
        uri: util.format('{base}/{projectId}/jobs', {
          base: 'https://www.googleapis.com/upload/bigquery/v2/projects',
          projectId: that.bigQuery.projectId
        })
      }
    }, function(data) {
      var job = that.bigQuery.job(data.jobReference.jobId);
      job.metadata = data;

      dup.emit('complete', job);
      dup.end();
    });
  });

  return dup;
};

/**
 * Delete a table and all its data.
 *
 * @param {function} callback - The callback function.
 *
 * @example
 * table.delete(function(err) {});
 */
Table.prototype.delete = function(callback) {
  this.makeReq_('DELETE', '', null, null, callback);
};

/**
 * Export table to Google Cloud Storage.
 *
 * @param {module:storage/file|module:storage/file[]} destination - Where the
 *     file should be exported to.
 * @param {object=} options - The configuration object.
 * @param {string} options.format - The format to export the data in. Allowed
 *     options are "CSV", "JSON", or "AVRO". Default: "CSV".
 * @param {boolean} options.gzip - Specify if you would like the file compressed
 *     with GZIP. Default: false.
 * @param {function} callback - The callback function.
 *
 * @throws {Error} If destination isn't a File object.
 * @throws {Error} If destination format isn't recongized.
 *
 * @example
 * var exportedFile = storage.bucket('institutions').file('2014.csv');
 *
 * //-
 * // To use the default options, just pass a {module:storage/file} object.
 * //
 * // Note: The exported format type will be inferred by the file's extension.
 * // If you wish to override this, or provide an array of destination files,
 * // you must provide an `options` object.
 * //-
 * table.export(exportedFile, function(err, job) {});
 *
 * //-
 * // If you need more customization, pass an `options` object.
 * //-
 * var options = {
 *   format: 'json',
 *   gzip: true
 * };
 *
 * table.export(exportedFile, options, function(err, job) {});
 *
 * //-
 * // You can also specify multiple destination files.
 * //-
 * table.export([
 *   storage.bucket('institutions').file('2014.json'),
 *   storage.bucket('institutions-copy').file('2014.json')
 * ], options, function(err, job) {});
 */
Table.prototype.export = function(destination, options, callback) {
  var that = this;

  if (util.is(options, 'function')) {
    callback = options;
    options = {};
  }

  var formats = {
    avro: 'AVRO',
    csv: 'CSV',
    json: 'NEWLINE_DELIMITED_JSON'
  };

  extend(true, options, {
    destinationUris: util.arrayize(destination).map(function(dest) {
      if (!(dest instanceof File)) {
        throw new Error('Destination must be a File object.');
      }

      // If no explicit format was provided, attempt to find a match from the
      // file's extension. If no match, don't set, and default upstream to CSV.
      var format = path.extname(dest.name).substr(1).toLowerCase();
      if (!options.destinationFormat && !options.format && formats[format]) {
        options.destinationFormat = formats[format];
      }

      return 'gs://' + dest.bucket.name + '/' + dest.name;
    })
  });

  if (options.format) {
    options.format = options.format.toLowerCase();

    if (formats[options.format]) {
      options.destinationFormat = formats[options.format];
      delete options.format;
    } else {
      throw new Error('Destination format not recognized: ' + options.format);
    }
  }

  if (options.gzip) {
    options.compression = 'GZIP';
    delete options.gzip;
  }

  var body = {
    configuration: {
      extract: extend(true, options, {
        sourceTable: {
          datasetId: this.dataset.id,
          projectId: this.bigQuery.projectId,
          tableId: this.id
        }
      })
    }
  };

  this.bigQuery.makeReq_('POST', '/jobs', null, body, function(err, resp) {
    if (err) {
      callback(err);
      return;
    }

    var job = that.bigQuery.job(resp.jobReference.jobId);
    job.metadata = resp;

    callback(null, job);
  });
};

/**
 * Return the metadata associated with the Table.
 *
 * @param {function} callback - The callback function.
 *
 * @example
 * table.getMetadata(function(err, metadata) {});
 */
Table.prototype.getMetadata = function(callback) {
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
 * Retrieves table data from a specified set of rows. The rows are returned to
 * your callback as an array of objects matching your table's schema.
 *
 * @param {object=} options - The configuration object.
 * @param {number} options.maxResults - Maximum number of results to return.
 * @param {function} callback - The callback function.
 *
 * @example
 * var options = {
 *   maxResults: 100
 * };
 *
 * table.getRows(options, function(err, rows, nextQuery) {
 *   // If `nextQuery` is non-null, there are more results to fetch.
 *   if (nextQuery) {
 *     table.getRows(nextQuery, function(err, rows, nextQuery) {});
 *   }
 * });`
 */
Table.prototype.getRows = function(options, callback) {
  var that = this;

  if (util.is(options, 'function')) {
    callback = options;
    options = {};
  }

  callback = callback || util.noop;

  this.makeReq_('GET', '/data', options, null, function(err, resp) {
    if (err) {
      onComplete(err);
      return;
    }

    var nextQuery = null;

    if (resp.pageToken) {
      nextQuery = extend({}, options, {
        pageToken: resp.pageToken
      });
    }

    if (resp.rows && resp.rows.length > 0 && !that.metadata.schema) {
      // We don't know the schema for this table yet. Do a quick stat.
      that.getMetadata(function(err) {
        if (err) {
          onComplete(err);
          return;
        }

        onComplete(null, resp.rows, nextQuery);
      });

      return;
    }

    onComplete(null, resp.rows, nextQuery);
  });

  function onComplete(err, rows, nextQuery) {
    if (err) {
      callback(err);
      return;
    }

    rows = Table.mergeSchemaWithRows_(that.metadata.schema, rows || []);

    callback(null, rows, nextQuery);
  }
};

/**
 * Load data from a local file or Storage file ({module:storage/file}).
 *
 * By loading data this way, you create a load job that will run your data load
 * asynchronously. If you would like instantaneous access to your data, insert
 * it using {module:bigquery/table#insert}.
 *
 * Note: Only JSON and CSV source files are supported. The file type will be
 * inferred by the given file's extension. If you wish to override this, you
 * must provide a `metadata` object.
 *
 * @param {string|module:storage/file} source - The source file to import.
 * @param {object=} metadata - Metadata to set with the load operation. The
 *     metadata object should be in the format of the
 *     [`configuration.load`]{@link http://goo.gl/BVcXk4} property of a Jobs
 *     resource.
 * @param {function} callback - The callback function.
 *
 * @throws {Error} If the source isn't a string file name or a File instance.
 *
 * @example
 * //-
 * // Load data from a local file.
 * //-
 * table.import('./institutions.csv', function(err, job) {});
 *
 * //-
 * // You may also pass in metadata in the format of a Jobs resource. See
 * // {@link http://goo.gl/BVcXk4} for a full list of supported values.
 * //-
 * var metadata = {
 *   encoding: 'ISO-8859-1',
 *   sourceFormat: 'JSON'
 * };
 *
 * table.import('./institutions.csv', metadata, function(err, job) {});
 *
 * //-
 * // Load data from a file in your Storage bucket.
 * //-
 * var data = storage.bucket('institutions').file('data.csv');
 * table.import(data, function(err, job) {});
 *
 * //-
 * // Load data from multiple files in your Storage bucket(s).
 * //-
 * table.import([
 *   storage.bucket('institutions').file('2011.csv'),
 *   storage.bucket('institutions').file('2012.csv')
 * ], function(err, job) {});
 */
Table.prototype.import = function(source, metadata, callback) {
  var that = this;

  if (util.is(metadata, 'function')) {
    callback = metadata;
    metadata = {};
  }

  callback = callback || util.noop;
  metadata = metadata || {};

  var formats = {
    csv: 'CSV',
    json: 'NEWLINE_DELIMITED_JSON'
  };

  if (util.is(source, 'string')) {
    // A path to a file was given. If a sourceFormat wasn't specified, try to
    // find a match from the file's extension.
    var format = formats[path.extname(source).substr(1).toLowerCase()];
    if (!metadata.sourceFormat && format) {
      metadata.sourceFormat = format;
    }

    // Read the file into a new write stream.
    return fs.createReadStream(source)
      .pipe(this.createWriteStream(metadata))
      .on('error', callback)
      .on('complete', callback);
  }

  var body = {
    configuration: {
      load: {
        destinationTable: {
          projectId: this.bigQuery.projectId,
          datasetId: this.dataset.id,
          tableId: this.id
        }
      }
    }
  };

  extend(true, body.configuration.load, metadata, {
    sourceUris: util.arrayize(source).map(function(src) {
      if (!(src instanceof File)) {
        throw new Error('Source must be a File object.');
      }

      // If no explicit format was provided, attempt to find a match from
      // the file's extension. If no match, don't set, and default upstream
      // to CSV.
      var format = formats[path.extname(src.name).substr(1).toLowerCase()];
      if (!metadata.sourceFormat && format) {
        body.configuration.load.sourceFormat = format;
      }

      return 'gs://' + src.bucket.name + '/' + src.name;
    })
  });

  this.bigQuery.makeReq_('POST', '/jobs', null, body, function(err, resp) {
    if (err) {
      callback(err);
      return;
    }

    var job = that.bigQuery.job(resp.jobReference.jobId);
    job.metadata = resp;

    callback(null, job);
  });
};

/**
 * Stream data into BigQuery one record at a time without running a load job.
 *
 * There are more strict quota limits using this method so it is highly
 * recommended that you load data into BigQuery using
 * {module:bigquery/table#import} instead.
 *
 * @param {object|object[]} rows - The rows to insert into the table.
 * @param {function} callback - The callback function.
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
 * // Handling the response.
 * //-
 * function insertHandler(err, insertErrors) {
 *   // err (object):
 *   //   An API error occurred.
 *
 *   // insertErrors (object[]):
 *   //   If populated, some rows failed to insert, while others may have
 *   //   succeeded.
 *   //
 *   // insertErrors[].row (original individual row object passed to `insert`)
 *   // insertErrors[].errors[].reason
 *   // insertErrors[].errors[].message
 *
 *   // See https://developers.google.com/bigquery/troubleshooting-errors for
 *   // recommendations on handling errors.
 * }
 */
Table.prototype.insert = function(rows, callback) {
  var body = {
    rows: util.arrayize(rows || []).map(function(row) {
      var rowObject = {};
      // Use the stringified contents of the row as a unique insert ID.
      var md5 = crypto.createHash('md5');
      md5.update(JSON.stringify(row));
      rowObject.insertId = md5.digest('hex');
      rowObject.json = row;
      return rowObject;
    })
  };

  this.makeReq_('POST', '/insertAll', null, body, function(err, resp) {
    if (err) {
      callback(err);
      return;
    }

    var failedToInsert = (resp.insertErrors || []).map(function(insertError) {
      return {
        error: insertError.errors.map(function(error) {
          return {
            message: error.message,
            reason: error.reason
          };
        }),
        row: body.rows[insertError.index].json
      };
    });

    callback(null, failedToInsert);
  });
};

/**
 * Run a query scoped to your dataset.
 *
 * See {module:bigquery#query} for full documentation of this method.
 */
Table.prototype.query = function(query, callback) {
  return this.dataset.query(query, callback);
};

/**
 * Set the metadata on the table.
 *
 * @param {object} metadata - The metadata key/value object to set.
 * @param {string} metadata.description - A user-friendly description of the
 *     table.
 * @param {string} metadata.name - A descriptive name for the table.
 * @param {string|object} metadata.schema - A comma-separated list of name:type
 *     pairs. Valid types are "string", "integer", "float", "boolean", and
 *     "timestamp". If the type is omitted, it is assumed to be "string".
 *     Example: "name:string, age:integer". Schemas can also be specified as a
 *     JSON array of fields, which allows for nested and repeated fields. See
 *     a [Table resource]{@link http://goo.gl/sl8Dmg} for more detailed
 *     information.
 * @param {function} callback - The callback function.
 */
Table.prototype.setMetadata = function(metadata, callback) {
  var that = this;

  if (metadata.name) {
    metadata.friendlyName = metadata.name;
    delete metadata.name;
  }

  if (util.is(metadata.schema, 'string')) {
    metadata.schema = Table.createSchemaFromString_(metadata.schema);
  }

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
Table.prototype.makeReq_ = function(method, path, query, body, callback) {
  path = '/tables/' + this.id + path;
  this.dataset.makeReq_(method, path, query, body, callback);
};

module.exports = Table;
