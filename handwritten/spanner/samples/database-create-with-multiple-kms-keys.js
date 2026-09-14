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

'use strict';

function main(
  instanceId = 'my-instance',
  databaseId = 'my-database',
  projectId = 'my-project',
  kmsKeyNames = 'key1,key2,key3',
) {
  // [START spanner_create_database_with_MR_CMEK]
  /**
   * TODO(developer): Uncomment the following lines before running the sample.
   */
  // const projectId = 'my-project-id';
  // const instanceId = 'my-instance';
  // const databaseId = 'my-database';
  // const kmsKeyNames =
  //   'projects/my-project-id/my-region/keyRings/my-key-ring/cryptoKeys/my-key1,projects/my-project-id/my-region/keyRings/my-key-ring/cryptoKeys/my-key2';

  // Imports the Google Cloud client library
  const {Spanner, protos} = require('@google-cloud/spanner');

  // creates a client
  const spanner = new Spanner({
    projectId: projectId,
  });

  // Gets a reference to a Cloud Spanner Database Admin Client object
  const databaseAdminClient = spanner.getDatabaseAdminClient();

  async function createDatabaseWithMultipleKmsKeys() {
    // Creates a database
    const [operation] = await databaseAdminClient.createDatabase({
      createStatement: 'CREATE DATABASE `' + databaseId + '`',
      parent: databaseAdminClient.instancePath(projectId, instanceId),
      encryptionConfig:
        (protos.google.spanner.admin.database.v1.EncryptionConfig = {
          kmsKeyNames: kmsKeyNames.split(','),
        }),
    });

    console.log(`Waiting for operation on ${databaseId} to complete...`);
    await operation.promise();

    console.log(`Created database ${databaseId} on instance ${instanceId}.`);

    // Get encryption key
    const [metadata] = await databaseAdminClient.getDatabase({
      name: databaseAdminClient.databasePath(projectId, instanceId, databaseId),
    });

    console.log(
      `Database encrypted with keys ${metadata.encryptionConfig.kmsKeyNames}.`,
    );
  }
  createDatabaseWithMultipleKmsKeys();
  // [END spanner_create_database_with_MR_CMEK]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
