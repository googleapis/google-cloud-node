// Copyright 2017 Google LLC
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

const GCLOUD_TESTS_PREFIX = 'nodejs_samples_tests_queries';

const generateUuid = () =>
  `${GCLOUD_TESTS_PREFIX}_${randomUUID()}`.replace(/-/gi, '_');

const datasetId = generateUuid();
const tableId = generateUuid();
const destTableId = generateUuid();
const routineId = generateUuid();
let projectId;

const bigquery = new BigQuery();

describe('Queries', () => {
  before(async () => {
    const schema = [{name: 'age', type: 'STRING', mode: 'REQUIRED'}];
    const options = {
      schema: schema,
    };
    await bigquery.createDataset(datasetId);
    await bigquery.dataset(datasetId).createTable(destTableId);
    const [tableData] = await bigquery
      .dataset(datasetId)
      .createTable(tableId, options);
    projectId = tableData.metadata.tableReference.projectId;
  });

  beforeEach(async function () {
    this.currentTest.retries(2);
  });

  after(async () => {
    await bigquery.dataset(datasetId).delete({force: true}).catch(console.warn);
  });

  it('should query stackoverflow', async () => {
    const output = execSync('node queryStackOverflow.js');
    assert.match(output, /Query Results:/);
    assert.match(output, /views/);
  });

  it('should run a query', async () => {
    const output = execSync('node query.js');
    assert.match(output, /Rows:/);
    assert.match(output, /name/);
  });

  it('should run a query stateless mode', async () => {
    const output = execSync('node queryJobOptional.js');
    assert.match(output, /Rows:/);
    assert.match(output, /name/);
  });

  it('should run a query as a dry run', async () => {
    const output = execSync('node queryDryRun.js');
    assert.match(output, /Status:/);
    assert.include(output, '\nJob Statistics:');
    assert.include(output, 'DONE');
    assert.include(output, 'totalBytesProcessed:');
  });

  it('should run a query with the cache disabled', async () => {
    const output = execSync('node queryDisableCache.js');
    assert.match(output, /Rows:/);
    assert.match(output, /corpus/);
  });

  it('should run a query with named params', async () => {
    const output = execSync('node queryParamsNamed.js');
    assert.match(output, /Rows:/);
    assert.match(output, /word_count/);
  });

  it('should run a query with named params and provided types', async () => {
    const output = execSync('node queryParamsNamedTypes.js');
    assert.match(output, /Rows:/);
    assert.match(output, /word/);
  });

  it('should run a query with positional params', async () => {
    const output = execSync('node queryParamsPositional.js');
    assert.match(output, /Rows:/);
    assert.match(output, /word_count/);
  });

  it('should run a query with positional params and provided types', async () => {
    const output = execSync('node queryParamsPositionalTypes.js');
    assert.match(output, /Rows:/);
    assert.match(output, /word/);
  });

  it('should run a query with struct params', async () => {
    const output = execSync('node queryParamsStructs.js');
    assert.match(output, /Rows:/);
    assert.match(output, /foo/);
  });

  it('should run a query with array params', async () => {
    const output = execSync('node queryParamsArrays.js');
    assert.match(output, /Rows:/);
    assert.match(output, /count/);
  });

  it('should run a query with timestamp params', async () => {
    const output = execSync('node queryParamsTimestamps.js');
    assert.match(output, /Rows:/);
    assert.match(output, /BigQueryTimestamp/);
  });

  it('should run a query with a destination table', async () => {
    const output = execSync(
      `node queryDestinationTable.js ${datasetId} ${tableId}`,
    );
    assert.include(output, `Query results loaded to table ${tableId}`);
  });

  it('should run a query with legacy SQL', async () => {
    const output = execSync('node queryLegacy.js');
    assert.match(output, /Rows:/);
    assert.match(output, /word/);
  });

  it('should run a query with a clustered destination table', async () => {
    const clusteredTableId = generateUuid();
    const output = execSync(
      `node queryClusteredTable.js ${datasetId} ${clusteredTableId}`,
    );
    assert.match(output, /started/);
    assert.match(output, /Status/);
  });

  it('should run a query with legacy SQL and large results', async () => {
    const destTableId = generateUuid();
    const output = execSync(
      `node queryLegacyLargeResults.js ${datasetId} ${destTableId} ${projectId}`,
    );
    assert.match(output, /Rows:/);
    assert.match(output, /word/);
  });

  it('should add a new column via a query job', async () => {
    const destTableId = generateUuid();
    execSync(`node createTable.js ${datasetId} ${destTableId} 'name:STRING'`);
    const output = execSync(
      `node addColumnQueryAppend.js ${datasetId} ${destTableId}`,
    );
    assert.match(output, /completed\./);
    const [rows] = await bigquery
      .dataset(datasetId)
      .table(destTableId)
      .getRows();
    assert.ok(rows.length > 0);
  });

  it('should relax columns via a query job', async () => {
    const output = execSync(
      `node relaxColumnQueryAppend.js ${projectId} ${datasetId} ${tableId}`,
    );

    assert.match(output, /1 fields in the schema are required\./);
    assert.match(output, /0 fields in the schema are now required\./);
  });

  it('should run a query at batch priority', async () => {
    const output = execSync('node queryBatch.js');
    assert.match(output, /Job/);
    assert.match(output, /is currently in state/);
  });

  it('should create a view via DDL query', async () => {
    const output = execSync(`node ddlCreateView.js ${projectId} ${datasetId}`);
    assert.match(output, /Created new view/);
  });

  it('should query an external data source with permanent table', async () => {
    const permTableId = generateUuid();
    const output = execSync(
      `node queryExternalGCSPerm.js ${datasetId} ${permTableId}`,
    );
    assert.match(output, /Rows:/);
    assert.match(output, /post_abbr/);
  });

  it('should query an external data source with temporary table', async () => {
    const output = execSync('node queryExternalGCSTemp.js');
    assert.match(output, /Rows:/);
    assert.match(output, /post_abbr/);
  });

  it('should create a routine using DDL', async () => {
    const output = execSync(
      `node createRoutineDDL.js ${projectId} ${datasetId} ${routineId}`,
    );
    assert.include(output, `Routine ${routineId} created.`);
  });
});
