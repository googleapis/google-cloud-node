/**
 * Copyright 2018, Google, Inc.
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

// sample-metadata:
//   title: List Tasks
//   description: Lists all tasks ordered by creation time.
//   usage: node tasks.list.js

// [START datastore_retrieve_entities]
const {Datastore} = require('@google-cloud/datastore');

const datastore = new Datastore();

async function listTasks() {
  const query = datastore.createQuery('Task').order('created');
  const [tasks] = await datastore.runQuery(query);
  console.log('Tasks:');
  for (const task of tasks) {
    const taskKey = task[datastore.KEY];
    console.log(taskKey.id, task);
  }
}
listTasks();
// [END datastore_retrieve_entities]
