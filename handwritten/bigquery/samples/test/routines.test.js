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

const GCLOUD_TESTS_PREFIX = 'nodejs_samples_tests_routines';

const generateUuid = () =>
  `${GCLOUD_TESTS_PREFIX}_${randomUUID()}`.replace(/-/gi, '_');

const datasetId = generateUuid();
const routineId = generateUuid();
const newRoutineId = generateUuid();

const bigquery = new BigQuery();

describe('Routines', () => {
  after(async () => {
    await bigquery.dataset(datasetId).delete({force: true}).catch(console.warn);
  });

  before(async () => {
    await bigquery.createDataset(datasetId);
    const dataset = bigquery.dataset(datasetId);
    const routine = dataset.routine(routineId);
    const config = {
      arguments: [
        {
          name: 'x',
          dataType: {
            typeKind: 'INT64',
          },
        },
      ],
      definitionBody: 'x * 3',
      routineType: 'SCALAR_FUNCTION',
      returnType: {
        typeKind: 'INT64',
      },
    };
    await routine.create(config);
  });

  beforeEach(async function () {
    this.currentTest.retries(2);
  });

  it('should create a routine', async () => {
    const output = execSync(
      `node createRoutine.js ${datasetId} ${newRoutineId}`,
    );
    assert.include(output, `Routine ${newRoutineId} created.`);
  });

  it('should get a routine', async () => {
    const output = execSync(`node getRoutine.js ${datasetId} ${routineId}`);
    assert.include(output, `Routine ${routineId} retrieved.`);
  });

  it('should list routines', async () => {
    const output = execSync(`node listRoutines.js ${datasetId}`);
    assert.match(output, /Routines:/);
    assert.include(output, routineId);
  });

  it('should update routine', async () => {
    const output = execSync(`node updateRoutine.js ${datasetId} ${routineId}`);
    assert.include(output, 'Routine description: New description');
  });

  describe('Delete Routine', () => {
    const datasetId = `gcloud_tests_${randomUUID()}`.replace(/-/gi, '_');
    const routineId = `gcloud_tests_${randomUUID()}`.replace(/-/gi, '_');

    before(async () => {
      await bigquery.createDataset(datasetId);
      const dataset = bigquery.dataset(datasetId);
      // Creates a new routine in the dataset
      const routine = dataset.routine(routineId);
      const config = {
        arguments: [
          {
            name: 'x',
            dataType: {
              typeKind: 'INT64',
            },
          },
        ],
        definitionBody: 'x * 3',
        routineType: 'SCALAR_FUNCTION',
        returnType: {
          typeKind: 'INT64',
        },
      };
      await routine.create(config);
    });

    beforeEach(async function () {
      this.currentTest.retries(2);
    });

    after(async () => {
      await bigquery
        .dataset(datasetId)
        .delete({force: true})
        .catch(console.warn);
    });

    it('should delete a routine', async () => {
      const output = execSync(
        `node deleteRoutine.js ${datasetId} ${routineId}`,
      );
      assert.include(output, `Routine ${routineId} deleted.`);
      const [exists] = await bigquery
        .dataset(datasetId)
        .routine(routineId)
        .exists();
      assert.strictEqual(exists, false);
    });
  });
});
