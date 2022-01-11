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

    /** Namespace identity. */
    namespace identity {

        /** Namespace accesscontextmanager. */
        namespace accesscontextmanager {

            /** Namespace type. */
            namespace type {

                /** DeviceEncryptionStatus enum. */
                enum DeviceEncryptionStatus {
                    ENCRYPTION_UNSPECIFIED = 0,
                    ENCRYPTION_UNSUPPORTED = 1,
                    UNENCRYPTED = 2,
                    ENCRYPTED = 3
                }

                /** OsType enum. */
                enum OsType {
                    OS_UNSPECIFIED = 0,
                    DESKTOP_MAC = 1,
                    DESKTOP_WINDOWS = 2,
                    DESKTOP_LINUX = 3,
                    DESKTOP_CHROME_OS = 6,
                    ANDROID = 4,
                    IOS = 5
                }

                /** DeviceManagementLevel enum. */
                enum DeviceManagementLevel {
                    MANAGEMENT_UNSPECIFIED = 0,
                    NONE = 1,
                    BASIC = 2,
                    COMPLETE = 3
                }
            }

            /** Namespace v1. */
            namespace v1 {

                /** Represents an AccessContextManager */
                class AccessContextManager extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new AccessContextManager service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new AccessContextManager service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): AccessContextManager;

                    /**
                     * Calls ListAccessPolicies.
                     * @param request ListAccessPoliciesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListAccessPoliciesResponse
                     */
                    public listAccessPolicies(request: google.identity.accesscontextmanager.v1.IListAccessPoliciesRequest, callback: google.identity.accesscontextmanager.v1.AccessContextManager.ListAccessPoliciesCallback): void;

                    /**
                     * Calls ListAccessPolicies.
                     * @param request ListAccessPoliciesRequest message or plain object
                     * @returns Promise
                     */
                    public listAccessPolicies(request: google.identity.accesscontextmanager.v1.IListAccessPoliciesRequest): Promise<google.identity.accesscontextmanager.v1.ListAccessPoliciesResponse>;

                    /**
                     * Calls GetAccessPolicy.
                     * @param request GetAccessPolicyRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and AccessPolicy
                     */
                    public getAccessPolicy(request: google.identity.accesscontextmanager.v1.IGetAccessPolicyRequest, callback: google.identity.accesscontextmanager.v1.AccessContextManager.GetAccessPolicyCallback): void;

                    /**
                     * Calls GetAccessPolicy.
                     * @param request GetAccessPolicyRequest message or plain object
                     * @returns Promise
                     */
                    public getAccessPolicy(request: google.identity.accesscontextmanager.v1.IGetAccessPolicyRequest): Promise<google.identity.accesscontextmanager.v1.AccessPolicy>;

                    /**
                     * Calls CreateAccessPolicy.
                     * @param request AccessPolicy message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createAccessPolicy(request: google.identity.accesscontextmanager.v1.IAccessPolicy, callback: google.identity.accesscontextmanager.v1.AccessContextManager.CreateAccessPolicyCallback): void;

                    /**
                     * Calls CreateAccessPolicy.
                     * @param request AccessPolicy message or plain object
                     * @returns Promise
                     */
                    public createAccessPolicy(request: google.identity.accesscontextmanager.v1.IAccessPolicy): Promise<google.longrunning.Operation>;

                    /**
                     * Calls UpdateAccessPolicy.
                     * @param request UpdateAccessPolicyRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public updateAccessPolicy(request: google.identity.accesscontextmanager.v1.IUpdateAccessPolicyRequest, callback: google.identity.accesscontextmanager.v1.AccessContextManager.UpdateAccessPolicyCallback): void;

                    /**
                     * Calls UpdateAccessPolicy.
                     * @param request UpdateAccessPolicyRequest message or plain object
                     * @returns Promise
                     */
                    public updateAccessPolicy(request: google.identity.accesscontextmanager.v1.IUpdateAccessPolicyRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls DeleteAccessPolicy.
                     * @param request DeleteAccessPolicyRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deleteAccessPolicy(request: google.identity.accesscontextmanager.v1.IDeleteAccessPolicyRequest, callback: google.identity.accesscontextmanager.v1.AccessContextManager.DeleteAccessPolicyCallback): void;

                    /**
                     * Calls DeleteAccessPolicy.
                     * @param request DeleteAccessPolicyRequest message or plain object
                     * @returns Promise
                     */
                    public deleteAccessPolicy(request: google.identity.accesscontextmanager.v1.IDeleteAccessPolicyRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ListAccessLevels.
                     * @param request ListAccessLevelsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListAccessLevelsResponse
                     */
                    public listAccessLevels(request: google.identity.accesscontextmanager.v1.IListAccessLevelsRequest, callback: google.identity.accesscontextmanager.v1.AccessContextManager.ListAccessLevelsCallback): void;

                    /**
                     * Calls ListAccessLevels.
                     * @param request ListAccessLevelsRequest message or plain object
                     * @returns Promise
                     */
                    public listAccessLevels(request: google.identity.accesscontextmanager.v1.IListAccessLevelsRequest): Promise<google.identity.accesscontextmanager.v1.ListAccessLevelsResponse>;

                    /**
                     * Calls GetAccessLevel.
                     * @param request GetAccessLevelRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and AccessLevel
                     */
                    public getAccessLevel(request: google.identity.accesscontextmanager.v1.IGetAccessLevelRequest, callback: google.identity.accesscontextmanager.v1.AccessContextManager.GetAccessLevelCallback): void;

                    /**
                     * Calls GetAccessLevel.
                     * @param request GetAccessLevelRequest message or plain object
                     * @returns Promise
                     */
                    public getAccessLevel(request: google.identity.accesscontextmanager.v1.IGetAccessLevelRequest): Promise<google.identity.accesscontextmanager.v1.AccessLevel>;

                    /**
                     * Calls CreateAccessLevel.
                     * @param request CreateAccessLevelRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createAccessLevel(request: google.identity.accesscontextmanager.v1.ICreateAccessLevelRequest, callback: google.identity.accesscontextmanager.v1.AccessContextManager.CreateAccessLevelCallback): void;

                    /**
                     * Calls CreateAccessLevel.
                     * @param request CreateAccessLevelRequest message or plain object
                     * @returns Promise
                     */
                    public createAccessLevel(request: google.identity.accesscontextmanager.v1.ICreateAccessLevelRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls UpdateAccessLevel.
                     * @param request UpdateAccessLevelRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public updateAccessLevel(request: google.identity.accesscontextmanager.v1.IUpdateAccessLevelRequest, callback: google.identity.accesscontextmanager.v1.AccessContextManager.UpdateAccessLevelCallback): void;

                    /**
                     * Calls UpdateAccessLevel.
                     * @param request UpdateAccessLevelRequest message or plain object
                     * @returns Promise
                     */
                    public updateAccessLevel(request: google.identity.accesscontextmanager.v1.IUpdateAccessLevelRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls DeleteAccessLevel.
                     * @param request DeleteAccessLevelRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deleteAccessLevel(request: google.identity.accesscontextmanager.v1.IDeleteAccessLevelRequest, callback: google.identity.accesscontextmanager.v1.AccessContextManager.DeleteAccessLevelCallback): void;

                    /**
                     * Calls DeleteAccessLevel.
                     * @param request DeleteAccessLevelRequest message or plain object
                     * @returns Promise
                     */
                    public deleteAccessLevel(request: google.identity.accesscontextmanager.v1.IDeleteAccessLevelRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ReplaceAccessLevels.
                     * @param request ReplaceAccessLevelsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public replaceAccessLevels(request: google.identity.accesscontextmanager.v1.IReplaceAccessLevelsRequest, callback: google.identity.accesscontextmanager.v1.AccessContextManager.ReplaceAccessLevelsCallback): void;

                    /**
                     * Calls ReplaceAccessLevels.
                     * @param request ReplaceAccessLevelsRequest message or plain object
                     * @returns Promise
                     */
                    public replaceAccessLevels(request: google.identity.accesscontextmanager.v1.IReplaceAccessLevelsRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ListServicePerimeters.
                     * @param request ListServicePerimetersRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListServicePerimetersResponse
                     */
                    public listServicePerimeters(request: google.identity.accesscontextmanager.v1.IListServicePerimetersRequest, callback: google.identity.accesscontextmanager.v1.AccessContextManager.ListServicePerimetersCallback): void;

                    /**
                     * Calls ListServicePerimeters.
                     * @param request ListServicePerimetersRequest message or plain object
                     * @returns Promise
                     */
                    public listServicePerimeters(request: google.identity.accesscontextmanager.v1.IListServicePerimetersRequest): Promise<google.identity.accesscontextmanager.v1.ListServicePerimetersResponse>;

                    /**
                     * Calls GetServicePerimeter.
                     * @param request GetServicePerimeterRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ServicePerimeter
                     */
                    public getServicePerimeter(request: google.identity.accesscontextmanager.v1.IGetServicePerimeterRequest, callback: google.identity.accesscontextmanager.v1.AccessContextManager.GetServicePerimeterCallback): void;

                    /**
                     * Calls GetServicePerimeter.
                     * @param request GetServicePerimeterRequest message or plain object
                     * @returns Promise
                     */
                    public getServicePerimeter(request: google.identity.accesscontextmanager.v1.IGetServicePerimeterRequest): Promise<google.identity.accesscontextmanager.v1.ServicePerimeter>;

                    /**
                     * Calls CreateServicePerimeter.
                     * @param request CreateServicePerimeterRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createServicePerimeter(request: google.identity.accesscontextmanager.v1.ICreateServicePerimeterRequest, callback: google.identity.accesscontextmanager.v1.AccessContextManager.CreateServicePerimeterCallback): void;

                    /**
                     * Calls CreateServicePerimeter.
                     * @param request CreateServicePerimeterRequest message or plain object
                     * @returns Promise
                     */
                    public createServicePerimeter(request: google.identity.accesscontextmanager.v1.ICreateServicePerimeterRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls UpdateServicePerimeter.
                     * @param request UpdateServicePerimeterRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public updateServicePerimeter(request: google.identity.accesscontextmanager.v1.IUpdateServicePerimeterRequest, callback: google.identity.accesscontextmanager.v1.AccessContextManager.UpdateServicePerimeterCallback): void;

                    /**
                     * Calls UpdateServicePerimeter.
                     * @param request UpdateServicePerimeterRequest message or plain object
                     * @returns Promise
                     */
                    public updateServicePerimeter(request: google.identity.accesscontextmanager.v1.IUpdateServicePerimeterRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls DeleteServicePerimeter.
                     * @param request DeleteServicePerimeterRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deleteServicePerimeter(request: google.identity.accesscontextmanager.v1.IDeleteServicePerimeterRequest, callback: google.identity.accesscontextmanager.v1.AccessContextManager.DeleteServicePerimeterCallback): void;

                    /**
                     * Calls DeleteServicePerimeter.
                     * @param request DeleteServicePerimeterRequest message or plain object
                     * @returns Promise
                     */
                    public deleteServicePerimeter(request: google.identity.accesscontextmanager.v1.IDeleteServicePerimeterRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ReplaceServicePerimeters.
                     * @param request ReplaceServicePerimetersRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public replaceServicePerimeters(request: google.identity.accesscontextmanager.v1.IReplaceServicePerimetersRequest, callback: google.identity.accesscontextmanager.v1.AccessContextManager.ReplaceServicePerimetersCallback): void;

                    /**
                     * Calls ReplaceServicePerimeters.
                     * @param request ReplaceServicePerimetersRequest message or plain object
                     * @returns Promise
                     */
                    public replaceServicePerimeters(request: google.identity.accesscontextmanager.v1.IReplaceServicePerimetersRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls CommitServicePerimeters.
                     * @param request CommitServicePerimetersRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public commitServicePerimeters(request: google.identity.accesscontextmanager.v1.ICommitServicePerimetersRequest, callback: google.identity.accesscontextmanager.v1.AccessContextManager.CommitServicePerimetersCallback): void;

                    /**
                     * Calls CommitServicePerimeters.
                     * @param request CommitServicePerimetersRequest message or plain object
                     * @returns Promise
                     */
                    public commitServicePerimeters(request: google.identity.accesscontextmanager.v1.ICommitServicePerimetersRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ListGcpUserAccessBindings.
                     * @param request ListGcpUserAccessBindingsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListGcpUserAccessBindingsResponse
                     */
                    public listGcpUserAccessBindings(request: google.identity.accesscontextmanager.v1.IListGcpUserAccessBindingsRequest, callback: google.identity.accesscontextmanager.v1.AccessContextManager.ListGcpUserAccessBindingsCallback): void;

                    /**
                     * Calls ListGcpUserAccessBindings.
                     * @param request ListGcpUserAccessBindingsRequest message or plain object
                     * @returns Promise
                     */
                    public listGcpUserAccessBindings(request: google.identity.accesscontextmanager.v1.IListGcpUserAccessBindingsRequest): Promise<google.identity.accesscontextmanager.v1.ListGcpUserAccessBindingsResponse>;

                    /**
                     * Calls GetGcpUserAccessBinding.
                     * @param request GetGcpUserAccessBindingRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and GcpUserAccessBinding
                     */
                    public getGcpUserAccessBinding(request: google.identity.accesscontextmanager.v1.IGetGcpUserAccessBindingRequest, callback: google.identity.accesscontextmanager.v1.AccessContextManager.GetGcpUserAccessBindingCallback): void;

                    /**
                     * Calls GetGcpUserAccessBinding.
                     * @param request GetGcpUserAccessBindingRequest message or plain object
                     * @returns Promise
                     */
                    public getGcpUserAccessBinding(request: google.identity.accesscontextmanager.v1.IGetGcpUserAccessBindingRequest): Promise<google.identity.accesscontextmanager.v1.GcpUserAccessBinding>;

                    /**
                     * Calls CreateGcpUserAccessBinding.
                     * @param request CreateGcpUserAccessBindingRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createGcpUserAccessBinding(request: google.identity.accesscontextmanager.v1.ICreateGcpUserAccessBindingRequest, callback: google.identity.accesscontextmanager.v1.AccessContextManager.CreateGcpUserAccessBindingCallback): void;

                    /**
                     * Calls CreateGcpUserAccessBinding.
                     * @param request CreateGcpUserAccessBindingRequest message or plain object
                     * @returns Promise
                     */
                    public createGcpUserAccessBinding(request: google.identity.accesscontextmanager.v1.ICreateGcpUserAccessBindingRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls UpdateGcpUserAccessBinding.
                     * @param request UpdateGcpUserAccessBindingRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public updateGcpUserAccessBinding(request: google.identity.accesscontextmanager.v1.IUpdateGcpUserAccessBindingRequest, callback: google.identity.accesscontextmanager.v1.AccessContextManager.UpdateGcpUserAccessBindingCallback): void;

                    /**
                     * Calls UpdateGcpUserAccessBinding.
                     * @param request UpdateGcpUserAccessBindingRequest message or plain object
                     * @returns Promise
                     */
                    public updateGcpUserAccessBinding(request: google.identity.accesscontextmanager.v1.IUpdateGcpUserAccessBindingRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls DeleteGcpUserAccessBinding.
                     * @param request DeleteGcpUserAccessBindingRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deleteGcpUserAccessBinding(request: google.identity.accesscontextmanager.v1.IDeleteGcpUserAccessBindingRequest, callback: google.identity.accesscontextmanager.v1.AccessContextManager.DeleteGcpUserAccessBindingCallback): void;

                    /**
                     * Calls DeleteGcpUserAccessBinding.
                     * @param request DeleteGcpUserAccessBindingRequest message or plain object
                     * @returns Promise
                     */
                    public deleteGcpUserAccessBinding(request: google.identity.accesscontextmanager.v1.IDeleteGcpUserAccessBindingRequest): Promise<google.longrunning.Operation>;
                }

                namespace AccessContextManager {

                    /**
                     * Callback as used by {@link google.identity.accesscontextmanager.v1.AccessContextManager#listAccessPolicies}.
                     * @param error Error, if any
                     * @param [response] ListAccessPoliciesResponse
                     */
                    type ListAccessPoliciesCallback = (error: (Error|null), response?: google.identity.accesscontextmanager.v1.ListAccessPoliciesResponse) => void;

                    /**
                     * Callback as used by {@link google.identity.accesscontextmanager.v1.AccessContextManager#getAccessPolicy}.
                     * @param error Error, if any
                     * @param [response] AccessPolicy
                     */
                    type GetAccessPolicyCallback = (error: (Error|null), response?: google.identity.accesscontextmanager.v1.AccessPolicy) => void;

                    /**
                     * Callback as used by {@link google.identity.accesscontextmanager.v1.AccessContextManager#createAccessPolicy}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateAccessPolicyCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.identity.accesscontextmanager.v1.AccessContextManager#updateAccessPolicy}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type UpdateAccessPolicyCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.identity.accesscontextmanager.v1.AccessContextManager#deleteAccessPolicy}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeleteAccessPolicyCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.identity.accesscontextmanager.v1.AccessContextManager#listAccessLevels}.
                     * @param error Error, if any
                     * @param [response] ListAccessLevelsResponse
                     */
                    type ListAccessLevelsCallback = (error: (Error|null), response?: google.identity.accesscontextmanager.v1.ListAccessLevelsResponse) => void;

                    /**
                     * Callback as used by {@link google.identity.accesscontextmanager.v1.AccessContextManager#getAccessLevel}.
                     * @param error Error, if any
                     * @param [response] AccessLevel
                     */
                    type GetAccessLevelCallback = (error: (Error|null), response?: google.identity.accesscontextmanager.v1.AccessLevel) => void;

                    /**
                     * Callback as used by {@link google.identity.accesscontextmanager.v1.AccessContextManager#createAccessLevel}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateAccessLevelCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.identity.accesscontextmanager.v1.AccessContextManager#updateAccessLevel}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type UpdateAccessLevelCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.identity.accesscontextmanager.v1.AccessContextManager#deleteAccessLevel}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeleteAccessLevelCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.identity.accesscontextmanager.v1.AccessContextManager#replaceAccessLevels}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type ReplaceAccessLevelsCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.identity.accesscontextmanager.v1.AccessContextManager#listServicePerimeters}.
                     * @param error Error, if any
                     * @param [response] ListServicePerimetersResponse
                     */
                    type ListServicePerimetersCallback = (error: (Error|null), response?: google.identity.accesscontextmanager.v1.ListServicePerimetersResponse) => void;

                    /**
                     * Callback as used by {@link google.identity.accesscontextmanager.v1.AccessContextManager#getServicePerimeter}.
                     * @param error Error, if any
                     * @param [response] ServicePerimeter
                     */
                    type GetServicePerimeterCallback = (error: (Error|null), response?: google.identity.accesscontextmanager.v1.ServicePerimeter) => void;

                    /**
                     * Callback as used by {@link google.identity.accesscontextmanager.v1.AccessContextManager#createServicePerimeter}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateServicePerimeterCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.identity.accesscontextmanager.v1.AccessContextManager#updateServicePerimeter}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type UpdateServicePerimeterCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.identity.accesscontextmanager.v1.AccessContextManager#deleteServicePerimeter}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeleteServicePerimeterCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.identity.accesscontextmanager.v1.AccessContextManager#replaceServicePerimeters}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type ReplaceServicePerimetersCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.identity.accesscontextmanager.v1.AccessContextManager#commitServicePerimeters}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CommitServicePerimetersCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.identity.accesscontextmanager.v1.AccessContextManager#listGcpUserAccessBindings}.
                     * @param error Error, if any
                     * @param [response] ListGcpUserAccessBindingsResponse
                     */
                    type ListGcpUserAccessBindingsCallback = (error: (Error|null), response?: google.identity.accesscontextmanager.v1.ListGcpUserAccessBindingsResponse) => void;

                    /**
                     * Callback as used by {@link google.identity.accesscontextmanager.v1.AccessContextManager#getGcpUserAccessBinding}.
                     * @param error Error, if any
                     * @param [response] GcpUserAccessBinding
                     */
                    type GetGcpUserAccessBindingCallback = (error: (Error|null), response?: google.identity.accesscontextmanager.v1.GcpUserAccessBinding) => void;

                    /**
                     * Callback as used by {@link google.identity.accesscontextmanager.v1.AccessContextManager#createGcpUserAccessBinding}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateGcpUserAccessBindingCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.identity.accesscontextmanager.v1.AccessContextManager#updateGcpUserAccessBinding}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type UpdateGcpUserAccessBindingCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.identity.accesscontextmanager.v1.AccessContextManager#deleteGcpUserAccessBinding}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeleteGcpUserAccessBindingCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;
                }

                /** Properties of a ListAccessPoliciesRequest. */
                interface IListAccessPoliciesRequest {

                    /** ListAccessPoliciesRequest parent */
                    parent?: (string|null);

                    /** ListAccessPoliciesRequest pageSize */
                    pageSize?: (number|null);

                    /** ListAccessPoliciesRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListAccessPoliciesRequest. */
                class ListAccessPoliciesRequest implements IListAccessPoliciesRequest {

                    /**
                     * Constructs a new ListAccessPoliciesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.identity.accesscontextmanager.v1.IListAccessPoliciesRequest);

                    /** ListAccessPoliciesRequest parent. */
                    public parent: string;

                    /** ListAccessPoliciesRequest pageSize. */
                    public pageSize: number;

                    /** ListAccessPoliciesRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListAccessPoliciesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListAccessPoliciesRequest instance
                     */
                    public static create(properties?: google.identity.accesscontextmanager.v1.IListAccessPoliciesRequest): google.identity.accesscontextmanager.v1.ListAccessPoliciesRequest;

                    /**
                     * Encodes the specified ListAccessPoliciesRequest message. Does not implicitly {@link google.identity.accesscontextmanager.v1.ListAccessPoliciesRequest.verify|verify} messages.
                     * @param message ListAccessPoliciesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.identity.accesscontextmanager.v1.IListAccessPoliciesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListAccessPoliciesRequest message, length delimited. Does not implicitly {@link google.identity.accesscontextmanager.v1.ListAccessPoliciesRequest.verify|verify} messages.
                     * @param message ListAccessPoliciesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.identity.accesscontextmanager.v1.IListAccessPoliciesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListAccessPoliciesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListAccessPoliciesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.identity.accesscontextmanager.v1.ListAccessPoliciesRequest;

                    /**
                     * Decodes a ListAccessPoliciesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListAccessPoliciesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.identity.accesscontextmanager.v1.ListAccessPoliciesRequest;

                    /**
                     * Verifies a ListAccessPoliciesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListAccessPoliciesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListAccessPoliciesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.identity.accesscontextmanager.v1.ListAccessPoliciesRequest;

                    /**
                     * Creates a plain object from a ListAccessPoliciesRequest message. Also converts values to other types if specified.
                     * @param message ListAccessPoliciesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.identity.accesscontextmanager.v1.ListAccessPoliciesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListAccessPoliciesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListAccessPoliciesResponse. */
                interface IListAccessPoliciesResponse {

                    /** ListAccessPoliciesResponse accessPolicies */
                    accessPolicies?: (google.identity.accesscontextmanager.v1.IAccessPolicy[]|null);

                    /** ListAccessPoliciesResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListAccessPoliciesResponse. */
                class ListAccessPoliciesResponse implements IListAccessPoliciesResponse {

                    /**
                     * Constructs a new ListAccessPoliciesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.identity.accesscontextmanager.v1.IListAccessPoliciesResponse);

                    /** ListAccessPoliciesResponse accessPolicies. */
                    public accessPolicies: google.identity.accesscontextmanager.v1.IAccessPolicy[];

                    /** ListAccessPoliciesResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListAccessPoliciesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListAccessPoliciesResponse instance
                     */
                    public static create(properties?: google.identity.accesscontextmanager.v1.IListAccessPoliciesResponse): google.identity.accesscontextmanager.v1.ListAccessPoliciesResponse;

                    /**
                     * Encodes the specified ListAccessPoliciesResponse message. Does not implicitly {@link google.identity.accesscontextmanager.v1.ListAccessPoliciesResponse.verify|verify} messages.
                     * @param message ListAccessPoliciesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.identity.accesscontextmanager.v1.IListAccessPoliciesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListAccessPoliciesResponse message, length delimited. Does not implicitly {@link google.identity.accesscontextmanager.v1.ListAccessPoliciesResponse.verify|verify} messages.
                     * @param message ListAccessPoliciesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.identity.accesscontextmanager.v1.IListAccessPoliciesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListAccessPoliciesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListAccessPoliciesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.identity.accesscontextmanager.v1.ListAccessPoliciesResponse;

                    /**
                     * Decodes a ListAccessPoliciesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListAccessPoliciesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.identity.accesscontextmanager.v1.ListAccessPoliciesResponse;

                    /**
                     * Verifies a ListAccessPoliciesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListAccessPoliciesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListAccessPoliciesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.identity.accesscontextmanager.v1.ListAccessPoliciesResponse;

                    /**
                     * Creates a plain object from a ListAccessPoliciesResponse message. Also converts values to other types if specified.
                     * @param message ListAccessPoliciesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.identity.accesscontextmanager.v1.ListAccessPoliciesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListAccessPoliciesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetAccessPolicyRequest. */
                interface IGetAccessPolicyRequest {

                    /** GetAccessPolicyRequest name */
                    name?: (string|null);
                }

                /** Represents a GetAccessPolicyRequest. */
                class GetAccessPolicyRequest implements IGetAccessPolicyRequest {

                    /**
                     * Constructs a new GetAccessPolicyRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.identity.accesscontextmanager.v1.IGetAccessPolicyRequest);

                    /** GetAccessPolicyRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetAccessPolicyRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetAccessPolicyRequest instance
                     */
                    public static create(properties?: google.identity.accesscontextmanager.v1.IGetAccessPolicyRequest): google.identity.accesscontextmanager.v1.GetAccessPolicyRequest;

                    /**
                     * Encodes the specified GetAccessPolicyRequest message. Does not implicitly {@link google.identity.accesscontextmanager.v1.GetAccessPolicyRequest.verify|verify} messages.
                     * @param message GetAccessPolicyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.identity.accesscontextmanager.v1.IGetAccessPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetAccessPolicyRequest message, length delimited. Does not implicitly {@link google.identity.accesscontextmanager.v1.GetAccessPolicyRequest.verify|verify} messages.
                     * @param message GetAccessPolicyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.identity.accesscontextmanager.v1.IGetAccessPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetAccessPolicyRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetAccessPolicyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.identity.accesscontextmanager.v1.GetAccessPolicyRequest;

                    /**
                     * Decodes a GetAccessPolicyRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetAccessPolicyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.identity.accesscontextmanager.v1.GetAccessPolicyRequest;

                    /**
                     * Verifies a GetAccessPolicyRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetAccessPolicyRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetAccessPolicyRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.identity.accesscontextmanager.v1.GetAccessPolicyRequest;

                    /**
                     * Creates a plain object from a GetAccessPolicyRequest message. Also converts values to other types if specified.
                     * @param message GetAccessPolicyRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.identity.accesscontextmanager.v1.GetAccessPolicyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetAccessPolicyRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an UpdateAccessPolicyRequest. */
                interface IUpdateAccessPolicyRequest {

                    /** UpdateAccessPolicyRequest policy */
                    policy?: (google.identity.accesscontextmanager.v1.IAccessPolicy|null);

                    /** UpdateAccessPolicyRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);
                }

                /** Represents an UpdateAccessPolicyRequest. */
                class UpdateAccessPolicyRequest implements IUpdateAccessPolicyRequest {

                    /**
                     * Constructs a new UpdateAccessPolicyRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.identity.accesscontextmanager.v1.IUpdateAccessPolicyRequest);

                    /** UpdateAccessPolicyRequest policy. */
                    public policy?: (google.identity.accesscontextmanager.v1.IAccessPolicy|null);

                    /** UpdateAccessPolicyRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /**
                     * Creates a new UpdateAccessPolicyRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateAccessPolicyRequest instance
                     */
                    public static create(properties?: google.identity.accesscontextmanager.v1.IUpdateAccessPolicyRequest): google.identity.accesscontextmanager.v1.UpdateAccessPolicyRequest;

                    /**
                     * Encodes the specified UpdateAccessPolicyRequest message. Does not implicitly {@link google.identity.accesscontextmanager.v1.UpdateAccessPolicyRequest.verify|verify} messages.
                     * @param message UpdateAccessPolicyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.identity.accesscontextmanager.v1.IUpdateAccessPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateAccessPolicyRequest message, length delimited. Does not implicitly {@link google.identity.accesscontextmanager.v1.UpdateAccessPolicyRequest.verify|verify} messages.
                     * @param message UpdateAccessPolicyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.identity.accesscontextmanager.v1.IUpdateAccessPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateAccessPolicyRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateAccessPolicyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.identity.accesscontextmanager.v1.UpdateAccessPolicyRequest;

                    /**
                     * Decodes an UpdateAccessPolicyRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateAccessPolicyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.identity.accesscontextmanager.v1.UpdateAccessPolicyRequest;

                    /**
                     * Verifies an UpdateAccessPolicyRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateAccessPolicyRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateAccessPolicyRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.identity.accesscontextmanager.v1.UpdateAccessPolicyRequest;

                    /**
                     * Creates a plain object from an UpdateAccessPolicyRequest message. Also converts values to other types if specified.
                     * @param message UpdateAccessPolicyRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.identity.accesscontextmanager.v1.UpdateAccessPolicyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateAccessPolicyRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DeleteAccessPolicyRequest. */
                interface IDeleteAccessPolicyRequest {

                    /** DeleteAccessPolicyRequest name */
                    name?: (string|null);
                }

                /** Represents a DeleteAccessPolicyRequest. */
                class DeleteAccessPolicyRequest implements IDeleteAccessPolicyRequest {

                    /**
                     * Constructs a new DeleteAccessPolicyRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.identity.accesscontextmanager.v1.IDeleteAccessPolicyRequest);

                    /** DeleteAccessPolicyRequest name. */
                    public name: string;

                    /**
                     * Creates a new DeleteAccessPolicyRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteAccessPolicyRequest instance
                     */
                    public static create(properties?: google.identity.accesscontextmanager.v1.IDeleteAccessPolicyRequest): google.identity.accesscontextmanager.v1.DeleteAccessPolicyRequest;

                    /**
                     * Encodes the specified DeleteAccessPolicyRequest message. Does not implicitly {@link google.identity.accesscontextmanager.v1.DeleteAccessPolicyRequest.verify|verify} messages.
                     * @param message DeleteAccessPolicyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.identity.accesscontextmanager.v1.IDeleteAccessPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteAccessPolicyRequest message, length delimited. Does not implicitly {@link google.identity.accesscontextmanager.v1.DeleteAccessPolicyRequest.verify|verify} messages.
                     * @param message DeleteAccessPolicyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.identity.accesscontextmanager.v1.IDeleteAccessPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteAccessPolicyRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteAccessPolicyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.identity.accesscontextmanager.v1.DeleteAccessPolicyRequest;

                    /**
                     * Decodes a DeleteAccessPolicyRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteAccessPolicyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.identity.accesscontextmanager.v1.DeleteAccessPolicyRequest;

                    /**
                     * Verifies a DeleteAccessPolicyRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteAccessPolicyRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteAccessPolicyRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.identity.accesscontextmanager.v1.DeleteAccessPolicyRequest;

                    /**
                     * Creates a plain object from a DeleteAccessPolicyRequest message. Also converts values to other types if specified.
                     * @param message DeleteAccessPolicyRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.identity.accesscontextmanager.v1.DeleteAccessPolicyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteAccessPolicyRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListAccessLevelsRequest. */
                interface IListAccessLevelsRequest {

                    /** ListAccessLevelsRequest parent */
                    parent?: (string|null);

                    /** ListAccessLevelsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListAccessLevelsRequest pageToken */
                    pageToken?: (string|null);

                    /** ListAccessLevelsRequest accessLevelFormat */
                    accessLevelFormat?: (google.identity.accesscontextmanager.v1.LevelFormat|keyof typeof google.identity.accesscontextmanager.v1.LevelFormat|null);
                }

                /** Represents a ListAccessLevelsRequest. */
                class ListAccessLevelsRequest implements IListAccessLevelsRequest {

                    /**
                     * Constructs a new ListAccessLevelsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.identity.accesscontextmanager.v1.IListAccessLevelsRequest);

                    /** ListAccessLevelsRequest parent. */
                    public parent: string;

                    /** ListAccessLevelsRequest pageSize. */
                    public pageSize: number;

                    /** ListAccessLevelsRequest pageToken. */
                    public pageToken: string;

                    /** ListAccessLevelsRequest accessLevelFormat. */
                    public accessLevelFormat: (google.identity.accesscontextmanager.v1.LevelFormat|keyof typeof google.identity.accesscontextmanager.v1.LevelFormat);

                    /**
                     * Creates a new ListAccessLevelsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListAccessLevelsRequest instance
                     */
                    public static create(properties?: google.identity.accesscontextmanager.v1.IListAccessLevelsRequest): google.identity.accesscontextmanager.v1.ListAccessLevelsRequest;

                    /**
                     * Encodes the specified ListAccessLevelsRequest message. Does not implicitly {@link google.identity.accesscontextmanager.v1.ListAccessLevelsRequest.verify|verify} messages.
                     * @param message ListAccessLevelsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.identity.accesscontextmanager.v1.IListAccessLevelsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListAccessLevelsRequest message, length delimited. Does not implicitly {@link google.identity.accesscontextmanager.v1.ListAccessLevelsRequest.verify|verify} messages.
                     * @param message ListAccessLevelsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.identity.accesscontextmanager.v1.IListAccessLevelsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListAccessLevelsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListAccessLevelsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.identity.accesscontextmanager.v1.ListAccessLevelsRequest;

                    /**
                     * Decodes a ListAccessLevelsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListAccessLevelsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.identity.accesscontextmanager.v1.ListAccessLevelsRequest;

                    /**
                     * Verifies a ListAccessLevelsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListAccessLevelsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListAccessLevelsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.identity.accesscontextmanager.v1.ListAccessLevelsRequest;

                    /**
                     * Creates a plain object from a ListAccessLevelsRequest message. Also converts values to other types if specified.
                     * @param message ListAccessLevelsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.identity.accesscontextmanager.v1.ListAccessLevelsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListAccessLevelsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListAccessLevelsResponse. */
                interface IListAccessLevelsResponse {

                    /** ListAccessLevelsResponse accessLevels */
                    accessLevels?: (google.identity.accesscontextmanager.v1.IAccessLevel[]|null);

                    /** ListAccessLevelsResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListAccessLevelsResponse. */
                class ListAccessLevelsResponse implements IListAccessLevelsResponse {

                    /**
                     * Constructs a new ListAccessLevelsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.identity.accesscontextmanager.v1.IListAccessLevelsResponse);

                    /** ListAccessLevelsResponse accessLevels. */
                    public accessLevels: google.identity.accesscontextmanager.v1.IAccessLevel[];

                    /** ListAccessLevelsResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListAccessLevelsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListAccessLevelsResponse instance
                     */
                    public static create(properties?: google.identity.accesscontextmanager.v1.IListAccessLevelsResponse): google.identity.accesscontextmanager.v1.ListAccessLevelsResponse;

                    /**
                     * Encodes the specified ListAccessLevelsResponse message. Does not implicitly {@link google.identity.accesscontextmanager.v1.ListAccessLevelsResponse.verify|verify} messages.
                     * @param message ListAccessLevelsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.identity.accesscontextmanager.v1.IListAccessLevelsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListAccessLevelsResponse message, length delimited. Does not implicitly {@link google.identity.accesscontextmanager.v1.ListAccessLevelsResponse.verify|verify} messages.
                     * @param message ListAccessLevelsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.identity.accesscontextmanager.v1.IListAccessLevelsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListAccessLevelsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListAccessLevelsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.identity.accesscontextmanager.v1.ListAccessLevelsResponse;

                    /**
                     * Decodes a ListAccessLevelsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListAccessLevelsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.identity.accesscontextmanager.v1.ListAccessLevelsResponse;

                    /**
                     * Verifies a ListAccessLevelsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListAccessLevelsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListAccessLevelsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.identity.accesscontextmanager.v1.ListAccessLevelsResponse;

                    /**
                     * Creates a plain object from a ListAccessLevelsResponse message. Also converts values to other types if specified.
                     * @param message ListAccessLevelsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.identity.accesscontextmanager.v1.ListAccessLevelsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListAccessLevelsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetAccessLevelRequest. */
                interface IGetAccessLevelRequest {

                    /** GetAccessLevelRequest name */
                    name?: (string|null);

                    /** GetAccessLevelRequest accessLevelFormat */
                    accessLevelFormat?: (google.identity.accesscontextmanager.v1.LevelFormat|keyof typeof google.identity.accesscontextmanager.v1.LevelFormat|null);
                }

                /** Represents a GetAccessLevelRequest. */
                class GetAccessLevelRequest implements IGetAccessLevelRequest {

                    /**
                     * Constructs a new GetAccessLevelRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.identity.accesscontextmanager.v1.IGetAccessLevelRequest);

                    /** GetAccessLevelRequest name. */
                    public name: string;

                    /** GetAccessLevelRequest accessLevelFormat. */
                    public accessLevelFormat: (google.identity.accesscontextmanager.v1.LevelFormat|keyof typeof google.identity.accesscontextmanager.v1.LevelFormat);

                    /**
                     * Creates a new GetAccessLevelRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetAccessLevelRequest instance
                     */
                    public static create(properties?: google.identity.accesscontextmanager.v1.IGetAccessLevelRequest): google.identity.accesscontextmanager.v1.GetAccessLevelRequest;

                    /**
                     * Encodes the specified GetAccessLevelRequest message. Does not implicitly {@link google.identity.accesscontextmanager.v1.GetAccessLevelRequest.verify|verify} messages.
                     * @param message GetAccessLevelRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.identity.accesscontextmanager.v1.IGetAccessLevelRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetAccessLevelRequest message, length delimited. Does not implicitly {@link google.identity.accesscontextmanager.v1.GetAccessLevelRequest.verify|verify} messages.
                     * @param message GetAccessLevelRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.identity.accesscontextmanager.v1.IGetAccessLevelRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetAccessLevelRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetAccessLevelRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.identity.accesscontextmanager.v1.GetAccessLevelRequest;

                    /**
                     * Decodes a GetAccessLevelRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetAccessLevelRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.identity.accesscontextmanager.v1.GetAccessLevelRequest;

                    /**
                     * Verifies a GetAccessLevelRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetAccessLevelRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetAccessLevelRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.identity.accesscontextmanager.v1.GetAccessLevelRequest;

                    /**
                     * Creates a plain object from a GetAccessLevelRequest message. Also converts values to other types if specified.
                     * @param message GetAccessLevelRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.identity.accesscontextmanager.v1.GetAccessLevelRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetAccessLevelRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a CreateAccessLevelRequest. */
                interface ICreateAccessLevelRequest {

                    /** CreateAccessLevelRequest parent */
                    parent?: (string|null);

                    /** CreateAccessLevelRequest accessLevel */
                    accessLevel?: (google.identity.accesscontextmanager.v1.IAccessLevel|null);
                }

                /** Represents a CreateAccessLevelRequest. */
                class CreateAccessLevelRequest implements ICreateAccessLevelRequest {

                    /**
                     * Constructs a new CreateAccessLevelRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.identity.accesscontextmanager.v1.ICreateAccessLevelRequest);

                    /** CreateAccessLevelRequest parent. */
                    public parent: string;

                    /** CreateAccessLevelRequest accessLevel. */
                    public accessLevel?: (google.identity.accesscontextmanager.v1.IAccessLevel|null);

                    /**
                     * Creates a new CreateAccessLevelRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateAccessLevelRequest instance
                     */
                    public static create(properties?: google.identity.accesscontextmanager.v1.ICreateAccessLevelRequest): google.identity.accesscontextmanager.v1.CreateAccessLevelRequest;

                    /**
                     * Encodes the specified CreateAccessLevelRequest message. Does not implicitly {@link google.identity.accesscontextmanager.v1.CreateAccessLevelRequest.verify|verify} messages.
                     * @param message CreateAccessLevelRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.identity.accesscontextmanager.v1.ICreateAccessLevelRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateAccessLevelRequest message, length delimited. Does not implicitly {@link google.identity.accesscontextmanager.v1.CreateAccessLevelRequest.verify|verify} messages.
                     * @param message CreateAccessLevelRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.identity.accesscontextmanager.v1.ICreateAccessLevelRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateAccessLevelRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateAccessLevelRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.identity.accesscontextmanager.v1.CreateAccessLevelRequest;

                    /**
                     * Decodes a CreateAccessLevelRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateAccessLevelRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.identity.accesscontextmanager.v1.CreateAccessLevelRequest;

                    /**
                     * Verifies a CreateAccessLevelRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateAccessLevelRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateAccessLevelRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.identity.accesscontextmanager.v1.CreateAccessLevelRequest;

                    /**
                     * Creates a plain object from a CreateAccessLevelRequest message. Also converts values to other types if specified.
                     * @param message CreateAccessLevelRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.identity.accesscontextmanager.v1.CreateAccessLevelRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateAccessLevelRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an UpdateAccessLevelRequest. */
                interface IUpdateAccessLevelRequest {

                    /** UpdateAccessLevelRequest accessLevel */
                    accessLevel?: (google.identity.accesscontextmanager.v1.IAccessLevel|null);

                    /** UpdateAccessLevelRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);
                }

                /** Represents an UpdateAccessLevelRequest. */
                class UpdateAccessLevelRequest implements IUpdateAccessLevelRequest {

                    /**
                     * Constructs a new UpdateAccessLevelRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.identity.accesscontextmanager.v1.IUpdateAccessLevelRequest);

                    /** UpdateAccessLevelRequest accessLevel. */
                    public accessLevel?: (google.identity.accesscontextmanager.v1.IAccessLevel|null);

                    /** UpdateAccessLevelRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /**
                     * Creates a new UpdateAccessLevelRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateAccessLevelRequest instance
                     */
                    public static create(properties?: google.identity.accesscontextmanager.v1.IUpdateAccessLevelRequest): google.identity.accesscontextmanager.v1.UpdateAccessLevelRequest;

                    /**
                     * Encodes the specified UpdateAccessLevelRequest message. Does not implicitly {@link google.identity.accesscontextmanager.v1.UpdateAccessLevelRequest.verify|verify} messages.
                     * @param message UpdateAccessLevelRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.identity.accesscontextmanager.v1.IUpdateAccessLevelRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateAccessLevelRequest message, length delimited. Does not implicitly {@link google.identity.accesscontextmanager.v1.UpdateAccessLevelRequest.verify|verify} messages.
                     * @param message UpdateAccessLevelRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.identity.accesscontextmanager.v1.IUpdateAccessLevelRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateAccessLevelRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateAccessLevelRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.identity.accesscontextmanager.v1.UpdateAccessLevelRequest;

                    /**
                     * Decodes an UpdateAccessLevelRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateAccessLevelRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.identity.accesscontextmanager.v1.UpdateAccessLevelRequest;

                    /**
                     * Verifies an UpdateAccessLevelRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateAccessLevelRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateAccessLevelRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.identity.accesscontextmanager.v1.UpdateAccessLevelRequest;

                    /**
                     * Creates a plain object from an UpdateAccessLevelRequest message. Also converts values to other types if specified.
                     * @param message UpdateAccessLevelRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.identity.accesscontextmanager.v1.UpdateAccessLevelRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateAccessLevelRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DeleteAccessLevelRequest. */
                interface IDeleteAccessLevelRequest {

                    /** DeleteAccessLevelRequest name */
                    name?: (string|null);
                }

                /** Represents a DeleteAccessLevelRequest. */
                class DeleteAccessLevelRequest implements IDeleteAccessLevelRequest {

                    /**
                     * Constructs a new DeleteAccessLevelRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.identity.accesscontextmanager.v1.IDeleteAccessLevelRequest);

                    /** DeleteAccessLevelRequest name. */
                    public name: string;

                    /**
                     * Creates a new DeleteAccessLevelRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteAccessLevelRequest instance
                     */
                    public static create(properties?: google.identity.accesscontextmanager.v1.IDeleteAccessLevelRequest): google.identity.accesscontextmanager.v1.DeleteAccessLevelRequest;

                    /**
                     * Encodes the specified DeleteAccessLevelRequest message. Does not implicitly {@link google.identity.accesscontextmanager.v1.DeleteAccessLevelRequest.verify|verify} messages.
                     * @param message DeleteAccessLevelRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.identity.accesscontextmanager.v1.IDeleteAccessLevelRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteAccessLevelRequest message, length delimited. Does not implicitly {@link google.identity.accesscontextmanager.v1.DeleteAccessLevelRequest.verify|verify} messages.
                     * @param message DeleteAccessLevelRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.identity.accesscontextmanager.v1.IDeleteAccessLevelRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteAccessLevelRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteAccessLevelRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.identity.accesscontextmanager.v1.DeleteAccessLevelRequest;

                    /**
                     * Decodes a DeleteAccessLevelRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteAccessLevelRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.identity.accesscontextmanager.v1.DeleteAccessLevelRequest;

                    /**
                     * Verifies a DeleteAccessLevelRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteAccessLevelRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteAccessLevelRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.identity.accesscontextmanager.v1.DeleteAccessLevelRequest;

                    /**
                     * Creates a plain object from a DeleteAccessLevelRequest message. Also converts values to other types if specified.
                     * @param message DeleteAccessLevelRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.identity.accesscontextmanager.v1.DeleteAccessLevelRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteAccessLevelRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ReplaceAccessLevelsRequest. */
                interface IReplaceAccessLevelsRequest {

                    /** ReplaceAccessLevelsRequest parent */
                    parent?: (string|null);

                    /** ReplaceAccessLevelsRequest accessLevels */
                    accessLevels?: (google.identity.accesscontextmanager.v1.IAccessLevel[]|null);

                    /** ReplaceAccessLevelsRequest etag */
                    etag?: (string|null);
                }

                /** Represents a ReplaceAccessLevelsRequest. */
                class ReplaceAccessLevelsRequest implements IReplaceAccessLevelsRequest {

                    /**
                     * Constructs a new ReplaceAccessLevelsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.identity.accesscontextmanager.v1.IReplaceAccessLevelsRequest);

                    /** ReplaceAccessLevelsRequest parent. */
                    public parent: string;

                    /** ReplaceAccessLevelsRequest accessLevels. */
                    public accessLevels: google.identity.accesscontextmanager.v1.IAccessLevel[];

                    /** ReplaceAccessLevelsRequest etag. */
                    public etag: string;

                    /**
                     * Creates a new ReplaceAccessLevelsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ReplaceAccessLevelsRequest instance
                     */
                    public static create(properties?: google.identity.accesscontextmanager.v1.IReplaceAccessLevelsRequest): google.identity.accesscontextmanager.v1.ReplaceAccessLevelsRequest;

                    /**
                     * Encodes the specified ReplaceAccessLevelsRequest message. Does not implicitly {@link google.identity.accesscontextmanager.v1.ReplaceAccessLevelsRequest.verify|verify} messages.
                     * @param message ReplaceAccessLevelsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.identity.accesscontextmanager.v1.IReplaceAccessLevelsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ReplaceAccessLevelsRequest message, length delimited. Does not implicitly {@link google.identity.accesscontextmanager.v1.ReplaceAccessLevelsRequest.verify|verify} messages.
                     * @param message ReplaceAccessLevelsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.identity.accesscontextmanager.v1.IReplaceAccessLevelsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ReplaceAccessLevelsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ReplaceAccessLevelsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.identity.accesscontextmanager.v1.ReplaceAccessLevelsRequest;

                    /**
                     * Decodes a ReplaceAccessLevelsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ReplaceAccessLevelsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.identity.accesscontextmanager.v1.ReplaceAccessLevelsRequest;

                    /**
                     * Verifies a ReplaceAccessLevelsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ReplaceAccessLevelsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ReplaceAccessLevelsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.identity.accesscontextmanager.v1.ReplaceAccessLevelsRequest;

                    /**
                     * Creates a plain object from a ReplaceAccessLevelsRequest message. Also converts values to other types if specified.
                     * @param message ReplaceAccessLevelsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.identity.accesscontextmanager.v1.ReplaceAccessLevelsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ReplaceAccessLevelsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ReplaceAccessLevelsResponse. */
                interface IReplaceAccessLevelsResponse {

                    /** ReplaceAccessLevelsResponse accessLevels */
                    accessLevels?: (google.identity.accesscontextmanager.v1.IAccessLevel[]|null);
                }

                /** Represents a ReplaceAccessLevelsResponse. */
                class ReplaceAccessLevelsResponse implements IReplaceAccessLevelsResponse {

                    /**
                     * Constructs a new ReplaceAccessLevelsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.identity.accesscontextmanager.v1.IReplaceAccessLevelsResponse);

                    /** ReplaceAccessLevelsResponse accessLevels. */
                    public accessLevels: google.identity.accesscontextmanager.v1.IAccessLevel[];

                    /**
                     * Creates a new ReplaceAccessLevelsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ReplaceAccessLevelsResponse instance
                     */
                    public static create(properties?: google.identity.accesscontextmanager.v1.IReplaceAccessLevelsResponse): google.identity.accesscontextmanager.v1.ReplaceAccessLevelsResponse;

                    /**
                     * Encodes the specified ReplaceAccessLevelsResponse message. Does not implicitly {@link google.identity.accesscontextmanager.v1.ReplaceAccessLevelsResponse.verify|verify} messages.
                     * @param message ReplaceAccessLevelsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.identity.accesscontextmanager.v1.IReplaceAccessLevelsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ReplaceAccessLevelsResponse message, length delimited. Does not implicitly {@link google.identity.accesscontextmanager.v1.ReplaceAccessLevelsResponse.verify|verify} messages.
                     * @param message ReplaceAccessLevelsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.identity.accesscontextmanager.v1.IReplaceAccessLevelsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ReplaceAccessLevelsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ReplaceAccessLevelsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.identity.accesscontextmanager.v1.ReplaceAccessLevelsResponse;

                    /**
                     * Decodes a ReplaceAccessLevelsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ReplaceAccessLevelsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.identity.accesscontextmanager.v1.ReplaceAccessLevelsResponse;

                    /**
                     * Verifies a ReplaceAccessLevelsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ReplaceAccessLevelsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ReplaceAccessLevelsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.identity.accesscontextmanager.v1.ReplaceAccessLevelsResponse;

                    /**
                     * Creates a plain object from a ReplaceAccessLevelsResponse message. Also converts values to other types if specified.
                     * @param message ReplaceAccessLevelsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.identity.accesscontextmanager.v1.ReplaceAccessLevelsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ReplaceAccessLevelsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListServicePerimetersRequest. */
                interface IListServicePerimetersRequest {

                    /** ListServicePerimetersRequest parent */
                    parent?: (string|null);

                    /** ListServicePerimetersRequest pageSize */
                    pageSize?: (number|null);

                    /** ListServicePerimetersRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListServicePerimetersRequest. */
                class ListServicePerimetersRequest implements IListServicePerimetersRequest {

                    /**
                     * Constructs a new ListServicePerimetersRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.identity.accesscontextmanager.v1.IListServicePerimetersRequest);

                    /** ListServicePerimetersRequest parent. */
                    public parent: string;

                    /** ListServicePerimetersRequest pageSize. */
                    public pageSize: number;

                    /** ListServicePerimetersRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListServicePerimetersRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListServicePerimetersRequest instance
                     */
                    public static create(properties?: google.identity.accesscontextmanager.v1.IListServicePerimetersRequest): google.identity.accesscontextmanager.v1.ListServicePerimetersRequest;

                    /**
                     * Encodes the specified ListServicePerimetersRequest message. Does not implicitly {@link google.identity.accesscontextmanager.v1.ListServicePerimetersRequest.verify|verify} messages.
                     * @param message ListServicePerimetersRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.identity.accesscontextmanager.v1.IListServicePerimetersRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListServicePerimetersRequest message, length delimited. Does not implicitly {@link google.identity.accesscontextmanager.v1.ListServicePerimetersRequest.verify|verify} messages.
                     * @param message ListServicePerimetersRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.identity.accesscontextmanager.v1.IListServicePerimetersRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListServicePerimetersRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListServicePerimetersRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.identity.accesscontextmanager.v1.ListServicePerimetersRequest;

                    /**
                     * Decodes a ListServicePerimetersRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListServicePerimetersRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.identity.accesscontextmanager.v1.ListServicePerimetersRequest;

                    /**
                     * Verifies a ListServicePerimetersRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListServicePerimetersRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListServicePerimetersRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.identity.accesscontextmanager.v1.ListServicePerimetersRequest;

                    /**
                     * Creates a plain object from a ListServicePerimetersRequest message. Also converts values to other types if specified.
                     * @param message ListServicePerimetersRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.identity.accesscontextmanager.v1.ListServicePerimetersRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListServicePerimetersRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListServicePerimetersResponse. */
                interface IListServicePerimetersResponse {

                    /** ListServicePerimetersResponse servicePerimeters */
                    servicePerimeters?: (google.identity.accesscontextmanager.v1.IServicePerimeter[]|null);

                    /** ListServicePerimetersResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListServicePerimetersResponse. */
                class ListServicePerimetersResponse implements IListServicePerimetersResponse {

                    /**
                     * Constructs a new ListServicePerimetersResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.identity.accesscontextmanager.v1.IListServicePerimetersResponse);

                    /** ListServicePerimetersResponse servicePerimeters. */
                    public servicePerimeters: google.identity.accesscontextmanager.v1.IServicePerimeter[];

                    /** ListServicePerimetersResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListServicePerimetersResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListServicePerimetersResponse instance
                     */
                    public static create(properties?: google.identity.accesscontextmanager.v1.IListServicePerimetersResponse): google.identity.accesscontextmanager.v1.ListServicePerimetersResponse;

                    /**
                     * Encodes the specified ListServicePerimetersResponse message. Does not implicitly {@link google.identity.accesscontextmanager.v1.ListServicePerimetersResponse.verify|verify} messages.
                     * @param message ListServicePerimetersResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.identity.accesscontextmanager.v1.IListServicePerimetersResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListServicePerimetersResponse message, length delimited. Does not implicitly {@link google.identity.accesscontextmanager.v1.ListServicePerimetersResponse.verify|verify} messages.
                     * @param message ListServicePerimetersResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.identity.accesscontextmanager.v1.IListServicePerimetersResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListServicePerimetersResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListServicePerimetersResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.identity.accesscontextmanager.v1.ListServicePerimetersResponse;

                    /**
                     * Decodes a ListServicePerimetersResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListServicePerimetersResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.identity.accesscontextmanager.v1.ListServicePerimetersResponse;

                    /**
                     * Verifies a ListServicePerimetersResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListServicePerimetersResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListServicePerimetersResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.identity.accesscontextmanager.v1.ListServicePerimetersResponse;

                    /**
                     * Creates a plain object from a ListServicePerimetersResponse message. Also converts values to other types if specified.
                     * @param message ListServicePerimetersResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.identity.accesscontextmanager.v1.ListServicePerimetersResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListServicePerimetersResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetServicePerimeterRequest. */
                interface IGetServicePerimeterRequest {

                    /** GetServicePerimeterRequest name */
                    name?: (string|null);
                }

                /** Represents a GetServicePerimeterRequest. */
                class GetServicePerimeterRequest implements IGetServicePerimeterRequest {

                    /**
                     * Constructs a new GetServicePerimeterRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.identity.accesscontextmanager.v1.IGetServicePerimeterRequest);

                    /** GetServicePerimeterRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetServicePerimeterRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetServicePerimeterRequest instance
                     */
                    public static create(properties?: google.identity.accesscontextmanager.v1.IGetServicePerimeterRequest): google.identity.accesscontextmanager.v1.GetServicePerimeterRequest;

                    /**
                     * Encodes the specified GetServicePerimeterRequest message. Does not implicitly {@link google.identity.accesscontextmanager.v1.GetServicePerimeterRequest.verify|verify} messages.
                     * @param message GetServicePerimeterRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.identity.accesscontextmanager.v1.IGetServicePerimeterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetServicePerimeterRequest message, length delimited. Does not implicitly {@link google.identity.accesscontextmanager.v1.GetServicePerimeterRequest.verify|verify} messages.
                     * @param message GetServicePerimeterRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.identity.accesscontextmanager.v1.IGetServicePerimeterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetServicePerimeterRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetServicePerimeterRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.identity.accesscontextmanager.v1.GetServicePerimeterRequest;

                    /**
                     * Decodes a GetServicePerimeterRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetServicePerimeterRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.identity.accesscontextmanager.v1.GetServicePerimeterRequest;

                    /**
                     * Verifies a GetServicePerimeterRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetServicePerimeterRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetServicePerimeterRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.identity.accesscontextmanager.v1.GetServicePerimeterRequest;

                    /**
                     * Creates a plain object from a GetServicePerimeterRequest message. Also converts values to other types if specified.
                     * @param message GetServicePerimeterRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.identity.accesscontextmanager.v1.GetServicePerimeterRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetServicePerimeterRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a CreateServicePerimeterRequest. */
                interface ICreateServicePerimeterRequest {

                    /** CreateServicePerimeterRequest parent */
                    parent?: (string|null);

                    /** CreateServicePerimeterRequest servicePerimeter */
                    servicePerimeter?: (google.identity.accesscontextmanager.v1.IServicePerimeter|null);
                }

                /** Represents a CreateServicePerimeterRequest. */
                class CreateServicePerimeterRequest implements ICreateServicePerimeterRequest {

                    /**
                     * Constructs a new CreateServicePerimeterRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.identity.accesscontextmanager.v1.ICreateServicePerimeterRequest);

                    /** CreateServicePerimeterRequest parent. */
                    public parent: string;

                    /** CreateServicePerimeterRequest servicePerimeter. */
                    public servicePerimeter?: (google.identity.accesscontextmanager.v1.IServicePerimeter|null);

                    /**
                     * Creates a new CreateServicePerimeterRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateServicePerimeterRequest instance
                     */
                    public static create(properties?: google.identity.accesscontextmanager.v1.ICreateServicePerimeterRequest): google.identity.accesscontextmanager.v1.CreateServicePerimeterRequest;

                    /**
                     * Encodes the specified CreateServicePerimeterRequest message. Does not implicitly {@link google.identity.accesscontextmanager.v1.CreateServicePerimeterRequest.verify|verify} messages.
                     * @param message CreateServicePerimeterRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.identity.accesscontextmanager.v1.ICreateServicePerimeterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateServicePerimeterRequest message, length delimited. Does not implicitly {@link google.identity.accesscontextmanager.v1.CreateServicePerimeterRequest.verify|verify} messages.
                     * @param message CreateServicePerimeterRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.identity.accesscontextmanager.v1.ICreateServicePerimeterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateServicePerimeterRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateServicePerimeterRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.identity.accesscontextmanager.v1.CreateServicePerimeterRequest;

                    /**
                     * Decodes a CreateServicePerimeterRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateServicePerimeterRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.identity.accesscontextmanager.v1.CreateServicePerimeterRequest;

                    /**
                     * Verifies a CreateServicePerimeterRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateServicePerimeterRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateServicePerimeterRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.identity.accesscontextmanager.v1.CreateServicePerimeterRequest;

                    /**
                     * Creates a plain object from a CreateServicePerimeterRequest message. Also converts values to other types if specified.
                     * @param message CreateServicePerimeterRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.identity.accesscontextmanager.v1.CreateServicePerimeterRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateServicePerimeterRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an UpdateServicePerimeterRequest. */
                interface IUpdateServicePerimeterRequest {

                    /** UpdateServicePerimeterRequest servicePerimeter */
                    servicePerimeter?: (google.identity.accesscontextmanager.v1.IServicePerimeter|null);

                    /** UpdateServicePerimeterRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);
                }

                /** Represents an UpdateServicePerimeterRequest. */
                class UpdateServicePerimeterRequest implements IUpdateServicePerimeterRequest {

                    /**
                     * Constructs a new UpdateServicePerimeterRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.identity.accesscontextmanager.v1.IUpdateServicePerimeterRequest);

                    /** UpdateServicePerimeterRequest servicePerimeter. */
                    public servicePerimeter?: (google.identity.accesscontextmanager.v1.IServicePerimeter|null);

                    /** UpdateServicePerimeterRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /**
                     * Creates a new UpdateServicePerimeterRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateServicePerimeterRequest instance
                     */
                    public static create(properties?: google.identity.accesscontextmanager.v1.IUpdateServicePerimeterRequest): google.identity.accesscontextmanager.v1.UpdateServicePerimeterRequest;

                    /**
                     * Encodes the specified UpdateServicePerimeterRequest message. Does not implicitly {@link google.identity.accesscontextmanager.v1.UpdateServicePerimeterRequest.verify|verify} messages.
                     * @param message UpdateServicePerimeterRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.identity.accesscontextmanager.v1.IUpdateServicePerimeterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateServicePerimeterRequest message, length delimited. Does not implicitly {@link google.identity.accesscontextmanager.v1.UpdateServicePerimeterRequest.verify|verify} messages.
                     * @param message UpdateServicePerimeterRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.identity.accesscontextmanager.v1.IUpdateServicePerimeterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateServicePerimeterRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateServicePerimeterRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.identity.accesscontextmanager.v1.UpdateServicePerimeterRequest;

                    /**
                     * Decodes an UpdateServicePerimeterRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateServicePerimeterRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.identity.accesscontextmanager.v1.UpdateServicePerimeterRequest;

                    /**
                     * Verifies an UpdateServicePerimeterRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateServicePerimeterRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateServicePerimeterRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.identity.accesscontextmanager.v1.UpdateServicePerimeterRequest;

                    /**
                     * Creates a plain object from an UpdateServicePerimeterRequest message. Also converts values to other types if specified.
                     * @param message UpdateServicePerimeterRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.identity.accesscontextmanager.v1.UpdateServicePerimeterRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateServicePerimeterRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DeleteServicePerimeterRequest. */
                interface IDeleteServicePerimeterRequest {

                    /** DeleteServicePerimeterRequest name */
                    name?: (string|null);
                }

                /** Represents a DeleteServicePerimeterRequest. */
                class DeleteServicePerimeterRequest implements IDeleteServicePerimeterRequest {

                    /**
                     * Constructs a new DeleteServicePerimeterRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.identity.accesscontextmanager.v1.IDeleteServicePerimeterRequest);

                    /** DeleteServicePerimeterRequest name. */
                    public name: string;

                    /**
                     * Creates a new DeleteServicePerimeterRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteServicePerimeterRequest instance
                     */
                    public static create(properties?: google.identity.accesscontextmanager.v1.IDeleteServicePerimeterRequest): google.identity.accesscontextmanager.v1.DeleteServicePerimeterRequest;

                    /**
                     * Encodes the specified DeleteServicePerimeterRequest message. Does not implicitly {@link google.identity.accesscontextmanager.v1.DeleteServicePerimeterRequest.verify|verify} messages.
                     * @param message DeleteServicePerimeterRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.identity.accesscontextmanager.v1.IDeleteServicePerimeterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteServicePerimeterRequest message, length delimited. Does not implicitly {@link google.identity.accesscontextmanager.v1.DeleteServicePerimeterRequest.verify|verify} messages.
                     * @param message DeleteServicePerimeterRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.identity.accesscontextmanager.v1.IDeleteServicePerimeterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteServicePerimeterRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteServicePerimeterRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.identity.accesscontextmanager.v1.DeleteServicePerimeterRequest;

                    /**
                     * Decodes a DeleteServicePerimeterRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteServicePerimeterRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.identity.accesscontextmanager.v1.DeleteServicePerimeterRequest;

                    /**
                     * Verifies a DeleteServicePerimeterRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteServicePerimeterRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteServicePerimeterRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.identity.accesscontextmanager.v1.DeleteServicePerimeterRequest;

                    /**
                     * Creates a plain object from a DeleteServicePerimeterRequest message. Also converts values to other types if specified.
                     * @param message DeleteServicePerimeterRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.identity.accesscontextmanager.v1.DeleteServicePerimeterRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteServicePerimeterRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ReplaceServicePerimetersRequest. */
                interface IReplaceServicePerimetersRequest {

                    /** ReplaceServicePerimetersRequest parent */
                    parent?: (string|null);

                    /** ReplaceServicePerimetersRequest servicePerimeters */
                    servicePerimeters?: (google.identity.accesscontextmanager.v1.IServicePerimeter[]|null);

                    /** ReplaceServicePerimetersRequest etag */
                    etag?: (string|null);
                }

                /** Represents a ReplaceServicePerimetersRequest. */
                class ReplaceServicePerimetersRequest implements IReplaceServicePerimetersRequest {

                    /**
                     * Constructs a new ReplaceServicePerimetersRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.identity.accesscontextmanager.v1.IReplaceServicePerimetersRequest);

                    /** ReplaceServicePerimetersRequest parent. */
                    public parent: string;

                    /** ReplaceServicePerimetersRequest servicePerimeters. */
                    public servicePerimeters: google.identity.accesscontextmanager.v1.IServicePerimeter[];

                    /** ReplaceServicePerimetersRequest etag. */
                    public etag: string;

                    /**
                     * Creates a new ReplaceServicePerimetersRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ReplaceServicePerimetersRequest instance
                     */
                    public static create(properties?: google.identity.accesscontextmanager.v1.IReplaceServicePerimetersRequest): google.identity.accesscontextmanager.v1.ReplaceServicePerimetersRequest;

                    /**
                     * Encodes the specified ReplaceServicePerimetersRequest message. Does not implicitly {@link google.identity.accesscontextmanager.v1.ReplaceServicePerimetersRequest.verify|verify} messages.
                     * @param message ReplaceServicePerimetersRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.identity.accesscontextmanager.v1.IReplaceServicePerimetersRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ReplaceServicePerimetersRequest message, length delimited. Does not implicitly {@link google.identity.accesscontextmanager.v1.ReplaceServicePerimetersRequest.verify|verify} messages.
                     * @param message ReplaceServicePerimetersRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.identity.accesscontextmanager.v1.IReplaceServicePerimetersRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ReplaceServicePerimetersRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ReplaceServicePerimetersRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.identity.accesscontextmanager.v1.ReplaceServicePerimetersRequest;

                    /**
                     * Decodes a ReplaceServicePerimetersRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ReplaceServicePerimetersRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.identity.accesscontextmanager.v1.ReplaceServicePerimetersRequest;

                    /**
                     * Verifies a ReplaceServicePerimetersRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ReplaceServicePerimetersRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ReplaceServicePerimetersRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.identity.accesscontextmanager.v1.ReplaceServicePerimetersRequest;

                    /**
                     * Creates a plain object from a ReplaceServicePerimetersRequest message. Also converts values to other types if specified.
                     * @param message ReplaceServicePerimetersRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.identity.accesscontextmanager.v1.ReplaceServicePerimetersRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ReplaceServicePerimetersRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ReplaceServicePerimetersResponse. */
                interface IReplaceServicePerimetersResponse {

                    /** ReplaceServicePerimetersResponse servicePerimeters */
                    servicePerimeters?: (google.identity.accesscontextmanager.v1.IServicePerimeter[]|null);
                }

                /** Represents a ReplaceServicePerimetersResponse. */
                class ReplaceServicePerimetersResponse implements IReplaceServicePerimetersResponse {

                    /**
                     * Constructs a new ReplaceServicePerimetersResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.identity.accesscontextmanager.v1.IReplaceServicePerimetersResponse);

                    /** ReplaceServicePerimetersResponse servicePerimeters. */
                    public servicePerimeters: google.identity.accesscontextmanager.v1.IServicePerimeter[];

                    /**
                     * Creates a new ReplaceServicePerimetersResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ReplaceServicePerimetersResponse instance
                     */
                    public static create(properties?: google.identity.accesscontextmanager.v1.IReplaceServicePerimetersResponse): google.identity.accesscontextmanager.v1.ReplaceServicePerimetersResponse;

                    /**
                     * Encodes the specified ReplaceServicePerimetersResponse message. Does not implicitly {@link google.identity.accesscontextmanager.v1.ReplaceServicePerimetersResponse.verify|verify} messages.
                     * @param message ReplaceServicePerimetersResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.identity.accesscontextmanager.v1.IReplaceServicePerimetersResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ReplaceServicePerimetersResponse message, length delimited. Does not implicitly {@link google.identity.accesscontextmanager.v1.ReplaceServicePerimetersResponse.verify|verify} messages.
                     * @param message ReplaceServicePerimetersResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.identity.accesscontextmanager.v1.IReplaceServicePerimetersResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ReplaceServicePerimetersResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ReplaceServicePerimetersResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.identity.accesscontextmanager.v1.ReplaceServicePerimetersResponse;

                    /**
                     * Decodes a ReplaceServicePerimetersResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ReplaceServicePerimetersResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.identity.accesscontextmanager.v1.ReplaceServicePerimetersResponse;

                    /**
                     * Verifies a ReplaceServicePerimetersResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ReplaceServicePerimetersResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ReplaceServicePerimetersResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.identity.accesscontextmanager.v1.ReplaceServicePerimetersResponse;

                    /**
                     * Creates a plain object from a ReplaceServicePerimetersResponse message. Also converts values to other types if specified.
                     * @param message ReplaceServicePerimetersResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.identity.accesscontextmanager.v1.ReplaceServicePerimetersResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ReplaceServicePerimetersResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a CommitServicePerimetersRequest. */
                interface ICommitServicePerimetersRequest {

                    /** CommitServicePerimetersRequest parent */
                    parent?: (string|null);

                    /** CommitServicePerimetersRequest etag */
                    etag?: (string|null);
                }

                /** Represents a CommitServicePerimetersRequest. */
                class CommitServicePerimetersRequest implements ICommitServicePerimetersRequest {

                    /**
                     * Constructs a new CommitServicePerimetersRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.identity.accesscontextmanager.v1.ICommitServicePerimetersRequest);

                    /** CommitServicePerimetersRequest parent. */
                    public parent: string;

                    /** CommitServicePerimetersRequest etag. */
                    public etag: string;

                    /**
                     * Creates a new CommitServicePerimetersRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CommitServicePerimetersRequest instance
                     */
                    public static create(properties?: google.identity.accesscontextmanager.v1.ICommitServicePerimetersRequest): google.identity.accesscontextmanager.v1.CommitServicePerimetersRequest;

                    /**
                     * Encodes the specified CommitServicePerimetersRequest message. Does not implicitly {@link google.identity.accesscontextmanager.v1.CommitServicePerimetersRequest.verify|verify} messages.
                     * @param message CommitServicePerimetersRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.identity.accesscontextmanager.v1.ICommitServicePerimetersRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CommitServicePerimetersRequest message, length delimited. Does not implicitly {@link google.identity.accesscontextmanager.v1.CommitServicePerimetersRequest.verify|verify} messages.
                     * @param message CommitServicePerimetersRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.identity.accesscontextmanager.v1.ICommitServicePerimetersRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CommitServicePerimetersRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CommitServicePerimetersRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.identity.accesscontextmanager.v1.CommitServicePerimetersRequest;

                    /**
                     * Decodes a CommitServicePerimetersRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CommitServicePerimetersRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.identity.accesscontextmanager.v1.CommitServicePerimetersRequest;

                    /**
                     * Verifies a CommitServicePerimetersRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CommitServicePerimetersRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CommitServicePerimetersRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.identity.accesscontextmanager.v1.CommitServicePerimetersRequest;

                    /**
                     * Creates a plain object from a CommitServicePerimetersRequest message. Also converts values to other types if specified.
                     * @param message CommitServicePerimetersRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.identity.accesscontextmanager.v1.CommitServicePerimetersRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CommitServicePerimetersRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a CommitServicePerimetersResponse. */
                interface ICommitServicePerimetersResponse {

                    /** CommitServicePerimetersResponse servicePerimeters */
                    servicePerimeters?: (google.identity.accesscontextmanager.v1.IServicePerimeter[]|null);
                }

                /** Represents a CommitServicePerimetersResponse. */
                class CommitServicePerimetersResponse implements ICommitServicePerimetersResponse {

                    /**
                     * Constructs a new CommitServicePerimetersResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.identity.accesscontextmanager.v1.ICommitServicePerimetersResponse);

                    /** CommitServicePerimetersResponse servicePerimeters. */
                    public servicePerimeters: google.identity.accesscontextmanager.v1.IServicePerimeter[];

                    /**
                     * Creates a new CommitServicePerimetersResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CommitServicePerimetersResponse instance
                     */
                    public static create(properties?: google.identity.accesscontextmanager.v1.ICommitServicePerimetersResponse): google.identity.accesscontextmanager.v1.CommitServicePerimetersResponse;

                    /**
                     * Encodes the specified CommitServicePerimetersResponse message. Does not implicitly {@link google.identity.accesscontextmanager.v1.CommitServicePerimetersResponse.verify|verify} messages.
                     * @param message CommitServicePerimetersResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.identity.accesscontextmanager.v1.ICommitServicePerimetersResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CommitServicePerimetersResponse message, length delimited. Does not implicitly {@link google.identity.accesscontextmanager.v1.CommitServicePerimetersResponse.verify|verify} messages.
                     * @param message CommitServicePerimetersResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.identity.accesscontextmanager.v1.ICommitServicePerimetersResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CommitServicePerimetersResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CommitServicePerimetersResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.identity.accesscontextmanager.v1.CommitServicePerimetersResponse;

                    /**
                     * Decodes a CommitServicePerimetersResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CommitServicePerimetersResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.identity.accesscontextmanager.v1.CommitServicePerimetersResponse;

                    /**
                     * Verifies a CommitServicePerimetersResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CommitServicePerimetersResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CommitServicePerimetersResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.identity.accesscontextmanager.v1.CommitServicePerimetersResponse;

                    /**
                     * Creates a plain object from a CommitServicePerimetersResponse message. Also converts values to other types if specified.
                     * @param message CommitServicePerimetersResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.identity.accesscontextmanager.v1.CommitServicePerimetersResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CommitServicePerimetersResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListGcpUserAccessBindingsRequest. */
                interface IListGcpUserAccessBindingsRequest {

                    /** ListGcpUserAccessBindingsRequest parent */
                    parent?: (string|null);

                    /** ListGcpUserAccessBindingsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListGcpUserAccessBindingsRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListGcpUserAccessBindingsRequest. */
                class ListGcpUserAccessBindingsRequest implements IListGcpUserAccessBindingsRequest {

                    /**
                     * Constructs a new ListGcpUserAccessBindingsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.identity.accesscontextmanager.v1.IListGcpUserAccessBindingsRequest);

                    /** ListGcpUserAccessBindingsRequest parent. */
                    public parent: string;

                    /** ListGcpUserAccessBindingsRequest pageSize. */
                    public pageSize: number;

                    /** ListGcpUserAccessBindingsRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListGcpUserAccessBindingsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListGcpUserAccessBindingsRequest instance
                     */
                    public static create(properties?: google.identity.accesscontextmanager.v1.IListGcpUserAccessBindingsRequest): google.identity.accesscontextmanager.v1.ListGcpUserAccessBindingsRequest;

                    /**
                     * Encodes the specified ListGcpUserAccessBindingsRequest message. Does not implicitly {@link google.identity.accesscontextmanager.v1.ListGcpUserAccessBindingsRequest.verify|verify} messages.
                     * @param message ListGcpUserAccessBindingsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.identity.accesscontextmanager.v1.IListGcpUserAccessBindingsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListGcpUserAccessBindingsRequest message, length delimited. Does not implicitly {@link google.identity.accesscontextmanager.v1.ListGcpUserAccessBindingsRequest.verify|verify} messages.
                     * @param message ListGcpUserAccessBindingsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.identity.accesscontextmanager.v1.IListGcpUserAccessBindingsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListGcpUserAccessBindingsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListGcpUserAccessBindingsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.identity.accesscontextmanager.v1.ListGcpUserAccessBindingsRequest;

                    /**
                     * Decodes a ListGcpUserAccessBindingsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListGcpUserAccessBindingsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.identity.accesscontextmanager.v1.ListGcpUserAccessBindingsRequest;

                    /**
                     * Verifies a ListGcpUserAccessBindingsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListGcpUserAccessBindingsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListGcpUserAccessBindingsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.identity.accesscontextmanager.v1.ListGcpUserAccessBindingsRequest;

                    /**
                     * Creates a plain object from a ListGcpUserAccessBindingsRequest message. Also converts values to other types if specified.
                     * @param message ListGcpUserAccessBindingsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.identity.accesscontextmanager.v1.ListGcpUserAccessBindingsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListGcpUserAccessBindingsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** LevelFormat enum. */
                enum LevelFormat {
                    LEVEL_FORMAT_UNSPECIFIED = 0,
                    AS_DEFINED = 1,
                    CEL = 2
                }

                /** Properties of a ListGcpUserAccessBindingsResponse. */
                interface IListGcpUserAccessBindingsResponse {

                    /** ListGcpUserAccessBindingsResponse gcpUserAccessBindings */
                    gcpUserAccessBindings?: (google.identity.accesscontextmanager.v1.IGcpUserAccessBinding[]|null);

                    /** ListGcpUserAccessBindingsResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListGcpUserAccessBindingsResponse. */
                class ListGcpUserAccessBindingsResponse implements IListGcpUserAccessBindingsResponse {

                    /**
                     * Constructs a new ListGcpUserAccessBindingsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.identity.accesscontextmanager.v1.IListGcpUserAccessBindingsResponse);

                    /** ListGcpUserAccessBindingsResponse gcpUserAccessBindings. */
                    public gcpUserAccessBindings: google.identity.accesscontextmanager.v1.IGcpUserAccessBinding[];

                    /** ListGcpUserAccessBindingsResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListGcpUserAccessBindingsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListGcpUserAccessBindingsResponse instance
                     */
                    public static create(properties?: google.identity.accesscontextmanager.v1.IListGcpUserAccessBindingsResponse): google.identity.accesscontextmanager.v1.ListGcpUserAccessBindingsResponse;

                    /**
                     * Encodes the specified ListGcpUserAccessBindingsResponse message. Does not implicitly {@link google.identity.accesscontextmanager.v1.ListGcpUserAccessBindingsResponse.verify|verify} messages.
                     * @param message ListGcpUserAccessBindingsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.identity.accesscontextmanager.v1.IListGcpUserAccessBindingsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListGcpUserAccessBindingsResponse message, length delimited. Does not implicitly {@link google.identity.accesscontextmanager.v1.ListGcpUserAccessBindingsResponse.verify|verify} messages.
                     * @param message ListGcpUserAccessBindingsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.identity.accesscontextmanager.v1.IListGcpUserAccessBindingsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListGcpUserAccessBindingsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListGcpUserAccessBindingsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.identity.accesscontextmanager.v1.ListGcpUserAccessBindingsResponse;

                    /**
                     * Decodes a ListGcpUserAccessBindingsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListGcpUserAccessBindingsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.identity.accesscontextmanager.v1.ListGcpUserAccessBindingsResponse;

                    /**
                     * Verifies a ListGcpUserAccessBindingsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListGcpUserAccessBindingsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListGcpUserAccessBindingsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.identity.accesscontextmanager.v1.ListGcpUserAccessBindingsResponse;

                    /**
                     * Creates a plain object from a ListGcpUserAccessBindingsResponse message. Also converts values to other types if specified.
                     * @param message ListGcpUserAccessBindingsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.identity.accesscontextmanager.v1.ListGcpUserAccessBindingsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListGcpUserAccessBindingsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetGcpUserAccessBindingRequest. */
                interface IGetGcpUserAccessBindingRequest {

                    /** GetGcpUserAccessBindingRequest name */
                    name?: (string|null);
                }

                /** Represents a GetGcpUserAccessBindingRequest. */
                class GetGcpUserAccessBindingRequest implements IGetGcpUserAccessBindingRequest {

                    /**
                     * Constructs a new GetGcpUserAccessBindingRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.identity.accesscontextmanager.v1.IGetGcpUserAccessBindingRequest);

                    /** GetGcpUserAccessBindingRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetGcpUserAccessBindingRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetGcpUserAccessBindingRequest instance
                     */
                    public static create(properties?: google.identity.accesscontextmanager.v1.IGetGcpUserAccessBindingRequest): google.identity.accesscontextmanager.v1.GetGcpUserAccessBindingRequest;

                    /**
                     * Encodes the specified GetGcpUserAccessBindingRequest message. Does not implicitly {@link google.identity.accesscontextmanager.v1.GetGcpUserAccessBindingRequest.verify|verify} messages.
                     * @param message GetGcpUserAccessBindingRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.identity.accesscontextmanager.v1.IGetGcpUserAccessBindingRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetGcpUserAccessBindingRequest message, length delimited. Does not implicitly {@link google.identity.accesscontextmanager.v1.GetGcpUserAccessBindingRequest.verify|verify} messages.
                     * @param message GetGcpUserAccessBindingRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.identity.accesscontextmanager.v1.IGetGcpUserAccessBindingRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetGcpUserAccessBindingRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetGcpUserAccessBindingRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.identity.accesscontextmanager.v1.GetGcpUserAccessBindingRequest;

                    /**
                     * Decodes a GetGcpUserAccessBindingRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetGcpUserAccessBindingRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.identity.accesscontextmanager.v1.GetGcpUserAccessBindingRequest;

                    /**
                     * Verifies a GetGcpUserAccessBindingRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetGcpUserAccessBindingRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetGcpUserAccessBindingRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.identity.accesscontextmanager.v1.GetGcpUserAccessBindingRequest;

                    /**
                     * Creates a plain object from a GetGcpUserAccessBindingRequest message. Also converts values to other types if specified.
                     * @param message GetGcpUserAccessBindingRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.identity.accesscontextmanager.v1.GetGcpUserAccessBindingRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetGcpUserAccessBindingRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a CreateGcpUserAccessBindingRequest. */
                interface ICreateGcpUserAccessBindingRequest {

                    /** CreateGcpUserAccessBindingRequest parent */
                    parent?: (string|null);

                    /** CreateGcpUserAccessBindingRequest gcpUserAccessBinding */
                    gcpUserAccessBinding?: (google.identity.accesscontextmanager.v1.IGcpUserAccessBinding|null);
                }

                /** Represents a CreateGcpUserAccessBindingRequest. */
                class CreateGcpUserAccessBindingRequest implements ICreateGcpUserAccessBindingRequest {

                    /**
                     * Constructs a new CreateGcpUserAccessBindingRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.identity.accesscontextmanager.v1.ICreateGcpUserAccessBindingRequest);

                    /** CreateGcpUserAccessBindingRequest parent. */
                    public parent: string;

                    /** CreateGcpUserAccessBindingRequest gcpUserAccessBinding. */
                    public gcpUserAccessBinding?: (google.identity.accesscontextmanager.v1.IGcpUserAccessBinding|null);

                    /**
                     * Creates a new CreateGcpUserAccessBindingRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateGcpUserAccessBindingRequest instance
                     */
                    public static create(properties?: google.identity.accesscontextmanager.v1.ICreateGcpUserAccessBindingRequest): google.identity.accesscontextmanager.v1.CreateGcpUserAccessBindingRequest;

                    /**
                     * Encodes the specified CreateGcpUserAccessBindingRequest message. Does not implicitly {@link google.identity.accesscontextmanager.v1.CreateGcpUserAccessBindingRequest.verify|verify} messages.
                     * @param message CreateGcpUserAccessBindingRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.identity.accesscontextmanager.v1.ICreateGcpUserAccessBindingRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateGcpUserAccessBindingRequest message, length delimited. Does not implicitly {@link google.identity.accesscontextmanager.v1.CreateGcpUserAccessBindingRequest.verify|verify} messages.
                     * @param message CreateGcpUserAccessBindingRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.identity.accesscontextmanager.v1.ICreateGcpUserAccessBindingRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateGcpUserAccessBindingRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateGcpUserAccessBindingRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.identity.accesscontextmanager.v1.CreateGcpUserAccessBindingRequest;

                    /**
                     * Decodes a CreateGcpUserAccessBindingRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateGcpUserAccessBindingRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.identity.accesscontextmanager.v1.CreateGcpUserAccessBindingRequest;

                    /**
                     * Verifies a CreateGcpUserAccessBindingRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateGcpUserAccessBindingRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateGcpUserAccessBindingRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.identity.accesscontextmanager.v1.CreateGcpUserAccessBindingRequest;

                    /**
                     * Creates a plain object from a CreateGcpUserAccessBindingRequest message. Also converts values to other types if specified.
                     * @param message CreateGcpUserAccessBindingRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.identity.accesscontextmanager.v1.CreateGcpUserAccessBindingRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateGcpUserAccessBindingRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an UpdateGcpUserAccessBindingRequest. */
                interface IUpdateGcpUserAccessBindingRequest {

                    /** UpdateGcpUserAccessBindingRequest gcpUserAccessBinding */
                    gcpUserAccessBinding?: (google.identity.accesscontextmanager.v1.IGcpUserAccessBinding|null);

                    /** UpdateGcpUserAccessBindingRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);
                }

                /** Represents an UpdateGcpUserAccessBindingRequest. */
                class UpdateGcpUserAccessBindingRequest implements IUpdateGcpUserAccessBindingRequest {

                    /**
                     * Constructs a new UpdateGcpUserAccessBindingRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.identity.accesscontextmanager.v1.IUpdateGcpUserAccessBindingRequest);

                    /** UpdateGcpUserAccessBindingRequest gcpUserAccessBinding. */
                    public gcpUserAccessBinding?: (google.identity.accesscontextmanager.v1.IGcpUserAccessBinding|null);

                    /** UpdateGcpUserAccessBindingRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /**
                     * Creates a new UpdateGcpUserAccessBindingRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateGcpUserAccessBindingRequest instance
                     */
                    public static create(properties?: google.identity.accesscontextmanager.v1.IUpdateGcpUserAccessBindingRequest): google.identity.accesscontextmanager.v1.UpdateGcpUserAccessBindingRequest;

                    /**
                     * Encodes the specified UpdateGcpUserAccessBindingRequest message. Does not implicitly {@link google.identity.accesscontextmanager.v1.UpdateGcpUserAccessBindingRequest.verify|verify} messages.
                     * @param message UpdateGcpUserAccessBindingRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.identity.accesscontextmanager.v1.IUpdateGcpUserAccessBindingRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateGcpUserAccessBindingRequest message, length delimited. Does not implicitly {@link google.identity.accesscontextmanager.v1.UpdateGcpUserAccessBindingRequest.verify|verify} messages.
                     * @param message UpdateGcpUserAccessBindingRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.identity.accesscontextmanager.v1.IUpdateGcpUserAccessBindingRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateGcpUserAccessBindingRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateGcpUserAccessBindingRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.identity.accesscontextmanager.v1.UpdateGcpUserAccessBindingRequest;

                    /**
                     * Decodes an UpdateGcpUserAccessBindingRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateGcpUserAccessBindingRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.identity.accesscontextmanager.v1.UpdateGcpUserAccessBindingRequest;

                    /**
                     * Verifies an UpdateGcpUserAccessBindingRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateGcpUserAccessBindingRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateGcpUserAccessBindingRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.identity.accesscontextmanager.v1.UpdateGcpUserAccessBindingRequest;

                    /**
                     * Creates a plain object from an UpdateGcpUserAccessBindingRequest message. Also converts values to other types if specified.
                     * @param message UpdateGcpUserAccessBindingRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.identity.accesscontextmanager.v1.UpdateGcpUserAccessBindingRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateGcpUserAccessBindingRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DeleteGcpUserAccessBindingRequest. */
                interface IDeleteGcpUserAccessBindingRequest {

                    /** DeleteGcpUserAccessBindingRequest name */
                    name?: (string|null);
                }

                /** Represents a DeleteGcpUserAccessBindingRequest. */
                class DeleteGcpUserAccessBindingRequest implements IDeleteGcpUserAccessBindingRequest {

                    /**
                     * Constructs a new DeleteGcpUserAccessBindingRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.identity.accesscontextmanager.v1.IDeleteGcpUserAccessBindingRequest);

                    /** DeleteGcpUserAccessBindingRequest name. */
                    public name: string;

                    /**
                     * Creates a new DeleteGcpUserAccessBindingRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteGcpUserAccessBindingRequest instance
                     */
                    public static create(properties?: google.identity.accesscontextmanager.v1.IDeleteGcpUserAccessBindingRequest): google.identity.accesscontextmanager.v1.DeleteGcpUserAccessBindingRequest;

                    /**
                     * Encodes the specified DeleteGcpUserAccessBindingRequest message. Does not implicitly {@link google.identity.accesscontextmanager.v1.DeleteGcpUserAccessBindingRequest.verify|verify} messages.
                     * @param message DeleteGcpUserAccessBindingRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.identity.accesscontextmanager.v1.IDeleteGcpUserAccessBindingRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteGcpUserAccessBindingRequest message, length delimited. Does not implicitly {@link google.identity.accesscontextmanager.v1.DeleteGcpUserAccessBindingRequest.verify|verify} messages.
                     * @param message DeleteGcpUserAccessBindingRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.identity.accesscontextmanager.v1.IDeleteGcpUserAccessBindingRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteGcpUserAccessBindingRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteGcpUserAccessBindingRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.identity.accesscontextmanager.v1.DeleteGcpUserAccessBindingRequest;

                    /**
                     * Decodes a DeleteGcpUserAccessBindingRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteGcpUserAccessBindingRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.identity.accesscontextmanager.v1.DeleteGcpUserAccessBindingRequest;

                    /**
                     * Verifies a DeleteGcpUserAccessBindingRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteGcpUserAccessBindingRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteGcpUserAccessBindingRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.identity.accesscontextmanager.v1.DeleteGcpUserAccessBindingRequest;

                    /**
                     * Creates a plain object from a DeleteGcpUserAccessBindingRequest message. Also converts values to other types if specified.
                     * @param message DeleteGcpUserAccessBindingRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.identity.accesscontextmanager.v1.DeleteGcpUserAccessBindingRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteGcpUserAccessBindingRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GcpUserAccessBindingOperationMetadata. */
                interface IGcpUserAccessBindingOperationMetadata {
                }

                /** Represents a GcpUserAccessBindingOperationMetadata. */
                class GcpUserAccessBindingOperationMetadata implements IGcpUserAccessBindingOperationMetadata {

                    /**
                     * Constructs a new GcpUserAccessBindingOperationMetadata.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.identity.accesscontextmanager.v1.IGcpUserAccessBindingOperationMetadata);

                    /**
                     * Creates a new GcpUserAccessBindingOperationMetadata instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GcpUserAccessBindingOperationMetadata instance
                     */
                    public static create(properties?: google.identity.accesscontextmanager.v1.IGcpUserAccessBindingOperationMetadata): google.identity.accesscontextmanager.v1.GcpUserAccessBindingOperationMetadata;

                    /**
                     * Encodes the specified GcpUserAccessBindingOperationMetadata message. Does not implicitly {@link google.identity.accesscontextmanager.v1.GcpUserAccessBindingOperationMetadata.verify|verify} messages.
                     * @param message GcpUserAccessBindingOperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.identity.accesscontextmanager.v1.IGcpUserAccessBindingOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GcpUserAccessBindingOperationMetadata message, length delimited. Does not implicitly {@link google.identity.accesscontextmanager.v1.GcpUserAccessBindingOperationMetadata.verify|verify} messages.
                     * @param message GcpUserAccessBindingOperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.identity.accesscontextmanager.v1.IGcpUserAccessBindingOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GcpUserAccessBindingOperationMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GcpUserAccessBindingOperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.identity.accesscontextmanager.v1.GcpUserAccessBindingOperationMetadata;

                    /**
                     * Decodes a GcpUserAccessBindingOperationMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GcpUserAccessBindingOperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.identity.accesscontextmanager.v1.GcpUserAccessBindingOperationMetadata;

                    /**
                     * Verifies a GcpUserAccessBindingOperationMetadata message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GcpUserAccessBindingOperationMetadata message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GcpUserAccessBindingOperationMetadata
                     */
                    public static fromObject(object: { [k: string]: any }): google.identity.accesscontextmanager.v1.GcpUserAccessBindingOperationMetadata;

                    /**
                     * Creates a plain object from a GcpUserAccessBindingOperationMetadata message. Also converts values to other types if specified.
                     * @param message GcpUserAccessBindingOperationMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.identity.accesscontextmanager.v1.GcpUserAccessBindingOperationMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GcpUserAccessBindingOperationMetadata to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an AccessContextManagerOperationMetadata. */
                interface IAccessContextManagerOperationMetadata {
                }

                /** Represents an AccessContextManagerOperationMetadata. */
                class AccessContextManagerOperationMetadata implements IAccessContextManagerOperationMetadata {

                    /**
                     * Constructs a new AccessContextManagerOperationMetadata.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.identity.accesscontextmanager.v1.IAccessContextManagerOperationMetadata);

                    /**
                     * Creates a new AccessContextManagerOperationMetadata instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AccessContextManagerOperationMetadata instance
                     */
                    public static create(properties?: google.identity.accesscontextmanager.v1.IAccessContextManagerOperationMetadata): google.identity.accesscontextmanager.v1.AccessContextManagerOperationMetadata;

                    /**
                     * Encodes the specified AccessContextManagerOperationMetadata message. Does not implicitly {@link google.identity.accesscontextmanager.v1.AccessContextManagerOperationMetadata.verify|verify} messages.
                     * @param message AccessContextManagerOperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.identity.accesscontextmanager.v1.IAccessContextManagerOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AccessContextManagerOperationMetadata message, length delimited. Does not implicitly {@link google.identity.accesscontextmanager.v1.AccessContextManagerOperationMetadata.verify|verify} messages.
                     * @param message AccessContextManagerOperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.identity.accesscontextmanager.v1.IAccessContextManagerOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AccessContextManagerOperationMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AccessContextManagerOperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.identity.accesscontextmanager.v1.AccessContextManagerOperationMetadata;

                    /**
                     * Decodes an AccessContextManagerOperationMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AccessContextManagerOperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.identity.accesscontextmanager.v1.AccessContextManagerOperationMetadata;

                    /**
                     * Verifies an AccessContextManagerOperationMetadata message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AccessContextManagerOperationMetadata message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AccessContextManagerOperationMetadata
                     */
                    public static fromObject(object: { [k: string]: any }): google.identity.accesscontextmanager.v1.AccessContextManagerOperationMetadata;

                    /**
                     * Creates a plain object from an AccessContextManagerOperationMetadata message. Also converts values to other types if specified.
                     * @param message AccessContextManagerOperationMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.identity.accesscontextmanager.v1.AccessContextManagerOperationMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AccessContextManagerOperationMetadata to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an AccessLevel. */
                interface IAccessLevel {

                    /** AccessLevel name */
                    name?: (string|null);

                    /** AccessLevel title */
                    title?: (string|null);

                    /** AccessLevel description */
                    description?: (string|null);

                    /** AccessLevel basic */
                    basic?: (google.identity.accesscontextmanager.v1.IBasicLevel|null);

                    /** AccessLevel custom */
                    custom?: (google.identity.accesscontextmanager.v1.ICustomLevel|null);

                    /** AccessLevel createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** AccessLevel updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);
                }

                /** Represents an AccessLevel. */
                class AccessLevel implements IAccessLevel {

                    /**
                     * Constructs a new AccessLevel.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.identity.accesscontextmanager.v1.IAccessLevel);

                    /** AccessLevel name. */
                    public name: string;

                    /** AccessLevel title. */
                    public title: string;

                    /** AccessLevel description. */
                    public description: string;

                    /** AccessLevel basic. */
                    public basic?: (google.identity.accesscontextmanager.v1.IBasicLevel|null);

                    /** AccessLevel custom. */
                    public custom?: (google.identity.accesscontextmanager.v1.ICustomLevel|null);

                    /** AccessLevel createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** AccessLevel updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** AccessLevel level. */
                    public level?: ("basic"|"custom");

                    /**
                     * Creates a new AccessLevel instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AccessLevel instance
                     */
                    public static create(properties?: google.identity.accesscontextmanager.v1.IAccessLevel): google.identity.accesscontextmanager.v1.AccessLevel;

                    /**
                     * Encodes the specified AccessLevel message. Does not implicitly {@link google.identity.accesscontextmanager.v1.AccessLevel.verify|verify} messages.
                     * @param message AccessLevel message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.identity.accesscontextmanager.v1.IAccessLevel, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AccessLevel message, length delimited. Does not implicitly {@link google.identity.accesscontextmanager.v1.AccessLevel.verify|verify} messages.
                     * @param message AccessLevel message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.identity.accesscontextmanager.v1.IAccessLevel, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AccessLevel message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AccessLevel
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.identity.accesscontextmanager.v1.AccessLevel;

                    /**
                     * Decodes an AccessLevel message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AccessLevel
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.identity.accesscontextmanager.v1.AccessLevel;

                    /**
                     * Verifies an AccessLevel message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AccessLevel message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AccessLevel
                     */
                    public static fromObject(object: { [k: string]: any }): google.identity.accesscontextmanager.v1.AccessLevel;

                    /**
                     * Creates a plain object from an AccessLevel message. Also converts values to other types if specified.
                     * @param message AccessLevel
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.identity.accesscontextmanager.v1.AccessLevel, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AccessLevel to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a BasicLevel. */
                interface IBasicLevel {

                    /** BasicLevel conditions */
                    conditions?: (google.identity.accesscontextmanager.v1.ICondition[]|null);

                    /** BasicLevel combiningFunction */
                    combiningFunction?: (google.identity.accesscontextmanager.v1.BasicLevel.ConditionCombiningFunction|keyof typeof google.identity.accesscontextmanager.v1.BasicLevel.ConditionCombiningFunction|null);
                }

                /** Represents a BasicLevel. */
                class BasicLevel implements IBasicLevel {

                    /**
                     * Constructs a new BasicLevel.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.identity.accesscontextmanager.v1.IBasicLevel);

                    /** BasicLevel conditions. */
                    public conditions: google.identity.accesscontextmanager.v1.ICondition[];

                    /** BasicLevel combiningFunction. */
                    public combiningFunction: (google.identity.accesscontextmanager.v1.BasicLevel.ConditionCombiningFunction|keyof typeof google.identity.accesscontextmanager.v1.BasicLevel.ConditionCombiningFunction);

                    /**
                     * Creates a new BasicLevel instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns BasicLevel instance
                     */
                    public static create(properties?: google.identity.accesscontextmanager.v1.IBasicLevel): google.identity.accesscontextmanager.v1.BasicLevel;

                    /**
                     * Encodes the specified BasicLevel message. Does not implicitly {@link google.identity.accesscontextmanager.v1.BasicLevel.verify|verify} messages.
                     * @param message BasicLevel message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.identity.accesscontextmanager.v1.IBasicLevel, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified BasicLevel message, length delimited. Does not implicitly {@link google.identity.accesscontextmanager.v1.BasicLevel.verify|verify} messages.
                     * @param message BasicLevel message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.identity.accesscontextmanager.v1.IBasicLevel, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a BasicLevel message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns BasicLevel
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.identity.accesscontextmanager.v1.BasicLevel;

                    /**
                     * Decodes a BasicLevel message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns BasicLevel
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.identity.accesscontextmanager.v1.BasicLevel;

                    /**
                     * Verifies a BasicLevel message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a BasicLevel message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns BasicLevel
                     */
                    public static fromObject(object: { [k: string]: any }): google.identity.accesscontextmanager.v1.BasicLevel;

                    /**
                     * Creates a plain object from a BasicLevel message. Also converts values to other types if specified.
                     * @param message BasicLevel
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.identity.accesscontextmanager.v1.BasicLevel, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this BasicLevel to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace BasicLevel {

                    /** ConditionCombiningFunction enum. */
                    enum ConditionCombiningFunction {
                        AND = 0,
                        OR = 1
                    }
                }

                /** Properties of a Condition. */
                interface ICondition {

                    /** Condition ipSubnetworks */
                    ipSubnetworks?: (string[]|null);

                    /** Condition devicePolicy */
                    devicePolicy?: (google.identity.accesscontextmanager.v1.IDevicePolicy|null);

                    /** Condition requiredAccessLevels */
                    requiredAccessLevels?: (string[]|null);

                    /** Condition negate */
                    negate?: (boolean|null);

                    /** Condition members */
                    members?: (string[]|null);

                    /** Condition regions */
                    regions?: (string[]|null);
                }

                /** Represents a Condition. */
                class Condition implements ICondition {

                    /**
                     * Constructs a new Condition.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.identity.accesscontextmanager.v1.ICondition);

                    /** Condition ipSubnetworks. */
                    public ipSubnetworks: string[];

                    /** Condition devicePolicy. */
                    public devicePolicy?: (google.identity.accesscontextmanager.v1.IDevicePolicy|null);

                    /** Condition requiredAccessLevels. */
                    public requiredAccessLevels: string[];

                    /** Condition negate. */
                    public negate: boolean;

                    /** Condition members. */
                    public members: string[];

                    /** Condition regions. */
                    public regions: string[];

                    /**
                     * Creates a new Condition instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Condition instance
                     */
                    public static create(properties?: google.identity.accesscontextmanager.v1.ICondition): google.identity.accesscontextmanager.v1.Condition;

                    /**
                     * Encodes the specified Condition message. Does not implicitly {@link google.identity.accesscontextmanager.v1.Condition.verify|verify} messages.
                     * @param message Condition message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.identity.accesscontextmanager.v1.ICondition, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Condition message, length delimited. Does not implicitly {@link google.identity.accesscontextmanager.v1.Condition.verify|verify} messages.
                     * @param message Condition message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.identity.accesscontextmanager.v1.ICondition, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Condition message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Condition
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.identity.accesscontextmanager.v1.Condition;

                    /**
                     * Decodes a Condition message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Condition
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.identity.accesscontextmanager.v1.Condition;

                    /**
                     * Verifies a Condition message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Condition message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Condition
                     */
                    public static fromObject(object: { [k: string]: any }): google.identity.accesscontextmanager.v1.Condition;

                    /**
                     * Creates a plain object from a Condition message. Also converts values to other types if specified.
                     * @param message Condition
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.identity.accesscontextmanager.v1.Condition, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Condition to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a CustomLevel. */
                interface ICustomLevel {

                    /** CustomLevel expr */
                    expr?: (google.type.IExpr|null);
                }

                /** Represents a CustomLevel. */
                class CustomLevel implements ICustomLevel {

                    /**
                     * Constructs a new CustomLevel.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.identity.accesscontextmanager.v1.ICustomLevel);

                    /** CustomLevel expr. */
                    public expr?: (google.type.IExpr|null);

                    /**
                     * Creates a new CustomLevel instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CustomLevel instance
                     */
                    public static create(properties?: google.identity.accesscontextmanager.v1.ICustomLevel): google.identity.accesscontextmanager.v1.CustomLevel;

                    /**
                     * Encodes the specified CustomLevel message. Does not implicitly {@link google.identity.accesscontextmanager.v1.CustomLevel.verify|verify} messages.
                     * @param message CustomLevel message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.identity.accesscontextmanager.v1.ICustomLevel, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CustomLevel message, length delimited. Does not implicitly {@link google.identity.accesscontextmanager.v1.CustomLevel.verify|verify} messages.
                     * @param message CustomLevel message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.identity.accesscontextmanager.v1.ICustomLevel, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CustomLevel message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CustomLevel
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.identity.accesscontextmanager.v1.CustomLevel;

                    /**
                     * Decodes a CustomLevel message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CustomLevel
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.identity.accesscontextmanager.v1.CustomLevel;

                    /**
                     * Verifies a CustomLevel message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CustomLevel message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CustomLevel
                     */
                    public static fromObject(object: { [k: string]: any }): google.identity.accesscontextmanager.v1.CustomLevel;

                    /**
                     * Creates a plain object from a CustomLevel message. Also converts values to other types if specified.
                     * @param message CustomLevel
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.identity.accesscontextmanager.v1.CustomLevel, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CustomLevel to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DevicePolicy. */
                interface IDevicePolicy {

                    /** DevicePolicy requireScreenlock */
                    requireScreenlock?: (boolean|null);

                    /** DevicePolicy allowedEncryptionStatuses */
                    allowedEncryptionStatuses?: (google.identity.accesscontextmanager.type.DeviceEncryptionStatus[]|null);

                    /** DevicePolicy osConstraints */
                    osConstraints?: (google.identity.accesscontextmanager.v1.IOsConstraint[]|null);

                    /** DevicePolicy allowedDeviceManagementLevels */
                    allowedDeviceManagementLevels?: (google.identity.accesscontextmanager.type.DeviceManagementLevel[]|null);

                    /** DevicePolicy requireAdminApproval */
                    requireAdminApproval?: (boolean|null);

                    /** DevicePolicy requireCorpOwned */
                    requireCorpOwned?: (boolean|null);
                }

                /** Represents a DevicePolicy. */
                class DevicePolicy implements IDevicePolicy {

                    /**
                     * Constructs a new DevicePolicy.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.identity.accesscontextmanager.v1.IDevicePolicy);

                    /** DevicePolicy requireScreenlock. */
                    public requireScreenlock: boolean;

                    /** DevicePolicy allowedEncryptionStatuses. */
                    public allowedEncryptionStatuses: google.identity.accesscontextmanager.type.DeviceEncryptionStatus[];

                    /** DevicePolicy osConstraints. */
                    public osConstraints: google.identity.accesscontextmanager.v1.IOsConstraint[];

                    /** DevicePolicy allowedDeviceManagementLevels. */
                    public allowedDeviceManagementLevels: google.identity.accesscontextmanager.type.DeviceManagementLevel[];

                    /** DevicePolicy requireAdminApproval. */
                    public requireAdminApproval: boolean;

                    /** DevicePolicy requireCorpOwned. */
                    public requireCorpOwned: boolean;

                    /**
                     * Creates a new DevicePolicy instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DevicePolicy instance
                     */
                    public static create(properties?: google.identity.accesscontextmanager.v1.IDevicePolicy): google.identity.accesscontextmanager.v1.DevicePolicy;

                    /**
                     * Encodes the specified DevicePolicy message. Does not implicitly {@link google.identity.accesscontextmanager.v1.DevicePolicy.verify|verify} messages.
                     * @param message DevicePolicy message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.identity.accesscontextmanager.v1.IDevicePolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DevicePolicy message, length delimited. Does not implicitly {@link google.identity.accesscontextmanager.v1.DevicePolicy.verify|verify} messages.
                     * @param message DevicePolicy message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.identity.accesscontextmanager.v1.IDevicePolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DevicePolicy message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DevicePolicy
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.identity.accesscontextmanager.v1.DevicePolicy;

                    /**
                     * Decodes a DevicePolicy message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DevicePolicy
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.identity.accesscontextmanager.v1.DevicePolicy;

                    /**
                     * Verifies a DevicePolicy message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DevicePolicy message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DevicePolicy
                     */
                    public static fromObject(object: { [k: string]: any }): google.identity.accesscontextmanager.v1.DevicePolicy;

                    /**
                     * Creates a plain object from a DevicePolicy message. Also converts values to other types if specified.
                     * @param message DevicePolicy
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.identity.accesscontextmanager.v1.DevicePolicy, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DevicePolicy to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an OsConstraint. */
                interface IOsConstraint {

                    /** OsConstraint osType */
                    osType?: (google.identity.accesscontextmanager.type.OsType|keyof typeof google.identity.accesscontextmanager.type.OsType|null);

                    /** OsConstraint minimumVersion */
                    minimumVersion?: (string|null);

                    /** OsConstraint requireVerifiedChromeOs */
                    requireVerifiedChromeOs?: (boolean|null);
                }

                /** Represents an OsConstraint. */
                class OsConstraint implements IOsConstraint {

                    /**
                     * Constructs a new OsConstraint.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.identity.accesscontextmanager.v1.IOsConstraint);

                    /** OsConstraint osType. */
                    public osType: (google.identity.accesscontextmanager.type.OsType|keyof typeof google.identity.accesscontextmanager.type.OsType);

                    /** OsConstraint minimumVersion. */
                    public minimumVersion: string;

                    /** OsConstraint requireVerifiedChromeOs. */
                    public requireVerifiedChromeOs: boolean;

                    /**
                     * Creates a new OsConstraint instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns OsConstraint instance
                     */
                    public static create(properties?: google.identity.accesscontextmanager.v1.IOsConstraint): google.identity.accesscontextmanager.v1.OsConstraint;

                    /**
                     * Encodes the specified OsConstraint message. Does not implicitly {@link google.identity.accesscontextmanager.v1.OsConstraint.verify|verify} messages.
                     * @param message OsConstraint message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.identity.accesscontextmanager.v1.IOsConstraint, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified OsConstraint message, length delimited. Does not implicitly {@link google.identity.accesscontextmanager.v1.OsConstraint.verify|verify} messages.
                     * @param message OsConstraint message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.identity.accesscontextmanager.v1.IOsConstraint, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an OsConstraint message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns OsConstraint
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.identity.accesscontextmanager.v1.OsConstraint;

                    /**
                     * Decodes an OsConstraint message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns OsConstraint
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.identity.accesscontextmanager.v1.OsConstraint;

                    /**
                     * Verifies an OsConstraint message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an OsConstraint message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns OsConstraint
                     */
                    public static fromObject(object: { [k: string]: any }): google.identity.accesscontextmanager.v1.OsConstraint;

                    /**
                     * Creates a plain object from an OsConstraint message. Also converts values to other types if specified.
                     * @param message OsConstraint
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.identity.accesscontextmanager.v1.OsConstraint, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this OsConstraint to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an AccessPolicy. */
                interface IAccessPolicy {

                    /** AccessPolicy name */
                    name?: (string|null);

                    /** AccessPolicy parent */
                    parent?: (string|null);

                    /** AccessPolicy title */
                    title?: (string|null);

                    /** AccessPolicy createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** AccessPolicy updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** AccessPolicy etag */
                    etag?: (string|null);
                }

                /** Represents an AccessPolicy. */
                class AccessPolicy implements IAccessPolicy {

                    /**
                     * Constructs a new AccessPolicy.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.identity.accesscontextmanager.v1.IAccessPolicy);

                    /** AccessPolicy name. */
                    public name: string;

                    /** AccessPolicy parent. */
                    public parent: string;

                    /** AccessPolicy title. */
                    public title: string;

                    /** AccessPolicy createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** AccessPolicy updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** AccessPolicy etag. */
                    public etag: string;

                    /**
                     * Creates a new AccessPolicy instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AccessPolicy instance
                     */
                    public static create(properties?: google.identity.accesscontextmanager.v1.IAccessPolicy): google.identity.accesscontextmanager.v1.AccessPolicy;

                    /**
                     * Encodes the specified AccessPolicy message. Does not implicitly {@link google.identity.accesscontextmanager.v1.AccessPolicy.verify|verify} messages.
                     * @param message AccessPolicy message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.identity.accesscontextmanager.v1.IAccessPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AccessPolicy message, length delimited. Does not implicitly {@link google.identity.accesscontextmanager.v1.AccessPolicy.verify|verify} messages.
                     * @param message AccessPolicy message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.identity.accesscontextmanager.v1.IAccessPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AccessPolicy message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AccessPolicy
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.identity.accesscontextmanager.v1.AccessPolicy;

                    /**
                     * Decodes an AccessPolicy message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AccessPolicy
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.identity.accesscontextmanager.v1.AccessPolicy;

                    /**
                     * Verifies an AccessPolicy message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AccessPolicy message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AccessPolicy
                     */
                    public static fromObject(object: { [k: string]: any }): google.identity.accesscontextmanager.v1.AccessPolicy;

                    /**
                     * Creates a plain object from an AccessPolicy message. Also converts values to other types if specified.
                     * @param message AccessPolicy
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.identity.accesscontextmanager.v1.AccessPolicy, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AccessPolicy to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GcpUserAccessBinding. */
                interface IGcpUserAccessBinding {

                    /** GcpUserAccessBinding name */
                    name?: (string|null);

                    /** GcpUserAccessBinding groupKey */
                    groupKey?: (string|null);

                    /** GcpUserAccessBinding accessLevels */
                    accessLevels?: (string[]|null);
                }

                /** Represents a GcpUserAccessBinding. */
                class GcpUserAccessBinding implements IGcpUserAccessBinding {

                    /**
                     * Constructs a new GcpUserAccessBinding.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.identity.accesscontextmanager.v1.IGcpUserAccessBinding);

                    /** GcpUserAccessBinding name. */
                    public name: string;

                    /** GcpUserAccessBinding groupKey. */
                    public groupKey: string;

                    /** GcpUserAccessBinding accessLevels. */
                    public accessLevels: string[];

                    /**
                     * Creates a new GcpUserAccessBinding instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GcpUserAccessBinding instance
                     */
                    public static create(properties?: google.identity.accesscontextmanager.v1.IGcpUserAccessBinding): google.identity.accesscontextmanager.v1.GcpUserAccessBinding;

                    /**
                     * Encodes the specified GcpUserAccessBinding message. Does not implicitly {@link google.identity.accesscontextmanager.v1.GcpUserAccessBinding.verify|verify} messages.
                     * @param message GcpUserAccessBinding message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.identity.accesscontextmanager.v1.IGcpUserAccessBinding, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GcpUserAccessBinding message, length delimited. Does not implicitly {@link google.identity.accesscontextmanager.v1.GcpUserAccessBinding.verify|verify} messages.
                     * @param message GcpUserAccessBinding message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.identity.accesscontextmanager.v1.IGcpUserAccessBinding, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GcpUserAccessBinding message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GcpUserAccessBinding
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.identity.accesscontextmanager.v1.GcpUserAccessBinding;

                    /**
                     * Decodes a GcpUserAccessBinding message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GcpUserAccessBinding
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.identity.accesscontextmanager.v1.GcpUserAccessBinding;

                    /**
                     * Verifies a GcpUserAccessBinding message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GcpUserAccessBinding message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GcpUserAccessBinding
                     */
                    public static fromObject(object: { [k: string]: any }): google.identity.accesscontextmanager.v1.GcpUserAccessBinding;

                    /**
                     * Creates a plain object from a GcpUserAccessBinding message. Also converts values to other types if specified.
                     * @param message GcpUserAccessBinding
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.identity.accesscontextmanager.v1.GcpUserAccessBinding, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GcpUserAccessBinding to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ServicePerimeter. */
                interface IServicePerimeter {

                    /** ServicePerimeter name */
                    name?: (string|null);

                    /** ServicePerimeter title */
                    title?: (string|null);

                    /** ServicePerimeter description */
                    description?: (string|null);

                    /** ServicePerimeter createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** ServicePerimeter updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** ServicePerimeter perimeterType */
                    perimeterType?: (google.identity.accesscontextmanager.v1.ServicePerimeter.PerimeterType|keyof typeof google.identity.accesscontextmanager.v1.ServicePerimeter.PerimeterType|null);

                    /** ServicePerimeter status */
                    status?: (google.identity.accesscontextmanager.v1.IServicePerimeterConfig|null);

                    /** ServicePerimeter spec */
                    spec?: (google.identity.accesscontextmanager.v1.IServicePerimeterConfig|null);

                    /** ServicePerimeter useExplicitDryRunSpec */
                    useExplicitDryRunSpec?: (boolean|null);
                }

                /** Represents a ServicePerimeter. */
                class ServicePerimeter implements IServicePerimeter {

                    /**
                     * Constructs a new ServicePerimeter.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.identity.accesscontextmanager.v1.IServicePerimeter);

                    /** ServicePerimeter name. */
                    public name: string;

                    /** ServicePerimeter title. */
                    public title: string;

                    /** ServicePerimeter description. */
                    public description: string;

                    /** ServicePerimeter createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** ServicePerimeter updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** ServicePerimeter perimeterType. */
                    public perimeterType: (google.identity.accesscontextmanager.v1.ServicePerimeter.PerimeterType|keyof typeof google.identity.accesscontextmanager.v1.ServicePerimeter.PerimeterType);

                    /** ServicePerimeter status. */
                    public status?: (google.identity.accesscontextmanager.v1.IServicePerimeterConfig|null);

                    /** ServicePerimeter spec. */
                    public spec?: (google.identity.accesscontextmanager.v1.IServicePerimeterConfig|null);

                    /** ServicePerimeter useExplicitDryRunSpec. */
                    public useExplicitDryRunSpec: boolean;

                    /**
                     * Creates a new ServicePerimeter instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ServicePerimeter instance
                     */
                    public static create(properties?: google.identity.accesscontextmanager.v1.IServicePerimeter): google.identity.accesscontextmanager.v1.ServicePerimeter;

                    /**
                     * Encodes the specified ServicePerimeter message. Does not implicitly {@link google.identity.accesscontextmanager.v1.ServicePerimeter.verify|verify} messages.
                     * @param message ServicePerimeter message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.identity.accesscontextmanager.v1.IServicePerimeter, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ServicePerimeter message, length delimited. Does not implicitly {@link google.identity.accesscontextmanager.v1.ServicePerimeter.verify|verify} messages.
                     * @param message ServicePerimeter message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.identity.accesscontextmanager.v1.IServicePerimeter, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ServicePerimeter message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ServicePerimeter
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.identity.accesscontextmanager.v1.ServicePerimeter;

                    /**
                     * Decodes a ServicePerimeter message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ServicePerimeter
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.identity.accesscontextmanager.v1.ServicePerimeter;

                    /**
                     * Verifies a ServicePerimeter message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ServicePerimeter message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ServicePerimeter
                     */
                    public static fromObject(object: { [k: string]: any }): google.identity.accesscontextmanager.v1.ServicePerimeter;

                    /**
                     * Creates a plain object from a ServicePerimeter message. Also converts values to other types if specified.
                     * @param message ServicePerimeter
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.identity.accesscontextmanager.v1.ServicePerimeter, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ServicePerimeter to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace ServicePerimeter {

                    /** PerimeterType enum. */
                    enum PerimeterType {
                        PERIMETER_TYPE_REGULAR = 0,
                        PERIMETER_TYPE_BRIDGE = 1
                    }
                }

                /** Properties of a ServicePerimeterConfig. */
                interface IServicePerimeterConfig {

                    /** ServicePerimeterConfig resources */
                    resources?: (string[]|null);

                    /** ServicePerimeterConfig accessLevels */
                    accessLevels?: (string[]|null);

                    /** ServicePerimeterConfig restrictedServices */
                    restrictedServices?: (string[]|null);

                    /** ServicePerimeterConfig vpcAccessibleServices */
                    vpcAccessibleServices?: (google.identity.accesscontextmanager.v1.ServicePerimeterConfig.IVpcAccessibleServices|null);

                    /** ServicePerimeterConfig ingressPolicies */
                    ingressPolicies?: (google.identity.accesscontextmanager.v1.ServicePerimeterConfig.IIngressPolicy[]|null);

                    /** ServicePerimeterConfig egressPolicies */
                    egressPolicies?: (google.identity.accesscontextmanager.v1.ServicePerimeterConfig.IEgressPolicy[]|null);
                }

                /** Represents a ServicePerimeterConfig. */
                class ServicePerimeterConfig implements IServicePerimeterConfig {

                    /**
                     * Constructs a new ServicePerimeterConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.identity.accesscontextmanager.v1.IServicePerimeterConfig);

                    /** ServicePerimeterConfig resources. */
                    public resources: string[];

                    /** ServicePerimeterConfig accessLevels. */
                    public accessLevels: string[];

                    /** ServicePerimeterConfig restrictedServices. */
                    public restrictedServices: string[];

                    /** ServicePerimeterConfig vpcAccessibleServices. */
                    public vpcAccessibleServices?: (google.identity.accesscontextmanager.v1.ServicePerimeterConfig.IVpcAccessibleServices|null);

                    /** ServicePerimeterConfig ingressPolicies. */
                    public ingressPolicies: google.identity.accesscontextmanager.v1.ServicePerimeterConfig.IIngressPolicy[];

                    /** ServicePerimeterConfig egressPolicies. */
                    public egressPolicies: google.identity.accesscontextmanager.v1.ServicePerimeterConfig.IEgressPolicy[];

                    /**
                     * Creates a new ServicePerimeterConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ServicePerimeterConfig instance
                     */
                    public static create(properties?: google.identity.accesscontextmanager.v1.IServicePerimeterConfig): google.identity.accesscontextmanager.v1.ServicePerimeterConfig;

                    /**
                     * Encodes the specified ServicePerimeterConfig message. Does not implicitly {@link google.identity.accesscontextmanager.v1.ServicePerimeterConfig.verify|verify} messages.
                     * @param message ServicePerimeterConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.identity.accesscontextmanager.v1.IServicePerimeterConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ServicePerimeterConfig message, length delimited. Does not implicitly {@link google.identity.accesscontextmanager.v1.ServicePerimeterConfig.verify|verify} messages.
                     * @param message ServicePerimeterConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.identity.accesscontextmanager.v1.IServicePerimeterConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ServicePerimeterConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ServicePerimeterConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.identity.accesscontextmanager.v1.ServicePerimeterConfig;

                    /**
                     * Decodes a ServicePerimeterConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ServicePerimeterConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.identity.accesscontextmanager.v1.ServicePerimeterConfig;

                    /**
                     * Verifies a ServicePerimeterConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ServicePerimeterConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ServicePerimeterConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.identity.accesscontextmanager.v1.ServicePerimeterConfig;

                    /**
                     * Creates a plain object from a ServicePerimeterConfig message. Also converts values to other types if specified.
                     * @param message ServicePerimeterConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.identity.accesscontextmanager.v1.ServicePerimeterConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ServicePerimeterConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace ServicePerimeterConfig {

                    /** Properties of a VpcAccessibleServices. */
                    interface IVpcAccessibleServices {

                        /** VpcAccessibleServices enableRestriction */
                        enableRestriction?: (boolean|null);

                        /** VpcAccessibleServices allowedServices */
                        allowedServices?: (string[]|null);
                    }

                    /** Represents a VpcAccessibleServices. */
                    class VpcAccessibleServices implements IVpcAccessibleServices {

                        /**
                         * Constructs a new VpcAccessibleServices.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.identity.accesscontextmanager.v1.ServicePerimeterConfig.IVpcAccessibleServices);

                        /** VpcAccessibleServices enableRestriction. */
                        public enableRestriction: boolean;

                        /** VpcAccessibleServices allowedServices. */
                        public allowedServices: string[];

                        /**
                         * Creates a new VpcAccessibleServices instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns VpcAccessibleServices instance
                         */
                        public static create(properties?: google.identity.accesscontextmanager.v1.ServicePerimeterConfig.IVpcAccessibleServices): google.identity.accesscontextmanager.v1.ServicePerimeterConfig.VpcAccessibleServices;

                        /**
                         * Encodes the specified VpcAccessibleServices message. Does not implicitly {@link google.identity.accesscontextmanager.v1.ServicePerimeterConfig.VpcAccessibleServices.verify|verify} messages.
                         * @param message VpcAccessibleServices message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.identity.accesscontextmanager.v1.ServicePerimeterConfig.IVpcAccessibleServices, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified VpcAccessibleServices message, length delimited. Does not implicitly {@link google.identity.accesscontextmanager.v1.ServicePerimeterConfig.VpcAccessibleServices.verify|verify} messages.
                         * @param message VpcAccessibleServices message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.identity.accesscontextmanager.v1.ServicePerimeterConfig.IVpcAccessibleServices, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a VpcAccessibleServices message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns VpcAccessibleServices
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.identity.accesscontextmanager.v1.ServicePerimeterConfig.VpcAccessibleServices;

                        /**
                         * Decodes a VpcAccessibleServices message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns VpcAccessibleServices
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.identity.accesscontextmanager.v1.ServicePerimeterConfig.VpcAccessibleServices;

                        /**
                         * Verifies a VpcAccessibleServices message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a VpcAccessibleServices message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns VpcAccessibleServices
                         */
                        public static fromObject(object: { [k: string]: any }): google.identity.accesscontextmanager.v1.ServicePerimeterConfig.VpcAccessibleServices;

                        /**
                         * Creates a plain object from a VpcAccessibleServices message. Also converts values to other types if specified.
                         * @param message VpcAccessibleServices
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.identity.accesscontextmanager.v1.ServicePerimeterConfig.VpcAccessibleServices, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this VpcAccessibleServices to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a MethodSelector. */
                    interface IMethodSelector {

                        /** MethodSelector method */
                        method?: (string|null);

                        /** MethodSelector permission */
                        permission?: (string|null);
                    }

                    /** Represents a MethodSelector. */
                    class MethodSelector implements IMethodSelector {

                        /**
                         * Constructs a new MethodSelector.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.identity.accesscontextmanager.v1.ServicePerimeterConfig.IMethodSelector);

                        /** MethodSelector method. */
                        public method?: (string|null);

                        /** MethodSelector permission. */
                        public permission?: (string|null);

                        /** MethodSelector kind. */
                        public kind?: ("method"|"permission");

                        /**
                         * Creates a new MethodSelector instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns MethodSelector instance
                         */
                        public static create(properties?: google.identity.accesscontextmanager.v1.ServicePerimeterConfig.IMethodSelector): google.identity.accesscontextmanager.v1.ServicePerimeterConfig.MethodSelector;

                        /**
                         * Encodes the specified MethodSelector message. Does not implicitly {@link google.identity.accesscontextmanager.v1.ServicePerimeterConfig.MethodSelector.verify|verify} messages.
                         * @param message MethodSelector message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.identity.accesscontextmanager.v1.ServicePerimeterConfig.IMethodSelector, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified MethodSelector message, length delimited. Does not implicitly {@link google.identity.accesscontextmanager.v1.ServicePerimeterConfig.MethodSelector.verify|verify} messages.
                         * @param message MethodSelector message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.identity.accesscontextmanager.v1.ServicePerimeterConfig.IMethodSelector, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a MethodSelector message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns MethodSelector
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.identity.accesscontextmanager.v1.ServicePerimeterConfig.MethodSelector;

                        /**
                         * Decodes a MethodSelector message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns MethodSelector
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.identity.accesscontextmanager.v1.ServicePerimeterConfig.MethodSelector;

                        /**
                         * Verifies a MethodSelector message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a MethodSelector message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns MethodSelector
                         */
                        public static fromObject(object: { [k: string]: any }): google.identity.accesscontextmanager.v1.ServicePerimeterConfig.MethodSelector;

                        /**
                         * Creates a plain object from a MethodSelector message. Also converts values to other types if specified.
                         * @param message MethodSelector
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.identity.accesscontextmanager.v1.ServicePerimeterConfig.MethodSelector, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this MethodSelector to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of an ApiOperation. */
                    interface IApiOperation {

                        /** ApiOperation serviceName */
                        serviceName?: (string|null);

                        /** ApiOperation methodSelectors */
                        methodSelectors?: (google.identity.accesscontextmanager.v1.ServicePerimeterConfig.IMethodSelector[]|null);
                    }

                    /** Represents an ApiOperation. */
                    class ApiOperation implements IApiOperation {

                        /**
                         * Constructs a new ApiOperation.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.identity.accesscontextmanager.v1.ServicePerimeterConfig.IApiOperation);

                        /** ApiOperation serviceName. */
                        public serviceName: string;

                        /** ApiOperation methodSelectors. */
                        public methodSelectors: google.identity.accesscontextmanager.v1.ServicePerimeterConfig.IMethodSelector[];

                        /**
                         * Creates a new ApiOperation instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ApiOperation instance
                         */
                        public static create(properties?: google.identity.accesscontextmanager.v1.ServicePerimeterConfig.IApiOperation): google.identity.accesscontextmanager.v1.ServicePerimeterConfig.ApiOperation;

                        /**
                         * Encodes the specified ApiOperation message. Does not implicitly {@link google.identity.accesscontextmanager.v1.ServicePerimeterConfig.ApiOperation.verify|verify} messages.
                         * @param message ApiOperation message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.identity.accesscontextmanager.v1.ServicePerimeterConfig.IApiOperation, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ApiOperation message, length delimited. Does not implicitly {@link google.identity.accesscontextmanager.v1.ServicePerimeterConfig.ApiOperation.verify|verify} messages.
                         * @param message ApiOperation message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.identity.accesscontextmanager.v1.ServicePerimeterConfig.IApiOperation, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an ApiOperation message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ApiOperation
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.identity.accesscontextmanager.v1.ServicePerimeterConfig.ApiOperation;

                        /**
                         * Decodes an ApiOperation message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ApiOperation
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.identity.accesscontextmanager.v1.ServicePerimeterConfig.ApiOperation;

                        /**
                         * Verifies an ApiOperation message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an ApiOperation message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ApiOperation
                         */
                        public static fromObject(object: { [k: string]: any }): google.identity.accesscontextmanager.v1.ServicePerimeterConfig.ApiOperation;

                        /**
                         * Creates a plain object from an ApiOperation message. Also converts values to other types if specified.
                         * @param message ApiOperation
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.identity.accesscontextmanager.v1.ServicePerimeterConfig.ApiOperation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ApiOperation to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of an IngressSource. */
                    interface IIngressSource {

                        /** IngressSource accessLevel */
                        accessLevel?: (string|null);

                        /** IngressSource resource */
                        resource?: (string|null);
                    }

                    /** Represents an IngressSource. */
                    class IngressSource implements IIngressSource {

                        /**
                         * Constructs a new IngressSource.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.identity.accesscontextmanager.v1.ServicePerimeterConfig.IIngressSource);

                        /** IngressSource accessLevel. */
                        public accessLevel?: (string|null);

                        /** IngressSource resource. */
                        public resource?: (string|null);

                        /** IngressSource source. */
                        public source?: ("accessLevel"|"resource");

                        /**
                         * Creates a new IngressSource instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns IngressSource instance
                         */
                        public static create(properties?: google.identity.accesscontextmanager.v1.ServicePerimeterConfig.IIngressSource): google.identity.accesscontextmanager.v1.ServicePerimeterConfig.IngressSource;

                        /**
                         * Encodes the specified IngressSource message. Does not implicitly {@link google.identity.accesscontextmanager.v1.ServicePerimeterConfig.IngressSource.verify|verify} messages.
                         * @param message IngressSource message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.identity.accesscontextmanager.v1.ServicePerimeterConfig.IIngressSource, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified IngressSource message, length delimited. Does not implicitly {@link google.identity.accesscontextmanager.v1.ServicePerimeterConfig.IngressSource.verify|verify} messages.
                         * @param message IngressSource message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.identity.accesscontextmanager.v1.ServicePerimeterConfig.IIngressSource, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an IngressSource message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns IngressSource
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.identity.accesscontextmanager.v1.ServicePerimeterConfig.IngressSource;

                        /**
                         * Decodes an IngressSource message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns IngressSource
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.identity.accesscontextmanager.v1.ServicePerimeterConfig.IngressSource;

                        /**
                         * Verifies an IngressSource message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an IngressSource message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns IngressSource
                         */
                        public static fromObject(object: { [k: string]: any }): google.identity.accesscontextmanager.v1.ServicePerimeterConfig.IngressSource;

                        /**
                         * Creates a plain object from an IngressSource message. Also converts values to other types if specified.
                         * @param message IngressSource
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.identity.accesscontextmanager.v1.ServicePerimeterConfig.IngressSource, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this IngressSource to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of an EgressTo. */
                    interface IEgressTo {

                        /** EgressTo resources */
                        resources?: (string[]|null);

                        /** EgressTo operations */
                        operations?: (google.identity.accesscontextmanager.v1.ServicePerimeterConfig.IApiOperation[]|null);
                    }

                    /** Represents an EgressTo. */
                    class EgressTo implements IEgressTo {

                        /**
                         * Constructs a new EgressTo.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.identity.accesscontextmanager.v1.ServicePerimeterConfig.IEgressTo);

                        /** EgressTo resources. */
                        public resources: string[];

                        /** EgressTo operations. */
                        public operations: google.identity.accesscontextmanager.v1.ServicePerimeterConfig.IApiOperation[];

                        /**
                         * Creates a new EgressTo instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns EgressTo instance
                         */
                        public static create(properties?: google.identity.accesscontextmanager.v1.ServicePerimeterConfig.IEgressTo): google.identity.accesscontextmanager.v1.ServicePerimeterConfig.EgressTo;

                        /**
                         * Encodes the specified EgressTo message. Does not implicitly {@link google.identity.accesscontextmanager.v1.ServicePerimeterConfig.EgressTo.verify|verify} messages.
                         * @param message EgressTo message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.identity.accesscontextmanager.v1.ServicePerimeterConfig.IEgressTo, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified EgressTo message, length delimited. Does not implicitly {@link google.identity.accesscontextmanager.v1.ServicePerimeterConfig.EgressTo.verify|verify} messages.
                         * @param message EgressTo message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.identity.accesscontextmanager.v1.ServicePerimeterConfig.IEgressTo, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an EgressTo message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns EgressTo
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.identity.accesscontextmanager.v1.ServicePerimeterConfig.EgressTo;

                        /**
                         * Decodes an EgressTo message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns EgressTo
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.identity.accesscontextmanager.v1.ServicePerimeterConfig.EgressTo;

                        /**
                         * Verifies an EgressTo message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an EgressTo message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns EgressTo
                         */
                        public static fromObject(object: { [k: string]: any }): google.identity.accesscontextmanager.v1.ServicePerimeterConfig.EgressTo;

                        /**
                         * Creates a plain object from an EgressTo message. Also converts values to other types if specified.
                         * @param message EgressTo
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.identity.accesscontextmanager.v1.ServicePerimeterConfig.EgressTo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this EgressTo to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of an IngressFrom. */
                    interface IIngressFrom {

                        /** IngressFrom sources */
                        sources?: (google.identity.accesscontextmanager.v1.ServicePerimeterConfig.IIngressSource[]|null);

                        /** IngressFrom identities */
                        identities?: (string[]|null);

                        /** IngressFrom identityType */
                        identityType?: (google.identity.accesscontextmanager.v1.ServicePerimeterConfig.IdentityType|keyof typeof google.identity.accesscontextmanager.v1.ServicePerimeterConfig.IdentityType|null);
                    }

                    /** Represents an IngressFrom. */
                    class IngressFrom implements IIngressFrom {

                        /**
                         * Constructs a new IngressFrom.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.identity.accesscontextmanager.v1.ServicePerimeterConfig.IIngressFrom);

                        /** IngressFrom sources. */
                        public sources: google.identity.accesscontextmanager.v1.ServicePerimeterConfig.IIngressSource[];

                        /** IngressFrom identities. */
                        public identities: string[];

                        /** IngressFrom identityType. */
                        public identityType: (google.identity.accesscontextmanager.v1.ServicePerimeterConfig.IdentityType|keyof typeof google.identity.accesscontextmanager.v1.ServicePerimeterConfig.IdentityType);

                        /**
                         * Creates a new IngressFrom instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns IngressFrom instance
                         */
                        public static create(properties?: google.identity.accesscontextmanager.v1.ServicePerimeterConfig.IIngressFrom): google.identity.accesscontextmanager.v1.ServicePerimeterConfig.IngressFrom;

                        /**
                         * Encodes the specified IngressFrom message. Does not implicitly {@link google.identity.accesscontextmanager.v1.ServicePerimeterConfig.IngressFrom.verify|verify} messages.
                         * @param message IngressFrom message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.identity.accesscontextmanager.v1.ServicePerimeterConfig.IIngressFrom, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified IngressFrom message, length delimited. Does not implicitly {@link google.identity.accesscontextmanager.v1.ServicePerimeterConfig.IngressFrom.verify|verify} messages.
                         * @param message IngressFrom message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.identity.accesscontextmanager.v1.ServicePerimeterConfig.IIngressFrom, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an IngressFrom message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns IngressFrom
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.identity.accesscontextmanager.v1.ServicePerimeterConfig.IngressFrom;

                        /**
                         * Decodes an IngressFrom message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns IngressFrom
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.identity.accesscontextmanager.v1.ServicePerimeterConfig.IngressFrom;

                        /**
                         * Verifies an IngressFrom message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an IngressFrom message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns IngressFrom
                         */
                        public static fromObject(object: { [k: string]: any }): google.identity.accesscontextmanager.v1.ServicePerimeterConfig.IngressFrom;

                        /**
                         * Creates a plain object from an IngressFrom message. Also converts values to other types if specified.
                         * @param message IngressFrom
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.identity.accesscontextmanager.v1.ServicePerimeterConfig.IngressFrom, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this IngressFrom to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of an IngressTo. */
                    interface IIngressTo {

                        /** IngressTo operations */
                        operations?: (google.identity.accesscontextmanager.v1.ServicePerimeterConfig.IApiOperation[]|null);

                        /** IngressTo resources */
                        resources?: (string[]|null);
                    }

                    /** Represents an IngressTo. */
                    class IngressTo implements IIngressTo {

                        /**
                         * Constructs a new IngressTo.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.identity.accesscontextmanager.v1.ServicePerimeterConfig.IIngressTo);

                        /** IngressTo operations. */
                        public operations: google.identity.accesscontextmanager.v1.ServicePerimeterConfig.IApiOperation[];

                        /** IngressTo resources. */
                        public resources: string[];

                        /**
                         * Creates a new IngressTo instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns IngressTo instance
                         */
                        public static create(properties?: google.identity.accesscontextmanager.v1.ServicePerimeterConfig.IIngressTo): google.identity.accesscontextmanager.v1.ServicePerimeterConfig.IngressTo;

                        /**
                         * Encodes the specified IngressTo message. Does not implicitly {@link google.identity.accesscontextmanager.v1.ServicePerimeterConfig.IngressTo.verify|verify} messages.
                         * @param message IngressTo message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.identity.accesscontextmanager.v1.ServicePerimeterConfig.IIngressTo, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified IngressTo message, length delimited. Does not implicitly {@link google.identity.accesscontextmanager.v1.ServicePerimeterConfig.IngressTo.verify|verify} messages.
                         * @param message IngressTo message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.identity.accesscontextmanager.v1.ServicePerimeterConfig.IIngressTo, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an IngressTo message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns IngressTo
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.identity.accesscontextmanager.v1.ServicePerimeterConfig.IngressTo;

                        /**
                         * Decodes an IngressTo message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns IngressTo
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.identity.accesscontextmanager.v1.ServicePerimeterConfig.IngressTo;

                        /**
                         * Verifies an IngressTo message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an IngressTo message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns IngressTo
                         */
                        public static fromObject(object: { [k: string]: any }): google.identity.accesscontextmanager.v1.ServicePerimeterConfig.IngressTo;

                        /**
                         * Creates a plain object from an IngressTo message. Also converts values to other types if specified.
                         * @param message IngressTo
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.identity.accesscontextmanager.v1.ServicePerimeterConfig.IngressTo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this IngressTo to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of an IngressPolicy. */
                    interface IIngressPolicy {

                        /** IngressPolicy ingressFrom */
                        ingressFrom?: (google.identity.accesscontextmanager.v1.ServicePerimeterConfig.IIngressFrom|null);

                        /** IngressPolicy ingressTo */
                        ingressTo?: (google.identity.accesscontextmanager.v1.ServicePerimeterConfig.IIngressTo|null);
                    }

                    /** Represents an IngressPolicy. */
                    class IngressPolicy implements IIngressPolicy {

                        /**
                         * Constructs a new IngressPolicy.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.identity.accesscontextmanager.v1.ServicePerimeterConfig.IIngressPolicy);

                        /** IngressPolicy ingressFrom. */
                        public ingressFrom?: (google.identity.accesscontextmanager.v1.ServicePerimeterConfig.IIngressFrom|null);

                        /** IngressPolicy ingressTo. */
                        public ingressTo?: (google.identity.accesscontextmanager.v1.ServicePerimeterConfig.IIngressTo|null);

                        /**
                         * Creates a new IngressPolicy instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns IngressPolicy instance
                         */
                        public static create(properties?: google.identity.accesscontextmanager.v1.ServicePerimeterConfig.IIngressPolicy): google.identity.accesscontextmanager.v1.ServicePerimeterConfig.IngressPolicy;

                        /**
                         * Encodes the specified IngressPolicy message. Does not implicitly {@link google.identity.accesscontextmanager.v1.ServicePerimeterConfig.IngressPolicy.verify|verify} messages.
                         * @param message IngressPolicy message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.identity.accesscontextmanager.v1.ServicePerimeterConfig.IIngressPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified IngressPolicy message, length delimited. Does not implicitly {@link google.identity.accesscontextmanager.v1.ServicePerimeterConfig.IngressPolicy.verify|verify} messages.
                         * @param message IngressPolicy message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.identity.accesscontextmanager.v1.ServicePerimeterConfig.IIngressPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an IngressPolicy message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns IngressPolicy
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.identity.accesscontextmanager.v1.ServicePerimeterConfig.IngressPolicy;

                        /**
                         * Decodes an IngressPolicy message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns IngressPolicy
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.identity.accesscontextmanager.v1.ServicePerimeterConfig.IngressPolicy;

                        /**
                         * Verifies an IngressPolicy message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an IngressPolicy message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns IngressPolicy
                         */
                        public static fromObject(object: { [k: string]: any }): google.identity.accesscontextmanager.v1.ServicePerimeterConfig.IngressPolicy;

                        /**
                         * Creates a plain object from an IngressPolicy message. Also converts values to other types if specified.
                         * @param message IngressPolicy
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.identity.accesscontextmanager.v1.ServicePerimeterConfig.IngressPolicy, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this IngressPolicy to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of an EgressPolicy. */
                    interface IEgressPolicy {

                        /** EgressPolicy egressFrom */
                        egressFrom?: (google.identity.accesscontextmanager.v1.ServicePerimeterConfig.IEgressFrom|null);

                        /** EgressPolicy egressTo */
                        egressTo?: (google.identity.accesscontextmanager.v1.ServicePerimeterConfig.IEgressTo|null);
                    }

                    /** Represents an EgressPolicy. */
                    class EgressPolicy implements IEgressPolicy {

                        /**
                         * Constructs a new EgressPolicy.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.identity.accesscontextmanager.v1.ServicePerimeterConfig.IEgressPolicy);

                        /** EgressPolicy egressFrom. */
                        public egressFrom?: (google.identity.accesscontextmanager.v1.ServicePerimeterConfig.IEgressFrom|null);

                        /** EgressPolicy egressTo. */
                        public egressTo?: (google.identity.accesscontextmanager.v1.ServicePerimeterConfig.IEgressTo|null);

                        /**
                         * Creates a new EgressPolicy instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns EgressPolicy instance
                         */
                        public static create(properties?: google.identity.accesscontextmanager.v1.ServicePerimeterConfig.IEgressPolicy): google.identity.accesscontextmanager.v1.ServicePerimeterConfig.EgressPolicy;

                        /**
                         * Encodes the specified EgressPolicy message. Does not implicitly {@link google.identity.accesscontextmanager.v1.ServicePerimeterConfig.EgressPolicy.verify|verify} messages.
                         * @param message EgressPolicy message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.identity.accesscontextmanager.v1.ServicePerimeterConfig.IEgressPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified EgressPolicy message, length delimited. Does not implicitly {@link google.identity.accesscontextmanager.v1.ServicePerimeterConfig.EgressPolicy.verify|verify} messages.
                         * @param message EgressPolicy message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.identity.accesscontextmanager.v1.ServicePerimeterConfig.IEgressPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an EgressPolicy message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns EgressPolicy
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.identity.accesscontextmanager.v1.ServicePerimeterConfig.EgressPolicy;

                        /**
                         * Decodes an EgressPolicy message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns EgressPolicy
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.identity.accesscontextmanager.v1.ServicePerimeterConfig.EgressPolicy;

                        /**
                         * Verifies an EgressPolicy message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an EgressPolicy message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns EgressPolicy
                         */
                        public static fromObject(object: { [k: string]: any }): google.identity.accesscontextmanager.v1.ServicePerimeterConfig.EgressPolicy;

                        /**
                         * Creates a plain object from an EgressPolicy message. Also converts values to other types if specified.
                         * @param message EgressPolicy
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.identity.accesscontextmanager.v1.ServicePerimeterConfig.EgressPolicy, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this EgressPolicy to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of an EgressFrom. */
                    interface IEgressFrom {

                        /** EgressFrom identities */
                        identities?: (string[]|null);

                        /** EgressFrom identityType */
                        identityType?: (google.identity.accesscontextmanager.v1.ServicePerimeterConfig.IdentityType|keyof typeof google.identity.accesscontextmanager.v1.ServicePerimeterConfig.IdentityType|null);
                    }

                    /** Represents an EgressFrom. */
                    class EgressFrom implements IEgressFrom {

                        /**
                         * Constructs a new EgressFrom.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.identity.accesscontextmanager.v1.ServicePerimeterConfig.IEgressFrom);

                        /** EgressFrom identities. */
                        public identities: string[];

                        /** EgressFrom identityType. */
                        public identityType: (google.identity.accesscontextmanager.v1.ServicePerimeterConfig.IdentityType|keyof typeof google.identity.accesscontextmanager.v1.ServicePerimeterConfig.IdentityType);

                        /**
                         * Creates a new EgressFrom instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns EgressFrom instance
                         */
                        public static create(properties?: google.identity.accesscontextmanager.v1.ServicePerimeterConfig.IEgressFrom): google.identity.accesscontextmanager.v1.ServicePerimeterConfig.EgressFrom;

                        /**
                         * Encodes the specified EgressFrom message. Does not implicitly {@link google.identity.accesscontextmanager.v1.ServicePerimeterConfig.EgressFrom.verify|verify} messages.
                         * @param message EgressFrom message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.identity.accesscontextmanager.v1.ServicePerimeterConfig.IEgressFrom, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified EgressFrom message, length delimited. Does not implicitly {@link google.identity.accesscontextmanager.v1.ServicePerimeterConfig.EgressFrom.verify|verify} messages.
                         * @param message EgressFrom message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.identity.accesscontextmanager.v1.ServicePerimeterConfig.IEgressFrom, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an EgressFrom message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns EgressFrom
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.identity.accesscontextmanager.v1.ServicePerimeterConfig.EgressFrom;

                        /**
                         * Decodes an EgressFrom message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns EgressFrom
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.identity.accesscontextmanager.v1.ServicePerimeterConfig.EgressFrom;

                        /**
                         * Verifies an EgressFrom message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an EgressFrom message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns EgressFrom
                         */
                        public static fromObject(object: { [k: string]: any }): google.identity.accesscontextmanager.v1.ServicePerimeterConfig.EgressFrom;

                        /**
                         * Creates a plain object from an EgressFrom message. Also converts values to other types if specified.
                         * @param message EgressFrom
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.identity.accesscontextmanager.v1.ServicePerimeterConfig.EgressFrom, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this EgressFrom to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** IdentityType enum. */
                    enum IdentityType {
                        IDENTITY_TYPE_UNSPECIFIED = 0,
                        ANY_IDENTITY = 1,
                        ANY_USER_ACCOUNT = 2,
                        ANY_SERVICE_ACCOUNT = 3
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
