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

var manual = require('./manual');
var gapic = {
  v1: require('./v1'),
};


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
function vision_v1(opts) {
  // Create the image annotator client with the provided options.
  var client = gapic.v1(opts).imageAnnotatorClient(opts);
  Object.assign(client.constructor.prototype, require('./helpers')('v1'));
  return client;
}


module.exports = manual;
module.exports.v1 = vision_v1;
