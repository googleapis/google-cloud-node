// Copyright 2020 Google LLC
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
 * A Dataproc workflow template resource.
 *
 * @property {string} id
 *
 * @property {string} name
 *   Output only. The resource name of the workflow template, as described
 *   in https://cloud.google.com/apis/design/resource_names.
 *
 *   * For `projects.regions.workflowTemplates`, the resource name of the
 *     template has the following format:
 *     `projects/{project_id}/regions/{region}/workflowTemplates/{template_id}`
 *
 *   * For `projects.locations.workflowTemplates`, the resource name of the
 *     template has the following format:
 *     `projects/{project_id}/locations/{location}/workflowTemplates/{template_id}`
 *
 * @property {number} version
 *   Optional. Used to perform a consistent read-modify-write.
 *
 *   This field should be left blank for a `CreateWorkflowTemplate` request. It
 *   is required for an `UpdateWorkflowTemplate` request, and must match the
 *   current server version. A typical update template flow would fetch the
 *   current template with a `GetWorkflowTemplate` request, which will return
 *   the current template with the `version` field filled in with the
 *   current server version. The user updates other fields in the template,
 *   then returns it as part of the `UpdateWorkflowTemplate` request.
 *
 * @property {Object} createTime
 *   Output only. The time template was created.
 *
 *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
 *
 * @property {Object} updateTime
 *   Output only. The time template was last updated.
 *
 *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
 *
 * @property {Object.<string, string>} labels
 *   Optional. The labels to associate with this template. These labels
 *   will be propagated to all jobs and clusters created by the workflow
 *   instance.
 *
 *   Label **keys** must contain 1 to 63 characters, and must conform to
 *   [RFC 1035](https://www.ietf.org/rfc/rfc1035.txt).
 *
 *   Label **values** may be empty, but, if present, must contain 1 to 63
 *   characters, and must conform to
 *   [RFC 1035](https://www.ietf.org/rfc/rfc1035.txt).
 *
 *   No more than 32 labels can be associated with a template.
 *
 * @property {Object} placement
 *   Required. WorkflowTemplate scheduling information.
 *
 *   This object should have the same structure as [WorkflowTemplatePlacement]{@link google.cloud.dataproc.v1.WorkflowTemplatePlacement}
 *
 * @property {Object[]} jobs
 *   Required. The Directed Acyclic Graph of Jobs to submit.
 *
 *   This object should have the same structure as [OrderedJob]{@link google.cloud.dataproc.v1.OrderedJob}
 *
 * @property {Object[]} parameters
 *   Optional. emplate parameters whose values are substituted into the
 *   template. Values for parameters must be provided when the template is
 *   instantiated.
 *
 *   This object should have the same structure as [TemplateParameter]{@link google.cloud.dataproc.v1.TemplateParameter}
 *
 * @typedef WorkflowTemplate
 * @memberof google.cloud.dataproc.v1
 * @see [google.cloud.dataproc.v1.WorkflowTemplate definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dataproc/v1/workflow_templates.proto}
 */
const WorkflowTemplate = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Specifies workflow execution target.
 *
 * Either `managed_cluster` or `cluster_selector` is required.
 *
 * @property {Object} managedCluster
 *   A cluster that is managed by the workflow.
 *
 *   This object should have the same structure as [ManagedCluster]{@link google.cloud.dataproc.v1.ManagedCluster}
 *
 * @property {Object} clusterSelector
 *   Optional. A selector that chooses target cluster for jobs based
 *   on metadata.
 *
 *   The selector is evaluated at the time each job is submitted.
 *
 *   This object should have the same structure as [ClusterSelector]{@link google.cloud.dataproc.v1.ClusterSelector}
 *
 * @typedef WorkflowTemplatePlacement
 * @memberof google.cloud.dataproc.v1
 * @see [google.cloud.dataproc.v1.WorkflowTemplatePlacement definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dataproc/v1/workflow_templates.proto}
 */
const WorkflowTemplatePlacement = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Cluster that is managed by the workflow.
 *
 * @property {string} clusterName
 *   Required. The cluster name prefix. A unique cluster name will be formed by
 *   appending a random suffix.
 *
 *   The name must contain only lower-case letters (a-z), numbers (0-9),
 *   and hyphens (-). Must begin with a letter. Cannot begin or end with
 *   hyphen. Must consist of between 2 and 35 characters.
 *
 * @property {Object} config
 *   Required. The cluster configuration.
 *
 *   This object should have the same structure as [ClusterConfig]{@link google.cloud.dataproc.v1.ClusterConfig}
 *
 * @property {Object.<string, string>} labels
 *   Optional. The labels to associate with this cluster.
 *
 *   Label keys must be between 1 and 63 characters long, and must conform to
 *   the following PCRE regular expression:
 *   [\p{Ll}\p{Lo}][\p{Ll}\p{Lo}\p{N}_-]{0,62}
 *
 *   Label values must be between 1 and 63 characters long, and must conform to
 *   the following PCRE regular expression: [\p{Ll}\p{Lo}\p{N}_-]{0,63}
 *
 *   No more than 32 labels can be associated with a given cluster.
 *
 * @typedef ManagedCluster
 * @memberof google.cloud.dataproc.v1
 * @see [google.cloud.dataproc.v1.ManagedCluster definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dataproc/v1/workflow_templates.proto}
 */
const ManagedCluster = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * A selector that chooses target cluster for jobs based on metadata.
 *
 * @property {string} zone
 *   Optional. The zone where workflow process executes. This parameter does not
 *   affect the selection of the cluster.
 *
 *   If unspecified, the zone of the first cluster matching the selector
 *   is used.
 *
 * @property {Object.<string, string>} clusterLabels
 *   Required. The cluster labels. Cluster must have all labels
 *   to match.
 *
 * @typedef ClusterSelector
 * @memberof google.cloud.dataproc.v1
 * @see [google.cloud.dataproc.v1.ClusterSelector definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dataproc/v1/workflow_templates.proto}
 */
const ClusterSelector = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * A job executed by the workflow.
 *
 * @property {string} stepId
 *   Required. The step id. The id must be unique among all jobs
 *   within the template.
 *
 *   The step id is used as prefix for job id, as job
 *   `goog-dataproc-workflow-step-id` label, and in
 *   prerequisiteStepIds field from other
 *   steps.
 *
 *   The id must contain only letters (a-z, A-Z), numbers (0-9),
 *   underscores (_), and hyphens (-). Cannot begin or end with underscore
 *   or hyphen. Must consist of between 3 and 50 characters.
 *
 * @property {Object} hadoopJob
 *   Job is a Hadoop job.
 *
 *   This object should have the same structure as [HadoopJob]{@link google.cloud.dataproc.v1.HadoopJob}
 *
 * @property {Object} sparkJob
 *   Job is a Spark job.
 *
 *   This object should have the same structure as [SparkJob]{@link google.cloud.dataproc.v1.SparkJob}
 *
 * @property {Object} pysparkJob
 *   Job is a Pyspark job.
 *
 *   This object should have the same structure as [PySparkJob]{@link google.cloud.dataproc.v1.PySparkJob}
 *
 * @property {Object} hiveJob
 *   Job is a Hive job.
 *
 *   This object should have the same structure as [HiveJob]{@link google.cloud.dataproc.v1.HiveJob}
 *
 * @property {Object} pigJob
 *   Job is a Pig job.
 *
 *   This object should have the same structure as [PigJob]{@link google.cloud.dataproc.v1.PigJob}
 *
 * @property {Object} sparkSqlJob
 *   Job is a SparkSql job.
 *
 *   This object should have the same structure as [SparkSqlJob]{@link google.cloud.dataproc.v1.SparkSqlJob}
 *
 * @property {Object.<string, string>} labels
 *   Optional. The labels to associate with this job.
 *
 *   Label keys must be between 1 and 63 characters long, and must conform to
 *   the following regular expression:
 *   [\p{Ll}\p{Lo}][\p{Ll}\p{Lo}\p{N}_-]{0,62}
 *
 *   Label values must be between 1 and 63 characters long, and must conform to
 *   the following regular expression: [\p{Ll}\p{Lo}\p{N}_-]{0,63}
 *
 *   No more than 32 labels can be associated with a given job.
 *
 * @property {Object} scheduling
 *   Optional. Job scheduling configuration.
 *
 *   This object should have the same structure as [JobScheduling]{@link google.cloud.dataproc.v1.JobScheduling}
 *
 * @property {string[]} prerequisiteStepIds
 *   Optional. The optional list of prerequisite job step_ids.
 *   If not specified, the job will start at the beginning of workflow.
 *
 * @typedef OrderedJob
 * @memberof google.cloud.dataproc.v1
 * @see [google.cloud.dataproc.v1.OrderedJob definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dataproc/v1/workflow_templates.proto}
 */
const OrderedJob = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * A configurable parameter that replaces one or more fields in the template.
 * Parameterizable fields:
 * - Labels
 * - File uris
 * - Job properties
 * - Job arguments
 * - Script variables
 * - Main class (in HadoopJob and SparkJob)
 * - Zone (in ClusterSelector)
 *
 * @property {string} name
 *   Required. Parameter name.
 *   The parameter name is used as the key, and paired with the
 *   parameter value, which are passed to the template when the template
 *   is instantiated.
 *   The name must contain only capital letters (A-Z), numbers (0-9), and
 *   underscores (_), and must not start with a number. The maximum length is
 *   40 characters.
 *
 * @property {string[]} fields
 *   Required. Paths to all fields that the parameter replaces.
 *   A field is allowed to appear in at most one parameter's list of field
 *   paths.
 *
 *   A field path is similar in syntax to a google.protobuf.FieldMask.
 *   For example, a field path that references the zone field of a workflow
 *   template's cluster selector would be specified as
 *   `placement.clusterSelector.zone`.
 *
 *   Also, field paths can reference fields using the following syntax:
 *
 *   * Values in maps can be referenced by key:
 *       * labels['key']
 *       * placement.clusterSelector.clusterLabels['key']
 *       * placement.managedCluster.labels['key']
 *       * placement.clusterSelector.clusterLabels['key']
 *       * jobs['step-id'].labels['key']
 *
 *   * Jobs in the jobs list can be referenced by step-id:
 *       * jobs['step-id'].hadoopJob.mainJarFileUri
 *       * jobs['step-id'].hiveJob.queryFileUri
 *       * jobs['step-id'].pySparkJob.mainPythonFileUri
 *       * jobs['step-id'].hadoopJob.jarFileUris[0]
 *       * jobs['step-id'].hadoopJob.archiveUris[0]
 *       * jobs['step-id'].hadoopJob.fileUris[0]
 *       * jobs['step-id'].pySparkJob.pythonFileUris[0]
 *
 *   * Items in repeated fields can be referenced by a zero-based index:
 *       * jobs['step-id'].sparkJob.args[0]
 *
 *   * Other examples:
 *       * jobs['step-id'].hadoopJob.properties['key']
 *       * jobs['step-id'].hadoopJob.args[0]
 *       * jobs['step-id'].hiveJob.scriptVariables['key']
 *       * jobs['step-id'].hadoopJob.mainJarFileUri
 *       * placement.clusterSelector.zone
 *
 *   It may not be possible to parameterize maps and repeated fields in their
 *   entirety since only individual map values and individual items in repeated
 *   fields can be referenced. For example, the following field paths are
 *   invalid:
 *
 *   - placement.clusterSelector.clusterLabels
 *   - jobs['step-id'].sparkJob.args
 *
 * @property {string} description
 *   Optional. Brief description of the parameter.
 *   Must not exceed 1024 characters.
 *
 * @property {Object} validation
 *   Optional. Validation rules to be applied to this parameter's value.
 *
 *   This object should have the same structure as [ParameterValidation]{@link google.cloud.dataproc.v1.ParameterValidation}
 *
 * @typedef TemplateParameter
 * @memberof google.cloud.dataproc.v1
 * @see [google.cloud.dataproc.v1.TemplateParameter definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dataproc/v1/workflow_templates.proto}
 */
const TemplateParameter = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Configuration for parameter validation.
 *
 * @property {Object} regex
 *   Validation based on regular expressions.
 *
 *   This object should have the same structure as [RegexValidation]{@link google.cloud.dataproc.v1.RegexValidation}
 *
 * @property {Object} values
 *   Validation based on a list of allowed values.
 *
 *   This object should have the same structure as [ValueValidation]{@link google.cloud.dataproc.v1.ValueValidation}
 *
 * @typedef ParameterValidation
 * @memberof google.cloud.dataproc.v1
 * @see [google.cloud.dataproc.v1.ParameterValidation definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dataproc/v1/workflow_templates.proto}
 */
const ParameterValidation = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Validation based on regular expressions.
 *
 * @property {string[]} regexes
 *   Required. RE2 regular expressions used to validate the parameter's value.
 *   The value must match the regex in its entirety (substring
 *   matches are not sufficient).
 *
 * @typedef RegexValidation
 * @memberof google.cloud.dataproc.v1
 * @see [google.cloud.dataproc.v1.RegexValidation definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dataproc/v1/workflow_templates.proto}
 */
const RegexValidation = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * Validation based on a list of allowed values.
 *
 * @property {string[]} values
 *   Required. List of allowed values for the parameter.
 *
 * @typedef ValueValidation
 * @memberof google.cloud.dataproc.v1
 * @see [google.cloud.dataproc.v1.ValueValidation definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dataproc/v1/workflow_templates.proto}
 */
const ValueValidation = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * A Dataproc workflow template resource.
 *
 * @property {string} template
 *   Output only. The resource name of the workflow template as described
 *   in https://cloud.google.com/apis/design/resource_names.
 *
 *   * For `projects.regions.workflowTemplates`, the resource name of the
 *     template has the following format:
 *     `projects/{project_id}/regions/{region}/workflowTemplates/{template_id}`
 *
 *   * For `projects.locations.workflowTemplates`, the resource name of the
 *     template has the following format:
 *     `projects/{project_id}/locations/{location}/workflowTemplates/{template_id}`
 *
 * @property {number} version
 *   Output only. The version of template at the time of
 *   workflow instantiation.
 *
 * @property {Object} createCluster
 *   Output only. The create cluster operation metadata.
 *
 *   This object should have the same structure as [ClusterOperation]{@link google.cloud.dataproc.v1.ClusterOperation}
 *
 * @property {Object} graph
 *   Output only. The workflow graph.
 *
 *   This object should have the same structure as [WorkflowGraph]{@link google.cloud.dataproc.v1.WorkflowGraph}
 *
 * @property {Object} deleteCluster
 *   Output only. The delete cluster operation metadata.
 *
 *   This object should have the same structure as [ClusterOperation]{@link google.cloud.dataproc.v1.ClusterOperation}
 *
 * @property {number} state
 *   Output only. The workflow state.
 *
 *   The number should be among the values of [State]{@link google.cloud.dataproc.v1.State}
 *
 * @property {string} clusterName
 *   Output only. The name of the target cluster.
 *
 * @property {Object.<string, string>} parameters
 *   Map from parameter names to values that were used for those parameters.
 *
 * @property {Object} startTime
 *   Output only. Workflow start time.
 *
 *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
 *
 * @property {Object} endTime
 *   Output only. Workflow end time.
 *
 *   This object should have the same structure as [Timestamp]{@link google.protobuf.Timestamp}
 *
 * @property {string} clusterUuid
 *   Output only. The UUID of target cluster.
 *
 * @typedef WorkflowMetadata
 * @memberof google.cloud.dataproc.v1
 * @see [google.cloud.dataproc.v1.WorkflowMetadata definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dataproc/v1/workflow_templates.proto}
 */
const WorkflowMetadata = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * The operation state.
   *
   * @enum {number}
   * @memberof google.cloud.dataproc.v1
   */
  State: {

    /**
     * Unused.
     */
    UNKNOWN: 0,

    /**
     * The operation has been created.
     */
    PENDING: 1,

    /**
     * The operation is running.
     */
    RUNNING: 2,

    /**
     * The operation is done; either cancelled or completed.
     */
    DONE: 3
  }
};

/**
 * The cluster operation triggered by a workflow.
 *
 * @property {string} operationId
 *   Output only. The id of the cluster operation.
 *
 * @property {string} error
 *   Output only. Error, if operation failed.
 *
 * @property {boolean} done
 *   Output only. Indicates the operation is done.
 *
 * @typedef ClusterOperation
 * @memberof google.cloud.dataproc.v1
 * @see [google.cloud.dataproc.v1.ClusterOperation definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dataproc/v1/workflow_templates.proto}
 */
const ClusterOperation = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The workflow graph.
 *
 * @property {Object[]} nodes
 *   Output only. The workflow nodes.
 *
 *   This object should have the same structure as [WorkflowNode]{@link google.cloud.dataproc.v1.WorkflowNode}
 *
 * @typedef WorkflowGraph
 * @memberof google.cloud.dataproc.v1
 * @see [google.cloud.dataproc.v1.WorkflowGraph definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dataproc/v1/workflow_templates.proto}
 */
const WorkflowGraph = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The workflow node.
 *
 * @property {string} stepId
 *   Output only. The name of the node.
 *
 * @property {string[]} prerequisiteStepIds
 *   Output only. Node's prerequisite nodes.
 *
 * @property {string} jobId
 *   Output only. The job id; populated after the node enters RUNNING state.
 *
 * @property {number} state
 *   Output only. The node state.
 *
 *   The number should be among the values of [NodeState]{@link google.cloud.dataproc.v1.NodeState}
 *
 * @property {string} error
 *   Output only. The error detail.
 *
 * @typedef WorkflowNode
 * @memberof google.cloud.dataproc.v1
 * @see [google.cloud.dataproc.v1.WorkflowNode definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dataproc/v1/workflow_templates.proto}
 */
const WorkflowNode = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * The workflow node state.
   *
   * @enum {number}
   * @memberof google.cloud.dataproc.v1
   */
  NodeState: {

    /**
     * State is unspecified.
     */
    NODE_STATE_UNSPECIFIED: 0,

    /**
     * The node is awaiting prerequisite node to finish.
     */
    BLOCKED: 1,

    /**
     * The node is runnable but not running.
     */
    RUNNABLE: 2,

    /**
     * The node is running.
     */
    RUNNING: 3,

    /**
     * The node completed successfully.
     */
    COMPLETED: 4,

    /**
     * The node failed. A node can be marked FAILED because
     * its ancestor or peer failed.
     */
    FAILED: 5
  }
};

/**
 * A request to create a workflow template.
 *
 * @property {string} parent
 *   Required. The resource name of the region or location, as described
 *   in https://cloud.google.com/apis/design/resource_names.
 *
 *   * For `projects.regions.workflowTemplates,create`, the resource name of the
 *     region has the following format:
 *     `projects/{project_id}/regions/{region}`
 *
 *   * For `projects.locations.workflowTemplates.create`, the resource name of
 *     the location has the following format:
 *     `projects/{project_id}/locations/{location}`
 *
 * @property {Object} template
 *   Required. The Dataproc workflow template to create.
 *
 *   This object should have the same structure as [WorkflowTemplate]{@link google.cloud.dataproc.v1.WorkflowTemplate}
 *
 * @typedef CreateWorkflowTemplateRequest
 * @memberof google.cloud.dataproc.v1
 * @see [google.cloud.dataproc.v1.CreateWorkflowTemplateRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dataproc/v1/workflow_templates.proto}
 */
const CreateWorkflowTemplateRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * A request to fetch a workflow template.
 *
 * @property {string} name
 *   Required. The resource name of the workflow template, as described
 *   in https://cloud.google.com/apis/design/resource_names.
 *
 *   * For `projects.regions.workflowTemplates.get`, the resource name of the
 *     template has the following format:
 *     `projects/{project_id}/regions/{region}/workflowTemplates/{template_id}`
 *
 *   * For `projects.locations.workflowTemplates.get`, the resource name of the
 *     template has the following format:
 *     `projects/{project_id}/locations/{location}/workflowTemplates/{template_id}`
 *
 * @property {number} version
 *   Optional. The version of workflow template to retrieve. Only previously
 *   instantiated versions can be retrieved.
 *
 *   If unspecified, retrieves the current version.
 *
 * @typedef GetWorkflowTemplateRequest
 * @memberof google.cloud.dataproc.v1
 * @see [google.cloud.dataproc.v1.GetWorkflowTemplateRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dataproc/v1/workflow_templates.proto}
 */
const GetWorkflowTemplateRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * A request to instantiate a workflow template.
 *
 * @property {string} name
 *   Required. The resource name of the workflow template, as described
 *   in https://cloud.google.com/apis/design/resource_names.
 *
 *   * For `projects.regions.workflowTemplates.instantiate`, the resource name
 *   of the template has the following format:
 *     `projects/{project_id}/regions/{region}/workflowTemplates/{template_id}`
 *
 *   * For `projects.locations.workflowTemplates.instantiate`, the resource name
 *     of the template has the following format:
 *     `projects/{project_id}/locations/{location}/workflowTemplates/{template_id}`
 *
 * @property {number} version
 *   Optional. The version of workflow template to instantiate. If specified,
 *   the workflow will be instantiated only if the current version of
 *   the workflow template has the supplied version.
 *
 *   This option cannot be used to instantiate a previous version of
 *   workflow template.
 *
 * @property {string} requestId
 *   Optional. A tag that prevents multiple concurrent workflow
 *   instances with the same tag from running. This mitigates risk of
 *   concurrent instances started due to retries.
 *
 *   It is recommended to always set this value to a
 *   [UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier).
 *
 *   The tag must contain only letters (a-z, A-Z), numbers (0-9),
 *   underscores (_), and hyphens (-). The maximum length is 40 characters.
 *
 * @property {Object.<string, string>} parameters
 *   Optional. Map from parameter names to values that should be used for those
 *   parameters. Values may not exceed 100 characters.
 *
 * @typedef InstantiateWorkflowTemplateRequest
 * @memberof google.cloud.dataproc.v1
 * @see [google.cloud.dataproc.v1.InstantiateWorkflowTemplateRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dataproc/v1/workflow_templates.proto}
 */
const InstantiateWorkflowTemplateRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * A request to instantiate an inline workflow template.
 *
 * @property {string} parent
 *   Required. The resource name of the region or location, as described
 *   in https://cloud.google.com/apis/design/resource_names.
 *
 *   * For `projects.regions.workflowTemplates,instantiateinline`, the resource
 *     name of the region has the following format:
 *     `projects/{project_id}/regions/{region}`
 *
 *   * For `projects.locations.workflowTemplates.instantiateinline`, the
 *     resource name of the location has the following format:
 *     `projects/{project_id}/locations/{location}`
 *
 * @property {Object} template
 *   Required. The workflow template to instantiate.
 *
 *   This object should have the same structure as [WorkflowTemplate]{@link google.cloud.dataproc.v1.WorkflowTemplate}
 *
 * @property {string} requestId
 *   Optional. A tag that prevents multiple concurrent workflow
 *   instances with the same tag from running. This mitigates risk of
 *   concurrent instances started due to retries.
 *
 *   It is recommended to always set this value to a
 *   [UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier).
 *
 *   The tag must contain only letters (a-z, A-Z), numbers (0-9),
 *   underscores (_), and hyphens (-). The maximum length is 40 characters.
 *
 * @typedef InstantiateInlineWorkflowTemplateRequest
 * @memberof google.cloud.dataproc.v1
 * @see [google.cloud.dataproc.v1.InstantiateInlineWorkflowTemplateRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dataproc/v1/workflow_templates.proto}
 */
const InstantiateInlineWorkflowTemplateRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * A request to update a workflow template.
 *
 * @property {Object} template
 *   Required. The updated workflow template.
 *
 *   The `template.version` field must match the current version.
 *
 *   This object should have the same structure as [WorkflowTemplate]{@link google.cloud.dataproc.v1.WorkflowTemplate}
 *
 * @typedef UpdateWorkflowTemplateRequest
 * @memberof google.cloud.dataproc.v1
 * @see [google.cloud.dataproc.v1.UpdateWorkflowTemplateRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dataproc/v1/workflow_templates.proto}
 */
const UpdateWorkflowTemplateRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * A request to list workflow templates in a project.
 *
 * @property {string} parent
 *   Required. The resource name of the region or location, as described
 *   in https://cloud.google.com/apis/design/resource_names.
 *
 *   * For `projects.regions.workflowTemplates,list`, the resource
 *     name of the region has the following format:
 *     `projects/{project_id}/regions/{region}`
 *
 *   * For `projects.locations.workflowTemplates.list`, the
 *     resource name of the location has the following format:
 *     `projects/{project_id}/locations/{location}`
 *
 * @property {number} pageSize
 *   Optional. The maximum number of results to return in each response.
 *
 * @property {string} pageToken
 *   Optional. The page token, returned by a previous call, to request the
 *   next page of results.
 *
 * @typedef ListWorkflowTemplatesRequest
 * @memberof google.cloud.dataproc.v1
 * @see [google.cloud.dataproc.v1.ListWorkflowTemplatesRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dataproc/v1/workflow_templates.proto}
 */
const ListWorkflowTemplatesRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * A response to a request to list workflow templates in a project.
 *
 * @property {Object[]} templates
 *   Output only. WorkflowTemplates list.
 *
 *   This object should have the same structure as [WorkflowTemplate]{@link google.cloud.dataproc.v1.WorkflowTemplate}
 *
 * @property {string} nextPageToken
 *   Output only. This token is included in the response if there are more
 *   results to fetch. To fetch additional results, provide this value as the
 *   page_token in a subsequent <code>ListWorkflowTemplatesRequest</code>.
 *
 * @typedef ListWorkflowTemplatesResponse
 * @memberof google.cloud.dataproc.v1
 * @see [google.cloud.dataproc.v1.ListWorkflowTemplatesResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dataproc/v1/workflow_templates.proto}
 */
const ListWorkflowTemplatesResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * A request to delete a workflow template.
 *
 * Currently started workflows will remain running.
 *
 * @property {string} name
 *   Required. The resource name of the workflow template, as described
 *   in https://cloud.google.com/apis/design/resource_names.
 *
 *   * For `projects.regions.workflowTemplates.delete`, the resource name
 *   of the template has the following format:
 *     `projects/{project_id}/regions/{region}/workflowTemplates/{template_id}`
 *
 *   * For `projects.locations.workflowTemplates.instantiate`, the resource name
 *     of the template has the following format:
 *     `projects/{project_id}/locations/{location}/workflowTemplates/{template_id}`
 *
 * @property {number} version
 *   Optional. The version of workflow template to delete. If specified,
 *   will only delete the template if the current server version matches
 *   specified version.
 *
 * @typedef DeleteWorkflowTemplateRequest
 * @memberof google.cloud.dataproc.v1
 * @see [google.cloud.dataproc.v1.DeleteWorkflowTemplateRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dataproc/v1/workflow_templates.proto}
 */
const DeleteWorkflowTemplateRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};