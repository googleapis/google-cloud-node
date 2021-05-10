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

// sample-metadata:
//   title: Quickstart
//   usage: node quickstart.js <PROJECT_ID> <REGION> <CLUSTER_NAME> <JOB_FILE_PATH>

// [START dataproc_quickstart]
// This quickstart sample walks a user through creating a Dataproc
// cluster, submitting a PySpark job from Google Cloud Storage to the
// cluster, reading the output of the job and deleting the cluster, all
// using the Node.js client library.

'use strict';

function main(projectId, region, clusterName, jobFilePath) {
  const dataproc = require('@google-cloud/dataproc');
  const {Storage} = require('@google-cloud/storage');

  // Create a cluster client with the endpoint set to the desired cluster region
  const clusterClient = new dataproc.v1.ClusterControllerClient({
    apiEndpoint: `${region}-dataproc.googleapis.com`,
    projectId: projectId,
  });

  // Create a job client with the endpoint set to the desired cluster region
  const jobClient = new dataproc.v1.JobControllerClient({
    apiEndpoint: `${region}-dataproc.googleapis.com`,
    projectId: projectId,
  });

  async function quickstart() {
    // Create the cluster config
    const cluster = {
      projectId: projectId,
      region: region,
      cluster: {
        clusterName: clusterName,
        config: {
          masterConfig: {
            numInstances: 1,
            machineTypeUri: 'n1-standard-2',
          },
          workerConfig: {
            numInstances: 2,
            machineTypeUri: 'n1-standard-2',
          },
        },
      },
    };

    // Create the cluster
    const [operation] = await clusterClient.createCluster(cluster);
    const [response] = await operation.promise();

    // Output a success message
    console.log(`Cluster created successfully: ${response.clusterName}`);

    const job = {
      projectId: projectId,
      region: region,
      job: {
        placement: {
          clusterName: clusterName,
        },
        pysparkJob: {
          mainPythonFileUri: jobFilePath,
        },
      },
    };

    const [jobOperation] = await jobClient.submitJobAsOperation(job);
    const [jobResponse] = await jobOperation.promise();

    const matches =
      jobResponse.driverOutputResourceUri.match('gs://(.*?)/(.*)');

    const storage = new Storage();

    const output = await storage
      .bucket(matches[1])
      .file(`${matches[2]}.000000000`)
      .download();

    // Output a success message.
    console.log(`Job finished successfully: ${output}`);

    // Delete the cluster once the job has terminated.
    const deleteClusterReq = {
      projectId: projectId,
      region: region,
      clusterName: clusterName,
    };

    const [deleteOperation] = await clusterClient.deleteCluster(
      deleteClusterReq
    );
    await deleteOperation.promise();

    // Output a success message
    console.log(`Cluster ${clusterName} successfully deleted.`);
  }

  quickstart();
}

const args = process.argv.slice(2);

if (args.length !== 4) {
  console.log(
    'Insufficient number of parameters provided. Please make sure a ' +
      'PROJECT_ID, REGION, CLUSTER_NAME and JOB_FILE_PATH are provided, in this order.'
  );
}

main(...args);
// [END dataproc_quickstart]
