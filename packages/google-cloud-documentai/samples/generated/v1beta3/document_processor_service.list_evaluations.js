// Copyright 2025 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// ** This file is automatically generated by gapic-generator-typescript. **
// ** https://github.com/googleapis/gapic-generator-typescript **
// ** All changes to this file may be overwritten. **



'use strict';

function main(parent) {
  // [START documentai_v1beta3_generated_DocumentProcessorService_ListEvaluations_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The resource name of the
   *  ProcessorVersion google.cloud.documentai.v1beta3.ProcessorVersion  to
   *  list evaluations for.
   *  `projects/{project}/locations/{location}/processors/{processor}/processorVersions/{processorVersion}`
   */
  // const parent = 'abc123'
  /**
   *  The standard list page size.
   *  If unspecified, at most `5` evaluations are returned.
   *  The maximum value is `100`. Values above `100` are coerced to `100`.
   */
  // const pageSize = 1234
  /**
   *  A page token, received from a previous `ListEvaluations` call.
   *  Provide this to retrieve the subsequent page.
   */
  // const pageToken = 'abc123'

  // Imports the Documentai library
  const {DocumentProcessorServiceClient} = require('@google-cloud/documentai').v1beta3;

  // Instantiates a client
  const documentaiClient = new DocumentProcessorServiceClient();

  async function callListEvaluations() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const iterable = documentaiClient.listEvaluationsAsync(request);
    for await (const response of iterable) {
        console.log(response);
    }
  }

  callListEvaluations();
  // [END documentai_v1beta3_generated_DocumentProcessorService_ListEvaluations_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
