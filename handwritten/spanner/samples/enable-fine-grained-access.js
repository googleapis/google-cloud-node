// Copyright 2024 Google LLC
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

// sample-metadata:
//  title: Enable fine grained access control
//  usage: node enable-fine-grained-access.js <INSTANCE_ID> <DATABASE_ID> <PROJECT_ID>

'use strict';

function main(
  instanceId = 'my-instance',
  databaseId = 'my-database',
  projectId = 'my-project-id',
  iamMember = 'user:alice@example.com',
  databaseRole = 'parent',
  title = 'condition title',
) {
  // [START spanner_enable_fine_grained_access]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  // const instanceId = 'my-instance';
  // const databaseId = 'my-database';
  // const projectId = 'my-project-id';
  // iamMember = 'user:alice@example.com';
  // databaseRole = 'parent';
  // title = 'condition title';
  // Imports the Google Cloud Spanner client library
  const {Spanner, protos} = require('@google-cloud/spanner');

  // Instantiates a client
  const spanner = new Spanner({
    projectId: projectId,
  });

  async function enableFineGrainedAccess() {
    // Gets a reference to a Cloud Spanner Database Admin Client object
    const databaseAdminClient = spanner.getDatabaseAdminClient();

    const [policy] = await databaseAdminClient.getIamPolicy({
      resource: databaseAdminClient.databasePath(
        projectId,
        instanceId,
        databaseId,
      ),
      options: (protos.google.iam.v1.GetPolicyOptions = {
        requestedPolicyVersion: 3,
      }),
    });
    if (policy.version < 3) {
      policy.version = 3;
    }

    const newBinding = {
      role: 'roles/spanner.fineGrainedAccessUser',
      members: [`user:${iamMember}`],
      condition: {
        title: title,
        expression: `resource.name.endsWith("/databaseRoles/${databaseRole}")`,
      },
    };
    policy.bindings.push(newBinding);
    await databaseAdminClient.setIamPolicy({
      resource: databaseAdminClient.databasePath(
        projectId,
        instanceId,
        databaseId,
      ),
      policy: policy,
    });
    // Requested Policy Version is Optional. The maximum policy version that will be used to format the policy.
    // Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected.
    const newPolicy = await databaseAdminClient.getIamPolicy({
      resource: databaseAdminClient.databasePath(
        projectId,
        instanceId,
        databaseId,
      ),
      options: (protos.google.iam.v1.GetPolicyOptions = {
        requestedPolicyVersion: 3,
      }),
    });
    console.log(newPolicy);
  }
  enableFineGrainedAccess();
  // [END spanner_enable_fine_grained_access]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
