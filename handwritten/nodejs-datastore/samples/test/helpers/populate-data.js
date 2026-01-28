// Copyright 2024 Google LLC
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

/* eslint-disable */

/*
This module is used in various samples to set datastore data to a fixed state
so that the output of the sample is predictable.
 */

const {after, before} = require('mocha');
const {Datastore} = require('@google-cloud/datastore');
let taskKey1, taskKey2;
const datastore = new Datastore();

before(async () => {
  taskKey1 = datastore.key('Task');
  const entity1 = {
    key: taskKey1,
    data: {
      description: 'Buy milk',
    },
  };

  taskKey2 = datastore.key('Task');
  const entity2 = {
    key: taskKey2,
    data: {
      description: 'Feed cats',
    },
  };

  // Ensure the datastore database has no existing data.
  const query = datastore.createQuery('Task');
  const [entities] = await datastore.runQuery(query);
  await datastore.delete(entities.map(entity => entity[datastore.KEY]));

  await datastore.upsert(entity1);
  await datastore.upsert(entity2);
});

after(async () => {
  await datastore.delete(taskKey1);
  await datastore.delete(taskKey2);
});
