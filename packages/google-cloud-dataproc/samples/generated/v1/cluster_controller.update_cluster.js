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

'use strict';

function main(projectId, region, clusterName, cluster, updateMask) {
  // [START dataproc_v1_generated_ClusterController_UpdateCluster_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The ID of the Google Cloud Platform project the
   *  cluster belongs to.
   */
  // const projectId = 'abc123'
  /**
   *  Required. The Dataproc region in which to handle the request.
   */
  // const region = 'us-central1'
  /**
   *  Required. The cluster name.
   */
  // const clusterName = 'abc123'
  /**
   *  Required. The changes to the cluster.
   */
  // const cluster = {}
  /**
   *  Optional. Timeout for graceful YARN decomissioning. Graceful
   *  decommissioning allows removing nodes from the cluster without
   *  interrupting jobs in progress. Timeout specifies how long to wait for jobs
   *  in progress to finish before forcefully removing nodes (and potentially
   *  interrupting jobs). Default timeout is 0 (for forceful decommission), and
   *  the maximum allowed timeout is 1 day. (see JSON representation of
   *  Duration (https://developers.google.com/protocol-buffers/docs/proto3#json)).
   *  Only supported on Dataproc image versions 1.2 and higher.
   */
  // const gracefulDecommissionTimeout = {}
  /**
   *  Required. Specifies the path, relative to `Cluster`, of
   *  the field to update. For example, to change the number of workers
   *  in a cluster to 5, the `update_mask` parameter would be
   *  specified as `config.worker_config.num_instances`,
   *  and the `PATCH` request body would specify the new value, as follows:
   *      {
   *        "config":{
   *          "workerConfig":{
   *            "numInstances":"5"
   *          }
   *        }
   *      }
   *  Similarly, to change the number of preemptible workers in a cluster to 5,
   *  the `update_mask` parameter would be
   *  `config.secondary_worker_config.num_instances`, and the `PATCH` request
   *  body would be set as follows:
   *      {
   *        "config":{
   *          "secondaryWorkerConfig":{
   *            "numInstances":"5"
   *          }
   *        }
   *      }
   *  <strong>Note:</strong> Currently, only the following fields can be updated:
   *   <table>
   *   <tbody>
   *   <tr>
   *   <td><strong>Mask</strong></td>
   *   <td><strong>Purpose</strong></td>
   *   </tr>
   *   <tr>
   *   <td><strong><em>labels</em></strong></td>
   *   <td>Update labels</td>
   *   </tr>
   *   <tr>
   *   <td><strong><em>config.worker_config.num_instances</em></strong></td>
   *   <td>Resize primary worker group</td>
   *   </tr>
   *   <tr>
   *   <td><strong><em>config.secondary_worker_config.num_instances</em></strong></td>
   *   <td>Resize secondary worker group</td>
   *   </tr>
   *   <tr>
   *   <td>config.autoscaling_config.policy_uri</td><td>Use, stop using, or
   *   change autoscaling policies</td>
   *   </tr>
   *   </tbody>
   *   </table>
   */
  // const updateMask = {}
  /**
   *  Optional. A unique ID used to identify the request. If the server
   *  receives two
   *  UpdateClusterRequest (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#google.cloud.dataproc.v1.UpdateClusterRequest)s
   *  with the same id, then the second request will be ignored and the
   *  first google.longrunning.Operation google.longrunning.Operation  created and stored in the
   *  backend is returned.
   *  It is recommended to always set this value to a
   *  UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier).
   *  The ID must contain only letters (a-z, A-Z), numbers (0-9),
   *  underscores (_), and hyphens (-). The maximum length is 40 characters.
   */
  // const requestId = 'abc123'

  // Imports the Dataproc library
  const {ClusterControllerClient} = require('@google-cloud/dataproc').v1;

  // Instantiates a client
  const dataprocClient = new ClusterControllerClient();

  async function callUpdateCluster() {
    // Construct request
    const request = {
      projectId,
      region,
      clusterName,
      cluster,
      updateMask,
    };

    // Run request
    const [operation] = await dataprocClient.updateCluster(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  callUpdateCluster();
  // [END dataproc_v1_generated_ClusterController_UpdateCluster_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
