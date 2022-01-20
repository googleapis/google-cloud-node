// Copyright 2021 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


'use strict';

function main(scope) {
  // [START cloudasset_v1_generated_AssetService_SearchAllIamPolicies_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. A scope can be a project, a folder, or an organization. The search is
   *  limited to the IAM policies within the `scope`. The caller must be granted
   *  the
   *  `cloudasset.assets.searchAllIamPolicies` (https://cloud.google.com/asset-inventory/docs/access-control#required_permissions)
   *  permission on the desired scope.
   *  The allowed values are:
   *  * projects/{PROJECT_ID} (e.g., "projects/foo-bar")
   *  * projects/{PROJECT_NUMBER} (e.g., "projects/12345678")
   *  * folders/{FOLDER_NUMBER} (e.g., "folders/1234567")
   *  * organizations/{ORGANIZATION_NUMBER} (e.g., "organizations/123456")
   */
  // const scope = 'abc123'
  /**
   *  Optional. The query statement. See how to construct a
   *  query (https://cloud.google.com/asset-inventory/docs/searching-iam-policies#how_to_construct_a_query)
   *  for more information. If not specified or empty, it will search all the
   *  IAM policies within the specified `scope`. Note that the query string is
   *  compared against each Cloud IAM policy binding, including its members,
   *  roles, and Cloud IAM conditions. The returned Cloud IAM policies will only
   *  contain the bindings that match your query. To learn more about the IAM
   *  policy structure, see IAM policy
   *  doc (https://cloud.google.com/iam/docs/policies#structure).
   *  Examples:
   *  * `policy:amy@gmail.com` to find IAM policy bindings that specify user
   *    "amy@gmail.com".
   *  * `policy:roles/compute.admin` to find IAM policy bindings that specify
   *    the Compute Admin role.
   *  * `policy:comp*` to find IAM policy bindings that contain "comp" as a
   *    prefix of any word in the binding.
   *  * `policy.role.permissions:storage.buckets.update` to find IAM policy
   *    bindings that specify a role containing "storage.buckets.update"
   *    permission. Note that if callers don't have `iam.roles.get` access to a
   *    role's included permissions, policy bindings that specify this role will
   *    be dropped from the search results.
   *  * `policy.role.permissions:upd*` to find IAM policy bindings that specify a
   *    role containing "upd" as a prefix of any word in the role permission.
   *    Note that if callers don't have `iam.roles.get` access to a role's
   *    included permissions, policy bindings that specify this role will be
   *    dropped from the search results.
   *  * `resource:organizations/123456` to find IAM policy bindings
   *    that are set on "organizations/123456".
   *  * `resource=//cloudresourcemanager.googleapis.com/projects/myproject` to
   *    find IAM policy bindings that are set on the project named "myproject".
   *  * `Important` to find IAM policy bindings that contain "Important" as a
   *    word in any of the searchable fields (except for the included
   *    permissions).
   *  * `resource:(instance1 OR instance2) policy:amy` to find
   *    IAM policy bindings that are set on resources "instance1" or
   *    "instance2" and also specify user "amy".
   *  * `roles:roles/compute.admin` to find IAM policy bindings that specify the
   *    Compute Admin role.
   *  * `memberTypes:user` to find IAM policy bindings that contain the "user"
   *    member type.
   */
  // const query = 'abc123'
  /**
   *  Optional. The page size for search result pagination. Page size is capped at 500 even
   *  if a larger value is given. If set to zero, server will pick an appropriate
   *  default. Returned results may be fewer than requested. When this happens,
   *  there could be more results as long as `next_page_token` is returned.
   */
  // const pageSize = 1234
  /**
   *  Optional. If present, retrieve the next batch of results from the preceding call to
   *  this method. `page_token` must be the value of `next_page_token` from the
   *  previous response. The values of all other method parameters must be
   *  identical to those in the previous call.
   */
  // const pageToken = 'abc123'
  /**
   *  Optional. A list of asset types that the IAM policies are attached to. If empty, it
   *  will search the IAM policies that are attached to all the searchable asset
   *  types (https://cloud.google.com/asset-inventory/docs/supported-asset-types#searchable_asset_types).
   *  Regular expressions are also supported. For example:
   *  * "compute.googleapis.com.*" snapshots IAM policies attached to asset type
   *  starts with "compute.googleapis.com".
   *  * ".*Instance" snapshots IAM policies attached to asset type ends with
   *  "Instance".
   *  * ".*Instance.*" snapshots IAM policies attached to asset type contains
   *  "Instance".
   *  See RE2 (https://github.com/google/re2/wiki/Syntax) for all supported
   *  regular expression syntax. If the regular expression does not match any
   *  supported asset type, an INVALID_ARGUMENT error will be returned.
   */
  // const assetTypes = 'abc123'
  /**
   *  Optional. A comma-separated list of fields specifying the sorting order of the
   *  results. The default order is ascending. Add " DESC" after the field name
   *  to indicate descending order. Redundant space characters are ignored.
   *  Example: "assetType DESC, resource".
   *  Only singular primitive fields in the response are sortable:
   *    * resource
   *    * assetType
   *    * project
   *  All the other fields such as repeated fields (e.g., `folders`) and
   *  non-primitive fields (e.g., `policy`) are not supported.
   */
  // const orderBy = 'abc123'

  // Imports the Asset library
  const {AssetServiceClient} = require('@google-cloud/asset').v1;

  // Instantiates a client
  const assetClient = new AssetServiceClient();

  async function callSearchAllIamPolicies() {
    // Construct request
    const request = {
      scope,
    };

    // Run request
    const iterable = await assetClient.searchAllIamPoliciesAsync(request);
    for await (const response of iterable) {
        console.log(response);
    }
  }

  callSearchAllIamPolicies();
  // [END cloudasset_v1_generated_AssetService_SearchAllIamPolicies_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
