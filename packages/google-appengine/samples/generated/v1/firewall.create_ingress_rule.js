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
  // [START appengine_v1_generated_Firewall_CreateIngressRule_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Name of the parent Firewall collection in which to create a new rule.
   *  Example: `apps/myapp/firewall/ingressRules`.
   */
  // const parent = 'abc123'
  /**
   *  A FirewallRule containing the new resource.
   *  The user may optionally provide a position at which the new rule will be
   *  placed. The positions define a sequential list starting at 1. If a rule
   *  already exists at the given position, rules greater than the provided
   *  position will be moved forward by one.
   *  If no position is provided, the server will place the rule as the second to
   *  last rule in the sequence before the required default allow-all or deny-all
   *  rule.
   */
  // const rule = {}

  // Imports the Appengine library
  const {FirewallClient} = require('@google-cloud/appengine-admin').v1;

  // Instantiates a client
  const appengineClient = new FirewallClient();

  async function callCreateIngressRule() {
    // Construct request
    const request = {
    };

    // Run request
    const response = await appengineClient.createIngressRule(request);
    console.log(response);
  }

  callCreateIngressRule();
  // [END appengine_v1_generated_Firewall_CreateIngressRule_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
