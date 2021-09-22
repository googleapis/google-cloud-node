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

function main(parent) {
  // [START aiplatform_list_artifacts_sample]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The MetadataStore whose Artifacts should be listed.
   *  Format:
   *  projects/{project}/locations/{location}/metadataStores/{metadatastore}
   */
  // const parent = 'abc123'
  /**
   *  The maximum number of Artifacts to return. The service may return fewer.
   *  Must be in range 1-1000, inclusive. Defaults to 100.
   */
  // const pageSize = 1234
  /**
   *  A page token, received from a previous [MetadataService.ListArtifacts][google.cloud.aiplatform.v1beta1.MetadataService.ListArtifacts]
   *  call. Provide this to retrieve the subsequent page.
   *  When paginating, all other provided parameters must match the call that
   *  provided the page token. (Otherwise the request will fail with
   *  INVALID_ARGUMENT error.)
   */
  // const pageToken = 'abc123'
  /**
   *  Filter specifying the boolean condition for the Artifacts to satisfy in
   *  order to be part of the result set.
   *  The syntax to define filter query is based on https://google.aip.dev/160.
   *  The supported set of filters include the following:
   *  *   **Attribute filtering**:
   *      For example: `display_name = "test"`.
   *      Supported fields include: `name`, `display_name`, `uri`, `state`,
   *      `schema_title`, `create_time`, and `update_time`.
   *      Time fields, such as `create_time` and `update_time`, require values
   *      specified in RFC-3339 format.
   *      For example: `create_time = "2020-11-19T11:30:00-04:00"`
   *  *   **Metadata field**:
   *      To filter on metadata fields use traversal operation as follows:
   *      `metadata.<field_name>.<type_value>`.
   *      For example: `metadata.field_1.number_value = 10.0`
   *  *   **Context based filtering**:
   *      To filter Artifacts based on the contexts to which they belong, use the
   *      function operator with the full resource name
   *      `in_context(<context-name>)`.
   *      For example:
   *      `in_context("projects/<project_number>/locations/<location>/metadataStores/<metadatastore_name>/contexts/<context-id>")`
   *  Each of the above supported filter types can be combined together using
   *  logical operators (`AND` & `OR`).
   *  For example: `display_name = "test" AND metadata.field1.bool_value = true`.
   */
  // const filter = 'abc123'

  // Imports the Aiplatform library
  const {MetadataServiceClient} = require('@google-cloud/aiplatform').v1beta1;

  // Instantiates a client
  const aiplatformClient = new MetadataServiceClient();

  async function listArtifacts() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const iterable = await aiplatformClient.listArtifactsAsync(request);
    for await (const response of iterable) {
      console.log(response);
    }
  }

  listArtifacts();
  // [END aiplatform_list_artifacts_sample]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
