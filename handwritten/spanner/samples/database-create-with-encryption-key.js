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

async function createDatabaseWithEncryptionKey(
  instanceId,
  databaseId,
  projectId,
  keyName,
) {
  // [START spanner_create_database_with_encryption_key]

  // Imports the Google Cloud client library
  const {Spanner, protos} = require('@google-cloud/spanner');

  /**
   * TODO(developer): Uncomment the following lines before running the sample.
   */
  // const projectId = 'my-project-id';
  // const instanceId = 'my-instance';
  // const databaseId = 'my-database';
  // const keyName =
  //   'projects/my-project-id/my-region/keyRings/my-key-ring/cryptoKeys/my-key';

  // creates a client
  const spanner = new Spanner({
    projectId: projectId,
  });

  // Gets a reference to a Cloud Spanner Database Admin Client object
  const databaseAdminClient = spanner.getDatabaseAdminClient();

  // Creates a database
  const [operation] = await databaseAdminClient.createDatabase({
    createStatement: 'CREATE DATABASE `' + databaseId + '`',
    parent: databaseAdminClient.instancePath(projectId, instanceId),
    encryptionConfig:
      (protos.google.spanner.admin.database.v1.EncryptionConfig = {
        kmsKeyName: keyName,
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
    `Database encrypted with key ${metadata.encryptionConfig.kmsKeyName}.`,
  );
  // [END spanner_create_database_with_encryption_key]
}

module.exports.createDatabaseWithEncryptionKey =
  createDatabaseWithEncryptionKey;
