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

// [START datastore_build_service]
// By default, the client will authenticate using the service account file
// specified by the GOOGLE_APPLICATION_CREDENTIALS environment variable and use
// the project specified by the GCLOUD_PROJECT environment variable. See
// https://googlecloudplatform.github.io/google-cloud-node/#/docs/datastore/latest/guides/authentication
const {Datastore} = require('@google-cloud/datastore');

// Creates a client
const datastore = new Datastore();
// [END datastore_build_service]

/*
Installation and setup instructions.
1. Download the TaskList sample application from [here]
(https://github.com/GoogleCloudPlatform/nodejs-docs-samples/archive/master.zip).

2. Unzip the download:
```sh
unzip nodejs-docs-samples-master.zip
```

3. Change directories to the TaskList application:
```sh
cd nodejs-docs-samples-master/datastore
```

4. Install the dependencies and link the application:
```sh
npm install
```

5. With the gcloud SDK, be sure you are authenticated:
```sh
gcloud beta auth application-default login
```

6. At a command prompt, run the following, where `<project-id>` is the ID of
your Google Cloud Platform project.
```sh
export GCLOUD_PROJECT=<project-id>
```

7. Run the application!
```sh
node tasks <command>
```
*/

// [START datastore_add_entity]
async function addTask(description) {
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

  try {
    await datastore.save(entity);
    console.log(`Task ${taskKey.id} created successfully.`);
  } catch (err) {
    console.error('ERROR:', err);
  }
}
// [END datastore_add_entity]

// [START datastore_update_entity]
async function markDone(taskId) {
  const transaction = datastore.transaction();
  const taskKey = datastore.key(['Task', taskId]);

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
    transaction.rollback();
  }
}
// [END datastore_update_entity]

// [START datastore_retrieve_entities]
async function listTasks() {
  const query = datastore.createQuery('Task').order('created');

  const [tasks] = await datastore.runQuery(query);
  console.log('Tasks:');
  tasks.forEach(task => {
    const taskKey = task[datastore.KEY];
    console.log(taskKey.id, task);
  });
}
// [END datastore_retrieve_entities]

// [START datastore_delete_entity]
async function deleteTask(taskId) {
  const taskKey = datastore.key(['Task', taskId]);

  await datastore.delete(taskKey);
  console.log(`Task ${taskId} deleted successfully.`);
}
// [END datastore_delete_entity]

require(`yargs`) // eslint-disable-line
  .command(
    `new <description>`,
    `Adds a task with a description <description>.`,
    {},
    opts => addTask(opts.description)
  )
  .command(`done <taskId>`, `Marks the specified task as done.`, {}, opts =>
    markDone(opts.taskId)
  )
  .command(`list`, `Lists all tasks ordered by creation time.`, {}, listTasks)
  .command(`delete <taskId>`, `Deletes a task.`, {}, opts =>
    deleteTask(opts.taskId)
  )
  .example(`node $0 new "Buy milk"`, `Adds a task with description "Buy milk".`)
  .example(`node $0 done 12345`, `Marks task 12345 as Done.`)
  .example(`node $0 list`, `Lists all tasks ordered by creation time`)
  .example(`node $0 delete 12345`, `Deletes task 12345.`)
  .wrap(120)
  .epilogue(`For more information, see https://cloud.google.com/datastore/docs`)
  .help().argv;
