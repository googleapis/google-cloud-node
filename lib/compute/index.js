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
 * @type {module:compute/firewall}
 * @private
 */
var Firewall = require('./firewall.js');

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
 * Get a reference to a Google Compute Engine instance.
 *
 * @param {string} name - Name of the existing instance.
 * @param {string} zone - Zone of the existing instance.
 * @return {module:compute/instance}
 *
 * @example
 * var gcloud = require('gcloud')({
 *   keyFilename: '/path/to/keyfile.json'
 * });
 *
 * var compute = gcloud.compute();
 *
 * var instance = compute.instance('instance1', 'europe-west1-b');
 */
Compute.prototype.instance = function(name, zone) {
  return new Instance(this, name, zone);
};

/**
 * Get a reference to a Google Compute Engine disk.
 *
 * @param {string} name - Name of the existing disk.
 * @param {string} zone - Zone of the existing disk.
 * @return {module:compute/disk}
 *
 * @example
 * var gcloud = require('gcloud')({
 *   keyFilename: '/path/to/keyfile.json'
 * });
 *
 * var compute = gcloud.compute();
 *
 * var disk = compute.disk('disk1', 'europe-west1-b');
 */
Compute.prototype.disk = function(name, zone) {
  return new Disk(this, name, zone);
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
  if (networkName) {
    return new Firewall(this, networkName, {
      network: networkName
    });
  }
  return new Firewall(this, name);
};

/**
 * Create an instance.
 *
 * @throws {Error} if an instance name or options are not provided.
 *
 * @param {string} name - Name of the instance.
 * @param {object} options - Options for instance creation.
 * @param {string} options.zone - Zone where the instance is created.
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
 * compute.createInstance(
 *   'instance-1', 
 *   {
 *     machineType: 'zones/europe-west1-b/machineTypes/n1-standard-1',
 *     zone: 'europe-west1-b',
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
Compute.prototype.createInstance = function(name, options, callback) {
  if (!name) {
    throw new Error('A name is required to create an instance.');
  } else if (!/^(?:[a-z](?:[-a-z0-9]{0,61}[a-z0-9])?)$/.test(name)) {
    throw new Error('Name must match [a-z]([-a-z0-9]{0,61}[a-z0-9])?');
  }
  if (!options) {
    throw new Error('Options are required to create an instance.');
  }
  if (!options.zone) {
    throw new Error('A zone is required to create an instance.');
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
    '/zones/'+options.zone+'/instances', 
    query, 
    body, function(err, resp) {
      if (err) {
        callback(err);
        return; 
      }
      var instance = new Instance(this, name, options.zone);
      callback(null, instance, resp);
    }.bind(this));
};

/**
 * Create a disk.
 *
 * @throws {Error} if a disk name or options are not provided or if both a
 *     source image and a source snapshot are provided.
 *
 * @param {string} name - Name of the disk.
 * @param {object} options - Options for disk creation.
 * @param {string} options.zone - Zone where the disk is created.
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
 * compute.createDisk(
 *   'new-disk', 
 *   {
 *      zone: 'europe-west1-b',
 *      sizeGb: 10
 *    }, callback);
 */
Compute.prototype.createDisk = function(name, options, callback) {
  if (!name) {
    throw new Error('A name is required to create a disk.');
  } else if (!/^(?:[a-z](?:[-a-z0-9]{0,61}[a-z0-9])?)$/.test(name)) {
    throw new Error('Name must match [a-z]([-a-z0-9]{0,61}[a-z0-9])?');
  }
  if (!options) {
    throw new Error('Options are required to create a disk.');
  }
  if (!options.zone) {
    throw new Error('A zone is required to create a disk.');
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
    '/zones/'+options.zone+'/disks', 
    query, 
    body, function(err, resp) {
      if (err) {
        callback(err);
        return; 
      }
      var disk = new Disk(this, name, options.zone, options.sizeGb);
      callback(null, disk, resp);
    }.bind(this));
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
    throw new Error('A firewall name is needed to use Google Cloud Compute.');
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

  this.makeReq_(
    'POST', 
    '/global/firewalls', 
    null, 
    body, function(err, resp) {
      if (err) {
        callback(err);
        return; 
      }
      var firewall = new Firewall(this, name, body);
      callback(null, firewall, resp);
    }.bind(this)); 
};

/**
 * Get a list of instances.
 *
 * @throws {Error} if a malformed filter is provided.
 *
 * @param {object} options - Instance search options.
 * @param {number=} options.maxResults - Maximum number of instances to 
 *     return.
 * @param {string=} options.zone - Only instances in this zone a returned.
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
 * compute.listInstances( 
 *   {
 *     zone: 'europe-west1-b',
 *     filter: {
 *       fieldName : 'name',
 *       operatorString : 'eq',
 *       literalString : 'instance-[0-9]'
 *     }],
 *   }, callback);
 */
Compute.prototype.listInstances = function(options, callback) {
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

  var path = '';
  var processResponse;
  if (options.zone) {
    path = '/zones/'+options.zone;
    processResponse = function(resp) {
      var instances = [];
      for (var i = 0; i < resp.items.length; i++) {
        var instance = new Instance(
          this, 
          resp.items[i].name, 
          resp.items[i].zone, 
          resp.items[i]);
        instances.push(instance);
      }
      callback(null, instances);
    }.bind(this);
  } else {
    path = '/aggregated';
    processResponse = function(resp) {
      var instances = [];
      for (var zone in resp.items) {
        var zoneInstances = resp.items[zone].instances;
        if (zoneInstances) {
          for (var i = 0; i < zoneInstances.length; i++) {
            var instance = new Instance(
              this, 
              zoneInstances[i].name, 
              zoneInstances[i].zone, 
              zoneInstances[i]);
            instances.push(instance);
          }
        }
      }
      callback(null, instances);
    }.bind(this);
  }
  
  this.makeReq_(
    'GET', 
    path+'/instances', 
    query, 
    null, function(err, resp) {
      if (err) {
        callback(err);
        return; 
      }
      if (resp.items) {
        processResponse(resp);        
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
 * @param {string=} options.zone - Only disks in this zone a returned.
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
 * compute.listDisks( 
 *   {
 *     zone: 'europe-west1-b',
 *     filter: {
 *       fieldName : 'name',
 *       operatorString : 'eq',
 *       literalString : 'disk-[0-9]'
 *     }],
 *   }, callback);
 */
Compute.prototype.listDisks = function(options, callback) {
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

  var path = '';
  var processResponse;
  if (options.zone) {
    path = '/zones/'+options.zone;
    processResponse = function(resp) {
      var disks = [];
      for (var i = 0; i < resp.items.length; i++) {
        var disk = new Disk(
          this, 
          resp.items[i].name, 
          resp.items[i].zone, 
          resp.items[i].sizeGb, 
          resp.items[i]);
        disks.push(disk);
      }
      callback(null, disks);
    }.bind(this);
  } else {
    path = '/aggregated';
    processResponse =  function(resp) {
      var disks = [];
      for (var zone in resp.items) {
        var zoneDisks = resp.items[zone].disks;
        if (zoneDisks) {
          for (var i = 0; i < zoneDisks.length; i++) {
            var disk = new Disk(
              this, 
              zoneDisks[i].name, 
              zoneDisks[i].zone,
              zoneDisks[i].sizeGb, 
              zoneDisks[i]);
            disks.push(disk);
          }
        }
      }
      callback(null, disks);
    }.bind(this);
  }
  
  this.makeReq_(
    'GET', 
    path+'/disks', 
    query, 
    null, function(err, resp) {
      if (err) {
        callback(err);
        return; 
      }
      if (resp.items) {
        processResponse(resp);        
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
 * compute.listFirewalls( 
 *   {
 *     zone: 'europe-west1-b',
 *     filter: {
 *       fieldName : 'name',
 *       operatorString : 'eq',
 *       literalString : 'firewall-[0-9]'
 *     }],
 *   }, callback);
 */
Compute.prototype.listFirewalls = function(options, callback) {
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
            this, 
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

