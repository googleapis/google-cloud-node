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

    /** Namespace storagetransfer. */
    namespace storagetransfer {

        /** Namespace v1. */
        namespace v1 {

            /** Represents a StorageTransferService */
            class StorageTransferService extends $protobuf.rpc.Service {

                /**
                 * Constructs a new StorageTransferService service.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 */
                constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                /**
                 * Creates new StorageTransferService service using the specified rpc implementation.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 * @returns RPC service. Useful where requests and/or responses are streamed.
                 */
                public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): StorageTransferService;

                /**
                 * Calls GetGoogleServiceAccount.
                 * @param request GetGoogleServiceAccountRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and GoogleServiceAccount
                 */
                public getGoogleServiceAccount(request: google.storagetransfer.v1.IGetGoogleServiceAccountRequest, callback: google.storagetransfer.v1.StorageTransferService.GetGoogleServiceAccountCallback): void;

                /**
                 * Calls GetGoogleServiceAccount.
                 * @param request GetGoogleServiceAccountRequest message or plain object
                 * @returns Promise
                 */
                public getGoogleServiceAccount(request: google.storagetransfer.v1.IGetGoogleServiceAccountRequest): Promise<google.storagetransfer.v1.GoogleServiceAccount>;

                /**
                 * Calls CreateTransferJob.
                 * @param request CreateTransferJobRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and TransferJob
                 */
                public createTransferJob(request: google.storagetransfer.v1.ICreateTransferJobRequest, callback: google.storagetransfer.v1.StorageTransferService.CreateTransferJobCallback): void;

                /**
                 * Calls CreateTransferJob.
                 * @param request CreateTransferJobRequest message or plain object
                 * @returns Promise
                 */
                public createTransferJob(request: google.storagetransfer.v1.ICreateTransferJobRequest): Promise<google.storagetransfer.v1.TransferJob>;

                /**
                 * Calls UpdateTransferJob.
                 * @param request UpdateTransferJobRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and TransferJob
                 */
                public updateTransferJob(request: google.storagetransfer.v1.IUpdateTransferJobRequest, callback: google.storagetransfer.v1.StorageTransferService.UpdateTransferJobCallback): void;

                /**
                 * Calls UpdateTransferJob.
                 * @param request UpdateTransferJobRequest message or plain object
                 * @returns Promise
                 */
                public updateTransferJob(request: google.storagetransfer.v1.IUpdateTransferJobRequest): Promise<google.storagetransfer.v1.TransferJob>;

                /**
                 * Calls GetTransferJob.
                 * @param request GetTransferJobRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and TransferJob
                 */
                public getTransferJob(request: google.storagetransfer.v1.IGetTransferJobRequest, callback: google.storagetransfer.v1.StorageTransferService.GetTransferJobCallback): void;

                /**
                 * Calls GetTransferJob.
                 * @param request GetTransferJobRequest message or plain object
                 * @returns Promise
                 */
                public getTransferJob(request: google.storagetransfer.v1.IGetTransferJobRequest): Promise<google.storagetransfer.v1.TransferJob>;

                /**
                 * Calls ListTransferJobs.
                 * @param request ListTransferJobsRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and ListTransferJobsResponse
                 */
                public listTransferJobs(request: google.storagetransfer.v1.IListTransferJobsRequest, callback: google.storagetransfer.v1.StorageTransferService.ListTransferJobsCallback): void;

                /**
                 * Calls ListTransferJobs.
                 * @param request ListTransferJobsRequest message or plain object
                 * @returns Promise
                 */
                public listTransferJobs(request: google.storagetransfer.v1.IListTransferJobsRequest): Promise<google.storagetransfer.v1.ListTransferJobsResponse>;

                /**
                 * Calls PauseTransferOperation.
                 * @param request PauseTransferOperationRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Empty
                 */
                public pauseTransferOperation(request: google.storagetransfer.v1.IPauseTransferOperationRequest, callback: google.storagetransfer.v1.StorageTransferService.PauseTransferOperationCallback): void;

                /**
                 * Calls PauseTransferOperation.
                 * @param request PauseTransferOperationRequest message or plain object
                 * @returns Promise
                 */
                public pauseTransferOperation(request: google.storagetransfer.v1.IPauseTransferOperationRequest): Promise<google.protobuf.Empty>;

                /**
                 * Calls ResumeTransferOperation.
                 * @param request ResumeTransferOperationRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Empty
                 */
                public resumeTransferOperation(request: google.storagetransfer.v1.IResumeTransferOperationRequest, callback: google.storagetransfer.v1.StorageTransferService.ResumeTransferOperationCallback): void;

                /**
                 * Calls ResumeTransferOperation.
                 * @param request ResumeTransferOperationRequest message or plain object
                 * @returns Promise
                 */
                public resumeTransferOperation(request: google.storagetransfer.v1.IResumeTransferOperationRequest): Promise<google.protobuf.Empty>;

                /**
                 * Calls RunTransferJob.
                 * @param request RunTransferJobRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Operation
                 */
                public runTransferJob(request: google.storagetransfer.v1.IRunTransferJobRequest, callback: google.storagetransfer.v1.StorageTransferService.RunTransferJobCallback): void;

                /**
                 * Calls RunTransferJob.
                 * @param request RunTransferJobRequest message or plain object
                 * @returns Promise
                 */
                public runTransferJob(request: google.storagetransfer.v1.IRunTransferJobRequest): Promise<google.longrunning.Operation>;

                /**
                 * Calls DeleteTransferJob.
                 * @param request DeleteTransferJobRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Empty
                 */
                public deleteTransferJob(request: google.storagetransfer.v1.IDeleteTransferJobRequest, callback: google.storagetransfer.v1.StorageTransferService.DeleteTransferJobCallback): void;

                /**
                 * Calls DeleteTransferJob.
                 * @param request DeleteTransferJobRequest message or plain object
                 * @returns Promise
                 */
                public deleteTransferJob(request: google.storagetransfer.v1.IDeleteTransferJobRequest): Promise<google.protobuf.Empty>;

                /**
                 * Calls CreateAgentPool.
                 * @param request CreateAgentPoolRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and AgentPool
                 */
                public createAgentPool(request: google.storagetransfer.v1.ICreateAgentPoolRequest, callback: google.storagetransfer.v1.StorageTransferService.CreateAgentPoolCallback): void;

                /**
                 * Calls CreateAgentPool.
                 * @param request CreateAgentPoolRequest message or plain object
                 * @returns Promise
                 */
                public createAgentPool(request: google.storagetransfer.v1.ICreateAgentPoolRequest): Promise<google.storagetransfer.v1.AgentPool>;

                /**
                 * Calls UpdateAgentPool.
                 * @param request UpdateAgentPoolRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and AgentPool
                 */
                public updateAgentPool(request: google.storagetransfer.v1.IUpdateAgentPoolRequest, callback: google.storagetransfer.v1.StorageTransferService.UpdateAgentPoolCallback): void;

                /**
                 * Calls UpdateAgentPool.
                 * @param request UpdateAgentPoolRequest message or plain object
                 * @returns Promise
                 */
                public updateAgentPool(request: google.storagetransfer.v1.IUpdateAgentPoolRequest): Promise<google.storagetransfer.v1.AgentPool>;

                /**
                 * Calls GetAgentPool.
                 * @param request GetAgentPoolRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and AgentPool
                 */
                public getAgentPool(request: google.storagetransfer.v1.IGetAgentPoolRequest, callback: google.storagetransfer.v1.StorageTransferService.GetAgentPoolCallback): void;

                /**
                 * Calls GetAgentPool.
                 * @param request GetAgentPoolRequest message or plain object
                 * @returns Promise
                 */
                public getAgentPool(request: google.storagetransfer.v1.IGetAgentPoolRequest): Promise<google.storagetransfer.v1.AgentPool>;

                /**
                 * Calls ListAgentPools.
                 * @param request ListAgentPoolsRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and ListAgentPoolsResponse
                 */
                public listAgentPools(request: google.storagetransfer.v1.IListAgentPoolsRequest, callback: google.storagetransfer.v1.StorageTransferService.ListAgentPoolsCallback): void;

                /**
                 * Calls ListAgentPools.
                 * @param request ListAgentPoolsRequest message or plain object
                 * @returns Promise
                 */
                public listAgentPools(request: google.storagetransfer.v1.IListAgentPoolsRequest): Promise<google.storagetransfer.v1.ListAgentPoolsResponse>;

                /**
                 * Calls DeleteAgentPool.
                 * @param request DeleteAgentPoolRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Empty
                 */
                public deleteAgentPool(request: google.storagetransfer.v1.IDeleteAgentPoolRequest, callback: google.storagetransfer.v1.StorageTransferService.DeleteAgentPoolCallback): void;

                /**
                 * Calls DeleteAgentPool.
                 * @param request DeleteAgentPoolRequest message or plain object
                 * @returns Promise
                 */
                public deleteAgentPool(request: google.storagetransfer.v1.IDeleteAgentPoolRequest): Promise<google.protobuf.Empty>;
            }

            namespace StorageTransferService {

                /**
                 * Callback as used by {@link google.storagetransfer.v1.StorageTransferService|getGoogleServiceAccount}.
                 * @param error Error, if any
                 * @param [response] GoogleServiceAccount
                 */
                type GetGoogleServiceAccountCallback = (error: (Error|null), response?: google.storagetransfer.v1.GoogleServiceAccount) => void;

                /**
                 * Callback as used by {@link google.storagetransfer.v1.StorageTransferService|createTransferJob}.
                 * @param error Error, if any
                 * @param [response] TransferJob
                 */
                type CreateTransferJobCallback = (error: (Error|null), response?: google.storagetransfer.v1.TransferJob) => void;

                /**
                 * Callback as used by {@link google.storagetransfer.v1.StorageTransferService|updateTransferJob}.
                 * @param error Error, if any
                 * @param [response] TransferJob
                 */
                type UpdateTransferJobCallback = (error: (Error|null), response?: google.storagetransfer.v1.TransferJob) => void;

                /**
                 * Callback as used by {@link google.storagetransfer.v1.StorageTransferService|getTransferJob}.
                 * @param error Error, if any
                 * @param [response] TransferJob
                 */
                type GetTransferJobCallback = (error: (Error|null), response?: google.storagetransfer.v1.TransferJob) => void;

                /**
                 * Callback as used by {@link google.storagetransfer.v1.StorageTransferService|listTransferJobs}.
                 * @param error Error, if any
                 * @param [response] ListTransferJobsResponse
                 */
                type ListTransferJobsCallback = (error: (Error|null), response?: google.storagetransfer.v1.ListTransferJobsResponse) => void;

                /**
                 * Callback as used by {@link google.storagetransfer.v1.StorageTransferService|pauseTransferOperation}.
                 * @param error Error, if any
                 * @param [response] Empty
                 */
                type PauseTransferOperationCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                /**
                 * Callback as used by {@link google.storagetransfer.v1.StorageTransferService|resumeTransferOperation}.
                 * @param error Error, if any
                 * @param [response] Empty
                 */
                type ResumeTransferOperationCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                /**
                 * Callback as used by {@link google.storagetransfer.v1.StorageTransferService|runTransferJob}.
                 * @param error Error, if any
                 * @param [response] Operation
                 */
                type RunTransferJobCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                /**
                 * Callback as used by {@link google.storagetransfer.v1.StorageTransferService|deleteTransferJob}.
                 * @param error Error, if any
                 * @param [response] Empty
                 */
                type DeleteTransferJobCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                /**
                 * Callback as used by {@link google.storagetransfer.v1.StorageTransferService|createAgentPool}.
                 * @param error Error, if any
                 * @param [response] AgentPool
                 */
                type CreateAgentPoolCallback = (error: (Error|null), response?: google.storagetransfer.v1.AgentPool) => void;

                /**
                 * Callback as used by {@link google.storagetransfer.v1.StorageTransferService|updateAgentPool}.
                 * @param error Error, if any
                 * @param [response] AgentPool
                 */
                type UpdateAgentPoolCallback = (error: (Error|null), response?: google.storagetransfer.v1.AgentPool) => void;

                /**
                 * Callback as used by {@link google.storagetransfer.v1.StorageTransferService|getAgentPool}.
                 * @param error Error, if any
                 * @param [response] AgentPool
                 */
                type GetAgentPoolCallback = (error: (Error|null), response?: google.storagetransfer.v1.AgentPool) => void;

                /**
                 * Callback as used by {@link google.storagetransfer.v1.StorageTransferService|listAgentPools}.
                 * @param error Error, if any
                 * @param [response] ListAgentPoolsResponse
                 */
                type ListAgentPoolsCallback = (error: (Error|null), response?: google.storagetransfer.v1.ListAgentPoolsResponse) => void;

                /**
                 * Callback as used by {@link google.storagetransfer.v1.StorageTransferService|deleteAgentPool}.
                 * @param error Error, if any
                 * @param [response] Empty
                 */
                type DeleteAgentPoolCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;
            }

            /** Properties of a GetGoogleServiceAccountRequest. */
            interface IGetGoogleServiceAccountRequest {

                /** GetGoogleServiceAccountRequest projectId */
                projectId?: (string|null);
            }

            /** Represents a GetGoogleServiceAccountRequest. */
            class GetGoogleServiceAccountRequest implements IGetGoogleServiceAccountRequest {

                /**
                 * Constructs a new GetGoogleServiceAccountRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.storagetransfer.v1.IGetGoogleServiceAccountRequest);

                /** GetGoogleServiceAccountRequest projectId. */
                public projectId: string;

                /**
                 * Creates a new GetGoogleServiceAccountRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GetGoogleServiceAccountRequest instance
                 */
                public static create(properties?: google.storagetransfer.v1.IGetGoogleServiceAccountRequest): google.storagetransfer.v1.GetGoogleServiceAccountRequest;

                /**
                 * Encodes the specified GetGoogleServiceAccountRequest message. Does not implicitly {@link google.storagetransfer.v1.GetGoogleServiceAccountRequest.verify|verify} messages.
                 * @param message GetGoogleServiceAccountRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.storagetransfer.v1.IGetGoogleServiceAccountRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GetGoogleServiceAccountRequest message, length delimited. Does not implicitly {@link google.storagetransfer.v1.GetGoogleServiceAccountRequest.verify|verify} messages.
                 * @param message GetGoogleServiceAccountRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.storagetransfer.v1.IGetGoogleServiceAccountRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GetGoogleServiceAccountRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GetGoogleServiceAccountRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.storagetransfer.v1.GetGoogleServiceAccountRequest;

                /**
                 * Decodes a GetGoogleServiceAccountRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GetGoogleServiceAccountRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.storagetransfer.v1.GetGoogleServiceAccountRequest;

                /**
                 * Verifies a GetGoogleServiceAccountRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GetGoogleServiceAccountRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GetGoogleServiceAccountRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.storagetransfer.v1.GetGoogleServiceAccountRequest;

                /**
                 * Creates a plain object from a GetGoogleServiceAccountRequest message. Also converts values to other types if specified.
                 * @param message GetGoogleServiceAccountRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.storagetransfer.v1.GetGoogleServiceAccountRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GetGoogleServiceAccountRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for GetGoogleServiceAccountRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a CreateTransferJobRequest. */
            interface ICreateTransferJobRequest {

                /** CreateTransferJobRequest transferJob */
                transferJob?: (google.storagetransfer.v1.ITransferJob|null);
            }

            /** Represents a CreateTransferJobRequest. */
            class CreateTransferJobRequest implements ICreateTransferJobRequest {

                /**
                 * Constructs a new CreateTransferJobRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.storagetransfer.v1.ICreateTransferJobRequest);

                /** CreateTransferJobRequest transferJob. */
                public transferJob?: (google.storagetransfer.v1.ITransferJob|null);

                /**
                 * Creates a new CreateTransferJobRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CreateTransferJobRequest instance
                 */
                public static create(properties?: google.storagetransfer.v1.ICreateTransferJobRequest): google.storagetransfer.v1.CreateTransferJobRequest;

                /**
                 * Encodes the specified CreateTransferJobRequest message. Does not implicitly {@link google.storagetransfer.v1.CreateTransferJobRequest.verify|verify} messages.
                 * @param message CreateTransferJobRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.storagetransfer.v1.ICreateTransferJobRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CreateTransferJobRequest message, length delimited. Does not implicitly {@link google.storagetransfer.v1.CreateTransferJobRequest.verify|verify} messages.
                 * @param message CreateTransferJobRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.storagetransfer.v1.ICreateTransferJobRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CreateTransferJobRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CreateTransferJobRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.storagetransfer.v1.CreateTransferJobRequest;

                /**
                 * Decodes a CreateTransferJobRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CreateTransferJobRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.storagetransfer.v1.CreateTransferJobRequest;

                /**
                 * Verifies a CreateTransferJobRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CreateTransferJobRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CreateTransferJobRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.storagetransfer.v1.CreateTransferJobRequest;

                /**
                 * Creates a plain object from a CreateTransferJobRequest message. Also converts values to other types if specified.
                 * @param message CreateTransferJobRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.storagetransfer.v1.CreateTransferJobRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CreateTransferJobRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for CreateTransferJobRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of an UpdateTransferJobRequest. */
            interface IUpdateTransferJobRequest {

                /** UpdateTransferJobRequest jobName */
                jobName?: (string|null);

                /** UpdateTransferJobRequest projectId */
                projectId?: (string|null);

                /** UpdateTransferJobRequest transferJob */
                transferJob?: (google.storagetransfer.v1.ITransferJob|null);

                /** UpdateTransferJobRequest updateTransferJobFieldMask */
                updateTransferJobFieldMask?: (google.protobuf.IFieldMask|null);
            }

            /** Represents an UpdateTransferJobRequest. */
            class UpdateTransferJobRequest implements IUpdateTransferJobRequest {

                /**
                 * Constructs a new UpdateTransferJobRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.storagetransfer.v1.IUpdateTransferJobRequest);

                /** UpdateTransferJobRequest jobName. */
                public jobName: string;

                /** UpdateTransferJobRequest projectId. */
                public projectId: string;

                /** UpdateTransferJobRequest transferJob. */
                public transferJob?: (google.storagetransfer.v1.ITransferJob|null);

                /** UpdateTransferJobRequest updateTransferJobFieldMask. */
                public updateTransferJobFieldMask?: (google.protobuf.IFieldMask|null);

                /**
                 * Creates a new UpdateTransferJobRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns UpdateTransferJobRequest instance
                 */
                public static create(properties?: google.storagetransfer.v1.IUpdateTransferJobRequest): google.storagetransfer.v1.UpdateTransferJobRequest;

                /**
                 * Encodes the specified UpdateTransferJobRequest message. Does not implicitly {@link google.storagetransfer.v1.UpdateTransferJobRequest.verify|verify} messages.
                 * @param message UpdateTransferJobRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.storagetransfer.v1.IUpdateTransferJobRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified UpdateTransferJobRequest message, length delimited. Does not implicitly {@link google.storagetransfer.v1.UpdateTransferJobRequest.verify|verify} messages.
                 * @param message UpdateTransferJobRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.storagetransfer.v1.IUpdateTransferJobRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an UpdateTransferJobRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns UpdateTransferJobRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.storagetransfer.v1.UpdateTransferJobRequest;

                /**
                 * Decodes an UpdateTransferJobRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns UpdateTransferJobRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.storagetransfer.v1.UpdateTransferJobRequest;

                /**
                 * Verifies an UpdateTransferJobRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an UpdateTransferJobRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns UpdateTransferJobRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.storagetransfer.v1.UpdateTransferJobRequest;

                /**
                 * Creates a plain object from an UpdateTransferJobRequest message. Also converts values to other types if specified.
                 * @param message UpdateTransferJobRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.storagetransfer.v1.UpdateTransferJobRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this UpdateTransferJobRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for UpdateTransferJobRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a GetTransferJobRequest. */
            interface IGetTransferJobRequest {

                /** GetTransferJobRequest jobName */
                jobName?: (string|null);

                /** GetTransferJobRequest projectId */
                projectId?: (string|null);
            }

            /** Represents a GetTransferJobRequest. */
            class GetTransferJobRequest implements IGetTransferJobRequest {

                /**
                 * Constructs a new GetTransferJobRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.storagetransfer.v1.IGetTransferJobRequest);

                /** GetTransferJobRequest jobName. */
                public jobName: string;

                /** GetTransferJobRequest projectId. */
                public projectId: string;

                /**
                 * Creates a new GetTransferJobRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GetTransferJobRequest instance
                 */
                public static create(properties?: google.storagetransfer.v1.IGetTransferJobRequest): google.storagetransfer.v1.GetTransferJobRequest;

                /**
                 * Encodes the specified GetTransferJobRequest message. Does not implicitly {@link google.storagetransfer.v1.GetTransferJobRequest.verify|verify} messages.
                 * @param message GetTransferJobRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.storagetransfer.v1.IGetTransferJobRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GetTransferJobRequest message, length delimited. Does not implicitly {@link google.storagetransfer.v1.GetTransferJobRequest.verify|verify} messages.
                 * @param message GetTransferJobRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.storagetransfer.v1.IGetTransferJobRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GetTransferJobRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GetTransferJobRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.storagetransfer.v1.GetTransferJobRequest;

                /**
                 * Decodes a GetTransferJobRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GetTransferJobRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.storagetransfer.v1.GetTransferJobRequest;

                /**
                 * Verifies a GetTransferJobRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GetTransferJobRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GetTransferJobRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.storagetransfer.v1.GetTransferJobRequest;

                /**
                 * Creates a plain object from a GetTransferJobRequest message. Also converts values to other types if specified.
                 * @param message GetTransferJobRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.storagetransfer.v1.GetTransferJobRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GetTransferJobRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for GetTransferJobRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a DeleteTransferJobRequest. */
            interface IDeleteTransferJobRequest {

                /** DeleteTransferJobRequest jobName */
                jobName?: (string|null);

                /** DeleteTransferJobRequest projectId */
                projectId?: (string|null);
            }

            /** Represents a DeleteTransferJobRequest. */
            class DeleteTransferJobRequest implements IDeleteTransferJobRequest {

                /**
                 * Constructs a new DeleteTransferJobRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.storagetransfer.v1.IDeleteTransferJobRequest);

                /** DeleteTransferJobRequest jobName. */
                public jobName: string;

                /** DeleteTransferJobRequest projectId. */
                public projectId: string;

                /**
                 * Creates a new DeleteTransferJobRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns DeleteTransferJobRequest instance
                 */
                public static create(properties?: google.storagetransfer.v1.IDeleteTransferJobRequest): google.storagetransfer.v1.DeleteTransferJobRequest;

                /**
                 * Encodes the specified DeleteTransferJobRequest message. Does not implicitly {@link google.storagetransfer.v1.DeleteTransferJobRequest.verify|verify} messages.
                 * @param message DeleteTransferJobRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.storagetransfer.v1.IDeleteTransferJobRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified DeleteTransferJobRequest message, length delimited. Does not implicitly {@link google.storagetransfer.v1.DeleteTransferJobRequest.verify|verify} messages.
                 * @param message DeleteTransferJobRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.storagetransfer.v1.IDeleteTransferJobRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DeleteTransferJobRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns DeleteTransferJobRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.storagetransfer.v1.DeleteTransferJobRequest;

                /**
                 * Decodes a DeleteTransferJobRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns DeleteTransferJobRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.storagetransfer.v1.DeleteTransferJobRequest;

                /**
                 * Verifies a DeleteTransferJobRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a DeleteTransferJobRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns DeleteTransferJobRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.storagetransfer.v1.DeleteTransferJobRequest;

                /**
                 * Creates a plain object from a DeleteTransferJobRequest message. Also converts values to other types if specified.
                 * @param message DeleteTransferJobRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.storagetransfer.v1.DeleteTransferJobRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this DeleteTransferJobRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for DeleteTransferJobRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a ListTransferJobsRequest. */
            interface IListTransferJobsRequest {

                /** ListTransferJobsRequest filter */
                filter?: (string|null);

                /** ListTransferJobsRequest pageSize */
                pageSize?: (number|null);

                /** ListTransferJobsRequest pageToken */
                pageToken?: (string|null);
            }

            /** Represents a ListTransferJobsRequest. */
            class ListTransferJobsRequest implements IListTransferJobsRequest {

                /**
                 * Constructs a new ListTransferJobsRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.storagetransfer.v1.IListTransferJobsRequest);

                /** ListTransferJobsRequest filter. */
                public filter: string;

                /** ListTransferJobsRequest pageSize. */
                public pageSize: number;

                /** ListTransferJobsRequest pageToken. */
                public pageToken: string;

                /**
                 * Creates a new ListTransferJobsRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ListTransferJobsRequest instance
                 */
                public static create(properties?: google.storagetransfer.v1.IListTransferJobsRequest): google.storagetransfer.v1.ListTransferJobsRequest;

                /**
                 * Encodes the specified ListTransferJobsRequest message. Does not implicitly {@link google.storagetransfer.v1.ListTransferJobsRequest.verify|verify} messages.
                 * @param message ListTransferJobsRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.storagetransfer.v1.IListTransferJobsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ListTransferJobsRequest message, length delimited. Does not implicitly {@link google.storagetransfer.v1.ListTransferJobsRequest.verify|verify} messages.
                 * @param message ListTransferJobsRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.storagetransfer.v1.IListTransferJobsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ListTransferJobsRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ListTransferJobsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.storagetransfer.v1.ListTransferJobsRequest;

                /**
                 * Decodes a ListTransferJobsRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ListTransferJobsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.storagetransfer.v1.ListTransferJobsRequest;

                /**
                 * Verifies a ListTransferJobsRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ListTransferJobsRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ListTransferJobsRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.storagetransfer.v1.ListTransferJobsRequest;

                /**
                 * Creates a plain object from a ListTransferJobsRequest message. Also converts values to other types if specified.
                 * @param message ListTransferJobsRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.storagetransfer.v1.ListTransferJobsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ListTransferJobsRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ListTransferJobsRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a ListTransferJobsResponse. */
            interface IListTransferJobsResponse {

                /** ListTransferJobsResponse transferJobs */
                transferJobs?: (google.storagetransfer.v1.ITransferJob[]|null);

                /** ListTransferJobsResponse nextPageToken */
                nextPageToken?: (string|null);
            }

            /** Represents a ListTransferJobsResponse. */
            class ListTransferJobsResponse implements IListTransferJobsResponse {

                /**
                 * Constructs a new ListTransferJobsResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.storagetransfer.v1.IListTransferJobsResponse);

                /** ListTransferJobsResponse transferJobs. */
                public transferJobs: google.storagetransfer.v1.ITransferJob[];

                /** ListTransferJobsResponse nextPageToken. */
                public nextPageToken: string;

                /**
                 * Creates a new ListTransferJobsResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ListTransferJobsResponse instance
                 */
                public static create(properties?: google.storagetransfer.v1.IListTransferJobsResponse): google.storagetransfer.v1.ListTransferJobsResponse;

                /**
                 * Encodes the specified ListTransferJobsResponse message. Does not implicitly {@link google.storagetransfer.v1.ListTransferJobsResponse.verify|verify} messages.
                 * @param message ListTransferJobsResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.storagetransfer.v1.IListTransferJobsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ListTransferJobsResponse message, length delimited. Does not implicitly {@link google.storagetransfer.v1.ListTransferJobsResponse.verify|verify} messages.
                 * @param message ListTransferJobsResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.storagetransfer.v1.IListTransferJobsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ListTransferJobsResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ListTransferJobsResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.storagetransfer.v1.ListTransferJobsResponse;

                /**
                 * Decodes a ListTransferJobsResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ListTransferJobsResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.storagetransfer.v1.ListTransferJobsResponse;

                /**
                 * Verifies a ListTransferJobsResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ListTransferJobsResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ListTransferJobsResponse
                 */
                public static fromObject(object: { [k: string]: any }): google.storagetransfer.v1.ListTransferJobsResponse;

                /**
                 * Creates a plain object from a ListTransferJobsResponse message. Also converts values to other types if specified.
                 * @param message ListTransferJobsResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.storagetransfer.v1.ListTransferJobsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ListTransferJobsResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ListTransferJobsResponse
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a PauseTransferOperationRequest. */
            interface IPauseTransferOperationRequest {

                /** PauseTransferOperationRequest name */
                name?: (string|null);
            }

            /** Represents a PauseTransferOperationRequest. */
            class PauseTransferOperationRequest implements IPauseTransferOperationRequest {

                /**
                 * Constructs a new PauseTransferOperationRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.storagetransfer.v1.IPauseTransferOperationRequest);

                /** PauseTransferOperationRequest name. */
                public name: string;

                /**
                 * Creates a new PauseTransferOperationRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns PauseTransferOperationRequest instance
                 */
                public static create(properties?: google.storagetransfer.v1.IPauseTransferOperationRequest): google.storagetransfer.v1.PauseTransferOperationRequest;

                /**
                 * Encodes the specified PauseTransferOperationRequest message. Does not implicitly {@link google.storagetransfer.v1.PauseTransferOperationRequest.verify|verify} messages.
                 * @param message PauseTransferOperationRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.storagetransfer.v1.IPauseTransferOperationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified PauseTransferOperationRequest message, length delimited. Does not implicitly {@link google.storagetransfer.v1.PauseTransferOperationRequest.verify|verify} messages.
                 * @param message PauseTransferOperationRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.storagetransfer.v1.IPauseTransferOperationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a PauseTransferOperationRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns PauseTransferOperationRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.storagetransfer.v1.PauseTransferOperationRequest;

                /**
                 * Decodes a PauseTransferOperationRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns PauseTransferOperationRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.storagetransfer.v1.PauseTransferOperationRequest;

                /**
                 * Verifies a PauseTransferOperationRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a PauseTransferOperationRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns PauseTransferOperationRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.storagetransfer.v1.PauseTransferOperationRequest;

                /**
                 * Creates a plain object from a PauseTransferOperationRequest message. Also converts values to other types if specified.
                 * @param message PauseTransferOperationRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.storagetransfer.v1.PauseTransferOperationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this PauseTransferOperationRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for PauseTransferOperationRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a ResumeTransferOperationRequest. */
            interface IResumeTransferOperationRequest {

                /** ResumeTransferOperationRequest name */
                name?: (string|null);
            }

            /** Represents a ResumeTransferOperationRequest. */
            class ResumeTransferOperationRequest implements IResumeTransferOperationRequest {

                /**
                 * Constructs a new ResumeTransferOperationRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.storagetransfer.v1.IResumeTransferOperationRequest);

                /** ResumeTransferOperationRequest name. */
                public name: string;

                /**
                 * Creates a new ResumeTransferOperationRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ResumeTransferOperationRequest instance
                 */
                public static create(properties?: google.storagetransfer.v1.IResumeTransferOperationRequest): google.storagetransfer.v1.ResumeTransferOperationRequest;

                /**
                 * Encodes the specified ResumeTransferOperationRequest message. Does not implicitly {@link google.storagetransfer.v1.ResumeTransferOperationRequest.verify|verify} messages.
                 * @param message ResumeTransferOperationRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.storagetransfer.v1.IResumeTransferOperationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ResumeTransferOperationRequest message, length delimited. Does not implicitly {@link google.storagetransfer.v1.ResumeTransferOperationRequest.verify|verify} messages.
                 * @param message ResumeTransferOperationRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.storagetransfer.v1.IResumeTransferOperationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ResumeTransferOperationRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ResumeTransferOperationRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.storagetransfer.v1.ResumeTransferOperationRequest;

                /**
                 * Decodes a ResumeTransferOperationRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ResumeTransferOperationRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.storagetransfer.v1.ResumeTransferOperationRequest;

                /**
                 * Verifies a ResumeTransferOperationRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ResumeTransferOperationRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ResumeTransferOperationRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.storagetransfer.v1.ResumeTransferOperationRequest;

                /**
                 * Creates a plain object from a ResumeTransferOperationRequest message. Also converts values to other types if specified.
                 * @param message ResumeTransferOperationRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.storagetransfer.v1.ResumeTransferOperationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ResumeTransferOperationRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ResumeTransferOperationRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a RunTransferJobRequest. */
            interface IRunTransferJobRequest {

                /** RunTransferJobRequest jobName */
                jobName?: (string|null);

                /** RunTransferJobRequest projectId */
                projectId?: (string|null);
            }

            /** Represents a RunTransferJobRequest. */
            class RunTransferJobRequest implements IRunTransferJobRequest {

                /**
                 * Constructs a new RunTransferJobRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.storagetransfer.v1.IRunTransferJobRequest);

                /** RunTransferJobRequest jobName. */
                public jobName: string;

                /** RunTransferJobRequest projectId. */
                public projectId: string;

                /**
                 * Creates a new RunTransferJobRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns RunTransferJobRequest instance
                 */
                public static create(properties?: google.storagetransfer.v1.IRunTransferJobRequest): google.storagetransfer.v1.RunTransferJobRequest;

                /**
                 * Encodes the specified RunTransferJobRequest message. Does not implicitly {@link google.storagetransfer.v1.RunTransferJobRequest.verify|verify} messages.
                 * @param message RunTransferJobRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.storagetransfer.v1.IRunTransferJobRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified RunTransferJobRequest message, length delimited. Does not implicitly {@link google.storagetransfer.v1.RunTransferJobRequest.verify|verify} messages.
                 * @param message RunTransferJobRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.storagetransfer.v1.IRunTransferJobRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a RunTransferJobRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns RunTransferJobRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.storagetransfer.v1.RunTransferJobRequest;

                /**
                 * Decodes a RunTransferJobRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns RunTransferJobRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.storagetransfer.v1.RunTransferJobRequest;

                /**
                 * Verifies a RunTransferJobRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a RunTransferJobRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns RunTransferJobRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.storagetransfer.v1.RunTransferJobRequest;

                /**
                 * Creates a plain object from a RunTransferJobRequest message. Also converts values to other types if specified.
                 * @param message RunTransferJobRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.storagetransfer.v1.RunTransferJobRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this RunTransferJobRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for RunTransferJobRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a CreateAgentPoolRequest. */
            interface ICreateAgentPoolRequest {

                /** CreateAgentPoolRequest projectId */
                projectId?: (string|null);

                /** CreateAgentPoolRequest agentPool */
                agentPool?: (google.storagetransfer.v1.IAgentPool|null);

                /** CreateAgentPoolRequest agentPoolId */
                agentPoolId?: (string|null);
            }

            /** Represents a CreateAgentPoolRequest. */
            class CreateAgentPoolRequest implements ICreateAgentPoolRequest {

                /**
                 * Constructs a new CreateAgentPoolRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.storagetransfer.v1.ICreateAgentPoolRequest);

                /** CreateAgentPoolRequest projectId. */
                public projectId: string;

                /** CreateAgentPoolRequest agentPool. */
                public agentPool?: (google.storagetransfer.v1.IAgentPool|null);

                /** CreateAgentPoolRequest agentPoolId. */
                public agentPoolId: string;

                /**
                 * Creates a new CreateAgentPoolRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CreateAgentPoolRequest instance
                 */
                public static create(properties?: google.storagetransfer.v1.ICreateAgentPoolRequest): google.storagetransfer.v1.CreateAgentPoolRequest;

                /**
                 * Encodes the specified CreateAgentPoolRequest message. Does not implicitly {@link google.storagetransfer.v1.CreateAgentPoolRequest.verify|verify} messages.
                 * @param message CreateAgentPoolRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.storagetransfer.v1.ICreateAgentPoolRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CreateAgentPoolRequest message, length delimited. Does not implicitly {@link google.storagetransfer.v1.CreateAgentPoolRequest.verify|verify} messages.
                 * @param message CreateAgentPoolRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.storagetransfer.v1.ICreateAgentPoolRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CreateAgentPoolRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CreateAgentPoolRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.storagetransfer.v1.CreateAgentPoolRequest;

                /**
                 * Decodes a CreateAgentPoolRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CreateAgentPoolRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.storagetransfer.v1.CreateAgentPoolRequest;

                /**
                 * Verifies a CreateAgentPoolRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CreateAgentPoolRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CreateAgentPoolRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.storagetransfer.v1.CreateAgentPoolRequest;

                /**
                 * Creates a plain object from a CreateAgentPoolRequest message. Also converts values to other types if specified.
                 * @param message CreateAgentPoolRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.storagetransfer.v1.CreateAgentPoolRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CreateAgentPoolRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for CreateAgentPoolRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of an UpdateAgentPoolRequest. */
            interface IUpdateAgentPoolRequest {

                /** UpdateAgentPoolRequest agentPool */
                agentPool?: (google.storagetransfer.v1.IAgentPool|null);

                /** UpdateAgentPoolRequest updateMask */
                updateMask?: (google.protobuf.IFieldMask|null);
            }

            /** Represents an UpdateAgentPoolRequest. */
            class UpdateAgentPoolRequest implements IUpdateAgentPoolRequest {

                /**
                 * Constructs a new UpdateAgentPoolRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.storagetransfer.v1.IUpdateAgentPoolRequest);

                /** UpdateAgentPoolRequest agentPool. */
                public agentPool?: (google.storagetransfer.v1.IAgentPool|null);

                /** UpdateAgentPoolRequest updateMask. */
                public updateMask?: (google.protobuf.IFieldMask|null);

                /**
                 * Creates a new UpdateAgentPoolRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns UpdateAgentPoolRequest instance
                 */
                public static create(properties?: google.storagetransfer.v1.IUpdateAgentPoolRequest): google.storagetransfer.v1.UpdateAgentPoolRequest;

                /**
                 * Encodes the specified UpdateAgentPoolRequest message. Does not implicitly {@link google.storagetransfer.v1.UpdateAgentPoolRequest.verify|verify} messages.
                 * @param message UpdateAgentPoolRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.storagetransfer.v1.IUpdateAgentPoolRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified UpdateAgentPoolRequest message, length delimited. Does not implicitly {@link google.storagetransfer.v1.UpdateAgentPoolRequest.verify|verify} messages.
                 * @param message UpdateAgentPoolRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.storagetransfer.v1.IUpdateAgentPoolRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an UpdateAgentPoolRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns UpdateAgentPoolRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.storagetransfer.v1.UpdateAgentPoolRequest;

                /**
                 * Decodes an UpdateAgentPoolRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns UpdateAgentPoolRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.storagetransfer.v1.UpdateAgentPoolRequest;

                /**
                 * Verifies an UpdateAgentPoolRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an UpdateAgentPoolRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns UpdateAgentPoolRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.storagetransfer.v1.UpdateAgentPoolRequest;

                /**
                 * Creates a plain object from an UpdateAgentPoolRequest message. Also converts values to other types if specified.
                 * @param message UpdateAgentPoolRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.storagetransfer.v1.UpdateAgentPoolRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this UpdateAgentPoolRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for UpdateAgentPoolRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a GetAgentPoolRequest. */
            interface IGetAgentPoolRequest {

                /** GetAgentPoolRequest name */
                name?: (string|null);
            }

            /** Represents a GetAgentPoolRequest. */
            class GetAgentPoolRequest implements IGetAgentPoolRequest {

                /**
                 * Constructs a new GetAgentPoolRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.storagetransfer.v1.IGetAgentPoolRequest);

                /** GetAgentPoolRequest name. */
                public name: string;

                /**
                 * Creates a new GetAgentPoolRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GetAgentPoolRequest instance
                 */
                public static create(properties?: google.storagetransfer.v1.IGetAgentPoolRequest): google.storagetransfer.v1.GetAgentPoolRequest;

                /**
                 * Encodes the specified GetAgentPoolRequest message. Does not implicitly {@link google.storagetransfer.v1.GetAgentPoolRequest.verify|verify} messages.
                 * @param message GetAgentPoolRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.storagetransfer.v1.IGetAgentPoolRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GetAgentPoolRequest message, length delimited. Does not implicitly {@link google.storagetransfer.v1.GetAgentPoolRequest.verify|verify} messages.
                 * @param message GetAgentPoolRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.storagetransfer.v1.IGetAgentPoolRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GetAgentPoolRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GetAgentPoolRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.storagetransfer.v1.GetAgentPoolRequest;

                /**
                 * Decodes a GetAgentPoolRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GetAgentPoolRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.storagetransfer.v1.GetAgentPoolRequest;

                /**
                 * Verifies a GetAgentPoolRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GetAgentPoolRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GetAgentPoolRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.storagetransfer.v1.GetAgentPoolRequest;

                /**
                 * Creates a plain object from a GetAgentPoolRequest message. Also converts values to other types if specified.
                 * @param message GetAgentPoolRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.storagetransfer.v1.GetAgentPoolRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GetAgentPoolRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for GetAgentPoolRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a DeleteAgentPoolRequest. */
            interface IDeleteAgentPoolRequest {

                /** DeleteAgentPoolRequest name */
                name?: (string|null);
            }

            /** Represents a DeleteAgentPoolRequest. */
            class DeleteAgentPoolRequest implements IDeleteAgentPoolRequest {

                /**
                 * Constructs a new DeleteAgentPoolRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.storagetransfer.v1.IDeleteAgentPoolRequest);

                /** DeleteAgentPoolRequest name. */
                public name: string;

                /**
                 * Creates a new DeleteAgentPoolRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns DeleteAgentPoolRequest instance
                 */
                public static create(properties?: google.storagetransfer.v1.IDeleteAgentPoolRequest): google.storagetransfer.v1.DeleteAgentPoolRequest;

                /**
                 * Encodes the specified DeleteAgentPoolRequest message. Does not implicitly {@link google.storagetransfer.v1.DeleteAgentPoolRequest.verify|verify} messages.
                 * @param message DeleteAgentPoolRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.storagetransfer.v1.IDeleteAgentPoolRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified DeleteAgentPoolRequest message, length delimited. Does not implicitly {@link google.storagetransfer.v1.DeleteAgentPoolRequest.verify|verify} messages.
                 * @param message DeleteAgentPoolRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.storagetransfer.v1.IDeleteAgentPoolRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DeleteAgentPoolRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns DeleteAgentPoolRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.storagetransfer.v1.DeleteAgentPoolRequest;

                /**
                 * Decodes a DeleteAgentPoolRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns DeleteAgentPoolRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.storagetransfer.v1.DeleteAgentPoolRequest;

                /**
                 * Verifies a DeleteAgentPoolRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a DeleteAgentPoolRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns DeleteAgentPoolRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.storagetransfer.v1.DeleteAgentPoolRequest;

                /**
                 * Creates a plain object from a DeleteAgentPoolRequest message. Also converts values to other types if specified.
                 * @param message DeleteAgentPoolRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.storagetransfer.v1.DeleteAgentPoolRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this DeleteAgentPoolRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for DeleteAgentPoolRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a ListAgentPoolsRequest. */
            interface IListAgentPoolsRequest {

                /** ListAgentPoolsRequest projectId */
                projectId?: (string|null);

                /** ListAgentPoolsRequest filter */
                filter?: (string|null);

                /** ListAgentPoolsRequest pageSize */
                pageSize?: (number|null);

                /** ListAgentPoolsRequest pageToken */
                pageToken?: (string|null);
            }

            /** Represents a ListAgentPoolsRequest. */
            class ListAgentPoolsRequest implements IListAgentPoolsRequest {

                /**
                 * Constructs a new ListAgentPoolsRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.storagetransfer.v1.IListAgentPoolsRequest);

                /** ListAgentPoolsRequest projectId. */
                public projectId: string;

                /** ListAgentPoolsRequest filter. */
                public filter: string;

                /** ListAgentPoolsRequest pageSize. */
                public pageSize: number;

                /** ListAgentPoolsRequest pageToken. */
                public pageToken: string;

                /**
                 * Creates a new ListAgentPoolsRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ListAgentPoolsRequest instance
                 */
                public static create(properties?: google.storagetransfer.v1.IListAgentPoolsRequest): google.storagetransfer.v1.ListAgentPoolsRequest;

                /**
                 * Encodes the specified ListAgentPoolsRequest message. Does not implicitly {@link google.storagetransfer.v1.ListAgentPoolsRequest.verify|verify} messages.
                 * @param message ListAgentPoolsRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.storagetransfer.v1.IListAgentPoolsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ListAgentPoolsRequest message, length delimited. Does not implicitly {@link google.storagetransfer.v1.ListAgentPoolsRequest.verify|verify} messages.
                 * @param message ListAgentPoolsRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.storagetransfer.v1.IListAgentPoolsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ListAgentPoolsRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ListAgentPoolsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.storagetransfer.v1.ListAgentPoolsRequest;

                /**
                 * Decodes a ListAgentPoolsRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ListAgentPoolsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.storagetransfer.v1.ListAgentPoolsRequest;

                /**
                 * Verifies a ListAgentPoolsRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ListAgentPoolsRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ListAgentPoolsRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.storagetransfer.v1.ListAgentPoolsRequest;

                /**
                 * Creates a plain object from a ListAgentPoolsRequest message. Also converts values to other types if specified.
                 * @param message ListAgentPoolsRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.storagetransfer.v1.ListAgentPoolsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ListAgentPoolsRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ListAgentPoolsRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a ListAgentPoolsResponse. */
            interface IListAgentPoolsResponse {

                /** ListAgentPoolsResponse agentPools */
                agentPools?: (google.storagetransfer.v1.IAgentPool[]|null);

                /** ListAgentPoolsResponse nextPageToken */
                nextPageToken?: (string|null);
            }

            /** Represents a ListAgentPoolsResponse. */
            class ListAgentPoolsResponse implements IListAgentPoolsResponse {

                /**
                 * Constructs a new ListAgentPoolsResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.storagetransfer.v1.IListAgentPoolsResponse);

                /** ListAgentPoolsResponse agentPools. */
                public agentPools: google.storagetransfer.v1.IAgentPool[];

                /** ListAgentPoolsResponse nextPageToken. */
                public nextPageToken: string;

                /**
                 * Creates a new ListAgentPoolsResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ListAgentPoolsResponse instance
                 */
                public static create(properties?: google.storagetransfer.v1.IListAgentPoolsResponse): google.storagetransfer.v1.ListAgentPoolsResponse;

                /**
                 * Encodes the specified ListAgentPoolsResponse message. Does not implicitly {@link google.storagetransfer.v1.ListAgentPoolsResponse.verify|verify} messages.
                 * @param message ListAgentPoolsResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.storagetransfer.v1.IListAgentPoolsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ListAgentPoolsResponse message, length delimited. Does not implicitly {@link google.storagetransfer.v1.ListAgentPoolsResponse.verify|verify} messages.
                 * @param message ListAgentPoolsResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.storagetransfer.v1.IListAgentPoolsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ListAgentPoolsResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ListAgentPoolsResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.storagetransfer.v1.ListAgentPoolsResponse;

                /**
                 * Decodes a ListAgentPoolsResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ListAgentPoolsResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.storagetransfer.v1.ListAgentPoolsResponse;

                /**
                 * Verifies a ListAgentPoolsResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ListAgentPoolsResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ListAgentPoolsResponse
                 */
                public static fromObject(object: { [k: string]: any }): google.storagetransfer.v1.ListAgentPoolsResponse;

                /**
                 * Creates a plain object from a ListAgentPoolsResponse message. Also converts values to other types if specified.
                 * @param message ListAgentPoolsResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.storagetransfer.v1.ListAgentPoolsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ListAgentPoolsResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ListAgentPoolsResponse
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a GoogleServiceAccount. */
            interface IGoogleServiceAccount {

                /** GoogleServiceAccount accountEmail */
                accountEmail?: (string|null);

                /** GoogleServiceAccount subjectId */
                subjectId?: (string|null);
            }

            /** Represents a GoogleServiceAccount. */
            class GoogleServiceAccount implements IGoogleServiceAccount {

                /**
                 * Constructs a new GoogleServiceAccount.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.storagetransfer.v1.IGoogleServiceAccount);

                /** GoogleServiceAccount accountEmail. */
                public accountEmail: string;

                /** GoogleServiceAccount subjectId. */
                public subjectId: string;

                /**
                 * Creates a new GoogleServiceAccount instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GoogleServiceAccount instance
                 */
                public static create(properties?: google.storagetransfer.v1.IGoogleServiceAccount): google.storagetransfer.v1.GoogleServiceAccount;

                /**
                 * Encodes the specified GoogleServiceAccount message. Does not implicitly {@link google.storagetransfer.v1.GoogleServiceAccount.verify|verify} messages.
                 * @param message GoogleServiceAccount message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.storagetransfer.v1.IGoogleServiceAccount, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GoogleServiceAccount message, length delimited. Does not implicitly {@link google.storagetransfer.v1.GoogleServiceAccount.verify|verify} messages.
                 * @param message GoogleServiceAccount message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.storagetransfer.v1.IGoogleServiceAccount, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GoogleServiceAccount message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GoogleServiceAccount
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.storagetransfer.v1.GoogleServiceAccount;

                /**
                 * Decodes a GoogleServiceAccount message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GoogleServiceAccount
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.storagetransfer.v1.GoogleServiceAccount;

                /**
                 * Verifies a GoogleServiceAccount message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GoogleServiceAccount message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GoogleServiceAccount
                 */
                public static fromObject(object: { [k: string]: any }): google.storagetransfer.v1.GoogleServiceAccount;

                /**
                 * Creates a plain object from a GoogleServiceAccount message. Also converts values to other types if specified.
                 * @param message GoogleServiceAccount
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.storagetransfer.v1.GoogleServiceAccount, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GoogleServiceAccount to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for GoogleServiceAccount
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of an AwsAccessKey. */
            interface IAwsAccessKey {

                /** AwsAccessKey accessKeyId */
                accessKeyId?: (string|null);

                /** AwsAccessKey secretAccessKey */
                secretAccessKey?: (string|null);
            }

            /** Represents an AwsAccessKey. */
            class AwsAccessKey implements IAwsAccessKey {

                /**
                 * Constructs a new AwsAccessKey.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.storagetransfer.v1.IAwsAccessKey);

                /** AwsAccessKey accessKeyId. */
                public accessKeyId: string;

                /** AwsAccessKey secretAccessKey. */
                public secretAccessKey: string;

                /**
                 * Creates a new AwsAccessKey instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns AwsAccessKey instance
                 */
                public static create(properties?: google.storagetransfer.v1.IAwsAccessKey): google.storagetransfer.v1.AwsAccessKey;

                /**
                 * Encodes the specified AwsAccessKey message. Does not implicitly {@link google.storagetransfer.v1.AwsAccessKey.verify|verify} messages.
                 * @param message AwsAccessKey message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.storagetransfer.v1.IAwsAccessKey, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified AwsAccessKey message, length delimited. Does not implicitly {@link google.storagetransfer.v1.AwsAccessKey.verify|verify} messages.
                 * @param message AwsAccessKey message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.storagetransfer.v1.IAwsAccessKey, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an AwsAccessKey message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns AwsAccessKey
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.storagetransfer.v1.AwsAccessKey;

                /**
                 * Decodes an AwsAccessKey message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns AwsAccessKey
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.storagetransfer.v1.AwsAccessKey;

                /**
                 * Verifies an AwsAccessKey message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an AwsAccessKey message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns AwsAccessKey
                 */
                public static fromObject(object: { [k: string]: any }): google.storagetransfer.v1.AwsAccessKey;

                /**
                 * Creates a plain object from an AwsAccessKey message. Also converts values to other types if specified.
                 * @param message AwsAccessKey
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.storagetransfer.v1.AwsAccessKey, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this AwsAccessKey to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for AwsAccessKey
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of an AzureCredentials. */
            interface IAzureCredentials {

                /** AzureCredentials sasToken */
                sasToken?: (string|null);
            }

            /** Represents an AzureCredentials. */
            class AzureCredentials implements IAzureCredentials {

                /**
                 * Constructs a new AzureCredentials.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.storagetransfer.v1.IAzureCredentials);

                /** AzureCredentials sasToken. */
                public sasToken: string;

                /**
                 * Creates a new AzureCredentials instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns AzureCredentials instance
                 */
                public static create(properties?: google.storagetransfer.v1.IAzureCredentials): google.storagetransfer.v1.AzureCredentials;

                /**
                 * Encodes the specified AzureCredentials message. Does not implicitly {@link google.storagetransfer.v1.AzureCredentials.verify|verify} messages.
                 * @param message AzureCredentials message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.storagetransfer.v1.IAzureCredentials, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified AzureCredentials message, length delimited. Does not implicitly {@link google.storagetransfer.v1.AzureCredentials.verify|verify} messages.
                 * @param message AzureCredentials message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.storagetransfer.v1.IAzureCredentials, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an AzureCredentials message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns AzureCredentials
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.storagetransfer.v1.AzureCredentials;

                /**
                 * Decodes an AzureCredentials message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns AzureCredentials
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.storagetransfer.v1.AzureCredentials;

                /**
                 * Verifies an AzureCredentials message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an AzureCredentials message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns AzureCredentials
                 */
                public static fromObject(object: { [k: string]: any }): google.storagetransfer.v1.AzureCredentials;

                /**
                 * Creates a plain object from an AzureCredentials message. Also converts values to other types if specified.
                 * @param message AzureCredentials
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.storagetransfer.v1.AzureCredentials, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this AzureCredentials to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for AzureCredentials
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of an ObjectConditions. */
            interface IObjectConditions {

                /** ObjectConditions minTimeElapsedSinceLastModification */
                minTimeElapsedSinceLastModification?: (google.protobuf.IDuration|null);

                /** ObjectConditions maxTimeElapsedSinceLastModification */
                maxTimeElapsedSinceLastModification?: (google.protobuf.IDuration|null);

                /** ObjectConditions includePrefixes */
                includePrefixes?: (string[]|null);

                /** ObjectConditions excludePrefixes */
                excludePrefixes?: (string[]|null);

                /** ObjectConditions lastModifiedSince */
                lastModifiedSince?: (google.protobuf.ITimestamp|null);

                /** ObjectConditions lastModifiedBefore */
                lastModifiedBefore?: (google.protobuf.ITimestamp|null);
            }

            /** Represents an ObjectConditions. */
            class ObjectConditions implements IObjectConditions {

                /**
                 * Constructs a new ObjectConditions.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.storagetransfer.v1.IObjectConditions);

                /** ObjectConditions minTimeElapsedSinceLastModification. */
                public minTimeElapsedSinceLastModification?: (google.protobuf.IDuration|null);

                /** ObjectConditions maxTimeElapsedSinceLastModification. */
                public maxTimeElapsedSinceLastModification?: (google.protobuf.IDuration|null);

                /** ObjectConditions includePrefixes. */
                public includePrefixes: string[];

                /** ObjectConditions excludePrefixes. */
                public excludePrefixes: string[];

                /** ObjectConditions lastModifiedSince. */
                public lastModifiedSince?: (google.protobuf.ITimestamp|null);

                /** ObjectConditions lastModifiedBefore. */
                public lastModifiedBefore?: (google.protobuf.ITimestamp|null);

                /**
                 * Creates a new ObjectConditions instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ObjectConditions instance
                 */
                public static create(properties?: google.storagetransfer.v1.IObjectConditions): google.storagetransfer.v1.ObjectConditions;

                /**
                 * Encodes the specified ObjectConditions message. Does not implicitly {@link google.storagetransfer.v1.ObjectConditions.verify|verify} messages.
                 * @param message ObjectConditions message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.storagetransfer.v1.IObjectConditions, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ObjectConditions message, length delimited. Does not implicitly {@link google.storagetransfer.v1.ObjectConditions.verify|verify} messages.
                 * @param message ObjectConditions message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.storagetransfer.v1.IObjectConditions, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an ObjectConditions message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ObjectConditions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.storagetransfer.v1.ObjectConditions;

                /**
                 * Decodes an ObjectConditions message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ObjectConditions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.storagetransfer.v1.ObjectConditions;

                /**
                 * Verifies an ObjectConditions message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an ObjectConditions message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ObjectConditions
                 */
                public static fromObject(object: { [k: string]: any }): google.storagetransfer.v1.ObjectConditions;

                /**
                 * Creates a plain object from an ObjectConditions message. Also converts values to other types if specified.
                 * @param message ObjectConditions
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.storagetransfer.v1.ObjectConditions, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ObjectConditions to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ObjectConditions
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a GcsData. */
            interface IGcsData {

                /** GcsData bucketName */
                bucketName?: (string|null);

                /** GcsData path */
                path?: (string|null);

                /** GcsData managedFolderTransferEnabled */
                managedFolderTransferEnabled?: (boolean|null);
            }

            /** Represents a GcsData. */
            class GcsData implements IGcsData {

                /**
                 * Constructs a new GcsData.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.storagetransfer.v1.IGcsData);

                /** GcsData bucketName. */
                public bucketName: string;

                /** GcsData path. */
                public path: string;

                /** GcsData managedFolderTransferEnabled. */
                public managedFolderTransferEnabled: boolean;

                /**
                 * Creates a new GcsData instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GcsData instance
                 */
                public static create(properties?: google.storagetransfer.v1.IGcsData): google.storagetransfer.v1.GcsData;

                /**
                 * Encodes the specified GcsData message. Does not implicitly {@link google.storagetransfer.v1.GcsData.verify|verify} messages.
                 * @param message GcsData message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.storagetransfer.v1.IGcsData, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GcsData message, length delimited. Does not implicitly {@link google.storagetransfer.v1.GcsData.verify|verify} messages.
                 * @param message GcsData message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.storagetransfer.v1.IGcsData, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GcsData message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GcsData
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.storagetransfer.v1.GcsData;

                /**
                 * Decodes a GcsData message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GcsData
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.storagetransfer.v1.GcsData;

                /**
                 * Verifies a GcsData message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GcsData message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GcsData
                 */
                public static fromObject(object: { [k: string]: any }): google.storagetransfer.v1.GcsData;

                /**
                 * Creates a plain object from a GcsData message. Also converts values to other types if specified.
                 * @param message GcsData
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.storagetransfer.v1.GcsData, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GcsData to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for GcsData
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of an AwsS3Data. */
            interface IAwsS3Data {

                /** AwsS3Data bucketName */
                bucketName?: (string|null);

                /** AwsS3Data awsAccessKey */
                awsAccessKey?: (google.storagetransfer.v1.IAwsAccessKey|null);

                /** AwsS3Data path */
                path?: (string|null);

                /** AwsS3Data roleArn */
                roleArn?: (string|null);

                /** AwsS3Data cloudfrontDomain */
                cloudfrontDomain?: (string|null);

                /** AwsS3Data credentialsSecret */
                credentialsSecret?: (string|null);

                /** AwsS3Data managedPrivateNetwork */
                managedPrivateNetwork?: (boolean|null);
            }

            /** Represents an AwsS3Data. */
            class AwsS3Data implements IAwsS3Data {

                /**
                 * Constructs a new AwsS3Data.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.storagetransfer.v1.IAwsS3Data);

                /** AwsS3Data bucketName. */
                public bucketName: string;

                /** AwsS3Data awsAccessKey. */
                public awsAccessKey?: (google.storagetransfer.v1.IAwsAccessKey|null);

                /** AwsS3Data path. */
                public path: string;

                /** AwsS3Data roleArn. */
                public roleArn: string;

                /** AwsS3Data cloudfrontDomain. */
                public cloudfrontDomain: string;

                /** AwsS3Data credentialsSecret. */
                public credentialsSecret: string;

                /** AwsS3Data managedPrivateNetwork. */
                public managedPrivateNetwork?: (boolean|null);

                /** AwsS3Data privateNetwork. */
                public privateNetwork?: "managedPrivateNetwork";

                /**
                 * Creates a new AwsS3Data instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns AwsS3Data instance
                 */
                public static create(properties?: google.storagetransfer.v1.IAwsS3Data): google.storagetransfer.v1.AwsS3Data;

                /**
                 * Encodes the specified AwsS3Data message. Does not implicitly {@link google.storagetransfer.v1.AwsS3Data.verify|verify} messages.
                 * @param message AwsS3Data message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.storagetransfer.v1.IAwsS3Data, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified AwsS3Data message, length delimited. Does not implicitly {@link google.storagetransfer.v1.AwsS3Data.verify|verify} messages.
                 * @param message AwsS3Data message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.storagetransfer.v1.IAwsS3Data, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an AwsS3Data message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns AwsS3Data
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.storagetransfer.v1.AwsS3Data;

                /**
                 * Decodes an AwsS3Data message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns AwsS3Data
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.storagetransfer.v1.AwsS3Data;

                /**
                 * Verifies an AwsS3Data message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an AwsS3Data message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns AwsS3Data
                 */
                public static fromObject(object: { [k: string]: any }): google.storagetransfer.v1.AwsS3Data;

                /**
                 * Creates a plain object from an AwsS3Data message. Also converts values to other types if specified.
                 * @param message AwsS3Data
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.storagetransfer.v1.AwsS3Data, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this AwsS3Data to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for AwsS3Data
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of an AzureBlobStorageData. */
            interface IAzureBlobStorageData {

                /** AzureBlobStorageData storageAccount */
                storageAccount?: (string|null);

                /** AzureBlobStorageData azureCredentials */
                azureCredentials?: (google.storagetransfer.v1.IAzureCredentials|null);

                /** AzureBlobStorageData container */
                container?: (string|null);

                /** AzureBlobStorageData path */
                path?: (string|null);

                /** AzureBlobStorageData credentialsSecret */
                credentialsSecret?: (string|null);

                /** AzureBlobStorageData federatedIdentityConfig */
                federatedIdentityConfig?: (google.storagetransfer.v1.AzureBlobStorageData.IFederatedIdentityConfig|null);
            }

            /** Represents an AzureBlobStorageData. */
            class AzureBlobStorageData implements IAzureBlobStorageData {

                /**
                 * Constructs a new AzureBlobStorageData.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.storagetransfer.v1.IAzureBlobStorageData);

                /** AzureBlobStorageData storageAccount. */
                public storageAccount: string;

                /** AzureBlobStorageData azureCredentials. */
                public azureCredentials?: (google.storagetransfer.v1.IAzureCredentials|null);

                /** AzureBlobStorageData container. */
                public container: string;

                /** AzureBlobStorageData path. */
                public path: string;

                /** AzureBlobStorageData credentialsSecret. */
                public credentialsSecret: string;

                /** AzureBlobStorageData federatedIdentityConfig. */
                public federatedIdentityConfig?: (google.storagetransfer.v1.AzureBlobStorageData.IFederatedIdentityConfig|null);

                /**
                 * Creates a new AzureBlobStorageData instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns AzureBlobStorageData instance
                 */
                public static create(properties?: google.storagetransfer.v1.IAzureBlobStorageData): google.storagetransfer.v1.AzureBlobStorageData;

                /**
                 * Encodes the specified AzureBlobStorageData message. Does not implicitly {@link google.storagetransfer.v1.AzureBlobStorageData.verify|verify} messages.
                 * @param message AzureBlobStorageData message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.storagetransfer.v1.IAzureBlobStorageData, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified AzureBlobStorageData message, length delimited. Does not implicitly {@link google.storagetransfer.v1.AzureBlobStorageData.verify|verify} messages.
                 * @param message AzureBlobStorageData message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.storagetransfer.v1.IAzureBlobStorageData, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an AzureBlobStorageData message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns AzureBlobStorageData
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.storagetransfer.v1.AzureBlobStorageData;

                /**
                 * Decodes an AzureBlobStorageData message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns AzureBlobStorageData
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.storagetransfer.v1.AzureBlobStorageData;

                /**
                 * Verifies an AzureBlobStorageData message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an AzureBlobStorageData message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns AzureBlobStorageData
                 */
                public static fromObject(object: { [k: string]: any }): google.storagetransfer.v1.AzureBlobStorageData;

                /**
                 * Creates a plain object from an AzureBlobStorageData message. Also converts values to other types if specified.
                 * @param message AzureBlobStorageData
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.storagetransfer.v1.AzureBlobStorageData, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this AzureBlobStorageData to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for AzureBlobStorageData
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace AzureBlobStorageData {

                /** Properties of a FederatedIdentityConfig. */
                interface IFederatedIdentityConfig {

                    /** FederatedIdentityConfig clientId */
                    clientId?: (string|null);

                    /** FederatedIdentityConfig tenantId */
                    tenantId?: (string|null);
                }

                /** Represents a FederatedIdentityConfig. */
                class FederatedIdentityConfig implements IFederatedIdentityConfig {

                    /**
                     * Constructs a new FederatedIdentityConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.storagetransfer.v1.AzureBlobStorageData.IFederatedIdentityConfig);

                    /** FederatedIdentityConfig clientId. */
                    public clientId: string;

                    /** FederatedIdentityConfig tenantId. */
                    public tenantId: string;

                    /**
                     * Creates a new FederatedIdentityConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns FederatedIdentityConfig instance
                     */
                    public static create(properties?: google.storagetransfer.v1.AzureBlobStorageData.IFederatedIdentityConfig): google.storagetransfer.v1.AzureBlobStorageData.FederatedIdentityConfig;

                    /**
                     * Encodes the specified FederatedIdentityConfig message. Does not implicitly {@link google.storagetransfer.v1.AzureBlobStorageData.FederatedIdentityConfig.verify|verify} messages.
                     * @param message FederatedIdentityConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.storagetransfer.v1.AzureBlobStorageData.IFederatedIdentityConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified FederatedIdentityConfig message, length delimited. Does not implicitly {@link google.storagetransfer.v1.AzureBlobStorageData.FederatedIdentityConfig.verify|verify} messages.
                     * @param message FederatedIdentityConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.storagetransfer.v1.AzureBlobStorageData.IFederatedIdentityConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a FederatedIdentityConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns FederatedIdentityConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.storagetransfer.v1.AzureBlobStorageData.FederatedIdentityConfig;

                    /**
                     * Decodes a FederatedIdentityConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns FederatedIdentityConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.storagetransfer.v1.AzureBlobStorageData.FederatedIdentityConfig;

                    /**
                     * Verifies a FederatedIdentityConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a FederatedIdentityConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns FederatedIdentityConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.storagetransfer.v1.AzureBlobStorageData.FederatedIdentityConfig;

                    /**
                     * Creates a plain object from a FederatedIdentityConfig message. Also converts values to other types if specified.
                     * @param message FederatedIdentityConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.storagetransfer.v1.AzureBlobStorageData.FederatedIdentityConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this FederatedIdentityConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for FederatedIdentityConfig
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }
            }

            /** Properties of a HttpData. */
            interface IHttpData {

                /** HttpData listUrl */
                listUrl?: (string|null);
            }

            /** Represents a HttpData. */
            class HttpData implements IHttpData {

                /**
                 * Constructs a new HttpData.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.storagetransfer.v1.IHttpData);

                /** HttpData listUrl. */
                public listUrl: string;

                /**
                 * Creates a new HttpData instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns HttpData instance
                 */
                public static create(properties?: google.storagetransfer.v1.IHttpData): google.storagetransfer.v1.HttpData;

                /**
                 * Encodes the specified HttpData message. Does not implicitly {@link google.storagetransfer.v1.HttpData.verify|verify} messages.
                 * @param message HttpData message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.storagetransfer.v1.IHttpData, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified HttpData message, length delimited. Does not implicitly {@link google.storagetransfer.v1.HttpData.verify|verify} messages.
                 * @param message HttpData message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.storagetransfer.v1.IHttpData, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a HttpData message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns HttpData
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.storagetransfer.v1.HttpData;

                /**
                 * Decodes a HttpData message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns HttpData
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.storagetransfer.v1.HttpData;

                /**
                 * Verifies a HttpData message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a HttpData message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns HttpData
                 */
                public static fromObject(object: { [k: string]: any }): google.storagetransfer.v1.HttpData;

                /**
                 * Creates a plain object from a HttpData message. Also converts values to other types if specified.
                 * @param message HttpData
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.storagetransfer.v1.HttpData, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this HttpData to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for HttpData
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a PosixFilesystem. */
            interface IPosixFilesystem {

                /** PosixFilesystem rootDirectory */
                rootDirectory?: (string|null);
            }

            /** Represents a PosixFilesystem. */
            class PosixFilesystem implements IPosixFilesystem {

                /**
                 * Constructs a new PosixFilesystem.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.storagetransfer.v1.IPosixFilesystem);

                /** PosixFilesystem rootDirectory. */
                public rootDirectory: string;

                /**
                 * Creates a new PosixFilesystem instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns PosixFilesystem instance
                 */
                public static create(properties?: google.storagetransfer.v1.IPosixFilesystem): google.storagetransfer.v1.PosixFilesystem;

                /**
                 * Encodes the specified PosixFilesystem message. Does not implicitly {@link google.storagetransfer.v1.PosixFilesystem.verify|verify} messages.
                 * @param message PosixFilesystem message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.storagetransfer.v1.IPosixFilesystem, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified PosixFilesystem message, length delimited. Does not implicitly {@link google.storagetransfer.v1.PosixFilesystem.verify|verify} messages.
                 * @param message PosixFilesystem message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.storagetransfer.v1.IPosixFilesystem, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a PosixFilesystem message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns PosixFilesystem
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.storagetransfer.v1.PosixFilesystem;

                /**
                 * Decodes a PosixFilesystem message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns PosixFilesystem
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.storagetransfer.v1.PosixFilesystem;

                /**
                 * Verifies a PosixFilesystem message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a PosixFilesystem message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns PosixFilesystem
                 */
                public static fromObject(object: { [k: string]: any }): google.storagetransfer.v1.PosixFilesystem;

                /**
                 * Creates a plain object from a PosixFilesystem message. Also converts values to other types if specified.
                 * @param message PosixFilesystem
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.storagetransfer.v1.PosixFilesystem, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this PosixFilesystem to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for PosixFilesystem
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a HdfsData. */
            interface IHdfsData {

                /** HdfsData path */
                path?: (string|null);
            }

            /** Represents a HdfsData. */
            class HdfsData implements IHdfsData {

                /**
                 * Constructs a new HdfsData.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.storagetransfer.v1.IHdfsData);

                /** HdfsData path. */
                public path: string;

                /**
                 * Creates a new HdfsData instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns HdfsData instance
                 */
                public static create(properties?: google.storagetransfer.v1.IHdfsData): google.storagetransfer.v1.HdfsData;

                /**
                 * Encodes the specified HdfsData message. Does not implicitly {@link google.storagetransfer.v1.HdfsData.verify|verify} messages.
                 * @param message HdfsData message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.storagetransfer.v1.IHdfsData, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified HdfsData message, length delimited. Does not implicitly {@link google.storagetransfer.v1.HdfsData.verify|verify} messages.
                 * @param message HdfsData message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.storagetransfer.v1.IHdfsData, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a HdfsData message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns HdfsData
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.storagetransfer.v1.HdfsData;

                /**
                 * Decodes a HdfsData message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns HdfsData
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.storagetransfer.v1.HdfsData;

                /**
                 * Verifies a HdfsData message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a HdfsData message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns HdfsData
                 */
                public static fromObject(object: { [k: string]: any }): google.storagetransfer.v1.HdfsData;

                /**
                 * Creates a plain object from a HdfsData message. Also converts values to other types if specified.
                 * @param message HdfsData
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.storagetransfer.v1.HdfsData, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this HdfsData to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for HdfsData
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of an AwsS3CompatibleData. */
            interface IAwsS3CompatibleData {

                /** AwsS3CompatibleData bucketName */
                bucketName?: (string|null);

                /** AwsS3CompatibleData path */
                path?: (string|null);

                /** AwsS3CompatibleData endpoint */
                endpoint?: (string|null);

                /** AwsS3CompatibleData region */
                region?: (string|null);

                /** AwsS3CompatibleData s3Metadata */
                s3Metadata?: (google.storagetransfer.v1.IS3CompatibleMetadata|null);
            }

            /** Represents an AwsS3CompatibleData. */
            class AwsS3CompatibleData implements IAwsS3CompatibleData {

                /**
                 * Constructs a new AwsS3CompatibleData.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.storagetransfer.v1.IAwsS3CompatibleData);

                /** AwsS3CompatibleData bucketName. */
                public bucketName: string;

                /** AwsS3CompatibleData path. */
                public path: string;

                /** AwsS3CompatibleData endpoint. */
                public endpoint: string;

                /** AwsS3CompatibleData region. */
                public region: string;

                /** AwsS3CompatibleData s3Metadata. */
                public s3Metadata?: (google.storagetransfer.v1.IS3CompatibleMetadata|null);

                /** AwsS3CompatibleData dataProvider. */
                public dataProvider?: "s3Metadata";

                /**
                 * Creates a new AwsS3CompatibleData instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns AwsS3CompatibleData instance
                 */
                public static create(properties?: google.storagetransfer.v1.IAwsS3CompatibleData): google.storagetransfer.v1.AwsS3CompatibleData;

                /**
                 * Encodes the specified AwsS3CompatibleData message. Does not implicitly {@link google.storagetransfer.v1.AwsS3CompatibleData.verify|verify} messages.
                 * @param message AwsS3CompatibleData message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.storagetransfer.v1.IAwsS3CompatibleData, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified AwsS3CompatibleData message, length delimited. Does not implicitly {@link google.storagetransfer.v1.AwsS3CompatibleData.verify|verify} messages.
                 * @param message AwsS3CompatibleData message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.storagetransfer.v1.IAwsS3CompatibleData, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an AwsS3CompatibleData message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns AwsS3CompatibleData
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.storagetransfer.v1.AwsS3CompatibleData;

                /**
                 * Decodes an AwsS3CompatibleData message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns AwsS3CompatibleData
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.storagetransfer.v1.AwsS3CompatibleData;

                /**
                 * Verifies an AwsS3CompatibleData message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an AwsS3CompatibleData message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns AwsS3CompatibleData
                 */
                public static fromObject(object: { [k: string]: any }): google.storagetransfer.v1.AwsS3CompatibleData;

                /**
                 * Creates a plain object from an AwsS3CompatibleData message. Also converts values to other types if specified.
                 * @param message AwsS3CompatibleData
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.storagetransfer.v1.AwsS3CompatibleData, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this AwsS3CompatibleData to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for AwsS3CompatibleData
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a S3CompatibleMetadata. */
            interface IS3CompatibleMetadata {

                /** S3CompatibleMetadata authMethod */
                authMethod?: (google.storagetransfer.v1.S3CompatibleMetadata.AuthMethod|keyof typeof google.storagetransfer.v1.S3CompatibleMetadata.AuthMethod|null);

                /** S3CompatibleMetadata requestModel */
                requestModel?: (google.storagetransfer.v1.S3CompatibleMetadata.RequestModel|keyof typeof google.storagetransfer.v1.S3CompatibleMetadata.RequestModel|null);

                /** S3CompatibleMetadata protocol */
                protocol?: (google.storagetransfer.v1.S3CompatibleMetadata.NetworkProtocol|keyof typeof google.storagetransfer.v1.S3CompatibleMetadata.NetworkProtocol|null);

                /** S3CompatibleMetadata listApi */
                listApi?: (google.storagetransfer.v1.S3CompatibleMetadata.ListApi|keyof typeof google.storagetransfer.v1.S3CompatibleMetadata.ListApi|null);
            }

            /** Represents a S3CompatibleMetadata. */
            class S3CompatibleMetadata implements IS3CompatibleMetadata {

                /**
                 * Constructs a new S3CompatibleMetadata.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.storagetransfer.v1.IS3CompatibleMetadata);

                /** S3CompatibleMetadata authMethod. */
                public authMethod: (google.storagetransfer.v1.S3CompatibleMetadata.AuthMethod|keyof typeof google.storagetransfer.v1.S3CompatibleMetadata.AuthMethod);

                /** S3CompatibleMetadata requestModel. */
                public requestModel: (google.storagetransfer.v1.S3CompatibleMetadata.RequestModel|keyof typeof google.storagetransfer.v1.S3CompatibleMetadata.RequestModel);

                /** S3CompatibleMetadata protocol. */
                public protocol: (google.storagetransfer.v1.S3CompatibleMetadata.NetworkProtocol|keyof typeof google.storagetransfer.v1.S3CompatibleMetadata.NetworkProtocol);

                /** S3CompatibleMetadata listApi. */
                public listApi: (google.storagetransfer.v1.S3CompatibleMetadata.ListApi|keyof typeof google.storagetransfer.v1.S3CompatibleMetadata.ListApi);

                /**
                 * Creates a new S3CompatibleMetadata instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns S3CompatibleMetadata instance
                 */
                public static create(properties?: google.storagetransfer.v1.IS3CompatibleMetadata): google.storagetransfer.v1.S3CompatibleMetadata;

                /**
                 * Encodes the specified S3CompatibleMetadata message. Does not implicitly {@link google.storagetransfer.v1.S3CompatibleMetadata.verify|verify} messages.
                 * @param message S3CompatibleMetadata message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.storagetransfer.v1.IS3CompatibleMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified S3CompatibleMetadata message, length delimited. Does not implicitly {@link google.storagetransfer.v1.S3CompatibleMetadata.verify|verify} messages.
                 * @param message S3CompatibleMetadata message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.storagetransfer.v1.IS3CompatibleMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a S3CompatibleMetadata message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns S3CompatibleMetadata
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.storagetransfer.v1.S3CompatibleMetadata;

                /**
                 * Decodes a S3CompatibleMetadata message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns S3CompatibleMetadata
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.storagetransfer.v1.S3CompatibleMetadata;

                /**
                 * Verifies a S3CompatibleMetadata message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a S3CompatibleMetadata message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns S3CompatibleMetadata
                 */
                public static fromObject(object: { [k: string]: any }): google.storagetransfer.v1.S3CompatibleMetadata;

                /**
                 * Creates a plain object from a S3CompatibleMetadata message. Also converts values to other types if specified.
                 * @param message S3CompatibleMetadata
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.storagetransfer.v1.S3CompatibleMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this S3CompatibleMetadata to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for S3CompatibleMetadata
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace S3CompatibleMetadata {

                /** AuthMethod enum. */
                enum AuthMethod {
                    AUTH_METHOD_UNSPECIFIED = 0,
                    AUTH_METHOD_AWS_SIGNATURE_V4 = 1,
                    AUTH_METHOD_AWS_SIGNATURE_V2 = 2
                }

                /** RequestModel enum. */
                enum RequestModel {
                    REQUEST_MODEL_UNSPECIFIED = 0,
                    REQUEST_MODEL_VIRTUAL_HOSTED_STYLE = 1,
                    REQUEST_MODEL_PATH_STYLE = 2
                }

                /** NetworkProtocol enum. */
                enum NetworkProtocol {
                    NETWORK_PROTOCOL_UNSPECIFIED = 0,
                    NETWORK_PROTOCOL_HTTPS = 1,
                    NETWORK_PROTOCOL_HTTP = 2
                }

                /** ListApi enum. */
                enum ListApi {
                    LIST_API_UNSPECIFIED = 0,
                    LIST_OBJECTS_V2 = 1,
                    LIST_OBJECTS = 2
                }
            }

            /** Properties of an AgentPool. */
            interface IAgentPool {

                /** AgentPool name */
                name?: (string|null);

                /** AgentPool displayName */
                displayName?: (string|null);

                /** AgentPool state */
                state?: (google.storagetransfer.v1.AgentPool.State|keyof typeof google.storagetransfer.v1.AgentPool.State|null);

                /** AgentPool bandwidthLimit */
                bandwidthLimit?: (google.storagetransfer.v1.AgentPool.IBandwidthLimit|null);
            }

            /** Represents an AgentPool. */
            class AgentPool implements IAgentPool {

                /**
                 * Constructs a new AgentPool.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.storagetransfer.v1.IAgentPool);

                /** AgentPool name. */
                public name: string;

                /** AgentPool displayName. */
                public displayName: string;

                /** AgentPool state. */
                public state: (google.storagetransfer.v1.AgentPool.State|keyof typeof google.storagetransfer.v1.AgentPool.State);

                /** AgentPool bandwidthLimit. */
                public bandwidthLimit?: (google.storagetransfer.v1.AgentPool.IBandwidthLimit|null);

                /**
                 * Creates a new AgentPool instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns AgentPool instance
                 */
                public static create(properties?: google.storagetransfer.v1.IAgentPool): google.storagetransfer.v1.AgentPool;

                /**
                 * Encodes the specified AgentPool message. Does not implicitly {@link google.storagetransfer.v1.AgentPool.verify|verify} messages.
                 * @param message AgentPool message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.storagetransfer.v1.IAgentPool, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified AgentPool message, length delimited. Does not implicitly {@link google.storagetransfer.v1.AgentPool.verify|verify} messages.
                 * @param message AgentPool message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.storagetransfer.v1.IAgentPool, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an AgentPool message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns AgentPool
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.storagetransfer.v1.AgentPool;

                /**
                 * Decodes an AgentPool message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns AgentPool
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.storagetransfer.v1.AgentPool;

                /**
                 * Verifies an AgentPool message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an AgentPool message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns AgentPool
                 */
                public static fromObject(object: { [k: string]: any }): google.storagetransfer.v1.AgentPool;

                /**
                 * Creates a plain object from an AgentPool message. Also converts values to other types if specified.
                 * @param message AgentPool
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.storagetransfer.v1.AgentPool, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this AgentPool to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for AgentPool
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace AgentPool {

                /** State enum. */
                enum State {
                    STATE_UNSPECIFIED = 0,
                    CREATING = 1,
                    CREATED = 2,
                    DELETING = 3
                }

                /** Properties of a BandwidthLimit. */
                interface IBandwidthLimit {

                    /** BandwidthLimit limitMbps */
                    limitMbps?: (number|Long|string|null);
                }

                /** Represents a BandwidthLimit. */
                class BandwidthLimit implements IBandwidthLimit {

                    /**
                     * Constructs a new BandwidthLimit.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.storagetransfer.v1.AgentPool.IBandwidthLimit);

                    /** BandwidthLimit limitMbps. */
                    public limitMbps: (number|Long|string);

                    /**
                     * Creates a new BandwidthLimit instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns BandwidthLimit instance
                     */
                    public static create(properties?: google.storagetransfer.v1.AgentPool.IBandwidthLimit): google.storagetransfer.v1.AgentPool.BandwidthLimit;

                    /**
                     * Encodes the specified BandwidthLimit message. Does not implicitly {@link google.storagetransfer.v1.AgentPool.BandwidthLimit.verify|verify} messages.
                     * @param message BandwidthLimit message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.storagetransfer.v1.AgentPool.IBandwidthLimit, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified BandwidthLimit message, length delimited. Does not implicitly {@link google.storagetransfer.v1.AgentPool.BandwidthLimit.verify|verify} messages.
                     * @param message BandwidthLimit message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.storagetransfer.v1.AgentPool.IBandwidthLimit, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a BandwidthLimit message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns BandwidthLimit
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.storagetransfer.v1.AgentPool.BandwidthLimit;

                    /**
                     * Decodes a BandwidthLimit message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns BandwidthLimit
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.storagetransfer.v1.AgentPool.BandwidthLimit;

                    /**
                     * Verifies a BandwidthLimit message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a BandwidthLimit message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns BandwidthLimit
                     */
                    public static fromObject(object: { [k: string]: any }): google.storagetransfer.v1.AgentPool.BandwidthLimit;

                    /**
                     * Creates a plain object from a BandwidthLimit message. Also converts values to other types if specified.
                     * @param message BandwidthLimit
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.storagetransfer.v1.AgentPool.BandwidthLimit, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this BandwidthLimit to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for BandwidthLimit
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }
            }

            /** Properties of a TransferOptions. */
            interface ITransferOptions {

                /** TransferOptions overwriteObjectsAlreadyExistingInSink */
                overwriteObjectsAlreadyExistingInSink?: (boolean|null);

                /** TransferOptions deleteObjectsUniqueInSink */
                deleteObjectsUniqueInSink?: (boolean|null);

                /** TransferOptions deleteObjectsFromSourceAfterTransfer */
                deleteObjectsFromSourceAfterTransfer?: (boolean|null);

                /** TransferOptions overwriteWhen */
                overwriteWhen?: (google.storagetransfer.v1.TransferOptions.OverwriteWhen|keyof typeof google.storagetransfer.v1.TransferOptions.OverwriteWhen|null);

                /** TransferOptions metadataOptions */
                metadataOptions?: (google.storagetransfer.v1.IMetadataOptions|null);
            }

            /** Represents a TransferOptions. */
            class TransferOptions implements ITransferOptions {

                /**
                 * Constructs a new TransferOptions.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.storagetransfer.v1.ITransferOptions);

                /** TransferOptions overwriteObjectsAlreadyExistingInSink. */
                public overwriteObjectsAlreadyExistingInSink: boolean;

                /** TransferOptions deleteObjectsUniqueInSink. */
                public deleteObjectsUniqueInSink: boolean;

                /** TransferOptions deleteObjectsFromSourceAfterTransfer. */
                public deleteObjectsFromSourceAfterTransfer: boolean;

                /** TransferOptions overwriteWhen. */
                public overwriteWhen: (google.storagetransfer.v1.TransferOptions.OverwriteWhen|keyof typeof google.storagetransfer.v1.TransferOptions.OverwriteWhen);

                /** TransferOptions metadataOptions. */
                public metadataOptions?: (google.storagetransfer.v1.IMetadataOptions|null);

                /**
                 * Creates a new TransferOptions instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns TransferOptions instance
                 */
                public static create(properties?: google.storagetransfer.v1.ITransferOptions): google.storagetransfer.v1.TransferOptions;

                /**
                 * Encodes the specified TransferOptions message. Does not implicitly {@link google.storagetransfer.v1.TransferOptions.verify|verify} messages.
                 * @param message TransferOptions message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.storagetransfer.v1.ITransferOptions, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified TransferOptions message, length delimited. Does not implicitly {@link google.storagetransfer.v1.TransferOptions.verify|verify} messages.
                 * @param message TransferOptions message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.storagetransfer.v1.ITransferOptions, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a TransferOptions message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns TransferOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.storagetransfer.v1.TransferOptions;

                /**
                 * Decodes a TransferOptions message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns TransferOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.storagetransfer.v1.TransferOptions;

                /**
                 * Verifies a TransferOptions message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a TransferOptions message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns TransferOptions
                 */
                public static fromObject(object: { [k: string]: any }): google.storagetransfer.v1.TransferOptions;

                /**
                 * Creates a plain object from a TransferOptions message. Also converts values to other types if specified.
                 * @param message TransferOptions
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.storagetransfer.v1.TransferOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this TransferOptions to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for TransferOptions
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace TransferOptions {

                /** OverwriteWhen enum. */
                enum OverwriteWhen {
                    OVERWRITE_WHEN_UNSPECIFIED = 0,
                    DIFFERENT = 1,
                    NEVER = 2,
                    ALWAYS = 3
                }
            }

            /** Properties of a TransferSpec. */
            interface ITransferSpec {

                /** TransferSpec gcsDataSink */
                gcsDataSink?: (google.storagetransfer.v1.IGcsData|null);

                /** TransferSpec posixDataSink */
                posixDataSink?: (google.storagetransfer.v1.IPosixFilesystem|null);

                /** TransferSpec gcsDataSource */
                gcsDataSource?: (google.storagetransfer.v1.IGcsData|null);

                /** TransferSpec awsS3DataSource */
                awsS3DataSource?: (google.storagetransfer.v1.IAwsS3Data|null);

                /** TransferSpec httpDataSource */
                httpDataSource?: (google.storagetransfer.v1.IHttpData|null);

                /** TransferSpec posixDataSource */
                posixDataSource?: (google.storagetransfer.v1.IPosixFilesystem|null);

                /** TransferSpec azureBlobStorageDataSource */
                azureBlobStorageDataSource?: (google.storagetransfer.v1.IAzureBlobStorageData|null);

                /** TransferSpec awsS3CompatibleDataSource */
                awsS3CompatibleDataSource?: (google.storagetransfer.v1.IAwsS3CompatibleData|null);

                /** TransferSpec hdfsDataSource */
                hdfsDataSource?: (google.storagetransfer.v1.IHdfsData|null);

                /** TransferSpec gcsIntermediateDataLocation */
                gcsIntermediateDataLocation?: (google.storagetransfer.v1.IGcsData|null);

                /** TransferSpec objectConditions */
                objectConditions?: (google.storagetransfer.v1.IObjectConditions|null);

                /** TransferSpec transferOptions */
                transferOptions?: (google.storagetransfer.v1.ITransferOptions|null);

                /** TransferSpec transferManifest */
                transferManifest?: (google.storagetransfer.v1.ITransferManifest|null);

                /** TransferSpec sourceAgentPoolName */
                sourceAgentPoolName?: (string|null);

                /** TransferSpec sinkAgentPoolName */
                sinkAgentPoolName?: (string|null);
            }

            /** Represents a TransferSpec. */
            class TransferSpec implements ITransferSpec {

                /**
                 * Constructs a new TransferSpec.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.storagetransfer.v1.ITransferSpec);

                /** TransferSpec gcsDataSink. */
                public gcsDataSink?: (google.storagetransfer.v1.IGcsData|null);

                /** TransferSpec posixDataSink. */
                public posixDataSink?: (google.storagetransfer.v1.IPosixFilesystem|null);

                /** TransferSpec gcsDataSource. */
                public gcsDataSource?: (google.storagetransfer.v1.IGcsData|null);

                /** TransferSpec awsS3DataSource. */
                public awsS3DataSource?: (google.storagetransfer.v1.IAwsS3Data|null);

                /** TransferSpec httpDataSource. */
                public httpDataSource?: (google.storagetransfer.v1.IHttpData|null);

                /** TransferSpec posixDataSource. */
                public posixDataSource?: (google.storagetransfer.v1.IPosixFilesystem|null);

                /** TransferSpec azureBlobStorageDataSource. */
                public azureBlobStorageDataSource?: (google.storagetransfer.v1.IAzureBlobStorageData|null);

                /** TransferSpec awsS3CompatibleDataSource. */
                public awsS3CompatibleDataSource?: (google.storagetransfer.v1.IAwsS3CompatibleData|null);

                /** TransferSpec hdfsDataSource. */
                public hdfsDataSource?: (google.storagetransfer.v1.IHdfsData|null);

                /** TransferSpec gcsIntermediateDataLocation. */
                public gcsIntermediateDataLocation?: (google.storagetransfer.v1.IGcsData|null);

                /** TransferSpec objectConditions. */
                public objectConditions?: (google.storagetransfer.v1.IObjectConditions|null);

                /** TransferSpec transferOptions. */
                public transferOptions?: (google.storagetransfer.v1.ITransferOptions|null);

                /** TransferSpec transferManifest. */
                public transferManifest?: (google.storagetransfer.v1.ITransferManifest|null);

                /** TransferSpec sourceAgentPoolName. */
                public sourceAgentPoolName: string;

                /** TransferSpec sinkAgentPoolName. */
                public sinkAgentPoolName: string;

                /** TransferSpec dataSink. */
                public dataSink?: ("gcsDataSink"|"posixDataSink");

                /** TransferSpec dataSource. */
                public dataSource?: ("gcsDataSource"|"awsS3DataSource"|"httpDataSource"|"posixDataSource"|"azureBlobStorageDataSource"|"awsS3CompatibleDataSource"|"hdfsDataSource");

                /** TransferSpec intermediateDataLocation. */
                public intermediateDataLocation?: "gcsIntermediateDataLocation";

                /**
                 * Creates a new TransferSpec instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns TransferSpec instance
                 */
                public static create(properties?: google.storagetransfer.v1.ITransferSpec): google.storagetransfer.v1.TransferSpec;

                /**
                 * Encodes the specified TransferSpec message. Does not implicitly {@link google.storagetransfer.v1.TransferSpec.verify|verify} messages.
                 * @param message TransferSpec message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.storagetransfer.v1.ITransferSpec, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified TransferSpec message, length delimited. Does not implicitly {@link google.storagetransfer.v1.TransferSpec.verify|verify} messages.
                 * @param message TransferSpec message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.storagetransfer.v1.ITransferSpec, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a TransferSpec message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns TransferSpec
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.storagetransfer.v1.TransferSpec;

                /**
                 * Decodes a TransferSpec message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns TransferSpec
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.storagetransfer.v1.TransferSpec;

                /**
                 * Verifies a TransferSpec message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a TransferSpec message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns TransferSpec
                 */
                public static fromObject(object: { [k: string]: any }): google.storagetransfer.v1.TransferSpec;

                /**
                 * Creates a plain object from a TransferSpec message. Also converts values to other types if specified.
                 * @param message TransferSpec
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.storagetransfer.v1.TransferSpec, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this TransferSpec to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for TransferSpec
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a ReplicationSpec. */
            interface IReplicationSpec {

                /** ReplicationSpec gcsDataSource */
                gcsDataSource?: (google.storagetransfer.v1.IGcsData|null);

                /** ReplicationSpec gcsDataSink */
                gcsDataSink?: (google.storagetransfer.v1.IGcsData|null);

                /** ReplicationSpec objectConditions */
                objectConditions?: (google.storagetransfer.v1.IObjectConditions|null);

                /** ReplicationSpec transferOptions */
                transferOptions?: (google.storagetransfer.v1.ITransferOptions|null);
            }

            /** Represents a ReplicationSpec. */
            class ReplicationSpec implements IReplicationSpec {

                /**
                 * Constructs a new ReplicationSpec.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.storagetransfer.v1.IReplicationSpec);

                /** ReplicationSpec gcsDataSource. */
                public gcsDataSource?: (google.storagetransfer.v1.IGcsData|null);

                /** ReplicationSpec gcsDataSink. */
                public gcsDataSink?: (google.storagetransfer.v1.IGcsData|null);

                /** ReplicationSpec objectConditions. */
                public objectConditions?: (google.storagetransfer.v1.IObjectConditions|null);

                /** ReplicationSpec transferOptions. */
                public transferOptions?: (google.storagetransfer.v1.ITransferOptions|null);

                /** ReplicationSpec dataSource. */
                public dataSource?: "gcsDataSource";

                /** ReplicationSpec dataSink. */
                public dataSink?: "gcsDataSink";

                /**
                 * Creates a new ReplicationSpec instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ReplicationSpec instance
                 */
                public static create(properties?: google.storagetransfer.v1.IReplicationSpec): google.storagetransfer.v1.ReplicationSpec;

                /**
                 * Encodes the specified ReplicationSpec message. Does not implicitly {@link google.storagetransfer.v1.ReplicationSpec.verify|verify} messages.
                 * @param message ReplicationSpec message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.storagetransfer.v1.IReplicationSpec, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ReplicationSpec message, length delimited. Does not implicitly {@link google.storagetransfer.v1.ReplicationSpec.verify|verify} messages.
                 * @param message ReplicationSpec message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.storagetransfer.v1.IReplicationSpec, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ReplicationSpec message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ReplicationSpec
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.storagetransfer.v1.ReplicationSpec;

                /**
                 * Decodes a ReplicationSpec message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ReplicationSpec
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.storagetransfer.v1.ReplicationSpec;

                /**
                 * Verifies a ReplicationSpec message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ReplicationSpec message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ReplicationSpec
                 */
                public static fromObject(object: { [k: string]: any }): google.storagetransfer.v1.ReplicationSpec;

                /**
                 * Creates a plain object from a ReplicationSpec message. Also converts values to other types if specified.
                 * @param message ReplicationSpec
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.storagetransfer.v1.ReplicationSpec, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ReplicationSpec to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ReplicationSpec
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a MetadataOptions. */
            interface IMetadataOptions {

                /** MetadataOptions symlink */
                symlink?: (google.storagetransfer.v1.MetadataOptions.Symlink|keyof typeof google.storagetransfer.v1.MetadataOptions.Symlink|null);

                /** MetadataOptions mode */
                mode?: (google.storagetransfer.v1.MetadataOptions.Mode|keyof typeof google.storagetransfer.v1.MetadataOptions.Mode|null);

                /** MetadataOptions gid */
                gid?: (google.storagetransfer.v1.MetadataOptions.GID|keyof typeof google.storagetransfer.v1.MetadataOptions.GID|null);

                /** MetadataOptions uid */
                uid?: (google.storagetransfer.v1.MetadataOptions.UID|keyof typeof google.storagetransfer.v1.MetadataOptions.UID|null);

                /** MetadataOptions acl */
                acl?: (google.storagetransfer.v1.MetadataOptions.Acl|keyof typeof google.storagetransfer.v1.MetadataOptions.Acl|null);

                /** MetadataOptions storageClass */
                storageClass?: (google.storagetransfer.v1.MetadataOptions.StorageClass|keyof typeof google.storagetransfer.v1.MetadataOptions.StorageClass|null);

                /** MetadataOptions temporaryHold */
                temporaryHold?: (google.storagetransfer.v1.MetadataOptions.TemporaryHold|keyof typeof google.storagetransfer.v1.MetadataOptions.TemporaryHold|null);

                /** MetadataOptions kmsKey */
                kmsKey?: (google.storagetransfer.v1.MetadataOptions.KmsKey|keyof typeof google.storagetransfer.v1.MetadataOptions.KmsKey|null);

                /** MetadataOptions timeCreated */
                timeCreated?: (google.storagetransfer.v1.MetadataOptions.TimeCreated|keyof typeof google.storagetransfer.v1.MetadataOptions.TimeCreated|null);
            }

            /** Represents a MetadataOptions. */
            class MetadataOptions implements IMetadataOptions {

                /**
                 * Constructs a new MetadataOptions.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.storagetransfer.v1.IMetadataOptions);

                /** MetadataOptions symlink. */
                public symlink: (google.storagetransfer.v1.MetadataOptions.Symlink|keyof typeof google.storagetransfer.v1.MetadataOptions.Symlink);

                /** MetadataOptions mode. */
                public mode: (google.storagetransfer.v1.MetadataOptions.Mode|keyof typeof google.storagetransfer.v1.MetadataOptions.Mode);

                /** MetadataOptions gid. */
                public gid: (google.storagetransfer.v1.MetadataOptions.GID|keyof typeof google.storagetransfer.v1.MetadataOptions.GID);

                /** MetadataOptions uid. */
                public uid: (google.storagetransfer.v1.MetadataOptions.UID|keyof typeof google.storagetransfer.v1.MetadataOptions.UID);

                /** MetadataOptions acl. */
                public acl: (google.storagetransfer.v1.MetadataOptions.Acl|keyof typeof google.storagetransfer.v1.MetadataOptions.Acl);

                /** MetadataOptions storageClass. */
                public storageClass: (google.storagetransfer.v1.MetadataOptions.StorageClass|keyof typeof google.storagetransfer.v1.MetadataOptions.StorageClass);

                /** MetadataOptions temporaryHold. */
                public temporaryHold: (google.storagetransfer.v1.MetadataOptions.TemporaryHold|keyof typeof google.storagetransfer.v1.MetadataOptions.TemporaryHold);

                /** MetadataOptions kmsKey. */
                public kmsKey: (google.storagetransfer.v1.MetadataOptions.KmsKey|keyof typeof google.storagetransfer.v1.MetadataOptions.KmsKey);

                /** MetadataOptions timeCreated. */
                public timeCreated: (google.storagetransfer.v1.MetadataOptions.TimeCreated|keyof typeof google.storagetransfer.v1.MetadataOptions.TimeCreated);

                /**
                 * Creates a new MetadataOptions instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns MetadataOptions instance
                 */
                public static create(properties?: google.storagetransfer.v1.IMetadataOptions): google.storagetransfer.v1.MetadataOptions;

                /**
                 * Encodes the specified MetadataOptions message. Does not implicitly {@link google.storagetransfer.v1.MetadataOptions.verify|verify} messages.
                 * @param message MetadataOptions message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.storagetransfer.v1.IMetadataOptions, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified MetadataOptions message, length delimited. Does not implicitly {@link google.storagetransfer.v1.MetadataOptions.verify|verify} messages.
                 * @param message MetadataOptions message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.storagetransfer.v1.IMetadataOptions, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MetadataOptions message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns MetadataOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.storagetransfer.v1.MetadataOptions;

                /**
                 * Decodes a MetadataOptions message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns MetadataOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.storagetransfer.v1.MetadataOptions;

                /**
                 * Verifies a MetadataOptions message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a MetadataOptions message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns MetadataOptions
                 */
                public static fromObject(object: { [k: string]: any }): google.storagetransfer.v1.MetadataOptions;

                /**
                 * Creates a plain object from a MetadataOptions message. Also converts values to other types if specified.
                 * @param message MetadataOptions
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.storagetransfer.v1.MetadataOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this MetadataOptions to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for MetadataOptions
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace MetadataOptions {

                /** Symlink enum. */
                enum Symlink {
                    SYMLINK_UNSPECIFIED = 0,
                    SYMLINK_SKIP = 1,
                    SYMLINK_PRESERVE = 2
                }

                /** Mode enum. */
                enum Mode {
                    MODE_UNSPECIFIED = 0,
                    MODE_SKIP = 1,
                    MODE_PRESERVE = 2
                }

                /** GID enum. */
                enum GID {
                    GID_UNSPECIFIED = 0,
                    GID_SKIP = 1,
                    GID_NUMBER = 2
                }

                /** UID enum. */
                enum UID {
                    UID_UNSPECIFIED = 0,
                    UID_SKIP = 1,
                    UID_NUMBER = 2
                }

                /** Acl enum. */
                enum Acl {
                    ACL_UNSPECIFIED = 0,
                    ACL_DESTINATION_BUCKET_DEFAULT = 1,
                    ACL_PRESERVE = 2
                }

                /** StorageClass enum. */
                enum StorageClass {
                    STORAGE_CLASS_UNSPECIFIED = 0,
                    STORAGE_CLASS_DESTINATION_BUCKET_DEFAULT = 1,
                    STORAGE_CLASS_PRESERVE = 2,
                    STORAGE_CLASS_STANDARD = 3,
                    STORAGE_CLASS_NEARLINE = 4,
                    STORAGE_CLASS_COLDLINE = 5,
                    STORAGE_CLASS_ARCHIVE = 6
                }

                /** TemporaryHold enum. */
                enum TemporaryHold {
                    TEMPORARY_HOLD_UNSPECIFIED = 0,
                    TEMPORARY_HOLD_SKIP = 1,
                    TEMPORARY_HOLD_PRESERVE = 2
                }

                /** KmsKey enum. */
                enum KmsKey {
                    KMS_KEY_UNSPECIFIED = 0,
                    KMS_KEY_DESTINATION_BUCKET_DEFAULT = 1,
                    KMS_KEY_PRESERVE = 2
                }

                /** TimeCreated enum. */
                enum TimeCreated {
                    TIME_CREATED_UNSPECIFIED = 0,
                    TIME_CREATED_SKIP = 1,
                    TIME_CREATED_PRESERVE_AS_CUSTOM_TIME = 2
                }
            }

            /** Properties of a TransferManifest. */
            interface ITransferManifest {

                /** TransferManifest location */
                location?: (string|null);
            }

            /** Represents a TransferManifest. */
            class TransferManifest implements ITransferManifest {

                /**
                 * Constructs a new TransferManifest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.storagetransfer.v1.ITransferManifest);

                /** TransferManifest location. */
                public location: string;

                /**
                 * Creates a new TransferManifest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns TransferManifest instance
                 */
                public static create(properties?: google.storagetransfer.v1.ITransferManifest): google.storagetransfer.v1.TransferManifest;

                /**
                 * Encodes the specified TransferManifest message. Does not implicitly {@link google.storagetransfer.v1.TransferManifest.verify|verify} messages.
                 * @param message TransferManifest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.storagetransfer.v1.ITransferManifest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified TransferManifest message, length delimited. Does not implicitly {@link google.storagetransfer.v1.TransferManifest.verify|verify} messages.
                 * @param message TransferManifest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.storagetransfer.v1.ITransferManifest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a TransferManifest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns TransferManifest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.storagetransfer.v1.TransferManifest;

                /**
                 * Decodes a TransferManifest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns TransferManifest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.storagetransfer.v1.TransferManifest;

                /**
                 * Verifies a TransferManifest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a TransferManifest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns TransferManifest
                 */
                public static fromObject(object: { [k: string]: any }): google.storagetransfer.v1.TransferManifest;

                /**
                 * Creates a plain object from a TransferManifest message. Also converts values to other types if specified.
                 * @param message TransferManifest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.storagetransfer.v1.TransferManifest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this TransferManifest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for TransferManifest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a Schedule. */
            interface ISchedule {

                /** Schedule scheduleStartDate */
                scheduleStartDate?: (google.type.IDate|null);

                /** Schedule scheduleEndDate */
                scheduleEndDate?: (google.type.IDate|null);

                /** Schedule startTimeOfDay */
                startTimeOfDay?: (google.type.ITimeOfDay|null);

                /** Schedule endTimeOfDay */
                endTimeOfDay?: (google.type.ITimeOfDay|null);

                /** Schedule repeatInterval */
                repeatInterval?: (google.protobuf.IDuration|null);
            }

            /** Represents a Schedule. */
            class Schedule implements ISchedule {

                /**
                 * Constructs a new Schedule.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.storagetransfer.v1.ISchedule);

                /** Schedule scheduleStartDate. */
                public scheduleStartDate?: (google.type.IDate|null);

                /** Schedule scheduleEndDate. */
                public scheduleEndDate?: (google.type.IDate|null);

                /** Schedule startTimeOfDay. */
                public startTimeOfDay?: (google.type.ITimeOfDay|null);

                /** Schedule endTimeOfDay. */
                public endTimeOfDay?: (google.type.ITimeOfDay|null);

                /** Schedule repeatInterval. */
                public repeatInterval?: (google.protobuf.IDuration|null);

                /**
                 * Creates a new Schedule instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Schedule instance
                 */
                public static create(properties?: google.storagetransfer.v1.ISchedule): google.storagetransfer.v1.Schedule;

                /**
                 * Encodes the specified Schedule message. Does not implicitly {@link google.storagetransfer.v1.Schedule.verify|verify} messages.
                 * @param message Schedule message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.storagetransfer.v1.ISchedule, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Schedule message, length delimited. Does not implicitly {@link google.storagetransfer.v1.Schedule.verify|verify} messages.
                 * @param message Schedule message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.storagetransfer.v1.ISchedule, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Schedule message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Schedule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.storagetransfer.v1.Schedule;

                /**
                 * Decodes a Schedule message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Schedule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.storagetransfer.v1.Schedule;

                /**
                 * Verifies a Schedule message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Schedule message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Schedule
                 */
                public static fromObject(object: { [k: string]: any }): google.storagetransfer.v1.Schedule;

                /**
                 * Creates a plain object from a Schedule message. Also converts values to other types if specified.
                 * @param message Schedule
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.storagetransfer.v1.Schedule, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Schedule to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Schedule
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of an EventStream. */
            interface IEventStream {

                /** EventStream name */
                name?: (string|null);

                /** EventStream eventStreamStartTime */
                eventStreamStartTime?: (google.protobuf.ITimestamp|null);

                /** EventStream eventStreamExpirationTime */
                eventStreamExpirationTime?: (google.protobuf.ITimestamp|null);
            }

            /** Represents an EventStream. */
            class EventStream implements IEventStream {

                /**
                 * Constructs a new EventStream.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.storagetransfer.v1.IEventStream);

                /** EventStream name. */
                public name: string;

                /** EventStream eventStreamStartTime. */
                public eventStreamStartTime?: (google.protobuf.ITimestamp|null);

                /** EventStream eventStreamExpirationTime. */
                public eventStreamExpirationTime?: (google.protobuf.ITimestamp|null);

                /**
                 * Creates a new EventStream instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns EventStream instance
                 */
                public static create(properties?: google.storagetransfer.v1.IEventStream): google.storagetransfer.v1.EventStream;

                /**
                 * Encodes the specified EventStream message. Does not implicitly {@link google.storagetransfer.v1.EventStream.verify|verify} messages.
                 * @param message EventStream message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.storagetransfer.v1.IEventStream, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified EventStream message, length delimited. Does not implicitly {@link google.storagetransfer.v1.EventStream.verify|verify} messages.
                 * @param message EventStream message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.storagetransfer.v1.IEventStream, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an EventStream message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns EventStream
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.storagetransfer.v1.EventStream;

                /**
                 * Decodes an EventStream message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns EventStream
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.storagetransfer.v1.EventStream;

                /**
                 * Verifies an EventStream message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an EventStream message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns EventStream
                 */
                public static fromObject(object: { [k: string]: any }): google.storagetransfer.v1.EventStream;

                /**
                 * Creates a plain object from an EventStream message. Also converts values to other types if specified.
                 * @param message EventStream
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.storagetransfer.v1.EventStream, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this EventStream to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for EventStream
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a TransferJob. */
            interface ITransferJob {

                /** TransferJob name */
                name?: (string|null);

                /** TransferJob description */
                description?: (string|null);

                /** TransferJob projectId */
                projectId?: (string|null);

                /** TransferJob serviceAccount */
                serviceAccount?: (string|null);

                /** TransferJob transferSpec */
                transferSpec?: (google.storagetransfer.v1.ITransferSpec|null);

                /** TransferJob replicationSpec */
                replicationSpec?: (google.storagetransfer.v1.IReplicationSpec|null);

                /** TransferJob notificationConfig */
                notificationConfig?: (google.storagetransfer.v1.INotificationConfig|null);

                /** TransferJob loggingConfig */
                loggingConfig?: (google.storagetransfer.v1.ILoggingConfig|null);

                /** TransferJob schedule */
                schedule?: (google.storagetransfer.v1.ISchedule|null);

                /** TransferJob eventStream */
                eventStream?: (google.storagetransfer.v1.IEventStream|null);

                /** TransferJob status */
                status?: (google.storagetransfer.v1.TransferJob.Status|keyof typeof google.storagetransfer.v1.TransferJob.Status|null);

                /** TransferJob creationTime */
                creationTime?: (google.protobuf.ITimestamp|null);

                /** TransferJob lastModificationTime */
                lastModificationTime?: (google.protobuf.ITimestamp|null);

                /** TransferJob deletionTime */
                deletionTime?: (google.protobuf.ITimestamp|null);

                /** TransferJob latestOperationName */
                latestOperationName?: (string|null);
            }

            /** Represents a TransferJob. */
            class TransferJob implements ITransferJob {

                /**
                 * Constructs a new TransferJob.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.storagetransfer.v1.ITransferJob);

                /** TransferJob name. */
                public name: string;

                /** TransferJob description. */
                public description: string;

                /** TransferJob projectId. */
                public projectId: string;

                /** TransferJob serviceAccount. */
                public serviceAccount: string;

                /** TransferJob transferSpec. */
                public transferSpec?: (google.storagetransfer.v1.ITransferSpec|null);

                /** TransferJob replicationSpec. */
                public replicationSpec?: (google.storagetransfer.v1.IReplicationSpec|null);

                /** TransferJob notificationConfig. */
                public notificationConfig?: (google.storagetransfer.v1.INotificationConfig|null);

                /** TransferJob loggingConfig. */
                public loggingConfig?: (google.storagetransfer.v1.ILoggingConfig|null);

                /** TransferJob schedule. */
                public schedule?: (google.storagetransfer.v1.ISchedule|null);

                /** TransferJob eventStream. */
                public eventStream?: (google.storagetransfer.v1.IEventStream|null);

                /** TransferJob status. */
                public status: (google.storagetransfer.v1.TransferJob.Status|keyof typeof google.storagetransfer.v1.TransferJob.Status);

                /** TransferJob creationTime. */
                public creationTime?: (google.protobuf.ITimestamp|null);

                /** TransferJob lastModificationTime. */
                public lastModificationTime?: (google.protobuf.ITimestamp|null);

                /** TransferJob deletionTime. */
                public deletionTime?: (google.protobuf.ITimestamp|null);

                /** TransferJob latestOperationName. */
                public latestOperationName: string;

                /**
                 * Creates a new TransferJob instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns TransferJob instance
                 */
                public static create(properties?: google.storagetransfer.v1.ITransferJob): google.storagetransfer.v1.TransferJob;

                /**
                 * Encodes the specified TransferJob message. Does not implicitly {@link google.storagetransfer.v1.TransferJob.verify|verify} messages.
                 * @param message TransferJob message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.storagetransfer.v1.ITransferJob, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified TransferJob message, length delimited. Does not implicitly {@link google.storagetransfer.v1.TransferJob.verify|verify} messages.
                 * @param message TransferJob message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.storagetransfer.v1.ITransferJob, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a TransferJob message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns TransferJob
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.storagetransfer.v1.TransferJob;

                /**
                 * Decodes a TransferJob message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns TransferJob
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.storagetransfer.v1.TransferJob;

                /**
                 * Verifies a TransferJob message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a TransferJob message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns TransferJob
                 */
                public static fromObject(object: { [k: string]: any }): google.storagetransfer.v1.TransferJob;

                /**
                 * Creates a plain object from a TransferJob message. Also converts values to other types if specified.
                 * @param message TransferJob
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.storagetransfer.v1.TransferJob, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this TransferJob to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for TransferJob
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace TransferJob {

                /** Status enum. */
                enum Status {
                    STATUS_UNSPECIFIED = 0,
                    ENABLED = 1,
                    DISABLED = 2,
                    DELETED = 3
                }
            }

            /** Properties of an ErrorLogEntry. */
            interface IErrorLogEntry {

                /** ErrorLogEntry url */
                url?: (string|null);

                /** ErrorLogEntry errorDetails */
                errorDetails?: (string[]|null);
            }

            /** Represents an ErrorLogEntry. */
            class ErrorLogEntry implements IErrorLogEntry {

                /**
                 * Constructs a new ErrorLogEntry.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.storagetransfer.v1.IErrorLogEntry);

                /** ErrorLogEntry url. */
                public url: string;

                /** ErrorLogEntry errorDetails. */
                public errorDetails: string[];

                /**
                 * Creates a new ErrorLogEntry instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ErrorLogEntry instance
                 */
                public static create(properties?: google.storagetransfer.v1.IErrorLogEntry): google.storagetransfer.v1.ErrorLogEntry;

                /**
                 * Encodes the specified ErrorLogEntry message. Does not implicitly {@link google.storagetransfer.v1.ErrorLogEntry.verify|verify} messages.
                 * @param message ErrorLogEntry message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.storagetransfer.v1.IErrorLogEntry, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ErrorLogEntry message, length delimited. Does not implicitly {@link google.storagetransfer.v1.ErrorLogEntry.verify|verify} messages.
                 * @param message ErrorLogEntry message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.storagetransfer.v1.IErrorLogEntry, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an ErrorLogEntry message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ErrorLogEntry
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.storagetransfer.v1.ErrorLogEntry;

                /**
                 * Decodes an ErrorLogEntry message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ErrorLogEntry
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.storagetransfer.v1.ErrorLogEntry;

                /**
                 * Verifies an ErrorLogEntry message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an ErrorLogEntry message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ErrorLogEntry
                 */
                public static fromObject(object: { [k: string]: any }): google.storagetransfer.v1.ErrorLogEntry;

                /**
                 * Creates a plain object from an ErrorLogEntry message. Also converts values to other types if specified.
                 * @param message ErrorLogEntry
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.storagetransfer.v1.ErrorLogEntry, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ErrorLogEntry to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ErrorLogEntry
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of an ErrorSummary. */
            interface IErrorSummary {

                /** ErrorSummary errorCode */
                errorCode?: (google.rpc.Code|keyof typeof google.rpc.Code|null);

                /** ErrorSummary errorCount */
                errorCount?: (number|Long|string|null);

                /** ErrorSummary errorLogEntries */
                errorLogEntries?: (google.storagetransfer.v1.IErrorLogEntry[]|null);
            }

            /** Represents an ErrorSummary. */
            class ErrorSummary implements IErrorSummary {

                /**
                 * Constructs a new ErrorSummary.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.storagetransfer.v1.IErrorSummary);

                /** ErrorSummary errorCode. */
                public errorCode: (google.rpc.Code|keyof typeof google.rpc.Code);

                /** ErrorSummary errorCount. */
                public errorCount: (number|Long|string);

                /** ErrorSummary errorLogEntries. */
                public errorLogEntries: google.storagetransfer.v1.IErrorLogEntry[];

                /**
                 * Creates a new ErrorSummary instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ErrorSummary instance
                 */
                public static create(properties?: google.storagetransfer.v1.IErrorSummary): google.storagetransfer.v1.ErrorSummary;

                /**
                 * Encodes the specified ErrorSummary message. Does not implicitly {@link google.storagetransfer.v1.ErrorSummary.verify|verify} messages.
                 * @param message ErrorSummary message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.storagetransfer.v1.IErrorSummary, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ErrorSummary message, length delimited. Does not implicitly {@link google.storagetransfer.v1.ErrorSummary.verify|verify} messages.
                 * @param message ErrorSummary message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.storagetransfer.v1.IErrorSummary, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an ErrorSummary message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ErrorSummary
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.storagetransfer.v1.ErrorSummary;

                /**
                 * Decodes an ErrorSummary message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ErrorSummary
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.storagetransfer.v1.ErrorSummary;

                /**
                 * Verifies an ErrorSummary message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an ErrorSummary message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ErrorSummary
                 */
                public static fromObject(object: { [k: string]: any }): google.storagetransfer.v1.ErrorSummary;

                /**
                 * Creates a plain object from an ErrorSummary message. Also converts values to other types if specified.
                 * @param message ErrorSummary
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.storagetransfer.v1.ErrorSummary, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ErrorSummary to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ErrorSummary
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a TransferCounters. */
            interface ITransferCounters {

                /** TransferCounters objectsFoundFromSource */
                objectsFoundFromSource?: (number|Long|string|null);

                /** TransferCounters bytesFoundFromSource */
                bytesFoundFromSource?: (number|Long|string|null);

                /** TransferCounters objectsFoundOnlyFromSink */
                objectsFoundOnlyFromSink?: (number|Long|string|null);

                /** TransferCounters bytesFoundOnlyFromSink */
                bytesFoundOnlyFromSink?: (number|Long|string|null);

                /** TransferCounters objectsFromSourceSkippedBySync */
                objectsFromSourceSkippedBySync?: (number|Long|string|null);

                /** TransferCounters bytesFromSourceSkippedBySync */
                bytesFromSourceSkippedBySync?: (number|Long|string|null);

                /** TransferCounters objectsCopiedToSink */
                objectsCopiedToSink?: (number|Long|string|null);

                /** TransferCounters bytesCopiedToSink */
                bytesCopiedToSink?: (number|Long|string|null);

                /** TransferCounters objectsDeletedFromSource */
                objectsDeletedFromSource?: (number|Long|string|null);

                /** TransferCounters bytesDeletedFromSource */
                bytesDeletedFromSource?: (number|Long|string|null);

                /** TransferCounters objectsDeletedFromSink */
                objectsDeletedFromSink?: (number|Long|string|null);

                /** TransferCounters bytesDeletedFromSink */
                bytesDeletedFromSink?: (number|Long|string|null);

                /** TransferCounters objectsFromSourceFailed */
                objectsFromSourceFailed?: (number|Long|string|null);

                /** TransferCounters bytesFromSourceFailed */
                bytesFromSourceFailed?: (number|Long|string|null);

                /** TransferCounters objectsFailedToDeleteFromSink */
                objectsFailedToDeleteFromSink?: (number|Long|string|null);

                /** TransferCounters bytesFailedToDeleteFromSink */
                bytesFailedToDeleteFromSink?: (number|Long|string|null);

                /** TransferCounters directoriesFoundFromSource */
                directoriesFoundFromSource?: (number|Long|string|null);

                /** TransferCounters directoriesFailedToListFromSource */
                directoriesFailedToListFromSource?: (number|Long|string|null);

                /** TransferCounters directoriesSuccessfullyListedFromSource */
                directoriesSuccessfullyListedFromSource?: (number|Long|string|null);

                /** TransferCounters intermediateObjectsCleanedUp */
                intermediateObjectsCleanedUp?: (number|Long|string|null);

                /** TransferCounters intermediateObjectsFailedCleanedUp */
                intermediateObjectsFailedCleanedUp?: (number|Long|string|null);
            }

            /** Represents a TransferCounters. */
            class TransferCounters implements ITransferCounters {

                /**
                 * Constructs a new TransferCounters.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.storagetransfer.v1.ITransferCounters);

                /** TransferCounters objectsFoundFromSource. */
                public objectsFoundFromSource: (number|Long|string);

                /** TransferCounters bytesFoundFromSource. */
                public bytesFoundFromSource: (number|Long|string);

                /** TransferCounters objectsFoundOnlyFromSink. */
                public objectsFoundOnlyFromSink: (number|Long|string);

                /** TransferCounters bytesFoundOnlyFromSink. */
                public bytesFoundOnlyFromSink: (number|Long|string);

                /** TransferCounters objectsFromSourceSkippedBySync. */
                public objectsFromSourceSkippedBySync: (number|Long|string);

                /** TransferCounters bytesFromSourceSkippedBySync. */
                public bytesFromSourceSkippedBySync: (number|Long|string);

                /** TransferCounters objectsCopiedToSink. */
                public objectsCopiedToSink: (number|Long|string);

                /** TransferCounters bytesCopiedToSink. */
                public bytesCopiedToSink: (number|Long|string);

                /** TransferCounters objectsDeletedFromSource. */
                public objectsDeletedFromSource: (number|Long|string);

                /** TransferCounters bytesDeletedFromSource. */
                public bytesDeletedFromSource: (number|Long|string);

                /** TransferCounters objectsDeletedFromSink. */
                public objectsDeletedFromSink: (number|Long|string);

                /** TransferCounters bytesDeletedFromSink. */
                public bytesDeletedFromSink: (number|Long|string);

                /** TransferCounters objectsFromSourceFailed. */
                public objectsFromSourceFailed: (number|Long|string);

                /** TransferCounters bytesFromSourceFailed. */
                public bytesFromSourceFailed: (number|Long|string);

                /** TransferCounters objectsFailedToDeleteFromSink. */
                public objectsFailedToDeleteFromSink: (number|Long|string);

                /** TransferCounters bytesFailedToDeleteFromSink. */
                public bytesFailedToDeleteFromSink: (number|Long|string);

                /** TransferCounters directoriesFoundFromSource. */
                public directoriesFoundFromSource: (number|Long|string);

                /** TransferCounters directoriesFailedToListFromSource. */
                public directoriesFailedToListFromSource: (number|Long|string);

                /** TransferCounters directoriesSuccessfullyListedFromSource. */
                public directoriesSuccessfullyListedFromSource: (number|Long|string);

                /** TransferCounters intermediateObjectsCleanedUp. */
                public intermediateObjectsCleanedUp: (number|Long|string);

                /** TransferCounters intermediateObjectsFailedCleanedUp. */
                public intermediateObjectsFailedCleanedUp: (number|Long|string);

                /**
                 * Creates a new TransferCounters instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns TransferCounters instance
                 */
                public static create(properties?: google.storagetransfer.v1.ITransferCounters): google.storagetransfer.v1.TransferCounters;

                /**
                 * Encodes the specified TransferCounters message. Does not implicitly {@link google.storagetransfer.v1.TransferCounters.verify|verify} messages.
                 * @param message TransferCounters message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.storagetransfer.v1.ITransferCounters, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified TransferCounters message, length delimited. Does not implicitly {@link google.storagetransfer.v1.TransferCounters.verify|verify} messages.
                 * @param message TransferCounters message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.storagetransfer.v1.ITransferCounters, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a TransferCounters message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns TransferCounters
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.storagetransfer.v1.TransferCounters;

                /**
                 * Decodes a TransferCounters message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns TransferCounters
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.storagetransfer.v1.TransferCounters;

                /**
                 * Verifies a TransferCounters message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a TransferCounters message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns TransferCounters
                 */
                public static fromObject(object: { [k: string]: any }): google.storagetransfer.v1.TransferCounters;

                /**
                 * Creates a plain object from a TransferCounters message. Also converts values to other types if specified.
                 * @param message TransferCounters
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.storagetransfer.v1.TransferCounters, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this TransferCounters to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for TransferCounters
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a NotificationConfig. */
            interface INotificationConfig {

                /** NotificationConfig pubsubTopic */
                pubsubTopic?: (string|null);

                /** NotificationConfig eventTypes */
                eventTypes?: (google.storagetransfer.v1.NotificationConfig.EventType[]|null);

                /** NotificationConfig payloadFormat */
                payloadFormat?: (google.storagetransfer.v1.NotificationConfig.PayloadFormat|keyof typeof google.storagetransfer.v1.NotificationConfig.PayloadFormat|null);
            }

            /** Represents a NotificationConfig. */
            class NotificationConfig implements INotificationConfig {

                /**
                 * Constructs a new NotificationConfig.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.storagetransfer.v1.INotificationConfig);

                /** NotificationConfig pubsubTopic. */
                public pubsubTopic: string;

                /** NotificationConfig eventTypes. */
                public eventTypes: google.storagetransfer.v1.NotificationConfig.EventType[];

                /** NotificationConfig payloadFormat. */
                public payloadFormat: (google.storagetransfer.v1.NotificationConfig.PayloadFormat|keyof typeof google.storagetransfer.v1.NotificationConfig.PayloadFormat);

                /**
                 * Creates a new NotificationConfig instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns NotificationConfig instance
                 */
                public static create(properties?: google.storagetransfer.v1.INotificationConfig): google.storagetransfer.v1.NotificationConfig;

                /**
                 * Encodes the specified NotificationConfig message. Does not implicitly {@link google.storagetransfer.v1.NotificationConfig.verify|verify} messages.
                 * @param message NotificationConfig message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.storagetransfer.v1.INotificationConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified NotificationConfig message, length delimited. Does not implicitly {@link google.storagetransfer.v1.NotificationConfig.verify|verify} messages.
                 * @param message NotificationConfig message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.storagetransfer.v1.INotificationConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a NotificationConfig message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns NotificationConfig
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.storagetransfer.v1.NotificationConfig;

                /**
                 * Decodes a NotificationConfig message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns NotificationConfig
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.storagetransfer.v1.NotificationConfig;

                /**
                 * Verifies a NotificationConfig message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a NotificationConfig message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns NotificationConfig
                 */
                public static fromObject(object: { [k: string]: any }): google.storagetransfer.v1.NotificationConfig;

                /**
                 * Creates a plain object from a NotificationConfig message. Also converts values to other types if specified.
                 * @param message NotificationConfig
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.storagetransfer.v1.NotificationConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this NotificationConfig to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for NotificationConfig
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace NotificationConfig {

                /** EventType enum. */
                enum EventType {
                    EVENT_TYPE_UNSPECIFIED = 0,
                    TRANSFER_OPERATION_SUCCESS = 1,
                    TRANSFER_OPERATION_FAILED = 2,
                    TRANSFER_OPERATION_ABORTED = 3
                }

                /** PayloadFormat enum. */
                enum PayloadFormat {
                    PAYLOAD_FORMAT_UNSPECIFIED = 0,
                    NONE = 1,
                    JSON = 2
                }
            }

            /** Properties of a LoggingConfig. */
            interface ILoggingConfig {

                /** LoggingConfig logActions */
                logActions?: (google.storagetransfer.v1.LoggingConfig.LoggableAction[]|null);

                /** LoggingConfig logActionStates */
                logActionStates?: (google.storagetransfer.v1.LoggingConfig.LoggableActionState[]|null);

                /** LoggingConfig enableOnpremGcsTransferLogs */
                enableOnpremGcsTransferLogs?: (boolean|null);
            }

            /** Represents a LoggingConfig. */
            class LoggingConfig implements ILoggingConfig {

                /**
                 * Constructs a new LoggingConfig.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.storagetransfer.v1.ILoggingConfig);

                /** LoggingConfig logActions. */
                public logActions: google.storagetransfer.v1.LoggingConfig.LoggableAction[];

                /** LoggingConfig logActionStates. */
                public logActionStates: google.storagetransfer.v1.LoggingConfig.LoggableActionState[];

                /** LoggingConfig enableOnpremGcsTransferLogs. */
                public enableOnpremGcsTransferLogs: boolean;

                /**
                 * Creates a new LoggingConfig instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns LoggingConfig instance
                 */
                public static create(properties?: google.storagetransfer.v1.ILoggingConfig): google.storagetransfer.v1.LoggingConfig;

                /**
                 * Encodes the specified LoggingConfig message. Does not implicitly {@link google.storagetransfer.v1.LoggingConfig.verify|verify} messages.
                 * @param message LoggingConfig message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.storagetransfer.v1.ILoggingConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified LoggingConfig message, length delimited. Does not implicitly {@link google.storagetransfer.v1.LoggingConfig.verify|verify} messages.
                 * @param message LoggingConfig message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.storagetransfer.v1.ILoggingConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a LoggingConfig message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns LoggingConfig
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.storagetransfer.v1.LoggingConfig;

                /**
                 * Decodes a LoggingConfig message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns LoggingConfig
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.storagetransfer.v1.LoggingConfig;

                /**
                 * Verifies a LoggingConfig message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a LoggingConfig message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns LoggingConfig
                 */
                public static fromObject(object: { [k: string]: any }): google.storagetransfer.v1.LoggingConfig;

                /**
                 * Creates a plain object from a LoggingConfig message. Also converts values to other types if specified.
                 * @param message LoggingConfig
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.storagetransfer.v1.LoggingConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this LoggingConfig to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for LoggingConfig
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace LoggingConfig {

                /** LoggableAction enum. */
                enum LoggableAction {
                    LOGGABLE_ACTION_UNSPECIFIED = 0,
                    FIND = 1,
                    DELETE = 2,
                    COPY = 3
                }

                /** LoggableActionState enum. */
                enum LoggableActionState {
                    LOGGABLE_ACTION_STATE_UNSPECIFIED = 0,
                    SUCCEEDED = 1,
                    FAILED = 2,
                    SKIPPED = 3
                }
            }

            /** Properties of a TransferOperation. */
            interface ITransferOperation {

                /** TransferOperation name */
                name?: (string|null);

                /** TransferOperation projectId */
                projectId?: (string|null);

                /** TransferOperation transferSpec */
                transferSpec?: (google.storagetransfer.v1.ITransferSpec|null);

                /** TransferOperation notificationConfig */
                notificationConfig?: (google.storagetransfer.v1.INotificationConfig|null);

                /** TransferOperation loggingConfig */
                loggingConfig?: (google.storagetransfer.v1.ILoggingConfig|null);

                /** TransferOperation startTime */
                startTime?: (google.protobuf.ITimestamp|null);

                /** TransferOperation endTime */
                endTime?: (google.protobuf.ITimestamp|null);

                /** TransferOperation status */
                status?: (google.storagetransfer.v1.TransferOperation.Status|keyof typeof google.storagetransfer.v1.TransferOperation.Status|null);

                /** TransferOperation counters */
                counters?: (google.storagetransfer.v1.ITransferCounters|null);

                /** TransferOperation errorBreakdowns */
                errorBreakdowns?: (google.storagetransfer.v1.IErrorSummary[]|null);

                /** TransferOperation transferJobName */
                transferJobName?: (string|null);
            }

            /** Represents a TransferOperation. */
            class TransferOperation implements ITransferOperation {

                /**
                 * Constructs a new TransferOperation.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.storagetransfer.v1.ITransferOperation);

                /** TransferOperation name. */
                public name: string;

                /** TransferOperation projectId. */
                public projectId: string;

                /** TransferOperation transferSpec. */
                public transferSpec?: (google.storagetransfer.v1.ITransferSpec|null);

                /** TransferOperation notificationConfig. */
                public notificationConfig?: (google.storagetransfer.v1.INotificationConfig|null);

                /** TransferOperation loggingConfig. */
                public loggingConfig?: (google.storagetransfer.v1.ILoggingConfig|null);

                /** TransferOperation startTime. */
                public startTime?: (google.protobuf.ITimestamp|null);

                /** TransferOperation endTime. */
                public endTime?: (google.protobuf.ITimestamp|null);

                /** TransferOperation status. */
                public status: (google.storagetransfer.v1.TransferOperation.Status|keyof typeof google.storagetransfer.v1.TransferOperation.Status);

                /** TransferOperation counters. */
                public counters?: (google.storagetransfer.v1.ITransferCounters|null);

                /** TransferOperation errorBreakdowns. */
                public errorBreakdowns: google.storagetransfer.v1.IErrorSummary[];

                /** TransferOperation transferJobName. */
                public transferJobName: string;

                /**
                 * Creates a new TransferOperation instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns TransferOperation instance
                 */
                public static create(properties?: google.storagetransfer.v1.ITransferOperation): google.storagetransfer.v1.TransferOperation;

                /**
                 * Encodes the specified TransferOperation message. Does not implicitly {@link google.storagetransfer.v1.TransferOperation.verify|verify} messages.
                 * @param message TransferOperation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.storagetransfer.v1.ITransferOperation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified TransferOperation message, length delimited. Does not implicitly {@link google.storagetransfer.v1.TransferOperation.verify|verify} messages.
                 * @param message TransferOperation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.storagetransfer.v1.ITransferOperation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a TransferOperation message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns TransferOperation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.storagetransfer.v1.TransferOperation;

                /**
                 * Decodes a TransferOperation message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns TransferOperation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.storagetransfer.v1.TransferOperation;

                /**
                 * Verifies a TransferOperation message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a TransferOperation message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns TransferOperation
                 */
                public static fromObject(object: { [k: string]: any }): google.storagetransfer.v1.TransferOperation;

                /**
                 * Creates a plain object from a TransferOperation message. Also converts values to other types if specified.
                 * @param message TransferOperation
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.storagetransfer.v1.TransferOperation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this TransferOperation to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for TransferOperation
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace TransferOperation {

                /** Status enum. */
                enum Status {
                    STATUS_UNSPECIFIED = 0,
                    IN_PROGRESS = 1,
                    PAUSED = 2,
                    SUCCESS = 3,
                    FAILED = 4,
                    ABORTED = 5,
                    QUEUED = 6,
                    SUSPENDING = 7
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

        /** Code enum. */
        enum Code {
            OK = 0,
            CANCELLED = 1,
            UNKNOWN = 2,
            INVALID_ARGUMENT = 3,
            DEADLINE_EXCEEDED = 4,
            NOT_FOUND = 5,
            ALREADY_EXISTS = 6,
            PERMISSION_DENIED = 7,
            UNAUTHENTICATED = 16,
            RESOURCE_EXHAUSTED = 8,
            FAILED_PRECONDITION = 9,
            ABORTED = 10,
            OUT_OF_RANGE = 11,
            UNIMPLEMENTED = 12,
            INTERNAL = 13,
            UNAVAILABLE = 14,
            DATA_LOSS = 15
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

            /**
             * Gets the default type url for Date
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a TimeOfDay. */
        interface ITimeOfDay {

            /** TimeOfDay hours */
            hours?: (number|null);

            /** TimeOfDay minutes */
            minutes?: (number|null);

            /** TimeOfDay seconds */
            seconds?: (number|null);

            /** TimeOfDay nanos */
            nanos?: (number|null);
        }

        /** Represents a TimeOfDay. */
        class TimeOfDay implements ITimeOfDay {

            /**
             * Constructs a new TimeOfDay.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.type.ITimeOfDay);

            /** TimeOfDay hours. */
            public hours: number;

            /** TimeOfDay minutes. */
            public minutes: number;

            /** TimeOfDay seconds. */
            public seconds: number;

            /** TimeOfDay nanos. */
            public nanos: number;

            /**
             * Creates a new TimeOfDay instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TimeOfDay instance
             */
            public static create(properties?: google.type.ITimeOfDay): google.type.TimeOfDay;

            /**
             * Encodes the specified TimeOfDay message. Does not implicitly {@link google.type.TimeOfDay.verify|verify} messages.
             * @param message TimeOfDay message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.type.ITimeOfDay, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified TimeOfDay message, length delimited. Does not implicitly {@link google.type.TimeOfDay.verify|verify} messages.
             * @param message TimeOfDay message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.type.ITimeOfDay, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TimeOfDay message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns TimeOfDay
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.type.TimeOfDay;

            /**
             * Decodes a TimeOfDay message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns TimeOfDay
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.type.TimeOfDay;

            /**
             * Verifies a TimeOfDay message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a TimeOfDay message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns TimeOfDay
             */
            public static fromObject(object: { [k: string]: any }): google.type.TimeOfDay;

            /**
             * Creates a plain object from a TimeOfDay message. Also converts values to other types if specified.
             * @param message TimeOfDay
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.type.TimeOfDay, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this TimeOfDay to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for TimeOfDay
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }
}
