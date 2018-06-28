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
 * A unit of scheduled work.
 *
 * @property {string} name
 *   Optionally caller-specified in CreateTask.
 *
 *   The task name.
 *
 *   The task name must have the following format:
 *   `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID`
 *
 *   * `PROJECT_ID` can contain letters ([A-Za-z]), numbers ([0-9]),
 *      hyphens (-), colons (:), or periods (.).
 *      For more information, see
 *      [Identifying projects](https://cloud.google.com/resource-manager/docs/creating-managing-projects#identifying_projects)
 *   * `LOCATION_ID` is the canonical ID for the task's location.
 *      The list of available locations can be obtained by calling
 *      ListLocations.
 *      For more information, see https://cloud.google.com/about/locations/.
 *   * `QUEUE_ID` can contain letters ([A-Za-z]), numbers ([0-9]), or
 *     hyphens (-). The maximum length is 100 characters.
 *   * `TASK_ID` can contain only letters ([A-Za-z]), numbers ([0-9]),
 *     hyphens (-), or underscores (_). The maximum length is 500 characters.
 *
 * @property {Object} appEngineHttpRequest
 *   App Engine HTTP request that is sent to the task's target. Can
 *   be set only if
 *   app_engine_http_target is set
 *   on the queue.
 *
 *   An App Engine task is a task that has AppEngineHttpRequest set.
 *
 *   This object should have the same structure as [AppEngineHttpRequest]{@link google.cloud.tasks.v2beta2.AppEngineHttpRequest}
 *
 * @property {Object} pullMessage
 *   LeaseTasks to process the task. Can be
 *   set only if pull_target is set on the queue.
 *
 *   A pull task is a task that has PullMessage set.
 *
 *   This object should have the same structure as [PullMessage]{@link google.cloud.tasks.v2beta2.PullMessage}
 *
 * @property {Object} scheduleTime
 *   The time when the task is scheduled to be attempted.
 *
 *   For App Engine queues, this is when the task will be attempted or retried.
 *
 *   For pull queues, this is the time when the task is available to
 *   be leased; if a task is currently leased, this is the time when
 *   the current lease expires, that is, the time that the task was
 *   leased plus the lease_duration.
 *
 *   `schedule_time` will be truncated to the nearest microsecond.
 *
 *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
 *
 * @property {Object} createTime
 *   Output only. The time that the task was created.
 *
 *   `create_time` will be truncated to the nearest second.
 *
 *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
 *
 * @property {Object} status
 *   Output only. The task status.
 *
 *   This object should have the same structure as [TaskStatus]{@link google.cloud.tasks.v2beta2.TaskStatus}
 *
 * @property {number} view
 *   Output only. The view specifies which subset of the Task has
 *   been returned.
 *
 *   The number should be among the values of [View]{@link google.cloud.tasks.v2beta2.View}
 *
 * @typedef Task
 * @memberof google.cloud.tasks.v2beta2
 * @see [google.cloud.tasks.v2beta2.Task definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/tasks/v2beta2/task.proto}
 */
var Task = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * The view specifies a subset of Task data.
   *
   * When a task is returned in a response, not all
   * information is retrieved by default because some data, such as
   * payloads, might be desirable to return only when needed because
   * of its large size or because of the sensitivity of data that it
   * contains.
   *
   * @enum {number}
   * @memberof google.cloud.tasks.v2beta2
   */
  View: {

    /**
     * Unspecified. Defaults to BASIC.
     */
    VIEW_UNSPECIFIED: 0,

    /**
     * The basic view omits fields which can be large or can contain
     * sensitive data.
     *
     * This view does not include the
     * (payload in AppEngineHttpRequest and
     * payload in PullMessage). These payloads are
     * desirable to return only when needed, because they can be large
     * and because of the sensitivity of the data that you choose to
     * store in it.
     */
    BASIC: 1,

    /**
     * All information is returned.
     *
     * Authorization for FULL requires
     * `cloudtasks.tasks.fullView` [Google IAM](https://cloud.google.com/iam/)
     * permission on the Queue resource.
     */
    FULL: 2
  }
};

/**
 * Status of the task.
 *
 * @property {number} attemptDispatchCount
 *   Output only. The number of attempts dispatched.
 *
 *   This count includes tasks which have been dispatched but haven't
 *   received a response.
 *
 * @property {number} attemptResponseCount
 *   Output only. The number of attempts which have received a response.
 *
 *   This field is not calculated for
 *   [pull tasks](https://cloud.google.comgoogle.cloud.tasks.v2beta2.PullTaskTarget).
 *
 * @property {Object} firstAttemptStatus
 *   Output only. The status of the task's first attempt.
 *
 *   Only dispatch_time will be set.
 *   The other AttemptStatus information is not retained by Cloud Tasks.
 *
 *   This field is not calculated for
 *   [pull tasks](https://cloud.google.comgoogle.cloud.tasks.v2beta2.PullTaskTarget).
 *
 *   This object should have the same structure as [AttemptStatus]{@link google.cloud.tasks.v2beta2.AttemptStatus}
 *
 * @property {Object} lastAttemptStatus
 *   Output only. The status of the task's last attempt.
 *
 *   This field is not calculated for
 *   [pull tasks](https://cloud.google.comgoogle.cloud.tasks.v2beta2.PullTaskTarget).
 *
 *   This object should have the same structure as [AttemptStatus]{@link google.cloud.tasks.v2beta2.AttemptStatus}
 *
 * @typedef TaskStatus
 * @memberof google.cloud.tasks.v2beta2
 * @see [google.cloud.tasks.v2beta2.TaskStatus definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/tasks/v2beta2/task.proto}
 */
var TaskStatus = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The status of a task attempt.
 *
 * @property {Object} scheduleTime
 *   Output only. The time that this attempt was scheduled.
 *
 *   `schedule_time` will be truncated to the nearest microsecond.
 *
 *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
 *
 * @property {Object} dispatchTime
 *   Output only. The time that this attempt was dispatched.
 *
 *   `dispatch_time` will be truncated to the nearest microsecond.
 *
 *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
 *
 * @property {Object} responseTime
 *   Output only. The time that this attempt response was received.
 *
 *   `response_time` will be truncated to the nearest microsecond.
 *
 *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
 *
 * @property {Object} responseStatus
 *   Output only. The response from the target for this attempt.
 *
 *   If the task has not been attempted or the task is currently running
 *   then the response status is unset.
 *
 *   This object should have the same structure as [Status]{@link google.rpc.Status}
 *
 * @typedef AttemptStatus
 * @memberof google.cloud.tasks.v2beta2
 * @see [google.cloud.tasks.v2beta2.AttemptStatus definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/tasks/v2beta2/task.proto}
 */
var AttemptStatus = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};