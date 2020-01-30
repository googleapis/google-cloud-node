// Copyright 2020 Google LLC
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

function main(
  bucketName = 'my-bucket',
  roleName = 'roles/storage.objectViewer',
  members = 'user:test@example.com'
) {
  members = members.split(',');
  // [START storage_remove_bucket_iam_member]
  /**
   * TODO(developer): Uncomment the following lines before running the sample.
   */
  // const bucketName = 'Name of a bucket, e.g. my-bucket';
  // const roleName = 'Role to grant, e.g. roles/storage.objectViewer';
  // const members = [
  //   'user:jdoe@example.com',    // Example members to grant
  //   'group:admins@example.com', // the new role to
  // ];

  // Imports the Google Cloud client library
  const {Storage} = require('@google-cloud/storage');

  // Creates a client
  const storage = new Storage();

  async function removeBucketIamMember() {
    // Get a reference to a Google Cloud Storage bucket
    const bucket = storage.bucket(bucketName);

    // Gets and updates the bucket's IAM policy
    const [policy] = await bucket.iam.getPolicy({requestedPolicyVersion: 3});

    // Finds and updates the appropriate role-member group, without a condition.
    const index = policy.bindings.findIndex(
      binding => binding.role === roleName && !binding.condition
    );

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
  }

  removeBucketIamMember().catch(console.error);
  // [END storage_remove_bucket_iam_member]
}
main(...process.argv.slice(2));
