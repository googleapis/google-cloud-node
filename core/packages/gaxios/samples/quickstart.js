// Copyright 2019 Google LLC
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

// [START gaxios_quickstart]
const {request} = require('gaxios');

/**
 * Perform a simple `GET` request to a JSON API.
 */
async function quickstart() {
  const url = 'https://www.googleapis.com/discovery/v1/apis/';
  const res = await request({url});
  console.log(`status: ${res.status}`);
  console.log('data:');
  console.log(res.data);
}
quickstart();
// [END gaxios_quickstart]
