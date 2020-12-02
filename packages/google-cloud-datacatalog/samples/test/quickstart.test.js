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

'use strict';

const {assert} = require('chai');
const {describe, it, before} = require('mocha');
const uuid = require('uuid');
const cp = require('child_process');
const {BigQuery} = require('@google-cloud/bigquery');

const bigquery = new BigQuery();

const execSync = cmd => cp.execSync(cmd, {encoding: 'utf-8'});

const GCLOUD_TESTS_PREFIX = 'nodejs_data_catalog_samples';
const generateUuid = () =>
  `${GCLOUD_TESTS_PREFIX}_${uuid.v4()}`.replace(/-/gi, '_');

describe('Quickstart', async () => {
  const projectId = process.env.GCLOUD_PROJECT;
  let datasetId;
  let tableId;

  before(async () => {
    // Delete any stale datasets from samples tests
    await deleteDatasets();

    // Create BigQuery dataset & table.
    datasetId = generateUuid();
    tableId = generateUuid();
    await bigquery.createDataset(datasetId);
    await bigquery.dataset(datasetId).createTable(tableId);
  });

  it('quickstart should attach tag to BigQuery table', async () => {
    const output = execSync(
      `node quickstart ${projectId} ${datasetId} ${tableId}`
    );
    assert.include(output, 'Created template:');
    assert.include(
      output,
      `Linked resource: //bigquery.googleapis.com/projects/${projectId}/datasets/${datasetId}/tables/${tableId}`
    );
    assert.include(output, 'Tag created for entry:');
  });

  // Only delete a resource if it is older than 24 hours. That will prevent
  // collisions with parallel CI test runs.
  function isResourceStale(creationTime) {
    const oneDayMs = 86400000;
    const now = new Date();
    const created = new Date(creationTime);
    return now.getTime() - created.getTime() >= oneDayMs;
  }

  async function deleteDatasets() {
    let [datasets] = await bigquery.getDatasets();
    datasets = datasets.filter(dataset =>
      dataset.id.includes(GCLOUD_TESTS_PREFIX)
    );

    for (const dataset of datasets) {
      const [metadata] = await dataset.getMetadata();
      const creationTime = Number(metadata.creationTime);

      if (isResourceStale(creationTime)) {
        try {
          await dataset.delete({force: true});
        } catch (e) {
          console.log(`dataset(${dataset.id}).delete() failed`);
          console.log(e);
        }
      }
    }
  }
});
