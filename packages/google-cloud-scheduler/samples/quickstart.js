// Copyright 2018 Google LLC
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

// sample-metadata:
//   title: Quickstart
//   description: POST "Hello World" to a URL every minute.
//   usage: node quickstart.js [project-id] [location-id] [url]

async function main(projectId, locationId, url) {
  // [START scheduler_quickstart]
  // const projectId = "PROJECT_ID"
  // const locationId = "LOCATION_ID" // see: https://cloud.google.com/about/locations/
  // const url = "https://postb.in/..." // where should we say hello?

  const scheduler = require('@google-cloud/scheduler');

  // Create a client.
  const client = new scheduler.CloudSchedulerClient();

  // Construct the fully qualified location path.
  const parent = client.locationPath(projectId, locationId);

  // Construct the request body.
  const job = {
    httpTarget: {
      uri: url,
      httpMethod: 'POST',
      body: Buffer.from('Hello World'),
    },
    schedule: '* * * * *',
    timeZone: 'America/Los_Angeles',
  };

  const request = {
    parent: parent,
    job: job,
  };

  // Use the client to send the job creation request.
  const [response] = await client.createJob(request);
  console.log(`Created job: ${response.name}`);
  // [END scheduler_quickstart]
}

const args = process.argv.slice(2);
main(...args).catch(err => {
  console.error(err.message);
  process.exitCode = 1;
});
