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

function main(parent, basicConfig, feature) {
  // [START datalabeling_v1beta1_generated_DataLabelingService_LabelText_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Configuration for text classification task.
   *  One of text_classification_config and text_entity_extraction_config
   *  is required.
   */
  // const textClassificationConfig = {}
  /**
   *  Configuration for entity extraction task.
   *  One of text_classification_config and text_entity_extraction_config
   *  is required.
   */
  // const textEntityExtractionConfig = {}
  /**
   *  Required. Name of the data set to request labeling task, format:
   *  projects/{project_id}/datasets/{dataset_id}
   */
  // const parent = 'abc123'
  /**
   *  Required. Basic human annotation config.
   */
  // const basicConfig = {}
  /**
   *  Required. The type of text labeling task.
   */
  // const feature = {}

  // Imports the Datalabeling library
  const {DataLabelingServiceClient} = require('@google-cloud/datalabeling').v1beta1;

  // Instantiates a client
  const datalabelingClient = new DataLabelingServiceClient();

  async function callLabelText() {
    // Construct request
    const request = {
      parent,
      basicConfig,
      feature,
    };

    // Run request
    const [operation] = await datalabelingClient.labelText(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  callLabelText();
  // [END datalabeling_v1beta1_generated_DataLabelingService_LabelText_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
