// Copyright 2018 Google LLC
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
 * Represents a data transfer configuration. A transfer configuration
 * contains all metadata needed to perform a data transfer. For example,
 * `destination_dataset_id` specifies where data should be stored.
 * When a new transfer configuration is created, the specified
 * `destination_dataset_id` is created when needed and shared with the
 * appropriate data source service account.
 * Next id: 20
 *
 * @property {string} name
 *   The resource name of the transfer config.
 *   Transfer config names have the form
 *   `projects/{project_id}/transferConfigs/{config_id}`.
 *   Where `config_id` is usually a uuid, even though it is not
 *   guaranteed or required. The name is ignored when creating a transfer
 *   config.
 *
 * @property {string} destinationDatasetId
 *   The BigQuery target dataset id.
 *
 * @property {string} displayName
 *   User specified display name for the data transfer.
 *
 * @property {string} dataSourceId
 *   Data source id. Cannot be changed once data transfer is created.
 *
 * @property {Object} params
 *   Data transfer specific parameters.
 *
 *   This object should have the same structure as [Struct]{@link google.protobuf.Struct}
 *
 * @property {string} schedule
 *   Data transfer schedule.
 *   If the data source does not support a custom schedule, this should be
 *   empty. If it is empty, the default value for the data source will be
 *   used.
 *   The specified times are in UTC.
 *   Examples of valid format:
 *   `1st,3rd monday of month 15:30`,
 *   `every wed,fri of jan,jun 13:15`, and
 *   `first sunday of quarter 00:00`.
 *   See more explanation about the format here:
 *   https://cloud.google.com/appengine/docs/flexible/python/scheduling-jobs-with-cron-yaml#the_schedule_format
 *   NOTE: the granularity should be at least 8 hours, or less frequent.
 *
 * @property {number} dataRefreshWindowDays
 *   The number of days to look back to automatically refresh the data.
 *   For example, if `data_refresh_window_days = 10`, then every day
 *   BigQuery reingests data for [today-10, today-1], rather than ingesting data
 *   for just [today-1].
 *   Only valid if the data source supports the feature. Set the value to  0
 *   to use the default value.
 *
 * @property {boolean} disabled
 *   Is this config disabled. When set to true, no runs are scheduled
 *   for a given transfer.
 *
 * @property {Object} updateTime
 *   Output only. Data transfer modification time. Ignored by server on input.
 *
 *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
 *
 * @property {Object} nextRunTime
 *   Output only. Next time when data transfer will run.
 *
 *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
 *
 * @property {number} state
 *   Output only. State of the most recently updated transfer run.
 *
 *   The number should be among the values of [TransferState]{@link google.cloud.bigquery.datatransfer.v1.TransferState}
 *
 * @property {number} userId
 *   Output only. Unique ID of the user on whose behalf transfer is done.
 *   Applicable only to data sources that do not support service accounts.
 *   When set to 0, the data source service account credentials are used.
 *   May be negative. Note, that this identifier is not stable.
 *   It may change over time even for the same user.
 *
 * @property {string} datasetRegion
 *   Output only. Region in which BigQuery dataset is located.
 *
 * @typedef TransferConfig
 * @memberof google.cloud.bigquery.datatransfer.v1
 * @see [google.cloud.bigquery.datatransfer.v1.TransferConfig definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/bigquery/datatransfer/v1/transfer.proto}
 */
var TransferConfig = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Represents a data transfer run.
 * Next id: 27
 *
 * @property {string} name
 *   The resource name of the transfer run.
 *   Transfer run names have the form
 *   `projects/{project_id}/locations/{location}/transferConfigs/{config_id}/runs/{run_id}`.
 *   The name is ignored when creating a transfer run.
 *
 * @property {Object} scheduleTime
 *   Minimum time after which a transfer run can be started.
 *
 *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
 *
 * @property {Object} runTime
 *   For batch transfer runs, specifies the date and time that
 *   data should be ingested.
 *
 *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
 *
 * @property {Object} errorStatus
 *   Status of the transfer run.
 *
 *   This object should have the same structure as [Status]{@link google.rpc.Status}
 *
 * @property {Object} startTime
 *   Output only. Time when transfer run was started.
 *   Parameter ignored by server for input requests.
 *
 *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
 *
 * @property {Object} endTime
 *   Output only. Time when transfer run ended.
 *   Parameter ignored by server for input requests.
 *
 *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
 *
 * @property {Object} updateTime
 *   Output only. Last time the data transfer run state was updated.
 *
 *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
 *
 * @property {Object} params
 *   Output only. Data transfer specific parameters.
 *
 *   This object should have the same structure as [Struct]{@link google.protobuf.Struct}
 *
 * @property {string} destinationDatasetId
 *   Output only. The BigQuery target dataset id.
 *
 * @property {string} dataSourceId
 *   Output only. Data source id.
 *
 * @property {number} state
 *   Data transfer run state. Ignored for input requests.
 *
 *   The number should be among the values of [TransferState]{@link google.cloud.bigquery.datatransfer.v1.TransferState}
 *
 * @property {number} userId
 *   Output only. Unique ID of the user on whose behalf transfer is done.
 *   Applicable only to data sources that do not support service accounts.
 *   When set to 0, the data source service account credentials are used.
 *   May be negative. Note, that this identifier is not stable.
 *   It may change over time even for the same user.
 *
 * @property {string} schedule
 *   Output only. Describes the schedule of this transfer run if it was
 *   created as part of a regular schedule. For batch transfer runs that are
 *   scheduled manually, this is empty.
 *   NOTE: the system might choose to delay the schedule depending on the
 *   current load, so `schedule_time` doesn't always matches this.
 *
 * @typedef TransferRun
 * @memberof google.cloud.bigquery.datatransfer.v1
 * @see [google.cloud.bigquery.datatransfer.v1.TransferRun definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/bigquery/datatransfer/v1/transfer.proto}
 */
var TransferRun = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Represents a user facing message for a particular data transfer run.
 *
 * @property {Object} messageTime
 *   Time when message was logged.
 *
 *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
 *
 * @property {number} severity
 *   Message severity.
 *
 *   The number should be among the values of [MessageSeverity]{@link google.cloud.bigquery.datatransfer.v1.MessageSeverity}
 *
 * @property {string} messageText
 *   Message text.
 *
 * @typedef TransferMessage
 * @memberof google.cloud.bigquery.datatransfer.v1
 * @see [google.cloud.bigquery.datatransfer.v1.TransferMessage definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/bigquery/datatransfer/v1/transfer.proto}
 */
var TransferMessage = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * Represents data transfer user facing message severity.
   *
   * @enum {number}
   * @memberof google.cloud.bigquery.datatransfer.v1
   */
  MessageSeverity: {

    /**
     * No severity specified.
     */
    MESSAGE_SEVERITY_UNSPECIFIED: 0,

    /**
     * Informational message.
     */
    INFO: 1,

    /**
     * Warning message.
     */
    WARNING: 2,

    /**
     * Error message.
     */
    ERROR: 3
  }
};

/**
 * Represents data transfer type.
 *
 * @enum {number}
 * @memberof google.cloud.bigquery.datatransfer.v1
 */
var TransferType = {

  /**
   * Invalid or Unknown transfer type placeholder.
   */
  TRANSFER_TYPE_UNSPECIFIED: 0,

  /**
   * Batch data transfer.
   */
  BATCH: 1,

  /**
   * Streaming data transfer. Streaming data source currently doesn't
   * support multiple transfer configs per project.
   */
  STREAMING: 2
};

/**
 * Represents data transfer run state.
 *
 * @enum {number}
 * @memberof google.cloud.bigquery.datatransfer.v1
 */
var TransferState = {

  /**
   * State placeholder.
   */
  TRANSFER_STATE_UNSPECIFIED: 0,

  /**
   * Data transfer is scheduled and is waiting to be picked up by
   * data transfer backend.
   */
  PENDING: 2,

  /**
   * Data transfer is in progress.
   */
  RUNNING: 3,

  /**
   * Data transfer completed successsfully.
   */
  SUCCEEDED: 4,

  /**
   * Data transfer failed.
   */
  FAILED: 5,

  /**
   * Data transfer is cancelled.
   */
  CANCELLED: 6
};