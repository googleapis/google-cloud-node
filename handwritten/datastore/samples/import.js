// Copyright 2020 Google LLC
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

async function main(file = 'YOUR_FILE_NAME') {
  // [START datastore_admin_entities_import]
  const {Datastore} = require('@google-cloud/datastore');
  const datastore = new Datastore();

  async function importEntities() {
    /**
     * TODO(developer): Uncomment these variables before running the sample.
     */
    // const file = 'YOUR_FILE_NAME';

    const [importOperation] = await datastore.import({file});

    // Uncomment to await the results of the operation.
    // await importOperation.promise();

    // Or cancel the operation.
    await importOperation.cancel();

    // You may also choose to include only specific kinds and namespaces.
    const [specificImportOperation] = await datastore.import({
      file,
      kinds: ['Employee', 'Task'],
      namespaces: ['Company'],
    });

    // Uncomment to await the results of the operation.
    // await specificImportOperation.promise();

    // Or cancel the operation.
    await specificImportOperation.cancel();
  }

  await importEntities();
  // [END datastore_admin_entities_import]
}

const args = process.argv.slice(2);
main(...args).catch(console.error);
