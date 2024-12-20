/**
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

function main() {
  // [START storage_list_soft_deleted_buckets]
  // Imports the Google Cloud client library
  const {Storage} = require('@google-cloud/storage');

  // Creates a client
  const storage = new Storage();

  async function listSoftDeletedBuckets() {
    const options = {
      softDeleted: true,
    };

    const [buckets] = await storage.getBuckets(options);

    console.log('Buckets:');
    buckets.forEach(bucket => {
      console.log(bucket.name);
    });
  }

  listSoftDeletedBuckets().catch(console.error);
  // [END storage_list_soft_deleted_buckets]
}

main(...process.argv.slice(2));
