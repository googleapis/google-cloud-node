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

        /** Namespace scheduler. */
        namespace scheduler {

            /** Namespace v1. */
            namespace v1 {

                /** Represents a CloudScheduler */
                class CloudScheduler extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new CloudScheduler service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new CloudScheduler service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): CloudScheduler;

                    /**
                     * Calls ListJobs.
                     * @param request ListJobsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListJobsResponse
                     */
                    public listJobs(request: google.cloud.scheduler.v1.IListJobsRequest, callback: google.cloud.scheduler.v1.CloudScheduler.ListJobsCallback): void;

                    /**
                     * Calls ListJobs.
                     * @param request ListJobsRequest message or plain object
                     * @returns Promise
                     */
                    public listJobs(request: google.cloud.scheduler.v1.IListJobsRequest): Promise<google.cloud.scheduler.v1.ListJobsResponse>;

                    /**
                     * Calls GetJob.
                     * @param request GetJobRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Job
                     */
                    public getJob(request: google.cloud.scheduler.v1.IGetJobRequest, callback: google.cloud.scheduler.v1.CloudScheduler.GetJobCallback): void;

                    /**
                     * Calls GetJob.
                     * @param request GetJobRequest message or plain object
                     * @returns Promise
                     */
                    public getJob(request: google.cloud.scheduler.v1.IGetJobRequest): Promise<google.cloud.scheduler.v1.Job>;

                    /**
                     * Calls CreateJob.
                     * @param request CreateJobRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Job
                     */
                    public createJob(request: google.cloud.scheduler.v1.ICreateJobRequest, callback: google.cloud.scheduler.v1.CloudScheduler.CreateJobCallback): void;

                    /**
                     * Calls CreateJob.
                     * @param request CreateJobRequest message or plain object
                     * @returns Promise
                     */
                    public createJob(request: google.cloud.scheduler.v1.ICreateJobRequest): Promise<google.cloud.scheduler.v1.Job>;

                    /**
                     * Calls UpdateJob.
                     * @param request UpdateJobRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Job
                     */
                    public updateJob(request: google.cloud.scheduler.v1.IUpdateJobRequest, callback: google.cloud.scheduler.v1.CloudScheduler.UpdateJobCallback): void;

                    /**
                     * Calls UpdateJob.
                     * @param request UpdateJobRequest message or plain object
                     * @returns Promise
                     */
                    public updateJob(request: google.cloud.scheduler.v1.IUpdateJobRequest): Promise<google.cloud.scheduler.v1.Job>;

                    /**
                     * Calls DeleteJob.
                     * @param request DeleteJobRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Empty
                     */
                    public deleteJob(request: google.cloud.scheduler.v1.IDeleteJobRequest, callback: google.cloud.scheduler.v1.CloudScheduler.DeleteJobCallback): void;

                    /**
                     * Calls DeleteJob.
                     * @param request DeleteJobRequest message or plain object
                     * @returns Promise
                     */
                    public deleteJob(request: google.cloud.scheduler.v1.IDeleteJobRequest): Promise<google.protobuf.Empty>;

                    /**
                     * Calls PauseJob.
                     * @param request PauseJobRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Job
                     */
                    public pauseJob(request: google.cloud.scheduler.v1.IPauseJobRequest, callback: google.cloud.scheduler.v1.CloudScheduler.PauseJobCallback): void;

                    /**
                     * Calls PauseJob.
                     * @param request PauseJobRequest message or plain object
                     * @returns Promise
                     */
                    public pauseJob(request: google.cloud.scheduler.v1.IPauseJobRequest): Promise<google.cloud.scheduler.v1.Job>;

                    /**
                     * Calls ResumeJob.
                     * @param request ResumeJobRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Job
                     */
                    public resumeJob(request: google.cloud.scheduler.v1.IResumeJobRequest, callback: google.cloud.scheduler.v1.CloudScheduler.ResumeJobCallback): void;

                    /**
                     * Calls ResumeJob.
                     * @param request ResumeJobRequest message or plain object
                     * @returns Promise
                     */
                    public resumeJob(request: google.cloud.scheduler.v1.IResumeJobRequest): Promise<google.cloud.scheduler.v1.Job>;

                    /**
                     * Calls RunJob.
                     * @param request RunJobRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Job
                     */
                    public runJob(request: google.cloud.scheduler.v1.IRunJobRequest, callback: google.cloud.scheduler.v1.CloudScheduler.RunJobCallback): void;

                    /**
                     * Calls RunJob.
                     * @param request RunJobRequest message or plain object
                     * @returns Promise
                     */
                    public runJob(request: google.cloud.scheduler.v1.IRunJobRequest): Promise<google.cloud.scheduler.v1.Job>;
                }

                namespace CloudScheduler {

                    /**
                     * Callback as used by {@link google.cloud.scheduler.v1.CloudScheduler#listJobs}.
                     * @param error Error, if any
                     * @param [response] ListJobsResponse
                     */
                    type ListJobsCallback = (error: (Error|null), response?: google.cloud.scheduler.v1.ListJobsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.scheduler.v1.CloudScheduler#getJob}.
                     * @param error Error, if any
                     * @param [response] Job
                     */
                    type GetJobCallback = (error: (Error|null), response?: google.cloud.scheduler.v1.Job) => void;

                    /**
                     * Callback as used by {@link google.cloud.scheduler.v1.CloudScheduler#createJob}.
                     * @param error Error, if any
                     * @param [response] Job
                     */
                    type CreateJobCallback = (error: (Error|null), response?: google.cloud.scheduler.v1.Job) => void;

                    /**
                     * Callback as used by {@link google.cloud.scheduler.v1.CloudScheduler#updateJob}.
                     * @param error Error, if any
                     * @param [response] Job
                     */
                    type UpdateJobCallback = (error: (Error|null), response?: google.cloud.scheduler.v1.Job) => void;

                    /**
                     * Callback as used by {@link google.cloud.scheduler.v1.CloudScheduler#deleteJob}.
                     * @param error Error, if any
                     * @param [response] Empty
                     */
                    type DeleteJobCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                    /**
                     * Callback as used by {@link google.cloud.scheduler.v1.CloudScheduler#pauseJob}.
                     * @param error Error, if any
                     * @param [response] Job
                     */
                    type PauseJobCallback = (error: (Error|null), response?: google.cloud.scheduler.v1.Job) => void;

                    /**
                     * Callback as used by {@link google.cloud.scheduler.v1.CloudScheduler#resumeJob}.
                     * @param error Error, if any
                     * @param [response] Job
                     */
                    type ResumeJobCallback = (error: (Error|null), response?: google.cloud.scheduler.v1.Job) => void;

                    /**
                     * Callback as used by {@link google.cloud.scheduler.v1.CloudScheduler#runJob}.
                     * @param error Error, if any
                     * @param [response] Job
                     */
                    type RunJobCallback = (error: (Error|null), response?: google.cloud.scheduler.v1.Job) => void;
                }

                /** Properties of a ListJobsRequest. */
                interface IListJobsRequest {

                    /** ListJobsRequest parent */
                    parent?: (string|null);

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
                    constructor(properties?: google.cloud.scheduler.v1.IListJobsRequest);

                    /** ListJobsRequest parent. */
                    public parent: string;

                    /** ListJobsRequest pageSize. */
                    public pageSize: number;

                    /** ListJobsRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListJobsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListJobsRequest instance
                     */
                    public static create(properties?: google.cloud.scheduler.v1.IListJobsRequest): google.cloud.scheduler.v1.ListJobsRequest;

                    /**
                     * Encodes the specified ListJobsRequest message. Does not implicitly {@link google.cloud.scheduler.v1.ListJobsRequest.verify|verify} messages.
                     * @param message ListJobsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.scheduler.v1.IListJobsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListJobsRequest message, length delimited. Does not implicitly {@link google.cloud.scheduler.v1.ListJobsRequest.verify|verify} messages.
                     * @param message ListJobsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.scheduler.v1.IListJobsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListJobsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListJobsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.scheduler.v1.ListJobsRequest;

                    /**
                     * Decodes a ListJobsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListJobsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.scheduler.v1.ListJobsRequest;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.scheduler.v1.ListJobsRequest;

                    /**
                     * Creates a plain object from a ListJobsRequest message. Also converts values to other types if specified.
                     * @param message ListJobsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.scheduler.v1.ListJobsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListJobsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListJobsResponse. */
                interface IListJobsResponse {

                    /** ListJobsResponse jobs */
                    jobs?: (google.cloud.scheduler.v1.IJob[]|null);

                    /** ListJobsResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListJobsResponse. */
                class ListJobsResponse implements IListJobsResponse {

                    /**
                     * Constructs a new ListJobsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.scheduler.v1.IListJobsResponse);

                    /** ListJobsResponse jobs. */
                    public jobs: google.cloud.scheduler.v1.IJob[];

                    /** ListJobsResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListJobsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListJobsResponse instance
                     */
                    public static create(properties?: google.cloud.scheduler.v1.IListJobsResponse): google.cloud.scheduler.v1.ListJobsResponse;

                    /**
                     * Encodes the specified ListJobsResponse message. Does not implicitly {@link google.cloud.scheduler.v1.ListJobsResponse.verify|verify} messages.
                     * @param message ListJobsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.scheduler.v1.IListJobsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListJobsResponse message, length delimited. Does not implicitly {@link google.cloud.scheduler.v1.ListJobsResponse.verify|verify} messages.
                     * @param message ListJobsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.scheduler.v1.IListJobsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListJobsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListJobsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.scheduler.v1.ListJobsResponse;

                    /**
                     * Decodes a ListJobsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListJobsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.scheduler.v1.ListJobsResponse;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.scheduler.v1.ListJobsResponse;

                    /**
                     * Creates a plain object from a ListJobsResponse message. Also converts values to other types if specified.
                     * @param message ListJobsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.scheduler.v1.ListJobsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListJobsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
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
                    constructor(properties?: google.cloud.scheduler.v1.IGetJobRequest);

                    /** GetJobRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetJobRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetJobRequest instance
                     */
                    public static create(properties?: google.cloud.scheduler.v1.IGetJobRequest): google.cloud.scheduler.v1.GetJobRequest;

                    /**
                     * Encodes the specified GetJobRequest message. Does not implicitly {@link google.cloud.scheduler.v1.GetJobRequest.verify|verify} messages.
                     * @param message GetJobRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.scheduler.v1.IGetJobRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetJobRequest message, length delimited. Does not implicitly {@link google.cloud.scheduler.v1.GetJobRequest.verify|verify} messages.
                     * @param message GetJobRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.scheduler.v1.IGetJobRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetJobRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetJobRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.scheduler.v1.GetJobRequest;

                    /**
                     * Decodes a GetJobRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetJobRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.scheduler.v1.GetJobRequest;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.scheduler.v1.GetJobRequest;

                    /**
                     * Creates a plain object from a GetJobRequest message. Also converts values to other types if specified.
                     * @param message GetJobRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.scheduler.v1.GetJobRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetJobRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a CreateJobRequest. */
                interface ICreateJobRequest {

                    /** CreateJobRequest parent */
                    parent?: (string|null);

                    /** CreateJobRequest job */
                    job?: (google.cloud.scheduler.v1.IJob|null);
                }

                /** Represents a CreateJobRequest. */
                class CreateJobRequest implements ICreateJobRequest {

                    /**
                     * Constructs a new CreateJobRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.scheduler.v1.ICreateJobRequest);

                    /** CreateJobRequest parent. */
                    public parent: string;

                    /** CreateJobRequest job. */
                    public job?: (google.cloud.scheduler.v1.IJob|null);

                    /**
                     * Creates a new CreateJobRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateJobRequest instance
                     */
                    public static create(properties?: google.cloud.scheduler.v1.ICreateJobRequest): google.cloud.scheduler.v1.CreateJobRequest;

                    /**
                     * Encodes the specified CreateJobRequest message. Does not implicitly {@link google.cloud.scheduler.v1.CreateJobRequest.verify|verify} messages.
                     * @param message CreateJobRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.scheduler.v1.ICreateJobRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateJobRequest message, length delimited. Does not implicitly {@link google.cloud.scheduler.v1.CreateJobRequest.verify|verify} messages.
                     * @param message CreateJobRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.scheduler.v1.ICreateJobRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateJobRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateJobRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.scheduler.v1.CreateJobRequest;

                    /**
                     * Decodes a CreateJobRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateJobRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.scheduler.v1.CreateJobRequest;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.scheduler.v1.CreateJobRequest;

                    /**
                     * Creates a plain object from a CreateJobRequest message. Also converts values to other types if specified.
                     * @param message CreateJobRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.scheduler.v1.CreateJobRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateJobRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an UpdateJobRequest. */
                interface IUpdateJobRequest {

                    /** UpdateJobRequest job */
                    job?: (google.cloud.scheduler.v1.IJob|null);

                    /** UpdateJobRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);
                }

                /** Represents an UpdateJobRequest. */
                class UpdateJobRequest implements IUpdateJobRequest {

                    /**
                     * Constructs a new UpdateJobRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.scheduler.v1.IUpdateJobRequest);

                    /** UpdateJobRequest job. */
                    public job?: (google.cloud.scheduler.v1.IJob|null);

                    /** UpdateJobRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /**
                     * Creates a new UpdateJobRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateJobRequest instance
                     */
                    public static create(properties?: google.cloud.scheduler.v1.IUpdateJobRequest): google.cloud.scheduler.v1.UpdateJobRequest;

                    /**
                     * Encodes the specified UpdateJobRequest message. Does not implicitly {@link google.cloud.scheduler.v1.UpdateJobRequest.verify|verify} messages.
                     * @param message UpdateJobRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.scheduler.v1.IUpdateJobRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateJobRequest message, length delimited. Does not implicitly {@link google.cloud.scheduler.v1.UpdateJobRequest.verify|verify} messages.
                     * @param message UpdateJobRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.scheduler.v1.IUpdateJobRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateJobRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateJobRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.scheduler.v1.UpdateJobRequest;

                    /**
                     * Decodes an UpdateJobRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateJobRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.scheduler.v1.UpdateJobRequest;

                    /**
                     * Verifies an UpdateJobRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateJobRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateJobRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.scheduler.v1.UpdateJobRequest;

                    /**
                     * Creates a plain object from an UpdateJobRequest message. Also converts values to other types if specified.
                     * @param message UpdateJobRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.scheduler.v1.UpdateJobRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateJobRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DeleteJobRequest. */
                interface IDeleteJobRequest {

                    /** DeleteJobRequest name */
                    name?: (string|null);
                }

                /** Represents a DeleteJobRequest. */
                class DeleteJobRequest implements IDeleteJobRequest {

                    /**
                     * Constructs a new DeleteJobRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.scheduler.v1.IDeleteJobRequest);

                    /** DeleteJobRequest name. */
                    public name: string;

                    /**
                     * Creates a new DeleteJobRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteJobRequest instance
                     */
                    public static create(properties?: google.cloud.scheduler.v1.IDeleteJobRequest): google.cloud.scheduler.v1.DeleteJobRequest;

                    /**
                     * Encodes the specified DeleteJobRequest message. Does not implicitly {@link google.cloud.scheduler.v1.DeleteJobRequest.verify|verify} messages.
                     * @param message DeleteJobRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.scheduler.v1.IDeleteJobRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteJobRequest message, length delimited. Does not implicitly {@link google.cloud.scheduler.v1.DeleteJobRequest.verify|verify} messages.
                     * @param message DeleteJobRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.scheduler.v1.IDeleteJobRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteJobRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteJobRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.scheduler.v1.DeleteJobRequest;

                    /**
                     * Decodes a DeleteJobRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteJobRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.scheduler.v1.DeleteJobRequest;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.scheduler.v1.DeleteJobRequest;

                    /**
                     * Creates a plain object from a DeleteJobRequest message. Also converts values to other types if specified.
                     * @param message DeleteJobRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.scheduler.v1.DeleteJobRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteJobRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a PauseJobRequest. */
                interface IPauseJobRequest {

                    /** PauseJobRequest name */
                    name?: (string|null);
                }

                /** Represents a PauseJobRequest. */
                class PauseJobRequest implements IPauseJobRequest {

                    /**
                     * Constructs a new PauseJobRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.scheduler.v1.IPauseJobRequest);

                    /** PauseJobRequest name. */
                    public name: string;

                    /**
                     * Creates a new PauseJobRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PauseJobRequest instance
                     */
                    public static create(properties?: google.cloud.scheduler.v1.IPauseJobRequest): google.cloud.scheduler.v1.PauseJobRequest;

                    /**
                     * Encodes the specified PauseJobRequest message. Does not implicitly {@link google.cloud.scheduler.v1.PauseJobRequest.verify|verify} messages.
                     * @param message PauseJobRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.scheduler.v1.IPauseJobRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PauseJobRequest message, length delimited. Does not implicitly {@link google.cloud.scheduler.v1.PauseJobRequest.verify|verify} messages.
                     * @param message PauseJobRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.scheduler.v1.IPauseJobRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PauseJobRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PauseJobRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.scheduler.v1.PauseJobRequest;

                    /**
                     * Decodes a PauseJobRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PauseJobRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.scheduler.v1.PauseJobRequest;

                    /**
                     * Verifies a PauseJobRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PauseJobRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PauseJobRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.scheduler.v1.PauseJobRequest;

                    /**
                     * Creates a plain object from a PauseJobRequest message. Also converts values to other types if specified.
                     * @param message PauseJobRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.scheduler.v1.PauseJobRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PauseJobRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ResumeJobRequest. */
                interface IResumeJobRequest {

                    /** ResumeJobRequest name */
                    name?: (string|null);
                }

                /** Represents a ResumeJobRequest. */
                class ResumeJobRequest implements IResumeJobRequest {

                    /**
                     * Constructs a new ResumeJobRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.scheduler.v1.IResumeJobRequest);

                    /** ResumeJobRequest name. */
                    public name: string;

                    /**
                     * Creates a new ResumeJobRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ResumeJobRequest instance
                     */
                    public static create(properties?: google.cloud.scheduler.v1.IResumeJobRequest): google.cloud.scheduler.v1.ResumeJobRequest;

                    /**
                     * Encodes the specified ResumeJobRequest message. Does not implicitly {@link google.cloud.scheduler.v1.ResumeJobRequest.verify|verify} messages.
                     * @param message ResumeJobRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.scheduler.v1.IResumeJobRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ResumeJobRequest message, length delimited. Does not implicitly {@link google.cloud.scheduler.v1.ResumeJobRequest.verify|verify} messages.
                     * @param message ResumeJobRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.scheduler.v1.IResumeJobRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ResumeJobRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ResumeJobRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.scheduler.v1.ResumeJobRequest;

                    /**
                     * Decodes a ResumeJobRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ResumeJobRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.scheduler.v1.ResumeJobRequest;

                    /**
                     * Verifies a ResumeJobRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ResumeJobRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ResumeJobRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.scheduler.v1.ResumeJobRequest;

                    /**
                     * Creates a plain object from a ResumeJobRequest message. Also converts values to other types if specified.
                     * @param message ResumeJobRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.scheduler.v1.ResumeJobRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ResumeJobRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a RunJobRequest. */
                interface IRunJobRequest {

                    /** RunJobRequest name */
                    name?: (string|null);
                }

                /** Represents a RunJobRequest. */
                class RunJobRequest implements IRunJobRequest {

                    /**
                     * Constructs a new RunJobRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.scheduler.v1.IRunJobRequest);

                    /** RunJobRequest name. */
                    public name: string;

                    /**
                     * Creates a new RunJobRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RunJobRequest instance
                     */
                    public static create(properties?: google.cloud.scheduler.v1.IRunJobRequest): google.cloud.scheduler.v1.RunJobRequest;

                    /**
                     * Encodes the specified RunJobRequest message. Does not implicitly {@link google.cloud.scheduler.v1.RunJobRequest.verify|verify} messages.
                     * @param message RunJobRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.scheduler.v1.IRunJobRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RunJobRequest message, length delimited. Does not implicitly {@link google.cloud.scheduler.v1.RunJobRequest.verify|verify} messages.
                     * @param message RunJobRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.scheduler.v1.IRunJobRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RunJobRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RunJobRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.scheduler.v1.RunJobRequest;

                    /**
                     * Decodes a RunJobRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RunJobRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.scheduler.v1.RunJobRequest;

                    /**
                     * Verifies a RunJobRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RunJobRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RunJobRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.scheduler.v1.RunJobRequest;

                    /**
                     * Creates a plain object from a RunJobRequest message. Also converts values to other types if specified.
                     * @param message RunJobRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.scheduler.v1.RunJobRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RunJobRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a Job. */
                interface IJob {

                    /** Job name */
                    name?: (string|null);

                    /** Job description */
                    description?: (string|null);

                    /** Job pubsubTarget */
                    pubsubTarget?: (google.cloud.scheduler.v1.IPubsubTarget|null);

                    /** Job appEngineHttpTarget */
                    appEngineHttpTarget?: (google.cloud.scheduler.v1.IAppEngineHttpTarget|null);

                    /** Job httpTarget */
                    httpTarget?: (google.cloud.scheduler.v1.IHttpTarget|null);

                    /** Job schedule */
                    schedule?: (string|null);

                    /** Job timeZone */
                    timeZone?: (string|null);

                    /** Job userUpdateTime */
                    userUpdateTime?: (google.protobuf.ITimestamp|null);

                    /** Job state */
                    state?: (google.cloud.scheduler.v1.Job.State|keyof typeof google.cloud.scheduler.v1.Job.State|null);

                    /** Job status */
                    status?: (google.rpc.IStatus|null);

                    /** Job scheduleTime */
                    scheduleTime?: (google.protobuf.ITimestamp|null);

                    /** Job lastAttemptTime */
                    lastAttemptTime?: (google.protobuf.ITimestamp|null);

                    /** Job retryConfig */
                    retryConfig?: (google.cloud.scheduler.v1.IRetryConfig|null);

                    /** Job attemptDeadline */
                    attemptDeadline?: (google.protobuf.IDuration|null);
                }

                /** Represents a Job. */
                class Job implements IJob {

                    /**
                     * Constructs a new Job.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.scheduler.v1.IJob);

                    /** Job name. */
                    public name: string;

                    /** Job description. */
                    public description: string;

                    /** Job pubsubTarget. */
                    public pubsubTarget?: (google.cloud.scheduler.v1.IPubsubTarget|null);

                    /** Job appEngineHttpTarget. */
                    public appEngineHttpTarget?: (google.cloud.scheduler.v1.IAppEngineHttpTarget|null);

                    /** Job httpTarget. */
                    public httpTarget?: (google.cloud.scheduler.v1.IHttpTarget|null);

                    /** Job schedule. */
                    public schedule: string;

                    /** Job timeZone. */
                    public timeZone: string;

                    /** Job userUpdateTime. */
                    public userUpdateTime?: (google.protobuf.ITimestamp|null);

                    /** Job state. */
                    public state: (google.cloud.scheduler.v1.Job.State|keyof typeof google.cloud.scheduler.v1.Job.State);

                    /** Job status. */
                    public status?: (google.rpc.IStatus|null);

                    /** Job scheduleTime. */
                    public scheduleTime?: (google.protobuf.ITimestamp|null);

                    /** Job lastAttemptTime. */
                    public lastAttemptTime?: (google.protobuf.ITimestamp|null);

                    /** Job retryConfig. */
                    public retryConfig?: (google.cloud.scheduler.v1.IRetryConfig|null);

                    /** Job attemptDeadline. */
                    public attemptDeadline?: (google.protobuf.IDuration|null);

                    /** Job target. */
                    public target?: ("pubsubTarget"|"appEngineHttpTarget"|"httpTarget");

                    /**
                     * Creates a new Job instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Job instance
                     */
                    public static create(properties?: google.cloud.scheduler.v1.IJob): google.cloud.scheduler.v1.Job;

                    /**
                     * Encodes the specified Job message. Does not implicitly {@link google.cloud.scheduler.v1.Job.verify|verify} messages.
                     * @param message Job message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.scheduler.v1.IJob, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Job message, length delimited. Does not implicitly {@link google.cloud.scheduler.v1.Job.verify|verify} messages.
                     * @param message Job message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.scheduler.v1.IJob, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Job message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Job
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.scheduler.v1.Job;

                    /**
                     * Decodes a Job message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Job
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.scheduler.v1.Job;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.scheduler.v1.Job;

                    /**
                     * Creates a plain object from a Job message. Also converts values to other types if specified.
                     * @param message Job
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.scheduler.v1.Job, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Job to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace Job {

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        ENABLED = 1,
                        PAUSED = 2,
                        DISABLED = 3,
                        UPDATE_FAILED = 4
                    }
                }

                /** Properties of a RetryConfig. */
                interface IRetryConfig {

                    /** RetryConfig retryCount */
                    retryCount?: (number|null);

                    /** RetryConfig maxRetryDuration */
                    maxRetryDuration?: (google.protobuf.IDuration|null);

                    /** RetryConfig minBackoffDuration */
                    minBackoffDuration?: (google.protobuf.IDuration|null);

                    /** RetryConfig maxBackoffDuration */
                    maxBackoffDuration?: (google.protobuf.IDuration|null);

                    /** RetryConfig maxDoublings */
                    maxDoublings?: (number|null);
                }

                /** Represents a RetryConfig. */
                class RetryConfig implements IRetryConfig {

                    /**
                     * Constructs a new RetryConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.scheduler.v1.IRetryConfig);

                    /** RetryConfig retryCount. */
                    public retryCount: number;

                    /** RetryConfig maxRetryDuration. */
                    public maxRetryDuration?: (google.protobuf.IDuration|null);

                    /** RetryConfig minBackoffDuration. */
                    public minBackoffDuration?: (google.protobuf.IDuration|null);

                    /** RetryConfig maxBackoffDuration. */
                    public maxBackoffDuration?: (google.protobuf.IDuration|null);

                    /** RetryConfig maxDoublings. */
                    public maxDoublings: number;

                    /**
                     * Creates a new RetryConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RetryConfig instance
                     */
                    public static create(properties?: google.cloud.scheduler.v1.IRetryConfig): google.cloud.scheduler.v1.RetryConfig;

                    /**
                     * Encodes the specified RetryConfig message. Does not implicitly {@link google.cloud.scheduler.v1.RetryConfig.verify|verify} messages.
                     * @param message RetryConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.scheduler.v1.IRetryConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RetryConfig message, length delimited. Does not implicitly {@link google.cloud.scheduler.v1.RetryConfig.verify|verify} messages.
                     * @param message RetryConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.scheduler.v1.IRetryConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RetryConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RetryConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.scheduler.v1.RetryConfig;

                    /**
                     * Decodes a RetryConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RetryConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.scheduler.v1.RetryConfig;

                    /**
                     * Verifies a RetryConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RetryConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RetryConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.scheduler.v1.RetryConfig;

                    /**
                     * Creates a plain object from a RetryConfig message. Also converts values to other types if specified.
                     * @param message RetryConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.scheduler.v1.RetryConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RetryConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a HttpTarget. */
                interface IHttpTarget {

                    /** HttpTarget uri */
                    uri?: (string|null);

                    /** HttpTarget httpMethod */
                    httpMethod?: (google.cloud.scheduler.v1.HttpMethod|keyof typeof google.cloud.scheduler.v1.HttpMethod|null);

                    /** HttpTarget headers */
                    headers?: ({ [k: string]: string }|null);

                    /** HttpTarget body */
                    body?: (Uint8Array|string|null);

                    /** HttpTarget oauthToken */
                    oauthToken?: (google.cloud.scheduler.v1.IOAuthToken|null);

                    /** HttpTarget oidcToken */
                    oidcToken?: (google.cloud.scheduler.v1.IOidcToken|null);
                }

                /** Represents a HttpTarget. */
                class HttpTarget implements IHttpTarget {

                    /**
                     * Constructs a new HttpTarget.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.scheduler.v1.IHttpTarget);

                    /** HttpTarget uri. */
                    public uri: string;

                    /** HttpTarget httpMethod. */
                    public httpMethod: (google.cloud.scheduler.v1.HttpMethod|keyof typeof google.cloud.scheduler.v1.HttpMethod);

                    /** HttpTarget headers. */
                    public headers: { [k: string]: string };

                    /** HttpTarget body. */
                    public body: (Uint8Array|string);

                    /** HttpTarget oauthToken. */
                    public oauthToken?: (google.cloud.scheduler.v1.IOAuthToken|null);

                    /** HttpTarget oidcToken. */
                    public oidcToken?: (google.cloud.scheduler.v1.IOidcToken|null);

                    /** HttpTarget authorizationHeader. */
                    public authorizationHeader?: ("oauthToken"|"oidcToken");

                    /**
                     * Creates a new HttpTarget instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns HttpTarget instance
                     */
                    public static create(properties?: google.cloud.scheduler.v1.IHttpTarget): google.cloud.scheduler.v1.HttpTarget;

                    /**
                     * Encodes the specified HttpTarget message. Does not implicitly {@link google.cloud.scheduler.v1.HttpTarget.verify|verify} messages.
                     * @param message HttpTarget message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.scheduler.v1.IHttpTarget, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified HttpTarget message, length delimited. Does not implicitly {@link google.cloud.scheduler.v1.HttpTarget.verify|verify} messages.
                     * @param message HttpTarget message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.scheduler.v1.IHttpTarget, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a HttpTarget message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns HttpTarget
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.scheduler.v1.HttpTarget;

                    /**
                     * Decodes a HttpTarget message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns HttpTarget
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.scheduler.v1.HttpTarget;

                    /**
                     * Verifies a HttpTarget message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a HttpTarget message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns HttpTarget
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.scheduler.v1.HttpTarget;

                    /**
                     * Creates a plain object from a HttpTarget message. Also converts values to other types if specified.
                     * @param message HttpTarget
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.scheduler.v1.HttpTarget, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this HttpTarget to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an AppEngineHttpTarget. */
                interface IAppEngineHttpTarget {

                    /** AppEngineHttpTarget httpMethod */
                    httpMethod?: (google.cloud.scheduler.v1.HttpMethod|keyof typeof google.cloud.scheduler.v1.HttpMethod|null);

                    /** AppEngineHttpTarget appEngineRouting */
                    appEngineRouting?: (google.cloud.scheduler.v1.IAppEngineRouting|null);

                    /** AppEngineHttpTarget relativeUri */
                    relativeUri?: (string|null);

                    /** AppEngineHttpTarget headers */
                    headers?: ({ [k: string]: string }|null);

                    /** AppEngineHttpTarget body */
                    body?: (Uint8Array|string|null);
                }

                /** Represents an AppEngineHttpTarget. */
                class AppEngineHttpTarget implements IAppEngineHttpTarget {

                    /**
                     * Constructs a new AppEngineHttpTarget.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.scheduler.v1.IAppEngineHttpTarget);

                    /** AppEngineHttpTarget httpMethod. */
                    public httpMethod: (google.cloud.scheduler.v1.HttpMethod|keyof typeof google.cloud.scheduler.v1.HttpMethod);

                    /** AppEngineHttpTarget appEngineRouting. */
                    public appEngineRouting?: (google.cloud.scheduler.v1.IAppEngineRouting|null);

                    /** AppEngineHttpTarget relativeUri. */
                    public relativeUri: string;

                    /** AppEngineHttpTarget headers. */
                    public headers: { [k: string]: string };

                    /** AppEngineHttpTarget body. */
                    public body: (Uint8Array|string);

                    /**
                     * Creates a new AppEngineHttpTarget instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AppEngineHttpTarget instance
                     */
                    public static create(properties?: google.cloud.scheduler.v1.IAppEngineHttpTarget): google.cloud.scheduler.v1.AppEngineHttpTarget;

                    /**
                     * Encodes the specified AppEngineHttpTarget message. Does not implicitly {@link google.cloud.scheduler.v1.AppEngineHttpTarget.verify|verify} messages.
                     * @param message AppEngineHttpTarget message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.scheduler.v1.IAppEngineHttpTarget, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AppEngineHttpTarget message, length delimited. Does not implicitly {@link google.cloud.scheduler.v1.AppEngineHttpTarget.verify|verify} messages.
                     * @param message AppEngineHttpTarget message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.scheduler.v1.IAppEngineHttpTarget, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AppEngineHttpTarget message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AppEngineHttpTarget
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.scheduler.v1.AppEngineHttpTarget;

                    /**
                     * Decodes an AppEngineHttpTarget message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AppEngineHttpTarget
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.scheduler.v1.AppEngineHttpTarget;

                    /**
                     * Verifies an AppEngineHttpTarget message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AppEngineHttpTarget message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AppEngineHttpTarget
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.scheduler.v1.AppEngineHttpTarget;

                    /**
                     * Creates a plain object from an AppEngineHttpTarget message. Also converts values to other types if specified.
                     * @param message AppEngineHttpTarget
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.scheduler.v1.AppEngineHttpTarget, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AppEngineHttpTarget to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a PubsubTarget. */
                interface IPubsubTarget {

                    /** PubsubTarget topicName */
                    topicName?: (string|null);

                    /** PubsubTarget data */
                    data?: (Uint8Array|string|null);

                    /** PubsubTarget attributes */
                    attributes?: ({ [k: string]: string }|null);
                }

                /** Represents a PubsubTarget. */
                class PubsubTarget implements IPubsubTarget {

                    /**
                     * Constructs a new PubsubTarget.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.scheduler.v1.IPubsubTarget);

                    /** PubsubTarget topicName. */
                    public topicName: string;

                    /** PubsubTarget data. */
                    public data: (Uint8Array|string);

                    /** PubsubTarget attributes. */
                    public attributes: { [k: string]: string };

                    /**
                     * Creates a new PubsubTarget instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PubsubTarget instance
                     */
                    public static create(properties?: google.cloud.scheduler.v1.IPubsubTarget): google.cloud.scheduler.v1.PubsubTarget;

                    /**
                     * Encodes the specified PubsubTarget message. Does not implicitly {@link google.cloud.scheduler.v1.PubsubTarget.verify|verify} messages.
                     * @param message PubsubTarget message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.scheduler.v1.IPubsubTarget, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PubsubTarget message, length delimited. Does not implicitly {@link google.cloud.scheduler.v1.PubsubTarget.verify|verify} messages.
                     * @param message PubsubTarget message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.scheduler.v1.IPubsubTarget, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PubsubTarget message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PubsubTarget
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.scheduler.v1.PubsubTarget;

                    /**
                     * Decodes a PubsubTarget message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PubsubTarget
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.scheduler.v1.PubsubTarget;

                    /**
                     * Verifies a PubsubTarget message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PubsubTarget message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PubsubTarget
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.scheduler.v1.PubsubTarget;

                    /**
                     * Creates a plain object from a PubsubTarget message. Also converts values to other types if specified.
                     * @param message PubsubTarget
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.scheduler.v1.PubsubTarget, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PubsubTarget to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an AppEngineRouting. */
                interface IAppEngineRouting {

                    /** AppEngineRouting service */
                    service?: (string|null);

                    /** AppEngineRouting version */
                    version?: (string|null);

                    /** AppEngineRouting instance */
                    instance?: (string|null);

                    /** AppEngineRouting host */
                    host?: (string|null);
                }

                /** Represents an AppEngineRouting. */
                class AppEngineRouting implements IAppEngineRouting {

                    /**
                     * Constructs a new AppEngineRouting.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.scheduler.v1.IAppEngineRouting);

                    /** AppEngineRouting service. */
                    public service: string;

                    /** AppEngineRouting version. */
                    public version: string;

                    /** AppEngineRouting instance. */
                    public instance: string;

                    /** AppEngineRouting host. */
                    public host: string;

                    /**
                     * Creates a new AppEngineRouting instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AppEngineRouting instance
                     */
                    public static create(properties?: google.cloud.scheduler.v1.IAppEngineRouting): google.cloud.scheduler.v1.AppEngineRouting;

                    /**
                     * Encodes the specified AppEngineRouting message. Does not implicitly {@link google.cloud.scheduler.v1.AppEngineRouting.verify|verify} messages.
                     * @param message AppEngineRouting message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.scheduler.v1.IAppEngineRouting, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AppEngineRouting message, length delimited. Does not implicitly {@link google.cloud.scheduler.v1.AppEngineRouting.verify|verify} messages.
                     * @param message AppEngineRouting message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.scheduler.v1.IAppEngineRouting, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AppEngineRouting message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AppEngineRouting
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.scheduler.v1.AppEngineRouting;

                    /**
                     * Decodes an AppEngineRouting message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AppEngineRouting
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.scheduler.v1.AppEngineRouting;

                    /**
                     * Verifies an AppEngineRouting message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AppEngineRouting message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AppEngineRouting
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.scheduler.v1.AppEngineRouting;

                    /**
                     * Creates a plain object from an AppEngineRouting message. Also converts values to other types if specified.
                     * @param message AppEngineRouting
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.scheduler.v1.AppEngineRouting, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AppEngineRouting to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** HttpMethod enum. */
                enum HttpMethod {
                    HTTP_METHOD_UNSPECIFIED = 0,
                    POST = 1,
                    GET = 2,
                    HEAD = 3,
                    PUT = 4,
                    DELETE = 5,
                    PATCH = 6,
                    OPTIONS = 7
                }

                /** Properties of a OAuthToken. */
                interface IOAuthToken {

                    /** OAuthToken serviceAccountEmail */
                    serviceAccountEmail?: (string|null);

                    /** OAuthToken scope */
                    scope?: (string|null);
                }

                /** Represents a OAuthToken. */
                class OAuthToken implements IOAuthToken {

                    /**
                     * Constructs a new OAuthToken.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.scheduler.v1.IOAuthToken);

                    /** OAuthToken serviceAccountEmail. */
                    public serviceAccountEmail: string;

                    /** OAuthToken scope. */
                    public scope: string;

                    /**
                     * Creates a new OAuthToken instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns OAuthToken instance
                     */
                    public static create(properties?: google.cloud.scheduler.v1.IOAuthToken): google.cloud.scheduler.v1.OAuthToken;

                    /**
                     * Encodes the specified OAuthToken message. Does not implicitly {@link google.cloud.scheduler.v1.OAuthToken.verify|verify} messages.
                     * @param message OAuthToken message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.scheduler.v1.IOAuthToken, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified OAuthToken message, length delimited. Does not implicitly {@link google.cloud.scheduler.v1.OAuthToken.verify|verify} messages.
                     * @param message OAuthToken message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.scheduler.v1.IOAuthToken, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a OAuthToken message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns OAuthToken
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.scheduler.v1.OAuthToken;

                    /**
                     * Decodes a OAuthToken message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns OAuthToken
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.scheduler.v1.OAuthToken;

                    /**
                     * Verifies a OAuthToken message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a OAuthToken message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns OAuthToken
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.scheduler.v1.OAuthToken;

                    /**
                     * Creates a plain object from a OAuthToken message. Also converts values to other types if specified.
                     * @param message OAuthToken
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.scheduler.v1.OAuthToken, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this OAuthToken to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an OidcToken. */
                interface IOidcToken {

                    /** OidcToken serviceAccountEmail */
                    serviceAccountEmail?: (string|null);

                    /** OidcToken audience */
                    audience?: (string|null);
                }

                /** Represents an OidcToken. */
                class OidcToken implements IOidcToken {

                    /**
                     * Constructs a new OidcToken.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.scheduler.v1.IOidcToken);

                    /** OidcToken serviceAccountEmail. */
                    public serviceAccountEmail: string;

                    /** OidcToken audience. */
                    public audience: string;

                    /**
                     * Creates a new OidcToken instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns OidcToken instance
                     */
                    public static create(properties?: google.cloud.scheduler.v1.IOidcToken): google.cloud.scheduler.v1.OidcToken;

                    /**
                     * Encodes the specified OidcToken message. Does not implicitly {@link google.cloud.scheduler.v1.OidcToken.verify|verify} messages.
                     * @param message OidcToken message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.scheduler.v1.IOidcToken, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified OidcToken message, length delimited. Does not implicitly {@link google.cloud.scheduler.v1.OidcToken.verify|verify} messages.
                     * @param message OidcToken message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.scheduler.v1.IOidcToken, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an OidcToken message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns OidcToken
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.scheduler.v1.OidcToken;

                    /**
                     * Decodes an OidcToken message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns OidcToken
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.scheduler.v1.OidcToken;

                    /**
                     * Verifies an OidcToken message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an OidcToken message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns OidcToken
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.scheduler.v1.OidcToken;

                    /**
                     * Creates a plain object from an OidcToken message. Also converts values to other types if specified.
                     * @param message OidcToken
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.scheduler.v1.OidcToken, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this OidcToken to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }
            }

            /** Namespace v1beta1. */
            namespace v1beta1 {

                /** Represents a CloudScheduler */
                class CloudScheduler extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new CloudScheduler service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new CloudScheduler service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): CloudScheduler;

                    /**
                     * Calls ListJobs.
                     * @param request ListJobsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListJobsResponse
                     */
                    public listJobs(request: google.cloud.scheduler.v1beta1.IListJobsRequest, callback: google.cloud.scheduler.v1beta1.CloudScheduler.ListJobsCallback): void;

                    /**
                     * Calls ListJobs.
                     * @param request ListJobsRequest message or plain object
                     * @returns Promise
                     */
                    public listJobs(request: google.cloud.scheduler.v1beta1.IListJobsRequest): Promise<google.cloud.scheduler.v1beta1.ListJobsResponse>;

                    /**
                     * Calls GetJob.
                     * @param request GetJobRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Job
                     */
                    public getJob(request: google.cloud.scheduler.v1beta1.IGetJobRequest, callback: google.cloud.scheduler.v1beta1.CloudScheduler.GetJobCallback): void;

                    /**
                     * Calls GetJob.
                     * @param request GetJobRequest message or plain object
                     * @returns Promise
                     */
                    public getJob(request: google.cloud.scheduler.v1beta1.IGetJobRequest): Promise<google.cloud.scheduler.v1beta1.Job>;

                    /**
                     * Calls CreateJob.
                     * @param request CreateJobRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Job
                     */
                    public createJob(request: google.cloud.scheduler.v1beta1.ICreateJobRequest, callback: google.cloud.scheduler.v1beta1.CloudScheduler.CreateJobCallback): void;

                    /**
                     * Calls CreateJob.
                     * @param request CreateJobRequest message or plain object
                     * @returns Promise
                     */
                    public createJob(request: google.cloud.scheduler.v1beta1.ICreateJobRequest): Promise<google.cloud.scheduler.v1beta1.Job>;

                    /**
                     * Calls UpdateJob.
                     * @param request UpdateJobRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Job
                     */
                    public updateJob(request: google.cloud.scheduler.v1beta1.IUpdateJobRequest, callback: google.cloud.scheduler.v1beta1.CloudScheduler.UpdateJobCallback): void;

                    /**
                     * Calls UpdateJob.
                     * @param request UpdateJobRequest message or plain object
                     * @returns Promise
                     */
                    public updateJob(request: google.cloud.scheduler.v1beta1.IUpdateJobRequest): Promise<google.cloud.scheduler.v1beta1.Job>;

                    /**
                     * Calls DeleteJob.
                     * @param request DeleteJobRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Empty
                     */
                    public deleteJob(request: google.cloud.scheduler.v1beta1.IDeleteJobRequest, callback: google.cloud.scheduler.v1beta1.CloudScheduler.DeleteJobCallback): void;

                    /**
                     * Calls DeleteJob.
                     * @param request DeleteJobRequest message or plain object
                     * @returns Promise
                     */
                    public deleteJob(request: google.cloud.scheduler.v1beta1.IDeleteJobRequest): Promise<google.protobuf.Empty>;

                    /**
                     * Calls PauseJob.
                     * @param request PauseJobRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Job
                     */
                    public pauseJob(request: google.cloud.scheduler.v1beta1.IPauseJobRequest, callback: google.cloud.scheduler.v1beta1.CloudScheduler.PauseJobCallback): void;

                    /**
                     * Calls PauseJob.
                     * @param request PauseJobRequest message or plain object
                     * @returns Promise
                     */
                    public pauseJob(request: google.cloud.scheduler.v1beta1.IPauseJobRequest): Promise<google.cloud.scheduler.v1beta1.Job>;

                    /**
                     * Calls ResumeJob.
                     * @param request ResumeJobRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Job
                     */
                    public resumeJob(request: google.cloud.scheduler.v1beta1.IResumeJobRequest, callback: google.cloud.scheduler.v1beta1.CloudScheduler.ResumeJobCallback): void;

                    /**
                     * Calls ResumeJob.
                     * @param request ResumeJobRequest message or plain object
                     * @returns Promise
                     */
                    public resumeJob(request: google.cloud.scheduler.v1beta1.IResumeJobRequest): Promise<google.cloud.scheduler.v1beta1.Job>;

                    /**
                     * Calls RunJob.
                     * @param request RunJobRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Job
                     */
                    public runJob(request: google.cloud.scheduler.v1beta1.IRunJobRequest, callback: google.cloud.scheduler.v1beta1.CloudScheduler.RunJobCallback): void;

                    /**
                     * Calls RunJob.
                     * @param request RunJobRequest message or plain object
                     * @returns Promise
                     */
                    public runJob(request: google.cloud.scheduler.v1beta1.IRunJobRequest): Promise<google.cloud.scheduler.v1beta1.Job>;
                }

                namespace CloudScheduler {

                    /**
                     * Callback as used by {@link google.cloud.scheduler.v1beta1.CloudScheduler#listJobs}.
                     * @param error Error, if any
                     * @param [response] ListJobsResponse
                     */
                    type ListJobsCallback = (error: (Error|null), response?: google.cloud.scheduler.v1beta1.ListJobsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.scheduler.v1beta1.CloudScheduler#getJob}.
                     * @param error Error, if any
                     * @param [response] Job
                     */
                    type GetJobCallback = (error: (Error|null), response?: google.cloud.scheduler.v1beta1.Job) => void;

                    /**
                     * Callback as used by {@link google.cloud.scheduler.v1beta1.CloudScheduler#createJob}.
                     * @param error Error, if any
                     * @param [response] Job
                     */
                    type CreateJobCallback = (error: (Error|null), response?: google.cloud.scheduler.v1beta1.Job) => void;

                    /**
                     * Callback as used by {@link google.cloud.scheduler.v1beta1.CloudScheduler#updateJob}.
                     * @param error Error, if any
                     * @param [response] Job
                     */
                    type UpdateJobCallback = (error: (Error|null), response?: google.cloud.scheduler.v1beta1.Job) => void;

                    /**
                     * Callback as used by {@link google.cloud.scheduler.v1beta1.CloudScheduler#deleteJob}.
                     * @param error Error, if any
                     * @param [response] Empty
                     */
                    type DeleteJobCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                    /**
                     * Callback as used by {@link google.cloud.scheduler.v1beta1.CloudScheduler#pauseJob}.
                     * @param error Error, if any
                     * @param [response] Job
                     */
                    type PauseJobCallback = (error: (Error|null), response?: google.cloud.scheduler.v1beta1.Job) => void;

                    /**
                     * Callback as used by {@link google.cloud.scheduler.v1beta1.CloudScheduler#resumeJob}.
                     * @param error Error, if any
                     * @param [response] Job
                     */
                    type ResumeJobCallback = (error: (Error|null), response?: google.cloud.scheduler.v1beta1.Job) => void;

                    /**
                     * Callback as used by {@link google.cloud.scheduler.v1beta1.CloudScheduler#runJob}.
                     * @param error Error, if any
                     * @param [response] Job
                     */
                    type RunJobCallback = (error: (Error|null), response?: google.cloud.scheduler.v1beta1.Job) => void;
                }

                /** Properties of a ListJobsRequest. */
                interface IListJobsRequest {

                    /** ListJobsRequest parent */
                    parent?: (string|null);

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
                    constructor(properties?: google.cloud.scheduler.v1beta1.IListJobsRequest);

                    /** ListJobsRequest parent. */
                    public parent: string;

                    /** ListJobsRequest pageSize. */
                    public pageSize: number;

                    /** ListJobsRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListJobsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListJobsRequest instance
                     */
                    public static create(properties?: google.cloud.scheduler.v1beta1.IListJobsRequest): google.cloud.scheduler.v1beta1.ListJobsRequest;

                    /**
                     * Encodes the specified ListJobsRequest message. Does not implicitly {@link google.cloud.scheduler.v1beta1.ListJobsRequest.verify|verify} messages.
                     * @param message ListJobsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.scheduler.v1beta1.IListJobsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListJobsRequest message, length delimited. Does not implicitly {@link google.cloud.scheduler.v1beta1.ListJobsRequest.verify|verify} messages.
                     * @param message ListJobsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.scheduler.v1beta1.IListJobsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListJobsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListJobsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.scheduler.v1beta1.ListJobsRequest;

                    /**
                     * Decodes a ListJobsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListJobsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.scheduler.v1beta1.ListJobsRequest;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.scheduler.v1beta1.ListJobsRequest;

                    /**
                     * Creates a plain object from a ListJobsRequest message. Also converts values to other types if specified.
                     * @param message ListJobsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.scheduler.v1beta1.ListJobsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListJobsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListJobsResponse. */
                interface IListJobsResponse {

                    /** ListJobsResponse jobs */
                    jobs?: (google.cloud.scheduler.v1beta1.IJob[]|null);

                    /** ListJobsResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListJobsResponse. */
                class ListJobsResponse implements IListJobsResponse {

                    /**
                     * Constructs a new ListJobsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.scheduler.v1beta1.IListJobsResponse);

                    /** ListJobsResponse jobs. */
                    public jobs: google.cloud.scheduler.v1beta1.IJob[];

                    /** ListJobsResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListJobsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListJobsResponse instance
                     */
                    public static create(properties?: google.cloud.scheduler.v1beta1.IListJobsResponse): google.cloud.scheduler.v1beta1.ListJobsResponse;

                    /**
                     * Encodes the specified ListJobsResponse message. Does not implicitly {@link google.cloud.scheduler.v1beta1.ListJobsResponse.verify|verify} messages.
                     * @param message ListJobsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.scheduler.v1beta1.IListJobsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListJobsResponse message, length delimited. Does not implicitly {@link google.cloud.scheduler.v1beta1.ListJobsResponse.verify|verify} messages.
                     * @param message ListJobsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.scheduler.v1beta1.IListJobsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListJobsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListJobsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.scheduler.v1beta1.ListJobsResponse;

                    /**
                     * Decodes a ListJobsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListJobsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.scheduler.v1beta1.ListJobsResponse;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.scheduler.v1beta1.ListJobsResponse;

                    /**
                     * Creates a plain object from a ListJobsResponse message. Also converts values to other types if specified.
                     * @param message ListJobsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.scheduler.v1beta1.ListJobsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListJobsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
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
                    constructor(properties?: google.cloud.scheduler.v1beta1.IGetJobRequest);

                    /** GetJobRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetJobRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetJobRequest instance
                     */
                    public static create(properties?: google.cloud.scheduler.v1beta1.IGetJobRequest): google.cloud.scheduler.v1beta1.GetJobRequest;

                    /**
                     * Encodes the specified GetJobRequest message. Does not implicitly {@link google.cloud.scheduler.v1beta1.GetJobRequest.verify|verify} messages.
                     * @param message GetJobRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.scheduler.v1beta1.IGetJobRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetJobRequest message, length delimited. Does not implicitly {@link google.cloud.scheduler.v1beta1.GetJobRequest.verify|verify} messages.
                     * @param message GetJobRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.scheduler.v1beta1.IGetJobRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetJobRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetJobRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.scheduler.v1beta1.GetJobRequest;

                    /**
                     * Decodes a GetJobRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetJobRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.scheduler.v1beta1.GetJobRequest;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.scheduler.v1beta1.GetJobRequest;

                    /**
                     * Creates a plain object from a GetJobRequest message. Also converts values to other types if specified.
                     * @param message GetJobRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.scheduler.v1beta1.GetJobRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetJobRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a CreateJobRequest. */
                interface ICreateJobRequest {

                    /** CreateJobRequest parent */
                    parent?: (string|null);

                    /** CreateJobRequest job */
                    job?: (google.cloud.scheduler.v1beta1.IJob|null);
                }

                /** Represents a CreateJobRequest. */
                class CreateJobRequest implements ICreateJobRequest {

                    /**
                     * Constructs a new CreateJobRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.scheduler.v1beta1.ICreateJobRequest);

                    /** CreateJobRequest parent. */
                    public parent: string;

                    /** CreateJobRequest job. */
                    public job?: (google.cloud.scheduler.v1beta1.IJob|null);

                    /**
                     * Creates a new CreateJobRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateJobRequest instance
                     */
                    public static create(properties?: google.cloud.scheduler.v1beta1.ICreateJobRequest): google.cloud.scheduler.v1beta1.CreateJobRequest;

                    /**
                     * Encodes the specified CreateJobRequest message. Does not implicitly {@link google.cloud.scheduler.v1beta1.CreateJobRequest.verify|verify} messages.
                     * @param message CreateJobRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.scheduler.v1beta1.ICreateJobRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateJobRequest message, length delimited. Does not implicitly {@link google.cloud.scheduler.v1beta1.CreateJobRequest.verify|verify} messages.
                     * @param message CreateJobRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.scheduler.v1beta1.ICreateJobRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateJobRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateJobRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.scheduler.v1beta1.CreateJobRequest;

                    /**
                     * Decodes a CreateJobRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateJobRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.scheduler.v1beta1.CreateJobRequest;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.scheduler.v1beta1.CreateJobRequest;

                    /**
                     * Creates a plain object from a CreateJobRequest message. Also converts values to other types if specified.
                     * @param message CreateJobRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.scheduler.v1beta1.CreateJobRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateJobRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an UpdateJobRequest. */
                interface IUpdateJobRequest {

                    /** UpdateJobRequest job */
                    job?: (google.cloud.scheduler.v1beta1.IJob|null);

                    /** UpdateJobRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);
                }

                /** Represents an UpdateJobRequest. */
                class UpdateJobRequest implements IUpdateJobRequest {

                    /**
                     * Constructs a new UpdateJobRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.scheduler.v1beta1.IUpdateJobRequest);

                    /** UpdateJobRequest job. */
                    public job?: (google.cloud.scheduler.v1beta1.IJob|null);

                    /** UpdateJobRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /**
                     * Creates a new UpdateJobRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateJobRequest instance
                     */
                    public static create(properties?: google.cloud.scheduler.v1beta1.IUpdateJobRequest): google.cloud.scheduler.v1beta1.UpdateJobRequest;

                    /**
                     * Encodes the specified UpdateJobRequest message. Does not implicitly {@link google.cloud.scheduler.v1beta1.UpdateJobRequest.verify|verify} messages.
                     * @param message UpdateJobRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.scheduler.v1beta1.IUpdateJobRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateJobRequest message, length delimited. Does not implicitly {@link google.cloud.scheduler.v1beta1.UpdateJobRequest.verify|verify} messages.
                     * @param message UpdateJobRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.scheduler.v1beta1.IUpdateJobRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateJobRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateJobRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.scheduler.v1beta1.UpdateJobRequest;

                    /**
                     * Decodes an UpdateJobRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateJobRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.scheduler.v1beta1.UpdateJobRequest;

                    /**
                     * Verifies an UpdateJobRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateJobRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateJobRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.scheduler.v1beta1.UpdateJobRequest;

                    /**
                     * Creates a plain object from an UpdateJobRequest message. Also converts values to other types if specified.
                     * @param message UpdateJobRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.scheduler.v1beta1.UpdateJobRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateJobRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DeleteJobRequest. */
                interface IDeleteJobRequest {

                    /** DeleteJobRequest name */
                    name?: (string|null);
                }

                /** Represents a DeleteJobRequest. */
                class DeleteJobRequest implements IDeleteJobRequest {

                    /**
                     * Constructs a new DeleteJobRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.scheduler.v1beta1.IDeleteJobRequest);

                    /** DeleteJobRequest name. */
                    public name: string;

                    /**
                     * Creates a new DeleteJobRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteJobRequest instance
                     */
                    public static create(properties?: google.cloud.scheduler.v1beta1.IDeleteJobRequest): google.cloud.scheduler.v1beta1.DeleteJobRequest;

                    /**
                     * Encodes the specified DeleteJobRequest message. Does not implicitly {@link google.cloud.scheduler.v1beta1.DeleteJobRequest.verify|verify} messages.
                     * @param message DeleteJobRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.scheduler.v1beta1.IDeleteJobRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteJobRequest message, length delimited. Does not implicitly {@link google.cloud.scheduler.v1beta1.DeleteJobRequest.verify|verify} messages.
                     * @param message DeleteJobRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.scheduler.v1beta1.IDeleteJobRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteJobRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteJobRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.scheduler.v1beta1.DeleteJobRequest;

                    /**
                     * Decodes a DeleteJobRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteJobRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.scheduler.v1beta1.DeleteJobRequest;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.scheduler.v1beta1.DeleteJobRequest;

                    /**
                     * Creates a plain object from a DeleteJobRequest message. Also converts values to other types if specified.
                     * @param message DeleteJobRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.scheduler.v1beta1.DeleteJobRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteJobRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a PauseJobRequest. */
                interface IPauseJobRequest {

                    /** PauseJobRequest name */
                    name?: (string|null);
                }

                /** Represents a PauseJobRequest. */
                class PauseJobRequest implements IPauseJobRequest {

                    /**
                     * Constructs a new PauseJobRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.scheduler.v1beta1.IPauseJobRequest);

                    /** PauseJobRequest name. */
                    public name: string;

                    /**
                     * Creates a new PauseJobRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PauseJobRequest instance
                     */
                    public static create(properties?: google.cloud.scheduler.v1beta1.IPauseJobRequest): google.cloud.scheduler.v1beta1.PauseJobRequest;

                    /**
                     * Encodes the specified PauseJobRequest message. Does not implicitly {@link google.cloud.scheduler.v1beta1.PauseJobRequest.verify|verify} messages.
                     * @param message PauseJobRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.scheduler.v1beta1.IPauseJobRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PauseJobRequest message, length delimited. Does not implicitly {@link google.cloud.scheduler.v1beta1.PauseJobRequest.verify|verify} messages.
                     * @param message PauseJobRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.scheduler.v1beta1.IPauseJobRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PauseJobRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PauseJobRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.scheduler.v1beta1.PauseJobRequest;

                    /**
                     * Decodes a PauseJobRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PauseJobRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.scheduler.v1beta1.PauseJobRequest;

                    /**
                     * Verifies a PauseJobRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PauseJobRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PauseJobRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.scheduler.v1beta1.PauseJobRequest;

                    /**
                     * Creates a plain object from a PauseJobRequest message. Also converts values to other types if specified.
                     * @param message PauseJobRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.scheduler.v1beta1.PauseJobRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PauseJobRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ResumeJobRequest. */
                interface IResumeJobRequest {

                    /** ResumeJobRequest name */
                    name?: (string|null);
                }

                /** Represents a ResumeJobRequest. */
                class ResumeJobRequest implements IResumeJobRequest {

                    /**
                     * Constructs a new ResumeJobRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.scheduler.v1beta1.IResumeJobRequest);

                    /** ResumeJobRequest name. */
                    public name: string;

                    /**
                     * Creates a new ResumeJobRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ResumeJobRequest instance
                     */
                    public static create(properties?: google.cloud.scheduler.v1beta1.IResumeJobRequest): google.cloud.scheduler.v1beta1.ResumeJobRequest;

                    /**
                     * Encodes the specified ResumeJobRequest message. Does not implicitly {@link google.cloud.scheduler.v1beta1.ResumeJobRequest.verify|verify} messages.
                     * @param message ResumeJobRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.scheduler.v1beta1.IResumeJobRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ResumeJobRequest message, length delimited. Does not implicitly {@link google.cloud.scheduler.v1beta1.ResumeJobRequest.verify|verify} messages.
                     * @param message ResumeJobRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.scheduler.v1beta1.IResumeJobRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ResumeJobRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ResumeJobRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.scheduler.v1beta1.ResumeJobRequest;

                    /**
                     * Decodes a ResumeJobRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ResumeJobRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.scheduler.v1beta1.ResumeJobRequest;

                    /**
                     * Verifies a ResumeJobRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ResumeJobRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ResumeJobRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.scheduler.v1beta1.ResumeJobRequest;

                    /**
                     * Creates a plain object from a ResumeJobRequest message. Also converts values to other types if specified.
                     * @param message ResumeJobRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.scheduler.v1beta1.ResumeJobRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ResumeJobRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a RunJobRequest. */
                interface IRunJobRequest {

                    /** RunJobRequest name */
                    name?: (string|null);
                }

                /** Represents a RunJobRequest. */
                class RunJobRequest implements IRunJobRequest {

                    /**
                     * Constructs a new RunJobRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.scheduler.v1beta1.IRunJobRequest);

                    /** RunJobRequest name. */
                    public name: string;

                    /**
                     * Creates a new RunJobRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RunJobRequest instance
                     */
                    public static create(properties?: google.cloud.scheduler.v1beta1.IRunJobRequest): google.cloud.scheduler.v1beta1.RunJobRequest;

                    /**
                     * Encodes the specified RunJobRequest message. Does not implicitly {@link google.cloud.scheduler.v1beta1.RunJobRequest.verify|verify} messages.
                     * @param message RunJobRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.scheduler.v1beta1.IRunJobRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RunJobRequest message, length delimited. Does not implicitly {@link google.cloud.scheduler.v1beta1.RunJobRequest.verify|verify} messages.
                     * @param message RunJobRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.scheduler.v1beta1.IRunJobRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RunJobRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RunJobRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.scheduler.v1beta1.RunJobRequest;

                    /**
                     * Decodes a RunJobRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RunJobRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.scheduler.v1beta1.RunJobRequest;

                    /**
                     * Verifies a RunJobRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RunJobRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RunJobRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.scheduler.v1beta1.RunJobRequest;

                    /**
                     * Creates a plain object from a RunJobRequest message. Also converts values to other types if specified.
                     * @param message RunJobRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.scheduler.v1beta1.RunJobRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RunJobRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a Job. */
                interface IJob {

                    /** Job name */
                    name?: (string|null);

                    /** Job description */
                    description?: (string|null);

                    /** Job pubsubTarget */
                    pubsubTarget?: (google.cloud.scheduler.v1beta1.IPubsubTarget|null);

                    /** Job appEngineHttpTarget */
                    appEngineHttpTarget?: (google.cloud.scheduler.v1beta1.IAppEngineHttpTarget|null);

                    /** Job httpTarget */
                    httpTarget?: (google.cloud.scheduler.v1beta1.IHttpTarget|null);

                    /** Job schedule */
                    schedule?: (string|null);

                    /** Job timeZone */
                    timeZone?: (string|null);

                    /** Job userUpdateTime */
                    userUpdateTime?: (google.protobuf.ITimestamp|null);

                    /** Job state */
                    state?: (google.cloud.scheduler.v1beta1.Job.State|keyof typeof google.cloud.scheduler.v1beta1.Job.State|null);

                    /** Job status */
                    status?: (google.rpc.IStatus|null);

                    /** Job scheduleTime */
                    scheduleTime?: (google.protobuf.ITimestamp|null);

                    /** Job lastAttemptTime */
                    lastAttemptTime?: (google.protobuf.ITimestamp|null);

                    /** Job retryConfig */
                    retryConfig?: (google.cloud.scheduler.v1beta1.IRetryConfig|null);

                    /** Job attemptDeadline */
                    attemptDeadline?: (google.protobuf.IDuration|null);
                }

                /** Represents a Job. */
                class Job implements IJob {

                    /**
                     * Constructs a new Job.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.scheduler.v1beta1.IJob);

                    /** Job name. */
                    public name: string;

                    /** Job description. */
                    public description: string;

                    /** Job pubsubTarget. */
                    public pubsubTarget?: (google.cloud.scheduler.v1beta1.IPubsubTarget|null);

                    /** Job appEngineHttpTarget. */
                    public appEngineHttpTarget?: (google.cloud.scheduler.v1beta1.IAppEngineHttpTarget|null);

                    /** Job httpTarget. */
                    public httpTarget?: (google.cloud.scheduler.v1beta1.IHttpTarget|null);

                    /** Job schedule. */
                    public schedule: string;

                    /** Job timeZone. */
                    public timeZone: string;

                    /** Job userUpdateTime. */
                    public userUpdateTime?: (google.protobuf.ITimestamp|null);

                    /** Job state. */
                    public state: (google.cloud.scheduler.v1beta1.Job.State|keyof typeof google.cloud.scheduler.v1beta1.Job.State);

                    /** Job status. */
                    public status?: (google.rpc.IStatus|null);

                    /** Job scheduleTime. */
                    public scheduleTime?: (google.protobuf.ITimestamp|null);

                    /** Job lastAttemptTime. */
                    public lastAttemptTime?: (google.protobuf.ITimestamp|null);

                    /** Job retryConfig. */
                    public retryConfig?: (google.cloud.scheduler.v1beta1.IRetryConfig|null);

                    /** Job attemptDeadline. */
                    public attemptDeadline?: (google.protobuf.IDuration|null);

                    /** Job target. */
                    public target?: ("pubsubTarget"|"appEngineHttpTarget"|"httpTarget");

                    /**
                     * Creates a new Job instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Job instance
                     */
                    public static create(properties?: google.cloud.scheduler.v1beta1.IJob): google.cloud.scheduler.v1beta1.Job;

                    /**
                     * Encodes the specified Job message. Does not implicitly {@link google.cloud.scheduler.v1beta1.Job.verify|verify} messages.
                     * @param message Job message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.scheduler.v1beta1.IJob, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Job message, length delimited. Does not implicitly {@link google.cloud.scheduler.v1beta1.Job.verify|verify} messages.
                     * @param message Job message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.scheduler.v1beta1.IJob, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Job message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Job
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.scheduler.v1beta1.Job;

                    /**
                     * Decodes a Job message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Job
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.scheduler.v1beta1.Job;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.scheduler.v1beta1.Job;

                    /**
                     * Creates a plain object from a Job message. Also converts values to other types if specified.
                     * @param message Job
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.scheduler.v1beta1.Job, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Job to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace Job {

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        ENABLED = 1,
                        PAUSED = 2,
                        DISABLED = 3,
                        UPDATE_FAILED = 4
                    }
                }

                /** Properties of a RetryConfig. */
                interface IRetryConfig {

                    /** RetryConfig retryCount */
                    retryCount?: (number|null);

                    /** RetryConfig maxRetryDuration */
                    maxRetryDuration?: (google.protobuf.IDuration|null);

                    /** RetryConfig minBackoffDuration */
                    minBackoffDuration?: (google.protobuf.IDuration|null);

                    /** RetryConfig maxBackoffDuration */
                    maxBackoffDuration?: (google.protobuf.IDuration|null);

                    /** RetryConfig maxDoublings */
                    maxDoublings?: (number|null);
                }

                /** Represents a RetryConfig. */
                class RetryConfig implements IRetryConfig {

                    /**
                     * Constructs a new RetryConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.scheduler.v1beta1.IRetryConfig);

                    /** RetryConfig retryCount. */
                    public retryCount: number;

                    /** RetryConfig maxRetryDuration. */
                    public maxRetryDuration?: (google.protobuf.IDuration|null);

                    /** RetryConfig minBackoffDuration. */
                    public minBackoffDuration?: (google.protobuf.IDuration|null);

                    /** RetryConfig maxBackoffDuration. */
                    public maxBackoffDuration?: (google.protobuf.IDuration|null);

                    /** RetryConfig maxDoublings. */
                    public maxDoublings: number;

                    /**
                     * Creates a new RetryConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RetryConfig instance
                     */
                    public static create(properties?: google.cloud.scheduler.v1beta1.IRetryConfig): google.cloud.scheduler.v1beta1.RetryConfig;

                    /**
                     * Encodes the specified RetryConfig message. Does not implicitly {@link google.cloud.scheduler.v1beta1.RetryConfig.verify|verify} messages.
                     * @param message RetryConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.scheduler.v1beta1.IRetryConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RetryConfig message, length delimited. Does not implicitly {@link google.cloud.scheduler.v1beta1.RetryConfig.verify|verify} messages.
                     * @param message RetryConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.scheduler.v1beta1.IRetryConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RetryConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RetryConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.scheduler.v1beta1.RetryConfig;

                    /**
                     * Decodes a RetryConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RetryConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.scheduler.v1beta1.RetryConfig;

                    /**
                     * Verifies a RetryConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RetryConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RetryConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.scheduler.v1beta1.RetryConfig;

                    /**
                     * Creates a plain object from a RetryConfig message. Also converts values to other types if specified.
                     * @param message RetryConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.scheduler.v1beta1.RetryConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RetryConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a HttpTarget. */
                interface IHttpTarget {

                    /** HttpTarget uri */
                    uri?: (string|null);

                    /** HttpTarget httpMethod */
                    httpMethod?: (google.cloud.scheduler.v1beta1.HttpMethod|keyof typeof google.cloud.scheduler.v1beta1.HttpMethod|null);

                    /** HttpTarget headers */
                    headers?: ({ [k: string]: string }|null);

                    /** HttpTarget body */
                    body?: (Uint8Array|string|null);

                    /** HttpTarget oauthToken */
                    oauthToken?: (google.cloud.scheduler.v1beta1.IOAuthToken|null);

                    /** HttpTarget oidcToken */
                    oidcToken?: (google.cloud.scheduler.v1beta1.IOidcToken|null);
                }

                /** Represents a HttpTarget. */
                class HttpTarget implements IHttpTarget {

                    /**
                     * Constructs a new HttpTarget.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.scheduler.v1beta1.IHttpTarget);

                    /** HttpTarget uri. */
                    public uri: string;

                    /** HttpTarget httpMethod. */
                    public httpMethod: (google.cloud.scheduler.v1beta1.HttpMethod|keyof typeof google.cloud.scheduler.v1beta1.HttpMethod);

                    /** HttpTarget headers. */
                    public headers: { [k: string]: string };

                    /** HttpTarget body. */
                    public body: (Uint8Array|string);

                    /** HttpTarget oauthToken. */
                    public oauthToken?: (google.cloud.scheduler.v1beta1.IOAuthToken|null);

                    /** HttpTarget oidcToken. */
                    public oidcToken?: (google.cloud.scheduler.v1beta1.IOidcToken|null);

                    /** HttpTarget authorizationHeader. */
                    public authorizationHeader?: ("oauthToken"|"oidcToken");

                    /**
                     * Creates a new HttpTarget instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns HttpTarget instance
                     */
                    public static create(properties?: google.cloud.scheduler.v1beta1.IHttpTarget): google.cloud.scheduler.v1beta1.HttpTarget;

                    /**
                     * Encodes the specified HttpTarget message. Does not implicitly {@link google.cloud.scheduler.v1beta1.HttpTarget.verify|verify} messages.
                     * @param message HttpTarget message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.scheduler.v1beta1.IHttpTarget, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified HttpTarget message, length delimited. Does not implicitly {@link google.cloud.scheduler.v1beta1.HttpTarget.verify|verify} messages.
                     * @param message HttpTarget message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.scheduler.v1beta1.IHttpTarget, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a HttpTarget message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns HttpTarget
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.scheduler.v1beta1.HttpTarget;

                    /**
                     * Decodes a HttpTarget message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns HttpTarget
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.scheduler.v1beta1.HttpTarget;

                    /**
                     * Verifies a HttpTarget message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a HttpTarget message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns HttpTarget
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.scheduler.v1beta1.HttpTarget;

                    /**
                     * Creates a plain object from a HttpTarget message. Also converts values to other types if specified.
                     * @param message HttpTarget
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.scheduler.v1beta1.HttpTarget, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this HttpTarget to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an AppEngineHttpTarget. */
                interface IAppEngineHttpTarget {

                    /** AppEngineHttpTarget httpMethod */
                    httpMethod?: (google.cloud.scheduler.v1beta1.HttpMethod|keyof typeof google.cloud.scheduler.v1beta1.HttpMethod|null);

                    /** AppEngineHttpTarget appEngineRouting */
                    appEngineRouting?: (google.cloud.scheduler.v1beta1.IAppEngineRouting|null);

                    /** AppEngineHttpTarget relativeUri */
                    relativeUri?: (string|null);

                    /** AppEngineHttpTarget headers */
                    headers?: ({ [k: string]: string }|null);

                    /** AppEngineHttpTarget body */
                    body?: (Uint8Array|string|null);
                }

                /** Represents an AppEngineHttpTarget. */
                class AppEngineHttpTarget implements IAppEngineHttpTarget {

                    /**
                     * Constructs a new AppEngineHttpTarget.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.scheduler.v1beta1.IAppEngineHttpTarget);

                    /** AppEngineHttpTarget httpMethod. */
                    public httpMethod: (google.cloud.scheduler.v1beta1.HttpMethod|keyof typeof google.cloud.scheduler.v1beta1.HttpMethod);

                    /** AppEngineHttpTarget appEngineRouting. */
                    public appEngineRouting?: (google.cloud.scheduler.v1beta1.IAppEngineRouting|null);

                    /** AppEngineHttpTarget relativeUri. */
                    public relativeUri: string;

                    /** AppEngineHttpTarget headers. */
                    public headers: { [k: string]: string };

                    /** AppEngineHttpTarget body. */
                    public body: (Uint8Array|string);

                    /**
                     * Creates a new AppEngineHttpTarget instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AppEngineHttpTarget instance
                     */
                    public static create(properties?: google.cloud.scheduler.v1beta1.IAppEngineHttpTarget): google.cloud.scheduler.v1beta1.AppEngineHttpTarget;

                    /**
                     * Encodes the specified AppEngineHttpTarget message. Does not implicitly {@link google.cloud.scheduler.v1beta1.AppEngineHttpTarget.verify|verify} messages.
                     * @param message AppEngineHttpTarget message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.scheduler.v1beta1.IAppEngineHttpTarget, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AppEngineHttpTarget message, length delimited. Does not implicitly {@link google.cloud.scheduler.v1beta1.AppEngineHttpTarget.verify|verify} messages.
                     * @param message AppEngineHttpTarget message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.scheduler.v1beta1.IAppEngineHttpTarget, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AppEngineHttpTarget message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AppEngineHttpTarget
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.scheduler.v1beta1.AppEngineHttpTarget;

                    /**
                     * Decodes an AppEngineHttpTarget message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AppEngineHttpTarget
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.scheduler.v1beta1.AppEngineHttpTarget;

                    /**
                     * Verifies an AppEngineHttpTarget message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AppEngineHttpTarget message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AppEngineHttpTarget
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.scheduler.v1beta1.AppEngineHttpTarget;

                    /**
                     * Creates a plain object from an AppEngineHttpTarget message. Also converts values to other types if specified.
                     * @param message AppEngineHttpTarget
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.scheduler.v1beta1.AppEngineHttpTarget, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AppEngineHttpTarget to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a PubsubTarget. */
                interface IPubsubTarget {

                    /** PubsubTarget topicName */
                    topicName?: (string|null);

                    /** PubsubTarget data */
                    data?: (Uint8Array|string|null);

                    /** PubsubTarget attributes */
                    attributes?: ({ [k: string]: string }|null);
                }

                /** Represents a PubsubTarget. */
                class PubsubTarget implements IPubsubTarget {

                    /**
                     * Constructs a new PubsubTarget.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.scheduler.v1beta1.IPubsubTarget);

                    /** PubsubTarget topicName. */
                    public topicName: string;

                    /** PubsubTarget data. */
                    public data: (Uint8Array|string);

                    /** PubsubTarget attributes. */
                    public attributes: { [k: string]: string };

                    /**
                     * Creates a new PubsubTarget instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PubsubTarget instance
                     */
                    public static create(properties?: google.cloud.scheduler.v1beta1.IPubsubTarget): google.cloud.scheduler.v1beta1.PubsubTarget;

                    /**
                     * Encodes the specified PubsubTarget message. Does not implicitly {@link google.cloud.scheduler.v1beta1.PubsubTarget.verify|verify} messages.
                     * @param message PubsubTarget message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.scheduler.v1beta1.IPubsubTarget, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PubsubTarget message, length delimited. Does not implicitly {@link google.cloud.scheduler.v1beta1.PubsubTarget.verify|verify} messages.
                     * @param message PubsubTarget message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.scheduler.v1beta1.IPubsubTarget, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PubsubTarget message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PubsubTarget
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.scheduler.v1beta1.PubsubTarget;

                    /**
                     * Decodes a PubsubTarget message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PubsubTarget
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.scheduler.v1beta1.PubsubTarget;

                    /**
                     * Verifies a PubsubTarget message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PubsubTarget message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PubsubTarget
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.scheduler.v1beta1.PubsubTarget;

                    /**
                     * Creates a plain object from a PubsubTarget message. Also converts values to other types if specified.
                     * @param message PubsubTarget
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.scheduler.v1beta1.PubsubTarget, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PubsubTarget to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an AppEngineRouting. */
                interface IAppEngineRouting {

                    /** AppEngineRouting service */
                    service?: (string|null);

                    /** AppEngineRouting version */
                    version?: (string|null);

                    /** AppEngineRouting instance */
                    instance?: (string|null);

                    /** AppEngineRouting host */
                    host?: (string|null);
                }

                /** Represents an AppEngineRouting. */
                class AppEngineRouting implements IAppEngineRouting {

                    /**
                     * Constructs a new AppEngineRouting.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.scheduler.v1beta1.IAppEngineRouting);

                    /** AppEngineRouting service. */
                    public service: string;

                    /** AppEngineRouting version. */
                    public version: string;

                    /** AppEngineRouting instance. */
                    public instance: string;

                    /** AppEngineRouting host. */
                    public host: string;

                    /**
                     * Creates a new AppEngineRouting instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AppEngineRouting instance
                     */
                    public static create(properties?: google.cloud.scheduler.v1beta1.IAppEngineRouting): google.cloud.scheduler.v1beta1.AppEngineRouting;

                    /**
                     * Encodes the specified AppEngineRouting message. Does not implicitly {@link google.cloud.scheduler.v1beta1.AppEngineRouting.verify|verify} messages.
                     * @param message AppEngineRouting message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.scheduler.v1beta1.IAppEngineRouting, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AppEngineRouting message, length delimited. Does not implicitly {@link google.cloud.scheduler.v1beta1.AppEngineRouting.verify|verify} messages.
                     * @param message AppEngineRouting message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.scheduler.v1beta1.IAppEngineRouting, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AppEngineRouting message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AppEngineRouting
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.scheduler.v1beta1.AppEngineRouting;

                    /**
                     * Decodes an AppEngineRouting message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AppEngineRouting
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.scheduler.v1beta1.AppEngineRouting;

                    /**
                     * Verifies an AppEngineRouting message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AppEngineRouting message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AppEngineRouting
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.scheduler.v1beta1.AppEngineRouting;

                    /**
                     * Creates a plain object from an AppEngineRouting message. Also converts values to other types if specified.
                     * @param message AppEngineRouting
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.scheduler.v1beta1.AppEngineRouting, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AppEngineRouting to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** HttpMethod enum. */
                enum HttpMethod {
                    HTTP_METHOD_UNSPECIFIED = 0,
                    POST = 1,
                    GET = 2,
                    HEAD = 3,
                    PUT = 4,
                    DELETE = 5,
                    PATCH = 6,
                    OPTIONS = 7
                }

                /** Properties of a OAuthToken. */
                interface IOAuthToken {

                    /** OAuthToken serviceAccountEmail */
                    serviceAccountEmail?: (string|null);

                    /** OAuthToken scope */
                    scope?: (string|null);
                }

                /** Represents a OAuthToken. */
                class OAuthToken implements IOAuthToken {

                    /**
                     * Constructs a new OAuthToken.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.scheduler.v1beta1.IOAuthToken);

                    /** OAuthToken serviceAccountEmail. */
                    public serviceAccountEmail: string;

                    /** OAuthToken scope. */
                    public scope: string;

                    /**
                     * Creates a new OAuthToken instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns OAuthToken instance
                     */
                    public static create(properties?: google.cloud.scheduler.v1beta1.IOAuthToken): google.cloud.scheduler.v1beta1.OAuthToken;

                    /**
                     * Encodes the specified OAuthToken message. Does not implicitly {@link google.cloud.scheduler.v1beta1.OAuthToken.verify|verify} messages.
                     * @param message OAuthToken message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.scheduler.v1beta1.IOAuthToken, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified OAuthToken message, length delimited. Does not implicitly {@link google.cloud.scheduler.v1beta1.OAuthToken.verify|verify} messages.
                     * @param message OAuthToken message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.scheduler.v1beta1.IOAuthToken, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a OAuthToken message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns OAuthToken
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.scheduler.v1beta1.OAuthToken;

                    /**
                     * Decodes a OAuthToken message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns OAuthToken
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.scheduler.v1beta1.OAuthToken;

                    /**
                     * Verifies a OAuthToken message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a OAuthToken message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns OAuthToken
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.scheduler.v1beta1.OAuthToken;

                    /**
                     * Creates a plain object from a OAuthToken message. Also converts values to other types if specified.
                     * @param message OAuthToken
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.scheduler.v1beta1.OAuthToken, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this OAuthToken to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an OidcToken. */
                interface IOidcToken {

                    /** OidcToken serviceAccountEmail */
                    serviceAccountEmail?: (string|null);

                    /** OidcToken audience */
                    audience?: (string|null);
                }

                /** Represents an OidcToken. */
                class OidcToken implements IOidcToken {

                    /**
                     * Constructs a new OidcToken.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.scheduler.v1beta1.IOidcToken);

                    /** OidcToken serviceAccountEmail. */
                    public serviceAccountEmail: string;

                    /** OidcToken audience. */
                    public audience: string;

                    /**
                     * Creates a new OidcToken instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns OidcToken instance
                     */
                    public static create(properties?: google.cloud.scheduler.v1beta1.IOidcToken): google.cloud.scheduler.v1beta1.OidcToken;

                    /**
                     * Encodes the specified OidcToken message. Does not implicitly {@link google.cloud.scheduler.v1beta1.OidcToken.verify|verify} messages.
                     * @param message OidcToken message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.scheduler.v1beta1.IOidcToken, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified OidcToken message, length delimited. Does not implicitly {@link google.cloud.scheduler.v1beta1.OidcToken.verify|verify} messages.
                     * @param message OidcToken message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.scheduler.v1beta1.IOidcToken, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an OidcToken message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns OidcToken
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.scheduler.v1beta1.OidcToken;

                    /**
                     * Decodes an OidcToken message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns OidcToken
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.scheduler.v1beta1.OidcToken;

                    /**
                     * Verifies an OidcToken message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an OidcToken message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns OidcToken
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.scheduler.v1beta1.OidcToken;

                    /**
                     * Creates a plain object from an OidcToken message. Also converts values to other types if specified.
                     * @param message OidcToken
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.scheduler.v1beta1.OidcToken, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this OidcToken to JSON.
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
