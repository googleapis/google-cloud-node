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

function main() {
  // [START dataflow_v1beta3_generated_TemplatesService_CreateJobFromTemplate_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The ID of the Cloud Platform project that the job belongs to.
   */
  // const projectId = 'abc123'
  /**
   *  Required. The job name to use for the created job.
   */
  // const jobName = 'abc123'
  /**
   *  Required. A Cloud Storage path to the template from which to
   *  create the job.
   *  Must be a valid Cloud Storage URL, beginning with `gs://`.
   */
  // const gcsPath = 'abc123'
  /**
   *  The runtime parameters to pass to the job.
   */
  // const parameters = 1234
  /**
   *  The runtime environment for the job.
   */
  // const environment = {}
  /**
   *  The regional endpoint 
   *  (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) to
   *  which to direct the request.
   */
  // const location = 'abc123'

  // Imports the Dataflow library
  const {TemplatesServiceClient} = require('@google-cloud/dataflow').v1beta3;

  // Instantiates a client
  const dataflowClient = new TemplatesServiceClient();

  async function callCreateJobFromTemplate() {
    // Construct request
    const request = {
    };

    // Run request
    const response = await dataflowClient.createJobFromTemplate(request);
    console.log(response);
  }

  callCreateJobFromTemplate();
  // [END dataflow_v1beta3_generated_TemplatesService_CreateJobFromTemplate_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
