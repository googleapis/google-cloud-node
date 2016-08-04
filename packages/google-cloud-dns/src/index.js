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
 * @module dns
 */

'use strict';

var arrify = require('arrify');
var common = require('@google-cloud/common');
var extend = require('extend');
var is = require('is');
var util = require('util');

/**
 * @type {module:dns/zone}
 * @private
 */
var Zone = require('./zone.js');

var PKG = require('../package.json');

/**
 * [Google Cloud DNS](https://cloud.google.com/dns/what-is-cloud-dns) is a high-
 * performance, resilient, global DNS service that provides a cost-effective way
 * to make your applications and services available to your users. This
 * programmable, authoritative DNS service can be used to easily publish and
 * manage DNS records using the same infrastructure relied upon by Google.
 *
 * @constructor
 * @alias module:dns
 *
 * @classdesc
 * The object returned from `gcloud.dns` gives you complete control over your
 * managed zones.
 *
 * To learn more about Google Cloud DNS, see
 * [What is Google Cloud DNS?](https://cloud.google.com/dns/what-is-cloud-dns)
 *
 * @param {object} options - [Configuration object](#/docs).
 *
 * @example
 * var gcloud = require('google-cloud')({
 *   keyFilename: '/path/to/keyfile.json',
 *   projectId: 'grape-spaceship-123'
 * });
 *
 * var dns = gcloud.dns();
 */
function DNS(options) {
  if (!(this instanceof DNS)) {
    options = common.util.normalizeArguments(this, options);
    return new DNS(options);
  }

  var config = {
    baseUrl: 'https://www.googleapis.com/dns/v1',
    scopes: [
      'https://www.googleapis.com/auth/ndev.clouddns.readwrite',
      'https://www.googleapis.com/auth/cloud-platform'
    ],
    userAgent: PKG.name + '/' + PKG.version
  };

  common.Service.call(this, config, options);
}

util.inherits(DNS, common.Service);

/**
 * Create a managed zone.
 *
 * @resource [ManagedZones: create API Documentation]{@link https://cloud.google.com/dns/api/v1/managedZones/create}
 *
 * @throws {error} If a zone name is not provided.
 * @throws {error} If a zone dnsName is not provided.
 *
 * @param {string} name - Unique name for the zone. E.g. "my-zone"
 * @param {object} config - Configuration object.
 * @param {string} config.dnsName - DNS name for the zone. E.g. "example.com."
 * @param {string=} config.description - Description text for the zone.
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An API error.
 * @param {?module:dns/zone} callback.zone - A new {module:dns/zone} object.
 * @param {object} callback.apiResponse - Raw API response.
 *
 * @example
 * dns.createZone('my-awesome-zone', {
 *   dnsName: 'example.com.', // note the period at the end of the domain.
 *   description: 'This zone is awesome!'
 * }, function(err, zone, apiResponse) {
 *   if (!err) {
 *     // The zone was created successfully.
 *   }
 * });
 */
DNS.prototype.createZone = function(name, config, callback) {
  var self = this;

  if (!name) {
    throw new Error('A zone name is required.');
  }

  if (!config || !config.dnsName) {
    throw new Error('A zone dnsName is required.');
  }

  config.name = name;

  // Required by the API.
  config.description = config.description || '';

  this.request({
    method: 'POST',
    uri: '/managedZones',
    json: config
  }, function(err, resp) {
    if (err) {
      callback(err, null, resp);
      return;
    }

    var zone = self.zone(resp.name);
    zone.metadata = resp;

    callback(null, zone, resp);
  });
};

/**
 * Gets a list of managed zones for the project.
 *
 * @resource [ManagedZones: list API Documentation]{@link https://cloud.google.com/dns/api/v1/managedZones/list}
 *
 * @param {object=} query - Query object.
 * @param {number} query.maxApiCalls - Maximum number of API calls to make.
 * @param {number} query.maxResults - Maximum number of results to return.
 * @param {string} query.pageToken - Page token.
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An API error.
 * @param {?module:dns/zone[]} callback.zones - An array of {module:dns/zone}
 *     objects.
 * @param {object} callback.apiResponse - Raw API response.
 *
 * @example
 * dns.getZones(function(err, zones, apiResponse) {});
 *
 * //-
 * // Get the zones from your project as a readable object stream.
 * //-
 * dns.getZones()
 *   .on('error', console.error)
 *   .on('data', function(zone) {
 *     // zone is a Zone object.
 *   })
 *   .on('end', function() {
 *     // All zones retrieved.
 *   });
 *
 * //-
 * // If you anticipate many results, you can end a stream early to prevent
 * // unnecessary processing and API requests.
 * //-
 * dns.getZones()
 *   .on('data', function(zone) {
 *     this.end();
 *   });
 */
DNS.prototype.getZones = function(query, callback) {
  var self = this;

  if (is.fn(query)) {
    callback = query;
    query = {};
  }

  this.request({
    uri: '/managedZones',
    qs: query
  }, function(err, resp) {
    if (err) {
      callback(err, null, null, resp);
      return;
    }

    var zones = arrify(resp.managedZones).map(function(zone) {
      var zoneInstance = self.zone(zone.name);
      zoneInstance.metadata = zone;
      return zoneInstance;
    });

    var nextQuery = null;

    if (resp.nextPageToken) {
      nextQuery = extend({}, query, {
        pageToken: resp.nextPageToken
      });
    }

    callback(null, zones, nextQuery, resp);
  });
};

/**
 * Create a zone object representing a managed zone.
 *
 * @throws {error} If a zone name is not provided.
 *
 * @param  {string} name - The unique name of the zone.
 * @return {module:dns/zone}
 *
 * @example
 * var zone = dns.zone('my-zone');
 */
DNS.prototype.zone = function(name) {
  if (!name) {
    throw new Error('A zone name is required.');
  }

  return new Zone(this, name);
};

/*! Developer Documentation
 *
 * These methods can be used with either a callback or as a readable object
 * stream. `streamRouter` is used to add this dual behavior.
 */
common.streamRouter.extend(DNS, 'getZones');

DNS.Zone = Zone;

module.exports = DNS;
