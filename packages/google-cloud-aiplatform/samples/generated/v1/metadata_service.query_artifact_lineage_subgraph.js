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

function main(artifact) {
  // [START aiplatform_v1_generated_MetadataService_QueryArtifactLineageSubgraph_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The resource name of the Artifact whose Lineage needs to be retrieved as a
   *  LineageSubgraph.
   *  Format:
   *  `projects/{project}/locations/{location}/metadataStores/{metadatastore}/artifacts/{artifact}`
   *  The request may error with FAILED_PRECONDITION if the number of Artifacts,
   *  the number of Executions, or the number of Events that would be returned
   *  for the Context exceeds 1000.
   */
  // const artifact = 'abc123'
  /**
   *  Specifies the size of the lineage graph in terms of number of hops from the
   *  specified artifact.
   *  Negative Value: INVALID_ARGUMENT error is returned
   *  0: Only input artifact is returned.
   *  No value: Transitive closure is performed to return the complete graph.
   */
  // const maxHops = 1234
  /**
   *  Filter specifying the boolean condition for the Artifacts to satisfy in
   *  order to be part of the Lineage Subgraph.
   *  The syntax to define filter query is based on https://google.aip.dev/160.
   *  The supported set of filters include the following:
   *  *  **Attribute filtering**:
   *     For example: `display_name = "test"`
   *     Supported fields include: `name`, `display_name`, `uri`, `state`,
   *     `schema_title`, `create_time`, and `update_time`.
   *     Time fields, such as `create_time` and `update_time`, require values
   *     specified in RFC-3339 format.
   *     For example: `create_time = "2020-11-19T11:30:00-04:00"`
   *  *  **Metadata field**:
   *     To filter on metadata fields use traversal operation as follows:
   *     `metadata.<field_name>.<type_value>`.
   *     For example: `metadata.field_1.number_value = 10.0`
   *  Each of the above supported filter types can be combined together using
   *  logical operators (`AND` & `OR`).
   *  For example: `display_name = "test" AND metadata.field1.bool_value = true`.
   */
  // const filter = 'abc123'

  // Imports the Aiplatform library
  const {MetadataServiceClient} = require('@google-cloud/aiplatform').v1;

  // Instantiates a client
  const aiplatformClient = new MetadataServiceClient();

  async function callQueryArtifactLineageSubgraph() {
    // Construct request
    const request = {
      artifact,
    };

    // Run request
    const response = await aiplatformClient.queryArtifactLineageSubgraph(
      request
    );
    console.log(response);
  }

  callQueryArtifactLineageSubgraph();
  // [END aiplatform_v1_generated_MetadataService_QueryArtifactLineageSubgraph_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
