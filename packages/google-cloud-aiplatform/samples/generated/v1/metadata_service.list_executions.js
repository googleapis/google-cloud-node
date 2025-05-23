// Copyright 2025 Google LLC
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
//
// ** This file is automatically generated by gapic-generator-typescript. **
// ** https://github.com/googleapis/gapic-generator-typescript **
// ** All changes to this file may be overwritten. **



'use strict';

function main(parent) {
  // [START aiplatform_v1_generated_MetadataService_ListExecutions_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The MetadataStore whose Executions should be listed.
   *  Format:
   *  `projects/{project}/locations/{location}/metadataStores/{metadatastore}`
   */
  // const parent = 'abc123'
  /**
   *  The maximum number of Executions to return. The service may return fewer.
   *  Must be in range 1-1000, inclusive. Defaults to 100.
   */
  // const pageSize = 1234
  /**
   *  A page token, received from a previous
   *  MetadataService.ListExecutions google.cloud.aiplatform.v1.MetadataService.ListExecutions 
   *  call. Provide this to retrieve the subsequent page.
   *  When paginating, all other provided parameters must match the call that
   *  provided the page token. (Otherwise the request will fail with an
   *  INVALID_ARGUMENT error.)
   */
  // const pageToken = 'abc123'
  /**
   *  Filter specifying the boolean condition for the Executions to satisfy in
   *  order to be part of the result set.
   *  The syntax to define filter query is based on https://google.aip.dev/160.
   *  Following are the supported set of filters:
   *  *  **Attribute filtering**:
   *     For example: `display_name = "test"`.
   *     Supported fields include: `name`, `display_name`, `state`,
   *     `schema_title`, `create_time`, and `update_time`.
   *     Time fields, such as `create_time` and `update_time`, require values
   *     specified in RFC-3339 format.
   *     For example: `create_time = "2020-11-19T11:30:00-04:00"`.
   *  *  **Metadata field**:
   *     To filter on metadata fields use traversal operation as follows:
   *     `metadata.<field_name>.<type_value>`
   *     For example: `metadata.field_1.number_value = 10.0`
   *     In case the field name contains special characters (such as colon), one
   *     can embed it inside double quote.
   *     For example: `metadata."field:1".number_value = 10.0`
   *  *  **Context based filtering**:
   *     To filter Executions based on the contexts to which they belong use
   *     the function operator with the full resource name:
   *     `in_context(<context-name>)`.
   *     For example:
   *     `in_context("projects/<project_number>/locations/<location>/metadataStores/<metadatastore_name>/contexts/<context-id>")`
   *  Each of the above supported filters can be combined together using
   *  logical operators (`AND` & `OR`). Maximum nested expression depth allowed
   *  is 5.
   *  For example: `display_name = "test" AND metadata.field1.bool_value = true`.
   */
  // const filter = 'abc123'
  /**
   *  How the list of messages is ordered. Specify the values to order by and an
   *  ordering operation. The default sorting order is ascending. To specify
   *  descending order for a field, users append a " desc" suffix; for example:
   *  "foo desc, bar".
   *  Subfields are specified with a `.` character, such as foo.bar.
   *  see https://google.aip.dev/132#ordering for more details.
   */
  // const orderBy = 'abc123'

  // Imports the Aiplatform library
  const {MetadataServiceClient} = require('@google-cloud/aiplatform').v1;

  // Instantiates a client
  const aiplatformClient = new MetadataServiceClient();

  async function callListExecutions() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const iterable = aiplatformClient.listExecutionsAsync(request);
    for await (const response of iterable) {
        console.log(response);
    }
  }

  callListExecutions();
  // [END aiplatform_v1_generated_MetadataService_ListExecutions_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
