/*
 * Copyright 2017 Google Inc. All rights reserved.
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
 */

'use strict';

var gapic = {
  v1beta1: require('./v1beta1/index.js'),
};

const VERSION = require('../package.json').version;


/**
 * Create an imageAnnotatorClientfor the appropriate version.
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
function videointelligenceV1beta1(opts) {
  // Define the header options.
  opts = opts || {};
  opts.libName = 'gccl';
  opts.libVersion = VERSION;

  // Create the image annotator client with the provided options.
  var client = gapic.v1beta1(opts).videoIntelligenceServiceClient(opts);
  return client;
}

// The default export should be the latest version.
// Assign all versions as version properties on the default.
module.exports = videointelligence_v1beta1;
module.exports.v1beta1 = videointelligenceV1beta1;
