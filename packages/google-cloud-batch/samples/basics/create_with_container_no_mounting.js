// Copyright 2022 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

/**
 * Creates a new Batch job that runs the specified container on multiple VM instances at once.
 *
 * @param {string} projectId - ID or number of the Google Cloud project you want to use.
 * @param {string} region - The Google Cloud region to use, e.g. 'us-central1'
 * @param {string} jobName - ID used to uniquely identify the Job within this project and region.
 *  This field should contain at most 63 characters.
 *  Only alphanumeric characters or '-' are accepted.
 *  The '-' character cannot be the first or the last one.
 */
function main(projectId, region, jobName) {
  // [START batch_create_container_job]
  /**
   * TODO(developer): Uncomment and replace these variables before running the sample.
   */
  // const projectId = 'YOUR_PROJECT_ID';
  /**
   * The region you want to the job to run in. The regions that support Batch are listed here:
   * https://cloud.google.com/batch/docs/get-started#locations
   */
  // const region = 'us-central-1';
  /**
   * The name of the job that will be created.
   * It needs to be unique for each project and region pair.
   */
  // const jobName = 'YOUR_JOB_NAME';

  // Imports the Batch library
  const batchLib = require('@google-cloud/batch');
  const batch = batchLib.protos.google.cloud.batch.v1;

  // Instantiates a client
  const batchClient = new batchLib.v1.BatchServiceClient();

  // Define what will be done as part of the job.
  const task = new batch.TaskSpec();
  const runnable = new batch.Runnable();
  runnable.container = new batch.Runnable.Container();
  runnable.container.imageUri = 'gcr.io/google-containers/busybox';
  runnable.container.entrypoint = '/bin/sh';
  runnable.container.commands =
    'echo Hello world! This is task ${BATCH_TASK_INDEX}. This job has a total of ${BATCH_TASK_COUNT} tasks.';
  task.runnables = [runnable];

  // We can specify what resources are requested by each task.
  const resources = new batch.ComputeResource();
  resources.cpuMilli = 2000; // in milliseconds per cpu-second. This means the task requires 2 whole CPUs.
  resources.memoryMib = 16;
  task.computeResource = resources;

  task.maxRetryCount = 2;
  task.maxRunDuration = '3600s';

  // Tasks are grouped inside a job using TaskGroups.
  const group = new batch.TaskGroup();
  group.taskCount = 4;
  group.taskSpec = task;

  // Policies are used to define on what kind of virtual machines the tasks will run on.
  // In this case, we tell the system to use "e2-standard-4" machine type.
  // Read more about machine types here: https://cloud.google.com/compute/docs/machine-types
  const allocationPolicy = new batch.AllocationPolicy();
  const policy = new batch.AllocationPolicy.InstancePolicy();
  policy.machineType = 'e2-standard-4';
  const instances = new batch.AllocationPolicy.InstancePolicyOrTemplate();
  instances.policy = policy;
  allocationPolicy.instances = [instances];

  const job = new batch.Job();
  job.name = jobName;
  job.taskGroups = [group];
  job.allocationPolicy = allocationPolicy;
  job.labels = {env: 'testing', type: 'container'};
  // We use Cloud Logging as it's an out option available out of the box
  job.logs_policy = new batch.LogsPolicy();
  job.logs_policy.destination = batch.LogsPolicy.Destination.CLOUD_LOGGING;

  // The job's parent is the project and region in which the job will run
  const parent = `projects/${projectId}/locations/${region}`;

  async function callCreateJob() {
    // Construct request
    const request = {
      parent,
      job,
    };

    // Run request
    const response = await batchClient.createJob(request);
    console.log(response);
  }

  callCreateJob();
  // [END batch_create_container_job]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
