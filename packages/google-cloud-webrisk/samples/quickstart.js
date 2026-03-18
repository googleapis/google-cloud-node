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

// TODO: revert threat types to strings once https://github.com/googleapis/gax-nodejs/issues/1205 is fixed
// [START web_risk_quickstart]
/**
 * Check a URI against the WebRisk API.
 * @param {string} uri A URI to pass to the Web Risk API.
 */
async function quickstart(uri) {
  // Create the WebRisk client library.
  const {WebRiskServiceClient, protos} = require('@google-cloud/web-risk');
  const client = new WebRiskServiceClient();

  // Create an API request to check for malware, social engineering,
  // and unwanted software.
  const request = {
    uri: uri,
    threatTypes: [
      protos.google.cloud.webrisk.v1.ThreatType.MALWARE,
      protos.google.cloud.webrisk.v1.ThreatType.SOCIAL_ENGINEERING,
      protos.google.cloud.webrisk.v1.ThreatType.UNWANTED_SOFTWARE,
    ],
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
