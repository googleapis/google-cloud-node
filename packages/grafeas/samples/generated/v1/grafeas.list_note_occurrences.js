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
  // [START containeranalysis_v1_generated_Grafeas_ListNoteOccurrences_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  The name of the note to list occurrences for in the form of
   *  `projects/[PROVIDER_ID]/notes/[NOTE_ID]`.
   */
  // const name = 'abc123'
  /**
   *  The filter expression.
   */
  // const filter = 'abc123'
  /**
   *  Number of occurrences to return in the list.
   */
  // const pageSize = 1234
  /**
   *  Token to provide to skip to a particular spot in the list.
   */
  // const pageToken = 'abc123'

  // Imports the Grafeas library
  const {GrafeasClient} = require('@google-cloud/grafeas').v1;

  // Instantiates a client
  const grafeasClient = new GrafeasClient();

  async function listNoteOccurrences() {
    // Construct request
    const request = {
      name,
    };

    // Run request
    const iterable = await grafeasClient.listNoteOccurrencesAsync(request);
    for await (const response of iterable) {
      console.log(response);
    }
  }

  listNoteOccurrences();
  // [END containeranalysis_v1_generated_Grafeas_ListNoteOccurrences_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
