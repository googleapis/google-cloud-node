// Copyright 2023 Google LLC
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

        /** Namespace tpu. */
        namespace tpu {

            /** Namespace v1. */
            namespace v1 {

                /** Represents a Tpu */
                class Tpu extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new Tpu service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new Tpu service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Tpu;

                    /**
                     * Calls ListNodes.
                     * @param request ListNodesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListNodesResponse
                     */
                    public listNodes(request: google.cloud.tpu.v1.IListNodesRequest, callback: google.cloud.tpu.v1.Tpu.ListNodesCallback): void;

                    /**
                     * Calls ListNodes.
                     * @param request ListNodesRequest message or plain object
                     * @returns Promise
                     */
                    public listNodes(request: google.cloud.tpu.v1.IListNodesRequest): Promise<google.cloud.tpu.v1.ListNodesResponse>;

                    /**
                     * Calls GetNode.
                     * @param request GetNodeRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Node
                     */
                    public getNode(request: google.cloud.tpu.v1.IGetNodeRequest, callback: google.cloud.tpu.v1.Tpu.GetNodeCallback): void;

                    /**
                     * Calls GetNode.
                     * @param request GetNodeRequest message or plain object
                     * @returns Promise
                     */
                    public getNode(request: google.cloud.tpu.v1.IGetNodeRequest): Promise<google.cloud.tpu.v1.Node>;

                    /**
                     * Calls CreateNode.
                     * @param request CreateNodeRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createNode(request: google.cloud.tpu.v1.ICreateNodeRequest, callback: google.cloud.tpu.v1.Tpu.CreateNodeCallback): void;

                    /**
                     * Calls CreateNode.
                     * @param request CreateNodeRequest message or plain object
                     * @returns Promise
                     */
                    public createNode(request: google.cloud.tpu.v1.ICreateNodeRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls DeleteNode.
                     * @param request DeleteNodeRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deleteNode(request: google.cloud.tpu.v1.IDeleteNodeRequest, callback: google.cloud.tpu.v1.Tpu.DeleteNodeCallback): void;

                    /**
                     * Calls DeleteNode.
                     * @param request DeleteNodeRequest message or plain object
                     * @returns Promise
                     */
                    public deleteNode(request: google.cloud.tpu.v1.IDeleteNodeRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ReimageNode.
                     * @param request ReimageNodeRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public reimageNode(request: google.cloud.tpu.v1.IReimageNodeRequest, callback: google.cloud.tpu.v1.Tpu.ReimageNodeCallback): void;

                    /**
                     * Calls ReimageNode.
                     * @param request ReimageNodeRequest message or plain object
                     * @returns Promise
                     */
                    public reimageNode(request: google.cloud.tpu.v1.IReimageNodeRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls StopNode.
                     * @param request StopNodeRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public stopNode(request: google.cloud.tpu.v1.IStopNodeRequest, callback: google.cloud.tpu.v1.Tpu.StopNodeCallback): void;

                    /**
                     * Calls StopNode.
                     * @param request StopNodeRequest message or plain object
                     * @returns Promise
                     */
                    public stopNode(request: google.cloud.tpu.v1.IStopNodeRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls StartNode.
                     * @param request StartNodeRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public startNode(request: google.cloud.tpu.v1.IStartNodeRequest, callback: google.cloud.tpu.v1.Tpu.StartNodeCallback): void;

                    /**
                     * Calls StartNode.
                     * @param request StartNodeRequest message or plain object
                     * @returns Promise
                     */
                    public startNode(request: google.cloud.tpu.v1.IStartNodeRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ListTensorFlowVersions.
                     * @param request ListTensorFlowVersionsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListTensorFlowVersionsResponse
                     */
                    public listTensorFlowVersions(request: google.cloud.tpu.v1.IListTensorFlowVersionsRequest, callback: google.cloud.tpu.v1.Tpu.ListTensorFlowVersionsCallback): void;

                    /**
                     * Calls ListTensorFlowVersions.
                     * @param request ListTensorFlowVersionsRequest message or plain object
                     * @returns Promise
                     */
                    public listTensorFlowVersions(request: google.cloud.tpu.v1.IListTensorFlowVersionsRequest): Promise<google.cloud.tpu.v1.ListTensorFlowVersionsResponse>;

                    /**
                     * Calls GetTensorFlowVersion.
                     * @param request GetTensorFlowVersionRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and TensorFlowVersion
                     */
                    public getTensorFlowVersion(request: google.cloud.tpu.v1.IGetTensorFlowVersionRequest, callback: google.cloud.tpu.v1.Tpu.GetTensorFlowVersionCallback): void;

                    /**
                     * Calls GetTensorFlowVersion.
                     * @param request GetTensorFlowVersionRequest message or plain object
                     * @returns Promise
                     */
                    public getTensorFlowVersion(request: google.cloud.tpu.v1.IGetTensorFlowVersionRequest): Promise<google.cloud.tpu.v1.TensorFlowVersion>;

                    /**
                     * Calls ListAcceleratorTypes.
                     * @param request ListAcceleratorTypesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListAcceleratorTypesResponse
                     */
                    public listAcceleratorTypes(request: google.cloud.tpu.v1.IListAcceleratorTypesRequest, callback: google.cloud.tpu.v1.Tpu.ListAcceleratorTypesCallback): void;

                    /**
                     * Calls ListAcceleratorTypes.
                     * @param request ListAcceleratorTypesRequest message or plain object
                     * @returns Promise
                     */
                    public listAcceleratorTypes(request: google.cloud.tpu.v1.IListAcceleratorTypesRequest): Promise<google.cloud.tpu.v1.ListAcceleratorTypesResponse>;

                    /**
                     * Calls GetAcceleratorType.
                     * @param request GetAcceleratorTypeRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and AcceleratorType
                     */
                    public getAcceleratorType(request: google.cloud.tpu.v1.IGetAcceleratorTypeRequest, callback: google.cloud.tpu.v1.Tpu.GetAcceleratorTypeCallback): void;

                    /**
                     * Calls GetAcceleratorType.
                     * @param request GetAcceleratorTypeRequest message or plain object
                     * @returns Promise
                     */
                    public getAcceleratorType(request: google.cloud.tpu.v1.IGetAcceleratorTypeRequest): Promise<google.cloud.tpu.v1.AcceleratorType>;
                }

                namespace Tpu {

                    /**
                     * Callback as used by {@link google.cloud.tpu.v1.Tpu|listNodes}.
                     * @param error Error, if any
                     * @param [response] ListNodesResponse
                     */
                    type ListNodesCallback = (error: (Error|null), response?: google.cloud.tpu.v1.ListNodesResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.tpu.v1.Tpu|getNode}.
                     * @param error Error, if any
                     * @param [response] Node
                     */
                    type GetNodeCallback = (error: (Error|null), response?: google.cloud.tpu.v1.Node) => void;

                    /**
                     * Callback as used by {@link google.cloud.tpu.v1.Tpu|createNode}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateNodeCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.tpu.v1.Tpu|deleteNode}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeleteNodeCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.tpu.v1.Tpu|reimageNode}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type ReimageNodeCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.tpu.v1.Tpu|stopNode}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type StopNodeCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.tpu.v1.Tpu|startNode}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type StartNodeCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.tpu.v1.Tpu|listTensorFlowVersions}.
                     * @param error Error, if any
                     * @param [response] ListTensorFlowVersionsResponse
                     */
                    type ListTensorFlowVersionsCallback = (error: (Error|null), response?: google.cloud.tpu.v1.ListTensorFlowVersionsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.tpu.v1.Tpu|getTensorFlowVersion}.
                     * @param error Error, if any
                     * @param [response] TensorFlowVersion
                     */
                    type GetTensorFlowVersionCallback = (error: (Error|null), response?: google.cloud.tpu.v1.TensorFlowVersion) => void;

                    /**
                     * Callback as used by {@link google.cloud.tpu.v1.Tpu|listAcceleratorTypes}.
                     * @param error Error, if any
                     * @param [response] ListAcceleratorTypesResponse
                     */
                    type ListAcceleratorTypesCallback = (error: (Error|null), response?: google.cloud.tpu.v1.ListAcceleratorTypesResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.tpu.v1.Tpu|getAcceleratorType}.
                     * @param error Error, if any
                     * @param [response] AcceleratorType
                     */
                    type GetAcceleratorTypeCallback = (error: (Error|null), response?: google.cloud.tpu.v1.AcceleratorType) => void;
                }

                /** Properties of a SchedulingConfig. */
                interface ISchedulingConfig {

                    /** SchedulingConfig preemptible */
                    preemptible?: (boolean|null);

                    /** SchedulingConfig reserved */
                    reserved?: (boolean|null);
                }

                /** Represents a SchedulingConfig. */
                class SchedulingConfig implements ISchedulingConfig {

                    /**
                     * Constructs a new SchedulingConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tpu.v1.ISchedulingConfig);

                    /** SchedulingConfig preemptible. */
                    public preemptible: boolean;

                    /** SchedulingConfig reserved. */
                    public reserved: boolean;

                    /**
                     * Creates a new SchedulingConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SchedulingConfig instance
                     */
                    public static create(properties?: google.cloud.tpu.v1.ISchedulingConfig): google.cloud.tpu.v1.SchedulingConfig;

                    /**
                     * Encodes the specified SchedulingConfig message. Does not implicitly {@link google.cloud.tpu.v1.SchedulingConfig.verify|verify} messages.
                     * @param message SchedulingConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tpu.v1.ISchedulingConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SchedulingConfig message, length delimited. Does not implicitly {@link google.cloud.tpu.v1.SchedulingConfig.verify|verify} messages.
                     * @param message SchedulingConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tpu.v1.ISchedulingConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SchedulingConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SchedulingConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tpu.v1.SchedulingConfig;

                    /**
                     * Decodes a SchedulingConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SchedulingConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tpu.v1.SchedulingConfig;

                    /**
                     * Verifies a SchedulingConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SchedulingConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SchedulingConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tpu.v1.SchedulingConfig;

                    /**
                     * Creates a plain object from a SchedulingConfig message. Also converts values to other types if specified.
                     * @param message SchedulingConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tpu.v1.SchedulingConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SchedulingConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for SchedulingConfig
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a NetworkEndpoint. */
                interface INetworkEndpoint {

                    /** NetworkEndpoint ipAddress */
                    ipAddress?: (string|null);

                    /** NetworkEndpoint port */
                    port?: (number|null);
                }

                /** Represents a NetworkEndpoint. */
                class NetworkEndpoint implements INetworkEndpoint {

                    /**
                     * Constructs a new NetworkEndpoint.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tpu.v1.INetworkEndpoint);

                    /** NetworkEndpoint ipAddress. */
                    public ipAddress: string;

                    /** NetworkEndpoint port. */
                    public port: number;

                    /**
                     * Creates a new NetworkEndpoint instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns NetworkEndpoint instance
                     */
                    public static create(properties?: google.cloud.tpu.v1.INetworkEndpoint): google.cloud.tpu.v1.NetworkEndpoint;

                    /**
                     * Encodes the specified NetworkEndpoint message. Does not implicitly {@link google.cloud.tpu.v1.NetworkEndpoint.verify|verify} messages.
                     * @param message NetworkEndpoint message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tpu.v1.INetworkEndpoint, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified NetworkEndpoint message, length delimited. Does not implicitly {@link google.cloud.tpu.v1.NetworkEndpoint.verify|verify} messages.
                     * @param message NetworkEndpoint message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tpu.v1.INetworkEndpoint, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a NetworkEndpoint message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns NetworkEndpoint
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tpu.v1.NetworkEndpoint;

                    /**
                     * Decodes a NetworkEndpoint message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns NetworkEndpoint
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tpu.v1.NetworkEndpoint;

                    /**
                     * Verifies a NetworkEndpoint message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a NetworkEndpoint message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns NetworkEndpoint
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tpu.v1.NetworkEndpoint;

                    /**
                     * Creates a plain object from a NetworkEndpoint message. Also converts values to other types if specified.
                     * @param message NetworkEndpoint
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tpu.v1.NetworkEndpoint, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this NetworkEndpoint to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for NetworkEndpoint
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Node. */
                interface INode {

                    /** Node name */
                    name?: (string|null);

                    /** Node description */
                    description?: (string|null);

                    /** Node acceleratorType */
                    acceleratorType?: (string|null);

                    /** Node ipAddress */
                    ipAddress?: (string|null);

                    /** Node port */
                    port?: (string|null);

                    /** Node state */
                    state?: (google.cloud.tpu.v1.Node.State|keyof typeof google.cloud.tpu.v1.Node.State|null);

                    /** Node healthDescription */
                    healthDescription?: (string|null);

                    /** Node tensorflowVersion */
                    tensorflowVersion?: (string|null);

                    /** Node network */
                    network?: (string|null);

                    /** Node cidrBlock */
                    cidrBlock?: (string|null);

                    /** Node serviceAccount */
                    serviceAccount?: (string|null);

                    /** Node createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** Node schedulingConfig */
                    schedulingConfig?: (google.cloud.tpu.v1.ISchedulingConfig|null);

                    /** Node networkEndpoints */
                    networkEndpoints?: (google.cloud.tpu.v1.INetworkEndpoint[]|null);

                    /** Node health */
                    health?: (google.cloud.tpu.v1.Node.Health|keyof typeof google.cloud.tpu.v1.Node.Health|null);

                    /** Node labels */
                    labels?: ({ [k: string]: string }|null);

                    /** Node useServiceNetworking */
                    useServiceNetworking?: (boolean|null);

                    /** Node apiVersion */
                    apiVersion?: (google.cloud.tpu.v1.Node.ApiVersion|keyof typeof google.cloud.tpu.v1.Node.ApiVersion|null);

                    /** Node symptoms */
                    symptoms?: (google.cloud.tpu.v1.ISymptom[]|null);
                }

                /** Represents a Node. */
                class Node implements INode {

                    /**
                     * Constructs a new Node.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tpu.v1.INode);

                    /** Node name. */
                    public name: string;

                    /** Node description. */
                    public description: string;

                    /** Node acceleratorType. */
                    public acceleratorType: string;

                    /** Node ipAddress. */
                    public ipAddress: string;

                    /** Node port. */
                    public port: string;

                    /** Node state. */
                    public state: (google.cloud.tpu.v1.Node.State|keyof typeof google.cloud.tpu.v1.Node.State);

                    /** Node healthDescription. */
                    public healthDescription: string;

                    /** Node tensorflowVersion. */
                    public tensorflowVersion: string;

                    /** Node network. */
                    public network: string;

                    /** Node cidrBlock. */
                    public cidrBlock: string;

                    /** Node serviceAccount. */
                    public serviceAccount: string;

                    /** Node createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** Node schedulingConfig. */
                    public schedulingConfig?: (google.cloud.tpu.v1.ISchedulingConfig|null);

                    /** Node networkEndpoints. */
                    public networkEndpoints: google.cloud.tpu.v1.INetworkEndpoint[];

                    /** Node health. */
                    public health: (google.cloud.tpu.v1.Node.Health|keyof typeof google.cloud.tpu.v1.Node.Health);

                    /** Node labels. */
                    public labels: { [k: string]: string };

                    /** Node useServiceNetworking. */
                    public useServiceNetworking: boolean;

                    /** Node apiVersion. */
                    public apiVersion: (google.cloud.tpu.v1.Node.ApiVersion|keyof typeof google.cloud.tpu.v1.Node.ApiVersion);

                    /** Node symptoms. */
                    public symptoms: google.cloud.tpu.v1.ISymptom[];

                    /**
                     * Creates a new Node instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Node instance
                     */
                    public static create(properties?: google.cloud.tpu.v1.INode): google.cloud.tpu.v1.Node;

                    /**
                     * Encodes the specified Node message. Does not implicitly {@link google.cloud.tpu.v1.Node.verify|verify} messages.
                     * @param message Node message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tpu.v1.INode, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Node message, length delimited. Does not implicitly {@link google.cloud.tpu.v1.Node.verify|verify} messages.
                     * @param message Node message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tpu.v1.INode, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Node message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Node
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tpu.v1.Node;

                    /**
                     * Decodes a Node message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Node
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tpu.v1.Node;

                    /**
                     * Verifies a Node message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Node message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Node
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tpu.v1.Node;

                    /**
                     * Creates a plain object from a Node message. Also converts values to other types if specified.
                     * @param message Node
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tpu.v1.Node, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Node to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Node
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace Node {

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        CREATING = 1,
                        READY = 2,
                        RESTARTING = 3,
                        REIMAGING = 4,
                        DELETING = 5,
                        REPAIRING = 6,
                        STOPPED = 8,
                        STOPPING = 9,
                        STARTING = 10,
                        PREEMPTED = 11,
                        TERMINATED = 12,
                        HIDING = 13,
                        HIDDEN = 14,
                        UNHIDING = 15
                    }

                    /** Health enum. */
                    enum Health {
                        HEALTH_UNSPECIFIED = 0,
                        HEALTHY = 1,
                        DEPRECATED_UNHEALTHY = 2,
                        TIMEOUT = 3,
                        UNHEALTHY_TENSORFLOW = 4,
                        UNHEALTHY_MAINTENANCE = 5
                    }

                    /** ApiVersion enum. */
                    enum ApiVersion {
                        API_VERSION_UNSPECIFIED = 0,
                        V1_ALPHA1 = 1,
                        V1 = 2,
                        V2_ALPHA1 = 3
                    }
                }

                /** Properties of a ListNodesRequest. */
                interface IListNodesRequest {

                    /** ListNodesRequest parent */
                    parent?: (string|null);

                    /** ListNodesRequest pageSize */
                    pageSize?: (number|null);

                    /** ListNodesRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListNodesRequest. */
                class ListNodesRequest implements IListNodesRequest {

                    /**
                     * Constructs a new ListNodesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tpu.v1.IListNodesRequest);

                    /** ListNodesRequest parent. */
                    public parent: string;

                    /** ListNodesRequest pageSize. */
                    public pageSize: number;

                    /** ListNodesRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListNodesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListNodesRequest instance
                     */
                    public static create(properties?: google.cloud.tpu.v1.IListNodesRequest): google.cloud.tpu.v1.ListNodesRequest;

                    /**
                     * Encodes the specified ListNodesRequest message. Does not implicitly {@link google.cloud.tpu.v1.ListNodesRequest.verify|verify} messages.
                     * @param message ListNodesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tpu.v1.IListNodesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListNodesRequest message, length delimited. Does not implicitly {@link google.cloud.tpu.v1.ListNodesRequest.verify|verify} messages.
                     * @param message ListNodesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tpu.v1.IListNodesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListNodesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListNodesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tpu.v1.ListNodesRequest;

                    /**
                     * Decodes a ListNodesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListNodesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tpu.v1.ListNodesRequest;

                    /**
                     * Verifies a ListNodesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListNodesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListNodesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tpu.v1.ListNodesRequest;

                    /**
                     * Creates a plain object from a ListNodesRequest message. Also converts values to other types if specified.
                     * @param message ListNodesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tpu.v1.ListNodesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListNodesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListNodesRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListNodesResponse. */
                interface IListNodesResponse {

                    /** ListNodesResponse nodes */
                    nodes?: (google.cloud.tpu.v1.INode[]|null);

                    /** ListNodesResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListNodesResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a ListNodesResponse. */
                class ListNodesResponse implements IListNodesResponse {

                    /**
                     * Constructs a new ListNodesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tpu.v1.IListNodesResponse);

                    /** ListNodesResponse nodes. */
                    public nodes: google.cloud.tpu.v1.INode[];

                    /** ListNodesResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListNodesResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListNodesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListNodesResponse instance
                     */
                    public static create(properties?: google.cloud.tpu.v1.IListNodesResponse): google.cloud.tpu.v1.ListNodesResponse;

                    /**
                     * Encodes the specified ListNodesResponse message. Does not implicitly {@link google.cloud.tpu.v1.ListNodesResponse.verify|verify} messages.
                     * @param message ListNodesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tpu.v1.IListNodesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListNodesResponse message, length delimited. Does not implicitly {@link google.cloud.tpu.v1.ListNodesResponse.verify|verify} messages.
                     * @param message ListNodesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tpu.v1.IListNodesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListNodesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListNodesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tpu.v1.ListNodesResponse;

                    /**
                     * Decodes a ListNodesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListNodesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tpu.v1.ListNodesResponse;

                    /**
                     * Verifies a ListNodesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListNodesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListNodesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tpu.v1.ListNodesResponse;

                    /**
                     * Creates a plain object from a ListNodesResponse message. Also converts values to other types if specified.
                     * @param message ListNodesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tpu.v1.ListNodesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListNodesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListNodesResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetNodeRequest. */
                interface IGetNodeRequest {

                    /** GetNodeRequest name */
                    name?: (string|null);
                }

                /** Represents a GetNodeRequest. */
                class GetNodeRequest implements IGetNodeRequest {

                    /**
                     * Constructs a new GetNodeRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tpu.v1.IGetNodeRequest);

                    /** GetNodeRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetNodeRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetNodeRequest instance
                     */
                    public static create(properties?: google.cloud.tpu.v1.IGetNodeRequest): google.cloud.tpu.v1.GetNodeRequest;

                    /**
                     * Encodes the specified GetNodeRequest message. Does not implicitly {@link google.cloud.tpu.v1.GetNodeRequest.verify|verify} messages.
                     * @param message GetNodeRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tpu.v1.IGetNodeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetNodeRequest message, length delimited. Does not implicitly {@link google.cloud.tpu.v1.GetNodeRequest.verify|verify} messages.
                     * @param message GetNodeRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tpu.v1.IGetNodeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetNodeRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetNodeRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tpu.v1.GetNodeRequest;

                    /**
                     * Decodes a GetNodeRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetNodeRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tpu.v1.GetNodeRequest;

                    /**
                     * Verifies a GetNodeRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetNodeRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetNodeRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tpu.v1.GetNodeRequest;

                    /**
                     * Creates a plain object from a GetNodeRequest message. Also converts values to other types if specified.
                     * @param message GetNodeRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tpu.v1.GetNodeRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetNodeRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetNodeRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CreateNodeRequest. */
                interface ICreateNodeRequest {

                    /** CreateNodeRequest parent */
                    parent?: (string|null);

                    /** CreateNodeRequest nodeId */
                    nodeId?: (string|null);

                    /** CreateNodeRequest node */
                    node?: (google.cloud.tpu.v1.INode|null);
                }

                /** Represents a CreateNodeRequest. */
                class CreateNodeRequest implements ICreateNodeRequest {

                    /**
                     * Constructs a new CreateNodeRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tpu.v1.ICreateNodeRequest);

                    /** CreateNodeRequest parent. */
                    public parent: string;

                    /** CreateNodeRequest nodeId. */
                    public nodeId: string;

                    /** CreateNodeRequest node. */
                    public node?: (google.cloud.tpu.v1.INode|null);

                    /**
                     * Creates a new CreateNodeRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateNodeRequest instance
                     */
                    public static create(properties?: google.cloud.tpu.v1.ICreateNodeRequest): google.cloud.tpu.v1.CreateNodeRequest;

                    /**
                     * Encodes the specified CreateNodeRequest message. Does not implicitly {@link google.cloud.tpu.v1.CreateNodeRequest.verify|verify} messages.
                     * @param message CreateNodeRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tpu.v1.ICreateNodeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateNodeRequest message, length delimited. Does not implicitly {@link google.cloud.tpu.v1.CreateNodeRequest.verify|verify} messages.
                     * @param message CreateNodeRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tpu.v1.ICreateNodeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateNodeRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateNodeRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tpu.v1.CreateNodeRequest;

                    /**
                     * Decodes a CreateNodeRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateNodeRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tpu.v1.CreateNodeRequest;

                    /**
                     * Verifies a CreateNodeRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateNodeRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateNodeRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tpu.v1.CreateNodeRequest;

                    /**
                     * Creates a plain object from a CreateNodeRequest message. Also converts values to other types if specified.
                     * @param message CreateNodeRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tpu.v1.CreateNodeRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateNodeRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateNodeRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeleteNodeRequest. */
                interface IDeleteNodeRequest {

                    /** DeleteNodeRequest name */
                    name?: (string|null);
                }

                /** Represents a DeleteNodeRequest. */
                class DeleteNodeRequest implements IDeleteNodeRequest {

                    /**
                     * Constructs a new DeleteNodeRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tpu.v1.IDeleteNodeRequest);

                    /** DeleteNodeRequest name. */
                    public name: string;

                    /**
                     * Creates a new DeleteNodeRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteNodeRequest instance
                     */
                    public static create(properties?: google.cloud.tpu.v1.IDeleteNodeRequest): google.cloud.tpu.v1.DeleteNodeRequest;

                    /**
                     * Encodes the specified DeleteNodeRequest message. Does not implicitly {@link google.cloud.tpu.v1.DeleteNodeRequest.verify|verify} messages.
                     * @param message DeleteNodeRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tpu.v1.IDeleteNodeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteNodeRequest message, length delimited. Does not implicitly {@link google.cloud.tpu.v1.DeleteNodeRequest.verify|verify} messages.
                     * @param message DeleteNodeRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tpu.v1.IDeleteNodeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteNodeRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteNodeRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tpu.v1.DeleteNodeRequest;

                    /**
                     * Decodes a DeleteNodeRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteNodeRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tpu.v1.DeleteNodeRequest;

                    /**
                     * Verifies a DeleteNodeRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteNodeRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteNodeRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tpu.v1.DeleteNodeRequest;

                    /**
                     * Creates a plain object from a DeleteNodeRequest message. Also converts values to other types if specified.
                     * @param message DeleteNodeRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tpu.v1.DeleteNodeRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteNodeRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeleteNodeRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ReimageNodeRequest. */
                interface IReimageNodeRequest {

                    /** ReimageNodeRequest name */
                    name?: (string|null);

                    /** ReimageNodeRequest tensorflowVersion */
                    tensorflowVersion?: (string|null);
                }

                /** Represents a ReimageNodeRequest. */
                class ReimageNodeRequest implements IReimageNodeRequest {

                    /**
                     * Constructs a new ReimageNodeRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tpu.v1.IReimageNodeRequest);

                    /** ReimageNodeRequest name. */
                    public name: string;

                    /** ReimageNodeRequest tensorflowVersion. */
                    public tensorflowVersion: string;

                    /**
                     * Creates a new ReimageNodeRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ReimageNodeRequest instance
                     */
                    public static create(properties?: google.cloud.tpu.v1.IReimageNodeRequest): google.cloud.tpu.v1.ReimageNodeRequest;

                    /**
                     * Encodes the specified ReimageNodeRequest message. Does not implicitly {@link google.cloud.tpu.v1.ReimageNodeRequest.verify|verify} messages.
                     * @param message ReimageNodeRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tpu.v1.IReimageNodeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ReimageNodeRequest message, length delimited. Does not implicitly {@link google.cloud.tpu.v1.ReimageNodeRequest.verify|verify} messages.
                     * @param message ReimageNodeRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tpu.v1.IReimageNodeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ReimageNodeRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ReimageNodeRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tpu.v1.ReimageNodeRequest;

                    /**
                     * Decodes a ReimageNodeRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ReimageNodeRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tpu.v1.ReimageNodeRequest;

                    /**
                     * Verifies a ReimageNodeRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ReimageNodeRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ReimageNodeRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tpu.v1.ReimageNodeRequest;

                    /**
                     * Creates a plain object from a ReimageNodeRequest message. Also converts values to other types if specified.
                     * @param message ReimageNodeRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tpu.v1.ReimageNodeRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ReimageNodeRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ReimageNodeRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a StopNodeRequest. */
                interface IStopNodeRequest {

                    /** StopNodeRequest name */
                    name?: (string|null);
                }

                /** Represents a StopNodeRequest. */
                class StopNodeRequest implements IStopNodeRequest {

                    /**
                     * Constructs a new StopNodeRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tpu.v1.IStopNodeRequest);

                    /** StopNodeRequest name. */
                    public name: string;

                    /**
                     * Creates a new StopNodeRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns StopNodeRequest instance
                     */
                    public static create(properties?: google.cloud.tpu.v1.IStopNodeRequest): google.cloud.tpu.v1.StopNodeRequest;

                    /**
                     * Encodes the specified StopNodeRequest message. Does not implicitly {@link google.cloud.tpu.v1.StopNodeRequest.verify|verify} messages.
                     * @param message StopNodeRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tpu.v1.IStopNodeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified StopNodeRequest message, length delimited. Does not implicitly {@link google.cloud.tpu.v1.StopNodeRequest.verify|verify} messages.
                     * @param message StopNodeRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tpu.v1.IStopNodeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a StopNodeRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns StopNodeRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tpu.v1.StopNodeRequest;

                    /**
                     * Decodes a StopNodeRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns StopNodeRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tpu.v1.StopNodeRequest;

                    /**
                     * Verifies a StopNodeRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a StopNodeRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns StopNodeRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tpu.v1.StopNodeRequest;

                    /**
                     * Creates a plain object from a StopNodeRequest message. Also converts values to other types if specified.
                     * @param message StopNodeRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tpu.v1.StopNodeRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this StopNodeRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for StopNodeRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a StartNodeRequest. */
                interface IStartNodeRequest {

                    /** StartNodeRequest name */
                    name?: (string|null);
                }

                /** Represents a StartNodeRequest. */
                class StartNodeRequest implements IStartNodeRequest {

                    /**
                     * Constructs a new StartNodeRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tpu.v1.IStartNodeRequest);

                    /** StartNodeRequest name. */
                    public name: string;

                    /**
                     * Creates a new StartNodeRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns StartNodeRequest instance
                     */
                    public static create(properties?: google.cloud.tpu.v1.IStartNodeRequest): google.cloud.tpu.v1.StartNodeRequest;

                    /**
                     * Encodes the specified StartNodeRequest message. Does not implicitly {@link google.cloud.tpu.v1.StartNodeRequest.verify|verify} messages.
                     * @param message StartNodeRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tpu.v1.IStartNodeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified StartNodeRequest message, length delimited. Does not implicitly {@link google.cloud.tpu.v1.StartNodeRequest.verify|verify} messages.
                     * @param message StartNodeRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tpu.v1.IStartNodeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a StartNodeRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns StartNodeRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tpu.v1.StartNodeRequest;

                    /**
                     * Decodes a StartNodeRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns StartNodeRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tpu.v1.StartNodeRequest;

                    /**
                     * Verifies a StartNodeRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a StartNodeRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns StartNodeRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tpu.v1.StartNodeRequest;

                    /**
                     * Creates a plain object from a StartNodeRequest message. Also converts values to other types if specified.
                     * @param message StartNodeRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tpu.v1.StartNodeRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this StartNodeRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for StartNodeRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a TensorFlowVersion. */
                interface ITensorFlowVersion {

                    /** TensorFlowVersion name */
                    name?: (string|null);

                    /** TensorFlowVersion version */
                    version?: (string|null);
                }

                /** Represents a TensorFlowVersion. */
                class TensorFlowVersion implements ITensorFlowVersion {

                    /**
                     * Constructs a new TensorFlowVersion.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tpu.v1.ITensorFlowVersion);

                    /** TensorFlowVersion name. */
                    public name: string;

                    /** TensorFlowVersion version. */
                    public version: string;

                    /**
                     * Creates a new TensorFlowVersion instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TensorFlowVersion instance
                     */
                    public static create(properties?: google.cloud.tpu.v1.ITensorFlowVersion): google.cloud.tpu.v1.TensorFlowVersion;

                    /**
                     * Encodes the specified TensorFlowVersion message. Does not implicitly {@link google.cloud.tpu.v1.TensorFlowVersion.verify|verify} messages.
                     * @param message TensorFlowVersion message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tpu.v1.ITensorFlowVersion, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TensorFlowVersion message, length delimited. Does not implicitly {@link google.cloud.tpu.v1.TensorFlowVersion.verify|verify} messages.
                     * @param message TensorFlowVersion message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tpu.v1.ITensorFlowVersion, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TensorFlowVersion message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TensorFlowVersion
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tpu.v1.TensorFlowVersion;

                    /**
                     * Decodes a TensorFlowVersion message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TensorFlowVersion
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tpu.v1.TensorFlowVersion;

                    /**
                     * Verifies a TensorFlowVersion message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TensorFlowVersion message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TensorFlowVersion
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tpu.v1.TensorFlowVersion;

                    /**
                     * Creates a plain object from a TensorFlowVersion message. Also converts values to other types if specified.
                     * @param message TensorFlowVersion
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tpu.v1.TensorFlowVersion, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TensorFlowVersion to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for TensorFlowVersion
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetTensorFlowVersionRequest. */
                interface IGetTensorFlowVersionRequest {

                    /** GetTensorFlowVersionRequest name */
                    name?: (string|null);
                }

                /** Represents a GetTensorFlowVersionRequest. */
                class GetTensorFlowVersionRequest implements IGetTensorFlowVersionRequest {

                    /**
                     * Constructs a new GetTensorFlowVersionRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tpu.v1.IGetTensorFlowVersionRequest);

                    /** GetTensorFlowVersionRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetTensorFlowVersionRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetTensorFlowVersionRequest instance
                     */
                    public static create(properties?: google.cloud.tpu.v1.IGetTensorFlowVersionRequest): google.cloud.tpu.v1.GetTensorFlowVersionRequest;

                    /**
                     * Encodes the specified GetTensorFlowVersionRequest message. Does not implicitly {@link google.cloud.tpu.v1.GetTensorFlowVersionRequest.verify|verify} messages.
                     * @param message GetTensorFlowVersionRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tpu.v1.IGetTensorFlowVersionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetTensorFlowVersionRequest message, length delimited. Does not implicitly {@link google.cloud.tpu.v1.GetTensorFlowVersionRequest.verify|verify} messages.
                     * @param message GetTensorFlowVersionRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tpu.v1.IGetTensorFlowVersionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetTensorFlowVersionRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetTensorFlowVersionRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tpu.v1.GetTensorFlowVersionRequest;

                    /**
                     * Decodes a GetTensorFlowVersionRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetTensorFlowVersionRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tpu.v1.GetTensorFlowVersionRequest;

                    /**
                     * Verifies a GetTensorFlowVersionRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetTensorFlowVersionRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetTensorFlowVersionRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tpu.v1.GetTensorFlowVersionRequest;

                    /**
                     * Creates a plain object from a GetTensorFlowVersionRequest message. Also converts values to other types if specified.
                     * @param message GetTensorFlowVersionRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tpu.v1.GetTensorFlowVersionRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetTensorFlowVersionRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetTensorFlowVersionRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListTensorFlowVersionsRequest. */
                interface IListTensorFlowVersionsRequest {

                    /** ListTensorFlowVersionsRequest parent */
                    parent?: (string|null);

                    /** ListTensorFlowVersionsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListTensorFlowVersionsRequest pageToken */
                    pageToken?: (string|null);

                    /** ListTensorFlowVersionsRequest filter */
                    filter?: (string|null);

                    /** ListTensorFlowVersionsRequest orderBy */
                    orderBy?: (string|null);
                }

                /** Represents a ListTensorFlowVersionsRequest. */
                class ListTensorFlowVersionsRequest implements IListTensorFlowVersionsRequest {

                    /**
                     * Constructs a new ListTensorFlowVersionsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tpu.v1.IListTensorFlowVersionsRequest);

                    /** ListTensorFlowVersionsRequest parent. */
                    public parent: string;

                    /** ListTensorFlowVersionsRequest pageSize. */
                    public pageSize: number;

                    /** ListTensorFlowVersionsRequest pageToken. */
                    public pageToken: string;

                    /** ListTensorFlowVersionsRequest filter. */
                    public filter: string;

                    /** ListTensorFlowVersionsRequest orderBy. */
                    public orderBy: string;

                    /**
                     * Creates a new ListTensorFlowVersionsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListTensorFlowVersionsRequest instance
                     */
                    public static create(properties?: google.cloud.tpu.v1.IListTensorFlowVersionsRequest): google.cloud.tpu.v1.ListTensorFlowVersionsRequest;

                    /**
                     * Encodes the specified ListTensorFlowVersionsRequest message. Does not implicitly {@link google.cloud.tpu.v1.ListTensorFlowVersionsRequest.verify|verify} messages.
                     * @param message ListTensorFlowVersionsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tpu.v1.IListTensorFlowVersionsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListTensorFlowVersionsRequest message, length delimited. Does not implicitly {@link google.cloud.tpu.v1.ListTensorFlowVersionsRequest.verify|verify} messages.
                     * @param message ListTensorFlowVersionsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tpu.v1.IListTensorFlowVersionsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListTensorFlowVersionsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListTensorFlowVersionsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tpu.v1.ListTensorFlowVersionsRequest;

                    /**
                     * Decodes a ListTensorFlowVersionsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListTensorFlowVersionsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tpu.v1.ListTensorFlowVersionsRequest;

                    /**
                     * Verifies a ListTensorFlowVersionsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListTensorFlowVersionsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListTensorFlowVersionsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tpu.v1.ListTensorFlowVersionsRequest;

                    /**
                     * Creates a plain object from a ListTensorFlowVersionsRequest message. Also converts values to other types if specified.
                     * @param message ListTensorFlowVersionsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tpu.v1.ListTensorFlowVersionsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListTensorFlowVersionsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListTensorFlowVersionsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListTensorFlowVersionsResponse. */
                interface IListTensorFlowVersionsResponse {

                    /** ListTensorFlowVersionsResponse tensorflowVersions */
                    tensorflowVersions?: (google.cloud.tpu.v1.ITensorFlowVersion[]|null);

                    /** ListTensorFlowVersionsResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListTensorFlowVersionsResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a ListTensorFlowVersionsResponse. */
                class ListTensorFlowVersionsResponse implements IListTensorFlowVersionsResponse {

                    /**
                     * Constructs a new ListTensorFlowVersionsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tpu.v1.IListTensorFlowVersionsResponse);

                    /** ListTensorFlowVersionsResponse tensorflowVersions. */
                    public tensorflowVersions: google.cloud.tpu.v1.ITensorFlowVersion[];

                    /** ListTensorFlowVersionsResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListTensorFlowVersionsResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListTensorFlowVersionsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListTensorFlowVersionsResponse instance
                     */
                    public static create(properties?: google.cloud.tpu.v1.IListTensorFlowVersionsResponse): google.cloud.tpu.v1.ListTensorFlowVersionsResponse;

                    /**
                     * Encodes the specified ListTensorFlowVersionsResponse message. Does not implicitly {@link google.cloud.tpu.v1.ListTensorFlowVersionsResponse.verify|verify} messages.
                     * @param message ListTensorFlowVersionsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tpu.v1.IListTensorFlowVersionsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListTensorFlowVersionsResponse message, length delimited. Does not implicitly {@link google.cloud.tpu.v1.ListTensorFlowVersionsResponse.verify|verify} messages.
                     * @param message ListTensorFlowVersionsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tpu.v1.IListTensorFlowVersionsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListTensorFlowVersionsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListTensorFlowVersionsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tpu.v1.ListTensorFlowVersionsResponse;

                    /**
                     * Decodes a ListTensorFlowVersionsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListTensorFlowVersionsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tpu.v1.ListTensorFlowVersionsResponse;

                    /**
                     * Verifies a ListTensorFlowVersionsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListTensorFlowVersionsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListTensorFlowVersionsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tpu.v1.ListTensorFlowVersionsResponse;

                    /**
                     * Creates a plain object from a ListTensorFlowVersionsResponse message. Also converts values to other types if specified.
                     * @param message ListTensorFlowVersionsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tpu.v1.ListTensorFlowVersionsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListTensorFlowVersionsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListTensorFlowVersionsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an AcceleratorType. */
                interface IAcceleratorType {

                    /** AcceleratorType name */
                    name?: (string|null);

                    /** AcceleratorType type */
                    type?: (string|null);
                }

                /** Represents an AcceleratorType. */
                class AcceleratorType implements IAcceleratorType {

                    /**
                     * Constructs a new AcceleratorType.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tpu.v1.IAcceleratorType);

                    /** AcceleratorType name. */
                    public name: string;

                    /** AcceleratorType type. */
                    public type: string;

                    /**
                     * Creates a new AcceleratorType instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AcceleratorType instance
                     */
                    public static create(properties?: google.cloud.tpu.v1.IAcceleratorType): google.cloud.tpu.v1.AcceleratorType;

                    /**
                     * Encodes the specified AcceleratorType message. Does not implicitly {@link google.cloud.tpu.v1.AcceleratorType.verify|verify} messages.
                     * @param message AcceleratorType message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tpu.v1.IAcceleratorType, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AcceleratorType message, length delimited. Does not implicitly {@link google.cloud.tpu.v1.AcceleratorType.verify|verify} messages.
                     * @param message AcceleratorType message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tpu.v1.IAcceleratorType, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AcceleratorType message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AcceleratorType
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tpu.v1.AcceleratorType;

                    /**
                     * Decodes an AcceleratorType message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AcceleratorType
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tpu.v1.AcceleratorType;

                    /**
                     * Verifies an AcceleratorType message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AcceleratorType message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AcceleratorType
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tpu.v1.AcceleratorType;

                    /**
                     * Creates a plain object from an AcceleratorType message. Also converts values to other types if specified.
                     * @param message AcceleratorType
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tpu.v1.AcceleratorType, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AcceleratorType to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for AcceleratorType
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetAcceleratorTypeRequest. */
                interface IGetAcceleratorTypeRequest {

                    /** GetAcceleratorTypeRequest name */
                    name?: (string|null);
                }

                /** Represents a GetAcceleratorTypeRequest. */
                class GetAcceleratorTypeRequest implements IGetAcceleratorTypeRequest {

                    /**
                     * Constructs a new GetAcceleratorTypeRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tpu.v1.IGetAcceleratorTypeRequest);

                    /** GetAcceleratorTypeRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetAcceleratorTypeRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetAcceleratorTypeRequest instance
                     */
                    public static create(properties?: google.cloud.tpu.v1.IGetAcceleratorTypeRequest): google.cloud.tpu.v1.GetAcceleratorTypeRequest;

                    /**
                     * Encodes the specified GetAcceleratorTypeRequest message. Does not implicitly {@link google.cloud.tpu.v1.GetAcceleratorTypeRequest.verify|verify} messages.
                     * @param message GetAcceleratorTypeRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tpu.v1.IGetAcceleratorTypeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetAcceleratorTypeRequest message, length delimited. Does not implicitly {@link google.cloud.tpu.v1.GetAcceleratorTypeRequest.verify|verify} messages.
                     * @param message GetAcceleratorTypeRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tpu.v1.IGetAcceleratorTypeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetAcceleratorTypeRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetAcceleratorTypeRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tpu.v1.GetAcceleratorTypeRequest;

                    /**
                     * Decodes a GetAcceleratorTypeRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetAcceleratorTypeRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tpu.v1.GetAcceleratorTypeRequest;

                    /**
                     * Verifies a GetAcceleratorTypeRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetAcceleratorTypeRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetAcceleratorTypeRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tpu.v1.GetAcceleratorTypeRequest;

                    /**
                     * Creates a plain object from a GetAcceleratorTypeRequest message. Also converts values to other types if specified.
                     * @param message GetAcceleratorTypeRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tpu.v1.GetAcceleratorTypeRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetAcceleratorTypeRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetAcceleratorTypeRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListAcceleratorTypesRequest. */
                interface IListAcceleratorTypesRequest {

                    /** ListAcceleratorTypesRequest parent */
                    parent?: (string|null);

                    /** ListAcceleratorTypesRequest pageSize */
                    pageSize?: (number|null);

                    /** ListAcceleratorTypesRequest pageToken */
                    pageToken?: (string|null);

                    /** ListAcceleratorTypesRequest filter */
                    filter?: (string|null);

                    /** ListAcceleratorTypesRequest orderBy */
                    orderBy?: (string|null);
                }

                /** Represents a ListAcceleratorTypesRequest. */
                class ListAcceleratorTypesRequest implements IListAcceleratorTypesRequest {

                    /**
                     * Constructs a new ListAcceleratorTypesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tpu.v1.IListAcceleratorTypesRequest);

                    /** ListAcceleratorTypesRequest parent. */
                    public parent: string;

                    /** ListAcceleratorTypesRequest pageSize. */
                    public pageSize: number;

                    /** ListAcceleratorTypesRequest pageToken. */
                    public pageToken: string;

                    /** ListAcceleratorTypesRequest filter. */
                    public filter: string;

                    /** ListAcceleratorTypesRequest orderBy. */
                    public orderBy: string;

                    /**
                     * Creates a new ListAcceleratorTypesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListAcceleratorTypesRequest instance
                     */
                    public static create(properties?: google.cloud.tpu.v1.IListAcceleratorTypesRequest): google.cloud.tpu.v1.ListAcceleratorTypesRequest;

                    /**
                     * Encodes the specified ListAcceleratorTypesRequest message. Does not implicitly {@link google.cloud.tpu.v1.ListAcceleratorTypesRequest.verify|verify} messages.
                     * @param message ListAcceleratorTypesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tpu.v1.IListAcceleratorTypesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListAcceleratorTypesRequest message, length delimited. Does not implicitly {@link google.cloud.tpu.v1.ListAcceleratorTypesRequest.verify|verify} messages.
                     * @param message ListAcceleratorTypesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tpu.v1.IListAcceleratorTypesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListAcceleratorTypesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListAcceleratorTypesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tpu.v1.ListAcceleratorTypesRequest;

                    /**
                     * Decodes a ListAcceleratorTypesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListAcceleratorTypesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tpu.v1.ListAcceleratorTypesRequest;

                    /**
                     * Verifies a ListAcceleratorTypesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListAcceleratorTypesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListAcceleratorTypesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tpu.v1.ListAcceleratorTypesRequest;

                    /**
                     * Creates a plain object from a ListAcceleratorTypesRequest message. Also converts values to other types if specified.
                     * @param message ListAcceleratorTypesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tpu.v1.ListAcceleratorTypesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListAcceleratorTypesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListAcceleratorTypesRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListAcceleratorTypesResponse. */
                interface IListAcceleratorTypesResponse {

                    /** ListAcceleratorTypesResponse acceleratorTypes */
                    acceleratorTypes?: (google.cloud.tpu.v1.IAcceleratorType[]|null);

                    /** ListAcceleratorTypesResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListAcceleratorTypesResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a ListAcceleratorTypesResponse. */
                class ListAcceleratorTypesResponse implements IListAcceleratorTypesResponse {

                    /**
                     * Constructs a new ListAcceleratorTypesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tpu.v1.IListAcceleratorTypesResponse);

                    /** ListAcceleratorTypesResponse acceleratorTypes. */
                    public acceleratorTypes: google.cloud.tpu.v1.IAcceleratorType[];

                    /** ListAcceleratorTypesResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListAcceleratorTypesResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListAcceleratorTypesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListAcceleratorTypesResponse instance
                     */
                    public static create(properties?: google.cloud.tpu.v1.IListAcceleratorTypesResponse): google.cloud.tpu.v1.ListAcceleratorTypesResponse;

                    /**
                     * Encodes the specified ListAcceleratorTypesResponse message. Does not implicitly {@link google.cloud.tpu.v1.ListAcceleratorTypesResponse.verify|verify} messages.
                     * @param message ListAcceleratorTypesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tpu.v1.IListAcceleratorTypesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListAcceleratorTypesResponse message, length delimited. Does not implicitly {@link google.cloud.tpu.v1.ListAcceleratorTypesResponse.verify|verify} messages.
                     * @param message ListAcceleratorTypesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tpu.v1.IListAcceleratorTypesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListAcceleratorTypesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListAcceleratorTypesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tpu.v1.ListAcceleratorTypesResponse;

                    /**
                     * Decodes a ListAcceleratorTypesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListAcceleratorTypesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tpu.v1.ListAcceleratorTypesResponse;

                    /**
                     * Verifies a ListAcceleratorTypesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListAcceleratorTypesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListAcceleratorTypesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tpu.v1.ListAcceleratorTypesResponse;

                    /**
                     * Creates a plain object from a ListAcceleratorTypesResponse message. Also converts values to other types if specified.
                     * @param message ListAcceleratorTypesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tpu.v1.ListAcceleratorTypesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListAcceleratorTypesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListAcceleratorTypesResponse
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

                    /** OperationMetadata statusDetail */
                    statusDetail?: (string|null);

                    /** OperationMetadata cancelRequested */
                    cancelRequested?: (boolean|null);

                    /** OperationMetadata apiVersion */
                    apiVersion?: (string|null);
                }

                /** Represents an OperationMetadata. */
                class OperationMetadata implements IOperationMetadata {

                    /**
                     * Constructs a new OperationMetadata.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tpu.v1.IOperationMetadata);

                    /** OperationMetadata createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** OperationMetadata endTime. */
                    public endTime?: (google.protobuf.ITimestamp|null);

                    /** OperationMetadata target. */
                    public target: string;

                    /** OperationMetadata verb. */
                    public verb: string;

                    /** OperationMetadata statusDetail. */
                    public statusDetail: string;

                    /** OperationMetadata cancelRequested. */
                    public cancelRequested: boolean;

                    /** OperationMetadata apiVersion. */
                    public apiVersion: string;

                    /**
                     * Creates a new OperationMetadata instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns OperationMetadata instance
                     */
                    public static create(properties?: google.cloud.tpu.v1.IOperationMetadata): google.cloud.tpu.v1.OperationMetadata;

                    /**
                     * Encodes the specified OperationMetadata message. Does not implicitly {@link google.cloud.tpu.v1.OperationMetadata.verify|verify} messages.
                     * @param message OperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tpu.v1.IOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified OperationMetadata message, length delimited. Does not implicitly {@link google.cloud.tpu.v1.OperationMetadata.verify|verify} messages.
                     * @param message OperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tpu.v1.IOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an OperationMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns OperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tpu.v1.OperationMetadata;

                    /**
                     * Decodes an OperationMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns OperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tpu.v1.OperationMetadata;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.tpu.v1.OperationMetadata;

                    /**
                     * Creates a plain object from an OperationMetadata message. Also converts values to other types if specified.
                     * @param message OperationMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tpu.v1.OperationMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

                /** Properties of a Symptom. */
                interface ISymptom {

                    /** Symptom createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** Symptom symptomType */
                    symptomType?: (google.cloud.tpu.v1.Symptom.SymptomType|keyof typeof google.cloud.tpu.v1.Symptom.SymptomType|null);

                    /** Symptom details */
                    details?: (string|null);

                    /** Symptom workerId */
                    workerId?: (string|null);
                }

                /** Represents a Symptom. */
                class Symptom implements ISymptom {

                    /**
                     * Constructs a new Symptom.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tpu.v1.ISymptom);

                    /** Symptom createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** Symptom symptomType. */
                    public symptomType: (google.cloud.tpu.v1.Symptom.SymptomType|keyof typeof google.cloud.tpu.v1.Symptom.SymptomType);

                    /** Symptom details. */
                    public details: string;

                    /** Symptom workerId. */
                    public workerId: string;

                    /**
                     * Creates a new Symptom instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Symptom instance
                     */
                    public static create(properties?: google.cloud.tpu.v1.ISymptom): google.cloud.tpu.v1.Symptom;

                    /**
                     * Encodes the specified Symptom message. Does not implicitly {@link google.cloud.tpu.v1.Symptom.verify|verify} messages.
                     * @param message Symptom message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tpu.v1.ISymptom, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Symptom message, length delimited. Does not implicitly {@link google.cloud.tpu.v1.Symptom.verify|verify} messages.
                     * @param message Symptom message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tpu.v1.ISymptom, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Symptom message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Symptom
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tpu.v1.Symptom;

                    /**
                     * Decodes a Symptom message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Symptom
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tpu.v1.Symptom;

                    /**
                     * Verifies a Symptom message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Symptom message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Symptom
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tpu.v1.Symptom;

                    /**
                     * Creates a plain object from a Symptom message. Also converts values to other types if specified.
                     * @param message Symptom
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tpu.v1.Symptom, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Symptom to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Symptom
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace Symptom {

                    /** SymptomType enum. */
                    enum SymptomType {
                        SYMPTOM_TYPE_UNSPECIFIED = 0,
                        LOW_MEMORY = 1,
                        OUT_OF_MEMORY = 2,
                        EXECUTE_TIMED_OUT = 3,
                        MESH_BUILD_FAIL = 4,
                        HBM_OUT_OF_MEMORY = 5,
                        PROJECT_ABUSE = 6
                    }
                }
            }

            /** Namespace v2. */
            namespace v2 {

                /** Represents a Tpu */
                class Tpu extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new Tpu service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new Tpu service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Tpu;

                    /**
                     * Calls ListNodes.
                     * @param request ListNodesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListNodesResponse
                     */
                    public listNodes(request: google.cloud.tpu.v2.IListNodesRequest, callback: google.cloud.tpu.v2.Tpu.ListNodesCallback): void;

                    /**
                     * Calls ListNodes.
                     * @param request ListNodesRequest message or plain object
                     * @returns Promise
                     */
                    public listNodes(request: google.cloud.tpu.v2.IListNodesRequest): Promise<google.cloud.tpu.v2.ListNodesResponse>;

                    /**
                     * Calls GetNode.
                     * @param request GetNodeRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Node
                     */
                    public getNode(request: google.cloud.tpu.v2.IGetNodeRequest, callback: google.cloud.tpu.v2.Tpu.GetNodeCallback): void;

                    /**
                     * Calls GetNode.
                     * @param request GetNodeRequest message or plain object
                     * @returns Promise
                     */
                    public getNode(request: google.cloud.tpu.v2.IGetNodeRequest): Promise<google.cloud.tpu.v2.Node>;

                    /**
                     * Calls CreateNode.
                     * @param request CreateNodeRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createNode(request: google.cloud.tpu.v2.ICreateNodeRequest, callback: google.cloud.tpu.v2.Tpu.CreateNodeCallback): void;

                    /**
                     * Calls CreateNode.
                     * @param request CreateNodeRequest message or plain object
                     * @returns Promise
                     */
                    public createNode(request: google.cloud.tpu.v2.ICreateNodeRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls DeleteNode.
                     * @param request DeleteNodeRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deleteNode(request: google.cloud.tpu.v2.IDeleteNodeRequest, callback: google.cloud.tpu.v2.Tpu.DeleteNodeCallback): void;

                    /**
                     * Calls DeleteNode.
                     * @param request DeleteNodeRequest message or plain object
                     * @returns Promise
                     */
                    public deleteNode(request: google.cloud.tpu.v2.IDeleteNodeRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls StopNode.
                     * @param request StopNodeRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public stopNode(request: google.cloud.tpu.v2.IStopNodeRequest, callback: google.cloud.tpu.v2.Tpu.StopNodeCallback): void;

                    /**
                     * Calls StopNode.
                     * @param request StopNodeRequest message or plain object
                     * @returns Promise
                     */
                    public stopNode(request: google.cloud.tpu.v2.IStopNodeRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls StartNode.
                     * @param request StartNodeRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public startNode(request: google.cloud.tpu.v2.IStartNodeRequest, callback: google.cloud.tpu.v2.Tpu.StartNodeCallback): void;

                    /**
                     * Calls StartNode.
                     * @param request StartNodeRequest message or plain object
                     * @returns Promise
                     */
                    public startNode(request: google.cloud.tpu.v2.IStartNodeRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls UpdateNode.
                     * @param request UpdateNodeRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public updateNode(request: google.cloud.tpu.v2.IUpdateNodeRequest, callback: google.cloud.tpu.v2.Tpu.UpdateNodeCallback): void;

                    /**
                     * Calls UpdateNode.
                     * @param request UpdateNodeRequest message or plain object
                     * @returns Promise
                     */
                    public updateNode(request: google.cloud.tpu.v2.IUpdateNodeRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls GenerateServiceIdentity.
                     * @param request GenerateServiceIdentityRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and GenerateServiceIdentityResponse
                     */
                    public generateServiceIdentity(request: google.cloud.tpu.v2.IGenerateServiceIdentityRequest, callback: google.cloud.tpu.v2.Tpu.GenerateServiceIdentityCallback): void;

                    /**
                     * Calls GenerateServiceIdentity.
                     * @param request GenerateServiceIdentityRequest message or plain object
                     * @returns Promise
                     */
                    public generateServiceIdentity(request: google.cloud.tpu.v2.IGenerateServiceIdentityRequest): Promise<google.cloud.tpu.v2.GenerateServiceIdentityResponse>;

                    /**
                     * Calls ListAcceleratorTypes.
                     * @param request ListAcceleratorTypesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListAcceleratorTypesResponse
                     */
                    public listAcceleratorTypes(request: google.cloud.tpu.v2.IListAcceleratorTypesRequest, callback: google.cloud.tpu.v2.Tpu.ListAcceleratorTypesCallback): void;

                    /**
                     * Calls ListAcceleratorTypes.
                     * @param request ListAcceleratorTypesRequest message or plain object
                     * @returns Promise
                     */
                    public listAcceleratorTypes(request: google.cloud.tpu.v2.IListAcceleratorTypesRequest): Promise<google.cloud.tpu.v2.ListAcceleratorTypesResponse>;

                    /**
                     * Calls GetAcceleratorType.
                     * @param request GetAcceleratorTypeRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and AcceleratorType
                     */
                    public getAcceleratorType(request: google.cloud.tpu.v2.IGetAcceleratorTypeRequest, callback: google.cloud.tpu.v2.Tpu.GetAcceleratorTypeCallback): void;

                    /**
                     * Calls GetAcceleratorType.
                     * @param request GetAcceleratorTypeRequest message or plain object
                     * @returns Promise
                     */
                    public getAcceleratorType(request: google.cloud.tpu.v2.IGetAcceleratorTypeRequest): Promise<google.cloud.tpu.v2.AcceleratorType>;

                    /**
                     * Calls ListRuntimeVersions.
                     * @param request ListRuntimeVersionsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListRuntimeVersionsResponse
                     */
                    public listRuntimeVersions(request: google.cloud.tpu.v2.IListRuntimeVersionsRequest, callback: google.cloud.tpu.v2.Tpu.ListRuntimeVersionsCallback): void;

                    /**
                     * Calls ListRuntimeVersions.
                     * @param request ListRuntimeVersionsRequest message or plain object
                     * @returns Promise
                     */
                    public listRuntimeVersions(request: google.cloud.tpu.v2.IListRuntimeVersionsRequest): Promise<google.cloud.tpu.v2.ListRuntimeVersionsResponse>;

                    /**
                     * Calls GetRuntimeVersion.
                     * @param request GetRuntimeVersionRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and RuntimeVersion
                     */
                    public getRuntimeVersion(request: google.cloud.tpu.v2.IGetRuntimeVersionRequest, callback: google.cloud.tpu.v2.Tpu.GetRuntimeVersionCallback): void;

                    /**
                     * Calls GetRuntimeVersion.
                     * @param request GetRuntimeVersionRequest message or plain object
                     * @returns Promise
                     */
                    public getRuntimeVersion(request: google.cloud.tpu.v2.IGetRuntimeVersionRequest): Promise<google.cloud.tpu.v2.RuntimeVersion>;

                    /**
                     * Calls GetGuestAttributes.
                     * @param request GetGuestAttributesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and GetGuestAttributesResponse
                     */
                    public getGuestAttributes(request: google.cloud.tpu.v2.IGetGuestAttributesRequest, callback: google.cloud.tpu.v2.Tpu.GetGuestAttributesCallback): void;

                    /**
                     * Calls GetGuestAttributes.
                     * @param request GetGuestAttributesRequest message or plain object
                     * @returns Promise
                     */
                    public getGuestAttributes(request: google.cloud.tpu.v2.IGetGuestAttributesRequest): Promise<google.cloud.tpu.v2.GetGuestAttributesResponse>;
                }

                namespace Tpu {

                    /**
                     * Callback as used by {@link google.cloud.tpu.v2.Tpu|listNodes}.
                     * @param error Error, if any
                     * @param [response] ListNodesResponse
                     */
                    type ListNodesCallback = (error: (Error|null), response?: google.cloud.tpu.v2.ListNodesResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.tpu.v2.Tpu|getNode}.
                     * @param error Error, if any
                     * @param [response] Node
                     */
                    type GetNodeCallback = (error: (Error|null), response?: google.cloud.tpu.v2.Node) => void;

                    /**
                     * Callback as used by {@link google.cloud.tpu.v2.Tpu|createNode}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateNodeCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.tpu.v2.Tpu|deleteNode}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeleteNodeCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.tpu.v2.Tpu|stopNode}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type StopNodeCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.tpu.v2.Tpu|startNode}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type StartNodeCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.tpu.v2.Tpu|updateNode}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type UpdateNodeCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.tpu.v2.Tpu|generateServiceIdentity}.
                     * @param error Error, if any
                     * @param [response] GenerateServiceIdentityResponse
                     */
                    type GenerateServiceIdentityCallback = (error: (Error|null), response?: google.cloud.tpu.v2.GenerateServiceIdentityResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.tpu.v2.Tpu|listAcceleratorTypes}.
                     * @param error Error, if any
                     * @param [response] ListAcceleratorTypesResponse
                     */
                    type ListAcceleratorTypesCallback = (error: (Error|null), response?: google.cloud.tpu.v2.ListAcceleratorTypesResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.tpu.v2.Tpu|getAcceleratorType}.
                     * @param error Error, if any
                     * @param [response] AcceleratorType
                     */
                    type GetAcceleratorTypeCallback = (error: (Error|null), response?: google.cloud.tpu.v2.AcceleratorType) => void;

                    /**
                     * Callback as used by {@link google.cloud.tpu.v2.Tpu|listRuntimeVersions}.
                     * @param error Error, if any
                     * @param [response] ListRuntimeVersionsResponse
                     */
                    type ListRuntimeVersionsCallback = (error: (Error|null), response?: google.cloud.tpu.v2.ListRuntimeVersionsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.tpu.v2.Tpu|getRuntimeVersion}.
                     * @param error Error, if any
                     * @param [response] RuntimeVersion
                     */
                    type GetRuntimeVersionCallback = (error: (Error|null), response?: google.cloud.tpu.v2.RuntimeVersion) => void;

                    /**
                     * Callback as used by {@link google.cloud.tpu.v2.Tpu|getGuestAttributes}.
                     * @param error Error, if any
                     * @param [response] GetGuestAttributesResponse
                     */
                    type GetGuestAttributesCallback = (error: (Error|null), response?: google.cloud.tpu.v2.GetGuestAttributesResponse) => void;
                }

                /** Properties of a GuestAttributes. */
                interface IGuestAttributes {

                    /** GuestAttributes queryPath */
                    queryPath?: (string|null);

                    /** GuestAttributes queryValue */
                    queryValue?: (google.cloud.tpu.v2.IGuestAttributesValue|null);
                }

                /** Represents a GuestAttributes. */
                class GuestAttributes implements IGuestAttributes {

                    /**
                     * Constructs a new GuestAttributes.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tpu.v2.IGuestAttributes);

                    /** GuestAttributes queryPath. */
                    public queryPath: string;

                    /** GuestAttributes queryValue. */
                    public queryValue?: (google.cloud.tpu.v2.IGuestAttributesValue|null);

                    /**
                     * Creates a new GuestAttributes instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GuestAttributes instance
                     */
                    public static create(properties?: google.cloud.tpu.v2.IGuestAttributes): google.cloud.tpu.v2.GuestAttributes;

                    /**
                     * Encodes the specified GuestAttributes message. Does not implicitly {@link google.cloud.tpu.v2.GuestAttributes.verify|verify} messages.
                     * @param message GuestAttributes message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tpu.v2.IGuestAttributes, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GuestAttributes message, length delimited. Does not implicitly {@link google.cloud.tpu.v2.GuestAttributes.verify|verify} messages.
                     * @param message GuestAttributes message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tpu.v2.IGuestAttributes, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GuestAttributes message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GuestAttributes
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tpu.v2.GuestAttributes;

                    /**
                     * Decodes a GuestAttributes message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GuestAttributes
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tpu.v2.GuestAttributes;

                    /**
                     * Verifies a GuestAttributes message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GuestAttributes message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GuestAttributes
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tpu.v2.GuestAttributes;

                    /**
                     * Creates a plain object from a GuestAttributes message. Also converts values to other types if specified.
                     * @param message GuestAttributes
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tpu.v2.GuestAttributes, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GuestAttributes to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GuestAttributes
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GuestAttributesValue. */
                interface IGuestAttributesValue {

                    /** GuestAttributesValue items */
                    items?: (google.cloud.tpu.v2.IGuestAttributesEntry[]|null);
                }

                /** Represents a GuestAttributesValue. */
                class GuestAttributesValue implements IGuestAttributesValue {

                    /**
                     * Constructs a new GuestAttributesValue.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tpu.v2.IGuestAttributesValue);

                    /** GuestAttributesValue items. */
                    public items: google.cloud.tpu.v2.IGuestAttributesEntry[];

                    /**
                     * Creates a new GuestAttributesValue instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GuestAttributesValue instance
                     */
                    public static create(properties?: google.cloud.tpu.v2.IGuestAttributesValue): google.cloud.tpu.v2.GuestAttributesValue;

                    /**
                     * Encodes the specified GuestAttributesValue message. Does not implicitly {@link google.cloud.tpu.v2.GuestAttributesValue.verify|verify} messages.
                     * @param message GuestAttributesValue message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tpu.v2.IGuestAttributesValue, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GuestAttributesValue message, length delimited. Does not implicitly {@link google.cloud.tpu.v2.GuestAttributesValue.verify|verify} messages.
                     * @param message GuestAttributesValue message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tpu.v2.IGuestAttributesValue, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GuestAttributesValue message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GuestAttributesValue
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tpu.v2.GuestAttributesValue;

                    /**
                     * Decodes a GuestAttributesValue message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GuestAttributesValue
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tpu.v2.GuestAttributesValue;

                    /**
                     * Verifies a GuestAttributesValue message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GuestAttributesValue message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GuestAttributesValue
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tpu.v2.GuestAttributesValue;

                    /**
                     * Creates a plain object from a GuestAttributesValue message. Also converts values to other types if specified.
                     * @param message GuestAttributesValue
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tpu.v2.GuestAttributesValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GuestAttributesValue to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GuestAttributesValue
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GuestAttributesEntry. */
                interface IGuestAttributesEntry {

                    /** GuestAttributesEntry namespace */
                    namespace?: (string|null);

                    /** GuestAttributesEntry key */
                    key?: (string|null);

                    /** GuestAttributesEntry value */
                    value?: (string|null);
                }

                /** Represents a GuestAttributesEntry. */
                class GuestAttributesEntry implements IGuestAttributesEntry {

                    /**
                     * Constructs a new GuestAttributesEntry.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tpu.v2.IGuestAttributesEntry);

                    /** GuestAttributesEntry namespace. */
                    public namespace: string;

                    /** GuestAttributesEntry key. */
                    public key: string;

                    /** GuestAttributesEntry value. */
                    public value: string;

                    /**
                     * Creates a new GuestAttributesEntry instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GuestAttributesEntry instance
                     */
                    public static create(properties?: google.cloud.tpu.v2.IGuestAttributesEntry): google.cloud.tpu.v2.GuestAttributesEntry;

                    /**
                     * Encodes the specified GuestAttributesEntry message. Does not implicitly {@link google.cloud.tpu.v2.GuestAttributesEntry.verify|verify} messages.
                     * @param message GuestAttributesEntry message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tpu.v2.IGuestAttributesEntry, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GuestAttributesEntry message, length delimited. Does not implicitly {@link google.cloud.tpu.v2.GuestAttributesEntry.verify|verify} messages.
                     * @param message GuestAttributesEntry message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tpu.v2.IGuestAttributesEntry, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GuestAttributesEntry message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GuestAttributesEntry
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tpu.v2.GuestAttributesEntry;

                    /**
                     * Decodes a GuestAttributesEntry message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GuestAttributesEntry
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tpu.v2.GuestAttributesEntry;

                    /**
                     * Verifies a GuestAttributesEntry message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GuestAttributesEntry message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GuestAttributesEntry
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tpu.v2.GuestAttributesEntry;

                    /**
                     * Creates a plain object from a GuestAttributesEntry message. Also converts values to other types if specified.
                     * @param message GuestAttributesEntry
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tpu.v2.GuestAttributesEntry, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GuestAttributesEntry to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GuestAttributesEntry
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an AttachedDisk. */
                interface IAttachedDisk {

                    /** AttachedDisk sourceDisk */
                    sourceDisk?: (string|null);

                    /** AttachedDisk mode */
                    mode?: (google.cloud.tpu.v2.AttachedDisk.DiskMode|keyof typeof google.cloud.tpu.v2.AttachedDisk.DiskMode|null);
                }

                /** Represents an AttachedDisk. */
                class AttachedDisk implements IAttachedDisk {

                    /**
                     * Constructs a new AttachedDisk.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tpu.v2.IAttachedDisk);

                    /** AttachedDisk sourceDisk. */
                    public sourceDisk: string;

                    /** AttachedDisk mode. */
                    public mode: (google.cloud.tpu.v2.AttachedDisk.DiskMode|keyof typeof google.cloud.tpu.v2.AttachedDisk.DiskMode);

                    /**
                     * Creates a new AttachedDisk instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AttachedDisk instance
                     */
                    public static create(properties?: google.cloud.tpu.v2.IAttachedDisk): google.cloud.tpu.v2.AttachedDisk;

                    /**
                     * Encodes the specified AttachedDisk message. Does not implicitly {@link google.cloud.tpu.v2.AttachedDisk.verify|verify} messages.
                     * @param message AttachedDisk message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tpu.v2.IAttachedDisk, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AttachedDisk message, length delimited. Does not implicitly {@link google.cloud.tpu.v2.AttachedDisk.verify|verify} messages.
                     * @param message AttachedDisk message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tpu.v2.IAttachedDisk, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AttachedDisk message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AttachedDisk
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tpu.v2.AttachedDisk;

                    /**
                     * Decodes an AttachedDisk message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AttachedDisk
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tpu.v2.AttachedDisk;

                    /**
                     * Verifies an AttachedDisk message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AttachedDisk message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AttachedDisk
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tpu.v2.AttachedDisk;

                    /**
                     * Creates a plain object from an AttachedDisk message. Also converts values to other types if specified.
                     * @param message AttachedDisk
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tpu.v2.AttachedDisk, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AttachedDisk to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for AttachedDisk
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace AttachedDisk {

                    /** DiskMode enum. */
                    enum DiskMode {
                        DISK_MODE_UNSPECIFIED = 0,
                        READ_WRITE = 1,
                        READ_ONLY = 2
                    }
                }

                /** Properties of a SchedulingConfig. */
                interface ISchedulingConfig {

                    /** SchedulingConfig preemptible */
                    preemptible?: (boolean|null);

                    /** SchedulingConfig reserved */
                    reserved?: (boolean|null);
                }

                /** Represents a SchedulingConfig. */
                class SchedulingConfig implements ISchedulingConfig {

                    /**
                     * Constructs a new SchedulingConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tpu.v2.ISchedulingConfig);

                    /** SchedulingConfig preemptible. */
                    public preemptible: boolean;

                    /** SchedulingConfig reserved. */
                    public reserved: boolean;

                    /**
                     * Creates a new SchedulingConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SchedulingConfig instance
                     */
                    public static create(properties?: google.cloud.tpu.v2.ISchedulingConfig): google.cloud.tpu.v2.SchedulingConfig;

                    /**
                     * Encodes the specified SchedulingConfig message. Does not implicitly {@link google.cloud.tpu.v2.SchedulingConfig.verify|verify} messages.
                     * @param message SchedulingConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tpu.v2.ISchedulingConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SchedulingConfig message, length delimited. Does not implicitly {@link google.cloud.tpu.v2.SchedulingConfig.verify|verify} messages.
                     * @param message SchedulingConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tpu.v2.ISchedulingConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SchedulingConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SchedulingConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tpu.v2.SchedulingConfig;

                    /**
                     * Decodes a SchedulingConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SchedulingConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tpu.v2.SchedulingConfig;

                    /**
                     * Verifies a SchedulingConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SchedulingConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SchedulingConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tpu.v2.SchedulingConfig;

                    /**
                     * Creates a plain object from a SchedulingConfig message. Also converts values to other types if specified.
                     * @param message SchedulingConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tpu.v2.SchedulingConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SchedulingConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for SchedulingConfig
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a NetworkEndpoint. */
                interface INetworkEndpoint {

                    /** NetworkEndpoint ipAddress */
                    ipAddress?: (string|null);

                    /** NetworkEndpoint port */
                    port?: (number|null);

                    /** NetworkEndpoint accessConfig */
                    accessConfig?: (google.cloud.tpu.v2.IAccessConfig|null);
                }

                /** Represents a NetworkEndpoint. */
                class NetworkEndpoint implements INetworkEndpoint {

                    /**
                     * Constructs a new NetworkEndpoint.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tpu.v2.INetworkEndpoint);

                    /** NetworkEndpoint ipAddress. */
                    public ipAddress: string;

                    /** NetworkEndpoint port. */
                    public port: number;

                    /** NetworkEndpoint accessConfig. */
                    public accessConfig?: (google.cloud.tpu.v2.IAccessConfig|null);

                    /**
                     * Creates a new NetworkEndpoint instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns NetworkEndpoint instance
                     */
                    public static create(properties?: google.cloud.tpu.v2.INetworkEndpoint): google.cloud.tpu.v2.NetworkEndpoint;

                    /**
                     * Encodes the specified NetworkEndpoint message. Does not implicitly {@link google.cloud.tpu.v2.NetworkEndpoint.verify|verify} messages.
                     * @param message NetworkEndpoint message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tpu.v2.INetworkEndpoint, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified NetworkEndpoint message, length delimited. Does not implicitly {@link google.cloud.tpu.v2.NetworkEndpoint.verify|verify} messages.
                     * @param message NetworkEndpoint message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tpu.v2.INetworkEndpoint, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a NetworkEndpoint message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns NetworkEndpoint
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tpu.v2.NetworkEndpoint;

                    /**
                     * Decodes a NetworkEndpoint message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns NetworkEndpoint
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tpu.v2.NetworkEndpoint;

                    /**
                     * Verifies a NetworkEndpoint message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a NetworkEndpoint message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns NetworkEndpoint
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tpu.v2.NetworkEndpoint;

                    /**
                     * Creates a plain object from a NetworkEndpoint message. Also converts values to other types if specified.
                     * @param message NetworkEndpoint
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tpu.v2.NetworkEndpoint, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this NetworkEndpoint to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for NetworkEndpoint
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an AccessConfig. */
                interface IAccessConfig {

                    /** AccessConfig externalIp */
                    externalIp?: (string|null);
                }

                /** Represents an AccessConfig. */
                class AccessConfig implements IAccessConfig {

                    /**
                     * Constructs a new AccessConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tpu.v2.IAccessConfig);

                    /** AccessConfig externalIp. */
                    public externalIp: string;

                    /**
                     * Creates a new AccessConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AccessConfig instance
                     */
                    public static create(properties?: google.cloud.tpu.v2.IAccessConfig): google.cloud.tpu.v2.AccessConfig;

                    /**
                     * Encodes the specified AccessConfig message. Does not implicitly {@link google.cloud.tpu.v2.AccessConfig.verify|verify} messages.
                     * @param message AccessConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tpu.v2.IAccessConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AccessConfig message, length delimited. Does not implicitly {@link google.cloud.tpu.v2.AccessConfig.verify|verify} messages.
                     * @param message AccessConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tpu.v2.IAccessConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AccessConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AccessConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tpu.v2.AccessConfig;

                    /**
                     * Decodes an AccessConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AccessConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tpu.v2.AccessConfig;

                    /**
                     * Verifies an AccessConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AccessConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AccessConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tpu.v2.AccessConfig;

                    /**
                     * Creates a plain object from an AccessConfig message. Also converts values to other types if specified.
                     * @param message AccessConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tpu.v2.AccessConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AccessConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for AccessConfig
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a NetworkConfig. */
                interface INetworkConfig {

                    /** NetworkConfig network */
                    network?: (string|null);

                    /** NetworkConfig subnetwork */
                    subnetwork?: (string|null);

                    /** NetworkConfig enableExternalIps */
                    enableExternalIps?: (boolean|null);

                    /** NetworkConfig canIpForward */
                    canIpForward?: (boolean|null);
                }

                /** Represents a NetworkConfig. */
                class NetworkConfig implements INetworkConfig {

                    /**
                     * Constructs a new NetworkConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tpu.v2.INetworkConfig);

                    /** NetworkConfig network. */
                    public network: string;

                    /** NetworkConfig subnetwork. */
                    public subnetwork: string;

                    /** NetworkConfig enableExternalIps. */
                    public enableExternalIps: boolean;

                    /** NetworkConfig canIpForward. */
                    public canIpForward: boolean;

                    /**
                     * Creates a new NetworkConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns NetworkConfig instance
                     */
                    public static create(properties?: google.cloud.tpu.v2.INetworkConfig): google.cloud.tpu.v2.NetworkConfig;

                    /**
                     * Encodes the specified NetworkConfig message. Does not implicitly {@link google.cloud.tpu.v2.NetworkConfig.verify|verify} messages.
                     * @param message NetworkConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tpu.v2.INetworkConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified NetworkConfig message, length delimited. Does not implicitly {@link google.cloud.tpu.v2.NetworkConfig.verify|verify} messages.
                     * @param message NetworkConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tpu.v2.INetworkConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a NetworkConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns NetworkConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tpu.v2.NetworkConfig;

                    /**
                     * Decodes a NetworkConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns NetworkConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tpu.v2.NetworkConfig;

                    /**
                     * Verifies a NetworkConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a NetworkConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns NetworkConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tpu.v2.NetworkConfig;

                    /**
                     * Creates a plain object from a NetworkConfig message. Also converts values to other types if specified.
                     * @param message NetworkConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tpu.v2.NetworkConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this NetworkConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for NetworkConfig
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ServiceAccount. */
                interface IServiceAccount {

                    /** ServiceAccount email */
                    email?: (string|null);

                    /** ServiceAccount scope */
                    scope?: (string[]|null);
                }

                /** Represents a ServiceAccount. */
                class ServiceAccount implements IServiceAccount {

                    /**
                     * Constructs a new ServiceAccount.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tpu.v2.IServiceAccount);

                    /** ServiceAccount email. */
                    public email: string;

                    /** ServiceAccount scope. */
                    public scope: string[];

                    /**
                     * Creates a new ServiceAccount instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ServiceAccount instance
                     */
                    public static create(properties?: google.cloud.tpu.v2.IServiceAccount): google.cloud.tpu.v2.ServiceAccount;

                    /**
                     * Encodes the specified ServiceAccount message. Does not implicitly {@link google.cloud.tpu.v2.ServiceAccount.verify|verify} messages.
                     * @param message ServiceAccount message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tpu.v2.IServiceAccount, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ServiceAccount message, length delimited. Does not implicitly {@link google.cloud.tpu.v2.ServiceAccount.verify|verify} messages.
                     * @param message ServiceAccount message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tpu.v2.IServiceAccount, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ServiceAccount message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ServiceAccount
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tpu.v2.ServiceAccount;

                    /**
                     * Decodes a ServiceAccount message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ServiceAccount
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tpu.v2.ServiceAccount;

                    /**
                     * Verifies a ServiceAccount message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ServiceAccount message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ServiceAccount
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tpu.v2.ServiceAccount;

                    /**
                     * Creates a plain object from a ServiceAccount message. Also converts values to other types if specified.
                     * @param message ServiceAccount
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tpu.v2.ServiceAccount, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ServiceAccount to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ServiceAccount
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Node. */
                interface INode {

                    /** Node name */
                    name?: (string|null);

                    /** Node description */
                    description?: (string|null);

                    /** Node acceleratorType */
                    acceleratorType?: (string|null);

                    /** Node state */
                    state?: (google.cloud.tpu.v2.Node.State|keyof typeof google.cloud.tpu.v2.Node.State|null);

                    /** Node healthDescription */
                    healthDescription?: (string|null);

                    /** Node runtimeVersion */
                    runtimeVersion?: (string|null);

                    /** Node networkConfig */
                    networkConfig?: (google.cloud.tpu.v2.INetworkConfig|null);

                    /** Node cidrBlock */
                    cidrBlock?: (string|null);

                    /** Node serviceAccount */
                    serviceAccount?: (google.cloud.tpu.v2.IServiceAccount|null);

                    /** Node createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** Node schedulingConfig */
                    schedulingConfig?: (google.cloud.tpu.v2.ISchedulingConfig|null);

                    /** Node networkEndpoints */
                    networkEndpoints?: (google.cloud.tpu.v2.INetworkEndpoint[]|null);

                    /** Node health */
                    health?: (google.cloud.tpu.v2.Node.Health|keyof typeof google.cloud.tpu.v2.Node.Health|null);

                    /** Node labels */
                    labels?: ({ [k: string]: string }|null);

                    /** Node metadata */
                    metadata?: ({ [k: string]: string }|null);

                    /** Node tags */
                    tags?: (string[]|null);

                    /** Node id */
                    id?: (number|Long|string|null);

                    /** Node dataDisks */
                    dataDisks?: (google.cloud.tpu.v2.IAttachedDisk[]|null);

                    /** Node apiVersion */
                    apiVersion?: (google.cloud.tpu.v2.Node.ApiVersion|keyof typeof google.cloud.tpu.v2.Node.ApiVersion|null);

                    /** Node symptoms */
                    symptoms?: (google.cloud.tpu.v2.ISymptom[]|null);

                    /** Node shieldedInstanceConfig */
                    shieldedInstanceConfig?: (google.cloud.tpu.v2.IShieldedInstanceConfig|null);
                }

                /** Represents a Node. */
                class Node implements INode {

                    /**
                     * Constructs a new Node.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tpu.v2.INode);

                    /** Node name. */
                    public name: string;

                    /** Node description. */
                    public description: string;

                    /** Node acceleratorType. */
                    public acceleratorType: string;

                    /** Node state. */
                    public state: (google.cloud.tpu.v2.Node.State|keyof typeof google.cloud.tpu.v2.Node.State);

                    /** Node healthDescription. */
                    public healthDescription: string;

                    /** Node runtimeVersion. */
                    public runtimeVersion: string;

                    /** Node networkConfig. */
                    public networkConfig?: (google.cloud.tpu.v2.INetworkConfig|null);

                    /** Node cidrBlock. */
                    public cidrBlock: string;

                    /** Node serviceAccount. */
                    public serviceAccount?: (google.cloud.tpu.v2.IServiceAccount|null);

                    /** Node createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** Node schedulingConfig. */
                    public schedulingConfig?: (google.cloud.tpu.v2.ISchedulingConfig|null);

                    /** Node networkEndpoints. */
                    public networkEndpoints: google.cloud.tpu.v2.INetworkEndpoint[];

                    /** Node health. */
                    public health: (google.cloud.tpu.v2.Node.Health|keyof typeof google.cloud.tpu.v2.Node.Health);

                    /** Node labels. */
                    public labels: { [k: string]: string };

                    /** Node metadata. */
                    public metadata: { [k: string]: string };

                    /** Node tags. */
                    public tags: string[];

                    /** Node id. */
                    public id: (number|Long|string);

                    /** Node dataDisks. */
                    public dataDisks: google.cloud.tpu.v2.IAttachedDisk[];

                    /** Node apiVersion. */
                    public apiVersion: (google.cloud.tpu.v2.Node.ApiVersion|keyof typeof google.cloud.tpu.v2.Node.ApiVersion);

                    /** Node symptoms. */
                    public symptoms: google.cloud.tpu.v2.ISymptom[];

                    /** Node shieldedInstanceConfig. */
                    public shieldedInstanceConfig?: (google.cloud.tpu.v2.IShieldedInstanceConfig|null);

                    /**
                     * Creates a new Node instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Node instance
                     */
                    public static create(properties?: google.cloud.tpu.v2.INode): google.cloud.tpu.v2.Node;

                    /**
                     * Encodes the specified Node message. Does not implicitly {@link google.cloud.tpu.v2.Node.verify|verify} messages.
                     * @param message Node message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tpu.v2.INode, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Node message, length delimited. Does not implicitly {@link google.cloud.tpu.v2.Node.verify|verify} messages.
                     * @param message Node message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tpu.v2.INode, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Node message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Node
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tpu.v2.Node;

                    /**
                     * Decodes a Node message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Node
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tpu.v2.Node;

                    /**
                     * Verifies a Node message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Node message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Node
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tpu.v2.Node;

                    /**
                     * Creates a plain object from a Node message. Also converts values to other types if specified.
                     * @param message Node
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tpu.v2.Node, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Node to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Node
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace Node {

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        CREATING = 1,
                        READY = 2,
                        RESTARTING = 3,
                        REIMAGING = 4,
                        DELETING = 5,
                        REPAIRING = 6,
                        STOPPED = 8,
                        STOPPING = 9,
                        STARTING = 10,
                        PREEMPTED = 11,
                        TERMINATED = 12,
                        HIDING = 13,
                        HIDDEN = 14,
                        UNHIDING = 15
                    }

                    /** Health enum. */
                    enum Health {
                        HEALTH_UNSPECIFIED = 0,
                        HEALTHY = 1,
                        TIMEOUT = 3,
                        UNHEALTHY_TENSORFLOW = 4,
                        UNHEALTHY_MAINTENANCE = 5
                    }

                    /** ApiVersion enum. */
                    enum ApiVersion {
                        API_VERSION_UNSPECIFIED = 0,
                        V1_ALPHA1 = 1,
                        V1 = 2,
                        V2_ALPHA1 = 3,
                        V2 = 4
                    }
                }

                /** Properties of a ListNodesRequest. */
                interface IListNodesRequest {

                    /** ListNodesRequest parent */
                    parent?: (string|null);

                    /** ListNodesRequest pageSize */
                    pageSize?: (number|null);

                    /** ListNodesRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListNodesRequest. */
                class ListNodesRequest implements IListNodesRequest {

                    /**
                     * Constructs a new ListNodesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tpu.v2.IListNodesRequest);

                    /** ListNodesRequest parent. */
                    public parent: string;

                    /** ListNodesRequest pageSize. */
                    public pageSize: number;

                    /** ListNodesRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListNodesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListNodesRequest instance
                     */
                    public static create(properties?: google.cloud.tpu.v2.IListNodesRequest): google.cloud.tpu.v2.ListNodesRequest;

                    /**
                     * Encodes the specified ListNodesRequest message. Does not implicitly {@link google.cloud.tpu.v2.ListNodesRequest.verify|verify} messages.
                     * @param message ListNodesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tpu.v2.IListNodesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListNodesRequest message, length delimited. Does not implicitly {@link google.cloud.tpu.v2.ListNodesRequest.verify|verify} messages.
                     * @param message ListNodesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tpu.v2.IListNodesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListNodesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListNodesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tpu.v2.ListNodesRequest;

                    /**
                     * Decodes a ListNodesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListNodesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tpu.v2.ListNodesRequest;

                    /**
                     * Verifies a ListNodesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListNodesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListNodesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tpu.v2.ListNodesRequest;

                    /**
                     * Creates a plain object from a ListNodesRequest message. Also converts values to other types if specified.
                     * @param message ListNodesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tpu.v2.ListNodesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListNodesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListNodesRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListNodesResponse. */
                interface IListNodesResponse {

                    /** ListNodesResponse nodes */
                    nodes?: (google.cloud.tpu.v2.INode[]|null);

                    /** ListNodesResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListNodesResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a ListNodesResponse. */
                class ListNodesResponse implements IListNodesResponse {

                    /**
                     * Constructs a new ListNodesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tpu.v2.IListNodesResponse);

                    /** ListNodesResponse nodes. */
                    public nodes: google.cloud.tpu.v2.INode[];

                    /** ListNodesResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListNodesResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListNodesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListNodesResponse instance
                     */
                    public static create(properties?: google.cloud.tpu.v2.IListNodesResponse): google.cloud.tpu.v2.ListNodesResponse;

                    /**
                     * Encodes the specified ListNodesResponse message. Does not implicitly {@link google.cloud.tpu.v2.ListNodesResponse.verify|verify} messages.
                     * @param message ListNodesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tpu.v2.IListNodesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListNodesResponse message, length delimited. Does not implicitly {@link google.cloud.tpu.v2.ListNodesResponse.verify|verify} messages.
                     * @param message ListNodesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tpu.v2.IListNodesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListNodesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListNodesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tpu.v2.ListNodesResponse;

                    /**
                     * Decodes a ListNodesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListNodesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tpu.v2.ListNodesResponse;

                    /**
                     * Verifies a ListNodesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListNodesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListNodesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tpu.v2.ListNodesResponse;

                    /**
                     * Creates a plain object from a ListNodesResponse message. Also converts values to other types if specified.
                     * @param message ListNodesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tpu.v2.ListNodesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListNodesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListNodesResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetNodeRequest. */
                interface IGetNodeRequest {

                    /** GetNodeRequest name */
                    name?: (string|null);
                }

                /** Represents a GetNodeRequest. */
                class GetNodeRequest implements IGetNodeRequest {

                    /**
                     * Constructs a new GetNodeRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tpu.v2.IGetNodeRequest);

                    /** GetNodeRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetNodeRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetNodeRequest instance
                     */
                    public static create(properties?: google.cloud.tpu.v2.IGetNodeRequest): google.cloud.tpu.v2.GetNodeRequest;

                    /**
                     * Encodes the specified GetNodeRequest message. Does not implicitly {@link google.cloud.tpu.v2.GetNodeRequest.verify|verify} messages.
                     * @param message GetNodeRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tpu.v2.IGetNodeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetNodeRequest message, length delimited. Does not implicitly {@link google.cloud.tpu.v2.GetNodeRequest.verify|verify} messages.
                     * @param message GetNodeRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tpu.v2.IGetNodeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetNodeRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetNodeRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tpu.v2.GetNodeRequest;

                    /**
                     * Decodes a GetNodeRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetNodeRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tpu.v2.GetNodeRequest;

                    /**
                     * Verifies a GetNodeRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetNodeRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetNodeRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tpu.v2.GetNodeRequest;

                    /**
                     * Creates a plain object from a GetNodeRequest message. Also converts values to other types if specified.
                     * @param message GetNodeRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tpu.v2.GetNodeRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetNodeRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetNodeRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CreateNodeRequest. */
                interface ICreateNodeRequest {

                    /** CreateNodeRequest parent */
                    parent?: (string|null);

                    /** CreateNodeRequest nodeId */
                    nodeId?: (string|null);

                    /** CreateNodeRequest node */
                    node?: (google.cloud.tpu.v2.INode|null);
                }

                /** Represents a CreateNodeRequest. */
                class CreateNodeRequest implements ICreateNodeRequest {

                    /**
                     * Constructs a new CreateNodeRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tpu.v2.ICreateNodeRequest);

                    /** CreateNodeRequest parent. */
                    public parent: string;

                    /** CreateNodeRequest nodeId. */
                    public nodeId: string;

                    /** CreateNodeRequest node. */
                    public node?: (google.cloud.tpu.v2.INode|null);

                    /**
                     * Creates a new CreateNodeRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateNodeRequest instance
                     */
                    public static create(properties?: google.cloud.tpu.v2.ICreateNodeRequest): google.cloud.tpu.v2.CreateNodeRequest;

                    /**
                     * Encodes the specified CreateNodeRequest message. Does not implicitly {@link google.cloud.tpu.v2.CreateNodeRequest.verify|verify} messages.
                     * @param message CreateNodeRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tpu.v2.ICreateNodeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateNodeRequest message, length delimited. Does not implicitly {@link google.cloud.tpu.v2.CreateNodeRequest.verify|verify} messages.
                     * @param message CreateNodeRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tpu.v2.ICreateNodeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateNodeRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateNodeRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tpu.v2.CreateNodeRequest;

                    /**
                     * Decodes a CreateNodeRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateNodeRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tpu.v2.CreateNodeRequest;

                    /**
                     * Verifies a CreateNodeRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateNodeRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateNodeRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tpu.v2.CreateNodeRequest;

                    /**
                     * Creates a plain object from a CreateNodeRequest message. Also converts values to other types if specified.
                     * @param message CreateNodeRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tpu.v2.CreateNodeRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateNodeRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateNodeRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeleteNodeRequest. */
                interface IDeleteNodeRequest {

                    /** DeleteNodeRequest name */
                    name?: (string|null);
                }

                /** Represents a DeleteNodeRequest. */
                class DeleteNodeRequest implements IDeleteNodeRequest {

                    /**
                     * Constructs a new DeleteNodeRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tpu.v2.IDeleteNodeRequest);

                    /** DeleteNodeRequest name. */
                    public name: string;

                    /**
                     * Creates a new DeleteNodeRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteNodeRequest instance
                     */
                    public static create(properties?: google.cloud.tpu.v2.IDeleteNodeRequest): google.cloud.tpu.v2.DeleteNodeRequest;

                    /**
                     * Encodes the specified DeleteNodeRequest message. Does not implicitly {@link google.cloud.tpu.v2.DeleteNodeRequest.verify|verify} messages.
                     * @param message DeleteNodeRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tpu.v2.IDeleteNodeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteNodeRequest message, length delimited. Does not implicitly {@link google.cloud.tpu.v2.DeleteNodeRequest.verify|verify} messages.
                     * @param message DeleteNodeRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tpu.v2.IDeleteNodeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteNodeRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteNodeRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tpu.v2.DeleteNodeRequest;

                    /**
                     * Decodes a DeleteNodeRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteNodeRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tpu.v2.DeleteNodeRequest;

                    /**
                     * Verifies a DeleteNodeRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteNodeRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteNodeRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tpu.v2.DeleteNodeRequest;

                    /**
                     * Creates a plain object from a DeleteNodeRequest message. Also converts values to other types if specified.
                     * @param message DeleteNodeRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tpu.v2.DeleteNodeRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteNodeRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeleteNodeRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a StopNodeRequest. */
                interface IStopNodeRequest {

                    /** StopNodeRequest name */
                    name?: (string|null);
                }

                /** Represents a StopNodeRequest. */
                class StopNodeRequest implements IStopNodeRequest {

                    /**
                     * Constructs a new StopNodeRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tpu.v2.IStopNodeRequest);

                    /** StopNodeRequest name. */
                    public name: string;

                    /**
                     * Creates a new StopNodeRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns StopNodeRequest instance
                     */
                    public static create(properties?: google.cloud.tpu.v2.IStopNodeRequest): google.cloud.tpu.v2.StopNodeRequest;

                    /**
                     * Encodes the specified StopNodeRequest message. Does not implicitly {@link google.cloud.tpu.v2.StopNodeRequest.verify|verify} messages.
                     * @param message StopNodeRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tpu.v2.IStopNodeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified StopNodeRequest message, length delimited. Does not implicitly {@link google.cloud.tpu.v2.StopNodeRequest.verify|verify} messages.
                     * @param message StopNodeRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tpu.v2.IStopNodeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a StopNodeRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns StopNodeRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tpu.v2.StopNodeRequest;

                    /**
                     * Decodes a StopNodeRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns StopNodeRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tpu.v2.StopNodeRequest;

                    /**
                     * Verifies a StopNodeRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a StopNodeRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns StopNodeRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tpu.v2.StopNodeRequest;

                    /**
                     * Creates a plain object from a StopNodeRequest message. Also converts values to other types if specified.
                     * @param message StopNodeRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tpu.v2.StopNodeRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this StopNodeRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for StopNodeRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a StartNodeRequest. */
                interface IStartNodeRequest {

                    /** StartNodeRequest name */
                    name?: (string|null);
                }

                /** Represents a StartNodeRequest. */
                class StartNodeRequest implements IStartNodeRequest {

                    /**
                     * Constructs a new StartNodeRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tpu.v2.IStartNodeRequest);

                    /** StartNodeRequest name. */
                    public name: string;

                    /**
                     * Creates a new StartNodeRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns StartNodeRequest instance
                     */
                    public static create(properties?: google.cloud.tpu.v2.IStartNodeRequest): google.cloud.tpu.v2.StartNodeRequest;

                    /**
                     * Encodes the specified StartNodeRequest message. Does not implicitly {@link google.cloud.tpu.v2.StartNodeRequest.verify|verify} messages.
                     * @param message StartNodeRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tpu.v2.IStartNodeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified StartNodeRequest message, length delimited. Does not implicitly {@link google.cloud.tpu.v2.StartNodeRequest.verify|verify} messages.
                     * @param message StartNodeRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tpu.v2.IStartNodeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a StartNodeRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns StartNodeRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tpu.v2.StartNodeRequest;

                    /**
                     * Decodes a StartNodeRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns StartNodeRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tpu.v2.StartNodeRequest;

                    /**
                     * Verifies a StartNodeRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a StartNodeRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns StartNodeRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tpu.v2.StartNodeRequest;

                    /**
                     * Creates a plain object from a StartNodeRequest message. Also converts values to other types if specified.
                     * @param message StartNodeRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tpu.v2.StartNodeRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this StartNodeRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for StartNodeRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpdateNodeRequest. */
                interface IUpdateNodeRequest {

                    /** UpdateNodeRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateNodeRequest node */
                    node?: (google.cloud.tpu.v2.INode|null);
                }

                /** Represents an UpdateNodeRequest. */
                class UpdateNodeRequest implements IUpdateNodeRequest {

                    /**
                     * Constructs a new UpdateNodeRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tpu.v2.IUpdateNodeRequest);

                    /** UpdateNodeRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateNodeRequest node. */
                    public node?: (google.cloud.tpu.v2.INode|null);

                    /**
                     * Creates a new UpdateNodeRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateNodeRequest instance
                     */
                    public static create(properties?: google.cloud.tpu.v2.IUpdateNodeRequest): google.cloud.tpu.v2.UpdateNodeRequest;

                    /**
                     * Encodes the specified UpdateNodeRequest message. Does not implicitly {@link google.cloud.tpu.v2.UpdateNodeRequest.verify|verify} messages.
                     * @param message UpdateNodeRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tpu.v2.IUpdateNodeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateNodeRequest message, length delimited. Does not implicitly {@link google.cloud.tpu.v2.UpdateNodeRequest.verify|verify} messages.
                     * @param message UpdateNodeRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tpu.v2.IUpdateNodeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateNodeRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateNodeRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tpu.v2.UpdateNodeRequest;

                    /**
                     * Decodes an UpdateNodeRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateNodeRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tpu.v2.UpdateNodeRequest;

                    /**
                     * Verifies an UpdateNodeRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateNodeRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateNodeRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tpu.v2.UpdateNodeRequest;

                    /**
                     * Creates a plain object from an UpdateNodeRequest message. Also converts values to other types if specified.
                     * @param message UpdateNodeRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tpu.v2.UpdateNodeRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateNodeRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdateNodeRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ServiceIdentity. */
                interface IServiceIdentity {

                    /** ServiceIdentity email */
                    email?: (string|null);
                }

                /** Represents a ServiceIdentity. */
                class ServiceIdentity implements IServiceIdentity {

                    /**
                     * Constructs a new ServiceIdentity.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tpu.v2.IServiceIdentity);

                    /** ServiceIdentity email. */
                    public email: string;

                    /**
                     * Creates a new ServiceIdentity instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ServiceIdentity instance
                     */
                    public static create(properties?: google.cloud.tpu.v2.IServiceIdentity): google.cloud.tpu.v2.ServiceIdentity;

                    /**
                     * Encodes the specified ServiceIdentity message. Does not implicitly {@link google.cloud.tpu.v2.ServiceIdentity.verify|verify} messages.
                     * @param message ServiceIdentity message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tpu.v2.IServiceIdentity, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ServiceIdentity message, length delimited. Does not implicitly {@link google.cloud.tpu.v2.ServiceIdentity.verify|verify} messages.
                     * @param message ServiceIdentity message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tpu.v2.IServiceIdentity, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ServiceIdentity message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ServiceIdentity
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tpu.v2.ServiceIdentity;

                    /**
                     * Decodes a ServiceIdentity message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ServiceIdentity
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tpu.v2.ServiceIdentity;

                    /**
                     * Verifies a ServiceIdentity message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ServiceIdentity message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ServiceIdentity
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tpu.v2.ServiceIdentity;

                    /**
                     * Creates a plain object from a ServiceIdentity message. Also converts values to other types if specified.
                     * @param message ServiceIdentity
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tpu.v2.ServiceIdentity, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ServiceIdentity to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ServiceIdentity
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GenerateServiceIdentityRequest. */
                interface IGenerateServiceIdentityRequest {

                    /** GenerateServiceIdentityRequest parent */
                    parent?: (string|null);
                }

                /** Represents a GenerateServiceIdentityRequest. */
                class GenerateServiceIdentityRequest implements IGenerateServiceIdentityRequest {

                    /**
                     * Constructs a new GenerateServiceIdentityRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tpu.v2.IGenerateServiceIdentityRequest);

                    /** GenerateServiceIdentityRequest parent. */
                    public parent: string;

                    /**
                     * Creates a new GenerateServiceIdentityRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GenerateServiceIdentityRequest instance
                     */
                    public static create(properties?: google.cloud.tpu.v2.IGenerateServiceIdentityRequest): google.cloud.tpu.v2.GenerateServiceIdentityRequest;

                    /**
                     * Encodes the specified GenerateServiceIdentityRequest message. Does not implicitly {@link google.cloud.tpu.v2.GenerateServiceIdentityRequest.verify|verify} messages.
                     * @param message GenerateServiceIdentityRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tpu.v2.IGenerateServiceIdentityRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GenerateServiceIdentityRequest message, length delimited. Does not implicitly {@link google.cloud.tpu.v2.GenerateServiceIdentityRequest.verify|verify} messages.
                     * @param message GenerateServiceIdentityRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tpu.v2.IGenerateServiceIdentityRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GenerateServiceIdentityRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GenerateServiceIdentityRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tpu.v2.GenerateServiceIdentityRequest;

                    /**
                     * Decodes a GenerateServiceIdentityRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GenerateServiceIdentityRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tpu.v2.GenerateServiceIdentityRequest;

                    /**
                     * Verifies a GenerateServiceIdentityRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GenerateServiceIdentityRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GenerateServiceIdentityRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tpu.v2.GenerateServiceIdentityRequest;

                    /**
                     * Creates a plain object from a GenerateServiceIdentityRequest message. Also converts values to other types if specified.
                     * @param message GenerateServiceIdentityRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tpu.v2.GenerateServiceIdentityRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GenerateServiceIdentityRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GenerateServiceIdentityRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GenerateServiceIdentityResponse. */
                interface IGenerateServiceIdentityResponse {

                    /** GenerateServiceIdentityResponse identity */
                    identity?: (google.cloud.tpu.v2.IServiceIdentity|null);
                }

                /** Represents a GenerateServiceIdentityResponse. */
                class GenerateServiceIdentityResponse implements IGenerateServiceIdentityResponse {

                    /**
                     * Constructs a new GenerateServiceIdentityResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tpu.v2.IGenerateServiceIdentityResponse);

                    /** GenerateServiceIdentityResponse identity. */
                    public identity?: (google.cloud.tpu.v2.IServiceIdentity|null);

                    /**
                     * Creates a new GenerateServiceIdentityResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GenerateServiceIdentityResponse instance
                     */
                    public static create(properties?: google.cloud.tpu.v2.IGenerateServiceIdentityResponse): google.cloud.tpu.v2.GenerateServiceIdentityResponse;

                    /**
                     * Encodes the specified GenerateServiceIdentityResponse message. Does not implicitly {@link google.cloud.tpu.v2.GenerateServiceIdentityResponse.verify|verify} messages.
                     * @param message GenerateServiceIdentityResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tpu.v2.IGenerateServiceIdentityResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GenerateServiceIdentityResponse message, length delimited. Does not implicitly {@link google.cloud.tpu.v2.GenerateServiceIdentityResponse.verify|verify} messages.
                     * @param message GenerateServiceIdentityResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tpu.v2.IGenerateServiceIdentityResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GenerateServiceIdentityResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GenerateServiceIdentityResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tpu.v2.GenerateServiceIdentityResponse;

                    /**
                     * Decodes a GenerateServiceIdentityResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GenerateServiceIdentityResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tpu.v2.GenerateServiceIdentityResponse;

                    /**
                     * Verifies a GenerateServiceIdentityResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GenerateServiceIdentityResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GenerateServiceIdentityResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tpu.v2.GenerateServiceIdentityResponse;

                    /**
                     * Creates a plain object from a GenerateServiceIdentityResponse message. Also converts values to other types if specified.
                     * @param message GenerateServiceIdentityResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tpu.v2.GenerateServiceIdentityResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GenerateServiceIdentityResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GenerateServiceIdentityResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an AcceleratorType. */
                interface IAcceleratorType {

                    /** AcceleratorType name */
                    name?: (string|null);

                    /** AcceleratorType type */
                    type?: (string|null);
                }

                /** Represents an AcceleratorType. */
                class AcceleratorType implements IAcceleratorType {

                    /**
                     * Constructs a new AcceleratorType.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tpu.v2.IAcceleratorType);

                    /** AcceleratorType name. */
                    public name: string;

                    /** AcceleratorType type. */
                    public type: string;

                    /**
                     * Creates a new AcceleratorType instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AcceleratorType instance
                     */
                    public static create(properties?: google.cloud.tpu.v2.IAcceleratorType): google.cloud.tpu.v2.AcceleratorType;

                    /**
                     * Encodes the specified AcceleratorType message. Does not implicitly {@link google.cloud.tpu.v2.AcceleratorType.verify|verify} messages.
                     * @param message AcceleratorType message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tpu.v2.IAcceleratorType, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AcceleratorType message, length delimited. Does not implicitly {@link google.cloud.tpu.v2.AcceleratorType.verify|verify} messages.
                     * @param message AcceleratorType message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tpu.v2.IAcceleratorType, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AcceleratorType message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AcceleratorType
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tpu.v2.AcceleratorType;

                    /**
                     * Decodes an AcceleratorType message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AcceleratorType
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tpu.v2.AcceleratorType;

                    /**
                     * Verifies an AcceleratorType message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AcceleratorType message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AcceleratorType
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tpu.v2.AcceleratorType;

                    /**
                     * Creates a plain object from an AcceleratorType message. Also converts values to other types if specified.
                     * @param message AcceleratorType
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tpu.v2.AcceleratorType, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AcceleratorType to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for AcceleratorType
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetAcceleratorTypeRequest. */
                interface IGetAcceleratorTypeRequest {

                    /** GetAcceleratorTypeRequest name */
                    name?: (string|null);
                }

                /** Represents a GetAcceleratorTypeRequest. */
                class GetAcceleratorTypeRequest implements IGetAcceleratorTypeRequest {

                    /**
                     * Constructs a new GetAcceleratorTypeRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tpu.v2.IGetAcceleratorTypeRequest);

                    /** GetAcceleratorTypeRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetAcceleratorTypeRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetAcceleratorTypeRequest instance
                     */
                    public static create(properties?: google.cloud.tpu.v2.IGetAcceleratorTypeRequest): google.cloud.tpu.v2.GetAcceleratorTypeRequest;

                    /**
                     * Encodes the specified GetAcceleratorTypeRequest message. Does not implicitly {@link google.cloud.tpu.v2.GetAcceleratorTypeRequest.verify|verify} messages.
                     * @param message GetAcceleratorTypeRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tpu.v2.IGetAcceleratorTypeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetAcceleratorTypeRequest message, length delimited. Does not implicitly {@link google.cloud.tpu.v2.GetAcceleratorTypeRequest.verify|verify} messages.
                     * @param message GetAcceleratorTypeRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tpu.v2.IGetAcceleratorTypeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetAcceleratorTypeRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetAcceleratorTypeRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tpu.v2.GetAcceleratorTypeRequest;

                    /**
                     * Decodes a GetAcceleratorTypeRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetAcceleratorTypeRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tpu.v2.GetAcceleratorTypeRequest;

                    /**
                     * Verifies a GetAcceleratorTypeRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetAcceleratorTypeRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetAcceleratorTypeRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tpu.v2.GetAcceleratorTypeRequest;

                    /**
                     * Creates a plain object from a GetAcceleratorTypeRequest message. Also converts values to other types if specified.
                     * @param message GetAcceleratorTypeRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tpu.v2.GetAcceleratorTypeRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetAcceleratorTypeRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetAcceleratorTypeRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListAcceleratorTypesRequest. */
                interface IListAcceleratorTypesRequest {

                    /** ListAcceleratorTypesRequest parent */
                    parent?: (string|null);

                    /** ListAcceleratorTypesRequest pageSize */
                    pageSize?: (number|null);

                    /** ListAcceleratorTypesRequest pageToken */
                    pageToken?: (string|null);

                    /** ListAcceleratorTypesRequest filter */
                    filter?: (string|null);

                    /** ListAcceleratorTypesRequest orderBy */
                    orderBy?: (string|null);
                }

                /** Represents a ListAcceleratorTypesRequest. */
                class ListAcceleratorTypesRequest implements IListAcceleratorTypesRequest {

                    /**
                     * Constructs a new ListAcceleratorTypesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tpu.v2.IListAcceleratorTypesRequest);

                    /** ListAcceleratorTypesRequest parent. */
                    public parent: string;

                    /** ListAcceleratorTypesRequest pageSize. */
                    public pageSize: number;

                    /** ListAcceleratorTypesRequest pageToken. */
                    public pageToken: string;

                    /** ListAcceleratorTypesRequest filter. */
                    public filter: string;

                    /** ListAcceleratorTypesRequest orderBy. */
                    public orderBy: string;

                    /**
                     * Creates a new ListAcceleratorTypesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListAcceleratorTypesRequest instance
                     */
                    public static create(properties?: google.cloud.tpu.v2.IListAcceleratorTypesRequest): google.cloud.tpu.v2.ListAcceleratorTypesRequest;

                    /**
                     * Encodes the specified ListAcceleratorTypesRequest message. Does not implicitly {@link google.cloud.tpu.v2.ListAcceleratorTypesRequest.verify|verify} messages.
                     * @param message ListAcceleratorTypesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tpu.v2.IListAcceleratorTypesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListAcceleratorTypesRequest message, length delimited. Does not implicitly {@link google.cloud.tpu.v2.ListAcceleratorTypesRequest.verify|verify} messages.
                     * @param message ListAcceleratorTypesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tpu.v2.IListAcceleratorTypesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListAcceleratorTypesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListAcceleratorTypesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tpu.v2.ListAcceleratorTypesRequest;

                    /**
                     * Decodes a ListAcceleratorTypesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListAcceleratorTypesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tpu.v2.ListAcceleratorTypesRequest;

                    /**
                     * Verifies a ListAcceleratorTypesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListAcceleratorTypesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListAcceleratorTypesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tpu.v2.ListAcceleratorTypesRequest;

                    /**
                     * Creates a plain object from a ListAcceleratorTypesRequest message. Also converts values to other types if specified.
                     * @param message ListAcceleratorTypesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tpu.v2.ListAcceleratorTypesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListAcceleratorTypesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListAcceleratorTypesRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListAcceleratorTypesResponse. */
                interface IListAcceleratorTypesResponse {

                    /** ListAcceleratorTypesResponse acceleratorTypes */
                    acceleratorTypes?: (google.cloud.tpu.v2.IAcceleratorType[]|null);

                    /** ListAcceleratorTypesResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListAcceleratorTypesResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a ListAcceleratorTypesResponse. */
                class ListAcceleratorTypesResponse implements IListAcceleratorTypesResponse {

                    /**
                     * Constructs a new ListAcceleratorTypesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tpu.v2.IListAcceleratorTypesResponse);

                    /** ListAcceleratorTypesResponse acceleratorTypes. */
                    public acceleratorTypes: google.cloud.tpu.v2.IAcceleratorType[];

                    /** ListAcceleratorTypesResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListAcceleratorTypesResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListAcceleratorTypesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListAcceleratorTypesResponse instance
                     */
                    public static create(properties?: google.cloud.tpu.v2.IListAcceleratorTypesResponse): google.cloud.tpu.v2.ListAcceleratorTypesResponse;

                    /**
                     * Encodes the specified ListAcceleratorTypesResponse message. Does not implicitly {@link google.cloud.tpu.v2.ListAcceleratorTypesResponse.verify|verify} messages.
                     * @param message ListAcceleratorTypesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tpu.v2.IListAcceleratorTypesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListAcceleratorTypesResponse message, length delimited. Does not implicitly {@link google.cloud.tpu.v2.ListAcceleratorTypesResponse.verify|verify} messages.
                     * @param message ListAcceleratorTypesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tpu.v2.IListAcceleratorTypesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListAcceleratorTypesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListAcceleratorTypesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tpu.v2.ListAcceleratorTypesResponse;

                    /**
                     * Decodes a ListAcceleratorTypesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListAcceleratorTypesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tpu.v2.ListAcceleratorTypesResponse;

                    /**
                     * Verifies a ListAcceleratorTypesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListAcceleratorTypesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListAcceleratorTypesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tpu.v2.ListAcceleratorTypesResponse;

                    /**
                     * Creates a plain object from a ListAcceleratorTypesResponse message. Also converts values to other types if specified.
                     * @param message ListAcceleratorTypesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tpu.v2.ListAcceleratorTypesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListAcceleratorTypesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListAcceleratorTypesResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a RuntimeVersion. */
                interface IRuntimeVersion {

                    /** RuntimeVersion name */
                    name?: (string|null);

                    /** RuntimeVersion version */
                    version?: (string|null);
                }

                /** Represents a RuntimeVersion. */
                class RuntimeVersion implements IRuntimeVersion {

                    /**
                     * Constructs a new RuntimeVersion.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tpu.v2.IRuntimeVersion);

                    /** RuntimeVersion name. */
                    public name: string;

                    /** RuntimeVersion version. */
                    public version: string;

                    /**
                     * Creates a new RuntimeVersion instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RuntimeVersion instance
                     */
                    public static create(properties?: google.cloud.tpu.v2.IRuntimeVersion): google.cloud.tpu.v2.RuntimeVersion;

                    /**
                     * Encodes the specified RuntimeVersion message. Does not implicitly {@link google.cloud.tpu.v2.RuntimeVersion.verify|verify} messages.
                     * @param message RuntimeVersion message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tpu.v2.IRuntimeVersion, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RuntimeVersion message, length delimited. Does not implicitly {@link google.cloud.tpu.v2.RuntimeVersion.verify|verify} messages.
                     * @param message RuntimeVersion message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tpu.v2.IRuntimeVersion, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RuntimeVersion message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RuntimeVersion
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tpu.v2.RuntimeVersion;

                    /**
                     * Decodes a RuntimeVersion message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RuntimeVersion
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tpu.v2.RuntimeVersion;

                    /**
                     * Verifies a RuntimeVersion message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RuntimeVersion message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RuntimeVersion
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tpu.v2.RuntimeVersion;

                    /**
                     * Creates a plain object from a RuntimeVersion message. Also converts values to other types if specified.
                     * @param message RuntimeVersion
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tpu.v2.RuntimeVersion, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RuntimeVersion to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for RuntimeVersion
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetRuntimeVersionRequest. */
                interface IGetRuntimeVersionRequest {

                    /** GetRuntimeVersionRequest name */
                    name?: (string|null);
                }

                /** Represents a GetRuntimeVersionRequest. */
                class GetRuntimeVersionRequest implements IGetRuntimeVersionRequest {

                    /**
                     * Constructs a new GetRuntimeVersionRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tpu.v2.IGetRuntimeVersionRequest);

                    /** GetRuntimeVersionRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetRuntimeVersionRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetRuntimeVersionRequest instance
                     */
                    public static create(properties?: google.cloud.tpu.v2.IGetRuntimeVersionRequest): google.cloud.tpu.v2.GetRuntimeVersionRequest;

                    /**
                     * Encodes the specified GetRuntimeVersionRequest message. Does not implicitly {@link google.cloud.tpu.v2.GetRuntimeVersionRequest.verify|verify} messages.
                     * @param message GetRuntimeVersionRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tpu.v2.IGetRuntimeVersionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetRuntimeVersionRequest message, length delimited. Does not implicitly {@link google.cloud.tpu.v2.GetRuntimeVersionRequest.verify|verify} messages.
                     * @param message GetRuntimeVersionRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tpu.v2.IGetRuntimeVersionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetRuntimeVersionRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetRuntimeVersionRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tpu.v2.GetRuntimeVersionRequest;

                    /**
                     * Decodes a GetRuntimeVersionRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetRuntimeVersionRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tpu.v2.GetRuntimeVersionRequest;

                    /**
                     * Verifies a GetRuntimeVersionRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetRuntimeVersionRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetRuntimeVersionRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tpu.v2.GetRuntimeVersionRequest;

                    /**
                     * Creates a plain object from a GetRuntimeVersionRequest message. Also converts values to other types if specified.
                     * @param message GetRuntimeVersionRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tpu.v2.GetRuntimeVersionRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetRuntimeVersionRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetRuntimeVersionRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListRuntimeVersionsRequest. */
                interface IListRuntimeVersionsRequest {

                    /** ListRuntimeVersionsRequest parent */
                    parent?: (string|null);

                    /** ListRuntimeVersionsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListRuntimeVersionsRequest pageToken */
                    pageToken?: (string|null);

                    /** ListRuntimeVersionsRequest filter */
                    filter?: (string|null);

                    /** ListRuntimeVersionsRequest orderBy */
                    orderBy?: (string|null);
                }

                /** Represents a ListRuntimeVersionsRequest. */
                class ListRuntimeVersionsRequest implements IListRuntimeVersionsRequest {

                    /**
                     * Constructs a new ListRuntimeVersionsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tpu.v2.IListRuntimeVersionsRequest);

                    /** ListRuntimeVersionsRequest parent. */
                    public parent: string;

                    /** ListRuntimeVersionsRequest pageSize. */
                    public pageSize: number;

                    /** ListRuntimeVersionsRequest pageToken. */
                    public pageToken: string;

                    /** ListRuntimeVersionsRequest filter. */
                    public filter: string;

                    /** ListRuntimeVersionsRequest orderBy. */
                    public orderBy: string;

                    /**
                     * Creates a new ListRuntimeVersionsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListRuntimeVersionsRequest instance
                     */
                    public static create(properties?: google.cloud.tpu.v2.IListRuntimeVersionsRequest): google.cloud.tpu.v2.ListRuntimeVersionsRequest;

                    /**
                     * Encodes the specified ListRuntimeVersionsRequest message. Does not implicitly {@link google.cloud.tpu.v2.ListRuntimeVersionsRequest.verify|verify} messages.
                     * @param message ListRuntimeVersionsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tpu.v2.IListRuntimeVersionsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListRuntimeVersionsRequest message, length delimited. Does not implicitly {@link google.cloud.tpu.v2.ListRuntimeVersionsRequest.verify|verify} messages.
                     * @param message ListRuntimeVersionsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tpu.v2.IListRuntimeVersionsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListRuntimeVersionsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListRuntimeVersionsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tpu.v2.ListRuntimeVersionsRequest;

                    /**
                     * Decodes a ListRuntimeVersionsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListRuntimeVersionsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tpu.v2.ListRuntimeVersionsRequest;

                    /**
                     * Verifies a ListRuntimeVersionsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListRuntimeVersionsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListRuntimeVersionsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tpu.v2.ListRuntimeVersionsRequest;

                    /**
                     * Creates a plain object from a ListRuntimeVersionsRequest message. Also converts values to other types if specified.
                     * @param message ListRuntimeVersionsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tpu.v2.ListRuntimeVersionsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListRuntimeVersionsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListRuntimeVersionsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListRuntimeVersionsResponse. */
                interface IListRuntimeVersionsResponse {

                    /** ListRuntimeVersionsResponse runtimeVersions */
                    runtimeVersions?: (google.cloud.tpu.v2.IRuntimeVersion[]|null);

                    /** ListRuntimeVersionsResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListRuntimeVersionsResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a ListRuntimeVersionsResponse. */
                class ListRuntimeVersionsResponse implements IListRuntimeVersionsResponse {

                    /**
                     * Constructs a new ListRuntimeVersionsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tpu.v2.IListRuntimeVersionsResponse);

                    /** ListRuntimeVersionsResponse runtimeVersions. */
                    public runtimeVersions: google.cloud.tpu.v2.IRuntimeVersion[];

                    /** ListRuntimeVersionsResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListRuntimeVersionsResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListRuntimeVersionsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListRuntimeVersionsResponse instance
                     */
                    public static create(properties?: google.cloud.tpu.v2.IListRuntimeVersionsResponse): google.cloud.tpu.v2.ListRuntimeVersionsResponse;

                    /**
                     * Encodes the specified ListRuntimeVersionsResponse message. Does not implicitly {@link google.cloud.tpu.v2.ListRuntimeVersionsResponse.verify|verify} messages.
                     * @param message ListRuntimeVersionsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tpu.v2.IListRuntimeVersionsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListRuntimeVersionsResponse message, length delimited. Does not implicitly {@link google.cloud.tpu.v2.ListRuntimeVersionsResponse.verify|verify} messages.
                     * @param message ListRuntimeVersionsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tpu.v2.IListRuntimeVersionsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListRuntimeVersionsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListRuntimeVersionsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tpu.v2.ListRuntimeVersionsResponse;

                    /**
                     * Decodes a ListRuntimeVersionsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListRuntimeVersionsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tpu.v2.ListRuntimeVersionsResponse;

                    /**
                     * Verifies a ListRuntimeVersionsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListRuntimeVersionsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListRuntimeVersionsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tpu.v2.ListRuntimeVersionsResponse;

                    /**
                     * Creates a plain object from a ListRuntimeVersionsResponse message. Also converts values to other types if specified.
                     * @param message ListRuntimeVersionsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tpu.v2.ListRuntimeVersionsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListRuntimeVersionsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListRuntimeVersionsResponse
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

                    /** OperationMetadata statusDetail */
                    statusDetail?: (string|null);

                    /** OperationMetadata cancelRequested */
                    cancelRequested?: (boolean|null);

                    /** OperationMetadata apiVersion */
                    apiVersion?: (string|null);
                }

                /** Represents an OperationMetadata. */
                class OperationMetadata implements IOperationMetadata {

                    /**
                     * Constructs a new OperationMetadata.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tpu.v2.IOperationMetadata);

                    /** OperationMetadata createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** OperationMetadata endTime. */
                    public endTime?: (google.protobuf.ITimestamp|null);

                    /** OperationMetadata target. */
                    public target: string;

                    /** OperationMetadata verb. */
                    public verb: string;

                    /** OperationMetadata statusDetail. */
                    public statusDetail: string;

                    /** OperationMetadata cancelRequested. */
                    public cancelRequested: boolean;

                    /** OperationMetadata apiVersion. */
                    public apiVersion: string;

                    /**
                     * Creates a new OperationMetadata instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns OperationMetadata instance
                     */
                    public static create(properties?: google.cloud.tpu.v2.IOperationMetadata): google.cloud.tpu.v2.OperationMetadata;

                    /**
                     * Encodes the specified OperationMetadata message. Does not implicitly {@link google.cloud.tpu.v2.OperationMetadata.verify|verify} messages.
                     * @param message OperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tpu.v2.IOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified OperationMetadata message, length delimited. Does not implicitly {@link google.cloud.tpu.v2.OperationMetadata.verify|verify} messages.
                     * @param message OperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tpu.v2.IOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an OperationMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns OperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tpu.v2.OperationMetadata;

                    /**
                     * Decodes an OperationMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns OperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tpu.v2.OperationMetadata;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.tpu.v2.OperationMetadata;

                    /**
                     * Creates a plain object from an OperationMetadata message. Also converts values to other types if specified.
                     * @param message OperationMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tpu.v2.OperationMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

                /** Properties of a Symptom. */
                interface ISymptom {

                    /** Symptom createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** Symptom symptomType */
                    symptomType?: (google.cloud.tpu.v2.Symptom.SymptomType|keyof typeof google.cloud.tpu.v2.Symptom.SymptomType|null);

                    /** Symptom details */
                    details?: (string|null);

                    /** Symptom workerId */
                    workerId?: (string|null);
                }

                /** Represents a Symptom. */
                class Symptom implements ISymptom {

                    /**
                     * Constructs a new Symptom.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tpu.v2.ISymptom);

                    /** Symptom createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** Symptom symptomType. */
                    public symptomType: (google.cloud.tpu.v2.Symptom.SymptomType|keyof typeof google.cloud.tpu.v2.Symptom.SymptomType);

                    /** Symptom details. */
                    public details: string;

                    /** Symptom workerId. */
                    public workerId: string;

                    /**
                     * Creates a new Symptom instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Symptom instance
                     */
                    public static create(properties?: google.cloud.tpu.v2.ISymptom): google.cloud.tpu.v2.Symptom;

                    /**
                     * Encodes the specified Symptom message. Does not implicitly {@link google.cloud.tpu.v2.Symptom.verify|verify} messages.
                     * @param message Symptom message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tpu.v2.ISymptom, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Symptom message, length delimited. Does not implicitly {@link google.cloud.tpu.v2.Symptom.verify|verify} messages.
                     * @param message Symptom message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tpu.v2.ISymptom, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Symptom message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Symptom
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tpu.v2.Symptom;

                    /**
                     * Decodes a Symptom message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Symptom
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tpu.v2.Symptom;

                    /**
                     * Verifies a Symptom message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Symptom message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Symptom
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tpu.v2.Symptom;

                    /**
                     * Creates a plain object from a Symptom message. Also converts values to other types if specified.
                     * @param message Symptom
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tpu.v2.Symptom, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Symptom to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Symptom
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace Symptom {

                    /** SymptomType enum. */
                    enum SymptomType {
                        SYMPTOM_TYPE_UNSPECIFIED = 0,
                        LOW_MEMORY = 1,
                        OUT_OF_MEMORY = 2,
                        EXECUTE_TIMED_OUT = 3,
                        MESH_BUILD_FAIL = 4,
                        HBM_OUT_OF_MEMORY = 5,
                        PROJECT_ABUSE = 6
                    }
                }

                /** Properties of a GetGuestAttributesRequest. */
                interface IGetGuestAttributesRequest {

                    /** GetGuestAttributesRequest name */
                    name?: (string|null);

                    /** GetGuestAttributesRequest queryPath */
                    queryPath?: (string|null);

                    /** GetGuestAttributesRequest workerIds */
                    workerIds?: (string[]|null);
                }

                /** Represents a GetGuestAttributesRequest. */
                class GetGuestAttributesRequest implements IGetGuestAttributesRequest {

                    /**
                     * Constructs a new GetGuestAttributesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tpu.v2.IGetGuestAttributesRequest);

                    /** GetGuestAttributesRequest name. */
                    public name: string;

                    /** GetGuestAttributesRequest queryPath. */
                    public queryPath: string;

                    /** GetGuestAttributesRequest workerIds. */
                    public workerIds: string[];

                    /**
                     * Creates a new GetGuestAttributesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetGuestAttributesRequest instance
                     */
                    public static create(properties?: google.cloud.tpu.v2.IGetGuestAttributesRequest): google.cloud.tpu.v2.GetGuestAttributesRequest;

                    /**
                     * Encodes the specified GetGuestAttributesRequest message. Does not implicitly {@link google.cloud.tpu.v2.GetGuestAttributesRequest.verify|verify} messages.
                     * @param message GetGuestAttributesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tpu.v2.IGetGuestAttributesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetGuestAttributesRequest message, length delimited. Does not implicitly {@link google.cloud.tpu.v2.GetGuestAttributesRequest.verify|verify} messages.
                     * @param message GetGuestAttributesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tpu.v2.IGetGuestAttributesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetGuestAttributesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetGuestAttributesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tpu.v2.GetGuestAttributesRequest;

                    /**
                     * Decodes a GetGuestAttributesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetGuestAttributesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tpu.v2.GetGuestAttributesRequest;

                    /**
                     * Verifies a GetGuestAttributesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetGuestAttributesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetGuestAttributesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tpu.v2.GetGuestAttributesRequest;

                    /**
                     * Creates a plain object from a GetGuestAttributesRequest message. Also converts values to other types if specified.
                     * @param message GetGuestAttributesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tpu.v2.GetGuestAttributesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetGuestAttributesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetGuestAttributesRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetGuestAttributesResponse. */
                interface IGetGuestAttributesResponse {

                    /** GetGuestAttributesResponse guestAttributes */
                    guestAttributes?: (google.cloud.tpu.v2.IGuestAttributes[]|null);
                }

                /** Represents a GetGuestAttributesResponse. */
                class GetGuestAttributesResponse implements IGetGuestAttributesResponse {

                    /**
                     * Constructs a new GetGuestAttributesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tpu.v2.IGetGuestAttributesResponse);

                    /** GetGuestAttributesResponse guestAttributes. */
                    public guestAttributes: google.cloud.tpu.v2.IGuestAttributes[];

                    /**
                     * Creates a new GetGuestAttributesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetGuestAttributesResponse instance
                     */
                    public static create(properties?: google.cloud.tpu.v2.IGetGuestAttributesResponse): google.cloud.tpu.v2.GetGuestAttributesResponse;

                    /**
                     * Encodes the specified GetGuestAttributesResponse message. Does not implicitly {@link google.cloud.tpu.v2.GetGuestAttributesResponse.verify|verify} messages.
                     * @param message GetGuestAttributesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tpu.v2.IGetGuestAttributesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetGuestAttributesResponse message, length delimited. Does not implicitly {@link google.cloud.tpu.v2.GetGuestAttributesResponse.verify|verify} messages.
                     * @param message GetGuestAttributesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tpu.v2.IGetGuestAttributesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetGuestAttributesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetGuestAttributesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tpu.v2.GetGuestAttributesResponse;

                    /**
                     * Decodes a GetGuestAttributesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetGuestAttributesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tpu.v2.GetGuestAttributesResponse;

                    /**
                     * Verifies a GetGuestAttributesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetGuestAttributesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetGuestAttributesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tpu.v2.GetGuestAttributesResponse;

                    /**
                     * Creates a plain object from a GetGuestAttributesResponse message. Also converts values to other types if specified.
                     * @param message GetGuestAttributesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tpu.v2.GetGuestAttributesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetGuestAttributesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetGuestAttributesResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ShieldedInstanceConfig. */
                interface IShieldedInstanceConfig {

                    /** ShieldedInstanceConfig enableSecureBoot */
                    enableSecureBoot?: (boolean|null);
                }

                /** Represents a ShieldedInstanceConfig. */
                class ShieldedInstanceConfig implements IShieldedInstanceConfig {

                    /**
                     * Constructs a new ShieldedInstanceConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tpu.v2.IShieldedInstanceConfig);

                    /** ShieldedInstanceConfig enableSecureBoot. */
                    public enableSecureBoot: boolean;

                    /**
                     * Creates a new ShieldedInstanceConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ShieldedInstanceConfig instance
                     */
                    public static create(properties?: google.cloud.tpu.v2.IShieldedInstanceConfig): google.cloud.tpu.v2.ShieldedInstanceConfig;

                    /**
                     * Encodes the specified ShieldedInstanceConfig message. Does not implicitly {@link google.cloud.tpu.v2.ShieldedInstanceConfig.verify|verify} messages.
                     * @param message ShieldedInstanceConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tpu.v2.IShieldedInstanceConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ShieldedInstanceConfig message, length delimited. Does not implicitly {@link google.cloud.tpu.v2.ShieldedInstanceConfig.verify|verify} messages.
                     * @param message ShieldedInstanceConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tpu.v2.IShieldedInstanceConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ShieldedInstanceConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ShieldedInstanceConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tpu.v2.ShieldedInstanceConfig;

                    /**
                     * Decodes a ShieldedInstanceConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ShieldedInstanceConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tpu.v2.ShieldedInstanceConfig;

                    /**
                     * Verifies a ShieldedInstanceConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ShieldedInstanceConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ShieldedInstanceConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tpu.v2.ShieldedInstanceConfig;

                    /**
                     * Creates a plain object from a ShieldedInstanceConfig message. Also converts values to other types if specified.
                     * @param message ShieldedInstanceConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tpu.v2.ShieldedInstanceConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ShieldedInstanceConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ShieldedInstanceConfig
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }
            }

            /** Namespace v2alpha1. */
            namespace v2alpha1 {

                /** Represents a Tpu */
                class Tpu extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new Tpu service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new Tpu service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Tpu;

                    /**
                     * Calls ListNodes.
                     * @param request ListNodesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListNodesResponse
                     */
                    public listNodes(request: google.cloud.tpu.v2alpha1.IListNodesRequest, callback: google.cloud.tpu.v2alpha1.Tpu.ListNodesCallback): void;

                    /**
                     * Calls ListNodes.
                     * @param request ListNodesRequest message or plain object
                     * @returns Promise
                     */
                    public listNodes(request: google.cloud.tpu.v2alpha1.IListNodesRequest): Promise<google.cloud.tpu.v2alpha1.ListNodesResponse>;

                    /**
                     * Calls GetNode.
                     * @param request GetNodeRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Node
                     */
                    public getNode(request: google.cloud.tpu.v2alpha1.IGetNodeRequest, callback: google.cloud.tpu.v2alpha1.Tpu.GetNodeCallback): void;

                    /**
                     * Calls GetNode.
                     * @param request GetNodeRequest message or plain object
                     * @returns Promise
                     */
                    public getNode(request: google.cloud.tpu.v2alpha1.IGetNodeRequest): Promise<google.cloud.tpu.v2alpha1.Node>;

                    /**
                     * Calls CreateNode.
                     * @param request CreateNodeRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createNode(request: google.cloud.tpu.v2alpha1.ICreateNodeRequest, callback: google.cloud.tpu.v2alpha1.Tpu.CreateNodeCallback): void;

                    /**
                     * Calls CreateNode.
                     * @param request CreateNodeRequest message or plain object
                     * @returns Promise
                     */
                    public createNode(request: google.cloud.tpu.v2alpha1.ICreateNodeRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls DeleteNode.
                     * @param request DeleteNodeRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deleteNode(request: google.cloud.tpu.v2alpha1.IDeleteNodeRequest, callback: google.cloud.tpu.v2alpha1.Tpu.DeleteNodeCallback): void;

                    /**
                     * Calls DeleteNode.
                     * @param request DeleteNodeRequest message or plain object
                     * @returns Promise
                     */
                    public deleteNode(request: google.cloud.tpu.v2alpha1.IDeleteNodeRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls StopNode.
                     * @param request StopNodeRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public stopNode(request: google.cloud.tpu.v2alpha1.IStopNodeRequest, callback: google.cloud.tpu.v2alpha1.Tpu.StopNodeCallback): void;

                    /**
                     * Calls StopNode.
                     * @param request StopNodeRequest message or plain object
                     * @returns Promise
                     */
                    public stopNode(request: google.cloud.tpu.v2alpha1.IStopNodeRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls StartNode.
                     * @param request StartNodeRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public startNode(request: google.cloud.tpu.v2alpha1.IStartNodeRequest, callback: google.cloud.tpu.v2alpha1.Tpu.StartNodeCallback): void;

                    /**
                     * Calls StartNode.
                     * @param request StartNodeRequest message or plain object
                     * @returns Promise
                     */
                    public startNode(request: google.cloud.tpu.v2alpha1.IStartNodeRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls UpdateNode.
                     * @param request UpdateNodeRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public updateNode(request: google.cloud.tpu.v2alpha1.IUpdateNodeRequest, callback: google.cloud.tpu.v2alpha1.Tpu.UpdateNodeCallback): void;

                    /**
                     * Calls UpdateNode.
                     * @param request UpdateNodeRequest message or plain object
                     * @returns Promise
                     */
                    public updateNode(request: google.cloud.tpu.v2alpha1.IUpdateNodeRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ListQueuedResources.
                     * @param request ListQueuedResourcesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListQueuedResourcesResponse
                     */
                    public listQueuedResources(request: google.cloud.tpu.v2alpha1.IListQueuedResourcesRequest, callback: google.cloud.tpu.v2alpha1.Tpu.ListQueuedResourcesCallback): void;

                    /**
                     * Calls ListQueuedResources.
                     * @param request ListQueuedResourcesRequest message or plain object
                     * @returns Promise
                     */
                    public listQueuedResources(request: google.cloud.tpu.v2alpha1.IListQueuedResourcesRequest): Promise<google.cloud.tpu.v2alpha1.ListQueuedResourcesResponse>;

                    /**
                     * Calls GetQueuedResource.
                     * @param request GetQueuedResourceRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and QueuedResource
                     */
                    public getQueuedResource(request: google.cloud.tpu.v2alpha1.IGetQueuedResourceRequest, callback: google.cloud.tpu.v2alpha1.Tpu.GetQueuedResourceCallback): void;

                    /**
                     * Calls GetQueuedResource.
                     * @param request GetQueuedResourceRequest message or plain object
                     * @returns Promise
                     */
                    public getQueuedResource(request: google.cloud.tpu.v2alpha1.IGetQueuedResourceRequest): Promise<google.cloud.tpu.v2alpha1.QueuedResource>;

                    /**
                     * Calls CreateQueuedResource.
                     * @param request CreateQueuedResourceRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createQueuedResource(request: google.cloud.tpu.v2alpha1.ICreateQueuedResourceRequest, callback: google.cloud.tpu.v2alpha1.Tpu.CreateQueuedResourceCallback): void;

                    /**
                     * Calls CreateQueuedResource.
                     * @param request CreateQueuedResourceRequest message or plain object
                     * @returns Promise
                     */
                    public createQueuedResource(request: google.cloud.tpu.v2alpha1.ICreateQueuedResourceRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls DeleteQueuedResource.
                     * @param request DeleteQueuedResourceRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deleteQueuedResource(request: google.cloud.tpu.v2alpha1.IDeleteQueuedResourceRequest, callback: google.cloud.tpu.v2alpha1.Tpu.DeleteQueuedResourceCallback): void;

                    /**
                     * Calls DeleteQueuedResource.
                     * @param request DeleteQueuedResourceRequest message or plain object
                     * @returns Promise
                     */
                    public deleteQueuedResource(request: google.cloud.tpu.v2alpha1.IDeleteQueuedResourceRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls GenerateServiceIdentity.
                     * @param request GenerateServiceIdentityRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and GenerateServiceIdentityResponse
                     */
                    public generateServiceIdentity(request: google.cloud.tpu.v2alpha1.IGenerateServiceIdentityRequest, callback: google.cloud.tpu.v2alpha1.Tpu.GenerateServiceIdentityCallback): void;

                    /**
                     * Calls GenerateServiceIdentity.
                     * @param request GenerateServiceIdentityRequest message or plain object
                     * @returns Promise
                     */
                    public generateServiceIdentity(request: google.cloud.tpu.v2alpha1.IGenerateServiceIdentityRequest): Promise<google.cloud.tpu.v2alpha1.GenerateServiceIdentityResponse>;

                    /**
                     * Calls ListAcceleratorTypes.
                     * @param request ListAcceleratorTypesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListAcceleratorTypesResponse
                     */
                    public listAcceleratorTypes(request: google.cloud.tpu.v2alpha1.IListAcceleratorTypesRequest, callback: google.cloud.tpu.v2alpha1.Tpu.ListAcceleratorTypesCallback): void;

                    /**
                     * Calls ListAcceleratorTypes.
                     * @param request ListAcceleratorTypesRequest message or plain object
                     * @returns Promise
                     */
                    public listAcceleratorTypes(request: google.cloud.tpu.v2alpha1.IListAcceleratorTypesRequest): Promise<google.cloud.tpu.v2alpha1.ListAcceleratorTypesResponse>;

                    /**
                     * Calls GetAcceleratorType.
                     * @param request GetAcceleratorTypeRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and AcceleratorType
                     */
                    public getAcceleratorType(request: google.cloud.tpu.v2alpha1.IGetAcceleratorTypeRequest, callback: google.cloud.tpu.v2alpha1.Tpu.GetAcceleratorTypeCallback): void;

                    /**
                     * Calls GetAcceleratorType.
                     * @param request GetAcceleratorTypeRequest message or plain object
                     * @returns Promise
                     */
                    public getAcceleratorType(request: google.cloud.tpu.v2alpha1.IGetAcceleratorTypeRequest): Promise<google.cloud.tpu.v2alpha1.AcceleratorType>;

                    /**
                     * Calls ListRuntimeVersions.
                     * @param request ListRuntimeVersionsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListRuntimeVersionsResponse
                     */
                    public listRuntimeVersions(request: google.cloud.tpu.v2alpha1.IListRuntimeVersionsRequest, callback: google.cloud.tpu.v2alpha1.Tpu.ListRuntimeVersionsCallback): void;

                    /**
                     * Calls ListRuntimeVersions.
                     * @param request ListRuntimeVersionsRequest message or plain object
                     * @returns Promise
                     */
                    public listRuntimeVersions(request: google.cloud.tpu.v2alpha1.IListRuntimeVersionsRequest): Promise<google.cloud.tpu.v2alpha1.ListRuntimeVersionsResponse>;

                    /**
                     * Calls GetRuntimeVersion.
                     * @param request GetRuntimeVersionRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and RuntimeVersion
                     */
                    public getRuntimeVersion(request: google.cloud.tpu.v2alpha1.IGetRuntimeVersionRequest, callback: google.cloud.tpu.v2alpha1.Tpu.GetRuntimeVersionCallback): void;

                    /**
                     * Calls GetRuntimeVersion.
                     * @param request GetRuntimeVersionRequest message or plain object
                     * @returns Promise
                     */
                    public getRuntimeVersion(request: google.cloud.tpu.v2alpha1.IGetRuntimeVersionRequest): Promise<google.cloud.tpu.v2alpha1.RuntimeVersion>;

                    /**
                     * Calls GetGuestAttributes.
                     * @param request GetGuestAttributesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and GetGuestAttributesResponse
                     */
                    public getGuestAttributes(request: google.cloud.tpu.v2alpha1.IGetGuestAttributesRequest, callback: google.cloud.tpu.v2alpha1.Tpu.GetGuestAttributesCallback): void;

                    /**
                     * Calls GetGuestAttributes.
                     * @param request GetGuestAttributesRequest message or plain object
                     * @returns Promise
                     */
                    public getGuestAttributes(request: google.cloud.tpu.v2alpha1.IGetGuestAttributesRequest): Promise<google.cloud.tpu.v2alpha1.GetGuestAttributesResponse>;

                    /**
                     * Calls SimulateMaintenanceEvent.
                     * @param request SimulateMaintenanceEventRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public simulateMaintenanceEvent(request: google.cloud.tpu.v2alpha1.ISimulateMaintenanceEventRequest, callback: google.cloud.tpu.v2alpha1.Tpu.SimulateMaintenanceEventCallback): void;

                    /**
                     * Calls SimulateMaintenanceEvent.
                     * @param request SimulateMaintenanceEventRequest message or plain object
                     * @returns Promise
                     */
                    public simulateMaintenanceEvent(request: google.cloud.tpu.v2alpha1.ISimulateMaintenanceEventRequest): Promise<google.longrunning.Operation>;
                }

                namespace Tpu {

                    /**
                     * Callback as used by {@link google.cloud.tpu.v2alpha1.Tpu|listNodes}.
                     * @param error Error, if any
                     * @param [response] ListNodesResponse
                     */
                    type ListNodesCallback = (error: (Error|null), response?: google.cloud.tpu.v2alpha1.ListNodesResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.tpu.v2alpha1.Tpu|getNode}.
                     * @param error Error, if any
                     * @param [response] Node
                     */
                    type GetNodeCallback = (error: (Error|null), response?: google.cloud.tpu.v2alpha1.Node) => void;

                    /**
                     * Callback as used by {@link google.cloud.tpu.v2alpha1.Tpu|createNode}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateNodeCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.tpu.v2alpha1.Tpu|deleteNode}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeleteNodeCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.tpu.v2alpha1.Tpu|stopNode}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type StopNodeCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.tpu.v2alpha1.Tpu|startNode}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type StartNodeCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.tpu.v2alpha1.Tpu|updateNode}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type UpdateNodeCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.tpu.v2alpha1.Tpu|listQueuedResources}.
                     * @param error Error, if any
                     * @param [response] ListQueuedResourcesResponse
                     */
                    type ListQueuedResourcesCallback = (error: (Error|null), response?: google.cloud.tpu.v2alpha1.ListQueuedResourcesResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.tpu.v2alpha1.Tpu|getQueuedResource}.
                     * @param error Error, if any
                     * @param [response] QueuedResource
                     */
                    type GetQueuedResourceCallback = (error: (Error|null), response?: google.cloud.tpu.v2alpha1.QueuedResource) => void;

                    /**
                     * Callback as used by {@link google.cloud.tpu.v2alpha1.Tpu|createQueuedResource}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateQueuedResourceCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.tpu.v2alpha1.Tpu|deleteQueuedResource}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeleteQueuedResourceCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.tpu.v2alpha1.Tpu|generateServiceIdentity}.
                     * @param error Error, if any
                     * @param [response] GenerateServiceIdentityResponse
                     */
                    type GenerateServiceIdentityCallback = (error: (Error|null), response?: google.cloud.tpu.v2alpha1.GenerateServiceIdentityResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.tpu.v2alpha1.Tpu|listAcceleratorTypes}.
                     * @param error Error, if any
                     * @param [response] ListAcceleratorTypesResponse
                     */
                    type ListAcceleratorTypesCallback = (error: (Error|null), response?: google.cloud.tpu.v2alpha1.ListAcceleratorTypesResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.tpu.v2alpha1.Tpu|getAcceleratorType}.
                     * @param error Error, if any
                     * @param [response] AcceleratorType
                     */
                    type GetAcceleratorTypeCallback = (error: (Error|null), response?: google.cloud.tpu.v2alpha1.AcceleratorType) => void;

                    /**
                     * Callback as used by {@link google.cloud.tpu.v2alpha1.Tpu|listRuntimeVersions}.
                     * @param error Error, if any
                     * @param [response] ListRuntimeVersionsResponse
                     */
                    type ListRuntimeVersionsCallback = (error: (Error|null), response?: google.cloud.tpu.v2alpha1.ListRuntimeVersionsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.tpu.v2alpha1.Tpu|getRuntimeVersion}.
                     * @param error Error, if any
                     * @param [response] RuntimeVersion
                     */
                    type GetRuntimeVersionCallback = (error: (Error|null), response?: google.cloud.tpu.v2alpha1.RuntimeVersion) => void;

                    /**
                     * Callback as used by {@link google.cloud.tpu.v2alpha1.Tpu|getGuestAttributes}.
                     * @param error Error, if any
                     * @param [response] GetGuestAttributesResponse
                     */
                    type GetGuestAttributesCallback = (error: (Error|null), response?: google.cloud.tpu.v2alpha1.GetGuestAttributesResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.tpu.v2alpha1.Tpu|simulateMaintenanceEvent}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type SimulateMaintenanceEventCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;
                }

                /** Properties of a GuestAttributes. */
                interface IGuestAttributes {

                    /** GuestAttributes queryPath */
                    queryPath?: (string|null);

                    /** GuestAttributes queryValue */
                    queryValue?: (google.cloud.tpu.v2alpha1.IGuestAttributesValue|null);
                }

                /** Represents a GuestAttributes. */
                class GuestAttributes implements IGuestAttributes {

                    /**
                     * Constructs a new GuestAttributes.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tpu.v2alpha1.IGuestAttributes);

                    /** GuestAttributes queryPath. */
                    public queryPath: string;

                    /** GuestAttributes queryValue. */
                    public queryValue?: (google.cloud.tpu.v2alpha1.IGuestAttributesValue|null);

                    /**
                     * Creates a new GuestAttributes instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GuestAttributes instance
                     */
                    public static create(properties?: google.cloud.tpu.v2alpha1.IGuestAttributes): google.cloud.tpu.v2alpha1.GuestAttributes;

                    /**
                     * Encodes the specified GuestAttributes message. Does not implicitly {@link google.cloud.tpu.v2alpha1.GuestAttributes.verify|verify} messages.
                     * @param message GuestAttributes message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tpu.v2alpha1.IGuestAttributes, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GuestAttributes message, length delimited. Does not implicitly {@link google.cloud.tpu.v2alpha1.GuestAttributes.verify|verify} messages.
                     * @param message GuestAttributes message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tpu.v2alpha1.IGuestAttributes, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GuestAttributes message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GuestAttributes
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tpu.v2alpha1.GuestAttributes;

                    /**
                     * Decodes a GuestAttributes message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GuestAttributes
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tpu.v2alpha1.GuestAttributes;

                    /**
                     * Verifies a GuestAttributes message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GuestAttributes message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GuestAttributes
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tpu.v2alpha1.GuestAttributes;

                    /**
                     * Creates a plain object from a GuestAttributes message. Also converts values to other types if specified.
                     * @param message GuestAttributes
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tpu.v2alpha1.GuestAttributes, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GuestAttributes to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GuestAttributes
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GuestAttributesValue. */
                interface IGuestAttributesValue {

                    /** GuestAttributesValue items */
                    items?: (google.cloud.tpu.v2alpha1.IGuestAttributesEntry[]|null);
                }

                /** Represents a GuestAttributesValue. */
                class GuestAttributesValue implements IGuestAttributesValue {

                    /**
                     * Constructs a new GuestAttributesValue.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tpu.v2alpha1.IGuestAttributesValue);

                    /** GuestAttributesValue items. */
                    public items: google.cloud.tpu.v2alpha1.IGuestAttributesEntry[];

                    /**
                     * Creates a new GuestAttributesValue instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GuestAttributesValue instance
                     */
                    public static create(properties?: google.cloud.tpu.v2alpha1.IGuestAttributesValue): google.cloud.tpu.v2alpha1.GuestAttributesValue;

                    /**
                     * Encodes the specified GuestAttributesValue message. Does not implicitly {@link google.cloud.tpu.v2alpha1.GuestAttributesValue.verify|verify} messages.
                     * @param message GuestAttributesValue message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tpu.v2alpha1.IGuestAttributesValue, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GuestAttributesValue message, length delimited. Does not implicitly {@link google.cloud.tpu.v2alpha1.GuestAttributesValue.verify|verify} messages.
                     * @param message GuestAttributesValue message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tpu.v2alpha1.IGuestAttributesValue, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GuestAttributesValue message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GuestAttributesValue
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tpu.v2alpha1.GuestAttributesValue;

                    /**
                     * Decodes a GuestAttributesValue message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GuestAttributesValue
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tpu.v2alpha1.GuestAttributesValue;

                    /**
                     * Verifies a GuestAttributesValue message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GuestAttributesValue message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GuestAttributesValue
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tpu.v2alpha1.GuestAttributesValue;

                    /**
                     * Creates a plain object from a GuestAttributesValue message. Also converts values to other types if specified.
                     * @param message GuestAttributesValue
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tpu.v2alpha1.GuestAttributesValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GuestAttributesValue to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GuestAttributesValue
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GuestAttributesEntry. */
                interface IGuestAttributesEntry {

                    /** GuestAttributesEntry namespace */
                    namespace?: (string|null);

                    /** GuestAttributesEntry key */
                    key?: (string|null);

                    /** GuestAttributesEntry value */
                    value?: (string|null);
                }

                /** Represents a GuestAttributesEntry. */
                class GuestAttributesEntry implements IGuestAttributesEntry {

                    /**
                     * Constructs a new GuestAttributesEntry.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tpu.v2alpha1.IGuestAttributesEntry);

                    /** GuestAttributesEntry namespace. */
                    public namespace: string;

                    /** GuestAttributesEntry key. */
                    public key: string;

                    /** GuestAttributesEntry value. */
                    public value: string;

                    /**
                     * Creates a new GuestAttributesEntry instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GuestAttributesEntry instance
                     */
                    public static create(properties?: google.cloud.tpu.v2alpha1.IGuestAttributesEntry): google.cloud.tpu.v2alpha1.GuestAttributesEntry;

                    /**
                     * Encodes the specified GuestAttributesEntry message. Does not implicitly {@link google.cloud.tpu.v2alpha1.GuestAttributesEntry.verify|verify} messages.
                     * @param message GuestAttributesEntry message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tpu.v2alpha1.IGuestAttributesEntry, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GuestAttributesEntry message, length delimited. Does not implicitly {@link google.cloud.tpu.v2alpha1.GuestAttributesEntry.verify|verify} messages.
                     * @param message GuestAttributesEntry message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tpu.v2alpha1.IGuestAttributesEntry, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GuestAttributesEntry message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GuestAttributesEntry
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tpu.v2alpha1.GuestAttributesEntry;

                    /**
                     * Decodes a GuestAttributesEntry message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GuestAttributesEntry
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tpu.v2alpha1.GuestAttributesEntry;

                    /**
                     * Verifies a GuestAttributesEntry message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GuestAttributesEntry message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GuestAttributesEntry
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tpu.v2alpha1.GuestAttributesEntry;

                    /**
                     * Creates a plain object from a GuestAttributesEntry message. Also converts values to other types if specified.
                     * @param message GuestAttributesEntry
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tpu.v2alpha1.GuestAttributesEntry, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GuestAttributesEntry to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GuestAttributesEntry
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an AttachedDisk. */
                interface IAttachedDisk {

                    /** AttachedDisk sourceDisk */
                    sourceDisk?: (string|null);

                    /** AttachedDisk mode */
                    mode?: (google.cloud.tpu.v2alpha1.AttachedDisk.DiskMode|keyof typeof google.cloud.tpu.v2alpha1.AttachedDisk.DiskMode|null);
                }

                /** Represents an AttachedDisk. */
                class AttachedDisk implements IAttachedDisk {

                    /**
                     * Constructs a new AttachedDisk.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tpu.v2alpha1.IAttachedDisk);

                    /** AttachedDisk sourceDisk. */
                    public sourceDisk: string;

                    /** AttachedDisk mode. */
                    public mode: (google.cloud.tpu.v2alpha1.AttachedDisk.DiskMode|keyof typeof google.cloud.tpu.v2alpha1.AttachedDisk.DiskMode);

                    /**
                     * Creates a new AttachedDisk instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AttachedDisk instance
                     */
                    public static create(properties?: google.cloud.tpu.v2alpha1.IAttachedDisk): google.cloud.tpu.v2alpha1.AttachedDisk;

                    /**
                     * Encodes the specified AttachedDisk message. Does not implicitly {@link google.cloud.tpu.v2alpha1.AttachedDisk.verify|verify} messages.
                     * @param message AttachedDisk message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tpu.v2alpha1.IAttachedDisk, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AttachedDisk message, length delimited. Does not implicitly {@link google.cloud.tpu.v2alpha1.AttachedDisk.verify|verify} messages.
                     * @param message AttachedDisk message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tpu.v2alpha1.IAttachedDisk, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AttachedDisk message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AttachedDisk
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tpu.v2alpha1.AttachedDisk;

                    /**
                     * Decodes an AttachedDisk message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AttachedDisk
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tpu.v2alpha1.AttachedDisk;

                    /**
                     * Verifies an AttachedDisk message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AttachedDisk message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AttachedDisk
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tpu.v2alpha1.AttachedDisk;

                    /**
                     * Creates a plain object from an AttachedDisk message. Also converts values to other types if specified.
                     * @param message AttachedDisk
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tpu.v2alpha1.AttachedDisk, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AttachedDisk to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for AttachedDisk
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace AttachedDisk {

                    /** DiskMode enum. */
                    enum DiskMode {
                        DISK_MODE_UNSPECIFIED = 0,
                        READ_WRITE = 1,
                        READ_ONLY = 2
                    }
                }

                /** Properties of a SchedulingConfig. */
                interface ISchedulingConfig {

                    /** SchedulingConfig preemptible */
                    preemptible?: (boolean|null);

                    /** SchedulingConfig reserved */
                    reserved?: (boolean|null);
                }

                /** Represents a SchedulingConfig. */
                class SchedulingConfig implements ISchedulingConfig {

                    /**
                     * Constructs a new SchedulingConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tpu.v2alpha1.ISchedulingConfig);

                    /** SchedulingConfig preemptible. */
                    public preemptible: boolean;

                    /** SchedulingConfig reserved. */
                    public reserved: boolean;

                    /**
                     * Creates a new SchedulingConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SchedulingConfig instance
                     */
                    public static create(properties?: google.cloud.tpu.v2alpha1.ISchedulingConfig): google.cloud.tpu.v2alpha1.SchedulingConfig;

                    /**
                     * Encodes the specified SchedulingConfig message. Does not implicitly {@link google.cloud.tpu.v2alpha1.SchedulingConfig.verify|verify} messages.
                     * @param message SchedulingConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tpu.v2alpha1.ISchedulingConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SchedulingConfig message, length delimited. Does not implicitly {@link google.cloud.tpu.v2alpha1.SchedulingConfig.verify|verify} messages.
                     * @param message SchedulingConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tpu.v2alpha1.ISchedulingConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SchedulingConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SchedulingConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tpu.v2alpha1.SchedulingConfig;

                    /**
                     * Decodes a SchedulingConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SchedulingConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tpu.v2alpha1.SchedulingConfig;

                    /**
                     * Verifies a SchedulingConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SchedulingConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SchedulingConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tpu.v2alpha1.SchedulingConfig;

                    /**
                     * Creates a plain object from a SchedulingConfig message. Also converts values to other types if specified.
                     * @param message SchedulingConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tpu.v2alpha1.SchedulingConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SchedulingConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for SchedulingConfig
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a NetworkEndpoint. */
                interface INetworkEndpoint {

                    /** NetworkEndpoint ipAddress */
                    ipAddress?: (string|null);

                    /** NetworkEndpoint port */
                    port?: (number|null);

                    /** NetworkEndpoint accessConfig */
                    accessConfig?: (google.cloud.tpu.v2alpha1.IAccessConfig|null);
                }

                /** Represents a NetworkEndpoint. */
                class NetworkEndpoint implements INetworkEndpoint {

                    /**
                     * Constructs a new NetworkEndpoint.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tpu.v2alpha1.INetworkEndpoint);

                    /** NetworkEndpoint ipAddress. */
                    public ipAddress: string;

                    /** NetworkEndpoint port. */
                    public port: number;

                    /** NetworkEndpoint accessConfig. */
                    public accessConfig?: (google.cloud.tpu.v2alpha1.IAccessConfig|null);

                    /**
                     * Creates a new NetworkEndpoint instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns NetworkEndpoint instance
                     */
                    public static create(properties?: google.cloud.tpu.v2alpha1.INetworkEndpoint): google.cloud.tpu.v2alpha1.NetworkEndpoint;

                    /**
                     * Encodes the specified NetworkEndpoint message. Does not implicitly {@link google.cloud.tpu.v2alpha1.NetworkEndpoint.verify|verify} messages.
                     * @param message NetworkEndpoint message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tpu.v2alpha1.INetworkEndpoint, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified NetworkEndpoint message, length delimited. Does not implicitly {@link google.cloud.tpu.v2alpha1.NetworkEndpoint.verify|verify} messages.
                     * @param message NetworkEndpoint message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tpu.v2alpha1.INetworkEndpoint, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a NetworkEndpoint message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns NetworkEndpoint
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tpu.v2alpha1.NetworkEndpoint;

                    /**
                     * Decodes a NetworkEndpoint message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns NetworkEndpoint
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tpu.v2alpha1.NetworkEndpoint;

                    /**
                     * Verifies a NetworkEndpoint message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a NetworkEndpoint message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns NetworkEndpoint
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tpu.v2alpha1.NetworkEndpoint;

                    /**
                     * Creates a plain object from a NetworkEndpoint message. Also converts values to other types if specified.
                     * @param message NetworkEndpoint
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tpu.v2alpha1.NetworkEndpoint, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this NetworkEndpoint to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for NetworkEndpoint
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an AccessConfig. */
                interface IAccessConfig {

                    /** AccessConfig externalIp */
                    externalIp?: (string|null);
                }

                /** Represents an AccessConfig. */
                class AccessConfig implements IAccessConfig {

                    /**
                     * Constructs a new AccessConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tpu.v2alpha1.IAccessConfig);

                    /** AccessConfig externalIp. */
                    public externalIp: string;

                    /**
                     * Creates a new AccessConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AccessConfig instance
                     */
                    public static create(properties?: google.cloud.tpu.v2alpha1.IAccessConfig): google.cloud.tpu.v2alpha1.AccessConfig;

                    /**
                     * Encodes the specified AccessConfig message. Does not implicitly {@link google.cloud.tpu.v2alpha1.AccessConfig.verify|verify} messages.
                     * @param message AccessConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tpu.v2alpha1.IAccessConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AccessConfig message, length delimited. Does not implicitly {@link google.cloud.tpu.v2alpha1.AccessConfig.verify|verify} messages.
                     * @param message AccessConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tpu.v2alpha1.IAccessConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AccessConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AccessConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tpu.v2alpha1.AccessConfig;

                    /**
                     * Decodes an AccessConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AccessConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tpu.v2alpha1.AccessConfig;

                    /**
                     * Verifies an AccessConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AccessConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AccessConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tpu.v2alpha1.AccessConfig;

                    /**
                     * Creates a plain object from an AccessConfig message. Also converts values to other types if specified.
                     * @param message AccessConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tpu.v2alpha1.AccessConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AccessConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for AccessConfig
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a NetworkConfig. */
                interface INetworkConfig {

                    /** NetworkConfig network */
                    network?: (string|null);

                    /** NetworkConfig subnetwork */
                    subnetwork?: (string|null);

                    /** NetworkConfig enableExternalIps */
                    enableExternalIps?: (boolean|null);

                    /** NetworkConfig canIpForward */
                    canIpForward?: (boolean|null);
                }

                /** Represents a NetworkConfig. */
                class NetworkConfig implements INetworkConfig {

                    /**
                     * Constructs a new NetworkConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tpu.v2alpha1.INetworkConfig);

                    /** NetworkConfig network. */
                    public network: string;

                    /** NetworkConfig subnetwork. */
                    public subnetwork: string;

                    /** NetworkConfig enableExternalIps. */
                    public enableExternalIps: boolean;

                    /** NetworkConfig canIpForward. */
                    public canIpForward: boolean;

                    /**
                     * Creates a new NetworkConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns NetworkConfig instance
                     */
                    public static create(properties?: google.cloud.tpu.v2alpha1.INetworkConfig): google.cloud.tpu.v2alpha1.NetworkConfig;

                    /**
                     * Encodes the specified NetworkConfig message. Does not implicitly {@link google.cloud.tpu.v2alpha1.NetworkConfig.verify|verify} messages.
                     * @param message NetworkConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tpu.v2alpha1.INetworkConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified NetworkConfig message, length delimited. Does not implicitly {@link google.cloud.tpu.v2alpha1.NetworkConfig.verify|verify} messages.
                     * @param message NetworkConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tpu.v2alpha1.INetworkConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a NetworkConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns NetworkConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tpu.v2alpha1.NetworkConfig;

                    /**
                     * Decodes a NetworkConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns NetworkConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tpu.v2alpha1.NetworkConfig;

                    /**
                     * Verifies a NetworkConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a NetworkConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns NetworkConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tpu.v2alpha1.NetworkConfig;

                    /**
                     * Creates a plain object from a NetworkConfig message. Also converts values to other types if specified.
                     * @param message NetworkConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tpu.v2alpha1.NetworkConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this NetworkConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for NetworkConfig
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ServiceAccount. */
                interface IServiceAccount {

                    /** ServiceAccount email */
                    email?: (string|null);

                    /** ServiceAccount scope */
                    scope?: (string[]|null);
                }

                /** Represents a ServiceAccount. */
                class ServiceAccount implements IServiceAccount {

                    /**
                     * Constructs a new ServiceAccount.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tpu.v2alpha1.IServiceAccount);

                    /** ServiceAccount email. */
                    public email: string;

                    /** ServiceAccount scope. */
                    public scope: string[];

                    /**
                     * Creates a new ServiceAccount instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ServiceAccount instance
                     */
                    public static create(properties?: google.cloud.tpu.v2alpha1.IServiceAccount): google.cloud.tpu.v2alpha1.ServiceAccount;

                    /**
                     * Encodes the specified ServiceAccount message. Does not implicitly {@link google.cloud.tpu.v2alpha1.ServiceAccount.verify|verify} messages.
                     * @param message ServiceAccount message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tpu.v2alpha1.IServiceAccount, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ServiceAccount message, length delimited. Does not implicitly {@link google.cloud.tpu.v2alpha1.ServiceAccount.verify|verify} messages.
                     * @param message ServiceAccount message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tpu.v2alpha1.IServiceAccount, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ServiceAccount message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ServiceAccount
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tpu.v2alpha1.ServiceAccount;

                    /**
                     * Decodes a ServiceAccount message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ServiceAccount
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tpu.v2alpha1.ServiceAccount;

                    /**
                     * Verifies a ServiceAccount message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ServiceAccount message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ServiceAccount
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tpu.v2alpha1.ServiceAccount;

                    /**
                     * Creates a plain object from a ServiceAccount message. Also converts values to other types if specified.
                     * @param message ServiceAccount
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tpu.v2alpha1.ServiceAccount, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ServiceAccount to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ServiceAccount
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Node. */
                interface INode {

                    /** Node name */
                    name?: (string|null);

                    /** Node description */
                    description?: (string|null);

                    /** Node acceleratorType */
                    acceleratorType?: (string|null);

                    /** Node state */
                    state?: (google.cloud.tpu.v2alpha1.Node.State|keyof typeof google.cloud.tpu.v2alpha1.Node.State|null);

                    /** Node healthDescription */
                    healthDescription?: (string|null);

                    /** Node runtimeVersion */
                    runtimeVersion?: (string|null);

                    /** Node networkConfig */
                    networkConfig?: (google.cloud.tpu.v2alpha1.INetworkConfig|null);

                    /** Node cidrBlock */
                    cidrBlock?: (string|null);

                    /** Node serviceAccount */
                    serviceAccount?: (google.cloud.tpu.v2alpha1.IServiceAccount|null);

                    /** Node createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** Node schedulingConfig */
                    schedulingConfig?: (google.cloud.tpu.v2alpha1.ISchedulingConfig|null);

                    /** Node networkEndpoints */
                    networkEndpoints?: (google.cloud.tpu.v2alpha1.INetworkEndpoint[]|null);

                    /** Node health */
                    health?: (google.cloud.tpu.v2alpha1.Node.Health|keyof typeof google.cloud.tpu.v2alpha1.Node.Health|null);

                    /** Node labels */
                    labels?: ({ [k: string]: string }|null);

                    /** Node metadata */
                    metadata?: ({ [k: string]: string }|null);

                    /** Node tags */
                    tags?: (string[]|null);

                    /** Node id */
                    id?: (number|Long|string|null);

                    /** Node dataDisks */
                    dataDisks?: (google.cloud.tpu.v2alpha1.IAttachedDisk[]|null);

                    /** Node apiVersion */
                    apiVersion?: (google.cloud.tpu.v2alpha1.Node.ApiVersion|keyof typeof google.cloud.tpu.v2alpha1.Node.ApiVersion|null);

                    /** Node symptoms */
                    symptoms?: (google.cloud.tpu.v2alpha1.ISymptom[]|null);

                    /** Node queuedResource */
                    queuedResource?: (string|null);

                    /** Node shieldedInstanceConfig */
                    shieldedInstanceConfig?: (google.cloud.tpu.v2alpha1.IShieldedInstanceConfig|null);
                }

                /** Represents a Node. */
                class Node implements INode {

                    /**
                     * Constructs a new Node.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tpu.v2alpha1.INode);

                    /** Node name. */
                    public name: string;

                    /** Node description. */
                    public description: string;

                    /** Node acceleratorType. */
                    public acceleratorType: string;

                    /** Node state. */
                    public state: (google.cloud.tpu.v2alpha1.Node.State|keyof typeof google.cloud.tpu.v2alpha1.Node.State);

                    /** Node healthDescription. */
                    public healthDescription: string;

                    /** Node runtimeVersion. */
                    public runtimeVersion: string;

                    /** Node networkConfig. */
                    public networkConfig?: (google.cloud.tpu.v2alpha1.INetworkConfig|null);

                    /** Node cidrBlock. */
                    public cidrBlock: string;

                    /** Node serviceAccount. */
                    public serviceAccount?: (google.cloud.tpu.v2alpha1.IServiceAccount|null);

                    /** Node createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** Node schedulingConfig. */
                    public schedulingConfig?: (google.cloud.tpu.v2alpha1.ISchedulingConfig|null);

                    /** Node networkEndpoints. */
                    public networkEndpoints: google.cloud.tpu.v2alpha1.INetworkEndpoint[];

                    /** Node health. */
                    public health: (google.cloud.tpu.v2alpha1.Node.Health|keyof typeof google.cloud.tpu.v2alpha1.Node.Health);

                    /** Node labels. */
                    public labels: { [k: string]: string };

                    /** Node metadata. */
                    public metadata: { [k: string]: string };

                    /** Node tags. */
                    public tags: string[];

                    /** Node id. */
                    public id: (number|Long|string);

                    /** Node dataDisks. */
                    public dataDisks: google.cloud.tpu.v2alpha1.IAttachedDisk[];

                    /** Node apiVersion. */
                    public apiVersion: (google.cloud.tpu.v2alpha1.Node.ApiVersion|keyof typeof google.cloud.tpu.v2alpha1.Node.ApiVersion);

                    /** Node symptoms. */
                    public symptoms: google.cloud.tpu.v2alpha1.ISymptom[];

                    /** Node queuedResource. */
                    public queuedResource: string;

                    /** Node shieldedInstanceConfig. */
                    public shieldedInstanceConfig?: (google.cloud.tpu.v2alpha1.IShieldedInstanceConfig|null);

                    /**
                     * Creates a new Node instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Node instance
                     */
                    public static create(properties?: google.cloud.tpu.v2alpha1.INode): google.cloud.tpu.v2alpha1.Node;

                    /**
                     * Encodes the specified Node message. Does not implicitly {@link google.cloud.tpu.v2alpha1.Node.verify|verify} messages.
                     * @param message Node message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tpu.v2alpha1.INode, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Node message, length delimited. Does not implicitly {@link google.cloud.tpu.v2alpha1.Node.verify|verify} messages.
                     * @param message Node message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tpu.v2alpha1.INode, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Node message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Node
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tpu.v2alpha1.Node;

                    /**
                     * Decodes a Node message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Node
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tpu.v2alpha1.Node;

                    /**
                     * Verifies a Node message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Node message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Node
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tpu.v2alpha1.Node;

                    /**
                     * Creates a plain object from a Node message. Also converts values to other types if specified.
                     * @param message Node
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tpu.v2alpha1.Node, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Node to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Node
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace Node {

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        CREATING = 1,
                        READY = 2,
                        RESTARTING = 3,
                        REIMAGING = 4,
                        DELETING = 5,
                        REPAIRING = 6,
                        STOPPED = 8,
                        STOPPING = 9,
                        STARTING = 10,
                        PREEMPTED = 11,
                        TERMINATED = 12,
                        HIDING = 13,
                        HIDDEN = 14,
                        UNHIDING = 15
                    }

                    /** Health enum. */
                    enum Health {
                        HEALTH_UNSPECIFIED = 0,
                        HEALTHY = 1,
                        TIMEOUT = 3,
                        UNHEALTHY_TENSORFLOW = 4,
                        UNHEALTHY_MAINTENANCE = 5
                    }

                    /** ApiVersion enum. */
                    enum ApiVersion {
                        API_VERSION_UNSPECIFIED = 0,
                        V1_ALPHA1 = 1,
                        V1 = 2,
                        V2_ALPHA1 = 3
                    }
                }

                /** Properties of a QueuedResource. */
                interface IQueuedResource {

                    /** QueuedResource name */
                    name?: (string|null);

                    /** QueuedResource tpu */
                    tpu?: (google.cloud.tpu.v2alpha1.QueuedResource.ITpu|null);

                    /** QueuedResource bestEffort */
                    bestEffort?: (google.cloud.tpu.v2alpha1.QueuedResource.IBestEffort|null);

                    /** QueuedResource guaranteed */
                    guaranteed?: (google.cloud.tpu.v2alpha1.QueuedResource.IGuaranteed|null);

                    /** QueuedResource queueingPolicy */
                    queueingPolicy?: (google.cloud.tpu.v2alpha1.QueuedResource.IQueueingPolicy|null);

                    /** QueuedResource state */
                    state?: (google.cloud.tpu.v2alpha1.IQueuedResourceState|null);
                }

                /** Represents a QueuedResource. */
                class QueuedResource implements IQueuedResource {

                    /**
                     * Constructs a new QueuedResource.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tpu.v2alpha1.IQueuedResource);

                    /** QueuedResource name. */
                    public name: string;

                    /** QueuedResource tpu. */
                    public tpu?: (google.cloud.tpu.v2alpha1.QueuedResource.ITpu|null);

                    /** QueuedResource bestEffort. */
                    public bestEffort?: (google.cloud.tpu.v2alpha1.QueuedResource.IBestEffort|null);

                    /** QueuedResource guaranteed. */
                    public guaranteed?: (google.cloud.tpu.v2alpha1.QueuedResource.IGuaranteed|null);

                    /** QueuedResource queueingPolicy. */
                    public queueingPolicy?: (google.cloud.tpu.v2alpha1.QueuedResource.IQueueingPolicy|null);

                    /** QueuedResource state. */
                    public state?: (google.cloud.tpu.v2alpha1.IQueuedResourceState|null);

                    /** QueuedResource resource. */
                    public resource?: "tpu";

                    /** QueuedResource tier. */
                    public tier?: ("bestEffort"|"guaranteed");

                    /**
                     * Creates a new QueuedResource instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns QueuedResource instance
                     */
                    public static create(properties?: google.cloud.tpu.v2alpha1.IQueuedResource): google.cloud.tpu.v2alpha1.QueuedResource;

                    /**
                     * Encodes the specified QueuedResource message. Does not implicitly {@link google.cloud.tpu.v2alpha1.QueuedResource.verify|verify} messages.
                     * @param message QueuedResource message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tpu.v2alpha1.IQueuedResource, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified QueuedResource message, length delimited. Does not implicitly {@link google.cloud.tpu.v2alpha1.QueuedResource.verify|verify} messages.
                     * @param message QueuedResource message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tpu.v2alpha1.IQueuedResource, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a QueuedResource message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns QueuedResource
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tpu.v2alpha1.QueuedResource;

                    /**
                     * Decodes a QueuedResource message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns QueuedResource
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tpu.v2alpha1.QueuedResource;

                    /**
                     * Verifies a QueuedResource message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a QueuedResource message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns QueuedResource
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tpu.v2alpha1.QueuedResource;

                    /**
                     * Creates a plain object from a QueuedResource message. Also converts values to other types if specified.
                     * @param message QueuedResource
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tpu.v2alpha1.QueuedResource, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this QueuedResource to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for QueuedResource
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace QueuedResource {

                    /** Properties of a Tpu. */
                    interface ITpu {

                        /** Tpu nodeSpec */
                        nodeSpec?: (google.cloud.tpu.v2alpha1.QueuedResource.Tpu.INodeSpec[]|null);
                    }

                    /** Represents a Tpu. */
                    class Tpu implements ITpu {

                        /**
                         * Constructs a new Tpu.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.tpu.v2alpha1.QueuedResource.ITpu);

                        /** Tpu nodeSpec. */
                        public nodeSpec: google.cloud.tpu.v2alpha1.QueuedResource.Tpu.INodeSpec[];

                        /**
                         * Creates a new Tpu instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Tpu instance
                         */
                        public static create(properties?: google.cloud.tpu.v2alpha1.QueuedResource.ITpu): google.cloud.tpu.v2alpha1.QueuedResource.Tpu;

                        /**
                         * Encodes the specified Tpu message. Does not implicitly {@link google.cloud.tpu.v2alpha1.QueuedResource.Tpu.verify|verify} messages.
                         * @param message Tpu message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.tpu.v2alpha1.QueuedResource.ITpu, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Tpu message, length delimited. Does not implicitly {@link google.cloud.tpu.v2alpha1.QueuedResource.Tpu.verify|verify} messages.
                         * @param message Tpu message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.tpu.v2alpha1.QueuedResource.ITpu, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Tpu message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Tpu
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tpu.v2alpha1.QueuedResource.Tpu;

                        /**
                         * Decodes a Tpu message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Tpu
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tpu.v2alpha1.QueuedResource.Tpu;

                        /**
                         * Verifies a Tpu message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Tpu message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Tpu
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.tpu.v2alpha1.QueuedResource.Tpu;

                        /**
                         * Creates a plain object from a Tpu message. Also converts values to other types if specified.
                         * @param message Tpu
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.tpu.v2alpha1.QueuedResource.Tpu, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Tpu to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for Tpu
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace Tpu {

                        /** Properties of a NodeSpec. */
                        interface INodeSpec {

                            /** NodeSpec parent */
                            parent?: (string|null);

                            /** NodeSpec nodeId */
                            nodeId?: (string|null);

                            /** NodeSpec node */
                            node?: (google.cloud.tpu.v2alpha1.INode|null);
                        }

                        /** Represents a NodeSpec. */
                        class NodeSpec implements INodeSpec {

                            /**
                             * Constructs a new NodeSpec.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.tpu.v2alpha1.QueuedResource.Tpu.INodeSpec);

                            /** NodeSpec parent. */
                            public parent: string;

                            /** NodeSpec nodeId. */
                            public nodeId: string;

                            /** NodeSpec node. */
                            public node?: (google.cloud.tpu.v2alpha1.INode|null);

                            /**
                             * Creates a new NodeSpec instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns NodeSpec instance
                             */
                            public static create(properties?: google.cloud.tpu.v2alpha1.QueuedResource.Tpu.INodeSpec): google.cloud.tpu.v2alpha1.QueuedResource.Tpu.NodeSpec;

                            /**
                             * Encodes the specified NodeSpec message. Does not implicitly {@link google.cloud.tpu.v2alpha1.QueuedResource.Tpu.NodeSpec.verify|verify} messages.
                             * @param message NodeSpec message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.tpu.v2alpha1.QueuedResource.Tpu.INodeSpec, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified NodeSpec message, length delimited. Does not implicitly {@link google.cloud.tpu.v2alpha1.QueuedResource.Tpu.NodeSpec.verify|verify} messages.
                             * @param message NodeSpec message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.tpu.v2alpha1.QueuedResource.Tpu.INodeSpec, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a NodeSpec message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns NodeSpec
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tpu.v2alpha1.QueuedResource.Tpu.NodeSpec;

                            /**
                             * Decodes a NodeSpec message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns NodeSpec
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tpu.v2alpha1.QueuedResource.Tpu.NodeSpec;

                            /**
                             * Verifies a NodeSpec message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a NodeSpec message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns NodeSpec
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.tpu.v2alpha1.QueuedResource.Tpu.NodeSpec;

                            /**
                             * Creates a plain object from a NodeSpec message. Also converts values to other types if specified.
                             * @param message NodeSpec
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.tpu.v2alpha1.QueuedResource.Tpu.NodeSpec, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this NodeSpec to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for NodeSpec
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }
                    }

                    /** Properties of a BestEffort. */
                    interface IBestEffort {
                    }

                    /** Represents a BestEffort. */
                    class BestEffort implements IBestEffort {

                        /**
                         * Constructs a new BestEffort.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.tpu.v2alpha1.QueuedResource.IBestEffort);

                        /**
                         * Creates a new BestEffort instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns BestEffort instance
                         */
                        public static create(properties?: google.cloud.tpu.v2alpha1.QueuedResource.IBestEffort): google.cloud.tpu.v2alpha1.QueuedResource.BestEffort;

                        /**
                         * Encodes the specified BestEffort message. Does not implicitly {@link google.cloud.tpu.v2alpha1.QueuedResource.BestEffort.verify|verify} messages.
                         * @param message BestEffort message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.tpu.v2alpha1.QueuedResource.IBestEffort, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified BestEffort message, length delimited. Does not implicitly {@link google.cloud.tpu.v2alpha1.QueuedResource.BestEffort.verify|verify} messages.
                         * @param message BestEffort message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.tpu.v2alpha1.QueuedResource.IBestEffort, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a BestEffort message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns BestEffort
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tpu.v2alpha1.QueuedResource.BestEffort;

                        /**
                         * Decodes a BestEffort message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns BestEffort
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tpu.v2alpha1.QueuedResource.BestEffort;

                        /**
                         * Verifies a BestEffort message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a BestEffort message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns BestEffort
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.tpu.v2alpha1.QueuedResource.BestEffort;

                        /**
                         * Creates a plain object from a BestEffort message. Also converts values to other types if specified.
                         * @param message BestEffort
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.tpu.v2alpha1.QueuedResource.BestEffort, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this BestEffort to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for BestEffort
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a Guaranteed. */
                    interface IGuaranteed {

                        /** Guaranteed minDuration */
                        minDuration?: (google.protobuf.IDuration|null);

                        /** Guaranteed reserved */
                        reserved?: (boolean|null);
                    }

                    /** Represents a Guaranteed. */
                    class Guaranteed implements IGuaranteed {

                        /**
                         * Constructs a new Guaranteed.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.tpu.v2alpha1.QueuedResource.IGuaranteed);

                        /** Guaranteed minDuration. */
                        public minDuration?: (google.protobuf.IDuration|null);

                        /** Guaranteed reserved. */
                        public reserved: boolean;

                        /**
                         * Creates a new Guaranteed instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Guaranteed instance
                         */
                        public static create(properties?: google.cloud.tpu.v2alpha1.QueuedResource.IGuaranteed): google.cloud.tpu.v2alpha1.QueuedResource.Guaranteed;

                        /**
                         * Encodes the specified Guaranteed message. Does not implicitly {@link google.cloud.tpu.v2alpha1.QueuedResource.Guaranteed.verify|verify} messages.
                         * @param message Guaranteed message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.tpu.v2alpha1.QueuedResource.IGuaranteed, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Guaranteed message, length delimited. Does not implicitly {@link google.cloud.tpu.v2alpha1.QueuedResource.Guaranteed.verify|verify} messages.
                         * @param message Guaranteed message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.tpu.v2alpha1.QueuedResource.IGuaranteed, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Guaranteed message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Guaranteed
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tpu.v2alpha1.QueuedResource.Guaranteed;

                        /**
                         * Decodes a Guaranteed message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Guaranteed
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tpu.v2alpha1.QueuedResource.Guaranteed;

                        /**
                         * Verifies a Guaranteed message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Guaranteed message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Guaranteed
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.tpu.v2alpha1.QueuedResource.Guaranteed;

                        /**
                         * Creates a plain object from a Guaranteed message. Also converts values to other types if specified.
                         * @param message Guaranteed
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.tpu.v2alpha1.QueuedResource.Guaranteed, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Guaranteed to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for Guaranteed
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a QueueingPolicy. */
                    interface IQueueingPolicy {

                        /** QueueingPolicy validUntilDuration */
                        validUntilDuration?: (google.protobuf.IDuration|null);

                        /** QueueingPolicy validUntilTime */
                        validUntilTime?: (google.protobuf.ITimestamp|null);

                        /** QueueingPolicy validAfterDuration */
                        validAfterDuration?: (google.protobuf.IDuration|null);

                        /** QueueingPolicy validAfterTime */
                        validAfterTime?: (google.protobuf.ITimestamp|null);

                        /** QueueingPolicy validInterval */
                        validInterval?: (google.type.IInterval|null);
                    }

                    /** Represents a QueueingPolicy. */
                    class QueueingPolicy implements IQueueingPolicy {

                        /**
                         * Constructs a new QueueingPolicy.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.tpu.v2alpha1.QueuedResource.IQueueingPolicy);

                        /** QueueingPolicy validUntilDuration. */
                        public validUntilDuration?: (google.protobuf.IDuration|null);

                        /** QueueingPolicy validUntilTime. */
                        public validUntilTime?: (google.protobuf.ITimestamp|null);

                        /** QueueingPolicy validAfterDuration. */
                        public validAfterDuration?: (google.protobuf.IDuration|null);

                        /** QueueingPolicy validAfterTime. */
                        public validAfterTime?: (google.protobuf.ITimestamp|null);

                        /** QueueingPolicy validInterval. */
                        public validInterval?: (google.type.IInterval|null);

                        /** QueueingPolicy startTimingConstraints. */
                        public startTimingConstraints?: ("validUntilDuration"|"validUntilTime"|"validAfterDuration"|"validAfterTime"|"validInterval");

                        /**
                         * Creates a new QueueingPolicy instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns QueueingPolicy instance
                         */
                        public static create(properties?: google.cloud.tpu.v2alpha1.QueuedResource.IQueueingPolicy): google.cloud.tpu.v2alpha1.QueuedResource.QueueingPolicy;

                        /**
                         * Encodes the specified QueueingPolicy message. Does not implicitly {@link google.cloud.tpu.v2alpha1.QueuedResource.QueueingPolicy.verify|verify} messages.
                         * @param message QueueingPolicy message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.tpu.v2alpha1.QueuedResource.IQueueingPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified QueueingPolicy message, length delimited. Does not implicitly {@link google.cloud.tpu.v2alpha1.QueuedResource.QueueingPolicy.verify|verify} messages.
                         * @param message QueueingPolicy message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.tpu.v2alpha1.QueuedResource.IQueueingPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a QueueingPolicy message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns QueueingPolicy
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tpu.v2alpha1.QueuedResource.QueueingPolicy;

                        /**
                         * Decodes a QueueingPolicy message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns QueueingPolicy
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tpu.v2alpha1.QueuedResource.QueueingPolicy;

                        /**
                         * Verifies a QueueingPolicy message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a QueueingPolicy message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns QueueingPolicy
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.tpu.v2alpha1.QueuedResource.QueueingPolicy;

                        /**
                         * Creates a plain object from a QueueingPolicy message. Also converts values to other types if specified.
                         * @param message QueueingPolicy
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.tpu.v2alpha1.QueuedResource.QueueingPolicy, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this QueueingPolicy to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for QueueingPolicy
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }
                }

                /** Properties of a QueuedResourceState. */
                interface IQueuedResourceState {

                    /** QueuedResourceState state */
                    state?: (google.cloud.tpu.v2alpha1.QueuedResourceState.State|keyof typeof google.cloud.tpu.v2alpha1.QueuedResourceState.State|null);

                    /** QueuedResourceState creatingData */
                    creatingData?: (google.cloud.tpu.v2alpha1.QueuedResourceState.ICreatingData|null);

                    /** QueuedResourceState acceptedData */
                    acceptedData?: (google.cloud.tpu.v2alpha1.QueuedResourceState.IAcceptedData|null);

                    /** QueuedResourceState provisioningData */
                    provisioningData?: (google.cloud.tpu.v2alpha1.QueuedResourceState.IProvisioningData|null);

                    /** QueuedResourceState failedData */
                    failedData?: (google.cloud.tpu.v2alpha1.QueuedResourceState.IFailedData|null);

                    /** QueuedResourceState deletingData */
                    deletingData?: (google.cloud.tpu.v2alpha1.QueuedResourceState.IDeletingData|null);

                    /** QueuedResourceState activeData */
                    activeData?: (google.cloud.tpu.v2alpha1.QueuedResourceState.IActiveData|null);

                    /** QueuedResourceState suspendingData */
                    suspendingData?: (google.cloud.tpu.v2alpha1.QueuedResourceState.ISuspendingData|null);

                    /** QueuedResourceState suspendedData */
                    suspendedData?: (google.cloud.tpu.v2alpha1.QueuedResourceState.ISuspendedData|null);
                }

                /** Represents a QueuedResourceState. */
                class QueuedResourceState implements IQueuedResourceState {

                    /**
                     * Constructs a new QueuedResourceState.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tpu.v2alpha1.IQueuedResourceState);

                    /** QueuedResourceState state. */
                    public state: (google.cloud.tpu.v2alpha1.QueuedResourceState.State|keyof typeof google.cloud.tpu.v2alpha1.QueuedResourceState.State);

                    /** QueuedResourceState creatingData. */
                    public creatingData?: (google.cloud.tpu.v2alpha1.QueuedResourceState.ICreatingData|null);

                    /** QueuedResourceState acceptedData. */
                    public acceptedData?: (google.cloud.tpu.v2alpha1.QueuedResourceState.IAcceptedData|null);

                    /** QueuedResourceState provisioningData. */
                    public provisioningData?: (google.cloud.tpu.v2alpha1.QueuedResourceState.IProvisioningData|null);

                    /** QueuedResourceState failedData. */
                    public failedData?: (google.cloud.tpu.v2alpha1.QueuedResourceState.IFailedData|null);

                    /** QueuedResourceState deletingData. */
                    public deletingData?: (google.cloud.tpu.v2alpha1.QueuedResourceState.IDeletingData|null);

                    /** QueuedResourceState activeData. */
                    public activeData?: (google.cloud.tpu.v2alpha1.QueuedResourceState.IActiveData|null);

                    /** QueuedResourceState suspendingData. */
                    public suspendingData?: (google.cloud.tpu.v2alpha1.QueuedResourceState.ISuspendingData|null);

                    /** QueuedResourceState suspendedData. */
                    public suspendedData?: (google.cloud.tpu.v2alpha1.QueuedResourceState.ISuspendedData|null);

                    /** QueuedResourceState stateData. */
                    public stateData?: ("creatingData"|"acceptedData"|"provisioningData"|"failedData"|"deletingData"|"activeData"|"suspendingData"|"suspendedData");

                    /**
                     * Creates a new QueuedResourceState instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns QueuedResourceState instance
                     */
                    public static create(properties?: google.cloud.tpu.v2alpha1.IQueuedResourceState): google.cloud.tpu.v2alpha1.QueuedResourceState;

                    /**
                     * Encodes the specified QueuedResourceState message. Does not implicitly {@link google.cloud.tpu.v2alpha1.QueuedResourceState.verify|verify} messages.
                     * @param message QueuedResourceState message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tpu.v2alpha1.IQueuedResourceState, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified QueuedResourceState message, length delimited. Does not implicitly {@link google.cloud.tpu.v2alpha1.QueuedResourceState.verify|verify} messages.
                     * @param message QueuedResourceState message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tpu.v2alpha1.IQueuedResourceState, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a QueuedResourceState message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns QueuedResourceState
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tpu.v2alpha1.QueuedResourceState;

                    /**
                     * Decodes a QueuedResourceState message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns QueuedResourceState
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tpu.v2alpha1.QueuedResourceState;

                    /**
                     * Verifies a QueuedResourceState message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a QueuedResourceState message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns QueuedResourceState
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tpu.v2alpha1.QueuedResourceState;

                    /**
                     * Creates a plain object from a QueuedResourceState message. Also converts values to other types if specified.
                     * @param message QueuedResourceState
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tpu.v2alpha1.QueuedResourceState, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this QueuedResourceState to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for QueuedResourceState
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace QueuedResourceState {

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        CREATING = 1,
                        ACCEPTED = 2,
                        PROVISIONING = 3,
                        FAILED = 4,
                        DELETING = 5,
                        ACTIVE = 6,
                        SUSPENDING = 7,
                        SUSPENDED = 8
                    }

                    /** Properties of a CreatingData. */
                    interface ICreatingData {
                    }

                    /** Represents a CreatingData. */
                    class CreatingData implements ICreatingData {

                        /**
                         * Constructs a new CreatingData.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.tpu.v2alpha1.QueuedResourceState.ICreatingData);

                        /**
                         * Creates a new CreatingData instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns CreatingData instance
                         */
                        public static create(properties?: google.cloud.tpu.v2alpha1.QueuedResourceState.ICreatingData): google.cloud.tpu.v2alpha1.QueuedResourceState.CreatingData;

                        /**
                         * Encodes the specified CreatingData message. Does not implicitly {@link google.cloud.tpu.v2alpha1.QueuedResourceState.CreatingData.verify|verify} messages.
                         * @param message CreatingData message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.tpu.v2alpha1.QueuedResourceState.ICreatingData, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified CreatingData message, length delimited. Does not implicitly {@link google.cloud.tpu.v2alpha1.QueuedResourceState.CreatingData.verify|verify} messages.
                         * @param message CreatingData message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.tpu.v2alpha1.QueuedResourceState.ICreatingData, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a CreatingData message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns CreatingData
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tpu.v2alpha1.QueuedResourceState.CreatingData;

                        /**
                         * Decodes a CreatingData message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns CreatingData
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tpu.v2alpha1.QueuedResourceState.CreatingData;

                        /**
                         * Verifies a CreatingData message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a CreatingData message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns CreatingData
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.tpu.v2alpha1.QueuedResourceState.CreatingData;

                        /**
                         * Creates a plain object from a CreatingData message. Also converts values to other types if specified.
                         * @param message CreatingData
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.tpu.v2alpha1.QueuedResourceState.CreatingData, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this CreatingData to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for CreatingData
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of an AcceptedData. */
                    interface IAcceptedData {
                    }

                    /** Represents an AcceptedData. */
                    class AcceptedData implements IAcceptedData {

                        /**
                         * Constructs a new AcceptedData.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.tpu.v2alpha1.QueuedResourceState.IAcceptedData);

                        /**
                         * Creates a new AcceptedData instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns AcceptedData instance
                         */
                        public static create(properties?: google.cloud.tpu.v2alpha1.QueuedResourceState.IAcceptedData): google.cloud.tpu.v2alpha1.QueuedResourceState.AcceptedData;

                        /**
                         * Encodes the specified AcceptedData message. Does not implicitly {@link google.cloud.tpu.v2alpha1.QueuedResourceState.AcceptedData.verify|verify} messages.
                         * @param message AcceptedData message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.tpu.v2alpha1.QueuedResourceState.IAcceptedData, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified AcceptedData message, length delimited. Does not implicitly {@link google.cloud.tpu.v2alpha1.QueuedResourceState.AcceptedData.verify|verify} messages.
                         * @param message AcceptedData message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.tpu.v2alpha1.QueuedResourceState.IAcceptedData, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an AcceptedData message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns AcceptedData
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tpu.v2alpha1.QueuedResourceState.AcceptedData;

                        /**
                         * Decodes an AcceptedData message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns AcceptedData
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tpu.v2alpha1.QueuedResourceState.AcceptedData;

                        /**
                         * Verifies an AcceptedData message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an AcceptedData message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns AcceptedData
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.tpu.v2alpha1.QueuedResourceState.AcceptedData;

                        /**
                         * Creates a plain object from an AcceptedData message. Also converts values to other types if specified.
                         * @param message AcceptedData
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.tpu.v2alpha1.QueuedResourceState.AcceptedData, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this AcceptedData to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for AcceptedData
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a ProvisioningData. */
                    interface IProvisioningData {
                    }

                    /** Represents a ProvisioningData. */
                    class ProvisioningData implements IProvisioningData {

                        /**
                         * Constructs a new ProvisioningData.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.tpu.v2alpha1.QueuedResourceState.IProvisioningData);

                        /**
                         * Creates a new ProvisioningData instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ProvisioningData instance
                         */
                        public static create(properties?: google.cloud.tpu.v2alpha1.QueuedResourceState.IProvisioningData): google.cloud.tpu.v2alpha1.QueuedResourceState.ProvisioningData;

                        /**
                         * Encodes the specified ProvisioningData message. Does not implicitly {@link google.cloud.tpu.v2alpha1.QueuedResourceState.ProvisioningData.verify|verify} messages.
                         * @param message ProvisioningData message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.tpu.v2alpha1.QueuedResourceState.IProvisioningData, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ProvisioningData message, length delimited. Does not implicitly {@link google.cloud.tpu.v2alpha1.QueuedResourceState.ProvisioningData.verify|verify} messages.
                         * @param message ProvisioningData message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.tpu.v2alpha1.QueuedResourceState.IProvisioningData, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ProvisioningData message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ProvisioningData
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tpu.v2alpha1.QueuedResourceState.ProvisioningData;

                        /**
                         * Decodes a ProvisioningData message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ProvisioningData
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tpu.v2alpha1.QueuedResourceState.ProvisioningData;

                        /**
                         * Verifies a ProvisioningData message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ProvisioningData message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ProvisioningData
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.tpu.v2alpha1.QueuedResourceState.ProvisioningData;

                        /**
                         * Creates a plain object from a ProvisioningData message. Also converts values to other types if specified.
                         * @param message ProvisioningData
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.tpu.v2alpha1.QueuedResourceState.ProvisioningData, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ProvisioningData to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ProvisioningData
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a FailedData. */
                    interface IFailedData {

                        /** FailedData error */
                        error?: (google.rpc.IStatus|null);
                    }

                    /** Represents a FailedData. */
                    class FailedData implements IFailedData {

                        /**
                         * Constructs a new FailedData.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.tpu.v2alpha1.QueuedResourceState.IFailedData);

                        /** FailedData error. */
                        public error?: (google.rpc.IStatus|null);

                        /**
                         * Creates a new FailedData instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns FailedData instance
                         */
                        public static create(properties?: google.cloud.tpu.v2alpha1.QueuedResourceState.IFailedData): google.cloud.tpu.v2alpha1.QueuedResourceState.FailedData;

                        /**
                         * Encodes the specified FailedData message. Does not implicitly {@link google.cloud.tpu.v2alpha1.QueuedResourceState.FailedData.verify|verify} messages.
                         * @param message FailedData message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.tpu.v2alpha1.QueuedResourceState.IFailedData, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified FailedData message, length delimited. Does not implicitly {@link google.cloud.tpu.v2alpha1.QueuedResourceState.FailedData.verify|verify} messages.
                         * @param message FailedData message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.tpu.v2alpha1.QueuedResourceState.IFailedData, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a FailedData message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns FailedData
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tpu.v2alpha1.QueuedResourceState.FailedData;

                        /**
                         * Decodes a FailedData message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns FailedData
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tpu.v2alpha1.QueuedResourceState.FailedData;

                        /**
                         * Verifies a FailedData message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a FailedData message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns FailedData
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.tpu.v2alpha1.QueuedResourceState.FailedData;

                        /**
                         * Creates a plain object from a FailedData message. Also converts values to other types if specified.
                         * @param message FailedData
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.tpu.v2alpha1.QueuedResourceState.FailedData, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this FailedData to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for FailedData
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a DeletingData. */
                    interface IDeletingData {
                    }

                    /** Represents a DeletingData. */
                    class DeletingData implements IDeletingData {

                        /**
                         * Constructs a new DeletingData.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.tpu.v2alpha1.QueuedResourceState.IDeletingData);

                        /**
                         * Creates a new DeletingData instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns DeletingData instance
                         */
                        public static create(properties?: google.cloud.tpu.v2alpha1.QueuedResourceState.IDeletingData): google.cloud.tpu.v2alpha1.QueuedResourceState.DeletingData;

                        /**
                         * Encodes the specified DeletingData message. Does not implicitly {@link google.cloud.tpu.v2alpha1.QueuedResourceState.DeletingData.verify|verify} messages.
                         * @param message DeletingData message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.tpu.v2alpha1.QueuedResourceState.IDeletingData, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified DeletingData message, length delimited. Does not implicitly {@link google.cloud.tpu.v2alpha1.QueuedResourceState.DeletingData.verify|verify} messages.
                         * @param message DeletingData message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.tpu.v2alpha1.QueuedResourceState.IDeletingData, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a DeletingData message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns DeletingData
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tpu.v2alpha1.QueuedResourceState.DeletingData;

                        /**
                         * Decodes a DeletingData message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns DeletingData
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tpu.v2alpha1.QueuedResourceState.DeletingData;

                        /**
                         * Verifies a DeletingData message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a DeletingData message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns DeletingData
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.tpu.v2alpha1.QueuedResourceState.DeletingData;

                        /**
                         * Creates a plain object from a DeletingData message. Also converts values to other types if specified.
                         * @param message DeletingData
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.tpu.v2alpha1.QueuedResourceState.DeletingData, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this DeletingData to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for DeletingData
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of an ActiveData. */
                    interface IActiveData {
                    }

                    /** Represents an ActiveData. */
                    class ActiveData implements IActiveData {

                        /**
                         * Constructs a new ActiveData.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.tpu.v2alpha1.QueuedResourceState.IActiveData);

                        /**
                         * Creates a new ActiveData instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ActiveData instance
                         */
                        public static create(properties?: google.cloud.tpu.v2alpha1.QueuedResourceState.IActiveData): google.cloud.tpu.v2alpha1.QueuedResourceState.ActiveData;

                        /**
                         * Encodes the specified ActiveData message. Does not implicitly {@link google.cloud.tpu.v2alpha1.QueuedResourceState.ActiveData.verify|verify} messages.
                         * @param message ActiveData message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.tpu.v2alpha1.QueuedResourceState.IActiveData, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ActiveData message, length delimited. Does not implicitly {@link google.cloud.tpu.v2alpha1.QueuedResourceState.ActiveData.verify|verify} messages.
                         * @param message ActiveData message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.tpu.v2alpha1.QueuedResourceState.IActiveData, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an ActiveData message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ActiveData
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tpu.v2alpha1.QueuedResourceState.ActiveData;

                        /**
                         * Decodes an ActiveData message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ActiveData
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tpu.v2alpha1.QueuedResourceState.ActiveData;

                        /**
                         * Verifies an ActiveData message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an ActiveData message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ActiveData
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.tpu.v2alpha1.QueuedResourceState.ActiveData;

                        /**
                         * Creates a plain object from an ActiveData message. Also converts values to other types if specified.
                         * @param message ActiveData
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.tpu.v2alpha1.QueuedResourceState.ActiveData, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ActiveData to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ActiveData
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a SuspendingData. */
                    interface ISuspendingData {
                    }

                    /** Represents a SuspendingData. */
                    class SuspendingData implements ISuspendingData {

                        /**
                         * Constructs a new SuspendingData.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.tpu.v2alpha1.QueuedResourceState.ISuspendingData);

                        /**
                         * Creates a new SuspendingData instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns SuspendingData instance
                         */
                        public static create(properties?: google.cloud.tpu.v2alpha1.QueuedResourceState.ISuspendingData): google.cloud.tpu.v2alpha1.QueuedResourceState.SuspendingData;

                        /**
                         * Encodes the specified SuspendingData message. Does not implicitly {@link google.cloud.tpu.v2alpha1.QueuedResourceState.SuspendingData.verify|verify} messages.
                         * @param message SuspendingData message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.tpu.v2alpha1.QueuedResourceState.ISuspendingData, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified SuspendingData message, length delimited. Does not implicitly {@link google.cloud.tpu.v2alpha1.QueuedResourceState.SuspendingData.verify|verify} messages.
                         * @param message SuspendingData message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.tpu.v2alpha1.QueuedResourceState.ISuspendingData, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a SuspendingData message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns SuspendingData
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tpu.v2alpha1.QueuedResourceState.SuspendingData;

                        /**
                         * Decodes a SuspendingData message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns SuspendingData
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tpu.v2alpha1.QueuedResourceState.SuspendingData;

                        /**
                         * Verifies a SuspendingData message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a SuspendingData message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns SuspendingData
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.tpu.v2alpha1.QueuedResourceState.SuspendingData;

                        /**
                         * Creates a plain object from a SuspendingData message. Also converts values to other types if specified.
                         * @param message SuspendingData
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.tpu.v2alpha1.QueuedResourceState.SuspendingData, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this SuspendingData to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for SuspendingData
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a SuspendedData. */
                    interface ISuspendedData {
                    }

                    /** Represents a SuspendedData. */
                    class SuspendedData implements ISuspendedData {

                        /**
                         * Constructs a new SuspendedData.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.tpu.v2alpha1.QueuedResourceState.ISuspendedData);

                        /**
                         * Creates a new SuspendedData instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns SuspendedData instance
                         */
                        public static create(properties?: google.cloud.tpu.v2alpha1.QueuedResourceState.ISuspendedData): google.cloud.tpu.v2alpha1.QueuedResourceState.SuspendedData;

                        /**
                         * Encodes the specified SuspendedData message. Does not implicitly {@link google.cloud.tpu.v2alpha1.QueuedResourceState.SuspendedData.verify|verify} messages.
                         * @param message SuspendedData message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.tpu.v2alpha1.QueuedResourceState.ISuspendedData, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified SuspendedData message, length delimited. Does not implicitly {@link google.cloud.tpu.v2alpha1.QueuedResourceState.SuspendedData.verify|verify} messages.
                         * @param message SuspendedData message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.tpu.v2alpha1.QueuedResourceState.ISuspendedData, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a SuspendedData message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns SuspendedData
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tpu.v2alpha1.QueuedResourceState.SuspendedData;

                        /**
                         * Decodes a SuspendedData message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns SuspendedData
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tpu.v2alpha1.QueuedResourceState.SuspendedData;

                        /**
                         * Verifies a SuspendedData message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a SuspendedData message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns SuspendedData
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.tpu.v2alpha1.QueuedResourceState.SuspendedData;

                        /**
                         * Creates a plain object from a SuspendedData message. Also converts values to other types if specified.
                         * @param message SuspendedData
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.tpu.v2alpha1.QueuedResourceState.SuspendedData, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this SuspendedData to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for SuspendedData
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }
                }

                /** Properties of a ListNodesRequest. */
                interface IListNodesRequest {

                    /** ListNodesRequest parent */
                    parent?: (string|null);

                    /** ListNodesRequest pageSize */
                    pageSize?: (number|null);

                    /** ListNodesRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListNodesRequest. */
                class ListNodesRequest implements IListNodesRequest {

                    /**
                     * Constructs a new ListNodesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tpu.v2alpha1.IListNodesRequest);

                    /** ListNodesRequest parent. */
                    public parent: string;

                    /** ListNodesRequest pageSize. */
                    public pageSize: number;

                    /** ListNodesRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListNodesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListNodesRequest instance
                     */
                    public static create(properties?: google.cloud.tpu.v2alpha1.IListNodesRequest): google.cloud.tpu.v2alpha1.ListNodesRequest;

                    /**
                     * Encodes the specified ListNodesRequest message. Does not implicitly {@link google.cloud.tpu.v2alpha1.ListNodesRequest.verify|verify} messages.
                     * @param message ListNodesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tpu.v2alpha1.IListNodesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListNodesRequest message, length delimited. Does not implicitly {@link google.cloud.tpu.v2alpha1.ListNodesRequest.verify|verify} messages.
                     * @param message ListNodesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tpu.v2alpha1.IListNodesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListNodesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListNodesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tpu.v2alpha1.ListNodesRequest;

                    /**
                     * Decodes a ListNodesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListNodesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tpu.v2alpha1.ListNodesRequest;

                    /**
                     * Verifies a ListNodesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListNodesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListNodesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tpu.v2alpha1.ListNodesRequest;

                    /**
                     * Creates a plain object from a ListNodesRequest message. Also converts values to other types if specified.
                     * @param message ListNodesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tpu.v2alpha1.ListNodesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListNodesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListNodesRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListNodesResponse. */
                interface IListNodesResponse {

                    /** ListNodesResponse nodes */
                    nodes?: (google.cloud.tpu.v2alpha1.INode[]|null);

                    /** ListNodesResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListNodesResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a ListNodesResponse. */
                class ListNodesResponse implements IListNodesResponse {

                    /**
                     * Constructs a new ListNodesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tpu.v2alpha1.IListNodesResponse);

                    /** ListNodesResponse nodes. */
                    public nodes: google.cloud.tpu.v2alpha1.INode[];

                    /** ListNodesResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListNodesResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListNodesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListNodesResponse instance
                     */
                    public static create(properties?: google.cloud.tpu.v2alpha1.IListNodesResponse): google.cloud.tpu.v2alpha1.ListNodesResponse;

                    /**
                     * Encodes the specified ListNodesResponse message. Does not implicitly {@link google.cloud.tpu.v2alpha1.ListNodesResponse.verify|verify} messages.
                     * @param message ListNodesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tpu.v2alpha1.IListNodesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListNodesResponse message, length delimited. Does not implicitly {@link google.cloud.tpu.v2alpha1.ListNodesResponse.verify|verify} messages.
                     * @param message ListNodesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tpu.v2alpha1.IListNodesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListNodesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListNodesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tpu.v2alpha1.ListNodesResponse;

                    /**
                     * Decodes a ListNodesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListNodesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tpu.v2alpha1.ListNodesResponse;

                    /**
                     * Verifies a ListNodesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListNodesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListNodesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tpu.v2alpha1.ListNodesResponse;

                    /**
                     * Creates a plain object from a ListNodesResponse message. Also converts values to other types if specified.
                     * @param message ListNodesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tpu.v2alpha1.ListNodesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListNodesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListNodesResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetNodeRequest. */
                interface IGetNodeRequest {

                    /** GetNodeRequest name */
                    name?: (string|null);
                }

                /** Represents a GetNodeRequest. */
                class GetNodeRequest implements IGetNodeRequest {

                    /**
                     * Constructs a new GetNodeRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tpu.v2alpha1.IGetNodeRequest);

                    /** GetNodeRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetNodeRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetNodeRequest instance
                     */
                    public static create(properties?: google.cloud.tpu.v2alpha1.IGetNodeRequest): google.cloud.tpu.v2alpha1.GetNodeRequest;

                    /**
                     * Encodes the specified GetNodeRequest message. Does not implicitly {@link google.cloud.tpu.v2alpha1.GetNodeRequest.verify|verify} messages.
                     * @param message GetNodeRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tpu.v2alpha1.IGetNodeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetNodeRequest message, length delimited. Does not implicitly {@link google.cloud.tpu.v2alpha1.GetNodeRequest.verify|verify} messages.
                     * @param message GetNodeRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tpu.v2alpha1.IGetNodeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetNodeRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetNodeRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tpu.v2alpha1.GetNodeRequest;

                    /**
                     * Decodes a GetNodeRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetNodeRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tpu.v2alpha1.GetNodeRequest;

                    /**
                     * Verifies a GetNodeRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetNodeRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetNodeRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tpu.v2alpha1.GetNodeRequest;

                    /**
                     * Creates a plain object from a GetNodeRequest message. Also converts values to other types if specified.
                     * @param message GetNodeRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tpu.v2alpha1.GetNodeRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetNodeRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetNodeRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CreateNodeRequest. */
                interface ICreateNodeRequest {

                    /** CreateNodeRequest parent */
                    parent?: (string|null);

                    /** CreateNodeRequest nodeId */
                    nodeId?: (string|null);

                    /** CreateNodeRequest node */
                    node?: (google.cloud.tpu.v2alpha1.INode|null);

                    /** CreateNodeRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents a CreateNodeRequest. */
                class CreateNodeRequest implements ICreateNodeRequest {

                    /**
                     * Constructs a new CreateNodeRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tpu.v2alpha1.ICreateNodeRequest);

                    /** CreateNodeRequest parent. */
                    public parent: string;

                    /** CreateNodeRequest nodeId. */
                    public nodeId: string;

                    /** CreateNodeRequest node. */
                    public node?: (google.cloud.tpu.v2alpha1.INode|null);

                    /** CreateNodeRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new CreateNodeRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateNodeRequest instance
                     */
                    public static create(properties?: google.cloud.tpu.v2alpha1.ICreateNodeRequest): google.cloud.tpu.v2alpha1.CreateNodeRequest;

                    /**
                     * Encodes the specified CreateNodeRequest message. Does not implicitly {@link google.cloud.tpu.v2alpha1.CreateNodeRequest.verify|verify} messages.
                     * @param message CreateNodeRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tpu.v2alpha1.ICreateNodeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateNodeRequest message, length delimited. Does not implicitly {@link google.cloud.tpu.v2alpha1.CreateNodeRequest.verify|verify} messages.
                     * @param message CreateNodeRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tpu.v2alpha1.ICreateNodeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateNodeRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateNodeRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tpu.v2alpha1.CreateNodeRequest;

                    /**
                     * Decodes a CreateNodeRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateNodeRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tpu.v2alpha1.CreateNodeRequest;

                    /**
                     * Verifies a CreateNodeRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateNodeRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateNodeRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tpu.v2alpha1.CreateNodeRequest;

                    /**
                     * Creates a plain object from a CreateNodeRequest message. Also converts values to other types if specified.
                     * @param message CreateNodeRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tpu.v2alpha1.CreateNodeRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateNodeRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateNodeRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeleteNodeRequest. */
                interface IDeleteNodeRequest {

                    /** DeleteNodeRequest name */
                    name?: (string|null);

                    /** DeleteNodeRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents a DeleteNodeRequest. */
                class DeleteNodeRequest implements IDeleteNodeRequest {

                    /**
                     * Constructs a new DeleteNodeRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tpu.v2alpha1.IDeleteNodeRequest);

                    /** DeleteNodeRequest name. */
                    public name: string;

                    /** DeleteNodeRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new DeleteNodeRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteNodeRequest instance
                     */
                    public static create(properties?: google.cloud.tpu.v2alpha1.IDeleteNodeRequest): google.cloud.tpu.v2alpha1.DeleteNodeRequest;

                    /**
                     * Encodes the specified DeleteNodeRequest message. Does not implicitly {@link google.cloud.tpu.v2alpha1.DeleteNodeRequest.verify|verify} messages.
                     * @param message DeleteNodeRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tpu.v2alpha1.IDeleteNodeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteNodeRequest message, length delimited. Does not implicitly {@link google.cloud.tpu.v2alpha1.DeleteNodeRequest.verify|verify} messages.
                     * @param message DeleteNodeRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tpu.v2alpha1.IDeleteNodeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteNodeRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteNodeRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tpu.v2alpha1.DeleteNodeRequest;

                    /**
                     * Decodes a DeleteNodeRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteNodeRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tpu.v2alpha1.DeleteNodeRequest;

                    /**
                     * Verifies a DeleteNodeRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteNodeRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteNodeRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tpu.v2alpha1.DeleteNodeRequest;

                    /**
                     * Creates a plain object from a DeleteNodeRequest message. Also converts values to other types if specified.
                     * @param message DeleteNodeRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tpu.v2alpha1.DeleteNodeRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteNodeRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeleteNodeRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a StopNodeRequest. */
                interface IStopNodeRequest {

                    /** StopNodeRequest name */
                    name?: (string|null);
                }

                /** Represents a StopNodeRequest. */
                class StopNodeRequest implements IStopNodeRequest {

                    /**
                     * Constructs a new StopNodeRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tpu.v2alpha1.IStopNodeRequest);

                    /** StopNodeRequest name. */
                    public name: string;

                    /**
                     * Creates a new StopNodeRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns StopNodeRequest instance
                     */
                    public static create(properties?: google.cloud.tpu.v2alpha1.IStopNodeRequest): google.cloud.tpu.v2alpha1.StopNodeRequest;

                    /**
                     * Encodes the specified StopNodeRequest message. Does not implicitly {@link google.cloud.tpu.v2alpha1.StopNodeRequest.verify|verify} messages.
                     * @param message StopNodeRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tpu.v2alpha1.IStopNodeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified StopNodeRequest message, length delimited. Does not implicitly {@link google.cloud.tpu.v2alpha1.StopNodeRequest.verify|verify} messages.
                     * @param message StopNodeRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tpu.v2alpha1.IStopNodeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a StopNodeRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns StopNodeRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tpu.v2alpha1.StopNodeRequest;

                    /**
                     * Decodes a StopNodeRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns StopNodeRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tpu.v2alpha1.StopNodeRequest;

                    /**
                     * Verifies a StopNodeRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a StopNodeRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns StopNodeRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tpu.v2alpha1.StopNodeRequest;

                    /**
                     * Creates a plain object from a StopNodeRequest message. Also converts values to other types if specified.
                     * @param message StopNodeRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tpu.v2alpha1.StopNodeRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this StopNodeRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for StopNodeRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a StartNodeRequest. */
                interface IStartNodeRequest {

                    /** StartNodeRequest name */
                    name?: (string|null);
                }

                /** Represents a StartNodeRequest. */
                class StartNodeRequest implements IStartNodeRequest {

                    /**
                     * Constructs a new StartNodeRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tpu.v2alpha1.IStartNodeRequest);

                    /** StartNodeRequest name. */
                    public name: string;

                    /**
                     * Creates a new StartNodeRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns StartNodeRequest instance
                     */
                    public static create(properties?: google.cloud.tpu.v2alpha1.IStartNodeRequest): google.cloud.tpu.v2alpha1.StartNodeRequest;

                    /**
                     * Encodes the specified StartNodeRequest message. Does not implicitly {@link google.cloud.tpu.v2alpha1.StartNodeRequest.verify|verify} messages.
                     * @param message StartNodeRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tpu.v2alpha1.IStartNodeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified StartNodeRequest message, length delimited. Does not implicitly {@link google.cloud.tpu.v2alpha1.StartNodeRequest.verify|verify} messages.
                     * @param message StartNodeRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tpu.v2alpha1.IStartNodeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a StartNodeRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns StartNodeRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tpu.v2alpha1.StartNodeRequest;

                    /**
                     * Decodes a StartNodeRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns StartNodeRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tpu.v2alpha1.StartNodeRequest;

                    /**
                     * Verifies a StartNodeRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a StartNodeRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns StartNodeRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tpu.v2alpha1.StartNodeRequest;

                    /**
                     * Creates a plain object from a StartNodeRequest message. Also converts values to other types if specified.
                     * @param message StartNodeRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tpu.v2alpha1.StartNodeRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this StartNodeRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for StartNodeRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpdateNodeRequest. */
                interface IUpdateNodeRequest {

                    /** UpdateNodeRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateNodeRequest node */
                    node?: (google.cloud.tpu.v2alpha1.INode|null);
                }

                /** Represents an UpdateNodeRequest. */
                class UpdateNodeRequest implements IUpdateNodeRequest {

                    /**
                     * Constructs a new UpdateNodeRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tpu.v2alpha1.IUpdateNodeRequest);

                    /** UpdateNodeRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateNodeRequest node. */
                    public node?: (google.cloud.tpu.v2alpha1.INode|null);

                    /**
                     * Creates a new UpdateNodeRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateNodeRequest instance
                     */
                    public static create(properties?: google.cloud.tpu.v2alpha1.IUpdateNodeRequest): google.cloud.tpu.v2alpha1.UpdateNodeRequest;

                    /**
                     * Encodes the specified UpdateNodeRequest message. Does not implicitly {@link google.cloud.tpu.v2alpha1.UpdateNodeRequest.verify|verify} messages.
                     * @param message UpdateNodeRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tpu.v2alpha1.IUpdateNodeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateNodeRequest message, length delimited. Does not implicitly {@link google.cloud.tpu.v2alpha1.UpdateNodeRequest.verify|verify} messages.
                     * @param message UpdateNodeRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tpu.v2alpha1.IUpdateNodeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateNodeRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateNodeRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tpu.v2alpha1.UpdateNodeRequest;

                    /**
                     * Decodes an UpdateNodeRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateNodeRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tpu.v2alpha1.UpdateNodeRequest;

                    /**
                     * Verifies an UpdateNodeRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateNodeRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateNodeRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tpu.v2alpha1.UpdateNodeRequest;

                    /**
                     * Creates a plain object from an UpdateNodeRequest message. Also converts values to other types if specified.
                     * @param message UpdateNodeRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tpu.v2alpha1.UpdateNodeRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateNodeRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdateNodeRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListQueuedResourcesRequest. */
                interface IListQueuedResourcesRequest {

                    /** ListQueuedResourcesRequest parent */
                    parent?: (string|null);

                    /** ListQueuedResourcesRequest pageSize */
                    pageSize?: (number|null);

                    /** ListQueuedResourcesRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListQueuedResourcesRequest. */
                class ListQueuedResourcesRequest implements IListQueuedResourcesRequest {

                    /**
                     * Constructs a new ListQueuedResourcesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tpu.v2alpha1.IListQueuedResourcesRequest);

                    /** ListQueuedResourcesRequest parent. */
                    public parent: string;

                    /** ListQueuedResourcesRequest pageSize. */
                    public pageSize: number;

                    /** ListQueuedResourcesRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListQueuedResourcesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListQueuedResourcesRequest instance
                     */
                    public static create(properties?: google.cloud.tpu.v2alpha1.IListQueuedResourcesRequest): google.cloud.tpu.v2alpha1.ListQueuedResourcesRequest;

                    /**
                     * Encodes the specified ListQueuedResourcesRequest message. Does not implicitly {@link google.cloud.tpu.v2alpha1.ListQueuedResourcesRequest.verify|verify} messages.
                     * @param message ListQueuedResourcesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tpu.v2alpha1.IListQueuedResourcesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListQueuedResourcesRequest message, length delimited. Does not implicitly {@link google.cloud.tpu.v2alpha1.ListQueuedResourcesRequest.verify|verify} messages.
                     * @param message ListQueuedResourcesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tpu.v2alpha1.IListQueuedResourcesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListQueuedResourcesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListQueuedResourcesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tpu.v2alpha1.ListQueuedResourcesRequest;

                    /**
                     * Decodes a ListQueuedResourcesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListQueuedResourcesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tpu.v2alpha1.ListQueuedResourcesRequest;

                    /**
                     * Verifies a ListQueuedResourcesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListQueuedResourcesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListQueuedResourcesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tpu.v2alpha1.ListQueuedResourcesRequest;

                    /**
                     * Creates a plain object from a ListQueuedResourcesRequest message. Also converts values to other types if specified.
                     * @param message ListQueuedResourcesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tpu.v2alpha1.ListQueuedResourcesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListQueuedResourcesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListQueuedResourcesRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListQueuedResourcesResponse. */
                interface IListQueuedResourcesResponse {

                    /** ListQueuedResourcesResponse queuedResources */
                    queuedResources?: (google.cloud.tpu.v2alpha1.IQueuedResource[]|null);

                    /** ListQueuedResourcesResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListQueuedResourcesResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a ListQueuedResourcesResponse. */
                class ListQueuedResourcesResponse implements IListQueuedResourcesResponse {

                    /**
                     * Constructs a new ListQueuedResourcesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tpu.v2alpha1.IListQueuedResourcesResponse);

                    /** ListQueuedResourcesResponse queuedResources. */
                    public queuedResources: google.cloud.tpu.v2alpha1.IQueuedResource[];

                    /** ListQueuedResourcesResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListQueuedResourcesResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListQueuedResourcesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListQueuedResourcesResponse instance
                     */
                    public static create(properties?: google.cloud.tpu.v2alpha1.IListQueuedResourcesResponse): google.cloud.tpu.v2alpha1.ListQueuedResourcesResponse;

                    /**
                     * Encodes the specified ListQueuedResourcesResponse message. Does not implicitly {@link google.cloud.tpu.v2alpha1.ListQueuedResourcesResponse.verify|verify} messages.
                     * @param message ListQueuedResourcesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tpu.v2alpha1.IListQueuedResourcesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListQueuedResourcesResponse message, length delimited. Does not implicitly {@link google.cloud.tpu.v2alpha1.ListQueuedResourcesResponse.verify|verify} messages.
                     * @param message ListQueuedResourcesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tpu.v2alpha1.IListQueuedResourcesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListQueuedResourcesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListQueuedResourcesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tpu.v2alpha1.ListQueuedResourcesResponse;

                    /**
                     * Decodes a ListQueuedResourcesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListQueuedResourcesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tpu.v2alpha1.ListQueuedResourcesResponse;

                    /**
                     * Verifies a ListQueuedResourcesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListQueuedResourcesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListQueuedResourcesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tpu.v2alpha1.ListQueuedResourcesResponse;

                    /**
                     * Creates a plain object from a ListQueuedResourcesResponse message. Also converts values to other types if specified.
                     * @param message ListQueuedResourcesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tpu.v2alpha1.ListQueuedResourcesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListQueuedResourcesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListQueuedResourcesResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetQueuedResourceRequest. */
                interface IGetQueuedResourceRequest {

                    /** GetQueuedResourceRequest name */
                    name?: (string|null);
                }

                /** Represents a GetQueuedResourceRequest. */
                class GetQueuedResourceRequest implements IGetQueuedResourceRequest {

                    /**
                     * Constructs a new GetQueuedResourceRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tpu.v2alpha1.IGetQueuedResourceRequest);

                    /** GetQueuedResourceRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetQueuedResourceRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetQueuedResourceRequest instance
                     */
                    public static create(properties?: google.cloud.tpu.v2alpha1.IGetQueuedResourceRequest): google.cloud.tpu.v2alpha1.GetQueuedResourceRequest;

                    /**
                     * Encodes the specified GetQueuedResourceRequest message. Does not implicitly {@link google.cloud.tpu.v2alpha1.GetQueuedResourceRequest.verify|verify} messages.
                     * @param message GetQueuedResourceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tpu.v2alpha1.IGetQueuedResourceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetQueuedResourceRequest message, length delimited. Does not implicitly {@link google.cloud.tpu.v2alpha1.GetQueuedResourceRequest.verify|verify} messages.
                     * @param message GetQueuedResourceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tpu.v2alpha1.IGetQueuedResourceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetQueuedResourceRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetQueuedResourceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tpu.v2alpha1.GetQueuedResourceRequest;

                    /**
                     * Decodes a GetQueuedResourceRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetQueuedResourceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tpu.v2alpha1.GetQueuedResourceRequest;

                    /**
                     * Verifies a GetQueuedResourceRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetQueuedResourceRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetQueuedResourceRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tpu.v2alpha1.GetQueuedResourceRequest;

                    /**
                     * Creates a plain object from a GetQueuedResourceRequest message. Also converts values to other types if specified.
                     * @param message GetQueuedResourceRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tpu.v2alpha1.GetQueuedResourceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetQueuedResourceRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetQueuedResourceRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CreateQueuedResourceRequest. */
                interface ICreateQueuedResourceRequest {

                    /** CreateQueuedResourceRequest parent */
                    parent?: (string|null);

                    /** CreateQueuedResourceRequest queuedResourceId */
                    queuedResourceId?: (string|null);

                    /** CreateQueuedResourceRequest queuedResource */
                    queuedResource?: (google.cloud.tpu.v2alpha1.IQueuedResource|null);

                    /** CreateQueuedResourceRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents a CreateQueuedResourceRequest. */
                class CreateQueuedResourceRequest implements ICreateQueuedResourceRequest {

                    /**
                     * Constructs a new CreateQueuedResourceRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tpu.v2alpha1.ICreateQueuedResourceRequest);

                    /** CreateQueuedResourceRequest parent. */
                    public parent: string;

                    /** CreateQueuedResourceRequest queuedResourceId. */
                    public queuedResourceId: string;

                    /** CreateQueuedResourceRequest queuedResource. */
                    public queuedResource?: (google.cloud.tpu.v2alpha1.IQueuedResource|null);

                    /** CreateQueuedResourceRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new CreateQueuedResourceRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateQueuedResourceRequest instance
                     */
                    public static create(properties?: google.cloud.tpu.v2alpha1.ICreateQueuedResourceRequest): google.cloud.tpu.v2alpha1.CreateQueuedResourceRequest;

                    /**
                     * Encodes the specified CreateQueuedResourceRequest message. Does not implicitly {@link google.cloud.tpu.v2alpha1.CreateQueuedResourceRequest.verify|verify} messages.
                     * @param message CreateQueuedResourceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tpu.v2alpha1.ICreateQueuedResourceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateQueuedResourceRequest message, length delimited. Does not implicitly {@link google.cloud.tpu.v2alpha1.CreateQueuedResourceRequest.verify|verify} messages.
                     * @param message CreateQueuedResourceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tpu.v2alpha1.ICreateQueuedResourceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateQueuedResourceRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateQueuedResourceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tpu.v2alpha1.CreateQueuedResourceRequest;

                    /**
                     * Decodes a CreateQueuedResourceRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateQueuedResourceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tpu.v2alpha1.CreateQueuedResourceRequest;

                    /**
                     * Verifies a CreateQueuedResourceRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateQueuedResourceRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateQueuedResourceRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tpu.v2alpha1.CreateQueuedResourceRequest;

                    /**
                     * Creates a plain object from a CreateQueuedResourceRequest message. Also converts values to other types if specified.
                     * @param message CreateQueuedResourceRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tpu.v2alpha1.CreateQueuedResourceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateQueuedResourceRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateQueuedResourceRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeleteQueuedResourceRequest. */
                interface IDeleteQueuedResourceRequest {

                    /** DeleteQueuedResourceRequest name */
                    name?: (string|null);

                    /** DeleteQueuedResourceRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents a DeleteQueuedResourceRequest. */
                class DeleteQueuedResourceRequest implements IDeleteQueuedResourceRequest {

                    /**
                     * Constructs a new DeleteQueuedResourceRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tpu.v2alpha1.IDeleteQueuedResourceRequest);

                    /** DeleteQueuedResourceRequest name. */
                    public name: string;

                    /** DeleteQueuedResourceRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new DeleteQueuedResourceRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteQueuedResourceRequest instance
                     */
                    public static create(properties?: google.cloud.tpu.v2alpha1.IDeleteQueuedResourceRequest): google.cloud.tpu.v2alpha1.DeleteQueuedResourceRequest;

                    /**
                     * Encodes the specified DeleteQueuedResourceRequest message. Does not implicitly {@link google.cloud.tpu.v2alpha1.DeleteQueuedResourceRequest.verify|verify} messages.
                     * @param message DeleteQueuedResourceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tpu.v2alpha1.IDeleteQueuedResourceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteQueuedResourceRequest message, length delimited. Does not implicitly {@link google.cloud.tpu.v2alpha1.DeleteQueuedResourceRequest.verify|verify} messages.
                     * @param message DeleteQueuedResourceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tpu.v2alpha1.IDeleteQueuedResourceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteQueuedResourceRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteQueuedResourceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tpu.v2alpha1.DeleteQueuedResourceRequest;

                    /**
                     * Decodes a DeleteQueuedResourceRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteQueuedResourceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tpu.v2alpha1.DeleteQueuedResourceRequest;

                    /**
                     * Verifies a DeleteQueuedResourceRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteQueuedResourceRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteQueuedResourceRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tpu.v2alpha1.DeleteQueuedResourceRequest;

                    /**
                     * Creates a plain object from a DeleteQueuedResourceRequest message. Also converts values to other types if specified.
                     * @param message DeleteQueuedResourceRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tpu.v2alpha1.DeleteQueuedResourceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteQueuedResourceRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeleteQueuedResourceRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ServiceIdentity. */
                interface IServiceIdentity {

                    /** ServiceIdentity email */
                    email?: (string|null);
                }

                /** Represents a ServiceIdentity. */
                class ServiceIdentity implements IServiceIdentity {

                    /**
                     * Constructs a new ServiceIdentity.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tpu.v2alpha1.IServiceIdentity);

                    /** ServiceIdentity email. */
                    public email: string;

                    /**
                     * Creates a new ServiceIdentity instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ServiceIdentity instance
                     */
                    public static create(properties?: google.cloud.tpu.v2alpha1.IServiceIdentity): google.cloud.tpu.v2alpha1.ServiceIdentity;

                    /**
                     * Encodes the specified ServiceIdentity message. Does not implicitly {@link google.cloud.tpu.v2alpha1.ServiceIdentity.verify|verify} messages.
                     * @param message ServiceIdentity message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tpu.v2alpha1.IServiceIdentity, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ServiceIdentity message, length delimited. Does not implicitly {@link google.cloud.tpu.v2alpha1.ServiceIdentity.verify|verify} messages.
                     * @param message ServiceIdentity message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tpu.v2alpha1.IServiceIdentity, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ServiceIdentity message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ServiceIdentity
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tpu.v2alpha1.ServiceIdentity;

                    /**
                     * Decodes a ServiceIdentity message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ServiceIdentity
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tpu.v2alpha1.ServiceIdentity;

                    /**
                     * Verifies a ServiceIdentity message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ServiceIdentity message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ServiceIdentity
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tpu.v2alpha1.ServiceIdentity;

                    /**
                     * Creates a plain object from a ServiceIdentity message. Also converts values to other types if specified.
                     * @param message ServiceIdentity
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tpu.v2alpha1.ServiceIdentity, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ServiceIdentity to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ServiceIdentity
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GenerateServiceIdentityRequest. */
                interface IGenerateServiceIdentityRequest {

                    /** GenerateServiceIdentityRequest parent */
                    parent?: (string|null);
                }

                /** Represents a GenerateServiceIdentityRequest. */
                class GenerateServiceIdentityRequest implements IGenerateServiceIdentityRequest {

                    /**
                     * Constructs a new GenerateServiceIdentityRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tpu.v2alpha1.IGenerateServiceIdentityRequest);

                    /** GenerateServiceIdentityRequest parent. */
                    public parent: string;

                    /**
                     * Creates a new GenerateServiceIdentityRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GenerateServiceIdentityRequest instance
                     */
                    public static create(properties?: google.cloud.tpu.v2alpha1.IGenerateServiceIdentityRequest): google.cloud.tpu.v2alpha1.GenerateServiceIdentityRequest;

                    /**
                     * Encodes the specified GenerateServiceIdentityRequest message. Does not implicitly {@link google.cloud.tpu.v2alpha1.GenerateServiceIdentityRequest.verify|verify} messages.
                     * @param message GenerateServiceIdentityRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tpu.v2alpha1.IGenerateServiceIdentityRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GenerateServiceIdentityRequest message, length delimited. Does not implicitly {@link google.cloud.tpu.v2alpha1.GenerateServiceIdentityRequest.verify|verify} messages.
                     * @param message GenerateServiceIdentityRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tpu.v2alpha1.IGenerateServiceIdentityRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GenerateServiceIdentityRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GenerateServiceIdentityRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tpu.v2alpha1.GenerateServiceIdentityRequest;

                    /**
                     * Decodes a GenerateServiceIdentityRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GenerateServiceIdentityRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tpu.v2alpha1.GenerateServiceIdentityRequest;

                    /**
                     * Verifies a GenerateServiceIdentityRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GenerateServiceIdentityRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GenerateServiceIdentityRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tpu.v2alpha1.GenerateServiceIdentityRequest;

                    /**
                     * Creates a plain object from a GenerateServiceIdentityRequest message. Also converts values to other types if specified.
                     * @param message GenerateServiceIdentityRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tpu.v2alpha1.GenerateServiceIdentityRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GenerateServiceIdentityRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GenerateServiceIdentityRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GenerateServiceIdentityResponse. */
                interface IGenerateServiceIdentityResponse {

                    /** GenerateServiceIdentityResponse identity */
                    identity?: (google.cloud.tpu.v2alpha1.IServiceIdentity|null);
                }

                /** Represents a GenerateServiceIdentityResponse. */
                class GenerateServiceIdentityResponse implements IGenerateServiceIdentityResponse {

                    /**
                     * Constructs a new GenerateServiceIdentityResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tpu.v2alpha1.IGenerateServiceIdentityResponse);

                    /** GenerateServiceIdentityResponse identity. */
                    public identity?: (google.cloud.tpu.v2alpha1.IServiceIdentity|null);

                    /**
                     * Creates a new GenerateServiceIdentityResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GenerateServiceIdentityResponse instance
                     */
                    public static create(properties?: google.cloud.tpu.v2alpha1.IGenerateServiceIdentityResponse): google.cloud.tpu.v2alpha1.GenerateServiceIdentityResponse;

                    /**
                     * Encodes the specified GenerateServiceIdentityResponse message. Does not implicitly {@link google.cloud.tpu.v2alpha1.GenerateServiceIdentityResponse.verify|verify} messages.
                     * @param message GenerateServiceIdentityResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tpu.v2alpha1.IGenerateServiceIdentityResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GenerateServiceIdentityResponse message, length delimited. Does not implicitly {@link google.cloud.tpu.v2alpha1.GenerateServiceIdentityResponse.verify|verify} messages.
                     * @param message GenerateServiceIdentityResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tpu.v2alpha1.IGenerateServiceIdentityResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GenerateServiceIdentityResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GenerateServiceIdentityResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tpu.v2alpha1.GenerateServiceIdentityResponse;

                    /**
                     * Decodes a GenerateServiceIdentityResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GenerateServiceIdentityResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tpu.v2alpha1.GenerateServiceIdentityResponse;

                    /**
                     * Verifies a GenerateServiceIdentityResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GenerateServiceIdentityResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GenerateServiceIdentityResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tpu.v2alpha1.GenerateServiceIdentityResponse;

                    /**
                     * Creates a plain object from a GenerateServiceIdentityResponse message. Also converts values to other types if specified.
                     * @param message GenerateServiceIdentityResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tpu.v2alpha1.GenerateServiceIdentityResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GenerateServiceIdentityResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GenerateServiceIdentityResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an AcceleratorType. */
                interface IAcceleratorType {

                    /** AcceleratorType name */
                    name?: (string|null);

                    /** AcceleratorType type */
                    type?: (string|null);
                }

                /** Represents an AcceleratorType. */
                class AcceleratorType implements IAcceleratorType {

                    /**
                     * Constructs a new AcceleratorType.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tpu.v2alpha1.IAcceleratorType);

                    /** AcceleratorType name. */
                    public name: string;

                    /** AcceleratorType type. */
                    public type: string;

                    /**
                     * Creates a new AcceleratorType instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AcceleratorType instance
                     */
                    public static create(properties?: google.cloud.tpu.v2alpha1.IAcceleratorType): google.cloud.tpu.v2alpha1.AcceleratorType;

                    /**
                     * Encodes the specified AcceleratorType message. Does not implicitly {@link google.cloud.tpu.v2alpha1.AcceleratorType.verify|verify} messages.
                     * @param message AcceleratorType message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tpu.v2alpha1.IAcceleratorType, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AcceleratorType message, length delimited. Does not implicitly {@link google.cloud.tpu.v2alpha1.AcceleratorType.verify|verify} messages.
                     * @param message AcceleratorType message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tpu.v2alpha1.IAcceleratorType, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AcceleratorType message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AcceleratorType
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tpu.v2alpha1.AcceleratorType;

                    /**
                     * Decodes an AcceleratorType message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AcceleratorType
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tpu.v2alpha1.AcceleratorType;

                    /**
                     * Verifies an AcceleratorType message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AcceleratorType message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AcceleratorType
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tpu.v2alpha1.AcceleratorType;

                    /**
                     * Creates a plain object from an AcceleratorType message. Also converts values to other types if specified.
                     * @param message AcceleratorType
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tpu.v2alpha1.AcceleratorType, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AcceleratorType to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for AcceleratorType
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetAcceleratorTypeRequest. */
                interface IGetAcceleratorTypeRequest {

                    /** GetAcceleratorTypeRequest name */
                    name?: (string|null);
                }

                /** Represents a GetAcceleratorTypeRequest. */
                class GetAcceleratorTypeRequest implements IGetAcceleratorTypeRequest {

                    /**
                     * Constructs a new GetAcceleratorTypeRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tpu.v2alpha1.IGetAcceleratorTypeRequest);

                    /** GetAcceleratorTypeRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetAcceleratorTypeRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetAcceleratorTypeRequest instance
                     */
                    public static create(properties?: google.cloud.tpu.v2alpha1.IGetAcceleratorTypeRequest): google.cloud.tpu.v2alpha1.GetAcceleratorTypeRequest;

                    /**
                     * Encodes the specified GetAcceleratorTypeRequest message. Does not implicitly {@link google.cloud.tpu.v2alpha1.GetAcceleratorTypeRequest.verify|verify} messages.
                     * @param message GetAcceleratorTypeRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tpu.v2alpha1.IGetAcceleratorTypeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetAcceleratorTypeRequest message, length delimited. Does not implicitly {@link google.cloud.tpu.v2alpha1.GetAcceleratorTypeRequest.verify|verify} messages.
                     * @param message GetAcceleratorTypeRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tpu.v2alpha1.IGetAcceleratorTypeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetAcceleratorTypeRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetAcceleratorTypeRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tpu.v2alpha1.GetAcceleratorTypeRequest;

                    /**
                     * Decodes a GetAcceleratorTypeRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetAcceleratorTypeRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tpu.v2alpha1.GetAcceleratorTypeRequest;

                    /**
                     * Verifies a GetAcceleratorTypeRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetAcceleratorTypeRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetAcceleratorTypeRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tpu.v2alpha1.GetAcceleratorTypeRequest;

                    /**
                     * Creates a plain object from a GetAcceleratorTypeRequest message. Also converts values to other types if specified.
                     * @param message GetAcceleratorTypeRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tpu.v2alpha1.GetAcceleratorTypeRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetAcceleratorTypeRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetAcceleratorTypeRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListAcceleratorTypesRequest. */
                interface IListAcceleratorTypesRequest {

                    /** ListAcceleratorTypesRequest parent */
                    parent?: (string|null);

                    /** ListAcceleratorTypesRequest pageSize */
                    pageSize?: (number|null);

                    /** ListAcceleratorTypesRequest pageToken */
                    pageToken?: (string|null);

                    /** ListAcceleratorTypesRequest filter */
                    filter?: (string|null);

                    /** ListAcceleratorTypesRequest orderBy */
                    orderBy?: (string|null);
                }

                /** Represents a ListAcceleratorTypesRequest. */
                class ListAcceleratorTypesRequest implements IListAcceleratorTypesRequest {

                    /**
                     * Constructs a new ListAcceleratorTypesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tpu.v2alpha1.IListAcceleratorTypesRequest);

                    /** ListAcceleratorTypesRequest parent. */
                    public parent: string;

                    /** ListAcceleratorTypesRequest pageSize. */
                    public pageSize: number;

                    /** ListAcceleratorTypesRequest pageToken. */
                    public pageToken: string;

                    /** ListAcceleratorTypesRequest filter. */
                    public filter: string;

                    /** ListAcceleratorTypesRequest orderBy. */
                    public orderBy: string;

                    /**
                     * Creates a new ListAcceleratorTypesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListAcceleratorTypesRequest instance
                     */
                    public static create(properties?: google.cloud.tpu.v2alpha1.IListAcceleratorTypesRequest): google.cloud.tpu.v2alpha1.ListAcceleratorTypesRequest;

                    /**
                     * Encodes the specified ListAcceleratorTypesRequest message. Does not implicitly {@link google.cloud.tpu.v2alpha1.ListAcceleratorTypesRequest.verify|verify} messages.
                     * @param message ListAcceleratorTypesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tpu.v2alpha1.IListAcceleratorTypesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListAcceleratorTypesRequest message, length delimited. Does not implicitly {@link google.cloud.tpu.v2alpha1.ListAcceleratorTypesRequest.verify|verify} messages.
                     * @param message ListAcceleratorTypesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tpu.v2alpha1.IListAcceleratorTypesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListAcceleratorTypesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListAcceleratorTypesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tpu.v2alpha1.ListAcceleratorTypesRequest;

                    /**
                     * Decodes a ListAcceleratorTypesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListAcceleratorTypesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tpu.v2alpha1.ListAcceleratorTypesRequest;

                    /**
                     * Verifies a ListAcceleratorTypesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListAcceleratorTypesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListAcceleratorTypesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tpu.v2alpha1.ListAcceleratorTypesRequest;

                    /**
                     * Creates a plain object from a ListAcceleratorTypesRequest message. Also converts values to other types if specified.
                     * @param message ListAcceleratorTypesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tpu.v2alpha1.ListAcceleratorTypesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListAcceleratorTypesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListAcceleratorTypesRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListAcceleratorTypesResponse. */
                interface IListAcceleratorTypesResponse {

                    /** ListAcceleratorTypesResponse acceleratorTypes */
                    acceleratorTypes?: (google.cloud.tpu.v2alpha1.IAcceleratorType[]|null);

                    /** ListAcceleratorTypesResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListAcceleratorTypesResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a ListAcceleratorTypesResponse. */
                class ListAcceleratorTypesResponse implements IListAcceleratorTypesResponse {

                    /**
                     * Constructs a new ListAcceleratorTypesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tpu.v2alpha1.IListAcceleratorTypesResponse);

                    /** ListAcceleratorTypesResponse acceleratorTypes. */
                    public acceleratorTypes: google.cloud.tpu.v2alpha1.IAcceleratorType[];

                    /** ListAcceleratorTypesResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListAcceleratorTypesResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListAcceleratorTypesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListAcceleratorTypesResponse instance
                     */
                    public static create(properties?: google.cloud.tpu.v2alpha1.IListAcceleratorTypesResponse): google.cloud.tpu.v2alpha1.ListAcceleratorTypesResponse;

                    /**
                     * Encodes the specified ListAcceleratorTypesResponse message. Does not implicitly {@link google.cloud.tpu.v2alpha1.ListAcceleratorTypesResponse.verify|verify} messages.
                     * @param message ListAcceleratorTypesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tpu.v2alpha1.IListAcceleratorTypesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListAcceleratorTypesResponse message, length delimited. Does not implicitly {@link google.cloud.tpu.v2alpha1.ListAcceleratorTypesResponse.verify|verify} messages.
                     * @param message ListAcceleratorTypesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tpu.v2alpha1.IListAcceleratorTypesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListAcceleratorTypesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListAcceleratorTypesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tpu.v2alpha1.ListAcceleratorTypesResponse;

                    /**
                     * Decodes a ListAcceleratorTypesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListAcceleratorTypesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tpu.v2alpha1.ListAcceleratorTypesResponse;

                    /**
                     * Verifies a ListAcceleratorTypesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListAcceleratorTypesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListAcceleratorTypesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tpu.v2alpha1.ListAcceleratorTypesResponse;

                    /**
                     * Creates a plain object from a ListAcceleratorTypesResponse message. Also converts values to other types if specified.
                     * @param message ListAcceleratorTypesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tpu.v2alpha1.ListAcceleratorTypesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListAcceleratorTypesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListAcceleratorTypesResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a RuntimeVersion. */
                interface IRuntimeVersion {

                    /** RuntimeVersion name */
                    name?: (string|null);

                    /** RuntimeVersion version */
                    version?: (string|null);
                }

                /** Represents a RuntimeVersion. */
                class RuntimeVersion implements IRuntimeVersion {

                    /**
                     * Constructs a new RuntimeVersion.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tpu.v2alpha1.IRuntimeVersion);

                    /** RuntimeVersion name. */
                    public name: string;

                    /** RuntimeVersion version. */
                    public version: string;

                    /**
                     * Creates a new RuntimeVersion instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RuntimeVersion instance
                     */
                    public static create(properties?: google.cloud.tpu.v2alpha1.IRuntimeVersion): google.cloud.tpu.v2alpha1.RuntimeVersion;

                    /**
                     * Encodes the specified RuntimeVersion message. Does not implicitly {@link google.cloud.tpu.v2alpha1.RuntimeVersion.verify|verify} messages.
                     * @param message RuntimeVersion message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tpu.v2alpha1.IRuntimeVersion, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RuntimeVersion message, length delimited. Does not implicitly {@link google.cloud.tpu.v2alpha1.RuntimeVersion.verify|verify} messages.
                     * @param message RuntimeVersion message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tpu.v2alpha1.IRuntimeVersion, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RuntimeVersion message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RuntimeVersion
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tpu.v2alpha1.RuntimeVersion;

                    /**
                     * Decodes a RuntimeVersion message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RuntimeVersion
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tpu.v2alpha1.RuntimeVersion;

                    /**
                     * Verifies a RuntimeVersion message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RuntimeVersion message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RuntimeVersion
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tpu.v2alpha1.RuntimeVersion;

                    /**
                     * Creates a plain object from a RuntimeVersion message. Also converts values to other types if specified.
                     * @param message RuntimeVersion
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tpu.v2alpha1.RuntimeVersion, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RuntimeVersion to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for RuntimeVersion
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetRuntimeVersionRequest. */
                interface IGetRuntimeVersionRequest {

                    /** GetRuntimeVersionRequest name */
                    name?: (string|null);
                }

                /** Represents a GetRuntimeVersionRequest. */
                class GetRuntimeVersionRequest implements IGetRuntimeVersionRequest {

                    /**
                     * Constructs a new GetRuntimeVersionRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tpu.v2alpha1.IGetRuntimeVersionRequest);

                    /** GetRuntimeVersionRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetRuntimeVersionRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetRuntimeVersionRequest instance
                     */
                    public static create(properties?: google.cloud.tpu.v2alpha1.IGetRuntimeVersionRequest): google.cloud.tpu.v2alpha1.GetRuntimeVersionRequest;

                    /**
                     * Encodes the specified GetRuntimeVersionRequest message. Does not implicitly {@link google.cloud.tpu.v2alpha1.GetRuntimeVersionRequest.verify|verify} messages.
                     * @param message GetRuntimeVersionRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tpu.v2alpha1.IGetRuntimeVersionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetRuntimeVersionRequest message, length delimited. Does not implicitly {@link google.cloud.tpu.v2alpha1.GetRuntimeVersionRequest.verify|verify} messages.
                     * @param message GetRuntimeVersionRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tpu.v2alpha1.IGetRuntimeVersionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetRuntimeVersionRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetRuntimeVersionRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tpu.v2alpha1.GetRuntimeVersionRequest;

                    /**
                     * Decodes a GetRuntimeVersionRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetRuntimeVersionRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tpu.v2alpha1.GetRuntimeVersionRequest;

                    /**
                     * Verifies a GetRuntimeVersionRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetRuntimeVersionRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetRuntimeVersionRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tpu.v2alpha1.GetRuntimeVersionRequest;

                    /**
                     * Creates a plain object from a GetRuntimeVersionRequest message. Also converts values to other types if specified.
                     * @param message GetRuntimeVersionRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tpu.v2alpha1.GetRuntimeVersionRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetRuntimeVersionRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetRuntimeVersionRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListRuntimeVersionsRequest. */
                interface IListRuntimeVersionsRequest {

                    /** ListRuntimeVersionsRequest parent */
                    parent?: (string|null);

                    /** ListRuntimeVersionsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListRuntimeVersionsRequest pageToken */
                    pageToken?: (string|null);

                    /** ListRuntimeVersionsRequest filter */
                    filter?: (string|null);

                    /** ListRuntimeVersionsRequest orderBy */
                    orderBy?: (string|null);
                }

                /** Represents a ListRuntimeVersionsRequest. */
                class ListRuntimeVersionsRequest implements IListRuntimeVersionsRequest {

                    /**
                     * Constructs a new ListRuntimeVersionsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tpu.v2alpha1.IListRuntimeVersionsRequest);

                    /** ListRuntimeVersionsRequest parent. */
                    public parent: string;

                    /** ListRuntimeVersionsRequest pageSize. */
                    public pageSize: number;

                    /** ListRuntimeVersionsRequest pageToken. */
                    public pageToken: string;

                    /** ListRuntimeVersionsRequest filter. */
                    public filter: string;

                    /** ListRuntimeVersionsRequest orderBy. */
                    public orderBy: string;

                    /**
                     * Creates a new ListRuntimeVersionsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListRuntimeVersionsRequest instance
                     */
                    public static create(properties?: google.cloud.tpu.v2alpha1.IListRuntimeVersionsRequest): google.cloud.tpu.v2alpha1.ListRuntimeVersionsRequest;

                    /**
                     * Encodes the specified ListRuntimeVersionsRequest message. Does not implicitly {@link google.cloud.tpu.v2alpha1.ListRuntimeVersionsRequest.verify|verify} messages.
                     * @param message ListRuntimeVersionsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tpu.v2alpha1.IListRuntimeVersionsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListRuntimeVersionsRequest message, length delimited. Does not implicitly {@link google.cloud.tpu.v2alpha1.ListRuntimeVersionsRequest.verify|verify} messages.
                     * @param message ListRuntimeVersionsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tpu.v2alpha1.IListRuntimeVersionsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListRuntimeVersionsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListRuntimeVersionsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tpu.v2alpha1.ListRuntimeVersionsRequest;

                    /**
                     * Decodes a ListRuntimeVersionsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListRuntimeVersionsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tpu.v2alpha1.ListRuntimeVersionsRequest;

                    /**
                     * Verifies a ListRuntimeVersionsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListRuntimeVersionsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListRuntimeVersionsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tpu.v2alpha1.ListRuntimeVersionsRequest;

                    /**
                     * Creates a plain object from a ListRuntimeVersionsRequest message. Also converts values to other types if specified.
                     * @param message ListRuntimeVersionsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tpu.v2alpha1.ListRuntimeVersionsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListRuntimeVersionsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListRuntimeVersionsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListRuntimeVersionsResponse. */
                interface IListRuntimeVersionsResponse {

                    /** ListRuntimeVersionsResponse runtimeVersions */
                    runtimeVersions?: (google.cloud.tpu.v2alpha1.IRuntimeVersion[]|null);

                    /** ListRuntimeVersionsResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListRuntimeVersionsResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a ListRuntimeVersionsResponse. */
                class ListRuntimeVersionsResponse implements IListRuntimeVersionsResponse {

                    /**
                     * Constructs a new ListRuntimeVersionsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tpu.v2alpha1.IListRuntimeVersionsResponse);

                    /** ListRuntimeVersionsResponse runtimeVersions. */
                    public runtimeVersions: google.cloud.tpu.v2alpha1.IRuntimeVersion[];

                    /** ListRuntimeVersionsResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListRuntimeVersionsResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListRuntimeVersionsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListRuntimeVersionsResponse instance
                     */
                    public static create(properties?: google.cloud.tpu.v2alpha1.IListRuntimeVersionsResponse): google.cloud.tpu.v2alpha1.ListRuntimeVersionsResponse;

                    /**
                     * Encodes the specified ListRuntimeVersionsResponse message. Does not implicitly {@link google.cloud.tpu.v2alpha1.ListRuntimeVersionsResponse.verify|verify} messages.
                     * @param message ListRuntimeVersionsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tpu.v2alpha1.IListRuntimeVersionsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListRuntimeVersionsResponse message, length delimited. Does not implicitly {@link google.cloud.tpu.v2alpha1.ListRuntimeVersionsResponse.verify|verify} messages.
                     * @param message ListRuntimeVersionsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tpu.v2alpha1.IListRuntimeVersionsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListRuntimeVersionsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListRuntimeVersionsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tpu.v2alpha1.ListRuntimeVersionsResponse;

                    /**
                     * Decodes a ListRuntimeVersionsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListRuntimeVersionsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tpu.v2alpha1.ListRuntimeVersionsResponse;

                    /**
                     * Verifies a ListRuntimeVersionsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListRuntimeVersionsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListRuntimeVersionsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tpu.v2alpha1.ListRuntimeVersionsResponse;

                    /**
                     * Creates a plain object from a ListRuntimeVersionsResponse message. Also converts values to other types if specified.
                     * @param message ListRuntimeVersionsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tpu.v2alpha1.ListRuntimeVersionsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListRuntimeVersionsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListRuntimeVersionsResponse
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

                    /** OperationMetadata statusDetail */
                    statusDetail?: (string|null);

                    /** OperationMetadata cancelRequested */
                    cancelRequested?: (boolean|null);

                    /** OperationMetadata apiVersion */
                    apiVersion?: (string|null);
                }

                /** Represents an OperationMetadata. */
                class OperationMetadata implements IOperationMetadata {

                    /**
                     * Constructs a new OperationMetadata.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tpu.v2alpha1.IOperationMetadata);

                    /** OperationMetadata createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** OperationMetadata endTime. */
                    public endTime?: (google.protobuf.ITimestamp|null);

                    /** OperationMetadata target. */
                    public target: string;

                    /** OperationMetadata verb. */
                    public verb: string;

                    /** OperationMetadata statusDetail. */
                    public statusDetail: string;

                    /** OperationMetadata cancelRequested. */
                    public cancelRequested: boolean;

                    /** OperationMetadata apiVersion. */
                    public apiVersion: string;

                    /**
                     * Creates a new OperationMetadata instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns OperationMetadata instance
                     */
                    public static create(properties?: google.cloud.tpu.v2alpha1.IOperationMetadata): google.cloud.tpu.v2alpha1.OperationMetadata;

                    /**
                     * Encodes the specified OperationMetadata message. Does not implicitly {@link google.cloud.tpu.v2alpha1.OperationMetadata.verify|verify} messages.
                     * @param message OperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tpu.v2alpha1.IOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified OperationMetadata message, length delimited. Does not implicitly {@link google.cloud.tpu.v2alpha1.OperationMetadata.verify|verify} messages.
                     * @param message OperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tpu.v2alpha1.IOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an OperationMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns OperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tpu.v2alpha1.OperationMetadata;

                    /**
                     * Decodes an OperationMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns OperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tpu.v2alpha1.OperationMetadata;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.tpu.v2alpha1.OperationMetadata;

                    /**
                     * Creates a plain object from an OperationMetadata message. Also converts values to other types if specified.
                     * @param message OperationMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tpu.v2alpha1.OperationMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

                /** Properties of a Symptom. */
                interface ISymptom {

                    /** Symptom createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** Symptom symptomType */
                    symptomType?: (google.cloud.tpu.v2alpha1.Symptom.SymptomType|keyof typeof google.cloud.tpu.v2alpha1.Symptom.SymptomType|null);

                    /** Symptom details */
                    details?: (string|null);

                    /** Symptom workerId */
                    workerId?: (string|null);
                }

                /** Represents a Symptom. */
                class Symptom implements ISymptom {

                    /**
                     * Constructs a new Symptom.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tpu.v2alpha1.ISymptom);

                    /** Symptom createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** Symptom symptomType. */
                    public symptomType: (google.cloud.tpu.v2alpha1.Symptom.SymptomType|keyof typeof google.cloud.tpu.v2alpha1.Symptom.SymptomType);

                    /** Symptom details. */
                    public details: string;

                    /** Symptom workerId. */
                    public workerId: string;

                    /**
                     * Creates a new Symptom instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Symptom instance
                     */
                    public static create(properties?: google.cloud.tpu.v2alpha1.ISymptom): google.cloud.tpu.v2alpha1.Symptom;

                    /**
                     * Encodes the specified Symptom message. Does not implicitly {@link google.cloud.tpu.v2alpha1.Symptom.verify|verify} messages.
                     * @param message Symptom message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tpu.v2alpha1.ISymptom, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Symptom message, length delimited. Does not implicitly {@link google.cloud.tpu.v2alpha1.Symptom.verify|verify} messages.
                     * @param message Symptom message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tpu.v2alpha1.ISymptom, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Symptom message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Symptom
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tpu.v2alpha1.Symptom;

                    /**
                     * Decodes a Symptom message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Symptom
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tpu.v2alpha1.Symptom;

                    /**
                     * Verifies a Symptom message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Symptom message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Symptom
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tpu.v2alpha1.Symptom;

                    /**
                     * Creates a plain object from a Symptom message. Also converts values to other types if specified.
                     * @param message Symptom
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tpu.v2alpha1.Symptom, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Symptom to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Symptom
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace Symptom {

                    /** SymptomType enum. */
                    enum SymptomType {
                        SYMPTOM_TYPE_UNSPECIFIED = 0,
                        LOW_MEMORY = 1,
                        OUT_OF_MEMORY = 2,
                        EXECUTE_TIMED_OUT = 3,
                        MESH_BUILD_FAIL = 4,
                        HBM_OUT_OF_MEMORY = 5,
                        PROJECT_ABUSE = 6
                    }
                }

                /** Properties of a GetGuestAttributesRequest. */
                interface IGetGuestAttributesRequest {

                    /** GetGuestAttributesRequest name */
                    name?: (string|null);

                    /** GetGuestAttributesRequest queryPath */
                    queryPath?: (string|null);

                    /** GetGuestAttributesRequest workerIds */
                    workerIds?: (string[]|null);
                }

                /** Represents a GetGuestAttributesRequest. */
                class GetGuestAttributesRequest implements IGetGuestAttributesRequest {

                    /**
                     * Constructs a new GetGuestAttributesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tpu.v2alpha1.IGetGuestAttributesRequest);

                    /** GetGuestAttributesRequest name. */
                    public name: string;

                    /** GetGuestAttributesRequest queryPath. */
                    public queryPath: string;

                    /** GetGuestAttributesRequest workerIds. */
                    public workerIds: string[];

                    /**
                     * Creates a new GetGuestAttributesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetGuestAttributesRequest instance
                     */
                    public static create(properties?: google.cloud.tpu.v2alpha1.IGetGuestAttributesRequest): google.cloud.tpu.v2alpha1.GetGuestAttributesRequest;

                    /**
                     * Encodes the specified GetGuestAttributesRequest message. Does not implicitly {@link google.cloud.tpu.v2alpha1.GetGuestAttributesRequest.verify|verify} messages.
                     * @param message GetGuestAttributesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tpu.v2alpha1.IGetGuestAttributesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetGuestAttributesRequest message, length delimited. Does not implicitly {@link google.cloud.tpu.v2alpha1.GetGuestAttributesRequest.verify|verify} messages.
                     * @param message GetGuestAttributesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tpu.v2alpha1.IGetGuestAttributesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetGuestAttributesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetGuestAttributesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tpu.v2alpha1.GetGuestAttributesRequest;

                    /**
                     * Decodes a GetGuestAttributesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetGuestAttributesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tpu.v2alpha1.GetGuestAttributesRequest;

                    /**
                     * Verifies a GetGuestAttributesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetGuestAttributesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetGuestAttributesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tpu.v2alpha1.GetGuestAttributesRequest;

                    /**
                     * Creates a plain object from a GetGuestAttributesRequest message. Also converts values to other types if specified.
                     * @param message GetGuestAttributesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tpu.v2alpha1.GetGuestAttributesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetGuestAttributesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetGuestAttributesRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetGuestAttributesResponse. */
                interface IGetGuestAttributesResponse {

                    /** GetGuestAttributesResponse guestAttributes */
                    guestAttributes?: (google.cloud.tpu.v2alpha1.IGuestAttributes[]|null);
                }

                /** Represents a GetGuestAttributesResponse. */
                class GetGuestAttributesResponse implements IGetGuestAttributesResponse {

                    /**
                     * Constructs a new GetGuestAttributesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tpu.v2alpha1.IGetGuestAttributesResponse);

                    /** GetGuestAttributesResponse guestAttributes. */
                    public guestAttributes: google.cloud.tpu.v2alpha1.IGuestAttributes[];

                    /**
                     * Creates a new GetGuestAttributesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetGuestAttributesResponse instance
                     */
                    public static create(properties?: google.cloud.tpu.v2alpha1.IGetGuestAttributesResponse): google.cloud.tpu.v2alpha1.GetGuestAttributesResponse;

                    /**
                     * Encodes the specified GetGuestAttributesResponse message. Does not implicitly {@link google.cloud.tpu.v2alpha1.GetGuestAttributesResponse.verify|verify} messages.
                     * @param message GetGuestAttributesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tpu.v2alpha1.IGetGuestAttributesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetGuestAttributesResponse message, length delimited. Does not implicitly {@link google.cloud.tpu.v2alpha1.GetGuestAttributesResponse.verify|verify} messages.
                     * @param message GetGuestAttributesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tpu.v2alpha1.IGetGuestAttributesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetGuestAttributesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetGuestAttributesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tpu.v2alpha1.GetGuestAttributesResponse;

                    /**
                     * Decodes a GetGuestAttributesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetGuestAttributesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tpu.v2alpha1.GetGuestAttributesResponse;

                    /**
                     * Verifies a GetGuestAttributesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetGuestAttributesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetGuestAttributesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tpu.v2alpha1.GetGuestAttributesResponse;

                    /**
                     * Creates a plain object from a GetGuestAttributesResponse message. Also converts values to other types if specified.
                     * @param message GetGuestAttributesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tpu.v2alpha1.GetGuestAttributesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetGuestAttributesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetGuestAttributesResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a SimulateMaintenanceEventRequest. */
                interface ISimulateMaintenanceEventRequest {

                    /** SimulateMaintenanceEventRequest name */
                    name?: (string|null);

                    /** SimulateMaintenanceEventRequest workerIds */
                    workerIds?: (string[]|null);
                }

                /** Represents a SimulateMaintenanceEventRequest. */
                class SimulateMaintenanceEventRequest implements ISimulateMaintenanceEventRequest {

                    /**
                     * Constructs a new SimulateMaintenanceEventRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tpu.v2alpha1.ISimulateMaintenanceEventRequest);

                    /** SimulateMaintenanceEventRequest name. */
                    public name: string;

                    /** SimulateMaintenanceEventRequest workerIds. */
                    public workerIds: string[];

                    /**
                     * Creates a new SimulateMaintenanceEventRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SimulateMaintenanceEventRequest instance
                     */
                    public static create(properties?: google.cloud.tpu.v2alpha1.ISimulateMaintenanceEventRequest): google.cloud.tpu.v2alpha1.SimulateMaintenanceEventRequest;

                    /**
                     * Encodes the specified SimulateMaintenanceEventRequest message. Does not implicitly {@link google.cloud.tpu.v2alpha1.SimulateMaintenanceEventRequest.verify|verify} messages.
                     * @param message SimulateMaintenanceEventRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tpu.v2alpha1.ISimulateMaintenanceEventRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SimulateMaintenanceEventRequest message, length delimited. Does not implicitly {@link google.cloud.tpu.v2alpha1.SimulateMaintenanceEventRequest.verify|verify} messages.
                     * @param message SimulateMaintenanceEventRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tpu.v2alpha1.ISimulateMaintenanceEventRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SimulateMaintenanceEventRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SimulateMaintenanceEventRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tpu.v2alpha1.SimulateMaintenanceEventRequest;

                    /**
                     * Decodes a SimulateMaintenanceEventRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SimulateMaintenanceEventRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tpu.v2alpha1.SimulateMaintenanceEventRequest;

                    /**
                     * Verifies a SimulateMaintenanceEventRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SimulateMaintenanceEventRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SimulateMaintenanceEventRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tpu.v2alpha1.SimulateMaintenanceEventRequest;

                    /**
                     * Creates a plain object from a SimulateMaintenanceEventRequest message. Also converts values to other types if specified.
                     * @param message SimulateMaintenanceEventRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tpu.v2alpha1.SimulateMaintenanceEventRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SimulateMaintenanceEventRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for SimulateMaintenanceEventRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ShieldedInstanceConfig. */
                interface IShieldedInstanceConfig {

                    /** ShieldedInstanceConfig enableSecureBoot */
                    enableSecureBoot?: (boolean|null);
                }

                /** Represents a ShieldedInstanceConfig. */
                class ShieldedInstanceConfig implements IShieldedInstanceConfig {

                    /**
                     * Constructs a new ShieldedInstanceConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tpu.v2alpha1.IShieldedInstanceConfig);

                    /** ShieldedInstanceConfig enableSecureBoot. */
                    public enableSecureBoot: boolean;

                    /**
                     * Creates a new ShieldedInstanceConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ShieldedInstanceConfig instance
                     */
                    public static create(properties?: google.cloud.tpu.v2alpha1.IShieldedInstanceConfig): google.cloud.tpu.v2alpha1.ShieldedInstanceConfig;

                    /**
                     * Encodes the specified ShieldedInstanceConfig message. Does not implicitly {@link google.cloud.tpu.v2alpha1.ShieldedInstanceConfig.verify|verify} messages.
                     * @param message ShieldedInstanceConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tpu.v2alpha1.IShieldedInstanceConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ShieldedInstanceConfig message, length delimited. Does not implicitly {@link google.cloud.tpu.v2alpha1.ShieldedInstanceConfig.verify|verify} messages.
                     * @param message ShieldedInstanceConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tpu.v2alpha1.IShieldedInstanceConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ShieldedInstanceConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ShieldedInstanceConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tpu.v2alpha1.ShieldedInstanceConfig;

                    /**
                     * Decodes a ShieldedInstanceConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ShieldedInstanceConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tpu.v2alpha1.ShieldedInstanceConfig;

                    /**
                     * Verifies a ShieldedInstanceConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ShieldedInstanceConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ShieldedInstanceConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tpu.v2alpha1.ShieldedInstanceConfig;

                    /**
                     * Creates a plain object from a ShieldedInstanceConfig message. Also converts values to other types if specified.
                     * @param message ShieldedInstanceConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tpu.v2alpha1.ShieldedInstanceConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ShieldedInstanceConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ShieldedInstanceConfig
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
            edition?: (string|null);
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
            public edition: string;

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

            /**
             * Gets the default type url for ExtensionRangeOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
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

            /**
             * Gets the default type url for EnumValueOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
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

        /** Properties of an Interval. */
        interface IInterval {

            /** Interval startTime */
            startTime?: (google.protobuf.ITimestamp|null);

            /** Interval endTime */
            endTime?: (google.protobuf.ITimestamp|null);
        }

        /** Represents an Interval. */
        class Interval implements IInterval {

            /**
             * Constructs a new Interval.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.type.IInterval);

            /** Interval startTime. */
            public startTime?: (google.protobuf.ITimestamp|null);

            /** Interval endTime. */
            public endTime?: (google.protobuf.ITimestamp|null);

            /**
             * Creates a new Interval instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Interval instance
             */
            public static create(properties?: google.type.IInterval): google.type.Interval;

            /**
             * Encodes the specified Interval message. Does not implicitly {@link google.type.Interval.verify|verify} messages.
             * @param message Interval message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.type.IInterval, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Interval message, length delimited. Does not implicitly {@link google.type.Interval.verify|verify} messages.
             * @param message Interval message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.type.IInterval, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Interval message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Interval
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.type.Interval;

            /**
             * Decodes an Interval message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Interval
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.type.Interval;

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
            public static fromObject(object: { [k: string]: any }): google.type.Interval;

            /**
             * Creates a plain object from an Interval message. Also converts values to other types if specified.
             * @param message Interval
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.type.Interval, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Interval to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Interval
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }
}
