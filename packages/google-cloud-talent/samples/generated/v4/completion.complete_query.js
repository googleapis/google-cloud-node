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

function main(tenant, query, pageSize) {
  // [START jobs_v4_generated_Completion_CompleteQuery_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. Resource name of tenant the completion is performed within.
   *  The format is "projects/{project_id}/tenants/{tenant_id}", for example,
   *  "projects/foo/tenants/bar".
   */
  // const tenant = 'abc123'
  /**
   *  Required. The query used to generate suggestions.
   *  The maximum number of allowed characters is 255.
   */
  // const query = 'abc123'
  /**
   *  The list of languages of the query. This is
   *  the BCP-47 language code, such as "en-US" or "sr-Latn".
   *  For more information, see
   *  [Tags for Identifying Languages](https://tools.ietf.org/html/bcp47).
   *  The maximum number of allowed characters is 255.
   */
  // const languageCodes = 'abc123'
  /**
   *  Required. Completion result count.
   *  The maximum allowed page size is 10.
   */
  // const pageSize = 1234
  /**
   *  If provided, restricts completion to specified company.
   *  The format is
   *  "projects/{project_id}/tenants/{tenant_id}/companies/{company_id}", for
   *  example, "projects/foo/tenants/bar/companies/baz".
   */
  // const company = 'abc123'
  /**
   *  The scope of the completion. The defaults is [CompletionScope.PUBLIC][google.cloud.talent.v4.CompleteQueryRequest.CompletionScope.PUBLIC].
   */
  // const scope = ''
  /**
   *  The completion topic. The default is [CompletionType.COMBINED][google.cloud.talent.v4.CompleteQueryRequest.CompletionType.COMBINED].
   */
  // const type = ''

  // Imports the Talent library
  const {CompletionClient} = require('@google-cloud/talent').v4;

  // Instantiates a client
  const talentClient = new CompletionClient();

  async function completeQuery() {
    // Construct request
    const request = {
      tenant,
      query,
      pageSize,
    };

    // Run request
    const response = await talentClient.completeQuery(request);
    console.log(response);
  }

  completeQuery();
  // [END jobs_v4_generated_Completion_CompleteQuery_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
