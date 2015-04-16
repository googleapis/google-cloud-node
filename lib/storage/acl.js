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

var nodeutil = require('util');

/**
 * @type {module:common/util}
 * @private
 */
var util = require('../common/util.js');

/**
 * Google Cloud Storage uses access control lists (ACLs) to manage object and
 * bucket access. ACLs are the mechanism you use to share objects with other
 * users and allow other users to access your buckets and objects.
 *
 * An ACL consists of one or more entries, where each entry grants permissions
 * to an entity. Permissions define the actions that can be performed against an
 * object or bucket (for example, `READ` or `WRITE`); the entity defines who the
 * permission applies to (for example, a specific user or group of users).
 *
 * Where an `entity` value is accepted, we follow the format the Cloud Storage
 * API expects.
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
  AclRoleAccessorMethods.call(this);

  this.makeReq = options.makeReq;
  this.pathPrefix = options.pathPrefix;
}

/**
 * An object of convenience methods to add or delete owner ACL permissions for a
 * given entity.
 *
 * The supported methods include:
 *
 *   - `myFile.acl.owners.addAllAuthenticatedUsers`
 *   - `myFile.acl.owners.deleteAllAuthenticatedUsers`
 *   - `myFile.acl.owners.addAllUsers`
 *   - `myFile.acl.owners.deleteAllUsers`
 *   - `myFile.acl.owners.addDomain`
 *   - `myFile.acl.owners.deleteDomain`
 *   - `myFile.acl.owners.addGroup`
 *   - `myFile.acl.owners.deleteGroup`
 *   - `myFile.acl.owners.addProject`
 *   - `myFile.acl.owners.deleteProject`
 *   - `myFile.acl.owners.addUser`
 *   - `myFile.acl.owners.deleteUser`
 *
 * @alias acl.owners
 *
 * @return {object}
 *
 * @example
 * //-
 * // Add a user as an owner of a file.
 * //-
 * myFile.acl.owners.addUser('email@example.com', function(err, aclObject) {});
 *
 * //-
 * // For reference, the above command is the same as running the following.
 * //-
 * myFile.acl.add({
 *   entity: 'user-email@example.com',
 *   role: storage.acl.OWNER_ROLE
 * }, function(err, aclObject) {});
 */
Acl.prototype.owners = {};

/**
 * An object of convenience methods to add or delete reader ACL permissions for
 * a given entity.
 *
 * The supported methods include:
 *
 *   - `myFile.acl.readers.addAllAuthenticatedUsers`
 *   - `myFile.acl.readers.deleteAllAuthenticatedUsers`
 *   - `myFile.acl.readers.addAllUsers`
 *   - `myFile.acl.readers.deleteAllUsers`
 *   - `myFile.acl.readers.addDomain`
 *   - `myFile.acl.readers.deleteDomain`
 *   - `myFile.acl.readers.addGroup`
 *   - `myFile.acl.readers.deleteGroup`
 *   - `myFile.acl.readers.addProject`
 *   - `myFile.acl.readers.deleteProject`
 *   - `myFile.acl.readers.addUser`
 *   - `myFile.acl.readers.deleteUser`
 *
 * @alias acl.readers
 *
 * @return {object}
 *
 * @example
 * //-
 * // Add a user as a reader of a file.
 * //-
 * myFile.acl.readers.addUser('email@example.com', function(err, aclObject) {});
 *
 * //-
 * // For reference, the above command is the same as running the following.
 * //-
 * myFile.acl.add({
 *   entity: 'user-email@example.com',
 *   role: storage.acl.READER_ROLE
 * }, function(err, aclObject) {});
 */
Acl.prototype.readers = {};

/**
 * An object of convenience methods to add or delete writer ACL permissions for
 * a given entity.
 *
 * The supported methods include:
 *
 *   - `myFile.acl.writers.addAllAuthenticatedUsers`
 *   - `myFile.acl.writers.deleteAllAuthenticatedUsers`
 *   - `myFile.acl.writers.addAllUsers`
 *   - `myFile.acl.writers.deleteAllUsers`
 *   - `myFile.acl.writers.addDomain`
 *   - `myFile.acl.writers.deleteDomain`
 *   - `myFile.acl.writers.addGroup`
 *   - `myFile.acl.writers.deleteGroup`
 *   - `myFile.acl.writers.addProject`
 *   - `myFile.acl.writers.deleteProject`
 *   - `myFile.acl.writers.addUser`
 *   - `myFile.acl.writers.deleteUser`
 *
 * @alias acl.writers
 *
 * @return {object}
 *
 * @example
 * //-
 * // Add a user as a writer of a file.
 * //-
 * myFile.acl.writers.addUser('email@example.com', function(err, aclObject) {});
 *
 * //-
 * // For reference, the above command is the same as running the following.
 * //-
 * myFile.acl.add({
 *   entity: 'user-email@example.com',
 *   role: storage.acl.WRITER_ROLE
 * }, function(err, aclObject) {});
 */
Acl.prototype.writers = {};

nodeutil.inherits(Acl, AclRoleAccessorMethods);

/**
 * Add access controls on a {module:storage/bucket} or {module:storage/file}.
 *
 * @param {object} options - Configuration object.
 * @param {string} options.entity - Whose permissions will be added.
 * @param {string} options.role - Permissions allowed for the defined entity.
 *     See {module:storage#acl}.
 * @param {int=} options.generation - **File Objects Only** Select a specific
 *     revision of this file (as opposed to the latest version, the default).
 * @param {function} callback - The callback function.
 *
 * @alias acl.add
 *
 * @example
 * myBucket.acl.add({
 *   entity: 'user-useremail@example.com',
 *   role: storage.acl.OWNER_ROLE
 * }, function(err, aclObject, apiResponse) {});
 *
 * //-
 * // For file ACL operations, you can also specify a `generation` property.
 * // Here is how you would grant ownership permissions to a user on a specific
 * // revision of a file.
 * //-
 * myFile.acl.add({
 *   entity: 'user-useremail@example.com',
 *   role: storage.acl.OWNER_ROLE,
 *   generation: 1
 * }, function(err, aclObject, apiResponse) {});
 */
Acl.prototype.add = function(options, callback) {
  var that = this;

  var body = {
    entity: options.entity,
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
      callback(err, null, resp);
      return;
    }

    callback(null, that.makeAclObject_(resp), resp);
  });
};

/**
 * Delete access controls on a {module:storage/bucket} or {module:storage/file}.
 *
 * @param {object=} options - Configuration object.
 * @param {string} options.entity - Whose permissions will be revoked.
 * @param {int=} options.generation - **File Objects Only** Select a specific
 *     revision of this file (as opposed to the latest version, the default).
 * @param {function} callback - The callback function.
 *
 * @alias acl.delete
 *
 * @example
 * myBucket.acl.delete({
 *   entity: 'user-useremail@example.com'
 * }, function(err, apiResponse) {});
 *
 * //-
 * // For file ACL operations, you can also specify a `generation` property.
 * //-
 * myFile.acl.delete({
 *   entity: 'user-useremail@example.com',
 *   generation: 1
 * }, function(err, apiResponse) {});
 */
Acl.prototype.delete = function(options, callback) {
  var path = '/' + encodeURIComponent(options.entity);
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
 * an entity is omitted, you will receive an array of all applicable access
 * controls.
 *
 * @param {object|function} options - Configuration object. If you want to
 *     receive a list of all access controls, pass the callback function as the
 *     only argument.
 * @param {string=} options.entity - Whose permissions will be fetched.
 * @param {int=} options.generation - **File Objects Only** Select a specific
 *     revision of this file (as opposed to the latest version, the default).
 * @param {function} callback - The callback function.
 *
 * @alias acl.get
 *
 * @example
 * myBucket.acl.get({
 *   entity: 'user-useremail@example.com'
 * }, function(err, aclObject, apiResponse) {});
 *
 * //-
 * // Get all access controls.
 * //-
 * myBucket.acl.get(function(err, aclObjects, apiResponse) {
 *   // aclObjects = [
 *   //   {
 *   //     entity: 'user-useremail@example.com',
 *   //     role: 'owner'
 *   //   }
 *   // ]
 * });
 *
 * //-
 * // For file ACL operations, you can also specify a `generation` property.
 * //-
 * myFile.acl.get({
 *   entity: 'user-useremail@example.com',
 *   generation: 1
 * } function(err, aclObject, apiResponse) {});
 */
Acl.prototype.get = function(options, callback) {
  var that = this;
  var path = '';
  var query = null;

  if (util.is(options, 'function')) {
    callback = options;
    options = null;
  } else {
    path = '/' + encodeURIComponent(options.entity);

    if (options.generation) {
      query = {
        generation: options.generation
      };
    }
  }

  this.makeReq_('GET', path, query, null, function(err, resp) {
    if (err) {
      callback(err, null, resp);
      return;
    }

    var results = resp;

    if (resp.items) {
      results = (resp.items || []).map(that.makeAclObject_);
    } else {
      results = that.makeAclObject_(results);
    }

    callback(null, results, resp);
  });
};

/**
 * Update access controls on a {module:storage/bucket} or {module:storage/file}.
 *
 * @param {object=} options - Configuration object.
 * @param {string} options.entity - Whose permissions will be updated.
 * @param {string} options.role - Permissions allowed for the defined entity.
 *     See {module:storage#acl}.
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
 *   entity: 'user-useremail@example.com',
 *   role: storage.acl.WRITER_ROLE
 * }, function(err, apiResponse) {});
 *
 * //-
 * // For file ACL operations, you can also specify a `generation` property.
 * //-
 * myFile.acl.update({
 *   entity: 'user-useremail@example.com',
 *   role: storage.acl.WRITER_ROLE,
 *   generation: 1
 * }, function(err, apiResponse) {});
 */
Acl.prototype.update = function(options, callback) {
  var that = this;
  var path = '/' + encodeURIComponent(options.entity);
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
      callback(err, null, resp);
      return;
    }

    callback(null, that.makeAclObject_(resp), resp);
  });
};

/**
 * Transform API responses to a consistent object format.
 *
 * @private
 */
Acl.prototype.makeAclObject_ = function(accessControlObject) {
  var obj = {
    entity: accessControlObject.entity,
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

/**
 * Attach functionality to a {module:storage/acl} instance. This will add an
 * object for each role group (owners, readers, and writers), with each object
 * containing methods to add or delete a type of entity.
 *
 * As an example, here are a few methods that are created.
 *
 *   myBucket.acl.readers.deleteGroup('groupId', function(err) {});
 *
 *   myBucket.acl.owners.addUser('email@example.com', function(err, acl) {});
 *
 *   myBucket.acl.writers.addDomain('example.com', function(err, acl) {});
 *
 * @private
 */
function AclRoleAccessorMethods() {
  AclRoleAccessorMethods.roles.forEach(this._assignAccessMethods.bind(this));
}

AclRoleAccessorMethods.accessMethods = [
  'add',
  'delete'
];

AclRoleAccessorMethods.entities = [
  // Special entity groups that do not require further specification.
  'allAuthenticatedUsers',
  'allUsers',

  // Entity groups that require specification, e.g. `user-email@example.com`.
  'domain-',
  'group-',
  'project-',
  'user-'
];

AclRoleAccessorMethods.roles = [
  'OWNER',
  'READER',
  'WRITER'
];

AclRoleAccessorMethods.prototype._assignAccessMethods = function(role) {
  var that = this;

  var accessMethods = AclRoleAccessorMethods.accessMethods;
  var entities = AclRoleAccessorMethods.entities;
  var roleGroup = role.toLowerCase() + 's';

  this[roleGroup] = entities.reduce(function(acc, entity) {
    var isPrefix = entity.charAt(entity.length - 1) === '-';

    accessMethods.forEach(function(accessMethod) {
      var method = accessMethod + entity[0].toUpperCase() + entity.substr(1);

      if (isPrefix) {
        method = method.replace('-', '');
      }

      // Wrap the parent accessor method (e.g. `add` or `delete`) to avoid the
      // more complex API of specifying an `entity` and `role`.
      acc[method] = function(entityId, callback) {
        var apiEntity;

        if (isPrefix) {
          apiEntity = entity + entityId;
        } else {
          // If the entity is not a prefix, it is a special entity group that
          // does not require further details. The accessor methods only accept
          // a callback.
          apiEntity = entity;
          callback = entityId;
        }

        that[accessMethod]({
          entity: apiEntity,
          role: role
        }, callback);
      };
    });

    return acc;
  }, {});
};

module.exports.AclRoleAccessorMethods = AclRoleAccessorMethods;
