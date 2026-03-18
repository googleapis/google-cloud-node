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

/**
 * Report URL to Phishing Protection API.
 * @param {string} URL to report to Phishing Protection API
 * @param {number} projectId numeric project identifier.
 */
async function main(uri, projectId) {
  // [START phishing_protection_quickstart]
  const {
    PhishingProtectionServiceV1Beta1Client,
  } = require('@google-cloud/phishing-protection');
  const client = new PhishingProtectionServiceV1Beta1Client();

  // the numeric project ID.
  const formattedParent = client.projectPath(projectId);
  const request = {
    parent: formattedParent,
    uri: uri, // the URI to report to Phishing API.
  };

  await client.reportPhishing(request);

  console.info(`reported ${uri} to Phishing Protection API`);
  // [END phishing_protection_quickstart]
}

main(...process.argv.slice(2)).catch(err => {
  console.error(err);
  process.exitCode = 1;
});
