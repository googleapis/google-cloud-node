/*!
 * Copyright 2018 Google LCC. All Rights Reserved.
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

'use strict';

// [START protofiles_quickstart]
const protos = require('google-proto-files');

async function quickstart() {
  // Get a directory path by executing as a function
  const files = protos.getProtoPath('logging', 'v2');
  console.log(files);
  // node_modules/google-proto-files/google/logging/v2

  // Get a path to the entry proto file for a specific API version
  console.log(protos.pubsub.v1);
  // node_modules/google-proto-files/google/pubsub/v1/pubsub.proto

  // Load a proto which depends on google common protos.
  const root1 = await protos.load('./cloudcats.proto');
  const service1 = root1.lookup('example.MyService');
  console.log(service1);

  // Load protos synchronously
  const root2 = protos.loadSync('./cloudcats.proto');
  const service2 = root2.lookup('example.MyService');
  console.log(service2);
}
quickstart();
// [END protofiles_quickstart]
