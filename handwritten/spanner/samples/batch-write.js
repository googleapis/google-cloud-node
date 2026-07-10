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
//  title: Batch Write
//  usage: node batch-write.js <INSTANCE_ID> <DATABASE_ID> <PROJECT_ID>

'use strict';

async function main(
  instanceId = 'my-instance',
  databaseId = 'my-database',
  projectId = 'my-project-id',
) {
  // [START spanner_batch_write_at_least_once]

  // Imports the Google Cloud client library
  const {Spanner, MutationGroup} = require('@google-cloud/spanner');

  /**
   * TODO(developer): Uncomment the following lines before running the sample.
   */
  // const instanceId = 'my-instance';
  // const databaseId = 'my-database';
  // const projectId = 'my-project-id';

  // Creates a client
  const spanner = new Spanner({
    projectId: projectId,
  });

  // Gets a reference to a Cloud Spanner instance and database
  const instance = spanner.instance(instanceId);
  const database = instance.database(databaseId);

  // Create Mutation Groups
  /**
   * Related mutations should be placed in a group, such as insert mutations for both a parent and a child row.
   * A group must contain related mutations.
   * Please see {@link https://cloud.google.com/spanner/docs/reference/rpc/google.spanner.v1#google.spanner.v1.BatchWriteRequest.MutationGroup}
   * for more details and examples.
   */
  const mutationGroup1 = new MutationGroup();
  mutationGroup1.insert('Singers', {
    SingerId: 1,
    FirstName: 'Scarlet',
    LastName: 'Terry',
  });

  const mutationGroup2 = new MutationGroup();
  mutationGroup2.insert('Singers', {
    SingerId: 2,
    FirstName: 'Marc',
  });
  mutationGroup2.insert('Singers', {
    SingerId: 3,
    FirstName: 'Catalina',
    LastName: 'Smith',
  });
  mutationGroup2.insert('Albums', {
    AlbumId: 1,
    SingerId: 2,
    AlbumTitle: 'Total Junk',
  });
  mutationGroup2.insert('Albums', {
    AlbumId: 2,
    SingerId: 3,
    AlbumTitle: 'Go, Go, Go',
  });

  const options = {
    transactionTag: 'batch-write-tag',
  };

  try {
    database
      .batchWriteAtLeastOnce([mutationGroup1, mutationGroup2], options)
      .on('error', console.error)
      .on('data', response => {
        // Check the response code of each response to determine whether the mutation group(s) were applied successfully.
        if (response.status.code === 0) {
          console.log(
            `Mutation group indexes ${
              response.indexes
            }, have been applied with commit timestamp ${Spanner.timestamp(
              response.commitTimestamp,
            ).toJSON()}`,
          );
        }
        // Mutation groups that fail to commit trigger a response with a non-zero status code.
        else {
          console.log(
            `Mutation group indexes ${response.indexes}, could not be applied with error code ${response.status.code}, and error message ${response.status.message}`,
          );
        }
      })
      .on('end', () => {
        console.log('Request completed successfully');
      });
  } catch (err) {
    console.log(err);
  }
  // [END spanner_batch_write_at_least_once]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});

main(...process.argv.slice(2));
