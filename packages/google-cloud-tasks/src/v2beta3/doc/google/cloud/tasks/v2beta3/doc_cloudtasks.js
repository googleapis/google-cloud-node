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
 * Request message for ListQueues.
 *
 * @property {string} parent
 *   Required.
 *
 *   The location name.
 *   For example: `projects/PROJECT_ID/locations/LOCATION_ID`
 *
 * @property {string} filter
 *   `filter` can be used to specify a subset of queues. Any Queue
 *   field can be used as a filter and several operators as supported.
 *   For example: `<=, <, >=, >, !=, =, :`. The filter syntax is the same as
 *   described in
 *   [Stackdriver's Advanced Logs Filters](https://cloud.google.com/logging/docs/view/advanced_filters).
 *
 *   Sample filter "state: PAUSED".
 *
 *   Note that using filters might cause fewer queues than the
 *   requested page_size to be returned.
 *
 * @property {number} pageSize
 *   Requested page size.
 *
 *   The maximum page size is 9800. If unspecified, the page size will
 *   be the maximum. Fewer queues than requested might be returned,
 *   even if more queues exist; use the
 *   next_page_token in the
 *   response to determine if more queues exist.
 *
 * @property {string} pageToken
 *   A token identifying the page of results to return.
 *
 *   To request the first page results, page_token must be empty. To
 *   request the next page of results, page_token must be the value of
 *   next_page_token returned
 *   from the previous call to ListQueues
 *   method. It is an error to switch the value of the
 *   filter while iterating through pages.
 *
 * @typedef ListQueuesRequest
 * @memberof google.cloud.tasks.v2beta3
 * @see [google.cloud.tasks.v2beta3.ListQueuesRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/tasks/v2beta3/cloudtasks.proto}
 */
var ListQueuesRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Response message for ListQueues.
 *
 * @property {Object[]} queues
 *   The list of queues.
 *
 *   This object should have the same structure as [Queue]{@link google.cloud.tasks.v2beta3.Queue}
 *
 * @property {string} nextPageToken
 *   A token to retrieve next page of results.
 *
 *   To return the next page of results, call
 *   ListQueues with this value as the
 *   page_token.
 *
 *   If the next_page_token is empty, there are no more results.
 *
 *   The page token is valid for only 2 hours.
 *
 * @typedef ListQueuesResponse
 * @memberof google.cloud.tasks.v2beta3
 * @see [google.cloud.tasks.v2beta3.ListQueuesResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/tasks/v2beta3/cloudtasks.proto}
 */
var ListQueuesResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request message for GetQueue.
 *
 * @property {string} name
 *   Required.
 *
 *   The resource name of the queue. For example:
 *   `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID`
 *
 * @typedef GetQueueRequest
 * @memberof google.cloud.tasks.v2beta3
 * @see [google.cloud.tasks.v2beta3.GetQueueRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/tasks/v2beta3/cloudtasks.proto}
 */
var GetQueueRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request message for CreateQueue.
 *
 * @property {string} parent
 *   Required.
 *
 *   The location name in which the queue will be created.
 *   For example: `projects/PROJECT_ID/locations/LOCATION_ID`
 *
 *   The list of allowed locations can be obtained by calling Cloud
 *   Tasks' implementation of
 *   ListLocations.
 *
 * @property {Object} queue
 *   Required.
 *
 *   The queue to create.
 *
 *   Queue's name cannot be the same as an existing queue.
 *
 *   This object should have the same structure as [Queue]{@link google.cloud.tasks.v2beta3.Queue}
 *
 * @typedef CreateQueueRequest
 * @memberof google.cloud.tasks.v2beta3
 * @see [google.cloud.tasks.v2beta3.CreateQueueRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/tasks/v2beta3/cloudtasks.proto}
 */
var CreateQueueRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request message for UpdateQueue.
 *
 * @property {Object} queue
 *   Required.
 *
 *   The queue to create or update.
 *
 *   The queue's name must be specified.
 *
 *   Output only fields cannot be modified using UpdateQueue.
 *   Any value specified for an output only field will be ignored.
 *   The queue's name cannot be changed.
 *
 *   This object should have the same structure as [Queue]{@link google.cloud.tasks.v2beta3.Queue}
 *
 * @property {Object} updateMask
 *   A mask used to specify which fields of the queue are being updated.
 *
 *   If empty, then all fields will be updated.
 *
 *   This object should have the same structure as [FieldMask]{@link google.protobuf.FieldMask}
 *
 * @typedef UpdateQueueRequest
 * @memberof google.cloud.tasks.v2beta3
 * @see [google.cloud.tasks.v2beta3.UpdateQueueRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/tasks/v2beta3/cloudtasks.proto}
 */
var UpdateQueueRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request message for DeleteQueue.
 *
 * @property {string} name
 *   Required.
 *
 *   The queue name. For example:
 *   `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID`
 *
 * @typedef DeleteQueueRequest
 * @memberof google.cloud.tasks.v2beta3
 * @see [google.cloud.tasks.v2beta3.DeleteQueueRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/tasks/v2beta3/cloudtasks.proto}
 */
var DeleteQueueRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request message for PurgeQueue.
 *
 * @property {string} name
 *   Required.
 *
 *   The queue name. For example:
 *   `projects/PROJECT_ID/location/LOCATION_ID/queues/QUEUE_ID`
 *
 * @typedef PurgeQueueRequest
 * @memberof google.cloud.tasks.v2beta3
 * @see [google.cloud.tasks.v2beta3.PurgeQueueRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/tasks/v2beta3/cloudtasks.proto}
 */
var PurgeQueueRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request message for PauseQueue.
 *
 * @property {string} name
 *   Required.
 *
 *   The queue name. For example:
 *   `projects/PROJECT_ID/location/LOCATION_ID/queues/QUEUE_ID`
 *
 * @typedef PauseQueueRequest
 * @memberof google.cloud.tasks.v2beta3
 * @see [google.cloud.tasks.v2beta3.PauseQueueRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/tasks/v2beta3/cloudtasks.proto}
 */
var PauseQueueRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request message for ResumeQueue.
 *
 * @property {string} name
 *   Required.
 *
 *   The queue name. For example:
 *   `projects/PROJECT_ID/location/LOCATION_ID/queues/QUEUE_ID`
 *
 * @typedef ResumeQueueRequest
 * @memberof google.cloud.tasks.v2beta3
 * @see [google.cloud.tasks.v2beta3.ResumeQueueRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/tasks/v2beta3/cloudtasks.proto}
 */
var ResumeQueueRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request message for listing tasks using ListTasks.
 *
 * @property {string} parent
 *   Required.
 *
 *   The queue name. For example:
 *   `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID`
 *
 * @property {number} responseView
 *   The response_view specifies which subset of the Task will be
 *   returned.
 *
 *   By default response_view is BASIC; not all
 *   information is retrieved by default because some data, such as
 *   payloads, might be desirable to return only when needed because
 *   of its large size or because of the sensitivity of data that it
 *   contains.
 *
 *   Authorization for FULL requires
 *   `cloudtasks.tasks.fullView` [Google IAM](https://cloud.google.com/iam/)
 *   permission on the Task resource.
 *
 *   The number should be among the values of [View]{@link google.cloud.tasks.v2beta3.View}
 *
 * @property {number} pageSize
 *   Requested page size. Fewer tasks than requested might be returned.
 *
 *   The maximum page size is 1000. If unspecified, the page size will
 *   be the maximum. Fewer tasks than requested might be returned,
 *   even if more tasks exist; use
 *   next_page_token in the
 *   response to determine if more tasks exist.
 *
 * @property {string} pageToken
 *   A token identifying the page of results to return.
 *
 *   To request the first page results, page_token must be empty. To
 *   request the next page of results, page_token must be the value of
 *   next_page_token returned
 *   from the previous call to ListTasks
 *   method.
 *
 *   The page token is valid for only 2 hours.
 *
 * @typedef ListTasksRequest
 * @memberof google.cloud.tasks.v2beta3
 * @see [google.cloud.tasks.v2beta3.ListTasksRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/tasks/v2beta3/cloudtasks.proto}
 */
var ListTasksRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Response message for listing tasks using ListTasks.
 *
 * @property {Object[]} tasks
 *   The list of tasks.
 *
 *   This object should have the same structure as [Task]{@link google.cloud.tasks.v2beta3.Task}
 *
 * @property {string} nextPageToken
 *   A token to retrieve next page of results.
 *
 *   To return the next page of results, call
 *   ListTasks with this value as the
 *   page_token.
 *
 *   If the next_page_token is empty, there are no more results.
 *
 * @typedef ListTasksResponse
 * @memberof google.cloud.tasks.v2beta3
 * @see [google.cloud.tasks.v2beta3.ListTasksResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/tasks/v2beta3/cloudtasks.proto}
 */
var ListTasksResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request message for getting a task using GetTask.
 *
 * @property {string} name
 *   Required.
 *
 *   The task name. For example:
 *   `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID`
 *
 * @property {number} responseView
 *   The response_view specifies which subset of the Task will be
 *   returned.
 *
 *   By default response_view is BASIC; not all
 *   information is retrieved by default because some data, such as
 *   payloads, might be desirable to return only when needed because
 *   of its large size or because of the sensitivity of data that it
 *   contains.
 *
 *   Authorization for FULL requires
 *   `cloudtasks.tasks.fullView` [Google IAM](https://cloud.google.com/iam/)
 *   permission on the Task resource.
 *
 *   The number should be among the values of [View]{@link google.cloud.tasks.v2beta3.View}
 *
 * @typedef GetTaskRequest
 * @memberof google.cloud.tasks.v2beta3
 * @see [google.cloud.tasks.v2beta3.GetTaskRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/tasks/v2beta3/cloudtasks.proto}
 */
var GetTaskRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request message for CreateTask.
 *
 * @property {string} parent
 *   Required.
 *
 *   The queue name. For example:
 *   `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID`
 *
 *   The queue must already exist.
 *
 * @property {Object} task
 *   Required.
 *
 *   The task to add.
 *
 *   Task names have the following format:
 *   `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID`.
 *   The user can optionally specify a task name. If a
 *   name is not specified then the system will generate a random
 *   unique task id, which will be set in the task returned in the
 *   response.
 *
 *   If schedule_time is not set or is in the
 *   past then Cloud Tasks will set it to the current time.
 *
 *   Task De-duplication:
 *
 *   Explicitly specifying a task ID enables task de-duplication.  If
 *   a task's ID is identical to that of an existing task or a task
 *   that was deleted or executed recently then the call will fail
 *   with ALREADY_EXISTS.
 *   If the task's queue was created using Cloud Tasks, then another task with
 *   the same name can't be created for ~1hour after the original task was
 *   deleted or executed. If the task's queue was created using queue.yaml or
 *   queue.xml, then another task with the same name can't be created
 *   for ~9days after the original task was deleted or executed.
 *
 *   Because there is an extra lookup cost to identify duplicate task
 *   names, these CreateTask calls have significantly
 *   increased latency. Using hashed strings for the task id or for
 *   the prefix of the task id is recommended. Choosing task ids that
 *   are sequential or have sequential prefixes, for example using a
 *   timestamp, causes an increase in latency and error rates in all
 *   task commands. The infrastructure relies on an approximately
 *   uniform distribution of task ids to store and serve tasks
 *   efficiently.
 *
 *   This object should have the same structure as [Task]{@link google.cloud.tasks.v2beta3.Task}
 *
 * @property {number} responseView
 *   The response_view specifies which subset of the Task will be
 *   returned.
 *
 *   By default response_view is BASIC; not all
 *   information is retrieved by default because some data, such as
 *   payloads, might be desirable to return only when needed because
 *   of its large size or because of the sensitivity of data that it
 *   contains.
 *
 *   Authorization for FULL requires
 *   `cloudtasks.tasks.fullView` [Google IAM](https://cloud.google.com/iam/)
 *   permission on the Task resource.
 *
 *   The number should be among the values of [View]{@link google.cloud.tasks.v2beta3.View}
 *
 * @typedef CreateTaskRequest
 * @memberof google.cloud.tasks.v2beta3
 * @see [google.cloud.tasks.v2beta3.CreateTaskRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/tasks/v2beta3/cloudtasks.proto}
 */
var CreateTaskRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request message for deleting a task using
 * DeleteTask.
 *
 * @property {string} name
 *   Required.
 *
 *   The task name. For example:
 *   `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID`
 *
 * @typedef DeleteTaskRequest
 * @memberof google.cloud.tasks.v2beta3
 * @see [google.cloud.tasks.v2beta3.DeleteTaskRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/tasks/v2beta3/cloudtasks.proto}
 */
var DeleteTaskRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request message for forcing a task to run now using
 * RunTask.
 *
 * @property {string} name
 *   Required.
 *
 *   The task name. For example:
 *   `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID`
 *
 * @property {number} responseView
 *   The response_view specifies which subset of the Task will be
 *   returned.
 *
 *   By default response_view is BASIC; not all
 *   information is retrieved by default because some data, such as
 *   payloads, might be desirable to return only when needed because
 *   of its large size or because of the sensitivity of data that it
 *   contains.
 *
 *   Authorization for FULL requires
 *   `cloudtasks.tasks.fullView` [Google IAM](https://cloud.google.com/iam/)
 *   permission on the Task resource.
 *
 *   The number should be among the values of [View]{@link google.cloud.tasks.v2beta3.View}
 *
 * @typedef RunTaskRequest
 * @memberof google.cloud.tasks.v2beta3
 * @see [google.cloud.tasks.v2beta3.RunTaskRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/tasks/v2beta3/cloudtasks.proto}
 */
var RunTaskRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};