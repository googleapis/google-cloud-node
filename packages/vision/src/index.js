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
 */

'use strict';

var is = require('is');

var gapic = {
  v1: require('./v1'),
};
var helpers = require('./helpers');

const VERSION = require('../package.json').version;


/**
 * Create an imageAnnotatorClient with additional helpers for common
 * tasks.
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
  // Define the header options.
  opts = opts || {};
  opts.libName = 'gccl';
  opts.libVersion = VERSION;

  // Create the image annotator client with the provided options.
  var client = gapic.v1(opts).imageAnnotatorClient(opts);
  if (is.undefined(client.annotateImage)) {
    Object.assign(client.constructor.prototype, helpers('v1'));
  }
  return client;
}


module.exports = visionV1;
module.exports.v1 = visionV1;
