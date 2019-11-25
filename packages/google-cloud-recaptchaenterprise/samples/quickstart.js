// Copyright 2019 Google LLC
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

// [START recaptcha_enterprise_quickstart]
/**
 * Instantiate the reCAPTCHA Enterprise client and make request.
 * @param {string} projectNumber The project number to use when making requests.
 */
async function main(projectNumber) {
  // Create the reCAPTCHA client library.
  const {
    RecaptchaEnterpriseServiceV1Beta1Client,
  } = require('@google-cloud/recaptcha-enterprise');
  const client = new RecaptchaEnterpriseServiceV1Beta1Client();

  // format the path to the project (it should be prefaced with projects/).
  const formattedParent = client.projectPath(projectNumber);
  // assessment should contain event with RESPONSE_TOKEN and RECAPTCHA_SITE_KEY:
  // "{'event': {'token': 'RESPONSE_TOKEN', 'siteKey': 'RECAPTCHA_SITE_KEY'}}"
  const assessment = {};

  const request = {
    parent: formattedParent,
    assessment: assessment,
  };

  await client.createAssessment(request);
}
// [END recaptcha_enterprise_quickstart]

main(...process.argv.slice(2)).catch(err => {
  console.error(err);
  process.exitCode = 1;
});
