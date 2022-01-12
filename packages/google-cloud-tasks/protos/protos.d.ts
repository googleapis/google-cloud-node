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

    /** Namespace cloud. */
    namespace cloud {

        /** Namespace tasks. */
        namespace tasks {

            /** Namespace v2. */
            namespace v2 {

                /** Represents a CloudTasks */
                class CloudTasks extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new CloudTasks service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new CloudTasks service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): CloudTasks;

                    /**
                     * Calls ListQueues.
                     * @param request ListQueuesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListQueuesResponse
                     */
                    public listQueues(request: google.cloud.tasks.v2.IListQueuesRequest, callback: google.cloud.tasks.v2.CloudTasks.ListQueuesCallback): void;

                    /**
                     * Calls ListQueues.
                     * @param request ListQueuesRequest message or plain object
                     * @returns Promise
                     */
                    public listQueues(request: google.cloud.tasks.v2.IListQueuesRequest): Promise<google.cloud.tasks.v2.ListQueuesResponse>;

                    /**
                     * Calls GetQueue.
                     * @param request GetQueueRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Queue
                     */
                    public getQueue(request: google.cloud.tasks.v2.IGetQueueRequest, callback: google.cloud.tasks.v2.CloudTasks.GetQueueCallback): void;

                    /**
                     * Calls GetQueue.
                     * @param request GetQueueRequest message or plain object
                     * @returns Promise
                     */
                    public getQueue(request: google.cloud.tasks.v2.IGetQueueRequest): Promise<google.cloud.tasks.v2.Queue>;

                    /**
                     * Calls CreateQueue.
                     * @param request CreateQueueRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Queue
                     */
                    public createQueue(request: google.cloud.tasks.v2.ICreateQueueRequest, callback: google.cloud.tasks.v2.CloudTasks.CreateQueueCallback): void;

                    /**
                     * Calls CreateQueue.
                     * @param request CreateQueueRequest message or plain object
                     * @returns Promise
                     */
                    public createQueue(request: google.cloud.tasks.v2.ICreateQueueRequest): Promise<google.cloud.tasks.v2.Queue>;

                    /**
                     * Calls UpdateQueue.
                     * @param request UpdateQueueRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Queue
                     */
                    public updateQueue(request: google.cloud.tasks.v2.IUpdateQueueRequest, callback: google.cloud.tasks.v2.CloudTasks.UpdateQueueCallback): void;

                    /**
                     * Calls UpdateQueue.
                     * @param request UpdateQueueRequest message or plain object
                     * @returns Promise
                     */
                    public updateQueue(request: google.cloud.tasks.v2.IUpdateQueueRequest): Promise<google.cloud.tasks.v2.Queue>;

                    /**
                     * Calls DeleteQueue.
                     * @param request DeleteQueueRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Empty
                     */
                    public deleteQueue(request: google.cloud.tasks.v2.IDeleteQueueRequest, callback: google.cloud.tasks.v2.CloudTasks.DeleteQueueCallback): void;

                    /**
                     * Calls DeleteQueue.
                     * @param request DeleteQueueRequest message or plain object
                     * @returns Promise
                     */
                    public deleteQueue(request: google.cloud.tasks.v2.IDeleteQueueRequest): Promise<google.protobuf.Empty>;

                    /**
                     * Calls PurgeQueue.
                     * @param request PurgeQueueRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Queue
                     */
                    public purgeQueue(request: google.cloud.tasks.v2.IPurgeQueueRequest, callback: google.cloud.tasks.v2.CloudTasks.PurgeQueueCallback): void;

                    /**
                     * Calls PurgeQueue.
                     * @param request PurgeQueueRequest message or plain object
                     * @returns Promise
                     */
                    public purgeQueue(request: google.cloud.tasks.v2.IPurgeQueueRequest): Promise<google.cloud.tasks.v2.Queue>;

                    /**
                     * Calls PauseQueue.
                     * @param request PauseQueueRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Queue
                     */
                    public pauseQueue(request: google.cloud.tasks.v2.IPauseQueueRequest, callback: google.cloud.tasks.v2.CloudTasks.PauseQueueCallback): void;

                    /**
                     * Calls PauseQueue.
                     * @param request PauseQueueRequest message or plain object
                     * @returns Promise
                     */
                    public pauseQueue(request: google.cloud.tasks.v2.IPauseQueueRequest): Promise<google.cloud.tasks.v2.Queue>;

                    /**
                     * Calls ResumeQueue.
                     * @param request ResumeQueueRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Queue
                     */
                    public resumeQueue(request: google.cloud.tasks.v2.IResumeQueueRequest, callback: google.cloud.tasks.v2.CloudTasks.ResumeQueueCallback): void;

                    /**
                     * Calls ResumeQueue.
                     * @param request ResumeQueueRequest message or plain object
                     * @returns Promise
                     */
                    public resumeQueue(request: google.cloud.tasks.v2.IResumeQueueRequest): Promise<google.cloud.tasks.v2.Queue>;

                    /**
                     * Calls GetIamPolicy.
                     * @param request GetIamPolicyRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Policy
                     */
                    public getIamPolicy(request: google.iam.v1.IGetIamPolicyRequest, callback: google.cloud.tasks.v2.CloudTasks.GetIamPolicyCallback): void;

                    /**
                     * Calls GetIamPolicy.
                     * @param request GetIamPolicyRequest message or plain object
                     * @returns Promise
                     */
                    public getIamPolicy(request: google.iam.v1.IGetIamPolicyRequest): Promise<google.iam.v1.Policy>;

                    /**
                     * Calls SetIamPolicy.
                     * @param request SetIamPolicyRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Policy
                     */
                    public setIamPolicy(request: google.iam.v1.ISetIamPolicyRequest, callback: google.cloud.tasks.v2.CloudTasks.SetIamPolicyCallback): void;

                    /**
                     * Calls SetIamPolicy.
                     * @param request SetIamPolicyRequest message or plain object
                     * @returns Promise
                     */
                    public setIamPolicy(request: google.iam.v1.ISetIamPolicyRequest): Promise<google.iam.v1.Policy>;

                    /**
                     * Calls TestIamPermissions.
                     * @param request TestIamPermissionsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and TestIamPermissionsResponse
                     */
                    public testIamPermissions(request: google.iam.v1.ITestIamPermissionsRequest, callback: google.cloud.tasks.v2.CloudTasks.TestIamPermissionsCallback): void;

                    /**
                     * Calls TestIamPermissions.
                     * @param request TestIamPermissionsRequest message or plain object
                     * @returns Promise
                     */
                    public testIamPermissions(request: google.iam.v1.ITestIamPermissionsRequest): Promise<google.iam.v1.TestIamPermissionsResponse>;

                    /**
                     * Calls ListTasks.
                     * @param request ListTasksRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListTasksResponse
                     */
                    public listTasks(request: google.cloud.tasks.v2.IListTasksRequest, callback: google.cloud.tasks.v2.CloudTasks.ListTasksCallback): void;

                    /**
                     * Calls ListTasks.
                     * @param request ListTasksRequest message or plain object
                     * @returns Promise
                     */
                    public listTasks(request: google.cloud.tasks.v2.IListTasksRequest): Promise<google.cloud.tasks.v2.ListTasksResponse>;

                    /**
                     * Calls GetTask.
                     * @param request GetTaskRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Task
                     */
                    public getTask(request: google.cloud.tasks.v2.IGetTaskRequest, callback: google.cloud.tasks.v2.CloudTasks.GetTaskCallback): void;

                    /**
                     * Calls GetTask.
                     * @param request GetTaskRequest message or plain object
                     * @returns Promise
                     */
                    public getTask(request: google.cloud.tasks.v2.IGetTaskRequest): Promise<google.cloud.tasks.v2.Task>;

                    /**
                     * Calls CreateTask.
                     * @param request CreateTaskRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Task
                     */
                    public createTask(request: google.cloud.tasks.v2.ICreateTaskRequest, callback: google.cloud.tasks.v2.CloudTasks.CreateTaskCallback): void;

                    /**
                     * Calls CreateTask.
                     * @param request CreateTaskRequest message or plain object
                     * @returns Promise
                     */
                    public createTask(request: google.cloud.tasks.v2.ICreateTaskRequest): Promise<google.cloud.tasks.v2.Task>;

                    /**
                     * Calls DeleteTask.
                     * @param request DeleteTaskRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Empty
                     */
                    public deleteTask(request: google.cloud.tasks.v2.IDeleteTaskRequest, callback: google.cloud.tasks.v2.CloudTasks.DeleteTaskCallback): void;

                    /**
                     * Calls DeleteTask.
                     * @param request DeleteTaskRequest message or plain object
                     * @returns Promise
                     */
                    public deleteTask(request: google.cloud.tasks.v2.IDeleteTaskRequest): Promise<google.protobuf.Empty>;

                    /**
                     * Calls RunTask.
                     * @param request RunTaskRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Task
                     */
                    public runTask(request: google.cloud.tasks.v2.IRunTaskRequest, callback: google.cloud.tasks.v2.CloudTasks.RunTaskCallback): void;

                    /**
                     * Calls RunTask.
                     * @param request RunTaskRequest message or plain object
                     * @returns Promise
                     */
                    public runTask(request: google.cloud.tasks.v2.IRunTaskRequest): Promise<google.cloud.tasks.v2.Task>;
                }

                namespace CloudTasks {

                    /**
                     * Callback as used by {@link google.cloud.tasks.v2.CloudTasks#listQueues}.
                     * @param error Error, if any
                     * @param [response] ListQueuesResponse
                     */
                    type ListQueuesCallback = (error: (Error|null), response?: google.cloud.tasks.v2.ListQueuesResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.tasks.v2.CloudTasks#getQueue}.
                     * @param error Error, if any
                     * @param [response] Queue
                     */
                    type GetQueueCallback = (error: (Error|null), response?: google.cloud.tasks.v2.Queue) => void;

                    /**
                     * Callback as used by {@link google.cloud.tasks.v2.CloudTasks#createQueue}.
                     * @param error Error, if any
                     * @param [response] Queue
                     */
                    type CreateQueueCallback = (error: (Error|null), response?: google.cloud.tasks.v2.Queue) => void;

                    /**
                     * Callback as used by {@link google.cloud.tasks.v2.CloudTasks#updateQueue}.
                     * @param error Error, if any
                     * @param [response] Queue
                     */
                    type UpdateQueueCallback = (error: (Error|null), response?: google.cloud.tasks.v2.Queue) => void;

                    /**
                     * Callback as used by {@link google.cloud.tasks.v2.CloudTasks#deleteQueue}.
                     * @param error Error, if any
                     * @param [response] Empty
                     */
                    type DeleteQueueCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                    /**
                     * Callback as used by {@link google.cloud.tasks.v2.CloudTasks#purgeQueue}.
                     * @param error Error, if any
                     * @param [response] Queue
                     */
                    type PurgeQueueCallback = (error: (Error|null), response?: google.cloud.tasks.v2.Queue) => void;

                    /**
                     * Callback as used by {@link google.cloud.tasks.v2.CloudTasks#pauseQueue}.
                     * @param error Error, if any
                     * @param [response] Queue
                     */
                    type PauseQueueCallback = (error: (Error|null), response?: google.cloud.tasks.v2.Queue) => void;

                    /**
                     * Callback as used by {@link google.cloud.tasks.v2.CloudTasks#resumeQueue}.
                     * @param error Error, if any
                     * @param [response] Queue
                     */
                    type ResumeQueueCallback = (error: (Error|null), response?: google.cloud.tasks.v2.Queue) => void;

                    /**
                     * Callback as used by {@link google.cloud.tasks.v2.CloudTasks#getIamPolicy}.
                     * @param error Error, if any
                     * @param [response] Policy
                     */
                    type GetIamPolicyCallback = (error: (Error|null), response?: google.iam.v1.Policy) => void;

                    /**
                     * Callback as used by {@link google.cloud.tasks.v2.CloudTasks#setIamPolicy}.
                     * @param error Error, if any
                     * @param [response] Policy
                     */
                    type SetIamPolicyCallback = (error: (Error|null), response?: google.iam.v1.Policy) => void;

                    /**
                     * Callback as used by {@link google.cloud.tasks.v2.CloudTasks#testIamPermissions}.
                     * @param error Error, if any
                     * @param [response] TestIamPermissionsResponse
                     */
                    type TestIamPermissionsCallback = (error: (Error|null), response?: google.iam.v1.TestIamPermissionsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.tasks.v2.CloudTasks#listTasks}.
                     * @param error Error, if any
                     * @param [response] ListTasksResponse
                     */
                    type ListTasksCallback = (error: (Error|null), response?: google.cloud.tasks.v2.ListTasksResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.tasks.v2.CloudTasks#getTask}.
                     * @param error Error, if any
                     * @param [response] Task
                     */
                    type GetTaskCallback = (error: (Error|null), response?: google.cloud.tasks.v2.Task) => void;

                    /**
                     * Callback as used by {@link google.cloud.tasks.v2.CloudTasks#createTask}.
                     * @param error Error, if any
                     * @param [response] Task
                     */
                    type CreateTaskCallback = (error: (Error|null), response?: google.cloud.tasks.v2.Task) => void;

                    /**
                     * Callback as used by {@link google.cloud.tasks.v2.CloudTasks#deleteTask}.
                     * @param error Error, if any
                     * @param [response] Empty
                     */
                    type DeleteTaskCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                    /**
                     * Callback as used by {@link google.cloud.tasks.v2.CloudTasks#runTask}.
                     * @param error Error, if any
                     * @param [response] Task
                     */
                    type RunTaskCallback = (error: (Error|null), response?: google.cloud.tasks.v2.Task) => void;
                }

                /** Properties of a ListQueuesRequest. */
                interface IListQueuesRequest {

                    /** ListQueuesRequest parent */
                    parent?: (string|null);

                    /** ListQueuesRequest filter */
                    filter?: (string|null);

                    /** ListQueuesRequest pageSize */
                    pageSize?: (number|null);

                    /** ListQueuesRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListQueuesRequest. */
                class ListQueuesRequest implements IListQueuesRequest {

                    /**
                     * Constructs a new ListQueuesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tasks.v2.IListQueuesRequest);

                    /** ListQueuesRequest parent. */
                    public parent: string;

                    /** ListQueuesRequest filter. */
                    public filter: string;

                    /** ListQueuesRequest pageSize. */
                    public pageSize: number;

                    /** ListQueuesRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListQueuesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListQueuesRequest instance
                     */
                    public static create(properties?: google.cloud.tasks.v2.IListQueuesRequest): google.cloud.tasks.v2.ListQueuesRequest;

                    /**
                     * Encodes the specified ListQueuesRequest message. Does not implicitly {@link google.cloud.tasks.v2.ListQueuesRequest.verify|verify} messages.
                     * @param message ListQueuesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tasks.v2.IListQueuesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListQueuesRequest message, length delimited. Does not implicitly {@link google.cloud.tasks.v2.ListQueuesRequest.verify|verify} messages.
                     * @param message ListQueuesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tasks.v2.IListQueuesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListQueuesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListQueuesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tasks.v2.ListQueuesRequest;

                    /**
                     * Decodes a ListQueuesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListQueuesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tasks.v2.ListQueuesRequest;

                    /**
                     * Verifies a ListQueuesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListQueuesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListQueuesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tasks.v2.ListQueuesRequest;

                    /**
                     * Creates a plain object from a ListQueuesRequest message. Also converts values to other types if specified.
                     * @param message ListQueuesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tasks.v2.ListQueuesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListQueuesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListQueuesResponse. */
                interface IListQueuesResponse {

                    /** ListQueuesResponse queues */
                    queues?: (google.cloud.tasks.v2.IQueue[]|null);

                    /** ListQueuesResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListQueuesResponse. */
                class ListQueuesResponse implements IListQueuesResponse {

                    /**
                     * Constructs a new ListQueuesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tasks.v2.IListQueuesResponse);

                    /** ListQueuesResponse queues. */
                    public queues: google.cloud.tasks.v2.IQueue[];

                    /** ListQueuesResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListQueuesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListQueuesResponse instance
                     */
                    public static create(properties?: google.cloud.tasks.v2.IListQueuesResponse): google.cloud.tasks.v2.ListQueuesResponse;

                    /**
                     * Encodes the specified ListQueuesResponse message. Does not implicitly {@link google.cloud.tasks.v2.ListQueuesResponse.verify|verify} messages.
                     * @param message ListQueuesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tasks.v2.IListQueuesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListQueuesResponse message, length delimited. Does not implicitly {@link google.cloud.tasks.v2.ListQueuesResponse.verify|verify} messages.
                     * @param message ListQueuesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tasks.v2.IListQueuesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListQueuesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListQueuesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tasks.v2.ListQueuesResponse;

                    /**
                     * Decodes a ListQueuesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListQueuesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tasks.v2.ListQueuesResponse;

                    /**
                     * Verifies a ListQueuesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListQueuesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListQueuesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tasks.v2.ListQueuesResponse;

                    /**
                     * Creates a plain object from a ListQueuesResponse message. Also converts values to other types if specified.
                     * @param message ListQueuesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tasks.v2.ListQueuesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListQueuesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetQueueRequest. */
                interface IGetQueueRequest {

                    /** GetQueueRequest name */
                    name?: (string|null);
                }

                /** Represents a GetQueueRequest. */
                class GetQueueRequest implements IGetQueueRequest {

                    /**
                     * Constructs a new GetQueueRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tasks.v2.IGetQueueRequest);

                    /** GetQueueRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetQueueRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetQueueRequest instance
                     */
                    public static create(properties?: google.cloud.tasks.v2.IGetQueueRequest): google.cloud.tasks.v2.GetQueueRequest;

                    /**
                     * Encodes the specified GetQueueRequest message. Does not implicitly {@link google.cloud.tasks.v2.GetQueueRequest.verify|verify} messages.
                     * @param message GetQueueRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tasks.v2.IGetQueueRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetQueueRequest message, length delimited. Does not implicitly {@link google.cloud.tasks.v2.GetQueueRequest.verify|verify} messages.
                     * @param message GetQueueRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tasks.v2.IGetQueueRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetQueueRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetQueueRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tasks.v2.GetQueueRequest;

                    /**
                     * Decodes a GetQueueRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetQueueRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tasks.v2.GetQueueRequest;

                    /**
                     * Verifies a GetQueueRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetQueueRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetQueueRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tasks.v2.GetQueueRequest;

                    /**
                     * Creates a plain object from a GetQueueRequest message. Also converts values to other types if specified.
                     * @param message GetQueueRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tasks.v2.GetQueueRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetQueueRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a CreateQueueRequest. */
                interface ICreateQueueRequest {

                    /** CreateQueueRequest parent */
                    parent?: (string|null);

                    /** CreateQueueRequest queue */
                    queue?: (google.cloud.tasks.v2.IQueue|null);
                }

                /** Represents a CreateQueueRequest. */
                class CreateQueueRequest implements ICreateQueueRequest {

                    /**
                     * Constructs a new CreateQueueRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tasks.v2.ICreateQueueRequest);

                    /** CreateQueueRequest parent. */
                    public parent: string;

                    /** CreateQueueRequest queue. */
                    public queue?: (google.cloud.tasks.v2.IQueue|null);

                    /**
                     * Creates a new CreateQueueRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateQueueRequest instance
                     */
                    public static create(properties?: google.cloud.tasks.v2.ICreateQueueRequest): google.cloud.tasks.v2.CreateQueueRequest;

                    /**
                     * Encodes the specified CreateQueueRequest message. Does not implicitly {@link google.cloud.tasks.v2.CreateQueueRequest.verify|verify} messages.
                     * @param message CreateQueueRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tasks.v2.ICreateQueueRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateQueueRequest message, length delimited. Does not implicitly {@link google.cloud.tasks.v2.CreateQueueRequest.verify|verify} messages.
                     * @param message CreateQueueRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tasks.v2.ICreateQueueRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateQueueRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateQueueRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tasks.v2.CreateQueueRequest;

                    /**
                     * Decodes a CreateQueueRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateQueueRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tasks.v2.CreateQueueRequest;

                    /**
                     * Verifies a CreateQueueRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateQueueRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateQueueRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tasks.v2.CreateQueueRequest;

                    /**
                     * Creates a plain object from a CreateQueueRequest message. Also converts values to other types if specified.
                     * @param message CreateQueueRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tasks.v2.CreateQueueRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateQueueRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an UpdateQueueRequest. */
                interface IUpdateQueueRequest {

                    /** UpdateQueueRequest queue */
                    queue?: (google.cloud.tasks.v2.IQueue|null);

                    /** UpdateQueueRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);
                }

                /** Represents an UpdateQueueRequest. */
                class UpdateQueueRequest implements IUpdateQueueRequest {

                    /**
                     * Constructs a new UpdateQueueRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tasks.v2.IUpdateQueueRequest);

                    /** UpdateQueueRequest queue. */
                    public queue?: (google.cloud.tasks.v2.IQueue|null);

                    /** UpdateQueueRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /**
                     * Creates a new UpdateQueueRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateQueueRequest instance
                     */
                    public static create(properties?: google.cloud.tasks.v2.IUpdateQueueRequest): google.cloud.tasks.v2.UpdateQueueRequest;

                    /**
                     * Encodes the specified UpdateQueueRequest message. Does not implicitly {@link google.cloud.tasks.v2.UpdateQueueRequest.verify|verify} messages.
                     * @param message UpdateQueueRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tasks.v2.IUpdateQueueRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateQueueRequest message, length delimited. Does not implicitly {@link google.cloud.tasks.v2.UpdateQueueRequest.verify|verify} messages.
                     * @param message UpdateQueueRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tasks.v2.IUpdateQueueRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateQueueRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateQueueRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tasks.v2.UpdateQueueRequest;

                    /**
                     * Decodes an UpdateQueueRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateQueueRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tasks.v2.UpdateQueueRequest;

                    /**
                     * Verifies an UpdateQueueRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateQueueRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateQueueRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tasks.v2.UpdateQueueRequest;

                    /**
                     * Creates a plain object from an UpdateQueueRequest message. Also converts values to other types if specified.
                     * @param message UpdateQueueRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tasks.v2.UpdateQueueRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateQueueRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DeleteQueueRequest. */
                interface IDeleteQueueRequest {

                    /** DeleteQueueRequest name */
                    name?: (string|null);
                }

                /** Represents a DeleteQueueRequest. */
                class DeleteQueueRequest implements IDeleteQueueRequest {

                    /**
                     * Constructs a new DeleteQueueRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tasks.v2.IDeleteQueueRequest);

                    /** DeleteQueueRequest name. */
                    public name: string;

                    /**
                     * Creates a new DeleteQueueRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteQueueRequest instance
                     */
                    public static create(properties?: google.cloud.tasks.v2.IDeleteQueueRequest): google.cloud.tasks.v2.DeleteQueueRequest;

                    /**
                     * Encodes the specified DeleteQueueRequest message. Does not implicitly {@link google.cloud.tasks.v2.DeleteQueueRequest.verify|verify} messages.
                     * @param message DeleteQueueRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tasks.v2.IDeleteQueueRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteQueueRequest message, length delimited. Does not implicitly {@link google.cloud.tasks.v2.DeleteQueueRequest.verify|verify} messages.
                     * @param message DeleteQueueRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tasks.v2.IDeleteQueueRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteQueueRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteQueueRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tasks.v2.DeleteQueueRequest;

                    /**
                     * Decodes a DeleteQueueRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteQueueRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tasks.v2.DeleteQueueRequest;

                    /**
                     * Verifies a DeleteQueueRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteQueueRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteQueueRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tasks.v2.DeleteQueueRequest;

                    /**
                     * Creates a plain object from a DeleteQueueRequest message. Also converts values to other types if specified.
                     * @param message DeleteQueueRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tasks.v2.DeleteQueueRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteQueueRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a PurgeQueueRequest. */
                interface IPurgeQueueRequest {

                    /** PurgeQueueRequest name */
                    name?: (string|null);
                }

                /** Represents a PurgeQueueRequest. */
                class PurgeQueueRequest implements IPurgeQueueRequest {

                    /**
                     * Constructs a new PurgeQueueRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tasks.v2.IPurgeQueueRequest);

                    /** PurgeQueueRequest name. */
                    public name: string;

                    /**
                     * Creates a new PurgeQueueRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PurgeQueueRequest instance
                     */
                    public static create(properties?: google.cloud.tasks.v2.IPurgeQueueRequest): google.cloud.tasks.v2.PurgeQueueRequest;

                    /**
                     * Encodes the specified PurgeQueueRequest message. Does not implicitly {@link google.cloud.tasks.v2.PurgeQueueRequest.verify|verify} messages.
                     * @param message PurgeQueueRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tasks.v2.IPurgeQueueRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PurgeQueueRequest message, length delimited. Does not implicitly {@link google.cloud.tasks.v2.PurgeQueueRequest.verify|verify} messages.
                     * @param message PurgeQueueRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tasks.v2.IPurgeQueueRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PurgeQueueRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PurgeQueueRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tasks.v2.PurgeQueueRequest;

                    /**
                     * Decodes a PurgeQueueRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PurgeQueueRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tasks.v2.PurgeQueueRequest;

                    /**
                     * Verifies a PurgeQueueRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PurgeQueueRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PurgeQueueRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tasks.v2.PurgeQueueRequest;

                    /**
                     * Creates a plain object from a PurgeQueueRequest message. Also converts values to other types if specified.
                     * @param message PurgeQueueRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tasks.v2.PurgeQueueRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PurgeQueueRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a PauseQueueRequest. */
                interface IPauseQueueRequest {

                    /** PauseQueueRequest name */
                    name?: (string|null);
                }

                /** Represents a PauseQueueRequest. */
                class PauseQueueRequest implements IPauseQueueRequest {

                    /**
                     * Constructs a new PauseQueueRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tasks.v2.IPauseQueueRequest);

                    /** PauseQueueRequest name. */
                    public name: string;

                    /**
                     * Creates a new PauseQueueRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PauseQueueRequest instance
                     */
                    public static create(properties?: google.cloud.tasks.v2.IPauseQueueRequest): google.cloud.tasks.v2.PauseQueueRequest;

                    /**
                     * Encodes the specified PauseQueueRequest message. Does not implicitly {@link google.cloud.tasks.v2.PauseQueueRequest.verify|verify} messages.
                     * @param message PauseQueueRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tasks.v2.IPauseQueueRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PauseQueueRequest message, length delimited. Does not implicitly {@link google.cloud.tasks.v2.PauseQueueRequest.verify|verify} messages.
                     * @param message PauseQueueRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tasks.v2.IPauseQueueRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PauseQueueRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PauseQueueRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tasks.v2.PauseQueueRequest;

                    /**
                     * Decodes a PauseQueueRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PauseQueueRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tasks.v2.PauseQueueRequest;

                    /**
                     * Verifies a PauseQueueRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PauseQueueRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PauseQueueRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tasks.v2.PauseQueueRequest;

                    /**
                     * Creates a plain object from a PauseQueueRequest message. Also converts values to other types if specified.
                     * @param message PauseQueueRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tasks.v2.PauseQueueRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PauseQueueRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ResumeQueueRequest. */
                interface IResumeQueueRequest {

                    /** ResumeQueueRequest name */
                    name?: (string|null);
                }

                /** Represents a ResumeQueueRequest. */
                class ResumeQueueRequest implements IResumeQueueRequest {

                    /**
                     * Constructs a new ResumeQueueRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tasks.v2.IResumeQueueRequest);

                    /** ResumeQueueRequest name. */
                    public name: string;

                    /**
                     * Creates a new ResumeQueueRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ResumeQueueRequest instance
                     */
                    public static create(properties?: google.cloud.tasks.v2.IResumeQueueRequest): google.cloud.tasks.v2.ResumeQueueRequest;

                    /**
                     * Encodes the specified ResumeQueueRequest message. Does not implicitly {@link google.cloud.tasks.v2.ResumeQueueRequest.verify|verify} messages.
                     * @param message ResumeQueueRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tasks.v2.IResumeQueueRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ResumeQueueRequest message, length delimited. Does not implicitly {@link google.cloud.tasks.v2.ResumeQueueRequest.verify|verify} messages.
                     * @param message ResumeQueueRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tasks.v2.IResumeQueueRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ResumeQueueRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ResumeQueueRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tasks.v2.ResumeQueueRequest;

                    /**
                     * Decodes a ResumeQueueRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ResumeQueueRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tasks.v2.ResumeQueueRequest;

                    /**
                     * Verifies a ResumeQueueRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ResumeQueueRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ResumeQueueRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tasks.v2.ResumeQueueRequest;

                    /**
                     * Creates a plain object from a ResumeQueueRequest message. Also converts values to other types if specified.
                     * @param message ResumeQueueRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tasks.v2.ResumeQueueRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ResumeQueueRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListTasksRequest. */
                interface IListTasksRequest {

                    /** ListTasksRequest parent */
                    parent?: (string|null);

                    /** ListTasksRequest responseView */
                    responseView?: (google.cloud.tasks.v2.Task.View|keyof typeof google.cloud.tasks.v2.Task.View|null);

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
                    constructor(properties?: google.cloud.tasks.v2.IListTasksRequest);

                    /** ListTasksRequest parent. */
                    public parent: string;

                    /** ListTasksRequest responseView. */
                    public responseView: (google.cloud.tasks.v2.Task.View|keyof typeof google.cloud.tasks.v2.Task.View);

                    /** ListTasksRequest pageSize. */
                    public pageSize: number;

                    /** ListTasksRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListTasksRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListTasksRequest instance
                     */
                    public static create(properties?: google.cloud.tasks.v2.IListTasksRequest): google.cloud.tasks.v2.ListTasksRequest;

                    /**
                     * Encodes the specified ListTasksRequest message. Does not implicitly {@link google.cloud.tasks.v2.ListTasksRequest.verify|verify} messages.
                     * @param message ListTasksRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tasks.v2.IListTasksRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListTasksRequest message, length delimited. Does not implicitly {@link google.cloud.tasks.v2.ListTasksRequest.verify|verify} messages.
                     * @param message ListTasksRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tasks.v2.IListTasksRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListTasksRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListTasksRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tasks.v2.ListTasksRequest;

                    /**
                     * Decodes a ListTasksRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListTasksRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tasks.v2.ListTasksRequest;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.tasks.v2.ListTasksRequest;

                    /**
                     * Creates a plain object from a ListTasksRequest message. Also converts values to other types if specified.
                     * @param message ListTasksRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tasks.v2.ListTasksRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListTasksRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListTasksResponse. */
                interface IListTasksResponse {

                    /** ListTasksResponse tasks */
                    tasks?: (google.cloud.tasks.v2.ITask[]|null);

                    /** ListTasksResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListTasksResponse. */
                class ListTasksResponse implements IListTasksResponse {

                    /**
                     * Constructs a new ListTasksResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tasks.v2.IListTasksResponse);

                    /** ListTasksResponse tasks. */
                    public tasks: google.cloud.tasks.v2.ITask[];

                    /** ListTasksResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListTasksResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListTasksResponse instance
                     */
                    public static create(properties?: google.cloud.tasks.v2.IListTasksResponse): google.cloud.tasks.v2.ListTasksResponse;

                    /**
                     * Encodes the specified ListTasksResponse message. Does not implicitly {@link google.cloud.tasks.v2.ListTasksResponse.verify|verify} messages.
                     * @param message ListTasksResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tasks.v2.IListTasksResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListTasksResponse message, length delimited. Does not implicitly {@link google.cloud.tasks.v2.ListTasksResponse.verify|verify} messages.
                     * @param message ListTasksResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tasks.v2.IListTasksResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListTasksResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListTasksResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tasks.v2.ListTasksResponse;

                    /**
                     * Decodes a ListTasksResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListTasksResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tasks.v2.ListTasksResponse;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.tasks.v2.ListTasksResponse;

                    /**
                     * Creates a plain object from a ListTasksResponse message. Also converts values to other types if specified.
                     * @param message ListTasksResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tasks.v2.ListTasksResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListTasksResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetTaskRequest. */
                interface IGetTaskRequest {

                    /** GetTaskRequest name */
                    name?: (string|null);

                    /** GetTaskRequest responseView */
                    responseView?: (google.cloud.tasks.v2.Task.View|keyof typeof google.cloud.tasks.v2.Task.View|null);
                }

                /** Represents a GetTaskRequest. */
                class GetTaskRequest implements IGetTaskRequest {

                    /**
                     * Constructs a new GetTaskRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tasks.v2.IGetTaskRequest);

                    /** GetTaskRequest name. */
                    public name: string;

                    /** GetTaskRequest responseView. */
                    public responseView: (google.cloud.tasks.v2.Task.View|keyof typeof google.cloud.tasks.v2.Task.View);

                    /**
                     * Creates a new GetTaskRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetTaskRequest instance
                     */
                    public static create(properties?: google.cloud.tasks.v2.IGetTaskRequest): google.cloud.tasks.v2.GetTaskRequest;

                    /**
                     * Encodes the specified GetTaskRequest message. Does not implicitly {@link google.cloud.tasks.v2.GetTaskRequest.verify|verify} messages.
                     * @param message GetTaskRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tasks.v2.IGetTaskRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetTaskRequest message, length delimited. Does not implicitly {@link google.cloud.tasks.v2.GetTaskRequest.verify|verify} messages.
                     * @param message GetTaskRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tasks.v2.IGetTaskRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetTaskRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetTaskRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tasks.v2.GetTaskRequest;

                    /**
                     * Decodes a GetTaskRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetTaskRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tasks.v2.GetTaskRequest;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.tasks.v2.GetTaskRequest;

                    /**
                     * Creates a plain object from a GetTaskRequest message. Also converts values to other types if specified.
                     * @param message GetTaskRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tasks.v2.GetTaskRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetTaskRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a CreateTaskRequest. */
                interface ICreateTaskRequest {

                    /** CreateTaskRequest parent */
                    parent?: (string|null);

                    /** CreateTaskRequest task */
                    task?: (google.cloud.tasks.v2.ITask|null);

                    /** CreateTaskRequest responseView */
                    responseView?: (google.cloud.tasks.v2.Task.View|keyof typeof google.cloud.tasks.v2.Task.View|null);
                }

                /** Represents a CreateTaskRequest. */
                class CreateTaskRequest implements ICreateTaskRequest {

                    /**
                     * Constructs a new CreateTaskRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tasks.v2.ICreateTaskRequest);

                    /** CreateTaskRequest parent. */
                    public parent: string;

                    /** CreateTaskRequest task. */
                    public task?: (google.cloud.tasks.v2.ITask|null);

                    /** CreateTaskRequest responseView. */
                    public responseView: (google.cloud.tasks.v2.Task.View|keyof typeof google.cloud.tasks.v2.Task.View);

                    /**
                     * Creates a new CreateTaskRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateTaskRequest instance
                     */
                    public static create(properties?: google.cloud.tasks.v2.ICreateTaskRequest): google.cloud.tasks.v2.CreateTaskRequest;

                    /**
                     * Encodes the specified CreateTaskRequest message. Does not implicitly {@link google.cloud.tasks.v2.CreateTaskRequest.verify|verify} messages.
                     * @param message CreateTaskRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tasks.v2.ICreateTaskRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateTaskRequest message, length delimited. Does not implicitly {@link google.cloud.tasks.v2.CreateTaskRequest.verify|verify} messages.
                     * @param message CreateTaskRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tasks.v2.ICreateTaskRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateTaskRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateTaskRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tasks.v2.CreateTaskRequest;

                    /**
                     * Decodes a CreateTaskRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateTaskRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tasks.v2.CreateTaskRequest;

                    /**
                     * Verifies a CreateTaskRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateTaskRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateTaskRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tasks.v2.CreateTaskRequest;

                    /**
                     * Creates a plain object from a CreateTaskRequest message. Also converts values to other types if specified.
                     * @param message CreateTaskRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tasks.v2.CreateTaskRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateTaskRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DeleteTaskRequest. */
                interface IDeleteTaskRequest {

                    /** DeleteTaskRequest name */
                    name?: (string|null);
                }

                /** Represents a DeleteTaskRequest. */
                class DeleteTaskRequest implements IDeleteTaskRequest {

                    /**
                     * Constructs a new DeleteTaskRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tasks.v2.IDeleteTaskRequest);

                    /** DeleteTaskRequest name. */
                    public name: string;

                    /**
                     * Creates a new DeleteTaskRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteTaskRequest instance
                     */
                    public static create(properties?: google.cloud.tasks.v2.IDeleteTaskRequest): google.cloud.tasks.v2.DeleteTaskRequest;

                    /**
                     * Encodes the specified DeleteTaskRequest message. Does not implicitly {@link google.cloud.tasks.v2.DeleteTaskRequest.verify|verify} messages.
                     * @param message DeleteTaskRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tasks.v2.IDeleteTaskRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteTaskRequest message, length delimited. Does not implicitly {@link google.cloud.tasks.v2.DeleteTaskRequest.verify|verify} messages.
                     * @param message DeleteTaskRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tasks.v2.IDeleteTaskRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteTaskRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteTaskRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tasks.v2.DeleteTaskRequest;

                    /**
                     * Decodes a DeleteTaskRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteTaskRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tasks.v2.DeleteTaskRequest;

                    /**
                     * Verifies a DeleteTaskRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteTaskRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteTaskRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tasks.v2.DeleteTaskRequest;

                    /**
                     * Creates a plain object from a DeleteTaskRequest message. Also converts values to other types if specified.
                     * @param message DeleteTaskRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tasks.v2.DeleteTaskRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteTaskRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a RunTaskRequest. */
                interface IRunTaskRequest {

                    /** RunTaskRequest name */
                    name?: (string|null);

                    /** RunTaskRequest responseView */
                    responseView?: (google.cloud.tasks.v2.Task.View|keyof typeof google.cloud.tasks.v2.Task.View|null);
                }

                /** Represents a RunTaskRequest. */
                class RunTaskRequest implements IRunTaskRequest {

                    /**
                     * Constructs a new RunTaskRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tasks.v2.IRunTaskRequest);

                    /** RunTaskRequest name. */
                    public name: string;

                    /** RunTaskRequest responseView. */
                    public responseView: (google.cloud.tasks.v2.Task.View|keyof typeof google.cloud.tasks.v2.Task.View);

                    /**
                     * Creates a new RunTaskRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RunTaskRequest instance
                     */
                    public static create(properties?: google.cloud.tasks.v2.IRunTaskRequest): google.cloud.tasks.v2.RunTaskRequest;

                    /**
                     * Encodes the specified RunTaskRequest message. Does not implicitly {@link google.cloud.tasks.v2.RunTaskRequest.verify|verify} messages.
                     * @param message RunTaskRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tasks.v2.IRunTaskRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RunTaskRequest message, length delimited. Does not implicitly {@link google.cloud.tasks.v2.RunTaskRequest.verify|verify} messages.
                     * @param message RunTaskRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tasks.v2.IRunTaskRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RunTaskRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RunTaskRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tasks.v2.RunTaskRequest;

                    /**
                     * Decodes a RunTaskRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RunTaskRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tasks.v2.RunTaskRequest;

                    /**
                     * Verifies a RunTaskRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RunTaskRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RunTaskRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tasks.v2.RunTaskRequest;

                    /**
                     * Creates a plain object from a RunTaskRequest message. Also converts values to other types if specified.
                     * @param message RunTaskRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tasks.v2.RunTaskRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RunTaskRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a Queue. */
                interface IQueue {

                    /** Queue name */
                    name?: (string|null);

                    /** Queue appEngineRoutingOverride */
                    appEngineRoutingOverride?: (google.cloud.tasks.v2.IAppEngineRouting|null);

                    /** Queue rateLimits */
                    rateLimits?: (google.cloud.tasks.v2.IRateLimits|null);

                    /** Queue retryConfig */
                    retryConfig?: (google.cloud.tasks.v2.IRetryConfig|null);

                    /** Queue state */
                    state?: (google.cloud.tasks.v2.Queue.State|keyof typeof google.cloud.tasks.v2.Queue.State|null);

                    /** Queue purgeTime */
                    purgeTime?: (google.protobuf.ITimestamp|null);

                    /** Queue stackdriverLoggingConfig */
                    stackdriverLoggingConfig?: (google.cloud.tasks.v2.IStackdriverLoggingConfig|null);
                }

                /** Represents a Queue. */
                class Queue implements IQueue {

                    /**
                     * Constructs a new Queue.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tasks.v2.IQueue);

                    /** Queue name. */
                    public name: string;

                    /** Queue appEngineRoutingOverride. */
                    public appEngineRoutingOverride?: (google.cloud.tasks.v2.IAppEngineRouting|null);

                    /** Queue rateLimits. */
                    public rateLimits?: (google.cloud.tasks.v2.IRateLimits|null);

                    /** Queue retryConfig. */
                    public retryConfig?: (google.cloud.tasks.v2.IRetryConfig|null);

                    /** Queue state. */
                    public state: (google.cloud.tasks.v2.Queue.State|keyof typeof google.cloud.tasks.v2.Queue.State);

                    /** Queue purgeTime. */
                    public purgeTime?: (google.protobuf.ITimestamp|null);

                    /** Queue stackdriverLoggingConfig. */
                    public stackdriverLoggingConfig?: (google.cloud.tasks.v2.IStackdriverLoggingConfig|null);

                    /**
                     * Creates a new Queue instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Queue instance
                     */
                    public static create(properties?: google.cloud.tasks.v2.IQueue): google.cloud.tasks.v2.Queue;

                    /**
                     * Encodes the specified Queue message. Does not implicitly {@link google.cloud.tasks.v2.Queue.verify|verify} messages.
                     * @param message Queue message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tasks.v2.IQueue, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Queue message, length delimited. Does not implicitly {@link google.cloud.tasks.v2.Queue.verify|verify} messages.
                     * @param message Queue message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tasks.v2.IQueue, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Queue message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Queue
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tasks.v2.Queue;

                    /**
                     * Decodes a Queue message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Queue
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tasks.v2.Queue;

                    /**
                     * Verifies a Queue message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Queue message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Queue
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tasks.v2.Queue;

                    /**
                     * Creates a plain object from a Queue message. Also converts values to other types if specified.
                     * @param message Queue
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tasks.v2.Queue, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Queue to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace Queue {

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        RUNNING = 1,
                        PAUSED = 2,
                        DISABLED = 3
                    }
                }

                /** Properties of a RateLimits. */
                interface IRateLimits {

                    /** RateLimits maxDispatchesPerSecond */
                    maxDispatchesPerSecond?: (number|null);

                    /** RateLimits maxBurstSize */
                    maxBurstSize?: (number|null);

                    /** RateLimits maxConcurrentDispatches */
                    maxConcurrentDispatches?: (number|null);
                }

                /** Represents a RateLimits. */
                class RateLimits implements IRateLimits {

                    /**
                     * Constructs a new RateLimits.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tasks.v2.IRateLimits);

                    /** RateLimits maxDispatchesPerSecond. */
                    public maxDispatchesPerSecond: number;

                    /** RateLimits maxBurstSize. */
                    public maxBurstSize: number;

                    /** RateLimits maxConcurrentDispatches. */
                    public maxConcurrentDispatches: number;

                    /**
                     * Creates a new RateLimits instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RateLimits instance
                     */
                    public static create(properties?: google.cloud.tasks.v2.IRateLimits): google.cloud.tasks.v2.RateLimits;

                    /**
                     * Encodes the specified RateLimits message. Does not implicitly {@link google.cloud.tasks.v2.RateLimits.verify|verify} messages.
                     * @param message RateLimits message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tasks.v2.IRateLimits, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RateLimits message, length delimited. Does not implicitly {@link google.cloud.tasks.v2.RateLimits.verify|verify} messages.
                     * @param message RateLimits message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tasks.v2.IRateLimits, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RateLimits message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RateLimits
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tasks.v2.RateLimits;

                    /**
                     * Decodes a RateLimits message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RateLimits
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tasks.v2.RateLimits;

                    /**
                     * Verifies a RateLimits message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RateLimits message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RateLimits
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tasks.v2.RateLimits;

                    /**
                     * Creates a plain object from a RateLimits message. Also converts values to other types if specified.
                     * @param message RateLimits
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tasks.v2.RateLimits, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RateLimits to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a RetryConfig. */
                interface IRetryConfig {

                    /** RetryConfig maxAttempts */
                    maxAttempts?: (number|null);

                    /** RetryConfig maxRetryDuration */
                    maxRetryDuration?: (google.protobuf.IDuration|null);

                    /** RetryConfig minBackoff */
                    minBackoff?: (google.protobuf.IDuration|null);

                    /** RetryConfig maxBackoff */
                    maxBackoff?: (google.protobuf.IDuration|null);

                    /** RetryConfig maxDoublings */
                    maxDoublings?: (number|null);
                }

                /** Represents a RetryConfig. */
                class RetryConfig implements IRetryConfig {

                    /**
                     * Constructs a new RetryConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tasks.v2.IRetryConfig);

                    /** RetryConfig maxAttempts. */
                    public maxAttempts: number;

                    /** RetryConfig maxRetryDuration. */
                    public maxRetryDuration?: (google.protobuf.IDuration|null);

                    /** RetryConfig minBackoff. */
                    public minBackoff?: (google.protobuf.IDuration|null);

                    /** RetryConfig maxBackoff. */
                    public maxBackoff?: (google.protobuf.IDuration|null);

                    /** RetryConfig maxDoublings. */
                    public maxDoublings: number;

                    /**
                     * Creates a new RetryConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RetryConfig instance
                     */
                    public static create(properties?: google.cloud.tasks.v2.IRetryConfig): google.cloud.tasks.v2.RetryConfig;

                    /**
                     * Encodes the specified RetryConfig message. Does not implicitly {@link google.cloud.tasks.v2.RetryConfig.verify|verify} messages.
                     * @param message RetryConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tasks.v2.IRetryConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RetryConfig message, length delimited. Does not implicitly {@link google.cloud.tasks.v2.RetryConfig.verify|verify} messages.
                     * @param message RetryConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tasks.v2.IRetryConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RetryConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RetryConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tasks.v2.RetryConfig;

                    /**
                     * Decodes a RetryConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RetryConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tasks.v2.RetryConfig;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.tasks.v2.RetryConfig;

                    /**
                     * Creates a plain object from a RetryConfig message. Also converts values to other types if specified.
                     * @param message RetryConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tasks.v2.RetryConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RetryConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a StackdriverLoggingConfig. */
                interface IStackdriverLoggingConfig {

                    /** StackdriverLoggingConfig samplingRatio */
                    samplingRatio?: (number|null);
                }

                /** Represents a StackdriverLoggingConfig. */
                class StackdriverLoggingConfig implements IStackdriverLoggingConfig {

                    /**
                     * Constructs a new StackdriverLoggingConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tasks.v2.IStackdriverLoggingConfig);

                    /** StackdriverLoggingConfig samplingRatio. */
                    public samplingRatio: number;

                    /**
                     * Creates a new StackdriverLoggingConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns StackdriverLoggingConfig instance
                     */
                    public static create(properties?: google.cloud.tasks.v2.IStackdriverLoggingConfig): google.cloud.tasks.v2.StackdriverLoggingConfig;

                    /**
                     * Encodes the specified StackdriverLoggingConfig message. Does not implicitly {@link google.cloud.tasks.v2.StackdriverLoggingConfig.verify|verify} messages.
                     * @param message StackdriverLoggingConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tasks.v2.IStackdriverLoggingConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified StackdriverLoggingConfig message, length delimited. Does not implicitly {@link google.cloud.tasks.v2.StackdriverLoggingConfig.verify|verify} messages.
                     * @param message StackdriverLoggingConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tasks.v2.IStackdriverLoggingConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a StackdriverLoggingConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns StackdriverLoggingConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tasks.v2.StackdriverLoggingConfig;

                    /**
                     * Decodes a StackdriverLoggingConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns StackdriverLoggingConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tasks.v2.StackdriverLoggingConfig;

                    /**
                     * Verifies a StackdriverLoggingConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a StackdriverLoggingConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns StackdriverLoggingConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tasks.v2.StackdriverLoggingConfig;

                    /**
                     * Creates a plain object from a StackdriverLoggingConfig message. Also converts values to other types if specified.
                     * @param message StackdriverLoggingConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tasks.v2.StackdriverLoggingConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this StackdriverLoggingConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a HttpRequest. */
                interface IHttpRequest {

                    /** HttpRequest url */
                    url?: (string|null);

                    /** HttpRequest httpMethod */
                    httpMethod?: (google.cloud.tasks.v2.HttpMethod|keyof typeof google.cloud.tasks.v2.HttpMethod|null);

                    /** HttpRequest headers */
                    headers?: ({ [k: string]: string }|null);

                    /** HttpRequest body */
                    body?: (Uint8Array|string|null);

                    /** HttpRequest oauthToken */
                    oauthToken?: (google.cloud.tasks.v2.IOAuthToken|null);

                    /** HttpRequest oidcToken */
                    oidcToken?: (google.cloud.tasks.v2.IOidcToken|null);
                }

                /** Represents a HttpRequest. */
                class HttpRequest implements IHttpRequest {

                    /**
                     * Constructs a new HttpRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tasks.v2.IHttpRequest);

                    /** HttpRequest url. */
                    public url: string;

                    /** HttpRequest httpMethod. */
                    public httpMethod: (google.cloud.tasks.v2.HttpMethod|keyof typeof google.cloud.tasks.v2.HttpMethod);

                    /** HttpRequest headers. */
                    public headers: { [k: string]: string };

                    /** HttpRequest body. */
                    public body: (Uint8Array|string);

                    /** HttpRequest oauthToken. */
                    public oauthToken?: (google.cloud.tasks.v2.IOAuthToken|null);

                    /** HttpRequest oidcToken. */
                    public oidcToken?: (google.cloud.tasks.v2.IOidcToken|null);

                    /** HttpRequest authorizationHeader. */
                    public authorizationHeader?: ("oauthToken"|"oidcToken");

                    /**
                     * Creates a new HttpRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns HttpRequest instance
                     */
                    public static create(properties?: google.cloud.tasks.v2.IHttpRequest): google.cloud.tasks.v2.HttpRequest;

                    /**
                     * Encodes the specified HttpRequest message. Does not implicitly {@link google.cloud.tasks.v2.HttpRequest.verify|verify} messages.
                     * @param message HttpRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tasks.v2.IHttpRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified HttpRequest message, length delimited. Does not implicitly {@link google.cloud.tasks.v2.HttpRequest.verify|verify} messages.
                     * @param message HttpRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tasks.v2.IHttpRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a HttpRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns HttpRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tasks.v2.HttpRequest;

                    /**
                     * Decodes a HttpRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns HttpRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tasks.v2.HttpRequest;

                    /**
                     * Verifies a HttpRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a HttpRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns HttpRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tasks.v2.HttpRequest;

                    /**
                     * Creates a plain object from a HttpRequest message. Also converts values to other types if specified.
                     * @param message HttpRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tasks.v2.HttpRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this HttpRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an AppEngineHttpRequest. */
                interface IAppEngineHttpRequest {

                    /** AppEngineHttpRequest httpMethod */
                    httpMethod?: (google.cloud.tasks.v2.HttpMethod|keyof typeof google.cloud.tasks.v2.HttpMethod|null);

                    /** AppEngineHttpRequest appEngineRouting */
                    appEngineRouting?: (google.cloud.tasks.v2.IAppEngineRouting|null);

                    /** AppEngineHttpRequest relativeUri */
                    relativeUri?: (string|null);

                    /** AppEngineHttpRequest headers */
                    headers?: ({ [k: string]: string }|null);

                    /** AppEngineHttpRequest body */
                    body?: (Uint8Array|string|null);
                }

                /** Represents an AppEngineHttpRequest. */
                class AppEngineHttpRequest implements IAppEngineHttpRequest {

                    /**
                     * Constructs a new AppEngineHttpRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tasks.v2.IAppEngineHttpRequest);

                    /** AppEngineHttpRequest httpMethod. */
                    public httpMethod: (google.cloud.tasks.v2.HttpMethod|keyof typeof google.cloud.tasks.v2.HttpMethod);

                    /** AppEngineHttpRequest appEngineRouting. */
                    public appEngineRouting?: (google.cloud.tasks.v2.IAppEngineRouting|null);

                    /** AppEngineHttpRequest relativeUri. */
                    public relativeUri: string;

                    /** AppEngineHttpRequest headers. */
                    public headers: { [k: string]: string };

                    /** AppEngineHttpRequest body. */
                    public body: (Uint8Array|string);

                    /**
                     * Creates a new AppEngineHttpRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AppEngineHttpRequest instance
                     */
                    public static create(properties?: google.cloud.tasks.v2.IAppEngineHttpRequest): google.cloud.tasks.v2.AppEngineHttpRequest;

                    /**
                     * Encodes the specified AppEngineHttpRequest message. Does not implicitly {@link google.cloud.tasks.v2.AppEngineHttpRequest.verify|verify} messages.
                     * @param message AppEngineHttpRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tasks.v2.IAppEngineHttpRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AppEngineHttpRequest message, length delimited. Does not implicitly {@link google.cloud.tasks.v2.AppEngineHttpRequest.verify|verify} messages.
                     * @param message AppEngineHttpRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tasks.v2.IAppEngineHttpRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AppEngineHttpRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AppEngineHttpRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tasks.v2.AppEngineHttpRequest;

                    /**
                     * Decodes an AppEngineHttpRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AppEngineHttpRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tasks.v2.AppEngineHttpRequest;

                    /**
                     * Verifies an AppEngineHttpRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AppEngineHttpRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AppEngineHttpRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tasks.v2.AppEngineHttpRequest;

                    /**
                     * Creates a plain object from an AppEngineHttpRequest message. Also converts values to other types if specified.
                     * @param message AppEngineHttpRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tasks.v2.AppEngineHttpRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AppEngineHttpRequest to JSON.
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
                    constructor(properties?: google.cloud.tasks.v2.IAppEngineRouting);

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
                    public static create(properties?: google.cloud.tasks.v2.IAppEngineRouting): google.cloud.tasks.v2.AppEngineRouting;

                    /**
                     * Encodes the specified AppEngineRouting message. Does not implicitly {@link google.cloud.tasks.v2.AppEngineRouting.verify|verify} messages.
                     * @param message AppEngineRouting message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tasks.v2.IAppEngineRouting, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AppEngineRouting message, length delimited. Does not implicitly {@link google.cloud.tasks.v2.AppEngineRouting.verify|verify} messages.
                     * @param message AppEngineRouting message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tasks.v2.IAppEngineRouting, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AppEngineRouting message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AppEngineRouting
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tasks.v2.AppEngineRouting;

                    /**
                     * Decodes an AppEngineRouting message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AppEngineRouting
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tasks.v2.AppEngineRouting;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.tasks.v2.AppEngineRouting;

                    /**
                     * Creates a plain object from an AppEngineRouting message. Also converts values to other types if specified.
                     * @param message AppEngineRouting
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tasks.v2.AppEngineRouting, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
                    constructor(properties?: google.cloud.tasks.v2.IOAuthToken);

                    /** OAuthToken serviceAccountEmail. */
                    public serviceAccountEmail: string;

                    /** OAuthToken scope. */
                    public scope: string;

                    /**
                     * Creates a new OAuthToken instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns OAuthToken instance
                     */
                    public static create(properties?: google.cloud.tasks.v2.IOAuthToken): google.cloud.tasks.v2.OAuthToken;

                    /**
                     * Encodes the specified OAuthToken message. Does not implicitly {@link google.cloud.tasks.v2.OAuthToken.verify|verify} messages.
                     * @param message OAuthToken message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tasks.v2.IOAuthToken, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified OAuthToken message, length delimited. Does not implicitly {@link google.cloud.tasks.v2.OAuthToken.verify|verify} messages.
                     * @param message OAuthToken message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tasks.v2.IOAuthToken, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a OAuthToken message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns OAuthToken
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tasks.v2.OAuthToken;

                    /**
                     * Decodes a OAuthToken message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns OAuthToken
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tasks.v2.OAuthToken;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.tasks.v2.OAuthToken;

                    /**
                     * Creates a plain object from a OAuthToken message. Also converts values to other types if specified.
                     * @param message OAuthToken
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tasks.v2.OAuthToken, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
                    constructor(properties?: google.cloud.tasks.v2.IOidcToken);

                    /** OidcToken serviceAccountEmail. */
                    public serviceAccountEmail: string;

                    /** OidcToken audience. */
                    public audience: string;

                    /**
                     * Creates a new OidcToken instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns OidcToken instance
                     */
                    public static create(properties?: google.cloud.tasks.v2.IOidcToken): google.cloud.tasks.v2.OidcToken;

                    /**
                     * Encodes the specified OidcToken message. Does not implicitly {@link google.cloud.tasks.v2.OidcToken.verify|verify} messages.
                     * @param message OidcToken message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tasks.v2.IOidcToken, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified OidcToken message, length delimited. Does not implicitly {@link google.cloud.tasks.v2.OidcToken.verify|verify} messages.
                     * @param message OidcToken message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tasks.v2.IOidcToken, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an OidcToken message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns OidcToken
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tasks.v2.OidcToken;

                    /**
                     * Decodes an OidcToken message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns OidcToken
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tasks.v2.OidcToken;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.tasks.v2.OidcToken;

                    /**
                     * Creates a plain object from an OidcToken message. Also converts values to other types if specified.
                     * @param message OidcToken
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tasks.v2.OidcToken, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this OidcToken to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a Task. */
                interface ITask {

                    /** Task name */
                    name?: (string|null);

                    /** Task appEngineHttpRequest */
                    appEngineHttpRequest?: (google.cloud.tasks.v2.IAppEngineHttpRequest|null);

                    /** Task httpRequest */
                    httpRequest?: (google.cloud.tasks.v2.IHttpRequest|null);

                    /** Task scheduleTime */
                    scheduleTime?: (google.protobuf.ITimestamp|null);

                    /** Task createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** Task dispatchDeadline */
                    dispatchDeadline?: (google.protobuf.IDuration|null);

                    /** Task dispatchCount */
                    dispatchCount?: (number|null);

                    /** Task responseCount */
                    responseCount?: (number|null);

                    /** Task firstAttempt */
                    firstAttempt?: (google.cloud.tasks.v2.IAttempt|null);

                    /** Task lastAttempt */
                    lastAttempt?: (google.cloud.tasks.v2.IAttempt|null);

                    /** Task view */
                    view?: (google.cloud.tasks.v2.Task.View|keyof typeof google.cloud.tasks.v2.Task.View|null);
                }

                /** Represents a Task. */
                class Task implements ITask {

                    /**
                     * Constructs a new Task.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tasks.v2.ITask);

                    /** Task name. */
                    public name: string;

                    /** Task appEngineHttpRequest. */
                    public appEngineHttpRequest?: (google.cloud.tasks.v2.IAppEngineHttpRequest|null);

                    /** Task httpRequest. */
                    public httpRequest?: (google.cloud.tasks.v2.IHttpRequest|null);

                    /** Task scheduleTime. */
                    public scheduleTime?: (google.protobuf.ITimestamp|null);

                    /** Task createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** Task dispatchDeadline. */
                    public dispatchDeadline?: (google.protobuf.IDuration|null);

                    /** Task dispatchCount. */
                    public dispatchCount: number;

                    /** Task responseCount. */
                    public responseCount: number;

                    /** Task firstAttempt. */
                    public firstAttempt?: (google.cloud.tasks.v2.IAttempt|null);

                    /** Task lastAttempt. */
                    public lastAttempt?: (google.cloud.tasks.v2.IAttempt|null);

                    /** Task view. */
                    public view: (google.cloud.tasks.v2.Task.View|keyof typeof google.cloud.tasks.v2.Task.View);

                    /** Task messageType. */
                    public messageType?: ("appEngineHttpRequest"|"httpRequest");

                    /**
                     * Creates a new Task instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Task instance
                     */
                    public static create(properties?: google.cloud.tasks.v2.ITask): google.cloud.tasks.v2.Task;

                    /**
                     * Encodes the specified Task message. Does not implicitly {@link google.cloud.tasks.v2.Task.verify|verify} messages.
                     * @param message Task message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tasks.v2.ITask, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Task message, length delimited. Does not implicitly {@link google.cloud.tasks.v2.Task.verify|verify} messages.
                     * @param message Task message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tasks.v2.ITask, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Task message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Task
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tasks.v2.Task;

                    /**
                     * Decodes a Task message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Task
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tasks.v2.Task;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.tasks.v2.Task;

                    /**
                     * Creates a plain object from a Task message. Also converts values to other types if specified.
                     * @param message Task
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tasks.v2.Task, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Task to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace Task {

                    /** View enum. */
                    enum View {
                        VIEW_UNSPECIFIED = 0,
                        BASIC = 1,
                        FULL = 2
                    }
                }

                /** Properties of an Attempt. */
                interface IAttempt {

                    /** Attempt scheduleTime */
                    scheduleTime?: (google.protobuf.ITimestamp|null);

                    /** Attempt dispatchTime */
                    dispatchTime?: (google.protobuf.ITimestamp|null);

                    /** Attempt responseTime */
                    responseTime?: (google.protobuf.ITimestamp|null);

                    /** Attempt responseStatus */
                    responseStatus?: (google.rpc.IStatus|null);
                }

                /** Represents an Attempt. */
                class Attempt implements IAttempt {

                    /**
                     * Constructs a new Attempt.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tasks.v2.IAttempt);

                    /** Attempt scheduleTime. */
                    public scheduleTime?: (google.protobuf.ITimestamp|null);

                    /** Attempt dispatchTime. */
                    public dispatchTime?: (google.protobuf.ITimestamp|null);

                    /** Attempt responseTime. */
                    public responseTime?: (google.protobuf.ITimestamp|null);

                    /** Attempt responseStatus. */
                    public responseStatus?: (google.rpc.IStatus|null);

                    /**
                     * Creates a new Attempt instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Attempt instance
                     */
                    public static create(properties?: google.cloud.tasks.v2.IAttempt): google.cloud.tasks.v2.Attempt;

                    /**
                     * Encodes the specified Attempt message. Does not implicitly {@link google.cloud.tasks.v2.Attempt.verify|verify} messages.
                     * @param message Attempt message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tasks.v2.IAttempt, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Attempt message, length delimited. Does not implicitly {@link google.cloud.tasks.v2.Attempt.verify|verify} messages.
                     * @param message Attempt message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tasks.v2.IAttempt, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an Attempt message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Attempt
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tasks.v2.Attempt;

                    /**
                     * Decodes an Attempt message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Attempt
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tasks.v2.Attempt;

                    /**
                     * Verifies an Attempt message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an Attempt message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Attempt
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tasks.v2.Attempt;

                    /**
                     * Creates a plain object from an Attempt message. Also converts values to other types if specified.
                     * @param message Attempt
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tasks.v2.Attempt, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Attempt to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }
            }

            /** Namespace v2beta2. */
            namespace v2beta2 {

                /** Represents a CloudTasks */
                class CloudTasks extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new CloudTasks service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new CloudTasks service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): CloudTasks;

                    /**
                     * Calls ListQueues.
                     * @param request ListQueuesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListQueuesResponse
                     */
                    public listQueues(request: google.cloud.tasks.v2beta2.IListQueuesRequest, callback: google.cloud.tasks.v2beta2.CloudTasks.ListQueuesCallback): void;

                    /**
                     * Calls ListQueues.
                     * @param request ListQueuesRequest message or plain object
                     * @returns Promise
                     */
                    public listQueues(request: google.cloud.tasks.v2beta2.IListQueuesRequest): Promise<google.cloud.tasks.v2beta2.ListQueuesResponse>;

                    /**
                     * Calls GetQueue.
                     * @param request GetQueueRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Queue
                     */
                    public getQueue(request: google.cloud.tasks.v2beta2.IGetQueueRequest, callback: google.cloud.tasks.v2beta2.CloudTasks.GetQueueCallback): void;

                    /**
                     * Calls GetQueue.
                     * @param request GetQueueRequest message or plain object
                     * @returns Promise
                     */
                    public getQueue(request: google.cloud.tasks.v2beta2.IGetQueueRequest): Promise<google.cloud.tasks.v2beta2.Queue>;

                    /**
                     * Calls CreateQueue.
                     * @param request CreateQueueRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Queue
                     */
                    public createQueue(request: google.cloud.tasks.v2beta2.ICreateQueueRequest, callback: google.cloud.tasks.v2beta2.CloudTasks.CreateQueueCallback): void;

                    /**
                     * Calls CreateQueue.
                     * @param request CreateQueueRequest message or plain object
                     * @returns Promise
                     */
                    public createQueue(request: google.cloud.tasks.v2beta2.ICreateQueueRequest): Promise<google.cloud.tasks.v2beta2.Queue>;

                    /**
                     * Calls UpdateQueue.
                     * @param request UpdateQueueRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Queue
                     */
                    public updateQueue(request: google.cloud.tasks.v2beta2.IUpdateQueueRequest, callback: google.cloud.tasks.v2beta2.CloudTasks.UpdateQueueCallback): void;

                    /**
                     * Calls UpdateQueue.
                     * @param request UpdateQueueRequest message or plain object
                     * @returns Promise
                     */
                    public updateQueue(request: google.cloud.tasks.v2beta2.IUpdateQueueRequest): Promise<google.cloud.tasks.v2beta2.Queue>;

                    /**
                     * Calls DeleteQueue.
                     * @param request DeleteQueueRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Empty
                     */
                    public deleteQueue(request: google.cloud.tasks.v2beta2.IDeleteQueueRequest, callback: google.cloud.tasks.v2beta2.CloudTasks.DeleteQueueCallback): void;

                    /**
                     * Calls DeleteQueue.
                     * @param request DeleteQueueRequest message or plain object
                     * @returns Promise
                     */
                    public deleteQueue(request: google.cloud.tasks.v2beta2.IDeleteQueueRequest): Promise<google.protobuf.Empty>;

                    /**
                     * Calls PurgeQueue.
                     * @param request PurgeQueueRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Queue
                     */
                    public purgeQueue(request: google.cloud.tasks.v2beta2.IPurgeQueueRequest, callback: google.cloud.tasks.v2beta2.CloudTasks.PurgeQueueCallback): void;

                    /**
                     * Calls PurgeQueue.
                     * @param request PurgeQueueRequest message or plain object
                     * @returns Promise
                     */
                    public purgeQueue(request: google.cloud.tasks.v2beta2.IPurgeQueueRequest): Promise<google.cloud.tasks.v2beta2.Queue>;

                    /**
                     * Calls PauseQueue.
                     * @param request PauseQueueRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Queue
                     */
                    public pauseQueue(request: google.cloud.tasks.v2beta2.IPauseQueueRequest, callback: google.cloud.tasks.v2beta2.CloudTasks.PauseQueueCallback): void;

                    /**
                     * Calls PauseQueue.
                     * @param request PauseQueueRequest message or plain object
                     * @returns Promise
                     */
                    public pauseQueue(request: google.cloud.tasks.v2beta2.IPauseQueueRequest): Promise<google.cloud.tasks.v2beta2.Queue>;

                    /**
                     * Calls ResumeQueue.
                     * @param request ResumeQueueRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Queue
                     */
                    public resumeQueue(request: google.cloud.tasks.v2beta2.IResumeQueueRequest, callback: google.cloud.tasks.v2beta2.CloudTasks.ResumeQueueCallback): void;

                    /**
                     * Calls ResumeQueue.
                     * @param request ResumeQueueRequest message or plain object
                     * @returns Promise
                     */
                    public resumeQueue(request: google.cloud.tasks.v2beta2.IResumeQueueRequest): Promise<google.cloud.tasks.v2beta2.Queue>;

                    /**
                     * Calls GetIamPolicy.
                     * @param request GetIamPolicyRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Policy
                     */
                    public getIamPolicy(request: google.iam.v1.IGetIamPolicyRequest, callback: google.cloud.tasks.v2beta2.CloudTasks.GetIamPolicyCallback): void;

                    /**
                     * Calls GetIamPolicy.
                     * @param request GetIamPolicyRequest message or plain object
                     * @returns Promise
                     */
                    public getIamPolicy(request: google.iam.v1.IGetIamPolicyRequest): Promise<google.iam.v1.Policy>;

                    /**
                     * Calls SetIamPolicy.
                     * @param request SetIamPolicyRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Policy
                     */
                    public setIamPolicy(request: google.iam.v1.ISetIamPolicyRequest, callback: google.cloud.tasks.v2beta2.CloudTasks.SetIamPolicyCallback): void;

                    /**
                     * Calls SetIamPolicy.
                     * @param request SetIamPolicyRequest message or plain object
                     * @returns Promise
                     */
                    public setIamPolicy(request: google.iam.v1.ISetIamPolicyRequest): Promise<google.iam.v1.Policy>;

                    /**
                     * Calls TestIamPermissions.
                     * @param request TestIamPermissionsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and TestIamPermissionsResponse
                     */
                    public testIamPermissions(request: google.iam.v1.ITestIamPermissionsRequest, callback: google.cloud.tasks.v2beta2.CloudTasks.TestIamPermissionsCallback): void;

                    /**
                     * Calls TestIamPermissions.
                     * @param request TestIamPermissionsRequest message or plain object
                     * @returns Promise
                     */
                    public testIamPermissions(request: google.iam.v1.ITestIamPermissionsRequest): Promise<google.iam.v1.TestIamPermissionsResponse>;

                    /**
                     * Calls ListTasks.
                     * @param request ListTasksRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListTasksResponse
                     */
                    public listTasks(request: google.cloud.tasks.v2beta2.IListTasksRequest, callback: google.cloud.tasks.v2beta2.CloudTasks.ListTasksCallback): void;

                    /**
                     * Calls ListTasks.
                     * @param request ListTasksRequest message or plain object
                     * @returns Promise
                     */
                    public listTasks(request: google.cloud.tasks.v2beta2.IListTasksRequest): Promise<google.cloud.tasks.v2beta2.ListTasksResponse>;

                    /**
                     * Calls GetTask.
                     * @param request GetTaskRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Task
                     */
                    public getTask(request: google.cloud.tasks.v2beta2.IGetTaskRequest, callback: google.cloud.tasks.v2beta2.CloudTasks.GetTaskCallback): void;

                    /**
                     * Calls GetTask.
                     * @param request GetTaskRequest message or plain object
                     * @returns Promise
                     */
                    public getTask(request: google.cloud.tasks.v2beta2.IGetTaskRequest): Promise<google.cloud.tasks.v2beta2.Task>;

                    /**
                     * Calls CreateTask.
                     * @param request CreateTaskRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Task
                     */
                    public createTask(request: google.cloud.tasks.v2beta2.ICreateTaskRequest, callback: google.cloud.tasks.v2beta2.CloudTasks.CreateTaskCallback): void;

                    /**
                     * Calls CreateTask.
                     * @param request CreateTaskRequest message or plain object
                     * @returns Promise
                     */
                    public createTask(request: google.cloud.tasks.v2beta2.ICreateTaskRequest): Promise<google.cloud.tasks.v2beta2.Task>;

                    /**
                     * Calls DeleteTask.
                     * @param request DeleteTaskRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Empty
                     */
                    public deleteTask(request: google.cloud.tasks.v2beta2.IDeleteTaskRequest, callback: google.cloud.tasks.v2beta2.CloudTasks.DeleteTaskCallback): void;

                    /**
                     * Calls DeleteTask.
                     * @param request DeleteTaskRequest message or plain object
                     * @returns Promise
                     */
                    public deleteTask(request: google.cloud.tasks.v2beta2.IDeleteTaskRequest): Promise<google.protobuf.Empty>;

                    /**
                     * Calls LeaseTasks.
                     * @param request LeaseTasksRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and LeaseTasksResponse
                     */
                    public leaseTasks(request: google.cloud.tasks.v2beta2.ILeaseTasksRequest, callback: google.cloud.tasks.v2beta2.CloudTasks.LeaseTasksCallback): void;

                    /**
                     * Calls LeaseTasks.
                     * @param request LeaseTasksRequest message or plain object
                     * @returns Promise
                     */
                    public leaseTasks(request: google.cloud.tasks.v2beta2.ILeaseTasksRequest): Promise<google.cloud.tasks.v2beta2.LeaseTasksResponse>;

                    /**
                     * Calls AcknowledgeTask.
                     * @param request AcknowledgeTaskRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Empty
                     */
                    public acknowledgeTask(request: google.cloud.tasks.v2beta2.IAcknowledgeTaskRequest, callback: google.cloud.tasks.v2beta2.CloudTasks.AcknowledgeTaskCallback): void;

                    /**
                     * Calls AcknowledgeTask.
                     * @param request AcknowledgeTaskRequest message or plain object
                     * @returns Promise
                     */
                    public acknowledgeTask(request: google.cloud.tasks.v2beta2.IAcknowledgeTaskRequest): Promise<google.protobuf.Empty>;

                    /**
                     * Calls RenewLease.
                     * @param request RenewLeaseRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Task
                     */
                    public renewLease(request: google.cloud.tasks.v2beta2.IRenewLeaseRequest, callback: google.cloud.tasks.v2beta2.CloudTasks.RenewLeaseCallback): void;

                    /**
                     * Calls RenewLease.
                     * @param request RenewLeaseRequest message or plain object
                     * @returns Promise
                     */
                    public renewLease(request: google.cloud.tasks.v2beta2.IRenewLeaseRequest): Promise<google.cloud.tasks.v2beta2.Task>;

                    /**
                     * Calls CancelLease.
                     * @param request CancelLeaseRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Task
                     */
                    public cancelLease(request: google.cloud.tasks.v2beta2.ICancelLeaseRequest, callback: google.cloud.tasks.v2beta2.CloudTasks.CancelLeaseCallback): void;

                    /**
                     * Calls CancelLease.
                     * @param request CancelLeaseRequest message or plain object
                     * @returns Promise
                     */
                    public cancelLease(request: google.cloud.tasks.v2beta2.ICancelLeaseRequest): Promise<google.cloud.tasks.v2beta2.Task>;

                    /**
                     * Calls RunTask.
                     * @param request RunTaskRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Task
                     */
                    public runTask(request: google.cloud.tasks.v2beta2.IRunTaskRequest, callback: google.cloud.tasks.v2beta2.CloudTasks.RunTaskCallback): void;

                    /**
                     * Calls RunTask.
                     * @param request RunTaskRequest message or plain object
                     * @returns Promise
                     */
                    public runTask(request: google.cloud.tasks.v2beta2.IRunTaskRequest): Promise<google.cloud.tasks.v2beta2.Task>;
                }

                namespace CloudTasks {

                    /**
                     * Callback as used by {@link google.cloud.tasks.v2beta2.CloudTasks#listQueues}.
                     * @param error Error, if any
                     * @param [response] ListQueuesResponse
                     */
                    type ListQueuesCallback = (error: (Error|null), response?: google.cloud.tasks.v2beta2.ListQueuesResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.tasks.v2beta2.CloudTasks#getQueue}.
                     * @param error Error, if any
                     * @param [response] Queue
                     */
                    type GetQueueCallback = (error: (Error|null), response?: google.cloud.tasks.v2beta2.Queue) => void;

                    /**
                     * Callback as used by {@link google.cloud.tasks.v2beta2.CloudTasks#createQueue}.
                     * @param error Error, if any
                     * @param [response] Queue
                     */
                    type CreateQueueCallback = (error: (Error|null), response?: google.cloud.tasks.v2beta2.Queue) => void;

                    /**
                     * Callback as used by {@link google.cloud.tasks.v2beta2.CloudTasks#updateQueue}.
                     * @param error Error, if any
                     * @param [response] Queue
                     */
                    type UpdateQueueCallback = (error: (Error|null), response?: google.cloud.tasks.v2beta2.Queue) => void;

                    /**
                     * Callback as used by {@link google.cloud.tasks.v2beta2.CloudTasks#deleteQueue}.
                     * @param error Error, if any
                     * @param [response] Empty
                     */
                    type DeleteQueueCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                    /**
                     * Callback as used by {@link google.cloud.tasks.v2beta2.CloudTasks#purgeQueue}.
                     * @param error Error, if any
                     * @param [response] Queue
                     */
                    type PurgeQueueCallback = (error: (Error|null), response?: google.cloud.tasks.v2beta2.Queue) => void;

                    /**
                     * Callback as used by {@link google.cloud.tasks.v2beta2.CloudTasks#pauseQueue}.
                     * @param error Error, if any
                     * @param [response] Queue
                     */
                    type PauseQueueCallback = (error: (Error|null), response?: google.cloud.tasks.v2beta2.Queue) => void;

                    /**
                     * Callback as used by {@link google.cloud.tasks.v2beta2.CloudTasks#resumeQueue}.
                     * @param error Error, if any
                     * @param [response] Queue
                     */
                    type ResumeQueueCallback = (error: (Error|null), response?: google.cloud.tasks.v2beta2.Queue) => void;

                    /**
                     * Callback as used by {@link google.cloud.tasks.v2beta2.CloudTasks#getIamPolicy}.
                     * @param error Error, if any
                     * @param [response] Policy
                     */
                    type GetIamPolicyCallback = (error: (Error|null), response?: google.iam.v1.Policy) => void;

                    /**
                     * Callback as used by {@link google.cloud.tasks.v2beta2.CloudTasks#setIamPolicy}.
                     * @param error Error, if any
                     * @param [response] Policy
                     */
                    type SetIamPolicyCallback = (error: (Error|null), response?: google.iam.v1.Policy) => void;

                    /**
                     * Callback as used by {@link google.cloud.tasks.v2beta2.CloudTasks#testIamPermissions}.
                     * @param error Error, if any
                     * @param [response] TestIamPermissionsResponse
                     */
                    type TestIamPermissionsCallback = (error: (Error|null), response?: google.iam.v1.TestIamPermissionsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.tasks.v2beta2.CloudTasks#listTasks}.
                     * @param error Error, if any
                     * @param [response] ListTasksResponse
                     */
                    type ListTasksCallback = (error: (Error|null), response?: google.cloud.tasks.v2beta2.ListTasksResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.tasks.v2beta2.CloudTasks#getTask}.
                     * @param error Error, if any
                     * @param [response] Task
                     */
                    type GetTaskCallback = (error: (Error|null), response?: google.cloud.tasks.v2beta2.Task) => void;

                    /**
                     * Callback as used by {@link google.cloud.tasks.v2beta2.CloudTasks#createTask}.
                     * @param error Error, if any
                     * @param [response] Task
                     */
                    type CreateTaskCallback = (error: (Error|null), response?: google.cloud.tasks.v2beta2.Task) => void;

                    /**
                     * Callback as used by {@link google.cloud.tasks.v2beta2.CloudTasks#deleteTask}.
                     * @param error Error, if any
                     * @param [response] Empty
                     */
                    type DeleteTaskCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                    /**
                     * Callback as used by {@link google.cloud.tasks.v2beta2.CloudTasks#leaseTasks}.
                     * @param error Error, if any
                     * @param [response] LeaseTasksResponse
                     */
                    type LeaseTasksCallback = (error: (Error|null), response?: google.cloud.tasks.v2beta2.LeaseTasksResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.tasks.v2beta2.CloudTasks#acknowledgeTask}.
                     * @param error Error, if any
                     * @param [response] Empty
                     */
                    type AcknowledgeTaskCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                    /**
                     * Callback as used by {@link google.cloud.tasks.v2beta2.CloudTasks#renewLease}.
                     * @param error Error, if any
                     * @param [response] Task
                     */
                    type RenewLeaseCallback = (error: (Error|null), response?: google.cloud.tasks.v2beta2.Task) => void;

                    /**
                     * Callback as used by {@link google.cloud.tasks.v2beta2.CloudTasks#cancelLease}.
                     * @param error Error, if any
                     * @param [response] Task
                     */
                    type CancelLeaseCallback = (error: (Error|null), response?: google.cloud.tasks.v2beta2.Task) => void;

                    /**
                     * Callback as used by {@link google.cloud.tasks.v2beta2.CloudTasks#runTask}.
                     * @param error Error, if any
                     * @param [response] Task
                     */
                    type RunTaskCallback = (error: (Error|null), response?: google.cloud.tasks.v2beta2.Task) => void;
                }

                /** Properties of a ListQueuesRequest. */
                interface IListQueuesRequest {

                    /** ListQueuesRequest parent */
                    parent?: (string|null);

                    /** ListQueuesRequest filter */
                    filter?: (string|null);

                    /** ListQueuesRequest pageSize */
                    pageSize?: (number|null);

                    /** ListQueuesRequest pageToken */
                    pageToken?: (string|null);

                    /** ListQueuesRequest readMask */
                    readMask?: (google.protobuf.IFieldMask|null);
                }

                /** Represents a ListQueuesRequest. */
                class ListQueuesRequest implements IListQueuesRequest {

                    /**
                     * Constructs a new ListQueuesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tasks.v2beta2.IListQueuesRequest);

                    /** ListQueuesRequest parent. */
                    public parent: string;

                    /** ListQueuesRequest filter. */
                    public filter: string;

                    /** ListQueuesRequest pageSize. */
                    public pageSize: number;

                    /** ListQueuesRequest pageToken. */
                    public pageToken: string;

                    /** ListQueuesRequest readMask. */
                    public readMask?: (google.protobuf.IFieldMask|null);

                    /**
                     * Creates a new ListQueuesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListQueuesRequest instance
                     */
                    public static create(properties?: google.cloud.tasks.v2beta2.IListQueuesRequest): google.cloud.tasks.v2beta2.ListQueuesRequest;

                    /**
                     * Encodes the specified ListQueuesRequest message. Does not implicitly {@link google.cloud.tasks.v2beta2.ListQueuesRequest.verify|verify} messages.
                     * @param message ListQueuesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tasks.v2beta2.IListQueuesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListQueuesRequest message, length delimited. Does not implicitly {@link google.cloud.tasks.v2beta2.ListQueuesRequest.verify|verify} messages.
                     * @param message ListQueuesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tasks.v2beta2.IListQueuesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListQueuesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListQueuesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tasks.v2beta2.ListQueuesRequest;

                    /**
                     * Decodes a ListQueuesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListQueuesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tasks.v2beta2.ListQueuesRequest;

                    /**
                     * Verifies a ListQueuesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListQueuesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListQueuesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tasks.v2beta2.ListQueuesRequest;

                    /**
                     * Creates a plain object from a ListQueuesRequest message. Also converts values to other types if specified.
                     * @param message ListQueuesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tasks.v2beta2.ListQueuesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListQueuesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListQueuesResponse. */
                interface IListQueuesResponse {

                    /** ListQueuesResponse queues */
                    queues?: (google.cloud.tasks.v2beta2.IQueue[]|null);

                    /** ListQueuesResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListQueuesResponse. */
                class ListQueuesResponse implements IListQueuesResponse {

                    /**
                     * Constructs a new ListQueuesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tasks.v2beta2.IListQueuesResponse);

                    /** ListQueuesResponse queues. */
                    public queues: google.cloud.tasks.v2beta2.IQueue[];

                    /** ListQueuesResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListQueuesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListQueuesResponse instance
                     */
                    public static create(properties?: google.cloud.tasks.v2beta2.IListQueuesResponse): google.cloud.tasks.v2beta2.ListQueuesResponse;

                    /**
                     * Encodes the specified ListQueuesResponse message. Does not implicitly {@link google.cloud.tasks.v2beta2.ListQueuesResponse.verify|verify} messages.
                     * @param message ListQueuesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tasks.v2beta2.IListQueuesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListQueuesResponse message, length delimited. Does not implicitly {@link google.cloud.tasks.v2beta2.ListQueuesResponse.verify|verify} messages.
                     * @param message ListQueuesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tasks.v2beta2.IListQueuesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListQueuesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListQueuesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tasks.v2beta2.ListQueuesResponse;

                    /**
                     * Decodes a ListQueuesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListQueuesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tasks.v2beta2.ListQueuesResponse;

                    /**
                     * Verifies a ListQueuesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListQueuesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListQueuesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tasks.v2beta2.ListQueuesResponse;

                    /**
                     * Creates a plain object from a ListQueuesResponse message. Also converts values to other types if specified.
                     * @param message ListQueuesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tasks.v2beta2.ListQueuesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListQueuesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetQueueRequest. */
                interface IGetQueueRequest {

                    /** GetQueueRequest name */
                    name?: (string|null);

                    /** GetQueueRequest readMask */
                    readMask?: (google.protobuf.IFieldMask|null);
                }

                /** Represents a GetQueueRequest. */
                class GetQueueRequest implements IGetQueueRequest {

                    /**
                     * Constructs a new GetQueueRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tasks.v2beta2.IGetQueueRequest);

                    /** GetQueueRequest name. */
                    public name: string;

                    /** GetQueueRequest readMask. */
                    public readMask?: (google.protobuf.IFieldMask|null);

                    /**
                     * Creates a new GetQueueRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetQueueRequest instance
                     */
                    public static create(properties?: google.cloud.tasks.v2beta2.IGetQueueRequest): google.cloud.tasks.v2beta2.GetQueueRequest;

                    /**
                     * Encodes the specified GetQueueRequest message. Does not implicitly {@link google.cloud.tasks.v2beta2.GetQueueRequest.verify|verify} messages.
                     * @param message GetQueueRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tasks.v2beta2.IGetQueueRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetQueueRequest message, length delimited. Does not implicitly {@link google.cloud.tasks.v2beta2.GetQueueRequest.verify|verify} messages.
                     * @param message GetQueueRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tasks.v2beta2.IGetQueueRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetQueueRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetQueueRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tasks.v2beta2.GetQueueRequest;

                    /**
                     * Decodes a GetQueueRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetQueueRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tasks.v2beta2.GetQueueRequest;

                    /**
                     * Verifies a GetQueueRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetQueueRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetQueueRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tasks.v2beta2.GetQueueRequest;

                    /**
                     * Creates a plain object from a GetQueueRequest message. Also converts values to other types if specified.
                     * @param message GetQueueRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tasks.v2beta2.GetQueueRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetQueueRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a CreateQueueRequest. */
                interface ICreateQueueRequest {

                    /** CreateQueueRequest parent */
                    parent?: (string|null);

                    /** CreateQueueRequest queue */
                    queue?: (google.cloud.tasks.v2beta2.IQueue|null);
                }

                /** Represents a CreateQueueRequest. */
                class CreateQueueRequest implements ICreateQueueRequest {

                    /**
                     * Constructs a new CreateQueueRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tasks.v2beta2.ICreateQueueRequest);

                    /** CreateQueueRequest parent. */
                    public parent: string;

                    /** CreateQueueRequest queue. */
                    public queue?: (google.cloud.tasks.v2beta2.IQueue|null);

                    /**
                     * Creates a new CreateQueueRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateQueueRequest instance
                     */
                    public static create(properties?: google.cloud.tasks.v2beta2.ICreateQueueRequest): google.cloud.tasks.v2beta2.CreateQueueRequest;

                    /**
                     * Encodes the specified CreateQueueRequest message. Does not implicitly {@link google.cloud.tasks.v2beta2.CreateQueueRequest.verify|verify} messages.
                     * @param message CreateQueueRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tasks.v2beta2.ICreateQueueRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateQueueRequest message, length delimited. Does not implicitly {@link google.cloud.tasks.v2beta2.CreateQueueRequest.verify|verify} messages.
                     * @param message CreateQueueRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tasks.v2beta2.ICreateQueueRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateQueueRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateQueueRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tasks.v2beta2.CreateQueueRequest;

                    /**
                     * Decodes a CreateQueueRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateQueueRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tasks.v2beta2.CreateQueueRequest;

                    /**
                     * Verifies a CreateQueueRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateQueueRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateQueueRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tasks.v2beta2.CreateQueueRequest;

                    /**
                     * Creates a plain object from a CreateQueueRequest message. Also converts values to other types if specified.
                     * @param message CreateQueueRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tasks.v2beta2.CreateQueueRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateQueueRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an UpdateQueueRequest. */
                interface IUpdateQueueRequest {

                    /** UpdateQueueRequest queue */
                    queue?: (google.cloud.tasks.v2beta2.IQueue|null);

                    /** UpdateQueueRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);
                }

                /** Represents an UpdateQueueRequest. */
                class UpdateQueueRequest implements IUpdateQueueRequest {

                    /**
                     * Constructs a new UpdateQueueRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tasks.v2beta2.IUpdateQueueRequest);

                    /** UpdateQueueRequest queue. */
                    public queue?: (google.cloud.tasks.v2beta2.IQueue|null);

                    /** UpdateQueueRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /**
                     * Creates a new UpdateQueueRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateQueueRequest instance
                     */
                    public static create(properties?: google.cloud.tasks.v2beta2.IUpdateQueueRequest): google.cloud.tasks.v2beta2.UpdateQueueRequest;

                    /**
                     * Encodes the specified UpdateQueueRequest message. Does not implicitly {@link google.cloud.tasks.v2beta2.UpdateQueueRequest.verify|verify} messages.
                     * @param message UpdateQueueRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tasks.v2beta2.IUpdateQueueRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateQueueRequest message, length delimited. Does not implicitly {@link google.cloud.tasks.v2beta2.UpdateQueueRequest.verify|verify} messages.
                     * @param message UpdateQueueRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tasks.v2beta2.IUpdateQueueRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateQueueRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateQueueRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tasks.v2beta2.UpdateQueueRequest;

                    /**
                     * Decodes an UpdateQueueRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateQueueRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tasks.v2beta2.UpdateQueueRequest;

                    /**
                     * Verifies an UpdateQueueRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateQueueRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateQueueRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tasks.v2beta2.UpdateQueueRequest;

                    /**
                     * Creates a plain object from an UpdateQueueRequest message. Also converts values to other types if specified.
                     * @param message UpdateQueueRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tasks.v2beta2.UpdateQueueRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateQueueRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DeleteQueueRequest. */
                interface IDeleteQueueRequest {

                    /** DeleteQueueRequest name */
                    name?: (string|null);
                }

                /** Represents a DeleteQueueRequest. */
                class DeleteQueueRequest implements IDeleteQueueRequest {

                    /**
                     * Constructs a new DeleteQueueRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tasks.v2beta2.IDeleteQueueRequest);

                    /** DeleteQueueRequest name. */
                    public name: string;

                    /**
                     * Creates a new DeleteQueueRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteQueueRequest instance
                     */
                    public static create(properties?: google.cloud.tasks.v2beta2.IDeleteQueueRequest): google.cloud.tasks.v2beta2.DeleteQueueRequest;

                    /**
                     * Encodes the specified DeleteQueueRequest message. Does not implicitly {@link google.cloud.tasks.v2beta2.DeleteQueueRequest.verify|verify} messages.
                     * @param message DeleteQueueRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tasks.v2beta2.IDeleteQueueRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteQueueRequest message, length delimited. Does not implicitly {@link google.cloud.tasks.v2beta2.DeleteQueueRequest.verify|verify} messages.
                     * @param message DeleteQueueRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tasks.v2beta2.IDeleteQueueRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteQueueRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteQueueRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tasks.v2beta2.DeleteQueueRequest;

                    /**
                     * Decodes a DeleteQueueRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteQueueRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tasks.v2beta2.DeleteQueueRequest;

                    /**
                     * Verifies a DeleteQueueRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteQueueRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteQueueRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tasks.v2beta2.DeleteQueueRequest;

                    /**
                     * Creates a plain object from a DeleteQueueRequest message. Also converts values to other types if specified.
                     * @param message DeleteQueueRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tasks.v2beta2.DeleteQueueRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteQueueRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a PurgeQueueRequest. */
                interface IPurgeQueueRequest {

                    /** PurgeQueueRequest name */
                    name?: (string|null);
                }

                /** Represents a PurgeQueueRequest. */
                class PurgeQueueRequest implements IPurgeQueueRequest {

                    /**
                     * Constructs a new PurgeQueueRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tasks.v2beta2.IPurgeQueueRequest);

                    /** PurgeQueueRequest name. */
                    public name: string;

                    /**
                     * Creates a new PurgeQueueRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PurgeQueueRequest instance
                     */
                    public static create(properties?: google.cloud.tasks.v2beta2.IPurgeQueueRequest): google.cloud.tasks.v2beta2.PurgeQueueRequest;

                    /**
                     * Encodes the specified PurgeQueueRequest message. Does not implicitly {@link google.cloud.tasks.v2beta2.PurgeQueueRequest.verify|verify} messages.
                     * @param message PurgeQueueRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tasks.v2beta2.IPurgeQueueRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PurgeQueueRequest message, length delimited. Does not implicitly {@link google.cloud.tasks.v2beta2.PurgeQueueRequest.verify|verify} messages.
                     * @param message PurgeQueueRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tasks.v2beta2.IPurgeQueueRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PurgeQueueRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PurgeQueueRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tasks.v2beta2.PurgeQueueRequest;

                    /**
                     * Decodes a PurgeQueueRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PurgeQueueRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tasks.v2beta2.PurgeQueueRequest;

                    /**
                     * Verifies a PurgeQueueRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PurgeQueueRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PurgeQueueRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tasks.v2beta2.PurgeQueueRequest;

                    /**
                     * Creates a plain object from a PurgeQueueRequest message. Also converts values to other types if specified.
                     * @param message PurgeQueueRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tasks.v2beta2.PurgeQueueRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PurgeQueueRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a PauseQueueRequest. */
                interface IPauseQueueRequest {

                    /** PauseQueueRequest name */
                    name?: (string|null);
                }

                /** Represents a PauseQueueRequest. */
                class PauseQueueRequest implements IPauseQueueRequest {

                    /**
                     * Constructs a new PauseQueueRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tasks.v2beta2.IPauseQueueRequest);

                    /** PauseQueueRequest name. */
                    public name: string;

                    /**
                     * Creates a new PauseQueueRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PauseQueueRequest instance
                     */
                    public static create(properties?: google.cloud.tasks.v2beta2.IPauseQueueRequest): google.cloud.tasks.v2beta2.PauseQueueRequest;

                    /**
                     * Encodes the specified PauseQueueRequest message. Does not implicitly {@link google.cloud.tasks.v2beta2.PauseQueueRequest.verify|verify} messages.
                     * @param message PauseQueueRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tasks.v2beta2.IPauseQueueRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PauseQueueRequest message, length delimited. Does not implicitly {@link google.cloud.tasks.v2beta2.PauseQueueRequest.verify|verify} messages.
                     * @param message PauseQueueRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tasks.v2beta2.IPauseQueueRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PauseQueueRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PauseQueueRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tasks.v2beta2.PauseQueueRequest;

                    /**
                     * Decodes a PauseQueueRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PauseQueueRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tasks.v2beta2.PauseQueueRequest;

                    /**
                     * Verifies a PauseQueueRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PauseQueueRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PauseQueueRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tasks.v2beta2.PauseQueueRequest;

                    /**
                     * Creates a plain object from a PauseQueueRequest message. Also converts values to other types if specified.
                     * @param message PauseQueueRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tasks.v2beta2.PauseQueueRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PauseQueueRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ResumeQueueRequest. */
                interface IResumeQueueRequest {

                    /** ResumeQueueRequest name */
                    name?: (string|null);
                }

                /** Represents a ResumeQueueRequest. */
                class ResumeQueueRequest implements IResumeQueueRequest {

                    /**
                     * Constructs a new ResumeQueueRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tasks.v2beta2.IResumeQueueRequest);

                    /** ResumeQueueRequest name. */
                    public name: string;

                    /**
                     * Creates a new ResumeQueueRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ResumeQueueRequest instance
                     */
                    public static create(properties?: google.cloud.tasks.v2beta2.IResumeQueueRequest): google.cloud.tasks.v2beta2.ResumeQueueRequest;

                    /**
                     * Encodes the specified ResumeQueueRequest message. Does not implicitly {@link google.cloud.tasks.v2beta2.ResumeQueueRequest.verify|verify} messages.
                     * @param message ResumeQueueRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tasks.v2beta2.IResumeQueueRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ResumeQueueRequest message, length delimited. Does not implicitly {@link google.cloud.tasks.v2beta2.ResumeQueueRequest.verify|verify} messages.
                     * @param message ResumeQueueRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tasks.v2beta2.IResumeQueueRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ResumeQueueRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ResumeQueueRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tasks.v2beta2.ResumeQueueRequest;

                    /**
                     * Decodes a ResumeQueueRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ResumeQueueRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tasks.v2beta2.ResumeQueueRequest;

                    /**
                     * Verifies a ResumeQueueRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ResumeQueueRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ResumeQueueRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tasks.v2beta2.ResumeQueueRequest;

                    /**
                     * Creates a plain object from a ResumeQueueRequest message. Also converts values to other types if specified.
                     * @param message ResumeQueueRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tasks.v2beta2.ResumeQueueRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ResumeQueueRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListTasksRequest. */
                interface IListTasksRequest {

                    /** ListTasksRequest parent */
                    parent?: (string|null);

                    /** ListTasksRequest responseView */
                    responseView?: (google.cloud.tasks.v2beta2.Task.View|keyof typeof google.cloud.tasks.v2beta2.Task.View|null);

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
                    constructor(properties?: google.cloud.tasks.v2beta2.IListTasksRequest);

                    /** ListTasksRequest parent. */
                    public parent: string;

                    /** ListTasksRequest responseView. */
                    public responseView: (google.cloud.tasks.v2beta2.Task.View|keyof typeof google.cloud.tasks.v2beta2.Task.View);

                    /** ListTasksRequest pageSize. */
                    public pageSize: number;

                    /** ListTasksRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListTasksRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListTasksRequest instance
                     */
                    public static create(properties?: google.cloud.tasks.v2beta2.IListTasksRequest): google.cloud.tasks.v2beta2.ListTasksRequest;

                    /**
                     * Encodes the specified ListTasksRequest message. Does not implicitly {@link google.cloud.tasks.v2beta2.ListTasksRequest.verify|verify} messages.
                     * @param message ListTasksRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tasks.v2beta2.IListTasksRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListTasksRequest message, length delimited. Does not implicitly {@link google.cloud.tasks.v2beta2.ListTasksRequest.verify|verify} messages.
                     * @param message ListTasksRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tasks.v2beta2.IListTasksRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListTasksRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListTasksRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tasks.v2beta2.ListTasksRequest;

                    /**
                     * Decodes a ListTasksRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListTasksRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tasks.v2beta2.ListTasksRequest;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.tasks.v2beta2.ListTasksRequest;

                    /**
                     * Creates a plain object from a ListTasksRequest message. Also converts values to other types if specified.
                     * @param message ListTasksRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tasks.v2beta2.ListTasksRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListTasksRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListTasksResponse. */
                interface IListTasksResponse {

                    /** ListTasksResponse tasks */
                    tasks?: (google.cloud.tasks.v2beta2.ITask[]|null);

                    /** ListTasksResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListTasksResponse. */
                class ListTasksResponse implements IListTasksResponse {

                    /**
                     * Constructs a new ListTasksResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tasks.v2beta2.IListTasksResponse);

                    /** ListTasksResponse tasks. */
                    public tasks: google.cloud.tasks.v2beta2.ITask[];

                    /** ListTasksResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListTasksResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListTasksResponse instance
                     */
                    public static create(properties?: google.cloud.tasks.v2beta2.IListTasksResponse): google.cloud.tasks.v2beta2.ListTasksResponse;

                    /**
                     * Encodes the specified ListTasksResponse message. Does not implicitly {@link google.cloud.tasks.v2beta2.ListTasksResponse.verify|verify} messages.
                     * @param message ListTasksResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tasks.v2beta2.IListTasksResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListTasksResponse message, length delimited. Does not implicitly {@link google.cloud.tasks.v2beta2.ListTasksResponse.verify|verify} messages.
                     * @param message ListTasksResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tasks.v2beta2.IListTasksResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListTasksResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListTasksResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tasks.v2beta2.ListTasksResponse;

                    /**
                     * Decodes a ListTasksResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListTasksResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tasks.v2beta2.ListTasksResponse;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.tasks.v2beta2.ListTasksResponse;

                    /**
                     * Creates a plain object from a ListTasksResponse message. Also converts values to other types if specified.
                     * @param message ListTasksResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tasks.v2beta2.ListTasksResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListTasksResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetTaskRequest. */
                interface IGetTaskRequest {

                    /** GetTaskRequest name */
                    name?: (string|null);

                    /** GetTaskRequest responseView */
                    responseView?: (google.cloud.tasks.v2beta2.Task.View|keyof typeof google.cloud.tasks.v2beta2.Task.View|null);
                }

                /** Represents a GetTaskRequest. */
                class GetTaskRequest implements IGetTaskRequest {

                    /**
                     * Constructs a new GetTaskRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tasks.v2beta2.IGetTaskRequest);

                    /** GetTaskRequest name. */
                    public name: string;

                    /** GetTaskRequest responseView. */
                    public responseView: (google.cloud.tasks.v2beta2.Task.View|keyof typeof google.cloud.tasks.v2beta2.Task.View);

                    /**
                     * Creates a new GetTaskRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetTaskRequest instance
                     */
                    public static create(properties?: google.cloud.tasks.v2beta2.IGetTaskRequest): google.cloud.tasks.v2beta2.GetTaskRequest;

                    /**
                     * Encodes the specified GetTaskRequest message. Does not implicitly {@link google.cloud.tasks.v2beta2.GetTaskRequest.verify|verify} messages.
                     * @param message GetTaskRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tasks.v2beta2.IGetTaskRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetTaskRequest message, length delimited. Does not implicitly {@link google.cloud.tasks.v2beta2.GetTaskRequest.verify|verify} messages.
                     * @param message GetTaskRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tasks.v2beta2.IGetTaskRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetTaskRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetTaskRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tasks.v2beta2.GetTaskRequest;

                    /**
                     * Decodes a GetTaskRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetTaskRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tasks.v2beta2.GetTaskRequest;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.tasks.v2beta2.GetTaskRequest;

                    /**
                     * Creates a plain object from a GetTaskRequest message. Also converts values to other types if specified.
                     * @param message GetTaskRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tasks.v2beta2.GetTaskRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetTaskRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a CreateTaskRequest. */
                interface ICreateTaskRequest {

                    /** CreateTaskRequest parent */
                    parent?: (string|null);

                    /** CreateTaskRequest task */
                    task?: (google.cloud.tasks.v2beta2.ITask|null);

                    /** CreateTaskRequest responseView */
                    responseView?: (google.cloud.tasks.v2beta2.Task.View|keyof typeof google.cloud.tasks.v2beta2.Task.View|null);
                }

                /** Represents a CreateTaskRequest. */
                class CreateTaskRequest implements ICreateTaskRequest {

                    /**
                     * Constructs a new CreateTaskRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tasks.v2beta2.ICreateTaskRequest);

                    /** CreateTaskRequest parent. */
                    public parent: string;

                    /** CreateTaskRequest task. */
                    public task?: (google.cloud.tasks.v2beta2.ITask|null);

                    /** CreateTaskRequest responseView. */
                    public responseView: (google.cloud.tasks.v2beta2.Task.View|keyof typeof google.cloud.tasks.v2beta2.Task.View);

                    /**
                     * Creates a new CreateTaskRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateTaskRequest instance
                     */
                    public static create(properties?: google.cloud.tasks.v2beta2.ICreateTaskRequest): google.cloud.tasks.v2beta2.CreateTaskRequest;

                    /**
                     * Encodes the specified CreateTaskRequest message. Does not implicitly {@link google.cloud.tasks.v2beta2.CreateTaskRequest.verify|verify} messages.
                     * @param message CreateTaskRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tasks.v2beta2.ICreateTaskRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateTaskRequest message, length delimited. Does not implicitly {@link google.cloud.tasks.v2beta2.CreateTaskRequest.verify|verify} messages.
                     * @param message CreateTaskRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tasks.v2beta2.ICreateTaskRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateTaskRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateTaskRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tasks.v2beta2.CreateTaskRequest;

                    /**
                     * Decodes a CreateTaskRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateTaskRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tasks.v2beta2.CreateTaskRequest;

                    /**
                     * Verifies a CreateTaskRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateTaskRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateTaskRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tasks.v2beta2.CreateTaskRequest;

                    /**
                     * Creates a plain object from a CreateTaskRequest message. Also converts values to other types if specified.
                     * @param message CreateTaskRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tasks.v2beta2.CreateTaskRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateTaskRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DeleteTaskRequest. */
                interface IDeleteTaskRequest {

                    /** DeleteTaskRequest name */
                    name?: (string|null);
                }

                /** Represents a DeleteTaskRequest. */
                class DeleteTaskRequest implements IDeleteTaskRequest {

                    /**
                     * Constructs a new DeleteTaskRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tasks.v2beta2.IDeleteTaskRequest);

                    /** DeleteTaskRequest name. */
                    public name: string;

                    /**
                     * Creates a new DeleteTaskRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteTaskRequest instance
                     */
                    public static create(properties?: google.cloud.tasks.v2beta2.IDeleteTaskRequest): google.cloud.tasks.v2beta2.DeleteTaskRequest;

                    /**
                     * Encodes the specified DeleteTaskRequest message. Does not implicitly {@link google.cloud.tasks.v2beta2.DeleteTaskRequest.verify|verify} messages.
                     * @param message DeleteTaskRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tasks.v2beta2.IDeleteTaskRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteTaskRequest message, length delimited. Does not implicitly {@link google.cloud.tasks.v2beta2.DeleteTaskRequest.verify|verify} messages.
                     * @param message DeleteTaskRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tasks.v2beta2.IDeleteTaskRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteTaskRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteTaskRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tasks.v2beta2.DeleteTaskRequest;

                    /**
                     * Decodes a DeleteTaskRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteTaskRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tasks.v2beta2.DeleteTaskRequest;

                    /**
                     * Verifies a DeleteTaskRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteTaskRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteTaskRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tasks.v2beta2.DeleteTaskRequest;

                    /**
                     * Creates a plain object from a DeleteTaskRequest message. Also converts values to other types if specified.
                     * @param message DeleteTaskRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tasks.v2beta2.DeleteTaskRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteTaskRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a LeaseTasksRequest. */
                interface ILeaseTasksRequest {

                    /** LeaseTasksRequest parent */
                    parent?: (string|null);

                    /** LeaseTasksRequest maxTasks */
                    maxTasks?: (number|null);

                    /** LeaseTasksRequest leaseDuration */
                    leaseDuration?: (google.protobuf.IDuration|null);

                    /** LeaseTasksRequest responseView */
                    responseView?: (google.cloud.tasks.v2beta2.Task.View|keyof typeof google.cloud.tasks.v2beta2.Task.View|null);

                    /** LeaseTasksRequest filter */
                    filter?: (string|null);
                }

                /** Represents a LeaseTasksRequest. */
                class LeaseTasksRequest implements ILeaseTasksRequest {

                    /**
                     * Constructs a new LeaseTasksRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tasks.v2beta2.ILeaseTasksRequest);

                    /** LeaseTasksRequest parent. */
                    public parent: string;

                    /** LeaseTasksRequest maxTasks. */
                    public maxTasks: number;

                    /** LeaseTasksRequest leaseDuration. */
                    public leaseDuration?: (google.protobuf.IDuration|null);

                    /** LeaseTasksRequest responseView. */
                    public responseView: (google.cloud.tasks.v2beta2.Task.View|keyof typeof google.cloud.tasks.v2beta2.Task.View);

                    /** LeaseTasksRequest filter. */
                    public filter: string;

                    /**
                     * Creates a new LeaseTasksRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns LeaseTasksRequest instance
                     */
                    public static create(properties?: google.cloud.tasks.v2beta2.ILeaseTasksRequest): google.cloud.tasks.v2beta2.LeaseTasksRequest;

                    /**
                     * Encodes the specified LeaseTasksRequest message. Does not implicitly {@link google.cloud.tasks.v2beta2.LeaseTasksRequest.verify|verify} messages.
                     * @param message LeaseTasksRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tasks.v2beta2.ILeaseTasksRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified LeaseTasksRequest message, length delimited. Does not implicitly {@link google.cloud.tasks.v2beta2.LeaseTasksRequest.verify|verify} messages.
                     * @param message LeaseTasksRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tasks.v2beta2.ILeaseTasksRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a LeaseTasksRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns LeaseTasksRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tasks.v2beta2.LeaseTasksRequest;

                    /**
                     * Decodes a LeaseTasksRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns LeaseTasksRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tasks.v2beta2.LeaseTasksRequest;

                    /**
                     * Verifies a LeaseTasksRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a LeaseTasksRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns LeaseTasksRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tasks.v2beta2.LeaseTasksRequest;

                    /**
                     * Creates a plain object from a LeaseTasksRequest message. Also converts values to other types if specified.
                     * @param message LeaseTasksRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tasks.v2beta2.LeaseTasksRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this LeaseTasksRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a LeaseTasksResponse. */
                interface ILeaseTasksResponse {

                    /** LeaseTasksResponse tasks */
                    tasks?: (google.cloud.tasks.v2beta2.ITask[]|null);
                }

                /** Represents a LeaseTasksResponse. */
                class LeaseTasksResponse implements ILeaseTasksResponse {

                    /**
                     * Constructs a new LeaseTasksResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tasks.v2beta2.ILeaseTasksResponse);

                    /** LeaseTasksResponse tasks. */
                    public tasks: google.cloud.tasks.v2beta2.ITask[];

                    /**
                     * Creates a new LeaseTasksResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns LeaseTasksResponse instance
                     */
                    public static create(properties?: google.cloud.tasks.v2beta2.ILeaseTasksResponse): google.cloud.tasks.v2beta2.LeaseTasksResponse;

                    /**
                     * Encodes the specified LeaseTasksResponse message. Does not implicitly {@link google.cloud.tasks.v2beta2.LeaseTasksResponse.verify|verify} messages.
                     * @param message LeaseTasksResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tasks.v2beta2.ILeaseTasksResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified LeaseTasksResponse message, length delimited. Does not implicitly {@link google.cloud.tasks.v2beta2.LeaseTasksResponse.verify|verify} messages.
                     * @param message LeaseTasksResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tasks.v2beta2.ILeaseTasksResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a LeaseTasksResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns LeaseTasksResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tasks.v2beta2.LeaseTasksResponse;

                    /**
                     * Decodes a LeaseTasksResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns LeaseTasksResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tasks.v2beta2.LeaseTasksResponse;

                    /**
                     * Verifies a LeaseTasksResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a LeaseTasksResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns LeaseTasksResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tasks.v2beta2.LeaseTasksResponse;

                    /**
                     * Creates a plain object from a LeaseTasksResponse message. Also converts values to other types if specified.
                     * @param message LeaseTasksResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tasks.v2beta2.LeaseTasksResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this LeaseTasksResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an AcknowledgeTaskRequest. */
                interface IAcknowledgeTaskRequest {

                    /** AcknowledgeTaskRequest name */
                    name?: (string|null);

                    /** AcknowledgeTaskRequest scheduleTime */
                    scheduleTime?: (google.protobuf.ITimestamp|null);
                }

                /** Represents an AcknowledgeTaskRequest. */
                class AcknowledgeTaskRequest implements IAcknowledgeTaskRequest {

                    /**
                     * Constructs a new AcknowledgeTaskRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tasks.v2beta2.IAcknowledgeTaskRequest);

                    /** AcknowledgeTaskRequest name. */
                    public name: string;

                    /** AcknowledgeTaskRequest scheduleTime. */
                    public scheduleTime?: (google.protobuf.ITimestamp|null);

                    /**
                     * Creates a new AcknowledgeTaskRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AcknowledgeTaskRequest instance
                     */
                    public static create(properties?: google.cloud.tasks.v2beta2.IAcknowledgeTaskRequest): google.cloud.tasks.v2beta2.AcknowledgeTaskRequest;

                    /**
                     * Encodes the specified AcknowledgeTaskRequest message. Does not implicitly {@link google.cloud.tasks.v2beta2.AcknowledgeTaskRequest.verify|verify} messages.
                     * @param message AcknowledgeTaskRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tasks.v2beta2.IAcknowledgeTaskRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AcknowledgeTaskRequest message, length delimited. Does not implicitly {@link google.cloud.tasks.v2beta2.AcknowledgeTaskRequest.verify|verify} messages.
                     * @param message AcknowledgeTaskRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tasks.v2beta2.IAcknowledgeTaskRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AcknowledgeTaskRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AcknowledgeTaskRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tasks.v2beta2.AcknowledgeTaskRequest;

                    /**
                     * Decodes an AcknowledgeTaskRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AcknowledgeTaskRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tasks.v2beta2.AcknowledgeTaskRequest;

                    /**
                     * Verifies an AcknowledgeTaskRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AcknowledgeTaskRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AcknowledgeTaskRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tasks.v2beta2.AcknowledgeTaskRequest;

                    /**
                     * Creates a plain object from an AcknowledgeTaskRequest message. Also converts values to other types if specified.
                     * @param message AcknowledgeTaskRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tasks.v2beta2.AcknowledgeTaskRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AcknowledgeTaskRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a RenewLeaseRequest. */
                interface IRenewLeaseRequest {

                    /** RenewLeaseRequest name */
                    name?: (string|null);

                    /** RenewLeaseRequest scheduleTime */
                    scheduleTime?: (google.protobuf.ITimestamp|null);

                    /** RenewLeaseRequest leaseDuration */
                    leaseDuration?: (google.protobuf.IDuration|null);

                    /** RenewLeaseRequest responseView */
                    responseView?: (google.cloud.tasks.v2beta2.Task.View|keyof typeof google.cloud.tasks.v2beta2.Task.View|null);
                }

                /** Represents a RenewLeaseRequest. */
                class RenewLeaseRequest implements IRenewLeaseRequest {

                    /**
                     * Constructs a new RenewLeaseRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tasks.v2beta2.IRenewLeaseRequest);

                    /** RenewLeaseRequest name. */
                    public name: string;

                    /** RenewLeaseRequest scheduleTime. */
                    public scheduleTime?: (google.protobuf.ITimestamp|null);

                    /** RenewLeaseRequest leaseDuration. */
                    public leaseDuration?: (google.protobuf.IDuration|null);

                    /** RenewLeaseRequest responseView. */
                    public responseView: (google.cloud.tasks.v2beta2.Task.View|keyof typeof google.cloud.tasks.v2beta2.Task.View);

                    /**
                     * Creates a new RenewLeaseRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RenewLeaseRequest instance
                     */
                    public static create(properties?: google.cloud.tasks.v2beta2.IRenewLeaseRequest): google.cloud.tasks.v2beta2.RenewLeaseRequest;

                    /**
                     * Encodes the specified RenewLeaseRequest message. Does not implicitly {@link google.cloud.tasks.v2beta2.RenewLeaseRequest.verify|verify} messages.
                     * @param message RenewLeaseRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tasks.v2beta2.IRenewLeaseRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RenewLeaseRequest message, length delimited. Does not implicitly {@link google.cloud.tasks.v2beta2.RenewLeaseRequest.verify|verify} messages.
                     * @param message RenewLeaseRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tasks.v2beta2.IRenewLeaseRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RenewLeaseRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RenewLeaseRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tasks.v2beta2.RenewLeaseRequest;

                    /**
                     * Decodes a RenewLeaseRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RenewLeaseRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tasks.v2beta2.RenewLeaseRequest;

                    /**
                     * Verifies a RenewLeaseRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RenewLeaseRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RenewLeaseRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tasks.v2beta2.RenewLeaseRequest;

                    /**
                     * Creates a plain object from a RenewLeaseRequest message. Also converts values to other types if specified.
                     * @param message RenewLeaseRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tasks.v2beta2.RenewLeaseRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RenewLeaseRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a CancelLeaseRequest. */
                interface ICancelLeaseRequest {

                    /** CancelLeaseRequest name */
                    name?: (string|null);

                    /** CancelLeaseRequest scheduleTime */
                    scheduleTime?: (google.protobuf.ITimestamp|null);

                    /** CancelLeaseRequest responseView */
                    responseView?: (google.cloud.tasks.v2beta2.Task.View|keyof typeof google.cloud.tasks.v2beta2.Task.View|null);
                }

                /** Represents a CancelLeaseRequest. */
                class CancelLeaseRequest implements ICancelLeaseRequest {

                    /**
                     * Constructs a new CancelLeaseRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tasks.v2beta2.ICancelLeaseRequest);

                    /** CancelLeaseRequest name. */
                    public name: string;

                    /** CancelLeaseRequest scheduleTime. */
                    public scheduleTime?: (google.protobuf.ITimestamp|null);

                    /** CancelLeaseRequest responseView. */
                    public responseView: (google.cloud.tasks.v2beta2.Task.View|keyof typeof google.cloud.tasks.v2beta2.Task.View);

                    /**
                     * Creates a new CancelLeaseRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CancelLeaseRequest instance
                     */
                    public static create(properties?: google.cloud.tasks.v2beta2.ICancelLeaseRequest): google.cloud.tasks.v2beta2.CancelLeaseRequest;

                    /**
                     * Encodes the specified CancelLeaseRequest message. Does not implicitly {@link google.cloud.tasks.v2beta2.CancelLeaseRequest.verify|verify} messages.
                     * @param message CancelLeaseRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tasks.v2beta2.ICancelLeaseRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CancelLeaseRequest message, length delimited. Does not implicitly {@link google.cloud.tasks.v2beta2.CancelLeaseRequest.verify|verify} messages.
                     * @param message CancelLeaseRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tasks.v2beta2.ICancelLeaseRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CancelLeaseRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CancelLeaseRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tasks.v2beta2.CancelLeaseRequest;

                    /**
                     * Decodes a CancelLeaseRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CancelLeaseRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tasks.v2beta2.CancelLeaseRequest;

                    /**
                     * Verifies a CancelLeaseRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CancelLeaseRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CancelLeaseRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tasks.v2beta2.CancelLeaseRequest;

                    /**
                     * Creates a plain object from a CancelLeaseRequest message. Also converts values to other types if specified.
                     * @param message CancelLeaseRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tasks.v2beta2.CancelLeaseRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CancelLeaseRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a RunTaskRequest. */
                interface IRunTaskRequest {

                    /** RunTaskRequest name */
                    name?: (string|null);

                    /** RunTaskRequest responseView */
                    responseView?: (google.cloud.tasks.v2beta2.Task.View|keyof typeof google.cloud.tasks.v2beta2.Task.View|null);
                }

                /** Represents a RunTaskRequest. */
                class RunTaskRequest implements IRunTaskRequest {

                    /**
                     * Constructs a new RunTaskRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tasks.v2beta2.IRunTaskRequest);

                    /** RunTaskRequest name. */
                    public name: string;

                    /** RunTaskRequest responseView. */
                    public responseView: (google.cloud.tasks.v2beta2.Task.View|keyof typeof google.cloud.tasks.v2beta2.Task.View);

                    /**
                     * Creates a new RunTaskRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RunTaskRequest instance
                     */
                    public static create(properties?: google.cloud.tasks.v2beta2.IRunTaskRequest): google.cloud.tasks.v2beta2.RunTaskRequest;

                    /**
                     * Encodes the specified RunTaskRequest message. Does not implicitly {@link google.cloud.tasks.v2beta2.RunTaskRequest.verify|verify} messages.
                     * @param message RunTaskRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tasks.v2beta2.IRunTaskRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RunTaskRequest message, length delimited. Does not implicitly {@link google.cloud.tasks.v2beta2.RunTaskRequest.verify|verify} messages.
                     * @param message RunTaskRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tasks.v2beta2.IRunTaskRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RunTaskRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RunTaskRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tasks.v2beta2.RunTaskRequest;

                    /**
                     * Decodes a RunTaskRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RunTaskRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tasks.v2beta2.RunTaskRequest;

                    /**
                     * Verifies a RunTaskRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RunTaskRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RunTaskRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tasks.v2beta2.RunTaskRequest;

                    /**
                     * Creates a plain object from a RunTaskRequest message. Also converts values to other types if specified.
                     * @param message RunTaskRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tasks.v2beta2.RunTaskRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RunTaskRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a Queue. */
                interface IQueue {

                    /** Queue name */
                    name?: (string|null);

                    /** Queue appEngineHttpTarget */
                    appEngineHttpTarget?: (google.cloud.tasks.v2beta2.IAppEngineHttpTarget|null);

                    /** Queue pullTarget */
                    pullTarget?: (google.cloud.tasks.v2beta2.IPullTarget|null);

                    /** Queue rateLimits */
                    rateLimits?: (google.cloud.tasks.v2beta2.IRateLimits|null);

                    /** Queue retryConfig */
                    retryConfig?: (google.cloud.tasks.v2beta2.IRetryConfig|null);

                    /** Queue state */
                    state?: (google.cloud.tasks.v2beta2.Queue.State|keyof typeof google.cloud.tasks.v2beta2.Queue.State|null);

                    /** Queue purgeTime */
                    purgeTime?: (google.protobuf.ITimestamp|null);

                    /** Queue taskTtl */
                    taskTtl?: (google.protobuf.IDuration|null);

                    /** Queue tombstoneTtl */
                    tombstoneTtl?: (google.protobuf.IDuration|null);

                    /** Queue stats */
                    stats?: (google.cloud.tasks.v2beta2.IQueueStats|null);
                }

                /** Represents a Queue. */
                class Queue implements IQueue {

                    /**
                     * Constructs a new Queue.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tasks.v2beta2.IQueue);

                    /** Queue name. */
                    public name: string;

                    /** Queue appEngineHttpTarget. */
                    public appEngineHttpTarget?: (google.cloud.tasks.v2beta2.IAppEngineHttpTarget|null);

                    /** Queue pullTarget. */
                    public pullTarget?: (google.cloud.tasks.v2beta2.IPullTarget|null);

                    /** Queue rateLimits. */
                    public rateLimits?: (google.cloud.tasks.v2beta2.IRateLimits|null);

                    /** Queue retryConfig. */
                    public retryConfig?: (google.cloud.tasks.v2beta2.IRetryConfig|null);

                    /** Queue state. */
                    public state: (google.cloud.tasks.v2beta2.Queue.State|keyof typeof google.cloud.tasks.v2beta2.Queue.State);

                    /** Queue purgeTime. */
                    public purgeTime?: (google.protobuf.ITimestamp|null);

                    /** Queue taskTtl. */
                    public taskTtl?: (google.protobuf.IDuration|null);

                    /** Queue tombstoneTtl. */
                    public tombstoneTtl?: (google.protobuf.IDuration|null);

                    /** Queue stats. */
                    public stats?: (google.cloud.tasks.v2beta2.IQueueStats|null);

                    /** Queue targetType. */
                    public targetType?: ("appEngineHttpTarget"|"pullTarget");

                    /**
                     * Creates a new Queue instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Queue instance
                     */
                    public static create(properties?: google.cloud.tasks.v2beta2.IQueue): google.cloud.tasks.v2beta2.Queue;

                    /**
                     * Encodes the specified Queue message. Does not implicitly {@link google.cloud.tasks.v2beta2.Queue.verify|verify} messages.
                     * @param message Queue message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tasks.v2beta2.IQueue, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Queue message, length delimited. Does not implicitly {@link google.cloud.tasks.v2beta2.Queue.verify|verify} messages.
                     * @param message Queue message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tasks.v2beta2.IQueue, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Queue message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Queue
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tasks.v2beta2.Queue;

                    /**
                     * Decodes a Queue message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Queue
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tasks.v2beta2.Queue;

                    /**
                     * Verifies a Queue message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Queue message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Queue
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tasks.v2beta2.Queue;

                    /**
                     * Creates a plain object from a Queue message. Also converts values to other types if specified.
                     * @param message Queue
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tasks.v2beta2.Queue, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Queue to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace Queue {

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        RUNNING = 1,
                        PAUSED = 2,
                        DISABLED = 3
                    }
                }

                /** Properties of a RateLimits. */
                interface IRateLimits {

                    /** RateLimits maxTasksDispatchedPerSecond */
                    maxTasksDispatchedPerSecond?: (number|null);

                    /** RateLimits maxBurstSize */
                    maxBurstSize?: (number|null);

                    /** RateLimits maxConcurrentTasks */
                    maxConcurrentTasks?: (number|null);
                }

                /** Represents a RateLimits. */
                class RateLimits implements IRateLimits {

                    /**
                     * Constructs a new RateLimits.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tasks.v2beta2.IRateLimits);

                    /** RateLimits maxTasksDispatchedPerSecond. */
                    public maxTasksDispatchedPerSecond: number;

                    /** RateLimits maxBurstSize. */
                    public maxBurstSize: number;

                    /** RateLimits maxConcurrentTasks. */
                    public maxConcurrentTasks: number;

                    /**
                     * Creates a new RateLimits instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RateLimits instance
                     */
                    public static create(properties?: google.cloud.tasks.v2beta2.IRateLimits): google.cloud.tasks.v2beta2.RateLimits;

                    /**
                     * Encodes the specified RateLimits message. Does not implicitly {@link google.cloud.tasks.v2beta2.RateLimits.verify|verify} messages.
                     * @param message RateLimits message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tasks.v2beta2.IRateLimits, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RateLimits message, length delimited. Does not implicitly {@link google.cloud.tasks.v2beta2.RateLimits.verify|verify} messages.
                     * @param message RateLimits message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tasks.v2beta2.IRateLimits, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RateLimits message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RateLimits
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tasks.v2beta2.RateLimits;

                    /**
                     * Decodes a RateLimits message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RateLimits
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tasks.v2beta2.RateLimits;

                    /**
                     * Verifies a RateLimits message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RateLimits message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RateLimits
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tasks.v2beta2.RateLimits;

                    /**
                     * Creates a plain object from a RateLimits message. Also converts values to other types if specified.
                     * @param message RateLimits
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tasks.v2beta2.RateLimits, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RateLimits to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a RetryConfig. */
                interface IRetryConfig {

                    /** RetryConfig maxAttempts */
                    maxAttempts?: (number|null);

                    /** RetryConfig unlimitedAttempts */
                    unlimitedAttempts?: (boolean|null);

                    /** RetryConfig maxRetryDuration */
                    maxRetryDuration?: (google.protobuf.IDuration|null);

                    /** RetryConfig minBackoff */
                    minBackoff?: (google.protobuf.IDuration|null);

                    /** RetryConfig maxBackoff */
                    maxBackoff?: (google.protobuf.IDuration|null);

                    /** RetryConfig maxDoublings */
                    maxDoublings?: (number|null);
                }

                /** Represents a RetryConfig. */
                class RetryConfig implements IRetryConfig {

                    /**
                     * Constructs a new RetryConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tasks.v2beta2.IRetryConfig);

                    /** RetryConfig maxAttempts. */
                    public maxAttempts?: (number|null);

                    /** RetryConfig unlimitedAttempts. */
                    public unlimitedAttempts?: (boolean|null);

                    /** RetryConfig maxRetryDuration. */
                    public maxRetryDuration?: (google.protobuf.IDuration|null);

                    /** RetryConfig minBackoff. */
                    public minBackoff?: (google.protobuf.IDuration|null);

                    /** RetryConfig maxBackoff. */
                    public maxBackoff?: (google.protobuf.IDuration|null);

                    /** RetryConfig maxDoublings. */
                    public maxDoublings: number;

                    /** RetryConfig numAttempts. */
                    public numAttempts?: ("maxAttempts"|"unlimitedAttempts");

                    /**
                     * Creates a new RetryConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RetryConfig instance
                     */
                    public static create(properties?: google.cloud.tasks.v2beta2.IRetryConfig): google.cloud.tasks.v2beta2.RetryConfig;

                    /**
                     * Encodes the specified RetryConfig message. Does not implicitly {@link google.cloud.tasks.v2beta2.RetryConfig.verify|verify} messages.
                     * @param message RetryConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tasks.v2beta2.IRetryConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RetryConfig message, length delimited. Does not implicitly {@link google.cloud.tasks.v2beta2.RetryConfig.verify|verify} messages.
                     * @param message RetryConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tasks.v2beta2.IRetryConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RetryConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RetryConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tasks.v2beta2.RetryConfig;

                    /**
                     * Decodes a RetryConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RetryConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tasks.v2beta2.RetryConfig;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.tasks.v2beta2.RetryConfig;

                    /**
                     * Creates a plain object from a RetryConfig message. Also converts values to other types if specified.
                     * @param message RetryConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tasks.v2beta2.RetryConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RetryConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a QueueStats. */
                interface IQueueStats {

                    /** QueueStats tasksCount */
                    tasksCount?: (number|Long|string|null);

                    /** QueueStats oldestEstimatedArrivalTime */
                    oldestEstimatedArrivalTime?: (google.protobuf.ITimestamp|null);

                    /** QueueStats executedLastMinuteCount */
                    executedLastMinuteCount?: (number|Long|string|null);

                    /** QueueStats concurrentDispatchesCount */
                    concurrentDispatchesCount?: (number|Long|string|null);

                    /** QueueStats effectiveExecutionRate */
                    effectiveExecutionRate?: (number|null);
                }

                /** Represents a QueueStats. */
                class QueueStats implements IQueueStats {

                    /**
                     * Constructs a new QueueStats.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tasks.v2beta2.IQueueStats);

                    /** QueueStats tasksCount. */
                    public tasksCount: (number|Long|string);

                    /** QueueStats oldestEstimatedArrivalTime. */
                    public oldestEstimatedArrivalTime?: (google.protobuf.ITimestamp|null);

                    /** QueueStats executedLastMinuteCount. */
                    public executedLastMinuteCount: (number|Long|string);

                    /** QueueStats concurrentDispatchesCount. */
                    public concurrentDispatchesCount: (number|Long|string);

                    /** QueueStats effectiveExecutionRate. */
                    public effectiveExecutionRate: number;

                    /**
                     * Creates a new QueueStats instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns QueueStats instance
                     */
                    public static create(properties?: google.cloud.tasks.v2beta2.IQueueStats): google.cloud.tasks.v2beta2.QueueStats;

                    /**
                     * Encodes the specified QueueStats message. Does not implicitly {@link google.cloud.tasks.v2beta2.QueueStats.verify|verify} messages.
                     * @param message QueueStats message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tasks.v2beta2.IQueueStats, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified QueueStats message, length delimited. Does not implicitly {@link google.cloud.tasks.v2beta2.QueueStats.verify|verify} messages.
                     * @param message QueueStats message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tasks.v2beta2.IQueueStats, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a QueueStats message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns QueueStats
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tasks.v2beta2.QueueStats;

                    /**
                     * Decodes a QueueStats message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns QueueStats
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tasks.v2beta2.QueueStats;

                    /**
                     * Verifies a QueueStats message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a QueueStats message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns QueueStats
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tasks.v2beta2.QueueStats;

                    /**
                     * Creates a plain object from a QueueStats message. Also converts values to other types if specified.
                     * @param message QueueStats
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tasks.v2beta2.QueueStats, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this QueueStats to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a PullTarget. */
                interface IPullTarget {
                }

                /** Represents a PullTarget. */
                class PullTarget implements IPullTarget {

                    /**
                     * Constructs a new PullTarget.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tasks.v2beta2.IPullTarget);

                    /**
                     * Creates a new PullTarget instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PullTarget instance
                     */
                    public static create(properties?: google.cloud.tasks.v2beta2.IPullTarget): google.cloud.tasks.v2beta2.PullTarget;

                    /**
                     * Encodes the specified PullTarget message. Does not implicitly {@link google.cloud.tasks.v2beta2.PullTarget.verify|verify} messages.
                     * @param message PullTarget message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tasks.v2beta2.IPullTarget, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PullTarget message, length delimited. Does not implicitly {@link google.cloud.tasks.v2beta2.PullTarget.verify|verify} messages.
                     * @param message PullTarget message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tasks.v2beta2.IPullTarget, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PullTarget message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PullTarget
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tasks.v2beta2.PullTarget;

                    /**
                     * Decodes a PullTarget message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PullTarget
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tasks.v2beta2.PullTarget;

                    /**
                     * Verifies a PullTarget message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PullTarget message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PullTarget
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tasks.v2beta2.PullTarget;

                    /**
                     * Creates a plain object from a PullTarget message. Also converts values to other types if specified.
                     * @param message PullTarget
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tasks.v2beta2.PullTarget, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PullTarget to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a PullMessage. */
                interface IPullMessage {

                    /** PullMessage payload */
                    payload?: (Uint8Array|string|null);

                    /** PullMessage tag */
                    tag?: (string|null);
                }

                /** Represents a PullMessage. */
                class PullMessage implements IPullMessage {

                    /**
                     * Constructs a new PullMessage.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tasks.v2beta2.IPullMessage);

                    /** PullMessage payload. */
                    public payload: (Uint8Array|string);

                    /** PullMessage tag. */
                    public tag: string;

                    /**
                     * Creates a new PullMessage instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PullMessage instance
                     */
                    public static create(properties?: google.cloud.tasks.v2beta2.IPullMessage): google.cloud.tasks.v2beta2.PullMessage;

                    /**
                     * Encodes the specified PullMessage message. Does not implicitly {@link google.cloud.tasks.v2beta2.PullMessage.verify|verify} messages.
                     * @param message PullMessage message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tasks.v2beta2.IPullMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PullMessage message, length delimited. Does not implicitly {@link google.cloud.tasks.v2beta2.PullMessage.verify|verify} messages.
                     * @param message PullMessage message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tasks.v2beta2.IPullMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PullMessage message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PullMessage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tasks.v2beta2.PullMessage;

                    /**
                     * Decodes a PullMessage message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PullMessage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tasks.v2beta2.PullMessage;

                    /**
                     * Verifies a PullMessage message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PullMessage message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PullMessage
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tasks.v2beta2.PullMessage;

                    /**
                     * Creates a plain object from a PullMessage message. Also converts values to other types if specified.
                     * @param message PullMessage
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tasks.v2beta2.PullMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PullMessage to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an AppEngineHttpTarget. */
                interface IAppEngineHttpTarget {

                    /** AppEngineHttpTarget appEngineRoutingOverride */
                    appEngineRoutingOverride?: (google.cloud.tasks.v2beta2.IAppEngineRouting|null);
                }

                /** Represents an AppEngineHttpTarget. */
                class AppEngineHttpTarget implements IAppEngineHttpTarget {

                    /**
                     * Constructs a new AppEngineHttpTarget.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tasks.v2beta2.IAppEngineHttpTarget);

                    /** AppEngineHttpTarget appEngineRoutingOverride. */
                    public appEngineRoutingOverride?: (google.cloud.tasks.v2beta2.IAppEngineRouting|null);

                    /**
                     * Creates a new AppEngineHttpTarget instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AppEngineHttpTarget instance
                     */
                    public static create(properties?: google.cloud.tasks.v2beta2.IAppEngineHttpTarget): google.cloud.tasks.v2beta2.AppEngineHttpTarget;

                    /**
                     * Encodes the specified AppEngineHttpTarget message. Does not implicitly {@link google.cloud.tasks.v2beta2.AppEngineHttpTarget.verify|verify} messages.
                     * @param message AppEngineHttpTarget message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tasks.v2beta2.IAppEngineHttpTarget, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AppEngineHttpTarget message, length delimited. Does not implicitly {@link google.cloud.tasks.v2beta2.AppEngineHttpTarget.verify|verify} messages.
                     * @param message AppEngineHttpTarget message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tasks.v2beta2.IAppEngineHttpTarget, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AppEngineHttpTarget message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AppEngineHttpTarget
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tasks.v2beta2.AppEngineHttpTarget;

                    /**
                     * Decodes an AppEngineHttpTarget message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AppEngineHttpTarget
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tasks.v2beta2.AppEngineHttpTarget;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.tasks.v2beta2.AppEngineHttpTarget;

                    /**
                     * Creates a plain object from an AppEngineHttpTarget message. Also converts values to other types if specified.
                     * @param message AppEngineHttpTarget
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tasks.v2beta2.AppEngineHttpTarget, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AppEngineHttpTarget to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an AppEngineHttpRequest. */
                interface IAppEngineHttpRequest {

                    /** AppEngineHttpRequest httpMethod */
                    httpMethod?: (google.cloud.tasks.v2beta2.HttpMethod|keyof typeof google.cloud.tasks.v2beta2.HttpMethod|null);

                    /** AppEngineHttpRequest appEngineRouting */
                    appEngineRouting?: (google.cloud.tasks.v2beta2.IAppEngineRouting|null);

                    /** AppEngineHttpRequest relativeUrl */
                    relativeUrl?: (string|null);

                    /** AppEngineHttpRequest headers */
                    headers?: ({ [k: string]: string }|null);

                    /** AppEngineHttpRequest payload */
                    payload?: (Uint8Array|string|null);
                }

                /** Represents an AppEngineHttpRequest. */
                class AppEngineHttpRequest implements IAppEngineHttpRequest {

                    /**
                     * Constructs a new AppEngineHttpRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tasks.v2beta2.IAppEngineHttpRequest);

                    /** AppEngineHttpRequest httpMethod. */
                    public httpMethod: (google.cloud.tasks.v2beta2.HttpMethod|keyof typeof google.cloud.tasks.v2beta2.HttpMethod);

                    /** AppEngineHttpRequest appEngineRouting. */
                    public appEngineRouting?: (google.cloud.tasks.v2beta2.IAppEngineRouting|null);

                    /** AppEngineHttpRequest relativeUrl. */
                    public relativeUrl: string;

                    /** AppEngineHttpRequest headers. */
                    public headers: { [k: string]: string };

                    /** AppEngineHttpRequest payload. */
                    public payload: (Uint8Array|string);

                    /**
                     * Creates a new AppEngineHttpRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AppEngineHttpRequest instance
                     */
                    public static create(properties?: google.cloud.tasks.v2beta2.IAppEngineHttpRequest): google.cloud.tasks.v2beta2.AppEngineHttpRequest;

                    /**
                     * Encodes the specified AppEngineHttpRequest message. Does not implicitly {@link google.cloud.tasks.v2beta2.AppEngineHttpRequest.verify|verify} messages.
                     * @param message AppEngineHttpRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tasks.v2beta2.IAppEngineHttpRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AppEngineHttpRequest message, length delimited. Does not implicitly {@link google.cloud.tasks.v2beta2.AppEngineHttpRequest.verify|verify} messages.
                     * @param message AppEngineHttpRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tasks.v2beta2.IAppEngineHttpRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AppEngineHttpRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AppEngineHttpRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tasks.v2beta2.AppEngineHttpRequest;

                    /**
                     * Decodes an AppEngineHttpRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AppEngineHttpRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tasks.v2beta2.AppEngineHttpRequest;

                    /**
                     * Verifies an AppEngineHttpRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AppEngineHttpRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AppEngineHttpRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tasks.v2beta2.AppEngineHttpRequest;

                    /**
                     * Creates a plain object from an AppEngineHttpRequest message. Also converts values to other types if specified.
                     * @param message AppEngineHttpRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tasks.v2beta2.AppEngineHttpRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AppEngineHttpRequest to JSON.
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
                    constructor(properties?: google.cloud.tasks.v2beta2.IAppEngineRouting);

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
                    public static create(properties?: google.cloud.tasks.v2beta2.IAppEngineRouting): google.cloud.tasks.v2beta2.AppEngineRouting;

                    /**
                     * Encodes the specified AppEngineRouting message. Does not implicitly {@link google.cloud.tasks.v2beta2.AppEngineRouting.verify|verify} messages.
                     * @param message AppEngineRouting message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tasks.v2beta2.IAppEngineRouting, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AppEngineRouting message, length delimited. Does not implicitly {@link google.cloud.tasks.v2beta2.AppEngineRouting.verify|verify} messages.
                     * @param message AppEngineRouting message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tasks.v2beta2.IAppEngineRouting, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AppEngineRouting message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AppEngineRouting
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tasks.v2beta2.AppEngineRouting;

                    /**
                     * Decodes an AppEngineRouting message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AppEngineRouting
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tasks.v2beta2.AppEngineRouting;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.tasks.v2beta2.AppEngineRouting;

                    /**
                     * Creates a plain object from an AppEngineRouting message. Also converts values to other types if specified.
                     * @param message AppEngineRouting
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tasks.v2beta2.AppEngineRouting, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
                    DELETE = 5
                }

                /** Properties of a Task. */
                interface ITask {

                    /** Task name */
                    name?: (string|null);

                    /** Task appEngineHttpRequest */
                    appEngineHttpRequest?: (google.cloud.tasks.v2beta2.IAppEngineHttpRequest|null);

                    /** Task pullMessage */
                    pullMessage?: (google.cloud.tasks.v2beta2.IPullMessage|null);

                    /** Task scheduleTime */
                    scheduleTime?: (google.protobuf.ITimestamp|null);

                    /** Task createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** Task status */
                    status?: (google.cloud.tasks.v2beta2.ITaskStatus|null);

                    /** Task view */
                    view?: (google.cloud.tasks.v2beta2.Task.View|keyof typeof google.cloud.tasks.v2beta2.Task.View|null);
                }

                /** Represents a Task. */
                class Task implements ITask {

                    /**
                     * Constructs a new Task.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tasks.v2beta2.ITask);

                    /** Task name. */
                    public name: string;

                    /** Task appEngineHttpRequest. */
                    public appEngineHttpRequest?: (google.cloud.tasks.v2beta2.IAppEngineHttpRequest|null);

                    /** Task pullMessage. */
                    public pullMessage?: (google.cloud.tasks.v2beta2.IPullMessage|null);

                    /** Task scheduleTime. */
                    public scheduleTime?: (google.protobuf.ITimestamp|null);

                    /** Task createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** Task status. */
                    public status?: (google.cloud.tasks.v2beta2.ITaskStatus|null);

                    /** Task view. */
                    public view: (google.cloud.tasks.v2beta2.Task.View|keyof typeof google.cloud.tasks.v2beta2.Task.View);

                    /** Task payloadType. */
                    public payloadType?: ("appEngineHttpRequest"|"pullMessage");

                    /**
                     * Creates a new Task instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Task instance
                     */
                    public static create(properties?: google.cloud.tasks.v2beta2.ITask): google.cloud.tasks.v2beta2.Task;

                    /**
                     * Encodes the specified Task message. Does not implicitly {@link google.cloud.tasks.v2beta2.Task.verify|verify} messages.
                     * @param message Task message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tasks.v2beta2.ITask, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Task message, length delimited. Does not implicitly {@link google.cloud.tasks.v2beta2.Task.verify|verify} messages.
                     * @param message Task message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tasks.v2beta2.ITask, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Task message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Task
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tasks.v2beta2.Task;

                    /**
                     * Decodes a Task message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Task
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tasks.v2beta2.Task;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.tasks.v2beta2.Task;

                    /**
                     * Creates a plain object from a Task message. Also converts values to other types if specified.
                     * @param message Task
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tasks.v2beta2.Task, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Task to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace Task {

                    /** View enum. */
                    enum View {
                        VIEW_UNSPECIFIED = 0,
                        BASIC = 1,
                        FULL = 2
                    }
                }

                /** Properties of a TaskStatus. */
                interface ITaskStatus {

                    /** TaskStatus attemptDispatchCount */
                    attemptDispatchCount?: (number|null);

                    /** TaskStatus attemptResponseCount */
                    attemptResponseCount?: (number|null);

                    /** TaskStatus firstAttemptStatus */
                    firstAttemptStatus?: (google.cloud.tasks.v2beta2.IAttemptStatus|null);

                    /** TaskStatus lastAttemptStatus */
                    lastAttemptStatus?: (google.cloud.tasks.v2beta2.IAttemptStatus|null);
                }

                /** Represents a TaskStatus. */
                class TaskStatus implements ITaskStatus {

                    /**
                     * Constructs a new TaskStatus.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tasks.v2beta2.ITaskStatus);

                    /** TaskStatus attemptDispatchCount. */
                    public attemptDispatchCount: number;

                    /** TaskStatus attemptResponseCount. */
                    public attemptResponseCount: number;

                    /** TaskStatus firstAttemptStatus. */
                    public firstAttemptStatus?: (google.cloud.tasks.v2beta2.IAttemptStatus|null);

                    /** TaskStatus lastAttemptStatus. */
                    public lastAttemptStatus?: (google.cloud.tasks.v2beta2.IAttemptStatus|null);

                    /**
                     * Creates a new TaskStatus instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TaskStatus instance
                     */
                    public static create(properties?: google.cloud.tasks.v2beta2.ITaskStatus): google.cloud.tasks.v2beta2.TaskStatus;

                    /**
                     * Encodes the specified TaskStatus message. Does not implicitly {@link google.cloud.tasks.v2beta2.TaskStatus.verify|verify} messages.
                     * @param message TaskStatus message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tasks.v2beta2.ITaskStatus, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TaskStatus message, length delimited. Does not implicitly {@link google.cloud.tasks.v2beta2.TaskStatus.verify|verify} messages.
                     * @param message TaskStatus message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tasks.v2beta2.ITaskStatus, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TaskStatus message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TaskStatus
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tasks.v2beta2.TaskStatus;

                    /**
                     * Decodes a TaskStatus message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TaskStatus
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tasks.v2beta2.TaskStatus;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.tasks.v2beta2.TaskStatus;

                    /**
                     * Creates a plain object from a TaskStatus message. Also converts values to other types if specified.
                     * @param message TaskStatus
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tasks.v2beta2.TaskStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TaskStatus to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an AttemptStatus. */
                interface IAttemptStatus {

                    /** AttemptStatus scheduleTime */
                    scheduleTime?: (google.protobuf.ITimestamp|null);

                    /** AttemptStatus dispatchTime */
                    dispatchTime?: (google.protobuf.ITimestamp|null);

                    /** AttemptStatus responseTime */
                    responseTime?: (google.protobuf.ITimestamp|null);

                    /** AttemptStatus responseStatus */
                    responseStatus?: (google.rpc.IStatus|null);
                }

                /** Represents an AttemptStatus. */
                class AttemptStatus implements IAttemptStatus {

                    /**
                     * Constructs a new AttemptStatus.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tasks.v2beta2.IAttemptStatus);

                    /** AttemptStatus scheduleTime. */
                    public scheduleTime?: (google.protobuf.ITimestamp|null);

                    /** AttemptStatus dispatchTime. */
                    public dispatchTime?: (google.protobuf.ITimestamp|null);

                    /** AttemptStatus responseTime. */
                    public responseTime?: (google.protobuf.ITimestamp|null);

                    /** AttemptStatus responseStatus. */
                    public responseStatus?: (google.rpc.IStatus|null);

                    /**
                     * Creates a new AttemptStatus instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AttemptStatus instance
                     */
                    public static create(properties?: google.cloud.tasks.v2beta2.IAttemptStatus): google.cloud.tasks.v2beta2.AttemptStatus;

                    /**
                     * Encodes the specified AttemptStatus message. Does not implicitly {@link google.cloud.tasks.v2beta2.AttemptStatus.verify|verify} messages.
                     * @param message AttemptStatus message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tasks.v2beta2.IAttemptStatus, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AttemptStatus message, length delimited. Does not implicitly {@link google.cloud.tasks.v2beta2.AttemptStatus.verify|verify} messages.
                     * @param message AttemptStatus message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tasks.v2beta2.IAttemptStatus, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AttemptStatus message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AttemptStatus
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tasks.v2beta2.AttemptStatus;

                    /**
                     * Decodes an AttemptStatus message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AttemptStatus
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tasks.v2beta2.AttemptStatus;

                    /**
                     * Verifies an AttemptStatus message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AttemptStatus message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AttemptStatus
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tasks.v2beta2.AttemptStatus;

                    /**
                     * Creates a plain object from an AttemptStatus message. Also converts values to other types if specified.
                     * @param message AttemptStatus
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tasks.v2beta2.AttemptStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AttemptStatus to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }
            }

            /** Namespace v2beta3. */
            namespace v2beta3 {

                /** Represents a CloudTasks */
                class CloudTasks extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new CloudTasks service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new CloudTasks service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): CloudTasks;

                    /**
                     * Calls ListQueues.
                     * @param request ListQueuesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListQueuesResponse
                     */
                    public listQueues(request: google.cloud.tasks.v2beta3.IListQueuesRequest, callback: google.cloud.tasks.v2beta3.CloudTasks.ListQueuesCallback): void;

                    /**
                     * Calls ListQueues.
                     * @param request ListQueuesRequest message or plain object
                     * @returns Promise
                     */
                    public listQueues(request: google.cloud.tasks.v2beta3.IListQueuesRequest): Promise<google.cloud.tasks.v2beta3.ListQueuesResponse>;

                    /**
                     * Calls GetQueue.
                     * @param request GetQueueRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Queue
                     */
                    public getQueue(request: google.cloud.tasks.v2beta3.IGetQueueRequest, callback: google.cloud.tasks.v2beta3.CloudTasks.GetQueueCallback): void;

                    /**
                     * Calls GetQueue.
                     * @param request GetQueueRequest message or plain object
                     * @returns Promise
                     */
                    public getQueue(request: google.cloud.tasks.v2beta3.IGetQueueRequest): Promise<google.cloud.tasks.v2beta3.Queue>;

                    /**
                     * Calls CreateQueue.
                     * @param request CreateQueueRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Queue
                     */
                    public createQueue(request: google.cloud.tasks.v2beta3.ICreateQueueRequest, callback: google.cloud.tasks.v2beta3.CloudTasks.CreateQueueCallback): void;

                    /**
                     * Calls CreateQueue.
                     * @param request CreateQueueRequest message or plain object
                     * @returns Promise
                     */
                    public createQueue(request: google.cloud.tasks.v2beta3.ICreateQueueRequest): Promise<google.cloud.tasks.v2beta3.Queue>;

                    /**
                     * Calls UpdateQueue.
                     * @param request UpdateQueueRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Queue
                     */
                    public updateQueue(request: google.cloud.tasks.v2beta3.IUpdateQueueRequest, callback: google.cloud.tasks.v2beta3.CloudTasks.UpdateQueueCallback): void;

                    /**
                     * Calls UpdateQueue.
                     * @param request UpdateQueueRequest message or plain object
                     * @returns Promise
                     */
                    public updateQueue(request: google.cloud.tasks.v2beta3.IUpdateQueueRequest): Promise<google.cloud.tasks.v2beta3.Queue>;

                    /**
                     * Calls DeleteQueue.
                     * @param request DeleteQueueRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Empty
                     */
                    public deleteQueue(request: google.cloud.tasks.v2beta3.IDeleteQueueRequest, callback: google.cloud.tasks.v2beta3.CloudTasks.DeleteQueueCallback): void;

                    /**
                     * Calls DeleteQueue.
                     * @param request DeleteQueueRequest message or plain object
                     * @returns Promise
                     */
                    public deleteQueue(request: google.cloud.tasks.v2beta3.IDeleteQueueRequest): Promise<google.protobuf.Empty>;

                    /**
                     * Calls PurgeQueue.
                     * @param request PurgeQueueRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Queue
                     */
                    public purgeQueue(request: google.cloud.tasks.v2beta3.IPurgeQueueRequest, callback: google.cloud.tasks.v2beta3.CloudTasks.PurgeQueueCallback): void;

                    /**
                     * Calls PurgeQueue.
                     * @param request PurgeQueueRequest message or plain object
                     * @returns Promise
                     */
                    public purgeQueue(request: google.cloud.tasks.v2beta3.IPurgeQueueRequest): Promise<google.cloud.tasks.v2beta3.Queue>;

                    /**
                     * Calls PauseQueue.
                     * @param request PauseQueueRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Queue
                     */
                    public pauseQueue(request: google.cloud.tasks.v2beta3.IPauseQueueRequest, callback: google.cloud.tasks.v2beta3.CloudTasks.PauseQueueCallback): void;

                    /**
                     * Calls PauseQueue.
                     * @param request PauseQueueRequest message or plain object
                     * @returns Promise
                     */
                    public pauseQueue(request: google.cloud.tasks.v2beta3.IPauseQueueRequest): Promise<google.cloud.tasks.v2beta3.Queue>;

                    /**
                     * Calls ResumeQueue.
                     * @param request ResumeQueueRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Queue
                     */
                    public resumeQueue(request: google.cloud.tasks.v2beta3.IResumeQueueRequest, callback: google.cloud.tasks.v2beta3.CloudTasks.ResumeQueueCallback): void;

                    /**
                     * Calls ResumeQueue.
                     * @param request ResumeQueueRequest message or plain object
                     * @returns Promise
                     */
                    public resumeQueue(request: google.cloud.tasks.v2beta3.IResumeQueueRequest): Promise<google.cloud.tasks.v2beta3.Queue>;

                    /**
                     * Calls GetIamPolicy.
                     * @param request GetIamPolicyRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Policy
                     */
                    public getIamPolicy(request: google.iam.v1.IGetIamPolicyRequest, callback: google.cloud.tasks.v2beta3.CloudTasks.GetIamPolicyCallback): void;

                    /**
                     * Calls GetIamPolicy.
                     * @param request GetIamPolicyRequest message or plain object
                     * @returns Promise
                     */
                    public getIamPolicy(request: google.iam.v1.IGetIamPolicyRequest): Promise<google.iam.v1.Policy>;

                    /**
                     * Calls SetIamPolicy.
                     * @param request SetIamPolicyRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Policy
                     */
                    public setIamPolicy(request: google.iam.v1.ISetIamPolicyRequest, callback: google.cloud.tasks.v2beta3.CloudTasks.SetIamPolicyCallback): void;

                    /**
                     * Calls SetIamPolicy.
                     * @param request SetIamPolicyRequest message or plain object
                     * @returns Promise
                     */
                    public setIamPolicy(request: google.iam.v1.ISetIamPolicyRequest): Promise<google.iam.v1.Policy>;

                    /**
                     * Calls TestIamPermissions.
                     * @param request TestIamPermissionsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and TestIamPermissionsResponse
                     */
                    public testIamPermissions(request: google.iam.v1.ITestIamPermissionsRequest, callback: google.cloud.tasks.v2beta3.CloudTasks.TestIamPermissionsCallback): void;

                    /**
                     * Calls TestIamPermissions.
                     * @param request TestIamPermissionsRequest message or plain object
                     * @returns Promise
                     */
                    public testIamPermissions(request: google.iam.v1.ITestIamPermissionsRequest): Promise<google.iam.v1.TestIamPermissionsResponse>;

                    /**
                     * Calls ListTasks.
                     * @param request ListTasksRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListTasksResponse
                     */
                    public listTasks(request: google.cloud.tasks.v2beta3.IListTasksRequest, callback: google.cloud.tasks.v2beta3.CloudTasks.ListTasksCallback): void;

                    /**
                     * Calls ListTasks.
                     * @param request ListTasksRequest message or plain object
                     * @returns Promise
                     */
                    public listTasks(request: google.cloud.tasks.v2beta3.IListTasksRequest): Promise<google.cloud.tasks.v2beta3.ListTasksResponse>;

                    /**
                     * Calls GetTask.
                     * @param request GetTaskRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Task
                     */
                    public getTask(request: google.cloud.tasks.v2beta3.IGetTaskRequest, callback: google.cloud.tasks.v2beta3.CloudTasks.GetTaskCallback): void;

                    /**
                     * Calls GetTask.
                     * @param request GetTaskRequest message or plain object
                     * @returns Promise
                     */
                    public getTask(request: google.cloud.tasks.v2beta3.IGetTaskRequest): Promise<google.cloud.tasks.v2beta3.Task>;

                    /**
                     * Calls CreateTask.
                     * @param request CreateTaskRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Task
                     */
                    public createTask(request: google.cloud.tasks.v2beta3.ICreateTaskRequest, callback: google.cloud.tasks.v2beta3.CloudTasks.CreateTaskCallback): void;

                    /**
                     * Calls CreateTask.
                     * @param request CreateTaskRequest message or plain object
                     * @returns Promise
                     */
                    public createTask(request: google.cloud.tasks.v2beta3.ICreateTaskRequest): Promise<google.cloud.tasks.v2beta3.Task>;

                    /**
                     * Calls DeleteTask.
                     * @param request DeleteTaskRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Empty
                     */
                    public deleteTask(request: google.cloud.tasks.v2beta3.IDeleteTaskRequest, callback: google.cloud.tasks.v2beta3.CloudTasks.DeleteTaskCallback): void;

                    /**
                     * Calls DeleteTask.
                     * @param request DeleteTaskRequest message or plain object
                     * @returns Promise
                     */
                    public deleteTask(request: google.cloud.tasks.v2beta3.IDeleteTaskRequest): Promise<google.protobuf.Empty>;

                    /**
                     * Calls RunTask.
                     * @param request RunTaskRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Task
                     */
                    public runTask(request: google.cloud.tasks.v2beta3.IRunTaskRequest, callback: google.cloud.tasks.v2beta3.CloudTasks.RunTaskCallback): void;

                    /**
                     * Calls RunTask.
                     * @param request RunTaskRequest message or plain object
                     * @returns Promise
                     */
                    public runTask(request: google.cloud.tasks.v2beta3.IRunTaskRequest): Promise<google.cloud.tasks.v2beta3.Task>;
                }

                namespace CloudTasks {

                    /**
                     * Callback as used by {@link google.cloud.tasks.v2beta3.CloudTasks#listQueues}.
                     * @param error Error, if any
                     * @param [response] ListQueuesResponse
                     */
                    type ListQueuesCallback = (error: (Error|null), response?: google.cloud.tasks.v2beta3.ListQueuesResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.tasks.v2beta3.CloudTasks#getQueue}.
                     * @param error Error, if any
                     * @param [response] Queue
                     */
                    type GetQueueCallback = (error: (Error|null), response?: google.cloud.tasks.v2beta3.Queue) => void;

                    /**
                     * Callback as used by {@link google.cloud.tasks.v2beta3.CloudTasks#createQueue}.
                     * @param error Error, if any
                     * @param [response] Queue
                     */
                    type CreateQueueCallback = (error: (Error|null), response?: google.cloud.tasks.v2beta3.Queue) => void;

                    /**
                     * Callback as used by {@link google.cloud.tasks.v2beta3.CloudTasks#updateQueue}.
                     * @param error Error, if any
                     * @param [response] Queue
                     */
                    type UpdateQueueCallback = (error: (Error|null), response?: google.cloud.tasks.v2beta3.Queue) => void;

                    /**
                     * Callback as used by {@link google.cloud.tasks.v2beta3.CloudTasks#deleteQueue}.
                     * @param error Error, if any
                     * @param [response] Empty
                     */
                    type DeleteQueueCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                    /**
                     * Callback as used by {@link google.cloud.tasks.v2beta3.CloudTasks#purgeQueue}.
                     * @param error Error, if any
                     * @param [response] Queue
                     */
                    type PurgeQueueCallback = (error: (Error|null), response?: google.cloud.tasks.v2beta3.Queue) => void;

                    /**
                     * Callback as used by {@link google.cloud.tasks.v2beta3.CloudTasks#pauseQueue}.
                     * @param error Error, if any
                     * @param [response] Queue
                     */
                    type PauseQueueCallback = (error: (Error|null), response?: google.cloud.tasks.v2beta3.Queue) => void;

                    /**
                     * Callback as used by {@link google.cloud.tasks.v2beta3.CloudTasks#resumeQueue}.
                     * @param error Error, if any
                     * @param [response] Queue
                     */
                    type ResumeQueueCallback = (error: (Error|null), response?: google.cloud.tasks.v2beta3.Queue) => void;

                    /**
                     * Callback as used by {@link google.cloud.tasks.v2beta3.CloudTasks#getIamPolicy}.
                     * @param error Error, if any
                     * @param [response] Policy
                     */
                    type GetIamPolicyCallback = (error: (Error|null), response?: google.iam.v1.Policy) => void;

                    /**
                     * Callback as used by {@link google.cloud.tasks.v2beta3.CloudTasks#setIamPolicy}.
                     * @param error Error, if any
                     * @param [response] Policy
                     */
                    type SetIamPolicyCallback = (error: (Error|null), response?: google.iam.v1.Policy) => void;

                    /**
                     * Callback as used by {@link google.cloud.tasks.v2beta3.CloudTasks#testIamPermissions}.
                     * @param error Error, if any
                     * @param [response] TestIamPermissionsResponse
                     */
                    type TestIamPermissionsCallback = (error: (Error|null), response?: google.iam.v1.TestIamPermissionsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.tasks.v2beta3.CloudTasks#listTasks}.
                     * @param error Error, if any
                     * @param [response] ListTasksResponse
                     */
                    type ListTasksCallback = (error: (Error|null), response?: google.cloud.tasks.v2beta3.ListTasksResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.tasks.v2beta3.CloudTasks#getTask}.
                     * @param error Error, if any
                     * @param [response] Task
                     */
                    type GetTaskCallback = (error: (Error|null), response?: google.cloud.tasks.v2beta3.Task) => void;

                    /**
                     * Callback as used by {@link google.cloud.tasks.v2beta3.CloudTasks#createTask}.
                     * @param error Error, if any
                     * @param [response] Task
                     */
                    type CreateTaskCallback = (error: (Error|null), response?: google.cloud.tasks.v2beta3.Task) => void;

                    /**
                     * Callback as used by {@link google.cloud.tasks.v2beta3.CloudTasks#deleteTask}.
                     * @param error Error, if any
                     * @param [response] Empty
                     */
                    type DeleteTaskCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                    /**
                     * Callback as used by {@link google.cloud.tasks.v2beta3.CloudTasks#runTask}.
                     * @param error Error, if any
                     * @param [response] Task
                     */
                    type RunTaskCallback = (error: (Error|null), response?: google.cloud.tasks.v2beta3.Task) => void;
                }

                /** Properties of a ListQueuesRequest. */
                interface IListQueuesRequest {

                    /** ListQueuesRequest parent */
                    parent?: (string|null);

                    /** ListQueuesRequest filter */
                    filter?: (string|null);

                    /** ListQueuesRequest pageSize */
                    pageSize?: (number|null);

                    /** ListQueuesRequest pageToken */
                    pageToken?: (string|null);

                    /** ListQueuesRequest readMask */
                    readMask?: (google.protobuf.IFieldMask|null);
                }

                /** Represents a ListQueuesRequest. */
                class ListQueuesRequest implements IListQueuesRequest {

                    /**
                     * Constructs a new ListQueuesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tasks.v2beta3.IListQueuesRequest);

                    /** ListQueuesRequest parent. */
                    public parent: string;

                    /** ListQueuesRequest filter. */
                    public filter: string;

                    /** ListQueuesRequest pageSize. */
                    public pageSize: number;

                    /** ListQueuesRequest pageToken. */
                    public pageToken: string;

                    /** ListQueuesRequest readMask. */
                    public readMask?: (google.protobuf.IFieldMask|null);

                    /**
                     * Creates a new ListQueuesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListQueuesRequest instance
                     */
                    public static create(properties?: google.cloud.tasks.v2beta3.IListQueuesRequest): google.cloud.tasks.v2beta3.ListQueuesRequest;

                    /**
                     * Encodes the specified ListQueuesRequest message. Does not implicitly {@link google.cloud.tasks.v2beta3.ListQueuesRequest.verify|verify} messages.
                     * @param message ListQueuesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tasks.v2beta3.IListQueuesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListQueuesRequest message, length delimited. Does not implicitly {@link google.cloud.tasks.v2beta3.ListQueuesRequest.verify|verify} messages.
                     * @param message ListQueuesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tasks.v2beta3.IListQueuesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListQueuesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListQueuesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tasks.v2beta3.ListQueuesRequest;

                    /**
                     * Decodes a ListQueuesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListQueuesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tasks.v2beta3.ListQueuesRequest;

                    /**
                     * Verifies a ListQueuesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListQueuesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListQueuesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tasks.v2beta3.ListQueuesRequest;

                    /**
                     * Creates a plain object from a ListQueuesRequest message. Also converts values to other types if specified.
                     * @param message ListQueuesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tasks.v2beta3.ListQueuesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListQueuesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListQueuesResponse. */
                interface IListQueuesResponse {

                    /** ListQueuesResponse queues */
                    queues?: (google.cloud.tasks.v2beta3.IQueue[]|null);

                    /** ListQueuesResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListQueuesResponse. */
                class ListQueuesResponse implements IListQueuesResponse {

                    /**
                     * Constructs a new ListQueuesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tasks.v2beta3.IListQueuesResponse);

                    /** ListQueuesResponse queues. */
                    public queues: google.cloud.tasks.v2beta3.IQueue[];

                    /** ListQueuesResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListQueuesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListQueuesResponse instance
                     */
                    public static create(properties?: google.cloud.tasks.v2beta3.IListQueuesResponse): google.cloud.tasks.v2beta3.ListQueuesResponse;

                    /**
                     * Encodes the specified ListQueuesResponse message. Does not implicitly {@link google.cloud.tasks.v2beta3.ListQueuesResponse.verify|verify} messages.
                     * @param message ListQueuesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tasks.v2beta3.IListQueuesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListQueuesResponse message, length delimited. Does not implicitly {@link google.cloud.tasks.v2beta3.ListQueuesResponse.verify|verify} messages.
                     * @param message ListQueuesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tasks.v2beta3.IListQueuesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListQueuesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListQueuesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tasks.v2beta3.ListQueuesResponse;

                    /**
                     * Decodes a ListQueuesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListQueuesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tasks.v2beta3.ListQueuesResponse;

                    /**
                     * Verifies a ListQueuesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListQueuesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListQueuesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tasks.v2beta3.ListQueuesResponse;

                    /**
                     * Creates a plain object from a ListQueuesResponse message. Also converts values to other types if specified.
                     * @param message ListQueuesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tasks.v2beta3.ListQueuesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListQueuesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetQueueRequest. */
                interface IGetQueueRequest {

                    /** GetQueueRequest name */
                    name?: (string|null);

                    /** GetQueueRequest readMask */
                    readMask?: (google.protobuf.IFieldMask|null);
                }

                /** Represents a GetQueueRequest. */
                class GetQueueRequest implements IGetQueueRequest {

                    /**
                     * Constructs a new GetQueueRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tasks.v2beta3.IGetQueueRequest);

                    /** GetQueueRequest name. */
                    public name: string;

                    /** GetQueueRequest readMask. */
                    public readMask?: (google.protobuf.IFieldMask|null);

                    /**
                     * Creates a new GetQueueRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetQueueRequest instance
                     */
                    public static create(properties?: google.cloud.tasks.v2beta3.IGetQueueRequest): google.cloud.tasks.v2beta3.GetQueueRequest;

                    /**
                     * Encodes the specified GetQueueRequest message. Does not implicitly {@link google.cloud.tasks.v2beta3.GetQueueRequest.verify|verify} messages.
                     * @param message GetQueueRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tasks.v2beta3.IGetQueueRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetQueueRequest message, length delimited. Does not implicitly {@link google.cloud.tasks.v2beta3.GetQueueRequest.verify|verify} messages.
                     * @param message GetQueueRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tasks.v2beta3.IGetQueueRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetQueueRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetQueueRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tasks.v2beta3.GetQueueRequest;

                    /**
                     * Decodes a GetQueueRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetQueueRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tasks.v2beta3.GetQueueRequest;

                    /**
                     * Verifies a GetQueueRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetQueueRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetQueueRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tasks.v2beta3.GetQueueRequest;

                    /**
                     * Creates a plain object from a GetQueueRequest message. Also converts values to other types if specified.
                     * @param message GetQueueRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tasks.v2beta3.GetQueueRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetQueueRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a CreateQueueRequest. */
                interface ICreateQueueRequest {

                    /** CreateQueueRequest parent */
                    parent?: (string|null);

                    /** CreateQueueRequest queue */
                    queue?: (google.cloud.tasks.v2beta3.IQueue|null);
                }

                /** Represents a CreateQueueRequest. */
                class CreateQueueRequest implements ICreateQueueRequest {

                    /**
                     * Constructs a new CreateQueueRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tasks.v2beta3.ICreateQueueRequest);

                    /** CreateQueueRequest parent. */
                    public parent: string;

                    /** CreateQueueRequest queue. */
                    public queue?: (google.cloud.tasks.v2beta3.IQueue|null);

                    /**
                     * Creates a new CreateQueueRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateQueueRequest instance
                     */
                    public static create(properties?: google.cloud.tasks.v2beta3.ICreateQueueRequest): google.cloud.tasks.v2beta3.CreateQueueRequest;

                    /**
                     * Encodes the specified CreateQueueRequest message. Does not implicitly {@link google.cloud.tasks.v2beta3.CreateQueueRequest.verify|verify} messages.
                     * @param message CreateQueueRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tasks.v2beta3.ICreateQueueRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateQueueRequest message, length delimited. Does not implicitly {@link google.cloud.tasks.v2beta3.CreateQueueRequest.verify|verify} messages.
                     * @param message CreateQueueRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tasks.v2beta3.ICreateQueueRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateQueueRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateQueueRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tasks.v2beta3.CreateQueueRequest;

                    /**
                     * Decodes a CreateQueueRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateQueueRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tasks.v2beta3.CreateQueueRequest;

                    /**
                     * Verifies a CreateQueueRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateQueueRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateQueueRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tasks.v2beta3.CreateQueueRequest;

                    /**
                     * Creates a plain object from a CreateQueueRequest message. Also converts values to other types if specified.
                     * @param message CreateQueueRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tasks.v2beta3.CreateQueueRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateQueueRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an UpdateQueueRequest. */
                interface IUpdateQueueRequest {

                    /** UpdateQueueRequest queue */
                    queue?: (google.cloud.tasks.v2beta3.IQueue|null);

                    /** UpdateQueueRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);
                }

                /** Represents an UpdateQueueRequest. */
                class UpdateQueueRequest implements IUpdateQueueRequest {

                    /**
                     * Constructs a new UpdateQueueRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tasks.v2beta3.IUpdateQueueRequest);

                    /** UpdateQueueRequest queue. */
                    public queue?: (google.cloud.tasks.v2beta3.IQueue|null);

                    /** UpdateQueueRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /**
                     * Creates a new UpdateQueueRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateQueueRequest instance
                     */
                    public static create(properties?: google.cloud.tasks.v2beta3.IUpdateQueueRequest): google.cloud.tasks.v2beta3.UpdateQueueRequest;

                    /**
                     * Encodes the specified UpdateQueueRequest message. Does not implicitly {@link google.cloud.tasks.v2beta3.UpdateQueueRequest.verify|verify} messages.
                     * @param message UpdateQueueRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tasks.v2beta3.IUpdateQueueRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateQueueRequest message, length delimited. Does not implicitly {@link google.cloud.tasks.v2beta3.UpdateQueueRequest.verify|verify} messages.
                     * @param message UpdateQueueRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tasks.v2beta3.IUpdateQueueRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateQueueRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateQueueRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tasks.v2beta3.UpdateQueueRequest;

                    /**
                     * Decodes an UpdateQueueRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateQueueRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tasks.v2beta3.UpdateQueueRequest;

                    /**
                     * Verifies an UpdateQueueRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateQueueRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateQueueRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tasks.v2beta3.UpdateQueueRequest;

                    /**
                     * Creates a plain object from an UpdateQueueRequest message. Also converts values to other types if specified.
                     * @param message UpdateQueueRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tasks.v2beta3.UpdateQueueRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateQueueRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DeleteQueueRequest. */
                interface IDeleteQueueRequest {

                    /** DeleteQueueRequest name */
                    name?: (string|null);
                }

                /** Represents a DeleteQueueRequest. */
                class DeleteQueueRequest implements IDeleteQueueRequest {

                    /**
                     * Constructs a new DeleteQueueRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tasks.v2beta3.IDeleteQueueRequest);

                    /** DeleteQueueRequest name. */
                    public name: string;

                    /**
                     * Creates a new DeleteQueueRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteQueueRequest instance
                     */
                    public static create(properties?: google.cloud.tasks.v2beta3.IDeleteQueueRequest): google.cloud.tasks.v2beta3.DeleteQueueRequest;

                    /**
                     * Encodes the specified DeleteQueueRequest message. Does not implicitly {@link google.cloud.tasks.v2beta3.DeleteQueueRequest.verify|verify} messages.
                     * @param message DeleteQueueRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tasks.v2beta3.IDeleteQueueRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteQueueRequest message, length delimited. Does not implicitly {@link google.cloud.tasks.v2beta3.DeleteQueueRequest.verify|verify} messages.
                     * @param message DeleteQueueRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tasks.v2beta3.IDeleteQueueRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteQueueRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteQueueRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tasks.v2beta3.DeleteQueueRequest;

                    /**
                     * Decodes a DeleteQueueRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteQueueRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tasks.v2beta3.DeleteQueueRequest;

                    /**
                     * Verifies a DeleteQueueRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteQueueRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteQueueRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tasks.v2beta3.DeleteQueueRequest;

                    /**
                     * Creates a plain object from a DeleteQueueRequest message. Also converts values to other types if specified.
                     * @param message DeleteQueueRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tasks.v2beta3.DeleteQueueRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteQueueRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a PurgeQueueRequest. */
                interface IPurgeQueueRequest {

                    /** PurgeQueueRequest name */
                    name?: (string|null);
                }

                /** Represents a PurgeQueueRequest. */
                class PurgeQueueRequest implements IPurgeQueueRequest {

                    /**
                     * Constructs a new PurgeQueueRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tasks.v2beta3.IPurgeQueueRequest);

                    /** PurgeQueueRequest name. */
                    public name: string;

                    /**
                     * Creates a new PurgeQueueRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PurgeQueueRequest instance
                     */
                    public static create(properties?: google.cloud.tasks.v2beta3.IPurgeQueueRequest): google.cloud.tasks.v2beta3.PurgeQueueRequest;

                    /**
                     * Encodes the specified PurgeQueueRequest message. Does not implicitly {@link google.cloud.tasks.v2beta3.PurgeQueueRequest.verify|verify} messages.
                     * @param message PurgeQueueRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tasks.v2beta3.IPurgeQueueRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PurgeQueueRequest message, length delimited. Does not implicitly {@link google.cloud.tasks.v2beta3.PurgeQueueRequest.verify|verify} messages.
                     * @param message PurgeQueueRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tasks.v2beta3.IPurgeQueueRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PurgeQueueRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PurgeQueueRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tasks.v2beta3.PurgeQueueRequest;

                    /**
                     * Decodes a PurgeQueueRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PurgeQueueRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tasks.v2beta3.PurgeQueueRequest;

                    /**
                     * Verifies a PurgeQueueRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PurgeQueueRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PurgeQueueRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tasks.v2beta3.PurgeQueueRequest;

                    /**
                     * Creates a plain object from a PurgeQueueRequest message. Also converts values to other types if specified.
                     * @param message PurgeQueueRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tasks.v2beta3.PurgeQueueRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PurgeQueueRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a PauseQueueRequest. */
                interface IPauseQueueRequest {

                    /** PauseQueueRequest name */
                    name?: (string|null);
                }

                /** Represents a PauseQueueRequest. */
                class PauseQueueRequest implements IPauseQueueRequest {

                    /**
                     * Constructs a new PauseQueueRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tasks.v2beta3.IPauseQueueRequest);

                    /** PauseQueueRequest name. */
                    public name: string;

                    /**
                     * Creates a new PauseQueueRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PauseQueueRequest instance
                     */
                    public static create(properties?: google.cloud.tasks.v2beta3.IPauseQueueRequest): google.cloud.tasks.v2beta3.PauseQueueRequest;

                    /**
                     * Encodes the specified PauseQueueRequest message. Does not implicitly {@link google.cloud.tasks.v2beta3.PauseQueueRequest.verify|verify} messages.
                     * @param message PauseQueueRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tasks.v2beta3.IPauseQueueRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PauseQueueRequest message, length delimited. Does not implicitly {@link google.cloud.tasks.v2beta3.PauseQueueRequest.verify|verify} messages.
                     * @param message PauseQueueRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tasks.v2beta3.IPauseQueueRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PauseQueueRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PauseQueueRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tasks.v2beta3.PauseQueueRequest;

                    /**
                     * Decodes a PauseQueueRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PauseQueueRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tasks.v2beta3.PauseQueueRequest;

                    /**
                     * Verifies a PauseQueueRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PauseQueueRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PauseQueueRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tasks.v2beta3.PauseQueueRequest;

                    /**
                     * Creates a plain object from a PauseQueueRequest message. Also converts values to other types if specified.
                     * @param message PauseQueueRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tasks.v2beta3.PauseQueueRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PauseQueueRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ResumeQueueRequest. */
                interface IResumeQueueRequest {

                    /** ResumeQueueRequest name */
                    name?: (string|null);
                }

                /** Represents a ResumeQueueRequest. */
                class ResumeQueueRequest implements IResumeQueueRequest {

                    /**
                     * Constructs a new ResumeQueueRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tasks.v2beta3.IResumeQueueRequest);

                    /** ResumeQueueRequest name. */
                    public name: string;

                    /**
                     * Creates a new ResumeQueueRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ResumeQueueRequest instance
                     */
                    public static create(properties?: google.cloud.tasks.v2beta3.IResumeQueueRequest): google.cloud.tasks.v2beta3.ResumeQueueRequest;

                    /**
                     * Encodes the specified ResumeQueueRequest message. Does not implicitly {@link google.cloud.tasks.v2beta3.ResumeQueueRequest.verify|verify} messages.
                     * @param message ResumeQueueRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tasks.v2beta3.IResumeQueueRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ResumeQueueRequest message, length delimited. Does not implicitly {@link google.cloud.tasks.v2beta3.ResumeQueueRequest.verify|verify} messages.
                     * @param message ResumeQueueRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tasks.v2beta3.IResumeQueueRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ResumeQueueRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ResumeQueueRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tasks.v2beta3.ResumeQueueRequest;

                    /**
                     * Decodes a ResumeQueueRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ResumeQueueRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tasks.v2beta3.ResumeQueueRequest;

                    /**
                     * Verifies a ResumeQueueRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ResumeQueueRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ResumeQueueRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tasks.v2beta3.ResumeQueueRequest;

                    /**
                     * Creates a plain object from a ResumeQueueRequest message. Also converts values to other types if specified.
                     * @param message ResumeQueueRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tasks.v2beta3.ResumeQueueRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ResumeQueueRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListTasksRequest. */
                interface IListTasksRequest {

                    /** ListTasksRequest parent */
                    parent?: (string|null);

                    /** ListTasksRequest responseView */
                    responseView?: (google.cloud.tasks.v2beta3.Task.View|keyof typeof google.cloud.tasks.v2beta3.Task.View|null);

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
                    constructor(properties?: google.cloud.tasks.v2beta3.IListTasksRequest);

                    /** ListTasksRequest parent. */
                    public parent: string;

                    /** ListTasksRequest responseView. */
                    public responseView: (google.cloud.tasks.v2beta3.Task.View|keyof typeof google.cloud.tasks.v2beta3.Task.View);

                    /** ListTasksRequest pageSize. */
                    public pageSize: number;

                    /** ListTasksRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListTasksRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListTasksRequest instance
                     */
                    public static create(properties?: google.cloud.tasks.v2beta3.IListTasksRequest): google.cloud.tasks.v2beta3.ListTasksRequest;

                    /**
                     * Encodes the specified ListTasksRequest message. Does not implicitly {@link google.cloud.tasks.v2beta3.ListTasksRequest.verify|verify} messages.
                     * @param message ListTasksRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tasks.v2beta3.IListTasksRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListTasksRequest message, length delimited. Does not implicitly {@link google.cloud.tasks.v2beta3.ListTasksRequest.verify|verify} messages.
                     * @param message ListTasksRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tasks.v2beta3.IListTasksRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListTasksRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListTasksRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tasks.v2beta3.ListTasksRequest;

                    /**
                     * Decodes a ListTasksRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListTasksRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tasks.v2beta3.ListTasksRequest;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.tasks.v2beta3.ListTasksRequest;

                    /**
                     * Creates a plain object from a ListTasksRequest message. Also converts values to other types if specified.
                     * @param message ListTasksRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tasks.v2beta3.ListTasksRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListTasksRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListTasksResponse. */
                interface IListTasksResponse {

                    /** ListTasksResponse tasks */
                    tasks?: (google.cloud.tasks.v2beta3.ITask[]|null);

                    /** ListTasksResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListTasksResponse. */
                class ListTasksResponse implements IListTasksResponse {

                    /**
                     * Constructs a new ListTasksResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tasks.v2beta3.IListTasksResponse);

                    /** ListTasksResponse tasks. */
                    public tasks: google.cloud.tasks.v2beta3.ITask[];

                    /** ListTasksResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListTasksResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListTasksResponse instance
                     */
                    public static create(properties?: google.cloud.tasks.v2beta3.IListTasksResponse): google.cloud.tasks.v2beta3.ListTasksResponse;

                    /**
                     * Encodes the specified ListTasksResponse message. Does not implicitly {@link google.cloud.tasks.v2beta3.ListTasksResponse.verify|verify} messages.
                     * @param message ListTasksResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tasks.v2beta3.IListTasksResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListTasksResponse message, length delimited. Does not implicitly {@link google.cloud.tasks.v2beta3.ListTasksResponse.verify|verify} messages.
                     * @param message ListTasksResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tasks.v2beta3.IListTasksResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListTasksResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListTasksResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tasks.v2beta3.ListTasksResponse;

                    /**
                     * Decodes a ListTasksResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListTasksResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tasks.v2beta3.ListTasksResponse;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.tasks.v2beta3.ListTasksResponse;

                    /**
                     * Creates a plain object from a ListTasksResponse message. Also converts values to other types if specified.
                     * @param message ListTasksResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tasks.v2beta3.ListTasksResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListTasksResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetTaskRequest. */
                interface IGetTaskRequest {

                    /** GetTaskRequest name */
                    name?: (string|null);

                    /** GetTaskRequest responseView */
                    responseView?: (google.cloud.tasks.v2beta3.Task.View|keyof typeof google.cloud.tasks.v2beta3.Task.View|null);
                }

                /** Represents a GetTaskRequest. */
                class GetTaskRequest implements IGetTaskRequest {

                    /**
                     * Constructs a new GetTaskRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tasks.v2beta3.IGetTaskRequest);

                    /** GetTaskRequest name. */
                    public name: string;

                    /** GetTaskRequest responseView. */
                    public responseView: (google.cloud.tasks.v2beta3.Task.View|keyof typeof google.cloud.tasks.v2beta3.Task.View);

                    /**
                     * Creates a new GetTaskRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetTaskRequest instance
                     */
                    public static create(properties?: google.cloud.tasks.v2beta3.IGetTaskRequest): google.cloud.tasks.v2beta3.GetTaskRequest;

                    /**
                     * Encodes the specified GetTaskRequest message. Does not implicitly {@link google.cloud.tasks.v2beta3.GetTaskRequest.verify|verify} messages.
                     * @param message GetTaskRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tasks.v2beta3.IGetTaskRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetTaskRequest message, length delimited. Does not implicitly {@link google.cloud.tasks.v2beta3.GetTaskRequest.verify|verify} messages.
                     * @param message GetTaskRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tasks.v2beta3.IGetTaskRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetTaskRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetTaskRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tasks.v2beta3.GetTaskRequest;

                    /**
                     * Decodes a GetTaskRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetTaskRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tasks.v2beta3.GetTaskRequest;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.tasks.v2beta3.GetTaskRequest;

                    /**
                     * Creates a plain object from a GetTaskRequest message. Also converts values to other types if specified.
                     * @param message GetTaskRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tasks.v2beta3.GetTaskRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetTaskRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a CreateTaskRequest. */
                interface ICreateTaskRequest {

                    /** CreateTaskRequest parent */
                    parent?: (string|null);

                    /** CreateTaskRequest task */
                    task?: (google.cloud.tasks.v2beta3.ITask|null);

                    /** CreateTaskRequest responseView */
                    responseView?: (google.cloud.tasks.v2beta3.Task.View|keyof typeof google.cloud.tasks.v2beta3.Task.View|null);
                }

                /** Represents a CreateTaskRequest. */
                class CreateTaskRequest implements ICreateTaskRequest {

                    /**
                     * Constructs a new CreateTaskRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tasks.v2beta3.ICreateTaskRequest);

                    /** CreateTaskRequest parent. */
                    public parent: string;

                    /** CreateTaskRequest task. */
                    public task?: (google.cloud.tasks.v2beta3.ITask|null);

                    /** CreateTaskRequest responseView. */
                    public responseView: (google.cloud.tasks.v2beta3.Task.View|keyof typeof google.cloud.tasks.v2beta3.Task.View);

                    /**
                     * Creates a new CreateTaskRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateTaskRequest instance
                     */
                    public static create(properties?: google.cloud.tasks.v2beta3.ICreateTaskRequest): google.cloud.tasks.v2beta3.CreateTaskRequest;

                    /**
                     * Encodes the specified CreateTaskRequest message. Does not implicitly {@link google.cloud.tasks.v2beta3.CreateTaskRequest.verify|verify} messages.
                     * @param message CreateTaskRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tasks.v2beta3.ICreateTaskRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateTaskRequest message, length delimited. Does not implicitly {@link google.cloud.tasks.v2beta3.CreateTaskRequest.verify|verify} messages.
                     * @param message CreateTaskRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tasks.v2beta3.ICreateTaskRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateTaskRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateTaskRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tasks.v2beta3.CreateTaskRequest;

                    /**
                     * Decodes a CreateTaskRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateTaskRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tasks.v2beta3.CreateTaskRequest;

                    /**
                     * Verifies a CreateTaskRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateTaskRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateTaskRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tasks.v2beta3.CreateTaskRequest;

                    /**
                     * Creates a plain object from a CreateTaskRequest message. Also converts values to other types if specified.
                     * @param message CreateTaskRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tasks.v2beta3.CreateTaskRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateTaskRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DeleteTaskRequest. */
                interface IDeleteTaskRequest {

                    /** DeleteTaskRequest name */
                    name?: (string|null);
                }

                /** Represents a DeleteTaskRequest. */
                class DeleteTaskRequest implements IDeleteTaskRequest {

                    /**
                     * Constructs a new DeleteTaskRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tasks.v2beta3.IDeleteTaskRequest);

                    /** DeleteTaskRequest name. */
                    public name: string;

                    /**
                     * Creates a new DeleteTaskRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteTaskRequest instance
                     */
                    public static create(properties?: google.cloud.tasks.v2beta3.IDeleteTaskRequest): google.cloud.tasks.v2beta3.DeleteTaskRequest;

                    /**
                     * Encodes the specified DeleteTaskRequest message. Does not implicitly {@link google.cloud.tasks.v2beta3.DeleteTaskRequest.verify|verify} messages.
                     * @param message DeleteTaskRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tasks.v2beta3.IDeleteTaskRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteTaskRequest message, length delimited. Does not implicitly {@link google.cloud.tasks.v2beta3.DeleteTaskRequest.verify|verify} messages.
                     * @param message DeleteTaskRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tasks.v2beta3.IDeleteTaskRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteTaskRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteTaskRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tasks.v2beta3.DeleteTaskRequest;

                    /**
                     * Decodes a DeleteTaskRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteTaskRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tasks.v2beta3.DeleteTaskRequest;

                    /**
                     * Verifies a DeleteTaskRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteTaskRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteTaskRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tasks.v2beta3.DeleteTaskRequest;

                    /**
                     * Creates a plain object from a DeleteTaskRequest message. Also converts values to other types if specified.
                     * @param message DeleteTaskRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tasks.v2beta3.DeleteTaskRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteTaskRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a RunTaskRequest. */
                interface IRunTaskRequest {

                    /** RunTaskRequest name */
                    name?: (string|null);

                    /** RunTaskRequest responseView */
                    responseView?: (google.cloud.tasks.v2beta3.Task.View|keyof typeof google.cloud.tasks.v2beta3.Task.View|null);
                }

                /** Represents a RunTaskRequest. */
                class RunTaskRequest implements IRunTaskRequest {

                    /**
                     * Constructs a new RunTaskRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tasks.v2beta3.IRunTaskRequest);

                    /** RunTaskRequest name. */
                    public name: string;

                    /** RunTaskRequest responseView. */
                    public responseView: (google.cloud.tasks.v2beta3.Task.View|keyof typeof google.cloud.tasks.v2beta3.Task.View);

                    /**
                     * Creates a new RunTaskRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RunTaskRequest instance
                     */
                    public static create(properties?: google.cloud.tasks.v2beta3.IRunTaskRequest): google.cloud.tasks.v2beta3.RunTaskRequest;

                    /**
                     * Encodes the specified RunTaskRequest message. Does not implicitly {@link google.cloud.tasks.v2beta3.RunTaskRequest.verify|verify} messages.
                     * @param message RunTaskRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tasks.v2beta3.IRunTaskRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RunTaskRequest message, length delimited. Does not implicitly {@link google.cloud.tasks.v2beta3.RunTaskRequest.verify|verify} messages.
                     * @param message RunTaskRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tasks.v2beta3.IRunTaskRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RunTaskRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RunTaskRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tasks.v2beta3.RunTaskRequest;

                    /**
                     * Decodes a RunTaskRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RunTaskRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tasks.v2beta3.RunTaskRequest;

                    /**
                     * Verifies a RunTaskRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RunTaskRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RunTaskRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tasks.v2beta3.RunTaskRequest;

                    /**
                     * Creates a plain object from a RunTaskRequest message. Also converts values to other types if specified.
                     * @param message RunTaskRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tasks.v2beta3.RunTaskRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RunTaskRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a Queue. */
                interface IQueue {

                    /** Queue name */
                    name?: (string|null);

                    /** Queue appEngineHttpQueue */
                    appEngineHttpQueue?: (google.cloud.tasks.v2beta3.IAppEngineHttpQueue|null);

                    /** Queue rateLimits */
                    rateLimits?: (google.cloud.tasks.v2beta3.IRateLimits|null);

                    /** Queue retryConfig */
                    retryConfig?: (google.cloud.tasks.v2beta3.IRetryConfig|null);

                    /** Queue state */
                    state?: (google.cloud.tasks.v2beta3.Queue.State|keyof typeof google.cloud.tasks.v2beta3.Queue.State|null);

                    /** Queue purgeTime */
                    purgeTime?: (google.protobuf.ITimestamp|null);

                    /** Queue taskTtl */
                    taskTtl?: (google.protobuf.IDuration|null);

                    /** Queue tombstoneTtl */
                    tombstoneTtl?: (google.protobuf.IDuration|null);

                    /** Queue stackdriverLoggingConfig */
                    stackdriverLoggingConfig?: (google.cloud.tasks.v2beta3.IStackdriverLoggingConfig|null);

                    /** Queue type */
                    type?: (google.cloud.tasks.v2beta3.Queue.Type|keyof typeof google.cloud.tasks.v2beta3.Queue.Type|null);

                    /** Queue stats */
                    stats?: (google.cloud.tasks.v2beta3.IQueueStats|null);
                }

                /** Represents a Queue. */
                class Queue implements IQueue {

                    /**
                     * Constructs a new Queue.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tasks.v2beta3.IQueue);

                    /** Queue name. */
                    public name: string;

                    /** Queue appEngineHttpQueue. */
                    public appEngineHttpQueue?: (google.cloud.tasks.v2beta3.IAppEngineHttpQueue|null);

                    /** Queue rateLimits. */
                    public rateLimits?: (google.cloud.tasks.v2beta3.IRateLimits|null);

                    /** Queue retryConfig. */
                    public retryConfig?: (google.cloud.tasks.v2beta3.IRetryConfig|null);

                    /** Queue state. */
                    public state: (google.cloud.tasks.v2beta3.Queue.State|keyof typeof google.cloud.tasks.v2beta3.Queue.State);

                    /** Queue purgeTime. */
                    public purgeTime?: (google.protobuf.ITimestamp|null);

                    /** Queue taskTtl. */
                    public taskTtl?: (google.protobuf.IDuration|null);

                    /** Queue tombstoneTtl. */
                    public tombstoneTtl?: (google.protobuf.IDuration|null);

                    /** Queue stackdriverLoggingConfig. */
                    public stackdriverLoggingConfig?: (google.cloud.tasks.v2beta3.IStackdriverLoggingConfig|null);

                    /** Queue type. */
                    public type: (google.cloud.tasks.v2beta3.Queue.Type|keyof typeof google.cloud.tasks.v2beta3.Queue.Type);

                    /** Queue stats. */
                    public stats?: (google.cloud.tasks.v2beta3.IQueueStats|null);

                    /** Queue queueType. */
                    public queueType?: "appEngineHttpQueue";

                    /**
                     * Creates a new Queue instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Queue instance
                     */
                    public static create(properties?: google.cloud.tasks.v2beta3.IQueue): google.cloud.tasks.v2beta3.Queue;

                    /**
                     * Encodes the specified Queue message. Does not implicitly {@link google.cloud.tasks.v2beta3.Queue.verify|verify} messages.
                     * @param message Queue message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tasks.v2beta3.IQueue, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Queue message, length delimited. Does not implicitly {@link google.cloud.tasks.v2beta3.Queue.verify|verify} messages.
                     * @param message Queue message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tasks.v2beta3.IQueue, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Queue message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Queue
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tasks.v2beta3.Queue;

                    /**
                     * Decodes a Queue message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Queue
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tasks.v2beta3.Queue;

                    /**
                     * Verifies a Queue message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Queue message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Queue
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tasks.v2beta3.Queue;

                    /**
                     * Creates a plain object from a Queue message. Also converts values to other types if specified.
                     * @param message Queue
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tasks.v2beta3.Queue, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Queue to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace Queue {

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        RUNNING = 1,
                        PAUSED = 2,
                        DISABLED = 3
                    }

                    /** Type enum. */
                    enum Type {
                        TYPE_UNSPECIFIED = 0,
                        PULL = 1,
                        PUSH = 2
                    }
                }

                /** Properties of a RateLimits. */
                interface IRateLimits {

                    /** RateLimits maxDispatchesPerSecond */
                    maxDispatchesPerSecond?: (number|null);

                    /** RateLimits maxBurstSize */
                    maxBurstSize?: (number|null);

                    /** RateLimits maxConcurrentDispatches */
                    maxConcurrentDispatches?: (number|null);
                }

                /** Represents a RateLimits. */
                class RateLimits implements IRateLimits {

                    /**
                     * Constructs a new RateLimits.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tasks.v2beta3.IRateLimits);

                    /** RateLimits maxDispatchesPerSecond. */
                    public maxDispatchesPerSecond: number;

                    /** RateLimits maxBurstSize. */
                    public maxBurstSize: number;

                    /** RateLimits maxConcurrentDispatches. */
                    public maxConcurrentDispatches: number;

                    /**
                     * Creates a new RateLimits instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RateLimits instance
                     */
                    public static create(properties?: google.cloud.tasks.v2beta3.IRateLimits): google.cloud.tasks.v2beta3.RateLimits;

                    /**
                     * Encodes the specified RateLimits message. Does not implicitly {@link google.cloud.tasks.v2beta3.RateLimits.verify|verify} messages.
                     * @param message RateLimits message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tasks.v2beta3.IRateLimits, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RateLimits message, length delimited. Does not implicitly {@link google.cloud.tasks.v2beta3.RateLimits.verify|verify} messages.
                     * @param message RateLimits message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tasks.v2beta3.IRateLimits, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RateLimits message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RateLimits
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tasks.v2beta3.RateLimits;

                    /**
                     * Decodes a RateLimits message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RateLimits
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tasks.v2beta3.RateLimits;

                    /**
                     * Verifies a RateLimits message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RateLimits message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RateLimits
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tasks.v2beta3.RateLimits;

                    /**
                     * Creates a plain object from a RateLimits message. Also converts values to other types if specified.
                     * @param message RateLimits
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tasks.v2beta3.RateLimits, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RateLimits to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a RetryConfig. */
                interface IRetryConfig {

                    /** RetryConfig maxAttempts */
                    maxAttempts?: (number|null);

                    /** RetryConfig maxRetryDuration */
                    maxRetryDuration?: (google.protobuf.IDuration|null);

                    /** RetryConfig minBackoff */
                    minBackoff?: (google.protobuf.IDuration|null);

                    /** RetryConfig maxBackoff */
                    maxBackoff?: (google.protobuf.IDuration|null);

                    /** RetryConfig maxDoublings */
                    maxDoublings?: (number|null);
                }

                /** Represents a RetryConfig. */
                class RetryConfig implements IRetryConfig {

                    /**
                     * Constructs a new RetryConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tasks.v2beta3.IRetryConfig);

                    /** RetryConfig maxAttempts. */
                    public maxAttempts: number;

                    /** RetryConfig maxRetryDuration. */
                    public maxRetryDuration?: (google.protobuf.IDuration|null);

                    /** RetryConfig minBackoff. */
                    public minBackoff?: (google.protobuf.IDuration|null);

                    /** RetryConfig maxBackoff. */
                    public maxBackoff?: (google.protobuf.IDuration|null);

                    /** RetryConfig maxDoublings. */
                    public maxDoublings: number;

                    /**
                     * Creates a new RetryConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RetryConfig instance
                     */
                    public static create(properties?: google.cloud.tasks.v2beta3.IRetryConfig): google.cloud.tasks.v2beta3.RetryConfig;

                    /**
                     * Encodes the specified RetryConfig message. Does not implicitly {@link google.cloud.tasks.v2beta3.RetryConfig.verify|verify} messages.
                     * @param message RetryConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tasks.v2beta3.IRetryConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RetryConfig message, length delimited. Does not implicitly {@link google.cloud.tasks.v2beta3.RetryConfig.verify|verify} messages.
                     * @param message RetryConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tasks.v2beta3.IRetryConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RetryConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RetryConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tasks.v2beta3.RetryConfig;

                    /**
                     * Decodes a RetryConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RetryConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tasks.v2beta3.RetryConfig;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.tasks.v2beta3.RetryConfig;

                    /**
                     * Creates a plain object from a RetryConfig message. Also converts values to other types if specified.
                     * @param message RetryConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tasks.v2beta3.RetryConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RetryConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a StackdriverLoggingConfig. */
                interface IStackdriverLoggingConfig {

                    /** StackdriverLoggingConfig samplingRatio */
                    samplingRatio?: (number|null);
                }

                /** Represents a StackdriverLoggingConfig. */
                class StackdriverLoggingConfig implements IStackdriverLoggingConfig {

                    /**
                     * Constructs a new StackdriverLoggingConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tasks.v2beta3.IStackdriverLoggingConfig);

                    /** StackdriverLoggingConfig samplingRatio. */
                    public samplingRatio: number;

                    /**
                     * Creates a new StackdriverLoggingConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns StackdriverLoggingConfig instance
                     */
                    public static create(properties?: google.cloud.tasks.v2beta3.IStackdriverLoggingConfig): google.cloud.tasks.v2beta3.StackdriverLoggingConfig;

                    /**
                     * Encodes the specified StackdriverLoggingConfig message. Does not implicitly {@link google.cloud.tasks.v2beta3.StackdriverLoggingConfig.verify|verify} messages.
                     * @param message StackdriverLoggingConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tasks.v2beta3.IStackdriverLoggingConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified StackdriverLoggingConfig message, length delimited. Does not implicitly {@link google.cloud.tasks.v2beta3.StackdriverLoggingConfig.verify|verify} messages.
                     * @param message StackdriverLoggingConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tasks.v2beta3.IStackdriverLoggingConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a StackdriverLoggingConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns StackdriverLoggingConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tasks.v2beta3.StackdriverLoggingConfig;

                    /**
                     * Decodes a StackdriverLoggingConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns StackdriverLoggingConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tasks.v2beta3.StackdriverLoggingConfig;

                    /**
                     * Verifies a StackdriverLoggingConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a StackdriverLoggingConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns StackdriverLoggingConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tasks.v2beta3.StackdriverLoggingConfig;

                    /**
                     * Creates a plain object from a StackdriverLoggingConfig message. Also converts values to other types if specified.
                     * @param message StackdriverLoggingConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tasks.v2beta3.StackdriverLoggingConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this StackdriverLoggingConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a QueueStats. */
                interface IQueueStats {

                    /** QueueStats tasksCount */
                    tasksCount?: (number|Long|string|null);

                    /** QueueStats oldestEstimatedArrivalTime */
                    oldestEstimatedArrivalTime?: (google.protobuf.ITimestamp|null);

                    /** QueueStats executedLastMinuteCount */
                    executedLastMinuteCount?: (number|Long|string|null);

                    /** QueueStats concurrentDispatchesCount */
                    concurrentDispatchesCount?: (number|Long|string|null);

                    /** QueueStats effectiveExecutionRate */
                    effectiveExecutionRate?: (number|null);
                }

                /** Represents a QueueStats. */
                class QueueStats implements IQueueStats {

                    /**
                     * Constructs a new QueueStats.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tasks.v2beta3.IQueueStats);

                    /** QueueStats tasksCount. */
                    public tasksCount: (number|Long|string);

                    /** QueueStats oldestEstimatedArrivalTime. */
                    public oldestEstimatedArrivalTime?: (google.protobuf.ITimestamp|null);

                    /** QueueStats executedLastMinuteCount. */
                    public executedLastMinuteCount: (number|Long|string);

                    /** QueueStats concurrentDispatchesCount. */
                    public concurrentDispatchesCount: (number|Long|string);

                    /** QueueStats effectiveExecutionRate. */
                    public effectiveExecutionRate: number;

                    /**
                     * Creates a new QueueStats instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns QueueStats instance
                     */
                    public static create(properties?: google.cloud.tasks.v2beta3.IQueueStats): google.cloud.tasks.v2beta3.QueueStats;

                    /**
                     * Encodes the specified QueueStats message. Does not implicitly {@link google.cloud.tasks.v2beta3.QueueStats.verify|verify} messages.
                     * @param message QueueStats message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tasks.v2beta3.IQueueStats, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified QueueStats message, length delimited. Does not implicitly {@link google.cloud.tasks.v2beta3.QueueStats.verify|verify} messages.
                     * @param message QueueStats message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tasks.v2beta3.IQueueStats, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a QueueStats message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns QueueStats
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tasks.v2beta3.QueueStats;

                    /**
                     * Decodes a QueueStats message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns QueueStats
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tasks.v2beta3.QueueStats;

                    /**
                     * Verifies a QueueStats message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a QueueStats message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns QueueStats
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tasks.v2beta3.QueueStats;

                    /**
                     * Creates a plain object from a QueueStats message. Also converts values to other types if specified.
                     * @param message QueueStats
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tasks.v2beta3.QueueStats, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this QueueStats to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a PullMessage. */
                interface IPullMessage {

                    /** PullMessage payload */
                    payload?: (Uint8Array|string|null);

                    /** PullMessage tag */
                    tag?: (string|null);
                }

                /** Represents a PullMessage. */
                class PullMessage implements IPullMessage {

                    /**
                     * Constructs a new PullMessage.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tasks.v2beta3.IPullMessage);

                    /** PullMessage payload. */
                    public payload: (Uint8Array|string);

                    /** PullMessage tag. */
                    public tag: string;

                    /**
                     * Creates a new PullMessage instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PullMessage instance
                     */
                    public static create(properties?: google.cloud.tasks.v2beta3.IPullMessage): google.cloud.tasks.v2beta3.PullMessage;

                    /**
                     * Encodes the specified PullMessage message. Does not implicitly {@link google.cloud.tasks.v2beta3.PullMessage.verify|verify} messages.
                     * @param message PullMessage message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tasks.v2beta3.IPullMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PullMessage message, length delimited. Does not implicitly {@link google.cloud.tasks.v2beta3.PullMessage.verify|verify} messages.
                     * @param message PullMessage message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tasks.v2beta3.IPullMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PullMessage message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PullMessage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tasks.v2beta3.PullMessage;

                    /**
                     * Decodes a PullMessage message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PullMessage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tasks.v2beta3.PullMessage;

                    /**
                     * Verifies a PullMessage message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PullMessage message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PullMessage
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tasks.v2beta3.PullMessage;

                    /**
                     * Creates a plain object from a PullMessage message. Also converts values to other types if specified.
                     * @param message PullMessage
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tasks.v2beta3.PullMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PullMessage to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a HttpRequest. */
                interface IHttpRequest {

                    /** HttpRequest url */
                    url?: (string|null);

                    /** HttpRequest httpMethod */
                    httpMethod?: (google.cloud.tasks.v2beta3.HttpMethod|keyof typeof google.cloud.tasks.v2beta3.HttpMethod|null);

                    /** HttpRequest headers */
                    headers?: ({ [k: string]: string }|null);

                    /** HttpRequest body */
                    body?: (Uint8Array|string|null);

                    /** HttpRequest oauthToken */
                    oauthToken?: (google.cloud.tasks.v2beta3.IOAuthToken|null);

                    /** HttpRequest oidcToken */
                    oidcToken?: (google.cloud.tasks.v2beta3.IOidcToken|null);
                }

                /** Represents a HttpRequest. */
                class HttpRequest implements IHttpRequest {

                    /**
                     * Constructs a new HttpRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tasks.v2beta3.IHttpRequest);

                    /** HttpRequest url. */
                    public url: string;

                    /** HttpRequest httpMethod. */
                    public httpMethod: (google.cloud.tasks.v2beta3.HttpMethod|keyof typeof google.cloud.tasks.v2beta3.HttpMethod);

                    /** HttpRequest headers. */
                    public headers: { [k: string]: string };

                    /** HttpRequest body. */
                    public body: (Uint8Array|string);

                    /** HttpRequest oauthToken. */
                    public oauthToken?: (google.cloud.tasks.v2beta3.IOAuthToken|null);

                    /** HttpRequest oidcToken. */
                    public oidcToken?: (google.cloud.tasks.v2beta3.IOidcToken|null);

                    /** HttpRequest authorizationHeader. */
                    public authorizationHeader?: ("oauthToken"|"oidcToken");

                    /**
                     * Creates a new HttpRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns HttpRequest instance
                     */
                    public static create(properties?: google.cloud.tasks.v2beta3.IHttpRequest): google.cloud.tasks.v2beta3.HttpRequest;

                    /**
                     * Encodes the specified HttpRequest message. Does not implicitly {@link google.cloud.tasks.v2beta3.HttpRequest.verify|verify} messages.
                     * @param message HttpRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tasks.v2beta3.IHttpRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified HttpRequest message, length delimited. Does not implicitly {@link google.cloud.tasks.v2beta3.HttpRequest.verify|verify} messages.
                     * @param message HttpRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tasks.v2beta3.IHttpRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a HttpRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns HttpRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tasks.v2beta3.HttpRequest;

                    /**
                     * Decodes a HttpRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns HttpRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tasks.v2beta3.HttpRequest;

                    /**
                     * Verifies a HttpRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a HttpRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns HttpRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tasks.v2beta3.HttpRequest;

                    /**
                     * Creates a plain object from a HttpRequest message. Also converts values to other types if specified.
                     * @param message HttpRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tasks.v2beta3.HttpRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this HttpRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an AppEngineHttpQueue. */
                interface IAppEngineHttpQueue {

                    /** AppEngineHttpQueue appEngineRoutingOverride */
                    appEngineRoutingOverride?: (google.cloud.tasks.v2beta3.IAppEngineRouting|null);
                }

                /** Represents an AppEngineHttpQueue. */
                class AppEngineHttpQueue implements IAppEngineHttpQueue {

                    /**
                     * Constructs a new AppEngineHttpQueue.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tasks.v2beta3.IAppEngineHttpQueue);

                    /** AppEngineHttpQueue appEngineRoutingOverride. */
                    public appEngineRoutingOverride?: (google.cloud.tasks.v2beta3.IAppEngineRouting|null);

                    /**
                     * Creates a new AppEngineHttpQueue instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AppEngineHttpQueue instance
                     */
                    public static create(properties?: google.cloud.tasks.v2beta3.IAppEngineHttpQueue): google.cloud.tasks.v2beta3.AppEngineHttpQueue;

                    /**
                     * Encodes the specified AppEngineHttpQueue message. Does not implicitly {@link google.cloud.tasks.v2beta3.AppEngineHttpQueue.verify|verify} messages.
                     * @param message AppEngineHttpQueue message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tasks.v2beta3.IAppEngineHttpQueue, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AppEngineHttpQueue message, length delimited. Does not implicitly {@link google.cloud.tasks.v2beta3.AppEngineHttpQueue.verify|verify} messages.
                     * @param message AppEngineHttpQueue message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tasks.v2beta3.IAppEngineHttpQueue, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AppEngineHttpQueue message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AppEngineHttpQueue
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tasks.v2beta3.AppEngineHttpQueue;

                    /**
                     * Decodes an AppEngineHttpQueue message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AppEngineHttpQueue
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tasks.v2beta3.AppEngineHttpQueue;

                    /**
                     * Verifies an AppEngineHttpQueue message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AppEngineHttpQueue message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AppEngineHttpQueue
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tasks.v2beta3.AppEngineHttpQueue;

                    /**
                     * Creates a plain object from an AppEngineHttpQueue message. Also converts values to other types if specified.
                     * @param message AppEngineHttpQueue
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tasks.v2beta3.AppEngineHttpQueue, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AppEngineHttpQueue to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an AppEngineHttpRequest. */
                interface IAppEngineHttpRequest {

                    /** AppEngineHttpRequest httpMethod */
                    httpMethod?: (google.cloud.tasks.v2beta3.HttpMethod|keyof typeof google.cloud.tasks.v2beta3.HttpMethod|null);

                    /** AppEngineHttpRequest appEngineRouting */
                    appEngineRouting?: (google.cloud.tasks.v2beta3.IAppEngineRouting|null);

                    /** AppEngineHttpRequest relativeUri */
                    relativeUri?: (string|null);

                    /** AppEngineHttpRequest headers */
                    headers?: ({ [k: string]: string }|null);

                    /** AppEngineHttpRequest body */
                    body?: (Uint8Array|string|null);
                }

                /** Represents an AppEngineHttpRequest. */
                class AppEngineHttpRequest implements IAppEngineHttpRequest {

                    /**
                     * Constructs a new AppEngineHttpRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tasks.v2beta3.IAppEngineHttpRequest);

                    /** AppEngineHttpRequest httpMethod. */
                    public httpMethod: (google.cloud.tasks.v2beta3.HttpMethod|keyof typeof google.cloud.tasks.v2beta3.HttpMethod);

                    /** AppEngineHttpRequest appEngineRouting. */
                    public appEngineRouting?: (google.cloud.tasks.v2beta3.IAppEngineRouting|null);

                    /** AppEngineHttpRequest relativeUri. */
                    public relativeUri: string;

                    /** AppEngineHttpRequest headers. */
                    public headers: { [k: string]: string };

                    /** AppEngineHttpRequest body. */
                    public body: (Uint8Array|string);

                    /**
                     * Creates a new AppEngineHttpRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AppEngineHttpRequest instance
                     */
                    public static create(properties?: google.cloud.tasks.v2beta3.IAppEngineHttpRequest): google.cloud.tasks.v2beta3.AppEngineHttpRequest;

                    /**
                     * Encodes the specified AppEngineHttpRequest message. Does not implicitly {@link google.cloud.tasks.v2beta3.AppEngineHttpRequest.verify|verify} messages.
                     * @param message AppEngineHttpRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tasks.v2beta3.IAppEngineHttpRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AppEngineHttpRequest message, length delimited. Does not implicitly {@link google.cloud.tasks.v2beta3.AppEngineHttpRequest.verify|verify} messages.
                     * @param message AppEngineHttpRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tasks.v2beta3.IAppEngineHttpRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AppEngineHttpRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AppEngineHttpRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tasks.v2beta3.AppEngineHttpRequest;

                    /**
                     * Decodes an AppEngineHttpRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AppEngineHttpRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tasks.v2beta3.AppEngineHttpRequest;

                    /**
                     * Verifies an AppEngineHttpRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AppEngineHttpRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AppEngineHttpRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tasks.v2beta3.AppEngineHttpRequest;

                    /**
                     * Creates a plain object from an AppEngineHttpRequest message. Also converts values to other types if specified.
                     * @param message AppEngineHttpRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tasks.v2beta3.AppEngineHttpRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AppEngineHttpRequest to JSON.
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
                    constructor(properties?: google.cloud.tasks.v2beta3.IAppEngineRouting);

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
                    public static create(properties?: google.cloud.tasks.v2beta3.IAppEngineRouting): google.cloud.tasks.v2beta3.AppEngineRouting;

                    /**
                     * Encodes the specified AppEngineRouting message. Does not implicitly {@link google.cloud.tasks.v2beta3.AppEngineRouting.verify|verify} messages.
                     * @param message AppEngineRouting message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tasks.v2beta3.IAppEngineRouting, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AppEngineRouting message, length delimited. Does not implicitly {@link google.cloud.tasks.v2beta3.AppEngineRouting.verify|verify} messages.
                     * @param message AppEngineRouting message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tasks.v2beta3.IAppEngineRouting, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AppEngineRouting message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AppEngineRouting
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tasks.v2beta3.AppEngineRouting;

                    /**
                     * Decodes an AppEngineRouting message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AppEngineRouting
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tasks.v2beta3.AppEngineRouting;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.tasks.v2beta3.AppEngineRouting;

                    /**
                     * Creates a plain object from an AppEngineRouting message. Also converts values to other types if specified.
                     * @param message AppEngineRouting
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tasks.v2beta3.AppEngineRouting, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
                    constructor(properties?: google.cloud.tasks.v2beta3.IOAuthToken);

                    /** OAuthToken serviceAccountEmail. */
                    public serviceAccountEmail: string;

                    /** OAuthToken scope. */
                    public scope: string;

                    /**
                     * Creates a new OAuthToken instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns OAuthToken instance
                     */
                    public static create(properties?: google.cloud.tasks.v2beta3.IOAuthToken): google.cloud.tasks.v2beta3.OAuthToken;

                    /**
                     * Encodes the specified OAuthToken message. Does not implicitly {@link google.cloud.tasks.v2beta3.OAuthToken.verify|verify} messages.
                     * @param message OAuthToken message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tasks.v2beta3.IOAuthToken, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified OAuthToken message, length delimited. Does not implicitly {@link google.cloud.tasks.v2beta3.OAuthToken.verify|verify} messages.
                     * @param message OAuthToken message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tasks.v2beta3.IOAuthToken, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a OAuthToken message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns OAuthToken
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tasks.v2beta3.OAuthToken;

                    /**
                     * Decodes a OAuthToken message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns OAuthToken
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tasks.v2beta3.OAuthToken;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.tasks.v2beta3.OAuthToken;

                    /**
                     * Creates a plain object from a OAuthToken message. Also converts values to other types if specified.
                     * @param message OAuthToken
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tasks.v2beta3.OAuthToken, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
                    constructor(properties?: google.cloud.tasks.v2beta3.IOidcToken);

                    /** OidcToken serviceAccountEmail. */
                    public serviceAccountEmail: string;

                    /** OidcToken audience. */
                    public audience: string;

                    /**
                     * Creates a new OidcToken instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns OidcToken instance
                     */
                    public static create(properties?: google.cloud.tasks.v2beta3.IOidcToken): google.cloud.tasks.v2beta3.OidcToken;

                    /**
                     * Encodes the specified OidcToken message. Does not implicitly {@link google.cloud.tasks.v2beta3.OidcToken.verify|verify} messages.
                     * @param message OidcToken message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tasks.v2beta3.IOidcToken, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified OidcToken message, length delimited. Does not implicitly {@link google.cloud.tasks.v2beta3.OidcToken.verify|verify} messages.
                     * @param message OidcToken message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tasks.v2beta3.IOidcToken, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an OidcToken message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns OidcToken
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tasks.v2beta3.OidcToken;

                    /**
                     * Decodes an OidcToken message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns OidcToken
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tasks.v2beta3.OidcToken;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.tasks.v2beta3.OidcToken;

                    /**
                     * Creates a plain object from an OidcToken message. Also converts values to other types if specified.
                     * @param message OidcToken
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tasks.v2beta3.OidcToken, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this OidcToken to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a Task. */
                interface ITask {

                    /** Task name */
                    name?: (string|null);

                    /** Task appEngineHttpRequest */
                    appEngineHttpRequest?: (google.cloud.tasks.v2beta3.IAppEngineHttpRequest|null);

                    /** Task httpRequest */
                    httpRequest?: (google.cloud.tasks.v2beta3.IHttpRequest|null);

                    /** Task pullMessage */
                    pullMessage?: (google.cloud.tasks.v2beta3.IPullMessage|null);

                    /** Task scheduleTime */
                    scheduleTime?: (google.protobuf.ITimestamp|null);

                    /** Task createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** Task dispatchDeadline */
                    dispatchDeadline?: (google.protobuf.IDuration|null);

                    /** Task dispatchCount */
                    dispatchCount?: (number|null);

                    /** Task responseCount */
                    responseCount?: (number|null);

                    /** Task firstAttempt */
                    firstAttempt?: (google.cloud.tasks.v2beta3.IAttempt|null);

                    /** Task lastAttempt */
                    lastAttempt?: (google.cloud.tasks.v2beta3.IAttempt|null);

                    /** Task view */
                    view?: (google.cloud.tasks.v2beta3.Task.View|keyof typeof google.cloud.tasks.v2beta3.Task.View|null);
                }

                /** Represents a Task. */
                class Task implements ITask {

                    /**
                     * Constructs a new Task.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tasks.v2beta3.ITask);

                    /** Task name. */
                    public name: string;

                    /** Task appEngineHttpRequest. */
                    public appEngineHttpRequest?: (google.cloud.tasks.v2beta3.IAppEngineHttpRequest|null);

                    /** Task httpRequest. */
                    public httpRequest?: (google.cloud.tasks.v2beta3.IHttpRequest|null);

                    /** Task pullMessage. */
                    public pullMessage?: (google.cloud.tasks.v2beta3.IPullMessage|null);

                    /** Task scheduleTime. */
                    public scheduleTime?: (google.protobuf.ITimestamp|null);

                    /** Task createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** Task dispatchDeadline. */
                    public dispatchDeadline?: (google.protobuf.IDuration|null);

                    /** Task dispatchCount. */
                    public dispatchCount: number;

                    /** Task responseCount. */
                    public responseCount: number;

                    /** Task firstAttempt. */
                    public firstAttempt?: (google.cloud.tasks.v2beta3.IAttempt|null);

                    /** Task lastAttempt. */
                    public lastAttempt?: (google.cloud.tasks.v2beta3.IAttempt|null);

                    /** Task view. */
                    public view: (google.cloud.tasks.v2beta3.Task.View|keyof typeof google.cloud.tasks.v2beta3.Task.View);

                    /** Task payloadType. */
                    public payloadType?: ("appEngineHttpRequest"|"httpRequest"|"pullMessage");

                    /**
                     * Creates a new Task instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Task instance
                     */
                    public static create(properties?: google.cloud.tasks.v2beta3.ITask): google.cloud.tasks.v2beta3.Task;

                    /**
                     * Encodes the specified Task message. Does not implicitly {@link google.cloud.tasks.v2beta3.Task.verify|verify} messages.
                     * @param message Task message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tasks.v2beta3.ITask, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Task message, length delimited. Does not implicitly {@link google.cloud.tasks.v2beta3.Task.verify|verify} messages.
                     * @param message Task message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tasks.v2beta3.ITask, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Task message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Task
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tasks.v2beta3.Task;

                    /**
                     * Decodes a Task message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Task
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tasks.v2beta3.Task;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.tasks.v2beta3.Task;

                    /**
                     * Creates a plain object from a Task message. Also converts values to other types if specified.
                     * @param message Task
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tasks.v2beta3.Task, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Task to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace Task {

                    /** View enum. */
                    enum View {
                        VIEW_UNSPECIFIED = 0,
                        BASIC = 1,
                        FULL = 2
                    }
                }

                /** Properties of an Attempt. */
                interface IAttempt {

                    /** Attempt scheduleTime */
                    scheduleTime?: (google.protobuf.ITimestamp|null);

                    /** Attempt dispatchTime */
                    dispatchTime?: (google.protobuf.ITimestamp|null);

                    /** Attempt responseTime */
                    responseTime?: (google.protobuf.ITimestamp|null);

                    /** Attempt responseStatus */
                    responseStatus?: (google.rpc.IStatus|null);
                }

                /** Represents an Attempt. */
                class Attempt implements IAttempt {

                    /**
                     * Constructs a new Attempt.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tasks.v2beta3.IAttempt);

                    /** Attempt scheduleTime. */
                    public scheduleTime?: (google.protobuf.ITimestamp|null);

                    /** Attempt dispatchTime. */
                    public dispatchTime?: (google.protobuf.ITimestamp|null);

                    /** Attempt responseTime. */
                    public responseTime?: (google.protobuf.ITimestamp|null);

                    /** Attempt responseStatus. */
                    public responseStatus?: (google.rpc.IStatus|null);

                    /**
                     * Creates a new Attempt instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Attempt instance
                     */
                    public static create(properties?: google.cloud.tasks.v2beta3.IAttempt): google.cloud.tasks.v2beta3.Attempt;

                    /**
                     * Encodes the specified Attempt message. Does not implicitly {@link google.cloud.tasks.v2beta3.Attempt.verify|verify} messages.
                     * @param message Attempt message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tasks.v2beta3.IAttempt, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Attempt message, length delimited. Does not implicitly {@link google.cloud.tasks.v2beta3.Attempt.verify|verify} messages.
                     * @param message Attempt message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tasks.v2beta3.IAttempt, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an Attempt message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Attempt
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tasks.v2beta3.Attempt;

                    /**
                     * Decodes an Attempt message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Attempt
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tasks.v2beta3.Attempt;

                    /**
                     * Verifies an Attempt message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an Attempt message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Attempt
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tasks.v2beta3.Attempt;

                    /**
                     * Creates a plain object from an Attempt message. Also converts values to other types if specified.
                     * @param message Attempt
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tasks.v2beta3.Attempt, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Attempt to JSON.
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

    /** Namespace iam. */
    namespace iam {

        /** Namespace v1. */
        namespace v1 {

            /** Represents a IAMPolicy */
            class IAMPolicy extends $protobuf.rpc.Service {

                /**
                 * Constructs a new IAMPolicy service.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 */
                constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                /**
                 * Creates new IAMPolicy service using the specified rpc implementation.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 * @returns RPC service. Useful where requests and/or responses are streamed.
                 */
                public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): IAMPolicy;

                /**
                 * Calls SetIamPolicy.
                 * @param request SetIamPolicyRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Policy
                 */
                public setIamPolicy(request: google.iam.v1.ISetIamPolicyRequest, callback: google.iam.v1.IAMPolicy.SetIamPolicyCallback): void;

                /**
                 * Calls SetIamPolicy.
                 * @param request SetIamPolicyRequest message or plain object
                 * @returns Promise
                 */
                public setIamPolicy(request: google.iam.v1.ISetIamPolicyRequest): Promise<google.iam.v1.Policy>;

                /**
                 * Calls GetIamPolicy.
                 * @param request GetIamPolicyRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Policy
                 */
                public getIamPolicy(request: google.iam.v1.IGetIamPolicyRequest, callback: google.iam.v1.IAMPolicy.GetIamPolicyCallback): void;

                /**
                 * Calls GetIamPolicy.
                 * @param request GetIamPolicyRequest message or plain object
                 * @returns Promise
                 */
                public getIamPolicy(request: google.iam.v1.IGetIamPolicyRequest): Promise<google.iam.v1.Policy>;

                /**
                 * Calls TestIamPermissions.
                 * @param request TestIamPermissionsRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and TestIamPermissionsResponse
                 */
                public testIamPermissions(request: google.iam.v1.ITestIamPermissionsRequest, callback: google.iam.v1.IAMPolicy.TestIamPermissionsCallback): void;

                /**
                 * Calls TestIamPermissions.
                 * @param request TestIamPermissionsRequest message or plain object
                 * @returns Promise
                 */
                public testIamPermissions(request: google.iam.v1.ITestIamPermissionsRequest): Promise<google.iam.v1.TestIamPermissionsResponse>;
            }

            namespace IAMPolicy {

                /**
                 * Callback as used by {@link google.iam.v1.IAMPolicy#setIamPolicy}.
                 * @param error Error, if any
                 * @param [response] Policy
                 */
                type SetIamPolicyCallback = (error: (Error|null), response?: google.iam.v1.Policy) => void;

                /**
                 * Callback as used by {@link google.iam.v1.IAMPolicy#getIamPolicy}.
                 * @param error Error, if any
                 * @param [response] Policy
                 */
                type GetIamPolicyCallback = (error: (Error|null), response?: google.iam.v1.Policy) => void;

                /**
                 * Callback as used by {@link google.iam.v1.IAMPolicy#testIamPermissions}.
                 * @param error Error, if any
                 * @param [response] TestIamPermissionsResponse
                 */
                type TestIamPermissionsCallback = (error: (Error|null), response?: google.iam.v1.TestIamPermissionsResponse) => void;
            }

            /** Properties of a SetIamPolicyRequest. */
            interface ISetIamPolicyRequest {

                /** SetIamPolicyRequest resource */
                resource?: (string|null);

                /** SetIamPolicyRequest policy */
                policy?: (google.iam.v1.IPolicy|null);
            }

            /** Represents a SetIamPolicyRequest. */
            class SetIamPolicyRequest implements ISetIamPolicyRequest {

                /**
                 * Constructs a new SetIamPolicyRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v1.ISetIamPolicyRequest);

                /** SetIamPolicyRequest resource. */
                public resource: string;

                /** SetIamPolicyRequest policy. */
                public policy?: (google.iam.v1.IPolicy|null);

                /**
                 * Creates a new SetIamPolicyRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SetIamPolicyRequest instance
                 */
                public static create(properties?: google.iam.v1.ISetIamPolicyRequest): google.iam.v1.SetIamPolicyRequest;

                /**
                 * Encodes the specified SetIamPolicyRequest message. Does not implicitly {@link google.iam.v1.SetIamPolicyRequest.verify|verify} messages.
                 * @param message SetIamPolicyRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v1.ISetIamPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SetIamPolicyRequest message, length delimited. Does not implicitly {@link google.iam.v1.SetIamPolicyRequest.verify|verify} messages.
                 * @param message SetIamPolicyRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v1.ISetIamPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SetIamPolicyRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SetIamPolicyRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v1.SetIamPolicyRequest;

                /**
                 * Decodes a SetIamPolicyRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SetIamPolicyRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v1.SetIamPolicyRequest;

                /**
                 * Verifies a SetIamPolicyRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SetIamPolicyRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SetIamPolicyRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v1.SetIamPolicyRequest;

                /**
                 * Creates a plain object from a SetIamPolicyRequest message. Also converts values to other types if specified.
                 * @param message SetIamPolicyRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v1.SetIamPolicyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SetIamPolicyRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a GetIamPolicyRequest. */
            interface IGetIamPolicyRequest {

                /** GetIamPolicyRequest resource */
                resource?: (string|null);

                /** GetIamPolicyRequest options */
                options?: (google.iam.v1.IGetPolicyOptions|null);
            }

            /** Represents a GetIamPolicyRequest. */
            class GetIamPolicyRequest implements IGetIamPolicyRequest {

                /**
                 * Constructs a new GetIamPolicyRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v1.IGetIamPolicyRequest);

                /** GetIamPolicyRequest resource. */
                public resource: string;

                /** GetIamPolicyRequest options. */
                public options?: (google.iam.v1.IGetPolicyOptions|null);

                /**
                 * Creates a new GetIamPolicyRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GetIamPolicyRequest instance
                 */
                public static create(properties?: google.iam.v1.IGetIamPolicyRequest): google.iam.v1.GetIamPolicyRequest;

                /**
                 * Encodes the specified GetIamPolicyRequest message. Does not implicitly {@link google.iam.v1.GetIamPolicyRequest.verify|verify} messages.
                 * @param message GetIamPolicyRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v1.IGetIamPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GetIamPolicyRequest message, length delimited. Does not implicitly {@link google.iam.v1.GetIamPolicyRequest.verify|verify} messages.
                 * @param message GetIamPolicyRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v1.IGetIamPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GetIamPolicyRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GetIamPolicyRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v1.GetIamPolicyRequest;

                /**
                 * Decodes a GetIamPolicyRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GetIamPolicyRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v1.GetIamPolicyRequest;

                /**
                 * Verifies a GetIamPolicyRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GetIamPolicyRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GetIamPolicyRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v1.GetIamPolicyRequest;

                /**
                 * Creates a plain object from a GetIamPolicyRequest message. Also converts values to other types if specified.
                 * @param message GetIamPolicyRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v1.GetIamPolicyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GetIamPolicyRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a TestIamPermissionsRequest. */
            interface ITestIamPermissionsRequest {

                /** TestIamPermissionsRequest resource */
                resource?: (string|null);

                /** TestIamPermissionsRequest permissions */
                permissions?: (string[]|null);
            }

            /** Represents a TestIamPermissionsRequest. */
            class TestIamPermissionsRequest implements ITestIamPermissionsRequest {

                /**
                 * Constructs a new TestIamPermissionsRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v1.ITestIamPermissionsRequest);

                /** TestIamPermissionsRequest resource. */
                public resource: string;

                /** TestIamPermissionsRequest permissions. */
                public permissions: string[];

                /**
                 * Creates a new TestIamPermissionsRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns TestIamPermissionsRequest instance
                 */
                public static create(properties?: google.iam.v1.ITestIamPermissionsRequest): google.iam.v1.TestIamPermissionsRequest;

                /**
                 * Encodes the specified TestIamPermissionsRequest message. Does not implicitly {@link google.iam.v1.TestIamPermissionsRequest.verify|verify} messages.
                 * @param message TestIamPermissionsRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v1.ITestIamPermissionsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified TestIamPermissionsRequest message, length delimited. Does not implicitly {@link google.iam.v1.TestIamPermissionsRequest.verify|verify} messages.
                 * @param message TestIamPermissionsRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v1.ITestIamPermissionsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a TestIamPermissionsRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns TestIamPermissionsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v1.TestIamPermissionsRequest;

                /**
                 * Decodes a TestIamPermissionsRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns TestIamPermissionsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v1.TestIamPermissionsRequest;

                /**
                 * Verifies a TestIamPermissionsRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a TestIamPermissionsRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns TestIamPermissionsRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v1.TestIamPermissionsRequest;

                /**
                 * Creates a plain object from a TestIamPermissionsRequest message. Also converts values to other types if specified.
                 * @param message TestIamPermissionsRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v1.TestIamPermissionsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this TestIamPermissionsRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a TestIamPermissionsResponse. */
            interface ITestIamPermissionsResponse {

                /** TestIamPermissionsResponse permissions */
                permissions?: (string[]|null);
            }

            /** Represents a TestIamPermissionsResponse. */
            class TestIamPermissionsResponse implements ITestIamPermissionsResponse {

                /**
                 * Constructs a new TestIamPermissionsResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v1.ITestIamPermissionsResponse);

                /** TestIamPermissionsResponse permissions. */
                public permissions: string[];

                /**
                 * Creates a new TestIamPermissionsResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns TestIamPermissionsResponse instance
                 */
                public static create(properties?: google.iam.v1.ITestIamPermissionsResponse): google.iam.v1.TestIamPermissionsResponse;

                /**
                 * Encodes the specified TestIamPermissionsResponse message. Does not implicitly {@link google.iam.v1.TestIamPermissionsResponse.verify|verify} messages.
                 * @param message TestIamPermissionsResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v1.ITestIamPermissionsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified TestIamPermissionsResponse message, length delimited. Does not implicitly {@link google.iam.v1.TestIamPermissionsResponse.verify|verify} messages.
                 * @param message TestIamPermissionsResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v1.ITestIamPermissionsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a TestIamPermissionsResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns TestIamPermissionsResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v1.TestIamPermissionsResponse;

                /**
                 * Decodes a TestIamPermissionsResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns TestIamPermissionsResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v1.TestIamPermissionsResponse;

                /**
                 * Verifies a TestIamPermissionsResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a TestIamPermissionsResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns TestIamPermissionsResponse
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v1.TestIamPermissionsResponse;

                /**
                 * Creates a plain object from a TestIamPermissionsResponse message. Also converts values to other types if specified.
                 * @param message TestIamPermissionsResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v1.TestIamPermissionsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this TestIamPermissionsResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a GetPolicyOptions. */
            interface IGetPolicyOptions {

                /** GetPolicyOptions requestedPolicyVersion */
                requestedPolicyVersion?: (number|null);
            }

            /** Represents a GetPolicyOptions. */
            class GetPolicyOptions implements IGetPolicyOptions {

                /**
                 * Constructs a new GetPolicyOptions.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v1.IGetPolicyOptions);

                /** GetPolicyOptions requestedPolicyVersion. */
                public requestedPolicyVersion: number;

                /**
                 * Creates a new GetPolicyOptions instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GetPolicyOptions instance
                 */
                public static create(properties?: google.iam.v1.IGetPolicyOptions): google.iam.v1.GetPolicyOptions;

                /**
                 * Encodes the specified GetPolicyOptions message. Does not implicitly {@link google.iam.v1.GetPolicyOptions.verify|verify} messages.
                 * @param message GetPolicyOptions message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v1.IGetPolicyOptions, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GetPolicyOptions message, length delimited. Does not implicitly {@link google.iam.v1.GetPolicyOptions.verify|verify} messages.
                 * @param message GetPolicyOptions message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v1.IGetPolicyOptions, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GetPolicyOptions message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GetPolicyOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v1.GetPolicyOptions;

                /**
                 * Decodes a GetPolicyOptions message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GetPolicyOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v1.GetPolicyOptions;

                /**
                 * Verifies a GetPolicyOptions message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GetPolicyOptions message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GetPolicyOptions
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v1.GetPolicyOptions;

                /**
                 * Creates a plain object from a GetPolicyOptions message. Also converts values to other types if specified.
                 * @param message GetPolicyOptions
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v1.GetPolicyOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GetPolicyOptions to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Policy. */
            interface IPolicy {

                /** Policy version */
                version?: (number|null);

                /** Policy bindings */
                bindings?: (google.iam.v1.IBinding[]|null);

                /** Policy etag */
                etag?: (Uint8Array|string|null);
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

                /** Policy etag. */
                public etag: (Uint8Array|string);

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
        }
    }
}
