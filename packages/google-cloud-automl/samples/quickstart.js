// Copyright 2019 Google LLC
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

function main(projectId = 'YOUR_PROJECT_ID', location = 'us-central1') {
  // [START automl_quickstart]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  // const projectId = 'YOUR_PROJECT_ID';
  // const location = 'us-central1';

  // Imports the Google Cloud AutoML library
  const {AutoMlClient} = require('@google-cloud/automl').v1;

  // Instantiates a client
  const client = new AutoMlClient();

  async function listDatasets() {
    // Construct request
    const request = {
      parent: client.locationPath(projectId, location),
      filter: 'translation_dataset_metadata:*',
    };

    const [response] = await client.listDatasets(request);

    console.log('List of datasets:');
    for (const dataset of response) {
      console.log(`Dataset name: ${dataset.name}`);
      console.log(
        `Dataset id: ${
          dataset.name.split('/')[dataset.name.split('/').length - 1]
        }`
      );
      console.log(`Dataset display name: ${dataset.displayName}`);
      console.log('Dataset create time');
      console.log(`\tseconds ${dataset.createTime.seconds}`);
      console.log(`\tnanos ${dataset.createTime.nanos / 1e9}`);
      // [END automl_language_text_classification_list_datasets]
      // [END automl_translate_list_datasets]
      // [END automl_vision_classification_list_datasets]
      // [END automl_vision_object_detection_list_datasets]
      console.log(
        `Text extraction dataset metadata: ${dataset.textExtractionDatasetMetadata}`
      );

      console.log(
        `Text sentiment dataset metadata: ${dataset.textSentimentDatasetMetadata}`
      );

      // [START automl_language_text_classification_list_datasets]
      console.log(
        `Text classification dataset metadata: ${dataset.textClassificationDatasetMetadata}`
      );
      // [END automl_language_text_classification_list_datasets]

      // [START automl_translate_list_datasets]
      if (dataset.translationDatasetMetadata !== undefined) {
        console.log('Translation dataset metadata:');
        console.log(
          `\tSource language code: ${dataset.translationDatasetMetadata.sourceLanguageCode}`
        );
        console.log(
          `\tTarget language code: ${dataset.translationDatasetMetadata.targetLanguageCode}`
        );
      }
      // [END automl_translate_list_datasets]

      // [START automl_vision_classification_list_datasets]
      console.log(
        `Image classification dataset metadata: ${dataset.imageClassificationDatasetMetadata}`
      );
      // [END automl_vision_classification_list_datasets]

      // [START automl_vision_object_detection_list_datasets]
      console.log(
        `Image object detection dataset metatdata: ${dataset.imageObjectDetectionDatasetMetatdata}`
      );
      // [START automl_language_text_classification_list_datasets]
      // [START automl_translate_list_datasets]
      // [START automl_vision_classification_list_datasets]
    }
  }

  listDatasets();
  // [END automl_quickstart]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
