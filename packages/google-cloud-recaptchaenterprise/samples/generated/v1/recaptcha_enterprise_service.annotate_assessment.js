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
  // [START recaptchaenterprise_v1_generated_RecaptchaEnterpriseService_AnnotateAssessment_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The resource name of the Assessment, in the format
   *  "projects/{project}/assessments/{assessment}".
   */
  // const name = 'abc123'
  /**
   *  Optional. The annotation that will be assigned to the Event. This field can be left
   *  empty to provide reasons that apply to an event without concluding whether
   *  the event is legitimate or fraudulent.
   */
  // const annotation = ''
  /**
   *  Optional. Optional reasons for the annotation that will be assigned to the Event.
   */
  // const reasons = 1234
  /**
   *  Optional. Optional unique stable hashed user identifier to apply to the assessment.
   *  This is an alternative to setting the hashed_account_id in
   *  CreateAssessment, for example when the account identifier is not yet known
   *  in the initial request. It is recommended that the identifier is hashed
   *  using hmac-sha256 with stable secret.
   */
  // const hashedAccountId = 'Buffer.from('string')'

  // Imports the Recaptchaenterprise library
  const {RecaptchaEnterpriseServiceClient} =
    require('@google-cloud/recaptcha-enterprise').v1;

  // Instantiates a client
  const recaptchaenterpriseClient = new RecaptchaEnterpriseServiceClient();

  async function annotateAssessment() {
    // Construct request
    const request = {
      name,
    };

    // Run request
    const response = await recaptchaenterpriseClient.annotateAssessment(
      request
    );
    console.log(response);
  }

  annotateAssessment();
  // [END recaptchaenterprise_v1_generated_RecaptchaEnterpriseService_AnnotateAssessment_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
