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
  // [START automl_v1beta1_generated_AutoMl_ListModels_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. Resource name of the project, from which to list the models.
   */
  // const parent = 'abc123'
  /**
   *  An expression for filtering the results of the request.
   *    * `model_metadata` - for existence of the case (e.g.
   *              video_classification_model_metadata:*).
   *    * `dataset_id` - for = or !=. Some examples of using the filter are:
   *    * `image_classification_model_metadata:*` --> The model has
   *                                         image_classification_model_metadata.
   *    * `dataset_id=5` --> The model was created from a dataset with ID 5.
   */
  // const filter = 'abc123'
  /**
   *  Requested page size.
   */
  // const pageSize = 1234
  /**
   *  A token identifying a page of results for the server to return
   *  Typically obtained via
   *  ListModelsResponse.next_page_token google.cloud.automl.v1beta1.ListModelsResponse.next_page_token  of the previous
   *  AutoMl.ListModels google.cloud.automl.v1beta1.AutoMl.ListModels  call.
   */
  // const pageToken = 'abc123'

  // Imports the Automl library
  const {AutoMlClient} = require('@google-cloud/automl').v1beta1;

  // Instantiates a client
  const automlClient = new AutoMlClient();

  async function callListModels() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const iterable = await automlClient.listModelsAsync(request);
    for await (const response of iterable) {
      console.log(response);
    }
  }

  callListModels();
  // [END automl_v1beta1_generated_AutoMl_ListModels_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
