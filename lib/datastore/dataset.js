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

'use strict';

var conn = require('../common/connection.js');
var entity = require('./entity.js');
var Transaction = require('./transaction.js');
var Query = require('./query.js');
var util = require('../common/util.js');

var SCOPES = [
  'https://www.googleapis.com/auth/datastore',
  'https://www.googleapis.com/auth/userinfo.email'
];

/**
 * Creates a new dataset with the provided options.
 * @param {object} opts             Dataset identifier options.
 * @param {string} opts.id          Dataset ID, this is your project ID
 *                                  from Google Developers Console.
 * @param {string} opts.keyFilename Path to the JSON key file downloaded from
 *                                  Google Developers Console.
 */
function Dataset(opts) {
  opts = opts || {};
  var id = opts.projectId;

  this.connection = new conn.Connection({
    keyFilename: opts.keyFilename,
    scopes: SCOPES
  });
  this.id = id;
  this.transaction = this.createTransaction();
}

/**
 * Creates a query from the current dataset to query the specified
 * kinds.
 *
 * Example usage:
 *   ds.createQuery(['Lion', 'Chimp'])
 *   ds.createQuery('zoo', ['Lion', 'Chimp'])
 *
 * @param  {string=}       ns      Optional namespace to query entities from.
 * @param  {Array<String>} kinds A list of kinds to query.
 * @return {Query}
 */
Dataset.prototype.createQuery = function(ns, kinds) {
  if (!kinds) {
    kinds = ns;
    ns = '';
  }
  kinds = util.arrayize(kinds);
  return new Query(ns, kinds);
};

/**
 * Gets the object identified with the provided key.
 * @param  {Key}        key       A non-incomplete key.
 * @param  {Function}   callback  The callback function.
 */
Dataset.prototype.get = function(key, callback) {
  this.transaction.get(key, callback);
};

Dataset.prototype.save = function(key, obj, callback) {
  this.transaction.save(key, obj, callback);
};

Dataset.prototype.delete = function(key, callback) {
  this.transaction.delete(key, callback);
};

Dataset.prototype.runQuery = function(q, callback) {
  this.transaction.runQuery(q, callback);
};

Dataset.prototype.runInTransaction = function(fn, callback) {
  var newTransaction = this.createTransaction();
  newTransaction.begin(function(err) {
    if (err) {
      return callback(err);
    }
    fn(newTransaction, newTransaction.finalize.bind(newTransaction, callback));
  });
};

Dataset.prototype.allocateIds = function(incompleteKey, n, callback) {
  if (entity.isKeyComplete(incompleteKey)) {
    throw new Error('An incomplete key should be provided.');
  }
  var incompleteKeys = [];
  for (var i = 0; i < n; i++) {
    incompleteKeys.push(entity.keyToKeyProto(incompleteKey));
  }
  this.transaction.makeReq(
      'allocateIds', { keys: incompleteKeys }, function(err, resp) {
    if (err) {
      return callback(err);
    }
    var keys = [];
    resp.keys.forEach(function(k) {
      keys.push(entity.keyFromKeyProto(k));
    });
    callback(null ,keys);
  });
};

Dataset.prototype.createTransaction = function() {
  return new Transaction(this.connection, this.id);
};

/**
 * Exports Dataset.
 * @type {Dataset}
 */
module.exports = Dataset;
