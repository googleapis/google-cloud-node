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
  // [START automl_v1beta1_generated_AutoMl_ListModelEvaluations_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. Resource name of the model to list the model evaluations for.
   *  If modelId is set as "-", this will list model evaluations from across all
   *  models of the parent location.
   */
  // const parent = 'abc123'
  /**
   *  An expression for filtering the results of the request.
   *    * `annotation_spec_id` - for =, !=  or existence. See example below for
   *                           the last.
   *  Some examples of using the filter are:
   *    * `annotation_spec_id!=4` --> The model evaluation was done for
   *                              annotation spec with ID different than 4.
   *    * `NOT annotation_spec_id:*` --> The model evaluation was done for
   *                                 aggregate of all annotation specs.
   */
  // const filter = 'abc123'
  /**
   *  Requested page size.
   */
  // const pageSize = 1234
  /**
   *  A token identifying a page of results for the server to return.
   *  Typically obtained via
   *  ListModelEvaluationsResponse.next_page_token google.cloud.automl.v1beta1.ListModelEvaluationsResponse.next_page_token  of the previous
   *  AutoMl.ListModelEvaluations google.cloud.automl.v1beta1.AutoMl.ListModelEvaluations  call.
   */
  // const pageToken = 'abc123'

  // Imports the Automl library
  const {AutoMlClient} = require('@google-cloud/automl').v1beta1;

  // Instantiates a client
  const automlClient = new AutoMlClient();

  async function callListModelEvaluations() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const iterable = await automlClient.listModelEvaluationsAsync(request);
    for await (const response of iterable) {
        console.log(response);
    }
  }

  callListModelEvaluations();
  // [END automl_v1beta1_generated_AutoMl_ListModelEvaluations_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
