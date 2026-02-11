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
const {describe, it, before, after, beforeEach} = require('mocha');
const path = require('path');
const {randomUUID} = require('crypto');
const cp = require('child_process');
const {Storage} = require('@google-cloud/storage');
const {BigQuery} = require('@google-cloud/bigquery');
const {DataCatalogClient, PolicyTagManagerClient} =
  require('@google-cloud/datacatalog').v1;
const dataCatalog = new DataCatalogClient();
const policyTagManager = new PolicyTagManagerClient();

const execSync = cmd => cp.execSync(cmd, {encoding: 'utf-8'});

const GCLOUD_TESTS_PREFIX = 'nodejs_samples_tests';

const storage = new Storage();

const generateUuid = () =>
  `${GCLOUD_TESTS_PREFIX}_${randomUUID()}`.replace(/-/gi, '_');

const datasetId = generateUuid();
const srcDatasetId = datasetId;
const destDatasetId = generateUuid();
const tableId = generateUuid();
const nestedTableId = generateUuid();
const partitionedTableId = generateUuid();
const srcTableId = tableId;
const aclTableId = generateUuid();
const destTableId = generateUuid();
const viewId = generateUuid();
const bucketName = generateUuid();
const exportCSVFileName = 'data.json';
const exportJSONFileName = 'data.json';
const importFileName = 'data.avro';
const partialDataFileName = 'partialdata.csv';
const localFilePath = path.join(__dirname, `../resources/${importFileName}`);
const testExpirationTime = Date.now() + 2 * 60 * 60 * 1000; // Add two hours
let projectId;
let policyTag0;
let policyTag1;
const partialDataFilePath = path.join(
  __dirname,
  `../resources/${partialDataFileName}`,
);
const bigquery = new BigQuery();

describe('Tables', () => {
  before(async () => {
    const [bucket] = await storage.createBucket(bucketName);
    await Promise.all([
      bucket.upload(localFilePath),
      bigquery.createDataset(srcDatasetId),
      bigquery.createDataset(destDatasetId),
    ]);

    // Delete stale Data Catalog resources
    projectId = await dataCatalog.getProjectId();
    await deleteStaleTaxonomies();

    // Create Data Catalog resources
    const parent = dataCatalog.locationPath(projectId, 'us');
    const taxRequest = {
      parent,
      taxonomy: {
        displayName: generateUuid(),
        activatedPolicyTypes: ['FINE_GRAINED_ACCESS_CONTROL'],
      },
    };
    const [taxonomy] = await policyTagManager.createTaxonomy(taxRequest);
    const tagRequest = {
      parent: taxonomy.name,
      policyTag: {
        displayName: generateUuid(),
      },
    };
    [policyTag0] = await policyTagManager.createPolicyTag(tagRequest);
    tagRequest.policyTag.displayName = generateUuid();
    [policyTag1] = await policyTagManager.createPolicyTag(tagRequest);
  });

  // to avoid getting rate limited
  beforeEach(async function () {
    this.currentTest.retries(2);
  });

  after(async () => {
    await bigquery
      .dataset(srcDatasetId)
      .delete({force: true})
      .catch(console.warn);
    await bigquery
      .dataset(destDatasetId)
      .delete({force: true})
      .catch(console.warn);
    await bigquery.dataset(datasetId).delete({force: true}).catch(console.warn);
    await storage
      .bucket(bucketName)
      .deleteFiles({force: true})
      .catch(console.warn);
    await storage
      .bucket(bucketName)
      .deleteFiles({force: true})
      .catch(console.warn);
    await bigquery
      .dataset(srcDatasetId)
      .delete({force: true})
      .catch(console.warn);
    await storage.bucket(bucketName).delete().catch(console.warn);
  });

  it('should create a table', async () => {
    const output = execSync(`node createTable.js ${datasetId} ${tableId}`);
    assert.include(output, `Table ${tableId} created.`);
    const [exists] = await bigquery.dataset(datasetId).table(tableId).exists();
    assert.ok(exists);
  });

  it('should create a partitioned table', async () => {
    const output = execSync(
      `node createTablePartitioned.js ${datasetId} ${partitionedTableId}`,
    );
    assert.include(
      output,
      `Table ${partitionedTableId} created with partitioning:`,
    );
    assert.include(output, "type: 'DAY'");
    assert.include(output, "field: 'date'");
    const [exists] = await bigquery
      .dataset(datasetId)
      .table(partitionedTableId)
      .exists();
    assert.ok(exists);
  });

  it('should create an integer range partitioned table', async () => {
    const rangePartTableId = generateUuid();
    const output = execSync(
      `node createTableRangePartitioned.js ${datasetId} ${rangePartTableId}`,
    );
    assert.include(
      output,
      `Table ${rangePartTableId} created with integer range partitioning:`,
    );
    assert.include(
      output,
      "range: { start: '0', end: '100000', interval: '10' }",
    );
    const [exists] = await bigquery
      .dataset(datasetId)
      .table(rangePartTableId)
      .exists();
    assert.ok(exists);
  });

  it('should create a clustered table', async () => {
    const clusteredTableId = generateUuid();
    const output = execSync(
      `node createTableClustered.js ${datasetId} ${clusteredTableId}`,
    );
    assert.include(
      output,
      `Table ${clusteredTableId} created with clustering:`,
    );
    assert.include(output, "{ fields: [ 'city', 'zipcode' ] }");
    const [exists] = await bigquery
      .dataset(datasetId)
      .table(clusteredTableId)
      .exists();
    assert.ok(exists);
  });

  it('should update table clustering', async () => {
    const clusteredTableId = generateUuid();
    const output = execSync(
      `node removeTableClustering.js ${datasetId} ${clusteredTableId}`,
    );
    assert.include(
      output,
      `Table ${clusteredTableId} created with clustering.`,
    );
    assert.include(output, `Table ${clusteredTableId} updated clustering:`);
    const [exists] = await bigquery
      .dataset(datasetId)
      .table(clusteredTableId)
      .exists();
    assert.ok(exists);
  });

  it('should create a table with nested schema', async () => {
    const output = execSync(
      `node nestedRepeatedSchema.js ${datasetId} ${nestedTableId}`,
    );
    assert.include(output, `Table ${nestedTableId} created.`);
    const [exists] = await bigquery
      .dataset(datasetId)
      .table(nestedTableId)
      .exists();
    assert.ok(exists);
  });

  it('should create a table with column-level security', async () => {
    const output = execSync(
      `node createTableColumnACL.js ${datasetId} ${aclTableId} ${policyTag0.name}`,
    );
    assert.include(output, `Created table ${aclTableId} with schema:`);
    assert.include(output, policyTag0.name);
    const [exists] = await bigquery
      .dataset(datasetId)
      .table(aclTableId)
      .exists();
    assert.ok(exists);
  });

  it('should update a table with column-level security', async () => {
    const output = execSync(
      `node updateTableColumnACL.js ${datasetId} ${aclTableId} ${policyTag1.name}`,
    );
    assert.include(output, `Updated table ${aclTableId} with schema:`);
    assert.include(output, policyTag1.name);
    const [exists] = await bigquery
      .dataset(datasetId)
      .table(aclTableId)
      .exists();
    assert.ok(exists);
  });

  it('should retrieve a table if it exists', async () => {
    const output = execSync(`node getTable.js ${datasetId} ${tableId}`);
    assert.include(output, 'Table:');
    assert.include(output, datasetId);
    assert.include(output, tableId);
  });

  it('should check whether a table exists', async () => {
    const nonexistentTableId = 'foobar';
    const output = execSync(
      `node tableExists.js ${datasetId} ${nonexistentTableId}`,
    );
    assert.include(output, 'Not found');
    assert.include(output, datasetId);
    assert.include(output, nonexistentTableId);
  });

  it('should create/update a table with default collation', async () => {
    const collationTableId = tableId + '_collation_test';
    const [table] = await bigquery
      .dataset(datasetId)
      .createTable(collationTableId, {
        schema: [
          {name: 'name', type: 'STRING'},
          {name: 'nums', type: 'INTEGER'},
        ],
        defaultCollation: 'und:ci',
        expirationTime: testExpirationTime,
      });
    let [md] = await table.getMetadata();
    assert.equal(md.defaultCollation, 'und:ci');
    for (const field of md.schema.fields) {
      if (field.type === 'STRING') {
        assert.equal(field.collation, 'und:ci');
      }
    }
    // update table collation to case sensitive
    md.defaultCollation = '';
    await table.setMetadata(md);
    [md] = await table.getMetadata();
    assert.equal(md.defaultCollation, '');

    // add field with different collation
    md.schema.fields.push({
      name: 'another_name',
      type: 'STRING',
      collation: 'und:ci',
    });
    await table.setMetadata(md);

    [md] = await table.getMetadata();
    for (const field of md.schema.fields) {
      if (field.type === 'STRING') {
        assert.equal(field.collation, 'und:ci');
      }
    }
  });

  it('should list tables', async () => {
    const output = execSync(`node listTables.js ${datasetId}`);
    assert.match(output, /Tables:/);
    assert.match(output, new RegExp(tableId));
  });

  it("should update table's description", async () => {
    const output = execSync(
      `node updateTableDescription.js ${datasetId} ${tableId}`,
    );
    assert.include(output, `${tableId} description: New table description.`);
  });

  it("should update table's expiration", async () => {
    const currentTime = Date.now();
    const expirationTime = currentTime + 1000 * 60 * 60 * 24 * 5;
    const output = execSync(
      `node updateTableExpiration.js ${datasetId} ${tableId} ${expirationTime}`,
    );
    assert.include(output, `${tableId}`);
    assert.include(output, `expiration: ${expirationTime}`);
  });

  it('should add label to a table', async () => {
    const output = execSync(`node labelTable.js ${datasetId} ${tableId}`);
    assert.include(output, `${tableId} labels:`);
    assert.include(output, "{ color: 'green' }");
  });

  it('should delete a label from a table', async () => {
    const output = execSync(`node deleteLabelTable.js ${datasetId} ${tableId}`);
    assert.include(output, `${tableId} labels:`);
    assert.include(output, 'undefined');
  });

  it('should load a local CSV file', async () => {
    const output = execSync(
      `node loadLocalFile.js ${datasetId} ${tableId} ${localFilePath}`,
    );
    assert.match(output, /completed\./);
    const [rows] = await bigquery.dataset(datasetId).table(tableId).getRows();
    assert.strictEqual(rows.length, 1);
  });

  it('should browse table rows', async () => {
    const browseDestTable = generateUuid();
    const output = execSync(
      `node browseTable.js ${datasetId} ${browseDestTable}`,
    );
    assert.match(output, /name/);
    assert.match(output, /total people/);
  });

  it('should extract a table to GCS CSV file', async () => {
    const output = execSync(
      `node extractTableToGCS.js ${datasetId} ${tableId} ${bucketName} ${exportCSVFileName}`,
    );

    assert.match(output, /created\./);
    const [exists] = await storage
      .bucket(bucketName)
      .file(exportCSVFileName)
      .exists();
    assert.ok(exists);
  });

  it('should extract a table to GCS JSON file', async () => {
    const output = execSync(
      `node extractTableJSON.js ${datasetId} ${tableId} ${bucketName} ${exportJSONFileName}`,
    );

    assert.match(output, /created\./);
    const [exists] = await storage
      .bucket(bucketName)
      .file(exportJSONFileName)
      .exists();
    assert.ok(exists);
  });

  it('should extract a table to GCS compressed file', async () => {
    const output = execSync(
      `node extractTableCompressed.js ${datasetId} ${tableId} ${bucketName} ${exportCSVFileName}`,
    );

    assert.match(output, /created\./);
    const [exists] = await storage
      .bucket(bucketName)
      .file(exportCSVFileName)
      .exists();
    assert.ok(exists);
  });

  it('should load a GCS ORC file', async () => {
    const tableId = generateUuid();
    const output = execSync(`node loadTableGCSORC.js ${datasetId} ${tableId}`);
    assert.match(output, /completed\./);
    const [rows] = await bigquery.dataset(datasetId).table(tableId).getRows();
    assert.ok(rows.length > 0);
  });

  it('should load a GCS Parquet file', async () => {
    const tableId = generateUuid();
    const output = execSync(
      `node loadTableGCSParquet.js ${datasetId} ${tableId}`,
    );
    assert.match(output, /completed\./);
    const [rows] = await bigquery.dataset(datasetId).table(tableId).getRows();
    assert.ok(rows.length > 0);
  });

  it('should load a GCS Avro file', async () => {
    const tableId = generateUuid();
    const output = execSync(`node loadTableGCSAvro.js ${datasetId} ${tableId}`);
    assert.match(output, /completed\./);
    const [rows] = await bigquery.dataset(datasetId).table(tableId).getRows();
    assert.ok(rows.length > 0);
  });

  it('should load a GCS Firestore backup file', async () => {
    const tableId = generateUuid();
    const output = execSync(
      `node loadTableURIFirestore.js ${datasetId} ${tableId}`,
    );
    assert.match(output, /completed\./);
    const [rows] = await bigquery.dataset(datasetId).table(tableId).getRows();
    assert.ok(rows.length > 0);
  });

  it('should load a GCS CSV file with explicit schema', async () => {
    const tableId = generateUuid();
    const output = execSync(`node loadCSVFromGCS.js ${datasetId} ${tableId}`);
    assert.match(output, /completed\./);
    const [rows] = await bigquery.dataset(datasetId).table(tableId).getRows();
    assert.ok(rows.length > 0);
  });

  it('should load a GCS JSON file with explicit schema', async () => {
    const tableId = generateUuid();
    const output = execSync(`node loadJSONFromGCS.js ${datasetId} ${tableId}`);
    assert.match(output, /completed\./);
    const [rows] = await bigquery.dataset(datasetId).table(tableId).getRows();
    assert.ok(rows.length > 0);
  });

  it('should load a GCS CSV file to partitioned table', async () => {
    const tableId = generateUuid();
    const output = execSync(
      `node loadTablePartitioned.js ${datasetId} ${tableId}`,
    );
    assert.match(output, /completed\./);
    const [rows] = await bigquery.dataset(datasetId).table(tableId).getRows();
    assert.ok(rows.length > 0);
  });

  it('should load a GCS CSV file to clustered table', async () => {
    const tableId = generateUuid();
    const output = execSync(
      `node loadTableClustered.js ${datasetId} ${tableId}`,
    );
    assert.match(output, /completed\./);
    const [rows] = await bigquery.dataset(datasetId).table(tableId).getRows();
    assert.ok(rows.length > 0);
  });

  it('should add a new column via a GCS file load job', async () => {
    const destTableId = generateUuid();
    execSync(
      `node createTable.js ${datasetId} ${destTableId} 'Name:STRING, Age:INTEGER, Weight:FLOAT'`,
    );
    const output = execSync(
      `node addColumnLoadAppend.js ${datasetId} ${destTableId} ${localFilePath}`,
    );
    assert.match(output, /completed\./);
    const [rows] = await bigquery.dataset(datasetId).table(tableId).getRows();
    assert.ok(rows.length > 0);
  });

  it('should relax a column via a GCS file load job', async () => {
    const destTableId = generateUuid();
    execSync(`node createTable.js ${datasetId} ${destTableId}`);
    const output = execSync(
      `node relaxColumnLoadAppend.js ${datasetId} ${destTableId} ${partialDataFilePath}`,
    );
    assert.match(output, /completed\./);
    const [rows] = await bigquery.dataset(datasetId).table(tableId).getRows();
    assert.ok(rows.length > 0);
  });

  it('should load a GCS CSV file with autodetected schema', async () => {
    const tableId = generateUuid();
    const output = execSync(
      `node loadCSVFromGCSAutodetect.js ${datasetId} ${tableId}`,
    );
    assert.match(output, /completed\./);
    const [rows] = await bigquery.dataset(datasetId).table(tableId).getRows();
    assert.ok(rows.length > 0);
  });

  it('should load a GCS JSON file with autodetected schema', async () => {
    const tableId = generateUuid();
    const output = execSync(
      `node loadJSONFromGCSAutodetect.js ${datasetId} ${tableId}`,
    );
    assert.match(output, /completed\./);
    const [rows] = await bigquery.dataset(datasetId).table(tableId).getRows();
    assert.ok(rows.length > 0);
  });

  it('should load a GCS CSV file truncate table', async () => {
    const tableId = generateUuid();
    const output = execSync(
      `node loadCSVFromGCSTruncate.js ${datasetId} ${tableId}`,
    );
    assert.match(output, /completed\./);
    assert.include(output, 'Write disposition used: WRITE_TRUNCATE.');
    const [rows] = await bigquery.dataset(datasetId).table(tableId).getRows();
    assert.ok(rows.length > 0);
  });

  it('should load a GCS JSON file truncate table', async () => {
    const tableId = generateUuid();
    const output = execSync(
      `node loadJSONFromGCSTruncate.js ${datasetId} ${tableId}`,
    );
    assert.match(output, /completed\./);
    assert.include(output, 'Write disposition used: WRITE_TRUNCATE.');
    const [rows] = await bigquery.dataset(datasetId).table(tableId).getRows();
    assert.ok(rows.length > 0);
  });

  it('should load a GCS parquet file truncate table', async () => {
    const tableId = generateUuid();
    const output = execSync(
      `node loadParquetFromGCSTruncate.js ${datasetId} ${tableId}`,
    );
    assert.match(output, /completed\./);
    assert.include(output, 'Write disposition used: WRITE_TRUNCATE.');
    const [rows] = await bigquery.dataset(datasetId).table(tableId).getRows();
    assert.ok(rows.length > 0);
  });

  it('should load a GCS ORC file truncate table', async () => {
    const tableId = generateUuid();
    const output = execSync(
      `node loadOrcFromGCSTruncate.js ${datasetId} ${tableId}`,
    );
    assert.match(output, /completed\./);
    assert.include(output, 'Write disposition used: WRITE_TRUNCATE.');
    const [rows] = await bigquery.dataset(datasetId).table(tableId).getRows();
    assert.ok(rows.length > 0);
  });

  it('should load a GCS Avro file truncate table', async () => {
    const tableId = generateUuid();
    const output = execSync(
      `node loadTableGCSAvroTruncate.js ${datasetId} ${tableId}`,
    );
    assert.match(output, /completed\./);
    assert.include(output, 'Write disposition used: WRITE_TRUNCATE.');
    const [rows] = await bigquery.dataset(datasetId).table(tableId).getRows();
    assert.ok(rows.length > 0);
  });

  it('should copy a table', async () => {
    const output = execSync(
      `node copyTable.js ${srcDatasetId} ${srcTableId} ${destDatasetId} ${destTableId}`,
    );
    assert.match(output, /completed\./);
    const [rows] = await bigquery
      .dataset(destDatasetId)
      .table(destTableId)
      .getRows();
    assert.ok(rows.length > 0);
  });

  it('should insert rows', async () => {
    const output = execSync(
      `node insertRowsAsStream.js ${datasetId} ${tableId}`,
    );
    assert.match(output, /Inserted 2 rows/);
  });

  it('should insert rows with supported data types', async () => {
    const typesTableId = generateUuid();
    const output = execSync(
      `node insertingDataTypes.js ${datasetId} ${typesTableId}`,
    );
    assert.match(output, /Inserted 2 rows/);
  });

  it('copy multiple source tables to a given destination', async () => {
    execSync(`node createTable.js ${datasetId} destinationTable`);
    const output = execSync(
      `node copyTableMultipleSource.js ${datasetId} ${tableId} destinationTable`,
    );
    assert.include(output, 'sourceTable');
    assert.include(output, 'destinationTable');
    assert.include(output, 'createDisposition');
    assert.include(output, 'writeDisposition');
  });

  it('should add a column to the schema', async () => {
    const column = "name: 'size', type: 'STRING'";
    const output = execSync(`node addEmptyColumn.js ${datasetId} ${tableId}`);
    assert.include(output, column);
  });

  it("should update a column from 'REQUIRED' TO 'NULLABLE'", async () => {
    const column = "name: 'Name', type: 'STRING', mode: 'NULLABLE'";
    execSync(`node createTable.js ${datasetId} newTable`);
    const output = execSync(`node relaxColumn.js ${datasetId} newTable`);
    assert.include(output, column);
  });

  it('should get labels on a table', async () => {
    execSync(`node labelTable.js ${datasetId} ${tableId}`);
    const output = execSync(`node getTableLabels.js ${datasetId} ${tableId}`);
    assert.include(output, `${tableId} Labels:`);
    assert.include(output, 'color: green');
  });

  describe('Views', () => {
    beforeEach(async function () {
      this.currentTest.retries(2);
    });

    it('should create a view', async () => {
      const output = execSync(`node createView.js ${datasetId} ${viewId}`);
      assert.include(output, `View ${viewId} created.`);
      const [exists] = await bigquery.dataset(datasetId).table(viewId).exists();
      assert.ok(exists);
    });

    it('should get a view', async () => {
      const viewId = generateUuid();
      execSync(`node createView.js ${datasetId} ${viewId}`);
      const output = execSync(`node getView.js ${datasetId} ${viewId}`);
      assert.match(output, /View at/);
      assert.match(output, /View query:/);
    });

    it('should update a view', async () => {
      const output = execSync(`node updateViewQuery.js ${datasetId} ${viewId}`);
      assert.include(output, `View ${viewId} updated.`);
    });
  });

  describe('Delete Table', () => {
    const datasetId = `gcloud_tests_${randomUUID()}`.replace(/-/gi, '_');
    const tableId = `gcloud_tests_${randomUUID()}`.replace(/-/gi, '_');

    before(async () => {
      const datasetOptions = {
        location: 'US',
      };
      const tableOptions = {
        location: 'US',
      };

      await bigquery.createDataset(datasetId, datasetOptions);
      // Create a new table in the dataset
      await bigquery.dataset(datasetId).createTable(tableId, tableOptions);
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

    it('should delete a table', async () => {
      const output = execSync(`node deleteTable.js ${datasetId} ${tableId}`);
      assert.include(output, `Table ${tableId} deleted.`);
      const [exists] = await bigquery
        .dataset(datasetId)
        .table(tableId)
        .exists();
      assert.strictEqual(exists, false);
    });

    it('should undelete a table', async () => {
      const tableId = generateUuid();
      const recoveredTableId = generateUuid();

      execSync(`node createTable.js ${datasetId} ${tableId}`);
      const output = execSync(
        `node undeleteTable.js ${datasetId} ${tableId} ${recoveredTableId}`,
      );

      assert.include(output, `Table ${tableId} deleted.`);
      assert.match(output, /Copied data from deleted table/);
      const [exists] = await bigquery
        .dataset(datasetId)
        .table(recoveredTableId)
        .exists();
      assert.strictEqual(exists, true);
    });
  });

  // Only delete a resource if it is older than 24 hours. That will prevent
  // collisions with parallel CI test runs.
  function isResourceStale(creationTime) {
    const oneDayMs = 86400000;
    const now = new Date();
    const created = new Date(creationTime * 1000);
    return now.getTime() - created.getTime() >= oneDayMs;
  }

  async function deleteStaleTaxonomies() {
    const location = 'us';
    const listTaxonomiesRequest = {
      parent: dataCatalog.locationPath(projectId, location),
    };
    let [taxonomies] = await policyTagManager.listTaxonomies(
      listTaxonomiesRequest,
    );

    taxonomies = taxonomies.filter(taxonomy => {
      return taxonomy.displayName.includes(GCLOUD_TESTS_PREFIX);
    });
    taxonomies.forEach(async taxonomy => {
      if (isResourceStale(taxonomy.taxonomyTimestamps.createTime.seconds)) {
        try {
          await policyTagManager.deleteTaxonomy({name: taxonomy.name});
        } catch (e) {
          console.error(e);
        }
      }
    });
  }
});
