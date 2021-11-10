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
  // [START secretmanager_v1_generated_SecretManagerService_DisableSecretVersion_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The resource name of the SecretVersion google.cloud.secretmanager.v1.SecretVersion  to disable in the format
   *  `projects/* /secrets/* /versions/*`.
   */
  // const name = 'abc123'
  /**
   *  Optional. Etag of the SecretVersion google.cloud.secretmanager.v1.SecretVersion. The request succeeds if it matches
   *  the etag of the currently stored secret version object. If the etag is
   *  omitted, the request succeeds.
   */
  // const etag = 'abc123'

  // Imports the Secretmanager library
  const {SecretManagerServiceClient} =
    require('@google-cloud/secret-manager').v1;

  // Instantiates a client
  const secretmanagerClient = new SecretManagerServiceClient();

  async function callDisableSecretVersion() {
    // Construct request
    const request = {
      name,
    };

    // Run request
    const response = await secretmanagerClient.disableSecretVersion(request);
    console.log(response);
  }

  callDisableSecretVersion();
  // [END secretmanager_v1_generated_SecretManagerService_DisableSecretVersion_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
