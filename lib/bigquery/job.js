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
 * @module bigquery/job
 */

'use strict';

/**
 * @type {module:common/util}
 * @private
 */
var util = require('../common/util');

/*! Developer Documentation
 *
 * @param {module:bigquery} bigQuery - BigQuery instance.
 * @param {string} id - The ID of the table.
 */
/**
 * Job objects are returned from various places in the BigQuery API:
 *
 * - {module:bigquery#getJobs}
 * - {module:bigquery#job}
 * - {module:bigquery#query}
 * - {module:bigquery#startJob}
 * - {module:bigquery/table#copy}
 * - {module:bigquery/table#createWriteStream}
 * - {module:bigquery/table#export}
 * - {module:bigquery/table#import}
 *
 * They can be used to check the status of a running job or fetching the results
 * of a previously-executed one.
 *
 * @alias module:bigquery/job
 * @constructor
 */
function Job(bigQuery, id) {
  this.bigQuery = bigQuery;
  this.id = id;
  this.metadata = {};
}

/**
 * Get the metadata of the job. This will mostly be useful for checking the
 * status of a previously-run job.
 *
 * @param {function} callback - The callback function.
 *
 * @example
 * job.getMetadata(function(err, metadata) {});
 */
Job.prototype.getMetadata = function(callback) {
  var that = this;

  var path = '/jobs/' + this.id;

  this.bigQuery.makeReq_('GET', path, null, null, function(err, resp) {
    if (err) {
      callback(err);
      return;
    }

    that.metadata = resp;

    callback(null, that.metadata);
  });
};

/**
 * Get the results of a job.
 *
 * @param {object=} options - Configuration object.
 * @param {number} options.maxResults - Maximum number of results to read.
 * @param {string} options.pageToken - Page token, returned by a previous call,
 *     to request the next page of results. Note: This is automatically added to
 *     the `nextQuery` argument of your callback.
 * @param {number} options.startIndex - Zero-based index of the starting row.
 * @param {number} options.timeoutMs - How long to wait for the query to
 *     complete, in milliseconds, before returning. Default is to return
 *     immediately. If the timeout passes before the job completes, the request
 *     will fail with a `TIMEOUT` error.
 * @param {function=} callback - The callback function. If you intend to
 *     continuously run this query until all results are in as part of a stream,
 *     do not pass a callback.
 *
 * @example
 * //-
 * // Use the default options to get the results of a query.
 * //-
 * job.getQueryResults(function(err, rows, nextQuery) {});
 *
 * //-
 * // Customize the results you want to fetch.
 * //-
 * var options = {
 *   maxResults: 100
 * };
 *
 * job.getQueryResults(options, function(err, rows, nextQuery) {});
 *
 * //-
 * // Consume the results from the query as a readable stream.
 * //-
 * var through2 = require('through2');
 *
 * job.getQueryResults(options)
 *   .pipe(through2.obj(function (row, enc, next) {
 *     this.push(JSON.stringify(row) + '\n');
 *   }))
 *   .pipe(fs.createWriteStream('./backup.json'));
 */
Job.prototype.getQueryResults = function(options, callback) {
  if (util.is(options, 'function')) {
    callback = options;
    options = {};
  }

  options = options || {};
  options.job = this;

  return this.bigQuery.query(options, callback);
};

module.exports = Job;
