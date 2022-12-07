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
const {describe, it, beforeEach, afterEach} = require('mocha');
const cp = require('child_process');
const {v4} = require('uuid');

const dataproc = require('@google-cloud/dataproc');
const {Storage} = require('@google-cloud/storage');

const myUuid = v4();
const region = 'us-central1';
const clusterName = `node-qs-test-${myUuid}`;
const bucketName = `node-dataproc-qs-test-${myUuid}`;
const jobFileName = 'sum.py';
const jobFilePath = `gs://${bucketName}/${jobFileName}`;
const sortCode =
  'import pyspark\n' +
  'sc = pyspark.SparkContext()\n' +
  'rdd = sc.parallelize((1,2,3,4,5))\n' +
  'sum = rdd.reduce(lambda x, y: x + y)\n';

const clusterClient = new dataproc.v1.ClusterControllerClient({
  apiEndpoint: `${region}-dataproc.googleapis.com`,
});

const storage = new Storage();

const execSync = cmd =>
  cp.execSync(cmd, {
    encoding: 'utf-8',
  });

const {delay} = require('./util');

describe('execute the quickstart', () => {
  let projectId;

  beforeEach(async () => {
    const [bucket] = await storage.createBucket(bucketName);
    await bucket.file(jobFileName).save(sortCode);
    projectId = await storage.getProjectId();
  });

  it('should execute the quickstart', async function () {
    this.retries(4);
    await delay(this.test);
    const stdout = execSync(
      `node quickstart.js "${projectId}" "${region}" "${clusterName}" "${jobFilePath}"`
    );
    assert.match(stdout, /Cluster created successfully/);
    assert.match(stdout, /Job finished successfully/);
    assert.match(stdout, /successfully deleted/);
  });

  afterEach(async () => {
    try {
      await storage.bucket(bucketName).file(jobFileName).delete();
      await storage.bucket(bucketName).delete();

      const [clusters] = await clusterClient.listClusters({
        projectId: projectId,
        region: region,
      });

      for (const cluster of clusters) {
        if (cluster.clusterName === clusterName) {
          await clusterClient.deleteCluster({
            projectId: projectId,
            region: region,
            clusterName: clusterName,
          });
          break;
        }
      }
    } catch (err) {
      console.error('Cannot clean up resources:', err);
    }
  });
});
