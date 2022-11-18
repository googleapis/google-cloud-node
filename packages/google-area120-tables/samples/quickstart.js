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

// eslint-disable-next-line no-unused-vars
async function main(projectId) {
  // [START area120_tables_quickstart]
  // Imports the Google Cloud client library

  const {TablesServiceClient} = require('@google/area120-tables');

  // TODO(developer): replace with your prefered project ID.
  // const projectId = 'my-project'

  // Creates a client
  const client = new TablesServiceClient();

  async function listTables() {
    const res = await client.listTables();
    console.log(res);
  }

  listTables();
  // [END area120_tables_quickstart]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
