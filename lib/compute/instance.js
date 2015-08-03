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
 * Create a Instance object to interact with a Google Compute Engine instance.
 *
 * @constructor
 * @alias module:compute/istance
 *
 * @throws {Error} if an instance name or a zone are not provided.
 *
 * @param {module:zone} zone - The Google Compute Engine Zone this
 *     instance belongs to.
 * @param {string} name - Name of the instance.
 * @param {object=} metadata - Instance metadata.
 *
 * @example
 * var gcloud = require('gcloud');
 *
 * var compute = gcloud.compute({
 *   projectId: 'grape-spaceship-123'
 * });
 *
 * var myZone = compute.zone('zone-name');
 *
 * var instance = myZone.instance('instance1');
 */
function Instance(zone, name, metadata) {
  this.name = name;
  this.zone = zone;
  this.metadata = metadata;

  if (!util.is(this.name, 'string')) {
    throw Error('A name is needed to use a Compute Engine Instance.');
  }
  if (!this.zone) {
    throw Error('A zone is needed to use a Compute Engine Instance.');
  }
}

/**
 * Delete the instance.
 *
 * @param {function} callback - The callback function.
 *
 * @example
 * instance.delete(function(err, operation) {
 *   // `operation` is an Operation object and can be used to check the status
 *   // of instance deletion.
 * });
 */
Instance.prototype.delete = function(callback) {
  callback = callback || util.noop;
  var zone = this.zone;
  this.makeReq_('DELETE', '', null, true, function(err, resp) {
    if (err) {
      callback(err);
      return;
    }
    var operation = zone.operation(resp.name);
    operation.metadata = resp;
    callback(null, operation);
  });
};

/**
 * Get the instances's metadata.
 *
 * @param {function=} callback - The callback function.
 *
 * @example
 * instance.getMetadata(function(err, metadata, apiResponse) {});
 */
Instance.prototype.getMetadata = function(callback) {
  callback = callback || util.noop;
  var self = this;
  this.makeReq_('GET', '', null, null, function(err, resp) {
    if (err) {
      callback(err);
      return;
    }
    self.metadata = resp;
    callback(null, self.metadata, resp);
  });
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
 * var callback = function(err, operation) {
 *   // `operation` is an Operation object and can be used to check the status
 *   // of disk attachment.
 * };
 *
 * instance.attachDisk(
 *   disk,
 *   {
 *     readOnly : true
 *   }, callback);
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
    disk.zone.name +
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

  var zone = this.zone;
  this.makeReq_('POST', '/attachDisk', null, body, function(err, resp) {
    if (err) {
      callback(err);
      return;
    }
    var operation = zone.operation(resp.name);
    operation.metadata = resp;
    callback(null, operation);
  });
};

/**
 * Detach a disk from the instance.
 *
 * @param {string} deviceName - The name of the device to detach.
 * @param {function} callback - The callback function.
 *
 * @example
 * var callback = function(err, operation) {
 *   // `operation` is an Operation object and can be used to check the status
 *   // of disk detachment.
 * };
 *
 * instance.detachDisk(
 *   disk,
 *   {
 *     readOnly : true
 *   }, callback);
 */
Instance.prototype.detachDisk = function(deviceName, callback) {
  if (!util.is(deviceName, 'string')) {
    throw new Error('A device name must be provided.');
  }

  var query = {};
  query.deviceName = deviceName;

  var zone = this.zone;
  this.makeReq_('POST', '/detachDisk', query, null, function(err, resp) {
    if (err) {
      callback(err);
      return;
    }
    var operation = zone.operation(resp.name);
    operation.metadata = resp;
    callback(null, operation);
  });
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
    });
};

/**
 * Reset the instance.
 *
 * @param {function} callback - The callback function.
 *
 * @example
 * instance.reset(function(err, operation) {
 *   // `operation` is an Operation object and can be used to check the status
 *   // of instance reset.
 * });
 */
Instance.prototype.reset = function(callback) {
  callback = callback || util.noop;
  var zone = this.zone;
  this.makeReq_('POST', '/reset', null, null, function(err, resp) {
    if (err) {
      callback(err);
      return;
    }
    var operation = zone.operation(resp.name);
    operation.metadata = resp;
    callback(null, operation);
  });
};

/**
 * Start the instance.
 *
 * @param {function} callback - The callback function.
 *
 * @example
 * instance.start(function(err, operation) {
 *   // `operation` is an Operation object and can be used to check the status
 *   // of instance start.
 * });
 */
Instance.prototype.start = function(callback) {
  callback = callback || util.noop;
  var zone = this.zone;
  this.makeReq_('POST', '/start', null, null, function(err, resp) {
    if (err) {
      callback(err);
      return;
    }
    var operation = zone.operation(resp.name);
    operation.metadata = resp;
    callback(null, operation);
  });
};

/**
 * Stop the instance.
 *
 * @param {function} callback - The callback function.
 *
 * @example
 * instance.stop(function(err, operation) {
 *   // `operation` is an Operation object and can be used to check the status
 *   // of instance stop.
 * });
 */
Instance.prototype.stop = function(callback) {
  callback = callback || util.noop;
  var zone = this.zone;
  this.makeReq_('POST', '/stop', null, null, function(err, resp) {
    if (err) {
      callback(err);
      return;
    }
    var operation = zone.operation(resp.name);
    operation.metadata = resp;
    callback(null, operation);
  });
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
  this.getMetadata(function(err, metadata) {
    if (err) {
      callback(err);
      return;
    }
    callback(null, metadata.tags.items, metadata.tags.fingerprint);
  });
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
 *   instance.setTags(tags, fingerprint, function(err, operation) {
 *     // `operation` is an Operation object and can be used to check the status
 *     // of instance tags set.
 *   });
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
  for (var i = 0; i < tags.length; i++) {
    if (!/^(?:[a-z](?:[-a-z0-9]{0,61}[a-z0-9])?)$/.test(tags[i])) {
      throw new Error('Tags must match [a-z]([-a-z0-9]{0,61}[a-z0-9])?');
    }
  }

  var body = {};
  body.items = tags;
  body.fingerprint = fingerprint;

  var zone = this.zone;
  this.makeReq_('POST', '/setTags', null, body, function(err, resp) {
    if (err) {
      callback(err);
      return;
    }
    var operation = zone.operation(resp.name);
    operation.metadata = resp;
    callback(null, operation);
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
Instance.prototype.makeReq_ = function(method, path, query, body, callback) {
  path = '/instances/' + this.name + path;
  this.zone.makeReq_(method, path, query, body, callback);
};

module.exports = Instance;
