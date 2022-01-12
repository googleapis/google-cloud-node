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

function main(evaluationJob) {
  // [START datalabeling_v1beta1_generated_DataLabelingService_UpdateEvaluationJob_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. Evaluation job that is going to be updated.
   */
  // const evaluationJob = {}
  /**
   *  Optional. Mask for which fields to update. You can only provide the
   *  following fields:
   *  * `evaluationJobConfig.humanAnnotationConfig.instruction`
   *  * `evaluationJobConfig.exampleCount`
   *  * `evaluationJobConfig.exampleSamplePercentage`
   *  You can provide more than one of these fields by separating them with
   *  commas.
   */
  // const updateMask = {}

  // Imports the Datalabeling library
  const {DataLabelingServiceClient} = require('@google-cloud/datalabeling').v1beta1;

  // Instantiates a client
  const datalabelingClient = new DataLabelingServiceClient();

  async function callUpdateEvaluationJob() {
    // Construct request
    const request = {
      evaluationJob,
    };

    // Run request
    const response = await datalabelingClient.updateEvaluationJob(request);
    console.log(response);
  }

  callUpdateEvaluationJob();
  // [END datalabeling_v1beta1_generated_DataLabelingService_UpdateEvaluationJob_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
