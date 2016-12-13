/**
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
 * @module common/metadata
 */

'use strict';

var util = require('./util.js');

var METADATA_URL = 'http://metadata.google.internal/computeMetadata/v1';

var metadata = module.exports;

function getMetadataValue(path, headers, callback) {
  headers['Metadata-Flavor'] = 'Google';

  util.makeRequest({
    url: METADATA_URL + path,
    headers: headers,
    method: 'GET'
  }, callback);
}

metadata.getMetadataValue = getMetadataValue;

/**
 * Attempts to retreive the project id for the current active project from the
 * metadata service (See https://cloud.google.com/compute/docs/metadata).
 *
 * @param {Object} [headers] - An optional set of headers to include in the http
 *  request. This function may mutate the given headers object.
 * @param {function(?, number):?} callback an (err, result) style callback
 */
function getProjectId(headers, callback) {
  if (typeof headers === 'function') {
    callback = headers;
    headers = {};
  }
  getMetadataValue('/project/project-id', headers,
    function(err, projectId, response) {
      if (!err && response.statusCode === 200) {
        return callback(null, projectId);
      }
      if (err && err.code === 'ENOTFOUND') {
        return callback(new Error('Could not auto-discover project-id.' +
          'Please export GCLOUD_PROJECT with your project name'), null);
      }
      return callback(err || new Error('Error discovering project id'), null);
    });
}

metadata.getProjectId = getProjectId;

/**
 * Attempts to retrieve the GCE instance hostname for the current active project
 * from the metadata service (See https://cloud.google.com/compute/docs/metadata).
 *
 * @param {object=} headers optional headers to include in the http request.
 *     Note that the headers, if provided, may be extended with extra
 *     properties.
 * @param {function(?, number):?} callback an (err, result) style callback
 */
function getHostname(headers, callback) {
  if (typeof headers === 'function') {
    callback = headers;
    headers = {};
  }
  getMetadataValue('/instance/hostname', headers, callback);
}

metadata.getHostname = getHostname;

/**
 * Attempts to retrieve the GCE instance id for the current active project
 * from the metadata service (See https://cloud.google.com/compute/docs/metadata).
 *
 * @param {object=} headers optional headers to include in the http request.
 *     Note that the headers, if provided, may be extended with extra
 *     properties.
 * @param {function(?, number):?} callback an (err, result) style callback
 */
function getInstanceId(headers, callback) {
  if (typeof headers === 'function') {
    callback = headers;
    headers = {};
  }
  getMetadataValue('/instance/id', headers, callback);
}

metadata.getInstanceId = getInstanceId;
