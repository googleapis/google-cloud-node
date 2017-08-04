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

var gcpMetadata = require('gcp-metadata');

/**
 * The Metadata class attempts to contact the metadata service and determine,
 * based on request success and environment variables, what type of resource
 * the library is operating on.
 *
 * @constructor
 * @alias module:logging/metadata
 *
 * @private
 *
 * @resource [Logs Resource API Documentation]{@link https://cloud.google.com/logging/docs/api/reference/rest/v2/MonitoredResource}
 *
 * @param {module:logging} logging - The parent Logging instance.
 */
function Metadata(logging) {
  this.logging = logging;
}

/**
 * Create a descriptor for Cloud Functions.
 *
 * @returns {object}
 */
Metadata.getCloudFunctionDescriptor = function() {
  return {
    type: 'cloud_function',
    labels: {
      function_name: process.env.FUNCTION_NAME,
      region: process.env.SUPERVISOR_REGION
    }
  };
};

/**
 * Create a descriptor for Google App Engine.
 *
 * @returns {object}
 */
Metadata.getGAEDescriptor = function() {
  return {
    type: 'gae_app',
    labels: {
      module_id: process.env.GAE_SERVICE || process.env.GAE_MODULE_NAME,
      version_id: process.env.GAE_VERSION
    }
  };
};

/**
 * Create a descriptor for Google Compute Engine.
 *
 * @private
 *
 * @param {function} callback - The callback function.
 * @return {object}
 */
Metadata.getGCEDescriptor = function(callback) {
  gcpMetadata.instance('id', function(err, _, instanceId) {
    if (err) {
      callback(err);
      return;
    }

    callback(null, {
      type: 'gce_instance',
      labels: {
        instance_id: instanceId
      }
    });
  });
};

/**
 * Create a descriptor for Google Container Engine.
 *
 * @private
 *
 * @param {function} callback - The callback function.
 * @return {object}
 */
Metadata.getGKEDescriptor = function(callback) {
  gcpMetadata.instance('attributes/clusterName', function(err, _, clusterName) {
    if (err) {
      callback(err);
      return;
    }

    callback(null, {
      type: 'container',
      labels: {
        // TODO(ofrobots): it would be good to include the namespace_id as well.
        cluster_name: clusterName
      }
    });
  });
};

/**
 * Create a global descriptor.
 *
 * @private
 *
 * @returns {object}
 */
Metadata.getGlobalDescriptor = function() {
  return {
    type: 'global'
  };
};

/**
 * Retrieve a resource object describing the current environment.
 *
 * @param {function} callback - The callback function.
 */
Metadata.prototype.getDefaultResource = function(callback) {
  this.logging.auth.getEnvironment(function(err, env) {
    if (env.IS_CONTAINER_ENGINE) {
      Metadata.getGKEDescriptor(callback);
    } else if (env.IS_APP_ENGINE) {
      callback(null, Metadata.getGAEDescriptor());
    } else if (env.IS_CLOUD_FUNCTION) {
      callback(null, Metadata.getCloudFunctionDescriptor());
    } else if (env.IS_COMPUTE_ENGINE) {
      // Test for compute engine should be done after all the rest - everything
      // runs on top of compute engine.
      Metadata.getGCEDescriptor(callback);
    } else {
      callback(null, Metadata.getGlobalDescriptor());
    }
  });
};

module.exports = Metadata;
