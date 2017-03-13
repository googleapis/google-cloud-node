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


/*! Developer Documentation
 *
 * Anytime a change is made to @google-cloud/common or
 * @google-cloud/common-grpc, it is wise to test if said changes are compatible
 * with with all other modules (bigquery, compute, etc.)
 *
 * All this script aims to do is link your local version of these modules to all
 * of the local modules to make integration testing easier.
 */
'use strict';

var Module = require('./helpers').Module;

var common = new Module('common');
var commonGrpc = new Module('common-grpc');

var packages = Module.getAll();

common.link();
commonGrpc.link();

packages.forEach(function(pkg) {
  pkg.link(common);
  pkg.link(commonGrpc);
});
