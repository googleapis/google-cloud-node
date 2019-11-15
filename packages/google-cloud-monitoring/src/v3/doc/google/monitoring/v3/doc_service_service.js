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
 * The `CreateService` request.
 *
 * @property {string} parent
 *   Resource name of the parent workspace.
 *   Of the form `projects/{project_id}`.
 *
 * @property {string} serviceId
 *   Optional. The Service id to use for this Service. If omitted, an id will be
 *   generated instead. Must match the pattern [a-z0-9\-]+
 *
 * @property {Object} service
 *   The `Service` to create.
 *
 *   This object should have the same structure as [Service]{@link google.monitoring.v3.Service}
 *
 * @typedef CreateServiceRequest
 * @memberof google.monitoring.v3
 * @see [google.monitoring.v3.CreateServiceRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/monitoring/v3/service_service.proto}
 */
const CreateServiceRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The `GetService` request.
 *
 * @property {string} name
 *   Resource name of the `Service`.
 *   Of the form `projects/{project_id}/services/{service_id}`.
 *
 * @typedef GetServiceRequest
 * @memberof google.monitoring.v3
 * @see [google.monitoring.v3.GetServiceRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/monitoring/v3/service_service.proto}
 */
const GetServiceRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The `ListServices` request.
 *
 * @property {string} parent
 *   Resource name of the parent `Workspace`.
 *   Of the form `projects/{project_id}`.
 *
 * @property {string} filter
 *   A filter specifying what `Service`s to return. The filter currently
 *   supports the following fields:
 *
 *       - `identifier_case`
 *       - `app_engine.module_id`
 *       - `cloud_endpoints.service`
 *       - `cluster_istio.location`
 *       - `cluster_istio.cluster_name`
 *       - `cluster_istio.service_namespace`
 *       - `cluster_istio.service_name`
 *
 *   `identifier_case` refers to which option in the identifier oneof is
 *   populated. For example, the filter `identifier_case = "CUSTOM"` would match
 *   all services with a value for the `custom` field. Valid options are
 *   "CUSTOM", "APP_ENGINE", "CLOUD_ENDPOINTS", and "CLUSTER_ISTIO".
 *
 * @property {number} pageSize
 *   A non-negative number that is the maximum number of results to return.
 *   When 0, use default page size.
 *
 * @property {string} pageToken
 *   If this field is not empty then it must contain the `nextPageToken` value
 *   returned by a previous call to this method.  Using this field causes the
 *   method to return additional results from the previous method call.
 *
 * @typedef ListServicesRequest
 * @memberof google.monitoring.v3
 * @see [google.monitoring.v3.ListServicesRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/monitoring/v3/service_service.proto}
 */
const ListServicesRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The `ListServices` response.
 *
 * @property {Object[]} services
 *   The `Service`s matching the specified filter.
 *
 *   This object should have the same structure as [Service]{@link google.monitoring.v3.Service}
 *
 * @property {string} nextPageToken
 *   If there are more results than have been returned, then this field is set
 *   to a non-empty value.  To see the additional results,
 *   use that value as `pageToken` in the next call to this method.
 *
 * @typedef ListServicesResponse
 * @memberof google.monitoring.v3
 * @see [google.monitoring.v3.ListServicesResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/monitoring/v3/service_service.proto}
 */
const ListServicesResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The `UpdateService` request.
 *
 * @property {Object} service
 *   The `Service` to draw updates from.
 *   The given `name` specifies the resource to update.
 *
 *   This object should have the same structure as [Service]{@link google.monitoring.v3.Service}
 *
 * @property {Object} updateMask
 *   A set of field paths defining which fields to use for the update.
 *
 *   This object should have the same structure as [FieldMask]{@link google.protobuf.FieldMask}
 *
 * @typedef UpdateServiceRequest
 * @memberof google.monitoring.v3
 * @see [google.monitoring.v3.UpdateServiceRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/monitoring/v3/service_service.proto}
 */
const UpdateServiceRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The `DeleteService` request.
 *
 * @property {string} name
 *   Resource name of the `Service` to delete.
 *   Of the form `projects/{project_id}/service/{service_id}`.
 *
 * @typedef DeleteServiceRequest
 * @memberof google.monitoring.v3
 * @see [google.monitoring.v3.DeleteServiceRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/monitoring/v3/service_service.proto}
 */
const DeleteServiceRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The `CreateServiceLevelObjective` request.
 *
 * @property {string} parent
 *   Resource name of the parent `Service`.
 *   Of the form `projects/{project_id}/services/{service_id}`.
 *
 * @property {string} serviceLevelObjectiveId
 *   Optional. The ServiceLevelObjective id to use for this
 *   ServiceLevelObjective. If omitted, an id will be generated instead. Must
 *   match the pattern [a-z0-9\-]+
 *
 * @property {Object} serviceLevelObjective
 *   The `ServiceLevelObjective` to create.
 *   The provided `name` will be respected if no `ServiceLevelObjective` exists
 *   with this name.
 *
 *   This object should have the same structure as [ServiceLevelObjective]{@link google.monitoring.v3.ServiceLevelObjective}
 *
 * @typedef CreateServiceLevelObjectiveRequest
 * @memberof google.monitoring.v3
 * @see [google.monitoring.v3.CreateServiceLevelObjectiveRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/monitoring/v3/service_service.proto}
 */
const CreateServiceLevelObjectiveRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The `GetServiceLevelObjective` request.
 *
 * @property {string} name
 *   Resource name of the `ServiceLevelObjective` to get.
 *   Of the form
 *   `projects/{project_id}/services/{service_id}/serviceLevelObjectives/{slo_name}`.
 *
 * @property {number} view
 *   View of the `ServiceLevelObjective` to return. If `DEFAULT`, return the
 *   `ServiceLevelObjective` as originally defined. If `EXPLICIT` and the
 *   `ServiceLevelObjective` is defined in terms of a `BasicSli`, replace the
 *   `BasicSli` with a `RequestBasedSli` spelling out how the SLI is computed.
 *
 *   The number should be among the values of [View]{@link google.monitoring.v3.View}
 *
 * @typedef GetServiceLevelObjectiveRequest
 * @memberof google.monitoring.v3
 * @see [google.monitoring.v3.GetServiceLevelObjectiveRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/monitoring/v3/service_service.proto}
 */
const GetServiceLevelObjectiveRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The `ListServiceLevelObjectives` request.
 *
 * @property {string} parent
 *   Resource name of the parent `Service`.
 *   Of the form `projects/{project_id}/services/{service_id}`.
 *
 * @property {string} filter
 *   A filter specifying what `ServiceLevelObjective`s to return.
 *
 * @property {number} pageSize
 *   A non-negative number that is the maximum number of results to return.
 *   When 0, use default page size.
 *
 * @property {string} pageToken
 *   If this field is not empty then it must contain the `nextPageToken` value
 *   returned by a previous call to this method.  Using this field causes the
 *   method to return additional results from the previous method call.
 *
 * @property {number} view
 *   View of the `ServiceLevelObjective`s to return. If `DEFAULT`, return each
 *   `ServiceLevelObjective` as originally defined. If `EXPLICIT` and the
 *   `ServiceLevelObjective` is defined in terms of a `BasicSli`, replace the
 *   `BasicSli` with a `RequestBasedSli` spelling out how the SLI is computed.
 *
 *   The number should be among the values of [View]{@link google.monitoring.v3.View}
 *
 * @typedef ListServiceLevelObjectivesRequest
 * @memberof google.monitoring.v3
 * @see [google.monitoring.v3.ListServiceLevelObjectivesRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/monitoring/v3/service_service.proto}
 */
const ListServiceLevelObjectivesRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The `ListServiceLevelObjectives` response.
 *
 * @property {Object[]} serviceLevelObjectives
 *   The `ServiceLevelObjective`s matching the specified filter.
 *
 *   This object should have the same structure as [ServiceLevelObjective]{@link google.monitoring.v3.ServiceLevelObjective}
 *
 * @property {string} nextPageToken
 *   If there are more results than have been returned, then this field is set
 *   to a non-empty value.  To see the additional results,
 *   use that value as `pageToken` in the next call to this method.
 *
 * @typedef ListServiceLevelObjectivesResponse
 * @memberof google.monitoring.v3
 * @see [google.monitoring.v3.ListServiceLevelObjectivesResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/monitoring/v3/service_service.proto}
 */
const ListServiceLevelObjectivesResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The `UpdateServiceLevelObjective` request.
 *
 * @property {Object} serviceLevelObjective
 *   The `ServiceLevelObjective` to draw updates from.
 *   The given `name` specifies the resource to update.
 *
 *   This object should have the same structure as [ServiceLevelObjective]{@link google.monitoring.v3.ServiceLevelObjective}
 *
 * @property {Object} updateMask
 *   A set of field paths defining which fields to use for the update.
 *
 *   This object should have the same structure as [FieldMask]{@link google.protobuf.FieldMask}
 *
 * @typedef UpdateServiceLevelObjectiveRequest
 * @memberof google.monitoring.v3
 * @see [google.monitoring.v3.UpdateServiceLevelObjectiveRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/monitoring/v3/service_service.proto}
 */
const UpdateServiceLevelObjectiveRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The `DeleteServiceLevelObjective` request.
 *
 * @property {string} name
 *   Resource name of the `ServiceLevelObjective` to delete.
 *   Of the form
 *   `projects/{project_id}/services/{service_id}/serviceLevelObjectives/{slo_name}`.
 *
 * @typedef DeleteServiceLevelObjectiveRequest
 * @memberof google.monitoring.v3
 * @see [google.monitoring.v3.DeleteServiceLevelObjectiveRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/monitoring/v3/service_service.proto}
 */
const DeleteServiceLevelObjectiveRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};