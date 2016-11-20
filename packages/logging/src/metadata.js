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
 * @module logging/metadata
 */

'use strict';
var is = require('is');

/**
 * The abstract events emitted to invokers of getDefaultResource and
 * getProjectId which are fired upon evaluation of the response from the
 * metadata service.
 * @const REQUEST_EVENTS
 */
var REQUEST_EVENTS = {
  SUCCESS: 'METADATA_REQUEST_SUCCESS',
  FAILURE: 'METADATA_REQUEST_FAILURE'
};

/**
 * The Metadata class attempts to contact the metadata service and determine,
 * based on request success and environment variables, what type of resource
 * the library is operating on.
 *
 * @constructor
 * @alias module:metadata
 *
 * @resource [Logs Resource API Documentation]{@link https://cloud.google.com/logging/docs/api/reference/rest/v2/MonitoredResource}
 *
 * @param {Duplex} requestStream - A stream returned by a request style
 *  invocation to the metadata project id endpoint
 */
function Metadata(requestStream, libProjectId) {
  this.libProjectId_ = libProjectId;
  this.metadataProjectId_ = null;
  this.metadataContactError_ = null;
  this.metadataRequestStream_ = requestStream;
  this.attachRequestStreamListeners_(requestStream);
}

/**
 * Attaches core request lifecycle event listeners on the request stream
 * provided to the constuctor.
 *
 * @private
 */
Metadata.prototype.attachRequestStreamListeners_ = function(stream) {
  var self = this;
  var projectId = '';
  stream
    .on('data', function(chunk) {
      projectId += chunk;
    })
    .once('error', function(err) {
      self.metadataContactError_ = err;
      self.metadataRequestStream_.emit(REQUEST_EVENTS.FAILURE, err);
      self.metadataRequestStream_.removeAllListeners();
    })
    .once('response', function(resp) {
      // This case must be covered since most request errors codes don't result
      // in the error event being emitted.
      if (resp.statusCode !== 200) {
        // Only supplying the status code might not seem like enough information
        // but the metadata service, on non-200 responses, often returns a full
        // HTML page which wouldn't much help as an error message anyway.
        var err = new Error(
          'Request to get project id from metadata service failed with code: ' +
          resp.statusCode
        );
        self.metadataContactError_ = err;
        // Remove the data listener after emitting the failure event. This will
        // ensure that the end event listeners condition of an empty project id
        // is met, thereby ensuring that only the failure event is emitted.
        self.metadataRequestStream_.emit(REQUEST_EVENTS.FAILURE, err);
        self.metadataRequestStream_.removeAllListeners();
      }
    })
    .once('end', function() {
      if (!is.empty(projectId)) {
        // The project id was set by the data event, cache it on the instance
        // and emit the success event to all applicable listeners which have
        // queued.
        self.metadataProjectId_ = projectId;
        self.metadataRequestStream_.emit(REQUEST_EVENTS.SUCCESS,
          self.metadataProjectId_);
      } else {
        // The stream was ended before a response could be gathered
        self.metadataContactError_ = new Error('Stream was prematurely ended');
        self.metadataRequestStream_.emit(REQUEST_EVENTS.FAILURE,
          self.metadataContactError_);
      }
      self.metadataRequestStream_.removeAllListeners();
    });
};

/**
 * Returns the environment variable sometimes containing the project id
 *
 * @private
 * @returns {Any} - the project id gathered by the logging library
 */
Metadata.prototype.localProjectId_ = function() {
  return this.libProjectId_;
};

/**
 * Called to determine whether the instance is a cloud function
 *
 * @private
 * @returns {Boolean} - Whether or not the env property FUNCTION_NAME is empty
 */
Metadata.prototype.isCloudFunction_ = function() {
  return !is.empty(process.env.FUNCTION_NAME);
};

/**
 * Called to determine whether the instance is on app engine
 *
 * @private
 * @returns {Boolean} - Whether or not the env property GAE_SERVICE is empty
 */
Metadata.prototype.isAppEngine_ = function() {
  return (!is.empty(process.env.GAE_SERVICE) ||
    !is.empty(process.env.GAE_MODULE_NAME)); // For older versions of GAE
};

/**
 * Called to create a descriptor for Google Compute Engine
 *
 * @private
 * @param {String} projectId - the project id
 * @returns {Object}
 */
Metadata.prototype.produceGCEDescriptor_ = function(projectId) {
  return {
    type: 'gce_instance',
    labels: {
      project_id: projectId
    }
  };
};

/**
 * Called to create a descriptor for Google App Engine
 *
 * @private
 * @param {String} projectId - the project id
 * @returns {Object}
 */
Metadata.prototype.produceGAEDescriptor_ = function(projectId) {
  return {
    type: 'gae_app',
    labels: {
      project_id: projectId,
      module_id: !is.empty(process.env.GAE_SERVICE) ? process.env.GAE_SERVICE :
        process.env.GAE_MODULE_NAME,
      version_id: process.env.GAE_VERSION
    }
  };
};

/**
 * Called to create a descriptor for Google Cloud Functions
 *
 * @private
 * @param {String} projectId - the project id
 * @returns {Object}
 */
Metadata.prototype.produceCFDescriptor_ = function(projectId) {
  return {
    type: 'cloud_function',
    labels: {
      project_id: projectId,
      function_name: process.env.FUNCTION_NAME,
      region: process.env.SUPERVISOR_REGION
    }
  };
};

/**
 * Called to create a global descriptor
 *
 * @private
 * @param {String} projectId - the project id
 * @returns {Object}
 */
Metadata.prototype.produceGlobalDescriptor_ = function(projectId) {
  return {
    type: 'global',
    labels: {
      project_id: projectId
    }
  };
};

/**
 * Invoke to attempt to retrieve a resource object describing the current
 * environment.
 *
 * @param {Function} callback - the error-back style callback to invoke once
 *  the resource has been determined.
 * @returns {module:metadata}
 * @chainable
 */
Metadata.prototype.getDefaultResource = function(callback) {
  var self = this;
  if (!is.function(callback)) {
    throw new TypeError(
      'Must supply a callback function as an argument to invocation.');
  }
  this.getProjectId(function(err, projectId) {
    if (err) {
      callback(err, null);
      return;
    }
    if (!is.empty(self.metadataProjectId_)) {
      switch (true) {
        case self.isCloudFunction_(): {
          callback(null, self.produceCFDescriptor_(projectId));
          break;
        }
        case self.isAppEngine_(): {
          callback(null, self.produceGAEDescriptor_(projectId));
          break;
        }
        default: {
          // Since the metadata service is reachable assume it's GCE
          callback(null, self.produceGCEDescriptor_(projectId));
        }
      }
      return;
    }
    // Produce a global descriptor due to the lack of information available
    callback(null, self.produceGlobalDescriptor_(projectId));
  });
  return this;
};

/**
 * Invoke to attempt to retrieve the project id from the current environment or
 * from the metadata service.
 *
 * @param {Function} callback - the error-back style callback to invoke once
 *  the project id has been determined.
 * @returns {module:metadata}
 * @chainable
 */
Metadata.prototype.getProjectId = function(callback) {
  var self = this;
  if (!is.function(callback)) {
    throw new TypeError(
      'Must supply a callback function as an argument to invocation.');
  } else if (!is.empty(self.localProjectId_()) &&
    is.string(self.localProjectId_())) {
    // The process's GCLOUD_PROJECT env variable has been set
    setImmediate(function() {
      callback(null, self.localProjectId_());
    });
    return this;
  } else if (is.string(self.metadataProjectId_)) {
    // The metadata project id has already been retrieved and cached
    setImmediate(function() {
      callback(null, self.metadataProjectId_);
    });
    return this;
  } else if (!is.null(this.metadataContactError_)) {
    // Attempt to get the metadata project id has already failed, callback with
    // the cached error
    setImmediate(function() {
      callback(self.metadataContactError_, null);
    });
    return this;
  }
  // Request to try and get the project id from the Metadata service is
  // ongoing - attach this instances request to resolve when the first
  // request resolves.
  this.metadataRequestStream_
    .once(REQUEST_EVENTS.SUCCESS, function(projectId) {
      callback(null, projectId);
    })
    .once(REQUEST_EVENTS.FAILURE, callback);
  return this;
};

module.exports = Metadata;
