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

/*jshint strict:false, noarg:false */

/**
 * @private
 * @module common/util
 */

var extend = require('extend');
var GoogleAuth = require('google-auth-library');
var is = require('is');
var nodeutil = require('util');
var request = require('request').defaults({
  pool: {
    maxSockets: Infinity
  }
});
var retryRequest = require('retry-request');
var streamForward = require('stream-forward');
var through = require('through2');
var uuid = require('node-uuid');

/** @const {object} gcloud-node's package.json file. */
var PKG = require('../../package.json');

/** @const {string} User agent. */
var USER_AGENT = 'gcloud-node/' + PKG.version;

var util = module.exports;

var missingProjectIdError = new Error([
  'Sorry, we cannot connect to Google Cloud Services without a project ID.',
  'See https://googlecloudplatform.github.io/gcloud-node/#/authorization for',
  'a detailed guide on creating an authorized connection.'
].join(' '));

util.missingProjectIdError = missingProjectIdError;

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
 *
 * @example
 * // globalConfig = {
 * //   credentials: {...}
 * // }
 * Datastore.prototype.dataset = function(options) {
 *   // options = {
 *   //   keyFilename: 'keyfile.json'
 *   // }
 *   return extendGlobalConfig(this.config, options);
 *   // returns:
 *   //   {
 *   //     keyFilename: 'keyfile.json'
 *   //   }
 * };
 */
function extendGlobalConfig(globalConfig, overrides) {
  var options = extend({}, globalConfig);
  var hasGlobalConnection = options.credentials || options.keyFilename;

  overrides = overrides || {};
  var isOverridingConnection = overrides.credentials || overrides.keyFilename;

  if (hasGlobalConnection && isOverridingConnection) {
    delete options.credentials;
    delete options.keyFilename;
  }

  return extend(true, {}, options, overrides);
}

util.extendGlobalConfig = extendGlobalConfig;

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
 * Extend the native Error object.
 *
 * @constructor
 *
 * @param {object} errorBody - Error object.
 */
function ApiError(errorBody) {
  Error.call(this);
  Error.captureStackTrace(this, arguments.callee);
  this.errors = errorBody.errors;
  this.code = errorBody.code;
  this.message = errorBody.message || 'Error during request.';
  this.response = errorBody.response;
}

nodeutil.inherits(ApiError, Error);

util.ApiError = ApiError;

/**
 * Uniformly process an API response.
 *
 * @param {*} err - Error value.
 * @param {*} resp - Response value.
 * @param {*} body - Body value.
 * @param {function} callback - The callback function.
 */
function handleResp(err, resp, body, callback) {
  callback = callback || noop;

  var parsedResp = util.parseApiResp(err, resp, body);

  callback(parsedResp.err, parsedResp.body, parsedResp.resp);
}

util.handleResp = handleResp;

/**
 * From an HTTP response, generate an error if one occurred.
 *
 * @param {*} err - Error value.
 * @param {*} resp - Response value.
 * @param {*=} body - Body value.
 * @return {object} parsedResp - The parsed response.
 * @param {?error} parsedResp.err - An error detected.
 * @param {object} parsedResp.resp - The original response object.
 * @param {*} parsedResp.body - The original body value provided will try to be
 *     JSON.parse'd. If it's successful, the parsed value will be returned here,
 *     otherwise the original value.
 */
function parseApiResp(err, resp, body) {
  var parsedResp = {
    err: err || null,
    body: body,
    resp: resp
  };

  if (resp && (resp.statusCode < 200 || resp.statusCode > 299)) {
    // Unknown error. Format according to ApiError standard.
    parsedResp.err = new util.ApiError({
      errors: [],
      code: resp.statusCode,
      message: resp.statusMessage,
      response: resp
    });
  }

  if (is.string(body)) {
    try {
      parsedResp.body = JSON.parse(body);
    } catch(err) {}
  }

  if (parsedResp.body && parsedResp.body.error) {
    // Error from JSON API.
    parsedResp.err = new util.ApiError(parsedResp.body.error);
  }

  return parsedResp;
}

util.parseApiResp = parseApiResp;

/**
 * Take a Duplexify stream, fetch an authorized connection header, and create an
 * outgoing writable stream.
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
  onComplete = onComplete || noop;

  options = options || {};
  options.metadata = options.metadata || {};

  var boundary = uuid.v4();

  var defaults = {
    method: 'POST',
    qs: {
      uploadType: 'multipart'
    }
  };

  // Extend the provided request object with common defaults.
  //
  // `options.request` takes precedence over the defaults, but not over the
  // headers, as these set up the boundary.
  var reqOpts = extend(true, defaults, options.request, {
    headers: {
      'Content-Type': 'multipart/related; boundary="' + boundary + '"'
    }
  });

  // With the provided connection, be sure we have a valid token before
  // attempting to create a request.
  options.makeAuthorizedRequest(reqOpts, {
    onAuthorized: function(err, authorizedReqOpts) {
      if (err) {
        dup.destroy(err);
        return;
      }

      var streamType =
        options.metadata.contentType || 'application/octet-stream';

      var stream = request(authorizedReqOpts);
      stream.callback = noop;

      // Write the metadata to the request.
      stream.write('--' + boundary + '\n');
      stream.write('Content-Type: application/json\n\n');
      stream.write(JSON.stringify(options.metadata));
      stream.write('\n\n');
      stream.write('--' + boundary + '\n');
      stream.write('Content-Type: ' + streamType + '\n\n');

      // Overwrite the `end` function, so we can close the boundary.
      var oldEndFn = stream.end;
      stream.end = function(data, encoding, callback) {
        data = (data || '') + '\n--' + boundary + '--\n';
        stream.write(data, encoding, callback);
        oldEndFn.apply(this);
      };

      // When the request is complete, parse it. If everything went well, pass
      // the parsed response data to the callback handler.
      stream.on('complete', function(res) {
        util.handleResp(null, res, res.body, function(err, data) {
          if (err) {
            dup.destroy(err);
            return;
          }
          onComplete(data);
        });
      });

      // We have a writable stream - tell Duplexify about it, so it can resume
      // processing incoming data.
      dup.setWritable(stream);

      // Keep part of the stream open to keep Request from closing the
      // connection. Reference: http://goo.gl/zZVSif.
      dup.pipe(stream);
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
        } else if (reason === 'userRateLimitExceeded') {
          return true;
        }
      }
    }
  }

  return false;
}

util.shouldRetryRequest = shouldRetryRequest;

/**
 * Create an Auth Client from Google Auth Library, used to get an access token
 * for authenticating API requests.
 *
 * @param {object} config - Configuration object.
 * @param {object=} config.authClient - AuthClient object. If not provided,
 *     it will be created and cached here.
 * @param {object=} config.credentials - Credentials object.
 * @param {string=} config.email - Account email address, required for PEM/P12
 *     usage.
 * @param {string=} config.keyFile - Path to a .json, .pem, or .p12 keyfile.
 * @param {array} config.scopes - Array of scopes required for the API.
 * @param {function} callback - The callback function.
 */
function getAuthClient(config, callback) {
  if (config.authClient) {
    setImmediate(function() {
      callback(null, config.authClient);
    });
    return;
  }
  var googleAuth = new GoogleAuth();

  if (config.keyFile) {
    var authClient = new googleAuth.JWT();
    authClient.keyFile = config.keyFile;
    authClient.email = config.email;
    authClient.scopes = config.scopes;
    addScope(null, authClient);
  } else if (config.credentials) {
    googleAuth.fromJSON(config.credentials, addScope);
  } else {
    googleAuth.getApplicationDefault(addScope);
  }

  function addScope(err, authClient) {
    if (err) {
      callback(err);
      return;
    }

    if (authClient.createScopedRequired && authClient.createScopedRequired()) {
      authClient = authClient.createScoped(config.scopes);
    }

    config.authClient = authClient;
    callback(null, authClient);
  }
}

util.getAuthClient = getAuthClient;

/**
 * Authenticate a request by extending its headers object with an access token.
 *
 * @param {object} config - Configuration object.
 * @param {object=} config.authClient - AuthClient object. If not provided,
 *     it will be created and cached here.
 * @param {object=} config.credentials - Credentials object.
 * @param {string=} config.email - Account email address, required for PEM/P12
 *     usage.
 * @param {string=} config.keyFile - Path to a .json, .pem, or .p12 keyfile.
 * @param {array} config.scopes - Array of scopes required for the API.
 * @param {object} reqOpts - HTTP request options. Its `headers` object is
 *     created or extended with a valid access token.
 * @param {function} callback - The callback function.
 */
function authorizeRequest(config, reqOpts, callback) {
  util.getAuthClient(config, function(err, authClient) {
    if (err) {
      // google-auth-library returns a "Could not load..." error if it can't get
      // an access token. However, it's possible an API request doesn't need to
      // be authenticated, e.g. when downloading a file from a public bucket. We
      // consider this error a warning, and allow the request to go through
      // without authorization, relying on the upstream API to return an error
      // the user would find more helpful, should one occur.
      if (err.message.indexOf('Could not load') === 0) {
        callback(null, reqOpts);
      } else {
        callback(err);
      }
      return;
    }

    authClient.getAccessToken(function(err, token) {
      if (err) {
        callback(err);
        return;
      }

      var authorizedReqOpts = extend(true, {}, reqOpts, {
        headers: {
          Authorization: 'Bearer ' + token
        }
      });

      callback(null, authorizedReqOpts);
    });
  });
}

util.authorizeRequest = authorizeRequest;

/**
 * Get a function for making authorized requests.
 *
 * @param {object} config - Configuration object.
 * @param {boolean=} config.autoRetry - Automatically retry requests if the
 *     response is related to rate limits or certain intermittent server errors.
 *     We will exponentially backoff subsequent requests by default. (default:
 *     true)
 * @param {object=} config.authClient - AuthClient object. If not provided,
 *     it will be created and cached here.
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
function makeAuthorizedRequestFactory(config) {
  config = config || {};

  /**
   * The returned function that will make an authorized request.
   *
   * @param {type} reqOpts - Request options in the format `request` expects.
   * @param {object|function} options - Configuration object or callback
   *     function.
   * @param {function=} options.onAuthorized - If provided, a request will not
   *     be made. Instead, this function is passed the error & authorized
   *     request options.
   */
  function makeAuthorizedRequest(reqOpts, options) {
    var stream;
    var reqConfig = extend({}, config);

    if (!options) {
      stream = through();
      reqConfig.stream = stream;
    }

    function onAuthorized(err, authorizedReqOpts) {
      if (err) {
        if (stream) {
          stream.destroy(err);
        } else {
          (options.onAuthorized || options)(err);
        }

        return;
      }

      authorizedReqOpts = util.decorateRequest(authorizedReqOpts);

      if (options && options.onAuthorized) {
        options.onAuthorized(null, authorizedReqOpts);
      } else {
        util.makeRequest(authorizedReqOpts, reqConfig, options);
      }
    }

    if (reqConfig.customEndpoint) {
      // Using a custom API override. Do not use `google-auth-library` for
      // authentication. (ex: connecting to a local Datastore server)
      onAuthorized(null, reqOpts);
    } else {
      util.authorizeRequest(reqConfig, reqOpts, onAuthorized);
    }

    if (stream) {
      return stream;
    }
  }

  makeAuthorizedRequest.getCredentials = function(callback) {
    util.getAuthClient(config, function(err, authClient) {
      if (err) {
        callback(err);
        return;
      }

      authClient.authorize(function(err) {
        if (err) {
          callback(err);
          return;
        }

        callback(null, {
          client_email: authClient.email,
          private_key: authClient.key
        });
      });
    });
  };

  return makeAuthorizedRequest;
}

util.makeAuthorizedRequestFactory = makeAuthorizedRequestFactory;

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

    shouldRetryFn: function(resp) {
      var err = util.parseApiResp(null, resp).err;
      return err && util.shouldRetryRequest(err);
    }
  };

  if (config.stream) {
    var requestStream = retryRequest(reqOpts, options);
    config.stream.abort = requestStream.abort;

    // `streamForward` is used to re-emit the events the request stream receives
    // on to the stream the user is holding (config.stream).
    var streamForwardOpts = {
      events: ['error', 'response', 'complete']
    };

    streamForward(requestStream, streamForwardOpts).pipe(config.stream);
  } else {
    retryRequest(reqOpts, options, function(err, response, body) {
      util.handleResp(err, response, body, callback);
    });
  }
}

util.makeRequest = makeRequest;

/**
 * Decorate the options about to be made in a request.
 *
 * @param {object} reqOpts - The options to be passed to `request`.
 * @return {object} reqOpts - The decorated reqOpts.
 */
function decorateRequest(reqOpts) {
  reqOpts.headers = reqOpts.headers || {};
  reqOpts.headers['User-Agent'] = USER_AGENT;

  if (is.object(reqOpts.qs)) {
    delete reqOpts.qs.autoPaginate;
    delete reqOpts.qs.autoPaginateVal;
  }

  if (is.object(reqOpts.json)) {
    delete reqOpts.json.autoPaginate;
    delete reqOpts.json.autoPaginateVal;
  }

  return reqOpts;
}

util.decorateRequest = decorateRequest;
