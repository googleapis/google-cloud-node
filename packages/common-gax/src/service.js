/*!
 * Copyright 2017 Google Inc. All Rights Reserved.
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

'use strict';

var common = require('@google-cloud/common');
var extend = require('extend');
var streamEvents = require('stream-events');
var through = require('through2');
var util = require('util');

function GaxService(config, options) {
  if (global.GCLOUD_SANDBOX_ENV) {
    return;
  }

  config = extend({
    scopes: config.module.ALL_SCOPES
  }, config);

  this.api = {};
  this.module = config.module;
  this.options = options;

  common.Service.call(this, config, options);
}

util.inherits(GaxService, common.Service);

/**
 * Funnel all API requests through this method, to be sure we have a project ID.
 *
 * @param {object} config - Configuration object.
 * @param {string} config.client - The gax client name.
 * @param {object} config.gaxOpts - GAX options.
 * @param {function} config.method - The gax method to call.
 * @param {object} config.reqOpts - Request options.
 * @param {function=} callback - The callback function.
 */
GaxService.prototype.request = function(config, callback) {
  if (global.GCLOUD_SANDBOX_ENV) {
    return;
  }

  this.prepareRequest_(config, function(err, requestFn) {
    if (err) {
      callback(err);
      return;
    }

    requestFn(callback);
  });
};

/**
 * Make a request as a stream.
 *
 * @param {object} config - Configuration object.
 * @param {string} config.client - The gax client name.
 * @param {object} config.gaxOpts - GAX options.
 * @param {function} config.method - The gax method to call.
 * @param {object} config.reqOpts - Request options.
 * @return {stream}
 */
GaxService.prototype.requestStream = function(config) {
  if (global.GCLOUD_SANDBOX_ENV) {
    return through.obj();
  }

  var self = this;

  var gaxStream;
  var stream = streamEvents(through.obj());

  stream.abort = function() {
    if (gaxStream && gaxStream.cancel) {
      gaxStream.cancel();
    }
  };

  stream.once('reading', function() {
    self.prepareRequest_(config, function(err, requestFn) {
      if (err) {
        stream.destroy(err);
        return;
      }

      gaxStream = requestFn();

      gaxStream
        .on('error', function(err) {
          stream.destroy(err);
        })
        .pipe(stream);
    });
  });

  return stream;
};

/**
 * Prepare a request by instantiating and caching the GAX client. Project ID
 * placeholder tokens will be replaced in the request options.
 *
 * @private
 *
 * @param {object} config - Configuration object.
 * @param {string} config.client - The gax client name.
 * @param {object} config.gaxOpts - GAX options.
 * @param {function} config.method - The gax method to call.
 * @param {object} config.reqOpts - Request options.
 * @param {function=} callback - The callback function.
 */
GaxService.prototype.prepareRequest_ = function(config, callback) {
  var self = this;

  this.getProjectId(function(err, projectId) {
    if (err) {
      callback(err);
      return;
    }

    var gaxClient = self.api[config.client];

    if (!gaxClient) {
      // Lazily instantiate client.
      gaxClient = self.module(self.options)[config.client](self.options);
      self.api[config.client] = gaxClient;
    }

    var reqOpts = extend(true, {}, config.reqOpts);
    reqOpts = common.util.replaceProjectIdToken(reqOpts, projectId);

    var requestFn = gaxClient[config.method].bind(
      gaxClient,
      reqOpts,
      config.gaxOpts
    );

    callback(null, requestFn);
  });
};

module.exports = GaxService;