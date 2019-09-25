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
 * Workflow program to be executed by Workflows.
 *
 * @property {string} name
 *   Name of the workflow resource, for example,
 *   "projects/project1/locations/us-central1/workflows/workflow1".
 *
 * @property {string} description
 *   Description of the workflow provided by the user.
 *
 * @property {string} sourceContents
 *   Workflow code to be executed.
 *
 * @property {number} state
 *   Output only. State of the workflow deployment.
 *
 *   The number should be among the values of [State]{@link google.cloud.workflows.v1alpha1.State}
 *
 * @property {number} versionId
 *   Output only. The version identifier of the workflow. When the workflow gets
 *   created, version_id is set to 1. Each deployment attempt increases the
 *   version by 1.
 *
 * @property {Object} createTime
 *   Output only. The timestamp of when the workflow was created.
 *
 *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
 *
 * @property {Object} updateTime
 *   Output only. The last update timestamp of the workflow.
 *
 *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
 *
 * @property {Object.<string, string>} labels
 *   Labels associated with this workflow.
 *
 * @typedef Workflow
 * @memberof google.cloud.workflows.v1alpha1
 * @see [google.cloud.workflows.v1alpha1.Workflow definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/workflows/v1alpha1/workflows.proto}
 */
const Workflow = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * Describes the current state of workflow deployment.
   *
   * @enum {number}
   * @memberof google.cloud.workflows.v1alpha1
   */
  State: {

    /**
     * Invalid state.
     */
    STATE_UNSPECIFIED: 0,

    /**
     * The workflow has been deployed successfully and is serving.
     */
    ACTIVE: 1,

    /**
     * The workflow failed to deploy successfully and is not serving.
     */
    FAILED: 2,

    /**
     * The workflow is being deployed.
     */
    DEPLOYING: 3,

    /**
     * The workflow is being deleted.
     */
    DELETING: 4
  }
};

/**
 * Request for the `ListWorkflows` method.
 *
 * @property {string} parent
 *   Required. Project and location from which the workflows should be listed,
 *   for example, "projects/project1/locations/us-central1".
 *
 * @property {number} pageSize
 *   Maximum number of workflows to return per call.
 *
 * @property {string} pageToken
 *   The value returned by the last
 *   `ListWorkflowsResponse` indicates that
 *   this is a continuation of a prior `ListWorkflows` call, and that the
 *   system should return the next page of data.
 *
 * @property {string} filter
 *
 * @property {string} orderBy
 *
 * @typedef ListWorkflowsRequest
 * @memberof google.cloud.workflows.v1alpha1
 * @see [google.cloud.workflows.v1alpha1.ListWorkflowsRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/workflows/v1alpha1/workflows.proto}
 */
const ListWorkflowsRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Response for the `ListWorkflows` method.
 *
 * @property {Object[]} workflows
 *   The workflows which match the request.
 *
 *   This object should have the same structure as [Workflow]{@link google.cloud.workflows.v1alpha1.Workflow}
 *
 * @property {string} nextPageToken
 *   If not empty, indicates that there may be more workflows that match
 *   the request; this value should be passed in a new
 *   google.cloud.workflows.v1alpha1.Workflow
 *   to get more workflows.
 *
 * @property {string[]} unreachable
 *   Locations that could not be reached.
 *
 * @typedef ListWorkflowsResponse
 * @memberof google.cloud.workflows.v1alpha1
 * @see [google.cloud.workflows.v1alpha1.ListWorkflowsResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/workflows/v1alpha1/workflows.proto}
 */
const ListWorkflowsResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request for the `GetWorkflow` method.
 *
 * @property {string} name
 *   Required. Name of the workflow which information should be
 *   retrieved, for example,
 *   "projects/project1/locations/us-central1/workflows/workflow1".
 *
 * @typedef GetWorkflowRequest
 * @memberof google.cloud.workflows.v1alpha1
 * @see [google.cloud.workflows.v1alpha1.GetWorkflowRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/workflows/v1alpha1/workflows.proto}
 */
const GetWorkflowRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request for the `CreateWorkflow` method.
 *
 * @property {string} parent
 *   Required. Project and location in which the workflow should be created, for
 *   example "projects/project1/locations/us-central1".
 *
 * @property {Object} workflow
 *   Required. Workflow to be created.
 *
 *   This object should have the same structure as [Workflow]{@link google.cloud.workflows.v1alpha1.Workflow}
 *
 * @property {string} workflowId
 *   Required. The ID of the workflow to be created. It has to fulfil the
 *   following requirements:
 *
 *   * Must contain only lowercase letters, numbers, and hyphens.
 *   * Must start with a letter.
 *   * Must be between 1-64 characters.
 *   * Must end with a number or a letter.
 *   * Must be unique within the customer project / location.
 *
 * @typedef CreateWorkflowRequest
 * @memberof google.cloud.workflows.v1alpha1
 * @see [google.cloud.workflows.v1alpha1.CreateWorkflowRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/workflows/v1alpha1/workflows.proto}
 */
const CreateWorkflowRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request for the `DeleteWorkflow` method.
 *
 * @property {string} name
 *   Required. Name of the workflow which should be deleted, for example,
 *   "projects/project1/locations/us-central1/workflows/workflow1".
 *
 * @typedef DeleteWorkflowRequest
 * @memberof google.cloud.workflows.v1alpha1
 * @see [google.cloud.workflows.v1alpha1.DeleteWorkflowRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/workflows/v1alpha1/workflows.proto}
 */
const DeleteWorkflowRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Request for the `UpdateWorkflow` method.
 *
 * @property {Object} workflow
 *   Required. Workflow to be updated.
 *
 *   This object should have the same structure as [Workflow]{@link google.cloud.workflows.v1alpha1.Workflow}
 *
 * @property {Object} updateMask
 *   List of the only fields to be updated. If not present, the entire workflow
 *   will be updated.
 *
 *   This object should have the same structure as [FieldMask]{@link google.protobuf.FieldMask}
 *
 * @typedef UpdateWorkflowRequest
 * @memberof google.cloud.workflows.v1alpha1
 * @see [google.cloud.workflows.v1alpha1.UpdateWorkflowRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/workflows/v1alpha1/workflows.proto}
 */
const UpdateWorkflowRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Represents the metadata of the long-running operation.
 *
 * @property {Object} createTime
 *   Output only. The time the operation was created.
 *
 *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
 *
 * @property {Object} endTime
 *   Output only. The time the operation finished running.
 *
 *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
 *
 * @property {string} target
 *   Output only. Server-defined resource path for the target of the operation.
 *
 * @property {string} verb
 *   Output only. Name of the verb executed by the operation.
 *
 * @property {string} statusDetail
 *   Output only. Human-readable status of the operation, if any.
 *
 * @property {boolean} cancelRequested
 *   Output only. Identifies whether the user has requested cancellation
 *   of the operation. Operations that have successfully been cancelled
 *   have Operation.error value with a google.rpc.Status.code of 1,
 *   corresponding to `Code.CANCELLED`.
 *
 * @property {string} apiVersion
 *   Output only. API version used to start the operation.
 *
 * @typedef OperationMetadata
 * @memberof google.cloud.workflows.v1alpha1
 * @see [google.cloud.workflows.v1alpha1.OperationMetadata definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/workflows/v1alpha1/workflows.proto}
 */
const OperationMetadata = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};