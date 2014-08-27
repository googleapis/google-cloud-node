/**
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

/**
 * @private
 * @module datastore/pb
 */

'use strict';

var path = require('path');
var protobufjs = require('protobufjs');

/** @const {string} Path to the proto file. */
var PROTO_FILE = path.join(__dirname, 'datastore_v1.proto');

/**
 * protobuf.
 *
 * @type {object}
 */
module.exports = protobufjs.loadProtoFile(PROTO_FILE).build().pb;
