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

function main(name, annotation) {
  // [START recaptchaenterprise_v1beta1_generated_RecaptchaEnterpriseServiceV1Beta1_AnnotateAssessment_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The resource name of the Assessment, in the format
   *  "projects/{project_number}/assessments/{assessment_id}".
   */
  // const name = 'abc123'
  /**
   *  Required. The annotation that will be assigned to the Event.
   */
  // const annotation = {}

  // Imports the Recaptchaenterprise library
  const {RecaptchaEnterpriseServiceV1Beta1Client} =
    require('@google-cloud/recaptcha-enterprise').v1beta1;

  // Instantiates a client
  const recaptchaenterpriseClient =
    new RecaptchaEnterpriseServiceV1Beta1Client();

  async function callAnnotateAssessment() {
    // Construct request
    const request = {
      name,
      annotation,
    };

    // Run request
    const response = await recaptchaenterpriseClient.annotateAssessment(
      request
    );
    console.log(response);
  }

  callAnnotateAssessment();
  // [END recaptchaenterprise_v1beta1_generated_RecaptchaEnterpriseServiceV1Beta1_AnnotateAssessment_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
