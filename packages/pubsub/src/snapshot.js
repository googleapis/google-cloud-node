/*!
 * Copyright 2014 Google Inc. All Rights Reserved.
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
 * @module pubsub/snapshot
 */

'use strict';

var commonGrpc = require('@google-cloud/common-grpc');
var is = require('is');
var util = require('util');

/**
 *
 */
function Snapshot(parent, name) {
  var projectId = parent.projectId || parent.parent.projectId;

  this.name = Snapshot.formatName_(projectId, name);

  var methods = {
    /**
     *
     */
    delete: {
      protoOpts: {
        service: 'Subscriber',
        method: 'deleteSnapshot'
      },
      reqOpts: {
        snapshot: this.name
      }
    }
  };

  var config = {
    parent: parent,
    id: this.name,
    methods: methods
  };

  var isSubscription = is.fn(parent.createSnapshot);

  if (isSubscription) {
    config.createMethod = parent.createSnapshot.bind(parent);

    /**
     *
     */
    methods.create = true;
  }

  commonGrpc.ServiceObject.call(this, config);
}

util.inherits(Snapshot, commonGrpc.ServiceObject);

/**
 *
 */
Snapshot.formatName_ = function(projectId, name) {
  return 'projects/' + projectId + '/snapshots/' + name.split('/').pop();
};

module.exports = Snapshot;
