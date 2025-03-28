// Copyright 2024 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

function main(projectId, region) {
  // [START dataproc_v1_generated_quickstart]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The ID of the Google Cloud Platform project that the cluster
   *  belongs to.
   */
  // const projectId = 'abc123'
  /**
   *  Required. The Dataproc region in which to handle the request.
   */
  // const region = 'us-central1'
  /**
   *  Optional. A filter constraining the clusters to list. Filters are
   *  case-sensitive and have the following syntax:
   *  field = value AND field = value   ...
   *  where **field** is one of `status.state`, `clusterName`, or `labels.KEY`,
   *  and `[KEY]` is a label key. **value** can be `*` to match all values.
   *  `status.state` can be one of the following: `ACTIVE`, `INACTIVE`,
   *  `CREATING`, `RUNNING`, `ERROR`, `DELETING`, or `UPDATING`. `ACTIVE`
   *  contains the `CREATING`, `UPDATING`, and `RUNNING` states. `INACTIVE`
   *  contains the `DELETING` and `ERROR` states.
   *  `clusterName` is the name of the cluster provided at creation time.
   *  Only the logical `AND` operator is supported; space-separated items are
   *  treated as having an implicit `AND` operator.
   *  Example filter:
   *  status.state = ACTIVE AND clusterName = mycluster
   *  AND labels.env = staging AND labels.starred = *
   */
  // const filter = 'abc123'
  /**
   *  Optional. The standard List page size.
   */
  // const pageSize = 1234
  /**
   *  Optional. The standard List page token.
   */
  // const pageToken = 'abc123'

  // Imports the Dataproc library
  const {ClusterControllerClient} = require('@google-cloud/dataproc').v1;

  // Instantiates a client
  const dataprocClient = new ClusterControllerClient();

  async function callListClusters() {
    // Construct request
    const request = {
      projectId,
      region,
    };

    // Run request
    const iterable = dataprocClient.listClustersAsync(request);
    for await (const response of iterable) {
      console.log(response);
    }
  }

  callListClusters();
  // [END dataproc_v1_generated_quickstart]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
