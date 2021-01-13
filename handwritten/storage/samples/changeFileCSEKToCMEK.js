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

// sample-metadata:
//   title: Storage File Convert CSEK to CMEK.
//   description: Storage File Convert CSEK to CMEK.
//   usage: node changeFileCSEKToCMEK.js <BUCKET_NAME> <FILE_NAME> <ENCRYPTION_KEY> <KMS_KEY_NAME>

function main(
  bucketName = 'my-bucket',
  fileName = 'test.txt',
  encryptionKey = 'my-encription-key',
  kmsKeyName = 'my-kms-key'
) {
  // [START storage_object_csek_to_cmek]
  /**
   * TODO(developer): Uncomment the following lines before running the sample.
   */
  // const bucketName = 'Name of a bucket, e.g. my-bucket';
  // const fileName = 'Nome of a file in the bucket, e.g. my-file';
  // const encryptionKey = 'The Base64 encoded decryption key, e.g. my-encription-key';
  // const kmsKeyName = 'The name of the KMS key to manage this object with, e.g. my-key';

  // Imports the Google Cloud client library
  const {Storage} = require('@google-cloud/storage');

  // Creates a client
  const storage = new Storage();

  async function changeFileCSEKToCMEK() {
    await storage
      .bucket(bucketName)
      .file(fileName, {
        encryptionKey: Buffer.from(encryptionKey, 'base64'),
      })
      .rotateEncryptionKey({
        kmsKeyName,
      });

    console.log(
      `file ${fileName} in bucket ${bucketName} is now managed by KMS key ${kmsKeyName} instead of customer-supplied encryption key.`
    );
  }

  changeFileCSEKToCMEK();
  // [END storage_object_csek_to_cmek]
}
process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
