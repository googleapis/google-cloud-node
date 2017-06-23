/*
 * Copyright 2017, Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';

var extend = require('extend');
var gapic = {
  v1: require('./v1'),
  v1beta2: require('./v1beta2')
};

const VERSION = require('../package.json').version;

/**
 * Create a V1 languageServiceClient with additional helpers for common
 * tasks.
 *
 * Provides text analysis operations such as sentiment analysis and entity
 * recognition.
 *
 * @param {object=} options - [Configuration object](#/docs).
 * @param {number=} options.port - The port on which to connect to
 *     the remote host.
 * @param {string=} options.servicePath - The domain name of the
 *     API remote host.
 */
function languageV1(options) {
  // Define the header options.
  options = extend({}, options, {
    libName: 'gccl',
    libVersion: VERSION
  });

  // Create the client with the provided options.
  var client = gapic.v1(options).languageServiceClient(options);
  return client;
}

/**
 * Create a V1beta2 languageServiceClient with additional helpers for common
 * tasks.
 *
 * Provides text analysis operations such as sentiment analysis and entity
 * recognition.
 *
 * @param {object=} options - [Configuration object](#/docs).
 * @param {number=} options.port - The port on which to connect to
 *     the remote host.
 * @param {string=} options.servicePath - The domain name of the
 *     API remote host.
 */
function languageV1beta2(options) {
  // Define the header options.
  options = extend({}, options, {
    libName: 'gccl',
    libVersion: VERSION
  });

  // Create the client with the provided options.
  var client = gapic.v1beta2(options).languageServiceClient(options);
  return client;
}

module.exports = languageV1;
module.exports.v1 = languageV1;
module.exports.v1beta2 = languageV1beta2;
