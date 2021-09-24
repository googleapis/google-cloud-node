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
  // [START oslogin_v1beta_generated_OsLoginService_DeletePosixAccount_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. A reference to the POSIX account to update. POSIX accounts are identified
   *  by the project ID they are associated with. A reference to the POSIX
   *  account is in format `users/{user}/projects/{project}`.
   */
  // const name = 'abc123'

  // Imports the Oslogin library
  const {OsLoginServiceClient} = require('@google-cloud/os-login').v1beta;

  // Instantiates a client
  const osloginClient = new OsLoginServiceClient();

  async function deletePosixAccount() {
    // Construct request
    const request = {
      name,
    };

    // Run request
    const response = await osloginClient.deletePosixAccount(request);
    console.log(response);
  }

  deletePosixAccount();
  // [END oslogin_v1beta_generated_OsLoginService_DeletePosixAccount_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
