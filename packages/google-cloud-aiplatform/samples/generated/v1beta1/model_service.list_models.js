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
  // [START aiplatform_list_models_sample]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The resource name of the Location to list the Models from.
   *  Format: `projects/{project}/locations/{location}`
   */
  // const parent = 'abc123'
  /**
   *  An expression for filtering the results of the request. For field names
   *  both snake_case and camelCase are supported.
   *    * `model` supports = and !=. `model` represents the Model ID,
   *      i.e. the last segment of the Model's [resource name][google.cloud.aiplatform.v1beta1.Model.name].
   *    * `display_name` supports = and !=
   *    * `labels` supports general map functions that is:
   *      * `labels.key=value` - key:value equality
   *      * `labels.key:* or labels:key - key existence
   *      * A key including a space must be quoted. `labels."a key"`.
   *  Some examples:
   *    * `model=1234`
   *    * `displayName="myDisplayName"`
   *    * `labels.myKey="myValue"`
   */
  // const filter = 'abc123'
  /**
   *  The standard list page size.
   */
  // const pageSize = 1234
  /**
   *  The standard list page token.
   *  Typically obtained via
   *  [ListModelsResponse.next_page_token][google.cloud.aiplatform.v1beta1.ListModelsResponse.next_page_token] of the previous
   *  [ModelService.ListModels][google.cloud.aiplatform.v1beta1.ModelService.ListModels] call.
   */
  // const pageToken = 'abc123'
  /**
   *  Mask specifying which fields to read.
   */
  // const readMask = ''

  // Imports the Aiplatform library
  const {ModelServiceClient} = require('@google-cloud/aiplatform').v1beta1;

  // Instantiates a client
  const aiplatformClient = new ModelServiceClient();

  async function listModels() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const iterable = await aiplatformClient.listModelsAsync(request);
    for await (const response of iterable) {
      console.log(response);
    }
  }

  listModels();
  // [END aiplatform_list_models_sample]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
