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
  // [START aiplatform_v1_generated_VizierService_CompleteTrial_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The Trial's name.
   *  Format:
   *  `projects/{project}/locations/{location}/studies/{study}/trials/{trial}`
   */
  // const name = 'abc123'
  /**
   *  Optional. If provided, it will be used as the completed Trial's
   *  final_measurement; Otherwise, the service will auto-select a
   *  previously reported measurement as the final-measurement
   */
  // const finalMeasurement = {}
  /**
   *  Optional. True if the Trial cannot be run with the given Parameter, and
   *  final_measurement will be ignored.
   */
  // const trialInfeasible = true
  /**
   *  Optional. A human readable reason why the trial was infeasible. This should
   *  only be provided if `trial_infeasible` is true.
   */
  // const infeasibleReason = 'abc123'

  // Imports the Aiplatform library
  const {VizierServiceClient} = require('@google-cloud/aiplatform').v1;

  // Instantiates a client
  const aiplatformClient = new VizierServiceClient();

  async function callCompleteTrial() {
    // Construct request
    const request = {
      name,
    };

    // Run request
    const response = await aiplatformClient.completeTrial(request);
    console.log(response);
  }

  callCompleteTrial();
  // [END aiplatform_v1_generated_VizierService_CompleteTrial_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
