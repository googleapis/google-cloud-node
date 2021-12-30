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

function main(name) {
  // [START bigqueryreservation_v1_generated_ReservationService_GetReservation_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. Resource name of the reservation to retrieve. E.g.,
   *     `projects/myproject/locations/US/reservations/team1-prod`
   */
  // const name = 'abc123'

  // Imports the Reservation library
  const {ReservationServiceClient} = require('@google-cloud/bigquery-reservation').v1;

  // Instantiates a client
  const reservationClient = new ReservationServiceClient();

  async function callGetReservation() {
    // Construct request
    const request = {
      name,
    };

    // Run request
    const response = await reservationClient.getReservation(request);
    console.log(response);
  }

  callGetReservation();
  // [END bigqueryreservation_v1_generated_ReservationService_GetReservation_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
