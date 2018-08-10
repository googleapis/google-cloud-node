// Copyright 2018 Google LLC
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
 * The protocol for the `ListUptimeCheckConfigs` request.
 *
 * @property {string} parent
 *   The project whose uptime check configurations are listed. The format
 *     is `projects/[PROJECT_ID]`.
 *
 * @property {number} pageSize
 *   The maximum number of results to return in a single response. The server
 *   may further constrain the maximum number of results returned in a single
 *   page. If the page_size is <=0, the server will decide the number of results
 *   to be returned.
 *
 * @property {string} pageToken
 *   If this field is not empty then it must contain the `nextPageToken` value
 *   returned by a previous call to this method.  Using this field causes the
 *   method to return more results from the previous method call.
 *
 * @typedef ListUptimeCheckConfigsRequest
 * @memberof google.monitoring.v3
 * @see [google.monitoring.v3.ListUptimeCheckConfigsRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/monitoring/v3/uptime_service.proto}
 */
var ListUptimeCheckConfigsRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The protocol for the `ListUptimeCheckConfigs` response.
 *
 * @property {Object[]} uptimeCheckConfigs
 *   The returned uptime check configurations.
 *
 *   This object should have the same structure as [UptimeCheckConfig]{@link google.monitoring.v3.UptimeCheckConfig}
 *
 * @property {string} nextPageToken
 *   This field represents the pagination token to retrieve the next page of
 *   results. If the value is empty, it means no further results for the
 *   request. To retrieve the next page of results, the value of the
 *   next_page_token is passed to the subsequent List method call (in the
 *   request message's page_token field).
 *
 * @property {number} totalSize
 *   The total number of uptime check configurations for the project,
 *   irrespective of any pagination.
 *
 * @typedef ListUptimeCheckConfigsResponse
 * @memberof google.monitoring.v3
 * @see [google.monitoring.v3.ListUptimeCheckConfigsResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/monitoring/v3/uptime_service.proto}
 */
var ListUptimeCheckConfigsResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The protocol for the `GetUptimeCheckConfig` request.
 *
 * @property {string} name
 *   The uptime check configuration to retrieve. The format
 *     is `projects/[PROJECT_ID]/uptimeCheckConfigs/[UPTIME_CHECK_ID]`.
 *
 * @typedef GetUptimeCheckConfigRequest
 * @memberof google.monitoring.v3
 * @see [google.monitoring.v3.GetUptimeCheckConfigRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/monitoring/v3/uptime_service.proto}
 */
var GetUptimeCheckConfigRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The protocol for the `CreateUptimeCheckConfig` request.
 *
 * @property {string} parent
 *   The project in which to create the uptime check. The format
 *     is `projects/[PROJECT_ID]`.
 *
 * @property {Object} uptimeCheckConfig
 *   The new uptime check configuration.
 *
 *   This object should have the same structure as [UptimeCheckConfig]{@link google.monitoring.v3.UptimeCheckConfig}
 *
 * @typedef CreateUptimeCheckConfigRequest
 * @memberof google.monitoring.v3
 * @see [google.monitoring.v3.CreateUptimeCheckConfigRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/monitoring/v3/uptime_service.proto}
 */
var CreateUptimeCheckConfigRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The protocol for the `UpdateUptimeCheckConfig` request.
 *
 * @property {Object} updateMask
 *   Optional. If present, only the listed fields in the current uptime check
 *   configuration are updated with values from the new configuration. If this
 *   field is empty, then the current configuration is completely replaced with
 *   the new configuration.
 *
 *   This object should have the same structure as [FieldMask]{@link google.protobuf.FieldMask}
 *
 * @property {Object} uptimeCheckConfig
 *   Required. If an `"updateMask"` has been specified, this field gives
 *   the values for the set of fields mentioned in the `"updateMask"`. If an
 *   `"updateMask"` has not been given, this uptime check configuration replaces
 *   the current configuration. If a field is mentioned in `"updateMask"` but
 *   the corresonding field is omitted in this partial uptime check
 *   configuration, it has the effect of deleting/clearing the field from the
 *   configuration on the server.
 *
 *   The following fields can be updated: `display_name`,
 *   `http_check`, `tcp_check`, `timeout`, `content_matchers`, and
 *   `selected_regions`.
 *
 *   This object should have the same structure as [UptimeCheckConfig]{@link google.monitoring.v3.UptimeCheckConfig}
 *
 * @typedef UpdateUptimeCheckConfigRequest
 * @memberof google.monitoring.v3
 * @see [google.monitoring.v3.UpdateUptimeCheckConfigRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/monitoring/v3/uptime_service.proto}
 */
var UpdateUptimeCheckConfigRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The protocol for the `DeleteUptimeCheckConfig` request.
 *
 * @property {string} name
 *   The uptime check configuration to delete. The format
 *     is `projects/[PROJECT_ID]/uptimeCheckConfigs/[UPTIME_CHECK_ID]`.
 *
 * @typedef DeleteUptimeCheckConfigRequest
 * @memberof google.monitoring.v3
 * @see [google.monitoring.v3.DeleteUptimeCheckConfigRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/monitoring/v3/uptime_service.proto}
 */
var DeleteUptimeCheckConfigRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The protocol for the `ListUptimeCheckIps` request.
 *
 * @property {number} pageSize
 *   The maximum number of results to return in a single response. The server
 *   may further constrain the maximum number of results returned in a single
 *   page. If the page_size is <=0, the server will decide the number of results
 *   to be returned.
 *   NOTE: this field is not yet implemented
 *
 * @property {string} pageToken
 *   If this field is not empty then it must contain the `nextPageToken` value
 *   returned by a previous call to this method.  Using this field causes the
 *   method to return more results from the previous method call.
 *   NOTE: this field is not yet implemented
 *
 * @typedef ListUptimeCheckIpsRequest
 * @memberof google.monitoring.v3
 * @see [google.monitoring.v3.ListUptimeCheckIpsRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/monitoring/v3/uptime_service.proto}
 */
var ListUptimeCheckIpsRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The protocol for the `ListUptimeCheckIps` response.
 *
 * @property {Object[]} uptimeCheckIps
 *   The returned list of IP addresses (including region and location) that the
 *   checkers run from.
 *
 *   This object should have the same structure as [UptimeCheckIp]{@link google.monitoring.v3.UptimeCheckIp}
 *
 * @property {string} nextPageToken
 *   This field represents the pagination token to retrieve the next page of
 *   results. If the value is empty, it means no further results for the
 *   request. To retrieve the next page of results, the value of the
 *   next_page_token is passed to the subsequent List method call (in the
 *   request message's page_token field).
 *   NOTE: this field is not yet implemented
 *
 * @typedef ListUptimeCheckIpsResponse
 * @memberof google.monitoring.v3
 * @see [google.monitoring.v3.ListUptimeCheckIpsResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/monitoring/v3/uptime_service.proto}
 */
var ListUptimeCheckIpsResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};