/**
 * Copyright 2021 Google LLC
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

async function createInstanceWithProcessingUnits(instanceId, projectId) {
  // [START spanner_create_instance_with_processing_units]
  // Imports the Google Cloud client library
  const {Spanner} = require('@google-cloud/spanner');

  /**
   * TODO(developer): Uncomment the following lines before running the sample.
   */
  // const projectId = 'my-project-id';
  // const instanceId = 'my-instance';

  // Creates a client
  const spanner = new Spanner({
    projectId: projectId,
  });

  const instance = spanner.instance(instanceId);

  // Creates a new instance
  try {
    console.log(`Creating instance ${instance.formattedName_}.`);
    const [, operation] = await instance.create({
      config: 'regional-us-central1',
      processingUnits: 500,
      displayName: 'This is a display name.',
      labels: {
        ['cloud_spanner_samples']: 'true',
      },
    });

    console.log(`Waiting for operation on ${instance.id} to complete...`);
    await operation.promise();

    console.log(`Created instance ${instanceId}.`);

    const [metadata] = await instance.getMetadata({
      fieldNames: ['processingUnits'],
    });
    console.log(
      `Instance ${instanceId} has ${metadata.processingUnits} ` +
        'processing units.',
    );
  } catch (err) {
    console.error('ERROR:', err);
  }
  // [END spanner_create_instance_with_processing_units]
}

module.exports.createInstanceWithProcessingUnits =
  createInstanceWithProcessingUnits;
