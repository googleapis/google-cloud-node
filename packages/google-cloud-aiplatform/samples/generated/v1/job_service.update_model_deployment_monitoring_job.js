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

function main(modelDeploymentMonitoringJob, updateMask) {
  // [START aiplatform_v1_generated_JobService_UpdateModelDeploymentMonitoringJob_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The model monitoring configuration which replaces the resource on the
   *  server.
   */
  // const modelDeploymentMonitoringJob = ''
  /**
   *  Required. The update mask is used to specify the fields to be overwritten in the
   *  ModelDeploymentMonitoringJob resource by the update.
   *  The fields specified in the update_mask are relative to the resource, not
   *  the full request. A field will be overwritten if it is in the mask. If the
   *  user does not provide a mask then only the non-empty fields present in the
   *  request will be overwritten. Set the update_mask to `*` to override all
   *  fields.
   *  For the objective config, the user can either provide the update mask for
   *  model_deployment_monitoring_objective_configs or any combination of its
   *  nested fields, such as:
   *  model_deployment_monitoring_objective_configs.objective_config.training_dataset.
   *  Updatable fields:
   *    * `display_name`
   *    * `model_deployment_monitoring_schedule_config`
   *    * `model_monitoring_alert_config`
   *    * `logging_sampling_strategy`
   *    * `labels`
   *    * `log_ttl`
   *    * `enable_monitoring_pipeline_logs`
   *  .  and
   *    * `model_deployment_monitoring_objective_configs`
   *  .  or
   *    * `model_deployment_monitoring_objective_configs.objective_config.training_dataset`
   *    * `model_deployment_monitoring_objective_configs.objective_config.training_prediction_skew_detection_config`
   *    * `model_deployment_monitoring_objective_configs.objective_config.prediction_drift_detection_config`
   */
  // const updateMask = ''

  // Imports the Aiplatform library
  const {JobServiceClient} = require('@google-cloud/aiplatform').v1;

  // Instantiates a client
  const aiplatformClient = new JobServiceClient();

  async function updateModelDeploymentMonitoringJob() {
    // Construct request
    const request = {
      modelDeploymentMonitoringJob,
      updateMask,
    };

    // Run request
    const [operation] =
      await aiplatformClient.updateModelDeploymentMonitoringJob(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  updateModelDeploymentMonitoringJob();
  // [END aiplatform_v1_generated_JobService_UpdateModelDeploymentMonitoringJob_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
