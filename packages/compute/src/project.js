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
 * @module compute/project
 */

'use strict';

var common = require('@google-cloud/common');
var util = require('util');

/*! Developer Documentation
 *
 * @param {module:compute} compute - Compute object this project belongs to.
 */
/**
 * A Projects object allows you to interact with your Google Compute Engine
 * project.
 *
 * @resource [Projects Overview]{@link https://cloud.google.com/compute/docs/projects}
 * @resource [Projects Resource]{@link https://cloud.google.com/compute/docs/reference/v1/projects}
 *
 * @constructor
 * @alias module:compute/project
 *
 * @example
 * var gcloud = require('google-cloud')({
 *   keyFilename: '/path/to/keyfile.json',
 *   projectId: 'grape-spaceship-123'
 * });
 *
 * var gce = gcloud.compute();
 *
 * var project = gce.project();
 *
 */
function Project(compute) {
  common.ServiceObject.call(this, {
    parent: compute,
    baseUrl: '/',
    id: compute.projectId
  });


  this.name = compute.projectId;
}

util.inherits(Project, common.ServiceObject);

/*! Developer Documentation
 *
 * All async methods (except for streams) will return a Promise in the event
 * that a callback is omitted.
 */
common.util.promisifyAll(Project);

module.exports = Project;
