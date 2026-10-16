/**
 * Copyright 2024 Google LLC
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

// sample-metadata:
//  title: Creates a new instance partition
//  usage: node instance-partition-create.js <INSTANCE_ID> <INSTANCE_PARTITION_ID> <PROJECT_ID>

'use strict';

function main(
  instanceId = 'my-instance',
  instancePartitionId = 'my-instance-partition',
  projectId = 'my-project-id',
) {
  async function createInstancePartition() {
    // [START spanner_create_instance_partition]
    // Imports the Google Cloud client library
    const {Spanner} = require('@google-cloud/spanner');

    /**
     * TODO(developer): Uncomment the following lines before running the sample.
     */
    // const projectId = 'my-project-id';
    // const instanceId = 'my-instance';
    // const instancePartitionId = 'my-instance-partition';

    // Creates a client
    const spanner = new Spanner({
      projectId: projectId,
    });

    // Get the instance admin client
    const instanceAdminClient = spanner.getInstanceAdminClient();

    // Creates a new instance partition
    try {
      console.log(
        `Creating instance partition ${instanceAdminClient.instancePartitionPath(
          projectId,
          instanceId,
          instancePartitionId,
        )}.`,
      );
      const [operation] = await instanceAdminClient.createInstancePartition({
        instancePartitionId: instancePartitionId,
        parent: instanceAdminClient.instancePath(projectId, instanceId),
        instancePartition: {
          config: instanceAdminClient.instanceConfigPath(projectId, 'nam3'),
          nodeCount: 1,
          displayName: 'Test instance partition',
        },
      });

      console.log(
        `Waiting for operation on ${instancePartitionId} to complete...`,
      );
      await operation.promise();

      console.log(`Created instance partition ${instancePartitionId}.`);
    } catch (err) {
      console.error('ERROR:', err);
    }
    // [END spanner_create_instance_partition]
  }
  createInstancePartition();
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
