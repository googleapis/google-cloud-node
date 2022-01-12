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

function main(parent, processor) {
  // [START documentai_v1beta3_generated_DocumentProcessorService_CreateProcessor_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The parent (project and location) under which to create the processor.
   *  Format: projects/{project}/locations/{location}
   */
  // const parent = 'abc123'
  /**
   *  Required. The processor to be created, requires processor_type  and display_name 
   *  to be set. Also, the processor is under CMEK if CMEK fields are set.
   */
  // const processor = {}

  // Imports the Documentai library
  const {DocumentProcessorServiceClient} = require('@google-cloud/documentai').v1beta3;

  // Instantiates a client
  const documentaiClient = new DocumentProcessorServiceClient();

  async function callCreateProcessor() {
    // Construct request
    const request = {
      parent,
      processor,
    };

    // Run request
    const response = await documentaiClient.createProcessor(request);
    console.log(response);
  }

  callCreateProcessor();
  // [END documentai_v1beta3_generated_DocumentProcessorService_CreateProcessor_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
