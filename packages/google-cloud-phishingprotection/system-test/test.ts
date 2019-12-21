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

const PROJECT_ID = '1046198160504';

describe('PhishingProtection', () => {
  it('submits a URI to the phishing protection API', async () => {
    const {PhishingProtectionServiceV1Beta1Client} = require('../src/v1beta1');
    const client = new PhishingProtectionServiceV1Beta1Client();

    // the numeric project ID.
    const formattedParent = client.projectPath(PROJECT_ID);
    const request = {
      parent: formattedParent,
      uri: 'http://testsafebrowsing.appspot.com/s/phishing.html', // the URI to report to Phishing API.
    };

    await client.reportPhishing(request);
  });
});
