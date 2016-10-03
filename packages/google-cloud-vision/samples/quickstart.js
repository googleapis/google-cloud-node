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

// [START vision_quickstart]
// Imports the Google Cloud client library
const Vision = require('@google-cloud/vision');

// Your Google Cloud Platform project ID
const projectId = 'YOUR_PROJECT_ID';

// Instantiates a client
const visionClient = Vision({
  projectId: projectId
});

// The name of the image file to annotate
const fileName = './resources/wakeupcat.jpg';

// Performs label detection on the image file
visionClient.detectLabels(fileName, (err, labels) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log('Labels:');
  labels.forEach((label) => console.log(label));
});
// [END vision_quickstart]
