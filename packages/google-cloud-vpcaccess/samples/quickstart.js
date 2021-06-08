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

async function main() {

  // [START nodejs_vpc_access_quickstart]
  // Imports the Google Cloud client library

  // remove this line after package is released
  // eslint-disable-next-line node/no-missing-require
  const {VpcAccessServiceClient} = require('@google-cloud/vpc-access');

  // TODO(developer): replace with your prefered project ID.
  // const projectId = 'my-project'

  // Creates a client
  // eslint-disable-next-line no-unused-vars
  const client = new {VpcAccessServiceClient}();

  //TODO(library generator): write the actual function you will be testing
  async function doSomething() {
   console.log('DPE! Change this code so that it shows how to use the library! See comments below on structure.')
   // const [thing] = await client.methodName({
   // });
   // console.info(thing);
  }
  doSomething();
  // [END nodejs_vpc_access_quickstart]
}

main(...process.argv.slice(2)).catch(err => {
  console.error(err.message);
  process.exitCode = 1;
});
process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
