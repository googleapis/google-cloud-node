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

/*!
 * @module bigtable/instance
 */

'use strict';

var common = require('@google-cloud/common');
var nodeutil = require('util');

/**
 *
 */
function Cluster(instance, name) {
  var methods = {

    /**
     *
     */
    create: true

  };

  var config = {
    parent: instance,
    methods: methods,
    createMethod: function(_, options, callback) {
      instance.createCluster(name, options, callback);
    }
  };

  common.GrpcServiceObject.call(this, config);
}

nodeutil.inherits(Cluster, common.GrpcServiceObject);

module.exports = Cluster;
