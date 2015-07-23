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
 * @param {module:compute} compute - The Google Compute Engine instance this
 *     this firewall belongs to.
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
 * @throws {Error} if a malformed filter is provided.
 *
 * @param {object} options - Instance search options.
 * @param {number=} options.maxResults - Maximum number of instances to return.
 * @param {object=} options.filter - Search filter.
 * @param {string} options.filter.fieldName - Instance field to consider in this
 *     filter.
 * @param {string} options.filter.operatorString - Filter operator, can be
 *     either 'eq' or 'ne'.
 * @param {string} options.filter.literalString - String to compare the instance
 *     field to. Can be a regular expression.
 * @param {string=} pageToken - Page identifier used in paginated search.
 * @param {function} callback - The callback function.
 *
 * @example
 * var callback = function(err, instances) {
 *   // `instances` is an array of `Instance` objects.
 * };
 *
 * var compute = gcloud.compute({
 *   projectId: 'grape-spaceship-123'
 * });
 *
 * compute.getInstances(
 *   {
 *     filter: {
 *       fieldName : 'name',
 *       operatorString : 'eq',
 *       literalString : 'instance-[0-9]'
 *     }],
 *   }, callback);
 */
Compute.prototype.getInstances = function(options, callback) {
  if (util.is(options, 'function')) {
    callback = options;
    options = {};
  }

  var query = {};

  if (util.is(options.maxResults, 'number')) {
    query.maxResults = options.maxResults;
  }
  if (options.filter) {
    if (!util.is(options.filter.fieldName, 'string') ||
        !util.is(options.filter.operatorString, 'string') ||
        !util.is(options.filter.literalString, 'string')) {
      throw new Error(
        'A filter must have name, comparisonString and literal fields.');
    }
    if (options.filter.operatorString !== 'eq' &&
      options.filter.operatorString !== 'ne') {
      throw new Error('Filter operator must be either eq or ne');
    }
    query.filter =
      options.filter.fieldName + ' ' +
      options.filter.operatorString + ' \'' +
      options.filter.literalString + '\'';
  }
  if (util.is(options.pageToken, 'string')) {
    query.pageToken = options.pageToken;
  }

  var self = this;
  this.makeReq_(
    'GET',
    '/aggregated/instances',
    query,
    null, function(err, resp) {
      if (err) {
        callback(err);
        return;
      }
      if (resp.items) {
        var instances = [];
        for (var zoneName in resp.items) {
          var zone = self.zone(zoneName.replace('zones/', ''));
          var zoneInstances = resp.items[zoneName].instances;
          if (zoneInstances) {
            for (var i = 0; i < zoneInstances.length; i++) {
              var metadata = zoneInstances[i];
              var instance = zone.instance(metadata.name);
              instance.metadata = metadata;
              instances.push(instance);
            }
          }
        }
        callback(null, instances);
      } else {
        callback(null, []);
      }
    });
};

/**
 * Get a list of disks.
 *
 * @throws {Error} if a malformed filter is provided.
 *
 * @param {object} options - Disk search options.
 * @param {number=} options.maxResults - Maximum number of disks to return.
 * @param {object=} options.filter - Search filter.
 * @param {string} options.filter.fieldName - Disk field to consider in this
 *     filter.
 * @param {string} options.filter.operatorString - Filter operator, can be
 *     either 'eq' or 'ne'.
 * @param {string} options.filter.literalString - String to compare the disk
 *     field to. Can be a regular expression.
 * @param {string=} pageToken - Page identifier used in paginated search.
 * @param {function} callback - The callback function.
 *
 * @example
 * var callback = function(err, disks) {
 *   // `disks` is an array of `Disk` objects.
 * };
 *
 * var compute = gcloud.compute({
 *   projectId: 'grape-spaceship-123'
 * });
 *
 * compute.getDisks(
 *   {
 *     filter: {
 *       fieldName : 'name',
 *       operatorString : 'eq',
 *       literalString : 'disk-[0-9]'
 *     }],
 *   }, callback);
 */
Compute.prototype.getDisks = function(options, callback) {
  if (util.is(options, 'function')) {
    callback = options;
    options = {};
  }

  var query = {};

  if (util.is(options.maxResults, 'number')) {
    query.maxResults = options.maxResults;
  }
  if (options.filter) {
    if (!util.is(options.filter.fieldName, 'string') ||
        !util.is(options.filter.operatorString, 'string') ||
        !util.is(options.filter.literalString, 'string')) {
      throw new Error(
        'A filter must have name, comparisonString and literal fields.');
    }
    if (options.filter.operatorString !== 'eq' &&
      options.filter.operatorString !== 'ne') {
      throw new Error('Filter operator must be either eq or ne');
    }
    query.filter =
      options.filter.fieldName + ' ' +
      options.filter.operatorString + ' \'' +
      options.filter.literalString + '\'';
  }
  if (util.is(options.pageToken, 'string')) {
    query.pageToken = options.pageToken;
  }

  var self = this;
  this.makeReq_(
    'GET',
    '/aggregated/disks',
    query,
    null, function(err, resp) {
      if (err) {
        callback(err);
        return;
      }
      if (resp.items) {
        var disks = [];
        for (var zoneName in resp.items) {
          var zone = self.zone(zoneName.replace('zones/', ''));
          var zoneDisks = resp.items[zoneName].disks;
          if (zoneDisks) {
            for (var i = 0; i < zoneDisks.length; i++) {
              var metadata = zoneDisks[i];
              var disk = zone.disk(metadata.name);
              disk.metadata = metadata;
              disks.push(disk);
            }
          }
        }
      } else {
        callback(null, []);
      }
    });
};

/**
 * Get a list of addresses.
 *
 * @throws {Error} if a malformed filter is provided.
 *
 * @param {object} options - Address search options.
 * @param {number=} options.maxResults - Maximum number of addresses to return.
 * @param {object=} options.filter - Search filter.
 * @param {string} options.filter.fieldName - Address field to consider in this
 *     filter.
 * @param {string} options.filter.operatorString - Filter operator, can be
 *     either 'eq' or 'ne'.
 * @param {string} options.filter.literalString - String to compare the address
 *     field to. Can be a regular expression.
 * @param {string=} pageToken - Page identifier used in paginated search.
 * @param {function} callback - The callback function.
 *
 * @example
 * var callback = function(err, addresses) {
 *   // `addresses` is an array of `Address` objects.
 * };
 *
 * var compute = gcloud.compute({
 *   projectId: 'grape-spaceship-123'
 * });
 *
 * compute.getAddresses(
 *   {
 *     filter: {
 *       fieldName : 'name',
 *       operatorString : 'eq',
 *       literalString : 'address-[0-9]'
 *     }],
 *   }, callback);
 */
Compute.prototype.getAddresses = function(options, callback) {
  if (!callback) {
    callback = options;
  }

  var query = {};

  if (options) {
    if (util.is(options.maxResults, 'number')) {
      query.maxResults = options.maxResults;
    }
    if (options.filter) {
      if (!util.is(options.filter.fieldName, 'string') ||
          !util.is(options.filter.operatorString, 'string') ||
          !util.is(options.filter.literalString, 'string')) {
        throw new Error(
          'A filter must have name, comparisonString and literal fields.');
      }
      if (options.filter.operatorString !== 'eq' &&
        options.filter.operatorString !== 'ne') {
        throw new Error('Filter operator must be either eq or ne');
      }
      query.filter =
        options.filter.fieldName + ' ' +
        options.filter.operatorString + ' \'' +
        options.filter.literalString + '\'';
    }
    if (util.is(options.pageToken, 'string')) {
      query.pageToken = options.pageToken;
    }
  }

  var self = this;
  this.makeReq_(
    'GET',
    '/aggregated/addresses',
    query,
    null, function(err, resp) {
      if (err) {
        callback(err);
        return;
      }
      if (resp.items) {
        var addresses = [];
        for (var regionName in resp.items) {
          var region = self.region(regionName);
          var regionAddresses = resp.items[regionName].addresses;
          if (regionAddresses) {
            for (var i = 0; i < regionAddresses.length; i++) {
              var metadata = regionAddresses[i];
              var address = region.address(metadata.name);
              address.metadata = metadata;
              addresses.push(address);
            }
          }
        }
        callback(null, addresses);
      } else {
        callback(null, []);
      }
    });
};

/**
 * Get a list of snapshots.
 *
 * @throws {Error} if a malformed filter is provided.
 *
 * @param {object} options - Disk search options.
 * @param {number=} options.maxResults - Maximum number of snapshots to return.
 * @param {object=} options.filter - Search filter.
 * @param {string} options.filter.fieldName - Snapshot field to consider in this
 *     filter.
 * @param {string} options.filter.operatorString - Filter operator, can be
 *     either 'eq' or 'ne'.
 * @param {string} options.filter.literalString - String to compare the snapshot
 *     field to. Can be a regular expression.
 * @param {string=} pageToken - Page identifier used in paginated search.
 * @param {function} callback - The callback function.
 *
 * @example
 * var callback = function(err, snapshots) {
 *   // `disks` is an array of `Snapshot` objects.
 * };
 *
 * var compute = gcloud.compute({
 *   projectId: 'grape-spaceship-123'
 * });
 *
 * compute.getSnapshots(
 *   {
 *     filter: {
 *       fieldName : 'name',
 *       operatorString : 'eq',
 *       literalString : 'snapshot-[0-9]'
 *     }],
 *   }, callback);
 */
Compute.prototype.getSnapshots = function(options, callback) {
  if (util.is(options, 'function')) {
    callback = options;
    options = {};
  }

  var query = {};

  if (util.is(options.maxResults, 'number')) {
    query.maxResults = options.maxResults;
  }
  if (options.filter) {
    if (!util.is(options.filter.fieldName, 'string') ||
        !util.is(options.filter.operatorString, 'string') ||
        !util.is(options.filter.literalString, 'string')) {
      throw new Error(
        'A filter must have name, comparisonString and literal fields.');
    }
    if (options.filter.operatorString !== 'eq' &&
      options.filter.operatorString !== 'ne') {
      throw new Error('Filter operator must be either eq or ne');
    }
    query.filter =
      options.filter.fieldName + ' ' +
      options.filter.operatorString + ' \'' +
      options.filter.literalString + '\'';
  }
  if (util.is(options.pageToken, 'string')) {
    query.pageToken = options.pageToken;
  }

  var self = this;
  this.makeReq_('GET',
    '/global/snapshots',
    query,
    null, function(err, resp) {
      if (err) {
        callback(err);
        return;
      }
      if (resp.items) {
        var snapshots = [];
        for (var i = 0; i < resp.items.length; i++) {
          var metadata = resp.items[i];
          var snapshot = self.snapshot(metadata.name);
          snapshot.metadata = metadata;
          snapshots.push(snapshot);
        }
        callback(null, snapshots);
      } else {
        callback(null, []);
      }
    });
};


/**
 * Get a list of firewall rules.
 *
 * @throws {Error} if a malformed filter is provided.
 *
 * @param {object} options - Firewall search options.
 * @param {number=} options.maxResults - Maximum number of firewalls to return.
 * @param {object=} options.filter - Search filter.
 * @param {string} options.filter.fieldName - Firewall field to consider in this
 *     filter.
 * @param {string} options.filter.operatorString - Filter operator, can be
 *     either 'eq' or 'ne'.
 * @param {string} options.filter.literalString - String to compare the firewall
 *     field to. Can be a regular expression.
 * @param {string=} pageToken - Page identifier used in paginated search.
 * @param {function} callback - The callback function.
 *
 * @example
 * var callback = function(err, firewalls) {
 *   // `firewalls` is an array of `Firewall` objects.
 * };
 *
 * var compute = gcloud.compute({
 *   projectId: 'grape-spaceship-123'
 * });
 *
 * compute.getFirewalls(
 *   {
 *     zone: 'europe-west1-b',
 *     filter: {
 *       fieldName : 'name',
 *       operatorString : 'eq',
 *       literalString : 'firewall-[0-9]'
 *     }],
 *   }, callback);
 */
Compute.prototype.getFirewalls = function(options, callback) {
  if (!callback) {
    callback = options;
  }

  var query = {};

  if (util.is(options.maxResults, 'number')) {
    query.maxResults = options.maxResults;
  }
  if (options.filter) {
    if (!util.is(options.filter.fieldName, 'string') ||
        !util.is(options.filter.operatorString, 'string') ||
        !util.is(options.filter.literalString, 'string')) {
      throw new Error(
        'A filter must have name, comparisonString and literal fields.');
    }
    if (options.filter.operatorString !== 'eq' &&
      options.filter.operatorString !== 'ne') {
      throw new Error('Filter operator must be either eq or ne');
    }
    query.filter =
      options.filter.fieldName + ' ' +
      options.filter.operatorString + ' \'' +
      options.filter.literalString + '\'';
  }
  if (util.is(options.pageToken, 'string')) {
    query.pageToken = options.pageToken;
  }

  var self = this;
  this.makeReq_(
    'GET',
    '/global/firewalls',
    query,
    null, function(err, resp) {
      if (err) {
        callback(err);
        return;
      }
      if (resp.items) {
        var firewalls = [];
        for (var i = 0; i < resp.items.length; i++) {
          var firewall = new Firewall(
            self,
            resp.items[i].name,
            {
              description: resp.items[i].description,
              network: resp.items[i].network,
              allowed: resp.items[i].allowed,
              sourceRanges: resp.items[i].sourceRanges,
              sourceTags: resp.items[i].sourceTags,
              targetTags: resp.items[i].targetTags
            });
          firewalls.push(firewall);
        }
        callback(null, firewalls);
      } else {
        callback(null, []);
      }
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

module.exports = Compute;

