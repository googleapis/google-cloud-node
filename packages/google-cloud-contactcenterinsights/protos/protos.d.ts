// Copyright 2022 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import * as Long from "long";
import {protobuf as $protobuf} from "google-gax";
/** Namespace google. */
export namespace google {

    /** Namespace cloud. */
    namespace cloud {

        /** Namespace contactcenterinsights. */
        namespace contactcenterinsights {

            /** Namespace v1. */
            namespace v1 {

                /** Represents a ContactCenterInsights */
                class ContactCenterInsights extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new ContactCenterInsights service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new ContactCenterInsights service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): ContactCenterInsights;

                    /**
                     * Calls CreateConversation.
                     * @param request CreateConversationRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Conversation
                     */
                    public createConversation(request: google.cloud.contactcenterinsights.v1.ICreateConversationRequest, callback: google.cloud.contactcenterinsights.v1.ContactCenterInsights.CreateConversationCallback): void;

                    /**
                     * Calls CreateConversation.
                     * @param request CreateConversationRequest message or plain object
                     * @returns Promise
                     */
                    public createConversation(request: google.cloud.contactcenterinsights.v1.ICreateConversationRequest): Promise<google.cloud.contactcenterinsights.v1.Conversation>;

                    /**
                     * Calls UpdateConversation.
                     * @param request UpdateConversationRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Conversation
                     */
                    public updateConversation(request: google.cloud.contactcenterinsights.v1.IUpdateConversationRequest, callback: google.cloud.contactcenterinsights.v1.ContactCenterInsights.UpdateConversationCallback): void;

                    /**
                     * Calls UpdateConversation.
                     * @param request UpdateConversationRequest message or plain object
                     * @returns Promise
                     */
                    public updateConversation(request: google.cloud.contactcenterinsights.v1.IUpdateConversationRequest): Promise<google.cloud.contactcenterinsights.v1.Conversation>;

                    /**
                     * Calls GetConversation.
                     * @param request GetConversationRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Conversation
                     */
                    public getConversation(request: google.cloud.contactcenterinsights.v1.IGetConversationRequest, callback: google.cloud.contactcenterinsights.v1.ContactCenterInsights.GetConversationCallback): void;

                    /**
                     * Calls GetConversation.
                     * @param request GetConversationRequest message or plain object
                     * @returns Promise
                     */
                    public getConversation(request: google.cloud.contactcenterinsights.v1.IGetConversationRequest): Promise<google.cloud.contactcenterinsights.v1.Conversation>;

                    /**
                     * Calls ListConversations.
                     * @param request ListConversationsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListConversationsResponse
                     */
                    public listConversations(request: google.cloud.contactcenterinsights.v1.IListConversationsRequest, callback: google.cloud.contactcenterinsights.v1.ContactCenterInsights.ListConversationsCallback): void;

                    /**
                     * Calls ListConversations.
                     * @param request ListConversationsRequest message or plain object
                     * @returns Promise
                     */
                    public listConversations(request: google.cloud.contactcenterinsights.v1.IListConversationsRequest): Promise<google.cloud.contactcenterinsights.v1.ListConversationsResponse>;

                    /**
                     * Calls DeleteConversation.
                     * @param request DeleteConversationRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Empty
                     */
                    public deleteConversation(request: google.cloud.contactcenterinsights.v1.IDeleteConversationRequest, callback: google.cloud.contactcenterinsights.v1.ContactCenterInsights.DeleteConversationCallback): void;

                    /**
                     * Calls DeleteConversation.
                     * @param request DeleteConversationRequest message or plain object
                     * @returns Promise
                     */
                    public deleteConversation(request: google.cloud.contactcenterinsights.v1.IDeleteConversationRequest): Promise<google.protobuf.Empty>;

                    /**
                     * Calls CreateAnalysis.
                     * @param request CreateAnalysisRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createAnalysis(request: google.cloud.contactcenterinsights.v1.ICreateAnalysisRequest, callback: google.cloud.contactcenterinsights.v1.ContactCenterInsights.CreateAnalysisCallback): void;

                    /**
                     * Calls CreateAnalysis.
                     * @param request CreateAnalysisRequest message or plain object
                     * @returns Promise
                     */
                    public createAnalysis(request: google.cloud.contactcenterinsights.v1.ICreateAnalysisRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls GetAnalysis.
                     * @param request GetAnalysisRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Analysis
                     */
                    public getAnalysis(request: google.cloud.contactcenterinsights.v1.IGetAnalysisRequest, callback: google.cloud.contactcenterinsights.v1.ContactCenterInsights.GetAnalysisCallback): void;

                    /**
                     * Calls GetAnalysis.
                     * @param request GetAnalysisRequest message or plain object
                     * @returns Promise
                     */
                    public getAnalysis(request: google.cloud.contactcenterinsights.v1.IGetAnalysisRequest): Promise<google.cloud.contactcenterinsights.v1.Analysis>;

                    /**
                     * Calls ListAnalyses.
                     * @param request ListAnalysesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListAnalysesResponse
                     */
                    public listAnalyses(request: google.cloud.contactcenterinsights.v1.IListAnalysesRequest, callback: google.cloud.contactcenterinsights.v1.ContactCenterInsights.ListAnalysesCallback): void;

                    /**
                     * Calls ListAnalyses.
                     * @param request ListAnalysesRequest message or plain object
                     * @returns Promise
                     */
                    public listAnalyses(request: google.cloud.contactcenterinsights.v1.IListAnalysesRequest): Promise<google.cloud.contactcenterinsights.v1.ListAnalysesResponse>;

                    /**
                     * Calls DeleteAnalysis.
                     * @param request DeleteAnalysisRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Empty
                     */
                    public deleteAnalysis(request: google.cloud.contactcenterinsights.v1.IDeleteAnalysisRequest, callback: google.cloud.contactcenterinsights.v1.ContactCenterInsights.DeleteAnalysisCallback): void;

                    /**
                     * Calls DeleteAnalysis.
                     * @param request DeleteAnalysisRequest message or plain object
                     * @returns Promise
                     */
                    public deleteAnalysis(request: google.cloud.contactcenterinsights.v1.IDeleteAnalysisRequest): Promise<google.protobuf.Empty>;

                    /**
                     * Calls ExportInsightsData.
                     * @param request ExportInsightsDataRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public exportInsightsData(request: google.cloud.contactcenterinsights.v1.IExportInsightsDataRequest, callback: google.cloud.contactcenterinsights.v1.ContactCenterInsights.ExportInsightsDataCallback): void;

                    /**
                     * Calls ExportInsightsData.
                     * @param request ExportInsightsDataRequest message or plain object
                     * @returns Promise
                     */
                    public exportInsightsData(request: google.cloud.contactcenterinsights.v1.IExportInsightsDataRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls CreateIssueModel.
                     * @param request CreateIssueModelRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createIssueModel(request: google.cloud.contactcenterinsights.v1.ICreateIssueModelRequest, callback: google.cloud.contactcenterinsights.v1.ContactCenterInsights.CreateIssueModelCallback): void;

                    /**
                     * Calls CreateIssueModel.
                     * @param request CreateIssueModelRequest message or plain object
                     * @returns Promise
                     */
                    public createIssueModel(request: google.cloud.contactcenterinsights.v1.ICreateIssueModelRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls UpdateIssueModel.
                     * @param request UpdateIssueModelRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and IssueModel
                     */
                    public updateIssueModel(request: google.cloud.contactcenterinsights.v1.IUpdateIssueModelRequest, callback: google.cloud.contactcenterinsights.v1.ContactCenterInsights.UpdateIssueModelCallback): void;

                    /**
                     * Calls UpdateIssueModel.
                     * @param request UpdateIssueModelRequest message or plain object
                     * @returns Promise
                     */
                    public updateIssueModel(request: google.cloud.contactcenterinsights.v1.IUpdateIssueModelRequest): Promise<google.cloud.contactcenterinsights.v1.IssueModel>;

                    /**
                     * Calls GetIssueModel.
                     * @param request GetIssueModelRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and IssueModel
                     */
                    public getIssueModel(request: google.cloud.contactcenterinsights.v1.IGetIssueModelRequest, callback: google.cloud.contactcenterinsights.v1.ContactCenterInsights.GetIssueModelCallback): void;

                    /**
                     * Calls GetIssueModel.
                     * @param request GetIssueModelRequest message or plain object
                     * @returns Promise
                     */
                    public getIssueModel(request: google.cloud.contactcenterinsights.v1.IGetIssueModelRequest): Promise<google.cloud.contactcenterinsights.v1.IssueModel>;

                    /**
                     * Calls ListIssueModels.
                     * @param request ListIssueModelsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListIssueModelsResponse
                     */
                    public listIssueModels(request: google.cloud.contactcenterinsights.v1.IListIssueModelsRequest, callback: google.cloud.contactcenterinsights.v1.ContactCenterInsights.ListIssueModelsCallback): void;

                    /**
                     * Calls ListIssueModels.
                     * @param request ListIssueModelsRequest message or plain object
                     * @returns Promise
                     */
                    public listIssueModels(request: google.cloud.contactcenterinsights.v1.IListIssueModelsRequest): Promise<google.cloud.contactcenterinsights.v1.ListIssueModelsResponse>;

                    /**
                     * Calls DeleteIssueModel.
                     * @param request DeleteIssueModelRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deleteIssueModel(request: google.cloud.contactcenterinsights.v1.IDeleteIssueModelRequest, callback: google.cloud.contactcenterinsights.v1.ContactCenterInsights.DeleteIssueModelCallback): void;

                    /**
                     * Calls DeleteIssueModel.
                     * @param request DeleteIssueModelRequest message or plain object
                     * @returns Promise
                     */
                    public deleteIssueModel(request: google.cloud.contactcenterinsights.v1.IDeleteIssueModelRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls DeployIssueModel.
                     * @param request DeployIssueModelRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deployIssueModel(request: google.cloud.contactcenterinsights.v1.IDeployIssueModelRequest, callback: google.cloud.contactcenterinsights.v1.ContactCenterInsights.DeployIssueModelCallback): void;

                    /**
                     * Calls DeployIssueModel.
                     * @param request DeployIssueModelRequest message or plain object
                     * @returns Promise
                     */
                    public deployIssueModel(request: google.cloud.contactcenterinsights.v1.IDeployIssueModelRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls UndeployIssueModel.
                     * @param request UndeployIssueModelRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public undeployIssueModel(request: google.cloud.contactcenterinsights.v1.IUndeployIssueModelRequest, callback: google.cloud.contactcenterinsights.v1.ContactCenterInsights.UndeployIssueModelCallback): void;

                    /**
                     * Calls UndeployIssueModel.
                     * @param request UndeployIssueModelRequest message or plain object
                     * @returns Promise
                     */
                    public undeployIssueModel(request: google.cloud.contactcenterinsights.v1.IUndeployIssueModelRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls GetIssue.
                     * @param request GetIssueRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Issue
                     */
                    public getIssue(request: google.cloud.contactcenterinsights.v1.IGetIssueRequest, callback: google.cloud.contactcenterinsights.v1.ContactCenterInsights.GetIssueCallback): void;

                    /**
                     * Calls GetIssue.
                     * @param request GetIssueRequest message or plain object
                     * @returns Promise
                     */
                    public getIssue(request: google.cloud.contactcenterinsights.v1.IGetIssueRequest): Promise<google.cloud.contactcenterinsights.v1.Issue>;

                    /**
                     * Calls ListIssues.
                     * @param request ListIssuesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListIssuesResponse
                     */
                    public listIssues(request: google.cloud.contactcenterinsights.v1.IListIssuesRequest, callback: google.cloud.contactcenterinsights.v1.ContactCenterInsights.ListIssuesCallback): void;

                    /**
                     * Calls ListIssues.
                     * @param request ListIssuesRequest message or plain object
                     * @returns Promise
                     */
                    public listIssues(request: google.cloud.contactcenterinsights.v1.IListIssuesRequest): Promise<google.cloud.contactcenterinsights.v1.ListIssuesResponse>;

                    /**
                     * Calls UpdateIssue.
                     * @param request UpdateIssueRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Issue
                     */
                    public updateIssue(request: google.cloud.contactcenterinsights.v1.IUpdateIssueRequest, callback: google.cloud.contactcenterinsights.v1.ContactCenterInsights.UpdateIssueCallback): void;

                    /**
                     * Calls UpdateIssue.
                     * @param request UpdateIssueRequest message or plain object
                     * @returns Promise
                     */
                    public updateIssue(request: google.cloud.contactcenterinsights.v1.IUpdateIssueRequest): Promise<google.cloud.contactcenterinsights.v1.Issue>;

                    /**
                     * Calls CalculateIssueModelStats.
                     * @param request CalculateIssueModelStatsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and CalculateIssueModelStatsResponse
                     */
                    public calculateIssueModelStats(request: google.cloud.contactcenterinsights.v1.ICalculateIssueModelStatsRequest, callback: google.cloud.contactcenterinsights.v1.ContactCenterInsights.CalculateIssueModelStatsCallback): void;

                    /**
                     * Calls CalculateIssueModelStats.
                     * @param request CalculateIssueModelStatsRequest message or plain object
                     * @returns Promise
                     */
                    public calculateIssueModelStats(request: google.cloud.contactcenterinsights.v1.ICalculateIssueModelStatsRequest): Promise<google.cloud.contactcenterinsights.v1.CalculateIssueModelStatsResponse>;

                    /**
                     * Calls CreatePhraseMatcher.
                     * @param request CreatePhraseMatcherRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and PhraseMatcher
                     */
                    public createPhraseMatcher(request: google.cloud.contactcenterinsights.v1.ICreatePhraseMatcherRequest, callback: google.cloud.contactcenterinsights.v1.ContactCenterInsights.CreatePhraseMatcherCallback): void;

                    /**
                     * Calls CreatePhraseMatcher.
                     * @param request CreatePhraseMatcherRequest message or plain object
                     * @returns Promise
                     */
                    public createPhraseMatcher(request: google.cloud.contactcenterinsights.v1.ICreatePhraseMatcherRequest): Promise<google.cloud.contactcenterinsights.v1.PhraseMatcher>;

                    /**
                     * Calls GetPhraseMatcher.
                     * @param request GetPhraseMatcherRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and PhraseMatcher
                     */
                    public getPhraseMatcher(request: google.cloud.contactcenterinsights.v1.IGetPhraseMatcherRequest, callback: google.cloud.contactcenterinsights.v1.ContactCenterInsights.GetPhraseMatcherCallback): void;

                    /**
                     * Calls GetPhraseMatcher.
                     * @param request GetPhraseMatcherRequest message or plain object
                     * @returns Promise
                     */
                    public getPhraseMatcher(request: google.cloud.contactcenterinsights.v1.IGetPhraseMatcherRequest): Promise<google.cloud.contactcenterinsights.v1.PhraseMatcher>;

                    /**
                     * Calls ListPhraseMatchers.
                     * @param request ListPhraseMatchersRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListPhraseMatchersResponse
                     */
                    public listPhraseMatchers(request: google.cloud.contactcenterinsights.v1.IListPhraseMatchersRequest, callback: google.cloud.contactcenterinsights.v1.ContactCenterInsights.ListPhraseMatchersCallback): void;

                    /**
                     * Calls ListPhraseMatchers.
                     * @param request ListPhraseMatchersRequest message or plain object
                     * @returns Promise
                     */
                    public listPhraseMatchers(request: google.cloud.contactcenterinsights.v1.IListPhraseMatchersRequest): Promise<google.cloud.contactcenterinsights.v1.ListPhraseMatchersResponse>;

                    /**
                     * Calls DeletePhraseMatcher.
                     * @param request DeletePhraseMatcherRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Empty
                     */
                    public deletePhraseMatcher(request: google.cloud.contactcenterinsights.v1.IDeletePhraseMatcherRequest, callback: google.cloud.contactcenterinsights.v1.ContactCenterInsights.DeletePhraseMatcherCallback): void;

                    /**
                     * Calls DeletePhraseMatcher.
                     * @param request DeletePhraseMatcherRequest message or plain object
                     * @returns Promise
                     */
                    public deletePhraseMatcher(request: google.cloud.contactcenterinsights.v1.IDeletePhraseMatcherRequest): Promise<google.protobuf.Empty>;

                    /**
                     * Calls UpdatePhraseMatcher.
                     * @param request UpdatePhraseMatcherRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and PhraseMatcher
                     */
                    public updatePhraseMatcher(request: google.cloud.contactcenterinsights.v1.IUpdatePhraseMatcherRequest, callback: google.cloud.contactcenterinsights.v1.ContactCenterInsights.UpdatePhraseMatcherCallback): void;

                    /**
                     * Calls UpdatePhraseMatcher.
                     * @param request UpdatePhraseMatcherRequest message or plain object
                     * @returns Promise
                     */
                    public updatePhraseMatcher(request: google.cloud.contactcenterinsights.v1.IUpdatePhraseMatcherRequest): Promise<google.cloud.contactcenterinsights.v1.PhraseMatcher>;

                    /**
                     * Calls CalculateStats.
                     * @param request CalculateStatsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and CalculateStatsResponse
                     */
                    public calculateStats(request: google.cloud.contactcenterinsights.v1.ICalculateStatsRequest, callback: google.cloud.contactcenterinsights.v1.ContactCenterInsights.CalculateStatsCallback): void;

                    /**
                     * Calls CalculateStats.
                     * @param request CalculateStatsRequest message or plain object
                     * @returns Promise
                     */
                    public calculateStats(request: google.cloud.contactcenterinsights.v1.ICalculateStatsRequest): Promise<google.cloud.contactcenterinsights.v1.CalculateStatsResponse>;

                    /**
                     * Calls GetSettings.
                     * @param request GetSettingsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Settings
                     */
                    public getSettings(request: google.cloud.contactcenterinsights.v1.IGetSettingsRequest, callback: google.cloud.contactcenterinsights.v1.ContactCenterInsights.GetSettingsCallback): void;

                    /**
                     * Calls GetSettings.
                     * @param request GetSettingsRequest message or plain object
                     * @returns Promise
                     */
                    public getSettings(request: google.cloud.contactcenterinsights.v1.IGetSettingsRequest): Promise<google.cloud.contactcenterinsights.v1.Settings>;

                    /**
                     * Calls UpdateSettings.
                     * @param request UpdateSettingsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Settings
                     */
                    public updateSettings(request: google.cloud.contactcenterinsights.v1.IUpdateSettingsRequest, callback: google.cloud.contactcenterinsights.v1.ContactCenterInsights.UpdateSettingsCallback): void;

                    /**
                     * Calls UpdateSettings.
                     * @param request UpdateSettingsRequest message or plain object
                     * @returns Promise
                     */
                    public updateSettings(request: google.cloud.contactcenterinsights.v1.IUpdateSettingsRequest): Promise<google.cloud.contactcenterinsights.v1.Settings>;
                }

                namespace ContactCenterInsights {

                    /**
                     * Callback as used by {@link google.cloud.contactcenterinsights.v1.ContactCenterInsights#createConversation}.
                     * @param error Error, if any
                     * @param [response] Conversation
                     */
                    type CreateConversationCallback = (error: (Error|null), response?: google.cloud.contactcenterinsights.v1.Conversation) => void;

                    /**
                     * Callback as used by {@link google.cloud.contactcenterinsights.v1.ContactCenterInsights#updateConversation}.
                     * @param error Error, if any
                     * @param [response] Conversation
                     */
                    type UpdateConversationCallback = (error: (Error|null), response?: google.cloud.contactcenterinsights.v1.Conversation) => void;

                    /**
                     * Callback as used by {@link google.cloud.contactcenterinsights.v1.ContactCenterInsights#getConversation}.
                     * @param error Error, if any
                     * @param [response] Conversation
                     */
                    type GetConversationCallback = (error: (Error|null), response?: google.cloud.contactcenterinsights.v1.Conversation) => void;

                    /**
                     * Callback as used by {@link google.cloud.contactcenterinsights.v1.ContactCenterInsights#listConversations}.
                     * @param error Error, if any
                     * @param [response] ListConversationsResponse
                     */
                    type ListConversationsCallback = (error: (Error|null), response?: google.cloud.contactcenterinsights.v1.ListConversationsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.contactcenterinsights.v1.ContactCenterInsights#deleteConversation}.
                     * @param error Error, if any
                     * @param [response] Empty
                     */
                    type DeleteConversationCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                    /**
                     * Callback as used by {@link google.cloud.contactcenterinsights.v1.ContactCenterInsights#createAnalysis}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateAnalysisCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.contactcenterinsights.v1.ContactCenterInsights#getAnalysis}.
                     * @param error Error, if any
                     * @param [response] Analysis
                     */
                    type GetAnalysisCallback = (error: (Error|null), response?: google.cloud.contactcenterinsights.v1.Analysis) => void;

                    /**
                     * Callback as used by {@link google.cloud.contactcenterinsights.v1.ContactCenterInsights#listAnalyses}.
                     * @param error Error, if any
                     * @param [response] ListAnalysesResponse
                     */
                    type ListAnalysesCallback = (error: (Error|null), response?: google.cloud.contactcenterinsights.v1.ListAnalysesResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.contactcenterinsights.v1.ContactCenterInsights#deleteAnalysis}.
                     * @param error Error, if any
                     * @param [response] Empty
                     */
                    type DeleteAnalysisCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                    /**
                     * Callback as used by {@link google.cloud.contactcenterinsights.v1.ContactCenterInsights#exportInsightsData}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type ExportInsightsDataCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.contactcenterinsights.v1.ContactCenterInsights#createIssueModel}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateIssueModelCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.contactcenterinsights.v1.ContactCenterInsights#updateIssueModel}.
                     * @param error Error, if any
                     * @param [response] IssueModel
                     */
                    type UpdateIssueModelCallback = (error: (Error|null), response?: google.cloud.contactcenterinsights.v1.IssueModel) => void;

                    /**
                     * Callback as used by {@link google.cloud.contactcenterinsights.v1.ContactCenterInsights#getIssueModel}.
                     * @param error Error, if any
                     * @param [response] IssueModel
                     */
                    type GetIssueModelCallback = (error: (Error|null), response?: google.cloud.contactcenterinsights.v1.IssueModel) => void;

                    /**
                     * Callback as used by {@link google.cloud.contactcenterinsights.v1.ContactCenterInsights#listIssueModels}.
                     * @param error Error, if any
                     * @param [response] ListIssueModelsResponse
                     */
                    type ListIssueModelsCallback = (error: (Error|null), response?: google.cloud.contactcenterinsights.v1.ListIssueModelsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.contactcenterinsights.v1.ContactCenterInsights#deleteIssueModel}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeleteIssueModelCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.contactcenterinsights.v1.ContactCenterInsights#deployIssueModel}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeployIssueModelCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.contactcenterinsights.v1.ContactCenterInsights#undeployIssueModel}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type UndeployIssueModelCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.contactcenterinsights.v1.ContactCenterInsights#getIssue}.
                     * @param error Error, if any
                     * @param [response] Issue
                     */
                    type GetIssueCallback = (error: (Error|null), response?: google.cloud.contactcenterinsights.v1.Issue) => void;

                    /**
                     * Callback as used by {@link google.cloud.contactcenterinsights.v1.ContactCenterInsights#listIssues}.
                     * @param error Error, if any
                     * @param [response] ListIssuesResponse
                     */
                    type ListIssuesCallback = (error: (Error|null), response?: google.cloud.contactcenterinsights.v1.ListIssuesResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.contactcenterinsights.v1.ContactCenterInsights#updateIssue}.
                     * @param error Error, if any
                     * @param [response] Issue
                     */
                    type UpdateIssueCallback = (error: (Error|null), response?: google.cloud.contactcenterinsights.v1.Issue) => void;

                    /**
                     * Callback as used by {@link google.cloud.contactcenterinsights.v1.ContactCenterInsights#calculateIssueModelStats}.
                     * @param error Error, if any
                     * @param [response] CalculateIssueModelStatsResponse
                     */
                    type CalculateIssueModelStatsCallback = (error: (Error|null), response?: google.cloud.contactcenterinsights.v1.CalculateIssueModelStatsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.contactcenterinsights.v1.ContactCenterInsights#createPhraseMatcher}.
                     * @param error Error, if any
                     * @param [response] PhraseMatcher
                     */
                    type CreatePhraseMatcherCallback = (error: (Error|null), response?: google.cloud.contactcenterinsights.v1.PhraseMatcher) => void;

                    /**
                     * Callback as used by {@link google.cloud.contactcenterinsights.v1.ContactCenterInsights#getPhraseMatcher}.
                     * @param error Error, if any
                     * @param [response] PhraseMatcher
                     */
                    type GetPhraseMatcherCallback = (error: (Error|null), response?: google.cloud.contactcenterinsights.v1.PhraseMatcher) => void;

                    /**
                     * Callback as used by {@link google.cloud.contactcenterinsights.v1.ContactCenterInsights#listPhraseMatchers}.
                     * @param error Error, if any
                     * @param [response] ListPhraseMatchersResponse
                     */
                    type ListPhraseMatchersCallback = (error: (Error|null), response?: google.cloud.contactcenterinsights.v1.ListPhraseMatchersResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.contactcenterinsights.v1.ContactCenterInsights#deletePhraseMatcher}.
                     * @param error Error, if any
                     * @param [response] Empty
                     */
                    type DeletePhraseMatcherCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                    /**
                     * Callback as used by {@link google.cloud.contactcenterinsights.v1.ContactCenterInsights#updatePhraseMatcher}.
                     * @param error Error, if any
                     * @param [response] PhraseMatcher
                     */
                    type UpdatePhraseMatcherCallback = (error: (Error|null), response?: google.cloud.contactcenterinsights.v1.PhraseMatcher) => void;

                    /**
                     * Callback as used by {@link google.cloud.contactcenterinsights.v1.ContactCenterInsights#calculateStats}.
                     * @param error Error, if any
                     * @param [response] CalculateStatsResponse
                     */
                    type CalculateStatsCallback = (error: (Error|null), response?: google.cloud.contactcenterinsights.v1.CalculateStatsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.contactcenterinsights.v1.ContactCenterInsights#getSettings}.
                     * @param error Error, if any
                     * @param [response] Settings
                     */
                    type GetSettingsCallback = (error: (Error|null), response?: google.cloud.contactcenterinsights.v1.Settings) => void;

                    /**
                     * Callback as used by {@link google.cloud.contactcenterinsights.v1.ContactCenterInsights#updateSettings}.
                     * @param error Error, if any
                     * @param [response] Settings
                     */
                    type UpdateSettingsCallback = (error: (Error|null), response?: google.cloud.contactcenterinsights.v1.Settings) => void;
                }

                /** Properties of a CalculateStatsRequest. */
                interface ICalculateStatsRequest {

                    /** CalculateStatsRequest location */
                    location?: (string|null);

                    /** CalculateStatsRequest filter */
                    filter?: (string|null);
                }

                /** Represents a CalculateStatsRequest. */
                class CalculateStatsRequest implements ICalculateStatsRequest {

                    /**
                     * Constructs a new CalculateStatsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.contactcenterinsights.v1.ICalculateStatsRequest);

                    /** CalculateStatsRequest location. */
                    public location: string;

                    /** CalculateStatsRequest filter. */
                    public filter: string;

                    /**
                     * Creates a new CalculateStatsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CalculateStatsRequest instance
                     */
                    public static create(properties?: google.cloud.contactcenterinsights.v1.ICalculateStatsRequest): google.cloud.contactcenterinsights.v1.CalculateStatsRequest;

                    /**
                     * Encodes the specified CalculateStatsRequest message. Does not implicitly {@link google.cloud.contactcenterinsights.v1.CalculateStatsRequest.verify|verify} messages.
                     * @param message CalculateStatsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.contactcenterinsights.v1.ICalculateStatsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CalculateStatsRequest message, length delimited. Does not implicitly {@link google.cloud.contactcenterinsights.v1.CalculateStatsRequest.verify|verify} messages.
                     * @param message CalculateStatsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.contactcenterinsights.v1.ICalculateStatsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CalculateStatsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CalculateStatsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.contactcenterinsights.v1.CalculateStatsRequest;

                    /**
                     * Decodes a CalculateStatsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CalculateStatsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.contactcenterinsights.v1.CalculateStatsRequest;

                    /**
                     * Verifies a CalculateStatsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CalculateStatsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CalculateStatsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.contactcenterinsights.v1.CalculateStatsRequest;

                    /**
                     * Creates a plain object from a CalculateStatsRequest message. Also converts values to other types if specified.
                     * @param message CalculateStatsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.contactcenterinsights.v1.CalculateStatsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CalculateStatsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** ConversationView enum. */
                enum ConversationView {
                    CONVERSATION_VIEW_UNSPECIFIED = 0,
                    BASIC = 1,
                    FULL = 2
                }

                /** Properties of a CalculateStatsResponse. */
                interface ICalculateStatsResponse {

                    /** CalculateStatsResponse averageDuration */
                    averageDuration?: (google.protobuf.IDuration|null);

                    /** CalculateStatsResponse averageTurnCount */
                    averageTurnCount?: (number|null);

                    /** CalculateStatsResponse conversationCount */
                    conversationCount?: (number|null);

                    /** CalculateStatsResponse smartHighlighterMatches */
                    smartHighlighterMatches?: ({ [k: string]: number }|null);

                    /** CalculateStatsResponse customHighlighterMatches */
                    customHighlighterMatches?: ({ [k: string]: number }|null);

                    /** CalculateStatsResponse issueMatches */
                    issueMatches?: ({ [k: string]: number }|null);

                    /** CalculateStatsResponse issueMatchesStats */
                    issueMatchesStats?: ({ [k: string]: google.cloud.contactcenterinsights.v1.IssueModelLabelStats.IIssueStats }|null);

                    /** CalculateStatsResponse conversationCountTimeSeries */
                    conversationCountTimeSeries?: (google.cloud.contactcenterinsights.v1.CalculateStatsResponse.ITimeSeries|null);
                }

                /** Represents a CalculateStatsResponse. */
                class CalculateStatsResponse implements ICalculateStatsResponse {

                    /**
                     * Constructs a new CalculateStatsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.contactcenterinsights.v1.ICalculateStatsResponse);

                    /** CalculateStatsResponse averageDuration. */
                    public averageDuration?: (google.protobuf.IDuration|null);

                    /** CalculateStatsResponse averageTurnCount. */
                    public averageTurnCount: number;

                    /** CalculateStatsResponse conversationCount. */
                    public conversationCount: number;

                    /** CalculateStatsResponse smartHighlighterMatches. */
                    public smartHighlighterMatches: { [k: string]: number };

                    /** CalculateStatsResponse customHighlighterMatches. */
                    public customHighlighterMatches: { [k: string]: number };

                    /** CalculateStatsResponse issueMatches. */
                    public issueMatches: { [k: string]: number };

                    /** CalculateStatsResponse issueMatchesStats. */
                    public issueMatchesStats: { [k: string]: google.cloud.contactcenterinsights.v1.IssueModelLabelStats.IIssueStats };

                    /** CalculateStatsResponse conversationCountTimeSeries. */
                    public conversationCountTimeSeries?: (google.cloud.contactcenterinsights.v1.CalculateStatsResponse.ITimeSeries|null);

                    /**
                     * Creates a new CalculateStatsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CalculateStatsResponse instance
                     */
                    public static create(properties?: google.cloud.contactcenterinsights.v1.ICalculateStatsResponse): google.cloud.contactcenterinsights.v1.CalculateStatsResponse;

                    /**
                     * Encodes the specified CalculateStatsResponse message. Does not implicitly {@link google.cloud.contactcenterinsights.v1.CalculateStatsResponse.verify|verify} messages.
                     * @param message CalculateStatsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.contactcenterinsights.v1.ICalculateStatsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CalculateStatsResponse message, length delimited. Does not implicitly {@link google.cloud.contactcenterinsights.v1.CalculateStatsResponse.verify|verify} messages.
                     * @param message CalculateStatsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.contactcenterinsights.v1.ICalculateStatsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CalculateStatsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CalculateStatsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.contactcenterinsights.v1.CalculateStatsResponse;

                    /**
                     * Decodes a CalculateStatsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CalculateStatsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.contactcenterinsights.v1.CalculateStatsResponse;

                    /**
                     * Verifies a CalculateStatsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CalculateStatsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CalculateStatsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.contactcenterinsights.v1.CalculateStatsResponse;

                    /**
                     * Creates a plain object from a CalculateStatsResponse message. Also converts values to other types if specified.
                     * @param message CalculateStatsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.contactcenterinsights.v1.CalculateStatsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CalculateStatsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace CalculateStatsResponse {

                    /** Properties of a TimeSeries. */
                    interface ITimeSeries {

                        /** TimeSeries intervalDuration */
                        intervalDuration?: (google.protobuf.IDuration|null);

                        /** TimeSeries points */
                        points?: (google.cloud.contactcenterinsights.v1.CalculateStatsResponse.TimeSeries.IInterval[]|null);
                    }

                    /** Represents a TimeSeries. */
                    class TimeSeries implements ITimeSeries {

                        /**
                         * Constructs a new TimeSeries.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.contactcenterinsights.v1.CalculateStatsResponse.ITimeSeries);

                        /** TimeSeries intervalDuration. */
                        public intervalDuration?: (google.protobuf.IDuration|null);

                        /** TimeSeries points. */
                        public points: google.cloud.contactcenterinsights.v1.CalculateStatsResponse.TimeSeries.IInterval[];

                        /**
                         * Creates a new TimeSeries instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns TimeSeries instance
                         */
                        public static create(properties?: google.cloud.contactcenterinsights.v1.CalculateStatsResponse.ITimeSeries): google.cloud.contactcenterinsights.v1.CalculateStatsResponse.TimeSeries;

                        /**
                         * Encodes the specified TimeSeries message. Does not implicitly {@link google.cloud.contactcenterinsights.v1.CalculateStatsResponse.TimeSeries.verify|verify} messages.
                         * @param message TimeSeries message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.contactcenterinsights.v1.CalculateStatsResponse.ITimeSeries, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified TimeSeries message, length delimited. Does not implicitly {@link google.cloud.contactcenterinsights.v1.CalculateStatsResponse.TimeSeries.verify|verify} messages.
                         * @param message TimeSeries message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.contactcenterinsights.v1.CalculateStatsResponse.ITimeSeries, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a TimeSeries message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns TimeSeries
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.contactcenterinsights.v1.CalculateStatsResponse.TimeSeries;

                        /**
                         * Decodes a TimeSeries message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns TimeSeries
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.contactcenterinsights.v1.CalculateStatsResponse.TimeSeries;

                        /**
                         * Verifies a TimeSeries message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a TimeSeries message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns TimeSeries
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.contactcenterinsights.v1.CalculateStatsResponse.TimeSeries;

                        /**
                         * Creates a plain object from a TimeSeries message. Also converts values to other types if specified.
                         * @param message TimeSeries
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.contactcenterinsights.v1.CalculateStatsResponse.TimeSeries, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this TimeSeries to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    namespace TimeSeries {

                        /** Properties of an Interval. */
                        interface IInterval {

                            /** Interval startTime */
                            startTime?: (google.protobuf.ITimestamp|null);

                            /** Interval conversationCount */
                            conversationCount?: (number|null);
                        }

                        /** Represents an Interval. */
                        class Interval implements IInterval {

                            /**
                             * Constructs a new Interval.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.contactcenterinsights.v1.CalculateStatsResponse.TimeSeries.IInterval);

                            /** Interval startTime. */
                            public startTime?: (google.protobuf.ITimestamp|null);

                            /** Interval conversationCount. */
                            public conversationCount: number;

                            /**
                             * Creates a new Interval instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns Interval instance
                             */
                            public static create(properties?: google.cloud.contactcenterinsights.v1.CalculateStatsResponse.TimeSeries.IInterval): google.cloud.contactcenterinsights.v1.CalculateStatsResponse.TimeSeries.Interval;

                            /**
                             * Encodes the specified Interval message. Does not implicitly {@link google.cloud.contactcenterinsights.v1.CalculateStatsResponse.TimeSeries.Interval.verify|verify} messages.
                             * @param message Interval message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.contactcenterinsights.v1.CalculateStatsResponse.TimeSeries.IInterval, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified Interval message, length delimited. Does not implicitly {@link google.cloud.contactcenterinsights.v1.CalculateStatsResponse.TimeSeries.Interval.verify|verify} messages.
                             * @param message Interval message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.contactcenterinsights.v1.CalculateStatsResponse.TimeSeries.IInterval, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes an Interval message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns Interval
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.contactcenterinsights.v1.CalculateStatsResponse.TimeSeries.Interval;

                            /**
                             * Decodes an Interval message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns Interval
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.contactcenterinsights.v1.CalculateStatsResponse.TimeSeries.Interval;

                            /**
                             * Verifies an Interval message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates an Interval message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns Interval
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.contactcenterinsights.v1.CalculateStatsResponse.TimeSeries.Interval;

                            /**
                             * Creates a plain object from an Interval message. Also converts values to other types if specified.
                             * @param message Interval
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.contactcenterinsights.v1.CalculateStatsResponse.TimeSeries.Interval, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this Interval to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }
                    }
                }

                /** Properties of a CreateAnalysisOperationMetadata. */
                interface ICreateAnalysisOperationMetadata {

                    /** CreateAnalysisOperationMetadata createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** CreateAnalysisOperationMetadata endTime */
                    endTime?: (google.protobuf.ITimestamp|null);

                    /** CreateAnalysisOperationMetadata conversation */
                    conversation?: (string|null);
                }

                /** Represents a CreateAnalysisOperationMetadata. */
                class CreateAnalysisOperationMetadata implements ICreateAnalysisOperationMetadata {

                    /**
                     * Constructs a new CreateAnalysisOperationMetadata.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.contactcenterinsights.v1.ICreateAnalysisOperationMetadata);

                    /** CreateAnalysisOperationMetadata createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** CreateAnalysisOperationMetadata endTime. */
                    public endTime?: (google.protobuf.ITimestamp|null);

                    /** CreateAnalysisOperationMetadata conversation. */
                    public conversation: string;

                    /**
                     * Creates a new CreateAnalysisOperationMetadata instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateAnalysisOperationMetadata instance
                     */
                    public static create(properties?: google.cloud.contactcenterinsights.v1.ICreateAnalysisOperationMetadata): google.cloud.contactcenterinsights.v1.CreateAnalysisOperationMetadata;

                    /**
                     * Encodes the specified CreateAnalysisOperationMetadata message. Does not implicitly {@link google.cloud.contactcenterinsights.v1.CreateAnalysisOperationMetadata.verify|verify} messages.
                     * @param message CreateAnalysisOperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.contactcenterinsights.v1.ICreateAnalysisOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateAnalysisOperationMetadata message, length delimited. Does not implicitly {@link google.cloud.contactcenterinsights.v1.CreateAnalysisOperationMetadata.verify|verify} messages.
                     * @param message CreateAnalysisOperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.contactcenterinsights.v1.ICreateAnalysisOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateAnalysisOperationMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateAnalysisOperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.contactcenterinsights.v1.CreateAnalysisOperationMetadata;

                    /**
                     * Decodes a CreateAnalysisOperationMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateAnalysisOperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.contactcenterinsights.v1.CreateAnalysisOperationMetadata;

                    /**
                     * Verifies a CreateAnalysisOperationMetadata message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateAnalysisOperationMetadata message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateAnalysisOperationMetadata
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.contactcenterinsights.v1.CreateAnalysisOperationMetadata;

                    /**
                     * Creates a plain object from a CreateAnalysisOperationMetadata message. Also converts values to other types if specified.
                     * @param message CreateAnalysisOperationMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.contactcenterinsights.v1.CreateAnalysisOperationMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateAnalysisOperationMetadata to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a CreateConversationRequest. */
                interface ICreateConversationRequest {

                    /** CreateConversationRequest parent */
                    parent?: (string|null);

                    /** CreateConversationRequest conversation */
                    conversation?: (google.cloud.contactcenterinsights.v1.IConversation|null);

                    /** CreateConversationRequest conversationId */
                    conversationId?: (string|null);
                }

                /** Represents a CreateConversationRequest. */
                class CreateConversationRequest implements ICreateConversationRequest {

                    /**
                     * Constructs a new CreateConversationRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.contactcenterinsights.v1.ICreateConversationRequest);

                    /** CreateConversationRequest parent. */
                    public parent: string;

                    /** CreateConversationRequest conversation. */
                    public conversation?: (google.cloud.contactcenterinsights.v1.IConversation|null);

                    /** CreateConversationRequest conversationId. */
                    public conversationId: string;

                    /**
                     * Creates a new CreateConversationRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateConversationRequest instance
                     */
                    public static create(properties?: google.cloud.contactcenterinsights.v1.ICreateConversationRequest): google.cloud.contactcenterinsights.v1.CreateConversationRequest;

                    /**
                     * Encodes the specified CreateConversationRequest message. Does not implicitly {@link google.cloud.contactcenterinsights.v1.CreateConversationRequest.verify|verify} messages.
                     * @param message CreateConversationRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.contactcenterinsights.v1.ICreateConversationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateConversationRequest message, length delimited. Does not implicitly {@link google.cloud.contactcenterinsights.v1.CreateConversationRequest.verify|verify} messages.
                     * @param message CreateConversationRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.contactcenterinsights.v1.ICreateConversationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateConversationRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateConversationRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.contactcenterinsights.v1.CreateConversationRequest;

                    /**
                     * Decodes a CreateConversationRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateConversationRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.contactcenterinsights.v1.CreateConversationRequest;

                    /**
                     * Verifies a CreateConversationRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateConversationRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateConversationRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.contactcenterinsights.v1.CreateConversationRequest;

                    /**
                     * Creates a plain object from a CreateConversationRequest message. Also converts values to other types if specified.
                     * @param message CreateConversationRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.contactcenterinsights.v1.CreateConversationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateConversationRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListConversationsRequest. */
                interface IListConversationsRequest {

                    /** ListConversationsRequest parent */
                    parent?: (string|null);

                    /** ListConversationsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListConversationsRequest pageToken */
                    pageToken?: (string|null);

                    /** ListConversationsRequest filter */
                    filter?: (string|null);

                    /** ListConversationsRequest view */
                    view?: (google.cloud.contactcenterinsights.v1.ConversationView|keyof typeof google.cloud.contactcenterinsights.v1.ConversationView|null);
                }

                /** Represents a ListConversationsRequest. */
                class ListConversationsRequest implements IListConversationsRequest {

                    /**
                     * Constructs a new ListConversationsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.contactcenterinsights.v1.IListConversationsRequest);

                    /** ListConversationsRequest parent. */
                    public parent: string;

                    /** ListConversationsRequest pageSize. */
                    public pageSize: number;

                    /** ListConversationsRequest pageToken. */
                    public pageToken: string;

                    /** ListConversationsRequest filter. */
                    public filter: string;

                    /** ListConversationsRequest view. */
                    public view: (google.cloud.contactcenterinsights.v1.ConversationView|keyof typeof google.cloud.contactcenterinsights.v1.ConversationView);

                    /**
                     * Creates a new ListConversationsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListConversationsRequest instance
                     */
                    public static create(properties?: google.cloud.contactcenterinsights.v1.IListConversationsRequest): google.cloud.contactcenterinsights.v1.ListConversationsRequest;

                    /**
                     * Encodes the specified ListConversationsRequest message. Does not implicitly {@link google.cloud.contactcenterinsights.v1.ListConversationsRequest.verify|verify} messages.
                     * @param message ListConversationsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.contactcenterinsights.v1.IListConversationsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListConversationsRequest message, length delimited. Does not implicitly {@link google.cloud.contactcenterinsights.v1.ListConversationsRequest.verify|verify} messages.
                     * @param message ListConversationsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.contactcenterinsights.v1.IListConversationsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListConversationsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListConversationsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.contactcenterinsights.v1.ListConversationsRequest;

                    /**
                     * Decodes a ListConversationsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListConversationsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.contactcenterinsights.v1.ListConversationsRequest;

                    /**
                     * Verifies a ListConversationsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListConversationsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListConversationsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.contactcenterinsights.v1.ListConversationsRequest;

                    /**
                     * Creates a plain object from a ListConversationsRequest message. Also converts values to other types if specified.
                     * @param message ListConversationsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.contactcenterinsights.v1.ListConversationsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListConversationsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListConversationsResponse. */
                interface IListConversationsResponse {

                    /** ListConversationsResponse conversations */
                    conversations?: (google.cloud.contactcenterinsights.v1.IConversation[]|null);

                    /** ListConversationsResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListConversationsResponse. */
                class ListConversationsResponse implements IListConversationsResponse {

                    /**
                     * Constructs a new ListConversationsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.contactcenterinsights.v1.IListConversationsResponse);

                    /** ListConversationsResponse conversations. */
                    public conversations: google.cloud.contactcenterinsights.v1.IConversation[];

                    /** ListConversationsResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListConversationsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListConversationsResponse instance
                     */
                    public static create(properties?: google.cloud.contactcenterinsights.v1.IListConversationsResponse): google.cloud.contactcenterinsights.v1.ListConversationsResponse;

                    /**
                     * Encodes the specified ListConversationsResponse message. Does not implicitly {@link google.cloud.contactcenterinsights.v1.ListConversationsResponse.verify|verify} messages.
                     * @param message ListConversationsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.contactcenterinsights.v1.IListConversationsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListConversationsResponse message, length delimited. Does not implicitly {@link google.cloud.contactcenterinsights.v1.ListConversationsResponse.verify|verify} messages.
                     * @param message ListConversationsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.contactcenterinsights.v1.IListConversationsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListConversationsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListConversationsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.contactcenterinsights.v1.ListConversationsResponse;

                    /**
                     * Decodes a ListConversationsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListConversationsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.contactcenterinsights.v1.ListConversationsResponse;

                    /**
                     * Verifies a ListConversationsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListConversationsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListConversationsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.contactcenterinsights.v1.ListConversationsResponse;

                    /**
                     * Creates a plain object from a ListConversationsResponse message. Also converts values to other types if specified.
                     * @param message ListConversationsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.contactcenterinsights.v1.ListConversationsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListConversationsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetConversationRequest. */
                interface IGetConversationRequest {

                    /** GetConversationRequest name */
                    name?: (string|null);

                    /** GetConversationRequest view */
                    view?: (google.cloud.contactcenterinsights.v1.ConversationView|keyof typeof google.cloud.contactcenterinsights.v1.ConversationView|null);
                }

                /** Represents a GetConversationRequest. */
                class GetConversationRequest implements IGetConversationRequest {

                    /**
                     * Constructs a new GetConversationRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.contactcenterinsights.v1.IGetConversationRequest);

                    /** GetConversationRequest name. */
                    public name: string;

                    /** GetConversationRequest view. */
                    public view: (google.cloud.contactcenterinsights.v1.ConversationView|keyof typeof google.cloud.contactcenterinsights.v1.ConversationView);

                    /**
                     * Creates a new GetConversationRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetConversationRequest instance
                     */
                    public static create(properties?: google.cloud.contactcenterinsights.v1.IGetConversationRequest): google.cloud.contactcenterinsights.v1.GetConversationRequest;

                    /**
                     * Encodes the specified GetConversationRequest message. Does not implicitly {@link google.cloud.contactcenterinsights.v1.GetConversationRequest.verify|verify} messages.
                     * @param message GetConversationRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.contactcenterinsights.v1.IGetConversationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetConversationRequest message, length delimited. Does not implicitly {@link google.cloud.contactcenterinsights.v1.GetConversationRequest.verify|verify} messages.
                     * @param message GetConversationRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.contactcenterinsights.v1.IGetConversationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetConversationRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetConversationRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.contactcenterinsights.v1.GetConversationRequest;

                    /**
                     * Decodes a GetConversationRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetConversationRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.contactcenterinsights.v1.GetConversationRequest;

                    /**
                     * Verifies a GetConversationRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetConversationRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetConversationRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.contactcenterinsights.v1.GetConversationRequest;

                    /**
                     * Creates a plain object from a GetConversationRequest message. Also converts values to other types if specified.
                     * @param message GetConversationRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.contactcenterinsights.v1.GetConversationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetConversationRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an UpdateConversationRequest. */
                interface IUpdateConversationRequest {

                    /** UpdateConversationRequest conversation */
                    conversation?: (google.cloud.contactcenterinsights.v1.IConversation|null);

                    /** UpdateConversationRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);
                }

                /** Represents an UpdateConversationRequest. */
                class UpdateConversationRequest implements IUpdateConversationRequest {

                    /**
                     * Constructs a new UpdateConversationRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.contactcenterinsights.v1.IUpdateConversationRequest);

                    /** UpdateConversationRequest conversation. */
                    public conversation?: (google.cloud.contactcenterinsights.v1.IConversation|null);

                    /** UpdateConversationRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /**
                     * Creates a new UpdateConversationRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateConversationRequest instance
                     */
                    public static create(properties?: google.cloud.contactcenterinsights.v1.IUpdateConversationRequest): google.cloud.contactcenterinsights.v1.UpdateConversationRequest;

                    /**
                     * Encodes the specified UpdateConversationRequest message. Does not implicitly {@link google.cloud.contactcenterinsights.v1.UpdateConversationRequest.verify|verify} messages.
                     * @param message UpdateConversationRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.contactcenterinsights.v1.IUpdateConversationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateConversationRequest message, length delimited. Does not implicitly {@link google.cloud.contactcenterinsights.v1.UpdateConversationRequest.verify|verify} messages.
                     * @param message UpdateConversationRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.contactcenterinsights.v1.IUpdateConversationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateConversationRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateConversationRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.contactcenterinsights.v1.UpdateConversationRequest;

                    /**
                     * Decodes an UpdateConversationRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateConversationRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.contactcenterinsights.v1.UpdateConversationRequest;

                    /**
                     * Verifies an UpdateConversationRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateConversationRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateConversationRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.contactcenterinsights.v1.UpdateConversationRequest;

                    /**
                     * Creates a plain object from an UpdateConversationRequest message. Also converts values to other types if specified.
                     * @param message UpdateConversationRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.contactcenterinsights.v1.UpdateConversationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateConversationRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DeleteConversationRequest. */
                interface IDeleteConversationRequest {

                    /** DeleteConversationRequest name */
                    name?: (string|null);

                    /** DeleteConversationRequest force */
                    force?: (boolean|null);
                }

                /** Represents a DeleteConversationRequest. */
                class DeleteConversationRequest implements IDeleteConversationRequest {

                    /**
                     * Constructs a new DeleteConversationRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.contactcenterinsights.v1.IDeleteConversationRequest);

                    /** DeleteConversationRequest name. */
                    public name: string;

                    /** DeleteConversationRequest force. */
                    public force: boolean;

                    /**
                     * Creates a new DeleteConversationRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteConversationRequest instance
                     */
                    public static create(properties?: google.cloud.contactcenterinsights.v1.IDeleteConversationRequest): google.cloud.contactcenterinsights.v1.DeleteConversationRequest;

                    /**
                     * Encodes the specified DeleteConversationRequest message. Does not implicitly {@link google.cloud.contactcenterinsights.v1.DeleteConversationRequest.verify|verify} messages.
                     * @param message DeleteConversationRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.contactcenterinsights.v1.IDeleteConversationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteConversationRequest message, length delimited. Does not implicitly {@link google.cloud.contactcenterinsights.v1.DeleteConversationRequest.verify|verify} messages.
                     * @param message DeleteConversationRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.contactcenterinsights.v1.IDeleteConversationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteConversationRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteConversationRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.contactcenterinsights.v1.DeleteConversationRequest;

                    /**
                     * Decodes a DeleteConversationRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteConversationRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.contactcenterinsights.v1.DeleteConversationRequest;

                    /**
                     * Verifies a DeleteConversationRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteConversationRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteConversationRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.contactcenterinsights.v1.DeleteConversationRequest;

                    /**
                     * Creates a plain object from a DeleteConversationRequest message. Also converts values to other types if specified.
                     * @param message DeleteConversationRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.contactcenterinsights.v1.DeleteConversationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteConversationRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a CreateAnalysisRequest. */
                interface ICreateAnalysisRequest {

                    /** CreateAnalysisRequest parent */
                    parent?: (string|null);

                    /** CreateAnalysisRequest analysis */
                    analysis?: (google.cloud.contactcenterinsights.v1.IAnalysis|null);
                }

                /** Represents a CreateAnalysisRequest. */
                class CreateAnalysisRequest implements ICreateAnalysisRequest {

                    /**
                     * Constructs a new CreateAnalysisRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.contactcenterinsights.v1.ICreateAnalysisRequest);

                    /** CreateAnalysisRequest parent. */
                    public parent: string;

                    /** CreateAnalysisRequest analysis. */
                    public analysis?: (google.cloud.contactcenterinsights.v1.IAnalysis|null);

                    /**
                     * Creates a new CreateAnalysisRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateAnalysisRequest instance
                     */
                    public static create(properties?: google.cloud.contactcenterinsights.v1.ICreateAnalysisRequest): google.cloud.contactcenterinsights.v1.CreateAnalysisRequest;

                    /**
                     * Encodes the specified CreateAnalysisRequest message. Does not implicitly {@link google.cloud.contactcenterinsights.v1.CreateAnalysisRequest.verify|verify} messages.
                     * @param message CreateAnalysisRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.contactcenterinsights.v1.ICreateAnalysisRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateAnalysisRequest message, length delimited. Does not implicitly {@link google.cloud.contactcenterinsights.v1.CreateAnalysisRequest.verify|verify} messages.
                     * @param message CreateAnalysisRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.contactcenterinsights.v1.ICreateAnalysisRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateAnalysisRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateAnalysisRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.contactcenterinsights.v1.CreateAnalysisRequest;

                    /**
                     * Decodes a CreateAnalysisRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateAnalysisRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.contactcenterinsights.v1.CreateAnalysisRequest;

                    /**
                     * Verifies a CreateAnalysisRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateAnalysisRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateAnalysisRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.contactcenterinsights.v1.CreateAnalysisRequest;

                    /**
                     * Creates a plain object from a CreateAnalysisRequest message. Also converts values to other types if specified.
                     * @param message CreateAnalysisRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.contactcenterinsights.v1.CreateAnalysisRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateAnalysisRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListAnalysesRequest. */
                interface IListAnalysesRequest {

                    /** ListAnalysesRequest parent */
                    parent?: (string|null);

                    /** ListAnalysesRequest pageSize */
                    pageSize?: (number|null);

                    /** ListAnalysesRequest pageToken */
                    pageToken?: (string|null);

                    /** ListAnalysesRequest filter */
                    filter?: (string|null);
                }

                /** Represents a ListAnalysesRequest. */
                class ListAnalysesRequest implements IListAnalysesRequest {

                    /**
                     * Constructs a new ListAnalysesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.contactcenterinsights.v1.IListAnalysesRequest);

                    /** ListAnalysesRequest parent. */
                    public parent: string;

                    /** ListAnalysesRequest pageSize. */
                    public pageSize: number;

                    /** ListAnalysesRequest pageToken. */
                    public pageToken: string;

                    /** ListAnalysesRequest filter. */
                    public filter: string;

                    /**
                     * Creates a new ListAnalysesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListAnalysesRequest instance
                     */
                    public static create(properties?: google.cloud.contactcenterinsights.v1.IListAnalysesRequest): google.cloud.contactcenterinsights.v1.ListAnalysesRequest;

                    /**
                     * Encodes the specified ListAnalysesRequest message. Does not implicitly {@link google.cloud.contactcenterinsights.v1.ListAnalysesRequest.verify|verify} messages.
                     * @param message ListAnalysesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.contactcenterinsights.v1.IListAnalysesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListAnalysesRequest message, length delimited. Does not implicitly {@link google.cloud.contactcenterinsights.v1.ListAnalysesRequest.verify|verify} messages.
                     * @param message ListAnalysesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.contactcenterinsights.v1.IListAnalysesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListAnalysesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListAnalysesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.contactcenterinsights.v1.ListAnalysesRequest;

                    /**
                     * Decodes a ListAnalysesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListAnalysesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.contactcenterinsights.v1.ListAnalysesRequest;

                    /**
                     * Verifies a ListAnalysesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListAnalysesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListAnalysesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.contactcenterinsights.v1.ListAnalysesRequest;

                    /**
                     * Creates a plain object from a ListAnalysesRequest message. Also converts values to other types if specified.
                     * @param message ListAnalysesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.contactcenterinsights.v1.ListAnalysesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListAnalysesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListAnalysesResponse. */
                interface IListAnalysesResponse {

                    /** ListAnalysesResponse analyses */
                    analyses?: (google.cloud.contactcenterinsights.v1.IAnalysis[]|null);

                    /** ListAnalysesResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListAnalysesResponse. */
                class ListAnalysesResponse implements IListAnalysesResponse {

                    /**
                     * Constructs a new ListAnalysesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.contactcenterinsights.v1.IListAnalysesResponse);

                    /** ListAnalysesResponse analyses. */
                    public analyses: google.cloud.contactcenterinsights.v1.IAnalysis[];

                    /** ListAnalysesResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListAnalysesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListAnalysesResponse instance
                     */
                    public static create(properties?: google.cloud.contactcenterinsights.v1.IListAnalysesResponse): google.cloud.contactcenterinsights.v1.ListAnalysesResponse;

                    /**
                     * Encodes the specified ListAnalysesResponse message. Does not implicitly {@link google.cloud.contactcenterinsights.v1.ListAnalysesResponse.verify|verify} messages.
                     * @param message ListAnalysesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.contactcenterinsights.v1.IListAnalysesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListAnalysesResponse message, length delimited. Does not implicitly {@link google.cloud.contactcenterinsights.v1.ListAnalysesResponse.verify|verify} messages.
                     * @param message ListAnalysesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.contactcenterinsights.v1.IListAnalysesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListAnalysesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListAnalysesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.contactcenterinsights.v1.ListAnalysesResponse;

                    /**
                     * Decodes a ListAnalysesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListAnalysesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.contactcenterinsights.v1.ListAnalysesResponse;

                    /**
                     * Verifies a ListAnalysesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListAnalysesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListAnalysesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.contactcenterinsights.v1.ListAnalysesResponse;

                    /**
                     * Creates a plain object from a ListAnalysesResponse message. Also converts values to other types if specified.
                     * @param message ListAnalysesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.contactcenterinsights.v1.ListAnalysesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListAnalysesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetAnalysisRequest. */
                interface IGetAnalysisRequest {

                    /** GetAnalysisRequest name */
                    name?: (string|null);
                }

                /** Represents a GetAnalysisRequest. */
                class GetAnalysisRequest implements IGetAnalysisRequest {

                    /**
                     * Constructs a new GetAnalysisRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.contactcenterinsights.v1.IGetAnalysisRequest);

                    /** GetAnalysisRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetAnalysisRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetAnalysisRequest instance
                     */
                    public static create(properties?: google.cloud.contactcenterinsights.v1.IGetAnalysisRequest): google.cloud.contactcenterinsights.v1.GetAnalysisRequest;

                    /**
                     * Encodes the specified GetAnalysisRequest message. Does not implicitly {@link google.cloud.contactcenterinsights.v1.GetAnalysisRequest.verify|verify} messages.
                     * @param message GetAnalysisRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.contactcenterinsights.v1.IGetAnalysisRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetAnalysisRequest message, length delimited. Does not implicitly {@link google.cloud.contactcenterinsights.v1.GetAnalysisRequest.verify|verify} messages.
                     * @param message GetAnalysisRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.contactcenterinsights.v1.IGetAnalysisRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetAnalysisRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetAnalysisRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.contactcenterinsights.v1.GetAnalysisRequest;

                    /**
                     * Decodes a GetAnalysisRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetAnalysisRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.contactcenterinsights.v1.GetAnalysisRequest;

                    /**
                     * Verifies a GetAnalysisRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetAnalysisRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetAnalysisRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.contactcenterinsights.v1.GetAnalysisRequest;

                    /**
                     * Creates a plain object from a GetAnalysisRequest message. Also converts values to other types if specified.
                     * @param message GetAnalysisRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.contactcenterinsights.v1.GetAnalysisRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetAnalysisRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DeleteAnalysisRequest. */
                interface IDeleteAnalysisRequest {

                    /** DeleteAnalysisRequest name */
                    name?: (string|null);
                }

                /** Represents a DeleteAnalysisRequest. */
                class DeleteAnalysisRequest implements IDeleteAnalysisRequest {

                    /**
                     * Constructs a new DeleteAnalysisRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.contactcenterinsights.v1.IDeleteAnalysisRequest);

                    /** DeleteAnalysisRequest name. */
                    public name: string;

                    /**
                     * Creates a new DeleteAnalysisRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteAnalysisRequest instance
                     */
                    public static create(properties?: google.cloud.contactcenterinsights.v1.IDeleteAnalysisRequest): google.cloud.contactcenterinsights.v1.DeleteAnalysisRequest;

                    /**
                     * Encodes the specified DeleteAnalysisRequest message. Does not implicitly {@link google.cloud.contactcenterinsights.v1.DeleteAnalysisRequest.verify|verify} messages.
                     * @param message DeleteAnalysisRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.contactcenterinsights.v1.IDeleteAnalysisRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteAnalysisRequest message, length delimited. Does not implicitly {@link google.cloud.contactcenterinsights.v1.DeleteAnalysisRequest.verify|verify} messages.
                     * @param message DeleteAnalysisRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.contactcenterinsights.v1.IDeleteAnalysisRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteAnalysisRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteAnalysisRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.contactcenterinsights.v1.DeleteAnalysisRequest;

                    /**
                     * Decodes a DeleteAnalysisRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteAnalysisRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.contactcenterinsights.v1.DeleteAnalysisRequest;

                    /**
                     * Verifies a DeleteAnalysisRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteAnalysisRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteAnalysisRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.contactcenterinsights.v1.DeleteAnalysisRequest;

                    /**
                     * Creates a plain object from a DeleteAnalysisRequest message. Also converts values to other types if specified.
                     * @param message DeleteAnalysisRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.contactcenterinsights.v1.DeleteAnalysisRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteAnalysisRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an ExportInsightsDataRequest. */
                interface IExportInsightsDataRequest {

                    /** ExportInsightsDataRequest bigQueryDestination */
                    bigQueryDestination?: (google.cloud.contactcenterinsights.v1.ExportInsightsDataRequest.IBigQueryDestination|null);

                    /** ExportInsightsDataRequest parent */
                    parent?: (string|null);

                    /** ExportInsightsDataRequest filter */
                    filter?: (string|null);

                    /** ExportInsightsDataRequest kmsKey */
                    kmsKey?: (string|null);

                    /** ExportInsightsDataRequest writeDisposition */
                    writeDisposition?: (google.cloud.contactcenterinsights.v1.ExportInsightsDataRequest.WriteDisposition|keyof typeof google.cloud.contactcenterinsights.v1.ExportInsightsDataRequest.WriteDisposition|null);
                }

                /** Represents an ExportInsightsDataRequest. */
                class ExportInsightsDataRequest implements IExportInsightsDataRequest {

                    /**
                     * Constructs a new ExportInsightsDataRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.contactcenterinsights.v1.IExportInsightsDataRequest);

                    /** ExportInsightsDataRequest bigQueryDestination. */
                    public bigQueryDestination?: (google.cloud.contactcenterinsights.v1.ExportInsightsDataRequest.IBigQueryDestination|null);

                    /** ExportInsightsDataRequest parent. */
                    public parent: string;

                    /** ExportInsightsDataRequest filter. */
                    public filter: string;

                    /** ExportInsightsDataRequest kmsKey. */
                    public kmsKey: string;

                    /** ExportInsightsDataRequest writeDisposition. */
                    public writeDisposition: (google.cloud.contactcenterinsights.v1.ExportInsightsDataRequest.WriteDisposition|keyof typeof google.cloud.contactcenterinsights.v1.ExportInsightsDataRequest.WriteDisposition);

                    /** ExportInsightsDataRequest destination. */
                    public destination?: "bigQueryDestination";

                    /**
                     * Creates a new ExportInsightsDataRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ExportInsightsDataRequest instance
                     */
                    public static create(properties?: google.cloud.contactcenterinsights.v1.IExportInsightsDataRequest): google.cloud.contactcenterinsights.v1.ExportInsightsDataRequest;

                    /**
                     * Encodes the specified ExportInsightsDataRequest message. Does not implicitly {@link google.cloud.contactcenterinsights.v1.ExportInsightsDataRequest.verify|verify} messages.
                     * @param message ExportInsightsDataRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.contactcenterinsights.v1.IExportInsightsDataRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ExportInsightsDataRequest message, length delimited. Does not implicitly {@link google.cloud.contactcenterinsights.v1.ExportInsightsDataRequest.verify|verify} messages.
                     * @param message ExportInsightsDataRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.contactcenterinsights.v1.IExportInsightsDataRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ExportInsightsDataRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ExportInsightsDataRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.contactcenterinsights.v1.ExportInsightsDataRequest;

                    /**
                     * Decodes an ExportInsightsDataRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ExportInsightsDataRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.contactcenterinsights.v1.ExportInsightsDataRequest;

                    /**
                     * Verifies an ExportInsightsDataRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ExportInsightsDataRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ExportInsightsDataRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.contactcenterinsights.v1.ExportInsightsDataRequest;

                    /**
                     * Creates a plain object from an ExportInsightsDataRequest message. Also converts values to other types if specified.
                     * @param message ExportInsightsDataRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.contactcenterinsights.v1.ExportInsightsDataRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ExportInsightsDataRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace ExportInsightsDataRequest {

                    /** Properties of a BigQueryDestination. */
                    interface IBigQueryDestination {

                        /** BigQueryDestination projectId */
                        projectId?: (string|null);

                        /** BigQueryDestination dataset */
                        dataset?: (string|null);

                        /** BigQueryDestination table */
                        table?: (string|null);
                    }

                    /** Represents a BigQueryDestination. */
                    class BigQueryDestination implements IBigQueryDestination {

                        /**
                         * Constructs a new BigQueryDestination.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.contactcenterinsights.v1.ExportInsightsDataRequest.IBigQueryDestination);

                        /** BigQueryDestination projectId. */
                        public projectId: string;

                        /** BigQueryDestination dataset. */
                        public dataset: string;

                        /** BigQueryDestination table. */
                        public table: string;

                        /**
                         * Creates a new BigQueryDestination instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns BigQueryDestination instance
                         */
                        public static create(properties?: google.cloud.contactcenterinsights.v1.ExportInsightsDataRequest.IBigQueryDestination): google.cloud.contactcenterinsights.v1.ExportInsightsDataRequest.BigQueryDestination;

                        /**
                         * Encodes the specified BigQueryDestination message. Does not implicitly {@link google.cloud.contactcenterinsights.v1.ExportInsightsDataRequest.BigQueryDestination.verify|verify} messages.
                         * @param message BigQueryDestination message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.contactcenterinsights.v1.ExportInsightsDataRequest.IBigQueryDestination, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified BigQueryDestination message, length delimited. Does not implicitly {@link google.cloud.contactcenterinsights.v1.ExportInsightsDataRequest.BigQueryDestination.verify|verify} messages.
                         * @param message BigQueryDestination message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.contactcenterinsights.v1.ExportInsightsDataRequest.IBigQueryDestination, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a BigQueryDestination message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns BigQueryDestination
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.contactcenterinsights.v1.ExportInsightsDataRequest.BigQueryDestination;

                        /**
                         * Decodes a BigQueryDestination message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns BigQueryDestination
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.contactcenterinsights.v1.ExportInsightsDataRequest.BigQueryDestination;

                        /**
                         * Verifies a BigQueryDestination message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a BigQueryDestination message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns BigQueryDestination
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.contactcenterinsights.v1.ExportInsightsDataRequest.BigQueryDestination;

                        /**
                         * Creates a plain object from a BigQueryDestination message. Also converts values to other types if specified.
                         * @param message BigQueryDestination
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.contactcenterinsights.v1.ExportInsightsDataRequest.BigQueryDestination, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this BigQueryDestination to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** WriteDisposition enum. */
                    enum WriteDisposition {
                        WRITE_DISPOSITION_UNSPECIFIED = 0,
                        WRITE_TRUNCATE = 1,
                        WRITE_APPEND = 2
                    }
                }

                /** Properties of an ExportInsightsDataMetadata. */
                interface IExportInsightsDataMetadata {

                    /** ExportInsightsDataMetadata createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** ExportInsightsDataMetadata endTime */
                    endTime?: (google.protobuf.ITimestamp|null);

                    /** ExportInsightsDataMetadata request */
                    request?: (google.cloud.contactcenterinsights.v1.IExportInsightsDataRequest|null);

                    /** ExportInsightsDataMetadata partialErrors */
                    partialErrors?: (google.rpc.IStatus[]|null);
                }

                /** Represents an ExportInsightsDataMetadata. */
                class ExportInsightsDataMetadata implements IExportInsightsDataMetadata {

                    /**
                     * Constructs a new ExportInsightsDataMetadata.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.contactcenterinsights.v1.IExportInsightsDataMetadata);

                    /** ExportInsightsDataMetadata createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** ExportInsightsDataMetadata endTime. */
                    public endTime?: (google.protobuf.ITimestamp|null);

                    /** ExportInsightsDataMetadata request. */
                    public request?: (google.cloud.contactcenterinsights.v1.IExportInsightsDataRequest|null);

                    /** ExportInsightsDataMetadata partialErrors. */
                    public partialErrors: google.rpc.IStatus[];

                    /**
                     * Creates a new ExportInsightsDataMetadata instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ExportInsightsDataMetadata instance
                     */
                    public static create(properties?: google.cloud.contactcenterinsights.v1.IExportInsightsDataMetadata): google.cloud.contactcenterinsights.v1.ExportInsightsDataMetadata;

                    /**
                     * Encodes the specified ExportInsightsDataMetadata message. Does not implicitly {@link google.cloud.contactcenterinsights.v1.ExportInsightsDataMetadata.verify|verify} messages.
                     * @param message ExportInsightsDataMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.contactcenterinsights.v1.IExportInsightsDataMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ExportInsightsDataMetadata message, length delimited. Does not implicitly {@link google.cloud.contactcenterinsights.v1.ExportInsightsDataMetadata.verify|verify} messages.
                     * @param message ExportInsightsDataMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.contactcenterinsights.v1.IExportInsightsDataMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ExportInsightsDataMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ExportInsightsDataMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.contactcenterinsights.v1.ExportInsightsDataMetadata;

                    /**
                     * Decodes an ExportInsightsDataMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ExportInsightsDataMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.contactcenterinsights.v1.ExportInsightsDataMetadata;

                    /**
                     * Verifies an ExportInsightsDataMetadata message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ExportInsightsDataMetadata message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ExportInsightsDataMetadata
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.contactcenterinsights.v1.ExportInsightsDataMetadata;

                    /**
                     * Creates a plain object from an ExportInsightsDataMetadata message. Also converts values to other types if specified.
                     * @param message ExportInsightsDataMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.contactcenterinsights.v1.ExportInsightsDataMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ExportInsightsDataMetadata to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an ExportInsightsDataResponse. */
                interface IExportInsightsDataResponse {
                }

                /** Represents an ExportInsightsDataResponse. */
                class ExportInsightsDataResponse implements IExportInsightsDataResponse {

                    /**
                     * Constructs a new ExportInsightsDataResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.contactcenterinsights.v1.IExportInsightsDataResponse);

                    /**
                     * Creates a new ExportInsightsDataResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ExportInsightsDataResponse instance
                     */
                    public static create(properties?: google.cloud.contactcenterinsights.v1.IExportInsightsDataResponse): google.cloud.contactcenterinsights.v1.ExportInsightsDataResponse;

                    /**
                     * Encodes the specified ExportInsightsDataResponse message. Does not implicitly {@link google.cloud.contactcenterinsights.v1.ExportInsightsDataResponse.verify|verify} messages.
                     * @param message ExportInsightsDataResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.contactcenterinsights.v1.IExportInsightsDataResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ExportInsightsDataResponse message, length delimited. Does not implicitly {@link google.cloud.contactcenterinsights.v1.ExportInsightsDataResponse.verify|verify} messages.
                     * @param message ExportInsightsDataResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.contactcenterinsights.v1.IExportInsightsDataResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ExportInsightsDataResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ExportInsightsDataResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.contactcenterinsights.v1.ExportInsightsDataResponse;

                    /**
                     * Decodes an ExportInsightsDataResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ExportInsightsDataResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.contactcenterinsights.v1.ExportInsightsDataResponse;

                    /**
                     * Verifies an ExportInsightsDataResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ExportInsightsDataResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ExportInsightsDataResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.contactcenterinsights.v1.ExportInsightsDataResponse;

                    /**
                     * Creates a plain object from an ExportInsightsDataResponse message. Also converts values to other types if specified.
                     * @param message ExportInsightsDataResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.contactcenterinsights.v1.ExportInsightsDataResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ExportInsightsDataResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a CreateIssueModelRequest. */
                interface ICreateIssueModelRequest {

                    /** CreateIssueModelRequest parent */
                    parent?: (string|null);

                    /** CreateIssueModelRequest issueModel */
                    issueModel?: (google.cloud.contactcenterinsights.v1.IIssueModel|null);
                }

                /** Represents a CreateIssueModelRequest. */
                class CreateIssueModelRequest implements ICreateIssueModelRequest {

                    /**
                     * Constructs a new CreateIssueModelRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.contactcenterinsights.v1.ICreateIssueModelRequest);

                    /** CreateIssueModelRequest parent. */
                    public parent: string;

                    /** CreateIssueModelRequest issueModel. */
                    public issueModel?: (google.cloud.contactcenterinsights.v1.IIssueModel|null);

                    /**
                     * Creates a new CreateIssueModelRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateIssueModelRequest instance
                     */
                    public static create(properties?: google.cloud.contactcenterinsights.v1.ICreateIssueModelRequest): google.cloud.contactcenterinsights.v1.CreateIssueModelRequest;

                    /**
                     * Encodes the specified CreateIssueModelRequest message. Does not implicitly {@link google.cloud.contactcenterinsights.v1.CreateIssueModelRequest.verify|verify} messages.
                     * @param message CreateIssueModelRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.contactcenterinsights.v1.ICreateIssueModelRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateIssueModelRequest message, length delimited. Does not implicitly {@link google.cloud.contactcenterinsights.v1.CreateIssueModelRequest.verify|verify} messages.
                     * @param message CreateIssueModelRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.contactcenterinsights.v1.ICreateIssueModelRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateIssueModelRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateIssueModelRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.contactcenterinsights.v1.CreateIssueModelRequest;

                    /**
                     * Decodes a CreateIssueModelRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateIssueModelRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.contactcenterinsights.v1.CreateIssueModelRequest;

                    /**
                     * Verifies a CreateIssueModelRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateIssueModelRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateIssueModelRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.contactcenterinsights.v1.CreateIssueModelRequest;

                    /**
                     * Creates a plain object from a CreateIssueModelRequest message. Also converts values to other types if specified.
                     * @param message CreateIssueModelRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.contactcenterinsights.v1.CreateIssueModelRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateIssueModelRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a CreateIssueModelMetadata. */
                interface ICreateIssueModelMetadata {

                    /** CreateIssueModelMetadata createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** CreateIssueModelMetadata endTime */
                    endTime?: (google.protobuf.ITimestamp|null);

                    /** CreateIssueModelMetadata request */
                    request?: (google.cloud.contactcenterinsights.v1.ICreateIssueModelRequest|null);
                }

                /** Represents a CreateIssueModelMetadata. */
                class CreateIssueModelMetadata implements ICreateIssueModelMetadata {

                    /**
                     * Constructs a new CreateIssueModelMetadata.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.contactcenterinsights.v1.ICreateIssueModelMetadata);

                    /** CreateIssueModelMetadata createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** CreateIssueModelMetadata endTime. */
                    public endTime?: (google.protobuf.ITimestamp|null);

                    /** CreateIssueModelMetadata request. */
                    public request?: (google.cloud.contactcenterinsights.v1.ICreateIssueModelRequest|null);

                    /**
                     * Creates a new CreateIssueModelMetadata instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateIssueModelMetadata instance
                     */
                    public static create(properties?: google.cloud.contactcenterinsights.v1.ICreateIssueModelMetadata): google.cloud.contactcenterinsights.v1.CreateIssueModelMetadata;

                    /**
                     * Encodes the specified CreateIssueModelMetadata message. Does not implicitly {@link google.cloud.contactcenterinsights.v1.CreateIssueModelMetadata.verify|verify} messages.
                     * @param message CreateIssueModelMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.contactcenterinsights.v1.ICreateIssueModelMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateIssueModelMetadata message, length delimited. Does not implicitly {@link google.cloud.contactcenterinsights.v1.CreateIssueModelMetadata.verify|verify} messages.
                     * @param message CreateIssueModelMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.contactcenterinsights.v1.ICreateIssueModelMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateIssueModelMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateIssueModelMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.contactcenterinsights.v1.CreateIssueModelMetadata;

                    /**
                     * Decodes a CreateIssueModelMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateIssueModelMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.contactcenterinsights.v1.CreateIssueModelMetadata;

                    /**
                     * Verifies a CreateIssueModelMetadata message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateIssueModelMetadata message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateIssueModelMetadata
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.contactcenterinsights.v1.CreateIssueModelMetadata;

                    /**
                     * Creates a plain object from a CreateIssueModelMetadata message. Also converts values to other types if specified.
                     * @param message CreateIssueModelMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.contactcenterinsights.v1.CreateIssueModelMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateIssueModelMetadata to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an UpdateIssueModelRequest. */
                interface IUpdateIssueModelRequest {

                    /** UpdateIssueModelRequest issueModel */
                    issueModel?: (google.cloud.contactcenterinsights.v1.IIssueModel|null);

                    /** UpdateIssueModelRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);
                }

                /** Represents an UpdateIssueModelRequest. */
                class UpdateIssueModelRequest implements IUpdateIssueModelRequest {

                    /**
                     * Constructs a new UpdateIssueModelRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.contactcenterinsights.v1.IUpdateIssueModelRequest);

                    /** UpdateIssueModelRequest issueModel. */
                    public issueModel?: (google.cloud.contactcenterinsights.v1.IIssueModel|null);

                    /** UpdateIssueModelRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /**
                     * Creates a new UpdateIssueModelRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateIssueModelRequest instance
                     */
                    public static create(properties?: google.cloud.contactcenterinsights.v1.IUpdateIssueModelRequest): google.cloud.contactcenterinsights.v1.UpdateIssueModelRequest;

                    /**
                     * Encodes the specified UpdateIssueModelRequest message. Does not implicitly {@link google.cloud.contactcenterinsights.v1.UpdateIssueModelRequest.verify|verify} messages.
                     * @param message UpdateIssueModelRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.contactcenterinsights.v1.IUpdateIssueModelRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateIssueModelRequest message, length delimited. Does not implicitly {@link google.cloud.contactcenterinsights.v1.UpdateIssueModelRequest.verify|verify} messages.
                     * @param message UpdateIssueModelRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.contactcenterinsights.v1.IUpdateIssueModelRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateIssueModelRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateIssueModelRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.contactcenterinsights.v1.UpdateIssueModelRequest;

                    /**
                     * Decodes an UpdateIssueModelRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateIssueModelRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.contactcenterinsights.v1.UpdateIssueModelRequest;

                    /**
                     * Verifies an UpdateIssueModelRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateIssueModelRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateIssueModelRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.contactcenterinsights.v1.UpdateIssueModelRequest;

                    /**
                     * Creates a plain object from an UpdateIssueModelRequest message. Also converts values to other types if specified.
                     * @param message UpdateIssueModelRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.contactcenterinsights.v1.UpdateIssueModelRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateIssueModelRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListIssueModelsRequest. */
                interface IListIssueModelsRequest {

                    /** ListIssueModelsRequest parent */
                    parent?: (string|null);
                }

                /** Represents a ListIssueModelsRequest. */
                class ListIssueModelsRequest implements IListIssueModelsRequest {

                    /**
                     * Constructs a new ListIssueModelsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.contactcenterinsights.v1.IListIssueModelsRequest);

                    /** ListIssueModelsRequest parent. */
                    public parent: string;

                    /**
                     * Creates a new ListIssueModelsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListIssueModelsRequest instance
                     */
                    public static create(properties?: google.cloud.contactcenterinsights.v1.IListIssueModelsRequest): google.cloud.contactcenterinsights.v1.ListIssueModelsRequest;

                    /**
                     * Encodes the specified ListIssueModelsRequest message. Does not implicitly {@link google.cloud.contactcenterinsights.v1.ListIssueModelsRequest.verify|verify} messages.
                     * @param message ListIssueModelsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.contactcenterinsights.v1.IListIssueModelsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListIssueModelsRequest message, length delimited. Does not implicitly {@link google.cloud.contactcenterinsights.v1.ListIssueModelsRequest.verify|verify} messages.
                     * @param message ListIssueModelsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.contactcenterinsights.v1.IListIssueModelsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListIssueModelsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListIssueModelsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.contactcenterinsights.v1.ListIssueModelsRequest;

                    /**
                     * Decodes a ListIssueModelsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListIssueModelsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.contactcenterinsights.v1.ListIssueModelsRequest;

                    /**
                     * Verifies a ListIssueModelsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListIssueModelsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListIssueModelsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.contactcenterinsights.v1.ListIssueModelsRequest;

                    /**
                     * Creates a plain object from a ListIssueModelsRequest message. Also converts values to other types if specified.
                     * @param message ListIssueModelsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.contactcenterinsights.v1.ListIssueModelsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListIssueModelsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListIssueModelsResponse. */
                interface IListIssueModelsResponse {

                    /** ListIssueModelsResponse issueModels */
                    issueModels?: (google.cloud.contactcenterinsights.v1.IIssueModel[]|null);
                }

                /** Represents a ListIssueModelsResponse. */
                class ListIssueModelsResponse implements IListIssueModelsResponse {

                    /**
                     * Constructs a new ListIssueModelsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.contactcenterinsights.v1.IListIssueModelsResponse);

                    /** ListIssueModelsResponse issueModels. */
                    public issueModels: google.cloud.contactcenterinsights.v1.IIssueModel[];

                    /**
                     * Creates a new ListIssueModelsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListIssueModelsResponse instance
                     */
                    public static create(properties?: google.cloud.contactcenterinsights.v1.IListIssueModelsResponse): google.cloud.contactcenterinsights.v1.ListIssueModelsResponse;

                    /**
                     * Encodes the specified ListIssueModelsResponse message. Does not implicitly {@link google.cloud.contactcenterinsights.v1.ListIssueModelsResponse.verify|verify} messages.
                     * @param message ListIssueModelsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.contactcenterinsights.v1.IListIssueModelsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListIssueModelsResponse message, length delimited. Does not implicitly {@link google.cloud.contactcenterinsights.v1.ListIssueModelsResponse.verify|verify} messages.
                     * @param message ListIssueModelsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.contactcenterinsights.v1.IListIssueModelsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListIssueModelsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListIssueModelsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.contactcenterinsights.v1.ListIssueModelsResponse;

                    /**
                     * Decodes a ListIssueModelsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListIssueModelsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.contactcenterinsights.v1.ListIssueModelsResponse;

                    /**
                     * Verifies a ListIssueModelsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListIssueModelsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListIssueModelsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.contactcenterinsights.v1.ListIssueModelsResponse;

                    /**
                     * Creates a plain object from a ListIssueModelsResponse message. Also converts values to other types if specified.
                     * @param message ListIssueModelsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.contactcenterinsights.v1.ListIssueModelsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListIssueModelsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetIssueModelRequest. */
                interface IGetIssueModelRequest {

                    /** GetIssueModelRequest name */
                    name?: (string|null);
                }

                /** Represents a GetIssueModelRequest. */
                class GetIssueModelRequest implements IGetIssueModelRequest {

                    /**
                     * Constructs a new GetIssueModelRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.contactcenterinsights.v1.IGetIssueModelRequest);

                    /** GetIssueModelRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetIssueModelRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetIssueModelRequest instance
                     */
                    public static create(properties?: google.cloud.contactcenterinsights.v1.IGetIssueModelRequest): google.cloud.contactcenterinsights.v1.GetIssueModelRequest;

                    /**
                     * Encodes the specified GetIssueModelRequest message. Does not implicitly {@link google.cloud.contactcenterinsights.v1.GetIssueModelRequest.verify|verify} messages.
                     * @param message GetIssueModelRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.contactcenterinsights.v1.IGetIssueModelRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetIssueModelRequest message, length delimited. Does not implicitly {@link google.cloud.contactcenterinsights.v1.GetIssueModelRequest.verify|verify} messages.
                     * @param message GetIssueModelRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.contactcenterinsights.v1.IGetIssueModelRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetIssueModelRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetIssueModelRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.contactcenterinsights.v1.GetIssueModelRequest;

                    /**
                     * Decodes a GetIssueModelRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetIssueModelRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.contactcenterinsights.v1.GetIssueModelRequest;

                    /**
                     * Verifies a GetIssueModelRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetIssueModelRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetIssueModelRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.contactcenterinsights.v1.GetIssueModelRequest;

                    /**
                     * Creates a plain object from a GetIssueModelRequest message. Also converts values to other types if specified.
                     * @param message GetIssueModelRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.contactcenterinsights.v1.GetIssueModelRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetIssueModelRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DeleteIssueModelRequest. */
                interface IDeleteIssueModelRequest {

                    /** DeleteIssueModelRequest name */
                    name?: (string|null);
                }

                /** Represents a DeleteIssueModelRequest. */
                class DeleteIssueModelRequest implements IDeleteIssueModelRequest {

                    /**
                     * Constructs a new DeleteIssueModelRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.contactcenterinsights.v1.IDeleteIssueModelRequest);

                    /** DeleteIssueModelRequest name. */
                    public name: string;

                    /**
                     * Creates a new DeleteIssueModelRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteIssueModelRequest instance
                     */
                    public static create(properties?: google.cloud.contactcenterinsights.v1.IDeleteIssueModelRequest): google.cloud.contactcenterinsights.v1.DeleteIssueModelRequest;

                    /**
                     * Encodes the specified DeleteIssueModelRequest message. Does not implicitly {@link google.cloud.contactcenterinsights.v1.DeleteIssueModelRequest.verify|verify} messages.
                     * @param message DeleteIssueModelRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.contactcenterinsights.v1.IDeleteIssueModelRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteIssueModelRequest message, length delimited. Does not implicitly {@link google.cloud.contactcenterinsights.v1.DeleteIssueModelRequest.verify|verify} messages.
                     * @param message DeleteIssueModelRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.contactcenterinsights.v1.IDeleteIssueModelRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteIssueModelRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteIssueModelRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.contactcenterinsights.v1.DeleteIssueModelRequest;

                    /**
                     * Decodes a DeleteIssueModelRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteIssueModelRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.contactcenterinsights.v1.DeleteIssueModelRequest;

                    /**
                     * Verifies a DeleteIssueModelRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteIssueModelRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteIssueModelRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.contactcenterinsights.v1.DeleteIssueModelRequest;

                    /**
                     * Creates a plain object from a DeleteIssueModelRequest message. Also converts values to other types if specified.
                     * @param message DeleteIssueModelRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.contactcenterinsights.v1.DeleteIssueModelRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteIssueModelRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DeleteIssueModelMetadata. */
                interface IDeleteIssueModelMetadata {

                    /** DeleteIssueModelMetadata createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** DeleteIssueModelMetadata endTime */
                    endTime?: (google.protobuf.ITimestamp|null);

                    /** DeleteIssueModelMetadata request */
                    request?: (google.cloud.contactcenterinsights.v1.IDeleteIssueModelRequest|null);
                }

                /** Represents a DeleteIssueModelMetadata. */
                class DeleteIssueModelMetadata implements IDeleteIssueModelMetadata {

                    /**
                     * Constructs a new DeleteIssueModelMetadata.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.contactcenterinsights.v1.IDeleteIssueModelMetadata);

                    /** DeleteIssueModelMetadata createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** DeleteIssueModelMetadata endTime. */
                    public endTime?: (google.protobuf.ITimestamp|null);

                    /** DeleteIssueModelMetadata request. */
                    public request?: (google.cloud.contactcenterinsights.v1.IDeleteIssueModelRequest|null);

                    /**
                     * Creates a new DeleteIssueModelMetadata instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteIssueModelMetadata instance
                     */
                    public static create(properties?: google.cloud.contactcenterinsights.v1.IDeleteIssueModelMetadata): google.cloud.contactcenterinsights.v1.DeleteIssueModelMetadata;

                    /**
                     * Encodes the specified DeleteIssueModelMetadata message. Does not implicitly {@link google.cloud.contactcenterinsights.v1.DeleteIssueModelMetadata.verify|verify} messages.
                     * @param message DeleteIssueModelMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.contactcenterinsights.v1.IDeleteIssueModelMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteIssueModelMetadata message, length delimited. Does not implicitly {@link google.cloud.contactcenterinsights.v1.DeleteIssueModelMetadata.verify|verify} messages.
                     * @param message DeleteIssueModelMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.contactcenterinsights.v1.IDeleteIssueModelMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteIssueModelMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteIssueModelMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.contactcenterinsights.v1.DeleteIssueModelMetadata;

                    /**
                     * Decodes a DeleteIssueModelMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteIssueModelMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.contactcenterinsights.v1.DeleteIssueModelMetadata;

                    /**
                     * Verifies a DeleteIssueModelMetadata message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteIssueModelMetadata message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteIssueModelMetadata
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.contactcenterinsights.v1.DeleteIssueModelMetadata;

                    /**
                     * Creates a plain object from a DeleteIssueModelMetadata message. Also converts values to other types if specified.
                     * @param message DeleteIssueModelMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.contactcenterinsights.v1.DeleteIssueModelMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteIssueModelMetadata to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DeployIssueModelRequest. */
                interface IDeployIssueModelRequest {

                    /** DeployIssueModelRequest name */
                    name?: (string|null);
                }

                /** Represents a DeployIssueModelRequest. */
                class DeployIssueModelRequest implements IDeployIssueModelRequest {

                    /**
                     * Constructs a new DeployIssueModelRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.contactcenterinsights.v1.IDeployIssueModelRequest);

                    /** DeployIssueModelRequest name. */
                    public name: string;

                    /**
                     * Creates a new DeployIssueModelRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeployIssueModelRequest instance
                     */
                    public static create(properties?: google.cloud.contactcenterinsights.v1.IDeployIssueModelRequest): google.cloud.contactcenterinsights.v1.DeployIssueModelRequest;

                    /**
                     * Encodes the specified DeployIssueModelRequest message. Does not implicitly {@link google.cloud.contactcenterinsights.v1.DeployIssueModelRequest.verify|verify} messages.
                     * @param message DeployIssueModelRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.contactcenterinsights.v1.IDeployIssueModelRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeployIssueModelRequest message, length delimited. Does not implicitly {@link google.cloud.contactcenterinsights.v1.DeployIssueModelRequest.verify|verify} messages.
                     * @param message DeployIssueModelRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.contactcenterinsights.v1.IDeployIssueModelRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeployIssueModelRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeployIssueModelRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.contactcenterinsights.v1.DeployIssueModelRequest;

                    /**
                     * Decodes a DeployIssueModelRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeployIssueModelRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.contactcenterinsights.v1.DeployIssueModelRequest;

                    /**
                     * Verifies a DeployIssueModelRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeployIssueModelRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeployIssueModelRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.contactcenterinsights.v1.DeployIssueModelRequest;

                    /**
                     * Creates a plain object from a DeployIssueModelRequest message. Also converts values to other types if specified.
                     * @param message DeployIssueModelRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.contactcenterinsights.v1.DeployIssueModelRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeployIssueModelRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DeployIssueModelResponse. */
                interface IDeployIssueModelResponse {
                }

                /** Represents a DeployIssueModelResponse. */
                class DeployIssueModelResponse implements IDeployIssueModelResponse {

                    /**
                     * Constructs a new DeployIssueModelResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.contactcenterinsights.v1.IDeployIssueModelResponse);

                    /**
                     * Creates a new DeployIssueModelResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeployIssueModelResponse instance
                     */
                    public static create(properties?: google.cloud.contactcenterinsights.v1.IDeployIssueModelResponse): google.cloud.contactcenterinsights.v1.DeployIssueModelResponse;

                    /**
                     * Encodes the specified DeployIssueModelResponse message. Does not implicitly {@link google.cloud.contactcenterinsights.v1.DeployIssueModelResponse.verify|verify} messages.
                     * @param message DeployIssueModelResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.contactcenterinsights.v1.IDeployIssueModelResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeployIssueModelResponse message, length delimited. Does not implicitly {@link google.cloud.contactcenterinsights.v1.DeployIssueModelResponse.verify|verify} messages.
                     * @param message DeployIssueModelResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.contactcenterinsights.v1.IDeployIssueModelResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeployIssueModelResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeployIssueModelResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.contactcenterinsights.v1.DeployIssueModelResponse;

                    /**
                     * Decodes a DeployIssueModelResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeployIssueModelResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.contactcenterinsights.v1.DeployIssueModelResponse;

                    /**
                     * Verifies a DeployIssueModelResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeployIssueModelResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeployIssueModelResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.contactcenterinsights.v1.DeployIssueModelResponse;

                    /**
                     * Creates a plain object from a DeployIssueModelResponse message. Also converts values to other types if specified.
                     * @param message DeployIssueModelResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.contactcenterinsights.v1.DeployIssueModelResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeployIssueModelResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DeployIssueModelMetadata. */
                interface IDeployIssueModelMetadata {

                    /** DeployIssueModelMetadata createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** DeployIssueModelMetadata endTime */
                    endTime?: (google.protobuf.ITimestamp|null);

                    /** DeployIssueModelMetadata request */
                    request?: (google.cloud.contactcenterinsights.v1.IDeployIssueModelRequest|null);
                }

                /** Represents a DeployIssueModelMetadata. */
                class DeployIssueModelMetadata implements IDeployIssueModelMetadata {

                    /**
                     * Constructs a new DeployIssueModelMetadata.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.contactcenterinsights.v1.IDeployIssueModelMetadata);

                    /** DeployIssueModelMetadata createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** DeployIssueModelMetadata endTime. */
                    public endTime?: (google.protobuf.ITimestamp|null);

                    /** DeployIssueModelMetadata request. */
                    public request?: (google.cloud.contactcenterinsights.v1.IDeployIssueModelRequest|null);

                    /**
                     * Creates a new DeployIssueModelMetadata instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeployIssueModelMetadata instance
                     */
                    public static create(properties?: google.cloud.contactcenterinsights.v1.IDeployIssueModelMetadata): google.cloud.contactcenterinsights.v1.DeployIssueModelMetadata;

                    /**
                     * Encodes the specified DeployIssueModelMetadata message. Does not implicitly {@link google.cloud.contactcenterinsights.v1.DeployIssueModelMetadata.verify|verify} messages.
                     * @param message DeployIssueModelMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.contactcenterinsights.v1.IDeployIssueModelMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeployIssueModelMetadata message, length delimited. Does not implicitly {@link google.cloud.contactcenterinsights.v1.DeployIssueModelMetadata.verify|verify} messages.
                     * @param message DeployIssueModelMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.contactcenterinsights.v1.IDeployIssueModelMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeployIssueModelMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeployIssueModelMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.contactcenterinsights.v1.DeployIssueModelMetadata;

                    /**
                     * Decodes a DeployIssueModelMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeployIssueModelMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.contactcenterinsights.v1.DeployIssueModelMetadata;

                    /**
                     * Verifies a DeployIssueModelMetadata message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeployIssueModelMetadata message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeployIssueModelMetadata
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.contactcenterinsights.v1.DeployIssueModelMetadata;

                    /**
                     * Creates a plain object from a DeployIssueModelMetadata message. Also converts values to other types if specified.
                     * @param message DeployIssueModelMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.contactcenterinsights.v1.DeployIssueModelMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeployIssueModelMetadata to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an UndeployIssueModelRequest. */
                interface IUndeployIssueModelRequest {

                    /** UndeployIssueModelRequest name */
                    name?: (string|null);
                }

                /** Represents an UndeployIssueModelRequest. */
                class UndeployIssueModelRequest implements IUndeployIssueModelRequest {

                    /**
                     * Constructs a new UndeployIssueModelRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.contactcenterinsights.v1.IUndeployIssueModelRequest);

                    /** UndeployIssueModelRequest name. */
                    public name: string;

                    /**
                     * Creates a new UndeployIssueModelRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UndeployIssueModelRequest instance
                     */
                    public static create(properties?: google.cloud.contactcenterinsights.v1.IUndeployIssueModelRequest): google.cloud.contactcenterinsights.v1.UndeployIssueModelRequest;

                    /**
                     * Encodes the specified UndeployIssueModelRequest message. Does not implicitly {@link google.cloud.contactcenterinsights.v1.UndeployIssueModelRequest.verify|verify} messages.
                     * @param message UndeployIssueModelRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.contactcenterinsights.v1.IUndeployIssueModelRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UndeployIssueModelRequest message, length delimited. Does not implicitly {@link google.cloud.contactcenterinsights.v1.UndeployIssueModelRequest.verify|verify} messages.
                     * @param message UndeployIssueModelRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.contactcenterinsights.v1.IUndeployIssueModelRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UndeployIssueModelRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UndeployIssueModelRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.contactcenterinsights.v1.UndeployIssueModelRequest;

                    /**
                     * Decodes an UndeployIssueModelRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UndeployIssueModelRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.contactcenterinsights.v1.UndeployIssueModelRequest;

                    /**
                     * Verifies an UndeployIssueModelRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UndeployIssueModelRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UndeployIssueModelRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.contactcenterinsights.v1.UndeployIssueModelRequest;

                    /**
                     * Creates a plain object from an UndeployIssueModelRequest message. Also converts values to other types if specified.
                     * @param message UndeployIssueModelRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.contactcenterinsights.v1.UndeployIssueModelRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UndeployIssueModelRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an UndeployIssueModelResponse. */
                interface IUndeployIssueModelResponse {
                }

                /** Represents an UndeployIssueModelResponse. */
                class UndeployIssueModelResponse implements IUndeployIssueModelResponse {

                    /**
                     * Constructs a new UndeployIssueModelResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.contactcenterinsights.v1.IUndeployIssueModelResponse);

                    /**
                     * Creates a new UndeployIssueModelResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UndeployIssueModelResponse instance
                     */
                    public static create(properties?: google.cloud.contactcenterinsights.v1.IUndeployIssueModelResponse): google.cloud.contactcenterinsights.v1.UndeployIssueModelResponse;

                    /**
                     * Encodes the specified UndeployIssueModelResponse message. Does not implicitly {@link google.cloud.contactcenterinsights.v1.UndeployIssueModelResponse.verify|verify} messages.
                     * @param message UndeployIssueModelResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.contactcenterinsights.v1.IUndeployIssueModelResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UndeployIssueModelResponse message, length delimited. Does not implicitly {@link google.cloud.contactcenterinsights.v1.UndeployIssueModelResponse.verify|verify} messages.
                     * @param message UndeployIssueModelResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.contactcenterinsights.v1.IUndeployIssueModelResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UndeployIssueModelResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UndeployIssueModelResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.contactcenterinsights.v1.UndeployIssueModelResponse;

                    /**
                     * Decodes an UndeployIssueModelResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UndeployIssueModelResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.contactcenterinsights.v1.UndeployIssueModelResponse;

                    /**
                     * Verifies an UndeployIssueModelResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UndeployIssueModelResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UndeployIssueModelResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.contactcenterinsights.v1.UndeployIssueModelResponse;

                    /**
                     * Creates a plain object from an UndeployIssueModelResponse message. Also converts values to other types if specified.
                     * @param message UndeployIssueModelResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.contactcenterinsights.v1.UndeployIssueModelResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UndeployIssueModelResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an UndeployIssueModelMetadata. */
                interface IUndeployIssueModelMetadata {

                    /** UndeployIssueModelMetadata createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** UndeployIssueModelMetadata endTime */
                    endTime?: (google.protobuf.ITimestamp|null);

                    /** UndeployIssueModelMetadata request */
                    request?: (google.cloud.contactcenterinsights.v1.IUndeployIssueModelRequest|null);
                }

                /** Represents an UndeployIssueModelMetadata. */
                class UndeployIssueModelMetadata implements IUndeployIssueModelMetadata {

                    /**
                     * Constructs a new UndeployIssueModelMetadata.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.contactcenterinsights.v1.IUndeployIssueModelMetadata);

                    /** UndeployIssueModelMetadata createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** UndeployIssueModelMetadata endTime. */
                    public endTime?: (google.protobuf.ITimestamp|null);

                    /** UndeployIssueModelMetadata request. */
                    public request?: (google.cloud.contactcenterinsights.v1.IUndeployIssueModelRequest|null);

                    /**
                     * Creates a new UndeployIssueModelMetadata instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UndeployIssueModelMetadata instance
                     */
                    public static create(properties?: google.cloud.contactcenterinsights.v1.IUndeployIssueModelMetadata): google.cloud.contactcenterinsights.v1.UndeployIssueModelMetadata;

                    /**
                     * Encodes the specified UndeployIssueModelMetadata message. Does not implicitly {@link google.cloud.contactcenterinsights.v1.UndeployIssueModelMetadata.verify|verify} messages.
                     * @param message UndeployIssueModelMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.contactcenterinsights.v1.IUndeployIssueModelMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UndeployIssueModelMetadata message, length delimited. Does not implicitly {@link google.cloud.contactcenterinsights.v1.UndeployIssueModelMetadata.verify|verify} messages.
                     * @param message UndeployIssueModelMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.contactcenterinsights.v1.IUndeployIssueModelMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UndeployIssueModelMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UndeployIssueModelMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.contactcenterinsights.v1.UndeployIssueModelMetadata;

                    /**
                     * Decodes an UndeployIssueModelMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UndeployIssueModelMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.contactcenterinsights.v1.UndeployIssueModelMetadata;

                    /**
                     * Verifies an UndeployIssueModelMetadata message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UndeployIssueModelMetadata message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UndeployIssueModelMetadata
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.contactcenterinsights.v1.UndeployIssueModelMetadata;

                    /**
                     * Creates a plain object from an UndeployIssueModelMetadata message. Also converts values to other types if specified.
                     * @param message UndeployIssueModelMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.contactcenterinsights.v1.UndeployIssueModelMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UndeployIssueModelMetadata to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetIssueRequest. */
                interface IGetIssueRequest {

                    /** GetIssueRequest name */
                    name?: (string|null);
                }

                /** Represents a GetIssueRequest. */
                class GetIssueRequest implements IGetIssueRequest {

                    /**
                     * Constructs a new GetIssueRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.contactcenterinsights.v1.IGetIssueRequest);

                    /** GetIssueRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetIssueRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetIssueRequest instance
                     */
                    public static create(properties?: google.cloud.contactcenterinsights.v1.IGetIssueRequest): google.cloud.contactcenterinsights.v1.GetIssueRequest;

                    /**
                     * Encodes the specified GetIssueRequest message. Does not implicitly {@link google.cloud.contactcenterinsights.v1.GetIssueRequest.verify|verify} messages.
                     * @param message GetIssueRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.contactcenterinsights.v1.IGetIssueRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetIssueRequest message, length delimited. Does not implicitly {@link google.cloud.contactcenterinsights.v1.GetIssueRequest.verify|verify} messages.
                     * @param message GetIssueRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.contactcenterinsights.v1.IGetIssueRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetIssueRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetIssueRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.contactcenterinsights.v1.GetIssueRequest;

                    /**
                     * Decodes a GetIssueRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetIssueRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.contactcenterinsights.v1.GetIssueRequest;

                    /**
                     * Verifies a GetIssueRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetIssueRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetIssueRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.contactcenterinsights.v1.GetIssueRequest;

                    /**
                     * Creates a plain object from a GetIssueRequest message. Also converts values to other types if specified.
                     * @param message GetIssueRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.contactcenterinsights.v1.GetIssueRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetIssueRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListIssuesRequest. */
                interface IListIssuesRequest {

                    /** ListIssuesRequest parent */
                    parent?: (string|null);
                }

                /** Represents a ListIssuesRequest. */
                class ListIssuesRequest implements IListIssuesRequest {

                    /**
                     * Constructs a new ListIssuesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.contactcenterinsights.v1.IListIssuesRequest);

                    /** ListIssuesRequest parent. */
                    public parent: string;

                    /**
                     * Creates a new ListIssuesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListIssuesRequest instance
                     */
                    public static create(properties?: google.cloud.contactcenterinsights.v1.IListIssuesRequest): google.cloud.contactcenterinsights.v1.ListIssuesRequest;

                    /**
                     * Encodes the specified ListIssuesRequest message. Does not implicitly {@link google.cloud.contactcenterinsights.v1.ListIssuesRequest.verify|verify} messages.
                     * @param message ListIssuesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.contactcenterinsights.v1.IListIssuesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListIssuesRequest message, length delimited. Does not implicitly {@link google.cloud.contactcenterinsights.v1.ListIssuesRequest.verify|verify} messages.
                     * @param message ListIssuesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.contactcenterinsights.v1.IListIssuesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListIssuesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListIssuesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.contactcenterinsights.v1.ListIssuesRequest;

                    /**
                     * Decodes a ListIssuesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListIssuesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.contactcenterinsights.v1.ListIssuesRequest;

                    /**
                     * Verifies a ListIssuesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListIssuesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListIssuesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.contactcenterinsights.v1.ListIssuesRequest;

                    /**
                     * Creates a plain object from a ListIssuesRequest message. Also converts values to other types if specified.
                     * @param message ListIssuesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.contactcenterinsights.v1.ListIssuesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListIssuesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListIssuesResponse. */
                interface IListIssuesResponse {

                    /** ListIssuesResponse issues */
                    issues?: (google.cloud.contactcenterinsights.v1.IIssue[]|null);
                }

                /** Represents a ListIssuesResponse. */
                class ListIssuesResponse implements IListIssuesResponse {

                    /**
                     * Constructs a new ListIssuesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.contactcenterinsights.v1.IListIssuesResponse);

                    /** ListIssuesResponse issues. */
                    public issues: google.cloud.contactcenterinsights.v1.IIssue[];

                    /**
                     * Creates a new ListIssuesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListIssuesResponse instance
                     */
                    public static create(properties?: google.cloud.contactcenterinsights.v1.IListIssuesResponse): google.cloud.contactcenterinsights.v1.ListIssuesResponse;

                    /**
                     * Encodes the specified ListIssuesResponse message. Does not implicitly {@link google.cloud.contactcenterinsights.v1.ListIssuesResponse.verify|verify} messages.
                     * @param message ListIssuesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.contactcenterinsights.v1.IListIssuesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListIssuesResponse message, length delimited. Does not implicitly {@link google.cloud.contactcenterinsights.v1.ListIssuesResponse.verify|verify} messages.
                     * @param message ListIssuesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.contactcenterinsights.v1.IListIssuesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListIssuesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListIssuesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.contactcenterinsights.v1.ListIssuesResponse;

                    /**
                     * Decodes a ListIssuesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListIssuesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.contactcenterinsights.v1.ListIssuesResponse;

                    /**
                     * Verifies a ListIssuesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListIssuesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListIssuesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.contactcenterinsights.v1.ListIssuesResponse;

                    /**
                     * Creates a plain object from a ListIssuesResponse message. Also converts values to other types if specified.
                     * @param message ListIssuesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.contactcenterinsights.v1.ListIssuesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListIssuesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an UpdateIssueRequest. */
                interface IUpdateIssueRequest {

                    /** UpdateIssueRequest issue */
                    issue?: (google.cloud.contactcenterinsights.v1.IIssue|null);

                    /** UpdateIssueRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);
                }

                /** Represents an UpdateIssueRequest. */
                class UpdateIssueRequest implements IUpdateIssueRequest {

                    /**
                     * Constructs a new UpdateIssueRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.contactcenterinsights.v1.IUpdateIssueRequest);

                    /** UpdateIssueRequest issue. */
                    public issue?: (google.cloud.contactcenterinsights.v1.IIssue|null);

                    /** UpdateIssueRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /**
                     * Creates a new UpdateIssueRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateIssueRequest instance
                     */
                    public static create(properties?: google.cloud.contactcenterinsights.v1.IUpdateIssueRequest): google.cloud.contactcenterinsights.v1.UpdateIssueRequest;

                    /**
                     * Encodes the specified UpdateIssueRequest message. Does not implicitly {@link google.cloud.contactcenterinsights.v1.UpdateIssueRequest.verify|verify} messages.
                     * @param message UpdateIssueRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.contactcenterinsights.v1.IUpdateIssueRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateIssueRequest message, length delimited. Does not implicitly {@link google.cloud.contactcenterinsights.v1.UpdateIssueRequest.verify|verify} messages.
                     * @param message UpdateIssueRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.contactcenterinsights.v1.IUpdateIssueRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateIssueRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateIssueRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.contactcenterinsights.v1.UpdateIssueRequest;

                    /**
                     * Decodes an UpdateIssueRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateIssueRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.contactcenterinsights.v1.UpdateIssueRequest;

                    /**
                     * Verifies an UpdateIssueRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateIssueRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateIssueRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.contactcenterinsights.v1.UpdateIssueRequest;

                    /**
                     * Creates a plain object from an UpdateIssueRequest message. Also converts values to other types if specified.
                     * @param message UpdateIssueRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.contactcenterinsights.v1.UpdateIssueRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateIssueRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a CalculateIssueModelStatsRequest. */
                interface ICalculateIssueModelStatsRequest {

                    /** CalculateIssueModelStatsRequest issueModel */
                    issueModel?: (string|null);
                }

                /** Represents a CalculateIssueModelStatsRequest. */
                class CalculateIssueModelStatsRequest implements ICalculateIssueModelStatsRequest {

                    /**
                     * Constructs a new CalculateIssueModelStatsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.contactcenterinsights.v1.ICalculateIssueModelStatsRequest);

                    /** CalculateIssueModelStatsRequest issueModel. */
                    public issueModel: string;

                    /**
                     * Creates a new CalculateIssueModelStatsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CalculateIssueModelStatsRequest instance
                     */
                    public static create(properties?: google.cloud.contactcenterinsights.v1.ICalculateIssueModelStatsRequest): google.cloud.contactcenterinsights.v1.CalculateIssueModelStatsRequest;

                    /**
                     * Encodes the specified CalculateIssueModelStatsRequest message. Does not implicitly {@link google.cloud.contactcenterinsights.v1.CalculateIssueModelStatsRequest.verify|verify} messages.
                     * @param message CalculateIssueModelStatsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.contactcenterinsights.v1.ICalculateIssueModelStatsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CalculateIssueModelStatsRequest message, length delimited. Does not implicitly {@link google.cloud.contactcenterinsights.v1.CalculateIssueModelStatsRequest.verify|verify} messages.
                     * @param message CalculateIssueModelStatsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.contactcenterinsights.v1.ICalculateIssueModelStatsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CalculateIssueModelStatsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CalculateIssueModelStatsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.contactcenterinsights.v1.CalculateIssueModelStatsRequest;

                    /**
                     * Decodes a CalculateIssueModelStatsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CalculateIssueModelStatsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.contactcenterinsights.v1.CalculateIssueModelStatsRequest;

                    /**
                     * Verifies a CalculateIssueModelStatsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CalculateIssueModelStatsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CalculateIssueModelStatsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.contactcenterinsights.v1.CalculateIssueModelStatsRequest;

                    /**
                     * Creates a plain object from a CalculateIssueModelStatsRequest message. Also converts values to other types if specified.
                     * @param message CalculateIssueModelStatsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.contactcenterinsights.v1.CalculateIssueModelStatsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CalculateIssueModelStatsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a CalculateIssueModelStatsResponse. */
                interface ICalculateIssueModelStatsResponse {

                    /** CalculateIssueModelStatsResponse currentStats */
                    currentStats?: (google.cloud.contactcenterinsights.v1.IIssueModelLabelStats|null);
                }

                /** Represents a CalculateIssueModelStatsResponse. */
                class CalculateIssueModelStatsResponse implements ICalculateIssueModelStatsResponse {

                    /**
                     * Constructs a new CalculateIssueModelStatsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.contactcenterinsights.v1.ICalculateIssueModelStatsResponse);

                    /** CalculateIssueModelStatsResponse currentStats. */
                    public currentStats?: (google.cloud.contactcenterinsights.v1.IIssueModelLabelStats|null);

                    /**
                     * Creates a new CalculateIssueModelStatsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CalculateIssueModelStatsResponse instance
                     */
                    public static create(properties?: google.cloud.contactcenterinsights.v1.ICalculateIssueModelStatsResponse): google.cloud.contactcenterinsights.v1.CalculateIssueModelStatsResponse;

                    /**
                     * Encodes the specified CalculateIssueModelStatsResponse message. Does not implicitly {@link google.cloud.contactcenterinsights.v1.CalculateIssueModelStatsResponse.verify|verify} messages.
                     * @param message CalculateIssueModelStatsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.contactcenterinsights.v1.ICalculateIssueModelStatsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CalculateIssueModelStatsResponse message, length delimited. Does not implicitly {@link google.cloud.contactcenterinsights.v1.CalculateIssueModelStatsResponse.verify|verify} messages.
                     * @param message CalculateIssueModelStatsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.contactcenterinsights.v1.ICalculateIssueModelStatsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CalculateIssueModelStatsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CalculateIssueModelStatsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.contactcenterinsights.v1.CalculateIssueModelStatsResponse;

                    /**
                     * Decodes a CalculateIssueModelStatsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CalculateIssueModelStatsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.contactcenterinsights.v1.CalculateIssueModelStatsResponse;

                    /**
                     * Verifies a CalculateIssueModelStatsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CalculateIssueModelStatsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CalculateIssueModelStatsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.contactcenterinsights.v1.CalculateIssueModelStatsResponse;

                    /**
                     * Creates a plain object from a CalculateIssueModelStatsResponse message. Also converts values to other types if specified.
                     * @param message CalculateIssueModelStatsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.contactcenterinsights.v1.CalculateIssueModelStatsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CalculateIssueModelStatsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a CreatePhraseMatcherRequest. */
                interface ICreatePhraseMatcherRequest {

                    /** CreatePhraseMatcherRequest parent */
                    parent?: (string|null);

                    /** CreatePhraseMatcherRequest phraseMatcher */
                    phraseMatcher?: (google.cloud.contactcenterinsights.v1.IPhraseMatcher|null);
                }

                /** Represents a CreatePhraseMatcherRequest. */
                class CreatePhraseMatcherRequest implements ICreatePhraseMatcherRequest {

                    /**
                     * Constructs a new CreatePhraseMatcherRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.contactcenterinsights.v1.ICreatePhraseMatcherRequest);

                    /** CreatePhraseMatcherRequest parent. */
                    public parent: string;

                    /** CreatePhraseMatcherRequest phraseMatcher. */
                    public phraseMatcher?: (google.cloud.contactcenterinsights.v1.IPhraseMatcher|null);

                    /**
                     * Creates a new CreatePhraseMatcherRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreatePhraseMatcherRequest instance
                     */
                    public static create(properties?: google.cloud.contactcenterinsights.v1.ICreatePhraseMatcherRequest): google.cloud.contactcenterinsights.v1.CreatePhraseMatcherRequest;

                    /**
                     * Encodes the specified CreatePhraseMatcherRequest message. Does not implicitly {@link google.cloud.contactcenterinsights.v1.CreatePhraseMatcherRequest.verify|verify} messages.
                     * @param message CreatePhraseMatcherRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.contactcenterinsights.v1.ICreatePhraseMatcherRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreatePhraseMatcherRequest message, length delimited. Does not implicitly {@link google.cloud.contactcenterinsights.v1.CreatePhraseMatcherRequest.verify|verify} messages.
                     * @param message CreatePhraseMatcherRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.contactcenterinsights.v1.ICreatePhraseMatcherRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreatePhraseMatcherRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreatePhraseMatcherRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.contactcenterinsights.v1.CreatePhraseMatcherRequest;

                    /**
                     * Decodes a CreatePhraseMatcherRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreatePhraseMatcherRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.contactcenterinsights.v1.CreatePhraseMatcherRequest;

                    /**
                     * Verifies a CreatePhraseMatcherRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreatePhraseMatcherRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreatePhraseMatcherRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.contactcenterinsights.v1.CreatePhraseMatcherRequest;

                    /**
                     * Creates a plain object from a CreatePhraseMatcherRequest message. Also converts values to other types if specified.
                     * @param message CreatePhraseMatcherRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.contactcenterinsights.v1.CreatePhraseMatcherRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreatePhraseMatcherRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListPhraseMatchersRequest. */
                interface IListPhraseMatchersRequest {

                    /** ListPhraseMatchersRequest parent */
                    parent?: (string|null);

                    /** ListPhraseMatchersRequest pageSize */
                    pageSize?: (number|null);

                    /** ListPhraseMatchersRequest pageToken */
                    pageToken?: (string|null);

                    /** ListPhraseMatchersRequest filter */
                    filter?: (string|null);
                }

                /** Represents a ListPhraseMatchersRequest. */
                class ListPhraseMatchersRequest implements IListPhraseMatchersRequest {

                    /**
                     * Constructs a new ListPhraseMatchersRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.contactcenterinsights.v1.IListPhraseMatchersRequest);

                    /** ListPhraseMatchersRequest parent. */
                    public parent: string;

                    /** ListPhraseMatchersRequest pageSize. */
                    public pageSize: number;

                    /** ListPhraseMatchersRequest pageToken. */
                    public pageToken: string;

                    /** ListPhraseMatchersRequest filter. */
                    public filter: string;

                    /**
                     * Creates a new ListPhraseMatchersRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListPhraseMatchersRequest instance
                     */
                    public static create(properties?: google.cloud.contactcenterinsights.v1.IListPhraseMatchersRequest): google.cloud.contactcenterinsights.v1.ListPhraseMatchersRequest;

                    /**
                     * Encodes the specified ListPhraseMatchersRequest message. Does not implicitly {@link google.cloud.contactcenterinsights.v1.ListPhraseMatchersRequest.verify|verify} messages.
                     * @param message ListPhraseMatchersRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.contactcenterinsights.v1.IListPhraseMatchersRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListPhraseMatchersRequest message, length delimited. Does not implicitly {@link google.cloud.contactcenterinsights.v1.ListPhraseMatchersRequest.verify|verify} messages.
                     * @param message ListPhraseMatchersRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.contactcenterinsights.v1.IListPhraseMatchersRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListPhraseMatchersRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListPhraseMatchersRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.contactcenterinsights.v1.ListPhraseMatchersRequest;

                    /**
                     * Decodes a ListPhraseMatchersRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListPhraseMatchersRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.contactcenterinsights.v1.ListPhraseMatchersRequest;

                    /**
                     * Verifies a ListPhraseMatchersRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListPhraseMatchersRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListPhraseMatchersRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.contactcenterinsights.v1.ListPhraseMatchersRequest;

                    /**
                     * Creates a plain object from a ListPhraseMatchersRequest message. Also converts values to other types if specified.
                     * @param message ListPhraseMatchersRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.contactcenterinsights.v1.ListPhraseMatchersRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListPhraseMatchersRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListPhraseMatchersResponse. */
                interface IListPhraseMatchersResponse {

                    /** ListPhraseMatchersResponse phraseMatchers */
                    phraseMatchers?: (google.cloud.contactcenterinsights.v1.IPhraseMatcher[]|null);

                    /** ListPhraseMatchersResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListPhraseMatchersResponse. */
                class ListPhraseMatchersResponse implements IListPhraseMatchersResponse {

                    /**
                     * Constructs a new ListPhraseMatchersResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.contactcenterinsights.v1.IListPhraseMatchersResponse);

                    /** ListPhraseMatchersResponse phraseMatchers. */
                    public phraseMatchers: google.cloud.contactcenterinsights.v1.IPhraseMatcher[];

                    /** ListPhraseMatchersResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListPhraseMatchersResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListPhraseMatchersResponse instance
                     */
                    public static create(properties?: google.cloud.contactcenterinsights.v1.IListPhraseMatchersResponse): google.cloud.contactcenterinsights.v1.ListPhraseMatchersResponse;

                    /**
                     * Encodes the specified ListPhraseMatchersResponse message. Does not implicitly {@link google.cloud.contactcenterinsights.v1.ListPhraseMatchersResponse.verify|verify} messages.
                     * @param message ListPhraseMatchersResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.contactcenterinsights.v1.IListPhraseMatchersResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListPhraseMatchersResponse message, length delimited. Does not implicitly {@link google.cloud.contactcenterinsights.v1.ListPhraseMatchersResponse.verify|verify} messages.
                     * @param message ListPhraseMatchersResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.contactcenterinsights.v1.IListPhraseMatchersResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListPhraseMatchersResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListPhraseMatchersResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.contactcenterinsights.v1.ListPhraseMatchersResponse;

                    /**
                     * Decodes a ListPhraseMatchersResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListPhraseMatchersResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.contactcenterinsights.v1.ListPhraseMatchersResponse;

                    /**
                     * Verifies a ListPhraseMatchersResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListPhraseMatchersResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListPhraseMatchersResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.contactcenterinsights.v1.ListPhraseMatchersResponse;

                    /**
                     * Creates a plain object from a ListPhraseMatchersResponse message. Also converts values to other types if specified.
                     * @param message ListPhraseMatchersResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.contactcenterinsights.v1.ListPhraseMatchersResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListPhraseMatchersResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetPhraseMatcherRequest. */
                interface IGetPhraseMatcherRequest {

                    /** GetPhraseMatcherRequest name */
                    name?: (string|null);
                }

                /** Represents a GetPhraseMatcherRequest. */
                class GetPhraseMatcherRequest implements IGetPhraseMatcherRequest {

                    /**
                     * Constructs a new GetPhraseMatcherRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.contactcenterinsights.v1.IGetPhraseMatcherRequest);

                    /** GetPhraseMatcherRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetPhraseMatcherRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetPhraseMatcherRequest instance
                     */
                    public static create(properties?: google.cloud.contactcenterinsights.v1.IGetPhraseMatcherRequest): google.cloud.contactcenterinsights.v1.GetPhraseMatcherRequest;

                    /**
                     * Encodes the specified GetPhraseMatcherRequest message. Does not implicitly {@link google.cloud.contactcenterinsights.v1.GetPhraseMatcherRequest.verify|verify} messages.
                     * @param message GetPhraseMatcherRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.contactcenterinsights.v1.IGetPhraseMatcherRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetPhraseMatcherRequest message, length delimited. Does not implicitly {@link google.cloud.contactcenterinsights.v1.GetPhraseMatcherRequest.verify|verify} messages.
                     * @param message GetPhraseMatcherRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.contactcenterinsights.v1.IGetPhraseMatcherRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetPhraseMatcherRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetPhraseMatcherRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.contactcenterinsights.v1.GetPhraseMatcherRequest;

                    /**
                     * Decodes a GetPhraseMatcherRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetPhraseMatcherRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.contactcenterinsights.v1.GetPhraseMatcherRequest;

                    /**
                     * Verifies a GetPhraseMatcherRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetPhraseMatcherRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetPhraseMatcherRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.contactcenterinsights.v1.GetPhraseMatcherRequest;

                    /**
                     * Creates a plain object from a GetPhraseMatcherRequest message. Also converts values to other types if specified.
                     * @param message GetPhraseMatcherRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.contactcenterinsights.v1.GetPhraseMatcherRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetPhraseMatcherRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DeletePhraseMatcherRequest. */
                interface IDeletePhraseMatcherRequest {

                    /** DeletePhraseMatcherRequest name */
                    name?: (string|null);
                }

                /** Represents a DeletePhraseMatcherRequest. */
                class DeletePhraseMatcherRequest implements IDeletePhraseMatcherRequest {

                    /**
                     * Constructs a new DeletePhraseMatcherRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.contactcenterinsights.v1.IDeletePhraseMatcherRequest);

                    /** DeletePhraseMatcherRequest name. */
                    public name: string;

                    /**
                     * Creates a new DeletePhraseMatcherRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeletePhraseMatcherRequest instance
                     */
                    public static create(properties?: google.cloud.contactcenterinsights.v1.IDeletePhraseMatcherRequest): google.cloud.contactcenterinsights.v1.DeletePhraseMatcherRequest;

                    /**
                     * Encodes the specified DeletePhraseMatcherRequest message. Does not implicitly {@link google.cloud.contactcenterinsights.v1.DeletePhraseMatcherRequest.verify|verify} messages.
                     * @param message DeletePhraseMatcherRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.contactcenterinsights.v1.IDeletePhraseMatcherRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeletePhraseMatcherRequest message, length delimited. Does not implicitly {@link google.cloud.contactcenterinsights.v1.DeletePhraseMatcherRequest.verify|verify} messages.
                     * @param message DeletePhraseMatcherRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.contactcenterinsights.v1.IDeletePhraseMatcherRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeletePhraseMatcherRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeletePhraseMatcherRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.contactcenterinsights.v1.DeletePhraseMatcherRequest;

                    /**
                     * Decodes a DeletePhraseMatcherRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeletePhraseMatcherRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.contactcenterinsights.v1.DeletePhraseMatcherRequest;

                    /**
                     * Verifies a DeletePhraseMatcherRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeletePhraseMatcherRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeletePhraseMatcherRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.contactcenterinsights.v1.DeletePhraseMatcherRequest;

                    /**
                     * Creates a plain object from a DeletePhraseMatcherRequest message. Also converts values to other types if specified.
                     * @param message DeletePhraseMatcherRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.contactcenterinsights.v1.DeletePhraseMatcherRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeletePhraseMatcherRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an UpdatePhraseMatcherRequest. */
                interface IUpdatePhraseMatcherRequest {

                    /** UpdatePhraseMatcherRequest phraseMatcher */
                    phraseMatcher?: (google.cloud.contactcenterinsights.v1.IPhraseMatcher|null);

                    /** UpdatePhraseMatcherRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);
                }

                /** Represents an UpdatePhraseMatcherRequest. */
                class UpdatePhraseMatcherRequest implements IUpdatePhraseMatcherRequest {

                    /**
                     * Constructs a new UpdatePhraseMatcherRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.contactcenterinsights.v1.IUpdatePhraseMatcherRequest);

                    /** UpdatePhraseMatcherRequest phraseMatcher. */
                    public phraseMatcher?: (google.cloud.contactcenterinsights.v1.IPhraseMatcher|null);

                    /** UpdatePhraseMatcherRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /**
                     * Creates a new UpdatePhraseMatcherRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdatePhraseMatcherRequest instance
                     */
                    public static create(properties?: google.cloud.contactcenterinsights.v1.IUpdatePhraseMatcherRequest): google.cloud.contactcenterinsights.v1.UpdatePhraseMatcherRequest;

                    /**
                     * Encodes the specified UpdatePhraseMatcherRequest message. Does not implicitly {@link google.cloud.contactcenterinsights.v1.UpdatePhraseMatcherRequest.verify|verify} messages.
                     * @param message UpdatePhraseMatcherRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.contactcenterinsights.v1.IUpdatePhraseMatcherRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdatePhraseMatcherRequest message, length delimited. Does not implicitly {@link google.cloud.contactcenterinsights.v1.UpdatePhraseMatcherRequest.verify|verify} messages.
                     * @param message UpdatePhraseMatcherRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.contactcenterinsights.v1.IUpdatePhraseMatcherRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdatePhraseMatcherRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdatePhraseMatcherRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.contactcenterinsights.v1.UpdatePhraseMatcherRequest;

                    /**
                     * Decodes an UpdatePhraseMatcherRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdatePhraseMatcherRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.contactcenterinsights.v1.UpdatePhraseMatcherRequest;

                    /**
                     * Verifies an UpdatePhraseMatcherRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdatePhraseMatcherRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdatePhraseMatcherRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.contactcenterinsights.v1.UpdatePhraseMatcherRequest;

                    /**
                     * Creates a plain object from an UpdatePhraseMatcherRequest message. Also converts values to other types if specified.
                     * @param message UpdatePhraseMatcherRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.contactcenterinsights.v1.UpdatePhraseMatcherRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdatePhraseMatcherRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetSettingsRequest. */
                interface IGetSettingsRequest {

                    /** GetSettingsRequest name */
                    name?: (string|null);
                }

                /** Represents a GetSettingsRequest. */
                class GetSettingsRequest implements IGetSettingsRequest {

                    /**
                     * Constructs a new GetSettingsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.contactcenterinsights.v1.IGetSettingsRequest);

                    /** GetSettingsRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetSettingsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetSettingsRequest instance
                     */
                    public static create(properties?: google.cloud.contactcenterinsights.v1.IGetSettingsRequest): google.cloud.contactcenterinsights.v1.GetSettingsRequest;

                    /**
                     * Encodes the specified GetSettingsRequest message. Does not implicitly {@link google.cloud.contactcenterinsights.v1.GetSettingsRequest.verify|verify} messages.
                     * @param message GetSettingsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.contactcenterinsights.v1.IGetSettingsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetSettingsRequest message, length delimited. Does not implicitly {@link google.cloud.contactcenterinsights.v1.GetSettingsRequest.verify|verify} messages.
                     * @param message GetSettingsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.contactcenterinsights.v1.IGetSettingsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetSettingsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetSettingsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.contactcenterinsights.v1.GetSettingsRequest;

                    /**
                     * Decodes a GetSettingsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetSettingsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.contactcenterinsights.v1.GetSettingsRequest;

                    /**
                     * Verifies a GetSettingsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetSettingsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetSettingsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.contactcenterinsights.v1.GetSettingsRequest;

                    /**
                     * Creates a plain object from a GetSettingsRequest message. Also converts values to other types if specified.
                     * @param message GetSettingsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.contactcenterinsights.v1.GetSettingsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetSettingsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an UpdateSettingsRequest. */
                interface IUpdateSettingsRequest {

                    /** UpdateSettingsRequest settings */
                    settings?: (google.cloud.contactcenterinsights.v1.ISettings|null);

                    /** UpdateSettingsRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);
                }

                /** Represents an UpdateSettingsRequest. */
                class UpdateSettingsRequest implements IUpdateSettingsRequest {

                    /**
                     * Constructs a new UpdateSettingsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.contactcenterinsights.v1.IUpdateSettingsRequest);

                    /** UpdateSettingsRequest settings. */
                    public settings?: (google.cloud.contactcenterinsights.v1.ISettings|null);

                    /** UpdateSettingsRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /**
                     * Creates a new UpdateSettingsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateSettingsRequest instance
                     */
                    public static create(properties?: google.cloud.contactcenterinsights.v1.IUpdateSettingsRequest): google.cloud.contactcenterinsights.v1.UpdateSettingsRequest;

                    /**
                     * Encodes the specified UpdateSettingsRequest message. Does not implicitly {@link google.cloud.contactcenterinsights.v1.UpdateSettingsRequest.verify|verify} messages.
                     * @param message UpdateSettingsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.contactcenterinsights.v1.IUpdateSettingsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateSettingsRequest message, length delimited. Does not implicitly {@link google.cloud.contactcenterinsights.v1.UpdateSettingsRequest.verify|verify} messages.
                     * @param message UpdateSettingsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.contactcenterinsights.v1.IUpdateSettingsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateSettingsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateSettingsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.contactcenterinsights.v1.UpdateSettingsRequest;

                    /**
                     * Decodes an UpdateSettingsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateSettingsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.contactcenterinsights.v1.UpdateSettingsRequest;

                    /**
                     * Verifies an UpdateSettingsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateSettingsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateSettingsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.contactcenterinsights.v1.UpdateSettingsRequest;

                    /**
                     * Creates a plain object from an UpdateSettingsRequest message. Also converts values to other types if specified.
                     * @param message UpdateSettingsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.contactcenterinsights.v1.UpdateSettingsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateSettingsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a Conversation. */
                interface IConversation {

                    /** Conversation callMetadata */
                    callMetadata?: (google.cloud.contactcenterinsights.v1.Conversation.ICallMetadata|null);

                    /** Conversation expireTime */
                    expireTime?: (google.protobuf.ITimestamp|null);

                    /** Conversation ttl */
                    ttl?: (google.protobuf.IDuration|null);

                    /** Conversation name */
                    name?: (string|null);

                    /** Conversation dataSource */
                    dataSource?: (google.cloud.contactcenterinsights.v1.IConversationDataSource|null);

                    /** Conversation createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** Conversation updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** Conversation startTime */
                    startTime?: (google.protobuf.ITimestamp|null);

                    /** Conversation languageCode */
                    languageCode?: (string|null);

                    /** Conversation agentId */
                    agentId?: (string|null);

                    /** Conversation labels */
                    labels?: ({ [k: string]: string }|null);

                    /** Conversation transcript */
                    transcript?: (google.cloud.contactcenterinsights.v1.Conversation.ITranscript|null);

                    /** Conversation medium */
                    medium?: (google.cloud.contactcenterinsights.v1.Conversation.Medium|keyof typeof google.cloud.contactcenterinsights.v1.Conversation.Medium|null);

                    /** Conversation duration */
                    duration?: (google.protobuf.IDuration|null);

                    /** Conversation turnCount */
                    turnCount?: (number|null);

                    /** Conversation latestAnalysis */
                    latestAnalysis?: (google.cloud.contactcenterinsights.v1.IAnalysis|null);

                    /** Conversation runtimeAnnotations */
                    runtimeAnnotations?: (google.cloud.contactcenterinsights.v1.IRuntimeAnnotation[]|null);

                    /** Conversation dialogflowIntents */
                    dialogflowIntents?: ({ [k: string]: google.cloud.contactcenterinsights.v1.IDialogflowIntent }|null);
                }

                /** Represents a Conversation. */
                class Conversation implements IConversation {

                    /**
                     * Constructs a new Conversation.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.contactcenterinsights.v1.IConversation);

                    /** Conversation callMetadata. */
                    public callMetadata?: (google.cloud.contactcenterinsights.v1.Conversation.ICallMetadata|null);

                    /** Conversation expireTime. */
                    public expireTime?: (google.protobuf.ITimestamp|null);

                    /** Conversation ttl. */
                    public ttl?: (google.protobuf.IDuration|null);

                    /** Conversation name. */
                    public name: string;

                    /** Conversation dataSource. */
                    public dataSource?: (google.cloud.contactcenterinsights.v1.IConversationDataSource|null);

                    /** Conversation createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** Conversation updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** Conversation startTime. */
                    public startTime?: (google.protobuf.ITimestamp|null);

                    /** Conversation languageCode. */
                    public languageCode: string;

                    /** Conversation agentId. */
                    public agentId: string;

                    /** Conversation labels. */
                    public labels: { [k: string]: string };

                    /** Conversation transcript. */
                    public transcript?: (google.cloud.contactcenterinsights.v1.Conversation.ITranscript|null);

                    /** Conversation medium. */
                    public medium: (google.cloud.contactcenterinsights.v1.Conversation.Medium|keyof typeof google.cloud.contactcenterinsights.v1.Conversation.Medium);

                    /** Conversation duration. */
                    public duration?: (google.protobuf.IDuration|null);

                    /** Conversation turnCount. */
                    public turnCount: number;

                    /** Conversation latestAnalysis. */
                    public latestAnalysis?: (google.cloud.contactcenterinsights.v1.IAnalysis|null);

                    /** Conversation runtimeAnnotations. */
                    public runtimeAnnotations: google.cloud.contactcenterinsights.v1.IRuntimeAnnotation[];

                    /** Conversation dialogflowIntents. */
                    public dialogflowIntents: { [k: string]: google.cloud.contactcenterinsights.v1.IDialogflowIntent };

                    /** Conversation metadata. */
                    public metadata?: "callMetadata";

                    /** Conversation expiration. */
                    public expiration?: ("expireTime"|"ttl");

                    /**
                     * Creates a new Conversation instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Conversation instance
                     */
                    public static create(properties?: google.cloud.contactcenterinsights.v1.IConversation): google.cloud.contactcenterinsights.v1.Conversation;

                    /**
                     * Encodes the specified Conversation message. Does not implicitly {@link google.cloud.contactcenterinsights.v1.Conversation.verify|verify} messages.
                     * @param message Conversation message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.contactcenterinsights.v1.IConversation, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Conversation message, length delimited. Does not implicitly {@link google.cloud.contactcenterinsights.v1.Conversation.verify|verify} messages.
                     * @param message Conversation message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.contactcenterinsights.v1.IConversation, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Conversation message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Conversation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.contactcenterinsights.v1.Conversation;

                    /**
                     * Decodes a Conversation message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Conversation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.contactcenterinsights.v1.Conversation;

                    /**
                     * Verifies a Conversation message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Conversation message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Conversation
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.contactcenterinsights.v1.Conversation;

                    /**
                     * Creates a plain object from a Conversation message. Also converts values to other types if specified.
                     * @param message Conversation
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.contactcenterinsights.v1.Conversation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Conversation to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace Conversation {

                    /** Properties of a CallMetadata. */
                    interface ICallMetadata {

                        /** CallMetadata customerChannel */
                        customerChannel?: (number|null);

                        /** CallMetadata agentChannel */
                        agentChannel?: (number|null);
                    }

                    /** Represents a CallMetadata. */
                    class CallMetadata implements ICallMetadata {

                        /**
                         * Constructs a new CallMetadata.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.contactcenterinsights.v1.Conversation.ICallMetadata);

                        /** CallMetadata customerChannel. */
                        public customerChannel: number;

                        /** CallMetadata agentChannel. */
                        public agentChannel: number;

                        /**
                         * Creates a new CallMetadata instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns CallMetadata instance
                         */
                        public static create(properties?: google.cloud.contactcenterinsights.v1.Conversation.ICallMetadata): google.cloud.contactcenterinsights.v1.Conversation.CallMetadata;

                        /**
                         * Encodes the specified CallMetadata message. Does not implicitly {@link google.cloud.contactcenterinsights.v1.Conversation.CallMetadata.verify|verify} messages.
                         * @param message CallMetadata message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.contactcenterinsights.v1.Conversation.ICallMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified CallMetadata message, length delimited. Does not implicitly {@link google.cloud.contactcenterinsights.v1.Conversation.CallMetadata.verify|verify} messages.
                         * @param message CallMetadata message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.contactcenterinsights.v1.Conversation.ICallMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a CallMetadata message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns CallMetadata
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.contactcenterinsights.v1.Conversation.CallMetadata;

                        /**
                         * Decodes a CallMetadata message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns CallMetadata
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.contactcenterinsights.v1.Conversation.CallMetadata;

                        /**
                         * Verifies a CallMetadata message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a CallMetadata message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns CallMetadata
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.contactcenterinsights.v1.Conversation.CallMetadata;

                        /**
                         * Creates a plain object from a CallMetadata message. Also converts values to other types if specified.
                         * @param message CallMetadata
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.contactcenterinsights.v1.Conversation.CallMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this CallMetadata to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a Transcript. */
                    interface ITranscript {

                        /** Transcript transcriptSegments */
                        transcriptSegments?: (google.cloud.contactcenterinsights.v1.Conversation.Transcript.ITranscriptSegment[]|null);
                    }

                    /** Represents a Transcript. */
                    class Transcript implements ITranscript {

                        /**
                         * Constructs a new Transcript.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.contactcenterinsights.v1.Conversation.ITranscript);

                        /** Transcript transcriptSegments. */
                        public transcriptSegments: google.cloud.contactcenterinsights.v1.Conversation.Transcript.ITranscriptSegment[];

                        /**
                         * Creates a new Transcript instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Transcript instance
                         */
                        public static create(properties?: google.cloud.contactcenterinsights.v1.Conversation.ITranscript): google.cloud.contactcenterinsights.v1.Conversation.Transcript;

                        /**
                         * Encodes the specified Transcript message. Does not implicitly {@link google.cloud.contactcenterinsights.v1.Conversation.Transcript.verify|verify} messages.
                         * @param message Transcript message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.contactcenterinsights.v1.Conversation.ITranscript, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Transcript message, length delimited. Does not implicitly {@link google.cloud.contactcenterinsights.v1.Conversation.Transcript.verify|verify} messages.
                         * @param message Transcript message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.contactcenterinsights.v1.Conversation.ITranscript, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Transcript message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Transcript
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.contactcenterinsights.v1.Conversation.Transcript;

                        /**
                         * Decodes a Transcript message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Transcript
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.contactcenterinsights.v1.Conversation.Transcript;

                        /**
                         * Verifies a Transcript message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Transcript message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Transcript
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.contactcenterinsights.v1.Conversation.Transcript;

                        /**
                         * Creates a plain object from a Transcript message. Also converts values to other types if specified.
                         * @param message Transcript
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.contactcenterinsights.v1.Conversation.Transcript, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Transcript to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    namespace Transcript {

                        /** Properties of a TranscriptSegment. */
                        interface ITranscriptSegment {

                            /** TranscriptSegment messageTime */
                            messageTime?: (google.protobuf.ITimestamp|null);

                            /** TranscriptSegment text */
                            text?: (string|null);

                            /** TranscriptSegment confidence */
                            confidence?: (number|null);

                            /** TranscriptSegment words */
                            words?: (google.cloud.contactcenterinsights.v1.Conversation.Transcript.TranscriptSegment.IWordInfo[]|null);

                            /** TranscriptSegment languageCode */
                            languageCode?: (string|null);

                            /** TranscriptSegment channelTag */
                            channelTag?: (number|null);

                            /** TranscriptSegment segmentParticipant */
                            segmentParticipant?: (google.cloud.contactcenterinsights.v1.IConversationParticipant|null);

                            /** TranscriptSegment dialogflowSegmentMetadata */
                            dialogflowSegmentMetadata?: (google.cloud.contactcenterinsights.v1.Conversation.Transcript.TranscriptSegment.IDialogflowSegmentMetadata|null);

                            /** TranscriptSegment sentiment */
                            sentiment?: (google.cloud.contactcenterinsights.v1.ISentimentData|null);
                        }

                        /** Represents a TranscriptSegment. */
                        class TranscriptSegment implements ITranscriptSegment {

                            /**
                             * Constructs a new TranscriptSegment.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.contactcenterinsights.v1.Conversation.Transcript.ITranscriptSegment);

                            /** TranscriptSegment messageTime. */
                            public messageTime?: (google.protobuf.ITimestamp|null);

                            /** TranscriptSegment text. */
                            public text: string;

                            /** TranscriptSegment confidence. */
                            public confidence: number;

                            /** TranscriptSegment words. */
                            public words: google.cloud.contactcenterinsights.v1.Conversation.Transcript.TranscriptSegment.IWordInfo[];

                            /** TranscriptSegment languageCode. */
                            public languageCode: string;

                            /** TranscriptSegment channelTag. */
                            public channelTag: number;

                            /** TranscriptSegment segmentParticipant. */
                            public segmentParticipant?: (google.cloud.contactcenterinsights.v1.IConversationParticipant|null);

                            /** TranscriptSegment dialogflowSegmentMetadata. */
                            public dialogflowSegmentMetadata?: (google.cloud.contactcenterinsights.v1.Conversation.Transcript.TranscriptSegment.IDialogflowSegmentMetadata|null);

                            /** TranscriptSegment sentiment. */
                            public sentiment?: (google.cloud.contactcenterinsights.v1.ISentimentData|null);

                            /**
                             * Creates a new TranscriptSegment instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns TranscriptSegment instance
                             */
                            public static create(properties?: google.cloud.contactcenterinsights.v1.Conversation.Transcript.ITranscriptSegment): google.cloud.contactcenterinsights.v1.Conversation.Transcript.TranscriptSegment;

                            /**
                             * Encodes the specified TranscriptSegment message. Does not implicitly {@link google.cloud.contactcenterinsights.v1.Conversation.Transcript.TranscriptSegment.verify|verify} messages.
                             * @param message TranscriptSegment message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.contactcenterinsights.v1.Conversation.Transcript.ITranscriptSegment, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified TranscriptSegment message, length delimited. Does not implicitly {@link google.cloud.contactcenterinsights.v1.Conversation.Transcript.TranscriptSegment.verify|verify} messages.
                             * @param message TranscriptSegment message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.contactcenterinsights.v1.Conversation.Transcript.ITranscriptSegment, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a TranscriptSegment message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns TranscriptSegment
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.contactcenterinsights.v1.Conversation.Transcript.TranscriptSegment;

                            /**
                             * Decodes a TranscriptSegment message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns TranscriptSegment
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.contactcenterinsights.v1.Conversation.Transcript.TranscriptSegment;

                            /**
                             * Verifies a TranscriptSegment message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a TranscriptSegment message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns TranscriptSegment
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.contactcenterinsights.v1.Conversation.Transcript.TranscriptSegment;

                            /**
                             * Creates a plain object from a TranscriptSegment message. Also converts values to other types if specified.
                             * @param message TranscriptSegment
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.contactcenterinsights.v1.Conversation.Transcript.TranscriptSegment, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this TranscriptSegment to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        namespace TranscriptSegment {

                            /** Properties of a WordInfo. */
                            interface IWordInfo {

                                /** WordInfo startOffset */
                                startOffset?: (google.protobuf.IDuration|null);

                                /** WordInfo endOffset */
                                endOffset?: (google.protobuf.IDuration|null);

                                /** WordInfo word */
                                word?: (string|null);

                                /** WordInfo confidence */
                                confidence?: (number|null);
                            }

                            /** Represents a WordInfo. */
                            class WordInfo implements IWordInfo {

                                /**
                                 * Constructs a new WordInfo.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: google.cloud.contactcenterinsights.v1.Conversation.Transcript.TranscriptSegment.IWordInfo);

                                /** WordInfo startOffset. */
                                public startOffset?: (google.protobuf.IDuration|null);

                                /** WordInfo endOffset. */
                                public endOffset?: (google.protobuf.IDuration|null);

                                /** WordInfo word. */
                                public word: string;

                                /** WordInfo confidence. */
                                public confidence: number;

                                /**
                                 * Creates a new WordInfo instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns WordInfo instance
                                 */
                                public static create(properties?: google.cloud.contactcenterinsights.v1.Conversation.Transcript.TranscriptSegment.IWordInfo): google.cloud.contactcenterinsights.v1.Conversation.Transcript.TranscriptSegment.WordInfo;

                                /**
                                 * Encodes the specified WordInfo message. Does not implicitly {@link google.cloud.contactcenterinsights.v1.Conversation.Transcript.TranscriptSegment.WordInfo.verify|verify} messages.
                                 * @param message WordInfo message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: google.cloud.contactcenterinsights.v1.Conversation.Transcript.TranscriptSegment.IWordInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Encodes the specified WordInfo message, length delimited. Does not implicitly {@link google.cloud.contactcenterinsights.v1.Conversation.Transcript.TranscriptSegment.WordInfo.verify|verify} messages.
                                 * @param message WordInfo message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: google.cloud.contactcenterinsights.v1.Conversation.Transcript.TranscriptSegment.IWordInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Decodes a WordInfo message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns WordInfo
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.contactcenterinsights.v1.Conversation.Transcript.TranscriptSegment.WordInfo;

                                /**
                                 * Decodes a WordInfo message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns WordInfo
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.contactcenterinsights.v1.Conversation.Transcript.TranscriptSegment.WordInfo;

                                /**
                                 * Verifies a WordInfo message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates a WordInfo message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns WordInfo
                                 */
                                public static fromObject(object: { [k: string]: any }): google.cloud.contactcenterinsights.v1.Conversation.Transcript.TranscriptSegment.WordInfo;

                                /**
                                 * Creates a plain object from a WordInfo message. Also converts values to other types if specified.
                                 * @param message WordInfo
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: google.cloud.contactcenterinsights.v1.Conversation.Transcript.TranscriptSegment.WordInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this WordInfo to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };
                            }

                            /** Properties of a DialogflowSegmentMetadata. */
                            interface IDialogflowSegmentMetadata {

                                /** DialogflowSegmentMetadata smartReplyAllowlistCovered */
                                smartReplyAllowlistCovered?: (boolean|null);
                            }

                            /** Represents a DialogflowSegmentMetadata. */
                            class DialogflowSegmentMetadata implements IDialogflowSegmentMetadata {

                                /**
                                 * Constructs a new DialogflowSegmentMetadata.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: google.cloud.contactcenterinsights.v1.Conversation.Transcript.TranscriptSegment.IDialogflowSegmentMetadata);

                                /** DialogflowSegmentMetadata smartReplyAllowlistCovered. */
                                public smartReplyAllowlistCovered: boolean;

                                /**
                                 * Creates a new DialogflowSegmentMetadata instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns DialogflowSegmentMetadata instance
                                 */
                                public static create(properties?: google.cloud.contactcenterinsights.v1.Conversation.Transcript.TranscriptSegment.IDialogflowSegmentMetadata): google.cloud.contactcenterinsights.v1.Conversation.Transcript.TranscriptSegment.DialogflowSegmentMetadata;

                                /**
                                 * Encodes the specified DialogflowSegmentMetadata message. Does not implicitly {@link google.cloud.contactcenterinsights.v1.Conversation.Transcript.TranscriptSegment.DialogflowSegmentMetadata.verify|verify} messages.
                                 * @param message DialogflowSegmentMetadata message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: google.cloud.contactcenterinsights.v1.Conversation.Transcript.TranscriptSegment.IDialogflowSegmentMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Encodes the specified DialogflowSegmentMetadata message, length delimited. Does not implicitly {@link google.cloud.contactcenterinsights.v1.Conversation.Transcript.TranscriptSegment.DialogflowSegmentMetadata.verify|verify} messages.
                                 * @param message DialogflowSegmentMetadata message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: google.cloud.contactcenterinsights.v1.Conversation.Transcript.TranscriptSegment.IDialogflowSegmentMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Decodes a DialogflowSegmentMetadata message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns DialogflowSegmentMetadata
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.contactcenterinsights.v1.Conversation.Transcript.TranscriptSegment.DialogflowSegmentMetadata;

                                /**
                                 * Decodes a DialogflowSegmentMetadata message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns DialogflowSegmentMetadata
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.contactcenterinsights.v1.Conversation.Transcript.TranscriptSegment.DialogflowSegmentMetadata;

                                /**
                                 * Verifies a DialogflowSegmentMetadata message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates a DialogflowSegmentMetadata message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns DialogflowSegmentMetadata
                                 */
                                public static fromObject(object: { [k: string]: any }): google.cloud.contactcenterinsights.v1.Conversation.Transcript.TranscriptSegment.DialogflowSegmentMetadata;

                                /**
                                 * Creates a plain object from a DialogflowSegmentMetadata message. Also converts values to other types if specified.
                                 * @param message DialogflowSegmentMetadata
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: google.cloud.contactcenterinsights.v1.Conversation.Transcript.TranscriptSegment.DialogflowSegmentMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this DialogflowSegmentMetadata to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };
                            }
                        }
                    }

                    /** Medium enum. */
                    enum Medium {
                        MEDIUM_UNSPECIFIED = 0,
                        PHONE_CALL = 1,
                        CHAT = 2
                    }
                }

                /** Properties of an Analysis. */
                interface IAnalysis {

                    /** Analysis name */
                    name?: (string|null);

                    /** Analysis requestTime */
                    requestTime?: (google.protobuf.ITimestamp|null);

                    /** Analysis createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** Analysis analysisResult */
                    analysisResult?: (google.cloud.contactcenterinsights.v1.IAnalysisResult|null);
                }

                /** Represents an Analysis. */
                class Analysis implements IAnalysis {

                    /**
                     * Constructs a new Analysis.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.contactcenterinsights.v1.IAnalysis);

                    /** Analysis name. */
                    public name: string;

                    /** Analysis requestTime. */
                    public requestTime?: (google.protobuf.ITimestamp|null);

                    /** Analysis createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** Analysis analysisResult. */
                    public analysisResult?: (google.cloud.contactcenterinsights.v1.IAnalysisResult|null);

                    /**
                     * Creates a new Analysis instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Analysis instance
                     */
                    public static create(properties?: google.cloud.contactcenterinsights.v1.IAnalysis): google.cloud.contactcenterinsights.v1.Analysis;

                    /**
                     * Encodes the specified Analysis message. Does not implicitly {@link google.cloud.contactcenterinsights.v1.Analysis.verify|verify} messages.
                     * @param message Analysis message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.contactcenterinsights.v1.IAnalysis, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Analysis message, length delimited. Does not implicitly {@link google.cloud.contactcenterinsights.v1.Analysis.verify|verify} messages.
                     * @param message Analysis message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.contactcenterinsights.v1.IAnalysis, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an Analysis message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Analysis
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.contactcenterinsights.v1.Analysis;

                    /**
                     * Decodes an Analysis message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Analysis
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.contactcenterinsights.v1.Analysis;

                    /**
                     * Verifies an Analysis message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an Analysis message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Analysis
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.contactcenterinsights.v1.Analysis;

                    /**
                     * Creates a plain object from an Analysis message. Also converts values to other types if specified.
                     * @param message Analysis
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.contactcenterinsights.v1.Analysis, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Analysis to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ConversationDataSource. */
                interface IConversationDataSource {

                    /** ConversationDataSource gcsSource */
                    gcsSource?: (google.cloud.contactcenterinsights.v1.IGcsSource|null);

                    /** ConversationDataSource dialogflowSource */
                    dialogflowSource?: (google.cloud.contactcenterinsights.v1.IDialogflowSource|null);
                }

                /** Represents a ConversationDataSource. */
                class ConversationDataSource implements IConversationDataSource {

                    /**
                     * Constructs a new ConversationDataSource.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.contactcenterinsights.v1.IConversationDataSource);

                    /** ConversationDataSource gcsSource. */
                    public gcsSource?: (google.cloud.contactcenterinsights.v1.IGcsSource|null);

                    /** ConversationDataSource dialogflowSource. */
                    public dialogflowSource?: (google.cloud.contactcenterinsights.v1.IDialogflowSource|null);

                    /** ConversationDataSource source. */
                    public source?: ("gcsSource"|"dialogflowSource");

                    /**
                     * Creates a new ConversationDataSource instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ConversationDataSource instance
                     */
                    public static create(properties?: google.cloud.contactcenterinsights.v1.IConversationDataSource): google.cloud.contactcenterinsights.v1.ConversationDataSource;

                    /**
                     * Encodes the specified ConversationDataSource message. Does not implicitly {@link google.cloud.contactcenterinsights.v1.ConversationDataSource.verify|verify} messages.
                     * @param message ConversationDataSource message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.contactcenterinsights.v1.IConversationDataSource, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ConversationDataSource message, length delimited. Does not implicitly {@link google.cloud.contactcenterinsights.v1.ConversationDataSource.verify|verify} messages.
                     * @param message ConversationDataSource message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.contactcenterinsights.v1.IConversationDataSource, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ConversationDataSource message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ConversationDataSource
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.contactcenterinsights.v1.ConversationDataSource;

                    /**
                     * Decodes a ConversationDataSource message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ConversationDataSource
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.contactcenterinsights.v1.ConversationDataSource;

                    /**
                     * Verifies a ConversationDataSource message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ConversationDataSource message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ConversationDataSource
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.contactcenterinsights.v1.ConversationDataSource;

                    /**
                     * Creates a plain object from a ConversationDataSource message. Also converts values to other types if specified.
                     * @param message ConversationDataSource
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.contactcenterinsights.v1.ConversationDataSource, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ConversationDataSource to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GcsSource. */
                interface IGcsSource {

                    /** GcsSource audioUri */
                    audioUri?: (string|null);

                    /** GcsSource transcriptUri */
                    transcriptUri?: (string|null);
                }

                /** Represents a GcsSource. */
                class GcsSource implements IGcsSource {

                    /**
                     * Constructs a new GcsSource.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.contactcenterinsights.v1.IGcsSource);

                    /** GcsSource audioUri. */
                    public audioUri: string;

                    /** GcsSource transcriptUri. */
                    public transcriptUri: string;

                    /**
                     * Creates a new GcsSource instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GcsSource instance
                     */
                    public static create(properties?: google.cloud.contactcenterinsights.v1.IGcsSource): google.cloud.contactcenterinsights.v1.GcsSource;

                    /**
                     * Encodes the specified GcsSource message. Does not implicitly {@link google.cloud.contactcenterinsights.v1.GcsSource.verify|verify} messages.
                     * @param message GcsSource message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.contactcenterinsights.v1.IGcsSource, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GcsSource message, length delimited. Does not implicitly {@link google.cloud.contactcenterinsights.v1.GcsSource.verify|verify} messages.
                     * @param message GcsSource message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.contactcenterinsights.v1.IGcsSource, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GcsSource message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GcsSource
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.contactcenterinsights.v1.GcsSource;

                    /**
                     * Decodes a GcsSource message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GcsSource
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.contactcenterinsights.v1.GcsSource;

                    /**
                     * Verifies a GcsSource message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GcsSource message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GcsSource
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.contactcenterinsights.v1.GcsSource;

                    /**
                     * Creates a plain object from a GcsSource message. Also converts values to other types if specified.
                     * @param message GcsSource
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.contactcenterinsights.v1.GcsSource, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GcsSource to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DialogflowSource. */
                interface IDialogflowSource {

                    /** DialogflowSource dialogflowConversation */
                    dialogflowConversation?: (string|null);

                    /** DialogflowSource audioUri */
                    audioUri?: (string|null);
                }

                /** Represents a DialogflowSource. */
                class DialogflowSource implements IDialogflowSource {

                    /**
                     * Constructs a new DialogflowSource.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.contactcenterinsights.v1.IDialogflowSource);

                    /** DialogflowSource dialogflowConversation. */
                    public dialogflowConversation: string;

                    /** DialogflowSource audioUri. */
                    public audioUri: string;

                    /**
                     * Creates a new DialogflowSource instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DialogflowSource instance
                     */
                    public static create(properties?: google.cloud.contactcenterinsights.v1.IDialogflowSource): google.cloud.contactcenterinsights.v1.DialogflowSource;

                    /**
                     * Encodes the specified DialogflowSource message. Does not implicitly {@link google.cloud.contactcenterinsights.v1.DialogflowSource.verify|verify} messages.
                     * @param message DialogflowSource message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.contactcenterinsights.v1.IDialogflowSource, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DialogflowSource message, length delimited. Does not implicitly {@link google.cloud.contactcenterinsights.v1.DialogflowSource.verify|verify} messages.
                     * @param message DialogflowSource message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.contactcenterinsights.v1.IDialogflowSource, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DialogflowSource message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DialogflowSource
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.contactcenterinsights.v1.DialogflowSource;

                    /**
                     * Decodes a DialogflowSource message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DialogflowSource
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.contactcenterinsights.v1.DialogflowSource;

                    /**
                     * Verifies a DialogflowSource message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DialogflowSource message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DialogflowSource
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.contactcenterinsights.v1.DialogflowSource;

                    /**
                     * Creates a plain object from a DialogflowSource message. Also converts values to other types if specified.
                     * @param message DialogflowSource
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.contactcenterinsights.v1.DialogflowSource, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DialogflowSource to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an AnalysisResult. */
                interface IAnalysisResult {

                    /** AnalysisResult callAnalysisMetadata */
                    callAnalysisMetadata?: (google.cloud.contactcenterinsights.v1.AnalysisResult.ICallAnalysisMetadata|null);

                    /** AnalysisResult endTime */
                    endTime?: (google.protobuf.ITimestamp|null);
                }

                /** Represents an AnalysisResult. */
                class AnalysisResult implements IAnalysisResult {

                    /**
                     * Constructs a new AnalysisResult.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.contactcenterinsights.v1.IAnalysisResult);

                    /** AnalysisResult callAnalysisMetadata. */
                    public callAnalysisMetadata?: (google.cloud.contactcenterinsights.v1.AnalysisResult.ICallAnalysisMetadata|null);

                    /** AnalysisResult endTime. */
                    public endTime?: (google.protobuf.ITimestamp|null);

                    /** AnalysisResult metadata. */
                    public metadata?: "callAnalysisMetadata";

                    /**
                     * Creates a new AnalysisResult instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AnalysisResult instance
                     */
                    public static create(properties?: google.cloud.contactcenterinsights.v1.IAnalysisResult): google.cloud.contactcenterinsights.v1.AnalysisResult;

                    /**
                     * Encodes the specified AnalysisResult message. Does not implicitly {@link google.cloud.contactcenterinsights.v1.AnalysisResult.verify|verify} messages.
                     * @param message AnalysisResult message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.contactcenterinsights.v1.IAnalysisResult, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AnalysisResult message, length delimited. Does not implicitly {@link google.cloud.contactcenterinsights.v1.AnalysisResult.verify|verify} messages.
                     * @param message AnalysisResult message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.contactcenterinsights.v1.IAnalysisResult, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AnalysisResult message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AnalysisResult
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.contactcenterinsights.v1.AnalysisResult;

                    /**
                     * Decodes an AnalysisResult message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AnalysisResult
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.contactcenterinsights.v1.AnalysisResult;

                    /**
                     * Verifies an AnalysisResult message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AnalysisResult message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AnalysisResult
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.contactcenterinsights.v1.AnalysisResult;

                    /**
                     * Creates a plain object from an AnalysisResult message. Also converts values to other types if specified.
                     * @param message AnalysisResult
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.contactcenterinsights.v1.AnalysisResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AnalysisResult to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace AnalysisResult {

                    /** Properties of a CallAnalysisMetadata. */
                    interface ICallAnalysisMetadata {

                        /** CallAnalysisMetadata annotations */
                        annotations?: (google.cloud.contactcenterinsights.v1.ICallAnnotation[]|null);

                        /** CallAnalysisMetadata entities */
                        entities?: ({ [k: string]: google.cloud.contactcenterinsights.v1.IEntity }|null);

                        /** CallAnalysisMetadata sentiments */
                        sentiments?: (google.cloud.contactcenterinsights.v1.IConversationLevelSentiment[]|null);

                        /** CallAnalysisMetadata intents */
                        intents?: ({ [k: string]: google.cloud.contactcenterinsights.v1.IIntent }|null);

                        /** CallAnalysisMetadata phraseMatchers */
                        phraseMatchers?: ({ [k: string]: google.cloud.contactcenterinsights.v1.IPhraseMatchData }|null);

                        /** CallAnalysisMetadata issueModelResult */
                        issueModelResult?: (google.cloud.contactcenterinsights.v1.IIssueModelResult|null);
                    }

                    /** Represents a CallAnalysisMetadata. */
                    class CallAnalysisMetadata implements ICallAnalysisMetadata {

                        /**
                         * Constructs a new CallAnalysisMetadata.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.contactcenterinsights.v1.AnalysisResult.ICallAnalysisMetadata);

                        /** CallAnalysisMetadata annotations. */
                        public annotations: google.cloud.contactcenterinsights.v1.ICallAnnotation[];

                        /** CallAnalysisMetadata entities. */
                        public entities: { [k: string]: google.cloud.contactcenterinsights.v1.IEntity };

                        /** CallAnalysisMetadata sentiments. */
                        public sentiments: google.cloud.contactcenterinsights.v1.IConversationLevelSentiment[];

                        /** CallAnalysisMetadata intents. */
                        public intents: { [k: string]: google.cloud.contactcenterinsights.v1.IIntent };

                        /** CallAnalysisMetadata phraseMatchers. */
                        public phraseMatchers: { [k: string]: google.cloud.contactcenterinsights.v1.IPhraseMatchData };

                        /** CallAnalysisMetadata issueModelResult. */
                        public issueModelResult?: (google.cloud.contactcenterinsights.v1.IIssueModelResult|null);

                        /**
                         * Creates a new CallAnalysisMetadata instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns CallAnalysisMetadata instance
                         */
                        public static create(properties?: google.cloud.contactcenterinsights.v1.AnalysisResult.ICallAnalysisMetadata): google.cloud.contactcenterinsights.v1.AnalysisResult.CallAnalysisMetadata;

                        /**
                         * Encodes the specified CallAnalysisMetadata message. Does not implicitly {@link google.cloud.contactcenterinsights.v1.AnalysisResult.CallAnalysisMetadata.verify|verify} messages.
                         * @param message CallAnalysisMetadata message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.contactcenterinsights.v1.AnalysisResult.ICallAnalysisMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified CallAnalysisMetadata message, length delimited. Does not implicitly {@link google.cloud.contactcenterinsights.v1.AnalysisResult.CallAnalysisMetadata.verify|verify} messages.
                         * @param message CallAnalysisMetadata message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.contactcenterinsights.v1.AnalysisResult.ICallAnalysisMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a CallAnalysisMetadata message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns CallAnalysisMetadata
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.contactcenterinsights.v1.AnalysisResult.CallAnalysisMetadata;

                        /**
                         * Decodes a CallAnalysisMetadata message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns CallAnalysisMetadata
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.contactcenterinsights.v1.AnalysisResult.CallAnalysisMetadata;

                        /**
                         * Verifies a CallAnalysisMetadata message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a CallAnalysisMetadata message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns CallAnalysisMetadata
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.contactcenterinsights.v1.AnalysisResult.CallAnalysisMetadata;

                        /**
                         * Creates a plain object from a CallAnalysisMetadata message. Also converts values to other types if specified.
                         * @param message CallAnalysisMetadata
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.contactcenterinsights.v1.AnalysisResult.CallAnalysisMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this CallAnalysisMetadata to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }
                }

                /** Properties of an IssueModelResult. */
                interface IIssueModelResult {

                    /** IssueModelResult issueModel */
                    issueModel?: (string|null);

                    /** IssueModelResult issues */
                    issues?: (google.cloud.contactcenterinsights.v1.IIssueAssignment[]|null);
                }

                /** Represents an IssueModelResult. */
                class IssueModelResult implements IIssueModelResult {

                    /**
                     * Constructs a new IssueModelResult.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.contactcenterinsights.v1.IIssueModelResult);

                    /** IssueModelResult issueModel. */
                    public issueModel: string;

                    /** IssueModelResult issues. */
                    public issues: google.cloud.contactcenterinsights.v1.IIssueAssignment[];

                    /**
                     * Creates a new IssueModelResult instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns IssueModelResult instance
                     */
                    public static create(properties?: google.cloud.contactcenterinsights.v1.IIssueModelResult): google.cloud.contactcenterinsights.v1.IssueModelResult;

                    /**
                     * Encodes the specified IssueModelResult message. Does not implicitly {@link google.cloud.contactcenterinsights.v1.IssueModelResult.verify|verify} messages.
                     * @param message IssueModelResult message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.contactcenterinsights.v1.IIssueModelResult, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified IssueModelResult message, length delimited. Does not implicitly {@link google.cloud.contactcenterinsights.v1.IssueModelResult.verify|verify} messages.
                     * @param message IssueModelResult message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.contactcenterinsights.v1.IIssueModelResult, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an IssueModelResult message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns IssueModelResult
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.contactcenterinsights.v1.IssueModelResult;

                    /**
                     * Decodes an IssueModelResult message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns IssueModelResult
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.contactcenterinsights.v1.IssueModelResult;

                    /**
                     * Verifies an IssueModelResult message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an IssueModelResult message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns IssueModelResult
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.contactcenterinsights.v1.IssueModelResult;

                    /**
                     * Creates a plain object from an IssueModelResult message. Also converts values to other types if specified.
                     * @param message IssueModelResult
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.contactcenterinsights.v1.IssueModelResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this IssueModelResult to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ConversationLevelSentiment. */
                interface IConversationLevelSentiment {

                    /** ConversationLevelSentiment channelTag */
                    channelTag?: (number|null);

                    /** ConversationLevelSentiment sentimentData */
                    sentimentData?: (google.cloud.contactcenterinsights.v1.ISentimentData|null);
                }

                /** Represents a ConversationLevelSentiment. */
                class ConversationLevelSentiment implements IConversationLevelSentiment {

                    /**
                     * Constructs a new ConversationLevelSentiment.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.contactcenterinsights.v1.IConversationLevelSentiment);

                    /** ConversationLevelSentiment channelTag. */
                    public channelTag: number;

                    /** ConversationLevelSentiment sentimentData. */
                    public sentimentData?: (google.cloud.contactcenterinsights.v1.ISentimentData|null);

                    /**
                     * Creates a new ConversationLevelSentiment instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ConversationLevelSentiment instance
                     */
                    public static create(properties?: google.cloud.contactcenterinsights.v1.IConversationLevelSentiment): google.cloud.contactcenterinsights.v1.ConversationLevelSentiment;

                    /**
                     * Encodes the specified ConversationLevelSentiment message. Does not implicitly {@link google.cloud.contactcenterinsights.v1.ConversationLevelSentiment.verify|verify} messages.
                     * @param message ConversationLevelSentiment message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.contactcenterinsights.v1.IConversationLevelSentiment, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ConversationLevelSentiment message, length delimited. Does not implicitly {@link google.cloud.contactcenterinsights.v1.ConversationLevelSentiment.verify|verify} messages.
                     * @param message ConversationLevelSentiment message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.contactcenterinsights.v1.IConversationLevelSentiment, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ConversationLevelSentiment message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ConversationLevelSentiment
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.contactcenterinsights.v1.ConversationLevelSentiment;

                    /**
                     * Decodes a ConversationLevelSentiment message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ConversationLevelSentiment
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.contactcenterinsights.v1.ConversationLevelSentiment;

                    /**
                     * Verifies a ConversationLevelSentiment message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ConversationLevelSentiment message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ConversationLevelSentiment
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.contactcenterinsights.v1.ConversationLevelSentiment;

                    /**
                     * Creates a plain object from a ConversationLevelSentiment message. Also converts values to other types if specified.
                     * @param message ConversationLevelSentiment
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.contactcenterinsights.v1.ConversationLevelSentiment, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ConversationLevelSentiment to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an IssueAssignment. */
                interface IIssueAssignment {

                    /** IssueAssignment issue */
                    issue?: (string|null);

                    /** IssueAssignment score */
                    score?: (number|null);

                    /** IssueAssignment displayName */
                    displayName?: (string|null);
                }

                /** Represents an IssueAssignment. */
                class IssueAssignment implements IIssueAssignment {

                    /**
                     * Constructs a new IssueAssignment.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.contactcenterinsights.v1.IIssueAssignment);

                    /** IssueAssignment issue. */
                    public issue: string;

                    /** IssueAssignment score. */
                    public score: number;

                    /** IssueAssignment displayName. */
                    public displayName: string;

                    /**
                     * Creates a new IssueAssignment instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns IssueAssignment instance
                     */
                    public static create(properties?: google.cloud.contactcenterinsights.v1.IIssueAssignment): google.cloud.contactcenterinsights.v1.IssueAssignment;

                    /**
                     * Encodes the specified IssueAssignment message. Does not implicitly {@link google.cloud.contactcenterinsights.v1.IssueAssignment.verify|verify} messages.
                     * @param message IssueAssignment message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.contactcenterinsights.v1.IIssueAssignment, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified IssueAssignment message, length delimited. Does not implicitly {@link google.cloud.contactcenterinsights.v1.IssueAssignment.verify|verify} messages.
                     * @param message IssueAssignment message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.contactcenterinsights.v1.IIssueAssignment, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an IssueAssignment message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns IssueAssignment
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.contactcenterinsights.v1.IssueAssignment;

                    /**
                     * Decodes an IssueAssignment message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns IssueAssignment
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.contactcenterinsights.v1.IssueAssignment;

                    /**
                     * Verifies an IssueAssignment message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an IssueAssignment message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns IssueAssignment
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.contactcenterinsights.v1.IssueAssignment;

                    /**
                     * Creates a plain object from an IssueAssignment message. Also converts values to other types if specified.
                     * @param message IssueAssignment
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.contactcenterinsights.v1.IssueAssignment, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this IssueAssignment to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a CallAnnotation. */
                interface ICallAnnotation {

                    /** CallAnnotation interruptionData */
                    interruptionData?: (google.cloud.contactcenterinsights.v1.IInterruptionData|null);

                    /** CallAnnotation sentimentData */
                    sentimentData?: (google.cloud.contactcenterinsights.v1.ISentimentData|null);

                    /** CallAnnotation silenceData */
                    silenceData?: (google.cloud.contactcenterinsights.v1.ISilenceData|null);

                    /** CallAnnotation holdData */
                    holdData?: (google.cloud.contactcenterinsights.v1.IHoldData|null);

                    /** CallAnnotation entityMentionData */
                    entityMentionData?: (google.cloud.contactcenterinsights.v1.IEntityMentionData|null);

                    /** CallAnnotation intentMatchData */
                    intentMatchData?: (google.cloud.contactcenterinsights.v1.IIntentMatchData|null);

                    /** CallAnnotation phraseMatchData */
                    phraseMatchData?: (google.cloud.contactcenterinsights.v1.IPhraseMatchData|null);

                    /** CallAnnotation channelTag */
                    channelTag?: (number|null);

                    /** CallAnnotation annotationStartBoundary */
                    annotationStartBoundary?: (google.cloud.contactcenterinsights.v1.IAnnotationBoundary|null);

                    /** CallAnnotation annotationEndBoundary */
                    annotationEndBoundary?: (google.cloud.contactcenterinsights.v1.IAnnotationBoundary|null);
                }

                /** Represents a CallAnnotation. */
                class CallAnnotation implements ICallAnnotation {

                    /**
                     * Constructs a new CallAnnotation.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.contactcenterinsights.v1.ICallAnnotation);

                    /** CallAnnotation interruptionData. */
                    public interruptionData?: (google.cloud.contactcenterinsights.v1.IInterruptionData|null);

                    /** CallAnnotation sentimentData. */
                    public sentimentData?: (google.cloud.contactcenterinsights.v1.ISentimentData|null);

                    /** CallAnnotation silenceData. */
                    public silenceData?: (google.cloud.contactcenterinsights.v1.ISilenceData|null);

                    /** CallAnnotation holdData. */
                    public holdData?: (google.cloud.contactcenterinsights.v1.IHoldData|null);

                    /** CallAnnotation entityMentionData. */
                    public entityMentionData?: (google.cloud.contactcenterinsights.v1.IEntityMentionData|null);

                    /** CallAnnotation intentMatchData. */
                    public intentMatchData?: (google.cloud.contactcenterinsights.v1.IIntentMatchData|null);

                    /** CallAnnotation phraseMatchData. */
                    public phraseMatchData?: (google.cloud.contactcenterinsights.v1.IPhraseMatchData|null);

                    /** CallAnnotation channelTag. */
                    public channelTag: number;

                    /** CallAnnotation annotationStartBoundary. */
                    public annotationStartBoundary?: (google.cloud.contactcenterinsights.v1.IAnnotationBoundary|null);

                    /** CallAnnotation annotationEndBoundary. */
                    public annotationEndBoundary?: (google.cloud.contactcenterinsights.v1.IAnnotationBoundary|null);

                    /** CallAnnotation data. */
                    public data?: ("interruptionData"|"sentimentData"|"silenceData"|"holdData"|"entityMentionData"|"intentMatchData"|"phraseMatchData");

                    /**
                     * Creates a new CallAnnotation instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CallAnnotation instance
                     */
                    public static create(properties?: google.cloud.contactcenterinsights.v1.ICallAnnotation): google.cloud.contactcenterinsights.v1.CallAnnotation;

                    /**
                     * Encodes the specified CallAnnotation message. Does not implicitly {@link google.cloud.contactcenterinsights.v1.CallAnnotation.verify|verify} messages.
                     * @param message CallAnnotation message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.contactcenterinsights.v1.ICallAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CallAnnotation message, length delimited. Does not implicitly {@link google.cloud.contactcenterinsights.v1.CallAnnotation.verify|verify} messages.
                     * @param message CallAnnotation message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.contactcenterinsights.v1.ICallAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CallAnnotation message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CallAnnotation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.contactcenterinsights.v1.CallAnnotation;

                    /**
                     * Decodes a CallAnnotation message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CallAnnotation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.contactcenterinsights.v1.CallAnnotation;

                    /**
                     * Verifies a CallAnnotation message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CallAnnotation message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CallAnnotation
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.contactcenterinsights.v1.CallAnnotation;

                    /**
                     * Creates a plain object from a CallAnnotation message. Also converts values to other types if specified.
                     * @param message CallAnnotation
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.contactcenterinsights.v1.CallAnnotation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CallAnnotation to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an AnnotationBoundary. */
                interface IAnnotationBoundary {

                    /** AnnotationBoundary wordIndex */
                    wordIndex?: (number|null);

                    /** AnnotationBoundary transcriptIndex */
                    transcriptIndex?: (number|null);
                }

                /** Represents an AnnotationBoundary. */
                class AnnotationBoundary implements IAnnotationBoundary {

                    /**
                     * Constructs a new AnnotationBoundary.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.contactcenterinsights.v1.IAnnotationBoundary);

                    /** AnnotationBoundary wordIndex. */
                    public wordIndex?: (number|null);

                    /** AnnotationBoundary transcriptIndex. */
                    public transcriptIndex: number;

                    /** AnnotationBoundary detailedBoundary. */
                    public detailedBoundary?: "wordIndex";

                    /**
                     * Creates a new AnnotationBoundary instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AnnotationBoundary instance
                     */
                    public static create(properties?: google.cloud.contactcenterinsights.v1.IAnnotationBoundary): google.cloud.contactcenterinsights.v1.AnnotationBoundary;

                    /**
                     * Encodes the specified AnnotationBoundary message. Does not implicitly {@link google.cloud.contactcenterinsights.v1.AnnotationBoundary.verify|verify} messages.
                     * @param message AnnotationBoundary message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.contactcenterinsights.v1.IAnnotationBoundary, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AnnotationBoundary message, length delimited. Does not implicitly {@link google.cloud.contactcenterinsights.v1.AnnotationBoundary.verify|verify} messages.
                     * @param message AnnotationBoundary message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.contactcenterinsights.v1.IAnnotationBoundary, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AnnotationBoundary message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AnnotationBoundary
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.contactcenterinsights.v1.AnnotationBoundary;

                    /**
                     * Decodes an AnnotationBoundary message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AnnotationBoundary
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.contactcenterinsights.v1.AnnotationBoundary;

                    /**
                     * Verifies an AnnotationBoundary message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AnnotationBoundary message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AnnotationBoundary
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.contactcenterinsights.v1.AnnotationBoundary;

                    /**
                     * Creates a plain object from an AnnotationBoundary message. Also converts values to other types if specified.
                     * @param message AnnotationBoundary
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.contactcenterinsights.v1.AnnotationBoundary, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AnnotationBoundary to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an Entity. */
                interface IEntity {

                    /** Entity displayName */
                    displayName?: (string|null);

                    /** Entity type */
                    type?: (google.cloud.contactcenterinsights.v1.Entity.Type|keyof typeof google.cloud.contactcenterinsights.v1.Entity.Type|null);

                    /** Entity metadata */
                    metadata?: ({ [k: string]: string }|null);

                    /** Entity salience */
                    salience?: (number|null);

                    /** Entity sentiment */
                    sentiment?: (google.cloud.contactcenterinsights.v1.ISentimentData|null);
                }

                /** Represents an Entity. */
                class Entity implements IEntity {

                    /**
                     * Constructs a new Entity.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.contactcenterinsights.v1.IEntity);

                    /** Entity displayName. */
                    public displayName: string;

                    /** Entity type. */
                    public type: (google.cloud.contactcenterinsights.v1.Entity.Type|keyof typeof google.cloud.contactcenterinsights.v1.Entity.Type);

                    /** Entity metadata. */
                    public metadata: { [k: string]: string };

                    /** Entity salience. */
                    public salience: number;

                    /** Entity sentiment. */
                    public sentiment?: (google.cloud.contactcenterinsights.v1.ISentimentData|null);

                    /**
                     * Creates a new Entity instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Entity instance
                     */
                    public static create(properties?: google.cloud.contactcenterinsights.v1.IEntity): google.cloud.contactcenterinsights.v1.Entity;

                    /**
                     * Encodes the specified Entity message. Does not implicitly {@link google.cloud.contactcenterinsights.v1.Entity.verify|verify} messages.
                     * @param message Entity message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.contactcenterinsights.v1.IEntity, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Entity message, length delimited. Does not implicitly {@link google.cloud.contactcenterinsights.v1.Entity.verify|verify} messages.
                     * @param message Entity message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.contactcenterinsights.v1.IEntity, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an Entity message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Entity
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.contactcenterinsights.v1.Entity;

                    /**
                     * Decodes an Entity message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Entity
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.contactcenterinsights.v1.Entity;

                    /**
                     * Verifies an Entity message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an Entity message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Entity
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.contactcenterinsights.v1.Entity;

                    /**
                     * Creates a plain object from an Entity message. Also converts values to other types if specified.
                     * @param message Entity
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.contactcenterinsights.v1.Entity, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Entity to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace Entity {

                    /** Type enum. */
                    enum Type {
                        TYPE_UNSPECIFIED = 0,
                        PERSON = 1,
                        LOCATION = 2,
                        ORGANIZATION = 3,
                        EVENT = 4,
                        WORK_OF_ART = 5,
                        CONSUMER_GOOD = 6,
                        OTHER = 7,
                        PHONE_NUMBER = 9,
                        ADDRESS = 10,
                        DATE = 11,
                        NUMBER = 12,
                        PRICE = 13
                    }
                }

                /** Properties of an Intent. */
                interface IIntent {

                    /** Intent id */
                    id?: (string|null);

                    /** Intent displayName */
                    displayName?: (string|null);
                }

                /** Represents an Intent. */
                class Intent implements IIntent {

                    /**
                     * Constructs a new Intent.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.contactcenterinsights.v1.IIntent);

                    /** Intent id. */
                    public id: string;

                    /** Intent displayName. */
                    public displayName: string;

                    /**
                     * Creates a new Intent instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Intent instance
                     */
                    public static create(properties?: google.cloud.contactcenterinsights.v1.IIntent): google.cloud.contactcenterinsights.v1.Intent;

                    /**
                     * Encodes the specified Intent message. Does not implicitly {@link google.cloud.contactcenterinsights.v1.Intent.verify|verify} messages.
                     * @param message Intent message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.contactcenterinsights.v1.IIntent, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Intent message, length delimited. Does not implicitly {@link google.cloud.contactcenterinsights.v1.Intent.verify|verify} messages.
                     * @param message Intent message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.contactcenterinsights.v1.IIntent, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an Intent message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Intent
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.contactcenterinsights.v1.Intent;

                    /**
                     * Decodes an Intent message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Intent
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.contactcenterinsights.v1.Intent;

                    /**
                     * Verifies an Intent message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an Intent message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Intent
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.contactcenterinsights.v1.Intent;

                    /**
                     * Creates a plain object from an Intent message. Also converts values to other types if specified.
                     * @param message Intent
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.contactcenterinsights.v1.Intent, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Intent to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a PhraseMatchData. */
                interface IPhraseMatchData {

                    /** PhraseMatchData phraseMatcher */
                    phraseMatcher?: (string|null);

                    /** PhraseMatchData displayName */
                    displayName?: (string|null);
                }

                /** Represents a PhraseMatchData. */
                class PhraseMatchData implements IPhraseMatchData {

                    /**
                     * Constructs a new PhraseMatchData.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.contactcenterinsights.v1.IPhraseMatchData);

                    /** PhraseMatchData phraseMatcher. */
                    public phraseMatcher: string;

                    /** PhraseMatchData displayName. */
                    public displayName: string;

                    /**
                     * Creates a new PhraseMatchData instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PhraseMatchData instance
                     */
                    public static create(properties?: google.cloud.contactcenterinsights.v1.IPhraseMatchData): google.cloud.contactcenterinsights.v1.PhraseMatchData;

                    /**
                     * Encodes the specified PhraseMatchData message. Does not implicitly {@link google.cloud.contactcenterinsights.v1.PhraseMatchData.verify|verify} messages.
                     * @param message PhraseMatchData message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.contactcenterinsights.v1.IPhraseMatchData, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PhraseMatchData message, length delimited. Does not implicitly {@link google.cloud.contactcenterinsights.v1.PhraseMatchData.verify|verify} messages.
                     * @param message PhraseMatchData message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.contactcenterinsights.v1.IPhraseMatchData, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PhraseMatchData message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PhraseMatchData
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.contactcenterinsights.v1.PhraseMatchData;

                    /**
                     * Decodes a PhraseMatchData message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PhraseMatchData
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.contactcenterinsights.v1.PhraseMatchData;

                    /**
                     * Verifies a PhraseMatchData message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PhraseMatchData message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PhraseMatchData
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.contactcenterinsights.v1.PhraseMatchData;

                    /**
                     * Creates a plain object from a PhraseMatchData message. Also converts values to other types if specified.
                     * @param message PhraseMatchData
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.contactcenterinsights.v1.PhraseMatchData, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PhraseMatchData to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DialogflowIntent. */
                interface IDialogflowIntent {

                    /** DialogflowIntent displayName */
                    displayName?: (string|null);
                }

                /** Represents a DialogflowIntent. */
                class DialogflowIntent implements IDialogflowIntent {

                    /**
                     * Constructs a new DialogflowIntent.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.contactcenterinsights.v1.IDialogflowIntent);

                    /** DialogflowIntent displayName. */
                    public displayName: string;

                    /**
                     * Creates a new DialogflowIntent instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DialogflowIntent instance
                     */
                    public static create(properties?: google.cloud.contactcenterinsights.v1.IDialogflowIntent): google.cloud.contactcenterinsights.v1.DialogflowIntent;

                    /**
                     * Encodes the specified DialogflowIntent message. Does not implicitly {@link google.cloud.contactcenterinsights.v1.DialogflowIntent.verify|verify} messages.
                     * @param message DialogflowIntent message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.contactcenterinsights.v1.IDialogflowIntent, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DialogflowIntent message, length delimited. Does not implicitly {@link google.cloud.contactcenterinsights.v1.DialogflowIntent.verify|verify} messages.
                     * @param message DialogflowIntent message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.contactcenterinsights.v1.IDialogflowIntent, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DialogflowIntent message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DialogflowIntent
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.contactcenterinsights.v1.DialogflowIntent;

                    /**
                     * Decodes a DialogflowIntent message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DialogflowIntent
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.contactcenterinsights.v1.DialogflowIntent;

                    /**
                     * Verifies a DialogflowIntent message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DialogflowIntent message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DialogflowIntent
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.contactcenterinsights.v1.DialogflowIntent;

                    /**
                     * Creates a plain object from a DialogflowIntent message. Also converts values to other types if specified.
                     * @param message DialogflowIntent
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.contactcenterinsights.v1.DialogflowIntent, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DialogflowIntent to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an InterruptionData. */
                interface IInterruptionData {
                }

                /** Represents an InterruptionData. */
                class InterruptionData implements IInterruptionData {

                    /**
                     * Constructs a new InterruptionData.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.contactcenterinsights.v1.IInterruptionData);

                    /**
                     * Creates a new InterruptionData instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns InterruptionData instance
                     */
                    public static create(properties?: google.cloud.contactcenterinsights.v1.IInterruptionData): google.cloud.contactcenterinsights.v1.InterruptionData;

                    /**
                     * Encodes the specified InterruptionData message. Does not implicitly {@link google.cloud.contactcenterinsights.v1.InterruptionData.verify|verify} messages.
                     * @param message InterruptionData message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.contactcenterinsights.v1.IInterruptionData, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified InterruptionData message, length delimited. Does not implicitly {@link google.cloud.contactcenterinsights.v1.InterruptionData.verify|verify} messages.
                     * @param message InterruptionData message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.contactcenterinsights.v1.IInterruptionData, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an InterruptionData message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns InterruptionData
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.contactcenterinsights.v1.InterruptionData;

                    /**
                     * Decodes an InterruptionData message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns InterruptionData
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.contactcenterinsights.v1.InterruptionData;

                    /**
                     * Verifies an InterruptionData message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an InterruptionData message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns InterruptionData
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.contactcenterinsights.v1.InterruptionData;

                    /**
                     * Creates a plain object from an InterruptionData message. Also converts values to other types if specified.
                     * @param message InterruptionData
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.contactcenterinsights.v1.InterruptionData, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this InterruptionData to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a SilenceData. */
                interface ISilenceData {
                }

                /** Represents a SilenceData. */
                class SilenceData implements ISilenceData {

                    /**
                     * Constructs a new SilenceData.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.contactcenterinsights.v1.ISilenceData);

                    /**
                     * Creates a new SilenceData instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SilenceData instance
                     */
                    public static create(properties?: google.cloud.contactcenterinsights.v1.ISilenceData): google.cloud.contactcenterinsights.v1.SilenceData;

                    /**
                     * Encodes the specified SilenceData message. Does not implicitly {@link google.cloud.contactcenterinsights.v1.SilenceData.verify|verify} messages.
                     * @param message SilenceData message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.contactcenterinsights.v1.ISilenceData, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SilenceData message, length delimited. Does not implicitly {@link google.cloud.contactcenterinsights.v1.SilenceData.verify|verify} messages.
                     * @param message SilenceData message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.contactcenterinsights.v1.ISilenceData, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SilenceData message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SilenceData
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.contactcenterinsights.v1.SilenceData;

                    /**
                     * Decodes a SilenceData message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SilenceData
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.contactcenterinsights.v1.SilenceData;

                    /**
                     * Verifies a SilenceData message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SilenceData message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SilenceData
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.contactcenterinsights.v1.SilenceData;

                    /**
                     * Creates a plain object from a SilenceData message. Also converts values to other types if specified.
                     * @param message SilenceData
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.contactcenterinsights.v1.SilenceData, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SilenceData to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a HoldData. */
                interface IHoldData {
                }

                /** Represents a HoldData. */
                class HoldData implements IHoldData {

                    /**
                     * Constructs a new HoldData.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.contactcenterinsights.v1.IHoldData);

                    /**
                     * Creates a new HoldData instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns HoldData instance
                     */
                    public static create(properties?: google.cloud.contactcenterinsights.v1.IHoldData): google.cloud.contactcenterinsights.v1.HoldData;

                    /**
                     * Encodes the specified HoldData message. Does not implicitly {@link google.cloud.contactcenterinsights.v1.HoldData.verify|verify} messages.
                     * @param message HoldData message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.contactcenterinsights.v1.IHoldData, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified HoldData message, length delimited. Does not implicitly {@link google.cloud.contactcenterinsights.v1.HoldData.verify|verify} messages.
                     * @param message HoldData message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.contactcenterinsights.v1.IHoldData, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a HoldData message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns HoldData
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.contactcenterinsights.v1.HoldData;

                    /**
                     * Decodes a HoldData message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns HoldData
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.contactcenterinsights.v1.HoldData;

                    /**
                     * Verifies a HoldData message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a HoldData message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns HoldData
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.contactcenterinsights.v1.HoldData;

                    /**
                     * Creates a plain object from a HoldData message. Also converts values to other types if specified.
                     * @param message HoldData
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.contactcenterinsights.v1.HoldData, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this HoldData to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an EntityMentionData. */
                interface IEntityMentionData {

                    /** EntityMentionData entityUniqueId */
                    entityUniqueId?: (string|null);

                    /** EntityMentionData type */
                    type?: (google.cloud.contactcenterinsights.v1.EntityMentionData.MentionType|keyof typeof google.cloud.contactcenterinsights.v1.EntityMentionData.MentionType|null);

                    /** EntityMentionData sentiment */
                    sentiment?: (google.cloud.contactcenterinsights.v1.ISentimentData|null);
                }

                /** Represents an EntityMentionData. */
                class EntityMentionData implements IEntityMentionData {

                    /**
                     * Constructs a new EntityMentionData.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.contactcenterinsights.v1.IEntityMentionData);

                    /** EntityMentionData entityUniqueId. */
                    public entityUniqueId: string;

                    /** EntityMentionData type. */
                    public type: (google.cloud.contactcenterinsights.v1.EntityMentionData.MentionType|keyof typeof google.cloud.contactcenterinsights.v1.EntityMentionData.MentionType);

                    /** EntityMentionData sentiment. */
                    public sentiment?: (google.cloud.contactcenterinsights.v1.ISentimentData|null);

                    /**
                     * Creates a new EntityMentionData instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns EntityMentionData instance
                     */
                    public static create(properties?: google.cloud.contactcenterinsights.v1.IEntityMentionData): google.cloud.contactcenterinsights.v1.EntityMentionData;

                    /**
                     * Encodes the specified EntityMentionData message. Does not implicitly {@link google.cloud.contactcenterinsights.v1.EntityMentionData.verify|verify} messages.
                     * @param message EntityMentionData message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.contactcenterinsights.v1.IEntityMentionData, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified EntityMentionData message, length delimited. Does not implicitly {@link google.cloud.contactcenterinsights.v1.EntityMentionData.verify|verify} messages.
                     * @param message EntityMentionData message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.contactcenterinsights.v1.IEntityMentionData, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an EntityMentionData message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns EntityMentionData
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.contactcenterinsights.v1.EntityMentionData;

                    /**
                     * Decodes an EntityMentionData message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns EntityMentionData
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.contactcenterinsights.v1.EntityMentionData;

                    /**
                     * Verifies an EntityMentionData message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an EntityMentionData message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns EntityMentionData
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.contactcenterinsights.v1.EntityMentionData;

                    /**
                     * Creates a plain object from an EntityMentionData message. Also converts values to other types if specified.
                     * @param message EntityMentionData
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.contactcenterinsights.v1.EntityMentionData, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this EntityMentionData to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace EntityMentionData {

                    /** MentionType enum. */
                    enum MentionType {
                        MENTION_TYPE_UNSPECIFIED = 0,
                        PROPER = 1,
                        COMMON = 2
                    }
                }

                /** Properties of an IntentMatchData. */
                interface IIntentMatchData {

                    /** IntentMatchData intentUniqueId */
                    intentUniqueId?: (string|null);
                }

                /** Represents an IntentMatchData. */
                class IntentMatchData implements IIntentMatchData {

                    /**
                     * Constructs a new IntentMatchData.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.contactcenterinsights.v1.IIntentMatchData);

                    /** IntentMatchData intentUniqueId. */
                    public intentUniqueId: string;

                    /**
                     * Creates a new IntentMatchData instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns IntentMatchData instance
                     */
                    public static create(properties?: google.cloud.contactcenterinsights.v1.IIntentMatchData): google.cloud.contactcenterinsights.v1.IntentMatchData;

                    /**
                     * Encodes the specified IntentMatchData message. Does not implicitly {@link google.cloud.contactcenterinsights.v1.IntentMatchData.verify|verify} messages.
                     * @param message IntentMatchData message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.contactcenterinsights.v1.IIntentMatchData, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified IntentMatchData message, length delimited. Does not implicitly {@link google.cloud.contactcenterinsights.v1.IntentMatchData.verify|verify} messages.
                     * @param message IntentMatchData message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.contactcenterinsights.v1.IIntentMatchData, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an IntentMatchData message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns IntentMatchData
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.contactcenterinsights.v1.IntentMatchData;

                    /**
                     * Decodes an IntentMatchData message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns IntentMatchData
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.contactcenterinsights.v1.IntentMatchData;

                    /**
                     * Verifies an IntentMatchData message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an IntentMatchData message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns IntentMatchData
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.contactcenterinsights.v1.IntentMatchData;

                    /**
                     * Creates a plain object from an IntentMatchData message. Also converts values to other types if specified.
                     * @param message IntentMatchData
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.contactcenterinsights.v1.IntentMatchData, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this IntentMatchData to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a SentimentData. */
                interface ISentimentData {

                    /** SentimentData magnitude */
                    magnitude?: (number|null);

                    /** SentimentData score */
                    score?: (number|null);
                }

                /** Represents a SentimentData. */
                class SentimentData implements ISentimentData {

                    /**
                     * Constructs a new SentimentData.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.contactcenterinsights.v1.ISentimentData);

                    /** SentimentData magnitude. */
                    public magnitude: number;

                    /** SentimentData score. */
                    public score: number;

                    /**
                     * Creates a new SentimentData instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SentimentData instance
                     */
                    public static create(properties?: google.cloud.contactcenterinsights.v1.ISentimentData): google.cloud.contactcenterinsights.v1.SentimentData;

                    /**
                     * Encodes the specified SentimentData message. Does not implicitly {@link google.cloud.contactcenterinsights.v1.SentimentData.verify|verify} messages.
                     * @param message SentimentData message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.contactcenterinsights.v1.ISentimentData, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SentimentData message, length delimited. Does not implicitly {@link google.cloud.contactcenterinsights.v1.SentimentData.verify|verify} messages.
                     * @param message SentimentData message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.contactcenterinsights.v1.ISentimentData, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SentimentData message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SentimentData
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.contactcenterinsights.v1.SentimentData;

                    /**
                     * Decodes a SentimentData message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SentimentData
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.contactcenterinsights.v1.SentimentData;

                    /**
                     * Verifies a SentimentData message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SentimentData message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SentimentData
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.contactcenterinsights.v1.SentimentData;

                    /**
                     * Creates a plain object from a SentimentData message. Also converts values to other types if specified.
                     * @param message SentimentData
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.contactcenterinsights.v1.SentimentData, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SentimentData to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an IssueModel. */
                interface IIssueModel {

                    /** IssueModel name */
                    name?: (string|null);

                    /** IssueModel displayName */
                    displayName?: (string|null);

                    /** IssueModel createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** IssueModel updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** IssueModel state */
                    state?: (google.cloud.contactcenterinsights.v1.IssueModel.State|keyof typeof google.cloud.contactcenterinsights.v1.IssueModel.State|null);

                    /** IssueModel inputDataConfig */
                    inputDataConfig?: (google.cloud.contactcenterinsights.v1.IssueModel.IInputDataConfig|null);

                    /** IssueModel trainingStats */
                    trainingStats?: (google.cloud.contactcenterinsights.v1.IIssueModelLabelStats|null);
                }

                /** Represents an IssueModel. */
                class IssueModel implements IIssueModel {

                    /**
                     * Constructs a new IssueModel.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.contactcenterinsights.v1.IIssueModel);

                    /** IssueModel name. */
                    public name: string;

                    /** IssueModel displayName. */
                    public displayName: string;

                    /** IssueModel createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** IssueModel updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** IssueModel state. */
                    public state: (google.cloud.contactcenterinsights.v1.IssueModel.State|keyof typeof google.cloud.contactcenterinsights.v1.IssueModel.State);

                    /** IssueModel inputDataConfig. */
                    public inputDataConfig?: (google.cloud.contactcenterinsights.v1.IssueModel.IInputDataConfig|null);

                    /** IssueModel trainingStats. */
                    public trainingStats?: (google.cloud.contactcenterinsights.v1.IIssueModelLabelStats|null);

                    /**
                     * Creates a new IssueModel instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns IssueModel instance
                     */
                    public static create(properties?: google.cloud.contactcenterinsights.v1.IIssueModel): google.cloud.contactcenterinsights.v1.IssueModel;

                    /**
                     * Encodes the specified IssueModel message. Does not implicitly {@link google.cloud.contactcenterinsights.v1.IssueModel.verify|verify} messages.
                     * @param message IssueModel message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.contactcenterinsights.v1.IIssueModel, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified IssueModel message, length delimited. Does not implicitly {@link google.cloud.contactcenterinsights.v1.IssueModel.verify|verify} messages.
                     * @param message IssueModel message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.contactcenterinsights.v1.IIssueModel, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an IssueModel message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns IssueModel
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.contactcenterinsights.v1.IssueModel;

                    /**
                     * Decodes an IssueModel message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns IssueModel
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.contactcenterinsights.v1.IssueModel;

                    /**
                     * Verifies an IssueModel message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an IssueModel message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns IssueModel
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.contactcenterinsights.v1.IssueModel;

                    /**
                     * Creates a plain object from an IssueModel message. Also converts values to other types if specified.
                     * @param message IssueModel
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.contactcenterinsights.v1.IssueModel, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this IssueModel to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace IssueModel {

                    /** Properties of an InputDataConfig. */
                    interface IInputDataConfig {

                        /** InputDataConfig medium */
                        medium?: (google.cloud.contactcenterinsights.v1.Conversation.Medium|keyof typeof google.cloud.contactcenterinsights.v1.Conversation.Medium|null);

                        /** InputDataConfig trainingConversationsCount */
                        trainingConversationsCount?: (number|Long|string|null);

                        /** InputDataConfig filter */
                        filter?: (string|null);
                    }

                    /** Represents an InputDataConfig. */
                    class InputDataConfig implements IInputDataConfig {

                        /**
                         * Constructs a new InputDataConfig.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.contactcenterinsights.v1.IssueModel.IInputDataConfig);

                        /** InputDataConfig medium. */
                        public medium: (google.cloud.contactcenterinsights.v1.Conversation.Medium|keyof typeof google.cloud.contactcenterinsights.v1.Conversation.Medium);

                        /** InputDataConfig trainingConversationsCount. */
                        public trainingConversationsCount: (number|Long|string);

                        /** InputDataConfig filter. */
                        public filter: string;

                        /**
                         * Creates a new InputDataConfig instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns InputDataConfig instance
                         */
                        public static create(properties?: google.cloud.contactcenterinsights.v1.IssueModel.IInputDataConfig): google.cloud.contactcenterinsights.v1.IssueModel.InputDataConfig;

                        /**
                         * Encodes the specified InputDataConfig message. Does not implicitly {@link google.cloud.contactcenterinsights.v1.IssueModel.InputDataConfig.verify|verify} messages.
                         * @param message InputDataConfig message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.contactcenterinsights.v1.IssueModel.IInputDataConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified InputDataConfig message, length delimited. Does not implicitly {@link google.cloud.contactcenterinsights.v1.IssueModel.InputDataConfig.verify|verify} messages.
                         * @param message InputDataConfig message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.contactcenterinsights.v1.IssueModel.IInputDataConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an InputDataConfig message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns InputDataConfig
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.contactcenterinsights.v1.IssueModel.InputDataConfig;

                        /**
                         * Decodes an InputDataConfig message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns InputDataConfig
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.contactcenterinsights.v1.IssueModel.InputDataConfig;

                        /**
                         * Verifies an InputDataConfig message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an InputDataConfig message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns InputDataConfig
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.contactcenterinsights.v1.IssueModel.InputDataConfig;

                        /**
                         * Creates a plain object from an InputDataConfig message. Also converts values to other types if specified.
                         * @param message InputDataConfig
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.contactcenterinsights.v1.IssueModel.InputDataConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this InputDataConfig to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        UNDEPLOYED = 1,
                        DEPLOYING = 2,
                        DEPLOYED = 3,
                        UNDEPLOYING = 4,
                        DELETING = 5
                    }
                }

                /** Properties of an Issue. */
                interface IIssue {

                    /** Issue name */
                    name?: (string|null);

                    /** Issue displayName */
                    displayName?: (string|null);

                    /** Issue createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** Issue updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);
                }

                /** Represents an Issue. */
                class Issue implements IIssue {

                    /**
                     * Constructs a new Issue.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.contactcenterinsights.v1.IIssue);

                    /** Issue name. */
                    public name: string;

                    /** Issue displayName. */
                    public displayName: string;

                    /** Issue createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** Issue updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /**
                     * Creates a new Issue instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Issue instance
                     */
                    public static create(properties?: google.cloud.contactcenterinsights.v1.IIssue): google.cloud.contactcenterinsights.v1.Issue;

                    /**
                     * Encodes the specified Issue message. Does not implicitly {@link google.cloud.contactcenterinsights.v1.Issue.verify|verify} messages.
                     * @param message Issue message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.contactcenterinsights.v1.IIssue, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Issue message, length delimited. Does not implicitly {@link google.cloud.contactcenterinsights.v1.Issue.verify|verify} messages.
                     * @param message Issue message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.contactcenterinsights.v1.IIssue, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an Issue message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Issue
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.contactcenterinsights.v1.Issue;

                    /**
                     * Decodes an Issue message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Issue
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.contactcenterinsights.v1.Issue;

                    /**
                     * Verifies an Issue message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an Issue message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Issue
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.contactcenterinsights.v1.Issue;

                    /**
                     * Creates a plain object from an Issue message. Also converts values to other types if specified.
                     * @param message Issue
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.contactcenterinsights.v1.Issue, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Issue to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an IssueModelLabelStats. */
                interface IIssueModelLabelStats {

                    /** IssueModelLabelStats analyzedConversationsCount */
                    analyzedConversationsCount?: (number|Long|string|null);

                    /** IssueModelLabelStats unclassifiedConversationsCount */
                    unclassifiedConversationsCount?: (number|Long|string|null);

                    /** IssueModelLabelStats issueStats */
                    issueStats?: ({ [k: string]: google.cloud.contactcenterinsights.v1.IssueModelLabelStats.IIssueStats }|null);
                }

                /** Represents an IssueModelLabelStats. */
                class IssueModelLabelStats implements IIssueModelLabelStats {

                    /**
                     * Constructs a new IssueModelLabelStats.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.contactcenterinsights.v1.IIssueModelLabelStats);

                    /** IssueModelLabelStats analyzedConversationsCount. */
                    public analyzedConversationsCount: (number|Long|string);

                    /** IssueModelLabelStats unclassifiedConversationsCount. */
                    public unclassifiedConversationsCount: (number|Long|string);

                    /** IssueModelLabelStats issueStats. */
                    public issueStats: { [k: string]: google.cloud.contactcenterinsights.v1.IssueModelLabelStats.IIssueStats };

                    /**
                     * Creates a new IssueModelLabelStats instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns IssueModelLabelStats instance
                     */
                    public static create(properties?: google.cloud.contactcenterinsights.v1.IIssueModelLabelStats): google.cloud.contactcenterinsights.v1.IssueModelLabelStats;

                    /**
                     * Encodes the specified IssueModelLabelStats message. Does not implicitly {@link google.cloud.contactcenterinsights.v1.IssueModelLabelStats.verify|verify} messages.
                     * @param message IssueModelLabelStats message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.contactcenterinsights.v1.IIssueModelLabelStats, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified IssueModelLabelStats message, length delimited. Does not implicitly {@link google.cloud.contactcenterinsights.v1.IssueModelLabelStats.verify|verify} messages.
                     * @param message IssueModelLabelStats message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.contactcenterinsights.v1.IIssueModelLabelStats, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an IssueModelLabelStats message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns IssueModelLabelStats
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.contactcenterinsights.v1.IssueModelLabelStats;

                    /**
                     * Decodes an IssueModelLabelStats message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns IssueModelLabelStats
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.contactcenterinsights.v1.IssueModelLabelStats;

                    /**
                     * Verifies an IssueModelLabelStats message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an IssueModelLabelStats message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns IssueModelLabelStats
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.contactcenterinsights.v1.IssueModelLabelStats;

                    /**
                     * Creates a plain object from an IssueModelLabelStats message. Also converts values to other types if specified.
                     * @param message IssueModelLabelStats
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.contactcenterinsights.v1.IssueModelLabelStats, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this IssueModelLabelStats to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace IssueModelLabelStats {

                    /** Properties of an IssueStats. */
                    interface IIssueStats {

                        /** IssueStats issue */
                        issue?: (string|null);

                        /** IssueStats labeledConversationsCount */
                        labeledConversationsCount?: (number|Long|string|null);

                        /** IssueStats displayName */
                        displayName?: (string|null);
                    }

                    /** Represents an IssueStats. */
                    class IssueStats implements IIssueStats {

                        /**
                         * Constructs a new IssueStats.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.contactcenterinsights.v1.IssueModelLabelStats.IIssueStats);

                        /** IssueStats issue. */
                        public issue: string;

                        /** IssueStats labeledConversationsCount. */
                        public labeledConversationsCount: (number|Long|string);

                        /** IssueStats displayName. */
                        public displayName: string;

                        /**
                         * Creates a new IssueStats instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns IssueStats instance
                         */
                        public static create(properties?: google.cloud.contactcenterinsights.v1.IssueModelLabelStats.IIssueStats): google.cloud.contactcenterinsights.v1.IssueModelLabelStats.IssueStats;

                        /**
                         * Encodes the specified IssueStats message. Does not implicitly {@link google.cloud.contactcenterinsights.v1.IssueModelLabelStats.IssueStats.verify|verify} messages.
                         * @param message IssueStats message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.contactcenterinsights.v1.IssueModelLabelStats.IIssueStats, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified IssueStats message, length delimited. Does not implicitly {@link google.cloud.contactcenterinsights.v1.IssueModelLabelStats.IssueStats.verify|verify} messages.
                         * @param message IssueStats message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.contactcenterinsights.v1.IssueModelLabelStats.IIssueStats, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an IssueStats message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns IssueStats
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.contactcenterinsights.v1.IssueModelLabelStats.IssueStats;

                        /**
                         * Decodes an IssueStats message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns IssueStats
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.contactcenterinsights.v1.IssueModelLabelStats.IssueStats;

                        /**
                         * Verifies an IssueStats message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an IssueStats message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns IssueStats
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.contactcenterinsights.v1.IssueModelLabelStats.IssueStats;

                        /**
                         * Creates a plain object from an IssueStats message. Also converts values to other types if specified.
                         * @param message IssueStats
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.contactcenterinsights.v1.IssueModelLabelStats.IssueStats, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this IssueStats to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }
                }

                /** Properties of a PhraseMatcher. */
                interface IPhraseMatcher {

                    /** PhraseMatcher name */
                    name?: (string|null);

                    /** PhraseMatcher revisionId */
                    revisionId?: (string|null);

                    /** PhraseMatcher versionTag */
                    versionTag?: (string|null);

                    /** PhraseMatcher revisionCreateTime */
                    revisionCreateTime?: (google.protobuf.ITimestamp|null);

                    /** PhraseMatcher displayName */
                    displayName?: (string|null);

                    /** PhraseMatcher type */
                    type?: (google.cloud.contactcenterinsights.v1.PhraseMatcher.PhraseMatcherType|keyof typeof google.cloud.contactcenterinsights.v1.PhraseMatcher.PhraseMatcherType|null);

                    /** PhraseMatcher active */
                    active?: (boolean|null);

                    /** PhraseMatcher phraseMatchRuleGroups */
                    phraseMatchRuleGroups?: (google.cloud.contactcenterinsights.v1.IPhraseMatchRuleGroup[]|null);

                    /** PhraseMatcher activationUpdateTime */
                    activationUpdateTime?: (google.protobuf.ITimestamp|null);

                    /** PhraseMatcher roleMatch */
                    roleMatch?: (google.cloud.contactcenterinsights.v1.ConversationParticipant.Role|keyof typeof google.cloud.contactcenterinsights.v1.ConversationParticipant.Role|null);

                    /** PhraseMatcher updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);
                }

                /** Represents a PhraseMatcher. */
                class PhraseMatcher implements IPhraseMatcher {

                    /**
                     * Constructs a new PhraseMatcher.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.contactcenterinsights.v1.IPhraseMatcher);

                    /** PhraseMatcher name. */
                    public name: string;

                    /** PhraseMatcher revisionId. */
                    public revisionId: string;

                    /** PhraseMatcher versionTag. */
                    public versionTag: string;

                    /** PhraseMatcher revisionCreateTime. */
                    public revisionCreateTime?: (google.protobuf.ITimestamp|null);

                    /** PhraseMatcher displayName. */
                    public displayName: string;

                    /** PhraseMatcher type. */
                    public type: (google.cloud.contactcenterinsights.v1.PhraseMatcher.PhraseMatcherType|keyof typeof google.cloud.contactcenterinsights.v1.PhraseMatcher.PhraseMatcherType);

                    /** PhraseMatcher active. */
                    public active: boolean;

                    /** PhraseMatcher phraseMatchRuleGroups. */
                    public phraseMatchRuleGroups: google.cloud.contactcenterinsights.v1.IPhraseMatchRuleGroup[];

                    /** PhraseMatcher activationUpdateTime. */
                    public activationUpdateTime?: (google.protobuf.ITimestamp|null);

                    /** PhraseMatcher roleMatch. */
                    public roleMatch: (google.cloud.contactcenterinsights.v1.ConversationParticipant.Role|keyof typeof google.cloud.contactcenterinsights.v1.ConversationParticipant.Role);

                    /** PhraseMatcher updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /**
                     * Creates a new PhraseMatcher instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PhraseMatcher instance
                     */
                    public static create(properties?: google.cloud.contactcenterinsights.v1.IPhraseMatcher): google.cloud.contactcenterinsights.v1.PhraseMatcher;

                    /**
                     * Encodes the specified PhraseMatcher message. Does not implicitly {@link google.cloud.contactcenterinsights.v1.PhraseMatcher.verify|verify} messages.
                     * @param message PhraseMatcher message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.contactcenterinsights.v1.IPhraseMatcher, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PhraseMatcher message, length delimited. Does not implicitly {@link google.cloud.contactcenterinsights.v1.PhraseMatcher.verify|verify} messages.
                     * @param message PhraseMatcher message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.contactcenterinsights.v1.IPhraseMatcher, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PhraseMatcher message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PhraseMatcher
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.contactcenterinsights.v1.PhraseMatcher;

                    /**
                     * Decodes a PhraseMatcher message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PhraseMatcher
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.contactcenterinsights.v1.PhraseMatcher;

                    /**
                     * Verifies a PhraseMatcher message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PhraseMatcher message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PhraseMatcher
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.contactcenterinsights.v1.PhraseMatcher;

                    /**
                     * Creates a plain object from a PhraseMatcher message. Also converts values to other types if specified.
                     * @param message PhraseMatcher
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.contactcenterinsights.v1.PhraseMatcher, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PhraseMatcher to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace PhraseMatcher {

                    /** PhraseMatcherType enum. */
                    enum PhraseMatcherType {
                        PHRASE_MATCHER_TYPE_UNSPECIFIED = 0,
                        ALL_OF = 1,
                        ANY_OF = 2
                    }
                }

                /** Properties of a PhraseMatchRuleGroup. */
                interface IPhraseMatchRuleGroup {

                    /** PhraseMatchRuleGroup type */
                    type?: (google.cloud.contactcenterinsights.v1.PhraseMatchRuleGroup.PhraseMatchRuleGroupType|keyof typeof google.cloud.contactcenterinsights.v1.PhraseMatchRuleGroup.PhraseMatchRuleGroupType|null);

                    /** PhraseMatchRuleGroup phraseMatchRules */
                    phraseMatchRules?: (google.cloud.contactcenterinsights.v1.IPhraseMatchRule[]|null);
                }

                /** Represents a PhraseMatchRuleGroup. */
                class PhraseMatchRuleGroup implements IPhraseMatchRuleGroup {

                    /**
                     * Constructs a new PhraseMatchRuleGroup.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.contactcenterinsights.v1.IPhraseMatchRuleGroup);

                    /** PhraseMatchRuleGroup type. */
                    public type: (google.cloud.contactcenterinsights.v1.PhraseMatchRuleGroup.PhraseMatchRuleGroupType|keyof typeof google.cloud.contactcenterinsights.v1.PhraseMatchRuleGroup.PhraseMatchRuleGroupType);

                    /** PhraseMatchRuleGroup phraseMatchRules. */
                    public phraseMatchRules: google.cloud.contactcenterinsights.v1.IPhraseMatchRule[];

                    /**
                     * Creates a new PhraseMatchRuleGroup instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PhraseMatchRuleGroup instance
                     */
                    public static create(properties?: google.cloud.contactcenterinsights.v1.IPhraseMatchRuleGroup): google.cloud.contactcenterinsights.v1.PhraseMatchRuleGroup;

                    /**
                     * Encodes the specified PhraseMatchRuleGroup message. Does not implicitly {@link google.cloud.contactcenterinsights.v1.PhraseMatchRuleGroup.verify|verify} messages.
                     * @param message PhraseMatchRuleGroup message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.contactcenterinsights.v1.IPhraseMatchRuleGroup, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PhraseMatchRuleGroup message, length delimited. Does not implicitly {@link google.cloud.contactcenterinsights.v1.PhraseMatchRuleGroup.verify|verify} messages.
                     * @param message PhraseMatchRuleGroup message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.contactcenterinsights.v1.IPhraseMatchRuleGroup, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PhraseMatchRuleGroup message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PhraseMatchRuleGroup
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.contactcenterinsights.v1.PhraseMatchRuleGroup;

                    /**
                     * Decodes a PhraseMatchRuleGroup message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PhraseMatchRuleGroup
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.contactcenterinsights.v1.PhraseMatchRuleGroup;

                    /**
                     * Verifies a PhraseMatchRuleGroup message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PhraseMatchRuleGroup message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PhraseMatchRuleGroup
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.contactcenterinsights.v1.PhraseMatchRuleGroup;

                    /**
                     * Creates a plain object from a PhraseMatchRuleGroup message. Also converts values to other types if specified.
                     * @param message PhraseMatchRuleGroup
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.contactcenterinsights.v1.PhraseMatchRuleGroup, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PhraseMatchRuleGroup to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace PhraseMatchRuleGroup {

                    /** PhraseMatchRuleGroupType enum. */
                    enum PhraseMatchRuleGroupType {
                        PHRASE_MATCH_RULE_GROUP_TYPE_UNSPECIFIED = 0,
                        ALL_OF = 1,
                        ANY_OF = 2
                    }
                }

                /** Properties of a PhraseMatchRule. */
                interface IPhraseMatchRule {

                    /** PhraseMatchRule query */
                    query?: (string|null);

                    /** PhraseMatchRule negated */
                    negated?: (boolean|null);

                    /** PhraseMatchRule config */
                    config?: (google.cloud.contactcenterinsights.v1.IPhraseMatchRuleConfig|null);
                }

                /** Represents a PhraseMatchRule. */
                class PhraseMatchRule implements IPhraseMatchRule {

                    /**
                     * Constructs a new PhraseMatchRule.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.contactcenterinsights.v1.IPhraseMatchRule);

                    /** PhraseMatchRule query. */
                    public query: string;

                    /** PhraseMatchRule negated. */
                    public negated: boolean;

                    /** PhraseMatchRule config. */
                    public config?: (google.cloud.contactcenterinsights.v1.IPhraseMatchRuleConfig|null);

                    /**
                     * Creates a new PhraseMatchRule instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PhraseMatchRule instance
                     */
                    public static create(properties?: google.cloud.contactcenterinsights.v1.IPhraseMatchRule): google.cloud.contactcenterinsights.v1.PhraseMatchRule;

                    /**
                     * Encodes the specified PhraseMatchRule message. Does not implicitly {@link google.cloud.contactcenterinsights.v1.PhraseMatchRule.verify|verify} messages.
                     * @param message PhraseMatchRule message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.contactcenterinsights.v1.IPhraseMatchRule, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PhraseMatchRule message, length delimited. Does not implicitly {@link google.cloud.contactcenterinsights.v1.PhraseMatchRule.verify|verify} messages.
                     * @param message PhraseMatchRule message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.contactcenterinsights.v1.IPhraseMatchRule, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PhraseMatchRule message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PhraseMatchRule
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.contactcenterinsights.v1.PhraseMatchRule;

                    /**
                     * Decodes a PhraseMatchRule message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PhraseMatchRule
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.contactcenterinsights.v1.PhraseMatchRule;

                    /**
                     * Verifies a PhraseMatchRule message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PhraseMatchRule message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PhraseMatchRule
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.contactcenterinsights.v1.PhraseMatchRule;

                    /**
                     * Creates a plain object from a PhraseMatchRule message. Also converts values to other types if specified.
                     * @param message PhraseMatchRule
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.contactcenterinsights.v1.PhraseMatchRule, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PhraseMatchRule to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a PhraseMatchRuleConfig. */
                interface IPhraseMatchRuleConfig {

                    /** PhraseMatchRuleConfig exactMatchConfig */
                    exactMatchConfig?: (google.cloud.contactcenterinsights.v1.IExactMatchConfig|null);
                }

                /** Represents a PhraseMatchRuleConfig. */
                class PhraseMatchRuleConfig implements IPhraseMatchRuleConfig {

                    /**
                     * Constructs a new PhraseMatchRuleConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.contactcenterinsights.v1.IPhraseMatchRuleConfig);

                    /** PhraseMatchRuleConfig exactMatchConfig. */
                    public exactMatchConfig?: (google.cloud.contactcenterinsights.v1.IExactMatchConfig|null);

                    /** PhraseMatchRuleConfig config. */
                    public config?: "exactMatchConfig";

                    /**
                     * Creates a new PhraseMatchRuleConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PhraseMatchRuleConfig instance
                     */
                    public static create(properties?: google.cloud.contactcenterinsights.v1.IPhraseMatchRuleConfig): google.cloud.contactcenterinsights.v1.PhraseMatchRuleConfig;

                    /**
                     * Encodes the specified PhraseMatchRuleConfig message. Does not implicitly {@link google.cloud.contactcenterinsights.v1.PhraseMatchRuleConfig.verify|verify} messages.
                     * @param message PhraseMatchRuleConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.contactcenterinsights.v1.IPhraseMatchRuleConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PhraseMatchRuleConfig message, length delimited. Does not implicitly {@link google.cloud.contactcenterinsights.v1.PhraseMatchRuleConfig.verify|verify} messages.
                     * @param message PhraseMatchRuleConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.contactcenterinsights.v1.IPhraseMatchRuleConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PhraseMatchRuleConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PhraseMatchRuleConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.contactcenterinsights.v1.PhraseMatchRuleConfig;

                    /**
                     * Decodes a PhraseMatchRuleConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PhraseMatchRuleConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.contactcenterinsights.v1.PhraseMatchRuleConfig;

                    /**
                     * Verifies a PhraseMatchRuleConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PhraseMatchRuleConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PhraseMatchRuleConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.contactcenterinsights.v1.PhraseMatchRuleConfig;

                    /**
                     * Creates a plain object from a PhraseMatchRuleConfig message. Also converts values to other types if specified.
                     * @param message PhraseMatchRuleConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.contactcenterinsights.v1.PhraseMatchRuleConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PhraseMatchRuleConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an ExactMatchConfig. */
                interface IExactMatchConfig {

                    /** ExactMatchConfig caseSensitive */
                    caseSensitive?: (boolean|null);
                }

                /** Represents an ExactMatchConfig. */
                class ExactMatchConfig implements IExactMatchConfig {

                    /**
                     * Constructs a new ExactMatchConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.contactcenterinsights.v1.IExactMatchConfig);

                    /** ExactMatchConfig caseSensitive. */
                    public caseSensitive: boolean;

                    /**
                     * Creates a new ExactMatchConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ExactMatchConfig instance
                     */
                    public static create(properties?: google.cloud.contactcenterinsights.v1.IExactMatchConfig): google.cloud.contactcenterinsights.v1.ExactMatchConfig;

                    /**
                     * Encodes the specified ExactMatchConfig message. Does not implicitly {@link google.cloud.contactcenterinsights.v1.ExactMatchConfig.verify|verify} messages.
                     * @param message ExactMatchConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.contactcenterinsights.v1.IExactMatchConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ExactMatchConfig message, length delimited. Does not implicitly {@link google.cloud.contactcenterinsights.v1.ExactMatchConfig.verify|verify} messages.
                     * @param message ExactMatchConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.contactcenterinsights.v1.IExactMatchConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ExactMatchConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ExactMatchConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.contactcenterinsights.v1.ExactMatchConfig;

                    /**
                     * Decodes an ExactMatchConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ExactMatchConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.contactcenterinsights.v1.ExactMatchConfig;

                    /**
                     * Verifies an ExactMatchConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ExactMatchConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ExactMatchConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.contactcenterinsights.v1.ExactMatchConfig;

                    /**
                     * Creates a plain object from an ExactMatchConfig message. Also converts values to other types if specified.
                     * @param message ExactMatchConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.contactcenterinsights.v1.ExactMatchConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ExactMatchConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a Settings. */
                interface ISettings {

                    /** Settings name */
                    name?: (string|null);

                    /** Settings createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** Settings updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** Settings languageCode */
                    languageCode?: (string|null);

                    /** Settings conversationTtl */
                    conversationTtl?: (google.protobuf.IDuration|null);

                    /** Settings pubsubNotificationSettings */
                    pubsubNotificationSettings?: ({ [k: string]: string }|null);

                    /** Settings analysisConfig */
                    analysisConfig?: (google.cloud.contactcenterinsights.v1.Settings.IAnalysisConfig|null);
                }

                /** Represents a Settings. */
                class Settings implements ISettings {

                    /**
                     * Constructs a new Settings.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.contactcenterinsights.v1.ISettings);

                    /** Settings name. */
                    public name: string;

                    /** Settings createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** Settings updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** Settings languageCode. */
                    public languageCode: string;

                    /** Settings conversationTtl. */
                    public conversationTtl?: (google.protobuf.IDuration|null);

                    /** Settings pubsubNotificationSettings. */
                    public pubsubNotificationSettings: { [k: string]: string };

                    /** Settings analysisConfig. */
                    public analysisConfig?: (google.cloud.contactcenterinsights.v1.Settings.IAnalysisConfig|null);

                    /**
                     * Creates a new Settings instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Settings instance
                     */
                    public static create(properties?: google.cloud.contactcenterinsights.v1.ISettings): google.cloud.contactcenterinsights.v1.Settings;

                    /**
                     * Encodes the specified Settings message. Does not implicitly {@link google.cloud.contactcenterinsights.v1.Settings.verify|verify} messages.
                     * @param message Settings message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.contactcenterinsights.v1.ISettings, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Settings message, length delimited. Does not implicitly {@link google.cloud.contactcenterinsights.v1.Settings.verify|verify} messages.
                     * @param message Settings message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.contactcenterinsights.v1.ISettings, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Settings message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Settings
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.contactcenterinsights.v1.Settings;

                    /**
                     * Decodes a Settings message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Settings
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.contactcenterinsights.v1.Settings;

                    /**
                     * Verifies a Settings message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Settings message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Settings
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.contactcenterinsights.v1.Settings;

                    /**
                     * Creates a plain object from a Settings message. Also converts values to other types if specified.
                     * @param message Settings
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.contactcenterinsights.v1.Settings, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Settings to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace Settings {

                    /** Properties of an AnalysisConfig. */
                    interface IAnalysisConfig {

                        /** AnalysisConfig runtimeIntegrationAnalysisPercentage */
                        runtimeIntegrationAnalysisPercentage?: (number|null);
                    }

                    /** Represents an AnalysisConfig. */
                    class AnalysisConfig implements IAnalysisConfig {

                        /**
                         * Constructs a new AnalysisConfig.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.contactcenterinsights.v1.Settings.IAnalysisConfig);

                        /** AnalysisConfig runtimeIntegrationAnalysisPercentage. */
                        public runtimeIntegrationAnalysisPercentage: number;

                        /**
                         * Creates a new AnalysisConfig instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns AnalysisConfig instance
                         */
                        public static create(properties?: google.cloud.contactcenterinsights.v1.Settings.IAnalysisConfig): google.cloud.contactcenterinsights.v1.Settings.AnalysisConfig;

                        /**
                         * Encodes the specified AnalysisConfig message. Does not implicitly {@link google.cloud.contactcenterinsights.v1.Settings.AnalysisConfig.verify|verify} messages.
                         * @param message AnalysisConfig message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.contactcenterinsights.v1.Settings.IAnalysisConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified AnalysisConfig message, length delimited. Does not implicitly {@link google.cloud.contactcenterinsights.v1.Settings.AnalysisConfig.verify|verify} messages.
                         * @param message AnalysisConfig message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.contactcenterinsights.v1.Settings.IAnalysisConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an AnalysisConfig message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns AnalysisConfig
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.contactcenterinsights.v1.Settings.AnalysisConfig;

                        /**
                         * Decodes an AnalysisConfig message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns AnalysisConfig
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.contactcenterinsights.v1.Settings.AnalysisConfig;

                        /**
                         * Verifies an AnalysisConfig message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an AnalysisConfig message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns AnalysisConfig
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.contactcenterinsights.v1.Settings.AnalysisConfig;

                        /**
                         * Creates a plain object from an AnalysisConfig message. Also converts values to other types if specified.
                         * @param message AnalysisConfig
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.contactcenterinsights.v1.Settings.AnalysisConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this AnalysisConfig to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }
                }

                /** Properties of a RuntimeAnnotation. */
                interface IRuntimeAnnotation {

                    /** RuntimeAnnotation articleSuggestion */
                    articleSuggestion?: (google.cloud.contactcenterinsights.v1.IArticleSuggestionData|null);

                    /** RuntimeAnnotation faqAnswer */
                    faqAnswer?: (google.cloud.contactcenterinsights.v1.IFaqAnswerData|null);

                    /** RuntimeAnnotation smartReply */
                    smartReply?: (google.cloud.contactcenterinsights.v1.ISmartReplyData|null);

                    /** RuntimeAnnotation smartComposeSuggestion */
                    smartComposeSuggestion?: (google.cloud.contactcenterinsights.v1.ISmartComposeSuggestionData|null);

                    /** RuntimeAnnotation dialogflowInteraction */
                    dialogflowInteraction?: (google.cloud.contactcenterinsights.v1.IDialogflowInteractionData|null);

                    /** RuntimeAnnotation annotationId */
                    annotationId?: (string|null);

                    /** RuntimeAnnotation createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** RuntimeAnnotation startBoundary */
                    startBoundary?: (google.cloud.contactcenterinsights.v1.IAnnotationBoundary|null);

                    /** RuntimeAnnotation endBoundary */
                    endBoundary?: (google.cloud.contactcenterinsights.v1.IAnnotationBoundary|null);

                    /** RuntimeAnnotation answerFeedback */
                    answerFeedback?: (google.cloud.contactcenterinsights.v1.IAnswerFeedback|null);
                }

                /** Represents a RuntimeAnnotation. */
                class RuntimeAnnotation implements IRuntimeAnnotation {

                    /**
                     * Constructs a new RuntimeAnnotation.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.contactcenterinsights.v1.IRuntimeAnnotation);

                    /** RuntimeAnnotation articleSuggestion. */
                    public articleSuggestion?: (google.cloud.contactcenterinsights.v1.IArticleSuggestionData|null);

                    /** RuntimeAnnotation faqAnswer. */
                    public faqAnswer?: (google.cloud.contactcenterinsights.v1.IFaqAnswerData|null);

                    /** RuntimeAnnotation smartReply. */
                    public smartReply?: (google.cloud.contactcenterinsights.v1.ISmartReplyData|null);

                    /** RuntimeAnnotation smartComposeSuggestion. */
                    public smartComposeSuggestion?: (google.cloud.contactcenterinsights.v1.ISmartComposeSuggestionData|null);

                    /** RuntimeAnnotation dialogflowInteraction. */
                    public dialogflowInteraction?: (google.cloud.contactcenterinsights.v1.IDialogflowInteractionData|null);

                    /** RuntimeAnnotation annotationId. */
                    public annotationId: string;

                    /** RuntimeAnnotation createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** RuntimeAnnotation startBoundary. */
                    public startBoundary?: (google.cloud.contactcenterinsights.v1.IAnnotationBoundary|null);

                    /** RuntimeAnnotation endBoundary. */
                    public endBoundary?: (google.cloud.contactcenterinsights.v1.IAnnotationBoundary|null);

                    /** RuntimeAnnotation answerFeedback. */
                    public answerFeedback?: (google.cloud.contactcenterinsights.v1.IAnswerFeedback|null);

                    /** RuntimeAnnotation data. */
                    public data?: ("articleSuggestion"|"faqAnswer"|"smartReply"|"smartComposeSuggestion"|"dialogflowInteraction");

                    /**
                     * Creates a new RuntimeAnnotation instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RuntimeAnnotation instance
                     */
                    public static create(properties?: google.cloud.contactcenterinsights.v1.IRuntimeAnnotation): google.cloud.contactcenterinsights.v1.RuntimeAnnotation;

                    /**
                     * Encodes the specified RuntimeAnnotation message. Does not implicitly {@link google.cloud.contactcenterinsights.v1.RuntimeAnnotation.verify|verify} messages.
                     * @param message RuntimeAnnotation message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.contactcenterinsights.v1.IRuntimeAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RuntimeAnnotation message, length delimited. Does not implicitly {@link google.cloud.contactcenterinsights.v1.RuntimeAnnotation.verify|verify} messages.
                     * @param message RuntimeAnnotation message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.contactcenterinsights.v1.IRuntimeAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RuntimeAnnotation message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RuntimeAnnotation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.contactcenterinsights.v1.RuntimeAnnotation;

                    /**
                     * Decodes a RuntimeAnnotation message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RuntimeAnnotation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.contactcenterinsights.v1.RuntimeAnnotation;

                    /**
                     * Verifies a RuntimeAnnotation message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RuntimeAnnotation message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RuntimeAnnotation
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.contactcenterinsights.v1.RuntimeAnnotation;

                    /**
                     * Creates a plain object from a RuntimeAnnotation message. Also converts values to other types if specified.
                     * @param message RuntimeAnnotation
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.contactcenterinsights.v1.RuntimeAnnotation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RuntimeAnnotation to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an AnswerFeedback. */
                interface IAnswerFeedback {

                    /** AnswerFeedback correctnessLevel */
                    correctnessLevel?: (google.cloud.contactcenterinsights.v1.AnswerFeedback.CorrectnessLevel|keyof typeof google.cloud.contactcenterinsights.v1.AnswerFeedback.CorrectnessLevel|null);

                    /** AnswerFeedback clicked */
                    clicked?: (boolean|null);

                    /** AnswerFeedback displayed */
                    displayed?: (boolean|null);
                }

                /** Represents an AnswerFeedback. */
                class AnswerFeedback implements IAnswerFeedback {

                    /**
                     * Constructs a new AnswerFeedback.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.contactcenterinsights.v1.IAnswerFeedback);

                    /** AnswerFeedback correctnessLevel. */
                    public correctnessLevel: (google.cloud.contactcenterinsights.v1.AnswerFeedback.CorrectnessLevel|keyof typeof google.cloud.contactcenterinsights.v1.AnswerFeedback.CorrectnessLevel);

                    /** AnswerFeedback clicked. */
                    public clicked: boolean;

                    /** AnswerFeedback displayed. */
                    public displayed: boolean;

                    /**
                     * Creates a new AnswerFeedback instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AnswerFeedback instance
                     */
                    public static create(properties?: google.cloud.contactcenterinsights.v1.IAnswerFeedback): google.cloud.contactcenterinsights.v1.AnswerFeedback;

                    /**
                     * Encodes the specified AnswerFeedback message. Does not implicitly {@link google.cloud.contactcenterinsights.v1.AnswerFeedback.verify|verify} messages.
                     * @param message AnswerFeedback message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.contactcenterinsights.v1.IAnswerFeedback, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AnswerFeedback message, length delimited. Does not implicitly {@link google.cloud.contactcenterinsights.v1.AnswerFeedback.verify|verify} messages.
                     * @param message AnswerFeedback message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.contactcenterinsights.v1.IAnswerFeedback, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AnswerFeedback message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AnswerFeedback
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.contactcenterinsights.v1.AnswerFeedback;

                    /**
                     * Decodes an AnswerFeedback message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AnswerFeedback
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.contactcenterinsights.v1.AnswerFeedback;

                    /**
                     * Verifies an AnswerFeedback message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AnswerFeedback message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AnswerFeedback
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.contactcenterinsights.v1.AnswerFeedback;

                    /**
                     * Creates a plain object from an AnswerFeedback message. Also converts values to other types if specified.
                     * @param message AnswerFeedback
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.contactcenterinsights.v1.AnswerFeedback, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AnswerFeedback to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace AnswerFeedback {

                    /** CorrectnessLevel enum. */
                    enum CorrectnessLevel {
                        CORRECTNESS_LEVEL_UNSPECIFIED = 0,
                        NOT_CORRECT = 1,
                        PARTIALLY_CORRECT = 2,
                        FULLY_CORRECT = 3
                    }
                }

                /** Properties of an ArticleSuggestionData. */
                interface IArticleSuggestionData {

                    /** ArticleSuggestionData title */
                    title?: (string|null);

                    /** ArticleSuggestionData uri */
                    uri?: (string|null);

                    /** ArticleSuggestionData confidenceScore */
                    confidenceScore?: (number|null);

                    /** ArticleSuggestionData metadata */
                    metadata?: ({ [k: string]: string }|null);

                    /** ArticleSuggestionData queryRecord */
                    queryRecord?: (string|null);

                    /** ArticleSuggestionData source */
                    source?: (string|null);
                }

                /** Represents an ArticleSuggestionData. */
                class ArticleSuggestionData implements IArticleSuggestionData {

                    /**
                     * Constructs a new ArticleSuggestionData.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.contactcenterinsights.v1.IArticleSuggestionData);

                    /** ArticleSuggestionData title. */
                    public title: string;

                    /** ArticleSuggestionData uri. */
                    public uri: string;

                    /** ArticleSuggestionData confidenceScore. */
                    public confidenceScore: number;

                    /** ArticleSuggestionData metadata. */
                    public metadata: { [k: string]: string };

                    /** ArticleSuggestionData queryRecord. */
                    public queryRecord: string;

                    /** ArticleSuggestionData source. */
                    public source: string;

                    /**
                     * Creates a new ArticleSuggestionData instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ArticleSuggestionData instance
                     */
                    public static create(properties?: google.cloud.contactcenterinsights.v1.IArticleSuggestionData): google.cloud.contactcenterinsights.v1.ArticleSuggestionData;

                    /**
                     * Encodes the specified ArticleSuggestionData message. Does not implicitly {@link google.cloud.contactcenterinsights.v1.ArticleSuggestionData.verify|verify} messages.
                     * @param message ArticleSuggestionData message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.contactcenterinsights.v1.IArticleSuggestionData, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ArticleSuggestionData message, length delimited. Does not implicitly {@link google.cloud.contactcenterinsights.v1.ArticleSuggestionData.verify|verify} messages.
                     * @param message ArticleSuggestionData message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.contactcenterinsights.v1.IArticleSuggestionData, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ArticleSuggestionData message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ArticleSuggestionData
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.contactcenterinsights.v1.ArticleSuggestionData;

                    /**
                     * Decodes an ArticleSuggestionData message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ArticleSuggestionData
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.contactcenterinsights.v1.ArticleSuggestionData;

                    /**
                     * Verifies an ArticleSuggestionData message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ArticleSuggestionData message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ArticleSuggestionData
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.contactcenterinsights.v1.ArticleSuggestionData;

                    /**
                     * Creates a plain object from an ArticleSuggestionData message. Also converts values to other types if specified.
                     * @param message ArticleSuggestionData
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.contactcenterinsights.v1.ArticleSuggestionData, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ArticleSuggestionData to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a FaqAnswerData. */
                interface IFaqAnswerData {

                    /** FaqAnswerData answer */
                    answer?: (string|null);

                    /** FaqAnswerData confidenceScore */
                    confidenceScore?: (number|null);

                    /** FaqAnswerData question */
                    question?: (string|null);

                    /** FaqAnswerData metadata */
                    metadata?: ({ [k: string]: string }|null);

                    /** FaqAnswerData queryRecord */
                    queryRecord?: (string|null);

                    /** FaqAnswerData source */
                    source?: (string|null);
                }

                /** Represents a FaqAnswerData. */
                class FaqAnswerData implements IFaqAnswerData {

                    /**
                     * Constructs a new FaqAnswerData.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.contactcenterinsights.v1.IFaqAnswerData);

                    /** FaqAnswerData answer. */
                    public answer: string;

                    /** FaqAnswerData confidenceScore. */
                    public confidenceScore: number;

                    /** FaqAnswerData question. */
                    public question: string;

                    /** FaqAnswerData metadata. */
                    public metadata: { [k: string]: string };

                    /** FaqAnswerData queryRecord. */
                    public queryRecord: string;

                    /** FaqAnswerData source. */
                    public source: string;

                    /**
                     * Creates a new FaqAnswerData instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns FaqAnswerData instance
                     */
                    public static create(properties?: google.cloud.contactcenterinsights.v1.IFaqAnswerData): google.cloud.contactcenterinsights.v1.FaqAnswerData;

                    /**
                     * Encodes the specified FaqAnswerData message. Does not implicitly {@link google.cloud.contactcenterinsights.v1.FaqAnswerData.verify|verify} messages.
                     * @param message FaqAnswerData message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.contactcenterinsights.v1.IFaqAnswerData, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified FaqAnswerData message, length delimited. Does not implicitly {@link google.cloud.contactcenterinsights.v1.FaqAnswerData.verify|verify} messages.
                     * @param message FaqAnswerData message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.contactcenterinsights.v1.IFaqAnswerData, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a FaqAnswerData message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns FaqAnswerData
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.contactcenterinsights.v1.FaqAnswerData;

                    /**
                     * Decodes a FaqAnswerData message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns FaqAnswerData
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.contactcenterinsights.v1.FaqAnswerData;

                    /**
                     * Verifies a FaqAnswerData message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a FaqAnswerData message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns FaqAnswerData
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.contactcenterinsights.v1.FaqAnswerData;

                    /**
                     * Creates a plain object from a FaqAnswerData message. Also converts values to other types if specified.
                     * @param message FaqAnswerData
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.contactcenterinsights.v1.FaqAnswerData, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this FaqAnswerData to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a SmartReplyData. */
                interface ISmartReplyData {

                    /** SmartReplyData reply */
                    reply?: (string|null);

                    /** SmartReplyData confidenceScore */
                    confidenceScore?: (number|null);

                    /** SmartReplyData metadata */
                    metadata?: ({ [k: string]: string }|null);

                    /** SmartReplyData queryRecord */
                    queryRecord?: (string|null);
                }

                /** Represents a SmartReplyData. */
                class SmartReplyData implements ISmartReplyData {

                    /**
                     * Constructs a new SmartReplyData.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.contactcenterinsights.v1.ISmartReplyData);

                    /** SmartReplyData reply. */
                    public reply: string;

                    /** SmartReplyData confidenceScore. */
                    public confidenceScore: number;

                    /** SmartReplyData metadata. */
                    public metadata: { [k: string]: string };

                    /** SmartReplyData queryRecord. */
                    public queryRecord: string;

                    /**
                     * Creates a new SmartReplyData instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SmartReplyData instance
                     */
                    public static create(properties?: google.cloud.contactcenterinsights.v1.ISmartReplyData): google.cloud.contactcenterinsights.v1.SmartReplyData;

                    /**
                     * Encodes the specified SmartReplyData message. Does not implicitly {@link google.cloud.contactcenterinsights.v1.SmartReplyData.verify|verify} messages.
                     * @param message SmartReplyData message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.contactcenterinsights.v1.ISmartReplyData, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SmartReplyData message, length delimited. Does not implicitly {@link google.cloud.contactcenterinsights.v1.SmartReplyData.verify|verify} messages.
                     * @param message SmartReplyData message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.contactcenterinsights.v1.ISmartReplyData, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SmartReplyData message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SmartReplyData
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.contactcenterinsights.v1.SmartReplyData;

                    /**
                     * Decodes a SmartReplyData message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SmartReplyData
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.contactcenterinsights.v1.SmartReplyData;

                    /**
                     * Verifies a SmartReplyData message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SmartReplyData message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SmartReplyData
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.contactcenterinsights.v1.SmartReplyData;

                    /**
                     * Creates a plain object from a SmartReplyData message. Also converts values to other types if specified.
                     * @param message SmartReplyData
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.contactcenterinsights.v1.SmartReplyData, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SmartReplyData to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a SmartComposeSuggestionData. */
                interface ISmartComposeSuggestionData {

                    /** SmartComposeSuggestionData suggestion */
                    suggestion?: (string|null);

                    /** SmartComposeSuggestionData confidenceScore */
                    confidenceScore?: (number|null);

                    /** SmartComposeSuggestionData metadata */
                    metadata?: ({ [k: string]: string }|null);

                    /** SmartComposeSuggestionData queryRecord */
                    queryRecord?: (string|null);
                }

                /** Represents a SmartComposeSuggestionData. */
                class SmartComposeSuggestionData implements ISmartComposeSuggestionData {

                    /**
                     * Constructs a new SmartComposeSuggestionData.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.contactcenterinsights.v1.ISmartComposeSuggestionData);

                    /** SmartComposeSuggestionData suggestion. */
                    public suggestion: string;

                    /** SmartComposeSuggestionData confidenceScore. */
                    public confidenceScore: number;

                    /** SmartComposeSuggestionData metadata. */
                    public metadata: { [k: string]: string };

                    /** SmartComposeSuggestionData queryRecord. */
                    public queryRecord: string;

                    /**
                     * Creates a new SmartComposeSuggestionData instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SmartComposeSuggestionData instance
                     */
                    public static create(properties?: google.cloud.contactcenterinsights.v1.ISmartComposeSuggestionData): google.cloud.contactcenterinsights.v1.SmartComposeSuggestionData;

                    /**
                     * Encodes the specified SmartComposeSuggestionData message. Does not implicitly {@link google.cloud.contactcenterinsights.v1.SmartComposeSuggestionData.verify|verify} messages.
                     * @param message SmartComposeSuggestionData message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.contactcenterinsights.v1.ISmartComposeSuggestionData, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SmartComposeSuggestionData message, length delimited. Does not implicitly {@link google.cloud.contactcenterinsights.v1.SmartComposeSuggestionData.verify|verify} messages.
                     * @param message SmartComposeSuggestionData message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.contactcenterinsights.v1.ISmartComposeSuggestionData, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SmartComposeSuggestionData message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SmartComposeSuggestionData
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.contactcenterinsights.v1.SmartComposeSuggestionData;

                    /**
                     * Decodes a SmartComposeSuggestionData message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SmartComposeSuggestionData
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.contactcenterinsights.v1.SmartComposeSuggestionData;

                    /**
                     * Verifies a SmartComposeSuggestionData message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SmartComposeSuggestionData message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SmartComposeSuggestionData
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.contactcenterinsights.v1.SmartComposeSuggestionData;

                    /**
                     * Creates a plain object from a SmartComposeSuggestionData message. Also converts values to other types if specified.
                     * @param message SmartComposeSuggestionData
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.contactcenterinsights.v1.SmartComposeSuggestionData, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SmartComposeSuggestionData to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DialogflowInteractionData. */
                interface IDialogflowInteractionData {

                    /** DialogflowInteractionData dialogflowIntentId */
                    dialogflowIntentId?: (string|null);

                    /** DialogflowInteractionData confidence */
                    confidence?: (number|null);
                }

                /** Represents a DialogflowInteractionData. */
                class DialogflowInteractionData implements IDialogflowInteractionData {

                    /**
                     * Constructs a new DialogflowInteractionData.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.contactcenterinsights.v1.IDialogflowInteractionData);

                    /** DialogflowInteractionData dialogflowIntentId. */
                    public dialogflowIntentId: string;

                    /** DialogflowInteractionData confidence. */
                    public confidence: number;

                    /**
                     * Creates a new DialogflowInteractionData instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DialogflowInteractionData instance
                     */
                    public static create(properties?: google.cloud.contactcenterinsights.v1.IDialogflowInteractionData): google.cloud.contactcenterinsights.v1.DialogflowInteractionData;

                    /**
                     * Encodes the specified DialogflowInteractionData message. Does not implicitly {@link google.cloud.contactcenterinsights.v1.DialogflowInteractionData.verify|verify} messages.
                     * @param message DialogflowInteractionData message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.contactcenterinsights.v1.IDialogflowInteractionData, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DialogflowInteractionData message, length delimited. Does not implicitly {@link google.cloud.contactcenterinsights.v1.DialogflowInteractionData.verify|verify} messages.
                     * @param message DialogflowInteractionData message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.contactcenterinsights.v1.IDialogflowInteractionData, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DialogflowInteractionData message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DialogflowInteractionData
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.contactcenterinsights.v1.DialogflowInteractionData;

                    /**
                     * Decodes a DialogflowInteractionData message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DialogflowInteractionData
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.contactcenterinsights.v1.DialogflowInteractionData;

                    /**
                     * Verifies a DialogflowInteractionData message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DialogflowInteractionData message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DialogflowInteractionData
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.contactcenterinsights.v1.DialogflowInteractionData;

                    /**
                     * Creates a plain object from a DialogflowInteractionData message. Also converts values to other types if specified.
                     * @param message DialogflowInteractionData
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.contactcenterinsights.v1.DialogflowInteractionData, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DialogflowInteractionData to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ConversationParticipant. */
                interface IConversationParticipant {

                    /** ConversationParticipant dialogflowParticipantName */
                    dialogflowParticipantName?: (string|null);

                    /** ConversationParticipant userId */
                    userId?: (string|null);

                    /** ConversationParticipant dialogflowParticipant */
                    dialogflowParticipant?: (string|null);

                    /** ConversationParticipant obfuscatedExternalUserId */
                    obfuscatedExternalUserId?: (string|null);

                    /** ConversationParticipant role */
                    role?: (google.cloud.contactcenterinsights.v1.ConversationParticipant.Role|keyof typeof google.cloud.contactcenterinsights.v1.ConversationParticipant.Role|null);
                }

                /** Represents a ConversationParticipant. */
                class ConversationParticipant implements IConversationParticipant {

                    /**
                     * Constructs a new ConversationParticipant.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.contactcenterinsights.v1.IConversationParticipant);

                    /** ConversationParticipant dialogflowParticipantName. */
                    public dialogflowParticipantName?: (string|null);

                    /** ConversationParticipant userId. */
                    public userId?: (string|null);

                    /** ConversationParticipant dialogflowParticipant. */
                    public dialogflowParticipant: string;

                    /** ConversationParticipant obfuscatedExternalUserId. */
                    public obfuscatedExternalUserId: string;

                    /** ConversationParticipant role. */
                    public role: (google.cloud.contactcenterinsights.v1.ConversationParticipant.Role|keyof typeof google.cloud.contactcenterinsights.v1.ConversationParticipant.Role);

                    /** ConversationParticipant participant. */
                    public participant?: ("dialogflowParticipantName"|"userId");

                    /**
                     * Creates a new ConversationParticipant instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ConversationParticipant instance
                     */
                    public static create(properties?: google.cloud.contactcenterinsights.v1.IConversationParticipant): google.cloud.contactcenterinsights.v1.ConversationParticipant;

                    /**
                     * Encodes the specified ConversationParticipant message. Does not implicitly {@link google.cloud.contactcenterinsights.v1.ConversationParticipant.verify|verify} messages.
                     * @param message ConversationParticipant message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.contactcenterinsights.v1.IConversationParticipant, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ConversationParticipant message, length delimited. Does not implicitly {@link google.cloud.contactcenterinsights.v1.ConversationParticipant.verify|verify} messages.
                     * @param message ConversationParticipant message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.contactcenterinsights.v1.IConversationParticipant, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ConversationParticipant message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ConversationParticipant
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.contactcenterinsights.v1.ConversationParticipant;

                    /**
                     * Decodes a ConversationParticipant message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ConversationParticipant
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.contactcenterinsights.v1.ConversationParticipant;

                    /**
                     * Verifies a ConversationParticipant message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ConversationParticipant message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ConversationParticipant
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.contactcenterinsights.v1.ConversationParticipant;

                    /**
                     * Creates a plain object from a ConversationParticipant message. Also converts values to other types if specified.
                     * @param message ConversationParticipant
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.contactcenterinsights.v1.ConversationParticipant, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ConversationParticipant to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace ConversationParticipant {

                    /** Role enum. */
                    enum Role {
                        ROLE_UNSPECIFIED = 0,
                        HUMAN_AGENT = 1,
                        AUTOMATED_AGENT = 2,
                        END_USER = 3,
                        ANY_AGENT = 4
                    }
                }
            }
        }
    }

    /** Namespace api. */
    namespace api {

        /** Properties of a Http. */
        interface IHttp {

            /** Http rules */
            rules?: (google.api.IHttpRule[]|null);

            /** Http fullyDecodeReservedExpansion */
            fullyDecodeReservedExpansion?: (boolean|null);
        }

        /** Represents a Http. */
        class Http implements IHttp {

            /**
             * Constructs a new Http.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IHttp);

            /** Http rules. */
            public rules: google.api.IHttpRule[];

            /** Http fullyDecodeReservedExpansion. */
            public fullyDecodeReservedExpansion: boolean;

            /**
             * Creates a new Http instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Http instance
             */
            public static create(properties?: google.api.IHttp): google.api.Http;

            /**
             * Encodes the specified Http message. Does not implicitly {@link google.api.Http.verify|verify} messages.
             * @param message Http message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IHttp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Http message, length delimited. Does not implicitly {@link google.api.Http.verify|verify} messages.
             * @param message Http message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IHttp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Http message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Http
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.Http;

            /**
             * Decodes a Http message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Http
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.Http;

            /**
             * Verifies a Http message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Http message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Http
             */
            public static fromObject(object: { [k: string]: any }): google.api.Http;

            /**
             * Creates a plain object from a Http message. Also converts values to other types if specified.
             * @param message Http
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.Http, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Http to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a HttpRule. */
        interface IHttpRule {

            /** HttpRule selector */
            selector?: (string|null);

            /** HttpRule get */
            get?: (string|null);

            /** HttpRule put */
            put?: (string|null);

            /** HttpRule post */
            post?: (string|null);

            /** HttpRule delete */
            "delete"?: (string|null);

            /** HttpRule patch */
            patch?: (string|null);

            /** HttpRule custom */
            custom?: (google.api.ICustomHttpPattern|null);

            /** HttpRule body */
            body?: (string|null);

            /** HttpRule responseBody */
            responseBody?: (string|null);

            /** HttpRule additionalBindings */
            additionalBindings?: (google.api.IHttpRule[]|null);
        }

        /** Represents a HttpRule. */
        class HttpRule implements IHttpRule {

            /**
             * Constructs a new HttpRule.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IHttpRule);

            /** HttpRule selector. */
            public selector: string;

            /** HttpRule get. */
            public get?: (string|null);

            /** HttpRule put. */
            public put?: (string|null);

            /** HttpRule post. */
            public post?: (string|null);

            /** HttpRule delete. */
            public delete?: (string|null);

            /** HttpRule patch. */
            public patch?: (string|null);

            /** HttpRule custom. */
            public custom?: (google.api.ICustomHttpPattern|null);

            /** HttpRule body. */
            public body: string;

            /** HttpRule responseBody. */
            public responseBody: string;

            /** HttpRule additionalBindings. */
            public additionalBindings: google.api.IHttpRule[];

            /** HttpRule pattern. */
            public pattern?: ("get"|"put"|"post"|"delete"|"patch"|"custom");

            /**
             * Creates a new HttpRule instance using the specified properties.
             * @param [properties] Properties to set
             * @returns HttpRule instance
             */
            public static create(properties?: google.api.IHttpRule): google.api.HttpRule;

            /**
             * Encodes the specified HttpRule message. Does not implicitly {@link google.api.HttpRule.verify|verify} messages.
             * @param message HttpRule message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IHttpRule, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified HttpRule message, length delimited. Does not implicitly {@link google.api.HttpRule.verify|verify} messages.
             * @param message HttpRule message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IHttpRule, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a HttpRule message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns HttpRule
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.HttpRule;

            /**
             * Decodes a HttpRule message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns HttpRule
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.HttpRule;

            /**
             * Verifies a HttpRule message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a HttpRule message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns HttpRule
             */
            public static fromObject(object: { [k: string]: any }): google.api.HttpRule;

            /**
             * Creates a plain object from a HttpRule message. Also converts values to other types if specified.
             * @param message HttpRule
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.HttpRule, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this HttpRule to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a CustomHttpPattern. */
        interface ICustomHttpPattern {

            /** CustomHttpPattern kind */
            kind?: (string|null);

            /** CustomHttpPattern path */
            path?: (string|null);
        }

        /** Represents a CustomHttpPattern. */
        class CustomHttpPattern implements ICustomHttpPattern {

            /**
             * Constructs a new CustomHttpPattern.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.ICustomHttpPattern);

            /** CustomHttpPattern kind. */
            public kind: string;

            /** CustomHttpPattern path. */
            public path: string;

            /**
             * Creates a new CustomHttpPattern instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CustomHttpPattern instance
             */
            public static create(properties?: google.api.ICustomHttpPattern): google.api.CustomHttpPattern;

            /**
             * Encodes the specified CustomHttpPattern message. Does not implicitly {@link google.api.CustomHttpPattern.verify|verify} messages.
             * @param message CustomHttpPattern message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.ICustomHttpPattern, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CustomHttpPattern message, length delimited. Does not implicitly {@link google.api.CustomHttpPattern.verify|verify} messages.
             * @param message CustomHttpPattern message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.ICustomHttpPattern, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CustomHttpPattern message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CustomHttpPattern
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.CustomHttpPattern;

            /**
             * Decodes a CustomHttpPattern message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CustomHttpPattern
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.CustomHttpPattern;

            /**
             * Verifies a CustomHttpPattern message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CustomHttpPattern message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CustomHttpPattern
             */
            public static fromObject(object: { [k: string]: any }): google.api.CustomHttpPattern;

            /**
             * Creates a plain object from a CustomHttpPattern message. Also converts values to other types if specified.
             * @param message CustomHttpPattern
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.CustomHttpPattern, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CustomHttpPattern to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** FieldBehavior enum. */
        enum FieldBehavior {
            FIELD_BEHAVIOR_UNSPECIFIED = 0,
            OPTIONAL = 1,
            REQUIRED = 2,
            OUTPUT_ONLY = 3,
            INPUT_ONLY = 4,
            IMMUTABLE = 5,
            UNORDERED_LIST = 6,
            NON_EMPTY_DEFAULT = 7
        }

        /** Properties of a ResourceDescriptor. */
        interface IResourceDescriptor {

            /** ResourceDescriptor type */
            type?: (string|null);

            /** ResourceDescriptor pattern */
            pattern?: (string[]|null);

            /** ResourceDescriptor nameField */
            nameField?: (string|null);

            /** ResourceDescriptor history */
            history?: (google.api.ResourceDescriptor.History|keyof typeof google.api.ResourceDescriptor.History|null);

            /** ResourceDescriptor plural */
            plural?: (string|null);

            /** ResourceDescriptor singular */
            singular?: (string|null);

            /** ResourceDescriptor style */
            style?: (google.api.ResourceDescriptor.Style[]|null);
        }

        /** Represents a ResourceDescriptor. */
        class ResourceDescriptor implements IResourceDescriptor {

            /**
             * Constructs a new ResourceDescriptor.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IResourceDescriptor);

            /** ResourceDescriptor type. */
            public type: string;

            /** ResourceDescriptor pattern. */
            public pattern: string[];

            /** ResourceDescriptor nameField. */
            public nameField: string;

            /** ResourceDescriptor history. */
            public history: (google.api.ResourceDescriptor.History|keyof typeof google.api.ResourceDescriptor.History);

            /** ResourceDescriptor plural. */
            public plural: string;

            /** ResourceDescriptor singular. */
            public singular: string;

            /** ResourceDescriptor style. */
            public style: google.api.ResourceDescriptor.Style[];

            /**
             * Creates a new ResourceDescriptor instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ResourceDescriptor instance
             */
            public static create(properties?: google.api.IResourceDescriptor): google.api.ResourceDescriptor;

            /**
             * Encodes the specified ResourceDescriptor message. Does not implicitly {@link google.api.ResourceDescriptor.verify|verify} messages.
             * @param message ResourceDescriptor message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IResourceDescriptor, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ResourceDescriptor message, length delimited. Does not implicitly {@link google.api.ResourceDescriptor.verify|verify} messages.
             * @param message ResourceDescriptor message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IResourceDescriptor, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ResourceDescriptor message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ResourceDescriptor
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.ResourceDescriptor;

            /**
             * Decodes a ResourceDescriptor message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ResourceDescriptor
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.ResourceDescriptor;

            /**
             * Verifies a ResourceDescriptor message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ResourceDescriptor message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ResourceDescriptor
             */
            public static fromObject(object: { [k: string]: any }): google.api.ResourceDescriptor;

            /**
             * Creates a plain object from a ResourceDescriptor message. Also converts values to other types if specified.
             * @param message ResourceDescriptor
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.ResourceDescriptor, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ResourceDescriptor to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace ResourceDescriptor {

            /** History enum. */
            enum History {
                HISTORY_UNSPECIFIED = 0,
                ORIGINALLY_SINGLE_PATTERN = 1,
                FUTURE_MULTI_PATTERN = 2
            }

            /** Style enum. */
            enum Style {
                STYLE_UNSPECIFIED = 0,
                DECLARATIVE_FRIENDLY = 1
            }
        }

        /** Properties of a ResourceReference. */
        interface IResourceReference {

            /** ResourceReference type */
            type?: (string|null);

            /** ResourceReference childType */
            childType?: (string|null);
        }

        /** Represents a ResourceReference. */
        class ResourceReference implements IResourceReference {

            /**
             * Constructs a new ResourceReference.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IResourceReference);

            /** ResourceReference type. */
            public type: string;

            /** ResourceReference childType. */
            public childType: string;

            /**
             * Creates a new ResourceReference instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ResourceReference instance
             */
            public static create(properties?: google.api.IResourceReference): google.api.ResourceReference;

            /**
             * Encodes the specified ResourceReference message. Does not implicitly {@link google.api.ResourceReference.verify|verify} messages.
             * @param message ResourceReference message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IResourceReference, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ResourceReference message, length delimited. Does not implicitly {@link google.api.ResourceReference.verify|verify} messages.
             * @param message ResourceReference message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IResourceReference, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ResourceReference message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ResourceReference
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.ResourceReference;

            /**
             * Decodes a ResourceReference message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ResourceReference
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.ResourceReference;

            /**
             * Verifies a ResourceReference message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ResourceReference message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ResourceReference
             */
            public static fromObject(object: { [k: string]: any }): google.api.ResourceReference;

            /**
             * Creates a plain object from a ResourceReference message. Also converts values to other types if specified.
             * @param message ResourceReference
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.ResourceReference, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ResourceReference to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Namespace protobuf. */
    namespace protobuf {

        /** Properties of a FileDescriptorSet. */
        interface IFileDescriptorSet {

            /** FileDescriptorSet file */
            file?: (google.protobuf.IFileDescriptorProto[]|null);
        }

        /** Represents a FileDescriptorSet. */
        class FileDescriptorSet implements IFileDescriptorSet {

            /**
             * Constructs a new FileDescriptorSet.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileDescriptorSet);

            /** FileDescriptorSet file. */
            public file: google.protobuf.IFileDescriptorProto[];

            /**
             * Creates a new FileDescriptorSet instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileDescriptorSet instance
             */
            public static create(properties?: google.protobuf.IFileDescriptorSet): google.protobuf.FileDescriptorSet;

            /**
             * Encodes the specified FileDescriptorSet message. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
             * @param message FileDescriptorSet message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFileDescriptorSet, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileDescriptorSet message, length delimited. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
             * @param message FileDescriptorSet message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFileDescriptorSet, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileDescriptorSet message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileDescriptorSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileDescriptorSet;

            /**
             * Decodes a FileDescriptorSet message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileDescriptorSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FileDescriptorSet;

            /**
             * Verifies a FileDescriptorSet message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileDescriptorSet message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileDescriptorSet
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileDescriptorSet;

            /**
             * Creates a plain object from a FileDescriptorSet message. Also converts values to other types if specified.
             * @param message FileDescriptorSet
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FileDescriptorSet, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileDescriptorSet to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FileDescriptorProto. */
        interface IFileDescriptorProto {

            /** FileDescriptorProto name */
            name?: (string|null);

            /** FileDescriptorProto package */
            "package"?: (string|null);

            /** FileDescriptorProto dependency */
            dependency?: (string[]|null);

            /** FileDescriptorProto publicDependency */
            publicDependency?: (number[]|null);

            /** FileDescriptorProto weakDependency */
            weakDependency?: (number[]|null);

            /** FileDescriptorProto messageType */
            messageType?: (google.protobuf.IDescriptorProto[]|null);

            /** FileDescriptorProto enumType */
            enumType?: (google.protobuf.IEnumDescriptorProto[]|null);

            /** FileDescriptorProto service */
            service?: (google.protobuf.IServiceDescriptorProto[]|null);

            /** FileDescriptorProto extension */
            extension?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** FileDescriptorProto options */
            options?: (google.protobuf.IFileOptions|null);

            /** FileDescriptorProto sourceCodeInfo */
            sourceCodeInfo?: (google.protobuf.ISourceCodeInfo|null);

            /** FileDescriptorProto syntax */
            syntax?: (string|null);
        }

        /** Represents a FileDescriptorProto. */
        class FileDescriptorProto implements IFileDescriptorProto {

            /**
             * Constructs a new FileDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileDescriptorProto);

            /** FileDescriptorProto name. */
            public name: string;

            /** FileDescriptorProto package. */
            public package: string;

            /** FileDescriptorProto dependency. */
            public dependency: string[];

            /** FileDescriptorProto publicDependency. */
            public publicDependency: number[];

            /** FileDescriptorProto weakDependency. */
            public weakDependency: number[];

            /** FileDescriptorProto messageType. */
            public messageType: google.protobuf.IDescriptorProto[];

            /** FileDescriptorProto enumType. */
            public enumType: google.protobuf.IEnumDescriptorProto[];

            /** FileDescriptorProto service. */
            public service: google.protobuf.IServiceDescriptorProto[];

            /** FileDescriptorProto extension. */
            public extension: google.protobuf.IFieldDescriptorProto[];

            /** FileDescriptorProto options. */
            public options?: (google.protobuf.IFileOptions|null);

            /** FileDescriptorProto sourceCodeInfo. */
            public sourceCodeInfo?: (google.protobuf.ISourceCodeInfo|null);

            /** FileDescriptorProto syntax. */
            public syntax: string;

            /**
             * Creates a new FileDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IFileDescriptorProto): google.protobuf.FileDescriptorProto;

            /**
             * Encodes the specified FileDescriptorProto message. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
             * @param message FileDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFileDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
             * @param message FileDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFileDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileDescriptorProto;

            /**
             * Decodes a FileDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FileDescriptorProto;

            /**
             * Verifies a FileDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileDescriptorProto;

            /**
             * Creates a plain object from a FileDescriptorProto message. Also converts values to other types if specified.
             * @param message FileDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FileDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a DescriptorProto. */
        interface IDescriptorProto {

            /** DescriptorProto name */
            name?: (string|null);

            /** DescriptorProto field */
            field?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** DescriptorProto extension */
            extension?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** DescriptorProto nestedType */
            nestedType?: (google.protobuf.IDescriptorProto[]|null);

            /** DescriptorProto enumType */
            enumType?: (google.protobuf.IEnumDescriptorProto[]|null);

            /** DescriptorProto extensionRange */
            extensionRange?: (google.protobuf.DescriptorProto.IExtensionRange[]|null);

            /** DescriptorProto oneofDecl */
            oneofDecl?: (google.protobuf.IOneofDescriptorProto[]|null);

            /** DescriptorProto options */
            options?: (google.protobuf.IMessageOptions|null);

            /** DescriptorProto reservedRange */
            reservedRange?: (google.protobuf.DescriptorProto.IReservedRange[]|null);

            /** DescriptorProto reservedName */
            reservedName?: (string[]|null);
        }

        /** Represents a DescriptorProto. */
        class DescriptorProto implements IDescriptorProto {

            /**
             * Constructs a new DescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IDescriptorProto);

            /** DescriptorProto name. */
            public name: string;

            /** DescriptorProto field. */
            public field: google.protobuf.IFieldDescriptorProto[];

            /** DescriptorProto extension. */
            public extension: google.protobuf.IFieldDescriptorProto[];

            /** DescriptorProto nestedType. */
            public nestedType: google.protobuf.IDescriptorProto[];

            /** DescriptorProto enumType. */
            public enumType: google.protobuf.IEnumDescriptorProto[];

            /** DescriptorProto extensionRange. */
            public extensionRange: google.protobuf.DescriptorProto.IExtensionRange[];

            /** DescriptorProto oneofDecl. */
            public oneofDecl: google.protobuf.IOneofDescriptorProto[];

            /** DescriptorProto options. */
            public options?: (google.protobuf.IMessageOptions|null);

            /** DescriptorProto reservedRange. */
            public reservedRange: google.protobuf.DescriptorProto.IReservedRange[];

            /** DescriptorProto reservedName. */
            public reservedName: string[];

            /**
             * Creates a new DescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DescriptorProto instance
             */
            public static create(properties?: google.protobuf.IDescriptorProto): google.protobuf.DescriptorProto;

            /**
             * Encodes the specified DescriptorProto message. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
             * @param message DescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
             * @param message DescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto;

            /**
             * Decodes a DescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DescriptorProto;

            /**
             * Verifies a DescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto;

            /**
             * Creates a plain object from a DescriptorProto message. Also converts values to other types if specified.
             * @param message DescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.DescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace DescriptorProto {

            /** Properties of an ExtensionRange. */
            interface IExtensionRange {

                /** ExtensionRange start */
                start?: (number|null);

                /** ExtensionRange end */
                end?: (number|null);

                /** ExtensionRange options */
                options?: (google.protobuf.IExtensionRangeOptions|null);
            }

            /** Represents an ExtensionRange. */
            class ExtensionRange implements IExtensionRange {

                /**
                 * Constructs a new ExtensionRange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.DescriptorProto.IExtensionRange);

                /** ExtensionRange start. */
                public start: number;

                /** ExtensionRange end. */
                public end: number;

                /** ExtensionRange options. */
                public options?: (google.protobuf.IExtensionRangeOptions|null);

                /**
                 * Creates a new ExtensionRange instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ExtensionRange instance
                 */
                public static create(properties?: google.protobuf.DescriptorProto.IExtensionRange): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Encodes the specified ExtensionRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
                 * @param message ExtensionRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.DescriptorProto.IExtensionRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ExtensionRange message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
                 * @param message ExtensionRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.DescriptorProto.IExtensionRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an ExtensionRange message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ExtensionRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Decodes an ExtensionRange message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ExtensionRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Verifies an ExtensionRange message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an ExtensionRange message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ExtensionRange
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Creates a plain object from an ExtensionRange message. Also converts values to other types if specified.
                 * @param message ExtensionRange
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.DescriptorProto.ExtensionRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ExtensionRange to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a ReservedRange. */
            interface IReservedRange {

                /** ReservedRange start */
                start?: (number|null);

                /** ReservedRange end */
                end?: (number|null);
            }

            /** Represents a ReservedRange. */
            class ReservedRange implements IReservedRange {

                /**
                 * Constructs a new ReservedRange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.DescriptorProto.IReservedRange);

                /** ReservedRange start. */
                public start: number;

                /** ReservedRange end. */
                public end: number;

                /**
                 * Creates a new ReservedRange instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ReservedRange instance
                 */
                public static create(properties?: google.protobuf.DescriptorProto.IReservedRange): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Encodes the specified ReservedRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ReservedRange.verify|verify} messages.
                 * @param message ReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.DescriptorProto.IReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ReservedRange message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.ReservedRange.verify|verify} messages.
                 * @param message ReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.DescriptorProto.IReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ReservedRange message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Decodes a ReservedRange message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Verifies a ReservedRange message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ReservedRange message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ReservedRange
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Creates a plain object from a ReservedRange message. Also converts values to other types if specified.
                 * @param message ReservedRange
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.DescriptorProto.ReservedRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ReservedRange to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of an ExtensionRangeOptions. */
        interface IExtensionRangeOptions {

            /** ExtensionRangeOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an ExtensionRangeOptions. */
        class ExtensionRangeOptions implements IExtensionRangeOptions {

            /**
             * Constructs a new ExtensionRangeOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IExtensionRangeOptions);

            /** ExtensionRangeOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new ExtensionRangeOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ExtensionRangeOptions instance
             */
            public static create(properties?: google.protobuf.IExtensionRangeOptions): google.protobuf.ExtensionRangeOptions;

            /**
             * Encodes the specified ExtensionRangeOptions message. Does not implicitly {@link google.protobuf.ExtensionRangeOptions.verify|verify} messages.
             * @param message ExtensionRangeOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IExtensionRangeOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ExtensionRangeOptions message, length delimited. Does not implicitly {@link google.protobuf.ExtensionRangeOptions.verify|verify} messages.
             * @param message ExtensionRangeOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IExtensionRangeOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an ExtensionRangeOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ExtensionRangeOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ExtensionRangeOptions;

            /**
             * Decodes an ExtensionRangeOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ExtensionRangeOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ExtensionRangeOptions;

            /**
             * Verifies an ExtensionRangeOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an ExtensionRangeOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ExtensionRangeOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.ExtensionRangeOptions;

            /**
             * Creates a plain object from an ExtensionRangeOptions message. Also converts values to other types if specified.
             * @param message ExtensionRangeOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.ExtensionRangeOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ExtensionRangeOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FieldDescriptorProto. */
        interface IFieldDescriptorProto {

            /** FieldDescriptorProto name */
            name?: (string|null);

            /** FieldDescriptorProto number */
            number?: (number|null);

            /** FieldDescriptorProto label */
            label?: (google.protobuf.FieldDescriptorProto.Label|keyof typeof google.protobuf.FieldDescriptorProto.Label|null);

            /** FieldDescriptorProto type */
            type?: (google.protobuf.FieldDescriptorProto.Type|keyof typeof google.protobuf.FieldDescriptorProto.Type|null);

            /** FieldDescriptorProto typeName */
            typeName?: (string|null);

            /** FieldDescriptorProto extendee */
            extendee?: (string|null);

            /** FieldDescriptorProto defaultValue */
            defaultValue?: (string|null);

            /** FieldDescriptorProto oneofIndex */
            oneofIndex?: (number|null);

            /** FieldDescriptorProto jsonName */
            jsonName?: (string|null);

            /** FieldDescriptorProto options */
            options?: (google.protobuf.IFieldOptions|null);

            /** FieldDescriptorProto proto3Optional */
            proto3Optional?: (boolean|null);
        }

        /** Represents a FieldDescriptorProto. */
        class FieldDescriptorProto implements IFieldDescriptorProto {

            /**
             * Constructs a new FieldDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFieldDescriptorProto);

            /** FieldDescriptorProto name. */
            public name: string;

            /** FieldDescriptorProto number. */
            public number: number;

            /** FieldDescriptorProto label. */
            public label: (google.protobuf.FieldDescriptorProto.Label|keyof typeof google.protobuf.FieldDescriptorProto.Label);

            /** FieldDescriptorProto type. */
            public type: (google.protobuf.FieldDescriptorProto.Type|keyof typeof google.protobuf.FieldDescriptorProto.Type);

            /** FieldDescriptorProto typeName. */
            public typeName: string;

            /** FieldDescriptorProto extendee. */
            public extendee: string;

            /** FieldDescriptorProto defaultValue. */
            public defaultValue: string;

            /** FieldDescriptorProto oneofIndex. */
            public oneofIndex: number;

            /** FieldDescriptorProto jsonName. */
            public jsonName: string;

            /** FieldDescriptorProto options. */
            public options?: (google.protobuf.IFieldOptions|null);

            /** FieldDescriptorProto proto3Optional. */
            public proto3Optional: boolean;

            /**
             * Creates a new FieldDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FieldDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IFieldDescriptorProto): google.protobuf.FieldDescriptorProto;

            /**
             * Encodes the specified FieldDescriptorProto message. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
             * @param message FieldDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFieldDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FieldDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
             * @param message FieldDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFieldDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FieldDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FieldDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldDescriptorProto;

            /**
             * Decodes a FieldDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FieldDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FieldDescriptorProto;

            /**
             * Verifies a FieldDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FieldDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FieldDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FieldDescriptorProto;

            /**
             * Creates a plain object from a FieldDescriptorProto message. Also converts values to other types if specified.
             * @param message FieldDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FieldDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FieldDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace FieldDescriptorProto {

            /** Type enum. */
            enum Type {
                TYPE_DOUBLE = 1,
                TYPE_FLOAT = 2,
                TYPE_INT64 = 3,
                TYPE_UINT64 = 4,
                TYPE_INT32 = 5,
                TYPE_FIXED64 = 6,
                TYPE_FIXED32 = 7,
                TYPE_BOOL = 8,
                TYPE_STRING = 9,
                TYPE_GROUP = 10,
                TYPE_MESSAGE = 11,
                TYPE_BYTES = 12,
                TYPE_UINT32 = 13,
                TYPE_ENUM = 14,
                TYPE_SFIXED32 = 15,
                TYPE_SFIXED64 = 16,
                TYPE_SINT32 = 17,
                TYPE_SINT64 = 18
            }

            /** Label enum. */
            enum Label {
                LABEL_OPTIONAL = 1,
                LABEL_REQUIRED = 2,
                LABEL_REPEATED = 3
            }
        }

        /** Properties of an OneofDescriptorProto. */
        interface IOneofDescriptorProto {

            /** OneofDescriptorProto name */
            name?: (string|null);

            /** OneofDescriptorProto options */
            options?: (google.protobuf.IOneofOptions|null);
        }

        /** Represents an OneofDescriptorProto. */
        class OneofDescriptorProto implements IOneofDescriptorProto {

            /**
             * Constructs a new OneofDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IOneofDescriptorProto);

            /** OneofDescriptorProto name. */
            public name: string;

            /** OneofDescriptorProto options. */
            public options?: (google.protobuf.IOneofOptions|null);

            /**
             * Creates a new OneofDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OneofDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IOneofDescriptorProto): google.protobuf.OneofDescriptorProto;

            /**
             * Encodes the specified OneofDescriptorProto message. Does not implicitly {@link google.protobuf.OneofDescriptorProto.verify|verify} messages.
             * @param message OneofDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IOneofDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OneofDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.OneofDescriptorProto.verify|verify} messages.
             * @param message OneofDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IOneofDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OneofDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OneofDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.OneofDescriptorProto;

            /**
             * Decodes an OneofDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OneofDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.OneofDescriptorProto;

            /**
             * Verifies an OneofDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OneofDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OneofDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.OneofDescriptorProto;

            /**
             * Creates a plain object from an OneofDescriptorProto message. Also converts values to other types if specified.
             * @param message OneofDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.OneofDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OneofDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an EnumDescriptorProto. */
        interface IEnumDescriptorProto {

            /** EnumDescriptorProto name */
            name?: (string|null);

            /** EnumDescriptorProto value */
            value?: (google.protobuf.IEnumValueDescriptorProto[]|null);

            /** EnumDescriptorProto options */
            options?: (google.protobuf.IEnumOptions|null);

            /** EnumDescriptorProto reservedRange */
            reservedRange?: (google.protobuf.EnumDescriptorProto.IEnumReservedRange[]|null);

            /** EnumDescriptorProto reservedName */
            reservedName?: (string[]|null);
        }

        /** Represents an EnumDescriptorProto. */
        class EnumDescriptorProto implements IEnumDescriptorProto {

            /**
             * Constructs a new EnumDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumDescriptorProto);

            /** EnumDescriptorProto name. */
            public name: string;

            /** EnumDescriptorProto value. */
            public value: google.protobuf.IEnumValueDescriptorProto[];

            /** EnumDescriptorProto options. */
            public options?: (google.protobuf.IEnumOptions|null);

            /** EnumDescriptorProto reservedRange. */
            public reservedRange: google.protobuf.EnumDescriptorProto.IEnumReservedRange[];

            /** EnumDescriptorProto reservedName. */
            public reservedName: string[];

            /**
             * Creates a new EnumDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IEnumDescriptorProto): google.protobuf.EnumDescriptorProto;

            /**
             * Encodes the specified EnumDescriptorProto message. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
             * @param message EnumDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
             * @param message EnumDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumDescriptorProto;

            /**
             * Decodes an EnumDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumDescriptorProto;

            /**
             * Verifies an EnumDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumDescriptorProto;

            /**
             * Creates a plain object from an EnumDescriptorProto message. Also converts values to other types if specified.
             * @param message EnumDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace EnumDescriptorProto {

            /** Properties of an EnumReservedRange. */
            interface IEnumReservedRange {

                /** EnumReservedRange start */
                start?: (number|null);

                /** EnumReservedRange end */
                end?: (number|null);
            }

            /** Represents an EnumReservedRange. */
            class EnumReservedRange implements IEnumReservedRange {

                /**
                 * Constructs a new EnumReservedRange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.EnumDescriptorProto.IEnumReservedRange);

                /** EnumReservedRange start. */
                public start: number;

                /** EnumReservedRange end. */
                public end: number;

                /**
                 * Creates a new EnumReservedRange instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns EnumReservedRange instance
                 */
                public static create(properties?: google.protobuf.EnumDescriptorProto.IEnumReservedRange): google.protobuf.EnumDescriptorProto.EnumReservedRange;

                /**
                 * Encodes the specified EnumReservedRange message. Does not implicitly {@link google.protobuf.EnumDescriptorProto.EnumReservedRange.verify|verify} messages.
                 * @param message EnumReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.EnumDescriptorProto.IEnumReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified EnumReservedRange message, length delimited. Does not implicitly {@link google.protobuf.EnumDescriptorProto.EnumReservedRange.verify|verify} messages.
                 * @param message EnumReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.EnumDescriptorProto.IEnumReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an EnumReservedRange message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns EnumReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumDescriptorProto.EnumReservedRange;

                /**
                 * Decodes an EnumReservedRange message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns EnumReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumDescriptorProto.EnumReservedRange;

                /**
                 * Verifies an EnumReservedRange message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an EnumReservedRange message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns EnumReservedRange
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.EnumDescriptorProto.EnumReservedRange;

                /**
                 * Creates a plain object from an EnumReservedRange message. Also converts values to other types if specified.
                 * @param message EnumReservedRange
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.EnumDescriptorProto.EnumReservedRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this EnumReservedRange to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of an EnumValueDescriptorProto. */
        interface IEnumValueDescriptorProto {

            /** EnumValueDescriptorProto name */
            name?: (string|null);

            /** EnumValueDescriptorProto number */
            number?: (number|null);

            /** EnumValueDescriptorProto options */
            options?: (google.protobuf.IEnumValueOptions|null);
        }

        /** Represents an EnumValueDescriptorProto. */
        class EnumValueDescriptorProto implements IEnumValueDescriptorProto {

            /**
             * Constructs a new EnumValueDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumValueDescriptorProto);

            /** EnumValueDescriptorProto name. */
            public name: string;

            /** EnumValueDescriptorProto number. */
            public number: number;

            /** EnumValueDescriptorProto options. */
            public options?: (google.protobuf.IEnumValueOptions|null);

            /**
             * Creates a new EnumValueDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumValueDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IEnumValueDescriptorProto): google.protobuf.EnumValueDescriptorProto;

            /**
             * Encodes the specified EnumValueDescriptorProto message. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
             * @param message EnumValueDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumValueDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumValueDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
             * @param message EnumValueDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumValueDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumValueDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumValueDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumValueDescriptorProto;

            /**
             * Decodes an EnumValueDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumValueDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumValueDescriptorProto;

            /**
             * Verifies an EnumValueDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumValueDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumValueDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumValueDescriptorProto;

            /**
             * Creates a plain object from an EnumValueDescriptorProto message. Also converts values to other types if specified.
             * @param message EnumValueDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumValueDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumValueDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ServiceDescriptorProto. */
        interface IServiceDescriptorProto {

            /** ServiceDescriptorProto name */
            name?: (string|null);

            /** ServiceDescriptorProto method */
            method?: (google.protobuf.IMethodDescriptorProto[]|null);

            /** ServiceDescriptorProto options */
            options?: (google.protobuf.IServiceOptions|null);
        }

        /** Represents a ServiceDescriptorProto. */
        class ServiceDescriptorProto implements IServiceDescriptorProto {

            /**
             * Constructs a new ServiceDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IServiceDescriptorProto);

            /** ServiceDescriptorProto name. */
            public name: string;

            /** ServiceDescriptorProto method. */
            public method: google.protobuf.IMethodDescriptorProto[];

            /** ServiceDescriptorProto options. */
            public options?: (google.protobuf.IServiceOptions|null);

            /**
             * Creates a new ServiceDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ServiceDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IServiceDescriptorProto): google.protobuf.ServiceDescriptorProto;

            /**
             * Encodes the specified ServiceDescriptorProto message. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
             * @param message ServiceDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IServiceDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ServiceDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
             * @param message ServiceDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IServiceDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ServiceDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ServiceDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ServiceDescriptorProto;

            /**
             * Decodes a ServiceDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ServiceDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ServiceDescriptorProto;

            /**
             * Verifies a ServiceDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ServiceDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ServiceDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.ServiceDescriptorProto;

            /**
             * Creates a plain object from a ServiceDescriptorProto message. Also converts values to other types if specified.
             * @param message ServiceDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.ServiceDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ServiceDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MethodDescriptorProto. */
        interface IMethodDescriptorProto {

            /** MethodDescriptorProto name */
            name?: (string|null);

            /** MethodDescriptorProto inputType */
            inputType?: (string|null);

            /** MethodDescriptorProto outputType */
            outputType?: (string|null);

            /** MethodDescriptorProto options */
            options?: (google.protobuf.IMethodOptions|null);

            /** MethodDescriptorProto clientStreaming */
            clientStreaming?: (boolean|null);

            /** MethodDescriptorProto serverStreaming */
            serverStreaming?: (boolean|null);
        }

        /** Represents a MethodDescriptorProto. */
        class MethodDescriptorProto implements IMethodDescriptorProto {

            /**
             * Constructs a new MethodDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMethodDescriptorProto);

            /** MethodDescriptorProto name. */
            public name: string;

            /** MethodDescriptorProto inputType. */
            public inputType: string;

            /** MethodDescriptorProto outputType. */
            public outputType: string;

            /** MethodDescriptorProto options. */
            public options?: (google.protobuf.IMethodOptions|null);

            /** MethodDescriptorProto clientStreaming. */
            public clientStreaming: boolean;

            /** MethodDescriptorProto serverStreaming. */
            public serverStreaming: boolean;

            /**
             * Creates a new MethodDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MethodDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IMethodDescriptorProto): google.protobuf.MethodDescriptorProto;

            /**
             * Encodes the specified MethodDescriptorProto message. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
             * @param message MethodDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMethodDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MethodDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
             * @param message MethodDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IMethodDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MethodDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MethodDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MethodDescriptorProto;

            /**
             * Decodes a MethodDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MethodDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.MethodDescriptorProto;

            /**
             * Verifies a MethodDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MethodDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MethodDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.MethodDescriptorProto;

            /**
             * Creates a plain object from a MethodDescriptorProto message. Also converts values to other types if specified.
             * @param message MethodDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.MethodDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MethodDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FileOptions. */
        interface IFileOptions {

            /** FileOptions javaPackage */
            javaPackage?: (string|null);

            /** FileOptions javaOuterClassname */
            javaOuterClassname?: (string|null);

            /** FileOptions javaMultipleFiles */
            javaMultipleFiles?: (boolean|null);

            /** FileOptions javaGenerateEqualsAndHash */
            javaGenerateEqualsAndHash?: (boolean|null);

            /** FileOptions javaStringCheckUtf8 */
            javaStringCheckUtf8?: (boolean|null);

            /** FileOptions optimizeFor */
            optimizeFor?: (google.protobuf.FileOptions.OptimizeMode|keyof typeof google.protobuf.FileOptions.OptimizeMode|null);

            /** FileOptions goPackage */
            goPackage?: (string|null);

            /** FileOptions ccGenericServices */
            ccGenericServices?: (boolean|null);

            /** FileOptions javaGenericServices */
            javaGenericServices?: (boolean|null);

            /** FileOptions pyGenericServices */
            pyGenericServices?: (boolean|null);

            /** FileOptions phpGenericServices */
            phpGenericServices?: (boolean|null);

            /** FileOptions deprecated */
            deprecated?: (boolean|null);

            /** FileOptions ccEnableArenas */
            ccEnableArenas?: (boolean|null);

            /** FileOptions objcClassPrefix */
            objcClassPrefix?: (string|null);

            /** FileOptions csharpNamespace */
            csharpNamespace?: (string|null);

            /** FileOptions swiftPrefix */
            swiftPrefix?: (string|null);

            /** FileOptions phpClassPrefix */
            phpClassPrefix?: (string|null);

            /** FileOptions phpNamespace */
            phpNamespace?: (string|null);

            /** FileOptions phpMetadataNamespace */
            phpMetadataNamespace?: (string|null);

            /** FileOptions rubyPackage */
            rubyPackage?: (string|null);

            /** FileOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** FileOptions .google.api.resourceDefinition */
            ".google.api.resourceDefinition"?: (google.api.IResourceDescriptor[]|null);
        }

        /** Represents a FileOptions. */
        class FileOptions implements IFileOptions {

            /**
             * Constructs a new FileOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileOptions);

            /** FileOptions javaPackage. */
            public javaPackage: string;

            /** FileOptions javaOuterClassname. */
            public javaOuterClassname: string;

            /** FileOptions javaMultipleFiles. */
            public javaMultipleFiles: boolean;

            /** FileOptions javaGenerateEqualsAndHash. */
            public javaGenerateEqualsAndHash: boolean;

            /** FileOptions javaStringCheckUtf8. */
            public javaStringCheckUtf8: boolean;

            /** FileOptions optimizeFor. */
            public optimizeFor: (google.protobuf.FileOptions.OptimizeMode|keyof typeof google.protobuf.FileOptions.OptimizeMode);

            /** FileOptions goPackage. */
            public goPackage: string;

            /** FileOptions ccGenericServices. */
            public ccGenericServices: boolean;

            /** FileOptions javaGenericServices. */
            public javaGenericServices: boolean;

            /** FileOptions pyGenericServices. */
            public pyGenericServices: boolean;

            /** FileOptions phpGenericServices. */
            public phpGenericServices: boolean;

            /** FileOptions deprecated. */
            public deprecated: boolean;

            /** FileOptions ccEnableArenas. */
            public ccEnableArenas: boolean;

            /** FileOptions objcClassPrefix. */
            public objcClassPrefix: string;

            /** FileOptions csharpNamespace. */
            public csharpNamespace: string;

            /** FileOptions swiftPrefix. */
            public swiftPrefix: string;

            /** FileOptions phpClassPrefix. */
            public phpClassPrefix: string;

            /** FileOptions phpNamespace. */
            public phpNamespace: string;

            /** FileOptions phpMetadataNamespace. */
            public phpMetadataNamespace: string;

            /** FileOptions rubyPackage. */
            public rubyPackage: string;

            /** FileOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new FileOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileOptions instance
             */
            public static create(properties?: google.protobuf.IFileOptions): google.protobuf.FileOptions;

            /**
             * Encodes the specified FileOptions message. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
             * @param message FileOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFileOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileOptions message, length delimited. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
             * @param message FileOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFileOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileOptions;

            /**
             * Decodes a FileOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FileOptions;

            /**
             * Verifies a FileOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileOptions;

            /**
             * Creates a plain object from a FileOptions message. Also converts values to other types if specified.
             * @param message FileOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FileOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace FileOptions {

            /** OptimizeMode enum. */
            enum OptimizeMode {
                SPEED = 1,
                CODE_SIZE = 2,
                LITE_RUNTIME = 3
            }
        }

        /** Properties of a MessageOptions. */
        interface IMessageOptions {

            /** MessageOptions messageSetWireFormat */
            messageSetWireFormat?: (boolean|null);

            /** MessageOptions noStandardDescriptorAccessor */
            noStandardDescriptorAccessor?: (boolean|null);

            /** MessageOptions deprecated */
            deprecated?: (boolean|null);

            /** MessageOptions mapEntry */
            mapEntry?: (boolean|null);

            /** MessageOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** MessageOptions .google.api.resource */
            ".google.api.resource"?: (google.api.IResourceDescriptor|null);
        }

        /** Represents a MessageOptions. */
        class MessageOptions implements IMessageOptions {

            /**
             * Constructs a new MessageOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMessageOptions);

            /** MessageOptions messageSetWireFormat. */
            public messageSetWireFormat: boolean;

            /** MessageOptions noStandardDescriptorAccessor. */
            public noStandardDescriptorAccessor: boolean;

            /** MessageOptions deprecated. */
            public deprecated: boolean;

            /** MessageOptions mapEntry. */
            public mapEntry: boolean;

            /** MessageOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new MessageOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MessageOptions instance
             */
            public static create(properties?: google.protobuf.IMessageOptions): google.protobuf.MessageOptions;

            /**
             * Encodes the specified MessageOptions message. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
             * @param message MessageOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMessageOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MessageOptions message, length delimited. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
             * @param message MessageOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IMessageOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MessageOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MessageOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MessageOptions;

            /**
             * Decodes a MessageOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MessageOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.MessageOptions;

            /**
             * Verifies a MessageOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MessageOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MessageOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.MessageOptions;

            /**
             * Creates a plain object from a MessageOptions message. Also converts values to other types if specified.
             * @param message MessageOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.MessageOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MessageOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FieldOptions. */
        interface IFieldOptions {

            /** FieldOptions ctype */
            ctype?: (google.protobuf.FieldOptions.CType|keyof typeof google.protobuf.FieldOptions.CType|null);

            /** FieldOptions packed */
            packed?: (boolean|null);

            /** FieldOptions jstype */
            jstype?: (google.protobuf.FieldOptions.JSType|keyof typeof google.protobuf.FieldOptions.JSType|null);

            /** FieldOptions lazy */
            lazy?: (boolean|null);

            /** FieldOptions deprecated */
            deprecated?: (boolean|null);

            /** FieldOptions weak */
            weak?: (boolean|null);

            /** FieldOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** FieldOptions .google.api.fieldBehavior */
            ".google.api.fieldBehavior"?: (google.api.FieldBehavior[]|null);

            /** FieldOptions .google.api.resourceReference */
            ".google.api.resourceReference"?: (google.api.IResourceReference|null);
        }

        /** Represents a FieldOptions. */
        class FieldOptions implements IFieldOptions {

            /**
             * Constructs a new FieldOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFieldOptions);

            /** FieldOptions ctype. */
            public ctype: (google.protobuf.FieldOptions.CType|keyof typeof google.protobuf.FieldOptions.CType);

            /** FieldOptions packed. */
            public packed: boolean;

            /** FieldOptions jstype. */
            public jstype: (google.protobuf.FieldOptions.JSType|keyof typeof google.protobuf.FieldOptions.JSType);

            /** FieldOptions lazy. */
            public lazy: boolean;

            /** FieldOptions deprecated. */
            public deprecated: boolean;

            /** FieldOptions weak. */
            public weak: boolean;

            /** FieldOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new FieldOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FieldOptions instance
             */
            public static create(properties?: google.protobuf.IFieldOptions): google.protobuf.FieldOptions;

            /**
             * Encodes the specified FieldOptions message. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
             * @param message FieldOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFieldOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FieldOptions message, length delimited. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
             * @param message FieldOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFieldOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FieldOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FieldOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldOptions;

            /**
             * Decodes a FieldOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FieldOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FieldOptions;

            /**
             * Verifies a FieldOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FieldOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FieldOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FieldOptions;

            /**
             * Creates a plain object from a FieldOptions message. Also converts values to other types if specified.
             * @param message FieldOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FieldOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FieldOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace FieldOptions {

            /** CType enum. */
            enum CType {
                STRING = 0,
                CORD = 1,
                STRING_PIECE = 2
            }

            /** JSType enum. */
            enum JSType {
                JS_NORMAL = 0,
                JS_STRING = 1,
                JS_NUMBER = 2
            }
        }

        /** Properties of an OneofOptions. */
        interface IOneofOptions {

            /** OneofOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an OneofOptions. */
        class OneofOptions implements IOneofOptions {

            /**
             * Constructs a new OneofOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IOneofOptions);

            /** OneofOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new OneofOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OneofOptions instance
             */
            public static create(properties?: google.protobuf.IOneofOptions): google.protobuf.OneofOptions;

            /**
             * Encodes the specified OneofOptions message. Does not implicitly {@link google.protobuf.OneofOptions.verify|verify} messages.
             * @param message OneofOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IOneofOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OneofOptions message, length delimited. Does not implicitly {@link google.protobuf.OneofOptions.verify|verify} messages.
             * @param message OneofOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IOneofOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OneofOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OneofOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.OneofOptions;

            /**
             * Decodes an OneofOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OneofOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.OneofOptions;

            /**
             * Verifies an OneofOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OneofOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OneofOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.OneofOptions;

            /**
             * Creates a plain object from an OneofOptions message. Also converts values to other types if specified.
             * @param message OneofOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.OneofOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OneofOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an EnumOptions. */
        interface IEnumOptions {

            /** EnumOptions allowAlias */
            allowAlias?: (boolean|null);

            /** EnumOptions deprecated */
            deprecated?: (boolean|null);

            /** EnumOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an EnumOptions. */
        class EnumOptions implements IEnumOptions {

            /**
             * Constructs a new EnumOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumOptions);

            /** EnumOptions allowAlias. */
            public allowAlias: boolean;

            /** EnumOptions deprecated. */
            public deprecated: boolean;

            /** EnumOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new EnumOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumOptions instance
             */
            public static create(properties?: google.protobuf.IEnumOptions): google.protobuf.EnumOptions;

            /**
             * Encodes the specified EnumOptions message. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
             * @param message EnumOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumOptions message, length delimited. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
             * @param message EnumOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumOptions;

            /**
             * Decodes an EnumOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumOptions;

            /**
             * Verifies an EnumOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumOptions;

            /**
             * Creates a plain object from an EnumOptions message. Also converts values to other types if specified.
             * @param message EnumOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an EnumValueOptions. */
        interface IEnumValueOptions {

            /** EnumValueOptions deprecated */
            deprecated?: (boolean|null);

            /** EnumValueOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an EnumValueOptions. */
        class EnumValueOptions implements IEnumValueOptions {

            /**
             * Constructs a new EnumValueOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumValueOptions);

            /** EnumValueOptions deprecated. */
            public deprecated: boolean;

            /** EnumValueOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new EnumValueOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumValueOptions instance
             */
            public static create(properties?: google.protobuf.IEnumValueOptions): google.protobuf.EnumValueOptions;

            /**
             * Encodes the specified EnumValueOptions message. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
             * @param message EnumValueOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumValueOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumValueOptions message, length delimited. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
             * @param message EnumValueOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumValueOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumValueOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumValueOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumValueOptions;

            /**
             * Decodes an EnumValueOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumValueOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumValueOptions;

            /**
             * Verifies an EnumValueOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumValueOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumValueOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumValueOptions;

            /**
             * Creates a plain object from an EnumValueOptions message. Also converts values to other types if specified.
             * @param message EnumValueOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumValueOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumValueOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ServiceOptions. */
        interface IServiceOptions {

            /** ServiceOptions deprecated */
            deprecated?: (boolean|null);

            /** ServiceOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** ServiceOptions .google.api.defaultHost */
            ".google.api.defaultHost"?: (string|null);

            /** ServiceOptions .google.api.oauthScopes */
            ".google.api.oauthScopes"?: (string|null);
        }

        /** Represents a ServiceOptions. */
        class ServiceOptions implements IServiceOptions {

            /**
             * Constructs a new ServiceOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IServiceOptions);

            /** ServiceOptions deprecated. */
            public deprecated: boolean;

            /** ServiceOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new ServiceOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ServiceOptions instance
             */
            public static create(properties?: google.protobuf.IServiceOptions): google.protobuf.ServiceOptions;

            /**
             * Encodes the specified ServiceOptions message. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
             * @param message ServiceOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IServiceOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ServiceOptions message, length delimited. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
             * @param message ServiceOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IServiceOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ServiceOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ServiceOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ServiceOptions;

            /**
             * Decodes a ServiceOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ServiceOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ServiceOptions;

            /**
             * Verifies a ServiceOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ServiceOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ServiceOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.ServiceOptions;

            /**
             * Creates a plain object from a ServiceOptions message. Also converts values to other types if specified.
             * @param message ServiceOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.ServiceOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ServiceOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MethodOptions. */
        interface IMethodOptions {

            /** MethodOptions deprecated */
            deprecated?: (boolean|null);

            /** MethodOptions idempotencyLevel */
            idempotencyLevel?: (google.protobuf.MethodOptions.IdempotencyLevel|keyof typeof google.protobuf.MethodOptions.IdempotencyLevel|null);

            /** MethodOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** MethodOptions .google.api.http */
            ".google.api.http"?: (google.api.IHttpRule|null);

            /** MethodOptions .google.api.methodSignature */
            ".google.api.methodSignature"?: (string[]|null);

            /** MethodOptions .google.longrunning.operationInfo */
            ".google.longrunning.operationInfo"?: (google.longrunning.IOperationInfo|null);
        }

        /** Represents a MethodOptions. */
        class MethodOptions implements IMethodOptions {

            /**
             * Constructs a new MethodOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMethodOptions);

            /** MethodOptions deprecated. */
            public deprecated: boolean;

            /** MethodOptions idempotencyLevel. */
            public idempotencyLevel: (google.protobuf.MethodOptions.IdempotencyLevel|keyof typeof google.protobuf.MethodOptions.IdempotencyLevel);

            /** MethodOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new MethodOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MethodOptions instance
             */
            public static create(properties?: google.protobuf.IMethodOptions): google.protobuf.MethodOptions;

            /**
             * Encodes the specified MethodOptions message. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
             * @param message MethodOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMethodOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MethodOptions message, length delimited. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
             * @param message MethodOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IMethodOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MethodOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MethodOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MethodOptions;

            /**
             * Decodes a MethodOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MethodOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.MethodOptions;

            /**
             * Verifies a MethodOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MethodOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MethodOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.MethodOptions;

            /**
             * Creates a plain object from a MethodOptions message. Also converts values to other types if specified.
             * @param message MethodOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.MethodOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MethodOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace MethodOptions {

            /** IdempotencyLevel enum. */
            enum IdempotencyLevel {
                IDEMPOTENCY_UNKNOWN = 0,
                NO_SIDE_EFFECTS = 1,
                IDEMPOTENT = 2
            }
        }

        /** Properties of an UninterpretedOption. */
        interface IUninterpretedOption {

            /** UninterpretedOption name */
            name?: (google.protobuf.UninterpretedOption.INamePart[]|null);

            /** UninterpretedOption identifierValue */
            identifierValue?: (string|null);

            /** UninterpretedOption positiveIntValue */
            positiveIntValue?: (number|Long|string|null);

            /** UninterpretedOption negativeIntValue */
            negativeIntValue?: (number|Long|string|null);

            /** UninterpretedOption doubleValue */
            doubleValue?: (number|null);

            /** UninterpretedOption stringValue */
            stringValue?: (Uint8Array|string|null);

            /** UninterpretedOption aggregateValue */
            aggregateValue?: (string|null);
        }

        /** Represents an UninterpretedOption. */
        class UninterpretedOption implements IUninterpretedOption {

            /**
             * Constructs a new UninterpretedOption.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IUninterpretedOption);

            /** UninterpretedOption name. */
            public name: google.protobuf.UninterpretedOption.INamePart[];

            /** UninterpretedOption identifierValue. */
            public identifierValue: string;

            /** UninterpretedOption positiveIntValue. */
            public positiveIntValue: (number|Long|string);

            /** UninterpretedOption negativeIntValue. */
            public negativeIntValue: (number|Long|string);

            /** UninterpretedOption doubleValue. */
            public doubleValue: number;

            /** UninterpretedOption stringValue. */
            public stringValue: (Uint8Array|string);

            /** UninterpretedOption aggregateValue. */
            public aggregateValue: string;

            /**
             * Creates a new UninterpretedOption instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UninterpretedOption instance
             */
            public static create(properties?: google.protobuf.IUninterpretedOption): google.protobuf.UninterpretedOption;

            /**
             * Encodes the specified UninterpretedOption message. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
             * @param message UninterpretedOption message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IUninterpretedOption, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UninterpretedOption message, length delimited. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
             * @param message UninterpretedOption message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IUninterpretedOption, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an UninterpretedOption message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UninterpretedOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UninterpretedOption;

            /**
             * Decodes an UninterpretedOption message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UninterpretedOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.UninterpretedOption;

            /**
             * Verifies an UninterpretedOption message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an UninterpretedOption message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UninterpretedOption
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.UninterpretedOption;

            /**
             * Creates a plain object from an UninterpretedOption message. Also converts values to other types if specified.
             * @param message UninterpretedOption
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.UninterpretedOption, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UninterpretedOption to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace UninterpretedOption {

            /** Properties of a NamePart. */
            interface INamePart {

                /** NamePart namePart */
                namePart: string;

                /** NamePart isExtension */
                isExtension: boolean;
            }

            /** Represents a NamePart. */
            class NamePart implements INamePart {

                /**
                 * Constructs a new NamePart.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.UninterpretedOption.INamePart);

                /** NamePart namePart. */
                public namePart: string;

                /** NamePart isExtension. */
                public isExtension: boolean;

                /**
                 * Creates a new NamePart instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns NamePart instance
                 */
                public static create(properties?: google.protobuf.UninterpretedOption.INamePart): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Encodes the specified NamePart message. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
                 * @param message NamePart message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.UninterpretedOption.INamePart, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified NamePart message, length delimited. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
                 * @param message NamePart message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.UninterpretedOption.INamePart, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a NamePart message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns NamePart
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Decodes a NamePart message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns NamePart
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Verifies a NamePart message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a NamePart message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns NamePart
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Creates a plain object from a NamePart message. Also converts values to other types if specified.
                 * @param message NamePart
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.UninterpretedOption.NamePart, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this NamePart to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a SourceCodeInfo. */
        interface ISourceCodeInfo {

            /** SourceCodeInfo location */
            location?: (google.protobuf.SourceCodeInfo.ILocation[]|null);
        }

        /** Represents a SourceCodeInfo. */
        class SourceCodeInfo implements ISourceCodeInfo {

            /**
             * Constructs a new SourceCodeInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.ISourceCodeInfo);

            /** SourceCodeInfo location. */
            public location: google.protobuf.SourceCodeInfo.ILocation[];

            /**
             * Creates a new SourceCodeInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SourceCodeInfo instance
             */
            public static create(properties?: google.protobuf.ISourceCodeInfo): google.protobuf.SourceCodeInfo;

            /**
             * Encodes the specified SourceCodeInfo message. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
             * @param message SourceCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.ISourceCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SourceCodeInfo message, length delimited. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
             * @param message SourceCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.ISourceCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SourceCodeInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SourceCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.SourceCodeInfo;

            /**
             * Decodes a SourceCodeInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SourceCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.SourceCodeInfo;

            /**
             * Verifies a SourceCodeInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SourceCodeInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SourceCodeInfo
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.SourceCodeInfo;

            /**
             * Creates a plain object from a SourceCodeInfo message. Also converts values to other types if specified.
             * @param message SourceCodeInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.SourceCodeInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SourceCodeInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace SourceCodeInfo {

            /** Properties of a Location. */
            interface ILocation {

                /** Location path */
                path?: (number[]|null);

                /** Location span */
                span?: (number[]|null);

                /** Location leadingComments */
                leadingComments?: (string|null);

                /** Location trailingComments */
                trailingComments?: (string|null);

                /** Location leadingDetachedComments */
                leadingDetachedComments?: (string[]|null);
            }

            /** Represents a Location. */
            class Location implements ILocation {

                /**
                 * Constructs a new Location.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.SourceCodeInfo.ILocation);

                /** Location path. */
                public path: number[];

                /** Location span. */
                public span: number[];

                /** Location leadingComments. */
                public leadingComments: string;

                /** Location trailingComments. */
                public trailingComments: string;

                /** Location leadingDetachedComments. */
                public leadingDetachedComments: string[];

                /**
                 * Creates a new Location instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Location instance
                 */
                public static create(properties?: google.protobuf.SourceCodeInfo.ILocation): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Encodes the specified Location message. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
                 * @param message Location message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.SourceCodeInfo.ILocation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Location message, length delimited. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
                 * @param message Location message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.SourceCodeInfo.ILocation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Location message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Location
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Decodes a Location message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Location
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Verifies a Location message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Location message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Location
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Creates a plain object from a Location message. Also converts values to other types if specified.
                 * @param message Location
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.SourceCodeInfo.Location, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Location to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a GeneratedCodeInfo. */
        interface IGeneratedCodeInfo {

            /** GeneratedCodeInfo annotation */
            annotation?: (google.protobuf.GeneratedCodeInfo.IAnnotation[]|null);
        }

        /** Represents a GeneratedCodeInfo. */
        class GeneratedCodeInfo implements IGeneratedCodeInfo {

            /**
             * Constructs a new GeneratedCodeInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IGeneratedCodeInfo);

            /** GeneratedCodeInfo annotation. */
            public annotation: google.protobuf.GeneratedCodeInfo.IAnnotation[];

            /**
             * Creates a new GeneratedCodeInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GeneratedCodeInfo instance
             */
            public static create(properties?: google.protobuf.IGeneratedCodeInfo): google.protobuf.GeneratedCodeInfo;

            /**
             * Encodes the specified GeneratedCodeInfo message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.verify|verify} messages.
             * @param message GeneratedCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IGeneratedCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GeneratedCodeInfo message, length delimited. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.verify|verify} messages.
             * @param message GeneratedCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IGeneratedCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GeneratedCodeInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GeneratedCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.GeneratedCodeInfo;

            /**
             * Decodes a GeneratedCodeInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GeneratedCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.GeneratedCodeInfo;

            /**
             * Verifies a GeneratedCodeInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GeneratedCodeInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GeneratedCodeInfo
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.GeneratedCodeInfo;

            /**
             * Creates a plain object from a GeneratedCodeInfo message. Also converts values to other types if specified.
             * @param message GeneratedCodeInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.GeneratedCodeInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GeneratedCodeInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace GeneratedCodeInfo {

            /** Properties of an Annotation. */
            interface IAnnotation {

                /** Annotation path */
                path?: (number[]|null);

                /** Annotation sourceFile */
                sourceFile?: (string|null);

                /** Annotation begin */
                begin?: (number|null);

                /** Annotation end */
                end?: (number|null);
            }

            /** Represents an Annotation. */
            class Annotation implements IAnnotation {

                /**
                 * Constructs a new Annotation.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.GeneratedCodeInfo.IAnnotation);

                /** Annotation path. */
                public path: number[];

                /** Annotation sourceFile. */
                public sourceFile: string;

                /** Annotation begin. */
                public begin: number;

                /** Annotation end. */
                public end: number;

                /**
                 * Creates a new Annotation instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Annotation instance
                 */
                public static create(properties?: google.protobuf.GeneratedCodeInfo.IAnnotation): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Encodes the specified Annotation message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.Annotation.verify|verify} messages.
                 * @param message Annotation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.GeneratedCodeInfo.IAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Annotation message, length delimited. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.Annotation.verify|verify} messages.
                 * @param message Annotation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.GeneratedCodeInfo.IAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an Annotation message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Annotation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Decodes an Annotation message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Annotation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Verifies an Annotation message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an Annotation message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Annotation
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Creates a plain object from an Annotation message. Also converts values to other types if specified.
                 * @param message Annotation
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.GeneratedCodeInfo.Annotation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Annotation to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a Duration. */
        interface IDuration {

            /** Duration seconds */
            seconds?: (number|Long|string|null);

            /** Duration nanos */
            nanos?: (number|null);
        }

        /** Represents a Duration. */
        class Duration implements IDuration {

            /**
             * Constructs a new Duration.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IDuration);

            /** Duration seconds. */
            public seconds: (number|Long|string);

            /** Duration nanos. */
            public nanos: number;

            /**
             * Creates a new Duration instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Duration instance
             */
            public static create(properties?: google.protobuf.IDuration): google.protobuf.Duration;

            /**
             * Encodes the specified Duration message. Does not implicitly {@link google.protobuf.Duration.verify|verify} messages.
             * @param message Duration message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IDuration, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Duration message, length delimited. Does not implicitly {@link google.protobuf.Duration.verify|verify} messages.
             * @param message Duration message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IDuration, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Duration message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Duration
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Duration;

            /**
             * Decodes a Duration message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Duration
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Duration;

            /**
             * Verifies a Duration message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Duration message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Duration
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Duration;

            /**
             * Creates a plain object from a Duration message. Also converts values to other types if specified.
             * @param message Duration
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Duration, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Duration to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Timestamp. */
        interface ITimestamp {

            /** Timestamp seconds */
            seconds?: (number|Long|string|null);

            /** Timestamp nanos */
            nanos?: (number|null);
        }

        /** Represents a Timestamp. */
        class Timestamp implements ITimestamp {

            /**
             * Constructs a new Timestamp.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.ITimestamp);

            /** Timestamp seconds. */
            public seconds: (number|Long|string);

            /** Timestamp nanos. */
            public nanos: number;

            /**
             * Creates a new Timestamp instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Timestamp instance
             */
            public static create(properties?: google.protobuf.ITimestamp): google.protobuf.Timestamp;

            /**
             * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Timestamp message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Timestamp;

            /**
             * Decodes a Timestamp message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Timestamp;

            /**
             * Verifies a Timestamp message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Timestamp
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Timestamp;

            /**
             * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
             * @param message Timestamp
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Timestamp, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Timestamp to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an Any. */
        interface IAny {

            /** Any type_url */
            type_url?: (string|null);

            /** Any value */
            value?: (Uint8Array|string|null);
        }

        /** Represents an Any. */
        class Any implements IAny {

            /**
             * Constructs a new Any.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IAny);

            /** Any type_url. */
            public type_url: string;

            /** Any value. */
            public value: (Uint8Array|string);

            /**
             * Creates a new Any instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Any instance
             */
            public static create(properties?: google.protobuf.IAny): google.protobuf.Any;

            /**
             * Encodes the specified Any message. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
             * @param message Any message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IAny, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Any message, length delimited. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
             * @param message Any message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IAny, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Any message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Any
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Any;

            /**
             * Decodes an Any message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Any
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Any;

            /**
             * Verifies an Any message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Any message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Any
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Any;

            /**
             * Creates a plain object from an Any message. Also converts values to other types if specified.
             * @param message Any
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Any, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Any to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an Empty. */
        interface IEmpty {
        }

        /** Represents an Empty. */
        class Empty implements IEmpty {

            /**
             * Constructs a new Empty.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEmpty);

            /**
             * Creates a new Empty instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Empty instance
             */
            public static create(properties?: google.protobuf.IEmpty): google.protobuf.Empty;

            /**
             * Encodes the specified Empty message. Does not implicitly {@link google.protobuf.Empty.verify|verify} messages.
             * @param message Empty message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEmpty, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Empty message, length delimited. Does not implicitly {@link google.protobuf.Empty.verify|verify} messages.
             * @param message Empty message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEmpty, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Empty message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Empty
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Empty;

            /**
             * Decodes an Empty message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Empty
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Empty;

            /**
             * Verifies an Empty message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Empty message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Empty
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Empty;

            /**
             * Creates a plain object from an Empty message. Also converts values to other types if specified.
             * @param message Empty
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Empty, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Empty to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FieldMask. */
        interface IFieldMask {

            /** FieldMask paths */
            paths?: (string[]|null);
        }

        /** Represents a FieldMask. */
        class FieldMask implements IFieldMask {

            /**
             * Constructs a new FieldMask.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFieldMask);

            /** FieldMask paths. */
            public paths: string[];

            /**
             * Creates a new FieldMask instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FieldMask instance
             */
            public static create(properties?: google.protobuf.IFieldMask): google.protobuf.FieldMask;

            /**
             * Encodes the specified FieldMask message. Does not implicitly {@link google.protobuf.FieldMask.verify|verify} messages.
             * @param message FieldMask message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFieldMask, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FieldMask message, length delimited. Does not implicitly {@link google.protobuf.FieldMask.verify|verify} messages.
             * @param message FieldMask message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFieldMask, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FieldMask message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FieldMask
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldMask;

            /**
             * Decodes a FieldMask message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FieldMask
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FieldMask;

            /**
             * Verifies a FieldMask message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FieldMask message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FieldMask
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FieldMask;

            /**
             * Creates a plain object from a FieldMask message. Also converts values to other types if specified.
             * @param message FieldMask
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FieldMask, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FieldMask to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Namespace longrunning. */
    namespace longrunning {

        /** Represents an Operations */
        class Operations extends $protobuf.rpc.Service {

            /**
             * Constructs a new Operations service.
             * @param rpcImpl RPC implementation
             * @param [requestDelimited=false] Whether requests are length-delimited
             * @param [responseDelimited=false] Whether responses are length-delimited
             */
            constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

            /**
             * Creates new Operations service using the specified rpc implementation.
             * @param rpcImpl RPC implementation
             * @param [requestDelimited=false] Whether requests are length-delimited
             * @param [responseDelimited=false] Whether responses are length-delimited
             * @returns RPC service. Useful where requests and/or responses are streamed.
             */
            public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Operations;

            /**
             * Calls ListOperations.
             * @param request ListOperationsRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and ListOperationsResponse
             */
            public listOperations(request: google.longrunning.IListOperationsRequest, callback: google.longrunning.Operations.ListOperationsCallback): void;

            /**
             * Calls ListOperations.
             * @param request ListOperationsRequest message or plain object
             * @returns Promise
             */
            public listOperations(request: google.longrunning.IListOperationsRequest): Promise<google.longrunning.ListOperationsResponse>;

            /**
             * Calls GetOperation.
             * @param request GetOperationRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Operation
             */
            public getOperation(request: google.longrunning.IGetOperationRequest, callback: google.longrunning.Operations.GetOperationCallback): void;

            /**
             * Calls GetOperation.
             * @param request GetOperationRequest message or plain object
             * @returns Promise
             */
            public getOperation(request: google.longrunning.IGetOperationRequest): Promise<google.longrunning.Operation>;

            /**
             * Calls DeleteOperation.
             * @param request DeleteOperationRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Empty
             */
            public deleteOperation(request: google.longrunning.IDeleteOperationRequest, callback: google.longrunning.Operations.DeleteOperationCallback): void;

            /**
             * Calls DeleteOperation.
             * @param request DeleteOperationRequest message or plain object
             * @returns Promise
             */
            public deleteOperation(request: google.longrunning.IDeleteOperationRequest): Promise<google.protobuf.Empty>;

            /**
             * Calls CancelOperation.
             * @param request CancelOperationRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Empty
             */
            public cancelOperation(request: google.longrunning.ICancelOperationRequest, callback: google.longrunning.Operations.CancelOperationCallback): void;

            /**
             * Calls CancelOperation.
             * @param request CancelOperationRequest message or plain object
             * @returns Promise
             */
            public cancelOperation(request: google.longrunning.ICancelOperationRequest): Promise<google.protobuf.Empty>;

            /**
             * Calls WaitOperation.
             * @param request WaitOperationRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Operation
             */
            public waitOperation(request: google.longrunning.IWaitOperationRequest, callback: google.longrunning.Operations.WaitOperationCallback): void;

            /**
             * Calls WaitOperation.
             * @param request WaitOperationRequest message or plain object
             * @returns Promise
             */
            public waitOperation(request: google.longrunning.IWaitOperationRequest): Promise<google.longrunning.Operation>;
        }

        namespace Operations {

            /**
             * Callback as used by {@link google.longrunning.Operations#listOperations}.
             * @param error Error, if any
             * @param [response] ListOperationsResponse
             */
            type ListOperationsCallback = (error: (Error|null), response?: google.longrunning.ListOperationsResponse) => void;

            /**
             * Callback as used by {@link google.longrunning.Operations#getOperation}.
             * @param error Error, if any
             * @param [response] Operation
             */
            type GetOperationCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

            /**
             * Callback as used by {@link google.longrunning.Operations#deleteOperation}.
             * @param error Error, if any
             * @param [response] Empty
             */
            type DeleteOperationCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

            /**
             * Callback as used by {@link google.longrunning.Operations#cancelOperation}.
             * @param error Error, if any
             * @param [response] Empty
             */
            type CancelOperationCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

            /**
             * Callback as used by {@link google.longrunning.Operations#waitOperation}.
             * @param error Error, if any
             * @param [response] Operation
             */
            type WaitOperationCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;
        }

        /** Properties of an Operation. */
        interface IOperation {

            /** Operation name */
            name?: (string|null);

            /** Operation metadata */
            metadata?: (google.protobuf.IAny|null);

            /** Operation done */
            done?: (boolean|null);

            /** Operation error */
            error?: (google.rpc.IStatus|null);

            /** Operation response */
            response?: (google.protobuf.IAny|null);
        }

        /** Represents an Operation. */
        class Operation implements IOperation {

            /**
             * Constructs a new Operation.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.longrunning.IOperation);

            /** Operation name. */
            public name: string;

            /** Operation metadata. */
            public metadata?: (google.protobuf.IAny|null);

            /** Operation done. */
            public done: boolean;

            /** Operation error. */
            public error?: (google.rpc.IStatus|null);

            /** Operation response. */
            public response?: (google.protobuf.IAny|null);

            /** Operation result. */
            public result?: ("error"|"response");

            /**
             * Creates a new Operation instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Operation instance
             */
            public static create(properties?: google.longrunning.IOperation): google.longrunning.Operation;

            /**
             * Encodes the specified Operation message. Does not implicitly {@link google.longrunning.Operation.verify|verify} messages.
             * @param message Operation message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.longrunning.IOperation, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Operation message, length delimited. Does not implicitly {@link google.longrunning.Operation.verify|verify} messages.
             * @param message Operation message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.longrunning.IOperation, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Operation message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Operation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.longrunning.Operation;

            /**
             * Decodes an Operation message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Operation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.longrunning.Operation;

            /**
             * Verifies an Operation message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Operation message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Operation
             */
            public static fromObject(object: { [k: string]: any }): google.longrunning.Operation;

            /**
             * Creates a plain object from an Operation message. Also converts values to other types if specified.
             * @param message Operation
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.longrunning.Operation, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Operation to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a GetOperationRequest. */
        interface IGetOperationRequest {

            /** GetOperationRequest name */
            name?: (string|null);
        }

        /** Represents a GetOperationRequest. */
        class GetOperationRequest implements IGetOperationRequest {

            /**
             * Constructs a new GetOperationRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.longrunning.IGetOperationRequest);

            /** GetOperationRequest name. */
            public name: string;

            /**
             * Creates a new GetOperationRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GetOperationRequest instance
             */
            public static create(properties?: google.longrunning.IGetOperationRequest): google.longrunning.GetOperationRequest;

            /**
             * Encodes the specified GetOperationRequest message. Does not implicitly {@link google.longrunning.GetOperationRequest.verify|verify} messages.
             * @param message GetOperationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.longrunning.IGetOperationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GetOperationRequest message, length delimited. Does not implicitly {@link google.longrunning.GetOperationRequest.verify|verify} messages.
             * @param message GetOperationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.longrunning.IGetOperationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GetOperationRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GetOperationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.longrunning.GetOperationRequest;

            /**
             * Decodes a GetOperationRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GetOperationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.longrunning.GetOperationRequest;

            /**
             * Verifies a GetOperationRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GetOperationRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GetOperationRequest
             */
            public static fromObject(object: { [k: string]: any }): google.longrunning.GetOperationRequest;

            /**
             * Creates a plain object from a GetOperationRequest message. Also converts values to other types if specified.
             * @param message GetOperationRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.longrunning.GetOperationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GetOperationRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ListOperationsRequest. */
        interface IListOperationsRequest {

            /** ListOperationsRequest name */
            name?: (string|null);

            /** ListOperationsRequest filter */
            filter?: (string|null);

            /** ListOperationsRequest pageSize */
            pageSize?: (number|null);

            /** ListOperationsRequest pageToken */
            pageToken?: (string|null);
        }

        /** Represents a ListOperationsRequest. */
        class ListOperationsRequest implements IListOperationsRequest {

            /**
             * Constructs a new ListOperationsRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.longrunning.IListOperationsRequest);

            /** ListOperationsRequest name. */
            public name: string;

            /** ListOperationsRequest filter. */
            public filter: string;

            /** ListOperationsRequest pageSize. */
            public pageSize: number;

            /** ListOperationsRequest pageToken. */
            public pageToken: string;

            /**
             * Creates a new ListOperationsRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ListOperationsRequest instance
             */
            public static create(properties?: google.longrunning.IListOperationsRequest): google.longrunning.ListOperationsRequest;

            /**
             * Encodes the specified ListOperationsRequest message. Does not implicitly {@link google.longrunning.ListOperationsRequest.verify|verify} messages.
             * @param message ListOperationsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.longrunning.IListOperationsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ListOperationsRequest message, length delimited. Does not implicitly {@link google.longrunning.ListOperationsRequest.verify|verify} messages.
             * @param message ListOperationsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.longrunning.IListOperationsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ListOperationsRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ListOperationsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.longrunning.ListOperationsRequest;

            /**
             * Decodes a ListOperationsRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ListOperationsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.longrunning.ListOperationsRequest;

            /**
             * Verifies a ListOperationsRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ListOperationsRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ListOperationsRequest
             */
            public static fromObject(object: { [k: string]: any }): google.longrunning.ListOperationsRequest;

            /**
             * Creates a plain object from a ListOperationsRequest message. Also converts values to other types if specified.
             * @param message ListOperationsRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.longrunning.ListOperationsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ListOperationsRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ListOperationsResponse. */
        interface IListOperationsResponse {

            /** ListOperationsResponse operations */
            operations?: (google.longrunning.IOperation[]|null);

            /** ListOperationsResponse nextPageToken */
            nextPageToken?: (string|null);
        }

        /** Represents a ListOperationsResponse. */
        class ListOperationsResponse implements IListOperationsResponse {

            /**
             * Constructs a new ListOperationsResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.longrunning.IListOperationsResponse);

            /** ListOperationsResponse operations. */
            public operations: google.longrunning.IOperation[];

            /** ListOperationsResponse nextPageToken. */
            public nextPageToken: string;

            /**
             * Creates a new ListOperationsResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ListOperationsResponse instance
             */
            public static create(properties?: google.longrunning.IListOperationsResponse): google.longrunning.ListOperationsResponse;

            /**
             * Encodes the specified ListOperationsResponse message. Does not implicitly {@link google.longrunning.ListOperationsResponse.verify|verify} messages.
             * @param message ListOperationsResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.longrunning.IListOperationsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ListOperationsResponse message, length delimited. Does not implicitly {@link google.longrunning.ListOperationsResponse.verify|verify} messages.
             * @param message ListOperationsResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.longrunning.IListOperationsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ListOperationsResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ListOperationsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.longrunning.ListOperationsResponse;

            /**
             * Decodes a ListOperationsResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ListOperationsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.longrunning.ListOperationsResponse;

            /**
             * Verifies a ListOperationsResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ListOperationsResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ListOperationsResponse
             */
            public static fromObject(object: { [k: string]: any }): google.longrunning.ListOperationsResponse;

            /**
             * Creates a plain object from a ListOperationsResponse message. Also converts values to other types if specified.
             * @param message ListOperationsResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.longrunning.ListOperationsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ListOperationsResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a CancelOperationRequest. */
        interface ICancelOperationRequest {

            /** CancelOperationRequest name */
            name?: (string|null);
        }

        /** Represents a CancelOperationRequest. */
        class CancelOperationRequest implements ICancelOperationRequest {

            /**
             * Constructs a new CancelOperationRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.longrunning.ICancelOperationRequest);

            /** CancelOperationRequest name. */
            public name: string;

            /**
             * Creates a new CancelOperationRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CancelOperationRequest instance
             */
            public static create(properties?: google.longrunning.ICancelOperationRequest): google.longrunning.CancelOperationRequest;

            /**
             * Encodes the specified CancelOperationRequest message. Does not implicitly {@link google.longrunning.CancelOperationRequest.verify|verify} messages.
             * @param message CancelOperationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.longrunning.ICancelOperationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CancelOperationRequest message, length delimited. Does not implicitly {@link google.longrunning.CancelOperationRequest.verify|verify} messages.
             * @param message CancelOperationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.longrunning.ICancelOperationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CancelOperationRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CancelOperationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.longrunning.CancelOperationRequest;

            /**
             * Decodes a CancelOperationRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CancelOperationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.longrunning.CancelOperationRequest;

            /**
             * Verifies a CancelOperationRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CancelOperationRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CancelOperationRequest
             */
            public static fromObject(object: { [k: string]: any }): google.longrunning.CancelOperationRequest;

            /**
             * Creates a plain object from a CancelOperationRequest message. Also converts values to other types if specified.
             * @param message CancelOperationRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.longrunning.CancelOperationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CancelOperationRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a DeleteOperationRequest. */
        interface IDeleteOperationRequest {

            /** DeleteOperationRequest name */
            name?: (string|null);
        }

        /** Represents a DeleteOperationRequest. */
        class DeleteOperationRequest implements IDeleteOperationRequest {

            /**
             * Constructs a new DeleteOperationRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.longrunning.IDeleteOperationRequest);

            /** DeleteOperationRequest name. */
            public name: string;

            /**
             * Creates a new DeleteOperationRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DeleteOperationRequest instance
             */
            public static create(properties?: google.longrunning.IDeleteOperationRequest): google.longrunning.DeleteOperationRequest;

            /**
             * Encodes the specified DeleteOperationRequest message. Does not implicitly {@link google.longrunning.DeleteOperationRequest.verify|verify} messages.
             * @param message DeleteOperationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.longrunning.IDeleteOperationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DeleteOperationRequest message, length delimited. Does not implicitly {@link google.longrunning.DeleteOperationRequest.verify|verify} messages.
             * @param message DeleteOperationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.longrunning.IDeleteOperationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DeleteOperationRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DeleteOperationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.longrunning.DeleteOperationRequest;

            /**
             * Decodes a DeleteOperationRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DeleteOperationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.longrunning.DeleteOperationRequest;

            /**
             * Verifies a DeleteOperationRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DeleteOperationRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DeleteOperationRequest
             */
            public static fromObject(object: { [k: string]: any }): google.longrunning.DeleteOperationRequest;

            /**
             * Creates a plain object from a DeleteOperationRequest message. Also converts values to other types if specified.
             * @param message DeleteOperationRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.longrunning.DeleteOperationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DeleteOperationRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a WaitOperationRequest. */
        interface IWaitOperationRequest {

            /** WaitOperationRequest name */
            name?: (string|null);

            /** WaitOperationRequest timeout */
            timeout?: (google.protobuf.IDuration|null);
        }

        /** Represents a WaitOperationRequest. */
        class WaitOperationRequest implements IWaitOperationRequest {

            /**
             * Constructs a new WaitOperationRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.longrunning.IWaitOperationRequest);

            /** WaitOperationRequest name. */
            public name: string;

            /** WaitOperationRequest timeout. */
            public timeout?: (google.protobuf.IDuration|null);

            /**
             * Creates a new WaitOperationRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns WaitOperationRequest instance
             */
            public static create(properties?: google.longrunning.IWaitOperationRequest): google.longrunning.WaitOperationRequest;

            /**
             * Encodes the specified WaitOperationRequest message. Does not implicitly {@link google.longrunning.WaitOperationRequest.verify|verify} messages.
             * @param message WaitOperationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.longrunning.IWaitOperationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified WaitOperationRequest message, length delimited. Does not implicitly {@link google.longrunning.WaitOperationRequest.verify|verify} messages.
             * @param message WaitOperationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.longrunning.IWaitOperationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a WaitOperationRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns WaitOperationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.longrunning.WaitOperationRequest;

            /**
             * Decodes a WaitOperationRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns WaitOperationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.longrunning.WaitOperationRequest;

            /**
             * Verifies a WaitOperationRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a WaitOperationRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns WaitOperationRequest
             */
            public static fromObject(object: { [k: string]: any }): google.longrunning.WaitOperationRequest;

            /**
             * Creates a plain object from a WaitOperationRequest message. Also converts values to other types if specified.
             * @param message WaitOperationRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.longrunning.WaitOperationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this WaitOperationRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an OperationInfo. */
        interface IOperationInfo {

            /** OperationInfo responseType */
            responseType?: (string|null);

            /** OperationInfo metadataType */
            metadataType?: (string|null);
        }

        /** Represents an OperationInfo. */
        class OperationInfo implements IOperationInfo {

            /**
             * Constructs a new OperationInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.longrunning.IOperationInfo);

            /** OperationInfo responseType. */
            public responseType: string;

            /** OperationInfo metadataType. */
            public metadataType: string;

            /**
             * Creates a new OperationInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OperationInfo instance
             */
            public static create(properties?: google.longrunning.IOperationInfo): google.longrunning.OperationInfo;

            /**
             * Encodes the specified OperationInfo message. Does not implicitly {@link google.longrunning.OperationInfo.verify|verify} messages.
             * @param message OperationInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.longrunning.IOperationInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OperationInfo message, length delimited. Does not implicitly {@link google.longrunning.OperationInfo.verify|verify} messages.
             * @param message OperationInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.longrunning.IOperationInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OperationInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OperationInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.longrunning.OperationInfo;

            /**
             * Decodes an OperationInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OperationInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.longrunning.OperationInfo;

            /**
             * Verifies an OperationInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OperationInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OperationInfo
             */
            public static fromObject(object: { [k: string]: any }): google.longrunning.OperationInfo;

            /**
             * Creates a plain object from an OperationInfo message. Also converts values to other types if specified.
             * @param message OperationInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.longrunning.OperationInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OperationInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Namespace rpc. */
    namespace rpc {

        /** Properties of a Status. */
        interface IStatus {

            /** Status code */
            code?: (number|null);

            /** Status message */
            message?: (string|null);

            /** Status details */
            details?: (google.protobuf.IAny[]|null);
        }

        /** Represents a Status. */
        class Status implements IStatus {

            /**
             * Constructs a new Status.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.rpc.IStatus);

            /** Status code. */
            public code: number;

            /** Status message. */
            public message: string;

            /** Status details. */
            public details: google.protobuf.IAny[];

            /**
             * Creates a new Status instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Status instance
             */
            public static create(properties?: google.rpc.IStatus): google.rpc.Status;

            /**
             * Encodes the specified Status message. Does not implicitly {@link google.rpc.Status.verify|verify} messages.
             * @param message Status message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.rpc.IStatus, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Status message, length delimited. Does not implicitly {@link google.rpc.Status.verify|verify} messages.
             * @param message Status message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.rpc.IStatus, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Status message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Status
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.rpc.Status;

            /**
             * Decodes a Status message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Status
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.rpc.Status;

            /**
             * Verifies a Status message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Status message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Status
             */
            public static fromObject(object: { [k: string]: any }): google.rpc.Status;

            /**
             * Creates a plain object from a Status message. Also converts values to other types if specified.
             * @param message Status
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.rpc.Status, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Status to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }
}
