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
  // [START cloudasset_v1_generated_AssetService_SearchAllResources_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. A scope can be a project, a folder, or an organization. The search is
   *  limited to the resources within the `scope`. The caller must be granted the
   *  [`cloudasset.assets.searchAllResources`](https://cloud.google.com/asset-inventory/docs/access-control#required_permissions)
   *  permission on the desired scope.
   *  The allowed values are:
   *  * projects/{PROJECT_ID} (e.g., "projects/foo-bar")
   *  * projects/{PROJECT_NUMBER} (e.g., "projects/12345678")
   *  * folders/{FOLDER_NUMBER} (e.g., "folders/1234567")
   *  * organizations/{ORGANIZATION_NUMBER} (e.g., "organizations/123456")
   */
  // const scope = 'abc123'
  /**
   *  Optional. The query statement. See [how to construct a
   *  query](https://cloud.google.com/asset-inventory/docs/searching-resources#how_to_construct_a_query)
   *  for more information. If not specified or empty, it will search all the
   *  resources within the specified `scope`.
   *  Examples:
   *  * `name:Important` to find Cloud resources whose name contains
   *    "Important" as a word.
   *  * `name=Important` to find the Cloud resource whose name is exactly
   *    "Important".
   *  * `displayName:Impor*` to find Cloud resources whose display name
   *    contains "Impor" as a prefix of any word in the field.
   *  * `location:us-west*` to find Cloud resources whose location contains both
   *    "us" and "west" as prefixes.
   *  * `labels:prod` to find Cloud resources whose labels contain "prod" as
   *    a key or value.
   *  * `labels.env:prod` to find Cloud resources that have a label "env"
   *    and its value is "prod".
   *  * `labels.env:*` to find Cloud resources that have a label "env".
   *  * `kmsKey:key` to find Cloud resources encrypted with a customer-managed
   *    encryption key whose name contains the word "key".
   *  * `state:ACTIVE` to find Cloud resources whose state contains "ACTIVE" as a
   *    word.
   *  * `NOT state:ACTIVE` to find Cloud resources whose state doesn't contain
   *    "ACTIVE" as a word.
   *  * `createTime<1609459200` to find Cloud resources that were created before
   *    "2021-01-01 00:00:00 UTC". 1609459200 is the epoch timestamp of
   *    "2021-01-01 00:00:00 UTC" in seconds.
   *  * `updateTime>1609459200` to find Cloud resources that were updated after
   *    "2021-01-01 00:00:00 UTC". 1609459200 is the epoch timestamp of
   *    "2021-01-01 00:00:00 UTC" in seconds.
   *  * `Important` to find Cloud resources that contain "Important" as a word
   *    in any of the searchable fields.
   *  * `Impor*` to find Cloud resources that contain "Impor" as a prefix of any
   *    word in any of the searchable fields.
   *  * `Important location:(us-west1 OR global)` to find Cloud
   *    resources that contain "Important" as a word in any of the searchable
   *    fields and are also located in the "us-west1" region or the "global"
   *    location.
   */
  // const query = 'abc123'
  /**
   *  Optional. A list of asset types that this request searches for. If empty, it will
   *  search all the [searchable asset
   *  types](https://cloud.google.com/asset-inventory/docs/supported-asset-types#searchable_asset_types).
   *  Regular expressions are also supported. For example:
   *  * "compute.googleapis.com.*" snapshots resources whose asset type starts
   *  with "compute.googleapis.com".
   *  * ".*Instance" snapshots resources whose asset type ends with "Instance".
   *  * ".*Instance.*" snapshots resources whose asset type contains "Instance".
   *  See [RE2](https://github.com/google/re2/wiki/Syntax) for all supported
   *  regular expression syntax. If the regular expression does not match any
   *  supported asset type, an INVALID_ARGUMENT error will be returned.
   */
  // const assetTypes = 'abc123'
  /**
   *  Optional. The page size for search result pagination. Page size is capped at 500 even
   *  if a larger value is given. If set to zero, server will pick an appropriate
   *  default. Returned results may be fewer than requested. When this happens,
   *  there could be more results as long as `next_page_token` is returned.
   */
  // const pageSize = 1234
  /**
   *  Optional. If present, then retrieve the next batch of results from the preceding call
   *  to this method. `page_token` must be the value of `next_page_token` from
   *  the previous response. The values of all other method parameters, must be
   *  identical to those in the previous call.
   */
  // const pageToken = 'abc123'
  /**
   *  Optional. A comma-separated list of fields specifying the sorting order of the
   *  results. The default order is ascending. Add " DESC" after the field name
   *  to indicate descending order. Redundant space characters are ignored.
   *  Example: "location DESC, name".
   *  Only singular primitive fields in the response are sortable:
   *    * name
   *    * assetType
   *    * project
   *    * displayName
   *    * description
   *    * location
   *    * kmsKey
   *    * createTime
   *    * updateTime
   *    * state
   *    * parentFullResourceName
   *    * parentAssetType
   *  All the other fields such as repeated fields (e.g., `networkTags`), map
   *  fields (e.g., `labels`) and struct fields (e.g., `additionalAttributes`)
   *  are not supported.
   */
  // const orderBy = 'abc123'
  /**
   *  Optional. A comma-separated list of fields specifying which fields to be returned in
   *  ResourceSearchResult. Only '*' or combination of top level fields can be
   *  specified. Field names of both snake_case and camelCase are supported.
   *  Examples: `"*"`, `"name,location"`, `"name,versionedResources"`.
   *  The read_mask paths must be valid field paths listed but not limited to
   *  (both snake_case and camelCase are supported):
   *    * name
   *    * assetType
   *    * project
   *    * displayName
   *    * description
   *    * location
   *    * labels
   *    * networkTags
   *    * kmsKey
   *    * createTime
   *    * updateTime
   *    * state
   *    * additionalAttributes
   *    * versionedResources
   *  If read_mask is not specified, all fields except versionedResources will
   *  be returned.
   *  If only '*' is specified, all fields including versionedResources will be
   *  returned.
   *  Any invalid field path will trigger INVALID_ARGUMENT error.
   */
  // const readMask = ''

  // Imports the Asset library
  const {AssetServiceClient} = require('@google-cloud/asset').v1;

  // Instantiates a client
  const assetClient = new AssetServiceClient();

  async function searchAllResources() {
    // Construct request
    const request = {
      scope,
    };

    // Run request
    const iterable = await assetClient.searchAllResourcesAsync(request);
    for await (const response of iterable) {
      console.log(response);
    }
  }

  searchAllResources();
  // [END cloudasset_v1_generated_AssetService_SearchAllResources_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
