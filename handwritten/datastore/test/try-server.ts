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

import {describe, it} from 'mocha';
import {Datastore} from '../src';

import {startServer} from '../mock-server/datastore-server';

describe('Try server', () => {
  it.skip('should try to connect to the running server', done => {
    startServer(async () => {
      const datastore = new Datastore({
        namespace: `${Date.now()}`,
        apiEndpoint: 'localhost:50051',
      });
      const postKey = datastore.key(['Post', 'post1']);
      const query = datastore.createQuery('Post').hasAncestor(postKey);
      const allResults = await datastore.runQuery(query);
      done();
    });
  });
});
