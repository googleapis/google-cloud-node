/**
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

/**
 * @module datastore
 */

'use strict';

/** @type module:datastore/entity */
var entity = require('./entity');

/** @alias module:datastore */
var datastore = {};

/**
 * @borrows {module:datastore/dataset} as Dataset
 *
 * @example
 * ```js
 * var dataset = new datastore.Dataset();
 * ```
 */
datastore.Dataset = require('./dataset');

/**
 * @borrows {module:datastore/entity~Int} as int
 *
 * @example
 * ```js
 * var anInteger = dataset.int(7);
 * ```
 */
datastore.int = function(value) {
  return new entity.Int(value);
};

/**
 * Helper function to get a Datastore Double object.
 *
 * @borrows {module:datastore/entity~Double} as double
 *
 * @example
 * ```js
 * var aDouble = dataset.double(7);
 * ```
 */
datastore.double = function(value) {
  return new entity.Double(value);
};

module.exports = datastore;
