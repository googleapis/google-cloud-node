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
 * The Request of the CreateApplication method.
 *
 * @property {string} parent
 *   Required.
 *
 *   Resource name of the profile under which the application is created.
 *
 *   The format is
 *   "projects/{project_id}/tenants/{tenant_id}/profiles/{profile_id}", for
 *   example, "projects/test-project/tenants/test-tenant/profiles/test-profile".
 *
 * @property {Object} application
 *   Required.
 *
 *   The application to be created.
 *
 *   This object should have the same structure as [Application]{@link google.cloud.talent.v4beta1.Application}
 *
 * @typedef CreateApplicationRequest
 * @memberof google.cloud.talent.v4beta1
 * @see [google.cloud.talent.v4beta1.CreateApplicationRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/talent/v4beta1/application_service.proto}
 */
const CreateApplicationRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request for getting a application by name.
 *
 * @property {string} name
 *   Required.
 *
 *   The resource name of the application to be retrieved.
 *
 *   The format is
 *   "projects/{project_id}/tenants/{tenant_id}/profiles/{profile_id}/applications/{application_id}",
 *   for example,
 *   "projects/test-project/tenants/test-tenant/profiles/test-profile/applications/test-application".
 *
 * @typedef GetApplicationRequest
 * @memberof google.cloud.talent.v4beta1
 * @see [google.cloud.talent.v4beta1.GetApplicationRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/talent/v4beta1/application_service.proto}
 */
const GetApplicationRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request for updating a specified application.
 *
 * @property {Object} application
 *   Required.
 *
 *   The application resource to replace the current resource in the system.
 *
 *   This object should have the same structure as [Application]{@link google.cloud.talent.v4beta1.Application}
 *
 * @property {Object} updateMask
 *   Optional but strongly recommended for the best service
 *   experience.
 *
 *   If update_mask is provided, only the specified fields in
 *   application are updated. Otherwise all the fields are updated.
 *
 *   A field mask to specify the application fields to be updated. Only
 *   top level fields of Application are supported.
 *
 *   This object should have the same structure as [FieldMask]{@link google.protobuf.FieldMask}
 *
 * @typedef UpdateApplicationRequest
 * @memberof google.cloud.talent.v4beta1
 * @see [google.cloud.talent.v4beta1.UpdateApplicationRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/talent/v4beta1/application_service.proto}
 */
const UpdateApplicationRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request to delete a application.
 *
 * @property {string} name
 *   Required.
 *
 *   The resource name of the application to be deleted.
 *
 *   The format is
 *   "projects/{project_id}/tenants/{tenant_id}/profiles/{profile_id}/applications/{application_id}",
 *   for example,
 *   "projects/test-project/tenants/test-tenant/profiles/test-profile/applications/test-application".
 *
 * @typedef DeleteApplicationRequest
 * @memberof google.cloud.talent.v4beta1
 * @see [google.cloud.talent.v4beta1.DeleteApplicationRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/talent/v4beta1/application_service.proto}
 */
const DeleteApplicationRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * List applications for which the client has ACL visibility.
 *
 * @property {string} parent
 *   Required.
 *
 *   Resource name of the profile under which the application is created.
 *
 *   The format is
 *   "projects/{project_id}/tenants/{tenant_id}/profiles/{profile_id}", for
 *   example, "projects/test-project/tenants/test-tenant/profiles/test-profile".
 *
 * @property {string} pageToken
 *   Optional.
 *
 *   The starting indicator from which to return results.
 *
 * @property {number} pageSize
 *   Optional.
 *
 *   The maximum number of applications to be returned, at most 100.
 *   Default is 100 if a non-positive number is provided.
 *
 * @typedef ListApplicationsRequest
 * @memberof google.cloud.talent.v4beta1
 * @see [google.cloud.talent.v4beta1.ListApplicationsRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/talent/v4beta1/application_service.proto}
 */
const ListApplicationsRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Output only.
 *
 * The List applications response object.
 *
 * @property {Object[]} applications
 *   Applications for the current client.
 *
 *   This object should have the same structure as [Application]{@link google.cloud.talent.v4beta1.Application}
 *
 * @property {string} nextPageToken
 *   A token to retrieve the next page of results.
 *
 * @property {Object} metadata
 *   Additional information for the API invocation, such as the request
 *   tracking id.
 *
 *   This object should have the same structure as [ResponseMetadata]{@link google.cloud.talent.v4beta1.ResponseMetadata}
 *
 * @typedef ListApplicationsResponse
 * @memberof google.cloud.talent.v4beta1
 * @see [google.cloud.talent.v4beta1.ListApplicationsResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/talent/v4beta1/application_service.proto}
 */
const ListApplicationsResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};