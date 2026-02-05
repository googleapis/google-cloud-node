// Copyright 2020 Google LLC
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
  // [START bigquery_set_user_agent]
  // Import the Google Cloud client library
  const {BigQuery} = require('@google-cloud/bigquery');
  // Create a client and set the user agent
  const bigquery = new BigQuery({userAgent: 'my-user-agent'});

  console.log('User agent:');
  console.log(bigquery.providedUserAgent);
  // [END bigquery_set_user_agent]
}
main(...process.argv.slice(2));
