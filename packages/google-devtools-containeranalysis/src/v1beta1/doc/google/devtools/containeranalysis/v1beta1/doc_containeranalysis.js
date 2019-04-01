// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// Note: this file is purely for documentation. Any contents are not expected
// to be loaded as the JS file.

/**
 * A scan configuration specifies whether Cloud components in a project have a
 * particular type of analysis being run. For example, it can configure whether
 * vulnerability scanning is being done on Docker images or not.
 *
 * @property {string} name
 *   Output only. The name of the scan configuration in the form of
 *   `projects/[PROJECT_ID]/scanConfigs/[SCAN_CONFIG_ID]`.
 *
 * @property {string} description
 *   Output only. A human-readable description of what the scan configuration
 *   does.
 *
 * @property {boolean} enabled
 *   Whether the scan is enabled.
 *
 * @property {Object} createTime
 *   Output only. The time this scan config was created.
 *
 *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
 *
 * @property {Object} updateTime
 *   Output only. The time this scan config was last updated.
 *
 *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
 *
 * @typedef ScanConfig
 * @memberof google.devtools.containeranalysis.v1beta1
 * @see [google.devtools.containeranalysis.v1beta1.ScanConfig definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/devtools/containeranalysis/v1beta1/containeranalysis.proto}
 */
const ScanConfig = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request to get a scan configuration.
 *
 * @property {string} name
 *   The name of the scan configuration in the form of
 *   `projects/[PROJECT_ID]/scanConfigs/[SCAN_CONFIG_ID]`.
 *
 * @typedef GetScanConfigRequest
 * @memberof google.devtools.containeranalysis.v1beta1
 * @see [google.devtools.containeranalysis.v1beta1.GetScanConfigRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/devtools/containeranalysis/v1beta1/containeranalysis.proto}
 */
const GetScanConfigRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request to list scan configurations.
 *
 * @property {string} parent
 *   The name of the project to list scan configurations for in the form of
 *   `projects/[PROJECT_ID]`.
 *
 * @property {string} filter
 *   The filter expression.
 *
 * @property {number} pageSize
 *   The number of scan configs to return in the list.
 *
 * @property {string} pageToken
 *   Token to provide to skip to a particular spot in the list.
 *
 * @typedef ListScanConfigsRequest
 * @memberof google.devtools.containeranalysis.v1beta1
 * @see [google.devtools.containeranalysis.v1beta1.ListScanConfigsRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/devtools/containeranalysis/v1beta1/containeranalysis.proto}
 */
const ListScanConfigsRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Response for listing scan configurations.
 *
 * @property {Object[]} scanConfigs
 *   The scan configurations requested.
 *
 *   This object should have the same structure as [ScanConfig]{@link google.devtools.containeranalysis.v1beta1.ScanConfig}
 *
 * @property {string} nextPageToken
 *   The next pagination token in the list response. It should be used as
 *   `page_token` for the following request. An empty value means no more
 *   results.
 *
 * @typedef ListScanConfigsResponse
 * @memberof google.devtools.containeranalysis.v1beta1
 * @see [google.devtools.containeranalysis.v1beta1.ListScanConfigsResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/devtools/containeranalysis/v1beta1/containeranalysis.proto}
 */
const ListScanConfigsResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * A request to update a scan configuration.
 *
 * @property {string} name
 *   The name of the scan configuration in the form of
 *   `projects/[PROJECT_ID]/scanConfigs/[SCAN_CONFIG_ID]`.
 *
 * @property {Object} scanConfig
 *   The updated scan configuration.
 *
 *   This object should have the same structure as [ScanConfig]{@link google.devtools.containeranalysis.v1beta1.ScanConfig}
 *
 * @typedef UpdateScanConfigRequest
 * @memberof google.devtools.containeranalysis.v1beta1
 * @see [google.devtools.containeranalysis.v1beta1.UpdateScanConfigRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/devtools/containeranalysis/v1beta1/containeranalysis.proto}
 */
const UpdateScanConfigRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};