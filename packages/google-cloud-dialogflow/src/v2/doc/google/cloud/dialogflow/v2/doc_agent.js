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
 * Represents a conversational agent.
 *
 * @property {string} parent
 *   Required. The project of this agent.
 *   Format: `projects/<Project ID>`.
 *
 * @property {string} displayName
 *   Required. The name of this agent.
 *
 * @property {string} defaultLanguageCode
 *   Required. The default language of the agent as a language tag. See
 *   [Language
 *   Support](https://cloud.google.com/dialogflow/docs/reference/language)
 *   for a list of the currently supported language codes. This field cannot be
 *   set by the `Update` method.
 *
 * @property {string[]} supportedLanguageCodes
 *   Optional. The list of all languages supported by this agent (except for the
 *   `default_language_code`).
 *
 * @property {string} timeZone
 *   Required. The time zone of this agent from the
 *   [time zone database](https://www.iana.org/time-zones), e.g.,
 *   America/New_York, Europe/Paris.
 *
 * @property {string} description
 *   Optional. The description of this agent.
 *   The maximum length is 500 characters. If exceeded, the request is rejected.
 *
 * @property {string} avatarUri
 *   Optional. The URI of the agent's avatar.
 *   Avatars are used throughout the Dialogflow console and in the self-hosted
 *   [Web
 *   Demo](https://cloud.google.com/dialogflow/docs/integrations/web-demo)
 *   integration.
 *
 * @property {boolean} enableLogging
 *   Optional. Determines whether this agent should log conversation queries.
 *
 * @property {number} matchMode
 *   Optional. Determines how intents are detected from user queries.
 *
 *   The number should be among the values of [MatchMode]{@link google.cloud.dialogflow.v2.MatchMode}
 *
 * @property {number} classificationThreshold
 *   Optional. To filter out false positive results and still get variety in
 *   matched natural language inputs for your agent, you can tune the machine
 *   learning classification threshold. If the returned score value is less than
 *   the threshold value, then a fallback intent will be triggered or, if there
 *   are no fallback intents defined, no intent will be triggered. The score
 *   values range from 0.0 (completely uncertain) to 1.0 (completely certain).
 *   If set to 0.0, the default of 0.3 is used.
 *
 * @property {number} apiVersion
 *   Optional. API version displayed in Dialogflow console. If not specified,
 *   V2 API is assumed. Clients are free to query different service endpoints
 *   for different API versions. However, bots connectors and webhook calls will
 *   follow the specified API version.
 *
 *   The number should be among the values of [ApiVersion]{@link google.cloud.dialogflow.v2.ApiVersion}
 *
 * @property {number} tier
 *   Optional. The agent tier. If not specified, TIER_STANDARD is assumed.
 *
 *   The number should be among the values of [Tier]{@link google.cloud.dialogflow.v2.Tier}
 *
 * @typedef Agent
 * @memberof google.cloud.dialogflow.v2
 * @see [google.cloud.dialogflow.v2.Agent definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dialogflow/v2/agent.proto}
 */
const Agent = {
  // This is for documentation. Actual contents will be loaded by gRPC.

  /**
   * API version for the agent.
   *
   * @enum {number}
   * @memberof google.cloud.dialogflow.v2
   */
  ApiVersion: {

    /**
     * Not specified.
     */
    API_VERSION_UNSPECIFIED: 0,

    /**
     * Legacy V1 API.
     */
    API_VERSION_V1: 1,

    /**
     * V2 API.
     */
    API_VERSION_V2: 2,

    /**
     * V2beta1 API.
     */
    API_VERSION_V2_BETA_1: 3
  },

  /**
   * Match mode determines how intents are detected from user queries.
   *
   * @enum {number}
   * @memberof google.cloud.dialogflow.v2
   */
  MatchMode: {

    /**
     * Not specified.
     */
    MATCH_MODE_UNSPECIFIED: 0,

    /**
     * Best for agents with a small number of examples in intents and/or wide
     * use of templates syntax and composite entities.
     */
    MATCH_MODE_HYBRID: 1,

    /**
     * Can be used for agents with a large number of examples in intents,
     * especially the ones using @sys.any or very large developer entities.
     */
    MATCH_MODE_ML_ONLY: 2
  },

  /**
   * Represents the agent tier.
   *
   * @enum {number}
   * @memberof google.cloud.dialogflow.v2
   */
  Tier: {

    /**
     * Not specified. This value should never be used.
     */
    TIER_UNSPECIFIED: 0,

    /**
     * Standard tier.
     */
    TIER_STANDARD: 1,

    /**
     * Enterprise tier (Essentials).
     */
    TIER_ENTERPRISE: 2,

    /**
     * Enterprise tier (Plus).
     */
    TIER_ENTERPRISE_PLUS: 3
  }
};

/**
 * The request message for Agents.GetAgent.
 *
 * @property {string} parent
 *   Required. The project that the agent to fetch is associated with.
 *   Format: `projects/<Project ID>`.
 *
 * @typedef GetAgentRequest
 * @memberof google.cloud.dialogflow.v2
 * @see [google.cloud.dialogflow.v2.GetAgentRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dialogflow/v2/agent.proto}
 */
const GetAgentRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The request message for Agents.SetAgent.
 *
 * @property {Object} agent
 *   Required. The agent to update.
 *
 *   This object should have the same structure as [Agent]{@link google.cloud.dialogflow.v2.Agent}
 *
 * @property {Object} updateMask
 *   Optional. The mask to control which fields get updated.
 *
 *   This object should have the same structure as [FieldMask]{@link google.protobuf.FieldMask}
 *
 * @typedef SetAgentRequest
 * @memberof google.cloud.dialogflow.v2
 * @see [google.cloud.dialogflow.v2.SetAgentRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dialogflow/v2/agent.proto}
 */
const SetAgentRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The request message for Agents.DeleteAgent.
 *
 * @property {string} parent
 *   Required. The project that the agent to delete is associated with.
 *   Format: `projects/<Project ID>`.
 *
 * @typedef DeleteAgentRequest
 * @memberof google.cloud.dialogflow.v2
 * @see [google.cloud.dialogflow.v2.DeleteAgentRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dialogflow/v2/agent.proto}
 */
const DeleteAgentRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The request message for Agents.SearchAgents.
 *
 * @property {string} parent
 *   Required. The project to list agents from.
 *   Format: `projects/<Project ID or '-'>`.
 *
 * @property {number} pageSize
 *   Optional. The maximum number of items to return in a single page. By
 *   default 100 and at most 1000.
 *
 * @property {string} pageToken
 *   The next_page_token value returned from a previous list request.
 *
 * @typedef SearchAgentsRequest
 * @memberof google.cloud.dialogflow.v2
 * @see [google.cloud.dialogflow.v2.SearchAgentsRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dialogflow/v2/agent.proto}
 */
const SearchAgentsRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The response message for Agents.SearchAgents.
 *
 * @property {Object[]} agents
 *   The list of agents. There will be a maximum number of items returned based
 *   on the page_size field in the request.
 *
 *   This object should have the same structure as [Agent]{@link google.cloud.dialogflow.v2.Agent}
 *
 * @property {string} nextPageToken
 *   Token to retrieve the next page of results, or empty if there are no
 *   more results in the list.
 *
 * @typedef SearchAgentsResponse
 * @memberof google.cloud.dialogflow.v2
 * @see [google.cloud.dialogflow.v2.SearchAgentsResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dialogflow/v2/agent.proto}
 */
const SearchAgentsResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The request message for Agents.TrainAgent.
 *
 * @property {string} parent
 *   Required. The project that the agent to train is associated with.
 *   Format: `projects/<Project ID>`.
 *
 * @typedef TrainAgentRequest
 * @memberof google.cloud.dialogflow.v2
 * @see [google.cloud.dialogflow.v2.TrainAgentRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dialogflow/v2/agent.proto}
 */
const TrainAgentRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The request message for Agents.ExportAgent.
 *
 * @property {string} parent
 *   Required. The project that the agent to export is associated with.
 *   Format: `projects/<Project ID>`.
 *
 * @property {string} agentUri
 *   Required. The [Google Cloud Storage](https://cloud.google.com/storage/docs/)
 *   URI to export the agent to.
 *   The format of this URI must be `gs://<bucket-name>/<object-name>`.
 *   If left unspecified, the serialized agent is returned inline.
 *
 * @typedef ExportAgentRequest
 * @memberof google.cloud.dialogflow.v2
 * @see [google.cloud.dialogflow.v2.ExportAgentRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dialogflow/v2/agent.proto}
 */
const ExportAgentRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The response message for Agents.ExportAgent.
 *
 * @property {string} agentUri
 *   The URI to a file containing the exported agent. This field is populated
 *   only if `agent_uri` is specified in `ExportAgentRequest`.
 *
 * @property {Buffer} agentContent
 *   The exported agent.
 *
 *   Example for how to export an agent to a zip file via a command line:
 *   <pre>curl \
 *     'https://dialogflow.googleapis.com/v2/projects/&lt;project_id&gt;/agent:export'\
 *     -X POST \
 *     -H 'Authorization: Bearer' \
 *     $(gcloud auth application-default print-access-token) \
 *     -H 'Accept: application/json'
 *     --compressed \
 *     | grep agentContent | sed -e 's/.*"agentContent": "\([^"]*\)".* /\1/' \
 *     | base64 --decode > &lt;agent zip file&gt;</pre>
 *
 * @typedef ExportAgentResponse
 * @memberof google.cloud.dialogflow.v2
 * @see [google.cloud.dialogflow.v2.ExportAgentResponse definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dialogflow/v2/agent.proto}
 */
const ExportAgentResponse = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The request message for Agents.ImportAgent.
 *
 * @property {string} parent
 *   Required. The project that the agent to import is associated with.
 *   Format: `projects/<Project ID>`.
 *
 * @property {string} agentUri
 *   The URI to a Google Cloud Storage file containing the agent to import.
 *   Note: The URI must start with "gs://".
 *
 * @property {Buffer} agentContent
 *   The agent to import.
 *
 *   Example for how to import an agent via the command line:
 *   <pre>curl \
 *     'https://dialogflow.googleapis.com/v2/projects/&lt;project_id&gt;/agent:import'\
 *      -X POST \
 *      -H 'Authorization: Bearer'\
 *      $(gcloud auth application-default print-access-token) \
 *      -H 'Accept: application/json' \
 *      -H 'Content-Type: application/json' \
 *      --data-binary "{
 *         'agentContent': '$(cat &lt;agent zip file&gt; | base64 -w 0)'
 *      }"</pre>
 *
 * @typedef ImportAgentRequest
 * @memberof google.cloud.dialogflow.v2
 * @see [google.cloud.dialogflow.v2.ImportAgentRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dialogflow/v2/agent.proto}
 */
const ImportAgentRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};

/**
 * The request message for Agents.RestoreAgent.
 *
 * @property {string} parent
 *   Required. The project that the agent to restore is associated with.
 *   Format: `projects/<Project ID>`.
 *
 * @property {string} agentUri
 *   The URI to a Google Cloud Storage file containing the agent to restore.
 *   Note: The URI must start with "gs://".
 *
 * @property {Buffer} agentContent
 *   The agent to restore.
 *
 *   Example for how to restore an agent via the command line:
 *   <pre>curl \
 *     'https://dialogflow.googleapis.com/v2/projects/&lt;project_id&gt;/agent:restore'\
 *      -X POST \
 *      -H 'Authorization: Bearer' \
 *      $(gcloud auth application-default print-access-token) \
 *      -H 'Accept: application/json' \
 *      -H 'Content-Type: application/json' \
 *      --data-binary "{
 *          'agentContent': '$(cat &lt;agent zip file&gt; | base64 -w 0)'
 *      }"</pre>
 *
 * @typedef RestoreAgentRequest
 * @memberof google.cloud.dialogflow.v2
 * @see [google.cloud.dialogflow.v2.RestoreAgentRequest definition in proto format]{@link https://github.com/googleapis/googleapis/blob/master/google/cloud/dialogflow/v2/agent.proto}
 */
const RestoreAgentRequest = {
  // This is for documentation. Actual contents will be loaded by gRPC.
};