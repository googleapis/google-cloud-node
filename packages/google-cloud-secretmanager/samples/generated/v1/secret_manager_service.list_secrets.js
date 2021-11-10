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
  // [START secretmanager_v1_generated_SecretManagerService_ListSecrets_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The resource name of the project associated with the
   *  Secrets google.cloud.secretmanager.v1.Secret, in the format `projects/*`.
   */
  // const parent = 'abc123'
  /**
   *  Optional. The maximum number of results to be returned in a single page. If
   *  set to 0, the server decides the number of results to return. If the
   *  number is greater than 25000, it is capped at 25000.
   */
  // const pageSize = 1234
  /**
   *  Optional. Pagination token, returned earlier via
   *  ListSecretsResponse.next_page_token google.cloud.secretmanager.v1.ListSecretsResponse.next_page_token.
   */
  // const pageToken = 'abc123'
  /**
   *  Optional. Filter string, adhering to the rules in
   *  List-operation
   *  filtering (https://cloud.google.com/secret-manager/docs/filtering). List
   *  only secrets matching the filter. If filter is empty, all secrets are
   *  listed.
   */
  // const filter = 'abc123'

  // Imports the Secretmanager library
  const {SecretManagerServiceClient} =
    require('@google-cloud/secret-manager').v1;

  // Instantiates a client
  const secretmanagerClient = new SecretManagerServiceClient();

  async function callListSecrets() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const iterable = await secretmanagerClient.listSecretsAsync(request);
    for await (const response of iterable) {
      console.log(response);
    }
  }

  callListSecrets();
  // [END secretmanager_v1_generated_SecretManagerService_ListSecrets_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
