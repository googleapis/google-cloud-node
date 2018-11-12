/**
 * Copyright 2017, Google, Inc.
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

// [START pubsub_quickstart_create_topic]
// Imports the Google Cloud client library
const {PubSub} = require('@google-cloud/pubsub');

async function quickstart() {
  // Your Google Cloud Platform project ID
  const projectId = process.env.GCLOUD_PROJECT || 'YOUR_PROJECT_ID';

  // Instantiates a client
  const pubsubClient = new PubSub({
    projectId: projectId,
  });

  // The name for the new topic
  const topicName = 'my-topic';

  // Creates the new topic
  const [topic] = await pubsubClient.createTopic(topicName);
  console.log(`Topic ${topic.name} created.`);
}
quickstart().catch(console.error);
// [END pubsub_quickstart_create_topic]
