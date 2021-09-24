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
  // [START dlp_v2_generated_DlpService_DeidentifyContent_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Parent resource name.
   *  The format of this value varies depending on whether you have [specified a
   *  processing
   *  location](https://cloud.google.com/dlp/docs/specifying-location):
   *  + Projects scope, location specified:<br/>
   *    `projects/`<var>PROJECT_ID</var>`/locations/`<var>LOCATION_ID</var>
   *  + Projects scope, no location specified (defaults to global):<br/>
   *    `projects/`<var>PROJECT_ID</var>
   *  The following example `parent` string specifies a parent project with the
   *  identifier `example-project`, and specifies the `europe-west3` location
   *  for processing data:
   *      parent=projects/example-project/locations/europe-west3
   */
  // const parent = 'abc123'
  /**
   *  Configuration for the de-identification of the content item.
   *  Items specified here will override the template referenced by the
   *  deidentify_template_name argument.
   */
  // const deidentifyConfig = ''
  /**
   *  Configuration for the inspector.
   *  Items specified here will override the template referenced by the
   *  inspect_template_name argument.
   */
  // const inspectConfig = ''
  /**
   *  The item to de-identify. Will be treated as text.
   */
  // const item = ''
  /**
   *  Template to use. Any configuration directly specified in
   *  inspect_config will override those set in the template. Singular fields
   *  that are set in this request will replace their corresponding fields in the
   *  template. Repeated fields are appended. Singular sub-messages and groups
   *  are recursively merged.
   */
  // const inspectTemplateName = 'abc123'
  /**
   *  Template to use. Any configuration directly specified in
   *  deidentify_config will override those set in the template. Singular fields
   *  that are set in this request will replace their corresponding fields in the
   *  template. Repeated fields are appended. Singular sub-messages and groups
   *  are recursively merged.
   */
  // const deidentifyTemplateName = 'abc123'
  /**
   *  Deprecated. This field has no effect.
   */
  // const locationId = 'abc123'

  // Imports the Dlp library
  const {DlpServiceClient} = require('@google-cloud/dlp').v2;

  // Instantiates a client
  const dlpClient = new DlpServiceClient();

  async function deidentifyContent() {
    // Construct request
    const request = {};

    // Run request
    const response = await dlpClient.deidentifyContent(request);
    console.log(response);
  }

  deidentifyContent();
  // [END dlp_v2_generated_DlpService_DeidentifyContent_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
