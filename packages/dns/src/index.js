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

/**
 * [Cloud DNS](https://cloud.google.com/dns/what-is-cloud-dns) is a high-
 * performance, resilient, global DNS service that provides a cost-effective way
 * to make your applications and services available to your users. This
 * programmable, authoritative DNS service can be used to easily publish and
 * manage DNS records using the same infrastructure relied upon by Google.
 *
 * The apiEndpoint from options will set the host. If not set, the
 * `GOOGLE_CLOUD_DNS_ENDPOINT` environment variable is honored,
 * otherwise the actual API endpoint will be used.
 *
 * @constructor
 * @alias module:dns
 *
 * @resource [What is Cloud DNS?]{@link https://cloud.google.com/dns/what-is-cloud-dns}
 *
 * @param {object} options - [Configuration object](#/docs).
 * @param {string=} options.apiEndpoint - Override the default API endpoint used
 * to reach DNS.
 */
function DNS(options) {
  if (!(this instanceof DNS)) {
    options = common.util.normalizeArguments(this, options);
    return new DNS(options);
  }

  var basePath = '/dns/v1';

  var baseInfo = common.util.determineBaseUrl(
      options,
      'GOOGLE_CLOUD_DNS_ENDPOINT',
      'https://www.googleapis.com');

  var config = {
    baseUrl: baseInfo.apiEndpoint + basePath,
    customEndpoint: baseInfo.customEndpoint,
    scopes: [
      'https://www.googleapis.com/auth/ndev.clouddns.readwrite',
      'https://www.googleapis.com/auth/cloud-platform'
    ],
    packageJson: require('../package.json')
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
 * var config = {
 *   dnsName: 'example.com.', // note the period at the end of the domain.
 *   description: 'This zone is awesome!'
 * };
 *
 * dns.createZone('my-awesome-zone', config, function(err, zone, apiResponse) {
 *   if (!err) {
 *     // The zone was created successfully.
 *   }
 * });
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * dns.createZone('my-awesome-zone', config).then(function(data) {
 *   var zone = data[0];
 *   var apiResponse = data[1];
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
 * @param {boolean} query.autoPaginate - Have pagination handled automatically.
 *     Default: true.
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
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * dns.getZones().then(function(data) {
 *   var zones = data[0];
 * });
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
 * Gets a list of {module:dns/zone} objects for the project as a readable object
 * stream.
 *
 * @param {object=} query - Configuration object. See
 *     {module:dns#getZones} for a complete list of options.
 * @return {stream}
 *
 * @example
 * dns.getZonesStream()
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
 * dns.getZonesStream()
 *   .on('data', function(zone) {
 *     this.end();
 *   });
 */
DNS.prototype.getZonesStream = common.paginator.streamify('getZones');

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
 * These methods can be auto-paginated.
 */
common.paginator.extend(DNS, 'getZones');

/*! Developer Documentation
 *
 * All async methods (except for streams) will return a Promise in the event
 * that a callback is omitted.
 */
common.util.promisifyAll(DNS, {
  exclude: ['zone']
});

DNS.Zone = Zone;

module.exports = DNS;
