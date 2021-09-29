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

const {
  IdempotencyStrategy,
} = require('@google-cloud/storage/build/src/storage');

/**
 * This application demonstrates how to perform basic operations on buckets with
 * the Google Cloud Storage API.
 *
 * For more information, see the README.md under /storage and the documentation
 * at https://cloud.google.com/storage/docs.
 */

function main(bucketName = 'my-bucket', fileName = 'test.txt') {
  // [START storage_configure_retries]
  /**
   * TODO(developer): Uncomment the following lines before running the sample.
   */
  // The ID of your GCS bucket
  // const bucketName = 'your-unique-bucket-name';

  // The ID of your GCS file
  // const fileName = 'your-file-name';

  // Imports the Google Cloud client library
  const {Storage} = require('@google-cloud/storage');

  // Creates a client
  const storage = new Storage({
    retryOptions: {
      // If this is false, requests will not retry and the parameters
      // below will not affect retry behavior.
      autoRetry: true,
      // The multiplier by which to increase the delay time between the
      // completion of failed requests, and the initiation of the subsequent
      // retrying request.
      retryDelayMultiplier: 3,
      // The total time between an initial request getting sent and its timeout.
      // After timeout, an error will be returned regardless of any retry attempts
      // made during this time period.
      totalTimeout: 500,
      // The maximum delay time between requests. When this value is reached,
      // retryDelayMultiplier will no longer be used to increase delay time.
      maxRetryDelay: 60,
      // The maximum number of automatic retries attempted before returning
      // the error.
      maxRetries: 5,
      // Will respect other retry settings and attempt to always retry
      // conditionally idempotent operations, regardless of precondition
      idempotencyStrategy: IdempotencyStrategy.RetryAlways,
    },
  });
  console.log(
    'Functions are customized to be retried according to the following parameters:'
  );
  console.log(`Auto Retry: ${storage.retryOptions.autoRetry}`);
  console.log(
    `Retry delay multiplier: ${storage.retryOptions.retryDelayMultiplier}`
  );
  console.log(`Total timeout: ${storage.retryOptions.totalTimeout}`);
  console.log(`Maximum retry delay: ${storage.retryOptions.maxRetryDelay}`);
  console.log(`Maximum retries: ${storage.retryOptions.maxRetries}`);
  console.log(
    `Idempotency strategy: ${storage.retryOptions.idempotencyStrategy}`
  );

  async function deleteFileWithCustomizedRetrySetting() {
    await storage.bucket(bucketName).file(fileName).delete();
    console.log(`File ${fileName} deleted with a customized retry strategy.`);
  }

  deleteFileWithCustomizedRetrySetting();
  // [END storage_configure_retries]
}
process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
