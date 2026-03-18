// Copyright 2018 Google LLC
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

const {auth, Compute} = require('google-auth-library');

/**
 * This example directly instantiates a Compute client to acquire credentials.
 * Generally, you wouldn't directly create this class, rather call the
 * `auth.getClient()` method to automatically obtain credentials.
 */
async function main() {
  const client = new Compute({
    // Specifying the serviceAccountEmail is optional. It will use the default
    // service account if one is not defined.
    serviceAccountEmail: 'some-service-account@example.com',
  });
  const projectId = await auth.getProjectId();
  const url = `https://dns.googleapis.com/dns/v1/projects/${projectId}`;
  const res = await client.fetch(url);
  console.log(res.data);
}

main().catch(console.error);
