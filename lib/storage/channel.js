/*!
 * Copyright 2015 Google Inc. All Rights Reserved.
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
 * @module storage/channel
 */

'use strict';

var nodeutil = require('util');

/**
 * @type {module:common/service-object}
 * @private
 */
var ServiceObject = require('../common/service-object.js');

/**
 * @type {module:common/util}
 * @private
 */
var util = require('../common/util.js');

/*! Developer Documenation
 *
 * @param {module:storage} storage - The Storage instance.
 */
/**
 * Create a channel object to interact with a Google Cloud Storage channel.
 *
 * @resource [Object Change Notification]{@link https://cloud.google.com/storage/docs/object-change-notification}
 *
 * @constructor
 * @alias module:storage/bucket
 *
 * @param {string} id - The ID of the channel.
 * @param {string} resourceId - The resource ID of the channel.
 *
 * @example
 * var gcloud = require('gcloud');
 *
 * var gcs = gcloud.storage({
 *   keyFilename: '/path/to/keyfile.json',
 *   projectId: 'grape-spaceship-123'
 * });
 *
 * var channel = gcs.channel('id', 'resource-id');
 */
function Channel(storage, id, resourceId) {
  var config = {
    parent: storage,
    baseUrl: '/channels',

    // An ID shouldn't be included in the API requests.
    // RE: https://github.com/GoogleCloudPlatform/gcloud-node/issues/1145
    id: '',

    methods: {
      // Only need `request`.
    }
  };

  ServiceObject.call(this, config);

  this.metadata.id = id;
  this.metadata.resourceId = resourceId;
}

nodeutil.inherits(Channel, ServiceObject);

/**
 * Stop this channel.
 *
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request.
 * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * channel.stop(function(err, apiResponse) {
 *   if (!err) {
 *     // Channel stopped successfully.
 *   }
 * });
 */
Channel.prototype.stop = function(callback) {
  callback = callback || util.noop;

  this.request({
    method: 'POST',
    uri: '/stop',
    json: this.metadata
  }, function(err, apiResponse) {
    callback(err, apiResponse);
  });
};

module.exports = Channel;
