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
  // [START servicecontrol_v1_generated_ServiceController_Report_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  The service name as specified in its service configuration. For example,
   *  `"pubsub.googleapis.com"`.
   *  See
   *  google.api.Service (https://cloud.google.com/service-management/reference/rpc/google.api#google.api.Service)
   *  for the definition of a service name.
   */
  // const serviceName = 'abc123'
  /**
   *  Operations to be reported.
   *  Typically the service should report one operation per request.
   *  Putting multiple operations into a single request is allowed, but should
   *  be used only when multiple operations are natually available at the time
   *  of the report.
   *  There is no limit on the number of operations in the same ReportRequest,
   *  however the ReportRequest size should be no larger than 1MB. See
   *  ReportResponse.report_errors google.api.servicecontrol.v1.ReportResponse.report_errors
   *  for partial failure behavior.
   */
  // const operations = 1234
  /**
   *  Specifies which version of service config should be used to process the
   *  request.
   *  If unspecified or no matching version can be found, the
   *  latest one will be used.
   */
  // const serviceConfigId = 'abc123'

  // Imports the Servicecontrol library
  const {ServiceControllerClient} = require('@google-cloud/service-control').v1;

  // Instantiates a client
  const servicecontrolClient = new ServiceControllerClient();

  async function callReport() {
    // Construct request
    const request = {};

    // Run request
    const response = await servicecontrolClient.report(request);
    console.log(response);
  }

  callReport();
  // [END servicecontrol_v1_generated_ServiceController_Report_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
