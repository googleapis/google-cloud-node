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

    /** Namespace iam. */
    namespace iam {

        /** Namespace v1beta. */
        namespace v1beta {

            /** Represents a WorkloadIdentityPools */
            class WorkloadIdentityPools extends $protobuf.rpc.Service {

                /**
                 * Constructs a new WorkloadIdentityPools service.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 */
                constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                /**
                 * Creates new WorkloadIdentityPools service using the specified rpc implementation.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 * @returns RPC service. Useful where requests and/or responses are streamed.
                 */
                public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): WorkloadIdentityPools;

                /**
                 * Calls ListWorkloadIdentityPools.
                 * @param request ListWorkloadIdentityPoolsRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and ListWorkloadIdentityPoolsResponse
                 */
                public listWorkloadIdentityPools(request: google.iam.v1beta.IListWorkloadIdentityPoolsRequest, callback: google.iam.v1beta.WorkloadIdentityPools.ListWorkloadIdentityPoolsCallback): void;

                /**
                 * Calls ListWorkloadIdentityPools.
                 * @param request ListWorkloadIdentityPoolsRequest message or plain object
                 * @returns Promise
                 */
                public listWorkloadIdentityPools(request: google.iam.v1beta.IListWorkloadIdentityPoolsRequest): Promise<google.iam.v1beta.ListWorkloadIdentityPoolsResponse>;

                /**
                 * Calls GetWorkloadIdentityPool.
                 * @param request GetWorkloadIdentityPoolRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and WorkloadIdentityPool
                 */
                public getWorkloadIdentityPool(request: google.iam.v1beta.IGetWorkloadIdentityPoolRequest, callback: google.iam.v1beta.WorkloadIdentityPools.GetWorkloadIdentityPoolCallback): void;

                /**
                 * Calls GetWorkloadIdentityPool.
                 * @param request GetWorkloadIdentityPoolRequest message or plain object
                 * @returns Promise
                 */
                public getWorkloadIdentityPool(request: google.iam.v1beta.IGetWorkloadIdentityPoolRequest): Promise<google.iam.v1beta.WorkloadIdentityPool>;

                /**
                 * Calls CreateWorkloadIdentityPool.
                 * @param request CreateWorkloadIdentityPoolRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Operation
                 */
                public createWorkloadIdentityPool(request: google.iam.v1beta.ICreateWorkloadIdentityPoolRequest, callback: google.iam.v1beta.WorkloadIdentityPools.CreateWorkloadIdentityPoolCallback): void;

                /**
                 * Calls CreateWorkloadIdentityPool.
                 * @param request CreateWorkloadIdentityPoolRequest message or plain object
                 * @returns Promise
                 */
                public createWorkloadIdentityPool(request: google.iam.v1beta.ICreateWorkloadIdentityPoolRequest): Promise<google.longrunning.Operation>;

                /**
                 * Calls UpdateWorkloadIdentityPool.
                 * @param request UpdateWorkloadIdentityPoolRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Operation
                 */
                public updateWorkloadIdentityPool(request: google.iam.v1beta.IUpdateWorkloadIdentityPoolRequest, callback: google.iam.v1beta.WorkloadIdentityPools.UpdateWorkloadIdentityPoolCallback): void;

                /**
                 * Calls UpdateWorkloadIdentityPool.
                 * @param request UpdateWorkloadIdentityPoolRequest message or plain object
                 * @returns Promise
                 */
                public updateWorkloadIdentityPool(request: google.iam.v1beta.IUpdateWorkloadIdentityPoolRequest): Promise<google.longrunning.Operation>;

                /**
                 * Calls DeleteWorkloadIdentityPool.
                 * @param request DeleteWorkloadIdentityPoolRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Operation
                 */
                public deleteWorkloadIdentityPool(request: google.iam.v1beta.IDeleteWorkloadIdentityPoolRequest, callback: google.iam.v1beta.WorkloadIdentityPools.DeleteWorkloadIdentityPoolCallback): void;

                /**
                 * Calls DeleteWorkloadIdentityPool.
                 * @param request DeleteWorkloadIdentityPoolRequest message or plain object
                 * @returns Promise
                 */
                public deleteWorkloadIdentityPool(request: google.iam.v1beta.IDeleteWorkloadIdentityPoolRequest): Promise<google.longrunning.Operation>;

                /**
                 * Calls UndeleteWorkloadIdentityPool.
                 * @param request UndeleteWorkloadIdentityPoolRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Operation
                 */
                public undeleteWorkloadIdentityPool(request: google.iam.v1beta.IUndeleteWorkloadIdentityPoolRequest, callback: google.iam.v1beta.WorkloadIdentityPools.UndeleteWorkloadIdentityPoolCallback): void;

                /**
                 * Calls UndeleteWorkloadIdentityPool.
                 * @param request UndeleteWorkloadIdentityPoolRequest message or plain object
                 * @returns Promise
                 */
                public undeleteWorkloadIdentityPool(request: google.iam.v1beta.IUndeleteWorkloadIdentityPoolRequest): Promise<google.longrunning.Operation>;

                /**
                 * Calls ListWorkloadIdentityPoolProviders.
                 * @param request ListWorkloadIdentityPoolProvidersRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and ListWorkloadIdentityPoolProvidersResponse
                 */
                public listWorkloadIdentityPoolProviders(request: google.iam.v1beta.IListWorkloadIdentityPoolProvidersRequest, callback: google.iam.v1beta.WorkloadIdentityPools.ListWorkloadIdentityPoolProvidersCallback): void;

                /**
                 * Calls ListWorkloadIdentityPoolProviders.
                 * @param request ListWorkloadIdentityPoolProvidersRequest message or plain object
                 * @returns Promise
                 */
                public listWorkloadIdentityPoolProviders(request: google.iam.v1beta.IListWorkloadIdentityPoolProvidersRequest): Promise<google.iam.v1beta.ListWorkloadIdentityPoolProvidersResponse>;

                /**
                 * Calls GetWorkloadIdentityPoolProvider.
                 * @param request GetWorkloadIdentityPoolProviderRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and WorkloadIdentityPoolProvider
                 */
                public getWorkloadIdentityPoolProvider(request: google.iam.v1beta.IGetWorkloadIdentityPoolProviderRequest, callback: google.iam.v1beta.WorkloadIdentityPools.GetWorkloadIdentityPoolProviderCallback): void;

                /**
                 * Calls GetWorkloadIdentityPoolProvider.
                 * @param request GetWorkloadIdentityPoolProviderRequest message or plain object
                 * @returns Promise
                 */
                public getWorkloadIdentityPoolProvider(request: google.iam.v1beta.IGetWorkloadIdentityPoolProviderRequest): Promise<google.iam.v1beta.WorkloadIdentityPoolProvider>;

                /**
                 * Calls CreateWorkloadIdentityPoolProvider.
                 * @param request CreateWorkloadIdentityPoolProviderRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Operation
                 */
                public createWorkloadIdentityPoolProvider(request: google.iam.v1beta.ICreateWorkloadIdentityPoolProviderRequest, callback: google.iam.v1beta.WorkloadIdentityPools.CreateWorkloadIdentityPoolProviderCallback): void;

                /**
                 * Calls CreateWorkloadIdentityPoolProvider.
                 * @param request CreateWorkloadIdentityPoolProviderRequest message or plain object
                 * @returns Promise
                 */
                public createWorkloadIdentityPoolProvider(request: google.iam.v1beta.ICreateWorkloadIdentityPoolProviderRequest): Promise<google.longrunning.Operation>;

                /**
                 * Calls UpdateWorkloadIdentityPoolProvider.
                 * @param request UpdateWorkloadIdentityPoolProviderRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Operation
                 */
                public updateWorkloadIdentityPoolProvider(request: google.iam.v1beta.IUpdateWorkloadIdentityPoolProviderRequest, callback: google.iam.v1beta.WorkloadIdentityPools.UpdateWorkloadIdentityPoolProviderCallback): void;

                /**
                 * Calls UpdateWorkloadIdentityPoolProvider.
                 * @param request UpdateWorkloadIdentityPoolProviderRequest message or plain object
                 * @returns Promise
                 */
                public updateWorkloadIdentityPoolProvider(request: google.iam.v1beta.IUpdateWorkloadIdentityPoolProviderRequest): Promise<google.longrunning.Operation>;

                /**
                 * Calls DeleteWorkloadIdentityPoolProvider.
                 * @param request DeleteWorkloadIdentityPoolProviderRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Operation
                 */
                public deleteWorkloadIdentityPoolProvider(request: google.iam.v1beta.IDeleteWorkloadIdentityPoolProviderRequest, callback: google.iam.v1beta.WorkloadIdentityPools.DeleteWorkloadIdentityPoolProviderCallback): void;

                /**
                 * Calls DeleteWorkloadIdentityPoolProvider.
                 * @param request DeleteWorkloadIdentityPoolProviderRequest message or plain object
                 * @returns Promise
                 */
                public deleteWorkloadIdentityPoolProvider(request: google.iam.v1beta.IDeleteWorkloadIdentityPoolProviderRequest): Promise<google.longrunning.Operation>;

                /**
                 * Calls UndeleteWorkloadIdentityPoolProvider.
                 * @param request UndeleteWorkloadIdentityPoolProviderRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Operation
                 */
                public undeleteWorkloadIdentityPoolProvider(request: google.iam.v1beta.IUndeleteWorkloadIdentityPoolProviderRequest, callback: google.iam.v1beta.WorkloadIdentityPools.UndeleteWorkloadIdentityPoolProviderCallback): void;

                /**
                 * Calls UndeleteWorkloadIdentityPoolProvider.
                 * @param request UndeleteWorkloadIdentityPoolProviderRequest message or plain object
                 * @returns Promise
                 */
                public undeleteWorkloadIdentityPoolProvider(request: google.iam.v1beta.IUndeleteWorkloadIdentityPoolProviderRequest): Promise<google.longrunning.Operation>;
            }

            namespace WorkloadIdentityPools {

                /**
                 * Callback as used by {@link google.iam.v1beta.WorkloadIdentityPools|listWorkloadIdentityPools}.
                 * @param error Error, if any
                 * @param [response] ListWorkloadIdentityPoolsResponse
                 */
                type ListWorkloadIdentityPoolsCallback = (error: (Error|null), response?: google.iam.v1beta.ListWorkloadIdentityPoolsResponse) => void;

                /**
                 * Callback as used by {@link google.iam.v1beta.WorkloadIdentityPools|getWorkloadIdentityPool}.
                 * @param error Error, if any
                 * @param [response] WorkloadIdentityPool
                 */
                type GetWorkloadIdentityPoolCallback = (error: (Error|null), response?: google.iam.v1beta.WorkloadIdentityPool) => void;

                /**
                 * Callback as used by {@link google.iam.v1beta.WorkloadIdentityPools|createWorkloadIdentityPool}.
                 * @param error Error, if any
                 * @param [response] Operation
                 */
                type CreateWorkloadIdentityPoolCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                /**
                 * Callback as used by {@link google.iam.v1beta.WorkloadIdentityPools|updateWorkloadIdentityPool}.
                 * @param error Error, if any
                 * @param [response] Operation
                 */
                type UpdateWorkloadIdentityPoolCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                /**
                 * Callback as used by {@link google.iam.v1beta.WorkloadIdentityPools|deleteWorkloadIdentityPool}.
                 * @param error Error, if any
                 * @param [response] Operation
                 */
                type DeleteWorkloadIdentityPoolCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                /**
                 * Callback as used by {@link google.iam.v1beta.WorkloadIdentityPools|undeleteWorkloadIdentityPool}.
                 * @param error Error, if any
                 * @param [response] Operation
                 */
                type UndeleteWorkloadIdentityPoolCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                /**
                 * Callback as used by {@link google.iam.v1beta.WorkloadIdentityPools|listWorkloadIdentityPoolProviders}.
                 * @param error Error, if any
                 * @param [response] ListWorkloadIdentityPoolProvidersResponse
                 */
                type ListWorkloadIdentityPoolProvidersCallback = (error: (Error|null), response?: google.iam.v1beta.ListWorkloadIdentityPoolProvidersResponse) => void;

                /**
                 * Callback as used by {@link google.iam.v1beta.WorkloadIdentityPools|getWorkloadIdentityPoolProvider}.
                 * @param error Error, if any
                 * @param [response] WorkloadIdentityPoolProvider
                 */
                type GetWorkloadIdentityPoolProviderCallback = (error: (Error|null), response?: google.iam.v1beta.WorkloadIdentityPoolProvider) => void;

                /**
                 * Callback as used by {@link google.iam.v1beta.WorkloadIdentityPools|createWorkloadIdentityPoolProvider}.
                 * @param error Error, if any
                 * @param [response] Operation
                 */
                type CreateWorkloadIdentityPoolProviderCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                /**
                 * Callback as used by {@link google.iam.v1beta.WorkloadIdentityPools|updateWorkloadIdentityPoolProvider}.
                 * @param error Error, if any
                 * @param [response] Operation
                 */
                type UpdateWorkloadIdentityPoolProviderCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                /**
                 * Callback as used by {@link google.iam.v1beta.WorkloadIdentityPools|deleteWorkloadIdentityPoolProvider}.
                 * @param error Error, if any
                 * @param [response] Operation
                 */
                type DeleteWorkloadIdentityPoolProviderCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                /**
                 * Callback as used by {@link google.iam.v1beta.WorkloadIdentityPools|undeleteWorkloadIdentityPoolProvider}.
                 * @param error Error, if any
                 * @param [response] Operation
                 */
                type UndeleteWorkloadIdentityPoolProviderCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;
            }

            /** Properties of a WorkloadIdentityPool. */
            interface IWorkloadIdentityPool {

                /** WorkloadIdentityPool name */
                name?: (string|null);

                /** WorkloadIdentityPool displayName */
                displayName?: (string|null);

                /** WorkloadIdentityPool description */
                description?: (string|null);

                /** WorkloadIdentityPool state */
                state?: (google.iam.v1beta.WorkloadIdentityPool.State|keyof typeof google.iam.v1beta.WorkloadIdentityPool.State|null);

                /** WorkloadIdentityPool disabled */
                disabled?: (boolean|null);
            }

            /** Represents a WorkloadIdentityPool. */
            class WorkloadIdentityPool implements IWorkloadIdentityPool {

                /**
                 * Constructs a new WorkloadIdentityPool.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v1beta.IWorkloadIdentityPool);

                /** WorkloadIdentityPool name. */
                public name: string;

                /** WorkloadIdentityPool displayName. */
                public displayName: string;

                /** WorkloadIdentityPool description. */
                public description: string;

                /** WorkloadIdentityPool state. */
                public state: (google.iam.v1beta.WorkloadIdentityPool.State|keyof typeof google.iam.v1beta.WorkloadIdentityPool.State);

                /** WorkloadIdentityPool disabled. */
                public disabled: boolean;

                /**
                 * Creates a new WorkloadIdentityPool instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns WorkloadIdentityPool instance
                 */
                public static create(properties?: google.iam.v1beta.IWorkloadIdentityPool): google.iam.v1beta.WorkloadIdentityPool;

                /**
                 * Encodes the specified WorkloadIdentityPool message. Does not implicitly {@link google.iam.v1beta.WorkloadIdentityPool.verify|verify} messages.
                 * @param message WorkloadIdentityPool message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v1beta.IWorkloadIdentityPool, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified WorkloadIdentityPool message, length delimited. Does not implicitly {@link google.iam.v1beta.WorkloadIdentityPool.verify|verify} messages.
                 * @param message WorkloadIdentityPool message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v1beta.IWorkloadIdentityPool, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a WorkloadIdentityPool message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns WorkloadIdentityPool
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v1beta.WorkloadIdentityPool;

                /**
                 * Decodes a WorkloadIdentityPool message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns WorkloadIdentityPool
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v1beta.WorkloadIdentityPool;

                /**
                 * Verifies a WorkloadIdentityPool message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a WorkloadIdentityPool message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns WorkloadIdentityPool
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v1beta.WorkloadIdentityPool;

                /**
                 * Creates a plain object from a WorkloadIdentityPool message. Also converts values to other types if specified.
                 * @param message WorkloadIdentityPool
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v1beta.WorkloadIdentityPool, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this WorkloadIdentityPool to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for WorkloadIdentityPool
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace WorkloadIdentityPool {

                /** State enum. */
                enum State {
                    STATE_UNSPECIFIED = 0,
                    ACTIVE = 1,
                    DELETED = 2
                }
            }

            /** Properties of a WorkloadIdentityPoolProvider. */
            interface IWorkloadIdentityPoolProvider {

                /** WorkloadIdentityPoolProvider name */
                name?: (string|null);

                /** WorkloadIdentityPoolProvider displayName */
                displayName?: (string|null);

                /** WorkloadIdentityPoolProvider description */
                description?: (string|null);

                /** WorkloadIdentityPoolProvider state */
                state?: (google.iam.v1beta.WorkloadIdentityPoolProvider.State|keyof typeof google.iam.v1beta.WorkloadIdentityPoolProvider.State|null);

                /** WorkloadIdentityPoolProvider disabled */
                disabled?: (boolean|null);

                /** WorkloadIdentityPoolProvider attributeMapping */
                attributeMapping?: ({ [k: string]: string }|null);

                /** WorkloadIdentityPoolProvider attributeCondition */
                attributeCondition?: (string|null);

                /** WorkloadIdentityPoolProvider aws */
                aws?: (google.iam.v1beta.WorkloadIdentityPoolProvider.IAws|null);

                /** WorkloadIdentityPoolProvider oidc */
                oidc?: (google.iam.v1beta.WorkloadIdentityPoolProvider.IOidc|null);
            }

            /** Represents a WorkloadIdentityPoolProvider. */
            class WorkloadIdentityPoolProvider implements IWorkloadIdentityPoolProvider {

                /**
                 * Constructs a new WorkloadIdentityPoolProvider.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v1beta.IWorkloadIdentityPoolProvider);

                /** WorkloadIdentityPoolProvider name. */
                public name: string;

                /** WorkloadIdentityPoolProvider displayName. */
                public displayName: string;

                /** WorkloadIdentityPoolProvider description. */
                public description: string;

                /** WorkloadIdentityPoolProvider state. */
                public state: (google.iam.v1beta.WorkloadIdentityPoolProvider.State|keyof typeof google.iam.v1beta.WorkloadIdentityPoolProvider.State);

                /** WorkloadIdentityPoolProvider disabled. */
                public disabled: boolean;

                /** WorkloadIdentityPoolProvider attributeMapping. */
                public attributeMapping: { [k: string]: string };

                /** WorkloadIdentityPoolProvider attributeCondition. */
                public attributeCondition: string;

                /** WorkloadIdentityPoolProvider aws. */
                public aws?: (google.iam.v1beta.WorkloadIdentityPoolProvider.IAws|null);

                /** WorkloadIdentityPoolProvider oidc. */
                public oidc?: (google.iam.v1beta.WorkloadIdentityPoolProvider.IOidc|null);

                /** WorkloadIdentityPoolProvider providerConfig. */
                public providerConfig?: ("aws"|"oidc");

                /**
                 * Creates a new WorkloadIdentityPoolProvider instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns WorkloadIdentityPoolProvider instance
                 */
                public static create(properties?: google.iam.v1beta.IWorkloadIdentityPoolProvider): google.iam.v1beta.WorkloadIdentityPoolProvider;

                /**
                 * Encodes the specified WorkloadIdentityPoolProvider message. Does not implicitly {@link google.iam.v1beta.WorkloadIdentityPoolProvider.verify|verify} messages.
                 * @param message WorkloadIdentityPoolProvider message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v1beta.IWorkloadIdentityPoolProvider, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified WorkloadIdentityPoolProvider message, length delimited. Does not implicitly {@link google.iam.v1beta.WorkloadIdentityPoolProvider.verify|verify} messages.
                 * @param message WorkloadIdentityPoolProvider message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v1beta.IWorkloadIdentityPoolProvider, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a WorkloadIdentityPoolProvider message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns WorkloadIdentityPoolProvider
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v1beta.WorkloadIdentityPoolProvider;

                /**
                 * Decodes a WorkloadIdentityPoolProvider message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns WorkloadIdentityPoolProvider
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v1beta.WorkloadIdentityPoolProvider;

                /**
                 * Verifies a WorkloadIdentityPoolProvider message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a WorkloadIdentityPoolProvider message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns WorkloadIdentityPoolProvider
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v1beta.WorkloadIdentityPoolProvider;

                /**
                 * Creates a plain object from a WorkloadIdentityPoolProvider message. Also converts values to other types if specified.
                 * @param message WorkloadIdentityPoolProvider
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v1beta.WorkloadIdentityPoolProvider, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this WorkloadIdentityPoolProvider to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for WorkloadIdentityPoolProvider
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace WorkloadIdentityPoolProvider {

                /** Properties of an Aws. */
                interface IAws {

                    /** Aws accountId */
                    accountId?: (string|null);
                }

                /** Represents an Aws. */
                class Aws implements IAws {

                    /**
                     * Constructs a new Aws.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.iam.v1beta.WorkloadIdentityPoolProvider.IAws);

                    /** Aws accountId. */
                    public accountId: string;

                    /**
                     * Creates a new Aws instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Aws instance
                     */
                    public static create(properties?: google.iam.v1beta.WorkloadIdentityPoolProvider.IAws): google.iam.v1beta.WorkloadIdentityPoolProvider.Aws;

                    /**
                     * Encodes the specified Aws message. Does not implicitly {@link google.iam.v1beta.WorkloadIdentityPoolProvider.Aws.verify|verify} messages.
                     * @param message Aws message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.iam.v1beta.WorkloadIdentityPoolProvider.IAws, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Aws message, length delimited. Does not implicitly {@link google.iam.v1beta.WorkloadIdentityPoolProvider.Aws.verify|verify} messages.
                     * @param message Aws message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.iam.v1beta.WorkloadIdentityPoolProvider.IAws, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an Aws message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Aws
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v1beta.WorkloadIdentityPoolProvider.Aws;

                    /**
                     * Decodes an Aws message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Aws
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v1beta.WorkloadIdentityPoolProvider.Aws;

                    /**
                     * Verifies an Aws message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an Aws message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Aws
                     */
                    public static fromObject(object: { [k: string]: any }): google.iam.v1beta.WorkloadIdentityPoolProvider.Aws;

                    /**
                     * Creates a plain object from an Aws message. Also converts values to other types if specified.
                     * @param message Aws
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.iam.v1beta.WorkloadIdentityPoolProvider.Aws, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Aws to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Aws
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an Oidc. */
                interface IOidc {

                    /** Oidc issuerUri */
                    issuerUri?: (string|null);

                    /** Oidc allowedAudiences */
                    allowedAudiences?: (string[]|null);
                }

                /** Represents an Oidc. */
                class Oidc implements IOidc {

                    /**
                     * Constructs a new Oidc.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.iam.v1beta.WorkloadIdentityPoolProvider.IOidc);

                    /** Oidc issuerUri. */
                    public issuerUri: string;

                    /** Oidc allowedAudiences. */
                    public allowedAudiences: string[];

                    /**
                     * Creates a new Oidc instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Oidc instance
                     */
                    public static create(properties?: google.iam.v1beta.WorkloadIdentityPoolProvider.IOidc): google.iam.v1beta.WorkloadIdentityPoolProvider.Oidc;

                    /**
                     * Encodes the specified Oidc message. Does not implicitly {@link google.iam.v1beta.WorkloadIdentityPoolProvider.Oidc.verify|verify} messages.
                     * @param message Oidc message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.iam.v1beta.WorkloadIdentityPoolProvider.IOidc, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Oidc message, length delimited. Does not implicitly {@link google.iam.v1beta.WorkloadIdentityPoolProvider.Oidc.verify|verify} messages.
                     * @param message Oidc message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.iam.v1beta.WorkloadIdentityPoolProvider.IOidc, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an Oidc message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Oidc
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v1beta.WorkloadIdentityPoolProvider.Oidc;

                    /**
                     * Decodes an Oidc message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Oidc
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v1beta.WorkloadIdentityPoolProvider.Oidc;

                    /**
                     * Verifies an Oidc message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an Oidc message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Oidc
                     */
                    public static fromObject(object: { [k: string]: any }): google.iam.v1beta.WorkloadIdentityPoolProvider.Oidc;

                    /**
                     * Creates a plain object from an Oidc message. Also converts values to other types if specified.
                     * @param message Oidc
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.iam.v1beta.WorkloadIdentityPoolProvider.Oidc, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Oidc to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Oidc
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** State enum. */
                enum State {
                    STATE_UNSPECIFIED = 0,
                    ACTIVE = 1,
                    DELETED = 2
                }
            }

            /** Properties of a ListWorkloadIdentityPoolsRequest. */
            interface IListWorkloadIdentityPoolsRequest {

                /** ListWorkloadIdentityPoolsRequest parent */
                parent?: (string|null);

                /** ListWorkloadIdentityPoolsRequest pageSize */
                pageSize?: (number|null);

                /** ListWorkloadIdentityPoolsRequest pageToken */
                pageToken?: (string|null);

                /** ListWorkloadIdentityPoolsRequest showDeleted */
                showDeleted?: (boolean|null);
            }

            /** Represents a ListWorkloadIdentityPoolsRequest. */
            class ListWorkloadIdentityPoolsRequest implements IListWorkloadIdentityPoolsRequest {

                /**
                 * Constructs a new ListWorkloadIdentityPoolsRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v1beta.IListWorkloadIdentityPoolsRequest);

                /** ListWorkloadIdentityPoolsRequest parent. */
                public parent: string;

                /** ListWorkloadIdentityPoolsRequest pageSize. */
                public pageSize: number;

                /** ListWorkloadIdentityPoolsRequest pageToken. */
                public pageToken: string;

                /** ListWorkloadIdentityPoolsRequest showDeleted. */
                public showDeleted: boolean;

                /**
                 * Creates a new ListWorkloadIdentityPoolsRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ListWorkloadIdentityPoolsRequest instance
                 */
                public static create(properties?: google.iam.v1beta.IListWorkloadIdentityPoolsRequest): google.iam.v1beta.ListWorkloadIdentityPoolsRequest;

                /**
                 * Encodes the specified ListWorkloadIdentityPoolsRequest message. Does not implicitly {@link google.iam.v1beta.ListWorkloadIdentityPoolsRequest.verify|verify} messages.
                 * @param message ListWorkloadIdentityPoolsRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v1beta.IListWorkloadIdentityPoolsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ListWorkloadIdentityPoolsRequest message, length delimited. Does not implicitly {@link google.iam.v1beta.ListWorkloadIdentityPoolsRequest.verify|verify} messages.
                 * @param message ListWorkloadIdentityPoolsRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v1beta.IListWorkloadIdentityPoolsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ListWorkloadIdentityPoolsRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ListWorkloadIdentityPoolsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v1beta.ListWorkloadIdentityPoolsRequest;

                /**
                 * Decodes a ListWorkloadIdentityPoolsRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ListWorkloadIdentityPoolsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v1beta.ListWorkloadIdentityPoolsRequest;

                /**
                 * Verifies a ListWorkloadIdentityPoolsRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ListWorkloadIdentityPoolsRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ListWorkloadIdentityPoolsRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v1beta.ListWorkloadIdentityPoolsRequest;

                /**
                 * Creates a plain object from a ListWorkloadIdentityPoolsRequest message. Also converts values to other types if specified.
                 * @param message ListWorkloadIdentityPoolsRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v1beta.ListWorkloadIdentityPoolsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ListWorkloadIdentityPoolsRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ListWorkloadIdentityPoolsRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a ListWorkloadIdentityPoolsResponse. */
            interface IListWorkloadIdentityPoolsResponse {

                /** ListWorkloadIdentityPoolsResponse workloadIdentityPools */
                workloadIdentityPools?: (google.iam.v1beta.IWorkloadIdentityPool[]|null);

                /** ListWorkloadIdentityPoolsResponse nextPageToken */
                nextPageToken?: (string|null);
            }

            /** Represents a ListWorkloadIdentityPoolsResponse. */
            class ListWorkloadIdentityPoolsResponse implements IListWorkloadIdentityPoolsResponse {

                /**
                 * Constructs a new ListWorkloadIdentityPoolsResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v1beta.IListWorkloadIdentityPoolsResponse);

                /** ListWorkloadIdentityPoolsResponse workloadIdentityPools. */
                public workloadIdentityPools: google.iam.v1beta.IWorkloadIdentityPool[];

                /** ListWorkloadIdentityPoolsResponse nextPageToken. */
                public nextPageToken: string;

                /**
                 * Creates a new ListWorkloadIdentityPoolsResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ListWorkloadIdentityPoolsResponse instance
                 */
                public static create(properties?: google.iam.v1beta.IListWorkloadIdentityPoolsResponse): google.iam.v1beta.ListWorkloadIdentityPoolsResponse;

                /**
                 * Encodes the specified ListWorkloadIdentityPoolsResponse message. Does not implicitly {@link google.iam.v1beta.ListWorkloadIdentityPoolsResponse.verify|verify} messages.
                 * @param message ListWorkloadIdentityPoolsResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v1beta.IListWorkloadIdentityPoolsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ListWorkloadIdentityPoolsResponse message, length delimited. Does not implicitly {@link google.iam.v1beta.ListWorkloadIdentityPoolsResponse.verify|verify} messages.
                 * @param message ListWorkloadIdentityPoolsResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v1beta.IListWorkloadIdentityPoolsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ListWorkloadIdentityPoolsResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ListWorkloadIdentityPoolsResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v1beta.ListWorkloadIdentityPoolsResponse;

                /**
                 * Decodes a ListWorkloadIdentityPoolsResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ListWorkloadIdentityPoolsResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v1beta.ListWorkloadIdentityPoolsResponse;

                /**
                 * Verifies a ListWorkloadIdentityPoolsResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ListWorkloadIdentityPoolsResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ListWorkloadIdentityPoolsResponse
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v1beta.ListWorkloadIdentityPoolsResponse;

                /**
                 * Creates a plain object from a ListWorkloadIdentityPoolsResponse message. Also converts values to other types if specified.
                 * @param message ListWorkloadIdentityPoolsResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v1beta.ListWorkloadIdentityPoolsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ListWorkloadIdentityPoolsResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ListWorkloadIdentityPoolsResponse
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a GetWorkloadIdentityPoolRequest. */
            interface IGetWorkloadIdentityPoolRequest {

                /** GetWorkloadIdentityPoolRequest name */
                name?: (string|null);
            }

            /** Represents a GetWorkloadIdentityPoolRequest. */
            class GetWorkloadIdentityPoolRequest implements IGetWorkloadIdentityPoolRequest {

                /**
                 * Constructs a new GetWorkloadIdentityPoolRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v1beta.IGetWorkloadIdentityPoolRequest);

                /** GetWorkloadIdentityPoolRequest name. */
                public name: string;

                /**
                 * Creates a new GetWorkloadIdentityPoolRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GetWorkloadIdentityPoolRequest instance
                 */
                public static create(properties?: google.iam.v1beta.IGetWorkloadIdentityPoolRequest): google.iam.v1beta.GetWorkloadIdentityPoolRequest;

                /**
                 * Encodes the specified GetWorkloadIdentityPoolRequest message. Does not implicitly {@link google.iam.v1beta.GetWorkloadIdentityPoolRequest.verify|verify} messages.
                 * @param message GetWorkloadIdentityPoolRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v1beta.IGetWorkloadIdentityPoolRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GetWorkloadIdentityPoolRequest message, length delimited. Does not implicitly {@link google.iam.v1beta.GetWorkloadIdentityPoolRequest.verify|verify} messages.
                 * @param message GetWorkloadIdentityPoolRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v1beta.IGetWorkloadIdentityPoolRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GetWorkloadIdentityPoolRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GetWorkloadIdentityPoolRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v1beta.GetWorkloadIdentityPoolRequest;

                /**
                 * Decodes a GetWorkloadIdentityPoolRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GetWorkloadIdentityPoolRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v1beta.GetWorkloadIdentityPoolRequest;

                /**
                 * Verifies a GetWorkloadIdentityPoolRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GetWorkloadIdentityPoolRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GetWorkloadIdentityPoolRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v1beta.GetWorkloadIdentityPoolRequest;

                /**
                 * Creates a plain object from a GetWorkloadIdentityPoolRequest message. Also converts values to other types if specified.
                 * @param message GetWorkloadIdentityPoolRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v1beta.GetWorkloadIdentityPoolRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GetWorkloadIdentityPoolRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for GetWorkloadIdentityPoolRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a CreateWorkloadIdentityPoolRequest. */
            interface ICreateWorkloadIdentityPoolRequest {

                /** CreateWorkloadIdentityPoolRequest parent */
                parent?: (string|null);

                /** CreateWorkloadIdentityPoolRequest workloadIdentityPool */
                workloadIdentityPool?: (google.iam.v1beta.IWorkloadIdentityPool|null);

                /** CreateWorkloadIdentityPoolRequest workloadIdentityPoolId */
                workloadIdentityPoolId?: (string|null);
            }

            /** Represents a CreateWorkloadIdentityPoolRequest. */
            class CreateWorkloadIdentityPoolRequest implements ICreateWorkloadIdentityPoolRequest {

                /**
                 * Constructs a new CreateWorkloadIdentityPoolRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v1beta.ICreateWorkloadIdentityPoolRequest);

                /** CreateWorkloadIdentityPoolRequest parent. */
                public parent: string;

                /** CreateWorkloadIdentityPoolRequest workloadIdentityPool. */
                public workloadIdentityPool?: (google.iam.v1beta.IWorkloadIdentityPool|null);

                /** CreateWorkloadIdentityPoolRequest workloadIdentityPoolId. */
                public workloadIdentityPoolId: string;

                /**
                 * Creates a new CreateWorkloadIdentityPoolRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CreateWorkloadIdentityPoolRequest instance
                 */
                public static create(properties?: google.iam.v1beta.ICreateWorkloadIdentityPoolRequest): google.iam.v1beta.CreateWorkloadIdentityPoolRequest;

                /**
                 * Encodes the specified CreateWorkloadIdentityPoolRequest message. Does not implicitly {@link google.iam.v1beta.CreateWorkloadIdentityPoolRequest.verify|verify} messages.
                 * @param message CreateWorkloadIdentityPoolRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v1beta.ICreateWorkloadIdentityPoolRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CreateWorkloadIdentityPoolRequest message, length delimited. Does not implicitly {@link google.iam.v1beta.CreateWorkloadIdentityPoolRequest.verify|verify} messages.
                 * @param message CreateWorkloadIdentityPoolRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v1beta.ICreateWorkloadIdentityPoolRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CreateWorkloadIdentityPoolRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CreateWorkloadIdentityPoolRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v1beta.CreateWorkloadIdentityPoolRequest;

                /**
                 * Decodes a CreateWorkloadIdentityPoolRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CreateWorkloadIdentityPoolRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v1beta.CreateWorkloadIdentityPoolRequest;

                /**
                 * Verifies a CreateWorkloadIdentityPoolRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CreateWorkloadIdentityPoolRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CreateWorkloadIdentityPoolRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v1beta.CreateWorkloadIdentityPoolRequest;

                /**
                 * Creates a plain object from a CreateWorkloadIdentityPoolRequest message. Also converts values to other types if specified.
                 * @param message CreateWorkloadIdentityPoolRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v1beta.CreateWorkloadIdentityPoolRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CreateWorkloadIdentityPoolRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for CreateWorkloadIdentityPoolRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of an UpdateWorkloadIdentityPoolRequest. */
            interface IUpdateWorkloadIdentityPoolRequest {

                /** UpdateWorkloadIdentityPoolRequest workloadIdentityPool */
                workloadIdentityPool?: (google.iam.v1beta.IWorkloadIdentityPool|null);

                /** UpdateWorkloadIdentityPoolRequest updateMask */
                updateMask?: (google.protobuf.IFieldMask|null);
            }

            /** Represents an UpdateWorkloadIdentityPoolRequest. */
            class UpdateWorkloadIdentityPoolRequest implements IUpdateWorkloadIdentityPoolRequest {

                /**
                 * Constructs a new UpdateWorkloadIdentityPoolRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v1beta.IUpdateWorkloadIdentityPoolRequest);

                /** UpdateWorkloadIdentityPoolRequest workloadIdentityPool. */
                public workloadIdentityPool?: (google.iam.v1beta.IWorkloadIdentityPool|null);

                /** UpdateWorkloadIdentityPoolRequest updateMask. */
                public updateMask?: (google.protobuf.IFieldMask|null);

                /**
                 * Creates a new UpdateWorkloadIdentityPoolRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns UpdateWorkloadIdentityPoolRequest instance
                 */
                public static create(properties?: google.iam.v1beta.IUpdateWorkloadIdentityPoolRequest): google.iam.v1beta.UpdateWorkloadIdentityPoolRequest;

                /**
                 * Encodes the specified UpdateWorkloadIdentityPoolRequest message. Does not implicitly {@link google.iam.v1beta.UpdateWorkloadIdentityPoolRequest.verify|verify} messages.
                 * @param message UpdateWorkloadIdentityPoolRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v1beta.IUpdateWorkloadIdentityPoolRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified UpdateWorkloadIdentityPoolRequest message, length delimited. Does not implicitly {@link google.iam.v1beta.UpdateWorkloadIdentityPoolRequest.verify|verify} messages.
                 * @param message UpdateWorkloadIdentityPoolRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v1beta.IUpdateWorkloadIdentityPoolRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an UpdateWorkloadIdentityPoolRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns UpdateWorkloadIdentityPoolRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v1beta.UpdateWorkloadIdentityPoolRequest;

                /**
                 * Decodes an UpdateWorkloadIdentityPoolRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns UpdateWorkloadIdentityPoolRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v1beta.UpdateWorkloadIdentityPoolRequest;

                /**
                 * Verifies an UpdateWorkloadIdentityPoolRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an UpdateWorkloadIdentityPoolRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns UpdateWorkloadIdentityPoolRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v1beta.UpdateWorkloadIdentityPoolRequest;

                /**
                 * Creates a plain object from an UpdateWorkloadIdentityPoolRequest message. Also converts values to other types if specified.
                 * @param message UpdateWorkloadIdentityPoolRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v1beta.UpdateWorkloadIdentityPoolRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this UpdateWorkloadIdentityPoolRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for UpdateWorkloadIdentityPoolRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a DeleteWorkloadIdentityPoolRequest. */
            interface IDeleteWorkloadIdentityPoolRequest {

                /** DeleteWorkloadIdentityPoolRequest name */
                name?: (string|null);
            }

            /** Represents a DeleteWorkloadIdentityPoolRequest. */
            class DeleteWorkloadIdentityPoolRequest implements IDeleteWorkloadIdentityPoolRequest {

                /**
                 * Constructs a new DeleteWorkloadIdentityPoolRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v1beta.IDeleteWorkloadIdentityPoolRequest);

                /** DeleteWorkloadIdentityPoolRequest name. */
                public name: string;

                /**
                 * Creates a new DeleteWorkloadIdentityPoolRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns DeleteWorkloadIdentityPoolRequest instance
                 */
                public static create(properties?: google.iam.v1beta.IDeleteWorkloadIdentityPoolRequest): google.iam.v1beta.DeleteWorkloadIdentityPoolRequest;

                /**
                 * Encodes the specified DeleteWorkloadIdentityPoolRequest message. Does not implicitly {@link google.iam.v1beta.DeleteWorkloadIdentityPoolRequest.verify|verify} messages.
                 * @param message DeleteWorkloadIdentityPoolRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v1beta.IDeleteWorkloadIdentityPoolRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified DeleteWorkloadIdentityPoolRequest message, length delimited. Does not implicitly {@link google.iam.v1beta.DeleteWorkloadIdentityPoolRequest.verify|verify} messages.
                 * @param message DeleteWorkloadIdentityPoolRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v1beta.IDeleteWorkloadIdentityPoolRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DeleteWorkloadIdentityPoolRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns DeleteWorkloadIdentityPoolRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v1beta.DeleteWorkloadIdentityPoolRequest;

                /**
                 * Decodes a DeleteWorkloadIdentityPoolRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns DeleteWorkloadIdentityPoolRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v1beta.DeleteWorkloadIdentityPoolRequest;

                /**
                 * Verifies a DeleteWorkloadIdentityPoolRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a DeleteWorkloadIdentityPoolRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns DeleteWorkloadIdentityPoolRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v1beta.DeleteWorkloadIdentityPoolRequest;

                /**
                 * Creates a plain object from a DeleteWorkloadIdentityPoolRequest message. Also converts values to other types if specified.
                 * @param message DeleteWorkloadIdentityPoolRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v1beta.DeleteWorkloadIdentityPoolRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this DeleteWorkloadIdentityPoolRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for DeleteWorkloadIdentityPoolRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of an UndeleteWorkloadIdentityPoolRequest. */
            interface IUndeleteWorkloadIdentityPoolRequest {

                /** UndeleteWorkloadIdentityPoolRequest name */
                name?: (string|null);
            }

            /** Represents an UndeleteWorkloadIdentityPoolRequest. */
            class UndeleteWorkloadIdentityPoolRequest implements IUndeleteWorkloadIdentityPoolRequest {

                /**
                 * Constructs a new UndeleteWorkloadIdentityPoolRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v1beta.IUndeleteWorkloadIdentityPoolRequest);

                /** UndeleteWorkloadIdentityPoolRequest name. */
                public name: string;

                /**
                 * Creates a new UndeleteWorkloadIdentityPoolRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns UndeleteWorkloadIdentityPoolRequest instance
                 */
                public static create(properties?: google.iam.v1beta.IUndeleteWorkloadIdentityPoolRequest): google.iam.v1beta.UndeleteWorkloadIdentityPoolRequest;

                /**
                 * Encodes the specified UndeleteWorkloadIdentityPoolRequest message. Does not implicitly {@link google.iam.v1beta.UndeleteWorkloadIdentityPoolRequest.verify|verify} messages.
                 * @param message UndeleteWorkloadIdentityPoolRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v1beta.IUndeleteWorkloadIdentityPoolRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified UndeleteWorkloadIdentityPoolRequest message, length delimited. Does not implicitly {@link google.iam.v1beta.UndeleteWorkloadIdentityPoolRequest.verify|verify} messages.
                 * @param message UndeleteWorkloadIdentityPoolRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v1beta.IUndeleteWorkloadIdentityPoolRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an UndeleteWorkloadIdentityPoolRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns UndeleteWorkloadIdentityPoolRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v1beta.UndeleteWorkloadIdentityPoolRequest;

                /**
                 * Decodes an UndeleteWorkloadIdentityPoolRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns UndeleteWorkloadIdentityPoolRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v1beta.UndeleteWorkloadIdentityPoolRequest;

                /**
                 * Verifies an UndeleteWorkloadIdentityPoolRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an UndeleteWorkloadIdentityPoolRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns UndeleteWorkloadIdentityPoolRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v1beta.UndeleteWorkloadIdentityPoolRequest;

                /**
                 * Creates a plain object from an UndeleteWorkloadIdentityPoolRequest message. Also converts values to other types if specified.
                 * @param message UndeleteWorkloadIdentityPoolRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v1beta.UndeleteWorkloadIdentityPoolRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this UndeleteWorkloadIdentityPoolRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for UndeleteWorkloadIdentityPoolRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a ListWorkloadIdentityPoolProvidersRequest. */
            interface IListWorkloadIdentityPoolProvidersRequest {

                /** ListWorkloadIdentityPoolProvidersRequest parent */
                parent?: (string|null);

                /** ListWorkloadIdentityPoolProvidersRequest pageSize */
                pageSize?: (number|null);

                /** ListWorkloadIdentityPoolProvidersRequest pageToken */
                pageToken?: (string|null);

                /** ListWorkloadIdentityPoolProvidersRequest showDeleted */
                showDeleted?: (boolean|null);
            }

            /** Represents a ListWorkloadIdentityPoolProvidersRequest. */
            class ListWorkloadIdentityPoolProvidersRequest implements IListWorkloadIdentityPoolProvidersRequest {

                /**
                 * Constructs a new ListWorkloadIdentityPoolProvidersRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v1beta.IListWorkloadIdentityPoolProvidersRequest);

                /** ListWorkloadIdentityPoolProvidersRequest parent. */
                public parent: string;

                /** ListWorkloadIdentityPoolProvidersRequest pageSize. */
                public pageSize: number;

                /** ListWorkloadIdentityPoolProvidersRequest pageToken. */
                public pageToken: string;

                /** ListWorkloadIdentityPoolProvidersRequest showDeleted. */
                public showDeleted: boolean;

                /**
                 * Creates a new ListWorkloadIdentityPoolProvidersRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ListWorkloadIdentityPoolProvidersRequest instance
                 */
                public static create(properties?: google.iam.v1beta.IListWorkloadIdentityPoolProvidersRequest): google.iam.v1beta.ListWorkloadIdentityPoolProvidersRequest;

                /**
                 * Encodes the specified ListWorkloadIdentityPoolProvidersRequest message. Does not implicitly {@link google.iam.v1beta.ListWorkloadIdentityPoolProvidersRequest.verify|verify} messages.
                 * @param message ListWorkloadIdentityPoolProvidersRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v1beta.IListWorkloadIdentityPoolProvidersRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ListWorkloadIdentityPoolProvidersRequest message, length delimited. Does not implicitly {@link google.iam.v1beta.ListWorkloadIdentityPoolProvidersRequest.verify|verify} messages.
                 * @param message ListWorkloadIdentityPoolProvidersRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v1beta.IListWorkloadIdentityPoolProvidersRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ListWorkloadIdentityPoolProvidersRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ListWorkloadIdentityPoolProvidersRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v1beta.ListWorkloadIdentityPoolProvidersRequest;

                /**
                 * Decodes a ListWorkloadIdentityPoolProvidersRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ListWorkloadIdentityPoolProvidersRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v1beta.ListWorkloadIdentityPoolProvidersRequest;

                /**
                 * Verifies a ListWorkloadIdentityPoolProvidersRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ListWorkloadIdentityPoolProvidersRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ListWorkloadIdentityPoolProvidersRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v1beta.ListWorkloadIdentityPoolProvidersRequest;

                /**
                 * Creates a plain object from a ListWorkloadIdentityPoolProvidersRequest message. Also converts values to other types if specified.
                 * @param message ListWorkloadIdentityPoolProvidersRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v1beta.ListWorkloadIdentityPoolProvidersRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ListWorkloadIdentityPoolProvidersRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ListWorkloadIdentityPoolProvidersRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a ListWorkloadIdentityPoolProvidersResponse. */
            interface IListWorkloadIdentityPoolProvidersResponse {

                /** ListWorkloadIdentityPoolProvidersResponse workloadIdentityPoolProviders */
                workloadIdentityPoolProviders?: (google.iam.v1beta.IWorkloadIdentityPoolProvider[]|null);

                /** ListWorkloadIdentityPoolProvidersResponse nextPageToken */
                nextPageToken?: (string|null);
            }

            /** Represents a ListWorkloadIdentityPoolProvidersResponse. */
            class ListWorkloadIdentityPoolProvidersResponse implements IListWorkloadIdentityPoolProvidersResponse {

                /**
                 * Constructs a new ListWorkloadIdentityPoolProvidersResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v1beta.IListWorkloadIdentityPoolProvidersResponse);

                /** ListWorkloadIdentityPoolProvidersResponse workloadIdentityPoolProviders. */
                public workloadIdentityPoolProviders: google.iam.v1beta.IWorkloadIdentityPoolProvider[];

                /** ListWorkloadIdentityPoolProvidersResponse nextPageToken. */
                public nextPageToken: string;

                /**
                 * Creates a new ListWorkloadIdentityPoolProvidersResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ListWorkloadIdentityPoolProvidersResponse instance
                 */
                public static create(properties?: google.iam.v1beta.IListWorkloadIdentityPoolProvidersResponse): google.iam.v1beta.ListWorkloadIdentityPoolProvidersResponse;

                /**
                 * Encodes the specified ListWorkloadIdentityPoolProvidersResponse message. Does not implicitly {@link google.iam.v1beta.ListWorkloadIdentityPoolProvidersResponse.verify|verify} messages.
                 * @param message ListWorkloadIdentityPoolProvidersResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v1beta.IListWorkloadIdentityPoolProvidersResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ListWorkloadIdentityPoolProvidersResponse message, length delimited. Does not implicitly {@link google.iam.v1beta.ListWorkloadIdentityPoolProvidersResponse.verify|verify} messages.
                 * @param message ListWorkloadIdentityPoolProvidersResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v1beta.IListWorkloadIdentityPoolProvidersResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ListWorkloadIdentityPoolProvidersResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ListWorkloadIdentityPoolProvidersResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v1beta.ListWorkloadIdentityPoolProvidersResponse;

                /**
                 * Decodes a ListWorkloadIdentityPoolProvidersResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ListWorkloadIdentityPoolProvidersResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v1beta.ListWorkloadIdentityPoolProvidersResponse;

                /**
                 * Verifies a ListWorkloadIdentityPoolProvidersResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ListWorkloadIdentityPoolProvidersResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ListWorkloadIdentityPoolProvidersResponse
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v1beta.ListWorkloadIdentityPoolProvidersResponse;

                /**
                 * Creates a plain object from a ListWorkloadIdentityPoolProvidersResponse message. Also converts values to other types if specified.
                 * @param message ListWorkloadIdentityPoolProvidersResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v1beta.ListWorkloadIdentityPoolProvidersResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ListWorkloadIdentityPoolProvidersResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ListWorkloadIdentityPoolProvidersResponse
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a GetWorkloadIdentityPoolProviderRequest. */
            interface IGetWorkloadIdentityPoolProviderRequest {

                /** GetWorkloadIdentityPoolProviderRequest name */
                name?: (string|null);
            }

            /** Represents a GetWorkloadIdentityPoolProviderRequest. */
            class GetWorkloadIdentityPoolProviderRequest implements IGetWorkloadIdentityPoolProviderRequest {

                /**
                 * Constructs a new GetWorkloadIdentityPoolProviderRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v1beta.IGetWorkloadIdentityPoolProviderRequest);

                /** GetWorkloadIdentityPoolProviderRequest name. */
                public name: string;

                /**
                 * Creates a new GetWorkloadIdentityPoolProviderRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GetWorkloadIdentityPoolProviderRequest instance
                 */
                public static create(properties?: google.iam.v1beta.IGetWorkloadIdentityPoolProviderRequest): google.iam.v1beta.GetWorkloadIdentityPoolProviderRequest;

                /**
                 * Encodes the specified GetWorkloadIdentityPoolProviderRequest message. Does not implicitly {@link google.iam.v1beta.GetWorkloadIdentityPoolProviderRequest.verify|verify} messages.
                 * @param message GetWorkloadIdentityPoolProviderRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v1beta.IGetWorkloadIdentityPoolProviderRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GetWorkloadIdentityPoolProviderRequest message, length delimited. Does not implicitly {@link google.iam.v1beta.GetWorkloadIdentityPoolProviderRequest.verify|verify} messages.
                 * @param message GetWorkloadIdentityPoolProviderRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v1beta.IGetWorkloadIdentityPoolProviderRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GetWorkloadIdentityPoolProviderRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GetWorkloadIdentityPoolProviderRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v1beta.GetWorkloadIdentityPoolProviderRequest;

                /**
                 * Decodes a GetWorkloadIdentityPoolProviderRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GetWorkloadIdentityPoolProviderRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v1beta.GetWorkloadIdentityPoolProviderRequest;

                /**
                 * Verifies a GetWorkloadIdentityPoolProviderRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GetWorkloadIdentityPoolProviderRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GetWorkloadIdentityPoolProviderRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v1beta.GetWorkloadIdentityPoolProviderRequest;

                /**
                 * Creates a plain object from a GetWorkloadIdentityPoolProviderRequest message. Also converts values to other types if specified.
                 * @param message GetWorkloadIdentityPoolProviderRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v1beta.GetWorkloadIdentityPoolProviderRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GetWorkloadIdentityPoolProviderRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for GetWorkloadIdentityPoolProviderRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a CreateWorkloadIdentityPoolProviderRequest. */
            interface ICreateWorkloadIdentityPoolProviderRequest {

                /** CreateWorkloadIdentityPoolProviderRequest parent */
                parent?: (string|null);

                /** CreateWorkloadIdentityPoolProviderRequest workloadIdentityPoolProvider */
                workloadIdentityPoolProvider?: (google.iam.v1beta.IWorkloadIdentityPoolProvider|null);

                /** CreateWorkloadIdentityPoolProviderRequest workloadIdentityPoolProviderId */
                workloadIdentityPoolProviderId?: (string|null);
            }

            /** Represents a CreateWorkloadIdentityPoolProviderRequest. */
            class CreateWorkloadIdentityPoolProviderRequest implements ICreateWorkloadIdentityPoolProviderRequest {

                /**
                 * Constructs a new CreateWorkloadIdentityPoolProviderRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v1beta.ICreateWorkloadIdentityPoolProviderRequest);

                /** CreateWorkloadIdentityPoolProviderRequest parent. */
                public parent: string;

                /** CreateWorkloadIdentityPoolProviderRequest workloadIdentityPoolProvider. */
                public workloadIdentityPoolProvider?: (google.iam.v1beta.IWorkloadIdentityPoolProvider|null);

                /** CreateWorkloadIdentityPoolProviderRequest workloadIdentityPoolProviderId. */
                public workloadIdentityPoolProviderId: string;

                /**
                 * Creates a new CreateWorkloadIdentityPoolProviderRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CreateWorkloadIdentityPoolProviderRequest instance
                 */
                public static create(properties?: google.iam.v1beta.ICreateWorkloadIdentityPoolProviderRequest): google.iam.v1beta.CreateWorkloadIdentityPoolProviderRequest;

                /**
                 * Encodes the specified CreateWorkloadIdentityPoolProviderRequest message. Does not implicitly {@link google.iam.v1beta.CreateWorkloadIdentityPoolProviderRequest.verify|verify} messages.
                 * @param message CreateWorkloadIdentityPoolProviderRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v1beta.ICreateWorkloadIdentityPoolProviderRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CreateWorkloadIdentityPoolProviderRequest message, length delimited. Does not implicitly {@link google.iam.v1beta.CreateWorkloadIdentityPoolProviderRequest.verify|verify} messages.
                 * @param message CreateWorkloadIdentityPoolProviderRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v1beta.ICreateWorkloadIdentityPoolProviderRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CreateWorkloadIdentityPoolProviderRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CreateWorkloadIdentityPoolProviderRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v1beta.CreateWorkloadIdentityPoolProviderRequest;

                /**
                 * Decodes a CreateWorkloadIdentityPoolProviderRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CreateWorkloadIdentityPoolProviderRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v1beta.CreateWorkloadIdentityPoolProviderRequest;

                /**
                 * Verifies a CreateWorkloadIdentityPoolProviderRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CreateWorkloadIdentityPoolProviderRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CreateWorkloadIdentityPoolProviderRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v1beta.CreateWorkloadIdentityPoolProviderRequest;

                /**
                 * Creates a plain object from a CreateWorkloadIdentityPoolProviderRequest message. Also converts values to other types if specified.
                 * @param message CreateWorkloadIdentityPoolProviderRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v1beta.CreateWorkloadIdentityPoolProviderRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CreateWorkloadIdentityPoolProviderRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for CreateWorkloadIdentityPoolProviderRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of an UpdateWorkloadIdentityPoolProviderRequest. */
            interface IUpdateWorkloadIdentityPoolProviderRequest {

                /** UpdateWorkloadIdentityPoolProviderRequest workloadIdentityPoolProvider */
                workloadIdentityPoolProvider?: (google.iam.v1beta.IWorkloadIdentityPoolProvider|null);

                /** UpdateWorkloadIdentityPoolProviderRequest updateMask */
                updateMask?: (google.protobuf.IFieldMask|null);
            }

            /** Represents an UpdateWorkloadIdentityPoolProviderRequest. */
            class UpdateWorkloadIdentityPoolProviderRequest implements IUpdateWorkloadIdentityPoolProviderRequest {

                /**
                 * Constructs a new UpdateWorkloadIdentityPoolProviderRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v1beta.IUpdateWorkloadIdentityPoolProviderRequest);

                /** UpdateWorkloadIdentityPoolProviderRequest workloadIdentityPoolProvider. */
                public workloadIdentityPoolProvider?: (google.iam.v1beta.IWorkloadIdentityPoolProvider|null);

                /** UpdateWorkloadIdentityPoolProviderRequest updateMask. */
                public updateMask?: (google.protobuf.IFieldMask|null);

                /**
                 * Creates a new UpdateWorkloadIdentityPoolProviderRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns UpdateWorkloadIdentityPoolProviderRequest instance
                 */
                public static create(properties?: google.iam.v1beta.IUpdateWorkloadIdentityPoolProviderRequest): google.iam.v1beta.UpdateWorkloadIdentityPoolProviderRequest;

                /**
                 * Encodes the specified UpdateWorkloadIdentityPoolProviderRequest message. Does not implicitly {@link google.iam.v1beta.UpdateWorkloadIdentityPoolProviderRequest.verify|verify} messages.
                 * @param message UpdateWorkloadIdentityPoolProviderRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v1beta.IUpdateWorkloadIdentityPoolProviderRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified UpdateWorkloadIdentityPoolProviderRequest message, length delimited. Does not implicitly {@link google.iam.v1beta.UpdateWorkloadIdentityPoolProviderRequest.verify|verify} messages.
                 * @param message UpdateWorkloadIdentityPoolProviderRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v1beta.IUpdateWorkloadIdentityPoolProviderRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an UpdateWorkloadIdentityPoolProviderRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns UpdateWorkloadIdentityPoolProviderRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v1beta.UpdateWorkloadIdentityPoolProviderRequest;

                /**
                 * Decodes an UpdateWorkloadIdentityPoolProviderRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns UpdateWorkloadIdentityPoolProviderRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v1beta.UpdateWorkloadIdentityPoolProviderRequest;

                /**
                 * Verifies an UpdateWorkloadIdentityPoolProviderRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an UpdateWorkloadIdentityPoolProviderRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns UpdateWorkloadIdentityPoolProviderRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v1beta.UpdateWorkloadIdentityPoolProviderRequest;

                /**
                 * Creates a plain object from an UpdateWorkloadIdentityPoolProviderRequest message. Also converts values to other types if specified.
                 * @param message UpdateWorkloadIdentityPoolProviderRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v1beta.UpdateWorkloadIdentityPoolProviderRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this UpdateWorkloadIdentityPoolProviderRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for UpdateWorkloadIdentityPoolProviderRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a DeleteWorkloadIdentityPoolProviderRequest. */
            interface IDeleteWorkloadIdentityPoolProviderRequest {

                /** DeleteWorkloadIdentityPoolProviderRequest name */
                name?: (string|null);
            }

            /** Represents a DeleteWorkloadIdentityPoolProviderRequest. */
            class DeleteWorkloadIdentityPoolProviderRequest implements IDeleteWorkloadIdentityPoolProviderRequest {

                /**
                 * Constructs a new DeleteWorkloadIdentityPoolProviderRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v1beta.IDeleteWorkloadIdentityPoolProviderRequest);

                /** DeleteWorkloadIdentityPoolProviderRequest name. */
                public name: string;

                /**
                 * Creates a new DeleteWorkloadIdentityPoolProviderRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns DeleteWorkloadIdentityPoolProviderRequest instance
                 */
                public static create(properties?: google.iam.v1beta.IDeleteWorkloadIdentityPoolProviderRequest): google.iam.v1beta.DeleteWorkloadIdentityPoolProviderRequest;

                /**
                 * Encodes the specified DeleteWorkloadIdentityPoolProviderRequest message. Does not implicitly {@link google.iam.v1beta.DeleteWorkloadIdentityPoolProviderRequest.verify|verify} messages.
                 * @param message DeleteWorkloadIdentityPoolProviderRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v1beta.IDeleteWorkloadIdentityPoolProviderRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified DeleteWorkloadIdentityPoolProviderRequest message, length delimited. Does not implicitly {@link google.iam.v1beta.DeleteWorkloadIdentityPoolProviderRequest.verify|verify} messages.
                 * @param message DeleteWorkloadIdentityPoolProviderRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v1beta.IDeleteWorkloadIdentityPoolProviderRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DeleteWorkloadIdentityPoolProviderRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns DeleteWorkloadIdentityPoolProviderRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v1beta.DeleteWorkloadIdentityPoolProviderRequest;

                /**
                 * Decodes a DeleteWorkloadIdentityPoolProviderRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns DeleteWorkloadIdentityPoolProviderRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v1beta.DeleteWorkloadIdentityPoolProviderRequest;

                /**
                 * Verifies a DeleteWorkloadIdentityPoolProviderRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a DeleteWorkloadIdentityPoolProviderRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns DeleteWorkloadIdentityPoolProviderRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v1beta.DeleteWorkloadIdentityPoolProviderRequest;

                /**
                 * Creates a plain object from a DeleteWorkloadIdentityPoolProviderRequest message. Also converts values to other types if specified.
                 * @param message DeleteWorkloadIdentityPoolProviderRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v1beta.DeleteWorkloadIdentityPoolProviderRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this DeleteWorkloadIdentityPoolProviderRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for DeleteWorkloadIdentityPoolProviderRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of an UndeleteWorkloadIdentityPoolProviderRequest. */
            interface IUndeleteWorkloadIdentityPoolProviderRequest {

                /** UndeleteWorkloadIdentityPoolProviderRequest name */
                name?: (string|null);
            }

            /** Represents an UndeleteWorkloadIdentityPoolProviderRequest. */
            class UndeleteWorkloadIdentityPoolProviderRequest implements IUndeleteWorkloadIdentityPoolProviderRequest {

                /**
                 * Constructs a new UndeleteWorkloadIdentityPoolProviderRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v1beta.IUndeleteWorkloadIdentityPoolProviderRequest);

                /** UndeleteWorkloadIdentityPoolProviderRequest name. */
                public name: string;

                /**
                 * Creates a new UndeleteWorkloadIdentityPoolProviderRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns UndeleteWorkloadIdentityPoolProviderRequest instance
                 */
                public static create(properties?: google.iam.v1beta.IUndeleteWorkloadIdentityPoolProviderRequest): google.iam.v1beta.UndeleteWorkloadIdentityPoolProviderRequest;

                /**
                 * Encodes the specified UndeleteWorkloadIdentityPoolProviderRequest message. Does not implicitly {@link google.iam.v1beta.UndeleteWorkloadIdentityPoolProviderRequest.verify|verify} messages.
                 * @param message UndeleteWorkloadIdentityPoolProviderRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v1beta.IUndeleteWorkloadIdentityPoolProviderRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified UndeleteWorkloadIdentityPoolProviderRequest message, length delimited. Does not implicitly {@link google.iam.v1beta.UndeleteWorkloadIdentityPoolProviderRequest.verify|verify} messages.
                 * @param message UndeleteWorkloadIdentityPoolProviderRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v1beta.IUndeleteWorkloadIdentityPoolProviderRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an UndeleteWorkloadIdentityPoolProviderRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns UndeleteWorkloadIdentityPoolProviderRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v1beta.UndeleteWorkloadIdentityPoolProviderRequest;

                /**
                 * Decodes an UndeleteWorkloadIdentityPoolProviderRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns UndeleteWorkloadIdentityPoolProviderRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v1beta.UndeleteWorkloadIdentityPoolProviderRequest;

                /**
                 * Verifies an UndeleteWorkloadIdentityPoolProviderRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an UndeleteWorkloadIdentityPoolProviderRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns UndeleteWorkloadIdentityPoolProviderRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v1beta.UndeleteWorkloadIdentityPoolProviderRequest;

                /**
                 * Creates a plain object from an UndeleteWorkloadIdentityPoolProviderRequest message. Also converts values to other types if specified.
                 * @param message UndeleteWorkloadIdentityPoolProviderRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v1beta.UndeleteWorkloadIdentityPoolProviderRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this UndeleteWorkloadIdentityPoolProviderRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for UndeleteWorkloadIdentityPoolProviderRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a WorkloadIdentityPoolOperationMetadata. */
            interface IWorkloadIdentityPoolOperationMetadata {
            }

            /** Represents a WorkloadIdentityPoolOperationMetadata. */
            class WorkloadIdentityPoolOperationMetadata implements IWorkloadIdentityPoolOperationMetadata {

                /**
                 * Constructs a new WorkloadIdentityPoolOperationMetadata.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v1beta.IWorkloadIdentityPoolOperationMetadata);

                /**
                 * Creates a new WorkloadIdentityPoolOperationMetadata instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns WorkloadIdentityPoolOperationMetadata instance
                 */
                public static create(properties?: google.iam.v1beta.IWorkloadIdentityPoolOperationMetadata): google.iam.v1beta.WorkloadIdentityPoolOperationMetadata;

                /**
                 * Encodes the specified WorkloadIdentityPoolOperationMetadata message. Does not implicitly {@link google.iam.v1beta.WorkloadIdentityPoolOperationMetadata.verify|verify} messages.
                 * @param message WorkloadIdentityPoolOperationMetadata message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v1beta.IWorkloadIdentityPoolOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified WorkloadIdentityPoolOperationMetadata message, length delimited. Does not implicitly {@link google.iam.v1beta.WorkloadIdentityPoolOperationMetadata.verify|verify} messages.
                 * @param message WorkloadIdentityPoolOperationMetadata message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v1beta.IWorkloadIdentityPoolOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a WorkloadIdentityPoolOperationMetadata message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns WorkloadIdentityPoolOperationMetadata
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v1beta.WorkloadIdentityPoolOperationMetadata;

                /**
                 * Decodes a WorkloadIdentityPoolOperationMetadata message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns WorkloadIdentityPoolOperationMetadata
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v1beta.WorkloadIdentityPoolOperationMetadata;

                /**
                 * Verifies a WorkloadIdentityPoolOperationMetadata message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a WorkloadIdentityPoolOperationMetadata message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns WorkloadIdentityPoolOperationMetadata
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v1beta.WorkloadIdentityPoolOperationMetadata;

                /**
                 * Creates a plain object from a WorkloadIdentityPoolOperationMetadata message. Also converts values to other types if specified.
                 * @param message WorkloadIdentityPoolOperationMetadata
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v1beta.WorkloadIdentityPoolOperationMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this WorkloadIdentityPoolOperationMetadata to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for WorkloadIdentityPoolOperationMetadata
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a WorkloadIdentityPoolProviderOperationMetadata. */
            interface IWorkloadIdentityPoolProviderOperationMetadata {
            }

            /** Represents a WorkloadIdentityPoolProviderOperationMetadata. */
            class WorkloadIdentityPoolProviderOperationMetadata implements IWorkloadIdentityPoolProviderOperationMetadata {

                /**
                 * Constructs a new WorkloadIdentityPoolProviderOperationMetadata.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v1beta.IWorkloadIdentityPoolProviderOperationMetadata);

                /**
                 * Creates a new WorkloadIdentityPoolProviderOperationMetadata instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns WorkloadIdentityPoolProviderOperationMetadata instance
                 */
                public static create(properties?: google.iam.v1beta.IWorkloadIdentityPoolProviderOperationMetadata): google.iam.v1beta.WorkloadIdentityPoolProviderOperationMetadata;

                /**
                 * Encodes the specified WorkloadIdentityPoolProviderOperationMetadata message. Does not implicitly {@link google.iam.v1beta.WorkloadIdentityPoolProviderOperationMetadata.verify|verify} messages.
                 * @param message WorkloadIdentityPoolProviderOperationMetadata message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v1beta.IWorkloadIdentityPoolProviderOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified WorkloadIdentityPoolProviderOperationMetadata message, length delimited. Does not implicitly {@link google.iam.v1beta.WorkloadIdentityPoolProviderOperationMetadata.verify|verify} messages.
                 * @param message WorkloadIdentityPoolProviderOperationMetadata message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v1beta.IWorkloadIdentityPoolProviderOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a WorkloadIdentityPoolProviderOperationMetadata message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns WorkloadIdentityPoolProviderOperationMetadata
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v1beta.WorkloadIdentityPoolProviderOperationMetadata;

                /**
                 * Decodes a WorkloadIdentityPoolProviderOperationMetadata message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns WorkloadIdentityPoolProviderOperationMetadata
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v1beta.WorkloadIdentityPoolProviderOperationMetadata;

                /**
                 * Verifies a WorkloadIdentityPoolProviderOperationMetadata message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a WorkloadIdentityPoolProviderOperationMetadata message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns WorkloadIdentityPoolProviderOperationMetadata
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v1beta.WorkloadIdentityPoolProviderOperationMetadata;

                /**
                 * Creates a plain object from a WorkloadIdentityPoolProviderOperationMetadata message. Also converts values to other types if specified.
                 * @param message WorkloadIdentityPoolProviderOperationMetadata
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v1beta.WorkloadIdentityPoolProviderOperationMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this WorkloadIdentityPoolProviderOperationMetadata to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for WorkloadIdentityPoolProviderOperationMetadata
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Namespace v2. */
        namespace v2 {

            /** Properties of a DenyRule. */
            interface IDenyRule {

                /** DenyRule deniedPrincipals */
                deniedPrincipals?: (string[]|null);

                /** DenyRule exceptionPrincipals */
                exceptionPrincipals?: (string[]|null);

                /** DenyRule deniedPermissions */
                deniedPermissions?: (string[]|null);

                /** DenyRule exceptionPermissions */
                exceptionPermissions?: (string[]|null);

                /** DenyRule denialCondition */
                denialCondition?: (google.type.IExpr|null);
            }

            /** Represents a DenyRule. */
            class DenyRule implements IDenyRule {

                /**
                 * Constructs a new DenyRule.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v2.IDenyRule);

                /** DenyRule deniedPrincipals. */
                public deniedPrincipals: string[];

                /** DenyRule exceptionPrincipals. */
                public exceptionPrincipals: string[];

                /** DenyRule deniedPermissions. */
                public deniedPermissions: string[];

                /** DenyRule exceptionPermissions. */
                public exceptionPermissions: string[];

                /** DenyRule denialCondition. */
                public denialCondition?: (google.type.IExpr|null);

                /**
                 * Creates a new DenyRule instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns DenyRule instance
                 */
                public static create(properties?: google.iam.v2.IDenyRule): google.iam.v2.DenyRule;

                /**
                 * Encodes the specified DenyRule message. Does not implicitly {@link google.iam.v2.DenyRule.verify|verify} messages.
                 * @param message DenyRule message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v2.IDenyRule, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified DenyRule message, length delimited. Does not implicitly {@link google.iam.v2.DenyRule.verify|verify} messages.
                 * @param message DenyRule message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v2.IDenyRule, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DenyRule message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns DenyRule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v2.DenyRule;

                /**
                 * Decodes a DenyRule message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns DenyRule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v2.DenyRule;

                /**
                 * Verifies a DenyRule message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a DenyRule message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns DenyRule
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v2.DenyRule;

                /**
                 * Creates a plain object from a DenyRule message. Also converts values to other types if specified.
                 * @param message DenyRule
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v2.DenyRule, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this DenyRule to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for DenyRule
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Represents a Policies */
            class Policies extends $protobuf.rpc.Service {

                /**
                 * Constructs a new Policies service.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 */
                constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                /**
                 * Creates new Policies service using the specified rpc implementation.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 * @returns RPC service. Useful where requests and/or responses are streamed.
                 */
                public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Policies;

                /**
                 * Calls ListPolicies.
                 * @param request ListPoliciesRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and ListPoliciesResponse
                 */
                public listPolicies(request: google.iam.v2.IListPoliciesRequest, callback: google.iam.v2.Policies.ListPoliciesCallback): void;

                /**
                 * Calls ListPolicies.
                 * @param request ListPoliciesRequest message or plain object
                 * @returns Promise
                 */
                public listPolicies(request: google.iam.v2.IListPoliciesRequest): Promise<google.iam.v2.ListPoliciesResponse>;

                /**
                 * Calls GetPolicy.
                 * @param request GetPolicyRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Policy
                 */
                public getPolicy(request: google.iam.v2.IGetPolicyRequest, callback: google.iam.v2.Policies.GetPolicyCallback): void;

                /**
                 * Calls GetPolicy.
                 * @param request GetPolicyRequest message or plain object
                 * @returns Promise
                 */
                public getPolicy(request: google.iam.v2.IGetPolicyRequest): Promise<google.iam.v2.Policy>;

                /**
                 * Calls CreatePolicy.
                 * @param request CreatePolicyRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Operation
                 */
                public createPolicy(request: google.iam.v2.ICreatePolicyRequest, callback: google.iam.v2.Policies.CreatePolicyCallback): void;

                /**
                 * Calls CreatePolicy.
                 * @param request CreatePolicyRequest message or plain object
                 * @returns Promise
                 */
                public createPolicy(request: google.iam.v2.ICreatePolicyRequest): Promise<google.longrunning.Operation>;

                /**
                 * Calls UpdatePolicy.
                 * @param request UpdatePolicyRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Operation
                 */
                public updatePolicy(request: google.iam.v2.IUpdatePolicyRequest, callback: google.iam.v2.Policies.UpdatePolicyCallback): void;

                /**
                 * Calls UpdatePolicy.
                 * @param request UpdatePolicyRequest message or plain object
                 * @returns Promise
                 */
                public updatePolicy(request: google.iam.v2.IUpdatePolicyRequest): Promise<google.longrunning.Operation>;

                /**
                 * Calls DeletePolicy.
                 * @param request DeletePolicyRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Operation
                 */
                public deletePolicy(request: google.iam.v2.IDeletePolicyRequest, callback: google.iam.v2.Policies.DeletePolicyCallback): void;

                /**
                 * Calls DeletePolicy.
                 * @param request DeletePolicyRequest message or plain object
                 * @returns Promise
                 */
                public deletePolicy(request: google.iam.v2.IDeletePolicyRequest): Promise<google.longrunning.Operation>;
            }

            namespace Policies {

                /**
                 * Callback as used by {@link google.iam.v2.Policies|listPolicies}.
                 * @param error Error, if any
                 * @param [response] ListPoliciesResponse
                 */
                type ListPoliciesCallback = (error: (Error|null), response?: google.iam.v2.ListPoliciesResponse) => void;

                /**
                 * Callback as used by {@link google.iam.v2.Policies|getPolicy}.
                 * @param error Error, if any
                 * @param [response] Policy
                 */
                type GetPolicyCallback = (error: (Error|null), response?: google.iam.v2.Policy) => void;

                /**
                 * Callback as used by {@link google.iam.v2.Policies|createPolicy}.
                 * @param error Error, if any
                 * @param [response] Operation
                 */
                type CreatePolicyCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                /**
                 * Callback as used by {@link google.iam.v2.Policies|updatePolicy}.
                 * @param error Error, if any
                 * @param [response] Operation
                 */
                type UpdatePolicyCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                /**
                 * Callback as used by {@link google.iam.v2.Policies|deletePolicy}.
                 * @param error Error, if any
                 * @param [response] Operation
                 */
                type DeletePolicyCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;
            }

            /** Properties of a Policy. */
            interface IPolicy {

                /** Policy name */
                name?: (string|null);

                /** Policy uid */
                uid?: (string|null);

                /** Policy kind */
                kind?: (string|null);

                /** Policy displayName */
                displayName?: (string|null);

                /** Policy annotations */
                annotations?: ({ [k: string]: string }|null);

                /** Policy etag */
                etag?: (string|null);

                /** Policy createTime */
                createTime?: (google.protobuf.ITimestamp|null);

                /** Policy updateTime */
                updateTime?: (google.protobuf.ITimestamp|null);

                /** Policy deleteTime */
                deleteTime?: (google.protobuf.ITimestamp|null);

                /** Policy rules */
                rules?: (google.iam.v2.IPolicyRule[]|null);

                /** Policy managingAuthority */
                managingAuthority?: (string|null);
            }

            /** Represents a Policy. */
            class Policy implements IPolicy {

                /**
                 * Constructs a new Policy.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v2.IPolicy);

                /** Policy name. */
                public name: string;

                /** Policy uid. */
                public uid: string;

                /** Policy kind. */
                public kind: string;

                /** Policy displayName. */
                public displayName: string;

                /** Policy annotations. */
                public annotations: { [k: string]: string };

                /** Policy etag. */
                public etag: string;

                /** Policy createTime. */
                public createTime?: (google.protobuf.ITimestamp|null);

                /** Policy updateTime. */
                public updateTime?: (google.protobuf.ITimestamp|null);

                /** Policy deleteTime. */
                public deleteTime?: (google.protobuf.ITimestamp|null);

                /** Policy rules. */
                public rules: google.iam.v2.IPolicyRule[];

                /** Policy managingAuthority. */
                public managingAuthority: string;

                /**
                 * Creates a new Policy instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Policy instance
                 */
                public static create(properties?: google.iam.v2.IPolicy): google.iam.v2.Policy;

                /**
                 * Encodes the specified Policy message. Does not implicitly {@link google.iam.v2.Policy.verify|verify} messages.
                 * @param message Policy message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v2.IPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Policy message, length delimited. Does not implicitly {@link google.iam.v2.Policy.verify|verify} messages.
                 * @param message Policy message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v2.IPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Policy message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Policy
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v2.Policy;

                /**
                 * Decodes a Policy message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Policy
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v2.Policy;

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
                public static fromObject(object: { [k: string]: any }): google.iam.v2.Policy;

                /**
                 * Creates a plain object from a Policy message. Also converts values to other types if specified.
                 * @param message Policy
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v2.Policy, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

            /** Properties of a PolicyRule. */
            interface IPolicyRule {

                /** PolicyRule denyRule */
                denyRule?: (google.iam.v2.IDenyRule|null);

                /** PolicyRule description */
                description?: (string|null);
            }

            /** Represents a PolicyRule. */
            class PolicyRule implements IPolicyRule {

                /**
                 * Constructs a new PolicyRule.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v2.IPolicyRule);

                /** PolicyRule denyRule. */
                public denyRule?: (google.iam.v2.IDenyRule|null);

                /** PolicyRule description. */
                public description: string;

                /** PolicyRule kind. */
                public kind?: "denyRule";

                /**
                 * Creates a new PolicyRule instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns PolicyRule instance
                 */
                public static create(properties?: google.iam.v2.IPolicyRule): google.iam.v2.PolicyRule;

                /**
                 * Encodes the specified PolicyRule message. Does not implicitly {@link google.iam.v2.PolicyRule.verify|verify} messages.
                 * @param message PolicyRule message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v2.IPolicyRule, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified PolicyRule message, length delimited. Does not implicitly {@link google.iam.v2.PolicyRule.verify|verify} messages.
                 * @param message PolicyRule message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v2.IPolicyRule, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a PolicyRule message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns PolicyRule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v2.PolicyRule;

                /**
                 * Decodes a PolicyRule message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns PolicyRule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v2.PolicyRule;

                /**
                 * Verifies a PolicyRule message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a PolicyRule message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns PolicyRule
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v2.PolicyRule;

                /**
                 * Creates a plain object from a PolicyRule message. Also converts values to other types if specified.
                 * @param message PolicyRule
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v2.PolicyRule, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this PolicyRule to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for PolicyRule
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a ListPoliciesRequest. */
            interface IListPoliciesRequest {

                /** ListPoliciesRequest parent */
                parent?: (string|null);

                /** ListPoliciesRequest pageSize */
                pageSize?: (number|null);

                /** ListPoliciesRequest pageToken */
                pageToken?: (string|null);
            }

            /** Represents a ListPoliciesRequest. */
            class ListPoliciesRequest implements IListPoliciesRequest {

                /**
                 * Constructs a new ListPoliciesRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v2.IListPoliciesRequest);

                /** ListPoliciesRequest parent. */
                public parent: string;

                /** ListPoliciesRequest pageSize. */
                public pageSize: number;

                /** ListPoliciesRequest pageToken. */
                public pageToken: string;

                /**
                 * Creates a new ListPoliciesRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ListPoliciesRequest instance
                 */
                public static create(properties?: google.iam.v2.IListPoliciesRequest): google.iam.v2.ListPoliciesRequest;

                /**
                 * Encodes the specified ListPoliciesRequest message. Does not implicitly {@link google.iam.v2.ListPoliciesRequest.verify|verify} messages.
                 * @param message ListPoliciesRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v2.IListPoliciesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ListPoliciesRequest message, length delimited. Does not implicitly {@link google.iam.v2.ListPoliciesRequest.verify|verify} messages.
                 * @param message ListPoliciesRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v2.IListPoliciesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ListPoliciesRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ListPoliciesRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v2.ListPoliciesRequest;

                /**
                 * Decodes a ListPoliciesRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ListPoliciesRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v2.ListPoliciesRequest;

                /**
                 * Verifies a ListPoliciesRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ListPoliciesRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ListPoliciesRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v2.ListPoliciesRequest;

                /**
                 * Creates a plain object from a ListPoliciesRequest message. Also converts values to other types if specified.
                 * @param message ListPoliciesRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v2.ListPoliciesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ListPoliciesRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ListPoliciesRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a ListPoliciesResponse. */
            interface IListPoliciesResponse {

                /** ListPoliciesResponse policies */
                policies?: (google.iam.v2.IPolicy[]|null);

                /** ListPoliciesResponse nextPageToken */
                nextPageToken?: (string|null);
            }

            /** Represents a ListPoliciesResponse. */
            class ListPoliciesResponse implements IListPoliciesResponse {

                /**
                 * Constructs a new ListPoliciesResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v2.IListPoliciesResponse);

                /** ListPoliciesResponse policies. */
                public policies: google.iam.v2.IPolicy[];

                /** ListPoliciesResponse nextPageToken. */
                public nextPageToken: string;

                /**
                 * Creates a new ListPoliciesResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ListPoliciesResponse instance
                 */
                public static create(properties?: google.iam.v2.IListPoliciesResponse): google.iam.v2.ListPoliciesResponse;

                /**
                 * Encodes the specified ListPoliciesResponse message. Does not implicitly {@link google.iam.v2.ListPoliciesResponse.verify|verify} messages.
                 * @param message ListPoliciesResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v2.IListPoliciesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ListPoliciesResponse message, length delimited. Does not implicitly {@link google.iam.v2.ListPoliciesResponse.verify|verify} messages.
                 * @param message ListPoliciesResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v2.IListPoliciesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ListPoliciesResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ListPoliciesResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v2.ListPoliciesResponse;

                /**
                 * Decodes a ListPoliciesResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ListPoliciesResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v2.ListPoliciesResponse;

                /**
                 * Verifies a ListPoliciesResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ListPoliciesResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ListPoliciesResponse
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v2.ListPoliciesResponse;

                /**
                 * Creates a plain object from a ListPoliciesResponse message. Also converts values to other types if specified.
                 * @param message ListPoliciesResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v2.ListPoliciesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ListPoliciesResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ListPoliciesResponse
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a GetPolicyRequest. */
            interface IGetPolicyRequest {

                /** GetPolicyRequest name */
                name?: (string|null);
            }

            /** Represents a GetPolicyRequest. */
            class GetPolicyRequest implements IGetPolicyRequest {

                /**
                 * Constructs a new GetPolicyRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v2.IGetPolicyRequest);

                /** GetPolicyRequest name. */
                public name: string;

                /**
                 * Creates a new GetPolicyRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GetPolicyRequest instance
                 */
                public static create(properties?: google.iam.v2.IGetPolicyRequest): google.iam.v2.GetPolicyRequest;

                /**
                 * Encodes the specified GetPolicyRequest message. Does not implicitly {@link google.iam.v2.GetPolicyRequest.verify|verify} messages.
                 * @param message GetPolicyRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v2.IGetPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GetPolicyRequest message, length delimited. Does not implicitly {@link google.iam.v2.GetPolicyRequest.verify|verify} messages.
                 * @param message GetPolicyRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v2.IGetPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GetPolicyRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GetPolicyRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v2.GetPolicyRequest;

                /**
                 * Decodes a GetPolicyRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GetPolicyRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v2.GetPolicyRequest;

                /**
                 * Verifies a GetPolicyRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GetPolicyRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GetPolicyRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v2.GetPolicyRequest;

                /**
                 * Creates a plain object from a GetPolicyRequest message. Also converts values to other types if specified.
                 * @param message GetPolicyRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v2.GetPolicyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GetPolicyRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for GetPolicyRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a CreatePolicyRequest. */
            interface ICreatePolicyRequest {

                /** CreatePolicyRequest parent */
                parent?: (string|null);

                /** CreatePolicyRequest policy */
                policy?: (google.iam.v2.IPolicy|null);

                /** CreatePolicyRequest policyId */
                policyId?: (string|null);
            }

            /** Represents a CreatePolicyRequest. */
            class CreatePolicyRequest implements ICreatePolicyRequest {

                /**
                 * Constructs a new CreatePolicyRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v2.ICreatePolicyRequest);

                /** CreatePolicyRequest parent. */
                public parent: string;

                /** CreatePolicyRequest policy. */
                public policy?: (google.iam.v2.IPolicy|null);

                /** CreatePolicyRequest policyId. */
                public policyId: string;

                /**
                 * Creates a new CreatePolicyRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CreatePolicyRequest instance
                 */
                public static create(properties?: google.iam.v2.ICreatePolicyRequest): google.iam.v2.CreatePolicyRequest;

                /**
                 * Encodes the specified CreatePolicyRequest message. Does not implicitly {@link google.iam.v2.CreatePolicyRequest.verify|verify} messages.
                 * @param message CreatePolicyRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v2.ICreatePolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CreatePolicyRequest message, length delimited. Does not implicitly {@link google.iam.v2.CreatePolicyRequest.verify|verify} messages.
                 * @param message CreatePolicyRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v2.ICreatePolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CreatePolicyRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CreatePolicyRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v2.CreatePolicyRequest;

                /**
                 * Decodes a CreatePolicyRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CreatePolicyRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v2.CreatePolicyRequest;

                /**
                 * Verifies a CreatePolicyRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CreatePolicyRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CreatePolicyRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v2.CreatePolicyRequest;

                /**
                 * Creates a plain object from a CreatePolicyRequest message. Also converts values to other types if specified.
                 * @param message CreatePolicyRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v2.CreatePolicyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CreatePolicyRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for CreatePolicyRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of an UpdatePolicyRequest. */
            interface IUpdatePolicyRequest {

                /** UpdatePolicyRequest policy */
                policy?: (google.iam.v2.IPolicy|null);
            }

            /** Represents an UpdatePolicyRequest. */
            class UpdatePolicyRequest implements IUpdatePolicyRequest {

                /**
                 * Constructs a new UpdatePolicyRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v2.IUpdatePolicyRequest);

                /** UpdatePolicyRequest policy. */
                public policy?: (google.iam.v2.IPolicy|null);

                /**
                 * Creates a new UpdatePolicyRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns UpdatePolicyRequest instance
                 */
                public static create(properties?: google.iam.v2.IUpdatePolicyRequest): google.iam.v2.UpdatePolicyRequest;

                /**
                 * Encodes the specified UpdatePolicyRequest message. Does not implicitly {@link google.iam.v2.UpdatePolicyRequest.verify|verify} messages.
                 * @param message UpdatePolicyRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v2.IUpdatePolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified UpdatePolicyRequest message, length delimited. Does not implicitly {@link google.iam.v2.UpdatePolicyRequest.verify|verify} messages.
                 * @param message UpdatePolicyRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v2.IUpdatePolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an UpdatePolicyRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns UpdatePolicyRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v2.UpdatePolicyRequest;

                /**
                 * Decodes an UpdatePolicyRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns UpdatePolicyRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v2.UpdatePolicyRequest;

                /**
                 * Verifies an UpdatePolicyRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an UpdatePolicyRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns UpdatePolicyRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v2.UpdatePolicyRequest;

                /**
                 * Creates a plain object from an UpdatePolicyRequest message. Also converts values to other types if specified.
                 * @param message UpdatePolicyRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v2.UpdatePolicyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this UpdatePolicyRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for UpdatePolicyRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a DeletePolicyRequest. */
            interface IDeletePolicyRequest {

                /** DeletePolicyRequest name */
                name?: (string|null);

                /** DeletePolicyRequest etag */
                etag?: (string|null);
            }

            /** Represents a DeletePolicyRequest. */
            class DeletePolicyRequest implements IDeletePolicyRequest {

                /**
                 * Constructs a new DeletePolicyRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v2.IDeletePolicyRequest);

                /** DeletePolicyRequest name. */
                public name: string;

                /** DeletePolicyRequest etag. */
                public etag: string;

                /**
                 * Creates a new DeletePolicyRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns DeletePolicyRequest instance
                 */
                public static create(properties?: google.iam.v2.IDeletePolicyRequest): google.iam.v2.DeletePolicyRequest;

                /**
                 * Encodes the specified DeletePolicyRequest message. Does not implicitly {@link google.iam.v2.DeletePolicyRequest.verify|verify} messages.
                 * @param message DeletePolicyRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v2.IDeletePolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified DeletePolicyRequest message, length delimited. Does not implicitly {@link google.iam.v2.DeletePolicyRequest.verify|verify} messages.
                 * @param message DeletePolicyRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v2.IDeletePolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DeletePolicyRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns DeletePolicyRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v2.DeletePolicyRequest;

                /**
                 * Decodes a DeletePolicyRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns DeletePolicyRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v2.DeletePolicyRequest;

                /**
                 * Verifies a DeletePolicyRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a DeletePolicyRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns DeletePolicyRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v2.DeletePolicyRequest;

                /**
                 * Creates a plain object from a DeletePolicyRequest message. Also converts values to other types if specified.
                 * @param message DeletePolicyRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v2.DeletePolicyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this DeletePolicyRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for DeletePolicyRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a PolicyOperationMetadata. */
            interface IPolicyOperationMetadata {

                /** PolicyOperationMetadata createTime */
                createTime?: (google.protobuf.ITimestamp|null);
            }

            /** Represents a PolicyOperationMetadata. */
            class PolicyOperationMetadata implements IPolicyOperationMetadata {

                /**
                 * Constructs a new PolicyOperationMetadata.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v2.IPolicyOperationMetadata);

                /** PolicyOperationMetadata createTime. */
                public createTime?: (google.protobuf.ITimestamp|null);

                /**
                 * Creates a new PolicyOperationMetadata instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns PolicyOperationMetadata instance
                 */
                public static create(properties?: google.iam.v2.IPolicyOperationMetadata): google.iam.v2.PolicyOperationMetadata;

                /**
                 * Encodes the specified PolicyOperationMetadata message. Does not implicitly {@link google.iam.v2.PolicyOperationMetadata.verify|verify} messages.
                 * @param message PolicyOperationMetadata message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v2.IPolicyOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified PolicyOperationMetadata message, length delimited. Does not implicitly {@link google.iam.v2.PolicyOperationMetadata.verify|verify} messages.
                 * @param message PolicyOperationMetadata message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v2.IPolicyOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a PolicyOperationMetadata message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns PolicyOperationMetadata
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v2.PolicyOperationMetadata;

                /**
                 * Decodes a PolicyOperationMetadata message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns PolicyOperationMetadata
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v2.PolicyOperationMetadata;

                /**
                 * Verifies a PolicyOperationMetadata message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a PolicyOperationMetadata message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns PolicyOperationMetadata
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v2.PolicyOperationMetadata;

                /**
                 * Creates a plain object from a PolicyOperationMetadata message. Also converts values to other types if specified.
                 * @param message PolicyOperationMetadata
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v2.PolicyOperationMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this PolicyOperationMetadata to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for PolicyOperationMetadata
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Namespace v2beta. */
        namespace v2beta {

            /** Properties of a DenyRule. */
            interface IDenyRule {

                /** DenyRule deniedPrincipals */
                deniedPrincipals?: (string[]|null);

                /** DenyRule exceptionPrincipals */
                exceptionPrincipals?: (string[]|null);

                /** DenyRule deniedPermissions */
                deniedPermissions?: (string[]|null);

                /** DenyRule exceptionPermissions */
                exceptionPermissions?: (string[]|null);

                /** DenyRule denialCondition */
                denialCondition?: (google.type.IExpr|null);
            }

            /** Represents a DenyRule. */
            class DenyRule implements IDenyRule {

                /**
                 * Constructs a new DenyRule.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v2beta.IDenyRule);

                /** DenyRule deniedPrincipals. */
                public deniedPrincipals: string[];

                /** DenyRule exceptionPrincipals. */
                public exceptionPrincipals: string[];

                /** DenyRule deniedPermissions. */
                public deniedPermissions: string[];

                /** DenyRule exceptionPermissions. */
                public exceptionPermissions: string[];

                /** DenyRule denialCondition. */
                public denialCondition?: (google.type.IExpr|null);

                /**
                 * Creates a new DenyRule instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns DenyRule instance
                 */
                public static create(properties?: google.iam.v2beta.IDenyRule): google.iam.v2beta.DenyRule;

                /**
                 * Encodes the specified DenyRule message. Does not implicitly {@link google.iam.v2beta.DenyRule.verify|verify} messages.
                 * @param message DenyRule message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v2beta.IDenyRule, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified DenyRule message, length delimited. Does not implicitly {@link google.iam.v2beta.DenyRule.verify|verify} messages.
                 * @param message DenyRule message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v2beta.IDenyRule, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DenyRule message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns DenyRule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v2beta.DenyRule;

                /**
                 * Decodes a DenyRule message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns DenyRule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v2beta.DenyRule;

                /**
                 * Verifies a DenyRule message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a DenyRule message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns DenyRule
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v2beta.DenyRule;

                /**
                 * Creates a plain object from a DenyRule message. Also converts values to other types if specified.
                 * @param message DenyRule
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v2beta.DenyRule, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this DenyRule to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for DenyRule
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Represents a Policies */
            class Policies extends $protobuf.rpc.Service {

                /**
                 * Constructs a new Policies service.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 */
                constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                /**
                 * Creates new Policies service using the specified rpc implementation.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 * @returns RPC service. Useful where requests and/or responses are streamed.
                 */
                public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Policies;

                /**
                 * Calls ListPolicies.
                 * @param request ListPoliciesRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and ListPoliciesResponse
                 */
                public listPolicies(request: google.iam.v2beta.IListPoliciesRequest, callback: google.iam.v2beta.Policies.ListPoliciesCallback): void;

                /**
                 * Calls ListPolicies.
                 * @param request ListPoliciesRequest message or plain object
                 * @returns Promise
                 */
                public listPolicies(request: google.iam.v2beta.IListPoliciesRequest): Promise<google.iam.v2beta.ListPoliciesResponse>;

                /**
                 * Calls GetPolicy.
                 * @param request GetPolicyRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Policy
                 */
                public getPolicy(request: google.iam.v2beta.IGetPolicyRequest, callback: google.iam.v2beta.Policies.GetPolicyCallback): void;

                /**
                 * Calls GetPolicy.
                 * @param request GetPolicyRequest message or plain object
                 * @returns Promise
                 */
                public getPolicy(request: google.iam.v2beta.IGetPolicyRequest): Promise<google.iam.v2beta.Policy>;

                /**
                 * Calls CreatePolicy.
                 * @param request CreatePolicyRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Operation
                 */
                public createPolicy(request: google.iam.v2beta.ICreatePolicyRequest, callback: google.iam.v2beta.Policies.CreatePolicyCallback): void;

                /**
                 * Calls CreatePolicy.
                 * @param request CreatePolicyRequest message or plain object
                 * @returns Promise
                 */
                public createPolicy(request: google.iam.v2beta.ICreatePolicyRequest): Promise<google.longrunning.Operation>;

                /**
                 * Calls UpdatePolicy.
                 * @param request UpdatePolicyRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Operation
                 */
                public updatePolicy(request: google.iam.v2beta.IUpdatePolicyRequest, callback: google.iam.v2beta.Policies.UpdatePolicyCallback): void;

                /**
                 * Calls UpdatePolicy.
                 * @param request UpdatePolicyRequest message or plain object
                 * @returns Promise
                 */
                public updatePolicy(request: google.iam.v2beta.IUpdatePolicyRequest): Promise<google.longrunning.Operation>;

                /**
                 * Calls DeletePolicy.
                 * @param request DeletePolicyRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Operation
                 */
                public deletePolicy(request: google.iam.v2beta.IDeletePolicyRequest, callback: google.iam.v2beta.Policies.DeletePolicyCallback): void;

                /**
                 * Calls DeletePolicy.
                 * @param request DeletePolicyRequest message or plain object
                 * @returns Promise
                 */
                public deletePolicy(request: google.iam.v2beta.IDeletePolicyRequest): Promise<google.longrunning.Operation>;
            }

            namespace Policies {

                /**
                 * Callback as used by {@link google.iam.v2beta.Policies|listPolicies}.
                 * @param error Error, if any
                 * @param [response] ListPoliciesResponse
                 */
                type ListPoliciesCallback = (error: (Error|null), response?: google.iam.v2beta.ListPoliciesResponse) => void;

                /**
                 * Callback as used by {@link google.iam.v2beta.Policies|getPolicy}.
                 * @param error Error, if any
                 * @param [response] Policy
                 */
                type GetPolicyCallback = (error: (Error|null), response?: google.iam.v2beta.Policy) => void;

                /**
                 * Callback as used by {@link google.iam.v2beta.Policies|createPolicy}.
                 * @param error Error, if any
                 * @param [response] Operation
                 */
                type CreatePolicyCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                /**
                 * Callback as used by {@link google.iam.v2beta.Policies|updatePolicy}.
                 * @param error Error, if any
                 * @param [response] Operation
                 */
                type UpdatePolicyCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                /**
                 * Callback as used by {@link google.iam.v2beta.Policies|deletePolicy}.
                 * @param error Error, if any
                 * @param [response] Operation
                 */
                type DeletePolicyCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;
            }

            /** Properties of a Policy. */
            interface IPolicy {

                /** Policy name */
                name?: (string|null);

                /** Policy uid */
                uid?: (string|null);

                /** Policy kind */
                kind?: (string|null);

                /** Policy displayName */
                displayName?: (string|null);

                /** Policy annotations */
                annotations?: ({ [k: string]: string }|null);

                /** Policy etag */
                etag?: (string|null);

                /** Policy createTime */
                createTime?: (google.protobuf.ITimestamp|null);

                /** Policy updateTime */
                updateTime?: (google.protobuf.ITimestamp|null);

                /** Policy deleteTime */
                deleteTime?: (google.protobuf.ITimestamp|null);

                /** Policy rules */
                rules?: (google.iam.v2beta.IPolicyRule[]|null);
            }

            /** Represents a Policy. */
            class Policy implements IPolicy {

                /**
                 * Constructs a new Policy.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v2beta.IPolicy);

                /** Policy name. */
                public name: string;

                /** Policy uid. */
                public uid: string;

                /** Policy kind. */
                public kind: string;

                /** Policy displayName. */
                public displayName: string;

                /** Policy annotations. */
                public annotations: { [k: string]: string };

                /** Policy etag. */
                public etag: string;

                /** Policy createTime. */
                public createTime?: (google.protobuf.ITimestamp|null);

                /** Policy updateTime. */
                public updateTime?: (google.protobuf.ITimestamp|null);

                /** Policy deleteTime. */
                public deleteTime?: (google.protobuf.ITimestamp|null);

                /** Policy rules. */
                public rules: google.iam.v2beta.IPolicyRule[];

                /**
                 * Creates a new Policy instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Policy instance
                 */
                public static create(properties?: google.iam.v2beta.IPolicy): google.iam.v2beta.Policy;

                /**
                 * Encodes the specified Policy message. Does not implicitly {@link google.iam.v2beta.Policy.verify|verify} messages.
                 * @param message Policy message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v2beta.IPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Policy message, length delimited. Does not implicitly {@link google.iam.v2beta.Policy.verify|verify} messages.
                 * @param message Policy message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v2beta.IPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Policy message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Policy
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v2beta.Policy;

                /**
                 * Decodes a Policy message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Policy
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v2beta.Policy;

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
                public static fromObject(object: { [k: string]: any }): google.iam.v2beta.Policy;

                /**
                 * Creates a plain object from a Policy message. Also converts values to other types if specified.
                 * @param message Policy
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v2beta.Policy, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

            /** Properties of a PolicyRule. */
            interface IPolicyRule {

                /** PolicyRule denyRule */
                denyRule?: (google.iam.v2beta.IDenyRule|null);

                /** PolicyRule description */
                description?: (string|null);
            }

            /** Represents a PolicyRule. */
            class PolicyRule implements IPolicyRule {

                /**
                 * Constructs a new PolicyRule.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v2beta.IPolicyRule);

                /** PolicyRule denyRule. */
                public denyRule?: (google.iam.v2beta.IDenyRule|null);

                /** PolicyRule description. */
                public description: string;

                /** PolicyRule kind. */
                public kind?: "denyRule";

                /**
                 * Creates a new PolicyRule instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns PolicyRule instance
                 */
                public static create(properties?: google.iam.v2beta.IPolicyRule): google.iam.v2beta.PolicyRule;

                /**
                 * Encodes the specified PolicyRule message. Does not implicitly {@link google.iam.v2beta.PolicyRule.verify|verify} messages.
                 * @param message PolicyRule message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v2beta.IPolicyRule, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified PolicyRule message, length delimited. Does not implicitly {@link google.iam.v2beta.PolicyRule.verify|verify} messages.
                 * @param message PolicyRule message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v2beta.IPolicyRule, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a PolicyRule message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns PolicyRule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v2beta.PolicyRule;

                /**
                 * Decodes a PolicyRule message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns PolicyRule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v2beta.PolicyRule;

                /**
                 * Verifies a PolicyRule message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a PolicyRule message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns PolicyRule
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v2beta.PolicyRule;

                /**
                 * Creates a plain object from a PolicyRule message. Also converts values to other types if specified.
                 * @param message PolicyRule
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v2beta.PolicyRule, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this PolicyRule to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for PolicyRule
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a ListPoliciesRequest. */
            interface IListPoliciesRequest {

                /** ListPoliciesRequest parent */
                parent?: (string|null);

                /** ListPoliciesRequest pageSize */
                pageSize?: (number|null);

                /** ListPoliciesRequest pageToken */
                pageToken?: (string|null);
            }

            /** Represents a ListPoliciesRequest. */
            class ListPoliciesRequest implements IListPoliciesRequest {

                /**
                 * Constructs a new ListPoliciesRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v2beta.IListPoliciesRequest);

                /** ListPoliciesRequest parent. */
                public parent: string;

                /** ListPoliciesRequest pageSize. */
                public pageSize: number;

                /** ListPoliciesRequest pageToken. */
                public pageToken: string;

                /**
                 * Creates a new ListPoliciesRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ListPoliciesRequest instance
                 */
                public static create(properties?: google.iam.v2beta.IListPoliciesRequest): google.iam.v2beta.ListPoliciesRequest;

                /**
                 * Encodes the specified ListPoliciesRequest message. Does not implicitly {@link google.iam.v2beta.ListPoliciesRequest.verify|verify} messages.
                 * @param message ListPoliciesRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v2beta.IListPoliciesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ListPoliciesRequest message, length delimited. Does not implicitly {@link google.iam.v2beta.ListPoliciesRequest.verify|verify} messages.
                 * @param message ListPoliciesRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v2beta.IListPoliciesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ListPoliciesRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ListPoliciesRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v2beta.ListPoliciesRequest;

                /**
                 * Decodes a ListPoliciesRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ListPoliciesRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v2beta.ListPoliciesRequest;

                /**
                 * Verifies a ListPoliciesRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ListPoliciesRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ListPoliciesRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v2beta.ListPoliciesRequest;

                /**
                 * Creates a plain object from a ListPoliciesRequest message. Also converts values to other types if specified.
                 * @param message ListPoliciesRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v2beta.ListPoliciesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ListPoliciesRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ListPoliciesRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a ListPoliciesResponse. */
            interface IListPoliciesResponse {

                /** ListPoliciesResponse policies */
                policies?: (google.iam.v2beta.IPolicy[]|null);

                /** ListPoliciesResponse nextPageToken */
                nextPageToken?: (string|null);
            }

            /** Represents a ListPoliciesResponse. */
            class ListPoliciesResponse implements IListPoliciesResponse {

                /**
                 * Constructs a new ListPoliciesResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v2beta.IListPoliciesResponse);

                /** ListPoliciesResponse policies. */
                public policies: google.iam.v2beta.IPolicy[];

                /** ListPoliciesResponse nextPageToken. */
                public nextPageToken: string;

                /**
                 * Creates a new ListPoliciesResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ListPoliciesResponse instance
                 */
                public static create(properties?: google.iam.v2beta.IListPoliciesResponse): google.iam.v2beta.ListPoliciesResponse;

                /**
                 * Encodes the specified ListPoliciesResponse message. Does not implicitly {@link google.iam.v2beta.ListPoliciesResponse.verify|verify} messages.
                 * @param message ListPoliciesResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v2beta.IListPoliciesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ListPoliciesResponse message, length delimited. Does not implicitly {@link google.iam.v2beta.ListPoliciesResponse.verify|verify} messages.
                 * @param message ListPoliciesResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v2beta.IListPoliciesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ListPoliciesResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ListPoliciesResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v2beta.ListPoliciesResponse;

                /**
                 * Decodes a ListPoliciesResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ListPoliciesResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v2beta.ListPoliciesResponse;

                /**
                 * Verifies a ListPoliciesResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ListPoliciesResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ListPoliciesResponse
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v2beta.ListPoliciesResponse;

                /**
                 * Creates a plain object from a ListPoliciesResponse message. Also converts values to other types if specified.
                 * @param message ListPoliciesResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v2beta.ListPoliciesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ListPoliciesResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ListPoliciesResponse
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a GetPolicyRequest. */
            interface IGetPolicyRequest {

                /** GetPolicyRequest name */
                name?: (string|null);
            }

            /** Represents a GetPolicyRequest. */
            class GetPolicyRequest implements IGetPolicyRequest {

                /**
                 * Constructs a new GetPolicyRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v2beta.IGetPolicyRequest);

                /** GetPolicyRequest name. */
                public name: string;

                /**
                 * Creates a new GetPolicyRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GetPolicyRequest instance
                 */
                public static create(properties?: google.iam.v2beta.IGetPolicyRequest): google.iam.v2beta.GetPolicyRequest;

                /**
                 * Encodes the specified GetPolicyRequest message. Does not implicitly {@link google.iam.v2beta.GetPolicyRequest.verify|verify} messages.
                 * @param message GetPolicyRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v2beta.IGetPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GetPolicyRequest message, length delimited. Does not implicitly {@link google.iam.v2beta.GetPolicyRequest.verify|verify} messages.
                 * @param message GetPolicyRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v2beta.IGetPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GetPolicyRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GetPolicyRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v2beta.GetPolicyRequest;

                /**
                 * Decodes a GetPolicyRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GetPolicyRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v2beta.GetPolicyRequest;

                /**
                 * Verifies a GetPolicyRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GetPolicyRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GetPolicyRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v2beta.GetPolicyRequest;

                /**
                 * Creates a plain object from a GetPolicyRequest message. Also converts values to other types if specified.
                 * @param message GetPolicyRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v2beta.GetPolicyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GetPolicyRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for GetPolicyRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a CreatePolicyRequest. */
            interface ICreatePolicyRequest {

                /** CreatePolicyRequest parent */
                parent?: (string|null);

                /** CreatePolicyRequest policy */
                policy?: (google.iam.v2beta.IPolicy|null);

                /** CreatePolicyRequest policyId */
                policyId?: (string|null);
            }

            /** Represents a CreatePolicyRequest. */
            class CreatePolicyRequest implements ICreatePolicyRequest {

                /**
                 * Constructs a new CreatePolicyRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v2beta.ICreatePolicyRequest);

                /** CreatePolicyRequest parent. */
                public parent: string;

                /** CreatePolicyRequest policy. */
                public policy?: (google.iam.v2beta.IPolicy|null);

                /** CreatePolicyRequest policyId. */
                public policyId: string;

                /**
                 * Creates a new CreatePolicyRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CreatePolicyRequest instance
                 */
                public static create(properties?: google.iam.v2beta.ICreatePolicyRequest): google.iam.v2beta.CreatePolicyRequest;

                /**
                 * Encodes the specified CreatePolicyRequest message. Does not implicitly {@link google.iam.v2beta.CreatePolicyRequest.verify|verify} messages.
                 * @param message CreatePolicyRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v2beta.ICreatePolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CreatePolicyRequest message, length delimited. Does not implicitly {@link google.iam.v2beta.CreatePolicyRequest.verify|verify} messages.
                 * @param message CreatePolicyRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v2beta.ICreatePolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CreatePolicyRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CreatePolicyRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v2beta.CreatePolicyRequest;

                /**
                 * Decodes a CreatePolicyRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CreatePolicyRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v2beta.CreatePolicyRequest;

                /**
                 * Verifies a CreatePolicyRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CreatePolicyRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CreatePolicyRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v2beta.CreatePolicyRequest;

                /**
                 * Creates a plain object from a CreatePolicyRequest message. Also converts values to other types if specified.
                 * @param message CreatePolicyRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v2beta.CreatePolicyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CreatePolicyRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for CreatePolicyRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of an UpdatePolicyRequest. */
            interface IUpdatePolicyRequest {

                /** UpdatePolicyRequest policy */
                policy?: (google.iam.v2beta.IPolicy|null);
            }

            /** Represents an UpdatePolicyRequest. */
            class UpdatePolicyRequest implements IUpdatePolicyRequest {

                /**
                 * Constructs a new UpdatePolicyRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v2beta.IUpdatePolicyRequest);

                /** UpdatePolicyRequest policy. */
                public policy?: (google.iam.v2beta.IPolicy|null);

                /**
                 * Creates a new UpdatePolicyRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns UpdatePolicyRequest instance
                 */
                public static create(properties?: google.iam.v2beta.IUpdatePolicyRequest): google.iam.v2beta.UpdatePolicyRequest;

                /**
                 * Encodes the specified UpdatePolicyRequest message. Does not implicitly {@link google.iam.v2beta.UpdatePolicyRequest.verify|verify} messages.
                 * @param message UpdatePolicyRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v2beta.IUpdatePolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified UpdatePolicyRequest message, length delimited. Does not implicitly {@link google.iam.v2beta.UpdatePolicyRequest.verify|verify} messages.
                 * @param message UpdatePolicyRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v2beta.IUpdatePolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an UpdatePolicyRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns UpdatePolicyRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v2beta.UpdatePolicyRequest;

                /**
                 * Decodes an UpdatePolicyRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns UpdatePolicyRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v2beta.UpdatePolicyRequest;

                /**
                 * Verifies an UpdatePolicyRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an UpdatePolicyRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns UpdatePolicyRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v2beta.UpdatePolicyRequest;

                /**
                 * Creates a plain object from an UpdatePolicyRequest message. Also converts values to other types if specified.
                 * @param message UpdatePolicyRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v2beta.UpdatePolicyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this UpdatePolicyRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for UpdatePolicyRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a DeletePolicyRequest. */
            interface IDeletePolicyRequest {

                /** DeletePolicyRequest name */
                name?: (string|null);

                /** DeletePolicyRequest etag */
                etag?: (string|null);
            }

            /** Represents a DeletePolicyRequest. */
            class DeletePolicyRequest implements IDeletePolicyRequest {

                /**
                 * Constructs a new DeletePolicyRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v2beta.IDeletePolicyRequest);

                /** DeletePolicyRequest name. */
                public name: string;

                /** DeletePolicyRequest etag. */
                public etag: string;

                /**
                 * Creates a new DeletePolicyRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns DeletePolicyRequest instance
                 */
                public static create(properties?: google.iam.v2beta.IDeletePolicyRequest): google.iam.v2beta.DeletePolicyRequest;

                /**
                 * Encodes the specified DeletePolicyRequest message. Does not implicitly {@link google.iam.v2beta.DeletePolicyRequest.verify|verify} messages.
                 * @param message DeletePolicyRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v2beta.IDeletePolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified DeletePolicyRequest message, length delimited. Does not implicitly {@link google.iam.v2beta.DeletePolicyRequest.verify|verify} messages.
                 * @param message DeletePolicyRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v2beta.IDeletePolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DeletePolicyRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns DeletePolicyRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v2beta.DeletePolicyRequest;

                /**
                 * Decodes a DeletePolicyRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns DeletePolicyRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v2beta.DeletePolicyRequest;

                /**
                 * Verifies a DeletePolicyRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a DeletePolicyRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns DeletePolicyRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v2beta.DeletePolicyRequest;

                /**
                 * Creates a plain object from a DeletePolicyRequest message. Also converts values to other types if specified.
                 * @param message DeletePolicyRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v2beta.DeletePolicyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this DeletePolicyRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for DeletePolicyRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a PolicyOperationMetadata. */
            interface IPolicyOperationMetadata {

                /** PolicyOperationMetadata createTime */
                createTime?: (google.protobuf.ITimestamp|null);
            }

            /** Represents a PolicyOperationMetadata. */
            class PolicyOperationMetadata implements IPolicyOperationMetadata {

                /**
                 * Constructs a new PolicyOperationMetadata.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v2beta.IPolicyOperationMetadata);

                /** PolicyOperationMetadata createTime. */
                public createTime?: (google.protobuf.ITimestamp|null);

                /**
                 * Creates a new PolicyOperationMetadata instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns PolicyOperationMetadata instance
                 */
                public static create(properties?: google.iam.v2beta.IPolicyOperationMetadata): google.iam.v2beta.PolicyOperationMetadata;

                /**
                 * Encodes the specified PolicyOperationMetadata message. Does not implicitly {@link google.iam.v2beta.PolicyOperationMetadata.verify|verify} messages.
                 * @param message PolicyOperationMetadata message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v2beta.IPolicyOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified PolicyOperationMetadata message, length delimited. Does not implicitly {@link google.iam.v2beta.PolicyOperationMetadata.verify|verify} messages.
                 * @param message PolicyOperationMetadata message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v2beta.IPolicyOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a PolicyOperationMetadata message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns PolicyOperationMetadata
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v2beta.PolicyOperationMetadata;

                /**
                 * Decodes a PolicyOperationMetadata message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns PolicyOperationMetadata
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v2beta.PolicyOperationMetadata;

                /**
                 * Verifies a PolicyOperationMetadata message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a PolicyOperationMetadata message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns PolicyOperationMetadata
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v2beta.PolicyOperationMetadata;

                /**
                 * Creates a plain object from a PolicyOperationMetadata message. Also converts values to other types if specified.
                 * @param message PolicyOperationMetadata
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v2beta.PolicyOperationMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this PolicyOperationMetadata to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for PolicyOperationMetadata
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Namespace v3. */
        namespace v3 {

            /** Properties of an OperationMetadata. */
            interface IOperationMetadata {

                /** OperationMetadata createTime */
                createTime?: (google.protobuf.ITimestamp|null);

                /** OperationMetadata endTime */
                endTime?: (google.protobuf.ITimestamp|null);

                /** OperationMetadata target */
                target?: (string|null);

                /** OperationMetadata verb */
                verb?: (string|null);

                /** OperationMetadata statusMessage */
                statusMessage?: (string|null);

                /** OperationMetadata requestedCancellation */
                requestedCancellation?: (boolean|null);

                /** OperationMetadata apiVersion */
                apiVersion?: (string|null);
            }

            /** Represents an OperationMetadata. */
            class OperationMetadata implements IOperationMetadata {

                /**
                 * Constructs a new OperationMetadata.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v3.IOperationMetadata);

                /** OperationMetadata createTime. */
                public createTime?: (google.protobuf.ITimestamp|null);

                /** OperationMetadata endTime. */
                public endTime?: (google.protobuf.ITimestamp|null);

                /** OperationMetadata target. */
                public target: string;

                /** OperationMetadata verb. */
                public verb: string;

                /** OperationMetadata statusMessage. */
                public statusMessage: string;

                /** OperationMetadata requestedCancellation. */
                public requestedCancellation: boolean;

                /** OperationMetadata apiVersion. */
                public apiVersion: string;

                /**
                 * Creates a new OperationMetadata instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns OperationMetadata instance
                 */
                public static create(properties?: google.iam.v3.IOperationMetadata): google.iam.v3.OperationMetadata;

                /**
                 * Encodes the specified OperationMetadata message. Does not implicitly {@link google.iam.v3.OperationMetadata.verify|verify} messages.
                 * @param message OperationMetadata message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v3.IOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified OperationMetadata message, length delimited. Does not implicitly {@link google.iam.v3.OperationMetadata.verify|verify} messages.
                 * @param message OperationMetadata message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v3.IOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an OperationMetadata message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns OperationMetadata
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v3.OperationMetadata;

                /**
                 * Decodes an OperationMetadata message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns OperationMetadata
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v3.OperationMetadata;

                /**
                 * Verifies an OperationMetadata message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an OperationMetadata message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns OperationMetadata
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v3.OperationMetadata;

                /**
                 * Creates a plain object from an OperationMetadata message. Also converts values to other types if specified.
                 * @param message OperationMetadata
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v3.OperationMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this OperationMetadata to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for OperationMetadata
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a PolicyBinding. */
            interface IPolicyBinding {

                /** PolicyBinding name */
                name?: (string|null);

                /** PolicyBinding uid */
                uid?: (string|null);

                /** PolicyBinding etag */
                etag?: (string|null);

                /** PolicyBinding displayName */
                displayName?: (string|null);

                /** PolicyBinding annotations */
                annotations?: ({ [k: string]: string }|null);

                /** PolicyBinding target */
                target?: (google.iam.v3.PolicyBinding.ITarget|null);

                /** PolicyBinding policyKind */
                policyKind?: (google.iam.v3.PolicyBinding.PolicyKind|keyof typeof google.iam.v3.PolicyBinding.PolicyKind|null);

                /** PolicyBinding policy */
                policy?: (string|null);

                /** PolicyBinding policyUid */
                policyUid?: (string|null);

                /** PolicyBinding condition */
                condition?: (google.type.IExpr|null);

                /** PolicyBinding createTime */
                createTime?: (google.protobuf.ITimestamp|null);

                /** PolicyBinding updateTime */
                updateTime?: (google.protobuf.ITimestamp|null);
            }

            /** Represents a PolicyBinding. */
            class PolicyBinding implements IPolicyBinding {

                /**
                 * Constructs a new PolicyBinding.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v3.IPolicyBinding);

                /** PolicyBinding name. */
                public name: string;

                /** PolicyBinding uid. */
                public uid: string;

                /** PolicyBinding etag. */
                public etag: string;

                /** PolicyBinding displayName. */
                public displayName: string;

                /** PolicyBinding annotations. */
                public annotations: { [k: string]: string };

                /** PolicyBinding target. */
                public target?: (google.iam.v3.PolicyBinding.ITarget|null);

                /** PolicyBinding policyKind. */
                public policyKind: (google.iam.v3.PolicyBinding.PolicyKind|keyof typeof google.iam.v3.PolicyBinding.PolicyKind);

                /** PolicyBinding policy. */
                public policy: string;

                /** PolicyBinding policyUid. */
                public policyUid: string;

                /** PolicyBinding condition. */
                public condition?: (google.type.IExpr|null);

                /** PolicyBinding createTime. */
                public createTime?: (google.protobuf.ITimestamp|null);

                /** PolicyBinding updateTime. */
                public updateTime?: (google.protobuf.ITimestamp|null);

                /**
                 * Creates a new PolicyBinding instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns PolicyBinding instance
                 */
                public static create(properties?: google.iam.v3.IPolicyBinding): google.iam.v3.PolicyBinding;

                /**
                 * Encodes the specified PolicyBinding message. Does not implicitly {@link google.iam.v3.PolicyBinding.verify|verify} messages.
                 * @param message PolicyBinding message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v3.IPolicyBinding, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified PolicyBinding message, length delimited. Does not implicitly {@link google.iam.v3.PolicyBinding.verify|verify} messages.
                 * @param message PolicyBinding message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v3.IPolicyBinding, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a PolicyBinding message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns PolicyBinding
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v3.PolicyBinding;

                /**
                 * Decodes a PolicyBinding message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns PolicyBinding
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v3.PolicyBinding;

                /**
                 * Verifies a PolicyBinding message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a PolicyBinding message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns PolicyBinding
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v3.PolicyBinding;

                /**
                 * Creates a plain object from a PolicyBinding message. Also converts values to other types if specified.
                 * @param message PolicyBinding
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v3.PolicyBinding, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this PolicyBinding to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for PolicyBinding
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace PolicyBinding {

                /** Properties of a Target. */
                interface ITarget {

                    /** Target principalSet */
                    principalSet?: (string|null);
                }

                /** Represents a Target. */
                class Target implements ITarget {

                    /**
                     * Constructs a new Target.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.iam.v3.PolicyBinding.ITarget);

                    /** Target principalSet. */
                    public principalSet?: (string|null);

                    /** Target target. */
                    public target?: "principalSet";

                    /**
                     * Creates a new Target instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Target instance
                     */
                    public static create(properties?: google.iam.v3.PolicyBinding.ITarget): google.iam.v3.PolicyBinding.Target;

                    /**
                     * Encodes the specified Target message. Does not implicitly {@link google.iam.v3.PolicyBinding.Target.verify|verify} messages.
                     * @param message Target message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.iam.v3.PolicyBinding.ITarget, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Target message, length delimited. Does not implicitly {@link google.iam.v3.PolicyBinding.Target.verify|verify} messages.
                     * @param message Target message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.iam.v3.PolicyBinding.ITarget, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Target message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Target
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v3.PolicyBinding.Target;

                    /**
                     * Decodes a Target message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Target
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v3.PolicyBinding.Target;

                    /**
                     * Verifies a Target message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Target message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Target
                     */
                    public static fromObject(object: { [k: string]: any }): google.iam.v3.PolicyBinding.Target;

                    /**
                     * Creates a plain object from a Target message. Also converts values to other types if specified.
                     * @param message Target
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.iam.v3.PolicyBinding.Target, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Target to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Target
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** PolicyKind enum. */
                enum PolicyKind {
                    POLICY_KIND_UNSPECIFIED = 0,
                    PRINCIPAL_ACCESS_BOUNDARY = 1
                }
            }

            /** Represents a PolicyBindings */
            class PolicyBindings extends $protobuf.rpc.Service {

                /**
                 * Constructs a new PolicyBindings service.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 */
                constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                /**
                 * Creates new PolicyBindings service using the specified rpc implementation.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 * @returns RPC service. Useful where requests and/or responses are streamed.
                 */
                public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): PolicyBindings;

                /**
                 * Calls CreatePolicyBinding.
                 * @param request CreatePolicyBindingRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Operation
                 */
                public createPolicyBinding(request: google.iam.v3.ICreatePolicyBindingRequest, callback: google.iam.v3.PolicyBindings.CreatePolicyBindingCallback): void;

                /**
                 * Calls CreatePolicyBinding.
                 * @param request CreatePolicyBindingRequest message or plain object
                 * @returns Promise
                 */
                public createPolicyBinding(request: google.iam.v3.ICreatePolicyBindingRequest): Promise<google.longrunning.Operation>;

                /**
                 * Calls GetPolicyBinding.
                 * @param request GetPolicyBindingRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and PolicyBinding
                 */
                public getPolicyBinding(request: google.iam.v3.IGetPolicyBindingRequest, callback: google.iam.v3.PolicyBindings.GetPolicyBindingCallback): void;

                /**
                 * Calls GetPolicyBinding.
                 * @param request GetPolicyBindingRequest message or plain object
                 * @returns Promise
                 */
                public getPolicyBinding(request: google.iam.v3.IGetPolicyBindingRequest): Promise<google.iam.v3.PolicyBinding>;

                /**
                 * Calls UpdatePolicyBinding.
                 * @param request UpdatePolicyBindingRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Operation
                 */
                public updatePolicyBinding(request: google.iam.v3.IUpdatePolicyBindingRequest, callback: google.iam.v3.PolicyBindings.UpdatePolicyBindingCallback): void;

                /**
                 * Calls UpdatePolicyBinding.
                 * @param request UpdatePolicyBindingRequest message or plain object
                 * @returns Promise
                 */
                public updatePolicyBinding(request: google.iam.v3.IUpdatePolicyBindingRequest): Promise<google.longrunning.Operation>;

                /**
                 * Calls DeletePolicyBinding.
                 * @param request DeletePolicyBindingRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Operation
                 */
                public deletePolicyBinding(request: google.iam.v3.IDeletePolicyBindingRequest, callback: google.iam.v3.PolicyBindings.DeletePolicyBindingCallback): void;

                /**
                 * Calls DeletePolicyBinding.
                 * @param request DeletePolicyBindingRequest message or plain object
                 * @returns Promise
                 */
                public deletePolicyBinding(request: google.iam.v3.IDeletePolicyBindingRequest): Promise<google.longrunning.Operation>;

                /**
                 * Calls ListPolicyBindings.
                 * @param request ListPolicyBindingsRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and ListPolicyBindingsResponse
                 */
                public listPolicyBindings(request: google.iam.v3.IListPolicyBindingsRequest, callback: google.iam.v3.PolicyBindings.ListPolicyBindingsCallback): void;

                /**
                 * Calls ListPolicyBindings.
                 * @param request ListPolicyBindingsRequest message or plain object
                 * @returns Promise
                 */
                public listPolicyBindings(request: google.iam.v3.IListPolicyBindingsRequest): Promise<google.iam.v3.ListPolicyBindingsResponse>;

                /**
                 * Calls SearchTargetPolicyBindings.
                 * @param request SearchTargetPolicyBindingsRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and SearchTargetPolicyBindingsResponse
                 */
                public searchTargetPolicyBindings(request: google.iam.v3.ISearchTargetPolicyBindingsRequest, callback: google.iam.v3.PolicyBindings.SearchTargetPolicyBindingsCallback): void;

                /**
                 * Calls SearchTargetPolicyBindings.
                 * @param request SearchTargetPolicyBindingsRequest message or plain object
                 * @returns Promise
                 */
                public searchTargetPolicyBindings(request: google.iam.v3.ISearchTargetPolicyBindingsRequest): Promise<google.iam.v3.SearchTargetPolicyBindingsResponse>;
            }

            namespace PolicyBindings {

                /**
                 * Callback as used by {@link google.iam.v3.PolicyBindings|createPolicyBinding}.
                 * @param error Error, if any
                 * @param [response] Operation
                 */
                type CreatePolicyBindingCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                /**
                 * Callback as used by {@link google.iam.v3.PolicyBindings|getPolicyBinding}.
                 * @param error Error, if any
                 * @param [response] PolicyBinding
                 */
                type GetPolicyBindingCallback = (error: (Error|null), response?: google.iam.v3.PolicyBinding) => void;

                /**
                 * Callback as used by {@link google.iam.v3.PolicyBindings|updatePolicyBinding}.
                 * @param error Error, if any
                 * @param [response] Operation
                 */
                type UpdatePolicyBindingCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                /**
                 * Callback as used by {@link google.iam.v3.PolicyBindings|deletePolicyBinding}.
                 * @param error Error, if any
                 * @param [response] Operation
                 */
                type DeletePolicyBindingCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                /**
                 * Callback as used by {@link google.iam.v3.PolicyBindings|listPolicyBindings}.
                 * @param error Error, if any
                 * @param [response] ListPolicyBindingsResponse
                 */
                type ListPolicyBindingsCallback = (error: (Error|null), response?: google.iam.v3.ListPolicyBindingsResponse) => void;

                /**
                 * Callback as used by {@link google.iam.v3.PolicyBindings|searchTargetPolicyBindings}.
                 * @param error Error, if any
                 * @param [response] SearchTargetPolicyBindingsResponse
                 */
                type SearchTargetPolicyBindingsCallback = (error: (Error|null), response?: google.iam.v3.SearchTargetPolicyBindingsResponse) => void;
            }

            /** Properties of a CreatePolicyBindingRequest. */
            interface ICreatePolicyBindingRequest {

                /** CreatePolicyBindingRequest parent */
                parent?: (string|null);

                /** CreatePolicyBindingRequest policyBindingId */
                policyBindingId?: (string|null);

                /** CreatePolicyBindingRequest policyBinding */
                policyBinding?: (google.iam.v3.IPolicyBinding|null);

                /** CreatePolicyBindingRequest validateOnly */
                validateOnly?: (boolean|null);
            }

            /** Represents a CreatePolicyBindingRequest. */
            class CreatePolicyBindingRequest implements ICreatePolicyBindingRequest {

                /**
                 * Constructs a new CreatePolicyBindingRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v3.ICreatePolicyBindingRequest);

                /** CreatePolicyBindingRequest parent. */
                public parent: string;

                /** CreatePolicyBindingRequest policyBindingId. */
                public policyBindingId: string;

                /** CreatePolicyBindingRequest policyBinding. */
                public policyBinding?: (google.iam.v3.IPolicyBinding|null);

                /** CreatePolicyBindingRequest validateOnly. */
                public validateOnly: boolean;

                /**
                 * Creates a new CreatePolicyBindingRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CreatePolicyBindingRequest instance
                 */
                public static create(properties?: google.iam.v3.ICreatePolicyBindingRequest): google.iam.v3.CreatePolicyBindingRequest;

                /**
                 * Encodes the specified CreatePolicyBindingRequest message. Does not implicitly {@link google.iam.v3.CreatePolicyBindingRequest.verify|verify} messages.
                 * @param message CreatePolicyBindingRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v3.ICreatePolicyBindingRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CreatePolicyBindingRequest message, length delimited. Does not implicitly {@link google.iam.v3.CreatePolicyBindingRequest.verify|verify} messages.
                 * @param message CreatePolicyBindingRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v3.ICreatePolicyBindingRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CreatePolicyBindingRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CreatePolicyBindingRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v3.CreatePolicyBindingRequest;

                /**
                 * Decodes a CreatePolicyBindingRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CreatePolicyBindingRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v3.CreatePolicyBindingRequest;

                /**
                 * Verifies a CreatePolicyBindingRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CreatePolicyBindingRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CreatePolicyBindingRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v3.CreatePolicyBindingRequest;

                /**
                 * Creates a plain object from a CreatePolicyBindingRequest message. Also converts values to other types if specified.
                 * @param message CreatePolicyBindingRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v3.CreatePolicyBindingRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CreatePolicyBindingRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for CreatePolicyBindingRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a GetPolicyBindingRequest. */
            interface IGetPolicyBindingRequest {

                /** GetPolicyBindingRequest name */
                name?: (string|null);
            }

            /** Represents a GetPolicyBindingRequest. */
            class GetPolicyBindingRequest implements IGetPolicyBindingRequest {

                /**
                 * Constructs a new GetPolicyBindingRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v3.IGetPolicyBindingRequest);

                /** GetPolicyBindingRequest name. */
                public name: string;

                /**
                 * Creates a new GetPolicyBindingRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GetPolicyBindingRequest instance
                 */
                public static create(properties?: google.iam.v3.IGetPolicyBindingRequest): google.iam.v3.GetPolicyBindingRequest;

                /**
                 * Encodes the specified GetPolicyBindingRequest message. Does not implicitly {@link google.iam.v3.GetPolicyBindingRequest.verify|verify} messages.
                 * @param message GetPolicyBindingRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v3.IGetPolicyBindingRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GetPolicyBindingRequest message, length delimited. Does not implicitly {@link google.iam.v3.GetPolicyBindingRequest.verify|verify} messages.
                 * @param message GetPolicyBindingRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v3.IGetPolicyBindingRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GetPolicyBindingRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GetPolicyBindingRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v3.GetPolicyBindingRequest;

                /**
                 * Decodes a GetPolicyBindingRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GetPolicyBindingRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v3.GetPolicyBindingRequest;

                /**
                 * Verifies a GetPolicyBindingRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GetPolicyBindingRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GetPolicyBindingRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v3.GetPolicyBindingRequest;

                /**
                 * Creates a plain object from a GetPolicyBindingRequest message. Also converts values to other types if specified.
                 * @param message GetPolicyBindingRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v3.GetPolicyBindingRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GetPolicyBindingRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for GetPolicyBindingRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of an UpdatePolicyBindingRequest. */
            interface IUpdatePolicyBindingRequest {

                /** UpdatePolicyBindingRequest policyBinding */
                policyBinding?: (google.iam.v3.IPolicyBinding|null);

                /** UpdatePolicyBindingRequest validateOnly */
                validateOnly?: (boolean|null);

                /** UpdatePolicyBindingRequest updateMask */
                updateMask?: (google.protobuf.IFieldMask|null);
            }

            /** Represents an UpdatePolicyBindingRequest. */
            class UpdatePolicyBindingRequest implements IUpdatePolicyBindingRequest {

                /**
                 * Constructs a new UpdatePolicyBindingRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v3.IUpdatePolicyBindingRequest);

                /** UpdatePolicyBindingRequest policyBinding. */
                public policyBinding?: (google.iam.v3.IPolicyBinding|null);

                /** UpdatePolicyBindingRequest validateOnly. */
                public validateOnly: boolean;

                /** UpdatePolicyBindingRequest updateMask. */
                public updateMask?: (google.protobuf.IFieldMask|null);

                /**
                 * Creates a new UpdatePolicyBindingRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns UpdatePolicyBindingRequest instance
                 */
                public static create(properties?: google.iam.v3.IUpdatePolicyBindingRequest): google.iam.v3.UpdatePolicyBindingRequest;

                /**
                 * Encodes the specified UpdatePolicyBindingRequest message. Does not implicitly {@link google.iam.v3.UpdatePolicyBindingRequest.verify|verify} messages.
                 * @param message UpdatePolicyBindingRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v3.IUpdatePolicyBindingRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified UpdatePolicyBindingRequest message, length delimited. Does not implicitly {@link google.iam.v3.UpdatePolicyBindingRequest.verify|verify} messages.
                 * @param message UpdatePolicyBindingRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v3.IUpdatePolicyBindingRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an UpdatePolicyBindingRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns UpdatePolicyBindingRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v3.UpdatePolicyBindingRequest;

                /**
                 * Decodes an UpdatePolicyBindingRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns UpdatePolicyBindingRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v3.UpdatePolicyBindingRequest;

                /**
                 * Verifies an UpdatePolicyBindingRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an UpdatePolicyBindingRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns UpdatePolicyBindingRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v3.UpdatePolicyBindingRequest;

                /**
                 * Creates a plain object from an UpdatePolicyBindingRequest message. Also converts values to other types if specified.
                 * @param message UpdatePolicyBindingRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v3.UpdatePolicyBindingRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this UpdatePolicyBindingRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for UpdatePolicyBindingRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a DeletePolicyBindingRequest. */
            interface IDeletePolicyBindingRequest {

                /** DeletePolicyBindingRequest name */
                name?: (string|null);

                /** DeletePolicyBindingRequest etag */
                etag?: (string|null);

                /** DeletePolicyBindingRequest validateOnly */
                validateOnly?: (boolean|null);
            }

            /** Represents a DeletePolicyBindingRequest. */
            class DeletePolicyBindingRequest implements IDeletePolicyBindingRequest {

                /**
                 * Constructs a new DeletePolicyBindingRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v3.IDeletePolicyBindingRequest);

                /** DeletePolicyBindingRequest name. */
                public name: string;

                /** DeletePolicyBindingRequest etag. */
                public etag: string;

                /** DeletePolicyBindingRequest validateOnly. */
                public validateOnly: boolean;

                /**
                 * Creates a new DeletePolicyBindingRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns DeletePolicyBindingRequest instance
                 */
                public static create(properties?: google.iam.v3.IDeletePolicyBindingRequest): google.iam.v3.DeletePolicyBindingRequest;

                /**
                 * Encodes the specified DeletePolicyBindingRequest message. Does not implicitly {@link google.iam.v3.DeletePolicyBindingRequest.verify|verify} messages.
                 * @param message DeletePolicyBindingRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v3.IDeletePolicyBindingRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified DeletePolicyBindingRequest message, length delimited. Does not implicitly {@link google.iam.v3.DeletePolicyBindingRequest.verify|verify} messages.
                 * @param message DeletePolicyBindingRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v3.IDeletePolicyBindingRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DeletePolicyBindingRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns DeletePolicyBindingRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v3.DeletePolicyBindingRequest;

                /**
                 * Decodes a DeletePolicyBindingRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns DeletePolicyBindingRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v3.DeletePolicyBindingRequest;

                /**
                 * Verifies a DeletePolicyBindingRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a DeletePolicyBindingRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns DeletePolicyBindingRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v3.DeletePolicyBindingRequest;

                /**
                 * Creates a plain object from a DeletePolicyBindingRequest message. Also converts values to other types if specified.
                 * @param message DeletePolicyBindingRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v3.DeletePolicyBindingRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this DeletePolicyBindingRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for DeletePolicyBindingRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a ListPolicyBindingsRequest. */
            interface IListPolicyBindingsRequest {

                /** ListPolicyBindingsRequest parent */
                parent?: (string|null);

                /** ListPolicyBindingsRequest pageSize */
                pageSize?: (number|null);

                /** ListPolicyBindingsRequest pageToken */
                pageToken?: (string|null);

                /** ListPolicyBindingsRequest filter */
                filter?: (string|null);
            }

            /** Represents a ListPolicyBindingsRequest. */
            class ListPolicyBindingsRequest implements IListPolicyBindingsRequest {

                /**
                 * Constructs a new ListPolicyBindingsRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v3.IListPolicyBindingsRequest);

                /** ListPolicyBindingsRequest parent. */
                public parent: string;

                /** ListPolicyBindingsRequest pageSize. */
                public pageSize: number;

                /** ListPolicyBindingsRequest pageToken. */
                public pageToken: string;

                /** ListPolicyBindingsRequest filter. */
                public filter: string;

                /**
                 * Creates a new ListPolicyBindingsRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ListPolicyBindingsRequest instance
                 */
                public static create(properties?: google.iam.v3.IListPolicyBindingsRequest): google.iam.v3.ListPolicyBindingsRequest;

                /**
                 * Encodes the specified ListPolicyBindingsRequest message. Does not implicitly {@link google.iam.v3.ListPolicyBindingsRequest.verify|verify} messages.
                 * @param message ListPolicyBindingsRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v3.IListPolicyBindingsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ListPolicyBindingsRequest message, length delimited. Does not implicitly {@link google.iam.v3.ListPolicyBindingsRequest.verify|verify} messages.
                 * @param message ListPolicyBindingsRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v3.IListPolicyBindingsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ListPolicyBindingsRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ListPolicyBindingsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v3.ListPolicyBindingsRequest;

                /**
                 * Decodes a ListPolicyBindingsRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ListPolicyBindingsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v3.ListPolicyBindingsRequest;

                /**
                 * Verifies a ListPolicyBindingsRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ListPolicyBindingsRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ListPolicyBindingsRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v3.ListPolicyBindingsRequest;

                /**
                 * Creates a plain object from a ListPolicyBindingsRequest message. Also converts values to other types if specified.
                 * @param message ListPolicyBindingsRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v3.ListPolicyBindingsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ListPolicyBindingsRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ListPolicyBindingsRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a ListPolicyBindingsResponse. */
            interface IListPolicyBindingsResponse {

                /** ListPolicyBindingsResponse policyBindings */
                policyBindings?: (google.iam.v3.IPolicyBinding[]|null);

                /** ListPolicyBindingsResponse nextPageToken */
                nextPageToken?: (string|null);
            }

            /** Represents a ListPolicyBindingsResponse. */
            class ListPolicyBindingsResponse implements IListPolicyBindingsResponse {

                /**
                 * Constructs a new ListPolicyBindingsResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v3.IListPolicyBindingsResponse);

                /** ListPolicyBindingsResponse policyBindings. */
                public policyBindings: google.iam.v3.IPolicyBinding[];

                /** ListPolicyBindingsResponse nextPageToken. */
                public nextPageToken: string;

                /**
                 * Creates a new ListPolicyBindingsResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ListPolicyBindingsResponse instance
                 */
                public static create(properties?: google.iam.v3.IListPolicyBindingsResponse): google.iam.v3.ListPolicyBindingsResponse;

                /**
                 * Encodes the specified ListPolicyBindingsResponse message. Does not implicitly {@link google.iam.v3.ListPolicyBindingsResponse.verify|verify} messages.
                 * @param message ListPolicyBindingsResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v3.IListPolicyBindingsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ListPolicyBindingsResponse message, length delimited. Does not implicitly {@link google.iam.v3.ListPolicyBindingsResponse.verify|verify} messages.
                 * @param message ListPolicyBindingsResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v3.IListPolicyBindingsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ListPolicyBindingsResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ListPolicyBindingsResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v3.ListPolicyBindingsResponse;

                /**
                 * Decodes a ListPolicyBindingsResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ListPolicyBindingsResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v3.ListPolicyBindingsResponse;

                /**
                 * Verifies a ListPolicyBindingsResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ListPolicyBindingsResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ListPolicyBindingsResponse
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v3.ListPolicyBindingsResponse;

                /**
                 * Creates a plain object from a ListPolicyBindingsResponse message. Also converts values to other types if specified.
                 * @param message ListPolicyBindingsResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v3.ListPolicyBindingsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ListPolicyBindingsResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ListPolicyBindingsResponse
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a SearchTargetPolicyBindingsRequest. */
            interface ISearchTargetPolicyBindingsRequest {

                /** SearchTargetPolicyBindingsRequest target */
                target?: (string|null);

                /** SearchTargetPolicyBindingsRequest pageSize */
                pageSize?: (number|null);

                /** SearchTargetPolicyBindingsRequest pageToken */
                pageToken?: (string|null);

                /** SearchTargetPolicyBindingsRequest parent */
                parent?: (string|null);
            }

            /** Represents a SearchTargetPolicyBindingsRequest. */
            class SearchTargetPolicyBindingsRequest implements ISearchTargetPolicyBindingsRequest {

                /**
                 * Constructs a new SearchTargetPolicyBindingsRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v3.ISearchTargetPolicyBindingsRequest);

                /** SearchTargetPolicyBindingsRequest target. */
                public target: string;

                /** SearchTargetPolicyBindingsRequest pageSize. */
                public pageSize: number;

                /** SearchTargetPolicyBindingsRequest pageToken. */
                public pageToken: string;

                /** SearchTargetPolicyBindingsRequest parent. */
                public parent: string;

                /**
                 * Creates a new SearchTargetPolicyBindingsRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SearchTargetPolicyBindingsRequest instance
                 */
                public static create(properties?: google.iam.v3.ISearchTargetPolicyBindingsRequest): google.iam.v3.SearchTargetPolicyBindingsRequest;

                /**
                 * Encodes the specified SearchTargetPolicyBindingsRequest message. Does not implicitly {@link google.iam.v3.SearchTargetPolicyBindingsRequest.verify|verify} messages.
                 * @param message SearchTargetPolicyBindingsRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v3.ISearchTargetPolicyBindingsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SearchTargetPolicyBindingsRequest message, length delimited. Does not implicitly {@link google.iam.v3.SearchTargetPolicyBindingsRequest.verify|verify} messages.
                 * @param message SearchTargetPolicyBindingsRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v3.ISearchTargetPolicyBindingsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SearchTargetPolicyBindingsRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SearchTargetPolicyBindingsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v3.SearchTargetPolicyBindingsRequest;

                /**
                 * Decodes a SearchTargetPolicyBindingsRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SearchTargetPolicyBindingsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v3.SearchTargetPolicyBindingsRequest;

                /**
                 * Verifies a SearchTargetPolicyBindingsRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SearchTargetPolicyBindingsRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SearchTargetPolicyBindingsRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v3.SearchTargetPolicyBindingsRequest;

                /**
                 * Creates a plain object from a SearchTargetPolicyBindingsRequest message. Also converts values to other types if specified.
                 * @param message SearchTargetPolicyBindingsRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v3.SearchTargetPolicyBindingsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SearchTargetPolicyBindingsRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for SearchTargetPolicyBindingsRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a SearchTargetPolicyBindingsResponse. */
            interface ISearchTargetPolicyBindingsResponse {

                /** SearchTargetPolicyBindingsResponse policyBindings */
                policyBindings?: (google.iam.v3.IPolicyBinding[]|null);

                /** SearchTargetPolicyBindingsResponse nextPageToken */
                nextPageToken?: (string|null);
            }

            /** Represents a SearchTargetPolicyBindingsResponse. */
            class SearchTargetPolicyBindingsResponse implements ISearchTargetPolicyBindingsResponse {

                /**
                 * Constructs a new SearchTargetPolicyBindingsResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v3.ISearchTargetPolicyBindingsResponse);

                /** SearchTargetPolicyBindingsResponse policyBindings. */
                public policyBindings: google.iam.v3.IPolicyBinding[];

                /** SearchTargetPolicyBindingsResponse nextPageToken. */
                public nextPageToken: string;

                /**
                 * Creates a new SearchTargetPolicyBindingsResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SearchTargetPolicyBindingsResponse instance
                 */
                public static create(properties?: google.iam.v3.ISearchTargetPolicyBindingsResponse): google.iam.v3.SearchTargetPolicyBindingsResponse;

                /**
                 * Encodes the specified SearchTargetPolicyBindingsResponse message. Does not implicitly {@link google.iam.v3.SearchTargetPolicyBindingsResponse.verify|verify} messages.
                 * @param message SearchTargetPolicyBindingsResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v3.ISearchTargetPolicyBindingsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SearchTargetPolicyBindingsResponse message, length delimited. Does not implicitly {@link google.iam.v3.SearchTargetPolicyBindingsResponse.verify|verify} messages.
                 * @param message SearchTargetPolicyBindingsResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v3.ISearchTargetPolicyBindingsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SearchTargetPolicyBindingsResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SearchTargetPolicyBindingsResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v3.SearchTargetPolicyBindingsResponse;

                /**
                 * Decodes a SearchTargetPolicyBindingsResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SearchTargetPolicyBindingsResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v3.SearchTargetPolicyBindingsResponse;

                /**
                 * Verifies a SearchTargetPolicyBindingsResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SearchTargetPolicyBindingsResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SearchTargetPolicyBindingsResponse
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v3.SearchTargetPolicyBindingsResponse;

                /**
                 * Creates a plain object from a SearchTargetPolicyBindingsResponse message. Also converts values to other types if specified.
                 * @param message SearchTargetPolicyBindingsResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v3.SearchTargetPolicyBindingsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SearchTargetPolicyBindingsResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for SearchTargetPolicyBindingsResponse
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Represents a PrincipalAccessBoundaryPolicies */
            class PrincipalAccessBoundaryPolicies extends $protobuf.rpc.Service {

                /**
                 * Constructs a new PrincipalAccessBoundaryPolicies service.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 */
                constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                /**
                 * Creates new PrincipalAccessBoundaryPolicies service using the specified rpc implementation.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 * @returns RPC service. Useful where requests and/or responses are streamed.
                 */
                public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): PrincipalAccessBoundaryPolicies;

                /**
                 * Calls CreatePrincipalAccessBoundaryPolicy.
                 * @param request CreatePrincipalAccessBoundaryPolicyRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Operation
                 */
                public createPrincipalAccessBoundaryPolicy(request: google.iam.v3.ICreatePrincipalAccessBoundaryPolicyRequest, callback: google.iam.v3.PrincipalAccessBoundaryPolicies.CreatePrincipalAccessBoundaryPolicyCallback): void;

                /**
                 * Calls CreatePrincipalAccessBoundaryPolicy.
                 * @param request CreatePrincipalAccessBoundaryPolicyRequest message or plain object
                 * @returns Promise
                 */
                public createPrincipalAccessBoundaryPolicy(request: google.iam.v3.ICreatePrincipalAccessBoundaryPolicyRequest): Promise<google.longrunning.Operation>;

                /**
                 * Calls GetPrincipalAccessBoundaryPolicy.
                 * @param request GetPrincipalAccessBoundaryPolicyRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and PrincipalAccessBoundaryPolicy
                 */
                public getPrincipalAccessBoundaryPolicy(request: google.iam.v3.IGetPrincipalAccessBoundaryPolicyRequest, callback: google.iam.v3.PrincipalAccessBoundaryPolicies.GetPrincipalAccessBoundaryPolicyCallback): void;

                /**
                 * Calls GetPrincipalAccessBoundaryPolicy.
                 * @param request GetPrincipalAccessBoundaryPolicyRequest message or plain object
                 * @returns Promise
                 */
                public getPrincipalAccessBoundaryPolicy(request: google.iam.v3.IGetPrincipalAccessBoundaryPolicyRequest): Promise<google.iam.v3.PrincipalAccessBoundaryPolicy>;

                /**
                 * Calls UpdatePrincipalAccessBoundaryPolicy.
                 * @param request UpdatePrincipalAccessBoundaryPolicyRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Operation
                 */
                public updatePrincipalAccessBoundaryPolicy(request: google.iam.v3.IUpdatePrincipalAccessBoundaryPolicyRequest, callback: google.iam.v3.PrincipalAccessBoundaryPolicies.UpdatePrincipalAccessBoundaryPolicyCallback): void;

                /**
                 * Calls UpdatePrincipalAccessBoundaryPolicy.
                 * @param request UpdatePrincipalAccessBoundaryPolicyRequest message or plain object
                 * @returns Promise
                 */
                public updatePrincipalAccessBoundaryPolicy(request: google.iam.v3.IUpdatePrincipalAccessBoundaryPolicyRequest): Promise<google.longrunning.Operation>;

                /**
                 * Calls DeletePrincipalAccessBoundaryPolicy.
                 * @param request DeletePrincipalAccessBoundaryPolicyRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Operation
                 */
                public deletePrincipalAccessBoundaryPolicy(request: google.iam.v3.IDeletePrincipalAccessBoundaryPolicyRequest, callback: google.iam.v3.PrincipalAccessBoundaryPolicies.DeletePrincipalAccessBoundaryPolicyCallback): void;

                /**
                 * Calls DeletePrincipalAccessBoundaryPolicy.
                 * @param request DeletePrincipalAccessBoundaryPolicyRequest message or plain object
                 * @returns Promise
                 */
                public deletePrincipalAccessBoundaryPolicy(request: google.iam.v3.IDeletePrincipalAccessBoundaryPolicyRequest): Promise<google.longrunning.Operation>;

                /**
                 * Calls ListPrincipalAccessBoundaryPolicies.
                 * @param request ListPrincipalAccessBoundaryPoliciesRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and ListPrincipalAccessBoundaryPoliciesResponse
                 */
                public listPrincipalAccessBoundaryPolicies(request: google.iam.v3.IListPrincipalAccessBoundaryPoliciesRequest, callback: google.iam.v3.PrincipalAccessBoundaryPolicies.ListPrincipalAccessBoundaryPoliciesCallback): void;

                /**
                 * Calls ListPrincipalAccessBoundaryPolicies.
                 * @param request ListPrincipalAccessBoundaryPoliciesRequest message or plain object
                 * @returns Promise
                 */
                public listPrincipalAccessBoundaryPolicies(request: google.iam.v3.IListPrincipalAccessBoundaryPoliciesRequest): Promise<google.iam.v3.ListPrincipalAccessBoundaryPoliciesResponse>;

                /**
                 * Calls SearchPrincipalAccessBoundaryPolicyBindings.
                 * @param request SearchPrincipalAccessBoundaryPolicyBindingsRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and SearchPrincipalAccessBoundaryPolicyBindingsResponse
                 */
                public searchPrincipalAccessBoundaryPolicyBindings(request: google.iam.v3.ISearchPrincipalAccessBoundaryPolicyBindingsRequest, callback: google.iam.v3.PrincipalAccessBoundaryPolicies.SearchPrincipalAccessBoundaryPolicyBindingsCallback): void;

                /**
                 * Calls SearchPrincipalAccessBoundaryPolicyBindings.
                 * @param request SearchPrincipalAccessBoundaryPolicyBindingsRequest message or plain object
                 * @returns Promise
                 */
                public searchPrincipalAccessBoundaryPolicyBindings(request: google.iam.v3.ISearchPrincipalAccessBoundaryPolicyBindingsRequest): Promise<google.iam.v3.SearchPrincipalAccessBoundaryPolicyBindingsResponse>;
            }

            namespace PrincipalAccessBoundaryPolicies {

                /**
                 * Callback as used by {@link google.iam.v3.PrincipalAccessBoundaryPolicies|createPrincipalAccessBoundaryPolicy}.
                 * @param error Error, if any
                 * @param [response] Operation
                 */
                type CreatePrincipalAccessBoundaryPolicyCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                /**
                 * Callback as used by {@link google.iam.v3.PrincipalAccessBoundaryPolicies|getPrincipalAccessBoundaryPolicy}.
                 * @param error Error, if any
                 * @param [response] PrincipalAccessBoundaryPolicy
                 */
                type GetPrincipalAccessBoundaryPolicyCallback = (error: (Error|null), response?: google.iam.v3.PrincipalAccessBoundaryPolicy) => void;

                /**
                 * Callback as used by {@link google.iam.v3.PrincipalAccessBoundaryPolicies|updatePrincipalAccessBoundaryPolicy}.
                 * @param error Error, if any
                 * @param [response] Operation
                 */
                type UpdatePrincipalAccessBoundaryPolicyCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                /**
                 * Callback as used by {@link google.iam.v3.PrincipalAccessBoundaryPolicies|deletePrincipalAccessBoundaryPolicy}.
                 * @param error Error, if any
                 * @param [response] Operation
                 */
                type DeletePrincipalAccessBoundaryPolicyCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                /**
                 * Callback as used by {@link google.iam.v3.PrincipalAccessBoundaryPolicies|listPrincipalAccessBoundaryPolicies}.
                 * @param error Error, if any
                 * @param [response] ListPrincipalAccessBoundaryPoliciesResponse
                 */
                type ListPrincipalAccessBoundaryPoliciesCallback = (error: (Error|null), response?: google.iam.v3.ListPrincipalAccessBoundaryPoliciesResponse) => void;

                /**
                 * Callback as used by {@link google.iam.v3.PrincipalAccessBoundaryPolicies|searchPrincipalAccessBoundaryPolicyBindings}.
                 * @param error Error, if any
                 * @param [response] SearchPrincipalAccessBoundaryPolicyBindingsResponse
                 */
                type SearchPrincipalAccessBoundaryPolicyBindingsCallback = (error: (Error|null), response?: google.iam.v3.SearchPrincipalAccessBoundaryPolicyBindingsResponse) => void;
            }

            /** Properties of a CreatePrincipalAccessBoundaryPolicyRequest. */
            interface ICreatePrincipalAccessBoundaryPolicyRequest {

                /** CreatePrincipalAccessBoundaryPolicyRequest parent */
                parent?: (string|null);

                /** CreatePrincipalAccessBoundaryPolicyRequest principalAccessBoundaryPolicyId */
                principalAccessBoundaryPolicyId?: (string|null);

                /** CreatePrincipalAccessBoundaryPolicyRequest principalAccessBoundaryPolicy */
                principalAccessBoundaryPolicy?: (google.iam.v3.IPrincipalAccessBoundaryPolicy|null);

                /** CreatePrincipalAccessBoundaryPolicyRequest validateOnly */
                validateOnly?: (boolean|null);
            }

            /** Represents a CreatePrincipalAccessBoundaryPolicyRequest. */
            class CreatePrincipalAccessBoundaryPolicyRequest implements ICreatePrincipalAccessBoundaryPolicyRequest {

                /**
                 * Constructs a new CreatePrincipalAccessBoundaryPolicyRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v3.ICreatePrincipalAccessBoundaryPolicyRequest);

                /** CreatePrincipalAccessBoundaryPolicyRequest parent. */
                public parent: string;

                /** CreatePrincipalAccessBoundaryPolicyRequest principalAccessBoundaryPolicyId. */
                public principalAccessBoundaryPolicyId: string;

                /** CreatePrincipalAccessBoundaryPolicyRequest principalAccessBoundaryPolicy. */
                public principalAccessBoundaryPolicy?: (google.iam.v3.IPrincipalAccessBoundaryPolicy|null);

                /** CreatePrincipalAccessBoundaryPolicyRequest validateOnly. */
                public validateOnly: boolean;

                /**
                 * Creates a new CreatePrincipalAccessBoundaryPolicyRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CreatePrincipalAccessBoundaryPolicyRequest instance
                 */
                public static create(properties?: google.iam.v3.ICreatePrincipalAccessBoundaryPolicyRequest): google.iam.v3.CreatePrincipalAccessBoundaryPolicyRequest;

                /**
                 * Encodes the specified CreatePrincipalAccessBoundaryPolicyRequest message. Does not implicitly {@link google.iam.v3.CreatePrincipalAccessBoundaryPolicyRequest.verify|verify} messages.
                 * @param message CreatePrincipalAccessBoundaryPolicyRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v3.ICreatePrincipalAccessBoundaryPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CreatePrincipalAccessBoundaryPolicyRequest message, length delimited. Does not implicitly {@link google.iam.v3.CreatePrincipalAccessBoundaryPolicyRequest.verify|verify} messages.
                 * @param message CreatePrincipalAccessBoundaryPolicyRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v3.ICreatePrincipalAccessBoundaryPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CreatePrincipalAccessBoundaryPolicyRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CreatePrincipalAccessBoundaryPolicyRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v3.CreatePrincipalAccessBoundaryPolicyRequest;

                /**
                 * Decodes a CreatePrincipalAccessBoundaryPolicyRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CreatePrincipalAccessBoundaryPolicyRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v3.CreatePrincipalAccessBoundaryPolicyRequest;

                /**
                 * Verifies a CreatePrincipalAccessBoundaryPolicyRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CreatePrincipalAccessBoundaryPolicyRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CreatePrincipalAccessBoundaryPolicyRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v3.CreatePrincipalAccessBoundaryPolicyRequest;

                /**
                 * Creates a plain object from a CreatePrincipalAccessBoundaryPolicyRequest message. Also converts values to other types if specified.
                 * @param message CreatePrincipalAccessBoundaryPolicyRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v3.CreatePrincipalAccessBoundaryPolicyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CreatePrincipalAccessBoundaryPolicyRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for CreatePrincipalAccessBoundaryPolicyRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a GetPrincipalAccessBoundaryPolicyRequest. */
            interface IGetPrincipalAccessBoundaryPolicyRequest {

                /** GetPrincipalAccessBoundaryPolicyRequest name */
                name?: (string|null);
            }

            /** Represents a GetPrincipalAccessBoundaryPolicyRequest. */
            class GetPrincipalAccessBoundaryPolicyRequest implements IGetPrincipalAccessBoundaryPolicyRequest {

                /**
                 * Constructs a new GetPrincipalAccessBoundaryPolicyRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v3.IGetPrincipalAccessBoundaryPolicyRequest);

                /** GetPrincipalAccessBoundaryPolicyRequest name. */
                public name: string;

                /**
                 * Creates a new GetPrincipalAccessBoundaryPolicyRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GetPrincipalAccessBoundaryPolicyRequest instance
                 */
                public static create(properties?: google.iam.v3.IGetPrincipalAccessBoundaryPolicyRequest): google.iam.v3.GetPrincipalAccessBoundaryPolicyRequest;

                /**
                 * Encodes the specified GetPrincipalAccessBoundaryPolicyRequest message. Does not implicitly {@link google.iam.v3.GetPrincipalAccessBoundaryPolicyRequest.verify|verify} messages.
                 * @param message GetPrincipalAccessBoundaryPolicyRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v3.IGetPrincipalAccessBoundaryPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GetPrincipalAccessBoundaryPolicyRequest message, length delimited. Does not implicitly {@link google.iam.v3.GetPrincipalAccessBoundaryPolicyRequest.verify|verify} messages.
                 * @param message GetPrincipalAccessBoundaryPolicyRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v3.IGetPrincipalAccessBoundaryPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GetPrincipalAccessBoundaryPolicyRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GetPrincipalAccessBoundaryPolicyRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v3.GetPrincipalAccessBoundaryPolicyRequest;

                /**
                 * Decodes a GetPrincipalAccessBoundaryPolicyRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GetPrincipalAccessBoundaryPolicyRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v3.GetPrincipalAccessBoundaryPolicyRequest;

                /**
                 * Verifies a GetPrincipalAccessBoundaryPolicyRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GetPrincipalAccessBoundaryPolicyRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GetPrincipalAccessBoundaryPolicyRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v3.GetPrincipalAccessBoundaryPolicyRequest;

                /**
                 * Creates a plain object from a GetPrincipalAccessBoundaryPolicyRequest message. Also converts values to other types if specified.
                 * @param message GetPrincipalAccessBoundaryPolicyRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v3.GetPrincipalAccessBoundaryPolicyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GetPrincipalAccessBoundaryPolicyRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for GetPrincipalAccessBoundaryPolicyRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of an UpdatePrincipalAccessBoundaryPolicyRequest. */
            interface IUpdatePrincipalAccessBoundaryPolicyRequest {

                /** UpdatePrincipalAccessBoundaryPolicyRequest principalAccessBoundaryPolicy */
                principalAccessBoundaryPolicy?: (google.iam.v3.IPrincipalAccessBoundaryPolicy|null);

                /** UpdatePrincipalAccessBoundaryPolicyRequest validateOnly */
                validateOnly?: (boolean|null);

                /** UpdatePrincipalAccessBoundaryPolicyRequest updateMask */
                updateMask?: (google.protobuf.IFieldMask|null);
            }

            /** Represents an UpdatePrincipalAccessBoundaryPolicyRequest. */
            class UpdatePrincipalAccessBoundaryPolicyRequest implements IUpdatePrincipalAccessBoundaryPolicyRequest {

                /**
                 * Constructs a new UpdatePrincipalAccessBoundaryPolicyRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v3.IUpdatePrincipalAccessBoundaryPolicyRequest);

                /** UpdatePrincipalAccessBoundaryPolicyRequest principalAccessBoundaryPolicy. */
                public principalAccessBoundaryPolicy?: (google.iam.v3.IPrincipalAccessBoundaryPolicy|null);

                /** UpdatePrincipalAccessBoundaryPolicyRequest validateOnly. */
                public validateOnly: boolean;

                /** UpdatePrincipalAccessBoundaryPolicyRequest updateMask. */
                public updateMask?: (google.protobuf.IFieldMask|null);

                /**
                 * Creates a new UpdatePrincipalAccessBoundaryPolicyRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns UpdatePrincipalAccessBoundaryPolicyRequest instance
                 */
                public static create(properties?: google.iam.v3.IUpdatePrincipalAccessBoundaryPolicyRequest): google.iam.v3.UpdatePrincipalAccessBoundaryPolicyRequest;

                /**
                 * Encodes the specified UpdatePrincipalAccessBoundaryPolicyRequest message. Does not implicitly {@link google.iam.v3.UpdatePrincipalAccessBoundaryPolicyRequest.verify|verify} messages.
                 * @param message UpdatePrincipalAccessBoundaryPolicyRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v3.IUpdatePrincipalAccessBoundaryPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified UpdatePrincipalAccessBoundaryPolicyRequest message, length delimited. Does not implicitly {@link google.iam.v3.UpdatePrincipalAccessBoundaryPolicyRequest.verify|verify} messages.
                 * @param message UpdatePrincipalAccessBoundaryPolicyRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v3.IUpdatePrincipalAccessBoundaryPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an UpdatePrincipalAccessBoundaryPolicyRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns UpdatePrincipalAccessBoundaryPolicyRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v3.UpdatePrincipalAccessBoundaryPolicyRequest;

                /**
                 * Decodes an UpdatePrincipalAccessBoundaryPolicyRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns UpdatePrincipalAccessBoundaryPolicyRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v3.UpdatePrincipalAccessBoundaryPolicyRequest;

                /**
                 * Verifies an UpdatePrincipalAccessBoundaryPolicyRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an UpdatePrincipalAccessBoundaryPolicyRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns UpdatePrincipalAccessBoundaryPolicyRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v3.UpdatePrincipalAccessBoundaryPolicyRequest;

                /**
                 * Creates a plain object from an UpdatePrincipalAccessBoundaryPolicyRequest message. Also converts values to other types if specified.
                 * @param message UpdatePrincipalAccessBoundaryPolicyRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v3.UpdatePrincipalAccessBoundaryPolicyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this UpdatePrincipalAccessBoundaryPolicyRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for UpdatePrincipalAccessBoundaryPolicyRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a DeletePrincipalAccessBoundaryPolicyRequest. */
            interface IDeletePrincipalAccessBoundaryPolicyRequest {

                /** DeletePrincipalAccessBoundaryPolicyRequest name */
                name?: (string|null);

                /** DeletePrincipalAccessBoundaryPolicyRequest etag */
                etag?: (string|null);

                /** DeletePrincipalAccessBoundaryPolicyRequest validateOnly */
                validateOnly?: (boolean|null);

                /** DeletePrincipalAccessBoundaryPolicyRequest force */
                force?: (boolean|null);
            }

            /** Represents a DeletePrincipalAccessBoundaryPolicyRequest. */
            class DeletePrincipalAccessBoundaryPolicyRequest implements IDeletePrincipalAccessBoundaryPolicyRequest {

                /**
                 * Constructs a new DeletePrincipalAccessBoundaryPolicyRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v3.IDeletePrincipalAccessBoundaryPolicyRequest);

                /** DeletePrincipalAccessBoundaryPolicyRequest name. */
                public name: string;

                /** DeletePrincipalAccessBoundaryPolicyRequest etag. */
                public etag: string;

                /** DeletePrincipalAccessBoundaryPolicyRequest validateOnly. */
                public validateOnly: boolean;

                /** DeletePrincipalAccessBoundaryPolicyRequest force. */
                public force: boolean;

                /**
                 * Creates a new DeletePrincipalAccessBoundaryPolicyRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns DeletePrincipalAccessBoundaryPolicyRequest instance
                 */
                public static create(properties?: google.iam.v3.IDeletePrincipalAccessBoundaryPolicyRequest): google.iam.v3.DeletePrincipalAccessBoundaryPolicyRequest;

                /**
                 * Encodes the specified DeletePrincipalAccessBoundaryPolicyRequest message. Does not implicitly {@link google.iam.v3.DeletePrincipalAccessBoundaryPolicyRequest.verify|verify} messages.
                 * @param message DeletePrincipalAccessBoundaryPolicyRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v3.IDeletePrincipalAccessBoundaryPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified DeletePrincipalAccessBoundaryPolicyRequest message, length delimited. Does not implicitly {@link google.iam.v3.DeletePrincipalAccessBoundaryPolicyRequest.verify|verify} messages.
                 * @param message DeletePrincipalAccessBoundaryPolicyRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v3.IDeletePrincipalAccessBoundaryPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DeletePrincipalAccessBoundaryPolicyRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns DeletePrincipalAccessBoundaryPolicyRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v3.DeletePrincipalAccessBoundaryPolicyRequest;

                /**
                 * Decodes a DeletePrincipalAccessBoundaryPolicyRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns DeletePrincipalAccessBoundaryPolicyRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v3.DeletePrincipalAccessBoundaryPolicyRequest;

                /**
                 * Verifies a DeletePrincipalAccessBoundaryPolicyRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a DeletePrincipalAccessBoundaryPolicyRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns DeletePrincipalAccessBoundaryPolicyRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v3.DeletePrincipalAccessBoundaryPolicyRequest;

                /**
                 * Creates a plain object from a DeletePrincipalAccessBoundaryPolicyRequest message. Also converts values to other types if specified.
                 * @param message DeletePrincipalAccessBoundaryPolicyRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v3.DeletePrincipalAccessBoundaryPolicyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this DeletePrincipalAccessBoundaryPolicyRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for DeletePrincipalAccessBoundaryPolicyRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a ListPrincipalAccessBoundaryPoliciesRequest. */
            interface IListPrincipalAccessBoundaryPoliciesRequest {

                /** ListPrincipalAccessBoundaryPoliciesRequest parent */
                parent?: (string|null);

                /** ListPrincipalAccessBoundaryPoliciesRequest pageSize */
                pageSize?: (number|null);

                /** ListPrincipalAccessBoundaryPoliciesRequest pageToken */
                pageToken?: (string|null);
            }

            /** Represents a ListPrincipalAccessBoundaryPoliciesRequest. */
            class ListPrincipalAccessBoundaryPoliciesRequest implements IListPrincipalAccessBoundaryPoliciesRequest {

                /**
                 * Constructs a new ListPrincipalAccessBoundaryPoliciesRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v3.IListPrincipalAccessBoundaryPoliciesRequest);

                /** ListPrincipalAccessBoundaryPoliciesRequest parent. */
                public parent: string;

                /** ListPrincipalAccessBoundaryPoliciesRequest pageSize. */
                public pageSize: number;

                /** ListPrincipalAccessBoundaryPoliciesRequest pageToken. */
                public pageToken: string;

                /**
                 * Creates a new ListPrincipalAccessBoundaryPoliciesRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ListPrincipalAccessBoundaryPoliciesRequest instance
                 */
                public static create(properties?: google.iam.v3.IListPrincipalAccessBoundaryPoliciesRequest): google.iam.v3.ListPrincipalAccessBoundaryPoliciesRequest;

                /**
                 * Encodes the specified ListPrincipalAccessBoundaryPoliciesRequest message. Does not implicitly {@link google.iam.v3.ListPrincipalAccessBoundaryPoliciesRequest.verify|verify} messages.
                 * @param message ListPrincipalAccessBoundaryPoliciesRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v3.IListPrincipalAccessBoundaryPoliciesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ListPrincipalAccessBoundaryPoliciesRequest message, length delimited. Does not implicitly {@link google.iam.v3.ListPrincipalAccessBoundaryPoliciesRequest.verify|verify} messages.
                 * @param message ListPrincipalAccessBoundaryPoliciesRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v3.IListPrincipalAccessBoundaryPoliciesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ListPrincipalAccessBoundaryPoliciesRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ListPrincipalAccessBoundaryPoliciesRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v3.ListPrincipalAccessBoundaryPoliciesRequest;

                /**
                 * Decodes a ListPrincipalAccessBoundaryPoliciesRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ListPrincipalAccessBoundaryPoliciesRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v3.ListPrincipalAccessBoundaryPoliciesRequest;

                /**
                 * Verifies a ListPrincipalAccessBoundaryPoliciesRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ListPrincipalAccessBoundaryPoliciesRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ListPrincipalAccessBoundaryPoliciesRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v3.ListPrincipalAccessBoundaryPoliciesRequest;

                /**
                 * Creates a plain object from a ListPrincipalAccessBoundaryPoliciesRequest message. Also converts values to other types if specified.
                 * @param message ListPrincipalAccessBoundaryPoliciesRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v3.ListPrincipalAccessBoundaryPoliciesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ListPrincipalAccessBoundaryPoliciesRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ListPrincipalAccessBoundaryPoliciesRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a ListPrincipalAccessBoundaryPoliciesResponse. */
            interface IListPrincipalAccessBoundaryPoliciesResponse {

                /** ListPrincipalAccessBoundaryPoliciesResponse principalAccessBoundaryPolicies */
                principalAccessBoundaryPolicies?: (google.iam.v3.IPrincipalAccessBoundaryPolicy[]|null);

                /** ListPrincipalAccessBoundaryPoliciesResponse nextPageToken */
                nextPageToken?: (string|null);
            }

            /** Represents a ListPrincipalAccessBoundaryPoliciesResponse. */
            class ListPrincipalAccessBoundaryPoliciesResponse implements IListPrincipalAccessBoundaryPoliciesResponse {

                /**
                 * Constructs a new ListPrincipalAccessBoundaryPoliciesResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v3.IListPrincipalAccessBoundaryPoliciesResponse);

                /** ListPrincipalAccessBoundaryPoliciesResponse principalAccessBoundaryPolicies. */
                public principalAccessBoundaryPolicies: google.iam.v3.IPrincipalAccessBoundaryPolicy[];

                /** ListPrincipalAccessBoundaryPoliciesResponse nextPageToken. */
                public nextPageToken: string;

                /**
                 * Creates a new ListPrincipalAccessBoundaryPoliciesResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ListPrincipalAccessBoundaryPoliciesResponse instance
                 */
                public static create(properties?: google.iam.v3.IListPrincipalAccessBoundaryPoliciesResponse): google.iam.v3.ListPrincipalAccessBoundaryPoliciesResponse;

                /**
                 * Encodes the specified ListPrincipalAccessBoundaryPoliciesResponse message. Does not implicitly {@link google.iam.v3.ListPrincipalAccessBoundaryPoliciesResponse.verify|verify} messages.
                 * @param message ListPrincipalAccessBoundaryPoliciesResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v3.IListPrincipalAccessBoundaryPoliciesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ListPrincipalAccessBoundaryPoliciesResponse message, length delimited. Does not implicitly {@link google.iam.v3.ListPrincipalAccessBoundaryPoliciesResponse.verify|verify} messages.
                 * @param message ListPrincipalAccessBoundaryPoliciesResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v3.IListPrincipalAccessBoundaryPoliciesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ListPrincipalAccessBoundaryPoliciesResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ListPrincipalAccessBoundaryPoliciesResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v3.ListPrincipalAccessBoundaryPoliciesResponse;

                /**
                 * Decodes a ListPrincipalAccessBoundaryPoliciesResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ListPrincipalAccessBoundaryPoliciesResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v3.ListPrincipalAccessBoundaryPoliciesResponse;

                /**
                 * Verifies a ListPrincipalAccessBoundaryPoliciesResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ListPrincipalAccessBoundaryPoliciesResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ListPrincipalAccessBoundaryPoliciesResponse
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v3.ListPrincipalAccessBoundaryPoliciesResponse;

                /**
                 * Creates a plain object from a ListPrincipalAccessBoundaryPoliciesResponse message. Also converts values to other types if specified.
                 * @param message ListPrincipalAccessBoundaryPoliciesResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v3.ListPrincipalAccessBoundaryPoliciesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ListPrincipalAccessBoundaryPoliciesResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ListPrincipalAccessBoundaryPoliciesResponse
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a SearchPrincipalAccessBoundaryPolicyBindingsRequest. */
            interface ISearchPrincipalAccessBoundaryPolicyBindingsRequest {

                /** SearchPrincipalAccessBoundaryPolicyBindingsRequest name */
                name?: (string|null);

                /** SearchPrincipalAccessBoundaryPolicyBindingsRequest pageSize */
                pageSize?: (number|null);

                /** SearchPrincipalAccessBoundaryPolicyBindingsRequest pageToken */
                pageToken?: (string|null);
            }

            /** Represents a SearchPrincipalAccessBoundaryPolicyBindingsRequest. */
            class SearchPrincipalAccessBoundaryPolicyBindingsRequest implements ISearchPrincipalAccessBoundaryPolicyBindingsRequest {

                /**
                 * Constructs a new SearchPrincipalAccessBoundaryPolicyBindingsRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v3.ISearchPrincipalAccessBoundaryPolicyBindingsRequest);

                /** SearchPrincipalAccessBoundaryPolicyBindingsRequest name. */
                public name: string;

                /** SearchPrincipalAccessBoundaryPolicyBindingsRequest pageSize. */
                public pageSize: number;

                /** SearchPrincipalAccessBoundaryPolicyBindingsRequest pageToken. */
                public pageToken: string;

                /**
                 * Creates a new SearchPrincipalAccessBoundaryPolicyBindingsRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SearchPrincipalAccessBoundaryPolicyBindingsRequest instance
                 */
                public static create(properties?: google.iam.v3.ISearchPrincipalAccessBoundaryPolicyBindingsRequest): google.iam.v3.SearchPrincipalAccessBoundaryPolicyBindingsRequest;

                /**
                 * Encodes the specified SearchPrincipalAccessBoundaryPolicyBindingsRequest message. Does not implicitly {@link google.iam.v3.SearchPrincipalAccessBoundaryPolicyBindingsRequest.verify|verify} messages.
                 * @param message SearchPrincipalAccessBoundaryPolicyBindingsRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v3.ISearchPrincipalAccessBoundaryPolicyBindingsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SearchPrincipalAccessBoundaryPolicyBindingsRequest message, length delimited. Does not implicitly {@link google.iam.v3.SearchPrincipalAccessBoundaryPolicyBindingsRequest.verify|verify} messages.
                 * @param message SearchPrincipalAccessBoundaryPolicyBindingsRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v3.ISearchPrincipalAccessBoundaryPolicyBindingsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SearchPrincipalAccessBoundaryPolicyBindingsRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SearchPrincipalAccessBoundaryPolicyBindingsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v3.SearchPrincipalAccessBoundaryPolicyBindingsRequest;

                /**
                 * Decodes a SearchPrincipalAccessBoundaryPolicyBindingsRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SearchPrincipalAccessBoundaryPolicyBindingsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v3.SearchPrincipalAccessBoundaryPolicyBindingsRequest;

                /**
                 * Verifies a SearchPrincipalAccessBoundaryPolicyBindingsRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SearchPrincipalAccessBoundaryPolicyBindingsRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SearchPrincipalAccessBoundaryPolicyBindingsRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v3.SearchPrincipalAccessBoundaryPolicyBindingsRequest;

                /**
                 * Creates a plain object from a SearchPrincipalAccessBoundaryPolicyBindingsRequest message. Also converts values to other types if specified.
                 * @param message SearchPrincipalAccessBoundaryPolicyBindingsRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v3.SearchPrincipalAccessBoundaryPolicyBindingsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SearchPrincipalAccessBoundaryPolicyBindingsRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for SearchPrincipalAccessBoundaryPolicyBindingsRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a SearchPrincipalAccessBoundaryPolicyBindingsResponse. */
            interface ISearchPrincipalAccessBoundaryPolicyBindingsResponse {

                /** SearchPrincipalAccessBoundaryPolicyBindingsResponse policyBindings */
                policyBindings?: (google.iam.v3.IPolicyBinding[]|null);

                /** SearchPrincipalAccessBoundaryPolicyBindingsResponse nextPageToken */
                nextPageToken?: (string|null);
            }

            /** Represents a SearchPrincipalAccessBoundaryPolicyBindingsResponse. */
            class SearchPrincipalAccessBoundaryPolicyBindingsResponse implements ISearchPrincipalAccessBoundaryPolicyBindingsResponse {

                /**
                 * Constructs a new SearchPrincipalAccessBoundaryPolicyBindingsResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v3.ISearchPrincipalAccessBoundaryPolicyBindingsResponse);

                /** SearchPrincipalAccessBoundaryPolicyBindingsResponse policyBindings. */
                public policyBindings: google.iam.v3.IPolicyBinding[];

                /** SearchPrincipalAccessBoundaryPolicyBindingsResponse nextPageToken. */
                public nextPageToken: string;

                /**
                 * Creates a new SearchPrincipalAccessBoundaryPolicyBindingsResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SearchPrincipalAccessBoundaryPolicyBindingsResponse instance
                 */
                public static create(properties?: google.iam.v3.ISearchPrincipalAccessBoundaryPolicyBindingsResponse): google.iam.v3.SearchPrincipalAccessBoundaryPolicyBindingsResponse;

                /**
                 * Encodes the specified SearchPrincipalAccessBoundaryPolicyBindingsResponse message. Does not implicitly {@link google.iam.v3.SearchPrincipalAccessBoundaryPolicyBindingsResponse.verify|verify} messages.
                 * @param message SearchPrincipalAccessBoundaryPolicyBindingsResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v3.ISearchPrincipalAccessBoundaryPolicyBindingsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SearchPrincipalAccessBoundaryPolicyBindingsResponse message, length delimited. Does not implicitly {@link google.iam.v3.SearchPrincipalAccessBoundaryPolicyBindingsResponse.verify|verify} messages.
                 * @param message SearchPrincipalAccessBoundaryPolicyBindingsResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v3.ISearchPrincipalAccessBoundaryPolicyBindingsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SearchPrincipalAccessBoundaryPolicyBindingsResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SearchPrincipalAccessBoundaryPolicyBindingsResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v3.SearchPrincipalAccessBoundaryPolicyBindingsResponse;

                /**
                 * Decodes a SearchPrincipalAccessBoundaryPolicyBindingsResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SearchPrincipalAccessBoundaryPolicyBindingsResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v3.SearchPrincipalAccessBoundaryPolicyBindingsResponse;

                /**
                 * Verifies a SearchPrincipalAccessBoundaryPolicyBindingsResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SearchPrincipalAccessBoundaryPolicyBindingsResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SearchPrincipalAccessBoundaryPolicyBindingsResponse
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v3.SearchPrincipalAccessBoundaryPolicyBindingsResponse;

                /**
                 * Creates a plain object from a SearchPrincipalAccessBoundaryPolicyBindingsResponse message. Also converts values to other types if specified.
                 * @param message SearchPrincipalAccessBoundaryPolicyBindingsResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v3.SearchPrincipalAccessBoundaryPolicyBindingsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SearchPrincipalAccessBoundaryPolicyBindingsResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for SearchPrincipalAccessBoundaryPolicyBindingsResponse
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a PrincipalAccessBoundaryPolicy. */
            interface IPrincipalAccessBoundaryPolicy {

                /** PrincipalAccessBoundaryPolicy name */
                name?: (string|null);

                /** PrincipalAccessBoundaryPolicy uid */
                uid?: (string|null);

                /** PrincipalAccessBoundaryPolicy etag */
                etag?: (string|null);

                /** PrincipalAccessBoundaryPolicy displayName */
                displayName?: (string|null);

                /** PrincipalAccessBoundaryPolicy annotations */
                annotations?: ({ [k: string]: string }|null);

                /** PrincipalAccessBoundaryPolicy createTime */
                createTime?: (google.protobuf.ITimestamp|null);

                /** PrincipalAccessBoundaryPolicy updateTime */
                updateTime?: (google.protobuf.ITimestamp|null);

                /** PrincipalAccessBoundaryPolicy details */
                details?: (google.iam.v3.IPrincipalAccessBoundaryPolicyDetails|null);
            }

            /** Represents a PrincipalAccessBoundaryPolicy. */
            class PrincipalAccessBoundaryPolicy implements IPrincipalAccessBoundaryPolicy {

                /**
                 * Constructs a new PrincipalAccessBoundaryPolicy.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v3.IPrincipalAccessBoundaryPolicy);

                /** PrincipalAccessBoundaryPolicy name. */
                public name: string;

                /** PrincipalAccessBoundaryPolicy uid. */
                public uid: string;

                /** PrincipalAccessBoundaryPolicy etag. */
                public etag: string;

                /** PrincipalAccessBoundaryPolicy displayName. */
                public displayName: string;

                /** PrincipalAccessBoundaryPolicy annotations. */
                public annotations: { [k: string]: string };

                /** PrincipalAccessBoundaryPolicy createTime. */
                public createTime?: (google.protobuf.ITimestamp|null);

                /** PrincipalAccessBoundaryPolicy updateTime. */
                public updateTime?: (google.protobuf.ITimestamp|null);

                /** PrincipalAccessBoundaryPolicy details. */
                public details?: (google.iam.v3.IPrincipalAccessBoundaryPolicyDetails|null);

                /**
                 * Creates a new PrincipalAccessBoundaryPolicy instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns PrincipalAccessBoundaryPolicy instance
                 */
                public static create(properties?: google.iam.v3.IPrincipalAccessBoundaryPolicy): google.iam.v3.PrincipalAccessBoundaryPolicy;

                /**
                 * Encodes the specified PrincipalAccessBoundaryPolicy message. Does not implicitly {@link google.iam.v3.PrincipalAccessBoundaryPolicy.verify|verify} messages.
                 * @param message PrincipalAccessBoundaryPolicy message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v3.IPrincipalAccessBoundaryPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified PrincipalAccessBoundaryPolicy message, length delimited. Does not implicitly {@link google.iam.v3.PrincipalAccessBoundaryPolicy.verify|verify} messages.
                 * @param message PrincipalAccessBoundaryPolicy message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v3.IPrincipalAccessBoundaryPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a PrincipalAccessBoundaryPolicy message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns PrincipalAccessBoundaryPolicy
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v3.PrincipalAccessBoundaryPolicy;

                /**
                 * Decodes a PrincipalAccessBoundaryPolicy message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns PrincipalAccessBoundaryPolicy
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v3.PrincipalAccessBoundaryPolicy;

                /**
                 * Verifies a PrincipalAccessBoundaryPolicy message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a PrincipalAccessBoundaryPolicy message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns PrincipalAccessBoundaryPolicy
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v3.PrincipalAccessBoundaryPolicy;

                /**
                 * Creates a plain object from a PrincipalAccessBoundaryPolicy message. Also converts values to other types if specified.
                 * @param message PrincipalAccessBoundaryPolicy
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v3.PrincipalAccessBoundaryPolicy, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this PrincipalAccessBoundaryPolicy to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for PrincipalAccessBoundaryPolicy
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a PrincipalAccessBoundaryPolicyDetails. */
            interface IPrincipalAccessBoundaryPolicyDetails {

                /** PrincipalAccessBoundaryPolicyDetails rules */
                rules?: (google.iam.v3.IPrincipalAccessBoundaryPolicyRule[]|null);

                /** PrincipalAccessBoundaryPolicyDetails enforcementVersion */
                enforcementVersion?: (string|null);
            }

            /** Represents a PrincipalAccessBoundaryPolicyDetails. */
            class PrincipalAccessBoundaryPolicyDetails implements IPrincipalAccessBoundaryPolicyDetails {

                /**
                 * Constructs a new PrincipalAccessBoundaryPolicyDetails.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v3.IPrincipalAccessBoundaryPolicyDetails);

                /** PrincipalAccessBoundaryPolicyDetails rules. */
                public rules: google.iam.v3.IPrincipalAccessBoundaryPolicyRule[];

                /** PrincipalAccessBoundaryPolicyDetails enforcementVersion. */
                public enforcementVersion: string;

                /**
                 * Creates a new PrincipalAccessBoundaryPolicyDetails instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns PrincipalAccessBoundaryPolicyDetails instance
                 */
                public static create(properties?: google.iam.v3.IPrincipalAccessBoundaryPolicyDetails): google.iam.v3.PrincipalAccessBoundaryPolicyDetails;

                /**
                 * Encodes the specified PrincipalAccessBoundaryPolicyDetails message. Does not implicitly {@link google.iam.v3.PrincipalAccessBoundaryPolicyDetails.verify|verify} messages.
                 * @param message PrincipalAccessBoundaryPolicyDetails message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v3.IPrincipalAccessBoundaryPolicyDetails, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified PrincipalAccessBoundaryPolicyDetails message, length delimited. Does not implicitly {@link google.iam.v3.PrincipalAccessBoundaryPolicyDetails.verify|verify} messages.
                 * @param message PrincipalAccessBoundaryPolicyDetails message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v3.IPrincipalAccessBoundaryPolicyDetails, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a PrincipalAccessBoundaryPolicyDetails message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns PrincipalAccessBoundaryPolicyDetails
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v3.PrincipalAccessBoundaryPolicyDetails;

                /**
                 * Decodes a PrincipalAccessBoundaryPolicyDetails message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns PrincipalAccessBoundaryPolicyDetails
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v3.PrincipalAccessBoundaryPolicyDetails;

                /**
                 * Verifies a PrincipalAccessBoundaryPolicyDetails message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a PrincipalAccessBoundaryPolicyDetails message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns PrincipalAccessBoundaryPolicyDetails
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v3.PrincipalAccessBoundaryPolicyDetails;

                /**
                 * Creates a plain object from a PrincipalAccessBoundaryPolicyDetails message. Also converts values to other types if specified.
                 * @param message PrincipalAccessBoundaryPolicyDetails
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v3.PrincipalAccessBoundaryPolicyDetails, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this PrincipalAccessBoundaryPolicyDetails to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for PrincipalAccessBoundaryPolicyDetails
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a PrincipalAccessBoundaryPolicyRule. */
            interface IPrincipalAccessBoundaryPolicyRule {

                /** PrincipalAccessBoundaryPolicyRule description */
                description?: (string|null);

                /** PrincipalAccessBoundaryPolicyRule resources */
                resources?: (string[]|null);

                /** PrincipalAccessBoundaryPolicyRule effect */
                effect?: (google.iam.v3.PrincipalAccessBoundaryPolicyRule.Effect|keyof typeof google.iam.v3.PrincipalAccessBoundaryPolicyRule.Effect|null);
            }

            /** Represents a PrincipalAccessBoundaryPolicyRule. */
            class PrincipalAccessBoundaryPolicyRule implements IPrincipalAccessBoundaryPolicyRule {

                /**
                 * Constructs a new PrincipalAccessBoundaryPolicyRule.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v3.IPrincipalAccessBoundaryPolicyRule);

                /** PrincipalAccessBoundaryPolicyRule description. */
                public description: string;

                /** PrincipalAccessBoundaryPolicyRule resources. */
                public resources: string[];

                /** PrincipalAccessBoundaryPolicyRule effect. */
                public effect: (google.iam.v3.PrincipalAccessBoundaryPolicyRule.Effect|keyof typeof google.iam.v3.PrincipalAccessBoundaryPolicyRule.Effect);

                /**
                 * Creates a new PrincipalAccessBoundaryPolicyRule instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns PrincipalAccessBoundaryPolicyRule instance
                 */
                public static create(properties?: google.iam.v3.IPrincipalAccessBoundaryPolicyRule): google.iam.v3.PrincipalAccessBoundaryPolicyRule;

                /**
                 * Encodes the specified PrincipalAccessBoundaryPolicyRule message. Does not implicitly {@link google.iam.v3.PrincipalAccessBoundaryPolicyRule.verify|verify} messages.
                 * @param message PrincipalAccessBoundaryPolicyRule message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v3.IPrincipalAccessBoundaryPolicyRule, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified PrincipalAccessBoundaryPolicyRule message, length delimited. Does not implicitly {@link google.iam.v3.PrincipalAccessBoundaryPolicyRule.verify|verify} messages.
                 * @param message PrincipalAccessBoundaryPolicyRule message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v3.IPrincipalAccessBoundaryPolicyRule, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a PrincipalAccessBoundaryPolicyRule message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns PrincipalAccessBoundaryPolicyRule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v3.PrincipalAccessBoundaryPolicyRule;

                /**
                 * Decodes a PrincipalAccessBoundaryPolicyRule message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns PrincipalAccessBoundaryPolicyRule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v3.PrincipalAccessBoundaryPolicyRule;

                /**
                 * Verifies a PrincipalAccessBoundaryPolicyRule message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a PrincipalAccessBoundaryPolicyRule message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns PrincipalAccessBoundaryPolicyRule
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v3.PrincipalAccessBoundaryPolicyRule;

                /**
                 * Creates a plain object from a PrincipalAccessBoundaryPolicyRule message. Also converts values to other types if specified.
                 * @param message PrincipalAccessBoundaryPolicyRule
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v3.PrincipalAccessBoundaryPolicyRule, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this PrincipalAccessBoundaryPolicyRule to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for PrincipalAccessBoundaryPolicyRule
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace PrincipalAccessBoundaryPolicyRule {

                /** Effect enum. */
                enum Effect {
                    EFFECT_UNSPECIFIED = 0,
                    ALLOW = 1
                }
            }
        }

        /** Namespace v3beta. */
        namespace v3beta {

            /** Properties of an OperationMetadata. */
            interface IOperationMetadata {

                /** OperationMetadata createTime */
                createTime?: (google.protobuf.ITimestamp|null);

                /** OperationMetadata endTime */
                endTime?: (google.protobuf.ITimestamp|null);

                /** OperationMetadata target */
                target?: (string|null);

                /** OperationMetadata verb */
                verb?: (string|null);

                /** OperationMetadata statusMessage */
                statusMessage?: (string|null);

                /** OperationMetadata requestedCancellation */
                requestedCancellation?: (boolean|null);

                /** OperationMetadata apiVersion */
                apiVersion?: (string|null);
            }

            /** Represents an OperationMetadata. */
            class OperationMetadata implements IOperationMetadata {

                /**
                 * Constructs a new OperationMetadata.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v3beta.IOperationMetadata);

                /** OperationMetadata createTime. */
                public createTime?: (google.protobuf.ITimestamp|null);

                /** OperationMetadata endTime. */
                public endTime?: (google.protobuf.ITimestamp|null);

                /** OperationMetadata target. */
                public target: string;

                /** OperationMetadata verb. */
                public verb: string;

                /** OperationMetadata statusMessage. */
                public statusMessage: string;

                /** OperationMetadata requestedCancellation. */
                public requestedCancellation: boolean;

                /** OperationMetadata apiVersion. */
                public apiVersion: string;

                /**
                 * Creates a new OperationMetadata instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns OperationMetadata instance
                 */
                public static create(properties?: google.iam.v3beta.IOperationMetadata): google.iam.v3beta.OperationMetadata;

                /**
                 * Encodes the specified OperationMetadata message. Does not implicitly {@link google.iam.v3beta.OperationMetadata.verify|verify} messages.
                 * @param message OperationMetadata message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v3beta.IOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified OperationMetadata message, length delimited. Does not implicitly {@link google.iam.v3beta.OperationMetadata.verify|verify} messages.
                 * @param message OperationMetadata message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v3beta.IOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an OperationMetadata message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns OperationMetadata
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v3beta.OperationMetadata;

                /**
                 * Decodes an OperationMetadata message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns OperationMetadata
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v3beta.OperationMetadata;

                /**
                 * Verifies an OperationMetadata message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an OperationMetadata message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns OperationMetadata
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v3beta.OperationMetadata;

                /**
                 * Creates a plain object from an OperationMetadata message. Also converts values to other types if specified.
                 * @param message OperationMetadata
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v3beta.OperationMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this OperationMetadata to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for OperationMetadata
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a PolicyBinding. */
            interface IPolicyBinding {

                /** PolicyBinding name */
                name?: (string|null);

                /** PolicyBinding uid */
                uid?: (string|null);

                /** PolicyBinding etag */
                etag?: (string|null);

                /** PolicyBinding displayName */
                displayName?: (string|null);

                /** PolicyBinding annotations */
                annotations?: ({ [k: string]: string }|null);

                /** PolicyBinding target */
                target?: (google.iam.v3beta.PolicyBinding.ITarget|null);

                /** PolicyBinding policyKind */
                policyKind?: (google.iam.v3beta.PolicyBinding.PolicyKind|keyof typeof google.iam.v3beta.PolicyBinding.PolicyKind|null);

                /** PolicyBinding policy */
                policy?: (string|null);

                /** PolicyBinding policyUid */
                policyUid?: (string|null);

                /** PolicyBinding condition */
                condition?: (google.type.IExpr|null);

                /** PolicyBinding createTime */
                createTime?: (google.protobuf.ITimestamp|null);

                /** PolicyBinding updateTime */
                updateTime?: (google.protobuf.ITimestamp|null);
            }

            /** Represents a PolicyBinding. */
            class PolicyBinding implements IPolicyBinding {

                /**
                 * Constructs a new PolicyBinding.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v3beta.IPolicyBinding);

                /** PolicyBinding name. */
                public name: string;

                /** PolicyBinding uid. */
                public uid: string;

                /** PolicyBinding etag. */
                public etag: string;

                /** PolicyBinding displayName. */
                public displayName: string;

                /** PolicyBinding annotations. */
                public annotations: { [k: string]: string };

                /** PolicyBinding target. */
                public target?: (google.iam.v3beta.PolicyBinding.ITarget|null);

                /** PolicyBinding policyKind. */
                public policyKind: (google.iam.v3beta.PolicyBinding.PolicyKind|keyof typeof google.iam.v3beta.PolicyBinding.PolicyKind);

                /** PolicyBinding policy. */
                public policy: string;

                /** PolicyBinding policyUid. */
                public policyUid: string;

                /** PolicyBinding condition. */
                public condition?: (google.type.IExpr|null);

                /** PolicyBinding createTime. */
                public createTime?: (google.protobuf.ITimestamp|null);

                /** PolicyBinding updateTime. */
                public updateTime?: (google.protobuf.ITimestamp|null);

                /**
                 * Creates a new PolicyBinding instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns PolicyBinding instance
                 */
                public static create(properties?: google.iam.v3beta.IPolicyBinding): google.iam.v3beta.PolicyBinding;

                /**
                 * Encodes the specified PolicyBinding message. Does not implicitly {@link google.iam.v3beta.PolicyBinding.verify|verify} messages.
                 * @param message PolicyBinding message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v3beta.IPolicyBinding, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified PolicyBinding message, length delimited. Does not implicitly {@link google.iam.v3beta.PolicyBinding.verify|verify} messages.
                 * @param message PolicyBinding message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v3beta.IPolicyBinding, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a PolicyBinding message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns PolicyBinding
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v3beta.PolicyBinding;

                /**
                 * Decodes a PolicyBinding message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns PolicyBinding
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v3beta.PolicyBinding;

                /**
                 * Verifies a PolicyBinding message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a PolicyBinding message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns PolicyBinding
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v3beta.PolicyBinding;

                /**
                 * Creates a plain object from a PolicyBinding message. Also converts values to other types if specified.
                 * @param message PolicyBinding
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v3beta.PolicyBinding, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this PolicyBinding to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for PolicyBinding
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace PolicyBinding {

                /** Properties of a Target. */
                interface ITarget {

                    /** Target principalSet */
                    principalSet?: (string|null);
                }

                /** Represents a Target. */
                class Target implements ITarget {

                    /**
                     * Constructs a new Target.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.iam.v3beta.PolicyBinding.ITarget);

                    /** Target principalSet. */
                    public principalSet?: (string|null);

                    /** Target target. */
                    public target?: "principalSet";

                    /**
                     * Creates a new Target instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Target instance
                     */
                    public static create(properties?: google.iam.v3beta.PolicyBinding.ITarget): google.iam.v3beta.PolicyBinding.Target;

                    /**
                     * Encodes the specified Target message. Does not implicitly {@link google.iam.v3beta.PolicyBinding.Target.verify|verify} messages.
                     * @param message Target message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.iam.v3beta.PolicyBinding.ITarget, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Target message, length delimited. Does not implicitly {@link google.iam.v3beta.PolicyBinding.Target.verify|verify} messages.
                     * @param message Target message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.iam.v3beta.PolicyBinding.ITarget, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Target message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Target
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v3beta.PolicyBinding.Target;

                    /**
                     * Decodes a Target message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Target
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v3beta.PolicyBinding.Target;

                    /**
                     * Verifies a Target message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Target message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Target
                     */
                    public static fromObject(object: { [k: string]: any }): google.iam.v3beta.PolicyBinding.Target;

                    /**
                     * Creates a plain object from a Target message. Also converts values to other types if specified.
                     * @param message Target
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.iam.v3beta.PolicyBinding.Target, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Target to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Target
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** PolicyKind enum. */
                enum PolicyKind {
                    POLICY_KIND_UNSPECIFIED = 0,
                    PRINCIPAL_ACCESS_BOUNDARY = 1
                }
            }

            /** Represents a PolicyBindings */
            class PolicyBindings extends $protobuf.rpc.Service {

                /**
                 * Constructs a new PolicyBindings service.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 */
                constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                /**
                 * Creates new PolicyBindings service using the specified rpc implementation.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 * @returns RPC service. Useful where requests and/or responses are streamed.
                 */
                public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): PolicyBindings;

                /**
                 * Calls CreatePolicyBinding.
                 * @param request CreatePolicyBindingRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Operation
                 */
                public createPolicyBinding(request: google.iam.v3beta.ICreatePolicyBindingRequest, callback: google.iam.v3beta.PolicyBindings.CreatePolicyBindingCallback): void;

                /**
                 * Calls CreatePolicyBinding.
                 * @param request CreatePolicyBindingRequest message or plain object
                 * @returns Promise
                 */
                public createPolicyBinding(request: google.iam.v3beta.ICreatePolicyBindingRequest): Promise<google.longrunning.Operation>;

                /**
                 * Calls GetPolicyBinding.
                 * @param request GetPolicyBindingRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and PolicyBinding
                 */
                public getPolicyBinding(request: google.iam.v3beta.IGetPolicyBindingRequest, callback: google.iam.v3beta.PolicyBindings.GetPolicyBindingCallback): void;

                /**
                 * Calls GetPolicyBinding.
                 * @param request GetPolicyBindingRequest message or plain object
                 * @returns Promise
                 */
                public getPolicyBinding(request: google.iam.v3beta.IGetPolicyBindingRequest): Promise<google.iam.v3beta.PolicyBinding>;

                /**
                 * Calls UpdatePolicyBinding.
                 * @param request UpdatePolicyBindingRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Operation
                 */
                public updatePolicyBinding(request: google.iam.v3beta.IUpdatePolicyBindingRequest, callback: google.iam.v3beta.PolicyBindings.UpdatePolicyBindingCallback): void;

                /**
                 * Calls UpdatePolicyBinding.
                 * @param request UpdatePolicyBindingRequest message or plain object
                 * @returns Promise
                 */
                public updatePolicyBinding(request: google.iam.v3beta.IUpdatePolicyBindingRequest): Promise<google.longrunning.Operation>;

                /**
                 * Calls DeletePolicyBinding.
                 * @param request DeletePolicyBindingRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Operation
                 */
                public deletePolicyBinding(request: google.iam.v3beta.IDeletePolicyBindingRequest, callback: google.iam.v3beta.PolicyBindings.DeletePolicyBindingCallback): void;

                /**
                 * Calls DeletePolicyBinding.
                 * @param request DeletePolicyBindingRequest message or plain object
                 * @returns Promise
                 */
                public deletePolicyBinding(request: google.iam.v3beta.IDeletePolicyBindingRequest): Promise<google.longrunning.Operation>;

                /**
                 * Calls ListPolicyBindings.
                 * @param request ListPolicyBindingsRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and ListPolicyBindingsResponse
                 */
                public listPolicyBindings(request: google.iam.v3beta.IListPolicyBindingsRequest, callback: google.iam.v3beta.PolicyBindings.ListPolicyBindingsCallback): void;

                /**
                 * Calls ListPolicyBindings.
                 * @param request ListPolicyBindingsRequest message or plain object
                 * @returns Promise
                 */
                public listPolicyBindings(request: google.iam.v3beta.IListPolicyBindingsRequest): Promise<google.iam.v3beta.ListPolicyBindingsResponse>;

                /**
                 * Calls SearchTargetPolicyBindings.
                 * @param request SearchTargetPolicyBindingsRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and SearchTargetPolicyBindingsResponse
                 */
                public searchTargetPolicyBindings(request: google.iam.v3beta.ISearchTargetPolicyBindingsRequest, callback: google.iam.v3beta.PolicyBindings.SearchTargetPolicyBindingsCallback): void;

                /**
                 * Calls SearchTargetPolicyBindings.
                 * @param request SearchTargetPolicyBindingsRequest message or plain object
                 * @returns Promise
                 */
                public searchTargetPolicyBindings(request: google.iam.v3beta.ISearchTargetPolicyBindingsRequest): Promise<google.iam.v3beta.SearchTargetPolicyBindingsResponse>;
            }

            namespace PolicyBindings {

                /**
                 * Callback as used by {@link google.iam.v3beta.PolicyBindings|createPolicyBinding}.
                 * @param error Error, if any
                 * @param [response] Operation
                 */
                type CreatePolicyBindingCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                /**
                 * Callback as used by {@link google.iam.v3beta.PolicyBindings|getPolicyBinding}.
                 * @param error Error, if any
                 * @param [response] PolicyBinding
                 */
                type GetPolicyBindingCallback = (error: (Error|null), response?: google.iam.v3beta.PolicyBinding) => void;

                /**
                 * Callback as used by {@link google.iam.v3beta.PolicyBindings|updatePolicyBinding}.
                 * @param error Error, if any
                 * @param [response] Operation
                 */
                type UpdatePolicyBindingCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                /**
                 * Callback as used by {@link google.iam.v3beta.PolicyBindings|deletePolicyBinding}.
                 * @param error Error, if any
                 * @param [response] Operation
                 */
                type DeletePolicyBindingCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                /**
                 * Callback as used by {@link google.iam.v3beta.PolicyBindings|listPolicyBindings}.
                 * @param error Error, if any
                 * @param [response] ListPolicyBindingsResponse
                 */
                type ListPolicyBindingsCallback = (error: (Error|null), response?: google.iam.v3beta.ListPolicyBindingsResponse) => void;

                /**
                 * Callback as used by {@link google.iam.v3beta.PolicyBindings|searchTargetPolicyBindings}.
                 * @param error Error, if any
                 * @param [response] SearchTargetPolicyBindingsResponse
                 */
                type SearchTargetPolicyBindingsCallback = (error: (Error|null), response?: google.iam.v3beta.SearchTargetPolicyBindingsResponse) => void;
            }

            /** Properties of a CreatePolicyBindingRequest. */
            interface ICreatePolicyBindingRequest {

                /** CreatePolicyBindingRequest parent */
                parent?: (string|null);

                /** CreatePolicyBindingRequest policyBindingId */
                policyBindingId?: (string|null);

                /** CreatePolicyBindingRequest policyBinding */
                policyBinding?: (google.iam.v3beta.IPolicyBinding|null);

                /** CreatePolicyBindingRequest validateOnly */
                validateOnly?: (boolean|null);
            }

            /** Represents a CreatePolicyBindingRequest. */
            class CreatePolicyBindingRequest implements ICreatePolicyBindingRequest {

                /**
                 * Constructs a new CreatePolicyBindingRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v3beta.ICreatePolicyBindingRequest);

                /** CreatePolicyBindingRequest parent. */
                public parent: string;

                /** CreatePolicyBindingRequest policyBindingId. */
                public policyBindingId: string;

                /** CreatePolicyBindingRequest policyBinding. */
                public policyBinding?: (google.iam.v3beta.IPolicyBinding|null);

                /** CreatePolicyBindingRequest validateOnly. */
                public validateOnly: boolean;

                /**
                 * Creates a new CreatePolicyBindingRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CreatePolicyBindingRequest instance
                 */
                public static create(properties?: google.iam.v3beta.ICreatePolicyBindingRequest): google.iam.v3beta.CreatePolicyBindingRequest;

                /**
                 * Encodes the specified CreatePolicyBindingRequest message. Does not implicitly {@link google.iam.v3beta.CreatePolicyBindingRequest.verify|verify} messages.
                 * @param message CreatePolicyBindingRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v3beta.ICreatePolicyBindingRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CreatePolicyBindingRequest message, length delimited. Does not implicitly {@link google.iam.v3beta.CreatePolicyBindingRequest.verify|verify} messages.
                 * @param message CreatePolicyBindingRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v3beta.ICreatePolicyBindingRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CreatePolicyBindingRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CreatePolicyBindingRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v3beta.CreatePolicyBindingRequest;

                /**
                 * Decodes a CreatePolicyBindingRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CreatePolicyBindingRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v3beta.CreatePolicyBindingRequest;

                /**
                 * Verifies a CreatePolicyBindingRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CreatePolicyBindingRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CreatePolicyBindingRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v3beta.CreatePolicyBindingRequest;

                /**
                 * Creates a plain object from a CreatePolicyBindingRequest message. Also converts values to other types if specified.
                 * @param message CreatePolicyBindingRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v3beta.CreatePolicyBindingRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CreatePolicyBindingRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for CreatePolicyBindingRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a GetPolicyBindingRequest. */
            interface IGetPolicyBindingRequest {

                /** GetPolicyBindingRequest name */
                name?: (string|null);
            }

            /** Represents a GetPolicyBindingRequest. */
            class GetPolicyBindingRequest implements IGetPolicyBindingRequest {

                /**
                 * Constructs a new GetPolicyBindingRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v3beta.IGetPolicyBindingRequest);

                /** GetPolicyBindingRequest name. */
                public name: string;

                /**
                 * Creates a new GetPolicyBindingRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GetPolicyBindingRequest instance
                 */
                public static create(properties?: google.iam.v3beta.IGetPolicyBindingRequest): google.iam.v3beta.GetPolicyBindingRequest;

                /**
                 * Encodes the specified GetPolicyBindingRequest message. Does not implicitly {@link google.iam.v3beta.GetPolicyBindingRequest.verify|verify} messages.
                 * @param message GetPolicyBindingRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v3beta.IGetPolicyBindingRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GetPolicyBindingRequest message, length delimited. Does not implicitly {@link google.iam.v3beta.GetPolicyBindingRequest.verify|verify} messages.
                 * @param message GetPolicyBindingRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v3beta.IGetPolicyBindingRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GetPolicyBindingRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GetPolicyBindingRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v3beta.GetPolicyBindingRequest;

                /**
                 * Decodes a GetPolicyBindingRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GetPolicyBindingRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v3beta.GetPolicyBindingRequest;

                /**
                 * Verifies a GetPolicyBindingRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GetPolicyBindingRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GetPolicyBindingRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v3beta.GetPolicyBindingRequest;

                /**
                 * Creates a plain object from a GetPolicyBindingRequest message. Also converts values to other types if specified.
                 * @param message GetPolicyBindingRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v3beta.GetPolicyBindingRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GetPolicyBindingRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for GetPolicyBindingRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of an UpdatePolicyBindingRequest. */
            interface IUpdatePolicyBindingRequest {

                /** UpdatePolicyBindingRequest policyBinding */
                policyBinding?: (google.iam.v3beta.IPolicyBinding|null);

                /** UpdatePolicyBindingRequest validateOnly */
                validateOnly?: (boolean|null);

                /** UpdatePolicyBindingRequest updateMask */
                updateMask?: (google.protobuf.IFieldMask|null);
            }

            /** Represents an UpdatePolicyBindingRequest. */
            class UpdatePolicyBindingRequest implements IUpdatePolicyBindingRequest {

                /**
                 * Constructs a new UpdatePolicyBindingRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v3beta.IUpdatePolicyBindingRequest);

                /** UpdatePolicyBindingRequest policyBinding. */
                public policyBinding?: (google.iam.v3beta.IPolicyBinding|null);

                /** UpdatePolicyBindingRequest validateOnly. */
                public validateOnly: boolean;

                /** UpdatePolicyBindingRequest updateMask. */
                public updateMask?: (google.protobuf.IFieldMask|null);

                /**
                 * Creates a new UpdatePolicyBindingRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns UpdatePolicyBindingRequest instance
                 */
                public static create(properties?: google.iam.v3beta.IUpdatePolicyBindingRequest): google.iam.v3beta.UpdatePolicyBindingRequest;

                /**
                 * Encodes the specified UpdatePolicyBindingRequest message. Does not implicitly {@link google.iam.v3beta.UpdatePolicyBindingRequest.verify|verify} messages.
                 * @param message UpdatePolicyBindingRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v3beta.IUpdatePolicyBindingRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified UpdatePolicyBindingRequest message, length delimited. Does not implicitly {@link google.iam.v3beta.UpdatePolicyBindingRequest.verify|verify} messages.
                 * @param message UpdatePolicyBindingRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v3beta.IUpdatePolicyBindingRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an UpdatePolicyBindingRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns UpdatePolicyBindingRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v3beta.UpdatePolicyBindingRequest;

                /**
                 * Decodes an UpdatePolicyBindingRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns UpdatePolicyBindingRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v3beta.UpdatePolicyBindingRequest;

                /**
                 * Verifies an UpdatePolicyBindingRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an UpdatePolicyBindingRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns UpdatePolicyBindingRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v3beta.UpdatePolicyBindingRequest;

                /**
                 * Creates a plain object from an UpdatePolicyBindingRequest message. Also converts values to other types if specified.
                 * @param message UpdatePolicyBindingRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v3beta.UpdatePolicyBindingRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this UpdatePolicyBindingRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for UpdatePolicyBindingRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a DeletePolicyBindingRequest. */
            interface IDeletePolicyBindingRequest {

                /** DeletePolicyBindingRequest name */
                name?: (string|null);

                /** DeletePolicyBindingRequest etag */
                etag?: (string|null);

                /** DeletePolicyBindingRequest validateOnly */
                validateOnly?: (boolean|null);
            }

            /** Represents a DeletePolicyBindingRequest. */
            class DeletePolicyBindingRequest implements IDeletePolicyBindingRequest {

                /**
                 * Constructs a new DeletePolicyBindingRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v3beta.IDeletePolicyBindingRequest);

                /** DeletePolicyBindingRequest name. */
                public name: string;

                /** DeletePolicyBindingRequest etag. */
                public etag: string;

                /** DeletePolicyBindingRequest validateOnly. */
                public validateOnly: boolean;

                /**
                 * Creates a new DeletePolicyBindingRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns DeletePolicyBindingRequest instance
                 */
                public static create(properties?: google.iam.v3beta.IDeletePolicyBindingRequest): google.iam.v3beta.DeletePolicyBindingRequest;

                /**
                 * Encodes the specified DeletePolicyBindingRequest message. Does not implicitly {@link google.iam.v3beta.DeletePolicyBindingRequest.verify|verify} messages.
                 * @param message DeletePolicyBindingRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v3beta.IDeletePolicyBindingRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified DeletePolicyBindingRequest message, length delimited. Does not implicitly {@link google.iam.v3beta.DeletePolicyBindingRequest.verify|verify} messages.
                 * @param message DeletePolicyBindingRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v3beta.IDeletePolicyBindingRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DeletePolicyBindingRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns DeletePolicyBindingRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v3beta.DeletePolicyBindingRequest;

                /**
                 * Decodes a DeletePolicyBindingRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns DeletePolicyBindingRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v3beta.DeletePolicyBindingRequest;

                /**
                 * Verifies a DeletePolicyBindingRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a DeletePolicyBindingRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns DeletePolicyBindingRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v3beta.DeletePolicyBindingRequest;

                /**
                 * Creates a plain object from a DeletePolicyBindingRequest message. Also converts values to other types if specified.
                 * @param message DeletePolicyBindingRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v3beta.DeletePolicyBindingRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this DeletePolicyBindingRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for DeletePolicyBindingRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a ListPolicyBindingsRequest. */
            interface IListPolicyBindingsRequest {

                /** ListPolicyBindingsRequest parent */
                parent?: (string|null);

                /** ListPolicyBindingsRequest pageSize */
                pageSize?: (number|null);

                /** ListPolicyBindingsRequest pageToken */
                pageToken?: (string|null);

                /** ListPolicyBindingsRequest filter */
                filter?: (string|null);
            }

            /** Represents a ListPolicyBindingsRequest. */
            class ListPolicyBindingsRequest implements IListPolicyBindingsRequest {

                /**
                 * Constructs a new ListPolicyBindingsRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v3beta.IListPolicyBindingsRequest);

                /** ListPolicyBindingsRequest parent. */
                public parent: string;

                /** ListPolicyBindingsRequest pageSize. */
                public pageSize: number;

                /** ListPolicyBindingsRequest pageToken. */
                public pageToken: string;

                /** ListPolicyBindingsRequest filter. */
                public filter: string;

                /**
                 * Creates a new ListPolicyBindingsRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ListPolicyBindingsRequest instance
                 */
                public static create(properties?: google.iam.v3beta.IListPolicyBindingsRequest): google.iam.v3beta.ListPolicyBindingsRequest;

                /**
                 * Encodes the specified ListPolicyBindingsRequest message. Does not implicitly {@link google.iam.v3beta.ListPolicyBindingsRequest.verify|verify} messages.
                 * @param message ListPolicyBindingsRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v3beta.IListPolicyBindingsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ListPolicyBindingsRequest message, length delimited. Does not implicitly {@link google.iam.v3beta.ListPolicyBindingsRequest.verify|verify} messages.
                 * @param message ListPolicyBindingsRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v3beta.IListPolicyBindingsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ListPolicyBindingsRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ListPolicyBindingsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v3beta.ListPolicyBindingsRequest;

                /**
                 * Decodes a ListPolicyBindingsRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ListPolicyBindingsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v3beta.ListPolicyBindingsRequest;

                /**
                 * Verifies a ListPolicyBindingsRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ListPolicyBindingsRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ListPolicyBindingsRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v3beta.ListPolicyBindingsRequest;

                /**
                 * Creates a plain object from a ListPolicyBindingsRequest message. Also converts values to other types if specified.
                 * @param message ListPolicyBindingsRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v3beta.ListPolicyBindingsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ListPolicyBindingsRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ListPolicyBindingsRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a ListPolicyBindingsResponse. */
            interface IListPolicyBindingsResponse {

                /** ListPolicyBindingsResponse policyBindings */
                policyBindings?: (google.iam.v3beta.IPolicyBinding[]|null);

                /** ListPolicyBindingsResponse nextPageToken */
                nextPageToken?: (string|null);
            }

            /** Represents a ListPolicyBindingsResponse. */
            class ListPolicyBindingsResponse implements IListPolicyBindingsResponse {

                /**
                 * Constructs a new ListPolicyBindingsResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v3beta.IListPolicyBindingsResponse);

                /** ListPolicyBindingsResponse policyBindings. */
                public policyBindings: google.iam.v3beta.IPolicyBinding[];

                /** ListPolicyBindingsResponse nextPageToken. */
                public nextPageToken: string;

                /**
                 * Creates a new ListPolicyBindingsResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ListPolicyBindingsResponse instance
                 */
                public static create(properties?: google.iam.v3beta.IListPolicyBindingsResponse): google.iam.v3beta.ListPolicyBindingsResponse;

                /**
                 * Encodes the specified ListPolicyBindingsResponse message. Does not implicitly {@link google.iam.v3beta.ListPolicyBindingsResponse.verify|verify} messages.
                 * @param message ListPolicyBindingsResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v3beta.IListPolicyBindingsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ListPolicyBindingsResponse message, length delimited. Does not implicitly {@link google.iam.v3beta.ListPolicyBindingsResponse.verify|verify} messages.
                 * @param message ListPolicyBindingsResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v3beta.IListPolicyBindingsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ListPolicyBindingsResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ListPolicyBindingsResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v3beta.ListPolicyBindingsResponse;

                /**
                 * Decodes a ListPolicyBindingsResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ListPolicyBindingsResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v3beta.ListPolicyBindingsResponse;

                /**
                 * Verifies a ListPolicyBindingsResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ListPolicyBindingsResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ListPolicyBindingsResponse
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v3beta.ListPolicyBindingsResponse;

                /**
                 * Creates a plain object from a ListPolicyBindingsResponse message. Also converts values to other types if specified.
                 * @param message ListPolicyBindingsResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v3beta.ListPolicyBindingsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ListPolicyBindingsResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ListPolicyBindingsResponse
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a SearchTargetPolicyBindingsRequest. */
            interface ISearchTargetPolicyBindingsRequest {

                /** SearchTargetPolicyBindingsRequest target */
                target?: (string|null);

                /** SearchTargetPolicyBindingsRequest pageSize */
                pageSize?: (number|null);

                /** SearchTargetPolicyBindingsRequest pageToken */
                pageToken?: (string|null);

                /** SearchTargetPolicyBindingsRequest parent */
                parent?: (string|null);
            }

            /** Represents a SearchTargetPolicyBindingsRequest. */
            class SearchTargetPolicyBindingsRequest implements ISearchTargetPolicyBindingsRequest {

                /**
                 * Constructs a new SearchTargetPolicyBindingsRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v3beta.ISearchTargetPolicyBindingsRequest);

                /** SearchTargetPolicyBindingsRequest target. */
                public target: string;

                /** SearchTargetPolicyBindingsRequest pageSize. */
                public pageSize: number;

                /** SearchTargetPolicyBindingsRequest pageToken. */
                public pageToken: string;

                /** SearchTargetPolicyBindingsRequest parent. */
                public parent: string;

                /**
                 * Creates a new SearchTargetPolicyBindingsRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SearchTargetPolicyBindingsRequest instance
                 */
                public static create(properties?: google.iam.v3beta.ISearchTargetPolicyBindingsRequest): google.iam.v3beta.SearchTargetPolicyBindingsRequest;

                /**
                 * Encodes the specified SearchTargetPolicyBindingsRequest message. Does not implicitly {@link google.iam.v3beta.SearchTargetPolicyBindingsRequest.verify|verify} messages.
                 * @param message SearchTargetPolicyBindingsRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v3beta.ISearchTargetPolicyBindingsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SearchTargetPolicyBindingsRequest message, length delimited. Does not implicitly {@link google.iam.v3beta.SearchTargetPolicyBindingsRequest.verify|verify} messages.
                 * @param message SearchTargetPolicyBindingsRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v3beta.ISearchTargetPolicyBindingsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SearchTargetPolicyBindingsRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SearchTargetPolicyBindingsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v3beta.SearchTargetPolicyBindingsRequest;

                /**
                 * Decodes a SearchTargetPolicyBindingsRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SearchTargetPolicyBindingsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v3beta.SearchTargetPolicyBindingsRequest;

                /**
                 * Verifies a SearchTargetPolicyBindingsRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SearchTargetPolicyBindingsRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SearchTargetPolicyBindingsRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v3beta.SearchTargetPolicyBindingsRequest;

                /**
                 * Creates a plain object from a SearchTargetPolicyBindingsRequest message. Also converts values to other types if specified.
                 * @param message SearchTargetPolicyBindingsRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v3beta.SearchTargetPolicyBindingsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SearchTargetPolicyBindingsRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for SearchTargetPolicyBindingsRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a SearchTargetPolicyBindingsResponse. */
            interface ISearchTargetPolicyBindingsResponse {

                /** SearchTargetPolicyBindingsResponse policyBindings */
                policyBindings?: (google.iam.v3beta.IPolicyBinding[]|null);

                /** SearchTargetPolicyBindingsResponse nextPageToken */
                nextPageToken?: (string|null);
            }

            /** Represents a SearchTargetPolicyBindingsResponse. */
            class SearchTargetPolicyBindingsResponse implements ISearchTargetPolicyBindingsResponse {

                /**
                 * Constructs a new SearchTargetPolicyBindingsResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v3beta.ISearchTargetPolicyBindingsResponse);

                /** SearchTargetPolicyBindingsResponse policyBindings. */
                public policyBindings: google.iam.v3beta.IPolicyBinding[];

                /** SearchTargetPolicyBindingsResponse nextPageToken. */
                public nextPageToken: string;

                /**
                 * Creates a new SearchTargetPolicyBindingsResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SearchTargetPolicyBindingsResponse instance
                 */
                public static create(properties?: google.iam.v3beta.ISearchTargetPolicyBindingsResponse): google.iam.v3beta.SearchTargetPolicyBindingsResponse;

                /**
                 * Encodes the specified SearchTargetPolicyBindingsResponse message. Does not implicitly {@link google.iam.v3beta.SearchTargetPolicyBindingsResponse.verify|verify} messages.
                 * @param message SearchTargetPolicyBindingsResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v3beta.ISearchTargetPolicyBindingsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SearchTargetPolicyBindingsResponse message, length delimited. Does not implicitly {@link google.iam.v3beta.SearchTargetPolicyBindingsResponse.verify|verify} messages.
                 * @param message SearchTargetPolicyBindingsResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v3beta.ISearchTargetPolicyBindingsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SearchTargetPolicyBindingsResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SearchTargetPolicyBindingsResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v3beta.SearchTargetPolicyBindingsResponse;

                /**
                 * Decodes a SearchTargetPolicyBindingsResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SearchTargetPolicyBindingsResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v3beta.SearchTargetPolicyBindingsResponse;

                /**
                 * Verifies a SearchTargetPolicyBindingsResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SearchTargetPolicyBindingsResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SearchTargetPolicyBindingsResponse
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v3beta.SearchTargetPolicyBindingsResponse;

                /**
                 * Creates a plain object from a SearchTargetPolicyBindingsResponse message. Also converts values to other types if specified.
                 * @param message SearchTargetPolicyBindingsResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v3beta.SearchTargetPolicyBindingsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SearchTargetPolicyBindingsResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for SearchTargetPolicyBindingsResponse
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Represents a PrincipalAccessBoundaryPolicies */
            class PrincipalAccessBoundaryPolicies extends $protobuf.rpc.Service {

                /**
                 * Constructs a new PrincipalAccessBoundaryPolicies service.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 */
                constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                /**
                 * Creates new PrincipalAccessBoundaryPolicies service using the specified rpc implementation.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 * @returns RPC service. Useful where requests and/or responses are streamed.
                 */
                public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): PrincipalAccessBoundaryPolicies;

                /**
                 * Calls CreatePrincipalAccessBoundaryPolicy.
                 * @param request CreatePrincipalAccessBoundaryPolicyRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Operation
                 */
                public createPrincipalAccessBoundaryPolicy(request: google.iam.v3beta.ICreatePrincipalAccessBoundaryPolicyRequest, callback: google.iam.v3beta.PrincipalAccessBoundaryPolicies.CreatePrincipalAccessBoundaryPolicyCallback): void;

                /**
                 * Calls CreatePrincipalAccessBoundaryPolicy.
                 * @param request CreatePrincipalAccessBoundaryPolicyRequest message or plain object
                 * @returns Promise
                 */
                public createPrincipalAccessBoundaryPolicy(request: google.iam.v3beta.ICreatePrincipalAccessBoundaryPolicyRequest): Promise<google.longrunning.Operation>;

                /**
                 * Calls GetPrincipalAccessBoundaryPolicy.
                 * @param request GetPrincipalAccessBoundaryPolicyRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and PrincipalAccessBoundaryPolicy
                 */
                public getPrincipalAccessBoundaryPolicy(request: google.iam.v3beta.IGetPrincipalAccessBoundaryPolicyRequest, callback: google.iam.v3beta.PrincipalAccessBoundaryPolicies.GetPrincipalAccessBoundaryPolicyCallback): void;

                /**
                 * Calls GetPrincipalAccessBoundaryPolicy.
                 * @param request GetPrincipalAccessBoundaryPolicyRequest message or plain object
                 * @returns Promise
                 */
                public getPrincipalAccessBoundaryPolicy(request: google.iam.v3beta.IGetPrincipalAccessBoundaryPolicyRequest): Promise<google.iam.v3beta.PrincipalAccessBoundaryPolicy>;

                /**
                 * Calls UpdatePrincipalAccessBoundaryPolicy.
                 * @param request UpdatePrincipalAccessBoundaryPolicyRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Operation
                 */
                public updatePrincipalAccessBoundaryPolicy(request: google.iam.v3beta.IUpdatePrincipalAccessBoundaryPolicyRequest, callback: google.iam.v3beta.PrincipalAccessBoundaryPolicies.UpdatePrincipalAccessBoundaryPolicyCallback): void;

                /**
                 * Calls UpdatePrincipalAccessBoundaryPolicy.
                 * @param request UpdatePrincipalAccessBoundaryPolicyRequest message or plain object
                 * @returns Promise
                 */
                public updatePrincipalAccessBoundaryPolicy(request: google.iam.v3beta.IUpdatePrincipalAccessBoundaryPolicyRequest): Promise<google.longrunning.Operation>;

                /**
                 * Calls DeletePrincipalAccessBoundaryPolicy.
                 * @param request DeletePrincipalAccessBoundaryPolicyRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Operation
                 */
                public deletePrincipalAccessBoundaryPolicy(request: google.iam.v3beta.IDeletePrincipalAccessBoundaryPolicyRequest, callback: google.iam.v3beta.PrincipalAccessBoundaryPolicies.DeletePrincipalAccessBoundaryPolicyCallback): void;

                /**
                 * Calls DeletePrincipalAccessBoundaryPolicy.
                 * @param request DeletePrincipalAccessBoundaryPolicyRequest message or plain object
                 * @returns Promise
                 */
                public deletePrincipalAccessBoundaryPolicy(request: google.iam.v3beta.IDeletePrincipalAccessBoundaryPolicyRequest): Promise<google.longrunning.Operation>;

                /**
                 * Calls ListPrincipalAccessBoundaryPolicies.
                 * @param request ListPrincipalAccessBoundaryPoliciesRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and ListPrincipalAccessBoundaryPoliciesResponse
                 */
                public listPrincipalAccessBoundaryPolicies(request: google.iam.v3beta.IListPrincipalAccessBoundaryPoliciesRequest, callback: google.iam.v3beta.PrincipalAccessBoundaryPolicies.ListPrincipalAccessBoundaryPoliciesCallback): void;

                /**
                 * Calls ListPrincipalAccessBoundaryPolicies.
                 * @param request ListPrincipalAccessBoundaryPoliciesRequest message or plain object
                 * @returns Promise
                 */
                public listPrincipalAccessBoundaryPolicies(request: google.iam.v3beta.IListPrincipalAccessBoundaryPoliciesRequest): Promise<google.iam.v3beta.ListPrincipalAccessBoundaryPoliciesResponse>;

                /**
                 * Calls SearchPrincipalAccessBoundaryPolicyBindings.
                 * @param request SearchPrincipalAccessBoundaryPolicyBindingsRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and SearchPrincipalAccessBoundaryPolicyBindingsResponse
                 */
                public searchPrincipalAccessBoundaryPolicyBindings(request: google.iam.v3beta.ISearchPrincipalAccessBoundaryPolicyBindingsRequest, callback: google.iam.v3beta.PrincipalAccessBoundaryPolicies.SearchPrincipalAccessBoundaryPolicyBindingsCallback): void;

                /**
                 * Calls SearchPrincipalAccessBoundaryPolicyBindings.
                 * @param request SearchPrincipalAccessBoundaryPolicyBindingsRequest message or plain object
                 * @returns Promise
                 */
                public searchPrincipalAccessBoundaryPolicyBindings(request: google.iam.v3beta.ISearchPrincipalAccessBoundaryPolicyBindingsRequest): Promise<google.iam.v3beta.SearchPrincipalAccessBoundaryPolicyBindingsResponse>;
            }

            namespace PrincipalAccessBoundaryPolicies {

                /**
                 * Callback as used by {@link google.iam.v3beta.PrincipalAccessBoundaryPolicies|createPrincipalAccessBoundaryPolicy}.
                 * @param error Error, if any
                 * @param [response] Operation
                 */
                type CreatePrincipalAccessBoundaryPolicyCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                /**
                 * Callback as used by {@link google.iam.v3beta.PrincipalAccessBoundaryPolicies|getPrincipalAccessBoundaryPolicy}.
                 * @param error Error, if any
                 * @param [response] PrincipalAccessBoundaryPolicy
                 */
                type GetPrincipalAccessBoundaryPolicyCallback = (error: (Error|null), response?: google.iam.v3beta.PrincipalAccessBoundaryPolicy) => void;

                /**
                 * Callback as used by {@link google.iam.v3beta.PrincipalAccessBoundaryPolicies|updatePrincipalAccessBoundaryPolicy}.
                 * @param error Error, if any
                 * @param [response] Operation
                 */
                type UpdatePrincipalAccessBoundaryPolicyCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                /**
                 * Callback as used by {@link google.iam.v3beta.PrincipalAccessBoundaryPolicies|deletePrincipalAccessBoundaryPolicy}.
                 * @param error Error, if any
                 * @param [response] Operation
                 */
                type DeletePrincipalAccessBoundaryPolicyCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                /**
                 * Callback as used by {@link google.iam.v3beta.PrincipalAccessBoundaryPolicies|listPrincipalAccessBoundaryPolicies}.
                 * @param error Error, if any
                 * @param [response] ListPrincipalAccessBoundaryPoliciesResponse
                 */
                type ListPrincipalAccessBoundaryPoliciesCallback = (error: (Error|null), response?: google.iam.v3beta.ListPrincipalAccessBoundaryPoliciesResponse) => void;

                /**
                 * Callback as used by {@link google.iam.v3beta.PrincipalAccessBoundaryPolicies|searchPrincipalAccessBoundaryPolicyBindings}.
                 * @param error Error, if any
                 * @param [response] SearchPrincipalAccessBoundaryPolicyBindingsResponse
                 */
                type SearchPrincipalAccessBoundaryPolicyBindingsCallback = (error: (Error|null), response?: google.iam.v3beta.SearchPrincipalAccessBoundaryPolicyBindingsResponse) => void;
            }

            /** Properties of a CreatePrincipalAccessBoundaryPolicyRequest. */
            interface ICreatePrincipalAccessBoundaryPolicyRequest {

                /** CreatePrincipalAccessBoundaryPolicyRequest parent */
                parent?: (string|null);

                /** CreatePrincipalAccessBoundaryPolicyRequest principalAccessBoundaryPolicyId */
                principalAccessBoundaryPolicyId?: (string|null);

                /** CreatePrincipalAccessBoundaryPolicyRequest principalAccessBoundaryPolicy */
                principalAccessBoundaryPolicy?: (google.iam.v3beta.IPrincipalAccessBoundaryPolicy|null);

                /** CreatePrincipalAccessBoundaryPolicyRequest validateOnly */
                validateOnly?: (boolean|null);
            }

            /** Represents a CreatePrincipalAccessBoundaryPolicyRequest. */
            class CreatePrincipalAccessBoundaryPolicyRequest implements ICreatePrincipalAccessBoundaryPolicyRequest {

                /**
                 * Constructs a new CreatePrincipalAccessBoundaryPolicyRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v3beta.ICreatePrincipalAccessBoundaryPolicyRequest);

                /** CreatePrincipalAccessBoundaryPolicyRequest parent. */
                public parent: string;

                /** CreatePrincipalAccessBoundaryPolicyRequest principalAccessBoundaryPolicyId. */
                public principalAccessBoundaryPolicyId: string;

                /** CreatePrincipalAccessBoundaryPolicyRequest principalAccessBoundaryPolicy. */
                public principalAccessBoundaryPolicy?: (google.iam.v3beta.IPrincipalAccessBoundaryPolicy|null);

                /** CreatePrincipalAccessBoundaryPolicyRequest validateOnly. */
                public validateOnly: boolean;

                /**
                 * Creates a new CreatePrincipalAccessBoundaryPolicyRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CreatePrincipalAccessBoundaryPolicyRequest instance
                 */
                public static create(properties?: google.iam.v3beta.ICreatePrincipalAccessBoundaryPolicyRequest): google.iam.v3beta.CreatePrincipalAccessBoundaryPolicyRequest;

                /**
                 * Encodes the specified CreatePrincipalAccessBoundaryPolicyRequest message. Does not implicitly {@link google.iam.v3beta.CreatePrincipalAccessBoundaryPolicyRequest.verify|verify} messages.
                 * @param message CreatePrincipalAccessBoundaryPolicyRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v3beta.ICreatePrincipalAccessBoundaryPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CreatePrincipalAccessBoundaryPolicyRequest message, length delimited. Does not implicitly {@link google.iam.v3beta.CreatePrincipalAccessBoundaryPolicyRequest.verify|verify} messages.
                 * @param message CreatePrincipalAccessBoundaryPolicyRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v3beta.ICreatePrincipalAccessBoundaryPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CreatePrincipalAccessBoundaryPolicyRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CreatePrincipalAccessBoundaryPolicyRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v3beta.CreatePrincipalAccessBoundaryPolicyRequest;

                /**
                 * Decodes a CreatePrincipalAccessBoundaryPolicyRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CreatePrincipalAccessBoundaryPolicyRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v3beta.CreatePrincipalAccessBoundaryPolicyRequest;

                /**
                 * Verifies a CreatePrincipalAccessBoundaryPolicyRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CreatePrincipalAccessBoundaryPolicyRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CreatePrincipalAccessBoundaryPolicyRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v3beta.CreatePrincipalAccessBoundaryPolicyRequest;

                /**
                 * Creates a plain object from a CreatePrincipalAccessBoundaryPolicyRequest message. Also converts values to other types if specified.
                 * @param message CreatePrincipalAccessBoundaryPolicyRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v3beta.CreatePrincipalAccessBoundaryPolicyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CreatePrincipalAccessBoundaryPolicyRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for CreatePrincipalAccessBoundaryPolicyRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a GetPrincipalAccessBoundaryPolicyRequest. */
            interface IGetPrincipalAccessBoundaryPolicyRequest {

                /** GetPrincipalAccessBoundaryPolicyRequest name */
                name?: (string|null);
            }

            /** Represents a GetPrincipalAccessBoundaryPolicyRequest. */
            class GetPrincipalAccessBoundaryPolicyRequest implements IGetPrincipalAccessBoundaryPolicyRequest {

                /**
                 * Constructs a new GetPrincipalAccessBoundaryPolicyRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v3beta.IGetPrincipalAccessBoundaryPolicyRequest);

                /** GetPrincipalAccessBoundaryPolicyRequest name. */
                public name: string;

                /**
                 * Creates a new GetPrincipalAccessBoundaryPolicyRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GetPrincipalAccessBoundaryPolicyRequest instance
                 */
                public static create(properties?: google.iam.v3beta.IGetPrincipalAccessBoundaryPolicyRequest): google.iam.v3beta.GetPrincipalAccessBoundaryPolicyRequest;

                /**
                 * Encodes the specified GetPrincipalAccessBoundaryPolicyRequest message. Does not implicitly {@link google.iam.v3beta.GetPrincipalAccessBoundaryPolicyRequest.verify|verify} messages.
                 * @param message GetPrincipalAccessBoundaryPolicyRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v3beta.IGetPrincipalAccessBoundaryPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GetPrincipalAccessBoundaryPolicyRequest message, length delimited. Does not implicitly {@link google.iam.v3beta.GetPrincipalAccessBoundaryPolicyRequest.verify|verify} messages.
                 * @param message GetPrincipalAccessBoundaryPolicyRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v3beta.IGetPrincipalAccessBoundaryPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GetPrincipalAccessBoundaryPolicyRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GetPrincipalAccessBoundaryPolicyRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v3beta.GetPrincipalAccessBoundaryPolicyRequest;

                /**
                 * Decodes a GetPrincipalAccessBoundaryPolicyRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GetPrincipalAccessBoundaryPolicyRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v3beta.GetPrincipalAccessBoundaryPolicyRequest;

                /**
                 * Verifies a GetPrincipalAccessBoundaryPolicyRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GetPrincipalAccessBoundaryPolicyRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GetPrincipalAccessBoundaryPolicyRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v3beta.GetPrincipalAccessBoundaryPolicyRequest;

                /**
                 * Creates a plain object from a GetPrincipalAccessBoundaryPolicyRequest message. Also converts values to other types if specified.
                 * @param message GetPrincipalAccessBoundaryPolicyRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v3beta.GetPrincipalAccessBoundaryPolicyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GetPrincipalAccessBoundaryPolicyRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for GetPrincipalAccessBoundaryPolicyRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of an UpdatePrincipalAccessBoundaryPolicyRequest. */
            interface IUpdatePrincipalAccessBoundaryPolicyRequest {

                /** UpdatePrincipalAccessBoundaryPolicyRequest principalAccessBoundaryPolicy */
                principalAccessBoundaryPolicy?: (google.iam.v3beta.IPrincipalAccessBoundaryPolicy|null);

                /** UpdatePrincipalAccessBoundaryPolicyRequest validateOnly */
                validateOnly?: (boolean|null);

                /** UpdatePrincipalAccessBoundaryPolicyRequest updateMask */
                updateMask?: (google.protobuf.IFieldMask|null);
            }

            /** Represents an UpdatePrincipalAccessBoundaryPolicyRequest. */
            class UpdatePrincipalAccessBoundaryPolicyRequest implements IUpdatePrincipalAccessBoundaryPolicyRequest {

                /**
                 * Constructs a new UpdatePrincipalAccessBoundaryPolicyRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v3beta.IUpdatePrincipalAccessBoundaryPolicyRequest);

                /** UpdatePrincipalAccessBoundaryPolicyRequest principalAccessBoundaryPolicy. */
                public principalAccessBoundaryPolicy?: (google.iam.v3beta.IPrincipalAccessBoundaryPolicy|null);

                /** UpdatePrincipalAccessBoundaryPolicyRequest validateOnly. */
                public validateOnly: boolean;

                /** UpdatePrincipalAccessBoundaryPolicyRequest updateMask. */
                public updateMask?: (google.protobuf.IFieldMask|null);

                /**
                 * Creates a new UpdatePrincipalAccessBoundaryPolicyRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns UpdatePrincipalAccessBoundaryPolicyRequest instance
                 */
                public static create(properties?: google.iam.v3beta.IUpdatePrincipalAccessBoundaryPolicyRequest): google.iam.v3beta.UpdatePrincipalAccessBoundaryPolicyRequest;

                /**
                 * Encodes the specified UpdatePrincipalAccessBoundaryPolicyRequest message. Does not implicitly {@link google.iam.v3beta.UpdatePrincipalAccessBoundaryPolicyRequest.verify|verify} messages.
                 * @param message UpdatePrincipalAccessBoundaryPolicyRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v3beta.IUpdatePrincipalAccessBoundaryPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified UpdatePrincipalAccessBoundaryPolicyRequest message, length delimited. Does not implicitly {@link google.iam.v3beta.UpdatePrincipalAccessBoundaryPolicyRequest.verify|verify} messages.
                 * @param message UpdatePrincipalAccessBoundaryPolicyRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v3beta.IUpdatePrincipalAccessBoundaryPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an UpdatePrincipalAccessBoundaryPolicyRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns UpdatePrincipalAccessBoundaryPolicyRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v3beta.UpdatePrincipalAccessBoundaryPolicyRequest;

                /**
                 * Decodes an UpdatePrincipalAccessBoundaryPolicyRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns UpdatePrincipalAccessBoundaryPolicyRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v3beta.UpdatePrincipalAccessBoundaryPolicyRequest;

                /**
                 * Verifies an UpdatePrincipalAccessBoundaryPolicyRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an UpdatePrincipalAccessBoundaryPolicyRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns UpdatePrincipalAccessBoundaryPolicyRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v3beta.UpdatePrincipalAccessBoundaryPolicyRequest;

                /**
                 * Creates a plain object from an UpdatePrincipalAccessBoundaryPolicyRequest message. Also converts values to other types if specified.
                 * @param message UpdatePrincipalAccessBoundaryPolicyRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v3beta.UpdatePrincipalAccessBoundaryPolicyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this UpdatePrincipalAccessBoundaryPolicyRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for UpdatePrincipalAccessBoundaryPolicyRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a DeletePrincipalAccessBoundaryPolicyRequest. */
            interface IDeletePrincipalAccessBoundaryPolicyRequest {

                /** DeletePrincipalAccessBoundaryPolicyRequest name */
                name?: (string|null);

                /** DeletePrincipalAccessBoundaryPolicyRequest etag */
                etag?: (string|null);

                /** DeletePrincipalAccessBoundaryPolicyRequest validateOnly */
                validateOnly?: (boolean|null);

                /** DeletePrincipalAccessBoundaryPolicyRequest force */
                force?: (boolean|null);
            }

            /** Represents a DeletePrincipalAccessBoundaryPolicyRequest. */
            class DeletePrincipalAccessBoundaryPolicyRequest implements IDeletePrincipalAccessBoundaryPolicyRequest {

                /**
                 * Constructs a new DeletePrincipalAccessBoundaryPolicyRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v3beta.IDeletePrincipalAccessBoundaryPolicyRequest);

                /** DeletePrincipalAccessBoundaryPolicyRequest name. */
                public name: string;

                /** DeletePrincipalAccessBoundaryPolicyRequest etag. */
                public etag: string;

                /** DeletePrincipalAccessBoundaryPolicyRequest validateOnly. */
                public validateOnly: boolean;

                /** DeletePrincipalAccessBoundaryPolicyRequest force. */
                public force: boolean;

                /**
                 * Creates a new DeletePrincipalAccessBoundaryPolicyRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns DeletePrincipalAccessBoundaryPolicyRequest instance
                 */
                public static create(properties?: google.iam.v3beta.IDeletePrincipalAccessBoundaryPolicyRequest): google.iam.v3beta.DeletePrincipalAccessBoundaryPolicyRequest;

                /**
                 * Encodes the specified DeletePrincipalAccessBoundaryPolicyRequest message. Does not implicitly {@link google.iam.v3beta.DeletePrincipalAccessBoundaryPolicyRequest.verify|verify} messages.
                 * @param message DeletePrincipalAccessBoundaryPolicyRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v3beta.IDeletePrincipalAccessBoundaryPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified DeletePrincipalAccessBoundaryPolicyRequest message, length delimited. Does not implicitly {@link google.iam.v3beta.DeletePrincipalAccessBoundaryPolicyRequest.verify|verify} messages.
                 * @param message DeletePrincipalAccessBoundaryPolicyRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v3beta.IDeletePrincipalAccessBoundaryPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DeletePrincipalAccessBoundaryPolicyRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns DeletePrincipalAccessBoundaryPolicyRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v3beta.DeletePrincipalAccessBoundaryPolicyRequest;

                /**
                 * Decodes a DeletePrincipalAccessBoundaryPolicyRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns DeletePrincipalAccessBoundaryPolicyRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v3beta.DeletePrincipalAccessBoundaryPolicyRequest;

                /**
                 * Verifies a DeletePrincipalAccessBoundaryPolicyRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a DeletePrincipalAccessBoundaryPolicyRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns DeletePrincipalAccessBoundaryPolicyRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v3beta.DeletePrincipalAccessBoundaryPolicyRequest;

                /**
                 * Creates a plain object from a DeletePrincipalAccessBoundaryPolicyRequest message. Also converts values to other types if specified.
                 * @param message DeletePrincipalAccessBoundaryPolicyRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v3beta.DeletePrincipalAccessBoundaryPolicyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this DeletePrincipalAccessBoundaryPolicyRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for DeletePrincipalAccessBoundaryPolicyRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a ListPrincipalAccessBoundaryPoliciesRequest. */
            interface IListPrincipalAccessBoundaryPoliciesRequest {

                /** ListPrincipalAccessBoundaryPoliciesRequest parent */
                parent?: (string|null);

                /** ListPrincipalAccessBoundaryPoliciesRequest pageSize */
                pageSize?: (number|null);

                /** ListPrincipalAccessBoundaryPoliciesRequest pageToken */
                pageToken?: (string|null);
            }

            /** Represents a ListPrincipalAccessBoundaryPoliciesRequest. */
            class ListPrincipalAccessBoundaryPoliciesRequest implements IListPrincipalAccessBoundaryPoliciesRequest {

                /**
                 * Constructs a new ListPrincipalAccessBoundaryPoliciesRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v3beta.IListPrincipalAccessBoundaryPoliciesRequest);

                /** ListPrincipalAccessBoundaryPoliciesRequest parent. */
                public parent: string;

                /** ListPrincipalAccessBoundaryPoliciesRequest pageSize. */
                public pageSize: number;

                /** ListPrincipalAccessBoundaryPoliciesRequest pageToken. */
                public pageToken: string;

                /**
                 * Creates a new ListPrincipalAccessBoundaryPoliciesRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ListPrincipalAccessBoundaryPoliciesRequest instance
                 */
                public static create(properties?: google.iam.v3beta.IListPrincipalAccessBoundaryPoliciesRequest): google.iam.v3beta.ListPrincipalAccessBoundaryPoliciesRequest;

                /**
                 * Encodes the specified ListPrincipalAccessBoundaryPoliciesRequest message. Does not implicitly {@link google.iam.v3beta.ListPrincipalAccessBoundaryPoliciesRequest.verify|verify} messages.
                 * @param message ListPrincipalAccessBoundaryPoliciesRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v3beta.IListPrincipalAccessBoundaryPoliciesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ListPrincipalAccessBoundaryPoliciesRequest message, length delimited. Does not implicitly {@link google.iam.v3beta.ListPrincipalAccessBoundaryPoliciesRequest.verify|verify} messages.
                 * @param message ListPrincipalAccessBoundaryPoliciesRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v3beta.IListPrincipalAccessBoundaryPoliciesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ListPrincipalAccessBoundaryPoliciesRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ListPrincipalAccessBoundaryPoliciesRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v3beta.ListPrincipalAccessBoundaryPoliciesRequest;

                /**
                 * Decodes a ListPrincipalAccessBoundaryPoliciesRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ListPrincipalAccessBoundaryPoliciesRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v3beta.ListPrincipalAccessBoundaryPoliciesRequest;

                /**
                 * Verifies a ListPrincipalAccessBoundaryPoliciesRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ListPrincipalAccessBoundaryPoliciesRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ListPrincipalAccessBoundaryPoliciesRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v3beta.ListPrincipalAccessBoundaryPoliciesRequest;

                /**
                 * Creates a plain object from a ListPrincipalAccessBoundaryPoliciesRequest message. Also converts values to other types if specified.
                 * @param message ListPrincipalAccessBoundaryPoliciesRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v3beta.ListPrincipalAccessBoundaryPoliciesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ListPrincipalAccessBoundaryPoliciesRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ListPrincipalAccessBoundaryPoliciesRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a ListPrincipalAccessBoundaryPoliciesResponse. */
            interface IListPrincipalAccessBoundaryPoliciesResponse {

                /** ListPrincipalAccessBoundaryPoliciesResponse principalAccessBoundaryPolicies */
                principalAccessBoundaryPolicies?: (google.iam.v3beta.IPrincipalAccessBoundaryPolicy[]|null);

                /** ListPrincipalAccessBoundaryPoliciesResponse nextPageToken */
                nextPageToken?: (string|null);
            }

            /** Represents a ListPrincipalAccessBoundaryPoliciesResponse. */
            class ListPrincipalAccessBoundaryPoliciesResponse implements IListPrincipalAccessBoundaryPoliciesResponse {

                /**
                 * Constructs a new ListPrincipalAccessBoundaryPoliciesResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v3beta.IListPrincipalAccessBoundaryPoliciesResponse);

                /** ListPrincipalAccessBoundaryPoliciesResponse principalAccessBoundaryPolicies. */
                public principalAccessBoundaryPolicies: google.iam.v3beta.IPrincipalAccessBoundaryPolicy[];

                /** ListPrincipalAccessBoundaryPoliciesResponse nextPageToken. */
                public nextPageToken: string;

                /**
                 * Creates a new ListPrincipalAccessBoundaryPoliciesResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ListPrincipalAccessBoundaryPoliciesResponse instance
                 */
                public static create(properties?: google.iam.v3beta.IListPrincipalAccessBoundaryPoliciesResponse): google.iam.v3beta.ListPrincipalAccessBoundaryPoliciesResponse;

                /**
                 * Encodes the specified ListPrincipalAccessBoundaryPoliciesResponse message. Does not implicitly {@link google.iam.v3beta.ListPrincipalAccessBoundaryPoliciesResponse.verify|verify} messages.
                 * @param message ListPrincipalAccessBoundaryPoliciesResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v3beta.IListPrincipalAccessBoundaryPoliciesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ListPrincipalAccessBoundaryPoliciesResponse message, length delimited. Does not implicitly {@link google.iam.v3beta.ListPrincipalAccessBoundaryPoliciesResponse.verify|verify} messages.
                 * @param message ListPrincipalAccessBoundaryPoliciesResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v3beta.IListPrincipalAccessBoundaryPoliciesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ListPrincipalAccessBoundaryPoliciesResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ListPrincipalAccessBoundaryPoliciesResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v3beta.ListPrincipalAccessBoundaryPoliciesResponse;

                /**
                 * Decodes a ListPrincipalAccessBoundaryPoliciesResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ListPrincipalAccessBoundaryPoliciesResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v3beta.ListPrincipalAccessBoundaryPoliciesResponse;

                /**
                 * Verifies a ListPrincipalAccessBoundaryPoliciesResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ListPrincipalAccessBoundaryPoliciesResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ListPrincipalAccessBoundaryPoliciesResponse
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v3beta.ListPrincipalAccessBoundaryPoliciesResponse;

                /**
                 * Creates a plain object from a ListPrincipalAccessBoundaryPoliciesResponse message. Also converts values to other types if specified.
                 * @param message ListPrincipalAccessBoundaryPoliciesResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v3beta.ListPrincipalAccessBoundaryPoliciesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ListPrincipalAccessBoundaryPoliciesResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ListPrincipalAccessBoundaryPoliciesResponse
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a SearchPrincipalAccessBoundaryPolicyBindingsRequest. */
            interface ISearchPrincipalAccessBoundaryPolicyBindingsRequest {

                /** SearchPrincipalAccessBoundaryPolicyBindingsRequest name */
                name?: (string|null);

                /** SearchPrincipalAccessBoundaryPolicyBindingsRequest pageSize */
                pageSize?: (number|null);

                /** SearchPrincipalAccessBoundaryPolicyBindingsRequest pageToken */
                pageToken?: (string|null);
            }

            /** Represents a SearchPrincipalAccessBoundaryPolicyBindingsRequest. */
            class SearchPrincipalAccessBoundaryPolicyBindingsRequest implements ISearchPrincipalAccessBoundaryPolicyBindingsRequest {

                /**
                 * Constructs a new SearchPrincipalAccessBoundaryPolicyBindingsRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v3beta.ISearchPrincipalAccessBoundaryPolicyBindingsRequest);

                /** SearchPrincipalAccessBoundaryPolicyBindingsRequest name. */
                public name: string;

                /** SearchPrincipalAccessBoundaryPolicyBindingsRequest pageSize. */
                public pageSize: number;

                /** SearchPrincipalAccessBoundaryPolicyBindingsRequest pageToken. */
                public pageToken: string;

                /**
                 * Creates a new SearchPrincipalAccessBoundaryPolicyBindingsRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SearchPrincipalAccessBoundaryPolicyBindingsRequest instance
                 */
                public static create(properties?: google.iam.v3beta.ISearchPrincipalAccessBoundaryPolicyBindingsRequest): google.iam.v3beta.SearchPrincipalAccessBoundaryPolicyBindingsRequest;

                /**
                 * Encodes the specified SearchPrincipalAccessBoundaryPolicyBindingsRequest message. Does not implicitly {@link google.iam.v3beta.SearchPrincipalAccessBoundaryPolicyBindingsRequest.verify|verify} messages.
                 * @param message SearchPrincipalAccessBoundaryPolicyBindingsRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v3beta.ISearchPrincipalAccessBoundaryPolicyBindingsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SearchPrincipalAccessBoundaryPolicyBindingsRequest message, length delimited. Does not implicitly {@link google.iam.v3beta.SearchPrincipalAccessBoundaryPolicyBindingsRequest.verify|verify} messages.
                 * @param message SearchPrincipalAccessBoundaryPolicyBindingsRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v3beta.ISearchPrincipalAccessBoundaryPolicyBindingsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SearchPrincipalAccessBoundaryPolicyBindingsRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SearchPrincipalAccessBoundaryPolicyBindingsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v3beta.SearchPrincipalAccessBoundaryPolicyBindingsRequest;

                /**
                 * Decodes a SearchPrincipalAccessBoundaryPolicyBindingsRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SearchPrincipalAccessBoundaryPolicyBindingsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v3beta.SearchPrincipalAccessBoundaryPolicyBindingsRequest;

                /**
                 * Verifies a SearchPrincipalAccessBoundaryPolicyBindingsRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SearchPrincipalAccessBoundaryPolicyBindingsRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SearchPrincipalAccessBoundaryPolicyBindingsRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v3beta.SearchPrincipalAccessBoundaryPolicyBindingsRequest;

                /**
                 * Creates a plain object from a SearchPrincipalAccessBoundaryPolicyBindingsRequest message. Also converts values to other types if specified.
                 * @param message SearchPrincipalAccessBoundaryPolicyBindingsRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v3beta.SearchPrincipalAccessBoundaryPolicyBindingsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SearchPrincipalAccessBoundaryPolicyBindingsRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for SearchPrincipalAccessBoundaryPolicyBindingsRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a SearchPrincipalAccessBoundaryPolicyBindingsResponse. */
            interface ISearchPrincipalAccessBoundaryPolicyBindingsResponse {

                /** SearchPrincipalAccessBoundaryPolicyBindingsResponse policyBindings */
                policyBindings?: (google.iam.v3beta.IPolicyBinding[]|null);

                /** SearchPrincipalAccessBoundaryPolicyBindingsResponse nextPageToken */
                nextPageToken?: (string|null);
            }

            /** Represents a SearchPrincipalAccessBoundaryPolicyBindingsResponse. */
            class SearchPrincipalAccessBoundaryPolicyBindingsResponse implements ISearchPrincipalAccessBoundaryPolicyBindingsResponse {

                /**
                 * Constructs a new SearchPrincipalAccessBoundaryPolicyBindingsResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v3beta.ISearchPrincipalAccessBoundaryPolicyBindingsResponse);

                /** SearchPrincipalAccessBoundaryPolicyBindingsResponse policyBindings. */
                public policyBindings: google.iam.v3beta.IPolicyBinding[];

                /** SearchPrincipalAccessBoundaryPolicyBindingsResponse nextPageToken. */
                public nextPageToken: string;

                /**
                 * Creates a new SearchPrincipalAccessBoundaryPolicyBindingsResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SearchPrincipalAccessBoundaryPolicyBindingsResponse instance
                 */
                public static create(properties?: google.iam.v3beta.ISearchPrincipalAccessBoundaryPolicyBindingsResponse): google.iam.v3beta.SearchPrincipalAccessBoundaryPolicyBindingsResponse;

                /**
                 * Encodes the specified SearchPrincipalAccessBoundaryPolicyBindingsResponse message. Does not implicitly {@link google.iam.v3beta.SearchPrincipalAccessBoundaryPolicyBindingsResponse.verify|verify} messages.
                 * @param message SearchPrincipalAccessBoundaryPolicyBindingsResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v3beta.ISearchPrincipalAccessBoundaryPolicyBindingsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SearchPrincipalAccessBoundaryPolicyBindingsResponse message, length delimited. Does not implicitly {@link google.iam.v3beta.SearchPrincipalAccessBoundaryPolicyBindingsResponse.verify|verify} messages.
                 * @param message SearchPrincipalAccessBoundaryPolicyBindingsResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v3beta.ISearchPrincipalAccessBoundaryPolicyBindingsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SearchPrincipalAccessBoundaryPolicyBindingsResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SearchPrincipalAccessBoundaryPolicyBindingsResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v3beta.SearchPrincipalAccessBoundaryPolicyBindingsResponse;

                /**
                 * Decodes a SearchPrincipalAccessBoundaryPolicyBindingsResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SearchPrincipalAccessBoundaryPolicyBindingsResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v3beta.SearchPrincipalAccessBoundaryPolicyBindingsResponse;

                /**
                 * Verifies a SearchPrincipalAccessBoundaryPolicyBindingsResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SearchPrincipalAccessBoundaryPolicyBindingsResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SearchPrincipalAccessBoundaryPolicyBindingsResponse
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v3beta.SearchPrincipalAccessBoundaryPolicyBindingsResponse;

                /**
                 * Creates a plain object from a SearchPrincipalAccessBoundaryPolicyBindingsResponse message. Also converts values to other types if specified.
                 * @param message SearchPrincipalAccessBoundaryPolicyBindingsResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v3beta.SearchPrincipalAccessBoundaryPolicyBindingsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SearchPrincipalAccessBoundaryPolicyBindingsResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for SearchPrincipalAccessBoundaryPolicyBindingsResponse
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a PrincipalAccessBoundaryPolicy. */
            interface IPrincipalAccessBoundaryPolicy {

                /** PrincipalAccessBoundaryPolicy name */
                name?: (string|null);

                /** PrincipalAccessBoundaryPolicy uid */
                uid?: (string|null);

                /** PrincipalAccessBoundaryPolicy etag */
                etag?: (string|null);

                /** PrincipalAccessBoundaryPolicy displayName */
                displayName?: (string|null);

                /** PrincipalAccessBoundaryPolicy annotations */
                annotations?: ({ [k: string]: string }|null);

                /** PrincipalAccessBoundaryPolicy createTime */
                createTime?: (google.protobuf.ITimestamp|null);

                /** PrincipalAccessBoundaryPolicy updateTime */
                updateTime?: (google.protobuf.ITimestamp|null);

                /** PrincipalAccessBoundaryPolicy details */
                details?: (google.iam.v3beta.IPrincipalAccessBoundaryPolicyDetails|null);
            }

            /** Represents a PrincipalAccessBoundaryPolicy. */
            class PrincipalAccessBoundaryPolicy implements IPrincipalAccessBoundaryPolicy {

                /**
                 * Constructs a new PrincipalAccessBoundaryPolicy.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v3beta.IPrincipalAccessBoundaryPolicy);

                /** PrincipalAccessBoundaryPolicy name. */
                public name: string;

                /** PrincipalAccessBoundaryPolicy uid. */
                public uid: string;

                /** PrincipalAccessBoundaryPolicy etag. */
                public etag: string;

                /** PrincipalAccessBoundaryPolicy displayName. */
                public displayName: string;

                /** PrincipalAccessBoundaryPolicy annotations. */
                public annotations: { [k: string]: string };

                /** PrincipalAccessBoundaryPolicy createTime. */
                public createTime?: (google.protobuf.ITimestamp|null);

                /** PrincipalAccessBoundaryPolicy updateTime. */
                public updateTime?: (google.protobuf.ITimestamp|null);

                /** PrincipalAccessBoundaryPolicy details. */
                public details?: (google.iam.v3beta.IPrincipalAccessBoundaryPolicyDetails|null);

                /**
                 * Creates a new PrincipalAccessBoundaryPolicy instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns PrincipalAccessBoundaryPolicy instance
                 */
                public static create(properties?: google.iam.v3beta.IPrincipalAccessBoundaryPolicy): google.iam.v3beta.PrincipalAccessBoundaryPolicy;

                /**
                 * Encodes the specified PrincipalAccessBoundaryPolicy message. Does not implicitly {@link google.iam.v3beta.PrincipalAccessBoundaryPolicy.verify|verify} messages.
                 * @param message PrincipalAccessBoundaryPolicy message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v3beta.IPrincipalAccessBoundaryPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified PrincipalAccessBoundaryPolicy message, length delimited. Does not implicitly {@link google.iam.v3beta.PrincipalAccessBoundaryPolicy.verify|verify} messages.
                 * @param message PrincipalAccessBoundaryPolicy message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v3beta.IPrincipalAccessBoundaryPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a PrincipalAccessBoundaryPolicy message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns PrincipalAccessBoundaryPolicy
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v3beta.PrincipalAccessBoundaryPolicy;

                /**
                 * Decodes a PrincipalAccessBoundaryPolicy message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns PrincipalAccessBoundaryPolicy
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v3beta.PrincipalAccessBoundaryPolicy;

                /**
                 * Verifies a PrincipalAccessBoundaryPolicy message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a PrincipalAccessBoundaryPolicy message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns PrincipalAccessBoundaryPolicy
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v3beta.PrincipalAccessBoundaryPolicy;

                /**
                 * Creates a plain object from a PrincipalAccessBoundaryPolicy message. Also converts values to other types if specified.
                 * @param message PrincipalAccessBoundaryPolicy
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v3beta.PrincipalAccessBoundaryPolicy, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this PrincipalAccessBoundaryPolicy to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for PrincipalAccessBoundaryPolicy
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a PrincipalAccessBoundaryPolicyDetails. */
            interface IPrincipalAccessBoundaryPolicyDetails {

                /** PrincipalAccessBoundaryPolicyDetails rules */
                rules?: (google.iam.v3beta.IPrincipalAccessBoundaryPolicyRule[]|null);

                /** PrincipalAccessBoundaryPolicyDetails enforcementVersion */
                enforcementVersion?: (string|null);
            }

            /** Represents a PrincipalAccessBoundaryPolicyDetails. */
            class PrincipalAccessBoundaryPolicyDetails implements IPrincipalAccessBoundaryPolicyDetails {

                /**
                 * Constructs a new PrincipalAccessBoundaryPolicyDetails.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v3beta.IPrincipalAccessBoundaryPolicyDetails);

                /** PrincipalAccessBoundaryPolicyDetails rules. */
                public rules: google.iam.v3beta.IPrincipalAccessBoundaryPolicyRule[];

                /** PrincipalAccessBoundaryPolicyDetails enforcementVersion. */
                public enforcementVersion: string;

                /**
                 * Creates a new PrincipalAccessBoundaryPolicyDetails instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns PrincipalAccessBoundaryPolicyDetails instance
                 */
                public static create(properties?: google.iam.v3beta.IPrincipalAccessBoundaryPolicyDetails): google.iam.v3beta.PrincipalAccessBoundaryPolicyDetails;

                /**
                 * Encodes the specified PrincipalAccessBoundaryPolicyDetails message. Does not implicitly {@link google.iam.v3beta.PrincipalAccessBoundaryPolicyDetails.verify|verify} messages.
                 * @param message PrincipalAccessBoundaryPolicyDetails message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v3beta.IPrincipalAccessBoundaryPolicyDetails, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified PrincipalAccessBoundaryPolicyDetails message, length delimited. Does not implicitly {@link google.iam.v3beta.PrincipalAccessBoundaryPolicyDetails.verify|verify} messages.
                 * @param message PrincipalAccessBoundaryPolicyDetails message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v3beta.IPrincipalAccessBoundaryPolicyDetails, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a PrincipalAccessBoundaryPolicyDetails message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns PrincipalAccessBoundaryPolicyDetails
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v3beta.PrincipalAccessBoundaryPolicyDetails;

                /**
                 * Decodes a PrincipalAccessBoundaryPolicyDetails message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns PrincipalAccessBoundaryPolicyDetails
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v3beta.PrincipalAccessBoundaryPolicyDetails;

                /**
                 * Verifies a PrincipalAccessBoundaryPolicyDetails message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a PrincipalAccessBoundaryPolicyDetails message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns PrincipalAccessBoundaryPolicyDetails
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v3beta.PrincipalAccessBoundaryPolicyDetails;

                /**
                 * Creates a plain object from a PrincipalAccessBoundaryPolicyDetails message. Also converts values to other types if specified.
                 * @param message PrincipalAccessBoundaryPolicyDetails
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v3beta.PrincipalAccessBoundaryPolicyDetails, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this PrincipalAccessBoundaryPolicyDetails to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for PrincipalAccessBoundaryPolicyDetails
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a PrincipalAccessBoundaryPolicyRule. */
            interface IPrincipalAccessBoundaryPolicyRule {

                /** PrincipalAccessBoundaryPolicyRule description */
                description?: (string|null);

                /** PrincipalAccessBoundaryPolicyRule resources */
                resources?: (string[]|null);

                /** PrincipalAccessBoundaryPolicyRule effect */
                effect?: (google.iam.v3beta.PrincipalAccessBoundaryPolicyRule.Effect|keyof typeof google.iam.v3beta.PrincipalAccessBoundaryPolicyRule.Effect|null);
            }

            /** Represents a PrincipalAccessBoundaryPolicyRule. */
            class PrincipalAccessBoundaryPolicyRule implements IPrincipalAccessBoundaryPolicyRule {

                /**
                 * Constructs a new PrincipalAccessBoundaryPolicyRule.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v3beta.IPrincipalAccessBoundaryPolicyRule);

                /** PrincipalAccessBoundaryPolicyRule description. */
                public description: string;

                /** PrincipalAccessBoundaryPolicyRule resources. */
                public resources: string[];

                /** PrincipalAccessBoundaryPolicyRule effect. */
                public effect: (google.iam.v3beta.PrincipalAccessBoundaryPolicyRule.Effect|keyof typeof google.iam.v3beta.PrincipalAccessBoundaryPolicyRule.Effect);

                /**
                 * Creates a new PrincipalAccessBoundaryPolicyRule instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns PrincipalAccessBoundaryPolicyRule instance
                 */
                public static create(properties?: google.iam.v3beta.IPrincipalAccessBoundaryPolicyRule): google.iam.v3beta.PrincipalAccessBoundaryPolicyRule;

                /**
                 * Encodes the specified PrincipalAccessBoundaryPolicyRule message. Does not implicitly {@link google.iam.v3beta.PrincipalAccessBoundaryPolicyRule.verify|verify} messages.
                 * @param message PrincipalAccessBoundaryPolicyRule message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v3beta.IPrincipalAccessBoundaryPolicyRule, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified PrincipalAccessBoundaryPolicyRule message, length delimited. Does not implicitly {@link google.iam.v3beta.PrincipalAccessBoundaryPolicyRule.verify|verify} messages.
                 * @param message PrincipalAccessBoundaryPolicyRule message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v3beta.IPrincipalAccessBoundaryPolicyRule, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a PrincipalAccessBoundaryPolicyRule message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns PrincipalAccessBoundaryPolicyRule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v3beta.PrincipalAccessBoundaryPolicyRule;

                /**
                 * Decodes a PrincipalAccessBoundaryPolicyRule message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns PrincipalAccessBoundaryPolicyRule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v3beta.PrincipalAccessBoundaryPolicyRule;

                /**
                 * Verifies a PrincipalAccessBoundaryPolicyRule message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a PrincipalAccessBoundaryPolicyRule message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns PrincipalAccessBoundaryPolicyRule
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v3beta.PrincipalAccessBoundaryPolicyRule;

                /**
                 * Creates a plain object from a PrincipalAccessBoundaryPolicyRule message. Also converts values to other types if specified.
                 * @param message PrincipalAccessBoundaryPolicyRule
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v3beta.PrincipalAccessBoundaryPolicyRule, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this PrincipalAccessBoundaryPolicyRule to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for PrincipalAccessBoundaryPolicyRule
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace PrincipalAccessBoundaryPolicyRule {

                /** Effect enum. */
                enum Effect {
                    EFFECT_UNSPECIFIED = 0,
                    ALLOW = 1
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

            /** CommonLanguageSettings selectiveGapicGeneration */
            selectiveGapicGeneration?: (google.api.ISelectiveGapicGeneration|null);
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

            /** CommonLanguageSettings selectiveGapicGeneration. */
            public selectiveGapicGeneration?: (google.api.ISelectiveGapicGeneration|null);

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

            /** PythonSettings experimentalFeatures */
            experimentalFeatures?: (google.api.PythonSettings.IExperimentalFeatures|null);
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

            /** PythonSettings experimentalFeatures. */
            public experimentalFeatures?: (google.api.PythonSettings.IExperimentalFeatures|null);

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

        namespace PythonSettings {

            /** Properties of an ExperimentalFeatures. */
            interface IExperimentalFeatures {

                /** ExperimentalFeatures restAsyncIoEnabled */
                restAsyncIoEnabled?: (boolean|null);

                /** ExperimentalFeatures protobufPythonicTypesEnabled */
                protobufPythonicTypesEnabled?: (boolean|null);

                /** ExperimentalFeatures unversionedPackageDisabled */
                unversionedPackageDisabled?: (boolean|null);
            }

            /** Represents an ExperimentalFeatures. */
            class ExperimentalFeatures implements IExperimentalFeatures {

                /**
                 * Constructs a new ExperimentalFeatures.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.api.PythonSettings.IExperimentalFeatures);

                /** ExperimentalFeatures restAsyncIoEnabled. */
                public restAsyncIoEnabled: boolean;

                /** ExperimentalFeatures protobufPythonicTypesEnabled. */
                public protobufPythonicTypesEnabled: boolean;

                /** ExperimentalFeatures unversionedPackageDisabled. */
                public unversionedPackageDisabled: boolean;

                /**
                 * Creates a new ExperimentalFeatures instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ExperimentalFeatures instance
                 */
                public static create(properties?: google.api.PythonSettings.IExperimentalFeatures): google.api.PythonSettings.ExperimentalFeatures;

                /**
                 * Encodes the specified ExperimentalFeatures message. Does not implicitly {@link google.api.PythonSettings.ExperimentalFeatures.verify|verify} messages.
                 * @param message ExperimentalFeatures message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.api.PythonSettings.IExperimentalFeatures, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ExperimentalFeatures message, length delimited. Does not implicitly {@link google.api.PythonSettings.ExperimentalFeatures.verify|verify} messages.
                 * @param message ExperimentalFeatures message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.api.PythonSettings.IExperimentalFeatures, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an ExperimentalFeatures message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ExperimentalFeatures
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.PythonSettings.ExperimentalFeatures;

                /**
                 * Decodes an ExperimentalFeatures message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ExperimentalFeatures
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.PythonSettings.ExperimentalFeatures;

                /**
                 * Verifies an ExperimentalFeatures message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an ExperimentalFeatures message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ExperimentalFeatures
                 */
                public static fromObject(object: { [k: string]: any }): google.api.PythonSettings.ExperimentalFeatures;

                /**
                 * Creates a plain object from an ExperimentalFeatures message. Also converts values to other types if specified.
                 * @param message ExperimentalFeatures
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.api.PythonSettings.ExperimentalFeatures, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ExperimentalFeatures to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ExperimentalFeatures
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
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

            /** GoSettings renamedServices */
            renamedServices?: ({ [k: string]: string }|null);
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

            /** GoSettings renamedServices. */
            public renamedServices: { [k: string]: string };

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

        /** Properties of a SelectiveGapicGeneration. */
        interface ISelectiveGapicGeneration {

            /** SelectiveGapicGeneration methods */
            methods?: (string[]|null);

            /** SelectiveGapicGeneration generateOmittedAsInternal */
            generateOmittedAsInternal?: (boolean|null);
        }

        /** Represents a SelectiveGapicGeneration. */
        class SelectiveGapicGeneration implements ISelectiveGapicGeneration {

            /**
             * Constructs a new SelectiveGapicGeneration.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.ISelectiveGapicGeneration);

            /** SelectiveGapicGeneration methods. */
            public methods: string[];

            /** SelectiveGapicGeneration generateOmittedAsInternal. */
            public generateOmittedAsInternal: boolean;

            /**
             * Creates a new SelectiveGapicGeneration instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SelectiveGapicGeneration instance
             */
            public static create(properties?: google.api.ISelectiveGapicGeneration): google.api.SelectiveGapicGeneration;

            /**
             * Encodes the specified SelectiveGapicGeneration message. Does not implicitly {@link google.api.SelectiveGapicGeneration.verify|verify} messages.
             * @param message SelectiveGapicGeneration message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.ISelectiveGapicGeneration, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SelectiveGapicGeneration message, length delimited. Does not implicitly {@link google.api.SelectiveGapicGeneration.verify|verify} messages.
             * @param message SelectiveGapicGeneration message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.ISelectiveGapicGeneration, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SelectiveGapicGeneration message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SelectiveGapicGeneration
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.SelectiveGapicGeneration;

            /**
             * Decodes a SelectiveGapicGeneration message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SelectiveGapicGeneration
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.SelectiveGapicGeneration;

            /**
             * Verifies a SelectiveGapicGeneration message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SelectiveGapicGeneration message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SelectiveGapicGeneration
             */
            public static fromObject(object: { [k: string]: any }): google.api.SelectiveGapicGeneration;

            /**
             * Creates a plain object from a SelectiveGapicGeneration message. Also converts values to other types if specified.
             * @param message SelectiveGapicGeneration
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.SelectiveGapicGeneration, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SelectiveGapicGeneration to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SelectiveGapicGeneration
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
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

        /** Properties of a FieldInfo. */
        interface IFieldInfo {

            /** FieldInfo format */
            format?: (google.api.FieldInfo.Format|keyof typeof google.api.FieldInfo.Format|null);

            /** FieldInfo referencedTypes */
            referencedTypes?: (google.api.ITypeReference[]|null);
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

            /** FieldInfo referencedTypes. */
            public referencedTypes: google.api.ITypeReference[];

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

        /** Properties of a TypeReference. */
        interface ITypeReference {

            /** TypeReference typeName */
            typeName?: (string|null);
        }

        /** Represents a TypeReference. */
        class TypeReference implements ITypeReference {

            /**
             * Constructs a new TypeReference.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.ITypeReference);

            /** TypeReference typeName. */
            public typeName: string;

            /**
             * Creates a new TypeReference instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TypeReference instance
             */
            public static create(properties?: google.api.ITypeReference): google.api.TypeReference;

            /**
             * Encodes the specified TypeReference message. Does not implicitly {@link google.api.TypeReference.verify|verify} messages.
             * @param message TypeReference message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.ITypeReference, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified TypeReference message, length delimited. Does not implicitly {@link google.api.TypeReference.verify|verify} messages.
             * @param message TypeReference message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.ITypeReference, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TypeReference message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns TypeReference
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.TypeReference;

            /**
             * Decodes a TypeReference message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns TypeReference
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.TypeReference;

            /**
             * Verifies a TypeReference message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a TypeReference message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns TypeReference
             */
            public static fromObject(object: { [k: string]: any }): google.api.TypeReference;

            /**
             * Creates a plain object from a TypeReference message. Also converts values to other types if specified.
             * @param message TypeReference
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.TypeReference, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this TypeReference to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for TypeReference
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
            EDITION_LEGACY = 900,
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

            /** FileDescriptorProto optionDependency */
            optionDependency?: (string[]|null);

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

            /** FileDescriptorProto optionDependency. */
            public optionDependency: string[];

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

            /** DescriptorProto visibility */
            visibility?: (google.protobuf.SymbolVisibility|keyof typeof google.protobuf.SymbolVisibility|null);
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

            /** DescriptorProto visibility. */
            public visibility: (google.protobuf.SymbolVisibility|keyof typeof google.protobuf.SymbolVisibility);

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

            /** EnumDescriptorProto visibility */
            visibility?: (google.protobuf.SymbolVisibility|keyof typeof google.protobuf.SymbolVisibility|null);
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

            /** EnumDescriptorProto visibility. */
            public visibility: (google.protobuf.SymbolVisibility|keyof typeof google.protobuf.SymbolVisibility);

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

            /** FieldOptions featureSupport */
            featureSupport?: (google.protobuf.FieldOptions.IFeatureSupport|null);

            /** FieldOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** FieldOptions .google.api.fieldBehavior */
            ".google.api.fieldBehavior"?: (google.api.FieldBehavior[]|null);

            /** FieldOptions .google.api.resourceReference */
            ".google.api.resourceReference"?: (google.api.IResourceReference|null);

            /** FieldOptions .google.api.fieldInfo */
            ".google.api.fieldInfo"?: (google.api.IFieldInfo|null);
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

            /** FieldOptions featureSupport. */
            public featureSupport?: (google.protobuf.FieldOptions.IFeatureSupport|null);

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

            /** Properties of a FeatureSupport. */
            interface IFeatureSupport {

                /** FeatureSupport editionIntroduced */
                editionIntroduced?: (google.protobuf.Edition|keyof typeof google.protobuf.Edition|null);

                /** FeatureSupport editionDeprecated */
                editionDeprecated?: (google.protobuf.Edition|keyof typeof google.protobuf.Edition|null);

                /** FeatureSupport deprecationWarning */
                deprecationWarning?: (string|null);

                /** FeatureSupport editionRemoved */
                editionRemoved?: (google.protobuf.Edition|keyof typeof google.protobuf.Edition|null);
            }

            /** Represents a FeatureSupport. */
            class FeatureSupport implements IFeatureSupport {

                /**
                 * Constructs a new FeatureSupport.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.FieldOptions.IFeatureSupport);

                /** FeatureSupport editionIntroduced. */
                public editionIntroduced: (google.protobuf.Edition|keyof typeof google.protobuf.Edition);

                /** FeatureSupport editionDeprecated. */
                public editionDeprecated: (google.protobuf.Edition|keyof typeof google.protobuf.Edition);

                /** FeatureSupport deprecationWarning. */
                public deprecationWarning: string;

                /** FeatureSupport editionRemoved. */
                public editionRemoved: (google.protobuf.Edition|keyof typeof google.protobuf.Edition);

                /**
                 * Creates a new FeatureSupport instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns FeatureSupport instance
                 */
                public static create(properties?: google.protobuf.FieldOptions.IFeatureSupport): google.protobuf.FieldOptions.FeatureSupport;

                /**
                 * Encodes the specified FeatureSupport message. Does not implicitly {@link google.protobuf.FieldOptions.FeatureSupport.verify|verify} messages.
                 * @param message FeatureSupport message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.FieldOptions.IFeatureSupport, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified FeatureSupport message, length delimited. Does not implicitly {@link google.protobuf.FieldOptions.FeatureSupport.verify|verify} messages.
                 * @param message FeatureSupport message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.FieldOptions.IFeatureSupport, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a FeatureSupport message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns FeatureSupport
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldOptions.FeatureSupport;

                /**
                 * Decodes a FeatureSupport message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns FeatureSupport
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FieldOptions.FeatureSupport;

                /**
                 * Verifies a FeatureSupport message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a FeatureSupport message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns FeatureSupport
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.FieldOptions.FeatureSupport;

                /**
                 * Creates a plain object from a FeatureSupport message. Also converts values to other types if specified.
                 * @param message FeatureSupport
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.FieldOptions.FeatureSupport, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this FeatureSupport to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for FeatureSupport
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

            /** EnumValueOptions featureSupport */
            featureSupport?: (google.protobuf.FieldOptions.IFeatureSupport|null);

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

            /** EnumValueOptions featureSupport. */
            public featureSupport?: (google.protobuf.FieldOptions.IFeatureSupport|null);

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

            /** FeatureSet enforceNamingStyle */
            enforceNamingStyle?: (google.protobuf.FeatureSet.EnforceNamingStyle|keyof typeof google.protobuf.FeatureSet.EnforceNamingStyle|null);

            /** FeatureSet defaultSymbolVisibility */
            defaultSymbolVisibility?: (google.protobuf.FeatureSet.VisibilityFeature.DefaultSymbolVisibility|keyof typeof google.protobuf.FeatureSet.VisibilityFeature.DefaultSymbolVisibility|null);
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

            /** FeatureSet enforceNamingStyle. */
            public enforceNamingStyle: (google.protobuf.FeatureSet.EnforceNamingStyle|keyof typeof google.protobuf.FeatureSet.EnforceNamingStyle);

            /** FeatureSet defaultSymbolVisibility. */
            public defaultSymbolVisibility: (google.protobuf.FeatureSet.VisibilityFeature.DefaultSymbolVisibility|keyof typeof google.protobuf.FeatureSet.VisibilityFeature.DefaultSymbolVisibility);

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

            /** EnforceNamingStyle enum. */
            enum EnforceNamingStyle {
                ENFORCE_NAMING_STYLE_UNKNOWN = 0,
                STYLE2024 = 1,
                STYLE_LEGACY = 2
            }

            /** Properties of a VisibilityFeature. */
            interface IVisibilityFeature {
            }

            /** Represents a VisibilityFeature. */
            class VisibilityFeature implements IVisibilityFeature {

                /**
                 * Constructs a new VisibilityFeature.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.FeatureSet.IVisibilityFeature);

                /**
                 * Creates a new VisibilityFeature instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns VisibilityFeature instance
                 */
                public static create(properties?: google.protobuf.FeatureSet.IVisibilityFeature): google.protobuf.FeatureSet.VisibilityFeature;

                /**
                 * Encodes the specified VisibilityFeature message. Does not implicitly {@link google.protobuf.FeatureSet.VisibilityFeature.verify|verify} messages.
                 * @param message VisibilityFeature message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.FeatureSet.IVisibilityFeature, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified VisibilityFeature message, length delimited. Does not implicitly {@link google.protobuf.FeatureSet.VisibilityFeature.verify|verify} messages.
                 * @param message VisibilityFeature message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.FeatureSet.IVisibilityFeature, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a VisibilityFeature message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns VisibilityFeature
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FeatureSet.VisibilityFeature;

                /**
                 * Decodes a VisibilityFeature message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns VisibilityFeature
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FeatureSet.VisibilityFeature;

                /**
                 * Verifies a VisibilityFeature message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a VisibilityFeature message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns VisibilityFeature
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.FeatureSet.VisibilityFeature;

                /**
                 * Creates a plain object from a VisibilityFeature message. Also converts values to other types if specified.
                 * @param message VisibilityFeature
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.FeatureSet.VisibilityFeature, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this VisibilityFeature to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for VisibilityFeature
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace VisibilityFeature {

                /** DefaultSymbolVisibility enum. */
                enum DefaultSymbolVisibility {
                    DEFAULT_SYMBOL_VISIBILITY_UNKNOWN = 0,
                    EXPORT_ALL = 1,
                    EXPORT_TOP_LEVEL = 2,
                    LOCAL_ALL = 3,
                    STRICT = 4
                }
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

                /** FeatureSetEditionDefault overridableFeatures */
                overridableFeatures?: (google.protobuf.IFeatureSet|null);

                /** FeatureSetEditionDefault fixedFeatures */
                fixedFeatures?: (google.protobuf.IFeatureSet|null);
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

                /** FeatureSetEditionDefault overridableFeatures. */
                public overridableFeatures?: (google.protobuf.IFeatureSet|null);

                /** FeatureSetEditionDefault fixedFeatures. */
                public fixedFeatures?: (google.protobuf.IFeatureSet|null);

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

        /** SymbolVisibility enum. */
        enum SymbolVisibility {
            VISIBILITY_UNSET = 0,
            VISIBILITY_LOCAL = 1,
            VISIBILITY_EXPORT = 2
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
             * Callback as used by {@link google.longrunning.Operations|listOperations}.
             * @param error Error, if any
             * @param [response] ListOperationsResponse
             */
            type ListOperationsCallback = (error: (Error|null), response?: google.longrunning.ListOperationsResponse) => void;

            /**
             * Callback as used by {@link google.longrunning.Operations|getOperation}.
             * @param error Error, if any
             * @param [response] Operation
             */
            type GetOperationCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

            /**
             * Callback as used by {@link google.longrunning.Operations|deleteOperation}.
             * @param error Error, if any
             * @param [response] Empty
             */
            type DeleteOperationCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

            /**
             * Callback as used by {@link google.longrunning.Operations|cancelOperation}.
             * @param error Error, if any
             * @param [response] Empty
             */
            type CancelOperationCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

            /**
             * Callback as used by {@link google.longrunning.Operations|waitOperation}.
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

            /**
             * Gets the default type url for Operation
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
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

            /**
             * Gets the default type url for GetOperationRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
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

            /**
             * Gets the default type url for ListOperationsRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
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

            /**
             * Gets the default type url for ListOperationsResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
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

            /**
             * Gets the default type url for CancelOperationRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
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

            /**
             * Gets the default type url for DeleteOperationRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
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

            /**
             * Gets the default type url for WaitOperationRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
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

            /**
             * Gets the default type url for OperationInfo
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
}
