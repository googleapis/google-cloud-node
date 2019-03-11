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
 * Configuration for a job.
 * The maximum allowed size for a job is 100KB.
 *
 * @property {string} name
 *   Optionally caller-specified in CreateJob, after
 *   which it becomes output only.
 *
 *   The job name. For example:
 *   `projects/PROJECT_ID/locations/LOCATION_ID/jobs/JOB_ID`.
 *
 *   * `PROJECT_ID` can contain letters ([A-Za-z]), numbers ([0-9]),
 *      hyphens (-), colons (:), or periods (.).
 *      For more information, see
 *      [Identifying
 *      projects](https://cloud.google.com/resource-manager/docs/creating-managing-projects#identifying_projects)
 *   * `LOCATION_ID` is the canonical ID for the job's location.
 *      The list of available locations can be obtained by calling
 *      ListLocations.
 *      For more information, see https://cloud.google.com/about/locations/.
 *   * `JOB_ID` can contain only letters ([A-Za-z]), numbers ([0-9]),
 *      hyphens (-), or underscores (_). The maximum length is 500 characters.
 *
 * @property {string} description
 *   Optionally caller-specified in CreateJob or
 *   UpdateJob.
 *
 *   A human-readable description for the job. This string must not contain
 *   more than 500 characters.
 *
 * @property {Object} pubsubTarget
 *   Pub/Sub target.
 *
 *   This object should have the same structure as [PubsubTarget]{@link google.cloud.scheduler.v1.PubsubTarget}
 *
 * @property {Object} appEngineHttpTarget
 *   App Engine HTTP target.
 *
 *   This object should have the same structure as [AppEngineHttpTarget]{@link google.cloud.scheduler.v1.AppEngineHttpTarget}
 *
 * @property {Object} httpTarget
 *   HTTP target.
 *
 *   This object should have the same structure as [HttpTarget]{@link google.cloud.scheduler.v1.HttpTarget}
 *
 * @property {string} schedule
 *   Required, except when used with UpdateJob.
 *
 *   Describes the schedule on which the job will be executed.
 *
 *   The schedule can be either of the following types:
 *
 *   * [Crontab](http://en.wikipedia.org/wiki/Cron#Overview)
 *   * English-like
 *   [schedule](https://cloud.google.com/scheduler/docs/configuring/cron-job-schedules)
 *
 *   As a general rule, execution `n + 1` of a job will not begin
 *   until execution `n` has finished. Cloud Scheduler will never
 *   allow two simultaneously outstanding executions. For example,
 *   this implies that if the `n+1`th execution is scheduled to run at
 *   16:00 but the `n`th execution takes until 16:15, the `n+1`th
 *   execution will not start until `16:15`.
 *   A scheduled start time will be delayed if the previous
 *   execution has not ended when its scheduled time occurs.
 *
 *   If retry_count > 0 and a job attempt fails,
 *   the job will be tried a total of retry_count
 *   times, with exponential backoff, until the next scheduled start
 *   time.
 *
 * @property {string} timeZone
 *   Specifies the time zone to be used in interpreting
 *   schedule. The value of this field must be a time
 *   zone name from the [tz database](http://en.wikipedia.org/wiki/Tz_database).
 *
 *   Note that some time zones include a provision for
 *   daylight savings time. The rules for daylight saving time are
 *   determined by the chosen tz. For UTC use the string "utc". If a
 *   time zone is not specified, the default will be in UTC (also known
 *   as GMT).
 *
 * @property {Object} userUpdateTime
 *   Output only. The creation time of the job.
 *
 *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
 *
 * @property {number} state
 *   Output only. State of the job.
 *
 *   The number should be among the values of [State]{@link google.cloud.scheduler.v1.State}
 *
 * @property {Object} status
 *   Output only. The response from the target for the last attempted execution.
 *
 *   This object should have the same structure as [Status]{@link google.rpc.Status}
 *
 * @property {Object} scheduleTime
 *   Output only. The next time the job is scheduled. Note that this may be a
 *   retry of a previously failed attempt or the next execution time
 *   according to the schedule.
 *
 *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
 *
 * @property {Object} lastAttemptTime
 *   Output only. The time the last job attempt started.
 *
 *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
 *
 * @property {Object} retryConfig
 *   Settings that determine the retry behavior.
 *
 *   This object should have the same structure as [RetryConfig]{@link google.cloud.scheduler.v1.RetryConfig}
 *
 * @typedef Job
 * @memberof google.cloud.scheduler.v1
 * @see [google.cloud.scheduler.v1.Job definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/scheduler/v1/job.proto}
 */
const Job = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * State of the job.
   *
   * @enum {number}
   * @memberof google.cloud.scheduler.v1
   */
  State: {

    /**
     * Unspecified state.
     */
    STATE_UNSPECIFIED: 0,

    /**
     * The job is executing normally.
     */
    ENABLED: 1,

    /**
     * The job is paused by the user. It will not execute. A user can
     * intentionally pause the job using
     * PauseJobRequest.
     */
    PAUSED: 2,

    /**
     * The job is disabled by the system due to error. The user
     * cannot directly set a job to be disabled.
     */
    DISABLED: 3,

    /**
     * The job state resulting from a failed CloudScheduler.UpdateJob
     * operation. To recover a job from this state, retry
     * CloudScheduler.UpdateJob until a successful response is received.
     */
    UPDATE_FAILED: 4
  }
};

/**
 * Settings that determine the retry behavior.
 *
 * By default, if a job does not complete successfully (meaning that
 * an acknowledgement is not received from the handler, then it will be retried
 * with exponential backoff according to the settings in RetryConfig.
 *
 * @property {number} retryCount
 *   The number of attempts that the system will make to run a job using the
 *   exponential backoff procedure described by
 *   max_doublings.
 *
 *   The default value of retry_count is zero.
 *
 *   If retry_count is zero, a job attempt will *not* be retried if
 *   it fails. Instead the Cloud Scheduler system will wait for the
 *   next scheduled execution time.
 *
 *   If retry_count is set to a non-zero number then Cloud Scheduler
 *   will retry failed attempts, using exponential backoff,
 *   retry_count times, or until the next scheduled execution time,
 *   whichever comes first.
 *
 *   Values greater than 5 and negative values are not allowed.
 *
 * @property {Object} maxRetryDuration
 *   The time limit for retrying a failed job, measured from time when an
 *   execution was first attempted. If specified with
 *   retry_count, the job will be retried until both
 *   limits are reached.
 *
 *   The default value for max_retry_duration is zero, which means retry
 *   duration is unlimited.
 *
 *   This object should have the same structure as [Duration]{@link google.protobuf.Duration}
 *
 * @property {Object} minBackoffDuration
 *   The minimum amount of time to wait before retrying a job after
 *   it fails.
 *
 *   The default value of this field is 5 seconds.
 *
 *   This object should have the same structure as [Duration]{@link google.protobuf.Duration}
 *
 * @property {Object} maxBackoffDuration
 *   The maximum amount of time to wait before retrying a job after
 *   it fails.
 *
 *   The default value of this field is 1 hour.
 *
 *   This object should have the same structure as [Duration]{@link google.protobuf.Duration}
 *
 * @property {number} maxDoublings
 *   The time between retries will double `max_doublings` times.
 *
 *   A job's retry interval starts at
 *   min_backoff_duration, then doubles
 *   `max_doublings` times, then increases linearly, and finally
 *   retries retries at intervals of
 *   max_backoff_duration up to
 *   retry_count times.
 *
 *   For example, if min_backoff_duration is
 *   10s, max_backoff_duration is 300s, and
 *   `max_doublings` is 3, then the a job will first be retried in 10s. The
 *   retry interval will double three times, and then increase linearly by
 *   2^3 * 10s.  Finally, the job will retry at intervals of
 *   max_backoff_duration until the job has
 *   been attempted retry_count times. Thus, the
 *   requests will retry at 10s, 20s, 40s, 80s, 160s, 240s, 300s, 300s, ....
 *
 *   The default value of this field is 5.
 *
 * @typedef RetryConfig
 * @memberof google.cloud.scheduler.v1
 * @see [google.cloud.scheduler.v1.RetryConfig definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/scheduler/v1/job.proto}
 */
const RetryConfig = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};