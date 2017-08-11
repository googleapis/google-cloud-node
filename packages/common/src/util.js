/**
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
 * @module common/util
 */

'use strict';

var createErrorClass = require('create-error-class');
var duplexify = require('duplexify');
var ent = require('ent');
var extend = require('extend');
var format = require('string-format-obj');
var googleAuth = require('google-auto-auth');
var is = require('is');
var request = require('request').defaults({
  timeout: 60000,
  gzip: true,
  forever: true,
  pool: {
    maxSockets: Infinity
  }
});
var retryRequest = require('retry-request');
var streamEvents = require('stream-events');
var through = require('through2');
var uniq = require('array-uniq');

var util = module.exports;

var errorMessage = format([
  'Sorry, we cannot connect to Cloud Services without a project ID.',
  'You may specify one with an environment variable named "GCLOUD_PROJECT".',
  'See {baseUrl}/{path} for a detailed guide on creating an authenticated',
  'connection.'
].join(' '), {
  baseUrl: 'https://googlecloudplatform.github.io/google-cloud-node/#',
  path: 'docs/guides/authentication'
});

var missingProjectIdError = new Error(errorMessage);

util.missingProjectIdError = missingProjectIdError;

/**
 * No op.
 *
 * @example
 * function doSomething(callback) {
 *   callback = callback || noop;
 * }
 */
function noop() {}

util.noop = noop;

/**
 * Custom error type for API errors.
 *
 * @param {object} errorBody - Error object.
 */
util.ApiError = createErrorClass('ApiError', function(errorBody) {
  this.code = errorBody.code;
  this.errors = errorBody.errors;
  this.response = errorBody.response;

  try {
    this.errors = JSON.parse(this.response.body).error.errors;
  } catch (e) {}

  var messages = [];

  if (errorBody.message) {
    messages.push(errorBody.message);
  }

  if (this.errors && this.errors.length === 1) {
    messages.push(this.errors[0].message);
  } else if (this.response && this.response.body) {
    messages.push(ent.decode(errorBody.response.body.toString()));
  } else if (!errorBody.message) {
    messages.push('Error during request.');
  }

  this.message = uniq(messages).join(' - ');
});

/**
 * Custom error type for partial errors returned from the API.
 *
 * @param {object} b - Error object.
 */
util.PartialFailureError = createErrorClass('PartialFailureError', function(b) {
  var errorObject = b;

  this.errors = errorObject.errors;
  this.response = errorObject.response;

  var defaultErrorMessage = 'A failure occurred during this request.';
  this.message = errorObject.message || defaultErrorMessage;
});

/**
 * Uniformly process an API response.
 *
 * @param {*} err - Error value.
 * @param {*} resp - Response value.
 * @param {*} body - Body value.
 * @param {function} callback - The callback function.
 */
function handleResp(err, resp, body, callback) {
  callback = callback || util.noop;

  var parsedResp = extend(
    true,
    { err: err || null },
    resp && util.parseHttpRespMessage(resp),
    body && util.parseHttpRespBody(body)
  );

  callback(parsedResp.err, parsedResp.body, parsedResp.resp);
}

util.handleResp = handleResp;

/**
 * Sniff an incoming HTTP response message for errors.
 *
 * @param {object} httpRespMessage - An incoming HTTP response message from
 *     `request`.
 * @return {object} parsedHttpRespMessage - The parsed response.
 * @param {?error} parsedHttpRespMessage.err - An error detected.
 * @param {object} parsedHttpRespMessage.resp - The original response object.
 */
function parseHttpRespMessage(httpRespMessage) {
  var parsedHttpRespMessage = {
    resp: httpRespMessage
  };

  if (httpRespMessage.statusCode < 200 || httpRespMessage.statusCode > 299) {
    // Unknown error. Format according to ApiError standard.
    parsedHttpRespMessage.err = new util.ApiError({
      errors: [],
      code: httpRespMessage.statusCode,
      message: httpRespMessage.statusMessage,
      response: httpRespMessage
    });
  }

  return parsedHttpRespMessage;
}

util.parseHttpRespMessage = parseHttpRespMessage;

/**
 * Parse the response body from an HTTP request.
 *
 * @param {object} body - The response body.
 * @return {object} parsedHttpRespMessage - The parsed response.
 * @param {?error} parsedHttpRespMessage.err - An error detected.
 * @param {object} parsedHttpRespMessage.body - The original body value provided
 *     will try to be JSON.parse'd. If it's successful, the parsed value will be
 *     returned here, otherwise the original value.
 */
function parseHttpRespBody(body) {
  var parsedHttpRespBody = {
    body: body
  };

  if (is.string(body)) {
    try {
      parsedHttpRespBody.body = JSON.parse(body);
    } catch(err) {}
  }

  if (parsedHttpRespBody.body && parsedHttpRespBody.body.error) {
    // Error from JSON API.
    parsedHttpRespBody.err = new util.ApiError(parsedHttpRespBody.body.error);
  }

  return parsedHttpRespBody;
}

util.parseHttpRespBody = parseHttpRespBody;

/**
 * Take a Duplexify stream, fetch an authenticated connection header, and create
 * an outgoing writable stream.
 *
 * @param {Duplexify} dup - Duplexify stream.
 * @param {object} options - Configuration object.
 * @param {module:common/connection} options.connection - A connection instance,
 *     used to get a token with and send the request through.
 * @param {object} options.metadata - Metadata to send at the head of the
 *     request.
 * @param {object} options.request - Request object, in the format of a standard
 *     Node.js http.request() object.
 * @param {string=} options.request.method - Default: "POST".
 * @param {string=} options.request.qs.uploadType - Default: "multipart".
 * @param {string=} options.streamContentType - Default:
 *     "application/octet-stream".
 * @param {function} onComplete - Callback, executed after the writable Request
 *     stream has completed.
 */
function makeWritableStream(dup, options, onComplete) {
  onComplete = onComplete || util.noop;

  var writeStream = through();
  dup.setWritable(writeStream);

  var defaultReqOpts = {
    method: 'POST',
    qs: {
      uploadType: 'multipart'
    }
  };

  var metadata = options.metadata || {};

  var reqOpts = extend(true, defaultReqOpts, options.request, {
    multipart: [
      {
        'Content-Type': 'application/json',
        body: JSON.stringify(metadata)
      },
      {
        'Content-Type': metadata.contentType || 'application/octet-stream',
        body: writeStream
      }
    ]
  });

  options.makeAuthenticatedRequest(reqOpts, {
    onAuthenticated: function(err, authenticatedReqOpts) {
      if (err) {
        dup.destroy(err);
        return;
      }

      request(authenticatedReqOpts, function(err, resp, body) {
        util.handleResp(err, resp, body, function(err, data) {
          if (err) {
            dup.destroy(err);
            return;
          }

          dup.emit('response', resp);
          onComplete(data);
        });
      });
    }
  });
}

util.makeWritableStream = makeWritableStream;

/**
 * Returns true if the API request should be retried, given the error that was
 * given the first time the request was attempted. This is used for rate limit
 * related errors as well as intermittent server errors.
 *
 * @param {error} err - The API error to check if it is appropriate to retry.
 * @return {boolean} True if the API request should be retried, false otherwise.
 */
function shouldRetryRequest(err) {
  if (err) {
    if ([429, 500, 502, 503].indexOf(err.code) !== -1) {
      return true;
    }

    if (err.errors) {
      for (var i in err.errors) {
        var reason = err.errors[i].reason;
        if (reason === 'rateLimitExceeded') {
          return true;
        }
        if (reason === 'userRateLimitExceeded') {
          return true;
        }
      }
    }
  }

  return false;
}

util.shouldRetryRequest = shouldRetryRequest;

/**
 * Get a function for making authenticated requests.
 *
 * @throws {Error} If a projectId is requested, but not able to be detected.
 *
 * @param {object} config - Configuration object.
 * @param {boolean=} config.autoRetry - Automatically retry requests if the
 *     response is related to rate limits or certain intermittent server errors.
 *     We will exponentially backoff subsequent requests by default. (default:
 *     true)
 * @param {object=} config.credentials - Credentials object.
 * @param {boolean=} config.customEndpoint - If true, just return the provided
 *     request options. Default: false.
 * @param {string=} config.email - Account email address, required for PEM/P12
 *     usage.
 * @param {number=} config.maxRetries - Maximum number of automatic retries
 *     attempted before returning the error. (default: 3)
 * @param {string=} config.keyFile - Path to a .json, .pem, or .p12 keyfile.
 * @param {array} config.scopes - Array of scopes required for the API.
 */
function makeAuthenticatedRequestFactory(config) {
  config = config || {};

  var authClient = googleAuth(config);

  /**
   * The returned function that will make an authenticated request.
   *
   * @param {type} reqOpts - Request options in the format `request` expects.
   * @param {object|function} options - Configuration object or callback
   *     function.
   * @param {function=} options.onAuthenticated - If provided, a request will
   *     not be made. Instead, this function is passed the error & authenticated
   *     request options.
   */
  function makeAuthenticatedRequest(reqOpts, options) {
    var stream;
    var reqConfig = extend({}, config);
    var activeRequest_;

    if (!options) {
      stream = duplexify();
      reqConfig.stream = stream;
    }

    function onAuthenticated(err, authenticatedReqOpts) {
      if (!err) {
        try {
          authenticatedReqOpts = util.decorateRequest(
            authenticatedReqOpts,
            extend({ projectId: authClient.projectId }, config)
          );
        } catch(e) {
          err = e;
        }
      }

      if (err) {
        if (stream) {
          stream.destroy(err);
        } else {
          (options.onAuthenticated || options)(err);
        }

        return;
      }

      if (options && options.onAuthenticated) {
        options.onAuthenticated(null, authenticatedReqOpts);
      } else {
        activeRequest_ =
          util.makeRequest(authenticatedReqOpts, reqConfig, options);
      }
    }

    if (reqConfig.customEndpoint) {
      // Using a custom API override. Do not use `google-auto-auth` for
      // authentication. (ex: connecting to a local Datastore server)
      onAuthenticated(null, reqOpts);
    } else {
      authClient.authorizeRequest(reqOpts, onAuthenticated);
    }

    if (stream) {
      return stream;
    }

    return {
      abort: function() {
        if (activeRequest_) {
          activeRequest_.abort();
          activeRequest_ = null;
        }
      }
    };
  }

  makeAuthenticatedRequest.getCredentials =
    authClient.getCredentials.bind(authClient);

  makeAuthenticatedRequest.authClient = authClient;

  return makeAuthenticatedRequest;
}

util.makeAuthenticatedRequestFactory = makeAuthenticatedRequestFactory;

/**
 * Make a request through the `retryRequest` module with built-in error handling
 * and exponential back off.
 *
 * @param {object} reqOpts - Request options in the format `request` expects.
 * @param {object=} config - Configuration object.
 * @param {boolean=} config.autoRetry - Automatically retry requests if the
 *     response is related to rate limits or certain intermittent server errors.
 *     We will exponentially backoff subsequent requests by default. (default:
 *     true)
 * @param {number=} config.maxRetries - Maximum number of automatic retries
 *     attempted before returning the error. (default: 3)
 * @param {function} callback - The callback function.
 */
function makeRequest(reqOpts, config, callback) {
  if (is.fn(config)) {
    callback = config;
    config = {};
  }

  config = config || {};

  var options = {
    request: request,

    retries: config.autoRetry !== false ? config.maxRetries || 3 : 0,

    shouldRetryFn: function(httpRespMessage) {
      var err = util.parseHttpRespMessage(httpRespMessage).err;
      return err && util.shouldRetryRequest(err);
    }
  };

  if (config.stream) {
    var dup = config.stream;
    var requestStream;
    var isGetRequest = (reqOpts.method || 'GET').toUpperCase() === 'GET';

    if (isGetRequest) {
      requestStream = retryRequest(reqOpts, options);
      dup.setReadable(requestStream);
    } else {
      // Streaming writable HTTP requests cannot be retried.
      requestStream = request(reqOpts);
      dup.setWritable(requestStream);
    }

    // Replay the Request events back to the stream.
    requestStream.on('error', dup.destroy.bind(dup))
      .on('response', dup.emit.bind(dup, 'response'))
      .on('complete', dup.emit.bind(dup, 'complete'));

    dup.abort = requestStream.abort;
  } else {
    return retryRequest(reqOpts, options, function(err, response, body) {
      util.handleResp(err, response, body, callback);
    });
  }
}

util.makeRequest = makeRequest;

/**
 * Decorate the options about to be made in a request.
 *
 * @param {object} reqOpts - The options to be passed to `request`.
 * @param {object} config - Service config.
 * @return {object} reqOpts - The decorated reqOpts.
 */
function decorateRequest(reqOpts, config) {
  config = config || {};

  delete reqOpts.autoPaginate;
  delete reqOpts.autoPaginateVal;
  delete reqOpts.objectMode;

  if (is.object(reqOpts.qs)) {
    delete reqOpts.qs.autoPaginate;
    delete reqOpts.qs.autoPaginateVal;
    reqOpts.qs = util.replaceProjectIdToken(reqOpts.qs, config.projectId);
  }

  if (is.object(reqOpts.json)) {
    delete reqOpts.json.autoPaginate;
    delete reqOpts.json.autoPaginateVal;
    reqOpts.json = util.replaceProjectIdToken(reqOpts.json, config.projectId);
  }

  reqOpts.uri = util.replaceProjectIdToken(reqOpts.uri, config.projectId);

  return reqOpts;
}

util.decorateRequest = decorateRequest;

/**
 * Populate the `{{projectId}}` placeholder.
 *
 * @throws {Error} If a projectId is required, but one is not provided.
 *
 * @param {*} - Any input value that may contain a placeholder. Arrays and
 *     objects will be looped.
 * @param {string} projectId - A projectId. If not provided
 * @return {*} - The original argument with all placeholders populated.
 */
function replaceProjectIdToken(value, projectId) {
  if (is.array(value)) {
    value = value.map(function(val) {
      return replaceProjectIdToken(val, projectId);
    });
  }

  if (is.object(value) && is.fn(value.hasOwnProperty)) {
    for (var opt in value) {
      if (value.hasOwnProperty(opt)) {
        value[opt] = replaceProjectIdToken(value[opt], projectId);
      }
    }
  }

  if (is.string(value) && value.indexOf('{{projectId}}') > -1) {
    if (!projectId) {
      throw util.missingProjectIdError;
    }
    value = value.replace(/{{projectId}}/g, projectId);
  }

  return value;
}

util.replaceProjectIdToken = replaceProjectIdToken;

/**
 * Extend a global configuration object with user options provided at the time
 * of sub-module instantiation.
 *
 * Connection details currently come in two ways: `credentials` or
 * `keyFilename`. Because of this, we have a special exception when overriding a
 * global configuration object. If a user provides either to the global
 * configuration, then provides another at submodule instantiation-time, the
 * latter is preferred.
 *
 * @param  {object} globalConfig - The global configuration object.
 * @param  {object=} overrides - The instantiation-time configuration object.
 * @return {object}
 */
function extendGlobalConfig(globalConfig, overrides) {
  globalConfig = globalConfig || {};
  overrides = overrides || {};

  var defaultConfig = {};

  if (process.env.GCLOUD_PROJECT) {
    defaultConfig.projectId = process.env.GCLOUD_PROJECT;
  }

  var options = extend({}, globalConfig);

  var hasGlobalConnection = options.credentials || options.keyFilename;
  var isOverridingConnection = overrides.credentials || overrides.keyFilename;

  if (hasGlobalConnection && isOverridingConnection) {
    delete options.credentials;
    delete options.keyFilename;
  }

  var extendedConfig = extend(true, defaultConfig, options, overrides);

  // Preserve the original (not cloned) interceptors.
  extendedConfig.interceptors_ = globalConfig.interceptors_;

  return extendedConfig;
}

util.extendGlobalConfig = extendGlobalConfig;

/**
 * Merge and validate API configurations.
 *
 * @param {object} globalContext - gcloud-level context.
 * @param {object} globalContext.config_ - gcloud-level configuration.
 * @param {object} localConfig - Service-level configurations.
 * @param {object=} options - Configuration object.
 * @param {boolean} options.projectIdRequired - Whether to throw if a project ID
 *     is required, but not provided by the user. (Default: true)
 * @return {object} config - Merged and validated configuration.
 */
function normalizeArguments(globalContext, localConfig, options) {
  options = options || {};

  var globalConfig = globalContext && globalContext.config_;

  return util.extendGlobalConfig(globalConfig, localConfig);
}

util.normalizeArguments = normalizeArguments;

/**
 * Limit requests according to a `maxApiCalls` limit.
 *
 * @param {function} makeRequestFn - The function that will be called.
 * @param {object=} options - Configuration object.
 * @param {number} options.maxApiCalls - The maximum number of API calls to
 *     make.
 */
function createLimiter(makeRequestFn, options) {
  var stream = streamEvents(through.obj());

  var requestsMade = 0;
  var requestsToMake = -1;

  options = options || {};

  if (is.number(options.maxApiCalls)) {
    requestsToMake = options.maxApiCalls;
  }

  return {
    makeRequest: function() {
      requestsMade++;

      if (requestsToMake >= 0 && requestsMade > requestsToMake) {
        stream.push(null);
        return;
      }

      makeRequestFn.apply(null, arguments);

      return stream;
    },

    stream: stream
  };
}

util.createLimiter = createLimiter;

function isCustomType(unknown, module) {
  function getConstructorName(obj) {
    return obj.constructor && obj.constructor.name.toLowerCase();
  }

  var moduleNameParts = module.split('/');

  var parentModuleName = moduleNameParts[0] && moduleNameParts[0].toLowerCase();
  var subModuleName = moduleNameParts[1] && moduleNameParts[1].toLowerCase();

  if (subModuleName && getConstructorName(unknown) !== subModuleName) {
    return false;
  }

  var walkingModule = unknown;
  do {
    if (getConstructorName(walkingModule) === parentModuleName) {
      return true;
    }
  } while ((walkingModule = walkingModule.parent));

  return false;
}

util.isCustomType = isCustomType;

/**
 * Create a properly-formatted User-Agent string from a package.json file.
 *
 * @param {object} packageJson - A module's package.json file.
 * @return {string} userAgent - The formatted User-Agent string.
 */
function getUserAgentFromPackageJson(packageJson) {
  var hyphenatedPackageName = packageJson.name
    .replace('@google-cloud', 'gcloud-node') // For legacy purposes.
    .replace('/', '-'); // For UA spec-compliance purposes.

  return hyphenatedPackageName + '/' + packageJson.version;
}

util.getUserAgentFromPackageJson = getUserAgentFromPackageJson;

/**
 * Wraps a callback style function to conditionally return a promise.
 *
 * @param {function} originalMethod - The method to promisify.
 * @param {object=} options - Promise options.
 * @param {boolean} options.singular - Resolve the promise with single arg
 *     instead of an array.
 * @return {function} wrapped
 */
function promisify(originalMethod, options) {
  if (originalMethod.promisified_) {
    return originalMethod;
  }

  options = options || {};

  var slice = Array.prototype.slice;

  var wrapper = function() {
    var context = this;
    var last;

    for (last = arguments.length - 1; last >= 0; last--) {
      var arg = arguments[last];

      if (is.undefined(arg)) {
        continue; // skip trailing undefined.
      }

      if (!is.fn(arg)) {
        break; // non-callback last argument found.
      }

      return originalMethod.apply(context, arguments);
    }

    // peel trailing undefined.
    var args = slice.call(arguments, 0, last + 1);

    var PromiseCtor = Promise;

    // Because dedupe will likely create a single install of
    // @google-cloud/common to be shared amongst all modules, we need to
    // localize it at the Service level.
    if (context && context.Promise) {
      PromiseCtor = context.Promise;
    }

    return new PromiseCtor(function(resolve, reject) {
      args.push(function() {
        var callbackArgs = slice.call(arguments);
        var err = callbackArgs.shift();

        if (err) {
          return reject(err);
        }

        if (options.singular && callbackArgs.length === 1) {
          resolve(callbackArgs[0]);
        } else {
          resolve(callbackArgs);
        }
      });

      originalMethod.apply(context, args);
    });
  };

  wrapper.promisified_ = true;
  return wrapper;
}

util.promisify = promisify;

/**
 * Promisifies certain Class methods. This will not promisify private or
 * streaming methods.
 *
 * @param {module:common/service} Class - Service class.
 * @param {object=} options - Configuration object.
 */
function promisifyAll(Class, options) {
  var exclude = options && options.exclude || [];

  var methods = Object
    .keys(Class.prototype)
    .filter(function(methodName) {
      return is.fn(Class.prototype[methodName]) && // is it a function?
        !/(^\_|(Stream|\_)|promise$)/.test(methodName) && // is it promisable?
        exclude.indexOf(methodName) === -1; // is it blacklisted?
    });

  methods.forEach(function(methodName) {
    var originalMethod = Class.prototype[methodName];

    if (!originalMethod.promisified_) {
      Class.prototype[methodName] = util.promisify(originalMethod, options);
    }
  });
}

util.promisifyAll = promisifyAll;
