// Copyright 2021 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Gets all instances present in a project, grouped by their zone.
 *
 * @param {string} projectId - ID or number of the project you want to use.
 */
function main(projectId) {
  // [START compute_instances_list_all]
  /**
   * TODO(developer): Uncomment and replace these variables before running the sample.
   */
  // const projectId = 'YOUR_PROJECT_ID';

  const compute = require('@google-cloud/compute');

  // List all instances in the specified project.
  async function listAllInstances() {
    const instancesClient = new compute.InstancesClient();

    //Use the `maxResults` parameter to limit the number of results that the API returns per response page.
    const aggListRequest = instancesClient.aggregatedListAsync({
      project: projectId,
      maxResults: 5,
    });

    console.log('Instances found:');

    // Despite using the `maxResults` parameter, you don't need to handle the pagination
    // yourself. The returned object handles pagination automatically,
    // requesting next pages as you iterate over the results.
    for await (const [zone, instancesObject] of aggListRequest) {
      const instances = instancesObject.instances;

      if (instances && instances.length > 0) {
        console.log(` ${zone}`);
        for (const instance of instances) {
          console.log(` - ${instance.name} (${instance.machineType})`);
        }
      }
    }
  }

  listAllInstances();
  // [END compute_instances_list_all]
}

main(...process.argv.slice(2));
