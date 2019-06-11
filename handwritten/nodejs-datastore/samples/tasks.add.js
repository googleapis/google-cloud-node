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
//   title: Add Task
//   description: Adds a task with a description <description>.
//   usage: node tasks.add.js <description>

async function main(description) {
  // [START datastore_add_entity]
  const {Datastore} = require('@google-cloud/datastore');
  const datastore = new Datastore();

  async function addTask() {
    // TODO(developer): uncomment the following line, and add a description
    // const description = 'description';
    const taskKey = datastore.key('Task');
    const entity = {
      key: taskKey,
      data: [
        {
          name: 'created',
          value: new Date().toJSON(),
        },
        {
          name: 'description',
          value: description,
          excludeFromIndexes: true,
        },
        {
          name: 'done',
          value: false,
        },
      ],
    };
    await datastore.save(entity);
    console.log(`Task ${taskKey.id} created successfully.`);
  }
  addTask();
  // [END datastore_add_entity]
}
main(...process.argv.slice(2)).catch(console.error);
