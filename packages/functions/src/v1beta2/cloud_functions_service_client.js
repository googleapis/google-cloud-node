/*
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * EDITING INSTRUCTIONS
 * This file was generated from the file
 * https://github.com/googleapis/googleapis/blob/master/google/cloud/functions/v1beta2/functions.proto,
 * and updates to that file get reflected here through a refresh process.
 * For the short term, the refresh process will only be runnable by Google
 * engineers.
 *
 * The only allowed edits are to method and file documentation. A 3-way
 * merge preserves those additions if the generated source changes.
 */
/* TODO: introduce line-wrapping so that it never exceeds the limit. */
/* jscs: disable maximumLineLength */
'use strict';

var configData = require('./cloud_functions_service_client_config');
var extend = require('extend');
var gax = require('google-gax');

var SERVICE_ADDRESS = 'cloudfunctions.googleapis.com';

var DEFAULT_SERVICE_PORT = 443;

var CODE_GEN_NAME_VERSION = 'gapic/0.1.0';

var PAGE_DESCRIPTORS = {
  listFunctions: new gax.PageDescriptor(
      'pageToken',
      'nextPageToken',
      'functions')
};

/**
 * The scopes needed to make gRPC calls to all of the methods defined in
 * this service.
 */
var ALL_SCOPES = [
  'https://www.googleapis.com/auth/cloud-platform'
];

/**
 * A service that application uses to manipulate triggers and functions.
 *
 * This will be created through a builder function which can be obtained by the module.
 * See the following example of how to initialize the module and how to access to the builder.
 * @see {@link cloudFunctionsServiceClient}
 *
 * @example
 * var functionsV1beta2 = require('@google-cloud/functions').v1beta2({
 *   // optional auth parameters.
 * });
 * var client = functionsV1beta2.cloudFunctionsServiceClient();
 *
 * @class
 */
function CloudFunctionsServiceClient(gaxGrpc, grpcClients, opts) {
  opts = opts || {};
  var servicePath = opts.servicePath || SERVICE_ADDRESS;
  var port = opts.port || DEFAULT_SERVICE_PORT;
  var sslCreds = opts.sslCreds || null;
  var clientConfig = opts.clientConfig || {};
  var appName = opts.appName || 'gax';
  var appVersion = opts.appVersion || gax.version;

  var googleApiClient = [
    appName + '/' + appVersion,
    CODE_GEN_NAME_VERSION,
    'gax/' + gax.version,
    'nodejs/' + process.version].join(' ');


  var operationsClient = new gax.lro({
    auth: gaxGrpc.auth,
    grpc: gaxGrpc.grpc
  }).operationsClient({
    servicePath: servicePath,
    port: port,
    sslCreds: sslCreds,
    clientConfig: clientConfig,
    appName: appName,
    appVersion: appVersion
  });

  var longrunningDescriptors = {
    createFunction: new gax.LongrunningDescriptor(
      operationsClient,
      grpcClients.google.cloud.functions.v1beta2.CloudFunction.decode,
      grpcClients.google.cloud.functions.v1beta2.OperationMetadataV1Beta2.decode),
    updateFunction: new gax.LongrunningDescriptor(
      operationsClient,
      grpcClients.google.cloud.functions.v1beta2.CloudFunction.decode,
      grpcClients.google.cloud.functions.v1beta2.OperationMetadataV1Beta2.decode),
    deleteFunction: new gax.LongrunningDescriptor(
      operationsClient,
      grpcClients.google.protobuf.Empty.decode,
      grpcClients.google.cloud.functions.v1beta2.OperationMetadataV1Beta2.decode)
  };

  var defaults = gaxGrpc.constructSettings(
      'google.cloud.functions.v1beta2.CloudFunctionsService',
      configData,
      clientConfig,
      {'x-goog-api-client': googleApiClient});

  var cloudFunctionsServiceStub = gaxGrpc.createStub(
      servicePath,
      port,
      grpcClients.google.cloud.functions.v1beta2.CloudFunctionsService,
      {sslCreds: sslCreds});
  var cloudFunctionsServiceStubMethods = [
    'listFunctions',
    'getFunction',
    'createFunction',
    'updateFunction',
    'deleteFunction',
    'callFunction'
  ];
  cloudFunctionsServiceStubMethods.forEach(function(methodName) {
    this['_' + methodName] = gax.createApiCall(
      cloudFunctionsServiceStub.then(function(cloudFunctionsServiceStub) {
        return cloudFunctionsServiceStub[methodName].bind(cloudFunctionsServiceStub);
      }),
      defaults[methodName],
      PAGE_DESCRIPTORS[methodName] || longrunningDescriptors[methodName]);
  }.bind(this));
}

// Path templates

var LOCATION_PATH_TEMPLATE = new gax.PathTemplate(
    'projects/{project}/locations/{location}');

var FUNCTION_PATH_TEMPLATE = new gax.PathTemplate(
    'projects/{project}/locations/{location}/functions/{function}');

/**
 * Returns a fully-qualified location resource name string.
 * @param {String} project
 * @param {String} location
 * @returns {String}
 */
CloudFunctionsServiceClient.prototype.locationPath = function(project, location) {
  return LOCATION_PATH_TEMPLATE.render({
    project: project,
    location: location
  });
};

/**
 * Parses the locationName from a location resource.
 * @param {String} locationName
 *   A fully-qualified path representing a location resources.
 * @returns {String} - A string representing the project.
 */
CloudFunctionsServiceClient.prototype.matchProjectFromLocationName = function(locationName) {
  return LOCATION_PATH_TEMPLATE.match(locationName).project;
};

/**
 * Parses the locationName from a location resource.
 * @param {String} locationName
 *   A fully-qualified path representing a location resources.
 * @returns {String} - A string representing the location.
 */
CloudFunctionsServiceClient.prototype.matchLocationFromLocationName = function(locationName) {
  return LOCATION_PATH_TEMPLATE.match(locationName).location;
};

/**
 * Returns a fully-qualified function resource name string.
 * @param {String} project
 * @param {String} location
 * @param {String} function
 * @returns {String}
 */
CloudFunctionsServiceClient.prototype.functionPath = function(project, location, function_) {
  return FUNCTION_PATH_TEMPLATE.render({
    project: project,
    location: location,
    function: function_
  });
};

/**
 * Parses the functionName from a function resource.
 * @param {String} functionName
 *   A fully-qualified path representing a function resources.
 * @returns {String} - A string representing the project.
 */
CloudFunctionsServiceClient.prototype.matchProjectFromFunctionName = function(functionName) {
  return FUNCTION_PATH_TEMPLATE.match(functionName).project;
};

/**
 * Parses the functionName from a function resource.
 * @param {String} functionName
 *   A fully-qualified path representing a function resources.
 * @returns {String} - A string representing the location.
 */
CloudFunctionsServiceClient.prototype.matchLocationFromFunctionName = function(functionName) {
  return FUNCTION_PATH_TEMPLATE.match(functionName).location;
};

/**
 * Parses the functionName from a function resource.
 * @param {String} functionName
 *   A fully-qualified path representing a function resources.
 * @returns {String} - A string representing the function.
 */
CloudFunctionsServiceClient.prototype.matchFunctionFromFunctionName = function(functionName) {
  return FUNCTION_PATH_TEMPLATE.match(functionName).function;
};

// Service calls

/**
 * Returns a list of functions that belong to the requested project.
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {string} request.location
 *   The project and location from which the function should be listed,
 *   specified in the format: projects/[PROJECT]/locations/[LOCATION]
 *   If you want to list functions in all locations, use '-' in place of a
 *   location.
 * @param {number=} request.pageSize
 *   The maximum number of resources contained in the underlying API
 *   response. If page streaming is performed per-resource, this
 *   parameter does not affect the return value. If page streaming is
 *   performed per-page, this determines the maximum number of
 *   resources in a page.
 * @param {Object=} options
 *   Optional parameters. You can override the default settings for this call, e.g, timeout,
 *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
 * @param {function(?Error, ?Array, ?Object, ?Object)=} callback
 *   The function which will be called with the result of the API call.
 *
 *   The second parameter to the callback is Array of [CloudFunction]{@link CloudFunction}.
 *
 *   When autoPaginate: false is specified through options, it contains the result
 *   in a single response. If the response indicates the next page exists, the third
 *   parameter is set to be used for the next request object. The fourth parameter keeps
 *   the raw response object of an object representing [ListFunctionsResponse]{@link ListFunctionsResponse}.
 * @return {Promise} - The promise which resolves to an array.
 *   The first element of the array is Array of [CloudFunction]{@link CloudFunction}.
 *
 *   When autoPaginate: false is specified through options, the array has three elements.
 *   The first element is Array of [CloudFunction]{@link CloudFunction} in a single response.
 *   The second element is the next request object if the response
 *   indicates the next page exists, or null. The third element is
 *   an object representing [ListFunctionsResponse]{@link ListFunctionsResponse}.
 *
 *   The promise has a method named "cancel" which cancels the ongoing API call.
 *
 * @example
 *
 * var client = functionsV1beta2.cloudFunctionsServiceClient();
 * var formattedLocation = client.locationPath("[PROJECT]", "[LOCATION]");
 * // Iterate over all elements.
 * client.listFunctions({location: formattedLocation}).then(function(responses) {
 *     var resources = responses[0];
 *     for (var i = 0; i < resources.length; ++i) {
 *         // doThingsWith(resources[i])
 *     }
 * }).catch(function(err) {
 *     console.error(err);
 * });
 *
 * // Or obtain the paged response.
 * var options = {autoPaginate: false};
 * function callback(responses) {
 *     // The actual resources in a response.
 *     var resources = responses[0];
 *     // The next request if the response shows there's more responses.
 *     var nextRequest = responses[1];
 *     // The actual response object, if necessary.
 *     // var rawResponse = responses[2];
 *     for (var i = 0; i < resources.length; ++i) {
 *         // doThingsWith(resources[i]);
 *     }
 *     if (nextRequest) {
 *         // Fetch the next page.
 *         return client.listFunctions(nextRequest, options).then(callback);
 *     }
 * }
 * client.listFunctions({location: formattedLocation}, options)
 *     .then(callback)
 *     .catch(function(err) {
 *         console.error(err);
 *     });
 */
CloudFunctionsServiceClient.prototype.listFunctions = function(request, options, callback) {
  if (options instanceof Function && callback === undefined) {
    callback = options;
    options = {};
  }
  if (options === undefined) {
    options = {};
  }

  return this._listFunctions(request, options, callback);
};

/**
 * Equivalent to {@link listFunctions}, but returns a NodeJS Stream object.
 *
 * This fetches the paged responses for {@link listFunctions} continuously
 * and invokes the callback registered for 'data' event for each element in the
 * responses.
 *
 * The returned object has 'end' method when no more elements are required.
 *
 * autoPaginate option will be ignored.
 *
 * @see {@link https://nodejs.org/api/stream.html}
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {string} request.location
 *   The project and location from which the function should be listed,
 *   specified in the format: projects/[PROJECT]/locations/[LOCATION]
 *   If you want to list functions in all locations, use '-' in place of a
 *   location.
 * @param {number=} request.pageSize
 *   The maximum number of resources contained in the underlying API
 *   response. If page streaming is performed per-resource, this
 *   parameter does not affect the return value. If page streaming is
 *   performed per-page, this determines the maximum number of
 *   resources in a page.
 * @param {Object=} options
 *   Optional parameters. You can override the default settings for this call, e.g, timeout,
 *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
 * @return {Stream}
 *   An object stream which emits an object representing [CloudFunction]{@link CloudFunction} on 'data' event.
 *
 * @example
 *
 * var client = functionsV1beta2.cloudFunctionsServiceClient();
 * var formattedLocation = client.locationPath("[PROJECT]", "[LOCATION]");
 * client.listFunctionsStream({location: formattedLocation}).on('data', function(element) {
 *     // doThingsWith(element)
 * }).on('error', function(err) {
 *     console.error(err);
 * });
 */
CloudFunctionsServiceClient.prototype.listFunctionsStream = function(request, options) {
  if (options === undefined) {
    options = {};
  }

  return PAGE_DESCRIPTORS.listFunctions.createStream(this._listFunctions, request, options);
};

/**
 * Returns a function with the given name from the requested project.
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {string} request.name
 *   The name of the function which details should be obtained.
 * @param {Object=} options
 *   Optional parameters. You can override the default settings for this call, e.g, timeout,
 *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
 * @param {function(?Error, ?Object)=} callback
 *   The function which will be called with the result of the API call.
 *
 *   The second parameter to the callback is an object representing [CloudFunction]{@link CloudFunction}.
 * @return {Promise} - The promise which resolves to an array.
 *   The first element of the array is an object representing [CloudFunction]{@link CloudFunction}.
 *   The promise has a method named "cancel" which cancels the ongoing API call.
 *
 * @example
 *
 * var client = functionsV1beta2.cloudFunctionsServiceClient();
 * var formattedName = client.functionPath("[PROJECT]", "[LOCATION]", "[FUNCTION]");
 * client.getFunction({name: formattedName}).then(function(responses) {
 *     var response = responses[0];
 *     // doThingsWith(response)
 * }).catch(function(err) {
 *     console.error(err);
 * });
 */
CloudFunctionsServiceClient.prototype.getFunction = function(request, options, callback) {
  if (options instanceof Function && callback === undefined) {
    callback = options;
    options = {};
  }
  if (options === undefined) {
    options = {};
  }

  return this._getFunction(request, options, callback);
};

/**
 * Creates a new function. If a function with the given name already exists in
 * the specified project, the long running operation will return
 * ALREADY_EXISTS error.
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {string} request.location
 *   The project and location in which the function should be created, specified
 *   in the format: projects/[PROJECT]/locations/[LOCATION]
 * @param {Object} request.function
 *   Function to be created.
 *
 *   This object should have the same structure as [CloudFunction]{@link CloudFunction}
 * @param {Object=} options
 *   Optional parameters. You can override the default settings for this call, e.g, timeout,
 *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
 * @param {function(?Error, ?Object)=} callback
 *   The function which will be called with the result of the API call.
 *
 *   The second parameter to the callback is a [gax.Operation]{@link https://googleapis.github.io/gax-nodejs/Operation} object.
 * @return {Promise} - The promise which resolves to an array.
 *   The first element of the array is a [gax.Operation]{@link https://googleapis.github.io/gax-nodejs/Operation} object.
 *   The promise has a method named "cancel" which cancels the ongoing API call.
 *
 * @example
 *
 * var client = functionsV1beta2.cloudFunctionsServiceClient();
 * var formattedLocation = client.locationPath("[PROJECT]", "[LOCATION]");
 * var function_ = {};
 * var request = {
 *     location: formattedLocation,
 *     function: function_
 * };
 *
 * // Handle the operation using the promise pattern.
 * client.createFunction(request).then(function(responses) {
 *     var operation = responses[0];
 *     var initialApiResponse = responses[1];
 *
 *     // Operation#promise starts polling for the completion of the LRO.
 *     return operation.promise();
 * }).then(function(responses) {
 *     // The final result of the operation.
 *     var result = responses[0];
 *
 *     // The metadata value of the completed operation.
 *     var metadata = responses[1];
 *
 *     // The response of the api call returning the complete operation.
 *     var finalApiResponse = responses[2];
 * }).catch(function(err) {
 *     console.error(err);
 * });
 *
 * // Handle the operation using the event emitter pattern.
 * client.createFunction(request).then(function(responses) {
 *     var operation = responses[0];
 *     var initialApiResponse = responses[1];
 *
 *     // Adding a listener for the "complete" event starts polling for the
 *     // completion of the operation.
 *     operation.on('complete', function(result, metadata, finalApiResponse) {
 *       // doSomethingWith(result);
 *     });
 *
 *     // Adding a listener for the "progress" event causes the callback to be
 *     // called on any change in metadata when the operation is polled.
 *     operation.on('progress', function(metadata, apiResponse) {
 *       // doSomethingWith(metadata)
 *     })
 *
 *     // Adding a listener for the "error" event handles any errors found during polling.
 *     operation.on('error', function(err) {
 *       // throw(err);
 *     })
 * }).catch(function(err) {
 *     console.error(err);
 * });
 */
CloudFunctionsServiceClient.prototype.createFunction = function(request, options, callback) {
  if (options instanceof Function && callback === undefined) {
    callback = options;
    options = {};
  }
  if (options === undefined) {
    options = {};
  }

  return this._createFunction(request, options, callback);
};

/**
 * Updates existing function.
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {string} request.name
 *   The name of the function to be updated.
 * @param {Object} request.function
 *   New version of the function.
 *
 *   This object should have the same structure as [CloudFunction]{@link CloudFunction}
 * @param {Object=} options
 *   Optional parameters. You can override the default settings for this call, e.g, timeout,
 *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
 * @param {function(?Error, ?Object)=} callback
 *   The function which will be called with the result of the API call.
 *
 *   The second parameter to the callback is a [gax.Operation]{@link https://googleapis.github.io/gax-nodejs/Operation} object.
 * @return {Promise} - The promise which resolves to an array.
 *   The first element of the array is a [gax.Operation]{@link https://googleapis.github.io/gax-nodejs/Operation} object.
 *   The promise has a method named "cancel" which cancels the ongoing API call.
 *
 * @example
 *
 * var client = functionsV1beta2.cloudFunctionsServiceClient();
 * var formattedName = client.functionPath("[PROJECT]", "[LOCATION]", "[FUNCTION]");
 * var function_ = {};
 * var request = {
 *     name: formattedName,
 *     function: function_
 * };
 *
 * // Handle the operation using the promise pattern.
 * client.updateFunction(request).then(function(responses) {
 *     var operation = responses[0];
 *     var initialApiResponse = responses[1];
 *
 *     // Operation#promise starts polling for the completion of the LRO.
 *     return operation.promise();
 * }).then(function(responses) {
 *     // The final result of the operation.
 *     var result = responses[0];
 *
 *     // The metadata value of the completed operation.
 *     var metadata = responses[1];
 *
 *     // The response of the api call returning the complete operation.
 *     var finalApiResponse = responses[2];
 * }).catch(function(err) {
 *     console.error(err);
 * });
 *
 * // Handle the operation using the event emitter pattern.
 * client.updateFunction(request).then(function(responses) {
 *     var operation = responses[0];
 *     var initialApiResponse = responses[1];
 *
 *     // Adding a listener for the "complete" event starts polling for the
 *     // completion of the operation.
 *     operation.on('complete', function(result, metadata, finalApiResponse) {
 *       // doSomethingWith(result);
 *     });
 *
 *     // Adding a listener for the "progress" event causes the callback to be
 *     // called on any change in metadata when the operation is polled.
 *     operation.on('progress', function(metadata, apiResponse) {
 *       // doSomethingWith(metadata)
 *     })
 *
 *     // Adding a listener for the "error" event handles any errors found during polling.
 *     operation.on('error', function(err) {
 *       // throw(err);
 *     })
 * }).catch(function(err) {
 *     console.error(err);
 * });
 */
CloudFunctionsServiceClient.prototype.updateFunction = function(request, options, callback) {
  if (options instanceof Function && callback === undefined) {
    callback = options;
    options = {};
  }
  if (options === undefined) {
    options = {};
  }

  return this._updateFunction(request, options, callback);
};

/**
 * Deletes a function with the given name from the specified project. If the
 * given function is used by some trigger, the trigger will be updated to
 * remove this function.
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {string} request.name
 *   The name of the function which should be deleted.
 * @param {Object=} options
 *   Optional parameters. You can override the default settings for this call, e.g, timeout,
 *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
 * @param {function(?Error, ?Object)=} callback
 *   The function which will be called with the result of the API call.
 *
 *   The second parameter to the callback is a [gax.Operation]{@link https://googleapis.github.io/gax-nodejs/Operation} object.
 * @return {Promise} - The promise which resolves to an array.
 *   The first element of the array is a [gax.Operation]{@link https://googleapis.github.io/gax-nodejs/Operation} object.
 *   The promise has a method named "cancel" which cancels the ongoing API call.
 *
 * @example
 *
 * var client = functionsV1beta2.cloudFunctionsServiceClient();
 * var formattedName = client.functionPath("[PROJECT]", "[LOCATION]", "[FUNCTION]");
 *
 * // Handle the operation using the promise pattern.
 * client.deleteFunction({name: formattedName}).then(function(responses) {
 *     var operation = responses[0];
 *     var initialApiResponse = responses[1];
 *
 *     // Operation#promise starts polling for the completion of the LRO.
 *     return operation.promise();
 * }).then(function(responses) {
 *     // The final result of the operation.
 *     var result = responses[0];
 *
 *     // The metadata value of the completed operation.
 *     var metadata = responses[1];
 *
 *     // The response of the api call returning the complete operation.
 *     var finalApiResponse = responses[2];
 * }).catch(function(err) {
 *     console.error(err);
 * });
 *
 * // Handle the operation using the event emitter pattern.
 * client.deleteFunction({name: formattedName}).then(function(responses) {
 *     var operation = responses[0];
 *     var initialApiResponse = responses[1];
 *
 *     // Adding a listener for the "complete" event starts polling for the
 *     // completion of the operation.
 *     operation.on('complete', function(result, metadata, finalApiResponse) {
 *       // doSomethingWith(result);
 *     });
 *
 *     // Adding a listener for the "progress" event causes the callback to be
 *     // called on any change in metadata when the operation is polled.
 *     operation.on('progress', function(metadata, apiResponse) {
 *       // doSomethingWith(metadata)
 *     })
 *
 *     // Adding a listener for the "error" event handles any errors found during polling.
 *     operation.on('error', function(err) {
 *       // throw(err);
 *     })
 * }).catch(function(err) {
 *     console.error(err);
 * });
 */
CloudFunctionsServiceClient.prototype.deleteFunction = function(request, options, callback) {
  if (options instanceof Function && callback === undefined) {
    callback = options;
    options = {};
  }
  if (options === undefined) {
    options = {};
  }

  return this._deleteFunction(request, options, callback);
};

/**
 * Invokes synchronously deployed function. To be used for testing, very
 * limited traffic allowed.
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {string} request.name
 *   The name of the function to be called.
 * @param {string} request.data
 *   Input to be passed to the function.
 * @param {Object=} options
 *   Optional parameters. You can override the default settings for this call, e.g, timeout,
 *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
 * @param {function(?Error, ?Object)=} callback
 *   The function which will be called with the result of the API call.
 *
 *   The second parameter to the callback is an object representing [CallFunctionResponse]{@link CallFunctionResponse}.
 * @return {Promise} - The promise which resolves to an array.
 *   The first element of the array is an object representing [CallFunctionResponse]{@link CallFunctionResponse}.
 *   The promise has a method named "cancel" which cancels the ongoing API call.
 *
 * @example
 *
 * var client = functionsV1beta2.cloudFunctionsServiceClient();
 * var formattedName = client.functionPath("[PROJECT]", "[LOCATION]", "[FUNCTION]");
 * var data = '';
 * var request = {
 *     name: formattedName,
 *     data: data
 * };
 * client.callFunction(request).then(function(responses) {
 *     var response = responses[0];
 *     // doThingsWith(response)
 * }).catch(function(err) {
 *     console.error(err);
 * });
 */
CloudFunctionsServiceClient.prototype.callFunction = function(request, options, callback) {
  if (options instanceof Function && callback === undefined) {
    callback = options;
    options = {};
  }
  if (options === undefined) {
    options = {};
  }

  return this._callFunction(request, options, callback);
};

function CloudFunctionsServiceClientBuilder(gaxGrpc) {
  if (!(this instanceof CloudFunctionsServiceClientBuilder)) {
    return new CloudFunctionsServiceClientBuilder(gaxGrpc);
  }

  var cloudFunctionsServiceClient = gaxGrpc.load([{
    root: require('google-proto-files')('..'),
    file: 'google/cloud/functions/v1beta2/functions.proto'
  }]);
  extend(this, cloudFunctionsServiceClient.google.cloud.functions.v1beta2);


  /**
   * Build a new instance of {@link CloudFunctionsServiceClient}.
   *
   * @param {Object=} opts - The optional parameters.
   * @param {String=} opts.servicePath
   *   The domain name of the API remote host.
   * @param {number=} opts.port
   *   The port on which to connect to the remote host.
   * @param {grpc.ClientCredentials=} opts.sslCreds
   *   A ClientCredentials for use with an SSL-enabled channel.
   * @param {Object=} opts.clientConfig
   *   The customized config to build the call settings. See
   *   {@link gax.constructSettings} for the format.
   * @param {number=} opts.appName
   *   The codename of the calling service.
   * @param {String=} opts.appVersion
   *   The version of the calling service.
   */
  this.cloudFunctionsServiceClient = function(opts) {
    return new CloudFunctionsServiceClient(gaxGrpc, cloudFunctionsServiceClient, opts);
  };
  extend(this.cloudFunctionsServiceClient, CloudFunctionsServiceClient);
}
module.exports = CloudFunctionsServiceClientBuilder;
module.exports.SERVICE_ADDRESS = SERVICE_ADDRESS;
module.exports.ALL_SCOPES = ALL_SCOPES;
