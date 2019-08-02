// Copyright 2019 Google LLC
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

// Note: this file is purely for documentation. Any contents are not expected
// to be loaded as the JS file.

/**
 * Defines an evaluation job that is triggered periodically to generate
 * evaluations.
 *
 * @property {string} name
 *   Format: 'projects/{project_id}/evaluationJobs/{evaluation_job_id}'
 *
 * @property {string} description
 *   Description of the job. The description can be up to
 *   25000 characters long.
 *
 * @property {number} state
 *   The number should be among the values of [State]{@link google.cloud.datalabeling.v1beta1.State}
 *
 * @property {string} schedule
 *   Describes the schedule on which the job will be executed. Minimum schedule
 *   unit is 1 day.
 *
 *   The schedule can be either of the following types:
 *   * [Crontab](http://en.wikipedia.org/wiki/Cron#Overview)
 *   * English-like
 *
 *   [schedule](https:
 *   //cloud.google.com/scheduler/docs/configuring/cron-job-schedules)
 *
 * @property {string} modelVersion
 *   The versioned model that is being evaluated here.
 *   Only one job is allowed for each model name.
 *   Format: 'projects/* /models/* /versions/*'
 *
 * @property {Object} evaluationJobConfig
 *   Detailed config for running this eval job.
 *
 *   This object should have the same structure as [EvaluationJobConfig]{@link google.cloud.datalabeling.v1beta1.EvaluationJobConfig}
 *
 * @property {string} annotationSpecSet
 *   Name of the AnnotationSpecSet.
 *
 * @property {boolean} labelMissingGroundTruth
 *   If a human annotation should be requested when some data don't have ground
 *   truth.
 *
 * @property {Object[]} attempts
 *   Output only. Any attempts with errors happening in evaluation job runs each
 *   time will be recorded here incrementally.
 *
 *   This object should have the same structure as [Attempt]{@link google.cloud.datalabeling.v1beta1.Attempt}
 *
 * @property {Object} createTime
 *   Timestamp when this evaluation job was created.
 *
 *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
 *
 * @typedef EvaluationJob
 * @memberof google.cloud.datalabeling.v1beta1
 * @see [google.cloud.datalabeling.v1beta1.EvaluationJob definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datalabeling/v1beta1/evaluation_job.proto}
 */
const EvaluationJob = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * State of the job.
   *
   * @enum {number}
   * @memberof google.cloud.datalabeling.v1beta1
   */
  State: {
    STATE_UNSPECIFIED: 0,
    SCHEDULED: 1,
    RUNNING: 2,
    PAUSED: 3,
    STOPPED: 4
  }
};

/**
 * @property {Object} imageClassificationConfig
 *   This object should have the same structure as [ImageClassificationConfig]{@link google.cloud.datalabeling.v1beta1.ImageClassificationConfig}
 *
 * @property {Object} boundingPolyConfig
 *   This object should have the same structure as [BoundingPolyConfig]{@link google.cloud.datalabeling.v1beta1.BoundingPolyConfig}
 *
 * @property {Object} videoClassificationConfig
 *   This object should have the same structure as [VideoClassificationConfig]{@link google.cloud.datalabeling.v1beta1.VideoClassificationConfig}
 *
 * @property {Object} objectDetectionConfig
 *   This object should have the same structure as [ObjectDetectionConfig]{@link google.cloud.datalabeling.v1beta1.ObjectDetectionConfig}
 *
 * @property {Object} textClassificationConfig
 *   This object should have the same structure as [TextClassificationConfig]{@link google.cloud.datalabeling.v1beta1.TextClassificationConfig}
 *
 * @property {Object} objectTrackingConfig
 *   This object should have the same structure as [ObjectTrackingConfig]{@link google.cloud.datalabeling.v1beta1.ObjectTrackingConfig}
 *
 * @property {Object} inputConfig
 *   Input config for data, gcs_source in the config will be the root path for
 *   data. Data should be organzied chronically under that path.
 *
 *   This object should have the same structure as [InputConfig]{@link google.cloud.datalabeling.v1beta1.InputConfig}
 *
 * @property {Object} evaluationConfig
 *   Config used to create evaluation.
 *
 *   This object should have the same structure as [EvaluationConfig]{@link google.cloud.datalabeling.v1beta1.EvaluationConfig}
 *
 * @property {Object} humanAnnotationConfig
 *   This object should have the same structure as [HumanAnnotationConfig]{@link google.cloud.datalabeling.v1beta1.HumanAnnotationConfig}
 *
 * @property {Object.<string, string>} bigqueryImportKeys
 *   Mappings between reserved keys for bigquery import and customized tensor
 *   names. Key is the reserved key, value is tensor name in the bigquery table.
 *   Different annotation type has different required key mapping. See user
 *   manual for more details:
 *
 *   https:
 *   //docs.google.com/document/d/1bg1meMIBGY
 *   // 9I5QEoFoHSX6u9LsZQYBSmPt6E9SxqHZc/edit#heading=h.tfyjhxhvsqem
 *
 * @property {number} exampleCount
 *   Max number of examples to collect in each period.
 *
 * @property {number} exampleSamplePercentage
 *   Percentage of examples to collect in each period. 0.1 means 10% of total
 *   examples will be collected, and 0.0 means no collection.
 *
 * @property {Object} evaluationJobAlertConfig
 *   Alert config for the evaluation job. The alert will be triggered when its
 *   criteria is met.
 *
 *   This object should have the same structure as [EvaluationJobAlertConfig]{@link google.cloud.datalabeling.v1beta1.EvaluationJobAlertConfig}
 *
 * @typedef EvaluationJobConfig
 * @memberof google.cloud.datalabeling.v1beta1
 * @see [google.cloud.datalabeling.v1beta1.EvaluationJobConfig definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datalabeling/v1beta1/evaluation_job.proto}
 */
const EvaluationJobConfig = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * @property {string} email
 *   Required. Email of the user who will be receiving the alert.
 *
 * @property {number} minAcceptableMeanAveragePrecision
 *   If a single evaluation run's aggregate mean average precision is
 *   lower than this threshold, the alert will be triggered.
 *
 * @typedef EvaluationJobAlertConfig
 * @memberof google.cloud.datalabeling.v1beta1
 * @see [google.cloud.datalabeling.v1beta1.EvaluationJobAlertConfig definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datalabeling/v1beta1/evaluation_job.proto}
 */
const EvaluationJobAlertConfig = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Records a failed attempt.
 *
 * @property {Object} attemptTime
 *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
 *
 * @property {Object[]} partialFailures
 *   This object should have the same structure as [Status]{@link google.rpc.Status}
 *
 * @typedef Attempt
 * @memberof google.cloud.datalabeling.v1beta1
 * @see [google.cloud.datalabeling.v1beta1.Attempt definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/datalabeling/v1beta1/evaluation_job.proto}
 */
const Attempt = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};