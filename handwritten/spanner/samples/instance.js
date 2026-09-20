/**
 * Copyright 2024 Google LLC
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

// creates an instance using Instance Admin Client
async function createInstance(instanceId, projectId) {
  // [START spanner_create_instance]

  // Imports the Google Cloud client library
  const {Spanner, protos} = require('@google-cloud/spanner');

  // Creates a client
  const spanner = new Spanner({
    projectId: projectId,
  });

  const instanceAdminClient = await spanner.getInstanceAdminClient();
  /**
   * TODO(developer): Uncomment the following lines before running the sample.
   **/
  // const projectId = 'my-project-id';
  // const instanceId = 'my-instance';

  // Creates a new instance
  try {
    console.log(
      `Creating instance ${instanceAdminClient.instancePath(
        projectId,
        instanceId,
      )}.`,
    );
    const [operation] = await instanceAdminClient.createInstance({
      instanceId: instanceId,
      parent: instanceAdminClient.projectPath(projectId),
      instance: {
        config: instanceAdminClient.instanceConfigPath(
          projectId,
          'regional-us-central1',
        ),
        nodeCount: 1,
        displayName: 'Display name for the instance.',
        labels: {
          cloud_spanner_samples: 'true',
          created: Math.round(Date.now() / 1000).toString(), // current time
        },
        edition:
          protos.google.spanner.admin.instance.v1.Instance.Edition.STANDARD, //optional
      },
    });

    console.log(`Waiting for operation on ${instanceId} to complete...`);
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
    'Creates an example instance in a Cloud Spanner instance using Instance Admin Client.',
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
