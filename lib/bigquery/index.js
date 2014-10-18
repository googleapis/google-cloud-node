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
 * @module storage
 */

'use strict';

/**
 * @type module:common/connection
 * @private
 */
var conn = require('../common/connection.js');

/**
 * @type module:common/util
 * @private
 */
var util = require('../common/util.js');

/**
 * Required scopes for Google Cloud BigQuery API.
 *
 * @const {array}
 * @private
 */
var SCOPES = ['https://www.googleapis.com/auth/bigquery'];

var Dataset = require('./dataset.js');
var Job = require('./job.js');

/**
 * BigQuery API client.
 *
 * @param {object=} config - The configuration object.
 */
function BigQuery(config) {
  this.config = config || {};
}

/**
 * Create a reference to an existing dataset.
 *
 * @param  {string} datasetId - Id of the dataset.
 * @return {Dataset}          Reference to existing Dataset.
 */
BigQuery.prototype.dataset = function(datasetId) {
  return new Dataset(datasetId);
};

/**
 * Create a dataset.
 * @param  {string}   datasetId - The dataset id.
 * @param  {Function} callback  - The callback function.
 *
 * @example
 *
 * bigquery.createDataset('my-kittens', function(err, dataset) {
 *   // Use the newly created Dataset to create tables.
 * });
 */
BigQuery.prototype.createDataset = function(datasetId, callback) {
  throw new Error('Not implemented.');
};

/**
 * List all or some of the BigQuery datasets.
 *
 * @param  {object=}   options - Configuration object.
 * @param  {Function} callback - The callback function.
 *
 * @example
 *
 * bigquery.getDatasets({
 *   all: true,
 *   maxResults: someNumber
 * },
 * function(err, datasets) {});
 */
BigQuery.prototype.getDatasets = function(options, callback) {
  throw new Error('Not implemented.');
};

/**
 * Create a reference to an existing Job.
 *
 * @param  {string} jobId - Id of the job.
 * @return {Job}          Reference to existing Job.
 *
 * @example
 *
 * var myExistingJob = bigquery.job('my-job-id');
 */
BigQuery.prototype.job = function(jobId) {
  return new Job(jobId);
};

/**
 * Create a new job.
 *
 * @param  {object}     config - The configuration object.
 * @param  {Function} callback - The callback function.
 *
 * @example
 *
 * var config = {
 *
 * };
 * bigquery.createJob(config, function(err, job) {
 *   // Use your newly created job.
 * });
 */
BigQuery.prototype.createJob = function(options, callback) {
  throw new Error('Not implemented.');
};

/**
 * Get the list of jobs.
 *
 * @example
 *
 * bigquery.getJobs(function(err, jobs) {
 *   // Use list of jobs here.
 * });
 *
 * var options = {
 *   limit: 3 // only show max 3 results
 * };
 * bigquery.getJobs(options, function(err, jobs) {
 *   // Use list of jobs here.
 * });
 *
 * @param {object=}   options - Configuration object
 * @param {Function} callback - The callback function.
 */
BigQuery.prototype.getJobs = function(options, callback) {
  throw new Error('Not implemented.');
};

/**
 * Get the list of projects.
 *
 * @param  {object=}   options - The configuration object.
 * @param  {Function} callback - The callback function.
 *
 * @example
 *
 * bigquery.getProjects(function(err, projects) {
 *   // Use list of projects here.
 * });
 *
 * var options = {
 *   limit: 3 // only show max 3 results
 * };
 * bigquery.getProjects(options, function(err, projects) {
 *   // Use list of projects here.
 * });
 */
BigQuery.prototype.getProjects = function(options, callback) {
  throw new Error('Not implemented.');
};

/**
 * Run a query in BigQuery.
 *
 * var myQuery = {
 *   query: ‘SELECT * FROM users’,
 *   dryRun: true,
 *   maxResults: 123,
 *   useQueryCache: false,
 *
 *   // Automatically concat pages together up to maxResults limit.
 *   auto: true
 * };
 *
 * bigquery.query(myQuery, function(err, results) {
 *   if(err) {
 *     // An actual error occurred.
 *   }
 *   if(!results.jobCompleted) {
 *     // No results because job still going...
 *   } else {
 *     // Results is just what was returned from BigQuery for now.
 *     // TODO: Is there a better format that we can return results in?
 *   }
 * });
 *
 * @param  {object}    options - The configuration object.
 * @param  {Function} callback - The callback function.
 */
BigQuery.prototype.query = function(options, callback) {
  throw new Error('Not implemented.');
};

module.exports = BigQuery;
