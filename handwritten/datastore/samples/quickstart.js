/**
 * Copyright 2016, Google, Inc.
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

// [START datastore_quickstart]
// Imports the Google Cloud client library
const Datastore = require('@google-cloud/datastore');

// Your Google Cloud Platform project ID
const projectId = 'YOUR_PROJECT_ID';

// Instantiates a client
const datastoreClient = Datastore({
  projectId: projectId
});

// The kind for the new entity
const kind = 'Task';
// The name/ID for the new entity
const name = 'sampletask1';
// The Cloud Datastore key for the new entity
const taskKey = datastoreClient.key([kind, name]);

// Prepares the new entity
const task = {
  key: taskKey,
  data: {
    description: 'Buy milk'
  }
};

// Saves the entity
datastoreClient.save(task, (err) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log(`Saved ${task.key.name}: ${task.data.description}`);
});
// [END datastore_quickstart]
