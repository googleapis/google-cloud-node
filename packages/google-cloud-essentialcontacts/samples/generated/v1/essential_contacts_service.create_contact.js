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

function main(parent, contact) {
  // [START essentialcontacts_v1_generated_EssentialContactsService_CreateContact_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The resource to save this contact for.
   *  Format: organizations/{organization_id}, folders/{folder_id} or
   *  projects/{project_id}
   */
  // const parent = 'abc123'
  /**
   *  Required. The contact to create. Must specify an email address and language
   *  tag.
   */
  // const contact = {}

  // Imports the Essentialcontacts library
  const {EssentialContactsServiceClient} = require('@google-cloud/essential-contacts').v1;

  // Instantiates a client
  const essentialcontactsClient = new EssentialContactsServiceClient();

  async function callCreateContact() {
    // Construct request
    const request = {
      parent,
      contact,
    };

    // Run request
    const response = await essentialcontactsClient.createContact(request);
    console.log(response);
  }

  callCreateContact();
  // [END essentialcontacts_v1_generated_EssentialContactsService_CreateContact_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
