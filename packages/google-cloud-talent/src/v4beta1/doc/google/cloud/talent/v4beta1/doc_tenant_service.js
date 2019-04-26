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
 * The Request of the CreateTenant method.
 *
 * @property {string} parent
 *   Required.
 *
 *   Resource name of the project under which the tenant is created.
 *
 *   The format is "projects/{project_id}", for example,
 *   "projects/api-test-project".
 *
 * @property {Object} tenant
 *   Required.
 *
 *   The tenant to be created.
 *
 *   This object should have the same structure as [Tenant]{@link google.cloud.talent.v4beta1.Tenant}
 *
 * @typedef CreateTenantRequest
 * @memberof google.cloud.talent.v4beta1
 * @see [google.cloud.talent.v4beta1.CreateTenantRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/talent/v4beta1/tenant_service.proto}
 */
const CreateTenantRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request for getting a tenant by name.
 *
 * @property {string} name
 *   Required.
 *
 *   The resource name of the tenant to be retrieved.
 *
 *   The format is "projects/{project_id}/tenants/{tenant_id}", for example,
 *   "projects/api-test-project/tenants/foo".
 *
 * @typedef GetTenantRequest
 * @memberof google.cloud.talent.v4beta1
 * @see [google.cloud.talent.v4beta1.GetTenantRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/talent/v4beta1/tenant_service.proto}
 */
const GetTenantRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request for updating a specified tenant.
 *
 * @property {Object} tenant
 *   Required.
 *
 *   The tenant resource to replace the current resource in the system.
 *
 *   This object should have the same structure as [Tenant]{@link google.cloud.talent.v4beta1.Tenant}
 *
 * @property {Object} updateMask
 *   Optional but strongly recommended for the best service
 *   experience.
 *
 *   If update_mask is provided, only the specified fields in
 *   tenant are updated. Otherwise all the fields are updated.
 *
 *   A field mask to specify the tenant fields to be updated. Only
 *   top level fields of Tenant are supported.
 *
 *   This object should have the same structure as [FieldMask]{@link google.protobuf.FieldMask}
 *
 * @typedef UpdateTenantRequest
 * @memberof google.cloud.talent.v4beta1
 * @see [google.cloud.talent.v4beta1.UpdateTenantRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/talent/v4beta1/tenant_service.proto}
 */
const UpdateTenantRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request to delete a tenant.
 *
 * @property {string} name
 *   Required.
 *
 *   The resource name of the tenant to be deleted.
 *
 *   The format is "projects/{project_id}/tenants/{tenant_id}", for example,
 *   "projects/api-test-project/tenants/foo".
 *
 * @typedef DeleteTenantRequest
 * @memberof google.cloud.talent.v4beta1
 * @see [google.cloud.talent.v4beta1.DeleteTenantRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/talent/v4beta1/tenant_service.proto}
 */
const DeleteTenantRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * List tenants for which the client has ACL visibility.
 *
 * @property {string} parent
 *   Required.
 *
 *   Resource name of the project under which the tenant is created.
 *
 *   The format is "projects/{project_id}", for example,
 *   "projects/api-test-project".
 *
 * @property {string} pageToken
 *   Optional.
 *
 *   The starting indicator from which to return results.
 *
 * @property {number} pageSize
 *   Optional.
 *
 *   The maximum number of tenants to be returned, at most 100.
 *   Default is 100 if a non-positive number is provided.
 *
 * @typedef ListTenantsRequest
 * @memberof google.cloud.talent.v4beta1
 * @see [google.cloud.talent.v4beta1.ListTenantsRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/talent/v4beta1/tenant_service.proto}
 */
const ListTenantsRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Output only.
 *
 * The List tenants response object.
 *
 * @property {Object[]} tenants
 *   Tenants for the current client.
 *
 *   This object should have the same structure as [Tenant]{@link google.cloud.talent.v4beta1.Tenant}
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
 * @typedef ListTenantsResponse
 * @memberof google.cloud.talent.v4beta1
 * @see [google.cloud.talent.v4beta1.ListTenantsResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/talent/v4beta1/tenant_service.proto}
 */
const ListTenantsResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};