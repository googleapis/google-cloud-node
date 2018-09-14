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
 * A queue is a container of related tasks. Queues are configured to manage
 * how those tasks are dispatched. Configurable properties include rate limits,
 * retry options, target types, and others.
 *
 * @property {string} name
 *   Caller-specified and required in CreateQueue,
 *   after which it becomes output only.
 *
 *   The queue name.
 *
 *   The queue name must have the following format:
 *   `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID`
 *
 *   * `PROJECT_ID` can contain letters ([A-Za-z]), numbers ([0-9]),
 *      hyphens (-), colons (:), or periods (.).
 *      For more information, see
 *      [Identifying projects](https://cloud.google.com/resource-manager/docs/creating-managing-projects#identifying_projects)
 *   * `LOCATION_ID` is the canonical ID for the queue's location.
 *      The list of available locations can be obtained by calling
 *      ListLocations.
 *      For more information, see https://cloud.google.com/about/locations/.
 *   * `QUEUE_ID` can contain letters ([A-Za-z]), numbers ([0-9]), or
 *     hyphens (-). The maximum length is 100 characters.
 *
 * @property {Object} appEngineHttpTarget
 *   App Engine HTTP target.
 *
 *   An App Engine queue is a queue that has an AppEngineHttpTarget.
 *
 *   This object should have the same structure as [AppEngineHttpTarget]{@link google.cloud.tasks.v2beta2.AppEngineHttpTarget}
 *
 * @property {Object} pullTarget
 *   Pull target.
 *
 *   A pull queue is a queue that has a PullTarget.
 *
 *   This object should have the same structure as [PullTarget]{@link google.cloud.tasks.v2beta2.PullTarget}
 *
 * @property {Object} rateLimits
 *   Rate limits for task dispatches.
 *
 *   rate_limits and
 *   retry_config are related because they both
 *   control task attempts however they control how tasks are
 *   attempted in different ways:
 *
 *   * rate_limits controls the total rate of
 *     dispatches from a queue (i.e. all traffic dispatched from the
 *     queue, regardless of whether the dispatch is from a first
 *     attempt or a retry).
 *   * retry_config controls what happens to
 *     particular a task after its first attempt fails. That is,
 *     retry_config controls task retries (the
 *     second attempt, third attempt, etc).
 *
 *   This object should have the same structure as [RateLimits]{@link google.cloud.tasks.v2beta2.RateLimits}
 *
 * @property {Object} retryConfig
 *   Settings that determine the retry behavior.
 *
 *   * For tasks created using Cloud Tasks: the queue-level retry settings
 *     apply to all tasks in the queue that were created using Cloud Tasks.
 *     Retry settings cannot be set on individual tasks.
 *   * For tasks created using the App Engine SDK: the queue-level retry
 *     settings apply to all tasks in the queue which do not have retry settings
 *     explicitly set on the task and were created by the App Engine SDK. See
 *     [App Engine documentation](https://cloud.google.com/appengine/docs/standard/python/taskqueue/push/retrying-tasks).
 *
 *   This object should have the same structure as [RetryConfig]{@link google.cloud.tasks.v2beta2.RetryConfig}
 *
 * @property {number} state
 *   Output only. The state of the queue.
 *
 *   `state` can only be changed by called
 *   PauseQueue,
 *   ResumeQueue, or uploading
 *   [queue.yaml/xml](https://cloud.google.com/appengine/docs/python/config/queueref).
 *   UpdateQueue cannot be used to change `state`.
 *
 *   The number should be among the values of [State]{@link google.cloud.tasks.v2beta2.State}
 *
 * @property {Object} purgeTime
 *   Output only. The last time this queue was purged.
 *
 *   All tasks that were created before this time
 *   were purged.
 *
 *   A queue can be purged using PurgeQueue, the
 *   [App Engine Task Queue SDK, or the Cloud Console](https://cloud.google.com/appengine/docs/standard/python/taskqueue/push/deleting-tasks-and-queues#purging_all_tasks_from_a_queue).
 *
 *   Purge time will be truncated to the nearest microsecond. Purge
 *   time will be unset if the queue has never been purged.
 *
 *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
 *
 * @typedef Queue
 * @memberof google.cloud.tasks.v2beta2
 * @see [google.cloud.tasks.v2beta2.Queue definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/tasks/v2beta2/queue.proto}
 */
const Queue = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * State of the queue.
   *
   * @enum {number}
   * @memberof google.cloud.tasks.v2beta2
   */
  State: {

    /**
     * Unspecified state.
     */
    STATE_UNSPECIFIED: 0,

    /**
     * The queue is running. Tasks can be dispatched.
     *
     * If the queue was created using Cloud Tasks and the queue has
     * had no activity (method calls or task dispatches) for 30 days,
     * the queue may take a few minutes to re-activate. Some method
     * calls may return NOT_FOUND and
     * tasks may not be dispatched for a few minutes until the queue
     * has been re-activated.
     */
    RUNNING: 1,

    /**
     * Tasks are paused by the user. If the queue is paused then Cloud
     * Tasks will stop delivering tasks from it, but more tasks can
     * still be added to it by the user. When a pull queue is paused,
     * all LeaseTasks calls will return a
     * FAILED_PRECONDITION.
     */
    PAUSED: 2,

    /**
     * The queue is disabled.
     *
     * A queue becomes `DISABLED` when
     * [queue.yaml](https://cloud.google.com/appengine/docs/python/config/queueref) or
     * [queue.xml](https://cloud.google.com/appengine/docs/standard/java/config/queueref) is uploaded
     * which does not contain the queue. You cannot directly disable a queue.
     *
     * When a queue is disabled, tasks can still be added to a queue
     * but the tasks are not dispatched and
     * LeaseTasks calls return a
     * `FAILED_PRECONDITION` error.
     *
     * To permanently delete this queue and all of its tasks, call
     * DeleteQueue.
     */
    DISABLED: 3
  }
};

/**
 * Rate limits.
 *
 * This message determines the maximum rate that tasks can be dispatched by a
 * queue, regardless of whether the dispatch is a first task attempt or a retry.
 *
 * Note: The debugging command, RunTask, will run a task
 * even if the queue has reached its RateLimits.
 *
 * @property {number} maxTasksDispatchedPerSecond
 *   The maximum rate at which tasks are dispatched from this queue.
 *
 *   If unspecified when the queue is created, Cloud Tasks will pick the
 *   default.
 *
 *   * For App Engine queues, the maximum allowed value
 *     is 500.
 *   * This field is output only   for pull queues. In addition to the
 *     `max_tasks_dispatched_per_second` limit, a maximum of 10 QPS of
 *     LeaseTasks requests are allowed per pull queue.
 *
 *
 *   This field has the same meaning as
 *   [rate in queue.yaml/xml](https://cloud.google.com/appengine/docs/standard/python/config/queueref#rate).
 *
 * @property {number} maxBurstSize
 *   Output only. The max burst size.
 *
 *   Max burst size limits how fast tasks in queue are processed when
 *   many tasks are in the queue and the rate is high. This field
 *   allows the queue to have a high rate so processing starts shortly
 *   after a task is enqueued, but still limits resource usage when
 *   many tasks are enqueued in a short period of time.
 *
 *   The [token bucket](https://wikipedia.org/wiki/Token_Bucket)
 *   algorithm is used to control the rate of task dispatches. Each
 *   queue has a token bucket that holds tokens, up to the maximum
 *   specified by `max_burst_size`. Each time a task is dispatched, a
 *   token is removed from the bucket. Tasks will be dispatched until
 *   the queue's bucket runs out of tokens. The bucket will be
 *   continuously refilled with new tokens based on
 *   max_tasks_dispatched_per_second.
 *
 *   Cloud Tasks will pick the value of `max_burst_size` based on the
 *   value of
 *   max_tasks_dispatched_per_second.
 *
 *   For App Engine queues that were created or updated using
 *   `queue.yaml/xml`, `max_burst_size` is equal to
 *   [bucket_size](https://cloud.google.com/appengine/docs/standard/python/config/queueref#bucket_size).
 *   Since `max_burst_size` is output only, if
 *   UpdateQueue is called on a queue
 *   created by `queue.yaml/xml`, `max_burst_size` will be reset based
 *   on the value of
 *   max_tasks_dispatched_per_second,
 *   regardless of whether
 *   max_tasks_dispatched_per_second
 *   is updated.
 *
 * @property {number} maxConcurrentTasks
 *   The maximum number of concurrent tasks that Cloud Tasks allows
 *   to be dispatched for this queue. After this threshold has been
 *   reached, Cloud Tasks stops dispatching tasks until the number of
 *   concurrent requests decreases.
 *
 *   If unspecified when the queue is created, Cloud Tasks will pick the
 *   default.
 *
 *
 *   The maximum allowed value is 5,000.
 *
 *   This field is output only for
 *   pull queues and always -1, which indicates no limit. No other
 *   queue types can have `max_concurrent_tasks` set to -1.
 *
 *
 *   This field has the same meaning as
 *   [max_concurrent_requests in queue.yaml/xml](https://cloud.google.com/appengine/docs/standard/python/config/queueref#max_concurrent_requests).
 *
 * @typedef RateLimits
 * @memberof google.cloud.tasks.v2beta2
 * @see [google.cloud.tasks.v2beta2.RateLimits definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/tasks/v2beta2/queue.proto}
 */
const RateLimits = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Retry config.
 *
 * These settings determine how a failed task attempt is retried.
 *
 * @property {number} maxAttempts
 *   The maximum number of attempts for a task.
 *
 *   Cloud Tasks will attempt the task `max_attempts` times (that
 *   is, if the first attempt fails, then there will be
 *   `max_attempts - 1` retries).  Must be > 0.
 *
 * @property {boolean} unlimitedAttempts
 *   If true, then the number of attempts is unlimited.
 *
 * @property {Object} maxRetryDuration
 *   If positive, `max_retry_duration` specifies the time limit for
 *   retrying a failed task, measured from when the task was first
 *   attempted. Once `max_retry_duration` time has passed *and* the
 *   task has been attempted max_attempts
 *   times, no further attempts will be made and the task will be
 *   deleted.
 *
 *   If zero, then the task age is unlimited.
 *
 *   If unspecified when the queue is created, Cloud Tasks will pick the
 *   default.
 *
 *   This field is output only for pull queues.
 *
 *
 *   `max_retry_duration` will be truncated to the nearest second.
 *
 *   This field has the same meaning as
 *   [task_age_limit in queue.yaml/xml](https://cloud.google.com/appengine/docs/standard/python/config/queueref#retry_parameters).
 *
 *   This object should have the same structure as [Duration]{@link google.protobuf.Duration}
 *
 * @property {Object} minBackoff
 *   A task will be scheduled for retry between
 *   min_backoff and
 *   max_backoff duration after it fails,
 *   if the queue's RetryConfig specifies that the task should be
 *   retried.
 *
 *   If unspecified when the queue is created, Cloud Tasks will pick the
 *   default.
 *
 *   This field is output only for pull queues.
 *
 *
 *   `min_backoff` will be truncated to the nearest second.
 *
 *   This field has the same meaning as
 *   [min_backoff_seconds in queue.yaml/xml](https://cloud.google.com/appengine/docs/standard/python/config/queueref#retry_parameters).
 *
 *   This object should have the same structure as [Duration]{@link google.protobuf.Duration}
 *
 * @property {Object} maxBackoff
 *   A task will be scheduled for retry between
 *   min_backoff and
 *   max_backoff duration after it fails,
 *   if the queue's RetryConfig specifies that the task should be
 *   retried.
 *
 *   If unspecified when the queue is created, Cloud Tasks will pick the
 *   default.
 *
 *   This field is output only for pull queues.
 *
 *
 *   `max_backoff` will be truncated to the nearest second.
 *
 *   This field has the same meaning as
 *   [max_backoff_seconds in queue.yaml/xml](https://cloud.google.com/appengine/docs/standard/python/config/queueref#retry_parameters).
 *
 *   This object should have the same structure as [Duration]{@link google.protobuf.Duration}
 *
 * @property {number} maxDoublings
 *   The time between retries will double `max_doublings` times.
 *
 *   A task's retry interval starts at
 *   min_backoff, then doubles
 *   `max_doublings` times, then increases linearly, and finally
 *   retries retries at intervals of
 *   max_backoff up to
 *   max_attempts times.
 *
 *   For example, if min_backoff is 10s,
 *   max_backoff is 300s, and
 *   `max_doublings` is 3, then the a task will first be retried in
 *   10s. The retry interval will double three times, and then
 *   increase linearly by 2^3 * 10s.  Finally, the task will retry at
 *   intervals of max_backoff until the
 *   task has been attempted max_attempts
 *   times. Thus, the requests will retry at 10s, 20s, 40s, 80s, 160s,
 *   240s, 300s, 300s, ....
 *
 *   If unspecified when the queue is created, Cloud Tasks will pick the
 *   default.
 *
 *   This field is output only for pull queues.
 *
 *
 *   This field has the same meaning as
 *   [max_doublings in queue.yaml/xml](https://cloud.google.com/appengine/docs/standard/python/config/queueref#retry_parameters).
 *
 * @typedef RetryConfig
 * @memberof google.cloud.tasks.v2beta2
 * @see [google.cloud.tasks.v2beta2.RetryConfig definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/tasks/v2beta2/queue.proto}
 */
const RetryConfig = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};