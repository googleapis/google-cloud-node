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

async function main(projectId = 'my-project') {
  // [START nodejs_iap_quickstart]
  // Imports the Google Cloud client library

  // remove this line after package is released
  // eslint-disable-next-line node/no-missing-require
  const {IdentityAwareProxyOAuthServiceClient} = require('@google-cloud/iap');

  // const projectId = 'my-project'

  // Creates a client
  const client = new IdentityAwareProxyOAuthServiceClient();

  async function listBrands() {
    const [brands] = await client.listBrands({
      parent: `projects/${projectId}`,
    });
    console.info(brands);
  }
  listBrands();
  // [END nodejs_iap_quickstart]
}

main(...process.argv.slice(2)).catch(err => {
  console.error(err.message);
  process.exitCode = 1;
});
process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
