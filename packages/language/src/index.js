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

var extend = require('extend');
var gapic = {
  v1: require('./v1'),
  v1beta2: require('./v1beta2'),
};
var gaxGrpc = require('google-gax').grpc();
var googleProtoFiles = require('google-proto-files');
var path = require('path');

const VERSION = require('../package.json').version;

/**
 * Create an languageServiceClient with additional helpers for common
 * tasks.
 *
 * Provides text analysis operations such as sentiment analysis and entity
 * recognition.
 *
 * @param {object=} options - [Configuration object](#/docs).
 * @param {object=} options.credentials - Credentials object.
 * @param {string=} options.credentials.client_email
 * @param {string=} options.credentials.private_key
 * @param {string=} options.email - Account email address. Required when using a
 *     .pem or .p12 keyFilename.
 * @param {string=} options.keyFilename - Full path to the a .json, .pem, or
 *     .p12 key downloaded from the Google Developers Console. If you provide
 *     a path to a JSON file, the projectId option above is not necessary.
 *     NOTE: .pem and .p12 require you to specify options.email as well.
 * @param {number=} options.port - The port on which to connect to
 *     the remote host.
 * @param {string=} options.projectId - The project ID from the Google
 *     Developer's Console, e.g. 'grape-spaceship-123'. We will also check
 *     the environment variable GCLOUD_PROJECT for your project ID. If your
 *     app is running in an environment which supports
 *     {@link https://developers.google.com/identity/protocols/application-default-credentials Application Default Credentials},
 *     your project ID will be detected automatically.
 * @param {function=} options.promise - Custom promise module to use instead
 *     of native Promises.
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

var v1Protos = {};

extend(v1Protos, gaxGrpc.loadProto(
  path.join(__dirname, '..', 'proto', 'google/cloud/language/v1/language_service.proto')
).google.cloud.language.v1);


/**
 * Create an languageServiceClient with additional helpers for common
 * tasks.
 *
 * Provides text analysis operations such as sentiment analysis and entity
 * recognition.
 *
 * @param {object=} options - [Configuration object](#/docs).
 * @param {object=} options.credentials - Credentials object.
 * @param {string=} options.credentials.client_email
 * @param {string=} options.credentials.private_key
 * @param {string=} options.email - Account email address. Required when using a
 *     .pem or .p12 keyFilename.
 * @param {string=} options.keyFilename - Full path to the a .json, .pem, or
 *     .p12 key downloaded from the Google Developers Console. If you provide
 *     a path to a JSON file, the projectId option above is not necessary.
 *     NOTE: .pem and .p12 require you to specify options.email as well.
 * @param {number=} options.port - The port on which to connect to
 *     the remote host.
 * @param {string=} options.projectId - The project ID from the Google
 *     Developer's Console, e.g. 'grape-spaceship-123'. We will also check
 *     the environment variable GCLOUD_PROJECT for your project ID. If your
 *     app is running in an environment which supports
 *     {@link https://developers.google.com/identity/protocols/application-default-credentials Application Default Credentials},
 *     your project ID will be detected automatically.
 * @param {function=} options.promise - Custom promise module to use instead
 *     of native Promises.
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

var v1beta2Protos = {};

extend(v1beta2Protos, gaxGrpc.loadProto(
  path.join(__dirname, '..', 'proto', 'google/cloud/language/v1beta2/language_service.proto')
).google.cloud.language.v1beta2);


module.exports = languageV1;
module.exports.types = v1Protos;
module.exports.v1 = languageV1;
module.exports.v1.types = v1Protos;
module.exports.v1beta2 = languageV1beta2;
module.exports.v1beta2.types = v1beta2Protos;
