/**
 * Copyright 2021 Google LLC
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
//  title: Executes a read/write transaction with transaction and request tags
//  usage: node transaction-tag.js <INSTANCE_ID> <DATABASE_ID> <PROJECT_ID>

'use strict';

function main(instanceId, databaseId, projectId) {
  // [START spanner_set_transaction_tag]
  /**
   * TODO(developer): Uncomment the following lines before running the sample.
   */
  // const projectId = 'my-project-id';
  // const instanceId = 'my-instance';
  // const databaseId = 'my-database';

  // Imports the Google Cloud client library
  const {Spanner} = require('@google-cloud/spanner');

  // Creates a client
  const spanner = new Spanner({
    projectId: projectId,
  });

  async function transactionTag() {
    // Gets a reference to a Cloud Spanner instance and database.
    const instance = spanner.instance(instanceId);
    const database = instance.database(databaseId);

    // Run a transaction with a transaction tag that will automatically be
    // included with each request in the transaction.
    try {
      await database.runTransactionAsync(
        {requestOptions: {transactionTag: 'app=cart,env=dev'}},
        async tx => {
          // Set the request tag to "app=concert,env=dev,action=update".
          // This request tag will only be set on this request.
          await tx.runUpdate({
            sql: 'UPDATE Venues SET Capacity = DIV(Capacity, 4) WHERE OutdoorVenue = false',
            requestOptions: {requestTag: 'app=concert,env=dev,action=update'},
          });
          console.log('Updated capacity of all indoor venues to 1/4.');

          await tx.runUpdate({
            sql: `INSERT INTO Venues (VenueId, VenueName, Capacity, OutdoorVenue, LastUpdateTime)
                  VALUES (@venueId, @venueName, @capacity, @outdoorVenue, PENDING_COMMIT_TIMESTAMP())`,
            params: {
              venueId: 81,
              venueName: 'Venue 81',
              capacity: 1440,
              outdoorVenue: true,
            },
            types: {
              venueId: {type: 'int64'},
              venueName: {type: 'string'},
              capacity: {type: 'int64'},
              outdoorVenue: {type: 'bool'},
            },
            requestOptions: {requestTag: 'app=concert,env=dev,action=update'},
          });
          console.log('Inserted new outdoor venue');

          await tx.commit();
        },
      );
    } catch (err) {
      console.error('ERROR:', err);
    } finally {
      await database.close();
    }
  }
  transactionTag();
  // [END spanner_set_transaction_tag]
}
process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
