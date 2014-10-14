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
 * @param {object} options - Configuration object.
 */
function Table(options) {
  if (!(this instanceof Table)) {
    return new Table(options);
  }
}

Table.prototype.setMetadata = function() {
  throw new Error('Not implemented.');
};


Table.prototype.getMetadata = function() {
  throw new Error('Not implemented.');
};

/**
 * Insert rows into the table.
 *
 * @param  {object|[object]} rows - Rows of data to insert into table.
 * @param  {Function} callback - The callback function.
 *
 * @example
 *
 * myTable.insert()
 */
Table.prototype.insert = function(rows, callback) {
  throw new Error('Not implemented.');
};

module.exports = Table;
