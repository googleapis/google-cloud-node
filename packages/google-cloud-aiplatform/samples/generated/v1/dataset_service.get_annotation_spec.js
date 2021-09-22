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
  // [START aiplatform_get_annotation_spec_sample]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The name of the AnnotationSpec resource.
   *  Format:
   *  `projects/{project}/locations/{location}/datasets/{dataset}/annotationSpecs/{annotation_spec}`
   */
  // const name = 'abc123'
  /**
   *  Mask specifying which fields to read.
   */
  // const readMask = ''

  // Imports the Aiplatform library
  const {DatasetServiceClient} = require('@google-cloud/aiplatform').v1;

  // Instantiates a client
  const aiplatformClient = new DatasetServiceClient();

  async function getAnnotationSpec() {
    // Construct request
    const request = {
      name,
    };

    // Run request
    const response = await aiplatformClient.getAnnotationSpec(request);
    console.log(response);
  }

  getAnnotationSpec();
  // [END aiplatform_get_annotation_spec_sample]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
