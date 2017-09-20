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

var imageAnnotatorClient = require('./image_annotator_client');
var gax = require('google-gax');
var extend = require('extend');

function v1(options) {
  options = extend({
    scopes: v1.ALL_SCOPES
  }, options);
  var gaxGrpc = gax.grpc(options);
  return imageAnnotatorClient(gaxGrpc);
}

v1.GAPIC_VERSION = '0.7.1';
v1.SERVICE_ADDRESS = imageAnnotatorClient.SERVICE_ADDRESS;
v1.DEFAULT_SERVICE_PORT = imageAnnotatorClient.DEFAULT_SERVICE_PORT;
v1.ALL_SCOPES = imageAnnotatorClient.ALL_SCOPES;

module.exports = v1;