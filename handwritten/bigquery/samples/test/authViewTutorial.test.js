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
const {describe, it, before, beforeEach, after} = require('mocha');
const cp = require('child_process');
const {randomUUID} = require('crypto');

const {BigQuery} = require('@google-cloud/bigquery');

const execSync = cmd => cp.execSync(cmd, {encoding: 'utf-8'});

const GCLOUD_TESTS_PREFIX = 'nodejs_samples_tests_authView';
const generateUuid = () =>
  `${GCLOUD_TESTS_PREFIX}_${randomUUID()}`.replace(/-/gi, '_');
let projectId;
const datasetId = generateUuid();
const tableId = generateUuid();
const sourceDatasetId = generateUuid();
const sourceTableId = generateUuid();
const sharedDatasetId = generateUuid();
const sharedViewId = generateUuid();

const bigquery = new BigQuery();

describe('Authorized View Tutorial', () => {
  after(async () => {
    await bigquery.dataset(datasetId).delete({force: true}).catch(console.warn);
    await bigquery
      .dataset(sourceDatasetId)
      .delete({force: true})
      .catch(console.warn);
    await bigquery
      .dataset(sharedDatasetId)
      .delete({force: true})
      .catch(console.warn);
  });

  before(async () => {
    await bigquery.createDataset(datasetId);
    const [tableData] = await bigquery.dataset(datasetId).createTable(tableId);
    projectId = tableData.metadata.tableReference.projectId;
  });

  beforeEach(async function () {
    this.currentTest.retries(2);
  });

  it('should create an authorized view', async () => {
    const output = execSync(
      `node authViewTutorial.js ${projectId} ${sourceDatasetId} ${sourceTableId} ${sharedDatasetId} ${sharedViewId}`,
    );
    assert.include(
      output,
      `View ${projectId}:${sharedDatasetId}.${sharedViewId} created.`,
    );
    const [exists] = await bigquery
      .dataset(sharedDatasetId)
      .table(sharedViewId)
      .exists();
    assert.ok(exists);
  });
});
