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

var is = require('is');
var nodeutil = require('util');

/**
 * @type {module:common/serviceObject}
 * @private
 */
var ServiceObject = require('../common/service-object.js');

/**
 * @type {module:common/util}
 * @private
 */
var util = require('../common/util.js');

/*! Developer Documentation
 *
 * @param {module:bigquery} bigQuery - BigQuery instance.
 * @param {string} id - The ID of the job.
 *
 * @example
 * var bigquery = gcloud.bigquery({ projectId: 'grape-spaceship-123' });
 * var Job = require('gcloud/lib/bigquery/job');
 * var job = new Job(bigquery, 'job-id');
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
 *
 * @example
 * var gcloud = require('gcloud')({
 *   keyFilename: '/path/to/keyfile.json',
 *   projectId: 'grape-spaceship-123'
 * });
 *
 * var bigquery = gcloud.bigquery();
 *
 * var job = bigquery.job('job-id');
 */
function Job(bigQuery, id) {
  var methods = {
    /**
     * Check if the job exists.
     *
     * @param {function} callback - The callback function.
     * @param {?error} callback.err - An error returned while making this
     *     request.
     * @param {boolean} callback.exists - Whether the job exists or not.
     *
     * @example
     * job.exists(function(err, exists) {});
     */
    exists: true,

    /**
     * Get a job if it exists.
     *
     * @example
     * job.get(function(err, job, apiResponse) {
     *   if (!err) {
     *     // `job.metadata` has been populated.
     *   }
     * });
     */
    get: true,

    /**
     * Get the metadata of the job. This will mostly be useful for checking the
     * status of a previously-run job.
     *
     * @resource [Jobs: get API Documentation]{@link https://cloud.google.com/bigquery/docs/reference/v2/jobs/get}
     *
     * @param {function} callback - The callback function.
     * @param {?error} callback.err - An error returned while making this
     *     request.
     * @param {object} callback.metadata - The metadata of the job.
     * @param {object} callback.apiResponse - The full API response.
     *
     * @example
     * var job = bigquery.job('id');
     * job.getMetadata(function(err, metadata, apiResponse) {});
     */
    getMetadata: true
  };

  ServiceObject.call(this, {
    parent: bigQuery,
    baseUrl: '/jobs',
    id: id,
    methods: methods
  });

  this.bigQuery = bigQuery;

  // The API endpoint for cancel is:    .../bigquery/v2/project/projectId/...
  // The rest of the API endpoints are: .../bigquery/v2/projects/projectId/...
  // Reference: https://github.com/GoogleCloudPlatform/gcloud-node/issues/1027
  this.interceptors.push({
    request: function(reqOpts) {
      if (reqOpts.uri.indexOf('/cancel') > -1) {
        reqOpts.uri = reqOpts.uri.replace('/projects/', '/project/');
      }
      return reqOpts;
    }
  });
}

nodeutil.inherits(Job, ServiceObject);

/**
 * Cancel a job. Use {module:bigquery/job#getMetadata} to see if the cancel
 * completes successfully. See an example implementation below.
 *
 * @resource [Jobs: get API Documentation]{@link https://cloud.google.com/bigquery/docs/reference/v2/jobs/cancel}
 *
 * @param {function=} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request.
 * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * job.cancel(function(err, apiResponse) {
 *   // Check to see if the job completes successfully.
 *   onJobComplete(function(err) {
 *     if (!err) {
 *       // Job cancelled successfully.
 *     }
 *   });
 * });
 *
 * function onJobComplete(callback) {
 *   // Start a loop to check the status of the operation.
 *   checkJobStatus();
 *
 *   function checkJobStatus() {
 *     job.getMetadata(function(err, apiResponse) {
 *       if (err) {
 *         callback(err);
 *         return;
 *       }
 *
 *       if (apiResponse.status.state !== 'DONE') {
 *         // Job has not completed yet. Check again in 3 seconds.
 *         setTimeout(checkJobStatus, 3000);
 *         return;
 *       }
 *
 *       // Job completed sucessfully.
 *       callback();
 *     });
 *   }
 * }
 */
Job.prototype.cancel = function(callback) {
  callback = callback || util.noop;

  this.request({
    method: 'POST',
    uri: '/cancel'
  }, function(err, resp) {
    callback(err, resp);
  });
};

/**
 * Get the results of a job.
 *
 * @resource [Jobs: getQueryResults API Documentation]{@link https://cloud.google.com/bigquery/docs/reference/v2/jobs/getQueryResults}
 *
 * @param {object=} options - Configuration object.
 * @param {boolean} options.autoPaginate - Have pagination handled
 *     automatically. Default: true.
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
 * @param {?error} callback.err - An error returned while making this request
 * @param {array} callback.rows - The results of a job.
 * @param {?object} callback.nextQuery - If present, query with this object to
 *     check for more results.
 * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * //-
 * // Get all of the results of a query.
 * //-
 * job.getQueryResults(function(err, rows) {
 *   if (!err) {
 *     // rows is an array of results.
 *   }
 * });
 *
 * //-
 * // Customize the results you want to fetch.
 * //-
 * job.getQueryResults({
 *   maxResults: 100
 * }, function(err, rows) {});
 *
 * //-
 * // To control how many API requests are made and page through the results
 * // manually, set `autoPaginate` to `false`.
 * //-
 * var callback = function(err, rows, nextQuery, apiResponse) {
 *   if (nextQuery) {
 *     // More results exist.
 *     job.getQueryResults(nextQuery, callback);
 *   }
 * };
 *
 * job.getQueryResults({
 *   autoPaginate: false
 * }, callback);
 *
 * //-
 * // Consume the results from the query as a readable object stream.
 * //-
 * var through2 = require('through2');
 * var fs = require('fs');
 *
 * job.getQueryResults()
 *   .pipe(through2.obj(function (row, enc, next) {
 *     this.push(JSON.stringify(row) + '\n');
 *     next();
 *   }))
 *   .pipe(fs.createWriteStream('./test/testdata/testfile.json'));
 */
Job.prototype.getQueryResults = function(options, callback) {
  if (is.fn(options)) {
    callback = options;
    options = {};
  }

  options = options || {};
  options.job = this;
  return this.bigQuery.query(options, callback);
};

module.exports = Job;
