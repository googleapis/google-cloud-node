// Copyright 2021 Google LLC
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

function main(jobName, projectId, transferJob) {
  // [START storagetransfer_v1_generated_StorageTransferService_UpdateTransferJob_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The name of job to update.
   */
  // const jobName = 'abc123'
  /**
   *  Required. The ID of the Google Cloud Platform Console project that owns the
   *  job.
   */
  // const projectId = 'abc123'
  /**
   *  Required. The job to update. `transferJob` is expected to specify only
   *  four fields:
   *  description google.storagetransfer.v1.TransferJob.description,
   *  transfer_spec google.storagetransfer.v1.TransferJob.transfer_spec,
   *  notification_config google.storagetransfer.v1.TransferJob.notification_config,
   *  and status google.storagetransfer.v1.TransferJob.status.  An
   *  `UpdateTransferJobRequest` that specifies other fields are rejected with
   *  the error INVALID_ARGUMENT google.rpc.Code.INVALID_ARGUMENT. Updating a
   *  job status to
   *  DELETED google.storagetransfer.v1.TransferJob.Status.DELETED  requires
   *  `storagetransfer.jobs.delete` permissions.
   */
  // const transferJob = {}
  /**
   *  The field mask of the fields in `transferJob` that are to be updated in
   *  this request.  Fields in `transferJob` that can be updated are:
   *  description google.storagetransfer.v1.TransferJob.description,
   *  transfer_spec google.storagetransfer.v1.TransferJob.transfer_spec,
   *  notification_config google.storagetransfer.v1.TransferJob.notification_config,
   *  and status google.storagetransfer.v1.TransferJob.status.  To update the
   *  `transfer_spec` of the job, a complete transfer specification must be
   *  provided. An incomplete specification missing any required fields is
   *  rejected with the error
   *  INVALID_ARGUMENT google.rpc.Code.INVALID_ARGUMENT.
   */
  // const updateTransferJobFieldMask = {}

  // Imports the Storagetransfer library
  const {StorageTransferServiceClient} =
    require('@google-cloud/storage-transfer').v1;

  // Instantiates a client
  const storagetransferClient = new StorageTransferServiceClient();

  async function callUpdateTransferJob() {
    // Construct request
    const request = {
      jobName,
      projectId,
      transferJob,
    };

    // Run request
    const response = await storagetransferClient.updateTransferJob(request);
    console.log(response);
  }

  callUpdateTransferJob();
  // [END storagetransfer_v1_generated_StorageTransferService_UpdateTransferJob_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
