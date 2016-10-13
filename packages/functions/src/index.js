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
 * @module functions
 */

'use strict';

const archiver = require('archiver');
const common = require('@google-cloud/common');
const eventsIntercept = require('events-intercept');
const extend = require('extend');
const gax = require('google-gax');
const is = require('is');
const path = require('path');
const Storage = require('@google-cloud/storage');
const uuid = require('uuid');
const v1beta2 = require('./v1beta2');

/**
 * @type {module:functions/cloudfunction}
 * @private
 */
const CloudFunction = require('./cloudfunction.js');

const NAME_REG_EXP = /^projects\/([-\w]+)\/locations\/([-\w]+)\/functions\/([A-Za-z][-A-Za-z0-9]*)$/; // jscs:disable

/**
 * <p class="notice">
 *   **This is a Alpha release of Google Cloud Functions.** This API is
 *   not covered by any SLA or deprecation policy and may be subject to
 *   backward-incompatible changes.
 * </p>
 *
 * [Google Cloud Functions](https://cloud.google.com/functions/docs) provides a
 * a lightweight, event-based, asynchronous compute solution that allows you to
 * create small, single-purpose functions that respond to cloud events without
 * the need to manage a server or a runtime environment.
 *
 * @constructor
 * @alias module:functions
 *
 * @resource [Google Cloud Functions Documentation]{@link https://cloud.google.com/functions/docs}
 *
 * @param {object} options - [Configuration object](#/docs).
 * @param {string} options.projectId - ID of the project where the function is
 *     to be deployed.
 * @param {string} options.region - Region where the function is to be deployed.
 */
class Functions {
  constructor(options) {
    options = common.util.normalizeArguments(this, options, {
      projectIdRequired: true
    });
    this.projectId = options.projectId;
    this.region = options.region || 'us-central1';
    this.Promise = options.promise || Promise;

    this.storage = new Storage({
      projectId: options.projectId,
      keyFilename: options.keyFilename
    });

    this.builders = {
      Functions: v1beta2(options)
    };
    this.api = {
      Functions: this.builders.Functions.cloudFunctionsServiceClient(options)
    };
  }

  /**
   * Format a Cloud Function config object.
   *
   * @private
   *
   * @return {string}
   */
  _formatFunctionBody(name, body) {
    if (body.gcsTrigger) {
      body.gcsTrigger = this._formatGcsTrigger(body.gcsTrigger);
    } else if (body.hasOwnProperty('gcsTrigger')) {
      // Remove value-less field for serialization to protobuf
      delete body.gcsTrigger;
    }
    if (body.pubsubTrigger) {
      body.pubsubTrigger = this._formatPubsubTrigger(
        body.projectId || this.projectId,
        body.pubsubTrigger
      );
    } else if (body.hasOwnProperty('pubsubTrigger')) {
      // Remove value-less field for serialization to protobuf
      delete body.pubsubTrigger;
    }
    if (body.httpsTrigger) {
      if (!body.httpsTrigger.url) {
        body.httpsTrigger = {};
      }
    }

    if (typeof body.timeout === 'number') {
      body.timeout = {
        seconds: body.timeout
      };
    }

    delete body.projectId;
    delete body.region;
    delete body.gcsUrl;
  }

  /**
   * Format a gcsTrigger value. A gcsTrigger's value should be in the format of
   * 'gs://{bucketName}/'.
   *
   * @private
   *
   * @return {string}
   */
  _formatGcsTrigger(bucketName) {
    // Simple check if the name is already formatted.
    if (bucketName.indexOf('gs://') !== 0) {
      bucketName = `gs://${bucketName}`;
    }
    if (bucketName.lastIndexOf('/') !== bucketName.length - 1) {
      bucketName = `${bucketName}/`;
    }
    return bucketName;
  }

  /**
   * Format a pubsubTrigger value. A pubsubTrigger's value should be in the format
   * of 'projects/{projectId}/topics/{topicName'.
   *
   * @private
   *
   * @return {string}
   */
  _formatPubsubTrigger(projectId, topicName) {
    // Simple check if the name is already formatted.
    if (topicName.indexOf('projects/') === 0) {
      return topicName;
    }
    return `projects/${projectId}/topics/${topicName}`;
  }

  /**
   * Prepare a Cloud Function config object.
   *
   * @private
   *
   * @return {string}
   */
  _prepareFunctionBody(name, config) {
    // Use deep copy when merging
    config = extend(true, {
      projectId: this.projectId,
      region: this.region
    }, config);

    return extend(config, {
      name: this.formatName(config.projectId, config.region, name)
    });
  }

  /**
   * Zips up a directory and uploads it to a staging Cloud Storage bucket.
   *
   * @private
   */
  _uploadLocalPath(name, config, callback) {
    const localPath = config.localPath;
    const stageBucket = config.stageBucket;
    const filename = `${config.region}-${name}-${uuid.v4()}.zip`;
    const file = this.storage.bucket(stageBucket).file(filename);

    delete config.localPath;
    delete config.stageBucket;

    if (!is.string(localPath)) {
      callback(new Error('A localPath string must be provided.'));
      return;
    }
    if (!is.string(stageBucket)) {
      callback(new Error('A stageBucket string must be provided.'));
      return;
    }

    const archive = archiver.create('zip');
    const output = file.createWriteStream({
      metadata: {
        contentType: 'application/zip'
      }
    });
    archive.pipe(output);

    // Find a way to ignore node_modules, and make this configurable
    archive.directory(path.resolve(localPath), false).finalize();

    output
      .on('error', callback)
      .on('finish', () => {
        callback(null, `gs://${stageBucket}/${filename}`);
      });

    archive
      .on('error', callback);
  }

  /**
   * Create a reference to a function.
   *
   * @param {string} name - Name of the function.
   * @param {object=} options - Configuration object.
   * @return {module:functions/cloudfunction}
   *
   * @example
   * var myFunction = functions.cloudfunction('myFunction');
   */
  cloudfunction(name, options) {
    return new CloudFunction(this, name, options);
  }

  /**
   * Create a Cloud Function with the given name.
   *
   * @param {string} name - Name of the function, e.g. "myNewFunc".
   * @param {object} config - Configuration object for the new function.
   * @param {string} config.projectId - ID of the project where the function is
   *     to be deployed.
   * @param {string} config.region - Region where the function is to be
   *     deployed.
   * @param {object=} options - Call options.
   * @param {object} options.longrunning - Exponential backoff settings for
   *     long-running operation polling. See TODO.
   * @param {function=} callback - The callback function.
   * @param {?error} callback.err - An error returned while making this request.
   * @param callback.operation - An operation object that can be used to check
   *     the status of the request.
   * @param {object} callback.apiResponse - Raw API response.
   *
   * @example
   * var config = {};
   *
   * functions.createFunction(name, config, function(err, operation) {
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
   * functions.createFunction(name, config)
   *   .then(function(data) {
   *     var operation = data[0];
   *     var apiResponse = data[1];
   *     return operation.promise();
   *   })
   *   .then(function(data) {
   *     var cloudfunction = data[0];
   *     // The Cloud Function was created successfully.
   *   });
   */
  createFunction(name, config, options, callback) {
    if (is.function(options)) {
      callback = options;
      options = {};
    }
    const body = this._prepareFunctionBody(name, config);
    const location = this.formatLocation(body.projectId, body.region);

    const makeRequest = (err, sourceArchiveUrl) => {
      if (err) {
        callback(err);
        return;
      }

      if (sourceArchiveUrl) {
        body.sourceArchiveUrl = sourceArchiveUrl;
      }

      this._formatFunctionBody(name, body, sourceArchiveUrl);

      const reqOpts = {
        location: location,
        function: body
      };

      this.api.Functions.createFunction(reqOpts, options, (err, operation, resp) => {
        if (err) {
          callback(err, null, resp);
          return;
        }

        eventsIntercept.patch(operation);
        operation.intercept(
          'complete',
          (cloudfunction, metadata, resp, callback) => {
            cloudfunction = this.cloudfunction(name, cloudfunction);
            callback(null, cloudfunction, metadata, resp);
          }
        );

        callback(null, operation, resp);
      });
    };

    if (body.localPath) {
      this._uploadLocalPath(name, body, makeRequest);
    } else {
      makeRequest(null, body.sourceArchiveUrl || body.gcsUrl);
    }
  }

  /**
   * Get a list of the functions registered to your project.
   *
   * @param {string|object} query - Query object or the location string.
   * @param {string} query.location - The project and location from which the
   *     function should be listed, specified in the format: projects/PROJECT/locations/LOCATION
   *     If you want to list functions in all locations, use '-' in place of a
   *     location.
   * @param {number} query.pageSize - Max number of results to return.
   * @param {boolean} query.autoPaginate - Have pagination handled
   *     automatically. Default: true.
   * @param {string} query.pageToken - Page token.
   * @param {function=} callback - The callback function.
   * @param {?error} callback.err - An error from the API call, may be null.
   * @param {module:functions/cloudfunction[]} callback.cloudfunctions - The list
   *     of Cloud Functions returned.
   * @param {object} callback.apiResponse - The full API response from the
   *     service.
   *
   * @example
   * var location = functions.formatLocation('YOUR_PROJECT_ID', 'us-central1');
   * functions.getFunctions(location, function(err, cloudfunctions) {
   *   if (!err) {
   *     // cloudfunctions is an array of Cloud Function objects.
   *   }
   * });
   *
   * //-
   * // Customize the query.
   * //-
   * var query = {
   *   location: location,
   *   pageSize: 3
   * };
   * functions.getFunctions(query, function(err, cloudfunctions) {
   *   // ...
   * });
   *
   * //-
   * // To control how many API requests are made and page through the results
   * // manually, set `autoPaginate` to `false`.
   * //-
   * var callback = function(err, cloudfunctions, nextQuery, apiResponse) {
   *   if (nextQuery) {
   *     // More results exist.
   *     functions.getFunctions(nextQuery, callback);
   *   }
   * };
   *
   * var query = {
   *   location: location,
   *   autoPaginate: false
   * };
   * functions.getFunctions(query, callback);
   *
   * //-
   * // If the callback is omitted, we'll return a Promise.
   * //-
   * functions.getFunctions(location).then(function(data) {
   *   var cloudfunctions = data[0];
   * });
   */
  getFunctions(query, callback) {
    if (is.string(query)) {
      query = {
        location: query
      };
    }

    // Use deep copy when merging
    query = extend(true, {
      projectId: this.projectId,
      region: this.region
    }, query);

    if (!query.location) {
      query.location = this.formatLocation(query.projectId, query.region);
      delete query.projectId;
      delete query.region;
    }
    if (!is.string(query.location)) {
      callback(new Error('A location must be specified for the request.'));
    }

    const reqOpts = {
      location: query.location,
      pageSize: query.pageSize,
      pageToken: query.pageToken
    };
    const callOpts = query;

    return this.api.Functions.listFunctions(
      reqOpts,
      callOpts,
      (err, cloudfunctions, nextPageToken, resp) => {
        if (err) {
          callback(err);
          return;
        }

        cloudfunctions = cloudfunctions
          .map((func) => this.cloudfunction(func.name, func));

        let nextQuery = null;
        if (nextPageToken) {
          nextQuery = query;
          nextQuery.pageToken = nextPageToken;
        }

        callback(null, cloudfunctions, nextQuery, resp);
      }
    );
  }

  /**
   * Format a Cloud Functions location. A Cloud Functions location's full path
   * is in the format of 'projects/{projectId}/locations/{location}'.
   *
   * @private
   *
   * @return {string}
   */
  formatLocation(projectId, location) {
    return this.api.Functions.locationPath(projectId, location);
  }

  /**
   * Format the name of a Cloud Function. A Cloud Function's full name is in the
   * format of 'projects/{projectId}/locations/{location}/functions/{name}'.
   *
   * @private
   *
   * @return {string}
   */
  formatName(projectId, location, name) {
    return this.api.Functions.functionPath(projectId, location, name);
  }

  /*! Developer Documentation
   *
   * @returns {module:functions/operation}
   */
  /**
   * Get a reference to an existing operation.
   *
   * @throws {Error} If a name is not provided.
   *
   * @param {string|object} config - The operation config.
   *
   * @example
   * var operation = functions.operation('6885083abcd6825', 'create');
   */
  operation(config, descriptor, backoffSettings) {
    if (!config) {
      throw new Error('A name must be specified for an operation.');
    } else if (is.string(config)) {
      config = {
        name: config.indexOf('/') !== -1 ? config : `operations/${config}`
      };
    }

    return gax.operation(config, descriptor, extend(true, {
      initialRetryDelayMillis: 100,
      retryDelayMultiplier: 1.3,
      maxRetryDelayMillis: 60000,
      initialRpcTimeoutMillis: null,
      rpcTimeoutMultiplier: null,
      maxRpcTimeoutMillis: null,
      totalTimeoutMillis: 600000
    }, backoffSettings || {}));
  }

  parseName(name) {
    const matches = name.match(NAME_REG_EXP);
    if (matches) {
      return {
        project: matches[1],
        location: matches[2],
        name: matches[3]
      };
    }
    return {
      name: name
    };
  }
}

/**
 * Get a list of the {module:functions/cloudfunction} objects registered to your
 * project as a readable object stream.
 *
 * @param {object=} query - Configuration object. See
 *     {module:functions#getFunctions} for a complete list of options.
 * @return {stream}
 *
 * @example
 * functions.getFunctionsStream()
 *   .on('error', console.error)
 *   .on('data', function(cloudfunction) {
 *     // cloudfunction is a Cloud Function object.
 *   })
 *   .on('end', function() {
 *     // All cloudfunctions retrieved.
 *   });
 *
 * //-
 * // If you anticipate many results, you can end a stream early to prevent
 * // unnecessary processing and API requests.
 * //-
 * functions.getFunctionsStream()
 *   .on('data', function(cloudfunction) {
 *     this.end();
 *   });
 */
Object.defineProperty(Functions.prototype, 'getFunctionsStream', {
  configurable: true,
  writable: true,
  value: common.paginator.streamify('getFunctions')
});

/*! Developer Documentation
 *
 * These methods can be auto-paginated.
 */
common.paginator.extend(Functions, ['getFunctions']);

/*! Developer Documentation
 *
 * All async methods (except for streams) will return a Promise in the event
 * that a callback is omitted.
 */
['createFunction', 'getFunctions'].forEach((name) => {
  const originalMethod = Functions.prototype[name];
  Functions.prototype[name] = common.util.promisify(originalMethod);
});

module.exports = function(options) {
  return new Functions(options);
};
module.exports.CloudFunction = CloudFunction;
module.exports.Functions = Functions;
module.exports.v1beta2 = v1beta2;
