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
  //including this logic so as to not use yargs
  members = members.split(',');
  // [START storage_add_bucket_iam_member]
  /**
   * TODO(developer): Uncomment the following lines before running the sample.
   */
  // The ID of your GCS bucket
  // const bucketName = 'your-unique-bucket-name';

  // The role to grant
  // const roleName = 'roles/storage.objectViewer';

  // The members to grant the new role to
  // const members = [
  //   'user:jdoe@example.com',
  //   'group:admins@example.com',
  // ];

  // Imports the Google Cloud client library
  const {Storage} = require('@google-cloud/storage');

  // Creates a client
  const storage = new Storage();

  async function addBucketIamMember() {
    // Get a reference to a Google Cloud Storage bucket
    const bucket = storage.bucket(bucketName);

    // For more information please read:
    // https://cloud.google.com/storage/docs/access-control/iam
    const [policy] = await bucket.iam.getPolicy({requestedPolicyVersion: 3});

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
  }

  addBucketIamMember().catch(console.error);
  // [END storage_add_bucket_iam_member]
}
main(...process.argv.slice(2));
