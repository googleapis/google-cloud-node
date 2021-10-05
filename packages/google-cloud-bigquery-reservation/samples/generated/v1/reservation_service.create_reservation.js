// Copyright 2021 Google LLC
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

function main(parent) {
  // [START bigqueryreservation_v1_generated_ReservationService_CreateReservation_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. Project, location. E.g.,
   *  `projects/myproject/locations/US`
   */
  // const parent = 'abc123'
  /**
   *  The reservation ID. This field must only contain lower case alphanumeric
   *  characters or dash. Max length is 64 characters.
   */
  // const reservationId = 'abc123'
  /**
   *  Definition of the new reservation to create.
   */
  // const reservation = ''

  // Imports the Reservation library
  const {ReservationServiceClient} =
    require('@google-cloud/bigquery-reservation').v1;

  // Instantiates a client
  const reservationClient = new ReservationServiceClient();

  async function createReservation() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const response = await reservationClient.createReservation(request);
    console.log(response);
  }

  createReservation();
  // [END bigqueryreservation_v1_generated_ReservationService_CreateReservation_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
