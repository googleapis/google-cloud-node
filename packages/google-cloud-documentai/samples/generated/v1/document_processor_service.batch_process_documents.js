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

function main(name) {
  // [START documentai_v1_generated_DocumentProcessorService_BatchProcessDocuments_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The processor resource name.
   */
  // const name = 'abc123'
  /**
   *  The input documents for batch process.
   */
  // const inputDocuments = {}
  /**
   *  The overall output config for batch process.
   */
  // const documentOutputConfig = {}
  /**
   *  Whether Human Review feature should be skipped for this request. Default to
   *  false.
   */
  // const skipHumanReview = true

  // Imports the Documentai library
  const {DocumentProcessorServiceClient} =
    require('@google-cloud/documentai').v1;

  // Instantiates a client
  const documentaiClient = new DocumentProcessorServiceClient();

  async function callBatchProcessDocuments() {
    // Construct request
    const request = {
      name,
    };

    // Run request
    const [operation] = await documentaiClient.batchProcessDocuments(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  callBatchProcessDocuments();
  // [END documentai_v1_generated_DocumentProcessorService_BatchProcessDocuments_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
