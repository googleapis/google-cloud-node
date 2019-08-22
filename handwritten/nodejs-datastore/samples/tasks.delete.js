/**
 * Copyright 2018 Google LLC.
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

// sample-metadata:
//   title: Delete Task
//   description: Deletes task <taskId>.
//   usage: node tasks.delete.js <taskId>

async function main(taskId) {
  taskId = Number(taskId);
  // [START datastore_delete_entity]
  const {Datastore} = require('@google-cloud/datastore');

  const datastore = new Datastore();

  async function deleteTask() {
    // TODO(developer): uncomment the following line and define a taskId
    // const taskId = 'task123';
    const taskKey = datastore.key(['Task', taskId]);
    console.log(taskKey);
    await datastore.delete(taskKey);
    console.log(`Task ${taskId} deleted successfully.`);
  }
  deleteTask();
  // [END datastore_delete_entity]
}

main(...process.argv.slice(2)).catch(console.error);
