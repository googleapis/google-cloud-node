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
 * @module compute/instance
 */

'use strict';

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
 * Create a Instance object to interact with a Google Compute Engine disk.
 *
 * @constructor
 * @alias module:compute/istance
 *
 * @throws {Error} if a disk name or a zone are not provided.
 *
 * @param {module:compute} compute - The Google Compute Engine instance this 
 *     instance belongs to.
 * @param {string} name - Name of the instance.
 * @param {string} zone - Zone to which the instance belongs.
 * @param {object=} metadata - Instance metadata.
 *
 * @example
 * var gcloud = require('gcloud');
 *
 * var compute = gcloud.compute({
 *   projectId: 'grape-spaceship-123'
 * });
 *
 * var instance = compute.instance('instance-1', 'europe-west1-b');
 */
function Instance(compute, name, zone, metadata) {
  this.name = name;
  this.zone = zone;
  this.compute = compute;
  this.metadata = metadata;

  if (!this.name) {
    throw Error('An instance name is needed to create a Compute Instance.');
  }
}

/**
 * Delete the instance.
 *
 * @param {function} callback - The callback function.
 *
 * @example
 * instance.delete(function(err) {});
 */
Instance.prototype.delete = function(callback) {
  callback = callback || util.noop;
  this.makeReq_('DELETE', '', null, true, callback);
};

/**
 * Attach a disk to the instance.
 *
 * @throws {Error} if no disk is provided.
 *
 * @param {module:compute/disk} disk - The disk to attach.
 * @param {object=} options - Disk attach options.
 * @param {boolean=} otpions.boot - If true the disk is attached as a boot disk.
 * @param {boolean=} options.readOnly - If true the disk is attached as 
 *     `READ_ONLY`.
 * @param {number=} options.index - Zero based index assigned from the instance
 *     to the disk.
 * @param {string=} options.deviceName - Device name assigned from the instance 
 *     to the disk.
 * @param {boolean=} options.autoDelete - If true the disk is deleted when the 
 *     instance is deleted.
 * @param {function} callback - The callback function.
 *
 * @example
 * instance.attachDisk(
 *   disk,
 *   {
 *     readOnly : true
 *   }
 *   function(err, apiResponse) {});
 */
Instance.prototype.attachDisk = function(disk, options, callback) {
  if (!disk) {
    throw new Error('A disk must be provided.');
  }
  if (!callback) {
    callback = options;
  }

  var diskPath = 'projects/' +
    this.compute.projectId +
    '/zones/' +
    disk.zone +
    '/disks/' +
    disk.name;

  var body = {};

  body.source = diskPath;

  if (util.is(options.index, 'number')) {
    body.index = options.index;
  }
  if (options.readOnly) {
    body.mode = 'READ_ONLY';
  }
  if (options.deviceName) {
    body.deviceName = options.deviceName;
  }
  if (options.boot) {
    body.boot = options.boot;
  }
  if (options.autoDelete) {
    body.autoDelete = options.autoDelete;
  }

  this.makeReq_('POST', '/attachDisk', null, body, callback);
};

/**
 * Detach a disk from the instance.
 *
 * @param {string} deviceName - The name of the device to detach.
 * @param {function} callback - The callback function.
 *
 * @example
 * instance.detachDisk(
 *   disk,
 *   {
 *     readOnly : true
 *   }
 *   function(err, apiResponse) {});
 */
Instance.prototype.detachDisk = function(deviceName, callback) {
  if (!util.is(deviceName, 'string')) {
    throw new Error('A device name must be provided.');
  }

  var query = {};
  query.deviceName = deviceName;

  this.makeReq_('POST', '/detachDisk', query, null, callback);
};

/**
 * Returns the serial port output for the instance.
 *
 * @param {number=} port - The port from which the output is retrieved.
 *     A number in the interval [1,4] (default is 1).
 * @param {function} callback - The callback function.
 *
 * @example
 * instance.getSerialPortOutput(
 *   4,
 *   function(err, output) {});
 */
Instance.prototype.getSerialPortOutput = function(port, callback) {
  if (!callback) {
    callback = port;
    port = 1;
  }
  if (!util.is(port, 'number') || port < 1 || port > 4) {
    throw new Error('Port must be a number between 1 and 4 (inclusive).');
  }

  var query = {};
  query.port = port;

  this.makeReq_(
    'GET', 
    '/serialPort', 
    query, 
    null, function(err, resp) {
      if (err) {
        callback(err);
        return; 
      }
      callback(null, resp.content);
    }.bind(this));
};

/**
 * Reset the instance.
 *
 * @param {function} callback - The callback function.
 *
 * @example
 * instance.reset(function(err, apiResponse) {});
 */
Instance.prototype.reset = function(callback) {
  callback = callback || util.noop;
  this.makeReq_('POST', '/reset', null, null, callback);
};

/**
 * Start the instance.
 *
 * @param {function} callback - The callback function.
 *
 * @example
 * instance.start(function(err, apiResponse) {});
 */
Instance.prototype.start = function(callback) {
  callback = callback || util.noop;
  this.makeReq_('POST', '/start', null, null, callback);
};

/**
 * Stop the instance.
 *
 * @param {function} callback - The callback function.
 *
 * @example
 * instance.stop(function(err, apiResponse) {});
 */
Instance.prototype.stop = function(callback) {
  callback = callback || util.noop;
  this.makeReq_('POST', '/stop', null, null, callback);
};

/**
 * Get instance's tags and tags fingerprint.
 *
 * @param {function} callback - The callback function.
 *
 * @example
 * instance.getTags(function(err, tags, fingerprint) {});
 */
Instance.prototype.getTags = function(callback) {
  if (!callback) {
    throw new Error('A callback must be provided to get tags');
  }
  this.makeReq_('GET', '', null, null, function(err, resp) {
    if (err) {
      callback(err);
      return; 
    }
    this.metadata = resp;
    callback(null, resp.tags.items, resp.tags.fingerprint);    
  }.bind(this));
};

/**
 * Set instance's tags.
 *
 * @param {{string[]} tags - The new tags for the instance.
 * @param {string} fingerprint - The current tags fingerprint. Up-to-date 
 *     fingerprint must be provided to set tags. 
 * @param {function} callback - The callback function.
 *
 * @example
 * instance.getTags(function(err, tags, fingerprint) {
 *   if (err) throw err;
 *   tags.push('new-tag');
 *   instance.setTags(tags, fingerprint, function(err, apiResponse) {});
 * });
 */
Instance.prototype.setTags = function(tags, fingerprint, callback) {
  callback = callback || util.noop;
  if (!util.is(tags, 'array')) {
    throw new Error('You must provide an array of tags.');
  }
  if (!util.is(fingerprint, 'string')) {
    throw new Error('You must provide a fingerprint.');
  }
  for(var i = 0; i < tags.length; i++) {
    if (!/^(?:[a-z](?:[-a-z0-9]{0,61}[a-z0-9])?)$/.test(tags[i])) {
      throw new Error('Tags must match [a-z]([-a-z0-9]{0,61}[a-z0-9])?');
    }
  }
  
  var body = {};
  body.items = tags;
  body.fingerprint = fingerprint;

  this.makeReq_('POST', '/setTags', null, body, callback);
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
Instance.prototype.makeReq_ = function(method, path, query, body, callback) {
  var reqOpts = {
    method: method,
    qs: query,
    uri: COMPUTE_BASE_URL + this.compute.projectId + 
        '/zones/' + this.zone +
        '/instances/' + this.name + path
  };

  if (body) {
    reqOpts.json = body;
  }

  this.compute.makeAuthorizedRequest_(reqOpts, callback);
};

module.exports = Instance;
