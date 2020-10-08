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

async function main() {
  // [START datastore_admin_index_list]
  const {Datastore} = require('@google-cloud/datastore');
  const datastore = new Datastore();

  async function listIndexes() {
    const [indexes] = await datastore.getIndexes();

    console.log(`${indexes.length} indexes returned.`);

    // Each returned Index object includes metadata about the index.
    const [firstIndex] = indexes;
    console.log('Properties:', firstIndex.metadata.properties);

    // You may also get Index references as a readable object stream.
    datastore
      .getIndexesStream()
      .on('data', index => {
        console.log('Properties:', index.metadata.properties);
      })
      .on('end', () => {
        // All matching Index objects have been returned.
      });
  }

  await listIndexes();
  // [END datastore_admin_index_list]
}

const args = process.argv.slice(2);
main(...args).catch(console.error);
