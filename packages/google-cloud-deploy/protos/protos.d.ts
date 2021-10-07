// Copyright 2021 Google LLC
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

        /** Namespace deploy. */
        namespace deploy {

            /** Namespace v1. */
            namespace v1 {

                /** Represents a CloudDeploy */
                class CloudDeploy extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new CloudDeploy service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new CloudDeploy service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): CloudDeploy;

                    /**
                     * Calls ListDeliveryPipelines.
                     * @param request ListDeliveryPipelinesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListDeliveryPipelinesResponse
                     */
                    public listDeliveryPipelines(request: google.cloud.deploy.v1.IListDeliveryPipelinesRequest, callback: google.cloud.deploy.v1.CloudDeploy.ListDeliveryPipelinesCallback): void;

                    /**
                     * Calls ListDeliveryPipelines.
                     * @param request ListDeliveryPipelinesRequest message or plain object
                     * @returns Promise
                     */
                    public listDeliveryPipelines(request: google.cloud.deploy.v1.IListDeliveryPipelinesRequest): Promise<google.cloud.deploy.v1.ListDeliveryPipelinesResponse>;

                    /**
                     * Calls GetDeliveryPipeline.
                     * @param request GetDeliveryPipelineRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and DeliveryPipeline
                     */
                    public getDeliveryPipeline(request: google.cloud.deploy.v1.IGetDeliveryPipelineRequest, callback: google.cloud.deploy.v1.CloudDeploy.GetDeliveryPipelineCallback): void;

                    /**
                     * Calls GetDeliveryPipeline.
                     * @param request GetDeliveryPipelineRequest message or plain object
                     * @returns Promise
                     */
                    public getDeliveryPipeline(request: google.cloud.deploy.v1.IGetDeliveryPipelineRequest): Promise<google.cloud.deploy.v1.DeliveryPipeline>;

                    /**
                     * Calls CreateDeliveryPipeline.
                     * @param request CreateDeliveryPipelineRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createDeliveryPipeline(request: google.cloud.deploy.v1.ICreateDeliveryPipelineRequest, callback: google.cloud.deploy.v1.CloudDeploy.CreateDeliveryPipelineCallback): void;

                    /**
                     * Calls CreateDeliveryPipeline.
                     * @param request CreateDeliveryPipelineRequest message or plain object
                     * @returns Promise
                     */
                    public createDeliveryPipeline(request: google.cloud.deploy.v1.ICreateDeliveryPipelineRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls UpdateDeliveryPipeline.
                     * @param request UpdateDeliveryPipelineRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public updateDeliveryPipeline(request: google.cloud.deploy.v1.IUpdateDeliveryPipelineRequest, callback: google.cloud.deploy.v1.CloudDeploy.UpdateDeliveryPipelineCallback): void;

                    /**
                     * Calls UpdateDeliveryPipeline.
                     * @param request UpdateDeliveryPipelineRequest message or plain object
                     * @returns Promise
                     */
                    public updateDeliveryPipeline(request: google.cloud.deploy.v1.IUpdateDeliveryPipelineRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls DeleteDeliveryPipeline.
                     * @param request DeleteDeliveryPipelineRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deleteDeliveryPipeline(request: google.cloud.deploy.v1.IDeleteDeliveryPipelineRequest, callback: google.cloud.deploy.v1.CloudDeploy.DeleteDeliveryPipelineCallback): void;

                    /**
                     * Calls DeleteDeliveryPipeline.
                     * @param request DeleteDeliveryPipelineRequest message or plain object
                     * @returns Promise
                     */
                    public deleteDeliveryPipeline(request: google.cloud.deploy.v1.IDeleteDeliveryPipelineRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ListTargets.
                     * @param request ListTargetsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListTargetsResponse
                     */
                    public listTargets(request: google.cloud.deploy.v1.IListTargetsRequest, callback: google.cloud.deploy.v1.CloudDeploy.ListTargetsCallback): void;

                    /**
                     * Calls ListTargets.
                     * @param request ListTargetsRequest message or plain object
                     * @returns Promise
                     */
                    public listTargets(request: google.cloud.deploy.v1.IListTargetsRequest): Promise<google.cloud.deploy.v1.ListTargetsResponse>;

                    /**
                     * Calls GetTarget.
                     * @param request GetTargetRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Target
                     */
                    public getTarget(request: google.cloud.deploy.v1.IGetTargetRequest, callback: google.cloud.deploy.v1.CloudDeploy.GetTargetCallback): void;

                    /**
                     * Calls GetTarget.
                     * @param request GetTargetRequest message or plain object
                     * @returns Promise
                     */
                    public getTarget(request: google.cloud.deploy.v1.IGetTargetRequest): Promise<google.cloud.deploy.v1.Target>;

                    /**
                     * Calls CreateTarget.
                     * @param request CreateTargetRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createTarget(request: google.cloud.deploy.v1.ICreateTargetRequest, callback: google.cloud.deploy.v1.CloudDeploy.CreateTargetCallback): void;

                    /**
                     * Calls CreateTarget.
                     * @param request CreateTargetRequest message or plain object
                     * @returns Promise
                     */
                    public createTarget(request: google.cloud.deploy.v1.ICreateTargetRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls UpdateTarget.
                     * @param request UpdateTargetRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public updateTarget(request: google.cloud.deploy.v1.IUpdateTargetRequest, callback: google.cloud.deploy.v1.CloudDeploy.UpdateTargetCallback): void;

                    /**
                     * Calls UpdateTarget.
                     * @param request UpdateTargetRequest message or plain object
                     * @returns Promise
                     */
                    public updateTarget(request: google.cloud.deploy.v1.IUpdateTargetRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls DeleteTarget.
                     * @param request DeleteTargetRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deleteTarget(request: google.cloud.deploy.v1.IDeleteTargetRequest, callback: google.cloud.deploy.v1.CloudDeploy.DeleteTargetCallback): void;

                    /**
                     * Calls DeleteTarget.
                     * @param request DeleteTargetRequest message or plain object
                     * @returns Promise
                     */
                    public deleteTarget(request: google.cloud.deploy.v1.IDeleteTargetRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ListReleases.
                     * @param request ListReleasesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListReleasesResponse
                     */
                    public listReleases(request: google.cloud.deploy.v1.IListReleasesRequest, callback: google.cloud.deploy.v1.CloudDeploy.ListReleasesCallback): void;

                    /**
                     * Calls ListReleases.
                     * @param request ListReleasesRequest message or plain object
                     * @returns Promise
                     */
                    public listReleases(request: google.cloud.deploy.v1.IListReleasesRequest): Promise<google.cloud.deploy.v1.ListReleasesResponse>;

                    /**
                     * Calls GetRelease.
                     * @param request GetReleaseRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Release
                     */
                    public getRelease(request: google.cloud.deploy.v1.IGetReleaseRequest, callback: google.cloud.deploy.v1.CloudDeploy.GetReleaseCallback): void;

                    /**
                     * Calls GetRelease.
                     * @param request GetReleaseRequest message or plain object
                     * @returns Promise
                     */
                    public getRelease(request: google.cloud.deploy.v1.IGetReleaseRequest): Promise<google.cloud.deploy.v1.Release>;

                    /**
                     * Calls CreateRelease.
                     * @param request CreateReleaseRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createRelease(request: google.cloud.deploy.v1.ICreateReleaseRequest, callback: google.cloud.deploy.v1.CloudDeploy.CreateReleaseCallback): void;

                    /**
                     * Calls CreateRelease.
                     * @param request CreateReleaseRequest message or plain object
                     * @returns Promise
                     */
                    public createRelease(request: google.cloud.deploy.v1.ICreateReleaseRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ApproveRollout.
                     * @param request ApproveRolloutRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ApproveRolloutResponse
                     */
                    public approveRollout(request: google.cloud.deploy.v1.IApproveRolloutRequest, callback: google.cloud.deploy.v1.CloudDeploy.ApproveRolloutCallback): void;

                    /**
                     * Calls ApproveRollout.
                     * @param request ApproveRolloutRequest message or plain object
                     * @returns Promise
                     */
                    public approveRollout(request: google.cloud.deploy.v1.IApproveRolloutRequest): Promise<google.cloud.deploy.v1.ApproveRolloutResponse>;

                    /**
                     * Calls ListRollouts.
                     * @param request ListRolloutsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListRolloutsResponse
                     */
                    public listRollouts(request: google.cloud.deploy.v1.IListRolloutsRequest, callback: google.cloud.deploy.v1.CloudDeploy.ListRolloutsCallback): void;

                    /**
                     * Calls ListRollouts.
                     * @param request ListRolloutsRequest message or plain object
                     * @returns Promise
                     */
                    public listRollouts(request: google.cloud.deploy.v1.IListRolloutsRequest): Promise<google.cloud.deploy.v1.ListRolloutsResponse>;

                    /**
                     * Calls GetRollout.
                     * @param request GetRolloutRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Rollout
                     */
                    public getRollout(request: google.cloud.deploy.v1.IGetRolloutRequest, callback: google.cloud.deploy.v1.CloudDeploy.GetRolloutCallback): void;

                    /**
                     * Calls GetRollout.
                     * @param request GetRolloutRequest message or plain object
                     * @returns Promise
                     */
                    public getRollout(request: google.cloud.deploy.v1.IGetRolloutRequest): Promise<google.cloud.deploy.v1.Rollout>;

                    /**
                     * Calls CreateRollout.
                     * @param request CreateRolloutRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createRollout(request: google.cloud.deploy.v1.ICreateRolloutRequest, callback: google.cloud.deploy.v1.CloudDeploy.CreateRolloutCallback): void;

                    /**
                     * Calls CreateRollout.
                     * @param request CreateRolloutRequest message or plain object
                     * @returns Promise
                     */
                    public createRollout(request: google.cloud.deploy.v1.ICreateRolloutRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls GetConfig.
                     * @param request GetConfigRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Config
                     */
                    public getConfig(request: google.cloud.deploy.v1.IGetConfigRequest, callback: google.cloud.deploy.v1.CloudDeploy.GetConfigCallback): void;

                    /**
                     * Calls GetConfig.
                     * @param request GetConfigRequest message or plain object
                     * @returns Promise
                     */
                    public getConfig(request: google.cloud.deploy.v1.IGetConfigRequest): Promise<google.cloud.deploy.v1.Config>;
                }

                namespace CloudDeploy {

                    /**
                     * Callback as used by {@link google.cloud.deploy.v1.CloudDeploy#listDeliveryPipelines}.
                     * @param error Error, if any
                     * @param [response] ListDeliveryPipelinesResponse
                     */
                    type ListDeliveryPipelinesCallback = (error: (Error|null), response?: google.cloud.deploy.v1.ListDeliveryPipelinesResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.deploy.v1.CloudDeploy#getDeliveryPipeline}.
                     * @param error Error, if any
                     * @param [response] DeliveryPipeline
                     */
                    type GetDeliveryPipelineCallback = (error: (Error|null), response?: google.cloud.deploy.v1.DeliveryPipeline) => void;

                    /**
                     * Callback as used by {@link google.cloud.deploy.v1.CloudDeploy#createDeliveryPipeline}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateDeliveryPipelineCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.deploy.v1.CloudDeploy#updateDeliveryPipeline}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type UpdateDeliveryPipelineCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.deploy.v1.CloudDeploy#deleteDeliveryPipeline}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeleteDeliveryPipelineCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.deploy.v1.CloudDeploy#listTargets}.
                     * @param error Error, if any
                     * @param [response] ListTargetsResponse
                     */
                    type ListTargetsCallback = (error: (Error|null), response?: google.cloud.deploy.v1.ListTargetsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.deploy.v1.CloudDeploy#getTarget}.
                     * @param error Error, if any
                     * @param [response] Target
                     */
                    type GetTargetCallback = (error: (Error|null), response?: google.cloud.deploy.v1.Target) => void;

                    /**
                     * Callback as used by {@link google.cloud.deploy.v1.CloudDeploy#createTarget}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateTargetCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.deploy.v1.CloudDeploy#updateTarget}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type UpdateTargetCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.deploy.v1.CloudDeploy#deleteTarget}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeleteTargetCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.deploy.v1.CloudDeploy#listReleases}.
                     * @param error Error, if any
                     * @param [response] ListReleasesResponse
                     */
                    type ListReleasesCallback = (error: (Error|null), response?: google.cloud.deploy.v1.ListReleasesResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.deploy.v1.CloudDeploy#getRelease}.
                     * @param error Error, if any
                     * @param [response] Release
                     */
                    type GetReleaseCallback = (error: (Error|null), response?: google.cloud.deploy.v1.Release) => void;

                    /**
                     * Callback as used by {@link google.cloud.deploy.v1.CloudDeploy#createRelease}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateReleaseCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.deploy.v1.CloudDeploy#approveRollout}.
                     * @param error Error, if any
                     * @param [response] ApproveRolloutResponse
                     */
                    type ApproveRolloutCallback = (error: (Error|null), response?: google.cloud.deploy.v1.ApproveRolloutResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.deploy.v1.CloudDeploy#listRollouts}.
                     * @param error Error, if any
                     * @param [response] ListRolloutsResponse
                     */
                    type ListRolloutsCallback = (error: (Error|null), response?: google.cloud.deploy.v1.ListRolloutsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.deploy.v1.CloudDeploy#getRollout}.
                     * @param error Error, if any
                     * @param [response] Rollout
                     */
                    type GetRolloutCallback = (error: (Error|null), response?: google.cloud.deploy.v1.Rollout) => void;

                    /**
                     * Callback as used by {@link google.cloud.deploy.v1.CloudDeploy#createRollout}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateRolloutCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.deploy.v1.CloudDeploy#getConfig}.
                     * @param error Error, if any
                     * @param [response] Config
                     */
                    type GetConfigCallback = (error: (Error|null), response?: google.cloud.deploy.v1.Config) => void;
                }

                /** Properties of a DeliveryPipeline. */
                interface IDeliveryPipeline {

                    /** DeliveryPipeline name */
                    name?: (string|null);

                    /** DeliveryPipeline uid */
                    uid?: (string|null);

                    /** DeliveryPipeline description */
                    description?: (string|null);

                    /** DeliveryPipeline annotations */
                    annotations?: ({ [k: string]: string }|null);

                    /** DeliveryPipeline labels */
                    labels?: ({ [k: string]: string }|null);

                    /** DeliveryPipeline createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** DeliveryPipeline updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** DeliveryPipeline serialPipeline */
                    serialPipeline?: (google.cloud.deploy.v1.ISerialPipeline|null);

                    /** DeliveryPipeline condition */
                    condition?: (google.cloud.deploy.v1.IPipelineCondition|null);

                    /** DeliveryPipeline etag */
                    etag?: (string|null);
                }

                /** Represents a DeliveryPipeline. */
                class DeliveryPipeline implements IDeliveryPipeline {

                    /**
                     * Constructs a new DeliveryPipeline.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.deploy.v1.IDeliveryPipeline);

                    /** DeliveryPipeline name. */
                    public name: string;

                    /** DeliveryPipeline uid. */
                    public uid: string;

                    /** DeliveryPipeline description. */
                    public description: string;

                    /** DeliveryPipeline annotations. */
                    public annotations: { [k: string]: string };

                    /** DeliveryPipeline labels. */
                    public labels: { [k: string]: string };

                    /** DeliveryPipeline createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** DeliveryPipeline updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** DeliveryPipeline serialPipeline. */
                    public serialPipeline?: (google.cloud.deploy.v1.ISerialPipeline|null);

                    /** DeliveryPipeline condition. */
                    public condition?: (google.cloud.deploy.v1.IPipelineCondition|null);

                    /** DeliveryPipeline etag. */
                    public etag: string;

                    /** DeliveryPipeline pipeline. */
                    public pipeline?: "serialPipeline";

                    /**
                     * Creates a new DeliveryPipeline instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeliveryPipeline instance
                     */
                    public static create(properties?: google.cloud.deploy.v1.IDeliveryPipeline): google.cloud.deploy.v1.DeliveryPipeline;

                    /**
                     * Encodes the specified DeliveryPipeline message. Does not implicitly {@link google.cloud.deploy.v1.DeliveryPipeline.verify|verify} messages.
                     * @param message DeliveryPipeline message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.deploy.v1.IDeliveryPipeline, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeliveryPipeline message, length delimited. Does not implicitly {@link google.cloud.deploy.v1.DeliveryPipeline.verify|verify} messages.
                     * @param message DeliveryPipeline message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.deploy.v1.IDeliveryPipeline, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeliveryPipeline message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeliveryPipeline
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.deploy.v1.DeliveryPipeline;

                    /**
                     * Decodes a DeliveryPipeline message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeliveryPipeline
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.deploy.v1.DeliveryPipeline;

                    /**
                     * Verifies a DeliveryPipeline message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeliveryPipeline message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeliveryPipeline
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.deploy.v1.DeliveryPipeline;

                    /**
                     * Creates a plain object from a DeliveryPipeline message. Also converts values to other types if specified.
                     * @param message DeliveryPipeline
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.deploy.v1.DeliveryPipeline, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeliveryPipeline to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a SerialPipeline. */
                interface ISerialPipeline {

                    /** SerialPipeline stages */
                    stages?: (google.cloud.deploy.v1.IStage[]|null);
                }

                /** Represents a SerialPipeline. */
                class SerialPipeline implements ISerialPipeline {

                    /**
                     * Constructs a new SerialPipeline.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.deploy.v1.ISerialPipeline);

                    /** SerialPipeline stages. */
                    public stages: google.cloud.deploy.v1.IStage[];

                    /**
                     * Creates a new SerialPipeline instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SerialPipeline instance
                     */
                    public static create(properties?: google.cloud.deploy.v1.ISerialPipeline): google.cloud.deploy.v1.SerialPipeline;

                    /**
                     * Encodes the specified SerialPipeline message. Does not implicitly {@link google.cloud.deploy.v1.SerialPipeline.verify|verify} messages.
                     * @param message SerialPipeline message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.deploy.v1.ISerialPipeline, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SerialPipeline message, length delimited. Does not implicitly {@link google.cloud.deploy.v1.SerialPipeline.verify|verify} messages.
                     * @param message SerialPipeline message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.deploy.v1.ISerialPipeline, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SerialPipeline message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SerialPipeline
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.deploy.v1.SerialPipeline;

                    /**
                     * Decodes a SerialPipeline message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SerialPipeline
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.deploy.v1.SerialPipeline;

                    /**
                     * Verifies a SerialPipeline message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SerialPipeline message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SerialPipeline
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.deploy.v1.SerialPipeline;

                    /**
                     * Creates a plain object from a SerialPipeline message. Also converts values to other types if specified.
                     * @param message SerialPipeline
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.deploy.v1.SerialPipeline, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SerialPipeline to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a Stage. */
                interface IStage {

                    /** Stage targetId */
                    targetId?: (string|null);

                    /** Stage profiles */
                    profiles?: (string[]|null);
                }

                /** Represents a Stage. */
                class Stage implements IStage {

                    /**
                     * Constructs a new Stage.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.deploy.v1.IStage);

                    /** Stage targetId. */
                    public targetId: string;

                    /** Stage profiles. */
                    public profiles: string[];

                    /**
                     * Creates a new Stage instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Stage instance
                     */
                    public static create(properties?: google.cloud.deploy.v1.IStage): google.cloud.deploy.v1.Stage;

                    /**
                     * Encodes the specified Stage message. Does not implicitly {@link google.cloud.deploy.v1.Stage.verify|verify} messages.
                     * @param message Stage message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.deploy.v1.IStage, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Stage message, length delimited. Does not implicitly {@link google.cloud.deploy.v1.Stage.verify|verify} messages.
                     * @param message Stage message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.deploy.v1.IStage, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Stage message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Stage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.deploy.v1.Stage;

                    /**
                     * Decodes a Stage message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Stage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.deploy.v1.Stage;

                    /**
                     * Verifies a Stage message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Stage message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Stage
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.deploy.v1.Stage;

                    /**
                     * Creates a plain object from a Stage message. Also converts values to other types if specified.
                     * @param message Stage
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.deploy.v1.Stage, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Stage to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a PipelineReadyCondition. */
                interface IPipelineReadyCondition {

                    /** PipelineReadyCondition status */
                    status?: (boolean|null);

                    /** PipelineReadyCondition updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);
                }

                /** Represents a PipelineReadyCondition. */
                class PipelineReadyCondition implements IPipelineReadyCondition {

                    /**
                     * Constructs a new PipelineReadyCondition.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.deploy.v1.IPipelineReadyCondition);

                    /** PipelineReadyCondition status. */
                    public status: boolean;

                    /** PipelineReadyCondition updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /**
                     * Creates a new PipelineReadyCondition instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PipelineReadyCondition instance
                     */
                    public static create(properties?: google.cloud.deploy.v1.IPipelineReadyCondition): google.cloud.deploy.v1.PipelineReadyCondition;

                    /**
                     * Encodes the specified PipelineReadyCondition message. Does not implicitly {@link google.cloud.deploy.v1.PipelineReadyCondition.verify|verify} messages.
                     * @param message PipelineReadyCondition message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.deploy.v1.IPipelineReadyCondition, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PipelineReadyCondition message, length delimited. Does not implicitly {@link google.cloud.deploy.v1.PipelineReadyCondition.verify|verify} messages.
                     * @param message PipelineReadyCondition message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.deploy.v1.IPipelineReadyCondition, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PipelineReadyCondition message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PipelineReadyCondition
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.deploy.v1.PipelineReadyCondition;

                    /**
                     * Decodes a PipelineReadyCondition message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PipelineReadyCondition
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.deploy.v1.PipelineReadyCondition;

                    /**
                     * Verifies a PipelineReadyCondition message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PipelineReadyCondition message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PipelineReadyCondition
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.deploy.v1.PipelineReadyCondition;

                    /**
                     * Creates a plain object from a PipelineReadyCondition message. Also converts values to other types if specified.
                     * @param message PipelineReadyCondition
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.deploy.v1.PipelineReadyCondition, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PipelineReadyCondition to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a TargetsPresentCondition. */
                interface ITargetsPresentCondition {

                    /** TargetsPresentCondition status */
                    status?: (boolean|null);

                    /** TargetsPresentCondition missingTargets */
                    missingTargets?: (string[]|null);

                    /** TargetsPresentCondition updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);
                }

                /** Represents a TargetsPresentCondition. */
                class TargetsPresentCondition implements ITargetsPresentCondition {

                    /**
                     * Constructs a new TargetsPresentCondition.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.deploy.v1.ITargetsPresentCondition);

                    /** TargetsPresentCondition status. */
                    public status: boolean;

                    /** TargetsPresentCondition missingTargets. */
                    public missingTargets: string[];

                    /** TargetsPresentCondition updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /**
                     * Creates a new TargetsPresentCondition instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TargetsPresentCondition instance
                     */
                    public static create(properties?: google.cloud.deploy.v1.ITargetsPresentCondition): google.cloud.deploy.v1.TargetsPresentCondition;

                    /**
                     * Encodes the specified TargetsPresentCondition message. Does not implicitly {@link google.cloud.deploy.v1.TargetsPresentCondition.verify|verify} messages.
                     * @param message TargetsPresentCondition message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.deploy.v1.ITargetsPresentCondition, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TargetsPresentCondition message, length delimited. Does not implicitly {@link google.cloud.deploy.v1.TargetsPresentCondition.verify|verify} messages.
                     * @param message TargetsPresentCondition message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.deploy.v1.ITargetsPresentCondition, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TargetsPresentCondition message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TargetsPresentCondition
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.deploy.v1.TargetsPresentCondition;

                    /**
                     * Decodes a TargetsPresentCondition message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TargetsPresentCondition
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.deploy.v1.TargetsPresentCondition;

                    /**
                     * Verifies a TargetsPresentCondition message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TargetsPresentCondition message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TargetsPresentCondition
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.deploy.v1.TargetsPresentCondition;

                    /**
                     * Creates a plain object from a TargetsPresentCondition message. Also converts values to other types if specified.
                     * @param message TargetsPresentCondition
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.deploy.v1.TargetsPresentCondition, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TargetsPresentCondition to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a PipelineCondition. */
                interface IPipelineCondition {

                    /** PipelineCondition pipelineReadyCondition */
                    pipelineReadyCondition?: (google.cloud.deploy.v1.IPipelineReadyCondition|null);

                    /** PipelineCondition targetsPresentCondition */
                    targetsPresentCondition?: (google.cloud.deploy.v1.ITargetsPresentCondition|null);
                }

                /** Represents a PipelineCondition. */
                class PipelineCondition implements IPipelineCondition {

                    /**
                     * Constructs a new PipelineCondition.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.deploy.v1.IPipelineCondition);

                    /** PipelineCondition pipelineReadyCondition. */
                    public pipelineReadyCondition?: (google.cloud.deploy.v1.IPipelineReadyCondition|null);

                    /** PipelineCondition targetsPresentCondition. */
                    public targetsPresentCondition?: (google.cloud.deploy.v1.ITargetsPresentCondition|null);

                    /**
                     * Creates a new PipelineCondition instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PipelineCondition instance
                     */
                    public static create(properties?: google.cloud.deploy.v1.IPipelineCondition): google.cloud.deploy.v1.PipelineCondition;

                    /**
                     * Encodes the specified PipelineCondition message. Does not implicitly {@link google.cloud.deploy.v1.PipelineCondition.verify|verify} messages.
                     * @param message PipelineCondition message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.deploy.v1.IPipelineCondition, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PipelineCondition message, length delimited. Does not implicitly {@link google.cloud.deploy.v1.PipelineCondition.verify|verify} messages.
                     * @param message PipelineCondition message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.deploy.v1.IPipelineCondition, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PipelineCondition message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PipelineCondition
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.deploy.v1.PipelineCondition;

                    /**
                     * Decodes a PipelineCondition message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PipelineCondition
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.deploy.v1.PipelineCondition;

                    /**
                     * Verifies a PipelineCondition message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PipelineCondition message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PipelineCondition
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.deploy.v1.PipelineCondition;

                    /**
                     * Creates a plain object from a PipelineCondition message. Also converts values to other types if specified.
                     * @param message PipelineCondition
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.deploy.v1.PipelineCondition, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PipelineCondition to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListDeliveryPipelinesRequest. */
                interface IListDeliveryPipelinesRequest {

                    /** ListDeliveryPipelinesRequest parent */
                    parent?: (string|null);

                    /** ListDeliveryPipelinesRequest pageSize */
                    pageSize?: (number|null);

                    /** ListDeliveryPipelinesRequest pageToken */
                    pageToken?: (string|null);

                    /** ListDeliveryPipelinesRequest filter */
                    filter?: (string|null);

                    /** ListDeliveryPipelinesRequest orderBy */
                    orderBy?: (string|null);
                }

                /** Represents a ListDeliveryPipelinesRequest. */
                class ListDeliveryPipelinesRequest implements IListDeliveryPipelinesRequest {

                    /**
                     * Constructs a new ListDeliveryPipelinesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.deploy.v1.IListDeliveryPipelinesRequest);

                    /** ListDeliveryPipelinesRequest parent. */
                    public parent: string;

                    /** ListDeliveryPipelinesRequest pageSize. */
                    public pageSize: number;

                    /** ListDeliveryPipelinesRequest pageToken. */
                    public pageToken: string;

                    /** ListDeliveryPipelinesRequest filter. */
                    public filter: string;

                    /** ListDeliveryPipelinesRequest orderBy. */
                    public orderBy: string;

                    /**
                     * Creates a new ListDeliveryPipelinesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListDeliveryPipelinesRequest instance
                     */
                    public static create(properties?: google.cloud.deploy.v1.IListDeliveryPipelinesRequest): google.cloud.deploy.v1.ListDeliveryPipelinesRequest;

                    /**
                     * Encodes the specified ListDeliveryPipelinesRequest message. Does not implicitly {@link google.cloud.deploy.v1.ListDeliveryPipelinesRequest.verify|verify} messages.
                     * @param message ListDeliveryPipelinesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.deploy.v1.IListDeliveryPipelinesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListDeliveryPipelinesRequest message, length delimited. Does not implicitly {@link google.cloud.deploy.v1.ListDeliveryPipelinesRequest.verify|verify} messages.
                     * @param message ListDeliveryPipelinesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.deploy.v1.IListDeliveryPipelinesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListDeliveryPipelinesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListDeliveryPipelinesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.deploy.v1.ListDeliveryPipelinesRequest;

                    /**
                     * Decodes a ListDeliveryPipelinesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListDeliveryPipelinesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.deploy.v1.ListDeliveryPipelinesRequest;

                    /**
                     * Verifies a ListDeliveryPipelinesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListDeliveryPipelinesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListDeliveryPipelinesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.deploy.v1.ListDeliveryPipelinesRequest;

                    /**
                     * Creates a plain object from a ListDeliveryPipelinesRequest message. Also converts values to other types if specified.
                     * @param message ListDeliveryPipelinesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.deploy.v1.ListDeliveryPipelinesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListDeliveryPipelinesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListDeliveryPipelinesResponse. */
                interface IListDeliveryPipelinesResponse {

                    /** ListDeliveryPipelinesResponse deliveryPipelines */
                    deliveryPipelines?: (google.cloud.deploy.v1.IDeliveryPipeline[]|null);

                    /** ListDeliveryPipelinesResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListDeliveryPipelinesResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a ListDeliveryPipelinesResponse. */
                class ListDeliveryPipelinesResponse implements IListDeliveryPipelinesResponse {

                    /**
                     * Constructs a new ListDeliveryPipelinesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.deploy.v1.IListDeliveryPipelinesResponse);

                    /** ListDeliveryPipelinesResponse deliveryPipelines. */
                    public deliveryPipelines: google.cloud.deploy.v1.IDeliveryPipeline[];

                    /** ListDeliveryPipelinesResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListDeliveryPipelinesResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListDeliveryPipelinesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListDeliveryPipelinesResponse instance
                     */
                    public static create(properties?: google.cloud.deploy.v1.IListDeliveryPipelinesResponse): google.cloud.deploy.v1.ListDeliveryPipelinesResponse;

                    /**
                     * Encodes the specified ListDeliveryPipelinesResponse message. Does not implicitly {@link google.cloud.deploy.v1.ListDeliveryPipelinesResponse.verify|verify} messages.
                     * @param message ListDeliveryPipelinesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.deploy.v1.IListDeliveryPipelinesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListDeliveryPipelinesResponse message, length delimited. Does not implicitly {@link google.cloud.deploy.v1.ListDeliveryPipelinesResponse.verify|verify} messages.
                     * @param message ListDeliveryPipelinesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.deploy.v1.IListDeliveryPipelinesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListDeliveryPipelinesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListDeliveryPipelinesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.deploy.v1.ListDeliveryPipelinesResponse;

                    /**
                     * Decodes a ListDeliveryPipelinesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListDeliveryPipelinesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.deploy.v1.ListDeliveryPipelinesResponse;

                    /**
                     * Verifies a ListDeliveryPipelinesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListDeliveryPipelinesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListDeliveryPipelinesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.deploy.v1.ListDeliveryPipelinesResponse;

                    /**
                     * Creates a plain object from a ListDeliveryPipelinesResponse message. Also converts values to other types if specified.
                     * @param message ListDeliveryPipelinesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.deploy.v1.ListDeliveryPipelinesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListDeliveryPipelinesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetDeliveryPipelineRequest. */
                interface IGetDeliveryPipelineRequest {

                    /** GetDeliveryPipelineRequest name */
                    name?: (string|null);
                }

                /** Represents a GetDeliveryPipelineRequest. */
                class GetDeliveryPipelineRequest implements IGetDeliveryPipelineRequest {

                    /**
                     * Constructs a new GetDeliveryPipelineRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.deploy.v1.IGetDeliveryPipelineRequest);

                    /** GetDeliveryPipelineRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetDeliveryPipelineRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetDeliveryPipelineRequest instance
                     */
                    public static create(properties?: google.cloud.deploy.v1.IGetDeliveryPipelineRequest): google.cloud.deploy.v1.GetDeliveryPipelineRequest;

                    /**
                     * Encodes the specified GetDeliveryPipelineRequest message. Does not implicitly {@link google.cloud.deploy.v1.GetDeliveryPipelineRequest.verify|verify} messages.
                     * @param message GetDeliveryPipelineRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.deploy.v1.IGetDeliveryPipelineRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetDeliveryPipelineRequest message, length delimited. Does not implicitly {@link google.cloud.deploy.v1.GetDeliveryPipelineRequest.verify|verify} messages.
                     * @param message GetDeliveryPipelineRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.deploy.v1.IGetDeliveryPipelineRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetDeliveryPipelineRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetDeliveryPipelineRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.deploy.v1.GetDeliveryPipelineRequest;

                    /**
                     * Decodes a GetDeliveryPipelineRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetDeliveryPipelineRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.deploy.v1.GetDeliveryPipelineRequest;

                    /**
                     * Verifies a GetDeliveryPipelineRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetDeliveryPipelineRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetDeliveryPipelineRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.deploy.v1.GetDeliveryPipelineRequest;

                    /**
                     * Creates a plain object from a GetDeliveryPipelineRequest message. Also converts values to other types if specified.
                     * @param message GetDeliveryPipelineRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.deploy.v1.GetDeliveryPipelineRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetDeliveryPipelineRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a CreateDeliveryPipelineRequest. */
                interface ICreateDeliveryPipelineRequest {

                    /** CreateDeliveryPipelineRequest parent */
                    parent?: (string|null);

                    /** CreateDeliveryPipelineRequest deliveryPipelineId */
                    deliveryPipelineId?: (string|null);

                    /** CreateDeliveryPipelineRequest deliveryPipeline */
                    deliveryPipeline?: (google.cloud.deploy.v1.IDeliveryPipeline|null);

                    /** CreateDeliveryPipelineRequest requestId */
                    requestId?: (string|null);

                    /** CreateDeliveryPipelineRequest validateOnly */
                    validateOnly?: (boolean|null);
                }

                /** Represents a CreateDeliveryPipelineRequest. */
                class CreateDeliveryPipelineRequest implements ICreateDeliveryPipelineRequest {

                    /**
                     * Constructs a new CreateDeliveryPipelineRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.deploy.v1.ICreateDeliveryPipelineRequest);

                    /** CreateDeliveryPipelineRequest parent. */
                    public parent: string;

                    /** CreateDeliveryPipelineRequest deliveryPipelineId. */
                    public deliveryPipelineId: string;

                    /** CreateDeliveryPipelineRequest deliveryPipeline. */
                    public deliveryPipeline?: (google.cloud.deploy.v1.IDeliveryPipeline|null);

                    /** CreateDeliveryPipelineRequest requestId. */
                    public requestId: string;

                    /** CreateDeliveryPipelineRequest validateOnly. */
                    public validateOnly: boolean;

                    /**
                     * Creates a new CreateDeliveryPipelineRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateDeliveryPipelineRequest instance
                     */
                    public static create(properties?: google.cloud.deploy.v1.ICreateDeliveryPipelineRequest): google.cloud.deploy.v1.CreateDeliveryPipelineRequest;

                    /**
                     * Encodes the specified CreateDeliveryPipelineRequest message. Does not implicitly {@link google.cloud.deploy.v1.CreateDeliveryPipelineRequest.verify|verify} messages.
                     * @param message CreateDeliveryPipelineRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.deploy.v1.ICreateDeliveryPipelineRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateDeliveryPipelineRequest message, length delimited. Does not implicitly {@link google.cloud.deploy.v1.CreateDeliveryPipelineRequest.verify|verify} messages.
                     * @param message CreateDeliveryPipelineRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.deploy.v1.ICreateDeliveryPipelineRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateDeliveryPipelineRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateDeliveryPipelineRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.deploy.v1.CreateDeliveryPipelineRequest;

                    /**
                     * Decodes a CreateDeliveryPipelineRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateDeliveryPipelineRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.deploy.v1.CreateDeliveryPipelineRequest;

                    /**
                     * Verifies a CreateDeliveryPipelineRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateDeliveryPipelineRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateDeliveryPipelineRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.deploy.v1.CreateDeliveryPipelineRequest;

                    /**
                     * Creates a plain object from a CreateDeliveryPipelineRequest message. Also converts values to other types if specified.
                     * @param message CreateDeliveryPipelineRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.deploy.v1.CreateDeliveryPipelineRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateDeliveryPipelineRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an UpdateDeliveryPipelineRequest. */
                interface IUpdateDeliveryPipelineRequest {

                    /** UpdateDeliveryPipelineRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateDeliveryPipelineRequest deliveryPipeline */
                    deliveryPipeline?: (google.cloud.deploy.v1.IDeliveryPipeline|null);

                    /** UpdateDeliveryPipelineRequest requestId */
                    requestId?: (string|null);

                    /** UpdateDeliveryPipelineRequest allowMissing */
                    allowMissing?: (boolean|null);

                    /** UpdateDeliveryPipelineRequest validateOnly */
                    validateOnly?: (boolean|null);
                }

                /** Represents an UpdateDeliveryPipelineRequest. */
                class UpdateDeliveryPipelineRequest implements IUpdateDeliveryPipelineRequest {

                    /**
                     * Constructs a new UpdateDeliveryPipelineRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.deploy.v1.IUpdateDeliveryPipelineRequest);

                    /** UpdateDeliveryPipelineRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateDeliveryPipelineRequest deliveryPipeline. */
                    public deliveryPipeline?: (google.cloud.deploy.v1.IDeliveryPipeline|null);

                    /** UpdateDeliveryPipelineRequest requestId. */
                    public requestId: string;

                    /** UpdateDeliveryPipelineRequest allowMissing. */
                    public allowMissing: boolean;

                    /** UpdateDeliveryPipelineRequest validateOnly. */
                    public validateOnly: boolean;

                    /**
                     * Creates a new UpdateDeliveryPipelineRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateDeliveryPipelineRequest instance
                     */
                    public static create(properties?: google.cloud.deploy.v1.IUpdateDeliveryPipelineRequest): google.cloud.deploy.v1.UpdateDeliveryPipelineRequest;

                    /**
                     * Encodes the specified UpdateDeliveryPipelineRequest message. Does not implicitly {@link google.cloud.deploy.v1.UpdateDeliveryPipelineRequest.verify|verify} messages.
                     * @param message UpdateDeliveryPipelineRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.deploy.v1.IUpdateDeliveryPipelineRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateDeliveryPipelineRequest message, length delimited. Does not implicitly {@link google.cloud.deploy.v1.UpdateDeliveryPipelineRequest.verify|verify} messages.
                     * @param message UpdateDeliveryPipelineRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.deploy.v1.IUpdateDeliveryPipelineRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateDeliveryPipelineRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateDeliveryPipelineRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.deploy.v1.UpdateDeliveryPipelineRequest;

                    /**
                     * Decodes an UpdateDeliveryPipelineRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateDeliveryPipelineRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.deploy.v1.UpdateDeliveryPipelineRequest;

                    /**
                     * Verifies an UpdateDeliveryPipelineRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateDeliveryPipelineRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateDeliveryPipelineRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.deploy.v1.UpdateDeliveryPipelineRequest;

                    /**
                     * Creates a plain object from an UpdateDeliveryPipelineRequest message. Also converts values to other types if specified.
                     * @param message UpdateDeliveryPipelineRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.deploy.v1.UpdateDeliveryPipelineRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateDeliveryPipelineRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DeleteDeliveryPipelineRequest. */
                interface IDeleteDeliveryPipelineRequest {

                    /** DeleteDeliveryPipelineRequest name */
                    name?: (string|null);

                    /** DeleteDeliveryPipelineRequest requestId */
                    requestId?: (string|null);

                    /** DeleteDeliveryPipelineRequest allowMissing */
                    allowMissing?: (boolean|null);

                    /** DeleteDeliveryPipelineRequest validateOnly */
                    validateOnly?: (boolean|null);

                    /** DeleteDeliveryPipelineRequest force */
                    force?: (boolean|null);

                    /** DeleteDeliveryPipelineRequest etag */
                    etag?: (string|null);
                }

                /** Represents a DeleteDeliveryPipelineRequest. */
                class DeleteDeliveryPipelineRequest implements IDeleteDeliveryPipelineRequest {

                    /**
                     * Constructs a new DeleteDeliveryPipelineRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.deploy.v1.IDeleteDeliveryPipelineRequest);

                    /** DeleteDeliveryPipelineRequest name. */
                    public name: string;

                    /** DeleteDeliveryPipelineRequest requestId. */
                    public requestId: string;

                    /** DeleteDeliveryPipelineRequest allowMissing. */
                    public allowMissing: boolean;

                    /** DeleteDeliveryPipelineRequest validateOnly. */
                    public validateOnly: boolean;

                    /** DeleteDeliveryPipelineRequest force. */
                    public force: boolean;

                    /** DeleteDeliveryPipelineRequest etag. */
                    public etag: string;

                    /**
                     * Creates a new DeleteDeliveryPipelineRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteDeliveryPipelineRequest instance
                     */
                    public static create(properties?: google.cloud.deploy.v1.IDeleteDeliveryPipelineRequest): google.cloud.deploy.v1.DeleteDeliveryPipelineRequest;

                    /**
                     * Encodes the specified DeleteDeliveryPipelineRequest message. Does not implicitly {@link google.cloud.deploy.v1.DeleteDeliveryPipelineRequest.verify|verify} messages.
                     * @param message DeleteDeliveryPipelineRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.deploy.v1.IDeleteDeliveryPipelineRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteDeliveryPipelineRequest message, length delimited. Does not implicitly {@link google.cloud.deploy.v1.DeleteDeliveryPipelineRequest.verify|verify} messages.
                     * @param message DeleteDeliveryPipelineRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.deploy.v1.IDeleteDeliveryPipelineRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteDeliveryPipelineRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteDeliveryPipelineRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.deploy.v1.DeleteDeliveryPipelineRequest;

                    /**
                     * Decodes a DeleteDeliveryPipelineRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteDeliveryPipelineRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.deploy.v1.DeleteDeliveryPipelineRequest;

                    /**
                     * Verifies a DeleteDeliveryPipelineRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteDeliveryPipelineRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteDeliveryPipelineRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.deploy.v1.DeleteDeliveryPipelineRequest;

                    /**
                     * Creates a plain object from a DeleteDeliveryPipelineRequest message. Also converts values to other types if specified.
                     * @param message DeleteDeliveryPipelineRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.deploy.v1.DeleteDeliveryPipelineRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteDeliveryPipelineRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a Target. */
                interface ITarget {

                    /** Target name */
                    name?: (string|null);

                    /** Target targetId */
                    targetId?: (string|null);

                    /** Target uid */
                    uid?: (string|null);

                    /** Target description */
                    description?: (string|null);

                    /** Target annotations */
                    annotations?: ({ [k: string]: string }|null);

                    /** Target labels */
                    labels?: ({ [k: string]: string }|null);

                    /** Target requireApproval */
                    requireApproval?: (boolean|null);

                    /** Target createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** Target updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** Target gke */
                    gke?: (google.cloud.deploy.v1.IGkeCluster|null);

                    /** Target etag */
                    etag?: (string|null);

                    /** Target executionConfigs */
                    executionConfigs?: (google.cloud.deploy.v1.IExecutionConfig[]|null);
                }

                /** Represents a Target. */
                class Target implements ITarget {

                    /**
                     * Constructs a new Target.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.deploy.v1.ITarget);

                    /** Target name. */
                    public name: string;

                    /** Target targetId. */
                    public targetId: string;

                    /** Target uid. */
                    public uid: string;

                    /** Target description. */
                    public description: string;

                    /** Target annotations. */
                    public annotations: { [k: string]: string };

                    /** Target labels. */
                    public labels: { [k: string]: string };

                    /** Target requireApproval. */
                    public requireApproval: boolean;

                    /** Target createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** Target updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** Target gke. */
                    public gke?: (google.cloud.deploy.v1.IGkeCluster|null);

                    /** Target etag. */
                    public etag: string;

                    /** Target executionConfigs. */
                    public executionConfigs: google.cloud.deploy.v1.IExecutionConfig[];

                    /** Target deploymentTarget. */
                    public deploymentTarget?: "gke";

                    /**
                     * Creates a new Target instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Target instance
                     */
                    public static create(properties?: google.cloud.deploy.v1.ITarget): google.cloud.deploy.v1.Target;

                    /**
                     * Encodes the specified Target message. Does not implicitly {@link google.cloud.deploy.v1.Target.verify|verify} messages.
                     * @param message Target message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.deploy.v1.ITarget, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Target message, length delimited. Does not implicitly {@link google.cloud.deploy.v1.Target.verify|verify} messages.
                     * @param message Target message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.deploy.v1.ITarget, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Target message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Target
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.deploy.v1.Target;

                    /**
                     * Decodes a Target message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Target
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.deploy.v1.Target;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.deploy.v1.Target;

                    /**
                     * Creates a plain object from a Target message. Also converts values to other types if specified.
                     * @param message Target
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.deploy.v1.Target, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Target to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an ExecutionConfig. */
                interface IExecutionConfig {

                    /** ExecutionConfig usages */
                    usages?: (google.cloud.deploy.v1.ExecutionConfig.ExecutionEnvironmentUsage[]|null);

                    /** ExecutionConfig defaultPool */
                    defaultPool?: (google.cloud.deploy.v1.IDefaultPool|null);

                    /** ExecutionConfig privatePool */
                    privatePool?: (google.cloud.deploy.v1.IPrivatePool|null);
                }

                /** Represents an ExecutionConfig. */
                class ExecutionConfig implements IExecutionConfig {

                    /**
                     * Constructs a new ExecutionConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.deploy.v1.IExecutionConfig);

                    /** ExecutionConfig usages. */
                    public usages: google.cloud.deploy.v1.ExecutionConfig.ExecutionEnvironmentUsage[];

                    /** ExecutionConfig defaultPool. */
                    public defaultPool?: (google.cloud.deploy.v1.IDefaultPool|null);

                    /** ExecutionConfig privatePool. */
                    public privatePool?: (google.cloud.deploy.v1.IPrivatePool|null);

                    /** ExecutionConfig executionEnvironment. */
                    public executionEnvironment?: ("defaultPool"|"privatePool");

                    /**
                     * Creates a new ExecutionConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ExecutionConfig instance
                     */
                    public static create(properties?: google.cloud.deploy.v1.IExecutionConfig): google.cloud.deploy.v1.ExecutionConfig;

                    /**
                     * Encodes the specified ExecutionConfig message. Does not implicitly {@link google.cloud.deploy.v1.ExecutionConfig.verify|verify} messages.
                     * @param message ExecutionConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.deploy.v1.IExecutionConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ExecutionConfig message, length delimited. Does not implicitly {@link google.cloud.deploy.v1.ExecutionConfig.verify|verify} messages.
                     * @param message ExecutionConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.deploy.v1.IExecutionConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ExecutionConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ExecutionConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.deploy.v1.ExecutionConfig;

                    /**
                     * Decodes an ExecutionConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ExecutionConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.deploy.v1.ExecutionConfig;

                    /**
                     * Verifies an ExecutionConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ExecutionConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ExecutionConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.deploy.v1.ExecutionConfig;

                    /**
                     * Creates a plain object from an ExecutionConfig message. Also converts values to other types if specified.
                     * @param message ExecutionConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.deploy.v1.ExecutionConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ExecutionConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace ExecutionConfig {

                    /** ExecutionEnvironmentUsage enum. */
                    enum ExecutionEnvironmentUsage {
                        EXECUTION_ENVIRONMENT_USAGE_UNSPECIFIED = 0,
                        RENDER = 1,
                        DEPLOY = 2
                    }
                }

                /** Properties of a DefaultPool. */
                interface IDefaultPool {

                    /** DefaultPool serviceAccount */
                    serviceAccount?: (string|null);

                    /** DefaultPool artifactStorage */
                    artifactStorage?: (string|null);
                }

                /** Represents a DefaultPool. */
                class DefaultPool implements IDefaultPool {

                    /**
                     * Constructs a new DefaultPool.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.deploy.v1.IDefaultPool);

                    /** DefaultPool serviceAccount. */
                    public serviceAccount: string;

                    /** DefaultPool artifactStorage. */
                    public artifactStorage: string;

                    /**
                     * Creates a new DefaultPool instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DefaultPool instance
                     */
                    public static create(properties?: google.cloud.deploy.v1.IDefaultPool): google.cloud.deploy.v1.DefaultPool;

                    /**
                     * Encodes the specified DefaultPool message. Does not implicitly {@link google.cloud.deploy.v1.DefaultPool.verify|verify} messages.
                     * @param message DefaultPool message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.deploy.v1.IDefaultPool, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DefaultPool message, length delimited. Does not implicitly {@link google.cloud.deploy.v1.DefaultPool.verify|verify} messages.
                     * @param message DefaultPool message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.deploy.v1.IDefaultPool, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DefaultPool message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DefaultPool
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.deploy.v1.DefaultPool;

                    /**
                     * Decodes a DefaultPool message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DefaultPool
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.deploy.v1.DefaultPool;

                    /**
                     * Verifies a DefaultPool message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DefaultPool message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DefaultPool
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.deploy.v1.DefaultPool;

                    /**
                     * Creates a plain object from a DefaultPool message. Also converts values to other types if specified.
                     * @param message DefaultPool
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.deploy.v1.DefaultPool, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DefaultPool to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a PrivatePool. */
                interface IPrivatePool {

                    /** PrivatePool workerPool */
                    workerPool?: (string|null);

                    /** PrivatePool serviceAccount */
                    serviceAccount?: (string|null);

                    /** PrivatePool artifactStorage */
                    artifactStorage?: (string|null);
                }

                /** Represents a PrivatePool. */
                class PrivatePool implements IPrivatePool {

                    /**
                     * Constructs a new PrivatePool.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.deploy.v1.IPrivatePool);

                    /** PrivatePool workerPool. */
                    public workerPool: string;

                    /** PrivatePool serviceAccount. */
                    public serviceAccount: string;

                    /** PrivatePool artifactStorage. */
                    public artifactStorage: string;

                    /**
                     * Creates a new PrivatePool instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PrivatePool instance
                     */
                    public static create(properties?: google.cloud.deploy.v1.IPrivatePool): google.cloud.deploy.v1.PrivatePool;

                    /**
                     * Encodes the specified PrivatePool message. Does not implicitly {@link google.cloud.deploy.v1.PrivatePool.verify|verify} messages.
                     * @param message PrivatePool message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.deploy.v1.IPrivatePool, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PrivatePool message, length delimited. Does not implicitly {@link google.cloud.deploy.v1.PrivatePool.verify|verify} messages.
                     * @param message PrivatePool message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.deploy.v1.IPrivatePool, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PrivatePool message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PrivatePool
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.deploy.v1.PrivatePool;

                    /**
                     * Decodes a PrivatePool message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PrivatePool
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.deploy.v1.PrivatePool;

                    /**
                     * Verifies a PrivatePool message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PrivatePool message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PrivatePool
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.deploy.v1.PrivatePool;

                    /**
                     * Creates a plain object from a PrivatePool message. Also converts values to other types if specified.
                     * @param message PrivatePool
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.deploy.v1.PrivatePool, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PrivatePool to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GkeCluster. */
                interface IGkeCluster {

                    /** GkeCluster cluster */
                    cluster?: (string|null);
                }

                /** Represents a GkeCluster. */
                class GkeCluster implements IGkeCluster {

                    /**
                     * Constructs a new GkeCluster.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.deploy.v1.IGkeCluster);

                    /** GkeCluster cluster. */
                    public cluster: string;

                    /**
                     * Creates a new GkeCluster instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GkeCluster instance
                     */
                    public static create(properties?: google.cloud.deploy.v1.IGkeCluster): google.cloud.deploy.v1.GkeCluster;

                    /**
                     * Encodes the specified GkeCluster message. Does not implicitly {@link google.cloud.deploy.v1.GkeCluster.verify|verify} messages.
                     * @param message GkeCluster message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.deploy.v1.IGkeCluster, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GkeCluster message, length delimited. Does not implicitly {@link google.cloud.deploy.v1.GkeCluster.verify|verify} messages.
                     * @param message GkeCluster message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.deploy.v1.IGkeCluster, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GkeCluster message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GkeCluster
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.deploy.v1.GkeCluster;

                    /**
                     * Decodes a GkeCluster message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GkeCluster
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.deploy.v1.GkeCluster;

                    /**
                     * Verifies a GkeCluster message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GkeCluster message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GkeCluster
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.deploy.v1.GkeCluster;

                    /**
                     * Creates a plain object from a GkeCluster message. Also converts values to other types if specified.
                     * @param message GkeCluster
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.deploy.v1.GkeCluster, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GkeCluster to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListTargetsRequest. */
                interface IListTargetsRequest {

                    /** ListTargetsRequest parent */
                    parent?: (string|null);

                    /** ListTargetsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListTargetsRequest pageToken */
                    pageToken?: (string|null);

                    /** ListTargetsRequest filter */
                    filter?: (string|null);

                    /** ListTargetsRequest orderBy */
                    orderBy?: (string|null);
                }

                /** Represents a ListTargetsRequest. */
                class ListTargetsRequest implements IListTargetsRequest {

                    /**
                     * Constructs a new ListTargetsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.deploy.v1.IListTargetsRequest);

                    /** ListTargetsRequest parent. */
                    public parent: string;

                    /** ListTargetsRequest pageSize. */
                    public pageSize: number;

                    /** ListTargetsRequest pageToken. */
                    public pageToken: string;

                    /** ListTargetsRequest filter. */
                    public filter: string;

                    /** ListTargetsRequest orderBy. */
                    public orderBy: string;

                    /**
                     * Creates a new ListTargetsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListTargetsRequest instance
                     */
                    public static create(properties?: google.cloud.deploy.v1.IListTargetsRequest): google.cloud.deploy.v1.ListTargetsRequest;

                    /**
                     * Encodes the specified ListTargetsRequest message. Does not implicitly {@link google.cloud.deploy.v1.ListTargetsRequest.verify|verify} messages.
                     * @param message ListTargetsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.deploy.v1.IListTargetsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListTargetsRequest message, length delimited. Does not implicitly {@link google.cloud.deploy.v1.ListTargetsRequest.verify|verify} messages.
                     * @param message ListTargetsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.deploy.v1.IListTargetsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListTargetsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListTargetsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.deploy.v1.ListTargetsRequest;

                    /**
                     * Decodes a ListTargetsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListTargetsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.deploy.v1.ListTargetsRequest;

                    /**
                     * Verifies a ListTargetsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListTargetsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListTargetsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.deploy.v1.ListTargetsRequest;

                    /**
                     * Creates a plain object from a ListTargetsRequest message. Also converts values to other types if specified.
                     * @param message ListTargetsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.deploy.v1.ListTargetsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListTargetsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListTargetsResponse. */
                interface IListTargetsResponse {

                    /** ListTargetsResponse targets */
                    targets?: (google.cloud.deploy.v1.ITarget[]|null);

                    /** ListTargetsResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListTargetsResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a ListTargetsResponse. */
                class ListTargetsResponse implements IListTargetsResponse {

                    /**
                     * Constructs a new ListTargetsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.deploy.v1.IListTargetsResponse);

                    /** ListTargetsResponse targets. */
                    public targets: google.cloud.deploy.v1.ITarget[];

                    /** ListTargetsResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListTargetsResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListTargetsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListTargetsResponse instance
                     */
                    public static create(properties?: google.cloud.deploy.v1.IListTargetsResponse): google.cloud.deploy.v1.ListTargetsResponse;

                    /**
                     * Encodes the specified ListTargetsResponse message. Does not implicitly {@link google.cloud.deploy.v1.ListTargetsResponse.verify|verify} messages.
                     * @param message ListTargetsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.deploy.v1.IListTargetsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListTargetsResponse message, length delimited. Does not implicitly {@link google.cloud.deploy.v1.ListTargetsResponse.verify|verify} messages.
                     * @param message ListTargetsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.deploy.v1.IListTargetsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListTargetsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListTargetsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.deploy.v1.ListTargetsResponse;

                    /**
                     * Decodes a ListTargetsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListTargetsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.deploy.v1.ListTargetsResponse;

                    /**
                     * Verifies a ListTargetsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListTargetsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListTargetsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.deploy.v1.ListTargetsResponse;

                    /**
                     * Creates a plain object from a ListTargetsResponse message. Also converts values to other types if specified.
                     * @param message ListTargetsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.deploy.v1.ListTargetsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListTargetsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetTargetRequest. */
                interface IGetTargetRequest {

                    /** GetTargetRequest name */
                    name?: (string|null);
                }

                /** Represents a GetTargetRequest. */
                class GetTargetRequest implements IGetTargetRequest {

                    /**
                     * Constructs a new GetTargetRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.deploy.v1.IGetTargetRequest);

                    /** GetTargetRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetTargetRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetTargetRequest instance
                     */
                    public static create(properties?: google.cloud.deploy.v1.IGetTargetRequest): google.cloud.deploy.v1.GetTargetRequest;

                    /**
                     * Encodes the specified GetTargetRequest message. Does not implicitly {@link google.cloud.deploy.v1.GetTargetRequest.verify|verify} messages.
                     * @param message GetTargetRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.deploy.v1.IGetTargetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetTargetRequest message, length delimited. Does not implicitly {@link google.cloud.deploy.v1.GetTargetRequest.verify|verify} messages.
                     * @param message GetTargetRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.deploy.v1.IGetTargetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetTargetRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetTargetRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.deploy.v1.GetTargetRequest;

                    /**
                     * Decodes a GetTargetRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetTargetRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.deploy.v1.GetTargetRequest;

                    /**
                     * Verifies a GetTargetRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetTargetRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetTargetRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.deploy.v1.GetTargetRequest;

                    /**
                     * Creates a plain object from a GetTargetRequest message. Also converts values to other types if specified.
                     * @param message GetTargetRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.deploy.v1.GetTargetRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetTargetRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a CreateTargetRequest. */
                interface ICreateTargetRequest {

                    /** CreateTargetRequest parent */
                    parent?: (string|null);

                    /** CreateTargetRequest targetId */
                    targetId?: (string|null);

                    /** CreateTargetRequest target */
                    target?: (google.cloud.deploy.v1.ITarget|null);

                    /** CreateTargetRequest requestId */
                    requestId?: (string|null);

                    /** CreateTargetRequest validateOnly */
                    validateOnly?: (boolean|null);
                }

                /** Represents a CreateTargetRequest. */
                class CreateTargetRequest implements ICreateTargetRequest {

                    /**
                     * Constructs a new CreateTargetRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.deploy.v1.ICreateTargetRequest);

                    /** CreateTargetRequest parent. */
                    public parent: string;

                    /** CreateTargetRequest targetId. */
                    public targetId: string;

                    /** CreateTargetRequest target. */
                    public target?: (google.cloud.deploy.v1.ITarget|null);

                    /** CreateTargetRequest requestId. */
                    public requestId: string;

                    /** CreateTargetRequest validateOnly. */
                    public validateOnly: boolean;

                    /**
                     * Creates a new CreateTargetRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateTargetRequest instance
                     */
                    public static create(properties?: google.cloud.deploy.v1.ICreateTargetRequest): google.cloud.deploy.v1.CreateTargetRequest;

                    /**
                     * Encodes the specified CreateTargetRequest message. Does not implicitly {@link google.cloud.deploy.v1.CreateTargetRequest.verify|verify} messages.
                     * @param message CreateTargetRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.deploy.v1.ICreateTargetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateTargetRequest message, length delimited. Does not implicitly {@link google.cloud.deploy.v1.CreateTargetRequest.verify|verify} messages.
                     * @param message CreateTargetRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.deploy.v1.ICreateTargetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateTargetRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateTargetRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.deploy.v1.CreateTargetRequest;

                    /**
                     * Decodes a CreateTargetRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateTargetRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.deploy.v1.CreateTargetRequest;

                    /**
                     * Verifies a CreateTargetRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateTargetRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateTargetRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.deploy.v1.CreateTargetRequest;

                    /**
                     * Creates a plain object from a CreateTargetRequest message. Also converts values to other types if specified.
                     * @param message CreateTargetRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.deploy.v1.CreateTargetRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateTargetRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an UpdateTargetRequest. */
                interface IUpdateTargetRequest {

                    /** UpdateTargetRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateTargetRequest target */
                    target?: (google.cloud.deploy.v1.ITarget|null);

                    /** UpdateTargetRequest requestId */
                    requestId?: (string|null);

                    /** UpdateTargetRequest allowMissing */
                    allowMissing?: (boolean|null);

                    /** UpdateTargetRequest validateOnly */
                    validateOnly?: (boolean|null);
                }

                /** Represents an UpdateTargetRequest. */
                class UpdateTargetRequest implements IUpdateTargetRequest {

                    /**
                     * Constructs a new UpdateTargetRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.deploy.v1.IUpdateTargetRequest);

                    /** UpdateTargetRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateTargetRequest target. */
                    public target?: (google.cloud.deploy.v1.ITarget|null);

                    /** UpdateTargetRequest requestId. */
                    public requestId: string;

                    /** UpdateTargetRequest allowMissing. */
                    public allowMissing: boolean;

                    /** UpdateTargetRequest validateOnly. */
                    public validateOnly: boolean;

                    /**
                     * Creates a new UpdateTargetRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateTargetRequest instance
                     */
                    public static create(properties?: google.cloud.deploy.v1.IUpdateTargetRequest): google.cloud.deploy.v1.UpdateTargetRequest;

                    /**
                     * Encodes the specified UpdateTargetRequest message. Does not implicitly {@link google.cloud.deploy.v1.UpdateTargetRequest.verify|verify} messages.
                     * @param message UpdateTargetRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.deploy.v1.IUpdateTargetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateTargetRequest message, length delimited. Does not implicitly {@link google.cloud.deploy.v1.UpdateTargetRequest.verify|verify} messages.
                     * @param message UpdateTargetRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.deploy.v1.IUpdateTargetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateTargetRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateTargetRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.deploy.v1.UpdateTargetRequest;

                    /**
                     * Decodes an UpdateTargetRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateTargetRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.deploy.v1.UpdateTargetRequest;

                    /**
                     * Verifies an UpdateTargetRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateTargetRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateTargetRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.deploy.v1.UpdateTargetRequest;

                    /**
                     * Creates a plain object from an UpdateTargetRequest message. Also converts values to other types if specified.
                     * @param message UpdateTargetRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.deploy.v1.UpdateTargetRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateTargetRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DeleteTargetRequest. */
                interface IDeleteTargetRequest {

                    /** DeleteTargetRequest name */
                    name?: (string|null);

                    /** DeleteTargetRequest requestId */
                    requestId?: (string|null);

                    /** DeleteTargetRequest allowMissing */
                    allowMissing?: (boolean|null);

                    /** DeleteTargetRequest validateOnly */
                    validateOnly?: (boolean|null);

                    /** DeleteTargetRequest etag */
                    etag?: (string|null);
                }

                /** Represents a DeleteTargetRequest. */
                class DeleteTargetRequest implements IDeleteTargetRequest {

                    /**
                     * Constructs a new DeleteTargetRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.deploy.v1.IDeleteTargetRequest);

                    /** DeleteTargetRequest name. */
                    public name: string;

                    /** DeleteTargetRequest requestId. */
                    public requestId: string;

                    /** DeleteTargetRequest allowMissing. */
                    public allowMissing: boolean;

                    /** DeleteTargetRequest validateOnly. */
                    public validateOnly: boolean;

                    /** DeleteTargetRequest etag. */
                    public etag: string;

                    /**
                     * Creates a new DeleteTargetRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteTargetRequest instance
                     */
                    public static create(properties?: google.cloud.deploy.v1.IDeleteTargetRequest): google.cloud.deploy.v1.DeleteTargetRequest;

                    /**
                     * Encodes the specified DeleteTargetRequest message. Does not implicitly {@link google.cloud.deploy.v1.DeleteTargetRequest.verify|verify} messages.
                     * @param message DeleteTargetRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.deploy.v1.IDeleteTargetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteTargetRequest message, length delimited. Does not implicitly {@link google.cloud.deploy.v1.DeleteTargetRequest.verify|verify} messages.
                     * @param message DeleteTargetRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.deploy.v1.IDeleteTargetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteTargetRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteTargetRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.deploy.v1.DeleteTargetRequest;

                    /**
                     * Decodes a DeleteTargetRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteTargetRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.deploy.v1.DeleteTargetRequest;

                    /**
                     * Verifies a DeleteTargetRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteTargetRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteTargetRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.deploy.v1.DeleteTargetRequest;

                    /**
                     * Creates a plain object from a DeleteTargetRequest message. Also converts values to other types if specified.
                     * @param message DeleteTargetRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.deploy.v1.DeleteTargetRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteTargetRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a Release. */
                interface IRelease {

                    /** Release name */
                    name?: (string|null);

                    /** Release uid */
                    uid?: (string|null);

                    /** Release description */
                    description?: (string|null);

                    /** Release annotations */
                    annotations?: ({ [k: string]: string }|null);

                    /** Release labels */
                    labels?: ({ [k: string]: string }|null);

                    /** Release createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** Release renderStartTime */
                    renderStartTime?: (google.protobuf.ITimestamp|null);

                    /** Release renderEndTime */
                    renderEndTime?: (google.protobuf.ITimestamp|null);

                    /** Release skaffoldConfigUri */
                    skaffoldConfigUri?: (string|null);

                    /** Release skaffoldConfigPath */
                    skaffoldConfigPath?: (string|null);

                    /** Release buildArtifacts */
                    buildArtifacts?: (google.cloud.deploy.v1.IBuildArtifact[]|null);

                    /** Release deliveryPipelineSnapshot */
                    deliveryPipelineSnapshot?: (google.cloud.deploy.v1.IDeliveryPipeline|null);

                    /** Release targetSnapshots */
                    targetSnapshots?: (google.cloud.deploy.v1.ITarget[]|null);

                    /** Release renderState */
                    renderState?: (google.cloud.deploy.v1.Release.RenderState|keyof typeof google.cloud.deploy.v1.Release.RenderState|null);

                    /** Release etag */
                    etag?: (string|null);

                    /** Release skaffoldVersion */
                    skaffoldVersion?: (string|null);

                    /** Release targetArtifacts */
                    targetArtifacts?: ({ [k: string]: google.cloud.deploy.v1.ITargetArtifact }|null);

                    /** Release targetRenders */
                    targetRenders?: ({ [k: string]: google.cloud.deploy.v1.Release.ITargetRender }|null);
                }

                /** Represents a Release. */
                class Release implements IRelease {

                    /**
                     * Constructs a new Release.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.deploy.v1.IRelease);

                    /** Release name. */
                    public name: string;

                    /** Release uid. */
                    public uid: string;

                    /** Release description. */
                    public description: string;

                    /** Release annotations. */
                    public annotations: { [k: string]: string };

                    /** Release labels. */
                    public labels: { [k: string]: string };

                    /** Release createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** Release renderStartTime. */
                    public renderStartTime?: (google.protobuf.ITimestamp|null);

                    /** Release renderEndTime. */
                    public renderEndTime?: (google.protobuf.ITimestamp|null);

                    /** Release skaffoldConfigUri. */
                    public skaffoldConfigUri: string;

                    /** Release skaffoldConfigPath. */
                    public skaffoldConfigPath: string;

                    /** Release buildArtifacts. */
                    public buildArtifacts: google.cloud.deploy.v1.IBuildArtifact[];

                    /** Release deliveryPipelineSnapshot. */
                    public deliveryPipelineSnapshot?: (google.cloud.deploy.v1.IDeliveryPipeline|null);

                    /** Release targetSnapshots. */
                    public targetSnapshots: google.cloud.deploy.v1.ITarget[];

                    /** Release renderState. */
                    public renderState: (google.cloud.deploy.v1.Release.RenderState|keyof typeof google.cloud.deploy.v1.Release.RenderState);

                    /** Release etag. */
                    public etag: string;

                    /** Release skaffoldVersion. */
                    public skaffoldVersion: string;

                    /** Release targetArtifacts. */
                    public targetArtifacts: { [k: string]: google.cloud.deploy.v1.ITargetArtifact };

                    /** Release targetRenders. */
                    public targetRenders: { [k: string]: google.cloud.deploy.v1.Release.ITargetRender };

                    /**
                     * Creates a new Release instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Release instance
                     */
                    public static create(properties?: google.cloud.deploy.v1.IRelease): google.cloud.deploy.v1.Release;

                    /**
                     * Encodes the specified Release message. Does not implicitly {@link google.cloud.deploy.v1.Release.verify|verify} messages.
                     * @param message Release message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.deploy.v1.IRelease, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Release message, length delimited. Does not implicitly {@link google.cloud.deploy.v1.Release.verify|verify} messages.
                     * @param message Release message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.deploy.v1.IRelease, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Release message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Release
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.deploy.v1.Release;

                    /**
                     * Decodes a Release message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Release
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.deploy.v1.Release;

                    /**
                     * Verifies a Release message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Release message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Release
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.deploy.v1.Release;

                    /**
                     * Creates a plain object from a Release message. Also converts values to other types if specified.
                     * @param message Release
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.deploy.v1.Release, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Release to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace Release {

                    /** Properties of a TargetRender. */
                    interface ITargetRender {

                        /** TargetRender renderingBuild */
                        renderingBuild?: (string|null);

                        /** TargetRender renderingState */
                        renderingState?: (google.cloud.deploy.v1.Release.TargetRender.TargetRenderState|keyof typeof google.cloud.deploy.v1.Release.TargetRender.TargetRenderState|null);
                    }

                    /** Represents a TargetRender. */
                    class TargetRender implements ITargetRender {

                        /**
                         * Constructs a new TargetRender.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.deploy.v1.Release.ITargetRender);

                        /** TargetRender renderingBuild. */
                        public renderingBuild: string;

                        /** TargetRender renderingState. */
                        public renderingState: (google.cloud.deploy.v1.Release.TargetRender.TargetRenderState|keyof typeof google.cloud.deploy.v1.Release.TargetRender.TargetRenderState);

                        /**
                         * Creates a new TargetRender instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns TargetRender instance
                         */
                        public static create(properties?: google.cloud.deploy.v1.Release.ITargetRender): google.cloud.deploy.v1.Release.TargetRender;

                        /**
                         * Encodes the specified TargetRender message. Does not implicitly {@link google.cloud.deploy.v1.Release.TargetRender.verify|verify} messages.
                         * @param message TargetRender message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.deploy.v1.Release.ITargetRender, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified TargetRender message, length delimited. Does not implicitly {@link google.cloud.deploy.v1.Release.TargetRender.verify|verify} messages.
                         * @param message TargetRender message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.deploy.v1.Release.ITargetRender, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a TargetRender message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns TargetRender
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.deploy.v1.Release.TargetRender;

                        /**
                         * Decodes a TargetRender message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns TargetRender
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.deploy.v1.Release.TargetRender;

                        /**
                         * Verifies a TargetRender message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a TargetRender message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns TargetRender
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.deploy.v1.Release.TargetRender;

                        /**
                         * Creates a plain object from a TargetRender message. Also converts values to other types if specified.
                         * @param message TargetRender
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.deploy.v1.Release.TargetRender, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this TargetRender to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    namespace TargetRender {

                        /** TargetRenderState enum. */
                        enum TargetRenderState {
                            TARGET_RENDER_STATE_UNSPECIFIED = 0,
                            SUCCEEDED = 1,
                            FAILED = 2,
                            IN_PROGRESS = 3
                        }
                    }

                    /** RenderState enum. */
                    enum RenderState {
                        RENDER_STATE_UNSPECIFIED = 0,
                        SUCCEEDED = 1,
                        FAILED = 2,
                        IN_PROGRESS = 3
                    }
                }

                /** Properties of a BuildArtifact. */
                interface IBuildArtifact {

                    /** BuildArtifact image */
                    image?: (string|null);

                    /** BuildArtifact tag */
                    tag?: (string|null);
                }

                /** Represents a BuildArtifact. */
                class BuildArtifact implements IBuildArtifact {

                    /**
                     * Constructs a new BuildArtifact.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.deploy.v1.IBuildArtifact);

                    /** BuildArtifact image. */
                    public image: string;

                    /** BuildArtifact tag. */
                    public tag: string;

                    /**
                     * Creates a new BuildArtifact instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns BuildArtifact instance
                     */
                    public static create(properties?: google.cloud.deploy.v1.IBuildArtifact): google.cloud.deploy.v1.BuildArtifact;

                    /**
                     * Encodes the specified BuildArtifact message. Does not implicitly {@link google.cloud.deploy.v1.BuildArtifact.verify|verify} messages.
                     * @param message BuildArtifact message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.deploy.v1.IBuildArtifact, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified BuildArtifact message, length delimited. Does not implicitly {@link google.cloud.deploy.v1.BuildArtifact.verify|verify} messages.
                     * @param message BuildArtifact message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.deploy.v1.IBuildArtifact, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a BuildArtifact message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns BuildArtifact
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.deploy.v1.BuildArtifact;

                    /**
                     * Decodes a BuildArtifact message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns BuildArtifact
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.deploy.v1.BuildArtifact;

                    /**
                     * Verifies a BuildArtifact message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a BuildArtifact message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns BuildArtifact
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.deploy.v1.BuildArtifact;

                    /**
                     * Creates a plain object from a BuildArtifact message. Also converts values to other types if specified.
                     * @param message BuildArtifact
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.deploy.v1.BuildArtifact, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this BuildArtifact to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a TargetArtifact. */
                interface ITargetArtifact {

                    /** TargetArtifact artifactUri */
                    artifactUri?: (string|null);

                    /** TargetArtifact skaffoldConfigPath */
                    skaffoldConfigPath?: (string|null);

                    /** TargetArtifact manifestPath */
                    manifestPath?: (string|null);
                }

                /** Represents a TargetArtifact. */
                class TargetArtifact implements ITargetArtifact {

                    /**
                     * Constructs a new TargetArtifact.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.deploy.v1.ITargetArtifact);

                    /** TargetArtifact artifactUri. */
                    public artifactUri?: (string|null);

                    /** TargetArtifact skaffoldConfigPath. */
                    public skaffoldConfigPath: string;

                    /** TargetArtifact manifestPath. */
                    public manifestPath: string;

                    /** TargetArtifact uri. */
                    public uri?: "artifactUri";

                    /**
                     * Creates a new TargetArtifact instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TargetArtifact instance
                     */
                    public static create(properties?: google.cloud.deploy.v1.ITargetArtifact): google.cloud.deploy.v1.TargetArtifact;

                    /**
                     * Encodes the specified TargetArtifact message. Does not implicitly {@link google.cloud.deploy.v1.TargetArtifact.verify|verify} messages.
                     * @param message TargetArtifact message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.deploy.v1.ITargetArtifact, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TargetArtifact message, length delimited. Does not implicitly {@link google.cloud.deploy.v1.TargetArtifact.verify|verify} messages.
                     * @param message TargetArtifact message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.deploy.v1.ITargetArtifact, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TargetArtifact message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TargetArtifact
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.deploy.v1.TargetArtifact;

                    /**
                     * Decodes a TargetArtifact message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TargetArtifact
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.deploy.v1.TargetArtifact;

                    /**
                     * Verifies a TargetArtifact message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TargetArtifact message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TargetArtifact
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.deploy.v1.TargetArtifact;

                    /**
                     * Creates a plain object from a TargetArtifact message. Also converts values to other types if specified.
                     * @param message TargetArtifact
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.deploy.v1.TargetArtifact, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TargetArtifact to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListReleasesRequest. */
                interface IListReleasesRequest {

                    /** ListReleasesRequest parent */
                    parent?: (string|null);

                    /** ListReleasesRequest pageSize */
                    pageSize?: (number|null);

                    /** ListReleasesRequest pageToken */
                    pageToken?: (string|null);

                    /** ListReleasesRequest filter */
                    filter?: (string|null);

                    /** ListReleasesRequest orderBy */
                    orderBy?: (string|null);
                }

                /** Represents a ListReleasesRequest. */
                class ListReleasesRequest implements IListReleasesRequest {

                    /**
                     * Constructs a new ListReleasesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.deploy.v1.IListReleasesRequest);

                    /** ListReleasesRequest parent. */
                    public parent: string;

                    /** ListReleasesRequest pageSize. */
                    public pageSize: number;

                    /** ListReleasesRequest pageToken. */
                    public pageToken: string;

                    /** ListReleasesRequest filter. */
                    public filter: string;

                    /** ListReleasesRequest orderBy. */
                    public orderBy: string;

                    /**
                     * Creates a new ListReleasesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListReleasesRequest instance
                     */
                    public static create(properties?: google.cloud.deploy.v1.IListReleasesRequest): google.cloud.deploy.v1.ListReleasesRequest;

                    /**
                     * Encodes the specified ListReleasesRequest message. Does not implicitly {@link google.cloud.deploy.v1.ListReleasesRequest.verify|verify} messages.
                     * @param message ListReleasesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.deploy.v1.IListReleasesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListReleasesRequest message, length delimited. Does not implicitly {@link google.cloud.deploy.v1.ListReleasesRequest.verify|verify} messages.
                     * @param message ListReleasesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.deploy.v1.IListReleasesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListReleasesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListReleasesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.deploy.v1.ListReleasesRequest;

                    /**
                     * Decodes a ListReleasesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListReleasesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.deploy.v1.ListReleasesRequest;

                    /**
                     * Verifies a ListReleasesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListReleasesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListReleasesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.deploy.v1.ListReleasesRequest;

                    /**
                     * Creates a plain object from a ListReleasesRequest message. Also converts values to other types if specified.
                     * @param message ListReleasesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.deploy.v1.ListReleasesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListReleasesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListReleasesResponse. */
                interface IListReleasesResponse {

                    /** ListReleasesResponse releases */
                    releases?: (google.cloud.deploy.v1.IRelease[]|null);

                    /** ListReleasesResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListReleasesResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a ListReleasesResponse. */
                class ListReleasesResponse implements IListReleasesResponse {

                    /**
                     * Constructs a new ListReleasesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.deploy.v1.IListReleasesResponse);

                    /** ListReleasesResponse releases. */
                    public releases: google.cloud.deploy.v1.IRelease[];

                    /** ListReleasesResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListReleasesResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListReleasesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListReleasesResponse instance
                     */
                    public static create(properties?: google.cloud.deploy.v1.IListReleasesResponse): google.cloud.deploy.v1.ListReleasesResponse;

                    /**
                     * Encodes the specified ListReleasesResponse message. Does not implicitly {@link google.cloud.deploy.v1.ListReleasesResponse.verify|verify} messages.
                     * @param message ListReleasesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.deploy.v1.IListReleasesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListReleasesResponse message, length delimited. Does not implicitly {@link google.cloud.deploy.v1.ListReleasesResponse.verify|verify} messages.
                     * @param message ListReleasesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.deploy.v1.IListReleasesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListReleasesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListReleasesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.deploy.v1.ListReleasesResponse;

                    /**
                     * Decodes a ListReleasesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListReleasesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.deploy.v1.ListReleasesResponse;

                    /**
                     * Verifies a ListReleasesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListReleasesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListReleasesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.deploy.v1.ListReleasesResponse;

                    /**
                     * Creates a plain object from a ListReleasesResponse message. Also converts values to other types if specified.
                     * @param message ListReleasesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.deploy.v1.ListReleasesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListReleasesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetReleaseRequest. */
                interface IGetReleaseRequest {

                    /** GetReleaseRequest name */
                    name?: (string|null);
                }

                /** Represents a GetReleaseRequest. */
                class GetReleaseRequest implements IGetReleaseRequest {

                    /**
                     * Constructs a new GetReleaseRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.deploy.v1.IGetReleaseRequest);

                    /** GetReleaseRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetReleaseRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetReleaseRequest instance
                     */
                    public static create(properties?: google.cloud.deploy.v1.IGetReleaseRequest): google.cloud.deploy.v1.GetReleaseRequest;

                    /**
                     * Encodes the specified GetReleaseRequest message. Does not implicitly {@link google.cloud.deploy.v1.GetReleaseRequest.verify|verify} messages.
                     * @param message GetReleaseRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.deploy.v1.IGetReleaseRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetReleaseRequest message, length delimited. Does not implicitly {@link google.cloud.deploy.v1.GetReleaseRequest.verify|verify} messages.
                     * @param message GetReleaseRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.deploy.v1.IGetReleaseRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetReleaseRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetReleaseRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.deploy.v1.GetReleaseRequest;

                    /**
                     * Decodes a GetReleaseRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetReleaseRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.deploy.v1.GetReleaseRequest;

                    /**
                     * Verifies a GetReleaseRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetReleaseRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetReleaseRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.deploy.v1.GetReleaseRequest;

                    /**
                     * Creates a plain object from a GetReleaseRequest message. Also converts values to other types if specified.
                     * @param message GetReleaseRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.deploy.v1.GetReleaseRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetReleaseRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a CreateReleaseRequest. */
                interface ICreateReleaseRequest {

                    /** CreateReleaseRequest parent */
                    parent?: (string|null);

                    /** CreateReleaseRequest releaseId */
                    releaseId?: (string|null);

                    /** CreateReleaseRequest release */
                    release?: (google.cloud.deploy.v1.IRelease|null);

                    /** CreateReleaseRequest requestId */
                    requestId?: (string|null);

                    /** CreateReleaseRequest validateOnly */
                    validateOnly?: (boolean|null);
                }

                /** Represents a CreateReleaseRequest. */
                class CreateReleaseRequest implements ICreateReleaseRequest {

                    /**
                     * Constructs a new CreateReleaseRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.deploy.v1.ICreateReleaseRequest);

                    /** CreateReleaseRequest parent. */
                    public parent: string;

                    /** CreateReleaseRequest releaseId. */
                    public releaseId: string;

                    /** CreateReleaseRequest release. */
                    public release?: (google.cloud.deploy.v1.IRelease|null);

                    /** CreateReleaseRequest requestId. */
                    public requestId: string;

                    /** CreateReleaseRequest validateOnly. */
                    public validateOnly: boolean;

                    /**
                     * Creates a new CreateReleaseRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateReleaseRequest instance
                     */
                    public static create(properties?: google.cloud.deploy.v1.ICreateReleaseRequest): google.cloud.deploy.v1.CreateReleaseRequest;

                    /**
                     * Encodes the specified CreateReleaseRequest message. Does not implicitly {@link google.cloud.deploy.v1.CreateReleaseRequest.verify|verify} messages.
                     * @param message CreateReleaseRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.deploy.v1.ICreateReleaseRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateReleaseRequest message, length delimited. Does not implicitly {@link google.cloud.deploy.v1.CreateReleaseRequest.verify|verify} messages.
                     * @param message CreateReleaseRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.deploy.v1.ICreateReleaseRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateReleaseRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateReleaseRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.deploy.v1.CreateReleaseRequest;

                    /**
                     * Decodes a CreateReleaseRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateReleaseRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.deploy.v1.CreateReleaseRequest;

                    /**
                     * Verifies a CreateReleaseRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateReleaseRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateReleaseRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.deploy.v1.CreateReleaseRequest;

                    /**
                     * Creates a plain object from a CreateReleaseRequest message. Also converts values to other types if specified.
                     * @param message CreateReleaseRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.deploy.v1.CreateReleaseRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateReleaseRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a Rollout. */
                interface IRollout {

                    /** Rollout name */
                    name?: (string|null);

                    /** Rollout uid */
                    uid?: (string|null);

                    /** Rollout description */
                    description?: (string|null);

                    /** Rollout annotations */
                    annotations?: ({ [k: string]: string }|null);

                    /** Rollout labels */
                    labels?: ({ [k: string]: string }|null);

                    /** Rollout createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** Rollout approveTime */
                    approveTime?: (google.protobuf.ITimestamp|null);

                    /** Rollout enqueueTime */
                    enqueueTime?: (google.protobuf.ITimestamp|null);

                    /** Rollout deployStartTime */
                    deployStartTime?: (google.protobuf.ITimestamp|null);

                    /** Rollout deployEndTime */
                    deployEndTime?: (google.protobuf.ITimestamp|null);

                    /** Rollout targetId */
                    targetId?: (string|null);

                    /** Rollout approvalState */
                    approvalState?: (google.cloud.deploy.v1.Rollout.ApprovalState|keyof typeof google.cloud.deploy.v1.Rollout.ApprovalState|null);

                    /** Rollout state */
                    state?: (google.cloud.deploy.v1.Rollout.State|keyof typeof google.cloud.deploy.v1.Rollout.State|null);

                    /** Rollout failureReason */
                    failureReason?: (string|null);

                    /** Rollout deployingBuild */
                    deployingBuild?: (string|null);

                    /** Rollout etag */
                    etag?: (string|null);
                }

                /** Represents a Rollout. */
                class Rollout implements IRollout {

                    /**
                     * Constructs a new Rollout.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.deploy.v1.IRollout);

                    /** Rollout name. */
                    public name: string;

                    /** Rollout uid. */
                    public uid: string;

                    /** Rollout description. */
                    public description: string;

                    /** Rollout annotations. */
                    public annotations: { [k: string]: string };

                    /** Rollout labels. */
                    public labels: { [k: string]: string };

                    /** Rollout createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** Rollout approveTime. */
                    public approveTime?: (google.protobuf.ITimestamp|null);

                    /** Rollout enqueueTime. */
                    public enqueueTime?: (google.protobuf.ITimestamp|null);

                    /** Rollout deployStartTime. */
                    public deployStartTime?: (google.protobuf.ITimestamp|null);

                    /** Rollout deployEndTime. */
                    public deployEndTime?: (google.protobuf.ITimestamp|null);

                    /** Rollout targetId. */
                    public targetId: string;

                    /** Rollout approvalState. */
                    public approvalState: (google.cloud.deploy.v1.Rollout.ApprovalState|keyof typeof google.cloud.deploy.v1.Rollout.ApprovalState);

                    /** Rollout state. */
                    public state: (google.cloud.deploy.v1.Rollout.State|keyof typeof google.cloud.deploy.v1.Rollout.State);

                    /** Rollout failureReason. */
                    public failureReason: string;

                    /** Rollout deployingBuild. */
                    public deployingBuild: string;

                    /** Rollout etag. */
                    public etag: string;

                    /**
                     * Creates a new Rollout instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Rollout instance
                     */
                    public static create(properties?: google.cloud.deploy.v1.IRollout): google.cloud.deploy.v1.Rollout;

                    /**
                     * Encodes the specified Rollout message. Does not implicitly {@link google.cloud.deploy.v1.Rollout.verify|verify} messages.
                     * @param message Rollout message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.deploy.v1.IRollout, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Rollout message, length delimited. Does not implicitly {@link google.cloud.deploy.v1.Rollout.verify|verify} messages.
                     * @param message Rollout message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.deploy.v1.IRollout, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Rollout message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Rollout
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.deploy.v1.Rollout;

                    /**
                     * Decodes a Rollout message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Rollout
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.deploy.v1.Rollout;

                    /**
                     * Verifies a Rollout message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Rollout message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Rollout
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.deploy.v1.Rollout;

                    /**
                     * Creates a plain object from a Rollout message. Also converts values to other types if specified.
                     * @param message Rollout
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.deploy.v1.Rollout, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Rollout to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace Rollout {

                    /** ApprovalState enum. */
                    enum ApprovalState {
                        APPROVAL_STATE_UNSPECIFIED = 0,
                        NEEDS_APPROVAL = 1,
                        DOES_NOT_NEED_APPROVAL = 2,
                        APPROVED = 3,
                        REJECTED = 4
                    }

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        SUCCEEDED = 1,
                        FAILED = 2,
                        IN_PROGRESS = 3,
                        PENDING_APPROVAL = 4,
                        APPROVAL_REJECTED = 5,
                        PENDING = 6,
                        PENDING_RELEASE = 7
                    }
                }

                /** Properties of a ListRolloutsRequest. */
                interface IListRolloutsRequest {

                    /** ListRolloutsRequest parent */
                    parent?: (string|null);

                    /** ListRolloutsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListRolloutsRequest pageToken */
                    pageToken?: (string|null);

                    /** ListRolloutsRequest filter */
                    filter?: (string|null);

                    /** ListRolloutsRequest orderBy */
                    orderBy?: (string|null);
                }

                /** Represents a ListRolloutsRequest. */
                class ListRolloutsRequest implements IListRolloutsRequest {

                    /**
                     * Constructs a new ListRolloutsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.deploy.v1.IListRolloutsRequest);

                    /** ListRolloutsRequest parent. */
                    public parent: string;

                    /** ListRolloutsRequest pageSize. */
                    public pageSize: number;

                    /** ListRolloutsRequest pageToken. */
                    public pageToken: string;

                    /** ListRolloutsRequest filter. */
                    public filter: string;

                    /** ListRolloutsRequest orderBy. */
                    public orderBy: string;

                    /**
                     * Creates a new ListRolloutsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListRolloutsRequest instance
                     */
                    public static create(properties?: google.cloud.deploy.v1.IListRolloutsRequest): google.cloud.deploy.v1.ListRolloutsRequest;

                    /**
                     * Encodes the specified ListRolloutsRequest message. Does not implicitly {@link google.cloud.deploy.v1.ListRolloutsRequest.verify|verify} messages.
                     * @param message ListRolloutsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.deploy.v1.IListRolloutsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListRolloutsRequest message, length delimited. Does not implicitly {@link google.cloud.deploy.v1.ListRolloutsRequest.verify|verify} messages.
                     * @param message ListRolloutsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.deploy.v1.IListRolloutsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListRolloutsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListRolloutsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.deploy.v1.ListRolloutsRequest;

                    /**
                     * Decodes a ListRolloutsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListRolloutsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.deploy.v1.ListRolloutsRequest;

                    /**
                     * Verifies a ListRolloutsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListRolloutsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListRolloutsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.deploy.v1.ListRolloutsRequest;

                    /**
                     * Creates a plain object from a ListRolloutsRequest message. Also converts values to other types if specified.
                     * @param message ListRolloutsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.deploy.v1.ListRolloutsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListRolloutsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListRolloutsResponse. */
                interface IListRolloutsResponse {

                    /** ListRolloutsResponse rollouts */
                    rollouts?: (google.cloud.deploy.v1.IRollout[]|null);

                    /** ListRolloutsResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListRolloutsResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a ListRolloutsResponse. */
                class ListRolloutsResponse implements IListRolloutsResponse {

                    /**
                     * Constructs a new ListRolloutsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.deploy.v1.IListRolloutsResponse);

                    /** ListRolloutsResponse rollouts. */
                    public rollouts: google.cloud.deploy.v1.IRollout[];

                    /** ListRolloutsResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListRolloutsResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListRolloutsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListRolloutsResponse instance
                     */
                    public static create(properties?: google.cloud.deploy.v1.IListRolloutsResponse): google.cloud.deploy.v1.ListRolloutsResponse;

                    /**
                     * Encodes the specified ListRolloutsResponse message. Does not implicitly {@link google.cloud.deploy.v1.ListRolloutsResponse.verify|verify} messages.
                     * @param message ListRolloutsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.deploy.v1.IListRolloutsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListRolloutsResponse message, length delimited. Does not implicitly {@link google.cloud.deploy.v1.ListRolloutsResponse.verify|verify} messages.
                     * @param message ListRolloutsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.deploy.v1.IListRolloutsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListRolloutsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListRolloutsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.deploy.v1.ListRolloutsResponse;

                    /**
                     * Decodes a ListRolloutsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListRolloutsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.deploy.v1.ListRolloutsResponse;

                    /**
                     * Verifies a ListRolloutsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListRolloutsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListRolloutsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.deploy.v1.ListRolloutsResponse;

                    /**
                     * Creates a plain object from a ListRolloutsResponse message. Also converts values to other types if specified.
                     * @param message ListRolloutsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.deploy.v1.ListRolloutsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListRolloutsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetRolloutRequest. */
                interface IGetRolloutRequest {

                    /** GetRolloutRequest name */
                    name?: (string|null);
                }

                /** Represents a GetRolloutRequest. */
                class GetRolloutRequest implements IGetRolloutRequest {

                    /**
                     * Constructs a new GetRolloutRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.deploy.v1.IGetRolloutRequest);

                    /** GetRolloutRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetRolloutRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetRolloutRequest instance
                     */
                    public static create(properties?: google.cloud.deploy.v1.IGetRolloutRequest): google.cloud.deploy.v1.GetRolloutRequest;

                    /**
                     * Encodes the specified GetRolloutRequest message. Does not implicitly {@link google.cloud.deploy.v1.GetRolloutRequest.verify|verify} messages.
                     * @param message GetRolloutRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.deploy.v1.IGetRolloutRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetRolloutRequest message, length delimited. Does not implicitly {@link google.cloud.deploy.v1.GetRolloutRequest.verify|verify} messages.
                     * @param message GetRolloutRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.deploy.v1.IGetRolloutRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetRolloutRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetRolloutRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.deploy.v1.GetRolloutRequest;

                    /**
                     * Decodes a GetRolloutRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetRolloutRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.deploy.v1.GetRolloutRequest;

                    /**
                     * Verifies a GetRolloutRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetRolloutRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetRolloutRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.deploy.v1.GetRolloutRequest;

                    /**
                     * Creates a plain object from a GetRolloutRequest message. Also converts values to other types if specified.
                     * @param message GetRolloutRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.deploy.v1.GetRolloutRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetRolloutRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a CreateRolloutRequest. */
                interface ICreateRolloutRequest {

                    /** CreateRolloutRequest parent */
                    parent?: (string|null);

                    /** CreateRolloutRequest rolloutId */
                    rolloutId?: (string|null);

                    /** CreateRolloutRequest rollout */
                    rollout?: (google.cloud.deploy.v1.IRollout|null);

                    /** CreateRolloutRequest requestId */
                    requestId?: (string|null);

                    /** CreateRolloutRequest validateOnly */
                    validateOnly?: (boolean|null);
                }

                /** Represents a CreateRolloutRequest. */
                class CreateRolloutRequest implements ICreateRolloutRequest {

                    /**
                     * Constructs a new CreateRolloutRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.deploy.v1.ICreateRolloutRequest);

                    /** CreateRolloutRequest parent. */
                    public parent: string;

                    /** CreateRolloutRequest rolloutId. */
                    public rolloutId: string;

                    /** CreateRolloutRequest rollout. */
                    public rollout?: (google.cloud.deploy.v1.IRollout|null);

                    /** CreateRolloutRequest requestId. */
                    public requestId: string;

                    /** CreateRolloutRequest validateOnly. */
                    public validateOnly: boolean;

                    /**
                     * Creates a new CreateRolloutRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateRolloutRequest instance
                     */
                    public static create(properties?: google.cloud.deploy.v1.ICreateRolloutRequest): google.cloud.deploy.v1.CreateRolloutRequest;

                    /**
                     * Encodes the specified CreateRolloutRequest message. Does not implicitly {@link google.cloud.deploy.v1.CreateRolloutRequest.verify|verify} messages.
                     * @param message CreateRolloutRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.deploy.v1.ICreateRolloutRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateRolloutRequest message, length delimited. Does not implicitly {@link google.cloud.deploy.v1.CreateRolloutRequest.verify|verify} messages.
                     * @param message CreateRolloutRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.deploy.v1.ICreateRolloutRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateRolloutRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateRolloutRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.deploy.v1.CreateRolloutRequest;

                    /**
                     * Decodes a CreateRolloutRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateRolloutRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.deploy.v1.CreateRolloutRequest;

                    /**
                     * Verifies a CreateRolloutRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateRolloutRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateRolloutRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.deploy.v1.CreateRolloutRequest;

                    /**
                     * Creates a plain object from a CreateRolloutRequest message. Also converts values to other types if specified.
                     * @param message CreateRolloutRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.deploy.v1.CreateRolloutRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateRolloutRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
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
                    constructor(properties?: google.cloud.deploy.v1.IOperationMetadata);

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
                    public static create(properties?: google.cloud.deploy.v1.IOperationMetadata): google.cloud.deploy.v1.OperationMetadata;

                    /**
                     * Encodes the specified OperationMetadata message. Does not implicitly {@link google.cloud.deploy.v1.OperationMetadata.verify|verify} messages.
                     * @param message OperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.deploy.v1.IOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified OperationMetadata message, length delimited. Does not implicitly {@link google.cloud.deploy.v1.OperationMetadata.verify|verify} messages.
                     * @param message OperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.deploy.v1.IOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an OperationMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns OperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.deploy.v1.OperationMetadata;

                    /**
                     * Decodes an OperationMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns OperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.deploy.v1.OperationMetadata;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.deploy.v1.OperationMetadata;

                    /**
                     * Creates a plain object from an OperationMetadata message. Also converts values to other types if specified.
                     * @param message OperationMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.deploy.v1.OperationMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this OperationMetadata to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an ApproveRolloutRequest. */
                interface IApproveRolloutRequest {

                    /** ApproveRolloutRequest name */
                    name?: (string|null);

                    /** ApproveRolloutRequest approved */
                    approved?: (boolean|null);
                }

                /** Represents an ApproveRolloutRequest. */
                class ApproveRolloutRequest implements IApproveRolloutRequest {

                    /**
                     * Constructs a new ApproveRolloutRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.deploy.v1.IApproveRolloutRequest);

                    /** ApproveRolloutRequest name. */
                    public name: string;

                    /** ApproveRolloutRequest approved. */
                    public approved: boolean;

                    /**
                     * Creates a new ApproveRolloutRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ApproveRolloutRequest instance
                     */
                    public static create(properties?: google.cloud.deploy.v1.IApproveRolloutRequest): google.cloud.deploy.v1.ApproveRolloutRequest;

                    /**
                     * Encodes the specified ApproveRolloutRequest message. Does not implicitly {@link google.cloud.deploy.v1.ApproveRolloutRequest.verify|verify} messages.
                     * @param message ApproveRolloutRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.deploy.v1.IApproveRolloutRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ApproveRolloutRequest message, length delimited. Does not implicitly {@link google.cloud.deploy.v1.ApproveRolloutRequest.verify|verify} messages.
                     * @param message ApproveRolloutRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.deploy.v1.IApproveRolloutRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ApproveRolloutRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ApproveRolloutRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.deploy.v1.ApproveRolloutRequest;

                    /**
                     * Decodes an ApproveRolloutRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ApproveRolloutRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.deploy.v1.ApproveRolloutRequest;

                    /**
                     * Verifies an ApproveRolloutRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ApproveRolloutRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ApproveRolloutRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.deploy.v1.ApproveRolloutRequest;

                    /**
                     * Creates a plain object from an ApproveRolloutRequest message. Also converts values to other types if specified.
                     * @param message ApproveRolloutRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.deploy.v1.ApproveRolloutRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ApproveRolloutRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an ApproveRolloutResponse. */
                interface IApproveRolloutResponse {
                }

                /** Represents an ApproveRolloutResponse. */
                class ApproveRolloutResponse implements IApproveRolloutResponse {

                    /**
                     * Constructs a new ApproveRolloutResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.deploy.v1.IApproveRolloutResponse);

                    /**
                     * Creates a new ApproveRolloutResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ApproveRolloutResponse instance
                     */
                    public static create(properties?: google.cloud.deploy.v1.IApproveRolloutResponse): google.cloud.deploy.v1.ApproveRolloutResponse;

                    /**
                     * Encodes the specified ApproveRolloutResponse message. Does not implicitly {@link google.cloud.deploy.v1.ApproveRolloutResponse.verify|verify} messages.
                     * @param message ApproveRolloutResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.deploy.v1.IApproveRolloutResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ApproveRolloutResponse message, length delimited. Does not implicitly {@link google.cloud.deploy.v1.ApproveRolloutResponse.verify|verify} messages.
                     * @param message ApproveRolloutResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.deploy.v1.IApproveRolloutResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ApproveRolloutResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ApproveRolloutResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.deploy.v1.ApproveRolloutResponse;

                    /**
                     * Decodes an ApproveRolloutResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ApproveRolloutResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.deploy.v1.ApproveRolloutResponse;

                    /**
                     * Verifies an ApproveRolloutResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ApproveRolloutResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ApproveRolloutResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.deploy.v1.ApproveRolloutResponse;

                    /**
                     * Creates a plain object from an ApproveRolloutResponse message. Also converts values to other types if specified.
                     * @param message ApproveRolloutResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.deploy.v1.ApproveRolloutResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ApproveRolloutResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a Config. */
                interface IConfig {

                    /** Config name */
                    name?: (string|null);

                    /** Config supportedVersions */
                    supportedVersions?: (google.cloud.deploy.v1.ISkaffoldVersion[]|null);

                    /** Config defaultSkaffoldVersion */
                    defaultSkaffoldVersion?: (string|null);
                }

                /** Represents a Config. */
                class Config implements IConfig {

                    /**
                     * Constructs a new Config.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.deploy.v1.IConfig);

                    /** Config name. */
                    public name: string;

                    /** Config supportedVersions. */
                    public supportedVersions: google.cloud.deploy.v1.ISkaffoldVersion[];

                    /** Config defaultSkaffoldVersion. */
                    public defaultSkaffoldVersion: string;

                    /**
                     * Creates a new Config instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Config instance
                     */
                    public static create(properties?: google.cloud.deploy.v1.IConfig): google.cloud.deploy.v1.Config;

                    /**
                     * Encodes the specified Config message. Does not implicitly {@link google.cloud.deploy.v1.Config.verify|verify} messages.
                     * @param message Config message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.deploy.v1.IConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Config message, length delimited. Does not implicitly {@link google.cloud.deploy.v1.Config.verify|verify} messages.
                     * @param message Config message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.deploy.v1.IConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Config message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Config
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.deploy.v1.Config;

                    /**
                     * Decodes a Config message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Config
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.deploy.v1.Config;

                    /**
                     * Verifies a Config message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Config message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Config
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.deploy.v1.Config;

                    /**
                     * Creates a plain object from a Config message. Also converts values to other types if specified.
                     * @param message Config
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.deploy.v1.Config, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Config to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a SkaffoldVersion. */
                interface ISkaffoldVersion {

                    /** SkaffoldVersion version */
                    version?: (string|null);

                    /** SkaffoldVersion supportEndDate */
                    supportEndDate?: (google.type.IDate|null);
                }

                /** Represents a SkaffoldVersion. */
                class SkaffoldVersion implements ISkaffoldVersion {

                    /**
                     * Constructs a new SkaffoldVersion.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.deploy.v1.ISkaffoldVersion);

                    /** SkaffoldVersion version. */
                    public version: string;

                    /** SkaffoldVersion supportEndDate. */
                    public supportEndDate?: (google.type.IDate|null);

                    /**
                     * Creates a new SkaffoldVersion instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SkaffoldVersion instance
                     */
                    public static create(properties?: google.cloud.deploy.v1.ISkaffoldVersion): google.cloud.deploy.v1.SkaffoldVersion;

                    /**
                     * Encodes the specified SkaffoldVersion message. Does not implicitly {@link google.cloud.deploy.v1.SkaffoldVersion.verify|verify} messages.
                     * @param message SkaffoldVersion message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.deploy.v1.ISkaffoldVersion, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SkaffoldVersion message, length delimited. Does not implicitly {@link google.cloud.deploy.v1.SkaffoldVersion.verify|verify} messages.
                     * @param message SkaffoldVersion message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.deploy.v1.ISkaffoldVersion, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SkaffoldVersion message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SkaffoldVersion
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.deploy.v1.SkaffoldVersion;

                    /**
                     * Decodes a SkaffoldVersion message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SkaffoldVersion
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.deploy.v1.SkaffoldVersion;

                    /**
                     * Verifies a SkaffoldVersion message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SkaffoldVersion message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SkaffoldVersion
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.deploy.v1.SkaffoldVersion;

                    /**
                     * Creates a plain object from a SkaffoldVersion message. Also converts values to other types if specified.
                     * @param message SkaffoldVersion
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.deploy.v1.SkaffoldVersion, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SkaffoldVersion to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetConfigRequest. */
                interface IGetConfigRequest {

                    /** GetConfigRequest name */
                    name?: (string|null);
                }

                /** Represents a GetConfigRequest. */
                class GetConfigRequest implements IGetConfigRequest {

                    /**
                     * Constructs a new GetConfigRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.deploy.v1.IGetConfigRequest);

                    /** GetConfigRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetConfigRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetConfigRequest instance
                     */
                    public static create(properties?: google.cloud.deploy.v1.IGetConfigRequest): google.cloud.deploy.v1.GetConfigRequest;

                    /**
                     * Encodes the specified GetConfigRequest message. Does not implicitly {@link google.cloud.deploy.v1.GetConfigRequest.verify|verify} messages.
                     * @param message GetConfigRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.deploy.v1.IGetConfigRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetConfigRequest message, length delimited. Does not implicitly {@link google.cloud.deploy.v1.GetConfigRequest.verify|verify} messages.
                     * @param message GetConfigRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.deploy.v1.IGetConfigRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetConfigRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetConfigRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.deploy.v1.GetConfigRequest;

                    /**
                     * Decodes a GetConfigRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetConfigRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.deploy.v1.GetConfigRequest;

                    /**
                     * Verifies a GetConfigRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetConfigRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetConfigRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.deploy.v1.GetConfigRequest;

                    /**
                     * Creates a plain object from a GetConfigRequest message. Also converts values to other types if specified.
                     * @param message GetConfigRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.deploy.v1.GetConfigRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetConfigRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
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
            UNORDERED_LIST = 6
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

    /** Namespace type. */
    namespace type {

        /** Properties of a Date. */
        interface IDate {

            /** Date year */
            year?: (number|null);

            /** Date month */
            month?: (number|null);

            /** Date day */
            day?: (number|null);
        }

        /** Represents a Date. */
        class Date implements IDate {

            /**
             * Constructs a new Date.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.type.IDate);

            /** Date year. */
            public year: number;

            /** Date month. */
            public month: number;

            /** Date day. */
            public day: number;

            /**
             * Creates a new Date instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Date instance
             */
            public static create(properties?: google.type.IDate): google.type.Date;

            /**
             * Encodes the specified Date message. Does not implicitly {@link google.type.Date.verify|verify} messages.
             * @param message Date message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.type.IDate, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Date message, length delimited. Does not implicitly {@link google.type.Date.verify|verify} messages.
             * @param message Date message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.type.IDate, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Date message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Date
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.type.Date;

            /**
             * Decodes a Date message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Date
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.type.Date;

            /**
             * Verifies a Date message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Date message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Date
             */
            public static fromObject(object: { [k: string]: any }): google.type.Date;

            /**
             * Creates a plain object from a Date message. Also converts values to other types if specified.
             * @param message Date
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.type.Date, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Date to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }
}
