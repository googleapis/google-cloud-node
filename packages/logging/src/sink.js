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
 * @module logging/sink
 */

'use strict';

var common = require('@google-cloud/common');
var commonGrpc = require('@google-cloud/common-grpc');
var extend = require('extend');
var util = require('util');

/*! Developer Documentation
 *
 * @param {module:logging} logging - The Logging instance.
 */
/**
 * A sink is an object that lets you to specify a set of log entries to export
 * to a particular destination. Stackdriver Logging lets you export log entries
 * to destinations including Cloud Storage buckets (for long term log
 * storage), Google BigQuery datasets (for log analysis), Google Pub/Sub (for
 * streaming to other applications).
 *
 * @resource [Introduction to Sinks]{@link https://cloud.google.com/logging/docs/basic-concepts#sinks}
 *
 * @alias module:logging/sink
 * @constructor
 *
 * @param {object} options - [Configuration object](#/docs).
 *
 * @example
 * var sink = logging.sink('my-sink');
 */
function Sink(logging, name) {
  this.name = name;
  this.formattedName_ = 'projects/' + logging.projectId + '/sinks/' + name;

  var methods = {
    /**
     * Create a sink.
     *
     * @param {object} config - See {module:logging#createSink}.
     *
     * @example
     * var config = {
     *   destination: {
     *     // ...
     *   }
     * };
     *
     * sink.create(config, function(err, sink, apiResponse) {
     *   if (!err) {
     *     // The sink was created successfully.
     *   }
     * });
     *
     * //-
     * // If the callback is omitted, we'll return a Promise.
     * //-
     * sink.create(config).then(function(data) {
     *   var sink = data[0];
     *   var apiResponse = data[1];
     * });
     */
    create: true,

    /**
     * Delete the sink.
     *
     * @resource [projects.sink.delete API Documentation]{@link https://cloud.google.com/logging/docs/reference/v2/rest/v2/projects.sinks/delete}
     *
     * @param {function=} callback - The callback function.
     * @param {?error} callback.err - An error returned while making this
     *     request.
     * @param {object} callback.apiResponse - The full API response.
     *
     * @example
     * sink.delete(function(err, apiResponse) {
     *   if (!err) {
     *     // The log was deleted.
     *   }
     * });
     *
     * //-
     * // If the callback is omitted, we'll return a Promise.
     * //-
     * sink.delete().then(function(data) {
     *   var apiResponse = data[0];
     * });
     */
    delete: {
      protoOpts: {
        service: 'ConfigServiceV2',
        method: 'deleteSink'
      },
      reqOpts: {
        sinkName: this.formattedName_
      }
    },

    /**
     * Get the sink's metadata.
     *
     * @resource [Sink Resource]{@link https://cloud.google.com/logging/docs/reference/v2/rest/v2/projects.sinks#LogSink}
     * @resource [projects.sink.get API Documentation]{@link https://cloud.google.com/logging/docs/reference/v2/rest/v2/projects.sinks/get}
     *
     * @param {function=} callback - The callback function.
     * @param {?error} callback.err - An error returned while making this
     *     request.
     * @param {object} callback.metadata - The sink's metadata.
     * @param {object} callback.apiResponse - The full API response.
     *
     * @example
     * sink.getMetadata(function(err, metadata, apiResponse) {});
     *
     * //-
     * // If the callback is omitted, we'll return a Promise.
     * //-
     * sink.getMetadata().then(function(data) {
     *   var metadata = data[0];
     *   var apiResponse = data[1];
     * });
     */
    getMetadata: {
      protoOpts: {
        service: 'ConfigServiceV2',
        method: 'getSink'
      },
      reqOpts: {
        sinkName: this.formattedName_
      }
    }
  };

  commonGrpc.ServiceObject.call(this, {
    parent: logging,
    baseUrl: '/sinks',
    id: name,
    createMethod: logging.createSink.bind(logging),
    methods: methods
  });
}

util.inherits(Sink, commonGrpc.ServiceObject);

/**
 * Set the sink's filter.
 *
 * This will override any filter that was previously set.
 *
 * @resource [Advanced Logs Filters]{@link https://cloud.google.com/logging/docs/view/advanced_filters}
 *
 * @param {string} filter - The new filter.
 * @param {function=} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this
 *     request.
 * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * var filter = 'metadata.severity = ALERT';
 *
 * sink.setFilter(filter, function(err, apiResponse) {});
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * sink.setFilter(filter).then(function(data) {
 *   var apiResponse = data[0];
 * });
 */
Sink.prototype.setFilter = function(filter, callback) {
  this.setMetadata({
    filter: filter
  }, callback);
};

/**
 * Set the sink's metadata.
 *
 * @resource [Sink Resource]{@link https://cloud.google.com/logging/docs/reference/v2/rest/v2/projects.sinks#LogSink}
 * @resource [projects.sink.update API Documentation]{@link https://cloud.google.com/logging/docs/reference/v2/rest/v2/projects.sinks/update}
 *
 * @param {object} metadata - See a
 *     [Sink resource](https://cloud.google.com/logging/docs/reference/v2/rest/v2/projects.sinks#LogSink).
 * @param {function=} callback - The callback function.
 * @param {?error} callback.err - An error returned while making this
 *     request.
 * @param {object} callback.apiResponse - The full API response.
 *
 * @example
 * var metadata = {
 *   filter: 'metadata.severity = ALERT'
 * };
 *
 * sink.setMetadata(metadata, function(err, apiResponse) {});
 *
 * //-
 * // If the callback is omitted, we'll return a Promise.
 * //-
 * sink.setMetadata(metadata).then(function(data) {
 *   var apiResponse = data[0];
 * });
 */
Sink.prototype.setMetadata = function(metadata, callback) {
  var self = this;

  callback = callback || common.util.noop;

  this.getMetadata(function(err, currentMetadata, apiResponse) {
    if (err) {
      callback(err, apiResponse);
      return;
    }

    var protoOpts = {
      service: 'ConfigServiceV2',
      method: 'updateSink'
    };

    var reqOpts = {
      sinkName: self.formattedName_,
      sink: extend({}, currentMetadata, metadata)
    };

    self.request(protoOpts, reqOpts, function(err, apiResponse) {
      if (err) {
        callback(err, apiResponse);
        return;
      }

      self.metadata = apiResponse;

      callback(null, apiResponse);
    });
  });
};

/*! Developer Documentation
 *
 * All async methods (except for streams) will return a Promise in the event
 * that a callback is omitted.
 */
common.util.promisifyAll(Sink);

module.exports = Sink;
