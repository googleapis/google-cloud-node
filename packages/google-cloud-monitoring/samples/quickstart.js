/**
 * Copyright 2017, Google, Inc.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

// [START monitoring_quickstart]
// Imports the Google Cloud client library
const Monitoring = require('@google-cloud/monitoring');

// Your Google Cloud Platform project ID
const projectId = 'YOUR_PROJECT_ID';

// Creates a client
const client = Monitoring.v3.metric();

// Prepares an individual data point
const dataPoint = {
  interval: {
    endTime: {
      seconds: Date.now() / 1000
    }
  },
  value: {
    // The amount of sales
    doubleValue: 123.45
  }
};

// Prepares the time series request
const request = {
  name: client.projectPath(projectId),
  timeSeries: [
    {
      // Ties the data point to a custom metric
      metric: {
        type: 'custom.googleapis.com/stores/daily_sales',
        labels: {
          store_id: 'Pittsburgh'
        }
      },
      resource: {
        type: 'global',
        labels: {
          project_id: projectId
        }
      },
      points: [
        dataPoint
      ]
    }
  ]
};

// Writes time series data
client.createTimeSeries(request)
  .then((results) => {
    console.log(`Done writing time series data.`);
  })
  .catch((err) => {
    console.error('ERROR:', err);
  });
// [END monitoring_quickstart]
