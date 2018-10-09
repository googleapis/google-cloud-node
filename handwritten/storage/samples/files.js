/**
 * Copyright 2017, Google, Inc.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * This application demonstrates how to perform basic operations on files with
 * the Google Cloud Storage API.
 *
 * For more information, see the README.md under /storage and the documentation
 * at https://cloud.google.com/storage/docs.
 */

'use strict';

async function listFiles(bucketName) {
  // [START storage_list_files]
  // Imports the Google Cloud client library
  const {Storage} = require('@google-cloud/storage');

  // Creates a client
  const storage = new Storage();

  /**
   * TODO(developer): Uncomment the following line before running the sample.
   */
  // const bucketName = 'Name of a bucket, e.g. my-bucket';

  // Lists files in the bucket
  const [files] = await storage.bucket(bucketName).getFiles();

  console.log('Files:');
  files.forEach(file => {
    console.log(file.name);
  });
  // [END storage_list_files]
}

async function listFilesByPrefix(bucketName, prefix, delimiter) {
  // [START storage_list_files_with_prefix]
  // Imports the Google Cloud client library
  const {Storage} = require('@google-cloud/storage');

  // Creates a client
  const storage = new Storage();

  /**
   * TODO(developer): Uncomment the following lines before running the sample.
   */
  // const bucketName = 'Name of a bucket, e.g. my-bucket';
  // const prefix = 'Prefix by which to filter, e.g. public/';
  // const delimiter = 'Delimiter to use, e.g. /';

  /**
   * This can be used to list all blobs in a "folder", e.g. "public/".
   *
   * The delimiter argument can be used to restrict the results to only the
   * "files" in the given "folder". Without the delimiter, the entire tree under
   * the prefix is returned. For example, given these blobs:
   *
   *   /a/1.txt
   *   /a/b/2.txt
   *
   * If you just specify prefix = '/a', you'll get back:
   *
   *   /a/1.txt
   *   /a/b/2.txt
   *
   * However, if you specify prefix='/a' and delimiter='/', you'll get back:
   *
   *   /a/1.txt
   */
  const options = {
    prefix: prefix,
  };

  if (delimiter) {
    options.delimiter = delimiter;
  }

  // Lists files in the bucket, filtered by a prefix
  const [files] = await storage.bucket(bucketName).getFiles(options);

  console.log('Files:');
  files.forEach(file => {
    console.log(file.name);
  });
  // [END storage_list_files_with_prefix]
}

async function uploadFile(bucketName, filename) {
  // [START storage_upload_file]
  // Imports the Google Cloud client library
  const {Storage} = require('@google-cloud/storage');

  // Creates a client
  const storage = new Storage();

  /**
   * TODO(developer): Uncomment the following lines before running the sample.
   */
  // const bucketName = 'Name of a bucket, e.g. my-bucket';
  // const filename = 'Local file to upload, e.g. ./local/path/to/file.txt';

  // Uploads a local file to the bucket
  await storage.bucket(bucketName).upload(filename, {
    // Support for HTTP requests made with `Accept-Encoding: gzip`
    gzip: true,
    metadata: {
      // Enable long-lived HTTP caching headers
      // Use only if the contents of the file will never change
      // (If the contents will change, use cacheControl: 'no-cache')
      cacheControl: 'public, max-age=31536000',
    },
  });

  console.log(`${filename} uploaded to ${bucketName}.`);
  // [END storage_upload_file]
}

async function uploadFileWithKmsKey(bucketName, filename, kmsKeyName) {
  // [START storage_upload_with_kms_key]
  // Imports the Google Cloud client library
  const {Storage} = require('@google-cloud/storage');

  // Creates a client
  const storage = new Storage();

  /**
   * TODO(developer): Uncomment the following lines before running the sample.
   */
  // const bucketName = 'Name of a bucket, e.g. my-bucket';
  // const filename = 'Local file to upload, e.g. ./local/path/to/file.txt';
  // const kmsKeyName = 'KMS key resource id, e.g. my-key';

  // Uploads a local file to the bucket with the kms key
  await storage.bucket(bucketName).upload(filename, {
    kmsKeyName,
  });

  console.log(`${filename} uploaded to ${bucketName} using ${kmsKeyName}.`);
  // [END storage_upload_with_kms_key]
}

async function downloadFile(bucketName, srcFilename, destFilename) {
  // [START storage_download_file]
  // Imports the Google Cloud client library
  const {Storage} = require('@google-cloud/storage');

  // Creates a client
  const storage = new Storage();

  /**
   * TODO(developer): Uncomment the following lines before running the sample.
   */
  // const bucketName = 'Name of a bucket, e.g. my-bucket';
  // const srcFilename = 'Remote file to download, e.g. file.txt';
  // const destFilename = 'Local destination for file, e.g. ./local/path/to/file.txt';

  const options = {
    // The path to which the file should be downloaded, e.g. "./file.txt"
    destination: destFilename,
  };

  // Downloads the file
  await storage
    .bucket(bucketName)
    .file(srcFilename)
    .download(options);

  console.log(
    `gs://${bucketName}/${srcFilename} downloaded to ${destFilename}.`
  );
  // [END storage_download_file]
}

async function deleteFile(bucketName, filename) {
  // [START storage_delete_file]
  // Imports the Google Cloud client library
  const {Storage} = require('@google-cloud/storage');

  // Creates a client
  const storage = new Storage();

  /**
   * TODO(developer): Uncomment the following lines before running the sample.
   */
  // const bucketName = 'Name of a bucket, e.g. my-bucket';
  // const filename = 'File to delete, e.g. file.txt';

  // Deletes the file from the bucket
  await storage
    .bucket(bucketName)
    .file(filename)
    .delete();

  console.log(`gs://${bucketName}/${filename} deleted.`);
  // [END storage_delete_file]
}

async function getMetadata(bucketName, filename) {
  // [START storage_get_metadata]
  // Imports the Google Cloud client library
  const {Storage} = require('@google-cloud/storage');

  // Creates a client
  const storage = new Storage();

  /**
   * TODO(developer): Uncomment the following lines before running the sample.
   */
  // const bucketName = 'Name of a bucket, e.g. my-bucket';
  // const filename = 'File to access, e.g. file.txt';

  // Gets the metadata for the file
  const [metadata] = await storage
    .bucket(bucketName)
    .file(filename)
    .getMetadata();

  console.log(`File: ${metadata.name}`);
  console.log(`Bucket: ${metadata.bucket}`);
  console.log(`Storage class: ${metadata.storageClass}`);
  console.log(`Self link: ${metadata.selfLink}`);
  console.log(`ID: ${metadata.id}`);
  console.log(`Size: ${metadata.size}`);
  console.log(`Updated: ${metadata.updated}`);
  console.log(`Generation: ${metadata.generation}`);
  console.log(`Metageneration: ${metadata.metageneration}`);
  console.log(`Etag: ${metadata.etag}`);
  console.log(`Owner: ${metadata.owner}`);
  console.log(`Component count: ${metadata.component_count}`);
  console.log(`Crc32c: ${metadata.crc32c}`);
  console.log(`md5Hash: ${metadata.md5Hash}`);
  console.log(`Cache-control: ${metadata.cacheControl}`);
  console.log(`Content-type: ${metadata.contentType}`);
  console.log(`Content-disposition: ${metadata.contentDisposition}`);
  console.log(`Content-encoding: ${metadata.contentEncoding}`);
  console.log(`Content-language: ${metadata.contentLanguage}`);
  console.log(`Media link: ${metadata.mediaLink}`);
  console.log(`KMS Key Name: ${metadata.kmsKeyName}`);
  console.log(`Temporary Hold: ${metadata.temporaryHold}`);
  console.log(`Event-based hold: ${metadata.eventBasedHold}`);
  console.log(`Effective Expiration Time: ${metadata.effectiveExpirationTime}`);
  console.log(`Metadata: ${metadata.metadata}`);
  // [END storage_get_metadata]
}

async function makePublic(bucketName, filename) {
  // [START storage_make_public]
  // Imports the Google Cloud client library
  const {Storage} = require('@google-cloud/storage');

  // Creates a client
  const storage = new Storage();

  /**
   * TODO(developer): Uncomment the following lines before running the sample.
   */
  // const bucketName = 'Name of a bucket, e.g. my-bucket';
  // const filename = 'File to make public, e.g. file.txt';

  // Makes the file public
  await storage
    .bucket(bucketName)
    .file(filename)
    .makePublic();

  console.log(`gs://${bucketName}/${filename} is now public.`);
  // [END storage_make_public]
}

async function generateSignedUrl(bucketName, filename) {
  // [START storage_generate_signed_url]
  // Imports the Google Cloud client library
  const {Storage} = require('@google-cloud/storage');

  // Creates a client
  const storage = new Storage();

  /**
   * TODO(developer): Uncomment the following lines before running the sample.
   */
  // const bucketName = 'Name of a bucket, e.g. my-bucket';
  // const filename = 'File to access, e.g. file.txt';

  // These options will allow temporary read access to the file
  const options = {
    action: 'read',
    expires: Date.now() + 1000 * 60 * 60, // one hour
  };

  // Get a signed URL for the file
  const [url] = await storage
    .bucket(bucketName)
    .file(filename)
    .getSignedUrl(options);

  console.log(`The signed url for ${filename} is ${url}.`);
  // [END storage_generate_signed_url]
}

async function moveFile(bucketName, srcFilename, destFilename) {
  // [START storage_move_file]
  // Imports the Google Cloud client library
  const {Storage} = require('@google-cloud/storage');

  // Creates a client
  const storage = new Storage();

  /**
   * TODO(developer): Uncomment the following lines before running the sample.
   */
  // const bucketName = 'Name of a bucket, e.g. my-bucket';
  // const srcFilename = 'File to move, e.g. file.txt';
  // const destFilename = 'Destination for file, e.g. moved.txt';

  // Moves the file within the bucket
  await storage
    .bucket(bucketName)
    .file(srcFilename)
    .move(destFilename);

  console.log(
    `gs://${bucketName}/${srcFilename} moved to gs://${bucketName}/${destFilename}.`
  );
  // [END storage_move_file]
}

async function copyFile(
  srcBucketName,
  srcFilename,
  destBucketName,
  destFilename
) {
  // [START storage_copy_file]
  // Imports the Google Cloud client library
  const {Storage} = require('@google-cloud/storage');

  // Creates a client
  const storage = new Storage();

  /**
   * TODO(developer): Uncomment the following lines before running the sample.
   */
  // const srcBucketName = 'Name of the source bucket, e.g. my-bucket';
  // const srcFilename = 'Name of the source file, e.g. file.txt';
  // const destBucketName = 'Name of the destination bucket, e.g. my-other-bucket';
  // const destFilename = 'Destination name of file, e.g. file.txt';

  // Copies the file to the other bucket
  await storage
    .bucket(srcBucketName)
    .file(srcFilename)
    .copy(storage.bucket(destBucketName).file(destFilename));

  console.log(
    `gs://${srcBucketName}/${srcFilename} copied to gs://${destBucketName}/${destFilename}.`
  );
  // [END storage_copy_file]
}

require(`yargs`)
  .demand(1)
  .command(
    `list <bucketName> [prefix] [delimiter]`,
    `Lists files in a bucket, optionally filtering by a prefix.`,
    {},
    opts => {
      if (opts.prefix) {
        listFilesByPrefix(opts.bucketName, opts.prefix, opts.delimiter);
      } else {
        listFiles(opts.bucketName);
      }
    }
  )
  .command(
    `upload <bucketName> <srcFileName>`,
    `Uploads a local file to a bucket.`,
    {},
    opts => uploadFile(opts.bucketName, opts.srcFileName)
  )
  .command(
    `upload-with-kms-key <bucketName> <srcFileName> <kmsKeyName>`,
    `Uploads a local file to a bucket using a KMS key.`,
    {},
    opts =>
      uploadFileWithKmsKey(opts.bucketName, opts.srcFileName, opts.kmsKeyName)
  )
  .command(
    `download <bucketName> <srcFileName> <destFileName>`,
    `Downloads a file from a bucket.`,
    {},
    opts => downloadFile(opts.bucketName, opts.srcFileName, opts.destFileName)
  )
  .command(
    `delete <bucketName> <fileName>`,
    `Deletes a file from a bucket.`,
    {},
    opts => deleteFile(opts.bucketName, opts.fileName)
  )
  .command(
    `get-metadata <bucketName> <fileName>`,
    `Gets the metadata for a file.`,
    {},
    opts => getMetadata(opts.bucketName, opts.fileName)
  )
  .command(
    `make-public <bucketName> <fileName>`,
    `Makes a file public.`,
    {},
    opts => makePublic(opts.bucketName, opts.fileName)
  )
  .command(
    `generate-signed-url <bucketName> <fileName>`,
    `Generates a signed URL for a file.`,
    {},
    opts => generateSignedUrl(opts.bucketName, opts.fileName)
  )
  .command(
    `move <bucketName> <srcFileName> <destFileName>`,
    `Moves a file to a new location within the same bucket, i.e. rename the file.`,
    {},
    opts => moveFile(opts.bucketName, opts.srcFileName, opts.destFileName)
  )
  .command(
    `copy <srcBucketName> <srcFileName> <destBucketName> <destFileName>`,
    `Copies a file in a bucket to another bucket.`,
    {},
    opts =>
      copyFile(
        opts.srcBucketName,
        opts.srcFileName,
        opts.destBucketName,
        opts.destFileName
      )
  )
  .example(`node $0 list my-bucket`, `Lists files in "my-bucket".`)
  .example(
    `node $0 list my-bucket public/`,
    `Lists files in "my-bucket" filtered by prefix "public/".`
  )
  .example(
    `node $0 upload my-bucket ./file.txt`,
    `Uploads "./file.txt" to "my-bucket".`
  )
  .example(
    `node $0 upload-with-kms-key my-bucket ./file.txt my-key`,
    `Uploads "./file.txt" to "my-bucket" using "my-key".`
  )
  .example(
    `node $0 download my-bucket file.txt ./file.txt`,
    `Downloads "gs://my-bucket/file.txt" to "./file.txt".`
  )
  .example(
    `node $0 delete my-bucket file.txt`,
    `Deletes "gs://my-bucket/file.txt".`
  )
  .example(
    `node $0 get-metadata my-bucket file.txt`,
    `Gets the metadata for "gs://my-bucket/file.txt".`
  )
  .example(
    `node $0 make-public my-bucket file.txt`,
    `Makes "gs://my-bucket/file.txt" public.`
  )
  .example(
    `node $0 move my-bucket file.txt file2.txt`,
    `Renames "gs://my-bucket/file.txt" to "gs://my-bucket/file2.txt".`
  )
  .example(
    `node $0 copy my-bucket file.txt my-other-bucket file.txt`,
    `Copies "gs://my-bucket/file.txt" to "gs://my-other-bucket/file.txt".`
  )
  .wrap(120)
  .recommendCommands()
  .epilogue(`For more information, see https://cloud.google.com/storage/docs`)
  .help()
  .strict().argv;
