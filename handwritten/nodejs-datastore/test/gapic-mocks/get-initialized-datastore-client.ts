// Copyright 2024 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import {Datastore} from '../../src';

/**
 * This function gets a datastore client that has already been initialized
 * meaning that its gapic data client has been created and is ready to be mocked
 * out with whatever behavior is needed in a test. Mocking out the gapic client
 * is common for testing handwritten layer behaviour because it is a way to
 * evaluate data that reaches the handwritten layer thereby testing the
 * handwritten layer in isolation.
 */
export function getInitializedDatastoreClient(): Datastore {
  const clientName = 'DatastoreClient';
  const PROJECT_ID = 'project-id';
  const NAMESPACE = 'namespace';
  const options = {
    projectId: PROJECT_ID,
    namespace: NAMESPACE,
  };
  const datastore = new Datastore(options);
  // By default, datastore.clients_ is an empty map.
  // To mock out commit we need the map to contain the Gapic data client.
  // Normally a call to the data client through the datastore object would initialize it.
  // We don't want to make this call because it would make a grpc request.
  // So we just add the data client to the map.
  const gapic = Object.freeze({
    v1: require('../../src/v1'),
  });
  datastore.clients_.set(clientName, new gapic.v1[clientName](options));
  return datastore;
}
