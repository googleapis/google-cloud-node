// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//

'use strict';

async function quickstart(
  parent = 'projects/my-project' // Project to list dashboards for.
) {
  // [START monitoring_dashboards_quickstart]
  // Imports the Google Cloud client library
  const {
    DashboardsServiceClient,
  } = require('@google-cloud/monitoring-dashboards');

  // Creates a client
  const ds = new DashboardsServiceClient();

  // parent = 'projects/my-project', // Project to list dashboards for.

  async function listDashboards() {
    const [dashboards] = await ds.listDashboards({
      parent,
    });
    console.info('Listing Dashboards:');
    for (const dashboard of dashboards) {
      console.info(`\t${dashboard.displayName}`);
    }
  }
  listDashboards();
  // [END monitoring_dashboards_quickstart]
}

const args = process.argv.slice(2);
quickstart(...args).catch(console.error);
