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
 * @module compute/zone
 */

'use strict';

var arrify = require('arrify');
var async = require('async');
var common = require('@google-cloud/common');
var extend = require('extend');
var format = require('string-format-obj');
var gceImages = require('gce-images');
var is = require('is');
var util = require('util');

/**
 * @type {module:compute/autoscaler}
 * @private
 */
var Autoscaler = require('./autoscaler.js');

/**
 * @type {module:compute/disk}
 * @private
 */
var Disk = require('./disk.js');

/**
 * @type {module:compute/instance-group}
 * @private
 */
var InstanceGroup = require('./instance-group.js');

/**
 * @type {module:compute/machine-type}
 * @private
 */
var MachineType = require('./machine-type.js');

/**
 * @type {module:compute/operation}
 * @private
 */
var Operation = require('./operation.js');

/**
 * @type {module:compute/vm}
 * @private
 */
var VM = require('./vm.js');

/*! Developer Documentation
 *
 * @param {module:compute} compute - Compute object this zone belongs to.
 * @param {string} name - Name of the zone.
 */
/**
 * A Zone object allows you to interact with a Google Compute Engine zone.
 *
 * @resource [Regions & Zones Overview]{@link https://cloud.google.com/compute/docs/zones}
 * @resource [Zone Resource]{@link https://cloud.google.com/compute/docs/reference/v1/zones}
 *
 * @constructor
 * @alias module:compute/zone
 *
 * @example
 * var zone = gce.zone('us-central1-a');
 */
function Zone(compute, name) {
  var methods = {
    /**
     * Check if the zone exists.
     *
     * @param {function} callback - The callback function.
     * @param {?error} callback.err - An error returned while making this
     *     request.
     * @param {boolean} callback.exists - Whether the zone exists or not.
     *
     * @example
     * zone.exists(function(err, exists) {});
     *
     * //-
     * // If the callback is omitted, we'll return a Promise.
     * //-
     * zone.exists().then(function(data) {
     *   var exists = data[0];
     * });
     */
    exists: true,

    /**
     * Get a zone.
     *
     * @example
     * zone.get(function(err, zone, apiResponse) {
     *   // `zone` is a Zone object.
     * });
     *
     * //-
     * // If the callback is omitted, we'll return a Promise.
     * //-
     * zone.get().then(function(data) {
     *   var zone = data[0];
     *   var apiResponse = data[1];
     * });
     */
    get: true,

    /**
     * Get the zone's metadata.
     *
     * @resource [Zone Resource]{@link https://cloud.google.com/compute/docs/reference/v1/zones}
     * @resource [Zones: get API Documentation]{@link https://cloud.google.com/compute/docs/reference/v1/zones/get}
     *
     * @param {function=} callback - The callback function.
     * @param {?error} callback.err - An error returned while making this
     *     request.
     * @param {object} callback.metadata - The zone's metadata.
     * @param {object} callback.apiResponse - The full API response.
     *
     * @example
     * zone.getMetadata(function(err, metadata, apiResponse) {});
     *
     * //-
     * // If the callback is omitted, we'll return a Promise.
     * //-
     * zone.getMetadata().then(function(data) {
     *   var metadata = data[0];
     *   var apiResponse = data[1];
     * });
     */
    getMetadata: true
  };

  common.ServiceObject.call(this, {
    parent: compute,
    baseUrl: '/zones',
    id: name,
    methods: methods
  });

  this.compute = compute;
  this.name = name;

  this.gceImages = gceImages({
    authClient: compute.authClient
  });
}

util.inherits(Zone, common.ServiceObject);

/**
 * Get a reference to a Google Compute Engine autoscaler in this zone.
 *
 * @param {string} name - Name of the autoscaler.
 * @return {module:compute/autoscaler}
 *
 * @example
 * var autoscaler = zone.autoscaler('autoscaler-name');
 */
Zone.prototype.autoscaler = function(name) {
  return new Autoscaler(this, name);
};

/**
 * Create an autoscaler in this zone.
 *
 * @resource [Load Balancing and Scaling]{@link https://cloud.google.com/compute/docs/load-balancing-and-autoscaling}
 * @resource [Autoscaler Resource]{@link https://cloud.google.com/compute/docs/reference/v1/autoscalers}
 * @resource [Autoscalers: insert API Documentation]{@link https://cloud.google.com/compute/docs/reference/v1/autoscalers/insert}
 *
 * @throws {Error} If `config.target` is not provided.
 *
 * @param {string} name - Name of the autoscaler.
 * @param {object} config - See an
 *     [Autoscaler resource](https://cloud.google.com/compute/docs/reference/v1/autoscalers).
 * @param {number} config.coolDown - The number of seconds that the autoscaler
 *     should wait before it starts collecting information from a new instance.
 *     Alias for `config.autoscalingPolicy.coolDownPeriodSec`.
 * @param {number} config.cpu - The target CPU utilization that the autoscaler
 *     should maintain, between 1 - 100. Alias for
 *     `config.autoscalingPolicy.cpuUtilization.utilizationTarget`.
 * @param {number} config.loadBalance - Backend capacity utilization that
 *     autoscaler should maintain, between 1 - 100. Alias for
 *     `config.autoscalingPolicy.loadBalancingUtilization.utilizationTarget`.
 * @param {number} config.maxReplicas - The maximum number of instances that the
 *     autoscaler can scale up to. Alias for
 *     `config.autoscalingPolicy.maxNumReplicas`.
 * @param {number} config.minReplicas - The minimum number of replicas that the
 *     autoscaler can scale down to. Alias for
 *     `config.autoscalingPolicy.minNumReplicas`.
 * @param {string} config.target - The name of the managed instance group that
 *     this autoscaler will scale.
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request.
 * @param {module:compute/autoscaler} callback.autoscaler - The created
 *     Autoscaler object.
 * @param {module:compute/operation} callback.operation - An operation object
 *     that can be used to check the status of the request.
 * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * var config = {
 *   coolDown: 30,
 *   cpu: 80,
 *   loadBalance: 40,
 *   maxReplicas: 5,
 *   minReplicas: 0,
 *   target: 'instance-group-manager-1'
 * };
 *
 * function callback(err, autoscaler, operation, apiResponse) {
 *   // `autoscaler` is an Autoscaler object.
 *
 *   // `operation` is an Operation object that can be used to check the status
 *   // of the request.
 * }
 *
 * zone.createAutoscaler('name', config, callback);
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * zone.createAutoscaler('name', config).then(function(data) {
 *   var autoscaler = data[0];
 *   var operation = data[1];
 *   var apiResponse = data[2];
 * });
 */
Zone.prototype.createAutoscaler = function(name, config, callback) {
  var self = this;

  if (!config.target) {
    throw new Error('Cannot create an autoscaler without a target.');
  }

  var json = extend(true, {}, config, {
    name: name,
    autoscalingPolicy: {}
  });

  if (!/^https*:/.test(json.target)) {
    json.target = [
      'https://content.googleapis.com./compute/v1/projects/',
      this.compute.projectId,
      '/zones/',
      this.name,
      '/instanceGroupManagers/',
      json.target
    ].join('');
  }

  if (is.defined(json.coolDown)) {
    json.autoscalingPolicy.coolDownPeriodSec = json.coolDown;
    delete json.coolDown;
  }

  if (is.defined(json.cpu)) {
    json.autoscalingPolicy.cpuUtilization = {
      utilizationTarget: json.cpu / 100
    };
    delete json.cpu;
  }

  if (is.defined(json.loadBalance)) {
    json.autoscalingPolicy.loadBalancingUtilization = {
      utilizationTarget: json.loadBalance / 100
    };
    delete json.loadBalance;
  }

  if (is.defined(json.maxReplicas)) {
    json.autoscalingPolicy.maxNumReplicas = json.maxReplicas;
    delete json.maxReplicas;
  }

  if (is.defined(json.minReplicas)) {
    json.autoscalingPolicy.minNumReplicas = json.minReplicas;
    delete json.minReplicas;
  }

  this.request({
    method: 'POST',
    uri: '/autoscalers',
    json: json
  }, function(err, resp) {
    if (err) {
      callback(err, null, null, resp);
      return;
    }

    var autoscaler = self.autoscaler(name);

    var operation = self.operation(resp.name);
    operation.metadata = resp;

    callback(null, autoscaler, operation, resp);
  });
};

/**
 * Create a persistent disk in this zone.
 *
 * @resource [Disk Resource]{@link https://cloud.google.com/compute/docs/reference/v1/disks}
 * @resource [Disks: insert API Documentation]{@link https://cloud.google.com/compute/docs/reference/v1/disks/insert}
 *
 * @param {string} name - Name of the disk.
 * @param {object} config - See a
 *     [Disk resource](https://cloud.google.com/compute/docs/reference/v1/disks).
 * @param {string=} config.os - Specify the name of an OS, and we will use the
 *     latest version as the source image of a new boot disk. See
 *     [this list of accepted OS names](https://github.com/stephenplusplus/gce-images#accepted-os-names).
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request.
 * @param {module:compute/disk} callback.disk - The created Disk object.
 * @param {module:compute/operation} callback.operation - An operation object
 *     that can be used to check the status of the request.
 * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * //-
 * // Create a persistent disk using the latest Ubuntu version
 * // as the source image.
 * //-
 * var config = {
 *   os: 'ubuntu',
 *   sizeGb: 10
 * };
 *
 * //-
 * // Create a persistent disk using the latest Ubuntu version from your project
 * // as the source image.
 * //-
 * var config = {
 *   os: 'your-project-id-or-name/ubuntu',
 *   sizeGb: 10
 * };
 *
 * zone.createDisk('name', config, function(err, disk, operation, apiResponse) {
 *   // `disk` is a Disk object.
 *
 *   // `operation` is an Operation object that can be used to check the status
 *   // of the request.
 * });
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * zone.createDisk('name', config).then(function(data) {
 *   var disk = data[0];
 *   var operation = data[1];
 *   var apiResponse = data[2];
 * });
 */
Zone.prototype.createDisk = function(name, config, callback) {
  var self = this;

  var query = {};
  var body = extend({}, config, {
    name: name
  });

  if (body.image) {
    query.sourceImage = body.image;
    delete body.image;
  }

  if (body.os) {
    this.gceImages.getLatest(body.os, function(err, image) {
      if (err) {
        callback(err);
        return;
      }

      delete body.os;
      body.sourceImage = image.selfLink;

      self.createDisk(name, body, callback);
    });
    return;
  }

  this.request({
    method: 'POST',
    uri: '/disks',
    qs: query,
    json: body
  }, function(err, resp) {
    if (err) {
      callback(err, null, null, resp);
      return;
    }

    var disk = self.disk(name);

    var operation = self.operation(resp.name);
    operation.metadata = resp;

    callback(null, disk, operation, resp);
  });
};

/**
 * Create an instance group in this zone.
 *
 * @resource [InstanceGroup Resource]{@link https://cloud.google.com/compute/docs/reference/v1/instanceGroups#resource}
 * @resource [InstanceGroups: insert API Documentation]{@link https://cloud.google.com/compute/docs/reference/v1/instanceGroups/insert}
 *
 * @param {string} name - Name of the instance group.
 * @param {object} options - See an
 *     [InstanceGroup resource](https://cloud.google.com/compute/docs/reference/v1/instanceGroups#resource).
 * @param {object} options.ports - A map of names to ports. The key should be
 *     the name, and the value the port number. Maps to `options.namedPorts`.
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request.
 * @param {module:compute/instance-group} callback.instanceGroup - The created
 *     InstanceGroup object.
 * @param {module:compute/operation} callback.operation - An operation object
 *     that can be used to check the status of the request.
 * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * function onCreated(err, instanceGroup, operation, apiResponse) {
 *   // `instanceGroup` is an InstanceGroup object.
 *
 *   // `operation` is an Operation object that can be used to check the status
 *   // of the request.
 * }
 *
 * zone.createInstanceGroup('instance-group-name', onCreated);
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * zone.createInstanceGroup('instance-group-name', config).then(function(data) {
 *   var instanceGroup = data[0];
 *   var operation = data[1];
 *   var apiResponse = data[2];
 * });
 */
Zone.prototype.createInstanceGroup = function(name, options, callback) {
  var self = this;

  if (is.fn(options)) {
    callback = options;
    options = {};
  }

  var body = extend({}, options, {
    name: name
  });

  if (body.ports) {
    body.namedPorts = InstanceGroup.formatPorts_(body.ports);
    delete body.ports;
  }

  this.request({
    method: 'POST',
    uri: '/instanceGroups',
    json: body
  }, function(err, resp) {
    if (err) {
      callback(err, null, null, resp);
      return;
    }

    var instanceGroup = self.instanceGroup(name);

    var operation = self.operation(resp.name);
    operation.metadata = resp;

    callback(null, instanceGroup, operation, resp);
  });
};

/**
 * Create a virtual machine in this zone.
 *
 * @resource [Instance Resource]{@link https://cloud.google.com/compute/docs/reference/v1/instances}
 * @resource [Instances: insert API Documentation]{@link https://cloud.google.com/compute/docs/reference/v1/instances/insert}
 *
 * @param {string} name - Name of the instance.
 * @param {object} config - See an
 *     [Instance resource](https://cloud.google.com/compute/docs/reference/v1/instances).
 * @param {object[]=} config.disks - See a
 *     [Disk resource](https://cloud.google.com/compute/docs/reference/v1/disks).
 * @param {boolean=} config.http - Allow HTTP traffic. Default: `false`
 * @param {boolean=} config.https - Allow HTTPS traffic. Default: `false`
 * @param {object[]=} config.networkInterfaces - An array of configurations for
 *     this interface. This specifies how this interface should interact with
 *     other network services, such as connecting to the internet. Default:
 *     `[ { network: 'global/networks/default' } ]`
 * @param {string=} config.machineType - The machine type resource to use.
 *     Provide only the name of the machine, e.g. `n1-standard-16`. Refer to
 *     [Available Machine Types](https://goo.gl/jrHEbo). Default:
 *     `n1-standard-1`
 * @param {string=} config.os - Specify the name of an OS, and we will use the
 *     latest version as the source image of a new boot disk. See
 *     [this list of accepted OS names](https://github.com/stephenplusplus/gce-images#accepted-os-names).
 * @param {string[]=} config.tags - An array of tags.
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request.
 * @param {module:compute/vm} callback.vm - The created VM object.
 * @param {module:compute/operation} callback.operation - An operation object
 *     that can be used to check the status of the request.
 * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * //-
 * // Create a new instance using the latest Debian version from your project
 * // as the source image for a new boot disk.
 * //-
 * var config = {
 *   os: 'your-project-id-or-name/debian',
 *   http: true,
 *   tags: ['debian-server']
 * };
 *
 * //-
 * // Create a new instance using the latest Debian version as the source image
 * // for a new boot disk.
 * //-
 * var config = {
 *   os: 'debian',
 *   http: true,
 *   tags: ['debian-server']
 * };
 *
 * //-
 * // The above object will auto-expand behind the scenes to something like the
 * // following. The Debian version may be different when you run the command.
 * //-
 * var config = {
 *   machineType: 'n1-standard-1',
 *   disks: [
 *     {
 *       boot: true,
 *       initializeParams: {
 *         sourceImage:
 *           'https://www.googleapis.com./compute/v1/projects' +
 *           '/debian-cloud/global/images/debian-7-wheezy-v20150710'
 *       }
 *     }
 *   ],
 *   networkInterfaces: [
 *     {
 *       network: 'global/networks/default'
 *     }
 *   ],
 *   tags: [
 *     {
 *       items: [
 *         'debian-server',
 *         'http-server'
 *       ]
 *     }
 *   ]
 * };
 *
 * function callback(err, vm, operation, apiResponse) {
 *   // `vm` is a VM object.
 *
 *   // `operation` is an Operation object that can be used to check the status
 *   // of the request.
 * }
 *
 * zone.createVM('new-vm-name', config, callback);
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * zone.createVM('new-vm-name', config).then(function(data) {
 *   var vm = data[0];
 *   var operation = data[1];
 *   var apiResponse = data[2];
 * });
 */
Zone.prototype.createVM = function(name, config, callback) {
  var self = this;

  var body = extend({
    name: name,
    machineType: 'n1-standard-1',
    networkInterfaces: [
      {
        network: 'global/networks/default'
      }
    ]
  }, config);

  if (body.machineType.indexOf('/') === -1) {
    // The specified machineType is only a partial name, e.g. 'n1-standard-1'.
    body.machineType = format('zones/{zoneName}/machineTypes/{machineType}', {
      zoneName: this.name,
      machineType: body.machineType
    });
  }

  if (is.array(body.tags)) {
    body.tags = {
      items: body.tags
    };
  }

  if (body.http || body.https) {
    // We will add tags to the created instance (http-server and/or
    // https-server), and create the appropriate firewall rules to allow
    // connections on the necessary ports to these tags.
    var createFirewallMethods = [];

    body.networkInterfaces[0].accessConfigs = [
      {
        type: 'ONE_TO_ONE_NAT'
      }
    ];

    body.tags = body.tags || {};
    body.tags.items = body.tags.items || [];

    if (body.http) {
      delete body.http;

      createFirewallMethods.push(this.createHttpServerFirewall_.bind(this));

      if (body.tags.items.indexOf('http-server') === -1) {
        body.tags.items.push('http-server');
      }
    }

    if (body.https) {
      delete body.https;

      createFirewallMethods.push(this.createHttpsServerFirewall_.bind(this));

      if (body.tags.items.indexOf('https-server') === -1) {
        body.tags.items.push('https-server');
      }
    }

    // We have to make sure the firewall rules exist to allow HTTP/S traffic.
    async.parallel(createFirewallMethods, function(err) {
      if (err) {
        callback(err);
        return;
      }

      self.createVM(name, body, callback);
    });

    return;
  }

  if (body.os) {
    this.gceImages.getLatest(body.os, function(err, image) {
      if (err) {
        callback(err);
        return;
      }

      delete body.os;
      body.disks = body.disks || [];
      body.disks.push({
        autoDelete: true,
        boot: true,
        initializeParams: {
          sourceImage: image.selfLink
        }
      });

      self.createVM(name, body, callback);
    });

    return;
  }

  this.request({
    method: 'POST',
    uri: '/instances',
    json: body
  }, function(err, resp) {
    if (err) {
      callback(err, null, null, resp);
      return;
    }

    var vm = self.vm(name);

    var operation = self.operation(resp.name);
    operation.metadata = resp;

    callback(null, vm, operation, resp);
  });
};

/**
 * Get a reference to a Google Compute Engine disk in this zone.
 *
 * @resource [Disks Overview]{@link https://cloud.google.com/compute/docs/disks}
 *
 * @param {string} name - Name of the disk.
 * @return {module:compute/disk}
 *
 * @example
 * var disk = zone.disk('disk1');
 */
Zone.prototype.disk = function(name) {
  return new Disk(this, name);
};

/**
 * Get a list of autoscalers from this zone.
 *
 * @resource [Managing Autoscalers]{@link https://cloud.google.com/compute/docs/autoscaler/managing-autoscalers}
 * @resource [Understanding Autoscaler Decisions]{@link https://cloud.google.com/compute/docs/autoscaler/understanding-autoscaler-decisions}
 * @resource [Autoscalers: aggregatedList API Documentation]{@link https://cloud.google.com/compute/docs/reference/v1/autoscalers/list}
 *
 * @param {object=} options - Autoscaler search options.
 * @param {boolean} options.autoPaginate - Have pagination handled
 *     automatically. Default: true.
 * @param {string} options.filter - Search filter in the format of
 *     `{name} {comparison} {filterString}`.
 *     - **`name`**: the name of the field to compare
 *     - **`comparison`**: the comparison operator, `eq` (equal) or `ne`
 *       (not equal)
 *     - **`filterString`**: the string to filter to. For string fields, this
 *       can be a regular expression.
 * @param {number} options.maxApiCalls - Maximum number of API calls to make.
 * @param {number} options.maxResults - Maximum number of autoscalers to return.
 * @param {string} options.pageToken - A previously-returned page token
 *     representing part of the larger set of results to view.
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request.
 * @param {module:compute/autoscaler[]} callback.autoscalers - Autoscaler
 *     objects from your project.
 * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * zone.getAutoscalers(function(err, autoscalers) {
 *   // autoscalers is an array of `Autoscaler` objects.
 * });
 *
 * //-
 * // To control how many API requests are made and page through the results
 * // manually, set `autoPaginate` to `false`.
 * //-
 * function callback(err, autoscalers, nextQuery, apiResponse) {
 *   if (nextQuery) {
 *     // More results exist.
 *     zone.getAutoscalers(nextQuery, callback);
 *   }
 * }
 *
 * zone.getAutoscalers({
 *   autoPaginate: false
 * }, callback);
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * zone.getAutoscalers().then(function(data) {
 *   var autoscalers = data[0];
 * });
 */
Zone.prototype.getAutoscalers = function(options, callback) {
  var self = this;

  if (is.fn(options)) {
    callback = options;
    options = {};
  }

  options = options || {};

  this.request({
    uri: '/autoscalers',
    qs: options
  }, function(err, resp) {
    if (err) {
      callback(err, null, null, resp);
      return;
    }

    var nextQuery = null;

    if (resp.nextPageToken) {
      nextQuery = extend({}, options, {
        pageToken: resp.nextPageToken
      });
    }

    var autoscalers = arrify(resp.items).map(function(autoscaler) {
      var autoscalerInstance = self.autoscaler(autoscaler.name);
      autoscalerInstance.metadata = autoscaler;

      return autoscalerInstance;
    });

    callback(null, autoscalers, nextQuery, resp);
  });
};

/**
 * Get a list of {module:compute/autoscaler} objects from this zone as a
 * readable object stream.
 *
 * @param {object=} options - Configuration object. See
 *     {module:compute/zone#getAutoscalers} for a complete list of options.
 * @return {stream}
 *
 * @example
 * zone.getAutoscalersStream()
 *   .on('error', console.error)
 *   .on('data', function(autoscaler) {
 *     // `autoscaler` is an `Autoscaler` object.
 *   })
 *   .on('end', function() {
 *     // All autoscalers retrieved.
 *   });
 *
 * //-
 * // If you anticipate many results, you can end a stream early to prevent
 * // unnecessary processing and API requests.
 * //-
 * zone.getAutoscalersStream()
 *   .on('data', function(autoscaler) {
 *     this.end();
 *   });
 */
Zone.prototype.getAutoscalersStream =
  common.paginator.streamify('getAutoscalers');

/**
 *  Get a list of disks in this zone.
 *
 * @resource [Disks Overview]{@link https://cloud.google.com/compute/docs/disks}
 * @resource [Disks: list API Documentation]{@link https://cloud.google.com/compute/docs/reference/v1/disks/list}
 *
 * @param {object=} options - Disk search options.
 * @param {boolean} options.autoPaginate - Have pagination handled
 *     automatically. Default: true.
 * @param {string} options.filter - Search filter in the format of
  *     `{name} {comparison} {filterString}`.
  *     - **`name`**: the name of the field to compare
  *     - **`comparison`**: the comparison operator, `eq` (equal) or `ne`
  *       (not equal)
  *     - **`filterString`**: the string to filter to. For string fields, this
  *       can be a regular expression.
 * @param {number} options.maxApiCalls - Maximum number of API calls to make.
 * @param {number} options.maxResults - Maximum number of disks to return.
 * @param {string} options.pageToken - A previously-returned page token
 *     representing part of the larger set of results to view.
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request.
 * @param {module:compute/disk[]} callback.disks - Disk objects from this zone.
 * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * zone.getDisks(function(err, disks) {
 *   // `disks` is an array of `Disk` objects.
 * });
 *
 * //-
 * // To control how many API requests are made and page through the results
 * // manually, set `autoPaginate` to `false`.
 * //-
 * function callback(err, disks, nextQuery, apiResponse) {
 *   if (nextQuery) {
 *     // More results exist.
 *     zone.getDisks(nextQuery, callback);
 *   }
 * }
 *
 * zone.getDisks({
 *   autoPaginate: false
 * }, callback);
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * zone.getDisks().then(function(data) {
 *   var disks = data[0];
 * });
 */
Zone.prototype.getDisks = function(options, callback) {
  var self = this;

  if (is.fn(options)) {
    callback = options;
    options = {};
  }

  options = options || {};

  this.request({
    uri: '/disks',
    qs: options
  }, function(err, resp) {
    if (err) {
      callback(err, null, null, resp);
      return;
    }

    var nextQuery = null;

    if (resp.nextPageToken) {
      nextQuery = extend({}, options, {
        pageToken: resp.nextPageToken
      });
    }

    var disks = (resp.items || []).map(function(disk) {
      var diskInstance = self.disk(disk.name);
      diskInstance.metadata = disk;
      return diskInstance;
    });

    callback(null, disks, nextQuery, resp);
  });
};

/**
 * Get a list of {module:compute/disk} objects in this zone as a readable object
 * stream.
 *
 * @param {object=} options - Configuration object. See
 *     {module:compute/zone#getDisks} for a complete list of options.
 * @return {stream}
 *
 * @example
 * zone.getDisksStream()
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
 * zone.getDisksStream()
 *   .on('data', function(disk) {
 *     this.end();
 *   });
 */
Zone.prototype.getDisksStream = common.paginator.streamify('getDisks');

/**
 * Get a list of instance groups for this zone.
 *
 * @resource [InstanceGroups Overview]{@link https://cloud.google.com/compute/docs/reference/v1/instanceGroups}
 * @resource [InstanceGroups: list API Documentation]{@link https://cloud.google.com/compute/docs/reference/v1/instanceGroups/list}
 *
 * @param {object=} options - Instance group search options.
 * @param {boolean} options.autoPaginate - Have pagination handled
 *     automatically. Default: true.
 * @param {string} options.filter - Search filter in the format of
 *     `{name} {comparison} {filterString}`.
 *     - **`name`**: the name of the field to compare
 *     - **`comparison`**: the comparison operator, `eq` (equal) or `ne`
 *       (not equal)
 *     - **`filterString`**: the string to filter to. For string fields, this
 *       can be a regular expression.
 * @param {number} options.maxApiCalls - Maximum number of API calls to make.
 * @param {number} options.maxResults - Maximum number of instance groups to
 *     return.
 * @param {string} options.pageToken - A previously-returned page token
 *     representing part of the larger set of results to view.
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request.
 * @param {module:compute/instance-group[]} callback.instanceGroups -
 *     InstanceGroup objects from this zone.
 * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * zone.getInstanceGroups(function(err, instanceGroups) {
 *   // `instanceGroups` is an array of `InstanceGroup` objects.
 * });
 *
 * //-
 * // To control how many API requests are made and page through the results
 * // manually, set `autoPaginate` to `false`.
 * //-
 * function callback(err, instanceGroups, nextQuery, apiResponse) {
 *   if (nextQuery) {
 *     // More results exist.
 *     zone.getInstanceGroups(nextQuery, callback);
 *   }
 * }
 *
 * zone.getInstanceGroups({
 *   autoPaginate: false
 * }, callback);
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * zone.getInstanceGroups().then(function(data) {
 *   var instanceGroups = data[0];
 * });
 */
Zone.prototype.getInstanceGroups = function(options, callback) {
  var self = this;

  if (is.fn(options)) {
    callback = options;
    options = {};
  }

  options = options || {};

  this.request({
    uri: '/instanceGroups',
    qs: options
  }, function(err, resp) {
    if (err) {
      callback(err, null, null, resp);
      return;
    }

    var nextQuery = null;

    if (resp.nextPageToken) {
      nextQuery = extend({}, options, {
        pageToken: resp.nextPageToken
      });
    }

    var instanceGroups = (resp.items || []).map(function(instanceGroup) {
      var instanceGroupInstance = self.instanceGroup(instanceGroup.name);
      instanceGroupInstance.metadata = instanceGroup;
      return instanceGroupInstance;
    });

    callback(null, instanceGroups, nextQuery, resp);
  });
};

/**
 * Get a list of {module:compute/instanceGroup} objects for this zone as a
 * readable object stream.
 *
 * @param {object=} options - Configuration object. See
 *     {module:compute/zone#getInstanceGroups} for a complete list of options.
 * @return {stream}
 *
 * @example
 * zone.getInstanceGroupsStream()
 *   .on('error', console.error)
 *   .on('data', function(instanceGroup) {
 *     // `instanceGroup` is an `InstanceGroup` object.
 *   })
 *   .on('end', function() {
 *     // All instance groups retrieved.
 *   });
 *
 * //-
 * // If you anticipate many results, you can end a stream early to prevent
 * // unnecessary processing and API requests.
 * //-
 * zone.getInstanceGroupsStream()
 *   .on('data', function(instanceGroup) {
 *     this.end();
 *   });
 */
Zone.prototype.getInstanceGroupsStream =
  common.paginator.streamify('getInstanceGroups');

/**
 * Get a list of machine types for this zone.
 *
 * @resource [MachineTypes: list API Documentation]{@link https://cloud.google.com/compute/docs/reference/v1/machineTypes/list}
 * @resource [Machine Types Overview]{@link https://cloud.google.com/compute/docs/machine-types}
 * @resource [MachineType Resource]{@link https://cloud.google.com/compute/docs/reference/v1/machineTypes}
 *
 * @param {object=} options - Machine type search options.
 * @param {boolean} options.autoPaginate - Have pagination handled
 *     automatically. Default: true.
 * @param {number} options.maxApiCalls - Maximum number of API calls to make.
 * @param {number} options.maxResults - Maximum number of machineTypes
 *     to return.
 * @param {string} options.pageToken - A previously-returned page token
 *     representing part of the larger set of results to view.
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request.
 * @param {module:compute/machine-type[]} callback.machineTypes - MachineType
 *     objects from this zone.
 * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * zone.getMachineTypes(function(err, machineTypes) {
 *   // `machineTypes` is an array of `MachineType` objects.
 * });
 *
 * //-
 * // To control how many API requests are made and page through the results
 * // manually, set `autoPaginate` to `false`.
 * //-
 * function callback(err, machineTypes, nextQuery, apiResponse) {
 *   if (nextQuery) {
 *     // More results exist.
 *     zone.getMachineTypes(nextQuery, callback);
 *   }
 * }
 *
 * zone.getMachineTypes({
 *   autoPaginate: false
 * }, callback);
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * zone.getMachineTypes().then(function(data) {
 *   var machineTypes = data[0];
 * });
 */
Zone.prototype.getMachineTypes = function(options, callback) {
  if (is.fn(options)) {
    callback = options;
    options = {};
  }

  options = extend({}, options, {
    filter: 'zone eq .*' + this.name
  });

  return this.compute.getMachineTypes(options, callback);
};

/**
 * Get a list of {module:compute/machineType} objects for this zone as a
 * readable object stream.
 *
 * @param {object=} options - Configuration object. See
 *     {module:compute/zone#getMachineTypes} for a complete list of options.
 * @return {stream}
 *
 * @example
 * zone.getMachineTypesStream()
 *   .on('error', console.error)
 *   .on('data', function(machineType) {
 *     // `machineType` is a `MachineType` object.
 *   })
 *   .on('end', function() {
 *     // All machine types retrieved.
 *   });
 *
 * //-
 * // If you anticipate many results, you can end a stream early to prevent
 * // unnecessary processing and API requests.
 * //-
 * zone.getMachineTypesStream()
 *   .on('data', function(machineType) {
 *     this.end();
 *   });
 */
Zone.prototype.getMachineTypesStream =
  common.paginator.streamify('getMachineTypes');

/**
 * Get a list of operations for this zone.
 *
 * @resource [Zone Operation Overview]{@link https://cloud.google.com/compute/docs/reference/v1/zoneOperations}
 * @resource [ZoneOperations: list API Documentation]{@link https://cloud.google.com/compute/docs/reference/v1/zoneOperations/list}
 *
 * @param {object=} options - Operation search options.
 * @param {boolean} options.autoPaginate - Have pagination handled
 *     automatically. Default: true.
 * @param {string} options.filter - Search filter in the format of
 *     `{name} {comparison} {filterString}`.
 *     - **`name`**: the name of the field to compare
 *     - **`comparison`**: the comparison operator, `eq` (equal) or `ne`
 *       (not equal)
 *     - **`filterString`**: the string to filter to. For string fields, this
 *       can be a regular expression.
 * @param {number} options.maxApiCalls - Maximum number of API calls to make.
 * @param {number} options.maxResults - Maximum number of operations to return.
 * @param {string} options.pageToken - A previously-returned page token
 *     representing part of the larger set of results to view.
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request.
 * @param {module:compute/operation[]} callback.operations - Operation objects
 *     from this zone.
 * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * zone.getOperations(function(err, operations) {
 *   // `operations` is an array of `Operation` objects.
 * });
 *
 * //-
 * // To control how many API requests are made and page through the results
 * // manually, set `autoPaginate` to `false`.
 * //-
 * function callback(err, operations, nextQuery, apiResponse) {
 *   if (nextQuery) {
 *     // More results exist.
 *     zone.getOperations(nextQuery, callback);
 *   }
 * }
 *
 * zone.getOperations({
 *   autoPaginate: false
 * }, callback);
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * zone.getOperations().then(function(data) {
 *   var operations = data[0];
 * });
 */
Zone.prototype.getOperations = function(options, callback) {
  var self = this;

  if (is.fn(options)) {
    callback = options;
    options = {};
  }

  options = options || {};

  this.request({
    uri: '/operations',
    qs: options
  }, function(err, resp) {
    if (err) {
      callback(err, null, null, resp);
      return;
    }

    var nextQuery = null;

    if (resp.nextPageToken) {
      nextQuery = extend({}, options, {
        pageToken: resp.nextPageToken
      });
    }

    var operations = (resp.items || []).map(function(operation) {
      var operationInstance = self.operation(operation.name);
      operationInstance.metadata = operation;
      return operationInstance;
    });

    callback(null, operations, nextQuery, resp);
  });
};

/**
 * Get a list of {module:compute/operation} objects for this zone as a readable
 * object stream.
 *
 * @param {object=} options - Configuration object. See
 *     {module:compute/zone#getOperations} for a complete list of options.
 * @return {stream}
 *
 * @example
 * zone.getOperationsStream()
 *   .on('error', console.error)
 *   .on('data', function(operation) {
 *     // `operation` is an `Operation` object.
 *   })
 *   .on('end', function() {
 *     // All operations retrieved.
 *   });
 *
 * //-
 * // If you anticipate many results, you can end a stream early to prevent
 * // unnecessary processing and API requests.
 * //-
 * zone.getOperationsStream()
 *   .on('data', function(operation) {
 *     this.end();
 *   });
 */
Zone.prototype.getOperationsStream =
  common.paginator.streamify('getOperations');

/**
 * Get a list of VM instances in this zone.
 *
 * @resource [Instances and Networks]{@link https://cloud.google.com/compute/docs/instances-and-network}
 * @resource [Instances: list API Documentation]{@link https://cloud.google.com/compute/docs/reference/v1/instances/list}
 *
 * @param {object=} options - Instance search options.
 * @param {boolean} options.autoPaginate - Have pagination handled
 *     automatically. Default: true.
 * @param {string} options.filter - Search filter in the format of
 *     `{name} {comparison} {filterString}`.
 *     - **`name`**: the name of the field to compare
 *     - **`comparison`**: the comparison operator, `eq` (equal) or `ne`
 *       (not equal)
 *     - **`filterString`**: the string to filter to. For string fields, this
 *       can be a regular expression.
 * @param {string} options.pageToken - A previously-returned page token
 *     representing part of the larger set of results to view.
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request.
 * @param {module:compute/vm[]} callback.vms - VM objects from this zone.
 * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * zone.getVMs(function(err, vms) {
 *   // `vms` is an array of `VM` objects.
 * });
 *
 * //-
 * // To control how many API requests are made and page through the results
 * // manually, set `autoPaginate` to `false`.
 * //-
 * function callback(err, vms, nextQuery, apiResponse) {
 *   if (nextQuery) {
 *     // More results exist.
 *     zone.getVMs(nextQuery, callback);
 *   }
 * }
 *
 * zone.getVMs({
 *   autoPaginate: false
 * }, callback);
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * zone.getVMs().then(function(data) {
 *   var vms = data[0];
 * });
 */
Zone.prototype.getVMs = function(options, callback) {
  var self = this;

  if (is.fn(options)) {
    callback = options;
    options = {};
  }

  options = options || {};

  this.request({
    uri: '/instances',
    qs: options
  }, function(err, resp) {
    if (err) {
      callback(err, null, null, resp);
      return;
    }

    var nextQuery = null;

    if (resp.nextPageToken) {
      nextQuery = extend({}, options, {
        pageToken: resp.nextPageToken
      });
    }

    var vms = (resp.items || []).map(function(instance) {
      var vmInstance = self.vm(instance.name);
      vmInstance.metadata = instance;
      return vmInstance;
    });

    callback(null, vms, nextQuery, resp);
  });
};

/**
 * Get a list of {module:compute/vm} instances in this zone as a readable object
 * stream.
 *
 * @param {object=} options - Configuration object. See
 *     {module:compute/zone#getVMs} for a complete list of options.
 * @return {stream}
 *
 * @example
 * zone.getVMsStream()
 *   .on('error', console.error)
 *   .on('data', function(vm) {
 *     // `vm` is a `VM` object.
 *   })
 *   .on('end', function() {
 *     // All instances retrieved.
 *   });
 *
 * //-
 * // If you anticipate many results, you can end a stream early to prevent
 * // unnecessary processing and API requests.
 * //-
 * zone.getVMsStream()
 *   .on('data', function(vm) {
 *     this.end();
 *   });
 */
Zone.prototype.getVMsStream = common.paginator.streamify('getVMs');

/**
 * Get a reference to a Google Compute Engine instance group.
 *
 * @resource [InstanceGroups Overview]{@link https://cloud.google.com/compute/docs/reference/v1/instanceGroups}
 *
 * @param {string} name - Name of the existing instance group.
 * @return {module:compute/instance-group}
 *
 * @example
 * var instanceGroup = zone.instanceGroup('my-instance-group');
 */
Zone.prototype.instanceGroup = function(name) {
  return new InstanceGroup(this, name);
};

/**
 * Get a reference to a Google Compute Engine machine type.
 *
 * @resource [Machine Types Overview]{@link https://cloud.google.com/compute/docs/machine-types}
 * @resource [MachineType Resource]{@link https://cloud.google.com/compute/docs/reference/v1/machineTypes}
 *
 * @param {string} name - Name of the existing machine type.
 * @return {module:compute/machine-type}
 *
 * @example
 * var machienType = zone.machineType('g1-small');
 */
Zone.prototype.machineType = function(name) {
  return new MachineType(this, name);
};

/**
 * Get a reference to a Google Compute Engine zone operation.
 *
 * @resource [Zone Operation Overview]{@link https://cloud.google.com/compute/docs/reference/v1/zoneOperations}
 *
 * @param {string} name - Name of the existing operation.
 * @return {module:compute/operation}
 *
 * @example
 * var operation = zone.operation('operation-1445532685163-8b137d2a-1822afe7');
 */
Zone.prototype.operation = function(name) {
  return new Operation(this, name);
};

/**
 * Get a reference to a Google Compute Engine virtual machine instance.
 *
 * @resource [Instances and Networks]{@link https://cloud.google.com/compute/docs/instances-and-network}
 *
 * @param {string} name - Name of the virtual machine.
 * @return {module:compute/vm}
 *
 * @example
 * var vm = zone.vm('vm-name');
 */
Zone.prototype.vm = function(name) {
  return new VM(this, name);
};

/**
 * This method attempts to create a firewall rule to allow tcp:80 connections.
 *
 * @private
 *
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - If the firewall couldn't be created and it
 *     didn't already exist.
 */
Zone.prototype.createHttpServerFirewall_ = function(callback) {
  this.compute.createFirewall('default-allow-http', {
    protocols: {
      tcp: [80]
    },
    ranges: ['0.0.0.0/0'],
    tags: ['http-server']
  }, function(err) {
    // If it already exists, we're all good.
    callback(err && err.code !== 409 ? err : null);
  });
};

/**
 * This method attempts to create a firewall rule to allow tcp:443 connections.
 *
 * @private
 *
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - If the firewall couldn't be created and it
 *     didn't already exist.
 */
Zone.prototype.createHttpsServerFirewall_ = function(callback) {
  this.compute.createFirewall('default-allow-https', {
    protocols: {
      tcp: [443]
    },
    ranges: ['0.0.0.0/0'],
    tags: ['https-server']
  }, function(err) {
    // If it already exists, we're all good.
    callback(err && err.code !== 409 ? err : null);
  });
};

/*! Developer Documentation
 *
 * These methods can be auto-paginated.
 */
common.paginator.extend(Zone, [
  'getAutoscalers',
  'getDisks',
  'getInstanceGroups',
  'getMachineTypes',
  'getOperations',
  'getVMs'
]);

/*! Developer Documentation
 *
 * All async methods (except for streams) will return a Promise in the event
 * that a callback is omitted.
 */
common.util.promisifyAll(Zone, {
  exclude: [
    'autoscaler',
    'disk',
    'instanceGroup',
    'machineType',
    'operation',
    'vm'
  ]
});

module.exports = Zone;
