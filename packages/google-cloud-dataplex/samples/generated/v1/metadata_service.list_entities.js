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

function main(parent, view) {
  // [START dataplex_v1_generated_MetadataService_ListEntities_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The resource name of the parent zone:
   *  `projects/{project_number}/locations/{location_id}/lakes/{lake_id}/zones/{zone_id}`.
   */
  // const parent = 'abc123'
  /**
   *  Required. Specify the entity view to make a partial list request.
   */
  // const view = {}
  /**
   *  Optional. Maximum number of entities to return. The service may return fewer than
   *  this value. If unspecified, 100 entities will be returned by default. The
   *  maximum value is 500; larger values will will be truncated to 500.
   */
  // const pageSize = 1234
  /**
   *  Optional. Page token received from a previous `ListEntities` call. Provide
   *  this to retrieve the subsequent page. When paginating, all other parameters
   *  provided to `ListEntities` must match the call that provided the
   *  page token.
   */
  // const pageToken = 'abc123'
  /**
   *  Optional. The following filter parameters can be added to the URL to limit the
   *  entities returned by the API:
   *  - Entity ID: ?filter="id=entityID"
   *  - Asset ID: ?filter="asset=assetID"
   *  - Data path ?filter="data_path=gs://my-bucket"
   *  - Is HIVE compatible: ?filter=”hive_compatible=true”
   *  - Is BigQuery compatible: ?filter=”bigquery_compatible=true”
   */
  // const filter = 'abc123'

  // Imports the Dataplex library
  const {MetadataServiceClient} = require('@google-cloud/dataplex').v1;

  // Instantiates a client
  const dataplexClient = new MetadataServiceClient();

  async function callListEntities() {
    // Construct request
    const request = {
      parent,
      view,
    };

    // Run request
    const iterable = await dataplexClient.listEntitiesAsync(request);
    for await (const response of iterable) {
        console.log(response);
    }
  }

  callListEntities();
  // [END dataplex_v1_generated_MetadataService_ListEntities_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
