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
  // [START documentai_v1beta3_generated_DocumentProcessorService_ListProcessors_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The parent (project and location) which owns this collection of Processors.
   *  Format: projects/{project}/locations/{location}
   */
  // const parent = 'abc123'
  /**
   *  The maximum number of processors to return.
   *  If unspecified, at most 50 processors will be returned.
   *  The maximum value is 100; values above 100 will be coerced to 100.
   */
  // const pageSize = 1234
  /**
   *  We will return the processors sorted by creation time. The page token
   *  will point to the next processor.
   */
  // const pageToken = 'abc123'

  // Imports the Documentai library
  const {DocumentProcessorServiceClient} = require('@google-cloud/documentai').v1beta3;

  // Instantiates a client
  const documentaiClient = new DocumentProcessorServiceClient();

  async function callListProcessors() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const iterable = await documentaiClient.listProcessorsAsync(request);
    for await (const response of iterable) {
        console.log(response);
    }
  }

  callListProcessors();
  // [END documentai_v1beta3_generated_DocumentProcessorService_ListProcessors_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
