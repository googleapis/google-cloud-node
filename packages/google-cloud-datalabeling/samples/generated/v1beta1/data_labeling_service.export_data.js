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

function main(name, annotatedDataset, outputConfig) {
  // [START datalabeling_v1beta1_generated_DataLabelingService_ExportData_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. Dataset resource name, format:
   *  projects/{project_id}/datasets/{dataset_id}
   */
  // const name = 'abc123'
  /**
   *  Required. Annotated dataset resource name. DataItem in
   *  Dataset and their annotations in specified annotated dataset will be
   *  exported. It's in format of
   *  projects/{project_id}/datasets/{dataset_id}/annotatedDatasets/
   *  {annotated_dataset_id}
   */
  // const annotatedDataset = 'abc123'
  /**
   *  Optional. Filter is not supported at this moment.
   */
  // const filter = 'abc123'
  /**
   *  Required. Specify the output destination.
   */
  // const outputConfig = {}
  /**
   *  Email of the user who started the export task and should be notified by
   *  email. If empty no notification will be sent.
   */
  // const userEmailAddress = 'abc123'

  // Imports the Datalabeling library
  const {DataLabelingServiceClient} = require('@google-cloud/datalabeling').v1beta1;

  // Instantiates a client
  const datalabelingClient = new DataLabelingServiceClient();

  async function callExportData() {
    // Construct request
    const request = {
      name,
      annotatedDataset,
      outputConfig,
    };

    // Run request
    const [operation] = await datalabelingClient.exportData(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  callExportData();
  // [END datalabeling_v1beta1_generated_DataLabelingService_ExportData_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
