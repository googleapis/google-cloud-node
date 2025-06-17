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

        /** Namespace securitycentermanagement. */
        namespace securitycentermanagement {

            /** Namespace v1. */
            namespace v1 {

                /** Represents a SecurityCenterManagement */
                class SecurityCenterManagement extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new SecurityCenterManagement service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new SecurityCenterManagement service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): SecurityCenterManagement;

                    /**
                     * Calls ListEffectiveSecurityHealthAnalyticsCustomModules.
                     * @param request ListEffectiveSecurityHealthAnalyticsCustomModulesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListEffectiveSecurityHealthAnalyticsCustomModulesResponse
                     */
                    public listEffectiveSecurityHealthAnalyticsCustomModules(request: google.cloud.securitycentermanagement.v1.IListEffectiveSecurityHealthAnalyticsCustomModulesRequest, callback: google.cloud.securitycentermanagement.v1.SecurityCenterManagement.ListEffectiveSecurityHealthAnalyticsCustomModulesCallback): void;

                    /**
                     * Calls ListEffectiveSecurityHealthAnalyticsCustomModules.
                     * @param request ListEffectiveSecurityHealthAnalyticsCustomModulesRequest message or plain object
                     * @returns Promise
                     */
                    public listEffectiveSecurityHealthAnalyticsCustomModules(request: google.cloud.securitycentermanagement.v1.IListEffectiveSecurityHealthAnalyticsCustomModulesRequest): Promise<google.cloud.securitycentermanagement.v1.ListEffectiveSecurityHealthAnalyticsCustomModulesResponse>;

                    /**
                     * Calls GetEffectiveSecurityHealthAnalyticsCustomModule.
                     * @param request GetEffectiveSecurityHealthAnalyticsCustomModuleRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and EffectiveSecurityHealthAnalyticsCustomModule
                     */
                    public getEffectiveSecurityHealthAnalyticsCustomModule(request: google.cloud.securitycentermanagement.v1.IGetEffectiveSecurityHealthAnalyticsCustomModuleRequest, callback: google.cloud.securitycentermanagement.v1.SecurityCenterManagement.GetEffectiveSecurityHealthAnalyticsCustomModuleCallback): void;

                    /**
                     * Calls GetEffectiveSecurityHealthAnalyticsCustomModule.
                     * @param request GetEffectiveSecurityHealthAnalyticsCustomModuleRequest message or plain object
                     * @returns Promise
                     */
                    public getEffectiveSecurityHealthAnalyticsCustomModule(request: google.cloud.securitycentermanagement.v1.IGetEffectiveSecurityHealthAnalyticsCustomModuleRequest): Promise<google.cloud.securitycentermanagement.v1.EffectiveSecurityHealthAnalyticsCustomModule>;

                    /**
                     * Calls ListSecurityHealthAnalyticsCustomModules.
                     * @param request ListSecurityHealthAnalyticsCustomModulesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListSecurityHealthAnalyticsCustomModulesResponse
                     */
                    public listSecurityHealthAnalyticsCustomModules(request: google.cloud.securitycentermanagement.v1.IListSecurityHealthAnalyticsCustomModulesRequest, callback: google.cloud.securitycentermanagement.v1.SecurityCenterManagement.ListSecurityHealthAnalyticsCustomModulesCallback): void;

                    /**
                     * Calls ListSecurityHealthAnalyticsCustomModules.
                     * @param request ListSecurityHealthAnalyticsCustomModulesRequest message or plain object
                     * @returns Promise
                     */
                    public listSecurityHealthAnalyticsCustomModules(request: google.cloud.securitycentermanagement.v1.IListSecurityHealthAnalyticsCustomModulesRequest): Promise<google.cloud.securitycentermanagement.v1.ListSecurityHealthAnalyticsCustomModulesResponse>;

                    /**
                     * Calls ListDescendantSecurityHealthAnalyticsCustomModules.
                     * @param request ListDescendantSecurityHealthAnalyticsCustomModulesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListDescendantSecurityHealthAnalyticsCustomModulesResponse
                     */
                    public listDescendantSecurityHealthAnalyticsCustomModules(request: google.cloud.securitycentermanagement.v1.IListDescendantSecurityHealthAnalyticsCustomModulesRequest, callback: google.cloud.securitycentermanagement.v1.SecurityCenterManagement.ListDescendantSecurityHealthAnalyticsCustomModulesCallback): void;

                    /**
                     * Calls ListDescendantSecurityHealthAnalyticsCustomModules.
                     * @param request ListDescendantSecurityHealthAnalyticsCustomModulesRequest message or plain object
                     * @returns Promise
                     */
                    public listDescendantSecurityHealthAnalyticsCustomModules(request: google.cloud.securitycentermanagement.v1.IListDescendantSecurityHealthAnalyticsCustomModulesRequest): Promise<google.cloud.securitycentermanagement.v1.ListDescendantSecurityHealthAnalyticsCustomModulesResponse>;

                    /**
                     * Calls GetSecurityHealthAnalyticsCustomModule.
                     * @param request GetSecurityHealthAnalyticsCustomModuleRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and SecurityHealthAnalyticsCustomModule
                     */
                    public getSecurityHealthAnalyticsCustomModule(request: google.cloud.securitycentermanagement.v1.IGetSecurityHealthAnalyticsCustomModuleRequest, callback: google.cloud.securitycentermanagement.v1.SecurityCenterManagement.GetSecurityHealthAnalyticsCustomModuleCallback): void;

                    /**
                     * Calls GetSecurityHealthAnalyticsCustomModule.
                     * @param request GetSecurityHealthAnalyticsCustomModuleRequest message or plain object
                     * @returns Promise
                     */
                    public getSecurityHealthAnalyticsCustomModule(request: google.cloud.securitycentermanagement.v1.IGetSecurityHealthAnalyticsCustomModuleRequest): Promise<google.cloud.securitycentermanagement.v1.SecurityHealthAnalyticsCustomModule>;

                    /**
                     * Calls CreateSecurityHealthAnalyticsCustomModule.
                     * @param request CreateSecurityHealthAnalyticsCustomModuleRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and SecurityHealthAnalyticsCustomModule
                     */
                    public createSecurityHealthAnalyticsCustomModule(request: google.cloud.securitycentermanagement.v1.ICreateSecurityHealthAnalyticsCustomModuleRequest, callback: google.cloud.securitycentermanagement.v1.SecurityCenterManagement.CreateSecurityHealthAnalyticsCustomModuleCallback): void;

                    /**
                     * Calls CreateSecurityHealthAnalyticsCustomModule.
                     * @param request CreateSecurityHealthAnalyticsCustomModuleRequest message or plain object
                     * @returns Promise
                     */
                    public createSecurityHealthAnalyticsCustomModule(request: google.cloud.securitycentermanagement.v1.ICreateSecurityHealthAnalyticsCustomModuleRequest): Promise<google.cloud.securitycentermanagement.v1.SecurityHealthAnalyticsCustomModule>;

                    /**
                     * Calls UpdateSecurityHealthAnalyticsCustomModule.
                     * @param request UpdateSecurityHealthAnalyticsCustomModuleRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and SecurityHealthAnalyticsCustomModule
                     */
                    public updateSecurityHealthAnalyticsCustomModule(request: google.cloud.securitycentermanagement.v1.IUpdateSecurityHealthAnalyticsCustomModuleRequest, callback: google.cloud.securitycentermanagement.v1.SecurityCenterManagement.UpdateSecurityHealthAnalyticsCustomModuleCallback): void;

                    /**
                     * Calls UpdateSecurityHealthAnalyticsCustomModule.
                     * @param request UpdateSecurityHealthAnalyticsCustomModuleRequest message or plain object
                     * @returns Promise
                     */
                    public updateSecurityHealthAnalyticsCustomModule(request: google.cloud.securitycentermanagement.v1.IUpdateSecurityHealthAnalyticsCustomModuleRequest): Promise<google.cloud.securitycentermanagement.v1.SecurityHealthAnalyticsCustomModule>;

                    /**
                     * Calls DeleteSecurityHealthAnalyticsCustomModule.
                     * @param request DeleteSecurityHealthAnalyticsCustomModuleRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Empty
                     */
                    public deleteSecurityHealthAnalyticsCustomModule(request: google.cloud.securitycentermanagement.v1.IDeleteSecurityHealthAnalyticsCustomModuleRequest, callback: google.cloud.securitycentermanagement.v1.SecurityCenterManagement.DeleteSecurityHealthAnalyticsCustomModuleCallback): void;

                    /**
                     * Calls DeleteSecurityHealthAnalyticsCustomModule.
                     * @param request DeleteSecurityHealthAnalyticsCustomModuleRequest message or plain object
                     * @returns Promise
                     */
                    public deleteSecurityHealthAnalyticsCustomModule(request: google.cloud.securitycentermanagement.v1.IDeleteSecurityHealthAnalyticsCustomModuleRequest): Promise<google.protobuf.Empty>;

                    /**
                     * Calls SimulateSecurityHealthAnalyticsCustomModule.
                     * @param request SimulateSecurityHealthAnalyticsCustomModuleRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and SimulateSecurityHealthAnalyticsCustomModuleResponse
                     */
                    public simulateSecurityHealthAnalyticsCustomModule(request: google.cloud.securitycentermanagement.v1.ISimulateSecurityHealthAnalyticsCustomModuleRequest, callback: google.cloud.securitycentermanagement.v1.SecurityCenterManagement.SimulateSecurityHealthAnalyticsCustomModuleCallback): void;

                    /**
                     * Calls SimulateSecurityHealthAnalyticsCustomModule.
                     * @param request SimulateSecurityHealthAnalyticsCustomModuleRequest message or plain object
                     * @returns Promise
                     */
                    public simulateSecurityHealthAnalyticsCustomModule(request: google.cloud.securitycentermanagement.v1.ISimulateSecurityHealthAnalyticsCustomModuleRequest): Promise<google.cloud.securitycentermanagement.v1.SimulateSecurityHealthAnalyticsCustomModuleResponse>;

                    /**
                     * Calls ListEffectiveEventThreatDetectionCustomModules.
                     * @param request ListEffectiveEventThreatDetectionCustomModulesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListEffectiveEventThreatDetectionCustomModulesResponse
                     */
                    public listEffectiveEventThreatDetectionCustomModules(request: google.cloud.securitycentermanagement.v1.IListEffectiveEventThreatDetectionCustomModulesRequest, callback: google.cloud.securitycentermanagement.v1.SecurityCenterManagement.ListEffectiveEventThreatDetectionCustomModulesCallback): void;

                    /**
                     * Calls ListEffectiveEventThreatDetectionCustomModules.
                     * @param request ListEffectiveEventThreatDetectionCustomModulesRequest message or plain object
                     * @returns Promise
                     */
                    public listEffectiveEventThreatDetectionCustomModules(request: google.cloud.securitycentermanagement.v1.IListEffectiveEventThreatDetectionCustomModulesRequest): Promise<google.cloud.securitycentermanagement.v1.ListEffectiveEventThreatDetectionCustomModulesResponse>;

                    /**
                     * Calls GetEffectiveEventThreatDetectionCustomModule.
                     * @param request GetEffectiveEventThreatDetectionCustomModuleRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and EffectiveEventThreatDetectionCustomModule
                     */
                    public getEffectiveEventThreatDetectionCustomModule(request: google.cloud.securitycentermanagement.v1.IGetEffectiveEventThreatDetectionCustomModuleRequest, callback: google.cloud.securitycentermanagement.v1.SecurityCenterManagement.GetEffectiveEventThreatDetectionCustomModuleCallback): void;

                    /**
                     * Calls GetEffectiveEventThreatDetectionCustomModule.
                     * @param request GetEffectiveEventThreatDetectionCustomModuleRequest message or plain object
                     * @returns Promise
                     */
                    public getEffectiveEventThreatDetectionCustomModule(request: google.cloud.securitycentermanagement.v1.IGetEffectiveEventThreatDetectionCustomModuleRequest): Promise<google.cloud.securitycentermanagement.v1.EffectiveEventThreatDetectionCustomModule>;

                    /**
                     * Calls ListEventThreatDetectionCustomModules.
                     * @param request ListEventThreatDetectionCustomModulesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListEventThreatDetectionCustomModulesResponse
                     */
                    public listEventThreatDetectionCustomModules(request: google.cloud.securitycentermanagement.v1.IListEventThreatDetectionCustomModulesRequest, callback: google.cloud.securitycentermanagement.v1.SecurityCenterManagement.ListEventThreatDetectionCustomModulesCallback): void;

                    /**
                     * Calls ListEventThreatDetectionCustomModules.
                     * @param request ListEventThreatDetectionCustomModulesRequest message or plain object
                     * @returns Promise
                     */
                    public listEventThreatDetectionCustomModules(request: google.cloud.securitycentermanagement.v1.IListEventThreatDetectionCustomModulesRequest): Promise<google.cloud.securitycentermanagement.v1.ListEventThreatDetectionCustomModulesResponse>;

                    /**
                     * Calls ListDescendantEventThreatDetectionCustomModules.
                     * @param request ListDescendantEventThreatDetectionCustomModulesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListDescendantEventThreatDetectionCustomModulesResponse
                     */
                    public listDescendantEventThreatDetectionCustomModules(request: google.cloud.securitycentermanagement.v1.IListDescendantEventThreatDetectionCustomModulesRequest, callback: google.cloud.securitycentermanagement.v1.SecurityCenterManagement.ListDescendantEventThreatDetectionCustomModulesCallback): void;

                    /**
                     * Calls ListDescendantEventThreatDetectionCustomModules.
                     * @param request ListDescendantEventThreatDetectionCustomModulesRequest message or plain object
                     * @returns Promise
                     */
                    public listDescendantEventThreatDetectionCustomModules(request: google.cloud.securitycentermanagement.v1.IListDescendantEventThreatDetectionCustomModulesRequest): Promise<google.cloud.securitycentermanagement.v1.ListDescendantEventThreatDetectionCustomModulesResponse>;

                    /**
                     * Calls GetEventThreatDetectionCustomModule.
                     * @param request GetEventThreatDetectionCustomModuleRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and EventThreatDetectionCustomModule
                     */
                    public getEventThreatDetectionCustomModule(request: google.cloud.securitycentermanagement.v1.IGetEventThreatDetectionCustomModuleRequest, callback: google.cloud.securitycentermanagement.v1.SecurityCenterManagement.GetEventThreatDetectionCustomModuleCallback): void;

                    /**
                     * Calls GetEventThreatDetectionCustomModule.
                     * @param request GetEventThreatDetectionCustomModuleRequest message or plain object
                     * @returns Promise
                     */
                    public getEventThreatDetectionCustomModule(request: google.cloud.securitycentermanagement.v1.IGetEventThreatDetectionCustomModuleRequest): Promise<google.cloud.securitycentermanagement.v1.EventThreatDetectionCustomModule>;

                    /**
                     * Calls CreateEventThreatDetectionCustomModule.
                     * @param request CreateEventThreatDetectionCustomModuleRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and EventThreatDetectionCustomModule
                     */
                    public createEventThreatDetectionCustomModule(request: google.cloud.securitycentermanagement.v1.ICreateEventThreatDetectionCustomModuleRequest, callback: google.cloud.securitycentermanagement.v1.SecurityCenterManagement.CreateEventThreatDetectionCustomModuleCallback): void;

                    /**
                     * Calls CreateEventThreatDetectionCustomModule.
                     * @param request CreateEventThreatDetectionCustomModuleRequest message or plain object
                     * @returns Promise
                     */
                    public createEventThreatDetectionCustomModule(request: google.cloud.securitycentermanagement.v1.ICreateEventThreatDetectionCustomModuleRequest): Promise<google.cloud.securitycentermanagement.v1.EventThreatDetectionCustomModule>;

                    /**
                     * Calls UpdateEventThreatDetectionCustomModule.
                     * @param request UpdateEventThreatDetectionCustomModuleRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and EventThreatDetectionCustomModule
                     */
                    public updateEventThreatDetectionCustomModule(request: google.cloud.securitycentermanagement.v1.IUpdateEventThreatDetectionCustomModuleRequest, callback: google.cloud.securitycentermanagement.v1.SecurityCenterManagement.UpdateEventThreatDetectionCustomModuleCallback): void;

                    /**
                     * Calls UpdateEventThreatDetectionCustomModule.
                     * @param request UpdateEventThreatDetectionCustomModuleRequest message or plain object
                     * @returns Promise
                     */
                    public updateEventThreatDetectionCustomModule(request: google.cloud.securitycentermanagement.v1.IUpdateEventThreatDetectionCustomModuleRequest): Promise<google.cloud.securitycentermanagement.v1.EventThreatDetectionCustomModule>;

                    /**
                     * Calls DeleteEventThreatDetectionCustomModule.
                     * @param request DeleteEventThreatDetectionCustomModuleRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Empty
                     */
                    public deleteEventThreatDetectionCustomModule(request: google.cloud.securitycentermanagement.v1.IDeleteEventThreatDetectionCustomModuleRequest, callback: google.cloud.securitycentermanagement.v1.SecurityCenterManagement.DeleteEventThreatDetectionCustomModuleCallback): void;

                    /**
                     * Calls DeleteEventThreatDetectionCustomModule.
                     * @param request DeleteEventThreatDetectionCustomModuleRequest message or plain object
                     * @returns Promise
                     */
                    public deleteEventThreatDetectionCustomModule(request: google.cloud.securitycentermanagement.v1.IDeleteEventThreatDetectionCustomModuleRequest): Promise<google.protobuf.Empty>;

                    /**
                     * Calls ValidateEventThreatDetectionCustomModule.
                     * @param request ValidateEventThreatDetectionCustomModuleRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ValidateEventThreatDetectionCustomModuleResponse
                     */
                    public validateEventThreatDetectionCustomModule(request: google.cloud.securitycentermanagement.v1.IValidateEventThreatDetectionCustomModuleRequest, callback: google.cloud.securitycentermanagement.v1.SecurityCenterManagement.ValidateEventThreatDetectionCustomModuleCallback): void;

                    /**
                     * Calls ValidateEventThreatDetectionCustomModule.
                     * @param request ValidateEventThreatDetectionCustomModuleRequest message or plain object
                     * @returns Promise
                     */
                    public validateEventThreatDetectionCustomModule(request: google.cloud.securitycentermanagement.v1.IValidateEventThreatDetectionCustomModuleRequest): Promise<google.cloud.securitycentermanagement.v1.ValidateEventThreatDetectionCustomModuleResponse>;

                    /**
                     * Calls GetSecurityCenterService.
                     * @param request GetSecurityCenterServiceRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and SecurityCenterService
                     */
                    public getSecurityCenterService(request: google.cloud.securitycentermanagement.v1.IGetSecurityCenterServiceRequest, callback: google.cloud.securitycentermanagement.v1.SecurityCenterManagement.GetSecurityCenterServiceCallback): void;

                    /**
                     * Calls GetSecurityCenterService.
                     * @param request GetSecurityCenterServiceRequest message or plain object
                     * @returns Promise
                     */
                    public getSecurityCenterService(request: google.cloud.securitycentermanagement.v1.IGetSecurityCenterServiceRequest): Promise<google.cloud.securitycentermanagement.v1.SecurityCenterService>;

                    /**
                     * Calls ListSecurityCenterServices.
                     * @param request ListSecurityCenterServicesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListSecurityCenterServicesResponse
                     */
                    public listSecurityCenterServices(request: google.cloud.securitycentermanagement.v1.IListSecurityCenterServicesRequest, callback: google.cloud.securitycentermanagement.v1.SecurityCenterManagement.ListSecurityCenterServicesCallback): void;

                    /**
                     * Calls ListSecurityCenterServices.
                     * @param request ListSecurityCenterServicesRequest message or plain object
                     * @returns Promise
                     */
                    public listSecurityCenterServices(request: google.cloud.securitycentermanagement.v1.IListSecurityCenterServicesRequest): Promise<google.cloud.securitycentermanagement.v1.ListSecurityCenterServicesResponse>;

                    /**
                     * Calls UpdateSecurityCenterService.
                     * @param request UpdateSecurityCenterServiceRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and SecurityCenterService
                     */
                    public updateSecurityCenterService(request: google.cloud.securitycentermanagement.v1.IUpdateSecurityCenterServiceRequest, callback: google.cloud.securitycentermanagement.v1.SecurityCenterManagement.UpdateSecurityCenterServiceCallback): void;

                    /**
                     * Calls UpdateSecurityCenterService.
                     * @param request UpdateSecurityCenterServiceRequest message or plain object
                     * @returns Promise
                     */
                    public updateSecurityCenterService(request: google.cloud.securitycentermanagement.v1.IUpdateSecurityCenterServiceRequest): Promise<google.cloud.securitycentermanagement.v1.SecurityCenterService>;
                }

                namespace SecurityCenterManagement {

                    /**
                     * Callback as used by {@link google.cloud.securitycentermanagement.v1.SecurityCenterManagement|listEffectiveSecurityHealthAnalyticsCustomModules}.
                     * @param error Error, if any
                     * @param [response] ListEffectiveSecurityHealthAnalyticsCustomModulesResponse
                     */
                    type ListEffectiveSecurityHealthAnalyticsCustomModulesCallback = (error: (Error|null), response?: google.cloud.securitycentermanagement.v1.ListEffectiveSecurityHealthAnalyticsCustomModulesResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.securitycentermanagement.v1.SecurityCenterManagement|getEffectiveSecurityHealthAnalyticsCustomModule}.
                     * @param error Error, if any
                     * @param [response] EffectiveSecurityHealthAnalyticsCustomModule
                     */
                    type GetEffectiveSecurityHealthAnalyticsCustomModuleCallback = (error: (Error|null), response?: google.cloud.securitycentermanagement.v1.EffectiveSecurityHealthAnalyticsCustomModule) => void;

                    /**
                     * Callback as used by {@link google.cloud.securitycentermanagement.v1.SecurityCenterManagement|listSecurityHealthAnalyticsCustomModules}.
                     * @param error Error, if any
                     * @param [response] ListSecurityHealthAnalyticsCustomModulesResponse
                     */
                    type ListSecurityHealthAnalyticsCustomModulesCallback = (error: (Error|null), response?: google.cloud.securitycentermanagement.v1.ListSecurityHealthAnalyticsCustomModulesResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.securitycentermanagement.v1.SecurityCenterManagement|listDescendantSecurityHealthAnalyticsCustomModules}.
                     * @param error Error, if any
                     * @param [response] ListDescendantSecurityHealthAnalyticsCustomModulesResponse
                     */
                    type ListDescendantSecurityHealthAnalyticsCustomModulesCallback = (error: (Error|null), response?: google.cloud.securitycentermanagement.v1.ListDescendantSecurityHealthAnalyticsCustomModulesResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.securitycentermanagement.v1.SecurityCenterManagement|getSecurityHealthAnalyticsCustomModule}.
                     * @param error Error, if any
                     * @param [response] SecurityHealthAnalyticsCustomModule
                     */
                    type GetSecurityHealthAnalyticsCustomModuleCallback = (error: (Error|null), response?: google.cloud.securitycentermanagement.v1.SecurityHealthAnalyticsCustomModule) => void;

                    /**
                     * Callback as used by {@link google.cloud.securitycentermanagement.v1.SecurityCenterManagement|createSecurityHealthAnalyticsCustomModule}.
                     * @param error Error, if any
                     * @param [response] SecurityHealthAnalyticsCustomModule
                     */
                    type CreateSecurityHealthAnalyticsCustomModuleCallback = (error: (Error|null), response?: google.cloud.securitycentermanagement.v1.SecurityHealthAnalyticsCustomModule) => void;

                    /**
                     * Callback as used by {@link google.cloud.securitycentermanagement.v1.SecurityCenterManagement|updateSecurityHealthAnalyticsCustomModule}.
                     * @param error Error, if any
                     * @param [response] SecurityHealthAnalyticsCustomModule
                     */
                    type UpdateSecurityHealthAnalyticsCustomModuleCallback = (error: (Error|null), response?: google.cloud.securitycentermanagement.v1.SecurityHealthAnalyticsCustomModule) => void;

                    /**
                     * Callback as used by {@link google.cloud.securitycentermanagement.v1.SecurityCenterManagement|deleteSecurityHealthAnalyticsCustomModule}.
                     * @param error Error, if any
                     * @param [response] Empty
                     */
                    type DeleteSecurityHealthAnalyticsCustomModuleCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                    /**
                     * Callback as used by {@link google.cloud.securitycentermanagement.v1.SecurityCenterManagement|simulateSecurityHealthAnalyticsCustomModule}.
                     * @param error Error, if any
                     * @param [response] SimulateSecurityHealthAnalyticsCustomModuleResponse
                     */
                    type SimulateSecurityHealthAnalyticsCustomModuleCallback = (error: (Error|null), response?: google.cloud.securitycentermanagement.v1.SimulateSecurityHealthAnalyticsCustomModuleResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.securitycentermanagement.v1.SecurityCenterManagement|listEffectiveEventThreatDetectionCustomModules}.
                     * @param error Error, if any
                     * @param [response] ListEffectiveEventThreatDetectionCustomModulesResponse
                     */
                    type ListEffectiveEventThreatDetectionCustomModulesCallback = (error: (Error|null), response?: google.cloud.securitycentermanagement.v1.ListEffectiveEventThreatDetectionCustomModulesResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.securitycentermanagement.v1.SecurityCenterManagement|getEffectiveEventThreatDetectionCustomModule}.
                     * @param error Error, if any
                     * @param [response] EffectiveEventThreatDetectionCustomModule
                     */
                    type GetEffectiveEventThreatDetectionCustomModuleCallback = (error: (Error|null), response?: google.cloud.securitycentermanagement.v1.EffectiveEventThreatDetectionCustomModule) => void;

                    /**
                     * Callback as used by {@link google.cloud.securitycentermanagement.v1.SecurityCenterManagement|listEventThreatDetectionCustomModules}.
                     * @param error Error, if any
                     * @param [response] ListEventThreatDetectionCustomModulesResponse
                     */
                    type ListEventThreatDetectionCustomModulesCallback = (error: (Error|null), response?: google.cloud.securitycentermanagement.v1.ListEventThreatDetectionCustomModulesResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.securitycentermanagement.v1.SecurityCenterManagement|listDescendantEventThreatDetectionCustomModules}.
                     * @param error Error, if any
                     * @param [response] ListDescendantEventThreatDetectionCustomModulesResponse
                     */
                    type ListDescendantEventThreatDetectionCustomModulesCallback = (error: (Error|null), response?: google.cloud.securitycentermanagement.v1.ListDescendantEventThreatDetectionCustomModulesResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.securitycentermanagement.v1.SecurityCenterManagement|getEventThreatDetectionCustomModule}.
                     * @param error Error, if any
                     * @param [response] EventThreatDetectionCustomModule
                     */
                    type GetEventThreatDetectionCustomModuleCallback = (error: (Error|null), response?: google.cloud.securitycentermanagement.v1.EventThreatDetectionCustomModule) => void;

                    /**
                     * Callback as used by {@link google.cloud.securitycentermanagement.v1.SecurityCenterManagement|createEventThreatDetectionCustomModule}.
                     * @param error Error, if any
                     * @param [response] EventThreatDetectionCustomModule
                     */
                    type CreateEventThreatDetectionCustomModuleCallback = (error: (Error|null), response?: google.cloud.securitycentermanagement.v1.EventThreatDetectionCustomModule) => void;

                    /**
                     * Callback as used by {@link google.cloud.securitycentermanagement.v1.SecurityCenterManagement|updateEventThreatDetectionCustomModule}.
                     * @param error Error, if any
                     * @param [response] EventThreatDetectionCustomModule
                     */
                    type UpdateEventThreatDetectionCustomModuleCallback = (error: (Error|null), response?: google.cloud.securitycentermanagement.v1.EventThreatDetectionCustomModule) => void;

                    /**
                     * Callback as used by {@link google.cloud.securitycentermanagement.v1.SecurityCenterManagement|deleteEventThreatDetectionCustomModule}.
                     * @param error Error, if any
                     * @param [response] Empty
                     */
                    type DeleteEventThreatDetectionCustomModuleCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                    /**
                     * Callback as used by {@link google.cloud.securitycentermanagement.v1.SecurityCenterManagement|validateEventThreatDetectionCustomModule}.
                     * @param error Error, if any
                     * @param [response] ValidateEventThreatDetectionCustomModuleResponse
                     */
                    type ValidateEventThreatDetectionCustomModuleCallback = (error: (Error|null), response?: google.cloud.securitycentermanagement.v1.ValidateEventThreatDetectionCustomModuleResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.securitycentermanagement.v1.SecurityCenterManagement|getSecurityCenterService}.
                     * @param error Error, if any
                     * @param [response] SecurityCenterService
                     */
                    type GetSecurityCenterServiceCallback = (error: (Error|null), response?: google.cloud.securitycentermanagement.v1.SecurityCenterService) => void;

                    /**
                     * Callback as used by {@link google.cloud.securitycentermanagement.v1.SecurityCenterManagement|listSecurityCenterServices}.
                     * @param error Error, if any
                     * @param [response] ListSecurityCenterServicesResponse
                     */
                    type ListSecurityCenterServicesCallback = (error: (Error|null), response?: google.cloud.securitycentermanagement.v1.ListSecurityCenterServicesResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.securitycentermanagement.v1.SecurityCenterManagement|updateSecurityCenterService}.
                     * @param error Error, if any
                     * @param [response] SecurityCenterService
                     */
                    type UpdateSecurityCenterServiceCallback = (error: (Error|null), response?: google.cloud.securitycentermanagement.v1.SecurityCenterService) => void;
                }

                /** Properties of a SecurityCenterService. */
                interface ISecurityCenterService {

                    /** SecurityCenterService name */
                    name?: (string|null);

                    /** SecurityCenterService intendedEnablementState */
                    intendedEnablementState?: (google.cloud.securitycentermanagement.v1.SecurityCenterService.EnablementState|keyof typeof google.cloud.securitycentermanagement.v1.SecurityCenterService.EnablementState|null);

                    /** SecurityCenterService effectiveEnablementState */
                    effectiveEnablementState?: (google.cloud.securitycentermanagement.v1.SecurityCenterService.EnablementState|keyof typeof google.cloud.securitycentermanagement.v1.SecurityCenterService.EnablementState|null);

                    /** SecurityCenterService modules */
                    modules?: ({ [k: string]: google.cloud.securitycentermanagement.v1.SecurityCenterService.IModuleSettings }|null);

                    /** SecurityCenterService updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** SecurityCenterService serviceConfig */
                    serviceConfig?: (google.protobuf.IStruct|null);
                }

                /** Represents a SecurityCenterService. */
                class SecurityCenterService implements ISecurityCenterService {

                    /**
                     * Constructs a new SecurityCenterService.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.securitycentermanagement.v1.ISecurityCenterService);

                    /** SecurityCenterService name. */
                    public name: string;

                    /** SecurityCenterService intendedEnablementState. */
                    public intendedEnablementState: (google.cloud.securitycentermanagement.v1.SecurityCenterService.EnablementState|keyof typeof google.cloud.securitycentermanagement.v1.SecurityCenterService.EnablementState);

                    /** SecurityCenterService effectiveEnablementState. */
                    public effectiveEnablementState: (google.cloud.securitycentermanagement.v1.SecurityCenterService.EnablementState|keyof typeof google.cloud.securitycentermanagement.v1.SecurityCenterService.EnablementState);

                    /** SecurityCenterService modules. */
                    public modules: { [k: string]: google.cloud.securitycentermanagement.v1.SecurityCenterService.IModuleSettings };

                    /** SecurityCenterService updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** SecurityCenterService serviceConfig. */
                    public serviceConfig?: (google.protobuf.IStruct|null);

                    /**
                     * Creates a new SecurityCenterService instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SecurityCenterService instance
                     */
                    public static create(properties?: google.cloud.securitycentermanagement.v1.ISecurityCenterService): google.cloud.securitycentermanagement.v1.SecurityCenterService;

                    /**
                     * Encodes the specified SecurityCenterService message. Does not implicitly {@link google.cloud.securitycentermanagement.v1.SecurityCenterService.verify|verify} messages.
                     * @param message SecurityCenterService message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.securitycentermanagement.v1.ISecurityCenterService, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SecurityCenterService message, length delimited. Does not implicitly {@link google.cloud.securitycentermanagement.v1.SecurityCenterService.verify|verify} messages.
                     * @param message SecurityCenterService message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.securitycentermanagement.v1.ISecurityCenterService, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SecurityCenterService message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SecurityCenterService
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.securitycentermanagement.v1.SecurityCenterService;

                    /**
                     * Decodes a SecurityCenterService message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SecurityCenterService
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.securitycentermanagement.v1.SecurityCenterService;

                    /**
                     * Verifies a SecurityCenterService message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SecurityCenterService message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SecurityCenterService
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.securitycentermanagement.v1.SecurityCenterService;

                    /**
                     * Creates a plain object from a SecurityCenterService message. Also converts values to other types if specified.
                     * @param message SecurityCenterService
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.securitycentermanagement.v1.SecurityCenterService, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SecurityCenterService to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for SecurityCenterService
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace SecurityCenterService {

                    /** Properties of a ModuleSettings. */
                    interface IModuleSettings {

                        /** ModuleSettings intendedEnablementState */
                        intendedEnablementState?: (google.cloud.securitycentermanagement.v1.SecurityCenterService.EnablementState|keyof typeof google.cloud.securitycentermanagement.v1.SecurityCenterService.EnablementState|null);

                        /** ModuleSettings effectiveEnablementState */
                        effectiveEnablementState?: (google.cloud.securitycentermanagement.v1.SecurityCenterService.EnablementState|keyof typeof google.cloud.securitycentermanagement.v1.SecurityCenterService.EnablementState|null);
                    }

                    /** Represents a ModuleSettings. */
                    class ModuleSettings implements IModuleSettings {

                        /**
                         * Constructs a new ModuleSettings.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.securitycentermanagement.v1.SecurityCenterService.IModuleSettings);

                        /** ModuleSettings intendedEnablementState. */
                        public intendedEnablementState: (google.cloud.securitycentermanagement.v1.SecurityCenterService.EnablementState|keyof typeof google.cloud.securitycentermanagement.v1.SecurityCenterService.EnablementState);

                        /** ModuleSettings effectiveEnablementState. */
                        public effectiveEnablementState: (google.cloud.securitycentermanagement.v1.SecurityCenterService.EnablementState|keyof typeof google.cloud.securitycentermanagement.v1.SecurityCenterService.EnablementState);

                        /**
                         * Creates a new ModuleSettings instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ModuleSettings instance
                         */
                        public static create(properties?: google.cloud.securitycentermanagement.v1.SecurityCenterService.IModuleSettings): google.cloud.securitycentermanagement.v1.SecurityCenterService.ModuleSettings;

                        /**
                         * Encodes the specified ModuleSettings message. Does not implicitly {@link google.cloud.securitycentermanagement.v1.SecurityCenterService.ModuleSettings.verify|verify} messages.
                         * @param message ModuleSettings message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.securitycentermanagement.v1.SecurityCenterService.IModuleSettings, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ModuleSettings message, length delimited. Does not implicitly {@link google.cloud.securitycentermanagement.v1.SecurityCenterService.ModuleSettings.verify|verify} messages.
                         * @param message ModuleSettings message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.securitycentermanagement.v1.SecurityCenterService.IModuleSettings, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ModuleSettings message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ModuleSettings
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.securitycentermanagement.v1.SecurityCenterService.ModuleSettings;

                        /**
                         * Decodes a ModuleSettings message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ModuleSettings
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.securitycentermanagement.v1.SecurityCenterService.ModuleSettings;

                        /**
                         * Verifies a ModuleSettings message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ModuleSettings message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ModuleSettings
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.securitycentermanagement.v1.SecurityCenterService.ModuleSettings;

                        /**
                         * Creates a plain object from a ModuleSettings message. Also converts values to other types if specified.
                         * @param message ModuleSettings
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.securitycentermanagement.v1.SecurityCenterService.ModuleSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ModuleSettings to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ModuleSettings
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** EnablementState enum. */
                    enum EnablementState {
                        ENABLEMENT_STATE_UNSPECIFIED = 0,
                        INHERITED = 1,
                        ENABLED = 2,
                        DISABLED = 3,
                        INGEST_ONLY = 4
                    }
                }

                /** Properties of an EffectiveSecurityHealthAnalyticsCustomModule. */
                interface IEffectiveSecurityHealthAnalyticsCustomModule {

                    /** EffectiveSecurityHealthAnalyticsCustomModule name */
                    name?: (string|null);

                    /** EffectiveSecurityHealthAnalyticsCustomModule customConfig */
                    customConfig?: (google.cloud.securitycentermanagement.v1.ICustomConfig|null);

                    /** EffectiveSecurityHealthAnalyticsCustomModule enablementState */
                    enablementState?: (google.cloud.securitycentermanagement.v1.EffectiveSecurityHealthAnalyticsCustomModule.EnablementState|keyof typeof google.cloud.securitycentermanagement.v1.EffectiveSecurityHealthAnalyticsCustomModule.EnablementState|null);

                    /** EffectiveSecurityHealthAnalyticsCustomModule displayName */
                    displayName?: (string|null);
                }

                /** Represents an EffectiveSecurityHealthAnalyticsCustomModule. */
                class EffectiveSecurityHealthAnalyticsCustomModule implements IEffectiveSecurityHealthAnalyticsCustomModule {

                    /**
                     * Constructs a new EffectiveSecurityHealthAnalyticsCustomModule.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.securitycentermanagement.v1.IEffectiveSecurityHealthAnalyticsCustomModule);

                    /** EffectiveSecurityHealthAnalyticsCustomModule name. */
                    public name: string;

                    /** EffectiveSecurityHealthAnalyticsCustomModule customConfig. */
                    public customConfig?: (google.cloud.securitycentermanagement.v1.ICustomConfig|null);

                    /** EffectiveSecurityHealthAnalyticsCustomModule enablementState. */
                    public enablementState: (google.cloud.securitycentermanagement.v1.EffectiveSecurityHealthAnalyticsCustomModule.EnablementState|keyof typeof google.cloud.securitycentermanagement.v1.EffectiveSecurityHealthAnalyticsCustomModule.EnablementState);

                    /** EffectiveSecurityHealthAnalyticsCustomModule displayName. */
                    public displayName: string;

                    /**
                     * Creates a new EffectiveSecurityHealthAnalyticsCustomModule instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns EffectiveSecurityHealthAnalyticsCustomModule instance
                     */
                    public static create(properties?: google.cloud.securitycentermanagement.v1.IEffectiveSecurityHealthAnalyticsCustomModule): google.cloud.securitycentermanagement.v1.EffectiveSecurityHealthAnalyticsCustomModule;

                    /**
                     * Encodes the specified EffectiveSecurityHealthAnalyticsCustomModule message. Does not implicitly {@link google.cloud.securitycentermanagement.v1.EffectiveSecurityHealthAnalyticsCustomModule.verify|verify} messages.
                     * @param message EffectiveSecurityHealthAnalyticsCustomModule message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.securitycentermanagement.v1.IEffectiveSecurityHealthAnalyticsCustomModule, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified EffectiveSecurityHealthAnalyticsCustomModule message, length delimited. Does not implicitly {@link google.cloud.securitycentermanagement.v1.EffectiveSecurityHealthAnalyticsCustomModule.verify|verify} messages.
                     * @param message EffectiveSecurityHealthAnalyticsCustomModule message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.securitycentermanagement.v1.IEffectiveSecurityHealthAnalyticsCustomModule, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an EffectiveSecurityHealthAnalyticsCustomModule message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns EffectiveSecurityHealthAnalyticsCustomModule
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.securitycentermanagement.v1.EffectiveSecurityHealthAnalyticsCustomModule;

                    /**
                     * Decodes an EffectiveSecurityHealthAnalyticsCustomModule message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns EffectiveSecurityHealthAnalyticsCustomModule
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.securitycentermanagement.v1.EffectiveSecurityHealthAnalyticsCustomModule;

                    /**
                     * Verifies an EffectiveSecurityHealthAnalyticsCustomModule message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an EffectiveSecurityHealthAnalyticsCustomModule message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns EffectiveSecurityHealthAnalyticsCustomModule
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.securitycentermanagement.v1.EffectiveSecurityHealthAnalyticsCustomModule;

                    /**
                     * Creates a plain object from an EffectiveSecurityHealthAnalyticsCustomModule message. Also converts values to other types if specified.
                     * @param message EffectiveSecurityHealthAnalyticsCustomModule
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.securitycentermanagement.v1.EffectiveSecurityHealthAnalyticsCustomModule, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this EffectiveSecurityHealthAnalyticsCustomModule to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for EffectiveSecurityHealthAnalyticsCustomModule
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace EffectiveSecurityHealthAnalyticsCustomModule {

                    /** EnablementState enum. */
                    enum EnablementState {
                        ENABLEMENT_STATE_UNSPECIFIED = 0,
                        ENABLED = 1,
                        DISABLED = 2
                    }
                }

                /** Properties of a ListEffectiveSecurityHealthAnalyticsCustomModulesRequest. */
                interface IListEffectiveSecurityHealthAnalyticsCustomModulesRequest {

                    /** ListEffectiveSecurityHealthAnalyticsCustomModulesRequest parent */
                    parent?: (string|null);

                    /** ListEffectiveSecurityHealthAnalyticsCustomModulesRequest pageSize */
                    pageSize?: (number|null);

                    /** ListEffectiveSecurityHealthAnalyticsCustomModulesRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListEffectiveSecurityHealthAnalyticsCustomModulesRequest. */
                class ListEffectiveSecurityHealthAnalyticsCustomModulesRequest implements IListEffectiveSecurityHealthAnalyticsCustomModulesRequest {

                    /**
                     * Constructs a new ListEffectiveSecurityHealthAnalyticsCustomModulesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.securitycentermanagement.v1.IListEffectiveSecurityHealthAnalyticsCustomModulesRequest);

                    /** ListEffectiveSecurityHealthAnalyticsCustomModulesRequest parent. */
                    public parent: string;

                    /** ListEffectiveSecurityHealthAnalyticsCustomModulesRequest pageSize. */
                    public pageSize: number;

                    /** ListEffectiveSecurityHealthAnalyticsCustomModulesRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListEffectiveSecurityHealthAnalyticsCustomModulesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListEffectiveSecurityHealthAnalyticsCustomModulesRequest instance
                     */
                    public static create(properties?: google.cloud.securitycentermanagement.v1.IListEffectiveSecurityHealthAnalyticsCustomModulesRequest): google.cloud.securitycentermanagement.v1.ListEffectiveSecurityHealthAnalyticsCustomModulesRequest;

                    /**
                     * Encodes the specified ListEffectiveSecurityHealthAnalyticsCustomModulesRequest message. Does not implicitly {@link google.cloud.securitycentermanagement.v1.ListEffectiveSecurityHealthAnalyticsCustomModulesRequest.verify|verify} messages.
                     * @param message ListEffectiveSecurityHealthAnalyticsCustomModulesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.securitycentermanagement.v1.IListEffectiveSecurityHealthAnalyticsCustomModulesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListEffectiveSecurityHealthAnalyticsCustomModulesRequest message, length delimited. Does not implicitly {@link google.cloud.securitycentermanagement.v1.ListEffectiveSecurityHealthAnalyticsCustomModulesRequest.verify|verify} messages.
                     * @param message ListEffectiveSecurityHealthAnalyticsCustomModulesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.securitycentermanagement.v1.IListEffectiveSecurityHealthAnalyticsCustomModulesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListEffectiveSecurityHealthAnalyticsCustomModulesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListEffectiveSecurityHealthAnalyticsCustomModulesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.securitycentermanagement.v1.ListEffectiveSecurityHealthAnalyticsCustomModulesRequest;

                    /**
                     * Decodes a ListEffectiveSecurityHealthAnalyticsCustomModulesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListEffectiveSecurityHealthAnalyticsCustomModulesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.securitycentermanagement.v1.ListEffectiveSecurityHealthAnalyticsCustomModulesRequest;

                    /**
                     * Verifies a ListEffectiveSecurityHealthAnalyticsCustomModulesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListEffectiveSecurityHealthAnalyticsCustomModulesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListEffectiveSecurityHealthAnalyticsCustomModulesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.securitycentermanagement.v1.ListEffectiveSecurityHealthAnalyticsCustomModulesRequest;

                    /**
                     * Creates a plain object from a ListEffectiveSecurityHealthAnalyticsCustomModulesRequest message. Also converts values to other types if specified.
                     * @param message ListEffectiveSecurityHealthAnalyticsCustomModulesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.securitycentermanagement.v1.ListEffectiveSecurityHealthAnalyticsCustomModulesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListEffectiveSecurityHealthAnalyticsCustomModulesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListEffectiveSecurityHealthAnalyticsCustomModulesRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListEffectiveSecurityHealthAnalyticsCustomModulesResponse. */
                interface IListEffectiveSecurityHealthAnalyticsCustomModulesResponse {

                    /** ListEffectiveSecurityHealthAnalyticsCustomModulesResponse effectiveSecurityHealthAnalyticsCustomModules */
                    effectiveSecurityHealthAnalyticsCustomModules?: (google.cloud.securitycentermanagement.v1.IEffectiveSecurityHealthAnalyticsCustomModule[]|null);

                    /** ListEffectiveSecurityHealthAnalyticsCustomModulesResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListEffectiveSecurityHealthAnalyticsCustomModulesResponse. */
                class ListEffectiveSecurityHealthAnalyticsCustomModulesResponse implements IListEffectiveSecurityHealthAnalyticsCustomModulesResponse {

                    /**
                     * Constructs a new ListEffectiveSecurityHealthAnalyticsCustomModulesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.securitycentermanagement.v1.IListEffectiveSecurityHealthAnalyticsCustomModulesResponse);

                    /** ListEffectiveSecurityHealthAnalyticsCustomModulesResponse effectiveSecurityHealthAnalyticsCustomModules. */
                    public effectiveSecurityHealthAnalyticsCustomModules: google.cloud.securitycentermanagement.v1.IEffectiveSecurityHealthAnalyticsCustomModule[];

                    /** ListEffectiveSecurityHealthAnalyticsCustomModulesResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListEffectiveSecurityHealthAnalyticsCustomModulesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListEffectiveSecurityHealthAnalyticsCustomModulesResponse instance
                     */
                    public static create(properties?: google.cloud.securitycentermanagement.v1.IListEffectiveSecurityHealthAnalyticsCustomModulesResponse): google.cloud.securitycentermanagement.v1.ListEffectiveSecurityHealthAnalyticsCustomModulesResponse;

                    /**
                     * Encodes the specified ListEffectiveSecurityHealthAnalyticsCustomModulesResponse message. Does not implicitly {@link google.cloud.securitycentermanagement.v1.ListEffectiveSecurityHealthAnalyticsCustomModulesResponse.verify|verify} messages.
                     * @param message ListEffectiveSecurityHealthAnalyticsCustomModulesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.securitycentermanagement.v1.IListEffectiveSecurityHealthAnalyticsCustomModulesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListEffectiveSecurityHealthAnalyticsCustomModulesResponse message, length delimited. Does not implicitly {@link google.cloud.securitycentermanagement.v1.ListEffectiveSecurityHealthAnalyticsCustomModulesResponse.verify|verify} messages.
                     * @param message ListEffectiveSecurityHealthAnalyticsCustomModulesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.securitycentermanagement.v1.IListEffectiveSecurityHealthAnalyticsCustomModulesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListEffectiveSecurityHealthAnalyticsCustomModulesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListEffectiveSecurityHealthAnalyticsCustomModulesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.securitycentermanagement.v1.ListEffectiveSecurityHealthAnalyticsCustomModulesResponse;

                    /**
                     * Decodes a ListEffectiveSecurityHealthAnalyticsCustomModulesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListEffectiveSecurityHealthAnalyticsCustomModulesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.securitycentermanagement.v1.ListEffectiveSecurityHealthAnalyticsCustomModulesResponse;

                    /**
                     * Verifies a ListEffectiveSecurityHealthAnalyticsCustomModulesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListEffectiveSecurityHealthAnalyticsCustomModulesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListEffectiveSecurityHealthAnalyticsCustomModulesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.securitycentermanagement.v1.ListEffectiveSecurityHealthAnalyticsCustomModulesResponse;

                    /**
                     * Creates a plain object from a ListEffectiveSecurityHealthAnalyticsCustomModulesResponse message. Also converts values to other types if specified.
                     * @param message ListEffectiveSecurityHealthAnalyticsCustomModulesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.securitycentermanagement.v1.ListEffectiveSecurityHealthAnalyticsCustomModulesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListEffectiveSecurityHealthAnalyticsCustomModulesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListEffectiveSecurityHealthAnalyticsCustomModulesResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetEffectiveSecurityHealthAnalyticsCustomModuleRequest. */
                interface IGetEffectiveSecurityHealthAnalyticsCustomModuleRequest {

                    /** GetEffectiveSecurityHealthAnalyticsCustomModuleRequest name */
                    name?: (string|null);
                }

                /** Represents a GetEffectiveSecurityHealthAnalyticsCustomModuleRequest. */
                class GetEffectiveSecurityHealthAnalyticsCustomModuleRequest implements IGetEffectiveSecurityHealthAnalyticsCustomModuleRequest {

                    /**
                     * Constructs a new GetEffectiveSecurityHealthAnalyticsCustomModuleRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.securitycentermanagement.v1.IGetEffectiveSecurityHealthAnalyticsCustomModuleRequest);

                    /** GetEffectiveSecurityHealthAnalyticsCustomModuleRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetEffectiveSecurityHealthAnalyticsCustomModuleRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetEffectiveSecurityHealthAnalyticsCustomModuleRequest instance
                     */
                    public static create(properties?: google.cloud.securitycentermanagement.v1.IGetEffectiveSecurityHealthAnalyticsCustomModuleRequest): google.cloud.securitycentermanagement.v1.GetEffectiveSecurityHealthAnalyticsCustomModuleRequest;

                    /**
                     * Encodes the specified GetEffectiveSecurityHealthAnalyticsCustomModuleRequest message. Does not implicitly {@link google.cloud.securitycentermanagement.v1.GetEffectiveSecurityHealthAnalyticsCustomModuleRequest.verify|verify} messages.
                     * @param message GetEffectiveSecurityHealthAnalyticsCustomModuleRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.securitycentermanagement.v1.IGetEffectiveSecurityHealthAnalyticsCustomModuleRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetEffectiveSecurityHealthAnalyticsCustomModuleRequest message, length delimited. Does not implicitly {@link google.cloud.securitycentermanagement.v1.GetEffectiveSecurityHealthAnalyticsCustomModuleRequest.verify|verify} messages.
                     * @param message GetEffectiveSecurityHealthAnalyticsCustomModuleRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.securitycentermanagement.v1.IGetEffectiveSecurityHealthAnalyticsCustomModuleRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetEffectiveSecurityHealthAnalyticsCustomModuleRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetEffectiveSecurityHealthAnalyticsCustomModuleRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.securitycentermanagement.v1.GetEffectiveSecurityHealthAnalyticsCustomModuleRequest;

                    /**
                     * Decodes a GetEffectiveSecurityHealthAnalyticsCustomModuleRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetEffectiveSecurityHealthAnalyticsCustomModuleRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.securitycentermanagement.v1.GetEffectiveSecurityHealthAnalyticsCustomModuleRequest;

                    /**
                     * Verifies a GetEffectiveSecurityHealthAnalyticsCustomModuleRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetEffectiveSecurityHealthAnalyticsCustomModuleRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetEffectiveSecurityHealthAnalyticsCustomModuleRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.securitycentermanagement.v1.GetEffectiveSecurityHealthAnalyticsCustomModuleRequest;

                    /**
                     * Creates a plain object from a GetEffectiveSecurityHealthAnalyticsCustomModuleRequest message. Also converts values to other types if specified.
                     * @param message GetEffectiveSecurityHealthAnalyticsCustomModuleRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.securitycentermanagement.v1.GetEffectiveSecurityHealthAnalyticsCustomModuleRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetEffectiveSecurityHealthAnalyticsCustomModuleRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetEffectiveSecurityHealthAnalyticsCustomModuleRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a SecurityHealthAnalyticsCustomModule. */
                interface ISecurityHealthAnalyticsCustomModule {

                    /** SecurityHealthAnalyticsCustomModule name */
                    name?: (string|null);

                    /** SecurityHealthAnalyticsCustomModule displayName */
                    displayName?: (string|null);

                    /** SecurityHealthAnalyticsCustomModule enablementState */
                    enablementState?: (google.cloud.securitycentermanagement.v1.SecurityHealthAnalyticsCustomModule.EnablementState|keyof typeof google.cloud.securitycentermanagement.v1.SecurityHealthAnalyticsCustomModule.EnablementState|null);

                    /** SecurityHealthAnalyticsCustomModule updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** SecurityHealthAnalyticsCustomModule lastEditor */
                    lastEditor?: (string|null);

                    /** SecurityHealthAnalyticsCustomModule ancestorModule */
                    ancestorModule?: (string|null);

                    /** SecurityHealthAnalyticsCustomModule customConfig */
                    customConfig?: (google.cloud.securitycentermanagement.v1.ICustomConfig|null);
                }

                /** Represents a SecurityHealthAnalyticsCustomModule. */
                class SecurityHealthAnalyticsCustomModule implements ISecurityHealthAnalyticsCustomModule {

                    /**
                     * Constructs a new SecurityHealthAnalyticsCustomModule.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.securitycentermanagement.v1.ISecurityHealthAnalyticsCustomModule);

                    /** SecurityHealthAnalyticsCustomModule name. */
                    public name: string;

                    /** SecurityHealthAnalyticsCustomModule displayName. */
                    public displayName: string;

                    /** SecurityHealthAnalyticsCustomModule enablementState. */
                    public enablementState: (google.cloud.securitycentermanagement.v1.SecurityHealthAnalyticsCustomModule.EnablementState|keyof typeof google.cloud.securitycentermanagement.v1.SecurityHealthAnalyticsCustomModule.EnablementState);

                    /** SecurityHealthAnalyticsCustomModule updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** SecurityHealthAnalyticsCustomModule lastEditor. */
                    public lastEditor: string;

                    /** SecurityHealthAnalyticsCustomModule ancestorModule. */
                    public ancestorModule: string;

                    /** SecurityHealthAnalyticsCustomModule customConfig. */
                    public customConfig?: (google.cloud.securitycentermanagement.v1.ICustomConfig|null);

                    /**
                     * Creates a new SecurityHealthAnalyticsCustomModule instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SecurityHealthAnalyticsCustomModule instance
                     */
                    public static create(properties?: google.cloud.securitycentermanagement.v1.ISecurityHealthAnalyticsCustomModule): google.cloud.securitycentermanagement.v1.SecurityHealthAnalyticsCustomModule;

                    /**
                     * Encodes the specified SecurityHealthAnalyticsCustomModule message. Does not implicitly {@link google.cloud.securitycentermanagement.v1.SecurityHealthAnalyticsCustomModule.verify|verify} messages.
                     * @param message SecurityHealthAnalyticsCustomModule message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.securitycentermanagement.v1.ISecurityHealthAnalyticsCustomModule, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SecurityHealthAnalyticsCustomModule message, length delimited. Does not implicitly {@link google.cloud.securitycentermanagement.v1.SecurityHealthAnalyticsCustomModule.verify|verify} messages.
                     * @param message SecurityHealthAnalyticsCustomModule message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.securitycentermanagement.v1.ISecurityHealthAnalyticsCustomModule, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SecurityHealthAnalyticsCustomModule message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SecurityHealthAnalyticsCustomModule
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.securitycentermanagement.v1.SecurityHealthAnalyticsCustomModule;

                    /**
                     * Decodes a SecurityHealthAnalyticsCustomModule message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SecurityHealthAnalyticsCustomModule
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.securitycentermanagement.v1.SecurityHealthAnalyticsCustomModule;

                    /**
                     * Verifies a SecurityHealthAnalyticsCustomModule message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SecurityHealthAnalyticsCustomModule message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SecurityHealthAnalyticsCustomModule
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.securitycentermanagement.v1.SecurityHealthAnalyticsCustomModule;

                    /**
                     * Creates a plain object from a SecurityHealthAnalyticsCustomModule message. Also converts values to other types if specified.
                     * @param message SecurityHealthAnalyticsCustomModule
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.securitycentermanagement.v1.SecurityHealthAnalyticsCustomModule, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SecurityHealthAnalyticsCustomModule to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for SecurityHealthAnalyticsCustomModule
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace SecurityHealthAnalyticsCustomModule {

                    /** EnablementState enum. */
                    enum EnablementState {
                        ENABLEMENT_STATE_UNSPECIFIED = 0,
                        ENABLED = 1,
                        DISABLED = 2,
                        INHERITED = 3
                    }
                }

                /** Properties of a CustomConfig. */
                interface ICustomConfig {

                    /** CustomConfig predicate */
                    predicate?: (google.type.IExpr|null);

                    /** CustomConfig customOutput */
                    customOutput?: (google.cloud.securitycentermanagement.v1.CustomConfig.ICustomOutputSpec|null);

                    /** CustomConfig resourceSelector */
                    resourceSelector?: (google.cloud.securitycentermanagement.v1.CustomConfig.IResourceSelector|null);

                    /** CustomConfig severity */
                    severity?: (google.cloud.securitycentermanagement.v1.CustomConfig.Severity|keyof typeof google.cloud.securitycentermanagement.v1.CustomConfig.Severity|null);

                    /** CustomConfig description */
                    description?: (string|null);

                    /** CustomConfig recommendation */
                    recommendation?: (string|null);
                }

                /** Represents a CustomConfig. */
                class CustomConfig implements ICustomConfig {

                    /**
                     * Constructs a new CustomConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.securitycentermanagement.v1.ICustomConfig);

                    /** CustomConfig predicate. */
                    public predicate?: (google.type.IExpr|null);

                    /** CustomConfig customOutput. */
                    public customOutput?: (google.cloud.securitycentermanagement.v1.CustomConfig.ICustomOutputSpec|null);

                    /** CustomConfig resourceSelector. */
                    public resourceSelector?: (google.cloud.securitycentermanagement.v1.CustomConfig.IResourceSelector|null);

                    /** CustomConfig severity. */
                    public severity: (google.cloud.securitycentermanagement.v1.CustomConfig.Severity|keyof typeof google.cloud.securitycentermanagement.v1.CustomConfig.Severity);

                    /** CustomConfig description. */
                    public description: string;

                    /** CustomConfig recommendation. */
                    public recommendation: string;

                    /**
                     * Creates a new CustomConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CustomConfig instance
                     */
                    public static create(properties?: google.cloud.securitycentermanagement.v1.ICustomConfig): google.cloud.securitycentermanagement.v1.CustomConfig;

                    /**
                     * Encodes the specified CustomConfig message. Does not implicitly {@link google.cloud.securitycentermanagement.v1.CustomConfig.verify|verify} messages.
                     * @param message CustomConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.securitycentermanagement.v1.ICustomConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CustomConfig message, length delimited. Does not implicitly {@link google.cloud.securitycentermanagement.v1.CustomConfig.verify|verify} messages.
                     * @param message CustomConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.securitycentermanagement.v1.ICustomConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CustomConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CustomConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.securitycentermanagement.v1.CustomConfig;

                    /**
                     * Decodes a CustomConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CustomConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.securitycentermanagement.v1.CustomConfig;

                    /**
                     * Verifies a CustomConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CustomConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CustomConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.securitycentermanagement.v1.CustomConfig;

                    /**
                     * Creates a plain object from a CustomConfig message. Also converts values to other types if specified.
                     * @param message CustomConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.securitycentermanagement.v1.CustomConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CustomConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CustomConfig
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace CustomConfig {

                    /** Properties of a CustomOutputSpec. */
                    interface ICustomOutputSpec {

                        /** CustomOutputSpec properties */
                        properties?: (google.cloud.securitycentermanagement.v1.CustomConfig.CustomOutputSpec.IProperty[]|null);
                    }

                    /** Represents a CustomOutputSpec. */
                    class CustomOutputSpec implements ICustomOutputSpec {

                        /**
                         * Constructs a new CustomOutputSpec.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.securitycentermanagement.v1.CustomConfig.ICustomOutputSpec);

                        /** CustomOutputSpec properties. */
                        public properties: google.cloud.securitycentermanagement.v1.CustomConfig.CustomOutputSpec.IProperty[];

                        /**
                         * Creates a new CustomOutputSpec instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns CustomOutputSpec instance
                         */
                        public static create(properties?: google.cloud.securitycentermanagement.v1.CustomConfig.ICustomOutputSpec): google.cloud.securitycentermanagement.v1.CustomConfig.CustomOutputSpec;

                        /**
                         * Encodes the specified CustomOutputSpec message. Does not implicitly {@link google.cloud.securitycentermanagement.v1.CustomConfig.CustomOutputSpec.verify|verify} messages.
                         * @param message CustomOutputSpec message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.securitycentermanagement.v1.CustomConfig.ICustomOutputSpec, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified CustomOutputSpec message, length delimited. Does not implicitly {@link google.cloud.securitycentermanagement.v1.CustomConfig.CustomOutputSpec.verify|verify} messages.
                         * @param message CustomOutputSpec message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.securitycentermanagement.v1.CustomConfig.ICustomOutputSpec, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a CustomOutputSpec message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns CustomOutputSpec
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.securitycentermanagement.v1.CustomConfig.CustomOutputSpec;

                        /**
                         * Decodes a CustomOutputSpec message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns CustomOutputSpec
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.securitycentermanagement.v1.CustomConfig.CustomOutputSpec;

                        /**
                         * Verifies a CustomOutputSpec message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a CustomOutputSpec message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns CustomOutputSpec
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.securitycentermanagement.v1.CustomConfig.CustomOutputSpec;

                        /**
                         * Creates a plain object from a CustomOutputSpec message. Also converts values to other types if specified.
                         * @param message CustomOutputSpec
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.securitycentermanagement.v1.CustomConfig.CustomOutputSpec, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this CustomOutputSpec to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for CustomOutputSpec
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace CustomOutputSpec {

                        /** Properties of a Property. */
                        interface IProperty {

                            /** Property name */
                            name?: (string|null);

                            /** Property valueExpression */
                            valueExpression?: (google.type.IExpr|null);
                        }

                        /** Represents a Property. */
                        class Property implements IProperty {

                            /**
                             * Constructs a new Property.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.securitycentermanagement.v1.CustomConfig.CustomOutputSpec.IProperty);

                            /** Property name. */
                            public name: string;

                            /** Property valueExpression. */
                            public valueExpression?: (google.type.IExpr|null);

                            /**
                             * Creates a new Property instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns Property instance
                             */
                            public static create(properties?: google.cloud.securitycentermanagement.v1.CustomConfig.CustomOutputSpec.IProperty): google.cloud.securitycentermanagement.v1.CustomConfig.CustomOutputSpec.Property;

                            /**
                             * Encodes the specified Property message. Does not implicitly {@link google.cloud.securitycentermanagement.v1.CustomConfig.CustomOutputSpec.Property.verify|verify} messages.
                             * @param message Property message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.securitycentermanagement.v1.CustomConfig.CustomOutputSpec.IProperty, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified Property message, length delimited. Does not implicitly {@link google.cloud.securitycentermanagement.v1.CustomConfig.CustomOutputSpec.Property.verify|verify} messages.
                             * @param message Property message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.securitycentermanagement.v1.CustomConfig.CustomOutputSpec.IProperty, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a Property message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns Property
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.securitycentermanagement.v1.CustomConfig.CustomOutputSpec.Property;

                            /**
                             * Decodes a Property message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns Property
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.securitycentermanagement.v1.CustomConfig.CustomOutputSpec.Property;

                            /**
                             * Verifies a Property message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a Property message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns Property
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.securitycentermanagement.v1.CustomConfig.CustomOutputSpec.Property;

                            /**
                             * Creates a plain object from a Property message. Also converts values to other types if specified.
                             * @param message Property
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.securitycentermanagement.v1.CustomConfig.CustomOutputSpec.Property, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this Property to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for Property
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }
                    }

                    /** Properties of a ResourceSelector. */
                    interface IResourceSelector {

                        /** ResourceSelector resourceTypes */
                        resourceTypes?: (string[]|null);
                    }

                    /** Represents a ResourceSelector. */
                    class ResourceSelector implements IResourceSelector {

                        /**
                         * Constructs a new ResourceSelector.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.securitycentermanagement.v1.CustomConfig.IResourceSelector);

                        /** ResourceSelector resourceTypes. */
                        public resourceTypes: string[];

                        /**
                         * Creates a new ResourceSelector instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ResourceSelector instance
                         */
                        public static create(properties?: google.cloud.securitycentermanagement.v1.CustomConfig.IResourceSelector): google.cloud.securitycentermanagement.v1.CustomConfig.ResourceSelector;

                        /**
                         * Encodes the specified ResourceSelector message. Does not implicitly {@link google.cloud.securitycentermanagement.v1.CustomConfig.ResourceSelector.verify|verify} messages.
                         * @param message ResourceSelector message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.securitycentermanagement.v1.CustomConfig.IResourceSelector, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ResourceSelector message, length delimited. Does not implicitly {@link google.cloud.securitycentermanagement.v1.CustomConfig.ResourceSelector.verify|verify} messages.
                         * @param message ResourceSelector message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.securitycentermanagement.v1.CustomConfig.IResourceSelector, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ResourceSelector message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ResourceSelector
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.securitycentermanagement.v1.CustomConfig.ResourceSelector;

                        /**
                         * Decodes a ResourceSelector message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ResourceSelector
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.securitycentermanagement.v1.CustomConfig.ResourceSelector;

                        /**
                         * Verifies a ResourceSelector message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ResourceSelector message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ResourceSelector
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.securitycentermanagement.v1.CustomConfig.ResourceSelector;

                        /**
                         * Creates a plain object from a ResourceSelector message. Also converts values to other types if specified.
                         * @param message ResourceSelector
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.securitycentermanagement.v1.CustomConfig.ResourceSelector, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ResourceSelector to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ResourceSelector
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Severity enum. */
                    enum Severity {
                        SEVERITY_UNSPECIFIED = 0,
                        CRITICAL = 1,
                        HIGH = 2,
                        MEDIUM = 3,
                        LOW = 4
                    }
                }

                /** Properties of a ListSecurityHealthAnalyticsCustomModulesRequest. */
                interface IListSecurityHealthAnalyticsCustomModulesRequest {

                    /** ListSecurityHealthAnalyticsCustomModulesRequest parent */
                    parent?: (string|null);

                    /** ListSecurityHealthAnalyticsCustomModulesRequest pageSize */
                    pageSize?: (number|null);

                    /** ListSecurityHealthAnalyticsCustomModulesRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListSecurityHealthAnalyticsCustomModulesRequest. */
                class ListSecurityHealthAnalyticsCustomModulesRequest implements IListSecurityHealthAnalyticsCustomModulesRequest {

                    /**
                     * Constructs a new ListSecurityHealthAnalyticsCustomModulesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.securitycentermanagement.v1.IListSecurityHealthAnalyticsCustomModulesRequest);

                    /** ListSecurityHealthAnalyticsCustomModulesRequest parent. */
                    public parent: string;

                    /** ListSecurityHealthAnalyticsCustomModulesRequest pageSize. */
                    public pageSize: number;

                    /** ListSecurityHealthAnalyticsCustomModulesRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListSecurityHealthAnalyticsCustomModulesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListSecurityHealthAnalyticsCustomModulesRequest instance
                     */
                    public static create(properties?: google.cloud.securitycentermanagement.v1.IListSecurityHealthAnalyticsCustomModulesRequest): google.cloud.securitycentermanagement.v1.ListSecurityHealthAnalyticsCustomModulesRequest;

                    /**
                     * Encodes the specified ListSecurityHealthAnalyticsCustomModulesRequest message. Does not implicitly {@link google.cloud.securitycentermanagement.v1.ListSecurityHealthAnalyticsCustomModulesRequest.verify|verify} messages.
                     * @param message ListSecurityHealthAnalyticsCustomModulesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.securitycentermanagement.v1.IListSecurityHealthAnalyticsCustomModulesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListSecurityHealthAnalyticsCustomModulesRequest message, length delimited. Does not implicitly {@link google.cloud.securitycentermanagement.v1.ListSecurityHealthAnalyticsCustomModulesRequest.verify|verify} messages.
                     * @param message ListSecurityHealthAnalyticsCustomModulesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.securitycentermanagement.v1.IListSecurityHealthAnalyticsCustomModulesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListSecurityHealthAnalyticsCustomModulesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListSecurityHealthAnalyticsCustomModulesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.securitycentermanagement.v1.ListSecurityHealthAnalyticsCustomModulesRequest;

                    /**
                     * Decodes a ListSecurityHealthAnalyticsCustomModulesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListSecurityHealthAnalyticsCustomModulesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.securitycentermanagement.v1.ListSecurityHealthAnalyticsCustomModulesRequest;

                    /**
                     * Verifies a ListSecurityHealthAnalyticsCustomModulesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListSecurityHealthAnalyticsCustomModulesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListSecurityHealthAnalyticsCustomModulesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.securitycentermanagement.v1.ListSecurityHealthAnalyticsCustomModulesRequest;

                    /**
                     * Creates a plain object from a ListSecurityHealthAnalyticsCustomModulesRequest message. Also converts values to other types if specified.
                     * @param message ListSecurityHealthAnalyticsCustomModulesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.securitycentermanagement.v1.ListSecurityHealthAnalyticsCustomModulesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListSecurityHealthAnalyticsCustomModulesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListSecurityHealthAnalyticsCustomModulesRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListSecurityHealthAnalyticsCustomModulesResponse. */
                interface IListSecurityHealthAnalyticsCustomModulesResponse {

                    /** ListSecurityHealthAnalyticsCustomModulesResponse securityHealthAnalyticsCustomModules */
                    securityHealthAnalyticsCustomModules?: (google.cloud.securitycentermanagement.v1.ISecurityHealthAnalyticsCustomModule[]|null);

                    /** ListSecurityHealthAnalyticsCustomModulesResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListSecurityHealthAnalyticsCustomModulesResponse. */
                class ListSecurityHealthAnalyticsCustomModulesResponse implements IListSecurityHealthAnalyticsCustomModulesResponse {

                    /**
                     * Constructs a new ListSecurityHealthAnalyticsCustomModulesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.securitycentermanagement.v1.IListSecurityHealthAnalyticsCustomModulesResponse);

                    /** ListSecurityHealthAnalyticsCustomModulesResponse securityHealthAnalyticsCustomModules. */
                    public securityHealthAnalyticsCustomModules: google.cloud.securitycentermanagement.v1.ISecurityHealthAnalyticsCustomModule[];

                    /** ListSecurityHealthAnalyticsCustomModulesResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListSecurityHealthAnalyticsCustomModulesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListSecurityHealthAnalyticsCustomModulesResponse instance
                     */
                    public static create(properties?: google.cloud.securitycentermanagement.v1.IListSecurityHealthAnalyticsCustomModulesResponse): google.cloud.securitycentermanagement.v1.ListSecurityHealthAnalyticsCustomModulesResponse;

                    /**
                     * Encodes the specified ListSecurityHealthAnalyticsCustomModulesResponse message. Does not implicitly {@link google.cloud.securitycentermanagement.v1.ListSecurityHealthAnalyticsCustomModulesResponse.verify|verify} messages.
                     * @param message ListSecurityHealthAnalyticsCustomModulesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.securitycentermanagement.v1.IListSecurityHealthAnalyticsCustomModulesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListSecurityHealthAnalyticsCustomModulesResponse message, length delimited. Does not implicitly {@link google.cloud.securitycentermanagement.v1.ListSecurityHealthAnalyticsCustomModulesResponse.verify|verify} messages.
                     * @param message ListSecurityHealthAnalyticsCustomModulesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.securitycentermanagement.v1.IListSecurityHealthAnalyticsCustomModulesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListSecurityHealthAnalyticsCustomModulesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListSecurityHealthAnalyticsCustomModulesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.securitycentermanagement.v1.ListSecurityHealthAnalyticsCustomModulesResponse;

                    /**
                     * Decodes a ListSecurityHealthAnalyticsCustomModulesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListSecurityHealthAnalyticsCustomModulesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.securitycentermanagement.v1.ListSecurityHealthAnalyticsCustomModulesResponse;

                    /**
                     * Verifies a ListSecurityHealthAnalyticsCustomModulesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListSecurityHealthAnalyticsCustomModulesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListSecurityHealthAnalyticsCustomModulesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.securitycentermanagement.v1.ListSecurityHealthAnalyticsCustomModulesResponse;

                    /**
                     * Creates a plain object from a ListSecurityHealthAnalyticsCustomModulesResponse message. Also converts values to other types if specified.
                     * @param message ListSecurityHealthAnalyticsCustomModulesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.securitycentermanagement.v1.ListSecurityHealthAnalyticsCustomModulesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListSecurityHealthAnalyticsCustomModulesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListSecurityHealthAnalyticsCustomModulesResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListDescendantSecurityHealthAnalyticsCustomModulesRequest. */
                interface IListDescendantSecurityHealthAnalyticsCustomModulesRequest {

                    /** ListDescendantSecurityHealthAnalyticsCustomModulesRequest parent */
                    parent?: (string|null);

                    /** ListDescendantSecurityHealthAnalyticsCustomModulesRequest pageSize */
                    pageSize?: (number|null);

                    /** ListDescendantSecurityHealthAnalyticsCustomModulesRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListDescendantSecurityHealthAnalyticsCustomModulesRequest. */
                class ListDescendantSecurityHealthAnalyticsCustomModulesRequest implements IListDescendantSecurityHealthAnalyticsCustomModulesRequest {

                    /**
                     * Constructs a new ListDescendantSecurityHealthAnalyticsCustomModulesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.securitycentermanagement.v1.IListDescendantSecurityHealthAnalyticsCustomModulesRequest);

                    /** ListDescendantSecurityHealthAnalyticsCustomModulesRequest parent. */
                    public parent: string;

                    /** ListDescendantSecurityHealthAnalyticsCustomModulesRequest pageSize. */
                    public pageSize: number;

                    /** ListDescendantSecurityHealthAnalyticsCustomModulesRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListDescendantSecurityHealthAnalyticsCustomModulesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListDescendantSecurityHealthAnalyticsCustomModulesRequest instance
                     */
                    public static create(properties?: google.cloud.securitycentermanagement.v1.IListDescendantSecurityHealthAnalyticsCustomModulesRequest): google.cloud.securitycentermanagement.v1.ListDescendantSecurityHealthAnalyticsCustomModulesRequest;

                    /**
                     * Encodes the specified ListDescendantSecurityHealthAnalyticsCustomModulesRequest message. Does not implicitly {@link google.cloud.securitycentermanagement.v1.ListDescendantSecurityHealthAnalyticsCustomModulesRequest.verify|verify} messages.
                     * @param message ListDescendantSecurityHealthAnalyticsCustomModulesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.securitycentermanagement.v1.IListDescendantSecurityHealthAnalyticsCustomModulesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListDescendantSecurityHealthAnalyticsCustomModulesRequest message, length delimited. Does not implicitly {@link google.cloud.securitycentermanagement.v1.ListDescendantSecurityHealthAnalyticsCustomModulesRequest.verify|verify} messages.
                     * @param message ListDescendantSecurityHealthAnalyticsCustomModulesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.securitycentermanagement.v1.IListDescendantSecurityHealthAnalyticsCustomModulesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListDescendantSecurityHealthAnalyticsCustomModulesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListDescendantSecurityHealthAnalyticsCustomModulesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.securitycentermanagement.v1.ListDescendantSecurityHealthAnalyticsCustomModulesRequest;

                    /**
                     * Decodes a ListDescendantSecurityHealthAnalyticsCustomModulesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListDescendantSecurityHealthAnalyticsCustomModulesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.securitycentermanagement.v1.ListDescendantSecurityHealthAnalyticsCustomModulesRequest;

                    /**
                     * Verifies a ListDescendantSecurityHealthAnalyticsCustomModulesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListDescendantSecurityHealthAnalyticsCustomModulesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListDescendantSecurityHealthAnalyticsCustomModulesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.securitycentermanagement.v1.ListDescendantSecurityHealthAnalyticsCustomModulesRequest;

                    /**
                     * Creates a plain object from a ListDescendantSecurityHealthAnalyticsCustomModulesRequest message. Also converts values to other types if specified.
                     * @param message ListDescendantSecurityHealthAnalyticsCustomModulesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.securitycentermanagement.v1.ListDescendantSecurityHealthAnalyticsCustomModulesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListDescendantSecurityHealthAnalyticsCustomModulesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListDescendantSecurityHealthAnalyticsCustomModulesRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListDescendantSecurityHealthAnalyticsCustomModulesResponse. */
                interface IListDescendantSecurityHealthAnalyticsCustomModulesResponse {

                    /** ListDescendantSecurityHealthAnalyticsCustomModulesResponse securityHealthAnalyticsCustomModules */
                    securityHealthAnalyticsCustomModules?: (google.cloud.securitycentermanagement.v1.ISecurityHealthAnalyticsCustomModule[]|null);

                    /** ListDescendantSecurityHealthAnalyticsCustomModulesResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListDescendantSecurityHealthAnalyticsCustomModulesResponse. */
                class ListDescendantSecurityHealthAnalyticsCustomModulesResponse implements IListDescendantSecurityHealthAnalyticsCustomModulesResponse {

                    /**
                     * Constructs a new ListDescendantSecurityHealthAnalyticsCustomModulesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.securitycentermanagement.v1.IListDescendantSecurityHealthAnalyticsCustomModulesResponse);

                    /** ListDescendantSecurityHealthAnalyticsCustomModulesResponse securityHealthAnalyticsCustomModules. */
                    public securityHealthAnalyticsCustomModules: google.cloud.securitycentermanagement.v1.ISecurityHealthAnalyticsCustomModule[];

                    /** ListDescendantSecurityHealthAnalyticsCustomModulesResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListDescendantSecurityHealthAnalyticsCustomModulesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListDescendantSecurityHealthAnalyticsCustomModulesResponse instance
                     */
                    public static create(properties?: google.cloud.securitycentermanagement.v1.IListDescendantSecurityHealthAnalyticsCustomModulesResponse): google.cloud.securitycentermanagement.v1.ListDescendantSecurityHealthAnalyticsCustomModulesResponse;

                    /**
                     * Encodes the specified ListDescendantSecurityHealthAnalyticsCustomModulesResponse message. Does not implicitly {@link google.cloud.securitycentermanagement.v1.ListDescendantSecurityHealthAnalyticsCustomModulesResponse.verify|verify} messages.
                     * @param message ListDescendantSecurityHealthAnalyticsCustomModulesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.securitycentermanagement.v1.IListDescendantSecurityHealthAnalyticsCustomModulesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListDescendantSecurityHealthAnalyticsCustomModulesResponse message, length delimited. Does not implicitly {@link google.cloud.securitycentermanagement.v1.ListDescendantSecurityHealthAnalyticsCustomModulesResponse.verify|verify} messages.
                     * @param message ListDescendantSecurityHealthAnalyticsCustomModulesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.securitycentermanagement.v1.IListDescendantSecurityHealthAnalyticsCustomModulesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListDescendantSecurityHealthAnalyticsCustomModulesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListDescendantSecurityHealthAnalyticsCustomModulesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.securitycentermanagement.v1.ListDescendantSecurityHealthAnalyticsCustomModulesResponse;

                    /**
                     * Decodes a ListDescendantSecurityHealthAnalyticsCustomModulesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListDescendantSecurityHealthAnalyticsCustomModulesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.securitycentermanagement.v1.ListDescendantSecurityHealthAnalyticsCustomModulesResponse;

                    /**
                     * Verifies a ListDescendantSecurityHealthAnalyticsCustomModulesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListDescendantSecurityHealthAnalyticsCustomModulesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListDescendantSecurityHealthAnalyticsCustomModulesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.securitycentermanagement.v1.ListDescendantSecurityHealthAnalyticsCustomModulesResponse;

                    /**
                     * Creates a plain object from a ListDescendantSecurityHealthAnalyticsCustomModulesResponse message. Also converts values to other types if specified.
                     * @param message ListDescendantSecurityHealthAnalyticsCustomModulesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.securitycentermanagement.v1.ListDescendantSecurityHealthAnalyticsCustomModulesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListDescendantSecurityHealthAnalyticsCustomModulesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListDescendantSecurityHealthAnalyticsCustomModulesResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetSecurityHealthAnalyticsCustomModuleRequest. */
                interface IGetSecurityHealthAnalyticsCustomModuleRequest {

                    /** GetSecurityHealthAnalyticsCustomModuleRequest name */
                    name?: (string|null);
                }

                /** Represents a GetSecurityHealthAnalyticsCustomModuleRequest. */
                class GetSecurityHealthAnalyticsCustomModuleRequest implements IGetSecurityHealthAnalyticsCustomModuleRequest {

                    /**
                     * Constructs a new GetSecurityHealthAnalyticsCustomModuleRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.securitycentermanagement.v1.IGetSecurityHealthAnalyticsCustomModuleRequest);

                    /** GetSecurityHealthAnalyticsCustomModuleRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetSecurityHealthAnalyticsCustomModuleRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetSecurityHealthAnalyticsCustomModuleRequest instance
                     */
                    public static create(properties?: google.cloud.securitycentermanagement.v1.IGetSecurityHealthAnalyticsCustomModuleRequest): google.cloud.securitycentermanagement.v1.GetSecurityHealthAnalyticsCustomModuleRequest;

                    /**
                     * Encodes the specified GetSecurityHealthAnalyticsCustomModuleRequest message. Does not implicitly {@link google.cloud.securitycentermanagement.v1.GetSecurityHealthAnalyticsCustomModuleRequest.verify|verify} messages.
                     * @param message GetSecurityHealthAnalyticsCustomModuleRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.securitycentermanagement.v1.IGetSecurityHealthAnalyticsCustomModuleRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetSecurityHealthAnalyticsCustomModuleRequest message, length delimited. Does not implicitly {@link google.cloud.securitycentermanagement.v1.GetSecurityHealthAnalyticsCustomModuleRequest.verify|verify} messages.
                     * @param message GetSecurityHealthAnalyticsCustomModuleRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.securitycentermanagement.v1.IGetSecurityHealthAnalyticsCustomModuleRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetSecurityHealthAnalyticsCustomModuleRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetSecurityHealthAnalyticsCustomModuleRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.securitycentermanagement.v1.GetSecurityHealthAnalyticsCustomModuleRequest;

                    /**
                     * Decodes a GetSecurityHealthAnalyticsCustomModuleRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetSecurityHealthAnalyticsCustomModuleRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.securitycentermanagement.v1.GetSecurityHealthAnalyticsCustomModuleRequest;

                    /**
                     * Verifies a GetSecurityHealthAnalyticsCustomModuleRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetSecurityHealthAnalyticsCustomModuleRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetSecurityHealthAnalyticsCustomModuleRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.securitycentermanagement.v1.GetSecurityHealthAnalyticsCustomModuleRequest;

                    /**
                     * Creates a plain object from a GetSecurityHealthAnalyticsCustomModuleRequest message. Also converts values to other types if specified.
                     * @param message GetSecurityHealthAnalyticsCustomModuleRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.securitycentermanagement.v1.GetSecurityHealthAnalyticsCustomModuleRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetSecurityHealthAnalyticsCustomModuleRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetSecurityHealthAnalyticsCustomModuleRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CreateSecurityHealthAnalyticsCustomModuleRequest. */
                interface ICreateSecurityHealthAnalyticsCustomModuleRequest {

                    /** CreateSecurityHealthAnalyticsCustomModuleRequest parent */
                    parent?: (string|null);

                    /** CreateSecurityHealthAnalyticsCustomModuleRequest securityHealthAnalyticsCustomModule */
                    securityHealthAnalyticsCustomModule?: (google.cloud.securitycentermanagement.v1.ISecurityHealthAnalyticsCustomModule|null);

                    /** CreateSecurityHealthAnalyticsCustomModuleRequest validateOnly */
                    validateOnly?: (boolean|null);
                }

                /** Represents a CreateSecurityHealthAnalyticsCustomModuleRequest. */
                class CreateSecurityHealthAnalyticsCustomModuleRequest implements ICreateSecurityHealthAnalyticsCustomModuleRequest {

                    /**
                     * Constructs a new CreateSecurityHealthAnalyticsCustomModuleRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.securitycentermanagement.v1.ICreateSecurityHealthAnalyticsCustomModuleRequest);

                    /** CreateSecurityHealthAnalyticsCustomModuleRequest parent. */
                    public parent: string;

                    /** CreateSecurityHealthAnalyticsCustomModuleRequest securityHealthAnalyticsCustomModule. */
                    public securityHealthAnalyticsCustomModule?: (google.cloud.securitycentermanagement.v1.ISecurityHealthAnalyticsCustomModule|null);

                    /** CreateSecurityHealthAnalyticsCustomModuleRequest validateOnly. */
                    public validateOnly: boolean;

                    /**
                     * Creates a new CreateSecurityHealthAnalyticsCustomModuleRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateSecurityHealthAnalyticsCustomModuleRequest instance
                     */
                    public static create(properties?: google.cloud.securitycentermanagement.v1.ICreateSecurityHealthAnalyticsCustomModuleRequest): google.cloud.securitycentermanagement.v1.CreateSecurityHealthAnalyticsCustomModuleRequest;

                    /**
                     * Encodes the specified CreateSecurityHealthAnalyticsCustomModuleRequest message. Does not implicitly {@link google.cloud.securitycentermanagement.v1.CreateSecurityHealthAnalyticsCustomModuleRequest.verify|verify} messages.
                     * @param message CreateSecurityHealthAnalyticsCustomModuleRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.securitycentermanagement.v1.ICreateSecurityHealthAnalyticsCustomModuleRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateSecurityHealthAnalyticsCustomModuleRequest message, length delimited. Does not implicitly {@link google.cloud.securitycentermanagement.v1.CreateSecurityHealthAnalyticsCustomModuleRequest.verify|verify} messages.
                     * @param message CreateSecurityHealthAnalyticsCustomModuleRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.securitycentermanagement.v1.ICreateSecurityHealthAnalyticsCustomModuleRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateSecurityHealthAnalyticsCustomModuleRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateSecurityHealthAnalyticsCustomModuleRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.securitycentermanagement.v1.CreateSecurityHealthAnalyticsCustomModuleRequest;

                    /**
                     * Decodes a CreateSecurityHealthAnalyticsCustomModuleRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateSecurityHealthAnalyticsCustomModuleRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.securitycentermanagement.v1.CreateSecurityHealthAnalyticsCustomModuleRequest;

                    /**
                     * Verifies a CreateSecurityHealthAnalyticsCustomModuleRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateSecurityHealthAnalyticsCustomModuleRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateSecurityHealthAnalyticsCustomModuleRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.securitycentermanagement.v1.CreateSecurityHealthAnalyticsCustomModuleRequest;

                    /**
                     * Creates a plain object from a CreateSecurityHealthAnalyticsCustomModuleRequest message. Also converts values to other types if specified.
                     * @param message CreateSecurityHealthAnalyticsCustomModuleRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.securitycentermanagement.v1.CreateSecurityHealthAnalyticsCustomModuleRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateSecurityHealthAnalyticsCustomModuleRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateSecurityHealthAnalyticsCustomModuleRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpdateSecurityHealthAnalyticsCustomModuleRequest. */
                interface IUpdateSecurityHealthAnalyticsCustomModuleRequest {

                    /** UpdateSecurityHealthAnalyticsCustomModuleRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateSecurityHealthAnalyticsCustomModuleRequest securityHealthAnalyticsCustomModule */
                    securityHealthAnalyticsCustomModule?: (google.cloud.securitycentermanagement.v1.ISecurityHealthAnalyticsCustomModule|null);

                    /** UpdateSecurityHealthAnalyticsCustomModuleRequest validateOnly */
                    validateOnly?: (boolean|null);
                }

                /** Represents an UpdateSecurityHealthAnalyticsCustomModuleRequest. */
                class UpdateSecurityHealthAnalyticsCustomModuleRequest implements IUpdateSecurityHealthAnalyticsCustomModuleRequest {

                    /**
                     * Constructs a new UpdateSecurityHealthAnalyticsCustomModuleRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.securitycentermanagement.v1.IUpdateSecurityHealthAnalyticsCustomModuleRequest);

                    /** UpdateSecurityHealthAnalyticsCustomModuleRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateSecurityHealthAnalyticsCustomModuleRequest securityHealthAnalyticsCustomModule. */
                    public securityHealthAnalyticsCustomModule?: (google.cloud.securitycentermanagement.v1.ISecurityHealthAnalyticsCustomModule|null);

                    /** UpdateSecurityHealthAnalyticsCustomModuleRequest validateOnly. */
                    public validateOnly: boolean;

                    /**
                     * Creates a new UpdateSecurityHealthAnalyticsCustomModuleRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateSecurityHealthAnalyticsCustomModuleRequest instance
                     */
                    public static create(properties?: google.cloud.securitycentermanagement.v1.IUpdateSecurityHealthAnalyticsCustomModuleRequest): google.cloud.securitycentermanagement.v1.UpdateSecurityHealthAnalyticsCustomModuleRequest;

                    /**
                     * Encodes the specified UpdateSecurityHealthAnalyticsCustomModuleRequest message. Does not implicitly {@link google.cloud.securitycentermanagement.v1.UpdateSecurityHealthAnalyticsCustomModuleRequest.verify|verify} messages.
                     * @param message UpdateSecurityHealthAnalyticsCustomModuleRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.securitycentermanagement.v1.IUpdateSecurityHealthAnalyticsCustomModuleRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateSecurityHealthAnalyticsCustomModuleRequest message, length delimited. Does not implicitly {@link google.cloud.securitycentermanagement.v1.UpdateSecurityHealthAnalyticsCustomModuleRequest.verify|verify} messages.
                     * @param message UpdateSecurityHealthAnalyticsCustomModuleRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.securitycentermanagement.v1.IUpdateSecurityHealthAnalyticsCustomModuleRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateSecurityHealthAnalyticsCustomModuleRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateSecurityHealthAnalyticsCustomModuleRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.securitycentermanagement.v1.UpdateSecurityHealthAnalyticsCustomModuleRequest;

                    /**
                     * Decodes an UpdateSecurityHealthAnalyticsCustomModuleRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateSecurityHealthAnalyticsCustomModuleRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.securitycentermanagement.v1.UpdateSecurityHealthAnalyticsCustomModuleRequest;

                    /**
                     * Verifies an UpdateSecurityHealthAnalyticsCustomModuleRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateSecurityHealthAnalyticsCustomModuleRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateSecurityHealthAnalyticsCustomModuleRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.securitycentermanagement.v1.UpdateSecurityHealthAnalyticsCustomModuleRequest;

                    /**
                     * Creates a plain object from an UpdateSecurityHealthAnalyticsCustomModuleRequest message. Also converts values to other types if specified.
                     * @param message UpdateSecurityHealthAnalyticsCustomModuleRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.securitycentermanagement.v1.UpdateSecurityHealthAnalyticsCustomModuleRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateSecurityHealthAnalyticsCustomModuleRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdateSecurityHealthAnalyticsCustomModuleRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeleteSecurityHealthAnalyticsCustomModuleRequest. */
                interface IDeleteSecurityHealthAnalyticsCustomModuleRequest {

                    /** DeleteSecurityHealthAnalyticsCustomModuleRequest name */
                    name?: (string|null);

                    /** DeleteSecurityHealthAnalyticsCustomModuleRequest validateOnly */
                    validateOnly?: (boolean|null);
                }

                /** Represents a DeleteSecurityHealthAnalyticsCustomModuleRequest. */
                class DeleteSecurityHealthAnalyticsCustomModuleRequest implements IDeleteSecurityHealthAnalyticsCustomModuleRequest {

                    /**
                     * Constructs a new DeleteSecurityHealthAnalyticsCustomModuleRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.securitycentermanagement.v1.IDeleteSecurityHealthAnalyticsCustomModuleRequest);

                    /** DeleteSecurityHealthAnalyticsCustomModuleRequest name. */
                    public name: string;

                    /** DeleteSecurityHealthAnalyticsCustomModuleRequest validateOnly. */
                    public validateOnly: boolean;

                    /**
                     * Creates a new DeleteSecurityHealthAnalyticsCustomModuleRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteSecurityHealthAnalyticsCustomModuleRequest instance
                     */
                    public static create(properties?: google.cloud.securitycentermanagement.v1.IDeleteSecurityHealthAnalyticsCustomModuleRequest): google.cloud.securitycentermanagement.v1.DeleteSecurityHealthAnalyticsCustomModuleRequest;

                    /**
                     * Encodes the specified DeleteSecurityHealthAnalyticsCustomModuleRequest message. Does not implicitly {@link google.cloud.securitycentermanagement.v1.DeleteSecurityHealthAnalyticsCustomModuleRequest.verify|verify} messages.
                     * @param message DeleteSecurityHealthAnalyticsCustomModuleRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.securitycentermanagement.v1.IDeleteSecurityHealthAnalyticsCustomModuleRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteSecurityHealthAnalyticsCustomModuleRequest message, length delimited. Does not implicitly {@link google.cloud.securitycentermanagement.v1.DeleteSecurityHealthAnalyticsCustomModuleRequest.verify|verify} messages.
                     * @param message DeleteSecurityHealthAnalyticsCustomModuleRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.securitycentermanagement.v1.IDeleteSecurityHealthAnalyticsCustomModuleRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteSecurityHealthAnalyticsCustomModuleRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteSecurityHealthAnalyticsCustomModuleRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.securitycentermanagement.v1.DeleteSecurityHealthAnalyticsCustomModuleRequest;

                    /**
                     * Decodes a DeleteSecurityHealthAnalyticsCustomModuleRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteSecurityHealthAnalyticsCustomModuleRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.securitycentermanagement.v1.DeleteSecurityHealthAnalyticsCustomModuleRequest;

                    /**
                     * Verifies a DeleteSecurityHealthAnalyticsCustomModuleRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteSecurityHealthAnalyticsCustomModuleRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteSecurityHealthAnalyticsCustomModuleRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.securitycentermanagement.v1.DeleteSecurityHealthAnalyticsCustomModuleRequest;

                    /**
                     * Creates a plain object from a DeleteSecurityHealthAnalyticsCustomModuleRequest message. Also converts values to other types if specified.
                     * @param message DeleteSecurityHealthAnalyticsCustomModuleRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.securitycentermanagement.v1.DeleteSecurityHealthAnalyticsCustomModuleRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteSecurityHealthAnalyticsCustomModuleRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeleteSecurityHealthAnalyticsCustomModuleRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a SimulateSecurityHealthAnalyticsCustomModuleRequest. */
                interface ISimulateSecurityHealthAnalyticsCustomModuleRequest {

                    /** SimulateSecurityHealthAnalyticsCustomModuleRequest parent */
                    parent?: (string|null);

                    /** SimulateSecurityHealthAnalyticsCustomModuleRequest customConfig */
                    customConfig?: (google.cloud.securitycentermanagement.v1.ICustomConfig|null);

                    /** SimulateSecurityHealthAnalyticsCustomModuleRequest resource */
                    resource?: (google.cloud.securitycentermanagement.v1.SimulateSecurityHealthAnalyticsCustomModuleRequest.ISimulatedResource|null);
                }

                /** Represents a SimulateSecurityHealthAnalyticsCustomModuleRequest. */
                class SimulateSecurityHealthAnalyticsCustomModuleRequest implements ISimulateSecurityHealthAnalyticsCustomModuleRequest {

                    /**
                     * Constructs a new SimulateSecurityHealthAnalyticsCustomModuleRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.securitycentermanagement.v1.ISimulateSecurityHealthAnalyticsCustomModuleRequest);

                    /** SimulateSecurityHealthAnalyticsCustomModuleRequest parent. */
                    public parent: string;

                    /** SimulateSecurityHealthAnalyticsCustomModuleRequest customConfig. */
                    public customConfig?: (google.cloud.securitycentermanagement.v1.ICustomConfig|null);

                    /** SimulateSecurityHealthAnalyticsCustomModuleRequest resource. */
                    public resource?: (google.cloud.securitycentermanagement.v1.SimulateSecurityHealthAnalyticsCustomModuleRequest.ISimulatedResource|null);

                    /**
                     * Creates a new SimulateSecurityHealthAnalyticsCustomModuleRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SimulateSecurityHealthAnalyticsCustomModuleRequest instance
                     */
                    public static create(properties?: google.cloud.securitycentermanagement.v1.ISimulateSecurityHealthAnalyticsCustomModuleRequest): google.cloud.securitycentermanagement.v1.SimulateSecurityHealthAnalyticsCustomModuleRequest;

                    /**
                     * Encodes the specified SimulateSecurityHealthAnalyticsCustomModuleRequest message. Does not implicitly {@link google.cloud.securitycentermanagement.v1.SimulateSecurityHealthAnalyticsCustomModuleRequest.verify|verify} messages.
                     * @param message SimulateSecurityHealthAnalyticsCustomModuleRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.securitycentermanagement.v1.ISimulateSecurityHealthAnalyticsCustomModuleRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SimulateSecurityHealthAnalyticsCustomModuleRequest message, length delimited. Does not implicitly {@link google.cloud.securitycentermanagement.v1.SimulateSecurityHealthAnalyticsCustomModuleRequest.verify|verify} messages.
                     * @param message SimulateSecurityHealthAnalyticsCustomModuleRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.securitycentermanagement.v1.ISimulateSecurityHealthAnalyticsCustomModuleRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SimulateSecurityHealthAnalyticsCustomModuleRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SimulateSecurityHealthAnalyticsCustomModuleRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.securitycentermanagement.v1.SimulateSecurityHealthAnalyticsCustomModuleRequest;

                    /**
                     * Decodes a SimulateSecurityHealthAnalyticsCustomModuleRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SimulateSecurityHealthAnalyticsCustomModuleRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.securitycentermanagement.v1.SimulateSecurityHealthAnalyticsCustomModuleRequest;

                    /**
                     * Verifies a SimulateSecurityHealthAnalyticsCustomModuleRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SimulateSecurityHealthAnalyticsCustomModuleRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SimulateSecurityHealthAnalyticsCustomModuleRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.securitycentermanagement.v1.SimulateSecurityHealthAnalyticsCustomModuleRequest;

                    /**
                     * Creates a plain object from a SimulateSecurityHealthAnalyticsCustomModuleRequest message. Also converts values to other types if specified.
                     * @param message SimulateSecurityHealthAnalyticsCustomModuleRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.securitycentermanagement.v1.SimulateSecurityHealthAnalyticsCustomModuleRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SimulateSecurityHealthAnalyticsCustomModuleRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for SimulateSecurityHealthAnalyticsCustomModuleRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace SimulateSecurityHealthAnalyticsCustomModuleRequest {

                    /** Properties of a SimulatedResource. */
                    interface ISimulatedResource {

                        /** SimulatedResource resourceType */
                        resourceType?: (string|null);

                        /** SimulatedResource resourceData */
                        resourceData?: (google.protobuf.IStruct|null);

                        /** SimulatedResource iamPolicyData */
                        iamPolicyData?: (google.iam.v1.IPolicy|null);
                    }

                    /** Represents a SimulatedResource. */
                    class SimulatedResource implements ISimulatedResource {

                        /**
                         * Constructs a new SimulatedResource.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.securitycentermanagement.v1.SimulateSecurityHealthAnalyticsCustomModuleRequest.ISimulatedResource);

                        /** SimulatedResource resourceType. */
                        public resourceType: string;

                        /** SimulatedResource resourceData. */
                        public resourceData?: (google.protobuf.IStruct|null);

                        /** SimulatedResource iamPolicyData. */
                        public iamPolicyData?: (google.iam.v1.IPolicy|null);

                        /**
                         * Creates a new SimulatedResource instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns SimulatedResource instance
                         */
                        public static create(properties?: google.cloud.securitycentermanagement.v1.SimulateSecurityHealthAnalyticsCustomModuleRequest.ISimulatedResource): google.cloud.securitycentermanagement.v1.SimulateSecurityHealthAnalyticsCustomModuleRequest.SimulatedResource;

                        /**
                         * Encodes the specified SimulatedResource message. Does not implicitly {@link google.cloud.securitycentermanagement.v1.SimulateSecurityHealthAnalyticsCustomModuleRequest.SimulatedResource.verify|verify} messages.
                         * @param message SimulatedResource message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.securitycentermanagement.v1.SimulateSecurityHealthAnalyticsCustomModuleRequest.ISimulatedResource, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified SimulatedResource message, length delimited. Does not implicitly {@link google.cloud.securitycentermanagement.v1.SimulateSecurityHealthAnalyticsCustomModuleRequest.SimulatedResource.verify|verify} messages.
                         * @param message SimulatedResource message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.securitycentermanagement.v1.SimulateSecurityHealthAnalyticsCustomModuleRequest.ISimulatedResource, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a SimulatedResource message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns SimulatedResource
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.securitycentermanagement.v1.SimulateSecurityHealthAnalyticsCustomModuleRequest.SimulatedResource;

                        /**
                         * Decodes a SimulatedResource message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns SimulatedResource
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.securitycentermanagement.v1.SimulateSecurityHealthAnalyticsCustomModuleRequest.SimulatedResource;

                        /**
                         * Verifies a SimulatedResource message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a SimulatedResource message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns SimulatedResource
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.securitycentermanagement.v1.SimulateSecurityHealthAnalyticsCustomModuleRequest.SimulatedResource;

                        /**
                         * Creates a plain object from a SimulatedResource message. Also converts values to other types if specified.
                         * @param message SimulatedResource
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.securitycentermanagement.v1.SimulateSecurityHealthAnalyticsCustomModuleRequest.SimulatedResource, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this SimulatedResource to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for SimulatedResource
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }
                }

                /** Properties of a SimulatedFinding. */
                interface ISimulatedFinding {

                    /** SimulatedFinding name */
                    name?: (string|null);

                    /** SimulatedFinding parent */
                    parent?: (string|null);

                    /** SimulatedFinding resourceName */
                    resourceName?: (string|null);

                    /** SimulatedFinding category */
                    category?: (string|null);

                    /** SimulatedFinding state */
                    state?: (google.cloud.securitycentermanagement.v1.SimulatedFinding.State|keyof typeof google.cloud.securitycentermanagement.v1.SimulatedFinding.State|null);

                    /** SimulatedFinding sourceProperties */
                    sourceProperties?: ({ [k: string]: google.protobuf.IValue }|null);

                    /** SimulatedFinding eventTime */
                    eventTime?: (google.protobuf.ITimestamp|null);

                    /** SimulatedFinding severity */
                    severity?: (google.cloud.securitycentermanagement.v1.SimulatedFinding.Severity|keyof typeof google.cloud.securitycentermanagement.v1.SimulatedFinding.Severity|null);

                    /** SimulatedFinding findingClass */
                    findingClass?: (google.cloud.securitycentermanagement.v1.SimulatedFinding.FindingClass|keyof typeof google.cloud.securitycentermanagement.v1.SimulatedFinding.FindingClass|null);
                }

                /** Represents a SimulatedFinding. */
                class SimulatedFinding implements ISimulatedFinding {

                    /**
                     * Constructs a new SimulatedFinding.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.securitycentermanagement.v1.ISimulatedFinding);

                    /** SimulatedFinding name. */
                    public name: string;

                    /** SimulatedFinding parent. */
                    public parent: string;

                    /** SimulatedFinding resourceName. */
                    public resourceName: string;

                    /** SimulatedFinding category. */
                    public category: string;

                    /** SimulatedFinding state. */
                    public state: (google.cloud.securitycentermanagement.v1.SimulatedFinding.State|keyof typeof google.cloud.securitycentermanagement.v1.SimulatedFinding.State);

                    /** SimulatedFinding sourceProperties. */
                    public sourceProperties: { [k: string]: google.protobuf.IValue };

                    /** SimulatedFinding eventTime. */
                    public eventTime?: (google.protobuf.ITimestamp|null);

                    /** SimulatedFinding severity. */
                    public severity: (google.cloud.securitycentermanagement.v1.SimulatedFinding.Severity|keyof typeof google.cloud.securitycentermanagement.v1.SimulatedFinding.Severity);

                    /** SimulatedFinding findingClass. */
                    public findingClass: (google.cloud.securitycentermanagement.v1.SimulatedFinding.FindingClass|keyof typeof google.cloud.securitycentermanagement.v1.SimulatedFinding.FindingClass);

                    /**
                     * Creates a new SimulatedFinding instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SimulatedFinding instance
                     */
                    public static create(properties?: google.cloud.securitycentermanagement.v1.ISimulatedFinding): google.cloud.securitycentermanagement.v1.SimulatedFinding;

                    /**
                     * Encodes the specified SimulatedFinding message. Does not implicitly {@link google.cloud.securitycentermanagement.v1.SimulatedFinding.verify|verify} messages.
                     * @param message SimulatedFinding message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.securitycentermanagement.v1.ISimulatedFinding, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SimulatedFinding message, length delimited. Does not implicitly {@link google.cloud.securitycentermanagement.v1.SimulatedFinding.verify|verify} messages.
                     * @param message SimulatedFinding message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.securitycentermanagement.v1.ISimulatedFinding, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SimulatedFinding message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SimulatedFinding
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.securitycentermanagement.v1.SimulatedFinding;

                    /**
                     * Decodes a SimulatedFinding message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SimulatedFinding
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.securitycentermanagement.v1.SimulatedFinding;

                    /**
                     * Verifies a SimulatedFinding message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SimulatedFinding message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SimulatedFinding
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.securitycentermanagement.v1.SimulatedFinding;

                    /**
                     * Creates a plain object from a SimulatedFinding message. Also converts values to other types if specified.
                     * @param message SimulatedFinding
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.securitycentermanagement.v1.SimulatedFinding, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SimulatedFinding to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for SimulatedFinding
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace SimulatedFinding {

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        ACTIVE = 1,
                        INACTIVE = 2
                    }

                    /** Severity enum. */
                    enum Severity {
                        SEVERITY_UNSPECIFIED = 0,
                        CRITICAL = 1,
                        HIGH = 2,
                        MEDIUM = 3,
                        LOW = 4
                    }

                    /** FindingClass enum. */
                    enum FindingClass {
                        FINDING_CLASS_UNSPECIFIED = 0,
                        THREAT = 1,
                        VULNERABILITY = 2,
                        MISCONFIGURATION = 3,
                        OBSERVATION = 4,
                        SCC_ERROR = 5,
                        POSTURE_VIOLATION = 6,
                        TOXIC_COMBINATION = 7
                    }
                }

                /** Properties of a SimulateSecurityHealthAnalyticsCustomModuleResponse. */
                interface ISimulateSecurityHealthAnalyticsCustomModuleResponse {

                    /** SimulateSecurityHealthAnalyticsCustomModuleResponse result */
                    result?: (google.cloud.securitycentermanagement.v1.SimulateSecurityHealthAnalyticsCustomModuleResponse.ISimulatedResult|null);
                }

                /** Represents a SimulateSecurityHealthAnalyticsCustomModuleResponse. */
                class SimulateSecurityHealthAnalyticsCustomModuleResponse implements ISimulateSecurityHealthAnalyticsCustomModuleResponse {

                    /**
                     * Constructs a new SimulateSecurityHealthAnalyticsCustomModuleResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.securitycentermanagement.v1.ISimulateSecurityHealthAnalyticsCustomModuleResponse);

                    /** SimulateSecurityHealthAnalyticsCustomModuleResponse result. */
                    public result?: (google.cloud.securitycentermanagement.v1.SimulateSecurityHealthAnalyticsCustomModuleResponse.ISimulatedResult|null);

                    /**
                     * Creates a new SimulateSecurityHealthAnalyticsCustomModuleResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SimulateSecurityHealthAnalyticsCustomModuleResponse instance
                     */
                    public static create(properties?: google.cloud.securitycentermanagement.v1.ISimulateSecurityHealthAnalyticsCustomModuleResponse): google.cloud.securitycentermanagement.v1.SimulateSecurityHealthAnalyticsCustomModuleResponse;

                    /**
                     * Encodes the specified SimulateSecurityHealthAnalyticsCustomModuleResponse message. Does not implicitly {@link google.cloud.securitycentermanagement.v1.SimulateSecurityHealthAnalyticsCustomModuleResponse.verify|verify} messages.
                     * @param message SimulateSecurityHealthAnalyticsCustomModuleResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.securitycentermanagement.v1.ISimulateSecurityHealthAnalyticsCustomModuleResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SimulateSecurityHealthAnalyticsCustomModuleResponse message, length delimited. Does not implicitly {@link google.cloud.securitycentermanagement.v1.SimulateSecurityHealthAnalyticsCustomModuleResponse.verify|verify} messages.
                     * @param message SimulateSecurityHealthAnalyticsCustomModuleResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.securitycentermanagement.v1.ISimulateSecurityHealthAnalyticsCustomModuleResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SimulateSecurityHealthAnalyticsCustomModuleResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SimulateSecurityHealthAnalyticsCustomModuleResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.securitycentermanagement.v1.SimulateSecurityHealthAnalyticsCustomModuleResponse;

                    /**
                     * Decodes a SimulateSecurityHealthAnalyticsCustomModuleResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SimulateSecurityHealthAnalyticsCustomModuleResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.securitycentermanagement.v1.SimulateSecurityHealthAnalyticsCustomModuleResponse;

                    /**
                     * Verifies a SimulateSecurityHealthAnalyticsCustomModuleResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SimulateSecurityHealthAnalyticsCustomModuleResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SimulateSecurityHealthAnalyticsCustomModuleResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.securitycentermanagement.v1.SimulateSecurityHealthAnalyticsCustomModuleResponse;

                    /**
                     * Creates a plain object from a SimulateSecurityHealthAnalyticsCustomModuleResponse message. Also converts values to other types if specified.
                     * @param message SimulateSecurityHealthAnalyticsCustomModuleResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.securitycentermanagement.v1.SimulateSecurityHealthAnalyticsCustomModuleResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SimulateSecurityHealthAnalyticsCustomModuleResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for SimulateSecurityHealthAnalyticsCustomModuleResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace SimulateSecurityHealthAnalyticsCustomModuleResponse {

                    /** Properties of a SimulatedResult. */
                    interface ISimulatedResult {

                        /** SimulatedResult finding */
                        finding?: (google.cloud.securitycentermanagement.v1.ISimulatedFinding|null);

                        /** SimulatedResult noViolation */
                        noViolation?: (google.protobuf.IEmpty|null);

                        /** SimulatedResult error */
                        error?: (google.rpc.IStatus|null);
                    }

                    /** Represents a SimulatedResult. */
                    class SimulatedResult implements ISimulatedResult {

                        /**
                         * Constructs a new SimulatedResult.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.securitycentermanagement.v1.SimulateSecurityHealthAnalyticsCustomModuleResponse.ISimulatedResult);

                        /** SimulatedResult finding. */
                        public finding?: (google.cloud.securitycentermanagement.v1.ISimulatedFinding|null);

                        /** SimulatedResult noViolation. */
                        public noViolation?: (google.protobuf.IEmpty|null);

                        /** SimulatedResult error. */
                        public error?: (google.rpc.IStatus|null);

                        /** SimulatedResult result. */
                        public result?: ("finding"|"noViolation"|"error");

                        /**
                         * Creates a new SimulatedResult instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns SimulatedResult instance
                         */
                        public static create(properties?: google.cloud.securitycentermanagement.v1.SimulateSecurityHealthAnalyticsCustomModuleResponse.ISimulatedResult): google.cloud.securitycentermanagement.v1.SimulateSecurityHealthAnalyticsCustomModuleResponse.SimulatedResult;

                        /**
                         * Encodes the specified SimulatedResult message. Does not implicitly {@link google.cloud.securitycentermanagement.v1.SimulateSecurityHealthAnalyticsCustomModuleResponse.SimulatedResult.verify|verify} messages.
                         * @param message SimulatedResult message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.securitycentermanagement.v1.SimulateSecurityHealthAnalyticsCustomModuleResponse.ISimulatedResult, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified SimulatedResult message, length delimited. Does not implicitly {@link google.cloud.securitycentermanagement.v1.SimulateSecurityHealthAnalyticsCustomModuleResponse.SimulatedResult.verify|verify} messages.
                         * @param message SimulatedResult message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.securitycentermanagement.v1.SimulateSecurityHealthAnalyticsCustomModuleResponse.ISimulatedResult, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a SimulatedResult message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns SimulatedResult
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.securitycentermanagement.v1.SimulateSecurityHealthAnalyticsCustomModuleResponse.SimulatedResult;

                        /**
                         * Decodes a SimulatedResult message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns SimulatedResult
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.securitycentermanagement.v1.SimulateSecurityHealthAnalyticsCustomModuleResponse.SimulatedResult;

                        /**
                         * Verifies a SimulatedResult message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a SimulatedResult message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns SimulatedResult
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.securitycentermanagement.v1.SimulateSecurityHealthAnalyticsCustomModuleResponse.SimulatedResult;

                        /**
                         * Creates a plain object from a SimulatedResult message. Also converts values to other types if specified.
                         * @param message SimulatedResult
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.securitycentermanagement.v1.SimulateSecurityHealthAnalyticsCustomModuleResponse.SimulatedResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this SimulatedResult to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for SimulatedResult
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }
                }

                /** Properties of an EffectiveEventThreatDetectionCustomModule. */
                interface IEffectiveEventThreatDetectionCustomModule {

                    /** EffectiveEventThreatDetectionCustomModule name */
                    name?: (string|null);

                    /** EffectiveEventThreatDetectionCustomModule config */
                    config?: (google.protobuf.IStruct|null);

                    /** EffectiveEventThreatDetectionCustomModule enablementState */
                    enablementState?: (google.cloud.securitycentermanagement.v1.EffectiveEventThreatDetectionCustomModule.EnablementState|keyof typeof google.cloud.securitycentermanagement.v1.EffectiveEventThreatDetectionCustomModule.EnablementState|null);

                    /** EffectiveEventThreatDetectionCustomModule type */
                    type?: (string|null);

                    /** EffectiveEventThreatDetectionCustomModule displayName */
                    displayName?: (string|null);

                    /** EffectiveEventThreatDetectionCustomModule description */
                    description?: (string|null);
                }

                /** Represents an EffectiveEventThreatDetectionCustomModule. */
                class EffectiveEventThreatDetectionCustomModule implements IEffectiveEventThreatDetectionCustomModule {

                    /**
                     * Constructs a new EffectiveEventThreatDetectionCustomModule.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.securitycentermanagement.v1.IEffectiveEventThreatDetectionCustomModule);

                    /** EffectiveEventThreatDetectionCustomModule name. */
                    public name: string;

                    /** EffectiveEventThreatDetectionCustomModule config. */
                    public config?: (google.protobuf.IStruct|null);

                    /** EffectiveEventThreatDetectionCustomModule enablementState. */
                    public enablementState: (google.cloud.securitycentermanagement.v1.EffectiveEventThreatDetectionCustomModule.EnablementState|keyof typeof google.cloud.securitycentermanagement.v1.EffectiveEventThreatDetectionCustomModule.EnablementState);

                    /** EffectiveEventThreatDetectionCustomModule type. */
                    public type: string;

                    /** EffectiveEventThreatDetectionCustomModule displayName. */
                    public displayName: string;

                    /** EffectiveEventThreatDetectionCustomModule description. */
                    public description: string;

                    /**
                     * Creates a new EffectiveEventThreatDetectionCustomModule instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns EffectiveEventThreatDetectionCustomModule instance
                     */
                    public static create(properties?: google.cloud.securitycentermanagement.v1.IEffectiveEventThreatDetectionCustomModule): google.cloud.securitycentermanagement.v1.EffectiveEventThreatDetectionCustomModule;

                    /**
                     * Encodes the specified EffectiveEventThreatDetectionCustomModule message. Does not implicitly {@link google.cloud.securitycentermanagement.v1.EffectiveEventThreatDetectionCustomModule.verify|verify} messages.
                     * @param message EffectiveEventThreatDetectionCustomModule message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.securitycentermanagement.v1.IEffectiveEventThreatDetectionCustomModule, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified EffectiveEventThreatDetectionCustomModule message, length delimited. Does not implicitly {@link google.cloud.securitycentermanagement.v1.EffectiveEventThreatDetectionCustomModule.verify|verify} messages.
                     * @param message EffectiveEventThreatDetectionCustomModule message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.securitycentermanagement.v1.IEffectiveEventThreatDetectionCustomModule, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an EffectiveEventThreatDetectionCustomModule message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns EffectiveEventThreatDetectionCustomModule
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.securitycentermanagement.v1.EffectiveEventThreatDetectionCustomModule;

                    /**
                     * Decodes an EffectiveEventThreatDetectionCustomModule message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns EffectiveEventThreatDetectionCustomModule
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.securitycentermanagement.v1.EffectiveEventThreatDetectionCustomModule;

                    /**
                     * Verifies an EffectiveEventThreatDetectionCustomModule message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an EffectiveEventThreatDetectionCustomModule message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns EffectiveEventThreatDetectionCustomModule
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.securitycentermanagement.v1.EffectiveEventThreatDetectionCustomModule;

                    /**
                     * Creates a plain object from an EffectiveEventThreatDetectionCustomModule message. Also converts values to other types if specified.
                     * @param message EffectiveEventThreatDetectionCustomModule
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.securitycentermanagement.v1.EffectiveEventThreatDetectionCustomModule, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this EffectiveEventThreatDetectionCustomModule to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for EffectiveEventThreatDetectionCustomModule
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace EffectiveEventThreatDetectionCustomModule {

                    /** EnablementState enum. */
                    enum EnablementState {
                        ENABLEMENT_STATE_UNSPECIFIED = 0,
                        ENABLED = 1,
                        DISABLED = 2
                    }
                }

                /** Properties of a ListEffectiveEventThreatDetectionCustomModulesRequest. */
                interface IListEffectiveEventThreatDetectionCustomModulesRequest {

                    /** ListEffectiveEventThreatDetectionCustomModulesRequest parent */
                    parent?: (string|null);

                    /** ListEffectiveEventThreatDetectionCustomModulesRequest pageSize */
                    pageSize?: (number|null);

                    /** ListEffectiveEventThreatDetectionCustomModulesRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListEffectiveEventThreatDetectionCustomModulesRequest. */
                class ListEffectiveEventThreatDetectionCustomModulesRequest implements IListEffectiveEventThreatDetectionCustomModulesRequest {

                    /**
                     * Constructs a new ListEffectiveEventThreatDetectionCustomModulesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.securitycentermanagement.v1.IListEffectiveEventThreatDetectionCustomModulesRequest);

                    /** ListEffectiveEventThreatDetectionCustomModulesRequest parent. */
                    public parent: string;

                    /** ListEffectiveEventThreatDetectionCustomModulesRequest pageSize. */
                    public pageSize: number;

                    /** ListEffectiveEventThreatDetectionCustomModulesRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListEffectiveEventThreatDetectionCustomModulesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListEffectiveEventThreatDetectionCustomModulesRequest instance
                     */
                    public static create(properties?: google.cloud.securitycentermanagement.v1.IListEffectiveEventThreatDetectionCustomModulesRequest): google.cloud.securitycentermanagement.v1.ListEffectiveEventThreatDetectionCustomModulesRequest;

                    /**
                     * Encodes the specified ListEffectiveEventThreatDetectionCustomModulesRequest message. Does not implicitly {@link google.cloud.securitycentermanagement.v1.ListEffectiveEventThreatDetectionCustomModulesRequest.verify|verify} messages.
                     * @param message ListEffectiveEventThreatDetectionCustomModulesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.securitycentermanagement.v1.IListEffectiveEventThreatDetectionCustomModulesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListEffectiveEventThreatDetectionCustomModulesRequest message, length delimited. Does not implicitly {@link google.cloud.securitycentermanagement.v1.ListEffectiveEventThreatDetectionCustomModulesRequest.verify|verify} messages.
                     * @param message ListEffectiveEventThreatDetectionCustomModulesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.securitycentermanagement.v1.IListEffectiveEventThreatDetectionCustomModulesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListEffectiveEventThreatDetectionCustomModulesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListEffectiveEventThreatDetectionCustomModulesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.securitycentermanagement.v1.ListEffectiveEventThreatDetectionCustomModulesRequest;

                    /**
                     * Decodes a ListEffectiveEventThreatDetectionCustomModulesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListEffectiveEventThreatDetectionCustomModulesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.securitycentermanagement.v1.ListEffectiveEventThreatDetectionCustomModulesRequest;

                    /**
                     * Verifies a ListEffectiveEventThreatDetectionCustomModulesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListEffectiveEventThreatDetectionCustomModulesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListEffectiveEventThreatDetectionCustomModulesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.securitycentermanagement.v1.ListEffectiveEventThreatDetectionCustomModulesRequest;

                    /**
                     * Creates a plain object from a ListEffectiveEventThreatDetectionCustomModulesRequest message. Also converts values to other types if specified.
                     * @param message ListEffectiveEventThreatDetectionCustomModulesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.securitycentermanagement.v1.ListEffectiveEventThreatDetectionCustomModulesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListEffectiveEventThreatDetectionCustomModulesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListEffectiveEventThreatDetectionCustomModulesRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListEffectiveEventThreatDetectionCustomModulesResponse. */
                interface IListEffectiveEventThreatDetectionCustomModulesResponse {

                    /** ListEffectiveEventThreatDetectionCustomModulesResponse effectiveEventThreatDetectionCustomModules */
                    effectiveEventThreatDetectionCustomModules?: (google.cloud.securitycentermanagement.v1.IEffectiveEventThreatDetectionCustomModule[]|null);

                    /** ListEffectiveEventThreatDetectionCustomModulesResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListEffectiveEventThreatDetectionCustomModulesResponse. */
                class ListEffectiveEventThreatDetectionCustomModulesResponse implements IListEffectiveEventThreatDetectionCustomModulesResponse {

                    /**
                     * Constructs a new ListEffectiveEventThreatDetectionCustomModulesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.securitycentermanagement.v1.IListEffectiveEventThreatDetectionCustomModulesResponse);

                    /** ListEffectiveEventThreatDetectionCustomModulesResponse effectiveEventThreatDetectionCustomModules. */
                    public effectiveEventThreatDetectionCustomModules: google.cloud.securitycentermanagement.v1.IEffectiveEventThreatDetectionCustomModule[];

                    /** ListEffectiveEventThreatDetectionCustomModulesResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListEffectiveEventThreatDetectionCustomModulesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListEffectiveEventThreatDetectionCustomModulesResponse instance
                     */
                    public static create(properties?: google.cloud.securitycentermanagement.v1.IListEffectiveEventThreatDetectionCustomModulesResponse): google.cloud.securitycentermanagement.v1.ListEffectiveEventThreatDetectionCustomModulesResponse;

                    /**
                     * Encodes the specified ListEffectiveEventThreatDetectionCustomModulesResponse message. Does not implicitly {@link google.cloud.securitycentermanagement.v1.ListEffectiveEventThreatDetectionCustomModulesResponse.verify|verify} messages.
                     * @param message ListEffectiveEventThreatDetectionCustomModulesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.securitycentermanagement.v1.IListEffectiveEventThreatDetectionCustomModulesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListEffectiveEventThreatDetectionCustomModulesResponse message, length delimited. Does not implicitly {@link google.cloud.securitycentermanagement.v1.ListEffectiveEventThreatDetectionCustomModulesResponse.verify|verify} messages.
                     * @param message ListEffectiveEventThreatDetectionCustomModulesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.securitycentermanagement.v1.IListEffectiveEventThreatDetectionCustomModulesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListEffectiveEventThreatDetectionCustomModulesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListEffectiveEventThreatDetectionCustomModulesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.securitycentermanagement.v1.ListEffectiveEventThreatDetectionCustomModulesResponse;

                    /**
                     * Decodes a ListEffectiveEventThreatDetectionCustomModulesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListEffectiveEventThreatDetectionCustomModulesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.securitycentermanagement.v1.ListEffectiveEventThreatDetectionCustomModulesResponse;

                    /**
                     * Verifies a ListEffectiveEventThreatDetectionCustomModulesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListEffectiveEventThreatDetectionCustomModulesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListEffectiveEventThreatDetectionCustomModulesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.securitycentermanagement.v1.ListEffectiveEventThreatDetectionCustomModulesResponse;

                    /**
                     * Creates a plain object from a ListEffectiveEventThreatDetectionCustomModulesResponse message. Also converts values to other types if specified.
                     * @param message ListEffectiveEventThreatDetectionCustomModulesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.securitycentermanagement.v1.ListEffectiveEventThreatDetectionCustomModulesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListEffectiveEventThreatDetectionCustomModulesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListEffectiveEventThreatDetectionCustomModulesResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetEffectiveEventThreatDetectionCustomModuleRequest. */
                interface IGetEffectiveEventThreatDetectionCustomModuleRequest {

                    /** GetEffectiveEventThreatDetectionCustomModuleRequest name */
                    name?: (string|null);
                }

                /** Represents a GetEffectiveEventThreatDetectionCustomModuleRequest. */
                class GetEffectiveEventThreatDetectionCustomModuleRequest implements IGetEffectiveEventThreatDetectionCustomModuleRequest {

                    /**
                     * Constructs a new GetEffectiveEventThreatDetectionCustomModuleRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.securitycentermanagement.v1.IGetEffectiveEventThreatDetectionCustomModuleRequest);

                    /** GetEffectiveEventThreatDetectionCustomModuleRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetEffectiveEventThreatDetectionCustomModuleRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetEffectiveEventThreatDetectionCustomModuleRequest instance
                     */
                    public static create(properties?: google.cloud.securitycentermanagement.v1.IGetEffectiveEventThreatDetectionCustomModuleRequest): google.cloud.securitycentermanagement.v1.GetEffectiveEventThreatDetectionCustomModuleRequest;

                    /**
                     * Encodes the specified GetEffectiveEventThreatDetectionCustomModuleRequest message. Does not implicitly {@link google.cloud.securitycentermanagement.v1.GetEffectiveEventThreatDetectionCustomModuleRequest.verify|verify} messages.
                     * @param message GetEffectiveEventThreatDetectionCustomModuleRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.securitycentermanagement.v1.IGetEffectiveEventThreatDetectionCustomModuleRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetEffectiveEventThreatDetectionCustomModuleRequest message, length delimited. Does not implicitly {@link google.cloud.securitycentermanagement.v1.GetEffectiveEventThreatDetectionCustomModuleRequest.verify|verify} messages.
                     * @param message GetEffectiveEventThreatDetectionCustomModuleRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.securitycentermanagement.v1.IGetEffectiveEventThreatDetectionCustomModuleRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetEffectiveEventThreatDetectionCustomModuleRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetEffectiveEventThreatDetectionCustomModuleRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.securitycentermanagement.v1.GetEffectiveEventThreatDetectionCustomModuleRequest;

                    /**
                     * Decodes a GetEffectiveEventThreatDetectionCustomModuleRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetEffectiveEventThreatDetectionCustomModuleRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.securitycentermanagement.v1.GetEffectiveEventThreatDetectionCustomModuleRequest;

                    /**
                     * Verifies a GetEffectiveEventThreatDetectionCustomModuleRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetEffectiveEventThreatDetectionCustomModuleRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetEffectiveEventThreatDetectionCustomModuleRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.securitycentermanagement.v1.GetEffectiveEventThreatDetectionCustomModuleRequest;

                    /**
                     * Creates a plain object from a GetEffectiveEventThreatDetectionCustomModuleRequest message. Also converts values to other types if specified.
                     * @param message GetEffectiveEventThreatDetectionCustomModuleRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.securitycentermanagement.v1.GetEffectiveEventThreatDetectionCustomModuleRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetEffectiveEventThreatDetectionCustomModuleRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetEffectiveEventThreatDetectionCustomModuleRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an EventThreatDetectionCustomModule. */
                interface IEventThreatDetectionCustomModule {

                    /** EventThreatDetectionCustomModule name */
                    name?: (string|null);

                    /** EventThreatDetectionCustomModule config */
                    config?: (google.protobuf.IStruct|null);

                    /** EventThreatDetectionCustomModule ancestorModule */
                    ancestorModule?: (string|null);

                    /** EventThreatDetectionCustomModule enablementState */
                    enablementState?: (google.cloud.securitycentermanagement.v1.EventThreatDetectionCustomModule.EnablementState|keyof typeof google.cloud.securitycentermanagement.v1.EventThreatDetectionCustomModule.EnablementState|null);

                    /** EventThreatDetectionCustomModule type */
                    type?: (string|null);

                    /** EventThreatDetectionCustomModule displayName */
                    displayName?: (string|null);

                    /** EventThreatDetectionCustomModule description */
                    description?: (string|null);

                    /** EventThreatDetectionCustomModule updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** EventThreatDetectionCustomModule lastEditor */
                    lastEditor?: (string|null);
                }

                /** Represents an EventThreatDetectionCustomModule. */
                class EventThreatDetectionCustomModule implements IEventThreatDetectionCustomModule {

                    /**
                     * Constructs a new EventThreatDetectionCustomModule.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.securitycentermanagement.v1.IEventThreatDetectionCustomModule);

                    /** EventThreatDetectionCustomModule name. */
                    public name: string;

                    /** EventThreatDetectionCustomModule config. */
                    public config?: (google.protobuf.IStruct|null);

                    /** EventThreatDetectionCustomModule ancestorModule. */
                    public ancestorModule: string;

                    /** EventThreatDetectionCustomModule enablementState. */
                    public enablementState: (google.cloud.securitycentermanagement.v1.EventThreatDetectionCustomModule.EnablementState|keyof typeof google.cloud.securitycentermanagement.v1.EventThreatDetectionCustomModule.EnablementState);

                    /** EventThreatDetectionCustomModule type. */
                    public type: string;

                    /** EventThreatDetectionCustomModule displayName. */
                    public displayName: string;

                    /** EventThreatDetectionCustomModule description. */
                    public description: string;

                    /** EventThreatDetectionCustomModule updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** EventThreatDetectionCustomModule lastEditor. */
                    public lastEditor: string;

                    /**
                     * Creates a new EventThreatDetectionCustomModule instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns EventThreatDetectionCustomModule instance
                     */
                    public static create(properties?: google.cloud.securitycentermanagement.v1.IEventThreatDetectionCustomModule): google.cloud.securitycentermanagement.v1.EventThreatDetectionCustomModule;

                    /**
                     * Encodes the specified EventThreatDetectionCustomModule message. Does not implicitly {@link google.cloud.securitycentermanagement.v1.EventThreatDetectionCustomModule.verify|verify} messages.
                     * @param message EventThreatDetectionCustomModule message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.securitycentermanagement.v1.IEventThreatDetectionCustomModule, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified EventThreatDetectionCustomModule message, length delimited. Does not implicitly {@link google.cloud.securitycentermanagement.v1.EventThreatDetectionCustomModule.verify|verify} messages.
                     * @param message EventThreatDetectionCustomModule message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.securitycentermanagement.v1.IEventThreatDetectionCustomModule, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an EventThreatDetectionCustomModule message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns EventThreatDetectionCustomModule
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.securitycentermanagement.v1.EventThreatDetectionCustomModule;

                    /**
                     * Decodes an EventThreatDetectionCustomModule message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns EventThreatDetectionCustomModule
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.securitycentermanagement.v1.EventThreatDetectionCustomModule;

                    /**
                     * Verifies an EventThreatDetectionCustomModule message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an EventThreatDetectionCustomModule message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns EventThreatDetectionCustomModule
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.securitycentermanagement.v1.EventThreatDetectionCustomModule;

                    /**
                     * Creates a plain object from an EventThreatDetectionCustomModule message. Also converts values to other types if specified.
                     * @param message EventThreatDetectionCustomModule
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.securitycentermanagement.v1.EventThreatDetectionCustomModule, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this EventThreatDetectionCustomModule to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for EventThreatDetectionCustomModule
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace EventThreatDetectionCustomModule {

                    /** EnablementState enum. */
                    enum EnablementState {
                        ENABLEMENT_STATE_UNSPECIFIED = 0,
                        ENABLED = 1,
                        DISABLED = 2,
                        INHERITED = 3
                    }
                }

                /** Properties of a ListEventThreatDetectionCustomModulesRequest. */
                interface IListEventThreatDetectionCustomModulesRequest {

                    /** ListEventThreatDetectionCustomModulesRequest parent */
                    parent?: (string|null);

                    /** ListEventThreatDetectionCustomModulesRequest pageSize */
                    pageSize?: (number|null);

                    /** ListEventThreatDetectionCustomModulesRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListEventThreatDetectionCustomModulesRequest. */
                class ListEventThreatDetectionCustomModulesRequest implements IListEventThreatDetectionCustomModulesRequest {

                    /**
                     * Constructs a new ListEventThreatDetectionCustomModulesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.securitycentermanagement.v1.IListEventThreatDetectionCustomModulesRequest);

                    /** ListEventThreatDetectionCustomModulesRequest parent. */
                    public parent: string;

                    /** ListEventThreatDetectionCustomModulesRequest pageSize. */
                    public pageSize: number;

                    /** ListEventThreatDetectionCustomModulesRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListEventThreatDetectionCustomModulesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListEventThreatDetectionCustomModulesRequest instance
                     */
                    public static create(properties?: google.cloud.securitycentermanagement.v1.IListEventThreatDetectionCustomModulesRequest): google.cloud.securitycentermanagement.v1.ListEventThreatDetectionCustomModulesRequest;

                    /**
                     * Encodes the specified ListEventThreatDetectionCustomModulesRequest message. Does not implicitly {@link google.cloud.securitycentermanagement.v1.ListEventThreatDetectionCustomModulesRequest.verify|verify} messages.
                     * @param message ListEventThreatDetectionCustomModulesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.securitycentermanagement.v1.IListEventThreatDetectionCustomModulesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListEventThreatDetectionCustomModulesRequest message, length delimited. Does not implicitly {@link google.cloud.securitycentermanagement.v1.ListEventThreatDetectionCustomModulesRequest.verify|verify} messages.
                     * @param message ListEventThreatDetectionCustomModulesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.securitycentermanagement.v1.IListEventThreatDetectionCustomModulesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListEventThreatDetectionCustomModulesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListEventThreatDetectionCustomModulesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.securitycentermanagement.v1.ListEventThreatDetectionCustomModulesRequest;

                    /**
                     * Decodes a ListEventThreatDetectionCustomModulesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListEventThreatDetectionCustomModulesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.securitycentermanagement.v1.ListEventThreatDetectionCustomModulesRequest;

                    /**
                     * Verifies a ListEventThreatDetectionCustomModulesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListEventThreatDetectionCustomModulesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListEventThreatDetectionCustomModulesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.securitycentermanagement.v1.ListEventThreatDetectionCustomModulesRequest;

                    /**
                     * Creates a plain object from a ListEventThreatDetectionCustomModulesRequest message. Also converts values to other types if specified.
                     * @param message ListEventThreatDetectionCustomModulesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.securitycentermanagement.v1.ListEventThreatDetectionCustomModulesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListEventThreatDetectionCustomModulesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListEventThreatDetectionCustomModulesRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListEventThreatDetectionCustomModulesResponse. */
                interface IListEventThreatDetectionCustomModulesResponse {

                    /** ListEventThreatDetectionCustomModulesResponse eventThreatDetectionCustomModules */
                    eventThreatDetectionCustomModules?: (google.cloud.securitycentermanagement.v1.IEventThreatDetectionCustomModule[]|null);

                    /** ListEventThreatDetectionCustomModulesResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListEventThreatDetectionCustomModulesResponse. */
                class ListEventThreatDetectionCustomModulesResponse implements IListEventThreatDetectionCustomModulesResponse {

                    /**
                     * Constructs a new ListEventThreatDetectionCustomModulesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.securitycentermanagement.v1.IListEventThreatDetectionCustomModulesResponse);

                    /** ListEventThreatDetectionCustomModulesResponse eventThreatDetectionCustomModules. */
                    public eventThreatDetectionCustomModules: google.cloud.securitycentermanagement.v1.IEventThreatDetectionCustomModule[];

                    /** ListEventThreatDetectionCustomModulesResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListEventThreatDetectionCustomModulesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListEventThreatDetectionCustomModulesResponse instance
                     */
                    public static create(properties?: google.cloud.securitycentermanagement.v1.IListEventThreatDetectionCustomModulesResponse): google.cloud.securitycentermanagement.v1.ListEventThreatDetectionCustomModulesResponse;

                    /**
                     * Encodes the specified ListEventThreatDetectionCustomModulesResponse message. Does not implicitly {@link google.cloud.securitycentermanagement.v1.ListEventThreatDetectionCustomModulesResponse.verify|verify} messages.
                     * @param message ListEventThreatDetectionCustomModulesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.securitycentermanagement.v1.IListEventThreatDetectionCustomModulesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListEventThreatDetectionCustomModulesResponse message, length delimited. Does not implicitly {@link google.cloud.securitycentermanagement.v1.ListEventThreatDetectionCustomModulesResponse.verify|verify} messages.
                     * @param message ListEventThreatDetectionCustomModulesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.securitycentermanagement.v1.IListEventThreatDetectionCustomModulesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListEventThreatDetectionCustomModulesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListEventThreatDetectionCustomModulesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.securitycentermanagement.v1.ListEventThreatDetectionCustomModulesResponse;

                    /**
                     * Decodes a ListEventThreatDetectionCustomModulesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListEventThreatDetectionCustomModulesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.securitycentermanagement.v1.ListEventThreatDetectionCustomModulesResponse;

                    /**
                     * Verifies a ListEventThreatDetectionCustomModulesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListEventThreatDetectionCustomModulesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListEventThreatDetectionCustomModulesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.securitycentermanagement.v1.ListEventThreatDetectionCustomModulesResponse;

                    /**
                     * Creates a plain object from a ListEventThreatDetectionCustomModulesResponse message. Also converts values to other types if specified.
                     * @param message ListEventThreatDetectionCustomModulesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.securitycentermanagement.v1.ListEventThreatDetectionCustomModulesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListEventThreatDetectionCustomModulesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListEventThreatDetectionCustomModulesResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListDescendantEventThreatDetectionCustomModulesRequest. */
                interface IListDescendantEventThreatDetectionCustomModulesRequest {

                    /** ListDescendantEventThreatDetectionCustomModulesRequest parent */
                    parent?: (string|null);

                    /** ListDescendantEventThreatDetectionCustomModulesRequest pageSize */
                    pageSize?: (number|null);

                    /** ListDescendantEventThreatDetectionCustomModulesRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListDescendantEventThreatDetectionCustomModulesRequest. */
                class ListDescendantEventThreatDetectionCustomModulesRequest implements IListDescendantEventThreatDetectionCustomModulesRequest {

                    /**
                     * Constructs a new ListDescendantEventThreatDetectionCustomModulesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.securitycentermanagement.v1.IListDescendantEventThreatDetectionCustomModulesRequest);

                    /** ListDescendantEventThreatDetectionCustomModulesRequest parent. */
                    public parent: string;

                    /** ListDescendantEventThreatDetectionCustomModulesRequest pageSize. */
                    public pageSize: number;

                    /** ListDescendantEventThreatDetectionCustomModulesRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListDescendantEventThreatDetectionCustomModulesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListDescendantEventThreatDetectionCustomModulesRequest instance
                     */
                    public static create(properties?: google.cloud.securitycentermanagement.v1.IListDescendantEventThreatDetectionCustomModulesRequest): google.cloud.securitycentermanagement.v1.ListDescendantEventThreatDetectionCustomModulesRequest;

                    /**
                     * Encodes the specified ListDescendantEventThreatDetectionCustomModulesRequest message. Does not implicitly {@link google.cloud.securitycentermanagement.v1.ListDescendantEventThreatDetectionCustomModulesRequest.verify|verify} messages.
                     * @param message ListDescendantEventThreatDetectionCustomModulesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.securitycentermanagement.v1.IListDescendantEventThreatDetectionCustomModulesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListDescendantEventThreatDetectionCustomModulesRequest message, length delimited. Does not implicitly {@link google.cloud.securitycentermanagement.v1.ListDescendantEventThreatDetectionCustomModulesRequest.verify|verify} messages.
                     * @param message ListDescendantEventThreatDetectionCustomModulesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.securitycentermanagement.v1.IListDescendantEventThreatDetectionCustomModulesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListDescendantEventThreatDetectionCustomModulesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListDescendantEventThreatDetectionCustomModulesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.securitycentermanagement.v1.ListDescendantEventThreatDetectionCustomModulesRequest;

                    /**
                     * Decodes a ListDescendantEventThreatDetectionCustomModulesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListDescendantEventThreatDetectionCustomModulesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.securitycentermanagement.v1.ListDescendantEventThreatDetectionCustomModulesRequest;

                    /**
                     * Verifies a ListDescendantEventThreatDetectionCustomModulesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListDescendantEventThreatDetectionCustomModulesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListDescendantEventThreatDetectionCustomModulesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.securitycentermanagement.v1.ListDescendantEventThreatDetectionCustomModulesRequest;

                    /**
                     * Creates a plain object from a ListDescendantEventThreatDetectionCustomModulesRequest message. Also converts values to other types if specified.
                     * @param message ListDescendantEventThreatDetectionCustomModulesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.securitycentermanagement.v1.ListDescendantEventThreatDetectionCustomModulesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListDescendantEventThreatDetectionCustomModulesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListDescendantEventThreatDetectionCustomModulesRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListDescendantEventThreatDetectionCustomModulesResponse. */
                interface IListDescendantEventThreatDetectionCustomModulesResponse {

                    /** ListDescendantEventThreatDetectionCustomModulesResponse eventThreatDetectionCustomModules */
                    eventThreatDetectionCustomModules?: (google.cloud.securitycentermanagement.v1.IEventThreatDetectionCustomModule[]|null);

                    /** ListDescendantEventThreatDetectionCustomModulesResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListDescendantEventThreatDetectionCustomModulesResponse. */
                class ListDescendantEventThreatDetectionCustomModulesResponse implements IListDescendantEventThreatDetectionCustomModulesResponse {

                    /**
                     * Constructs a new ListDescendantEventThreatDetectionCustomModulesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.securitycentermanagement.v1.IListDescendantEventThreatDetectionCustomModulesResponse);

                    /** ListDescendantEventThreatDetectionCustomModulesResponse eventThreatDetectionCustomModules. */
                    public eventThreatDetectionCustomModules: google.cloud.securitycentermanagement.v1.IEventThreatDetectionCustomModule[];

                    /** ListDescendantEventThreatDetectionCustomModulesResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListDescendantEventThreatDetectionCustomModulesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListDescendantEventThreatDetectionCustomModulesResponse instance
                     */
                    public static create(properties?: google.cloud.securitycentermanagement.v1.IListDescendantEventThreatDetectionCustomModulesResponse): google.cloud.securitycentermanagement.v1.ListDescendantEventThreatDetectionCustomModulesResponse;

                    /**
                     * Encodes the specified ListDescendantEventThreatDetectionCustomModulesResponse message. Does not implicitly {@link google.cloud.securitycentermanagement.v1.ListDescendantEventThreatDetectionCustomModulesResponse.verify|verify} messages.
                     * @param message ListDescendantEventThreatDetectionCustomModulesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.securitycentermanagement.v1.IListDescendantEventThreatDetectionCustomModulesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListDescendantEventThreatDetectionCustomModulesResponse message, length delimited. Does not implicitly {@link google.cloud.securitycentermanagement.v1.ListDescendantEventThreatDetectionCustomModulesResponse.verify|verify} messages.
                     * @param message ListDescendantEventThreatDetectionCustomModulesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.securitycentermanagement.v1.IListDescendantEventThreatDetectionCustomModulesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListDescendantEventThreatDetectionCustomModulesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListDescendantEventThreatDetectionCustomModulesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.securitycentermanagement.v1.ListDescendantEventThreatDetectionCustomModulesResponse;

                    /**
                     * Decodes a ListDescendantEventThreatDetectionCustomModulesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListDescendantEventThreatDetectionCustomModulesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.securitycentermanagement.v1.ListDescendantEventThreatDetectionCustomModulesResponse;

                    /**
                     * Verifies a ListDescendantEventThreatDetectionCustomModulesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListDescendantEventThreatDetectionCustomModulesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListDescendantEventThreatDetectionCustomModulesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.securitycentermanagement.v1.ListDescendantEventThreatDetectionCustomModulesResponse;

                    /**
                     * Creates a plain object from a ListDescendantEventThreatDetectionCustomModulesResponse message. Also converts values to other types if specified.
                     * @param message ListDescendantEventThreatDetectionCustomModulesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.securitycentermanagement.v1.ListDescendantEventThreatDetectionCustomModulesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListDescendantEventThreatDetectionCustomModulesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListDescendantEventThreatDetectionCustomModulesResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetEventThreatDetectionCustomModuleRequest. */
                interface IGetEventThreatDetectionCustomModuleRequest {

                    /** GetEventThreatDetectionCustomModuleRequest name */
                    name?: (string|null);
                }

                /** Represents a GetEventThreatDetectionCustomModuleRequest. */
                class GetEventThreatDetectionCustomModuleRequest implements IGetEventThreatDetectionCustomModuleRequest {

                    /**
                     * Constructs a new GetEventThreatDetectionCustomModuleRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.securitycentermanagement.v1.IGetEventThreatDetectionCustomModuleRequest);

                    /** GetEventThreatDetectionCustomModuleRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetEventThreatDetectionCustomModuleRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetEventThreatDetectionCustomModuleRequest instance
                     */
                    public static create(properties?: google.cloud.securitycentermanagement.v1.IGetEventThreatDetectionCustomModuleRequest): google.cloud.securitycentermanagement.v1.GetEventThreatDetectionCustomModuleRequest;

                    /**
                     * Encodes the specified GetEventThreatDetectionCustomModuleRequest message. Does not implicitly {@link google.cloud.securitycentermanagement.v1.GetEventThreatDetectionCustomModuleRequest.verify|verify} messages.
                     * @param message GetEventThreatDetectionCustomModuleRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.securitycentermanagement.v1.IGetEventThreatDetectionCustomModuleRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetEventThreatDetectionCustomModuleRequest message, length delimited. Does not implicitly {@link google.cloud.securitycentermanagement.v1.GetEventThreatDetectionCustomModuleRequest.verify|verify} messages.
                     * @param message GetEventThreatDetectionCustomModuleRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.securitycentermanagement.v1.IGetEventThreatDetectionCustomModuleRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetEventThreatDetectionCustomModuleRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetEventThreatDetectionCustomModuleRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.securitycentermanagement.v1.GetEventThreatDetectionCustomModuleRequest;

                    /**
                     * Decodes a GetEventThreatDetectionCustomModuleRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetEventThreatDetectionCustomModuleRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.securitycentermanagement.v1.GetEventThreatDetectionCustomModuleRequest;

                    /**
                     * Verifies a GetEventThreatDetectionCustomModuleRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetEventThreatDetectionCustomModuleRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetEventThreatDetectionCustomModuleRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.securitycentermanagement.v1.GetEventThreatDetectionCustomModuleRequest;

                    /**
                     * Creates a plain object from a GetEventThreatDetectionCustomModuleRequest message. Also converts values to other types if specified.
                     * @param message GetEventThreatDetectionCustomModuleRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.securitycentermanagement.v1.GetEventThreatDetectionCustomModuleRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetEventThreatDetectionCustomModuleRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetEventThreatDetectionCustomModuleRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CreateEventThreatDetectionCustomModuleRequest. */
                interface ICreateEventThreatDetectionCustomModuleRequest {

                    /** CreateEventThreatDetectionCustomModuleRequest parent */
                    parent?: (string|null);

                    /** CreateEventThreatDetectionCustomModuleRequest eventThreatDetectionCustomModule */
                    eventThreatDetectionCustomModule?: (google.cloud.securitycentermanagement.v1.IEventThreatDetectionCustomModule|null);

                    /** CreateEventThreatDetectionCustomModuleRequest validateOnly */
                    validateOnly?: (boolean|null);
                }

                /** Represents a CreateEventThreatDetectionCustomModuleRequest. */
                class CreateEventThreatDetectionCustomModuleRequest implements ICreateEventThreatDetectionCustomModuleRequest {

                    /**
                     * Constructs a new CreateEventThreatDetectionCustomModuleRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.securitycentermanagement.v1.ICreateEventThreatDetectionCustomModuleRequest);

                    /** CreateEventThreatDetectionCustomModuleRequest parent. */
                    public parent: string;

                    /** CreateEventThreatDetectionCustomModuleRequest eventThreatDetectionCustomModule. */
                    public eventThreatDetectionCustomModule?: (google.cloud.securitycentermanagement.v1.IEventThreatDetectionCustomModule|null);

                    /** CreateEventThreatDetectionCustomModuleRequest validateOnly. */
                    public validateOnly: boolean;

                    /**
                     * Creates a new CreateEventThreatDetectionCustomModuleRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateEventThreatDetectionCustomModuleRequest instance
                     */
                    public static create(properties?: google.cloud.securitycentermanagement.v1.ICreateEventThreatDetectionCustomModuleRequest): google.cloud.securitycentermanagement.v1.CreateEventThreatDetectionCustomModuleRequest;

                    /**
                     * Encodes the specified CreateEventThreatDetectionCustomModuleRequest message. Does not implicitly {@link google.cloud.securitycentermanagement.v1.CreateEventThreatDetectionCustomModuleRequest.verify|verify} messages.
                     * @param message CreateEventThreatDetectionCustomModuleRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.securitycentermanagement.v1.ICreateEventThreatDetectionCustomModuleRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateEventThreatDetectionCustomModuleRequest message, length delimited. Does not implicitly {@link google.cloud.securitycentermanagement.v1.CreateEventThreatDetectionCustomModuleRequest.verify|verify} messages.
                     * @param message CreateEventThreatDetectionCustomModuleRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.securitycentermanagement.v1.ICreateEventThreatDetectionCustomModuleRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateEventThreatDetectionCustomModuleRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateEventThreatDetectionCustomModuleRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.securitycentermanagement.v1.CreateEventThreatDetectionCustomModuleRequest;

                    /**
                     * Decodes a CreateEventThreatDetectionCustomModuleRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateEventThreatDetectionCustomModuleRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.securitycentermanagement.v1.CreateEventThreatDetectionCustomModuleRequest;

                    /**
                     * Verifies a CreateEventThreatDetectionCustomModuleRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateEventThreatDetectionCustomModuleRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateEventThreatDetectionCustomModuleRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.securitycentermanagement.v1.CreateEventThreatDetectionCustomModuleRequest;

                    /**
                     * Creates a plain object from a CreateEventThreatDetectionCustomModuleRequest message. Also converts values to other types if specified.
                     * @param message CreateEventThreatDetectionCustomModuleRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.securitycentermanagement.v1.CreateEventThreatDetectionCustomModuleRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateEventThreatDetectionCustomModuleRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateEventThreatDetectionCustomModuleRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpdateEventThreatDetectionCustomModuleRequest. */
                interface IUpdateEventThreatDetectionCustomModuleRequest {

                    /** UpdateEventThreatDetectionCustomModuleRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateEventThreatDetectionCustomModuleRequest eventThreatDetectionCustomModule */
                    eventThreatDetectionCustomModule?: (google.cloud.securitycentermanagement.v1.IEventThreatDetectionCustomModule|null);

                    /** UpdateEventThreatDetectionCustomModuleRequest validateOnly */
                    validateOnly?: (boolean|null);
                }

                /** Represents an UpdateEventThreatDetectionCustomModuleRequest. */
                class UpdateEventThreatDetectionCustomModuleRequest implements IUpdateEventThreatDetectionCustomModuleRequest {

                    /**
                     * Constructs a new UpdateEventThreatDetectionCustomModuleRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.securitycentermanagement.v1.IUpdateEventThreatDetectionCustomModuleRequest);

                    /** UpdateEventThreatDetectionCustomModuleRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateEventThreatDetectionCustomModuleRequest eventThreatDetectionCustomModule. */
                    public eventThreatDetectionCustomModule?: (google.cloud.securitycentermanagement.v1.IEventThreatDetectionCustomModule|null);

                    /** UpdateEventThreatDetectionCustomModuleRequest validateOnly. */
                    public validateOnly: boolean;

                    /**
                     * Creates a new UpdateEventThreatDetectionCustomModuleRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateEventThreatDetectionCustomModuleRequest instance
                     */
                    public static create(properties?: google.cloud.securitycentermanagement.v1.IUpdateEventThreatDetectionCustomModuleRequest): google.cloud.securitycentermanagement.v1.UpdateEventThreatDetectionCustomModuleRequest;

                    /**
                     * Encodes the specified UpdateEventThreatDetectionCustomModuleRequest message. Does not implicitly {@link google.cloud.securitycentermanagement.v1.UpdateEventThreatDetectionCustomModuleRequest.verify|verify} messages.
                     * @param message UpdateEventThreatDetectionCustomModuleRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.securitycentermanagement.v1.IUpdateEventThreatDetectionCustomModuleRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateEventThreatDetectionCustomModuleRequest message, length delimited. Does not implicitly {@link google.cloud.securitycentermanagement.v1.UpdateEventThreatDetectionCustomModuleRequest.verify|verify} messages.
                     * @param message UpdateEventThreatDetectionCustomModuleRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.securitycentermanagement.v1.IUpdateEventThreatDetectionCustomModuleRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateEventThreatDetectionCustomModuleRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateEventThreatDetectionCustomModuleRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.securitycentermanagement.v1.UpdateEventThreatDetectionCustomModuleRequest;

                    /**
                     * Decodes an UpdateEventThreatDetectionCustomModuleRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateEventThreatDetectionCustomModuleRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.securitycentermanagement.v1.UpdateEventThreatDetectionCustomModuleRequest;

                    /**
                     * Verifies an UpdateEventThreatDetectionCustomModuleRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateEventThreatDetectionCustomModuleRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateEventThreatDetectionCustomModuleRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.securitycentermanagement.v1.UpdateEventThreatDetectionCustomModuleRequest;

                    /**
                     * Creates a plain object from an UpdateEventThreatDetectionCustomModuleRequest message. Also converts values to other types if specified.
                     * @param message UpdateEventThreatDetectionCustomModuleRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.securitycentermanagement.v1.UpdateEventThreatDetectionCustomModuleRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateEventThreatDetectionCustomModuleRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdateEventThreatDetectionCustomModuleRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeleteEventThreatDetectionCustomModuleRequest. */
                interface IDeleteEventThreatDetectionCustomModuleRequest {

                    /** DeleteEventThreatDetectionCustomModuleRequest name */
                    name?: (string|null);

                    /** DeleteEventThreatDetectionCustomModuleRequest validateOnly */
                    validateOnly?: (boolean|null);
                }

                /** Represents a DeleteEventThreatDetectionCustomModuleRequest. */
                class DeleteEventThreatDetectionCustomModuleRequest implements IDeleteEventThreatDetectionCustomModuleRequest {

                    /**
                     * Constructs a new DeleteEventThreatDetectionCustomModuleRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.securitycentermanagement.v1.IDeleteEventThreatDetectionCustomModuleRequest);

                    /** DeleteEventThreatDetectionCustomModuleRequest name. */
                    public name: string;

                    /** DeleteEventThreatDetectionCustomModuleRequest validateOnly. */
                    public validateOnly: boolean;

                    /**
                     * Creates a new DeleteEventThreatDetectionCustomModuleRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteEventThreatDetectionCustomModuleRequest instance
                     */
                    public static create(properties?: google.cloud.securitycentermanagement.v1.IDeleteEventThreatDetectionCustomModuleRequest): google.cloud.securitycentermanagement.v1.DeleteEventThreatDetectionCustomModuleRequest;

                    /**
                     * Encodes the specified DeleteEventThreatDetectionCustomModuleRequest message. Does not implicitly {@link google.cloud.securitycentermanagement.v1.DeleteEventThreatDetectionCustomModuleRequest.verify|verify} messages.
                     * @param message DeleteEventThreatDetectionCustomModuleRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.securitycentermanagement.v1.IDeleteEventThreatDetectionCustomModuleRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteEventThreatDetectionCustomModuleRequest message, length delimited. Does not implicitly {@link google.cloud.securitycentermanagement.v1.DeleteEventThreatDetectionCustomModuleRequest.verify|verify} messages.
                     * @param message DeleteEventThreatDetectionCustomModuleRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.securitycentermanagement.v1.IDeleteEventThreatDetectionCustomModuleRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteEventThreatDetectionCustomModuleRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteEventThreatDetectionCustomModuleRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.securitycentermanagement.v1.DeleteEventThreatDetectionCustomModuleRequest;

                    /**
                     * Decodes a DeleteEventThreatDetectionCustomModuleRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteEventThreatDetectionCustomModuleRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.securitycentermanagement.v1.DeleteEventThreatDetectionCustomModuleRequest;

                    /**
                     * Verifies a DeleteEventThreatDetectionCustomModuleRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteEventThreatDetectionCustomModuleRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteEventThreatDetectionCustomModuleRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.securitycentermanagement.v1.DeleteEventThreatDetectionCustomModuleRequest;

                    /**
                     * Creates a plain object from a DeleteEventThreatDetectionCustomModuleRequest message. Also converts values to other types if specified.
                     * @param message DeleteEventThreatDetectionCustomModuleRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.securitycentermanagement.v1.DeleteEventThreatDetectionCustomModuleRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteEventThreatDetectionCustomModuleRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeleteEventThreatDetectionCustomModuleRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ValidateEventThreatDetectionCustomModuleRequest. */
                interface IValidateEventThreatDetectionCustomModuleRequest {

                    /** ValidateEventThreatDetectionCustomModuleRequest parent */
                    parent?: (string|null);

                    /** ValidateEventThreatDetectionCustomModuleRequest rawText */
                    rawText?: (string|null);

                    /** ValidateEventThreatDetectionCustomModuleRequest type */
                    type?: (string|null);
                }

                /** Represents a ValidateEventThreatDetectionCustomModuleRequest. */
                class ValidateEventThreatDetectionCustomModuleRequest implements IValidateEventThreatDetectionCustomModuleRequest {

                    /**
                     * Constructs a new ValidateEventThreatDetectionCustomModuleRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.securitycentermanagement.v1.IValidateEventThreatDetectionCustomModuleRequest);

                    /** ValidateEventThreatDetectionCustomModuleRequest parent. */
                    public parent: string;

                    /** ValidateEventThreatDetectionCustomModuleRequest rawText. */
                    public rawText: string;

                    /** ValidateEventThreatDetectionCustomModuleRequest type. */
                    public type: string;

                    /**
                     * Creates a new ValidateEventThreatDetectionCustomModuleRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ValidateEventThreatDetectionCustomModuleRequest instance
                     */
                    public static create(properties?: google.cloud.securitycentermanagement.v1.IValidateEventThreatDetectionCustomModuleRequest): google.cloud.securitycentermanagement.v1.ValidateEventThreatDetectionCustomModuleRequest;

                    /**
                     * Encodes the specified ValidateEventThreatDetectionCustomModuleRequest message. Does not implicitly {@link google.cloud.securitycentermanagement.v1.ValidateEventThreatDetectionCustomModuleRequest.verify|verify} messages.
                     * @param message ValidateEventThreatDetectionCustomModuleRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.securitycentermanagement.v1.IValidateEventThreatDetectionCustomModuleRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ValidateEventThreatDetectionCustomModuleRequest message, length delimited. Does not implicitly {@link google.cloud.securitycentermanagement.v1.ValidateEventThreatDetectionCustomModuleRequest.verify|verify} messages.
                     * @param message ValidateEventThreatDetectionCustomModuleRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.securitycentermanagement.v1.IValidateEventThreatDetectionCustomModuleRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ValidateEventThreatDetectionCustomModuleRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ValidateEventThreatDetectionCustomModuleRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.securitycentermanagement.v1.ValidateEventThreatDetectionCustomModuleRequest;

                    /**
                     * Decodes a ValidateEventThreatDetectionCustomModuleRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ValidateEventThreatDetectionCustomModuleRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.securitycentermanagement.v1.ValidateEventThreatDetectionCustomModuleRequest;

                    /**
                     * Verifies a ValidateEventThreatDetectionCustomModuleRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ValidateEventThreatDetectionCustomModuleRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ValidateEventThreatDetectionCustomModuleRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.securitycentermanagement.v1.ValidateEventThreatDetectionCustomModuleRequest;

                    /**
                     * Creates a plain object from a ValidateEventThreatDetectionCustomModuleRequest message. Also converts values to other types if specified.
                     * @param message ValidateEventThreatDetectionCustomModuleRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.securitycentermanagement.v1.ValidateEventThreatDetectionCustomModuleRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ValidateEventThreatDetectionCustomModuleRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ValidateEventThreatDetectionCustomModuleRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ValidateEventThreatDetectionCustomModuleResponse. */
                interface IValidateEventThreatDetectionCustomModuleResponse {

                    /** ValidateEventThreatDetectionCustomModuleResponse errors */
                    errors?: (google.cloud.securitycentermanagement.v1.ValidateEventThreatDetectionCustomModuleResponse.ICustomModuleValidationError[]|null);
                }

                /** Represents a ValidateEventThreatDetectionCustomModuleResponse. */
                class ValidateEventThreatDetectionCustomModuleResponse implements IValidateEventThreatDetectionCustomModuleResponse {

                    /**
                     * Constructs a new ValidateEventThreatDetectionCustomModuleResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.securitycentermanagement.v1.IValidateEventThreatDetectionCustomModuleResponse);

                    /** ValidateEventThreatDetectionCustomModuleResponse errors. */
                    public errors: google.cloud.securitycentermanagement.v1.ValidateEventThreatDetectionCustomModuleResponse.ICustomModuleValidationError[];

                    /**
                     * Creates a new ValidateEventThreatDetectionCustomModuleResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ValidateEventThreatDetectionCustomModuleResponse instance
                     */
                    public static create(properties?: google.cloud.securitycentermanagement.v1.IValidateEventThreatDetectionCustomModuleResponse): google.cloud.securitycentermanagement.v1.ValidateEventThreatDetectionCustomModuleResponse;

                    /**
                     * Encodes the specified ValidateEventThreatDetectionCustomModuleResponse message. Does not implicitly {@link google.cloud.securitycentermanagement.v1.ValidateEventThreatDetectionCustomModuleResponse.verify|verify} messages.
                     * @param message ValidateEventThreatDetectionCustomModuleResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.securitycentermanagement.v1.IValidateEventThreatDetectionCustomModuleResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ValidateEventThreatDetectionCustomModuleResponse message, length delimited. Does not implicitly {@link google.cloud.securitycentermanagement.v1.ValidateEventThreatDetectionCustomModuleResponse.verify|verify} messages.
                     * @param message ValidateEventThreatDetectionCustomModuleResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.securitycentermanagement.v1.IValidateEventThreatDetectionCustomModuleResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ValidateEventThreatDetectionCustomModuleResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ValidateEventThreatDetectionCustomModuleResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.securitycentermanagement.v1.ValidateEventThreatDetectionCustomModuleResponse;

                    /**
                     * Decodes a ValidateEventThreatDetectionCustomModuleResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ValidateEventThreatDetectionCustomModuleResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.securitycentermanagement.v1.ValidateEventThreatDetectionCustomModuleResponse;

                    /**
                     * Verifies a ValidateEventThreatDetectionCustomModuleResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ValidateEventThreatDetectionCustomModuleResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ValidateEventThreatDetectionCustomModuleResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.securitycentermanagement.v1.ValidateEventThreatDetectionCustomModuleResponse;

                    /**
                     * Creates a plain object from a ValidateEventThreatDetectionCustomModuleResponse message. Also converts values to other types if specified.
                     * @param message ValidateEventThreatDetectionCustomModuleResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.securitycentermanagement.v1.ValidateEventThreatDetectionCustomModuleResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ValidateEventThreatDetectionCustomModuleResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ValidateEventThreatDetectionCustomModuleResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace ValidateEventThreatDetectionCustomModuleResponse {

                    /** Properties of a CustomModuleValidationError. */
                    interface ICustomModuleValidationError {

                        /** CustomModuleValidationError description */
                        description?: (string|null);

                        /** CustomModuleValidationError fieldPath */
                        fieldPath?: (string|null);

                        /** CustomModuleValidationError start */
                        start?: (google.cloud.securitycentermanagement.v1.ValidateEventThreatDetectionCustomModuleResponse.IPosition|null);

                        /** CustomModuleValidationError end */
                        end?: (google.cloud.securitycentermanagement.v1.ValidateEventThreatDetectionCustomModuleResponse.IPosition|null);
                    }

                    /** Represents a CustomModuleValidationError. */
                    class CustomModuleValidationError implements ICustomModuleValidationError {

                        /**
                         * Constructs a new CustomModuleValidationError.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.securitycentermanagement.v1.ValidateEventThreatDetectionCustomModuleResponse.ICustomModuleValidationError);

                        /** CustomModuleValidationError description. */
                        public description: string;

                        /** CustomModuleValidationError fieldPath. */
                        public fieldPath: string;

                        /** CustomModuleValidationError start. */
                        public start?: (google.cloud.securitycentermanagement.v1.ValidateEventThreatDetectionCustomModuleResponse.IPosition|null);

                        /** CustomModuleValidationError end. */
                        public end?: (google.cloud.securitycentermanagement.v1.ValidateEventThreatDetectionCustomModuleResponse.IPosition|null);

                        /**
                         * Creates a new CustomModuleValidationError instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns CustomModuleValidationError instance
                         */
                        public static create(properties?: google.cloud.securitycentermanagement.v1.ValidateEventThreatDetectionCustomModuleResponse.ICustomModuleValidationError): google.cloud.securitycentermanagement.v1.ValidateEventThreatDetectionCustomModuleResponse.CustomModuleValidationError;

                        /**
                         * Encodes the specified CustomModuleValidationError message. Does not implicitly {@link google.cloud.securitycentermanagement.v1.ValidateEventThreatDetectionCustomModuleResponse.CustomModuleValidationError.verify|verify} messages.
                         * @param message CustomModuleValidationError message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.securitycentermanagement.v1.ValidateEventThreatDetectionCustomModuleResponse.ICustomModuleValidationError, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified CustomModuleValidationError message, length delimited. Does not implicitly {@link google.cloud.securitycentermanagement.v1.ValidateEventThreatDetectionCustomModuleResponse.CustomModuleValidationError.verify|verify} messages.
                         * @param message CustomModuleValidationError message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.securitycentermanagement.v1.ValidateEventThreatDetectionCustomModuleResponse.ICustomModuleValidationError, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a CustomModuleValidationError message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns CustomModuleValidationError
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.securitycentermanagement.v1.ValidateEventThreatDetectionCustomModuleResponse.CustomModuleValidationError;

                        /**
                         * Decodes a CustomModuleValidationError message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns CustomModuleValidationError
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.securitycentermanagement.v1.ValidateEventThreatDetectionCustomModuleResponse.CustomModuleValidationError;

                        /**
                         * Verifies a CustomModuleValidationError message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a CustomModuleValidationError message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns CustomModuleValidationError
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.securitycentermanagement.v1.ValidateEventThreatDetectionCustomModuleResponse.CustomModuleValidationError;

                        /**
                         * Creates a plain object from a CustomModuleValidationError message. Also converts values to other types if specified.
                         * @param message CustomModuleValidationError
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.securitycentermanagement.v1.ValidateEventThreatDetectionCustomModuleResponse.CustomModuleValidationError, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this CustomModuleValidationError to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for CustomModuleValidationError
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a Position. */
                    interface IPosition {

                        /** Position lineNumber */
                        lineNumber?: (number|null);

                        /** Position columnNumber */
                        columnNumber?: (number|null);
                    }

                    /** Represents a Position. */
                    class Position implements IPosition {

                        /**
                         * Constructs a new Position.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.securitycentermanagement.v1.ValidateEventThreatDetectionCustomModuleResponse.IPosition);

                        /** Position lineNumber. */
                        public lineNumber: number;

                        /** Position columnNumber. */
                        public columnNumber: number;

                        /**
                         * Creates a new Position instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Position instance
                         */
                        public static create(properties?: google.cloud.securitycentermanagement.v1.ValidateEventThreatDetectionCustomModuleResponse.IPosition): google.cloud.securitycentermanagement.v1.ValidateEventThreatDetectionCustomModuleResponse.Position;

                        /**
                         * Encodes the specified Position message. Does not implicitly {@link google.cloud.securitycentermanagement.v1.ValidateEventThreatDetectionCustomModuleResponse.Position.verify|verify} messages.
                         * @param message Position message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.securitycentermanagement.v1.ValidateEventThreatDetectionCustomModuleResponse.IPosition, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Position message, length delimited. Does not implicitly {@link google.cloud.securitycentermanagement.v1.ValidateEventThreatDetectionCustomModuleResponse.Position.verify|verify} messages.
                         * @param message Position message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.securitycentermanagement.v1.ValidateEventThreatDetectionCustomModuleResponse.IPosition, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Position message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Position
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.securitycentermanagement.v1.ValidateEventThreatDetectionCustomModuleResponse.Position;

                        /**
                         * Decodes a Position message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Position
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.securitycentermanagement.v1.ValidateEventThreatDetectionCustomModuleResponse.Position;

                        /**
                         * Verifies a Position message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Position message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Position
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.securitycentermanagement.v1.ValidateEventThreatDetectionCustomModuleResponse.Position;

                        /**
                         * Creates a plain object from a Position message. Also converts values to other types if specified.
                         * @param message Position
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.securitycentermanagement.v1.ValidateEventThreatDetectionCustomModuleResponse.Position, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Position to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for Position
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }
                }

                /** Properties of a GetSecurityCenterServiceRequest. */
                interface IGetSecurityCenterServiceRequest {

                    /** GetSecurityCenterServiceRequest name */
                    name?: (string|null);

                    /** GetSecurityCenterServiceRequest showEligibleModulesOnly */
                    showEligibleModulesOnly?: (boolean|null);
                }

                /** Represents a GetSecurityCenterServiceRequest. */
                class GetSecurityCenterServiceRequest implements IGetSecurityCenterServiceRequest {

                    /**
                     * Constructs a new GetSecurityCenterServiceRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.securitycentermanagement.v1.IGetSecurityCenterServiceRequest);

                    /** GetSecurityCenterServiceRequest name. */
                    public name: string;

                    /** GetSecurityCenterServiceRequest showEligibleModulesOnly. */
                    public showEligibleModulesOnly: boolean;

                    /**
                     * Creates a new GetSecurityCenterServiceRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetSecurityCenterServiceRequest instance
                     */
                    public static create(properties?: google.cloud.securitycentermanagement.v1.IGetSecurityCenterServiceRequest): google.cloud.securitycentermanagement.v1.GetSecurityCenterServiceRequest;

                    /**
                     * Encodes the specified GetSecurityCenterServiceRequest message. Does not implicitly {@link google.cloud.securitycentermanagement.v1.GetSecurityCenterServiceRequest.verify|verify} messages.
                     * @param message GetSecurityCenterServiceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.securitycentermanagement.v1.IGetSecurityCenterServiceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetSecurityCenterServiceRequest message, length delimited. Does not implicitly {@link google.cloud.securitycentermanagement.v1.GetSecurityCenterServiceRequest.verify|verify} messages.
                     * @param message GetSecurityCenterServiceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.securitycentermanagement.v1.IGetSecurityCenterServiceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetSecurityCenterServiceRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetSecurityCenterServiceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.securitycentermanagement.v1.GetSecurityCenterServiceRequest;

                    /**
                     * Decodes a GetSecurityCenterServiceRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetSecurityCenterServiceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.securitycentermanagement.v1.GetSecurityCenterServiceRequest;

                    /**
                     * Verifies a GetSecurityCenterServiceRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetSecurityCenterServiceRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetSecurityCenterServiceRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.securitycentermanagement.v1.GetSecurityCenterServiceRequest;

                    /**
                     * Creates a plain object from a GetSecurityCenterServiceRequest message. Also converts values to other types if specified.
                     * @param message GetSecurityCenterServiceRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.securitycentermanagement.v1.GetSecurityCenterServiceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetSecurityCenterServiceRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetSecurityCenterServiceRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListSecurityCenterServicesRequest. */
                interface IListSecurityCenterServicesRequest {

                    /** ListSecurityCenterServicesRequest parent */
                    parent?: (string|null);

                    /** ListSecurityCenterServicesRequest pageSize */
                    pageSize?: (number|null);

                    /** ListSecurityCenterServicesRequest pageToken */
                    pageToken?: (string|null);

                    /** ListSecurityCenterServicesRequest showEligibleModulesOnly */
                    showEligibleModulesOnly?: (boolean|null);
                }

                /** Represents a ListSecurityCenterServicesRequest. */
                class ListSecurityCenterServicesRequest implements IListSecurityCenterServicesRequest {

                    /**
                     * Constructs a new ListSecurityCenterServicesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.securitycentermanagement.v1.IListSecurityCenterServicesRequest);

                    /** ListSecurityCenterServicesRequest parent. */
                    public parent: string;

                    /** ListSecurityCenterServicesRequest pageSize. */
                    public pageSize: number;

                    /** ListSecurityCenterServicesRequest pageToken. */
                    public pageToken: string;

                    /** ListSecurityCenterServicesRequest showEligibleModulesOnly. */
                    public showEligibleModulesOnly: boolean;

                    /**
                     * Creates a new ListSecurityCenterServicesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListSecurityCenterServicesRequest instance
                     */
                    public static create(properties?: google.cloud.securitycentermanagement.v1.IListSecurityCenterServicesRequest): google.cloud.securitycentermanagement.v1.ListSecurityCenterServicesRequest;

                    /**
                     * Encodes the specified ListSecurityCenterServicesRequest message. Does not implicitly {@link google.cloud.securitycentermanagement.v1.ListSecurityCenterServicesRequest.verify|verify} messages.
                     * @param message ListSecurityCenterServicesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.securitycentermanagement.v1.IListSecurityCenterServicesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListSecurityCenterServicesRequest message, length delimited. Does not implicitly {@link google.cloud.securitycentermanagement.v1.ListSecurityCenterServicesRequest.verify|verify} messages.
                     * @param message ListSecurityCenterServicesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.securitycentermanagement.v1.IListSecurityCenterServicesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListSecurityCenterServicesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListSecurityCenterServicesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.securitycentermanagement.v1.ListSecurityCenterServicesRequest;

                    /**
                     * Decodes a ListSecurityCenterServicesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListSecurityCenterServicesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.securitycentermanagement.v1.ListSecurityCenterServicesRequest;

                    /**
                     * Verifies a ListSecurityCenterServicesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListSecurityCenterServicesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListSecurityCenterServicesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.securitycentermanagement.v1.ListSecurityCenterServicesRequest;

                    /**
                     * Creates a plain object from a ListSecurityCenterServicesRequest message. Also converts values to other types if specified.
                     * @param message ListSecurityCenterServicesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.securitycentermanagement.v1.ListSecurityCenterServicesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListSecurityCenterServicesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListSecurityCenterServicesRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListSecurityCenterServicesResponse. */
                interface IListSecurityCenterServicesResponse {

                    /** ListSecurityCenterServicesResponse securityCenterServices */
                    securityCenterServices?: (google.cloud.securitycentermanagement.v1.ISecurityCenterService[]|null);

                    /** ListSecurityCenterServicesResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListSecurityCenterServicesResponse. */
                class ListSecurityCenterServicesResponse implements IListSecurityCenterServicesResponse {

                    /**
                     * Constructs a new ListSecurityCenterServicesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.securitycentermanagement.v1.IListSecurityCenterServicesResponse);

                    /** ListSecurityCenterServicesResponse securityCenterServices. */
                    public securityCenterServices: google.cloud.securitycentermanagement.v1.ISecurityCenterService[];

                    /** ListSecurityCenterServicesResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListSecurityCenterServicesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListSecurityCenterServicesResponse instance
                     */
                    public static create(properties?: google.cloud.securitycentermanagement.v1.IListSecurityCenterServicesResponse): google.cloud.securitycentermanagement.v1.ListSecurityCenterServicesResponse;

                    /**
                     * Encodes the specified ListSecurityCenterServicesResponse message. Does not implicitly {@link google.cloud.securitycentermanagement.v1.ListSecurityCenterServicesResponse.verify|verify} messages.
                     * @param message ListSecurityCenterServicesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.securitycentermanagement.v1.IListSecurityCenterServicesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListSecurityCenterServicesResponse message, length delimited. Does not implicitly {@link google.cloud.securitycentermanagement.v1.ListSecurityCenterServicesResponse.verify|verify} messages.
                     * @param message ListSecurityCenterServicesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.securitycentermanagement.v1.IListSecurityCenterServicesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListSecurityCenterServicesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListSecurityCenterServicesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.securitycentermanagement.v1.ListSecurityCenterServicesResponse;

                    /**
                     * Decodes a ListSecurityCenterServicesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListSecurityCenterServicesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.securitycentermanagement.v1.ListSecurityCenterServicesResponse;

                    /**
                     * Verifies a ListSecurityCenterServicesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListSecurityCenterServicesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListSecurityCenterServicesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.securitycentermanagement.v1.ListSecurityCenterServicesResponse;

                    /**
                     * Creates a plain object from a ListSecurityCenterServicesResponse message. Also converts values to other types if specified.
                     * @param message ListSecurityCenterServicesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.securitycentermanagement.v1.ListSecurityCenterServicesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListSecurityCenterServicesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListSecurityCenterServicesResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpdateSecurityCenterServiceRequest. */
                interface IUpdateSecurityCenterServiceRequest {

                    /** UpdateSecurityCenterServiceRequest securityCenterService */
                    securityCenterService?: (google.cloud.securitycentermanagement.v1.ISecurityCenterService|null);

                    /** UpdateSecurityCenterServiceRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateSecurityCenterServiceRequest validateOnly */
                    validateOnly?: (boolean|null);
                }

                /** Represents an UpdateSecurityCenterServiceRequest. */
                class UpdateSecurityCenterServiceRequest implements IUpdateSecurityCenterServiceRequest {

                    /**
                     * Constructs a new UpdateSecurityCenterServiceRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.securitycentermanagement.v1.IUpdateSecurityCenterServiceRequest);

                    /** UpdateSecurityCenterServiceRequest securityCenterService. */
                    public securityCenterService?: (google.cloud.securitycentermanagement.v1.ISecurityCenterService|null);

                    /** UpdateSecurityCenterServiceRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateSecurityCenterServiceRequest validateOnly. */
                    public validateOnly: boolean;

                    /**
                     * Creates a new UpdateSecurityCenterServiceRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateSecurityCenterServiceRequest instance
                     */
                    public static create(properties?: google.cloud.securitycentermanagement.v1.IUpdateSecurityCenterServiceRequest): google.cloud.securitycentermanagement.v1.UpdateSecurityCenterServiceRequest;

                    /**
                     * Encodes the specified UpdateSecurityCenterServiceRequest message. Does not implicitly {@link google.cloud.securitycentermanagement.v1.UpdateSecurityCenterServiceRequest.verify|verify} messages.
                     * @param message UpdateSecurityCenterServiceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.securitycentermanagement.v1.IUpdateSecurityCenterServiceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateSecurityCenterServiceRequest message, length delimited. Does not implicitly {@link google.cloud.securitycentermanagement.v1.UpdateSecurityCenterServiceRequest.verify|verify} messages.
                     * @param message UpdateSecurityCenterServiceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.securitycentermanagement.v1.IUpdateSecurityCenterServiceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateSecurityCenterServiceRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateSecurityCenterServiceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.securitycentermanagement.v1.UpdateSecurityCenterServiceRequest;

                    /**
                     * Decodes an UpdateSecurityCenterServiceRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateSecurityCenterServiceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.securitycentermanagement.v1.UpdateSecurityCenterServiceRequest;

                    /**
                     * Verifies an UpdateSecurityCenterServiceRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateSecurityCenterServiceRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateSecurityCenterServiceRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.securitycentermanagement.v1.UpdateSecurityCenterServiceRequest;

                    /**
                     * Creates a plain object from an UpdateSecurityCenterServiceRequest message. Also converts values to other types if specified.
                     * @param message UpdateSecurityCenterServiceRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.securitycentermanagement.v1.UpdateSecurityCenterServiceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateSecurityCenterServiceRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdateSecurityCenterServiceRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
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

            /** Publishing restReferenceDocumentationUri */
            restReferenceDocumentationUri?: (string|null);
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

            /** Publishing restReferenceDocumentationUri. */
            public restReferenceDocumentationUri: string;

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

            /** ServiceOptions .google.api.apiVersion */
            ".google.api.apiVersion"?: (string|null);
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
            stringValue?: (Uint8Array|Buffer|string|null);

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
            public stringValue: (Uint8Array|Buffer|string);

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

        /** Properties of a Struct. */
        interface IStruct {

            /** Struct fields */
            fields?: ({ [k: string]: google.protobuf.IValue }|null);
        }

        /** Represents a Struct. */
        class Struct implements IStruct {

            /**
             * Constructs a new Struct.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IStruct);

            /** Struct fields. */
            public fields: { [k: string]: google.protobuf.IValue };

            /**
             * Creates a new Struct instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Struct instance
             */
            public static create(properties?: google.protobuf.IStruct): google.protobuf.Struct;

            /**
             * Encodes the specified Struct message. Does not implicitly {@link google.protobuf.Struct.verify|verify} messages.
             * @param message Struct message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IStruct, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Struct message, length delimited. Does not implicitly {@link google.protobuf.Struct.verify|verify} messages.
             * @param message Struct message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IStruct, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Struct message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Struct
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Struct;

            /**
             * Decodes a Struct message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Struct
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Struct;

            /**
             * Verifies a Struct message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Struct message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Struct
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Struct;

            /**
             * Creates a plain object from a Struct message. Also converts values to other types if specified.
             * @param message Struct
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Struct, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Struct to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Struct
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Value. */
        interface IValue {

            /** Value nullValue */
            nullValue?: (google.protobuf.NullValue|keyof typeof google.protobuf.NullValue|null);

            /** Value numberValue */
            numberValue?: (number|null);

            /** Value stringValue */
            stringValue?: (string|null);

            /** Value boolValue */
            boolValue?: (boolean|null);

            /** Value structValue */
            structValue?: (google.protobuf.IStruct|null);

            /** Value listValue */
            listValue?: (google.protobuf.IListValue|null);
        }

        /** Represents a Value. */
        class Value implements IValue {

            /**
             * Constructs a new Value.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IValue);

            /** Value nullValue. */
            public nullValue?: (google.protobuf.NullValue|keyof typeof google.protobuf.NullValue|null);

            /** Value numberValue. */
            public numberValue?: (number|null);

            /** Value stringValue. */
            public stringValue?: (string|null);

            /** Value boolValue. */
            public boolValue?: (boolean|null);

            /** Value structValue. */
            public structValue?: (google.protobuf.IStruct|null);

            /** Value listValue. */
            public listValue?: (google.protobuf.IListValue|null);

            /** Value kind. */
            public kind?: ("nullValue"|"numberValue"|"stringValue"|"boolValue"|"structValue"|"listValue");

            /**
             * Creates a new Value instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Value instance
             */
            public static create(properties?: google.protobuf.IValue): google.protobuf.Value;

            /**
             * Encodes the specified Value message. Does not implicitly {@link google.protobuf.Value.verify|verify} messages.
             * @param message Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Value message, length delimited. Does not implicitly {@link google.protobuf.Value.verify|verify} messages.
             * @param message Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Value message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Value;

            /**
             * Decodes a Value message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Value;

            /**
             * Verifies a Value message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Value message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Value
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Value;

            /**
             * Creates a plain object from a Value message. Also converts values to other types if specified.
             * @param message Value
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Value, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Value to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Value
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** NullValue enum. */
        enum NullValue {
            NULL_VALUE = 0
        }

        /** Properties of a ListValue. */
        interface IListValue {

            /** ListValue values */
            values?: (google.protobuf.IValue[]|null);
        }

        /** Represents a ListValue. */
        class ListValue implements IListValue {

            /**
             * Constructs a new ListValue.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IListValue);

            /** ListValue values. */
            public values: google.protobuf.IValue[];

            /**
             * Creates a new ListValue instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ListValue instance
             */
            public static create(properties?: google.protobuf.IListValue): google.protobuf.ListValue;

            /**
             * Encodes the specified ListValue message. Does not implicitly {@link google.protobuf.ListValue.verify|verify} messages.
             * @param message ListValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IListValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ListValue message, length delimited. Does not implicitly {@link google.protobuf.ListValue.verify|verify} messages.
             * @param message ListValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IListValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ListValue message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ListValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ListValue;

            /**
             * Decodes a ListValue message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ListValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ListValue;

            /**
             * Verifies a ListValue message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ListValue message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ListValue
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.ListValue;

            /**
             * Creates a plain object from a ListValue message. Also converts values to other types if specified.
             * @param message ListValue
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.ListValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ListValue to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ListValue
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
            value?: (Uint8Array|Buffer|string|null);
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
            public value: (Uint8Array|Buffer|string);

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

    /** Namespace iam. */
    namespace iam {

        /** Namespace v1. */
        namespace v1 {

            /** Properties of a Policy. */
            interface IPolicy {

                /** Policy version */
                version?: (number|null);

                /** Policy bindings */
                bindings?: (google.iam.v1.IBinding[]|null);

                /** Policy auditConfigs */
                auditConfigs?: (google.iam.v1.IAuditConfig[]|null);

                /** Policy etag */
                etag?: (Uint8Array|Buffer|string|null);
            }

            /** Represents a Policy. */
            class Policy implements IPolicy {

                /**
                 * Constructs a new Policy.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v1.IPolicy);

                /** Policy version. */
                public version: number;

                /** Policy bindings. */
                public bindings: google.iam.v1.IBinding[];

                /** Policy auditConfigs. */
                public auditConfigs: google.iam.v1.IAuditConfig[];

                /** Policy etag. */
                public etag: (Uint8Array|Buffer|string);

                /**
                 * Creates a new Policy instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Policy instance
                 */
                public static create(properties?: google.iam.v1.IPolicy): google.iam.v1.Policy;

                /**
                 * Encodes the specified Policy message. Does not implicitly {@link google.iam.v1.Policy.verify|verify} messages.
                 * @param message Policy message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v1.IPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Policy message, length delimited. Does not implicitly {@link google.iam.v1.Policy.verify|verify} messages.
                 * @param message Policy message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v1.IPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Policy message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Policy
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v1.Policy;

                /**
                 * Decodes a Policy message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Policy
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v1.Policy;

                /**
                 * Verifies a Policy message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Policy message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Policy
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v1.Policy;

                /**
                 * Creates a plain object from a Policy message. Also converts values to other types if specified.
                 * @param message Policy
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v1.Policy, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Policy to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Policy
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a Binding. */
            interface IBinding {

                /** Binding role */
                role?: (string|null);

                /** Binding members */
                members?: (string[]|null);

                /** Binding condition */
                condition?: (google.type.IExpr|null);
            }

            /** Represents a Binding. */
            class Binding implements IBinding {

                /**
                 * Constructs a new Binding.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v1.IBinding);

                /** Binding role. */
                public role: string;

                /** Binding members. */
                public members: string[];

                /** Binding condition. */
                public condition?: (google.type.IExpr|null);

                /**
                 * Creates a new Binding instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Binding instance
                 */
                public static create(properties?: google.iam.v1.IBinding): google.iam.v1.Binding;

                /**
                 * Encodes the specified Binding message. Does not implicitly {@link google.iam.v1.Binding.verify|verify} messages.
                 * @param message Binding message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v1.IBinding, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Binding message, length delimited. Does not implicitly {@link google.iam.v1.Binding.verify|verify} messages.
                 * @param message Binding message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v1.IBinding, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Binding message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Binding
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v1.Binding;

                /**
                 * Decodes a Binding message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Binding
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v1.Binding;

                /**
                 * Verifies a Binding message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Binding message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Binding
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v1.Binding;

                /**
                 * Creates a plain object from a Binding message. Also converts values to other types if specified.
                 * @param message Binding
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v1.Binding, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Binding to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Binding
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of an AuditConfig. */
            interface IAuditConfig {

                /** AuditConfig service */
                service?: (string|null);

                /** AuditConfig auditLogConfigs */
                auditLogConfigs?: (google.iam.v1.IAuditLogConfig[]|null);
            }

            /** Represents an AuditConfig. */
            class AuditConfig implements IAuditConfig {

                /**
                 * Constructs a new AuditConfig.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v1.IAuditConfig);

                /** AuditConfig service. */
                public service: string;

                /** AuditConfig auditLogConfigs. */
                public auditLogConfigs: google.iam.v1.IAuditLogConfig[];

                /**
                 * Creates a new AuditConfig instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns AuditConfig instance
                 */
                public static create(properties?: google.iam.v1.IAuditConfig): google.iam.v1.AuditConfig;

                /**
                 * Encodes the specified AuditConfig message. Does not implicitly {@link google.iam.v1.AuditConfig.verify|verify} messages.
                 * @param message AuditConfig message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v1.IAuditConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified AuditConfig message, length delimited. Does not implicitly {@link google.iam.v1.AuditConfig.verify|verify} messages.
                 * @param message AuditConfig message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v1.IAuditConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an AuditConfig message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns AuditConfig
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v1.AuditConfig;

                /**
                 * Decodes an AuditConfig message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns AuditConfig
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v1.AuditConfig;

                /**
                 * Verifies an AuditConfig message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an AuditConfig message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns AuditConfig
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v1.AuditConfig;

                /**
                 * Creates a plain object from an AuditConfig message. Also converts values to other types if specified.
                 * @param message AuditConfig
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v1.AuditConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this AuditConfig to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for AuditConfig
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of an AuditLogConfig. */
            interface IAuditLogConfig {

                /** AuditLogConfig logType */
                logType?: (google.iam.v1.AuditLogConfig.LogType|keyof typeof google.iam.v1.AuditLogConfig.LogType|null);

                /** AuditLogConfig exemptedMembers */
                exemptedMembers?: (string[]|null);
            }

            /** Represents an AuditLogConfig. */
            class AuditLogConfig implements IAuditLogConfig {

                /**
                 * Constructs a new AuditLogConfig.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v1.IAuditLogConfig);

                /** AuditLogConfig logType. */
                public logType: (google.iam.v1.AuditLogConfig.LogType|keyof typeof google.iam.v1.AuditLogConfig.LogType);

                /** AuditLogConfig exemptedMembers. */
                public exemptedMembers: string[];

                /**
                 * Creates a new AuditLogConfig instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns AuditLogConfig instance
                 */
                public static create(properties?: google.iam.v1.IAuditLogConfig): google.iam.v1.AuditLogConfig;

                /**
                 * Encodes the specified AuditLogConfig message. Does not implicitly {@link google.iam.v1.AuditLogConfig.verify|verify} messages.
                 * @param message AuditLogConfig message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v1.IAuditLogConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified AuditLogConfig message, length delimited. Does not implicitly {@link google.iam.v1.AuditLogConfig.verify|verify} messages.
                 * @param message AuditLogConfig message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v1.IAuditLogConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an AuditLogConfig message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns AuditLogConfig
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v1.AuditLogConfig;

                /**
                 * Decodes an AuditLogConfig message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns AuditLogConfig
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v1.AuditLogConfig;

                /**
                 * Verifies an AuditLogConfig message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an AuditLogConfig message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns AuditLogConfig
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v1.AuditLogConfig;

                /**
                 * Creates a plain object from an AuditLogConfig message. Also converts values to other types if specified.
                 * @param message AuditLogConfig
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v1.AuditLogConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this AuditLogConfig to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for AuditLogConfig
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace AuditLogConfig {

                /** LogType enum. */
                enum LogType {
                    LOG_TYPE_UNSPECIFIED = 0,
                    ADMIN_READ = 1,
                    DATA_WRITE = 2,
                    DATA_READ = 3
                }
            }

            /** Properties of a PolicyDelta. */
            interface IPolicyDelta {

                /** PolicyDelta bindingDeltas */
                bindingDeltas?: (google.iam.v1.IBindingDelta[]|null);

                /** PolicyDelta auditConfigDeltas */
                auditConfigDeltas?: (google.iam.v1.IAuditConfigDelta[]|null);
            }

            /** Represents a PolicyDelta. */
            class PolicyDelta implements IPolicyDelta {

                /**
                 * Constructs a new PolicyDelta.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v1.IPolicyDelta);

                /** PolicyDelta bindingDeltas. */
                public bindingDeltas: google.iam.v1.IBindingDelta[];

                /** PolicyDelta auditConfigDeltas. */
                public auditConfigDeltas: google.iam.v1.IAuditConfigDelta[];

                /**
                 * Creates a new PolicyDelta instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns PolicyDelta instance
                 */
                public static create(properties?: google.iam.v1.IPolicyDelta): google.iam.v1.PolicyDelta;

                /**
                 * Encodes the specified PolicyDelta message. Does not implicitly {@link google.iam.v1.PolicyDelta.verify|verify} messages.
                 * @param message PolicyDelta message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v1.IPolicyDelta, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified PolicyDelta message, length delimited. Does not implicitly {@link google.iam.v1.PolicyDelta.verify|verify} messages.
                 * @param message PolicyDelta message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v1.IPolicyDelta, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a PolicyDelta message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns PolicyDelta
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v1.PolicyDelta;

                /**
                 * Decodes a PolicyDelta message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns PolicyDelta
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v1.PolicyDelta;

                /**
                 * Verifies a PolicyDelta message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a PolicyDelta message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns PolicyDelta
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v1.PolicyDelta;

                /**
                 * Creates a plain object from a PolicyDelta message. Also converts values to other types if specified.
                 * @param message PolicyDelta
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v1.PolicyDelta, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this PolicyDelta to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for PolicyDelta
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a BindingDelta. */
            interface IBindingDelta {

                /** BindingDelta action */
                action?: (google.iam.v1.BindingDelta.Action|keyof typeof google.iam.v1.BindingDelta.Action|null);

                /** BindingDelta role */
                role?: (string|null);

                /** BindingDelta member */
                member?: (string|null);

                /** BindingDelta condition */
                condition?: (google.type.IExpr|null);
            }

            /** Represents a BindingDelta. */
            class BindingDelta implements IBindingDelta {

                /**
                 * Constructs a new BindingDelta.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v1.IBindingDelta);

                /** BindingDelta action. */
                public action: (google.iam.v1.BindingDelta.Action|keyof typeof google.iam.v1.BindingDelta.Action);

                /** BindingDelta role. */
                public role: string;

                /** BindingDelta member. */
                public member: string;

                /** BindingDelta condition. */
                public condition?: (google.type.IExpr|null);

                /**
                 * Creates a new BindingDelta instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns BindingDelta instance
                 */
                public static create(properties?: google.iam.v1.IBindingDelta): google.iam.v1.BindingDelta;

                /**
                 * Encodes the specified BindingDelta message. Does not implicitly {@link google.iam.v1.BindingDelta.verify|verify} messages.
                 * @param message BindingDelta message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v1.IBindingDelta, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified BindingDelta message, length delimited. Does not implicitly {@link google.iam.v1.BindingDelta.verify|verify} messages.
                 * @param message BindingDelta message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v1.IBindingDelta, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a BindingDelta message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns BindingDelta
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v1.BindingDelta;

                /**
                 * Decodes a BindingDelta message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns BindingDelta
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v1.BindingDelta;

                /**
                 * Verifies a BindingDelta message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a BindingDelta message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns BindingDelta
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v1.BindingDelta;

                /**
                 * Creates a plain object from a BindingDelta message. Also converts values to other types if specified.
                 * @param message BindingDelta
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v1.BindingDelta, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this BindingDelta to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for BindingDelta
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace BindingDelta {

                /** Action enum. */
                enum Action {
                    ACTION_UNSPECIFIED = 0,
                    ADD = 1,
                    REMOVE = 2
                }
            }

            /** Properties of an AuditConfigDelta. */
            interface IAuditConfigDelta {

                /** AuditConfigDelta action */
                action?: (google.iam.v1.AuditConfigDelta.Action|keyof typeof google.iam.v1.AuditConfigDelta.Action|null);

                /** AuditConfigDelta service */
                service?: (string|null);

                /** AuditConfigDelta exemptedMember */
                exemptedMember?: (string|null);

                /** AuditConfigDelta logType */
                logType?: (string|null);
            }

            /** Represents an AuditConfigDelta. */
            class AuditConfigDelta implements IAuditConfigDelta {

                /**
                 * Constructs a new AuditConfigDelta.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v1.IAuditConfigDelta);

                /** AuditConfigDelta action. */
                public action: (google.iam.v1.AuditConfigDelta.Action|keyof typeof google.iam.v1.AuditConfigDelta.Action);

                /** AuditConfigDelta service. */
                public service: string;

                /** AuditConfigDelta exemptedMember. */
                public exemptedMember: string;

                /** AuditConfigDelta logType. */
                public logType: string;

                /**
                 * Creates a new AuditConfigDelta instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns AuditConfigDelta instance
                 */
                public static create(properties?: google.iam.v1.IAuditConfigDelta): google.iam.v1.AuditConfigDelta;

                /**
                 * Encodes the specified AuditConfigDelta message. Does not implicitly {@link google.iam.v1.AuditConfigDelta.verify|verify} messages.
                 * @param message AuditConfigDelta message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v1.IAuditConfigDelta, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified AuditConfigDelta message, length delimited. Does not implicitly {@link google.iam.v1.AuditConfigDelta.verify|verify} messages.
                 * @param message AuditConfigDelta message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v1.IAuditConfigDelta, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an AuditConfigDelta message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns AuditConfigDelta
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v1.AuditConfigDelta;

                /**
                 * Decodes an AuditConfigDelta message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns AuditConfigDelta
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v1.AuditConfigDelta;

                /**
                 * Verifies an AuditConfigDelta message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an AuditConfigDelta message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns AuditConfigDelta
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v1.AuditConfigDelta;

                /**
                 * Creates a plain object from an AuditConfigDelta message. Also converts values to other types if specified.
                 * @param message AuditConfigDelta
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v1.AuditConfigDelta, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this AuditConfigDelta to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for AuditConfigDelta
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace AuditConfigDelta {

                /** Action enum. */
                enum Action {
                    ACTION_UNSPECIFIED = 0,
                    ADD = 1,
                    REMOVE = 2
                }
            }
        }
    }

    /** Namespace type. */
    namespace type {

        /** Properties of an Expr. */
        interface IExpr {

            /** Expr expression */
            expression?: (string|null);

            /** Expr title */
            title?: (string|null);

            /** Expr description */
            description?: (string|null);

            /** Expr location */
            location?: (string|null);
        }

        /** Represents an Expr. */
        class Expr implements IExpr {

            /**
             * Constructs a new Expr.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.type.IExpr);

            /** Expr expression. */
            public expression: string;

            /** Expr title. */
            public title: string;

            /** Expr description. */
            public description: string;

            /** Expr location. */
            public location: string;

            /**
             * Creates a new Expr instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Expr instance
             */
            public static create(properties?: google.type.IExpr): google.type.Expr;

            /**
             * Encodes the specified Expr message. Does not implicitly {@link google.type.Expr.verify|verify} messages.
             * @param message Expr message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.type.IExpr, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Expr message, length delimited. Does not implicitly {@link google.type.Expr.verify|verify} messages.
             * @param message Expr message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.type.IExpr, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Expr message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Expr
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.type.Expr;

            /**
             * Decodes an Expr message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Expr
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.type.Expr;

            /**
             * Verifies an Expr message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Expr message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Expr
             */
            public static fromObject(object: { [k: string]: any }): google.type.Expr;

            /**
             * Creates a plain object from an Expr message. Also converts values to other types if specified.
             * @param message Expr
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.type.Expr, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Expr to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Expr
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
