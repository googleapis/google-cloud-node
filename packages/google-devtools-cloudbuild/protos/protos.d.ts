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

    /** Namespace devtools. */
    namespace devtools {

        /** Namespace cloudbuild. */
        namespace cloudbuild {

            /** Namespace v1. */
            namespace v1 {

                /** Represents a CloudBuild */
                class CloudBuild extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new CloudBuild service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new CloudBuild service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): CloudBuild;

                    /**
                     * Calls CreateBuild.
                     * @param request CreateBuildRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createBuild(request: google.devtools.cloudbuild.v1.ICreateBuildRequest, callback: google.devtools.cloudbuild.v1.CloudBuild.CreateBuildCallback): void;

                    /**
                     * Calls CreateBuild.
                     * @param request CreateBuildRequest message or plain object
                     * @returns Promise
                     */
                    public createBuild(request: google.devtools.cloudbuild.v1.ICreateBuildRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls GetBuild.
                     * @param request GetBuildRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Build
                     */
                    public getBuild(request: google.devtools.cloudbuild.v1.IGetBuildRequest, callback: google.devtools.cloudbuild.v1.CloudBuild.GetBuildCallback): void;

                    /**
                     * Calls GetBuild.
                     * @param request GetBuildRequest message or plain object
                     * @returns Promise
                     */
                    public getBuild(request: google.devtools.cloudbuild.v1.IGetBuildRequest): Promise<google.devtools.cloudbuild.v1.Build>;

                    /**
                     * Calls ListBuilds.
                     * @param request ListBuildsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListBuildsResponse
                     */
                    public listBuilds(request: google.devtools.cloudbuild.v1.IListBuildsRequest, callback: google.devtools.cloudbuild.v1.CloudBuild.ListBuildsCallback): void;

                    /**
                     * Calls ListBuilds.
                     * @param request ListBuildsRequest message or plain object
                     * @returns Promise
                     */
                    public listBuilds(request: google.devtools.cloudbuild.v1.IListBuildsRequest): Promise<google.devtools.cloudbuild.v1.ListBuildsResponse>;

                    /**
                     * Calls CancelBuild.
                     * @param request CancelBuildRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Build
                     */
                    public cancelBuild(request: google.devtools.cloudbuild.v1.ICancelBuildRequest, callback: google.devtools.cloudbuild.v1.CloudBuild.CancelBuildCallback): void;

                    /**
                     * Calls CancelBuild.
                     * @param request CancelBuildRequest message or plain object
                     * @returns Promise
                     */
                    public cancelBuild(request: google.devtools.cloudbuild.v1.ICancelBuildRequest): Promise<google.devtools.cloudbuild.v1.Build>;

                    /**
                     * Calls RetryBuild.
                     * @param request RetryBuildRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public retryBuild(request: google.devtools.cloudbuild.v1.IRetryBuildRequest, callback: google.devtools.cloudbuild.v1.CloudBuild.RetryBuildCallback): void;

                    /**
                     * Calls RetryBuild.
                     * @param request RetryBuildRequest message or plain object
                     * @returns Promise
                     */
                    public retryBuild(request: google.devtools.cloudbuild.v1.IRetryBuildRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ApproveBuild.
                     * @param request ApproveBuildRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public approveBuild(request: google.devtools.cloudbuild.v1.IApproveBuildRequest, callback: google.devtools.cloudbuild.v1.CloudBuild.ApproveBuildCallback): void;

                    /**
                     * Calls ApproveBuild.
                     * @param request ApproveBuildRequest message or plain object
                     * @returns Promise
                     */
                    public approveBuild(request: google.devtools.cloudbuild.v1.IApproveBuildRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls CreateBuildTrigger.
                     * @param request CreateBuildTriggerRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and BuildTrigger
                     */
                    public createBuildTrigger(request: google.devtools.cloudbuild.v1.ICreateBuildTriggerRequest, callback: google.devtools.cloudbuild.v1.CloudBuild.CreateBuildTriggerCallback): void;

                    /**
                     * Calls CreateBuildTrigger.
                     * @param request CreateBuildTriggerRequest message or plain object
                     * @returns Promise
                     */
                    public createBuildTrigger(request: google.devtools.cloudbuild.v1.ICreateBuildTriggerRequest): Promise<google.devtools.cloudbuild.v1.BuildTrigger>;

                    /**
                     * Calls GetBuildTrigger.
                     * @param request GetBuildTriggerRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and BuildTrigger
                     */
                    public getBuildTrigger(request: google.devtools.cloudbuild.v1.IGetBuildTriggerRequest, callback: google.devtools.cloudbuild.v1.CloudBuild.GetBuildTriggerCallback): void;

                    /**
                     * Calls GetBuildTrigger.
                     * @param request GetBuildTriggerRequest message or plain object
                     * @returns Promise
                     */
                    public getBuildTrigger(request: google.devtools.cloudbuild.v1.IGetBuildTriggerRequest): Promise<google.devtools.cloudbuild.v1.BuildTrigger>;

                    /**
                     * Calls ListBuildTriggers.
                     * @param request ListBuildTriggersRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListBuildTriggersResponse
                     */
                    public listBuildTriggers(request: google.devtools.cloudbuild.v1.IListBuildTriggersRequest, callback: google.devtools.cloudbuild.v1.CloudBuild.ListBuildTriggersCallback): void;

                    /**
                     * Calls ListBuildTriggers.
                     * @param request ListBuildTriggersRequest message or plain object
                     * @returns Promise
                     */
                    public listBuildTriggers(request: google.devtools.cloudbuild.v1.IListBuildTriggersRequest): Promise<google.devtools.cloudbuild.v1.ListBuildTriggersResponse>;

                    /**
                     * Calls DeleteBuildTrigger.
                     * @param request DeleteBuildTriggerRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Empty
                     */
                    public deleteBuildTrigger(request: google.devtools.cloudbuild.v1.IDeleteBuildTriggerRequest, callback: google.devtools.cloudbuild.v1.CloudBuild.DeleteBuildTriggerCallback): void;

                    /**
                     * Calls DeleteBuildTrigger.
                     * @param request DeleteBuildTriggerRequest message or plain object
                     * @returns Promise
                     */
                    public deleteBuildTrigger(request: google.devtools.cloudbuild.v1.IDeleteBuildTriggerRequest): Promise<google.protobuf.Empty>;

                    /**
                     * Calls UpdateBuildTrigger.
                     * @param request UpdateBuildTriggerRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and BuildTrigger
                     */
                    public updateBuildTrigger(request: google.devtools.cloudbuild.v1.IUpdateBuildTriggerRequest, callback: google.devtools.cloudbuild.v1.CloudBuild.UpdateBuildTriggerCallback): void;

                    /**
                     * Calls UpdateBuildTrigger.
                     * @param request UpdateBuildTriggerRequest message or plain object
                     * @returns Promise
                     */
                    public updateBuildTrigger(request: google.devtools.cloudbuild.v1.IUpdateBuildTriggerRequest): Promise<google.devtools.cloudbuild.v1.BuildTrigger>;

                    /**
                     * Calls RunBuildTrigger.
                     * @param request RunBuildTriggerRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public runBuildTrigger(request: google.devtools.cloudbuild.v1.IRunBuildTriggerRequest, callback: google.devtools.cloudbuild.v1.CloudBuild.RunBuildTriggerCallback): void;

                    /**
                     * Calls RunBuildTrigger.
                     * @param request RunBuildTriggerRequest message or plain object
                     * @returns Promise
                     */
                    public runBuildTrigger(request: google.devtools.cloudbuild.v1.IRunBuildTriggerRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ReceiveTriggerWebhook.
                     * @param request ReceiveTriggerWebhookRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ReceiveTriggerWebhookResponse
                     */
                    public receiveTriggerWebhook(request: google.devtools.cloudbuild.v1.IReceiveTriggerWebhookRequest, callback: google.devtools.cloudbuild.v1.CloudBuild.ReceiveTriggerWebhookCallback): void;

                    /**
                     * Calls ReceiveTriggerWebhook.
                     * @param request ReceiveTriggerWebhookRequest message or plain object
                     * @returns Promise
                     */
                    public receiveTriggerWebhook(request: google.devtools.cloudbuild.v1.IReceiveTriggerWebhookRequest): Promise<google.devtools.cloudbuild.v1.ReceiveTriggerWebhookResponse>;

                    /**
                     * Calls CreateWorkerPool.
                     * @param request CreateWorkerPoolRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createWorkerPool(request: google.devtools.cloudbuild.v1.ICreateWorkerPoolRequest, callback: google.devtools.cloudbuild.v1.CloudBuild.CreateWorkerPoolCallback): void;

                    /**
                     * Calls CreateWorkerPool.
                     * @param request CreateWorkerPoolRequest message or plain object
                     * @returns Promise
                     */
                    public createWorkerPool(request: google.devtools.cloudbuild.v1.ICreateWorkerPoolRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls GetWorkerPool.
                     * @param request GetWorkerPoolRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and WorkerPool
                     */
                    public getWorkerPool(request: google.devtools.cloudbuild.v1.IGetWorkerPoolRequest, callback: google.devtools.cloudbuild.v1.CloudBuild.GetWorkerPoolCallback): void;

                    /**
                     * Calls GetWorkerPool.
                     * @param request GetWorkerPoolRequest message or plain object
                     * @returns Promise
                     */
                    public getWorkerPool(request: google.devtools.cloudbuild.v1.IGetWorkerPoolRequest): Promise<google.devtools.cloudbuild.v1.WorkerPool>;

                    /**
                     * Calls DeleteWorkerPool.
                     * @param request DeleteWorkerPoolRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deleteWorkerPool(request: google.devtools.cloudbuild.v1.IDeleteWorkerPoolRequest, callback: google.devtools.cloudbuild.v1.CloudBuild.DeleteWorkerPoolCallback): void;

                    /**
                     * Calls DeleteWorkerPool.
                     * @param request DeleteWorkerPoolRequest message or plain object
                     * @returns Promise
                     */
                    public deleteWorkerPool(request: google.devtools.cloudbuild.v1.IDeleteWorkerPoolRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls UpdateWorkerPool.
                     * @param request UpdateWorkerPoolRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public updateWorkerPool(request: google.devtools.cloudbuild.v1.IUpdateWorkerPoolRequest, callback: google.devtools.cloudbuild.v1.CloudBuild.UpdateWorkerPoolCallback): void;

                    /**
                     * Calls UpdateWorkerPool.
                     * @param request UpdateWorkerPoolRequest message or plain object
                     * @returns Promise
                     */
                    public updateWorkerPool(request: google.devtools.cloudbuild.v1.IUpdateWorkerPoolRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ListWorkerPools.
                     * @param request ListWorkerPoolsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListWorkerPoolsResponse
                     */
                    public listWorkerPools(request: google.devtools.cloudbuild.v1.IListWorkerPoolsRequest, callback: google.devtools.cloudbuild.v1.CloudBuild.ListWorkerPoolsCallback): void;

                    /**
                     * Calls ListWorkerPools.
                     * @param request ListWorkerPoolsRequest message or plain object
                     * @returns Promise
                     */
                    public listWorkerPools(request: google.devtools.cloudbuild.v1.IListWorkerPoolsRequest): Promise<google.devtools.cloudbuild.v1.ListWorkerPoolsResponse>;
                }

                namespace CloudBuild {

                    /**
                     * Callback as used by {@link google.devtools.cloudbuild.v1.CloudBuild#createBuild}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateBuildCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.devtools.cloudbuild.v1.CloudBuild#getBuild}.
                     * @param error Error, if any
                     * @param [response] Build
                     */
                    type GetBuildCallback = (error: (Error|null), response?: google.devtools.cloudbuild.v1.Build) => void;

                    /**
                     * Callback as used by {@link google.devtools.cloudbuild.v1.CloudBuild#listBuilds}.
                     * @param error Error, if any
                     * @param [response] ListBuildsResponse
                     */
                    type ListBuildsCallback = (error: (Error|null), response?: google.devtools.cloudbuild.v1.ListBuildsResponse) => void;

                    /**
                     * Callback as used by {@link google.devtools.cloudbuild.v1.CloudBuild#cancelBuild}.
                     * @param error Error, if any
                     * @param [response] Build
                     */
                    type CancelBuildCallback = (error: (Error|null), response?: google.devtools.cloudbuild.v1.Build) => void;

                    /**
                     * Callback as used by {@link google.devtools.cloudbuild.v1.CloudBuild#retryBuild}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type RetryBuildCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.devtools.cloudbuild.v1.CloudBuild#approveBuild}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type ApproveBuildCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.devtools.cloudbuild.v1.CloudBuild#createBuildTrigger}.
                     * @param error Error, if any
                     * @param [response] BuildTrigger
                     */
                    type CreateBuildTriggerCallback = (error: (Error|null), response?: google.devtools.cloudbuild.v1.BuildTrigger) => void;

                    /**
                     * Callback as used by {@link google.devtools.cloudbuild.v1.CloudBuild#getBuildTrigger}.
                     * @param error Error, if any
                     * @param [response] BuildTrigger
                     */
                    type GetBuildTriggerCallback = (error: (Error|null), response?: google.devtools.cloudbuild.v1.BuildTrigger) => void;

                    /**
                     * Callback as used by {@link google.devtools.cloudbuild.v1.CloudBuild#listBuildTriggers}.
                     * @param error Error, if any
                     * @param [response] ListBuildTriggersResponse
                     */
                    type ListBuildTriggersCallback = (error: (Error|null), response?: google.devtools.cloudbuild.v1.ListBuildTriggersResponse) => void;

                    /**
                     * Callback as used by {@link google.devtools.cloudbuild.v1.CloudBuild#deleteBuildTrigger}.
                     * @param error Error, if any
                     * @param [response] Empty
                     */
                    type DeleteBuildTriggerCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                    /**
                     * Callback as used by {@link google.devtools.cloudbuild.v1.CloudBuild#updateBuildTrigger}.
                     * @param error Error, if any
                     * @param [response] BuildTrigger
                     */
                    type UpdateBuildTriggerCallback = (error: (Error|null), response?: google.devtools.cloudbuild.v1.BuildTrigger) => void;

                    /**
                     * Callback as used by {@link google.devtools.cloudbuild.v1.CloudBuild#runBuildTrigger}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type RunBuildTriggerCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.devtools.cloudbuild.v1.CloudBuild#receiveTriggerWebhook}.
                     * @param error Error, if any
                     * @param [response] ReceiveTriggerWebhookResponse
                     */
                    type ReceiveTriggerWebhookCallback = (error: (Error|null), response?: google.devtools.cloudbuild.v1.ReceiveTriggerWebhookResponse) => void;

                    /**
                     * Callback as used by {@link google.devtools.cloudbuild.v1.CloudBuild#createWorkerPool}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateWorkerPoolCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.devtools.cloudbuild.v1.CloudBuild#getWorkerPool}.
                     * @param error Error, if any
                     * @param [response] WorkerPool
                     */
                    type GetWorkerPoolCallback = (error: (Error|null), response?: google.devtools.cloudbuild.v1.WorkerPool) => void;

                    /**
                     * Callback as used by {@link google.devtools.cloudbuild.v1.CloudBuild#deleteWorkerPool}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeleteWorkerPoolCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.devtools.cloudbuild.v1.CloudBuild#updateWorkerPool}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type UpdateWorkerPoolCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.devtools.cloudbuild.v1.CloudBuild#listWorkerPools}.
                     * @param error Error, if any
                     * @param [response] ListWorkerPoolsResponse
                     */
                    type ListWorkerPoolsCallback = (error: (Error|null), response?: google.devtools.cloudbuild.v1.ListWorkerPoolsResponse) => void;
                }

                /** Properties of a RetryBuildRequest. */
                interface IRetryBuildRequest {

                    /** RetryBuildRequest name */
                    name?: (string|null);

                    /** RetryBuildRequest projectId */
                    projectId?: (string|null);

                    /** RetryBuildRequest id */
                    id?: (string|null);
                }

                /** Represents a RetryBuildRequest. */
                class RetryBuildRequest implements IRetryBuildRequest {

                    /**
                     * Constructs a new RetryBuildRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.devtools.cloudbuild.v1.IRetryBuildRequest);

                    /** RetryBuildRequest name. */
                    public name: string;

                    /** RetryBuildRequest projectId. */
                    public projectId: string;

                    /** RetryBuildRequest id. */
                    public id: string;

                    /**
                     * Creates a new RetryBuildRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RetryBuildRequest instance
                     */
                    public static create(properties?: google.devtools.cloudbuild.v1.IRetryBuildRequest): google.devtools.cloudbuild.v1.RetryBuildRequest;

                    /**
                     * Encodes the specified RetryBuildRequest message. Does not implicitly {@link google.devtools.cloudbuild.v1.RetryBuildRequest.verify|verify} messages.
                     * @param message RetryBuildRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.devtools.cloudbuild.v1.IRetryBuildRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RetryBuildRequest message, length delimited. Does not implicitly {@link google.devtools.cloudbuild.v1.RetryBuildRequest.verify|verify} messages.
                     * @param message RetryBuildRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.devtools.cloudbuild.v1.IRetryBuildRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RetryBuildRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RetryBuildRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.devtools.cloudbuild.v1.RetryBuildRequest;

                    /**
                     * Decodes a RetryBuildRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RetryBuildRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.devtools.cloudbuild.v1.RetryBuildRequest;

                    /**
                     * Verifies a RetryBuildRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RetryBuildRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RetryBuildRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.devtools.cloudbuild.v1.RetryBuildRequest;

                    /**
                     * Creates a plain object from a RetryBuildRequest message. Also converts values to other types if specified.
                     * @param message RetryBuildRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.devtools.cloudbuild.v1.RetryBuildRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RetryBuildRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a RunBuildTriggerRequest. */
                interface IRunBuildTriggerRequest {

                    /** RunBuildTriggerRequest name */
                    name?: (string|null);

                    /** RunBuildTriggerRequest projectId */
                    projectId?: (string|null);

                    /** RunBuildTriggerRequest triggerId */
                    triggerId?: (string|null);

                    /** RunBuildTriggerRequest source */
                    source?: (google.devtools.cloudbuild.v1.IRepoSource|null);
                }

                /** Represents a RunBuildTriggerRequest. */
                class RunBuildTriggerRequest implements IRunBuildTriggerRequest {

                    /**
                     * Constructs a new RunBuildTriggerRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.devtools.cloudbuild.v1.IRunBuildTriggerRequest);

                    /** RunBuildTriggerRequest name. */
                    public name: string;

                    /** RunBuildTriggerRequest projectId. */
                    public projectId: string;

                    /** RunBuildTriggerRequest triggerId. */
                    public triggerId: string;

                    /** RunBuildTriggerRequest source. */
                    public source?: (google.devtools.cloudbuild.v1.IRepoSource|null);

                    /**
                     * Creates a new RunBuildTriggerRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RunBuildTriggerRequest instance
                     */
                    public static create(properties?: google.devtools.cloudbuild.v1.IRunBuildTriggerRequest): google.devtools.cloudbuild.v1.RunBuildTriggerRequest;

                    /**
                     * Encodes the specified RunBuildTriggerRequest message. Does not implicitly {@link google.devtools.cloudbuild.v1.RunBuildTriggerRequest.verify|verify} messages.
                     * @param message RunBuildTriggerRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.devtools.cloudbuild.v1.IRunBuildTriggerRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RunBuildTriggerRequest message, length delimited. Does not implicitly {@link google.devtools.cloudbuild.v1.RunBuildTriggerRequest.verify|verify} messages.
                     * @param message RunBuildTriggerRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.devtools.cloudbuild.v1.IRunBuildTriggerRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RunBuildTriggerRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RunBuildTriggerRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.devtools.cloudbuild.v1.RunBuildTriggerRequest;

                    /**
                     * Decodes a RunBuildTriggerRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RunBuildTriggerRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.devtools.cloudbuild.v1.RunBuildTriggerRequest;

                    /**
                     * Verifies a RunBuildTriggerRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RunBuildTriggerRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RunBuildTriggerRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.devtools.cloudbuild.v1.RunBuildTriggerRequest;

                    /**
                     * Creates a plain object from a RunBuildTriggerRequest message. Also converts values to other types if specified.
                     * @param message RunBuildTriggerRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.devtools.cloudbuild.v1.RunBuildTriggerRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RunBuildTriggerRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a StorageSource. */
                interface IStorageSource {

                    /** StorageSource bucket */
                    bucket?: (string|null);

                    /** StorageSource object */
                    object?: (string|null);

                    /** StorageSource generation */
                    generation?: (number|Long|string|null);
                }

                /** Represents a StorageSource. */
                class StorageSource implements IStorageSource {

                    /**
                     * Constructs a new StorageSource.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.devtools.cloudbuild.v1.IStorageSource);

                    /** StorageSource bucket. */
                    public bucket: string;

                    /** StorageSource object. */
                    public object: string;

                    /** StorageSource generation. */
                    public generation: (number|Long|string);

                    /**
                     * Creates a new StorageSource instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns StorageSource instance
                     */
                    public static create(properties?: google.devtools.cloudbuild.v1.IStorageSource): google.devtools.cloudbuild.v1.StorageSource;

                    /**
                     * Encodes the specified StorageSource message. Does not implicitly {@link google.devtools.cloudbuild.v1.StorageSource.verify|verify} messages.
                     * @param message StorageSource message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.devtools.cloudbuild.v1.IStorageSource, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified StorageSource message, length delimited. Does not implicitly {@link google.devtools.cloudbuild.v1.StorageSource.verify|verify} messages.
                     * @param message StorageSource message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.devtools.cloudbuild.v1.IStorageSource, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a StorageSource message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns StorageSource
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.devtools.cloudbuild.v1.StorageSource;

                    /**
                     * Decodes a StorageSource message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns StorageSource
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.devtools.cloudbuild.v1.StorageSource;

                    /**
                     * Verifies a StorageSource message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a StorageSource message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns StorageSource
                     */
                    public static fromObject(object: { [k: string]: any }): google.devtools.cloudbuild.v1.StorageSource;

                    /**
                     * Creates a plain object from a StorageSource message. Also converts values to other types if specified.
                     * @param message StorageSource
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.devtools.cloudbuild.v1.StorageSource, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this StorageSource to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a RepoSource. */
                interface IRepoSource {

                    /** RepoSource projectId */
                    projectId?: (string|null);

                    /** RepoSource repoName */
                    repoName?: (string|null);

                    /** RepoSource branchName */
                    branchName?: (string|null);

                    /** RepoSource tagName */
                    tagName?: (string|null);

                    /** RepoSource commitSha */
                    commitSha?: (string|null);

                    /** RepoSource dir */
                    dir?: (string|null);

                    /** RepoSource invertRegex */
                    invertRegex?: (boolean|null);

                    /** RepoSource substitutions */
                    substitutions?: ({ [k: string]: string }|null);
                }

                /** Represents a RepoSource. */
                class RepoSource implements IRepoSource {

                    /**
                     * Constructs a new RepoSource.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.devtools.cloudbuild.v1.IRepoSource);

                    /** RepoSource projectId. */
                    public projectId: string;

                    /** RepoSource repoName. */
                    public repoName: string;

                    /** RepoSource branchName. */
                    public branchName?: (string|null);

                    /** RepoSource tagName. */
                    public tagName?: (string|null);

                    /** RepoSource commitSha. */
                    public commitSha?: (string|null);

                    /** RepoSource dir. */
                    public dir: string;

                    /** RepoSource invertRegex. */
                    public invertRegex: boolean;

                    /** RepoSource substitutions. */
                    public substitutions: { [k: string]: string };

                    /** RepoSource revision. */
                    public revision?: ("branchName"|"tagName"|"commitSha");

                    /**
                     * Creates a new RepoSource instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RepoSource instance
                     */
                    public static create(properties?: google.devtools.cloudbuild.v1.IRepoSource): google.devtools.cloudbuild.v1.RepoSource;

                    /**
                     * Encodes the specified RepoSource message. Does not implicitly {@link google.devtools.cloudbuild.v1.RepoSource.verify|verify} messages.
                     * @param message RepoSource message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.devtools.cloudbuild.v1.IRepoSource, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RepoSource message, length delimited. Does not implicitly {@link google.devtools.cloudbuild.v1.RepoSource.verify|verify} messages.
                     * @param message RepoSource message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.devtools.cloudbuild.v1.IRepoSource, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RepoSource message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RepoSource
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.devtools.cloudbuild.v1.RepoSource;

                    /**
                     * Decodes a RepoSource message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RepoSource
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.devtools.cloudbuild.v1.RepoSource;

                    /**
                     * Verifies a RepoSource message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RepoSource message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RepoSource
                     */
                    public static fromObject(object: { [k: string]: any }): google.devtools.cloudbuild.v1.RepoSource;

                    /**
                     * Creates a plain object from a RepoSource message. Also converts values to other types if specified.
                     * @param message RepoSource
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.devtools.cloudbuild.v1.RepoSource, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RepoSource to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a StorageSourceManifest. */
                interface IStorageSourceManifest {

                    /** StorageSourceManifest bucket */
                    bucket?: (string|null);

                    /** StorageSourceManifest object */
                    object?: (string|null);

                    /** StorageSourceManifest generation */
                    generation?: (number|Long|string|null);
                }

                /** Represents a StorageSourceManifest. */
                class StorageSourceManifest implements IStorageSourceManifest {

                    /**
                     * Constructs a new StorageSourceManifest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.devtools.cloudbuild.v1.IStorageSourceManifest);

                    /** StorageSourceManifest bucket. */
                    public bucket: string;

                    /** StorageSourceManifest object. */
                    public object: string;

                    /** StorageSourceManifest generation. */
                    public generation: (number|Long|string);

                    /**
                     * Creates a new StorageSourceManifest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns StorageSourceManifest instance
                     */
                    public static create(properties?: google.devtools.cloudbuild.v1.IStorageSourceManifest): google.devtools.cloudbuild.v1.StorageSourceManifest;

                    /**
                     * Encodes the specified StorageSourceManifest message. Does not implicitly {@link google.devtools.cloudbuild.v1.StorageSourceManifest.verify|verify} messages.
                     * @param message StorageSourceManifest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.devtools.cloudbuild.v1.IStorageSourceManifest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified StorageSourceManifest message, length delimited. Does not implicitly {@link google.devtools.cloudbuild.v1.StorageSourceManifest.verify|verify} messages.
                     * @param message StorageSourceManifest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.devtools.cloudbuild.v1.IStorageSourceManifest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a StorageSourceManifest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns StorageSourceManifest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.devtools.cloudbuild.v1.StorageSourceManifest;

                    /**
                     * Decodes a StorageSourceManifest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns StorageSourceManifest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.devtools.cloudbuild.v1.StorageSourceManifest;

                    /**
                     * Verifies a StorageSourceManifest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a StorageSourceManifest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns StorageSourceManifest
                     */
                    public static fromObject(object: { [k: string]: any }): google.devtools.cloudbuild.v1.StorageSourceManifest;

                    /**
                     * Creates a plain object from a StorageSourceManifest message. Also converts values to other types if specified.
                     * @param message StorageSourceManifest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.devtools.cloudbuild.v1.StorageSourceManifest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this StorageSourceManifest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a Source. */
                interface ISource {

                    /** Source storageSource */
                    storageSource?: (google.devtools.cloudbuild.v1.IStorageSource|null);

                    /** Source repoSource */
                    repoSource?: (google.devtools.cloudbuild.v1.IRepoSource|null);

                    /** Source storageSourceManifest */
                    storageSourceManifest?: (google.devtools.cloudbuild.v1.IStorageSourceManifest|null);
                }

                /** Represents a Source. */
                class Source implements ISource {

                    /**
                     * Constructs a new Source.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.devtools.cloudbuild.v1.ISource);

                    /** Source storageSource. */
                    public storageSource?: (google.devtools.cloudbuild.v1.IStorageSource|null);

                    /** Source repoSource. */
                    public repoSource?: (google.devtools.cloudbuild.v1.IRepoSource|null);

                    /** Source storageSourceManifest. */
                    public storageSourceManifest?: (google.devtools.cloudbuild.v1.IStorageSourceManifest|null);

                    /** Source source. */
                    public source?: ("storageSource"|"repoSource"|"storageSourceManifest");

                    /**
                     * Creates a new Source instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Source instance
                     */
                    public static create(properties?: google.devtools.cloudbuild.v1.ISource): google.devtools.cloudbuild.v1.Source;

                    /**
                     * Encodes the specified Source message. Does not implicitly {@link google.devtools.cloudbuild.v1.Source.verify|verify} messages.
                     * @param message Source message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.devtools.cloudbuild.v1.ISource, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Source message, length delimited. Does not implicitly {@link google.devtools.cloudbuild.v1.Source.verify|verify} messages.
                     * @param message Source message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.devtools.cloudbuild.v1.ISource, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Source message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Source
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.devtools.cloudbuild.v1.Source;

                    /**
                     * Decodes a Source message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Source
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.devtools.cloudbuild.v1.Source;

                    /**
                     * Verifies a Source message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Source message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Source
                     */
                    public static fromObject(object: { [k: string]: any }): google.devtools.cloudbuild.v1.Source;

                    /**
                     * Creates a plain object from a Source message. Also converts values to other types if specified.
                     * @param message Source
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.devtools.cloudbuild.v1.Source, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Source to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a BuiltImage. */
                interface IBuiltImage {

                    /** BuiltImage name */
                    name?: (string|null);

                    /** BuiltImage digest */
                    digest?: (string|null);

                    /** BuiltImage pushTiming */
                    pushTiming?: (google.devtools.cloudbuild.v1.ITimeSpan|null);
                }

                /** Represents a BuiltImage. */
                class BuiltImage implements IBuiltImage {

                    /**
                     * Constructs a new BuiltImage.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.devtools.cloudbuild.v1.IBuiltImage);

                    /** BuiltImage name. */
                    public name: string;

                    /** BuiltImage digest. */
                    public digest: string;

                    /** BuiltImage pushTiming. */
                    public pushTiming?: (google.devtools.cloudbuild.v1.ITimeSpan|null);

                    /**
                     * Creates a new BuiltImage instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns BuiltImage instance
                     */
                    public static create(properties?: google.devtools.cloudbuild.v1.IBuiltImage): google.devtools.cloudbuild.v1.BuiltImage;

                    /**
                     * Encodes the specified BuiltImage message. Does not implicitly {@link google.devtools.cloudbuild.v1.BuiltImage.verify|verify} messages.
                     * @param message BuiltImage message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.devtools.cloudbuild.v1.IBuiltImage, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified BuiltImage message, length delimited. Does not implicitly {@link google.devtools.cloudbuild.v1.BuiltImage.verify|verify} messages.
                     * @param message BuiltImage message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.devtools.cloudbuild.v1.IBuiltImage, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a BuiltImage message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns BuiltImage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.devtools.cloudbuild.v1.BuiltImage;

                    /**
                     * Decodes a BuiltImage message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns BuiltImage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.devtools.cloudbuild.v1.BuiltImage;

                    /**
                     * Verifies a BuiltImage message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a BuiltImage message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns BuiltImage
                     */
                    public static fromObject(object: { [k: string]: any }): google.devtools.cloudbuild.v1.BuiltImage;

                    /**
                     * Creates a plain object from a BuiltImage message. Also converts values to other types if specified.
                     * @param message BuiltImage
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.devtools.cloudbuild.v1.BuiltImage, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this BuiltImage to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a BuildStep. */
                interface IBuildStep {

                    /** BuildStep name */
                    name?: (string|null);

                    /** BuildStep env */
                    env?: (string[]|null);

                    /** BuildStep args */
                    args?: (string[]|null);

                    /** BuildStep dir */
                    dir?: (string|null);

                    /** BuildStep id */
                    id?: (string|null);

                    /** BuildStep waitFor */
                    waitFor?: (string[]|null);

                    /** BuildStep entrypoint */
                    entrypoint?: (string|null);

                    /** BuildStep secretEnv */
                    secretEnv?: (string[]|null);

                    /** BuildStep volumes */
                    volumes?: (google.devtools.cloudbuild.v1.IVolume[]|null);

                    /** BuildStep timing */
                    timing?: (google.devtools.cloudbuild.v1.ITimeSpan|null);

                    /** BuildStep pullTiming */
                    pullTiming?: (google.devtools.cloudbuild.v1.ITimeSpan|null);

                    /** BuildStep timeout */
                    timeout?: (google.protobuf.IDuration|null);

                    /** BuildStep status */
                    status?: (google.devtools.cloudbuild.v1.Build.Status|keyof typeof google.devtools.cloudbuild.v1.Build.Status|null);

                    /** BuildStep script */
                    script?: (string|null);
                }

                /** Represents a BuildStep. */
                class BuildStep implements IBuildStep {

                    /**
                     * Constructs a new BuildStep.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.devtools.cloudbuild.v1.IBuildStep);

                    /** BuildStep name. */
                    public name: string;

                    /** BuildStep env. */
                    public env: string[];

                    /** BuildStep args. */
                    public args: string[];

                    /** BuildStep dir. */
                    public dir: string;

                    /** BuildStep id. */
                    public id: string;

                    /** BuildStep waitFor. */
                    public waitFor: string[];

                    /** BuildStep entrypoint. */
                    public entrypoint: string;

                    /** BuildStep secretEnv. */
                    public secretEnv: string[];

                    /** BuildStep volumes. */
                    public volumes: google.devtools.cloudbuild.v1.IVolume[];

                    /** BuildStep timing. */
                    public timing?: (google.devtools.cloudbuild.v1.ITimeSpan|null);

                    /** BuildStep pullTiming. */
                    public pullTiming?: (google.devtools.cloudbuild.v1.ITimeSpan|null);

                    /** BuildStep timeout. */
                    public timeout?: (google.protobuf.IDuration|null);

                    /** BuildStep status. */
                    public status: (google.devtools.cloudbuild.v1.Build.Status|keyof typeof google.devtools.cloudbuild.v1.Build.Status);

                    /** BuildStep script. */
                    public script: string;

                    /**
                     * Creates a new BuildStep instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns BuildStep instance
                     */
                    public static create(properties?: google.devtools.cloudbuild.v1.IBuildStep): google.devtools.cloudbuild.v1.BuildStep;

                    /**
                     * Encodes the specified BuildStep message. Does not implicitly {@link google.devtools.cloudbuild.v1.BuildStep.verify|verify} messages.
                     * @param message BuildStep message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.devtools.cloudbuild.v1.IBuildStep, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified BuildStep message, length delimited. Does not implicitly {@link google.devtools.cloudbuild.v1.BuildStep.verify|verify} messages.
                     * @param message BuildStep message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.devtools.cloudbuild.v1.IBuildStep, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a BuildStep message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns BuildStep
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.devtools.cloudbuild.v1.BuildStep;

                    /**
                     * Decodes a BuildStep message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns BuildStep
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.devtools.cloudbuild.v1.BuildStep;

                    /**
                     * Verifies a BuildStep message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a BuildStep message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns BuildStep
                     */
                    public static fromObject(object: { [k: string]: any }): google.devtools.cloudbuild.v1.BuildStep;

                    /**
                     * Creates a plain object from a BuildStep message. Also converts values to other types if specified.
                     * @param message BuildStep
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.devtools.cloudbuild.v1.BuildStep, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this BuildStep to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a Volume. */
                interface IVolume {

                    /** Volume name */
                    name?: (string|null);

                    /** Volume path */
                    path?: (string|null);
                }

                /** Represents a Volume. */
                class Volume implements IVolume {

                    /**
                     * Constructs a new Volume.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.devtools.cloudbuild.v1.IVolume);

                    /** Volume name. */
                    public name: string;

                    /** Volume path. */
                    public path: string;

                    /**
                     * Creates a new Volume instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Volume instance
                     */
                    public static create(properties?: google.devtools.cloudbuild.v1.IVolume): google.devtools.cloudbuild.v1.Volume;

                    /**
                     * Encodes the specified Volume message. Does not implicitly {@link google.devtools.cloudbuild.v1.Volume.verify|verify} messages.
                     * @param message Volume message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.devtools.cloudbuild.v1.IVolume, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Volume message, length delimited. Does not implicitly {@link google.devtools.cloudbuild.v1.Volume.verify|verify} messages.
                     * @param message Volume message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.devtools.cloudbuild.v1.IVolume, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Volume message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Volume
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.devtools.cloudbuild.v1.Volume;

                    /**
                     * Decodes a Volume message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Volume
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.devtools.cloudbuild.v1.Volume;

                    /**
                     * Verifies a Volume message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Volume message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Volume
                     */
                    public static fromObject(object: { [k: string]: any }): google.devtools.cloudbuild.v1.Volume;

                    /**
                     * Creates a plain object from a Volume message. Also converts values to other types if specified.
                     * @param message Volume
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.devtools.cloudbuild.v1.Volume, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Volume to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a Results. */
                interface IResults {

                    /** Results images */
                    images?: (google.devtools.cloudbuild.v1.IBuiltImage[]|null);

                    /** Results buildStepImages */
                    buildStepImages?: (string[]|null);

                    /** Results artifactManifest */
                    artifactManifest?: (string|null);

                    /** Results numArtifacts */
                    numArtifacts?: (number|Long|string|null);

                    /** Results buildStepOutputs */
                    buildStepOutputs?: (Uint8Array[]|null);

                    /** Results artifactTiming */
                    artifactTiming?: (google.devtools.cloudbuild.v1.ITimeSpan|null);
                }

                /** Represents a Results. */
                class Results implements IResults {

                    /**
                     * Constructs a new Results.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.devtools.cloudbuild.v1.IResults);

                    /** Results images. */
                    public images: google.devtools.cloudbuild.v1.IBuiltImage[];

                    /** Results buildStepImages. */
                    public buildStepImages: string[];

                    /** Results artifactManifest. */
                    public artifactManifest: string;

                    /** Results numArtifacts. */
                    public numArtifacts: (number|Long|string);

                    /** Results buildStepOutputs. */
                    public buildStepOutputs: Uint8Array[];

                    /** Results artifactTiming. */
                    public artifactTiming?: (google.devtools.cloudbuild.v1.ITimeSpan|null);

                    /**
                     * Creates a new Results instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Results instance
                     */
                    public static create(properties?: google.devtools.cloudbuild.v1.IResults): google.devtools.cloudbuild.v1.Results;

                    /**
                     * Encodes the specified Results message. Does not implicitly {@link google.devtools.cloudbuild.v1.Results.verify|verify} messages.
                     * @param message Results message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.devtools.cloudbuild.v1.IResults, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Results message, length delimited. Does not implicitly {@link google.devtools.cloudbuild.v1.Results.verify|verify} messages.
                     * @param message Results message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.devtools.cloudbuild.v1.IResults, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Results message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Results
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.devtools.cloudbuild.v1.Results;

                    /**
                     * Decodes a Results message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Results
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.devtools.cloudbuild.v1.Results;

                    /**
                     * Verifies a Results message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Results message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Results
                     */
                    public static fromObject(object: { [k: string]: any }): google.devtools.cloudbuild.v1.Results;

                    /**
                     * Creates a plain object from a Results message. Also converts values to other types if specified.
                     * @param message Results
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.devtools.cloudbuild.v1.Results, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Results to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an ArtifactResult. */
                interface IArtifactResult {

                    /** ArtifactResult location */
                    location?: (string|null);

                    /** ArtifactResult fileHash */
                    fileHash?: (google.devtools.cloudbuild.v1.IFileHashes[]|null);
                }

                /** Represents an ArtifactResult. */
                class ArtifactResult implements IArtifactResult {

                    /**
                     * Constructs a new ArtifactResult.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.devtools.cloudbuild.v1.IArtifactResult);

                    /** ArtifactResult location. */
                    public location: string;

                    /** ArtifactResult fileHash. */
                    public fileHash: google.devtools.cloudbuild.v1.IFileHashes[];

                    /**
                     * Creates a new ArtifactResult instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ArtifactResult instance
                     */
                    public static create(properties?: google.devtools.cloudbuild.v1.IArtifactResult): google.devtools.cloudbuild.v1.ArtifactResult;

                    /**
                     * Encodes the specified ArtifactResult message. Does not implicitly {@link google.devtools.cloudbuild.v1.ArtifactResult.verify|verify} messages.
                     * @param message ArtifactResult message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.devtools.cloudbuild.v1.IArtifactResult, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ArtifactResult message, length delimited. Does not implicitly {@link google.devtools.cloudbuild.v1.ArtifactResult.verify|verify} messages.
                     * @param message ArtifactResult message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.devtools.cloudbuild.v1.IArtifactResult, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ArtifactResult message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ArtifactResult
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.devtools.cloudbuild.v1.ArtifactResult;

                    /**
                     * Decodes an ArtifactResult message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ArtifactResult
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.devtools.cloudbuild.v1.ArtifactResult;

                    /**
                     * Verifies an ArtifactResult message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ArtifactResult message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ArtifactResult
                     */
                    public static fromObject(object: { [k: string]: any }): google.devtools.cloudbuild.v1.ArtifactResult;

                    /**
                     * Creates a plain object from an ArtifactResult message. Also converts values to other types if specified.
                     * @param message ArtifactResult
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.devtools.cloudbuild.v1.ArtifactResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ArtifactResult to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a Build. */
                interface IBuild {

                    /** Build name */
                    name?: (string|null);

                    /** Build id */
                    id?: (string|null);

                    /** Build projectId */
                    projectId?: (string|null);

                    /** Build status */
                    status?: (google.devtools.cloudbuild.v1.Build.Status|keyof typeof google.devtools.cloudbuild.v1.Build.Status|null);

                    /** Build statusDetail */
                    statusDetail?: (string|null);

                    /** Build source */
                    source?: (google.devtools.cloudbuild.v1.ISource|null);

                    /** Build steps */
                    steps?: (google.devtools.cloudbuild.v1.IBuildStep[]|null);

                    /** Build results */
                    results?: (google.devtools.cloudbuild.v1.IResults|null);

                    /** Build createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** Build startTime */
                    startTime?: (google.protobuf.ITimestamp|null);

                    /** Build finishTime */
                    finishTime?: (google.protobuf.ITimestamp|null);

                    /** Build timeout */
                    timeout?: (google.protobuf.IDuration|null);

                    /** Build images */
                    images?: (string[]|null);

                    /** Build queueTtl */
                    queueTtl?: (google.protobuf.IDuration|null);

                    /** Build artifacts */
                    artifacts?: (google.devtools.cloudbuild.v1.IArtifacts|null);

                    /** Build logsBucket */
                    logsBucket?: (string|null);

                    /** Build sourceProvenance */
                    sourceProvenance?: (google.devtools.cloudbuild.v1.ISourceProvenance|null);

                    /** Build buildTriggerId */
                    buildTriggerId?: (string|null);

                    /** Build options */
                    options?: (google.devtools.cloudbuild.v1.IBuildOptions|null);

                    /** Build logUrl */
                    logUrl?: (string|null);

                    /** Build substitutions */
                    substitutions?: ({ [k: string]: string }|null);

                    /** Build tags */
                    tags?: (string[]|null);

                    /** Build secrets */
                    secrets?: (google.devtools.cloudbuild.v1.ISecret[]|null);

                    /** Build timing */
                    timing?: ({ [k: string]: google.devtools.cloudbuild.v1.ITimeSpan }|null);

                    /** Build approval */
                    approval?: (google.devtools.cloudbuild.v1.IBuildApproval|null);

                    /** Build serviceAccount */
                    serviceAccount?: (string|null);

                    /** Build availableSecrets */
                    availableSecrets?: (google.devtools.cloudbuild.v1.ISecrets|null);

                    /** Build warnings */
                    warnings?: (google.devtools.cloudbuild.v1.Build.IWarning[]|null);

                    /** Build failureInfo */
                    failureInfo?: (google.devtools.cloudbuild.v1.Build.IFailureInfo|null);
                }

                /** Represents a Build. */
                class Build implements IBuild {

                    /**
                     * Constructs a new Build.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.devtools.cloudbuild.v1.IBuild);

                    /** Build name. */
                    public name: string;

                    /** Build id. */
                    public id: string;

                    /** Build projectId. */
                    public projectId: string;

                    /** Build status. */
                    public status: (google.devtools.cloudbuild.v1.Build.Status|keyof typeof google.devtools.cloudbuild.v1.Build.Status);

                    /** Build statusDetail. */
                    public statusDetail: string;

                    /** Build source. */
                    public source?: (google.devtools.cloudbuild.v1.ISource|null);

                    /** Build steps. */
                    public steps: google.devtools.cloudbuild.v1.IBuildStep[];

                    /** Build results. */
                    public results?: (google.devtools.cloudbuild.v1.IResults|null);

                    /** Build createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** Build startTime. */
                    public startTime?: (google.protobuf.ITimestamp|null);

                    /** Build finishTime. */
                    public finishTime?: (google.protobuf.ITimestamp|null);

                    /** Build timeout. */
                    public timeout?: (google.protobuf.IDuration|null);

                    /** Build images. */
                    public images: string[];

                    /** Build queueTtl. */
                    public queueTtl?: (google.protobuf.IDuration|null);

                    /** Build artifacts. */
                    public artifacts?: (google.devtools.cloudbuild.v1.IArtifacts|null);

                    /** Build logsBucket. */
                    public logsBucket: string;

                    /** Build sourceProvenance. */
                    public sourceProvenance?: (google.devtools.cloudbuild.v1.ISourceProvenance|null);

                    /** Build buildTriggerId. */
                    public buildTriggerId: string;

                    /** Build options. */
                    public options?: (google.devtools.cloudbuild.v1.IBuildOptions|null);

                    /** Build logUrl. */
                    public logUrl: string;

                    /** Build substitutions. */
                    public substitutions: { [k: string]: string };

                    /** Build tags. */
                    public tags: string[];

                    /** Build secrets. */
                    public secrets: google.devtools.cloudbuild.v1.ISecret[];

                    /** Build timing. */
                    public timing: { [k: string]: google.devtools.cloudbuild.v1.ITimeSpan };

                    /** Build approval. */
                    public approval?: (google.devtools.cloudbuild.v1.IBuildApproval|null);

                    /** Build serviceAccount. */
                    public serviceAccount: string;

                    /** Build availableSecrets. */
                    public availableSecrets?: (google.devtools.cloudbuild.v1.ISecrets|null);

                    /** Build warnings. */
                    public warnings: google.devtools.cloudbuild.v1.Build.IWarning[];

                    /** Build failureInfo. */
                    public failureInfo?: (google.devtools.cloudbuild.v1.Build.IFailureInfo|null);

                    /**
                     * Creates a new Build instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Build instance
                     */
                    public static create(properties?: google.devtools.cloudbuild.v1.IBuild): google.devtools.cloudbuild.v1.Build;

                    /**
                     * Encodes the specified Build message. Does not implicitly {@link google.devtools.cloudbuild.v1.Build.verify|verify} messages.
                     * @param message Build message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.devtools.cloudbuild.v1.IBuild, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Build message, length delimited. Does not implicitly {@link google.devtools.cloudbuild.v1.Build.verify|verify} messages.
                     * @param message Build message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.devtools.cloudbuild.v1.IBuild, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Build message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Build
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.devtools.cloudbuild.v1.Build;

                    /**
                     * Decodes a Build message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Build
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.devtools.cloudbuild.v1.Build;

                    /**
                     * Verifies a Build message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Build message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Build
                     */
                    public static fromObject(object: { [k: string]: any }): google.devtools.cloudbuild.v1.Build;

                    /**
                     * Creates a plain object from a Build message. Also converts values to other types if specified.
                     * @param message Build
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.devtools.cloudbuild.v1.Build, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Build to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace Build {

                    /** Properties of a Warning. */
                    interface IWarning {

                        /** Warning text */
                        text?: (string|null);

                        /** Warning priority */
                        priority?: (google.devtools.cloudbuild.v1.Build.Warning.Priority|keyof typeof google.devtools.cloudbuild.v1.Build.Warning.Priority|null);
                    }

                    /** Represents a Warning. */
                    class Warning implements IWarning {

                        /**
                         * Constructs a new Warning.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.devtools.cloudbuild.v1.Build.IWarning);

                        /** Warning text. */
                        public text: string;

                        /** Warning priority. */
                        public priority: (google.devtools.cloudbuild.v1.Build.Warning.Priority|keyof typeof google.devtools.cloudbuild.v1.Build.Warning.Priority);

                        /**
                         * Creates a new Warning instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Warning instance
                         */
                        public static create(properties?: google.devtools.cloudbuild.v1.Build.IWarning): google.devtools.cloudbuild.v1.Build.Warning;

                        /**
                         * Encodes the specified Warning message. Does not implicitly {@link google.devtools.cloudbuild.v1.Build.Warning.verify|verify} messages.
                         * @param message Warning message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.devtools.cloudbuild.v1.Build.IWarning, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Warning message, length delimited. Does not implicitly {@link google.devtools.cloudbuild.v1.Build.Warning.verify|verify} messages.
                         * @param message Warning message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.devtools.cloudbuild.v1.Build.IWarning, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Warning message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Warning
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.devtools.cloudbuild.v1.Build.Warning;

                        /**
                         * Decodes a Warning message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Warning
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.devtools.cloudbuild.v1.Build.Warning;

                        /**
                         * Verifies a Warning message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Warning message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Warning
                         */
                        public static fromObject(object: { [k: string]: any }): google.devtools.cloudbuild.v1.Build.Warning;

                        /**
                         * Creates a plain object from a Warning message. Also converts values to other types if specified.
                         * @param message Warning
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.devtools.cloudbuild.v1.Build.Warning, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Warning to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    namespace Warning {

                        /** Priority enum. */
                        enum Priority {
                            PRIORITY_UNSPECIFIED = 0,
                            INFO = 1,
                            WARNING = 2,
                            ALERT = 3
                        }
                    }

                    /** Properties of a FailureInfo. */
                    interface IFailureInfo {

                        /** FailureInfo type */
                        type?: (google.devtools.cloudbuild.v1.Build.FailureInfo.FailureType|keyof typeof google.devtools.cloudbuild.v1.Build.FailureInfo.FailureType|null);

                        /** FailureInfo detail */
                        detail?: (string|null);
                    }

                    /** Represents a FailureInfo. */
                    class FailureInfo implements IFailureInfo {

                        /**
                         * Constructs a new FailureInfo.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.devtools.cloudbuild.v1.Build.IFailureInfo);

                        /** FailureInfo type. */
                        public type: (google.devtools.cloudbuild.v1.Build.FailureInfo.FailureType|keyof typeof google.devtools.cloudbuild.v1.Build.FailureInfo.FailureType);

                        /** FailureInfo detail. */
                        public detail: string;

                        /**
                         * Creates a new FailureInfo instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns FailureInfo instance
                         */
                        public static create(properties?: google.devtools.cloudbuild.v1.Build.IFailureInfo): google.devtools.cloudbuild.v1.Build.FailureInfo;

                        /**
                         * Encodes the specified FailureInfo message. Does not implicitly {@link google.devtools.cloudbuild.v1.Build.FailureInfo.verify|verify} messages.
                         * @param message FailureInfo message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.devtools.cloudbuild.v1.Build.IFailureInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified FailureInfo message, length delimited. Does not implicitly {@link google.devtools.cloudbuild.v1.Build.FailureInfo.verify|verify} messages.
                         * @param message FailureInfo message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.devtools.cloudbuild.v1.Build.IFailureInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a FailureInfo message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns FailureInfo
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.devtools.cloudbuild.v1.Build.FailureInfo;

                        /**
                         * Decodes a FailureInfo message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns FailureInfo
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.devtools.cloudbuild.v1.Build.FailureInfo;

                        /**
                         * Verifies a FailureInfo message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a FailureInfo message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns FailureInfo
                         */
                        public static fromObject(object: { [k: string]: any }): google.devtools.cloudbuild.v1.Build.FailureInfo;

                        /**
                         * Creates a plain object from a FailureInfo message. Also converts values to other types if specified.
                         * @param message FailureInfo
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.devtools.cloudbuild.v1.Build.FailureInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this FailureInfo to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    namespace FailureInfo {

                        /** FailureType enum. */
                        enum FailureType {
                            FAILURE_TYPE_UNSPECIFIED = 0,
                            PUSH_FAILED = 1,
                            PUSH_IMAGE_NOT_FOUND = 2,
                            PUSH_NOT_AUTHORIZED = 3,
                            LOGGING_FAILURE = 4,
                            USER_BUILD_STEP = 5,
                            FETCH_SOURCE_FAILED = 6
                        }
                    }

                    /** Status enum. */
                    enum Status {
                        STATUS_UNKNOWN = 0,
                        PENDING = 10,
                        QUEUED = 1,
                        WORKING = 2,
                        SUCCESS = 3,
                        FAILURE = 4,
                        INTERNAL_ERROR = 5,
                        TIMEOUT = 6,
                        CANCELLED = 7,
                        EXPIRED = 9
                    }
                }

                /** Properties of an Artifacts. */
                interface IArtifacts {

                    /** Artifacts images */
                    images?: (string[]|null);

                    /** Artifacts objects */
                    objects?: (google.devtools.cloudbuild.v1.Artifacts.IArtifactObjects|null);
                }

                /** Represents an Artifacts. */
                class Artifacts implements IArtifacts {

                    /**
                     * Constructs a new Artifacts.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.devtools.cloudbuild.v1.IArtifacts);

                    /** Artifacts images. */
                    public images: string[];

                    /** Artifacts objects. */
                    public objects?: (google.devtools.cloudbuild.v1.Artifacts.IArtifactObjects|null);

                    /**
                     * Creates a new Artifacts instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Artifacts instance
                     */
                    public static create(properties?: google.devtools.cloudbuild.v1.IArtifacts): google.devtools.cloudbuild.v1.Artifacts;

                    /**
                     * Encodes the specified Artifacts message. Does not implicitly {@link google.devtools.cloudbuild.v1.Artifacts.verify|verify} messages.
                     * @param message Artifacts message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.devtools.cloudbuild.v1.IArtifacts, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Artifacts message, length delimited. Does not implicitly {@link google.devtools.cloudbuild.v1.Artifacts.verify|verify} messages.
                     * @param message Artifacts message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.devtools.cloudbuild.v1.IArtifacts, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an Artifacts message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Artifacts
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.devtools.cloudbuild.v1.Artifacts;

                    /**
                     * Decodes an Artifacts message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Artifacts
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.devtools.cloudbuild.v1.Artifacts;

                    /**
                     * Verifies an Artifacts message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an Artifacts message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Artifacts
                     */
                    public static fromObject(object: { [k: string]: any }): google.devtools.cloudbuild.v1.Artifacts;

                    /**
                     * Creates a plain object from an Artifacts message. Also converts values to other types if specified.
                     * @param message Artifacts
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.devtools.cloudbuild.v1.Artifacts, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Artifacts to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace Artifacts {

                    /** Properties of an ArtifactObjects. */
                    interface IArtifactObjects {

                        /** ArtifactObjects location */
                        location?: (string|null);

                        /** ArtifactObjects paths */
                        paths?: (string[]|null);

                        /** ArtifactObjects timing */
                        timing?: (google.devtools.cloudbuild.v1.ITimeSpan|null);
                    }

                    /** Represents an ArtifactObjects. */
                    class ArtifactObjects implements IArtifactObjects {

                        /**
                         * Constructs a new ArtifactObjects.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.devtools.cloudbuild.v1.Artifacts.IArtifactObjects);

                        /** ArtifactObjects location. */
                        public location: string;

                        /** ArtifactObjects paths. */
                        public paths: string[];

                        /** ArtifactObjects timing. */
                        public timing?: (google.devtools.cloudbuild.v1.ITimeSpan|null);

                        /**
                         * Creates a new ArtifactObjects instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ArtifactObjects instance
                         */
                        public static create(properties?: google.devtools.cloudbuild.v1.Artifacts.IArtifactObjects): google.devtools.cloudbuild.v1.Artifacts.ArtifactObjects;

                        /**
                         * Encodes the specified ArtifactObjects message. Does not implicitly {@link google.devtools.cloudbuild.v1.Artifacts.ArtifactObjects.verify|verify} messages.
                         * @param message ArtifactObjects message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.devtools.cloudbuild.v1.Artifacts.IArtifactObjects, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ArtifactObjects message, length delimited. Does not implicitly {@link google.devtools.cloudbuild.v1.Artifacts.ArtifactObjects.verify|verify} messages.
                         * @param message ArtifactObjects message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.devtools.cloudbuild.v1.Artifacts.IArtifactObjects, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an ArtifactObjects message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ArtifactObjects
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.devtools.cloudbuild.v1.Artifacts.ArtifactObjects;

                        /**
                         * Decodes an ArtifactObjects message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ArtifactObjects
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.devtools.cloudbuild.v1.Artifacts.ArtifactObjects;

                        /**
                         * Verifies an ArtifactObjects message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an ArtifactObjects message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ArtifactObjects
                         */
                        public static fromObject(object: { [k: string]: any }): google.devtools.cloudbuild.v1.Artifacts.ArtifactObjects;

                        /**
                         * Creates a plain object from an ArtifactObjects message. Also converts values to other types if specified.
                         * @param message ArtifactObjects
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.devtools.cloudbuild.v1.Artifacts.ArtifactObjects, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ArtifactObjects to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }
                }

                /** Properties of a TimeSpan. */
                interface ITimeSpan {

                    /** TimeSpan startTime */
                    startTime?: (google.protobuf.ITimestamp|null);

                    /** TimeSpan endTime */
                    endTime?: (google.protobuf.ITimestamp|null);
                }

                /** Represents a TimeSpan. */
                class TimeSpan implements ITimeSpan {

                    /**
                     * Constructs a new TimeSpan.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.devtools.cloudbuild.v1.ITimeSpan);

                    /** TimeSpan startTime. */
                    public startTime?: (google.protobuf.ITimestamp|null);

                    /** TimeSpan endTime. */
                    public endTime?: (google.protobuf.ITimestamp|null);

                    /**
                     * Creates a new TimeSpan instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TimeSpan instance
                     */
                    public static create(properties?: google.devtools.cloudbuild.v1.ITimeSpan): google.devtools.cloudbuild.v1.TimeSpan;

                    /**
                     * Encodes the specified TimeSpan message. Does not implicitly {@link google.devtools.cloudbuild.v1.TimeSpan.verify|verify} messages.
                     * @param message TimeSpan message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.devtools.cloudbuild.v1.ITimeSpan, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TimeSpan message, length delimited. Does not implicitly {@link google.devtools.cloudbuild.v1.TimeSpan.verify|verify} messages.
                     * @param message TimeSpan message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.devtools.cloudbuild.v1.ITimeSpan, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TimeSpan message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TimeSpan
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.devtools.cloudbuild.v1.TimeSpan;

                    /**
                     * Decodes a TimeSpan message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TimeSpan
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.devtools.cloudbuild.v1.TimeSpan;

                    /**
                     * Verifies a TimeSpan message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TimeSpan message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TimeSpan
                     */
                    public static fromObject(object: { [k: string]: any }): google.devtools.cloudbuild.v1.TimeSpan;

                    /**
                     * Creates a plain object from a TimeSpan message. Also converts values to other types if specified.
                     * @param message TimeSpan
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.devtools.cloudbuild.v1.TimeSpan, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TimeSpan to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a BuildOperationMetadata. */
                interface IBuildOperationMetadata {

                    /** BuildOperationMetadata build */
                    build?: (google.devtools.cloudbuild.v1.IBuild|null);
                }

                /** Represents a BuildOperationMetadata. */
                class BuildOperationMetadata implements IBuildOperationMetadata {

                    /**
                     * Constructs a new BuildOperationMetadata.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.devtools.cloudbuild.v1.IBuildOperationMetadata);

                    /** BuildOperationMetadata build. */
                    public build?: (google.devtools.cloudbuild.v1.IBuild|null);

                    /**
                     * Creates a new BuildOperationMetadata instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns BuildOperationMetadata instance
                     */
                    public static create(properties?: google.devtools.cloudbuild.v1.IBuildOperationMetadata): google.devtools.cloudbuild.v1.BuildOperationMetadata;

                    /**
                     * Encodes the specified BuildOperationMetadata message. Does not implicitly {@link google.devtools.cloudbuild.v1.BuildOperationMetadata.verify|verify} messages.
                     * @param message BuildOperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.devtools.cloudbuild.v1.IBuildOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified BuildOperationMetadata message, length delimited. Does not implicitly {@link google.devtools.cloudbuild.v1.BuildOperationMetadata.verify|verify} messages.
                     * @param message BuildOperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.devtools.cloudbuild.v1.IBuildOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a BuildOperationMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns BuildOperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.devtools.cloudbuild.v1.BuildOperationMetadata;

                    /**
                     * Decodes a BuildOperationMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns BuildOperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.devtools.cloudbuild.v1.BuildOperationMetadata;

                    /**
                     * Verifies a BuildOperationMetadata message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a BuildOperationMetadata message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns BuildOperationMetadata
                     */
                    public static fromObject(object: { [k: string]: any }): google.devtools.cloudbuild.v1.BuildOperationMetadata;

                    /**
                     * Creates a plain object from a BuildOperationMetadata message. Also converts values to other types if specified.
                     * @param message BuildOperationMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.devtools.cloudbuild.v1.BuildOperationMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this BuildOperationMetadata to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a SourceProvenance. */
                interface ISourceProvenance {

                    /** SourceProvenance resolvedStorageSource */
                    resolvedStorageSource?: (google.devtools.cloudbuild.v1.IStorageSource|null);

                    /** SourceProvenance resolvedRepoSource */
                    resolvedRepoSource?: (google.devtools.cloudbuild.v1.IRepoSource|null);

                    /** SourceProvenance resolvedStorageSourceManifest */
                    resolvedStorageSourceManifest?: (google.devtools.cloudbuild.v1.IStorageSourceManifest|null);

                    /** SourceProvenance fileHashes */
                    fileHashes?: ({ [k: string]: google.devtools.cloudbuild.v1.IFileHashes }|null);
                }

                /** Represents a SourceProvenance. */
                class SourceProvenance implements ISourceProvenance {

                    /**
                     * Constructs a new SourceProvenance.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.devtools.cloudbuild.v1.ISourceProvenance);

                    /** SourceProvenance resolvedStorageSource. */
                    public resolvedStorageSource?: (google.devtools.cloudbuild.v1.IStorageSource|null);

                    /** SourceProvenance resolvedRepoSource. */
                    public resolvedRepoSource?: (google.devtools.cloudbuild.v1.IRepoSource|null);

                    /** SourceProvenance resolvedStorageSourceManifest. */
                    public resolvedStorageSourceManifest?: (google.devtools.cloudbuild.v1.IStorageSourceManifest|null);

                    /** SourceProvenance fileHashes. */
                    public fileHashes: { [k: string]: google.devtools.cloudbuild.v1.IFileHashes };

                    /**
                     * Creates a new SourceProvenance instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SourceProvenance instance
                     */
                    public static create(properties?: google.devtools.cloudbuild.v1.ISourceProvenance): google.devtools.cloudbuild.v1.SourceProvenance;

                    /**
                     * Encodes the specified SourceProvenance message. Does not implicitly {@link google.devtools.cloudbuild.v1.SourceProvenance.verify|verify} messages.
                     * @param message SourceProvenance message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.devtools.cloudbuild.v1.ISourceProvenance, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SourceProvenance message, length delimited. Does not implicitly {@link google.devtools.cloudbuild.v1.SourceProvenance.verify|verify} messages.
                     * @param message SourceProvenance message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.devtools.cloudbuild.v1.ISourceProvenance, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SourceProvenance message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SourceProvenance
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.devtools.cloudbuild.v1.SourceProvenance;

                    /**
                     * Decodes a SourceProvenance message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SourceProvenance
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.devtools.cloudbuild.v1.SourceProvenance;

                    /**
                     * Verifies a SourceProvenance message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SourceProvenance message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SourceProvenance
                     */
                    public static fromObject(object: { [k: string]: any }): google.devtools.cloudbuild.v1.SourceProvenance;

                    /**
                     * Creates a plain object from a SourceProvenance message. Also converts values to other types if specified.
                     * @param message SourceProvenance
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.devtools.cloudbuild.v1.SourceProvenance, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SourceProvenance to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a FileHashes. */
                interface IFileHashes {

                    /** FileHashes fileHash */
                    fileHash?: (google.devtools.cloudbuild.v1.IHash[]|null);
                }

                /** Represents a FileHashes. */
                class FileHashes implements IFileHashes {

                    /**
                     * Constructs a new FileHashes.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.devtools.cloudbuild.v1.IFileHashes);

                    /** FileHashes fileHash. */
                    public fileHash: google.devtools.cloudbuild.v1.IHash[];

                    /**
                     * Creates a new FileHashes instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns FileHashes instance
                     */
                    public static create(properties?: google.devtools.cloudbuild.v1.IFileHashes): google.devtools.cloudbuild.v1.FileHashes;

                    /**
                     * Encodes the specified FileHashes message. Does not implicitly {@link google.devtools.cloudbuild.v1.FileHashes.verify|verify} messages.
                     * @param message FileHashes message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.devtools.cloudbuild.v1.IFileHashes, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified FileHashes message, length delimited. Does not implicitly {@link google.devtools.cloudbuild.v1.FileHashes.verify|verify} messages.
                     * @param message FileHashes message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.devtools.cloudbuild.v1.IFileHashes, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a FileHashes message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns FileHashes
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.devtools.cloudbuild.v1.FileHashes;

                    /**
                     * Decodes a FileHashes message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns FileHashes
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.devtools.cloudbuild.v1.FileHashes;

                    /**
                     * Verifies a FileHashes message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a FileHashes message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns FileHashes
                     */
                    public static fromObject(object: { [k: string]: any }): google.devtools.cloudbuild.v1.FileHashes;

                    /**
                     * Creates a plain object from a FileHashes message. Also converts values to other types if specified.
                     * @param message FileHashes
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.devtools.cloudbuild.v1.FileHashes, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this FileHashes to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a Hash. */
                interface IHash {

                    /** Hash type */
                    type?: (google.devtools.cloudbuild.v1.Hash.HashType|keyof typeof google.devtools.cloudbuild.v1.Hash.HashType|null);

                    /** Hash value */
                    value?: (Uint8Array|string|null);
                }

                /** Represents a Hash. */
                class Hash implements IHash {

                    /**
                     * Constructs a new Hash.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.devtools.cloudbuild.v1.IHash);

                    /** Hash type. */
                    public type: (google.devtools.cloudbuild.v1.Hash.HashType|keyof typeof google.devtools.cloudbuild.v1.Hash.HashType);

                    /** Hash value. */
                    public value: (Uint8Array|string);

                    /**
                     * Creates a new Hash instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Hash instance
                     */
                    public static create(properties?: google.devtools.cloudbuild.v1.IHash): google.devtools.cloudbuild.v1.Hash;

                    /**
                     * Encodes the specified Hash message. Does not implicitly {@link google.devtools.cloudbuild.v1.Hash.verify|verify} messages.
                     * @param message Hash message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.devtools.cloudbuild.v1.IHash, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Hash message, length delimited. Does not implicitly {@link google.devtools.cloudbuild.v1.Hash.verify|verify} messages.
                     * @param message Hash message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.devtools.cloudbuild.v1.IHash, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Hash message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Hash
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.devtools.cloudbuild.v1.Hash;

                    /**
                     * Decodes a Hash message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Hash
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.devtools.cloudbuild.v1.Hash;

                    /**
                     * Verifies a Hash message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Hash message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Hash
                     */
                    public static fromObject(object: { [k: string]: any }): google.devtools.cloudbuild.v1.Hash;

                    /**
                     * Creates a plain object from a Hash message. Also converts values to other types if specified.
                     * @param message Hash
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.devtools.cloudbuild.v1.Hash, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Hash to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace Hash {

                    /** HashType enum. */
                    enum HashType {
                        NONE = 0,
                        SHA256 = 1,
                        MD5 = 2
                    }
                }

                /** Properties of a Secrets. */
                interface ISecrets {

                    /** Secrets secretManager */
                    secretManager?: (google.devtools.cloudbuild.v1.ISecretManagerSecret[]|null);

                    /** Secrets inline */
                    inline?: (google.devtools.cloudbuild.v1.IInlineSecret[]|null);
                }

                /** Represents a Secrets. */
                class Secrets implements ISecrets {

                    /**
                     * Constructs a new Secrets.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.devtools.cloudbuild.v1.ISecrets);

                    /** Secrets secretManager. */
                    public secretManager: google.devtools.cloudbuild.v1.ISecretManagerSecret[];

                    /** Secrets inline. */
                    public inline: google.devtools.cloudbuild.v1.IInlineSecret[];

                    /**
                     * Creates a new Secrets instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Secrets instance
                     */
                    public static create(properties?: google.devtools.cloudbuild.v1.ISecrets): google.devtools.cloudbuild.v1.Secrets;

                    /**
                     * Encodes the specified Secrets message. Does not implicitly {@link google.devtools.cloudbuild.v1.Secrets.verify|verify} messages.
                     * @param message Secrets message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.devtools.cloudbuild.v1.ISecrets, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Secrets message, length delimited. Does not implicitly {@link google.devtools.cloudbuild.v1.Secrets.verify|verify} messages.
                     * @param message Secrets message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.devtools.cloudbuild.v1.ISecrets, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Secrets message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Secrets
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.devtools.cloudbuild.v1.Secrets;

                    /**
                     * Decodes a Secrets message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Secrets
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.devtools.cloudbuild.v1.Secrets;

                    /**
                     * Verifies a Secrets message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Secrets message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Secrets
                     */
                    public static fromObject(object: { [k: string]: any }): google.devtools.cloudbuild.v1.Secrets;

                    /**
                     * Creates a plain object from a Secrets message. Also converts values to other types if specified.
                     * @param message Secrets
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.devtools.cloudbuild.v1.Secrets, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Secrets to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an InlineSecret. */
                interface IInlineSecret {

                    /** InlineSecret kmsKeyName */
                    kmsKeyName?: (string|null);

                    /** InlineSecret envMap */
                    envMap?: ({ [k: string]: Uint8Array }|null);
                }

                /** Represents an InlineSecret. */
                class InlineSecret implements IInlineSecret {

                    /**
                     * Constructs a new InlineSecret.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.devtools.cloudbuild.v1.IInlineSecret);

                    /** InlineSecret kmsKeyName. */
                    public kmsKeyName: string;

                    /** InlineSecret envMap. */
                    public envMap: { [k: string]: Uint8Array };

                    /**
                     * Creates a new InlineSecret instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns InlineSecret instance
                     */
                    public static create(properties?: google.devtools.cloudbuild.v1.IInlineSecret): google.devtools.cloudbuild.v1.InlineSecret;

                    /**
                     * Encodes the specified InlineSecret message. Does not implicitly {@link google.devtools.cloudbuild.v1.InlineSecret.verify|verify} messages.
                     * @param message InlineSecret message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.devtools.cloudbuild.v1.IInlineSecret, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified InlineSecret message, length delimited. Does not implicitly {@link google.devtools.cloudbuild.v1.InlineSecret.verify|verify} messages.
                     * @param message InlineSecret message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.devtools.cloudbuild.v1.IInlineSecret, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an InlineSecret message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns InlineSecret
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.devtools.cloudbuild.v1.InlineSecret;

                    /**
                     * Decodes an InlineSecret message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns InlineSecret
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.devtools.cloudbuild.v1.InlineSecret;

                    /**
                     * Verifies an InlineSecret message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an InlineSecret message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns InlineSecret
                     */
                    public static fromObject(object: { [k: string]: any }): google.devtools.cloudbuild.v1.InlineSecret;

                    /**
                     * Creates a plain object from an InlineSecret message. Also converts values to other types if specified.
                     * @param message InlineSecret
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.devtools.cloudbuild.v1.InlineSecret, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this InlineSecret to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a SecretManagerSecret. */
                interface ISecretManagerSecret {

                    /** SecretManagerSecret versionName */
                    versionName?: (string|null);

                    /** SecretManagerSecret env */
                    env?: (string|null);
                }

                /** Represents a SecretManagerSecret. */
                class SecretManagerSecret implements ISecretManagerSecret {

                    /**
                     * Constructs a new SecretManagerSecret.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.devtools.cloudbuild.v1.ISecretManagerSecret);

                    /** SecretManagerSecret versionName. */
                    public versionName: string;

                    /** SecretManagerSecret env. */
                    public env: string;

                    /**
                     * Creates a new SecretManagerSecret instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SecretManagerSecret instance
                     */
                    public static create(properties?: google.devtools.cloudbuild.v1.ISecretManagerSecret): google.devtools.cloudbuild.v1.SecretManagerSecret;

                    /**
                     * Encodes the specified SecretManagerSecret message. Does not implicitly {@link google.devtools.cloudbuild.v1.SecretManagerSecret.verify|verify} messages.
                     * @param message SecretManagerSecret message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.devtools.cloudbuild.v1.ISecretManagerSecret, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SecretManagerSecret message, length delimited. Does not implicitly {@link google.devtools.cloudbuild.v1.SecretManagerSecret.verify|verify} messages.
                     * @param message SecretManagerSecret message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.devtools.cloudbuild.v1.ISecretManagerSecret, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SecretManagerSecret message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SecretManagerSecret
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.devtools.cloudbuild.v1.SecretManagerSecret;

                    /**
                     * Decodes a SecretManagerSecret message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SecretManagerSecret
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.devtools.cloudbuild.v1.SecretManagerSecret;

                    /**
                     * Verifies a SecretManagerSecret message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SecretManagerSecret message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SecretManagerSecret
                     */
                    public static fromObject(object: { [k: string]: any }): google.devtools.cloudbuild.v1.SecretManagerSecret;

                    /**
                     * Creates a plain object from a SecretManagerSecret message. Also converts values to other types if specified.
                     * @param message SecretManagerSecret
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.devtools.cloudbuild.v1.SecretManagerSecret, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SecretManagerSecret to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a Secret. */
                interface ISecret {

                    /** Secret kmsKeyName */
                    kmsKeyName?: (string|null);

                    /** Secret secretEnv */
                    secretEnv?: ({ [k: string]: Uint8Array }|null);
                }

                /** Represents a Secret. */
                class Secret implements ISecret {

                    /**
                     * Constructs a new Secret.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.devtools.cloudbuild.v1.ISecret);

                    /** Secret kmsKeyName. */
                    public kmsKeyName: string;

                    /** Secret secretEnv. */
                    public secretEnv: { [k: string]: Uint8Array };

                    /**
                     * Creates a new Secret instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Secret instance
                     */
                    public static create(properties?: google.devtools.cloudbuild.v1.ISecret): google.devtools.cloudbuild.v1.Secret;

                    /**
                     * Encodes the specified Secret message. Does not implicitly {@link google.devtools.cloudbuild.v1.Secret.verify|verify} messages.
                     * @param message Secret message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.devtools.cloudbuild.v1.ISecret, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Secret message, length delimited. Does not implicitly {@link google.devtools.cloudbuild.v1.Secret.verify|verify} messages.
                     * @param message Secret message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.devtools.cloudbuild.v1.ISecret, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Secret message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Secret
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.devtools.cloudbuild.v1.Secret;

                    /**
                     * Decodes a Secret message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Secret
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.devtools.cloudbuild.v1.Secret;

                    /**
                     * Verifies a Secret message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Secret message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Secret
                     */
                    public static fromObject(object: { [k: string]: any }): google.devtools.cloudbuild.v1.Secret;

                    /**
                     * Creates a plain object from a Secret message. Also converts values to other types if specified.
                     * @param message Secret
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.devtools.cloudbuild.v1.Secret, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Secret to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a CreateBuildRequest. */
                interface ICreateBuildRequest {

                    /** CreateBuildRequest parent */
                    parent?: (string|null);

                    /** CreateBuildRequest projectId */
                    projectId?: (string|null);

                    /** CreateBuildRequest build */
                    build?: (google.devtools.cloudbuild.v1.IBuild|null);
                }

                /** Represents a CreateBuildRequest. */
                class CreateBuildRequest implements ICreateBuildRequest {

                    /**
                     * Constructs a new CreateBuildRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.devtools.cloudbuild.v1.ICreateBuildRequest);

                    /** CreateBuildRequest parent. */
                    public parent: string;

                    /** CreateBuildRequest projectId. */
                    public projectId: string;

                    /** CreateBuildRequest build. */
                    public build?: (google.devtools.cloudbuild.v1.IBuild|null);

                    /**
                     * Creates a new CreateBuildRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateBuildRequest instance
                     */
                    public static create(properties?: google.devtools.cloudbuild.v1.ICreateBuildRequest): google.devtools.cloudbuild.v1.CreateBuildRequest;

                    /**
                     * Encodes the specified CreateBuildRequest message. Does not implicitly {@link google.devtools.cloudbuild.v1.CreateBuildRequest.verify|verify} messages.
                     * @param message CreateBuildRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.devtools.cloudbuild.v1.ICreateBuildRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateBuildRequest message, length delimited. Does not implicitly {@link google.devtools.cloudbuild.v1.CreateBuildRequest.verify|verify} messages.
                     * @param message CreateBuildRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.devtools.cloudbuild.v1.ICreateBuildRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateBuildRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateBuildRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.devtools.cloudbuild.v1.CreateBuildRequest;

                    /**
                     * Decodes a CreateBuildRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateBuildRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.devtools.cloudbuild.v1.CreateBuildRequest;

                    /**
                     * Verifies a CreateBuildRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateBuildRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateBuildRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.devtools.cloudbuild.v1.CreateBuildRequest;

                    /**
                     * Creates a plain object from a CreateBuildRequest message. Also converts values to other types if specified.
                     * @param message CreateBuildRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.devtools.cloudbuild.v1.CreateBuildRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateBuildRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetBuildRequest. */
                interface IGetBuildRequest {

                    /** GetBuildRequest name */
                    name?: (string|null);

                    /** GetBuildRequest projectId */
                    projectId?: (string|null);

                    /** GetBuildRequest id */
                    id?: (string|null);
                }

                /** Represents a GetBuildRequest. */
                class GetBuildRequest implements IGetBuildRequest {

                    /**
                     * Constructs a new GetBuildRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.devtools.cloudbuild.v1.IGetBuildRequest);

                    /** GetBuildRequest name. */
                    public name: string;

                    /** GetBuildRequest projectId. */
                    public projectId: string;

                    /** GetBuildRequest id. */
                    public id: string;

                    /**
                     * Creates a new GetBuildRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetBuildRequest instance
                     */
                    public static create(properties?: google.devtools.cloudbuild.v1.IGetBuildRequest): google.devtools.cloudbuild.v1.GetBuildRequest;

                    /**
                     * Encodes the specified GetBuildRequest message. Does not implicitly {@link google.devtools.cloudbuild.v1.GetBuildRequest.verify|verify} messages.
                     * @param message GetBuildRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.devtools.cloudbuild.v1.IGetBuildRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetBuildRequest message, length delimited. Does not implicitly {@link google.devtools.cloudbuild.v1.GetBuildRequest.verify|verify} messages.
                     * @param message GetBuildRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.devtools.cloudbuild.v1.IGetBuildRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetBuildRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetBuildRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.devtools.cloudbuild.v1.GetBuildRequest;

                    /**
                     * Decodes a GetBuildRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetBuildRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.devtools.cloudbuild.v1.GetBuildRequest;

                    /**
                     * Verifies a GetBuildRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetBuildRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetBuildRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.devtools.cloudbuild.v1.GetBuildRequest;

                    /**
                     * Creates a plain object from a GetBuildRequest message. Also converts values to other types if specified.
                     * @param message GetBuildRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.devtools.cloudbuild.v1.GetBuildRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetBuildRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListBuildsRequest. */
                interface IListBuildsRequest {

                    /** ListBuildsRequest parent */
                    parent?: (string|null);

                    /** ListBuildsRequest projectId */
                    projectId?: (string|null);

                    /** ListBuildsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListBuildsRequest pageToken */
                    pageToken?: (string|null);

                    /** ListBuildsRequest filter */
                    filter?: (string|null);
                }

                /** Represents a ListBuildsRequest. */
                class ListBuildsRequest implements IListBuildsRequest {

                    /**
                     * Constructs a new ListBuildsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.devtools.cloudbuild.v1.IListBuildsRequest);

                    /** ListBuildsRequest parent. */
                    public parent: string;

                    /** ListBuildsRequest projectId. */
                    public projectId: string;

                    /** ListBuildsRequest pageSize. */
                    public pageSize: number;

                    /** ListBuildsRequest pageToken. */
                    public pageToken: string;

                    /** ListBuildsRequest filter. */
                    public filter: string;

                    /**
                     * Creates a new ListBuildsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListBuildsRequest instance
                     */
                    public static create(properties?: google.devtools.cloudbuild.v1.IListBuildsRequest): google.devtools.cloudbuild.v1.ListBuildsRequest;

                    /**
                     * Encodes the specified ListBuildsRequest message. Does not implicitly {@link google.devtools.cloudbuild.v1.ListBuildsRequest.verify|verify} messages.
                     * @param message ListBuildsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.devtools.cloudbuild.v1.IListBuildsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListBuildsRequest message, length delimited. Does not implicitly {@link google.devtools.cloudbuild.v1.ListBuildsRequest.verify|verify} messages.
                     * @param message ListBuildsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.devtools.cloudbuild.v1.IListBuildsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListBuildsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListBuildsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.devtools.cloudbuild.v1.ListBuildsRequest;

                    /**
                     * Decodes a ListBuildsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListBuildsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.devtools.cloudbuild.v1.ListBuildsRequest;

                    /**
                     * Verifies a ListBuildsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListBuildsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListBuildsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.devtools.cloudbuild.v1.ListBuildsRequest;

                    /**
                     * Creates a plain object from a ListBuildsRequest message. Also converts values to other types if specified.
                     * @param message ListBuildsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.devtools.cloudbuild.v1.ListBuildsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListBuildsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListBuildsResponse. */
                interface IListBuildsResponse {

                    /** ListBuildsResponse builds */
                    builds?: (google.devtools.cloudbuild.v1.IBuild[]|null);

                    /** ListBuildsResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListBuildsResponse. */
                class ListBuildsResponse implements IListBuildsResponse {

                    /**
                     * Constructs a new ListBuildsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.devtools.cloudbuild.v1.IListBuildsResponse);

                    /** ListBuildsResponse builds. */
                    public builds: google.devtools.cloudbuild.v1.IBuild[];

                    /** ListBuildsResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListBuildsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListBuildsResponse instance
                     */
                    public static create(properties?: google.devtools.cloudbuild.v1.IListBuildsResponse): google.devtools.cloudbuild.v1.ListBuildsResponse;

                    /**
                     * Encodes the specified ListBuildsResponse message. Does not implicitly {@link google.devtools.cloudbuild.v1.ListBuildsResponse.verify|verify} messages.
                     * @param message ListBuildsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.devtools.cloudbuild.v1.IListBuildsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListBuildsResponse message, length delimited. Does not implicitly {@link google.devtools.cloudbuild.v1.ListBuildsResponse.verify|verify} messages.
                     * @param message ListBuildsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.devtools.cloudbuild.v1.IListBuildsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListBuildsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListBuildsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.devtools.cloudbuild.v1.ListBuildsResponse;

                    /**
                     * Decodes a ListBuildsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListBuildsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.devtools.cloudbuild.v1.ListBuildsResponse;

                    /**
                     * Verifies a ListBuildsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListBuildsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListBuildsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.devtools.cloudbuild.v1.ListBuildsResponse;

                    /**
                     * Creates a plain object from a ListBuildsResponse message. Also converts values to other types if specified.
                     * @param message ListBuildsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.devtools.cloudbuild.v1.ListBuildsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListBuildsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a CancelBuildRequest. */
                interface ICancelBuildRequest {

                    /** CancelBuildRequest name */
                    name?: (string|null);

                    /** CancelBuildRequest projectId */
                    projectId?: (string|null);

                    /** CancelBuildRequest id */
                    id?: (string|null);
                }

                /** Represents a CancelBuildRequest. */
                class CancelBuildRequest implements ICancelBuildRequest {

                    /**
                     * Constructs a new CancelBuildRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.devtools.cloudbuild.v1.ICancelBuildRequest);

                    /** CancelBuildRequest name. */
                    public name: string;

                    /** CancelBuildRequest projectId. */
                    public projectId: string;

                    /** CancelBuildRequest id. */
                    public id: string;

                    /**
                     * Creates a new CancelBuildRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CancelBuildRequest instance
                     */
                    public static create(properties?: google.devtools.cloudbuild.v1.ICancelBuildRequest): google.devtools.cloudbuild.v1.CancelBuildRequest;

                    /**
                     * Encodes the specified CancelBuildRequest message. Does not implicitly {@link google.devtools.cloudbuild.v1.CancelBuildRequest.verify|verify} messages.
                     * @param message CancelBuildRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.devtools.cloudbuild.v1.ICancelBuildRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CancelBuildRequest message, length delimited. Does not implicitly {@link google.devtools.cloudbuild.v1.CancelBuildRequest.verify|verify} messages.
                     * @param message CancelBuildRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.devtools.cloudbuild.v1.ICancelBuildRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CancelBuildRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CancelBuildRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.devtools.cloudbuild.v1.CancelBuildRequest;

                    /**
                     * Decodes a CancelBuildRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CancelBuildRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.devtools.cloudbuild.v1.CancelBuildRequest;

                    /**
                     * Verifies a CancelBuildRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CancelBuildRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CancelBuildRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.devtools.cloudbuild.v1.CancelBuildRequest;

                    /**
                     * Creates a plain object from a CancelBuildRequest message. Also converts values to other types if specified.
                     * @param message CancelBuildRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.devtools.cloudbuild.v1.CancelBuildRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CancelBuildRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an ApproveBuildRequest. */
                interface IApproveBuildRequest {

                    /** ApproveBuildRequest name */
                    name?: (string|null);

                    /** ApproveBuildRequest approvalResult */
                    approvalResult?: (google.devtools.cloudbuild.v1.IApprovalResult|null);
                }

                /** Represents an ApproveBuildRequest. */
                class ApproveBuildRequest implements IApproveBuildRequest {

                    /**
                     * Constructs a new ApproveBuildRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.devtools.cloudbuild.v1.IApproveBuildRequest);

                    /** ApproveBuildRequest name. */
                    public name: string;

                    /** ApproveBuildRequest approvalResult. */
                    public approvalResult?: (google.devtools.cloudbuild.v1.IApprovalResult|null);

                    /**
                     * Creates a new ApproveBuildRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ApproveBuildRequest instance
                     */
                    public static create(properties?: google.devtools.cloudbuild.v1.IApproveBuildRequest): google.devtools.cloudbuild.v1.ApproveBuildRequest;

                    /**
                     * Encodes the specified ApproveBuildRequest message. Does not implicitly {@link google.devtools.cloudbuild.v1.ApproveBuildRequest.verify|verify} messages.
                     * @param message ApproveBuildRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.devtools.cloudbuild.v1.IApproveBuildRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ApproveBuildRequest message, length delimited. Does not implicitly {@link google.devtools.cloudbuild.v1.ApproveBuildRequest.verify|verify} messages.
                     * @param message ApproveBuildRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.devtools.cloudbuild.v1.IApproveBuildRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ApproveBuildRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ApproveBuildRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.devtools.cloudbuild.v1.ApproveBuildRequest;

                    /**
                     * Decodes an ApproveBuildRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ApproveBuildRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.devtools.cloudbuild.v1.ApproveBuildRequest;

                    /**
                     * Verifies an ApproveBuildRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ApproveBuildRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ApproveBuildRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.devtools.cloudbuild.v1.ApproveBuildRequest;

                    /**
                     * Creates a plain object from an ApproveBuildRequest message. Also converts values to other types if specified.
                     * @param message ApproveBuildRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.devtools.cloudbuild.v1.ApproveBuildRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ApproveBuildRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a BuildApproval. */
                interface IBuildApproval {

                    /** BuildApproval state */
                    state?: (google.devtools.cloudbuild.v1.BuildApproval.State|keyof typeof google.devtools.cloudbuild.v1.BuildApproval.State|null);

                    /** BuildApproval config */
                    config?: (google.devtools.cloudbuild.v1.IApprovalConfig|null);

                    /** BuildApproval result */
                    result?: (google.devtools.cloudbuild.v1.IApprovalResult|null);
                }

                /** Represents a BuildApproval. */
                class BuildApproval implements IBuildApproval {

                    /**
                     * Constructs a new BuildApproval.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.devtools.cloudbuild.v1.IBuildApproval);

                    /** BuildApproval state. */
                    public state: (google.devtools.cloudbuild.v1.BuildApproval.State|keyof typeof google.devtools.cloudbuild.v1.BuildApproval.State);

                    /** BuildApproval config. */
                    public config?: (google.devtools.cloudbuild.v1.IApprovalConfig|null);

                    /** BuildApproval result. */
                    public result?: (google.devtools.cloudbuild.v1.IApprovalResult|null);

                    /**
                     * Creates a new BuildApproval instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns BuildApproval instance
                     */
                    public static create(properties?: google.devtools.cloudbuild.v1.IBuildApproval): google.devtools.cloudbuild.v1.BuildApproval;

                    /**
                     * Encodes the specified BuildApproval message. Does not implicitly {@link google.devtools.cloudbuild.v1.BuildApproval.verify|verify} messages.
                     * @param message BuildApproval message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.devtools.cloudbuild.v1.IBuildApproval, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified BuildApproval message, length delimited. Does not implicitly {@link google.devtools.cloudbuild.v1.BuildApproval.verify|verify} messages.
                     * @param message BuildApproval message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.devtools.cloudbuild.v1.IBuildApproval, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a BuildApproval message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns BuildApproval
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.devtools.cloudbuild.v1.BuildApproval;

                    /**
                     * Decodes a BuildApproval message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns BuildApproval
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.devtools.cloudbuild.v1.BuildApproval;

                    /**
                     * Verifies a BuildApproval message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a BuildApproval message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns BuildApproval
                     */
                    public static fromObject(object: { [k: string]: any }): google.devtools.cloudbuild.v1.BuildApproval;

                    /**
                     * Creates a plain object from a BuildApproval message. Also converts values to other types if specified.
                     * @param message BuildApproval
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.devtools.cloudbuild.v1.BuildApproval, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this BuildApproval to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace BuildApproval {

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        PENDING = 1,
                        APPROVED = 2,
                        REJECTED = 3,
                        CANCELLED = 5
                    }
                }

                /** Properties of an ApprovalConfig. */
                interface IApprovalConfig {

                    /** ApprovalConfig approvalRequired */
                    approvalRequired?: (boolean|null);
                }

                /** Represents an ApprovalConfig. */
                class ApprovalConfig implements IApprovalConfig {

                    /**
                     * Constructs a new ApprovalConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.devtools.cloudbuild.v1.IApprovalConfig);

                    /** ApprovalConfig approvalRequired. */
                    public approvalRequired: boolean;

                    /**
                     * Creates a new ApprovalConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ApprovalConfig instance
                     */
                    public static create(properties?: google.devtools.cloudbuild.v1.IApprovalConfig): google.devtools.cloudbuild.v1.ApprovalConfig;

                    /**
                     * Encodes the specified ApprovalConfig message. Does not implicitly {@link google.devtools.cloudbuild.v1.ApprovalConfig.verify|verify} messages.
                     * @param message ApprovalConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.devtools.cloudbuild.v1.IApprovalConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ApprovalConfig message, length delimited. Does not implicitly {@link google.devtools.cloudbuild.v1.ApprovalConfig.verify|verify} messages.
                     * @param message ApprovalConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.devtools.cloudbuild.v1.IApprovalConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ApprovalConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ApprovalConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.devtools.cloudbuild.v1.ApprovalConfig;

                    /**
                     * Decodes an ApprovalConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ApprovalConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.devtools.cloudbuild.v1.ApprovalConfig;

                    /**
                     * Verifies an ApprovalConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ApprovalConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ApprovalConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.devtools.cloudbuild.v1.ApprovalConfig;

                    /**
                     * Creates a plain object from an ApprovalConfig message. Also converts values to other types if specified.
                     * @param message ApprovalConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.devtools.cloudbuild.v1.ApprovalConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ApprovalConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an ApprovalResult. */
                interface IApprovalResult {

                    /** ApprovalResult approverAccount */
                    approverAccount?: (string|null);

                    /** ApprovalResult approvalTime */
                    approvalTime?: (google.protobuf.ITimestamp|null);

                    /** ApprovalResult decision */
                    decision?: (google.devtools.cloudbuild.v1.ApprovalResult.Decision|keyof typeof google.devtools.cloudbuild.v1.ApprovalResult.Decision|null);

                    /** ApprovalResult comment */
                    comment?: (string|null);

                    /** ApprovalResult url */
                    url?: (string|null);
                }

                /** Represents an ApprovalResult. */
                class ApprovalResult implements IApprovalResult {

                    /**
                     * Constructs a new ApprovalResult.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.devtools.cloudbuild.v1.IApprovalResult);

                    /** ApprovalResult approverAccount. */
                    public approverAccount: string;

                    /** ApprovalResult approvalTime. */
                    public approvalTime?: (google.protobuf.ITimestamp|null);

                    /** ApprovalResult decision. */
                    public decision: (google.devtools.cloudbuild.v1.ApprovalResult.Decision|keyof typeof google.devtools.cloudbuild.v1.ApprovalResult.Decision);

                    /** ApprovalResult comment. */
                    public comment: string;

                    /** ApprovalResult url. */
                    public url: string;

                    /**
                     * Creates a new ApprovalResult instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ApprovalResult instance
                     */
                    public static create(properties?: google.devtools.cloudbuild.v1.IApprovalResult): google.devtools.cloudbuild.v1.ApprovalResult;

                    /**
                     * Encodes the specified ApprovalResult message. Does not implicitly {@link google.devtools.cloudbuild.v1.ApprovalResult.verify|verify} messages.
                     * @param message ApprovalResult message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.devtools.cloudbuild.v1.IApprovalResult, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ApprovalResult message, length delimited. Does not implicitly {@link google.devtools.cloudbuild.v1.ApprovalResult.verify|verify} messages.
                     * @param message ApprovalResult message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.devtools.cloudbuild.v1.IApprovalResult, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ApprovalResult message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ApprovalResult
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.devtools.cloudbuild.v1.ApprovalResult;

                    /**
                     * Decodes an ApprovalResult message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ApprovalResult
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.devtools.cloudbuild.v1.ApprovalResult;

                    /**
                     * Verifies an ApprovalResult message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ApprovalResult message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ApprovalResult
                     */
                    public static fromObject(object: { [k: string]: any }): google.devtools.cloudbuild.v1.ApprovalResult;

                    /**
                     * Creates a plain object from an ApprovalResult message. Also converts values to other types if specified.
                     * @param message ApprovalResult
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.devtools.cloudbuild.v1.ApprovalResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ApprovalResult to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace ApprovalResult {

                    /** Decision enum. */
                    enum Decision {
                        DECISION_UNSPECIFIED = 0,
                        APPROVED = 1,
                        REJECTED = 2
                    }
                }

                /** Properties of a BuildTrigger. */
                interface IBuildTrigger {

                    /** BuildTrigger resourceName */
                    resourceName?: (string|null);

                    /** BuildTrigger id */
                    id?: (string|null);

                    /** BuildTrigger description */
                    description?: (string|null);

                    /** BuildTrigger name */
                    name?: (string|null);

                    /** BuildTrigger tags */
                    tags?: (string[]|null);

                    /** BuildTrigger triggerTemplate */
                    triggerTemplate?: (google.devtools.cloudbuild.v1.IRepoSource|null);

                    /** BuildTrigger github */
                    github?: (google.devtools.cloudbuild.v1.IGitHubEventsConfig|null);

                    /** BuildTrigger pubsubConfig */
                    pubsubConfig?: (google.devtools.cloudbuild.v1.IPubsubConfig|null);

                    /** BuildTrigger webhookConfig */
                    webhookConfig?: (google.devtools.cloudbuild.v1.IWebhookConfig|null);

                    /** BuildTrigger autodetect */
                    autodetect?: (boolean|null);

                    /** BuildTrigger build */
                    build?: (google.devtools.cloudbuild.v1.IBuild|null);

                    /** BuildTrigger filename */
                    filename?: (string|null);

                    /** BuildTrigger createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** BuildTrigger disabled */
                    disabled?: (boolean|null);

                    /** BuildTrigger substitutions */
                    substitutions?: ({ [k: string]: string }|null);

                    /** BuildTrigger ignoredFiles */
                    ignoredFiles?: (string[]|null);

                    /** BuildTrigger includedFiles */
                    includedFiles?: (string[]|null);

                    /** BuildTrigger filter */
                    filter?: (string|null);
                }

                /** Represents a BuildTrigger. */
                class BuildTrigger implements IBuildTrigger {

                    /**
                     * Constructs a new BuildTrigger.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.devtools.cloudbuild.v1.IBuildTrigger);

                    /** BuildTrigger resourceName. */
                    public resourceName: string;

                    /** BuildTrigger id. */
                    public id: string;

                    /** BuildTrigger description. */
                    public description: string;

                    /** BuildTrigger name. */
                    public name: string;

                    /** BuildTrigger tags. */
                    public tags: string[];

                    /** BuildTrigger triggerTemplate. */
                    public triggerTemplate?: (google.devtools.cloudbuild.v1.IRepoSource|null);

                    /** BuildTrigger github. */
                    public github?: (google.devtools.cloudbuild.v1.IGitHubEventsConfig|null);

                    /** BuildTrigger pubsubConfig. */
                    public pubsubConfig?: (google.devtools.cloudbuild.v1.IPubsubConfig|null);

                    /** BuildTrigger webhookConfig. */
                    public webhookConfig?: (google.devtools.cloudbuild.v1.IWebhookConfig|null);

                    /** BuildTrigger autodetect. */
                    public autodetect?: (boolean|null);

                    /** BuildTrigger build. */
                    public build?: (google.devtools.cloudbuild.v1.IBuild|null);

                    /** BuildTrigger filename. */
                    public filename?: (string|null);

                    /** BuildTrigger createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** BuildTrigger disabled. */
                    public disabled: boolean;

                    /** BuildTrigger substitutions. */
                    public substitutions: { [k: string]: string };

                    /** BuildTrigger ignoredFiles. */
                    public ignoredFiles: string[];

                    /** BuildTrigger includedFiles. */
                    public includedFiles: string[];

                    /** BuildTrigger filter. */
                    public filter: string;

                    /** BuildTrigger buildTemplate. */
                    public buildTemplate?: ("autodetect"|"build"|"filename");

                    /**
                     * Creates a new BuildTrigger instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns BuildTrigger instance
                     */
                    public static create(properties?: google.devtools.cloudbuild.v1.IBuildTrigger): google.devtools.cloudbuild.v1.BuildTrigger;

                    /**
                     * Encodes the specified BuildTrigger message. Does not implicitly {@link google.devtools.cloudbuild.v1.BuildTrigger.verify|verify} messages.
                     * @param message BuildTrigger message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.devtools.cloudbuild.v1.IBuildTrigger, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified BuildTrigger message, length delimited. Does not implicitly {@link google.devtools.cloudbuild.v1.BuildTrigger.verify|verify} messages.
                     * @param message BuildTrigger message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.devtools.cloudbuild.v1.IBuildTrigger, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a BuildTrigger message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns BuildTrigger
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.devtools.cloudbuild.v1.BuildTrigger;

                    /**
                     * Decodes a BuildTrigger message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns BuildTrigger
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.devtools.cloudbuild.v1.BuildTrigger;

                    /**
                     * Verifies a BuildTrigger message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a BuildTrigger message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns BuildTrigger
                     */
                    public static fromObject(object: { [k: string]: any }): google.devtools.cloudbuild.v1.BuildTrigger;

                    /**
                     * Creates a plain object from a BuildTrigger message. Also converts values to other types if specified.
                     * @param message BuildTrigger
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.devtools.cloudbuild.v1.BuildTrigger, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this BuildTrigger to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GitHubEventsConfig. */
                interface IGitHubEventsConfig {

                    /** GitHubEventsConfig installationId */
                    installationId?: (number|Long|string|null);

                    /** GitHubEventsConfig owner */
                    owner?: (string|null);

                    /** GitHubEventsConfig name */
                    name?: (string|null);

                    /** GitHubEventsConfig pullRequest */
                    pullRequest?: (google.devtools.cloudbuild.v1.IPullRequestFilter|null);

                    /** GitHubEventsConfig push */
                    push?: (google.devtools.cloudbuild.v1.IPushFilter|null);
                }

                /** Represents a GitHubEventsConfig. */
                class GitHubEventsConfig implements IGitHubEventsConfig {

                    /**
                     * Constructs a new GitHubEventsConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.devtools.cloudbuild.v1.IGitHubEventsConfig);

                    /** GitHubEventsConfig installationId. */
                    public installationId: (number|Long|string);

                    /** GitHubEventsConfig owner. */
                    public owner: string;

                    /** GitHubEventsConfig name. */
                    public name: string;

                    /** GitHubEventsConfig pullRequest. */
                    public pullRequest?: (google.devtools.cloudbuild.v1.IPullRequestFilter|null);

                    /** GitHubEventsConfig push. */
                    public push?: (google.devtools.cloudbuild.v1.IPushFilter|null);

                    /** GitHubEventsConfig event. */
                    public event?: ("pullRequest"|"push");

                    /**
                     * Creates a new GitHubEventsConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GitHubEventsConfig instance
                     */
                    public static create(properties?: google.devtools.cloudbuild.v1.IGitHubEventsConfig): google.devtools.cloudbuild.v1.GitHubEventsConfig;

                    /**
                     * Encodes the specified GitHubEventsConfig message. Does not implicitly {@link google.devtools.cloudbuild.v1.GitHubEventsConfig.verify|verify} messages.
                     * @param message GitHubEventsConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.devtools.cloudbuild.v1.IGitHubEventsConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GitHubEventsConfig message, length delimited. Does not implicitly {@link google.devtools.cloudbuild.v1.GitHubEventsConfig.verify|verify} messages.
                     * @param message GitHubEventsConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.devtools.cloudbuild.v1.IGitHubEventsConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GitHubEventsConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GitHubEventsConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.devtools.cloudbuild.v1.GitHubEventsConfig;

                    /**
                     * Decodes a GitHubEventsConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GitHubEventsConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.devtools.cloudbuild.v1.GitHubEventsConfig;

                    /**
                     * Verifies a GitHubEventsConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GitHubEventsConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GitHubEventsConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.devtools.cloudbuild.v1.GitHubEventsConfig;

                    /**
                     * Creates a plain object from a GitHubEventsConfig message. Also converts values to other types if specified.
                     * @param message GitHubEventsConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.devtools.cloudbuild.v1.GitHubEventsConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GitHubEventsConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a PubsubConfig. */
                interface IPubsubConfig {

                    /** PubsubConfig subscription */
                    subscription?: (string|null);

                    /** PubsubConfig topic */
                    topic?: (string|null);

                    /** PubsubConfig serviceAccountEmail */
                    serviceAccountEmail?: (string|null);

                    /** PubsubConfig state */
                    state?: (google.devtools.cloudbuild.v1.PubsubConfig.State|keyof typeof google.devtools.cloudbuild.v1.PubsubConfig.State|null);
                }

                /** Represents a PubsubConfig. */
                class PubsubConfig implements IPubsubConfig {

                    /**
                     * Constructs a new PubsubConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.devtools.cloudbuild.v1.IPubsubConfig);

                    /** PubsubConfig subscription. */
                    public subscription: string;

                    /** PubsubConfig topic. */
                    public topic: string;

                    /** PubsubConfig serviceAccountEmail. */
                    public serviceAccountEmail: string;

                    /** PubsubConfig state. */
                    public state: (google.devtools.cloudbuild.v1.PubsubConfig.State|keyof typeof google.devtools.cloudbuild.v1.PubsubConfig.State);

                    /**
                     * Creates a new PubsubConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PubsubConfig instance
                     */
                    public static create(properties?: google.devtools.cloudbuild.v1.IPubsubConfig): google.devtools.cloudbuild.v1.PubsubConfig;

                    /**
                     * Encodes the specified PubsubConfig message. Does not implicitly {@link google.devtools.cloudbuild.v1.PubsubConfig.verify|verify} messages.
                     * @param message PubsubConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.devtools.cloudbuild.v1.IPubsubConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PubsubConfig message, length delimited. Does not implicitly {@link google.devtools.cloudbuild.v1.PubsubConfig.verify|verify} messages.
                     * @param message PubsubConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.devtools.cloudbuild.v1.IPubsubConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PubsubConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PubsubConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.devtools.cloudbuild.v1.PubsubConfig;

                    /**
                     * Decodes a PubsubConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PubsubConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.devtools.cloudbuild.v1.PubsubConfig;

                    /**
                     * Verifies a PubsubConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PubsubConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PubsubConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.devtools.cloudbuild.v1.PubsubConfig;

                    /**
                     * Creates a plain object from a PubsubConfig message. Also converts values to other types if specified.
                     * @param message PubsubConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.devtools.cloudbuild.v1.PubsubConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PubsubConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace PubsubConfig {

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        OK = 1,
                        SUBSCRIPTION_DELETED = 2,
                        TOPIC_DELETED = 3,
                        SUBSCRIPTION_MISCONFIGURED = 4
                    }
                }

                /** Properties of a WebhookConfig. */
                interface IWebhookConfig {

                    /** WebhookConfig secret */
                    secret?: (string|null);

                    /** WebhookConfig state */
                    state?: (google.devtools.cloudbuild.v1.WebhookConfig.State|keyof typeof google.devtools.cloudbuild.v1.WebhookConfig.State|null);
                }

                /** Represents a WebhookConfig. */
                class WebhookConfig implements IWebhookConfig {

                    /**
                     * Constructs a new WebhookConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.devtools.cloudbuild.v1.IWebhookConfig);

                    /** WebhookConfig secret. */
                    public secret?: (string|null);

                    /** WebhookConfig state. */
                    public state: (google.devtools.cloudbuild.v1.WebhookConfig.State|keyof typeof google.devtools.cloudbuild.v1.WebhookConfig.State);

                    /** WebhookConfig authMethod. */
                    public authMethod?: "secret";

                    /**
                     * Creates a new WebhookConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns WebhookConfig instance
                     */
                    public static create(properties?: google.devtools.cloudbuild.v1.IWebhookConfig): google.devtools.cloudbuild.v1.WebhookConfig;

                    /**
                     * Encodes the specified WebhookConfig message. Does not implicitly {@link google.devtools.cloudbuild.v1.WebhookConfig.verify|verify} messages.
                     * @param message WebhookConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.devtools.cloudbuild.v1.IWebhookConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified WebhookConfig message, length delimited. Does not implicitly {@link google.devtools.cloudbuild.v1.WebhookConfig.verify|verify} messages.
                     * @param message WebhookConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.devtools.cloudbuild.v1.IWebhookConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a WebhookConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns WebhookConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.devtools.cloudbuild.v1.WebhookConfig;

                    /**
                     * Decodes a WebhookConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns WebhookConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.devtools.cloudbuild.v1.WebhookConfig;

                    /**
                     * Verifies a WebhookConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a WebhookConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns WebhookConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.devtools.cloudbuild.v1.WebhookConfig;

                    /**
                     * Creates a plain object from a WebhookConfig message. Also converts values to other types if specified.
                     * @param message WebhookConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.devtools.cloudbuild.v1.WebhookConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this WebhookConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace WebhookConfig {

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        OK = 1,
                        SECRET_DELETED = 2
                    }
                }

                /** Properties of a PullRequestFilter. */
                interface IPullRequestFilter {

                    /** PullRequestFilter branch */
                    branch?: (string|null);

                    /** PullRequestFilter commentControl */
                    commentControl?: (google.devtools.cloudbuild.v1.PullRequestFilter.CommentControl|keyof typeof google.devtools.cloudbuild.v1.PullRequestFilter.CommentControl|null);

                    /** PullRequestFilter invertRegex */
                    invertRegex?: (boolean|null);
                }

                /** Represents a PullRequestFilter. */
                class PullRequestFilter implements IPullRequestFilter {

                    /**
                     * Constructs a new PullRequestFilter.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.devtools.cloudbuild.v1.IPullRequestFilter);

                    /** PullRequestFilter branch. */
                    public branch?: (string|null);

                    /** PullRequestFilter commentControl. */
                    public commentControl: (google.devtools.cloudbuild.v1.PullRequestFilter.CommentControl|keyof typeof google.devtools.cloudbuild.v1.PullRequestFilter.CommentControl);

                    /** PullRequestFilter invertRegex. */
                    public invertRegex: boolean;

                    /** PullRequestFilter gitRef. */
                    public gitRef?: "branch";

                    /**
                     * Creates a new PullRequestFilter instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PullRequestFilter instance
                     */
                    public static create(properties?: google.devtools.cloudbuild.v1.IPullRequestFilter): google.devtools.cloudbuild.v1.PullRequestFilter;

                    /**
                     * Encodes the specified PullRequestFilter message. Does not implicitly {@link google.devtools.cloudbuild.v1.PullRequestFilter.verify|verify} messages.
                     * @param message PullRequestFilter message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.devtools.cloudbuild.v1.IPullRequestFilter, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PullRequestFilter message, length delimited. Does not implicitly {@link google.devtools.cloudbuild.v1.PullRequestFilter.verify|verify} messages.
                     * @param message PullRequestFilter message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.devtools.cloudbuild.v1.IPullRequestFilter, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PullRequestFilter message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PullRequestFilter
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.devtools.cloudbuild.v1.PullRequestFilter;

                    /**
                     * Decodes a PullRequestFilter message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PullRequestFilter
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.devtools.cloudbuild.v1.PullRequestFilter;

                    /**
                     * Verifies a PullRequestFilter message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PullRequestFilter message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PullRequestFilter
                     */
                    public static fromObject(object: { [k: string]: any }): google.devtools.cloudbuild.v1.PullRequestFilter;

                    /**
                     * Creates a plain object from a PullRequestFilter message. Also converts values to other types if specified.
                     * @param message PullRequestFilter
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.devtools.cloudbuild.v1.PullRequestFilter, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PullRequestFilter to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace PullRequestFilter {

                    /** CommentControl enum. */
                    enum CommentControl {
                        COMMENTS_DISABLED = 0,
                        COMMENTS_ENABLED = 1,
                        COMMENTS_ENABLED_FOR_EXTERNAL_CONTRIBUTORS_ONLY = 2
                    }
                }

                /** Properties of a PushFilter. */
                interface IPushFilter {

                    /** PushFilter branch */
                    branch?: (string|null);

                    /** PushFilter tag */
                    tag?: (string|null);

                    /** PushFilter invertRegex */
                    invertRegex?: (boolean|null);
                }

                /** Represents a PushFilter. */
                class PushFilter implements IPushFilter {

                    /**
                     * Constructs a new PushFilter.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.devtools.cloudbuild.v1.IPushFilter);

                    /** PushFilter branch. */
                    public branch?: (string|null);

                    /** PushFilter tag. */
                    public tag?: (string|null);

                    /** PushFilter invertRegex. */
                    public invertRegex: boolean;

                    /** PushFilter gitRef. */
                    public gitRef?: ("branch"|"tag");

                    /**
                     * Creates a new PushFilter instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PushFilter instance
                     */
                    public static create(properties?: google.devtools.cloudbuild.v1.IPushFilter): google.devtools.cloudbuild.v1.PushFilter;

                    /**
                     * Encodes the specified PushFilter message. Does not implicitly {@link google.devtools.cloudbuild.v1.PushFilter.verify|verify} messages.
                     * @param message PushFilter message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.devtools.cloudbuild.v1.IPushFilter, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PushFilter message, length delimited. Does not implicitly {@link google.devtools.cloudbuild.v1.PushFilter.verify|verify} messages.
                     * @param message PushFilter message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.devtools.cloudbuild.v1.IPushFilter, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PushFilter message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PushFilter
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.devtools.cloudbuild.v1.PushFilter;

                    /**
                     * Decodes a PushFilter message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PushFilter
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.devtools.cloudbuild.v1.PushFilter;

                    /**
                     * Verifies a PushFilter message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PushFilter message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PushFilter
                     */
                    public static fromObject(object: { [k: string]: any }): google.devtools.cloudbuild.v1.PushFilter;

                    /**
                     * Creates a plain object from a PushFilter message. Also converts values to other types if specified.
                     * @param message PushFilter
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.devtools.cloudbuild.v1.PushFilter, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PushFilter to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a CreateBuildTriggerRequest. */
                interface ICreateBuildTriggerRequest {

                    /** CreateBuildTriggerRequest parent */
                    parent?: (string|null);

                    /** CreateBuildTriggerRequest projectId */
                    projectId?: (string|null);

                    /** CreateBuildTriggerRequest trigger */
                    trigger?: (google.devtools.cloudbuild.v1.IBuildTrigger|null);
                }

                /** Represents a CreateBuildTriggerRequest. */
                class CreateBuildTriggerRequest implements ICreateBuildTriggerRequest {

                    /**
                     * Constructs a new CreateBuildTriggerRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.devtools.cloudbuild.v1.ICreateBuildTriggerRequest);

                    /** CreateBuildTriggerRequest parent. */
                    public parent: string;

                    /** CreateBuildTriggerRequest projectId. */
                    public projectId: string;

                    /** CreateBuildTriggerRequest trigger. */
                    public trigger?: (google.devtools.cloudbuild.v1.IBuildTrigger|null);

                    /**
                     * Creates a new CreateBuildTriggerRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateBuildTriggerRequest instance
                     */
                    public static create(properties?: google.devtools.cloudbuild.v1.ICreateBuildTriggerRequest): google.devtools.cloudbuild.v1.CreateBuildTriggerRequest;

                    /**
                     * Encodes the specified CreateBuildTriggerRequest message. Does not implicitly {@link google.devtools.cloudbuild.v1.CreateBuildTriggerRequest.verify|verify} messages.
                     * @param message CreateBuildTriggerRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.devtools.cloudbuild.v1.ICreateBuildTriggerRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateBuildTriggerRequest message, length delimited. Does not implicitly {@link google.devtools.cloudbuild.v1.CreateBuildTriggerRequest.verify|verify} messages.
                     * @param message CreateBuildTriggerRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.devtools.cloudbuild.v1.ICreateBuildTriggerRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateBuildTriggerRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateBuildTriggerRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.devtools.cloudbuild.v1.CreateBuildTriggerRequest;

                    /**
                     * Decodes a CreateBuildTriggerRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateBuildTriggerRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.devtools.cloudbuild.v1.CreateBuildTriggerRequest;

                    /**
                     * Verifies a CreateBuildTriggerRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateBuildTriggerRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateBuildTriggerRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.devtools.cloudbuild.v1.CreateBuildTriggerRequest;

                    /**
                     * Creates a plain object from a CreateBuildTriggerRequest message. Also converts values to other types if specified.
                     * @param message CreateBuildTriggerRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.devtools.cloudbuild.v1.CreateBuildTriggerRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateBuildTriggerRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetBuildTriggerRequest. */
                interface IGetBuildTriggerRequest {

                    /** GetBuildTriggerRequest name */
                    name?: (string|null);

                    /** GetBuildTriggerRequest projectId */
                    projectId?: (string|null);

                    /** GetBuildTriggerRequest triggerId */
                    triggerId?: (string|null);
                }

                /** Represents a GetBuildTriggerRequest. */
                class GetBuildTriggerRequest implements IGetBuildTriggerRequest {

                    /**
                     * Constructs a new GetBuildTriggerRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.devtools.cloudbuild.v1.IGetBuildTriggerRequest);

                    /** GetBuildTriggerRequest name. */
                    public name: string;

                    /** GetBuildTriggerRequest projectId. */
                    public projectId: string;

                    /** GetBuildTriggerRequest triggerId. */
                    public triggerId: string;

                    /**
                     * Creates a new GetBuildTriggerRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetBuildTriggerRequest instance
                     */
                    public static create(properties?: google.devtools.cloudbuild.v1.IGetBuildTriggerRequest): google.devtools.cloudbuild.v1.GetBuildTriggerRequest;

                    /**
                     * Encodes the specified GetBuildTriggerRequest message. Does not implicitly {@link google.devtools.cloudbuild.v1.GetBuildTriggerRequest.verify|verify} messages.
                     * @param message GetBuildTriggerRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.devtools.cloudbuild.v1.IGetBuildTriggerRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetBuildTriggerRequest message, length delimited. Does not implicitly {@link google.devtools.cloudbuild.v1.GetBuildTriggerRequest.verify|verify} messages.
                     * @param message GetBuildTriggerRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.devtools.cloudbuild.v1.IGetBuildTriggerRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetBuildTriggerRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetBuildTriggerRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.devtools.cloudbuild.v1.GetBuildTriggerRequest;

                    /**
                     * Decodes a GetBuildTriggerRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetBuildTriggerRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.devtools.cloudbuild.v1.GetBuildTriggerRequest;

                    /**
                     * Verifies a GetBuildTriggerRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetBuildTriggerRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetBuildTriggerRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.devtools.cloudbuild.v1.GetBuildTriggerRequest;

                    /**
                     * Creates a plain object from a GetBuildTriggerRequest message. Also converts values to other types if specified.
                     * @param message GetBuildTriggerRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.devtools.cloudbuild.v1.GetBuildTriggerRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetBuildTriggerRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListBuildTriggersRequest. */
                interface IListBuildTriggersRequest {

                    /** ListBuildTriggersRequest parent */
                    parent?: (string|null);

                    /** ListBuildTriggersRequest projectId */
                    projectId?: (string|null);

                    /** ListBuildTriggersRequest pageSize */
                    pageSize?: (number|null);

                    /** ListBuildTriggersRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListBuildTriggersRequest. */
                class ListBuildTriggersRequest implements IListBuildTriggersRequest {

                    /**
                     * Constructs a new ListBuildTriggersRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.devtools.cloudbuild.v1.IListBuildTriggersRequest);

                    /** ListBuildTriggersRequest parent. */
                    public parent: string;

                    /** ListBuildTriggersRequest projectId. */
                    public projectId: string;

                    /** ListBuildTriggersRequest pageSize. */
                    public pageSize: number;

                    /** ListBuildTriggersRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListBuildTriggersRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListBuildTriggersRequest instance
                     */
                    public static create(properties?: google.devtools.cloudbuild.v1.IListBuildTriggersRequest): google.devtools.cloudbuild.v1.ListBuildTriggersRequest;

                    /**
                     * Encodes the specified ListBuildTriggersRequest message. Does not implicitly {@link google.devtools.cloudbuild.v1.ListBuildTriggersRequest.verify|verify} messages.
                     * @param message ListBuildTriggersRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.devtools.cloudbuild.v1.IListBuildTriggersRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListBuildTriggersRequest message, length delimited. Does not implicitly {@link google.devtools.cloudbuild.v1.ListBuildTriggersRequest.verify|verify} messages.
                     * @param message ListBuildTriggersRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.devtools.cloudbuild.v1.IListBuildTriggersRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListBuildTriggersRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListBuildTriggersRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.devtools.cloudbuild.v1.ListBuildTriggersRequest;

                    /**
                     * Decodes a ListBuildTriggersRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListBuildTriggersRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.devtools.cloudbuild.v1.ListBuildTriggersRequest;

                    /**
                     * Verifies a ListBuildTriggersRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListBuildTriggersRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListBuildTriggersRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.devtools.cloudbuild.v1.ListBuildTriggersRequest;

                    /**
                     * Creates a plain object from a ListBuildTriggersRequest message. Also converts values to other types if specified.
                     * @param message ListBuildTriggersRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.devtools.cloudbuild.v1.ListBuildTriggersRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListBuildTriggersRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListBuildTriggersResponse. */
                interface IListBuildTriggersResponse {

                    /** ListBuildTriggersResponse triggers */
                    triggers?: (google.devtools.cloudbuild.v1.IBuildTrigger[]|null);

                    /** ListBuildTriggersResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListBuildTriggersResponse. */
                class ListBuildTriggersResponse implements IListBuildTriggersResponse {

                    /**
                     * Constructs a new ListBuildTriggersResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.devtools.cloudbuild.v1.IListBuildTriggersResponse);

                    /** ListBuildTriggersResponse triggers. */
                    public triggers: google.devtools.cloudbuild.v1.IBuildTrigger[];

                    /** ListBuildTriggersResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListBuildTriggersResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListBuildTriggersResponse instance
                     */
                    public static create(properties?: google.devtools.cloudbuild.v1.IListBuildTriggersResponse): google.devtools.cloudbuild.v1.ListBuildTriggersResponse;

                    /**
                     * Encodes the specified ListBuildTriggersResponse message. Does not implicitly {@link google.devtools.cloudbuild.v1.ListBuildTriggersResponse.verify|verify} messages.
                     * @param message ListBuildTriggersResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.devtools.cloudbuild.v1.IListBuildTriggersResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListBuildTriggersResponse message, length delimited. Does not implicitly {@link google.devtools.cloudbuild.v1.ListBuildTriggersResponse.verify|verify} messages.
                     * @param message ListBuildTriggersResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.devtools.cloudbuild.v1.IListBuildTriggersResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListBuildTriggersResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListBuildTriggersResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.devtools.cloudbuild.v1.ListBuildTriggersResponse;

                    /**
                     * Decodes a ListBuildTriggersResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListBuildTriggersResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.devtools.cloudbuild.v1.ListBuildTriggersResponse;

                    /**
                     * Verifies a ListBuildTriggersResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListBuildTriggersResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListBuildTriggersResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.devtools.cloudbuild.v1.ListBuildTriggersResponse;

                    /**
                     * Creates a plain object from a ListBuildTriggersResponse message. Also converts values to other types if specified.
                     * @param message ListBuildTriggersResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.devtools.cloudbuild.v1.ListBuildTriggersResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListBuildTriggersResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DeleteBuildTriggerRequest. */
                interface IDeleteBuildTriggerRequest {

                    /** DeleteBuildTriggerRequest name */
                    name?: (string|null);

                    /** DeleteBuildTriggerRequest projectId */
                    projectId?: (string|null);

                    /** DeleteBuildTriggerRequest triggerId */
                    triggerId?: (string|null);
                }

                /** Represents a DeleteBuildTriggerRequest. */
                class DeleteBuildTriggerRequest implements IDeleteBuildTriggerRequest {

                    /**
                     * Constructs a new DeleteBuildTriggerRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.devtools.cloudbuild.v1.IDeleteBuildTriggerRequest);

                    /** DeleteBuildTriggerRequest name. */
                    public name: string;

                    /** DeleteBuildTriggerRequest projectId. */
                    public projectId: string;

                    /** DeleteBuildTriggerRequest triggerId. */
                    public triggerId: string;

                    /**
                     * Creates a new DeleteBuildTriggerRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteBuildTriggerRequest instance
                     */
                    public static create(properties?: google.devtools.cloudbuild.v1.IDeleteBuildTriggerRequest): google.devtools.cloudbuild.v1.DeleteBuildTriggerRequest;

                    /**
                     * Encodes the specified DeleteBuildTriggerRequest message. Does not implicitly {@link google.devtools.cloudbuild.v1.DeleteBuildTriggerRequest.verify|verify} messages.
                     * @param message DeleteBuildTriggerRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.devtools.cloudbuild.v1.IDeleteBuildTriggerRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteBuildTriggerRequest message, length delimited. Does not implicitly {@link google.devtools.cloudbuild.v1.DeleteBuildTriggerRequest.verify|verify} messages.
                     * @param message DeleteBuildTriggerRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.devtools.cloudbuild.v1.IDeleteBuildTriggerRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteBuildTriggerRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteBuildTriggerRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.devtools.cloudbuild.v1.DeleteBuildTriggerRequest;

                    /**
                     * Decodes a DeleteBuildTriggerRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteBuildTriggerRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.devtools.cloudbuild.v1.DeleteBuildTriggerRequest;

                    /**
                     * Verifies a DeleteBuildTriggerRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteBuildTriggerRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteBuildTriggerRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.devtools.cloudbuild.v1.DeleteBuildTriggerRequest;

                    /**
                     * Creates a plain object from a DeleteBuildTriggerRequest message. Also converts values to other types if specified.
                     * @param message DeleteBuildTriggerRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.devtools.cloudbuild.v1.DeleteBuildTriggerRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteBuildTriggerRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an UpdateBuildTriggerRequest. */
                interface IUpdateBuildTriggerRequest {

                    /** UpdateBuildTriggerRequest projectId */
                    projectId?: (string|null);

                    /** UpdateBuildTriggerRequest triggerId */
                    triggerId?: (string|null);

                    /** UpdateBuildTriggerRequest trigger */
                    trigger?: (google.devtools.cloudbuild.v1.IBuildTrigger|null);
                }

                /** Represents an UpdateBuildTriggerRequest. */
                class UpdateBuildTriggerRequest implements IUpdateBuildTriggerRequest {

                    /**
                     * Constructs a new UpdateBuildTriggerRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.devtools.cloudbuild.v1.IUpdateBuildTriggerRequest);

                    /** UpdateBuildTriggerRequest projectId. */
                    public projectId: string;

                    /** UpdateBuildTriggerRequest triggerId. */
                    public triggerId: string;

                    /** UpdateBuildTriggerRequest trigger. */
                    public trigger?: (google.devtools.cloudbuild.v1.IBuildTrigger|null);

                    /**
                     * Creates a new UpdateBuildTriggerRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateBuildTriggerRequest instance
                     */
                    public static create(properties?: google.devtools.cloudbuild.v1.IUpdateBuildTriggerRequest): google.devtools.cloudbuild.v1.UpdateBuildTriggerRequest;

                    /**
                     * Encodes the specified UpdateBuildTriggerRequest message. Does not implicitly {@link google.devtools.cloudbuild.v1.UpdateBuildTriggerRequest.verify|verify} messages.
                     * @param message UpdateBuildTriggerRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.devtools.cloudbuild.v1.IUpdateBuildTriggerRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateBuildTriggerRequest message, length delimited. Does not implicitly {@link google.devtools.cloudbuild.v1.UpdateBuildTriggerRequest.verify|verify} messages.
                     * @param message UpdateBuildTriggerRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.devtools.cloudbuild.v1.IUpdateBuildTriggerRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateBuildTriggerRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateBuildTriggerRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.devtools.cloudbuild.v1.UpdateBuildTriggerRequest;

                    /**
                     * Decodes an UpdateBuildTriggerRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateBuildTriggerRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.devtools.cloudbuild.v1.UpdateBuildTriggerRequest;

                    /**
                     * Verifies an UpdateBuildTriggerRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateBuildTriggerRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateBuildTriggerRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.devtools.cloudbuild.v1.UpdateBuildTriggerRequest;

                    /**
                     * Creates a plain object from an UpdateBuildTriggerRequest message. Also converts values to other types if specified.
                     * @param message UpdateBuildTriggerRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.devtools.cloudbuild.v1.UpdateBuildTriggerRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateBuildTriggerRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a BuildOptions. */
                interface IBuildOptions {

                    /** BuildOptions sourceProvenanceHash */
                    sourceProvenanceHash?: (google.devtools.cloudbuild.v1.Hash.HashType[]|null);

                    /** BuildOptions requestedVerifyOption */
                    requestedVerifyOption?: (google.devtools.cloudbuild.v1.BuildOptions.VerifyOption|keyof typeof google.devtools.cloudbuild.v1.BuildOptions.VerifyOption|null);

                    /** BuildOptions machineType */
                    machineType?: (google.devtools.cloudbuild.v1.BuildOptions.MachineType|keyof typeof google.devtools.cloudbuild.v1.BuildOptions.MachineType|null);

                    /** BuildOptions diskSizeGb */
                    diskSizeGb?: (number|Long|string|null);

                    /** BuildOptions substitutionOption */
                    substitutionOption?: (google.devtools.cloudbuild.v1.BuildOptions.SubstitutionOption|keyof typeof google.devtools.cloudbuild.v1.BuildOptions.SubstitutionOption|null);

                    /** BuildOptions dynamicSubstitutions */
                    dynamicSubstitutions?: (boolean|null);

                    /** BuildOptions logStreamingOption */
                    logStreamingOption?: (google.devtools.cloudbuild.v1.BuildOptions.LogStreamingOption|keyof typeof google.devtools.cloudbuild.v1.BuildOptions.LogStreamingOption|null);

                    /** BuildOptions workerPool */
                    workerPool?: (string|null);

                    /** BuildOptions pool */
                    pool?: (google.devtools.cloudbuild.v1.BuildOptions.IPoolOption|null);

                    /** BuildOptions logging */
                    logging?: (google.devtools.cloudbuild.v1.BuildOptions.LoggingMode|keyof typeof google.devtools.cloudbuild.v1.BuildOptions.LoggingMode|null);

                    /** BuildOptions env */
                    env?: (string[]|null);

                    /** BuildOptions secretEnv */
                    secretEnv?: (string[]|null);

                    /** BuildOptions volumes */
                    volumes?: (google.devtools.cloudbuild.v1.IVolume[]|null);
                }

                /** Represents a BuildOptions. */
                class BuildOptions implements IBuildOptions {

                    /**
                     * Constructs a new BuildOptions.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.devtools.cloudbuild.v1.IBuildOptions);

                    /** BuildOptions sourceProvenanceHash. */
                    public sourceProvenanceHash: google.devtools.cloudbuild.v1.Hash.HashType[];

                    /** BuildOptions requestedVerifyOption. */
                    public requestedVerifyOption: (google.devtools.cloudbuild.v1.BuildOptions.VerifyOption|keyof typeof google.devtools.cloudbuild.v1.BuildOptions.VerifyOption);

                    /** BuildOptions machineType. */
                    public machineType: (google.devtools.cloudbuild.v1.BuildOptions.MachineType|keyof typeof google.devtools.cloudbuild.v1.BuildOptions.MachineType);

                    /** BuildOptions diskSizeGb. */
                    public diskSizeGb: (number|Long|string);

                    /** BuildOptions substitutionOption. */
                    public substitutionOption: (google.devtools.cloudbuild.v1.BuildOptions.SubstitutionOption|keyof typeof google.devtools.cloudbuild.v1.BuildOptions.SubstitutionOption);

                    /** BuildOptions dynamicSubstitutions. */
                    public dynamicSubstitutions: boolean;

                    /** BuildOptions logStreamingOption. */
                    public logStreamingOption: (google.devtools.cloudbuild.v1.BuildOptions.LogStreamingOption|keyof typeof google.devtools.cloudbuild.v1.BuildOptions.LogStreamingOption);

                    /** BuildOptions workerPool. */
                    public workerPool: string;

                    /** BuildOptions pool. */
                    public pool?: (google.devtools.cloudbuild.v1.BuildOptions.IPoolOption|null);

                    /** BuildOptions logging. */
                    public logging: (google.devtools.cloudbuild.v1.BuildOptions.LoggingMode|keyof typeof google.devtools.cloudbuild.v1.BuildOptions.LoggingMode);

                    /** BuildOptions env. */
                    public env: string[];

                    /** BuildOptions secretEnv. */
                    public secretEnv: string[];

                    /** BuildOptions volumes. */
                    public volumes: google.devtools.cloudbuild.v1.IVolume[];

                    /**
                     * Creates a new BuildOptions instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns BuildOptions instance
                     */
                    public static create(properties?: google.devtools.cloudbuild.v1.IBuildOptions): google.devtools.cloudbuild.v1.BuildOptions;

                    /**
                     * Encodes the specified BuildOptions message. Does not implicitly {@link google.devtools.cloudbuild.v1.BuildOptions.verify|verify} messages.
                     * @param message BuildOptions message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.devtools.cloudbuild.v1.IBuildOptions, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified BuildOptions message, length delimited. Does not implicitly {@link google.devtools.cloudbuild.v1.BuildOptions.verify|verify} messages.
                     * @param message BuildOptions message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.devtools.cloudbuild.v1.IBuildOptions, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a BuildOptions message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns BuildOptions
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.devtools.cloudbuild.v1.BuildOptions;

                    /**
                     * Decodes a BuildOptions message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns BuildOptions
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.devtools.cloudbuild.v1.BuildOptions;

                    /**
                     * Verifies a BuildOptions message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a BuildOptions message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns BuildOptions
                     */
                    public static fromObject(object: { [k: string]: any }): google.devtools.cloudbuild.v1.BuildOptions;

                    /**
                     * Creates a plain object from a BuildOptions message. Also converts values to other types if specified.
                     * @param message BuildOptions
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.devtools.cloudbuild.v1.BuildOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this BuildOptions to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace BuildOptions {

                    /** Properties of a PoolOption. */
                    interface IPoolOption {

                        /** PoolOption name */
                        name?: (string|null);
                    }

                    /** Represents a PoolOption. */
                    class PoolOption implements IPoolOption {

                        /**
                         * Constructs a new PoolOption.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.devtools.cloudbuild.v1.BuildOptions.IPoolOption);

                        /** PoolOption name. */
                        public name: string;

                        /**
                         * Creates a new PoolOption instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns PoolOption instance
                         */
                        public static create(properties?: google.devtools.cloudbuild.v1.BuildOptions.IPoolOption): google.devtools.cloudbuild.v1.BuildOptions.PoolOption;

                        /**
                         * Encodes the specified PoolOption message. Does not implicitly {@link google.devtools.cloudbuild.v1.BuildOptions.PoolOption.verify|verify} messages.
                         * @param message PoolOption message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.devtools.cloudbuild.v1.BuildOptions.IPoolOption, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified PoolOption message, length delimited. Does not implicitly {@link google.devtools.cloudbuild.v1.BuildOptions.PoolOption.verify|verify} messages.
                         * @param message PoolOption message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.devtools.cloudbuild.v1.BuildOptions.IPoolOption, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a PoolOption message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns PoolOption
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.devtools.cloudbuild.v1.BuildOptions.PoolOption;

                        /**
                         * Decodes a PoolOption message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns PoolOption
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.devtools.cloudbuild.v1.BuildOptions.PoolOption;

                        /**
                         * Verifies a PoolOption message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a PoolOption message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns PoolOption
                         */
                        public static fromObject(object: { [k: string]: any }): google.devtools.cloudbuild.v1.BuildOptions.PoolOption;

                        /**
                         * Creates a plain object from a PoolOption message. Also converts values to other types if specified.
                         * @param message PoolOption
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.devtools.cloudbuild.v1.BuildOptions.PoolOption, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this PoolOption to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** VerifyOption enum. */
                    enum VerifyOption {
                        NOT_VERIFIED = 0,
                        VERIFIED = 1
                    }

                    /** MachineType enum. */
                    enum MachineType {
                        UNSPECIFIED = 0,
                        N1_HIGHCPU_8 = 1,
                        N1_HIGHCPU_32 = 2,
                        E2_HIGHCPU_8 = 5,
                        E2_HIGHCPU_32 = 6
                    }

                    /** SubstitutionOption enum. */
                    enum SubstitutionOption {
                        MUST_MATCH = 0,
                        ALLOW_LOOSE = 1
                    }

                    /** LogStreamingOption enum. */
                    enum LogStreamingOption {
                        STREAM_DEFAULT = 0,
                        STREAM_ON = 1,
                        STREAM_OFF = 2
                    }

                    /** LoggingMode enum. */
                    enum LoggingMode {
                        LOGGING_UNSPECIFIED = 0,
                        LEGACY = 1,
                        GCS_ONLY = 2,
                        STACKDRIVER_ONLY = 3,
                        CLOUD_LOGGING_ONLY = 5,
                        NONE = 4
                    }
                }

                /** Properties of a ReceiveTriggerWebhookRequest. */
                interface IReceiveTriggerWebhookRequest {

                    /** ReceiveTriggerWebhookRequest name */
                    name?: (string|null);

                    /** ReceiveTriggerWebhookRequest body */
                    body?: (google.api.IHttpBody|null);

                    /** ReceiveTriggerWebhookRequest projectId */
                    projectId?: (string|null);

                    /** ReceiveTriggerWebhookRequest trigger */
                    trigger?: (string|null);

                    /** ReceiveTriggerWebhookRequest secret */
                    secret?: (string|null);
                }

                /** Represents a ReceiveTriggerWebhookRequest. */
                class ReceiveTriggerWebhookRequest implements IReceiveTriggerWebhookRequest {

                    /**
                     * Constructs a new ReceiveTriggerWebhookRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.devtools.cloudbuild.v1.IReceiveTriggerWebhookRequest);

                    /** ReceiveTriggerWebhookRequest name. */
                    public name: string;

                    /** ReceiveTriggerWebhookRequest body. */
                    public body?: (google.api.IHttpBody|null);

                    /** ReceiveTriggerWebhookRequest projectId. */
                    public projectId: string;

                    /** ReceiveTriggerWebhookRequest trigger. */
                    public trigger: string;

                    /** ReceiveTriggerWebhookRequest secret. */
                    public secret: string;

                    /**
                     * Creates a new ReceiveTriggerWebhookRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ReceiveTriggerWebhookRequest instance
                     */
                    public static create(properties?: google.devtools.cloudbuild.v1.IReceiveTriggerWebhookRequest): google.devtools.cloudbuild.v1.ReceiveTriggerWebhookRequest;

                    /**
                     * Encodes the specified ReceiveTriggerWebhookRequest message. Does not implicitly {@link google.devtools.cloudbuild.v1.ReceiveTriggerWebhookRequest.verify|verify} messages.
                     * @param message ReceiveTriggerWebhookRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.devtools.cloudbuild.v1.IReceiveTriggerWebhookRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ReceiveTriggerWebhookRequest message, length delimited. Does not implicitly {@link google.devtools.cloudbuild.v1.ReceiveTriggerWebhookRequest.verify|verify} messages.
                     * @param message ReceiveTriggerWebhookRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.devtools.cloudbuild.v1.IReceiveTriggerWebhookRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ReceiveTriggerWebhookRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ReceiveTriggerWebhookRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.devtools.cloudbuild.v1.ReceiveTriggerWebhookRequest;

                    /**
                     * Decodes a ReceiveTriggerWebhookRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ReceiveTriggerWebhookRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.devtools.cloudbuild.v1.ReceiveTriggerWebhookRequest;

                    /**
                     * Verifies a ReceiveTriggerWebhookRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ReceiveTriggerWebhookRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ReceiveTriggerWebhookRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.devtools.cloudbuild.v1.ReceiveTriggerWebhookRequest;

                    /**
                     * Creates a plain object from a ReceiveTriggerWebhookRequest message. Also converts values to other types if specified.
                     * @param message ReceiveTriggerWebhookRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.devtools.cloudbuild.v1.ReceiveTriggerWebhookRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ReceiveTriggerWebhookRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ReceiveTriggerWebhookResponse. */
                interface IReceiveTriggerWebhookResponse {
                }

                /** Represents a ReceiveTriggerWebhookResponse. */
                class ReceiveTriggerWebhookResponse implements IReceiveTriggerWebhookResponse {

                    /**
                     * Constructs a new ReceiveTriggerWebhookResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.devtools.cloudbuild.v1.IReceiveTriggerWebhookResponse);

                    /**
                     * Creates a new ReceiveTriggerWebhookResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ReceiveTriggerWebhookResponse instance
                     */
                    public static create(properties?: google.devtools.cloudbuild.v1.IReceiveTriggerWebhookResponse): google.devtools.cloudbuild.v1.ReceiveTriggerWebhookResponse;

                    /**
                     * Encodes the specified ReceiveTriggerWebhookResponse message. Does not implicitly {@link google.devtools.cloudbuild.v1.ReceiveTriggerWebhookResponse.verify|verify} messages.
                     * @param message ReceiveTriggerWebhookResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.devtools.cloudbuild.v1.IReceiveTriggerWebhookResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ReceiveTriggerWebhookResponse message, length delimited. Does not implicitly {@link google.devtools.cloudbuild.v1.ReceiveTriggerWebhookResponse.verify|verify} messages.
                     * @param message ReceiveTriggerWebhookResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.devtools.cloudbuild.v1.IReceiveTriggerWebhookResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ReceiveTriggerWebhookResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ReceiveTriggerWebhookResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.devtools.cloudbuild.v1.ReceiveTriggerWebhookResponse;

                    /**
                     * Decodes a ReceiveTriggerWebhookResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ReceiveTriggerWebhookResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.devtools.cloudbuild.v1.ReceiveTriggerWebhookResponse;

                    /**
                     * Verifies a ReceiveTriggerWebhookResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ReceiveTriggerWebhookResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ReceiveTriggerWebhookResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.devtools.cloudbuild.v1.ReceiveTriggerWebhookResponse;

                    /**
                     * Creates a plain object from a ReceiveTriggerWebhookResponse message. Also converts values to other types if specified.
                     * @param message ReceiveTriggerWebhookResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.devtools.cloudbuild.v1.ReceiveTriggerWebhookResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ReceiveTriggerWebhookResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a WorkerPool. */
                interface IWorkerPool {

                    /** WorkerPool name */
                    name?: (string|null);

                    /** WorkerPool displayName */
                    displayName?: (string|null);

                    /** WorkerPool uid */
                    uid?: (string|null);

                    /** WorkerPool annotations */
                    annotations?: ({ [k: string]: string }|null);

                    /** WorkerPool createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** WorkerPool updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** WorkerPool deleteTime */
                    deleteTime?: (google.protobuf.ITimestamp|null);

                    /** WorkerPool state */
                    state?: (google.devtools.cloudbuild.v1.WorkerPool.State|keyof typeof google.devtools.cloudbuild.v1.WorkerPool.State|null);

                    /** WorkerPool privatePoolV1Config */
                    privatePoolV1Config?: (google.devtools.cloudbuild.v1.IPrivatePoolV1Config|null);

                    /** WorkerPool etag */
                    etag?: (string|null);
                }

                /** Represents a WorkerPool. */
                class WorkerPool implements IWorkerPool {

                    /**
                     * Constructs a new WorkerPool.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.devtools.cloudbuild.v1.IWorkerPool);

                    /** WorkerPool name. */
                    public name: string;

                    /** WorkerPool displayName. */
                    public displayName: string;

                    /** WorkerPool uid. */
                    public uid: string;

                    /** WorkerPool annotations. */
                    public annotations: { [k: string]: string };

                    /** WorkerPool createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** WorkerPool updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** WorkerPool deleteTime. */
                    public deleteTime?: (google.protobuf.ITimestamp|null);

                    /** WorkerPool state. */
                    public state: (google.devtools.cloudbuild.v1.WorkerPool.State|keyof typeof google.devtools.cloudbuild.v1.WorkerPool.State);

                    /** WorkerPool privatePoolV1Config. */
                    public privatePoolV1Config?: (google.devtools.cloudbuild.v1.IPrivatePoolV1Config|null);

                    /** WorkerPool etag. */
                    public etag: string;

                    /** WorkerPool config. */
                    public config?: "privatePoolV1Config";

                    /**
                     * Creates a new WorkerPool instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns WorkerPool instance
                     */
                    public static create(properties?: google.devtools.cloudbuild.v1.IWorkerPool): google.devtools.cloudbuild.v1.WorkerPool;

                    /**
                     * Encodes the specified WorkerPool message. Does not implicitly {@link google.devtools.cloudbuild.v1.WorkerPool.verify|verify} messages.
                     * @param message WorkerPool message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.devtools.cloudbuild.v1.IWorkerPool, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified WorkerPool message, length delimited. Does not implicitly {@link google.devtools.cloudbuild.v1.WorkerPool.verify|verify} messages.
                     * @param message WorkerPool message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.devtools.cloudbuild.v1.IWorkerPool, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a WorkerPool message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns WorkerPool
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.devtools.cloudbuild.v1.WorkerPool;

                    /**
                     * Decodes a WorkerPool message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns WorkerPool
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.devtools.cloudbuild.v1.WorkerPool;

                    /**
                     * Verifies a WorkerPool message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a WorkerPool message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns WorkerPool
                     */
                    public static fromObject(object: { [k: string]: any }): google.devtools.cloudbuild.v1.WorkerPool;

                    /**
                     * Creates a plain object from a WorkerPool message. Also converts values to other types if specified.
                     * @param message WorkerPool
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.devtools.cloudbuild.v1.WorkerPool, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this WorkerPool to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace WorkerPool {

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        CREATING = 1,
                        RUNNING = 2,
                        DELETING = 3,
                        DELETED = 4
                    }
                }

                /** Properties of a PrivatePoolV1Config. */
                interface IPrivatePoolV1Config {

                    /** PrivatePoolV1Config workerConfig */
                    workerConfig?: (google.devtools.cloudbuild.v1.PrivatePoolV1Config.IWorkerConfig|null);

                    /** PrivatePoolV1Config networkConfig */
                    networkConfig?: (google.devtools.cloudbuild.v1.PrivatePoolV1Config.INetworkConfig|null);
                }

                /** Represents a PrivatePoolV1Config. */
                class PrivatePoolV1Config implements IPrivatePoolV1Config {

                    /**
                     * Constructs a new PrivatePoolV1Config.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.devtools.cloudbuild.v1.IPrivatePoolV1Config);

                    /** PrivatePoolV1Config workerConfig. */
                    public workerConfig?: (google.devtools.cloudbuild.v1.PrivatePoolV1Config.IWorkerConfig|null);

                    /** PrivatePoolV1Config networkConfig. */
                    public networkConfig?: (google.devtools.cloudbuild.v1.PrivatePoolV1Config.INetworkConfig|null);

                    /**
                     * Creates a new PrivatePoolV1Config instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PrivatePoolV1Config instance
                     */
                    public static create(properties?: google.devtools.cloudbuild.v1.IPrivatePoolV1Config): google.devtools.cloudbuild.v1.PrivatePoolV1Config;

                    /**
                     * Encodes the specified PrivatePoolV1Config message. Does not implicitly {@link google.devtools.cloudbuild.v1.PrivatePoolV1Config.verify|verify} messages.
                     * @param message PrivatePoolV1Config message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.devtools.cloudbuild.v1.IPrivatePoolV1Config, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PrivatePoolV1Config message, length delimited. Does not implicitly {@link google.devtools.cloudbuild.v1.PrivatePoolV1Config.verify|verify} messages.
                     * @param message PrivatePoolV1Config message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.devtools.cloudbuild.v1.IPrivatePoolV1Config, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PrivatePoolV1Config message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PrivatePoolV1Config
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.devtools.cloudbuild.v1.PrivatePoolV1Config;

                    /**
                     * Decodes a PrivatePoolV1Config message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PrivatePoolV1Config
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.devtools.cloudbuild.v1.PrivatePoolV1Config;

                    /**
                     * Verifies a PrivatePoolV1Config message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PrivatePoolV1Config message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PrivatePoolV1Config
                     */
                    public static fromObject(object: { [k: string]: any }): google.devtools.cloudbuild.v1.PrivatePoolV1Config;

                    /**
                     * Creates a plain object from a PrivatePoolV1Config message. Also converts values to other types if specified.
                     * @param message PrivatePoolV1Config
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.devtools.cloudbuild.v1.PrivatePoolV1Config, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PrivatePoolV1Config to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace PrivatePoolV1Config {

                    /** Properties of a WorkerConfig. */
                    interface IWorkerConfig {

                        /** WorkerConfig machineType */
                        machineType?: (string|null);

                        /** WorkerConfig diskSizeGb */
                        diskSizeGb?: (number|Long|string|null);
                    }

                    /** Represents a WorkerConfig. */
                    class WorkerConfig implements IWorkerConfig {

                        /**
                         * Constructs a new WorkerConfig.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.devtools.cloudbuild.v1.PrivatePoolV1Config.IWorkerConfig);

                        /** WorkerConfig machineType. */
                        public machineType: string;

                        /** WorkerConfig diskSizeGb. */
                        public diskSizeGb: (number|Long|string);

                        /**
                         * Creates a new WorkerConfig instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns WorkerConfig instance
                         */
                        public static create(properties?: google.devtools.cloudbuild.v1.PrivatePoolV1Config.IWorkerConfig): google.devtools.cloudbuild.v1.PrivatePoolV1Config.WorkerConfig;

                        /**
                         * Encodes the specified WorkerConfig message. Does not implicitly {@link google.devtools.cloudbuild.v1.PrivatePoolV1Config.WorkerConfig.verify|verify} messages.
                         * @param message WorkerConfig message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.devtools.cloudbuild.v1.PrivatePoolV1Config.IWorkerConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified WorkerConfig message, length delimited. Does not implicitly {@link google.devtools.cloudbuild.v1.PrivatePoolV1Config.WorkerConfig.verify|verify} messages.
                         * @param message WorkerConfig message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.devtools.cloudbuild.v1.PrivatePoolV1Config.IWorkerConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a WorkerConfig message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns WorkerConfig
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.devtools.cloudbuild.v1.PrivatePoolV1Config.WorkerConfig;

                        /**
                         * Decodes a WorkerConfig message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns WorkerConfig
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.devtools.cloudbuild.v1.PrivatePoolV1Config.WorkerConfig;

                        /**
                         * Verifies a WorkerConfig message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a WorkerConfig message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns WorkerConfig
                         */
                        public static fromObject(object: { [k: string]: any }): google.devtools.cloudbuild.v1.PrivatePoolV1Config.WorkerConfig;

                        /**
                         * Creates a plain object from a WorkerConfig message. Also converts values to other types if specified.
                         * @param message WorkerConfig
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.devtools.cloudbuild.v1.PrivatePoolV1Config.WorkerConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this WorkerConfig to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a NetworkConfig. */
                    interface INetworkConfig {

                        /** NetworkConfig peeredNetwork */
                        peeredNetwork?: (string|null);

                        /** NetworkConfig egressOption */
                        egressOption?: (google.devtools.cloudbuild.v1.PrivatePoolV1Config.NetworkConfig.EgressOption|keyof typeof google.devtools.cloudbuild.v1.PrivatePoolV1Config.NetworkConfig.EgressOption|null);
                    }

                    /** Represents a NetworkConfig. */
                    class NetworkConfig implements INetworkConfig {

                        /**
                         * Constructs a new NetworkConfig.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.devtools.cloudbuild.v1.PrivatePoolV1Config.INetworkConfig);

                        /** NetworkConfig peeredNetwork. */
                        public peeredNetwork: string;

                        /** NetworkConfig egressOption. */
                        public egressOption: (google.devtools.cloudbuild.v1.PrivatePoolV1Config.NetworkConfig.EgressOption|keyof typeof google.devtools.cloudbuild.v1.PrivatePoolV1Config.NetworkConfig.EgressOption);

                        /**
                         * Creates a new NetworkConfig instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns NetworkConfig instance
                         */
                        public static create(properties?: google.devtools.cloudbuild.v1.PrivatePoolV1Config.INetworkConfig): google.devtools.cloudbuild.v1.PrivatePoolV1Config.NetworkConfig;

                        /**
                         * Encodes the specified NetworkConfig message. Does not implicitly {@link google.devtools.cloudbuild.v1.PrivatePoolV1Config.NetworkConfig.verify|verify} messages.
                         * @param message NetworkConfig message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.devtools.cloudbuild.v1.PrivatePoolV1Config.INetworkConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified NetworkConfig message, length delimited. Does not implicitly {@link google.devtools.cloudbuild.v1.PrivatePoolV1Config.NetworkConfig.verify|verify} messages.
                         * @param message NetworkConfig message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.devtools.cloudbuild.v1.PrivatePoolV1Config.INetworkConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a NetworkConfig message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns NetworkConfig
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.devtools.cloudbuild.v1.PrivatePoolV1Config.NetworkConfig;

                        /**
                         * Decodes a NetworkConfig message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns NetworkConfig
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.devtools.cloudbuild.v1.PrivatePoolV1Config.NetworkConfig;

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
                        public static fromObject(object: { [k: string]: any }): google.devtools.cloudbuild.v1.PrivatePoolV1Config.NetworkConfig;

                        /**
                         * Creates a plain object from a NetworkConfig message. Also converts values to other types if specified.
                         * @param message NetworkConfig
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.devtools.cloudbuild.v1.PrivatePoolV1Config.NetworkConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this NetworkConfig to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    namespace NetworkConfig {

                        /** EgressOption enum. */
                        enum EgressOption {
                            EGRESS_OPTION_UNSPECIFIED = 0,
                            NO_PUBLIC_EGRESS = 1,
                            PUBLIC_EGRESS = 2
                        }
                    }
                }

                /** Properties of a CreateWorkerPoolRequest. */
                interface ICreateWorkerPoolRequest {

                    /** CreateWorkerPoolRequest parent */
                    parent?: (string|null);

                    /** CreateWorkerPoolRequest workerPool */
                    workerPool?: (google.devtools.cloudbuild.v1.IWorkerPool|null);

                    /** CreateWorkerPoolRequest workerPoolId */
                    workerPoolId?: (string|null);

                    /** CreateWorkerPoolRequest validateOnly */
                    validateOnly?: (boolean|null);
                }

                /** Represents a CreateWorkerPoolRequest. */
                class CreateWorkerPoolRequest implements ICreateWorkerPoolRequest {

                    /**
                     * Constructs a new CreateWorkerPoolRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.devtools.cloudbuild.v1.ICreateWorkerPoolRequest);

                    /** CreateWorkerPoolRequest parent. */
                    public parent: string;

                    /** CreateWorkerPoolRequest workerPool. */
                    public workerPool?: (google.devtools.cloudbuild.v1.IWorkerPool|null);

                    /** CreateWorkerPoolRequest workerPoolId. */
                    public workerPoolId: string;

                    /** CreateWorkerPoolRequest validateOnly. */
                    public validateOnly: boolean;

                    /**
                     * Creates a new CreateWorkerPoolRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateWorkerPoolRequest instance
                     */
                    public static create(properties?: google.devtools.cloudbuild.v1.ICreateWorkerPoolRequest): google.devtools.cloudbuild.v1.CreateWorkerPoolRequest;

                    /**
                     * Encodes the specified CreateWorkerPoolRequest message. Does not implicitly {@link google.devtools.cloudbuild.v1.CreateWorkerPoolRequest.verify|verify} messages.
                     * @param message CreateWorkerPoolRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.devtools.cloudbuild.v1.ICreateWorkerPoolRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateWorkerPoolRequest message, length delimited. Does not implicitly {@link google.devtools.cloudbuild.v1.CreateWorkerPoolRequest.verify|verify} messages.
                     * @param message CreateWorkerPoolRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.devtools.cloudbuild.v1.ICreateWorkerPoolRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateWorkerPoolRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateWorkerPoolRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.devtools.cloudbuild.v1.CreateWorkerPoolRequest;

                    /**
                     * Decodes a CreateWorkerPoolRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateWorkerPoolRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.devtools.cloudbuild.v1.CreateWorkerPoolRequest;

                    /**
                     * Verifies a CreateWorkerPoolRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateWorkerPoolRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateWorkerPoolRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.devtools.cloudbuild.v1.CreateWorkerPoolRequest;

                    /**
                     * Creates a plain object from a CreateWorkerPoolRequest message. Also converts values to other types if specified.
                     * @param message CreateWorkerPoolRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.devtools.cloudbuild.v1.CreateWorkerPoolRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateWorkerPoolRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetWorkerPoolRequest. */
                interface IGetWorkerPoolRequest {

                    /** GetWorkerPoolRequest name */
                    name?: (string|null);
                }

                /** Represents a GetWorkerPoolRequest. */
                class GetWorkerPoolRequest implements IGetWorkerPoolRequest {

                    /**
                     * Constructs a new GetWorkerPoolRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.devtools.cloudbuild.v1.IGetWorkerPoolRequest);

                    /** GetWorkerPoolRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetWorkerPoolRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetWorkerPoolRequest instance
                     */
                    public static create(properties?: google.devtools.cloudbuild.v1.IGetWorkerPoolRequest): google.devtools.cloudbuild.v1.GetWorkerPoolRequest;

                    /**
                     * Encodes the specified GetWorkerPoolRequest message. Does not implicitly {@link google.devtools.cloudbuild.v1.GetWorkerPoolRequest.verify|verify} messages.
                     * @param message GetWorkerPoolRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.devtools.cloudbuild.v1.IGetWorkerPoolRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetWorkerPoolRequest message, length delimited. Does not implicitly {@link google.devtools.cloudbuild.v1.GetWorkerPoolRequest.verify|verify} messages.
                     * @param message GetWorkerPoolRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.devtools.cloudbuild.v1.IGetWorkerPoolRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetWorkerPoolRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetWorkerPoolRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.devtools.cloudbuild.v1.GetWorkerPoolRequest;

                    /**
                     * Decodes a GetWorkerPoolRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetWorkerPoolRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.devtools.cloudbuild.v1.GetWorkerPoolRequest;

                    /**
                     * Verifies a GetWorkerPoolRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetWorkerPoolRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetWorkerPoolRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.devtools.cloudbuild.v1.GetWorkerPoolRequest;

                    /**
                     * Creates a plain object from a GetWorkerPoolRequest message. Also converts values to other types if specified.
                     * @param message GetWorkerPoolRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.devtools.cloudbuild.v1.GetWorkerPoolRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetWorkerPoolRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DeleteWorkerPoolRequest. */
                interface IDeleteWorkerPoolRequest {

                    /** DeleteWorkerPoolRequest name */
                    name?: (string|null);

                    /** DeleteWorkerPoolRequest etag */
                    etag?: (string|null);

                    /** DeleteWorkerPoolRequest allowMissing */
                    allowMissing?: (boolean|null);

                    /** DeleteWorkerPoolRequest validateOnly */
                    validateOnly?: (boolean|null);
                }

                /** Represents a DeleteWorkerPoolRequest. */
                class DeleteWorkerPoolRequest implements IDeleteWorkerPoolRequest {

                    /**
                     * Constructs a new DeleteWorkerPoolRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.devtools.cloudbuild.v1.IDeleteWorkerPoolRequest);

                    /** DeleteWorkerPoolRequest name. */
                    public name: string;

                    /** DeleteWorkerPoolRequest etag. */
                    public etag: string;

                    /** DeleteWorkerPoolRequest allowMissing. */
                    public allowMissing: boolean;

                    /** DeleteWorkerPoolRequest validateOnly. */
                    public validateOnly: boolean;

                    /**
                     * Creates a new DeleteWorkerPoolRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteWorkerPoolRequest instance
                     */
                    public static create(properties?: google.devtools.cloudbuild.v1.IDeleteWorkerPoolRequest): google.devtools.cloudbuild.v1.DeleteWorkerPoolRequest;

                    /**
                     * Encodes the specified DeleteWorkerPoolRequest message. Does not implicitly {@link google.devtools.cloudbuild.v1.DeleteWorkerPoolRequest.verify|verify} messages.
                     * @param message DeleteWorkerPoolRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.devtools.cloudbuild.v1.IDeleteWorkerPoolRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteWorkerPoolRequest message, length delimited. Does not implicitly {@link google.devtools.cloudbuild.v1.DeleteWorkerPoolRequest.verify|verify} messages.
                     * @param message DeleteWorkerPoolRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.devtools.cloudbuild.v1.IDeleteWorkerPoolRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteWorkerPoolRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteWorkerPoolRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.devtools.cloudbuild.v1.DeleteWorkerPoolRequest;

                    /**
                     * Decodes a DeleteWorkerPoolRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteWorkerPoolRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.devtools.cloudbuild.v1.DeleteWorkerPoolRequest;

                    /**
                     * Verifies a DeleteWorkerPoolRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteWorkerPoolRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteWorkerPoolRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.devtools.cloudbuild.v1.DeleteWorkerPoolRequest;

                    /**
                     * Creates a plain object from a DeleteWorkerPoolRequest message. Also converts values to other types if specified.
                     * @param message DeleteWorkerPoolRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.devtools.cloudbuild.v1.DeleteWorkerPoolRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteWorkerPoolRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an UpdateWorkerPoolRequest. */
                interface IUpdateWorkerPoolRequest {

                    /** UpdateWorkerPoolRequest workerPool */
                    workerPool?: (google.devtools.cloudbuild.v1.IWorkerPool|null);

                    /** UpdateWorkerPoolRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateWorkerPoolRequest validateOnly */
                    validateOnly?: (boolean|null);
                }

                /** Represents an UpdateWorkerPoolRequest. */
                class UpdateWorkerPoolRequest implements IUpdateWorkerPoolRequest {

                    /**
                     * Constructs a new UpdateWorkerPoolRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.devtools.cloudbuild.v1.IUpdateWorkerPoolRequest);

                    /** UpdateWorkerPoolRequest workerPool. */
                    public workerPool?: (google.devtools.cloudbuild.v1.IWorkerPool|null);

                    /** UpdateWorkerPoolRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateWorkerPoolRequest validateOnly. */
                    public validateOnly: boolean;

                    /**
                     * Creates a new UpdateWorkerPoolRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateWorkerPoolRequest instance
                     */
                    public static create(properties?: google.devtools.cloudbuild.v1.IUpdateWorkerPoolRequest): google.devtools.cloudbuild.v1.UpdateWorkerPoolRequest;

                    /**
                     * Encodes the specified UpdateWorkerPoolRequest message. Does not implicitly {@link google.devtools.cloudbuild.v1.UpdateWorkerPoolRequest.verify|verify} messages.
                     * @param message UpdateWorkerPoolRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.devtools.cloudbuild.v1.IUpdateWorkerPoolRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateWorkerPoolRequest message, length delimited. Does not implicitly {@link google.devtools.cloudbuild.v1.UpdateWorkerPoolRequest.verify|verify} messages.
                     * @param message UpdateWorkerPoolRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.devtools.cloudbuild.v1.IUpdateWorkerPoolRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateWorkerPoolRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateWorkerPoolRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.devtools.cloudbuild.v1.UpdateWorkerPoolRequest;

                    /**
                     * Decodes an UpdateWorkerPoolRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateWorkerPoolRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.devtools.cloudbuild.v1.UpdateWorkerPoolRequest;

                    /**
                     * Verifies an UpdateWorkerPoolRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateWorkerPoolRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateWorkerPoolRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.devtools.cloudbuild.v1.UpdateWorkerPoolRequest;

                    /**
                     * Creates a plain object from an UpdateWorkerPoolRequest message. Also converts values to other types if specified.
                     * @param message UpdateWorkerPoolRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.devtools.cloudbuild.v1.UpdateWorkerPoolRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateWorkerPoolRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListWorkerPoolsRequest. */
                interface IListWorkerPoolsRequest {

                    /** ListWorkerPoolsRequest parent */
                    parent?: (string|null);

                    /** ListWorkerPoolsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListWorkerPoolsRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListWorkerPoolsRequest. */
                class ListWorkerPoolsRequest implements IListWorkerPoolsRequest {

                    /**
                     * Constructs a new ListWorkerPoolsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.devtools.cloudbuild.v1.IListWorkerPoolsRequest);

                    /** ListWorkerPoolsRequest parent. */
                    public parent: string;

                    /** ListWorkerPoolsRequest pageSize. */
                    public pageSize: number;

                    /** ListWorkerPoolsRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListWorkerPoolsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListWorkerPoolsRequest instance
                     */
                    public static create(properties?: google.devtools.cloudbuild.v1.IListWorkerPoolsRequest): google.devtools.cloudbuild.v1.ListWorkerPoolsRequest;

                    /**
                     * Encodes the specified ListWorkerPoolsRequest message. Does not implicitly {@link google.devtools.cloudbuild.v1.ListWorkerPoolsRequest.verify|verify} messages.
                     * @param message ListWorkerPoolsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.devtools.cloudbuild.v1.IListWorkerPoolsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListWorkerPoolsRequest message, length delimited. Does not implicitly {@link google.devtools.cloudbuild.v1.ListWorkerPoolsRequest.verify|verify} messages.
                     * @param message ListWorkerPoolsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.devtools.cloudbuild.v1.IListWorkerPoolsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListWorkerPoolsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListWorkerPoolsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.devtools.cloudbuild.v1.ListWorkerPoolsRequest;

                    /**
                     * Decodes a ListWorkerPoolsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListWorkerPoolsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.devtools.cloudbuild.v1.ListWorkerPoolsRequest;

                    /**
                     * Verifies a ListWorkerPoolsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListWorkerPoolsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListWorkerPoolsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.devtools.cloudbuild.v1.ListWorkerPoolsRequest;

                    /**
                     * Creates a plain object from a ListWorkerPoolsRequest message. Also converts values to other types if specified.
                     * @param message ListWorkerPoolsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.devtools.cloudbuild.v1.ListWorkerPoolsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListWorkerPoolsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListWorkerPoolsResponse. */
                interface IListWorkerPoolsResponse {

                    /** ListWorkerPoolsResponse workerPools */
                    workerPools?: (google.devtools.cloudbuild.v1.IWorkerPool[]|null);

                    /** ListWorkerPoolsResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListWorkerPoolsResponse. */
                class ListWorkerPoolsResponse implements IListWorkerPoolsResponse {

                    /**
                     * Constructs a new ListWorkerPoolsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.devtools.cloudbuild.v1.IListWorkerPoolsResponse);

                    /** ListWorkerPoolsResponse workerPools. */
                    public workerPools: google.devtools.cloudbuild.v1.IWorkerPool[];

                    /** ListWorkerPoolsResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListWorkerPoolsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListWorkerPoolsResponse instance
                     */
                    public static create(properties?: google.devtools.cloudbuild.v1.IListWorkerPoolsResponse): google.devtools.cloudbuild.v1.ListWorkerPoolsResponse;

                    /**
                     * Encodes the specified ListWorkerPoolsResponse message. Does not implicitly {@link google.devtools.cloudbuild.v1.ListWorkerPoolsResponse.verify|verify} messages.
                     * @param message ListWorkerPoolsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.devtools.cloudbuild.v1.IListWorkerPoolsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListWorkerPoolsResponse message, length delimited. Does not implicitly {@link google.devtools.cloudbuild.v1.ListWorkerPoolsResponse.verify|verify} messages.
                     * @param message ListWorkerPoolsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.devtools.cloudbuild.v1.IListWorkerPoolsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListWorkerPoolsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListWorkerPoolsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.devtools.cloudbuild.v1.ListWorkerPoolsResponse;

                    /**
                     * Decodes a ListWorkerPoolsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListWorkerPoolsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.devtools.cloudbuild.v1.ListWorkerPoolsResponse;

                    /**
                     * Verifies a ListWorkerPoolsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListWorkerPoolsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListWorkerPoolsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.devtools.cloudbuild.v1.ListWorkerPoolsResponse;

                    /**
                     * Creates a plain object from a ListWorkerPoolsResponse message. Also converts values to other types if specified.
                     * @param message ListWorkerPoolsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.devtools.cloudbuild.v1.ListWorkerPoolsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListWorkerPoolsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a CreateWorkerPoolOperationMetadata. */
                interface ICreateWorkerPoolOperationMetadata {

                    /** CreateWorkerPoolOperationMetadata workerPool */
                    workerPool?: (string|null);

                    /** CreateWorkerPoolOperationMetadata createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** CreateWorkerPoolOperationMetadata completeTime */
                    completeTime?: (google.protobuf.ITimestamp|null);
                }

                /** Represents a CreateWorkerPoolOperationMetadata. */
                class CreateWorkerPoolOperationMetadata implements ICreateWorkerPoolOperationMetadata {

                    /**
                     * Constructs a new CreateWorkerPoolOperationMetadata.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.devtools.cloudbuild.v1.ICreateWorkerPoolOperationMetadata);

                    /** CreateWorkerPoolOperationMetadata workerPool. */
                    public workerPool: string;

                    /** CreateWorkerPoolOperationMetadata createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** CreateWorkerPoolOperationMetadata completeTime. */
                    public completeTime?: (google.protobuf.ITimestamp|null);

                    /**
                     * Creates a new CreateWorkerPoolOperationMetadata instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateWorkerPoolOperationMetadata instance
                     */
                    public static create(properties?: google.devtools.cloudbuild.v1.ICreateWorkerPoolOperationMetadata): google.devtools.cloudbuild.v1.CreateWorkerPoolOperationMetadata;

                    /**
                     * Encodes the specified CreateWorkerPoolOperationMetadata message. Does not implicitly {@link google.devtools.cloudbuild.v1.CreateWorkerPoolOperationMetadata.verify|verify} messages.
                     * @param message CreateWorkerPoolOperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.devtools.cloudbuild.v1.ICreateWorkerPoolOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateWorkerPoolOperationMetadata message, length delimited. Does not implicitly {@link google.devtools.cloudbuild.v1.CreateWorkerPoolOperationMetadata.verify|verify} messages.
                     * @param message CreateWorkerPoolOperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.devtools.cloudbuild.v1.ICreateWorkerPoolOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateWorkerPoolOperationMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateWorkerPoolOperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.devtools.cloudbuild.v1.CreateWorkerPoolOperationMetadata;

                    /**
                     * Decodes a CreateWorkerPoolOperationMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateWorkerPoolOperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.devtools.cloudbuild.v1.CreateWorkerPoolOperationMetadata;

                    /**
                     * Verifies a CreateWorkerPoolOperationMetadata message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateWorkerPoolOperationMetadata message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateWorkerPoolOperationMetadata
                     */
                    public static fromObject(object: { [k: string]: any }): google.devtools.cloudbuild.v1.CreateWorkerPoolOperationMetadata;

                    /**
                     * Creates a plain object from a CreateWorkerPoolOperationMetadata message. Also converts values to other types if specified.
                     * @param message CreateWorkerPoolOperationMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.devtools.cloudbuild.v1.CreateWorkerPoolOperationMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateWorkerPoolOperationMetadata to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an UpdateWorkerPoolOperationMetadata. */
                interface IUpdateWorkerPoolOperationMetadata {

                    /** UpdateWorkerPoolOperationMetadata workerPool */
                    workerPool?: (string|null);

                    /** UpdateWorkerPoolOperationMetadata createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** UpdateWorkerPoolOperationMetadata completeTime */
                    completeTime?: (google.protobuf.ITimestamp|null);
                }

                /** Represents an UpdateWorkerPoolOperationMetadata. */
                class UpdateWorkerPoolOperationMetadata implements IUpdateWorkerPoolOperationMetadata {

                    /**
                     * Constructs a new UpdateWorkerPoolOperationMetadata.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.devtools.cloudbuild.v1.IUpdateWorkerPoolOperationMetadata);

                    /** UpdateWorkerPoolOperationMetadata workerPool. */
                    public workerPool: string;

                    /** UpdateWorkerPoolOperationMetadata createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** UpdateWorkerPoolOperationMetadata completeTime. */
                    public completeTime?: (google.protobuf.ITimestamp|null);

                    /**
                     * Creates a new UpdateWorkerPoolOperationMetadata instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateWorkerPoolOperationMetadata instance
                     */
                    public static create(properties?: google.devtools.cloudbuild.v1.IUpdateWorkerPoolOperationMetadata): google.devtools.cloudbuild.v1.UpdateWorkerPoolOperationMetadata;

                    /**
                     * Encodes the specified UpdateWorkerPoolOperationMetadata message. Does not implicitly {@link google.devtools.cloudbuild.v1.UpdateWorkerPoolOperationMetadata.verify|verify} messages.
                     * @param message UpdateWorkerPoolOperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.devtools.cloudbuild.v1.IUpdateWorkerPoolOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateWorkerPoolOperationMetadata message, length delimited. Does not implicitly {@link google.devtools.cloudbuild.v1.UpdateWorkerPoolOperationMetadata.verify|verify} messages.
                     * @param message UpdateWorkerPoolOperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.devtools.cloudbuild.v1.IUpdateWorkerPoolOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateWorkerPoolOperationMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateWorkerPoolOperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.devtools.cloudbuild.v1.UpdateWorkerPoolOperationMetadata;

                    /**
                     * Decodes an UpdateWorkerPoolOperationMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateWorkerPoolOperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.devtools.cloudbuild.v1.UpdateWorkerPoolOperationMetadata;

                    /**
                     * Verifies an UpdateWorkerPoolOperationMetadata message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateWorkerPoolOperationMetadata message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateWorkerPoolOperationMetadata
                     */
                    public static fromObject(object: { [k: string]: any }): google.devtools.cloudbuild.v1.UpdateWorkerPoolOperationMetadata;

                    /**
                     * Creates a plain object from an UpdateWorkerPoolOperationMetadata message. Also converts values to other types if specified.
                     * @param message UpdateWorkerPoolOperationMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.devtools.cloudbuild.v1.UpdateWorkerPoolOperationMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateWorkerPoolOperationMetadata to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DeleteWorkerPoolOperationMetadata. */
                interface IDeleteWorkerPoolOperationMetadata {

                    /** DeleteWorkerPoolOperationMetadata workerPool */
                    workerPool?: (string|null);

                    /** DeleteWorkerPoolOperationMetadata createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** DeleteWorkerPoolOperationMetadata completeTime */
                    completeTime?: (google.protobuf.ITimestamp|null);
                }

                /** Represents a DeleteWorkerPoolOperationMetadata. */
                class DeleteWorkerPoolOperationMetadata implements IDeleteWorkerPoolOperationMetadata {

                    /**
                     * Constructs a new DeleteWorkerPoolOperationMetadata.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.devtools.cloudbuild.v1.IDeleteWorkerPoolOperationMetadata);

                    /** DeleteWorkerPoolOperationMetadata workerPool. */
                    public workerPool: string;

                    /** DeleteWorkerPoolOperationMetadata createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** DeleteWorkerPoolOperationMetadata completeTime. */
                    public completeTime?: (google.protobuf.ITimestamp|null);

                    /**
                     * Creates a new DeleteWorkerPoolOperationMetadata instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteWorkerPoolOperationMetadata instance
                     */
                    public static create(properties?: google.devtools.cloudbuild.v1.IDeleteWorkerPoolOperationMetadata): google.devtools.cloudbuild.v1.DeleteWorkerPoolOperationMetadata;

                    /**
                     * Encodes the specified DeleteWorkerPoolOperationMetadata message. Does not implicitly {@link google.devtools.cloudbuild.v1.DeleteWorkerPoolOperationMetadata.verify|verify} messages.
                     * @param message DeleteWorkerPoolOperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.devtools.cloudbuild.v1.IDeleteWorkerPoolOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteWorkerPoolOperationMetadata message, length delimited. Does not implicitly {@link google.devtools.cloudbuild.v1.DeleteWorkerPoolOperationMetadata.verify|verify} messages.
                     * @param message DeleteWorkerPoolOperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.devtools.cloudbuild.v1.IDeleteWorkerPoolOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteWorkerPoolOperationMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteWorkerPoolOperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.devtools.cloudbuild.v1.DeleteWorkerPoolOperationMetadata;

                    /**
                     * Decodes a DeleteWorkerPoolOperationMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteWorkerPoolOperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.devtools.cloudbuild.v1.DeleteWorkerPoolOperationMetadata;

                    /**
                     * Verifies a DeleteWorkerPoolOperationMetadata message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteWorkerPoolOperationMetadata message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteWorkerPoolOperationMetadata
                     */
                    public static fromObject(object: { [k: string]: any }): google.devtools.cloudbuild.v1.DeleteWorkerPoolOperationMetadata;

                    /**
                     * Creates a plain object from a DeleteWorkerPoolOperationMetadata message. Also converts values to other types if specified.
                     * @param message DeleteWorkerPoolOperationMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.devtools.cloudbuild.v1.DeleteWorkerPoolOperationMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteWorkerPoolOperationMetadata to JSON.
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

        /** Properties of a HttpBody. */
        interface IHttpBody {

            /** HttpBody contentType */
            contentType?: (string|null);

            /** HttpBody data */
            data?: (Uint8Array|string|null);

            /** HttpBody extensions */
            extensions?: (google.protobuf.IAny[]|null);
        }

        /** Represents a HttpBody. */
        class HttpBody implements IHttpBody {

            /**
             * Constructs a new HttpBody.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IHttpBody);

            /** HttpBody contentType. */
            public contentType: string;

            /** HttpBody data. */
            public data: (Uint8Array|string);

            /** HttpBody extensions. */
            public extensions: google.protobuf.IAny[];

            /**
             * Creates a new HttpBody instance using the specified properties.
             * @param [properties] Properties to set
             * @returns HttpBody instance
             */
            public static create(properties?: google.api.IHttpBody): google.api.HttpBody;

            /**
             * Encodes the specified HttpBody message. Does not implicitly {@link google.api.HttpBody.verify|verify} messages.
             * @param message HttpBody message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IHttpBody, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified HttpBody message, length delimited. Does not implicitly {@link google.api.HttpBody.verify|verify} messages.
             * @param message HttpBody message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IHttpBody, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a HttpBody message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns HttpBody
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.HttpBody;

            /**
             * Decodes a HttpBody message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns HttpBody
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.HttpBody;

            /**
             * Verifies a HttpBody message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a HttpBody message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns HttpBody
             */
            public static fromObject(object: { [k: string]: any }): google.api.HttpBody;

            /**
             * Creates a plain object from a HttpBody message. Also converts values to other types if specified.
             * @param message HttpBody
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.HttpBody, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this HttpBody to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
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
}
