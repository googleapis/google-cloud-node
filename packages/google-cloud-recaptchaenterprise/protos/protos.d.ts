// Copyright 2025 Google LLC
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

import type {protobuf as $protobuf} from "google-gax";
import Long = require("long");
/** Namespace google. */
export namespace google {

    /** Namespace cloud. */
    namespace cloud {

        /** Namespace recaptchaenterprise. */
        namespace recaptchaenterprise {

            /** Namespace v1. */
            namespace v1 {

                /** Represents a RecaptchaEnterpriseService */
                class RecaptchaEnterpriseService extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new RecaptchaEnterpriseService service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new RecaptchaEnterpriseService service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): RecaptchaEnterpriseService;

                    /**
                     * Calls CreateAssessment.
                     * @param request CreateAssessmentRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Assessment
                     */
                    public createAssessment(request: google.cloud.recaptchaenterprise.v1.ICreateAssessmentRequest, callback: google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseService.CreateAssessmentCallback): void;

                    /**
                     * Calls CreateAssessment.
                     * @param request CreateAssessmentRequest message or plain object
                     * @returns Promise
                     */
                    public createAssessment(request: google.cloud.recaptchaenterprise.v1.ICreateAssessmentRequest): Promise<google.cloud.recaptchaenterprise.v1.Assessment>;

                    /**
                     * Calls AnnotateAssessment.
                     * @param request AnnotateAssessmentRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and AnnotateAssessmentResponse
                     */
                    public annotateAssessment(request: google.cloud.recaptchaenterprise.v1.IAnnotateAssessmentRequest, callback: google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseService.AnnotateAssessmentCallback): void;

                    /**
                     * Calls AnnotateAssessment.
                     * @param request AnnotateAssessmentRequest message or plain object
                     * @returns Promise
                     */
                    public annotateAssessment(request: google.cloud.recaptchaenterprise.v1.IAnnotateAssessmentRequest): Promise<google.cloud.recaptchaenterprise.v1.AnnotateAssessmentResponse>;

                    /**
                     * Calls CreateKey.
                     * @param request CreateKeyRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Key
                     */
                    public createKey(request: google.cloud.recaptchaenterprise.v1.ICreateKeyRequest, callback: google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseService.CreateKeyCallback): void;

                    /**
                     * Calls CreateKey.
                     * @param request CreateKeyRequest message or plain object
                     * @returns Promise
                     */
                    public createKey(request: google.cloud.recaptchaenterprise.v1.ICreateKeyRequest): Promise<google.cloud.recaptchaenterprise.v1.Key>;

                    /**
                     * Calls ListKeys.
                     * @param request ListKeysRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListKeysResponse
                     */
                    public listKeys(request: google.cloud.recaptchaenterprise.v1.IListKeysRequest, callback: google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseService.ListKeysCallback): void;

                    /**
                     * Calls ListKeys.
                     * @param request ListKeysRequest message or plain object
                     * @returns Promise
                     */
                    public listKeys(request: google.cloud.recaptchaenterprise.v1.IListKeysRequest): Promise<google.cloud.recaptchaenterprise.v1.ListKeysResponse>;

                    /**
                     * Calls RetrieveLegacySecretKey.
                     * @param request RetrieveLegacySecretKeyRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and RetrieveLegacySecretKeyResponse
                     */
                    public retrieveLegacySecretKey(request: google.cloud.recaptchaenterprise.v1.IRetrieveLegacySecretKeyRequest, callback: google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseService.RetrieveLegacySecretKeyCallback): void;

                    /**
                     * Calls RetrieveLegacySecretKey.
                     * @param request RetrieveLegacySecretKeyRequest message or plain object
                     * @returns Promise
                     */
                    public retrieveLegacySecretKey(request: google.cloud.recaptchaenterprise.v1.IRetrieveLegacySecretKeyRequest): Promise<google.cloud.recaptchaenterprise.v1.RetrieveLegacySecretKeyResponse>;

                    /**
                     * Calls GetKey.
                     * @param request GetKeyRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Key
                     */
                    public getKey(request: google.cloud.recaptchaenterprise.v1.IGetKeyRequest, callback: google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseService.GetKeyCallback): void;

                    /**
                     * Calls GetKey.
                     * @param request GetKeyRequest message or plain object
                     * @returns Promise
                     */
                    public getKey(request: google.cloud.recaptchaenterprise.v1.IGetKeyRequest): Promise<google.cloud.recaptchaenterprise.v1.Key>;

                    /**
                     * Calls UpdateKey.
                     * @param request UpdateKeyRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Key
                     */
                    public updateKey(request: google.cloud.recaptchaenterprise.v1.IUpdateKeyRequest, callback: google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseService.UpdateKeyCallback): void;

                    /**
                     * Calls UpdateKey.
                     * @param request UpdateKeyRequest message or plain object
                     * @returns Promise
                     */
                    public updateKey(request: google.cloud.recaptchaenterprise.v1.IUpdateKeyRequest): Promise<google.cloud.recaptchaenterprise.v1.Key>;

                    /**
                     * Calls DeleteKey.
                     * @param request DeleteKeyRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Empty
                     */
                    public deleteKey(request: google.cloud.recaptchaenterprise.v1.IDeleteKeyRequest, callback: google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseService.DeleteKeyCallback): void;

                    /**
                     * Calls DeleteKey.
                     * @param request DeleteKeyRequest message or plain object
                     * @returns Promise
                     */
                    public deleteKey(request: google.cloud.recaptchaenterprise.v1.IDeleteKeyRequest): Promise<google.protobuf.Empty>;

                    /**
                     * Calls MigrateKey.
                     * @param request MigrateKeyRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Key
                     */
                    public migrateKey(request: google.cloud.recaptchaenterprise.v1.IMigrateKeyRequest, callback: google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseService.MigrateKeyCallback): void;

                    /**
                     * Calls MigrateKey.
                     * @param request MigrateKeyRequest message or plain object
                     * @returns Promise
                     */
                    public migrateKey(request: google.cloud.recaptchaenterprise.v1.IMigrateKeyRequest): Promise<google.cloud.recaptchaenterprise.v1.Key>;

                    /**
                     * Calls AddIpOverride.
                     * @param request AddIpOverrideRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and AddIpOverrideResponse
                     */
                    public addIpOverride(request: google.cloud.recaptchaenterprise.v1.IAddIpOverrideRequest, callback: google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseService.AddIpOverrideCallback): void;

                    /**
                     * Calls AddIpOverride.
                     * @param request AddIpOverrideRequest message or plain object
                     * @returns Promise
                     */
                    public addIpOverride(request: google.cloud.recaptchaenterprise.v1.IAddIpOverrideRequest): Promise<google.cloud.recaptchaenterprise.v1.AddIpOverrideResponse>;

                    /**
                     * Calls RemoveIpOverride.
                     * @param request RemoveIpOverrideRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and RemoveIpOverrideResponse
                     */
                    public removeIpOverride(request: google.cloud.recaptchaenterprise.v1.IRemoveIpOverrideRequest, callback: google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseService.RemoveIpOverrideCallback): void;

                    /**
                     * Calls RemoveIpOverride.
                     * @param request RemoveIpOverrideRequest message or plain object
                     * @returns Promise
                     */
                    public removeIpOverride(request: google.cloud.recaptchaenterprise.v1.IRemoveIpOverrideRequest): Promise<google.cloud.recaptchaenterprise.v1.RemoveIpOverrideResponse>;

                    /**
                     * Calls ListIpOverrides.
                     * @param request ListIpOverridesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListIpOverridesResponse
                     */
                    public listIpOverrides(request: google.cloud.recaptchaenterprise.v1.IListIpOverridesRequest, callback: google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseService.ListIpOverridesCallback): void;

                    /**
                     * Calls ListIpOverrides.
                     * @param request ListIpOverridesRequest message or plain object
                     * @returns Promise
                     */
                    public listIpOverrides(request: google.cloud.recaptchaenterprise.v1.IListIpOverridesRequest): Promise<google.cloud.recaptchaenterprise.v1.ListIpOverridesResponse>;

                    /**
                     * Calls GetMetrics.
                     * @param request GetMetricsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Metrics
                     */
                    public getMetrics(request: google.cloud.recaptchaenterprise.v1.IGetMetricsRequest, callback: google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseService.GetMetricsCallback): void;

                    /**
                     * Calls GetMetrics.
                     * @param request GetMetricsRequest message or plain object
                     * @returns Promise
                     */
                    public getMetrics(request: google.cloud.recaptchaenterprise.v1.IGetMetricsRequest): Promise<google.cloud.recaptchaenterprise.v1.Metrics>;

                    /**
                     * Calls CreateFirewallPolicy.
                     * @param request CreateFirewallPolicyRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and FirewallPolicy
                     */
                    public createFirewallPolicy(request: google.cloud.recaptchaenterprise.v1.ICreateFirewallPolicyRequest, callback: google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseService.CreateFirewallPolicyCallback): void;

                    /**
                     * Calls CreateFirewallPolicy.
                     * @param request CreateFirewallPolicyRequest message or plain object
                     * @returns Promise
                     */
                    public createFirewallPolicy(request: google.cloud.recaptchaenterprise.v1.ICreateFirewallPolicyRequest): Promise<google.cloud.recaptchaenterprise.v1.FirewallPolicy>;

                    /**
                     * Calls ListFirewallPolicies.
                     * @param request ListFirewallPoliciesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListFirewallPoliciesResponse
                     */
                    public listFirewallPolicies(request: google.cloud.recaptchaenterprise.v1.IListFirewallPoliciesRequest, callback: google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseService.ListFirewallPoliciesCallback): void;

                    /**
                     * Calls ListFirewallPolicies.
                     * @param request ListFirewallPoliciesRequest message or plain object
                     * @returns Promise
                     */
                    public listFirewallPolicies(request: google.cloud.recaptchaenterprise.v1.IListFirewallPoliciesRequest): Promise<google.cloud.recaptchaenterprise.v1.ListFirewallPoliciesResponse>;

                    /**
                     * Calls GetFirewallPolicy.
                     * @param request GetFirewallPolicyRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and FirewallPolicy
                     */
                    public getFirewallPolicy(request: google.cloud.recaptchaenterprise.v1.IGetFirewallPolicyRequest, callback: google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseService.GetFirewallPolicyCallback): void;

                    /**
                     * Calls GetFirewallPolicy.
                     * @param request GetFirewallPolicyRequest message or plain object
                     * @returns Promise
                     */
                    public getFirewallPolicy(request: google.cloud.recaptchaenterprise.v1.IGetFirewallPolicyRequest): Promise<google.cloud.recaptchaenterprise.v1.FirewallPolicy>;

                    /**
                     * Calls UpdateFirewallPolicy.
                     * @param request UpdateFirewallPolicyRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and FirewallPolicy
                     */
                    public updateFirewallPolicy(request: google.cloud.recaptchaenterprise.v1.IUpdateFirewallPolicyRequest, callback: google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseService.UpdateFirewallPolicyCallback): void;

                    /**
                     * Calls UpdateFirewallPolicy.
                     * @param request UpdateFirewallPolicyRequest message or plain object
                     * @returns Promise
                     */
                    public updateFirewallPolicy(request: google.cloud.recaptchaenterprise.v1.IUpdateFirewallPolicyRequest): Promise<google.cloud.recaptchaenterprise.v1.FirewallPolicy>;

                    /**
                     * Calls DeleteFirewallPolicy.
                     * @param request DeleteFirewallPolicyRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Empty
                     */
                    public deleteFirewallPolicy(request: google.cloud.recaptchaenterprise.v1.IDeleteFirewallPolicyRequest, callback: google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseService.DeleteFirewallPolicyCallback): void;

                    /**
                     * Calls DeleteFirewallPolicy.
                     * @param request DeleteFirewallPolicyRequest message or plain object
                     * @returns Promise
                     */
                    public deleteFirewallPolicy(request: google.cloud.recaptchaenterprise.v1.IDeleteFirewallPolicyRequest): Promise<google.protobuf.Empty>;

                    /**
                     * Calls ReorderFirewallPolicies.
                     * @param request ReorderFirewallPoliciesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ReorderFirewallPoliciesResponse
                     */
                    public reorderFirewallPolicies(request: google.cloud.recaptchaenterprise.v1.IReorderFirewallPoliciesRequest, callback: google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseService.ReorderFirewallPoliciesCallback): void;

                    /**
                     * Calls ReorderFirewallPolicies.
                     * @param request ReorderFirewallPoliciesRequest message or plain object
                     * @returns Promise
                     */
                    public reorderFirewallPolicies(request: google.cloud.recaptchaenterprise.v1.IReorderFirewallPoliciesRequest): Promise<google.cloud.recaptchaenterprise.v1.ReorderFirewallPoliciesResponse>;

                    /**
                     * Calls ListRelatedAccountGroups.
                     * @param request ListRelatedAccountGroupsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListRelatedAccountGroupsResponse
                     */
                    public listRelatedAccountGroups(request: google.cloud.recaptchaenterprise.v1.IListRelatedAccountGroupsRequest, callback: google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseService.ListRelatedAccountGroupsCallback): void;

                    /**
                     * Calls ListRelatedAccountGroups.
                     * @param request ListRelatedAccountGroupsRequest message or plain object
                     * @returns Promise
                     */
                    public listRelatedAccountGroups(request: google.cloud.recaptchaenterprise.v1.IListRelatedAccountGroupsRequest): Promise<google.cloud.recaptchaenterprise.v1.ListRelatedAccountGroupsResponse>;

                    /**
                     * Calls ListRelatedAccountGroupMemberships.
                     * @param request ListRelatedAccountGroupMembershipsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListRelatedAccountGroupMembershipsResponse
                     */
                    public listRelatedAccountGroupMemberships(request: google.cloud.recaptchaenterprise.v1.IListRelatedAccountGroupMembershipsRequest, callback: google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseService.ListRelatedAccountGroupMembershipsCallback): void;

                    /**
                     * Calls ListRelatedAccountGroupMemberships.
                     * @param request ListRelatedAccountGroupMembershipsRequest message or plain object
                     * @returns Promise
                     */
                    public listRelatedAccountGroupMemberships(request: google.cloud.recaptchaenterprise.v1.IListRelatedAccountGroupMembershipsRequest): Promise<google.cloud.recaptchaenterprise.v1.ListRelatedAccountGroupMembershipsResponse>;

                    /**
                     * Calls SearchRelatedAccountGroupMemberships.
                     * @param request SearchRelatedAccountGroupMembershipsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and SearchRelatedAccountGroupMembershipsResponse
                     */
                    public searchRelatedAccountGroupMemberships(request: google.cloud.recaptchaenterprise.v1.ISearchRelatedAccountGroupMembershipsRequest, callback: google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseService.SearchRelatedAccountGroupMembershipsCallback): void;

                    /**
                     * Calls SearchRelatedAccountGroupMemberships.
                     * @param request SearchRelatedAccountGroupMembershipsRequest message or plain object
                     * @returns Promise
                     */
                    public searchRelatedAccountGroupMemberships(request: google.cloud.recaptchaenterprise.v1.ISearchRelatedAccountGroupMembershipsRequest): Promise<google.cloud.recaptchaenterprise.v1.SearchRelatedAccountGroupMembershipsResponse>;
                }

                namespace RecaptchaEnterpriseService {

                    /**
                     * Callback as used by {@link google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseService|createAssessment}.
                     * @param error Error, if any
                     * @param [response] Assessment
                     */
                    type CreateAssessmentCallback = (error: (Error|null), response?: google.cloud.recaptchaenterprise.v1.Assessment) => void;

                    /**
                     * Callback as used by {@link google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseService|annotateAssessment}.
                     * @param error Error, if any
                     * @param [response] AnnotateAssessmentResponse
                     */
                    type AnnotateAssessmentCallback = (error: (Error|null), response?: google.cloud.recaptchaenterprise.v1.AnnotateAssessmentResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseService|createKey}.
                     * @param error Error, if any
                     * @param [response] Key
                     */
                    type CreateKeyCallback = (error: (Error|null), response?: google.cloud.recaptchaenterprise.v1.Key) => void;

                    /**
                     * Callback as used by {@link google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseService|listKeys}.
                     * @param error Error, if any
                     * @param [response] ListKeysResponse
                     */
                    type ListKeysCallback = (error: (Error|null), response?: google.cloud.recaptchaenterprise.v1.ListKeysResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseService|retrieveLegacySecretKey}.
                     * @param error Error, if any
                     * @param [response] RetrieveLegacySecretKeyResponse
                     */
                    type RetrieveLegacySecretKeyCallback = (error: (Error|null), response?: google.cloud.recaptchaenterprise.v1.RetrieveLegacySecretKeyResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseService|getKey}.
                     * @param error Error, if any
                     * @param [response] Key
                     */
                    type GetKeyCallback = (error: (Error|null), response?: google.cloud.recaptchaenterprise.v1.Key) => void;

                    /**
                     * Callback as used by {@link google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseService|updateKey}.
                     * @param error Error, if any
                     * @param [response] Key
                     */
                    type UpdateKeyCallback = (error: (Error|null), response?: google.cloud.recaptchaenterprise.v1.Key) => void;

                    /**
                     * Callback as used by {@link google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseService|deleteKey}.
                     * @param error Error, if any
                     * @param [response] Empty
                     */
                    type DeleteKeyCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                    /**
                     * Callback as used by {@link google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseService|migrateKey}.
                     * @param error Error, if any
                     * @param [response] Key
                     */
                    type MigrateKeyCallback = (error: (Error|null), response?: google.cloud.recaptchaenterprise.v1.Key) => void;

                    /**
                     * Callback as used by {@link google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseService|addIpOverride}.
                     * @param error Error, if any
                     * @param [response] AddIpOverrideResponse
                     */
                    type AddIpOverrideCallback = (error: (Error|null), response?: google.cloud.recaptchaenterprise.v1.AddIpOverrideResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseService|removeIpOverride}.
                     * @param error Error, if any
                     * @param [response] RemoveIpOverrideResponse
                     */
                    type RemoveIpOverrideCallback = (error: (Error|null), response?: google.cloud.recaptchaenterprise.v1.RemoveIpOverrideResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseService|listIpOverrides}.
                     * @param error Error, if any
                     * @param [response] ListIpOverridesResponse
                     */
                    type ListIpOverridesCallback = (error: (Error|null), response?: google.cloud.recaptchaenterprise.v1.ListIpOverridesResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseService|getMetrics}.
                     * @param error Error, if any
                     * @param [response] Metrics
                     */
                    type GetMetricsCallback = (error: (Error|null), response?: google.cloud.recaptchaenterprise.v1.Metrics) => void;

                    /**
                     * Callback as used by {@link google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseService|createFirewallPolicy}.
                     * @param error Error, if any
                     * @param [response] FirewallPolicy
                     */
                    type CreateFirewallPolicyCallback = (error: (Error|null), response?: google.cloud.recaptchaenterprise.v1.FirewallPolicy) => void;

                    /**
                     * Callback as used by {@link google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseService|listFirewallPolicies}.
                     * @param error Error, if any
                     * @param [response] ListFirewallPoliciesResponse
                     */
                    type ListFirewallPoliciesCallback = (error: (Error|null), response?: google.cloud.recaptchaenterprise.v1.ListFirewallPoliciesResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseService|getFirewallPolicy}.
                     * @param error Error, if any
                     * @param [response] FirewallPolicy
                     */
                    type GetFirewallPolicyCallback = (error: (Error|null), response?: google.cloud.recaptchaenterprise.v1.FirewallPolicy) => void;

                    /**
                     * Callback as used by {@link google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseService|updateFirewallPolicy}.
                     * @param error Error, if any
                     * @param [response] FirewallPolicy
                     */
                    type UpdateFirewallPolicyCallback = (error: (Error|null), response?: google.cloud.recaptchaenterprise.v1.FirewallPolicy) => void;

                    /**
                     * Callback as used by {@link google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseService|deleteFirewallPolicy}.
                     * @param error Error, if any
                     * @param [response] Empty
                     */
                    type DeleteFirewallPolicyCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                    /**
                     * Callback as used by {@link google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseService|reorderFirewallPolicies}.
                     * @param error Error, if any
                     * @param [response] ReorderFirewallPoliciesResponse
                     */
                    type ReorderFirewallPoliciesCallback = (error: (Error|null), response?: google.cloud.recaptchaenterprise.v1.ReorderFirewallPoliciesResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseService|listRelatedAccountGroups}.
                     * @param error Error, if any
                     * @param [response] ListRelatedAccountGroupsResponse
                     */
                    type ListRelatedAccountGroupsCallback = (error: (Error|null), response?: google.cloud.recaptchaenterprise.v1.ListRelatedAccountGroupsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseService|listRelatedAccountGroupMemberships}.
                     * @param error Error, if any
                     * @param [response] ListRelatedAccountGroupMembershipsResponse
                     */
                    type ListRelatedAccountGroupMembershipsCallback = (error: (Error|null), response?: google.cloud.recaptchaenterprise.v1.ListRelatedAccountGroupMembershipsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseService|searchRelatedAccountGroupMemberships}.
                     * @param error Error, if any
                     * @param [response] SearchRelatedAccountGroupMembershipsResponse
                     */
                    type SearchRelatedAccountGroupMembershipsCallback = (error: (Error|null), response?: google.cloud.recaptchaenterprise.v1.SearchRelatedAccountGroupMembershipsResponse) => void;
                }

                /** Properties of a CreateAssessmentRequest. */
                interface ICreateAssessmentRequest {

                    /** CreateAssessmentRequest parent */
                    parent?: (string|null);

                    /** CreateAssessmentRequest assessment */
                    assessment?: (google.cloud.recaptchaenterprise.v1.IAssessment|null);
                }

                /** Represents a CreateAssessmentRequest. */
                class CreateAssessmentRequest implements ICreateAssessmentRequest {

                    /**
                     * Constructs a new CreateAssessmentRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recaptchaenterprise.v1.ICreateAssessmentRequest);

                    /** CreateAssessmentRequest parent. */
                    public parent: string;

                    /** CreateAssessmentRequest assessment. */
                    public assessment?: (google.cloud.recaptchaenterprise.v1.IAssessment|null);

                    /**
                     * Creates a new CreateAssessmentRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateAssessmentRequest instance
                     */
                    public static create(properties?: google.cloud.recaptchaenterprise.v1.ICreateAssessmentRequest): google.cloud.recaptchaenterprise.v1.CreateAssessmentRequest;

                    /**
                     * Encodes the specified CreateAssessmentRequest message. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.CreateAssessmentRequest.verify|verify} messages.
                     * @param message CreateAssessmentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recaptchaenterprise.v1.ICreateAssessmentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateAssessmentRequest message, length delimited. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.CreateAssessmentRequest.verify|verify} messages.
                     * @param message CreateAssessmentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recaptchaenterprise.v1.ICreateAssessmentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateAssessmentRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateAssessmentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recaptchaenterprise.v1.CreateAssessmentRequest;

                    /**
                     * Decodes a CreateAssessmentRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateAssessmentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recaptchaenterprise.v1.CreateAssessmentRequest;

                    /**
                     * Verifies a CreateAssessmentRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateAssessmentRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateAssessmentRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recaptchaenterprise.v1.CreateAssessmentRequest;

                    /**
                     * Creates a plain object from a CreateAssessmentRequest message. Also converts values to other types if specified.
                     * @param message CreateAssessmentRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recaptchaenterprise.v1.CreateAssessmentRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateAssessmentRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateAssessmentRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a TransactionEvent. */
                interface ITransactionEvent {

                    /** TransactionEvent eventType */
                    eventType?: (google.cloud.recaptchaenterprise.v1.TransactionEvent.TransactionEventType|keyof typeof google.cloud.recaptchaenterprise.v1.TransactionEvent.TransactionEventType|null);

                    /** TransactionEvent reason */
                    reason?: (string|null);

                    /** TransactionEvent value */
                    value?: (number|null);

                    /** TransactionEvent eventTime */
                    eventTime?: (google.protobuf.ITimestamp|null);
                }

                /** Represents a TransactionEvent. */
                class TransactionEvent implements ITransactionEvent {

                    /**
                     * Constructs a new TransactionEvent.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recaptchaenterprise.v1.ITransactionEvent);

                    /** TransactionEvent eventType. */
                    public eventType: (google.cloud.recaptchaenterprise.v1.TransactionEvent.TransactionEventType|keyof typeof google.cloud.recaptchaenterprise.v1.TransactionEvent.TransactionEventType);

                    /** TransactionEvent reason. */
                    public reason: string;

                    /** TransactionEvent value. */
                    public value: number;

                    /** TransactionEvent eventTime. */
                    public eventTime?: (google.protobuf.ITimestamp|null);

                    /**
                     * Creates a new TransactionEvent instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TransactionEvent instance
                     */
                    public static create(properties?: google.cloud.recaptchaenterprise.v1.ITransactionEvent): google.cloud.recaptchaenterprise.v1.TransactionEvent;

                    /**
                     * Encodes the specified TransactionEvent message. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.TransactionEvent.verify|verify} messages.
                     * @param message TransactionEvent message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recaptchaenterprise.v1.ITransactionEvent, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TransactionEvent message, length delimited. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.TransactionEvent.verify|verify} messages.
                     * @param message TransactionEvent message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recaptchaenterprise.v1.ITransactionEvent, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TransactionEvent message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TransactionEvent
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recaptchaenterprise.v1.TransactionEvent;

                    /**
                     * Decodes a TransactionEvent message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TransactionEvent
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recaptchaenterprise.v1.TransactionEvent;

                    /**
                     * Verifies a TransactionEvent message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TransactionEvent message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TransactionEvent
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recaptchaenterprise.v1.TransactionEvent;

                    /**
                     * Creates a plain object from a TransactionEvent message. Also converts values to other types if specified.
                     * @param message TransactionEvent
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recaptchaenterprise.v1.TransactionEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TransactionEvent to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for TransactionEvent
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace TransactionEvent {

                    /** TransactionEventType enum. */
                    enum TransactionEventType {
                        TRANSACTION_EVENT_TYPE_UNSPECIFIED = 0,
                        MERCHANT_APPROVE = 1,
                        MERCHANT_DENY = 2,
                        MANUAL_REVIEW = 3,
                        AUTHORIZATION = 4,
                        AUTHORIZATION_DECLINE = 5,
                        PAYMENT_CAPTURE = 6,
                        PAYMENT_CAPTURE_DECLINE = 7,
                        CANCEL = 8,
                        CHARGEBACK_INQUIRY = 9,
                        CHARGEBACK_ALERT = 10,
                        FRAUD_NOTIFICATION = 11,
                        CHARGEBACK = 12,
                        CHARGEBACK_REPRESENTMENT = 13,
                        CHARGEBACK_REVERSE = 14,
                        REFUND_REQUEST = 15,
                        REFUND_DECLINE = 16,
                        REFUND = 17,
                        REFUND_REVERSE = 18
                    }
                }

                /** Properties of an AnnotateAssessmentRequest. */
                interface IAnnotateAssessmentRequest {

                    /** AnnotateAssessmentRequest name */
                    name?: (string|null);

                    /** AnnotateAssessmentRequest annotation */
                    annotation?: (google.cloud.recaptchaenterprise.v1.AnnotateAssessmentRequest.Annotation|keyof typeof google.cloud.recaptchaenterprise.v1.AnnotateAssessmentRequest.Annotation|null);

                    /** AnnotateAssessmentRequest reasons */
                    reasons?: (google.cloud.recaptchaenterprise.v1.AnnotateAssessmentRequest.Reason[]|null);

                    /** AnnotateAssessmentRequest accountId */
                    accountId?: (string|null);

                    /** AnnotateAssessmentRequest hashedAccountId */
                    hashedAccountId?: (Uint8Array|string|null);

                    /** AnnotateAssessmentRequest transactionEvent */
                    transactionEvent?: (google.cloud.recaptchaenterprise.v1.ITransactionEvent|null);
                }

                /** Represents an AnnotateAssessmentRequest. */
                class AnnotateAssessmentRequest implements IAnnotateAssessmentRequest {

                    /**
                     * Constructs a new AnnotateAssessmentRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recaptchaenterprise.v1.IAnnotateAssessmentRequest);

                    /** AnnotateAssessmentRequest name. */
                    public name: string;

                    /** AnnotateAssessmentRequest annotation. */
                    public annotation: (google.cloud.recaptchaenterprise.v1.AnnotateAssessmentRequest.Annotation|keyof typeof google.cloud.recaptchaenterprise.v1.AnnotateAssessmentRequest.Annotation);

                    /** AnnotateAssessmentRequest reasons. */
                    public reasons: google.cloud.recaptchaenterprise.v1.AnnotateAssessmentRequest.Reason[];

                    /** AnnotateAssessmentRequest accountId. */
                    public accountId: string;

                    /** AnnotateAssessmentRequest hashedAccountId. */
                    public hashedAccountId: (Uint8Array|string);

                    /** AnnotateAssessmentRequest transactionEvent. */
                    public transactionEvent?: (google.cloud.recaptchaenterprise.v1.ITransactionEvent|null);

                    /**
                     * Creates a new AnnotateAssessmentRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AnnotateAssessmentRequest instance
                     */
                    public static create(properties?: google.cloud.recaptchaenterprise.v1.IAnnotateAssessmentRequest): google.cloud.recaptchaenterprise.v1.AnnotateAssessmentRequest;

                    /**
                     * Encodes the specified AnnotateAssessmentRequest message. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.AnnotateAssessmentRequest.verify|verify} messages.
                     * @param message AnnotateAssessmentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recaptchaenterprise.v1.IAnnotateAssessmentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AnnotateAssessmentRequest message, length delimited. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.AnnotateAssessmentRequest.verify|verify} messages.
                     * @param message AnnotateAssessmentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recaptchaenterprise.v1.IAnnotateAssessmentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AnnotateAssessmentRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AnnotateAssessmentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recaptchaenterprise.v1.AnnotateAssessmentRequest;

                    /**
                     * Decodes an AnnotateAssessmentRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AnnotateAssessmentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recaptchaenterprise.v1.AnnotateAssessmentRequest;

                    /**
                     * Verifies an AnnotateAssessmentRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AnnotateAssessmentRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AnnotateAssessmentRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recaptchaenterprise.v1.AnnotateAssessmentRequest;

                    /**
                     * Creates a plain object from an AnnotateAssessmentRequest message. Also converts values to other types if specified.
                     * @param message AnnotateAssessmentRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recaptchaenterprise.v1.AnnotateAssessmentRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AnnotateAssessmentRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for AnnotateAssessmentRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace AnnotateAssessmentRequest {

                    /** Annotation enum. */
                    enum Annotation {
                        ANNOTATION_UNSPECIFIED = 0,
                        LEGITIMATE = 1,
                        FRAUDULENT = 2,
                        PASSWORD_CORRECT = 3,
                        PASSWORD_INCORRECT = 4
                    }

                    /** Reason enum. */
                    enum Reason {
                        REASON_UNSPECIFIED = 0,
                        CHARGEBACK = 1,
                        CHARGEBACK_FRAUD = 8,
                        CHARGEBACK_DISPUTE = 9,
                        REFUND = 10,
                        REFUND_FRAUD = 11,
                        TRANSACTION_ACCEPTED = 12,
                        TRANSACTION_DECLINED = 13,
                        PAYMENT_HEURISTICS = 2,
                        INITIATED_TWO_FACTOR = 7,
                        PASSED_TWO_FACTOR = 3,
                        FAILED_TWO_FACTOR = 4,
                        CORRECT_PASSWORD = 5,
                        INCORRECT_PASSWORD = 6,
                        SOCIAL_SPAM = 14
                    }
                }

                /** Properties of an AnnotateAssessmentResponse. */
                interface IAnnotateAssessmentResponse {
                }

                /** Represents an AnnotateAssessmentResponse. */
                class AnnotateAssessmentResponse implements IAnnotateAssessmentResponse {

                    /**
                     * Constructs a new AnnotateAssessmentResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recaptchaenterprise.v1.IAnnotateAssessmentResponse);

                    /**
                     * Creates a new AnnotateAssessmentResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AnnotateAssessmentResponse instance
                     */
                    public static create(properties?: google.cloud.recaptchaenterprise.v1.IAnnotateAssessmentResponse): google.cloud.recaptchaenterprise.v1.AnnotateAssessmentResponse;

                    /**
                     * Encodes the specified AnnotateAssessmentResponse message. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.AnnotateAssessmentResponse.verify|verify} messages.
                     * @param message AnnotateAssessmentResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recaptchaenterprise.v1.IAnnotateAssessmentResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AnnotateAssessmentResponse message, length delimited. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.AnnotateAssessmentResponse.verify|verify} messages.
                     * @param message AnnotateAssessmentResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recaptchaenterprise.v1.IAnnotateAssessmentResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AnnotateAssessmentResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AnnotateAssessmentResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recaptchaenterprise.v1.AnnotateAssessmentResponse;

                    /**
                     * Decodes an AnnotateAssessmentResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AnnotateAssessmentResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recaptchaenterprise.v1.AnnotateAssessmentResponse;

                    /**
                     * Verifies an AnnotateAssessmentResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AnnotateAssessmentResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AnnotateAssessmentResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recaptchaenterprise.v1.AnnotateAssessmentResponse;

                    /**
                     * Creates a plain object from an AnnotateAssessmentResponse message. Also converts values to other types if specified.
                     * @param message AnnotateAssessmentResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recaptchaenterprise.v1.AnnotateAssessmentResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AnnotateAssessmentResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for AnnotateAssessmentResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an EndpointVerificationInfo. */
                interface IEndpointVerificationInfo {

                    /** EndpointVerificationInfo emailAddress */
                    emailAddress?: (string|null);

                    /** EndpointVerificationInfo phoneNumber */
                    phoneNumber?: (string|null);

                    /** EndpointVerificationInfo requestToken */
                    requestToken?: (string|null);

                    /** EndpointVerificationInfo lastVerificationTime */
                    lastVerificationTime?: (google.protobuf.ITimestamp|null);
                }

                /** Represents an EndpointVerificationInfo. */
                class EndpointVerificationInfo implements IEndpointVerificationInfo {

                    /**
                     * Constructs a new EndpointVerificationInfo.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recaptchaenterprise.v1.IEndpointVerificationInfo);

                    /** EndpointVerificationInfo emailAddress. */
                    public emailAddress?: (string|null);

                    /** EndpointVerificationInfo phoneNumber. */
                    public phoneNumber?: (string|null);

                    /** EndpointVerificationInfo requestToken. */
                    public requestToken: string;

                    /** EndpointVerificationInfo lastVerificationTime. */
                    public lastVerificationTime?: (google.protobuf.ITimestamp|null);

                    /** EndpointVerificationInfo endpoint. */
                    public endpoint?: ("emailAddress"|"phoneNumber");

                    /**
                     * Creates a new EndpointVerificationInfo instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns EndpointVerificationInfo instance
                     */
                    public static create(properties?: google.cloud.recaptchaenterprise.v1.IEndpointVerificationInfo): google.cloud.recaptchaenterprise.v1.EndpointVerificationInfo;

                    /**
                     * Encodes the specified EndpointVerificationInfo message. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.EndpointVerificationInfo.verify|verify} messages.
                     * @param message EndpointVerificationInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recaptchaenterprise.v1.IEndpointVerificationInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified EndpointVerificationInfo message, length delimited. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.EndpointVerificationInfo.verify|verify} messages.
                     * @param message EndpointVerificationInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recaptchaenterprise.v1.IEndpointVerificationInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an EndpointVerificationInfo message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns EndpointVerificationInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recaptchaenterprise.v1.EndpointVerificationInfo;

                    /**
                     * Decodes an EndpointVerificationInfo message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns EndpointVerificationInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recaptchaenterprise.v1.EndpointVerificationInfo;

                    /**
                     * Verifies an EndpointVerificationInfo message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an EndpointVerificationInfo message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns EndpointVerificationInfo
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recaptchaenterprise.v1.EndpointVerificationInfo;

                    /**
                     * Creates a plain object from an EndpointVerificationInfo message. Also converts values to other types if specified.
                     * @param message EndpointVerificationInfo
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recaptchaenterprise.v1.EndpointVerificationInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this EndpointVerificationInfo to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for EndpointVerificationInfo
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an AccountVerificationInfo. */
                interface IAccountVerificationInfo {

                    /** AccountVerificationInfo endpoints */
                    endpoints?: (google.cloud.recaptchaenterprise.v1.IEndpointVerificationInfo[]|null);

                    /** AccountVerificationInfo languageCode */
                    languageCode?: (string|null);

                    /** AccountVerificationInfo latestVerificationResult */
                    latestVerificationResult?: (google.cloud.recaptchaenterprise.v1.AccountVerificationInfo.Result|keyof typeof google.cloud.recaptchaenterprise.v1.AccountVerificationInfo.Result|null);

                    /** AccountVerificationInfo username */
                    username?: (string|null);
                }

                /** Represents an AccountVerificationInfo. */
                class AccountVerificationInfo implements IAccountVerificationInfo {

                    /**
                     * Constructs a new AccountVerificationInfo.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recaptchaenterprise.v1.IAccountVerificationInfo);

                    /** AccountVerificationInfo endpoints. */
                    public endpoints: google.cloud.recaptchaenterprise.v1.IEndpointVerificationInfo[];

                    /** AccountVerificationInfo languageCode. */
                    public languageCode: string;

                    /** AccountVerificationInfo latestVerificationResult. */
                    public latestVerificationResult: (google.cloud.recaptchaenterprise.v1.AccountVerificationInfo.Result|keyof typeof google.cloud.recaptchaenterprise.v1.AccountVerificationInfo.Result);

                    /** AccountVerificationInfo username. */
                    public username: string;

                    /**
                     * Creates a new AccountVerificationInfo instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AccountVerificationInfo instance
                     */
                    public static create(properties?: google.cloud.recaptchaenterprise.v1.IAccountVerificationInfo): google.cloud.recaptchaenterprise.v1.AccountVerificationInfo;

                    /**
                     * Encodes the specified AccountVerificationInfo message. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.AccountVerificationInfo.verify|verify} messages.
                     * @param message AccountVerificationInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recaptchaenterprise.v1.IAccountVerificationInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AccountVerificationInfo message, length delimited. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.AccountVerificationInfo.verify|verify} messages.
                     * @param message AccountVerificationInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recaptchaenterprise.v1.IAccountVerificationInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AccountVerificationInfo message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AccountVerificationInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recaptchaenterprise.v1.AccountVerificationInfo;

                    /**
                     * Decodes an AccountVerificationInfo message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AccountVerificationInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recaptchaenterprise.v1.AccountVerificationInfo;

                    /**
                     * Verifies an AccountVerificationInfo message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AccountVerificationInfo message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AccountVerificationInfo
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recaptchaenterprise.v1.AccountVerificationInfo;

                    /**
                     * Creates a plain object from an AccountVerificationInfo message. Also converts values to other types if specified.
                     * @param message AccountVerificationInfo
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recaptchaenterprise.v1.AccountVerificationInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AccountVerificationInfo to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for AccountVerificationInfo
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace AccountVerificationInfo {

                    /** Result enum. */
                    enum Result {
                        RESULT_UNSPECIFIED = 0,
                        SUCCESS_USER_VERIFIED = 1,
                        ERROR_USER_NOT_VERIFIED = 2,
                        ERROR_SITE_ONBOARDING_INCOMPLETE = 3,
                        ERROR_RECIPIENT_NOT_ALLOWED = 4,
                        ERROR_RECIPIENT_ABUSE_LIMIT_EXHAUSTED = 5,
                        ERROR_CRITICAL_INTERNAL = 6,
                        ERROR_CUSTOMER_QUOTA_EXHAUSTED = 7,
                        ERROR_VERIFICATION_BYPASSED = 8,
                        ERROR_VERDICT_MISMATCH = 9
                    }
                }

                /** Properties of a PrivatePasswordLeakVerification. */
                interface IPrivatePasswordLeakVerification {

                    /** PrivatePasswordLeakVerification lookupHashPrefix */
                    lookupHashPrefix?: (Uint8Array|string|null);

                    /** PrivatePasswordLeakVerification encryptedUserCredentialsHash */
                    encryptedUserCredentialsHash?: (Uint8Array|string|null);

                    /** PrivatePasswordLeakVerification encryptedLeakMatchPrefixes */
                    encryptedLeakMatchPrefixes?: (Uint8Array[]|null);

                    /** PrivatePasswordLeakVerification reencryptedUserCredentialsHash */
                    reencryptedUserCredentialsHash?: (Uint8Array|string|null);
                }

                /** Represents a PrivatePasswordLeakVerification. */
                class PrivatePasswordLeakVerification implements IPrivatePasswordLeakVerification {

                    /**
                     * Constructs a new PrivatePasswordLeakVerification.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recaptchaenterprise.v1.IPrivatePasswordLeakVerification);

                    /** PrivatePasswordLeakVerification lookupHashPrefix. */
                    public lookupHashPrefix: (Uint8Array|string);

                    /** PrivatePasswordLeakVerification encryptedUserCredentialsHash. */
                    public encryptedUserCredentialsHash: (Uint8Array|string);

                    /** PrivatePasswordLeakVerification encryptedLeakMatchPrefixes. */
                    public encryptedLeakMatchPrefixes: Uint8Array[];

                    /** PrivatePasswordLeakVerification reencryptedUserCredentialsHash. */
                    public reencryptedUserCredentialsHash: (Uint8Array|string);

                    /**
                     * Creates a new PrivatePasswordLeakVerification instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PrivatePasswordLeakVerification instance
                     */
                    public static create(properties?: google.cloud.recaptchaenterprise.v1.IPrivatePasswordLeakVerification): google.cloud.recaptchaenterprise.v1.PrivatePasswordLeakVerification;

                    /**
                     * Encodes the specified PrivatePasswordLeakVerification message. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.PrivatePasswordLeakVerification.verify|verify} messages.
                     * @param message PrivatePasswordLeakVerification message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recaptchaenterprise.v1.IPrivatePasswordLeakVerification, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PrivatePasswordLeakVerification message, length delimited. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.PrivatePasswordLeakVerification.verify|verify} messages.
                     * @param message PrivatePasswordLeakVerification message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recaptchaenterprise.v1.IPrivatePasswordLeakVerification, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PrivatePasswordLeakVerification message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PrivatePasswordLeakVerification
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recaptchaenterprise.v1.PrivatePasswordLeakVerification;

                    /**
                     * Decodes a PrivatePasswordLeakVerification message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PrivatePasswordLeakVerification
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recaptchaenterprise.v1.PrivatePasswordLeakVerification;

                    /**
                     * Verifies a PrivatePasswordLeakVerification message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PrivatePasswordLeakVerification message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PrivatePasswordLeakVerification
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recaptchaenterprise.v1.PrivatePasswordLeakVerification;

                    /**
                     * Creates a plain object from a PrivatePasswordLeakVerification message. Also converts values to other types if specified.
                     * @param message PrivatePasswordLeakVerification
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recaptchaenterprise.v1.PrivatePasswordLeakVerification, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PrivatePasswordLeakVerification to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for PrivatePasswordLeakVerification
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an Assessment. */
                interface IAssessment {

                    /** Assessment name */
                    name?: (string|null);

                    /** Assessment event */
                    event?: (google.cloud.recaptchaenterprise.v1.IEvent|null);

                    /** Assessment riskAnalysis */
                    riskAnalysis?: (google.cloud.recaptchaenterprise.v1.IRiskAnalysis|null);

                    /** Assessment tokenProperties */
                    tokenProperties?: (google.cloud.recaptchaenterprise.v1.ITokenProperties|null);

                    /** Assessment accountVerification */
                    accountVerification?: (google.cloud.recaptchaenterprise.v1.IAccountVerificationInfo|null);

                    /** Assessment accountDefenderAssessment */
                    accountDefenderAssessment?: (google.cloud.recaptchaenterprise.v1.IAccountDefenderAssessment|null);

                    /** Assessment privatePasswordLeakVerification */
                    privatePasswordLeakVerification?: (google.cloud.recaptchaenterprise.v1.IPrivatePasswordLeakVerification|null);

                    /** Assessment firewallPolicyAssessment */
                    firewallPolicyAssessment?: (google.cloud.recaptchaenterprise.v1.IFirewallPolicyAssessment|null);

                    /** Assessment fraudPreventionAssessment */
                    fraudPreventionAssessment?: (google.cloud.recaptchaenterprise.v1.IFraudPreventionAssessment|null);

                    /** Assessment fraudSignals */
                    fraudSignals?: (google.cloud.recaptchaenterprise.v1.IFraudSignals|null);

                    /** Assessment phoneFraudAssessment */
                    phoneFraudAssessment?: (google.cloud.recaptchaenterprise.v1.IPhoneFraudAssessment|null);

                    /** Assessment assessmentEnvironment */
                    assessmentEnvironment?: (google.cloud.recaptchaenterprise.v1.IAssessmentEnvironment|null);
                }

                /** Represents an Assessment. */
                class Assessment implements IAssessment {

                    /**
                     * Constructs a new Assessment.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recaptchaenterprise.v1.IAssessment);

                    /** Assessment name. */
                    public name: string;

                    /** Assessment event. */
                    public event?: (google.cloud.recaptchaenterprise.v1.IEvent|null);

                    /** Assessment riskAnalysis. */
                    public riskAnalysis?: (google.cloud.recaptchaenterprise.v1.IRiskAnalysis|null);

                    /** Assessment tokenProperties. */
                    public tokenProperties?: (google.cloud.recaptchaenterprise.v1.ITokenProperties|null);

                    /** Assessment accountVerification. */
                    public accountVerification?: (google.cloud.recaptchaenterprise.v1.IAccountVerificationInfo|null);

                    /** Assessment accountDefenderAssessment. */
                    public accountDefenderAssessment?: (google.cloud.recaptchaenterprise.v1.IAccountDefenderAssessment|null);

                    /** Assessment privatePasswordLeakVerification. */
                    public privatePasswordLeakVerification?: (google.cloud.recaptchaenterprise.v1.IPrivatePasswordLeakVerification|null);

                    /** Assessment firewallPolicyAssessment. */
                    public firewallPolicyAssessment?: (google.cloud.recaptchaenterprise.v1.IFirewallPolicyAssessment|null);

                    /** Assessment fraudPreventionAssessment. */
                    public fraudPreventionAssessment?: (google.cloud.recaptchaenterprise.v1.IFraudPreventionAssessment|null);

                    /** Assessment fraudSignals. */
                    public fraudSignals?: (google.cloud.recaptchaenterprise.v1.IFraudSignals|null);

                    /** Assessment phoneFraudAssessment. */
                    public phoneFraudAssessment?: (google.cloud.recaptchaenterprise.v1.IPhoneFraudAssessment|null);

                    /** Assessment assessmentEnvironment. */
                    public assessmentEnvironment?: (google.cloud.recaptchaenterprise.v1.IAssessmentEnvironment|null);

                    /**
                     * Creates a new Assessment instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Assessment instance
                     */
                    public static create(properties?: google.cloud.recaptchaenterprise.v1.IAssessment): google.cloud.recaptchaenterprise.v1.Assessment;

                    /**
                     * Encodes the specified Assessment message. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.Assessment.verify|verify} messages.
                     * @param message Assessment message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recaptchaenterprise.v1.IAssessment, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Assessment message, length delimited. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.Assessment.verify|verify} messages.
                     * @param message Assessment message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recaptchaenterprise.v1.IAssessment, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an Assessment message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Assessment
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recaptchaenterprise.v1.Assessment;

                    /**
                     * Decodes an Assessment message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Assessment
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recaptchaenterprise.v1.Assessment;

                    /**
                     * Verifies an Assessment message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an Assessment message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Assessment
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recaptchaenterprise.v1.Assessment;

                    /**
                     * Creates a plain object from an Assessment message. Also converts values to other types if specified.
                     * @param message Assessment
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recaptchaenterprise.v1.Assessment, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Assessment to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Assessment
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an Event. */
                interface IEvent {

                    /** Event token */
                    token?: (string|null);

                    /** Event siteKey */
                    siteKey?: (string|null);

                    /** Event userAgent */
                    userAgent?: (string|null);

                    /** Event userIpAddress */
                    userIpAddress?: (string|null);

                    /** Event expectedAction */
                    expectedAction?: (string|null);

                    /** Event hashedAccountId */
                    hashedAccountId?: (Uint8Array|string|null);

                    /** Event express */
                    express?: (boolean|null);

                    /** Event requestedUri */
                    requestedUri?: (string|null);

                    /** Event wafTokenAssessment */
                    wafTokenAssessment?: (boolean|null);

                    /** Event ja3 */
                    ja3?: (string|null);

                    /** Event ja4 */
                    ja4?: (string|null);

                    /** Event headers */
                    headers?: (string[]|null);

                    /** Event firewallPolicyEvaluation */
                    firewallPolicyEvaluation?: (boolean|null);

                    /** Event transactionData */
                    transactionData?: (google.cloud.recaptchaenterprise.v1.ITransactionData|null);

                    /** Event userInfo */
                    userInfo?: (google.cloud.recaptchaenterprise.v1.IUserInfo|null);

                    /** Event fraudPrevention */
                    fraudPrevention?: (google.cloud.recaptchaenterprise.v1.Event.FraudPrevention|keyof typeof google.cloud.recaptchaenterprise.v1.Event.FraudPrevention|null);
                }

                /** Represents an Event. */
                class Event implements IEvent {

                    /**
                     * Constructs a new Event.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recaptchaenterprise.v1.IEvent);

                    /** Event token. */
                    public token: string;

                    /** Event siteKey. */
                    public siteKey: string;

                    /** Event userAgent. */
                    public userAgent: string;

                    /** Event userIpAddress. */
                    public userIpAddress: string;

                    /** Event expectedAction. */
                    public expectedAction: string;

                    /** Event hashedAccountId. */
                    public hashedAccountId: (Uint8Array|string);

                    /** Event express. */
                    public express: boolean;

                    /** Event requestedUri. */
                    public requestedUri: string;

                    /** Event wafTokenAssessment. */
                    public wafTokenAssessment: boolean;

                    /** Event ja3. */
                    public ja3: string;

                    /** Event ja4. */
                    public ja4: string;

                    /** Event headers. */
                    public headers: string[];

                    /** Event firewallPolicyEvaluation. */
                    public firewallPolicyEvaluation: boolean;

                    /** Event transactionData. */
                    public transactionData?: (google.cloud.recaptchaenterprise.v1.ITransactionData|null);

                    /** Event userInfo. */
                    public userInfo?: (google.cloud.recaptchaenterprise.v1.IUserInfo|null);

                    /** Event fraudPrevention. */
                    public fraudPrevention: (google.cloud.recaptchaenterprise.v1.Event.FraudPrevention|keyof typeof google.cloud.recaptchaenterprise.v1.Event.FraudPrevention);

                    /**
                     * Creates a new Event instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Event instance
                     */
                    public static create(properties?: google.cloud.recaptchaenterprise.v1.IEvent): google.cloud.recaptchaenterprise.v1.Event;

                    /**
                     * Encodes the specified Event message. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.Event.verify|verify} messages.
                     * @param message Event message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recaptchaenterprise.v1.IEvent, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Event message, length delimited. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.Event.verify|verify} messages.
                     * @param message Event message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recaptchaenterprise.v1.IEvent, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an Event message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Event
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recaptchaenterprise.v1.Event;

                    /**
                     * Decodes an Event message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Event
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recaptchaenterprise.v1.Event;

                    /**
                     * Verifies an Event message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an Event message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Event
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recaptchaenterprise.v1.Event;

                    /**
                     * Creates a plain object from an Event message. Also converts values to other types if specified.
                     * @param message Event
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recaptchaenterprise.v1.Event, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Event to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Event
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace Event {

                    /** FraudPrevention enum. */
                    enum FraudPrevention {
                        FRAUD_PREVENTION_UNSPECIFIED = 0,
                        ENABLED = 1,
                        DISABLED = 2
                    }
                }

                /** Properties of a TransactionData. */
                interface ITransactionData {

                    /** TransactionData transactionId */
                    transactionId?: (string|null);

                    /** TransactionData paymentMethod */
                    paymentMethod?: (string|null);

                    /** TransactionData cardBin */
                    cardBin?: (string|null);

                    /** TransactionData cardLastFour */
                    cardLastFour?: (string|null);

                    /** TransactionData currencyCode */
                    currencyCode?: (string|null);

                    /** TransactionData value */
                    value?: (number|null);

                    /** TransactionData shippingValue */
                    shippingValue?: (number|null);

                    /** TransactionData shippingAddress */
                    shippingAddress?: (google.cloud.recaptchaenterprise.v1.TransactionData.IAddress|null);

                    /** TransactionData billingAddress */
                    billingAddress?: (google.cloud.recaptchaenterprise.v1.TransactionData.IAddress|null);

                    /** TransactionData user */
                    user?: (google.cloud.recaptchaenterprise.v1.TransactionData.IUser|null);

                    /** TransactionData merchants */
                    merchants?: (google.cloud.recaptchaenterprise.v1.TransactionData.IUser[]|null);

                    /** TransactionData items */
                    items?: (google.cloud.recaptchaenterprise.v1.TransactionData.IItem[]|null);

                    /** TransactionData gatewayInfo */
                    gatewayInfo?: (google.cloud.recaptchaenterprise.v1.TransactionData.IGatewayInfo|null);
                }

                /** Represents a TransactionData. */
                class TransactionData implements ITransactionData {

                    /**
                     * Constructs a new TransactionData.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recaptchaenterprise.v1.ITransactionData);

                    /** TransactionData transactionId. */
                    public transactionId?: (string|null);

                    /** TransactionData paymentMethod. */
                    public paymentMethod: string;

                    /** TransactionData cardBin. */
                    public cardBin: string;

                    /** TransactionData cardLastFour. */
                    public cardLastFour: string;

                    /** TransactionData currencyCode. */
                    public currencyCode: string;

                    /** TransactionData value. */
                    public value: number;

                    /** TransactionData shippingValue. */
                    public shippingValue: number;

                    /** TransactionData shippingAddress. */
                    public shippingAddress?: (google.cloud.recaptchaenterprise.v1.TransactionData.IAddress|null);

                    /** TransactionData billingAddress. */
                    public billingAddress?: (google.cloud.recaptchaenterprise.v1.TransactionData.IAddress|null);

                    /** TransactionData user. */
                    public user?: (google.cloud.recaptchaenterprise.v1.TransactionData.IUser|null);

                    /** TransactionData merchants. */
                    public merchants: google.cloud.recaptchaenterprise.v1.TransactionData.IUser[];

                    /** TransactionData items. */
                    public items: google.cloud.recaptchaenterprise.v1.TransactionData.IItem[];

                    /** TransactionData gatewayInfo. */
                    public gatewayInfo?: (google.cloud.recaptchaenterprise.v1.TransactionData.IGatewayInfo|null);

                    /** TransactionData _transactionId. */
                    public _transactionId?: "transactionId";

                    /**
                     * Creates a new TransactionData instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TransactionData instance
                     */
                    public static create(properties?: google.cloud.recaptchaenterprise.v1.ITransactionData): google.cloud.recaptchaenterprise.v1.TransactionData;

                    /**
                     * Encodes the specified TransactionData message. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.TransactionData.verify|verify} messages.
                     * @param message TransactionData message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recaptchaenterprise.v1.ITransactionData, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TransactionData message, length delimited. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.TransactionData.verify|verify} messages.
                     * @param message TransactionData message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recaptchaenterprise.v1.ITransactionData, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TransactionData message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TransactionData
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recaptchaenterprise.v1.TransactionData;

                    /**
                     * Decodes a TransactionData message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TransactionData
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recaptchaenterprise.v1.TransactionData;

                    /**
                     * Verifies a TransactionData message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TransactionData message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TransactionData
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recaptchaenterprise.v1.TransactionData;

                    /**
                     * Creates a plain object from a TransactionData message. Also converts values to other types if specified.
                     * @param message TransactionData
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recaptchaenterprise.v1.TransactionData, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TransactionData to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for TransactionData
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace TransactionData {

                    /** Properties of an Address. */
                    interface IAddress {

                        /** Address recipient */
                        recipient?: (string|null);

                        /** Address address */
                        address?: (string[]|null);

                        /** Address locality */
                        locality?: (string|null);

                        /** Address administrativeArea */
                        administrativeArea?: (string|null);

                        /** Address regionCode */
                        regionCode?: (string|null);

                        /** Address postalCode */
                        postalCode?: (string|null);
                    }

                    /** Represents an Address. */
                    class Address implements IAddress {

                        /**
                         * Constructs a new Address.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.recaptchaenterprise.v1.TransactionData.IAddress);

                        /** Address recipient. */
                        public recipient: string;

                        /** Address address. */
                        public address: string[];

                        /** Address locality. */
                        public locality: string;

                        /** Address administrativeArea. */
                        public administrativeArea: string;

                        /** Address regionCode. */
                        public regionCode: string;

                        /** Address postalCode. */
                        public postalCode: string;

                        /**
                         * Creates a new Address instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Address instance
                         */
                        public static create(properties?: google.cloud.recaptchaenterprise.v1.TransactionData.IAddress): google.cloud.recaptchaenterprise.v1.TransactionData.Address;

                        /**
                         * Encodes the specified Address message. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.TransactionData.Address.verify|verify} messages.
                         * @param message Address message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.recaptchaenterprise.v1.TransactionData.IAddress, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Address message, length delimited. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.TransactionData.Address.verify|verify} messages.
                         * @param message Address message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.recaptchaenterprise.v1.TransactionData.IAddress, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an Address message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Address
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recaptchaenterprise.v1.TransactionData.Address;

                        /**
                         * Decodes an Address message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Address
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recaptchaenterprise.v1.TransactionData.Address;

                        /**
                         * Verifies an Address message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an Address message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Address
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.recaptchaenterprise.v1.TransactionData.Address;

                        /**
                         * Creates a plain object from an Address message. Also converts values to other types if specified.
                         * @param message Address
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.recaptchaenterprise.v1.TransactionData.Address, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Address to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for Address
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a User. */
                    interface IUser {

                        /** User accountId */
                        accountId?: (string|null);

                        /** User creationMs */
                        creationMs?: (number|Long|string|null);

                        /** User email */
                        email?: (string|null);

                        /** User emailVerified */
                        emailVerified?: (boolean|null);

                        /** User phoneNumber */
                        phoneNumber?: (string|null);

                        /** User phoneVerified */
                        phoneVerified?: (boolean|null);
                    }

                    /** Represents a User. */
                    class User implements IUser {

                        /**
                         * Constructs a new User.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.recaptchaenterprise.v1.TransactionData.IUser);

                        /** User accountId. */
                        public accountId: string;

                        /** User creationMs. */
                        public creationMs: (number|Long|string);

                        /** User email. */
                        public email: string;

                        /** User emailVerified. */
                        public emailVerified: boolean;

                        /** User phoneNumber. */
                        public phoneNumber: string;

                        /** User phoneVerified. */
                        public phoneVerified: boolean;

                        /**
                         * Creates a new User instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns User instance
                         */
                        public static create(properties?: google.cloud.recaptchaenterprise.v1.TransactionData.IUser): google.cloud.recaptchaenterprise.v1.TransactionData.User;

                        /**
                         * Encodes the specified User message. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.TransactionData.User.verify|verify} messages.
                         * @param message User message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.recaptchaenterprise.v1.TransactionData.IUser, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified User message, length delimited. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.TransactionData.User.verify|verify} messages.
                         * @param message User message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.recaptchaenterprise.v1.TransactionData.IUser, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a User message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns User
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recaptchaenterprise.v1.TransactionData.User;

                        /**
                         * Decodes a User message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns User
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recaptchaenterprise.v1.TransactionData.User;

                        /**
                         * Verifies a User message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a User message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns User
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.recaptchaenterprise.v1.TransactionData.User;

                        /**
                         * Creates a plain object from a User message. Also converts values to other types if specified.
                         * @param message User
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.recaptchaenterprise.v1.TransactionData.User, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this User to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for User
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of an Item. */
                    interface IItem {

                        /** Item name */
                        name?: (string|null);

                        /** Item value */
                        value?: (number|null);

                        /** Item quantity */
                        quantity?: (number|Long|string|null);

                        /** Item merchantAccountId */
                        merchantAccountId?: (string|null);
                    }

                    /** Represents an Item. */
                    class Item implements IItem {

                        /**
                         * Constructs a new Item.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.recaptchaenterprise.v1.TransactionData.IItem);

                        /** Item name. */
                        public name: string;

                        /** Item value. */
                        public value: number;

                        /** Item quantity. */
                        public quantity: (number|Long|string);

                        /** Item merchantAccountId. */
                        public merchantAccountId: string;

                        /**
                         * Creates a new Item instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Item instance
                         */
                        public static create(properties?: google.cloud.recaptchaenterprise.v1.TransactionData.IItem): google.cloud.recaptchaenterprise.v1.TransactionData.Item;

                        /**
                         * Encodes the specified Item message. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.TransactionData.Item.verify|verify} messages.
                         * @param message Item message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.recaptchaenterprise.v1.TransactionData.IItem, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Item message, length delimited. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.TransactionData.Item.verify|verify} messages.
                         * @param message Item message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.recaptchaenterprise.v1.TransactionData.IItem, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an Item message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Item
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recaptchaenterprise.v1.TransactionData.Item;

                        /**
                         * Decodes an Item message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Item
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recaptchaenterprise.v1.TransactionData.Item;

                        /**
                         * Verifies an Item message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an Item message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Item
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.recaptchaenterprise.v1.TransactionData.Item;

                        /**
                         * Creates a plain object from an Item message. Also converts values to other types if specified.
                         * @param message Item
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.recaptchaenterprise.v1.TransactionData.Item, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Item to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for Item
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a GatewayInfo. */
                    interface IGatewayInfo {

                        /** GatewayInfo name */
                        name?: (string|null);

                        /** GatewayInfo gatewayResponseCode */
                        gatewayResponseCode?: (string|null);

                        /** GatewayInfo avsResponseCode */
                        avsResponseCode?: (string|null);

                        /** GatewayInfo cvvResponseCode */
                        cvvResponseCode?: (string|null);
                    }

                    /** Represents a GatewayInfo. */
                    class GatewayInfo implements IGatewayInfo {

                        /**
                         * Constructs a new GatewayInfo.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.recaptchaenterprise.v1.TransactionData.IGatewayInfo);

                        /** GatewayInfo name. */
                        public name: string;

                        /** GatewayInfo gatewayResponseCode. */
                        public gatewayResponseCode: string;

                        /** GatewayInfo avsResponseCode. */
                        public avsResponseCode: string;

                        /** GatewayInfo cvvResponseCode. */
                        public cvvResponseCode: string;

                        /**
                         * Creates a new GatewayInfo instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns GatewayInfo instance
                         */
                        public static create(properties?: google.cloud.recaptchaenterprise.v1.TransactionData.IGatewayInfo): google.cloud.recaptchaenterprise.v1.TransactionData.GatewayInfo;

                        /**
                         * Encodes the specified GatewayInfo message. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.TransactionData.GatewayInfo.verify|verify} messages.
                         * @param message GatewayInfo message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.recaptchaenterprise.v1.TransactionData.IGatewayInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified GatewayInfo message, length delimited. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.TransactionData.GatewayInfo.verify|verify} messages.
                         * @param message GatewayInfo message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.recaptchaenterprise.v1.TransactionData.IGatewayInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a GatewayInfo message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns GatewayInfo
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recaptchaenterprise.v1.TransactionData.GatewayInfo;

                        /**
                         * Decodes a GatewayInfo message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns GatewayInfo
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recaptchaenterprise.v1.TransactionData.GatewayInfo;

                        /**
                         * Verifies a GatewayInfo message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a GatewayInfo message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns GatewayInfo
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.recaptchaenterprise.v1.TransactionData.GatewayInfo;

                        /**
                         * Creates a plain object from a GatewayInfo message. Also converts values to other types if specified.
                         * @param message GatewayInfo
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.recaptchaenterprise.v1.TransactionData.GatewayInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this GatewayInfo to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for GatewayInfo
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }
                }

                /** Properties of a UserInfo. */
                interface IUserInfo {

                    /** UserInfo createAccountTime */
                    createAccountTime?: (google.protobuf.ITimestamp|null);

                    /** UserInfo accountId */
                    accountId?: (string|null);

                    /** UserInfo userIds */
                    userIds?: (google.cloud.recaptchaenterprise.v1.IUserId[]|null);
                }

                /** Represents a UserInfo. */
                class UserInfo implements IUserInfo {

                    /**
                     * Constructs a new UserInfo.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recaptchaenterprise.v1.IUserInfo);

                    /** UserInfo createAccountTime. */
                    public createAccountTime?: (google.protobuf.ITimestamp|null);

                    /** UserInfo accountId. */
                    public accountId: string;

                    /** UserInfo userIds. */
                    public userIds: google.cloud.recaptchaenterprise.v1.IUserId[];

                    /**
                     * Creates a new UserInfo instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UserInfo instance
                     */
                    public static create(properties?: google.cloud.recaptchaenterprise.v1.IUserInfo): google.cloud.recaptchaenterprise.v1.UserInfo;

                    /**
                     * Encodes the specified UserInfo message. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.UserInfo.verify|verify} messages.
                     * @param message UserInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recaptchaenterprise.v1.IUserInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UserInfo message, length delimited. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.UserInfo.verify|verify} messages.
                     * @param message UserInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recaptchaenterprise.v1.IUserInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a UserInfo message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UserInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recaptchaenterprise.v1.UserInfo;

                    /**
                     * Decodes a UserInfo message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UserInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recaptchaenterprise.v1.UserInfo;

                    /**
                     * Verifies a UserInfo message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a UserInfo message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UserInfo
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recaptchaenterprise.v1.UserInfo;

                    /**
                     * Creates a plain object from a UserInfo message. Also converts values to other types if specified.
                     * @param message UserInfo
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recaptchaenterprise.v1.UserInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UserInfo to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UserInfo
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a UserId. */
                interface IUserId {

                    /** UserId email */
                    email?: (string|null);

                    /** UserId phoneNumber */
                    phoneNumber?: (string|null);

                    /** UserId username */
                    username?: (string|null);
                }

                /** Represents a UserId. */
                class UserId implements IUserId {

                    /**
                     * Constructs a new UserId.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recaptchaenterprise.v1.IUserId);

                    /** UserId email. */
                    public email?: (string|null);

                    /** UserId phoneNumber. */
                    public phoneNumber?: (string|null);

                    /** UserId username. */
                    public username?: (string|null);

                    /** UserId idOneof. */
                    public idOneof?: ("email"|"phoneNumber"|"username");

                    /**
                     * Creates a new UserId instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UserId instance
                     */
                    public static create(properties?: google.cloud.recaptchaenterprise.v1.IUserId): google.cloud.recaptchaenterprise.v1.UserId;

                    /**
                     * Encodes the specified UserId message. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.UserId.verify|verify} messages.
                     * @param message UserId message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recaptchaenterprise.v1.IUserId, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UserId message, length delimited. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.UserId.verify|verify} messages.
                     * @param message UserId message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recaptchaenterprise.v1.IUserId, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a UserId message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UserId
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recaptchaenterprise.v1.UserId;

                    /**
                     * Decodes a UserId message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UserId
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recaptchaenterprise.v1.UserId;

                    /**
                     * Verifies a UserId message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a UserId message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UserId
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recaptchaenterprise.v1.UserId;

                    /**
                     * Creates a plain object from a UserId message. Also converts values to other types if specified.
                     * @param message UserId
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recaptchaenterprise.v1.UserId, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UserId to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UserId
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a RiskAnalysis. */
                interface IRiskAnalysis {

                    /** RiskAnalysis score */
                    score?: (number|null);

                    /** RiskAnalysis reasons */
                    reasons?: (google.cloud.recaptchaenterprise.v1.RiskAnalysis.ClassificationReason[]|null);

                    /** RiskAnalysis extendedVerdictReasons */
                    extendedVerdictReasons?: (string[]|null);

                    /** RiskAnalysis challenge */
                    challenge?: (google.cloud.recaptchaenterprise.v1.RiskAnalysis.Challenge|keyof typeof google.cloud.recaptchaenterprise.v1.RiskAnalysis.Challenge|null);
                }

                /** Represents a RiskAnalysis. */
                class RiskAnalysis implements IRiskAnalysis {

                    /**
                     * Constructs a new RiskAnalysis.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recaptchaenterprise.v1.IRiskAnalysis);

                    /** RiskAnalysis score. */
                    public score: number;

                    /** RiskAnalysis reasons. */
                    public reasons: google.cloud.recaptchaenterprise.v1.RiskAnalysis.ClassificationReason[];

                    /** RiskAnalysis extendedVerdictReasons. */
                    public extendedVerdictReasons: string[];

                    /** RiskAnalysis challenge. */
                    public challenge: (google.cloud.recaptchaenterprise.v1.RiskAnalysis.Challenge|keyof typeof google.cloud.recaptchaenterprise.v1.RiskAnalysis.Challenge);

                    /**
                     * Creates a new RiskAnalysis instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RiskAnalysis instance
                     */
                    public static create(properties?: google.cloud.recaptchaenterprise.v1.IRiskAnalysis): google.cloud.recaptchaenterprise.v1.RiskAnalysis;

                    /**
                     * Encodes the specified RiskAnalysis message. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.RiskAnalysis.verify|verify} messages.
                     * @param message RiskAnalysis message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recaptchaenterprise.v1.IRiskAnalysis, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RiskAnalysis message, length delimited. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.RiskAnalysis.verify|verify} messages.
                     * @param message RiskAnalysis message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recaptchaenterprise.v1.IRiskAnalysis, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RiskAnalysis message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RiskAnalysis
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recaptchaenterprise.v1.RiskAnalysis;

                    /**
                     * Decodes a RiskAnalysis message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RiskAnalysis
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recaptchaenterprise.v1.RiskAnalysis;

                    /**
                     * Verifies a RiskAnalysis message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RiskAnalysis message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RiskAnalysis
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recaptchaenterprise.v1.RiskAnalysis;

                    /**
                     * Creates a plain object from a RiskAnalysis message. Also converts values to other types if specified.
                     * @param message RiskAnalysis
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recaptchaenterprise.v1.RiskAnalysis, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RiskAnalysis to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for RiskAnalysis
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace RiskAnalysis {

                    /** ClassificationReason enum. */
                    enum ClassificationReason {
                        CLASSIFICATION_REASON_UNSPECIFIED = 0,
                        AUTOMATION = 1,
                        UNEXPECTED_ENVIRONMENT = 2,
                        TOO_MUCH_TRAFFIC = 3,
                        UNEXPECTED_USAGE_PATTERNS = 4,
                        LOW_CONFIDENCE_SCORE = 5,
                        SUSPECTED_CARDING = 6,
                        SUSPECTED_CHARGEBACK = 7
                    }

                    /** Challenge enum. */
                    enum Challenge {
                        CHALLENGE_UNSPECIFIED = 0,
                        NOCAPTCHA = 1,
                        PASSED = 2,
                        FAILED = 3
                    }
                }

                /** Properties of a TokenProperties. */
                interface ITokenProperties {

                    /** TokenProperties valid */
                    valid?: (boolean|null);

                    /** TokenProperties invalidReason */
                    invalidReason?: (google.cloud.recaptchaenterprise.v1.TokenProperties.InvalidReason|keyof typeof google.cloud.recaptchaenterprise.v1.TokenProperties.InvalidReason|null);

                    /** TokenProperties createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** TokenProperties hostname */
                    hostname?: (string|null);

                    /** TokenProperties androidPackageName */
                    androidPackageName?: (string|null);

                    /** TokenProperties iosBundleId */
                    iosBundleId?: (string|null);

                    /** TokenProperties action */
                    action?: (string|null);
                }

                /** Represents a TokenProperties. */
                class TokenProperties implements ITokenProperties {

                    /**
                     * Constructs a new TokenProperties.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recaptchaenterprise.v1.ITokenProperties);

                    /** TokenProperties valid. */
                    public valid: boolean;

                    /** TokenProperties invalidReason. */
                    public invalidReason: (google.cloud.recaptchaenterprise.v1.TokenProperties.InvalidReason|keyof typeof google.cloud.recaptchaenterprise.v1.TokenProperties.InvalidReason);

                    /** TokenProperties createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** TokenProperties hostname. */
                    public hostname: string;

                    /** TokenProperties androidPackageName. */
                    public androidPackageName: string;

                    /** TokenProperties iosBundleId. */
                    public iosBundleId: string;

                    /** TokenProperties action. */
                    public action: string;

                    /**
                     * Creates a new TokenProperties instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TokenProperties instance
                     */
                    public static create(properties?: google.cloud.recaptchaenterprise.v1.ITokenProperties): google.cloud.recaptchaenterprise.v1.TokenProperties;

                    /**
                     * Encodes the specified TokenProperties message. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.TokenProperties.verify|verify} messages.
                     * @param message TokenProperties message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recaptchaenterprise.v1.ITokenProperties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TokenProperties message, length delimited. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.TokenProperties.verify|verify} messages.
                     * @param message TokenProperties message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recaptchaenterprise.v1.ITokenProperties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TokenProperties message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TokenProperties
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recaptchaenterprise.v1.TokenProperties;

                    /**
                     * Decodes a TokenProperties message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TokenProperties
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recaptchaenterprise.v1.TokenProperties;

                    /**
                     * Verifies a TokenProperties message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TokenProperties message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TokenProperties
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recaptchaenterprise.v1.TokenProperties;

                    /**
                     * Creates a plain object from a TokenProperties message. Also converts values to other types if specified.
                     * @param message TokenProperties
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recaptchaenterprise.v1.TokenProperties, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TokenProperties to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for TokenProperties
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace TokenProperties {

                    /** InvalidReason enum. */
                    enum InvalidReason {
                        INVALID_REASON_UNSPECIFIED = 0,
                        UNKNOWN_INVALID_REASON = 1,
                        MALFORMED = 2,
                        EXPIRED = 3,
                        DUPE = 4,
                        MISSING = 5,
                        BROWSER_ERROR = 6
                    }
                }

                /** Properties of a FraudPreventionAssessment. */
                interface IFraudPreventionAssessment {

                    /** FraudPreventionAssessment transactionRisk */
                    transactionRisk?: (number|null);

                    /** FraudPreventionAssessment stolenInstrumentVerdict */
                    stolenInstrumentVerdict?: (google.cloud.recaptchaenterprise.v1.FraudPreventionAssessment.IStolenInstrumentVerdict|null);

                    /** FraudPreventionAssessment cardTestingVerdict */
                    cardTestingVerdict?: (google.cloud.recaptchaenterprise.v1.FraudPreventionAssessment.ICardTestingVerdict|null);

                    /** FraudPreventionAssessment behavioralTrustVerdict */
                    behavioralTrustVerdict?: (google.cloud.recaptchaenterprise.v1.FraudPreventionAssessment.IBehavioralTrustVerdict|null);
                }

                /** Represents a FraudPreventionAssessment. */
                class FraudPreventionAssessment implements IFraudPreventionAssessment {

                    /**
                     * Constructs a new FraudPreventionAssessment.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recaptchaenterprise.v1.IFraudPreventionAssessment);

                    /** FraudPreventionAssessment transactionRisk. */
                    public transactionRisk: number;

                    /** FraudPreventionAssessment stolenInstrumentVerdict. */
                    public stolenInstrumentVerdict?: (google.cloud.recaptchaenterprise.v1.FraudPreventionAssessment.IStolenInstrumentVerdict|null);

                    /** FraudPreventionAssessment cardTestingVerdict. */
                    public cardTestingVerdict?: (google.cloud.recaptchaenterprise.v1.FraudPreventionAssessment.ICardTestingVerdict|null);

                    /** FraudPreventionAssessment behavioralTrustVerdict. */
                    public behavioralTrustVerdict?: (google.cloud.recaptchaenterprise.v1.FraudPreventionAssessment.IBehavioralTrustVerdict|null);

                    /**
                     * Creates a new FraudPreventionAssessment instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns FraudPreventionAssessment instance
                     */
                    public static create(properties?: google.cloud.recaptchaenterprise.v1.IFraudPreventionAssessment): google.cloud.recaptchaenterprise.v1.FraudPreventionAssessment;

                    /**
                     * Encodes the specified FraudPreventionAssessment message. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.FraudPreventionAssessment.verify|verify} messages.
                     * @param message FraudPreventionAssessment message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recaptchaenterprise.v1.IFraudPreventionAssessment, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified FraudPreventionAssessment message, length delimited. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.FraudPreventionAssessment.verify|verify} messages.
                     * @param message FraudPreventionAssessment message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recaptchaenterprise.v1.IFraudPreventionAssessment, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a FraudPreventionAssessment message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns FraudPreventionAssessment
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recaptchaenterprise.v1.FraudPreventionAssessment;

                    /**
                     * Decodes a FraudPreventionAssessment message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns FraudPreventionAssessment
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recaptchaenterprise.v1.FraudPreventionAssessment;

                    /**
                     * Verifies a FraudPreventionAssessment message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a FraudPreventionAssessment message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns FraudPreventionAssessment
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recaptchaenterprise.v1.FraudPreventionAssessment;

                    /**
                     * Creates a plain object from a FraudPreventionAssessment message. Also converts values to other types if specified.
                     * @param message FraudPreventionAssessment
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recaptchaenterprise.v1.FraudPreventionAssessment, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this FraudPreventionAssessment to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for FraudPreventionAssessment
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace FraudPreventionAssessment {

                    /** Properties of a StolenInstrumentVerdict. */
                    interface IStolenInstrumentVerdict {

                        /** StolenInstrumentVerdict risk */
                        risk?: (number|null);
                    }

                    /** Represents a StolenInstrumentVerdict. */
                    class StolenInstrumentVerdict implements IStolenInstrumentVerdict {

                        /**
                         * Constructs a new StolenInstrumentVerdict.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.recaptchaenterprise.v1.FraudPreventionAssessment.IStolenInstrumentVerdict);

                        /** StolenInstrumentVerdict risk. */
                        public risk: number;

                        /**
                         * Creates a new StolenInstrumentVerdict instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns StolenInstrumentVerdict instance
                         */
                        public static create(properties?: google.cloud.recaptchaenterprise.v1.FraudPreventionAssessment.IStolenInstrumentVerdict): google.cloud.recaptchaenterprise.v1.FraudPreventionAssessment.StolenInstrumentVerdict;

                        /**
                         * Encodes the specified StolenInstrumentVerdict message. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.FraudPreventionAssessment.StolenInstrumentVerdict.verify|verify} messages.
                         * @param message StolenInstrumentVerdict message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.recaptchaenterprise.v1.FraudPreventionAssessment.IStolenInstrumentVerdict, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified StolenInstrumentVerdict message, length delimited. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.FraudPreventionAssessment.StolenInstrumentVerdict.verify|verify} messages.
                         * @param message StolenInstrumentVerdict message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.recaptchaenterprise.v1.FraudPreventionAssessment.IStolenInstrumentVerdict, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a StolenInstrumentVerdict message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns StolenInstrumentVerdict
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recaptchaenterprise.v1.FraudPreventionAssessment.StolenInstrumentVerdict;

                        /**
                         * Decodes a StolenInstrumentVerdict message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns StolenInstrumentVerdict
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recaptchaenterprise.v1.FraudPreventionAssessment.StolenInstrumentVerdict;

                        /**
                         * Verifies a StolenInstrumentVerdict message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a StolenInstrumentVerdict message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns StolenInstrumentVerdict
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.recaptchaenterprise.v1.FraudPreventionAssessment.StolenInstrumentVerdict;

                        /**
                         * Creates a plain object from a StolenInstrumentVerdict message. Also converts values to other types if specified.
                         * @param message StolenInstrumentVerdict
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.recaptchaenterprise.v1.FraudPreventionAssessment.StolenInstrumentVerdict, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this StolenInstrumentVerdict to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for StolenInstrumentVerdict
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a CardTestingVerdict. */
                    interface ICardTestingVerdict {

                        /** CardTestingVerdict risk */
                        risk?: (number|null);
                    }

                    /** Represents a CardTestingVerdict. */
                    class CardTestingVerdict implements ICardTestingVerdict {

                        /**
                         * Constructs a new CardTestingVerdict.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.recaptchaenterprise.v1.FraudPreventionAssessment.ICardTestingVerdict);

                        /** CardTestingVerdict risk. */
                        public risk: number;

                        /**
                         * Creates a new CardTestingVerdict instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns CardTestingVerdict instance
                         */
                        public static create(properties?: google.cloud.recaptchaenterprise.v1.FraudPreventionAssessment.ICardTestingVerdict): google.cloud.recaptchaenterprise.v1.FraudPreventionAssessment.CardTestingVerdict;

                        /**
                         * Encodes the specified CardTestingVerdict message. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.FraudPreventionAssessment.CardTestingVerdict.verify|verify} messages.
                         * @param message CardTestingVerdict message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.recaptchaenterprise.v1.FraudPreventionAssessment.ICardTestingVerdict, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified CardTestingVerdict message, length delimited. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.FraudPreventionAssessment.CardTestingVerdict.verify|verify} messages.
                         * @param message CardTestingVerdict message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.recaptchaenterprise.v1.FraudPreventionAssessment.ICardTestingVerdict, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a CardTestingVerdict message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns CardTestingVerdict
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recaptchaenterprise.v1.FraudPreventionAssessment.CardTestingVerdict;

                        /**
                         * Decodes a CardTestingVerdict message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns CardTestingVerdict
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recaptchaenterprise.v1.FraudPreventionAssessment.CardTestingVerdict;

                        /**
                         * Verifies a CardTestingVerdict message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a CardTestingVerdict message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns CardTestingVerdict
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.recaptchaenterprise.v1.FraudPreventionAssessment.CardTestingVerdict;

                        /**
                         * Creates a plain object from a CardTestingVerdict message. Also converts values to other types if specified.
                         * @param message CardTestingVerdict
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.recaptchaenterprise.v1.FraudPreventionAssessment.CardTestingVerdict, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this CardTestingVerdict to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for CardTestingVerdict
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a BehavioralTrustVerdict. */
                    interface IBehavioralTrustVerdict {

                        /** BehavioralTrustVerdict trust */
                        trust?: (number|null);
                    }

                    /** Represents a BehavioralTrustVerdict. */
                    class BehavioralTrustVerdict implements IBehavioralTrustVerdict {

                        /**
                         * Constructs a new BehavioralTrustVerdict.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.recaptchaenterprise.v1.FraudPreventionAssessment.IBehavioralTrustVerdict);

                        /** BehavioralTrustVerdict trust. */
                        public trust: number;

                        /**
                         * Creates a new BehavioralTrustVerdict instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns BehavioralTrustVerdict instance
                         */
                        public static create(properties?: google.cloud.recaptchaenterprise.v1.FraudPreventionAssessment.IBehavioralTrustVerdict): google.cloud.recaptchaenterprise.v1.FraudPreventionAssessment.BehavioralTrustVerdict;

                        /**
                         * Encodes the specified BehavioralTrustVerdict message. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.FraudPreventionAssessment.BehavioralTrustVerdict.verify|verify} messages.
                         * @param message BehavioralTrustVerdict message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.recaptchaenterprise.v1.FraudPreventionAssessment.IBehavioralTrustVerdict, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified BehavioralTrustVerdict message, length delimited. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.FraudPreventionAssessment.BehavioralTrustVerdict.verify|verify} messages.
                         * @param message BehavioralTrustVerdict message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.recaptchaenterprise.v1.FraudPreventionAssessment.IBehavioralTrustVerdict, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a BehavioralTrustVerdict message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns BehavioralTrustVerdict
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recaptchaenterprise.v1.FraudPreventionAssessment.BehavioralTrustVerdict;

                        /**
                         * Decodes a BehavioralTrustVerdict message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns BehavioralTrustVerdict
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recaptchaenterprise.v1.FraudPreventionAssessment.BehavioralTrustVerdict;

                        /**
                         * Verifies a BehavioralTrustVerdict message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a BehavioralTrustVerdict message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns BehavioralTrustVerdict
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.recaptchaenterprise.v1.FraudPreventionAssessment.BehavioralTrustVerdict;

                        /**
                         * Creates a plain object from a BehavioralTrustVerdict message. Also converts values to other types if specified.
                         * @param message BehavioralTrustVerdict
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.recaptchaenterprise.v1.FraudPreventionAssessment.BehavioralTrustVerdict, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this BehavioralTrustVerdict to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for BehavioralTrustVerdict
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }
                }

                /** Properties of a FraudSignals. */
                interface IFraudSignals {

                    /** FraudSignals userSignals */
                    userSignals?: (google.cloud.recaptchaenterprise.v1.FraudSignals.IUserSignals|null);

                    /** FraudSignals cardSignals */
                    cardSignals?: (google.cloud.recaptchaenterprise.v1.FraudSignals.ICardSignals|null);
                }

                /** Represents a FraudSignals. */
                class FraudSignals implements IFraudSignals {

                    /**
                     * Constructs a new FraudSignals.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recaptchaenterprise.v1.IFraudSignals);

                    /** FraudSignals userSignals. */
                    public userSignals?: (google.cloud.recaptchaenterprise.v1.FraudSignals.IUserSignals|null);

                    /** FraudSignals cardSignals. */
                    public cardSignals?: (google.cloud.recaptchaenterprise.v1.FraudSignals.ICardSignals|null);

                    /**
                     * Creates a new FraudSignals instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns FraudSignals instance
                     */
                    public static create(properties?: google.cloud.recaptchaenterprise.v1.IFraudSignals): google.cloud.recaptchaenterprise.v1.FraudSignals;

                    /**
                     * Encodes the specified FraudSignals message. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.FraudSignals.verify|verify} messages.
                     * @param message FraudSignals message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recaptchaenterprise.v1.IFraudSignals, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified FraudSignals message, length delimited. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.FraudSignals.verify|verify} messages.
                     * @param message FraudSignals message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recaptchaenterprise.v1.IFraudSignals, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a FraudSignals message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns FraudSignals
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recaptchaenterprise.v1.FraudSignals;

                    /**
                     * Decodes a FraudSignals message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns FraudSignals
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recaptchaenterprise.v1.FraudSignals;

                    /**
                     * Verifies a FraudSignals message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a FraudSignals message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns FraudSignals
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recaptchaenterprise.v1.FraudSignals;

                    /**
                     * Creates a plain object from a FraudSignals message. Also converts values to other types if specified.
                     * @param message FraudSignals
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recaptchaenterprise.v1.FraudSignals, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this FraudSignals to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for FraudSignals
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace FraudSignals {

                    /** Properties of a UserSignals. */
                    interface IUserSignals {

                        /** UserSignals activeDaysLowerBound */
                        activeDaysLowerBound?: (number|null);

                        /** UserSignals syntheticRisk */
                        syntheticRisk?: (number|null);
                    }

                    /** Represents a UserSignals. */
                    class UserSignals implements IUserSignals {

                        /**
                         * Constructs a new UserSignals.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.recaptchaenterprise.v1.FraudSignals.IUserSignals);

                        /** UserSignals activeDaysLowerBound. */
                        public activeDaysLowerBound: number;

                        /** UserSignals syntheticRisk. */
                        public syntheticRisk: number;

                        /**
                         * Creates a new UserSignals instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns UserSignals instance
                         */
                        public static create(properties?: google.cloud.recaptchaenterprise.v1.FraudSignals.IUserSignals): google.cloud.recaptchaenterprise.v1.FraudSignals.UserSignals;

                        /**
                         * Encodes the specified UserSignals message. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.FraudSignals.UserSignals.verify|verify} messages.
                         * @param message UserSignals message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.recaptchaenterprise.v1.FraudSignals.IUserSignals, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified UserSignals message, length delimited. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.FraudSignals.UserSignals.verify|verify} messages.
                         * @param message UserSignals message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.recaptchaenterprise.v1.FraudSignals.IUserSignals, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a UserSignals message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns UserSignals
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recaptchaenterprise.v1.FraudSignals.UserSignals;

                        /**
                         * Decodes a UserSignals message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns UserSignals
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recaptchaenterprise.v1.FraudSignals.UserSignals;

                        /**
                         * Verifies a UserSignals message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a UserSignals message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns UserSignals
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.recaptchaenterprise.v1.FraudSignals.UserSignals;

                        /**
                         * Creates a plain object from a UserSignals message. Also converts values to other types if specified.
                         * @param message UserSignals
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.recaptchaenterprise.v1.FraudSignals.UserSignals, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this UserSignals to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for UserSignals
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a CardSignals. */
                    interface ICardSignals {

                        /** CardSignals cardLabels */
                        cardLabels?: (google.cloud.recaptchaenterprise.v1.FraudSignals.CardSignals.CardLabel[]|null);
                    }

                    /** Represents a CardSignals. */
                    class CardSignals implements ICardSignals {

                        /**
                         * Constructs a new CardSignals.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.recaptchaenterprise.v1.FraudSignals.ICardSignals);

                        /** CardSignals cardLabels. */
                        public cardLabels: google.cloud.recaptchaenterprise.v1.FraudSignals.CardSignals.CardLabel[];

                        /**
                         * Creates a new CardSignals instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns CardSignals instance
                         */
                        public static create(properties?: google.cloud.recaptchaenterprise.v1.FraudSignals.ICardSignals): google.cloud.recaptchaenterprise.v1.FraudSignals.CardSignals;

                        /**
                         * Encodes the specified CardSignals message. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.FraudSignals.CardSignals.verify|verify} messages.
                         * @param message CardSignals message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.recaptchaenterprise.v1.FraudSignals.ICardSignals, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified CardSignals message, length delimited. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.FraudSignals.CardSignals.verify|verify} messages.
                         * @param message CardSignals message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.recaptchaenterprise.v1.FraudSignals.ICardSignals, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a CardSignals message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns CardSignals
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recaptchaenterprise.v1.FraudSignals.CardSignals;

                        /**
                         * Decodes a CardSignals message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns CardSignals
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recaptchaenterprise.v1.FraudSignals.CardSignals;

                        /**
                         * Verifies a CardSignals message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a CardSignals message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns CardSignals
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.recaptchaenterprise.v1.FraudSignals.CardSignals;

                        /**
                         * Creates a plain object from a CardSignals message. Also converts values to other types if specified.
                         * @param message CardSignals
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.recaptchaenterprise.v1.FraudSignals.CardSignals, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this CardSignals to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for CardSignals
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace CardSignals {

                        /** CardLabel enum. */
                        enum CardLabel {
                            CARD_LABEL_UNSPECIFIED = 0,
                            PREPAID = 1,
                            VIRTUAL = 2,
                            UNEXPECTED_LOCATION = 3
                        }
                    }
                }

                /** Properties of a SmsTollFraudVerdict. */
                interface ISmsTollFraudVerdict {

                    /** SmsTollFraudVerdict risk */
                    risk?: (number|null);

                    /** SmsTollFraudVerdict reasons */
                    reasons?: (google.cloud.recaptchaenterprise.v1.SmsTollFraudVerdict.SmsTollFraudReason[]|null);
                }

                /** Represents a SmsTollFraudVerdict. */
                class SmsTollFraudVerdict implements ISmsTollFraudVerdict {

                    /**
                     * Constructs a new SmsTollFraudVerdict.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recaptchaenterprise.v1.ISmsTollFraudVerdict);

                    /** SmsTollFraudVerdict risk. */
                    public risk: number;

                    /** SmsTollFraudVerdict reasons. */
                    public reasons: google.cloud.recaptchaenterprise.v1.SmsTollFraudVerdict.SmsTollFraudReason[];

                    /**
                     * Creates a new SmsTollFraudVerdict instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SmsTollFraudVerdict instance
                     */
                    public static create(properties?: google.cloud.recaptchaenterprise.v1.ISmsTollFraudVerdict): google.cloud.recaptchaenterprise.v1.SmsTollFraudVerdict;

                    /**
                     * Encodes the specified SmsTollFraudVerdict message. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.SmsTollFraudVerdict.verify|verify} messages.
                     * @param message SmsTollFraudVerdict message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recaptchaenterprise.v1.ISmsTollFraudVerdict, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SmsTollFraudVerdict message, length delimited. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.SmsTollFraudVerdict.verify|verify} messages.
                     * @param message SmsTollFraudVerdict message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recaptchaenterprise.v1.ISmsTollFraudVerdict, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SmsTollFraudVerdict message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SmsTollFraudVerdict
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recaptchaenterprise.v1.SmsTollFraudVerdict;

                    /**
                     * Decodes a SmsTollFraudVerdict message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SmsTollFraudVerdict
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recaptchaenterprise.v1.SmsTollFraudVerdict;

                    /**
                     * Verifies a SmsTollFraudVerdict message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SmsTollFraudVerdict message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SmsTollFraudVerdict
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recaptchaenterprise.v1.SmsTollFraudVerdict;

                    /**
                     * Creates a plain object from a SmsTollFraudVerdict message. Also converts values to other types if specified.
                     * @param message SmsTollFraudVerdict
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recaptchaenterprise.v1.SmsTollFraudVerdict, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SmsTollFraudVerdict to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for SmsTollFraudVerdict
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace SmsTollFraudVerdict {

                    /** SmsTollFraudReason enum. */
                    enum SmsTollFraudReason {
                        SMS_TOLL_FRAUD_REASON_UNSPECIFIED = 0,
                        INVALID_PHONE_NUMBER = 1
                    }
                }

                /** Properties of a PhoneFraudAssessment. */
                interface IPhoneFraudAssessment {

                    /** PhoneFraudAssessment smsTollFraudVerdict */
                    smsTollFraudVerdict?: (google.cloud.recaptchaenterprise.v1.ISmsTollFraudVerdict|null);
                }

                /** Represents a PhoneFraudAssessment. */
                class PhoneFraudAssessment implements IPhoneFraudAssessment {

                    /**
                     * Constructs a new PhoneFraudAssessment.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recaptchaenterprise.v1.IPhoneFraudAssessment);

                    /** PhoneFraudAssessment smsTollFraudVerdict. */
                    public smsTollFraudVerdict?: (google.cloud.recaptchaenterprise.v1.ISmsTollFraudVerdict|null);

                    /**
                     * Creates a new PhoneFraudAssessment instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PhoneFraudAssessment instance
                     */
                    public static create(properties?: google.cloud.recaptchaenterprise.v1.IPhoneFraudAssessment): google.cloud.recaptchaenterprise.v1.PhoneFraudAssessment;

                    /**
                     * Encodes the specified PhoneFraudAssessment message. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.PhoneFraudAssessment.verify|verify} messages.
                     * @param message PhoneFraudAssessment message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recaptchaenterprise.v1.IPhoneFraudAssessment, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PhoneFraudAssessment message, length delimited. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.PhoneFraudAssessment.verify|verify} messages.
                     * @param message PhoneFraudAssessment message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recaptchaenterprise.v1.IPhoneFraudAssessment, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PhoneFraudAssessment message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PhoneFraudAssessment
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recaptchaenterprise.v1.PhoneFraudAssessment;

                    /**
                     * Decodes a PhoneFraudAssessment message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PhoneFraudAssessment
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recaptchaenterprise.v1.PhoneFraudAssessment;

                    /**
                     * Verifies a PhoneFraudAssessment message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PhoneFraudAssessment message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PhoneFraudAssessment
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recaptchaenterprise.v1.PhoneFraudAssessment;

                    /**
                     * Creates a plain object from a PhoneFraudAssessment message. Also converts values to other types if specified.
                     * @param message PhoneFraudAssessment
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recaptchaenterprise.v1.PhoneFraudAssessment, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PhoneFraudAssessment to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for PhoneFraudAssessment
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an AccountDefenderAssessment. */
                interface IAccountDefenderAssessment {

                    /** AccountDefenderAssessment labels */
                    labels?: (google.cloud.recaptchaenterprise.v1.AccountDefenderAssessment.AccountDefenderLabel[]|null);
                }

                /** Represents an AccountDefenderAssessment. */
                class AccountDefenderAssessment implements IAccountDefenderAssessment {

                    /**
                     * Constructs a new AccountDefenderAssessment.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recaptchaenterprise.v1.IAccountDefenderAssessment);

                    /** AccountDefenderAssessment labels. */
                    public labels: google.cloud.recaptchaenterprise.v1.AccountDefenderAssessment.AccountDefenderLabel[];

                    /**
                     * Creates a new AccountDefenderAssessment instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AccountDefenderAssessment instance
                     */
                    public static create(properties?: google.cloud.recaptchaenterprise.v1.IAccountDefenderAssessment): google.cloud.recaptchaenterprise.v1.AccountDefenderAssessment;

                    /**
                     * Encodes the specified AccountDefenderAssessment message. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.AccountDefenderAssessment.verify|verify} messages.
                     * @param message AccountDefenderAssessment message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recaptchaenterprise.v1.IAccountDefenderAssessment, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AccountDefenderAssessment message, length delimited. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.AccountDefenderAssessment.verify|verify} messages.
                     * @param message AccountDefenderAssessment message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recaptchaenterprise.v1.IAccountDefenderAssessment, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AccountDefenderAssessment message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AccountDefenderAssessment
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recaptchaenterprise.v1.AccountDefenderAssessment;

                    /**
                     * Decodes an AccountDefenderAssessment message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AccountDefenderAssessment
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recaptchaenterprise.v1.AccountDefenderAssessment;

                    /**
                     * Verifies an AccountDefenderAssessment message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AccountDefenderAssessment message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AccountDefenderAssessment
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recaptchaenterprise.v1.AccountDefenderAssessment;

                    /**
                     * Creates a plain object from an AccountDefenderAssessment message. Also converts values to other types if specified.
                     * @param message AccountDefenderAssessment
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recaptchaenterprise.v1.AccountDefenderAssessment, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AccountDefenderAssessment to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for AccountDefenderAssessment
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace AccountDefenderAssessment {

                    /** AccountDefenderLabel enum. */
                    enum AccountDefenderLabel {
                        ACCOUNT_DEFENDER_LABEL_UNSPECIFIED = 0,
                        PROFILE_MATCH = 1,
                        SUSPICIOUS_LOGIN_ACTIVITY = 2,
                        SUSPICIOUS_ACCOUNT_CREATION = 3,
                        RELATED_ACCOUNTS_NUMBER_HIGH = 4
                    }
                }

                /** Properties of a CreateKeyRequest. */
                interface ICreateKeyRequest {

                    /** CreateKeyRequest parent */
                    parent?: (string|null);

                    /** CreateKeyRequest key */
                    key?: (google.cloud.recaptchaenterprise.v1.IKey|null);
                }

                /** Represents a CreateKeyRequest. */
                class CreateKeyRequest implements ICreateKeyRequest {

                    /**
                     * Constructs a new CreateKeyRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recaptchaenterprise.v1.ICreateKeyRequest);

                    /** CreateKeyRequest parent. */
                    public parent: string;

                    /** CreateKeyRequest key. */
                    public key?: (google.cloud.recaptchaenterprise.v1.IKey|null);

                    /**
                     * Creates a new CreateKeyRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateKeyRequest instance
                     */
                    public static create(properties?: google.cloud.recaptchaenterprise.v1.ICreateKeyRequest): google.cloud.recaptchaenterprise.v1.CreateKeyRequest;

                    /**
                     * Encodes the specified CreateKeyRequest message. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.CreateKeyRequest.verify|verify} messages.
                     * @param message CreateKeyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recaptchaenterprise.v1.ICreateKeyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateKeyRequest message, length delimited. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.CreateKeyRequest.verify|verify} messages.
                     * @param message CreateKeyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recaptchaenterprise.v1.ICreateKeyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateKeyRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateKeyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recaptchaenterprise.v1.CreateKeyRequest;

                    /**
                     * Decodes a CreateKeyRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateKeyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recaptchaenterprise.v1.CreateKeyRequest;

                    /**
                     * Verifies a CreateKeyRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateKeyRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateKeyRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recaptchaenterprise.v1.CreateKeyRequest;

                    /**
                     * Creates a plain object from a CreateKeyRequest message. Also converts values to other types if specified.
                     * @param message CreateKeyRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recaptchaenterprise.v1.CreateKeyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateKeyRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateKeyRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListKeysRequest. */
                interface IListKeysRequest {

                    /** ListKeysRequest parent */
                    parent?: (string|null);

                    /** ListKeysRequest pageSize */
                    pageSize?: (number|null);

                    /** ListKeysRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListKeysRequest. */
                class ListKeysRequest implements IListKeysRequest {

                    /**
                     * Constructs a new ListKeysRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recaptchaenterprise.v1.IListKeysRequest);

                    /** ListKeysRequest parent. */
                    public parent: string;

                    /** ListKeysRequest pageSize. */
                    public pageSize: number;

                    /** ListKeysRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListKeysRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListKeysRequest instance
                     */
                    public static create(properties?: google.cloud.recaptchaenterprise.v1.IListKeysRequest): google.cloud.recaptchaenterprise.v1.ListKeysRequest;

                    /**
                     * Encodes the specified ListKeysRequest message. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.ListKeysRequest.verify|verify} messages.
                     * @param message ListKeysRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recaptchaenterprise.v1.IListKeysRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListKeysRequest message, length delimited. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.ListKeysRequest.verify|verify} messages.
                     * @param message ListKeysRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recaptchaenterprise.v1.IListKeysRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListKeysRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListKeysRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recaptchaenterprise.v1.ListKeysRequest;

                    /**
                     * Decodes a ListKeysRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListKeysRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recaptchaenterprise.v1.ListKeysRequest;

                    /**
                     * Verifies a ListKeysRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListKeysRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListKeysRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recaptchaenterprise.v1.ListKeysRequest;

                    /**
                     * Creates a plain object from a ListKeysRequest message. Also converts values to other types if specified.
                     * @param message ListKeysRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recaptchaenterprise.v1.ListKeysRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListKeysRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListKeysRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListKeysResponse. */
                interface IListKeysResponse {

                    /** ListKeysResponse keys */
                    keys?: (google.cloud.recaptchaenterprise.v1.IKey[]|null);

                    /** ListKeysResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListKeysResponse. */
                class ListKeysResponse implements IListKeysResponse {

                    /**
                     * Constructs a new ListKeysResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recaptchaenterprise.v1.IListKeysResponse);

                    /** ListKeysResponse keys. */
                    public keys: google.cloud.recaptchaenterprise.v1.IKey[];

                    /** ListKeysResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListKeysResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListKeysResponse instance
                     */
                    public static create(properties?: google.cloud.recaptchaenterprise.v1.IListKeysResponse): google.cloud.recaptchaenterprise.v1.ListKeysResponse;

                    /**
                     * Encodes the specified ListKeysResponse message. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.ListKeysResponse.verify|verify} messages.
                     * @param message ListKeysResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recaptchaenterprise.v1.IListKeysResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListKeysResponse message, length delimited. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.ListKeysResponse.verify|verify} messages.
                     * @param message ListKeysResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recaptchaenterprise.v1.IListKeysResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListKeysResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListKeysResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recaptchaenterprise.v1.ListKeysResponse;

                    /**
                     * Decodes a ListKeysResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListKeysResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recaptchaenterprise.v1.ListKeysResponse;

                    /**
                     * Verifies a ListKeysResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListKeysResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListKeysResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recaptchaenterprise.v1.ListKeysResponse;

                    /**
                     * Creates a plain object from a ListKeysResponse message. Also converts values to other types if specified.
                     * @param message ListKeysResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recaptchaenterprise.v1.ListKeysResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListKeysResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListKeysResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a RetrieveLegacySecretKeyRequest. */
                interface IRetrieveLegacySecretKeyRequest {

                    /** RetrieveLegacySecretKeyRequest key */
                    key?: (string|null);
                }

                /** Represents a RetrieveLegacySecretKeyRequest. */
                class RetrieveLegacySecretKeyRequest implements IRetrieveLegacySecretKeyRequest {

                    /**
                     * Constructs a new RetrieveLegacySecretKeyRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recaptchaenterprise.v1.IRetrieveLegacySecretKeyRequest);

                    /** RetrieveLegacySecretKeyRequest key. */
                    public key: string;

                    /**
                     * Creates a new RetrieveLegacySecretKeyRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RetrieveLegacySecretKeyRequest instance
                     */
                    public static create(properties?: google.cloud.recaptchaenterprise.v1.IRetrieveLegacySecretKeyRequest): google.cloud.recaptchaenterprise.v1.RetrieveLegacySecretKeyRequest;

                    /**
                     * Encodes the specified RetrieveLegacySecretKeyRequest message. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.RetrieveLegacySecretKeyRequest.verify|verify} messages.
                     * @param message RetrieveLegacySecretKeyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recaptchaenterprise.v1.IRetrieveLegacySecretKeyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RetrieveLegacySecretKeyRequest message, length delimited. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.RetrieveLegacySecretKeyRequest.verify|verify} messages.
                     * @param message RetrieveLegacySecretKeyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recaptchaenterprise.v1.IRetrieveLegacySecretKeyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RetrieveLegacySecretKeyRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RetrieveLegacySecretKeyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recaptchaenterprise.v1.RetrieveLegacySecretKeyRequest;

                    /**
                     * Decodes a RetrieveLegacySecretKeyRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RetrieveLegacySecretKeyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recaptchaenterprise.v1.RetrieveLegacySecretKeyRequest;

                    /**
                     * Verifies a RetrieveLegacySecretKeyRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RetrieveLegacySecretKeyRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RetrieveLegacySecretKeyRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recaptchaenterprise.v1.RetrieveLegacySecretKeyRequest;

                    /**
                     * Creates a plain object from a RetrieveLegacySecretKeyRequest message. Also converts values to other types if specified.
                     * @param message RetrieveLegacySecretKeyRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recaptchaenterprise.v1.RetrieveLegacySecretKeyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RetrieveLegacySecretKeyRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for RetrieveLegacySecretKeyRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetKeyRequest. */
                interface IGetKeyRequest {

                    /** GetKeyRequest name */
                    name?: (string|null);
                }

                /** Represents a GetKeyRequest. */
                class GetKeyRequest implements IGetKeyRequest {

                    /**
                     * Constructs a new GetKeyRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recaptchaenterprise.v1.IGetKeyRequest);

                    /** GetKeyRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetKeyRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetKeyRequest instance
                     */
                    public static create(properties?: google.cloud.recaptchaenterprise.v1.IGetKeyRequest): google.cloud.recaptchaenterprise.v1.GetKeyRequest;

                    /**
                     * Encodes the specified GetKeyRequest message. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.GetKeyRequest.verify|verify} messages.
                     * @param message GetKeyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recaptchaenterprise.v1.IGetKeyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetKeyRequest message, length delimited. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.GetKeyRequest.verify|verify} messages.
                     * @param message GetKeyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recaptchaenterprise.v1.IGetKeyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetKeyRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetKeyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recaptchaenterprise.v1.GetKeyRequest;

                    /**
                     * Decodes a GetKeyRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetKeyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recaptchaenterprise.v1.GetKeyRequest;

                    /**
                     * Verifies a GetKeyRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetKeyRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetKeyRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recaptchaenterprise.v1.GetKeyRequest;

                    /**
                     * Creates a plain object from a GetKeyRequest message. Also converts values to other types if specified.
                     * @param message GetKeyRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recaptchaenterprise.v1.GetKeyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetKeyRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetKeyRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpdateKeyRequest. */
                interface IUpdateKeyRequest {

                    /** UpdateKeyRequest key */
                    key?: (google.cloud.recaptchaenterprise.v1.IKey|null);

                    /** UpdateKeyRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);
                }

                /** Represents an UpdateKeyRequest. */
                class UpdateKeyRequest implements IUpdateKeyRequest {

                    /**
                     * Constructs a new UpdateKeyRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recaptchaenterprise.v1.IUpdateKeyRequest);

                    /** UpdateKeyRequest key. */
                    public key?: (google.cloud.recaptchaenterprise.v1.IKey|null);

                    /** UpdateKeyRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /**
                     * Creates a new UpdateKeyRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateKeyRequest instance
                     */
                    public static create(properties?: google.cloud.recaptchaenterprise.v1.IUpdateKeyRequest): google.cloud.recaptchaenterprise.v1.UpdateKeyRequest;

                    /**
                     * Encodes the specified UpdateKeyRequest message. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.UpdateKeyRequest.verify|verify} messages.
                     * @param message UpdateKeyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recaptchaenterprise.v1.IUpdateKeyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateKeyRequest message, length delimited. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.UpdateKeyRequest.verify|verify} messages.
                     * @param message UpdateKeyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recaptchaenterprise.v1.IUpdateKeyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateKeyRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateKeyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recaptchaenterprise.v1.UpdateKeyRequest;

                    /**
                     * Decodes an UpdateKeyRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateKeyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recaptchaenterprise.v1.UpdateKeyRequest;

                    /**
                     * Verifies an UpdateKeyRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateKeyRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateKeyRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recaptchaenterprise.v1.UpdateKeyRequest;

                    /**
                     * Creates a plain object from an UpdateKeyRequest message. Also converts values to other types if specified.
                     * @param message UpdateKeyRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recaptchaenterprise.v1.UpdateKeyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateKeyRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdateKeyRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeleteKeyRequest. */
                interface IDeleteKeyRequest {

                    /** DeleteKeyRequest name */
                    name?: (string|null);
                }

                /** Represents a DeleteKeyRequest. */
                class DeleteKeyRequest implements IDeleteKeyRequest {

                    /**
                     * Constructs a new DeleteKeyRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recaptchaenterprise.v1.IDeleteKeyRequest);

                    /** DeleteKeyRequest name. */
                    public name: string;

                    /**
                     * Creates a new DeleteKeyRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteKeyRequest instance
                     */
                    public static create(properties?: google.cloud.recaptchaenterprise.v1.IDeleteKeyRequest): google.cloud.recaptchaenterprise.v1.DeleteKeyRequest;

                    /**
                     * Encodes the specified DeleteKeyRequest message. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.DeleteKeyRequest.verify|verify} messages.
                     * @param message DeleteKeyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recaptchaenterprise.v1.IDeleteKeyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteKeyRequest message, length delimited. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.DeleteKeyRequest.verify|verify} messages.
                     * @param message DeleteKeyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recaptchaenterprise.v1.IDeleteKeyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteKeyRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteKeyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recaptchaenterprise.v1.DeleteKeyRequest;

                    /**
                     * Decodes a DeleteKeyRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteKeyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recaptchaenterprise.v1.DeleteKeyRequest;

                    /**
                     * Verifies a DeleteKeyRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteKeyRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteKeyRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recaptchaenterprise.v1.DeleteKeyRequest;

                    /**
                     * Creates a plain object from a DeleteKeyRequest message. Also converts values to other types if specified.
                     * @param message DeleteKeyRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recaptchaenterprise.v1.DeleteKeyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteKeyRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeleteKeyRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CreateFirewallPolicyRequest. */
                interface ICreateFirewallPolicyRequest {

                    /** CreateFirewallPolicyRequest parent */
                    parent?: (string|null);

                    /** CreateFirewallPolicyRequest firewallPolicy */
                    firewallPolicy?: (google.cloud.recaptchaenterprise.v1.IFirewallPolicy|null);
                }

                /** Represents a CreateFirewallPolicyRequest. */
                class CreateFirewallPolicyRequest implements ICreateFirewallPolicyRequest {

                    /**
                     * Constructs a new CreateFirewallPolicyRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recaptchaenterprise.v1.ICreateFirewallPolicyRequest);

                    /** CreateFirewallPolicyRequest parent. */
                    public parent: string;

                    /** CreateFirewallPolicyRequest firewallPolicy. */
                    public firewallPolicy?: (google.cloud.recaptchaenterprise.v1.IFirewallPolicy|null);

                    /**
                     * Creates a new CreateFirewallPolicyRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateFirewallPolicyRequest instance
                     */
                    public static create(properties?: google.cloud.recaptchaenterprise.v1.ICreateFirewallPolicyRequest): google.cloud.recaptchaenterprise.v1.CreateFirewallPolicyRequest;

                    /**
                     * Encodes the specified CreateFirewallPolicyRequest message. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.CreateFirewallPolicyRequest.verify|verify} messages.
                     * @param message CreateFirewallPolicyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recaptchaenterprise.v1.ICreateFirewallPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateFirewallPolicyRequest message, length delimited. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.CreateFirewallPolicyRequest.verify|verify} messages.
                     * @param message CreateFirewallPolicyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recaptchaenterprise.v1.ICreateFirewallPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateFirewallPolicyRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateFirewallPolicyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recaptchaenterprise.v1.CreateFirewallPolicyRequest;

                    /**
                     * Decodes a CreateFirewallPolicyRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateFirewallPolicyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recaptchaenterprise.v1.CreateFirewallPolicyRequest;

                    /**
                     * Verifies a CreateFirewallPolicyRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateFirewallPolicyRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateFirewallPolicyRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recaptchaenterprise.v1.CreateFirewallPolicyRequest;

                    /**
                     * Creates a plain object from a CreateFirewallPolicyRequest message. Also converts values to other types if specified.
                     * @param message CreateFirewallPolicyRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recaptchaenterprise.v1.CreateFirewallPolicyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateFirewallPolicyRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateFirewallPolicyRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListFirewallPoliciesRequest. */
                interface IListFirewallPoliciesRequest {

                    /** ListFirewallPoliciesRequest parent */
                    parent?: (string|null);

                    /** ListFirewallPoliciesRequest pageSize */
                    pageSize?: (number|null);

                    /** ListFirewallPoliciesRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListFirewallPoliciesRequest. */
                class ListFirewallPoliciesRequest implements IListFirewallPoliciesRequest {

                    /**
                     * Constructs a new ListFirewallPoliciesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recaptchaenterprise.v1.IListFirewallPoliciesRequest);

                    /** ListFirewallPoliciesRequest parent. */
                    public parent: string;

                    /** ListFirewallPoliciesRequest pageSize. */
                    public pageSize: number;

                    /** ListFirewallPoliciesRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListFirewallPoliciesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListFirewallPoliciesRequest instance
                     */
                    public static create(properties?: google.cloud.recaptchaenterprise.v1.IListFirewallPoliciesRequest): google.cloud.recaptchaenterprise.v1.ListFirewallPoliciesRequest;

                    /**
                     * Encodes the specified ListFirewallPoliciesRequest message. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.ListFirewallPoliciesRequest.verify|verify} messages.
                     * @param message ListFirewallPoliciesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recaptchaenterprise.v1.IListFirewallPoliciesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListFirewallPoliciesRequest message, length delimited. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.ListFirewallPoliciesRequest.verify|verify} messages.
                     * @param message ListFirewallPoliciesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recaptchaenterprise.v1.IListFirewallPoliciesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListFirewallPoliciesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListFirewallPoliciesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recaptchaenterprise.v1.ListFirewallPoliciesRequest;

                    /**
                     * Decodes a ListFirewallPoliciesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListFirewallPoliciesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recaptchaenterprise.v1.ListFirewallPoliciesRequest;

                    /**
                     * Verifies a ListFirewallPoliciesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListFirewallPoliciesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListFirewallPoliciesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recaptchaenterprise.v1.ListFirewallPoliciesRequest;

                    /**
                     * Creates a plain object from a ListFirewallPoliciesRequest message. Also converts values to other types if specified.
                     * @param message ListFirewallPoliciesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recaptchaenterprise.v1.ListFirewallPoliciesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListFirewallPoliciesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListFirewallPoliciesRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListFirewallPoliciesResponse. */
                interface IListFirewallPoliciesResponse {

                    /** ListFirewallPoliciesResponse firewallPolicies */
                    firewallPolicies?: (google.cloud.recaptchaenterprise.v1.IFirewallPolicy[]|null);

                    /** ListFirewallPoliciesResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListFirewallPoliciesResponse. */
                class ListFirewallPoliciesResponse implements IListFirewallPoliciesResponse {

                    /**
                     * Constructs a new ListFirewallPoliciesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recaptchaenterprise.v1.IListFirewallPoliciesResponse);

                    /** ListFirewallPoliciesResponse firewallPolicies. */
                    public firewallPolicies: google.cloud.recaptchaenterprise.v1.IFirewallPolicy[];

                    /** ListFirewallPoliciesResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListFirewallPoliciesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListFirewallPoliciesResponse instance
                     */
                    public static create(properties?: google.cloud.recaptchaenterprise.v1.IListFirewallPoliciesResponse): google.cloud.recaptchaenterprise.v1.ListFirewallPoliciesResponse;

                    /**
                     * Encodes the specified ListFirewallPoliciesResponse message. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.ListFirewallPoliciesResponse.verify|verify} messages.
                     * @param message ListFirewallPoliciesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recaptchaenterprise.v1.IListFirewallPoliciesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListFirewallPoliciesResponse message, length delimited. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.ListFirewallPoliciesResponse.verify|verify} messages.
                     * @param message ListFirewallPoliciesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recaptchaenterprise.v1.IListFirewallPoliciesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListFirewallPoliciesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListFirewallPoliciesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recaptchaenterprise.v1.ListFirewallPoliciesResponse;

                    /**
                     * Decodes a ListFirewallPoliciesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListFirewallPoliciesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recaptchaenterprise.v1.ListFirewallPoliciesResponse;

                    /**
                     * Verifies a ListFirewallPoliciesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListFirewallPoliciesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListFirewallPoliciesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recaptchaenterprise.v1.ListFirewallPoliciesResponse;

                    /**
                     * Creates a plain object from a ListFirewallPoliciesResponse message. Also converts values to other types if specified.
                     * @param message ListFirewallPoliciesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recaptchaenterprise.v1.ListFirewallPoliciesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListFirewallPoliciesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListFirewallPoliciesResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetFirewallPolicyRequest. */
                interface IGetFirewallPolicyRequest {

                    /** GetFirewallPolicyRequest name */
                    name?: (string|null);
                }

                /** Represents a GetFirewallPolicyRequest. */
                class GetFirewallPolicyRequest implements IGetFirewallPolicyRequest {

                    /**
                     * Constructs a new GetFirewallPolicyRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recaptchaenterprise.v1.IGetFirewallPolicyRequest);

                    /** GetFirewallPolicyRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetFirewallPolicyRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetFirewallPolicyRequest instance
                     */
                    public static create(properties?: google.cloud.recaptchaenterprise.v1.IGetFirewallPolicyRequest): google.cloud.recaptchaenterprise.v1.GetFirewallPolicyRequest;

                    /**
                     * Encodes the specified GetFirewallPolicyRequest message. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.GetFirewallPolicyRequest.verify|verify} messages.
                     * @param message GetFirewallPolicyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recaptchaenterprise.v1.IGetFirewallPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetFirewallPolicyRequest message, length delimited. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.GetFirewallPolicyRequest.verify|verify} messages.
                     * @param message GetFirewallPolicyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recaptchaenterprise.v1.IGetFirewallPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetFirewallPolicyRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetFirewallPolicyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recaptchaenterprise.v1.GetFirewallPolicyRequest;

                    /**
                     * Decodes a GetFirewallPolicyRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetFirewallPolicyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recaptchaenterprise.v1.GetFirewallPolicyRequest;

                    /**
                     * Verifies a GetFirewallPolicyRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetFirewallPolicyRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetFirewallPolicyRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recaptchaenterprise.v1.GetFirewallPolicyRequest;

                    /**
                     * Creates a plain object from a GetFirewallPolicyRequest message. Also converts values to other types if specified.
                     * @param message GetFirewallPolicyRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recaptchaenterprise.v1.GetFirewallPolicyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetFirewallPolicyRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetFirewallPolicyRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpdateFirewallPolicyRequest. */
                interface IUpdateFirewallPolicyRequest {

                    /** UpdateFirewallPolicyRequest firewallPolicy */
                    firewallPolicy?: (google.cloud.recaptchaenterprise.v1.IFirewallPolicy|null);

                    /** UpdateFirewallPolicyRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);
                }

                /** Represents an UpdateFirewallPolicyRequest. */
                class UpdateFirewallPolicyRequest implements IUpdateFirewallPolicyRequest {

                    /**
                     * Constructs a new UpdateFirewallPolicyRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recaptchaenterprise.v1.IUpdateFirewallPolicyRequest);

                    /** UpdateFirewallPolicyRequest firewallPolicy. */
                    public firewallPolicy?: (google.cloud.recaptchaenterprise.v1.IFirewallPolicy|null);

                    /** UpdateFirewallPolicyRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /**
                     * Creates a new UpdateFirewallPolicyRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateFirewallPolicyRequest instance
                     */
                    public static create(properties?: google.cloud.recaptchaenterprise.v1.IUpdateFirewallPolicyRequest): google.cloud.recaptchaenterprise.v1.UpdateFirewallPolicyRequest;

                    /**
                     * Encodes the specified UpdateFirewallPolicyRequest message. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.UpdateFirewallPolicyRequest.verify|verify} messages.
                     * @param message UpdateFirewallPolicyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recaptchaenterprise.v1.IUpdateFirewallPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateFirewallPolicyRequest message, length delimited. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.UpdateFirewallPolicyRequest.verify|verify} messages.
                     * @param message UpdateFirewallPolicyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recaptchaenterprise.v1.IUpdateFirewallPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateFirewallPolicyRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateFirewallPolicyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recaptchaenterprise.v1.UpdateFirewallPolicyRequest;

                    /**
                     * Decodes an UpdateFirewallPolicyRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateFirewallPolicyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recaptchaenterprise.v1.UpdateFirewallPolicyRequest;

                    /**
                     * Verifies an UpdateFirewallPolicyRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateFirewallPolicyRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateFirewallPolicyRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recaptchaenterprise.v1.UpdateFirewallPolicyRequest;

                    /**
                     * Creates a plain object from an UpdateFirewallPolicyRequest message. Also converts values to other types if specified.
                     * @param message UpdateFirewallPolicyRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recaptchaenterprise.v1.UpdateFirewallPolicyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateFirewallPolicyRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdateFirewallPolicyRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeleteFirewallPolicyRequest. */
                interface IDeleteFirewallPolicyRequest {

                    /** DeleteFirewallPolicyRequest name */
                    name?: (string|null);
                }

                /** Represents a DeleteFirewallPolicyRequest. */
                class DeleteFirewallPolicyRequest implements IDeleteFirewallPolicyRequest {

                    /**
                     * Constructs a new DeleteFirewallPolicyRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recaptchaenterprise.v1.IDeleteFirewallPolicyRequest);

                    /** DeleteFirewallPolicyRequest name. */
                    public name: string;

                    /**
                     * Creates a new DeleteFirewallPolicyRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteFirewallPolicyRequest instance
                     */
                    public static create(properties?: google.cloud.recaptchaenterprise.v1.IDeleteFirewallPolicyRequest): google.cloud.recaptchaenterprise.v1.DeleteFirewallPolicyRequest;

                    /**
                     * Encodes the specified DeleteFirewallPolicyRequest message. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.DeleteFirewallPolicyRequest.verify|verify} messages.
                     * @param message DeleteFirewallPolicyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recaptchaenterprise.v1.IDeleteFirewallPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteFirewallPolicyRequest message, length delimited. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.DeleteFirewallPolicyRequest.verify|verify} messages.
                     * @param message DeleteFirewallPolicyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recaptchaenterprise.v1.IDeleteFirewallPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteFirewallPolicyRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteFirewallPolicyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recaptchaenterprise.v1.DeleteFirewallPolicyRequest;

                    /**
                     * Decodes a DeleteFirewallPolicyRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteFirewallPolicyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recaptchaenterprise.v1.DeleteFirewallPolicyRequest;

                    /**
                     * Verifies a DeleteFirewallPolicyRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteFirewallPolicyRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteFirewallPolicyRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recaptchaenterprise.v1.DeleteFirewallPolicyRequest;

                    /**
                     * Creates a plain object from a DeleteFirewallPolicyRequest message. Also converts values to other types if specified.
                     * @param message DeleteFirewallPolicyRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recaptchaenterprise.v1.DeleteFirewallPolicyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteFirewallPolicyRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeleteFirewallPolicyRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ReorderFirewallPoliciesRequest. */
                interface IReorderFirewallPoliciesRequest {

                    /** ReorderFirewallPoliciesRequest parent */
                    parent?: (string|null);

                    /** ReorderFirewallPoliciesRequest names */
                    names?: (string[]|null);
                }

                /** Represents a ReorderFirewallPoliciesRequest. */
                class ReorderFirewallPoliciesRequest implements IReorderFirewallPoliciesRequest {

                    /**
                     * Constructs a new ReorderFirewallPoliciesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recaptchaenterprise.v1.IReorderFirewallPoliciesRequest);

                    /** ReorderFirewallPoliciesRequest parent. */
                    public parent: string;

                    /** ReorderFirewallPoliciesRequest names. */
                    public names: string[];

                    /**
                     * Creates a new ReorderFirewallPoliciesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ReorderFirewallPoliciesRequest instance
                     */
                    public static create(properties?: google.cloud.recaptchaenterprise.v1.IReorderFirewallPoliciesRequest): google.cloud.recaptchaenterprise.v1.ReorderFirewallPoliciesRequest;

                    /**
                     * Encodes the specified ReorderFirewallPoliciesRequest message. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.ReorderFirewallPoliciesRequest.verify|verify} messages.
                     * @param message ReorderFirewallPoliciesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recaptchaenterprise.v1.IReorderFirewallPoliciesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ReorderFirewallPoliciesRequest message, length delimited. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.ReorderFirewallPoliciesRequest.verify|verify} messages.
                     * @param message ReorderFirewallPoliciesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recaptchaenterprise.v1.IReorderFirewallPoliciesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ReorderFirewallPoliciesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ReorderFirewallPoliciesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recaptchaenterprise.v1.ReorderFirewallPoliciesRequest;

                    /**
                     * Decodes a ReorderFirewallPoliciesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ReorderFirewallPoliciesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recaptchaenterprise.v1.ReorderFirewallPoliciesRequest;

                    /**
                     * Verifies a ReorderFirewallPoliciesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ReorderFirewallPoliciesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ReorderFirewallPoliciesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recaptchaenterprise.v1.ReorderFirewallPoliciesRequest;

                    /**
                     * Creates a plain object from a ReorderFirewallPoliciesRequest message. Also converts values to other types if specified.
                     * @param message ReorderFirewallPoliciesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recaptchaenterprise.v1.ReorderFirewallPoliciesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ReorderFirewallPoliciesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ReorderFirewallPoliciesRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ReorderFirewallPoliciesResponse. */
                interface IReorderFirewallPoliciesResponse {
                }

                /** Represents a ReorderFirewallPoliciesResponse. */
                class ReorderFirewallPoliciesResponse implements IReorderFirewallPoliciesResponse {

                    /**
                     * Constructs a new ReorderFirewallPoliciesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recaptchaenterprise.v1.IReorderFirewallPoliciesResponse);

                    /**
                     * Creates a new ReorderFirewallPoliciesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ReorderFirewallPoliciesResponse instance
                     */
                    public static create(properties?: google.cloud.recaptchaenterprise.v1.IReorderFirewallPoliciesResponse): google.cloud.recaptchaenterprise.v1.ReorderFirewallPoliciesResponse;

                    /**
                     * Encodes the specified ReorderFirewallPoliciesResponse message. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.ReorderFirewallPoliciesResponse.verify|verify} messages.
                     * @param message ReorderFirewallPoliciesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recaptchaenterprise.v1.IReorderFirewallPoliciesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ReorderFirewallPoliciesResponse message, length delimited. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.ReorderFirewallPoliciesResponse.verify|verify} messages.
                     * @param message ReorderFirewallPoliciesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recaptchaenterprise.v1.IReorderFirewallPoliciesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ReorderFirewallPoliciesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ReorderFirewallPoliciesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recaptchaenterprise.v1.ReorderFirewallPoliciesResponse;

                    /**
                     * Decodes a ReorderFirewallPoliciesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ReorderFirewallPoliciesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recaptchaenterprise.v1.ReorderFirewallPoliciesResponse;

                    /**
                     * Verifies a ReorderFirewallPoliciesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ReorderFirewallPoliciesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ReorderFirewallPoliciesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recaptchaenterprise.v1.ReorderFirewallPoliciesResponse;

                    /**
                     * Creates a plain object from a ReorderFirewallPoliciesResponse message. Also converts values to other types if specified.
                     * @param message ReorderFirewallPoliciesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recaptchaenterprise.v1.ReorderFirewallPoliciesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ReorderFirewallPoliciesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ReorderFirewallPoliciesResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a MigrateKeyRequest. */
                interface IMigrateKeyRequest {

                    /** MigrateKeyRequest name */
                    name?: (string|null);

                    /** MigrateKeyRequest skipBillingCheck */
                    skipBillingCheck?: (boolean|null);
                }

                /** Represents a MigrateKeyRequest. */
                class MigrateKeyRequest implements IMigrateKeyRequest {

                    /**
                     * Constructs a new MigrateKeyRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recaptchaenterprise.v1.IMigrateKeyRequest);

                    /** MigrateKeyRequest name. */
                    public name: string;

                    /** MigrateKeyRequest skipBillingCheck. */
                    public skipBillingCheck: boolean;

                    /**
                     * Creates a new MigrateKeyRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns MigrateKeyRequest instance
                     */
                    public static create(properties?: google.cloud.recaptchaenterprise.v1.IMigrateKeyRequest): google.cloud.recaptchaenterprise.v1.MigrateKeyRequest;

                    /**
                     * Encodes the specified MigrateKeyRequest message. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.MigrateKeyRequest.verify|verify} messages.
                     * @param message MigrateKeyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recaptchaenterprise.v1.IMigrateKeyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified MigrateKeyRequest message, length delimited. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.MigrateKeyRequest.verify|verify} messages.
                     * @param message MigrateKeyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recaptchaenterprise.v1.IMigrateKeyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a MigrateKeyRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns MigrateKeyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recaptchaenterprise.v1.MigrateKeyRequest;

                    /**
                     * Decodes a MigrateKeyRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns MigrateKeyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recaptchaenterprise.v1.MigrateKeyRequest;

                    /**
                     * Verifies a MigrateKeyRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a MigrateKeyRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns MigrateKeyRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recaptchaenterprise.v1.MigrateKeyRequest;

                    /**
                     * Creates a plain object from a MigrateKeyRequest message. Also converts values to other types if specified.
                     * @param message MigrateKeyRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recaptchaenterprise.v1.MigrateKeyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this MigrateKeyRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for MigrateKeyRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetMetricsRequest. */
                interface IGetMetricsRequest {

                    /** GetMetricsRequest name */
                    name?: (string|null);
                }

                /** Represents a GetMetricsRequest. */
                class GetMetricsRequest implements IGetMetricsRequest {

                    /**
                     * Constructs a new GetMetricsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recaptchaenterprise.v1.IGetMetricsRequest);

                    /** GetMetricsRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetMetricsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetMetricsRequest instance
                     */
                    public static create(properties?: google.cloud.recaptchaenterprise.v1.IGetMetricsRequest): google.cloud.recaptchaenterprise.v1.GetMetricsRequest;

                    /**
                     * Encodes the specified GetMetricsRequest message. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.GetMetricsRequest.verify|verify} messages.
                     * @param message GetMetricsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recaptchaenterprise.v1.IGetMetricsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetMetricsRequest message, length delimited. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.GetMetricsRequest.verify|verify} messages.
                     * @param message GetMetricsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recaptchaenterprise.v1.IGetMetricsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetMetricsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetMetricsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recaptchaenterprise.v1.GetMetricsRequest;

                    /**
                     * Decodes a GetMetricsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetMetricsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recaptchaenterprise.v1.GetMetricsRequest;

                    /**
                     * Verifies a GetMetricsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetMetricsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetMetricsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recaptchaenterprise.v1.GetMetricsRequest;

                    /**
                     * Creates a plain object from a GetMetricsRequest message. Also converts values to other types if specified.
                     * @param message GetMetricsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recaptchaenterprise.v1.GetMetricsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetMetricsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetMetricsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Metrics. */
                interface IMetrics {

                    /** Metrics name */
                    name?: (string|null);

                    /** Metrics startTime */
                    startTime?: (google.protobuf.ITimestamp|null);

                    /** Metrics scoreMetrics */
                    scoreMetrics?: (google.cloud.recaptchaenterprise.v1.IScoreMetrics[]|null);

                    /** Metrics challengeMetrics */
                    challengeMetrics?: (google.cloud.recaptchaenterprise.v1.IChallengeMetrics[]|null);
                }

                /** Represents a Metrics. */
                class Metrics implements IMetrics {

                    /**
                     * Constructs a new Metrics.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recaptchaenterprise.v1.IMetrics);

                    /** Metrics name. */
                    public name: string;

                    /** Metrics startTime. */
                    public startTime?: (google.protobuf.ITimestamp|null);

                    /** Metrics scoreMetrics. */
                    public scoreMetrics: google.cloud.recaptchaenterprise.v1.IScoreMetrics[];

                    /** Metrics challengeMetrics. */
                    public challengeMetrics: google.cloud.recaptchaenterprise.v1.IChallengeMetrics[];

                    /**
                     * Creates a new Metrics instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Metrics instance
                     */
                    public static create(properties?: google.cloud.recaptchaenterprise.v1.IMetrics): google.cloud.recaptchaenterprise.v1.Metrics;

                    /**
                     * Encodes the specified Metrics message. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.Metrics.verify|verify} messages.
                     * @param message Metrics message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recaptchaenterprise.v1.IMetrics, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Metrics message, length delimited. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.Metrics.verify|verify} messages.
                     * @param message Metrics message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recaptchaenterprise.v1.IMetrics, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Metrics message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Metrics
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recaptchaenterprise.v1.Metrics;

                    /**
                     * Decodes a Metrics message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Metrics
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recaptchaenterprise.v1.Metrics;

                    /**
                     * Verifies a Metrics message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Metrics message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Metrics
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recaptchaenterprise.v1.Metrics;

                    /**
                     * Creates a plain object from a Metrics message. Also converts values to other types if specified.
                     * @param message Metrics
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recaptchaenterprise.v1.Metrics, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Metrics to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Metrics
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a RetrieveLegacySecretKeyResponse. */
                interface IRetrieveLegacySecretKeyResponse {

                    /** RetrieveLegacySecretKeyResponse legacySecretKey */
                    legacySecretKey?: (string|null);
                }

                /** Represents a RetrieveLegacySecretKeyResponse. */
                class RetrieveLegacySecretKeyResponse implements IRetrieveLegacySecretKeyResponse {

                    /**
                     * Constructs a new RetrieveLegacySecretKeyResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recaptchaenterprise.v1.IRetrieveLegacySecretKeyResponse);

                    /** RetrieveLegacySecretKeyResponse legacySecretKey. */
                    public legacySecretKey: string;

                    /**
                     * Creates a new RetrieveLegacySecretKeyResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RetrieveLegacySecretKeyResponse instance
                     */
                    public static create(properties?: google.cloud.recaptchaenterprise.v1.IRetrieveLegacySecretKeyResponse): google.cloud.recaptchaenterprise.v1.RetrieveLegacySecretKeyResponse;

                    /**
                     * Encodes the specified RetrieveLegacySecretKeyResponse message. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.RetrieveLegacySecretKeyResponse.verify|verify} messages.
                     * @param message RetrieveLegacySecretKeyResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recaptchaenterprise.v1.IRetrieveLegacySecretKeyResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RetrieveLegacySecretKeyResponse message, length delimited. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.RetrieveLegacySecretKeyResponse.verify|verify} messages.
                     * @param message RetrieveLegacySecretKeyResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recaptchaenterprise.v1.IRetrieveLegacySecretKeyResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RetrieveLegacySecretKeyResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RetrieveLegacySecretKeyResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recaptchaenterprise.v1.RetrieveLegacySecretKeyResponse;

                    /**
                     * Decodes a RetrieveLegacySecretKeyResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RetrieveLegacySecretKeyResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recaptchaenterprise.v1.RetrieveLegacySecretKeyResponse;

                    /**
                     * Verifies a RetrieveLegacySecretKeyResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RetrieveLegacySecretKeyResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RetrieveLegacySecretKeyResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recaptchaenterprise.v1.RetrieveLegacySecretKeyResponse;

                    /**
                     * Creates a plain object from a RetrieveLegacySecretKeyResponse message. Also converts values to other types if specified.
                     * @param message RetrieveLegacySecretKeyResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recaptchaenterprise.v1.RetrieveLegacySecretKeyResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RetrieveLegacySecretKeyResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for RetrieveLegacySecretKeyResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Key. */
                interface IKey {

                    /** Key name */
                    name?: (string|null);

                    /** Key displayName */
                    displayName?: (string|null);

                    /** Key webSettings */
                    webSettings?: (google.cloud.recaptchaenterprise.v1.IWebKeySettings|null);

                    /** Key androidSettings */
                    androidSettings?: (google.cloud.recaptchaenterprise.v1.IAndroidKeySettings|null);

                    /** Key iosSettings */
                    iosSettings?: (google.cloud.recaptchaenterprise.v1.IIOSKeySettings|null);

                    /** Key expressSettings */
                    expressSettings?: (google.cloud.recaptchaenterprise.v1.IExpressKeySettings|null);

                    /** Key labels */
                    labels?: ({ [k: string]: string }|null);

                    /** Key createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** Key testingOptions */
                    testingOptions?: (google.cloud.recaptchaenterprise.v1.ITestingOptions|null);

                    /** Key wafSettings */
                    wafSettings?: (google.cloud.recaptchaenterprise.v1.IWafSettings|null);
                }

                /** Represents a Key. */
                class Key implements IKey {

                    /**
                     * Constructs a new Key.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recaptchaenterprise.v1.IKey);

                    /** Key name. */
                    public name: string;

                    /** Key displayName. */
                    public displayName: string;

                    /** Key webSettings. */
                    public webSettings?: (google.cloud.recaptchaenterprise.v1.IWebKeySettings|null);

                    /** Key androidSettings. */
                    public androidSettings?: (google.cloud.recaptchaenterprise.v1.IAndroidKeySettings|null);

                    /** Key iosSettings. */
                    public iosSettings?: (google.cloud.recaptchaenterprise.v1.IIOSKeySettings|null);

                    /** Key expressSettings. */
                    public expressSettings?: (google.cloud.recaptchaenterprise.v1.IExpressKeySettings|null);

                    /** Key labels. */
                    public labels: { [k: string]: string };

                    /** Key createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** Key testingOptions. */
                    public testingOptions?: (google.cloud.recaptchaenterprise.v1.ITestingOptions|null);

                    /** Key wafSettings. */
                    public wafSettings?: (google.cloud.recaptchaenterprise.v1.IWafSettings|null);

                    /** Key platformSettings. */
                    public platformSettings?: ("webSettings"|"androidSettings"|"iosSettings"|"expressSettings");

                    /**
                     * Creates a new Key instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Key instance
                     */
                    public static create(properties?: google.cloud.recaptchaenterprise.v1.IKey): google.cloud.recaptchaenterprise.v1.Key;

                    /**
                     * Encodes the specified Key message. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.Key.verify|verify} messages.
                     * @param message Key message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recaptchaenterprise.v1.IKey, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Key message, length delimited. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.Key.verify|verify} messages.
                     * @param message Key message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recaptchaenterprise.v1.IKey, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Key message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Key
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recaptchaenterprise.v1.Key;

                    /**
                     * Decodes a Key message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Key
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recaptchaenterprise.v1.Key;

                    /**
                     * Verifies a Key message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Key message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Key
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recaptchaenterprise.v1.Key;

                    /**
                     * Creates a plain object from a Key message. Also converts values to other types if specified.
                     * @param message Key
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recaptchaenterprise.v1.Key, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Key to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Key
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a TestingOptions. */
                interface ITestingOptions {

                    /** TestingOptions testingScore */
                    testingScore?: (number|null);

                    /** TestingOptions testingChallenge */
                    testingChallenge?: (google.cloud.recaptchaenterprise.v1.TestingOptions.TestingChallenge|keyof typeof google.cloud.recaptchaenterprise.v1.TestingOptions.TestingChallenge|null);
                }

                /** Represents a TestingOptions. */
                class TestingOptions implements ITestingOptions {

                    /**
                     * Constructs a new TestingOptions.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recaptchaenterprise.v1.ITestingOptions);

                    /** TestingOptions testingScore. */
                    public testingScore: number;

                    /** TestingOptions testingChallenge. */
                    public testingChallenge: (google.cloud.recaptchaenterprise.v1.TestingOptions.TestingChallenge|keyof typeof google.cloud.recaptchaenterprise.v1.TestingOptions.TestingChallenge);

                    /**
                     * Creates a new TestingOptions instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TestingOptions instance
                     */
                    public static create(properties?: google.cloud.recaptchaenterprise.v1.ITestingOptions): google.cloud.recaptchaenterprise.v1.TestingOptions;

                    /**
                     * Encodes the specified TestingOptions message. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.TestingOptions.verify|verify} messages.
                     * @param message TestingOptions message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recaptchaenterprise.v1.ITestingOptions, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TestingOptions message, length delimited. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.TestingOptions.verify|verify} messages.
                     * @param message TestingOptions message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recaptchaenterprise.v1.ITestingOptions, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TestingOptions message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TestingOptions
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recaptchaenterprise.v1.TestingOptions;

                    /**
                     * Decodes a TestingOptions message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TestingOptions
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recaptchaenterprise.v1.TestingOptions;

                    /**
                     * Verifies a TestingOptions message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TestingOptions message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TestingOptions
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recaptchaenterprise.v1.TestingOptions;

                    /**
                     * Creates a plain object from a TestingOptions message. Also converts values to other types if specified.
                     * @param message TestingOptions
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recaptchaenterprise.v1.TestingOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TestingOptions to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for TestingOptions
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace TestingOptions {

                    /** TestingChallenge enum. */
                    enum TestingChallenge {
                        TESTING_CHALLENGE_UNSPECIFIED = 0,
                        NOCAPTCHA = 1,
                        UNSOLVABLE_CHALLENGE = 2
                    }
                }

                /** Properties of a WebKeySettings. */
                interface IWebKeySettings {

                    /** WebKeySettings allowAllDomains */
                    allowAllDomains?: (boolean|null);

                    /** WebKeySettings allowedDomains */
                    allowedDomains?: (string[]|null);

                    /** WebKeySettings allowAmpTraffic */
                    allowAmpTraffic?: (boolean|null);

                    /** WebKeySettings integrationType */
                    integrationType?: (google.cloud.recaptchaenterprise.v1.WebKeySettings.IntegrationType|keyof typeof google.cloud.recaptchaenterprise.v1.WebKeySettings.IntegrationType|null);

                    /** WebKeySettings challengeSecurityPreference */
                    challengeSecurityPreference?: (google.cloud.recaptchaenterprise.v1.WebKeySettings.ChallengeSecurityPreference|keyof typeof google.cloud.recaptchaenterprise.v1.WebKeySettings.ChallengeSecurityPreference|null);
                }

                /** Represents a WebKeySettings. */
                class WebKeySettings implements IWebKeySettings {

                    /**
                     * Constructs a new WebKeySettings.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recaptchaenterprise.v1.IWebKeySettings);

                    /** WebKeySettings allowAllDomains. */
                    public allowAllDomains: boolean;

                    /** WebKeySettings allowedDomains. */
                    public allowedDomains: string[];

                    /** WebKeySettings allowAmpTraffic. */
                    public allowAmpTraffic: boolean;

                    /** WebKeySettings integrationType. */
                    public integrationType: (google.cloud.recaptchaenterprise.v1.WebKeySettings.IntegrationType|keyof typeof google.cloud.recaptchaenterprise.v1.WebKeySettings.IntegrationType);

                    /** WebKeySettings challengeSecurityPreference. */
                    public challengeSecurityPreference: (google.cloud.recaptchaenterprise.v1.WebKeySettings.ChallengeSecurityPreference|keyof typeof google.cloud.recaptchaenterprise.v1.WebKeySettings.ChallengeSecurityPreference);

                    /**
                     * Creates a new WebKeySettings instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns WebKeySettings instance
                     */
                    public static create(properties?: google.cloud.recaptchaenterprise.v1.IWebKeySettings): google.cloud.recaptchaenterprise.v1.WebKeySettings;

                    /**
                     * Encodes the specified WebKeySettings message. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.WebKeySettings.verify|verify} messages.
                     * @param message WebKeySettings message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recaptchaenterprise.v1.IWebKeySettings, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified WebKeySettings message, length delimited. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.WebKeySettings.verify|verify} messages.
                     * @param message WebKeySettings message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recaptchaenterprise.v1.IWebKeySettings, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a WebKeySettings message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns WebKeySettings
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recaptchaenterprise.v1.WebKeySettings;

                    /**
                     * Decodes a WebKeySettings message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns WebKeySettings
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recaptchaenterprise.v1.WebKeySettings;

                    /**
                     * Verifies a WebKeySettings message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a WebKeySettings message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns WebKeySettings
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recaptchaenterprise.v1.WebKeySettings;

                    /**
                     * Creates a plain object from a WebKeySettings message. Also converts values to other types if specified.
                     * @param message WebKeySettings
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recaptchaenterprise.v1.WebKeySettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this WebKeySettings to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for WebKeySettings
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace WebKeySettings {

                    /** IntegrationType enum. */
                    enum IntegrationType {
                        INTEGRATION_TYPE_UNSPECIFIED = 0,
                        SCORE = 1,
                        CHECKBOX = 2,
                        INVISIBLE = 3
                    }

                    /** ChallengeSecurityPreference enum. */
                    enum ChallengeSecurityPreference {
                        CHALLENGE_SECURITY_PREFERENCE_UNSPECIFIED = 0,
                        USABILITY = 1,
                        BALANCE = 2,
                        SECURITY = 3
                    }
                }

                /** Properties of an AndroidKeySettings. */
                interface IAndroidKeySettings {

                    /** AndroidKeySettings allowAllPackageNames */
                    allowAllPackageNames?: (boolean|null);

                    /** AndroidKeySettings allowedPackageNames */
                    allowedPackageNames?: (string[]|null);

                    /** AndroidKeySettings supportNonGoogleAppStoreDistribution */
                    supportNonGoogleAppStoreDistribution?: (boolean|null);
                }

                /** Represents an AndroidKeySettings. */
                class AndroidKeySettings implements IAndroidKeySettings {

                    /**
                     * Constructs a new AndroidKeySettings.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recaptchaenterprise.v1.IAndroidKeySettings);

                    /** AndroidKeySettings allowAllPackageNames. */
                    public allowAllPackageNames: boolean;

                    /** AndroidKeySettings allowedPackageNames. */
                    public allowedPackageNames: string[];

                    /** AndroidKeySettings supportNonGoogleAppStoreDistribution. */
                    public supportNonGoogleAppStoreDistribution: boolean;

                    /**
                     * Creates a new AndroidKeySettings instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AndroidKeySettings instance
                     */
                    public static create(properties?: google.cloud.recaptchaenterprise.v1.IAndroidKeySettings): google.cloud.recaptchaenterprise.v1.AndroidKeySettings;

                    /**
                     * Encodes the specified AndroidKeySettings message. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.AndroidKeySettings.verify|verify} messages.
                     * @param message AndroidKeySettings message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recaptchaenterprise.v1.IAndroidKeySettings, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AndroidKeySettings message, length delimited. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.AndroidKeySettings.verify|verify} messages.
                     * @param message AndroidKeySettings message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recaptchaenterprise.v1.IAndroidKeySettings, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AndroidKeySettings message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AndroidKeySettings
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recaptchaenterprise.v1.AndroidKeySettings;

                    /**
                     * Decodes an AndroidKeySettings message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AndroidKeySettings
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recaptchaenterprise.v1.AndroidKeySettings;

                    /**
                     * Verifies an AndroidKeySettings message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AndroidKeySettings message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AndroidKeySettings
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recaptchaenterprise.v1.AndroidKeySettings;

                    /**
                     * Creates a plain object from an AndroidKeySettings message. Also converts values to other types if specified.
                     * @param message AndroidKeySettings
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recaptchaenterprise.v1.AndroidKeySettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AndroidKeySettings to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for AndroidKeySettings
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a IOSKeySettings. */
                interface IIOSKeySettings {

                    /** IOSKeySettings allowAllBundleIds */
                    allowAllBundleIds?: (boolean|null);

                    /** IOSKeySettings allowedBundleIds */
                    allowedBundleIds?: (string[]|null);

                    /** IOSKeySettings appleDeveloperId */
                    appleDeveloperId?: (google.cloud.recaptchaenterprise.v1.IAppleDeveloperId|null);
                }

                /** Represents a IOSKeySettings. */
                class IOSKeySettings implements IIOSKeySettings {

                    /**
                     * Constructs a new IOSKeySettings.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recaptchaenterprise.v1.IIOSKeySettings);

                    /** IOSKeySettings allowAllBundleIds. */
                    public allowAllBundleIds: boolean;

                    /** IOSKeySettings allowedBundleIds. */
                    public allowedBundleIds: string[];

                    /** IOSKeySettings appleDeveloperId. */
                    public appleDeveloperId?: (google.cloud.recaptchaenterprise.v1.IAppleDeveloperId|null);

                    /**
                     * Creates a new IOSKeySettings instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns IOSKeySettings instance
                     */
                    public static create(properties?: google.cloud.recaptchaenterprise.v1.IIOSKeySettings): google.cloud.recaptchaenterprise.v1.IOSKeySettings;

                    /**
                     * Encodes the specified IOSKeySettings message. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.IOSKeySettings.verify|verify} messages.
                     * @param message IOSKeySettings message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recaptchaenterprise.v1.IIOSKeySettings, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified IOSKeySettings message, length delimited. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.IOSKeySettings.verify|verify} messages.
                     * @param message IOSKeySettings message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recaptchaenterprise.v1.IIOSKeySettings, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a IOSKeySettings message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns IOSKeySettings
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recaptchaenterprise.v1.IOSKeySettings;

                    /**
                     * Decodes a IOSKeySettings message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns IOSKeySettings
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recaptchaenterprise.v1.IOSKeySettings;

                    /**
                     * Verifies a IOSKeySettings message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a IOSKeySettings message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns IOSKeySettings
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recaptchaenterprise.v1.IOSKeySettings;

                    /**
                     * Creates a plain object from a IOSKeySettings message. Also converts values to other types if specified.
                     * @param message IOSKeySettings
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recaptchaenterprise.v1.IOSKeySettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this IOSKeySettings to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for IOSKeySettings
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an ExpressKeySettings. */
                interface IExpressKeySettings {
                }

                /** Represents an ExpressKeySettings. */
                class ExpressKeySettings implements IExpressKeySettings {

                    /**
                     * Constructs a new ExpressKeySettings.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recaptchaenterprise.v1.IExpressKeySettings);

                    /**
                     * Creates a new ExpressKeySettings instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ExpressKeySettings instance
                     */
                    public static create(properties?: google.cloud.recaptchaenterprise.v1.IExpressKeySettings): google.cloud.recaptchaenterprise.v1.ExpressKeySettings;

                    /**
                     * Encodes the specified ExpressKeySettings message. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.ExpressKeySettings.verify|verify} messages.
                     * @param message ExpressKeySettings message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recaptchaenterprise.v1.IExpressKeySettings, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ExpressKeySettings message, length delimited. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.ExpressKeySettings.verify|verify} messages.
                     * @param message ExpressKeySettings message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recaptchaenterprise.v1.IExpressKeySettings, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ExpressKeySettings message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ExpressKeySettings
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recaptchaenterprise.v1.ExpressKeySettings;

                    /**
                     * Decodes an ExpressKeySettings message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ExpressKeySettings
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recaptchaenterprise.v1.ExpressKeySettings;

                    /**
                     * Verifies an ExpressKeySettings message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ExpressKeySettings message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ExpressKeySettings
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recaptchaenterprise.v1.ExpressKeySettings;

                    /**
                     * Creates a plain object from an ExpressKeySettings message. Also converts values to other types if specified.
                     * @param message ExpressKeySettings
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recaptchaenterprise.v1.ExpressKeySettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ExpressKeySettings to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ExpressKeySettings
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an AppleDeveloperId. */
                interface IAppleDeveloperId {

                    /** AppleDeveloperId privateKey */
                    privateKey?: (string|null);

                    /** AppleDeveloperId keyId */
                    keyId?: (string|null);

                    /** AppleDeveloperId teamId */
                    teamId?: (string|null);
                }

                /** Represents an AppleDeveloperId. */
                class AppleDeveloperId implements IAppleDeveloperId {

                    /**
                     * Constructs a new AppleDeveloperId.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recaptchaenterprise.v1.IAppleDeveloperId);

                    /** AppleDeveloperId privateKey. */
                    public privateKey: string;

                    /** AppleDeveloperId keyId. */
                    public keyId: string;

                    /** AppleDeveloperId teamId. */
                    public teamId: string;

                    /**
                     * Creates a new AppleDeveloperId instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AppleDeveloperId instance
                     */
                    public static create(properties?: google.cloud.recaptchaenterprise.v1.IAppleDeveloperId): google.cloud.recaptchaenterprise.v1.AppleDeveloperId;

                    /**
                     * Encodes the specified AppleDeveloperId message. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.AppleDeveloperId.verify|verify} messages.
                     * @param message AppleDeveloperId message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recaptchaenterprise.v1.IAppleDeveloperId, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AppleDeveloperId message, length delimited. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.AppleDeveloperId.verify|verify} messages.
                     * @param message AppleDeveloperId message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recaptchaenterprise.v1.IAppleDeveloperId, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AppleDeveloperId message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AppleDeveloperId
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recaptchaenterprise.v1.AppleDeveloperId;

                    /**
                     * Decodes an AppleDeveloperId message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AppleDeveloperId
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recaptchaenterprise.v1.AppleDeveloperId;

                    /**
                     * Verifies an AppleDeveloperId message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AppleDeveloperId message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AppleDeveloperId
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recaptchaenterprise.v1.AppleDeveloperId;

                    /**
                     * Creates a plain object from an AppleDeveloperId message. Also converts values to other types if specified.
                     * @param message AppleDeveloperId
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recaptchaenterprise.v1.AppleDeveloperId, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AppleDeveloperId to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for AppleDeveloperId
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ScoreDistribution. */
                interface IScoreDistribution {

                    /** ScoreDistribution scoreBuckets */
                    scoreBuckets?: ({ [k: string]: (number|Long|string) }|null);
                }

                /** Represents a ScoreDistribution. */
                class ScoreDistribution implements IScoreDistribution {

                    /**
                     * Constructs a new ScoreDistribution.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recaptchaenterprise.v1.IScoreDistribution);

                    /** ScoreDistribution scoreBuckets. */
                    public scoreBuckets: { [k: string]: (number|Long|string) };

                    /**
                     * Creates a new ScoreDistribution instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ScoreDistribution instance
                     */
                    public static create(properties?: google.cloud.recaptchaenterprise.v1.IScoreDistribution): google.cloud.recaptchaenterprise.v1.ScoreDistribution;

                    /**
                     * Encodes the specified ScoreDistribution message. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.ScoreDistribution.verify|verify} messages.
                     * @param message ScoreDistribution message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recaptchaenterprise.v1.IScoreDistribution, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ScoreDistribution message, length delimited. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.ScoreDistribution.verify|verify} messages.
                     * @param message ScoreDistribution message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recaptchaenterprise.v1.IScoreDistribution, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ScoreDistribution message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ScoreDistribution
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recaptchaenterprise.v1.ScoreDistribution;

                    /**
                     * Decodes a ScoreDistribution message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ScoreDistribution
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recaptchaenterprise.v1.ScoreDistribution;

                    /**
                     * Verifies a ScoreDistribution message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ScoreDistribution message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ScoreDistribution
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recaptchaenterprise.v1.ScoreDistribution;

                    /**
                     * Creates a plain object from a ScoreDistribution message. Also converts values to other types if specified.
                     * @param message ScoreDistribution
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recaptchaenterprise.v1.ScoreDistribution, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ScoreDistribution to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ScoreDistribution
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ScoreMetrics. */
                interface IScoreMetrics {

                    /** ScoreMetrics overallMetrics */
                    overallMetrics?: (google.cloud.recaptchaenterprise.v1.IScoreDistribution|null);

                    /** ScoreMetrics actionMetrics */
                    actionMetrics?: ({ [k: string]: google.cloud.recaptchaenterprise.v1.IScoreDistribution }|null);
                }

                /** Represents a ScoreMetrics. */
                class ScoreMetrics implements IScoreMetrics {

                    /**
                     * Constructs a new ScoreMetrics.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recaptchaenterprise.v1.IScoreMetrics);

                    /** ScoreMetrics overallMetrics. */
                    public overallMetrics?: (google.cloud.recaptchaenterprise.v1.IScoreDistribution|null);

                    /** ScoreMetrics actionMetrics. */
                    public actionMetrics: { [k: string]: google.cloud.recaptchaenterprise.v1.IScoreDistribution };

                    /**
                     * Creates a new ScoreMetrics instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ScoreMetrics instance
                     */
                    public static create(properties?: google.cloud.recaptchaenterprise.v1.IScoreMetrics): google.cloud.recaptchaenterprise.v1.ScoreMetrics;

                    /**
                     * Encodes the specified ScoreMetrics message. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.ScoreMetrics.verify|verify} messages.
                     * @param message ScoreMetrics message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recaptchaenterprise.v1.IScoreMetrics, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ScoreMetrics message, length delimited. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.ScoreMetrics.verify|verify} messages.
                     * @param message ScoreMetrics message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recaptchaenterprise.v1.IScoreMetrics, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ScoreMetrics message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ScoreMetrics
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recaptchaenterprise.v1.ScoreMetrics;

                    /**
                     * Decodes a ScoreMetrics message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ScoreMetrics
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recaptchaenterprise.v1.ScoreMetrics;

                    /**
                     * Verifies a ScoreMetrics message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ScoreMetrics message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ScoreMetrics
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recaptchaenterprise.v1.ScoreMetrics;

                    /**
                     * Creates a plain object from a ScoreMetrics message. Also converts values to other types if specified.
                     * @param message ScoreMetrics
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recaptchaenterprise.v1.ScoreMetrics, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ScoreMetrics to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ScoreMetrics
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ChallengeMetrics. */
                interface IChallengeMetrics {

                    /** ChallengeMetrics pageloadCount */
                    pageloadCount?: (number|Long|string|null);

                    /** ChallengeMetrics nocaptchaCount */
                    nocaptchaCount?: (number|Long|string|null);

                    /** ChallengeMetrics failedCount */
                    failedCount?: (number|Long|string|null);

                    /** ChallengeMetrics passedCount */
                    passedCount?: (number|Long|string|null);
                }

                /** Represents a ChallengeMetrics. */
                class ChallengeMetrics implements IChallengeMetrics {

                    /**
                     * Constructs a new ChallengeMetrics.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recaptchaenterprise.v1.IChallengeMetrics);

                    /** ChallengeMetrics pageloadCount. */
                    public pageloadCount: (number|Long|string);

                    /** ChallengeMetrics nocaptchaCount. */
                    public nocaptchaCount: (number|Long|string);

                    /** ChallengeMetrics failedCount. */
                    public failedCount: (number|Long|string);

                    /** ChallengeMetrics passedCount. */
                    public passedCount: (number|Long|string);

                    /**
                     * Creates a new ChallengeMetrics instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ChallengeMetrics instance
                     */
                    public static create(properties?: google.cloud.recaptchaenterprise.v1.IChallengeMetrics): google.cloud.recaptchaenterprise.v1.ChallengeMetrics;

                    /**
                     * Encodes the specified ChallengeMetrics message. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.ChallengeMetrics.verify|verify} messages.
                     * @param message ChallengeMetrics message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recaptchaenterprise.v1.IChallengeMetrics, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ChallengeMetrics message, length delimited. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.ChallengeMetrics.verify|verify} messages.
                     * @param message ChallengeMetrics message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recaptchaenterprise.v1.IChallengeMetrics, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ChallengeMetrics message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ChallengeMetrics
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recaptchaenterprise.v1.ChallengeMetrics;

                    /**
                     * Decodes a ChallengeMetrics message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ChallengeMetrics
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recaptchaenterprise.v1.ChallengeMetrics;

                    /**
                     * Verifies a ChallengeMetrics message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ChallengeMetrics message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ChallengeMetrics
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recaptchaenterprise.v1.ChallengeMetrics;

                    /**
                     * Creates a plain object from a ChallengeMetrics message. Also converts values to other types if specified.
                     * @param message ChallengeMetrics
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recaptchaenterprise.v1.ChallengeMetrics, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ChallengeMetrics to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ChallengeMetrics
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a FirewallPolicyAssessment. */
                interface IFirewallPolicyAssessment {

                    /** FirewallPolicyAssessment error */
                    error?: (google.rpc.IStatus|null);

                    /** FirewallPolicyAssessment firewallPolicy */
                    firewallPolicy?: (google.cloud.recaptchaenterprise.v1.IFirewallPolicy|null);
                }

                /** Represents a FirewallPolicyAssessment. */
                class FirewallPolicyAssessment implements IFirewallPolicyAssessment {

                    /**
                     * Constructs a new FirewallPolicyAssessment.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recaptchaenterprise.v1.IFirewallPolicyAssessment);

                    /** FirewallPolicyAssessment error. */
                    public error?: (google.rpc.IStatus|null);

                    /** FirewallPolicyAssessment firewallPolicy. */
                    public firewallPolicy?: (google.cloud.recaptchaenterprise.v1.IFirewallPolicy|null);

                    /**
                     * Creates a new FirewallPolicyAssessment instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns FirewallPolicyAssessment instance
                     */
                    public static create(properties?: google.cloud.recaptchaenterprise.v1.IFirewallPolicyAssessment): google.cloud.recaptchaenterprise.v1.FirewallPolicyAssessment;

                    /**
                     * Encodes the specified FirewallPolicyAssessment message. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.FirewallPolicyAssessment.verify|verify} messages.
                     * @param message FirewallPolicyAssessment message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recaptchaenterprise.v1.IFirewallPolicyAssessment, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified FirewallPolicyAssessment message, length delimited. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.FirewallPolicyAssessment.verify|verify} messages.
                     * @param message FirewallPolicyAssessment message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recaptchaenterprise.v1.IFirewallPolicyAssessment, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a FirewallPolicyAssessment message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns FirewallPolicyAssessment
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recaptchaenterprise.v1.FirewallPolicyAssessment;

                    /**
                     * Decodes a FirewallPolicyAssessment message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns FirewallPolicyAssessment
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recaptchaenterprise.v1.FirewallPolicyAssessment;

                    /**
                     * Verifies a FirewallPolicyAssessment message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a FirewallPolicyAssessment message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns FirewallPolicyAssessment
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recaptchaenterprise.v1.FirewallPolicyAssessment;

                    /**
                     * Creates a plain object from a FirewallPolicyAssessment message. Also converts values to other types if specified.
                     * @param message FirewallPolicyAssessment
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recaptchaenterprise.v1.FirewallPolicyAssessment, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this FirewallPolicyAssessment to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for FirewallPolicyAssessment
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a FirewallAction. */
                interface IFirewallAction {

                    /** FirewallAction allow */
                    allow?: (google.cloud.recaptchaenterprise.v1.FirewallAction.IAllowAction|null);

                    /** FirewallAction block */
                    block?: (google.cloud.recaptchaenterprise.v1.FirewallAction.IBlockAction|null);

                    /** FirewallAction includeRecaptchaScript */
                    includeRecaptchaScript?: (google.cloud.recaptchaenterprise.v1.FirewallAction.IIncludeRecaptchaScriptAction|null);

                    /** FirewallAction redirect */
                    redirect?: (google.cloud.recaptchaenterprise.v1.FirewallAction.IRedirectAction|null);

                    /** FirewallAction substitute */
                    substitute?: (google.cloud.recaptchaenterprise.v1.FirewallAction.ISubstituteAction|null);

                    /** FirewallAction setHeader */
                    setHeader?: (google.cloud.recaptchaenterprise.v1.FirewallAction.ISetHeaderAction|null);
                }

                /** Represents a FirewallAction. */
                class FirewallAction implements IFirewallAction {

                    /**
                     * Constructs a new FirewallAction.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recaptchaenterprise.v1.IFirewallAction);

                    /** FirewallAction allow. */
                    public allow?: (google.cloud.recaptchaenterprise.v1.FirewallAction.IAllowAction|null);

                    /** FirewallAction block. */
                    public block?: (google.cloud.recaptchaenterprise.v1.FirewallAction.IBlockAction|null);

                    /** FirewallAction includeRecaptchaScript. */
                    public includeRecaptchaScript?: (google.cloud.recaptchaenterprise.v1.FirewallAction.IIncludeRecaptchaScriptAction|null);

                    /** FirewallAction redirect. */
                    public redirect?: (google.cloud.recaptchaenterprise.v1.FirewallAction.IRedirectAction|null);

                    /** FirewallAction substitute. */
                    public substitute?: (google.cloud.recaptchaenterprise.v1.FirewallAction.ISubstituteAction|null);

                    /** FirewallAction setHeader. */
                    public setHeader?: (google.cloud.recaptchaenterprise.v1.FirewallAction.ISetHeaderAction|null);

                    /** FirewallAction firewallActionOneof. */
                    public firewallActionOneof?: ("allow"|"block"|"includeRecaptchaScript"|"redirect"|"substitute"|"setHeader");

                    /**
                     * Creates a new FirewallAction instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns FirewallAction instance
                     */
                    public static create(properties?: google.cloud.recaptchaenterprise.v1.IFirewallAction): google.cloud.recaptchaenterprise.v1.FirewallAction;

                    /**
                     * Encodes the specified FirewallAction message. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.FirewallAction.verify|verify} messages.
                     * @param message FirewallAction message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recaptchaenterprise.v1.IFirewallAction, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified FirewallAction message, length delimited. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.FirewallAction.verify|verify} messages.
                     * @param message FirewallAction message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recaptchaenterprise.v1.IFirewallAction, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a FirewallAction message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns FirewallAction
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recaptchaenterprise.v1.FirewallAction;

                    /**
                     * Decodes a FirewallAction message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns FirewallAction
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recaptchaenterprise.v1.FirewallAction;

                    /**
                     * Verifies a FirewallAction message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a FirewallAction message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns FirewallAction
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recaptchaenterprise.v1.FirewallAction;

                    /**
                     * Creates a plain object from a FirewallAction message. Also converts values to other types if specified.
                     * @param message FirewallAction
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recaptchaenterprise.v1.FirewallAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this FirewallAction to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for FirewallAction
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace FirewallAction {

                    /** Properties of an AllowAction. */
                    interface IAllowAction {
                    }

                    /** Represents an AllowAction. */
                    class AllowAction implements IAllowAction {

                        /**
                         * Constructs a new AllowAction.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.recaptchaenterprise.v1.FirewallAction.IAllowAction);

                        /**
                         * Creates a new AllowAction instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns AllowAction instance
                         */
                        public static create(properties?: google.cloud.recaptchaenterprise.v1.FirewallAction.IAllowAction): google.cloud.recaptchaenterprise.v1.FirewallAction.AllowAction;

                        /**
                         * Encodes the specified AllowAction message. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.FirewallAction.AllowAction.verify|verify} messages.
                         * @param message AllowAction message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.recaptchaenterprise.v1.FirewallAction.IAllowAction, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified AllowAction message, length delimited. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.FirewallAction.AllowAction.verify|verify} messages.
                         * @param message AllowAction message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.recaptchaenterprise.v1.FirewallAction.IAllowAction, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an AllowAction message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns AllowAction
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recaptchaenterprise.v1.FirewallAction.AllowAction;

                        /**
                         * Decodes an AllowAction message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns AllowAction
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recaptchaenterprise.v1.FirewallAction.AllowAction;

                        /**
                         * Verifies an AllowAction message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an AllowAction message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns AllowAction
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.recaptchaenterprise.v1.FirewallAction.AllowAction;

                        /**
                         * Creates a plain object from an AllowAction message. Also converts values to other types if specified.
                         * @param message AllowAction
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.recaptchaenterprise.v1.FirewallAction.AllowAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this AllowAction to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for AllowAction
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a BlockAction. */
                    interface IBlockAction {
                    }

                    /** Represents a BlockAction. */
                    class BlockAction implements IBlockAction {

                        /**
                         * Constructs a new BlockAction.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.recaptchaenterprise.v1.FirewallAction.IBlockAction);

                        /**
                         * Creates a new BlockAction instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns BlockAction instance
                         */
                        public static create(properties?: google.cloud.recaptchaenterprise.v1.FirewallAction.IBlockAction): google.cloud.recaptchaenterprise.v1.FirewallAction.BlockAction;

                        /**
                         * Encodes the specified BlockAction message. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.FirewallAction.BlockAction.verify|verify} messages.
                         * @param message BlockAction message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.recaptchaenterprise.v1.FirewallAction.IBlockAction, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified BlockAction message, length delimited. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.FirewallAction.BlockAction.verify|verify} messages.
                         * @param message BlockAction message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.recaptchaenterprise.v1.FirewallAction.IBlockAction, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a BlockAction message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns BlockAction
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recaptchaenterprise.v1.FirewallAction.BlockAction;

                        /**
                         * Decodes a BlockAction message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns BlockAction
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recaptchaenterprise.v1.FirewallAction.BlockAction;

                        /**
                         * Verifies a BlockAction message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a BlockAction message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns BlockAction
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.recaptchaenterprise.v1.FirewallAction.BlockAction;

                        /**
                         * Creates a plain object from a BlockAction message. Also converts values to other types if specified.
                         * @param message BlockAction
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.recaptchaenterprise.v1.FirewallAction.BlockAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this BlockAction to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for BlockAction
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of an IncludeRecaptchaScriptAction. */
                    interface IIncludeRecaptchaScriptAction {
                    }

                    /** Represents an IncludeRecaptchaScriptAction. */
                    class IncludeRecaptchaScriptAction implements IIncludeRecaptchaScriptAction {

                        /**
                         * Constructs a new IncludeRecaptchaScriptAction.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.recaptchaenterprise.v1.FirewallAction.IIncludeRecaptchaScriptAction);

                        /**
                         * Creates a new IncludeRecaptchaScriptAction instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns IncludeRecaptchaScriptAction instance
                         */
                        public static create(properties?: google.cloud.recaptchaenterprise.v1.FirewallAction.IIncludeRecaptchaScriptAction): google.cloud.recaptchaenterprise.v1.FirewallAction.IncludeRecaptchaScriptAction;

                        /**
                         * Encodes the specified IncludeRecaptchaScriptAction message. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.FirewallAction.IncludeRecaptchaScriptAction.verify|verify} messages.
                         * @param message IncludeRecaptchaScriptAction message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.recaptchaenterprise.v1.FirewallAction.IIncludeRecaptchaScriptAction, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified IncludeRecaptchaScriptAction message, length delimited. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.FirewallAction.IncludeRecaptchaScriptAction.verify|verify} messages.
                         * @param message IncludeRecaptchaScriptAction message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.recaptchaenterprise.v1.FirewallAction.IIncludeRecaptchaScriptAction, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an IncludeRecaptchaScriptAction message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns IncludeRecaptchaScriptAction
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recaptchaenterprise.v1.FirewallAction.IncludeRecaptchaScriptAction;

                        /**
                         * Decodes an IncludeRecaptchaScriptAction message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns IncludeRecaptchaScriptAction
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recaptchaenterprise.v1.FirewallAction.IncludeRecaptchaScriptAction;

                        /**
                         * Verifies an IncludeRecaptchaScriptAction message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an IncludeRecaptchaScriptAction message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns IncludeRecaptchaScriptAction
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.recaptchaenterprise.v1.FirewallAction.IncludeRecaptchaScriptAction;

                        /**
                         * Creates a plain object from an IncludeRecaptchaScriptAction message. Also converts values to other types if specified.
                         * @param message IncludeRecaptchaScriptAction
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.recaptchaenterprise.v1.FirewallAction.IncludeRecaptchaScriptAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this IncludeRecaptchaScriptAction to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for IncludeRecaptchaScriptAction
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a RedirectAction. */
                    interface IRedirectAction {
                    }

                    /** Represents a RedirectAction. */
                    class RedirectAction implements IRedirectAction {

                        /**
                         * Constructs a new RedirectAction.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.recaptchaenterprise.v1.FirewallAction.IRedirectAction);

                        /**
                         * Creates a new RedirectAction instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns RedirectAction instance
                         */
                        public static create(properties?: google.cloud.recaptchaenterprise.v1.FirewallAction.IRedirectAction): google.cloud.recaptchaenterprise.v1.FirewallAction.RedirectAction;

                        /**
                         * Encodes the specified RedirectAction message. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.FirewallAction.RedirectAction.verify|verify} messages.
                         * @param message RedirectAction message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.recaptchaenterprise.v1.FirewallAction.IRedirectAction, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified RedirectAction message, length delimited. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.FirewallAction.RedirectAction.verify|verify} messages.
                         * @param message RedirectAction message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.recaptchaenterprise.v1.FirewallAction.IRedirectAction, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a RedirectAction message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns RedirectAction
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recaptchaenterprise.v1.FirewallAction.RedirectAction;

                        /**
                         * Decodes a RedirectAction message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns RedirectAction
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recaptchaenterprise.v1.FirewallAction.RedirectAction;

                        /**
                         * Verifies a RedirectAction message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a RedirectAction message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns RedirectAction
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.recaptchaenterprise.v1.FirewallAction.RedirectAction;

                        /**
                         * Creates a plain object from a RedirectAction message. Also converts values to other types if specified.
                         * @param message RedirectAction
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.recaptchaenterprise.v1.FirewallAction.RedirectAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this RedirectAction to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for RedirectAction
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a SubstituteAction. */
                    interface ISubstituteAction {

                        /** SubstituteAction path */
                        path?: (string|null);
                    }

                    /** Represents a SubstituteAction. */
                    class SubstituteAction implements ISubstituteAction {

                        /**
                         * Constructs a new SubstituteAction.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.recaptchaenterprise.v1.FirewallAction.ISubstituteAction);

                        /** SubstituteAction path. */
                        public path: string;

                        /**
                         * Creates a new SubstituteAction instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns SubstituteAction instance
                         */
                        public static create(properties?: google.cloud.recaptchaenterprise.v1.FirewallAction.ISubstituteAction): google.cloud.recaptchaenterprise.v1.FirewallAction.SubstituteAction;

                        /**
                         * Encodes the specified SubstituteAction message. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.FirewallAction.SubstituteAction.verify|verify} messages.
                         * @param message SubstituteAction message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.recaptchaenterprise.v1.FirewallAction.ISubstituteAction, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified SubstituteAction message, length delimited. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.FirewallAction.SubstituteAction.verify|verify} messages.
                         * @param message SubstituteAction message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.recaptchaenterprise.v1.FirewallAction.ISubstituteAction, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a SubstituteAction message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns SubstituteAction
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recaptchaenterprise.v1.FirewallAction.SubstituteAction;

                        /**
                         * Decodes a SubstituteAction message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns SubstituteAction
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recaptchaenterprise.v1.FirewallAction.SubstituteAction;

                        /**
                         * Verifies a SubstituteAction message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a SubstituteAction message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns SubstituteAction
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.recaptchaenterprise.v1.FirewallAction.SubstituteAction;

                        /**
                         * Creates a plain object from a SubstituteAction message. Also converts values to other types if specified.
                         * @param message SubstituteAction
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.recaptchaenterprise.v1.FirewallAction.SubstituteAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this SubstituteAction to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for SubstituteAction
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a SetHeaderAction. */
                    interface ISetHeaderAction {

                        /** SetHeaderAction key */
                        key?: (string|null);

                        /** SetHeaderAction value */
                        value?: (string|null);
                    }

                    /** Represents a SetHeaderAction. */
                    class SetHeaderAction implements ISetHeaderAction {

                        /**
                         * Constructs a new SetHeaderAction.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.recaptchaenterprise.v1.FirewallAction.ISetHeaderAction);

                        /** SetHeaderAction key. */
                        public key: string;

                        /** SetHeaderAction value. */
                        public value: string;

                        /**
                         * Creates a new SetHeaderAction instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns SetHeaderAction instance
                         */
                        public static create(properties?: google.cloud.recaptchaenterprise.v1.FirewallAction.ISetHeaderAction): google.cloud.recaptchaenterprise.v1.FirewallAction.SetHeaderAction;

                        /**
                         * Encodes the specified SetHeaderAction message. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.FirewallAction.SetHeaderAction.verify|verify} messages.
                         * @param message SetHeaderAction message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.recaptchaenterprise.v1.FirewallAction.ISetHeaderAction, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified SetHeaderAction message, length delimited. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.FirewallAction.SetHeaderAction.verify|verify} messages.
                         * @param message SetHeaderAction message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.recaptchaenterprise.v1.FirewallAction.ISetHeaderAction, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a SetHeaderAction message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns SetHeaderAction
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recaptchaenterprise.v1.FirewallAction.SetHeaderAction;

                        /**
                         * Decodes a SetHeaderAction message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns SetHeaderAction
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recaptchaenterprise.v1.FirewallAction.SetHeaderAction;

                        /**
                         * Verifies a SetHeaderAction message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a SetHeaderAction message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns SetHeaderAction
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.recaptchaenterprise.v1.FirewallAction.SetHeaderAction;

                        /**
                         * Creates a plain object from a SetHeaderAction message. Also converts values to other types if specified.
                         * @param message SetHeaderAction
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.recaptchaenterprise.v1.FirewallAction.SetHeaderAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this SetHeaderAction to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for SetHeaderAction
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }
                }

                /** Properties of a FirewallPolicy. */
                interface IFirewallPolicy {

                    /** FirewallPolicy name */
                    name?: (string|null);

                    /** FirewallPolicy description */
                    description?: (string|null);

                    /** FirewallPolicy path */
                    path?: (string|null);

                    /** FirewallPolicy condition */
                    condition?: (string|null);

                    /** FirewallPolicy actions */
                    actions?: (google.cloud.recaptchaenterprise.v1.IFirewallAction[]|null);
                }

                /** Represents a FirewallPolicy. */
                class FirewallPolicy implements IFirewallPolicy {

                    /**
                     * Constructs a new FirewallPolicy.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recaptchaenterprise.v1.IFirewallPolicy);

                    /** FirewallPolicy name. */
                    public name: string;

                    /** FirewallPolicy description. */
                    public description: string;

                    /** FirewallPolicy path. */
                    public path: string;

                    /** FirewallPolicy condition. */
                    public condition: string;

                    /** FirewallPolicy actions. */
                    public actions: google.cloud.recaptchaenterprise.v1.IFirewallAction[];

                    /**
                     * Creates a new FirewallPolicy instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns FirewallPolicy instance
                     */
                    public static create(properties?: google.cloud.recaptchaenterprise.v1.IFirewallPolicy): google.cloud.recaptchaenterprise.v1.FirewallPolicy;

                    /**
                     * Encodes the specified FirewallPolicy message. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.FirewallPolicy.verify|verify} messages.
                     * @param message FirewallPolicy message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recaptchaenterprise.v1.IFirewallPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified FirewallPolicy message, length delimited. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.FirewallPolicy.verify|verify} messages.
                     * @param message FirewallPolicy message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recaptchaenterprise.v1.IFirewallPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a FirewallPolicy message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns FirewallPolicy
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recaptchaenterprise.v1.FirewallPolicy;

                    /**
                     * Decodes a FirewallPolicy message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns FirewallPolicy
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recaptchaenterprise.v1.FirewallPolicy;

                    /**
                     * Verifies a FirewallPolicy message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a FirewallPolicy message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns FirewallPolicy
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recaptchaenterprise.v1.FirewallPolicy;

                    /**
                     * Creates a plain object from a FirewallPolicy message. Also converts values to other types if specified.
                     * @param message FirewallPolicy
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recaptchaenterprise.v1.FirewallPolicy, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this FirewallPolicy to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for FirewallPolicy
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListRelatedAccountGroupMembershipsRequest. */
                interface IListRelatedAccountGroupMembershipsRequest {

                    /** ListRelatedAccountGroupMembershipsRequest parent */
                    parent?: (string|null);

                    /** ListRelatedAccountGroupMembershipsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListRelatedAccountGroupMembershipsRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListRelatedAccountGroupMembershipsRequest. */
                class ListRelatedAccountGroupMembershipsRequest implements IListRelatedAccountGroupMembershipsRequest {

                    /**
                     * Constructs a new ListRelatedAccountGroupMembershipsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recaptchaenterprise.v1.IListRelatedAccountGroupMembershipsRequest);

                    /** ListRelatedAccountGroupMembershipsRequest parent. */
                    public parent: string;

                    /** ListRelatedAccountGroupMembershipsRequest pageSize. */
                    public pageSize: number;

                    /** ListRelatedAccountGroupMembershipsRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListRelatedAccountGroupMembershipsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListRelatedAccountGroupMembershipsRequest instance
                     */
                    public static create(properties?: google.cloud.recaptchaenterprise.v1.IListRelatedAccountGroupMembershipsRequest): google.cloud.recaptchaenterprise.v1.ListRelatedAccountGroupMembershipsRequest;

                    /**
                     * Encodes the specified ListRelatedAccountGroupMembershipsRequest message. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.ListRelatedAccountGroupMembershipsRequest.verify|verify} messages.
                     * @param message ListRelatedAccountGroupMembershipsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recaptchaenterprise.v1.IListRelatedAccountGroupMembershipsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListRelatedAccountGroupMembershipsRequest message, length delimited. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.ListRelatedAccountGroupMembershipsRequest.verify|verify} messages.
                     * @param message ListRelatedAccountGroupMembershipsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recaptchaenterprise.v1.IListRelatedAccountGroupMembershipsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListRelatedAccountGroupMembershipsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListRelatedAccountGroupMembershipsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recaptchaenterprise.v1.ListRelatedAccountGroupMembershipsRequest;

                    /**
                     * Decodes a ListRelatedAccountGroupMembershipsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListRelatedAccountGroupMembershipsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recaptchaenterprise.v1.ListRelatedAccountGroupMembershipsRequest;

                    /**
                     * Verifies a ListRelatedAccountGroupMembershipsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListRelatedAccountGroupMembershipsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListRelatedAccountGroupMembershipsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recaptchaenterprise.v1.ListRelatedAccountGroupMembershipsRequest;

                    /**
                     * Creates a plain object from a ListRelatedAccountGroupMembershipsRequest message. Also converts values to other types if specified.
                     * @param message ListRelatedAccountGroupMembershipsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recaptchaenterprise.v1.ListRelatedAccountGroupMembershipsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListRelatedAccountGroupMembershipsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListRelatedAccountGroupMembershipsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListRelatedAccountGroupMembershipsResponse. */
                interface IListRelatedAccountGroupMembershipsResponse {

                    /** ListRelatedAccountGroupMembershipsResponse relatedAccountGroupMemberships */
                    relatedAccountGroupMemberships?: (google.cloud.recaptchaenterprise.v1.IRelatedAccountGroupMembership[]|null);

                    /** ListRelatedAccountGroupMembershipsResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListRelatedAccountGroupMembershipsResponse. */
                class ListRelatedAccountGroupMembershipsResponse implements IListRelatedAccountGroupMembershipsResponse {

                    /**
                     * Constructs a new ListRelatedAccountGroupMembershipsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recaptchaenterprise.v1.IListRelatedAccountGroupMembershipsResponse);

                    /** ListRelatedAccountGroupMembershipsResponse relatedAccountGroupMemberships. */
                    public relatedAccountGroupMemberships: google.cloud.recaptchaenterprise.v1.IRelatedAccountGroupMembership[];

                    /** ListRelatedAccountGroupMembershipsResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListRelatedAccountGroupMembershipsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListRelatedAccountGroupMembershipsResponse instance
                     */
                    public static create(properties?: google.cloud.recaptchaenterprise.v1.IListRelatedAccountGroupMembershipsResponse): google.cloud.recaptchaenterprise.v1.ListRelatedAccountGroupMembershipsResponse;

                    /**
                     * Encodes the specified ListRelatedAccountGroupMembershipsResponse message. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.ListRelatedAccountGroupMembershipsResponse.verify|verify} messages.
                     * @param message ListRelatedAccountGroupMembershipsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recaptchaenterprise.v1.IListRelatedAccountGroupMembershipsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListRelatedAccountGroupMembershipsResponse message, length delimited. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.ListRelatedAccountGroupMembershipsResponse.verify|verify} messages.
                     * @param message ListRelatedAccountGroupMembershipsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recaptchaenterprise.v1.IListRelatedAccountGroupMembershipsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListRelatedAccountGroupMembershipsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListRelatedAccountGroupMembershipsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recaptchaenterprise.v1.ListRelatedAccountGroupMembershipsResponse;

                    /**
                     * Decodes a ListRelatedAccountGroupMembershipsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListRelatedAccountGroupMembershipsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recaptchaenterprise.v1.ListRelatedAccountGroupMembershipsResponse;

                    /**
                     * Verifies a ListRelatedAccountGroupMembershipsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListRelatedAccountGroupMembershipsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListRelatedAccountGroupMembershipsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recaptchaenterprise.v1.ListRelatedAccountGroupMembershipsResponse;

                    /**
                     * Creates a plain object from a ListRelatedAccountGroupMembershipsResponse message. Also converts values to other types if specified.
                     * @param message ListRelatedAccountGroupMembershipsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recaptchaenterprise.v1.ListRelatedAccountGroupMembershipsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListRelatedAccountGroupMembershipsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListRelatedAccountGroupMembershipsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListRelatedAccountGroupsRequest. */
                interface IListRelatedAccountGroupsRequest {

                    /** ListRelatedAccountGroupsRequest parent */
                    parent?: (string|null);

                    /** ListRelatedAccountGroupsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListRelatedAccountGroupsRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListRelatedAccountGroupsRequest. */
                class ListRelatedAccountGroupsRequest implements IListRelatedAccountGroupsRequest {

                    /**
                     * Constructs a new ListRelatedAccountGroupsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recaptchaenterprise.v1.IListRelatedAccountGroupsRequest);

                    /** ListRelatedAccountGroupsRequest parent. */
                    public parent: string;

                    /** ListRelatedAccountGroupsRequest pageSize. */
                    public pageSize: number;

                    /** ListRelatedAccountGroupsRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListRelatedAccountGroupsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListRelatedAccountGroupsRequest instance
                     */
                    public static create(properties?: google.cloud.recaptchaenterprise.v1.IListRelatedAccountGroupsRequest): google.cloud.recaptchaenterprise.v1.ListRelatedAccountGroupsRequest;

                    /**
                     * Encodes the specified ListRelatedAccountGroupsRequest message. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.ListRelatedAccountGroupsRequest.verify|verify} messages.
                     * @param message ListRelatedAccountGroupsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recaptchaenterprise.v1.IListRelatedAccountGroupsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListRelatedAccountGroupsRequest message, length delimited. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.ListRelatedAccountGroupsRequest.verify|verify} messages.
                     * @param message ListRelatedAccountGroupsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recaptchaenterprise.v1.IListRelatedAccountGroupsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListRelatedAccountGroupsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListRelatedAccountGroupsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recaptchaenterprise.v1.ListRelatedAccountGroupsRequest;

                    /**
                     * Decodes a ListRelatedAccountGroupsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListRelatedAccountGroupsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recaptchaenterprise.v1.ListRelatedAccountGroupsRequest;

                    /**
                     * Verifies a ListRelatedAccountGroupsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListRelatedAccountGroupsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListRelatedAccountGroupsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recaptchaenterprise.v1.ListRelatedAccountGroupsRequest;

                    /**
                     * Creates a plain object from a ListRelatedAccountGroupsRequest message. Also converts values to other types if specified.
                     * @param message ListRelatedAccountGroupsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recaptchaenterprise.v1.ListRelatedAccountGroupsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListRelatedAccountGroupsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListRelatedAccountGroupsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListRelatedAccountGroupsResponse. */
                interface IListRelatedAccountGroupsResponse {

                    /** ListRelatedAccountGroupsResponse relatedAccountGroups */
                    relatedAccountGroups?: (google.cloud.recaptchaenterprise.v1.IRelatedAccountGroup[]|null);

                    /** ListRelatedAccountGroupsResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListRelatedAccountGroupsResponse. */
                class ListRelatedAccountGroupsResponse implements IListRelatedAccountGroupsResponse {

                    /**
                     * Constructs a new ListRelatedAccountGroupsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recaptchaenterprise.v1.IListRelatedAccountGroupsResponse);

                    /** ListRelatedAccountGroupsResponse relatedAccountGroups. */
                    public relatedAccountGroups: google.cloud.recaptchaenterprise.v1.IRelatedAccountGroup[];

                    /** ListRelatedAccountGroupsResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListRelatedAccountGroupsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListRelatedAccountGroupsResponse instance
                     */
                    public static create(properties?: google.cloud.recaptchaenterprise.v1.IListRelatedAccountGroupsResponse): google.cloud.recaptchaenterprise.v1.ListRelatedAccountGroupsResponse;

                    /**
                     * Encodes the specified ListRelatedAccountGroupsResponse message. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.ListRelatedAccountGroupsResponse.verify|verify} messages.
                     * @param message ListRelatedAccountGroupsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recaptchaenterprise.v1.IListRelatedAccountGroupsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListRelatedAccountGroupsResponse message, length delimited. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.ListRelatedAccountGroupsResponse.verify|verify} messages.
                     * @param message ListRelatedAccountGroupsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recaptchaenterprise.v1.IListRelatedAccountGroupsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListRelatedAccountGroupsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListRelatedAccountGroupsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recaptchaenterprise.v1.ListRelatedAccountGroupsResponse;

                    /**
                     * Decodes a ListRelatedAccountGroupsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListRelatedAccountGroupsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recaptchaenterprise.v1.ListRelatedAccountGroupsResponse;

                    /**
                     * Verifies a ListRelatedAccountGroupsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListRelatedAccountGroupsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListRelatedAccountGroupsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recaptchaenterprise.v1.ListRelatedAccountGroupsResponse;

                    /**
                     * Creates a plain object from a ListRelatedAccountGroupsResponse message. Also converts values to other types if specified.
                     * @param message ListRelatedAccountGroupsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recaptchaenterprise.v1.ListRelatedAccountGroupsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListRelatedAccountGroupsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListRelatedAccountGroupsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a SearchRelatedAccountGroupMembershipsRequest. */
                interface ISearchRelatedAccountGroupMembershipsRequest {

                    /** SearchRelatedAccountGroupMembershipsRequest project */
                    project?: (string|null);

                    /** SearchRelatedAccountGroupMembershipsRequest accountId */
                    accountId?: (string|null);

                    /** SearchRelatedAccountGroupMembershipsRequest hashedAccountId */
                    hashedAccountId?: (Uint8Array|string|null);

                    /** SearchRelatedAccountGroupMembershipsRequest pageSize */
                    pageSize?: (number|null);

                    /** SearchRelatedAccountGroupMembershipsRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a SearchRelatedAccountGroupMembershipsRequest. */
                class SearchRelatedAccountGroupMembershipsRequest implements ISearchRelatedAccountGroupMembershipsRequest {

                    /**
                     * Constructs a new SearchRelatedAccountGroupMembershipsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recaptchaenterprise.v1.ISearchRelatedAccountGroupMembershipsRequest);

                    /** SearchRelatedAccountGroupMembershipsRequest project. */
                    public project: string;

                    /** SearchRelatedAccountGroupMembershipsRequest accountId. */
                    public accountId: string;

                    /** SearchRelatedAccountGroupMembershipsRequest hashedAccountId. */
                    public hashedAccountId: (Uint8Array|string);

                    /** SearchRelatedAccountGroupMembershipsRequest pageSize. */
                    public pageSize: number;

                    /** SearchRelatedAccountGroupMembershipsRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new SearchRelatedAccountGroupMembershipsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SearchRelatedAccountGroupMembershipsRequest instance
                     */
                    public static create(properties?: google.cloud.recaptchaenterprise.v1.ISearchRelatedAccountGroupMembershipsRequest): google.cloud.recaptchaenterprise.v1.SearchRelatedAccountGroupMembershipsRequest;

                    /**
                     * Encodes the specified SearchRelatedAccountGroupMembershipsRequest message. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.SearchRelatedAccountGroupMembershipsRequest.verify|verify} messages.
                     * @param message SearchRelatedAccountGroupMembershipsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recaptchaenterprise.v1.ISearchRelatedAccountGroupMembershipsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SearchRelatedAccountGroupMembershipsRequest message, length delimited. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.SearchRelatedAccountGroupMembershipsRequest.verify|verify} messages.
                     * @param message SearchRelatedAccountGroupMembershipsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recaptchaenterprise.v1.ISearchRelatedAccountGroupMembershipsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SearchRelatedAccountGroupMembershipsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SearchRelatedAccountGroupMembershipsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recaptchaenterprise.v1.SearchRelatedAccountGroupMembershipsRequest;

                    /**
                     * Decodes a SearchRelatedAccountGroupMembershipsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SearchRelatedAccountGroupMembershipsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recaptchaenterprise.v1.SearchRelatedAccountGroupMembershipsRequest;

                    /**
                     * Verifies a SearchRelatedAccountGroupMembershipsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SearchRelatedAccountGroupMembershipsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SearchRelatedAccountGroupMembershipsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recaptchaenterprise.v1.SearchRelatedAccountGroupMembershipsRequest;

                    /**
                     * Creates a plain object from a SearchRelatedAccountGroupMembershipsRequest message. Also converts values to other types if specified.
                     * @param message SearchRelatedAccountGroupMembershipsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recaptchaenterprise.v1.SearchRelatedAccountGroupMembershipsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SearchRelatedAccountGroupMembershipsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for SearchRelatedAccountGroupMembershipsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a SearchRelatedAccountGroupMembershipsResponse. */
                interface ISearchRelatedAccountGroupMembershipsResponse {

                    /** SearchRelatedAccountGroupMembershipsResponse relatedAccountGroupMemberships */
                    relatedAccountGroupMemberships?: (google.cloud.recaptchaenterprise.v1.IRelatedAccountGroupMembership[]|null);

                    /** SearchRelatedAccountGroupMembershipsResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a SearchRelatedAccountGroupMembershipsResponse. */
                class SearchRelatedAccountGroupMembershipsResponse implements ISearchRelatedAccountGroupMembershipsResponse {

                    /**
                     * Constructs a new SearchRelatedAccountGroupMembershipsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recaptchaenterprise.v1.ISearchRelatedAccountGroupMembershipsResponse);

                    /** SearchRelatedAccountGroupMembershipsResponse relatedAccountGroupMemberships. */
                    public relatedAccountGroupMemberships: google.cloud.recaptchaenterprise.v1.IRelatedAccountGroupMembership[];

                    /** SearchRelatedAccountGroupMembershipsResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new SearchRelatedAccountGroupMembershipsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SearchRelatedAccountGroupMembershipsResponse instance
                     */
                    public static create(properties?: google.cloud.recaptchaenterprise.v1.ISearchRelatedAccountGroupMembershipsResponse): google.cloud.recaptchaenterprise.v1.SearchRelatedAccountGroupMembershipsResponse;

                    /**
                     * Encodes the specified SearchRelatedAccountGroupMembershipsResponse message. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.SearchRelatedAccountGroupMembershipsResponse.verify|verify} messages.
                     * @param message SearchRelatedAccountGroupMembershipsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recaptchaenterprise.v1.ISearchRelatedAccountGroupMembershipsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SearchRelatedAccountGroupMembershipsResponse message, length delimited. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.SearchRelatedAccountGroupMembershipsResponse.verify|verify} messages.
                     * @param message SearchRelatedAccountGroupMembershipsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recaptchaenterprise.v1.ISearchRelatedAccountGroupMembershipsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SearchRelatedAccountGroupMembershipsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SearchRelatedAccountGroupMembershipsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recaptchaenterprise.v1.SearchRelatedAccountGroupMembershipsResponse;

                    /**
                     * Decodes a SearchRelatedAccountGroupMembershipsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SearchRelatedAccountGroupMembershipsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recaptchaenterprise.v1.SearchRelatedAccountGroupMembershipsResponse;

                    /**
                     * Verifies a SearchRelatedAccountGroupMembershipsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SearchRelatedAccountGroupMembershipsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SearchRelatedAccountGroupMembershipsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recaptchaenterprise.v1.SearchRelatedAccountGroupMembershipsResponse;

                    /**
                     * Creates a plain object from a SearchRelatedAccountGroupMembershipsResponse message. Also converts values to other types if specified.
                     * @param message SearchRelatedAccountGroupMembershipsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recaptchaenterprise.v1.SearchRelatedAccountGroupMembershipsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SearchRelatedAccountGroupMembershipsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for SearchRelatedAccountGroupMembershipsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an AddIpOverrideRequest. */
                interface IAddIpOverrideRequest {

                    /** AddIpOverrideRequest name */
                    name?: (string|null);

                    /** AddIpOverrideRequest ipOverrideData */
                    ipOverrideData?: (google.cloud.recaptchaenterprise.v1.IIpOverrideData|null);
                }

                /** Represents an AddIpOverrideRequest. */
                class AddIpOverrideRequest implements IAddIpOverrideRequest {

                    /**
                     * Constructs a new AddIpOverrideRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recaptchaenterprise.v1.IAddIpOverrideRequest);

                    /** AddIpOverrideRequest name. */
                    public name: string;

                    /** AddIpOverrideRequest ipOverrideData. */
                    public ipOverrideData?: (google.cloud.recaptchaenterprise.v1.IIpOverrideData|null);

                    /**
                     * Creates a new AddIpOverrideRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AddIpOverrideRequest instance
                     */
                    public static create(properties?: google.cloud.recaptchaenterprise.v1.IAddIpOverrideRequest): google.cloud.recaptchaenterprise.v1.AddIpOverrideRequest;

                    /**
                     * Encodes the specified AddIpOverrideRequest message. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.AddIpOverrideRequest.verify|verify} messages.
                     * @param message AddIpOverrideRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recaptchaenterprise.v1.IAddIpOverrideRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AddIpOverrideRequest message, length delimited. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.AddIpOverrideRequest.verify|verify} messages.
                     * @param message AddIpOverrideRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recaptchaenterprise.v1.IAddIpOverrideRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AddIpOverrideRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AddIpOverrideRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recaptchaenterprise.v1.AddIpOverrideRequest;

                    /**
                     * Decodes an AddIpOverrideRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AddIpOverrideRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recaptchaenterprise.v1.AddIpOverrideRequest;

                    /**
                     * Verifies an AddIpOverrideRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AddIpOverrideRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AddIpOverrideRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recaptchaenterprise.v1.AddIpOverrideRequest;

                    /**
                     * Creates a plain object from an AddIpOverrideRequest message. Also converts values to other types if specified.
                     * @param message AddIpOverrideRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recaptchaenterprise.v1.AddIpOverrideRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AddIpOverrideRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for AddIpOverrideRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an AddIpOverrideResponse. */
                interface IAddIpOverrideResponse {
                }

                /** Represents an AddIpOverrideResponse. */
                class AddIpOverrideResponse implements IAddIpOverrideResponse {

                    /**
                     * Constructs a new AddIpOverrideResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recaptchaenterprise.v1.IAddIpOverrideResponse);

                    /**
                     * Creates a new AddIpOverrideResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AddIpOverrideResponse instance
                     */
                    public static create(properties?: google.cloud.recaptchaenterprise.v1.IAddIpOverrideResponse): google.cloud.recaptchaenterprise.v1.AddIpOverrideResponse;

                    /**
                     * Encodes the specified AddIpOverrideResponse message. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.AddIpOverrideResponse.verify|verify} messages.
                     * @param message AddIpOverrideResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recaptchaenterprise.v1.IAddIpOverrideResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AddIpOverrideResponse message, length delimited. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.AddIpOverrideResponse.verify|verify} messages.
                     * @param message AddIpOverrideResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recaptchaenterprise.v1.IAddIpOverrideResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AddIpOverrideResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AddIpOverrideResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recaptchaenterprise.v1.AddIpOverrideResponse;

                    /**
                     * Decodes an AddIpOverrideResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AddIpOverrideResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recaptchaenterprise.v1.AddIpOverrideResponse;

                    /**
                     * Verifies an AddIpOverrideResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AddIpOverrideResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AddIpOverrideResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recaptchaenterprise.v1.AddIpOverrideResponse;

                    /**
                     * Creates a plain object from an AddIpOverrideResponse message. Also converts values to other types if specified.
                     * @param message AddIpOverrideResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recaptchaenterprise.v1.AddIpOverrideResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AddIpOverrideResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for AddIpOverrideResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a RemoveIpOverrideRequest. */
                interface IRemoveIpOverrideRequest {

                    /** RemoveIpOverrideRequest name */
                    name?: (string|null);

                    /** RemoveIpOverrideRequest ipOverrideData */
                    ipOverrideData?: (google.cloud.recaptchaenterprise.v1.IIpOverrideData|null);
                }

                /** Represents a RemoveIpOverrideRequest. */
                class RemoveIpOverrideRequest implements IRemoveIpOverrideRequest {

                    /**
                     * Constructs a new RemoveIpOverrideRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recaptchaenterprise.v1.IRemoveIpOverrideRequest);

                    /** RemoveIpOverrideRequest name. */
                    public name: string;

                    /** RemoveIpOverrideRequest ipOverrideData. */
                    public ipOverrideData?: (google.cloud.recaptchaenterprise.v1.IIpOverrideData|null);

                    /**
                     * Creates a new RemoveIpOverrideRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RemoveIpOverrideRequest instance
                     */
                    public static create(properties?: google.cloud.recaptchaenterprise.v1.IRemoveIpOverrideRequest): google.cloud.recaptchaenterprise.v1.RemoveIpOverrideRequest;

                    /**
                     * Encodes the specified RemoveIpOverrideRequest message. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.RemoveIpOverrideRequest.verify|verify} messages.
                     * @param message RemoveIpOverrideRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recaptchaenterprise.v1.IRemoveIpOverrideRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RemoveIpOverrideRequest message, length delimited. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.RemoveIpOverrideRequest.verify|verify} messages.
                     * @param message RemoveIpOverrideRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recaptchaenterprise.v1.IRemoveIpOverrideRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RemoveIpOverrideRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RemoveIpOverrideRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recaptchaenterprise.v1.RemoveIpOverrideRequest;

                    /**
                     * Decodes a RemoveIpOverrideRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RemoveIpOverrideRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recaptchaenterprise.v1.RemoveIpOverrideRequest;

                    /**
                     * Verifies a RemoveIpOverrideRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RemoveIpOverrideRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RemoveIpOverrideRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recaptchaenterprise.v1.RemoveIpOverrideRequest;

                    /**
                     * Creates a plain object from a RemoveIpOverrideRequest message. Also converts values to other types if specified.
                     * @param message RemoveIpOverrideRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recaptchaenterprise.v1.RemoveIpOverrideRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RemoveIpOverrideRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for RemoveIpOverrideRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a RemoveIpOverrideResponse. */
                interface IRemoveIpOverrideResponse {
                }

                /** Represents a RemoveIpOverrideResponse. */
                class RemoveIpOverrideResponse implements IRemoveIpOverrideResponse {

                    /**
                     * Constructs a new RemoveIpOverrideResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recaptchaenterprise.v1.IRemoveIpOverrideResponse);

                    /**
                     * Creates a new RemoveIpOverrideResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RemoveIpOverrideResponse instance
                     */
                    public static create(properties?: google.cloud.recaptchaenterprise.v1.IRemoveIpOverrideResponse): google.cloud.recaptchaenterprise.v1.RemoveIpOverrideResponse;

                    /**
                     * Encodes the specified RemoveIpOverrideResponse message. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.RemoveIpOverrideResponse.verify|verify} messages.
                     * @param message RemoveIpOverrideResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recaptchaenterprise.v1.IRemoveIpOverrideResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RemoveIpOverrideResponse message, length delimited. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.RemoveIpOverrideResponse.verify|verify} messages.
                     * @param message RemoveIpOverrideResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recaptchaenterprise.v1.IRemoveIpOverrideResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RemoveIpOverrideResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RemoveIpOverrideResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recaptchaenterprise.v1.RemoveIpOverrideResponse;

                    /**
                     * Decodes a RemoveIpOverrideResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RemoveIpOverrideResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recaptchaenterprise.v1.RemoveIpOverrideResponse;

                    /**
                     * Verifies a RemoveIpOverrideResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RemoveIpOverrideResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RemoveIpOverrideResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recaptchaenterprise.v1.RemoveIpOverrideResponse;

                    /**
                     * Creates a plain object from a RemoveIpOverrideResponse message. Also converts values to other types if specified.
                     * @param message RemoveIpOverrideResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recaptchaenterprise.v1.RemoveIpOverrideResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RemoveIpOverrideResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for RemoveIpOverrideResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListIpOverridesRequest. */
                interface IListIpOverridesRequest {

                    /** ListIpOverridesRequest parent */
                    parent?: (string|null);

                    /** ListIpOverridesRequest pageSize */
                    pageSize?: (number|null);

                    /** ListIpOverridesRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListIpOverridesRequest. */
                class ListIpOverridesRequest implements IListIpOverridesRequest {

                    /**
                     * Constructs a new ListIpOverridesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recaptchaenterprise.v1.IListIpOverridesRequest);

                    /** ListIpOverridesRequest parent. */
                    public parent: string;

                    /** ListIpOverridesRequest pageSize. */
                    public pageSize: number;

                    /** ListIpOverridesRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListIpOverridesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListIpOverridesRequest instance
                     */
                    public static create(properties?: google.cloud.recaptchaenterprise.v1.IListIpOverridesRequest): google.cloud.recaptchaenterprise.v1.ListIpOverridesRequest;

                    /**
                     * Encodes the specified ListIpOverridesRequest message. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.ListIpOverridesRequest.verify|verify} messages.
                     * @param message ListIpOverridesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recaptchaenterprise.v1.IListIpOverridesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListIpOverridesRequest message, length delimited. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.ListIpOverridesRequest.verify|verify} messages.
                     * @param message ListIpOverridesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recaptchaenterprise.v1.IListIpOverridesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListIpOverridesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListIpOverridesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recaptchaenterprise.v1.ListIpOverridesRequest;

                    /**
                     * Decodes a ListIpOverridesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListIpOverridesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recaptchaenterprise.v1.ListIpOverridesRequest;

                    /**
                     * Verifies a ListIpOverridesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListIpOverridesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListIpOverridesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recaptchaenterprise.v1.ListIpOverridesRequest;

                    /**
                     * Creates a plain object from a ListIpOverridesRequest message. Also converts values to other types if specified.
                     * @param message ListIpOverridesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recaptchaenterprise.v1.ListIpOverridesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListIpOverridesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListIpOverridesRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListIpOverridesResponse. */
                interface IListIpOverridesResponse {

                    /** ListIpOverridesResponse ipOverrides */
                    ipOverrides?: (google.cloud.recaptchaenterprise.v1.IIpOverrideData[]|null);

                    /** ListIpOverridesResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListIpOverridesResponse. */
                class ListIpOverridesResponse implements IListIpOverridesResponse {

                    /**
                     * Constructs a new ListIpOverridesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recaptchaenterprise.v1.IListIpOverridesResponse);

                    /** ListIpOverridesResponse ipOverrides. */
                    public ipOverrides: google.cloud.recaptchaenterprise.v1.IIpOverrideData[];

                    /** ListIpOverridesResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListIpOverridesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListIpOverridesResponse instance
                     */
                    public static create(properties?: google.cloud.recaptchaenterprise.v1.IListIpOverridesResponse): google.cloud.recaptchaenterprise.v1.ListIpOverridesResponse;

                    /**
                     * Encodes the specified ListIpOverridesResponse message. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.ListIpOverridesResponse.verify|verify} messages.
                     * @param message ListIpOverridesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recaptchaenterprise.v1.IListIpOverridesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListIpOverridesResponse message, length delimited. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.ListIpOverridesResponse.verify|verify} messages.
                     * @param message ListIpOverridesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recaptchaenterprise.v1.IListIpOverridesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListIpOverridesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListIpOverridesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recaptchaenterprise.v1.ListIpOverridesResponse;

                    /**
                     * Decodes a ListIpOverridesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListIpOverridesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recaptchaenterprise.v1.ListIpOverridesResponse;

                    /**
                     * Verifies a ListIpOverridesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListIpOverridesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListIpOverridesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recaptchaenterprise.v1.ListIpOverridesResponse;

                    /**
                     * Creates a plain object from a ListIpOverridesResponse message. Also converts values to other types if specified.
                     * @param message ListIpOverridesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recaptchaenterprise.v1.ListIpOverridesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListIpOverridesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListIpOverridesResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a RelatedAccountGroupMembership. */
                interface IRelatedAccountGroupMembership {

                    /** RelatedAccountGroupMembership name */
                    name?: (string|null);

                    /** RelatedAccountGroupMembership accountId */
                    accountId?: (string|null);

                    /** RelatedAccountGroupMembership hashedAccountId */
                    hashedAccountId?: (Uint8Array|string|null);
                }

                /** Represents a RelatedAccountGroupMembership. */
                class RelatedAccountGroupMembership implements IRelatedAccountGroupMembership {

                    /**
                     * Constructs a new RelatedAccountGroupMembership.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recaptchaenterprise.v1.IRelatedAccountGroupMembership);

                    /** RelatedAccountGroupMembership name. */
                    public name: string;

                    /** RelatedAccountGroupMembership accountId. */
                    public accountId: string;

                    /** RelatedAccountGroupMembership hashedAccountId. */
                    public hashedAccountId: (Uint8Array|string);

                    /**
                     * Creates a new RelatedAccountGroupMembership instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RelatedAccountGroupMembership instance
                     */
                    public static create(properties?: google.cloud.recaptchaenterprise.v1.IRelatedAccountGroupMembership): google.cloud.recaptchaenterprise.v1.RelatedAccountGroupMembership;

                    /**
                     * Encodes the specified RelatedAccountGroupMembership message. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.RelatedAccountGroupMembership.verify|verify} messages.
                     * @param message RelatedAccountGroupMembership message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recaptchaenterprise.v1.IRelatedAccountGroupMembership, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RelatedAccountGroupMembership message, length delimited. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.RelatedAccountGroupMembership.verify|verify} messages.
                     * @param message RelatedAccountGroupMembership message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recaptchaenterprise.v1.IRelatedAccountGroupMembership, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RelatedAccountGroupMembership message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RelatedAccountGroupMembership
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recaptchaenterprise.v1.RelatedAccountGroupMembership;

                    /**
                     * Decodes a RelatedAccountGroupMembership message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RelatedAccountGroupMembership
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recaptchaenterprise.v1.RelatedAccountGroupMembership;

                    /**
                     * Verifies a RelatedAccountGroupMembership message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RelatedAccountGroupMembership message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RelatedAccountGroupMembership
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recaptchaenterprise.v1.RelatedAccountGroupMembership;

                    /**
                     * Creates a plain object from a RelatedAccountGroupMembership message. Also converts values to other types if specified.
                     * @param message RelatedAccountGroupMembership
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recaptchaenterprise.v1.RelatedAccountGroupMembership, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RelatedAccountGroupMembership to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for RelatedAccountGroupMembership
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a RelatedAccountGroup. */
                interface IRelatedAccountGroup {

                    /** RelatedAccountGroup name */
                    name?: (string|null);
                }

                /** Represents a RelatedAccountGroup. */
                class RelatedAccountGroup implements IRelatedAccountGroup {

                    /**
                     * Constructs a new RelatedAccountGroup.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recaptchaenterprise.v1.IRelatedAccountGroup);

                    /** RelatedAccountGroup name. */
                    public name: string;

                    /**
                     * Creates a new RelatedAccountGroup instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RelatedAccountGroup instance
                     */
                    public static create(properties?: google.cloud.recaptchaenterprise.v1.IRelatedAccountGroup): google.cloud.recaptchaenterprise.v1.RelatedAccountGroup;

                    /**
                     * Encodes the specified RelatedAccountGroup message. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.RelatedAccountGroup.verify|verify} messages.
                     * @param message RelatedAccountGroup message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recaptchaenterprise.v1.IRelatedAccountGroup, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RelatedAccountGroup message, length delimited. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.RelatedAccountGroup.verify|verify} messages.
                     * @param message RelatedAccountGroup message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recaptchaenterprise.v1.IRelatedAccountGroup, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RelatedAccountGroup message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RelatedAccountGroup
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recaptchaenterprise.v1.RelatedAccountGroup;

                    /**
                     * Decodes a RelatedAccountGroup message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RelatedAccountGroup
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recaptchaenterprise.v1.RelatedAccountGroup;

                    /**
                     * Verifies a RelatedAccountGroup message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RelatedAccountGroup message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RelatedAccountGroup
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recaptchaenterprise.v1.RelatedAccountGroup;

                    /**
                     * Creates a plain object from a RelatedAccountGroup message. Also converts values to other types if specified.
                     * @param message RelatedAccountGroup
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recaptchaenterprise.v1.RelatedAccountGroup, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RelatedAccountGroup to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for RelatedAccountGroup
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a WafSettings. */
                interface IWafSettings {

                    /** WafSettings wafService */
                    wafService?: (google.cloud.recaptchaenterprise.v1.WafSettings.WafService|keyof typeof google.cloud.recaptchaenterprise.v1.WafSettings.WafService|null);

                    /** WafSettings wafFeature */
                    wafFeature?: (google.cloud.recaptchaenterprise.v1.WafSettings.WafFeature|keyof typeof google.cloud.recaptchaenterprise.v1.WafSettings.WafFeature|null);
                }

                /** Represents a WafSettings. */
                class WafSettings implements IWafSettings {

                    /**
                     * Constructs a new WafSettings.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recaptchaenterprise.v1.IWafSettings);

                    /** WafSettings wafService. */
                    public wafService: (google.cloud.recaptchaenterprise.v1.WafSettings.WafService|keyof typeof google.cloud.recaptchaenterprise.v1.WafSettings.WafService);

                    /** WafSettings wafFeature. */
                    public wafFeature: (google.cloud.recaptchaenterprise.v1.WafSettings.WafFeature|keyof typeof google.cloud.recaptchaenterprise.v1.WafSettings.WafFeature);

                    /**
                     * Creates a new WafSettings instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns WafSettings instance
                     */
                    public static create(properties?: google.cloud.recaptchaenterprise.v1.IWafSettings): google.cloud.recaptchaenterprise.v1.WafSettings;

                    /**
                     * Encodes the specified WafSettings message. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.WafSettings.verify|verify} messages.
                     * @param message WafSettings message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recaptchaenterprise.v1.IWafSettings, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified WafSettings message, length delimited. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.WafSettings.verify|verify} messages.
                     * @param message WafSettings message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recaptchaenterprise.v1.IWafSettings, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a WafSettings message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns WafSettings
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recaptchaenterprise.v1.WafSettings;

                    /**
                     * Decodes a WafSettings message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns WafSettings
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recaptchaenterprise.v1.WafSettings;

                    /**
                     * Verifies a WafSettings message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a WafSettings message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns WafSettings
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recaptchaenterprise.v1.WafSettings;

                    /**
                     * Creates a plain object from a WafSettings message. Also converts values to other types if specified.
                     * @param message WafSettings
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recaptchaenterprise.v1.WafSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this WafSettings to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for WafSettings
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace WafSettings {

                    /** WafFeature enum. */
                    enum WafFeature {
                        WAF_FEATURE_UNSPECIFIED = 0,
                        CHALLENGE_PAGE = 1,
                        SESSION_TOKEN = 2,
                        ACTION_TOKEN = 3,
                        EXPRESS = 5
                    }

                    /** WafService enum. */
                    enum WafService {
                        WAF_SERVICE_UNSPECIFIED = 0,
                        CA = 1,
                        FASTLY = 3,
                        CLOUDFLARE = 4,
                        AKAMAI = 5
                    }
                }

                /** Properties of an AssessmentEnvironment. */
                interface IAssessmentEnvironment {

                    /** AssessmentEnvironment client */
                    client?: (string|null);

                    /** AssessmentEnvironment version */
                    version?: (string|null);
                }

                /** Represents an AssessmentEnvironment. */
                class AssessmentEnvironment implements IAssessmentEnvironment {

                    /**
                     * Constructs a new AssessmentEnvironment.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recaptchaenterprise.v1.IAssessmentEnvironment);

                    /** AssessmentEnvironment client. */
                    public client: string;

                    /** AssessmentEnvironment version. */
                    public version: string;

                    /**
                     * Creates a new AssessmentEnvironment instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AssessmentEnvironment instance
                     */
                    public static create(properties?: google.cloud.recaptchaenterprise.v1.IAssessmentEnvironment): google.cloud.recaptchaenterprise.v1.AssessmentEnvironment;

                    /**
                     * Encodes the specified AssessmentEnvironment message. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.AssessmentEnvironment.verify|verify} messages.
                     * @param message AssessmentEnvironment message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recaptchaenterprise.v1.IAssessmentEnvironment, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AssessmentEnvironment message, length delimited. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.AssessmentEnvironment.verify|verify} messages.
                     * @param message AssessmentEnvironment message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recaptchaenterprise.v1.IAssessmentEnvironment, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AssessmentEnvironment message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AssessmentEnvironment
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recaptchaenterprise.v1.AssessmentEnvironment;

                    /**
                     * Decodes an AssessmentEnvironment message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AssessmentEnvironment
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recaptchaenterprise.v1.AssessmentEnvironment;

                    /**
                     * Verifies an AssessmentEnvironment message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AssessmentEnvironment message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AssessmentEnvironment
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recaptchaenterprise.v1.AssessmentEnvironment;

                    /**
                     * Creates a plain object from an AssessmentEnvironment message. Also converts values to other types if specified.
                     * @param message AssessmentEnvironment
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recaptchaenterprise.v1.AssessmentEnvironment, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AssessmentEnvironment to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for AssessmentEnvironment
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an IpOverrideData. */
                interface IIpOverrideData {

                    /** IpOverrideData ip */
                    ip?: (string|null);

                    /** IpOverrideData overrideType */
                    overrideType?: (google.cloud.recaptchaenterprise.v1.IpOverrideData.OverrideType|keyof typeof google.cloud.recaptchaenterprise.v1.IpOverrideData.OverrideType|null);
                }

                /** Represents an IpOverrideData. */
                class IpOverrideData implements IIpOverrideData {

                    /**
                     * Constructs a new IpOverrideData.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recaptchaenterprise.v1.IIpOverrideData);

                    /** IpOverrideData ip. */
                    public ip: string;

                    /** IpOverrideData overrideType. */
                    public overrideType: (google.cloud.recaptchaenterprise.v1.IpOverrideData.OverrideType|keyof typeof google.cloud.recaptchaenterprise.v1.IpOverrideData.OverrideType);

                    /**
                     * Creates a new IpOverrideData instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns IpOverrideData instance
                     */
                    public static create(properties?: google.cloud.recaptchaenterprise.v1.IIpOverrideData): google.cloud.recaptchaenterprise.v1.IpOverrideData;

                    /**
                     * Encodes the specified IpOverrideData message. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.IpOverrideData.verify|verify} messages.
                     * @param message IpOverrideData message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recaptchaenterprise.v1.IIpOverrideData, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified IpOverrideData message, length delimited. Does not implicitly {@link google.cloud.recaptchaenterprise.v1.IpOverrideData.verify|verify} messages.
                     * @param message IpOverrideData message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recaptchaenterprise.v1.IIpOverrideData, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an IpOverrideData message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns IpOverrideData
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recaptchaenterprise.v1.IpOverrideData;

                    /**
                     * Decodes an IpOverrideData message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns IpOverrideData
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recaptchaenterprise.v1.IpOverrideData;

                    /**
                     * Verifies an IpOverrideData message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an IpOverrideData message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns IpOverrideData
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recaptchaenterprise.v1.IpOverrideData;

                    /**
                     * Creates a plain object from an IpOverrideData message. Also converts values to other types if specified.
                     * @param message IpOverrideData
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recaptchaenterprise.v1.IpOverrideData, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this IpOverrideData to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for IpOverrideData
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace IpOverrideData {

                    /** OverrideType enum. */
                    enum OverrideType {
                        OVERRIDE_TYPE_UNSPECIFIED = 0,
                        ALLOW = 1
                    }
                }
            }

            /** Namespace v1beta1. */
            namespace v1beta1 {

                /** Represents a RecaptchaEnterpriseServiceV1Beta1 */
                class RecaptchaEnterpriseServiceV1Beta1 extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new RecaptchaEnterpriseServiceV1Beta1 service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new RecaptchaEnterpriseServiceV1Beta1 service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): RecaptchaEnterpriseServiceV1Beta1;

                    /**
                     * Calls CreateAssessment.
                     * @param request CreateAssessmentRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Assessment
                     */
                    public createAssessment(request: google.cloud.recaptchaenterprise.v1beta1.ICreateAssessmentRequest, callback: google.cloud.recaptchaenterprise.v1beta1.RecaptchaEnterpriseServiceV1Beta1.CreateAssessmentCallback): void;

                    /**
                     * Calls CreateAssessment.
                     * @param request CreateAssessmentRequest message or plain object
                     * @returns Promise
                     */
                    public createAssessment(request: google.cloud.recaptchaenterprise.v1beta1.ICreateAssessmentRequest): Promise<google.cloud.recaptchaenterprise.v1beta1.Assessment>;

                    /**
                     * Calls AnnotateAssessment.
                     * @param request AnnotateAssessmentRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and AnnotateAssessmentResponse
                     */
                    public annotateAssessment(request: google.cloud.recaptchaenterprise.v1beta1.IAnnotateAssessmentRequest, callback: google.cloud.recaptchaenterprise.v1beta1.RecaptchaEnterpriseServiceV1Beta1.AnnotateAssessmentCallback): void;

                    /**
                     * Calls AnnotateAssessment.
                     * @param request AnnotateAssessmentRequest message or plain object
                     * @returns Promise
                     */
                    public annotateAssessment(request: google.cloud.recaptchaenterprise.v1beta1.IAnnotateAssessmentRequest): Promise<google.cloud.recaptchaenterprise.v1beta1.AnnotateAssessmentResponse>;
                }

                namespace RecaptchaEnterpriseServiceV1Beta1 {

                    /**
                     * Callback as used by {@link google.cloud.recaptchaenterprise.v1beta1.RecaptchaEnterpriseServiceV1Beta1|createAssessment}.
                     * @param error Error, if any
                     * @param [response] Assessment
                     */
                    type CreateAssessmentCallback = (error: (Error|null), response?: google.cloud.recaptchaenterprise.v1beta1.Assessment) => void;

                    /**
                     * Callback as used by {@link google.cloud.recaptchaenterprise.v1beta1.RecaptchaEnterpriseServiceV1Beta1|annotateAssessment}.
                     * @param error Error, if any
                     * @param [response] AnnotateAssessmentResponse
                     */
                    type AnnotateAssessmentCallback = (error: (Error|null), response?: google.cloud.recaptchaenterprise.v1beta1.AnnotateAssessmentResponse) => void;
                }

                /** Properties of a CreateAssessmentRequest. */
                interface ICreateAssessmentRequest {

                    /** CreateAssessmentRequest parent */
                    parent?: (string|null);

                    /** CreateAssessmentRequest assessment */
                    assessment?: (google.cloud.recaptchaenterprise.v1beta1.IAssessment|null);
                }

                /** Represents a CreateAssessmentRequest. */
                class CreateAssessmentRequest implements ICreateAssessmentRequest {

                    /**
                     * Constructs a new CreateAssessmentRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recaptchaenterprise.v1beta1.ICreateAssessmentRequest);

                    /** CreateAssessmentRequest parent. */
                    public parent: string;

                    /** CreateAssessmentRequest assessment. */
                    public assessment?: (google.cloud.recaptchaenterprise.v1beta1.IAssessment|null);

                    /**
                     * Creates a new CreateAssessmentRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateAssessmentRequest instance
                     */
                    public static create(properties?: google.cloud.recaptchaenterprise.v1beta1.ICreateAssessmentRequest): google.cloud.recaptchaenterprise.v1beta1.CreateAssessmentRequest;

                    /**
                     * Encodes the specified CreateAssessmentRequest message. Does not implicitly {@link google.cloud.recaptchaenterprise.v1beta1.CreateAssessmentRequest.verify|verify} messages.
                     * @param message CreateAssessmentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recaptchaenterprise.v1beta1.ICreateAssessmentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateAssessmentRequest message, length delimited. Does not implicitly {@link google.cloud.recaptchaenterprise.v1beta1.CreateAssessmentRequest.verify|verify} messages.
                     * @param message CreateAssessmentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recaptchaenterprise.v1beta1.ICreateAssessmentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateAssessmentRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateAssessmentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recaptchaenterprise.v1beta1.CreateAssessmentRequest;

                    /**
                     * Decodes a CreateAssessmentRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateAssessmentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recaptchaenterprise.v1beta1.CreateAssessmentRequest;

                    /**
                     * Verifies a CreateAssessmentRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateAssessmentRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateAssessmentRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recaptchaenterprise.v1beta1.CreateAssessmentRequest;

                    /**
                     * Creates a plain object from a CreateAssessmentRequest message. Also converts values to other types if specified.
                     * @param message CreateAssessmentRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recaptchaenterprise.v1beta1.CreateAssessmentRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateAssessmentRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateAssessmentRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a TransactionEvent. */
                interface ITransactionEvent {

                    /** TransactionEvent eventType */
                    eventType?: (google.cloud.recaptchaenterprise.v1beta1.TransactionEvent.TransactionEventType|keyof typeof google.cloud.recaptchaenterprise.v1beta1.TransactionEvent.TransactionEventType|null);

                    /** TransactionEvent reason */
                    reason?: (string|null);

                    /** TransactionEvent value */
                    value?: (number|null);

                    /** TransactionEvent eventTime */
                    eventTime?: (google.protobuf.ITimestamp|null);
                }

                /** Represents a TransactionEvent. */
                class TransactionEvent implements ITransactionEvent {

                    /**
                     * Constructs a new TransactionEvent.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recaptchaenterprise.v1beta1.ITransactionEvent);

                    /** TransactionEvent eventType. */
                    public eventType: (google.cloud.recaptchaenterprise.v1beta1.TransactionEvent.TransactionEventType|keyof typeof google.cloud.recaptchaenterprise.v1beta1.TransactionEvent.TransactionEventType);

                    /** TransactionEvent reason. */
                    public reason: string;

                    /** TransactionEvent value. */
                    public value: number;

                    /** TransactionEvent eventTime. */
                    public eventTime?: (google.protobuf.ITimestamp|null);

                    /**
                     * Creates a new TransactionEvent instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TransactionEvent instance
                     */
                    public static create(properties?: google.cloud.recaptchaenterprise.v1beta1.ITransactionEvent): google.cloud.recaptchaenterprise.v1beta1.TransactionEvent;

                    /**
                     * Encodes the specified TransactionEvent message. Does not implicitly {@link google.cloud.recaptchaenterprise.v1beta1.TransactionEvent.verify|verify} messages.
                     * @param message TransactionEvent message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recaptchaenterprise.v1beta1.ITransactionEvent, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TransactionEvent message, length delimited. Does not implicitly {@link google.cloud.recaptchaenterprise.v1beta1.TransactionEvent.verify|verify} messages.
                     * @param message TransactionEvent message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recaptchaenterprise.v1beta1.ITransactionEvent, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TransactionEvent message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TransactionEvent
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recaptchaenterprise.v1beta1.TransactionEvent;

                    /**
                     * Decodes a TransactionEvent message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TransactionEvent
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recaptchaenterprise.v1beta1.TransactionEvent;

                    /**
                     * Verifies a TransactionEvent message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TransactionEvent message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TransactionEvent
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recaptchaenterprise.v1beta1.TransactionEvent;

                    /**
                     * Creates a plain object from a TransactionEvent message. Also converts values to other types if specified.
                     * @param message TransactionEvent
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recaptchaenterprise.v1beta1.TransactionEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TransactionEvent to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for TransactionEvent
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace TransactionEvent {

                    /** TransactionEventType enum. */
                    enum TransactionEventType {
                        TRANSACTION_EVENT_TYPE_UNSPECIFIED = 0,
                        MERCHANT_APPROVE = 1,
                        MERCHANT_DENY = 2,
                        MANUAL_REVIEW = 3,
                        AUTHORIZATION = 4,
                        AUTHORIZATION_DECLINE = 5,
                        PAYMENT_CAPTURE = 6,
                        PAYMENT_CAPTURE_DECLINE = 7,
                        CANCEL = 8,
                        CHARGEBACK_INQUIRY = 9,
                        CHARGEBACK_ALERT = 10,
                        FRAUD_NOTIFICATION = 11,
                        CHARGEBACK = 12,
                        CHARGEBACK_REPRESENTMENT = 13,
                        CHARGEBACK_REVERSE = 14,
                        REFUND_REQUEST = 15,
                        REFUND_DECLINE = 16,
                        REFUND = 17,
                        REFUND_REVERSE = 18
                    }
                }

                /** Properties of an AnnotateAssessmentRequest. */
                interface IAnnotateAssessmentRequest {

                    /** AnnotateAssessmentRequest name */
                    name?: (string|null);

                    /** AnnotateAssessmentRequest annotation */
                    annotation?: (google.cloud.recaptchaenterprise.v1beta1.AnnotateAssessmentRequest.Annotation|keyof typeof google.cloud.recaptchaenterprise.v1beta1.AnnotateAssessmentRequest.Annotation|null);

                    /** AnnotateAssessmentRequest reasons */
                    reasons?: (google.cloud.recaptchaenterprise.v1beta1.AnnotateAssessmentRequest.Reason[]|null);

                    /** AnnotateAssessmentRequest hashedAccountId */
                    hashedAccountId?: (Uint8Array|string|null);

                    /** AnnotateAssessmentRequest transactionEvent */
                    transactionEvent?: (google.cloud.recaptchaenterprise.v1beta1.ITransactionEvent|null);
                }

                /** Represents an AnnotateAssessmentRequest. */
                class AnnotateAssessmentRequest implements IAnnotateAssessmentRequest {

                    /**
                     * Constructs a new AnnotateAssessmentRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recaptchaenterprise.v1beta1.IAnnotateAssessmentRequest);

                    /** AnnotateAssessmentRequest name. */
                    public name: string;

                    /** AnnotateAssessmentRequest annotation. */
                    public annotation: (google.cloud.recaptchaenterprise.v1beta1.AnnotateAssessmentRequest.Annotation|keyof typeof google.cloud.recaptchaenterprise.v1beta1.AnnotateAssessmentRequest.Annotation);

                    /** AnnotateAssessmentRequest reasons. */
                    public reasons: google.cloud.recaptchaenterprise.v1beta1.AnnotateAssessmentRequest.Reason[];

                    /** AnnotateAssessmentRequest hashedAccountId. */
                    public hashedAccountId: (Uint8Array|string);

                    /** AnnotateAssessmentRequest transactionEvent. */
                    public transactionEvent?: (google.cloud.recaptchaenterprise.v1beta1.ITransactionEvent|null);

                    /**
                     * Creates a new AnnotateAssessmentRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AnnotateAssessmentRequest instance
                     */
                    public static create(properties?: google.cloud.recaptchaenterprise.v1beta1.IAnnotateAssessmentRequest): google.cloud.recaptchaenterprise.v1beta1.AnnotateAssessmentRequest;

                    /**
                     * Encodes the specified AnnotateAssessmentRequest message. Does not implicitly {@link google.cloud.recaptchaenterprise.v1beta1.AnnotateAssessmentRequest.verify|verify} messages.
                     * @param message AnnotateAssessmentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recaptchaenterprise.v1beta1.IAnnotateAssessmentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AnnotateAssessmentRequest message, length delimited. Does not implicitly {@link google.cloud.recaptchaenterprise.v1beta1.AnnotateAssessmentRequest.verify|verify} messages.
                     * @param message AnnotateAssessmentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recaptchaenterprise.v1beta1.IAnnotateAssessmentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AnnotateAssessmentRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AnnotateAssessmentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recaptchaenterprise.v1beta1.AnnotateAssessmentRequest;

                    /**
                     * Decodes an AnnotateAssessmentRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AnnotateAssessmentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recaptchaenterprise.v1beta1.AnnotateAssessmentRequest;

                    /**
                     * Verifies an AnnotateAssessmentRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AnnotateAssessmentRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AnnotateAssessmentRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recaptchaenterprise.v1beta1.AnnotateAssessmentRequest;

                    /**
                     * Creates a plain object from an AnnotateAssessmentRequest message. Also converts values to other types if specified.
                     * @param message AnnotateAssessmentRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recaptchaenterprise.v1beta1.AnnotateAssessmentRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AnnotateAssessmentRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for AnnotateAssessmentRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace AnnotateAssessmentRequest {

                    /** Annotation enum. */
                    enum Annotation {
                        ANNOTATION_UNSPECIFIED = 0,
                        LEGITIMATE = 1,
                        FRAUDULENT = 2,
                        PASSWORD_CORRECT = 3,
                        PASSWORD_INCORRECT = 4
                    }

                    /** Reason enum. */
                    enum Reason {
                        REASON_UNSPECIFIED = 0,
                        CHARGEBACK = 1,
                        CHARGEBACK_FRAUD = 8,
                        CHARGEBACK_DISPUTE = 9,
                        REFUND = 10,
                        REFUND_FRAUD = 11,
                        TRANSACTION_ACCEPTED = 12,
                        TRANSACTION_DECLINED = 13,
                        PAYMENT_HEURISTICS = 2,
                        INITIATED_TWO_FACTOR = 7,
                        PASSED_TWO_FACTOR = 3,
                        FAILED_TWO_FACTOR = 4,
                        CORRECT_PASSWORD = 5,
                        INCORRECT_PASSWORD = 6,
                        SOCIAL_SPAM = 14
                    }
                }

                /** Properties of an AnnotateAssessmentResponse. */
                interface IAnnotateAssessmentResponse {
                }

                /** Represents an AnnotateAssessmentResponse. */
                class AnnotateAssessmentResponse implements IAnnotateAssessmentResponse {

                    /**
                     * Constructs a new AnnotateAssessmentResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recaptchaenterprise.v1beta1.IAnnotateAssessmentResponse);

                    /**
                     * Creates a new AnnotateAssessmentResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AnnotateAssessmentResponse instance
                     */
                    public static create(properties?: google.cloud.recaptchaenterprise.v1beta1.IAnnotateAssessmentResponse): google.cloud.recaptchaenterprise.v1beta1.AnnotateAssessmentResponse;

                    /**
                     * Encodes the specified AnnotateAssessmentResponse message. Does not implicitly {@link google.cloud.recaptchaenterprise.v1beta1.AnnotateAssessmentResponse.verify|verify} messages.
                     * @param message AnnotateAssessmentResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recaptchaenterprise.v1beta1.IAnnotateAssessmentResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AnnotateAssessmentResponse message, length delimited. Does not implicitly {@link google.cloud.recaptchaenterprise.v1beta1.AnnotateAssessmentResponse.verify|verify} messages.
                     * @param message AnnotateAssessmentResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recaptchaenterprise.v1beta1.IAnnotateAssessmentResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AnnotateAssessmentResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AnnotateAssessmentResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recaptchaenterprise.v1beta1.AnnotateAssessmentResponse;

                    /**
                     * Decodes an AnnotateAssessmentResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AnnotateAssessmentResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recaptchaenterprise.v1beta1.AnnotateAssessmentResponse;

                    /**
                     * Verifies an AnnotateAssessmentResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AnnotateAssessmentResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AnnotateAssessmentResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recaptchaenterprise.v1beta1.AnnotateAssessmentResponse;

                    /**
                     * Creates a plain object from an AnnotateAssessmentResponse message. Also converts values to other types if specified.
                     * @param message AnnotateAssessmentResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recaptchaenterprise.v1beta1.AnnotateAssessmentResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AnnotateAssessmentResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for AnnotateAssessmentResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a PasswordLeakVerification. */
                interface IPasswordLeakVerification {

                    /** PasswordLeakVerification hashedUserCredentials */
                    hashedUserCredentials?: (Uint8Array|string|null);

                    /** PasswordLeakVerification credentialsLeaked */
                    credentialsLeaked?: (boolean|null);

                    /** PasswordLeakVerification canonicalizedUsername */
                    canonicalizedUsername?: (string|null);
                }

                /** Represents a PasswordLeakVerification. */
                class PasswordLeakVerification implements IPasswordLeakVerification {

                    /**
                     * Constructs a new PasswordLeakVerification.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recaptchaenterprise.v1beta1.IPasswordLeakVerification);

                    /** PasswordLeakVerification hashedUserCredentials. */
                    public hashedUserCredentials: (Uint8Array|string);

                    /** PasswordLeakVerification credentialsLeaked. */
                    public credentialsLeaked: boolean;

                    /** PasswordLeakVerification canonicalizedUsername. */
                    public canonicalizedUsername: string;

                    /**
                     * Creates a new PasswordLeakVerification instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PasswordLeakVerification instance
                     */
                    public static create(properties?: google.cloud.recaptchaenterprise.v1beta1.IPasswordLeakVerification): google.cloud.recaptchaenterprise.v1beta1.PasswordLeakVerification;

                    /**
                     * Encodes the specified PasswordLeakVerification message. Does not implicitly {@link google.cloud.recaptchaenterprise.v1beta1.PasswordLeakVerification.verify|verify} messages.
                     * @param message PasswordLeakVerification message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recaptchaenterprise.v1beta1.IPasswordLeakVerification, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PasswordLeakVerification message, length delimited. Does not implicitly {@link google.cloud.recaptchaenterprise.v1beta1.PasswordLeakVerification.verify|verify} messages.
                     * @param message PasswordLeakVerification message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recaptchaenterprise.v1beta1.IPasswordLeakVerification, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PasswordLeakVerification message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PasswordLeakVerification
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recaptchaenterprise.v1beta1.PasswordLeakVerification;

                    /**
                     * Decodes a PasswordLeakVerification message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PasswordLeakVerification
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recaptchaenterprise.v1beta1.PasswordLeakVerification;

                    /**
                     * Verifies a PasswordLeakVerification message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PasswordLeakVerification message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PasswordLeakVerification
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recaptchaenterprise.v1beta1.PasswordLeakVerification;

                    /**
                     * Creates a plain object from a PasswordLeakVerification message. Also converts values to other types if specified.
                     * @param message PasswordLeakVerification
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recaptchaenterprise.v1beta1.PasswordLeakVerification, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PasswordLeakVerification to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for PasswordLeakVerification
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an Assessment. */
                interface IAssessment {

                    /** Assessment name */
                    name?: (string|null);

                    /** Assessment event */
                    event?: (google.cloud.recaptchaenterprise.v1beta1.IEvent|null);

                    /** Assessment score */
                    score?: (number|null);

                    /** Assessment tokenProperties */
                    tokenProperties?: (google.cloud.recaptchaenterprise.v1beta1.ITokenProperties|null);

                    /** Assessment reasons */
                    reasons?: (google.cloud.recaptchaenterprise.v1beta1.Assessment.ClassificationReason[]|null);

                    /** Assessment passwordLeakVerification */
                    passwordLeakVerification?: (google.cloud.recaptchaenterprise.v1beta1.IPasswordLeakVerification|null);

                    /** Assessment accountDefenderAssessment */
                    accountDefenderAssessment?: (google.cloud.recaptchaenterprise.v1beta1.IAccountDefenderAssessment|null);

                    /** Assessment fraudPreventionAssessment */
                    fraudPreventionAssessment?: (google.cloud.recaptchaenterprise.v1beta1.IFraudPreventionAssessment|null);
                }

                /** Represents an Assessment. */
                class Assessment implements IAssessment {

                    /**
                     * Constructs a new Assessment.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recaptchaenterprise.v1beta1.IAssessment);

                    /** Assessment name. */
                    public name: string;

                    /** Assessment event. */
                    public event?: (google.cloud.recaptchaenterprise.v1beta1.IEvent|null);

                    /** Assessment score. */
                    public score: number;

                    /** Assessment tokenProperties. */
                    public tokenProperties?: (google.cloud.recaptchaenterprise.v1beta1.ITokenProperties|null);

                    /** Assessment reasons. */
                    public reasons: google.cloud.recaptchaenterprise.v1beta1.Assessment.ClassificationReason[];

                    /** Assessment passwordLeakVerification. */
                    public passwordLeakVerification?: (google.cloud.recaptchaenterprise.v1beta1.IPasswordLeakVerification|null);

                    /** Assessment accountDefenderAssessment. */
                    public accountDefenderAssessment?: (google.cloud.recaptchaenterprise.v1beta1.IAccountDefenderAssessment|null);

                    /** Assessment fraudPreventionAssessment. */
                    public fraudPreventionAssessment?: (google.cloud.recaptchaenterprise.v1beta1.IFraudPreventionAssessment|null);

                    /**
                     * Creates a new Assessment instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Assessment instance
                     */
                    public static create(properties?: google.cloud.recaptchaenterprise.v1beta1.IAssessment): google.cloud.recaptchaenterprise.v1beta1.Assessment;

                    /**
                     * Encodes the specified Assessment message. Does not implicitly {@link google.cloud.recaptchaenterprise.v1beta1.Assessment.verify|verify} messages.
                     * @param message Assessment message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recaptchaenterprise.v1beta1.IAssessment, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Assessment message, length delimited. Does not implicitly {@link google.cloud.recaptchaenterprise.v1beta1.Assessment.verify|verify} messages.
                     * @param message Assessment message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recaptchaenterprise.v1beta1.IAssessment, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an Assessment message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Assessment
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recaptchaenterprise.v1beta1.Assessment;

                    /**
                     * Decodes an Assessment message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Assessment
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recaptchaenterprise.v1beta1.Assessment;

                    /**
                     * Verifies an Assessment message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an Assessment message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Assessment
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recaptchaenterprise.v1beta1.Assessment;

                    /**
                     * Creates a plain object from an Assessment message. Also converts values to other types if specified.
                     * @param message Assessment
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recaptchaenterprise.v1beta1.Assessment, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Assessment to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Assessment
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace Assessment {

                    /** ClassificationReason enum. */
                    enum ClassificationReason {
                        CLASSIFICATION_REASON_UNSPECIFIED = 0,
                        AUTOMATION = 1,
                        UNEXPECTED_ENVIRONMENT = 2,
                        TOO_MUCH_TRAFFIC = 3,
                        UNEXPECTED_USAGE_PATTERNS = 4,
                        LOW_CONFIDENCE_SCORE = 5,
                        SUSPECTED_CARDING = 6,
                        SUSPECTED_CHARGEBACK = 7
                    }
                }

                /** Properties of an Event. */
                interface IEvent {

                    /** Event token */
                    token?: (string|null);

                    /** Event siteKey */
                    siteKey?: (string|null);

                    /** Event userAgent */
                    userAgent?: (string|null);

                    /** Event userIpAddress */
                    userIpAddress?: (string|null);

                    /** Event expectedAction */
                    expectedAction?: (string|null);

                    /** Event hashedAccountId */
                    hashedAccountId?: (Uint8Array|string|null);

                    /** Event transactionData */
                    transactionData?: (google.cloud.recaptchaenterprise.v1beta1.ITransactionData|null);

                    /** Event fraudPrevention */
                    fraudPrevention?: (google.cloud.recaptchaenterprise.v1beta1.Event.FraudPrevention|keyof typeof google.cloud.recaptchaenterprise.v1beta1.Event.FraudPrevention|null);
                }

                /** Represents an Event. */
                class Event implements IEvent {

                    /**
                     * Constructs a new Event.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recaptchaenterprise.v1beta1.IEvent);

                    /** Event token. */
                    public token: string;

                    /** Event siteKey. */
                    public siteKey: string;

                    /** Event userAgent. */
                    public userAgent: string;

                    /** Event userIpAddress. */
                    public userIpAddress: string;

                    /** Event expectedAction. */
                    public expectedAction: string;

                    /** Event hashedAccountId. */
                    public hashedAccountId: (Uint8Array|string);

                    /** Event transactionData. */
                    public transactionData?: (google.cloud.recaptchaenterprise.v1beta1.ITransactionData|null);

                    /** Event fraudPrevention. */
                    public fraudPrevention: (google.cloud.recaptchaenterprise.v1beta1.Event.FraudPrevention|keyof typeof google.cloud.recaptchaenterprise.v1beta1.Event.FraudPrevention);

                    /**
                     * Creates a new Event instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Event instance
                     */
                    public static create(properties?: google.cloud.recaptchaenterprise.v1beta1.IEvent): google.cloud.recaptchaenterprise.v1beta1.Event;

                    /**
                     * Encodes the specified Event message. Does not implicitly {@link google.cloud.recaptchaenterprise.v1beta1.Event.verify|verify} messages.
                     * @param message Event message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recaptchaenterprise.v1beta1.IEvent, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Event message, length delimited. Does not implicitly {@link google.cloud.recaptchaenterprise.v1beta1.Event.verify|verify} messages.
                     * @param message Event message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recaptchaenterprise.v1beta1.IEvent, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an Event message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Event
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recaptchaenterprise.v1beta1.Event;

                    /**
                     * Decodes an Event message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Event
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recaptchaenterprise.v1beta1.Event;

                    /**
                     * Verifies an Event message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an Event message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Event
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recaptchaenterprise.v1beta1.Event;

                    /**
                     * Creates a plain object from an Event message. Also converts values to other types if specified.
                     * @param message Event
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recaptchaenterprise.v1beta1.Event, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Event to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Event
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace Event {

                    /** FraudPrevention enum. */
                    enum FraudPrevention {
                        FRAUD_PREVENTION_UNSPECIFIED = 0,
                        ENABLED = 1,
                        DISABLED = 2
                    }
                }

                /** Properties of a TransactionData. */
                interface ITransactionData {

                    /** TransactionData transactionId */
                    transactionId?: (string|null);

                    /** TransactionData paymentMethod */
                    paymentMethod?: (string|null);

                    /** TransactionData cardBin */
                    cardBin?: (string|null);

                    /** TransactionData cardLastFour */
                    cardLastFour?: (string|null);

                    /** TransactionData currencyCode */
                    currencyCode?: (string|null);

                    /** TransactionData value */
                    value?: (number|null);

                    /** TransactionData shippingValue */
                    shippingValue?: (number|null);

                    /** TransactionData shippingAddress */
                    shippingAddress?: (google.cloud.recaptchaenterprise.v1beta1.TransactionData.IAddress|null);

                    /** TransactionData billingAddress */
                    billingAddress?: (google.cloud.recaptchaenterprise.v1beta1.TransactionData.IAddress|null);

                    /** TransactionData user */
                    user?: (google.cloud.recaptchaenterprise.v1beta1.TransactionData.IUser|null);

                    /** TransactionData merchants */
                    merchants?: (google.cloud.recaptchaenterprise.v1beta1.TransactionData.IUser[]|null);

                    /** TransactionData items */
                    items?: (google.cloud.recaptchaenterprise.v1beta1.TransactionData.IItem[]|null);

                    /** TransactionData gatewayInfo */
                    gatewayInfo?: (google.cloud.recaptchaenterprise.v1beta1.TransactionData.IGatewayInfo|null);
                }

                /** Represents a TransactionData. */
                class TransactionData implements ITransactionData {

                    /**
                     * Constructs a new TransactionData.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recaptchaenterprise.v1beta1.ITransactionData);

                    /** TransactionData transactionId. */
                    public transactionId?: (string|null);

                    /** TransactionData paymentMethod. */
                    public paymentMethod: string;

                    /** TransactionData cardBin. */
                    public cardBin: string;

                    /** TransactionData cardLastFour. */
                    public cardLastFour: string;

                    /** TransactionData currencyCode. */
                    public currencyCode: string;

                    /** TransactionData value. */
                    public value: number;

                    /** TransactionData shippingValue. */
                    public shippingValue: number;

                    /** TransactionData shippingAddress. */
                    public shippingAddress?: (google.cloud.recaptchaenterprise.v1beta1.TransactionData.IAddress|null);

                    /** TransactionData billingAddress. */
                    public billingAddress?: (google.cloud.recaptchaenterprise.v1beta1.TransactionData.IAddress|null);

                    /** TransactionData user. */
                    public user?: (google.cloud.recaptchaenterprise.v1beta1.TransactionData.IUser|null);

                    /** TransactionData merchants. */
                    public merchants: google.cloud.recaptchaenterprise.v1beta1.TransactionData.IUser[];

                    /** TransactionData items. */
                    public items: google.cloud.recaptchaenterprise.v1beta1.TransactionData.IItem[];

                    /** TransactionData gatewayInfo. */
                    public gatewayInfo?: (google.cloud.recaptchaenterprise.v1beta1.TransactionData.IGatewayInfo|null);

                    /** TransactionData _transactionId. */
                    public _transactionId?: "transactionId";

                    /**
                     * Creates a new TransactionData instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TransactionData instance
                     */
                    public static create(properties?: google.cloud.recaptchaenterprise.v1beta1.ITransactionData): google.cloud.recaptchaenterprise.v1beta1.TransactionData;

                    /**
                     * Encodes the specified TransactionData message. Does not implicitly {@link google.cloud.recaptchaenterprise.v1beta1.TransactionData.verify|verify} messages.
                     * @param message TransactionData message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recaptchaenterprise.v1beta1.ITransactionData, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TransactionData message, length delimited. Does not implicitly {@link google.cloud.recaptchaenterprise.v1beta1.TransactionData.verify|verify} messages.
                     * @param message TransactionData message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recaptchaenterprise.v1beta1.ITransactionData, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TransactionData message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TransactionData
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recaptchaenterprise.v1beta1.TransactionData;

                    /**
                     * Decodes a TransactionData message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TransactionData
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recaptchaenterprise.v1beta1.TransactionData;

                    /**
                     * Verifies a TransactionData message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TransactionData message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TransactionData
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recaptchaenterprise.v1beta1.TransactionData;

                    /**
                     * Creates a plain object from a TransactionData message. Also converts values to other types if specified.
                     * @param message TransactionData
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recaptchaenterprise.v1beta1.TransactionData, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TransactionData to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for TransactionData
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace TransactionData {

                    /** Properties of an Address. */
                    interface IAddress {

                        /** Address recipient */
                        recipient?: (string|null);

                        /** Address address */
                        address?: (string[]|null);

                        /** Address locality */
                        locality?: (string|null);

                        /** Address administrativeArea */
                        administrativeArea?: (string|null);

                        /** Address regionCode */
                        regionCode?: (string|null);

                        /** Address postalCode */
                        postalCode?: (string|null);
                    }

                    /** Represents an Address. */
                    class Address implements IAddress {

                        /**
                         * Constructs a new Address.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.recaptchaenterprise.v1beta1.TransactionData.IAddress);

                        /** Address recipient. */
                        public recipient: string;

                        /** Address address. */
                        public address: string[];

                        /** Address locality. */
                        public locality: string;

                        /** Address administrativeArea. */
                        public administrativeArea: string;

                        /** Address regionCode. */
                        public regionCode: string;

                        /** Address postalCode. */
                        public postalCode: string;

                        /**
                         * Creates a new Address instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Address instance
                         */
                        public static create(properties?: google.cloud.recaptchaenterprise.v1beta1.TransactionData.IAddress): google.cloud.recaptchaenterprise.v1beta1.TransactionData.Address;

                        /**
                         * Encodes the specified Address message. Does not implicitly {@link google.cloud.recaptchaenterprise.v1beta1.TransactionData.Address.verify|verify} messages.
                         * @param message Address message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.recaptchaenterprise.v1beta1.TransactionData.IAddress, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Address message, length delimited. Does not implicitly {@link google.cloud.recaptchaenterprise.v1beta1.TransactionData.Address.verify|verify} messages.
                         * @param message Address message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.recaptchaenterprise.v1beta1.TransactionData.IAddress, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an Address message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Address
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recaptchaenterprise.v1beta1.TransactionData.Address;

                        /**
                         * Decodes an Address message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Address
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recaptchaenterprise.v1beta1.TransactionData.Address;

                        /**
                         * Verifies an Address message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an Address message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Address
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.recaptchaenterprise.v1beta1.TransactionData.Address;

                        /**
                         * Creates a plain object from an Address message. Also converts values to other types if specified.
                         * @param message Address
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.recaptchaenterprise.v1beta1.TransactionData.Address, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Address to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for Address
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a User. */
                    interface IUser {

                        /** User accountId */
                        accountId?: (string|null);

                        /** User creationMs */
                        creationMs?: (number|Long|string|null);

                        /** User email */
                        email?: (string|null);

                        /** User emailVerified */
                        emailVerified?: (boolean|null);

                        /** User phoneNumber */
                        phoneNumber?: (string|null);

                        /** User phoneVerified */
                        phoneVerified?: (boolean|null);
                    }

                    /** Represents a User. */
                    class User implements IUser {

                        /**
                         * Constructs a new User.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.recaptchaenterprise.v1beta1.TransactionData.IUser);

                        /** User accountId. */
                        public accountId: string;

                        /** User creationMs. */
                        public creationMs: (number|Long|string);

                        /** User email. */
                        public email: string;

                        /** User emailVerified. */
                        public emailVerified: boolean;

                        /** User phoneNumber. */
                        public phoneNumber: string;

                        /** User phoneVerified. */
                        public phoneVerified: boolean;

                        /**
                         * Creates a new User instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns User instance
                         */
                        public static create(properties?: google.cloud.recaptchaenterprise.v1beta1.TransactionData.IUser): google.cloud.recaptchaenterprise.v1beta1.TransactionData.User;

                        /**
                         * Encodes the specified User message. Does not implicitly {@link google.cloud.recaptchaenterprise.v1beta1.TransactionData.User.verify|verify} messages.
                         * @param message User message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.recaptchaenterprise.v1beta1.TransactionData.IUser, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified User message, length delimited. Does not implicitly {@link google.cloud.recaptchaenterprise.v1beta1.TransactionData.User.verify|verify} messages.
                         * @param message User message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.recaptchaenterprise.v1beta1.TransactionData.IUser, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a User message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns User
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recaptchaenterprise.v1beta1.TransactionData.User;

                        /**
                         * Decodes a User message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns User
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recaptchaenterprise.v1beta1.TransactionData.User;

                        /**
                         * Verifies a User message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a User message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns User
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.recaptchaenterprise.v1beta1.TransactionData.User;

                        /**
                         * Creates a plain object from a User message. Also converts values to other types if specified.
                         * @param message User
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.recaptchaenterprise.v1beta1.TransactionData.User, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this User to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for User
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of an Item. */
                    interface IItem {

                        /** Item name */
                        name?: (string|null);

                        /** Item value */
                        value?: (number|null);

                        /** Item quantity */
                        quantity?: (number|Long|string|null);

                        /** Item merchantAccountId */
                        merchantAccountId?: (string|null);
                    }

                    /** Represents an Item. */
                    class Item implements IItem {

                        /**
                         * Constructs a new Item.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.recaptchaenterprise.v1beta1.TransactionData.IItem);

                        /** Item name. */
                        public name: string;

                        /** Item value. */
                        public value: number;

                        /** Item quantity. */
                        public quantity: (number|Long|string);

                        /** Item merchantAccountId. */
                        public merchantAccountId: string;

                        /**
                         * Creates a new Item instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Item instance
                         */
                        public static create(properties?: google.cloud.recaptchaenterprise.v1beta1.TransactionData.IItem): google.cloud.recaptchaenterprise.v1beta1.TransactionData.Item;

                        /**
                         * Encodes the specified Item message. Does not implicitly {@link google.cloud.recaptchaenterprise.v1beta1.TransactionData.Item.verify|verify} messages.
                         * @param message Item message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.recaptchaenterprise.v1beta1.TransactionData.IItem, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Item message, length delimited. Does not implicitly {@link google.cloud.recaptchaenterprise.v1beta1.TransactionData.Item.verify|verify} messages.
                         * @param message Item message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.recaptchaenterprise.v1beta1.TransactionData.IItem, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an Item message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Item
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recaptchaenterprise.v1beta1.TransactionData.Item;

                        /**
                         * Decodes an Item message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Item
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recaptchaenterprise.v1beta1.TransactionData.Item;

                        /**
                         * Verifies an Item message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an Item message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Item
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.recaptchaenterprise.v1beta1.TransactionData.Item;

                        /**
                         * Creates a plain object from an Item message. Also converts values to other types if specified.
                         * @param message Item
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.recaptchaenterprise.v1beta1.TransactionData.Item, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Item to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for Item
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a GatewayInfo. */
                    interface IGatewayInfo {

                        /** GatewayInfo name */
                        name?: (string|null);

                        /** GatewayInfo gatewayResponseCode */
                        gatewayResponseCode?: (string|null);

                        /** GatewayInfo avsResponseCode */
                        avsResponseCode?: (string|null);

                        /** GatewayInfo cvvResponseCode */
                        cvvResponseCode?: (string|null);
                    }

                    /** Represents a GatewayInfo. */
                    class GatewayInfo implements IGatewayInfo {

                        /**
                         * Constructs a new GatewayInfo.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.recaptchaenterprise.v1beta1.TransactionData.IGatewayInfo);

                        /** GatewayInfo name. */
                        public name: string;

                        /** GatewayInfo gatewayResponseCode. */
                        public gatewayResponseCode: string;

                        /** GatewayInfo avsResponseCode. */
                        public avsResponseCode: string;

                        /** GatewayInfo cvvResponseCode. */
                        public cvvResponseCode: string;

                        /**
                         * Creates a new GatewayInfo instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns GatewayInfo instance
                         */
                        public static create(properties?: google.cloud.recaptchaenterprise.v1beta1.TransactionData.IGatewayInfo): google.cloud.recaptchaenterprise.v1beta1.TransactionData.GatewayInfo;

                        /**
                         * Encodes the specified GatewayInfo message. Does not implicitly {@link google.cloud.recaptchaenterprise.v1beta1.TransactionData.GatewayInfo.verify|verify} messages.
                         * @param message GatewayInfo message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.recaptchaenterprise.v1beta1.TransactionData.IGatewayInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified GatewayInfo message, length delimited. Does not implicitly {@link google.cloud.recaptchaenterprise.v1beta1.TransactionData.GatewayInfo.verify|verify} messages.
                         * @param message GatewayInfo message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.recaptchaenterprise.v1beta1.TransactionData.IGatewayInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a GatewayInfo message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns GatewayInfo
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recaptchaenterprise.v1beta1.TransactionData.GatewayInfo;

                        /**
                         * Decodes a GatewayInfo message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns GatewayInfo
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recaptchaenterprise.v1beta1.TransactionData.GatewayInfo;

                        /**
                         * Verifies a GatewayInfo message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a GatewayInfo message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns GatewayInfo
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.recaptchaenterprise.v1beta1.TransactionData.GatewayInfo;

                        /**
                         * Creates a plain object from a GatewayInfo message. Also converts values to other types if specified.
                         * @param message GatewayInfo
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.recaptchaenterprise.v1beta1.TransactionData.GatewayInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this GatewayInfo to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for GatewayInfo
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }
                }

                /** Properties of a TokenProperties. */
                interface ITokenProperties {

                    /** TokenProperties valid */
                    valid?: (boolean|null);

                    /** TokenProperties invalidReason */
                    invalidReason?: (google.cloud.recaptchaenterprise.v1beta1.TokenProperties.InvalidReason|keyof typeof google.cloud.recaptchaenterprise.v1beta1.TokenProperties.InvalidReason|null);

                    /** TokenProperties createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** TokenProperties hostname */
                    hostname?: (string|null);

                    /** TokenProperties action */
                    action?: (string|null);
                }

                /** Represents a TokenProperties. */
                class TokenProperties implements ITokenProperties {

                    /**
                     * Constructs a new TokenProperties.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recaptchaenterprise.v1beta1.ITokenProperties);

                    /** TokenProperties valid. */
                    public valid: boolean;

                    /** TokenProperties invalidReason. */
                    public invalidReason: (google.cloud.recaptchaenterprise.v1beta1.TokenProperties.InvalidReason|keyof typeof google.cloud.recaptchaenterprise.v1beta1.TokenProperties.InvalidReason);

                    /** TokenProperties createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** TokenProperties hostname. */
                    public hostname: string;

                    /** TokenProperties action. */
                    public action: string;

                    /**
                     * Creates a new TokenProperties instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TokenProperties instance
                     */
                    public static create(properties?: google.cloud.recaptchaenterprise.v1beta1.ITokenProperties): google.cloud.recaptchaenterprise.v1beta1.TokenProperties;

                    /**
                     * Encodes the specified TokenProperties message. Does not implicitly {@link google.cloud.recaptchaenterprise.v1beta1.TokenProperties.verify|verify} messages.
                     * @param message TokenProperties message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recaptchaenterprise.v1beta1.ITokenProperties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TokenProperties message, length delimited. Does not implicitly {@link google.cloud.recaptchaenterprise.v1beta1.TokenProperties.verify|verify} messages.
                     * @param message TokenProperties message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recaptchaenterprise.v1beta1.ITokenProperties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TokenProperties message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TokenProperties
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recaptchaenterprise.v1beta1.TokenProperties;

                    /**
                     * Decodes a TokenProperties message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TokenProperties
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recaptchaenterprise.v1beta1.TokenProperties;

                    /**
                     * Verifies a TokenProperties message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TokenProperties message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TokenProperties
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recaptchaenterprise.v1beta1.TokenProperties;

                    /**
                     * Creates a plain object from a TokenProperties message. Also converts values to other types if specified.
                     * @param message TokenProperties
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recaptchaenterprise.v1beta1.TokenProperties, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TokenProperties to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for TokenProperties
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace TokenProperties {

                    /** InvalidReason enum. */
                    enum InvalidReason {
                        INVALID_REASON_UNSPECIFIED = 0,
                        UNKNOWN_INVALID_REASON = 1,
                        MALFORMED = 2,
                        EXPIRED = 3,
                        DUPE = 4,
                        SITE_MISMATCH = 5,
                        MISSING = 6,
                        BROWSER_ERROR = 7
                    }
                }

                /** Properties of a FraudPreventionAssessment. */
                interface IFraudPreventionAssessment {

                    /** FraudPreventionAssessment transactionRisk */
                    transactionRisk?: (number|null);

                    /** FraudPreventionAssessment stolenInstrumentVerdict */
                    stolenInstrumentVerdict?: (google.cloud.recaptchaenterprise.v1beta1.FraudPreventionAssessment.IStolenInstrumentVerdict|null);

                    /** FraudPreventionAssessment cardTestingVerdict */
                    cardTestingVerdict?: (google.cloud.recaptchaenterprise.v1beta1.FraudPreventionAssessment.ICardTestingVerdict|null);

                    /** FraudPreventionAssessment behavioralTrustVerdict */
                    behavioralTrustVerdict?: (google.cloud.recaptchaenterprise.v1beta1.FraudPreventionAssessment.IBehavioralTrustVerdict|null);
                }

                /** Represents a FraudPreventionAssessment. */
                class FraudPreventionAssessment implements IFraudPreventionAssessment {

                    /**
                     * Constructs a new FraudPreventionAssessment.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recaptchaenterprise.v1beta1.IFraudPreventionAssessment);

                    /** FraudPreventionAssessment transactionRisk. */
                    public transactionRisk: number;

                    /** FraudPreventionAssessment stolenInstrumentVerdict. */
                    public stolenInstrumentVerdict?: (google.cloud.recaptchaenterprise.v1beta1.FraudPreventionAssessment.IStolenInstrumentVerdict|null);

                    /** FraudPreventionAssessment cardTestingVerdict. */
                    public cardTestingVerdict?: (google.cloud.recaptchaenterprise.v1beta1.FraudPreventionAssessment.ICardTestingVerdict|null);

                    /** FraudPreventionAssessment behavioralTrustVerdict. */
                    public behavioralTrustVerdict?: (google.cloud.recaptchaenterprise.v1beta1.FraudPreventionAssessment.IBehavioralTrustVerdict|null);

                    /**
                     * Creates a new FraudPreventionAssessment instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns FraudPreventionAssessment instance
                     */
                    public static create(properties?: google.cloud.recaptchaenterprise.v1beta1.IFraudPreventionAssessment): google.cloud.recaptchaenterprise.v1beta1.FraudPreventionAssessment;

                    /**
                     * Encodes the specified FraudPreventionAssessment message. Does not implicitly {@link google.cloud.recaptchaenterprise.v1beta1.FraudPreventionAssessment.verify|verify} messages.
                     * @param message FraudPreventionAssessment message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recaptchaenterprise.v1beta1.IFraudPreventionAssessment, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified FraudPreventionAssessment message, length delimited. Does not implicitly {@link google.cloud.recaptchaenterprise.v1beta1.FraudPreventionAssessment.verify|verify} messages.
                     * @param message FraudPreventionAssessment message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recaptchaenterprise.v1beta1.IFraudPreventionAssessment, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a FraudPreventionAssessment message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns FraudPreventionAssessment
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recaptchaenterprise.v1beta1.FraudPreventionAssessment;

                    /**
                     * Decodes a FraudPreventionAssessment message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns FraudPreventionAssessment
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recaptchaenterprise.v1beta1.FraudPreventionAssessment;

                    /**
                     * Verifies a FraudPreventionAssessment message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a FraudPreventionAssessment message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns FraudPreventionAssessment
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recaptchaenterprise.v1beta1.FraudPreventionAssessment;

                    /**
                     * Creates a plain object from a FraudPreventionAssessment message. Also converts values to other types if specified.
                     * @param message FraudPreventionAssessment
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recaptchaenterprise.v1beta1.FraudPreventionAssessment, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this FraudPreventionAssessment to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for FraudPreventionAssessment
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace FraudPreventionAssessment {

                    /** Properties of a StolenInstrumentVerdict. */
                    interface IStolenInstrumentVerdict {

                        /** StolenInstrumentVerdict risk */
                        risk?: (number|null);
                    }

                    /** Represents a StolenInstrumentVerdict. */
                    class StolenInstrumentVerdict implements IStolenInstrumentVerdict {

                        /**
                         * Constructs a new StolenInstrumentVerdict.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.recaptchaenterprise.v1beta1.FraudPreventionAssessment.IStolenInstrumentVerdict);

                        /** StolenInstrumentVerdict risk. */
                        public risk: number;

                        /**
                         * Creates a new StolenInstrumentVerdict instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns StolenInstrumentVerdict instance
                         */
                        public static create(properties?: google.cloud.recaptchaenterprise.v1beta1.FraudPreventionAssessment.IStolenInstrumentVerdict): google.cloud.recaptchaenterprise.v1beta1.FraudPreventionAssessment.StolenInstrumentVerdict;

                        /**
                         * Encodes the specified StolenInstrumentVerdict message. Does not implicitly {@link google.cloud.recaptchaenterprise.v1beta1.FraudPreventionAssessment.StolenInstrumentVerdict.verify|verify} messages.
                         * @param message StolenInstrumentVerdict message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.recaptchaenterprise.v1beta1.FraudPreventionAssessment.IStolenInstrumentVerdict, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified StolenInstrumentVerdict message, length delimited. Does not implicitly {@link google.cloud.recaptchaenterprise.v1beta1.FraudPreventionAssessment.StolenInstrumentVerdict.verify|verify} messages.
                         * @param message StolenInstrumentVerdict message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.recaptchaenterprise.v1beta1.FraudPreventionAssessment.IStolenInstrumentVerdict, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a StolenInstrumentVerdict message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns StolenInstrumentVerdict
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recaptchaenterprise.v1beta1.FraudPreventionAssessment.StolenInstrumentVerdict;

                        /**
                         * Decodes a StolenInstrumentVerdict message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns StolenInstrumentVerdict
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recaptchaenterprise.v1beta1.FraudPreventionAssessment.StolenInstrumentVerdict;

                        /**
                         * Verifies a StolenInstrumentVerdict message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a StolenInstrumentVerdict message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns StolenInstrumentVerdict
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.recaptchaenterprise.v1beta1.FraudPreventionAssessment.StolenInstrumentVerdict;

                        /**
                         * Creates a plain object from a StolenInstrumentVerdict message. Also converts values to other types if specified.
                         * @param message StolenInstrumentVerdict
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.recaptchaenterprise.v1beta1.FraudPreventionAssessment.StolenInstrumentVerdict, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this StolenInstrumentVerdict to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for StolenInstrumentVerdict
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a CardTestingVerdict. */
                    interface ICardTestingVerdict {

                        /** CardTestingVerdict risk */
                        risk?: (number|null);
                    }

                    /** Represents a CardTestingVerdict. */
                    class CardTestingVerdict implements ICardTestingVerdict {

                        /**
                         * Constructs a new CardTestingVerdict.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.recaptchaenterprise.v1beta1.FraudPreventionAssessment.ICardTestingVerdict);

                        /** CardTestingVerdict risk. */
                        public risk: number;

                        /**
                         * Creates a new CardTestingVerdict instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns CardTestingVerdict instance
                         */
                        public static create(properties?: google.cloud.recaptchaenterprise.v1beta1.FraudPreventionAssessment.ICardTestingVerdict): google.cloud.recaptchaenterprise.v1beta1.FraudPreventionAssessment.CardTestingVerdict;

                        /**
                         * Encodes the specified CardTestingVerdict message. Does not implicitly {@link google.cloud.recaptchaenterprise.v1beta1.FraudPreventionAssessment.CardTestingVerdict.verify|verify} messages.
                         * @param message CardTestingVerdict message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.recaptchaenterprise.v1beta1.FraudPreventionAssessment.ICardTestingVerdict, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified CardTestingVerdict message, length delimited. Does not implicitly {@link google.cloud.recaptchaenterprise.v1beta1.FraudPreventionAssessment.CardTestingVerdict.verify|verify} messages.
                         * @param message CardTestingVerdict message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.recaptchaenterprise.v1beta1.FraudPreventionAssessment.ICardTestingVerdict, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a CardTestingVerdict message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns CardTestingVerdict
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recaptchaenterprise.v1beta1.FraudPreventionAssessment.CardTestingVerdict;

                        /**
                         * Decodes a CardTestingVerdict message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns CardTestingVerdict
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recaptchaenterprise.v1beta1.FraudPreventionAssessment.CardTestingVerdict;

                        /**
                         * Verifies a CardTestingVerdict message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a CardTestingVerdict message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns CardTestingVerdict
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.recaptchaenterprise.v1beta1.FraudPreventionAssessment.CardTestingVerdict;

                        /**
                         * Creates a plain object from a CardTestingVerdict message. Also converts values to other types if specified.
                         * @param message CardTestingVerdict
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.recaptchaenterprise.v1beta1.FraudPreventionAssessment.CardTestingVerdict, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this CardTestingVerdict to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for CardTestingVerdict
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a BehavioralTrustVerdict. */
                    interface IBehavioralTrustVerdict {

                        /** BehavioralTrustVerdict trust */
                        trust?: (number|null);
                    }

                    /** Represents a BehavioralTrustVerdict. */
                    class BehavioralTrustVerdict implements IBehavioralTrustVerdict {

                        /**
                         * Constructs a new BehavioralTrustVerdict.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.recaptchaenterprise.v1beta1.FraudPreventionAssessment.IBehavioralTrustVerdict);

                        /** BehavioralTrustVerdict trust. */
                        public trust: number;

                        /**
                         * Creates a new BehavioralTrustVerdict instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns BehavioralTrustVerdict instance
                         */
                        public static create(properties?: google.cloud.recaptchaenterprise.v1beta1.FraudPreventionAssessment.IBehavioralTrustVerdict): google.cloud.recaptchaenterprise.v1beta1.FraudPreventionAssessment.BehavioralTrustVerdict;

                        /**
                         * Encodes the specified BehavioralTrustVerdict message. Does not implicitly {@link google.cloud.recaptchaenterprise.v1beta1.FraudPreventionAssessment.BehavioralTrustVerdict.verify|verify} messages.
                         * @param message BehavioralTrustVerdict message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.recaptchaenterprise.v1beta1.FraudPreventionAssessment.IBehavioralTrustVerdict, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified BehavioralTrustVerdict message, length delimited. Does not implicitly {@link google.cloud.recaptchaenterprise.v1beta1.FraudPreventionAssessment.BehavioralTrustVerdict.verify|verify} messages.
                         * @param message BehavioralTrustVerdict message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.recaptchaenterprise.v1beta1.FraudPreventionAssessment.IBehavioralTrustVerdict, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a BehavioralTrustVerdict message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns BehavioralTrustVerdict
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recaptchaenterprise.v1beta1.FraudPreventionAssessment.BehavioralTrustVerdict;

                        /**
                         * Decodes a BehavioralTrustVerdict message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns BehavioralTrustVerdict
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recaptchaenterprise.v1beta1.FraudPreventionAssessment.BehavioralTrustVerdict;

                        /**
                         * Verifies a BehavioralTrustVerdict message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a BehavioralTrustVerdict message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns BehavioralTrustVerdict
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.recaptchaenterprise.v1beta1.FraudPreventionAssessment.BehavioralTrustVerdict;

                        /**
                         * Creates a plain object from a BehavioralTrustVerdict message. Also converts values to other types if specified.
                         * @param message BehavioralTrustVerdict
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.recaptchaenterprise.v1beta1.FraudPreventionAssessment.BehavioralTrustVerdict, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this BehavioralTrustVerdict to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for BehavioralTrustVerdict
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }
                }

                /** Properties of an AccountDefenderAssessment. */
                interface IAccountDefenderAssessment {

                    /** AccountDefenderAssessment labels */
                    labels?: (google.cloud.recaptchaenterprise.v1beta1.AccountDefenderAssessment.AccountDefenderLabel[]|null);
                }

                /** Represents an AccountDefenderAssessment. */
                class AccountDefenderAssessment implements IAccountDefenderAssessment {

                    /**
                     * Constructs a new AccountDefenderAssessment.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.recaptchaenterprise.v1beta1.IAccountDefenderAssessment);

                    /** AccountDefenderAssessment labels. */
                    public labels: google.cloud.recaptchaenterprise.v1beta1.AccountDefenderAssessment.AccountDefenderLabel[];

                    /**
                     * Creates a new AccountDefenderAssessment instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AccountDefenderAssessment instance
                     */
                    public static create(properties?: google.cloud.recaptchaenterprise.v1beta1.IAccountDefenderAssessment): google.cloud.recaptchaenterprise.v1beta1.AccountDefenderAssessment;

                    /**
                     * Encodes the specified AccountDefenderAssessment message. Does not implicitly {@link google.cloud.recaptchaenterprise.v1beta1.AccountDefenderAssessment.verify|verify} messages.
                     * @param message AccountDefenderAssessment message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.recaptchaenterprise.v1beta1.IAccountDefenderAssessment, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AccountDefenderAssessment message, length delimited. Does not implicitly {@link google.cloud.recaptchaenterprise.v1beta1.AccountDefenderAssessment.verify|verify} messages.
                     * @param message AccountDefenderAssessment message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.recaptchaenterprise.v1beta1.IAccountDefenderAssessment, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AccountDefenderAssessment message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AccountDefenderAssessment
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.recaptchaenterprise.v1beta1.AccountDefenderAssessment;

                    /**
                     * Decodes an AccountDefenderAssessment message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AccountDefenderAssessment
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.recaptchaenterprise.v1beta1.AccountDefenderAssessment;

                    /**
                     * Verifies an AccountDefenderAssessment message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AccountDefenderAssessment message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AccountDefenderAssessment
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.recaptchaenterprise.v1beta1.AccountDefenderAssessment;

                    /**
                     * Creates a plain object from an AccountDefenderAssessment message. Also converts values to other types if specified.
                     * @param message AccountDefenderAssessment
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.recaptchaenterprise.v1beta1.AccountDefenderAssessment, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AccountDefenderAssessment to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for AccountDefenderAssessment
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace AccountDefenderAssessment {

                    /** AccountDefenderLabel enum. */
                    enum AccountDefenderLabel {
                        ACCOUNT_DEFENDER_LABEL_UNSPECIFIED = 0,
                        PROFILE_MATCH = 1,
                        SUSPICIOUS_LOGIN_ACTIVITY = 2,
                        SUSPICIOUS_ACCOUNT_CREATION = 3,
                        RELATED_ACCOUNTS_NUMBER_HIGH = 4
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

            /**
             * Gets the default type url for Http
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
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

            /**
             * Gets the default type url for HttpRule
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
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

            /**
             * Gets the default type url for CustomHttpPattern
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a CommonLanguageSettings. */
        interface ICommonLanguageSettings {

            /** CommonLanguageSettings referenceDocsUri */
            referenceDocsUri?: (string|null);

            /** CommonLanguageSettings destinations */
            destinations?: (google.api.ClientLibraryDestination[]|null);
        }

        /** Represents a CommonLanguageSettings. */
        class CommonLanguageSettings implements ICommonLanguageSettings {

            /**
             * Constructs a new CommonLanguageSettings.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.ICommonLanguageSettings);

            /** CommonLanguageSettings referenceDocsUri. */
            public referenceDocsUri: string;

            /** CommonLanguageSettings destinations. */
            public destinations: google.api.ClientLibraryDestination[];

            /**
             * Creates a new CommonLanguageSettings instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CommonLanguageSettings instance
             */
            public static create(properties?: google.api.ICommonLanguageSettings): google.api.CommonLanguageSettings;

            /**
             * Encodes the specified CommonLanguageSettings message. Does not implicitly {@link google.api.CommonLanguageSettings.verify|verify} messages.
             * @param message CommonLanguageSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.ICommonLanguageSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CommonLanguageSettings message, length delimited. Does not implicitly {@link google.api.CommonLanguageSettings.verify|verify} messages.
             * @param message CommonLanguageSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.ICommonLanguageSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CommonLanguageSettings message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CommonLanguageSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.CommonLanguageSettings;

            /**
             * Decodes a CommonLanguageSettings message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CommonLanguageSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.CommonLanguageSettings;

            /**
             * Verifies a CommonLanguageSettings message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CommonLanguageSettings message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CommonLanguageSettings
             */
            public static fromObject(object: { [k: string]: any }): google.api.CommonLanguageSettings;

            /**
             * Creates a plain object from a CommonLanguageSettings message. Also converts values to other types if specified.
             * @param message CommonLanguageSettings
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.CommonLanguageSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CommonLanguageSettings to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for CommonLanguageSettings
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a ClientLibrarySettings. */
        interface IClientLibrarySettings {

            /** ClientLibrarySettings version */
            version?: (string|null);

            /** ClientLibrarySettings launchStage */
            launchStage?: (google.api.LaunchStage|keyof typeof google.api.LaunchStage|null);

            /** ClientLibrarySettings restNumericEnums */
            restNumericEnums?: (boolean|null);

            /** ClientLibrarySettings javaSettings */
            javaSettings?: (google.api.IJavaSettings|null);

            /** ClientLibrarySettings cppSettings */
            cppSettings?: (google.api.ICppSettings|null);

            /** ClientLibrarySettings phpSettings */
            phpSettings?: (google.api.IPhpSettings|null);

            /** ClientLibrarySettings pythonSettings */
            pythonSettings?: (google.api.IPythonSettings|null);

            /** ClientLibrarySettings nodeSettings */
            nodeSettings?: (google.api.INodeSettings|null);

            /** ClientLibrarySettings dotnetSettings */
            dotnetSettings?: (google.api.IDotnetSettings|null);

            /** ClientLibrarySettings rubySettings */
            rubySettings?: (google.api.IRubySettings|null);

            /** ClientLibrarySettings goSettings */
            goSettings?: (google.api.IGoSettings|null);
        }

        /** Represents a ClientLibrarySettings. */
        class ClientLibrarySettings implements IClientLibrarySettings {

            /**
             * Constructs a new ClientLibrarySettings.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IClientLibrarySettings);

            /** ClientLibrarySettings version. */
            public version: string;

            /** ClientLibrarySettings launchStage. */
            public launchStage: (google.api.LaunchStage|keyof typeof google.api.LaunchStage);

            /** ClientLibrarySettings restNumericEnums. */
            public restNumericEnums: boolean;

            /** ClientLibrarySettings javaSettings. */
            public javaSettings?: (google.api.IJavaSettings|null);

            /** ClientLibrarySettings cppSettings. */
            public cppSettings?: (google.api.ICppSettings|null);

            /** ClientLibrarySettings phpSettings. */
            public phpSettings?: (google.api.IPhpSettings|null);

            /** ClientLibrarySettings pythonSettings. */
            public pythonSettings?: (google.api.IPythonSettings|null);

            /** ClientLibrarySettings nodeSettings. */
            public nodeSettings?: (google.api.INodeSettings|null);

            /** ClientLibrarySettings dotnetSettings. */
            public dotnetSettings?: (google.api.IDotnetSettings|null);

            /** ClientLibrarySettings rubySettings. */
            public rubySettings?: (google.api.IRubySettings|null);

            /** ClientLibrarySettings goSettings. */
            public goSettings?: (google.api.IGoSettings|null);

            /**
             * Creates a new ClientLibrarySettings instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ClientLibrarySettings instance
             */
            public static create(properties?: google.api.IClientLibrarySettings): google.api.ClientLibrarySettings;

            /**
             * Encodes the specified ClientLibrarySettings message. Does not implicitly {@link google.api.ClientLibrarySettings.verify|verify} messages.
             * @param message ClientLibrarySettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IClientLibrarySettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ClientLibrarySettings message, length delimited. Does not implicitly {@link google.api.ClientLibrarySettings.verify|verify} messages.
             * @param message ClientLibrarySettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IClientLibrarySettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ClientLibrarySettings message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ClientLibrarySettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.ClientLibrarySettings;

            /**
             * Decodes a ClientLibrarySettings message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ClientLibrarySettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.ClientLibrarySettings;

            /**
             * Verifies a ClientLibrarySettings message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ClientLibrarySettings message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ClientLibrarySettings
             */
            public static fromObject(object: { [k: string]: any }): google.api.ClientLibrarySettings;

            /**
             * Creates a plain object from a ClientLibrarySettings message. Also converts values to other types if specified.
             * @param message ClientLibrarySettings
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.ClientLibrarySettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ClientLibrarySettings to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ClientLibrarySettings
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Publishing. */
        interface IPublishing {

            /** Publishing methodSettings */
            methodSettings?: (google.api.IMethodSettings[]|null);

            /** Publishing newIssueUri */
            newIssueUri?: (string|null);

            /** Publishing documentationUri */
            documentationUri?: (string|null);

            /** Publishing apiShortName */
            apiShortName?: (string|null);

            /** Publishing githubLabel */
            githubLabel?: (string|null);

            /** Publishing codeownerGithubTeams */
            codeownerGithubTeams?: (string[]|null);

            /** Publishing docTagPrefix */
            docTagPrefix?: (string|null);

            /** Publishing organization */
            organization?: (google.api.ClientLibraryOrganization|keyof typeof google.api.ClientLibraryOrganization|null);

            /** Publishing librarySettings */
            librarySettings?: (google.api.IClientLibrarySettings[]|null);

            /** Publishing protoReferenceDocumentationUri */
            protoReferenceDocumentationUri?: (string|null);
        }

        /** Represents a Publishing. */
        class Publishing implements IPublishing {

            /**
             * Constructs a new Publishing.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IPublishing);

            /** Publishing methodSettings. */
            public methodSettings: google.api.IMethodSettings[];

            /** Publishing newIssueUri. */
            public newIssueUri: string;

            /** Publishing documentationUri. */
            public documentationUri: string;

            /** Publishing apiShortName. */
            public apiShortName: string;

            /** Publishing githubLabel. */
            public githubLabel: string;

            /** Publishing codeownerGithubTeams. */
            public codeownerGithubTeams: string[];

            /** Publishing docTagPrefix. */
            public docTagPrefix: string;

            /** Publishing organization. */
            public organization: (google.api.ClientLibraryOrganization|keyof typeof google.api.ClientLibraryOrganization);

            /** Publishing librarySettings. */
            public librarySettings: google.api.IClientLibrarySettings[];

            /** Publishing protoReferenceDocumentationUri. */
            public protoReferenceDocumentationUri: string;

            /**
             * Creates a new Publishing instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Publishing instance
             */
            public static create(properties?: google.api.IPublishing): google.api.Publishing;

            /**
             * Encodes the specified Publishing message. Does not implicitly {@link google.api.Publishing.verify|verify} messages.
             * @param message Publishing message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IPublishing, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Publishing message, length delimited. Does not implicitly {@link google.api.Publishing.verify|verify} messages.
             * @param message Publishing message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IPublishing, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Publishing message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Publishing
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.Publishing;

            /**
             * Decodes a Publishing message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Publishing
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.Publishing;

            /**
             * Verifies a Publishing message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Publishing message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Publishing
             */
            public static fromObject(object: { [k: string]: any }): google.api.Publishing;

            /**
             * Creates a plain object from a Publishing message. Also converts values to other types if specified.
             * @param message Publishing
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.Publishing, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Publishing to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Publishing
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a JavaSettings. */
        interface IJavaSettings {

            /** JavaSettings libraryPackage */
            libraryPackage?: (string|null);

            /** JavaSettings serviceClassNames */
            serviceClassNames?: ({ [k: string]: string }|null);

            /** JavaSettings common */
            common?: (google.api.ICommonLanguageSettings|null);
        }

        /** Represents a JavaSettings. */
        class JavaSettings implements IJavaSettings {

            /**
             * Constructs a new JavaSettings.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IJavaSettings);

            /** JavaSettings libraryPackage. */
            public libraryPackage: string;

            /** JavaSettings serviceClassNames. */
            public serviceClassNames: { [k: string]: string };

            /** JavaSettings common. */
            public common?: (google.api.ICommonLanguageSettings|null);

            /**
             * Creates a new JavaSettings instance using the specified properties.
             * @param [properties] Properties to set
             * @returns JavaSettings instance
             */
            public static create(properties?: google.api.IJavaSettings): google.api.JavaSettings;

            /**
             * Encodes the specified JavaSettings message. Does not implicitly {@link google.api.JavaSettings.verify|verify} messages.
             * @param message JavaSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IJavaSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified JavaSettings message, length delimited. Does not implicitly {@link google.api.JavaSettings.verify|verify} messages.
             * @param message JavaSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IJavaSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a JavaSettings message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns JavaSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.JavaSettings;

            /**
             * Decodes a JavaSettings message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns JavaSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.JavaSettings;

            /**
             * Verifies a JavaSettings message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a JavaSettings message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns JavaSettings
             */
            public static fromObject(object: { [k: string]: any }): google.api.JavaSettings;

            /**
             * Creates a plain object from a JavaSettings message. Also converts values to other types if specified.
             * @param message JavaSettings
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.JavaSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this JavaSettings to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for JavaSettings
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a CppSettings. */
        interface ICppSettings {

            /** CppSettings common */
            common?: (google.api.ICommonLanguageSettings|null);
        }

        /** Represents a CppSettings. */
        class CppSettings implements ICppSettings {

            /**
             * Constructs a new CppSettings.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.ICppSettings);

            /** CppSettings common. */
            public common?: (google.api.ICommonLanguageSettings|null);

            /**
             * Creates a new CppSettings instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CppSettings instance
             */
            public static create(properties?: google.api.ICppSettings): google.api.CppSettings;

            /**
             * Encodes the specified CppSettings message. Does not implicitly {@link google.api.CppSettings.verify|verify} messages.
             * @param message CppSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.ICppSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CppSettings message, length delimited. Does not implicitly {@link google.api.CppSettings.verify|verify} messages.
             * @param message CppSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.ICppSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CppSettings message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CppSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.CppSettings;

            /**
             * Decodes a CppSettings message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CppSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.CppSettings;

            /**
             * Verifies a CppSettings message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CppSettings message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CppSettings
             */
            public static fromObject(object: { [k: string]: any }): google.api.CppSettings;

            /**
             * Creates a plain object from a CppSettings message. Also converts values to other types if specified.
             * @param message CppSettings
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.CppSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CppSettings to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for CppSettings
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a PhpSettings. */
        interface IPhpSettings {

            /** PhpSettings common */
            common?: (google.api.ICommonLanguageSettings|null);
        }

        /** Represents a PhpSettings. */
        class PhpSettings implements IPhpSettings {

            /**
             * Constructs a new PhpSettings.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IPhpSettings);

            /** PhpSettings common. */
            public common?: (google.api.ICommonLanguageSettings|null);

            /**
             * Creates a new PhpSettings instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PhpSettings instance
             */
            public static create(properties?: google.api.IPhpSettings): google.api.PhpSettings;

            /**
             * Encodes the specified PhpSettings message. Does not implicitly {@link google.api.PhpSettings.verify|verify} messages.
             * @param message PhpSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IPhpSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PhpSettings message, length delimited. Does not implicitly {@link google.api.PhpSettings.verify|verify} messages.
             * @param message PhpSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IPhpSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PhpSettings message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PhpSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.PhpSettings;

            /**
             * Decodes a PhpSettings message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PhpSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.PhpSettings;

            /**
             * Verifies a PhpSettings message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PhpSettings message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PhpSettings
             */
            public static fromObject(object: { [k: string]: any }): google.api.PhpSettings;

            /**
             * Creates a plain object from a PhpSettings message. Also converts values to other types if specified.
             * @param message PhpSettings
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.PhpSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PhpSettings to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for PhpSettings
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a PythonSettings. */
        interface IPythonSettings {

            /** PythonSettings common */
            common?: (google.api.ICommonLanguageSettings|null);
        }

        /** Represents a PythonSettings. */
        class PythonSettings implements IPythonSettings {

            /**
             * Constructs a new PythonSettings.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IPythonSettings);

            /** PythonSettings common. */
            public common?: (google.api.ICommonLanguageSettings|null);

            /**
             * Creates a new PythonSettings instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PythonSettings instance
             */
            public static create(properties?: google.api.IPythonSettings): google.api.PythonSettings;

            /**
             * Encodes the specified PythonSettings message. Does not implicitly {@link google.api.PythonSettings.verify|verify} messages.
             * @param message PythonSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IPythonSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PythonSettings message, length delimited. Does not implicitly {@link google.api.PythonSettings.verify|verify} messages.
             * @param message PythonSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IPythonSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PythonSettings message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PythonSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.PythonSettings;

            /**
             * Decodes a PythonSettings message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PythonSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.PythonSettings;

            /**
             * Verifies a PythonSettings message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PythonSettings message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PythonSettings
             */
            public static fromObject(object: { [k: string]: any }): google.api.PythonSettings;

            /**
             * Creates a plain object from a PythonSettings message. Also converts values to other types if specified.
             * @param message PythonSettings
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.PythonSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PythonSettings to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for PythonSettings
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a NodeSettings. */
        interface INodeSettings {

            /** NodeSettings common */
            common?: (google.api.ICommonLanguageSettings|null);
        }

        /** Represents a NodeSettings. */
        class NodeSettings implements INodeSettings {

            /**
             * Constructs a new NodeSettings.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.INodeSettings);

            /** NodeSettings common. */
            public common?: (google.api.ICommonLanguageSettings|null);

            /**
             * Creates a new NodeSettings instance using the specified properties.
             * @param [properties] Properties to set
             * @returns NodeSettings instance
             */
            public static create(properties?: google.api.INodeSettings): google.api.NodeSettings;

            /**
             * Encodes the specified NodeSettings message. Does not implicitly {@link google.api.NodeSettings.verify|verify} messages.
             * @param message NodeSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.INodeSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified NodeSettings message, length delimited. Does not implicitly {@link google.api.NodeSettings.verify|verify} messages.
             * @param message NodeSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.INodeSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a NodeSettings message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns NodeSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.NodeSettings;

            /**
             * Decodes a NodeSettings message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns NodeSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.NodeSettings;

            /**
             * Verifies a NodeSettings message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a NodeSettings message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns NodeSettings
             */
            public static fromObject(object: { [k: string]: any }): google.api.NodeSettings;

            /**
             * Creates a plain object from a NodeSettings message. Also converts values to other types if specified.
             * @param message NodeSettings
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.NodeSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this NodeSettings to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for NodeSettings
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a DotnetSettings. */
        interface IDotnetSettings {

            /** DotnetSettings common */
            common?: (google.api.ICommonLanguageSettings|null);

            /** DotnetSettings renamedServices */
            renamedServices?: ({ [k: string]: string }|null);

            /** DotnetSettings renamedResources */
            renamedResources?: ({ [k: string]: string }|null);

            /** DotnetSettings ignoredResources */
            ignoredResources?: (string[]|null);

            /** DotnetSettings forcedNamespaceAliases */
            forcedNamespaceAliases?: (string[]|null);

            /** DotnetSettings handwrittenSignatures */
            handwrittenSignatures?: (string[]|null);
        }

        /** Represents a DotnetSettings. */
        class DotnetSettings implements IDotnetSettings {

            /**
             * Constructs a new DotnetSettings.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IDotnetSettings);

            /** DotnetSettings common. */
            public common?: (google.api.ICommonLanguageSettings|null);

            /** DotnetSettings renamedServices. */
            public renamedServices: { [k: string]: string };

            /** DotnetSettings renamedResources. */
            public renamedResources: { [k: string]: string };

            /** DotnetSettings ignoredResources. */
            public ignoredResources: string[];

            /** DotnetSettings forcedNamespaceAliases. */
            public forcedNamespaceAliases: string[];

            /** DotnetSettings handwrittenSignatures. */
            public handwrittenSignatures: string[];

            /**
             * Creates a new DotnetSettings instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DotnetSettings instance
             */
            public static create(properties?: google.api.IDotnetSettings): google.api.DotnetSettings;

            /**
             * Encodes the specified DotnetSettings message. Does not implicitly {@link google.api.DotnetSettings.verify|verify} messages.
             * @param message DotnetSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IDotnetSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DotnetSettings message, length delimited. Does not implicitly {@link google.api.DotnetSettings.verify|verify} messages.
             * @param message DotnetSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IDotnetSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DotnetSettings message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DotnetSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.DotnetSettings;

            /**
             * Decodes a DotnetSettings message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DotnetSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.DotnetSettings;

            /**
             * Verifies a DotnetSettings message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DotnetSettings message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DotnetSettings
             */
            public static fromObject(object: { [k: string]: any }): google.api.DotnetSettings;

            /**
             * Creates a plain object from a DotnetSettings message. Also converts values to other types if specified.
             * @param message DotnetSettings
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.DotnetSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DotnetSettings to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for DotnetSettings
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a RubySettings. */
        interface IRubySettings {

            /** RubySettings common */
            common?: (google.api.ICommonLanguageSettings|null);
        }

        /** Represents a RubySettings. */
        class RubySettings implements IRubySettings {

            /**
             * Constructs a new RubySettings.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IRubySettings);

            /** RubySettings common. */
            public common?: (google.api.ICommonLanguageSettings|null);

            /**
             * Creates a new RubySettings instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RubySettings instance
             */
            public static create(properties?: google.api.IRubySettings): google.api.RubySettings;

            /**
             * Encodes the specified RubySettings message. Does not implicitly {@link google.api.RubySettings.verify|verify} messages.
             * @param message RubySettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IRubySettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RubySettings message, length delimited. Does not implicitly {@link google.api.RubySettings.verify|verify} messages.
             * @param message RubySettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IRubySettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RubySettings message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RubySettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.RubySettings;

            /**
             * Decodes a RubySettings message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RubySettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.RubySettings;

            /**
             * Verifies a RubySettings message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RubySettings message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RubySettings
             */
            public static fromObject(object: { [k: string]: any }): google.api.RubySettings;

            /**
             * Creates a plain object from a RubySettings message. Also converts values to other types if specified.
             * @param message RubySettings
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.RubySettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RubySettings to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for RubySettings
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a GoSettings. */
        interface IGoSettings {

            /** GoSettings common */
            common?: (google.api.ICommonLanguageSettings|null);
        }

        /** Represents a GoSettings. */
        class GoSettings implements IGoSettings {

            /**
             * Constructs a new GoSettings.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IGoSettings);

            /** GoSettings common. */
            public common?: (google.api.ICommonLanguageSettings|null);

            /**
             * Creates a new GoSettings instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GoSettings instance
             */
            public static create(properties?: google.api.IGoSettings): google.api.GoSettings;

            /**
             * Encodes the specified GoSettings message. Does not implicitly {@link google.api.GoSettings.verify|verify} messages.
             * @param message GoSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IGoSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GoSettings message, length delimited. Does not implicitly {@link google.api.GoSettings.verify|verify} messages.
             * @param message GoSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IGoSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GoSettings message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GoSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.GoSettings;

            /**
             * Decodes a GoSettings message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GoSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.GoSettings;

            /**
             * Verifies a GoSettings message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GoSettings message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GoSettings
             */
            public static fromObject(object: { [k: string]: any }): google.api.GoSettings;

            /**
             * Creates a plain object from a GoSettings message. Also converts values to other types if specified.
             * @param message GoSettings
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.GoSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GoSettings to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for GoSettings
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a MethodSettings. */
        interface IMethodSettings {

            /** MethodSettings selector */
            selector?: (string|null);

            /** MethodSettings longRunning */
            longRunning?: (google.api.MethodSettings.ILongRunning|null);

            /** MethodSettings autoPopulatedFields */
            autoPopulatedFields?: (string[]|null);
        }

        /** Represents a MethodSettings. */
        class MethodSettings implements IMethodSettings {

            /**
             * Constructs a new MethodSettings.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IMethodSettings);

            /** MethodSettings selector. */
            public selector: string;

            /** MethodSettings longRunning. */
            public longRunning?: (google.api.MethodSettings.ILongRunning|null);

            /** MethodSettings autoPopulatedFields. */
            public autoPopulatedFields: string[];

            /**
             * Creates a new MethodSettings instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MethodSettings instance
             */
            public static create(properties?: google.api.IMethodSettings): google.api.MethodSettings;

            /**
             * Encodes the specified MethodSettings message. Does not implicitly {@link google.api.MethodSettings.verify|verify} messages.
             * @param message MethodSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IMethodSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MethodSettings message, length delimited. Does not implicitly {@link google.api.MethodSettings.verify|verify} messages.
             * @param message MethodSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IMethodSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MethodSettings message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MethodSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.MethodSettings;

            /**
             * Decodes a MethodSettings message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MethodSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.MethodSettings;

            /**
             * Verifies a MethodSettings message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MethodSettings message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MethodSettings
             */
            public static fromObject(object: { [k: string]: any }): google.api.MethodSettings;

            /**
             * Creates a plain object from a MethodSettings message. Also converts values to other types if specified.
             * @param message MethodSettings
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.MethodSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MethodSettings to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for MethodSettings
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace MethodSettings {

            /** Properties of a LongRunning. */
            interface ILongRunning {

                /** LongRunning initialPollDelay */
                initialPollDelay?: (google.protobuf.IDuration|null);

                /** LongRunning pollDelayMultiplier */
                pollDelayMultiplier?: (number|null);

                /** LongRunning maxPollDelay */
                maxPollDelay?: (google.protobuf.IDuration|null);

                /** LongRunning totalPollTimeout */
                totalPollTimeout?: (google.protobuf.IDuration|null);
            }

            /** Represents a LongRunning. */
            class LongRunning implements ILongRunning {

                /**
                 * Constructs a new LongRunning.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.api.MethodSettings.ILongRunning);

                /** LongRunning initialPollDelay. */
                public initialPollDelay?: (google.protobuf.IDuration|null);

                /** LongRunning pollDelayMultiplier. */
                public pollDelayMultiplier: number;

                /** LongRunning maxPollDelay. */
                public maxPollDelay?: (google.protobuf.IDuration|null);

                /** LongRunning totalPollTimeout. */
                public totalPollTimeout?: (google.protobuf.IDuration|null);

                /**
                 * Creates a new LongRunning instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns LongRunning instance
                 */
                public static create(properties?: google.api.MethodSettings.ILongRunning): google.api.MethodSettings.LongRunning;

                /**
                 * Encodes the specified LongRunning message. Does not implicitly {@link google.api.MethodSettings.LongRunning.verify|verify} messages.
                 * @param message LongRunning message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.api.MethodSettings.ILongRunning, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified LongRunning message, length delimited. Does not implicitly {@link google.api.MethodSettings.LongRunning.verify|verify} messages.
                 * @param message LongRunning message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.api.MethodSettings.ILongRunning, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a LongRunning message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns LongRunning
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.MethodSettings.LongRunning;

                /**
                 * Decodes a LongRunning message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns LongRunning
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.MethodSettings.LongRunning;

                /**
                 * Verifies a LongRunning message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a LongRunning message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns LongRunning
                 */
                public static fromObject(object: { [k: string]: any }): google.api.MethodSettings.LongRunning;

                /**
                 * Creates a plain object from a LongRunning message. Also converts values to other types if specified.
                 * @param message LongRunning
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.api.MethodSettings.LongRunning, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this LongRunning to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for LongRunning
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** ClientLibraryOrganization enum. */
        enum ClientLibraryOrganization {
            CLIENT_LIBRARY_ORGANIZATION_UNSPECIFIED = 0,
            CLOUD = 1,
            ADS = 2,
            PHOTOS = 3,
            STREET_VIEW = 4,
            SHOPPING = 5,
            GEO = 6,
            GENERATIVE_AI = 7
        }

        /** ClientLibraryDestination enum. */
        enum ClientLibraryDestination {
            CLIENT_LIBRARY_DESTINATION_UNSPECIFIED = 0,
            GITHUB = 10,
            PACKAGE_MANAGER = 20
        }

        /** LaunchStage enum. */
        enum LaunchStage {
            LAUNCH_STAGE_UNSPECIFIED = 0,
            UNIMPLEMENTED = 6,
            PRELAUNCH = 7,
            EARLY_ACCESS = 1,
            ALPHA = 2,
            BETA = 3,
            GA = 4,
            DEPRECATED = 5
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
            NON_EMPTY_DEFAULT = 7,
            IDENTIFIER = 8
        }

        /** Properties of a FieldInfo. */
        interface IFieldInfo {

            /** FieldInfo format */
            format?: (google.api.FieldInfo.Format|keyof typeof google.api.FieldInfo.Format|null);
        }

        /** Represents a FieldInfo. */
        class FieldInfo implements IFieldInfo {

            /**
             * Constructs a new FieldInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IFieldInfo);

            /** FieldInfo format. */
            public format: (google.api.FieldInfo.Format|keyof typeof google.api.FieldInfo.Format);

            /**
             * Creates a new FieldInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FieldInfo instance
             */
            public static create(properties?: google.api.IFieldInfo): google.api.FieldInfo;

            /**
             * Encodes the specified FieldInfo message. Does not implicitly {@link google.api.FieldInfo.verify|verify} messages.
             * @param message FieldInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IFieldInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FieldInfo message, length delimited. Does not implicitly {@link google.api.FieldInfo.verify|verify} messages.
             * @param message FieldInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IFieldInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FieldInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FieldInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.FieldInfo;

            /**
             * Decodes a FieldInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FieldInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.FieldInfo;

            /**
             * Verifies a FieldInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FieldInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FieldInfo
             */
            public static fromObject(object: { [k: string]: any }): google.api.FieldInfo;

            /**
             * Creates a plain object from a FieldInfo message. Also converts values to other types if specified.
             * @param message FieldInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.FieldInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FieldInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FieldInfo
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace FieldInfo {

            /** Format enum. */
            enum Format {
                FORMAT_UNSPECIFIED = 0,
                UUID4 = 1,
                IPV4 = 2,
                IPV6 = 3,
                IPV4_OR_IPV6 = 4
            }
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

            /**
             * Gets the default type url for ResourceDescriptor
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
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

            /**
             * Gets the default type url for ResourceReference
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
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

            /**
             * Gets the default type url for FileDescriptorSet
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Edition enum. */
        enum Edition {
            EDITION_UNKNOWN = 0,
            EDITION_PROTO2 = 998,
            EDITION_PROTO3 = 999,
            EDITION_2023 = 1000,
            EDITION_2024 = 1001,
            EDITION_1_TEST_ONLY = 1,
            EDITION_2_TEST_ONLY = 2,
            EDITION_99997_TEST_ONLY = 99997,
            EDITION_99998_TEST_ONLY = 99998,
            EDITION_99999_TEST_ONLY = 99999,
            EDITION_MAX = 2147483647
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

            /** FileDescriptorProto edition */
            edition?: (google.protobuf.Edition|keyof typeof google.protobuf.Edition|null);
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

            /** FileDescriptorProto edition. */
            public edition: (google.protobuf.Edition|keyof typeof google.protobuf.Edition);

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

            /**
             * Gets the default type url for FileDescriptorProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
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

            /**
             * Gets the default type url for DescriptorProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
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

                /**
                 * Gets the default type url for ExtensionRange
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
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

                /**
                 * Gets the default type url for ReservedRange
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of an ExtensionRangeOptions. */
        interface IExtensionRangeOptions {

            /** ExtensionRangeOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** ExtensionRangeOptions declaration */
            declaration?: (google.protobuf.ExtensionRangeOptions.IDeclaration[]|null);

            /** ExtensionRangeOptions features */
            features?: (google.protobuf.IFeatureSet|null);

            /** ExtensionRangeOptions verification */
            verification?: (google.protobuf.ExtensionRangeOptions.VerificationState|keyof typeof google.protobuf.ExtensionRangeOptions.VerificationState|null);
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

            /** ExtensionRangeOptions declaration. */
            public declaration: google.protobuf.ExtensionRangeOptions.IDeclaration[];

            /** ExtensionRangeOptions features. */
            public features?: (google.protobuf.IFeatureSet|null);

            /** ExtensionRangeOptions verification. */
            public verification: (google.protobuf.ExtensionRangeOptions.VerificationState|keyof typeof google.protobuf.ExtensionRangeOptions.VerificationState);

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

            /**
             * Gets the default type url for ExtensionRangeOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace ExtensionRangeOptions {

            /** Properties of a Declaration. */
            interface IDeclaration {

                /** Declaration number */
                number?: (number|null);

                /** Declaration fullName */
                fullName?: (string|null);

                /** Declaration type */
                type?: (string|null);

                /** Declaration reserved */
                reserved?: (boolean|null);

                /** Declaration repeated */
                repeated?: (boolean|null);
            }

            /** Represents a Declaration. */
            class Declaration implements IDeclaration {

                /**
                 * Constructs a new Declaration.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.ExtensionRangeOptions.IDeclaration);

                /** Declaration number. */
                public number: number;

                /** Declaration fullName. */
                public fullName: string;

                /** Declaration type. */
                public type: string;

                /** Declaration reserved. */
                public reserved: boolean;

                /** Declaration repeated. */
                public repeated: boolean;

                /**
                 * Creates a new Declaration instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Declaration instance
                 */
                public static create(properties?: google.protobuf.ExtensionRangeOptions.IDeclaration): google.protobuf.ExtensionRangeOptions.Declaration;

                /**
                 * Encodes the specified Declaration message. Does not implicitly {@link google.protobuf.ExtensionRangeOptions.Declaration.verify|verify} messages.
                 * @param message Declaration message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.ExtensionRangeOptions.IDeclaration, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Declaration message, length delimited. Does not implicitly {@link google.protobuf.ExtensionRangeOptions.Declaration.verify|verify} messages.
                 * @param message Declaration message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.ExtensionRangeOptions.IDeclaration, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Declaration message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Declaration
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ExtensionRangeOptions.Declaration;

                /**
                 * Decodes a Declaration message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Declaration
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ExtensionRangeOptions.Declaration;

                /**
                 * Verifies a Declaration message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Declaration message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Declaration
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.ExtensionRangeOptions.Declaration;

                /**
                 * Creates a plain object from a Declaration message. Also converts values to other types if specified.
                 * @param message Declaration
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.ExtensionRangeOptions.Declaration, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Declaration to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Declaration
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** VerificationState enum. */
            enum VerificationState {
                DECLARATION = 0,
                UNVERIFIED = 1
            }
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

            /**
             * Gets the default type url for FieldDescriptorProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
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
                LABEL_REPEATED = 3,
                LABEL_REQUIRED = 2
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

            /**
             * Gets the default type url for OneofDescriptorProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
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

            /**
             * Gets the default type url for EnumDescriptorProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
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

                /**
                 * Gets the default type url for EnumReservedRange
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
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

            /**
             * Gets the default type url for EnumValueDescriptorProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
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

            /**
             * Gets the default type url for ServiceDescriptorProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
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

            /**
             * Gets the default type url for MethodDescriptorProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
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

            /** FileOptions features */
            features?: (google.protobuf.IFeatureSet|null);

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

            /** FileOptions features. */
            public features?: (google.protobuf.IFeatureSet|null);

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

            /**
             * Gets the default type url for FileOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
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

            /** MessageOptions deprecatedLegacyJsonFieldConflicts */
            deprecatedLegacyJsonFieldConflicts?: (boolean|null);

            /** MessageOptions features */
            features?: (google.protobuf.IFeatureSet|null);

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

            /** MessageOptions deprecatedLegacyJsonFieldConflicts. */
            public deprecatedLegacyJsonFieldConflicts: boolean;

            /** MessageOptions features. */
            public features?: (google.protobuf.IFeatureSet|null);

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

            /**
             * Gets the default type url for MessageOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
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

            /** FieldOptions unverifiedLazy */
            unverifiedLazy?: (boolean|null);

            /** FieldOptions deprecated */
            deprecated?: (boolean|null);

            /** FieldOptions weak */
            weak?: (boolean|null);

            /** FieldOptions debugRedact */
            debugRedact?: (boolean|null);

            /** FieldOptions retention */
            retention?: (google.protobuf.FieldOptions.OptionRetention|keyof typeof google.protobuf.FieldOptions.OptionRetention|null);

            /** FieldOptions targets */
            targets?: (google.protobuf.FieldOptions.OptionTargetType[]|null);

            /** FieldOptions editionDefaults */
            editionDefaults?: (google.protobuf.FieldOptions.IEditionDefault[]|null);

            /** FieldOptions features */
            features?: (google.protobuf.IFeatureSet|null);

            /** FieldOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** FieldOptions .google.api.fieldBehavior */
            ".google.api.fieldBehavior"?: (google.api.FieldBehavior[]|null);

            /** FieldOptions .google.api.fieldInfo */
            ".google.api.fieldInfo"?: (google.api.IFieldInfo|null);

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

            /** FieldOptions unverifiedLazy. */
            public unverifiedLazy: boolean;

            /** FieldOptions deprecated. */
            public deprecated: boolean;

            /** FieldOptions weak. */
            public weak: boolean;

            /** FieldOptions debugRedact. */
            public debugRedact: boolean;

            /** FieldOptions retention. */
            public retention: (google.protobuf.FieldOptions.OptionRetention|keyof typeof google.protobuf.FieldOptions.OptionRetention);

            /** FieldOptions targets. */
            public targets: google.protobuf.FieldOptions.OptionTargetType[];

            /** FieldOptions editionDefaults. */
            public editionDefaults: google.protobuf.FieldOptions.IEditionDefault[];

            /** FieldOptions features. */
            public features?: (google.protobuf.IFeatureSet|null);

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

            /**
             * Gets the default type url for FieldOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
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

            /** OptionRetention enum. */
            enum OptionRetention {
                RETENTION_UNKNOWN = 0,
                RETENTION_RUNTIME = 1,
                RETENTION_SOURCE = 2
            }

            /** OptionTargetType enum. */
            enum OptionTargetType {
                TARGET_TYPE_UNKNOWN = 0,
                TARGET_TYPE_FILE = 1,
                TARGET_TYPE_EXTENSION_RANGE = 2,
                TARGET_TYPE_MESSAGE = 3,
                TARGET_TYPE_FIELD = 4,
                TARGET_TYPE_ONEOF = 5,
                TARGET_TYPE_ENUM = 6,
                TARGET_TYPE_ENUM_ENTRY = 7,
                TARGET_TYPE_SERVICE = 8,
                TARGET_TYPE_METHOD = 9
            }

            /** Properties of an EditionDefault. */
            interface IEditionDefault {

                /** EditionDefault edition */
                edition?: (google.protobuf.Edition|keyof typeof google.protobuf.Edition|null);

                /** EditionDefault value */
                value?: (string|null);
            }

            /** Represents an EditionDefault. */
            class EditionDefault implements IEditionDefault {

                /**
                 * Constructs a new EditionDefault.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.FieldOptions.IEditionDefault);

                /** EditionDefault edition. */
                public edition: (google.protobuf.Edition|keyof typeof google.protobuf.Edition);

                /** EditionDefault value. */
                public value: string;

                /**
                 * Creates a new EditionDefault instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns EditionDefault instance
                 */
                public static create(properties?: google.protobuf.FieldOptions.IEditionDefault): google.protobuf.FieldOptions.EditionDefault;

                /**
                 * Encodes the specified EditionDefault message. Does not implicitly {@link google.protobuf.FieldOptions.EditionDefault.verify|verify} messages.
                 * @param message EditionDefault message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.FieldOptions.IEditionDefault, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified EditionDefault message, length delimited. Does not implicitly {@link google.protobuf.FieldOptions.EditionDefault.verify|verify} messages.
                 * @param message EditionDefault message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.FieldOptions.IEditionDefault, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an EditionDefault message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns EditionDefault
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldOptions.EditionDefault;

                /**
                 * Decodes an EditionDefault message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns EditionDefault
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FieldOptions.EditionDefault;

                /**
                 * Verifies an EditionDefault message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an EditionDefault message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns EditionDefault
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.FieldOptions.EditionDefault;

                /**
                 * Creates a plain object from an EditionDefault message. Also converts values to other types if specified.
                 * @param message EditionDefault
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.FieldOptions.EditionDefault, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this EditionDefault to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for EditionDefault
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of an OneofOptions. */
        interface IOneofOptions {

            /** OneofOptions features */
            features?: (google.protobuf.IFeatureSet|null);

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

            /** OneofOptions features. */
            public features?: (google.protobuf.IFeatureSet|null);

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

            /**
             * Gets the default type url for OneofOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an EnumOptions. */
        interface IEnumOptions {

            /** EnumOptions allowAlias */
            allowAlias?: (boolean|null);

            /** EnumOptions deprecated */
            deprecated?: (boolean|null);

            /** EnumOptions deprecatedLegacyJsonFieldConflicts */
            deprecatedLegacyJsonFieldConflicts?: (boolean|null);

            /** EnumOptions features */
            features?: (google.protobuf.IFeatureSet|null);

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

            /** EnumOptions deprecatedLegacyJsonFieldConflicts. */
            public deprecatedLegacyJsonFieldConflicts: boolean;

            /** EnumOptions features. */
            public features?: (google.protobuf.IFeatureSet|null);

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

            /**
             * Gets the default type url for EnumOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an EnumValueOptions. */
        interface IEnumValueOptions {

            /** EnumValueOptions deprecated */
            deprecated?: (boolean|null);

            /** EnumValueOptions features */
            features?: (google.protobuf.IFeatureSet|null);

            /** EnumValueOptions debugRedact */
            debugRedact?: (boolean|null);

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

            /** EnumValueOptions features. */
            public features?: (google.protobuf.IFeatureSet|null);

            /** EnumValueOptions debugRedact. */
            public debugRedact: boolean;

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

            /**
             * Gets the default type url for EnumValueOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a ServiceOptions. */
        interface IServiceOptions {

            /** ServiceOptions features */
            features?: (google.protobuf.IFeatureSet|null);

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

            /** ServiceOptions features. */
            public features?: (google.protobuf.IFeatureSet|null);

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

            /**
             * Gets the default type url for ServiceOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a MethodOptions. */
        interface IMethodOptions {

            /** MethodOptions deprecated */
            deprecated?: (boolean|null);

            /** MethodOptions idempotencyLevel */
            idempotencyLevel?: (google.protobuf.MethodOptions.IdempotencyLevel|keyof typeof google.protobuf.MethodOptions.IdempotencyLevel|null);

            /** MethodOptions features */
            features?: (google.protobuf.IFeatureSet|null);

            /** MethodOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** MethodOptions .google.api.http */
            ".google.api.http"?: (google.api.IHttpRule|null);

            /** MethodOptions .google.api.methodSignature */
            ".google.api.methodSignature"?: (string[]|null);
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

            /** MethodOptions features. */
            public features?: (google.protobuf.IFeatureSet|null);

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

            /**
             * Gets the default type url for MethodOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
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

            /**
             * Gets the default type url for UninterpretedOption
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
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

                /**
                 * Gets the default type url for NamePart
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of a FeatureSet. */
        interface IFeatureSet {

            /** FeatureSet fieldPresence */
            fieldPresence?: (google.protobuf.FeatureSet.FieldPresence|keyof typeof google.protobuf.FeatureSet.FieldPresence|null);

            /** FeatureSet enumType */
            enumType?: (google.protobuf.FeatureSet.EnumType|keyof typeof google.protobuf.FeatureSet.EnumType|null);

            /** FeatureSet repeatedFieldEncoding */
            repeatedFieldEncoding?: (google.protobuf.FeatureSet.RepeatedFieldEncoding|keyof typeof google.protobuf.FeatureSet.RepeatedFieldEncoding|null);

            /** FeatureSet utf8Validation */
            utf8Validation?: (google.protobuf.FeatureSet.Utf8Validation|keyof typeof google.protobuf.FeatureSet.Utf8Validation|null);

            /** FeatureSet messageEncoding */
            messageEncoding?: (google.protobuf.FeatureSet.MessageEncoding|keyof typeof google.protobuf.FeatureSet.MessageEncoding|null);

            /** FeatureSet jsonFormat */
            jsonFormat?: (google.protobuf.FeatureSet.JsonFormat|keyof typeof google.protobuf.FeatureSet.JsonFormat|null);
        }

        /** Represents a FeatureSet. */
        class FeatureSet implements IFeatureSet {

            /**
             * Constructs a new FeatureSet.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFeatureSet);

            /** FeatureSet fieldPresence. */
            public fieldPresence: (google.protobuf.FeatureSet.FieldPresence|keyof typeof google.protobuf.FeatureSet.FieldPresence);

            /** FeatureSet enumType. */
            public enumType: (google.protobuf.FeatureSet.EnumType|keyof typeof google.protobuf.FeatureSet.EnumType);

            /** FeatureSet repeatedFieldEncoding. */
            public repeatedFieldEncoding: (google.protobuf.FeatureSet.RepeatedFieldEncoding|keyof typeof google.protobuf.FeatureSet.RepeatedFieldEncoding);

            /** FeatureSet utf8Validation. */
            public utf8Validation: (google.protobuf.FeatureSet.Utf8Validation|keyof typeof google.protobuf.FeatureSet.Utf8Validation);

            /** FeatureSet messageEncoding. */
            public messageEncoding: (google.protobuf.FeatureSet.MessageEncoding|keyof typeof google.protobuf.FeatureSet.MessageEncoding);

            /** FeatureSet jsonFormat. */
            public jsonFormat: (google.protobuf.FeatureSet.JsonFormat|keyof typeof google.protobuf.FeatureSet.JsonFormat);

            /**
             * Creates a new FeatureSet instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FeatureSet instance
             */
            public static create(properties?: google.protobuf.IFeatureSet): google.protobuf.FeatureSet;

            /**
             * Encodes the specified FeatureSet message. Does not implicitly {@link google.protobuf.FeatureSet.verify|verify} messages.
             * @param message FeatureSet message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFeatureSet, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FeatureSet message, length delimited. Does not implicitly {@link google.protobuf.FeatureSet.verify|verify} messages.
             * @param message FeatureSet message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFeatureSet, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FeatureSet message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FeatureSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FeatureSet;

            /**
             * Decodes a FeatureSet message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FeatureSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FeatureSet;

            /**
             * Verifies a FeatureSet message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FeatureSet message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FeatureSet
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FeatureSet;

            /**
             * Creates a plain object from a FeatureSet message. Also converts values to other types if specified.
             * @param message FeatureSet
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FeatureSet, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FeatureSet to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FeatureSet
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace FeatureSet {

            /** FieldPresence enum. */
            enum FieldPresence {
                FIELD_PRESENCE_UNKNOWN = 0,
                EXPLICIT = 1,
                IMPLICIT = 2,
                LEGACY_REQUIRED = 3
            }

            /** EnumType enum. */
            enum EnumType {
                ENUM_TYPE_UNKNOWN = 0,
                OPEN = 1,
                CLOSED = 2
            }

            /** RepeatedFieldEncoding enum. */
            enum RepeatedFieldEncoding {
                REPEATED_FIELD_ENCODING_UNKNOWN = 0,
                PACKED = 1,
                EXPANDED = 2
            }

            /** Utf8Validation enum. */
            enum Utf8Validation {
                UTF8_VALIDATION_UNKNOWN = 0,
                VERIFY = 2,
                NONE = 3
            }

            /** MessageEncoding enum. */
            enum MessageEncoding {
                MESSAGE_ENCODING_UNKNOWN = 0,
                LENGTH_PREFIXED = 1,
                DELIMITED = 2
            }

            /** JsonFormat enum. */
            enum JsonFormat {
                JSON_FORMAT_UNKNOWN = 0,
                ALLOW = 1,
                LEGACY_BEST_EFFORT = 2
            }
        }

        /** Properties of a FeatureSetDefaults. */
        interface IFeatureSetDefaults {

            /** FeatureSetDefaults defaults */
            defaults?: (google.protobuf.FeatureSetDefaults.IFeatureSetEditionDefault[]|null);

            /** FeatureSetDefaults minimumEdition */
            minimumEdition?: (google.protobuf.Edition|keyof typeof google.protobuf.Edition|null);

            /** FeatureSetDefaults maximumEdition */
            maximumEdition?: (google.protobuf.Edition|keyof typeof google.protobuf.Edition|null);
        }

        /** Represents a FeatureSetDefaults. */
        class FeatureSetDefaults implements IFeatureSetDefaults {

            /**
             * Constructs a new FeatureSetDefaults.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFeatureSetDefaults);

            /** FeatureSetDefaults defaults. */
            public defaults: google.protobuf.FeatureSetDefaults.IFeatureSetEditionDefault[];

            /** FeatureSetDefaults minimumEdition. */
            public minimumEdition: (google.protobuf.Edition|keyof typeof google.protobuf.Edition);

            /** FeatureSetDefaults maximumEdition. */
            public maximumEdition: (google.protobuf.Edition|keyof typeof google.protobuf.Edition);

            /**
             * Creates a new FeatureSetDefaults instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FeatureSetDefaults instance
             */
            public static create(properties?: google.protobuf.IFeatureSetDefaults): google.protobuf.FeatureSetDefaults;

            /**
             * Encodes the specified FeatureSetDefaults message. Does not implicitly {@link google.protobuf.FeatureSetDefaults.verify|verify} messages.
             * @param message FeatureSetDefaults message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFeatureSetDefaults, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FeatureSetDefaults message, length delimited. Does not implicitly {@link google.protobuf.FeatureSetDefaults.verify|verify} messages.
             * @param message FeatureSetDefaults message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFeatureSetDefaults, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FeatureSetDefaults message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FeatureSetDefaults
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FeatureSetDefaults;

            /**
             * Decodes a FeatureSetDefaults message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FeatureSetDefaults
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FeatureSetDefaults;

            /**
             * Verifies a FeatureSetDefaults message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FeatureSetDefaults message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FeatureSetDefaults
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FeatureSetDefaults;

            /**
             * Creates a plain object from a FeatureSetDefaults message. Also converts values to other types if specified.
             * @param message FeatureSetDefaults
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FeatureSetDefaults, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FeatureSetDefaults to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FeatureSetDefaults
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace FeatureSetDefaults {

            /** Properties of a FeatureSetEditionDefault. */
            interface IFeatureSetEditionDefault {

                /** FeatureSetEditionDefault edition */
                edition?: (google.protobuf.Edition|keyof typeof google.protobuf.Edition|null);

                /** FeatureSetEditionDefault features */
                features?: (google.protobuf.IFeatureSet|null);
            }

            /** Represents a FeatureSetEditionDefault. */
            class FeatureSetEditionDefault implements IFeatureSetEditionDefault {

                /**
                 * Constructs a new FeatureSetEditionDefault.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.FeatureSetDefaults.IFeatureSetEditionDefault);

                /** FeatureSetEditionDefault edition. */
                public edition: (google.protobuf.Edition|keyof typeof google.protobuf.Edition);

                /** FeatureSetEditionDefault features. */
                public features?: (google.protobuf.IFeatureSet|null);

                /**
                 * Creates a new FeatureSetEditionDefault instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns FeatureSetEditionDefault instance
                 */
                public static create(properties?: google.protobuf.FeatureSetDefaults.IFeatureSetEditionDefault): google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault;

                /**
                 * Encodes the specified FeatureSetEditionDefault message. Does not implicitly {@link google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault.verify|verify} messages.
                 * @param message FeatureSetEditionDefault message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.FeatureSetDefaults.IFeatureSetEditionDefault, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified FeatureSetEditionDefault message, length delimited. Does not implicitly {@link google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault.verify|verify} messages.
                 * @param message FeatureSetEditionDefault message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.FeatureSetDefaults.IFeatureSetEditionDefault, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a FeatureSetEditionDefault message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns FeatureSetEditionDefault
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault;

                /**
                 * Decodes a FeatureSetEditionDefault message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns FeatureSetEditionDefault
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault;

                /**
                 * Verifies a FeatureSetEditionDefault message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a FeatureSetEditionDefault message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns FeatureSetEditionDefault
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault;

                /**
                 * Creates a plain object from a FeatureSetEditionDefault message. Also converts values to other types if specified.
                 * @param message FeatureSetEditionDefault
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this FeatureSetEditionDefault to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for FeatureSetEditionDefault
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
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

            /**
             * Gets the default type url for SourceCodeInfo
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
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

                /**
                 * Gets the default type url for Location
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
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

            /**
             * Gets the default type url for GeneratedCodeInfo
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
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

                /** Annotation semantic */
                semantic?: (google.protobuf.GeneratedCodeInfo.Annotation.Semantic|keyof typeof google.protobuf.GeneratedCodeInfo.Annotation.Semantic|null);
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

                /** Annotation semantic. */
                public semantic: (google.protobuf.GeneratedCodeInfo.Annotation.Semantic|keyof typeof google.protobuf.GeneratedCodeInfo.Annotation.Semantic);

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

                /**
                 * Gets the default type url for Annotation
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace Annotation {

                /** Semantic enum. */
                enum Semantic {
                    NONE = 0,
                    SET = 1,
                    ALIAS = 2
                }
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

            /**
             * Gets the default type url for Duration
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
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

            /**
             * Gets the default type url for Empty
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
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

            /**
             * Gets the default type url for FieldMask
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
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

            /**
             * Gets the default type url for Timestamp
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
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

            /**
             * Gets the default type url for Any
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
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

            /**
             * Gets the default type url for Status
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }
}
