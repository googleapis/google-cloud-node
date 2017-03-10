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
 * @module commonGrpc/service
 */

'use strict';

var dotProp = require('dot-prop');
var duplexify = require('duplexify');
var extend = require('extend');
var googleProtoFiles = require('google-proto-files');
var grpc = require('grpc');
var is = require('is');
var nodeutil = require('util');
var path = require('path');
var retryRequest = require('retry-request');
var Service = require('@google-cloud/common').Service;
var through = require('through2');
var util = require('@google-cloud/common').util;

/**
 * @const {object} - A map of protobuf codes to HTTP status codes.
 * @private
 */
var GRPC_ERROR_CODE_TO_HTTP = {
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
 * The default configuration for all gRPC requests.
 *
 * @resource [All options]{@link https://github.com/grpc/grpc/blob/13e185419cd177b7fb552601665e43820321a96b/include/grpc/impl/codegen/grpc_types.h#L148}
 *
 * @private
 *
 * @type {object}
 */
var GRPC_REQUEST_OPTIONS = {
  // RE: https://github.com/GoogleCloudPlatform/google-cloud-node/issues/1991
  'grpc.max_send_message_length': -1, // unlimited
  'grpc.max_receive_message_length': -1, // unlimited

  // RE: https://github.com/grpc/grpc/issues/8839
  // RE: https://github.com/grpc/grpc/issues/8382
  // RE: https://github.com/GoogleCloudPlatform/google-cloud-node/issues/1991
  'grpc.initial_reconnect_backoff_ms': 5000
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
 * @param {object} config.grpcMetadata - Metadata to send with every request.
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
    // Reference: https://github.com/GoogleCloudPlatform/google-cloud-node/pull/1137#issuecomment-193315047
    return global.GCLOUD_SANDBOX_ENV;
  }

  Service.call(this, config, options);

  if (config.customEndpoint) {
    this.grpcCredentials = grpc.credentials.createInsecure();
  }

  this.grpcMetadata = new grpc.Metadata();

  if (config.grpcMetadata) {
    for (var prop in config.grpcMetadata) {
      if (config.grpcMetadata.hasOwnProperty(prop)) {
        this.grpcMetadata.add(prop, config.grpcMetadata[prop]);
      }
    }
  }

  this.maxRetries = options.maxRetries;
  this.userAgent = util.getUserAgentFromPackageJson(config.packageJson);

  var apiVersion = config.apiVersion;
  var service = this.service = config.service;

  this.activeServiceMap_ = new Map();
  this.protos = {};

  var protoServices = config.protoServices;

  if (!protoServices) {
    protoServices = {};
    protoServices[service] = googleProtoFiles[service][apiVersion];
  }

  var self = this;

  Object.keys(protoServices).forEach(function(name) {
    var protoConfig = protoServices[name];
    var service = self.loadProtoFile_(protoConfig, config);

    self.protos[name] = service;

    if (protoConfig.baseUrl) {
      service.baseUrl = protoConfig.baseUrl;
    }
  });
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

  var service = this.getService_(protoOpts);
  var metadata = this.grpcMetadata;
  var grpcOpts = extend({}, GRPC_REQUEST_OPTIONS);

  if (is.number(protoOpts.timeout)) {
    grpcOpts.deadline = GrpcService.createDeadline_(protoOpts.timeout);
  }

  try {
    reqOpts = util.decorateRequest(reqOpts, { projectId: this.projectId });
  } catch(e) {
    callback(e);
    return;
  }

  // Retains a reference to an error from the response. If the final callback is
  // executed with this as the "response", we return it to the user as an error.
  var respError;

  var retryOpts = {
    retries: this.maxRetries,
    shouldRetryFn: GrpcService.shouldRetryRequest_,

    // retry-request determines if it should retry from the incoming HTTP
    // response status. gRPC always returns an error proto message. We pass that
    // "error" into retry-request to act as the HTTP response, so it can use the
    // status code to determine if it should retry.
    request: function(_, onResponse) {
      respError = null;

      return service[protoOpts.method](
        reqOpts,
        metadata,
        grpcOpts,
        function(err, resp) {
          if (err) {
            respError = GrpcService.decorateError_(err);

            if (respError) {
              onResponse(null, respError);
              return;
            }

            onResponse(err, resp);
            return;
          }

          onResponse(null, resp);
        });
    }
  };

  return retryRequest(null, retryOpts, function(err, resp) {
    if (!err && resp === respError) {
      err = respError;
      resp = null;
    }

    callback(err, resp);
  });
};

/**
 * Make an authenticated streaming request with gRPC.
 *
 * @param {object} protoOpts - The proto options.
 * @param {string} protoOpts.service - The service.
 * @param {string} protoOpts.method - The method name.
 * @param {number=} protoOpts.timeout - After how many milliseconds should the
 *     request cancel.
 * @param {object} reqOpts - The request options.
 */
GrpcService.prototype.requestStream = function(protoOpts, reqOpts) {
  if (global.GCLOUD_SANDBOX_ENV) {
    return through.obj();
  }

  var self = this;

  if (!protoOpts.stream) {
    protoOpts.stream = through.obj();
  }

  var stream = protoOpts.stream;

  if (!this.grpcCredentials) {
    // We must establish an authClient to give to grpc.
    this.getGrpcCredentials_(function(err, credentials) {
      if (err) {
        stream.destroy(err);
        return;
      }

      self.grpcCredentials = credentials;
      self.requestStream(protoOpts, reqOpts);
    });

    return stream;
  }

  var objectMode = !!reqOpts.objectMode;

  var service = this.getService_(protoOpts);
  var grpcMetadata = this.grpcMetadata;
  var grpcOpts = extend({}, GRPC_REQUEST_OPTIONS);

  if (is.number(protoOpts.timeout)) {
    grpcOpts.deadline = GrpcService.createDeadline_(protoOpts.timeout);
  }

  try {
    reqOpts = util.decorateRequest(reqOpts, { projectId: this.projectId });
  } catch(e) {
    setImmediate(function() {
      stream.destroy(e);
    });
    return stream;
  }

  var retryOpts = {
    retries: this.maxRetries,
    objectMode: objectMode,
    shouldRetryFn: GrpcService.shouldRetryRequest_,

    request: function() {
      return service[protoOpts.method](reqOpts, grpcMetadata, grpcOpts)
        .on('metadata', function() {
          // retry-request requires a server response before it starts emitting
          // data. The closest mechanism grpc provides is a metadata event, but
          // this does not provide any kind of response status. So we're faking
          // it here with code `0` which translates to HTTP 200.
          //
          // https://github.com/GoogleCloudPlatform/google-cloud-node/pull/1444#discussion_r71812636
          var grcpStatus = GrpcService.decorateStatus_({ code: 0 });

          this.emit('response', grcpStatus);
        });
    }
  };

  return retryRequest(null, retryOpts)
    .on('error', function(err) {
      var grpcError = GrpcService.decorateError_(err);

      stream.destroy(grpcError || err);
    })
    .pipe(stream);
};

/**
 * Make an authenticated writable streaming request with gRPC.
 *
 * @param {object} protoOpts - The proto options.
 * @param {string} protoOpts.service - The service.
 * @param {string} protoOpts.method - The method name.
 * @param {number=} protoOpts.timeout - After how many milliseconds should the
 *     request cancel.
 * @param {object} reqOpts - The request options.
 */
GrpcService.prototype.requestWritableStream = function(protoOpts, reqOpts) {
  var stream = protoOpts.stream = protoOpts.stream || duplexify.obj();

  if (global.GCLOUD_SANDBOX_ENV) {
    return stream;
  }

  var self = this;

  if (!this.grpcCredentials) {
    // We must establish an authClient to give to grpc.
    this.getGrpcCredentials_(function(err, credentials) {
      if (err) {
        stream.destroy(err);
        return;
      }

      self.grpcCredentials = credentials;
      self.requestWritableStream(protoOpts, reqOpts);
    });

    return stream;
  }

  var service = this.getService_(protoOpts);
  var grpcMetadata = this.grpcMetadata;
  var grpcOpts = extend({}, GRPC_REQUEST_OPTIONS);

  if (is.number(protoOpts.timeout)) {
    grpcOpts.deadline = GrpcService.createDeadline_(protoOpts.timeout);
  }

  try {
    reqOpts = util.decorateRequest(reqOpts, { projectId: this.projectId });
  } catch (e) {
    setImmediate(function() {
      stream.destroy(e);
    });
    return stream;
  }

  var grpcStream = service[protoOpts.method](reqOpts, grpcMetadata, grpcOpts)
    .on('status', function(status) {
      var grcpStatus = GrpcService.decorateStatus_(status);
      stream.emit('response', grcpStatus || status);
    })
    .on('error', function(err) {
      var grpcError = GrpcService.decorateError_(err);
      stream.destroy(grpcError || err);
    });

  stream.setReadable(grpcStream);
  stream.setWritable(grpcStream);

  return stream;
};

/**
 * Decode a protobuf Struct's value.
 *
 * @private
 *
 * @param {object} value - A Struct's Field message.
 * @return {*} - The decoded value.
 */
GrpcService.decodeValue_ = function(value) {
  switch (value.kind) {
    case 'structValue': {
      return GrpcService.structToObj_(value.structValue);
    }

    case 'nullValue': {
      return null;
    }

    case 'listValue': {
      return value.listValue.values.map(GrpcService.decodeValue_);
    }

    default: {
      return value[value.kind];
    }
  }
};

/**
 * Creates a deadline.
 *
 * @private
 *
 * @param {number} timeout - Timeout in miliseconds.
 * @return {date} deadline - The deadline in Date object form.
 */
GrpcService.createDeadline_ = function(timeout) {
  return new Date(Date.now() + timeout);
};

/**
 * Checks for a grpc status code and extends the error object with additional
 * information.
 *
 * @private
 *
 * @param {error|object} err - The grpc error.
 * @return {error|null}
 */
GrpcService.decorateError_ = function(err) {
  var errorObj = is.error(err) ? err : {};

  return GrpcService.decorateGrpcResponse_(errorObj, err);
};

/**
 * Checks for a grpc status code and extends the supplied object with additional
 * information.
 *
 * @private
 *
 * @param {object} obj - The object to be extended.
 * @param {object} response - The grpc response.
 * @return {object|null}
 */
GrpcService.decorateGrpcResponse_ = function(obj, response) {
  if (response && GRPC_ERROR_CODE_TO_HTTP[response.code]) {
    var defaultResponseDetails = GRPC_ERROR_CODE_TO_HTTP[response.code];
    var message = defaultResponseDetails.message;

    if (response.message) {
      // gRPC error messages can be either stringified JSON or strings.
      try {
        message = JSON.parse(response.message).description;
      } catch(e) {
        message = response.message;
      }
    }

    return extend(true, obj, response, {
      code: defaultResponseDetails.code,
      message: message
    });
  }

  return null;
};

/**
 * Checks for grpc status code and extends the status object with additional
 * information
 *
 * @private
 * @param {object} status - The grpc status.
 * @return {object|null}
 */
GrpcService.decorateStatus_ = function(status) {
  return GrpcService.decorateGrpcResponse_({}, status);
};

/**
 * Function to decide whether or not a request retry could occur.
 *
 * @private
 *
 * @param {object} response - The request response.
 * @return {boolean} shouldRetry
 */
GrpcService.shouldRetryRequest_ = function(response) {
  return [429, 500, 502, 503].indexOf(response.code) > -1;
};

/**
 * Convert an object to a struct.
 *
 * @private
 *
 * @param {object} obj - An object to convert.
 * @param {object=} options - Configuration object.
 * @param {boolean} options.removeCircular - Remove circular references in the
 *     object with a placeholder string.
 * @param {boolean} options.stringify - Stringify un-recognized types.
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
GrpcService.objToStruct_ = function(obj, options) {
  return new GrpcService.ObjectToStructConverter(options).convert(obj);
};

/**
 * Condense a protobuf Struct into an object of only its values.
 *
 * @private
 *
 * @param {object} struct - A protobuf Struct message.
 * @return {object} - The simplified object.
 *
 * @example
 * GrpcService.structToObj_({
 *   fields: {
 *     name: {
 *       kind: 'stringValue',
 *       stringValue: 'Stephen'
 *     }
 *   }
 * });
 * // {
 * //   name: 'Stephen'
 * // }
 */
GrpcService.structToObj_ = function(struct) {
  var convertedObject = {};

  for (var prop in struct.fields) {
    if (struct.fields.hasOwnProperty(prop)) {
      var value = struct.fields[prop];
      convertedObject[prop] = GrpcService.decodeValue_(value);
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
  var self = this;

  this.authClient.getAuthClient(function(err, authClient) {
    if (err) {
      callback(err);
      return;
    }

    var credentials = grpc.credentials.combineChannelCredentials(
      grpc.credentials.createSsl(),
      grpc.credentials.createFromGoogleCredential(authClient)
    );

    if (!self.projectId || self.projectId === '{{projectId}}') {
      self.projectId = authClient.projectId;
    }

    callback(null, credentials);
  });
};

/**
 * Loads a proto file, useful when handling multiple proto files/services
 * within a single instance of GrpcService.
 *
 * @private
 *
 * @param {object} protoConfig - The proto specific configs for this file.
 * @param {object} config - The base config for the GrpcService.
 * @return {object} protoObject - The loaded proto object.
 */
GrpcService.prototype.loadProtoFile_ = function(protoConfig, config) {
  var rootDir = googleProtoFiles('..');

  var grpcOpts = {
    binaryAsBase64: true,
    convertFieldsToCamelCase: true
  };

  if (is.string(protoConfig)) {
    protoConfig = {
      path: protoConfig
    };
  }

  var services = grpc.load({
    root: rootDir,
    file: path.relative(rootDir, protoConfig.path)
  }, 'proto', grpcOpts);

  var serviceName = protoConfig.service || config.service;
  var apiVersion = protoConfig.apiVersion || config.apiVersion;
  var service = dotProp.get(services.google, serviceName);

  return service[apiVersion] || service;
};

/**
 * Retrieves the service object used to make the grpc requests.
 *
 * @private
 *
 * @param {object} protoOpts - The proto options.
 * @return {object} service - The proto service.
 */
GrpcService.prototype.getService_ = function(protoOpts) {
  var proto;

  if (this.protos[protoOpts.service]) {
    proto = this.protos[protoOpts.service];
  } else {
    proto = this.protos[this.service];
  }

  var service = this.activeServiceMap_.get(protoOpts.service);

  if (!service) {
    service = new proto[protoOpts.service](
      proto.baseUrl || this.baseUrl,
      this.grpcCredentials,
      { 'grpc.primary_user_agent': this.userAgent }
    );

    this.activeServiceMap_.set(protoOpts.service, service);
  }

  return service;
};

/**
 * A class that can be used to convert an object to a struct. Optionally this
 * class can be used to erase/throw on circular references during conversion.
 *
 * @private
 *
 * @param {object=} options - Configuration object.
 * @param {boolean} options.removeCircular - Remove circular references in the
 *     object with a placeholder string. (Default: `false`)
 * @param {boolean} options.stringify - Stringify un-recognized types. (Default:
 *     `false`)
 */
function ObjectToStructConverter(options) {
  options = options || {};

  this.seenObjects = new Set();
  this.removeCircular = options.removeCircular === true;
  this.stringify = options.stringify === true;
}

/**
 * Begin the conversion process from a JS object to an encoded gRPC Value
 * message.
 *
 * @param {*} value - The input value.
 * @return {object} - The encoded value.
 *
 * @example
 * ObjectToStructConverter.convert({
 *   aString: 'Hi'
 * });
 * // {
 * //   fields: {
 * //     aString: {
 * //       stringValue: 'Hello!'
 * //     }
 * //   }
 * // }
 */
ObjectToStructConverter.prototype.convert = function(obj) {
  var convertedObject = {
    fields: {}
  };

  this.seenObjects.add(obj);

  for (var prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      var value = obj[prop];

      if (is.undefined(value)) {
        continue;
      }

      convertedObject.fields[prop] = this.encodeValue_(value);
    }
  }

  this.seenObjects.clear();

  return convertedObject;
};

/**
 * Convert a raw value to a type-denoted protobuf message-friendly object.
 *
 * @private
 *
 * @param {*} value - The input value.
 * @return {*} - The encoded value.
 *
 * @example
 * ObjectToStructConverter.encodeValue('Hi');
 * // {
 * //   stringValue: 'Hello!'
 * // }
 */
ObjectToStructConverter.prototype.encodeValue_ = function(value) {
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
    if (this.seenObjects.has(value)) {
      // Circular reference.
      if (!this.removeCircular) {
        throw new Error([
          'This object contains a circular reference. To automatically',
          'remove it, set the `removeCircular` option to true.'
        ].join(' '));
      }
      convertedValue = {
        stringValue: '[Circular]'
      };
    } else {
      convertedValue = {
        structValue: this.convert(value)
      };
    }
  } else if (is.array(value)) {
    convertedValue = {
      listValue: {
        values: value.map(this.encodeValue_.bind(this))
      }
    };
  } else {
    if (!this.stringify) {
      throw new Error('Value of type ' + typeof value + ' not recognized.');
    }

    convertedValue = {
      stringValue: String(value)
    };
  }

  return convertedValue;
};

module.exports = GrpcService;
module.exports.GRPC_ERROR_CODE_TO_HTTP = GRPC_ERROR_CODE_TO_HTTP;
module.exports.GRPC_REQUEST_OPTIONS = GRPC_REQUEST_OPTIONS;
module.exports.ObjectToStructConverter = ObjectToStructConverter;
