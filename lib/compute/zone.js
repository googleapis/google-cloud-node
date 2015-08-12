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
 * @module compute/zone
 */

'use strict';

var extend = require('extend');

/**
 * @type {module:compute/instance}
 * @private
 */
var Instance = require('./instance.js');

/**
 * @type {module:compute/disk}
 * @private
 */
var Disk = require('./disk.js');

/**
 * @type {module:compute/operation}
 * @private
 */
var Operation = require('./operation.js');

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
 * Create a Zone object to interact with a Google Compute Engine zone.
 *
 * @constructor
 * @alias module:compute/zone
 *
 * @throws {Error} if a zone name is not provided.
 *
 * @param {module:compute} compute - The Google Compute Engine object this
 *     zone belongs to.
 * @param {string} name - Name of the zone.
 *
 * @example
 * var gcloud = require('gcloud');
 *
 * var compute = gcloud.compute({
 *   projectId: 'grape-spaceship-123'
 * });
 *
 * var myZone = compute.zone('zone-name');
 */
function Zone(compute, name) {
  this.name = name;
  this.compute = compute;

  if (!this.name) {
    throw new Error('A name is needed to use a Compute Engine Zone.');
  }
}

/**
 * Get a reference to a Google Compute Engine instance in this zone.
 *
 * @param {string} name - Name of the existing instance.
 * @return {module:compute/instance}
 *
 * @example
 * var gcloud = require('gcloud')({
 *   keyFilename: '/path/to/keyfile.json'
 * });
 *
 * var compute = gcloud.compute();
 *
 * var myZone = compute.zone('zone-name');
 *
 * var instance = myZone.instance('instance1');
 */
Zone.prototype.instance = function(name) {
  return new Instance(this, name);
};

/**
 * Get a reference to a Google Compute Engine disk in this zone.
 *
 * @param {string} name - Name of the existing disk.
 * @return {module:compute/disk}
 *
 * @example
 * var gcloud = require('gcloud')({
 *   keyFilename: '/path/to/keyfile.json'
 * });
 *
 * var compute = gcloud.compute();
 *
 * var myZone = compute.zone('zone-name');
 *
 * var disk = myZone.disk('disk1');
 */
Zone.prototype.disk = function(name) {
  return new Disk(this, name);
};

/**
 * Get a reference to a Google Compute Engine zone operation.
 *
 * @param {string} name - Name of the existing operation.
 * @return {module:compute/operation}
 *
 * @example
 * var gcloud = require('gcloud')({
 *   keyFilename: '/path/to/keyfile.json'
 * });
 *
 * var compute = gcloud.compute();
 *
 * var myZone = compute.zone('zone-name');
 *
 * var operation = myZone.operation('operation-name');
 */
Zone.prototype.operation = function(name) {
  return new Operation(this, name);
};

/**
 * Create an instance in the zone. For a detailed description of method's
 * options see [API reference](https://goo.gl/oWcGvQ).
 *
 * @throws {Error} if an instance name or options are not provided.
 *
 * @param {string} name - Name of the instance.
 * @param {object} options - Options for instance creation.
 * @param {string} options.machineType - Type of the instance.
 * @param {object[]} options.disks - Disks to attach to the instance.
 * @param {boolean} options.disks[].createNew - True if the disk has to be
 *     created. Default value is false.
 * @param {string} options.disks[].source - Source for the disk to be created,
 *     either an image or a snapshot.
 * @param {string=} options.disks[].diskType - Type of the disk.
 * @param {number=} options.disks[].sizeGb - Size of the disk in GB.
 * @param {boolean=} options.disks[].boot - True of the disk is a boot disk.
 * @param {string=} options.disks[].mode - Attach mode, either `READ_ONLY` or
 *     `READ_WRITE`. Default value is `READ_WRITE`.
 * @param {number=} options.disks[].index - Zero based index assigned from the
 *     instance to the disk.
 * @param {string=} options.disks[].deviceName - Device name assigned from the
 *     instance to the disk.
 * @param {boolean=} options.disks[].autoDelete - If true the disk is deleted
 *     when the instance is deleted.
 * @param {object[]} options.networkInterfaces - Network interfaces for the
 *      instance.
 * @param {string} options.networkInterfaces[].network - Full/partial URL of a
 *     network interface for this instance.
 * @param {function} callback - The callback function.
 *
 * @example
 * var callback = function(err, instance, operation) {
 *   // `instance` is an Instance object.
 *   // `operation` is an Operation object and can be used to check the status
 *   // of instance creation.
 * };
 *
 * var compute = gcloud.compute({
 *   projectId: 'grape-spaceship-123'
 * });
 *
 * var myZone = compute.zone('zone-name');
 *
 * myZone.createInstance(
 *   'instance-1',
 *   {
 *     machineType: 'zones/europe-west1-b/machineTypes/n1-standard-1',
 *     disks: [{
 *       createNew: true,
 *       diskName: 'test-create-disk',
 *       source:
 *         'projects/debian-cloud/global/images/debian-7-wheezy-v20150325',
 *       diskSizeGb: 10,
 *       boot: true,
 *       autoDelete: true
 *     }],
 *     networkInterfaces: [{
 *       network: 'global/networks/default'
 *     }]
 *   }, callback);
 */
Zone.prototype.createInstance = function(name, options, callback) {
  if (!name) {
    throw new Error('A name is required to create an instance.');
  } else if (!/^(?:[a-z](?:[-a-z0-9]{0,61}[a-z0-9])?)$/.test(name)) {
    throw new Error('Name must match [a-z]([-a-z0-9]{0,61}[a-z0-9])?');
  }
  if (!options) {
    throw new Error('Options are required to create an instance.');
  }
  if (!options.machineType) {
    throw new Error('A machine type is required to create an instance.');
  }
  if (!callback) {
    throw new Error('A callback must be defined.');
  }

  var query = {};

  var body = {
    name: name,
    machineType: options.machineType,
    disks: [],
    networkInterfaces: []
  };

  if (!util.is(options.disks, 'array')) {
    options.disks = [options.disks];
  }

  options.disks.forEach(function(disk) {
    var requestDisk = {};
    if (util.is(disk.source, 'string')) {
      if (disk.createNew) {
        requestDisk.initializeParams = {
          sourceImage: disk.source
        };
      } else {
        requestDisk.source = disk.source;
      }
    } else {
      throw new Error('A disk source must be provided.');
    }
    if (util.is(disk.diskSizeGb, 'long')) {
      requestDisk.initializeParams.diskSizeGb = disk.diskSizeGb;
    }
    if (util.is(disk.diskType, 'string')) {
      requestDisk.initializeParams.diskType = disk.diskType;
    }
    if (util.is(disk.diskName, 'string')) {
      requestDisk.initializeParams.diskName = disk.diskName;
    }
    if (util.is(disk.type, 'string')) {
      requestDisk.type = disk.type;
    }
    if (util.is(disk.mode, 'string')) {
      requestDisk.mode = disk.mode;
    }
    if (util.is(disk.index, 'integer')) {
      requestDisk.index = disk.index;
    }
    if (util.is(disk.deviceName, 'string')) {
      requestDisk.deviceName = disk.deviceName;
    }
    if (util.is(disk.boot, 'boolean')) {
      requestDisk.boot = disk.boot;
    }
    if (util.is(disk.autoDelete, 'boolean')) {
      requestDisk.autoDelete = disk.autoDelete;
    }
    body.disks.push(requestDisk);
  });
  if (body.disks.lenght === 0) {
    throw new Error('A disk must be provided to create an instance.');
  }
  if (!util.is(options.networkIntefaces, 'array')) {
    options.networkIntefaces = [options.networks];
  }
  options.networkInterfaces.forEach(function(networkInterface) {
    body.networkInterfaces.push({
      network: networkInterface.network
    });
  });

  var self = this;
  this.makeReq_('POST', '/instances', query, body, function(err, resp) {
    if (err) {
      callback(err);
      return;
    }
    var instance = self.instance(name);
    instance.metadata = options;
    var operation = self.operation(resp.name);
    operation.metadata = resp;
    callback(null, instance, operation);
  });
};

/**
 * Get a list of instances in this zone. For a detailed description of method's
 * options see [API reference](https://goo.gl/80ya6l).
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
 * var myZone = compute.zone('zone-name');
 *
 * myZone.getInstances(
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
 *     myZone.getInstances(nextQuery, callback);
 *   }
 * };
 *
 * myZone.getInstances({
 *   autoPaginate: false
 * }, callback);
 *
 * //-
 * // Get the instances from your project as a readable object stream.
 * //-
 * myZone.getInstances()
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
 * myZone.getInstances()
 *   .on('data', function(instance) {
 *     this.end();
 *   });
 */
Zone.prototype.getInstances = function(options, callback) {
  if (util.is(options, 'function')) {
    callback = options;
    options = {};
  }

  options = options || {};

  var self = this;
  this.makeReq_('GET', '/instances', options, null, function(err, resp) {
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

    var instances = (resp.items || []).map(function(instanceObject) {
      var instance = self.instance(instanceObject.name);
      instance.metadata = instanceObject;
      return instance;
    });
    callback(null, instances, nextQuery, resp);
  });
};

/**
 * Create a disk in this zone. For a detailed description of method's options
 * see [API reference](https://goo.gl/suU3qn).
 *
 * @throws {Error} if a disk name or options are not provided or if both a
 *     source image and a source snapshot are provided.
 *
 * @param {string} name - Name of the disk.
 * @param {object} options - Options for disk creation.
 * @param {string=} options.sourceImage - Source image for the disk.
 * @param {string=} options.sourceSnapshot - Source snapshot for the disk.
 * @param {number=} options.sizeGb - Size of the disk in GB.
 * @param {function} callback - The callback function.
 *
 * @example
 * var callback = function(err, disk, apiResponse) {
 *   // `disk` is a Disk object.
 *   // `operation` is an Operation object and can be used to check the status
 *   // of disk creation.
 * };
 *
 * var compute = gcloud.compute({
 *   projectId: 'grape-spaceship-123'
 * });
 *
 * var myZone = compute.zone('zone-name');
 *
 * myZone.createDisk(
 *   'new-disk',
 *   {
 *      sizeGb: 10
 *    }, callback);
 */
Zone.prototype.createDisk = function(name, options, callback) {
  if (!name) {
    throw new Error('A name is required to create a disk.');
  } else if (!/^(?:[a-z](?:[-a-z0-9]{0,61}[a-z0-9])?)$/.test(name)) {
    throw new Error('Name must match [a-z]([-a-z0-9]{0,61}[a-z0-9])?');
  }
  if (!options) {
    throw new Error('Options are required to create a disk.');
  }
  if (!options.sourceImage && !options.sizeGb && !options.sourceSnapshot) {
    throw new Error('An image, a snapshot or the size is required.');
  }
  if (options.sourceImage && options.sourceSnapshot) {
    throw new Error('An image and a snapshot can not be both provided.');
  }
  if (!callback) {
    throw new Error('A callback must be defined.');
  }

  var query = {};
  var body = {};

  if (options.sourceImage) {
    query.sourceImage = options.sourceImage;
  } else if (options.sourceSnapshot) {
    body.sourceSnapshot = options.sourceSnapshot;
  }

  if (util.is(options.sizeGb, 'number')) {
    body.sizeGb = options.sizeGb.toString();
  }

  body.name = name;

  var self = this;
  this.makeReq_('POST', '/disks', query, body, function(err, resp) {
    if (err) {
      callback(err);
      return;
    }
    var disk = self.disk(name);
    self.metadata = options;
    var operation = self.operation(resp.name);
    operation.metadata = resp;
    callback(null, disk, operation);
  });
};

/**
 * Get a list of disks in this zone. For a detailed description of method's
 * options see [API reference](https://goo.gl/0R67mp).
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
 * var myZone = compute.zone('zone-name');
 *
 * myZone.getDisks(
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
 *     myZone.getDisks(nextQuery, callback);
 *   }
 * };
 *
 * myZone.getDisks({
 *   autoPaginate: false
 * }, callback);
 *
 * //-
 * // Get the disks from your project as a readable object stream.
 * //-
 * myZone.getDisks()
 *   .on('error', console.error)
 *   .on('data', function(disk) {
 *     // `disk` is a `Disk` object.
 *   })
 *   .on('end', function() {
 *     // All disks retrieved.
 *   });
 *
 * //-
 * // If you anticipate many results, you can end a stream early to prevent
 * // unnecessary processing and API requests.
 * //-
 * myZone.getDisks()
 *   .on('data', function(disk) {
 *     this.end();
 *   });
 */
Zone.prototype.getDisks = function(options, callback) {
  if (util.is(options, 'function')) {
    callback = options;
    options = {};
  }

  options = options || {};

  var self = this;
  this.makeReq_('GET', '/disks', options, null, function(err, resp) {
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

    var disks = (resp.items || []).map(function(diskObject) {
      var disk = self.disk(diskObject.name);
      disk.metadata = diskObject;
      return disk;
    });
    callback(null, disks, nextQuery, resp);
  });
};

/**
 * Get a list of operations for this zone. For a detailed description of
 * method's options see [API reference](https://goo.gl/5n74cP).
 *
 * @param {object} options - Operation search options.
 * @param {boolean=} options.autoPaginate - Have pagination handled
 *     automatically. Default: true.
 * @param {number=} options.maxResults - Maximum number of operations to return.
 * @param {string=} options.filter - Search filter. The filter must contain:
 *     `FIELD_NAME COMPARISON_STRING LITERAL_STRING`. `FIELD_NAME` is the name
 *     of the field to compare. `COMPARISON` is the comparison operator that can
 *     be either `eq` or `ne`. `LITERAL_STRING` is the string to filter to.
 *     For string fields `LITERAL_STRING` can be a regular expression.
 * @param {string=} pageToken - Page identifier used in paginated search.
 * @param {function} callback - The callback function.
 *
 * @example
 * var callback = function(err, operations) {
 *   // `operations` is an array of `Operation` objects.
 * };
 *
 * var myZone = compute.zone('zone-name');
 *
 * myZone.getOperations(
 *   {
 *     filter: 'name eq operation-[0-9]'
 *   }, callback);
 *
 * //-
 * // To control how many API requests are made and page through the results
 * // manually, set `autoPaginate` to `false`.
 * //-
 * var callback = function(err, operations, nextQuery, apiResponse) {
 *   if (nextQuery) {
 *     // More results exist.
 *     myZone.getOperations(nextQuery, callback);
 *   }
 * };
 *
 * myZone.getOperations({
 *   autoPaginate: false
 * }, callback);
 *
 * //-
 * // Get the operations from your project as a readable object stream.
 * //-
 * myZone.getOperations()
 *   .on('error', console.error)
 *   .on('data', function(operation) {
 *     // `operation` is a `Operation` object.
 *   })
 *   .on('end', function() {
 *     // All operations retrieved.
 *   });
 *
 * //-
 * // If you anticipate many results, you can end a stream early to prevent
 * // unnecessary processing and API requests.
 * //-
 * myZone.getOperations()
 *   .on('data', function(operation) {
 *     this.end();
 *   });
 */
Zone.prototype.getOperations = function(options, callback) {
  if (util.is(options, 'function')) {
    callback = options;
    options = {};
  }

  options = options || {};

  var self = this;
  this.makeReq_(
    'GET',
    '/operations',
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

      var operations = (resp.items || []).map(function(operationObject) {
        var operation = self.operation(operationObject.name);
        operation.metadata = operationObject;
        return operation;
      });
      callback(null, operations, nextQuery, resp);
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
Zone.prototype.makeReq_ = function(method, path, query, body, callback) {
  path = '/zones/' + this.name + path;
  this.compute.makeReq_(method, path, query, body, callback);
};

/*! Developer Documentation
 *
 * These methods can be used with either a callback or as a readable object
 * stream. `streamRouter` is used to add this dual behavior.
 */
streamRouter.extend(Zone, ['getInstances', 'getDisks', 'getOperations']);

module.exports = Zone;