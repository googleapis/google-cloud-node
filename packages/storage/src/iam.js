/*!
 * Copyright 2017 Google Inc. All Rights Reserved.
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
 * @module storage/iam
 */

'use strict';

var arrify = require('arrify');
var common = require('@google-cloud/common');
var extend = require('extend');
var format = require('string-format-obj');
var is = require('is');

/*! Developer Documentation
 *
 * @param {module:storage/bucket} bucket - The parent instance.
 */
/**
 * Get and set IAM policies for your Cloud Storage bucket.
 *
 * @resource [Cloud Storage IAM Management](https://cloud.google.com/storage/docs/access-control/iam#short_title_iam_management)
 * @resource [Granting, Changing, and Revoking Access](https://cloud.google.com/iam/docs/granting-changing-revoking-access)
 * @resource [IAM Roles](https://cloud.google.com/iam/docs/understanding-roles)
 *
 * @constructor
 * @alias module:storage/iam
 *
 * @example
 * var bucket = gcs.bucket('my-bucket');
 * // bucket.iam
 */
function Iam(bucket) {
  this.request_ = bucket.request.bind(bucket);
  this.resourceId_ = 'buckets/' + bucket.id;
}

/**
 * Get the IAM policy.
 *
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request.
 * @param {object} callback.policy - The policy.
 * @param {object} callback.apiResponse - The full API response.
 *
 * @resource [Buckets: setIamPolicy API Documentation]{@link https://cloud.google.com/storage/docs/json_api/v1/buckets/getIamPolicy}
 *
 * @example
 * bucket.iam.getPolicy(function(err, policy, apiResponse) {});
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * bucket.iam.getPolicy().then(function(data) {
 *   var policy = data[0];
 *   var apiResponse = data[1];
 * });
 */
Iam.prototype.getPolicy = function(callback) {
  this.request_({
    uri: '/iam'
  }, callback);
};

/**
 * Set the IAM policy.
 *
 * @throws {Error} If no policy is provided.
 *
 * @param {object} policy - The policy.
 * @param {array} policy.bindings - Bindings associate members with roles.
 * @param {string=} policy.etag - Etags are used to perform a read-modify-write.
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request.
 * @param {object} callback.policy - The updated policy.
 * @param {object} callback.apiResponse - The full API response.
 *
 * @resource [Buckets: setIamPolicy API Documentation]{@link https://cloud.google.com/storage/docs/json_api/v1/buckets/setIamPolicy}
 * @resource [IAM Roles](https://cloud.google.com/iam/docs/understanding-roles)
 *
 * @example
 * var myPolicy = {
 *   bindings: [
 *     {
 *       role: 'roles/storage.admin',
 *       members: ['serviceAccount:myotherproject@appspot.gserviceaccount.com']
 *     }
 *   ]
 * };
 *
 * bucket.iam.setPolicy(myPolicy, function(err, policy, apiResponse) {});
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * bucket.iam.setPolicy(myPolicy).then(function(data) {
 *   var policy = data[0];
 *   var apiResponse = data[1];
 * });
 */
Iam.prototype.setPolicy = function(policy, callback) {
  if (!is.object(policy)) {
    throw new Error('A policy object is required.');
  }

  this.request_({
    method: 'PUT',
    uri: '/iam',
    json: extend({
      resourceId: this.resourceId_
    }, policy)
  }, callback);
};

/**
 * Test a set of permissions for a resource.
 *
 * @throws {Error} If permissions are not provided.
 *
 * @param {string|string[]} permissions - The permission(s) to test for.
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request.
 * @param {array} callback.permissions - A subset of permissions that the caller
 *     is allowed.
 * @param {object} callback.apiResponse - The full API response.
 *
 * @resource [Buckets: testIamPermissions API Documentation]{@link https://cloud.google.com/storage/docs/json_api/v1/buckets/testIamPermissions}
 *
 * @example
 * //-
 * // Test a single permission.
 * //-
 * var test = 'storage.buckets.delete';
 *
 * bucket.iam.testPermissions(test, function(err, permissions, apiResponse) {
 *   console.log(permissions);
 *   // {
 *   //   "storage.buckets.delete": true
 *   // }
 * });
 *
 * //-
 * // Test several permissions at once.
 * //-
 * var tests = [
 *   'storage.buckets.delete',
 *   'storage.buckets.get'
 * ];
 *
 * bucket.iam.testPermissions(tests, function(err, permissions) {
 *   console.log(permissions);
 *   // {
 *   //   "storage.buckets.delete": false,
 *   //   "storage.buckets.get": true
 *   // }
 * });
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * bucket.iam.testPermissions(test).then(function(data) {
 *   var permissions = data[0];
 *   var apiResponse = data[1];
 * });
 */
Iam.prototype.testPermissions = function(permissions, callback) {
  if (!is.array(permissions) && !is.string(permissions)) {
    throw new Error('Permissions are required.');
  }

  permissions = arrify(permissions);

  this.request_({
    uri: '/iam/testPermissions',
    qs: {
      permissions: permissions
    },
    useQuerystring: true
  }, function(err, resp) {
    if (err) {
      callback(err, null, resp);
      return;
    }

    var availablePermissions = arrify(resp.permissions);

    var permissionsHash = permissions.reduce(function(acc, permission) {
      acc[permission] = availablePermissions.indexOf(permission) > -1;
      return acc;
    }, {});

    callback(null, permissionsHash, resp);
  });
};

/*! Developer Documentation
 *
 * All async methods (except for streams) will return a Promise in the event
 * that a callback is omitted.
 */
common.util.promisifyAll(Iam);

module.exports = Iam;
