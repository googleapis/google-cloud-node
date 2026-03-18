/**
 * Copyright 2017, Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict'

function main (datasetName = 'my_new_dataset') {
  // [START fake_bigquery_quickstart]
  // Imports the Google Cloud client library
  const { BigQuery } = require('@google-cloud/bigquery')

  async function createDataset () {
    // Creates a client
    const bigqueryClient = new BigQuery()

    // Create the dataset
    const [dataset] = await bigqueryClient.createDataset(datasetName)
    console.log(`Dataset ${dataset.id} created.`)
  }
  createDataset()
  // [END fake_bigquery_quickstart]
}

const args = process.argv.slice(2)
main(...args)
