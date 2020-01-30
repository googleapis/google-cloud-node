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

function main(bucketName = 'my-bucket') {
  // [START storage_view_bucket_iam_members]
  /**
   * TODO(developer): Uncomment the following line before running the sample.
   */
  // const bucketName = 'Name of a bucket, e.g. my-bucket';

  // Imports the Google Cloud client library
  const {Storage} = require('@google-cloud/storage');

  // Creates a client
  const storage = new Storage();

  async function viewBucketIamMembers() {
    // Gets and displays the bucket's IAM policy
    // Gets and displays the bucket's IAM policy
    const results = await storage
      .bucket(bucketName)
      .iam.getPolicy({requestedPolicyVersion: 3});

    const bindings = results[0].bindings;

    // Displays the roles in the bucket's IAM policy
    console.log(`Bindings for bucket ${bucketName}:`);
    for (const binding of bindings) {
      console.log(`  Role: ${binding.role}`);
      console.log(`  Members:`);

      const members = binding.members;
      for (const member of members) {
        console.log(`    ${member}`);
      }

      const condition = binding.condition;
      if (condition) {
        console.log(`  Condiiton:`);
        console.log(`    Title: ${condition.title}`);
        console.log(`    Description: ${condition.description}`);
        console.log(`    Expression: ${condition.expression}`);
      }
    }
  }

  viewBucketIamMembers().catch(console.error);
  // [END storage_view_bucket_iam_members]
}
main(...process.argv.slice(2));
