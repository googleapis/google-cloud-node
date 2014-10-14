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
 * @const {array}
 * @private
 */
var SCOPES = ['https://www.googleapis.com/auth/bigquery'];

var Dataset = require('./dataset.js');
var Job = require('./job.js');

function BigQuery(config) {
  this.config = config || {};
}

// Datasets & Tables & Tabledata
BigQuery.prototype.dataset = function(datasetId) {
  return new Dataset(datasetId);
};

BigQuery.prototype.createDataset = function(datasetId, callback) {
  throw new Error('Not implemented.');
};

/**
 * List all or some of the BigQuery datasets.
 *
 * @param  {object=}   options - Configuration object
 * @param  {Function} callback - The callback function
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

// Jobs
BigQuery.prototype.job = function(jobId) {
  return new Job(jobId);
};

BigQuery.prototype.createJob = function(jobId, callback) {
  throw new Error('Not implemented.');
};

BigQuery.prototype.getJobs = function(callback) {
  throw new Error('Not implemented.');
};

// Projects
BigQuery.prototype.getProjects = function(callback) {
  throw new Error('Not implemented.');
};

module.exports = BigQuery;
