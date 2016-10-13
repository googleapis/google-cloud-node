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
 * @module common/grpc-service-object
 */

'use strict';

var extend = require('extend');
var nodeutil = require('util');

/**
 * @type {module:common/service-object}
 * @private
 */
var ServiceObject = require('./service-object.js');

/**
 * @type {module:common/util}
 * @private
 */
var util = require('./util.js');

/**
 * GrpcServiceObject is a base class, meant to be inherited from by a service
 * object that uses the gRPC protobuf API.
 *
 * @constructor
 * @alias module:common/grpc-service-object
 *
 * @private
 *
 * @param {object} config - Configuration object.
 */
function GrpcServiceObject(config) {
  ServiceObject.call(this, config);
}

nodeutil.inherits(GrpcServiceObject, ServiceObject);

/**
 * Delete the object.
 *
 * @param {function=} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request.
 */
GrpcServiceObject.prototype.delete = function(callback) {
  var protoOpts = this.methods.delete.protoOpts;
  var reqOpts = this.methods.delete.reqOpts;

  this.request(protoOpts, reqOpts, callback || util.noop);
};

/**
 * Get the metadata of this object.
 *
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request.
 * @param {object} callback.metadata - The metadata for this object.
 */
GrpcServiceObject.prototype.getMetadata = function(callback) {
  var self = this;

  var protoOpts = this.methods.getMetadata.protoOpts;
  var reqOpts = this.methods.getMetadata.reqOpts;

  this.request(protoOpts, reqOpts, function(err, resp) {
    if (err) {
      callback(err, null, resp);
      return;
    }

    self.metadata = resp;

    callback(null, self.metadata, resp);
  });
};

/**
 * Set the metadata for this object.
 *
 * @param {object} metadata - The metadata to set on this object.
 * @param {function=} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request.
 */
GrpcServiceObject.prototype.setMetadata = function(metadata, callback) {
  var protoOpts = this.methods.setMetadata.protoOpts;
  var reqOpts = extend(true, {}, this.methods.setMetadata.reqOpts, metadata);

  this.request(protoOpts, reqOpts, callback || util.noop);
};

/**
 * Patch a request to the GrpcService object.
 *
 * @private
 */
GrpcServiceObject.prototype.request = function() {
  return this.parent.request.apply(this.parent, arguments);
};

/**
 * Patch a streaming request to the GrpcService object.
 *
 * @private
 */
GrpcServiceObject.prototype.requestStream = function() {
  return this.parent.requestStream.apply(this.parent, arguments);
};

/**
 * Patch a writable streaming request to the GrpcService object.
 *
 * @private
 */
GrpcServiceObject.prototype.requestWritableStream = function() {
  return this.parent.requestWritableStream.apply(this.parent, arguments);
};

/*! Developer Documentation
 *
 * All async methods (except for streams) will return a Promise in the event
 * that a callback is omitted.
 */
util.promisifyAll(GrpcServiceObject);


module.exports = GrpcServiceObject;
