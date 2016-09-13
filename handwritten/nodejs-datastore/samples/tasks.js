// Copyright 2015-2016, Google, Inc.
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

// [START build_service]
// By default, the client will authenticate using the service account file
// specified by the GOOGLE_APPLICATION_CREDENTIALS environment variable and use
// the project specified by the GCLOUD_PROJECT environment variable. See
// https://googlecloudplatform.github.io/gcloud-node/#/docs/google-cloud/latest/guides/authentication
var Datastore = require('@google-cloud/datastore');

// Instantiate a datastore client
var datastore = Datastore();
// [END build_service]

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
gcloud auth login
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

// [START add_entity]
function addTask (description, callback) {
  var taskKey = datastore.key('Task');

  datastore.save({
    key: taskKey,
    data: [
      {
        name: 'created',
        value: new Date().toJSON()
      },
      {
        name: 'description',
        value: description,
        excludeFromIndexes: true
      },
      {
        name: 'done',
        value: false
      }
    ]
  }, function (err) {
    if (err) {
      return callback(err);
    }

    var taskId = taskKey.path.pop();
    console.log('Task %d created successfully.', taskId);
    return callback(null, taskKey);
  });
}
// [END add_entity]

// [START update_entity]
function markDone (taskId, callback) {
  var transaction = datastore.transaction();

  transaction.run(function (err) {
    if (err) {
      return callback(err);
    }

    var taskKey = datastore.key([
      'Task',
      taskId
    ]);

    transaction.get(taskKey, function (err, task) {
      if (err) {
        // An error occurred while getting the task
        return transaction.rollback(function (_err) {
          return callback(err || _err);
        });
      }

      task.data.done = true;

      transaction.save(task);

      // Commit the transaction
      transaction.commit(function (err) {
        if (err) {
          return callback(err);
        }

        // The transaction completed successfully.
        console.log('Task %d updated successfully.', taskId);
        return callback(null);
      });
    });
  });
}
// [END update_entity]

// [START retrieve_entities]
function listTasks (callback) {
  var query = datastore.createQuery('Task')
    .order('created');

  datastore.runQuery(query, function (err, tasks) {
    if (err) {
      return callback(err);
    }

    console.log('Found %d task(s)!', tasks.length);
    return callback(null, tasks);
  });
}
// [END retrieve_entities]

// [START delete_entity]
function deleteTask (taskId, callback) {
  var taskKey = datastore.key([
    'Task',
    taskId
  ]);

  datastore.delete(taskKey, function (err) {
    if (err) {
      return callback(err);
    }

    console.log('Task %d deleted successfully.', taskId);
    return callback(null);
  });
}
// [END delete_entity]

var cli = require('yargs');
var makeHandler = require('../utils').makeHandler;

var program = module.exports = {
  addEntity: addTask,
  updateEntity: markDone,
  retrieveEntities: listTasks,
  deleteEntity: deleteTask,
  main: function (args) {
    // Run the command-line program
    cli.help().strict().parse(args).argv;
  }
};

cli
  .demand(1)
  .command('new <description>', 'Adds a task with a description <description>.', {}, function (options) {
    addTask(options.description, makeHandler());
  })
  .command('done <taskId>', 'Marks the specified task as done.', {}, function (options) {
    markDone(options.taskId, makeHandler());
  })
  .command('list', 'Lists all tasks ordered by creation time.', {}, function (options) {
    listTasks(makeHandler());
  })
  .command('delete <taskId>', 'Deletes a task.', {}, function (options) {
    deleteTask(options.taskId, makeHandler());
  })
  .example('node $0 new "Buy milk"', 'Adds a task with description "Buy milk".')
  .example('node $0 done 12345', 'Marks task 12345 as Done.')
  .example('node $0 list', 'Lists all tasks ordered by creation time')
  .example('node $0 delete 12345', 'Deletes task 12345.')
  .wrap(120)
  .recommendCommands()
  .epilogue('For more information, see https://cloud.google.com/datastore/docs');

if (module === require.main) {
  program.main(process.argv.slice(2));
}
