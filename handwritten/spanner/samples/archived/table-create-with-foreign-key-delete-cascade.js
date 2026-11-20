// Copyright 2023 Google LLC
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
//  title: Creates a table with foreign key delete cascade action
//  usage: node table-create-with-foreign-key-delete-cascade.js.js <INSTANCE_ID> <DATABASE_ID> <PROJECT_ID>

'use strict';

function main(instanceId, databaseId, projectId) {
  // [START spanner_create_table_with_foreign_key_delete_cascade]

  // Imports the Google Cloud client library
  const {Spanner} = require('@google-cloud/spanner');

  /**
   * TODO(developer): Uncomment the following lines before running the sample.
   */
  // const projectId = 'my-project-id';
  // const instanceId = 'my-instance-id';
  // const databaseId = 'my-database-id';

  // Creates a client
  const spanner = new Spanner({
    projectId: projectId,
  });

  // Gets a reference to a Cloud Spanner instance and a database. The database does not need to exist.
  const instance = spanner.instance(instanceId);
  const database = instance.database(databaseId);

  async function createTableWithForeignKeyDeleteCascade() {
    const [operation] = await database.updateSchema([
      `CREATE TABLE Customers (
            CustomerId INT64,
            CustomerName STRING(62) NOT NULL
            ) PRIMARY KEY (CustomerId)`,
      `CREATE TABLE ShoppingCarts (
            CartId INT64 NOT NULL,
            CustomerId INT64 NOT NULL,
            CustomerName STRING(62) NOT NULL,
            CONSTRAINT FKShoppingCartsCustomerId FOREIGN KEY (CustomerId)
            REFERENCES Customers (CustomerId) ON DELETE CASCADE,    
          ) PRIMARY KEY (CartId)`,
    ]);

    console.log(`Waiting for operation on ${databaseId} to complete...`);
    await operation.promise();

    console.log(
      'Created Customers and ShoppingCarts table with FKShoppingCartsCustomerId',
    );
  }
  createTableWithForeignKeyDeleteCascade();
  // [END spanner_create_table_with_foreign_key_delete_cascade]
}
process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
