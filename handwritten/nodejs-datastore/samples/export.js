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

async function main(bucket = 'YOUR_BUCKET_NAME') {
  // [START datastore_admin_entities_export]
  const {Datastore} = require('@google-cloud/datastore');
  const datastore = new Datastore();

  async function exportEntities() {
    /**
     * TODO(developer): Uncomment these variables before running the sample.
     */
    // const bucket = 'YOUR_BUCKET_NAME';

    const [exportOperation] = await datastore.export({bucket});
    await exportOperation.promise();

    // The export operation has created a new file in your bucket, e.g.
    // gs://{YOUR_BUCKET_NAME}/{timestamp}/{timestamp}.overall_export.metadata
    console.log(`Export file created: ${exportOperation.result.outputUrl}`);

    // You may also choose to include only specific kinds and namespaces.
    const [specificExportOperation] = await datastore.export({
      bucket,
      kinds: ['Employee', 'Task'],
      namespaces: ['Company'],
    });
    await specificExportOperation.promise();
    console.log(specificExportOperation.result.outputUrl);
  }

  await exportEntities();
  // [END datastore_admin_entities_export]
}

const args = process.argv.slice(2);
main(...args).catch(console.error);
