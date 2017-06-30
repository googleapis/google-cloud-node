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
  v3: require('./v3')
};
var gaxGrpc = require('google-gax').grpc();

const VERSION = require('../package.json').version;

/**
 * Create an groupServiceClient with additional helpers for common
 * tasks.
 *
 * The Group API lets you inspect and manage your
 * [groups](https://cloud.google.comgoogle.monitoring.v3.Group).
 *
 * A group is a named filter that is used to identify
 * a collection of monitored resources. Groups are typically used to
 * mirror the physical and/or logical topology of the environment.
 * Because group membership is computed dynamically, monitored
 * resources that are started in the future are automatically placed
 * in matching groups. By using a group to name monitored resources in,
 * for example, an alert policy, the target of that alert policy is
 * updated automatically as monitored resources are added and removed
 * from the infrastructure.
 *
 * @param {object=} options - [Configuration object](#/docs).
 * @param {number=} options.port - The port on which to connect to
 *     the remote host.
 * @param {string=} options.servicePath - The domain name of the
 *     API remote host.
 */
function groupV3(options) {
  // Define the header options.
  options = extend({}, options, {
    libName: 'gccl',
    libVersion: VERSION
  });

  // Create the client with the provided options.
  var client = gapic.v3(options).groupServiceClient(options);
  return client;
}

/**
 * Create an metricServiceClient with additional helpers for common
 * tasks.
 *
 * Manages metric descriptors, monitored resource descriptors, and
 * time series data.
 *
 * @param {object=} options - [Configuration object](#/docs).
 * @param {number=} options.port - The port on which to connect to
 *     the remote host.
 * @param {string=} options.servicePath - The domain name of the
 *     API remote host.
 */
function metricV3(options) {
  // Define the header options.
  options = extend({}, options, {
    libName: 'gccl',
    libVersion: VERSION
  });

  // Create the client with the provided options.
  var client = gapic.v3(options).metricServiceClient(options);
  return client;
}

var v3Protos = {};

extend(v3Protos, gaxGrpc.load([{
  root: require('google-proto-files')('..'),
  file: 'google/monitoring/v3/group_service.proto'
}]).google.monitoring.v3);

extend(v3Protos, gaxGrpc.load([{
  root: require('google-proto-files')('..'),
  file: 'google/monitoring/v3/metric_service.proto'
}]).google.monitoring.v3);

module.exports.group = groupV3;
module.exports.metric = metricV3;
module.exports.types = v3Protos;

module.exports.v3 = {};
module.exports.v3.group = groupV3;
module.exports.v3.metric = metricV3;
module.exports.v3.types = v3Protos;