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

        /** Namespace workstations. */
        namespace workstations {

            /** Namespace v1. */
            namespace v1 {

                /** Represents a Workstations */
                class Workstations extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new Workstations service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new Workstations service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Workstations;

                    /**
                     * Calls GetWorkstationCluster.
                     * @param request GetWorkstationClusterRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and WorkstationCluster
                     */
                    public getWorkstationCluster(request: google.cloud.workstations.v1.IGetWorkstationClusterRequest, callback: google.cloud.workstations.v1.Workstations.GetWorkstationClusterCallback): void;

                    /**
                     * Calls GetWorkstationCluster.
                     * @param request GetWorkstationClusterRequest message or plain object
                     * @returns Promise
                     */
                    public getWorkstationCluster(request: google.cloud.workstations.v1.IGetWorkstationClusterRequest): Promise<google.cloud.workstations.v1.WorkstationCluster>;

                    /**
                     * Calls ListWorkstationClusters.
                     * @param request ListWorkstationClustersRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListWorkstationClustersResponse
                     */
                    public listWorkstationClusters(request: google.cloud.workstations.v1.IListWorkstationClustersRequest, callback: google.cloud.workstations.v1.Workstations.ListWorkstationClustersCallback): void;

                    /**
                     * Calls ListWorkstationClusters.
                     * @param request ListWorkstationClustersRequest message or plain object
                     * @returns Promise
                     */
                    public listWorkstationClusters(request: google.cloud.workstations.v1.IListWorkstationClustersRequest): Promise<google.cloud.workstations.v1.ListWorkstationClustersResponse>;

                    /**
                     * Calls CreateWorkstationCluster.
                     * @param request CreateWorkstationClusterRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createWorkstationCluster(request: google.cloud.workstations.v1.ICreateWorkstationClusterRequest, callback: google.cloud.workstations.v1.Workstations.CreateWorkstationClusterCallback): void;

                    /**
                     * Calls CreateWorkstationCluster.
                     * @param request CreateWorkstationClusterRequest message or plain object
                     * @returns Promise
                     */
                    public createWorkstationCluster(request: google.cloud.workstations.v1.ICreateWorkstationClusterRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls UpdateWorkstationCluster.
                     * @param request UpdateWorkstationClusterRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public updateWorkstationCluster(request: google.cloud.workstations.v1.IUpdateWorkstationClusterRequest, callback: google.cloud.workstations.v1.Workstations.UpdateWorkstationClusterCallback): void;

                    /**
                     * Calls UpdateWorkstationCluster.
                     * @param request UpdateWorkstationClusterRequest message or plain object
                     * @returns Promise
                     */
                    public updateWorkstationCluster(request: google.cloud.workstations.v1.IUpdateWorkstationClusterRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls DeleteWorkstationCluster.
                     * @param request DeleteWorkstationClusterRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deleteWorkstationCluster(request: google.cloud.workstations.v1.IDeleteWorkstationClusterRequest, callback: google.cloud.workstations.v1.Workstations.DeleteWorkstationClusterCallback): void;

                    /**
                     * Calls DeleteWorkstationCluster.
                     * @param request DeleteWorkstationClusterRequest message or plain object
                     * @returns Promise
                     */
                    public deleteWorkstationCluster(request: google.cloud.workstations.v1.IDeleteWorkstationClusterRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls GetWorkstationConfig.
                     * @param request GetWorkstationConfigRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and WorkstationConfig
                     */
                    public getWorkstationConfig(request: google.cloud.workstations.v1.IGetWorkstationConfigRequest, callback: google.cloud.workstations.v1.Workstations.GetWorkstationConfigCallback): void;

                    /**
                     * Calls GetWorkstationConfig.
                     * @param request GetWorkstationConfigRequest message or plain object
                     * @returns Promise
                     */
                    public getWorkstationConfig(request: google.cloud.workstations.v1.IGetWorkstationConfigRequest): Promise<google.cloud.workstations.v1.WorkstationConfig>;

                    /**
                     * Calls ListWorkstationConfigs.
                     * @param request ListWorkstationConfigsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListWorkstationConfigsResponse
                     */
                    public listWorkstationConfigs(request: google.cloud.workstations.v1.IListWorkstationConfigsRequest, callback: google.cloud.workstations.v1.Workstations.ListWorkstationConfigsCallback): void;

                    /**
                     * Calls ListWorkstationConfigs.
                     * @param request ListWorkstationConfigsRequest message or plain object
                     * @returns Promise
                     */
                    public listWorkstationConfigs(request: google.cloud.workstations.v1.IListWorkstationConfigsRequest): Promise<google.cloud.workstations.v1.ListWorkstationConfigsResponse>;

                    /**
                     * Calls ListUsableWorkstationConfigs.
                     * @param request ListUsableWorkstationConfigsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListUsableWorkstationConfigsResponse
                     */
                    public listUsableWorkstationConfigs(request: google.cloud.workstations.v1.IListUsableWorkstationConfigsRequest, callback: google.cloud.workstations.v1.Workstations.ListUsableWorkstationConfigsCallback): void;

                    /**
                     * Calls ListUsableWorkstationConfigs.
                     * @param request ListUsableWorkstationConfigsRequest message or plain object
                     * @returns Promise
                     */
                    public listUsableWorkstationConfigs(request: google.cloud.workstations.v1.IListUsableWorkstationConfigsRequest): Promise<google.cloud.workstations.v1.ListUsableWorkstationConfigsResponse>;

                    /**
                     * Calls CreateWorkstationConfig.
                     * @param request CreateWorkstationConfigRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createWorkstationConfig(request: google.cloud.workstations.v1.ICreateWorkstationConfigRequest, callback: google.cloud.workstations.v1.Workstations.CreateWorkstationConfigCallback): void;

                    /**
                     * Calls CreateWorkstationConfig.
                     * @param request CreateWorkstationConfigRequest message or plain object
                     * @returns Promise
                     */
                    public createWorkstationConfig(request: google.cloud.workstations.v1.ICreateWorkstationConfigRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls UpdateWorkstationConfig.
                     * @param request UpdateWorkstationConfigRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public updateWorkstationConfig(request: google.cloud.workstations.v1.IUpdateWorkstationConfigRequest, callback: google.cloud.workstations.v1.Workstations.UpdateWorkstationConfigCallback): void;

                    /**
                     * Calls UpdateWorkstationConfig.
                     * @param request UpdateWorkstationConfigRequest message or plain object
                     * @returns Promise
                     */
                    public updateWorkstationConfig(request: google.cloud.workstations.v1.IUpdateWorkstationConfigRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls DeleteWorkstationConfig.
                     * @param request DeleteWorkstationConfigRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deleteWorkstationConfig(request: google.cloud.workstations.v1.IDeleteWorkstationConfigRequest, callback: google.cloud.workstations.v1.Workstations.DeleteWorkstationConfigCallback): void;

                    /**
                     * Calls DeleteWorkstationConfig.
                     * @param request DeleteWorkstationConfigRequest message or plain object
                     * @returns Promise
                     */
                    public deleteWorkstationConfig(request: google.cloud.workstations.v1.IDeleteWorkstationConfigRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls GetWorkstation.
                     * @param request GetWorkstationRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Workstation
                     */
                    public getWorkstation(request: google.cloud.workstations.v1.IGetWorkstationRequest, callback: google.cloud.workstations.v1.Workstations.GetWorkstationCallback): void;

                    /**
                     * Calls GetWorkstation.
                     * @param request GetWorkstationRequest message or plain object
                     * @returns Promise
                     */
                    public getWorkstation(request: google.cloud.workstations.v1.IGetWorkstationRequest): Promise<google.cloud.workstations.v1.Workstation>;

                    /**
                     * Calls ListWorkstations.
                     * @param request ListWorkstationsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListWorkstationsResponse
                     */
                    public listWorkstations(request: google.cloud.workstations.v1.IListWorkstationsRequest, callback: google.cloud.workstations.v1.Workstations.ListWorkstationsCallback): void;

                    /**
                     * Calls ListWorkstations.
                     * @param request ListWorkstationsRequest message or plain object
                     * @returns Promise
                     */
                    public listWorkstations(request: google.cloud.workstations.v1.IListWorkstationsRequest): Promise<google.cloud.workstations.v1.ListWorkstationsResponse>;

                    /**
                     * Calls ListUsableWorkstations.
                     * @param request ListUsableWorkstationsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListUsableWorkstationsResponse
                     */
                    public listUsableWorkstations(request: google.cloud.workstations.v1.IListUsableWorkstationsRequest, callback: google.cloud.workstations.v1.Workstations.ListUsableWorkstationsCallback): void;

                    /**
                     * Calls ListUsableWorkstations.
                     * @param request ListUsableWorkstationsRequest message or plain object
                     * @returns Promise
                     */
                    public listUsableWorkstations(request: google.cloud.workstations.v1.IListUsableWorkstationsRequest): Promise<google.cloud.workstations.v1.ListUsableWorkstationsResponse>;

                    /**
                     * Calls CreateWorkstation.
                     * @param request CreateWorkstationRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createWorkstation(request: google.cloud.workstations.v1.ICreateWorkstationRequest, callback: google.cloud.workstations.v1.Workstations.CreateWorkstationCallback): void;

                    /**
                     * Calls CreateWorkstation.
                     * @param request CreateWorkstationRequest message or plain object
                     * @returns Promise
                     */
                    public createWorkstation(request: google.cloud.workstations.v1.ICreateWorkstationRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls UpdateWorkstation.
                     * @param request UpdateWorkstationRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public updateWorkstation(request: google.cloud.workstations.v1.IUpdateWorkstationRequest, callback: google.cloud.workstations.v1.Workstations.UpdateWorkstationCallback): void;

                    /**
                     * Calls UpdateWorkstation.
                     * @param request UpdateWorkstationRequest message or plain object
                     * @returns Promise
                     */
                    public updateWorkstation(request: google.cloud.workstations.v1.IUpdateWorkstationRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls DeleteWorkstation.
                     * @param request DeleteWorkstationRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deleteWorkstation(request: google.cloud.workstations.v1.IDeleteWorkstationRequest, callback: google.cloud.workstations.v1.Workstations.DeleteWorkstationCallback): void;

                    /**
                     * Calls DeleteWorkstation.
                     * @param request DeleteWorkstationRequest message or plain object
                     * @returns Promise
                     */
                    public deleteWorkstation(request: google.cloud.workstations.v1.IDeleteWorkstationRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls StartWorkstation.
                     * @param request StartWorkstationRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public startWorkstation(request: google.cloud.workstations.v1.IStartWorkstationRequest, callback: google.cloud.workstations.v1.Workstations.StartWorkstationCallback): void;

                    /**
                     * Calls StartWorkstation.
                     * @param request StartWorkstationRequest message or plain object
                     * @returns Promise
                     */
                    public startWorkstation(request: google.cloud.workstations.v1.IStartWorkstationRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls StopWorkstation.
                     * @param request StopWorkstationRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public stopWorkstation(request: google.cloud.workstations.v1.IStopWorkstationRequest, callback: google.cloud.workstations.v1.Workstations.StopWorkstationCallback): void;

                    /**
                     * Calls StopWorkstation.
                     * @param request StopWorkstationRequest message or plain object
                     * @returns Promise
                     */
                    public stopWorkstation(request: google.cloud.workstations.v1.IStopWorkstationRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls GenerateAccessToken.
                     * @param request GenerateAccessTokenRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and GenerateAccessTokenResponse
                     */
                    public generateAccessToken(request: google.cloud.workstations.v1.IGenerateAccessTokenRequest, callback: google.cloud.workstations.v1.Workstations.GenerateAccessTokenCallback): void;

                    /**
                     * Calls GenerateAccessToken.
                     * @param request GenerateAccessTokenRequest message or plain object
                     * @returns Promise
                     */
                    public generateAccessToken(request: google.cloud.workstations.v1.IGenerateAccessTokenRequest): Promise<google.cloud.workstations.v1.GenerateAccessTokenResponse>;
                }

                namespace Workstations {

                    /**
                     * Callback as used by {@link google.cloud.workstations.v1.Workstations|getWorkstationCluster}.
                     * @param error Error, if any
                     * @param [response] WorkstationCluster
                     */
                    type GetWorkstationClusterCallback = (error: (Error|null), response?: google.cloud.workstations.v1.WorkstationCluster) => void;

                    /**
                     * Callback as used by {@link google.cloud.workstations.v1.Workstations|listWorkstationClusters}.
                     * @param error Error, if any
                     * @param [response] ListWorkstationClustersResponse
                     */
                    type ListWorkstationClustersCallback = (error: (Error|null), response?: google.cloud.workstations.v1.ListWorkstationClustersResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.workstations.v1.Workstations|createWorkstationCluster}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateWorkstationClusterCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.workstations.v1.Workstations|updateWorkstationCluster}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type UpdateWorkstationClusterCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.workstations.v1.Workstations|deleteWorkstationCluster}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeleteWorkstationClusterCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.workstations.v1.Workstations|getWorkstationConfig}.
                     * @param error Error, if any
                     * @param [response] WorkstationConfig
                     */
                    type GetWorkstationConfigCallback = (error: (Error|null), response?: google.cloud.workstations.v1.WorkstationConfig) => void;

                    /**
                     * Callback as used by {@link google.cloud.workstations.v1.Workstations|listWorkstationConfigs}.
                     * @param error Error, if any
                     * @param [response] ListWorkstationConfigsResponse
                     */
                    type ListWorkstationConfigsCallback = (error: (Error|null), response?: google.cloud.workstations.v1.ListWorkstationConfigsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.workstations.v1.Workstations|listUsableWorkstationConfigs}.
                     * @param error Error, if any
                     * @param [response] ListUsableWorkstationConfigsResponse
                     */
                    type ListUsableWorkstationConfigsCallback = (error: (Error|null), response?: google.cloud.workstations.v1.ListUsableWorkstationConfigsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.workstations.v1.Workstations|createWorkstationConfig}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateWorkstationConfigCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.workstations.v1.Workstations|updateWorkstationConfig}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type UpdateWorkstationConfigCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.workstations.v1.Workstations|deleteWorkstationConfig}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeleteWorkstationConfigCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.workstations.v1.Workstations|getWorkstation}.
                     * @param error Error, if any
                     * @param [response] Workstation
                     */
                    type GetWorkstationCallback = (error: (Error|null), response?: google.cloud.workstations.v1.Workstation) => void;

                    /**
                     * Callback as used by {@link google.cloud.workstations.v1.Workstations|listWorkstations}.
                     * @param error Error, if any
                     * @param [response] ListWorkstationsResponse
                     */
                    type ListWorkstationsCallback = (error: (Error|null), response?: google.cloud.workstations.v1.ListWorkstationsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.workstations.v1.Workstations|listUsableWorkstations}.
                     * @param error Error, if any
                     * @param [response] ListUsableWorkstationsResponse
                     */
                    type ListUsableWorkstationsCallback = (error: (Error|null), response?: google.cloud.workstations.v1.ListUsableWorkstationsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.workstations.v1.Workstations|createWorkstation}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateWorkstationCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.workstations.v1.Workstations|updateWorkstation}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type UpdateWorkstationCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.workstations.v1.Workstations|deleteWorkstation}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeleteWorkstationCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.workstations.v1.Workstations|startWorkstation}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type StartWorkstationCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.workstations.v1.Workstations|stopWorkstation}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type StopWorkstationCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.workstations.v1.Workstations|generateAccessToken}.
                     * @param error Error, if any
                     * @param [response] GenerateAccessTokenResponse
                     */
                    type GenerateAccessTokenCallback = (error: (Error|null), response?: google.cloud.workstations.v1.GenerateAccessTokenResponse) => void;
                }

                /** Properties of a WorkstationCluster. */
                interface IWorkstationCluster {

                    /** WorkstationCluster name */
                    name?: (string|null);

                    /** WorkstationCluster displayName */
                    displayName?: (string|null);

                    /** WorkstationCluster uid */
                    uid?: (string|null);

                    /** WorkstationCluster reconciling */
                    reconciling?: (boolean|null);

                    /** WorkstationCluster annotations */
                    annotations?: ({ [k: string]: string }|null);

                    /** WorkstationCluster labels */
                    labels?: ({ [k: string]: string }|null);

                    /** WorkstationCluster createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** WorkstationCluster updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** WorkstationCluster deleteTime */
                    deleteTime?: (google.protobuf.ITimestamp|null);

                    /** WorkstationCluster etag */
                    etag?: (string|null);

                    /** WorkstationCluster network */
                    network?: (string|null);

                    /** WorkstationCluster subnetwork */
                    subnetwork?: (string|null);

                    /** WorkstationCluster controlPlaneIp */
                    controlPlaneIp?: (string|null);

                    /** WorkstationCluster privateClusterConfig */
                    privateClusterConfig?: (google.cloud.workstations.v1.WorkstationCluster.IPrivateClusterConfig|null);

                    /** WorkstationCluster degraded */
                    degraded?: (boolean|null);

                    /** WorkstationCluster conditions */
                    conditions?: (google.rpc.IStatus[]|null);
                }

                /** Represents a WorkstationCluster. */
                class WorkstationCluster implements IWorkstationCluster {

                    /**
                     * Constructs a new WorkstationCluster.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.workstations.v1.IWorkstationCluster);

                    /** WorkstationCluster name. */
                    public name: string;

                    /** WorkstationCluster displayName. */
                    public displayName: string;

                    /** WorkstationCluster uid. */
                    public uid: string;

                    /** WorkstationCluster reconciling. */
                    public reconciling: boolean;

                    /** WorkstationCluster annotations. */
                    public annotations: { [k: string]: string };

                    /** WorkstationCluster labels. */
                    public labels: { [k: string]: string };

                    /** WorkstationCluster createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** WorkstationCluster updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** WorkstationCluster deleteTime. */
                    public deleteTime?: (google.protobuf.ITimestamp|null);

                    /** WorkstationCluster etag. */
                    public etag: string;

                    /** WorkstationCluster network. */
                    public network: string;

                    /** WorkstationCluster subnetwork. */
                    public subnetwork: string;

                    /** WorkstationCluster controlPlaneIp. */
                    public controlPlaneIp: string;

                    /** WorkstationCluster privateClusterConfig. */
                    public privateClusterConfig?: (google.cloud.workstations.v1.WorkstationCluster.IPrivateClusterConfig|null);

                    /** WorkstationCluster degraded. */
                    public degraded: boolean;

                    /** WorkstationCluster conditions. */
                    public conditions: google.rpc.IStatus[];

                    /**
                     * Creates a new WorkstationCluster instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns WorkstationCluster instance
                     */
                    public static create(properties?: google.cloud.workstations.v1.IWorkstationCluster): google.cloud.workstations.v1.WorkstationCluster;

                    /**
                     * Encodes the specified WorkstationCluster message. Does not implicitly {@link google.cloud.workstations.v1.WorkstationCluster.verify|verify} messages.
                     * @param message WorkstationCluster message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.workstations.v1.IWorkstationCluster, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified WorkstationCluster message, length delimited. Does not implicitly {@link google.cloud.workstations.v1.WorkstationCluster.verify|verify} messages.
                     * @param message WorkstationCluster message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.workstations.v1.IWorkstationCluster, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a WorkstationCluster message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns WorkstationCluster
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.workstations.v1.WorkstationCluster;

                    /**
                     * Decodes a WorkstationCluster message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns WorkstationCluster
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.workstations.v1.WorkstationCluster;

                    /**
                     * Verifies a WorkstationCluster message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a WorkstationCluster message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns WorkstationCluster
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.workstations.v1.WorkstationCluster;

                    /**
                     * Creates a plain object from a WorkstationCluster message. Also converts values to other types if specified.
                     * @param message WorkstationCluster
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.workstations.v1.WorkstationCluster, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this WorkstationCluster to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for WorkstationCluster
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace WorkstationCluster {

                    /** Properties of a PrivateClusterConfig. */
                    interface IPrivateClusterConfig {

                        /** PrivateClusterConfig enablePrivateEndpoint */
                        enablePrivateEndpoint?: (boolean|null);

                        /** PrivateClusterConfig clusterHostname */
                        clusterHostname?: (string|null);

                        /** PrivateClusterConfig serviceAttachmentUri */
                        serviceAttachmentUri?: (string|null);

                        /** PrivateClusterConfig allowedProjects */
                        allowedProjects?: (string[]|null);
                    }

                    /** Represents a PrivateClusterConfig. */
                    class PrivateClusterConfig implements IPrivateClusterConfig {

                        /**
                         * Constructs a new PrivateClusterConfig.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.workstations.v1.WorkstationCluster.IPrivateClusterConfig);

                        /** PrivateClusterConfig enablePrivateEndpoint. */
                        public enablePrivateEndpoint: boolean;

                        /** PrivateClusterConfig clusterHostname. */
                        public clusterHostname: string;

                        /** PrivateClusterConfig serviceAttachmentUri. */
                        public serviceAttachmentUri: string;

                        /** PrivateClusterConfig allowedProjects. */
                        public allowedProjects: string[];

                        /**
                         * Creates a new PrivateClusterConfig instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns PrivateClusterConfig instance
                         */
                        public static create(properties?: google.cloud.workstations.v1.WorkstationCluster.IPrivateClusterConfig): google.cloud.workstations.v1.WorkstationCluster.PrivateClusterConfig;

                        /**
                         * Encodes the specified PrivateClusterConfig message. Does not implicitly {@link google.cloud.workstations.v1.WorkstationCluster.PrivateClusterConfig.verify|verify} messages.
                         * @param message PrivateClusterConfig message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.workstations.v1.WorkstationCluster.IPrivateClusterConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified PrivateClusterConfig message, length delimited. Does not implicitly {@link google.cloud.workstations.v1.WorkstationCluster.PrivateClusterConfig.verify|verify} messages.
                         * @param message PrivateClusterConfig message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.workstations.v1.WorkstationCluster.IPrivateClusterConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a PrivateClusterConfig message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns PrivateClusterConfig
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.workstations.v1.WorkstationCluster.PrivateClusterConfig;

                        /**
                         * Decodes a PrivateClusterConfig message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns PrivateClusterConfig
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.workstations.v1.WorkstationCluster.PrivateClusterConfig;

                        /**
                         * Verifies a PrivateClusterConfig message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a PrivateClusterConfig message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns PrivateClusterConfig
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.workstations.v1.WorkstationCluster.PrivateClusterConfig;

                        /**
                         * Creates a plain object from a PrivateClusterConfig message. Also converts values to other types if specified.
                         * @param message PrivateClusterConfig
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.workstations.v1.WorkstationCluster.PrivateClusterConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this PrivateClusterConfig to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for PrivateClusterConfig
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }
                }

                /** Properties of a WorkstationConfig. */
                interface IWorkstationConfig {

                    /** WorkstationConfig name */
                    name?: (string|null);

                    /** WorkstationConfig displayName */
                    displayName?: (string|null);

                    /** WorkstationConfig uid */
                    uid?: (string|null);

                    /** WorkstationConfig reconciling */
                    reconciling?: (boolean|null);

                    /** WorkstationConfig annotations */
                    annotations?: ({ [k: string]: string }|null);

                    /** WorkstationConfig labels */
                    labels?: ({ [k: string]: string }|null);

                    /** WorkstationConfig createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** WorkstationConfig updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** WorkstationConfig deleteTime */
                    deleteTime?: (google.protobuf.ITimestamp|null);

                    /** WorkstationConfig etag */
                    etag?: (string|null);

                    /** WorkstationConfig idleTimeout */
                    idleTimeout?: (google.protobuf.IDuration|null);

                    /** WorkstationConfig runningTimeout */
                    runningTimeout?: (google.protobuf.IDuration|null);

                    /** WorkstationConfig host */
                    host?: (google.cloud.workstations.v1.WorkstationConfig.IHost|null);

                    /** WorkstationConfig persistentDirectories */
                    persistentDirectories?: (google.cloud.workstations.v1.WorkstationConfig.IPersistentDirectory[]|null);

                    /** WorkstationConfig container */
                    container?: (google.cloud.workstations.v1.WorkstationConfig.IContainer|null);

                    /** WorkstationConfig encryptionKey */
                    encryptionKey?: (google.cloud.workstations.v1.WorkstationConfig.ICustomerEncryptionKey|null);

                    /** WorkstationConfig readinessChecks */
                    readinessChecks?: (google.cloud.workstations.v1.WorkstationConfig.IReadinessCheck[]|null);

                    /** WorkstationConfig replicaZones */
                    replicaZones?: (string[]|null);

                    /** WorkstationConfig degraded */
                    degraded?: (boolean|null);

                    /** WorkstationConfig conditions */
                    conditions?: (google.rpc.IStatus[]|null);
                }

                /** Represents a WorkstationConfig. */
                class WorkstationConfig implements IWorkstationConfig {

                    /**
                     * Constructs a new WorkstationConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.workstations.v1.IWorkstationConfig);

                    /** WorkstationConfig name. */
                    public name: string;

                    /** WorkstationConfig displayName. */
                    public displayName: string;

                    /** WorkstationConfig uid. */
                    public uid: string;

                    /** WorkstationConfig reconciling. */
                    public reconciling: boolean;

                    /** WorkstationConfig annotations. */
                    public annotations: { [k: string]: string };

                    /** WorkstationConfig labels. */
                    public labels: { [k: string]: string };

                    /** WorkstationConfig createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** WorkstationConfig updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** WorkstationConfig deleteTime. */
                    public deleteTime?: (google.protobuf.ITimestamp|null);

                    /** WorkstationConfig etag. */
                    public etag: string;

                    /** WorkstationConfig idleTimeout. */
                    public idleTimeout?: (google.protobuf.IDuration|null);

                    /** WorkstationConfig runningTimeout. */
                    public runningTimeout?: (google.protobuf.IDuration|null);

                    /** WorkstationConfig host. */
                    public host?: (google.cloud.workstations.v1.WorkstationConfig.IHost|null);

                    /** WorkstationConfig persistentDirectories. */
                    public persistentDirectories: google.cloud.workstations.v1.WorkstationConfig.IPersistentDirectory[];

                    /** WorkstationConfig container. */
                    public container?: (google.cloud.workstations.v1.WorkstationConfig.IContainer|null);

                    /** WorkstationConfig encryptionKey. */
                    public encryptionKey?: (google.cloud.workstations.v1.WorkstationConfig.ICustomerEncryptionKey|null);

                    /** WorkstationConfig readinessChecks. */
                    public readinessChecks: google.cloud.workstations.v1.WorkstationConfig.IReadinessCheck[];

                    /** WorkstationConfig replicaZones. */
                    public replicaZones: string[];

                    /** WorkstationConfig degraded. */
                    public degraded: boolean;

                    /** WorkstationConfig conditions. */
                    public conditions: google.rpc.IStatus[];

                    /**
                     * Creates a new WorkstationConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns WorkstationConfig instance
                     */
                    public static create(properties?: google.cloud.workstations.v1.IWorkstationConfig): google.cloud.workstations.v1.WorkstationConfig;

                    /**
                     * Encodes the specified WorkstationConfig message. Does not implicitly {@link google.cloud.workstations.v1.WorkstationConfig.verify|verify} messages.
                     * @param message WorkstationConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.workstations.v1.IWorkstationConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified WorkstationConfig message, length delimited. Does not implicitly {@link google.cloud.workstations.v1.WorkstationConfig.verify|verify} messages.
                     * @param message WorkstationConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.workstations.v1.IWorkstationConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a WorkstationConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns WorkstationConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.workstations.v1.WorkstationConfig;

                    /**
                     * Decodes a WorkstationConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns WorkstationConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.workstations.v1.WorkstationConfig;

                    /**
                     * Verifies a WorkstationConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a WorkstationConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns WorkstationConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.workstations.v1.WorkstationConfig;

                    /**
                     * Creates a plain object from a WorkstationConfig message. Also converts values to other types if specified.
                     * @param message WorkstationConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.workstations.v1.WorkstationConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this WorkstationConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for WorkstationConfig
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace WorkstationConfig {

                    /** Properties of a Host. */
                    interface IHost {

                        /** Host gceInstance */
                        gceInstance?: (google.cloud.workstations.v1.WorkstationConfig.Host.IGceInstance|null);
                    }

                    /** Represents a Host. */
                    class Host implements IHost {

                        /**
                         * Constructs a new Host.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.workstations.v1.WorkstationConfig.IHost);

                        /** Host gceInstance. */
                        public gceInstance?: (google.cloud.workstations.v1.WorkstationConfig.Host.IGceInstance|null);

                        /** Host config. */
                        public config?: "gceInstance";

                        /**
                         * Creates a new Host instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Host instance
                         */
                        public static create(properties?: google.cloud.workstations.v1.WorkstationConfig.IHost): google.cloud.workstations.v1.WorkstationConfig.Host;

                        /**
                         * Encodes the specified Host message. Does not implicitly {@link google.cloud.workstations.v1.WorkstationConfig.Host.verify|verify} messages.
                         * @param message Host message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.workstations.v1.WorkstationConfig.IHost, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Host message, length delimited. Does not implicitly {@link google.cloud.workstations.v1.WorkstationConfig.Host.verify|verify} messages.
                         * @param message Host message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.workstations.v1.WorkstationConfig.IHost, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Host message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Host
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.workstations.v1.WorkstationConfig.Host;

                        /**
                         * Decodes a Host message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Host
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.workstations.v1.WorkstationConfig.Host;

                        /**
                         * Verifies a Host message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Host message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Host
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.workstations.v1.WorkstationConfig.Host;

                        /**
                         * Creates a plain object from a Host message. Also converts values to other types if specified.
                         * @param message Host
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.workstations.v1.WorkstationConfig.Host, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Host to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for Host
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace Host {

                        /** Properties of a GceInstance. */
                        interface IGceInstance {

                            /** GceInstance machineType */
                            machineType?: (string|null);

                            /** GceInstance serviceAccount */
                            serviceAccount?: (string|null);

                            /** GceInstance serviceAccountScopes */
                            serviceAccountScopes?: (string[]|null);

                            /** GceInstance tags */
                            tags?: (string[]|null);

                            /** GceInstance poolSize */
                            poolSize?: (number|null);

                            /** GceInstance pooledInstances */
                            pooledInstances?: (number|null);

                            /** GceInstance disablePublicIpAddresses */
                            disablePublicIpAddresses?: (boolean|null);

                            /** GceInstance enableNestedVirtualization */
                            enableNestedVirtualization?: (boolean|null);

                            /** GceInstance shieldedInstanceConfig */
                            shieldedInstanceConfig?: (google.cloud.workstations.v1.WorkstationConfig.Host.GceInstance.IGceShieldedInstanceConfig|null);

                            /** GceInstance confidentialInstanceConfig */
                            confidentialInstanceConfig?: (google.cloud.workstations.v1.WorkstationConfig.Host.GceInstance.IGceConfidentialInstanceConfig|null);

                            /** GceInstance bootDiskSizeGb */
                            bootDiskSizeGb?: (number|null);
                        }

                        /** Represents a GceInstance. */
                        class GceInstance implements IGceInstance {

                            /**
                             * Constructs a new GceInstance.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.workstations.v1.WorkstationConfig.Host.IGceInstance);

                            /** GceInstance machineType. */
                            public machineType: string;

                            /** GceInstance serviceAccount. */
                            public serviceAccount: string;

                            /** GceInstance serviceAccountScopes. */
                            public serviceAccountScopes: string[];

                            /** GceInstance tags. */
                            public tags: string[];

                            /** GceInstance poolSize. */
                            public poolSize: number;

                            /** GceInstance pooledInstances. */
                            public pooledInstances: number;

                            /** GceInstance disablePublicIpAddresses. */
                            public disablePublicIpAddresses: boolean;

                            /** GceInstance enableNestedVirtualization. */
                            public enableNestedVirtualization: boolean;

                            /** GceInstance shieldedInstanceConfig. */
                            public shieldedInstanceConfig?: (google.cloud.workstations.v1.WorkstationConfig.Host.GceInstance.IGceShieldedInstanceConfig|null);

                            /** GceInstance confidentialInstanceConfig. */
                            public confidentialInstanceConfig?: (google.cloud.workstations.v1.WorkstationConfig.Host.GceInstance.IGceConfidentialInstanceConfig|null);

                            /** GceInstance bootDiskSizeGb. */
                            public bootDiskSizeGb: number;

                            /**
                             * Creates a new GceInstance instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns GceInstance instance
                             */
                            public static create(properties?: google.cloud.workstations.v1.WorkstationConfig.Host.IGceInstance): google.cloud.workstations.v1.WorkstationConfig.Host.GceInstance;

                            /**
                             * Encodes the specified GceInstance message. Does not implicitly {@link google.cloud.workstations.v1.WorkstationConfig.Host.GceInstance.verify|verify} messages.
                             * @param message GceInstance message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.workstations.v1.WorkstationConfig.Host.IGceInstance, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified GceInstance message, length delimited. Does not implicitly {@link google.cloud.workstations.v1.WorkstationConfig.Host.GceInstance.verify|verify} messages.
                             * @param message GceInstance message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.workstations.v1.WorkstationConfig.Host.IGceInstance, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a GceInstance message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns GceInstance
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.workstations.v1.WorkstationConfig.Host.GceInstance;

                            /**
                             * Decodes a GceInstance message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns GceInstance
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.workstations.v1.WorkstationConfig.Host.GceInstance;

                            /**
                             * Verifies a GceInstance message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a GceInstance message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns GceInstance
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.workstations.v1.WorkstationConfig.Host.GceInstance;

                            /**
                             * Creates a plain object from a GceInstance message. Also converts values to other types if specified.
                             * @param message GceInstance
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.workstations.v1.WorkstationConfig.Host.GceInstance, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this GceInstance to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for GceInstance
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        namespace GceInstance {

                            /** Properties of a GceShieldedInstanceConfig. */
                            interface IGceShieldedInstanceConfig {

                                /** GceShieldedInstanceConfig enableSecureBoot */
                                enableSecureBoot?: (boolean|null);

                                /** GceShieldedInstanceConfig enableVtpm */
                                enableVtpm?: (boolean|null);

                                /** GceShieldedInstanceConfig enableIntegrityMonitoring */
                                enableIntegrityMonitoring?: (boolean|null);
                            }

                            /** Represents a GceShieldedInstanceConfig. */
                            class GceShieldedInstanceConfig implements IGceShieldedInstanceConfig {

                                /**
                                 * Constructs a new GceShieldedInstanceConfig.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: google.cloud.workstations.v1.WorkstationConfig.Host.GceInstance.IGceShieldedInstanceConfig);

                                /** GceShieldedInstanceConfig enableSecureBoot. */
                                public enableSecureBoot: boolean;

                                /** GceShieldedInstanceConfig enableVtpm. */
                                public enableVtpm: boolean;

                                /** GceShieldedInstanceConfig enableIntegrityMonitoring. */
                                public enableIntegrityMonitoring: boolean;

                                /**
                                 * Creates a new GceShieldedInstanceConfig instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns GceShieldedInstanceConfig instance
                                 */
                                public static create(properties?: google.cloud.workstations.v1.WorkstationConfig.Host.GceInstance.IGceShieldedInstanceConfig): google.cloud.workstations.v1.WorkstationConfig.Host.GceInstance.GceShieldedInstanceConfig;

                                /**
                                 * Encodes the specified GceShieldedInstanceConfig message. Does not implicitly {@link google.cloud.workstations.v1.WorkstationConfig.Host.GceInstance.GceShieldedInstanceConfig.verify|verify} messages.
                                 * @param message GceShieldedInstanceConfig message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: google.cloud.workstations.v1.WorkstationConfig.Host.GceInstance.IGceShieldedInstanceConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Encodes the specified GceShieldedInstanceConfig message, length delimited. Does not implicitly {@link google.cloud.workstations.v1.WorkstationConfig.Host.GceInstance.GceShieldedInstanceConfig.verify|verify} messages.
                                 * @param message GceShieldedInstanceConfig message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: google.cloud.workstations.v1.WorkstationConfig.Host.GceInstance.IGceShieldedInstanceConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Decodes a GceShieldedInstanceConfig message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns GceShieldedInstanceConfig
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.workstations.v1.WorkstationConfig.Host.GceInstance.GceShieldedInstanceConfig;

                                /**
                                 * Decodes a GceShieldedInstanceConfig message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns GceShieldedInstanceConfig
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.workstations.v1.WorkstationConfig.Host.GceInstance.GceShieldedInstanceConfig;

                                /**
                                 * Verifies a GceShieldedInstanceConfig message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates a GceShieldedInstanceConfig message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns GceShieldedInstanceConfig
                                 */
                                public static fromObject(object: { [k: string]: any }): google.cloud.workstations.v1.WorkstationConfig.Host.GceInstance.GceShieldedInstanceConfig;

                                /**
                                 * Creates a plain object from a GceShieldedInstanceConfig message. Also converts values to other types if specified.
                                 * @param message GceShieldedInstanceConfig
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: google.cloud.workstations.v1.WorkstationConfig.Host.GceInstance.GceShieldedInstanceConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this GceShieldedInstanceConfig to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };

                                /**
                                 * Gets the default type url for GceShieldedInstanceConfig
                                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                                 * @returns The default type url
                                 */
                                public static getTypeUrl(typeUrlPrefix?: string): string;
                            }

                            /** Properties of a GceConfidentialInstanceConfig. */
                            interface IGceConfidentialInstanceConfig {

                                /** GceConfidentialInstanceConfig enableConfidentialCompute */
                                enableConfidentialCompute?: (boolean|null);
                            }

                            /** Represents a GceConfidentialInstanceConfig. */
                            class GceConfidentialInstanceConfig implements IGceConfidentialInstanceConfig {

                                /**
                                 * Constructs a new GceConfidentialInstanceConfig.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: google.cloud.workstations.v1.WorkstationConfig.Host.GceInstance.IGceConfidentialInstanceConfig);

                                /** GceConfidentialInstanceConfig enableConfidentialCompute. */
                                public enableConfidentialCompute: boolean;

                                /**
                                 * Creates a new GceConfidentialInstanceConfig instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns GceConfidentialInstanceConfig instance
                                 */
                                public static create(properties?: google.cloud.workstations.v1.WorkstationConfig.Host.GceInstance.IGceConfidentialInstanceConfig): google.cloud.workstations.v1.WorkstationConfig.Host.GceInstance.GceConfidentialInstanceConfig;

                                /**
                                 * Encodes the specified GceConfidentialInstanceConfig message. Does not implicitly {@link google.cloud.workstations.v1.WorkstationConfig.Host.GceInstance.GceConfidentialInstanceConfig.verify|verify} messages.
                                 * @param message GceConfidentialInstanceConfig message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: google.cloud.workstations.v1.WorkstationConfig.Host.GceInstance.IGceConfidentialInstanceConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Encodes the specified GceConfidentialInstanceConfig message, length delimited. Does not implicitly {@link google.cloud.workstations.v1.WorkstationConfig.Host.GceInstance.GceConfidentialInstanceConfig.verify|verify} messages.
                                 * @param message GceConfidentialInstanceConfig message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: google.cloud.workstations.v1.WorkstationConfig.Host.GceInstance.IGceConfidentialInstanceConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Decodes a GceConfidentialInstanceConfig message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns GceConfidentialInstanceConfig
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.workstations.v1.WorkstationConfig.Host.GceInstance.GceConfidentialInstanceConfig;

                                /**
                                 * Decodes a GceConfidentialInstanceConfig message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns GceConfidentialInstanceConfig
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.workstations.v1.WorkstationConfig.Host.GceInstance.GceConfidentialInstanceConfig;

                                /**
                                 * Verifies a GceConfidentialInstanceConfig message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates a GceConfidentialInstanceConfig message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns GceConfidentialInstanceConfig
                                 */
                                public static fromObject(object: { [k: string]: any }): google.cloud.workstations.v1.WorkstationConfig.Host.GceInstance.GceConfidentialInstanceConfig;

                                /**
                                 * Creates a plain object from a GceConfidentialInstanceConfig message. Also converts values to other types if specified.
                                 * @param message GceConfidentialInstanceConfig
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: google.cloud.workstations.v1.WorkstationConfig.Host.GceInstance.GceConfidentialInstanceConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this GceConfidentialInstanceConfig to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };

                                /**
                                 * Gets the default type url for GceConfidentialInstanceConfig
                                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                                 * @returns The default type url
                                 */
                                public static getTypeUrl(typeUrlPrefix?: string): string;
                            }
                        }
                    }

                    /** Properties of a PersistentDirectory. */
                    interface IPersistentDirectory {

                        /** PersistentDirectory gcePd */
                        gcePd?: (google.cloud.workstations.v1.WorkstationConfig.PersistentDirectory.IGceRegionalPersistentDisk|null);

                        /** PersistentDirectory mountPath */
                        mountPath?: (string|null);
                    }

                    /** Represents a PersistentDirectory. */
                    class PersistentDirectory implements IPersistentDirectory {

                        /**
                         * Constructs a new PersistentDirectory.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.workstations.v1.WorkstationConfig.IPersistentDirectory);

                        /** PersistentDirectory gcePd. */
                        public gcePd?: (google.cloud.workstations.v1.WorkstationConfig.PersistentDirectory.IGceRegionalPersistentDisk|null);

                        /** PersistentDirectory mountPath. */
                        public mountPath: string;

                        /** PersistentDirectory directoryType. */
                        public directoryType?: "gcePd";

                        /**
                         * Creates a new PersistentDirectory instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns PersistentDirectory instance
                         */
                        public static create(properties?: google.cloud.workstations.v1.WorkstationConfig.IPersistentDirectory): google.cloud.workstations.v1.WorkstationConfig.PersistentDirectory;

                        /**
                         * Encodes the specified PersistentDirectory message. Does not implicitly {@link google.cloud.workstations.v1.WorkstationConfig.PersistentDirectory.verify|verify} messages.
                         * @param message PersistentDirectory message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.workstations.v1.WorkstationConfig.IPersistentDirectory, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified PersistentDirectory message, length delimited. Does not implicitly {@link google.cloud.workstations.v1.WorkstationConfig.PersistentDirectory.verify|verify} messages.
                         * @param message PersistentDirectory message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.workstations.v1.WorkstationConfig.IPersistentDirectory, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a PersistentDirectory message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns PersistentDirectory
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.workstations.v1.WorkstationConfig.PersistentDirectory;

                        /**
                         * Decodes a PersistentDirectory message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns PersistentDirectory
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.workstations.v1.WorkstationConfig.PersistentDirectory;

                        /**
                         * Verifies a PersistentDirectory message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a PersistentDirectory message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns PersistentDirectory
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.workstations.v1.WorkstationConfig.PersistentDirectory;

                        /**
                         * Creates a plain object from a PersistentDirectory message. Also converts values to other types if specified.
                         * @param message PersistentDirectory
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.workstations.v1.WorkstationConfig.PersistentDirectory, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this PersistentDirectory to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for PersistentDirectory
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace PersistentDirectory {

                        /** Properties of a GceRegionalPersistentDisk. */
                        interface IGceRegionalPersistentDisk {

                            /** GceRegionalPersistentDisk sizeGb */
                            sizeGb?: (number|null);

                            /** GceRegionalPersistentDisk fsType */
                            fsType?: (string|null);

                            /** GceRegionalPersistentDisk diskType */
                            diskType?: (string|null);

                            /** GceRegionalPersistentDisk sourceSnapshot */
                            sourceSnapshot?: (string|null);

                            /** GceRegionalPersistentDisk reclaimPolicy */
                            reclaimPolicy?: (google.cloud.workstations.v1.WorkstationConfig.PersistentDirectory.GceRegionalPersistentDisk.ReclaimPolicy|keyof typeof google.cloud.workstations.v1.WorkstationConfig.PersistentDirectory.GceRegionalPersistentDisk.ReclaimPolicy|null);
                        }

                        /** Represents a GceRegionalPersistentDisk. */
                        class GceRegionalPersistentDisk implements IGceRegionalPersistentDisk {

                            /**
                             * Constructs a new GceRegionalPersistentDisk.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.workstations.v1.WorkstationConfig.PersistentDirectory.IGceRegionalPersistentDisk);

                            /** GceRegionalPersistentDisk sizeGb. */
                            public sizeGb: number;

                            /** GceRegionalPersistentDisk fsType. */
                            public fsType: string;

                            /** GceRegionalPersistentDisk diskType. */
                            public diskType: string;

                            /** GceRegionalPersistentDisk sourceSnapshot. */
                            public sourceSnapshot: string;

                            /** GceRegionalPersistentDisk reclaimPolicy. */
                            public reclaimPolicy: (google.cloud.workstations.v1.WorkstationConfig.PersistentDirectory.GceRegionalPersistentDisk.ReclaimPolicy|keyof typeof google.cloud.workstations.v1.WorkstationConfig.PersistentDirectory.GceRegionalPersistentDisk.ReclaimPolicy);

                            /**
                             * Creates a new GceRegionalPersistentDisk instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns GceRegionalPersistentDisk instance
                             */
                            public static create(properties?: google.cloud.workstations.v1.WorkstationConfig.PersistentDirectory.IGceRegionalPersistentDisk): google.cloud.workstations.v1.WorkstationConfig.PersistentDirectory.GceRegionalPersistentDisk;

                            /**
                             * Encodes the specified GceRegionalPersistentDisk message. Does not implicitly {@link google.cloud.workstations.v1.WorkstationConfig.PersistentDirectory.GceRegionalPersistentDisk.verify|verify} messages.
                             * @param message GceRegionalPersistentDisk message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.workstations.v1.WorkstationConfig.PersistentDirectory.IGceRegionalPersistentDisk, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified GceRegionalPersistentDisk message, length delimited. Does not implicitly {@link google.cloud.workstations.v1.WorkstationConfig.PersistentDirectory.GceRegionalPersistentDisk.verify|verify} messages.
                             * @param message GceRegionalPersistentDisk message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.workstations.v1.WorkstationConfig.PersistentDirectory.IGceRegionalPersistentDisk, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a GceRegionalPersistentDisk message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns GceRegionalPersistentDisk
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.workstations.v1.WorkstationConfig.PersistentDirectory.GceRegionalPersistentDisk;

                            /**
                             * Decodes a GceRegionalPersistentDisk message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns GceRegionalPersistentDisk
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.workstations.v1.WorkstationConfig.PersistentDirectory.GceRegionalPersistentDisk;

                            /**
                             * Verifies a GceRegionalPersistentDisk message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a GceRegionalPersistentDisk message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns GceRegionalPersistentDisk
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.workstations.v1.WorkstationConfig.PersistentDirectory.GceRegionalPersistentDisk;

                            /**
                             * Creates a plain object from a GceRegionalPersistentDisk message. Also converts values to other types if specified.
                             * @param message GceRegionalPersistentDisk
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.workstations.v1.WorkstationConfig.PersistentDirectory.GceRegionalPersistentDisk, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this GceRegionalPersistentDisk to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for GceRegionalPersistentDisk
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        namespace GceRegionalPersistentDisk {

                            /** ReclaimPolicy enum. */
                            enum ReclaimPolicy {
                                RECLAIM_POLICY_UNSPECIFIED = 0,
                                DELETE = 1,
                                RETAIN = 2
                            }
                        }
                    }

                    /** Properties of a Container. */
                    interface IContainer {

                        /** Container image */
                        image?: (string|null);

                        /** Container command */
                        command?: (string[]|null);

                        /** Container args */
                        args?: (string[]|null);

                        /** Container env */
                        env?: ({ [k: string]: string }|null);

                        /** Container workingDir */
                        workingDir?: (string|null);

                        /** Container runAsUser */
                        runAsUser?: (number|null);
                    }

                    /** Represents a Container. */
                    class Container implements IContainer {

                        /**
                         * Constructs a new Container.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.workstations.v1.WorkstationConfig.IContainer);

                        /** Container image. */
                        public image: string;

                        /** Container command. */
                        public command: string[];

                        /** Container args. */
                        public args: string[];

                        /** Container env. */
                        public env: { [k: string]: string };

                        /** Container workingDir. */
                        public workingDir: string;

                        /** Container runAsUser. */
                        public runAsUser: number;

                        /**
                         * Creates a new Container instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Container instance
                         */
                        public static create(properties?: google.cloud.workstations.v1.WorkstationConfig.IContainer): google.cloud.workstations.v1.WorkstationConfig.Container;

                        /**
                         * Encodes the specified Container message. Does not implicitly {@link google.cloud.workstations.v1.WorkstationConfig.Container.verify|verify} messages.
                         * @param message Container message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.workstations.v1.WorkstationConfig.IContainer, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Container message, length delimited. Does not implicitly {@link google.cloud.workstations.v1.WorkstationConfig.Container.verify|verify} messages.
                         * @param message Container message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.workstations.v1.WorkstationConfig.IContainer, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Container message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Container
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.workstations.v1.WorkstationConfig.Container;

                        /**
                         * Decodes a Container message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Container
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.workstations.v1.WorkstationConfig.Container;

                        /**
                         * Verifies a Container message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Container message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Container
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.workstations.v1.WorkstationConfig.Container;

                        /**
                         * Creates a plain object from a Container message. Also converts values to other types if specified.
                         * @param message Container
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.workstations.v1.WorkstationConfig.Container, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Container to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for Container
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a CustomerEncryptionKey. */
                    interface ICustomerEncryptionKey {

                        /** CustomerEncryptionKey kmsKey */
                        kmsKey?: (string|null);

                        /** CustomerEncryptionKey kmsKeyServiceAccount */
                        kmsKeyServiceAccount?: (string|null);
                    }

                    /** Represents a CustomerEncryptionKey. */
                    class CustomerEncryptionKey implements ICustomerEncryptionKey {

                        /**
                         * Constructs a new CustomerEncryptionKey.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.workstations.v1.WorkstationConfig.ICustomerEncryptionKey);

                        /** CustomerEncryptionKey kmsKey. */
                        public kmsKey: string;

                        /** CustomerEncryptionKey kmsKeyServiceAccount. */
                        public kmsKeyServiceAccount: string;

                        /**
                         * Creates a new CustomerEncryptionKey instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns CustomerEncryptionKey instance
                         */
                        public static create(properties?: google.cloud.workstations.v1.WorkstationConfig.ICustomerEncryptionKey): google.cloud.workstations.v1.WorkstationConfig.CustomerEncryptionKey;

                        /**
                         * Encodes the specified CustomerEncryptionKey message. Does not implicitly {@link google.cloud.workstations.v1.WorkstationConfig.CustomerEncryptionKey.verify|verify} messages.
                         * @param message CustomerEncryptionKey message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.workstations.v1.WorkstationConfig.ICustomerEncryptionKey, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified CustomerEncryptionKey message, length delimited. Does not implicitly {@link google.cloud.workstations.v1.WorkstationConfig.CustomerEncryptionKey.verify|verify} messages.
                         * @param message CustomerEncryptionKey message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.workstations.v1.WorkstationConfig.ICustomerEncryptionKey, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a CustomerEncryptionKey message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns CustomerEncryptionKey
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.workstations.v1.WorkstationConfig.CustomerEncryptionKey;

                        /**
                         * Decodes a CustomerEncryptionKey message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns CustomerEncryptionKey
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.workstations.v1.WorkstationConfig.CustomerEncryptionKey;

                        /**
                         * Verifies a CustomerEncryptionKey message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a CustomerEncryptionKey message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns CustomerEncryptionKey
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.workstations.v1.WorkstationConfig.CustomerEncryptionKey;

                        /**
                         * Creates a plain object from a CustomerEncryptionKey message. Also converts values to other types if specified.
                         * @param message CustomerEncryptionKey
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.workstations.v1.WorkstationConfig.CustomerEncryptionKey, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this CustomerEncryptionKey to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for CustomerEncryptionKey
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a ReadinessCheck. */
                    interface IReadinessCheck {

                        /** ReadinessCheck path */
                        path?: (string|null);

                        /** ReadinessCheck port */
                        port?: (number|null);
                    }

                    /** Represents a ReadinessCheck. */
                    class ReadinessCheck implements IReadinessCheck {

                        /**
                         * Constructs a new ReadinessCheck.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.workstations.v1.WorkstationConfig.IReadinessCheck);

                        /** ReadinessCheck path. */
                        public path: string;

                        /** ReadinessCheck port. */
                        public port: number;

                        /**
                         * Creates a new ReadinessCheck instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ReadinessCheck instance
                         */
                        public static create(properties?: google.cloud.workstations.v1.WorkstationConfig.IReadinessCheck): google.cloud.workstations.v1.WorkstationConfig.ReadinessCheck;

                        /**
                         * Encodes the specified ReadinessCheck message. Does not implicitly {@link google.cloud.workstations.v1.WorkstationConfig.ReadinessCheck.verify|verify} messages.
                         * @param message ReadinessCheck message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.workstations.v1.WorkstationConfig.IReadinessCheck, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ReadinessCheck message, length delimited. Does not implicitly {@link google.cloud.workstations.v1.WorkstationConfig.ReadinessCheck.verify|verify} messages.
                         * @param message ReadinessCheck message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.workstations.v1.WorkstationConfig.IReadinessCheck, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ReadinessCheck message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ReadinessCheck
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.workstations.v1.WorkstationConfig.ReadinessCheck;

                        /**
                         * Decodes a ReadinessCheck message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ReadinessCheck
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.workstations.v1.WorkstationConfig.ReadinessCheck;

                        /**
                         * Verifies a ReadinessCheck message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ReadinessCheck message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ReadinessCheck
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.workstations.v1.WorkstationConfig.ReadinessCheck;

                        /**
                         * Creates a plain object from a ReadinessCheck message. Also converts values to other types if specified.
                         * @param message ReadinessCheck
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.workstations.v1.WorkstationConfig.ReadinessCheck, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ReadinessCheck to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ReadinessCheck
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }
                }

                /** Properties of a Workstation. */
                interface IWorkstation {

                    /** Workstation name */
                    name?: (string|null);

                    /** Workstation displayName */
                    displayName?: (string|null);

                    /** Workstation uid */
                    uid?: (string|null);

                    /** Workstation reconciling */
                    reconciling?: (boolean|null);

                    /** Workstation annotations */
                    annotations?: ({ [k: string]: string }|null);

                    /** Workstation labels */
                    labels?: ({ [k: string]: string }|null);

                    /** Workstation createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** Workstation updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** Workstation startTime */
                    startTime?: (google.protobuf.ITimestamp|null);

                    /** Workstation deleteTime */
                    deleteTime?: (google.protobuf.ITimestamp|null);

                    /** Workstation etag */
                    etag?: (string|null);

                    /** Workstation state */
                    state?: (google.cloud.workstations.v1.Workstation.State|keyof typeof google.cloud.workstations.v1.Workstation.State|null);

                    /** Workstation host */
                    host?: (string|null);
                }

                /** Represents a Workstation. */
                class Workstation implements IWorkstation {

                    /**
                     * Constructs a new Workstation.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.workstations.v1.IWorkstation);

                    /** Workstation name. */
                    public name: string;

                    /** Workstation displayName. */
                    public displayName: string;

                    /** Workstation uid. */
                    public uid: string;

                    /** Workstation reconciling. */
                    public reconciling: boolean;

                    /** Workstation annotations. */
                    public annotations: { [k: string]: string };

                    /** Workstation labels. */
                    public labels: { [k: string]: string };

                    /** Workstation createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** Workstation updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** Workstation startTime. */
                    public startTime?: (google.protobuf.ITimestamp|null);

                    /** Workstation deleteTime. */
                    public deleteTime?: (google.protobuf.ITimestamp|null);

                    /** Workstation etag. */
                    public etag: string;

                    /** Workstation state. */
                    public state: (google.cloud.workstations.v1.Workstation.State|keyof typeof google.cloud.workstations.v1.Workstation.State);

                    /** Workstation host. */
                    public host: string;

                    /**
                     * Creates a new Workstation instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Workstation instance
                     */
                    public static create(properties?: google.cloud.workstations.v1.IWorkstation): google.cloud.workstations.v1.Workstation;

                    /**
                     * Encodes the specified Workstation message. Does not implicitly {@link google.cloud.workstations.v1.Workstation.verify|verify} messages.
                     * @param message Workstation message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.workstations.v1.IWorkstation, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Workstation message, length delimited. Does not implicitly {@link google.cloud.workstations.v1.Workstation.verify|verify} messages.
                     * @param message Workstation message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.workstations.v1.IWorkstation, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Workstation message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Workstation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.workstations.v1.Workstation;

                    /**
                     * Decodes a Workstation message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Workstation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.workstations.v1.Workstation;

                    /**
                     * Verifies a Workstation message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Workstation message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Workstation
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.workstations.v1.Workstation;

                    /**
                     * Creates a plain object from a Workstation message. Also converts values to other types if specified.
                     * @param message Workstation
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.workstations.v1.Workstation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Workstation to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Workstation
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace Workstation {

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        STATE_STARTING = 1,
                        STATE_RUNNING = 2,
                        STATE_STOPPING = 3,
                        STATE_STOPPED = 4
                    }
                }

                /** Properties of a GetWorkstationClusterRequest. */
                interface IGetWorkstationClusterRequest {

                    /** GetWorkstationClusterRequest name */
                    name?: (string|null);
                }

                /** Represents a GetWorkstationClusterRequest. */
                class GetWorkstationClusterRequest implements IGetWorkstationClusterRequest {

                    /**
                     * Constructs a new GetWorkstationClusterRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.workstations.v1.IGetWorkstationClusterRequest);

                    /** GetWorkstationClusterRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetWorkstationClusterRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetWorkstationClusterRequest instance
                     */
                    public static create(properties?: google.cloud.workstations.v1.IGetWorkstationClusterRequest): google.cloud.workstations.v1.GetWorkstationClusterRequest;

                    /**
                     * Encodes the specified GetWorkstationClusterRequest message. Does not implicitly {@link google.cloud.workstations.v1.GetWorkstationClusterRequest.verify|verify} messages.
                     * @param message GetWorkstationClusterRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.workstations.v1.IGetWorkstationClusterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetWorkstationClusterRequest message, length delimited. Does not implicitly {@link google.cloud.workstations.v1.GetWorkstationClusterRequest.verify|verify} messages.
                     * @param message GetWorkstationClusterRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.workstations.v1.IGetWorkstationClusterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetWorkstationClusterRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetWorkstationClusterRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.workstations.v1.GetWorkstationClusterRequest;

                    /**
                     * Decodes a GetWorkstationClusterRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetWorkstationClusterRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.workstations.v1.GetWorkstationClusterRequest;

                    /**
                     * Verifies a GetWorkstationClusterRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetWorkstationClusterRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetWorkstationClusterRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.workstations.v1.GetWorkstationClusterRequest;

                    /**
                     * Creates a plain object from a GetWorkstationClusterRequest message. Also converts values to other types if specified.
                     * @param message GetWorkstationClusterRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.workstations.v1.GetWorkstationClusterRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetWorkstationClusterRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetWorkstationClusterRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListWorkstationClustersRequest. */
                interface IListWorkstationClustersRequest {

                    /** ListWorkstationClustersRequest parent */
                    parent?: (string|null);

                    /** ListWorkstationClustersRequest pageSize */
                    pageSize?: (number|null);

                    /** ListWorkstationClustersRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListWorkstationClustersRequest. */
                class ListWorkstationClustersRequest implements IListWorkstationClustersRequest {

                    /**
                     * Constructs a new ListWorkstationClustersRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.workstations.v1.IListWorkstationClustersRequest);

                    /** ListWorkstationClustersRequest parent. */
                    public parent: string;

                    /** ListWorkstationClustersRequest pageSize. */
                    public pageSize: number;

                    /** ListWorkstationClustersRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListWorkstationClustersRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListWorkstationClustersRequest instance
                     */
                    public static create(properties?: google.cloud.workstations.v1.IListWorkstationClustersRequest): google.cloud.workstations.v1.ListWorkstationClustersRequest;

                    /**
                     * Encodes the specified ListWorkstationClustersRequest message. Does not implicitly {@link google.cloud.workstations.v1.ListWorkstationClustersRequest.verify|verify} messages.
                     * @param message ListWorkstationClustersRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.workstations.v1.IListWorkstationClustersRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListWorkstationClustersRequest message, length delimited. Does not implicitly {@link google.cloud.workstations.v1.ListWorkstationClustersRequest.verify|verify} messages.
                     * @param message ListWorkstationClustersRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.workstations.v1.IListWorkstationClustersRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListWorkstationClustersRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListWorkstationClustersRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.workstations.v1.ListWorkstationClustersRequest;

                    /**
                     * Decodes a ListWorkstationClustersRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListWorkstationClustersRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.workstations.v1.ListWorkstationClustersRequest;

                    /**
                     * Verifies a ListWorkstationClustersRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListWorkstationClustersRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListWorkstationClustersRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.workstations.v1.ListWorkstationClustersRequest;

                    /**
                     * Creates a plain object from a ListWorkstationClustersRequest message. Also converts values to other types if specified.
                     * @param message ListWorkstationClustersRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.workstations.v1.ListWorkstationClustersRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListWorkstationClustersRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListWorkstationClustersRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListWorkstationClustersResponse. */
                interface IListWorkstationClustersResponse {

                    /** ListWorkstationClustersResponse workstationClusters */
                    workstationClusters?: (google.cloud.workstations.v1.IWorkstationCluster[]|null);

                    /** ListWorkstationClustersResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListWorkstationClustersResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a ListWorkstationClustersResponse. */
                class ListWorkstationClustersResponse implements IListWorkstationClustersResponse {

                    /**
                     * Constructs a new ListWorkstationClustersResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.workstations.v1.IListWorkstationClustersResponse);

                    /** ListWorkstationClustersResponse workstationClusters. */
                    public workstationClusters: google.cloud.workstations.v1.IWorkstationCluster[];

                    /** ListWorkstationClustersResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListWorkstationClustersResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListWorkstationClustersResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListWorkstationClustersResponse instance
                     */
                    public static create(properties?: google.cloud.workstations.v1.IListWorkstationClustersResponse): google.cloud.workstations.v1.ListWorkstationClustersResponse;

                    /**
                     * Encodes the specified ListWorkstationClustersResponse message. Does not implicitly {@link google.cloud.workstations.v1.ListWorkstationClustersResponse.verify|verify} messages.
                     * @param message ListWorkstationClustersResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.workstations.v1.IListWorkstationClustersResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListWorkstationClustersResponse message, length delimited. Does not implicitly {@link google.cloud.workstations.v1.ListWorkstationClustersResponse.verify|verify} messages.
                     * @param message ListWorkstationClustersResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.workstations.v1.IListWorkstationClustersResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListWorkstationClustersResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListWorkstationClustersResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.workstations.v1.ListWorkstationClustersResponse;

                    /**
                     * Decodes a ListWorkstationClustersResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListWorkstationClustersResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.workstations.v1.ListWorkstationClustersResponse;

                    /**
                     * Verifies a ListWorkstationClustersResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListWorkstationClustersResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListWorkstationClustersResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.workstations.v1.ListWorkstationClustersResponse;

                    /**
                     * Creates a plain object from a ListWorkstationClustersResponse message. Also converts values to other types if specified.
                     * @param message ListWorkstationClustersResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.workstations.v1.ListWorkstationClustersResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListWorkstationClustersResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListWorkstationClustersResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CreateWorkstationClusterRequest. */
                interface ICreateWorkstationClusterRequest {

                    /** CreateWorkstationClusterRequest parent */
                    parent?: (string|null);

                    /** CreateWorkstationClusterRequest workstationClusterId */
                    workstationClusterId?: (string|null);

                    /** CreateWorkstationClusterRequest workstationCluster */
                    workstationCluster?: (google.cloud.workstations.v1.IWorkstationCluster|null);

                    /** CreateWorkstationClusterRequest validateOnly */
                    validateOnly?: (boolean|null);
                }

                /** Represents a CreateWorkstationClusterRequest. */
                class CreateWorkstationClusterRequest implements ICreateWorkstationClusterRequest {

                    /**
                     * Constructs a new CreateWorkstationClusterRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.workstations.v1.ICreateWorkstationClusterRequest);

                    /** CreateWorkstationClusterRequest parent. */
                    public parent: string;

                    /** CreateWorkstationClusterRequest workstationClusterId. */
                    public workstationClusterId: string;

                    /** CreateWorkstationClusterRequest workstationCluster. */
                    public workstationCluster?: (google.cloud.workstations.v1.IWorkstationCluster|null);

                    /** CreateWorkstationClusterRequest validateOnly. */
                    public validateOnly: boolean;

                    /**
                     * Creates a new CreateWorkstationClusterRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateWorkstationClusterRequest instance
                     */
                    public static create(properties?: google.cloud.workstations.v1.ICreateWorkstationClusterRequest): google.cloud.workstations.v1.CreateWorkstationClusterRequest;

                    /**
                     * Encodes the specified CreateWorkstationClusterRequest message. Does not implicitly {@link google.cloud.workstations.v1.CreateWorkstationClusterRequest.verify|verify} messages.
                     * @param message CreateWorkstationClusterRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.workstations.v1.ICreateWorkstationClusterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateWorkstationClusterRequest message, length delimited. Does not implicitly {@link google.cloud.workstations.v1.CreateWorkstationClusterRequest.verify|verify} messages.
                     * @param message CreateWorkstationClusterRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.workstations.v1.ICreateWorkstationClusterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateWorkstationClusterRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateWorkstationClusterRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.workstations.v1.CreateWorkstationClusterRequest;

                    /**
                     * Decodes a CreateWorkstationClusterRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateWorkstationClusterRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.workstations.v1.CreateWorkstationClusterRequest;

                    /**
                     * Verifies a CreateWorkstationClusterRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateWorkstationClusterRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateWorkstationClusterRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.workstations.v1.CreateWorkstationClusterRequest;

                    /**
                     * Creates a plain object from a CreateWorkstationClusterRequest message. Also converts values to other types if specified.
                     * @param message CreateWorkstationClusterRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.workstations.v1.CreateWorkstationClusterRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateWorkstationClusterRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateWorkstationClusterRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpdateWorkstationClusterRequest. */
                interface IUpdateWorkstationClusterRequest {

                    /** UpdateWorkstationClusterRequest workstationCluster */
                    workstationCluster?: (google.cloud.workstations.v1.IWorkstationCluster|null);

                    /** UpdateWorkstationClusterRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateWorkstationClusterRequest validateOnly */
                    validateOnly?: (boolean|null);

                    /** UpdateWorkstationClusterRequest allowMissing */
                    allowMissing?: (boolean|null);
                }

                /** Represents an UpdateWorkstationClusterRequest. */
                class UpdateWorkstationClusterRequest implements IUpdateWorkstationClusterRequest {

                    /**
                     * Constructs a new UpdateWorkstationClusterRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.workstations.v1.IUpdateWorkstationClusterRequest);

                    /** UpdateWorkstationClusterRequest workstationCluster. */
                    public workstationCluster?: (google.cloud.workstations.v1.IWorkstationCluster|null);

                    /** UpdateWorkstationClusterRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateWorkstationClusterRequest validateOnly. */
                    public validateOnly: boolean;

                    /** UpdateWorkstationClusterRequest allowMissing. */
                    public allowMissing: boolean;

                    /**
                     * Creates a new UpdateWorkstationClusterRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateWorkstationClusterRequest instance
                     */
                    public static create(properties?: google.cloud.workstations.v1.IUpdateWorkstationClusterRequest): google.cloud.workstations.v1.UpdateWorkstationClusterRequest;

                    /**
                     * Encodes the specified UpdateWorkstationClusterRequest message. Does not implicitly {@link google.cloud.workstations.v1.UpdateWorkstationClusterRequest.verify|verify} messages.
                     * @param message UpdateWorkstationClusterRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.workstations.v1.IUpdateWorkstationClusterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateWorkstationClusterRequest message, length delimited. Does not implicitly {@link google.cloud.workstations.v1.UpdateWorkstationClusterRequest.verify|verify} messages.
                     * @param message UpdateWorkstationClusterRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.workstations.v1.IUpdateWorkstationClusterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateWorkstationClusterRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateWorkstationClusterRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.workstations.v1.UpdateWorkstationClusterRequest;

                    /**
                     * Decodes an UpdateWorkstationClusterRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateWorkstationClusterRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.workstations.v1.UpdateWorkstationClusterRequest;

                    /**
                     * Verifies an UpdateWorkstationClusterRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateWorkstationClusterRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateWorkstationClusterRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.workstations.v1.UpdateWorkstationClusterRequest;

                    /**
                     * Creates a plain object from an UpdateWorkstationClusterRequest message. Also converts values to other types if specified.
                     * @param message UpdateWorkstationClusterRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.workstations.v1.UpdateWorkstationClusterRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateWorkstationClusterRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdateWorkstationClusterRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeleteWorkstationClusterRequest. */
                interface IDeleteWorkstationClusterRequest {

                    /** DeleteWorkstationClusterRequest name */
                    name?: (string|null);

                    /** DeleteWorkstationClusterRequest validateOnly */
                    validateOnly?: (boolean|null);

                    /** DeleteWorkstationClusterRequest etag */
                    etag?: (string|null);

                    /** DeleteWorkstationClusterRequest force */
                    force?: (boolean|null);
                }

                /** Represents a DeleteWorkstationClusterRequest. */
                class DeleteWorkstationClusterRequest implements IDeleteWorkstationClusterRequest {

                    /**
                     * Constructs a new DeleteWorkstationClusterRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.workstations.v1.IDeleteWorkstationClusterRequest);

                    /** DeleteWorkstationClusterRequest name. */
                    public name: string;

                    /** DeleteWorkstationClusterRequest validateOnly. */
                    public validateOnly: boolean;

                    /** DeleteWorkstationClusterRequest etag. */
                    public etag: string;

                    /** DeleteWorkstationClusterRequest force. */
                    public force: boolean;

                    /**
                     * Creates a new DeleteWorkstationClusterRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteWorkstationClusterRequest instance
                     */
                    public static create(properties?: google.cloud.workstations.v1.IDeleteWorkstationClusterRequest): google.cloud.workstations.v1.DeleteWorkstationClusterRequest;

                    /**
                     * Encodes the specified DeleteWorkstationClusterRequest message. Does not implicitly {@link google.cloud.workstations.v1.DeleteWorkstationClusterRequest.verify|verify} messages.
                     * @param message DeleteWorkstationClusterRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.workstations.v1.IDeleteWorkstationClusterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteWorkstationClusterRequest message, length delimited. Does not implicitly {@link google.cloud.workstations.v1.DeleteWorkstationClusterRequest.verify|verify} messages.
                     * @param message DeleteWorkstationClusterRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.workstations.v1.IDeleteWorkstationClusterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteWorkstationClusterRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteWorkstationClusterRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.workstations.v1.DeleteWorkstationClusterRequest;

                    /**
                     * Decodes a DeleteWorkstationClusterRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteWorkstationClusterRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.workstations.v1.DeleteWorkstationClusterRequest;

                    /**
                     * Verifies a DeleteWorkstationClusterRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteWorkstationClusterRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteWorkstationClusterRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.workstations.v1.DeleteWorkstationClusterRequest;

                    /**
                     * Creates a plain object from a DeleteWorkstationClusterRequest message. Also converts values to other types if specified.
                     * @param message DeleteWorkstationClusterRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.workstations.v1.DeleteWorkstationClusterRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteWorkstationClusterRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeleteWorkstationClusterRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetWorkstationConfigRequest. */
                interface IGetWorkstationConfigRequest {

                    /** GetWorkstationConfigRequest name */
                    name?: (string|null);
                }

                /** Represents a GetWorkstationConfigRequest. */
                class GetWorkstationConfigRequest implements IGetWorkstationConfigRequest {

                    /**
                     * Constructs a new GetWorkstationConfigRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.workstations.v1.IGetWorkstationConfigRequest);

                    /** GetWorkstationConfigRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetWorkstationConfigRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetWorkstationConfigRequest instance
                     */
                    public static create(properties?: google.cloud.workstations.v1.IGetWorkstationConfigRequest): google.cloud.workstations.v1.GetWorkstationConfigRequest;

                    /**
                     * Encodes the specified GetWorkstationConfigRequest message. Does not implicitly {@link google.cloud.workstations.v1.GetWorkstationConfigRequest.verify|verify} messages.
                     * @param message GetWorkstationConfigRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.workstations.v1.IGetWorkstationConfigRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetWorkstationConfigRequest message, length delimited. Does not implicitly {@link google.cloud.workstations.v1.GetWorkstationConfigRequest.verify|verify} messages.
                     * @param message GetWorkstationConfigRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.workstations.v1.IGetWorkstationConfigRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetWorkstationConfigRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetWorkstationConfigRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.workstations.v1.GetWorkstationConfigRequest;

                    /**
                     * Decodes a GetWorkstationConfigRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetWorkstationConfigRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.workstations.v1.GetWorkstationConfigRequest;

                    /**
                     * Verifies a GetWorkstationConfigRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetWorkstationConfigRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetWorkstationConfigRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.workstations.v1.GetWorkstationConfigRequest;

                    /**
                     * Creates a plain object from a GetWorkstationConfigRequest message. Also converts values to other types if specified.
                     * @param message GetWorkstationConfigRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.workstations.v1.GetWorkstationConfigRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetWorkstationConfigRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetWorkstationConfigRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListWorkstationConfigsRequest. */
                interface IListWorkstationConfigsRequest {

                    /** ListWorkstationConfigsRequest parent */
                    parent?: (string|null);

                    /** ListWorkstationConfigsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListWorkstationConfigsRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListWorkstationConfigsRequest. */
                class ListWorkstationConfigsRequest implements IListWorkstationConfigsRequest {

                    /**
                     * Constructs a new ListWorkstationConfigsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.workstations.v1.IListWorkstationConfigsRequest);

                    /** ListWorkstationConfigsRequest parent. */
                    public parent: string;

                    /** ListWorkstationConfigsRequest pageSize. */
                    public pageSize: number;

                    /** ListWorkstationConfigsRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListWorkstationConfigsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListWorkstationConfigsRequest instance
                     */
                    public static create(properties?: google.cloud.workstations.v1.IListWorkstationConfigsRequest): google.cloud.workstations.v1.ListWorkstationConfigsRequest;

                    /**
                     * Encodes the specified ListWorkstationConfigsRequest message. Does not implicitly {@link google.cloud.workstations.v1.ListWorkstationConfigsRequest.verify|verify} messages.
                     * @param message ListWorkstationConfigsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.workstations.v1.IListWorkstationConfigsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListWorkstationConfigsRequest message, length delimited. Does not implicitly {@link google.cloud.workstations.v1.ListWorkstationConfigsRequest.verify|verify} messages.
                     * @param message ListWorkstationConfigsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.workstations.v1.IListWorkstationConfigsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListWorkstationConfigsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListWorkstationConfigsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.workstations.v1.ListWorkstationConfigsRequest;

                    /**
                     * Decodes a ListWorkstationConfigsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListWorkstationConfigsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.workstations.v1.ListWorkstationConfigsRequest;

                    /**
                     * Verifies a ListWorkstationConfigsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListWorkstationConfigsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListWorkstationConfigsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.workstations.v1.ListWorkstationConfigsRequest;

                    /**
                     * Creates a plain object from a ListWorkstationConfigsRequest message. Also converts values to other types if specified.
                     * @param message ListWorkstationConfigsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.workstations.v1.ListWorkstationConfigsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListWorkstationConfigsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListWorkstationConfigsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListWorkstationConfigsResponse. */
                interface IListWorkstationConfigsResponse {

                    /** ListWorkstationConfigsResponse workstationConfigs */
                    workstationConfigs?: (google.cloud.workstations.v1.IWorkstationConfig[]|null);

                    /** ListWorkstationConfigsResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListWorkstationConfigsResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a ListWorkstationConfigsResponse. */
                class ListWorkstationConfigsResponse implements IListWorkstationConfigsResponse {

                    /**
                     * Constructs a new ListWorkstationConfigsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.workstations.v1.IListWorkstationConfigsResponse);

                    /** ListWorkstationConfigsResponse workstationConfigs. */
                    public workstationConfigs: google.cloud.workstations.v1.IWorkstationConfig[];

                    /** ListWorkstationConfigsResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListWorkstationConfigsResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListWorkstationConfigsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListWorkstationConfigsResponse instance
                     */
                    public static create(properties?: google.cloud.workstations.v1.IListWorkstationConfigsResponse): google.cloud.workstations.v1.ListWorkstationConfigsResponse;

                    /**
                     * Encodes the specified ListWorkstationConfigsResponse message. Does not implicitly {@link google.cloud.workstations.v1.ListWorkstationConfigsResponse.verify|verify} messages.
                     * @param message ListWorkstationConfigsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.workstations.v1.IListWorkstationConfigsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListWorkstationConfigsResponse message, length delimited. Does not implicitly {@link google.cloud.workstations.v1.ListWorkstationConfigsResponse.verify|verify} messages.
                     * @param message ListWorkstationConfigsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.workstations.v1.IListWorkstationConfigsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListWorkstationConfigsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListWorkstationConfigsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.workstations.v1.ListWorkstationConfigsResponse;

                    /**
                     * Decodes a ListWorkstationConfigsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListWorkstationConfigsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.workstations.v1.ListWorkstationConfigsResponse;

                    /**
                     * Verifies a ListWorkstationConfigsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListWorkstationConfigsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListWorkstationConfigsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.workstations.v1.ListWorkstationConfigsResponse;

                    /**
                     * Creates a plain object from a ListWorkstationConfigsResponse message. Also converts values to other types if specified.
                     * @param message ListWorkstationConfigsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.workstations.v1.ListWorkstationConfigsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListWorkstationConfigsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListWorkstationConfigsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListUsableWorkstationConfigsRequest. */
                interface IListUsableWorkstationConfigsRequest {

                    /** ListUsableWorkstationConfigsRequest parent */
                    parent?: (string|null);

                    /** ListUsableWorkstationConfigsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListUsableWorkstationConfigsRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListUsableWorkstationConfigsRequest. */
                class ListUsableWorkstationConfigsRequest implements IListUsableWorkstationConfigsRequest {

                    /**
                     * Constructs a new ListUsableWorkstationConfigsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.workstations.v1.IListUsableWorkstationConfigsRequest);

                    /** ListUsableWorkstationConfigsRequest parent. */
                    public parent: string;

                    /** ListUsableWorkstationConfigsRequest pageSize. */
                    public pageSize: number;

                    /** ListUsableWorkstationConfigsRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListUsableWorkstationConfigsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListUsableWorkstationConfigsRequest instance
                     */
                    public static create(properties?: google.cloud.workstations.v1.IListUsableWorkstationConfigsRequest): google.cloud.workstations.v1.ListUsableWorkstationConfigsRequest;

                    /**
                     * Encodes the specified ListUsableWorkstationConfigsRequest message. Does not implicitly {@link google.cloud.workstations.v1.ListUsableWorkstationConfigsRequest.verify|verify} messages.
                     * @param message ListUsableWorkstationConfigsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.workstations.v1.IListUsableWorkstationConfigsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListUsableWorkstationConfigsRequest message, length delimited. Does not implicitly {@link google.cloud.workstations.v1.ListUsableWorkstationConfigsRequest.verify|verify} messages.
                     * @param message ListUsableWorkstationConfigsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.workstations.v1.IListUsableWorkstationConfigsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListUsableWorkstationConfigsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListUsableWorkstationConfigsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.workstations.v1.ListUsableWorkstationConfigsRequest;

                    /**
                     * Decodes a ListUsableWorkstationConfigsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListUsableWorkstationConfigsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.workstations.v1.ListUsableWorkstationConfigsRequest;

                    /**
                     * Verifies a ListUsableWorkstationConfigsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListUsableWorkstationConfigsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListUsableWorkstationConfigsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.workstations.v1.ListUsableWorkstationConfigsRequest;

                    /**
                     * Creates a plain object from a ListUsableWorkstationConfigsRequest message. Also converts values to other types if specified.
                     * @param message ListUsableWorkstationConfigsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.workstations.v1.ListUsableWorkstationConfigsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListUsableWorkstationConfigsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListUsableWorkstationConfigsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListUsableWorkstationConfigsResponse. */
                interface IListUsableWorkstationConfigsResponse {

                    /** ListUsableWorkstationConfigsResponse workstationConfigs */
                    workstationConfigs?: (google.cloud.workstations.v1.IWorkstationConfig[]|null);

                    /** ListUsableWorkstationConfigsResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListUsableWorkstationConfigsResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a ListUsableWorkstationConfigsResponse. */
                class ListUsableWorkstationConfigsResponse implements IListUsableWorkstationConfigsResponse {

                    /**
                     * Constructs a new ListUsableWorkstationConfigsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.workstations.v1.IListUsableWorkstationConfigsResponse);

                    /** ListUsableWorkstationConfigsResponse workstationConfigs. */
                    public workstationConfigs: google.cloud.workstations.v1.IWorkstationConfig[];

                    /** ListUsableWorkstationConfigsResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListUsableWorkstationConfigsResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListUsableWorkstationConfigsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListUsableWorkstationConfigsResponse instance
                     */
                    public static create(properties?: google.cloud.workstations.v1.IListUsableWorkstationConfigsResponse): google.cloud.workstations.v1.ListUsableWorkstationConfigsResponse;

                    /**
                     * Encodes the specified ListUsableWorkstationConfigsResponse message. Does not implicitly {@link google.cloud.workstations.v1.ListUsableWorkstationConfigsResponse.verify|verify} messages.
                     * @param message ListUsableWorkstationConfigsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.workstations.v1.IListUsableWorkstationConfigsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListUsableWorkstationConfigsResponse message, length delimited. Does not implicitly {@link google.cloud.workstations.v1.ListUsableWorkstationConfigsResponse.verify|verify} messages.
                     * @param message ListUsableWorkstationConfigsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.workstations.v1.IListUsableWorkstationConfigsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListUsableWorkstationConfigsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListUsableWorkstationConfigsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.workstations.v1.ListUsableWorkstationConfigsResponse;

                    /**
                     * Decodes a ListUsableWorkstationConfigsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListUsableWorkstationConfigsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.workstations.v1.ListUsableWorkstationConfigsResponse;

                    /**
                     * Verifies a ListUsableWorkstationConfigsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListUsableWorkstationConfigsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListUsableWorkstationConfigsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.workstations.v1.ListUsableWorkstationConfigsResponse;

                    /**
                     * Creates a plain object from a ListUsableWorkstationConfigsResponse message. Also converts values to other types if specified.
                     * @param message ListUsableWorkstationConfigsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.workstations.v1.ListUsableWorkstationConfigsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListUsableWorkstationConfigsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListUsableWorkstationConfigsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CreateWorkstationConfigRequest. */
                interface ICreateWorkstationConfigRequest {

                    /** CreateWorkstationConfigRequest parent */
                    parent?: (string|null);

                    /** CreateWorkstationConfigRequest workstationConfigId */
                    workstationConfigId?: (string|null);

                    /** CreateWorkstationConfigRequest workstationConfig */
                    workstationConfig?: (google.cloud.workstations.v1.IWorkstationConfig|null);

                    /** CreateWorkstationConfigRequest validateOnly */
                    validateOnly?: (boolean|null);
                }

                /** Represents a CreateWorkstationConfigRequest. */
                class CreateWorkstationConfigRequest implements ICreateWorkstationConfigRequest {

                    /**
                     * Constructs a new CreateWorkstationConfigRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.workstations.v1.ICreateWorkstationConfigRequest);

                    /** CreateWorkstationConfigRequest parent. */
                    public parent: string;

                    /** CreateWorkstationConfigRequest workstationConfigId. */
                    public workstationConfigId: string;

                    /** CreateWorkstationConfigRequest workstationConfig. */
                    public workstationConfig?: (google.cloud.workstations.v1.IWorkstationConfig|null);

                    /** CreateWorkstationConfigRequest validateOnly. */
                    public validateOnly: boolean;

                    /**
                     * Creates a new CreateWorkstationConfigRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateWorkstationConfigRequest instance
                     */
                    public static create(properties?: google.cloud.workstations.v1.ICreateWorkstationConfigRequest): google.cloud.workstations.v1.CreateWorkstationConfigRequest;

                    /**
                     * Encodes the specified CreateWorkstationConfigRequest message. Does not implicitly {@link google.cloud.workstations.v1.CreateWorkstationConfigRequest.verify|verify} messages.
                     * @param message CreateWorkstationConfigRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.workstations.v1.ICreateWorkstationConfigRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateWorkstationConfigRequest message, length delimited. Does not implicitly {@link google.cloud.workstations.v1.CreateWorkstationConfigRequest.verify|verify} messages.
                     * @param message CreateWorkstationConfigRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.workstations.v1.ICreateWorkstationConfigRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateWorkstationConfigRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateWorkstationConfigRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.workstations.v1.CreateWorkstationConfigRequest;

                    /**
                     * Decodes a CreateWorkstationConfigRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateWorkstationConfigRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.workstations.v1.CreateWorkstationConfigRequest;

                    /**
                     * Verifies a CreateWorkstationConfigRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateWorkstationConfigRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateWorkstationConfigRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.workstations.v1.CreateWorkstationConfigRequest;

                    /**
                     * Creates a plain object from a CreateWorkstationConfigRequest message. Also converts values to other types if specified.
                     * @param message CreateWorkstationConfigRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.workstations.v1.CreateWorkstationConfigRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateWorkstationConfigRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateWorkstationConfigRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpdateWorkstationConfigRequest. */
                interface IUpdateWorkstationConfigRequest {

                    /** UpdateWorkstationConfigRequest workstationConfig */
                    workstationConfig?: (google.cloud.workstations.v1.IWorkstationConfig|null);

                    /** UpdateWorkstationConfigRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateWorkstationConfigRequest validateOnly */
                    validateOnly?: (boolean|null);

                    /** UpdateWorkstationConfigRequest allowMissing */
                    allowMissing?: (boolean|null);
                }

                /** Represents an UpdateWorkstationConfigRequest. */
                class UpdateWorkstationConfigRequest implements IUpdateWorkstationConfigRequest {

                    /**
                     * Constructs a new UpdateWorkstationConfigRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.workstations.v1.IUpdateWorkstationConfigRequest);

                    /** UpdateWorkstationConfigRequest workstationConfig. */
                    public workstationConfig?: (google.cloud.workstations.v1.IWorkstationConfig|null);

                    /** UpdateWorkstationConfigRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateWorkstationConfigRequest validateOnly. */
                    public validateOnly: boolean;

                    /** UpdateWorkstationConfigRequest allowMissing. */
                    public allowMissing: boolean;

                    /**
                     * Creates a new UpdateWorkstationConfigRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateWorkstationConfigRequest instance
                     */
                    public static create(properties?: google.cloud.workstations.v1.IUpdateWorkstationConfigRequest): google.cloud.workstations.v1.UpdateWorkstationConfigRequest;

                    /**
                     * Encodes the specified UpdateWorkstationConfigRequest message. Does not implicitly {@link google.cloud.workstations.v1.UpdateWorkstationConfigRequest.verify|verify} messages.
                     * @param message UpdateWorkstationConfigRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.workstations.v1.IUpdateWorkstationConfigRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateWorkstationConfigRequest message, length delimited. Does not implicitly {@link google.cloud.workstations.v1.UpdateWorkstationConfigRequest.verify|verify} messages.
                     * @param message UpdateWorkstationConfigRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.workstations.v1.IUpdateWorkstationConfigRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateWorkstationConfigRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateWorkstationConfigRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.workstations.v1.UpdateWorkstationConfigRequest;

                    /**
                     * Decodes an UpdateWorkstationConfigRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateWorkstationConfigRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.workstations.v1.UpdateWorkstationConfigRequest;

                    /**
                     * Verifies an UpdateWorkstationConfigRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateWorkstationConfigRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateWorkstationConfigRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.workstations.v1.UpdateWorkstationConfigRequest;

                    /**
                     * Creates a plain object from an UpdateWorkstationConfigRequest message. Also converts values to other types if specified.
                     * @param message UpdateWorkstationConfigRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.workstations.v1.UpdateWorkstationConfigRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateWorkstationConfigRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdateWorkstationConfigRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeleteWorkstationConfigRequest. */
                interface IDeleteWorkstationConfigRequest {

                    /** DeleteWorkstationConfigRequest name */
                    name?: (string|null);

                    /** DeleteWorkstationConfigRequest validateOnly */
                    validateOnly?: (boolean|null);

                    /** DeleteWorkstationConfigRequest etag */
                    etag?: (string|null);

                    /** DeleteWorkstationConfigRequest force */
                    force?: (boolean|null);
                }

                /** Represents a DeleteWorkstationConfigRequest. */
                class DeleteWorkstationConfigRequest implements IDeleteWorkstationConfigRequest {

                    /**
                     * Constructs a new DeleteWorkstationConfigRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.workstations.v1.IDeleteWorkstationConfigRequest);

                    /** DeleteWorkstationConfigRequest name. */
                    public name: string;

                    /** DeleteWorkstationConfigRequest validateOnly. */
                    public validateOnly: boolean;

                    /** DeleteWorkstationConfigRequest etag. */
                    public etag: string;

                    /** DeleteWorkstationConfigRequest force. */
                    public force: boolean;

                    /**
                     * Creates a new DeleteWorkstationConfigRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteWorkstationConfigRequest instance
                     */
                    public static create(properties?: google.cloud.workstations.v1.IDeleteWorkstationConfigRequest): google.cloud.workstations.v1.DeleteWorkstationConfigRequest;

                    /**
                     * Encodes the specified DeleteWorkstationConfigRequest message. Does not implicitly {@link google.cloud.workstations.v1.DeleteWorkstationConfigRequest.verify|verify} messages.
                     * @param message DeleteWorkstationConfigRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.workstations.v1.IDeleteWorkstationConfigRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteWorkstationConfigRequest message, length delimited. Does not implicitly {@link google.cloud.workstations.v1.DeleteWorkstationConfigRequest.verify|verify} messages.
                     * @param message DeleteWorkstationConfigRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.workstations.v1.IDeleteWorkstationConfigRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteWorkstationConfigRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteWorkstationConfigRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.workstations.v1.DeleteWorkstationConfigRequest;

                    /**
                     * Decodes a DeleteWorkstationConfigRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteWorkstationConfigRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.workstations.v1.DeleteWorkstationConfigRequest;

                    /**
                     * Verifies a DeleteWorkstationConfigRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteWorkstationConfigRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteWorkstationConfigRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.workstations.v1.DeleteWorkstationConfigRequest;

                    /**
                     * Creates a plain object from a DeleteWorkstationConfigRequest message. Also converts values to other types if specified.
                     * @param message DeleteWorkstationConfigRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.workstations.v1.DeleteWorkstationConfigRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteWorkstationConfigRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeleteWorkstationConfigRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetWorkstationRequest. */
                interface IGetWorkstationRequest {

                    /** GetWorkstationRequest name */
                    name?: (string|null);
                }

                /** Represents a GetWorkstationRequest. */
                class GetWorkstationRequest implements IGetWorkstationRequest {

                    /**
                     * Constructs a new GetWorkstationRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.workstations.v1.IGetWorkstationRequest);

                    /** GetWorkstationRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetWorkstationRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetWorkstationRequest instance
                     */
                    public static create(properties?: google.cloud.workstations.v1.IGetWorkstationRequest): google.cloud.workstations.v1.GetWorkstationRequest;

                    /**
                     * Encodes the specified GetWorkstationRequest message. Does not implicitly {@link google.cloud.workstations.v1.GetWorkstationRequest.verify|verify} messages.
                     * @param message GetWorkstationRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.workstations.v1.IGetWorkstationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetWorkstationRequest message, length delimited. Does not implicitly {@link google.cloud.workstations.v1.GetWorkstationRequest.verify|verify} messages.
                     * @param message GetWorkstationRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.workstations.v1.IGetWorkstationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetWorkstationRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetWorkstationRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.workstations.v1.GetWorkstationRequest;

                    /**
                     * Decodes a GetWorkstationRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetWorkstationRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.workstations.v1.GetWorkstationRequest;

                    /**
                     * Verifies a GetWorkstationRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetWorkstationRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetWorkstationRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.workstations.v1.GetWorkstationRequest;

                    /**
                     * Creates a plain object from a GetWorkstationRequest message. Also converts values to other types if specified.
                     * @param message GetWorkstationRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.workstations.v1.GetWorkstationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetWorkstationRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetWorkstationRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListWorkstationsRequest. */
                interface IListWorkstationsRequest {

                    /** ListWorkstationsRequest parent */
                    parent?: (string|null);

                    /** ListWorkstationsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListWorkstationsRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListWorkstationsRequest. */
                class ListWorkstationsRequest implements IListWorkstationsRequest {

                    /**
                     * Constructs a new ListWorkstationsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.workstations.v1.IListWorkstationsRequest);

                    /** ListWorkstationsRequest parent. */
                    public parent: string;

                    /** ListWorkstationsRequest pageSize. */
                    public pageSize: number;

                    /** ListWorkstationsRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListWorkstationsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListWorkstationsRequest instance
                     */
                    public static create(properties?: google.cloud.workstations.v1.IListWorkstationsRequest): google.cloud.workstations.v1.ListWorkstationsRequest;

                    /**
                     * Encodes the specified ListWorkstationsRequest message. Does not implicitly {@link google.cloud.workstations.v1.ListWorkstationsRequest.verify|verify} messages.
                     * @param message ListWorkstationsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.workstations.v1.IListWorkstationsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListWorkstationsRequest message, length delimited. Does not implicitly {@link google.cloud.workstations.v1.ListWorkstationsRequest.verify|verify} messages.
                     * @param message ListWorkstationsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.workstations.v1.IListWorkstationsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListWorkstationsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListWorkstationsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.workstations.v1.ListWorkstationsRequest;

                    /**
                     * Decodes a ListWorkstationsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListWorkstationsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.workstations.v1.ListWorkstationsRequest;

                    /**
                     * Verifies a ListWorkstationsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListWorkstationsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListWorkstationsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.workstations.v1.ListWorkstationsRequest;

                    /**
                     * Creates a plain object from a ListWorkstationsRequest message. Also converts values to other types if specified.
                     * @param message ListWorkstationsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.workstations.v1.ListWorkstationsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListWorkstationsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListWorkstationsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListWorkstationsResponse. */
                interface IListWorkstationsResponse {

                    /** ListWorkstationsResponse workstations */
                    workstations?: (google.cloud.workstations.v1.IWorkstation[]|null);

                    /** ListWorkstationsResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListWorkstationsResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a ListWorkstationsResponse. */
                class ListWorkstationsResponse implements IListWorkstationsResponse {

                    /**
                     * Constructs a new ListWorkstationsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.workstations.v1.IListWorkstationsResponse);

                    /** ListWorkstationsResponse workstations. */
                    public workstations: google.cloud.workstations.v1.IWorkstation[];

                    /** ListWorkstationsResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListWorkstationsResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListWorkstationsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListWorkstationsResponse instance
                     */
                    public static create(properties?: google.cloud.workstations.v1.IListWorkstationsResponse): google.cloud.workstations.v1.ListWorkstationsResponse;

                    /**
                     * Encodes the specified ListWorkstationsResponse message. Does not implicitly {@link google.cloud.workstations.v1.ListWorkstationsResponse.verify|verify} messages.
                     * @param message ListWorkstationsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.workstations.v1.IListWorkstationsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListWorkstationsResponse message, length delimited. Does not implicitly {@link google.cloud.workstations.v1.ListWorkstationsResponse.verify|verify} messages.
                     * @param message ListWorkstationsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.workstations.v1.IListWorkstationsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListWorkstationsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListWorkstationsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.workstations.v1.ListWorkstationsResponse;

                    /**
                     * Decodes a ListWorkstationsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListWorkstationsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.workstations.v1.ListWorkstationsResponse;

                    /**
                     * Verifies a ListWorkstationsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListWorkstationsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListWorkstationsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.workstations.v1.ListWorkstationsResponse;

                    /**
                     * Creates a plain object from a ListWorkstationsResponse message. Also converts values to other types if specified.
                     * @param message ListWorkstationsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.workstations.v1.ListWorkstationsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListWorkstationsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListWorkstationsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListUsableWorkstationsRequest. */
                interface IListUsableWorkstationsRequest {

                    /** ListUsableWorkstationsRequest parent */
                    parent?: (string|null);

                    /** ListUsableWorkstationsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListUsableWorkstationsRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListUsableWorkstationsRequest. */
                class ListUsableWorkstationsRequest implements IListUsableWorkstationsRequest {

                    /**
                     * Constructs a new ListUsableWorkstationsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.workstations.v1.IListUsableWorkstationsRequest);

                    /** ListUsableWorkstationsRequest parent. */
                    public parent: string;

                    /** ListUsableWorkstationsRequest pageSize. */
                    public pageSize: number;

                    /** ListUsableWorkstationsRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListUsableWorkstationsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListUsableWorkstationsRequest instance
                     */
                    public static create(properties?: google.cloud.workstations.v1.IListUsableWorkstationsRequest): google.cloud.workstations.v1.ListUsableWorkstationsRequest;

                    /**
                     * Encodes the specified ListUsableWorkstationsRequest message. Does not implicitly {@link google.cloud.workstations.v1.ListUsableWorkstationsRequest.verify|verify} messages.
                     * @param message ListUsableWorkstationsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.workstations.v1.IListUsableWorkstationsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListUsableWorkstationsRequest message, length delimited. Does not implicitly {@link google.cloud.workstations.v1.ListUsableWorkstationsRequest.verify|verify} messages.
                     * @param message ListUsableWorkstationsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.workstations.v1.IListUsableWorkstationsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListUsableWorkstationsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListUsableWorkstationsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.workstations.v1.ListUsableWorkstationsRequest;

                    /**
                     * Decodes a ListUsableWorkstationsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListUsableWorkstationsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.workstations.v1.ListUsableWorkstationsRequest;

                    /**
                     * Verifies a ListUsableWorkstationsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListUsableWorkstationsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListUsableWorkstationsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.workstations.v1.ListUsableWorkstationsRequest;

                    /**
                     * Creates a plain object from a ListUsableWorkstationsRequest message. Also converts values to other types if specified.
                     * @param message ListUsableWorkstationsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.workstations.v1.ListUsableWorkstationsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListUsableWorkstationsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListUsableWorkstationsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListUsableWorkstationsResponse. */
                interface IListUsableWorkstationsResponse {

                    /** ListUsableWorkstationsResponse workstations */
                    workstations?: (google.cloud.workstations.v1.IWorkstation[]|null);

                    /** ListUsableWorkstationsResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListUsableWorkstationsResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a ListUsableWorkstationsResponse. */
                class ListUsableWorkstationsResponse implements IListUsableWorkstationsResponse {

                    /**
                     * Constructs a new ListUsableWorkstationsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.workstations.v1.IListUsableWorkstationsResponse);

                    /** ListUsableWorkstationsResponse workstations. */
                    public workstations: google.cloud.workstations.v1.IWorkstation[];

                    /** ListUsableWorkstationsResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListUsableWorkstationsResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListUsableWorkstationsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListUsableWorkstationsResponse instance
                     */
                    public static create(properties?: google.cloud.workstations.v1.IListUsableWorkstationsResponse): google.cloud.workstations.v1.ListUsableWorkstationsResponse;

                    /**
                     * Encodes the specified ListUsableWorkstationsResponse message. Does not implicitly {@link google.cloud.workstations.v1.ListUsableWorkstationsResponse.verify|verify} messages.
                     * @param message ListUsableWorkstationsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.workstations.v1.IListUsableWorkstationsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListUsableWorkstationsResponse message, length delimited. Does not implicitly {@link google.cloud.workstations.v1.ListUsableWorkstationsResponse.verify|verify} messages.
                     * @param message ListUsableWorkstationsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.workstations.v1.IListUsableWorkstationsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListUsableWorkstationsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListUsableWorkstationsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.workstations.v1.ListUsableWorkstationsResponse;

                    /**
                     * Decodes a ListUsableWorkstationsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListUsableWorkstationsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.workstations.v1.ListUsableWorkstationsResponse;

                    /**
                     * Verifies a ListUsableWorkstationsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListUsableWorkstationsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListUsableWorkstationsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.workstations.v1.ListUsableWorkstationsResponse;

                    /**
                     * Creates a plain object from a ListUsableWorkstationsResponse message. Also converts values to other types if specified.
                     * @param message ListUsableWorkstationsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.workstations.v1.ListUsableWorkstationsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListUsableWorkstationsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListUsableWorkstationsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CreateWorkstationRequest. */
                interface ICreateWorkstationRequest {

                    /** CreateWorkstationRequest parent */
                    parent?: (string|null);

                    /** CreateWorkstationRequest workstationId */
                    workstationId?: (string|null);

                    /** CreateWorkstationRequest workstation */
                    workstation?: (google.cloud.workstations.v1.IWorkstation|null);

                    /** CreateWorkstationRequest validateOnly */
                    validateOnly?: (boolean|null);
                }

                /** Represents a CreateWorkstationRequest. */
                class CreateWorkstationRequest implements ICreateWorkstationRequest {

                    /**
                     * Constructs a new CreateWorkstationRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.workstations.v1.ICreateWorkstationRequest);

                    /** CreateWorkstationRequest parent. */
                    public parent: string;

                    /** CreateWorkstationRequest workstationId. */
                    public workstationId: string;

                    /** CreateWorkstationRequest workstation. */
                    public workstation?: (google.cloud.workstations.v1.IWorkstation|null);

                    /** CreateWorkstationRequest validateOnly. */
                    public validateOnly: boolean;

                    /**
                     * Creates a new CreateWorkstationRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateWorkstationRequest instance
                     */
                    public static create(properties?: google.cloud.workstations.v1.ICreateWorkstationRequest): google.cloud.workstations.v1.CreateWorkstationRequest;

                    /**
                     * Encodes the specified CreateWorkstationRequest message. Does not implicitly {@link google.cloud.workstations.v1.CreateWorkstationRequest.verify|verify} messages.
                     * @param message CreateWorkstationRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.workstations.v1.ICreateWorkstationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateWorkstationRequest message, length delimited. Does not implicitly {@link google.cloud.workstations.v1.CreateWorkstationRequest.verify|verify} messages.
                     * @param message CreateWorkstationRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.workstations.v1.ICreateWorkstationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateWorkstationRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateWorkstationRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.workstations.v1.CreateWorkstationRequest;

                    /**
                     * Decodes a CreateWorkstationRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateWorkstationRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.workstations.v1.CreateWorkstationRequest;

                    /**
                     * Verifies a CreateWorkstationRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateWorkstationRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateWorkstationRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.workstations.v1.CreateWorkstationRequest;

                    /**
                     * Creates a plain object from a CreateWorkstationRequest message. Also converts values to other types if specified.
                     * @param message CreateWorkstationRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.workstations.v1.CreateWorkstationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateWorkstationRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateWorkstationRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpdateWorkstationRequest. */
                interface IUpdateWorkstationRequest {

                    /** UpdateWorkstationRequest workstation */
                    workstation?: (google.cloud.workstations.v1.IWorkstation|null);

                    /** UpdateWorkstationRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateWorkstationRequest validateOnly */
                    validateOnly?: (boolean|null);

                    /** UpdateWorkstationRequest allowMissing */
                    allowMissing?: (boolean|null);
                }

                /** Represents an UpdateWorkstationRequest. */
                class UpdateWorkstationRequest implements IUpdateWorkstationRequest {

                    /**
                     * Constructs a new UpdateWorkstationRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.workstations.v1.IUpdateWorkstationRequest);

                    /** UpdateWorkstationRequest workstation. */
                    public workstation?: (google.cloud.workstations.v1.IWorkstation|null);

                    /** UpdateWorkstationRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateWorkstationRequest validateOnly. */
                    public validateOnly: boolean;

                    /** UpdateWorkstationRequest allowMissing. */
                    public allowMissing: boolean;

                    /**
                     * Creates a new UpdateWorkstationRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateWorkstationRequest instance
                     */
                    public static create(properties?: google.cloud.workstations.v1.IUpdateWorkstationRequest): google.cloud.workstations.v1.UpdateWorkstationRequest;

                    /**
                     * Encodes the specified UpdateWorkstationRequest message. Does not implicitly {@link google.cloud.workstations.v1.UpdateWorkstationRequest.verify|verify} messages.
                     * @param message UpdateWorkstationRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.workstations.v1.IUpdateWorkstationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateWorkstationRequest message, length delimited. Does not implicitly {@link google.cloud.workstations.v1.UpdateWorkstationRequest.verify|verify} messages.
                     * @param message UpdateWorkstationRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.workstations.v1.IUpdateWorkstationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateWorkstationRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateWorkstationRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.workstations.v1.UpdateWorkstationRequest;

                    /**
                     * Decodes an UpdateWorkstationRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateWorkstationRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.workstations.v1.UpdateWorkstationRequest;

                    /**
                     * Verifies an UpdateWorkstationRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateWorkstationRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateWorkstationRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.workstations.v1.UpdateWorkstationRequest;

                    /**
                     * Creates a plain object from an UpdateWorkstationRequest message. Also converts values to other types if specified.
                     * @param message UpdateWorkstationRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.workstations.v1.UpdateWorkstationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateWorkstationRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdateWorkstationRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeleteWorkstationRequest. */
                interface IDeleteWorkstationRequest {

                    /** DeleteWorkstationRequest name */
                    name?: (string|null);

                    /** DeleteWorkstationRequest validateOnly */
                    validateOnly?: (boolean|null);

                    /** DeleteWorkstationRequest etag */
                    etag?: (string|null);
                }

                /** Represents a DeleteWorkstationRequest. */
                class DeleteWorkstationRequest implements IDeleteWorkstationRequest {

                    /**
                     * Constructs a new DeleteWorkstationRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.workstations.v1.IDeleteWorkstationRequest);

                    /** DeleteWorkstationRequest name. */
                    public name: string;

                    /** DeleteWorkstationRequest validateOnly. */
                    public validateOnly: boolean;

                    /** DeleteWorkstationRequest etag. */
                    public etag: string;

                    /**
                     * Creates a new DeleteWorkstationRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteWorkstationRequest instance
                     */
                    public static create(properties?: google.cloud.workstations.v1.IDeleteWorkstationRequest): google.cloud.workstations.v1.DeleteWorkstationRequest;

                    /**
                     * Encodes the specified DeleteWorkstationRequest message. Does not implicitly {@link google.cloud.workstations.v1.DeleteWorkstationRequest.verify|verify} messages.
                     * @param message DeleteWorkstationRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.workstations.v1.IDeleteWorkstationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteWorkstationRequest message, length delimited. Does not implicitly {@link google.cloud.workstations.v1.DeleteWorkstationRequest.verify|verify} messages.
                     * @param message DeleteWorkstationRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.workstations.v1.IDeleteWorkstationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteWorkstationRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteWorkstationRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.workstations.v1.DeleteWorkstationRequest;

                    /**
                     * Decodes a DeleteWorkstationRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteWorkstationRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.workstations.v1.DeleteWorkstationRequest;

                    /**
                     * Verifies a DeleteWorkstationRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteWorkstationRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteWorkstationRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.workstations.v1.DeleteWorkstationRequest;

                    /**
                     * Creates a plain object from a DeleteWorkstationRequest message. Also converts values to other types if specified.
                     * @param message DeleteWorkstationRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.workstations.v1.DeleteWorkstationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteWorkstationRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeleteWorkstationRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a StartWorkstationRequest. */
                interface IStartWorkstationRequest {

                    /** StartWorkstationRequest name */
                    name?: (string|null);

                    /** StartWorkstationRequest validateOnly */
                    validateOnly?: (boolean|null);

                    /** StartWorkstationRequest etag */
                    etag?: (string|null);
                }

                /** Represents a StartWorkstationRequest. */
                class StartWorkstationRequest implements IStartWorkstationRequest {

                    /**
                     * Constructs a new StartWorkstationRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.workstations.v1.IStartWorkstationRequest);

                    /** StartWorkstationRequest name. */
                    public name: string;

                    /** StartWorkstationRequest validateOnly. */
                    public validateOnly: boolean;

                    /** StartWorkstationRequest etag. */
                    public etag: string;

                    /**
                     * Creates a new StartWorkstationRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns StartWorkstationRequest instance
                     */
                    public static create(properties?: google.cloud.workstations.v1.IStartWorkstationRequest): google.cloud.workstations.v1.StartWorkstationRequest;

                    /**
                     * Encodes the specified StartWorkstationRequest message. Does not implicitly {@link google.cloud.workstations.v1.StartWorkstationRequest.verify|verify} messages.
                     * @param message StartWorkstationRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.workstations.v1.IStartWorkstationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified StartWorkstationRequest message, length delimited. Does not implicitly {@link google.cloud.workstations.v1.StartWorkstationRequest.verify|verify} messages.
                     * @param message StartWorkstationRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.workstations.v1.IStartWorkstationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a StartWorkstationRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns StartWorkstationRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.workstations.v1.StartWorkstationRequest;

                    /**
                     * Decodes a StartWorkstationRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns StartWorkstationRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.workstations.v1.StartWorkstationRequest;

                    /**
                     * Verifies a StartWorkstationRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a StartWorkstationRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns StartWorkstationRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.workstations.v1.StartWorkstationRequest;

                    /**
                     * Creates a plain object from a StartWorkstationRequest message. Also converts values to other types if specified.
                     * @param message StartWorkstationRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.workstations.v1.StartWorkstationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this StartWorkstationRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for StartWorkstationRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a StopWorkstationRequest. */
                interface IStopWorkstationRequest {

                    /** StopWorkstationRequest name */
                    name?: (string|null);

                    /** StopWorkstationRequest validateOnly */
                    validateOnly?: (boolean|null);

                    /** StopWorkstationRequest etag */
                    etag?: (string|null);
                }

                /** Represents a StopWorkstationRequest. */
                class StopWorkstationRequest implements IStopWorkstationRequest {

                    /**
                     * Constructs a new StopWorkstationRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.workstations.v1.IStopWorkstationRequest);

                    /** StopWorkstationRequest name. */
                    public name: string;

                    /** StopWorkstationRequest validateOnly. */
                    public validateOnly: boolean;

                    /** StopWorkstationRequest etag. */
                    public etag: string;

                    /**
                     * Creates a new StopWorkstationRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns StopWorkstationRequest instance
                     */
                    public static create(properties?: google.cloud.workstations.v1.IStopWorkstationRequest): google.cloud.workstations.v1.StopWorkstationRequest;

                    /**
                     * Encodes the specified StopWorkstationRequest message. Does not implicitly {@link google.cloud.workstations.v1.StopWorkstationRequest.verify|verify} messages.
                     * @param message StopWorkstationRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.workstations.v1.IStopWorkstationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified StopWorkstationRequest message, length delimited. Does not implicitly {@link google.cloud.workstations.v1.StopWorkstationRequest.verify|verify} messages.
                     * @param message StopWorkstationRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.workstations.v1.IStopWorkstationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a StopWorkstationRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns StopWorkstationRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.workstations.v1.StopWorkstationRequest;

                    /**
                     * Decodes a StopWorkstationRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns StopWorkstationRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.workstations.v1.StopWorkstationRequest;

                    /**
                     * Verifies a StopWorkstationRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a StopWorkstationRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns StopWorkstationRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.workstations.v1.StopWorkstationRequest;

                    /**
                     * Creates a plain object from a StopWorkstationRequest message. Also converts values to other types if specified.
                     * @param message StopWorkstationRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.workstations.v1.StopWorkstationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this StopWorkstationRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for StopWorkstationRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GenerateAccessTokenRequest. */
                interface IGenerateAccessTokenRequest {

                    /** GenerateAccessTokenRequest expireTime */
                    expireTime?: (google.protobuf.ITimestamp|null);

                    /** GenerateAccessTokenRequest ttl */
                    ttl?: (google.protobuf.IDuration|null);

                    /** GenerateAccessTokenRequest workstation */
                    workstation?: (string|null);
                }

                /** Represents a GenerateAccessTokenRequest. */
                class GenerateAccessTokenRequest implements IGenerateAccessTokenRequest {

                    /**
                     * Constructs a new GenerateAccessTokenRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.workstations.v1.IGenerateAccessTokenRequest);

                    /** GenerateAccessTokenRequest expireTime. */
                    public expireTime?: (google.protobuf.ITimestamp|null);

                    /** GenerateAccessTokenRequest ttl. */
                    public ttl?: (google.protobuf.IDuration|null);

                    /** GenerateAccessTokenRequest workstation. */
                    public workstation: string;

                    /** GenerateAccessTokenRequest expiration. */
                    public expiration?: ("expireTime"|"ttl");

                    /**
                     * Creates a new GenerateAccessTokenRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GenerateAccessTokenRequest instance
                     */
                    public static create(properties?: google.cloud.workstations.v1.IGenerateAccessTokenRequest): google.cloud.workstations.v1.GenerateAccessTokenRequest;

                    /**
                     * Encodes the specified GenerateAccessTokenRequest message. Does not implicitly {@link google.cloud.workstations.v1.GenerateAccessTokenRequest.verify|verify} messages.
                     * @param message GenerateAccessTokenRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.workstations.v1.IGenerateAccessTokenRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GenerateAccessTokenRequest message, length delimited. Does not implicitly {@link google.cloud.workstations.v1.GenerateAccessTokenRequest.verify|verify} messages.
                     * @param message GenerateAccessTokenRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.workstations.v1.IGenerateAccessTokenRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GenerateAccessTokenRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GenerateAccessTokenRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.workstations.v1.GenerateAccessTokenRequest;

                    /**
                     * Decodes a GenerateAccessTokenRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GenerateAccessTokenRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.workstations.v1.GenerateAccessTokenRequest;

                    /**
                     * Verifies a GenerateAccessTokenRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GenerateAccessTokenRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GenerateAccessTokenRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.workstations.v1.GenerateAccessTokenRequest;

                    /**
                     * Creates a plain object from a GenerateAccessTokenRequest message. Also converts values to other types if specified.
                     * @param message GenerateAccessTokenRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.workstations.v1.GenerateAccessTokenRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GenerateAccessTokenRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GenerateAccessTokenRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GenerateAccessTokenResponse. */
                interface IGenerateAccessTokenResponse {

                    /** GenerateAccessTokenResponse accessToken */
                    accessToken?: (string|null);

                    /** GenerateAccessTokenResponse expireTime */
                    expireTime?: (google.protobuf.ITimestamp|null);
                }

                /** Represents a GenerateAccessTokenResponse. */
                class GenerateAccessTokenResponse implements IGenerateAccessTokenResponse {

                    /**
                     * Constructs a new GenerateAccessTokenResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.workstations.v1.IGenerateAccessTokenResponse);

                    /** GenerateAccessTokenResponse accessToken. */
                    public accessToken: string;

                    /** GenerateAccessTokenResponse expireTime. */
                    public expireTime?: (google.protobuf.ITimestamp|null);

                    /**
                     * Creates a new GenerateAccessTokenResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GenerateAccessTokenResponse instance
                     */
                    public static create(properties?: google.cloud.workstations.v1.IGenerateAccessTokenResponse): google.cloud.workstations.v1.GenerateAccessTokenResponse;

                    /**
                     * Encodes the specified GenerateAccessTokenResponse message. Does not implicitly {@link google.cloud.workstations.v1.GenerateAccessTokenResponse.verify|verify} messages.
                     * @param message GenerateAccessTokenResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.workstations.v1.IGenerateAccessTokenResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GenerateAccessTokenResponse message, length delimited. Does not implicitly {@link google.cloud.workstations.v1.GenerateAccessTokenResponse.verify|verify} messages.
                     * @param message GenerateAccessTokenResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.workstations.v1.IGenerateAccessTokenResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GenerateAccessTokenResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GenerateAccessTokenResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.workstations.v1.GenerateAccessTokenResponse;

                    /**
                     * Decodes a GenerateAccessTokenResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GenerateAccessTokenResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.workstations.v1.GenerateAccessTokenResponse;

                    /**
                     * Verifies a GenerateAccessTokenResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GenerateAccessTokenResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GenerateAccessTokenResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.workstations.v1.GenerateAccessTokenResponse;

                    /**
                     * Creates a plain object from a GenerateAccessTokenResponse message. Also converts values to other types if specified.
                     * @param message GenerateAccessTokenResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.workstations.v1.GenerateAccessTokenResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GenerateAccessTokenResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GenerateAccessTokenResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

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
                    constructor(properties?: google.cloud.workstations.v1.IOperationMetadata);

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
                    public static create(properties?: google.cloud.workstations.v1.IOperationMetadata): google.cloud.workstations.v1.OperationMetadata;

                    /**
                     * Encodes the specified OperationMetadata message. Does not implicitly {@link google.cloud.workstations.v1.OperationMetadata.verify|verify} messages.
                     * @param message OperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.workstations.v1.IOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified OperationMetadata message, length delimited. Does not implicitly {@link google.cloud.workstations.v1.OperationMetadata.verify|verify} messages.
                     * @param message OperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.workstations.v1.IOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an OperationMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns OperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.workstations.v1.OperationMetadata;

                    /**
                     * Decodes an OperationMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns OperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.workstations.v1.OperationMetadata;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.workstations.v1.OperationMetadata;

                    /**
                     * Creates a plain object from an OperationMetadata message. Also converts values to other types if specified.
                     * @param message OperationMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.workstations.v1.OperationMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
            }

            /** Namespace v1beta. */
            namespace v1beta {

                /** Represents a Workstations */
                class Workstations extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new Workstations service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new Workstations service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Workstations;

                    /**
                     * Calls GetWorkstationCluster.
                     * @param request GetWorkstationClusterRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and WorkstationCluster
                     */
                    public getWorkstationCluster(request: google.cloud.workstations.v1beta.IGetWorkstationClusterRequest, callback: google.cloud.workstations.v1beta.Workstations.GetWorkstationClusterCallback): void;

                    /**
                     * Calls GetWorkstationCluster.
                     * @param request GetWorkstationClusterRequest message or plain object
                     * @returns Promise
                     */
                    public getWorkstationCluster(request: google.cloud.workstations.v1beta.IGetWorkstationClusterRequest): Promise<google.cloud.workstations.v1beta.WorkstationCluster>;

                    /**
                     * Calls ListWorkstationClusters.
                     * @param request ListWorkstationClustersRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListWorkstationClustersResponse
                     */
                    public listWorkstationClusters(request: google.cloud.workstations.v1beta.IListWorkstationClustersRequest, callback: google.cloud.workstations.v1beta.Workstations.ListWorkstationClustersCallback): void;

                    /**
                     * Calls ListWorkstationClusters.
                     * @param request ListWorkstationClustersRequest message or plain object
                     * @returns Promise
                     */
                    public listWorkstationClusters(request: google.cloud.workstations.v1beta.IListWorkstationClustersRequest): Promise<google.cloud.workstations.v1beta.ListWorkstationClustersResponse>;

                    /**
                     * Calls CreateWorkstationCluster.
                     * @param request CreateWorkstationClusterRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createWorkstationCluster(request: google.cloud.workstations.v1beta.ICreateWorkstationClusterRequest, callback: google.cloud.workstations.v1beta.Workstations.CreateWorkstationClusterCallback): void;

                    /**
                     * Calls CreateWorkstationCluster.
                     * @param request CreateWorkstationClusterRequest message or plain object
                     * @returns Promise
                     */
                    public createWorkstationCluster(request: google.cloud.workstations.v1beta.ICreateWorkstationClusterRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls UpdateWorkstationCluster.
                     * @param request UpdateWorkstationClusterRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public updateWorkstationCluster(request: google.cloud.workstations.v1beta.IUpdateWorkstationClusterRequest, callback: google.cloud.workstations.v1beta.Workstations.UpdateWorkstationClusterCallback): void;

                    /**
                     * Calls UpdateWorkstationCluster.
                     * @param request UpdateWorkstationClusterRequest message or plain object
                     * @returns Promise
                     */
                    public updateWorkstationCluster(request: google.cloud.workstations.v1beta.IUpdateWorkstationClusterRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls DeleteWorkstationCluster.
                     * @param request DeleteWorkstationClusterRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deleteWorkstationCluster(request: google.cloud.workstations.v1beta.IDeleteWorkstationClusterRequest, callback: google.cloud.workstations.v1beta.Workstations.DeleteWorkstationClusterCallback): void;

                    /**
                     * Calls DeleteWorkstationCluster.
                     * @param request DeleteWorkstationClusterRequest message or plain object
                     * @returns Promise
                     */
                    public deleteWorkstationCluster(request: google.cloud.workstations.v1beta.IDeleteWorkstationClusterRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls GetWorkstationConfig.
                     * @param request GetWorkstationConfigRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and WorkstationConfig
                     */
                    public getWorkstationConfig(request: google.cloud.workstations.v1beta.IGetWorkstationConfigRequest, callback: google.cloud.workstations.v1beta.Workstations.GetWorkstationConfigCallback): void;

                    /**
                     * Calls GetWorkstationConfig.
                     * @param request GetWorkstationConfigRequest message or plain object
                     * @returns Promise
                     */
                    public getWorkstationConfig(request: google.cloud.workstations.v1beta.IGetWorkstationConfigRequest): Promise<google.cloud.workstations.v1beta.WorkstationConfig>;

                    /**
                     * Calls ListWorkstationConfigs.
                     * @param request ListWorkstationConfigsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListWorkstationConfigsResponse
                     */
                    public listWorkstationConfigs(request: google.cloud.workstations.v1beta.IListWorkstationConfigsRequest, callback: google.cloud.workstations.v1beta.Workstations.ListWorkstationConfigsCallback): void;

                    /**
                     * Calls ListWorkstationConfigs.
                     * @param request ListWorkstationConfigsRequest message or plain object
                     * @returns Promise
                     */
                    public listWorkstationConfigs(request: google.cloud.workstations.v1beta.IListWorkstationConfigsRequest): Promise<google.cloud.workstations.v1beta.ListWorkstationConfigsResponse>;

                    /**
                     * Calls ListUsableWorkstationConfigs.
                     * @param request ListUsableWorkstationConfigsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListUsableWorkstationConfigsResponse
                     */
                    public listUsableWorkstationConfigs(request: google.cloud.workstations.v1beta.IListUsableWorkstationConfigsRequest, callback: google.cloud.workstations.v1beta.Workstations.ListUsableWorkstationConfigsCallback): void;

                    /**
                     * Calls ListUsableWorkstationConfigs.
                     * @param request ListUsableWorkstationConfigsRequest message or plain object
                     * @returns Promise
                     */
                    public listUsableWorkstationConfigs(request: google.cloud.workstations.v1beta.IListUsableWorkstationConfigsRequest): Promise<google.cloud.workstations.v1beta.ListUsableWorkstationConfigsResponse>;

                    /**
                     * Calls CreateWorkstationConfig.
                     * @param request CreateWorkstationConfigRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createWorkstationConfig(request: google.cloud.workstations.v1beta.ICreateWorkstationConfigRequest, callback: google.cloud.workstations.v1beta.Workstations.CreateWorkstationConfigCallback): void;

                    /**
                     * Calls CreateWorkstationConfig.
                     * @param request CreateWorkstationConfigRequest message or plain object
                     * @returns Promise
                     */
                    public createWorkstationConfig(request: google.cloud.workstations.v1beta.ICreateWorkstationConfigRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls UpdateWorkstationConfig.
                     * @param request UpdateWorkstationConfigRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public updateWorkstationConfig(request: google.cloud.workstations.v1beta.IUpdateWorkstationConfigRequest, callback: google.cloud.workstations.v1beta.Workstations.UpdateWorkstationConfigCallback): void;

                    /**
                     * Calls UpdateWorkstationConfig.
                     * @param request UpdateWorkstationConfigRequest message or plain object
                     * @returns Promise
                     */
                    public updateWorkstationConfig(request: google.cloud.workstations.v1beta.IUpdateWorkstationConfigRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls DeleteWorkstationConfig.
                     * @param request DeleteWorkstationConfigRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deleteWorkstationConfig(request: google.cloud.workstations.v1beta.IDeleteWorkstationConfigRequest, callback: google.cloud.workstations.v1beta.Workstations.DeleteWorkstationConfigCallback): void;

                    /**
                     * Calls DeleteWorkstationConfig.
                     * @param request DeleteWorkstationConfigRequest message or plain object
                     * @returns Promise
                     */
                    public deleteWorkstationConfig(request: google.cloud.workstations.v1beta.IDeleteWorkstationConfigRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls GetWorkstation.
                     * @param request GetWorkstationRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Workstation
                     */
                    public getWorkstation(request: google.cloud.workstations.v1beta.IGetWorkstationRequest, callback: google.cloud.workstations.v1beta.Workstations.GetWorkstationCallback): void;

                    /**
                     * Calls GetWorkstation.
                     * @param request GetWorkstationRequest message or plain object
                     * @returns Promise
                     */
                    public getWorkstation(request: google.cloud.workstations.v1beta.IGetWorkstationRequest): Promise<google.cloud.workstations.v1beta.Workstation>;

                    /**
                     * Calls ListWorkstations.
                     * @param request ListWorkstationsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListWorkstationsResponse
                     */
                    public listWorkstations(request: google.cloud.workstations.v1beta.IListWorkstationsRequest, callback: google.cloud.workstations.v1beta.Workstations.ListWorkstationsCallback): void;

                    /**
                     * Calls ListWorkstations.
                     * @param request ListWorkstationsRequest message or plain object
                     * @returns Promise
                     */
                    public listWorkstations(request: google.cloud.workstations.v1beta.IListWorkstationsRequest): Promise<google.cloud.workstations.v1beta.ListWorkstationsResponse>;

                    /**
                     * Calls ListUsableWorkstations.
                     * @param request ListUsableWorkstationsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListUsableWorkstationsResponse
                     */
                    public listUsableWorkstations(request: google.cloud.workstations.v1beta.IListUsableWorkstationsRequest, callback: google.cloud.workstations.v1beta.Workstations.ListUsableWorkstationsCallback): void;

                    /**
                     * Calls ListUsableWorkstations.
                     * @param request ListUsableWorkstationsRequest message or plain object
                     * @returns Promise
                     */
                    public listUsableWorkstations(request: google.cloud.workstations.v1beta.IListUsableWorkstationsRequest): Promise<google.cloud.workstations.v1beta.ListUsableWorkstationsResponse>;

                    /**
                     * Calls CreateWorkstation.
                     * @param request CreateWorkstationRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createWorkstation(request: google.cloud.workstations.v1beta.ICreateWorkstationRequest, callback: google.cloud.workstations.v1beta.Workstations.CreateWorkstationCallback): void;

                    /**
                     * Calls CreateWorkstation.
                     * @param request CreateWorkstationRequest message or plain object
                     * @returns Promise
                     */
                    public createWorkstation(request: google.cloud.workstations.v1beta.ICreateWorkstationRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls UpdateWorkstation.
                     * @param request UpdateWorkstationRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public updateWorkstation(request: google.cloud.workstations.v1beta.IUpdateWorkstationRequest, callback: google.cloud.workstations.v1beta.Workstations.UpdateWorkstationCallback): void;

                    /**
                     * Calls UpdateWorkstation.
                     * @param request UpdateWorkstationRequest message or plain object
                     * @returns Promise
                     */
                    public updateWorkstation(request: google.cloud.workstations.v1beta.IUpdateWorkstationRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls DeleteWorkstation.
                     * @param request DeleteWorkstationRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deleteWorkstation(request: google.cloud.workstations.v1beta.IDeleteWorkstationRequest, callback: google.cloud.workstations.v1beta.Workstations.DeleteWorkstationCallback): void;

                    /**
                     * Calls DeleteWorkstation.
                     * @param request DeleteWorkstationRequest message or plain object
                     * @returns Promise
                     */
                    public deleteWorkstation(request: google.cloud.workstations.v1beta.IDeleteWorkstationRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls StartWorkstation.
                     * @param request StartWorkstationRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public startWorkstation(request: google.cloud.workstations.v1beta.IStartWorkstationRequest, callback: google.cloud.workstations.v1beta.Workstations.StartWorkstationCallback): void;

                    /**
                     * Calls StartWorkstation.
                     * @param request StartWorkstationRequest message or plain object
                     * @returns Promise
                     */
                    public startWorkstation(request: google.cloud.workstations.v1beta.IStartWorkstationRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls StopWorkstation.
                     * @param request StopWorkstationRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public stopWorkstation(request: google.cloud.workstations.v1beta.IStopWorkstationRequest, callback: google.cloud.workstations.v1beta.Workstations.StopWorkstationCallback): void;

                    /**
                     * Calls StopWorkstation.
                     * @param request StopWorkstationRequest message or plain object
                     * @returns Promise
                     */
                    public stopWorkstation(request: google.cloud.workstations.v1beta.IStopWorkstationRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls GenerateAccessToken.
                     * @param request GenerateAccessTokenRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and GenerateAccessTokenResponse
                     */
                    public generateAccessToken(request: google.cloud.workstations.v1beta.IGenerateAccessTokenRequest, callback: google.cloud.workstations.v1beta.Workstations.GenerateAccessTokenCallback): void;

                    /**
                     * Calls GenerateAccessToken.
                     * @param request GenerateAccessTokenRequest message or plain object
                     * @returns Promise
                     */
                    public generateAccessToken(request: google.cloud.workstations.v1beta.IGenerateAccessTokenRequest): Promise<google.cloud.workstations.v1beta.GenerateAccessTokenResponse>;
                }

                namespace Workstations {

                    /**
                     * Callback as used by {@link google.cloud.workstations.v1beta.Workstations|getWorkstationCluster}.
                     * @param error Error, if any
                     * @param [response] WorkstationCluster
                     */
                    type GetWorkstationClusterCallback = (error: (Error|null), response?: google.cloud.workstations.v1beta.WorkstationCluster) => void;

                    /**
                     * Callback as used by {@link google.cloud.workstations.v1beta.Workstations|listWorkstationClusters}.
                     * @param error Error, if any
                     * @param [response] ListWorkstationClustersResponse
                     */
                    type ListWorkstationClustersCallback = (error: (Error|null), response?: google.cloud.workstations.v1beta.ListWorkstationClustersResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.workstations.v1beta.Workstations|createWorkstationCluster}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateWorkstationClusterCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.workstations.v1beta.Workstations|updateWorkstationCluster}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type UpdateWorkstationClusterCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.workstations.v1beta.Workstations|deleteWorkstationCluster}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeleteWorkstationClusterCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.workstations.v1beta.Workstations|getWorkstationConfig}.
                     * @param error Error, if any
                     * @param [response] WorkstationConfig
                     */
                    type GetWorkstationConfigCallback = (error: (Error|null), response?: google.cloud.workstations.v1beta.WorkstationConfig) => void;

                    /**
                     * Callback as used by {@link google.cloud.workstations.v1beta.Workstations|listWorkstationConfigs}.
                     * @param error Error, if any
                     * @param [response] ListWorkstationConfigsResponse
                     */
                    type ListWorkstationConfigsCallback = (error: (Error|null), response?: google.cloud.workstations.v1beta.ListWorkstationConfigsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.workstations.v1beta.Workstations|listUsableWorkstationConfigs}.
                     * @param error Error, if any
                     * @param [response] ListUsableWorkstationConfigsResponse
                     */
                    type ListUsableWorkstationConfigsCallback = (error: (Error|null), response?: google.cloud.workstations.v1beta.ListUsableWorkstationConfigsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.workstations.v1beta.Workstations|createWorkstationConfig}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateWorkstationConfigCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.workstations.v1beta.Workstations|updateWorkstationConfig}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type UpdateWorkstationConfigCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.workstations.v1beta.Workstations|deleteWorkstationConfig}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeleteWorkstationConfigCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.workstations.v1beta.Workstations|getWorkstation}.
                     * @param error Error, if any
                     * @param [response] Workstation
                     */
                    type GetWorkstationCallback = (error: (Error|null), response?: google.cloud.workstations.v1beta.Workstation) => void;

                    /**
                     * Callback as used by {@link google.cloud.workstations.v1beta.Workstations|listWorkstations}.
                     * @param error Error, if any
                     * @param [response] ListWorkstationsResponse
                     */
                    type ListWorkstationsCallback = (error: (Error|null), response?: google.cloud.workstations.v1beta.ListWorkstationsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.workstations.v1beta.Workstations|listUsableWorkstations}.
                     * @param error Error, if any
                     * @param [response] ListUsableWorkstationsResponse
                     */
                    type ListUsableWorkstationsCallback = (error: (Error|null), response?: google.cloud.workstations.v1beta.ListUsableWorkstationsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.workstations.v1beta.Workstations|createWorkstation}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateWorkstationCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.workstations.v1beta.Workstations|updateWorkstation}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type UpdateWorkstationCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.workstations.v1beta.Workstations|deleteWorkstation}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeleteWorkstationCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.workstations.v1beta.Workstations|startWorkstation}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type StartWorkstationCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.workstations.v1beta.Workstations|stopWorkstation}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type StopWorkstationCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.workstations.v1beta.Workstations|generateAccessToken}.
                     * @param error Error, if any
                     * @param [response] GenerateAccessTokenResponse
                     */
                    type GenerateAccessTokenCallback = (error: (Error|null), response?: google.cloud.workstations.v1beta.GenerateAccessTokenResponse) => void;
                }

                /** Properties of a WorkstationCluster. */
                interface IWorkstationCluster {

                    /** WorkstationCluster name */
                    name?: (string|null);

                    /** WorkstationCluster displayName */
                    displayName?: (string|null);

                    /** WorkstationCluster uid */
                    uid?: (string|null);

                    /** WorkstationCluster reconciling */
                    reconciling?: (boolean|null);

                    /** WorkstationCluster annotations */
                    annotations?: ({ [k: string]: string }|null);

                    /** WorkstationCluster labels */
                    labels?: ({ [k: string]: string }|null);

                    /** WorkstationCluster createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** WorkstationCluster updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** WorkstationCluster deleteTime */
                    deleteTime?: (google.protobuf.ITimestamp|null);

                    /** WorkstationCluster etag */
                    etag?: (string|null);

                    /** WorkstationCluster network */
                    network?: (string|null);

                    /** WorkstationCluster subnetwork */
                    subnetwork?: (string|null);

                    /** WorkstationCluster controlPlaneIp */
                    controlPlaneIp?: (string|null);

                    /** WorkstationCluster privateClusterConfig */
                    privateClusterConfig?: (google.cloud.workstations.v1beta.WorkstationCluster.IPrivateClusterConfig|null);

                    /** WorkstationCluster degraded */
                    degraded?: (boolean|null);

                    /** WorkstationCluster conditions */
                    conditions?: (google.rpc.IStatus[]|null);
                }

                /** Represents a WorkstationCluster. */
                class WorkstationCluster implements IWorkstationCluster {

                    /**
                     * Constructs a new WorkstationCluster.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.workstations.v1beta.IWorkstationCluster);

                    /** WorkstationCluster name. */
                    public name: string;

                    /** WorkstationCluster displayName. */
                    public displayName: string;

                    /** WorkstationCluster uid. */
                    public uid: string;

                    /** WorkstationCluster reconciling. */
                    public reconciling: boolean;

                    /** WorkstationCluster annotations. */
                    public annotations: { [k: string]: string };

                    /** WorkstationCluster labels. */
                    public labels: { [k: string]: string };

                    /** WorkstationCluster createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** WorkstationCluster updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** WorkstationCluster deleteTime. */
                    public deleteTime?: (google.protobuf.ITimestamp|null);

                    /** WorkstationCluster etag. */
                    public etag: string;

                    /** WorkstationCluster network. */
                    public network: string;

                    /** WorkstationCluster subnetwork. */
                    public subnetwork: string;

                    /** WorkstationCluster controlPlaneIp. */
                    public controlPlaneIp: string;

                    /** WorkstationCluster privateClusterConfig. */
                    public privateClusterConfig?: (google.cloud.workstations.v1beta.WorkstationCluster.IPrivateClusterConfig|null);

                    /** WorkstationCluster degraded. */
                    public degraded: boolean;

                    /** WorkstationCluster conditions. */
                    public conditions: google.rpc.IStatus[];

                    /**
                     * Creates a new WorkstationCluster instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns WorkstationCluster instance
                     */
                    public static create(properties?: google.cloud.workstations.v1beta.IWorkstationCluster): google.cloud.workstations.v1beta.WorkstationCluster;

                    /**
                     * Encodes the specified WorkstationCluster message. Does not implicitly {@link google.cloud.workstations.v1beta.WorkstationCluster.verify|verify} messages.
                     * @param message WorkstationCluster message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.workstations.v1beta.IWorkstationCluster, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified WorkstationCluster message, length delimited. Does not implicitly {@link google.cloud.workstations.v1beta.WorkstationCluster.verify|verify} messages.
                     * @param message WorkstationCluster message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.workstations.v1beta.IWorkstationCluster, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a WorkstationCluster message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns WorkstationCluster
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.workstations.v1beta.WorkstationCluster;

                    /**
                     * Decodes a WorkstationCluster message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns WorkstationCluster
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.workstations.v1beta.WorkstationCluster;

                    /**
                     * Verifies a WorkstationCluster message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a WorkstationCluster message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns WorkstationCluster
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.workstations.v1beta.WorkstationCluster;

                    /**
                     * Creates a plain object from a WorkstationCluster message. Also converts values to other types if specified.
                     * @param message WorkstationCluster
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.workstations.v1beta.WorkstationCluster, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this WorkstationCluster to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for WorkstationCluster
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace WorkstationCluster {

                    /** Properties of a PrivateClusterConfig. */
                    interface IPrivateClusterConfig {

                        /** PrivateClusterConfig enablePrivateEndpoint */
                        enablePrivateEndpoint?: (boolean|null);

                        /** PrivateClusterConfig clusterHostname */
                        clusterHostname?: (string|null);

                        /** PrivateClusterConfig serviceAttachmentUri */
                        serviceAttachmentUri?: (string|null);

                        /** PrivateClusterConfig allowedProjects */
                        allowedProjects?: (string[]|null);
                    }

                    /** Represents a PrivateClusterConfig. */
                    class PrivateClusterConfig implements IPrivateClusterConfig {

                        /**
                         * Constructs a new PrivateClusterConfig.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.workstations.v1beta.WorkstationCluster.IPrivateClusterConfig);

                        /** PrivateClusterConfig enablePrivateEndpoint. */
                        public enablePrivateEndpoint: boolean;

                        /** PrivateClusterConfig clusterHostname. */
                        public clusterHostname: string;

                        /** PrivateClusterConfig serviceAttachmentUri. */
                        public serviceAttachmentUri: string;

                        /** PrivateClusterConfig allowedProjects. */
                        public allowedProjects: string[];

                        /**
                         * Creates a new PrivateClusterConfig instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns PrivateClusterConfig instance
                         */
                        public static create(properties?: google.cloud.workstations.v1beta.WorkstationCluster.IPrivateClusterConfig): google.cloud.workstations.v1beta.WorkstationCluster.PrivateClusterConfig;

                        /**
                         * Encodes the specified PrivateClusterConfig message. Does not implicitly {@link google.cloud.workstations.v1beta.WorkstationCluster.PrivateClusterConfig.verify|verify} messages.
                         * @param message PrivateClusterConfig message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.workstations.v1beta.WorkstationCluster.IPrivateClusterConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified PrivateClusterConfig message, length delimited. Does not implicitly {@link google.cloud.workstations.v1beta.WorkstationCluster.PrivateClusterConfig.verify|verify} messages.
                         * @param message PrivateClusterConfig message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.workstations.v1beta.WorkstationCluster.IPrivateClusterConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a PrivateClusterConfig message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns PrivateClusterConfig
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.workstations.v1beta.WorkstationCluster.PrivateClusterConfig;

                        /**
                         * Decodes a PrivateClusterConfig message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns PrivateClusterConfig
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.workstations.v1beta.WorkstationCluster.PrivateClusterConfig;

                        /**
                         * Verifies a PrivateClusterConfig message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a PrivateClusterConfig message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns PrivateClusterConfig
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.workstations.v1beta.WorkstationCluster.PrivateClusterConfig;

                        /**
                         * Creates a plain object from a PrivateClusterConfig message. Also converts values to other types if specified.
                         * @param message PrivateClusterConfig
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.workstations.v1beta.WorkstationCluster.PrivateClusterConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this PrivateClusterConfig to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for PrivateClusterConfig
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }
                }

                /** Properties of a WorkstationConfig. */
                interface IWorkstationConfig {

                    /** WorkstationConfig name */
                    name?: (string|null);

                    /** WorkstationConfig displayName */
                    displayName?: (string|null);

                    /** WorkstationConfig uid */
                    uid?: (string|null);

                    /** WorkstationConfig reconciling */
                    reconciling?: (boolean|null);

                    /** WorkstationConfig annotations */
                    annotations?: ({ [k: string]: string }|null);

                    /** WorkstationConfig labels */
                    labels?: ({ [k: string]: string }|null);

                    /** WorkstationConfig createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** WorkstationConfig updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** WorkstationConfig deleteTime */
                    deleteTime?: (google.protobuf.ITimestamp|null);

                    /** WorkstationConfig etag */
                    etag?: (string|null);

                    /** WorkstationConfig idleTimeout */
                    idleTimeout?: (google.protobuf.IDuration|null);

                    /** WorkstationConfig runningTimeout */
                    runningTimeout?: (google.protobuf.IDuration|null);

                    /** WorkstationConfig host */
                    host?: (google.cloud.workstations.v1beta.WorkstationConfig.IHost|null);

                    /** WorkstationConfig persistentDirectories */
                    persistentDirectories?: (google.cloud.workstations.v1beta.WorkstationConfig.IPersistentDirectory[]|null);

                    /** WorkstationConfig ephemeralDirectories */
                    ephemeralDirectories?: (google.cloud.workstations.v1beta.WorkstationConfig.IEphemeralDirectory[]|null);

                    /** WorkstationConfig container */
                    container?: (google.cloud.workstations.v1beta.WorkstationConfig.IContainer|null);

                    /** WorkstationConfig encryptionKey */
                    encryptionKey?: (google.cloud.workstations.v1beta.WorkstationConfig.ICustomerEncryptionKey|null);

                    /** WorkstationConfig readinessChecks */
                    readinessChecks?: (google.cloud.workstations.v1beta.WorkstationConfig.IReadinessCheck[]|null);

                    /** WorkstationConfig replicaZones */
                    replicaZones?: (string[]|null);

                    /** WorkstationConfig degraded */
                    degraded?: (boolean|null);

                    /** WorkstationConfig conditions */
                    conditions?: (google.rpc.IStatus[]|null);

                    /** WorkstationConfig enableAuditAgent */
                    enableAuditAgent?: (boolean|null);
                }

                /** Represents a WorkstationConfig. */
                class WorkstationConfig implements IWorkstationConfig {

                    /**
                     * Constructs a new WorkstationConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.workstations.v1beta.IWorkstationConfig);

                    /** WorkstationConfig name. */
                    public name: string;

                    /** WorkstationConfig displayName. */
                    public displayName: string;

                    /** WorkstationConfig uid. */
                    public uid: string;

                    /** WorkstationConfig reconciling. */
                    public reconciling: boolean;

                    /** WorkstationConfig annotations. */
                    public annotations: { [k: string]: string };

                    /** WorkstationConfig labels. */
                    public labels: { [k: string]: string };

                    /** WorkstationConfig createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** WorkstationConfig updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** WorkstationConfig deleteTime. */
                    public deleteTime?: (google.protobuf.ITimestamp|null);

                    /** WorkstationConfig etag. */
                    public etag: string;

                    /** WorkstationConfig idleTimeout. */
                    public idleTimeout?: (google.protobuf.IDuration|null);

                    /** WorkstationConfig runningTimeout. */
                    public runningTimeout?: (google.protobuf.IDuration|null);

                    /** WorkstationConfig host. */
                    public host?: (google.cloud.workstations.v1beta.WorkstationConfig.IHost|null);

                    /** WorkstationConfig persistentDirectories. */
                    public persistentDirectories: google.cloud.workstations.v1beta.WorkstationConfig.IPersistentDirectory[];

                    /** WorkstationConfig ephemeralDirectories. */
                    public ephemeralDirectories: google.cloud.workstations.v1beta.WorkstationConfig.IEphemeralDirectory[];

                    /** WorkstationConfig container. */
                    public container?: (google.cloud.workstations.v1beta.WorkstationConfig.IContainer|null);

                    /** WorkstationConfig encryptionKey. */
                    public encryptionKey?: (google.cloud.workstations.v1beta.WorkstationConfig.ICustomerEncryptionKey|null);

                    /** WorkstationConfig readinessChecks. */
                    public readinessChecks: google.cloud.workstations.v1beta.WorkstationConfig.IReadinessCheck[];

                    /** WorkstationConfig replicaZones. */
                    public replicaZones: string[];

                    /** WorkstationConfig degraded. */
                    public degraded: boolean;

                    /** WorkstationConfig conditions. */
                    public conditions: google.rpc.IStatus[];

                    /** WorkstationConfig enableAuditAgent. */
                    public enableAuditAgent: boolean;

                    /**
                     * Creates a new WorkstationConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns WorkstationConfig instance
                     */
                    public static create(properties?: google.cloud.workstations.v1beta.IWorkstationConfig): google.cloud.workstations.v1beta.WorkstationConfig;

                    /**
                     * Encodes the specified WorkstationConfig message. Does not implicitly {@link google.cloud.workstations.v1beta.WorkstationConfig.verify|verify} messages.
                     * @param message WorkstationConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.workstations.v1beta.IWorkstationConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified WorkstationConfig message, length delimited. Does not implicitly {@link google.cloud.workstations.v1beta.WorkstationConfig.verify|verify} messages.
                     * @param message WorkstationConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.workstations.v1beta.IWorkstationConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a WorkstationConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns WorkstationConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.workstations.v1beta.WorkstationConfig;

                    /**
                     * Decodes a WorkstationConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns WorkstationConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.workstations.v1beta.WorkstationConfig;

                    /**
                     * Verifies a WorkstationConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a WorkstationConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns WorkstationConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.workstations.v1beta.WorkstationConfig;

                    /**
                     * Creates a plain object from a WorkstationConfig message. Also converts values to other types if specified.
                     * @param message WorkstationConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.workstations.v1beta.WorkstationConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this WorkstationConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for WorkstationConfig
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace WorkstationConfig {

                    /** Properties of a Host. */
                    interface IHost {

                        /** Host gceInstance */
                        gceInstance?: (google.cloud.workstations.v1beta.WorkstationConfig.Host.IGceInstance|null);
                    }

                    /** Represents a Host. */
                    class Host implements IHost {

                        /**
                         * Constructs a new Host.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.workstations.v1beta.WorkstationConfig.IHost);

                        /** Host gceInstance. */
                        public gceInstance?: (google.cloud.workstations.v1beta.WorkstationConfig.Host.IGceInstance|null);

                        /** Host config. */
                        public config?: "gceInstance";

                        /**
                         * Creates a new Host instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Host instance
                         */
                        public static create(properties?: google.cloud.workstations.v1beta.WorkstationConfig.IHost): google.cloud.workstations.v1beta.WorkstationConfig.Host;

                        /**
                         * Encodes the specified Host message. Does not implicitly {@link google.cloud.workstations.v1beta.WorkstationConfig.Host.verify|verify} messages.
                         * @param message Host message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.workstations.v1beta.WorkstationConfig.IHost, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Host message, length delimited. Does not implicitly {@link google.cloud.workstations.v1beta.WorkstationConfig.Host.verify|verify} messages.
                         * @param message Host message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.workstations.v1beta.WorkstationConfig.IHost, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Host message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Host
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.workstations.v1beta.WorkstationConfig.Host;

                        /**
                         * Decodes a Host message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Host
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.workstations.v1beta.WorkstationConfig.Host;

                        /**
                         * Verifies a Host message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Host message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Host
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.workstations.v1beta.WorkstationConfig.Host;

                        /**
                         * Creates a plain object from a Host message. Also converts values to other types if specified.
                         * @param message Host
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.workstations.v1beta.WorkstationConfig.Host, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Host to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for Host
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace Host {

                        /** Properties of a GceInstance. */
                        interface IGceInstance {

                            /** GceInstance machineType */
                            machineType?: (string|null);

                            /** GceInstance serviceAccount */
                            serviceAccount?: (string|null);

                            /** GceInstance serviceAccountScopes */
                            serviceAccountScopes?: (string[]|null);

                            /** GceInstance tags */
                            tags?: (string[]|null);

                            /** GceInstance poolSize */
                            poolSize?: (number|null);

                            /** GceInstance pooledInstances */
                            pooledInstances?: (number|null);

                            /** GceInstance disablePublicIpAddresses */
                            disablePublicIpAddresses?: (boolean|null);

                            /** GceInstance enableNestedVirtualization */
                            enableNestedVirtualization?: (boolean|null);

                            /** GceInstance shieldedInstanceConfig */
                            shieldedInstanceConfig?: (google.cloud.workstations.v1beta.WorkstationConfig.Host.GceInstance.IGceShieldedInstanceConfig|null);

                            /** GceInstance confidentialInstanceConfig */
                            confidentialInstanceConfig?: (google.cloud.workstations.v1beta.WorkstationConfig.Host.GceInstance.IGceConfidentialInstanceConfig|null);

                            /** GceInstance bootDiskSizeGb */
                            bootDiskSizeGb?: (number|null);

                            /** GceInstance accelerators */
                            accelerators?: (google.cloud.workstations.v1beta.WorkstationConfig.Host.GceInstance.IAccelerator[]|null);
                        }

                        /** Represents a GceInstance. */
                        class GceInstance implements IGceInstance {

                            /**
                             * Constructs a new GceInstance.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.workstations.v1beta.WorkstationConfig.Host.IGceInstance);

                            /** GceInstance machineType. */
                            public machineType: string;

                            /** GceInstance serviceAccount. */
                            public serviceAccount: string;

                            /** GceInstance serviceAccountScopes. */
                            public serviceAccountScopes: string[];

                            /** GceInstance tags. */
                            public tags: string[];

                            /** GceInstance poolSize. */
                            public poolSize: number;

                            /** GceInstance pooledInstances. */
                            public pooledInstances: number;

                            /** GceInstance disablePublicIpAddresses. */
                            public disablePublicIpAddresses: boolean;

                            /** GceInstance enableNestedVirtualization. */
                            public enableNestedVirtualization: boolean;

                            /** GceInstance shieldedInstanceConfig. */
                            public shieldedInstanceConfig?: (google.cloud.workstations.v1beta.WorkstationConfig.Host.GceInstance.IGceShieldedInstanceConfig|null);

                            /** GceInstance confidentialInstanceConfig. */
                            public confidentialInstanceConfig?: (google.cloud.workstations.v1beta.WorkstationConfig.Host.GceInstance.IGceConfidentialInstanceConfig|null);

                            /** GceInstance bootDiskSizeGb. */
                            public bootDiskSizeGb: number;

                            /** GceInstance accelerators. */
                            public accelerators: google.cloud.workstations.v1beta.WorkstationConfig.Host.GceInstance.IAccelerator[];

                            /**
                             * Creates a new GceInstance instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns GceInstance instance
                             */
                            public static create(properties?: google.cloud.workstations.v1beta.WorkstationConfig.Host.IGceInstance): google.cloud.workstations.v1beta.WorkstationConfig.Host.GceInstance;

                            /**
                             * Encodes the specified GceInstance message. Does not implicitly {@link google.cloud.workstations.v1beta.WorkstationConfig.Host.GceInstance.verify|verify} messages.
                             * @param message GceInstance message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.workstations.v1beta.WorkstationConfig.Host.IGceInstance, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified GceInstance message, length delimited. Does not implicitly {@link google.cloud.workstations.v1beta.WorkstationConfig.Host.GceInstance.verify|verify} messages.
                             * @param message GceInstance message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.workstations.v1beta.WorkstationConfig.Host.IGceInstance, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a GceInstance message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns GceInstance
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.workstations.v1beta.WorkstationConfig.Host.GceInstance;

                            /**
                             * Decodes a GceInstance message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns GceInstance
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.workstations.v1beta.WorkstationConfig.Host.GceInstance;

                            /**
                             * Verifies a GceInstance message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a GceInstance message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns GceInstance
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.workstations.v1beta.WorkstationConfig.Host.GceInstance;

                            /**
                             * Creates a plain object from a GceInstance message. Also converts values to other types if specified.
                             * @param message GceInstance
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.workstations.v1beta.WorkstationConfig.Host.GceInstance, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this GceInstance to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for GceInstance
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        namespace GceInstance {

                            /** Properties of a GceShieldedInstanceConfig. */
                            interface IGceShieldedInstanceConfig {

                                /** GceShieldedInstanceConfig enableSecureBoot */
                                enableSecureBoot?: (boolean|null);

                                /** GceShieldedInstanceConfig enableVtpm */
                                enableVtpm?: (boolean|null);

                                /** GceShieldedInstanceConfig enableIntegrityMonitoring */
                                enableIntegrityMonitoring?: (boolean|null);
                            }

                            /** Represents a GceShieldedInstanceConfig. */
                            class GceShieldedInstanceConfig implements IGceShieldedInstanceConfig {

                                /**
                                 * Constructs a new GceShieldedInstanceConfig.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: google.cloud.workstations.v1beta.WorkstationConfig.Host.GceInstance.IGceShieldedInstanceConfig);

                                /** GceShieldedInstanceConfig enableSecureBoot. */
                                public enableSecureBoot: boolean;

                                /** GceShieldedInstanceConfig enableVtpm. */
                                public enableVtpm: boolean;

                                /** GceShieldedInstanceConfig enableIntegrityMonitoring. */
                                public enableIntegrityMonitoring: boolean;

                                /**
                                 * Creates a new GceShieldedInstanceConfig instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns GceShieldedInstanceConfig instance
                                 */
                                public static create(properties?: google.cloud.workstations.v1beta.WorkstationConfig.Host.GceInstance.IGceShieldedInstanceConfig): google.cloud.workstations.v1beta.WorkstationConfig.Host.GceInstance.GceShieldedInstanceConfig;

                                /**
                                 * Encodes the specified GceShieldedInstanceConfig message. Does not implicitly {@link google.cloud.workstations.v1beta.WorkstationConfig.Host.GceInstance.GceShieldedInstanceConfig.verify|verify} messages.
                                 * @param message GceShieldedInstanceConfig message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: google.cloud.workstations.v1beta.WorkstationConfig.Host.GceInstance.IGceShieldedInstanceConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Encodes the specified GceShieldedInstanceConfig message, length delimited. Does not implicitly {@link google.cloud.workstations.v1beta.WorkstationConfig.Host.GceInstance.GceShieldedInstanceConfig.verify|verify} messages.
                                 * @param message GceShieldedInstanceConfig message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: google.cloud.workstations.v1beta.WorkstationConfig.Host.GceInstance.IGceShieldedInstanceConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Decodes a GceShieldedInstanceConfig message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns GceShieldedInstanceConfig
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.workstations.v1beta.WorkstationConfig.Host.GceInstance.GceShieldedInstanceConfig;

                                /**
                                 * Decodes a GceShieldedInstanceConfig message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns GceShieldedInstanceConfig
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.workstations.v1beta.WorkstationConfig.Host.GceInstance.GceShieldedInstanceConfig;

                                /**
                                 * Verifies a GceShieldedInstanceConfig message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates a GceShieldedInstanceConfig message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns GceShieldedInstanceConfig
                                 */
                                public static fromObject(object: { [k: string]: any }): google.cloud.workstations.v1beta.WorkstationConfig.Host.GceInstance.GceShieldedInstanceConfig;

                                /**
                                 * Creates a plain object from a GceShieldedInstanceConfig message. Also converts values to other types if specified.
                                 * @param message GceShieldedInstanceConfig
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: google.cloud.workstations.v1beta.WorkstationConfig.Host.GceInstance.GceShieldedInstanceConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this GceShieldedInstanceConfig to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };

                                /**
                                 * Gets the default type url for GceShieldedInstanceConfig
                                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                                 * @returns The default type url
                                 */
                                public static getTypeUrl(typeUrlPrefix?: string): string;
                            }

                            /** Properties of a GceConfidentialInstanceConfig. */
                            interface IGceConfidentialInstanceConfig {

                                /** GceConfidentialInstanceConfig enableConfidentialCompute */
                                enableConfidentialCompute?: (boolean|null);
                            }

                            /** Represents a GceConfidentialInstanceConfig. */
                            class GceConfidentialInstanceConfig implements IGceConfidentialInstanceConfig {

                                /**
                                 * Constructs a new GceConfidentialInstanceConfig.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: google.cloud.workstations.v1beta.WorkstationConfig.Host.GceInstance.IGceConfidentialInstanceConfig);

                                /** GceConfidentialInstanceConfig enableConfidentialCompute. */
                                public enableConfidentialCompute: boolean;

                                /**
                                 * Creates a new GceConfidentialInstanceConfig instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns GceConfidentialInstanceConfig instance
                                 */
                                public static create(properties?: google.cloud.workstations.v1beta.WorkstationConfig.Host.GceInstance.IGceConfidentialInstanceConfig): google.cloud.workstations.v1beta.WorkstationConfig.Host.GceInstance.GceConfidentialInstanceConfig;

                                /**
                                 * Encodes the specified GceConfidentialInstanceConfig message. Does not implicitly {@link google.cloud.workstations.v1beta.WorkstationConfig.Host.GceInstance.GceConfidentialInstanceConfig.verify|verify} messages.
                                 * @param message GceConfidentialInstanceConfig message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: google.cloud.workstations.v1beta.WorkstationConfig.Host.GceInstance.IGceConfidentialInstanceConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Encodes the specified GceConfidentialInstanceConfig message, length delimited. Does not implicitly {@link google.cloud.workstations.v1beta.WorkstationConfig.Host.GceInstance.GceConfidentialInstanceConfig.verify|verify} messages.
                                 * @param message GceConfidentialInstanceConfig message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: google.cloud.workstations.v1beta.WorkstationConfig.Host.GceInstance.IGceConfidentialInstanceConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Decodes a GceConfidentialInstanceConfig message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns GceConfidentialInstanceConfig
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.workstations.v1beta.WorkstationConfig.Host.GceInstance.GceConfidentialInstanceConfig;

                                /**
                                 * Decodes a GceConfidentialInstanceConfig message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns GceConfidentialInstanceConfig
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.workstations.v1beta.WorkstationConfig.Host.GceInstance.GceConfidentialInstanceConfig;

                                /**
                                 * Verifies a GceConfidentialInstanceConfig message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates a GceConfidentialInstanceConfig message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns GceConfidentialInstanceConfig
                                 */
                                public static fromObject(object: { [k: string]: any }): google.cloud.workstations.v1beta.WorkstationConfig.Host.GceInstance.GceConfidentialInstanceConfig;

                                /**
                                 * Creates a plain object from a GceConfidentialInstanceConfig message. Also converts values to other types if specified.
                                 * @param message GceConfidentialInstanceConfig
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: google.cloud.workstations.v1beta.WorkstationConfig.Host.GceInstance.GceConfidentialInstanceConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this GceConfidentialInstanceConfig to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };

                                /**
                                 * Gets the default type url for GceConfidentialInstanceConfig
                                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                                 * @returns The default type url
                                 */
                                public static getTypeUrl(typeUrlPrefix?: string): string;
                            }

                            /** Properties of an Accelerator. */
                            interface IAccelerator {

                                /** Accelerator type */
                                type?: (string|null);

                                /** Accelerator count */
                                count?: (number|null);
                            }

                            /** Represents an Accelerator. */
                            class Accelerator implements IAccelerator {

                                /**
                                 * Constructs a new Accelerator.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: google.cloud.workstations.v1beta.WorkstationConfig.Host.GceInstance.IAccelerator);

                                /** Accelerator type. */
                                public type: string;

                                /** Accelerator count. */
                                public count: number;

                                /**
                                 * Creates a new Accelerator instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns Accelerator instance
                                 */
                                public static create(properties?: google.cloud.workstations.v1beta.WorkstationConfig.Host.GceInstance.IAccelerator): google.cloud.workstations.v1beta.WorkstationConfig.Host.GceInstance.Accelerator;

                                /**
                                 * Encodes the specified Accelerator message. Does not implicitly {@link google.cloud.workstations.v1beta.WorkstationConfig.Host.GceInstance.Accelerator.verify|verify} messages.
                                 * @param message Accelerator message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: google.cloud.workstations.v1beta.WorkstationConfig.Host.GceInstance.IAccelerator, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Encodes the specified Accelerator message, length delimited. Does not implicitly {@link google.cloud.workstations.v1beta.WorkstationConfig.Host.GceInstance.Accelerator.verify|verify} messages.
                                 * @param message Accelerator message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: google.cloud.workstations.v1beta.WorkstationConfig.Host.GceInstance.IAccelerator, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Decodes an Accelerator message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns Accelerator
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.workstations.v1beta.WorkstationConfig.Host.GceInstance.Accelerator;

                                /**
                                 * Decodes an Accelerator message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns Accelerator
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.workstations.v1beta.WorkstationConfig.Host.GceInstance.Accelerator;

                                /**
                                 * Verifies an Accelerator message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates an Accelerator message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns Accelerator
                                 */
                                public static fromObject(object: { [k: string]: any }): google.cloud.workstations.v1beta.WorkstationConfig.Host.GceInstance.Accelerator;

                                /**
                                 * Creates a plain object from an Accelerator message. Also converts values to other types if specified.
                                 * @param message Accelerator
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: google.cloud.workstations.v1beta.WorkstationConfig.Host.GceInstance.Accelerator, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this Accelerator to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };

                                /**
                                 * Gets the default type url for Accelerator
                                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                                 * @returns The default type url
                                 */
                                public static getTypeUrl(typeUrlPrefix?: string): string;
                            }
                        }
                    }

                    /** Properties of a PersistentDirectory. */
                    interface IPersistentDirectory {

                        /** PersistentDirectory gcePd */
                        gcePd?: (google.cloud.workstations.v1beta.WorkstationConfig.PersistentDirectory.IGceRegionalPersistentDisk|null);

                        /** PersistentDirectory mountPath */
                        mountPath?: (string|null);
                    }

                    /** Represents a PersistentDirectory. */
                    class PersistentDirectory implements IPersistentDirectory {

                        /**
                         * Constructs a new PersistentDirectory.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.workstations.v1beta.WorkstationConfig.IPersistentDirectory);

                        /** PersistentDirectory gcePd. */
                        public gcePd?: (google.cloud.workstations.v1beta.WorkstationConfig.PersistentDirectory.IGceRegionalPersistentDisk|null);

                        /** PersistentDirectory mountPath. */
                        public mountPath: string;

                        /** PersistentDirectory directoryType. */
                        public directoryType?: "gcePd";

                        /**
                         * Creates a new PersistentDirectory instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns PersistentDirectory instance
                         */
                        public static create(properties?: google.cloud.workstations.v1beta.WorkstationConfig.IPersistentDirectory): google.cloud.workstations.v1beta.WorkstationConfig.PersistentDirectory;

                        /**
                         * Encodes the specified PersistentDirectory message. Does not implicitly {@link google.cloud.workstations.v1beta.WorkstationConfig.PersistentDirectory.verify|verify} messages.
                         * @param message PersistentDirectory message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.workstations.v1beta.WorkstationConfig.IPersistentDirectory, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified PersistentDirectory message, length delimited. Does not implicitly {@link google.cloud.workstations.v1beta.WorkstationConfig.PersistentDirectory.verify|verify} messages.
                         * @param message PersistentDirectory message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.workstations.v1beta.WorkstationConfig.IPersistentDirectory, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a PersistentDirectory message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns PersistentDirectory
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.workstations.v1beta.WorkstationConfig.PersistentDirectory;

                        /**
                         * Decodes a PersistentDirectory message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns PersistentDirectory
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.workstations.v1beta.WorkstationConfig.PersistentDirectory;

                        /**
                         * Verifies a PersistentDirectory message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a PersistentDirectory message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns PersistentDirectory
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.workstations.v1beta.WorkstationConfig.PersistentDirectory;

                        /**
                         * Creates a plain object from a PersistentDirectory message. Also converts values to other types if specified.
                         * @param message PersistentDirectory
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.workstations.v1beta.WorkstationConfig.PersistentDirectory, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this PersistentDirectory to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for PersistentDirectory
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace PersistentDirectory {

                        /** Properties of a GceRegionalPersistentDisk. */
                        interface IGceRegionalPersistentDisk {

                            /** GceRegionalPersistentDisk sizeGb */
                            sizeGb?: (number|null);

                            /** GceRegionalPersistentDisk fsType */
                            fsType?: (string|null);

                            /** GceRegionalPersistentDisk diskType */
                            diskType?: (string|null);

                            /** GceRegionalPersistentDisk sourceSnapshot */
                            sourceSnapshot?: (string|null);

                            /** GceRegionalPersistentDisk reclaimPolicy */
                            reclaimPolicy?: (google.cloud.workstations.v1beta.WorkstationConfig.PersistentDirectory.GceRegionalPersistentDisk.ReclaimPolicy|keyof typeof google.cloud.workstations.v1beta.WorkstationConfig.PersistentDirectory.GceRegionalPersistentDisk.ReclaimPolicy|null);
                        }

                        /** Represents a GceRegionalPersistentDisk. */
                        class GceRegionalPersistentDisk implements IGceRegionalPersistentDisk {

                            /**
                             * Constructs a new GceRegionalPersistentDisk.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.workstations.v1beta.WorkstationConfig.PersistentDirectory.IGceRegionalPersistentDisk);

                            /** GceRegionalPersistentDisk sizeGb. */
                            public sizeGb: number;

                            /** GceRegionalPersistentDisk fsType. */
                            public fsType: string;

                            /** GceRegionalPersistentDisk diskType. */
                            public diskType: string;

                            /** GceRegionalPersistentDisk sourceSnapshot. */
                            public sourceSnapshot: string;

                            /** GceRegionalPersistentDisk reclaimPolicy. */
                            public reclaimPolicy: (google.cloud.workstations.v1beta.WorkstationConfig.PersistentDirectory.GceRegionalPersistentDisk.ReclaimPolicy|keyof typeof google.cloud.workstations.v1beta.WorkstationConfig.PersistentDirectory.GceRegionalPersistentDisk.ReclaimPolicy);

                            /**
                             * Creates a new GceRegionalPersistentDisk instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns GceRegionalPersistentDisk instance
                             */
                            public static create(properties?: google.cloud.workstations.v1beta.WorkstationConfig.PersistentDirectory.IGceRegionalPersistentDisk): google.cloud.workstations.v1beta.WorkstationConfig.PersistentDirectory.GceRegionalPersistentDisk;

                            /**
                             * Encodes the specified GceRegionalPersistentDisk message. Does not implicitly {@link google.cloud.workstations.v1beta.WorkstationConfig.PersistentDirectory.GceRegionalPersistentDisk.verify|verify} messages.
                             * @param message GceRegionalPersistentDisk message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.workstations.v1beta.WorkstationConfig.PersistentDirectory.IGceRegionalPersistentDisk, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified GceRegionalPersistentDisk message, length delimited. Does not implicitly {@link google.cloud.workstations.v1beta.WorkstationConfig.PersistentDirectory.GceRegionalPersistentDisk.verify|verify} messages.
                             * @param message GceRegionalPersistentDisk message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.workstations.v1beta.WorkstationConfig.PersistentDirectory.IGceRegionalPersistentDisk, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a GceRegionalPersistentDisk message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns GceRegionalPersistentDisk
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.workstations.v1beta.WorkstationConfig.PersistentDirectory.GceRegionalPersistentDisk;

                            /**
                             * Decodes a GceRegionalPersistentDisk message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns GceRegionalPersistentDisk
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.workstations.v1beta.WorkstationConfig.PersistentDirectory.GceRegionalPersistentDisk;

                            /**
                             * Verifies a GceRegionalPersistentDisk message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a GceRegionalPersistentDisk message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns GceRegionalPersistentDisk
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.workstations.v1beta.WorkstationConfig.PersistentDirectory.GceRegionalPersistentDisk;

                            /**
                             * Creates a plain object from a GceRegionalPersistentDisk message. Also converts values to other types if specified.
                             * @param message GceRegionalPersistentDisk
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.workstations.v1beta.WorkstationConfig.PersistentDirectory.GceRegionalPersistentDisk, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this GceRegionalPersistentDisk to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for GceRegionalPersistentDisk
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        namespace GceRegionalPersistentDisk {

                            /** ReclaimPolicy enum. */
                            enum ReclaimPolicy {
                                RECLAIM_POLICY_UNSPECIFIED = 0,
                                DELETE = 1,
                                RETAIN = 2
                            }
                        }
                    }

                    /** Properties of an EphemeralDirectory. */
                    interface IEphemeralDirectory {

                        /** EphemeralDirectory gcePd */
                        gcePd?: (google.cloud.workstations.v1beta.WorkstationConfig.EphemeralDirectory.IGcePersistentDisk|null);

                        /** EphemeralDirectory mountPath */
                        mountPath?: (string|null);
                    }

                    /** Represents an EphemeralDirectory. */
                    class EphemeralDirectory implements IEphemeralDirectory {

                        /**
                         * Constructs a new EphemeralDirectory.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.workstations.v1beta.WorkstationConfig.IEphemeralDirectory);

                        /** EphemeralDirectory gcePd. */
                        public gcePd?: (google.cloud.workstations.v1beta.WorkstationConfig.EphemeralDirectory.IGcePersistentDisk|null);

                        /** EphemeralDirectory mountPath. */
                        public mountPath: string;

                        /** EphemeralDirectory directoryType. */
                        public directoryType?: "gcePd";

                        /**
                         * Creates a new EphemeralDirectory instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns EphemeralDirectory instance
                         */
                        public static create(properties?: google.cloud.workstations.v1beta.WorkstationConfig.IEphemeralDirectory): google.cloud.workstations.v1beta.WorkstationConfig.EphemeralDirectory;

                        /**
                         * Encodes the specified EphemeralDirectory message. Does not implicitly {@link google.cloud.workstations.v1beta.WorkstationConfig.EphemeralDirectory.verify|verify} messages.
                         * @param message EphemeralDirectory message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.workstations.v1beta.WorkstationConfig.IEphemeralDirectory, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified EphemeralDirectory message, length delimited. Does not implicitly {@link google.cloud.workstations.v1beta.WorkstationConfig.EphemeralDirectory.verify|verify} messages.
                         * @param message EphemeralDirectory message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.workstations.v1beta.WorkstationConfig.IEphemeralDirectory, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an EphemeralDirectory message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns EphemeralDirectory
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.workstations.v1beta.WorkstationConfig.EphemeralDirectory;

                        /**
                         * Decodes an EphemeralDirectory message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns EphemeralDirectory
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.workstations.v1beta.WorkstationConfig.EphemeralDirectory;

                        /**
                         * Verifies an EphemeralDirectory message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an EphemeralDirectory message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns EphemeralDirectory
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.workstations.v1beta.WorkstationConfig.EphemeralDirectory;

                        /**
                         * Creates a plain object from an EphemeralDirectory message. Also converts values to other types if specified.
                         * @param message EphemeralDirectory
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.workstations.v1beta.WorkstationConfig.EphemeralDirectory, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this EphemeralDirectory to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for EphemeralDirectory
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace EphemeralDirectory {

                        /** Properties of a GcePersistentDisk. */
                        interface IGcePersistentDisk {

                            /** GcePersistentDisk diskType */
                            diskType?: (string|null);

                            /** GcePersistentDisk sourceSnapshot */
                            sourceSnapshot?: (string|null);

                            /** GcePersistentDisk sourceImage */
                            sourceImage?: (string|null);

                            /** GcePersistentDisk readOnly */
                            readOnly?: (boolean|null);
                        }

                        /** Represents a GcePersistentDisk. */
                        class GcePersistentDisk implements IGcePersistentDisk {

                            /**
                             * Constructs a new GcePersistentDisk.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.workstations.v1beta.WorkstationConfig.EphemeralDirectory.IGcePersistentDisk);

                            /** GcePersistentDisk diskType. */
                            public diskType: string;

                            /** GcePersistentDisk sourceSnapshot. */
                            public sourceSnapshot: string;

                            /** GcePersistentDisk sourceImage. */
                            public sourceImage: string;

                            /** GcePersistentDisk readOnly. */
                            public readOnly: boolean;

                            /**
                             * Creates a new GcePersistentDisk instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns GcePersistentDisk instance
                             */
                            public static create(properties?: google.cloud.workstations.v1beta.WorkstationConfig.EphemeralDirectory.IGcePersistentDisk): google.cloud.workstations.v1beta.WorkstationConfig.EphemeralDirectory.GcePersistentDisk;

                            /**
                             * Encodes the specified GcePersistentDisk message. Does not implicitly {@link google.cloud.workstations.v1beta.WorkstationConfig.EphemeralDirectory.GcePersistentDisk.verify|verify} messages.
                             * @param message GcePersistentDisk message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.workstations.v1beta.WorkstationConfig.EphemeralDirectory.IGcePersistentDisk, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified GcePersistentDisk message, length delimited. Does not implicitly {@link google.cloud.workstations.v1beta.WorkstationConfig.EphemeralDirectory.GcePersistentDisk.verify|verify} messages.
                             * @param message GcePersistentDisk message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.workstations.v1beta.WorkstationConfig.EphemeralDirectory.IGcePersistentDisk, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a GcePersistentDisk message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns GcePersistentDisk
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.workstations.v1beta.WorkstationConfig.EphemeralDirectory.GcePersistentDisk;

                            /**
                             * Decodes a GcePersistentDisk message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns GcePersistentDisk
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.workstations.v1beta.WorkstationConfig.EphemeralDirectory.GcePersistentDisk;

                            /**
                             * Verifies a GcePersistentDisk message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a GcePersistentDisk message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns GcePersistentDisk
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.workstations.v1beta.WorkstationConfig.EphemeralDirectory.GcePersistentDisk;

                            /**
                             * Creates a plain object from a GcePersistentDisk message. Also converts values to other types if specified.
                             * @param message GcePersistentDisk
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.workstations.v1beta.WorkstationConfig.EphemeralDirectory.GcePersistentDisk, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this GcePersistentDisk to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for GcePersistentDisk
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }
                    }

                    /** Properties of a Container. */
                    interface IContainer {

                        /** Container image */
                        image?: (string|null);

                        /** Container command */
                        command?: (string[]|null);

                        /** Container args */
                        args?: (string[]|null);

                        /** Container env */
                        env?: ({ [k: string]: string }|null);

                        /** Container workingDir */
                        workingDir?: (string|null);

                        /** Container runAsUser */
                        runAsUser?: (number|null);
                    }

                    /** Represents a Container. */
                    class Container implements IContainer {

                        /**
                         * Constructs a new Container.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.workstations.v1beta.WorkstationConfig.IContainer);

                        /** Container image. */
                        public image: string;

                        /** Container command. */
                        public command: string[];

                        /** Container args. */
                        public args: string[];

                        /** Container env. */
                        public env: { [k: string]: string };

                        /** Container workingDir. */
                        public workingDir: string;

                        /** Container runAsUser. */
                        public runAsUser: number;

                        /**
                         * Creates a new Container instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Container instance
                         */
                        public static create(properties?: google.cloud.workstations.v1beta.WorkstationConfig.IContainer): google.cloud.workstations.v1beta.WorkstationConfig.Container;

                        /**
                         * Encodes the specified Container message. Does not implicitly {@link google.cloud.workstations.v1beta.WorkstationConfig.Container.verify|verify} messages.
                         * @param message Container message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.workstations.v1beta.WorkstationConfig.IContainer, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Container message, length delimited. Does not implicitly {@link google.cloud.workstations.v1beta.WorkstationConfig.Container.verify|verify} messages.
                         * @param message Container message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.workstations.v1beta.WorkstationConfig.IContainer, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Container message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Container
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.workstations.v1beta.WorkstationConfig.Container;

                        /**
                         * Decodes a Container message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Container
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.workstations.v1beta.WorkstationConfig.Container;

                        /**
                         * Verifies a Container message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Container message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Container
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.workstations.v1beta.WorkstationConfig.Container;

                        /**
                         * Creates a plain object from a Container message. Also converts values to other types if specified.
                         * @param message Container
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.workstations.v1beta.WorkstationConfig.Container, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Container to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for Container
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a CustomerEncryptionKey. */
                    interface ICustomerEncryptionKey {

                        /** CustomerEncryptionKey kmsKey */
                        kmsKey?: (string|null);

                        /** CustomerEncryptionKey kmsKeyServiceAccount */
                        kmsKeyServiceAccount?: (string|null);
                    }

                    /** Represents a CustomerEncryptionKey. */
                    class CustomerEncryptionKey implements ICustomerEncryptionKey {

                        /**
                         * Constructs a new CustomerEncryptionKey.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.workstations.v1beta.WorkstationConfig.ICustomerEncryptionKey);

                        /** CustomerEncryptionKey kmsKey. */
                        public kmsKey: string;

                        /** CustomerEncryptionKey kmsKeyServiceAccount. */
                        public kmsKeyServiceAccount: string;

                        /**
                         * Creates a new CustomerEncryptionKey instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns CustomerEncryptionKey instance
                         */
                        public static create(properties?: google.cloud.workstations.v1beta.WorkstationConfig.ICustomerEncryptionKey): google.cloud.workstations.v1beta.WorkstationConfig.CustomerEncryptionKey;

                        /**
                         * Encodes the specified CustomerEncryptionKey message. Does not implicitly {@link google.cloud.workstations.v1beta.WorkstationConfig.CustomerEncryptionKey.verify|verify} messages.
                         * @param message CustomerEncryptionKey message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.workstations.v1beta.WorkstationConfig.ICustomerEncryptionKey, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified CustomerEncryptionKey message, length delimited. Does not implicitly {@link google.cloud.workstations.v1beta.WorkstationConfig.CustomerEncryptionKey.verify|verify} messages.
                         * @param message CustomerEncryptionKey message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.workstations.v1beta.WorkstationConfig.ICustomerEncryptionKey, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a CustomerEncryptionKey message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns CustomerEncryptionKey
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.workstations.v1beta.WorkstationConfig.CustomerEncryptionKey;

                        /**
                         * Decodes a CustomerEncryptionKey message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns CustomerEncryptionKey
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.workstations.v1beta.WorkstationConfig.CustomerEncryptionKey;

                        /**
                         * Verifies a CustomerEncryptionKey message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a CustomerEncryptionKey message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns CustomerEncryptionKey
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.workstations.v1beta.WorkstationConfig.CustomerEncryptionKey;

                        /**
                         * Creates a plain object from a CustomerEncryptionKey message. Also converts values to other types if specified.
                         * @param message CustomerEncryptionKey
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.workstations.v1beta.WorkstationConfig.CustomerEncryptionKey, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this CustomerEncryptionKey to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for CustomerEncryptionKey
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a ReadinessCheck. */
                    interface IReadinessCheck {

                        /** ReadinessCheck path */
                        path?: (string|null);

                        /** ReadinessCheck port */
                        port?: (number|null);
                    }

                    /** Represents a ReadinessCheck. */
                    class ReadinessCheck implements IReadinessCheck {

                        /**
                         * Constructs a new ReadinessCheck.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.workstations.v1beta.WorkstationConfig.IReadinessCheck);

                        /** ReadinessCheck path. */
                        public path: string;

                        /** ReadinessCheck port. */
                        public port: number;

                        /**
                         * Creates a new ReadinessCheck instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ReadinessCheck instance
                         */
                        public static create(properties?: google.cloud.workstations.v1beta.WorkstationConfig.IReadinessCheck): google.cloud.workstations.v1beta.WorkstationConfig.ReadinessCheck;

                        /**
                         * Encodes the specified ReadinessCheck message. Does not implicitly {@link google.cloud.workstations.v1beta.WorkstationConfig.ReadinessCheck.verify|verify} messages.
                         * @param message ReadinessCheck message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.workstations.v1beta.WorkstationConfig.IReadinessCheck, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ReadinessCheck message, length delimited. Does not implicitly {@link google.cloud.workstations.v1beta.WorkstationConfig.ReadinessCheck.verify|verify} messages.
                         * @param message ReadinessCheck message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.workstations.v1beta.WorkstationConfig.IReadinessCheck, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ReadinessCheck message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ReadinessCheck
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.workstations.v1beta.WorkstationConfig.ReadinessCheck;

                        /**
                         * Decodes a ReadinessCheck message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ReadinessCheck
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.workstations.v1beta.WorkstationConfig.ReadinessCheck;

                        /**
                         * Verifies a ReadinessCheck message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ReadinessCheck message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ReadinessCheck
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.workstations.v1beta.WorkstationConfig.ReadinessCheck;

                        /**
                         * Creates a plain object from a ReadinessCheck message. Also converts values to other types if specified.
                         * @param message ReadinessCheck
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.workstations.v1beta.WorkstationConfig.ReadinessCheck, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ReadinessCheck to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ReadinessCheck
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }
                }

                /** Properties of a Workstation. */
                interface IWorkstation {

                    /** Workstation name */
                    name?: (string|null);

                    /** Workstation displayName */
                    displayName?: (string|null);

                    /** Workstation uid */
                    uid?: (string|null);

                    /** Workstation reconciling */
                    reconciling?: (boolean|null);

                    /** Workstation annotations */
                    annotations?: ({ [k: string]: string }|null);

                    /** Workstation labels */
                    labels?: ({ [k: string]: string }|null);

                    /** Workstation createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** Workstation updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** Workstation startTime */
                    startTime?: (google.protobuf.ITimestamp|null);

                    /** Workstation deleteTime */
                    deleteTime?: (google.protobuf.ITimestamp|null);

                    /** Workstation etag */
                    etag?: (string|null);

                    /** Workstation state */
                    state?: (google.cloud.workstations.v1beta.Workstation.State|keyof typeof google.cloud.workstations.v1beta.Workstation.State|null);

                    /** Workstation host */
                    host?: (string|null);

                    /** Workstation env */
                    env?: ({ [k: string]: string }|null);
                }

                /** Represents a Workstation. */
                class Workstation implements IWorkstation {

                    /**
                     * Constructs a new Workstation.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.workstations.v1beta.IWorkstation);

                    /** Workstation name. */
                    public name: string;

                    /** Workstation displayName. */
                    public displayName: string;

                    /** Workstation uid. */
                    public uid: string;

                    /** Workstation reconciling. */
                    public reconciling: boolean;

                    /** Workstation annotations. */
                    public annotations: { [k: string]: string };

                    /** Workstation labels. */
                    public labels: { [k: string]: string };

                    /** Workstation createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** Workstation updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** Workstation startTime. */
                    public startTime?: (google.protobuf.ITimestamp|null);

                    /** Workstation deleteTime. */
                    public deleteTime?: (google.protobuf.ITimestamp|null);

                    /** Workstation etag. */
                    public etag: string;

                    /** Workstation state. */
                    public state: (google.cloud.workstations.v1beta.Workstation.State|keyof typeof google.cloud.workstations.v1beta.Workstation.State);

                    /** Workstation host. */
                    public host: string;

                    /** Workstation env. */
                    public env: { [k: string]: string };

                    /**
                     * Creates a new Workstation instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Workstation instance
                     */
                    public static create(properties?: google.cloud.workstations.v1beta.IWorkstation): google.cloud.workstations.v1beta.Workstation;

                    /**
                     * Encodes the specified Workstation message. Does not implicitly {@link google.cloud.workstations.v1beta.Workstation.verify|verify} messages.
                     * @param message Workstation message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.workstations.v1beta.IWorkstation, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Workstation message, length delimited. Does not implicitly {@link google.cloud.workstations.v1beta.Workstation.verify|verify} messages.
                     * @param message Workstation message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.workstations.v1beta.IWorkstation, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Workstation message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Workstation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.workstations.v1beta.Workstation;

                    /**
                     * Decodes a Workstation message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Workstation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.workstations.v1beta.Workstation;

                    /**
                     * Verifies a Workstation message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Workstation message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Workstation
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.workstations.v1beta.Workstation;

                    /**
                     * Creates a plain object from a Workstation message. Also converts values to other types if specified.
                     * @param message Workstation
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.workstations.v1beta.Workstation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Workstation to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Workstation
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace Workstation {

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        STATE_STARTING = 1,
                        STATE_RUNNING = 2,
                        STATE_STOPPING = 3,
                        STATE_STOPPED = 4
                    }
                }

                /** Properties of a GetWorkstationClusterRequest. */
                interface IGetWorkstationClusterRequest {

                    /** GetWorkstationClusterRequest name */
                    name?: (string|null);
                }

                /** Represents a GetWorkstationClusterRequest. */
                class GetWorkstationClusterRequest implements IGetWorkstationClusterRequest {

                    /**
                     * Constructs a new GetWorkstationClusterRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.workstations.v1beta.IGetWorkstationClusterRequest);

                    /** GetWorkstationClusterRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetWorkstationClusterRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetWorkstationClusterRequest instance
                     */
                    public static create(properties?: google.cloud.workstations.v1beta.IGetWorkstationClusterRequest): google.cloud.workstations.v1beta.GetWorkstationClusterRequest;

                    /**
                     * Encodes the specified GetWorkstationClusterRequest message. Does not implicitly {@link google.cloud.workstations.v1beta.GetWorkstationClusterRequest.verify|verify} messages.
                     * @param message GetWorkstationClusterRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.workstations.v1beta.IGetWorkstationClusterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetWorkstationClusterRequest message, length delimited. Does not implicitly {@link google.cloud.workstations.v1beta.GetWorkstationClusterRequest.verify|verify} messages.
                     * @param message GetWorkstationClusterRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.workstations.v1beta.IGetWorkstationClusterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetWorkstationClusterRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetWorkstationClusterRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.workstations.v1beta.GetWorkstationClusterRequest;

                    /**
                     * Decodes a GetWorkstationClusterRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetWorkstationClusterRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.workstations.v1beta.GetWorkstationClusterRequest;

                    /**
                     * Verifies a GetWorkstationClusterRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetWorkstationClusterRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetWorkstationClusterRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.workstations.v1beta.GetWorkstationClusterRequest;

                    /**
                     * Creates a plain object from a GetWorkstationClusterRequest message. Also converts values to other types if specified.
                     * @param message GetWorkstationClusterRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.workstations.v1beta.GetWorkstationClusterRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetWorkstationClusterRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetWorkstationClusterRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListWorkstationClustersRequest. */
                interface IListWorkstationClustersRequest {

                    /** ListWorkstationClustersRequest parent */
                    parent?: (string|null);

                    /** ListWorkstationClustersRequest pageSize */
                    pageSize?: (number|null);

                    /** ListWorkstationClustersRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListWorkstationClustersRequest. */
                class ListWorkstationClustersRequest implements IListWorkstationClustersRequest {

                    /**
                     * Constructs a new ListWorkstationClustersRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.workstations.v1beta.IListWorkstationClustersRequest);

                    /** ListWorkstationClustersRequest parent. */
                    public parent: string;

                    /** ListWorkstationClustersRequest pageSize. */
                    public pageSize: number;

                    /** ListWorkstationClustersRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListWorkstationClustersRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListWorkstationClustersRequest instance
                     */
                    public static create(properties?: google.cloud.workstations.v1beta.IListWorkstationClustersRequest): google.cloud.workstations.v1beta.ListWorkstationClustersRequest;

                    /**
                     * Encodes the specified ListWorkstationClustersRequest message. Does not implicitly {@link google.cloud.workstations.v1beta.ListWorkstationClustersRequest.verify|verify} messages.
                     * @param message ListWorkstationClustersRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.workstations.v1beta.IListWorkstationClustersRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListWorkstationClustersRequest message, length delimited. Does not implicitly {@link google.cloud.workstations.v1beta.ListWorkstationClustersRequest.verify|verify} messages.
                     * @param message ListWorkstationClustersRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.workstations.v1beta.IListWorkstationClustersRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListWorkstationClustersRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListWorkstationClustersRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.workstations.v1beta.ListWorkstationClustersRequest;

                    /**
                     * Decodes a ListWorkstationClustersRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListWorkstationClustersRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.workstations.v1beta.ListWorkstationClustersRequest;

                    /**
                     * Verifies a ListWorkstationClustersRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListWorkstationClustersRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListWorkstationClustersRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.workstations.v1beta.ListWorkstationClustersRequest;

                    /**
                     * Creates a plain object from a ListWorkstationClustersRequest message. Also converts values to other types if specified.
                     * @param message ListWorkstationClustersRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.workstations.v1beta.ListWorkstationClustersRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListWorkstationClustersRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListWorkstationClustersRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListWorkstationClustersResponse. */
                interface IListWorkstationClustersResponse {

                    /** ListWorkstationClustersResponse workstationClusters */
                    workstationClusters?: (google.cloud.workstations.v1beta.IWorkstationCluster[]|null);

                    /** ListWorkstationClustersResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListWorkstationClustersResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a ListWorkstationClustersResponse. */
                class ListWorkstationClustersResponse implements IListWorkstationClustersResponse {

                    /**
                     * Constructs a new ListWorkstationClustersResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.workstations.v1beta.IListWorkstationClustersResponse);

                    /** ListWorkstationClustersResponse workstationClusters. */
                    public workstationClusters: google.cloud.workstations.v1beta.IWorkstationCluster[];

                    /** ListWorkstationClustersResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListWorkstationClustersResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListWorkstationClustersResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListWorkstationClustersResponse instance
                     */
                    public static create(properties?: google.cloud.workstations.v1beta.IListWorkstationClustersResponse): google.cloud.workstations.v1beta.ListWorkstationClustersResponse;

                    /**
                     * Encodes the specified ListWorkstationClustersResponse message. Does not implicitly {@link google.cloud.workstations.v1beta.ListWorkstationClustersResponse.verify|verify} messages.
                     * @param message ListWorkstationClustersResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.workstations.v1beta.IListWorkstationClustersResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListWorkstationClustersResponse message, length delimited. Does not implicitly {@link google.cloud.workstations.v1beta.ListWorkstationClustersResponse.verify|verify} messages.
                     * @param message ListWorkstationClustersResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.workstations.v1beta.IListWorkstationClustersResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListWorkstationClustersResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListWorkstationClustersResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.workstations.v1beta.ListWorkstationClustersResponse;

                    /**
                     * Decodes a ListWorkstationClustersResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListWorkstationClustersResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.workstations.v1beta.ListWorkstationClustersResponse;

                    /**
                     * Verifies a ListWorkstationClustersResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListWorkstationClustersResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListWorkstationClustersResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.workstations.v1beta.ListWorkstationClustersResponse;

                    /**
                     * Creates a plain object from a ListWorkstationClustersResponse message. Also converts values to other types if specified.
                     * @param message ListWorkstationClustersResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.workstations.v1beta.ListWorkstationClustersResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListWorkstationClustersResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListWorkstationClustersResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CreateWorkstationClusterRequest. */
                interface ICreateWorkstationClusterRequest {

                    /** CreateWorkstationClusterRequest parent */
                    parent?: (string|null);

                    /** CreateWorkstationClusterRequest workstationClusterId */
                    workstationClusterId?: (string|null);

                    /** CreateWorkstationClusterRequest workstationCluster */
                    workstationCluster?: (google.cloud.workstations.v1beta.IWorkstationCluster|null);

                    /** CreateWorkstationClusterRequest validateOnly */
                    validateOnly?: (boolean|null);
                }

                /** Represents a CreateWorkstationClusterRequest. */
                class CreateWorkstationClusterRequest implements ICreateWorkstationClusterRequest {

                    /**
                     * Constructs a new CreateWorkstationClusterRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.workstations.v1beta.ICreateWorkstationClusterRequest);

                    /** CreateWorkstationClusterRequest parent. */
                    public parent: string;

                    /** CreateWorkstationClusterRequest workstationClusterId. */
                    public workstationClusterId: string;

                    /** CreateWorkstationClusterRequest workstationCluster. */
                    public workstationCluster?: (google.cloud.workstations.v1beta.IWorkstationCluster|null);

                    /** CreateWorkstationClusterRequest validateOnly. */
                    public validateOnly: boolean;

                    /**
                     * Creates a new CreateWorkstationClusterRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateWorkstationClusterRequest instance
                     */
                    public static create(properties?: google.cloud.workstations.v1beta.ICreateWorkstationClusterRequest): google.cloud.workstations.v1beta.CreateWorkstationClusterRequest;

                    /**
                     * Encodes the specified CreateWorkstationClusterRequest message. Does not implicitly {@link google.cloud.workstations.v1beta.CreateWorkstationClusterRequest.verify|verify} messages.
                     * @param message CreateWorkstationClusterRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.workstations.v1beta.ICreateWorkstationClusterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateWorkstationClusterRequest message, length delimited. Does not implicitly {@link google.cloud.workstations.v1beta.CreateWorkstationClusterRequest.verify|verify} messages.
                     * @param message CreateWorkstationClusterRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.workstations.v1beta.ICreateWorkstationClusterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateWorkstationClusterRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateWorkstationClusterRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.workstations.v1beta.CreateWorkstationClusterRequest;

                    /**
                     * Decodes a CreateWorkstationClusterRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateWorkstationClusterRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.workstations.v1beta.CreateWorkstationClusterRequest;

                    /**
                     * Verifies a CreateWorkstationClusterRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateWorkstationClusterRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateWorkstationClusterRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.workstations.v1beta.CreateWorkstationClusterRequest;

                    /**
                     * Creates a plain object from a CreateWorkstationClusterRequest message. Also converts values to other types if specified.
                     * @param message CreateWorkstationClusterRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.workstations.v1beta.CreateWorkstationClusterRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateWorkstationClusterRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateWorkstationClusterRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpdateWorkstationClusterRequest. */
                interface IUpdateWorkstationClusterRequest {

                    /** UpdateWorkstationClusterRequest workstationCluster */
                    workstationCluster?: (google.cloud.workstations.v1beta.IWorkstationCluster|null);

                    /** UpdateWorkstationClusterRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateWorkstationClusterRequest validateOnly */
                    validateOnly?: (boolean|null);

                    /** UpdateWorkstationClusterRequest allowMissing */
                    allowMissing?: (boolean|null);
                }

                /** Represents an UpdateWorkstationClusterRequest. */
                class UpdateWorkstationClusterRequest implements IUpdateWorkstationClusterRequest {

                    /**
                     * Constructs a new UpdateWorkstationClusterRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.workstations.v1beta.IUpdateWorkstationClusterRequest);

                    /** UpdateWorkstationClusterRequest workstationCluster. */
                    public workstationCluster?: (google.cloud.workstations.v1beta.IWorkstationCluster|null);

                    /** UpdateWorkstationClusterRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateWorkstationClusterRequest validateOnly. */
                    public validateOnly: boolean;

                    /** UpdateWorkstationClusterRequest allowMissing. */
                    public allowMissing: boolean;

                    /**
                     * Creates a new UpdateWorkstationClusterRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateWorkstationClusterRequest instance
                     */
                    public static create(properties?: google.cloud.workstations.v1beta.IUpdateWorkstationClusterRequest): google.cloud.workstations.v1beta.UpdateWorkstationClusterRequest;

                    /**
                     * Encodes the specified UpdateWorkstationClusterRequest message. Does not implicitly {@link google.cloud.workstations.v1beta.UpdateWorkstationClusterRequest.verify|verify} messages.
                     * @param message UpdateWorkstationClusterRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.workstations.v1beta.IUpdateWorkstationClusterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateWorkstationClusterRequest message, length delimited. Does not implicitly {@link google.cloud.workstations.v1beta.UpdateWorkstationClusterRequest.verify|verify} messages.
                     * @param message UpdateWorkstationClusterRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.workstations.v1beta.IUpdateWorkstationClusterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateWorkstationClusterRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateWorkstationClusterRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.workstations.v1beta.UpdateWorkstationClusterRequest;

                    /**
                     * Decodes an UpdateWorkstationClusterRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateWorkstationClusterRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.workstations.v1beta.UpdateWorkstationClusterRequest;

                    /**
                     * Verifies an UpdateWorkstationClusterRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateWorkstationClusterRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateWorkstationClusterRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.workstations.v1beta.UpdateWorkstationClusterRequest;

                    /**
                     * Creates a plain object from an UpdateWorkstationClusterRequest message. Also converts values to other types if specified.
                     * @param message UpdateWorkstationClusterRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.workstations.v1beta.UpdateWorkstationClusterRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateWorkstationClusterRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdateWorkstationClusterRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeleteWorkstationClusterRequest. */
                interface IDeleteWorkstationClusterRequest {

                    /** DeleteWorkstationClusterRequest name */
                    name?: (string|null);

                    /** DeleteWorkstationClusterRequest validateOnly */
                    validateOnly?: (boolean|null);

                    /** DeleteWorkstationClusterRequest etag */
                    etag?: (string|null);

                    /** DeleteWorkstationClusterRequest force */
                    force?: (boolean|null);
                }

                /** Represents a DeleteWorkstationClusterRequest. */
                class DeleteWorkstationClusterRequest implements IDeleteWorkstationClusterRequest {

                    /**
                     * Constructs a new DeleteWorkstationClusterRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.workstations.v1beta.IDeleteWorkstationClusterRequest);

                    /** DeleteWorkstationClusterRequest name. */
                    public name: string;

                    /** DeleteWorkstationClusterRequest validateOnly. */
                    public validateOnly: boolean;

                    /** DeleteWorkstationClusterRequest etag. */
                    public etag: string;

                    /** DeleteWorkstationClusterRequest force. */
                    public force: boolean;

                    /**
                     * Creates a new DeleteWorkstationClusterRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteWorkstationClusterRequest instance
                     */
                    public static create(properties?: google.cloud.workstations.v1beta.IDeleteWorkstationClusterRequest): google.cloud.workstations.v1beta.DeleteWorkstationClusterRequest;

                    /**
                     * Encodes the specified DeleteWorkstationClusterRequest message. Does not implicitly {@link google.cloud.workstations.v1beta.DeleteWorkstationClusterRequest.verify|verify} messages.
                     * @param message DeleteWorkstationClusterRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.workstations.v1beta.IDeleteWorkstationClusterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteWorkstationClusterRequest message, length delimited. Does not implicitly {@link google.cloud.workstations.v1beta.DeleteWorkstationClusterRequest.verify|verify} messages.
                     * @param message DeleteWorkstationClusterRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.workstations.v1beta.IDeleteWorkstationClusterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteWorkstationClusterRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteWorkstationClusterRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.workstations.v1beta.DeleteWorkstationClusterRequest;

                    /**
                     * Decodes a DeleteWorkstationClusterRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteWorkstationClusterRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.workstations.v1beta.DeleteWorkstationClusterRequest;

                    /**
                     * Verifies a DeleteWorkstationClusterRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteWorkstationClusterRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteWorkstationClusterRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.workstations.v1beta.DeleteWorkstationClusterRequest;

                    /**
                     * Creates a plain object from a DeleteWorkstationClusterRequest message. Also converts values to other types if specified.
                     * @param message DeleteWorkstationClusterRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.workstations.v1beta.DeleteWorkstationClusterRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteWorkstationClusterRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeleteWorkstationClusterRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetWorkstationConfigRequest. */
                interface IGetWorkstationConfigRequest {

                    /** GetWorkstationConfigRequest name */
                    name?: (string|null);
                }

                /** Represents a GetWorkstationConfigRequest. */
                class GetWorkstationConfigRequest implements IGetWorkstationConfigRequest {

                    /**
                     * Constructs a new GetWorkstationConfigRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.workstations.v1beta.IGetWorkstationConfigRequest);

                    /** GetWorkstationConfigRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetWorkstationConfigRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetWorkstationConfigRequest instance
                     */
                    public static create(properties?: google.cloud.workstations.v1beta.IGetWorkstationConfigRequest): google.cloud.workstations.v1beta.GetWorkstationConfigRequest;

                    /**
                     * Encodes the specified GetWorkstationConfigRequest message. Does not implicitly {@link google.cloud.workstations.v1beta.GetWorkstationConfigRequest.verify|verify} messages.
                     * @param message GetWorkstationConfigRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.workstations.v1beta.IGetWorkstationConfigRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetWorkstationConfigRequest message, length delimited. Does not implicitly {@link google.cloud.workstations.v1beta.GetWorkstationConfigRequest.verify|verify} messages.
                     * @param message GetWorkstationConfigRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.workstations.v1beta.IGetWorkstationConfigRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetWorkstationConfigRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetWorkstationConfigRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.workstations.v1beta.GetWorkstationConfigRequest;

                    /**
                     * Decodes a GetWorkstationConfigRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetWorkstationConfigRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.workstations.v1beta.GetWorkstationConfigRequest;

                    /**
                     * Verifies a GetWorkstationConfigRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetWorkstationConfigRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetWorkstationConfigRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.workstations.v1beta.GetWorkstationConfigRequest;

                    /**
                     * Creates a plain object from a GetWorkstationConfigRequest message. Also converts values to other types if specified.
                     * @param message GetWorkstationConfigRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.workstations.v1beta.GetWorkstationConfigRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetWorkstationConfigRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetWorkstationConfigRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListWorkstationConfigsRequest. */
                interface IListWorkstationConfigsRequest {

                    /** ListWorkstationConfigsRequest parent */
                    parent?: (string|null);

                    /** ListWorkstationConfigsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListWorkstationConfigsRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListWorkstationConfigsRequest. */
                class ListWorkstationConfigsRequest implements IListWorkstationConfigsRequest {

                    /**
                     * Constructs a new ListWorkstationConfigsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.workstations.v1beta.IListWorkstationConfigsRequest);

                    /** ListWorkstationConfigsRequest parent. */
                    public parent: string;

                    /** ListWorkstationConfigsRequest pageSize. */
                    public pageSize: number;

                    /** ListWorkstationConfigsRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListWorkstationConfigsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListWorkstationConfigsRequest instance
                     */
                    public static create(properties?: google.cloud.workstations.v1beta.IListWorkstationConfigsRequest): google.cloud.workstations.v1beta.ListWorkstationConfigsRequest;

                    /**
                     * Encodes the specified ListWorkstationConfigsRequest message. Does not implicitly {@link google.cloud.workstations.v1beta.ListWorkstationConfigsRequest.verify|verify} messages.
                     * @param message ListWorkstationConfigsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.workstations.v1beta.IListWorkstationConfigsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListWorkstationConfigsRequest message, length delimited. Does not implicitly {@link google.cloud.workstations.v1beta.ListWorkstationConfigsRequest.verify|verify} messages.
                     * @param message ListWorkstationConfigsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.workstations.v1beta.IListWorkstationConfigsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListWorkstationConfigsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListWorkstationConfigsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.workstations.v1beta.ListWorkstationConfigsRequest;

                    /**
                     * Decodes a ListWorkstationConfigsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListWorkstationConfigsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.workstations.v1beta.ListWorkstationConfigsRequest;

                    /**
                     * Verifies a ListWorkstationConfigsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListWorkstationConfigsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListWorkstationConfigsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.workstations.v1beta.ListWorkstationConfigsRequest;

                    /**
                     * Creates a plain object from a ListWorkstationConfigsRequest message. Also converts values to other types if specified.
                     * @param message ListWorkstationConfigsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.workstations.v1beta.ListWorkstationConfigsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListWorkstationConfigsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListWorkstationConfigsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListWorkstationConfigsResponse. */
                interface IListWorkstationConfigsResponse {

                    /** ListWorkstationConfigsResponse workstationConfigs */
                    workstationConfigs?: (google.cloud.workstations.v1beta.IWorkstationConfig[]|null);

                    /** ListWorkstationConfigsResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListWorkstationConfigsResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a ListWorkstationConfigsResponse. */
                class ListWorkstationConfigsResponse implements IListWorkstationConfigsResponse {

                    /**
                     * Constructs a new ListWorkstationConfigsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.workstations.v1beta.IListWorkstationConfigsResponse);

                    /** ListWorkstationConfigsResponse workstationConfigs. */
                    public workstationConfigs: google.cloud.workstations.v1beta.IWorkstationConfig[];

                    /** ListWorkstationConfigsResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListWorkstationConfigsResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListWorkstationConfigsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListWorkstationConfigsResponse instance
                     */
                    public static create(properties?: google.cloud.workstations.v1beta.IListWorkstationConfigsResponse): google.cloud.workstations.v1beta.ListWorkstationConfigsResponse;

                    /**
                     * Encodes the specified ListWorkstationConfigsResponse message. Does not implicitly {@link google.cloud.workstations.v1beta.ListWorkstationConfigsResponse.verify|verify} messages.
                     * @param message ListWorkstationConfigsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.workstations.v1beta.IListWorkstationConfigsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListWorkstationConfigsResponse message, length delimited. Does not implicitly {@link google.cloud.workstations.v1beta.ListWorkstationConfigsResponse.verify|verify} messages.
                     * @param message ListWorkstationConfigsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.workstations.v1beta.IListWorkstationConfigsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListWorkstationConfigsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListWorkstationConfigsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.workstations.v1beta.ListWorkstationConfigsResponse;

                    /**
                     * Decodes a ListWorkstationConfigsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListWorkstationConfigsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.workstations.v1beta.ListWorkstationConfigsResponse;

                    /**
                     * Verifies a ListWorkstationConfigsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListWorkstationConfigsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListWorkstationConfigsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.workstations.v1beta.ListWorkstationConfigsResponse;

                    /**
                     * Creates a plain object from a ListWorkstationConfigsResponse message. Also converts values to other types if specified.
                     * @param message ListWorkstationConfigsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.workstations.v1beta.ListWorkstationConfigsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListWorkstationConfigsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListWorkstationConfigsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListUsableWorkstationConfigsRequest. */
                interface IListUsableWorkstationConfigsRequest {

                    /** ListUsableWorkstationConfigsRequest parent */
                    parent?: (string|null);

                    /** ListUsableWorkstationConfigsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListUsableWorkstationConfigsRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListUsableWorkstationConfigsRequest. */
                class ListUsableWorkstationConfigsRequest implements IListUsableWorkstationConfigsRequest {

                    /**
                     * Constructs a new ListUsableWorkstationConfigsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.workstations.v1beta.IListUsableWorkstationConfigsRequest);

                    /** ListUsableWorkstationConfigsRequest parent. */
                    public parent: string;

                    /** ListUsableWorkstationConfigsRequest pageSize. */
                    public pageSize: number;

                    /** ListUsableWorkstationConfigsRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListUsableWorkstationConfigsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListUsableWorkstationConfigsRequest instance
                     */
                    public static create(properties?: google.cloud.workstations.v1beta.IListUsableWorkstationConfigsRequest): google.cloud.workstations.v1beta.ListUsableWorkstationConfigsRequest;

                    /**
                     * Encodes the specified ListUsableWorkstationConfigsRequest message. Does not implicitly {@link google.cloud.workstations.v1beta.ListUsableWorkstationConfigsRequest.verify|verify} messages.
                     * @param message ListUsableWorkstationConfigsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.workstations.v1beta.IListUsableWorkstationConfigsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListUsableWorkstationConfigsRequest message, length delimited. Does not implicitly {@link google.cloud.workstations.v1beta.ListUsableWorkstationConfigsRequest.verify|verify} messages.
                     * @param message ListUsableWorkstationConfigsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.workstations.v1beta.IListUsableWorkstationConfigsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListUsableWorkstationConfigsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListUsableWorkstationConfigsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.workstations.v1beta.ListUsableWorkstationConfigsRequest;

                    /**
                     * Decodes a ListUsableWorkstationConfigsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListUsableWorkstationConfigsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.workstations.v1beta.ListUsableWorkstationConfigsRequest;

                    /**
                     * Verifies a ListUsableWorkstationConfigsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListUsableWorkstationConfigsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListUsableWorkstationConfigsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.workstations.v1beta.ListUsableWorkstationConfigsRequest;

                    /**
                     * Creates a plain object from a ListUsableWorkstationConfigsRequest message. Also converts values to other types if specified.
                     * @param message ListUsableWorkstationConfigsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.workstations.v1beta.ListUsableWorkstationConfigsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListUsableWorkstationConfigsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListUsableWorkstationConfigsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListUsableWorkstationConfigsResponse. */
                interface IListUsableWorkstationConfigsResponse {

                    /** ListUsableWorkstationConfigsResponse workstationConfigs */
                    workstationConfigs?: (google.cloud.workstations.v1beta.IWorkstationConfig[]|null);

                    /** ListUsableWorkstationConfigsResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListUsableWorkstationConfigsResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a ListUsableWorkstationConfigsResponse. */
                class ListUsableWorkstationConfigsResponse implements IListUsableWorkstationConfigsResponse {

                    /**
                     * Constructs a new ListUsableWorkstationConfigsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.workstations.v1beta.IListUsableWorkstationConfigsResponse);

                    /** ListUsableWorkstationConfigsResponse workstationConfigs. */
                    public workstationConfigs: google.cloud.workstations.v1beta.IWorkstationConfig[];

                    /** ListUsableWorkstationConfigsResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListUsableWorkstationConfigsResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListUsableWorkstationConfigsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListUsableWorkstationConfigsResponse instance
                     */
                    public static create(properties?: google.cloud.workstations.v1beta.IListUsableWorkstationConfigsResponse): google.cloud.workstations.v1beta.ListUsableWorkstationConfigsResponse;

                    /**
                     * Encodes the specified ListUsableWorkstationConfigsResponse message. Does not implicitly {@link google.cloud.workstations.v1beta.ListUsableWorkstationConfigsResponse.verify|verify} messages.
                     * @param message ListUsableWorkstationConfigsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.workstations.v1beta.IListUsableWorkstationConfigsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListUsableWorkstationConfigsResponse message, length delimited. Does not implicitly {@link google.cloud.workstations.v1beta.ListUsableWorkstationConfigsResponse.verify|verify} messages.
                     * @param message ListUsableWorkstationConfigsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.workstations.v1beta.IListUsableWorkstationConfigsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListUsableWorkstationConfigsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListUsableWorkstationConfigsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.workstations.v1beta.ListUsableWorkstationConfigsResponse;

                    /**
                     * Decodes a ListUsableWorkstationConfigsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListUsableWorkstationConfigsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.workstations.v1beta.ListUsableWorkstationConfigsResponse;

                    /**
                     * Verifies a ListUsableWorkstationConfigsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListUsableWorkstationConfigsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListUsableWorkstationConfigsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.workstations.v1beta.ListUsableWorkstationConfigsResponse;

                    /**
                     * Creates a plain object from a ListUsableWorkstationConfigsResponse message. Also converts values to other types if specified.
                     * @param message ListUsableWorkstationConfigsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.workstations.v1beta.ListUsableWorkstationConfigsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListUsableWorkstationConfigsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListUsableWorkstationConfigsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CreateWorkstationConfigRequest. */
                interface ICreateWorkstationConfigRequest {

                    /** CreateWorkstationConfigRequest parent */
                    parent?: (string|null);

                    /** CreateWorkstationConfigRequest workstationConfigId */
                    workstationConfigId?: (string|null);

                    /** CreateWorkstationConfigRequest workstationConfig */
                    workstationConfig?: (google.cloud.workstations.v1beta.IWorkstationConfig|null);

                    /** CreateWorkstationConfigRequest validateOnly */
                    validateOnly?: (boolean|null);
                }

                /** Represents a CreateWorkstationConfigRequest. */
                class CreateWorkstationConfigRequest implements ICreateWorkstationConfigRequest {

                    /**
                     * Constructs a new CreateWorkstationConfigRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.workstations.v1beta.ICreateWorkstationConfigRequest);

                    /** CreateWorkstationConfigRequest parent. */
                    public parent: string;

                    /** CreateWorkstationConfigRequest workstationConfigId. */
                    public workstationConfigId: string;

                    /** CreateWorkstationConfigRequest workstationConfig. */
                    public workstationConfig?: (google.cloud.workstations.v1beta.IWorkstationConfig|null);

                    /** CreateWorkstationConfigRequest validateOnly. */
                    public validateOnly: boolean;

                    /**
                     * Creates a new CreateWorkstationConfigRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateWorkstationConfigRequest instance
                     */
                    public static create(properties?: google.cloud.workstations.v1beta.ICreateWorkstationConfigRequest): google.cloud.workstations.v1beta.CreateWorkstationConfigRequest;

                    /**
                     * Encodes the specified CreateWorkstationConfigRequest message. Does not implicitly {@link google.cloud.workstations.v1beta.CreateWorkstationConfigRequest.verify|verify} messages.
                     * @param message CreateWorkstationConfigRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.workstations.v1beta.ICreateWorkstationConfigRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateWorkstationConfigRequest message, length delimited. Does not implicitly {@link google.cloud.workstations.v1beta.CreateWorkstationConfigRequest.verify|verify} messages.
                     * @param message CreateWorkstationConfigRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.workstations.v1beta.ICreateWorkstationConfigRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateWorkstationConfigRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateWorkstationConfigRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.workstations.v1beta.CreateWorkstationConfigRequest;

                    /**
                     * Decodes a CreateWorkstationConfigRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateWorkstationConfigRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.workstations.v1beta.CreateWorkstationConfigRequest;

                    /**
                     * Verifies a CreateWorkstationConfigRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateWorkstationConfigRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateWorkstationConfigRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.workstations.v1beta.CreateWorkstationConfigRequest;

                    /**
                     * Creates a plain object from a CreateWorkstationConfigRequest message. Also converts values to other types if specified.
                     * @param message CreateWorkstationConfigRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.workstations.v1beta.CreateWorkstationConfigRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateWorkstationConfigRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateWorkstationConfigRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpdateWorkstationConfigRequest. */
                interface IUpdateWorkstationConfigRequest {

                    /** UpdateWorkstationConfigRequest workstationConfig */
                    workstationConfig?: (google.cloud.workstations.v1beta.IWorkstationConfig|null);

                    /** UpdateWorkstationConfigRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateWorkstationConfigRequest validateOnly */
                    validateOnly?: (boolean|null);

                    /** UpdateWorkstationConfigRequest allowMissing */
                    allowMissing?: (boolean|null);
                }

                /** Represents an UpdateWorkstationConfigRequest. */
                class UpdateWorkstationConfigRequest implements IUpdateWorkstationConfigRequest {

                    /**
                     * Constructs a new UpdateWorkstationConfigRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.workstations.v1beta.IUpdateWorkstationConfigRequest);

                    /** UpdateWorkstationConfigRequest workstationConfig. */
                    public workstationConfig?: (google.cloud.workstations.v1beta.IWorkstationConfig|null);

                    /** UpdateWorkstationConfigRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateWorkstationConfigRequest validateOnly. */
                    public validateOnly: boolean;

                    /** UpdateWorkstationConfigRequest allowMissing. */
                    public allowMissing: boolean;

                    /**
                     * Creates a new UpdateWorkstationConfigRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateWorkstationConfigRequest instance
                     */
                    public static create(properties?: google.cloud.workstations.v1beta.IUpdateWorkstationConfigRequest): google.cloud.workstations.v1beta.UpdateWorkstationConfigRequest;

                    /**
                     * Encodes the specified UpdateWorkstationConfigRequest message. Does not implicitly {@link google.cloud.workstations.v1beta.UpdateWorkstationConfigRequest.verify|verify} messages.
                     * @param message UpdateWorkstationConfigRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.workstations.v1beta.IUpdateWorkstationConfigRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateWorkstationConfigRequest message, length delimited. Does not implicitly {@link google.cloud.workstations.v1beta.UpdateWorkstationConfigRequest.verify|verify} messages.
                     * @param message UpdateWorkstationConfigRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.workstations.v1beta.IUpdateWorkstationConfigRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateWorkstationConfigRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateWorkstationConfigRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.workstations.v1beta.UpdateWorkstationConfigRequest;

                    /**
                     * Decodes an UpdateWorkstationConfigRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateWorkstationConfigRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.workstations.v1beta.UpdateWorkstationConfigRequest;

                    /**
                     * Verifies an UpdateWorkstationConfigRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateWorkstationConfigRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateWorkstationConfigRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.workstations.v1beta.UpdateWorkstationConfigRequest;

                    /**
                     * Creates a plain object from an UpdateWorkstationConfigRequest message. Also converts values to other types if specified.
                     * @param message UpdateWorkstationConfigRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.workstations.v1beta.UpdateWorkstationConfigRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateWorkstationConfigRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdateWorkstationConfigRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeleteWorkstationConfigRequest. */
                interface IDeleteWorkstationConfigRequest {

                    /** DeleteWorkstationConfigRequest name */
                    name?: (string|null);

                    /** DeleteWorkstationConfigRequest validateOnly */
                    validateOnly?: (boolean|null);

                    /** DeleteWorkstationConfigRequest etag */
                    etag?: (string|null);

                    /** DeleteWorkstationConfigRequest force */
                    force?: (boolean|null);
                }

                /** Represents a DeleteWorkstationConfigRequest. */
                class DeleteWorkstationConfigRequest implements IDeleteWorkstationConfigRequest {

                    /**
                     * Constructs a new DeleteWorkstationConfigRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.workstations.v1beta.IDeleteWorkstationConfigRequest);

                    /** DeleteWorkstationConfigRequest name. */
                    public name: string;

                    /** DeleteWorkstationConfigRequest validateOnly. */
                    public validateOnly: boolean;

                    /** DeleteWorkstationConfigRequest etag. */
                    public etag: string;

                    /** DeleteWorkstationConfigRequest force. */
                    public force: boolean;

                    /**
                     * Creates a new DeleteWorkstationConfigRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteWorkstationConfigRequest instance
                     */
                    public static create(properties?: google.cloud.workstations.v1beta.IDeleteWorkstationConfigRequest): google.cloud.workstations.v1beta.DeleteWorkstationConfigRequest;

                    /**
                     * Encodes the specified DeleteWorkstationConfigRequest message. Does not implicitly {@link google.cloud.workstations.v1beta.DeleteWorkstationConfigRequest.verify|verify} messages.
                     * @param message DeleteWorkstationConfigRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.workstations.v1beta.IDeleteWorkstationConfigRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteWorkstationConfigRequest message, length delimited. Does not implicitly {@link google.cloud.workstations.v1beta.DeleteWorkstationConfigRequest.verify|verify} messages.
                     * @param message DeleteWorkstationConfigRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.workstations.v1beta.IDeleteWorkstationConfigRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteWorkstationConfigRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteWorkstationConfigRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.workstations.v1beta.DeleteWorkstationConfigRequest;

                    /**
                     * Decodes a DeleteWorkstationConfigRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteWorkstationConfigRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.workstations.v1beta.DeleteWorkstationConfigRequest;

                    /**
                     * Verifies a DeleteWorkstationConfigRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteWorkstationConfigRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteWorkstationConfigRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.workstations.v1beta.DeleteWorkstationConfigRequest;

                    /**
                     * Creates a plain object from a DeleteWorkstationConfigRequest message. Also converts values to other types if specified.
                     * @param message DeleteWorkstationConfigRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.workstations.v1beta.DeleteWorkstationConfigRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteWorkstationConfigRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeleteWorkstationConfigRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetWorkstationRequest. */
                interface IGetWorkstationRequest {

                    /** GetWorkstationRequest name */
                    name?: (string|null);
                }

                /** Represents a GetWorkstationRequest. */
                class GetWorkstationRequest implements IGetWorkstationRequest {

                    /**
                     * Constructs a new GetWorkstationRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.workstations.v1beta.IGetWorkstationRequest);

                    /** GetWorkstationRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetWorkstationRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetWorkstationRequest instance
                     */
                    public static create(properties?: google.cloud.workstations.v1beta.IGetWorkstationRequest): google.cloud.workstations.v1beta.GetWorkstationRequest;

                    /**
                     * Encodes the specified GetWorkstationRequest message. Does not implicitly {@link google.cloud.workstations.v1beta.GetWorkstationRequest.verify|verify} messages.
                     * @param message GetWorkstationRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.workstations.v1beta.IGetWorkstationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetWorkstationRequest message, length delimited. Does not implicitly {@link google.cloud.workstations.v1beta.GetWorkstationRequest.verify|verify} messages.
                     * @param message GetWorkstationRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.workstations.v1beta.IGetWorkstationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetWorkstationRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetWorkstationRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.workstations.v1beta.GetWorkstationRequest;

                    /**
                     * Decodes a GetWorkstationRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetWorkstationRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.workstations.v1beta.GetWorkstationRequest;

                    /**
                     * Verifies a GetWorkstationRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetWorkstationRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetWorkstationRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.workstations.v1beta.GetWorkstationRequest;

                    /**
                     * Creates a plain object from a GetWorkstationRequest message. Also converts values to other types if specified.
                     * @param message GetWorkstationRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.workstations.v1beta.GetWorkstationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetWorkstationRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetWorkstationRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListWorkstationsRequest. */
                interface IListWorkstationsRequest {

                    /** ListWorkstationsRequest parent */
                    parent?: (string|null);

                    /** ListWorkstationsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListWorkstationsRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListWorkstationsRequest. */
                class ListWorkstationsRequest implements IListWorkstationsRequest {

                    /**
                     * Constructs a new ListWorkstationsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.workstations.v1beta.IListWorkstationsRequest);

                    /** ListWorkstationsRequest parent. */
                    public parent: string;

                    /** ListWorkstationsRequest pageSize. */
                    public pageSize: number;

                    /** ListWorkstationsRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListWorkstationsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListWorkstationsRequest instance
                     */
                    public static create(properties?: google.cloud.workstations.v1beta.IListWorkstationsRequest): google.cloud.workstations.v1beta.ListWorkstationsRequest;

                    /**
                     * Encodes the specified ListWorkstationsRequest message. Does not implicitly {@link google.cloud.workstations.v1beta.ListWorkstationsRequest.verify|verify} messages.
                     * @param message ListWorkstationsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.workstations.v1beta.IListWorkstationsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListWorkstationsRequest message, length delimited. Does not implicitly {@link google.cloud.workstations.v1beta.ListWorkstationsRequest.verify|verify} messages.
                     * @param message ListWorkstationsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.workstations.v1beta.IListWorkstationsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListWorkstationsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListWorkstationsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.workstations.v1beta.ListWorkstationsRequest;

                    /**
                     * Decodes a ListWorkstationsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListWorkstationsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.workstations.v1beta.ListWorkstationsRequest;

                    /**
                     * Verifies a ListWorkstationsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListWorkstationsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListWorkstationsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.workstations.v1beta.ListWorkstationsRequest;

                    /**
                     * Creates a plain object from a ListWorkstationsRequest message. Also converts values to other types if specified.
                     * @param message ListWorkstationsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.workstations.v1beta.ListWorkstationsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListWorkstationsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListWorkstationsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListWorkstationsResponse. */
                interface IListWorkstationsResponse {

                    /** ListWorkstationsResponse workstations */
                    workstations?: (google.cloud.workstations.v1beta.IWorkstation[]|null);

                    /** ListWorkstationsResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListWorkstationsResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a ListWorkstationsResponse. */
                class ListWorkstationsResponse implements IListWorkstationsResponse {

                    /**
                     * Constructs a new ListWorkstationsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.workstations.v1beta.IListWorkstationsResponse);

                    /** ListWorkstationsResponse workstations. */
                    public workstations: google.cloud.workstations.v1beta.IWorkstation[];

                    /** ListWorkstationsResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListWorkstationsResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListWorkstationsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListWorkstationsResponse instance
                     */
                    public static create(properties?: google.cloud.workstations.v1beta.IListWorkstationsResponse): google.cloud.workstations.v1beta.ListWorkstationsResponse;

                    /**
                     * Encodes the specified ListWorkstationsResponse message. Does not implicitly {@link google.cloud.workstations.v1beta.ListWorkstationsResponse.verify|verify} messages.
                     * @param message ListWorkstationsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.workstations.v1beta.IListWorkstationsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListWorkstationsResponse message, length delimited. Does not implicitly {@link google.cloud.workstations.v1beta.ListWorkstationsResponse.verify|verify} messages.
                     * @param message ListWorkstationsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.workstations.v1beta.IListWorkstationsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListWorkstationsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListWorkstationsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.workstations.v1beta.ListWorkstationsResponse;

                    /**
                     * Decodes a ListWorkstationsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListWorkstationsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.workstations.v1beta.ListWorkstationsResponse;

                    /**
                     * Verifies a ListWorkstationsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListWorkstationsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListWorkstationsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.workstations.v1beta.ListWorkstationsResponse;

                    /**
                     * Creates a plain object from a ListWorkstationsResponse message. Also converts values to other types if specified.
                     * @param message ListWorkstationsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.workstations.v1beta.ListWorkstationsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListWorkstationsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListWorkstationsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListUsableWorkstationsRequest. */
                interface IListUsableWorkstationsRequest {

                    /** ListUsableWorkstationsRequest parent */
                    parent?: (string|null);

                    /** ListUsableWorkstationsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListUsableWorkstationsRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListUsableWorkstationsRequest. */
                class ListUsableWorkstationsRequest implements IListUsableWorkstationsRequest {

                    /**
                     * Constructs a new ListUsableWorkstationsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.workstations.v1beta.IListUsableWorkstationsRequest);

                    /** ListUsableWorkstationsRequest parent. */
                    public parent: string;

                    /** ListUsableWorkstationsRequest pageSize. */
                    public pageSize: number;

                    /** ListUsableWorkstationsRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListUsableWorkstationsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListUsableWorkstationsRequest instance
                     */
                    public static create(properties?: google.cloud.workstations.v1beta.IListUsableWorkstationsRequest): google.cloud.workstations.v1beta.ListUsableWorkstationsRequest;

                    /**
                     * Encodes the specified ListUsableWorkstationsRequest message. Does not implicitly {@link google.cloud.workstations.v1beta.ListUsableWorkstationsRequest.verify|verify} messages.
                     * @param message ListUsableWorkstationsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.workstations.v1beta.IListUsableWorkstationsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListUsableWorkstationsRequest message, length delimited. Does not implicitly {@link google.cloud.workstations.v1beta.ListUsableWorkstationsRequest.verify|verify} messages.
                     * @param message ListUsableWorkstationsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.workstations.v1beta.IListUsableWorkstationsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListUsableWorkstationsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListUsableWorkstationsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.workstations.v1beta.ListUsableWorkstationsRequest;

                    /**
                     * Decodes a ListUsableWorkstationsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListUsableWorkstationsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.workstations.v1beta.ListUsableWorkstationsRequest;

                    /**
                     * Verifies a ListUsableWorkstationsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListUsableWorkstationsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListUsableWorkstationsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.workstations.v1beta.ListUsableWorkstationsRequest;

                    /**
                     * Creates a plain object from a ListUsableWorkstationsRequest message. Also converts values to other types if specified.
                     * @param message ListUsableWorkstationsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.workstations.v1beta.ListUsableWorkstationsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListUsableWorkstationsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListUsableWorkstationsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListUsableWorkstationsResponse. */
                interface IListUsableWorkstationsResponse {

                    /** ListUsableWorkstationsResponse workstations */
                    workstations?: (google.cloud.workstations.v1beta.IWorkstation[]|null);

                    /** ListUsableWorkstationsResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListUsableWorkstationsResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a ListUsableWorkstationsResponse. */
                class ListUsableWorkstationsResponse implements IListUsableWorkstationsResponse {

                    /**
                     * Constructs a new ListUsableWorkstationsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.workstations.v1beta.IListUsableWorkstationsResponse);

                    /** ListUsableWorkstationsResponse workstations. */
                    public workstations: google.cloud.workstations.v1beta.IWorkstation[];

                    /** ListUsableWorkstationsResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListUsableWorkstationsResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListUsableWorkstationsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListUsableWorkstationsResponse instance
                     */
                    public static create(properties?: google.cloud.workstations.v1beta.IListUsableWorkstationsResponse): google.cloud.workstations.v1beta.ListUsableWorkstationsResponse;

                    /**
                     * Encodes the specified ListUsableWorkstationsResponse message. Does not implicitly {@link google.cloud.workstations.v1beta.ListUsableWorkstationsResponse.verify|verify} messages.
                     * @param message ListUsableWorkstationsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.workstations.v1beta.IListUsableWorkstationsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListUsableWorkstationsResponse message, length delimited. Does not implicitly {@link google.cloud.workstations.v1beta.ListUsableWorkstationsResponse.verify|verify} messages.
                     * @param message ListUsableWorkstationsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.workstations.v1beta.IListUsableWorkstationsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListUsableWorkstationsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListUsableWorkstationsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.workstations.v1beta.ListUsableWorkstationsResponse;

                    /**
                     * Decodes a ListUsableWorkstationsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListUsableWorkstationsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.workstations.v1beta.ListUsableWorkstationsResponse;

                    /**
                     * Verifies a ListUsableWorkstationsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListUsableWorkstationsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListUsableWorkstationsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.workstations.v1beta.ListUsableWorkstationsResponse;

                    /**
                     * Creates a plain object from a ListUsableWorkstationsResponse message. Also converts values to other types if specified.
                     * @param message ListUsableWorkstationsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.workstations.v1beta.ListUsableWorkstationsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListUsableWorkstationsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListUsableWorkstationsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CreateWorkstationRequest. */
                interface ICreateWorkstationRequest {

                    /** CreateWorkstationRequest parent */
                    parent?: (string|null);

                    /** CreateWorkstationRequest workstationId */
                    workstationId?: (string|null);

                    /** CreateWorkstationRequest workstation */
                    workstation?: (google.cloud.workstations.v1beta.IWorkstation|null);

                    /** CreateWorkstationRequest validateOnly */
                    validateOnly?: (boolean|null);
                }

                /** Represents a CreateWorkstationRequest. */
                class CreateWorkstationRequest implements ICreateWorkstationRequest {

                    /**
                     * Constructs a new CreateWorkstationRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.workstations.v1beta.ICreateWorkstationRequest);

                    /** CreateWorkstationRequest parent. */
                    public parent: string;

                    /** CreateWorkstationRequest workstationId. */
                    public workstationId: string;

                    /** CreateWorkstationRequest workstation. */
                    public workstation?: (google.cloud.workstations.v1beta.IWorkstation|null);

                    /** CreateWorkstationRequest validateOnly. */
                    public validateOnly: boolean;

                    /**
                     * Creates a new CreateWorkstationRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateWorkstationRequest instance
                     */
                    public static create(properties?: google.cloud.workstations.v1beta.ICreateWorkstationRequest): google.cloud.workstations.v1beta.CreateWorkstationRequest;

                    /**
                     * Encodes the specified CreateWorkstationRequest message. Does not implicitly {@link google.cloud.workstations.v1beta.CreateWorkstationRequest.verify|verify} messages.
                     * @param message CreateWorkstationRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.workstations.v1beta.ICreateWorkstationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateWorkstationRequest message, length delimited. Does not implicitly {@link google.cloud.workstations.v1beta.CreateWorkstationRequest.verify|verify} messages.
                     * @param message CreateWorkstationRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.workstations.v1beta.ICreateWorkstationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateWorkstationRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateWorkstationRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.workstations.v1beta.CreateWorkstationRequest;

                    /**
                     * Decodes a CreateWorkstationRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateWorkstationRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.workstations.v1beta.CreateWorkstationRequest;

                    /**
                     * Verifies a CreateWorkstationRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateWorkstationRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateWorkstationRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.workstations.v1beta.CreateWorkstationRequest;

                    /**
                     * Creates a plain object from a CreateWorkstationRequest message. Also converts values to other types if specified.
                     * @param message CreateWorkstationRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.workstations.v1beta.CreateWorkstationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateWorkstationRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateWorkstationRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpdateWorkstationRequest. */
                interface IUpdateWorkstationRequest {

                    /** UpdateWorkstationRequest workstation */
                    workstation?: (google.cloud.workstations.v1beta.IWorkstation|null);

                    /** UpdateWorkstationRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateWorkstationRequest validateOnly */
                    validateOnly?: (boolean|null);

                    /** UpdateWorkstationRequest allowMissing */
                    allowMissing?: (boolean|null);
                }

                /** Represents an UpdateWorkstationRequest. */
                class UpdateWorkstationRequest implements IUpdateWorkstationRequest {

                    /**
                     * Constructs a new UpdateWorkstationRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.workstations.v1beta.IUpdateWorkstationRequest);

                    /** UpdateWorkstationRequest workstation. */
                    public workstation?: (google.cloud.workstations.v1beta.IWorkstation|null);

                    /** UpdateWorkstationRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateWorkstationRequest validateOnly. */
                    public validateOnly: boolean;

                    /** UpdateWorkstationRequest allowMissing. */
                    public allowMissing: boolean;

                    /**
                     * Creates a new UpdateWorkstationRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateWorkstationRequest instance
                     */
                    public static create(properties?: google.cloud.workstations.v1beta.IUpdateWorkstationRequest): google.cloud.workstations.v1beta.UpdateWorkstationRequest;

                    /**
                     * Encodes the specified UpdateWorkstationRequest message. Does not implicitly {@link google.cloud.workstations.v1beta.UpdateWorkstationRequest.verify|verify} messages.
                     * @param message UpdateWorkstationRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.workstations.v1beta.IUpdateWorkstationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateWorkstationRequest message, length delimited. Does not implicitly {@link google.cloud.workstations.v1beta.UpdateWorkstationRequest.verify|verify} messages.
                     * @param message UpdateWorkstationRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.workstations.v1beta.IUpdateWorkstationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateWorkstationRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateWorkstationRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.workstations.v1beta.UpdateWorkstationRequest;

                    /**
                     * Decodes an UpdateWorkstationRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateWorkstationRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.workstations.v1beta.UpdateWorkstationRequest;

                    /**
                     * Verifies an UpdateWorkstationRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateWorkstationRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateWorkstationRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.workstations.v1beta.UpdateWorkstationRequest;

                    /**
                     * Creates a plain object from an UpdateWorkstationRequest message. Also converts values to other types if specified.
                     * @param message UpdateWorkstationRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.workstations.v1beta.UpdateWorkstationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateWorkstationRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdateWorkstationRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeleteWorkstationRequest. */
                interface IDeleteWorkstationRequest {

                    /** DeleteWorkstationRequest name */
                    name?: (string|null);

                    /** DeleteWorkstationRequest validateOnly */
                    validateOnly?: (boolean|null);

                    /** DeleteWorkstationRequest etag */
                    etag?: (string|null);
                }

                /** Represents a DeleteWorkstationRequest. */
                class DeleteWorkstationRequest implements IDeleteWorkstationRequest {

                    /**
                     * Constructs a new DeleteWorkstationRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.workstations.v1beta.IDeleteWorkstationRequest);

                    /** DeleteWorkstationRequest name. */
                    public name: string;

                    /** DeleteWorkstationRequest validateOnly. */
                    public validateOnly: boolean;

                    /** DeleteWorkstationRequest etag. */
                    public etag: string;

                    /**
                     * Creates a new DeleteWorkstationRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteWorkstationRequest instance
                     */
                    public static create(properties?: google.cloud.workstations.v1beta.IDeleteWorkstationRequest): google.cloud.workstations.v1beta.DeleteWorkstationRequest;

                    /**
                     * Encodes the specified DeleteWorkstationRequest message. Does not implicitly {@link google.cloud.workstations.v1beta.DeleteWorkstationRequest.verify|verify} messages.
                     * @param message DeleteWorkstationRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.workstations.v1beta.IDeleteWorkstationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteWorkstationRequest message, length delimited. Does not implicitly {@link google.cloud.workstations.v1beta.DeleteWorkstationRequest.verify|verify} messages.
                     * @param message DeleteWorkstationRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.workstations.v1beta.IDeleteWorkstationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteWorkstationRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteWorkstationRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.workstations.v1beta.DeleteWorkstationRequest;

                    /**
                     * Decodes a DeleteWorkstationRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteWorkstationRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.workstations.v1beta.DeleteWorkstationRequest;

                    /**
                     * Verifies a DeleteWorkstationRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteWorkstationRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteWorkstationRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.workstations.v1beta.DeleteWorkstationRequest;

                    /**
                     * Creates a plain object from a DeleteWorkstationRequest message. Also converts values to other types if specified.
                     * @param message DeleteWorkstationRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.workstations.v1beta.DeleteWorkstationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteWorkstationRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeleteWorkstationRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a StartWorkstationRequest. */
                interface IStartWorkstationRequest {

                    /** StartWorkstationRequest name */
                    name?: (string|null);

                    /** StartWorkstationRequest validateOnly */
                    validateOnly?: (boolean|null);

                    /** StartWorkstationRequest etag */
                    etag?: (string|null);
                }

                /** Represents a StartWorkstationRequest. */
                class StartWorkstationRequest implements IStartWorkstationRequest {

                    /**
                     * Constructs a new StartWorkstationRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.workstations.v1beta.IStartWorkstationRequest);

                    /** StartWorkstationRequest name. */
                    public name: string;

                    /** StartWorkstationRequest validateOnly. */
                    public validateOnly: boolean;

                    /** StartWorkstationRequest etag. */
                    public etag: string;

                    /**
                     * Creates a new StartWorkstationRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns StartWorkstationRequest instance
                     */
                    public static create(properties?: google.cloud.workstations.v1beta.IStartWorkstationRequest): google.cloud.workstations.v1beta.StartWorkstationRequest;

                    /**
                     * Encodes the specified StartWorkstationRequest message. Does not implicitly {@link google.cloud.workstations.v1beta.StartWorkstationRequest.verify|verify} messages.
                     * @param message StartWorkstationRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.workstations.v1beta.IStartWorkstationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified StartWorkstationRequest message, length delimited. Does not implicitly {@link google.cloud.workstations.v1beta.StartWorkstationRequest.verify|verify} messages.
                     * @param message StartWorkstationRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.workstations.v1beta.IStartWorkstationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a StartWorkstationRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns StartWorkstationRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.workstations.v1beta.StartWorkstationRequest;

                    /**
                     * Decodes a StartWorkstationRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns StartWorkstationRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.workstations.v1beta.StartWorkstationRequest;

                    /**
                     * Verifies a StartWorkstationRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a StartWorkstationRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns StartWorkstationRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.workstations.v1beta.StartWorkstationRequest;

                    /**
                     * Creates a plain object from a StartWorkstationRequest message. Also converts values to other types if specified.
                     * @param message StartWorkstationRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.workstations.v1beta.StartWorkstationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this StartWorkstationRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for StartWorkstationRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a StopWorkstationRequest. */
                interface IStopWorkstationRequest {

                    /** StopWorkstationRequest name */
                    name?: (string|null);

                    /** StopWorkstationRequest validateOnly */
                    validateOnly?: (boolean|null);

                    /** StopWorkstationRequest etag */
                    etag?: (string|null);
                }

                /** Represents a StopWorkstationRequest. */
                class StopWorkstationRequest implements IStopWorkstationRequest {

                    /**
                     * Constructs a new StopWorkstationRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.workstations.v1beta.IStopWorkstationRequest);

                    /** StopWorkstationRequest name. */
                    public name: string;

                    /** StopWorkstationRequest validateOnly. */
                    public validateOnly: boolean;

                    /** StopWorkstationRequest etag. */
                    public etag: string;

                    /**
                     * Creates a new StopWorkstationRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns StopWorkstationRequest instance
                     */
                    public static create(properties?: google.cloud.workstations.v1beta.IStopWorkstationRequest): google.cloud.workstations.v1beta.StopWorkstationRequest;

                    /**
                     * Encodes the specified StopWorkstationRequest message. Does not implicitly {@link google.cloud.workstations.v1beta.StopWorkstationRequest.verify|verify} messages.
                     * @param message StopWorkstationRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.workstations.v1beta.IStopWorkstationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified StopWorkstationRequest message, length delimited. Does not implicitly {@link google.cloud.workstations.v1beta.StopWorkstationRequest.verify|verify} messages.
                     * @param message StopWorkstationRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.workstations.v1beta.IStopWorkstationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a StopWorkstationRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns StopWorkstationRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.workstations.v1beta.StopWorkstationRequest;

                    /**
                     * Decodes a StopWorkstationRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns StopWorkstationRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.workstations.v1beta.StopWorkstationRequest;

                    /**
                     * Verifies a StopWorkstationRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a StopWorkstationRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns StopWorkstationRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.workstations.v1beta.StopWorkstationRequest;

                    /**
                     * Creates a plain object from a StopWorkstationRequest message. Also converts values to other types if specified.
                     * @param message StopWorkstationRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.workstations.v1beta.StopWorkstationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this StopWorkstationRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for StopWorkstationRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GenerateAccessTokenRequest. */
                interface IGenerateAccessTokenRequest {

                    /** GenerateAccessTokenRequest expireTime */
                    expireTime?: (google.protobuf.ITimestamp|null);

                    /** GenerateAccessTokenRequest ttl */
                    ttl?: (google.protobuf.IDuration|null);

                    /** GenerateAccessTokenRequest workstation */
                    workstation?: (string|null);
                }

                /** Represents a GenerateAccessTokenRequest. */
                class GenerateAccessTokenRequest implements IGenerateAccessTokenRequest {

                    /**
                     * Constructs a new GenerateAccessTokenRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.workstations.v1beta.IGenerateAccessTokenRequest);

                    /** GenerateAccessTokenRequest expireTime. */
                    public expireTime?: (google.protobuf.ITimestamp|null);

                    /** GenerateAccessTokenRequest ttl. */
                    public ttl?: (google.protobuf.IDuration|null);

                    /** GenerateAccessTokenRequest workstation. */
                    public workstation: string;

                    /** GenerateAccessTokenRequest expiration. */
                    public expiration?: ("expireTime"|"ttl");

                    /**
                     * Creates a new GenerateAccessTokenRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GenerateAccessTokenRequest instance
                     */
                    public static create(properties?: google.cloud.workstations.v1beta.IGenerateAccessTokenRequest): google.cloud.workstations.v1beta.GenerateAccessTokenRequest;

                    /**
                     * Encodes the specified GenerateAccessTokenRequest message. Does not implicitly {@link google.cloud.workstations.v1beta.GenerateAccessTokenRequest.verify|verify} messages.
                     * @param message GenerateAccessTokenRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.workstations.v1beta.IGenerateAccessTokenRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GenerateAccessTokenRequest message, length delimited. Does not implicitly {@link google.cloud.workstations.v1beta.GenerateAccessTokenRequest.verify|verify} messages.
                     * @param message GenerateAccessTokenRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.workstations.v1beta.IGenerateAccessTokenRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GenerateAccessTokenRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GenerateAccessTokenRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.workstations.v1beta.GenerateAccessTokenRequest;

                    /**
                     * Decodes a GenerateAccessTokenRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GenerateAccessTokenRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.workstations.v1beta.GenerateAccessTokenRequest;

                    /**
                     * Verifies a GenerateAccessTokenRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GenerateAccessTokenRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GenerateAccessTokenRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.workstations.v1beta.GenerateAccessTokenRequest;

                    /**
                     * Creates a plain object from a GenerateAccessTokenRequest message. Also converts values to other types if specified.
                     * @param message GenerateAccessTokenRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.workstations.v1beta.GenerateAccessTokenRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GenerateAccessTokenRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GenerateAccessTokenRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GenerateAccessTokenResponse. */
                interface IGenerateAccessTokenResponse {

                    /** GenerateAccessTokenResponse accessToken */
                    accessToken?: (string|null);

                    /** GenerateAccessTokenResponse expireTime */
                    expireTime?: (google.protobuf.ITimestamp|null);
                }

                /** Represents a GenerateAccessTokenResponse. */
                class GenerateAccessTokenResponse implements IGenerateAccessTokenResponse {

                    /**
                     * Constructs a new GenerateAccessTokenResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.workstations.v1beta.IGenerateAccessTokenResponse);

                    /** GenerateAccessTokenResponse accessToken. */
                    public accessToken: string;

                    /** GenerateAccessTokenResponse expireTime. */
                    public expireTime?: (google.protobuf.ITimestamp|null);

                    /**
                     * Creates a new GenerateAccessTokenResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GenerateAccessTokenResponse instance
                     */
                    public static create(properties?: google.cloud.workstations.v1beta.IGenerateAccessTokenResponse): google.cloud.workstations.v1beta.GenerateAccessTokenResponse;

                    /**
                     * Encodes the specified GenerateAccessTokenResponse message. Does not implicitly {@link google.cloud.workstations.v1beta.GenerateAccessTokenResponse.verify|verify} messages.
                     * @param message GenerateAccessTokenResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.workstations.v1beta.IGenerateAccessTokenResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GenerateAccessTokenResponse message, length delimited. Does not implicitly {@link google.cloud.workstations.v1beta.GenerateAccessTokenResponse.verify|verify} messages.
                     * @param message GenerateAccessTokenResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.workstations.v1beta.IGenerateAccessTokenResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GenerateAccessTokenResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GenerateAccessTokenResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.workstations.v1beta.GenerateAccessTokenResponse;

                    /**
                     * Decodes a GenerateAccessTokenResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GenerateAccessTokenResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.workstations.v1beta.GenerateAccessTokenResponse;

                    /**
                     * Verifies a GenerateAccessTokenResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GenerateAccessTokenResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GenerateAccessTokenResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.workstations.v1beta.GenerateAccessTokenResponse;

                    /**
                     * Creates a plain object from a GenerateAccessTokenResponse message. Also converts values to other types if specified.
                     * @param message GenerateAccessTokenResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.workstations.v1beta.GenerateAccessTokenResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GenerateAccessTokenResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GenerateAccessTokenResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

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
                    constructor(properties?: google.cloud.workstations.v1beta.IOperationMetadata);

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
                    public static create(properties?: google.cloud.workstations.v1beta.IOperationMetadata): google.cloud.workstations.v1beta.OperationMetadata;

                    /**
                     * Encodes the specified OperationMetadata message. Does not implicitly {@link google.cloud.workstations.v1beta.OperationMetadata.verify|verify} messages.
                     * @param message OperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.workstations.v1beta.IOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified OperationMetadata message, length delimited. Does not implicitly {@link google.cloud.workstations.v1beta.OperationMetadata.verify|verify} messages.
                     * @param message OperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.workstations.v1beta.IOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an OperationMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns OperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.workstations.v1beta.OperationMetadata;

                    /**
                     * Decodes an OperationMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns OperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.workstations.v1beta.OperationMetadata;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.workstations.v1beta.OperationMetadata;

                    /**
                     * Creates a plain object from an OperationMetadata message. Also converts values to other types if specified.
                     * @param message OperationMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.workstations.v1beta.OperationMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
}
