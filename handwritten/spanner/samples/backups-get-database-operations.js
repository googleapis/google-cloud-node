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

'use strict';

async function getDatabaseOperations(instanceId, projectId) {
  // [START spanner_list_database_operations]

  // Imports the Google Cloud client library
  const {Spanner, protos} = require('@google-cloud/spanner');

  /**
   * TODO(developer): Uncomment the following lines before running the sample.
   */
  // const projectId = 'my-project-id';
  // const instanceId = 'my-instance';

  // Creates a client
  const spanner = new Spanner({
    projectId: projectId,
  });

  // Gets a reference to a Cloud Spanner Database Admin Client object
  const databaseAdminClient = spanner.getDatabaseAdminClient();

  // List database operations
  try {
    const [databaseOperations] =
      await databaseAdminClient.listDatabaseOperations({
        parent: databaseAdminClient.instancePath(projectId, instanceId),
        filter:
          '(metadata.@type:type.googleapis.com/google.spanner.admin.database.v1.OptimizeRestoredDatabaseMetadata)',
      });
    console.log('Optimize Database Operations:');
    databaseOperations.forEach(databaseOperation => {
      const metadata =
        protos.google.spanner.admin.database.v1.OptimizeRestoredDatabaseMetadata.decode(
          databaseOperation.metadata.value,
        );
      console.log(
        `Database ${metadata.name} restored from backup is ` +
          `${metadata.progress.progressPercent}% optimized.`,
      );
    });
  } catch (err) {
    console.error('ERROR:', err);
  }
  // [END spanner_list_database_operations]
}

module.exports.getDatabaseOperations = getDatabaseOperations;
