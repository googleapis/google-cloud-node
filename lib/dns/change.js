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

var nodeutil = require('util');

/**
 * @type {module:common/serviceObject}
 * @private
 */
var ServiceObject = require('../common/service-object.js');

/**
 * @constructor
 * @alias module:dns/change
 *
 * @param {module:dns/zone} zone - The parent zone object.
 * @param {string} id - ID of the change.
 *
 * @example
 * var gcloud = require('gcloud');
 *
 * var dns = gcloud.dns({
 *   keyFilename: '/path/to/keyfile.json',
 *   projectId: 'grape-spaceship-123'
 * });
 *
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
     */
    exists: true,

    /**
     * Get a change if it exists.
     *
     * @example
     * change.get(function(err, change, apiResponse) {
     *   // `change.metadata` has been populated.
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
     */
    getMetadata: true
  };

  ServiceObject.call(this, {
    parent: zone,
    baseUrl: '/changes',
    id: id,
    createMethod: zone.createChange.bind(zone),
    methods: methods
  });
}

nodeutil.inherits(Change, ServiceObject);

module.exports = Change;
