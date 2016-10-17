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
 * @module dns/change
 */

'use strict';

var common = require('@google-cloud/common');
var util = require('util');

/**
 * @constructor
 * @alias module:dns/change
 *
 * @param {module:dns/zone} zone - The parent zone object.
 * @param {string} id - ID of the change.
 *
 * @example
 * var zone = dns.zone('zone-id');
 * var change = zone.change('change-id');
 */
function Change(zone, id) {
  var methods = {
    /**
     * Check if the change exists.
     *
     * @param {function} callback - The callback function.
     * @param {?error} callback.err - An error returned while making this
     *     request.
     * @param {boolean} callback.exists - Whether the change exists or not.
     *
     * @example
     * change.exists(function(err, exists) {});
     *
     * //-
     * // If the callback is omitted, we'll return a Promise.
     * //-
     * change.exists().then(function(data) {
     *   var exists = data[0];
     * });
     */
    exists: true,

    /**
     * Get a change if it exists.
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
     * change.get(function(err, change, apiResponse) {
     *   // `change.metadata` has been populated.
     * });
     *
     * //-
     * // If the callback is omitted, we'll return a Promise.
     * //-
     * change.get().then(function(data) {
     *   var change = data[0];
     *   var apiResponse = data[1];
     * });
     */
    get: true,

    /**
     * Get the metadata for the change in the zone.
     *
     * @resource [Changes: get API Documentation]{@link https://cloud.google.com/dns/api/v1/changes/get}
     *
     * @param {function} callback - The callback function.
     * @param {?error} callback.err - An API error.
     * @param {?object} callback.metadata - Metadata of the change from the API.
     * @param {object} callback.apiResponse - Raw API response.
     *
     * @example
     * change.getMetadata(function(err, metadata, apiResponse) {
     *   if (!err) {
     *     // metadata = {
     *     //   kind: 'dns#change',
     *     //   additions: [{...}],
     *     //   deletions: [{...}],
     *     //   startTime: '2015-07-21T14:40:06.056Z',
     *     //   id: '1',
     *     //   status: 'done'
     *     // }
     *   }
     * });
     *
     *
     * //-
     * // If the callback is omitted, we'll return a Promise.
     * //-
     * change.getMetadata().then(function(data) {
     *   var metadata = data[0];
     *   var apiResponse = data[1];
     * });
     */
    getMetadata: true
  };

  common.ServiceObject.call(this, {
    parent: zone,
    baseUrl: '/changes',
    id: id,
    methods: methods
  });
}

util.inherits(Change, common.ServiceObject);

/**
 * Create a change.
 *
 * @param {object} config - See {module:dns/zone#createChange}.
 *
 * @example
 * var config = {
 *   add: {
 *     // ...
 *   }
 * };
 *
 * change.create(config, function(err, change, apiResponse) {
 *   if (!err) {
 *     // The change was created successfully.
 *   }
 * });
 *
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * change.create(config).then(function(data) {
 *   var change = data[0];
 *   var apiResponse = data[1];
 * });
 */
Change.prototype.create = function(config, callback) {
  var self = this;

  this.parent.createChange(config, function(err, change, apiResponse) {
    if (err) {
      callback(err, null, apiResponse);
      return;
    }

    self.id = change.id;
    self.metadata = change.metadata;

    callback(null, self, apiResponse);
  });
};

/*! Developer Documentation
 *
 * All async methods (except for streams) will return a Promise in the event
 * that a callback is omitted.
 */
common.util.promisifyAll(Change);


module.exports = Change;
