/*!
 * Copyright 2016 Google Inc. All Rights Reserved.
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
 * @module common/grpcOperation
 */

'use strict';

var modelo = require('modelo');

/**
 * @type {module:common/grpcServiceObject}
 * @private
 */
var GrpcServiceObject = require('./grpc-service-object.js');

/**
 * @type {module:common/operation}
 * @private
 */
var Operation = require('./operation.js');

/**
 * @type {module:common/util}
 * @private
 */
var util = require('./util.js');

// jscs:disable maximumLineLength
/**
 * An Operation object allows you to interact with APIs that take longer to
 * process things.
 *
 * @constructor
 * @alias module:common/grpcOperation
 *
 * @param {module:common/grpcService|module:common/grpcServiceObject} parent - The
 *     parent object. This should be configured to use the longrunning.operation
 *     service.
 * @param {string} name - The operation name.
 */
// jscs:enable maximumLineLength
function GrpcOperation(parent, name) {
  var methods = {

    /**
     * Deletes an operation.
     */
    delete: {
      protoOpts: {
        service: 'Operations',
        method: 'deleteOperation'
      },
      reqOpts: {
        name: name
      }
    },

    /**
     * Checks to see if an operation exists.
     */
    exists: true,

    /**
     * Retrieves the operation.
     */
    get: true,

    /**
     * Retrieves metadata for the operation.
     */
    getMetadata: {
      protoOpts: {
        service: 'Operations',
        method: 'getOperation'
      },
      reqOpts: {
        name: name
      }
    }
  };

  var config = {
    parent: parent,
    id: name,
    methods: methods
  };

  Operation.call(this, config);
  GrpcServiceObject.call(this, config);
}

modelo.inherits(GrpcOperation, GrpcServiceObject, Operation);

/**
 * Cancel the operation.
 *
 * @param {function=} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this
 *     request.
 * @param {object} callback.apiResponse - The full API response.
 */
GrpcOperation.prototype.cancel = function(callback) {
  var protoOpts = {
    service: 'Operations',
    method: 'cancelOperation'
  };

  var reqOpts = {
    name: this.id
  };

  this.request(protoOpts, reqOpts, callback || util.noop);
};

module.exports = GrpcOperation;
