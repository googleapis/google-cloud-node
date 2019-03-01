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
 * Request message for listing jobs using
 * ListJobs.
 *
 * @property {string} parent
 *   Required.
 *
 *   The location name. For example:
 *   `projects/PROJECT_ID/locations/LOCATION_ID`.
 *
 * @property {number} pageSize
 *   Requested page size.
 *
 *   The maximum page size is 500. If unspecified, the page size will
 *   be the maximum. Fewer jobs than requested might be returned,
 *   even if more jobs exist; use next_page_token to determine if more
 *   jobs exist.
 *
 * @property {string} pageToken
 *   A token identifying a page of results the server will return. To
 *   request the first page results, page_token must be empty. To
 *   request the next page of results, page_token must be the value of
 *   next_page_token
 *   returned from the previous call to
 *   ListJobs. It is
 *   an error to switch the value of
 *   filter or
 *   order_by while
 *   iterating through pages.
 *
 * @typedef ListJobsRequest
 * @memberof google.cloud.scheduler.v1beta1
 * @see [google.cloud.scheduler.v1beta1.ListJobsRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/scheduler/v1beta1/cloudscheduler.proto}
 */
const ListJobsRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Response message for listing jobs using
 * ListJobs.
 *
 * @property {Object[]} jobs
 *   The list of jobs.
 *
 *   This object should have the same structure as [Job]{@link google.cloud.scheduler.v1beta1.Job}
 *
 * @property {string} nextPageToken
 *   A token to retrieve next page of results. Pass this value in the
 *   page_token
 *   field in the subsequent call to
 *   ListJobs to
 *   retrieve the next page of results. If this is empty it indicates that there
 *   are no more results through which to paginate.
 *
 *   The page token is valid for only 2 hours.
 *
 * @typedef ListJobsResponse
 * @memberof google.cloud.scheduler.v1beta1
 * @see [google.cloud.scheduler.v1beta1.ListJobsResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/scheduler/v1beta1/cloudscheduler.proto}
 */
const ListJobsResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request message for
 * GetJob.
 *
 * @property {string} name
 *   Required.
 *
 *   The job name. For example:
 *   `projects/PROJECT_ID/locations/LOCATION_ID/jobs/JOB_ID`.
 *
 * @typedef GetJobRequest
 * @memberof google.cloud.scheduler.v1beta1
 * @see [google.cloud.scheduler.v1beta1.GetJobRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/scheduler/v1beta1/cloudscheduler.proto}
 */
const GetJobRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request message for
 * CreateJob.
 *
 * @property {string} parent
 *   Required.
 *
 *   The location name. For example:
 *   `projects/PROJECT_ID/locations/LOCATION_ID`.
 *
 * @property {Object} job
 *   Required.
 *
 *   The job to add. The user can optionally specify a name for the
 *   job in name.
 *   name cannot be the same as an
 *   existing job. If a name is not specified then the system will
 *   generate a random unique name that will be returned
 *   (name) in the response.
 *
 *   This object should have the same structure as [Job]{@link google.cloud.scheduler.v1beta1.Job}
 *
 * @typedef CreateJobRequest
 * @memberof google.cloud.scheduler.v1beta1
 * @see [google.cloud.scheduler.v1beta1.CreateJobRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/scheduler/v1beta1/cloudscheduler.proto}
 */
const CreateJobRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request message for
 * UpdateJob.
 *
 * @property {Object} job
 *   Required.
 *
 *   The new job properties. name
 *   must be specified.
 *
 *   Output only fields cannot be modified using UpdateJob.
 *   Any value specified for an output only field will be ignored.
 *
 *   This object should have the same structure as [Job]{@link google.cloud.scheduler.v1beta1.Job}
 *
 * @property {Object} updateMask
 *   A  mask used to specify which fields of the job are being updated.
 *
 *   This object should have the same structure as [FieldMask]{@link google.protobuf.FieldMask}
 *
 * @typedef UpdateJobRequest
 * @memberof google.cloud.scheduler.v1beta1
 * @see [google.cloud.scheduler.v1beta1.UpdateJobRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/scheduler/v1beta1/cloudscheduler.proto}
 */
const UpdateJobRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request message for deleting a job using
 * DeleteJob.
 *
 * @property {string} name
 *   Required.
 *
 *   The job name. For example:
 *   `projects/PROJECT_ID/locations/LOCATION_ID/jobs/JOB_ID`.
 *
 * @typedef DeleteJobRequest
 * @memberof google.cloud.scheduler.v1beta1
 * @see [google.cloud.scheduler.v1beta1.DeleteJobRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/scheduler/v1beta1/cloudscheduler.proto}
 */
const DeleteJobRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request message for
 * PauseJob.
 *
 * @property {string} name
 *   Required.
 *
 *   The job name. For example:
 *   `projects/PROJECT_ID/locations/LOCATION_ID/jobs/JOB_ID`.
 *
 * @typedef PauseJobRequest
 * @memberof google.cloud.scheduler.v1beta1
 * @see [google.cloud.scheduler.v1beta1.PauseJobRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/scheduler/v1beta1/cloudscheduler.proto}
 */
const PauseJobRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request message for
 * ResumeJob.
 *
 * @property {string} name
 *   Required.
 *
 *   The job name. For example:
 *   `projects/PROJECT_ID/locations/LOCATION_ID/jobs/JOB_ID`.
 *
 * @typedef ResumeJobRequest
 * @memberof google.cloud.scheduler.v1beta1
 * @see [google.cloud.scheduler.v1beta1.ResumeJobRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/scheduler/v1beta1/cloudscheduler.proto}
 */
const ResumeJobRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request message for forcing a job to run now using
 * RunJob.
 *
 * @property {string} name
 *   Required.
 *
 *   The job name. For example:
 *   `projects/PROJECT_ID/locations/LOCATION_ID/jobs/JOB_ID`.
 *
 * @typedef RunJobRequest
 * @memberof google.cloud.scheduler.v1beta1
 * @see [google.cloud.scheduler.v1beta1.RunJobRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/scheduler/v1beta1/cloudscheduler.proto}
 */
const RunJobRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};