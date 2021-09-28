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

function main(dashboard) {
  // [START monitoring_v1_generated_DashboardsService_UpdateDashboard_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The dashboard that will replace the existing dashboard.
   */
  // const dashboard = ''
  /**
   *  If set, validate the request and preview the review, but do not actually
   *  save it.
   */
  // const validateOnly = true

  // Imports the Dashboard library
  const {DashboardsServiceClient} =
    require('@google-cloud/monitoring-dashboards').v1;

  // Instantiates a client
  const dashboardClient = new DashboardsServiceClient();

  async function updateDashboard() {
    // Construct request
    const request = {
      dashboard,
    };

    // Run request
    const response = await dashboardClient.updateDashboard(request);
    console.log(response);
  }

  updateDashboard();
  // [END monitoring_v1_generated_DashboardsService_UpdateDashboard_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
