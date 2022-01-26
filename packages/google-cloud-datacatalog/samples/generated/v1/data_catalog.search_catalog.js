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
  // [START datacatalog_v1_generated_DataCatalog_SearchCatalog_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The scope of this search request.
   *  The `scope` is invalid if `include_org_ids`, `include_project_ids` are
   *  empty AND `include_gcp_public_datasets` is set to `false`. In this case,
   *  the request returns an error.
   */
  // const scope = {}
  /**
   *  Optional. The query string with a minimum of 3 characters and specific syntax.
   *  For more information, see
   *  Data Catalog search
   *  syntax (https://cloud.google.com/data-catalog/docs/how-to/search-reference).
   *  An empty query string returns all data assets (in the specified scope)
   *  that you have access to.
   *  A query string can be a simple `xyz` or qualified by predicates:
   *  * `name:x`
   *  * `column:y`
   *  * `description:z`
   */
  // const query = 'abc123'
  /**
   *  Number of results to return in a single search page.
   *  Can't be negative or 0, defaults to 10 in this case.
   *  The maximum number is 1000. If exceeded, throws an "invalid argument"
   *  exception.
   */
  // const pageSize = 1234
  /**
   *  Optional. Pagination token that, if specified, returns the next page of search
   *  results. If empty, returns the first page.
   *  This token is returned in the SearchCatalogResponse.next_page_token google.cloud.datacatalog.v1.SearchCatalogResponse.next_page_token 
   *  field of the response to a previous
   *  SearchCatalogRequest google.cloud.datacatalog.v1.DataCatalog.SearchCatalog 
   *  call.
   */
  // const pageToken = 'abc123'
  /**
   *  Specifies the order of results.
   *  Currently supported case-sensitive values are:
   *  * `relevance` that can only be descending
   *  * `last_modified_timestamp asc|desc` with descending (`desc`) as default
   *  If this parameter is omitted, it defaults to the descending `relevance`.
   */
  // const orderBy = 'abc123'

  // Imports the Datacatalog library
  const {DataCatalogClient} = require('@google-cloud/datacatalog').v1;

  // Instantiates a client
  const datacatalogClient = new DataCatalogClient();

  async function callSearchCatalog() {
    // Construct request
    const request = {
      scope,
    };

    // Run request
    const iterable = await datacatalogClient.searchCatalogAsync(request);
    for await (const response of iterable) {
        console.log(response);
    }
  }

  callSearchCatalog();
  // [END datacatalog_v1_generated_DataCatalog_SearchCatalog_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
