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

function main(scope, query) {
  // [START datacatalog_v1beta1_generated_DataCatalog_SearchCatalog_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The scope of this search request. A `scope` that has empty
   *  `include_org_ids`, `include_project_ids` AND false
   *  `include_gcp_public_datasets` is considered invalid. Data Catalog will
   *  return an error in such a case.
   */
  // const scope = {}
  /**
   *  Required. The query string in search query syntax. The query must be non-empty.
   *  Query strings can be simple as "x" or more qualified as:
   *  * name:x
   *  * column:x
   *  * description:y
   *  Note: Query tokens need to have a minimum of 3 characters for substring
   *  matching to work correctly. See Data Catalog Search
   *  Syntax (https://cloud.google.com/data-catalog/docs/how-to/search-reference)
   *  for more information.
   */
  // const query = 'abc123'
  /**
   *  Number of results in the search page. If <=0 then defaults to 10. Max limit
   *  for page_size is 1000. Throws an invalid argument for page_size > 1000.
   */
  // const pageSize = 1234
  /**
   *  Optional. Pagination token returned in an earlier
   *  SearchCatalogResponse.next_page_token google.cloud.datacatalog.v1beta1.SearchCatalogResponse.next_page_token, which
   *  indicates that this is a continuation of a prior
   *  SearchCatalogRequest google.cloud.datacatalog.v1beta1.DataCatalog.SearchCatalog 
   *  call, and that the system should return the next page of data. If empty,
   *  the first page is returned.
   */
  // const pageToken = 'abc123'
  /**
   *  Specifies the ordering of results, currently supported case-sensitive
   *  choices are:
   *    * `relevance`, only supports descending
   *    * `last_modified_timestamp asc|desc`, defaults to descending if not
   *      specified
   *  If not specified, defaults to `relevance` descending.
   */
  // const orderBy = 'abc123'

  // Imports the Datacatalog library
  const {DataCatalogClient} = require('@google-cloud/datacatalog').v1beta1;

  // Instantiates a client
  const datacatalogClient = new DataCatalogClient();

  async function callSearchCatalog() {
    // Construct request
    const request = {
      scope,
      query,
    };

    // Run request
    const iterable = await datacatalogClient.searchCatalogAsync(request);
    for await (const response of iterable) {
        console.log(response);
    }
  }

  callSearchCatalog();
  // [END datacatalog_v1beta1_generated_DataCatalog_SearchCatalog_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
