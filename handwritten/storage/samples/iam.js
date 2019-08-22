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

'use strict';

async function viewBucketIamMembers(bucketName) {
  // [START storage_view_bucket_iam_members]
  // Imports the Google Cloud client library
  const {Storage} = require('@google-cloud/storage');

  // Creates a client
  const storage = new Storage();

  /**
   * TODO(developer): Uncomment the following line before running the sample.
   */
  // const bucketName = 'Name of a bucket, e.g. my-bucket';

  // Gets and displays the bucket's IAM policy
  const results = await storage.bucket(bucketName).iam.getPolicy();

  const policy = results[0].bindings;

  // Displays the roles in the bucket's IAM policy
  console.log(`Roles for bucket ${bucketName}:`);
  policy.forEach(role => {
    console.log(`  Role: ${role.role}`);
    console.log(`  Members:`);

    const members = role.members;
    members.forEach(member => {
      console.log(`    ${member}`);
    });
  });
  // [END storage_view_bucket_iam_members]
}

async function addBucketIamMember(bucketName, roleName, members) {
  // [START storage_add_bucket_iam_member]
  // Imports the Google Cloud client library
  const {Storage} = require('@google-cloud/storage');

  /**
   * TODO(developer): Uncomment the following lines before running the sample.
   */
  // const bucketName = 'Name of a bucket, e.g. my-bucket';
  // const roleName = 'Role to grant, e.g. roles/storage.objectViewer';
  // const members = [
  //   'user:jdoe@example.com',    // Example members to grant
  //   'group:admins@example.com', // the new role to
  // ];

  // Creates a client
  const storage = new Storage();

  // Get a reference to a Google Cloud Storage bucket
  const bucket = storage.bucket(bucketName);

  // Gets and updates the bucket's IAM policy
  const [policy] = await bucket.iam.getPolicy();

  // Adds the new roles to the bucket's IAM policy
  policy.bindings.push({
    role: roleName,
    members: members,
  });

  // Updates the bucket's IAM policy
  await bucket.iam.setPolicy(policy);

  console.log(
    `Added the following member(s) with role ${roleName} to ${bucketName}:`
  );

  members.forEach(member => {
    console.log(`  ${member}`);
  });
  // [END storage_add_bucket_iam_member]
}

async function removeBucketIamMember(bucketName, roleName, members) {
  // [START storage_remove_bucket_iam_member]
  // Imports the Google Cloud client library
  const {Storage} = require('@google-cloud/storage');

  /**
   * TODO(developer): Uncomment the following lines before running the sample.
   */
  // const bucketName = 'Name of a bucket, e.g. my-bucket';
  // const roleName = 'Role to grant, e.g. roles/storage.objectViewer';
  // const members = [
  //   'user:jdoe@example.com',    // Example members to grant
  //   'group:admins@example.com', // the new role to
  // ];

  // Creates a client
  const storage = new Storage();

  // Get a reference to a Google Cloud Storage bucket
  const bucket = storage.bucket(bucketName);

  // Gets and updates the bucket's IAM policy
  const [policy] = await bucket.iam.getPolicy();

  // Finds and updates the appropriate role-member group
  const index = policy.bindings.findIndex(role => role.role === roleName);
  const role = policy.bindings[index];
  if (role) {
    role.members = role.members.filter(
      member => members.indexOf(member) === -1
    );

    // Updates the policy object with the new (or empty) role-member group
    if (role.members.length === 0) {
      policy.bindings.splice(index, 1);
    } else {
      policy.bindings.index = role;
    }

    // Updates the bucket's IAM policy
    await bucket.iam.setPolicy(policy);
  } else {
    // No matching role-member group(s) were found
    throw new Error('No matching role-member group(s) found.');
  }

  console.log(
    `Removed the following member(s) with role ${roleName} from ${bucketName}:`
  );
  members.forEach(member => {
    console.log(`  ${member}`);
  });
  // [END storage_remove_bucket_iam_member]
}

require(`yargs`)
  .demand(1)
  .array('members')
  .command(
    `view-members <bucketName>`,
    `Lists IAM member-role groups for a given Google Cloud Storage bucket.`,
    {},
    opts => viewBucketIamMembers(opts.bucketName)
  )
  .command(
    `add-members <bucketName> <roleName> [members..]`,
    `Adds one or more IAM member-role groups to a Google Cloud Storage bucket.`,
    {},
    opts => addBucketIamMember(opts.bucketName, opts.roleName, opts.members)
  )
  .command(
    `remove-members <bucketName> <roleName> [members..]`,
    `Removes one or more IAM member-role groups from a Google Cloud Storage bucket.`,
    {},
    opts => removeBucketIamMember(opts.bucketName, opts.roleName, opts.members)
  )
  .example(`node $0 view-members "my-bucket"`)
  .example(
    `node $0 add-members "my-bucket" "storage.objectViewer" "user:jdoe@example.com" "group:admins@example.com"`
  )
  .example(
    `node $0 remove-members "my-bucket" "storage.objectViewer" "user:jdoe@example.com" "group:admins@example.com"`
  )
  .wrap(120)
  .recommendCommands()
  .epilogue(
    `For more information, see https://cloud.google.com/iam/docs/overview and https://cloud.google.com/storage/docs`
  )
  .strict()
  .help().argv;
