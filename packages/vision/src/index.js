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
 * @module vision
 * @name Vision
 */

'use strict';

var is = require('is');
var common = require('@google-cloud/common');
var extend = require('extend');
var grpc = require('grpc');
var gapic = {
  v1: require('./v1'),
};
var gaxGrpc = require('google-gax').grpc();

var helpers = require('./helpers');
const VERSION = require('../package.json').version;


/**
 * Create an imageAnnotatorClient with additional helpers for common
 * tasks.
 *
 * The apiEndpoint from options will set the host. If not set, the
 * `GOOGLE_CLOUD_VISION_ENDPOINT` environment variable is honored,
 * otherwise the actual API endpoint will be used.
 *
 * @constructor
 * @alias module:vision
 * @mixes module:vision/helpers
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
 */
function visionV1(opts) {
  opts = common.util.resolveGapicOptions(
    opts,
    [ 'GOOGLE_CLOUD_VISION_ENDPOINT' ],
    gapic.v1.SERVICE_ADDRESS,
    gapic.v1.DEFAULT_SERVICE_PORT,
    grpc.credentials.createInsecure()
  );

  // Define the header options.
  opts.libName = 'gccl';
  opts.libVersion = VERSION;

  // Create the image annotator client with the provided options.
  var client = gapic.v1(opts).imageAnnotatorClient(opts);
  if (is.undefined(client.annotateImage)) {
    Object.assign(client, helpers('v1'));
  }
  return client;
}

var v1Protos = {};

extend(v1Protos, gaxGrpc.load([{
  root: require('google-proto-files')('..'),
  file: 'google/cloud/vision/v1/image_annotator.proto'
}]).google.cloud.vision.v1);

module.exports = visionV1;
module.exports.types = v1Protos;
module.exports.v1 = visionV1;
module.exports.v1.types = v1Protos;
