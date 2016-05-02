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
 * @module iam
 */

'use strict';

var arrify = require('arrify');
var is = require('is');
var nodeutil = require('util');

/**
 * @type {module:common/grpcService}
 * @private
 */
var GrpcService = require('../common/grpc-service.js');

/**
 * @type {module:common/serviceObject}
 * @private
 */
var ServiceObject = require('../common/service-object.js');

/**
 * @type {module:common/util}
 * @private
 */
var util = require('../common/util.js');

/*! Developer Documentation
 *
 * @param {*=} scope - A Service object that supports IAM. We can use this to
 *     get the resource ID.
 */
/**
 * [IAM (Identity and Access Management)](https://cloud.google.com/iam/docs)
 * allows you to set permissions on invidual resources and offers a wider range
 * of roles: editor, owner, publisher, subscriber, and viewer. This gives you
 * greater flexibility and allows you to set more fine-grained access control.
 *
 * @constructor
 * @alias module:iam
 *
 * @param {string} id - The ID of the resource.
 * @param {object} options - [Configuration object](#/docs/?method=gcloud).
 *
 * @example
 * var gcloud = require('gcloud')({
 *   projectId: 'grape-spaceship-123',
 *   keyFilename: '/path/to/keyfile.json'
 * });
 *
 * var iam = gcloud.iam('resource-id');
 *
 * //-
 * // You can also access the IAM functionality of a service object you have
 * // already created.
 * //-
 * var pubsub = gcloud.pubsub();
 *
 * var topic = pubsub.topic('my-topic');
 * // topic.iam;
 *
 * var subscription = topic.subscription('my-subscription');
 * // subscription.iam;
 */
function IAM(resource, options) {
  var isServiceObject = resource instanceof ServiceObject;

  if (isServiceObject) {
    options = options || resource.parent.options;
  }

  if (!(this instanceof IAM)) {
    options = util.normalizeArguments(this, options);
    return new IAM(resource, options);
  }

  var baseUrl;
  var id = resource;

  if (isServiceObject) {
    var leadingProtocol = new RegExp('^https*://');
    var trailingSlashes = new RegExp('/*$');

    baseUrl = resource.parent.baseUrl
      .replace(leadingProtocol, '')
      .replace(trailingSlashes, '');

    id = resource.id;
  } else {
    // @todo figure out baseUrl
  }

  var config = {
    baseUrl: baseUrl,
    service: 'iam',
    apiVersion: 'v1',
    scopes: [
      'https://www.googleapis.com/auth/cloud-platform'
    ]
  };

  this.id = id;

  GrpcService.call(this, config, options);
}

nodeutil.inherits(IAM, GrpcService);

/**
 * Get the IAM policy.
 *
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request.
 * @param {object} callback.policy - The [Policy object](https://cloud.google.com/iam/reference/rest/v1/Policy).
 * @param {object} callback.apiResponse - The full API response.
 *
 * @resource [Policy]{@link https://cloud.google.com/iam/reference/rest/v1/Policy}
 *
 * @example
 * iam.getPolicy(function(err, policy, apiResponse) {});
 */
IAM.prototype.getPolicy = function(callback) {
  var protoOpts = {
    service: 'IAMPolicy',
    method: 'getIamPolicy'
  };

  var reqOpts = {
    resource: this.id
  };

  this.request(protoOpts, reqOpts, callback);
};

/**
 * Set the IAM policy.
 *
 * @throws {Error} If no policy is provided.
 *
 * @param {object} policy - The [Policy object](https://cloud.google.com/iam/reference/rest/v1/Policy).
 * @param {array=} policy.bindings - Bindings associate members with roles.
 * @param {object[]=} policy.rules - Rules to be applied to the policy.
 * @param {string=} policy.etag - Etags are used to perform a read-modify-write.
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request.
 * @param {object} callback.policy - The updated policy.
 * @param {object} callback.apiResponse - The full API response.
 *
 * @resource [Policy]{@link https://cloud.google.com/iam/reference/rest/v1/Policy}
 *
 * @example
 * var myPolicy = {
 *   bindings: [
 *     {
 *       role: 'roles/pubsub.subscriber',
 *       members: ['serviceAccount:myotherproject@appspot.gserviceaccount.com']
 *     }
 *   ]
 * };
 *
 * iam.setPolicy(myPolicy, function(err, policy, apiResponse) {});
 */
IAM.prototype.setPolicy = function(policy, callback) {
  if (!is.object(policy)) {
    throw new Error('A policy object is required.');
  }

  var protoOpts = {
    service: 'IAMPolicy',
    method: 'setIamPolicy'
  };

  var reqOpts = {
    resource: this.id,
    policy: policy
  };

  this.request(protoOpts, reqOpts, callback);
};

/**
 * Test a set of permissions for a resource.
 *
 * Permissions with wildcards such as `*` or `storage.*` are not allowed.
 *
 * @throws {Error} If permissions are not provided.
 *
 * @param {string|string[]} permissions - The permission(s) to test for.
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request.
 * @param {array} callback.permissions - A subset of permissions that the caller
 *     is allowed
 * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * //-
 * // Test a single permission.
 * //-
 * var test = 'pubsub.topics.update';
 *
 * iam.testPermissions(test, function(err, permissions, apiResponse) {
 *   console.log(permissions);
 *   // {
 *   //   "pubsub.topics.update": true
 *   // }
 * });
 *
 * //-
 * // Test several permissions at once.
 * //-
 * var tests = [
 *   'pubsub.subscriptions.consume',
 *   'pubsub.subscriptions.update'
 * ];
 *
 * iam.testPermissions(tests, function(err, permissions) {
 *   console.log(permissions);
 *   // {
 *   //   "pubsub.subscriptions.consume": true,
 *   //   "pubsub.subscriptions.update": false
 *   // }
 * });
 */
IAM.prototype.testPermissions = function(permissions, callback) {
  if (!is.array(permissions) && !is.string(permissions)) {
    throw new Error('Permissions are required.');
  }

  permissions = arrify(permissions);

  var protoOpts = {
    service: 'IAMPolicy',
    method: 'testIamPermissions'
  };

  var reqOpts = {
    resource: this.id,
    permissions: permissions
  };

  this.request(protoOpts, reqOpts, function(err, resp) {
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

module.exports = IAM;
