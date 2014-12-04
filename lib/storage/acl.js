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
 * @module storage/acl
 */

'use strict';

/**
 * @type module:common/util
 * @private
 */
var util = require('../common/util.js');

/**
 * Google Cloud Storage uses access control lists (ACLs) to manage object and
 * bucket access. ACLs are the mechanism you use to share objects with other
 * users and allow other users to access your buckets and objects.
 *
 * An ACL consists of one or more entries, where each entry grants permissions
 * to a scope. Permissions define the actions that can be performed against an
 * object or bucket (for example, `READ` or `WRITE`); the scope defines who the
 * permission applies to (for example, a specific user or group of users).
 *
 * Where a `scope` value is accepted, we follow the format the Cloud Storage API
 * expects.
 *
 * Refer to
 * https://cloud.google.com/storage/docs/json_api/v1/defaultObjectAccessControls
 * for the most up-to-date values.
 *
 *   - `user-userId`
 *   - `user-email`
 *   - `group-groupId`
 *   - `group-email`
 *   - `domain-domain`
 *   - `project-team-projectId`
 *   - `allUsers`
 *   - `allAuthenticatedUsers`
 *
 * Examples:
 *
 *   - The user "liz@example.com" would be `user-liz@example.com`.
 *   - The group "example@googlegroups.com" would be
 *     `group-example@googlegroups.com`.
 *   - To refer to all members of the Google Apps for Business domain
 *     "example.com", the entity would be `domain-example.com`.
 *
 * For more detailed information, see
 * [About Access Control Lists](http://goo.gl/6qBBPO).
 *
 * @constructor
 * @alias module:storage/acl
 */
function Acl(options) {
  this.makeReq = options.makeReq;
  this.pathPrefix = options.pathPrefix;
}

/**
 * Add access controls on a {module:storage/bucket} or {module:storage/file}.
 *
 * @param {object} options - Configuration object.
 * @param {string} options.scope - Whose permissions will be added.
 * @param {string} options.role - Permissions allowed for the defined scope. See
 *     {module:storage#acl}.
 * @param {int=} options.generation - **File Objects Only** Select a specific
 *     revision of this file (as opposed to the latest version, the default).
 * @param {function} callback - The callback function.
 *
 * @alias acl.add
 *
 * @example
 * myBucket.acl.add({
 *   scope: 'user-useremail@example.com',
 *   role: storage.acl.OWNER_ROLE
 * }, function(err, aclObject) {});
 *
 * //-
 * // For file ACL operations, you can also specify a `generation` property.
 * //-
 * myFile.acl.add({
 *   scope: 'user-useremail@example.com',
 *   role: storage.acl.OWNER_ROLE,
 *   generation: 1
 * }, function(err, aclObject) {});
 */
Acl.prototype.add = function(options, callback) {
  var that = this;

  var body = {
    entity: options.scope,
    role: options.role.toUpperCase()
  };

  var query = null;

  if (options.generation) {
    query = {
      generation: options.generation
    };
  }

  this.makeReq_('POST', '', query, body, function(err, resp) {
    if (err) {
      callback(err);
      return;
    }

    callback(null, that.makeAclObject_(resp));
  });
};

/**
 * Delete access controls on a {module:storage/bucket} or {module:storage/file}.
 *
 * @param {object=} options - Configuration object.
 * @param {string} options.scope - Whose permissions will be revoked.
 * @param {int=} options.generation - **File Objects Only** Select a specific
 *     revision of this file (as opposed to the latest version, the default).
 * @param {function} callback - The callback function.
 *
 * @alias acl.delete
 *
 * @example
 * myBucket.acl.delete({
 *   scope: 'user-useremail@example.com'
 * }, function(err) {});
 *
 * //-
 * // For file ACL operations, you can also specify a `generation` property.
 * //-
 * myFile.acl.delete({
 *   scope: 'user-useremail@example.com',
 *   generation: 1
 * }, function(err) {});
 */
Acl.prototype.delete = function(options, callback) {
  var path = '/' + encodeURIComponent(options.scope);
  var query = null;

  if (options.generation) {
    query = {
      generation: options.generation
    };
  }

  this.makeReq_('DELETE', path, query, null, callback);
};

/**
 * Get access controls on a {module:storage/bucket} or {module:storage/file}. If
 * a scope is omitted, you will receive an array of all applicable access
 * controls.
 *
 * @param {object|function} options - Configuration object. If you want to
 *     receive a list of all access controls, pass the callback function as the
 *     only argument.
 * @param {string=} options.scope - Whose permissions will be fetched.
 * @param {int=} options.generation - **File Objects Only** Select a specific
 *     revision of this file (as opposed to the latest version, the default).
 *
 * @alias acl.get
 *
 * @example
 * myBucket.acl.get({
 *   scope: 'user-useremail@example.com'
 * }, function(err, aclObject) {});
 *
 * //-
 * // Get all access controls.
 * //-
 * myBucket.acl.get(function(err, aclObjects) {
 *   // aclObjects = [
 *   //   {
 *   //     scope: 'user-useremail@example.com',
 *   //     role: 'owner'
 *   //   }
 *   // ]
 * });
 *
 * //-
 * // For file ACL operations, you can also specify a `generation` property.
 * //-
 * myFile.acl.get({
 *   scope: 'user-useremail@example.com',
 *   generation: 1
 * } function(err, aclObject) {});
 */
Acl.prototype.get = function(options, callback) {
  var that = this;
  var path = '';
  var query = null;

  if (util.is(options, 'function')) {
    callback = options;
    options = null;
  } else {
    path = '/' + encodeURIComponent(options.scope);

    if (options.generation) {
      query = {
        generation: options.generation
      };
    }
  }

  this.makeReq_('GET', path, query, null, function(err, resp) {
    if (err) {
      callback(err);
      return;
    }

    var results = resp;

    if (resp.items) {
      results = (resp.items || []).map(that.makeAclObject_);
    } else {
      results = that.makeAclObject_(results);
    }

    callback(null, results);
  });
};

/**
 * Update access controls on a {module:storage/bucket} or {module:storage/file}.
 *
 * @param {object=} options - Configuration object.
 * @param {string} options.scope - Whose permissions will be added.
 * @param {string} options.role - Permissions allowed for the defined scope. See
 *     {module:storage#acl}.
 * @param {int=} options.generation - **File Objects Only** Select a specific
 *     revision of this file (as opposed to the latest version, the default).
 * @param {function} callback - The callback function.
 *
 * @alias acl.update
 *
 * @example
 * var storage = gcloud.storage();
 *
 * myBucket.acl.update({
 *   scope: 'user-useremail@example.com',
 *   role: storage.acl.WRITER_ROLE
 * }, function(err) {});
 *
 * //-
 * // For file ACL operations, you can also specify a `generation` property.
 * //-
 * myFile.acl.update({
 *   scope: 'user-useremail@example.com',
 *   role: storage.acl.WRITER_ROLE,
 *   generation: 1
 * }, function(err) {});
 */
Acl.prototype.update = function(options, callback) {
  var that = this;
  var path = '/' + encodeURIComponent(options.scope);
  var query = null;

  if (options.generation) {
    query = {
      generation: options.generation
    };
  }

  var body = {
    role: options.role.toUpperCase()
  };

  this.makeReq_('PUT', path, query, body, function(err, resp) {
    if (err) {
      callback(err);
      return;
    }

    callback(null, that.makeAclObject_(resp));
  });
};

/**
 * Transform API responses to a consistent object format.
 *
 * @private
 */
Acl.prototype.makeAclObject_ = function(accessControlObject) {
  var obj = {
    scope: accessControlObject.scope,
    role: accessControlObject.role
  };

  if (accessControlObject.projectTeam) {
    obj.projectTeam = accessControlObject.projectTeam;
  }

  return obj;
};

/**
 * Patch requests up to the bucket's request object.
 *
 * @private
 *
 * @param {string} method - Action.
 * @param {string} path - Request path.
 * @param {*} query - Request query object.
 * @param {*} body - Request body contents.
 * @param {function} callback - The callback function.
 */
Acl.prototype.makeReq_ = function(method, path, query, body, callback) {
  this.makeReq(method, this.pathPrefix + path, query, body, callback);
};

module.exports = Acl;
