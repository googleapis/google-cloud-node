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

var Table = require('./dataset.table.js');

/**
 * Create a Dataset object.
 *
 * @param {string} datasetId - The id of the Dataset.
 */
function Dataset(datasetId) {
  if (!(this instanceof Dataset)) {
    return new Dataset(datasetId);
  }
  this.id = datasetId;
}

/**
 * Sets the metadata of the Dataset object.
 *
 * @param {object}   metadata - Metadata to save on the Dataset.
 * @param {Function} callback - The callback function.
 *
 * @example
 *
 * var metadata = {
 *   description: 'kittens dataset'
 * };
 *
 * myDataset.setMetadata(metadata, function(err) {
 *   if(!err) {
 *     // use updated myDataset
 *   }
 * });
 */
Dataset.prototype.setMetadata = function(metadata, callback) {
  throw new Error('Not implemented.');
};

/**
 * Get the metadata for the Dataset.
 *
 * @param  {Function} callback - The callback function.
 *
 * @example
 *
 * myDataset.getMetadata(function(err, metadata) {
 *   if(!err) {
 *     // use metadata object, myDataset is already automatically updated
 *   }
 * });
 */
Dataset.prototype.getMetadata = function(callback) {
  throw new Error('Not implemented.');
};

/**
 * Delete the dataset.
 *
 * @param  {object=}  options - The configuration object.
 * @param  {boolean}  options.force - Force delete dataset and all tables.
 * @param  {Function} callback - The callback function.
 *
 * @example
 *
 * myDataset.delete(function(err) {
 *   // Deletes a dataset only if it does not have any tables.
 * });
 *
 * myDataset.delete({ force: true }, function(err) {
 *   // Deletes dataset and any tables it contains.
 * });
 */
Dataset.prototype.delete = function(options, callback) {
  throw new Error('Not implemented.');
};

/**
 * Return a new instance of reference to an existing Table object.
 *
 * @param  {string} tableId - The id of the table.
 * @return {Table} Reference to existing Table object.
 */
Dataset.prototype.table = function(tableId) {
  return new Table({
    dataset: this,
    id: tableId
  });
};

/**
 * Create a table given a tableId or configuration object.
 *
 * @param  {string|object} options - Table id or configuration object.
 * @param  {string}        options.id - The id of the table.
 * @param  {string|object} options.schema - A comma-separated list of name:type
 *                                        pairs. Valid types are "string",
 *                                        "integer", "float", "boolean", and
 *                                        "timestamp". If the type is omitted,
 *                                        it is assumed to be "string". Example:
 *                                        name:string, age:integer Schemas can
 *                                        also be specified as a JSON array of
 *                                        fields, which allows for nested and
 *                                        repeated fields.
 * @param {Function} callback - The callback function.
 *
 * @example
 *
 * myDataset.createTable('customers', function(err, table) {
 *   // use the table
 * });
 *
 * @example
 *
 * var tableConfig = {
 *   id: 'my-kittens',
 *   // breed and name are defaulted to type = string
 *   schema: 'id:integer,breed,name,dob:timestamp' // or json nested fields
 * };
 *
 * myDataset.createTable(tableConfig)
 */
Dataset.prototype.createTable = function(options, callback) {
  throw new Error('Not implemented.');
};

/**
 * Get a list of tables.
 *
 * @example
 *
 * var myDataset = bigquery.dataset(datasetId);
 * myDataset.getTables(function(err, tables) {
 *   // use tables
 * });
 *
 * @param  {object=}   options - The configuration object.
 * @param  {Function} callback - The callback function.
 */
Dataset.prototype.getTables = function(options, callback) {
  throw new Error('Not implemented.');
};

module.exports = Dataset;
