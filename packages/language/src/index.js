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
 * @module language
 * @name Language
 */

'use strict';

var common = require('@google-cloud/common');
var extend = require('extend');
var gapic = {
  v1: require('./v1'),
  v1beta2: require('./v1beta2')
};
var gaxGrpc = require('google-gax').grpc();
var grpc = require('grpc');

const VERSION = require('../package.json').version;

/**
 * Create a V1 languageServiceClient with additional helpers for common
 * tasks.
 *
 * Provides text analysis operations such as sentiment analysis and entity
 * recognition.
 *
 * The servicePath from options will set the host. If not set, the
 * `GOOGLE_CLOUD_LANGUAGE_ENDPOINT` environment variable is honored,
 * otherwise the actual API endpoint will be used.
 *
 * @constructor
 * @alias module:language
 *
 * @param {object=} options - [Configuration object](#/docs).
 * @param {number=} options.port - The port on which to connect to
 *     the remote host.
 * @param {string=} options.servicePath - The domain name of the
 *     API remote host.
 */
function languageV1(options) {
  options = common.util.resolveGapicOptions(
    options,
    [ 'GOOGLE_CLOUD_LANGUAGE_ENDPOINT' ],
    gapic.v1.SERVICE_ADDRESS,
    gapic.v1.DEFAULT_SERVICE_PORT,
    grpc.credentials.createInsecure()
  );

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
 * The servicePath from options will set the host. If not set, the
 * `GOOGLE_CLOUD_LANGUAGE_ENDPOINT` environment variable is honored,
 * otherwise the actual API endpoint will be used.
 *
 * @param {object=} options - [Configuration object](#/docs).
 * @param {number=} options.port - The port on which to connect to
 *     the remote host.
 * @param {string=} options.servicePath - The domain name of the
 *     API remote host.
 */
function languageV1beta2(options) {
  options = common.util.resolveGapicOptions(
    options,
    [ 'GOOGLE_CLOUD_LANGUAGE_ENDPOINT' ],
    gapic.v1beta2.SERVICE_ADDRESS,
    gapic.v1beta2.DEFAULT_SERVICE_PORT,
    grpc.credentials.createInsecure()
  );

  // Define the header options.
  options = extend({}, options, {
    libName: 'gccl',
    libVersion: VERSION
  });

  // Create the client with the provided options.
  var client = gapic.v1beta2(options).languageServiceClient(options);
  return client;
}

var v1Protos = {};

extend(v1Protos, gaxGrpc.load([{
  root: require('google-proto-files')('..'),
  file: 'google/cloud/language/v1/language_service.proto'
}]).google.cloud.language.v1);

var v1beta2Protos = {};

extend(v1beta2Protos, gaxGrpc.load([{
  root: require('google-proto-files')('..'),
  file: 'google/cloud/language/v1beta2/language_service.proto'
}]).google.cloud.language.v1beta2);

module.exports = languageV1;
module.exports.types = v1Protos;
module.exports.v1 = languageV1;
module.exports.v1.types = v1Protos;
module.exports.v1beta2 = languageV1beta2;
module.exports.v1beta2.types = v1beta2Protos;
