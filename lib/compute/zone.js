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
 * @type {module:common/util}
 * @private
 */
var util = require('../common/util.js');

/**
 * @const {string}
 * @private
 */
var COMPUTE_BASE_URL = 'https://www.googleapis.com/compute/v1/projects/';

/**
 * Create a Zone object to interact with a Google Compute Engine zone.
 *
 * @constructor
 * @alias module:compute/zone
 *
 * @throws {Error} if a zone name is not provided.
 *
 * @param {module:compute} compute - The Google Compute Engine instance this 
 *     disk belongs to.
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
    throw new Error('A name is needed to use Google Cloud Compute Zone.');
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
 * Create an instance in the zone.
 *
 * @throws {Error} if an instance name or options are not provided.
 *
 * @param {string} name - Name of the instance.
 * @param {object} options - Options for instance creation.
 * @param {string} machineType - Type of the instance.
 * @param {object[]} disks - Disks to attach to the instance.
 * @param {boolean} disks[].createNew - True if the disk has to be created. 
 *     Default value is false.
 * @param {string} disks[].source - Source for the disk to be created, either an
 *     image or a snapshot. 
 * @param {string=} disks[].diskType - Type of the disk.
 * @param {number=} disks[].sizeGb - Size of the disk in GB.
 * @param {boolean=} disks[].boot - True of the disk is a boot disk.
 * @param {string=} disks[].mode - Attach mode, either `READ_ONLY` or 
 *     `READ_WRITE`. Default value is `READ_WRITE`.
 * @param {number=} disks[].index - Zero based index assigned from the instance
 *     to the disk.
 * @param {string=} disks[].deviceName - Device name assigned from the instance 
 *     to the disk.
 * @param {boolean=} disks[].autoDelete - If true the disk is deleted when the 
 *     instance is deleted.
 * @param {object[]} networkInterfaces - Network interfaces for the instance.
 * @param {string} networkInterfaces[].network - Full/partial URL of a network
 *     interface for this instance.
 * @param {function} callback - The callback function.
 *
 * @example
 * var callback = function(err, instance, apiResponse) {
 *   // `instance` is an Instance object.
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

  this.makeReq_(
    'POST', 
    '/instances', 
    query, 
    body, function(err, resp) {
      if (err) {
        callback(err);
        return; 
      }
      var instance = new Instance(this, name);
      callback(null, instance, resp);
    }.bind(this));
};

/**
 * Get a list of instances in this zone.
 *
 * @throws {Error} if a malformed filter is provided.
 *
 * @param {object} options - Instance search options.
 * @param {number=} options.maxResults - Maximum number of instances to 
 *     return.
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
 * var myZone = compute.zone('zone-name');
 *
 * myZone.listInstances( 
 *   {
 *     filter: {
 *       fieldName : 'name',
 *       operatorString : 'eq',
 *       literalString : 'instance-[0-9]'
 *     }],
 *   }, callback);
 */
Zone.prototype.listInstances = function(options, callback) {
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

  this.makeReq_(
    'GET', 
    '/instances', 
    query, 
    null, function(err, resp) {
      if (err) {
        callback(err);
        return; 
      }
      console.log(resp);
      if (resp.items) {
        var instances = [];
        for (var i = 0; i < resp.items.length; i++) {
          var instance = new Instance(
            this, 
            resp.items[i].name, 
            resp.items[i]);
          instances.push(instance);
        }
        callback(null, instances);       
      } else {
        callback(null, []);
      }
    }.bind(this));
};

/**
 * Create a disk in this zone.
 *
 * @throws {Error} if a disk name or options are not provided or if both a
 *     source image and a source snapshot are provided.
 *
 * @param {string} name - Name of the disk.
 * @param {object} options - Options for disk creation.
 * @param {string=} sourceImage - Source image for the disk.
 * @param {string=} sourceSnapshot - Source snapshot for the disk.
 * @param {number=} sizeGb - Size of the disk in GB.
 * @param {function} callback - The callback function.
 *
 * @example
 * var callback = function(err, disk, apiResponse) {
 *   // `disk` is a Disk object.
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

  this.makeReq_(
    'POST', 
    '/disks', 
    query, 
    body, function(err, resp) {
      if (err) {
        callback(err);
        return; 
      }
      var disk = new Disk(this, name, options.sizeGb);
      callback(null, disk, resp);
    }.bind(this));
};

/**
 * Get a list of disks in this zone.
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
 * var myZone = compute.zone('zone-name');
 *
 * myZone.listDisks( 
 *   {
 *     filter: {
 *       fieldName : 'name',
 *       operatorString : 'eq',
 *       literalString : 'disk-[0-9]'
 *     }],
 *   }, callback);
 */
Zone.prototype.listDisks = function(options, callback) {
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
  
  this.makeReq_(
    'GET', 
    '/disks', 
    query, 
    null, function(err, resp) {
      if (err) {
        callback(err);
        return; 
      }
      if (resp.items) {
        var disks = [];
        for (var i = 0; i < resp.items.length; i++) {
          var disk = new Disk(
            this, 
            resp.items[i].name, 
            resp.items[i].sizeGb, 
            resp.items[i]);
          disks.push(disk);
        }
        callback(null, disks);     
      } else {
        callback(null, []);
      }
    }.bind(this));
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
  var reqOpts = {
    method: method,
    qs: query,
    uri: COMPUTE_BASE_URL + this.compute.projectId + 
        '/zones/' + this.name + path
  };

  if (body) {
    reqOpts.json = body;
  }

  this.compute.makeAuthorizedRequest_(reqOpts, callback);
};

module.exports = Zone;