/**
 * Copyright 2018 Google LLC
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

function main() {
  // [START gcpmetadata_quickstart]
  const gcpMetadata = require('gcp-metadata');

  async function quickstart() {
    // check to see if this code can access a metadata server
    const isAvailable = await gcpMetadata.isAvailable();
    console.log(`Is available: ${isAvailable}`);

    // Instance and Project level metadata will only be available if
    // running inside of a Google Cloud compute environment such as
    // Cloud Functions, App Engine, Kubernetes Engine, or Compute Engine.
    // To learn more about the differences between instance and project
    // level metadata, see:
    // https://cloud.google.com/compute/docs/storing-retrieving-metadata#project-instance-metadata
    if (isAvailable) {
      // grab all top level metadata from the service
      const instanceMetadata = await gcpMetadata.instance();
      console.log('Instance metadata:');
      console.log(instanceMetadata);

      // get all project level metadata
      const projectMetadata = await gcpMetadata.project();
      console.log('Project metadata:');
      console.log(projectMetadata);
    }
  }

  quickstart();
  // [END gcpmetadata_quickstart]
}

main();
