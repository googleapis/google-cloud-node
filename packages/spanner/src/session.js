/*!
 * Copyright 2016 Google Inc. All Rights Reserved.
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
 * @module spanner/session
 */

'use strict';

var common = require('@google-cloud/common');
var commonGrpc = require('@google-cloud/common-grpc');
var extend = require('extend');
var util = require('util');

/**
 * @type {module:spanner/transaction}
 * @private
 */
var Transaction = require('./transaction.js');

/**
 * Create a Session object to interact with a Cloud Spanner session.
 *
 * It is unlikely you will need to interact with sessions directly. By default,
 * sessions are created and utilized for maximum performance automatically.
 *
 * @constructor
 * @alias module:spanner/session
 *
 * @private
 *
 * @param {string=} name - The name of the session. If not provided, it is
 *     assumed you are going to create it.
 *
 * @example
 * var instance = spanner.instance('my-instance');
 * var database = instance.database('my-database');
 *
 * //-
 * // To create a session manually, don't provide a name.
 * //-
 * var session = database.session_();
 *
 * session.create(function(err) {
 *   if (err) {
 *     // Error handling omitted.
 *   }
 *
 *   // Session created successfully.
 *   // `session.id` = The name of the session.
 * });
 *
 * //-
 * // To access a previously-created session, provide a name.
 * //-
 * var session = database.session_('session-name');
 */
function Session(database, name) {
  var self = this;

  this.api = database.api;

  if (name) {
    this.formattedName_ = Session.formatName_(database.formattedName_, name);
  }

  var methods = {
    /**
     * Create a session.
     *
     * @param {object=} options - See {module:spanner/database#createSession}.
     *
     * @example
     * session.create(function(err, session, apiResponse) {
     *   if (err) {
     *     // Error handling omitted.
     *   }
     *
     *   // Session created successfully.
     * });
     *
     * //-
     * // If the callback is omitted, we'll return a Promise.
     * //-
     * session.create()
     *   .then(function(data) {
     *     var session = data[0];
     *     var apiResponse = data[1];
     *
     *     // Session created successfully.
     *   });
     */
    create: true,

    /**
     * Check if a session exists.
     *
     * @param {function} callback - The callback function.
     * @param {?error} callback.err - An error returned while making this
     *     request.
     * @param {boolean} callback.exists - Whether the session exists or not.
     *
     * @example
     * session.exists(function(err, exists) {});
     *
     * //-
     * // If the callback is omitted, we'll return a Promise.
     * //-
     * session.exists().then(function(data) {
     *   var exists = data[0];
     * });
     */
    exists: true,

    /**
     * Get a session if it exists.
     *
     * You may optionally use this to "get or create" an object by providing an
     * object with `autoCreate` set to `true`. Any extra configuration that is
     * normally required for the `create` method must be contained within this
     * object as well.
     *
     * @param {options=} options - Configuration object.
     * @param {boolean} options.autoCreate - Automatically create the object if
     *     it does not exist. Default: `false`
     *
     * @example
     * session.get(function(err, session, apiResponse) {
     *   // `session.metadata` has been populated.
     * });
     *
     * //-
     * // If the callback is omitted, we'll return a Promise.
     * //-
     * session.get().then(function(data) {
     *   var session = data[0];
     *   var apiResponse = data[0];
     * });
     */
    get: true
  };

  commonGrpc.ServiceObject.call(this, {
    parent: database,
    id: name,
    methods: methods,
    createMethod: function(options, callback) {
      database.createSession_(options, function(err, session, apiResponse) {
        if (err) {
          callback(err, null, apiResponse);
          return;
        }

        extend(self, session);

        callback(null, self, apiResponse);
      });
    }
  });
}

util.inherits(Session, commonGrpc.ServiceObject);

/**
 * Format the session name to include the parent database's name.
 *
 * @private
 *
 * @param {string} databaseName - The parent database's name.
 * @param {string} name - The instance name.
 *
 * @example
 * Session.formatName_('my-database', 'my-session');
 * // 'projects/grape-spaceship-123/instances/my-instance/' +
 * // 'databases/my-database/sessions/my-session'
 */
Session.formatName_ = function(databaseName, name) {
  if (name.indexOf('/') > -1) {
    return name;
  }

  var sessionName = name.split('/').pop();

  return databaseName + '/sessions/' + sessionName;
};

/**
 * Delete a session.
 *
 * @param {function=} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request.
 * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * session.delete(function(err, apiResponse) {
 *   if (err) {
 *     // Error handling omitted.
 *   }
 *
 *   // Session deleted successfully.
 * });
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * session.delete().then(function(data) {
 *   var apiResponse = data[0];
 * });
 */
Session.prototype.delete = function(callback) {
  return this.api.Spanner.deleteSession({
    name: this.formattedName_
  }, callback);
};

/**
 * Get the session's metadata.
 *
 * @param {function=} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request.
 * @param {object} callback.metadata - The session's metadata.
 * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * session.getMetadata(function(err, metadata, apiResponse) {});
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * session.getMetadata().then(function(data) {
 *   var metadata = data[0];
 *   var apiResponse = data[1];
 * });
 */
Session.prototype.getMetadata = function(callback) {
  return this.api.Spanner.getSession({
    name: this.formattedName_
  }, callback);
};

/**
 * Ping the session with `SELECT 1` to prevent it from expiring.
 *
 * @param {function=} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request.
 * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * session.keepAlive(function(err) {
 *   if (err) {
 *     // An error occurred while trying to keep this session alive.
 *   }
 * });
 */
Session.prototype.keepAlive = function(callback) {
  return this.api.Spanner.executeSql({
    session: this.formattedName_,
    sql: 'SELECT 1'
  }, callback);
};

/**
 * Create a Transaction object.
 *
 * @throws {Error} If an ID is not provided.
 *
 * @param {string} id - The id of the transaction.
 * @return {module:spanner/transaction} - A Transaction object.
 *
 * @example
 * var transaction = database.transaction('transaction-id');
 */
Session.prototype.transaction = function(id) {
  return new Transaction(this, id);
};

/*! Developer Documentation
 *
 * All async methods (except for streams) will return a Promise in the event
 * that a callback is omitted.
 */
common.util.promisifyAll(Session, {
  exclude: [
    'delete',
    'getMetadata',
    'transaction'
  ]
});

module.exports = Session;
