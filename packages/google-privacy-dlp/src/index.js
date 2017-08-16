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
 * @module dlp
 * @name DLP
 */

'use strict';

var extend = require('extend');
var gapic = {
  v2beta1: require('./v2beta1')
};
var gaxGrpc = require('google-gax').grpc();

const VERSION = require('../package.json').version;

/**
 * Create a dlpServiceClient with additional helpers for common
 * tasks.
 *
 * The DLP API is a service that allows clients
 * to detect the presence of Personally Identifiable Information (PII) and other
 * privacy-sensitive data in user-supplied, unstructured data streams, like text
 * blocks or images.
 * The service also includes methods for sensitive data redaction and
 * scheduling of data scans on Google Cloud Platform based data sets.
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
function dlpV2beta1(options) {
  // Define the header options.
  options = extend({}, options, {
    libName: 'gccl',
    libVersion: VERSION
  });

  // Create the client with the provided options.
  var client = gapic.v2beta1(options).dlpServiceClient(options);
  return client;
}

var v2beta1Protos = {};

extend(v2beta1Protos, gaxGrpc.load([{
  root: require('google-proto-files')('..'),
  file: 'google/privacy/dlp/v2beta1/dlp.proto'
}]).google.privacy.dlp.v2beta1);

module.exports = dlpV2beta1;
module.exports.types = v2beta1Protos;
module.exports.v2beta1 = dlpV2beta1;
module.exports.v2beta1.types = v2beta1Protos;