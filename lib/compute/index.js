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
 * @module compute
 */

'use strict';

var extend = require('extend');

/**
 * @type {module:compute/region}
 * @private
 */
var Region = require('./region.js');

/**
 * @type {module:compute/zone}
 * @private
 */
var Zone = require('./zone.js');

/**
 * @type {module:compute/firewall}
 * @private
 */
var Firewall = require('./firewall.js');

/**
 * @type {module:compute/snapshot}
 * @private
 */
var Snapshot = require('./snapshot.js');

/**
 * @type {module:common/util}
 * @private
 */
var util = require('../common/util.js');

/**
 * @type {module:common/streamrouter}
 * @private
 */
var streamRouter = require('../common/stream-router.js');

/**
 * Required scopes for Google Compute Engine API.
 * @const {array}
 * @private
 */
var SCOPES = ['https://www.googleapis.com/auth/compute'];

/**
 * @const {string}
 * @private
 */
var COMPUTE_BASE_URL = 'https://www.googleapis.com/compute/v1/projects/';

/**
 * Create a Compute object to Interact with the Google Compute Engine API.
 * Using this object, you can access your instances with
 * {module:compute/instance}, disks with {module:compute/disk} and firewall
 * rules with {module:compute/firewall}.
 *
 * Follow along with the examples to see how to do everything. With a Compute
 * object it is possible to search for existing instances, disks and firewall
 * as well as to create new ones. Instances can be stopped, reset and started
 * and their tags can be updated. Disks can be deleted and attached to running
 * instances. Firewall rules can be created and updated.
 *
 * @alias module:compute
 * @constructor
 *
 * @param {object} options - [Configuration object](#/docs/?method=gcloud).
 *
 * @example
 * var gcloud = require('gcloud')({
 *   keyFilename: '/path/to/keyfile.json',
 *   projectId: 'grape-spaceship-123'
 * });
 *
 * var compute = gcloud.compute();
 */
function Compute(options) {
  if (!(this instanceof Compute)) {
    return new Compute(options);
  }

  options = options || {};

  this.makeAuthorizedRequest_ = util.makeAuthorizedRequestFactory({
    credentials: options.credentials,
    keyFile: options.keyFilename,
    scopes: SCOPES,
    email: options.email
  });

  this.projectId = options.projectId;
}

/**
 * Get a reference to a Google Compute Engine region.
 *
 * @param {string} name - Name of the region.
 * @return {module:compute/region}
 *
 * @example
 * var gcloud = require('gcloud')({
 *   keyFilename: '/path/to/keyfile.json'
 * });
 *
 * var compute = gcloud.compute();
 *
 * var myRegion = compute.region('region-name');
 */
Compute.prototype.region = function(name) {
  return new Region(this, name);
};

/**
 * Get a reference to a Google Compute Engine zone.
 *
 * @param {string} name - Name of the zone.
 * @return {module:compute/zone}
 *
 * @example
 * var gcloud = require('gcloud')({
 *   keyFilename: '/path/to/keyfile.json'
 * });
 *
 * var compute = gcloud.compute();
 *
 * var myZone = compute.zone('zone-name');
 */
Compute.prototype.zone = function(name) {
  return new Zone(this, name);
};

/**
 * Get a reference to a Google Compute Engine firewall.
 *
 * @param {string} name - Name of the existing firewall.
 * @param {string=} networkName - Network name for the existing firewall.
 *     Default value is 'global/networks/default'.
 * @return {module:compute/disk}
 *
 * @example
 * var gcloud = require('gcloud')({
 *   keyFilename: '/path/to/keyfile.json'
 * });
 *
 * var compute = gcloud.compute();
 *
 * var firewallRule = compute.firewall('rule1');
 */
Compute.prototype.firewall = function(name, networkName) {
  var options = {};
  options.networkName = networkName;
  return new Firewall(this, name, options);
};

/**
 * Get a reference to a Google Compute Engine snapshot.
 *
 * @param {string} name - Name of the existing snapshot.
 * @return {module:compute/snapshot}
 *
 * @example
 * var gcloud = require('gcloud')({
 *   keyFilename: '/path/to/keyfile.json'
 * });
 *
 * var compute = gcloud.compute();
 *
 * var snapshot = compute.snapshot('snapshot-name');
 */
Compute.prototype.snapshot = function(name) {
  return new Snapshot(this, name);
};

/**
 * Create a firewall rule.
 *
 * @throws {Error} if a firewall name or firewall options are not provided.
 *     If allowed ports, source tags or source ranges are not provided.
 *
 * @param {module:compute} compute - The Google Compute Engine object this
 *     firewall belongs to.
 * @param {string} name - Name of the firewall.
 * @param {object} options - Firewall options.
 * @param {string=} options.description - Description of the firewall.
 * @param {string=} options.network - Network to which the firewall applies.
 *     Default value is 'global/networks/default'.
 * @param {object[]=} options.allowed - List of allowed protocols and ports.
 * @param {string[]=} options.sourceRanges - IP address blocks to which this
 *     rule applies (in CIDR format).
 * @param {string[]=} options.sourceRanges - IP address blocks to which this
 *     rule applies (in CIDR format).
 * @param {string[]=} options.sourceTags - List of instance tags to which
 *     this rule applies.
 * @param {string[]=} options.targetTags - List of instance tags indicating
 *     instances that may process connections according to this rule.
 * @param {function} callback - The callback function.
 *
 * @example
 * var callback = function(err, firewall, apiResponse) {
 *   // `firewall` is a Firewall object.
 * };
 *
 * var compute = gcloud.compute({
 *   projectId: 'grape-spaceship-123'
 * });
 *
 * var firewall = compute.createFirewall('tcp-3000',
 *   {
 *     description: 'yada yada',
 *     allowed: [{
 *       IPProtocol: 'tcp',
 *       ports: ['3000']
 *     }],
 *     sourceRanges: ['0.0.0.0/0'],
 *     targetTags: ['tcp-3000-tag']
 *   }, callback);
 */
Compute.prototype.createFirewall = function(name, options, callback) {
  if (!name) {
    throw new Error('A name is needed to use a Compute Engine Firewall.');
  } else if (!/^(?:[a-z](?:[-a-z0-9]{0,61}[a-z0-9])?)$/.test(name)) {
    throw new Error('Name must match [a-z]([-a-z0-9]{0,61}[a-z0-9])?');
  }
  if (!options || !util.is(options.allowed, 'array')) {
    throw new Error('Allowed protocols and ports must be provided.');
  }
  if (!util.is(options.sourceRanges, 'array') &&
    !util.is(options.sourceTags, 'array')) {
    throw new Error('Source ranges or source tags must be provided.');
  }

  var body = {};
  body.name = name;
  if (util.is(options.description, 'string')) {
    body.description = options.description;
  }
  if (util.is(options.network, 'string')) {
    body.network = options.network;
  } else {
    body.network = 'global/networks/default';
  }
  if (util.is(options.allowed, 'array')) {
    body.allowed = options.allowed;
  }
  if (util.is(options.sourceRanges, 'array')) {
    body.sourceRanges = options.sourceRanges;
  }
  if (util.is(options.sourceTags, 'array')) {
    body.sourceTags = options.sourceTags;
  }
  if (util.is(options.targetTags, 'array')) {
    body.targetTags = options.targetTags;
  }

  var self = this;
  this.makeReq_(
    'POST',
    '/global/firewalls',
    null,
    body, function(err, resp) {
      if (err) {
        callback(err);
        return;
      }
      var firewall = self.firewall(name);
      firewall.name = options;
      callback(null, firewall, resp);
    });
};

/**
 * Get a list of instances.
 *
 * @param {object} options - Instance search options.
 * @param {boolean=} options.autoPaginate - Have pagination handled
 *     automatically. Default: true.
 * @param {number=} options.maxResults - Maximum number of instances to return.
 * @param {string=} options.filter - Search filter. The filter must contain:
 *     `FIELD_NAME COMPARISON_STRING LITERAL_STRING`. `FIELD_NAME` is the name
 *     of the field to compare. `COMPARISON` is the comparison operator that can
 *     be either `eq` or `ne`. `LITERAL_STRING` is the string to filter to.
 *     For string fields `LITERAL_STRING` can be a regular expression.
 * @param {string=} pageToken - Page identifier used in paginated search.
 * @param {function} callback - The callback function.
 *
 * @example
 * var callback = function(err, instances) {
 *   // `instances` is an array of `Instance` objects.
 * };
 *
 * compute.getInstances(
 *   {
 *     filter: 'name eq instance-[0-9]'
 *   }, callback);
 *
 * //-
 * // To control how many API requests are made and page through the results
 * // manually, set `autoPaginate` to `false`.
 * //-
 * var callback = function(err, instances, nextQuery, apiResponse) {
 *   if (nextQuery) {
 *     // More results exist.
 *     compute.getInstances(nextQuery, callback);
 *   }
 * };
 *
 * compute.getInstances({
 *   autoPaginate: false
 * }, callback);
 *
 * //-
 * // Get the instances from your project as a readable object stream.
 * //-
 * compute.getInstances()
 *   .on('error', console.error)
 *   .on('data', function(instance) {
 *     // `instance` is an `Instance` object.
 *   })
 *   .on('end', function() {
 *     // All instances retrieved.
 *   });
 *
 * //-
 * // If you anticipate many results, you can end a stream early to prevent
 * // unnecessary processing and API requests.
 * //-
 * compute.getInstances()
 *   .on('data', function(instance) {
 *     this.end();
 *   });
 */
Compute.prototype.getInstances = function(options, callback) {
  if (util.is(options, 'function')) {
    callback = options;
    options = {};
  }

  options = options || {};

  var self = this;
  this.makeReq_(
    'GET',
    '/aggregated/instances',
    options,
    null, function(err, resp) {
      if (err) {
        callback(err);
        return;
      }

      var nextQuery = null;

      if (resp.nextPageToken) {
        nextQuery = extend({}, options, {
          pageToken: resp.nextPageToken
        });
      }

      var items = resp.items || {};
      var instances = [];
      var appendInstance = function(instanceObject) {
        var instance = zone.instance(instanceObject.name);
        instance.metadata = instanceObject;
        instances.push(instance);
      };
      for (var zoneName in items) {
        var zone = self.zone(zoneName.replace('zones/', ''));
        (items[zoneName].instances || []).forEach(appendInstance);
      }
      callback(null, instances, nextQuery, resp);
    });
};

/**
 * Get a list of disks.
 *
 * @param {object} options - Disk search options.
 * @param {boolean=} options.autoPaginate - Have pagination handled
 *     automatically. Default: true.
 * @param {number=} options.maxResults - Maximum number of disks to return.
 * @param {string=} options.filter - Search filter. The filter must contain:
 *     `FIELD_NAME COMPARISON_STRING LITERAL_STRING`. `FIELD_NAME` is the name
 *     of the field to compare. `COMPARISON` is the comparison operator that can
 *     be either `eq` or `ne`. `LITERAL_STRING` is the string to filter to.
 *     For string fields `LITERAL_STRING` can be a regular expression.
 * @param {string=} pageToken - Page identifier used in paginated search.
 * @param {function} callback - The callback function.
 *
 * @example
 * var callback = function(err, disks) {
 *   // `disks` is an array of `Disk` objects.
 * };
 *
 * compute.getDisks(
 *   {
 *     filter: 'name eq disk-[0-9]'
 *   }, callback);
 *
 * //-
 * // To control how many API requests are made and page through the results
 * // manually, set `autoPaginate` to `false`.
 * //-
 * var callback = function(err, disks, nextQuery, apiResponse) {
 *   if (nextQuery) {
 *     // More results exist.
 *     compute.getDisks(nextQuery, callback);
 *   }
 * };
 *
 * compute.getDisks({
 *   autoPaginate: false
 * }, callback);
 *
 * //-
 * // Get the disks from your project as a readable object stream.
 * //-
 * compute.getDisks()
 *   .on('error', console.error)
 *   .on('data', function(disk) {
 *     // `disk` is an `Disk` object.
 *   })
 *   .on('end', function() {
 *     // All disks retrieved.
 *   });
 *
 * //-
 * // If you anticipate many results, you can end a stream early to prevent
 * // unnecessary processing and API requests.
 * //-
 * compute.getDisks()
 *   .on('data', function(disk) {
 *     this.end();
 *   });
 */
Compute.prototype.getDisks = function(options, callback) {
  if (util.is(options, 'function')) {
    callback = options;
    options = {};
  }

  options = options || {};

  var self = this;
  this.makeReq_('GET', '/aggregated/disks', options, null, function(err, resp) {
    if (err) {
      callback(err);
      return;
    }

    var nextQuery = null;

    if (resp.nextPageToken) {
      nextQuery = extend({}, options, {
        pageToken: resp.nextPageToken
      });
    }

    var items = resp.items || {};
    var disks = [];
    var appendDisk = function(diskObject) {
      var disk = zone.disk(diskObject.name);
      disk.metadata = diskObject;
      disks.push(disk);
    };
    for (var zoneName in items) {
      var zone = self.zone(zoneName.replace('zones/', ''));
      (items[zoneName].disks || []).forEach(appendDisk);
    }
    callback(null, disks, nextQuery, resp);
  });
};

/**
 * Get a list of addresses.
 *
 * @param {object} options - Address search options.
 * @param {boolean=} options.autoPaginate - Have pagination handled
 *     automatically. Default: true.
 * @param {number=} options.maxResults - Maximum number of addresses to return.
 * @param {string=} options.filter - Search filter. The filter must contain:
 *     `FIELD_NAME COMPARISON_STRING LITERAL_STRING`. `FIELD_NAME` is the name
 *     of the field to compare. `COMPARISON` is the comparison operator that can
 *     be either `eq` or `ne`. `LITERAL_STRING` is the string to filter to.
 *     For string fields `LITERAL_STRING` can be a regular expression.
 * @param {string=} pageToken - Page identifier used in paginated search.
 * @param {function} callback - The callback function.
 *
 * @example
 * var callback = function(err, addresses) {
 *   // `addresses` is an array of `Address` objects.
 * };
 *
 * compute.getAddresses(
 *   {
 *     filter: 'name eq address-[0-9]'
 *   }, callback);
 *
 * //-
 * // To control how many API requests are made and page through the results
 * // manually, set `autoPaginate` to `false`.
 * //-
 * var callback = function(err, addresses, nextQuery, apiResponse) {
 *   if (nextQuery) {
 *     // More results exist.
 *     compute.getAddresses(nextQuery, callback);
 *   }
 * };
 *
 * compute.getAddresses({
 *   autoPaginate: false
 * }, callback);
 *
 * //-
 * // Get the addresses from your project as a readable object stream.
 * //-
 * compute.getAddresses()
 *   .on('error', console.error)
 *   .on('data', function(address) {
 *     // `address` is an `Address` object.
 *   })
 *   .on('end', function() {
 *     // All addresses retrieved.
 *   });
 *
 * //-
 * // If you anticipate many results, you can end a stream early to prevent
 * // unnecessary processing and API requests.
 * //-
 * compute.getAddresses()
 *   .on('data', function(address) {
 *     this.end();
 *   });
 */
Compute.prototype.getAddresses = function(options, callback) {
  if (util.is(options, 'function')) {
    callback = options;
    options = {};
  }

  options = options || {};

  var self = this;
  this.makeReq_(
    'GET',
    '/aggregated/addresses',
    options,
    null, function(err, resp) {
      if (err) {
        callback(err);
        return;
      }

      var nextQuery = null;

      if (resp.nextPageToken) {
        nextQuery = extend({}, options, {
          pageToken: resp.nextPageToken
        });
      }

      var items = resp.items || {};
      var addresses = [];
      var appendAddress = function(addressObject) {
        var address = region.address(addressObject.name);
        address.metadata = addressObject;
        addresses.push(address);
      };
      for (var regionName in items) {
        var region = self.region(regionName.replace('regions/', ''));
        (items[regionName].addresses || []).forEach(appendAddress);
      }
      callback(null, addresses, nextQuery, resp);
    });
};

/**
 * Get a list of snapshots.
 *
 * @param {object} options - Snapshot search options.
 * @param {boolean=} options.autoPaginate - Have pagination handled
 *     automatically. Default: true.
 * @param {number=} options.maxResults - Maximum number of snapshots to return.
 * @param {string=} options.filter - Search filter. The filter must contain:
 *     `FIELD_NAME COMPARISON_STRING LITERAL_STRING`. `FIELD_NAME` is the name
 *     of the field to compare. `COMPARISON` is the comparison operator that can
 *     be either `eq` or `ne`. `LITERAL_STRING` is the string to filter to.
 *     For string fields `LITERAL_STRING` can be a regular expression.
 * @param {string=} pageToken - Page identifier used in paginated search.
 * @param {function} callback - The callback function.
 *
 * @example
 * var callback = function(err, snapshots) {
 *   // `snapshots` is an array of `Snapshot` objects.
 * };
 *
 * compute.getSnapshots(
 *   {
 *     filter: 'name eq snapshot-[0-9]'
 *   }, callback);
 *
 * //-
 * // To control how many API requests are made and page through the results
 * // manually, set `autoPaginate` to `false`.
 * //-
 * var callback = function(err, snapshots, nextQuery, apiResponse) {
 *   if (nextQuery) {
 *     // More results exist.
 *     compute.getSnapshots(nextQuery, callback);
 *   }
 * };
 *
 * compute.getSnapshots({
 *   autoPaginate: false
 * }, callback);
 *
 * //-
 * // Get the snapshots from your project as a readable object stream.
 * //-
 * compute.getSnapshots()
 *   .on('error', console.error)
 *   .on('data', function(snapshot) {
 *     // `snapshot` is an `Snapshot` object.
 *   })
 *   .on('end', function() {
 *     // All snapshots retrieved.
 *   });
 *
 * //-
 * // If you anticipate many results, you can end a stream early to prevent
 * // unnecessary processing and API requests.
 * //-
 * compute.getSnapshots()
 *   .on('data', function(snapshot) {
 *     this.end();
 *   });
 */
Compute.prototype.getSnapshots = function(options, callback) {
  if (util.is(options, 'function')) {
    callback = options;
    options = {};
  }

  options = options || {};

  var self = this;
  this.makeReq_('GET', '/global/snapshots', options, null, function(err, resp) {
    if (err) {
      callback(err);
      return;
    }

    var nextQuery = null;

    if (resp.nextPageToken) {
      nextQuery = extend({}, options, {
        pageToken: resp.nextPageToken
      });
    }

    var snapshots = (resp.items || []).map(function(snapshotObject) {
      var snapshot = self.snapshot(snapshotObject.name);
      snapshot.metadata = snapshotObject;
      return snapshot;
    });
    callback(null, snapshots, nextQuery, resp);
  });
};

/**
 * Get a list of firewall rules.
 *
 * @param {object} options - Firewall search options.
 * @param {boolean=} options.autoPaginate - Have pagination handled
 *     automatically. Default: true.
 * @param {number=} options.maxResults - Maximum number of firewalls to return.
 * @param {string=} options.filter - Search filter. The filter must contain:
 *     `FIELD_NAME COMPARISON_STRING LITERAL_STRING`. `FIELD_NAME` is the name
 *     of the field to compare. `COMPARISON` is the comparison operator that can
 *     be either `eq` or `ne`. `LITERAL_STRING` is the string to filter to.
 *     For string fields `LITERAL_STRING` can be a regular expression.
 * @param {string=} pageToken - Page identifier used in paginated search.
 * @param {function} callback - The callback function.
 *
 * @example
 * var callback = function(err, firewalls) {
 *   // `firewalls` is an array of `Firewall` objects.
 * };
 *
 * compute.getFirewalls(
 *   {
 *     zone: 'europe-west1-b',
 *     filter: 'name eq firewall-[0-9]'
 *   }, callback);
 *
 * //-
 * // To control how many API requests are made and page through the results
 * // manually, set `autoPaginate` to `false`.
 * //-
 * var callback = function(err, firewalls, nextQuery, apiResponse) {
 *   if (nextQuery) {
 *     // More results exist.
 *     compute.getFirewalls(nextQuery, callback);
 *   }
 * };
 *
 * compute.getFirewalls({
 *   autoPaginate: false
 * }, callback);
 *
 * //-
 * // Get the snapshots from your project as a readable object stream.
 * //-
 * compute.getSnapshots()
 *   .on('error', console.error)
 *   .on('data', function(firewall) {
 *     // `firewall` is an `Firewall` object.
 *   })
 *   .on('end', function() {
 *     // All firewalls retrieved.
 *   });
 *
 * //-
 * // If you anticipate many results, you can end a stream early to prevent
 * // unnecessary processing and API requests.
 * //-
 * compute.getFirewalls()
 *   .on('data', function(firewall) {
 *     this.end();
 *   });
 */
Compute.prototype.getFirewalls = function(options, callback) {
  if (util.is(options, 'function')) {
    callback = options;
    options = {};
  }

  options = options || {};

  var self = this;
  this.makeReq_('GET', '/global/firewalls', options, null, function(err, resp) {
    if (err) {
      callback(err);
      return;
    }

    var nextQuery = null;

    if (resp.nextPageToken) {
      nextQuery = extend({}, options, {
        pageToken: resp.nextPageToken
      });
    }

    var firewalls = (resp.items || []).map(function(firewallObject) {
      var firewall = self.firewall(firewallObject.name);
      firewall.metadata = firewallObject;
      return firewall;
    });
    callback(null, firewalls, nextQuery, resp);
  });
};

/**
 * Make a new request object from the provided arguments and wrap the callback
 * to intercept non-successful responses.
 *
 * @private
 *
 * @param {string} method - Action.
 * @param {string} path - Request path.
 * @param {*} query - Request query object.
 * @param {*} body - Request body contents.
 * @param {function} callback - The callback function.
 */
Compute.prototype.makeReq_ = function(method, path, query, body, callback) {
  var reqOpts = {
    method: method,
    qs: query,
    uri: COMPUTE_BASE_URL + this.projectId + path
  };

  if (body) {
    reqOpts.json = body;
  }

  this.makeAuthorizedRequest_(reqOpts, callback);
};

/*! Developer Documentation
 *
 * These methods can be used with either a callback or as a readable object
 * stream. `streamRouter` is used to add this dual behavior.
 */
streamRouter.extend(Compute, [
  'getInstances',
  'getDisks',
  'getAddresses',
  'getSnapshots',
  'getFirewalls'
]);

module.exports = Compute;

