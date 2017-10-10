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
 * @module functions/cloudfunction
 */

'use strict';

const common = require('@google-cloud/common');
const eventsIntercept = require('events-intercept');
const extend = require('extend');
const is = require('is');

/*! Developer Documentation
 *
 * @param {module:functions} functions - Functions instance.
 * @param {string} name - Name of the function
 * @param {object=} config - Configuration object.
 * @param {string} config.projectId - ID of the project where the function is
 *     deployed.
 * @param {string} config.region - Region where the function is deployed.
 */
/**
 * Interact with a Cloud Function. Create a Cloud Function function instance
 * with {module:functions#createFunction}.
 *
 * @alias module:functions/cloudfunction
 * @constructor
 *
 * @example
 * var functions = Functions({
 *   projectId: 'grape-spaceship-123',
 *   keyFilename: '/path/to/keyfile.json',
 *   region: 'us-central1'
 * });
 * var cloudfunction = functions.cloudfunction('myFunction');
 * // projects/grape-spaceship-123/locations/us-central1/functions/myFunction
 * cloudfunction.metadata.name;
 *
 * //-
 * // Override the projectId and region.
 * //-
 * var cloudfunction = functions.cloudfunction('betterFunction', {
 *   projectId: 'abc-project',
 *   region: 'us-central1'
 * });
 * // projects/abc-project/locations/us-central1/functions/betterFunction
 * cloudfunction.metadata.name;
 *
 * //-
 * // Use the full name of the function.
 * //-
 * var name = 'projects/123-project/locations/us-central1/functions/someFunc';
 * var cloudfunction = functions.cloudfunction(name);
 * // projects/123-project/locations/us-central1/functions/someFunc
 * cloudfunction.metadata.name;
 */
class CloudFunction {
  constructor(functions, name, config) {
    if (!functions) {
      throw new Error('A functions service object name must be provided.');
    }

    Object.defineProperty(this, 'functions', {
      value: functions
    });

    config = config || {};

    if (!is.string(name)) {
      throw new Error('A function name must be provided.');
    } else if (!is.object(config)) {
      throw new Error('A function configuration object must be provided.');
    }

    const parts = this.functions.parseName(name);

    config = extend({
      projectId: this.functions.projectId,
      region: this.functions.region
    }, config, {
      projectId: parts.project,
      region: parts.location
    });

    if (!is.string(config.projectId)) {
      throw new Error('A project string must be provided.');
    } else if (!is.string(config.region)) {
      throw new Error('A region string must be provided.');
    }

    this.name = parts.name;
    // Use deep copy when merging
    this.metadata = extend(true, {}, config);
    this.metadata.name = this.functions.formatName(
      this.metadata.projectId,
      this.metadata.region,
      this.name
    );

    delete this.metadata.projectId;
    delete this.metadata.region;
  }

  /**
   * TODO
   */
  call(data, options, callback) {
    if (is.function(data)) {
      callback = data;
      data = '{}';
      options = {};
    }
    if (is.function(options)) {
      callback = options;
      options = {};
    }

    if (!data && data !== '{}') {
      throw new Error('A data value must be provided.');
    } else if (!is.object(options)) {
      throw new Error('A configuration object must be provided.');
    } else {
      if (!is.string(data)) {
        data = JSON.stringify(data);
      }
    }

    const reqOpts = {
      name: this.metadata.name,
      data: data
    };
    const callOpts = options;

    this.functions.api.Functions.callFunction(
      reqOpts,
      callOpts,
      (err, response) => {
        if (err) {
          callback(err, null, response);
          return;
        }
        callback(null, response);
      }
    );
  }

  /**
   * Create a Cloud Function.
   *
   * @param {object} config - See {module:functions#createFunction}.
   * @param {function=} callback - The callback function.
   * @param {?error} callback.err - An error returned while making this request.
   * @param {object} callback.operation - An operation object that can be used
   *     to check the status of the request.
   * @param {object} callback.apiResponse - Raw API response.
   *
   * @example
   * var config = {};
   *
   * cloudfunction.create(config, function(err, operation, apiResponse) {
   *   if (!err) {
   *     // The Cloud Function "create" operation was started successfully.
   *   }
   *   operation
   *     .on('complete', function(cloudfunction) {
   *       // The Cloud Function was created successfully.
   *     })
   *     .on('error', function(err) {
   *       // Failed to create the Cloud Function
   *     });
   * });
   *
   * //-
   * // If the callback is omitted, we'll return a Promise.
   * //-
   * cloudfunction.create(config)
   *   .then(function(data) {
   *     var operation = data[0];
   *     var apiResponse = data[1];
   *     return operation.promise();
   *   })
   *   .then(function(data) {
   *     var cloudfunction = data[0];
   *     var apiResponse = data[1];
   *     // The Cloud Function was created successfully.
   *   });
   */
  create(config, options, callback) {
    if (is.function(config)) {
      callback = config;
      config = {};
      options = {};
    }
    if (is.function(options)) {
      callback = options;
      options = {};
    }

    // Use deep copy when merging
    config = extend(true, this.metadata, config);

    this.functions.createFunction(this.name, config, options, callback);
  }

  /**
   * Delete a Cloud Function.
   *
   * @param {object} options - [Configuration object](#/docs).
   * @param {function=} callback - The callback function.
   * @param {?error} callback.err - An error returned while making this request.
   * @param {object} callback.operation - An operation object that can be used
   *     to check the status of the request.
   * @param {object} callback.apiResponse - Raw API response.
   *
   * @example
   * cloudfunction.delete(function(err, operation, apiResponse) {
   *   if (!err) {
   *     // The Cloud Function "delete" operation was started successfully.
   *   }
   *   operation
   *     .on('complete', function(apiResponse) {
   *       // The Cloud Function was deleted successfully.
   *     })
   *     .on('error', function(err) {
   *       // Failed to delete the Cloud Function
   *     });
   * });
   *
   * //-
   * // If the callback is omitted, we'll return a Promise.
   * //-
   * cloudfunction.delete()
   *   .then(function(data) {
   *     var apiResponse = data[0];
   *     return operation.promise();
   *   })
   *   .then(function(data) {
   *     var apiResponse = data[0];
   *     // The Cloud Function was deleted successfully.
   *   });
   */
  delete(options, callback) {
    if (is.function(options)) {
      callback = options;
      options = {};
    }

    const reqOpts = {
      name: this.metadata.name
    };
    const callOpts = options;

    this.functions.api.Functions.deleteFunction(reqOpts, callOpts, callback);
  }

  exists(options, callback) {
    if (is.function(options)) {
      callback = options;
      options = {};
    }

    this.get(options)
      .then(() => {
        callback(null, true);
      }, (err) => {
        if (err.code === 404 || err.code === 5) {
          callback(null, false);
        } else {
          callback(err);
        }
      });
  }

  /**
   * Get a function if it exists.
   *
   * @param {options=} options - Configuration object.
   * @param {string} options.projectId - ID of the project where the function is
   *     deployed.
   * @param {string} options.region - Region where the function is deployed.
   * @param {function=} callback - The callback function.
   * @param {?error} callback.err - An error returned while making this
   *     request.
   * @param {object} callback.function - Cloud Function instance.
   * @param {object} callback.apiResponse - The full API response.
   *
   * @example
   * var cloudfunction = functions.cloudfunction('myFunction');
   * cloudfunction.get(function(err, cloudfunction, apiResponse) {
   *   if (!err) {
   *     // `cloudfunction` is the Cloud Function instance
   *   }
   * });

   * //-
   * // If the callback is omitted, we'll return a Promise.
   * //-
   *
   * cloudfunction.get()
   *   .then(function(results) {
   *     var cloudfunction = results[0];
   *     var apiResponse = results[1];
   *   });
   */
  get(options, callback) {
    if (is.function(options)) {
      callback = options;
      options = {};
    }

    const reqOpts = {
      name: this.metadata.name
    };
    const callOpts = options;

    this.functions.api.Functions.getFunction(reqOpts, callOpts, (err, resp) => {
      if (err) {
        callback(err, null, resp);
        return;
      }
      // Use deep copy when merging
      this.metadata = extend(true, this.metadata, resp);
      callback(null, this, resp);
    });
  }

  /**
   * Update a Cloud Function's metadata.
   *
   * @param {object} metadata - See {module:functions#createFunction}.
   * @param {function=} callback - The callback function.
   * @param {?error} callback.err - An error returned while making this request.
   * @param {module:functions/operation} callback.operation - An operation
   *     object that can be used to check the status of the request.
   * @param {object} callback.apiResponse - Raw API response.
   *
   * @example
   * var metadata = {
   *   timeout: {
   *     seconds: 30
   *   }
   * };
   *
   * cloudfunction.setMetadata(metadata, function(err, operation, apiResponse) {
   *   if (!err) {
   *     // The Cloud Function "update" operation was started successfully.
   *   }
   *   operation
   *     .on('complete', function(metadata) {
   *       // The Cloud Function was updated successfully.
   *     })
   *     .on('error', function(err) {
   *       // Failed to update the Cloud Function
   *     });
   * });
   *
   * //-
   * // If the callback is omitted, we'll return a Promise.
   * //-
   * cloudfunction.setMetadata(metadata)
   *   .then(function(data) {
   *     var operation = data[0];
   *     var apiResponse = data[1];
   *     return operation.promise();
   *   })
   *   .then(function(data) {
   *     var metadata = data[0];
   *     var apiResponse = data[1];
   *     // The Cloud Function was updated successfully.
   *   });
   */
  setMetadata(metadata, options, callback) {
    if (!is.object(metadata)) {
      throw new Error('A function configuration object must be provided.');
    }
    if (is.function(options)) {
      callback = options;
      options = {};
    }

    const body = this.functions._prepareFunctionBody(this.name, metadata);
    this.functions._formatFunctionBody(this.name, body);

    const reqOpts = {
      name: this.metadata.name,
      function: body
    };
    const callOpts = options;

    this.functions.api.Functions.updateFunction(
      reqOpts,
      callOpts,
      (err, operation, resp) => {
        if (err) {
          callback(err, null, resp);
          return;
        }

        eventsIntercept.patch(operation);
        operation.intercept(
          'complete',
          (cloudfunction, metadata, resp, callback) => {
            // Use deep copy when merging
            extend(true, this.metadata, metadata);
            callback(null, this.metadata, resp);
          }
        );

        callback(null, operation, resp);
      }
    );
  }
}

/*! Developer Documentation
 *
 * All async methods (except for streams) will return a Promise in the event
 * that a callback is omitted.
 */
['call', 'create', 'delete', 'exists', 'get', 'setMetadata'].forEach((name) => {
  const originalMethod = CloudFunction.prototype[name];
  CloudFunction.prototype[name] = common.util.promisify(originalMethod);
});

module.exports = CloudFunction;
