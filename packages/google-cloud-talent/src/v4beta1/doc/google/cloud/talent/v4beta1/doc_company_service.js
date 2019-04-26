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
 * The Request of the CreateCompany method.
 *
 * @property {string} parent
 *   Required.
 *
 *   Resource name of the tenant under which the company is created.
 *
 *   The format is "projects/{project_id}/tenants/{tenant_id}", for example,
 *   "projects/api-test-project/tenant/foo".
 *
 *   Tenant id is optional and a default tenant is created if unspecified, for
 *   example, "projects/api-test-project".
 *
 * @property {Object} company
 *   Required.
 *
 *   The company to be created.
 *
 *   This object should have the same structure as [Company]{@link google.cloud.talent.v4beta1.Company}
 *
 * @typedef CreateCompanyRequest
 * @memberof google.cloud.talent.v4beta1
 * @see [google.cloud.talent.v4beta1.CreateCompanyRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/talent/v4beta1/company_service.proto}
 */
const CreateCompanyRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request for getting a company by name.
 *
 * @property {string} name
 *   Required.
 *
 *   The resource name of the company to be retrieved.
 *
 *   The format is
 *   "projects/{project_id}/tenants/{tenant_id}/companies/{company_id}", for
 *   example, "projects/api-test-project/tenants/foo/companies/bar".
 *
 *   Tenant id is optional and the default tenant is used if unspecified, for
 *   example, "projects/api-test-project/companies/bar".
 *
 * @typedef GetCompanyRequest
 * @memberof google.cloud.talent.v4beta1
 * @see [google.cloud.talent.v4beta1.GetCompanyRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/talent/v4beta1/company_service.proto}
 */
const GetCompanyRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request for updating a specified company.
 *
 * @property {Object} company
 *   Required.
 *
 *   The company resource to replace the current resource in the system.
 *
 *   This object should have the same structure as [Company]{@link google.cloud.talent.v4beta1.Company}
 *
 * @property {Object} updateMask
 *   Optional but strongly recommended for the best service
 *   experience.
 *
 *   If update_mask is provided, only the specified fields in
 *   company are updated. Otherwise all the fields are updated.
 *
 *   A field mask to specify the company fields to be updated. Only
 *   top level fields of Company are supported.
 *
 *   This object should have the same structure as [FieldMask]{@link google.protobuf.FieldMask}
 *
 * @typedef UpdateCompanyRequest
 * @memberof google.cloud.talent.v4beta1
 * @see [google.cloud.talent.v4beta1.UpdateCompanyRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/talent/v4beta1/company_service.proto}
 */
const UpdateCompanyRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request to delete a company.
 *
 * @property {string} name
 *   Required.
 *
 *   The resource name of the company to be deleted.
 *
 *   The format is
 *   "projects/{project_id}/tenants/{tenant_id}/companies/{company_id}", for
 *   example, "projects/api-test-project/tenants/foo/companies/bar".
 *
 *   Tenant id is optional and the default tenant is used if unspecified, for
 *   example, "projects/api-test-project/companies/bar".
 *
 * @typedef DeleteCompanyRequest
 * @memberof google.cloud.talent.v4beta1
 * @see [google.cloud.talent.v4beta1.DeleteCompanyRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/talent/v4beta1/company_service.proto}
 */
const DeleteCompanyRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * List companies for which the client has ACL visibility.
 *
 * @property {string} parent
 *   Required.
 *
 *   Resource name of the tenant under which the company is created.
 *
 *   The format is "projects/{project_id}/tenants/{tenant_id}", for example,
 *   "projects/api-test-project/tenant/foo".
 *
 *   Tenant id is optional and the default tenant is used if unspecified, for
 *   example, "projects/api-test-project".
 *
 * @property {string} pageToken
 *   Optional.
 *
 *   The starting indicator from which to return results.
 *
 * @property {number} pageSize
 *   Optional.
 *
 *   The maximum number of companies to be returned, at most 100.
 *   Default is 100 if a non-positive number is provided.
 *
 * @property {boolean} requireOpenJobs
 *   Optional.
 *
 *   Set to true if the companies requested must have open jobs.
 *
 *   Defaults to false.
 *
 *   If true, at most page_size of companies are fetched, among which
 *   only those with open jobs are returned.
 *
 * @typedef ListCompaniesRequest
 * @memberof google.cloud.talent.v4beta1
 * @see [google.cloud.talent.v4beta1.ListCompaniesRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/talent/v4beta1/company_service.proto}
 */
const ListCompaniesRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Output only.
 *
 * The List companies response object.
 *
 * @property {Object[]} companies
 *   Companies for the current client.
 *
 *   This object should have the same structure as [Company]{@link google.cloud.talent.v4beta1.Company}
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
 * @typedef ListCompaniesResponse
 * @memberof google.cloud.talent.v4beta1
 * @see [google.cloud.talent.v4beta1.ListCompaniesResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/talent/v4beta1/company_service.proto}
 */
const ListCompaniesResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};