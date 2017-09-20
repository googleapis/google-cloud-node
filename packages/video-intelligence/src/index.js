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

/*!
 * @module video-intelligence
 */

'use strict';

var common = require('@google-cloud/common');
var grpc = require('grpc');
var gapic = {
  v1beta1: require('./v1beta1')
};

const VERSION = require('../package.json').version;

/**
 * [Google Cloud Video Intelligence API](https://cloud.google.com/video-intelligence)
 * makes videos searchable, and discoverable, by extracting metadata with an
 * easy to use REST API. You can now search every moment of every video file in
 * your catalog and find every occurrence as well as its significance. It
 * quickly annotates videos stored in Google Cloud Storage, and helps you
 * identify key nouns entities of your video, and when they occur within the
 * video. Separate signal from noise, by retrieving relevant information at the
 * video, shot or per frame.
 *
 * <h2>This is an auto-generated API</h2>
 *
 * It does not follow the conventions you're familiar with from other parts of
 * our library. A handwritten layer is not yet available.
 *
 * The example below shows you how to instantiate the generated client. For
 * further documentation, please browse the
 * [Video Intelligence .proto files](https://github.com/googleapis/googleapis/blob/master/google/cloud/videointelligence/v1beta1/video_intelligence.proto)
 * on GitHub.
 *
 * @constructor
 * @alias module:video-intelligence
 *
 * @resource [Cloud Video Intelligence](https://cloud.google.com/video-intelligence)
 *
 * The apiEndpoint from options will set the host. If not set, the
 * `GOOGLE_CLOUD_VIDEO_INTELLIGENCE_ENDPOINT` environment variable is honored,
 * otherwise the actual API endpoint will be used.
 *
 * @param {object} options - [Configuration object](#/docs).
 * @param {number=} options.port - The port on which to connect to the remote
 *     host.
 * @param {string=} options.servicePath - The domain name of the API remote
 *     host.
 */
function VideoIntelligence(options) {
  options = common.util.resolveGapicOptions(
    options,
    [ 'GOOGLE_CLOUD_VIDEO_INTELLIGENCE_ENDPOINT' ],
    gapic.v1beta1.SERVICE_ADDRESS,
    gapic.v1beta1.DEFAULT_SERVICE_PORT,
    grpc.credentials.createInsecure()
  );

  // Define the header options.
  options.libName = 'gccl';
  options.libVersion = VERSION;

  // Create the image annotator client with the provided options.
  var client = gapic.v1beta1(options).videoIntelligenceServiceClient(options);
  return client;
}

// The default export should be the latest version.
// Assign all versions as version properties on the default.
module.exports = VideoIntelligence;
module.exports.v1beta1 = gapic.v1beta1;
