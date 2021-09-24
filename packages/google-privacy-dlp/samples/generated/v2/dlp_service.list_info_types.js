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

function main() {
  // [START dlp_v2_generated_DlpService_ListInfoTypes_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  The parent resource name.
   *  The format of this value is as follows:
   *      locations/<var>LOCATION_ID</var>
   */
  // const parent = 'abc123'
  /**
   *  BCP-47 language code for localized infoType friendly
   *  names. If omitted, or if localized strings are not available,
   *  en-US strings will be returned.
   */
  // const languageCode = 'abc123'
  /**
   *  filter to only return infoTypes supported by certain parts of the
   *  API. Defaults to supported_by=INSPECT.
   */
  // const filter = 'abc123'
  /**
   *  Deprecated. This field has no effect.
   */
  // const locationId = 'abc123'

  // Imports the Dlp library
  const {DlpServiceClient} = require('@google-cloud/dlp').v2;

  // Instantiates a client
  const dlpClient = new DlpServiceClient();

  async function listInfoTypes() {
    // Construct request
    const request = {};

    // Run request
    const response = await dlpClient.listInfoTypes(request);
    console.log(response);
  }

  listInfoTypes();
  // [END dlp_v2_generated_DlpService_ListInfoTypes_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
