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

/*!
 * @module speech
 * @name Speech
 */

'use strict';

var extend = require('extend');
var gapic = {
  v1: require('./v1')
};
var gaxGrpc = require('google-gax').grpc();
var helpers = require('./helpers');

const VERSION = require('../package.json').version;

/**
 * Create an speechClient with additional helpers for common
 * tasks.
 *
 * Service that implements Google Cloud Speech API.
 *
 * @constructor
 * @alias module:speech
 * @mixes module:speech/helpers
 *
 * @param {object=} options - [Configuration object](#/docs).
 * @param {number=} options.port - The port on which to connect to
 *     the remote host.
 * @param {string=} options.servicePath - The domain name of the
 *     API remote host.
 */
function speechV1(options) {
  // Define the header options.
  options = extend({}, options, {
    libName: 'gccl',
    libVersion: VERSION
  });

  // Create the speech client with the provided options.
  var client = gapic.v1(options).speechClient(options);
  Object.assign(client.constructor.prototype, helpers());
  return client;
}

var v1Protos = {};

extend(v1Protos, gaxGrpc.load([{
  root: require('google-proto-files')('..'),
  file: 'google/cloud/speech/v1/cloud_speech.proto'
}]).google.cloud.speech.v1);

module.exports = speechV1;
module.exports.types = v1Protos;
module.exports.v1 = speechV1;
module.exports.v1.types = v1Protos;
