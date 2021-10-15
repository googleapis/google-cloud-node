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
  // [START serviceusage_v1beta1_generated_ServiceUsage_CreateAdminOverride_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  The resource name of the parent quota limit, returned by a
   *  ListConsumerQuotaMetrics or GetConsumerQuotaMetric call.
   *  An example name would be:
   *  `projects/123/services/compute.googleapis.com/consumerQuotaMetrics/compute.googleapis.com%2Fcpus/limits/%2Fproject%2Fregion`
   */
  // const parent = 'abc123'
  /**
   *  The admin override to create.
   */
  // const override = ''
  /**
   *  Whether to force the creation of the quota override.
   *  Setting the force parameter to 'true' ignores all quota safety checks that
   *  would fail the request. QuotaSafetyCheck lists all such validations.
   */
  // const force = true
  /**
   *  The list of quota safety checks to ignore before the override mutation.
   *  Unlike 'force' field that ignores all the quota safety checks, the
   *  'force_only' field ignores only the specified checks; other checks are
   *  still enforced. The 'force' and 'force_only' fields cannot both be set.
   */
  // const forceOnly = 1234

  // Imports the Serviceusage library
  const {ServiceUsageClient} = require('@google-cloud/service-usage').v1beta1;

  // Instantiates a client
  const serviceusageClient = new ServiceUsageClient();

  async function createAdminOverride() {
    // Construct request
    const request = {};

    // Run request
    const [operation] = await serviceusageClient.createAdminOverride(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  createAdminOverride();
  // [END serviceusage_v1beta1_generated_ServiceUsage_CreateAdminOverride_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
