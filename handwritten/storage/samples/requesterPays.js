/**
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * This application demonstrates how to perform basic operations on buckets with
 * the Google Cloud Storage API.
 *
 * For more information, see the README.md under /storage and the documentation
 * at https://cloud.google.com/storage/docs.
 */

'use strict';

async function enableRequesterPays(bucketName) {
  // [START storage_enable_requester_pays]
  // Imports the Google Cloud client library
  const {Storage} = require(`@google-cloud/storage`);

  // Creates a client
  const storage = new Storage();

  /**
   * TODO(developer): Uncomment the following line before running the sample.
   */
  // const bucketName = 'Name of a bucket, e.g. my-bucket';

  // Enables requester-pays requests
  await storage.bucket(bucketName).enableRequesterPays();

  console.log(
    `Requester-pays requests have been enabled for bucket ${bucketName}.`
  );
  // [END storage_enable_requester_pays]
}

async function disableRequesterPays(bucketName) {
  // [START storage_disable_requester_pays]
  // Imports the Google Cloud client library
  const {Storage} = require(`@google-cloud/storage`);

  // Creates a client
  const storage = new Storage();

  /**
   * TODO(developer): Uncomment the following line before running the sample.
   */
  // const bucketName = 'Name of a bucket, e.g. my-bucket';

  // Disables requester-pays requests
  await storage.bucket(bucketName).disableRequesterPays();

  console.log(
    `Requester-pays requests have been disabled for bucket ${bucketName}.`
  );
  // [END storage_disable_requester_pays]
}

async function getRequesterPaysStatus(bucketName) {
  // [START storage_get_requester_pays_status]
  // Imports the Google Cloud client library
  const {Storage} = require(`@google-cloud/storage`);

  // Creates a client
  const storage = new Storage();

  /**
   * TODO(developer): Uncomment the following line before running the sample.
   */
  // const bucketName = 'Name of a bucket, e.g. my-bucket';

  // Gets the requester-pays status of a bucket
  const [metadata] = await storage.bucket(bucketName).getMetadata();

  let status;
  if (metadata && metadata.billing && metadata.billing.requesterPays) {
    status = `enabled`;
  } else {
    status = `disabled`;
  }
  console.log(
    `Requester-pays requests are ${status} for bucket ${bucketName}.`
  );
  // [END storage_get_requester_pays_status]
}

async function downloadFileUsingRequesterPays(
  projectId,
  bucketName,
  srcFilename,
  destFilename
) {
  // [START storage_download_file_requester_pays]
  // Imports the Google Cloud client library
  const {Storage} = require(`@google-cloud/storage`);

  // Creates a client
  const storage = new Storage();

  /**
   * TODO(developer): Uncomment the following lines before running the sample.
   */
  // const projectId = 'The project ID to bill from, e.g. some-project-id';
  // const bucketName = 'Name of a bucket, e.g. my-bucket';
  // const srcFilename = 'Name of file to download, e.g. file.txt';
  // const destFilename = 'Local destination of file, e.g. ./local/path/to/file.txt';

  const options = {
    // The path to which the file should be downloaded, e.g. "./file.txt"
    destination: destFilename,

    // The project to bill from, if requester-pays requests are enabled
    userProject: projectId,
  };

  // Downloads the file
  await storage
    .bucket(bucketName)
    .file(srcFilename)
    .download(options);

  console.log(
    `gs://${bucketName}/${srcFilename} downloaded to ${destFilename} using requester-pays requests.`
  );
  // [END storage_download_file_requester_pays]
}

require(`yargs`)
  .demand(1)
  .command(
    `enable <bucket>`,
    `Enables requester-pays requests on a bucket.`,
    {},
    opts => enableRequesterPays(opts.bucket)
  )
  .command(
    `disable <bucket>`,
    `Disables requester-pays requests on a bucket.`,
    {},
    opts => disableRequesterPays(opts.bucket)
  )
  .command(
    `get-status <bucket>`,
    `Determines whether requester-pays requests are enabled on a bucket.`,
    {},
    opts => getRequesterPaysStatus(opts.bucket)
  )
  .command(
    `download <bucketName> <srcFileName> <destFileName>`,
    `Downloads a file from a bucket using requester-pays requests.`,
    {
      projectId: {
        type: `string`,
        alias: `p`,
        default: process.env.GCLOUD_PROJECT,
      },
    },
    opts =>
      downloadFileUsingRequesterPays(
        opts.projectId,
        opts.bucketName,
        opts.srcFileName,
        opts.destFileName
      )
  )
  .example(
    `node $0 enable my-bucket`,
    `Enables requester-pays requests on a bucket named "my-bucket".`
  )
  .example(
    `node $0 disable my-bucket`,
    `Disables requester-pays requests on a bucket named "my-bucket".`
  )
  .example(
    `node $0 get-status my-bucket`,
    `Determines whether requester-pays requests are enabled for a bucket named "my-bucket".`
  )
  .example(
    `node $0 download my-bucket file.txt ./file.txt`,
    `Downloads "gs://my-bucket/file.txt" to "./file.txt" using requester-pays requests.`
  )
  .wrap(120)
  .recommendCommands()
  .epilogue(`For more information, see https://cloud.google.com/storage/docs`)
  .strict()
  .help().argv;
