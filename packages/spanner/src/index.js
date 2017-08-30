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
 * @module spanner
 */

'use strict';

var common = require('@google-cloud/common');
var commonGrpc = require('@google-cloud/common-grpc');
var extend = require('extend');
var format = require('string-format-obj');
var is = require('is');
var path = require('path');
var util = require('util');

/**
 * @type {module:spanner/codec}
 * @private
 */
var codec = require('./codec.js');

/**
 * @type {module:spanner/instance}
 * @private
 */
var Instance = require('./instance.js');

var v1 = require('./v1');

/**
 * [Cloud Spanner](https://cloud.google.com/spanner) is a highly scalable,
 * transactional, managed, NewSQL database service. Cloud Spanner solves the
 * need for a horizontally-scaling database with consistent global transaction
 * and SQL semantics. With Cloud Spanner you don't need to choose between
 * consistency and horizontal scaling — you get both.
 *
 * @alias module:spanner
 * @constructor
 *
 * @resource [Cloud Spanner Documentation](https://cloud.google.com/spanner/docs)
 * @resource [Cloud Spanner Concepts](https://cloud.google.com/spanner/docs/concepts)
 *
 * The apiEndpoint from options will set the host. If not set, the
 * `GOOGLE_CLOUD_SPANNER_ENDPOINT` environment variable is honored,
 * otherwise the actual API endpoint will be used.
 *
 * @param {object} options - [Configuration object](#/docs).
 * @param {string=} options.apiEndpoint - Override the default API endpoint used
 *     to reach the Resource API.
 */
function Spanner(options) {
  if (!(this instanceof Spanner)) {
    options = common.util.normalizeArguments(this, options);
    return new Spanner(options);
  }

  options = extend({}, options, {
    libName: 'gccl',
    libVersion: require('../package.json').version
  });

  this.api = {
    Database: v1.admin.database(options).databaseAdminClient(options),
    Instance: v1.admin.instance(options).instanceAdminClient(options),
    Spanner: v1(options).spannerClient(options)
  };

  var config = {
    defaultApiEndpoint: 'spanner.googleapis.com',
    environmentVariables: [ 'GOOGLE_CLOUD_SPANNER_ENDPOINT' ],
    protosDir: path.resolve(__dirname, '../protos'),
    protoServices: {
      Operations: {
        path: 'google/longrunning/operations.proto',
        service: 'longrunning'
      }
    },
    scopes: [
      'https://www.googleapis.com/auth/cloud-platform'
    ],
    packageJson: require('../package.json')
  };

  commonGrpc.Service.call(this, config, options);

  this.instances_ = new Map();
}

util.inherits(Spanner, commonGrpc.Service);

/**
 * Helper function to get a Cloud Spanner Date object.
 *
 * @param {string|date} value - The date as a string or Date object.
 * @return {object}
 *
 * @example
 * var date = spanner.date('08-20-1969');
 */
Spanner.prototype.date = Spanner.date = function(value) {
  return new codec.SpannerDate(value);
};

/**
 * Helper function to get a Cloud Spanner Float64 object.
 *
 * @param {string|number} value - The float as a number or string.
 * @return {object}
 *
 * @example
 * var date = spanner.float(10);
 */
Spanner.prototype.float = Spanner.float = function(value) {
  return new codec.Float(value);
};

/**
 * Helper function to get a Cloud Spanner Int64 object.
 *
 * @param {string|number} value - The int as a number or string.
 * @return {object}
 *
 * @example
 * var date = spanner.int(10);
 */
Spanner.prototype.int = Spanner.int = function(value) {
  return new codec.Int(value);
};

/**
 * Create an instance.
 *
 * @resource [CreateInstance API Documentation](https://cloud.google.com/spanner/docs/reference/rpc/google.spanner.admin.instance.v1#google.spanner.admin.instance.v1.InstanceAdmin.CreateInstance)
 *
 * @throws {Error} If a name is not provided.
 * @throws {Error} If a configuration object is not provided.
 *
 * @param {string} name - The name of the instance to be created.
 * @param {object} config - Configuration object.
 * @param {string} config.config - The name of the instance's configuration.
 * @param {number} config.nodes - The number of nodes allocated to this
 *     instance.
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request.
 * @param {module:spanner/instance} callback.instance - The newly created
 *     instance.
 * @param {Operation} callback.operation - An operation object that can be used
 *     to check the status of the request.
 * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * var config = {
 *   config: 'regional-us-central1',
 *   nodes: 1
 * };
 *
 * function callback(err, instance, operation, apiResponse) {
 *   if (err) {
 *     // Error handling omitted.
 *   }
 *
 *   operation
 *     .on('error', function(err) {})
 *     .on('complete', function() {
 *       // Instance created successfully.
 *     });
 * }
 *
 * spanner.createInstance('new-instance-name', config, callback);
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * spanner.createInstance('new-instance-name', config)
 *   .then(function(data) {
 *     var instance = data[0];
 *     var operation = data[1];
 *     return operation.promise();
 *   })
 *   .then(function() {
 *     // Instance created successfully.
 *   });
 */
Spanner.prototype.createInstance = function(name, config, callback) {
  if (!name) {
    throw new Error('A name is required to create an instance.');
  }

  if (!config) {
    throw new Error([
      'A configuration object is required to create an instance.'
    ].join(''));
  }

  var self = this;

  var formattedName = Instance.formatName_(this.projectId, name);
  var shortName = formattedName.split('/').pop();

  var reqOpts = {
    parent: 'projects/' + this.projectId,
    instanceId: shortName,
    instance: extend({
      name: formattedName,
      displayName: shortName
    }, config)
  };

  if (is.defined(config.nodes)) {
    reqOpts.instance.nodeCount = config.nodes;
    delete reqOpts.instance.nodes;
  }

  if (config.config && config.config.indexOf('/') === -1) {
    reqOpts.instance.config = format('projects/{pId}/instanceConfigs/{cfg}', {
      pId: this.projectId,
      cfg: config.config
    });
  }

  this.api.Instance.createInstance(reqOpts, function(err, operation, resp) {
    if (err) {
      callback(err, null, null, resp);
      return;
    }

    var instance = self.instance(formattedName);

    callback(null, instance, operation, resp);
  });
};

/**
 * Get a list of instances.
 *
 * @resource [ListInstances API Documentation](https://cloud.google.com/spanner/docs/reference/rpc/google.spanner.admin.instance.v1#google.spanner.admin.instance.v1.InstanceAdmin.ListInstances)
 *
 * @param {object=} query - Query object.
 * @param {boolean} query.autoPaginate - Have pagination handled
 *     automatically. Default: true.
 * @param {string} query.filter - An expression for filtering the results of the
 *     request. Filter rules are case insensitive. The fields eligible for
 *     filtering are:
 *     - **`name`**
 *     - **`display_name`**
 *     - **`labels.key`** where key is the name of a label
 *
 *     Some examples of using filters are:
 *     - **`name:*`** The instance has a name.
 *     - **`name:Howl`** The instance's name is howl.
 *     - **`labels.env:*`** The instance has the label env.
 *     - **`labels.env:dev`** The instance's label env has the value dev.
 *     - **`name:howl labels.env:dev`** The instance's name is howl and it has
 *       the label env with value dev.
 * @param {number} query.maxApiCalls - Maximum number of API calls to make.
 * @param {number} query.pageSize - Maximum number of results to return.
 * @param {string} query.pageToken - Token returned from a previous call, to
 *     request the next page of results.
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request.
 * @param {module:spanner/instance[]} callback.instances - List of all
 *     instances.
 * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * spanner.getInstances(function(err, instances) {
 *   // `instances` is an array of `Instance` objects.
 * });
 *
 * //-
 * // To control how many API requests are made and page through the results
 * // manually, set `autoPaginate` to `false`.
 * //-
 * function callback(err, instances, nextQuery, apiResponse) {
 *   if (nextQuery) {
 *     // More results exist.
 *     spanner.getInstances(nextQuery, callback);
 *   }
 * }
 *
 * spanner.getInstances({
 *   autoPaginate: false
 * }, callback);
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * spanner.getInstances().then(function(data) {
 *   var instances = data[0];
 * });
 */
Spanner.prototype.getInstances = function(query, callback) {
  var self = this;

  if (is.fn(query)) {
    callback = query;
    query = {};
  }

  var reqOpts = extend({}, query, {
    parent: 'projects/' + this.projectId
  });

  this.api.Instance.listInstances(reqOpts, query, function(err, instances) {
    if (instances) {
      arguments[1] = instances.map(function(instance) {
        var instanceInstance = self.instance(instance.name);
        instanceInstance.metadata = instance;
        return instanceInstance;
      });
    }

    callback.apply(null, arguments);
  });
};

/**
 * Get a list of {module:spanner/instance} objects as a readable object stream.
 *
 * @resource [ListInstances API Documentation](https://cloud.google.com/spanner/docs/reference/rpc/google.spanner.admin.instance.v1#google.spanner.admin.instance.v1.InstanceAdmin.ListInstances)
 *
 * @param {object=} options - Configuration object. See
 *     {module:spanner#getInstances} for a complete list of options.
 * @return {stream}
 *
 * @example
 * spanner.getInstancesStream()
 *   .on('error', console.error)
 *   .on('data', function(instance) {
 *     // `instance` is an `Instance` object.
 *   })
 *   .on('end', function() {
 *     // All instances retrieved.
 *   });
 *
 * //-
 * // If you anticipate many results, you can end a stream early to prevent
 * // unnecessary processing and API requests.
 * //-
 * spanner.getInstancesStream()
 *   .on('data', function(instance) {
 *     this.end();
 *   });
 */
Spanner.prototype.getInstancesStream =
  common.paginator.streamify('getInstances');

/**
 * Get a list of instance configs.
 *
 * @resource [ListInstanceConfigs API Documentation](https://cloud.google.com/spanner/docs/reference/rpc/google.spanner.admin.instance.v1#google.spanner.admin.instance.v1.InstanceAdmin.ListInstanceConfigs)
 *
 * @param {object=} query - Query object.
 * @param {boolean} query.autoPaginate - Have pagination handled
 *     automatically. Default: true.
 * @param {number} query.maxApiCalls - Maximum number of API calls to make.
 * @param {number} query.pageSize - Maximum number of results to return.
 * @param {string} query.pageToken - Token returned from a previous call, to
 *     request the next page of results.
 * @param {function} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this request.
 * @param {object[]} callback.instanceConfigs - List of all available
 *     instance configs.
 * @param {string} callback.instanceConfigs.name - The unique identifier for the
 *     instance config.
 * @param {string} callback.instanceConfigs.displayName - The name of the
 *     instance config as it appears in UIs.
 * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * spanner.getInstanceConfigs(function(err, instanceConfigs) {
 *   // `instanceConfigs` is an array of instance configuration descriptors.
 * });
 *
 * //-
 * // To control how many API requests are made and page through the results
 * // manually, set `autoPaginate` to `false`.
 * //-
 * function callback(err, instanceConfigs, nextQuery, apiResponse) {
 *   if (nextQuery) {
 *     // More results exist.
 *     spanner.getInstanceConfigs(nextQuery, callback);
 *   }
 * }
 *
 * spanner.getInstanceConfigs({
 *   autoPaginate: false
 * }, callback);
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * spanner.getInstanceConfigs().then(function(data) {
 *   var instanceConfigs = data[0];
 * });
 */
Spanner.prototype.getInstanceConfigs = function(query, callback) {
  if (is.fn(query)) {
    callback = query;
    query = {};
  }

  var reqOpts = extend({}, query, {
    parent: 'projects/' + this.projectId
  });

  return this.api.Instance.listInstanceConfigs(reqOpts, callback);
};

/**
 * Get a list of instance configs as a readable object stream.
 *
 * @resource [ListInstanceConfigs API Documentation](https://cloud.google.com/spanner/docs/reference/rpc/google.spanner.admin.instance.v1#google.spanner.admin.instance.v1.InstanceAdmin.ListInstanceConfigs)
 *
 * @param {object=} options - Configuration object. See
 *     {module:spanner#getInstanceConfigs} for a complete list of options.
 * @return {stream}
 *
 * @example
 * spanner.getInstanceConfigsStream()
 *   .on('error', console.error)
 *   .on('data', function(instanceConfig) {})
 *   .on('end', function() {
 *     // All instances retrieved.
 *   });
 *
 * //-
 * // If you anticipate many results, you can end a stream early to prevent
 * // unnecessary processing and API requests.
 * //-
 * spanner.getInstanceConfigsStream()
 *   .on('data', function(instanceConfig) {
 *     this.end();
 *   });
 */
Spanner.prototype.getInstanceConfigsStream = function(query) {
  var reqOpts = extend({}, query, {
    parent: 'projects/' + this.projectId
  });

  return this.api.Instance.listInstanceConfigsStream(reqOpts);
};

/**
 * Get a reference to an Instance object.
 *
 * @throws {Error} If a name is not provided.
 *
 * @param {string} name - The name of the instance.
 * @return {module:spanner/instance} - An Instance object.
 *
 * @example
 * var instance = spanner.instance('my-instance');
 */
Spanner.prototype.instance = function(name) {
  if (!name) {
    throw new Error('A name is required to access an Instance object.');
  }

  if (!this.instances_.has(name)) {
    this.instances_.set(name, new Instance(this, name));
  }

  return this.instances_.get(name);
};

/**
 * Get a reference to an Operation object.
 *
 * @throws {Error} If a name is not provided.
 *
 * @param {string} name - The name of the operation.
 * @return {Operation} - An Operation object.
 *
 * @example
 * var operation = spanner.operation('operation-name');
 */
Spanner.prototype.operation = function(name) {
  if (!name) {
    throw new Error('A name is required to access an Operation object.');
  }

  return new commonGrpc.Operation(this, name);
};

/*! Developer Documentation
 *
 * All async methods (except for streams) will return a Promise in the event
 * that a callback is omitted.
 */
common.util.promisifyAll(Spanner, {
  exclude: [
    'date',
    'float',
    'getInstanceConfigs',
    'instance',
    'int',
    'operation'
  ]
});

module.exports = Spanner;
module.exports.v1 = v1;
