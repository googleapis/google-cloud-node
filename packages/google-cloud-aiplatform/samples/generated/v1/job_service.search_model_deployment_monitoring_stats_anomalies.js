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

function main(modelDeploymentMonitoringJob, deployedModelId, objectives) {
  // [START aiplatform_v1_generated_JobService_SearchModelDeploymentMonitoringStatsAnomalies_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. ModelDeploymentMonitoring Job resource name.
   *  Format:
   *  `projects/{project}/locations/{location}/modelDeploymentMonitoringJobs/{model_deployment_monitoring_job}`
   */
  // const modelDeploymentMonitoringJob = 'abc123'
  /**
   *  Required. The DeployedModel ID of the
   *  ModelDeploymentMonitoringObjectiveConfig.deployed_model_id.
   */
  // const deployedModelId = 'abc123'
  /**
   *  The feature display name. If specified, only return the stats belonging to
   *  this feature. Format:
   *  ModelMonitoringStatsAnomalies.FeatureHistoricStatsAnomalies.feature_display_name google.cloud.aiplatform.v1.ModelMonitoringStatsAnomalies.FeatureHistoricStatsAnomalies.feature_display_name,
   *  example: "user_destination".
   */
  // const featureDisplayName = 'abc123'
  /**
   *  Required. Objectives of the stats to retrieve.
   */
  // const objectives = 1234
  /**
   *  The standard list page size.
   */
  // const pageSize = 1234
  /**
   *  A page token received from a previous
   *  JobService.SearchModelDeploymentMonitoringStatsAnomalies google.cloud.aiplatform.v1.JobService.SearchModelDeploymentMonitoringStatsAnomalies 
   *  call.
   */
  // const pageToken = 'abc123'
  /**
   *  The earliest timestamp of stats being generated.
   *  If not set, indicates fetching stats till the earliest possible one.
   */
  // const startTime = {}
  /**
   *  The latest timestamp of stats being generated.
   *  If not set, indicates feching stats till the latest possible one.
   */
  // const endTime = {}

  // Imports the Aiplatform library
  const {JobServiceClient} = require('@google-cloud/aiplatform').v1;

  // Instantiates a client
  const aiplatformClient = new JobServiceClient();

  async function callSearchModelDeploymentMonitoringStatsAnomalies() {
    // Construct request
    const request = {
      modelDeploymentMonitoringJob,
      deployedModelId,
      objectives,
    };

    // Run request
    const iterable = await aiplatformClient.searchModelDeploymentMonitoringStatsAnomaliesAsync(request);
    for await (const response of iterable) {
        console.log(response);
    }
  }

  callSearchModelDeploymentMonitoringStatsAnomalies();
  // [END aiplatform_v1_generated_JobService_SearchModelDeploymentMonitoringStatsAnomalies_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
