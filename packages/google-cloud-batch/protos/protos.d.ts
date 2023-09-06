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

        /** Namespace batch. */
        namespace batch {

            /** Namespace v1. */
            namespace v1 {

                /** Represents a BatchService */
                class BatchService extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new BatchService service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new BatchService service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): BatchService;

                    /**
                     * Calls CreateJob.
                     * @param request CreateJobRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Job
                     */
                    public createJob(request: google.cloud.batch.v1.ICreateJobRequest, callback: google.cloud.batch.v1.BatchService.CreateJobCallback): void;

                    /**
                     * Calls CreateJob.
                     * @param request CreateJobRequest message or plain object
                     * @returns Promise
                     */
                    public createJob(request: google.cloud.batch.v1.ICreateJobRequest): Promise<google.cloud.batch.v1.Job>;

                    /**
                     * Calls GetJob.
                     * @param request GetJobRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Job
                     */
                    public getJob(request: google.cloud.batch.v1.IGetJobRequest, callback: google.cloud.batch.v1.BatchService.GetJobCallback): void;

                    /**
                     * Calls GetJob.
                     * @param request GetJobRequest message or plain object
                     * @returns Promise
                     */
                    public getJob(request: google.cloud.batch.v1.IGetJobRequest): Promise<google.cloud.batch.v1.Job>;

                    /**
                     * Calls DeleteJob.
                     * @param request DeleteJobRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deleteJob(request: google.cloud.batch.v1.IDeleteJobRequest, callback: google.cloud.batch.v1.BatchService.DeleteJobCallback): void;

                    /**
                     * Calls DeleteJob.
                     * @param request DeleteJobRequest message or plain object
                     * @returns Promise
                     */
                    public deleteJob(request: google.cloud.batch.v1.IDeleteJobRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ListJobs.
                     * @param request ListJobsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListJobsResponse
                     */
                    public listJobs(request: google.cloud.batch.v1.IListJobsRequest, callback: google.cloud.batch.v1.BatchService.ListJobsCallback): void;

                    /**
                     * Calls ListJobs.
                     * @param request ListJobsRequest message or plain object
                     * @returns Promise
                     */
                    public listJobs(request: google.cloud.batch.v1.IListJobsRequest): Promise<google.cloud.batch.v1.ListJobsResponse>;

                    /**
                     * Calls GetTask.
                     * @param request GetTaskRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Task
                     */
                    public getTask(request: google.cloud.batch.v1.IGetTaskRequest, callback: google.cloud.batch.v1.BatchService.GetTaskCallback): void;

                    /**
                     * Calls GetTask.
                     * @param request GetTaskRequest message or plain object
                     * @returns Promise
                     */
                    public getTask(request: google.cloud.batch.v1.IGetTaskRequest): Promise<google.cloud.batch.v1.Task>;

                    /**
                     * Calls ListTasks.
                     * @param request ListTasksRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListTasksResponse
                     */
                    public listTasks(request: google.cloud.batch.v1.IListTasksRequest, callback: google.cloud.batch.v1.BatchService.ListTasksCallback): void;

                    /**
                     * Calls ListTasks.
                     * @param request ListTasksRequest message or plain object
                     * @returns Promise
                     */
                    public listTasks(request: google.cloud.batch.v1.IListTasksRequest): Promise<google.cloud.batch.v1.ListTasksResponse>;
                }

                namespace BatchService {

                    /**
                     * Callback as used by {@link google.cloud.batch.v1.BatchService|createJob}.
                     * @param error Error, if any
                     * @param [response] Job
                     */
                    type CreateJobCallback = (error: (Error|null), response?: google.cloud.batch.v1.Job) => void;

                    /**
                     * Callback as used by {@link google.cloud.batch.v1.BatchService|getJob}.
                     * @param error Error, if any
                     * @param [response] Job
                     */
                    type GetJobCallback = (error: (Error|null), response?: google.cloud.batch.v1.Job) => void;

                    /**
                     * Callback as used by {@link google.cloud.batch.v1.BatchService|deleteJob}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeleteJobCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.batch.v1.BatchService|listJobs}.
                     * @param error Error, if any
                     * @param [response] ListJobsResponse
                     */
                    type ListJobsCallback = (error: (Error|null), response?: google.cloud.batch.v1.ListJobsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.batch.v1.BatchService|getTask}.
                     * @param error Error, if any
                     * @param [response] Task
                     */
                    type GetTaskCallback = (error: (Error|null), response?: google.cloud.batch.v1.Task) => void;

                    /**
                     * Callback as used by {@link google.cloud.batch.v1.BatchService|listTasks}.
                     * @param error Error, if any
                     * @param [response] ListTasksResponse
                     */
                    type ListTasksCallback = (error: (Error|null), response?: google.cloud.batch.v1.ListTasksResponse) => void;
                }

                /** Properties of a CreateJobRequest. */
                interface ICreateJobRequest {

                    /** CreateJobRequest parent */
                    parent?: (string|null);

                    /** CreateJobRequest jobId */
                    jobId?: (string|null);

                    /** CreateJobRequest job */
                    job?: (google.cloud.batch.v1.IJob|null);

                    /** CreateJobRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents a CreateJobRequest. */
                class CreateJobRequest implements ICreateJobRequest {

                    /**
                     * Constructs a new CreateJobRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.batch.v1.ICreateJobRequest);

                    /** CreateJobRequest parent. */
                    public parent: string;

                    /** CreateJobRequest jobId. */
                    public jobId: string;

                    /** CreateJobRequest job. */
                    public job?: (google.cloud.batch.v1.IJob|null);

                    /** CreateJobRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new CreateJobRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateJobRequest instance
                     */
                    public static create(properties?: google.cloud.batch.v1.ICreateJobRequest): google.cloud.batch.v1.CreateJobRequest;

                    /**
                     * Encodes the specified CreateJobRequest message. Does not implicitly {@link google.cloud.batch.v1.CreateJobRequest.verify|verify} messages.
                     * @param message CreateJobRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.batch.v1.ICreateJobRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateJobRequest message, length delimited. Does not implicitly {@link google.cloud.batch.v1.CreateJobRequest.verify|verify} messages.
                     * @param message CreateJobRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.batch.v1.ICreateJobRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateJobRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateJobRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.batch.v1.CreateJobRequest;

                    /**
                     * Decodes a CreateJobRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateJobRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.batch.v1.CreateJobRequest;

                    /**
                     * Verifies a CreateJobRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateJobRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateJobRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.batch.v1.CreateJobRequest;

                    /**
                     * Creates a plain object from a CreateJobRequest message. Also converts values to other types if specified.
                     * @param message CreateJobRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.batch.v1.CreateJobRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateJobRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateJobRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetJobRequest. */
                interface IGetJobRequest {

                    /** GetJobRequest name */
                    name?: (string|null);
                }

                /** Represents a GetJobRequest. */
                class GetJobRequest implements IGetJobRequest {

                    /**
                     * Constructs a new GetJobRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.batch.v1.IGetJobRequest);

                    /** GetJobRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetJobRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetJobRequest instance
                     */
                    public static create(properties?: google.cloud.batch.v1.IGetJobRequest): google.cloud.batch.v1.GetJobRequest;

                    /**
                     * Encodes the specified GetJobRequest message. Does not implicitly {@link google.cloud.batch.v1.GetJobRequest.verify|verify} messages.
                     * @param message GetJobRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.batch.v1.IGetJobRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetJobRequest message, length delimited. Does not implicitly {@link google.cloud.batch.v1.GetJobRequest.verify|verify} messages.
                     * @param message GetJobRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.batch.v1.IGetJobRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetJobRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetJobRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.batch.v1.GetJobRequest;

                    /**
                     * Decodes a GetJobRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetJobRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.batch.v1.GetJobRequest;

                    /**
                     * Verifies a GetJobRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetJobRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetJobRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.batch.v1.GetJobRequest;

                    /**
                     * Creates a plain object from a GetJobRequest message. Also converts values to other types if specified.
                     * @param message GetJobRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.batch.v1.GetJobRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetJobRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetJobRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeleteJobRequest. */
                interface IDeleteJobRequest {

                    /** DeleteJobRequest name */
                    name?: (string|null);

                    /** DeleteJobRequest reason */
                    reason?: (string|null);

                    /** DeleteJobRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents a DeleteJobRequest. */
                class DeleteJobRequest implements IDeleteJobRequest {

                    /**
                     * Constructs a new DeleteJobRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.batch.v1.IDeleteJobRequest);

                    /** DeleteJobRequest name. */
                    public name: string;

                    /** DeleteJobRequest reason. */
                    public reason: string;

                    /** DeleteJobRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new DeleteJobRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteJobRequest instance
                     */
                    public static create(properties?: google.cloud.batch.v1.IDeleteJobRequest): google.cloud.batch.v1.DeleteJobRequest;

                    /**
                     * Encodes the specified DeleteJobRequest message. Does not implicitly {@link google.cloud.batch.v1.DeleteJobRequest.verify|verify} messages.
                     * @param message DeleteJobRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.batch.v1.IDeleteJobRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteJobRequest message, length delimited. Does not implicitly {@link google.cloud.batch.v1.DeleteJobRequest.verify|verify} messages.
                     * @param message DeleteJobRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.batch.v1.IDeleteJobRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteJobRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteJobRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.batch.v1.DeleteJobRequest;

                    /**
                     * Decodes a DeleteJobRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteJobRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.batch.v1.DeleteJobRequest;

                    /**
                     * Verifies a DeleteJobRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteJobRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteJobRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.batch.v1.DeleteJobRequest;

                    /**
                     * Creates a plain object from a DeleteJobRequest message. Also converts values to other types if specified.
                     * @param message DeleteJobRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.batch.v1.DeleteJobRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteJobRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeleteJobRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListJobsRequest. */
                interface IListJobsRequest {

                    /** ListJobsRequest parent */
                    parent?: (string|null);

                    /** ListJobsRequest filter */
                    filter?: (string|null);

                    /** ListJobsRequest orderBy */
                    orderBy?: (string|null);

                    /** ListJobsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListJobsRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListJobsRequest. */
                class ListJobsRequest implements IListJobsRequest {

                    /**
                     * Constructs a new ListJobsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.batch.v1.IListJobsRequest);

                    /** ListJobsRequest parent. */
                    public parent: string;

                    /** ListJobsRequest filter. */
                    public filter: string;

                    /** ListJobsRequest orderBy. */
                    public orderBy: string;

                    /** ListJobsRequest pageSize. */
                    public pageSize: number;

                    /** ListJobsRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListJobsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListJobsRequest instance
                     */
                    public static create(properties?: google.cloud.batch.v1.IListJobsRequest): google.cloud.batch.v1.ListJobsRequest;

                    /**
                     * Encodes the specified ListJobsRequest message. Does not implicitly {@link google.cloud.batch.v1.ListJobsRequest.verify|verify} messages.
                     * @param message ListJobsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.batch.v1.IListJobsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListJobsRequest message, length delimited. Does not implicitly {@link google.cloud.batch.v1.ListJobsRequest.verify|verify} messages.
                     * @param message ListJobsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.batch.v1.IListJobsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListJobsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListJobsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.batch.v1.ListJobsRequest;

                    /**
                     * Decodes a ListJobsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListJobsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.batch.v1.ListJobsRequest;

                    /**
                     * Verifies a ListJobsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListJobsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListJobsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.batch.v1.ListJobsRequest;

                    /**
                     * Creates a plain object from a ListJobsRequest message. Also converts values to other types if specified.
                     * @param message ListJobsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.batch.v1.ListJobsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListJobsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListJobsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListJobsResponse. */
                interface IListJobsResponse {

                    /** ListJobsResponse jobs */
                    jobs?: (google.cloud.batch.v1.IJob[]|null);

                    /** ListJobsResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListJobsResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a ListJobsResponse. */
                class ListJobsResponse implements IListJobsResponse {

                    /**
                     * Constructs a new ListJobsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.batch.v1.IListJobsResponse);

                    /** ListJobsResponse jobs. */
                    public jobs: google.cloud.batch.v1.IJob[];

                    /** ListJobsResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListJobsResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListJobsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListJobsResponse instance
                     */
                    public static create(properties?: google.cloud.batch.v1.IListJobsResponse): google.cloud.batch.v1.ListJobsResponse;

                    /**
                     * Encodes the specified ListJobsResponse message. Does not implicitly {@link google.cloud.batch.v1.ListJobsResponse.verify|verify} messages.
                     * @param message ListJobsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.batch.v1.IListJobsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListJobsResponse message, length delimited. Does not implicitly {@link google.cloud.batch.v1.ListJobsResponse.verify|verify} messages.
                     * @param message ListJobsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.batch.v1.IListJobsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListJobsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListJobsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.batch.v1.ListJobsResponse;

                    /**
                     * Decodes a ListJobsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListJobsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.batch.v1.ListJobsResponse;

                    /**
                     * Verifies a ListJobsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListJobsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListJobsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.batch.v1.ListJobsResponse;

                    /**
                     * Creates a plain object from a ListJobsResponse message. Also converts values to other types if specified.
                     * @param message ListJobsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.batch.v1.ListJobsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListJobsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListJobsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListTasksRequest. */
                interface IListTasksRequest {

                    /** ListTasksRequest parent */
                    parent?: (string|null);

                    /** ListTasksRequest filter */
                    filter?: (string|null);

                    /** ListTasksRequest pageSize */
                    pageSize?: (number|null);

                    /** ListTasksRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListTasksRequest. */
                class ListTasksRequest implements IListTasksRequest {

                    /**
                     * Constructs a new ListTasksRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.batch.v1.IListTasksRequest);

                    /** ListTasksRequest parent. */
                    public parent: string;

                    /** ListTasksRequest filter. */
                    public filter: string;

                    /** ListTasksRequest pageSize. */
                    public pageSize: number;

                    /** ListTasksRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListTasksRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListTasksRequest instance
                     */
                    public static create(properties?: google.cloud.batch.v1.IListTasksRequest): google.cloud.batch.v1.ListTasksRequest;

                    /**
                     * Encodes the specified ListTasksRequest message. Does not implicitly {@link google.cloud.batch.v1.ListTasksRequest.verify|verify} messages.
                     * @param message ListTasksRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.batch.v1.IListTasksRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListTasksRequest message, length delimited. Does not implicitly {@link google.cloud.batch.v1.ListTasksRequest.verify|verify} messages.
                     * @param message ListTasksRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.batch.v1.IListTasksRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListTasksRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListTasksRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.batch.v1.ListTasksRequest;

                    /**
                     * Decodes a ListTasksRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListTasksRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.batch.v1.ListTasksRequest;

                    /**
                     * Verifies a ListTasksRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListTasksRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListTasksRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.batch.v1.ListTasksRequest;

                    /**
                     * Creates a plain object from a ListTasksRequest message. Also converts values to other types if specified.
                     * @param message ListTasksRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.batch.v1.ListTasksRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListTasksRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListTasksRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListTasksResponse. */
                interface IListTasksResponse {

                    /** ListTasksResponse tasks */
                    tasks?: (google.cloud.batch.v1.ITask[]|null);

                    /** ListTasksResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListTasksResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a ListTasksResponse. */
                class ListTasksResponse implements IListTasksResponse {

                    /**
                     * Constructs a new ListTasksResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.batch.v1.IListTasksResponse);

                    /** ListTasksResponse tasks. */
                    public tasks: google.cloud.batch.v1.ITask[];

                    /** ListTasksResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListTasksResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListTasksResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListTasksResponse instance
                     */
                    public static create(properties?: google.cloud.batch.v1.IListTasksResponse): google.cloud.batch.v1.ListTasksResponse;

                    /**
                     * Encodes the specified ListTasksResponse message. Does not implicitly {@link google.cloud.batch.v1.ListTasksResponse.verify|verify} messages.
                     * @param message ListTasksResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.batch.v1.IListTasksResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListTasksResponse message, length delimited. Does not implicitly {@link google.cloud.batch.v1.ListTasksResponse.verify|verify} messages.
                     * @param message ListTasksResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.batch.v1.IListTasksResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListTasksResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListTasksResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.batch.v1.ListTasksResponse;

                    /**
                     * Decodes a ListTasksResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListTasksResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.batch.v1.ListTasksResponse;

                    /**
                     * Verifies a ListTasksResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListTasksResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListTasksResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.batch.v1.ListTasksResponse;

                    /**
                     * Creates a plain object from a ListTasksResponse message. Also converts values to other types if specified.
                     * @param message ListTasksResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.batch.v1.ListTasksResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListTasksResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListTasksResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetTaskRequest. */
                interface IGetTaskRequest {

                    /** GetTaskRequest name */
                    name?: (string|null);
                }

                /** Represents a GetTaskRequest. */
                class GetTaskRequest implements IGetTaskRequest {

                    /**
                     * Constructs a new GetTaskRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.batch.v1.IGetTaskRequest);

                    /** GetTaskRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetTaskRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetTaskRequest instance
                     */
                    public static create(properties?: google.cloud.batch.v1.IGetTaskRequest): google.cloud.batch.v1.GetTaskRequest;

                    /**
                     * Encodes the specified GetTaskRequest message. Does not implicitly {@link google.cloud.batch.v1.GetTaskRequest.verify|verify} messages.
                     * @param message GetTaskRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.batch.v1.IGetTaskRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetTaskRequest message, length delimited. Does not implicitly {@link google.cloud.batch.v1.GetTaskRequest.verify|verify} messages.
                     * @param message GetTaskRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.batch.v1.IGetTaskRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetTaskRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetTaskRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.batch.v1.GetTaskRequest;

                    /**
                     * Decodes a GetTaskRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetTaskRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.batch.v1.GetTaskRequest;

                    /**
                     * Verifies a GetTaskRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetTaskRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetTaskRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.batch.v1.GetTaskRequest;

                    /**
                     * Creates a plain object from a GetTaskRequest message. Also converts values to other types if specified.
                     * @param message GetTaskRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.batch.v1.GetTaskRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetTaskRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetTaskRequest
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
                    constructor(properties?: google.cloud.batch.v1.IOperationMetadata);

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
                    public static create(properties?: google.cloud.batch.v1.IOperationMetadata): google.cloud.batch.v1.OperationMetadata;

                    /**
                     * Encodes the specified OperationMetadata message. Does not implicitly {@link google.cloud.batch.v1.OperationMetadata.verify|verify} messages.
                     * @param message OperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.batch.v1.IOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified OperationMetadata message, length delimited. Does not implicitly {@link google.cloud.batch.v1.OperationMetadata.verify|verify} messages.
                     * @param message OperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.batch.v1.IOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an OperationMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns OperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.batch.v1.OperationMetadata;

                    /**
                     * Decodes an OperationMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns OperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.batch.v1.OperationMetadata;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.batch.v1.OperationMetadata;

                    /**
                     * Creates a plain object from an OperationMetadata message. Also converts values to other types if specified.
                     * @param message OperationMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.batch.v1.OperationMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

                /** Properties of a Job. */
                interface IJob {

                    /** Job name */
                    name?: (string|null);

                    /** Job uid */
                    uid?: (string|null);

                    /** Job priority */
                    priority?: (number|Long|string|null);

                    /** Job taskGroups */
                    taskGroups?: (google.cloud.batch.v1.ITaskGroup[]|null);

                    /** Job allocationPolicy */
                    allocationPolicy?: (google.cloud.batch.v1.IAllocationPolicy|null);

                    /** Job labels */
                    labels?: ({ [k: string]: string }|null);

                    /** Job status */
                    status?: (google.cloud.batch.v1.IJobStatus|null);

                    /** Job createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** Job updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** Job logsPolicy */
                    logsPolicy?: (google.cloud.batch.v1.ILogsPolicy|null);

                    /** Job notifications */
                    notifications?: (google.cloud.batch.v1.IJobNotification[]|null);
                }

                /** Represents a Job. */
                class Job implements IJob {

                    /**
                     * Constructs a new Job.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.batch.v1.IJob);

                    /** Job name. */
                    public name: string;

                    /** Job uid. */
                    public uid: string;

                    /** Job priority. */
                    public priority: (number|Long|string);

                    /** Job taskGroups. */
                    public taskGroups: google.cloud.batch.v1.ITaskGroup[];

                    /** Job allocationPolicy. */
                    public allocationPolicy?: (google.cloud.batch.v1.IAllocationPolicy|null);

                    /** Job labels. */
                    public labels: { [k: string]: string };

                    /** Job status. */
                    public status?: (google.cloud.batch.v1.IJobStatus|null);

                    /** Job createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** Job updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** Job logsPolicy. */
                    public logsPolicy?: (google.cloud.batch.v1.ILogsPolicy|null);

                    /** Job notifications. */
                    public notifications: google.cloud.batch.v1.IJobNotification[];

                    /**
                     * Creates a new Job instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Job instance
                     */
                    public static create(properties?: google.cloud.batch.v1.IJob): google.cloud.batch.v1.Job;

                    /**
                     * Encodes the specified Job message. Does not implicitly {@link google.cloud.batch.v1.Job.verify|verify} messages.
                     * @param message Job message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.batch.v1.IJob, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Job message, length delimited. Does not implicitly {@link google.cloud.batch.v1.Job.verify|verify} messages.
                     * @param message Job message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.batch.v1.IJob, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Job message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Job
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.batch.v1.Job;

                    /**
                     * Decodes a Job message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Job
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.batch.v1.Job;

                    /**
                     * Verifies a Job message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Job message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Job
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.batch.v1.Job;

                    /**
                     * Creates a plain object from a Job message. Also converts values to other types if specified.
                     * @param message Job
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.batch.v1.Job, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Job to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Job
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a LogsPolicy. */
                interface ILogsPolicy {

                    /** LogsPolicy destination */
                    destination?: (google.cloud.batch.v1.LogsPolicy.Destination|keyof typeof google.cloud.batch.v1.LogsPolicy.Destination|null);

                    /** LogsPolicy logsPath */
                    logsPath?: (string|null);
                }

                /** Represents a LogsPolicy. */
                class LogsPolicy implements ILogsPolicy {

                    /**
                     * Constructs a new LogsPolicy.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.batch.v1.ILogsPolicy);

                    /** LogsPolicy destination. */
                    public destination: (google.cloud.batch.v1.LogsPolicy.Destination|keyof typeof google.cloud.batch.v1.LogsPolicy.Destination);

                    /** LogsPolicy logsPath. */
                    public logsPath: string;

                    /**
                     * Creates a new LogsPolicy instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns LogsPolicy instance
                     */
                    public static create(properties?: google.cloud.batch.v1.ILogsPolicy): google.cloud.batch.v1.LogsPolicy;

                    /**
                     * Encodes the specified LogsPolicy message. Does not implicitly {@link google.cloud.batch.v1.LogsPolicy.verify|verify} messages.
                     * @param message LogsPolicy message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.batch.v1.ILogsPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified LogsPolicy message, length delimited. Does not implicitly {@link google.cloud.batch.v1.LogsPolicy.verify|verify} messages.
                     * @param message LogsPolicy message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.batch.v1.ILogsPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a LogsPolicy message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns LogsPolicy
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.batch.v1.LogsPolicy;

                    /**
                     * Decodes a LogsPolicy message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns LogsPolicy
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.batch.v1.LogsPolicy;

                    /**
                     * Verifies a LogsPolicy message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a LogsPolicy message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns LogsPolicy
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.batch.v1.LogsPolicy;

                    /**
                     * Creates a plain object from a LogsPolicy message. Also converts values to other types if specified.
                     * @param message LogsPolicy
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.batch.v1.LogsPolicy, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this LogsPolicy to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for LogsPolicy
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace LogsPolicy {

                    /** Destination enum. */
                    enum Destination {
                        DESTINATION_UNSPECIFIED = 0,
                        CLOUD_LOGGING = 1,
                        PATH = 2
                    }
                }

                /** Properties of a JobStatus. */
                interface IJobStatus {

                    /** JobStatus state */
                    state?: (google.cloud.batch.v1.JobStatus.State|keyof typeof google.cloud.batch.v1.JobStatus.State|null);

                    /** JobStatus statusEvents */
                    statusEvents?: (google.cloud.batch.v1.IStatusEvent[]|null);

                    /** JobStatus taskGroups */
                    taskGroups?: ({ [k: string]: google.cloud.batch.v1.JobStatus.ITaskGroupStatus }|null);

                    /** JobStatus runDuration */
                    runDuration?: (google.protobuf.IDuration|null);
                }

                /** Represents a JobStatus. */
                class JobStatus implements IJobStatus {

                    /**
                     * Constructs a new JobStatus.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.batch.v1.IJobStatus);

                    /** JobStatus state. */
                    public state: (google.cloud.batch.v1.JobStatus.State|keyof typeof google.cloud.batch.v1.JobStatus.State);

                    /** JobStatus statusEvents. */
                    public statusEvents: google.cloud.batch.v1.IStatusEvent[];

                    /** JobStatus taskGroups. */
                    public taskGroups: { [k: string]: google.cloud.batch.v1.JobStatus.ITaskGroupStatus };

                    /** JobStatus runDuration. */
                    public runDuration?: (google.protobuf.IDuration|null);

                    /**
                     * Creates a new JobStatus instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns JobStatus instance
                     */
                    public static create(properties?: google.cloud.batch.v1.IJobStatus): google.cloud.batch.v1.JobStatus;

                    /**
                     * Encodes the specified JobStatus message. Does not implicitly {@link google.cloud.batch.v1.JobStatus.verify|verify} messages.
                     * @param message JobStatus message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.batch.v1.IJobStatus, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified JobStatus message, length delimited. Does not implicitly {@link google.cloud.batch.v1.JobStatus.verify|verify} messages.
                     * @param message JobStatus message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.batch.v1.IJobStatus, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a JobStatus message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns JobStatus
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.batch.v1.JobStatus;

                    /**
                     * Decodes a JobStatus message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns JobStatus
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.batch.v1.JobStatus;

                    /**
                     * Verifies a JobStatus message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a JobStatus message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns JobStatus
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.batch.v1.JobStatus;

                    /**
                     * Creates a plain object from a JobStatus message. Also converts values to other types if specified.
                     * @param message JobStatus
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.batch.v1.JobStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this JobStatus to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for JobStatus
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace JobStatus {

                    /** Properties of an InstanceStatus. */
                    interface IInstanceStatus {

                        /** InstanceStatus machineType */
                        machineType?: (string|null);

                        /** InstanceStatus provisioningModel */
                        provisioningModel?: (google.cloud.batch.v1.AllocationPolicy.ProvisioningModel|keyof typeof google.cloud.batch.v1.AllocationPolicy.ProvisioningModel|null);

                        /** InstanceStatus taskPack */
                        taskPack?: (number|Long|string|null);

                        /** InstanceStatus bootDisk */
                        bootDisk?: (google.cloud.batch.v1.AllocationPolicy.IDisk|null);
                    }

                    /** Represents an InstanceStatus. */
                    class InstanceStatus implements IInstanceStatus {

                        /**
                         * Constructs a new InstanceStatus.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.batch.v1.JobStatus.IInstanceStatus);

                        /** InstanceStatus machineType. */
                        public machineType: string;

                        /** InstanceStatus provisioningModel. */
                        public provisioningModel: (google.cloud.batch.v1.AllocationPolicy.ProvisioningModel|keyof typeof google.cloud.batch.v1.AllocationPolicy.ProvisioningModel);

                        /** InstanceStatus taskPack. */
                        public taskPack: (number|Long|string);

                        /** InstanceStatus bootDisk. */
                        public bootDisk?: (google.cloud.batch.v1.AllocationPolicy.IDisk|null);

                        /**
                         * Creates a new InstanceStatus instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns InstanceStatus instance
                         */
                        public static create(properties?: google.cloud.batch.v1.JobStatus.IInstanceStatus): google.cloud.batch.v1.JobStatus.InstanceStatus;

                        /**
                         * Encodes the specified InstanceStatus message. Does not implicitly {@link google.cloud.batch.v1.JobStatus.InstanceStatus.verify|verify} messages.
                         * @param message InstanceStatus message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.batch.v1.JobStatus.IInstanceStatus, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified InstanceStatus message, length delimited. Does not implicitly {@link google.cloud.batch.v1.JobStatus.InstanceStatus.verify|verify} messages.
                         * @param message InstanceStatus message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.batch.v1.JobStatus.IInstanceStatus, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an InstanceStatus message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns InstanceStatus
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.batch.v1.JobStatus.InstanceStatus;

                        /**
                         * Decodes an InstanceStatus message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns InstanceStatus
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.batch.v1.JobStatus.InstanceStatus;

                        /**
                         * Verifies an InstanceStatus message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an InstanceStatus message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns InstanceStatus
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.batch.v1.JobStatus.InstanceStatus;

                        /**
                         * Creates a plain object from an InstanceStatus message. Also converts values to other types if specified.
                         * @param message InstanceStatus
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.batch.v1.JobStatus.InstanceStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this InstanceStatus to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for InstanceStatus
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a TaskGroupStatus. */
                    interface ITaskGroupStatus {

                        /** TaskGroupStatus counts */
                        counts?: ({ [k: string]: (number|Long|string) }|null);

                        /** TaskGroupStatus instances */
                        instances?: (google.cloud.batch.v1.JobStatus.IInstanceStatus[]|null);
                    }

                    /** Represents a TaskGroupStatus. */
                    class TaskGroupStatus implements ITaskGroupStatus {

                        /**
                         * Constructs a new TaskGroupStatus.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.batch.v1.JobStatus.ITaskGroupStatus);

                        /** TaskGroupStatus counts. */
                        public counts: { [k: string]: (number|Long|string) };

                        /** TaskGroupStatus instances. */
                        public instances: google.cloud.batch.v1.JobStatus.IInstanceStatus[];

                        /**
                         * Creates a new TaskGroupStatus instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns TaskGroupStatus instance
                         */
                        public static create(properties?: google.cloud.batch.v1.JobStatus.ITaskGroupStatus): google.cloud.batch.v1.JobStatus.TaskGroupStatus;

                        /**
                         * Encodes the specified TaskGroupStatus message. Does not implicitly {@link google.cloud.batch.v1.JobStatus.TaskGroupStatus.verify|verify} messages.
                         * @param message TaskGroupStatus message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.batch.v1.JobStatus.ITaskGroupStatus, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified TaskGroupStatus message, length delimited. Does not implicitly {@link google.cloud.batch.v1.JobStatus.TaskGroupStatus.verify|verify} messages.
                         * @param message TaskGroupStatus message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.batch.v1.JobStatus.ITaskGroupStatus, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a TaskGroupStatus message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns TaskGroupStatus
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.batch.v1.JobStatus.TaskGroupStatus;

                        /**
                         * Decodes a TaskGroupStatus message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns TaskGroupStatus
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.batch.v1.JobStatus.TaskGroupStatus;

                        /**
                         * Verifies a TaskGroupStatus message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a TaskGroupStatus message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns TaskGroupStatus
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.batch.v1.JobStatus.TaskGroupStatus;

                        /**
                         * Creates a plain object from a TaskGroupStatus message. Also converts values to other types if specified.
                         * @param message TaskGroupStatus
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.batch.v1.JobStatus.TaskGroupStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this TaskGroupStatus to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for TaskGroupStatus
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        QUEUED = 1,
                        SCHEDULED = 2,
                        RUNNING = 3,
                        SUCCEEDED = 4,
                        FAILED = 5,
                        DELETION_IN_PROGRESS = 6
                    }
                }

                /** Properties of a JobNotification. */
                interface IJobNotification {

                    /** JobNotification pubsubTopic */
                    pubsubTopic?: (string|null);

                    /** JobNotification message */
                    message?: (google.cloud.batch.v1.JobNotification.IMessage|null);
                }

                /** Represents a JobNotification. */
                class JobNotification implements IJobNotification {

                    /**
                     * Constructs a new JobNotification.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.batch.v1.IJobNotification);

                    /** JobNotification pubsubTopic. */
                    public pubsubTopic: string;

                    /** JobNotification message. */
                    public message?: (google.cloud.batch.v1.JobNotification.IMessage|null);

                    /**
                     * Creates a new JobNotification instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns JobNotification instance
                     */
                    public static create(properties?: google.cloud.batch.v1.IJobNotification): google.cloud.batch.v1.JobNotification;

                    /**
                     * Encodes the specified JobNotification message. Does not implicitly {@link google.cloud.batch.v1.JobNotification.verify|verify} messages.
                     * @param message JobNotification message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.batch.v1.IJobNotification, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified JobNotification message, length delimited. Does not implicitly {@link google.cloud.batch.v1.JobNotification.verify|verify} messages.
                     * @param message JobNotification message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.batch.v1.IJobNotification, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a JobNotification message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns JobNotification
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.batch.v1.JobNotification;

                    /**
                     * Decodes a JobNotification message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns JobNotification
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.batch.v1.JobNotification;

                    /**
                     * Verifies a JobNotification message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a JobNotification message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns JobNotification
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.batch.v1.JobNotification;

                    /**
                     * Creates a plain object from a JobNotification message. Also converts values to other types if specified.
                     * @param message JobNotification
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.batch.v1.JobNotification, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this JobNotification to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for JobNotification
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace JobNotification {

                    /** Properties of a Message. */
                    interface IMessage {

                        /** Message type */
                        type?: (google.cloud.batch.v1.JobNotification.Type|keyof typeof google.cloud.batch.v1.JobNotification.Type|null);

                        /** Message newJobState */
                        newJobState?: (google.cloud.batch.v1.JobStatus.State|keyof typeof google.cloud.batch.v1.JobStatus.State|null);

                        /** Message newTaskState */
                        newTaskState?: (google.cloud.batch.v1.TaskStatus.State|keyof typeof google.cloud.batch.v1.TaskStatus.State|null);
                    }

                    /** Represents a Message. */
                    class Message implements IMessage {

                        /**
                         * Constructs a new Message.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.batch.v1.JobNotification.IMessage);

                        /** Message type. */
                        public type: (google.cloud.batch.v1.JobNotification.Type|keyof typeof google.cloud.batch.v1.JobNotification.Type);

                        /** Message newJobState. */
                        public newJobState: (google.cloud.batch.v1.JobStatus.State|keyof typeof google.cloud.batch.v1.JobStatus.State);

                        /** Message newTaskState. */
                        public newTaskState: (google.cloud.batch.v1.TaskStatus.State|keyof typeof google.cloud.batch.v1.TaskStatus.State);

                        /**
                         * Creates a new Message instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Message instance
                         */
                        public static create(properties?: google.cloud.batch.v1.JobNotification.IMessage): google.cloud.batch.v1.JobNotification.Message;

                        /**
                         * Encodes the specified Message message. Does not implicitly {@link google.cloud.batch.v1.JobNotification.Message.verify|verify} messages.
                         * @param message Message message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.batch.v1.JobNotification.IMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Message message, length delimited. Does not implicitly {@link google.cloud.batch.v1.JobNotification.Message.verify|verify} messages.
                         * @param message Message message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.batch.v1.JobNotification.IMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Message message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Message
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.batch.v1.JobNotification.Message;

                        /**
                         * Decodes a Message message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Message
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.batch.v1.JobNotification.Message;

                        /**
                         * Verifies a Message message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Message message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Message
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.batch.v1.JobNotification.Message;

                        /**
                         * Creates a plain object from a Message message. Also converts values to other types if specified.
                         * @param message Message
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.batch.v1.JobNotification.Message, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Message to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for Message
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Type enum. */
                    enum Type {
                        TYPE_UNSPECIFIED = 0,
                        JOB_STATE_CHANGED = 1,
                        TASK_STATE_CHANGED = 2
                    }
                }

                /** Properties of an AllocationPolicy. */
                interface IAllocationPolicy {

                    /** AllocationPolicy location */
                    location?: (google.cloud.batch.v1.AllocationPolicy.ILocationPolicy|null);

                    /** AllocationPolicy instances */
                    instances?: (google.cloud.batch.v1.AllocationPolicy.IInstancePolicyOrTemplate[]|null);

                    /** AllocationPolicy serviceAccount */
                    serviceAccount?: (google.cloud.batch.v1.IServiceAccount|null);

                    /** AllocationPolicy labels */
                    labels?: ({ [k: string]: string }|null);

                    /** AllocationPolicy network */
                    network?: (google.cloud.batch.v1.AllocationPolicy.INetworkPolicy|null);

                    /** AllocationPolicy placement */
                    placement?: (google.cloud.batch.v1.AllocationPolicy.IPlacementPolicy|null);
                }

                /** Represents an AllocationPolicy. */
                class AllocationPolicy implements IAllocationPolicy {

                    /**
                     * Constructs a new AllocationPolicy.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.batch.v1.IAllocationPolicy);

                    /** AllocationPolicy location. */
                    public location?: (google.cloud.batch.v1.AllocationPolicy.ILocationPolicy|null);

                    /** AllocationPolicy instances. */
                    public instances: google.cloud.batch.v1.AllocationPolicy.IInstancePolicyOrTemplate[];

                    /** AllocationPolicy serviceAccount. */
                    public serviceAccount?: (google.cloud.batch.v1.IServiceAccount|null);

                    /** AllocationPolicy labels. */
                    public labels: { [k: string]: string };

                    /** AllocationPolicy network. */
                    public network?: (google.cloud.batch.v1.AllocationPolicy.INetworkPolicy|null);

                    /** AllocationPolicy placement. */
                    public placement?: (google.cloud.batch.v1.AllocationPolicy.IPlacementPolicy|null);

                    /**
                     * Creates a new AllocationPolicy instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AllocationPolicy instance
                     */
                    public static create(properties?: google.cloud.batch.v1.IAllocationPolicy): google.cloud.batch.v1.AllocationPolicy;

                    /**
                     * Encodes the specified AllocationPolicy message. Does not implicitly {@link google.cloud.batch.v1.AllocationPolicy.verify|verify} messages.
                     * @param message AllocationPolicy message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.batch.v1.IAllocationPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AllocationPolicy message, length delimited. Does not implicitly {@link google.cloud.batch.v1.AllocationPolicy.verify|verify} messages.
                     * @param message AllocationPolicy message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.batch.v1.IAllocationPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AllocationPolicy message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AllocationPolicy
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.batch.v1.AllocationPolicy;

                    /**
                     * Decodes an AllocationPolicy message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AllocationPolicy
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.batch.v1.AllocationPolicy;

                    /**
                     * Verifies an AllocationPolicy message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AllocationPolicy message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AllocationPolicy
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.batch.v1.AllocationPolicy;

                    /**
                     * Creates a plain object from an AllocationPolicy message. Also converts values to other types if specified.
                     * @param message AllocationPolicy
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.batch.v1.AllocationPolicy, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AllocationPolicy to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for AllocationPolicy
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace AllocationPolicy {

                    /** Properties of a LocationPolicy. */
                    interface ILocationPolicy {

                        /** LocationPolicy allowedLocations */
                        allowedLocations?: (string[]|null);
                    }

                    /** Represents a LocationPolicy. */
                    class LocationPolicy implements ILocationPolicy {

                        /**
                         * Constructs a new LocationPolicy.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.batch.v1.AllocationPolicy.ILocationPolicy);

                        /** LocationPolicy allowedLocations. */
                        public allowedLocations: string[];

                        /**
                         * Creates a new LocationPolicy instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns LocationPolicy instance
                         */
                        public static create(properties?: google.cloud.batch.v1.AllocationPolicy.ILocationPolicy): google.cloud.batch.v1.AllocationPolicy.LocationPolicy;

                        /**
                         * Encodes the specified LocationPolicy message. Does not implicitly {@link google.cloud.batch.v1.AllocationPolicy.LocationPolicy.verify|verify} messages.
                         * @param message LocationPolicy message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.batch.v1.AllocationPolicy.ILocationPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified LocationPolicy message, length delimited. Does not implicitly {@link google.cloud.batch.v1.AllocationPolicy.LocationPolicy.verify|verify} messages.
                         * @param message LocationPolicy message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.batch.v1.AllocationPolicy.ILocationPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a LocationPolicy message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns LocationPolicy
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.batch.v1.AllocationPolicy.LocationPolicy;

                        /**
                         * Decodes a LocationPolicy message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns LocationPolicy
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.batch.v1.AllocationPolicy.LocationPolicy;

                        /**
                         * Verifies a LocationPolicy message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a LocationPolicy message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns LocationPolicy
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.batch.v1.AllocationPolicy.LocationPolicy;

                        /**
                         * Creates a plain object from a LocationPolicy message. Also converts values to other types if specified.
                         * @param message LocationPolicy
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.batch.v1.AllocationPolicy.LocationPolicy, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this LocationPolicy to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for LocationPolicy
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a Disk. */
                    interface IDisk {

                        /** Disk image */
                        image?: (string|null);

                        /** Disk snapshot */
                        snapshot?: (string|null);

                        /** Disk type */
                        type?: (string|null);

                        /** Disk sizeGb */
                        sizeGb?: (number|Long|string|null);

                        /** Disk diskInterface */
                        diskInterface?: (string|null);
                    }

                    /** Represents a Disk. */
                    class Disk implements IDisk {

                        /**
                         * Constructs a new Disk.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.batch.v1.AllocationPolicy.IDisk);

                        /** Disk image. */
                        public image?: (string|null);

                        /** Disk snapshot. */
                        public snapshot?: (string|null);

                        /** Disk type. */
                        public type: string;

                        /** Disk sizeGb. */
                        public sizeGb: (number|Long|string);

                        /** Disk diskInterface. */
                        public diskInterface: string;

                        /** Disk dataSource. */
                        public dataSource?: ("image"|"snapshot");

                        /**
                         * Creates a new Disk instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Disk instance
                         */
                        public static create(properties?: google.cloud.batch.v1.AllocationPolicy.IDisk): google.cloud.batch.v1.AllocationPolicy.Disk;

                        /**
                         * Encodes the specified Disk message. Does not implicitly {@link google.cloud.batch.v1.AllocationPolicy.Disk.verify|verify} messages.
                         * @param message Disk message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.batch.v1.AllocationPolicy.IDisk, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Disk message, length delimited. Does not implicitly {@link google.cloud.batch.v1.AllocationPolicy.Disk.verify|verify} messages.
                         * @param message Disk message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.batch.v1.AllocationPolicy.IDisk, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Disk message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Disk
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.batch.v1.AllocationPolicy.Disk;

                        /**
                         * Decodes a Disk message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Disk
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.batch.v1.AllocationPolicy.Disk;

                        /**
                         * Verifies a Disk message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Disk message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Disk
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.batch.v1.AllocationPolicy.Disk;

                        /**
                         * Creates a plain object from a Disk message. Also converts values to other types if specified.
                         * @param message Disk
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.batch.v1.AllocationPolicy.Disk, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Disk to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for Disk
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of an AttachedDisk. */
                    interface IAttachedDisk {

                        /** AttachedDisk newDisk */
                        newDisk?: (google.cloud.batch.v1.AllocationPolicy.IDisk|null);

                        /** AttachedDisk existingDisk */
                        existingDisk?: (string|null);

                        /** AttachedDisk deviceName */
                        deviceName?: (string|null);
                    }

                    /** Represents an AttachedDisk. */
                    class AttachedDisk implements IAttachedDisk {

                        /**
                         * Constructs a new AttachedDisk.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.batch.v1.AllocationPolicy.IAttachedDisk);

                        /** AttachedDisk newDisk. */
                        public newDisk?: (google.cloud.batch.v1.AllocationPolicy.IDisk|null);

                        /** AttachedDisk existingDisk. */
                        public existingDisk?: (string|null);

                        /** AttachedDisk deviceName. */
                        public deviceName: string;

                        /** AttachedDisk attached. */
                        public attached?: ("newDisk"|"existingDisk");

                        /**
                         * Creates a new AttachedDisk instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns AttachedDisk instance
                         */
                        public static create(properties?: google.cloud.batch.v1.AllocationPolicy.IAttachedDisk): google.cloud.batch.v1.AllocationPolicy.AttachedDisk;

                        /**
                         * Encodes the specified AttachedDisk message. Does not implicitly {@link google.cloud.batch.v1.AllocationPolicy.AttachedDisk.verify|verify} messages.
                         * @param message AttachedDisk message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.batch.v1.AllocationPolicy.IAttachedDisk, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified AttachedDisk message, length delimited. Does not implicitly {@link google.cloud.batch.v1.AllocationPolicy.AttachedDisk.verify|verify} messages.
                         * @param message AttachedDisk message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.batch.v1.AllocationPolicy.IAttachedDisk, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an AttachedDisk message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns AttachedDisk
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.batch.v1.AllocationPolicy.AttachedDisk;

                        /**
                         * Decodes an AttachedDisk message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns AttachedDisk
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.batch.v1.AllocationPolicy.AttachedDisk;

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
                        public static fromObject(object: { [k: string]: any }): google.cloud.batch.v1.AllocationPolicy.AttachedDisk;

                        /**
                         * Creates a plain object from an AttachedDisk message. Also converts values to other types if specified.
                         * @param message AttachedDisk
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.batch.v1.AllocationPolicy.AttachedDisk, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

                    /** Properties of an Accelerator. */
                    interface IAccelerator {

                        /** Accelerator type */
                        type?: (string|null);

                        /** Accelerator count */
                        count?: (number|Long|string|null);

                        /** Accelerator installGpuDrivers */
                        installGpuDrivers?: (boolean|null);

                        /** Accelerator driverVersion */
                        driverVersion?: (string|null);
                    }

                    /** Represents an Accelerator. */
                    class Accelerator implements IAccelerator {

                        /**
                         * Constructs a new Accelerator.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.batch.v1.AllocationPolicy.IAccelerator);

                        /** Accelerator type. */
                        public type: string;

                        /** Accelerator count. */
                        public count: (number|Long|string);

                        /** Accelerator installGpuDrivers. */
                        public installGpuDrivers: boolean;

                        /** Accelerator driverVersion. */
                        public driverVersion: string;

                        /**
                         * Creates a new Accelerator instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Accelerator instance
                         */
                        public static create(properties?: google.cloud.batch.v1.AllocationPolicy.IAccelerator): google.cloud.batch.v1.AllocationPolicy.Accelerator;

                        /**
                         * Encodes the specified Accelerator message. Does not implicitly {@link google.cloud.batch.v1.AllocationPolicy.Accelerator.verify|verify} messages.
                         * @param message Accelerator message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.batch.v1.AllocationPolicy.IAccelerator, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Accelerator message, length delimited. Does not implicitly {@link google.cloud.batch.v1.AllocationPolicy.Accelerator.verify|verify} messages.
                         * @param message Accelerator message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.batch.v1.AllocationPolicy.IAccelerator, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an Accelerator message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Accelerator
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.batch.v1.AllocationPolicy.Accelerator;

                        /**
                         * Decodes an Accelerator message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Accelerator
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.batch.v1.AllocationPolicy.Accelerator;

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
                        public static fromObject(object: { [k: string]: any }): google.cloud.batch.v1.AllocationPolicy.Accelerator;

                        /**
                         * Creates a plain object from an Accelerator message. Also converts values to other types if specified.
                         * @param message Accelerator
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.batch.v1.AllocationPolicy.Accelerator, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

                    /** Properties of an InstancePolicy. */
                    interface IInstancePolicy {

                        /** InstancePolicy machineType */
                        machineType?: (string|null);

                        /** InstancePolicy minCpuPlatform */
                        minCpuPlatform?: (string|null);

                        /** InstancePolicy provisioningModel */
                        provisioningModel?: (google.cloud.batch.v1.AllocationPolicy.ProvisioningModel|keyof typeof google.cloud.batch.v1.AllocationPolicy.ProvisioningModel|null);

                        /** InstancePolicy accelerators */
                        accelerators?: (google.cloud.batch.v1.AllocationPolicy.IAccelerator[]|null);

                        /** InstancePolicy bootDisk */
                        bootDisk?: (google.cloud.batch.v1.AllocationPolicy.IDisk|null);

                        /** InstancePolicy disks */
                        disks?: (google.cloud.batch.v1.AllocationPolicy.IAttachedDisk[]|null);
                    }

                    /** Represents an InstancePolicy. */
                    class InstancePolicy implements IInstancePolicy {

                        /**
                         * Constructs a new InstancePolicy.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.batch.v1.AllocationPolicy.IInstancePolicy);

                        /** InstancePolicy machineType. */
                        public machineType: string;

                        /** InstancePolicy minCpuPlatform. */
                        public minCpuPlatform: string;

                        /** InstancePolicy provisioningModel. */
                        public provisioningModel: (google.cloud.batch.v1.AllocationPolicy.ProvisioningModel|keyof typeof google.cloud.batch.v1.AllocationPolicy.ProvisioningModel);

                        /** InstancePolicy accelerators. */
                        public accelerators: google.cloud.batch.v1.AllocationPolicy.IAccelerator[];

                        /** InstancePolicy bootDisk. */
                        public bootDisk?: (google.cloud.batch.v1.AllocationPolicy.IDisk|null);

                        /** InstancePolicy disks. */
                        public disks: google.cloud.batch.v1.AllocationPolicy.IAttachedDisk[];

                        /**
                         * Creates a new InstancePolicy instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns InstancePolicy instance
                         */
                        public static create(properties?: google.cloud.batch.v1.AllocationPolicy.IInstancePolicy): google.cloud.batch.v1.AllocationPolicy.InstancePolicy;

                        /**
                         * Encodes the specified InstancePolicy message. Does not implicitly {@link google.cloud.batch.v1.AllocationPolicy.InstancePolicy.verify|verify} messages.
                         * @param message InstancePolicy message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.batch.v1.AllocationPolicy.IInstancePolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified InstancePolicy message, length delimited. Does not implicitly {@link google.cloud.batch.v1.AllocationPolicy.InstancePolicy.verify|verify} messages.
                         * @param message InstancePolicy message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.batch.v1.AllocationPolicy.IInstancePolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an InstancePolicy message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns InstancePolicy
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.batch.v1.AllocationPolicy.InstancePolicy;

                        /**
                         * Decodes an InstancePolicy message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns InstancePolicy
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.batch.v1.AllocationPolicy.InstancePolicy;

                        /**
                         * Verifies an InstancePolicy message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an InstancePolicy message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns InstancePolicy
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.batch.v1.AllocationPolicy.InstancePolicy;

                        /**
                         * Creates a plain object from an InstancePolicy message. Also converts values to other types if specified.
                         * @param message InstancePolicy
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.batch.v1.AllocationPolicy.InstancePolicy, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this InstancePolicy to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for InstancePolicy
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of an InstancePolicyOrTemplate. */
                    interface IInstancePolicyOrTemplate {

                        /** InstancePolicyOrTemplate policy */
                        policy?: (google.cloud.batch.v1.AllocationPolicy.IInstancePolicy|null);

                        /** InstancePolicyOrTemplate instanceTemplate */
                        instanceTemplate?: (string|null);

                        /** InstancePolicyOrTemplate installGpuDrivers */
                        installGpuDrivers?: (boolean|null);
                    }

                    /** Represents an InstancePolicyOrTemplate. */
                    class InstancePolicyOrTemplate implements IInstancePolicyOrTemplate {

                        /**
                         * Constructs a new InstancePolicyOrTemplate.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.batch.v1.AllocationPolicy.IInstancePolicyOrTemplate);

                        /** InstancePolicyOrTemplate policy. */
                        public policy?: (google.cloud.batch.v1.AllocationPolicy.IInstancePolicy|null);

                        /** InstancePolicyOrTemplate instanceTemplate. */
                        public instanceTemplate?: (string|null);

                        /** InstancePolicyOrTemplate installGpuDrivers. */
                        public installGpuDrivers: boolean;

                        /** InstancePolicyOrTemplate policyTemplate. */
                        public policyTemplate?: ("policy"|"instanceTemplate");

                        /**
                         * Creates a new InstancePolicyOrTemplate instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns InstancePolicyOrTemplate instance
                         */
                        public static create(properties?: google.cloud.batch.v1.AllocationPolicy.IInstancePolicyOrTemplate): google.cloud.batch.v1.AllocationPolicy.InstancePolicyOrTemplate;

                        /**
                         * Encodes the specified InstancePolicyOrTemplate message. Does not implicitly {@link google.cloud.batch.v1.AllocationPolicy.InstancePolicyOrTemplate.verify|verify} messages.
                         * @param message InstancePolicyOrTemplate message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.batch.v1.AllocationPolicy.IInstancePolicyOrTemplate, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified InstancePolicyOrTemplate message, length delimited. Does not implicitly {@link google.cloud.batch.v1.AllocationPolicy.InstancePolicyOrTemplate.verify|verify} messages.
                         * @param message InstancePolicyOrTemplate message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.batch.v1.AllocationPolicy.IInstancePolicyOrTemplate, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an InstancePolicyOrTemplate message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns InstancePolicyOrTemplate
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.batch.v1.AllocationPolicy.InstancePolicyOrTemplate;

                        /**
                         * Decodes an InstancePolicyOrTemplate message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns InstancePolicyOrTemplate
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.batch.v1.AllocationPolicy.InstancePolicyOrTemplate;

                        /**
                         * Verifies an InstancePolicyOrTemplate message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an InstancePolicyOrTemplate message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns InstancePolicyOrTemplate
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.batch.v1.AllocationPolicy.InstancePolicyOrTemplate;

                        /**
                         * Creates a plain object from an InstancePolicyOrTemplate message. Also converts values to other types if specified.
                         * @param message InstancePolicyOrTemplate
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.batch.v1.AllocationPolicy.InstancePolicyOrTemplate, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this InstancePolicyOrTemplate to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for InstancePolicyOrTemplate
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a NetworkInterface. */
                    interface INetworkInterface {

                        /** NetworkInterface network */
                        network?: (string|null);

                        /** NetworkInterface subnetwork */
                        subnetwork?: (string|null);

                        /** NetworkInterface noExternalIpAddress */
                        noExternalIpAddress?: (boolean|null);
                    }

                    /** Represents a NetworkInterface. */
                    class NetworkInterface implements INetworkInterface {

                        /**
                         * Constructs a new NetworkInterface.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.batch.v1.AllocationPolicy.INetworkInterface);

                        /** NetworkInterface network. */
                        public network: string;

                        /** NetworkInterface subnetwork. */
                        public subnetwork: string;

                        /** NetworkInterface noExternalIpAddress. */
                        public noExternalIpAddress: boolean;

                        /**
                         * Creates a new NetworkInterface instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns NetworkInterface instance
                         */
                        public static create(properties?: google.cloud.batch.v1.AllocationPolicy.INetworkInterface): google.cloud.batch.v1.AllocationPolicy.NetworkInterface;

                        /**
                         * Encodes the specified NetworkInterface message. Does not implicitly {@link google.cloud.batch.v1.AllocationPolicy.NetworkInterface.verify|verify} messages.
                         * @param message NetworkInterface message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.batch.v1.AllocationPolicy.INetworkInterface, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified NetworkInterface message, length delimited. Does not implicitly {@link google.cloud.batch.v1.AllocationPolicy.NetworkInterface.verify|verify} messages.
                         * @param message NetworkInterface message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.batch.v1.AllocationPolicy.INetworkInterface, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a NetworkInterface message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns NetworkInterface
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.batch.v1.AllocationPolicy.NetworkInterface;

                        /**
                         * Decodes a NetworkInterface message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns NetworkInterface
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.batch.v1.AllocationPolicy.NetworkInterface;

                        /**
                         * Verifies a NetworkInterface message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a NetworkInterface message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns NetworkInterface
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.batch.v1.AllocationPolicy.NetworkInterface;

                        /**
                         * Creates a plain object from a NetworkInterface message. Also converts values to other types if specified.
                         * @param message NetworkInterface
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.batch.v1.AllocationPolicy.NetworkInterface, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this NetworkInterface to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for NetworkInterface
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a NetworkPolicy. */
                    interface INetworkPolicy {

                        /** NetworkPolicy networkInterfaces */
                        networkInterfaces?: (google.cloud.batch.v1.AllocationPolicy.INetworkInterface[]|null);
                    }

                    /** Represents a NetworkPolicy. */
                    class NetworkPolicy implements INetworkPolicy {

                        /**
                         * Constructs a new NetworkPolicy.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.batch.v1.AllocationPolicy.INetworkPolicy);

                        /** NetworkPolicy networkInterfaces. */
                        public networkInterfaces: google.cloud.batch.v1.AllocationPolicy.INetworkInterface[];

                        /**
                         * Creates a new NetworkPolicy instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns NetworkPolicy instance
                         */
                        public static create(properties?: google.cloud.batch.v1.AllocationPolicy.INetworkPolicy): google.cloud.batch.v1.AllocationPolicy.NetworkPolicy;

                        /**
                         * Encodes the specified NetworkPolicy message. Does not implicitly {@link google.cloud.batch.v1.AllocationPolicy.NetworkPolicy.verify|verify} messages.
                         * @param message NetworkPolicy message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.batch.v1.AllocationPolicy.INetworkPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified NetworkPolicy message, length delimited. Does not implicitly {@link google.cloud.batch.v1.AllocationPolicy.NetworkPolicy.verify|verify} messages.
                         * @param message NetworkPolicy message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.batch.v1.AllocationPolicy.INetworkPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a NetworkPolicy message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns NetworkPolicy
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.batch.v1.AllocationPolicy.NetworkPolicy;

                        /**
                         * Decodes a NetworkPolicy message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns NetworkPolicy
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.batch.v1.AllocationPolicy.NetworkPolicy;

                        /**
                         * Verifies a NetworkPolicy message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a NetworkPolicy message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns NetworkPolicy
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.batch.v1.AllocationPolicy.NetworkPolicy;

                        /**
                         * Creates a plain object from a NetworkPolicy message. Also converts values to other types if specified.
                         * @param message NetworkPolicy
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.batch.v1.AllocationPolicy.NetworkPolicy, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this NetworkPolicy to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for NetworkPolicy
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a PlacementPolicy. */
                    interface IPlacementPolicy {

                        /** PlacementPolicy collocation */
                        collocation?: (string|null);

                        /** PlacementPolicy maxDistance */
                        maxDistance?: (number|Long|string|null);
                    }

                    /** Represents a PlacementPolicy. */
                    class PlacementPolicy implements IPlacementPolicy {

                        /**
                         * Constructs a new PlacementPolicy.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.batch.v1.AllocationPolicy.IPlacementPolicy);

                        /** PlacementPolicy collocation. */
                        public collocation: string;

                        /** PlacementPolicy maxDistance. */
                        public maxDistance: (number|Long|string);

                        /**
                         * Creates a new PlacementPolicy instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns PlacementPolicy instance
                         */
                        public static create(properties?: google.cloud.batch.v1.AllocationPolicy.IPlacementPolicy): google.cloud.batch.v1.AllocationPolicy.PlacementPolicy;

                        /**
                         * Encodes the specified PlacementPolicy message. Does not implicitly {@link google.cloud.batch.v1.AllocationPolicy.PlacementPolicy.verify|verify} messages.
                         * @param message PlacementPolicy message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.batch.v1.AllocationPolicy.IPlacementPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified PlacementPolicy message, length delimited. Does not implicitly {@link google.cloud.batch.v1.AllocationPolicy.PlacementPolicy.verify|verify} messages.
                         * @param message PlacementPolicy message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.batch.v1.AllocationPolicy.IPlacementPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a PlacementPolicy message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns PlacementPolicy
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.batch.v1.AllocationPolicy.PlacementPolicy;

                        /**
                         * Decodes a PlacementPolicy message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns PlacementPolicy
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.batch.v1.AllocationPolicy.PlacementPolicy;

                        /**
                         * Verifies a PlacementPolicy message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a PlacementPolicy message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns PlacementPolicy
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.batch.v1.AllocationPolicy.PlacementPolicy;

                        /**
                         * Creates a plain object from a PlacementPolicy message. Also converts values to other types if specified.
                         * @param message PlacementPolicy
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.batch.v1.AllocationPolicy.PlacementPolicy, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this PlacementPolicy to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for PlacementPolicy
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** ProvisioningModel enum. */
                    enum ProvisioningModel {
                        PROVISIONING_MODEL_UNSPECIFIED = 0,
                        STANDARD = 1,
                        SPOT = 2,
                        PREEMPTIBLE = 3
                    }
                }

                /** Properties of a TaskGroup. */
                interface ITaskGroup {

                    /** TaskGroup name */
                    name?: (string|null);

                    /** TaskGroup taskSpec */
                    taskSpec?: (google.cloud.batch.v1.ITaskSpec|null);

                    /** TaskGroup taskCount */
                    taskCount?: (number|Long|string|null);

                    /** TaskGroup parallelism */
                    parallelism?: (number|Long|string|null);

                    /** TaskGroup schedulingPolicy */
                    schedulingPolicy?: (google.cloud.batch.v1.TaskGroup.SchedulingPolicy|keyof typeof google.cloud.batch.v1.TaskGroup.SchedulingPolicy|null);

                    /** TaskGroup taskEnvironments */
                    taskEnvironments?: (google.cloud.batch.v1.IEnvironment[]|null);

                    /** TaskGroup taskCountPerNode */
                    taskCountPerNode?: (number|Long|string|null);

                    /** TaskGroup requireHostsFile */
                    requireHostsFile?: (boolean|null);

                    /** TaskGroup permissiveSsh */
                    permissiveSsh?: (boolean|null);
                }

                /** Represents a TaskGroup. */
                class TaskGroup implements ITaskGroup {

                    /**
                     * Constructs a new TaskGroup.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.batch.v1.ITaskGroup);

                    /** TaskGroup name. */
                    public name: string;

                    /** TaskGroup taskSpec. */
                    public taskSpec?: (google.cloud.batch.v1.ITaskSpec|null);

                    /** TaskGroup taskCount. */
                    public taskCount: (number|Long|string);

                    /** TaskGroup parallelism. */
                    public parallelism: (number|Long|string);

                    /** TaskGroup schedulingPolicy. */
                    public schedulingPolicy: (google.cloud.batch.v1.TaskGroup.SchedulingPolicy|keyof typeof google.cloud.batch.v1.TaskGroup.SchedulingPolicy);

                    /** TaskGroup taskEnvironments. */
                    public taskEnvironments: google.cloud.batch.v1.IEnvironment[];

                    /** TaskGroup taskCountPerNode. */
                    public taskCountPerNode: (number|Long|string);

                    /** TaskGroup requireHostsFile. */
                    public requireHostsFile: boolean;

                    /** TaskGroup permissiveSsh. */
                    public permissiveSsh: boolean;

                    /**
                     * Creates a new TaskGroup instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TaskGroup instance
                     */
                    public static create(properties?: google.cloud.batch.v1.ITaskGroup): google.cloud.batch.v1.TaskGroup;

                    /**
                     * Encodes the specified TaskGroup message. Does not implicitly {@link google.cloud.batch.v1.TaskGroup.verify|verify} messages.
                     * @param message TaskGroup message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.batch.v1.ITaskGroup, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TaskGroup message, length delimited. Does not implicitly {@link google.cloud.batch.v1.TaskGroup.verify|verify} messages.
                     * @param message TaskGroup message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.batch.v1.ITaskGroup, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TaskGroup message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TaskGroup
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.batch.v1.TaskGroup;

                    /**
                     * Decodes a TaskGroup message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TaskGroup
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.batch.v1.TaskGroup;

                    /**
                     * Verifies a TaskGroup message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TaskGroup message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TaskGroup
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.batch.v1.TaskGroup;

                    /**
                     * Creates a plain object from a TaskGroup message. Also converts values to other types if specified.
                     * @param message TaskGroup
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.batch.v1.TaskGroup, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TaskGroup to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for TaskGroup
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace TaskGroup {

                    /** SchedulingPolicy enum. */
                    enum SchedulingPolicy {
                        SCHEDULING_POLICY_UNSPECIFIED = 0,
                        AS_SOON_AS_POSSIBLE = 1,
                        IN_ORDER = 2
                    }
                }

                /** Properties of a ServiceAccount. */
                interface IServiceAccount {

                    /** ServiceAccount email */
                    email?: (string|null);

                    /** ServiceAccount scopes */
                    scopes?: (string[]|null);
                }

                /** Represents a ServiceAccount. */
                class ServiceAccount implements IServiceAccount {

                    /**
                     * Constructs a new ServiceAccount.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.batch.v1.IServiceAccount);

                    /** ServiceAccount email. */
                    public email: string;

                    /** ServiceAccount scopes. */
                    public scopes: string[];

                    /**
                     * Creates a new ServiceAccount instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ServiceAccount instance
                     */
                    public static create(properties?: google.cloud.batch.v1.IServiceAccount): google.cloud.batch.v1.ServiceAccount;

                    /**
                     * Encodes the specified ServiceAccount message. Does not implicitly {@link google.cloud.batch.v1.ServiceAccount.verify|verify} messages.
                     * @param message ServiceAccount message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.batch.v1.IServiceAccount, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ServiceAccount message, length delimited. Does not implicitly {@link google.cloud.batch.v1.ServiceAccount.verify|verify} messages.
                     * @param message ServiceAccount message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.batch.v1.IServiceAccount, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ServiceAccount message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ServiceAccount
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.batch.v1.ServiceAccount;

                    /**
                     * Decodes a ServiceAccount message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ServiceAccount
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.batch.v1.ServiceAccount;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.batch.v1.ServiceAccount;

                    /**
                     * Creates a plain object from a ServiceAccount message. Also converts values to other types if specified.
                     * @param message ServiceAccount
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.batch.v1.ServiceAccount, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

                /** Properties of a ComputeResource. */
                interface IComputeResource {

                    /** ComputeResource cpuMilli */
                    cpuMilli?: (number|Long|string|null);

                    /** ComputeResource memoryMib */
                    memoryMib?: (number|Long|string|null);

                    /** ComputeResource bootDiskMib */
                    bootDiskMib?: (number|Long|string|null);
                }

                /** Represents a ComputeResource. */
                class ComputeResource implements IComputeResource {

                    /**
                     * Constructs a new ComputeResource.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.batch.v1.IComputeResource);

                    /** ComputeResource cpuMilli. */
                    public cpuMilli: (number|Long|string);

                    /** ComputeResource memoryMib. */
                    public memoryMib: (number|Long|string);

                    /** ComputeResource bootDiskMib. */
                    public bootDiskMib: (number|Long|string);

                    /**
                     * Creates a new ComputeResource instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ComputeResource instance
                     */
                    public static create(properties?: google.cloud.batch.v1.IComputeResource): google.cloud.batch.v1.ComputeResource;

                    /**
                     * Encodes the specified ComputeResource message. Does not implicitly {@link google.cloud.batch.v1.ComputeResource.verify|verify} messages.
                     * @param message ComputeResource message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.batch.v1.IComputeResource, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ComputeResource message, length delimited. Does not implicitly {@link google.cloud.batch.v1.ComputeResource.verify|verify} messages.
                     * @param message ComputeResource message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.batch.v1.IComputeResource, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ComputeResource message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ComputeResource
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.batch.v1.ComputeResource;

                    /**
                     * Decodes a ComputeResource message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ComputeResource
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.batch.v1.ComputeResource;

                    /**
                     * Verifies a ComputeResource message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ComputeResource message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ComputeResource
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.batch.v1.ComputeResource;

                    /**
                     * Creates a plain object from a ComputeResource message. Also converts values to other types if specified.
                     * @param message ComputeResource
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.batch.v1.ComputeResource, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ComputeResource to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ComputeResource
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a StatusEvent. */
                interface IStatusEvent {

                    /** StatusEvent type */
                    type?: (string|null);

                    /** StatusEvent description */
                    description?: (string|null);

                    /** StatusEvent eventTime */
                    eventTime?: (google.protobuf.ITimestamp|null);

                    /** StatusEvent taskExecution */
                    taskExecution?: (google.cloud.batch.v1.ITaskExecution|null);

                    /** StatusEvent taskState */
                    taskState?: (google.cloud.batch.v1.TaskStatus.State|keyof typeof google.cloud.batch.v1.TaskStatus.State|null);
                }

                /** Represents a StatusEvent. */
                class StatusEvent implements IStatusEvent {

                    /**
                     * Constructs a new StatusEvent.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.batch.v1.IStatusEvent);

                    /** StatusEvent type. */
                    public type: string;

                    /** StatusEvent description. */
                    public description: string;

                    /** StatusEvent eventTime. */
                    public eventTime?: (google.protobuf.ITimestamp|null);

                    /** StatusEvent taskExecution. */
                    public taskExecution?: (google.cloud.batch.v1.ITaskExecution|null);

                    /** StatusEvent taskState. */
                    public taskState: (google.cloud.batch.v1.TaskStatus.State|keyof typeof google.cloud.batch.v1.TaskStatus.State);

                    /**
                     * Creates a new StatusEvent instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns StatusEvent instance
                     */
                    public static create(properties?: google.cloud.batch.v1.IStatusEvent): google.cloud.batch.v1.StatusEvent;

                    /**
                     * Encodes the specified StatusEvent message. Does not implicitly {@link google.cloud.batch.v1.StatusEvent.verify|verify} messages.
                     * @param message StatusEvent message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.batch.v1.IStatusEvent, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified StatusEvent message, length delimited. Does not implicitly {@link google.cloud.batch.v1.StatusEvent.verify|verify} messages.
                     * @param message StatusEvent message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.batch.v1.IStatusEvent, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a StatusEvent message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns StatusEvent
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.batch.v1.StatusEvent;

                    /**
                     * Decodes a StatusEvent message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns StatusEvent
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.batch.v1.StatusEvent;

                    /**
                     * Verifies a StatusEvent message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a StatusEvent message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns StatusEvent
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.batch.v1.StatusEvent;

                    /**
                     * Creates a plain object from a StatusEvent message. Also converts values to other types if specified.
                     * @param message StatusEvent
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.batch.v1.StatusEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this StatusEvent to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for StatusEvent
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a TaskExecution. */
                interface ITaskExecution {

                    /** TaskExecution exitCode */
                    exitCode?: (number|null);
                }

                /** Represents a TaskExecution. */
                class TaskExecution implements ITaskExecution {

                    /**
                     * Constructs a new TaskExecution.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.batch.v1.ITaskExecution);

                    /** TaskExecution exitCode. */
                    public exitCode: number;

                    /**
                     * Creates a new TaskExecution instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TaskExecution instance
                     */
                    public static create(properties?: google.cloud.batch.v1.ITaskExecution): google.cloud.batch.v1.TaskExecution;

                    /**
                     * Encodes the specified TaskExecution message. Does not implicitly {@link google.cloud.batch.v1.TaskExecution.verify|verify} messages.
                     * @param message TaskExecution message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.batch.v1.ITaskExecution, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TaskExecution message, length delimited. Does not implicitly {@link google.cloud.batch.v1.TaskExecution.verify|verify} messages.
                     * @param message TaskExecution message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.batch.v1.ITaskExecution, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TaskExecution message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TaskExecution
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.batch.v1.TaskExecution;

                    /**
                     * Decodes a TaskExecution message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TaskExecution
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.batch.v1.TaskExecution;

                    /**
                     * Verifies a TaskExecution message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TaskExecution message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TaskExecution
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.batch.v1.TaskExecution;

                    /**
                     * Creates a plain object from a TaskExecution message. Also converts values to other types if specified.
                     * @param message TaskExecution
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.batch.v1.TaskExecution, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TaskExecution to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for TaskExecution
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a TaskStatus. */
                interface ITaskStatus {

                    /** TaskStatus state */
                    state?: (google.cloud.batch.v1.TaskStatus.State|keyof typeof google.cloud.batch.v1.TaskStatus.State|null);

                    /** TaskStatus statusEvents */
                    statusEvents?: (google.cloud.batch.v1.IStatusEvent[]|null);
                }

                /** Represents a TaskStatus. */
                class TaskStatus implements ITaskStatus {

                    /**
                     * Constructs a new TaskStatus.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.batch.v1.ITaskStatus);

                    /** TaskStatus state. */
                    public state: (google.cloud.batch.v1.TaskStatus.State|keyof typeof google.cloud.batch.v1.TaskStatus.State);

                    /** TaskStatus statusEvents. */
                    public statusEvents: google.cloud.batch.v1.IStatusEvent[];

                    /**
                     * Creates a new TaskStatus instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TaskStatus instance
                     */
                    public static create(properties?: google.cloud.batch.v1.ITaskStatus): google.cloud.batch.v1.TaskStatus;

                    /**
                     * Encodes the specified TaskStatus message. Does not implicitly {@link google.cloud.batch.v1.TaskStatus.verify|verify} messages.
                     * @param message TaskStatus message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.batch.v1.ITaskStatus, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TaskStatus message, length delimited. Does not implicitly {@link google.cloud.batch.v1.TaskStatus.verify|verify} messages.
                     * @param message TaskStatus message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.batch.v1.ITaskStatus, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TaskStatus message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TaskStatus
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.batch.v1.TaskStatus;

                    /**
                     * Decodes a TaskStatus message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TaskStatus
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.batch.v1.TaskStatus;

                    /**
                     * Verifies a TaskStatus message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TaskStatus message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TaskStatus
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.batch.v1.TaskStatus;

                    /**
                     * Creates a plain object from a TaskStatus message. Also converts values to other types if specified.
                     * @param message TaskStatus
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.batch.v1.TaskStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TaskStatus to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for TaskStatus
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace TaskStatus {

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        PENDING = 1,
                        ASSIGNED = 2,
                        RUNNING = 3,
                        FAILED = 4,
                        SUCCEEDED = 5,
                        UNEXECUTED = 6
                    }
                }

                /** Properties of a Runnable. */
                interface IRunnable {

                    /** Runnable container */
                    container?: (google.cloud.batch.v1.Runnable.IContainer|null);

                    /** Runnable script */
                    script?: (google.cloud.batch.v1.Runnable.IScript|null);

                    /** Runnable barrier */
                    barrier?: (google.cloud.batch.v1.Runnable.IBarrier|null);

                    /** Runnable ignoreExitStatus */
                    ignoreExitStatus?: (boolean|null);

                    /** Runnable background */
                    background?: (boolean|null);

                    /** Runnable alwaysRun */
                    alwaysRun?: (boolean|null);

                    /** Runnable environment */
                    environment?: (google.cloud.batch.v1.IEnvironment|null);

                    /** Runnable timeout */
                    timeout?: (google.protobuf.IDuration|null);

                    /** Runnable labels */
                    labels?: ({ [k: string]: string }|null);
                }

                /** Represents a Runnable. */
                class Runnable implements IRunnable {

                    /**
                     * Constructs a new Runnable.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.batch.v1.IRunnable);

                    /** Runnable container. */
                    public container?: (google.cloud.batch.v1.Runnable.IContainer|null);

                    /** Runnable script. */
                    public script?: (google.cloud.batch.v1.Runnable.IScript|null);

                    /** Runnable barrier. */
                    public barrier?: (google.cloud.batch.v1.Runnable.IBarrier|null);

                    /** Runnable ignoreExitStatus. */
                    public ignoreExitStatus: boolean;

                    /** Runnable background. */
                    public background: boolean;

                    /** Runnable alwaysRun. */
                    public alwaysRun: boolean;

                    /** Runnable environment. */
                    public environment?: (google.cloud.batch.v1.IEnvironment|null);

                    /** Runnable timeout. */
                    public timeout?: (google.protobuf.IDuration|null);

                    /** Runnable labels. */
                    public labels: { [k: string]: string };

                    /** Runnable executable. */
                    public executable?: ("container"|"script"|"barrier");

                    /**
                     * Creates a new Runnable instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Runnable instance
                     */
                    public static create(properties?: google.cloud.batch.v1.IRunnable): google.cloud.batch.v1.Runnable;

                    /**
                     * Encodes the specified Runnable message. Does not implicitly {@link google.cloud.batch.v1.Runnable.verify|verify} messages.
                     * @param message Runnable message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.batch.v1.IRunnable, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Runnable message, length delimited. Does not implicitly {@link google.cloud.batch.v1.Runnable.verify|verify} messages.
                     * @param message Runnable message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.batch.v1.IRunnable, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Runnable message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Runnable
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.batch.v1.Runnable;

                    /**
                     * Decodes a Runnable message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Runnable
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.batch.v1.Runnable;

                    /**
                     * Verifies a Runnable message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Runnable message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Runnable
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.batch.v1.Runnable;

                    /**
                     * Creates a plain object from a Runnable message. Also converts values to other types if specified.
                     * @param message Runnable
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.batch.v1.Runnable, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Runnable to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Runnable
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace Runnable {

                    /** Properties of a Container. */
                    interface IContainer {

                        /** Container imageUri */
                        imageUri?: (string|null);

                        /** Container commands */
                        commands?: (string[]|null);

                        /** Container entrypoint */
                        entrypoint?: (string|null);

                        /** Container volumes */
                        volumes?: (string[]|null);

                        /** Container options */
                        options?: (string|null);

                        /** Container blockExternalNetwork */
                        blockExternalNetwork?: (boolean|null);

                        /** Container username */
                        username?: (string|null);

                        /** Container password */
                        password?: (string|null);
                    }

                    /** Represents a Container. */
                    class Container implements IContainer {

                        /**
                         * Constructs a new Container.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.batch.v1.Runnable.IContainer);

                        /** Container imageUri. */
                        public imageUri: string;

                        /** Container commands. */
                        public commands: string[];

                        /** Container entrypoint. */
                        public entrypoint: string;

                        /** Container volumes. */
                        public volumes: string[];

                        /** Container options. */
                        public options: string;

                        /** Container blockExternalNetwork. */
                        public blockExternalNetwork: boolean;

                        /** Container username. */
                        public username: string;

                        /** Container password. */
                        public password: string;

                        /**
                         * Creates a new Container instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Container instance
                         */
                        public static create(properties?: google.cloud.batch.v1.Runnable.IContainer): google.cloud.batch.v1.Runnable.Container;

                        /**
                         * Encodes the specified Container message. Does not implicitly {@link google.cloud.batch.v1.Runnable.Container.verify|verify} messages.
                         * @param message Container message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.batch.v1.Runnable.IContainer, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Container message, length delimited. Does not implicitly {@link google.cloud.batch.v1.Runnable.Container.verify|verify} messages.
                         * @param message Container message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.batch.v1.Runnable.IContainer, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Container message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Container
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.batch.v1.Runnable.Container;

                        /**
                         * Decodes a Container message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Container
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.batch.v1.Runnable.Container;

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
                        public static fromObject(object: { [k: string]: any }): google.cloud.batch.v1.Runnable.Container;

                        /**
                         * Creates a plain object from a Container message. Also converts values to other types if specified.
                         * @param message Container
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.batch.v1.Runnable.Container, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

                    /** Properties of a Script. */
                    interface IScript {

                        /** Script path */
                        path?: (string|null);

                        /** Script text */
                        text?: (string|null);
                    }

                    /** Represents a Script. */
                    class Script implements IScript {

                        /**
                         * Constructs a new Script.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.batch.v1.Runnable.IScript);

                        /** Script path. */
                        public path?: (string|null);

                        /** Script text. */
                        public text?: (string|null);

                        /** Script command. */
                        public command?: ("path"|"text");

                        /**
                         * Creates a new Script instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Script instance
                         */
                        public static create(properties?: google.cloud.batch.v1.Runnable.IScript): google.cloud.batch.v1.Runnable.Script;

                        /**
                         * Encodes the specified Script message. Does not implicitly {@link google.cloud.batch.v1.Runnable.Script.verify|verify} messages.
                         * @param message Script message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.batch.v1.Runnable.IScript, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Script message, length delimited. Does not implicitly {@link google.cloud.batch.v1.Runnable.Script.verify|verify} messages.
                         * @param message Script message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.batch.v1.Runnable.IScript, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Script message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Script
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.batch.v1.Runnable.Script;

                        /**
                         * Decodes a Script message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Script
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.batch.v1.Runnable.Script;

                        /**
                         * Verifies a Script message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Script message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Script
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.batch.v1.Runnable.Script;

                        /**
                         * Creates a plain object from a Script message. Also converts values to other types if specified.
                         * @param message Script
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.batch.v1.Runnable.Script, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Script to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for Script
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a Barrier. */
                    interface IBarrier {

                        /** Barrier name */
                        name?: (string|null);
                    }

                    /** Represents a Barrier. */
                    class Barrier implements IBarrier {

                        /**
                         * Constructs a new Barrier.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.batch.v1.Runnable.IBarrier);

                        /** Barrier name. */
                        public name: string;

                        /**
                         * Creates a new Barrier instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Barrier instance
                         */
                        public static create(properties?: google.cloud.batch.v1.Runnable.IBarrier): google.cloud.batch.v1.Runnable.Barrier;

                        /**
                         * Encodes the specified Barrier message. Does not implicitly {@link google.cloud.batch.v1.Runnable.Barrier.verify|verify} messages.
                         * @param message Barrier message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.batch.v1.Runnable.IBarrier, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Barrier message, length delimited. Does not implicitly {@link google.cloud.batch.v1.Runnable.Barrier.verify|verify} messages.
                         * @param message Barrier message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.batch.v1.Runnable.IBarrier, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Barrier message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Barrier
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.batch.v1.Runnable.Barrier;

                        /**
                         * Decodes a Barrier message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Barrier
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.batch.v1.Runnable.Barrier;

                        /**
                         * Verifies a Barrier message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Barrier message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Barrier
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.batch.v1.Runnable.Barrier;

                        /**
                         * Creates a plain object from a Barrier message. Also converts values to other types if specified.
                         * @param message Barrier
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.batch.v1.Runnable.Barrier, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Barrier to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for Barrier
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }
                }

                /** Properties of a TaskSpec. */
                interface ITaskSpec {

                    /** TaskSpec runnables */
                    runnables?: (google.cloud.batch.v1.IRunnable[]|null);

                    /** TaskSpec computeResource */
                    computeResource?: (google.cloud.batch.v1.IComputeResource|null);

                    /** TaskSpec maxRunDuration */
                    maxRunDuration?: (google.protobuf.IDuration|null);

                    /** TaskSpec maxRetryCount */
                    maxRetryCount?: (number|null);

                    /** TaskSpec lifecyclePolicies */
                    lifecyclePolicies?: (google.cloud.batch.v1.ILifecyclePolicy[]|null);

                    /** TaskSpec environments */
                    environments?: ({ [k: string]: string }|null);

                    /** TaskSpec volumes */
                    volumes?: (google.cloud.batch.v1.IVolume[]|null);

                    /** TaskSpec environment */
                    environment?: (google.cloud.batch.v1.IEnvironment|null);
                }

                /** Represents a TaskSpec. */
                class TaskSpec implements ITaskSpec {

                    /**
                     * Constructs a new TaskSpec.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.batch.v1.ITaskSpec);

                    /** TaskSpec runnables. */
                    public runnables: google.cloud.batch.v1.IRunnable[];

                    /** TaskSpec computeResource. */
                    public computeResource?: (google.cloud.batch.v1.IComputeResource|null);

                    /** TaskSpec maxRunDuration. */
                    public maxRunDuration?: (google.protobuf.IDuration|null);

                    /** TaskSpec maxRetryCount. */
                    public maxRetryCount: number;

                    /** TaskSpec lifecyclePolicies. */
                    public lifecyclePolicies: google.cloud.batch.v1.ILifecyclePolicy[];

                    /** TaskSpec environments. */
                    public environments: { [k: string]: string };

                    /** TaskSpec volumes. */
                    public volumes: google.cloud.batch.v1.IVolume[];

                    /** TaskSpec environment. */
                    public environment?: (google.cloud.batch.v1.IEnvironment|null);

                    /**
                     * Creates a new TaskSpec instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TaskSpec instance
                     */
                    public static create(properties?: google.cloud.batch.v1.ITaskSpec): google.cloud.batch.v1.TaskSpec;

                    /**
                     * Encodes the specified TaskSpec message. Does not implicitly {@link google.cloud.batch.v1.TaskSpec.verify|verify} messages.
                     * @param message TaskSpec message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.batch.v1.ITaskSpec, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TaskSpec message, length delimited. Does not implicitly {@link google.cloud.batch.v1.TaskSpec.verify|verify} messages.
                     * @param message TaskSpec message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.batch.v1.ITaskSpec, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TaskSpec message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TaskSpec
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.batch.v1.TaskSpec;

                    /**
                     * Decodes a TaskSpec message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TaskSpec
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.batch.v1.TaskSpec;

                    /**
                     * Verifies a TaskSpec message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TaskSpec message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TaskSpec
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.batch.v1.TaskSpec;

                    /**
                     * Creates a plain object from a TaskSpec message. Also converts values to other types if specified.
                     * @param message TaskSpec
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.batch.v1.TaskSpec, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TaskSpec to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for TaskSpec
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a LifecyclePolicy. */
                interface ILifecyclePolicy {

                    /** LifecyclePolicy action */
                    action?: (google.cloud.batch.v1.LifecyclePolicy.Action|keyof typeof google.cloud.batch.v1.LifecyclePolicy.Action|null);

                    /** LifecyclePolicy actionCondition */
                    actionCondition?: (google.cloud.batch.v1.LifecyclePolicy.IActionCondition|null);
                }

                /** Represents a LifecyclePolicy. */
                class LifecyclePolicy implements ILifecyclePolicy {

                    /**
                     * Constructs a new LifecyclePolicy.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.batch.v1.ILifecyclePolicy);

                    /** LifecyclePolicy action. */
                    public action: (google.cloud.batch.v1.LifecyclePolicy.Action|keyof typeof google.cloud.batch.v1.LifecyclePolicy.Action);

                    /** LifecyclePolicy actionCondition. */
                    public actionCondition?: (google.cloud.batch.v1.LifecyclePolicy.IActionCondition|null);

                    /**
                     * Creates a new LifecyclePolicy instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns LifecyclePolicy instance
                     */
                    public static create(properties?: google.cloud.batch.v1.ILifecyclePolicy): google.cloud.batch.v1.LifecyclePolicy;

                    /**
                     * Encodes the specified LifecyclePolicy message. Does not implicitly {@link google.cloud.batch.v1.LifecyclePolicy.verify|verify} messages.
                     * @param message LifecyclePolicy message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.batch.v1.ILifecyclePolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified LifecyclePolicy message, length delimited. Does not implicitly {@link google.cloud.batch.v1.LifecyclePolicy.verify|verify} messages.
                     * @param message LifecyclePolicy message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.batch.v1.ILifecyclePolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a LifecyclePolicy message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns LifecyclePolicy
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.batch.v1.LifecyclePolicy;

                    /**
                     * Decodes a LifecyclePolicy message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns LifecyclePolicy
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.batch.v1.LifecyclePolicy;

                    /**
                     * Verifies a LifecyclePolicy message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a LifecyclePolicy message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns LifecyclePolicy
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.batch.v1.LifecyclePolicy;

                    /**
                     * Creates a plain object from a LifecyclePolicy message. Also converts values to other types if specified.
                     * @param message LifecyclePolicy
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.batch.v1.LifecyclePolicy, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this LifecyclePolicy to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for LifecyclePolicy
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace LifecyclePolicy {

                    /** Properties of an ActionCondition. */
                    interface IActionCondition {

                        /** ActionCondition exitCodes */
                        exitCodes?: (number[]|null);
                    }

                    /** Represents an ActionCondition. */
                    class ActionCondition implements IActionCondition {

                        /**
                         * Constructs a new ActionCondition.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.batch.v1.LifecyclePolicy.IActionCondition);

                        /** ActionCondition exitCodes. */
                        public exitCodes: number[];

                        /**
                         * Creates a new ActionCondition instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ActionCondition instance
                         */
                        public static create(properties?: google.cloud.batch.v1.LifecyclePolicy.IActionCondition): google.cloud.batch.v1.LifecyclePolicy.ActionCondition;

                        /**
                         * Encodes the specified ActionCondition message. Does not implicitly {@link google.cloud.batch.v1.LifecyclePolicy.ActionCondition.verify|verify} messages.
                         * @param message ActionCondition message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.batch.v1.LifecyclePolicy.IActionCondition, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ActionCondition message, length delimited. Does not implicitly {@link google.cloud.batch.v1.LifecyclePolicy.ActionCondition.verify|verify} messages.
                         * @param message ActionCondition message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.batch.v1.LifecyclePolicy.IActionCondition, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an ActionCondition message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ActionCondition
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.batch.v1.LifecyclePolicy.ActionCondition;

                        /**
                         * Decodes an ActionCondition message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ActionCondition
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.batch.v1.LifecyclePolicy.ActionCondition;

                        /**
                         * Verifies an ActionCondition message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an ActionCondition message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ActionCondition
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.batch.v1.LifecyclePolicy.ActionCondition;

                        /**
                         * Creates a plain object from an ActionCondition message. Also converts values to other types if specified.
                         * @param message ActionCondition
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.batch.v1.LifecyclePolicy.ActionCondition, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ActionCondition to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ActionCondition
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Action enum. */
                    enum Action {
                        ACTION_UNSPECIFIED = 0,
                        RETRY_TASK = 1,
                        FAIL_TASK = 2
                    }
                }

                /** Properties of a Task. */
                interface ITask {

                    /** Task name */
                    name?: (string|null);

                    /** Task status */
                    status?: (google.cloud.batch.v1.ITaskStatus|null);
                }

                /** Represents a Task. */
                class Task implements ITask {

                    /**
                     * Constructs a new Task.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.batch.v1.ITask);

                    /** Task name. */
                    public name: string;

                    /** Task status. */
                    public status?: (google.cloud.batch.v1.ITaskStatus|null);

                    /**
                     * Creates a new Task instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Task instance
                     */
                    public static create(properties?: google.cloud.batch.v1.ITask): google.cloud.batch.v1.Task;

                    /**
                     * Encodes the specified Task message. Does not implicitly {@link google.cloud.batch.v1.Task.verify|verify} messages.
                     * @param message Task message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.batch.v1.ITask, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Task message, length delimited. Does not implicitly {@link google.cloud.batch.v1.Task.verify|verify} messages.
                     * @param message Task message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.batch.v1.ITask, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Task message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Task
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.batch.v1.Task;

                    /**
                     * Decodes a Task message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Task
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.batch.v1.Task;

                    /**
                     * Verifies a Task message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Task message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Task
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.batch.v1.Task;

                    /**
                     * Creates a plain object from a Task message. Also converts values to other types if specified.
                     * @param message Task
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.batch.v1.Task, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Task to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Task
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an Environment. */
                interface IEnvironment {

                    /** Environment variables */
                    variables?: ({ [k: string]: string }|null);

                    /** Environment secretVariables */
                    secretVariables?: ({ [k: string]: string }|null);

                    /** Environment encryptedVariables */
                    encryptedVariables?: (google.cloud.batch.v1.Environment.IKMSEnvMap|null);
                }

                /** Represents an Environment. */
                class Environment implements IEnvironment {

                    /**
                     * Constructs a new Environment.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.batch.v1.IEnvironment);

                    /** Environment variables. */
                    public variables: { [k: string]: string };

                    /** Environment secretVariables. */
                    public secretVariables: { [k: string]: string };

                    /** Environment encryptedVariables. */
                    public encryptedVariables?: (google.cloud.batch.v1.Environment.IKMSEnvMap|null);

                    /**
                     * Creates a new Environment instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Environment instance
                     */
                    public static create(properties?: google.cloud.batch.v1.IEnvironment): google.cloud.batch.v1.Environment;

                    /**
                     * Encodes the specified Environment message. Does not implicitly {@link google.cloud.batch.v1.Environment.verify|verify} messages.
                     * @param message Environment message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.batch.v1.IEnvironment, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Environment message, length delimited. Does not implicitly {@link google.cloud.batch.v1.Environment.verify|verify} messages.
                     * @param message Environment message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.batch.v1.IEnvironment, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an Environment message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Environment
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.batch.v1.Environment;

                    /**
                     * Decodes an Environment message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Environment
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.batch.v1.Environment;

                    /**
                     * Verifies an Environment message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an Environment message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Environment
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.batch.v1.Environment;

                    /**
                     * Creates a plain object from an Environment message. Also converts values to other types if specified.
                     * @param message Environment
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.batch.v1.Environment, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Environment to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Environment
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace Environment {

                    /** Properties of a KMSEnvMap. */
                    interface IKMSEnvMap {

                        /** KMSEnvMap keyName */
                        keyName?: (string|null);

                        /** KMSEnvMap cipherText */
                        cipherText?: (string|null);
                    }

                    /** Represents a KMSEnvMap. */
                    class KMSEnvMap implements IKMSEnvMap {

                        /**
                         * Constructs a new KMSEnvMap.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.batch.v1.Environment.IKMSEnvMap);

                        /** KMSEnvMap keyName. */
                        public keyName: string;

                        /** KMSEnvMap cipherText. */
                        public cipherText: string;

                        /**
                         * Creates a new KMSEnvMap instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns KMSEnvMap instance
                         */
                        public static create(properties?: google.cloud.batch.v1.Environment.IKMSEnvMap): google.cloud.batch.v1.Environment.KMSEnvMap;

                        /**
                         * Encodes the specified KMSEnvMap message. Does not implicitly {@link google.cloud.batch.v1.Environment.KMSEnvMap.verify|verify} messages.
                         * @param message KMSEnvMap message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.batch.v1.Environment.IKMSEnvMap, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified KMSEnvMap message, length delimited. Does not implicitly {@link google.cloud.batch.v1.Environment.KMSEnvMap.verify|verify} messages.
                         * @param message KMSEnvMap message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.batch.v1.Environment.IKMSEnvMap, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a KMSEnvMap message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns KMSEnvMap
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.batch.v1.Environment.KMSEnvMap;

                        /**
                         * Decodes a KMSEnvMap message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns KMSEnvMap
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.batch.v1.Environment.KMSEnvMap;

                        /**
                         * Verifies a KMSEnvMap message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a KMSEnvMap message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns KMSEnvMap
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.batch.v1.Environment.KMSEnvMap;

                        /**
                         * Creates a plain object from a KMSEnvMap message. Also converts values to other types if specified.
                         * @param message KMSEnvMap
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.batch.v1.Environment.KMSEnvMap, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this KMSEnvMap to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for KMSEnvMap
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }
                }

                /** Properties of a Volume. */
                interface IVolume {

                    /** Volume nfs */
                    nfs?: (google.cloud.batch.v1.INFS|null);

                    /** Volume gcs */
                    gcs?: (google.cloud.batch.v1.IGCS|null);

                    /** Volume deviceName */
                    deviceName?: (string|null);

                    /** Volume mountPath */
                    mountPath?: (string|null);

                    /** Volume mountOptions */
                    mountOptions?: (string[]|null);
                }

                /** Represents a Volume. */
                class Volume implements IVolume {

                    /**
                     * Constructs a new Volume.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.batch.v1.IVolume);

                    /** Volume nfs. */
                    public nfs?: (google.cloud.batch.v1.INFS|null);

                    /** Volume gcs. */
                    public gcs?: (google.cloud.batch.v1.IGCS|null);

                    /** Volume deviceName. */
                    public deviceName?: (string|null);

                    /** Volume mountPath. */
                    public mountPath: string;

                    /** Volume mountOptions. */
                    public mountOptions: string[];

                    /** Volume source. */
                    public source?: ("nfs"|"gcs"|"deviceName");

                    /**
                     * Creates a new Volume instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Volume instance
                     */
                    public static create(properties?: google.cloud.batch.v1.IVolume): google.cloud.batch.v1.Volume;

                    /**
                     * Encodes the specified Volume message. Does not implicitly {@link google.cloud.batch.v1.Volume.verify|verify} messages.
                     * @param message Volume message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.batch.v1.IVolume, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Volume message, length delimited. Does not implicitly {@link google.cloud.batch.v1.Volume.verify|verify} messages.
                     * @param message Volume message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.batch.v1.IVolume, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Volume message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Volume
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.batch.v1.Volume;

                    /**
                     * Decodes a Volume message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Volume
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.batch.v1.Volume;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.batch.v1.Volume;

                    /**
                     * Creates a plain object from a Volume message. Also converts values to other types if specified.
                     * @param message Volume
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.batch.v1.Volume, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Volume to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Volume
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a NFS. */
                interface INFS {

                    /** NFS server */
                    server?: (string|null);

                    /** NFS remotePath */
                    remotePath?: (string|null);
                }

                /** Represents a NFS. */
                class NFS implements INFS {

                    /**
                     * Constructs a new NFS.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.batch.v1.INFS);

                    /** NFS server. */
                    public server: string;

                    /** NFS remotePath. */
                    public remotePath: string;

                    /**
                     * Creates a new NFS instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns NFS instance
                     */
                    public static create(properties?: google.cloud.batch.v1.INFS): google.cloud.batch.v1.NFS;

                    /**
                     * Encodes the specified NFS message. Does not implicitly {@link google.cloud.batch.v1.NFS.verify|verify} messages.
                     * @param message NFS message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.batch.v1.INFS, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified NFS message, length delimited. Does not implicitly {@link google.cloud.batch.v1.NFS.verify|verify} messages.
                     * @param message NFS message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.batch.v1.INFS, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a NFS message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns NFS
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.batch.v1.NFS;

                    /**
                     * Decodes a NFS message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns NFS
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.batch.v1.NFS;

                    /**
                     * Verifies a NFS message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a NFS message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns NFS
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.batch.v1.NFS;

                    /**
                     * Creates a plain object from a NFS message. Also converts values to other types if specified.
                     * @param message NFS
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.batch.v1.NFS, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this NFS to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for NFS
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GCS. */
                interface IGCS {

                    /** GCS remotePath */
                    remotePath?: (string|null);
                }

                /** Represents a GCS. */
                class GCS implements IGCS {

                    /**
                     * Constructs a new GCS.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.batch.v1.IGCS);

                    /** GCS remotePath. */
                    public remotePath: string;

                    /**
                     * Creates a new GCS instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GCS instance
                     */
                    public static create(properties?: google.cloud.batch.v1.IGCS): google.cloud.batch.v1.GCS;

                    /**
                     * Encodes the specified GCS message. Does not implicitly {@link google.cloud.batch.v1.GCS.verify|verify} messages.
                     * @param message GCS message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.batch.v1.IGCS, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GCS message, length delimited. Does not implicitly {@link google.cloud.batch.v1.GCS.verify|verify} messages.
                     * @param message GCS message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.batch.v1.IGCS, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GCS message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GCS
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.batch.v1.GCS;

                    /**
                     * Decodes a GCS message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GCS
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.batch.v1.GCS;

                    /**
                     * Verifies a GCS message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GCS message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GCS
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.batch.v1.GCS;

                    /**
                     * Creates a plain object from a GCS message. Also converts values to other types if specified.
                     * @param message GCS
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.batch.v1.GCS, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GCS to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GCS
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }
            }

            /** Namespace v1alpha. */
            namespace v1alpha {

                /** Represents a BatchService */
                class BatchService extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new BatchService service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new BatchService service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): BatchService;

                    /**
                     * Calls CreateJob.
                     * @param request CreateJobRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Job
                     */
                    public createJob(request: google.cloud.batch.v1alpha.ICreateJobRequest, callback: google.cloud.batch.v1alpha.BatchService.CreateJobCallback): void;

                    /**
                     * Calls CreateJob.
                     * @param request CreateJobRequest message or plain object
                     * @returns Promise
                     */
                    public createJob(request: google.cloud.batch.v1alpha.ICreateJobRequest): Promise<google.cloud.batch.v1alpha.Job>;

                    /**
                     * Calls GetJob.
                     * @param request GetJobRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Job
                     */
                    public getJob(request: google.cloud.batch.v1alpha.IGetJobRequest, callback: google.cloud.batch.v1alpha.BatchService.GetJobCallback): void;

                    /**
                     * Calls GetJob.
                     * @param request GetJobRequest message or plain object
                     * @returns Promise
                     */
                    public getJob(request: google.cloud.batch.v1alpha.IGetJobRequest): Promise<google.cloud.batch.v1alpha.Job>;

                    /**
                     * Calls DeleteJob.
                     * @param request DeleteJobRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deleteJob(request: google.cloud.batch.v1alpha.IDeleteJobRequest, callback: google.cloud.batch.v1alpha.BatchService.DeleteJobCallback): void;

                    /**
                     * Calls DeleteJob.
                     * @param request DeleteJobRequest message or plain object
                     * @returns Promise
                     */
                    public deleteJob(request: google.cloud.batch.v1alpha.IDeleteJobRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ListJobs.
                     * @param request ListJobsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListJobsResponse
                     */
                    public listJobs(request: google.cloud.batch.v1alpha.IListJobsRequest, callback: google.cloud.batch.v1alpha.BatchService.ListJobsCallback): void;

                    /**
                     * Calls ListJobs.
                     * @param request ListJobsRequest message or plain object
                     * @returns Promise
                     */
                    public listJobs(request: google.cloud.batch.v1alpha.IListJobsRequest): Promise<google.cloud.batch.v1alpha.ListJobsResponse>;

                    /**
                     * Calls GetTask.
                     * @param request GetTaskRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Task
                     */
                    public getTask(request: google.cloud.batch.v1alpha.IGetTaskRequest, callback: google.cloud.batch.v1alpha.BatchService.GetTaskCallback): void;

                    /**
                     * Calls GetTask.
                     * @param request GetTaskRequest message or plain object
                     * @returns Promise
                     */
                    public getTask(request: google.cloud.batch.v1alpha.IGetTaskRequest): Promise<google.cloud.batch.v1alpha.Task>;

                    /**
                     * Calls ListTasks.
                     * @param request ListTasksRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListTasksResponse
                     */
                    public listTasks(request: google.cloud.batch.v1alpha.IListTasksRequest, callback: google.cloud.batch.v1alpha.BatchService.ListTasksCallback): void;

                    /**
                     * Calls ListTasks.
                     * @param request ListTasksRequest message or plain object
                     * @returns Promise
                     */
                    public listTasks(request: google.cloud.batch.v1alpha.IListTasksRequest): Promise<google.cloud.batch.v1alpha.ListTasksResponse>;
                }

                namespace BatchService {

                    /**
                     * Callback as used by {@link google.cloud.batch.v1alpha.BatchService|createJob}.
                     * @param error Error, if any
                     * @param [response] Job
                     */
                    type CreateJobCallback = (error: (Error|null), response?: google.cloud.batch.v1alpha.Job) => void;

                    /**
                     * Callback as used by {@link google.cloud.batch.v1alpha.BatchService|getJob}.
                     * @param error Error, if any
                     * @param [response] Job
                     */
                    type GetJobCallback = (error: (Error|null), response?: google.cloud.batch.v1alpha.Job) => void;

                    /**
                     * Callback as used by {@link google.cloud.batch.v1alpha.BatchService|deleteJob}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeleteJobCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.batch.v1alpha.BatchService|listJobs}.
                     * @param error Error, if any
                     * @param [response] ListJobsResponse
                     */
                    type ListJobsCallback = (error: (Error|null), response?: google.cloud.batch.v1alpha.ListJobsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.batch.v1alpha.BatchService|getTask}.
                     * @param error Error, if any
                     * @param [response] Task
                     */
                    type GetTaskCallback = (error: (Error|null), response?: google.cloud.batch.v1alpha.Task) => void;

                    /**
                     * Callback as used by {@link google.cloud.batch.v1alpha.BatchService|listTasks}.
                     * @param error Error, if any
                     * @param [response] ListTasksResponse
                     */
                    type ListTasksCallback = (error: (Error|null), response?: google.cloud.batch.v1alpha.ListTasksResponse) => void;
                }

                /** Properties of a CreateJobRequest. */
                interface ICreateJobRequest {

                    /** CreateJobRequest parent */
                    parent?: (string|null);

                    /** CreateJobRequest jobId */
                    jobId?: (string|null);

                    /** CreateJobRequest job */
                    job?: (google.cloud.batch.v1alpha.IJob|null);

                    /** CreateJobRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents a CreateJobRequest. */
                class CreateJobRequest implements ICreateJobRequest {

                    /**
                     * Constructs a new CreateJobRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.batch.v1alpha.ICreateJobRequest);

                    /** CreateJobRequest parent. */
                    public parent: string;

                    /** CreateJobRequest jobId. */
                    public jobId: string;

                    /** CreateJobRequest job. */
                    public job?: (google.cloud.batch.v1alpha.IJob|null);

                    /** CreateJobRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new CreateJobRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateJobRequest instance
                     */
                    public static create(properties?: google.cloud.batch.v1alpha.ICreateJobRequest): google.cloud.batch.v1alpha.CreateJobRequest;

                    /**
                     * Encodes the specified CreateJobRequest message. Does not implicitly {@link google.cloud.batch.v1alpha.CreateJobRequest.verify|verify} messages.
                     * @param message CreateJobRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.batch.v1alpha.ICreateJobRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateJobRequest message, length delimited. Does not implicitly {@link google.cloud.batch.v1alpha.CreateJobRequest.verify|verify} messages.
                     * @param message CreateJobRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.batch.v1alpha.ICreateJobRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateJobRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateJobRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.batch.v1alpha.CreateJobRequest;

                    /**
                     * Decodes a CreateJobRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateJobRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.batch.v1alpha.CreateJobRequest;

                    /**
                     * Verifies a CreateJobRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateJobRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateJobRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.batch.v1alpha.CreateJobRequest;

                    /**
                     * Creates a plain object from a CreateJobRequest message. Also converts values to other types if specified.
                     * @param message CreateJobRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.batch.v1alpha.CreateJobRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateJobRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateJobRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetJobRequest. */
                interface IGetJobRequest {

                    /** GetJobRequest name */
                    name?: (string|null);
                }

                /** Represents a GetJobRequest. */
                class GetJobRequest implements IGetJobRequest {

                    /**
                     * Constructs a new GetJobRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.batch.v1alpha.IGetJobRequest);

                    /** GetJobRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetJobRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetJobRequest instance
                     */
                    public static create(properties?: google.cloud.batch.v1alpha.IGetJobRequest): google.cloud.batch.v1alpha.GetJobRequest;

                    /**
                     * Encodes the specified GetJobRequest message. Does not implicitly {@link google.cloud.batch.v1alpha.GetJobRequest.verify|verify} messages.
                     * @param message GetJobRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.batch.v1alpha.IGetJobRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetJobRequest message, length delimited. Does not implicitly {@link google.cloud.batch.v1alpha.GetJobRequest.verify|verify} messages.
                     * @param message GetJobRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.batch.v1alpha.IGetJobRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetJobRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetJobRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.batch.v1alpha.GetJobRequest;

                    /**
                     * Decodes a GetJobRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetJobRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.batch.v1alpha.GetJobRequest;

                    /**
                     * Verifies a GetJobRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetJobRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetJobRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.batch.v1alpha.GetJobRequest;

                    /**
                     * Creates a plain object from a GetJobRequest message. Also converts values to other types if specified.
                     * @param message GetJobRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.batch.v1alpha.GetJobRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetJobRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetJobRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeleteJobRequest. */
                interface IDeleteJobRequest {

                    /** DeleteJobRequest name */
                    name?: (string|null);

                    /** DeleteJobRequest reason */
                    reason?: (string|null);

                    /** DeleteJobRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents a DeleteJobRequest. */
                class DeleteJobRequest implements IDeleteJobRequest {

                    /**
                     * Constructs a new DeleteJobRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.batch.v1alpha.IDeleteJobRequest);

                    /** DeleteJobRequest name. */
                    public name: string;

                    /** DeleteJobRequest reason. */
                    public reason: string;

                    /** DeleteJobRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new DeleteJobRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteJobRequest instance
                     */
                    public static create(properties?: google.cloud.batch.v1alpha.IDeleteJobRequest): google.cloud.batch.v1alpha.DeleteJobRequest;

                    /**
                     * Encodes the specified DeleteJobRequest message. Does not implicitly {@link google.cloud.batch.v1alpha.DeleteJobRequest.verify|verify} messages.
                     * @param message DeleteJobRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.batch.v1alpha.IDeleteJobRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteJobRequest message, length delimited. Does not implicitly {@link google.cloud.batch.v1alpha.DeleteJobRequest.verify|verify} messages.
                     * @param message DeleteJobRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.batch.v1alpha.IDeleteJobRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteJobRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteJobRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.batch.v1alpha.DeleteJobRequest;

                    /**
                     * Decodes a DeleteJobRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteJobRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.batch.v1alpha.DeleteJobRequest;

                    /**
                     * Verifies a DeleteJobRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteJobRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteJobRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.batch.v1alpha.DeleteJobRequest;

                    /**
                     * Creates a plain object from a DeleteJobRequest message. Also converts values to other types if specified.
                     * @param message DeleteJobRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.batch.v1alpha.DeleteJobRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteJobRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeleteJobRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListJobsRequest. */
                interface IListJobsRequest {

                    /** ListJobsRequest parent */
                    parent?: (string|null);

                    /** ListJobsRequest filter */
                    filter?: (string|null);

                    /** ListJobsRequest orderBy */
                    orderBy?: (string|null);

                    /** ListJobsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListJobsRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListJobsRequest. */
                class ListJobsRequest implements IListJobsRequest {

                    /**
                     * Constructs a new ListJobsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.batch.v1alpha.IListJobsRequest);

                    /** ListJobsRequest parent. */
                    public parent: string;

                    /** ListJobsRequest filter. */
                    public filter: string;

                    /** ListJobsRequest orderBy. */
                    public orderBy: string;

                    /** ListJobsRequest pageSize. */
                    public pageSize: number;

                    /** ListJobsRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListJobsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListJobsRequest instance
                     */
                    public static create(properties?: google.cloud.batch.v1alpha.IListJobsRequest): google.cloud.batch.v1alpha.ListJobsRequest;

                    /**
                     * Encodes the specified ListJobsRequest message. Does not implicitly {@link google.cloud.batch.v1alpha.ListJobsRequest.verify|verify} messages.
                     * @param message ListJobsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.batch.v1alpha.IListJobsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListJobsRequest message, length delimited. Does not implicitly {@link google.cloud.batch.v1alpha.ListJobsRequest.verify|verify} messages.
                     * @param message ListJobsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.batch.v1alpha.IListJobsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListJobsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListJobsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.batch.v1alpha.ListJobsRequest;

                    /**
                     * Decodes a ListJobsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListJobsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.batch.v1alpha.ListJobsRequest;

                    /**
                     * Verifies a ListJobsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListJobsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListJobsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.batch.v1alpha.ListJobsRequest;

                    /**
                     * Creates a plain object from a ListJobsRequest message. Also converts values to other types if specified.
                     * @param message ListJobsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.batch.v1alpha.ListJobsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListJobsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListJobsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListJobsResponse. */
                interface IListJobsResponse {

                    /** ListJobsResponse jobs */
                    jobs?: (google.cloud.batch.v1alpha.IJob[]|null);

                    /** ListJobsResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListJobsResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a ListJobsResponse. */
                class ListJobsResponse implements IListJobsResponse {

                    /**
                     * Constructs a new ListJobsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.batch.v1alpha.IListJobsResponse);

                    /** ListJobsResponse jobs. */
                    public jobs: google.cloud.batch.v1alpha.IJob[];

                    /** ListJobsResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListJobsResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListJobsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListJobsResponse instance
                     */
                    public static create(properties?: google.cloud.batch.v1alpha.IListJobsResponse): google.cloud.batch.v1alpha.ListJobsResponse;

                    /**
                     * Encodes the specified ListJobsResponse message. Does not implicitly {@link google.cloud.batch.v1alpha.ListJobsResponse.verify|verify} messages.
                     * @param message ListJobsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.batch.v1alpha.IListJobsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListJobsResponse message, length delimited. Does not implicitly {@link google.cloud.batch.v1alpha.ListJobsResponse.verify|verify} messages.
                     * @param message ListJobsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.batch.v1alpha.IListJobsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListJobsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListJobsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.batch.v1alpha.ListJobsResponse;

                    /**
                     * Decodes a ListJobsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListJobsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.batch.v1alpha.ListJobsResponse;

                    /**
                     * Verifies a ListJobsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListJobsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListJobsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.batch.v1alpha.ListJobsResponse;

                    /**
                     * Creates a plain object from a ListJobsResponse message. Also converts values to other types if specified.
                     * @param message ListJobsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.batch.v1alpha.ListJobsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListJobsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListJobsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListTasksRequest. */
                interface IListTasksRequest {

                    /** ListTasksRequest parent */
                    parent?: (string|null);

                    /** ListTasksRequest filter */
                    filter?: (string|null);

                    /** ListTasksRequest orderBy */
                    orderBy?: (string|null);

                    /** ListTasksRequest pageSize */
                    pageSize?: (number|null);

                    /** ListTasksRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListTasksRequest. */
                class ListTasksRequest implements IListTasksRequest {

                    /**
                     * Constructs a new ListTasksRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.batch.v1alpha.IListTasksRequest);

                    /** ListTasksRequest parent. */
                    public parent: string;

                    /** ListTasksRequest filter. */
                    public filter: string;

                    /** ListTasksRequest orderBy. */
                    public orderBy: string;

                    /** ListTasksRequest pageSize. */
                    public pageSize: number;

                    /** ListTasksRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListTasksRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListTasksRequest instance
                     */
                    public static create(properties?: google.cloud.batch.v1alpha.IListTasksRequest): google.cloud.batch.v1alpha.ListTasksRequest;

                    /**
                     * Encodes the specified ListTasksRequest message. Does not implicitly {@link google.cloud.batch.v1alpha.ListTasksRequest.verify|verify} messages.
                     * @param message ListTasksRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.batch.v1alpha.IListTasksRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListTasksRequest message, length delimited. Does not implicitly {@link google.cloud.batch.v1alpha.ListTasksRequest.verify|verify} messages.
                     * @param message ListTasksRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.batch.v1alpha.IListTasksRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListTasksRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListTasksRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.batch.v1alpha.ListTasksRequest;

                    /**
                     * Decodes a ListTasksRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListTasksRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.batch.v1alpha.ListTasksRequest;

                    /**
                     * Verifies a ListTasksRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListTasksRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListTasksRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.batch.v1alpha.ListTasksRequest;

                    /**
                     * Creates a plain object from a ListTasksRequest message. Also converts values to other types if specified.
                     * @param message ListTasksRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.batch.v1alpha.ListTasksRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListTasksRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListTasksRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListTasksResponse. */
                interface IListTasksResponse {

                    /** ListTasksResponse tasks */
                    tasks?: (google.cloud.batch.v1alpha.ITask[]|null);

                    /** ListTasksResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListTasksResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a ListTasksResponse. */
                class ListTasksResponse implements IListTasksResponse {

                    /**
                     * Constructs a new ListTasksResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.batch.v1alpha.IListTasksResponse);

                    /** ListTasksResponse tasks. */
                    public tasks: google.cloud.batch.v1alpha.ITask[];

                    /** ListTasksResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListTasksResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListTasksResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListTasksResponse instance
                     */
                    public static create(properties?: google.cloud.batch.v1alpha.IListTasksResponse): google.cloud.batch.v1alpha.ListTasksResponse;

                    /**
                     * Encodes the specified ListTasksResponse message. Does not implicitly {@link google.cloud.batch.v1alpha.ListTasksResponse.verify|verify} messages.
                     * @param message ListTasksResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.batch.v1alpha.IListTasksResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListTasksResponse message, length delimited. Does not implicitly {@link google.cloud.batch.v1alpha.ListTasksResponse.verify|verify} messages.
                     * @param message ListTasksResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.batch.v1alpha.IListTasksResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListTasksResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListTasksResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.batch.v1alpha.ListTasksResponse;

                    /**
                     * Decodes a ListTasksResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListTasksResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.batch.v1alpha.ListTasksResponse;

                    /**
                     * Verifies a ListTasksResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListTasksResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListTasksResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.batch.v1alpha.ListTasksResponse;

                    /**
                     * Creates a plain object from a ListTasksResponse message. Also converts values to other types if specified.
                     * @param message ListTasksResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.batch.v1alpha.ListTasksResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListTasksResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListTasksResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetTaskRequest. */
                interface IGetTaskRequest {

                    /** GetTaskRequest name */
                    name?: (string|null);
                }

                /** Represents a GetTaskRequest. */
                class GetTaskRequest implements IGetTaskRequest {

                    /**
                     * Constructs a new GetTaskRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.batch.v1alpha.IGetTaskRequest);

                    /** GetTaskRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetTaskRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetTaskRequest instance
                     */
                    public static create(properties?: google.cloud.batch.v1alpha.IGetTaskRequest): google.cloud.batch.v1alpha.GetTaskRequest;

                    /**
                     * Encodes the specified GetTaskRequest message. Does not implicitly {@link google.cloud.batch.v1alpha.GetTaskRequest.verify|verify} messages.
                     * @param message GetTaskRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.batch.v1alpha.IGetTaskRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetTaskRequest message, length delimited. Does not implicitly {@link google.cloud.batch.v1alpha.GetTaskRequest.verify|verify} messages.
                     * @param message GetTaskRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.batch.v1alpha.IGetTaskRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetTaskRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetTaskRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.batch.v1alpha.GetTaskRequest;

                    /**
                     * Decodes a GetTaskRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetTaskRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.batch.v1alpha.GetTaskRequest;

                    /**
                     * Verifies a GetTaskRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetTaskRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetTaskRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.batch.v1alpha.GetTaskRequest;

                    /**
                     * Creates a plain object from a GetTaskRequest message. Also converts values to other types if specified.
                     * @param message GetTaskRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.batch.v1alpha.GetTaskRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetTaskRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetTaskRequest
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
                    constructor(properties?: google.cloud.batch.v1alpha.IOperationMetadata);

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
                    public static create(properties?: google.cloud.batch.v1alpha.IOperationMetadata): google.cloud.batch.v1alpha.OperationMetadata;

                    /**
                     * Encodes the specified OperationMetadata message. Does not implicitly {@link google.cloud.batch.v1alpha.OperationMetadata.verify|verify} messages.
                     * @param message OperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.batch.v1alpha.IOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified OperationMetadata message, length delimited. Does not implicitly {@link google.cloud.batch.v1alpha.OperationMetadata.verify|verify} messages.
                     * @param message OperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.batch.v1alpha.IOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an OperationMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns OperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.batch.v1alpha.OperationMetadata;

                    /**
                     * Decodes an OperationMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns OperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.batch.v1alpha.OperationMetadata;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.batch.v1alpha.OperationMetadata;

                    /**
                     * Creates a plain object from an OperationMetadata message. Also converts values to other types if specified.
                     * @param message OperationMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.batch.v1alpha.OperationMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

                /** Properties of a Job. */
                interface IJob {

                    /** Job name */
                    name?: (string|null);

                    /** Job uid */
                    uid?: (string|null);

                    /** Job priority */
                    priority?: (number|Long|string|null);

                    /** Job taskGroups */
                    taskGroups?: (google.cloud.batch.v1alpha.ITaskGroup[]|null);

                    /** Job schedulingPolicy */
                    schedulingPolicy?: (google.cloud.batch.v1alpha.Job.SchedulingPolicy|keyof typeof google.cloud.batch.v1alpha.Job.SchedulingPolicy|null);

                    /** Job dependencies */
                    dependencies?: (google.cloud.batch.v1alpha.IJobDependency[]|null);

                    /** Job allocationPolicy */
                    allocationPolicy?: (google.cloud.batch.v1alpha.IAllocationPolicy|null);

                    /** Job labels */
                    labels?: ({ [k: string]: string }|null);

                    /** Job status */
                    status?: (google.cloud.batch.v1alpha.IJobStatus|null);

                    /** Job notification */
                    notification?: (google.cloud.batch.v1alpha.IJobNotification|null);

                    /** Job createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** Job updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** Job logsPolicy */
                    logsPolicy?: (google.cloud.batch.v1alpha.ILogsPolicy|null);

                    /** Job notifications */
                    notifications?: (google.cloud.batch.v1alpha.IJobNotification[]|null);
                }

                /** Represents a Job. */
                class Job implements IJob {

                    /**
                     * Constructs a new Job.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.batch.v1alpha.IJob);

                    /** Job name. */
                    public name: string;

                    /** Job uid. */
                    public uid: string;

                    /** Job priority. */
                    public priority: (number|Long|string);

                    /** Job taskGroups. */
                    public taskGroups: google.cloud.batch.v1alpha.ITaskGroup[];

                    /** Job schedulingPolicy. */
                    public schedulingPolicy: (google.cloud.batch.v1alpha.Job.SchedulingPolicy|keyof typeof google.cloud.batch.v1alpha.Job.SchedulingPolicy);

                    /** Job dependencies. */
                    public dependencies: google.cloud.batch.v1alpha.IJobDependency[];

                    /** Job allocationPolicy. */
                    public allocationPolicy?: (google.cloud.batch.v1alpha.IAllocationPolicy|null);

                    /** Job labels. */
                    public labels: { [k: string]: string };

                    /** Job status. */
                    public status?: (google.cloud.batch.v1alpha.IJobStatus|null);

                    /** Job notification. */
                    public notification?: (google.cloud.batch.v1alpha.IJobNotification|null);

                    /** Job createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** Job updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** Job logsPolicy. */
                    public logsPolicy?: (google.cloud.batch.v1alpha.ILogsPolicy|null);

                    /** Job notifications. */
                    public notifications: google.cloud.batch.v1alpha.IJobNotification[];

                    /**
                     * Creates a new Job instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Job instance
                     */
                    public static create(properties?: google.cloud.batch.v1alpha.IJob): google.cloud.batch.v1alpha.Job;

                    /**
                     * Encodes the specified Job message. Does not implicitly {@link google.cloud.batch.v1alpha.Job.verify|verify} messages.
                     * @param message Job message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.batch.v1alpha.IJob, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Job message, length delimited. Does not implicitly {@link google.cloud.batch.v1alpha.Job.verify|verify} messages.
                     * @param message Job message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.batch.v1alpha.IJob, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Job message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Job
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.batch.v1alpha.Job;

                    /**
                     * Decodes a Job message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Job
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.batch.v1alpha.Job;

                    /**
                     * Verifies a Job message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Job message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Job
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.batch.v1alpha.Job;

                    /**
                     * Creates a plain object from a Job message. Also converts values to other types if specified.
                     * @param message Job
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.batch.v1alpha.Job, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Job to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Job
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace Job {

                    /** SchedulingPolicy enum. */
                    enum SchedulingPolicy {
                        SCHEDULING_POLICY_UNSPECIFIED = 0,
                        AS_SOON_AS_POSSIBLE = 1
                    }
                }

                /** Properties of a LogsPolicy. */
                interface ILogsPolicy {

                    /** LogsPolicy destination */
                    destination?: (google.cloud.batch.v1alpha.LogsPolicy.Destination|keyof typeof google.cloud.batch.v1alpha.LogsPolicy.Destination|null);

                    /** LogsPolicy logsPath */
                    logsPath?: (string|null);
                }

                /** Represents a LogsPolicy. */
                class LogsPolicy implements ILogsPolicy {

                    /**
                     * Constructs a new LogsPolicy.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.batch.v1alpha.ILogsPolicy);

                    /** LogsPolicy destination. */
                    public destination: (google.cloud.batch.v1alpha.LogsPolicy.Destination|keyof typeof google.cloud.batch.v1alpha.LogsPolicy.Destination);

                    /** LogsPolicy logsPath. */
                    public logsPath: string;

                    /**
                     * Creates a new LogsPolicy instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns LogsPolicy instance
                     */
                    public static create(properties?: google.cloud.batch.v1alpha.ILogsPolicy): google.cloud.batch.v1alpha.LogsPolicy;

                    /**
                     * Encodes the specified LogsPolicy message. Does not implicitly {@link google.cloud.batch.v1alpha.LogsPolicy.verify|verify} messages.
                     * @param message LogsPolicy message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.batch.v1alpha.ILogsPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified LogsPolicy message, length delimited. Does not implicitly {@link google.cloud.batch.v1alpha.LogsPolicy.verify|verify} messages.
                     * @param message LogsPolicy message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.batch.v1alpha.ILogsPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a LogsPolicy message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns LogsPolicy
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.batch.v1alpha.LogsPolicy;

                    /**
                     * Decodes a LogsPolicy message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns LogsPolicy
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.batch.v1alpha.LogsPolicy;

                    /**
                     * Verifies a LogsPolicy message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a LogsPolicy message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns LogsPolicy
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.batch.v1alpha.LogsPolicy;

                    /**
                     * Creates a plain object from a LogsPolicy message. Also converts values to other types if specified.
                     * @param message LogsPolicy
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.batch.v1alpha.LogsPolicy, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this LogsPolicy to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for LogsPolicy
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace LogsPolicy {

                    /** Destination enum. */
                    enum Destination {
                        DESTINATION_UNSPECIFIED = 0,
                        CLOUD_LOGGING = 1,
                        PATH = 2
                    }
                }

                /** Properties of a JobDependency. */
                interface IJobDependency {

                    /** JobDependency items */
                    items?: ({ [k: string]: google.cloud.batch.v1alpha.JobDependency.Type }|null);
                }

                /** Represents a JobDependency. */
                class JobDependency implements IJobDependency {

                    /**
                     * Constructs a new JobDependency.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.batch.v1alpha.IJobDependency);

                    /** JobDependency items. */
                    public items: { [k: string]: google.cloud.batch.v1alpha.JobDependency.Type };

                    /**
                     * Creates a new JobDependency instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns JobDependency instance
                     */
                    public static create(properties?: google.cloud.batch.v1alpha.IJobDependency): google.cloud.batch.v1alpha.JobDependency;

                    /**
                     * Encodes the specified JobDependency message. Does not implicitly {@link google.cloud.batch.v1alpha.JobDependency.verify|verify} messages.
                     * @param message JobDependency message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.batch.v1alpha.IJobDependency, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified JobDependency message, length delimited. Does not implicitly {@link google.cloud.batch.v1alpha.JobDependency.verify|verify} messages.
                     * @param message JobDependency message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.batch.v1alpha.IJobDependency, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a JobDependency message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns JobDependency
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.batch.v1alpha.JobDependency;

                    /**
                     * Decodes a JobDependency message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns JobDependency
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.batch.v1alpha.JobDependency;

                    /**
                     * Verifies a JobDependency message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a JobDependency message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns JobDependency
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.batch.v1alpha.JobDependency;

                    /**
                     * Creates a plain object from a JobDependency message. Also converts values to other types if specified.
                     * @param message JobDependency
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.batch.v1alpha.JobDependency, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this JobDependency to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for JobDependency
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace JobDependency {

                    /** Type enum. */
                    enum Type {
                        TYPE_UNSPECIFIED = 0,
                        SUCCEEDED = 1,
                        FAILED = 2,
                        FINISHED = 3
                    }
                }

                /** Properties of a JobStatus. */
                interface IJobStatus {

                    /** JobStatus state */
                    state?: (google.cloud.batch.v1alpha.JobStatus.State|keyof typeof google.cloud.batch.v1alpha.JobStatus.State|null);

                    /** JobStatus statusEvents */
                    statusEvents?: (google.cloud.batch.v1alpha.IStatusEvent[]|null);

                    /** JobStatus taskGroups */
                    taskGroups?: ({ [k: string]: google.cloud.batch.v1alpha.JobStatus.ITaskGroupStatus }|null);

                    /** JobStatus runDuration */
                    runDuration?: (google.protobuf.IDuration|null);

                    /** JobStatus resourceUsage */
                    resourceUsage?: (google.cloud.batch.v1alpha.IResourceUsage|null);
                }

                /** Represents a JobStatus. */
                class JobStatus implements IJobStatus {

                    /**
                     * Constructs a new JobStatus.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.batch.v1alpha.IJobStatus);

                    /** JobStatus state. */
                    public state: (google.cloud.batch.v1alpha.JobStatus.State|keyof typeof google.cloud.batch.v1alpha.JobStatus.State);

                    /** JobStatus statusEvents. */
                    public statusEvents: google.cloud.batch.v1alpha.IStatusEvent[];

                    /** JobStatus taskGroups. */
                    public taskGroups: { [k: string]: google.cloud.batch.v1alpha.JobStatus.ITaskGroupStatus };

                    /** JobStatus runDuration. */
                    public runDuration?: (google.protobuf.IDuration|null);

                    /** JobStatus resourceUsage. */
                    public resourceUsage?: (google.cloud.batch.v1alpha.IResourceUsage|null);

                    /**
                     * Creates a new JobStatus instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns JobStatus instance
                     */
                    public static create(properties?: google.cloud.batch.v1alpha.IJobStatus): google.cloud.batch.v1alpha.JobStatus;

                    /**
                     * Encodes the specified JobStatus message. Does not implicitly {@link google.cloud.batch.v1alpha.JobStatus.verify|verify} messages.
                     * @param message JobStatus message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.batch.v1alpha.IJobStatus, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified JobStatus message, length delimited. Does not implicitly {@link google.cloud.batch.v1alpha.JobStatus.verify|verify} messages.
                     * @param message JobStatus message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.batch.v1alpha.IJobStatus, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a JobStatus message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns JobStatus
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.batch.v1alpha.JobStatus;

                    /**
                     * Decodes a JobStatus message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns JobStatus
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.batch.v1alpha.JobStatus;

                    /**
                     * Verifies a JobStatus message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a JobStatus message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns JobStatus
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.batch.v1alpha.JobStatus;

                    /**
                     * Creates a plain object from a JobStatus message. Also converts values to other types if specified.
                     * @param message JobStatus
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.batch.v1alpha.JobStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this JobStatus to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for JobStatus
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace JobStatus {

                    /** Properties of an InstanceStatus. */
                    interface IInstanceStatus {

                        /** InstanceStatus machineType */
                        machineType?: (string|null);

                        /** InstanceStatus provisioningModel */
                        provisioningModel?: (google.cloud.batch.v1alpha.AllocationPolicy.ProvisioningModel|keyof typeof google.cloud.batch.v1alpha.AllocationPolicy.ProvisioningModel|null);

                        /** InstanceStatus taskPack */
                        taskPack?: (number|Long|string|null);

                        /** InstanceStatus bootDisk */
                        bootDisk?: (google.cloud.batch.v1alpha.AllocationPolicy.IDisk|null);
                    }

                    /** Represents an InstanceStatus. */
                    class InstanceStatus implements IInstanceStatus {

                        /**
                         * Constructs a new InstanceStatus.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.batch.v1alpha.JobStatus.IInstanceStatus);

                        /** InstanceStatus machineType. */
                        public machineType: string;

                        /** InstanceStatus provisioningModel. */
                        public provisioningModel: (google.cloud.batch.v1alpha.AllocationPolicy.ProvisioningModel|keyof typeof google.cloud.batch.v1alpha.AllocationPolicy.ProvisioningModel);

                        /** InstanceStatus taskPack. */
                        public taskPack: (number|Long|string);

                        /** InstanceStatus bootDisk. */
                        public bootDisk?: (google.cloud.batch.v1alpha.AllocationPolicy.IDisk|null);

                        /**
                         * Creates a new InstanceStatus instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns InstanceStatus instance
                         */
                        public static create(properties?: google.cloud.batch.v1alpha.JobStatus.IInstanceStatus): google.cloud.batch.v1alpha.JobStatus.InstanceStatus;

                        /**
                         * Encodes the specified InstanceStatus message. Does not implicitly {@link google.cloud.batch.v1alpha.JobStatus.InstanceStatus.verify|verify} messages.
                         * @param message InstanceStatus message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.batch.v1alpha.JobStatus.IInstanceStatus, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified InstanceStatus message, length delimited. Does not implicitly {@link google.cloud.batch.v1alpha.JobStatus.InstanceStatus.verify|verify} messages.
                         * @param message InstanceStatus message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.batch.v1alpha.JobStatus.IInstanceStatus, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an InstanceStatus message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns InstanceStatus
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.batch.v1alpha.JobStatus.InstanceStatus;

                        /**
                         * Decodes an InstanceStatus message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns InstanceStatus
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.batch.v1alpha.JobStatus.InstanceStatus;

                        /**
                         * Verifies an InstanceStatus message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an InstanceStatus message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns InstanceStatus
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.batch.v1alpha.JobStatus.InstanceStatus;

                        /**
                         * Creates a plain object from an InstanceStatus message. Also converts values to other types if specified.
                         * @param message InstanceStatus
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.batch.v1alpha.JobStatus.InstanceStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this InstanceStatus to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for InstanceStatus
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a TaskGroupStatus. */
                    interface ITaskGroupStatus {

                        /** TaskGroupStatus counts */
                        counts?: ({ [k: string]: (number|Long|string) }|null);

                        /** TaskGroupStatus instances */
                        instances?: (google.cloud.batch.v1alpha.JobStatus.IInstanceStatus[]|null);
                    }

                    /** Represents a TaskGroupStatus. */
                    class TaskGroupStatus implements ITaskGroupStatus {

                        /**
                         * Constructs a new TaskGroupStatus.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.batch.v1alpha.JobStatus.ITaskGroupStatus);

                        /** TaskGroupStatus counts. */
                        public counts: { [k: string]: (number|Long|string) };

                        /** TaskGroupStatus instances. */
                        public instances: google.cloud.batch.v1alpha.JobStatus.IInstanceStatus[];

                        /**
                         * Creates a new TaskGroupStatus instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns TaskGroupStatus instance
                         */
                        public static create(properties?: google.cloud.batch.v1alpha.JobStatus.ITaskGroupStatus): google.cloud.batch.v1alpha.JobStatus.TaskGroupStatus;

                        /**
                         * Encodes the specified TaskGroupStatus message. Does not implicitly {@link google.cloud.batch.v1alpha.JobStatus.TaskGroupStatus.verify|verify} messages.
                         * @param message TaskGroupStatus message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.batch.v1alpha.JobStatus.ITaskGroupStatus, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified TaskGroupStatus message, length delimited. Does not implicitly {@link google.cloud.batch.v1alpha.JobStatus.TaskGroupStatus.verify|verify} messages.
                         * @param message TaskGroupStatus message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.batch.v1alpha.JobStatus.ITaskGroupStatus, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a TaskGroupStatus message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns TaskGroupStatus
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.batch.v1alpha.JobStatus.TaskGroupStatus;

                        /**
                         * Decodes a TaskGroupStatus message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns TaskGroupStatus
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.batch.v1alpha.JobStatus.TaskGroupStatus;

                        /**
                         * Verifies a TaskGroupStatus message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a TaskGroupStatus message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns TaskGroupStatus
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.batch.v1alpha.JobStatus.TaskGroupStatus;

                        /**
                         * Creates a plain object from a TaskGroupStatus message. Also converts values to other types if specified.
                         * @param message TaskGroupStatus
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.batch.v1alpha.JobStatus.TaskGroupStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this TaskGroupStatus to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for TaskGroupStatus
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        QUEUED = 1,
                        SCHEDULED = 2,
                        RUNNING = 3,
                        SUCCEEDED = 4,
                        FAILED = 5,
                        DELETION_IN_PROGRESS = 6
                    }
                }

                /** Properties of a ResourceUsage. */
                interface IResourceUsage {

                    /** ResourceUsage coreHours */
                    coreHours?: (number|null);
                }

                /** Represents a ResourceUsage. */
                class ResourceUsage implements IResourceUsage {

                    /**
                     * Constructs a new ResourceUsage.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.batch.v1alpha.IResourceUsage);

                    /** ResourceUsage coreHours. */
                    public coreHours: number;

                    /**
                     * Creates a new ResourceUsage instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ResourceUsage instance
                     */
                    public static create(properties?: google.cloud.batch.v1alpha.IResourceUsage): google.cloud.batch.v1alpha.ResourceUsage;

                    /**
                     * Encodes the specified ResourceUsage message. Does not implicitly {@link google.cloud.batch.v1alpha.ResourceUsage.verify|verify} messages.
                     * @param message ResourceUsage message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.batch.v1alpha.IResourceUsage, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ResourceUsage message, length delimited. Does not implicitly {@link google.cloud.batch.v1alpha.ResourceUsage.verify|verify} messages.
                     * @param message ResourceUsage message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.batch.v1alpha.IResourceUsage, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ResourceUsage message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ResourceUsage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.batch.v1alpha.ResourceUsage;

                    /**
                     * Decodes a ResourceUsage message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ResourceUsage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.batch.v1alpha.ResourceUsage;

                    /**
                     * Verifies a ResourceUsage message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ResourceUsage message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ResourceUsage
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.batch.v1alpha.ResourceUsage;

                    /**
                     * Creates a plain object from a ResourceUsage message. Also converts values to other types if specified.
                     * @param message ResourceUsage
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.batch.v1alpha.ResourceUsage, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ResourceUsage to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ResourceUsage
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a JobNotification. */
                interface IJobNotification {

                    /** JobNotification pubsubTopic */
                    pubsubTopic?: (string|null);

                    /** JobNotification message */
                    message?: (google.cloud.batch.v1alpha.JobNotification.IMessage|null);
                }

                /** Represents a JobNotification. */
                class JobNotification implements IJobNotification {

                    /**
                     * Constructs a new JobNotification.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.batch.v1alpha.IJobNotification);

                    /** JobNotification pubsubTopic. */
                    public pubsubTopic: string;

                    /** JobNotification message. */
                    public message?: (google.cloud.batch.v1alpha.JobNotification.IMessage|null);

                    /**
                     * Creates a new JobNotification instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns JobNotification instance
                     */
                    public static create(properties?: google.cloud.batch.v1alpha.IJobNotification): google.cloud.batch.v1alpha.JobNotification;

                    /**
                     * Encodes the specified JobNotification message. Does not implicitly {@link google.cloud.batch.v1alpha.JobNotification.verify|verify} messages.
                     * @param message JobNotification message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.batch.v1alpha.IJobNotification, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified JobNotification message, length delimited. Does not implicitly {@link google.cloud.batch.v1alpha.JobNotification.verify|verify} messages.
                     * @param message JobNotification message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.batch.v1alpha.IJobNotification, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a JobNotification message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns JobNotification
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.batch.v1alpha.JobNotification;

                    /**
                     * Decodes a JobNotification message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns JobNotification
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.batch.v1alpha.JobNotification;

                    /**
                     * Verifies a JobNotification message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a JobNotification message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns JobNotification
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.batch.v1alpha.JobNotification;

                    /**
                     * Creates a plain object from a JobNotification message. Also converts values to other types if specified.
                     * @param message JobNotification
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.batch.v1alpha.JobNotification, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this JobNotification to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for JobNotification
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace JobNotification {

                    /** Properties of a Message. */
                    interface IMessage {

                        /** Message type */
                        type?: (google.cloud.batch.v1alpha.JobNotification.Type|keyof typeof google.cloud.batch.v1alpha.JobNotification.Type|null);

                        /** Message newJobState */
                        newJobState?: (google.cloud.batch.v1alpha.JobStatus.State|keyof typeof google.cloud.batch.v1alpha.JobStatus.State|null);

                        /** Message newTaskState */
                        newTaskState?: (google.cloud.batch.v1alpha.TaskStatus.State|keyof typeof google.cloud.batch.v1alpha.TaskStatus.State|null);
                    }

                    /** Represents a Message. */
                    class Message implements IMessage {

                        /**
                         * Constructs a new Message.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.batch.v1alpha.JobNotification.IMessage);

                        /** Message type. */
                        public type: (google.cloud.batch.v1alpha.JobNotification.Type|keyof typeof google.cloud.batch.v1alpha.JobNotification.Type);

                        /** Message newJobState. */
                        public newJobState: (google.cloud.batch.v1alpha.JobStatus.State|keyof typeof google.cloud.batch.v1alpha.JobStatus.State);

                        /** Message newTaskState. */
                        public newTaskState: (google.cloud.batch.v1alpha.TaskStatus.State|keyof typeof google.cloud.batch.v1alpha.TaskStatus.State);

                        /**
                         * Creates a new Message instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Message instance
                         */
                        public static create(properties?: google.cloud.batch.v1alpha.JobNotification.IMessage): google.cloud.batch.v1alpha.JobNotification.Message;

                        /**
                         * Encodes the specified Message message. Does not implicitly {@link google.cloud.batch.v1alpha.JobNotification.Message.verify|verify} messages.
                         * @param message Message message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.batch.v1alpha.JobNotification.IMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Message message, length delimited. Does not implicitly {@link google.cloud.batch.v1alpha.JobNotification.Message.verify|verify} messages.
                         * @param message Message message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.batch.v1alpha.JobNotification.IMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Message message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Message
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.batch.v1alpha.JobNotification.Message;

                        /**
                         * Decodes a Message message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Message
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.batch.v1alpha.JobNotification.Message;

                        /**
                         * Verifies a Message message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Message message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Message
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.batch.v1alpha.JobNotification.Message;

                        /**
                         * Creates a plain object from a Message message. Also converts values to other types if specified.
                         * @param message Message
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.batch.v1alpha.JobNotification.Message, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Message to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for Message
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Type enum. */
                    enum Type {
                        TYPE_UNSPECIFIED = 0,
                        JOB_STATE_CHANGED = 1,
                        TASK_STATE_CHANGED = 2
                    }
                }

                /** Properties of an AllocationPolicy. */
                interface IAllocationPolicy {

                    /** AllocationPolicy location */
                    location?: (google.cloud.batch.v1alpha.AllocationPolicy.ILocationPolicy|null);

                    /** AllocationPolicy instance */
                    instance?: (google.cloud.batch.v1alpha.AllocationPolicy.IInstancePolicy|null);

                    /** AllocationPolicy instances */
                    instances?: (google.cloud.batch.v1alpha.AllocationPolicy.IInstancePolicyOrTemplate[]|null);

                    /** AllocationPolicy instanceTemplates */
                    instanceTemplates?: (string[]|null);

                    /** AllocationPolicy provisioningModels */
                    provisioningModels?: (google.cloud.batch.v1alpha.AllocationPolicy.ProvisioningModel[]|null);

                    /** AllocationPolicy serviceAccountEmail */
                    serviceAccountEmail?: (string|null);

                    /** AllocationPolicy serviceAccount */
                    serviceAccount?: (google.cloud.batch.v1alpha.IServiceAccount|null);

                    /** AllocationPolicy labels */
                    labels?: ({ [k: string]: string }|null);

                    /** AllocationPolicy network */
                    network?: (google.cloud.batch.v1alpha.AllocationPolicy.INetworkPolicy|null);

                    /** AllocationPolicy placement */
                    placement?: (google.cloud.batch.v1alpha.AllocationPolicy.IPlacementPolicy|null);
                }

                /** Represents an AllocationPolicy. */
                class AllocationPolicy implements IAllocationPolicy {

                    /**
                     * Constructs a new AllocationPolicy.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.batch.v1alpha.IAllocationPolicy);

                    /** AllocationPolicy location. */
                    public location?: (google.cloud.batch.v1alpha.AllocationPolicy.ILocationPolicy|null);

                    /** AllocationPolicy instance. */
                    public instance?: (google.cloud.batch.v1alpha.AllocationPolicy.IInstancePolicy|null);

                    /** AllocationPolicy instances. */
                    public instances: google.cloud.batch.v1alpha.AllocationPolicy.IInstancePolicyOrTemplate[];

                    /** AllocationPolicy instanceTemplates. */
                    public instanceTemplates: string[];

                    /** AllocationPolicy provisioningModels. */
                    public provisioningModels: google.cloud.batch.v1alpha.AllocationPolicy.ProvisioningModel[];

                    /** AllocationPolicy serviceAccountEmail. */
                    public serviceAccountEmail: string;

                    /** AllocationPolicy serviceAccount. */
                    public serviceAccount?: (google.cloud.batch.v1alpha.IServiceAccount|null);

                    /** AllocationPolicy labels. */
                    public labels: { [k: string]: string };

                    /** AllocationPolicy network. */
                    public network?: (google.cloud.batch.v1alpha.AllocationPolicy.INetworkPolicy|null);

                    /** AllocationPolicy placement. */
                    public placement?: (google.cloud.batch.v1alpha.AllocationPolicy.IPlacementPolicy|null);

                    /**
                     * Creates a new AllocationPolicy instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AllocationPolicy instance
                     */
                    public static create(properties?: google.cloud.batch.v1alpha.IAllocationPolicy): google.cloud.batch.v1alpha.AllocationPolicy;

                    /**
                     * Encodes the specified AllocationPolicy message. Does not implicitly {@link google.cloud.batch.v1alpha.AllocationPolicy.verify|verify} messages.
                     * @param message AllocationPolicy message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.batch.v1alpha.IAllocationPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AllocationPolicy message, length delimited. Does not implicitly {@link google.cloud.batch.v1alpha.AllocationPolicy.verify|verify} messages.
                     * @param message AllocationPolicy message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.batch.v1alpha.IAllocationPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AllocationPolicy message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AllocationPolicy
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.batch.v1alpha.AllocationPolicy;

                    /**
                     * Decodes an AllocationPolicy message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AllocationPolicy
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.batch.v1alpha.AllocationPolicy;

                    /**
                     * Verifies an AllocationPolicy message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AllocationPolicy message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AllocationPolicy
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.batch.v1alpha.AllocationPolicy;

                    /**
                     * Creates a plain object from an AllocationPolicy message. Also converts values to other types if specified.
                     * @param message AllocationPolicy
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.batch.v1alpha.AllocationPolicy, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AllocationPolicy to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for AllocationPolicy
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace AllocationPolicy {

                    /** Properties of a LocationPolicy. */
                    interface ILocationPolicy {

                        /** LocationPolicy allowedLocations */
                        allowedLocations?: (string[]|null);

                        /** LocationPolicy deniedLocations */
                        deniedLocations?: (string[]|null);
                    }

                    /** Represents a LocationPolicy. */
                    class LocationPolicy implements ILocationPolicy {

                        /**
                         * Constructs a new LocationPolicy.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.batch.v1alpha.AllocationPolicy.ILocationPolicy);

                        /** LocationPolicy allowedLocations. */
                        public allowedLocations: string[];

                        /** LocationPolicy deniedLocations. */
                        public deniedLocations: string[];

                        /**
                         * Creates a new LocationPolicy instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns LocationPolicy instance
                         */
                        public static create(properties?: google.cloud.batch.v1alpha.AllocationPolicy.ILocationPolicy): google.cloud.batch.v1alpha.AllocationPolicy.LocationPolicy;

                        /**
                         * Encodes the specified LocationPolicy message. Does not implicitly {@link google.cloud.batch.v1alpha.AllocationPolicy.LocationPolicy.verify|verify} messages.
                         * @param message LocationPolicy message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.batch.v1alpha.AllocationPolicy.ILocationPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified LocationPolicy message, length delimited. Does not implicitly {@link google.cloud.batch.v1alpha.AllocationPolicy.LocationPolicy.verify|verify} messages.
                         * @param message LocationPolicy message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.batch.v1alpha.AllocationPolicy.ILocationPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a LocationPolicy message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns LocationPolicy
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.batch.v1alpha.AllocationPolicy.LocationPolicy;

                        /**
                         * Decodes a LocationPolicy message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns LocationPolicy
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.batch.v1alpha.AllocationPolicy.LocationPolicy;

                        /**
                         * Verifies a LocationPolicy message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a LocationPolicy message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns LocationPolicy
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.batch.v1alpha.AllocationPolicy.LocationPolicy;

                        /**
                         * Creates a plain object from a LocationPolicy message. Also converts values to other types if specified.
                         * @param message LocationPolicy
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.batch.v1alpha.AllocationPolicy.LocationPolicy, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this LocationPolicy to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for LocationPolicy
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a Disk. */
                    interface IDisk {

                        /** Disk image */
                        image?: (string|null);

                        /** Disk snapshot */
                        snapshot?: (string|null);

                        /** Disk type */
                        type?: (string|null);

                        /** Disk sizeGb */
                        sizeGb?: (number|Long|string|null);

                        /** Disk diskInterface */
                        diskInterface?: (string|null);
                    }

                    /** Represents a Disk. */
                    class Disk implements IDisk {

                        /**
                         * Constructs a new Disk.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.batch.v1alpha.AllocationPolicy.IDisk);

                        /** Disk image. */
                        public image?: (string|null);

                        /** Disk snapshot. */
                        public snapshot?: (string|null);

                        /** Disk type. */
                        public type: string;

                        /** Disk sizeGb. */
                        public sizeGb: (number|Long|string);

                        /** Disk diskInterface. */
                        public diskInterface: string;

                        /** Disk dataSource. */
                        public dataSource?: ("image"|"snapshot");

                        /**
                         * Creates a new Disk instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Disk instance
                         */
                        public static create(properties?: google.cloud.batch.v1alpha.AllocationPolicy.IDisk): google.cloud.batch.v1alpha.AllocationPolicy.Disk;

                        /**
                         * Encodes the specified Disk message. Does not implicitly {@link google.cloud.batch.v1alpha.AllocationPolicy.Disk.verify|verify} messages.
                         * @param message Disk message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.batch.v1alpha.AllocationPolicy.IDisk, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Disk message, length delimited. Does not implicitly {@link google.cloud.batch.v1alpha.AllocationPolicy.Disk.verify|verify} messages.
                         * @param message Disk message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.batch.v1alpha.AllocationPolicy.IDisk, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Disk message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Disk
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.batch.v1alpha.AllocationPolicy.Disk;

                        /**
                         * Decodes a Disk message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Disk
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.batch.v1alpha.AllocationPolicy.Disk;

                        /**
                         * Verifies a Disk message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Disk message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Disk
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.batch.v1alpha.AllocationPolicy.Disk;

                        /**
                         * Creates a plain object from a Disk message. Also converts values to other types if specified.
                         * @param message Disk
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.batch.v1alpha.AllocationPolicy.Disk, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Disk to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for Disk
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of an AttachedDisk. */
                    interface IAttachedDisk {

                        /** AttachedDisk newDisk */
                        newDisk?: (google.cloud.batch.v1alpha.AllocationPolicy.IDisk|null);

                        /** AttachedDisk existingDisk */
                        existingDisk?: (string|null);

                        /** AttachedDisk deviceName */
                        deviceName?: (string|null);
                    }

                    /** Represents an AttachedDisk. */
                    class AttachedDisk implements IAttachedDisk {

                        /**
                         * Constructs a new AttachedDisk.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.batch.v1alpha.AllocationPolicy.IAttachedDisk);

                        /** AttachedDisk newDisk. */
                        public newDisk?: (google.cloud.batch.v1alpha.AllocationPolicy.IDisk|null);

                        /** AttachedDisk existingDisk. */
                        public existingDisk?: (string|null);

                        /** AttachedDisk deviceName. */
                        public deviceName: string;

                        /** AttachedDisk attached. */
                        public attached?: ("newDisk"|"existingDisk");

                        /**
                         * Creates a new AttachedDisk instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns AttachedDisk instance
                         */
                        public static create(properties?: google.cloud.batch.v1alpha.AllocationPolicy.IAttachedDisk): google.cloud.batch.v1alpha.AllocationPolicy.AttachedDisk;

                        /**
                         * Encodes the specified AttachedDisk message. Does not implicitly {@link google.cloud.batch.v1alpha.AllocationPolicy.AttachedDisk.verify|verify} messages.
                         * @param message AttachedDisk message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.batch.v1alpha.AllocationPolicy.IAttachedDisk, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified AttachedDisk message, length delimited. Does not implicitly {@link google.cloud.batch.v1alpha.AllocationPolicy.AttachedDisk.verify|verify} messages.
                         * @param message AttachedDisk message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.batch.v1alpha.AllocationPolicy.IAttachedDisk, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an AttachedDisk message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns AttachedDisk
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.batch.v1alpha.AllocationPolicy.AttachedDisk;

                        /**
                         * Decodes an AttachedDisk message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns AttachedDisk
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.batch.v1alpha.AllocationPolicy.AttachedDisk;

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
                        public static fromObject(object: { [k: string]: any }): google.cloud.batch.v1alpha.AllocationPolicy.AttachedDisk;

                        /**
                         * Creates a plain object from an AttachedDisk message. Also converts values to other types if specified.
                         * @param message AttachedDisk
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.batch.v1alpha.AllocationPolicy.AttachedDisk, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

                    /** Properties of an Accelerator. */
                    interface IAccelerator {

                        /** Accelerator type */
                        type?: (string|null);

                        /** Accelerator count */
                        count?: (number|Long|string|null);

                        /** Accelerator installGpuDrivers */
                        installGpuDrivers?: (boolean|null);

                        /** Accelerator driverVersion */
                        driverVersion?: (string|null);
                    }

                    /** Represents an Accelerator. */
                    class Accelerator implements IAccelerator {

                        /**
                         * Constructs a new Accelerator.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.batch.v1alpha.AllocationPolicy.IAccelerator);

                        /** Accelerator type. */
                        public type: string;

                        /** Accelerator count. */
                        public count: (number|Long|string);

                        /** Accelerator installGpuDrivers. */
                        public installGpuDrivers: boolean;

                        /** Accelerator driverVersion. */
                        public driverVersion: string;

                        /**
                         * Creates a new Accelerator instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Accelerator instance
                         */
                        public static create(properties?: google.cloud.batch.v1alpha.AllocationPolicy.IAccelerator): google.cloud.batch.v1alpha.AllocationPolicy.Accelerator;

                        /**
                         * Encodes the specified Accelerator message. Does not implicitly {@link google.cloud.batch.v1alpha.AllocationPolicy.Accelerator.verify|verify} messages.
                         * @param message Accelerator message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.batch.v1alpha.AllocationPolicy.IAccelerator, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Accelerator message, length delimited. Does not implicitly {@link google.cloud.batch.v1alpha.AllocationPolicy.Accelerator.verify|verify} messages.
                         * @param message Accelerator message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.batch.v1alpha.AllocationPolicy.IAccelerator, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an Accelerator message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Accelerator
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.batch.v1alpha.AllocationPolicy.Accelerator;

                        /**
                         * Decodes an Accelerator message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Accelerator
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.batch.v1alpha.AllocationPolicy.Accelerator;

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
                        public static fromObject(object: { [k: string]: any }): google.cloud.batch.v1alpha.AllocationPolicy.Accelerator;

                        /**
                         * Creates a plain object from an Accelerator message. Also converts values to other types if specified.
                         * @param message Accelerator
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.batch.v1alpha.AllocationPolicy.Accelerator, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

                    /** Properties of an InstancePolicy. */
                    interface IInstancePolicy {

                        /** InstancePolicy allowedMachineTypes */
                        allowedMachineTypes?: (string[]|null);

                        /** InstancePolicy machineType */
                        machineType?: (string|null);

                        /** InstancePolicy minCpuPlatform */
                        minCpuPlatform?: (string|null);

                        /** InstancePolicy provisioningModel */
                        provisioningModel?: (google.cloud.batch.v1alpha.AllocationPolicy.ProvisioningModel|keyof typeof google.cloud.batch.v1alpha.AllocationPolicy.ProvisioningModel|null);

                        /** InstancePolicy accelerators */
                        accelerators?: (google.cloud.batch.v1alpha.AllocationPolicy.IAccelerator[]|null);

                        /** InstancePolicy bootDisk */
                        bootDisk?: (google.cloud.batch.v1alpha.AllocationPolicy.IDisk|null);

                        /** InstancePolicy disks */
                        disks?: (google.cloud.batch.v1alpha.AllocationPolicy.IAttachedDisk[]|null);

                        /** InstancePolicy reservation */
                        reservation?: (string|null);
                    }

                    /** Represents an InstancePolicy. */
                    class InstancePolicy implements IInstancePolicy {

                        /**
                         * Constructs a new InstancePolicy.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.batch.v1alpha.AllocationPolicy.IInstancePolicy);

                        /** InstancePolicy allowedMachineTypes. */
                        public allowedMachineTypes: string[];

                        /** InstancePolicy machineType. */
                        public machineType: string;

                        /** InstancePolicy minCpuPlatform. */
                        public minCpuPlatform: string;

                        /** InstancePolicy provisioningModel. */
                        public provisioningModel: (google.cloud.batch.v1alpha.AllocationPolicy.ProvisioningModel|keyof typeof google.cloud.batch.v1alpha.AllocationPolicy.ProvisioningModel);

                        /** InstancePolicy accelerators. */
                        public accelerators: google.cloud.batch.v1alpha.AllocationPolicy.IAccelerator[];

                        /** InstancePolicy bootDisk. */
                        public bootDisk?: (google.cloud.batch.v1alpha.AllocationPolicy.IDisk|null);

                        /** InstancePolicy disks. */
                        public disks: google.cloud.batch.v1alpha.AllocationPolicy.IAttachedDisk[];

                        /** InstancePolicy reservation. */
                        public reservation: string;

                        /**
                         * Creates a new InstancePolicy instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns InstancePolicy instance
                         */
                        public static create(properties?: google.cloud.batch.v1alpha.AllocationPolicy.IInstancePolicy): google.cloud.batch.v1alpha.AllocationPolicy.InstancePolicy;

                        /**
                         * Encodes the specified InstancePolicy message. Does not implicitly {@link google.cloud.batch.v1alpha.AllocationPolicy.InstancePolicy.verify|verify} messages.
                         * @param message InstancePolicy message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.batch.v1alpha.AllocationPolicy.IInstancePolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified InstancePolicy message, length delimited. Does not implicitly {@link google.cloud.batch.v1alpha.AllocationPolicy.InstancePolicy.verify|verify} messages.
                         * @param message InstancePolicy message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.batch.v1alpha.AllocationPolicy.IInstancePolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an InstancePolicy message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns InstancePolicy
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.batch.v1alpha.AllocationPolicy.InstancePolicy;

                        /**
                         * Decodes an InstancePolicy message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns InstancePolicy
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.batch.v1alpha.AllocationPolicy.InstancePolicy;

                        /**
                         * Verifies an InstancePolicy message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an InstancePolicy message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns InstancePolicy
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.batch.v1alpha.AllocationPolicy.InstancePolicy;

                        /**
                         * Creates a plain object from an InstancePolicy message. Also converts values to other types if specified.
                         * @param message InstancePolicy
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.batch.v1alpha.AllocationPolicy.InstancePolicy, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this InstancePolicy to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for InstancePolicy
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of an InstancePolicyOrTemplate. */
                    interface IInstancePolicyOrTemplate {

                        /** InstancePolicyOrTemplate policy */
                        policy?: (google.cloud.batch.v1alpha.AllocationPolicy.IInstancePolicy|null);

                        /** InstancePolicyOrTemplate instanceTemplate */
                        instanceTemplate?: (string|null);

                        /** InstancePolicyOrTemplate installGpuDrivers */
                        installGpuDrivers?: (boolean|null);
                    }

                    /** Represents an InstancePolicyOrTemplate. */
                    class InstancePolicyOrTemplate implements IInstancePolicyOrTemplate {

                        /**
                         * Constructs a new InstancePolicyOrTemplate.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.batch.v1alpha.AllocationPolicy.IInstancePolicyOrTemplate);

                        /** InstancePolicyOrTemplate policy. */
                        public policy?: (google.cloud.batch.v1alpha.AllocationPolicy.IInstancePolicy|null);

                        /** InstancePolicyOrTemplate instanceTemplate. */
                        public instanceTemplate?: (string|null);

                        /** InstancePolicyOrTemplate installGpuDrivers. */
                        public installGpuDrivers: boolean;

                        /** InstancePolicyOrTemplate policyTemplate. */
                        public policyTemplate?: ("policy"|"instanceTemplate");

                        /**
                         * Creates a new InstancePolicyOrTemplate instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns InstancePolicyOrTemplate instance
                         */
                        public static create(properties?: google.cloud.batch.v1alpha.AllocationPolicy.IInstancePolicyOrTemplate): google.cloud.batch.v1alpha.AllocationPolicy.InstancePolicyOrTemplate;

                        /**
                         * Encodes the specified InstancePolicyOrTemplate message. Does not implicitly {@link google.cloud.batch.v1alpha.AllocationPolicy.InstancePolicyOrTemplate.verify|verify} messages.
                         * @param message InstancePolicyOrTemplate message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.batch.v1alpha.AllocationPolicy.IInstancePolicyOrTemplate, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified InstancePolicyOrTemplate message, length delimited. Does not implicitly {@link google.cloud.batch.v1alpha.AllocationPolicy.InstancePolicyOrTemplate.verify|verify} messages.
                         * @param message InstancePolicyOrTemplate message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.batch.v1alpha.AllocationPolicy.IInstancePolicyOrTemplate, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an InstancePolicyOrTemplate message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns InstancePolicyOrTemplate
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.batch.v1alpha.AllocationPolicy.InstancePolicyOrTemplate;

                        /**
                         * Decodes an InstancePolicyOrTemplate message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns InstancePolicyOrTemplate
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.batch.v1alpha.AllocationPolicy.InstancePolicyOrTemplate;

                        /**
                         * Verifies an InstancePolicyOrTemplate message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an InstancePolicyOrTemplate message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns InstancePolicyOrTemplate
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.batch.v1alpha.AllocationPolicy.InstancePolicyOrTemplate;

                        /**
                         * Creates a plain object from an InstancePolicyOrTemplate message. Also converts values to other types if specified.
                         * @param message InstancePolicyOrTemplate
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.batch.v1alpha.AllocationPolicy.InstancePolicyOrTemplate, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this InstancePolicyOrTemplate to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for InstancePolicyOrTemplate
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a NetworkInterface. */
                    interface INetworkInterface {

                        /** NetworkInterface network */
                        network?: (string|null);

                        /** NetworkInterface subnetwork */
                        subnetwork?: (string|null);

                        /** NetworkInterface noExternalIpAddress */
                        noExternalIpAddress?: (boolean|null);
                    }

                    /** Represents a NetworkInterface. */
                    class NetworkInterface implements INetworkInterface {

                        /**
                         * Constructs a new NetworkInterface.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.batch.v1alpha.AllocationPolicy.INetworkInterface);

                        /** NetworkInterface network. */
                        public network: string;

                        /** NetworkInterface subnetwork. */
                        public subnetwork: string;

                        /** NetworkInterface noExternalIpAddress. */
                        public noExternalIpAddress: boolean;

                        /**
                         * Creates a new NetworkInterface instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns NetworkInterface instance
                         */
                        public static create(properties?: google.cloud.batch.v1alpha.AllocationPolicy.INetworkInterface): google.cloud.batch.v1alpha.AllocationPolicy.NetworkInterface;

                        /**
                         * Encodes the specified NetworkInterface message. Does not implicitly {@link google.cloud.batch.v1alpha.AllocationPolicy.NetworkInterface.verify|verify} messages.
                         * @param message NetworkInterface message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.batch.v1alpha.AllocationPolicy.INetworkInterface, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified NetworkInterface message, length delimited. Does not implicitly {@link google.cloud.batch.v1alpha.AllocationPolicy.NetworkInterface.verify|verify} messages.
                         * @param message NetworkInterface message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.batch.v1alpha.AllocationPolicy.INetworkInterface, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a NetworkInterface message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns NetworkInterface
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.batch.v1alpha.AllocationPolicy.NetworkInterface;

                        /**
                         * Decodes a NetworkInterface message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns NetworkInterface
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.batch.v1alpha.AllocationPolicy.NetworkInterface;

                        /**
                         * Verifies a NetworkInterface message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a NetworkInterface message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns NetworkInterface
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.batch.v1alpha.AllocationPolicy.NetworkInterface;

                        /**
                         * Creates a plain object from a NetworkInterface message. Also converts values to other types if specified.
                         * @param message NetworkInterface
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.batch.v1alpha.AllocationPolicy.NetworkInterface, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this NetworkInterface to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for NetworkInterface
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a NetworkPolicy. */
                    interface INetworkPolicy {

                        /** NetworkPolicy networkInterfaces */
                        networkInterfaces?: (google.cloud.batch.v1alpha.AllocationPolicy.INetworkInterface[]|null);
                    }

                    /** Represents a NetworkPolicy. */
                    class NetworkPolicy implements INetworkPolicy {

                        /**
                         * Constructs a new NetworkPolicy.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.batch.v1alpha.AllocationPolicy.INetworkPolicy);

                        /** NetworkPolicy networkInterfaces. */
                        public networkInterfaces: google.cloud.batch.v1alpha.AllocationPolicy.INetworkInterface[];

                        /**
                         * Creates a new NetworkPolicy instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns NetworkPolicy instance
                         */
                        public static create(properties?: google.cloud.batch.v1alpha.AllocationPolicy.INetworkPolicy): google.cloud.batch.v1alpha.AllocationPolicy.NetworkPolicy;

                        /**
                         * Encodes the specified NetworkPolicy message. Does not implicitly {@link google.cloud.batch.v1alpha.AllocationPolicy.NetworkPolicy.verify|verify} messages.
                         * @param message NetworkPolicy message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.batch.v1alpha.AllocationPolicy.INetworkPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified NetworkPolicy message, length delimited. Does not implicitly {@link google.cloud.batch.v1alpha.AllocationPolicy.NetworkPolicy.verify|verify} messages.
                         * @param message NetworkPolicy message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.batch.v1alpha.AllocationPolicy.INetworkPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a NetworkPolicy message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns NetworkPolicy
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.batch.v1alpha.AllocationPolicy.NetworkPolicy;

                        /**
                         * Decodes a NetworkPolicy message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns NetworkPolicy
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.batch.v1alpha.AllocationPolicy.NetworkPolicy;

                        /**
                         * Verifies a NetworkPolicy message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a NetworkPolicy message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns NetworkPolicy
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.batch.v1alpha.AllocationPolicy.NetworkPolicy;

                        /**
                         * Creates a plain object from a NetworkPolicy message. Also converts values to other types if specified.
                         * @param message NetworkPolicy
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.batch.v1alpha.AllocationPolicy.NetworkPolicy, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this NetworkPolicy to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for NetworkPolicy
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a PlacementPolicy. */
                    interface IPlacementPolicy {

                        /** PlacementPolicy collocation */
                        collocation?: (string|null);

                        /** PlacementPolicy maxDistance */
                        maxDistance?: (number|Long|string|null);
                    }

                    /** Represents a PlacementPolicy. */
                    class PlacementPolicy implements IPlacementPolicy {

                        /**
                         * Constructs a new PlacementPolicy.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.batch.v1alpha.AllocationPolicy.IPlacementPolicy);

                        /** PlacementPolicy collocation. */
                        public collocation: string;

                        /** PlacementPolicy maxDistance. */
                        public maxDistance: (number|Long|string);

                        /**
                         * Creates a new PlacementPolicy instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns PlacementPolicy instance
                         */
                        public static create(properties?: google.cloud.batch.v1alpha.AllocationPolicy.IPlacementPolicy): google.cloud.batch.v1alpha.AllocationPolicy.PlacementPolicy;

                        /**
                         * Encodes the specified PlacementPolicy message. Does not implicitly {@link google.cloud.batch.v1alpha.AllocationPolicy.PlacementPolicy.verify|verify} messages.
                         * @param message PlacementPolicy message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.batch.v1alpha.AllocationPolicy.IPlacementPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified PlacementPolicy message, length delimited. Does not implicitly {@link google.cloud.batch.v1alpha.AllocationPolicy.PlacementPolicy.verify|verify} messages.
                         * @param message PlacementPolicy message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.batch.v1alpha.AllocationPolicy.IPlacementPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a PlacementPolicy message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns PlacementPolicy
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.batch.v1alpha.AllocationPolicy.PlacementPolicy;

                        /**
                         * Decodes a PlacementPolicy message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns PlacementPolicy
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.batch.v1alpha.AllocationPolicy.PlacementPolicy;

                        /**
                         * Verifies a PlacementPolicy message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a PlacementPolicy message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns PlacementPolicy
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.batch.v1alpha.AllocationPolicy.PlacementPolicy;

                        /**
                         * Creates a plain object from a PlacementPolicy message. Also converts values to other types if specified.
                         * @param message PlacementPolicy
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.batch.v1alpha.AllocationPolicy.PlacementPolicy, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this PlacementPolicy to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for PlacementPolicy
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** ProvisioningModel enum. */
                    enum ProvisioningModel {
                        PROVISIONING_MODEL_UNSPECIFIED = 0,
                        STANDARD = 1,
                        SPOT = 2,
                        PREEMPTIBLE = 3
                    }
                }

                /** Properties of a TaskGroup. */
                interface ITaskGroup {

                    /** TaskGroup name */
                    name?: (string|null);

                    /** TaskGroup taskSpec */
                    taskSpec?: (google.cloud.batch.v1alpha.ITaskSpec|null);

                    /** TaskGroup taskCount */
                    taskCount?: (number|Long|string|null);

                    /** TaskGroup parallelism */
                    parallelism?: (number|Long|string|null);

                    /** TaskGroup schedulingPolicy */
                    schedulingPolicy?: (google.cloud.batch.v1alpha.TaskGroup.SchedulingPolicy|keyof typeof google.cloud.batch.v1alpha.TaskGroup.SchedulingPolicy|null);

                    /** TaskGroup allocationPolicy */
                    allocationPolicy?: (google.cloud.batch.v1alpha.IAllocationPolicy|null);

                    /** TaskGroup labels */
                    labels?: ({ [k: string]: string }|null);

                    /** TaskGroup taskEnvironments */
                    taskEnvironments?: (google.cloud.batch.v1alpha.IEnvironment[]|null);

                    /** TaskGroup taskCountPerNode */
                    taskCountPerNode?: (number|Long|string|null);

                    /** TaskGroup requireHostsFile */
                    requireHostsFile?: (boolean|null);

                    /** TaskGroup permissiveSsh */
                    permissiveSsh?: (boolean|null);
                }

                /** Represents a TaskGroup. */
                class TaskGroup implements ITaskGroup {

                    /**
                     * Constructs a new TaskGroup.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.batch.v1alpha.ITaskGroup);

                    /** TaskGroup name. */
                    public name: string;

                    /** TaskGroup taskSpec. */
                    public taskSpec?: (google.cloud.batch.v1alpha.ITaskSpec|null);

                    /** TaskGroup taskCount. */
                    public taskCount: (number|Long|string);

                    /** TaskGroup parallelism. */
                    public parallelism: (number|Long|string);

                    /** TaskGroup schedulingPolicy. */
                    public schedulingPolicy: (google.cloud.batch.v1alpha.TaskGroup.SchedulingPolicy|keyof typeof google.cloud.batch.v1alpha.TaskGroup.SchedulingPolicy);

                    /** TaskGroup allocationPolicy. */
                    public allocationPolicy?: (google.cloud.batch.v1alpha.IAllocationPolicy|null);

                    /** TaskGroup labels. */
                    public labels: { [k: string]: string };

                    /** TaskGroup taskEnvironments. */
                    public taskEnvironments: google.cloud.batch.v1alpha.IEnvironment[];

                    /** TaskGroup taskCountPerNode. */
                    public taskCountPerNode: (number|Long|string);

                    /** TaskGroup requireHostsFile. */
                    public requireHostsFile: boolean;

                    /** TaskGroup permissiveSsh. */
                    public permissiveSsh: boolean;

                    /**
                     * Creates a new TaskGroup instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TaskGroup instance
                     */
                    public static create(properties?: google.cloud.batch.v1alpha.ITaskGroup): google.cloud.batch.v1alpha.TaskGroup;

                    /**
                     * Encodes the specified TaskGroup message. Does not implicitly {@link google.cloud.batch.v1alpha.TaskGroup.verify|verify} messages.
                     * @param message TaskGroup message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.batch.v1alpha.ITaskGroup, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TaskGroup message, length delimited. Does not implicitly {@link google.cloud.batch.v1alpha.TaskGroup.verify|verify} messages.
                     * @param message TaskGroup message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.batch.v1alpha.ITaskGroup, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TaskGroup message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TaskGroup
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.batch.v1alpha.TaskGroup;

                    /**
                     * Decodes a TaskGroup message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TaskGroup
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.batch.v1alpha.TaskGroup;

                    /**
                     * Verifies a TaskGroup message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TaskGroup message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TaskGroup
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.batch.v1alpha.TaskGroup;

                    /**
                     * Creates a plain object from a TaskGroup message. Also converts values to other types if specified.
                     * @param message TaskGroup
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.batch.v1alpha.TaskGroup, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TaskGroup to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for TaskGroup
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace TaskGroup {

                    /** SchedulingPolicy enum. */
                    enum SchedulingPolicy {
                        SCHEDULING_POLICY_UNSPECIFIED = 0,
                        AS_SOON_AS_POSSIBLE = 1,
                        IN_ORDER = 2
                    }
                }

                /** Properties of a ServiceAccount. */
                interface IServiceAccount {

                    /** ServiceAccount email */
                    email?: (string|null);

                    /** ServiceAccount scopes */
                    scopes?: (string[]|null);
                }

                /** Represents a ServiceAccount. */
                class ServiceAccount implements IServiceAccount {

                    /**
                     * Constructs a new ServiceAccount.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.batch.v1alpha.IServiceAccount);

                    /** ServiceAccount email. */
                    public email: string;

                    /** ServiceAccount scopes. */
                    public scopes: string[];

                    /**
                     * Creates a new ServiceAccount instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ServiceAccount instance
                     */
                    public static create(properties?: google.cloud.batch.v1alpha.IServiceAccount): google.cloud.batch.v1alpha.ServiceAccount;

                    /**
                     * Encodes the specified ServiceAccount message. Does not implicitly {@link google.cloud.batch.v1alpha.ServiceAccount.verify|verify} messages.
                     * @param message ServiceAccount message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.batch.v1alpha.IServiceAccount, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ServiceAccount message, length delimited. Does not implicitly {@link google.cloud.batch.v1alpha.ServiceAccount.verify|verify} messages.
                     * @param message ServiceAccount message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.batch.v1alpha.IServiceAccount, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ServiceAccount message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ServiceAccount
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.batch.v1alpha.ServiceAccount;

                    /**
                     * Decodes a ServiceAccount message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ServiceAccount
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.batch.v1alpha.ServiceAccount;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.batch.v1alpha.ServiceAccount;

                    /**
                     * Creates a plain object from a ServiceAccount message. Also converts values to other types if specified.
                     * @param message ServiceAccount
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.batch.v1alpha.ServiceAccount, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

                /** Properties of a ComputeResource. */
                interface IComputeResource {

                    /** ComputeResource cpuMilli */
                    cpuMilli?: (number|Long|string|null);

                    /** ComputeResource memoryMib */
                    memoryMib?: (number|Long|string|null);

                    /** ComputeResource gpuCount */
                    gpuCount?: (number|Long|string|null);

                    /** ComputeResource bootDiskMib */
                    bootDiskMib?: (number|Long|string|null);
                }

                /** Represents a ComputeResource. */
                class ComputeResource implements IComputeResource {

                    /**
                     * Constructs a new ComputeResource.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.batch.v1alpha.IComputeResource);

                    /** ComputeResource cpuMilli. */
                    public cpuMilli: (number|Long|string);

                    /** ComputeResource memoryMib. */
                    public memoryMib: (number|Long|string);

                    /** ComputeResource gpuCount. */
                    public gpuCount: (number|Long|string);

                    /** ComputeResource bootDiskMib. */
                    public bootDiskMib: (number|Long|string);

                    /**
                     * Creates a new ComputeResource instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ComputeResource instance
                     */
                    public static create(properties?: google.cloud.batch.v1alpha.IComputeResource): google.cloud.batch.v1alpha.ComputeResource;

                    /**
                     * Encodes the specified ComputeResource message. Does not implicitly {@link google.cloud.batch.v1alpha.ComputeResource.verify|verify} messages.
                     * @param message ComputeResource message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.batch.v1alpha.IComputeResource, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ComputeResource message, length delimited. Does not implicitly {@link google.cloud.batch.v1alpha.ComputeResource.verify|verify} messages.
                     * @param message ComputeResource message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.batch.v1alpha.IComputeResource, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ComputeResource message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ComputeResource
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.batch.v1alpha.ComputeResource;

                    /**
                     * Decodes a ComputeResource message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ComputeResource
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.batch.v1alpha.ComputeResource;

                    /**
                     * Verifies a ComputeResource message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ComputeResource message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ComputeResource
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.batch.v1alpha.ComputeResource;

                    /**
                     * Creates a plain object from a ComputeResource message. Also converts values to other types if specified.
                     * @param message ComputeResource
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.batch.v1alpha.ComputeResource, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ComputeResource to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ComputeResource
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a StatusEvent. */
                interface IStatusEvent {

                    /** StatusEvent type */
                    type?: (string|null);

                    /** StatusEvent description */
                    description?: (string|null);

                    /** StatusEvent eventTime */
                    eventTime?: (google.protobuf.ITimestamp|null);

                    /** StatusEvent taskExecution */
                    taskExecution?: (google.cloud.batch.v1alpha.ITaskExecution|null);

                    /** StatusEvent taskState */
                    taskState?: (google.cloud.batch.v1alpha.TaskStatus.State|keyof typeof google.cloud.batch.v1alpha.TaskStatus.State|null);
                }

                /** Represents a StatusEvent. */
                class StatusEvent implements IStatusEvent {

                    /**
                     * Constructs a new StatusEvent.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.batch.v1alpha.IStatusEvent);

                    /** StatusEvent type. */
                    public type: string;

                    /** StatusEvent description. */
                    public description: string;

                    /** StatusEvent eventTime. */
                    public eventTime?: (google.protobuf.ITimestamp|null);

                    /** StatusEvent taskExecution. */
                    public taskExecution?: (google.cloud.batch.v1alpha.ITaskExecution|null);

                    /** StatusEvent taskState. */
                    public taskState: (google.cloud.batch.v1alpha.TaskStatus.State|keyof typeof google.cloud.batch.v1alpha.TaskStatus.State);

                    /**
                     * Creates a new StatusEvent instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns StatusEvent instance
                     */
                    public static create(properties?: google.cloud.batch.v1alpha.IStatusEvent): google.cloud.batch.v1alpha.StatusEvent;

                    /**
                     * Encodes the specified StatusEvent message. Does not implicitly {@link google.cloud.batch.v1alpha.StatusEvent.verify|verify} messages.
                     * @param message StatusEvent message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.batch.v1alpha.IStatusEvent, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified StatusEvent message, length delimited. Does not implicitly {@link google.cloud.batch.v1alpha.StatusEvent.verify|verify} messages.
                     * @param message StatusEvent message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.batch.v1alpha.IStatusEvent, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a StatusEvent message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns StatusEvent
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.batch.v1alpha.StatusEvent;

                    /**
                     * Decodes a StatusEvent message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns StatusEvent
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.batch.v1alpha.StatusEvent;

                    /**
                     * Verifies a StatusEvent message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a StatusEvent message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns StatusEvent
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.batch.v1alpha.StatusEvent;

                    /**
                     * Creates a plain object from a StatusEvent message. Also converts values to other types if specified.
                     * @param message StatusEvent
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.batch.v1alpha.StatusEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this StatusEvent to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for StatusEvent
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a TaskExecution. */
                interface ITaskExecution {

                    /** TaskExecution exitCode */
                    exitCode?: (number|null);

                    /** TaskExecution stderrSnippet */
                    stderrSnippet?: (string|null);
                }

                /** Represents a TaskExecution. */
                class TaskExecution implements ITaskExecution {

                    /**
                     * Constructs a new TaskExecution.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.batch.v1alpha.ITaskExecution);

                    /** TaskExecution exitCode. */
                    public exitCode: number;

                    /** TaskExecution stderrSnippet. */
                    public stderrSnippet: string;

                    /**
                     * Creates a new TaskExecution instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TaskExecution instance
                     */
                    public static create(properties?: google.cloud.batch.v1alpha.ITaskExecution): google.cloud.batch.v1alpha.TaskExecution;

                    /**
                     * Encodes the specified TaskExecution message. Does not implicitly {@link google.cloud.batch.v1alpha.TaskExecution.verify|verify} messages.
                     * @param message TaskExecution message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.batch.v1alpha.ITaskExecution, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TaskExecution message, length delimited. Does not implicitly {@link google.cloud.batch.v1alpha.TaskExecution.verify|verify} messages.
                     * @param message TaskExecution message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.batch.v1alpha.ITaskExecution, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TaskExecution message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TaskExecution
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.batch.v1alpha.TaskExecution;

                    /**
                     * Decodes a TaskExecution message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TaskExecution
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.batch.v1alpha.TaskExecution;

                    /**
                     * Verifies a TaskExecution message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TaskExecution message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TaskExecution
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.batch.v1alpha.TaskExecution;

                    /**
                     * Creates a plain object from a TaskExecution message. Also converts values to other types if specified.
                     * @param message TaskExecution
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.batch.v1alpha.TaskExecution, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TaskExecution to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for TaskExecution
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a TaskStatus. */
                interface ITaskStatus {

                    /** TaskStatus state */
                    state?: (google.cloud.batch.v1alpha.TaskStatus.State|keyof typeof google.cloud.batch.v1alpha.TaskStatus.State|null);

                    /** TaskStatus statusEvents */
                    statusEvents?: (google.cloud.batch.v1alpha.IStatusEvent[]|null);

                    /** TaskStatus resourceUsage */
                    resourceUsage?: (google.cloud.batch.v1alpha.ITaskResourceUsage|null);
                }

                /** Represents a TaskStatus. */
                class TaskStatus implements ITaskStatus {

                    /**
                     * Constructs a new TaskStatus.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.batch.v1alpha.ITaskStatus);

                    /** TaskStatus state. */
                    public state: (google.cloud.batch.v1alpha.TaskStatus.State|keyof typeof google.cloud.batch.v1alpha.TaskStatus.State);

                    /** TaskStatus statusEvents. */
                    public statusEvents: google.cloud.batch.v1alpha.IStatusEvent[];

                    /** TaskStatus resourceUsage. */
                    public resourceUsage?: (google.cloud.batch.v1alpha.ITaskResourceUsage|null);

                    /**
                     * Creates a new TaskStatus instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TaskStatus instance
                     */
                    public static create(properties?: google.cloud.batch.v1alpha.ITaskStatus): google.cloud.batch.v1alpha.TaskStatus;

                    /**
                     * Encodes the specified TaskStatus message. Does not implicitly {@link google.cloud.batch.v1alpha.TaskStatus.verify|verify} messages.
                     * @param message TaskStatus message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.batch.v1alpha.ITaskStatus, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TaskStatus message, length delimited. Does not implicitly {@link google.cloud.batch.v1alpha.TaskStatus.verify|verify} messages.
                     * @param message TaskStatus message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.batch.v1alpha.ITaskStatus, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TaskStatus message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TaskStatus
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.batch.v1alpha.TaskStatus;

                    /**
                     * Decodes a TaskStatus message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TaskStatus
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.batch.v1alpha.TaskStatus;

                    /**
                     * Verifies a TaskStatus message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TaskStatus message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TaskStatus
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.batch.v1alpha.TaskStatus;

                    /**
                     * Creates a plain object from a TaskStatus message. Also converts values to other types if specified.
                     * @param message TaskStatus
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.batch.v1alpha.TaskStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TaskStatus to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for TaskStatus
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace TaskStatus {

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        PENDING = 1,
                        ASSIGNED = 2,
                        RUNNING = 3,
                        FAILED = 4,
                        SUCCEEDED = 5,
                        UNEXECUTED = 6
                    }
                }

                /** Properties of a TaskResourceUsage. */
                interface ITaskResourceUsage {

                    /** TaskResourceUsage coreHours */
                    coreHours?: (number|null);
                }

                /** Represents a TaskResourceUsage. */
                class TaskResourceUsage implements ITaskResourceUsage {

                    /**
                     * Constructs a new TaskResourceUsage.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.batch.v1alpha.ITaskResourceUsage);

                    /** TaskResourceUsage coreHours. */
                    public coreHours: number;

                    /**
                     * Creates a new TaskResourceUsage instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TaskResourceUsage instance
                     */
                    public static create(properties?: google.cloud.batch.v1alpha.ITaskResourceUsage): google.cloud.batch.v1alpha.TaskResourceUsage;

                    /**
                     * Encodes the specified TaskResourceUsage message. Does not implicitly {@link google.cloud.batch.v1alpha.TaskResourceUsage.verify|verify} messages.
                     * @param message TaskResourceUsage message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.batch.v1alpha.ITaskResourceUsage, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TaskResourceUsage message, length delimited. Does not implicitly {@link google.cloud.batch.v1alpha.TaskResourceUsage.verify|verify} messages.
                     * @param message TaskResourceUsage message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.batch.v1alpha.ITaskResourceUsage, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TaskResourceUsage message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TaskResourceUsage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.batch.v1alpha.TaskResourceUsage;

                    /**
                     * Decodes a TaskResourceUsage message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TaskResourceUsage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.batch.v1alpha.TaskResourceUsage;

                    /**
                     * Verifies a TaskResourceUsage message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TaskResourceUsage message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TaskResourceUsage
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.batch.v1alpha.TaskResourceUsage;

                    /**
                     * Creates a plain object from a TaskResourceUsage message. Also converts values to other types if specified.
                     * @param message TaskResourceUsage
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.batch.v1alpha.TaskResourceUsage, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TaskResourceUsage to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for TaskResourceUsage
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Runnable. */
                interface IRunnable {

                    /** Runnable container */
                    container?: (google.cloud.batch.v1alpha.Runnable.IContainer|null);

                    /** Runnable script */
                    script?: (google.cloud.batch.v1alpha.Runnable.IScript|null);

                    /** Runnable barrier */
                    barrier?: (google.cloud.batch.v1alpha.Runnable.IBarrier|null);

                    /** Runnable displayName */
                    displayName?: (string|null);

                    /** Runnable ignoreExitStatus */
                    ignoreExitStatus?: (boolean|null);

                    /** Runnable background */
                    background?: (boolean|null);

                    /** Runnable alwaysRun */
                    alwaysRun?: (boolean|null);

                    /** Runnable environment */
                    environment?: (google.cloud.batch.v1alpha.IEnvironment|null);

                    /** Runnable timeout */
                    timeout?: (google.protobuf.IDuration|null);

                    /** Runnable labels */
                    labels?: ({ [k: string]: string }|null);
                }

                /** Represents a Runnable. */
                class Runnable implements IRunnable {

                    /**
                     * Constructs a new Runnable.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.batch.v1alpha.IRunnable);

                    /** Runnable container. */
                    public container?: (google.cloud.batch.v1alpha.Runnable.IContainer|null);

                    /** Runnable script. */
                    public script?: (google.cloud.batch.v1alpha.Runnable.IScript|null);

                    /** Runnable barrier. */
                    public barrier?: (google.cloud.batch.v1alpha.Runnable.IBarrier|null);

                    /** Runnable displayName. */
                    public displayName: string;

                    /** Runnable ignoreExitStatus. */
                    public ignoreExitStatus: boolean;

                    /** Runnable background. */
                    public background: boolean;

                    /** Runnable alwaysRun. */
                    public alwaysRun: boolean;

                    /** Runnable environment. */
                    public environment?: (google.cloud.batch.v1alpha.IEnvironment|null);

                    /** Runnable timeout. */
                    public timeout?: (google.protobuf.IDuration|null);

                    /** Runnable labels. */
                    public labels: { [k: string]: string };

                    /** Runnable executable. */
                    public executable?: ("container"|"script"|"barrier");

                    /**
                     * Creates a new Runnable instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Runnable instance
                     */
                    public static create(properties?: google.cloud.batch.v1alpha.IRunnable): google.cloud.batch.v1alpha.Runnable;

                    /**
                     * Encodes the specified Runnable message. Does not implicitly {@link google.cloud.batch.v1alpha.Runnable.verify|verify} messages.
                     * @param message Runnable message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.batch.v1alpha.IRunnable, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Runnable message, length delimited. Does not implicitly {@link google.cloud.batch.v1alpha.Runnable.verify|verify} messages.
                     * @param message Runnable message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.batch.v1alpha.IRunnable, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Runnable message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Runnable
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.batch.v1alpha.Runnable;

                    /**
                     * Decodes a Runnable message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Runnable
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.batch.v1alpha.Runnable;

                    /**
                     * Verifies a Runnable message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Runnable message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Runnable
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.batch.v1alpha.Runnable;

                    /**
                     * Creates a plain object from a Runnable message. Also converts values to other types if specified.
                     * @param message Runnable
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.batch.v1alpha.Runnable, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Runnable to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Runnable
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace Runnable {

                    /** Properties of a Container. */
                    interface IContainer {

                        /** Container imageUri */
                        imageUri?: (string|null);

                        /** Container commands */
                        commands?: (string[]|null);

                        /** Container entrypoint */
                        entrypoint?: (string|null);

                        /** Container volumes */
                        volumes?: (string[]|null);

                        /** Container options */
                        options?: (string|null);

                        /** Container blockExternalNetwork */
                        blockExternalNetwork?: (boolean|null);

                        /** Container username */
                        username?: (string|null);

                        /** Container password */
                        password?: (string|null);

                        /** Container enableImageStreaming */
                        enableImageStreaming?: (boolean|null);
                    }

                    /** Represents a Container. */
                    class Container implements IContainer {

                        /**
                         * Constructs a new Container.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.batch.v1alpha.Runnable.IContainer);

                        /** Container imageUri. */
                        public imageUri: string;

                        /** Container commands. */
                        public commands: string[];

                        /** Container entrypoint. */
                        public entrypoint: string;

                        /** Container volumes. */
                        public volumes: string[];

                        /** Container options. */
                        public options: string;

                        /** Container blockExternalNetwork. */
                        public blockExternalNetwork: boolean;

                        /** Container username. */
                        public username: string;

                        /** Container password. */
                        public password: string;

                        /** Container enableImageStreaming. */
                        public enableImageStreaming: boolean;

                        /**
                         * Creates a new Container instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Container instance
                         */
                        public static create(properties?: google.cloud.batch.v1alpha.Runnable.IContainer): google.cloud.batch.v1alpha.Runnable.Container;

                        /**
                         * Encodes the specified Container message. Does not implicitly {@link google.cloud.batch.v1alpha.Runnable.Container.verify|verify} messages.
                         * @param message Container message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.batch.v1alpha.Runnable.IContainer, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Container message, length delimited. Does not implicitly {@link google.cloud.batch.v1alpha.Runnable.Container.verify|verify} messages.
                         * @param message Container message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.batch.v1alpha.Runnable.IContainer, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Container message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Container
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.batch.v1alpha.Runnable.Container;

                        /**
                         * Decodes a Container message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Container
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.batch.v1alpha.Runnable.Container;

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
                        public static fromObject(object: { [k: string]: any }): google.cloud.batch.v1alpha.Runnable.Container;

                        /**
                         * Creates a plain object from a Container message. Also converts values to other types if specified.
                         * @param message Container
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.batch.v1alpha.Runnable.Container, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

                    /** Properties of a Script. */
                    interface IScript {

                        /** Script path */
                        path?: (string|null);

                        /** Script text */
                        text?: (string|null);
                    }

                    /** Represents a Script. */
                    class Script implements IScript {

                        /**
                         * Constructs a new Script.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.batch.v1alpha.Runnable.IScript);

                        /** Script path. */
                        public path?: (string|null);

                        /** Script text. */
                        public text?: (string|null);

                        /** Script command. */
                        public command?: ("path"|"text");

                        /**
                         * Creates a new Script instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Script instance
                         */
                        public static create(properties?: google.cloud.batch.v1alpha.Runnable.IScript): google.cloud.batch.v1alpha.Runnable.Script;

                        /**
                         * Encodes the specified Script message. Does not implicitly {@link google.cloud.batch.v1alpha.Runnable.Script.verify|verify} messages.
                         * @param message Script message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.batch.v1alpha.Runnable.IScript, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Script message, length delimited. Does not implicitly {@link google.cloud.batch.v1alpha.Runnable.Script.verify|verify} messages.
                         * @param message Script message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.batch.v1alpha.Runnable.IScript, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Script message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Script
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.batch.v1alpha.Runnable.Script;

                        /**
                         * Decodes a Script message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Script
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.batch.v1alpha.Runnable.Script;

                        /**
                         * Verifies a Script message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Script message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Script
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.batch.v1alpha.Runnable.Script;

                        /**
                         * Creates a plain object from a Script message. Also converts values to other types if specified.
                         * @param message Script
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.batch.v1alpha.Runnable.Script, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Script to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for Script
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a Barrier. */
                    interface IBarrier {

                        /** Barrier name */
                        name?: (string|null);
                    }

                    /** Represents a Barrier. */
                    class Barrier implements IBarrier {

                        /**
                         * Constructs a new Barrier.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.batch.v1alpha.Runnable.IBarrier);

                        /** Barrier name. */
                        public name: string;

                        /**
                         * Creates a new Barrier instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Barrier instance
                         */
                        public static create(properties?: google.cloud.batch.v1alpha.Runnable.IBarrier): google.cloud.batch.v1alpha.Runnable.Barrier;

                        /**
                         * Encodes the specified Barrier message. Does not implicitly {@link google.cloud.batch.v1alpha.Runnable.Barrier.verify|verify} messages.
                         * @param message Barrier message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.batch.v1alpha.Runnable.IBarrier, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Barrier message, length delimited. Does not implicitly {@link google.cloud.batch.v1alpha.Runnable.Barrier.verify|verify} messages.
                         * @param message Barrier message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.batch.v1alpha.Runnable.IBarrier, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Barrier message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Barrier
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.batch.v1alpha.Runnable.Barrier;

                        /**
                         * Decodes a Barrier message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Barrier
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.batch.v1alpha.Runnable.Barrier;

                        /**
                         * Verifies a Barrier message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Barrier message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Barrier
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.batch.v1alpha.Runnable.Barrier;

                        /**
                         * Creates a plain object from a Barrier message. Also converts values to other types if specified.
                         * @param message Barrier
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.batch.v1alpha.Runnable.Barrier, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Barrier to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for Barrier
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }
                }

                /** Properties of a TaskSpec. */
                interface ITaskSpec {

                    /** TaskSpec runnables */
                    runnables?: (google.cloud.batch.v1alpha.IRunnable[]|null);

                    /** TaskSpec computeResource */
                    computeResource?: (google.cloud.batch.v1alpha.IComputeResource|null);

                    /** TaskSpec maxRunDuration */
                    maxRunDuration?: (google.protobuf.IDuration|null);

                    /** TaskSpec maxRetryCount */
                    maxRetryCount?: (number|null);

                    /** TaskSpec lifecyclePolicies */
                    lifecyclePolicies?: (google.cloud.batch.v1alpha.ILifecyclePolicy[]|null);

                    /** TaskSpec environments */
                    environments?: ({ [k: string]: string }|null);

                    /** TaskSpec volumes */
                    volumes?: (google.cloud.batch.v1alpha.IVolume[]|null);

                    /** TaskSpec environment */
                    environment?: (google.cloud.batch.v1alpha.IEnvironment|null);
                }

                /** Represents a TaskSpec. */
                class TaskSpec implements ITaskSpec {

                    /**
                     * Constructs a new TaskSpec.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.batch.v1alpha.ITaskSpec);

                    /** TaskSpec runnables. */
                    public runnables: google.cloud.batch.v1alpha.IRunnable[];

                    /** TaskSpec computeResource. */
                    public computeResource?: (google.cloud.batch.v1alpha.IComputeResource|null);

                    /** TaskSpec maxRunDuration. */
                    public maxRunDuration?: (google.protobuf.IDuration|null);

                    /** TaskSpec maxRetryCount. */
                    public maxRetryCount: number;

                    /** TaskSpec lifecyclePolicies. */
                    public lifecyclePolicies: google.cloud.batch.v1alpha.ILifecyclePolicy[];

                    /** TaskSpec environments. */
                    public environments: { [k: string]: string };

                    /** TaskSpec volumes. */
                    public volumes: google.cloud.batch.v1alpha.IVolume[];

                    /** TaskSpec environment. */
                    public environment?: (google.cloud.batch.v1alpha.IEnvironment|null);

                    /**
                     * Creates a new TaskSpec instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TaskSpec instance
                     */
                    public static create(properties?: google.cloud.batch.v1alpha.ITaskSpec): google.cloud.batch.v1alpha.TaskSpec;

                    /**
                     * Encodes the specified TaskSpec message. Does not implicitly {@link google.cloud.batch.v1alpha.TaskSpec.verify|verify} messages.
                     * @param message TaskSpec message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.batch.v1alpha.ITaskSpec, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TaskSpec message, length delimited. Does not implicitly {@link google.cloud.batch.v1alpha.TaskSpec.verify|verify} messages.
                     * @param message TaskSpec message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.batch.v1alpha.ITaskSpec, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TaskSpec message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TaskSpec
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.batch.v1alpha.TaskSpec;

                    /**
                     * Decodes a TaskSpec message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TaskSpec
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.batch.v1alpha.TaskSpec;

                    /**
                     * Verifies a TaskSpec message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TaskSpec message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TaskSpec
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.batch.v1alpha.TaskSpec;

                    /**
                     * Creates a plain object from a TaskSpec message. Also converts values to other types if specified.
                     * @param message TaskSpec
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.batch.v1alpha.TaskSpec, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TaskSpec to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for TaskSpec
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a LifecyclePolicy. */
                interface ILifecyclePolicy {

                    /** LifecyclePolicy action */
                    action?: (google.cloud.batch.v1alpha.LifecyclePolicy.Action|keyof typeof google.cloud.batch.v1alpha.LifecyclePolicy.Action|null);

                    /** LifecyclePolicy actionCondition */
                    actionCondition?: (google.cloud.batch.v1alpha.LifecyclePolicy.IActionCondition|null);
                }

                /** Represents a LifecyclePolicy. */
                class LifecyclePolicy implements ILifecyclePolicy {

                    /**
                     * Constructs a new LifecyclePolicy.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.batch.v1alpha.ILifecyclePolicy);

                    /** LifecyclePolicy action. */
                    public action: (google.cloud.batch.v1alpha.LifecyclePolicy.Action|keyof typeof google.cloud.batch.v1alpha.LifecyclePolicy.Action);

                    /** LifecyclePolicy actionCondition. */
                    public actionCondition?: (google.cloud.batch.v1alpha.LifecyclePolicy.IActionCondition|null);

                    /**
                     * Creates a new LifecyclePolicy instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns LifecyclePolicy instance
                     */
                    public static create(properties?: google.cloud.batch.v1alpha.ILifecyclePolicy): google.cloud.batch.v1alpha.LifecyclePolicy;

                    /**
                     * Encodes the specified LifecyclePolicy message. Does not implicitly {@link google.cloud.batch.v1alpha.LifecyclePolicy.verify|verify} messages.
                     * @param message LifecyclePolicy message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.batch.v1alpha.ILifecyclePolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified LifecyclePolicy message, length delimited. Does not implicitly {@link google.cloud.batch.v1alpha.LifecyclePolicy.verify|verify} messages.
                     * @param message LifecyclePolicy message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.batch.v1alpha.ILifecyclePolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a LifecyclePolicy message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns LifecyclePolicy
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.batch.v1alpha.LifecyclePolicy;

                    /**
                     * Decodes a LifecyclePolicy message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns LifecyclePolicy
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.batch.v1alpha.LifecyclePolicy;

                    /**
                     * Verifies a LifecyclePolicy message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a LifecyclePolicy message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns LifecyclePolicy
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.batch.v1alpha.LifecyclePolicy;

                    /**
                     * Creates a plain object from a LifecyclePolicy message. Also converts values to other types if specified.
                     * @param message LifecyclePolicy
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.batch.v1alpha.LifecyclePolicy, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this LifecyclePolicy to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for LifecyclePolicy
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace LifecyclePolicy {

                    /** Properties of an ActionCondition. */
                    interface IActionCondition {

                        /** ActionCondition exitCodes */
                        exitCodes?: (number[]|null);
                    }

                    /** Represents an ActionCondition. */
                    class ActionCondition implements IActionCondition {

                        /**
                         * Constructs a new ActionCondition.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.batch.v1alpha.LifecyclePolicy.IActionCondition);

                        /** ActionCondition exitCodes. */
                        public exitCodes: number[];

                        /**
                         * Creates a new ActionCondition instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ActionCondition instance
                         */
                        public static create(properties?: google.cloud.batch.v1alpha.LifecyclePolicy.IActionCondition): google.cloud.batch.v1alpha.LifecyclePolicy.ActionCondition;

                        /**
                         * Encodes the specified ActionCondition message. Does not implicitly {@link google.cloud.batch.v1alpha.LifecyclePolicy.ActionCondition.verify|verify} messages.
                         * @param message ActionCondition message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.batch.v1alpha.LifecyclePolicy.IActionCondition, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ActionCondition message, length delimited. Does not implicitly {@link google.cloud.batch.v1alpha.LifecyclePolicy.ActionCondition.verify|verify} messages.
                         * @param message ActionCondition message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.batch.v1alpha.LifecyclePolicy.IActionCondition, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an ActionCondition message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ActionCondition
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.batch.v1alpha.LifecyclePolicy.ActionCondition;

                        /**
                         * Decodes an ActionCondition message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ActionCondition
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.batch.v1alpha.LifecyclePolicy.ActionCondition;

                        /**
                         * Verifies an ActionCondition message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an ActionCondition message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ActionCondition
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.batch.v1alpha.LifecyclePolicy.ActionCondition;

                        /**
                         * Creates a plain object from an ActionCondition message. Also converts values to other types if specified.
                         * @param message ActionCondition
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.batch.v1alpha.LifecyclePolicy.ActionCondition, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ActionCondition to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ActionCondition
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Action enum. */
                    enum Action {
                        ACTION_UNSPECIFIED = 0,
                        RETRY_TASK = 1,
                        FAIL_TASK = 2
                    }
                }

                /** Properties of a Task. */
                interface ITask {

                    /** Task name */
                    name?: (string|null);

                    /** Task status */
                    status?: (google.cloud.batch.v1alpha.ITaskStatus|null);
                }

                /** Represents a Task. */
                class Task implements ITask {

                    /**
                     * Constructs a new Task.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.batch.v1alpha.ITask);

                    /** Task name. */
                    public name: string;

                    /** Task status. */
                    public status?: (google.cloud.batch.v1alpha.ITaskStatus|null);

                    /**
                     * Creates a new Task instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Task instance
                     */
                    public static create(properties?: google.cloud.batch.v1alpha.ITask): google.cloud.batch.v1alpha.Task;

                    /**
                     * Encodes the specified Task message. Does not implicitly {@link google.cloud.batch.v1alpha.Task.verify|verify} messages.
                     * @param message Task message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.batch.v1alpha.ITask, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Task message, length delimited. Does not implicitly {@link google.cloud.batch.v1alpha.Task.verify|verify} messages.
                     * @param message Task message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.batch.v1alpha.ITask, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Task message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Task
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.batch.v1alpha.Task;

                    /**
                     * Decodes a Task message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Task
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.batch.v1alpha.Task;

                    /**
                     * Verifies a Task message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Task message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Task
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.batch.v1alpha.Task;

                    /**
                     * Creates a plain object from a Task message. Also converts values to other types if specified.
                     * @param message Task
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.batch.v1alpha.Task, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Task to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Task
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an Environment. */
                interface IEnvironment {

                    /** Environment variables */
                    variables?: ({ [k: string]: string }|null);

                    /** Environment secretVariables */
                    secretVariables?: ({ [k: string]: string }|null);

                    /** Environment encryptedVariables */
                    encryptedVariables?: (google.cloud.batch.v1alpha.Environment.IKMSEnvMap|null);
                }

                /** Represents an Environment. */
                class Environment implements IEnvironment {

                    /**
                     * Constructs a new Environment.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.batch.v1alpha.IEnvironment);

                    /** Environment variables. */
                    public variables: { [k: string]: string };

                    /** Environment secretVariables. */
                    public secretVariables: { [k: string]: string };

                    /** Environment encryptedVariables. */
                    public encryptedVariables?: (google.cloud.batch.v1alpha.Environment.IKMSEnvMap|null);

                    /**
                     * Creates a new Environment instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Environment instance
                     */
                    public static create(properties?: google.cloud.batch.v1alpha.IEnvironment): google.cloud.batch.v1alpha.Environment;

                    /**
                     * Encodes the specified Environment message. Does not implicitly {@link google.cloud.batch.v1alpha.Environment.verify|verify} messages.
                     * @param message Environment message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.batch.v1alpha.IEnvironment, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Environment message, length delimited. Does not implicitly {@link google.cloud.batch.v1alpha.Environment.verify|verify} messages.
                     * @param message Environment message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.batch.v1alpha.IEnvironment, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an Environment message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Environment
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.batch.v1alpha.Environment;

                    /**
                     * Decodes an Environment message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Environment
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.batch.v1alpha.Environment;

                    /**
                     * Verifies an Environment message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an Environment message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Environment
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.batch.v1alpha.Environment;

                    /**
                     * Creates a plain object from an Environment message. Also converts values to other types if specified.
                     * @param message Environment
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.batch.v1alpha.Environment, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Environment to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Environment
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace Environment {

                    /** Properties of a KMSEnvMap. */
                    interface IKMSEnvMap {

                        /** KMSEnvMap keyName */
                        keyName?: (string|null);

                        /** KMSEnvMap cipherText */
                        cipherText?: (string|null);
                    }

                    /** Represents a KMSEnvMap. */
                    class KMSEnvMap implements IKMSEnvMap {

                        /**
                         * Constructs a new KMSEnvMap.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.batch.v1alpha.Environment.IKMSEnvMap);

                        /** KMSEnvMap keyName. */
                        public keyName: string;

                        /** KMSEnvMap cipherText. */
                        public cipherText: string;

                        /**
                         * Creates a new KMSEnvMap instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns KMSEnvMap instance
                         */
                        public static create(properties?: google.cloud.batch.v1alpha.Environment.IKMSEnvMap): google.cloud.batch.v1alpha.Environment.KMSEnvMap;

                        /**
                         * Encodes the specified KMSEnvMap message. Does not implicitly {@link google.cloud.batch.v1alpha.Environment.KMSEnvMap.verify|verify} messages.
                         * @param message KMSEnvMap message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.batch.v1alpha.Environment.IKMSEnvMap, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified KMSEnvMap message, length delimited. Does not implicitly {@link google.cloud.batch.v1alpha.Environment.KMSEnvMap.verify|verify} messages.
                         * @param message KMSEnvMap message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.batch.v1alpha.Environment.IKMSEnvMap, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a KMSEnvMap message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns KMSEnvMap
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.batch.v1alpha.Environment.KMSEnvMap;

                        /**
                         * Decodes a KMSEnvMap message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns KMSEnvMap
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.batch.v1alpha.Environment.KMSEnvMap;

                        /**
                         * Verifies a KMSEnvMap message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a KMSEnvMap message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns KMSEnvMap
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.batch.v1alpha.Environment.KMSEnvMap;

                        /**
                         * Creates a plain object from a KMSEnvMap message. Also converts values to other types if specified.
                         * @param message KMSEnvMap
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.batch.v1alpha.Environment.KMSEnvMap, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this KMSEnvMap to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for KMSEnvMap
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }
                }

                /** Properties of a Volume. */
                interface IVolume {

                    /** Volume nfs */
                    nfs?: (google.cloud.batch.v1alpha.INFS|null);

                    /** Volume pd */
                    pd?: (google.cloud.batch.v1alpha.IPD|null);

                    /** Volume gcs */
                    gcs?: (google.cloud.batch.v1alpha.IGCS|null);

                    /** Volume deviceName */
                    deviceName?: (string|null);

                    /** Volume mountPath */
                    mountPath?: (string|null);

                    /** Volume mountOptions */
                    mountOptions?: (string[]|null);
                }

                /** Represents a Volume. */
                class Volume implements IVolume {

                    /**
                     * Constructs a new Volume.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.batch.v1alpha.IVolume);

                    /** Volume nfs. */
                    public nfs?: (google.cloud.batch.v1alpha.INFS|null);

                    /** Volume pd. */
                    public pd?: (google.cloud.batch.v1alpha.IPD|null);

                    /** Volume gcs. */
                    public gcs?: (google.cloud.batch.v1alpha.IGCS|null);

                    /** Volume deviceName. */
                    public deviceName?: (string|null);

                    /** Volume mountPath. */
                    public mountPath: string;

                    /** Volume mountOptions. */
                    public mountOptions: string[];

                    /** Volume source. */
                    public source?: ("nfs"|"pd"|"gcs"|"deviceName");

                    /**
                     * Creates a new Volume instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Volume instance
                     */
                    public static create(properties?: google.cloud.batch.v1alpha.IVolume): google.cloud.batch.v1alpha.Volume;

                    /**
                     * Encodes the specified Volume message. Does not implicitly {@link google.cloud.batch.v1alpha.Volume.verify|verify} messages.
                     * @param message Volume message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.batch.v1alpha.IVolume, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Volume message, length delimited. Does not implicitly {@link google.cloud.batch.v1alpha.Volume.verify|verify} messages.
                     * @param message Volume message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.batch.v1alpha.IVolume, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Volume message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Volume
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.batch.v1alpha.Volume;

                    /**
                     * Decodes a Volume message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Volume
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.batch.v1alpha.Volume;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.batch.v1alpha.Volume;

                    /**
                     * Creates a plain object from a Volume message. Also converts values to other types if specified.
                     * @param message Volume
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.batch.v1alpha.Volume, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Volume to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Volume
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a NFS. */
                interface INFS {

                    /** NFS server */
                    server?: (string|null);

                    /** NFS remotePath */
                    remotePath?: (string|null);
                }

                /** Represents a NFS. */
                class NFS implements INFS {

                    /**
                     * Constructs a new NFS.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.batch.v1alpha.INFS);

                    /** NFS server. */
                    public server: string;

                    /** NFS remotePath. */
                    public remotePath: string;

                    /**
                     * Creates a new NFS instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns NFS instance
                     */
                    public static create(properties?: google.cloud.batch.v1alpha.INFS): google.cloud.batch.v1alpha.NFS;

                    /**
                     * Encodes the specified NFS message. Does not implicitly {@link google.cloud.batch.v1alpha.NFS.verify|verify} messages.
                     * @param message NFS message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.batch.v1alpha.INFS, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified NFS message, length delimited. Does not implicitly {@link google.cloud.batch.v1alpha.NFS.verify|verify} messages.
                     * @param message NFS message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.batch.v1alpha.INFS, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a NFS message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns NFS
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.batch.v1alpha.NFS;

                    /**
                     * Decodes a NFS message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns NFS
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.batch.v1alpha.NFS;

                    /**
                     * Verifies a NFS message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a NFS message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns NFS
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.batch.v1alpha.NFS;

                    /**
                     * Creates a plain object from a NFS message. Also converts values to other types if specified.
                     * @param message NFS
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.batch.v1alpha.NFS, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this NFS to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for NFS
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a PD. */
                interface IPD {

                    /** PD disk */
                    disk?: (string|null);

                    /** PD device */
                    device?: (string|null);

                    /** PD existing */
                    existing?: (boolean|null);
                }

                /** Represents a PD. */
                class PD implements IPD {

                    /**
                     * Constructs a new PD.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.batch.v1alpha.IPD);

                    /** PD disk. */
                    public disk: string;

                    /** PD device. */
                    public device: string;

                    /** PD existing. */
                    public existing: boolean;

                    /**
                     * Creates a new PD instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PD instance
                     */
                    public static create(properties?: google.cloud.batch.v1alpha.IPD): google.cloud.batch.v1alpha.PD;

                    /**
                     * Encodes the specified PD message. Does not implicitly {@link google.cloud.batch.v1alpha.PD.verify|verify} messages.
                     * @param message PD message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.batch.v1alpha.IPD, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PD message, length delimited. Does not implicitly {@link google.cloud.batch.v1alpha.PD.verify|verify} messages.
                     * @param message PD message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.batch.v1alpha.IPD, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PD message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PD
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.batch.v1alpha.PD;

                    /**
                     * Decodes a PD message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PD
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.batch.v1alpha.PD;

                    /**
                     * Verifies a PD message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PD message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PD
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.batch.v1alpha.PD;

                    /**
                     * Creates a plain object from a PD message. Also converts values to other types if specified.
                     * @param message PD
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.batch.v1alpha.PD, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PD to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for PD
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GCS. */
                interface IGCS {

                    /** GCS remotePath */
                    remotePath?: (string|null);
                }

                /** Represents a GCS. */
                class GCS implements IGCS {

                    /**
                     * Constructs a new GCS.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.batch.v1alpha.IGCS);

                    /** GCS remotePath. */
                    public remotePath: string;

                    /**
                     * Creates a new GCS instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GCS instance
                     */
                    public static create(properties?: google.cloud.batch.v1alpha.IGCS): google.cloud.batch.v1alpha.GCS;

                    /**
                     * Encodes the specified GCS message. Does not implicitly {@link google.cloud.batch.v1alpha.GCS.verify|verify} messages.
                     * @param message GCS message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.batch.v1alpha.IGCS, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GCS message, length delimited. Does not implicitly {@link google.cloud.batch.v1alpha.GCS.verify|verify} messages.
                     * @param message GCS message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.batch.v1alpha.IGCS, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GCS message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GCS
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.batch.v1alpha.GCS;

                    /**
                     * Decodes a GCS message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GCS
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.batch.v1alpha.GCS;

                    /**
                     * Verifies a GCS message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GCS message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GCS
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.batch.v1alpha.GCS;

                    /**
                     * Creates a plain object from a GCS message. Also converts values to other types if specified.
                     * @param message GCS
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.batch.v1alpha.GCS, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GCS to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GCS
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
            STREET_VIEW = 4
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

            /** MessageOptions deprecatedLegacyJsonFieldConflicts */
            deprecatedLegacyJsonFieldConflicts?: (boolean|null);

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

            /** FieldOptions target */
            target?: (google.protobuf.FieldOptions.OptionTargetType|keyof typeof google.protobuf.FieldOptions.OptionTargetType|null);

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

            /** FieldOptions target. */
            public target: (google.protobuf.FieldOptions.OptionTargetType|keyof typeof google.protobuf.FieldOptions.OptionTargetType);

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

            /** EnumOptions deprecatedLegacyJsonFieldConflicts */
            deprecatedLegacyJsonFieldConflicts?: (boolean|null);

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
