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
 * Create a Table object.
 *
 * @param {string} tableId - The id of the table.
 */
function Table(tableId) {
  if (!(this instanceof Table)) {
    return new Table(tableId);
  }
  this.id = tableId;
}

/**
 * Set the metadata on the table.
 *
 * TODO: Figure out what metadata can *actually* be set.
 * TODO: Can columns be added? Removed?
 *
 * @param {object}   metadata - The metadata key/value object to set.
 * @param {Function} callback - The callback function.
 */
Table.prototype.setMetadata = function(metadata, callback) {
  throw new Error('Not implemented.');
};

/**
 * Return the metadata associated with the Table.
 *
 * @param  {Function} callback - The callback function.
 *
 * @example
 *
 * myTable.getMetadata(function(err, metadata) {
 *   // Use Table metadata here.
 * });
 */
Table.prototype.getMetadata = function(callback) {
  throw new Error('Not implemented.');
};

/**
 * Load data from a filename, gs:// url, readable stream, or raw string.
 * By loading data this way, you create a load job that will run your
 * data load asynchronously. If you would like instantaneous access to
 * your data in BigQuery, insert it using Table#insert().
 *
 * @param  {object}    options - The configuration object.
 * @param  {Function} callback - The callback function.
 *
 * TODO: Decide on param key names here for different types of data input.
 * var options = {
 *   url: 'gs://my-bucket/my-data.csv',
 *   filename: '/Users/ryanseys/my-data.csv',
 *   data: 'hello,world,123',
 *
 *   format: 'csv', // or json
 *   delimiter: ';',
 *   skipHeaderRows: 1,
 *   numErrorsAllowed: 0,
 *   allowQuotedNewlines: false,
 *   allowJaggedRows: false,
 *   ignoreUnknowns: false
 *   // these options will change as necessary
 * };
 *
 */
Table.prototype.load = function(options, callback) {
  throw new Error('Not implemented.');
};

/**
 * Create a write stream out of the table to allow data to be loaded
 * via a piped stream.
 *
 * @return {WritableStream} The writable stream object.
 *
 * @example
 *
 * var bigDataTable = myTable.createWriteStream({ type: 'csv' });
 * fs.createReadStream('big-data.csv').pipe(bigDataTable);
 */
Table.prototype.createWriteStream = function(options) {
  throw new Error('Not implemented.');
};

/**
 * Export table to Google Cloud Storage.
 *
 * @param  {object}    options - The configuration object.
 * @param  {Function} callback - The callback function.
 *
 * @example
 *
 * var exportedFile = storage.bucket('my-bucket').file('export.csv');
 * var options = {
 *   format: 'json',
 *   gzip: true, // or false (default)
 *   dest: exportedFile // or 'gs://my-bucket/export.csv' (accepts wildcards)
 * };
 * myTable.export(options, function(err) {
 *   // Exported!
 * });
 */
Table.prototype.export = function(options, callback) {
  throw new Error('Not implemented.');
};

/**
 * Delete a table and all its data.
 *
 * @param  {object=}   options - Configuration object.
 * @param  {Function} callback - The callback function.
 *
 * @example
 *
 * myTable.delete(function(err) {
 *   // Deletes table and all its data.
 * });
 */
Table.prototype.delete = function(options, callback) {
  throw new Error('Not implemented.');
};

/**
 * Retrieves table data from a specified set of rows.
 *
 * @param  {object=}   options - The configuration object.
 * @param  {Function} callback - The callback function.
 *
 * @example
 *
 * var options = {
 *   maxResults: 123,
 *   startIndex: 0,
 *   pageToken: 'token'
 *   // TODO: We should automatically handle pagination.
 * };
 * myTable.getRows(options, function(err, rows) {
 *   // Use rows here.
 * });
 */
Table.prototype.getRows = function(options, callback) {
  throw new Error('Not implemented.');
};

/**
 * Stream data into BigQuery one record at a time without running a load job.
 *
 * There are more strict quota limits using this method so it is highly
 * recommended that you load data into BigQuery using Table#load() instead.
 * The one advantage to using this method is that data is immediately
 * available in BigQuery, where as Table#load()-ing may take time to process.
 *
 * @param  {object}    options - The configuration object.
 * @param  {Function} callback - The callback function.
 *
 * @example
 *
 * myTable.insert({ dept: 'FILM', code: '1001', capacity: 42 }, function(err) {
 *   // Inserted the row.
 * });
 *
 * var rows = [
 *   { dept: 'FILM', code: '1001', capacity: 42 },
 *   { dept: 'PHIL', code: '1002', capacity: 84 },
 * ];
 *
 * myTable.insert(rows, function(err) {
 *   // Inserted the rows.
 * });
 */
Table.prototype.insert = function(options, callback) {
  throw new Error('Not implemented.');
};

/**
 * Copy data from one table to another, optionally creating that table.
 *
 * @param  {object|string} options - The dest table or configuration object.
 * @param  {Function}     callback - The callback function.
 *
 * @example
 *
 * myTable.copy(destTable, function(err, job) {
 *   // Job created to copy data.
 * });
 *
 * var options = {
 *   dest: destTable,
 *   allowCreate: false // default is true
 * };
 * myTable.copy(options, function(err, job) {
 *   // Job created to copy data.
 * });
 */
Table.prototype.copy = function(options, callback) {
  throw new Error('Not implemented.');
};

module.exports = Table;
