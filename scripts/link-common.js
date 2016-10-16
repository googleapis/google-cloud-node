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
 * Anytime a change is made to @google-cloud/common it is wise to test if said
 * changes are compatible with with all other modules (bigquery, compute, etc.)
 *
 * All this script aims to do is link your local version of @google-cloud/common
 * to all the local modules to make integration testing easier.
 */
'use strict';

var Module = require('./helpers').Module;

var common = new Module('common');
var packages = Module.getAll();

common.link();

packages.forEach(function(pack) {
  pack.link(common);
});
