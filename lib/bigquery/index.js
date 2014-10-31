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
 * @module bigquery
 */

'use strict';

var extend = require('extend');
var streamEvents = require('stream-events');
var through = require('through2');

/**
 * @type module:common/connection
 * @private
 */
var conn = require('../common/connection.js');

/**
 * @type module:bigquery/dataset
 * @private
 */
var Dataset = require('./dataset.js');

/**
 * @type module:bigquery/job
 * @private
 */
var Job = require('./job.js');

/**
 * @type module:bigquery/table
 * @private
 */
var Table = require('./table.js');

/**
 * @type module:common/util
 * @private
 */
var util = require('../common/util.js');

/**
 * @const {string} Base URL for the BigQuery API.
 * @private
 */
var BIGQUERY_BASE_URL = 'https://www.googleapis.com/bigquery/v2/projects/';

/**
 * Required scopes for Google Cloud BigQuery API.
 *
 * @const {array}
 * @private
 */
var SCOPES = ['https://www.googleapis.com/auth/bigquery'];

/**
 * The example below will demonstrate the different usage patterns your app may
 * need to support to retrieve a BigQuery object.
 *
 * @alias module:bigquery
 * @constructor
 *
 * @example
 * var gcloud = require('gcloud');
 *
 * // Providing configuration details up-front.
 * var myProject = gcloud({
 *   keyFilename: '/path/to/keyfile.json',
 *   projectId: 'my-project'
 * });
 *
 * var bigquery = myProject.bigquery();
 *
 *
 * // Overriding default configuration details.
 * var anotherBigQueryInstance = myProject.bigquery({
 *   keyFilename: '/path/to/another/keyfile.json'
 * });
 *
 *
 * // Not using a default configuration.
 * var myOtherProject = gcloud.bigquery({
 *   keyFilename: '/path/to/keyfile.json',
 *   projectId: 'my-project'
 * });
 *
 * //-
 * // In the following examples from this page and the other modules (Dataset,
 * // Table, etc.), we are going to be using a dataset from
 * // [data.gov]{@link http://goo.gl/f2SXcb} of higher education institutions.
 * //
 * // We will create a table with the correct schema, import the public CSV file
 * // into that table, and query it for data.
 * //-
 */
function BigQuery(options) {
  if (!(this instanceof BigQuery)) {
    return new BigQuery(options);
  }

  options = options || {};

  this.connection_ = new conn.Connection({
    credentials: options.credentials,
    keyFilename: options.keyFilename,
    scopes: SCOPES
  });

  this.projectId = options.projectId;
}

/**
 * Create a dataset.
 *
 * @param {string} id - ID of the dataset to create.
 * @param {function} callback  - The callback function.
 *
 * @example
 * bigquery.createDataset('higher_education', function(err, dataset) {});
 */
BigQuery.prototype.createDataset = function(id, callback) {
  var that = this;

  var body = {
    datasetReference: {
      datasetId: id
    }
  };

  this.makeReq_('POST', '/datasets', null, body, function(err, resp) {
    if (err) {
      callback(err);
      return;
    }

    var dataset = that.dataset(id);
    dataset.metadata = resp;

    callback(null, dataset);
  });
};

/**
 * Create a reference to an existing dataset.
 *
 * @param {string} id - ID of the dataset.
 * @return {module:bigquery/dataset}
 *
 * @example
 * var dataset = bigquery.dataset('higher_education');
 */
BigQuery.prototype.dataset = function(id) {
  return new Dataset(this, id);
};

/**
 * List all or some of the datasets in your project.
 *
 * @param {object=} query - Configuration object.
 * @param {boolean} query.all - List all datasets, including hidden ones.
 * @param {number} query.maxResults - Maximum number of results to return.
 * @param {string} query.pageToken - Token returned from a previous call, to
 *     request the next page of results.
 * @param {function} callback - The callback function.
 *
 * @example
 * bigquery.getDatasets(function(err, datasets, nextQuery) {
 *   // If `nextQuery` is non-null, there are more results to fetch.
 * });
 */
BigQuery.prototype.getDatasets = function(query, callback) {
  var that = this;

  if (util.is(query, 'function')) {
    callback = query;
    query = {};
  }

  query = query || {};

  this.makeReq_('GET', '/datasets', query, null, function(err, resp) {
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

    var datasets = (resp.datasets || []).map(function(dataset) {
      var ds = that.dataset(dataset.datasetReference.datasetId);
      ds.metadata = dataset;
      return ds;
    });

    callback(null, datasets, nextQuery);
  });
};

/**
 * Get all of the jobs from your project.
 *
 * @param {object=} options - Configuration object.
 * @param {boolean=} options.allUsers - Display jobs owned by all users in the
 *     project.
 * @param {number=} options.maxResults - Maximum number of results to return.
 * @param {string=} options.pageToken - Token returned from a previous call, to
 *     request the next page of results.
 * @param {string=} options.projection - Restrict information returned to a set
 *     of selected fields. Acceptable values are "full", for all job data, and
 *     "minimal", to not include the job configuration.
 * @param {string=} options.stateFilter - Filter for job state. Acceptable
 *     values are "done", "pending", and "running".
 * @param {function} callback - The callback function.
 *
 * @example
 * bigquery.getJobs(function(err, jobs, nextQuery) {
 *   // If `nextQuery` is non-null, there are more results to fetch.
 * });
 */
BigQuery.prototype.getJobs = function(options, callback) {
  var that = this;

  if (util.is(options, 'function')) {
    callback = options;
    options = {};
  }

  options = options || {};

  this.makeReq_('GET', '/jobs', options, null, function(err, resp) {
    if (err) {
      callback(err);
      return;
    }

    var nextQuery = null;

    if (resp.nextPageToken) {
      nextQuery = extend({}, options, {
        pageToken: resp.nextPageToken
      });
    }

    var jobs = (resp.jobs || []).map(function(jobObject) {
      var job = that.job(jobObject.id);
      job.metadata = jobObject;
      return job;
    });

    callback(null, jobs, nextQuery);
  });
};

/**
 * Create a reference to an existing Job.
 *
 * @param {string} id - ID of the job.
 * @return {module:bigquery/job}
 *
 * @example
 * var myExistingJob = bigquery.job('job-id');
 */
BigQuery.prototype.job = function(id) {
  return new Job(this, id);
};

/*! Developer Documentation
 *
 * The `query` method is dual-purpose, like the use cases for a query.
 * Sometimes, a user will want to fetch results from their table in a serial
 * manner (get results -> more results exist? -> get more results, repeat.) --
 * other times, a user may want to wave their hands at making repeated calls to
 * get all of the rows, instead using a stream.
 *
 * A couple different libraries are used to cover the stream case:
 *
 *   var stream = streamEvents(through2.obj());
 *
 *   - streamEvents - https://github.com/stephenplusplus/stream-events
 *       This library enables us to wait until our stream is being asked for
 *       data, before making any API calls. It is possible a user will get a
 *       stream, then not end up running it - or, it will be run later, at a
 *       time when the token returned from the API call could have expired.
 *       Using this library ensures we wait until the last possible chance to
 *       get that token.
 *
 *   - through2 - https://github.com/rvagg/through2
 *       This is a popular library for how simple it makes dealing with the
 *       complicated Node.js Streams API. We're creating an object stream, as
 *       the data we are receiving from the API are rows of JSON data.
 */
/**
 * Run a query scoped to your project.
 *
 * If you provide a callback, this method returns the results from your query to
 * it. When querying large sets of data, it is possible your results won't be
 * returned all at once. In those cases, you will receive a third argument to
 * your callback that can be passed back to this method to return more results.
 *
 * See the examples below for such a workflow.
 *
 * This method also runs as a readable stream if you do not provide a callback.
 * In cases where more results exist, this will automatically run the subsequent
 * queries for you, pushing each row to the stream.
 *
 * @param {string|object} options - A string SQL query or configuration object.
 * @param {number} options.maxResults - Maximum number of results to read.
 * @param {string} options.query - A query string, following the BigQuery query
 *     syntax, of the query to execute.
 * @param {number} options.timeoutMs - How long to wait for the query to
 *     complete, in milliseconds, before returning. Default is to return
 *     immediately. If the timeout passes before the job completes, the request
 *     will fail with a `TIMEOUT` error.
 * @param {function=} callback - The callback function. If you intend to
 *     continuously run this query until all results are in as part of a stream,
 *     do not pass a callback.
 *
 * @example
 * var query = 'SELECT url FROM [publicdata:samples.github_nested] LIMIT 100';
 *
 * //-
 * // You can run a query against your data in a serial manner.
 * //-
 * bigquery.query(query, function(err, rows, nextQuery) {
 *   if (nextQuery) {
 *     bigquery.query(nextQuery, function(err, rows, nextQuery) {});
 *   }
 * });
 *
 * //-
 * // You can also use the `query` method as a readable object stream by
 * // omitting the callback.
 * //-
 * var through2 = require('through2');
 *
 * bigquery.query(query)
 *   .pipe(through2.obj(function(row, enc, next) {
 *     this.push(row.url += '?trackingCode=AZ19b\n');
 *     next();
 *   }))
 *   .pipe(process.stdout);
 */
BigQuery.prototype.query = function(options, callback) {
  var that = this;
  var stream;

  if (util.is(options, 'string')) {
    options = {
      query: options
    };
  }

  options = options || {};

  if (!util.is(callback, 'function')) {
    stream = streamEvents(through.obj());
    stream.once('reading', runQuery);
    return stream;
  } else {
    callback = callback || util.noop;
    runQuery();
  }

  function runQuery() {
    if (options.job) {
      that.makeReq_(
        'GET', '/queries/' + options.job.id, options, null, responseHandler);
    } else {
      // Create a job.
      that.makeReq_('POST', '/queries', null, options, responseHandler);
    }

    function responseHandler(err, resp) {
      if (err) {
        onComplete(err);
        return;
      }

      var job = that.job(resp.jobReference.jobId);
      var nextQuery = null;
      var rows = Table.mergeSchemaWithRows_(resp.schema, resp.rows || []);

      if (resp.jobComplete === false) {
        // Query is still running.
        nextQuery = extend({
          job: job
        }, options);
      } else if (resp.pageToken) {
        // More results exist.
        nextQuery = extend({
          job: job
        }, options, {
          pageToken: resp.pageToken
        });
      }

      onComplete(null, rows, nextQuery);
    }

    function onComplete(err, rows, nextQuery) {
      if (err) {
        if (stream) {
          stream.emit('error', err);
          stream.end();
        } else {
          callback(err);
        }
        return;
      }

      if (stream) {
        rows.forEach(function(row) {
          stream.push(row);
        });

        if (nextQuery) {
          that.query(nextQuery, onComplete);
        } else {
          stream.end();
        }
      } else {
        callback(null, rows, nextQuery);
      }
    }
  }
};

/**
 * Run a query as a job. No results are immediately returned. Instead, your
 * callback will be executed with a {module:bigquery/job} object that you must
 * ping for the results. See the Job documentation for explanations of how to
 * check on the status of the job.
 *
 * @param {object|string} options - The configuration object. This must be in
 *     the format of the [`configuration.query`]{@link http://goo.gl/wRpHvR}
 *     property of a Jobs resource. If a string is provided, this is used as the
 *     query string, and all other options are defaulted.
 * @param {module:bigquery/table=} options.destination - The table to save the
 *     query's results to. If omitted, a new table will be created.
 * @param {string} options.query - A query string, following the BigQuery query
 *     syntax, of the query to execute.
 * @param {function} callback - The callback function.
 *
 * @throws {Error} If a query is not specified.
 * @throws {Error} If a Table is not provided as a destination.
 *
 * @example
 * var query = 'SELECT url FROM [publicdata:samples.github_nested] LIMIT 100';
 *
 * //-
 * // You may pass only a query string, having a new table created to store the
 * // results of the query.
 * //-
 * bigquery.startQuery(query, function(err, job) {});
 *
 * //-
 * // You can also control the destination table by providing a
 * // {module:bigquery/table} object.
 * //-
 * bigquery.startQuery({
 *   destination: bigquery.dataset('higher_education').table('institutions'),
 *   query: query
 * }, function(err, job) {});
 *
 * //-
 * // After you have run `startQuery`, your query will execute in a job. Your
 * // callback is executed with a {module:bigquery/job} object so that you may
 * // check for the results.
 * //-
 * bigquery.startQuery(query, function(err, job) {
 *   if (!err) {
 *     job.getQueryResults(function(err, rows) {});
 *   }
 * });
 */
BigQuery.prototype.startQuery = function(options, callback) {
  var that = this;

  if (util.is(options, 'string')) {
    options = {
      query: options
    };
  }

  options = options || {};

  if (!options.query) {
    throw new Error('A SQL query string is required.');
  }

  var defaults = {};

  if (options.destination) {
    if (!(options.destination instanceof Table)) {
      throw new Error('Destination must be a Table object.');
    }
    defaults.destinationTable = {
      datasetId: options.destination.dataset.id,
      projectId: options.destination.dataset.bigQuery.projectId,
      tableId: options.destination.id
    };
    delete options.destination;
  }

  var body = {
    configuration: {
      query: extend(true, defaults, options)
    }
  };

  this.makeReq_('POST', '/jobs', null, body, function(err, resp) {
    if (err) {
      callback(err);
      return;
    }

    var job = that.job(resp.jobReference.jobId);
    job.metadata = resp;

    callback(null, job);
  });
};

/**
 * Make a new request object from the provided arguments and wrap the callback
 * to intercept non-successful responses.
 *
 * @private
 *
 * @param {string} method - Action.
 * @param {string} path - Request path.
 * @param {*} query - Request query object.
 * @param {*} body - Request body contents.
 * @param {function} callback - The callback function.
 */
BigQuery.prototype.makeReq_ = function(method, path, query, body, callback) {
  var reqOpts = {
    method: method,
    qs: query,
    uri: BIGQUERY_BASE_URL + this.projectId + path
  };

  if (body) {
    reqOpts.json = body;
  }

  this.connection_.req(reqOpts, function(err, res, body) {
    util.handleResp(err, res, body, callback);
  });
};

module.exports = BigQuery;
