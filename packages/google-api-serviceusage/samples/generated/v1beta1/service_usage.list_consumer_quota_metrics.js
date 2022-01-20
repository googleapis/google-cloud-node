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
  // [START serviceusage_v1beta1_generated_ServiceUsage_ListConsumerQuotaMetrics_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Parent of the quotas resource.
   *  Some example names would be:
   *  `projects/123/services/serviceconsumermanagement.googleapis.com`
   *  `folders/345/services/serviceconsumermanagement.googleapis.com`
   *  `organizations/456/services/serviceconsumermanagement.googleapis.com`
   */
  // const parent = 'abc123'
  /**
   *  Requested size of the next page of data.
   */
  // const pageSize = 1234
  /**
   *  Token identifying which result to start with; returned by a previous list
   *  call.
   */
  // const pageToken = 'abc123'
  /**
   *  Specifies the level of detail for quota information in the response.
   */
  // const view = {}

  // Imports the Serviceusage library
  const {ServiceUsageClient} = require('@google-cloud/service-usage').v1beta1;

  // Instantiates a client
  const serviceusageClient = new ServiceUsageClient();

  async function callListConsumerQuotaMetrics() {
    // Construct request
    const request = {
    };

    // Run request
    const iterable = await serviceusageClient.listConsumerQuotaMetricsAsync(request);
    for await (const response of iterable) {
        console.log(response);
    }
  }

  callListConsumerQuotaMetrics();
  // [END serviceusage_v1beta1_generated_ServiceUsage_ListConsumerQuotaMetrics_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
