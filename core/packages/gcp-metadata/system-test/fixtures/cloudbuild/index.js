/**
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const gcpMetadata = require('gcp-metadata');

async function main() {
  const isAvailable = await gcpMetadata.isAvailable();
  console.log(`isAvailable: ${isAvailable}`);
  await gcpMetadata.instance('service-accounts/default/token');
  const svc = await gcpMetadata.instance({
    property: 'service-accounts/',
    params: {recursive: 'true'},
  });
  console.log('serviceAccounts:');
  console.log(JSON.stringify(svc).split('\n').join());
}

main().catch(e => {
  console.error(e);
  throw e;
});
