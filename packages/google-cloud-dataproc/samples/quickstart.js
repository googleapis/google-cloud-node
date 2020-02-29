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

// [START dataproc_quickstart]
// This quickstart sample walks a user through creating a Cloud Dataproc
// cluster, submitting a PySpark job from Google Cloud Storage to the
// cluster, reading the output of the job and deleting the cluster, all
// using the Node.js client library.
//
// Usage:
//     node quickstart.js <PROJECT_ID> <REGION> <CLUSTER_NAME> <GCS_JOB_FILE_PATH>

'use strict';

function main(projectId, region, clusterName, jobFilePath) {
  const dataproc = require('@google-cloud/dataproc');
  const {Storage} = require('@google-cloud/storage');

  const sleep = require('sleep');

  // Create a cluster client with the endpoint set to the desired cluster region
  const clusterClient = new dataproc.v1.ClusterControllerClient({
    apiEndpoint: `${region}-dataproc.googleapis.com`,
  });

  // Create a job client with the endpoint set to the desired cluster region
  const jobClient = new dataproc.v1.JobControllerClient({
    apiEndpoint: `${region}-dataproc.googleapis.com`,
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
            machineTypeUri: 'n1-standard-1',
          },
          workerConfig: {
            numInstances: 2,
            machineTypeUri: 'n1-standard-1',
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

    let [jobResp] = await jobClient.submitJob(job);
    const jobId = jobResp.reference.jobId;

    console.log(`Submitted job "${jobId}".`);

    // Terminal states for a job
    const terminalStates = new Set(['DONE', 'ERROR', 'CANCELLED']);

    // Create a timeout such that the job gets cancelled if not
    // in a termimal state after a fixed period of time.
    const timeout = 600000;
    const start = new Date();

    // Wait for the job to finish.
    const jobReq = {
      projectId: projectId,
      region: region,
      jobId: jobId,
    };

    while (!terminalStates.has(jobResp.status.state)) {
      if (new Date() - timeout > start) {
        await jobClient.cancelJob(jobReq);
        console.log(
          `Job ${jobId} timed out after threshold of ` +
            `${timeout / 60000} minutes.`
        );
        break;
      }
      await sleep.sleep(1);
      [jobResp] = await jobClient.getJob(jobReq);
    }

    const clusterReq = {
      projectId: projectId,
      region: region,
      clusterName: clusterName,
    };

    const [clusterResp] = await clusterClient.getCluster(clusterReq);

    const storage = new Storage();

    const output = await storage
      .bucket(clusterResp.config.configBucket)
      .file(
        `google-cloud-dataproc-metainfo/${clusterResp.clusterUuid}/` +
          `jobs/${jobId}/driveroutput.000000000`
      )
      .download();

    // Output a success message.
    console.log(
      `Job ${jobId} finished with state ${jobResp.status.state}:\n${output}`
    );

    // Delete the cluster once the job has terminated.
    const [deleteOperation] = await clusterClient.deleteCluster(clusterReq);
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
