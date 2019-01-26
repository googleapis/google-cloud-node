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
 *   HTTP request that is sent to the App Engine app handler.
 *
 *   An App Engine task is a task that has AppEngineHttpRequest set.
 *
 *   This object should have the same structure as [AppEngineHttpRequest]{@link google.cloud.tasks.v2beta3.AppEngineHttpRequest}
 *
 * @property {Object} scheduleTime
 *   The time when the task is scheduled to be attempted.
 *
 *   For App Engine queues, this is when the task will be attempted or retried.
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
 * @property {Object} dispatchDeadline
 *   The deadline for requests sent to the worker. If the worker does not
 *   respond by this deadline then the request is cancelled and the attempt
 *   is marked as a `DEADLINE_EXCEEDED` failure. Cloud Tasks will retry the
 *   task according to the RetryConfig.
 *
 *   Note that when the request is cancelled, Cloud Tasks will stop listing for
 *   the response, but whether the worker stops processing depends on the
 *   worker. For example, if the worker is stuck, it may not react to cancelled
 *   requests.
 *
 *   The default and maximum values depend on the type of request:
 *
 *
 *   * For App Engine tasks, 0 indicates that the
 *     request has the default deadline. The default deadline depends on the
 *     [scaling type](https://cloud.google.com/appengine/docs/standard/go/how-instances-are-managed#instance_scaling)
 *     of the service: 10 minutes for standard apps with automatic scaling, 24
 *     hours for standard apps with manual and basic scaling, and 60 minutes for
 *     flex apps. If the request deadline is set, it must be in the interval [15
 *     seconds, 24 hours 15 seconds]. Regardless of the task's
 *     `dispatch_deadline`, the app handler will not run for longer than than
 *     the service's timeout. We recommend setting the `dispatch_deadline` to
 *     at most a few seconds more than the app handler's timeout. For more
 *     information see
 *     [Timeouts](https://cloud.google.com/tasks/docs/creating-appengine-handlers#timeouts).
 *
 *   `dispatch_deadline` will be truncated to the nearest millisecond. The
 *   deadline is an approximate deadline.
 *
 *   This object should have the same structure as [Duration]{@link google.protobuf.Duration}
 *
 * @property {number} dispatchCount
 *   Output only. The number of attempts dispatched.
 *
 *   This count includes tasks which have been dispatched but haven't
 *   received a response.
 *
 * @property {number} responseCount
 *   Output only. The number of attempts which have received a response.
 *
 * @property {Object} firstAttempt
 *   Output only. The status of the task's first attempt.
 *
 *   Only dispatch_time will be set.
 *   The other Attempt information is not retained by Cloud Tasks.
 *
 *   This object should have the same structure as [Attempt]{@link google.cloud.tasks.v2beta3.Attempt}
 *
 * @property {Object} lastAttempt
 *   Output only. The status of the task's last attempt.
 *
 *   This object should have the same structure as [Attempt]{@link google.cloud.tasks.v2beta3.Attempt}
 *
 * @property {number} view
 *   Output only. The view specifies which subset of the Task has
 *   been returned.
 *
 *   The number should be among the values of [View]{@link google.cloud.tasks.v2beta3.View}
 *
 * @typedef Task
 * @memberof google.cloud.tasks.v2beta3
 * @see [google.cloud.tasks.v2beta3.Task definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/tasks/v2beta3/task.proto}
 */
const Task = {
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
   * @memberof google.cloud.tasks.v2beta3
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
     * body in AppEngineHttpRequest.
     * Bodies are desirable to return only when needed, because they
     * can be large and because of the sensitivity of the data that you
     * choose to store in it.
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
 *   Output only. The response from the worker for this attempt.
 *
 *   If `response_time` is unset, then the task has not been attempted or is
 *   currently running and the `response_status` field is meaningless.
 *
 *   This object should have the same structure as [Status]{@link google.rpc.Status}
 *
 * @typedef Attempt
 * @memberof google.cloud.tasks.v2beta3
 * @see [google.cloud.tasks.v2beta3.Attempt definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/tasks/v2beta3/task.proto}
 */
const Attempt = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};