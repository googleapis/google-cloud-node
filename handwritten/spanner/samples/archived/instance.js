/**
 * Copyright 2020 Google LLC
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

async function createInstance(instanceId, projectId) {
  // [START spanner_create_instance]
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
      config: 'regional-us-west1',
      nodes: 1,
      displayName: 'This is a display name.',
      labels: {
        ['cloud_spanner_samples']: 'true',
        created: Math.round(Date.now() / 1000).toString(), // current time
      },
    });

    console.log(`Waiting for operation on ${instance.id} to complete...`);
    await operation.promise();

    console.log(`Created instance ${instanceId}.`);
  } catch (err) {
    console.error('ERROR:', err);
  }
  // [END spanner_create_instance]
}

const {
  createInstanceWithProcessingUnits,
} = require('./instance-with-processing-units');

require('yargs')
  .demand(1)
  .command(
    'createInstance <instanceName> <projectId>',
    'Creates an example instance in a Cloud Spanner instance.',
    {},
    opts => createInstance(opts.instanceName, opts.projectId),
  )
  .example('node $0 createInstance "my-instance" "my-project-id"')
  .command(
    'createInstanceWithProcessingUnits <instanceName> <projectId>',
    'Creates an example instance in a Cloud Spanner instance with processing units.',
    {},
    opts =>
      createInstanceWithProcessingUnits(opts.instanceName, opts.projectId),
  )
  .example(
    'node $0 createInstanceWithProcessingUnits "my-instance" "my-project-id"',
  )
  .wrap(120)
  .recommendCommands()
  .epilogue('For more information, see https://cloud.google.com/spanner/docs')
  .strict()
  .help().argv;
