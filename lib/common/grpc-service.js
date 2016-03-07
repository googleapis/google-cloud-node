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
 * @module common/grpcService
 */

'use strict';

var camelize = require('camelize');
var googleProtoFiles = require('google-proto-files');
var grpc = require('grpc');
var is = require('is');
var nodeutil = require('util');
var path = require('path');
var snakeize = require('snakeize');

/**
 * @type {module:common/service}
 * @private
 */
var Service = require('./service.js');

/**
 * @const {object} - A map of protobuf codes to HTTP status codes.
 * @private
 */
var HTTP_ERROR_CODE_MAP = {
  0: {
    code: 200,
    message: 'OK'
  },

  1: {
    code: 499,
    message: 'Client Closed Request'
  },

  2: {
    code: 500,
    message: 'Internal Server Error'
  },

  3: {
    code: 400,
    message: 'Bad Request'
  },

  4: {
    code: 504,
    message: 'Gateway Timeout'
  },

  5: {
    code: 404,
    message: 'Not Found'
  },

  6: {
    code: 409,
    message: 'Conflict'
  },

  7: {
    code: 403,
    message: 'Forbidden'
  },

  8: {
    code: 429,
    message: 'Too Many Requests'
  },

  9: {
    code: 412,
    message: 'Precondition Failed'
  },

  10: {
    code: 409,
    message: 'Conflict'
  },

  11: {
    code: 400,
    message: 'Bad Request'
  },

  12: {
    code: 501,
    message: 'Not Implemented'
  },

  13: {
    code: 500,
    message: 'Internal Server Error'
  },

  14: {
    code: 503,
    message: 'Service Unavailable'
  },

  15: {
    code: 500,
    message: 'Internal Server Error'
  },

  16: {
    code: 401,
    message: 'Unauthorized'
  }
};

/**
 * Service is a base class, meant to be inherited from by a "service," like
 * BigQuery or Storage.
 *
 * This handles making authenticated requests by exposing a `makeReq_` function.
 *
 * @param {object} config - Configuration object.
 * @param {string} config.baseUrl - The base URL to make API requests to.
 * @param {string[]} config.scopes - The scopes required for the request.
 * @param {object} options - [Configuration object](#/docs/?method=gcloud).
 */
function GrpcService(config, options) {
  if (global.GCLOUD_SANDBOX_ENV) {
    // gRPC has a tendency to cause our doc unit tests to fail, so we prevent
    // any calls to that library from going through.
    // Reference: https://github.com/GoogleCloudPlatform/gcloud-node/pull/1137#issuecomment-193315047
    return global.GCLOUD_SANDBOX_ENV;
  }

  Service.call(this, config, options);

  var service = config.service;
  var apiVersion = config.apiVersion;
  var rootDir = googleProtoFiles('..');

  if (config.customEndpoint) {
    this.grpcCredentials = grpc.credentials.createInsecure();
  }

  this.protoOpts = config.proto;
  this.proto = grpc.load({
    root: rootDir,
    file: path.relative(rootDir, googleProtoFiles[service][apiVersion])
  }).google[service][apiVersion];
}

nodeutil.inherits(GrpcService, Service);

/**
 * Make an authenticated request with gRPC.
 *
 * @param {object} protoOpts - The proto options.
 * @param {string} protoOpts.service - The service name.
 * @param {string} protoOpts.method - The method name.
 * @param {number=} protoOpts.timeout - After how many milliseconds should the
 *     request cancel.
 * @param {object} reqOpts - The request options.
 * @param {function=} callback - The callback function.
 */
GrpcService.prototype.request = function(protoOpts, reqOpts, callback) {
  if (global.GCLOUD_SANDBOX_ENV) {
    return global.GCLOUD_SANDBOX_ENV;
  }

  var self = this;
  var proto = this.proto;

  if (!this.grpcCredentials) {
    // We must establish an authClient to give to grpc.
    this.getGrpcCredentials_(function(err, credentials) {
      if (err) {
        callback(err);
        return;
      }

      self.grpcCredentials = credentials;
      self.request(protoOpts, reqOpts, callback);
    });
    return;
  }

  var grpcOpts = {};

  if (is.number(protoOpts.timeout)) {
    grpcOpts.deadline = new Date(Date.now() + protoOpts.timeout);
  }

  // Clean up gcloud-specific options.
  delete reqOpts.autoPaginate;
  delete reqOpts.autoPaginateVal;

  var service = new proto[protoOpts.service](
    this.baseUrl,
    this.grpcCredentials
  );

  // snakeize and camelize are used to transform camelCase request options to
  // snake_case. This is what ProtoBuf.js (via gRPC) expects. Similarly, the
  // response is in snake_case, which is why we use camelize to return it to
  // camelCase.
  //
  // An option will be added to gRPC to allow us to skip this step:
  // https://github.com/grpc/grpc/issues/5005
  service[protoOpts.method](snakeize(reqOpts), function(err, resp) {
    if (err) {
      if (HTTP_ERROR_CODE_MAP[err.code]) {
        var httpError = HTTP_ERROR_CODE_MAP[err.code];
        err.code = httpError.code;
      }

      callback(err);
      return;
    }

    callback(null, self.convertBuffers_(camelize(resp)));
  }, null, grpcOpts);
};

/**
 * Iterate over an object, finding anything that resembles a Buffer, then
 * convert it to a base64 string representation.
 *
 * @todo Replace this function: https://github.com/grpc/grpc/issues/5006
 *
 * @private
 *
 * @param {*} data - An object or array to iterate over.
 * @return {*} - The converted object.
 */
GrpcService.prototype.convertBuffers_ = function(data) {
  if (is.array(data)) {
    return data.map(this.convertBuffers_.bind(this));
  }

  if (is.object(data)) {
    for (var prop in data) {
      if (data.hasOwnProperty(prop)) {
        var value = data[prop];

        if (Buffer.isBuffer(value)) {
          data[prop] = value.toString('base64');
        } else if (this.isBufferLike_(value)) {
          data[prop] = new Buffer(this.objToArr_(value)).toString('base64');
        } else {
          data[prop] = this.convertBuffers_(value);
        }
      }
    }
  }

  return data;
};

/**
 * To authorize requests through gRPC, we must get the raw google-auth-library
 * auth client object.
 *
 * @private
 *
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error getting an auth client.
 */
GrpcService.prototype.getGrpcCredentials_ = function(callback) {
  this.authClient.getAuthClient(function(err, authClient) {
    if (err) {
      callback(err);
      return;
    }

    var credentials = grpc.credentials.combineChannelCredentials(
      grpc.credentials.createSsl(),
      grpc.credentials.createFromGoogleCredential(authClient)
    );

    callback(null, credentials);
  });
};

/**
 * protobufjs via gRPC returns an object-ified array, like:
 *   {
 *     0: 0,
 *     1: 22
 *   }
 *
 * @todo Replace this function: https://github.com/grpc/grpc/issues/5006
 *
 * @private
 *
 * @param {*} value - Any value.
 * @return {boolean} - Is the object a buffer.
 */
GrpcService.prototype.isBufferLike_ = function(value) {
  if (!is.object(value) || is.empty(value)) {
    return false;
  }

  delete value.length;
  delete value.parent;

  var lastNumber;

  // Is every property name a number?
  return Object.keys(value).every(function(key) {
    var numericKey = parseInt(key, 10);

    if (is.number(lastNumber) && numericKey - lastNumber !== 1) {
      return false;
    }

    lastNumber = numericKey;

    return !isNaN(numericKey) && String(numericKey).length === key.length;
  });
};

/**
 * Convert an array-like object to an array.
 *
 * @todo Replace this function: https://github.com/grpc/grpc/issues/5006
 *
 * @private
 *
 * @param {object} obj - An array-like object.
 * @return {array} - The converted array.
 *
 * @example
 * grpcService.objToArr_({
 *   0: 'a',
 *   1: 'b',
 *   2: 'c'
 * });
 * // ['a', 'b', 'c']
 */
GrpcService.prototype.objToArr_ = function(obj) {
  var arr = [];

  for (var prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      arr.push(obj[prop]);
    }
  }

  return arr;
};

module.exports = GrpcService;
