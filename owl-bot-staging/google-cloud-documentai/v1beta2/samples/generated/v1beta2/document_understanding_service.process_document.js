// Copyright 2024 Google LLC
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

function main(inputConfig) {
  // [START documentai_v1beta2_generated_DocumentUnderstandingService_ProcessDocument_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Target project and location to make a call.
   *  Format: `projects/{project-id}/locations/{location-id}`.
   *  If no location is specified, a region will be chosen automatically.
   *  This field is only populated when used in ProcessDocument method.
   */
  // const parent = 'abc123'
  /**
   *  Required. Information about the input file.
   */
  // const inputConfig = {}
  /**
   *  The desired output location. This field is only needed in
   *  BatchProcessDocumentsRequest.
   */
  // const outputConfig = {}
  /**
   *  Specifies a known document type for deeper structure detection. Valid
   *  values are currently "general" and "invoice". If not provided, "general"\
   *  is used as default. If any other value is given, the request is rejected.
   */
  // const documentType = 'abc123'
  /**
   *  Controls table extraction behavior. If not specified, the system will
   *  decide reasonable defaults.
   */
  // const tableExtractionParams = {}
  /**
   *  Controls form extraction behavior. If not specified, the system will
   *  decide reasonable defaults.
   */
  // const formExtractionParams = {}
  /**
   *  Controls entity extraction behavior. If not specified, the system will
   *  decide reasonable defaults.
   */
  // const entityExtractionParams = {}
  /**
   *  Controls OCR behavior. If not specified, the system will decide reasonable
   *  defaults.
   */
  // const ocrParams = {}
  /**
   *  Controls AutoML model prediction behavior. AutoMlParams cannot be used
   *  together with other Params.
   */
  // const automlParams = {}

  // Imports the Documentai library
  const {DocumentUnderstandingServiceClient} = require('@google-cloud/documentai').v1beta2;

  // Instantiates a client
  const documentaiClient = new DocumentUnderstandingServiceClient();

  async function callProcessDocument() {
    // Construct request
    const request = {
      inputConfig,
    };

    // Run request
    const response = await documentaiClient.processDocument(request);
    console.log(response);
  }

  callProcessDocument();
  // [END documentai_v1beta2_generated_DocumentUnderstandingService_ProcessDocument_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));