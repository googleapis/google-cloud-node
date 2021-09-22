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

function main(endpoint, instances) {
  // [START aiplatform_predict_sample]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The name of the Endpoint requested to serve the prediction.
   *  Format:
   *  `projects/{project}/locations/{location}/endpoints/{endpoint}`
   */
  // const endpoint = 'abc123'
  /**
   *  Required. The instances that are the input to the prediction call.
   *  A DeployedModel may have an upper limit on the number of instances it
   *  supports per request, and when it is exceeded the prediction call errors
   *  in case of AutoML Models, or, in case of customer created Models, the
   *  behaviour is as documented by that Model.
   *  The schema of any single instance may be specified via Endpoint's
   *  DeployedModels' [Model's][google.cloud.aiplatform.v1beta1.DeployedModel.model]
   *  [PredictSchemata's][google.cloud.aiplatform.v1beta1.Model.predict_schemata]
   *  [instance_schema_uri][google.cloud.aiplatform.v1beta1.PredictSchemata.instance_schema_uri].
   */
  // const instances = 1234
  /**
   *  The parameters that govern the prediction. The schema of the parameters may
   *  be specified via Endpoint's DeployedModels' [Model's ][google.cloud.aiplatform.v1beta1.DeployedModel.model]
   *  [PredictSchemata's][google.cloud.aiplatform.v1beta1.Model.predict_schemata]
   *  [parameters_schema_uri][google.cloud.aiplatform.v1beta1.PredictSchemata.parameters_schema_uri].
   */
  // const parameters = ''

  // Imports the Aiplatform library
  const {PredictionServiceClient} = require('@google-cloud/aiplatform').v1beta1;

  // Instantiates a client
  const aiplatformClient = new PredictionServiceClient();

  async function predict() {
    // Construct request
    const request = {
      endpoint,
      instances,
    };

    // Run request
    const response = await aiplatformClient.predict(request);
    console.log(response);
  }

  predict();
  // [END aiplatform_predict_sample]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
