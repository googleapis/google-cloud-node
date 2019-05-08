/**
 * Copyright 2019, Google, Inc.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

// [START web_risk_quickstart]
/**
 * Check a URI against the WebRisk API.
 * @param {string} uri A URI to pass to the Web Risk API.
 */
async function quickstart(uri) {
  // Create the WebRisk client library.
  const {WebRiskServiceV1Beta1Client} = require('@google-cloud/web-risk');
  const client = new WebRiskServiceV1Beta1Client();

  // Create an API request to check for malware, social engineering,
  // and unwanted software.
  const request = {
    uri: uri,
    threatTypes: ['MALWARE', 'SOCIAL_ENGINEERING', 'UNWANTED_SOFTWARE'],
  };

  // call the WebRisk searchUris API.
  const {threat} = (await client.searchUris(request))[0];
  if (threat) {
    console.info(threat);
  } else {
    console.info('no threats found');
  }
}
// [END web_risk_quickstart]

const args = process.argv.slice(2);
quickstart(...args).catch(err => {
  console.error(err);
  process.exitCode = 1;
});
