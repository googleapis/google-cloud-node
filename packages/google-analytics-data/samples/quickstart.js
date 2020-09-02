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

async function main(
  projectId,
  propertyId,
  startDate,
  endDate,
  nameOfDimensions,
  nameOfMetrics
) {
  // [START cloud_data_analytics_quickstart]
  // Imports the Google Cloud client library

  // eslint-disable-next-line node/no-extraneous-require, node/no-missing-require
  const {AlphaAnalyticsDataClient} = require('@google-analytics/data');

  // TODO(developer): replace with your prefered project ID.
  // const projectId = 'my-project'

  // Creates a client
  const client = new AlphaAnalyticsDataClient();

  async function runReport() {
    const res = await client.runReport({
      entity: {
        propertyId: propertyId,
      },
      dateRanges: [
        {
          startDate: startDate,
          endDate: endDate,
        },
      ],
      dimensions: [
        {
          name: nameOfDimensions,
        },
      ],
      metrics: [
        {
          name: nameOfMetrics,
        },
      ],
    });
    console.log(res[0].rows);
    return res[0].rows;
  }

  runReport();
  // [END cloud_data_analytics_quickstart]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
