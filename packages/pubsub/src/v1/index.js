/*!
 * Copyright 2016 Google Inc. All Rights Reserved.
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
'use strict';

var publisherClient = require('./publisher_client');
var subscriberClient = require('./subscriber_client');
var extend = require('extend');
var gax = require('google-gax');

function v1(options) {
  options = extend({
    scopes: v1.ALL_SCOPES
  }, options);
  var gaxGrpc = gax.grpc(options);
  var result = {};
  extend(result, publisherClient(gaxGrpc));
  extend(result, subscriberClient(gaxGrpc));
  return result;
}

v1.SERVICE_ADDRESS = publisherClient.SERVICE_ADDRESS;
v1.ALL_SCOPES = publisherClient.ALL_SCOPES;
module.exports = v1;
