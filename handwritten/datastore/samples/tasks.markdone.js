// Copyright 2018 Google LLC
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

// sample-metadata:
//   title: Update Task
//   description: Marks task <taskId> as Done.
//   usage: node tasks.markdone.js <taskId>

/*eslint no-warning-comments: [0, { "terms": ["todo"], "location": "anywhere" }]*/
async function main(taskId) {
  taskId = Number(taskId);
  // [START datastore_update_entity]
  const {Datastore} = require('@google-cloud/datastore');
  const datastore = new Datastore();

  async function markDone() {
    // TODO(developer): uncomment the following line and define a taskId
    // const taskId = 'task123';
    const transaction = datastore.transaction();
    const taskKey = datastore.key(['Task', taskId]);
    console.log(taskKey);
    console.log(taskKey.path);
    try {
      await transaction.run();
      const [task] = await transaction.get(taskKey);
      task.done = true;
      transaction.save({
        key: taskKey,
        data: task,
      });
      await transaction.commit();
      console.log(`Task ${taskId} updated successfully.`);
    } catch (err) {
      await transaction.rollback();
      throw err;
    }
  }
  markDone();
  // [END datastore_update_entity]
}

main(...process.argv.slice(2)).catch(console.error);
