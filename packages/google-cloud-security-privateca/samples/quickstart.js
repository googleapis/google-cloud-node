// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//

'use strict';

async function main(projectId, location, name) {
  // [START cloud_certificate_authority_quickstart]
  // Imports the Google Cloud client library

  const {
    CertificateAuthorityServiceClient,
  } = require('@google-cloud/security-private-ca');

  // TODO(developer): replace with your prefered project ID.
  // const projectId = 'my-project'

  // Creates a client
  const client = new CertificateAuthorityServiceClient();

  async function listCertificates() {
    const res = await client.listCertificates({
      parent: `projects/${projectId}/locations/${location}/caPools/${name}`,
    });
    return res;
  }

  listCertificates();
  // [END cloud_certificate_authority_quickstart]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
