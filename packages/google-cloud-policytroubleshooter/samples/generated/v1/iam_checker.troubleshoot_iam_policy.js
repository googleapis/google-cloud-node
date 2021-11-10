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
  // [START policytroubleshooter_v1_generated_IamChecker_TroubleshootIamPolicy_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  The information to use for checking whether a member has a permission for a
   *  resource.
   */
  // const accessTuple = {}

  // Imports the Policytroubleshooter library
  const {IamCheckerClient} = require('@google-cloud/policy-troubleshooter').v1;

  // Instantiates a client
  const policytroubleshooterClient = new IamCheckerClient();

  async function callTroubleshootIamPolicy() {
    // Construct request
    const request = {};

    // Run request
    const response = await policytroubleshooterClient.troubleshootIamPolicy(
      request
    );
    console.log(response);
  }

  callTroubleshootIamPolicy();
  // [END policytroubleshooter_v1_generated_IamChecker_TroubleshootIamPolicy_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
