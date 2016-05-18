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
 * @module common/grpc-service
 */

'use strict';

var extend = require('extend');
var googleProtoFiles = require('google-proto-files');
var grpc = require('grpc');
var is = require('is');
var nodeutil = require('util');
var path = require('path');
var retryRequest = require('retry-request');

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
 * @constructor
 * @alias module:common/grpc-service
 *
 * @param {object} config - Configuration object.
 * @param {string} config.baseUrl - The base URL to make API requests to.
 * @param {string[]} config.scopes - The scopes required for the request.
 * @param {string} config.service - The name of the service.
 * @param {object=} config.protoServices - Directly provide the required proto
 *     files. This is useful when a single class requires multiple services.
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

  if (config.customEndpoint) {
    this.grpcCredentials = grpc.credentials.createInsecure();
  }

  this.maxRetries = config.maxRetries;

  var apiVersion = config.apiVersion;
  var service = this.service = config.service;
  var rootDir = googleProtoFiles('..');

  this.activeServiceMap_ = new Map();
  this.protos = {};

  var protoServices = config.protoServices;

  if (!protoServices) {
    protoServices = {};
    protoServices[service] = googleProtoFiles[service][apiVersion];
  }

  for (var protoService in protoServices) {
    var protoFilePath = protoServices[protoService];
    var grpcOpts = {
      binaryAsBase64: true,
      convertFieldsToCamelCase: true
    };

    this.protos[protoService] = grpc.load({
      root: rootDir,
      file: path.relative(rootDir, protoFilePath)
    }, 'proto', grpcOpts).google[service][apiVersion];
  }
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
  var proto;

  if (this.protos[protoOpts.service]) {
    proto = this.protos[protoOpts.service];
  } else {
    proto = this.protos[this.service];
  }

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

  // Clean up gcloud-specific options.
  delete reqOpts.autoPaginate;
  delete reqOpts.autoPaginateVal;

  var service = this.activeServiceMap_.get(protoOpts.service);

  if (!service) {
    service = new proto[protoOpts.service](
      this.baseUrl,
      this.grpcCredentials
    );

    this.activeServiceMap_.set(protoOpts.service, service);
  }

  var grpcOpts = {};

  if (is.number(protoOpts.timeout)) {
    grpcOpts.deadline = new Date(Date.now() + protoOpts.timeout);
  }

  // Retains a reference to an error from the response. If the final callback is
  // executed with this as the "response", we return it to the user as an error.
  var respError;

  retryRequest(null, {
    shouldRetryFn: function(resp) {
      return [429, 500, 502, 503].indexOf(resp.code) > -1;
    },

    maxRetries: this.maxRetries,

    // retry-request determines if it should retry from the incoming HTTP
    // response status. gRPC always returns an error proto message. We pass that
    // "error" into retry-request to act as the HTTP response, so it can use the
    // status code to determine if it should retry.
    request: function(_, onResponse) {
      respError = null;

      service[protoOpts.method](reqOpts, grpcOpts, function(err, resp) {
        if (err) {
          if (HTTP_ERROR_CODE_MAP[err.code]) {
            respError = extend(err, HTTP_ERROR_CODE_MAP[err.code]);
            onResponse(null, respError);
            return;
          }

          onResponse(err);
          return;
        }

        onResponse(null, resp);
      });
    }
  }, function(err, resp) {
    if (!err && resp === respError) {
      err = respError;
      resp = null;
    }

    callback(err, resp);
  });
};

/**
 * Convert a raw value to a type-denoted protobuf message-friendly object.
 *
 * @private
 *
 * @param {*} value - The input value.
 * @return {*} - The converted value.
 *
 * @example
 * GrpcService.convertValue_('Hi');
 * // {
 * //   stringValue: 'Hello!'
 * // }
 */
GrpcService.convertValue_ = function(value) {
  var convertedValue;

  if (is.null(value)) {
    convertedValue = {
      nullValue: 0
    };
  } else if (is.number(value)) {
    convertedValue = {
      numberValue: value
    };
  } else if (is.string(value)) {
    convertedValue = {
      stringValue: value
    };
  } else if (is.boolean(value)) {
    convertedValue = {
      boolValue: value
    };
  } else if (Buffer.isBuffer(value)) {
    convertedValue = {
      blobValue: value
    };
  } else if (is.object(value)) {
    convertedValue = {
      structValue: GrpcService.objToStruct_(value)
    };
  } else if (is.date(value)) {
    var seconds = value.getTime() / 1000;
    var secondsRounded = Math.floor(seconds);

    convertedValue = {
      timestampValue: {
        seconds: secondsRounded,
        nanos: Math.floor((seconds - secondsRounded) * 1e9)
      }
    };
  } else if (is.array(value)) {
    convertedValue = {
      listValue: {
        values: value.map(GrpcService.convertValue_)
      }
    };
  } else {
    throw new Error('Value of type ' + typeof value + ' not recognized.');
  }

  return convertedValue;
};

/**
 * Convert an object to a struct.
 *
 * @private
 *
 * @param {object} obj - An object to convert.
 * @return {array} - The converted object.
 *
 * @example
 * GrpcService.objToStruct_({
 *   greeting: 'Hello!',
 *   favNumber: 7,
 *   friendIds: [
 *     1004,
 *     1006
 *   ],
 *   userDetails: {
 *     termsSigned: true
 *   }
 * });
 * // {
 * //   fields: {
 * //     greeting: {
 * //       stringValue: 'Hello!'
 * //     },
 * //     favNumber: {
 * //       numberValue: 7
 * //     },
 * //     friendIds: {
 * //       listValue: [
 * //         {
 * //           numberValue: 1004
 * //         },
 * //         {
 * //           numberValue: 1006
 * //         }
 * //       ]
 * //     },
 * //     userDetails: {
 * //       fields: {
 * //         termsSigned: {
 * //           booleanValue: true
 * //         }
 * //       }
 * //     }
 * //   }
 * // }
 */
GrpcService.objToStruct_ = function(obj) {
  var convertedObject = {
    fields: {}
  };

  for (var prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      convertedObject.fields[prop] = GrpcService.convertValue_(obj[prop]);
    }
  }

  return convertedObject;
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

module.exports = GrpcService;
