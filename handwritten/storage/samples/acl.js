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
 * This application demonstrates how to perform basic operations on bucket and
 * file Access Control Lists with the Google Cloud Storage API.
 *
 * For more information, see the README.md under /storage and the documentation
 * at https://cloud.google.com/storage/docs.
 */

'use strict';

async function printBucketAcl(bucketName) {
  // [START storage_print_bucket_acl]
  // Imports the Google Cloud client library
  const {Storage} = require('@google-cloud/storage');

  // Creates a client
  const storage = new Storage();

  /**
   * TODO(developer): Uncomment the following line before running the sample.
   */
  // const bucketName = 'Name of a bucket, e.g. my-bucket';

  // Gets the ACL for the bucket
  const [acls] = await storage.bucket(bucketName).acl.get();

  acls.forEach(acl => {
    console.log(`${acl.role}: ${acl.entity}`);
  });
  // [END storage_print_bucket_acl]
}

async function printBucketAclForUser(bucketName, userEmail) {
  // [START storage_print_bucket_acl_for_user]
  // Imports the Google Cloud client library
  const {Storage} = require('@google-cloud/storage');

  // Creates a client
  const storage = new Storage();

  /**
   * TODO(developer): Uncomment the following line before running the sample.
   */
  // const bucketName = 'Name of a bucket, e.g. my-bucket';
  // const userEmail = 'Email of user to check, e.g. developer@company.com';

  const options = {
    // Specify the user
    entity: `user-${userEmail}`,
  };

  // Gets the user's ACL for the bucket
  const [aclObject] = await storage.bucket(bucketName).acl.get(options);

  console.log(`${aclObject.role}: ${aclObject.entity}`);
  // [END storage_print_bucket_acl_for_user]
}

async function addBucketOwner(bucketName, userEmail) {
  // [START storage_add_bucket_owner]
  // Imports the Google Cloud client library
  const {Storage} = require('@google-cloud/storage');

  // Creates a client
  const storage = new Storage();

  /**
   * TODO(developer): Uncomment the following line before running the sample.
   */
  // const bucketName = 'Name of a bucket, e.g. my-bucket';
  // const userEmail = 'Email of user to add, e.g. developer@company.com';

  // Makes the user an owner of the bucket. You can use addAllUsers(),
  // addDomain(), addProject(), addGroup(), and addAllAuthenticatedUsers()
  // to grant access to different types of entities. You can also use "readers"
  // and "writers" to grant different roles.
  await storage.bucket(bucketName).acl.owners.addUser(userEmail);

  console.log(`Added user ${userEmail} as an owner on bucket ${bucketName}.`);
  // [END storage_add_bucket_owner]
}

async function removeBucketOwner(bucketName, userEmail) {
  // [START storage_remove_bucket_owner]
  // Imports the Google Cloud client library
  const {Storage} = require('@google-cloud/storage');

  // Creates a client
  const storage = new Storage();

  /**
   * TODO(developer): Uncomment the following line before running the sample.
   */
  // const bucketName = 'Name of a bucket, e.g. my-bucket';
  // const userEmail = 'Email of user to remove, e.g. developer@company.com';

  // Removes the user from the access control list of the bucket. You can use
  // deleteAllUsers(), deleteDomain(), deleteProject(), deleteGroup(), and
  // deleteAllAuthenticatedUsers() to remove access for different types of entities.
  await storage.bucket(bucketName).acl.owners.deleteUser(userEmail);

  console.log(`Removed user ${userEmail} from bucket ${bucketName}.`);
  // [END storage_remove_bucket_owner]
}

async function addBucketDefaultOwner(bucketName, userEmail) {
  // [START storage_add_bucket_default_owner]
  // Imports the Google Cloud client library
  const {Storage} = require('@google-cloud/storage');

  // Creates a client
  const storage = new Storage();

  /**
   * TODO(developer): Uncomment the following line before running the sample.
   */
  // const bucketName = 'Name of a bucket, e.g. my-bucket';
  // const userEmail = 'Email of user to add, e.g. developer@company.com';

  // Makes the user an owner in the default ACL of the bucket. You can use
  // addAllUsers(), addDomain(), addProject(), addGroup(), and
  // addAllAuthenticatedUsers() to grant access to different types of entities.
  // You can also use "readers" and "writers" to grant different roles.
  await storage.bucket(bucketName).acl.default.owners.addUser(userEmail);

  console.log(`Added user ${userEmail} as an owner on bucket ${bucketName}.`);
  // [END storage_add_bucket_default_owner]
}

async function removeBucketDefaultOwner(bucketName, userEmail) {
  // [START storage_remove_bucket_default_owner]
  // Imports the Google Cloud client library
  const {Storage} = require('@google-cloud/storage');

  // Creates a client
  const storage = new Storage();

  /**
   * TODO(developer): Uncomment the following line before running the sample.
   */
  // const bucketName = 'Name of a bucket, e.g. my-bucket';
  // const userEmail = 'Email of user to remove, e.g. developer@company.com';

  // Removes the user from the access control list of the bucket. You can use
  // deleteAllUsers(), deleteDomain(), deleteProject(), deleteGroup(), and
  // deleteAllAuthenticatedUsers() to remove access for different types of entities.
  await storage.bucket(bucketName).acl.default.owners.deleteUser(userEmail);

  console.log(`Removed user ${userEmail} from bucket ${bucketName}.`);
  // [END storage_remove_bucket_default_owner]
}

async function printFileAcl(bucketName, filename) {
  // [START storage_print_file_acl]
  // Imports the Google Cloud client library
  const {Storage} = require('@google-cloud/storage');

  // Creates a client
  const storage = new Storage();

  /**
   * TODO(developer): Uncomment the following line before running the sample.
   */
  // const bucketName = 'Name of a bucket, e.g. my-bucket';
  // const filename = 'File to access, e.g. file.txt';

  // Gets the ACL for the file
  const [acls] = await storage
    .bucket(bucketName)
    .file(filename)
    .acl.get();

  acls.forEach(acl => {
    console.log(`${acl.role}: ${acl.entity}`);
  });
  // [END storage_print_file_acl]
}

async function printFileAclForUser(bucketName, filename, userEmail) {
  // [START storage_print_file_acl_for_user]
  // Imports the Google Cloud client library
  const {Storage} = require('@google-cloud/storage');

  // Creates a client
  const storage = new Storage();

  /**
   * TODO(developer): Uncomment the following line before running the sample.
   */
  // const bucketName = 'Name of a bucket, e.g. my-bucket';
  // const filename = 'File to access, e.g. file.txt';
  // const userEmail = 'Email of user to check, e.g. developer@company.com';

  const options = {
    // Specify the user
    entity: `user-${userEmail}`,
  };

  // Gets the user's ACL for the file
  const [aclObject] = await storage
    .bucket(bucketName)
    .file(filename)
    .acl.get(options);

  console.log(`${aclObject.role}: ${aclObject.entity}`);
  // [END storage_print_file_acl_for_user]
}

async function addFileOwner(bucketName, filename, userEmail) {
  // [START storage_add_file_owner]
  // Imports the Google Cloud client library
  const {Storage} = require('@google-cloud/storage');

  // Creates a client
  const storage = new Storage();

  /**
   * TODO(developer): Uncomment the following line before running the sample.
   */
  // const bucketName = 'Name of a bucket, e.g. my-bucket';
  // const filename = 'Name of file to access, e.g. file.txt';
  // const userEmail = 'Email of user to add, e.g. developer@company.com';

  // Makes the user an owner of the file. You can use addAllUsers(),
  // addDomain(), addProject(), addGroup(), and addAllAuthenticatedUsers()
  // to grant access to different types of entities. You can also use "readers"
  // and "writers" to grant different roles.
  await storage
    .bucket(bucketName)
    .file(filename)
    .acl.owners.addUser(userEmail);

  console.log(`Added user ${userEmail} as an owner on file ${filename}.`);
  // [END storage_add_file_owner]
}

// [START storage_remove_file_owner]
async function removeFileOwner(bucketName, filename, userEmail) {
  // Imports the Google Cloud client library
  const {Storage} = require('@google-cloud/storage');

  // Creates a client
  const storage = new Storage();

  /**
   * TODO(developer): Uncomment the following line before running the sample.
   */
  // const bucketName = 'Name of a bucket, e.g. my-bucket';
  // const filename = 'Name of file to access, e.g. file.txt';
  // const userEmail = 'Email of user to remove, e.g. developer@company.com';

  // Removes the user from the access control list of the file. You can use
  // deleteAllUsers(), deleteDomain(), deleteProject(), deleteGroup(), and
  // deleteAllAuthenticatedUsers() to remove access for different types of entities.
  await storage
    .bucket(bucketName)
    .file(filename)
    .acl.owners.deleteUser(userEmail);

  console.log(`Removed user ${userEmail} from file ${filename}.`);
  // [END storage_remove_file_owner]
}

require(`yargs`)
  .demand(1)
  .command(
    `print-bucket-acl <bucketName>`,
    `Prints the ACL for a bucket.`,
    {},
    opts => printBucketAcl(opts.bucketName)
  )
  .command(
    `print-bucket-acl-for-user <bucketName> <userEmail>`,
    `Prints a user's ACL for a bucket.`,
    {},
    opts => printBucketAclForUser(opts.bucketName, opts.userEmail)
  )
  .command(
    `add-bucket-owner <bucketName> <userEmail>`,
    `Adds a user as an owner of a bucket.`,
    {},
    opts => addBucketOwner(opts.bucketName, opts.userEmail)
  )
  .command(
    `remove-bucket-owner <bucketName> <userEmail>`,
    `Removes a user from the ACL of a bucket.`,
    {},
    opts => removeBucketOwner(opts.bucketName, opts.userEmail)
  )
  .command(
    `add-bucket-default-owner <bucketName> <userEmail>`,
    `Adds a user as an owner in the default ACL of a bucket.`,
    {},
    opts => addBucketDefaultOwner(opts.bucketName, opts.userEmail)
  )
  .command(
    `remove-bucket-default-owner <bucketName> <userEmail>`,
    `Removes a user from the default ACL of a bucket.`,
    {},
    opts => removeBucketDefaultOwner(opts.bucketName, opts.userEmail)
  )
  .command(
    `print-file-acl <bucketName> <fileName>`,
    `Prints the ACL for a file.`,
    {},
    opts => printFileAcl(opts.bucketName, opts.fileName)
  )
  .command(
    `print-file-acl-for-user <bucketName> <fileName> <userEmail>`,
    `Prints a user's ACL for a file.`,
    {},
    opts => printFileAclForUser(opts.bucketName, opts.fileName, opts.userEmail)
  )
  .command(
    `add-file-owner <bucketName> <fileName> <userEmail>`,
    `Adds a user as an owner of a file.`,
    {},
    opts => addFileOwner(opts.bucketName, opts.fileName, opts.userEmail)
  )
  .command(
    `remove-file-owner <bucketName> <fileName> <userEmail>`,
    `Removes a user from the ACL of a file.`,
    {},
    opts => removeFileOwner(opts.bucketName, opts.fileName, opts.userEmail)
  )
  .example(`node $0 print-bucket-acl my-bucket`)
  .example(`node $0 print-bucket-acl-for-user my-bucket bob@company.com`)
  .example(`node $0 add-bucket-owner my-bucket bob@company.com`)
  .example(`node $0 remove-bucket-owner my-bucket bob@company.com`)
  .example(`node $0 add-bucket-default-owner my-bucket bob@company.com`)
  .example(`node $0 remove-bucket-default-owner my-bucket bob@company.com`)
  .example(`node $0 print-file-acl my-bucket file.txt`)
  .example(`node $0 print-file-acl-for-user my-bucket file.txt bob@company.com`)
  .example(`node $0 add-file-owner my-bucket file.txt bob@company.com`)
  .example(`node $0 remove-file-owner my-bucket file.txt bob@company.com`)
  .wrap(120)
  .recommendCommands()
  .epilogue(
    `For more information, see https://cloud.google.com/storage/docs/access-control/create-manage-lists`
  )
  .help()
  .strict().argv;
