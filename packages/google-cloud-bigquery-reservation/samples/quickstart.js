// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//

'use strict';

async function quickstart(
  project = 'my-project', // Project to list reservations for.
  location = 'US' // BigQuery location.
) {
  // [START bigqueryreservation_quickstart]
  // Imports the Google Cloud client library
  const {
    ReservationServiceClient,
  } = require('@google-cloud/bigquery-reservation');

  // Creates a client
  const client = new ReservationServiceClient();

  // project = 'my-project' // Project to list reservations for.
  // location = 'US' // BigQuery location.

  async function listReservations() {
    const [reservations] = await client.listReservations({
      parent: `projects/${project}/locations/${location}`,
    });

    console.info(`found ${reservations.length} reservations`);
    console.info(reservations);
  }

  async function listCapacityCommitments() {
    const [commitments] = await client.listCapacityCommitments({
      parent: `projects/${project}/locations/${location}`,
    });

    console.info(`found ${commitments.length} commitments`);
    console.info(commitments);
  }

  listReservations();
  listCapacityCommitments();
  // [END bigqueryreservation_quickstart]
}

const args = process.argv.slice(2);
quickstart(...args).catch(err => {
  console.error(err);
  process.exitCode = 1;
});
