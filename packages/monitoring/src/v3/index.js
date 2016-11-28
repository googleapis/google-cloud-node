/*!
 * Copyright 2016 Google Inc. All Rights Reserved.
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
'use strict';

var groupServiceClient = require('./group_service_client');
var metricServiceClient = require('./metric_service_client');
var gax = require('google-gax');
var extend = require('extend');

function v3(options) {
  options = extend({
    scopes: v3.ALL_SCOPES
  }, options);
  var gaxGrpc = gax.grpc(options);
  var result = {};
  extend(result, groupServiceClient(gaxGrpc));
  extend(result, metricServiceClient(gaxGrpc));
  return result;
}
v3.SERVICE_ADDRESS = groupServiceClient.SERVICE_ADDRESS;
v3.ALL_SCOPES = groupServiceClient.ALL_SCOPES;
module.exports = v3;
