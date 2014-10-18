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

'use strict';

/**
 * Create a job.
 *
 * @param {string} jobId - The id of the job.
 * @return {Job}           The Job object.
 */
function Job(jobId) {
  if (!(this instanceof Job)) {
    return new Job(jobId);
  }
  this.id = jobId;
}

/**
 * Get the Job resource for the job.
 *
 * @param  {Function} callback - The callback function.
 *
 * @example
 *
 * myJob.getMetadata(function(err, metadata) {
 *   // Use the metadata (myJob has been updated too).
 * });
 */
Job.prototype.getMetadata = function(callback) {
  throw new Error('Not implemented.');
};

/**
 * Run a query.
 *
 * var myQuery = {
 *   query: ‘SELECT * FROM users’,
 *   dryRun: true,
 *   maxResults: 123,
 *   useQueryCache: false,
 *
 *   // automatically concat pages
 *   // together up to maxResults limit.
 *   auto: true
 * };
 *
 * var myJob = bigquery.job(jobId);
 *
 * myJob.query(myQuery, function(err, results) {
 *   if(err) {
 *     // An actual error occurred.
 *   }
 *   if(results.timedout) {
 *     // No results because job still going...
 *   } else {
 *     // Results returned.
 *   }
 * });
 *
 * @param  {object}   options  - The configuration object.
 * @param  {Function} callback - The callback function.
 */
Job.prototype.query = function(options, callback) {
  throw new Error('Not implemented.');
};

/**
 * Get the results of a job.
 *
 * @param  {object=}  options  - The configuration object.
 * @param  {Function} callback - The callback function.
 */
Job.prototype.getResults = function(options, callback) {
  throw new Error('Not implemented.');
};

module.exports = Job;
