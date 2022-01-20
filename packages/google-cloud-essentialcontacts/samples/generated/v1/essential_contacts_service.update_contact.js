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

function main(contact) {
  // [START essentialcontacts_v1_generated_EssentialContactsService_UpdateContact_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The contact resource to replace the existing saved contact. Note:
   *  the email address of the contact cannot be modified.
   */
  // const contact = {}
  /**
   *  Optional. The update mask applied to the resource. For the `FieldMask`
   *  definition, see
   *  https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask
   */
  // const updateMask = {}

  // Imports the Essentialcontacts library
  const {EssentialContactsServiceClient} = require('@google-cloud/essential-contacts').v1;

  // Instantiates a client
  const essentialcontactsClient = new EssentialContactsServiceClient();

  async function callUpdateContact() {
    // Construct request
    const request = {
      contact,
    };

    // Run request
    const response = await essentialcontactsClient.updateContact(request);
    console.log(response);
  }

  callUpdateContact();
  // [END essentialcontacts_v1_generated_EssentialContactsService_UpdateContact_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
