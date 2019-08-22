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
 * This application demonstrates how to perform basic operations on encrypted
 * files with the Google Cloud Storage API.
 *
 * For more information, see the README.md under /storage and the documentation
 * at https://cloud.google.com/storage/docs.
 */

'use strict';

// [START storage_generate_encryption_key]
const crypto = require('crypto');

/**
 * Generates a 256 bit (32 byte) AES encryption key and prints the base64
 * representation.
 *
 * This is included for demonstration purposes. You should generate your own
 * key. Please remember that encryption keys should be handled with a
 * comprehensive security policy.
 *
 * @returns {string} The encryption key.
 */
function generateEncryptionKey() {
  const buffer = crypto.randomBytes(32);
  const encodedKey = buffer.toString('base64');

  console.log(`Base 64 encoded encryption key: ${encodedKey}`);

  return encodedKey;
}
// [END storage_generate_encryption_key]

async function uploadEncryptedFile(bucketName, srcFilename, destFilename, key) {
  // [START storage_upload_encrypted_file]
  // Imports the Google Cloud client library
  const {Storage} = require('@google-cloud/storage');

  // Creates a client
  const storage = new Storage();

  /**
   * TODO(developer): Uncomment the following lines before running the sample.
   */
  // const bucketName = 'Name of a bucket, e.g. my-bucket';
  // const srcFilename = 'Local file to upload, e.g. ./local/path/to/file.txt';
  // const destFilename = 'Remote destination for file, e.g. file_encrypted.txt';

  // See the "Generating your own encryption key" section above.
  // const key = 'A base64 encoded customer-supplied key';

  const options = {
    // The path to which the file should be uploaded, e.g. "file_encrypted.txt"
    destination: destFilename,
    // Encrypt the file with a customer-supplied key.
    // See the "Generating your own encryption key" section above.
    encryptionKey: Buffer.from(key, 'base64'),
  };

  // Encrypts and uploads a local file, e.g. "./local/path/to/file.txt".
  // The file will only be retrievable using the key used to upload it.
  await storage.bucket(bucketName).upload(srcFilename, options);

  console.log(
    `File ${srcFilename} uploaded to gs://${bucketName}/${destFilename}.`
  );
  // [END storage_upload_encrypted_file]
}

async function downloadEncryptedFile(
  bucketName,
  srcFilename,
  destFilename,
  key
) {
  // [START storage_download_encrypted_file]
  // Imports the Google Cloud client library
  const {Storage} = require('@google-cloud/storage');

  // Creates a client
  const storage = new Storage();

  /**
   * TODO(developer): Uncomment the following lines before running the sample.
   */
  // const bucketName = 'Name of a bucket, e.g. my-bucket';
  // const srcFilename = 'File to download, e.g. file_encrypted.txt';
  // const destFilename = 'Local destination for file, e.g. ./file.txt';

  // See the "Generating your own encryption key" section above.
  // const key = 'A base64 encoded customer-supplied key';

  const options = {
    // The path to which the file should be downloaded, e.g. "./file.txt"
    destination: destFilename,
  };

  // Descrypts and downloads the file. This can only be done with the key used
  // to encrypt and upload the file.
  await storage
    .bucket(bucketName)
    .file(srcFilename)
    .setEncryptionKey(Buffer.from(key, 'base64'))
    .download(options);

  console.log(`File ${srcFilename} downloaded to ${destFilename}.`);
  // [END storage_download_encrypted_file]
}

async function rotateEncryptionKey(bucketName, fileName, oldKey, newKey) {
  // [START storage_rotate_encryption_key]
  // Imports the Google Cloud client library
  const {Storage} = require('@google-cloud/storage');

  // Creates a client
  const storage = new Storage();

  /**
   * TODO(developer): Uncomment the following lines before running the sample.
   */
  // const bucketName = 'Name of a bucket, e.g. my-bucket';
  // const fileName = 'Nome of a file in the bucket, e.g. my-file';

  // See the "Generating your own encryption key" section above.
  // const oldKey = 'The current base64 encoded customer-supplied encryption key';
  // const newKey = 'A new base64 encoded customer-supplied encryption key';

  await storage
    .bucket(bucketName)
    .file(fileName, {
      encryptionKey: Buffer.from(oldKey, 'base64'),
    })
    .rotateEncryptionKey({
      encryptionKey: Buffer.from(newKey, 'base64'),
    });

  console.log(`Encryption key rotated successfully.`);
  // [END storage_rotate_encryption_key]
}

require(`yargs`)
  .demand(1)
  .command(
    `generate-encryption-key`,
    `Generate a sample encryption key.`,
    {},
    generateEncryptionKey
  )
  .command(
    `upload <bucketName> <srcFilename> <destFilename> <key>`,
    `Encrypts and uploads a file.`,
    {},
    opts =>
      uploadEncryptedFile(
        opts.bucketName,
        opts.srcFilename,
        opts.destFilename,
        opts.key
      )
  )
  .command(
    `download <bucketName> <srcFilename> <destFilename> <key>`,
    `Decrypts and downloads a file.`,
    {},
    opts =>
      downloadEncryptedFile(
        opts.bucketName,
        opts.srcFilename,
        opts.destFilename,
        opts.key
      )
  )
  .command(
    `rotate <bucketName> <fileName> <oldKey> <newKey>`,
    `Rotates encryption keys for a file.`,
    {},
    opts =>
      rotateEncryptionKey(
        opts.bucketName,
        opts.fileName,
        opts.oldKey,
        opts.newKey
      )
  )
  .example(
    `node $0 generate-encryption-key`,
    `Generate a sample encryption key.`
  )
  .example(
    `node $0 upload my-bucket ./resources/test.txt file_encrypted.txt QxhqaZEqBGVTW55HhQw9Q=`,
    `Encrypts and uploads "resources/test.txt" to "gs://my-bucket/file_encrypted.txt".`
  )
  .example(
    `node $0 download my-bucket file_encrypted.txt ./file.txt QxhqaZEqBGVTW55HhQw9Q=`,
    `Decrypts and downloads "gs://my-bucket/file_encrypted.txt" to "./file.txt".`
  )
  .example(
    `node $0 rotate my-bucket file_encrypted.txt QxhqaZEqBGVTW55HhQw9Q= SxafpsdfSDFS89sds9Q=`,
    `Rotates encryption keys for "gs://my-bucket/file_encrypted.txt".`
  )
  .wrap(120)
  .recommendCommands()
  .epilogue(`For more information, see https://cloud.google.com/storage/docs`)
  .help()
  .strict().argv;
