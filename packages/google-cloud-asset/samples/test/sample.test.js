// Copyright 2018 Google LLC
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
const {after, before, describe, it} = require('mocha');
const uuid = require('uuid');
const cp = require('child_process');
const {Storage} = require('@google-cloud/storage');

const execSync = cmd => cp.execSync(cmd, {encoding: 'utf-8'});

const storage = new Storage();
const bucketName = `asset-nodejs-${uuid.v4()}`;
const bucket = storage.bucket(bucketName);

const {BigQuery} = require('@google-cloud/bigquery');
const bigquery = new BigQuery();
const options = {
  location: 'US',
};
const datasetId = `asset_nodejs_${uuid.v4()}`.replace(/-/gi, '_');

const Compute = require('@google-cloud/compute');
const zone = new Compute().zone('us-central1-c');
const vmName = `asset-nodejs-${uuid.v4()}`;

let vm;

// Some of these tests can take an extremely long time, and occasionally
// timeout, see:
// "Timeout of 180000ms exceeded. For async tests and hooks".
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

describe('quickstart sample tests', () => {
  before(async () => {
    await bucket.create();
    await bigquery.createDataset(datasetId, options);
    await bigquery.dataset(datasetId).exists();
    [vm] = await zone.createVM(vmName, {os: 'ubuntu'});
  });

  after(async () => {
    await bucket.delete();
    await bigquery.dataset(datasetId).delete({force: true}).catch(console.warn);
    await vm.delete();
  });

  it('should export assets to specified path', async () => {
    const dumpFilePath = `gs://${bucketName}/my-assets.txt`;
    execSync(`node exportAssets ${dumpFilePath}`);
    let waitMs = 1000;
    let exists = false;
    let file;
    for (let retry = 0; retry < 3 && !exists; ++retry) {
      await sleep((waitMs *= 2));
      file = await bucket.file('my-assets.txt');
      exists = await file.exists();
    }
    assert.ok(exists);
    await file.delete();
  });

  // The assets returned within 'readTimeWindow' frequently do not include
  // the newly created bucket:
  it('should get assets history successfully', async () => {
    const assetName = `//storage.googleapis.com/${bucketName}`;
    let waitMs = 1000;
    let included = false;
    for (let retry = 0; retry < 3 && !included; ++retry) {
      await sleep((waitMs *= 2));
      const stdout = execSync(`node getBatchAssetHistory ${assetName}`);
      included = stdout.includes(assetName);
    }
    assert.ok(included);
  });

  it('should run the quickstart', async () => {
    const assetName = `//storage.googleapis.com/${bucketName}`;
    const stdout = execSync(`node quickstart ${assetName}`);
    assert.include(stdout, assetName);
  });

  it.skip('should search all resources successfully', async () => {
    const query = `name:${vmName}`;
    const stdout = execSync(`node searchAllResources '' ${query}`);
    assert.include(stdout, vmName);
  });

  it('should search all iam policies successfully', async () => {
    const query = 'policy:roles/owner';
    const stdout = execSync(`node searchAllIamPolicies '' ${query}`);
    assert.include(stdout, 'roles/owner');
  });

  it('should list assets successfully', async () => {
    const assetType = 'storage.googleapis.com/Bucket';
    const stdout = execSync(`node listAssets ${assetType}`);
    assert.include(stdout, assetType);
  });

  it('should analyze iam policy successfully', async () => {
    const stdout = execSync('node analyzeIamPolicy');
    assert.include(stdout, '//cloudresourcemanager.googleapis.com/projects');
  });

  it('should analyze iam policy and write analysis results to gcs successfully', async () => {
    const uri = `gs://${bucketName}/my-analysis.json`;
    execSync(`node analyzeIamPolicyLongrunningGcs ${uri}`);
    let waitMs = 1000;
    let exists = false;
    let file;
    for (let retry = 0; retry < 3 && !exists; ++retry) {
      await sleep((waitMs *= 2));
      file = await bucket.file('my-analysis.json');
      exists = await file.exists();
    }
    assert.ok(exists);
    await file.delete();
  });

  it('should analyze iam policy and write analysis results to bigquery successfully', async () => {
    const tablePrefix = 'analysis_nodejs';
    execSync(
      `node analyzeIamPolicyLongrunningBigquery ${datasetId} ${tablePrefix}`
    );
    let waitMs = 1000;
    let metadataTable;
    let metadataTable_exists = false;
    let resultsTable;
    let resultsTable_exists = false;

    for (
      let retry = 0;
      retry < 3 && !(metadataTable_exists || resultsTable_exists);
      ++retry
    ) {
      await sleep((waitMs *= 2));
      metadataTable = await bigquery
        .dataset(datasetId)
        .table('analysis_nodejs_analysis');
      metadataTable_exists = await metadataTable.exists();
      resultsTable = await bigquery
        .dataset(datasetId)
        .table('analysis_nodejs_analysis_result');
      resultsTable_exists = await resultsTable.exists();
    }

    assert.ok(metadataTable_exists);
    assert.ok(resultsTable_exists);
    await metadataTable.delete();
    await resultsTable.delete();
  });
});
