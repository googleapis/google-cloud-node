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

/**
 * This application demonstrates how to perform basic operations on bucket and
 * file Access Control Lists with the Google Cloud Storage API.
 *
 * For more information, see the README.md under /storage and the documentation
 * at https://cloud.google.com/storage/docs.
 */

function main(
  bucketName = 'my-bucket',
  roleName = 'roles/storage.objectViewer',
  title = 'match-prefix',
  description = 'Applies to objects matching a prefix',
  expression = 'resource.name.startsWith("projects/_/buckets/bucket-name/objects/prefix-a-")'
) {
  // [START storage_remove_bucket_conditional_iam_binding]
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

  // Create a condition
  // const title = 'Title';
  // const description = 'Description';
  // const expression = 'resource.name.startsWith(\"projects/_/buckets/bucket-name/objects/prefix-a-\")';

  // Imports the Google Cloud client library
  const {Storage} = require('@google-cloud/storage');

  // Creates a client
  const storage = new Storage();

  async function removeBucketConditionalBinding() {
    // Get a reference to a Google Cloud Storage bucket
    const bucket = storage.bucket(bucketName);

    // Gets and updates the bucket's IAM policy
    const [policy] = await bucket.iam.getPolicy({requestedPolicyVersion: 3});

    // Set the policy's version to 3 to use condition in bindings.
    policy.version = 3;

    // Finds and removes the appropriate role-member group with specific condition.
    const index = policy.bindings.findIndex(
      binding =>
        binding.role === roleName &&
        binding.condition &&
        binding.condition.title === title &&
        binding.condition.description === description &&
        binding.condition.expression === expression
    );

    const binding = policy.bindings[index];
    if (binding) {
      policy.bindings.splice(index, 1);

      // Updates the bucket's IAM policy
      await bucket.iam.setPolicy(policy);

      console.log('Conditional Binding was removed.');
    } else {
      // No matching role-member group with specific condition were found
      throw new Error('No matching binding group found.');
    }
  }

  removeBucketConditionalBinding().catch(console.error);
  // [END storage_remove_bucket_conditional_iam_binding]
}
main(...process.argv.slice(2));
