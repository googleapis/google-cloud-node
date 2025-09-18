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

        /** Namespace managedkafka. */
        namespace managedkafka {

            /** Namespace v1. */
            namespace v1 {

                /** Represents a ManagedKafka */
                class ManagedKafka extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new ManagedKafka service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new ManagedKafka service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): ManagedKafka;

                    /**
                     * Calls ListClusters.
                     * @param request ListClustersRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListClustersResponse
                     */
                    public listClusters(request: google.cloud.managedkafka.v1.IListClustersRequest, callback: google.cloud.managedkafka.v1.ManagedKafka.ListClustersCallback): void;

                    /**
                     * Calls ListClusters.
                     * @param request ListClustersRequest message or plain object
                     * @returns Promise
                     */
                    public listClusters(request: google.cloud.managedkafka.v1.IListClustersRequest): Promise<google.cloud.managedkafka.v1.ListClustersResponse>;

                    /**
                     * Calls GetCluster.
                     * @param request GetClusterRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Cluster
                     */
                    public getCluster(request: google.cloud.managedkafka.v1.IGetClusterRequest, callback: google.cloud.managedkafka.v1.ManagedKafka.GetClusterCallback): void;

                    /**
                     * Calls GetCluster.
                     * @param request GetClusterRequest message or plain object
                     * @returns Promise
                     */
                    public getCluster(request: google.cloud.managedkafka.v1.IGetClusterRequest): Promise<google.cloud.managedkafka.v1.Cluster>;

                    /**
                     * Calls CreateCluster.
                     * @param request CreateClusterRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createCluster(request: google.cloud.managedkafka.v1.ICreateClusterRequest, callback: google.cloud.managedkafka.v1.ManagedKafka.CreateClusterCallback): void;

                    /**
                     * Calls CreateCluster.
                     * @param request CreateClusterRequest message or plain object
                     * @returns Promise
                     */
                    public createCluster(request: google.cloud.managedkafka.v1.ICreateClusterRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls UpdateCluster.
                     * @param request UpdateClusterRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public updateCluster(request: google.cloud.managedkafka.v1.IUpdateClusterRequest, callback: google.cloud.managedkafka.v1.ManagedKafka.UpdateClusterCallback): void;

                    /**
                     * Calls UpdateCluster.
                     * @param request UpdateClusterRequest message or plain object
                     * @returns Promise
                     */
                    public updateCluster(request: google.cloud.managedkafka.v1.IUpdateClusterRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls DeleteCluster.
                     * @param request DeleteClusterRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deleteCluster(request: google.cloud.managedkafka.v1.IDeleteClusterRequest, callback: google.cloud.managedkafka.v1.ManagedKafka.DeleteClusterCallback): void;

                    /**
                     * Calls DeleteCluster.
                     * @param request DeleteClusterRequest message or plain object
                     * @returns Promise
                     */
                    public deleteCluster(request: google.cloud.managedkafka.v1.IDeleteClusterRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ListTopics.
                     * @param request ListTopicsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListTopicsResponse
                     */
                    public listTopics(request: google.cloud.managedkafka.v1.IListTopicsRequest, callback: google.cloud.managedkafka.v1.ManagedKafka.ListTopicsCallback): void;

                    /**
                     * Calls ListTopics.
                     * @param request ListTopicsRequest message or plain object
                     * @returns Promise
                     */
                    public listTopics(request: google.cloud.managedkafka.v1.IListTopicsRequest): Promise<google.cloud.managedkafka.v1.ListTopicsResponse>;

                    /**
                     * Calls GetTopic.
                     * @param request GetTopicRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Topic
                     */
                    public getTopic(request: google.cloud.managedkafka.v1.IGetTopicRequest, callback: google.cloud.managedkafka.v1.ManagedKafka.GetTopicCallback): void;

                    /**
                     * Calls GetTopic.
                     * @param request GetTopicRequest message or plain object
                     * @returns Promise
                     */
                    public getTopic(request: google.cloud.managedkafka.v1.IGetTopicRequest): Promise<google.cloud.managedkafka.v1.Topic>;

                    /**
                     * Calls CreateTopic.
                     * @param request CreateTopicRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Topic
                     */
                    public createTopic(request: google.cloud.managedkafka.v1.ICreateTopicRequest, callback: google.cloud.managedkafka.v1.ManagedKafka.CreateTopicCallback): void;

                    /**
                     * Calls CreateTopic.
                     * @param request CreateTopicRequest message or plain object
                     * @returns Promise
                     */
                    public createTopic(request: google.cloud.managedkafka.v1.ICreateTopicRequest): Promise<google.cloud.managedkafka.v1.Topic>;

                    /**
                     * Calls UpdateTopic.
                     * @param request UpdateTopicRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Topic
                     */
                    public updateTopic(request: google.cloud.managedkafka.v1.IUpdateTopicRequest, callback: google.cloud.managedkafka.v1.ManagedKafka.UpdateTopicCallback): void;

                    /**
                     * Calls UpdateTopic.
                     * @param request UpdateTopicRequest message or plain object
                     * @returns Promise
                     */
                    public updateTopic(request: google.cloud.managedkafka.v1.IUpdateTopicRequest): Promise<google.cloud.managedkafka.v1.Topic>;

                    /**
                     * Calls DeleteTopic.
                     * @param request DeleteTopicRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Empty
                     */
                    public deleteTopic(request: google.cloud.managedkafka.v1.IDeleteTopicRequest, callback: google.cloud.managedkafka.v1.ManagedKafka.DeleteTopicCallback): void;

                    /**
                     * Calls DeleteTopic.
                     * @param request DeleteTopicRequest message or plain object
                     * @returns Promise
                     */
                    public deleteTopic(request: google.cloud.managedkafka.v1.IDeleteTopicRequest): Promise<google.protobuf.Empty>;

                    /**
                     * Calls ListConsumerGroups.
                     * @param request ListConsumerGroupsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListConsumerGroupsResponse
                     */
                    public listConsumerGroups(request: google.cloud.managedkafka.v1.IListConsumerGroupsRequest, callback: google.cloud.managedkafka.v1.ManagedKafka.ListConsumerGroupsCallback): void;

                    /**
                     * Calls ListConsumerGroups.
                     * @param request ListConsumerGroupsRequest message or plain object
                     * @returns Promise
                     */
                    public listConsumerGroups(request: google.cloud.managedkafka.v1.IListConsumerGroupsRequest): Promise<google.cloud.managedkafka.v1.ListConsumerGroupsResponse>;

                    /**
                     * Calls GetConsumerGroup.
                     * @param request GetConsumerGroupRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ConsumerGroup
                     */
                    public getConsumerGroup(request: google.cloud.managedkafka.v1.IGetConsumerGroupRequest, callback: google.cloud.managedkafka.v1.ManagedKafka.GetConsumerGroupCallback): void;

                    /**
                     * Calls GetConsumerGroup.
                     * @param request GetConsumerGroupRequest message or plain object
                     * @returns Promise
                     */
                    public getConsumerGroup(request: google.cloud.managedkafka.v1.IGetConsumerGroupRequest): Promise<google.cloud.managedkafka.v1.ConsumerGroup>;

                    /**
                     * Calls UpdateConsumerGroup.
                     * @param request UpdateConsumerGroupRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ConsumerGroup
                     */
                    public updateConsumerGroup(request: google.cloud.managedkafka.v1.IUpdateConsumerGroupRequest, callback: google.cloud.managedkafka.v1.ManagedKafka.UpdateConsumerGroupCallback): void;

                    /**
                     * Calls UpdateConsumerGroup.
                     * @param request UpdateConsumerGroupRequest message or plain object
                     * @returns Promise
                     */
                    public updateConsumerGroup(request: google.cloud.managedkafka.v1.IUpdateConsumerGroupRequest): Promise<google.cloud.managedkafka.v1.ConsumerGroup>;

                    /**
                     * Calls DeleteConsumerGroup.
                     * @param request DeleteConsumerGroupRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Empty
                     */
                    public deleteConsumerGroup(request: google.cloud.managedkafka.v1.IDeleteConsumerGroupRequest, callback: google.cloud.managedkafka.v1.ManagedKafka.DeleteConsumerGroupCallback): void;

                    /**
                     * Calls DeleteConsumerGroup.
                     * @param request DeleteConsumerGroupRequest message or plain object
                     * @returns Promise
                     */
                    public deleteConsumerGroup(request: google.cloud.managedkafka.v1.IDeleteConsumerGroupRequest): Promise<google.protobuf.Empty>;

                    /**
                     * Calls ListAcls.
                     * @param request ListAclsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListAclsResponse
                     */
                    public listAcls(request: google.cloud.managedkafka.v1.IListAclsRequest, callback: google.cloud.managedkafka.v1.ManagedKafka.ListAclsCallback): void;

                    /**
                     * Calls ListAcls.
                     * @param request ListAclsRequest message or plain object
                     * @returns Promise
                     */
                    public listAcls(request: google.cloud.managedkafka.v1.IListAclsRequest): Promise<google.cloud.managedkafka.v1.ListAclsResponse>;

                    /**
                     * Calls GetAcl.
                     * @param request GetAclRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Acl
                     */
                    public getAcl(request: google.cloud.managedkafka.v1.IGetAclRequest, callback: google.cloud.managedkafka.v1.ManagedKafka.GetAclCallback): void;

                    /**
                     * Calls GetAcl.
                     * @param request GetAclRequest message or plain object
                     * @returns Promise
                     */
                    public getAcl(request: google.cloud.managedkafka.v1.IGetAclRequest): Promise<google.cloud.managedkafka.v1.Acl>;

                    /**
                     * Calls CreateAcl.
                     * @param request CreateAclRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Acl
                     */
                    public createAcl(request: google.cloud.managedkafka.v1.ICreateAclRequest, callback: google.cloud.managedkafka.v1.ManagedKafka.CreateAclCallback): void;

                    /**
                     * Calls CreateAcl.
                     * @param request CreateAclRequest message or plain object
                     * @returns Promise
                     */
                    public createAcl(request: google.cloud.managedkafka.v1.ICreateAclRequest): Promise<google.cloud.managedkafka.v1.Acl>;

                    /**
                     * Calls UpdateAcl.
                     * @param request UpdateAclRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Acl
                     */
                    public updateAcl(request: google.cloud.managedkafka.v1.IUpdateAclRequest, callback: google.cloud.managedkafka.v1.ManagedKafka.UpdateAclCallback): void;

                    /**
                     * Calls UpdateAcl.
                     * @param request UpdateAclRequest message or plain object
                     * @returns Promise
                     */
                    public updateAcl(request: google.cloud.managedkafka.v1.IUpdateAclRequest): Promise<google.cloud.managedkafka.v1.Acl>;

                    /**
                     * Calls DeleteAcl.
                     * @param request DeleteAclRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Empty
                     */
                    public deleteAcl(request: google.cloud.managedkafka.v1.IDeleteAclRequest, callback: google.cloud.managedkafka.v1.ManagedKafka.DeleteAclCallback): void;

                    /**
                     * Calls DeleteAcl.
                     * @param request DeleteAclRequest message or plain object
                     * @returns Promise
                     */
                    public deleteAcl(request: google.cloud.managedkafka.v1.IDeleteAclRequest): Promise<google.protobuf.Empty>;

                    /**
                     * Calls AddAclEntry.
                     * @param request AddAclEntryRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and AddAclEntryResponse
                     */
                    public addAclEntry(request: google.cloud.managedkafka.v1.IAddAclEntryRequest, callback: google.cloud.managedkafka.v1.ManagedKafka.AddAclEntryCallback): void;

                    /**
                     * Calls AddAclEntry.
                     * @param request AddAclEntryRequest message or plain object
                     * @returns Promise
                     */
                    public addAclEntry(request: google.cloud.managedkafka.v1.IAddAclEntryRequest): Promise<google.cloud.managedkafka.v1.AddAclEntryResponse>;

                    /**
                     * Calls RemoveAclEntry.
                     * @param request RemoveAclEntryRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and RemoveAclEntryResponse
                     */
                    public removeAclEntry(request: google.cloud.managedkafka.v1.IRemoveAclEntryRequest, callback: google.cloud.managedkafka.v1.ManagedKafka.RemoveAclEntryCallback): void;

                    /**
                     * Calls RemoveAclEntry.
                     * @param request RemoveAclEntryRequest message or plain object
                     * @returns Promise
                     */
                    public removeAclEntry(request: google.cloud.managedkafka.v1.IRemoveAclEntryRequest): Promise<google.cloud.managedkafka.v1.RemoveAclEntryResponse>;
                }

                namespace ManagedKafka {

                    /**
                     * Callback as used by {@link google.cloud.managedkafka.v1.ManagedKafka|listClusters}.
                     * @param error Error, if any
                     * @param [response] ListClustersResponse
                     */
                    type ListClustersCallback = (error: (Error|null), response?: google.cloud.managedkafka.v1.ListClustersResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.managedkafka.v1.ManagedKafka|getCluster}.
                     * @param error Error, if any
                     * @param [response] Cluster
                     */
                    type GetClusterCallback = (error: (Error|null), response?: google.cloud.managedkafka.v1.Cluster) => void;

                    /**
                     * Callback as used by {@link google.cloud.managedkafka.v1.ManagedKafka|createCluster}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateClusterCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.managedkafka.v1.ManagedKafka|updateCluster}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type UpdateClusterCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.managedkafka.v1.ManagedKafka|deleteCluster}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeleteClusterCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.managedkafka.v1.ManagedKafka|listTopics}.
                     * @param error Error, if any
                     * @param [response] ListTopicsResponse
                     */
                    type ListTopicsCallback = (error: (Error|null), response?: google.cloud.managedkafka.v1.ListTopicsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.managedkafka.v1.ManagedKafka|getTopic}.
                     * @param error Error, if any
                     * @param [response] Topic
                     */
                    type GetTopicCallback = (error: (Error|null), response?: google.cloud.managedkafka.v1.Topic) => void;

                    /**
                     * Callback as used by {@link google.cloud.managedkafka.v1.ManagedKafka|createTopic}.
                     * @param error Error, if any
                     * @param [response] Topic
                     */
                    type CreateTopicCallback = (error: (Error|null), response?: google.cloud.managedkafka.v1.Topic) => void;

                    /**
                     * Callback as used by {@link google.cloud.managedkafka.v1.ManagedKafka|updateTopic}.
                     * @param error Error, if any
                     * @param [response] Topic
                     */
                    type UpdateTopicCallback = (error: (Error|null), response?: google.cloud.managedkafka.v1.Topic) => void;

                    /**
                     * Callback as used by {@link google.cloud.managedkafka.v1.ManagedKafka|deleteTopic}.
                     * @param error Error, if any
                     * @param [response] Empty
                     */
                    type DeleteTopicCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                    /**
                     * Callback as used by {@link google.cloud.managedkafka.v1.ManagedKafka|listConsumerGroups}.
                     * @param error Error, if any
                     * @param [response] ListConsumerGroupsResponse
                     */
                    type ListConsumerGroupsCallback = (error: (Error|null), response?: google.cloud.managedkafka.v1.ListConsumerGroupsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.managedkafka.v1.ManagedKafka|getConsumerGroup}.
                     * @param error Error, if any
                     * @param [response] ConsumerGroup
                     */
                    type GetConsumerGroupCallback = (error: (Error|null), response?: google.cloud.managedkafka.v1.ConsumerGroup) => void;

                    /**
                     * Callback as used by {@link google.cloud.managedkafka.v1.ManagedKafka|updateConsumerGroup}.
                     * @param error Error, if any
                     * @param [response] ConsumerGroup
                     */
                    type UpdateConsumerGroupCallback = (error: (Error|null), response?: google.cloud.managedkafka.v1.ConsumerGroup) => void;

                    /**
                     * Callback as used by {@link google.cloud.managedkafka.v1.ManagedKafka|deleteConsumerGroup}.
                     * @param error Error, if any
                     * @param [response] Empty
                     */
                    type DeleteConsumerGroupCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                    /**
                     * Callback as used by {@link google.cloud.managedkafka.v1.ManagedKafka|listAcls}.
                     * @param error Error, if any
                     * @param [response] ListAclsResponse
                     */
                    type ListAclsCallback = (error: (Error|null), response?: google.cloud.managedkafka.v1.ListAclsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.managedkafka.v1.ManagedKafka|getAcl}.
                     * @param error Error, if any
                     * @param [response] Acl
                     */
                    type GetAclCallback = (error: (Error|null), response?: google.cloud.managedkafka.v1.Acl) => void;

                    /**
                     * Callback as used by {@link google.cloud.managedkafka.v1.ManagedKafka|createAcl}.
                     * @param error Error, if any
                     * @param [response] Acl
                     */
                    type CreateAclCallback = (error: (Error|null), response?: google.cloud.managedkafka.v1.Acl) => void;

                    /**
                     * Callback as used by {@link google.cloud.managedkafka.v1.ManagedKafka|updateAcl}.
                     * @param error Error, if any
                     * @param [response] Acl
                     */
                    type UpdateAclCallback = (error: (Error|null), response?: google.cloud.managedkafka.v1.Acl) => void;

                    /**
                     * Callback as used by {@link google.cloud.managedkafka.v1.ManagedKafka|deleteAcl}.
                     * @param error Error, if any
                     * @param [response] Empty
                     */
                    type DeleteAclCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                    /**
                     * Callback as used by {@link google.cloud.managedkafka.v1.ManagedKafka|addAclEntry}.
                     * @param error Error, if any
                     * @param [response] AddAclEntryResponse
                     */
                    type AddAclEntryCallback = (error: (Error|null), response?: google.cloud.managedkafka.v1.AddAclEntryResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.managedkafka.v1.ManagedKafka|removeAclEntry}.
                     * @param error Error, if any
                     * @param [response] RemoveAclEntryResponse
                     */
                    type RemoveAclEntryCallback = (error: (Error|null), response?: google.cloud.managedkafka.v1.RemoveAclEntryResponse) => void;
                }

                /** Properties of a ListClustersRequest. */
                interface IListClustersRequest {

                    /** ListClustersRequest parent */
                    parent?: (string|null);

                    /** ListClustersRequest pageSize */
                    pageSize?: (number|null);

                    /** ListClustersRequest pageToken */
                    pageToken?: (string|null);

                    /** ListClustersRequest filter */
                    filter?: (string|null);

                    /** ListClustersRequest orderBy */
                    orderBy?: (string|null);
                }

                /** Represents a ListClustersRequest. */
                class ListClustersRequest implements IListClustersRequest {

                    /**
                     * Constructs a new ListClustersRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.managedkafka.v1.IListClustersRequest);

                    /** ListClustersRequest parent. */
                    public parent: string;

                    /** ListClustersRequest pageSize. */
                    public pageSize: number;

                    /** ListClustersRequest pageToken. */
                    public pageToken: string;

                    /** ListClustersRequest filter. */
                    public filter: string;

                    /** ListClustersRequest orderBy. */
                    public orderBy: string;

                    /**
                     * Creates a new ListClustersRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListClustersRequest instance
                     */
                    public static create(properties?: google.cloud.managedkafka.v1.IListClustersRequest): google.cloud.managedkafka.v1.ListClustersRequest;

                    /**
                     * Encodes the specified ListClustersRequest message. Does not implicitly {@link google.cloud.managedkafka.v1.ListClustersRequest.verify|verify} messages.
                     * @param message ListClustersRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.managedkafka.v1.IListClustersRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListClustersRequest message, length delimited. Does not implicitly {@link google.cloud.managedkafka.v1.ListClustersRequest.verify|verify} messages.
                     * @param message ListClustersRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.managedkafka.v1.IListClustersRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListClustersRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListClustersRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.managedkafka.v1.ListClustersRequest;

                    /**
                     * Decodes a ListClustersRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListClustersRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.managedkafka.v1.ListClustersRequest;

                    /**
                     * Verifies a ListClustersRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListClustersRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListClustersRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.managedkafka.v1.ListClustersRequest;

                    /**
                     * Creates a plain object from a ListClustersRequest message. Also converts values to other types if specified.
                     * @param message ListClustersRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.managedkafka.v1.ListClustersRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListClustersRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListClustersRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListClustersResponse. */
                interface IListClustersResponse {

                    /** ListClustersResponse clusters */
                    clusters?: (google.cloud.managedkafka.v1.ICluster[]|null);

                    /** ListClustersResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListClustersResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a ListClustersResponse. */
                class ListClustersResponse implements IListClustersResponse {

                    /**
                     * Constructs a new ListClustersResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.managedkafka.v1.IListClustersResponse);

                    /** ListClustersResponse clusters. */
                    public clusters: google.cloud.managedkafka.v1.ICluster[];

                    /** ListClustersResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListClustersResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListClustersResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListClustersResponse instance
                     */
                    public static create(properties?: google.cloud.managedkafka.v1.IListClustersResponse): google.cloud.managedkafka.v1.ListClustersResponse;

                    /**
                     * Encodes the specified ListClustersResponse message. Does not implicitly {@link google.cloud.managedkafka.v1.ListClustersResponse.verify|verify} messages.
                     * @param message ListClustersResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.managedkafka.v1.IListClustersResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListClustersResponse message, length delimited. Does not implicitly {@link google.cloud.managedkafka.v1.ListClustersResponse.verify|verify} messages.
                     * @param message ListClustersResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.managedkafka.v1.IListClustersResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListClustersResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListClustersResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.managedkafka.v1.ListClustersResponse;

                    /**
                     * Decodes a ListClustersResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListClustersResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.managedkafka.v1.ListClustersResponse;

                    /**
                     * Verifies a ListClustersResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListClustersResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListClustersResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.managedkafka.v1.ListClustersResponse;

                    /**
                     * Creates a plain object from a ListClustersResponse message. Also converts values to other types if specified.
                     * @param message ListClustersResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.managedkafka.v1.ListClustersResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListClustersResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListClustersResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetClusterRequest. */
                interface IGetClusterRequest {

                    /** GetClusterRequest name */
                    name?: (string|null);
                }

                /** Represents a GetClusterRequest. */
                class GetClusterRequest implements IGetClusterRequest {

                    /**
                     * Constructs a new GetClusterRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.managedkafka.v1.IGetClusterRequest);

                    /** GetClusterRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetClusterRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetClusterRequest instance
                     */
                    public static create(properties?: google.cloud.managedkafka.v1.IGetClusterRequest): google.cloud.managedkafka.v1.GetClusterRequest;

                    /**
                     * Encodes the specified GetClusterRequest message. Does not implicitly {@link google.cloud.managedkafka.v1.GetClusterRequest.verify|verify} messages.
                     * @param message GetClusterRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.managedkafka.v1.IGetClusterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetClusterRequest message, length delimited. Does not implicitly {@link google.cloud.managedkafka.v1.GetClusterRequest.verify|verify} messages.
                     * @param message GetClusterRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.managedkafka.v1.IGetClusterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetClusterRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetClusterRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.managedkafka.v1.GetClusterRequest;

                    /**
                     * Decodes a GetClusterRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetClusterRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.managedkafka.v1.GetClusterRequest;

                    /**
                     * Verifies a GetClusterRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetClusterRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetClusterRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.managedkafka.v1.GetClusterRequest;

                    /**
                     * Creates a plain object from a GetClusterRequest message. Also converts values to other types if specified.
                     * @param message GetClusterRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.managedkafka.v1.GetClusterRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetClusterRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetClusterRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CreateClusterRequest. */
                interface ICreateClusterRequest {

                    /** CreateClusterRequest parent */
                    parent?: (string|null);

                    /** CreateClusterRequest clusterId */
                    clusterId?: (string|null);

                    /** CreateClusterRequest cluster */
                    cluster?: (google.cloud.managedkafka.v1.ICluster|null);

                    /** CreateClusterRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents a CreateClusterRequest. */
                class CreateClusterRequest implements ICreateClusterRequest {

                    /**
                     * Constructs a new CreateClusterRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.managedkafka.v1.ICreateClusterRequest);

                    /** CreateClusterRequest parent. */
                    public parent: string;

                    /** CreateClusterRequest clusterId. */
                    public clusterId: string;

                    /** CreateClusterRequest cluster. */
                    public cluster?: (google.cloud.managedkafka.v1.ICluster|null);

                    /** CreateClusterRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new CreateClusterRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateClusterRequest instance
                     */
                    public static create(properties?: google.cloud.managedkafka.v1.ICreateClusterRequest): google.cloud.managedkafka.v1.CreateClusterRequest;

                    /**
                     * Encodes the specified CreateClusterRequest message. Does not implicitly {@link google.cloud.managedkafka.v1.CreateClusterRequest.verify|verify} messages.
                     * @param message CreateClusterRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.managedkafka.v1.ICreateClusterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateClusterRequest message, length delimited. Does not implicitly {@link google.cloud.managedkafka.v1.CreateClusterRequest.verify|verify} messages.
                     * @param message CreateClusterRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.managedkafka.v1.ICreateClusterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateClusterRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateClusterRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.managedkafka.v1.CreateClusterRequest;

                    /**
                     * Decodes a CreateClusterRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateClusterRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.managedkafka.v1.CreateClusterRequest;

                    /**
                     * Verifies a CreateClusterRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateClusterRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateClusterRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.managedkafka.v1.CreateClusterRequest;

                    /**
                     * Creates a plain object from a CreateClusterRequest message. Also converts values to other types if specified.
                     * @param message CreateClusterRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.managedkafka.v1.CreateClusterRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateClusterRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateClusterRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpdateClusterRequest. */
                interface IUpdateClusterRequest {

                    /** UpdateClusterRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateClusterRequest cluster */
                    cluster?: (google.cloud.managedkafka.v1.ICluster|null);

                    /** UpdateClusterRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents an UpdateClusterRequest. */
                class UpdateClusterRequest implements IUpdateClusterRequest {

                    /**
                     * Constructs a new UpdateClusterRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.managedkafka.v1.IUpdateClusterRequest);

                    /** UpdateClusterRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateClusterRequest cluster. */
                    public cluster?: (google.cloud.managedkafka.v1.ICluster|null);

                    /** UpdateClusterRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new UpdateClusterRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateClusterRequest instance
                     */
                    public static create(properties?: google.cloud.managedkafka.v1.IUpdateClusterRequest): google.cloud.managedkafka.v1.UpdateClusterRequest;

                    /**
                     * Encodes the specified UpdateClusterRequest message. Does not implicitly {@link google.cloud.managedkafka.v1.UpdateClusterRequest.verify|verify} messages.
                     * @param message UpdateClusterRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.managedkafka.v1.IUpdateClusterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateClusterRequest message, length delimited. Does not implicitly {@link google.cloud.managedkafka.v1.UpdateClusterRequest.verify|verify} messages.
                     * @param message UpdateClusterRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.managedkafka.v1.IUpdateClusterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateClusterRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateClusterRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.managedkafka.v1.UpdateClusterRequest;

                    /**
                     * Decodes an UpdateClusterRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateClusterRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.managedkafka.v1.UpdateClusterRequest;

                    /**
                     * Verifies an UpdateClusterRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateClusterRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateClusterRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.managedkafka.v1.UpdateClusterRequest;

                    /**
                     * Creates a plain object from an UpdateClusterRequest message. Also converts values to other types if specified.
                     * @param message UpdateClusterRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.managedkafka.v1.UpdateClusterRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateClusterRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdateClusterRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeleteClusterRequest. */
                interface IDeleteClusterRequest {

                    /** DeleteClusterRequest name */
                    name?: (string|null);

                    /** DeleteClusterRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents a DeleteClusterRequest. */
                class DeleteClusterRequest implements IDeleteClusterRequest {

                    /**
                     * Constructs a new DeleteClusterRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.managedkafka.v1.IDeleteClusterRequest);

                    /** DeleteClusterRequest name. */
                    public name: string;

                    /** DeleteClusterRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new DeleteClusterRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteClusterRequest instance
                     */
                    public static create(properties?: google.cloud.managedkafka.v1.IDeleteClusterRequest): google.cloud.managedkafka.v1.DeleteClusterRequest;

                    /**
                     * Encodes the specified DeleteClusterRequest message. Does not implicitly {@link google.cloud.managedkafka.v1.DeleteClusterRequest.verify|verify} messages.
                     * @param message DeleteClusterRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.managedkafka.v1.IDeleteClusterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteClusterRequest message, length delimited. Does not implicitly {@link google.cloud.managedkafka.v1.DeleteClusterRequest.verify|verify} messages.
                     * @param message DeleteClusterRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.managedkafka.v1.IDeleteClusterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteClusterRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteClusterRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.managedkafka.v1.DeleteClusterRequest;

                    /**
                     * Decodes a DeleteClusterRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteClusterRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.managedkafka.v1.DeleteClusterRequest;

                    /**
                     * Verifies a DeleteClusterRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteClusterRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteClusterRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.managedkafka.v1.DeleteClusterRequest;

                    /**
                     * Creates a plain object from a DeleteClusterRequest message. Also converts values to other types if specified.
                     * @param message DeleteClusterRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.managedkafka.v1.DeleteClusterRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteClusterRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeleteClusterRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListTopicsRequest. */
                interface IListTopicsRequest {

                    /** ListTopicsRequest parent */
                    parent?: (string|null);

                    /** ListTopicsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListTopicsRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListTopicsRequest. */
                class ListTopicsRequest implements IListTopicsRequest {

                    /**
                     * Constructs a new ListTopicsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.managedkafka.v1.IListTopicsRequest);

                    /** ListTopicsRequest parent. */
                    public parent: string;

                    /** ListTopicsRequest pageSize. */
                    public pageSize: number;

                    /** ListTopicsRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListTopicsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListTopicsRequest instance
                     */
                    public static create(properties?: google.cloud.managedkafka.v1.IListTopicsRequest): google.cloud.managedkafka.v1.ListTopicsRequest;

                    /**
                     * Encodes the specified ListTopicsRequest message. Does not implicitly {@link google.cloud.managedkafka.v1.ListTopicsRequest.verify|verify} messages.
                     * @param message ListTopicsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.managedkafka.v1.IListTopicsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListTopicsRequest message, length delimited. Does not implicitly {@link google.cloud.managedkafka.v1.ListTopicsRequest.verify|verify} messages.
                     * @param message ListTopicsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.managedkafka.v1.IListTopicsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListTopicsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListTopicsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.managedkafka.v1.ListTopicsRequest;

                    /**
                     * Decodes a ListTopicsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListTopicsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.managedkafka.v1.ListTopicsRequest;

                    /**
                     * Verifies a ListTopicsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListTopicsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListTopicsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.managedkafka.v1.ListTopicsRequest;

                    /**
                     * Creates a plain object from a ListTopicsRequest message. Also converts values to other types if specified.
                     * @param message ListTopicsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.managedkafka.v1.ListTopicsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListTopicsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListTopicsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListTopicsResponse. */
                interface IListTopicsResponse {

                    /** ListTopicsResponse topics */
                    topics?: (google.cloud.managedkafka.v1.ITopic[]|null);

                    /** ListTopicsResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListTopicsResponse. */
                class ListTopicsResponse implements IListTopicsResponse {

                    /**
                     * Constructs a new ListTopicsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.managedkafka.v1.IListTopicsResponse);

                    /** ListTopicsResponse topics. */
                    public topics: google.cloud.managedkafka.v1.ITopic[];

                    /** ListTopicsResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListTopicsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListTopicsResponse instance
                     */
                    public static create(properties?: google.cloud.managedkafka.v1.IListTopicsResponse): google.cloud.managedkafka.v1.ListTopicsResponse;

                    /**
                     * Encodes the specified ListTopicsResponse message. Does not implicitly {@link google.cloud.managedkafka.v1.ListTopicsResponse.verify|verify} messages.
                     * @param message ListTopicsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.managedkafka.v1.IListTopicsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListTopicsResponse message, length delimited. Does not implicitly {@link google.cloud.managedkafka.v1.ListTopicsResponse.verify|verify} messages.
                     * @param message ListTopicsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.managedkafka.v1.IListTopicsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListTopicsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListTopicsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.managedkafka.v1.ListTopicsResponse;

                    /**
                     * Decodes a ListTopicsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListTopicsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.managedkafka.v1.ListTopicsResponse;

                    /**
                     * Verifies a ListTopicsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListTopicsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListTopicsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.managedkafka.v1.ListTopicsResponse;

                    /**
                     * Creates a plain object from a ListTopicsResponse message. Also converts values to other types if specified.
                     * @param message ListTopicsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.managedkafka.v1.ListTopicsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListTopicsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListTopicsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetTopicRequest. */
                interface IGetTopicRequest {

                    /** GetTopicRequest name */
                    name?: (string|null);
                }

                /** Represents a GetTopicRequest. */
                class GetTopicRequest implements IGetTopicRequest {

                    /**
                     * Constructs a new GetTopicRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.managedkafka.v1.IGetTopicRequest);

                    /** GetTopicRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetTopicRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetTopicRequest instance
                     */
                    public static create(properties?: google.cloud.managedkafka.v1.IGetTopicRequest): google.cloud.managedkafka.v1.GetTopicRequest;

                    /**
                     * Encodes the specified GetTopicRequest message. Does not implicitly {@link google.cloud.managedkafka.v1.GetTopicRequest.verify|verify} messages.
                     * @param message GetTopicRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.managedkafka.v1.IGetTopicRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetTopicRequest message, length delimited. Does not implicitly {@link google.cloud.managedkafka.v1.GetTopicRequest.verify|verify} messages.
                     * @param message GetTopicRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.managedkafka.v1.IGetTopicRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetTopicRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetTopicRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.managedkafka.v1.GetTopicRequest;

                    /**
                     * Decodes a GetTopicRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetTopicRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.managedkafka.v1.GetTopicRequest;

                    /**
                     * Verifies a GetTopicRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetTopicRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetTopicRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.managedkafka.v1.GetTopicRequest;

                    /**
                     * Creates a plain object from a GetTopicRequest message. Also converts values to other types if specified.
                     * @param message GetTopicRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.managedkafka.v1.GetTopicRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetTopicRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetTopicRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CreateTopicRequest. */
                interface ICreateTopicRequest {

                    /** CreateTopicRequest parent */
                    parent?: (string|null);

                    /** CreateTopicRequest topicId */
                    topicId?: (string|null);

                    /** CreateTopicRequest topic */
                    topic?: (google.cloud.managedkafka.v1.ITopic|null);
                }

                /** Represents a CreateTopicRequest. */
                class CreateTopicRequest implements ICreateTopicRequest {

                    /**
                     * Constructs a new CreateTopicRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.managedkafka.v1.ICreateTopicRequest);

                    /** CreateTopicRequest parent. */
                    public parent: string;

                    /** CreateTopicRequest topicId. */
                    public topicId: string;

                    /** CreateTopicRequest topic. */
                    public topic?: (google.cloud.managedkafka.v1.ITopic|null);

                    /**
                     * Creates a new CreateTopicRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateTopicRequest instance
                     */
                    public static create(properties?: google.cloud.managedkafka.v1.ICreateTopicRequest): google.cloud.managedkafka.v1.CreateTopicRequest;

                    /**
                     * Encodes the specified CreateTopicRequest message. Does not implicitly {@link google.cloud.managedkafka.v1.CreateTopicRequest.verify|verify} messages.
                     * @param message CreateTopicRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.managedkafka.v1.ICreateTopicRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateTopicRequest message, length delimited. Does not implicitly {@link google.cloud.managedkafka.v1.CreateTopicRequest.verify|verify} messages.
                     * @param message CreateTopicRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.managedkafka.v1.ICreateTopicRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateTopicRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateTopicRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.managedkafka.v1.CreateTopicRequest;

                    /**
                     * Decodes a CreateTopicRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateTopicRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.managedkafka.v1.CreateTopicRequest;

                    /**
                     * Verifies a CreateTopicRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateTopicRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateTopicRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.managedkafka.v1.CreateTopicRequest;

                    /**
                     * Creates a plain object from a CreateTopicRequest message. Also converts values to other types if specified.
                     * @param message CreateTopicRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.managedkafka.v1.CreateTopicRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateTopicRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateTopicRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpdateTopicRequest. */
                interface IUpdateTopicRequest {

                    /** UpdateTopicRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateTopicRequest topic */
                    topic?: (google.cloud.managedkafka.v1.ITopic|null);
                }

                /** Represents an UpdateTopicRequest. */
                class UpdateTopicRequest implements IUpdateTopicRequest {

                    /**
                     * Constructs a new UpdateTopicRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.managedkafka.v1.IUpdateTopicRequest);

                    /** UpdateTopicRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateTopicRequest topic. */
                    public topic?: (google.cloud.managedkafka.v1.ITopic|null);

                    /**
                     * Creates a new UpdateTopicRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateTopicRequest instance
                     */
                    public static create(properties?: google.cloud.managedkafka.v1.IUpdateTopicRequest): google.cloud.managedkafka.v1.UpdateTopicRequest;

                    /**
                     * Encodes the specified UpdateTopicRequest message. Does not implicitly {@link google.cloud.managedkafka.v1.UpdateTopicRequest.verify|verify} messages.
                     * @param message UpdateTopicRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.managedkafka.v1.IUpdateTopicRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateTopicRequest message, length delimited. Does not implicitly {@link google.cloud.managedkafka.v1.UpdateTopicRequest.verify|verify} messages.
                     * @param message UpdateTopicRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.managedkafka.v1.IUpdateTopicRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateTopicRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateTopicRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.managedkafka.v1.UpdateTopicRequest;

                    /**
                     * Decodes an UpdateTopicRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateTopicRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.managedkafka.v1.UpdateTopicRequest;

                    /**
                     * Verifies an UpdateTopicRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateTopicRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateTopicRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.managedkafka.v1.UpdateTopicRequest;

                    /**
                     * Creates a plain object from an UpdateTopicRequest message. Also converts values to other types if specified.
                     * @param message UpdateTopicRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.managedkafka.v1.UpdateTopicRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateTopicRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdateTopicRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeleteTopicRequest. */
                interface IDeleteTopicRequest {

                    /** DeleteTopicRequest name */
                    name?: (string|null);
                }

                /** Represents a DeleteTopicRequest. */
                class DeleteTopicRequest implements IDeleteTopicRequest {

                    /**
                     * Constructs a new DeleteTopicRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.managedkafka.v1.IDeleteTopicRequest);

                    /** DeleteTopicRequest name. */
                    public name: string;

                    /**
                     * Creates a new DeleteTopicRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteTopicRequest instance
                     */
                    public static create(properties?: google.cloud.managedkafka.v1.IDeleteTopicRequest): google.cloud.managedkafka.v1.DeleteTopicRequest;

                    /**
                     * Encodes the specified DeleteTopicRequest message. Does not implicitly {@link google.cloud.managedkafka.v1.DeleteTopicRequest.verify|verify} messages.
                     * @param message DeleteTopicRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.managedkafka.v1.IDeleteTopicRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteTopicRequest message, length delimited. Does not implicitly {@link google.cloud.managedkafka.v1.DeleteTopicRequest.verify|verify} messages.
                     * @param message DeleteTopicRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.managedkafka.v1.IDeleteTopicRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteTopicRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteTopicRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.managedkafka.v1.DeleteTopicRequest;

                    /**
                     * Decodes a DeleteTopicRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteTopicRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.managedkafka.v1.DeleteTopicRequest;

                    /**
                     * Verifies a DeleteTopicRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteTopicRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteTopicRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.managedkafka.v1.DeleteTopicRequest;

                    /**
                     * Creates a plain object from a DeleteTopicRequest message. Also converts values to other types if specified.
                     * @param message DeleteTopicRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.managedkafka.v1.DeleteTopicRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteTopicRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeleteTopicRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListConsumerGroupsRequest. */
                interface IListConsumerGroupsRequest {

                    /** ListConsumerGroupsRequest parent */
                    parent?: (string|null);

                    /** ListConsumerGroupsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListConsumerGroupsRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListConsumerGroupsRequest. */
                class ListConsumerGroupsRequest implements IListConsumerGroupsRequest {

                    /**
                     * Constructs a new ListConsumerGroupsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.managedkafka.v1.IListConsumerGroupsRequest);

                    /** ListConsumerGroupsRequest parent. */
                    public parent: string;

                    /** ListConsumerGroupsRequest pageSize. */
                    public pageSize: number;

                    /** ListConsumerGroupsRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListConsumerGroupsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListConsumerGroupsRequest instance
                     */
                    public static create(properties?: google.cloud.managedkafka.v1.IListConsumerGroupsRequest): google.cloud.managedkafka.v1.ListConsumerGroupsRequest;

                    /**
                     * Encodes the specified ListConsumerGroupsRequest message. Does not implicitly {@link google.cloud.managedkafka.v1.ListConsumerGroupsRequest.verify|verify} messages.
                     * @param message ListConsumerGroupsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.managedkafka.v1.IListConsumerGroupsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListConsumerGroupsRequest message, length delimited. Does not implicitly {@link google.cloud.managedkafka.v1.ListConsumerGroupsRequest.verify|verify} messages.
                     * @param message ListConsumerGroupsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.managedkafka.v1.IListConsumerGroupsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListConsumerGroupsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListConsumerGroupsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.managedkafka.v1.ListConsumerGroupsRequest;

                    /**
                     * Decodes a ListConsumerGroupsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListConsumerGroupsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.managedkafka.v1.ListConsumerGroupsRequest;

                    /**
                     * Verifies a ListConsumerGroupsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListConsumerGroupsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListConsumerGroupsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.managedkafka.v1.ListConsumerGroupsRequest;

                    /**
                     * Creates a plain object from a ListConsumerGroupsRequest message. Also converts values to other types if specified.
                     * @param message ListConsumerGroupsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.managedkafka.v1.ListConsumerGroupsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListConsumerGroupsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListConsumerGroupsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListConsumerGroupsResponse. */
                interface IListConsumerGroupsResponse {

                    /** ListConsumerGroupsResponse consumerGroups */
                    consumerGroups?: (google.cloud.managedkafka.v1.IConsumerGroup[]|null);

                    /** ListConsumerGroupsResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListConsumerGroupsResponse. */
                class ListConsumerGroupsResponse implements IListConsumerGroupsResponse {

                    /**
                     * Constructs a new ListConsumerGroupsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.managedkafka.v1.IListConsumerGroupsResponse);

                    /** ListConsumerGroupsResponse consumerGroups. */
                    public consumerGroups: google.cloud.managedkafka.v1.IConsumerGroup[];

                    /** ListConsumerGroupsResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListConsumerGroupsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListConsumerGroupsResponse instance
                     */
                    public static create(properties?: google.cloud.managedkafka.v1.IListConsumerGroupsResponse): google.cloud.managedkafka.v1.ListConsumerGroupsResponse;

                    /**
                     * Encodes the specified ListConsumerGroupsResponse message. Does not implicitly {@link google.cloud.managedkafka.v1.ListConsumerGroupsResponse.verify|verify} messages.
                     * @param message ListConsumerGroupsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.managedkafka.v1.IListConsumerGroupsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListConsumerGroupsResponse message, length delimited. Does not implicitly {@link google.cloud.managedkafka.v1.ListConsumerGroupsResponse.verify|verify} messages.
                     * @param message ListConsumerGroupsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.managedkafka.v1.IListConsumerGroupsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListConsumerGroupsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListConsumerGroupsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.managedkafka.v1.ListConsumerGroupsResponse;

                    /**
                     * Decodes a ListConsumerGroupsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListConsumerGroupsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.managedkafka.v1.ListConsumerGroupsResponse;

                    /**
                     * Verifies a ListConsumerGroupsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListConsumerGroupsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListConsumerGroupsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.managedkafka.v1.ListConsumerGroupsResponse;

                    /**
                     * Creates a plain object from a ListConsumerGroupsResponse message. Also converts values to other types if specified.
                     * @param message ListConsumerGroupsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.managedkafka.v1.ListConsumerGroupsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListConsumerGroupsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListConsumerGroupsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetConsumerGroupRequest. */
                interface IGetConsumerGroupRequest {

                    /** GetConsumerGroupRequest name */
                    name?: (string|null);
                }

                /** Represents a GetConsumerGroupRequest. */
                class GetConsumerGroupRequest implements IGetConsumerGroupRequest {

                    /**
                     * Constructs a new GetConsumerGroupRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.managedkafka.v1.IGetConsumerGroupRequest);

                    /** GetConsumerGroupRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetConsumerGroupRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetConsumerGroupRequest instance
                     */
                    public static create(properties?: google.cloud.managedkafka.v1.IGetConsumerGroupRequest): google.cloud.managedkafka.v1.GetConsumerGroupRequest;

                    /**
                     * Encodes the specified GetConsumerGroupRequest message. Does not implicitly {@link google.cloud.managedkafka.v1.GetConsumerGroupRequest.verify|verify} messages.
                     * @param message GetConsumerGroupRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.managedkafka.v1.IGetConsumerGroupRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetConsumerGroupRequest message, length delimited. Does not implicitly {@link google.cloud.managedkafka.v1.GetConsumerGroupRequest.verify|verify} messages.
                     * @param message GetConsumerGroupRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.managedkafka.v1.IGetConsumerGroupRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetConsumerGroupRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetConsumerGroupRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.managedkafka.v1.GetConsumerGroupRequest;

                    /**
                     * Decodes a GetConsumerGroupRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetConsumerGroupRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.managedkafka.v1.GetConsumerGroupRequest;

                    /**
                     * Verifies a GetConsumerGroupRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetConsumerGroupRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetConsumerGroupRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.managedkafka.v1.GetConsumerGroupRequest;

                    /**
                     * Creates a plain object from a GetConsumerGroupRequest message. Also converts values to other types if specified.
                     * @param message GetConsumerGroupRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.managedkafka.v1.GetConsumerGroupRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetConsumerGroupRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetConsumerGroupRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpdateConsumerGroupRequest. */
                interface IUpdateConsumerGroupRequest {

                    /** UpdateConsumerGroupRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateConsumerGroupRequest consumerGroup */
                    consumerGroup?: (google.cloud.managedkafka.v1.IConsumerGroup|null);
                }

                /** Represents an UpdateConsumerGroupRequest. */
                class UpdateConsumerGroupRequest implements IUpdateConsumerGroupRequest {

                    /**
                     * Constructs a new UpdateConsumerGroupRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.managedkafka.v1.IUpdateConsumerGroupRequest);

                    /** UpdateConsumerGroupRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateConsumerGroupRequest consumerGroup. */
                    public consumerGroup?: (google.cloud.managedkafka.v1.IConsumerGroup|null);

                    /**
                     * Creates a new UpdateConsumerGroupRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateConsumerGroupRequest instance
                     */
                    public static create(properties?: google.cloud.managedkafka.v1.IUpdateConsumerGroupRequest): google.cloud.managedkafka.v1.UpdateConsumerGroupRequest;

                    /**
                     * Encodes the specified UpdateConsumerGroupRequest message. Does not implicitly {@link google.cloud.managedkafka.v1.UpdateConsumerGroupRequest.verify|verify} messages.
                     * @param message UpdateConsumerGroupRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.managedkafka.v1.IUpdateConsumerGroupRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateConsumerGroupRequest message, length delimited. Does not implicitly {@link google.cloud.managedkafka.v1.UpdateConsumerGroupRequest.verify|verify} messages.
                     * @param message UpdateConsumerGroupRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.managedkafka.v1.IUpdateConsumerGroupRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateConsumerGroupRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateConsumerGroupRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.managedkafka.v1.UpdateConsumerGroupRequest;

                    /**
                     * Decodes an UpdateConsumerGroupRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateConsumerGroupRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.managedkafka.v1.UpdateConsumerGroupRequest;

                    /**
                     * Verifies an UpdateConsumerGroupRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateConsumerGroupRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateConsumerGroupRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.managedkafka.v1.UpdateConsumerGroupRequest;

                    /**
                     * Creates a plain object from an UpdateConsumerGroupRequest message. Also converts values to other types if specified.
                     * @param message UpdateConsumerGroupRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.managedkafka.v1.UpdateConsumerGroupRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateConsumerGroupRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdateConsumerGroupRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeleteConsumerGroupRequest. */
                interface IDeleteConsumerGroupRequest {

                    /** DeleteConsumerGroupRequest name */
                    name?: (string|null);
                }

                /** Represents a DeleteConsumerGroupRequest. */
                class DeleteConsumerGroupRequest implements IDeleteConsumerGroupRequest {

                    /**
                     * Constructs a new DeleteConsumerGroupRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.managedkafka.v1.IDeleteConsumerGroupRequest);

                    /** DeleteConsumerGroupRequest name. */
                    public name: string;

                    /**
                     * Creates a new DeleteConsumerGroupRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteConsumerGroupRequest instance
                     */
                    public static create(properties?: google.cloud.managedkafka.v1.IDeleteConsumerGroupRequest): google.cloud.managedkafka.v1.DeleteConsumerGroupRequest;

                    /**
                     * Encodes the specified DeleteConsumerGroupRequest message. Does not implicitly {@link google.cloud.managedkafka.v1.DeleteConsumerGroupRequest.verify|verify} messages.
                     * @param message DeleteConsumerGroupRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.managedkafka.v1.IDeleteConsumerGroupRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteConsumerGroupRequest message, length delimited. Does not implicitly {@link google.cloud.managedkafka.v1.DeleteConsumerGroupRequest.verify|verify} messages.
                     * @param message DeleteConsumerGroupRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.managedkafka.v1.IDeleteConsumerGroupRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteConsumerGroupRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteConsumerGroupRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.managedkafka.v1.DeleteConsumerGroupRequest;

                    /**
                     * Decodes a DeleteConsumerGroupRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteConsumerGroupRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.managedkafka.v1.DeleteConsumerGroupRequest;

                    /**
                     * Verifies a DeleteConsumerGroupRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteConsumerGroupRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteConsumerGroupRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.managedkafka.v1.DeleteConsumerGroupRequest;

                    /**
                     * Creates a plain object from a DeleteConsumerGroupRequest message. Also converts values to other types if specified.
                     * @param message DeleteConsumerGroupRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.managedkafka.v1.DeleteConsumerGroupRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteConsumerGroupRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeleteConsumerGroupRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListAclsRequest. */
                interface IListAclsRequest {

                    /** ListAclsRequest parent */
                    parent?: (string|null);

                    /** ListAclsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListAclsRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListAclsRequest. */
                class ListAclsRequest implements IListAclsRequest {

                    /**
                     * Constructs a new ListAclsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.managedkafka.v1.IListAclsRequest);

                    /** ListAclsRequest parent. */
                    public parent: string;

                    /** ListAclsRequest pageSize. */
                    public pageSize: number;

                    /** ListAclsRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListAclsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListAclsRequest instance
                     */
                    public static create(properties?: google.cloud.managedkafka.v1.IListAclsRequest): google.cloud.managedkafka.v1.ListAclsRequest;

                    /**
                     * Encodes the specified ListAclsRequest message. Does not implicitly {@link google.cloud.managedkafka.v1.ListAclsRequest.verify|verify} messages.
                     * @param message ListAclsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.managedkafka.v1.IListAclsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListAclsRequest message, length delimited. Does not implicitly {@link google.cloud.managedkafka.v1.ListAclsRequest.verify|verify} messages.
                     * @param message ListAclsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.managedkafka.v1.IListAclsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListAclsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListAclsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.managedkafka.v1.ListAclsRequest;

                    /**
                     * Decodes a ListAclsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListAclsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.managedkafka.v1.ListAclsRequest;

                    /**
                     * Verifies a ListAclsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListAclsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListAclsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.managedkafka.v1.ListAclsRequest;

                    /**
                     * Creates a plain object from a ListAclsRequest message. Also converts values to other types if specified.
                     * @param message ListAclsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.managedkafka.v1.ListAclsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListAclsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListAclsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListAclsResponse. */
                interface IListAclsResponse {

                    /** ListAclsResponse acls */
                    acls?: (google.cloud.managedkafka.v1.IAcl[]|null);

                    /** ListAclsResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListAclsResponse. */
                class ListAclsResponse implements IListAclsResponse {

                    /**
                     * Constructs a new ListAclsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.managedkafka.v1.IListAclsResponse);

                    /** ListAclsResponse acls. */
                    public acls: google.cloud.managedkafka.v1.IAcl[];

                    /** ListAclsResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListAclsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListAclsResponse instance
                     */
                    public static create(properties?: google.cloud.managedkafka.v1.IListAclsResponse): google.cloud.managedkafka.v1.ListAclsResponse;

                    /**
                     * Encodes the specified ListAclsResponse message. Does not implicitly {@link google.cloud.managedkafka.v1.ListAclsResponse.verify|verify} messages.
                     * @param message ListAclsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.managedkafka.v1.IListAclsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListAclsResponse message, length delimited. Does not implicitly {@link google.cloud.managedkafka.v1.ListAclsResponse.verify|verify} messages.
                     * @param message ListAclsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.managedkafka.v1.IListAclsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListAclsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListAclsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.managedkafka.v1.ListAclsResponse;

                    /**
                     * Decodes a ListAclsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListAclsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.managedkafka.v1.ListAclsResponse;

                    /**
                     * Verifies a ListAclsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListAclsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListAclsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.managedkafka.v1.ListAclsResponse;

                    /**
                     * Creates a plain object from a ListAclsResponse message. Also converts values to other types if specified.
                     * @param message ListAclsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.managedkafka.v1.ListAclsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListAclsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListAclsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetAclRequest. */
                interface IGetAclRequest {

                    /** GetAclRequest name */
                    name?: (string|null);
                }

                /** Represents a GetAclRequest. */
                class GetAclRequest implements IGetAclRequest {

                    /**
                     * Constructs a new GetAclRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.managedkafka.v1.IGetAclRequest);

                    /** GetAclRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetAclRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetAclRequest instance
                     */
                    public static create(properties?: google.cloud.managedkafka.v1.IGetAclRequest): google.cloud.managedkafka.v1.GetAclRequest;

                    /**
                     * Encodes the specified GetAclRequest message. Does not implicitly {@link google.cloud.managedkafka.v1.GetAclRequest.verify|verify} messages.
                     * @param message GetAclRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.managedkafka.v1.IGetAclRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetAclRequest message, length delimited. Does not implicitly {@link google.cloud.managedkafka.v1.GetAclRequest.verify|verify} messages.
                     * @param message GetAclRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.managedkafka.v1.IGetAclRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetAclRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetAclRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.managedkafka.v1.GetAclRequest;

                    /**
                     * Decodes a GetAclRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetAclRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.managedkafka.v1.GetAclRequest;

                    /**
                     * Verifies a GetAclRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetAclRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetAclRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.managedkafka.v1.GetAclRequest;

                    /**
                     * Creates a plain object from a GetAclRequest message. Also converts values to other types if specified.
                     * @param message GetAclRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.managedkafka.v1.GetAclRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetAclRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetAclRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CreateAclRequest. */
                interface ICreateAclRequest {

                    /** CreateAclRequest parent */
                    parent?: (string|null);

                    /** CreateAclRequest aclId */
                    aclId?: (string|null);

                    /** CreateAclRequest acl */
                    acl?: (google.cloud.managedkafka.v1.IAcl|null);
                }

                /** Represents a CreateAclRequest. */
                class CreateAclRequest implements ICreateAclRequest {

                    /**
                     * Constructs a new CreateAclRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.managedkafka.v1.ICreateAclRequest);

                    /** CreateAclRequest parent. */
                    public parent: string;

                    /** CreateAclRequest aclId. */
                    public aclId: string;

                    /** CreateAclRequest acl. */
                    public acl?: (google.cloud.managedkafka.v1.IAcl|null);

                    /**
                     * Creates a new CreateAclRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateAclRequest instance
                     */
                    public static create(properties?: google.cloud.managedkafka.v1.ICreateAclRequest): google.cloud.managedkafka.v1.CreateAclRequest;

                    /**
                     * Encodes the specified CreateAclRequest message. Does not implicitly {@link google.cloud.managedkafka.v1.CreateAclRequest.verify|verify} messages.
                     * @param message CreateAclRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.managedkafka.v1.ICreateAclRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateAclRequest message, length delimited. Does not implicitly {@link google.cloud.managedkafka.v1.CreateAclRequest.verify|verify} messages.
                     * @param message CreateAclRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.managedkafka.v1.ICreateAclRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateAclRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateAclRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.managedkafka.v1.CreateAclRequest;

                    /**
                     * Decodes a CreateAclRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateAclRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.managedkafka.v1.CreateAclRequest;

                    /**
                     * Verifies a CreateAclRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateAclRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateAclRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.managedkafka.v1.CreateAclRequest;

                    /**
                     * Creates a plain object from a CreateAclRequest message. Also converts values to other types if specified.
                     * @param message CreateAclRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.managedkafka.v1.CreateAclRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateAclRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateAclRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpdateAclRequest. */
                interface IUpdateAclRequest {

                    /** UpdateAclRequest acl */
                    acl?: (google.cloud.managedkafka.v1.IAcl|null);

                    /** UpdateAclRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);
                }

                /** Represents an UpdateAclRequest. */
                class UpdateAclRequest implements IUpdateAclRequest {

                    /**
                     * Constructs a new UpdateAclRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.managedkafka.v1.IUpdateAclRequest);

                    /** UpdateAclRequest acl. */
                    public acl?: (google.cloud.managedkafka.v1.IAcl|null);

                    /** UpdateAclRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /**
                     * Creates a new UpdateAclRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateAclRequest instance
                     */
                    public static create(properties?: google.cloud.managedkafka.v1.IUpdateAclRequest): google.cloud.managedkafka.v1.UpdateAclRequest;

                    /**
                     * Encodes the specified UpdateAclRequest message. Does not implicitly {@link google.cloud.managedkafka.v1.UpdateAclRequest.verify|verify} messages.
                     * @param message UpdateAclRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.managedkafka.v1.IUpdateAclRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateAclRequest message, length delimited. Does not implicitly {@link google.cloud.managedkafka.v1.UpdateAclRequest.verify|verify} messages.
                     * @param message UpdateAclRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.managedkafka.v1.IUpdateAclRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateAclRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateAclRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.managedkafka.v1.UpdateAclRequest;

                    /**
                     * Decodes an UpdateAclRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateAclRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.managedkafka.v1.UpdateAclRequest;

                    /**
                     * Verifies an UpdateAclRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateAclRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateAclRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.managedkafka.v1.UpdateAclRequest;

                    /**
                     * Creates a plain object from an UpdateAclRequest message. Also converts values to other types if specified.
                     * @param message UpdateAclRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.managedkafka.v1.UpdateAclRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateAclRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdateAclRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeleteAclRequest. */
                interface IDeleteAclRequest {

                    /** DeleteAclRequest name */
                    name?: (string|null);
                }

                /** Represents a DeleteAclRequest. */
                class DeleteAclRequest implements IDeleteAclRequest {

                    /**
                     * Constructs a new DeleteAclRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.managedkafka.v1.IDeleteAclRequest);

                    /** DeleteAclRequest name. */
                    public name: string;

                    /**
                     * Creates a new DeleteAclRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteAclRequest instance
                     */
                    public static create(properties?: google.cloud.managedkafka.v1.IDeleteAclRequest): google.cloud.managedkafka.v1.DeleteAclRequest;

                    /**
                     * Encodes the specified DeleteAclRequest message. Does not implicitly {@link google.cloud.managedkafka.v1.DeleteAclRequest.verify|verify} messages.
                     * @param message DeleteAclRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.managedkafka.v1.IDeleteAclRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteAclRequest message, length delimited. Does not implicitly {@link google.cloud.managedkafka.v1.DeleteAclRequest.verify|verify} messages.
                     * @param message DeleteAclRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.managedkafka.v1.IDeleteAclRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteAclRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteAclRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.managedkafka.v1.DeleteAclRequest;

                    /**
                     * Decodes a DeleteAclRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteAclRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.managedkafka.v1.DeleteAclRequest;

                    /**
                     * Verifies a DeleteAclRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteAclRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteAclRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.managedkafka.v1.DeleteAclRequest;

                    /**
                     * Creates a plain object from a DeleteAclRequest message. Also converts values to other types if specified.
                     * @param message DeleteAclRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.managedkafka.v1.DeleteAclRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteAclRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeleteAclRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an AddAclEntryRequest. */
                interface IAddAclEntryRequest {

                    /** AddAclEntryRequest acl */
                    acl?: (string|null);

                    /** AddAclEntryRequest aclEntry */
                    aclEntry?: (google.cloud.managedkafka.v1.IAclEntry|null);
                }

                /** Represents an AddAclEntryRequest. */
                class AddAclEntryRequest implements IAddAclEntryRequest {

                    /**
                     * Constructs a new AddAclEntryRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.managedkafka.v1.IAddAclEntryRequest);

                    /** AddAclEntryRequest acl. */
                    public acl: string;

                    /** AddAclEntryRequest aclEntry. */
                    public aclEntry?: (google.cloud.managedkafka.v1.IAclEntry|null);

                    /**
                     * Creates a new AddAclEntryRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AddAclEntryRequest instance
                     */
                    public static create(properties?: google.cloud.managedkafka.v1.IAddAclEntryRequest): google.cloud.managedkafka.v1.AddAclEntryRequest;

                    /**
                     * Encodes the specified AddAclEntryRequest message. Does not implicitly {@link google.cloud.managedkafka.v1.AddAclEntryRequest.verify|verify} messages.
                     * @param message AddAclEntryRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.managedkafka.v1.IAddAclEntryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AddAclEntryRequest message, length delimited. Does not implicitly {@link google.cloud.managedkafka.v1.AddAclEntryRequest.verify|verify} messages.
                     * @param message AddAclEntryRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.managedkafka.v1.IAddAclEntryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AddAclEntryRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AddAclEntryRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.managedkafka.v1.AddAclEntryRequest;

                    /**
                     * Decodes an AddAclEntryRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AddAclEntryRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.managedkafka.v1.AddAclEntryRequest;

                    /**
                     * Verifies an AddAclEntryRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AddAclEntryRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AddAclEntryRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.managedkafka.v1.AddAclEntryRequest;

                    /**
                     * Creates a plain object from an AddAclEntryRequest message. Also converts values to other types if specified.
                     * @param message AddAclEntryRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.managedkafka.v1.AddAclEntryRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AddAclEntryRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for AddAclEntryRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an AddAclEntryResponse. */
                interface IAddAclEntryResponse {

                    /** AddAclEntryResponse acl */
                    acl?: (google.cloud.managedkafka.v1.IAcl|null);

                    /** AddAclEntryResponse aclCreated */
                    aclCreated?: (boolean|null);
                }

                /** Represents an AddAclEntryResponse. */
                class AddAclEntryResponse implements IAddAclEntryResponse {

                    /**
                     * Constructs a new AddAclEntryResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.managedkafka.v1.IAddAclEntryResponse);

                    /** AddAclEntryResponse acl. */
                    public acl?: (google.cloud.managedkafka.v1.IAcl|null);

                    /** AddAclEntryResponse aclCreated. */
                    public aclCreated: boolean;

                    /**
                     * Creates a new AddAclEntryResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AddAclEntryResponse instance
                     */
                    public static create(properties?: google.cloud.managedkafka.v1.IAddAclEntryResponse): google.cloud.managedkafka.v1.AddAclEntryResponse;

                    /**
                     * Encodes the specified AddAclEntryResponse message. Does not implicitly {@link google.cloud.managedkafka.v1.AddAclEntryResponse.verify|verify} messages.
                     * @param message AddAclEntryResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.managedkafka.v1.IAddAclEntryResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AddAclEntryResponse message, length delimited. Does not implicitly {@link google.cloud.managedkafka.v1.AddAclEntryResponse.verify|verify} messages.
                     * @param message AddAclEntryResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.managedkafka.v1.IAddAclEntryResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AddAclEntryResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AddAclEntryResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.managedkafka.v1.AddAclEntryResponse;

                    /**
                     * Decodes an AddAclEntryResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AddAclEntryResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.managedkafka.v1.AddAclEntryResponse;

                    /**
                     * Verifies an AddAclEntryResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AddAclEntryResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AddAclEntryResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.managedkafka.v1.AddAclEntryResponse;

                    /**
                     * Creates a plain object from an AddAclEntryResponse message. Also converts values to other types if specified.
                     * @param message AddAclEntryResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.managedkafka.v1.AddAclEntryResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AddAclEntryResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for AddAclEntryResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a RemoveAclEntryRequest. */
                interface IRemoveAclEntryRequest {

                    /** RemoveAclEntryRequest acl */
                    acl?: (string|null);

                    /** RemoveAclEntryRequest aclEntry */
                    aclEntry?: (google.cloud.managedkafka.v1.IAclEntry|null);
                }

                /** Represents a RemoveAclEntryRequest. */
                class RemoveAclEntryRequest implements IRemoveAclEntryRequest {

                    /**
                     * Constructs a new RemoveAclEntryRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.managedkafka.v1.IRemoveAclEntryRequest);

                    /** RemoveAclEntryRequest acl. */
                    public acl: string;

                    /** RemoveAclEntryRequest aclEntry. */
                    public aclEntry?: (google.cloud.managedkafka.v1.IAclEntry|null);

                    /**
                     * Creates a new RemoveAclEntryRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RemoveAclEntryRequest instance
                     */
                    public static create(properties?: google.cloud.managedkafka.v1.IRemoveAclEntryRequest): google.cloud.managedkafka.v1.RemoveAclEntryRequest;

                    /**
                     * Encodes the specified RemoveAclEntryRequest message. Does not implicitly {@link google.cloud.managedkafka.v1.RemoveAclEntryRequest.verify|verify} messages.
                     * @param message RemoveAclEntryRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.managedkafka.v1.IRemoveAclEntryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RemoveAclEntryRequest message, length delimited. Does not implicitly {@link google.cloud.managedkafka.v1.RemoveAclEntryRequest.verify|verify} messages.
                     * @param message RemoveAclEntryRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.managedkafka.v1.IRemoveAclEntryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RemoveAclEntryRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RemoveAclEntryRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.managedkafka.v1.RemoveAclEntryRequest;

                    /**
                     * Decodes a RemoveAclEntryRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RemoveAclEntryRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.managedkafka.v1.RemoveAclEntryRequest;

                    /**
                     * Verifies a RemoveAclEntryRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RemoveAclEntryRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RemoveAclEntryRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.managedkafka.v1.RemoveAclEntryRequest;

                    /**
                     * Creates a plain object from a RemoveAclEntryRequest message. Also converts values to other types if specified.
                     * @param message RemoveAclEntryRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.managedkafka.v1.RemoveAclEntryRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RemoveAclEntryRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for RemoveAclEntryRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a RemoveAclEntryResponse. */
                interface IRemoveAclEntryResponse {

                    /** RemoveAclEntryResponse acl */
                    acl?: (google.cloud.managedkafka.v1.IAcl|null);

                    /** RemoveAclEntryResponse aclDeleted */
                    aclDeleted?: (boolean|null);
                }

                /** Represents a RemoveAclEntryResponse. */
                class RemoveAclEntryResponse implements IRemoveAclEntryResponse {

                    /**
                     * Constructs a new RemoveAclEntryResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.managedkafka.v1.IRemoveAclEntryResponse);

                    /** RemoveAclEntryResponse acl. */
                    public acl?: (google.cloud.managedkafka.v1.IAcl|null);

                    /** RemoveAclEntryResponse aclDeleted. */
                    public aclDeleted?: (boolean|null);

                    /** RemoveAclEntryResponse result. */
                    public result?: ("acl"|"aclDeleted");

                    /**
                     * Creates a new RemoveAclEntryResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RemoveAclEntryResponse instance
                     */
                    public static create(properties?: google.cloud.managedkafka.v1.IRemoveAclEntryResponse): google.cloud.managedkafka.v1.RemoveAclEntryResponse;

                    /**
                     * Encodes the specified RemoveAclEntryResponse message. Does not implicitly {@link google.cloud.managedkafka.v1.RemoveAclEntryResponse.verify|verify} messages.
                     * @param message RemoveAclEntryResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.managedkafka.v1.IRemoveAclEntryResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RemoveAclEntryResponse message, length delimited. Does not implicitly {@link google.cloud.managedkafka.v1.RemoveAclEntryResponse.verify|verify} messages.
                     * @param message RemoveAclEntryResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.managedkafka.v1.IRemoveAclEntryResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RemoveAclEntryResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RemoveAclEntryResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.managedkafka.v1.RemoveAclEntryResponse;

                    /**
                     * Decodes a RemoveAclEntryResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RemoveAclEntryResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.managedkafka.v1.RemoveAclEntryResponse;

                    /**
                     * Verifies a RemoveAclEntryResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RemoveAclEntryResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RemoveAclEntryResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.managedkafka.v1.RemoveAclEntryResponse;

                    /**
                     * Creates a plain object from a RemoveAclEntryResponse message. Also converts values to other types if specified.
                     * @param message RemoveAclEntryResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.managedkafka.v1.RemoveAclEntryResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RemoveAclEntryResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for RemoveAclEntryResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Cluster. */
                interface ICluster {

                    /** Cluster gcpConfig */
                    gcpConfig?: (google.cloud.managedkafka.v1.IGcpConfig|null);

                    /** Cluster name */
                    name?: (string|null);

                    /** Cluster createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** Cluster updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** Cluster labels */
                    labels?: ({ [k: string]: string }|null);

                    /** Cluster capacityConfig */
                    capacityConfig?: (google.cloud.managedkafka.v1.ICapacityConfig|null);

                    /** Cluster rebalanceConfig */
                    rebalanceConfig?: (google.cloud.managedkafka.v1.IRebalanceConfig|null);

                    /** Cluster state */
                    state?: (google.cloud.managedkafka.v1.Cluster.State|keyof typeof google.cloud.managedkafka.v1.Cluster.State|null);

                    /** Cluster satisfiesPzi */
                    satisfiesPzi?: (boolean|null);

                    /** Cluster satisfiesPzs */
                    satisfiesPzs?: (boolean|null);

                    /** Cluster tlsConfig */
                    tlsConfig?: (google.cloud.managedkafka.v1.ITlsConfig|null);
                }

                /** Represents a Cluster. */
                class Cluster implements ICluster {

                    /**
                     * Constructs a new Cluster.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.managedkafka.v1.ICluster);

                    /** Cluster gcpConfig. */
                    public gcpConfig?: (google.cloud.managedkafka.v1.IGcpConfig|null);

                    /** Cluster name. */
                    public name: string;

                    /** Cluster createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** Cluster updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** Cluster labels. */
                    public labels: { [k: string]: string };

                    /** Cluster capacityConfig. */
                    public capacityConfig?: (google.cloud.managedkafka.v1.ICapacityConfig|null);

                    /** Cluster rebalanceConfig. */
                    public rebalanceConfig?: (google.cloud.managedkafka.v1.IRebalanceConfig|null);

                    /** Cluster state. */
                    public state: (google.cloud.managedkafka.v1.Cluster.State|keyof typeof google.cloud.managedkafka.v1.Cluster.State);

                    /** Cluster satisfiesPzi. */
                    public satisfiesPzi?: (boolean|null);

                    /** Cluster satisfiesPzs. */
                    public satisfiesPzs?: (boolean|null);

                    /** Cluster tlsConfig. */
                    public tlsConfig?: (google.cloud.managedkafka.v1.ITlsConfig|null);

                    /** Cluster platformConfig. */
                    public platformConfig?: "gcpConfig";

                    /**
                     * Creates a new Cluster instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Cluster instance
                     */
                    public static create(properties?: google.cloud.managedkafka.v1.ICluster): google.cloud.managedkafka.v1.Cluster;

                    /**
                     * Encodes the specified Cluster message. Does not implicitly {@link google.cloud.managedkafka.v1.Cluster.verify|verify} messages.
                     * @param message Cluster message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.managedkafka.v1.ICluster, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Cluster message, length delimited. Does not implicitly {@link google.cloud.managedkafka.v1.Cluster.verify|verify} messages.
                     * @param message Cluster message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.managedkafka.v1.ICluster, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Cluster message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Cluster
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.managedkafka.v1.Cluster;

                    /**
                     * Decodes a Cluster message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Cluster
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.managedkafka.v1.Cluster;

                    /**
                     * Verifies a Cluster message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Cluster message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Cluster
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.managedkafka.v1.Cluster;

                    /**
                     * Creates a plain object from a Cluster message. Also converts values to other types if specified.
                     * @param message Cluster
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.managedkafka.v1.Cluster, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Cluster to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Cluster
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace Cluster {

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        CREATING = 1,
                        ACTIVE = 2,
                        DELETING = 3
                    }
                }

                /** Properties of a CapacityConfig. */
                interface ICapacityConfig {

                    /** CapacityConfig vcpuCount */
                    vcpuCount?: (number|Long|string|null);

                    /** CapacityConfig memoryBytes */
                    memoryBytes?: (number|Long|string|null);
                }

                /** Represents a CapacityConfig. */
                class CapacityConfig implements ICapacityConfig {

                    /**
                     * Constructs a new CapacityConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.managedkafka.v1.ICapacityConfig);

                    /** CapacityConfig vcpuCount. */
                    public vcpuCount: (number|Long|string);

                    /** CapacityConfig memoryBytes. */
                    public memoryBytes: (number|Long|string);

                    /**
                     * Creates a new CapacityConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CapacityConfig instance
                     */
                    public static create(properties?: google.cloud.managedkafka.v1.ICapacityConfig): google.cloud.managedkafka.v1.CapacityConfig;

                    /**
                     * Encodes the specified CapacityConfig message. Does not implicitly {@link google.cloud.managedkafka.v1.CapacityConfig.verify|verify} messages.
                     * @param message CapacityConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.managedkafka.v1.ICapacityConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CapacityConfig message, length delimited. Does not implicitly {@link google.cloud.managedkafka.v1.CapacityConfig.verify|verify} messages.
                     * @param message CapacityConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.managedkafka.v1.ICapacityConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CapacityConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CapacityConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.managedkafka.v1.CapacityConfig;

                    /**
                     * Decodes a CapacityConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CapacityConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.managedkafka.v1.CapacityConfig;

                    /**
                     * Verifies a CapacityConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CapacityConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CapacityConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.managedkafka.v1.CapacityConfig;

                    /**
                     * Creates a plain object from a CapacityConfig message. Also converts values to other types if specified.
                     * @param message CapacityConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.managedkafka.v1.CapacityConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CapacityConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CapacityConfig
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a RebalanceConfig. */
                interface IRebalanceConfig {

                    /** RebalanceConfig mode */
                    mode?: (google.cloud.managedkafka.v1.RebalanceConfig.Mode|keyof typeof google.cloud.managedkafka.v1.RebalanceConfig.Mode|null);
                }

                /** Represents a RebalanceConfig. */
                class RebalanceConfig implements IRebalanceConfig {

                    /**
                     * Constructs a new RebalanceConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.managedkafka.v1.IRebalanceConfig);

                    /** RebalanceConfig mode. */
                    public mode: (google.cloud.managedkafka.v1.RebalanceConfig.Mode|keyof typeof google.cloud.managedkafka.v1.RebalanceConfig.Mode);

                    /**
                     * Creates a new RebalanceConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RebalanceConfig instance
                     */
                    public static create(properties?: google.cloud.managedkafka.v1.IRebalanceConfig): google.cloud.managedkafka.v1.RebalanceConfig;

                    /**
                     * Encodes the specified RebalanceConfig message. Does not implicitly {@link google.cloud.managedkafka.v1.RebalanceConfig.verify|verify} messages.
                     * @param message RebalanceConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.managedkafka.v1.IRebalanceConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RebalanceConfig message, length delimited. Does not implicitly {@link google.cloud.managedkafka.v1.RebalanceConfig.verify|verify} messages.
                     * @param message RebalanceConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.managedkafka.v1.IRebalanceConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RebalanceConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RebalanceConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.managedkafka.v1.RebalanceConfig;

                    /**
                     * Decodes a RebalanceConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RebalanceConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.managedkafka.v1.RebalanceConfig;

                    /**
                     * Verifies a RebalanceConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RebalanceConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RebalanceConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.managedkafka.v1.RebalanceConfig;

                    /**
                     * Creates a plain object from a RebalanceConfig message. Also converts values to other types if specified.
                     * @param message RebalanceConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.managedkafka.v1.RebalanceConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RebalanceConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for RebalanceConfig
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace RebalanceConfig {

                    /** Mode enum. */
                    enum Mode {
                        MODE_UNSPECIFIED = 0,
                        NO_REBALANCE = 1,
                        AUTO_REBALANCE_ON_SCALE_UP = 2
                    }
                }

                /** Properties of a NetworkConfig. */
                interface INetworkConfig {

                    /** NetworkConfig subnet */
                    subnet?: (string|null);
                }

                /** Represents a NetworkConfig. */
                class NetworkConfig implements INetworkConfig {

                    /**
                     * Constructs a new NetworkConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.managedkafka.v1.INetworkConfig);

                    /** NetworkConfig subnet. */
                    public subnet: string;

                    /**
                     * Creates a new NetworkConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns NetworkConfig instance
                     */
                    public static create(properties?: google.cloud.managedkafka.v1.INetworkConfig): google.cloud.managedkafka.v1.NetworkConfig;

                    /**
                     * Encodes the specified NetworkConfig message. Does not implicitly {@link google.cloud.managedkafka.v1.NetworkConfig.verify|verify} messages.
                     * @param message NetworkConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.managedkafka.v1.INetworkConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified NetworkConfig message, length delimited. Does not implicitly {@link google.cloud.managedkafka.v1.NetworkConfig.verify|verify} messages.
                     * @param message NetworkConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.managedkafka.v1.INetworkConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a NetworkConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns NetworkConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.managedkafka.v1.NetworkConfig;

                    /**
                     * Decodes a NetworkConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns NetworkConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.managedkafka.v1.NetworkConfig;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.managedkafka.v1.NetworkConfig;

                    /**
                     * Creates a plain object from a NetworkConfig message. Also converts values to other types if specified.
                     * @param message NetworkConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.managedkafka.v1.NetworkConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

                /** Properties of an AccessConfig. */
                interface IAccessConfig {

                    /** AccessConfig networkConfigs */
                    networkConfigs?: (google.cloud.managedkafka.v1.INetworkConfig[]|null);
                }

                /** Represents an AccessConfig. */
                class AccessConfig implements IAccessConfig {

                    /**
                     * Constructs a new AccessConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.managedkafka.v1.IAccessConfig);

                    /** AccessConfig networkConfigs. */
                    public networkConfigs: google.cloud.managedkafka.v1.INetworkConfig[];

                    /**
                     * Creates a new AccessConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AccessConfig instance
                     */
                    public static create(properties?: google.cloud.managedkafka.v1.IAccessConfig): google.cloud.managedkafka.v1.AccessConfig;

                    /**
                     * Encodes the specified AccessConfig message. Does not implicitly {@link google.cloud.managedkafka.v1.AccessConfig.verify|verify} messages.
                     * @param message AccessConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.managedkafka.v1.IAccessConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AccessConfig message, length delimited. Does not implicitly {@link google.cloud.managedkafka.v1.AccessConfig.verify|verify} messages.
                     * @param message AccessConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.managedkafka.v1.IAccessConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AccessConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AccessConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.managedkafka.v1.AccessConfig;

                    /**
                     * Decodes an AccessConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AccessConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.managedkafka.v1.AccessConfig;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.managedkafka.v1.AccessConfig;

                    /**
                     * Creates a plain object from an AccessConfig message. Also converts values to other types if specified.
                     * @param message AccessConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.managedkafka.v1.AccessConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

                /** Properties of a GcpConfig. */
                interface IGcpConfig {

                    /** GcpConfig accessConfig */
                    accessConfig?: (google.cloud.managedkafka.v1.IAccessConfig|null);

                    /** GcpConfig kmsKey */
                    kmsKey?: (string|null);
                }

                /** Represents a GcpConfig. */
                class GcpConfig implements IGcpConfig {

                    /**
                     * Constructs a new GcpConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.managedkafka.v1.IGcpConfig);

                    /** GcpConfig accessConfig. */
                    public accessConfig?: (google.cloud.managedkafka.v1.IAccessConfig|null);

                    /** GcpConfig kmsKey. */
                    public kmsKey: string;

                    /**
                     * Creates a new GcpConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GcpConfig instance
                     */
                    public static create(properties?: google.cloud.managedkafka.v1.IGcpConfig): google.cloud.managedkafka.v1.GcpConfig;

                    /**
                     * Encodes the specified GcpConfig message. Does not implicitly {@link google.cloud.managedkafka.v1.GcpConfig.verify|verify} messages.
                     * @param message GcpConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.managedkafka.v1.IGcpConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GcpConfig message, length delimited. Does not implicitly {@link google.cloud.managedkafka.v1.GcpConfig.verify|verify} messages.
                     * @param message GcpConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.managedkafka.v1.IGcpConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GcpConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GcpConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.managedkafka.v1.GcpConfig;

                    /**
                     * Decodes a GcpConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GcpConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.managedkafka.v1.GcpConfig;

                    /**
                     * Verifies a GcpConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GcpConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GcpConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.managedkafka.v1.GcpConfig;

                    /**
                     * Creates a plain object from a GcpConfig message. Also converts values to other types if specified.
                     * @param message GcpConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.managedkafka.v1.GcpConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GcpConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GcpConfig
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a TlsConfig. */
                interface ITlsConfig {

                    /** TlsConfig trustConfig */
                    trustConfig?: (google.cloud.managedkafka.v1.ITrustConfig|null);

                    /** TlsConfig sslPrincipalMappingRules */
                    sslPrincipalMappingRules?: (string|null);
                }

                /** Represents a TlsConfig. */
                class TlsConfig implements ITlsConfig {

                    /**
                     * Constructs a new TlsConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.managedkafka.v1.ITlsConfig);

                    /** TlsConfig trustConfig. */
                    public trustConfig?: (google.cloud.managedkafka.v1.ITrustConfig|null);

                    /** TlsConfig sslPrincipalMappingRules. */
                    public sslPrincipalMappingRules: string;

                    /**
                     * Creates a new TlsConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TlsConfig instance
                     */
                    public static create(properties?: google.cloud.managedkafka.v1.ITlsConfig): google.cloud.managedkafka.v1.TlsConfig;

                    /**
                     * Encodes the specified TlsConfig message. Does not implicitly {@link google.cloud.managedkafka.v1.TlsConfig.verify|verify} messages.
                     * @param message TlsConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.managedkafka.v1.ITlsConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TlsConfig message, length delimited. Does not implicitly {@link google.cloud.managedkafka.v1.TlsConfig.verify|verify} messages.
                     * @param message TlsConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.managedkafka.v1.ITlsConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TlsConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TlsConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.managedkafka.v1.TlsConfig;

                    /**
                     * Decodes a TlsConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TlsConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.managedkafka.v1.TlsConfig;

                    /**
                     * Verifies a TlsConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TlsConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TlsConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.managedkafka.v1.TlsConfig;

                    /**
                     * Creates a plain object from a TlsConfig message. Also converts values to other types if specified.
                     * @param message TlsConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.managedkafka.v1.TlsConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TlsConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for TlsConfig
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a TrustConfig. */
                interface ITrustConfig {

                    /** TrustConfig casConfigs */
                    casConfigs?: (google.cloud.managedkafka.v1.TrustConfig.ICertificateAuthorityServiceConfig[]|null);
                }

                /** Represents a TrustConfig. */
                class TrustConfig implements ITrustConfig {

                    /**
                     * Constructs a new TrustConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.managedkafka.v1.ITrustConfig);

                    /** TrustConfig casConfigs. */
                    public casConfigs: google.cloud.managedkafka.v1.TrustConfig.ICertificateAuthorityServiceConfig[];

                    /**
                     * Creates a new TrustConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TrustConfig instance
                     */
                    public static create(properties?: google.cloud.managedkafka.v1.ITrustConfig): google.cloud.managedkafka.v1.TrustConfig;

                    /**
                     * Encodes the specified TrustConfig message. Does not implicitly {@link google.cloud.managedkafka.v1.TrustConfig.verify|verify} messages.
                     * @param message TrustConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.managedkafka.v1.ITrustConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TrustConfig message, length delimited. Does not implicitly {@link google.cloud.managedkafka.v1.TrustConfig.verify|verify} messages.
                     * @param message TrustConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.managedkafka.v1.ITrustConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TrustConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TrustConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.managedkafka.v1.TrustConfig;

                    /**
                     * Decodes a TrustConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TrustConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.managedkafka.v1.TrustConfig;

                    /**
                     * Verifies a TrustConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TrustConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TrustConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.managedkafka.v1.TrustConfig;

                    /**
                     * Creates a plain object from a TrustConfig message. Also converts values to other types if specified.
                     * @param message TrustConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.managedkafka.v1.TrustConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TrustConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for TrustConfig
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace TrustConfig {

                    /** Properties of a CertificateAuthorityServiceConfig. */
                    interface ICertificateAuthorityServiceConfig {

                        /** CertificateAuthorityServiceConfig caPool */
                        caPool?: (string|null);
                    }

                    /** Represents a CertificateAuthorityServiceConfig. */
                    class CertificateAuthorityServiceConfig implements ICertificateAuthorityServiceConfig {

                        /**
                         * Constructs a new CertificateAuthorityServiceConfig.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.managedkafka.v1.TrustConfig.ICertificateAuthorityServiceConfig);

                        /** CertificateAuthorityServiceConfig caPool. */
                        public caPool: string;

                        /**
                         * Creates a new CertificateAuthorityServiceConfig instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns CertificateAuthorityServiceConfig instance
                         */
                        public static create(properties?: google.cloud.managedkafka.v1.TrustConfig.ICertificateAuthorityServiceConfig): google.cloud.managedkafka.v1.TrustConfig.CertificateAuthorityServiceConfig;

                        /**
                         * Encodes the specified CertificateAuthorityServiceConfig message. Does not implicitly {@link google.cloud.managedkafka.v1.TrustConfig.CertificateAuthorityServiceConfig.verify|verify} messages.
                         * @param message CertificateAuthorityServiceConfig message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.managedkafka.v1.TrustConfig.ICertificateAuthorityServiceConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified CertificateAuthorityServiceConfig message, length delimited. Does not implicitly {@link google.cloud.managedkafka.v1.TrustConfig.CertificateAuthorityServiceConfig.verify|verify} messages.
                         * @param message CertificateAuthorityServiceConfig message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.managedkafka.v1.TrustConfig.ICertificateAuthorityServiceConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a CertificateAuthorityServiceConfig message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns CertificateAuthorityServiceConfig
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.managedkafka.v1.TrustConfig.CertificateAuthorityServiceConfig;

                        /**
                         * Decodes a CertificateAuthorityServiceConfig message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns CertificateAuthorityServiceConfig
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.managedkafka.v1.TrustConfig.CertificateAuthorityServiceConfig;

                        /**
                         * Verifies a CertificateAuthorityServiceConfig message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a CertificateAuthorityServiceConfig message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns CertificateAuthorityServiceConfig
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.managedkafka.v1.TrustConfig.CertificateAuthorityServiceConfig;

                        /**
                         * Creates a plain object from a CertificateAuthorityServiceConfig message. Also converts values to other types if specified.
                         * @param message CertificateAuthorityServiceConfig
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.managedkafka.v1.TrustConfig.CertificateAuthorityServiceConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this CertificateAuthorityServiceConfig to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for CertificateAuthorityServiceConfig
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }
                }

                /** Properties of a Topic. */
                interface ITopic {

                    /** Topic name */
                    name?: (string|null);

                    /** Topic partitionCount */
                    partitionCount?: (number|null);

                    /** Topic replicationFactor */
                    replicationFactor?: (number|null);

                    /** Topic configs */
                    configs?: ({ [k: string]: string }|null);
                }

                /** Represents a Topic. */
                class Topic implements ITopic {

                    /**
                     * Constructs a new Topic.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.managedkafka.v1.ITopic);

                    /** Topic name. */
                    public name: string;

                    /** Topic partitionCount. */
                    public partitionCount: number;

                    /** Topic replicationFactor. */
                    public replicationFactor: number;

                    /** Topic configs. */
                    public configs: { [k: string]: string };

                    /**
                     * Creates a new Topic instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Topic instance
                     */
                    public static create(properties?: google.cloud.managedkafka.v1.ITopic): google.cloud.managedkafka.v1.Topic;

                    /**
                     * Encodes the specified Topic message. Does not implicitly {@link google.cloud.managedkafka.v1.Topic.verify|verify} messages.
                     * @param message Topic message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.managedkafka.v1.ITopic, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Topic message, length delimited. Does not implicitly {@link google.cloud.managedkafka.v1.Topic.verify|verify} messages.
                     * @param message Topic message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.managedkafka.v1.ITopic, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Topic message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Topic
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.managedkafka.v1.Topic;

                    /**
                     * Decodes a Topic message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Topic
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.managedkafka.v1.Topic;

                    /**
                     * Verifies a Topic message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Topic message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Topic
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.managedkafka.v1.Topic;

                    /**
                     * Creates a plain object from a Topic message. Also converts values to other types if specified.
                     * @param message Topic
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.managedkafka.v1.Topic, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Topic to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Topic
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ConsumerTopicMetadata. */
                interface IConsumerTopicMetadata {

                    /** ConsumerTopicMetadata partitions */
                    partitions?: ({ [k: string]: google.cloud.managedkafka.v1.IConsumerPartitionMetadata }|null);
                }

                /** Represents a ConsumerTopicMetadata. */
                class ConsumerTopicMetadata implements IConsumerTopicMetadata {

                    /**
                     * Constructs a new ConsumerTopicMetadata.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.managedkafka.v1.IConsumerTopicMetadata);

                    /** ConsumerTopicMetadata partitions. */
                    public partitions: { [k: string]: google.cloud.managedkafka.v1.IConsumerPartitionMetadata };

                    /**
                     * Creates a new ConsumerTopicMetadata instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ConsumerTopicMetadata instance
                     */
                    public static create(properties?: google.cloud.managedkafka.v1.IConsumerTopicMetadata): google.cloud.managedkafka.v1.ConsumerTopicMetadata;

                    /**
                     * Encodes the specified ConsumerTopicMetadata message. Does not implicitly {@link google.cloud.managedkafka.v1.ConsumerTopicMetadata.verify|verify} messages.
                     * @param message ConsumerTopicMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.managedkafka.v1.IConsumerTopicMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ConsumerTopicMetadata message, length delimited. Does not implicitly {@link google.cloud.managedkafka.v1.ConsumerTopicMetadata.verify|verify} messages.
                     * @param message ConsumerTopicMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.managedkafka.v1.IConsumerTopicMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ConsumerTopicMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ConsumerTopicMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.managedkafka.v1.ConsumerTopicMetadata;

                    /**
                     * Decodes a ConsumerTopicMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ConsumerTopicMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.managedkafka.v1.ConsumerTopicMetadata;

                    /**
                     * Verifies a ConsumerTopicMetadata message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ConsumerTopicMetadata message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ConsumerTopicMetadata
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.managedkafka.v1.ConsumerTopicMetadata;

                    /**
                     * Creates a plain object from a ConsumerTopicMetadata message. Also converts values to other types if specified.
                     * @param message ConsumerTopicMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.managedkafka.v1.ConsumerTopicMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ConsumerTopicMetadata to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ConsumerTopicMetadata
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ConsumerPartitionMetadata. */
                interface IConsumerPartitionMetadata {

                    /** ConsumerPartitionMetadata offset */
                    offset?: (number|Long|string|null);

                    /** ConsumerPartitionMetadata metadata */
                    metadata?: (string|null);
                }

                /** Represents a ConsumerPartitionMetadata. */
                class ConsumerPartitionMetadata implements IConsumerPartitionMetadata {

                    /**
                     * Constructs a new ConsumerPartitionMetadata.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.managedkafka.v1.IConsumerPartitionMetadata);

                    /** ConsumerPartitionMetadata offset. */
                    public offset: (number|Long|string);

                    /** ConsumerPartitionMetadata metadata. */
                    public metadata: string;

                    /**
                     * Creates a new ConsumerPartitionMetadata instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ConsumerPartitionMetadata instance
                     */
                    public static create(properties?: google.cloud.managedkafka.v1.IConsumerPartitionMetadata): google.cloud.managedkafka.v1.ConsumerPartitionMetadata;

                    /**
                     * Encodes the specified ConsumerPartitionMetadata message. Does not implicitly {@link google.cloud.managedkafka.v1.ConsumerPartitionMetadata.verify|verify} messages.
                     * @param message ConsumerPartitionMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.managedkafka.v1.IConsumerPartitionMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ConsumerPartitionMetadata message, length delimited. Does not implicitly {@link google.cloud.managedkafka.v1.ConsumerPartitionMetadata.verify|verify} messages.
                     * @param message ConsumerPartitionMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.managedkafka.v1.IConsumerPartitionMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ConsumerPartitionMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ConsumerPartitionMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.managedkafka.v1.ConsumerPartitionMetadata;

                    /**
                     * Decodes a ConsumerPartitionMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ConsumerPartitionMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.managedkafka.v1.ConsumerPartitionMetadata;

                    /**
                     * Verifies a ConsumerPartitionMetadata message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ConsumerPartitionMetadata message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ConsumerPartitionMetadata
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.managedkafka.v1.ConsumerPartitionMetadata;

                    /**
                     * Creates a plain object from a ConsumerPartitionMetadata message. Also converts values to other types if specified.
                     * @param message ConsumerPartitionMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.managedkafka.v1.ConsumerPartitionMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ConsumerPartitionMetadata to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ConsumerPartitionMetadata
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ConsumerGroup. */
                interface IConsumerGroup {

                    /** ConsumerGroup name */
                    name?: (string|null);

                    /** ConsumerGroup topics */
                    topics?: ({ [k: string]: google.cloud.managedkafka.v1.IConsumerTopicMetadata }|null);
                }

                /** Represents a ConsumerGroup. */
                class ConsumerGroup implements IConsumerGroup {

                    /**
                     * Constructs a new ConsumerGroup.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.managedkafka.v1.IConsumerGroup);

                    /** ConsumerGroup name. */
                    public name: string;

                    /** ConsumerGroup topics. */
                    public topics: { [k: string]: google.cloud.managedkafka.v1.IConsumerTopicMetadata };

                    /**
                     * Creates a new ConsumerGroup instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ConsumerGroup instance
                     */
                    public static create(properties?: google.cloud.managedkafka.v1.IConsumerGroup): google.cloud.managedkafka.v1.ConsumerGroup;

                    /**
                     * Encodes the specified ConsumerGroup message. Does not implicitly {@link google.cloud.managedkafka.v1.ConsumerGroup.verify|verify} messages.
                     * @param message ConsumerGroup message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.managedkafka.v1.IConsumerGroup, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ConsumerGroup message, length delimited. Does not implicitly {@link google.cloud.managedkafka.v1.ConsumerGroup.verify|verify} messages.
                     * @param message ConsumerGroup message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.managedkafka.v1.IConsumerGroup, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ConsumerGroup message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ConsumerGroup
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.managedkafka.v1.ConsumerGroup;

                    /**
                     * Decodes a ConsumerGroup message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ConsumerGroup
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.managedkafka.v1.ConsumerGroup;

                    /**
                     * Verifies a ConsumerGroup message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ConsumerGroup message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ConsumerGroup
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.managedkafka.v1.ConsumerGroup;

                    /**
                     * Creates a plain object from a ConsumerGroup message. Also converts values to other types if specified.
                     * @param message ConsumerGroup
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.managedkafka.v1.ConsumerGroup, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ConsumerGroup to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ConsumerGroup
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
                    constructor(properties?: google.cloud.managedkafka.v1.IOperationMetadata);

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
                    public static create(properties?: google.cloud.managedkafka.v1.IOperationMetadata): google.cloud.managedkafka.v1.OperationMetadata;

                    /**
                     * Encodes the specified OperationMetadata message. Does not implicitly {@link google.cloud.managedkafka.v1.OperationMetadata.verify|verify} messages.
                     * @param message OperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.managedkafka.v1.IOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified OperationMetadata message, length delimited. Does not implicitly {@link google.cloud.managedkafka.v1.OperationMetadata.verify|verify} messages.
                     * @param message OperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.managedkafka.v1.IOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an OperationMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns OperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.managedkafka.v1.OperationMetadata;

                    /**
                     * Decodes an OperationMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns OperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.managedkafka.v1.OperationMetadata;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.managedkafka.v1.OperationMetadata;

                    /**
                     * Creates a plain object from an OperationMetadata message. Also converts values to other types if specified.
                     * @param message OperationMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.managedkafka.v1.OperationMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

                /** Properties of a ConnectCluster. */
                interface IConnectCluster {

                    /** ConnectCluster gcpConfig */
                    gcpConfig?: (google.cloud.managedkafka.v1.IConnectGcpConfig|null);

                    /** ConnectCluster name */
                    name?: (string|null);

                    /** ConnectCluster kafkaCluster */
                    kafkaCluster?: (string|null);

                    /** ConnectCluster createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** ConnectCluster updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** ConnectCluster labels */
                    labels?: ({ [k: string]: string }|null);

                    /** ConnectCluster capacityConfig */
                    capacityConfig?: (google.cloud.managedkafka.v1.ICapacityConfig|null);

                    /** ConnectCluster state */
                    state?: (google.cloud.managedkafka.v1.ConnectCluster.State|keyof typeof google.cloud.managedkafka.v1.ConnectCluster.State|null);

                    /** ConnectCluster config */
                    config?: ({ [k: string]: string }|null);
                }

                /** Represents a ConnectCluster. */
                class ConnectCluster implements IConnectCluster {

                    /**
                     * Constructs a new ConnectCluster.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.managedkafka.v1.IConnectCluster);

                    /** ConnectCluster gcpConfig. */
                    public gcpConfig?: (google.cloud.managedkafka.v1.IConnectGcpConfig|null);

                    /** ConnectCluster name. */
                    public name: string;

                    /** ConnectCluster kafkaCluster. */
                    public kafkaCluster: string;

                    /** ConnectCluster createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** ConnectCluster updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** ConnectCluster labels. */
                    public labels: { [k: string]: string };

                    /** ConnectCluster capacityConfig. */
                    public capacityConfig?: (google.cloud.managedkafka.v1.ICapacityConfig|null);

                    /** ConnectCluster state. */
                    public state: (google.cloud.managedkafka.v1.ConnectCluster.State|keyof typeof google.cloud.managedkafka.v1.ConnectCluster.State);

                    /** ConnectCluster config. */
                    public config: { [k: string]: string };

                    /** ConnectCluster platformConfig. */
                    public platformConfig?: "gcpConfig";

                    /**
                     * Creates a new ConnectCluster instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ConnectCluster instance
                     */
                    public static create(properties?: google.cloud.managedkafka.v1.IConnectCluster): google.cloud.managedkafka.v1.ConnectCluster;

                    /**
                     * Encodes the specified ConnectCluster message. Does not implicitly {@link google.cloud.managedkafka.v1.ConnectCluster.verify|verify} messages.
                     * @param message ConnectCluster message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.managedkafka.v1.IConnectCluster, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ConnectCluster message, length delimited. Does not implicitly {@link google.cloud.managedkafka.v1.ConnectCluster.verify|verify} messages.
                     * @param message ConnectCluster message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.managedkafka.v1.IConnectCluster, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ConnectCluster message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ConnectCluster
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.managedkafka.v1.ConnectCluster;

                    /**
                     * Decodes a ConnectCluster message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ConnectCluster
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.managedkafka.v1.ConnectCluster;

                    /**
                     * Verifies a ConnectCluster message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ConnectCluster message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ConnectCluster
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.managedkafka.v1.ConnectCluster;

                    /**
                     * Creates a plain object from a ConnectCluster message. Also converts values to other types if specified.
                     * @param message ConnectCluster
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.managedkafka.v1.ConnectCluster, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ConnectCluster to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ConnectCluster
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace ConnectCluster {

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        CREATING = 1,
                        ACTIVE = 2,
                        DELETING = 3
                    }
                }

                /** Properties of a ConnectNetworkConfig. */
                interface IConnectNetworkConfig {

                    /** ConnectNetworkConfig primarySubnet */
                    primarySubnet?: (string|null);

                    /** ConnectNetworkConfig additionalSubnets */
                    additionalSubnets?: (string[]|null);

                    /** ConnectNetworkConfig dnsDomainNames */
                    dnsDomainNames?: (string[]|null);
                }

                /** Represents a ConnectNetworkConfig. */
                class ConnectNetworkConfig implements IConnectNetworkConfig {

                    /**
                     * Constructs a new ConnectNetworkConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.managedkafka.v1.IConnectNetworkConfig);

                    /** ConnectNetworkConfig primarySubnet. */
                    public primarySubnet: string;

                    /** ConnectNetworkConfig additionalSubnets. */
                    public additionalSubnets: string[];

                    /** ConnectNetworkConfig dnsDomainNames. */
                    public dnsDomainNames: string[];

                    /**
                     * Creates a new ConnectNetworkConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ConnectNetworkConfig instance
                     */
                    public static create(properties?: google.cloud.managedkafka.v1.IConnectNetworkConfig): google.cloud.managedkafka.v1.ConnectNetworkConfig;

                    /**
                     * Encodes the specified ConnectNetworkConfig message. Does not implicitly {@link google.cloud.managedkafka.v1.ConnectNetworkConfig.verify|verify} messages.
                     * @param message ConnectNetworkConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.managedkafka.v1.IConnectNetworkConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ConnectNetworkConfig message, length delimited. Does not implicitly {@link google.cloud.managedkafka.v1.ConnectNetworkConfig.verify|verify} messages.
                     * @param message ConnectNetworkConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.managedkafka.v1.IConnectNetworkConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ConnectNetworkConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ConnectNetworkConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.managedkafka.v1.ConnectNetworkConfig;

                    /**
                     * Decodes a ConnectNetworkConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ConnectNetworkConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.managedkafka.v1.ConnectNetworkConfig;

                    /**
                     * Verifies a ConnectNetworkConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ConnectNetworkConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ConnectNetworkConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.managedkafka.v1.ConnectNetworkConfig;

                    /**
                     * Creates a plain object from a ConnectNetworkConfig message. Also converts values to other types if specified.
                     * @param message ConnectNetworkConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.managedkafka.v1.ConnectNetworkConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ConnectNetworkConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ConnectNetworkConfig
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ConnectAccessConfig. */
                interface IConnectAccessConfig {

                    /** ConnectAccessConfig networkConfigs */
                    networkConfigs?: (google.cloud.managedkafka.v1.IConnectNetworkConfig[]|null);
                }

                /** Represents a ConnectAccessConfig. */
                class ConnectAccessConfig implements IConnectAccessConfig {

                    /**
                     * Constructs a new ConnectAccessConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.managedkafka.v1.IConnectAccessConfig);

                    /** ConnectAccessConfig networkConfigs. */
                    public networkConfigs: google.cloud.managedkafka.v1.IConnectNetworkConfig[];

                    /**
                     * Creates a new ConnectAccessConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ConnectAccessConfig instance
                     */
                    public static create(properties?: google.cloud.managedkafka.v1.IConnectAccessConfig): google.cloud.managedkafka.v1.ConnectAccessConfig;

                    /**
                     * Encodes the specified ConnectAccessConfig message. Does not implicitly {@link google.cloud.managedkafka.v1.ConnectAccessConfig.verify|verify} messages.
                     * @param message ConnectAccessConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.managedkafka.v1.IConnectAccessConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ConnectAccessConfig message, length delimited. Does not implicitly {@link google.cloud.managedkafka.v1.ConnectAccessConfig.verify|verify} messages.
                     * @param message ConnectAccessConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.managedkafka.v1.IConnectAccessConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ConnectAccessConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ConnectAccessConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.managedkafka.v1.ConnectAccessConfig;

                    /**
                     * Decodes a ConnectAccessConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ConnectAccessConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.managedkafka.v1.ConnectAccessConfig;

                    /**
                     * Verifies a ConnectAccessConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ConnectAccessConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ConnectAccessConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.managedkafka.v1.ConnectAccessConfig;

                    /**
                     * Creates a plain object from a ConnectAccessConfig message. Also converts values to other types if specified.
                     * @param message ConnectAccessConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.managedkafka.v1.ConnectAccessConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ConnectAccessConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ConnectAccessConfig
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ConnectGcpConfig. */
                interface IConnectGcpConfig {

                    /** ConnectGcpConfig accessConfig */
                    accessConfig?: (google.cloud.managedkafka.v1.IConnectAccessConfig|null);

                    /** ConnectGcpConfig secretPaths */
                    secretPaths?: (string[]|null);
                }

                /** Represents a ConnectGcpConfig. */
                class ConnectGcpConfig implements IConnectGcpConfig {

                    /**
                     * Constructs a new ConnectGcpConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.managedkafka.v1.IConnectGcpConfig);

                    /** ConnectGcpConfig accessConfig. */
                    public accessConfig?: (google.cloud.managedkafka.v1.IConnectAccessConfig|null);

                    /** ConnectGcpConfig secretPaths. */
                    public secretPaths: string[];

                    /**
                     * Creates a new ConnectGcpConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ConnectGcpConfig instance
                     */
                    public static create(properties?: google.cloud.managedkafka.v1.IConnectGcpConfig): google.cloud.managedkafka.v1.ConnectGcpConfig;

                    /**
                     * Encodes the specified ConnectGcpConfig message. Does not implicitly {@link google.cloud.managedkafka.v1.ConnectGcpConfig.verify|verify} messages.
                     * @param message ConnectGcpConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.managedkafka.v1.IConnectGcpConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ConnectGcpConfig message, length delimited. Does not implicitly {@link google.cloud.managedkafka.v1.ConnectGcpConfig.verify|verify} messages.
                     * @param message ConnectGcpConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.managedkafka.v1.IConnectGcpConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ConnectGcpConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ConnectGcpConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.managedkafka.v1.ConnectGcpConfig;

                    /**
                     * Decodes a ConnectGcpConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ConnectGcpConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.managedkafka.v1.ConnectGcpConfig;

                    /**
                     * Verifies a ConnectGcpConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ConnectGcpConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ConnectGcpConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.managedkafka.v1.ConnectGcpConfig;

                    /**
                     * Creates a plain object from a ConnectGcpConfig message. Also converts values to other types if specified.
                     * @param message ConnectGcpConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.managedkafka.v1.ConnectGcpConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ConnectGcpConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ConnectGcpConfig
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Connector. */
                interface IConnector {

                    /** Connector taskRestartPolicy */
                    taskRestartPolicy?: (google.cloud.managedkafka.v1.ITaskRetryPolicy|null);

                    /** Connector name */
                    name?: (string|null);

                    /** Connector configs */
                    configs?: ({ [k: string]: string }|null);

                    /** Connector state */
                    state?: (google.cloud.managedkafka.v1.Connector.State|keyof typeof google.cloud.managedkafka.v1.Connector.State|null);
                }

                /** Represents a Connector. */
                class Connector implements IConnector {

                    /**
                     * Constructs a new Connector.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.managedkafka.v1.IConnector);

                    /** Connector taskRestartPolicy. */
                    public taskRestartPolicy?: (google.cloud.managedkafka.v1.ITaskRetryPolicy|null);

                    /** Connector name. */
                    public name: string;

                    /** Connector configs. */
                    public configs: { [k: string]: string };

                    /** Connector state. */
                    public state: (google.cloud.managedkafka.v1.Connector.State|keyof typeof google.cloud.managedkafka.v1.Connector.State);

                    /** Connector restartPolicy. */
                    public restartPolicy?: "taskRestartPolicy";

                    /**
                     * Creates a new Connector instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Connector instance
                     */
                    public static create(properties?: google.cloud.managedkafka.v1.IConnector): google.cloud.managedkafka.v1.Connector;

                    /**
                     * Encodes the specified Connector message. Does not implicitly {@link google.cloud.managedkafka.v1.Connector.verify|verify} messages.
                     * @param message Connector message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.managedkafka.v1.IConnector, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Connector message, length delimited. Does not implicitly {@link google.cloud.managedkafka.v1.Connector.verify|verify} messages.
                     * @param message Connector message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.managedkafka.v1.IConnector, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Connector message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Connector
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.managedkafka.v1.Connector;

                    /**
                     * Decodes a Connector message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Connector
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.managedkafka.v1.Connector;

                    /**
                     * Verifies a Connector message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Connector message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Connector
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.managedkafka.v1.Connector;

                    /**
                     * Creates a plain object from a Connector message. Also converts values to other types if specified.
                     * @param message Connector
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.managedkafka.v1.Connector, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Connector to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Connector
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace Connector {

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        UNASSIGNED = 1,
                        RUNNING = 2,
                        PAUSED = 3,
                        FAILED = 4,
                        RESTARTING = 5,
                        STOPPED = 6
                    }
                }

                /** Properties of a TaskRetryPolicy. */
                interface ITaskRetryPolicy {

                    /** TaskRetryPolicy minimumBackoff */
                    minimumBackoff?: (google.protobuf.IDuration|null);

                    /** TaskRetryPolicy maximumBackoff */
                    maximumBackoff?: (google.protobuf.IDuration|null);
                }

                /** Represents a TaskRetryPolicy. */
                class TaskRetryPolicy implements ITaskRetryPolicy {

                    /**
                     * Constructs a new TaskRetryPolicy.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.managedkafka.v1.ITaskRetryPolicy);

                    /** TaskRetryPolicy minimumBackoff. */
                    public minimumBackoff?: (google.protobuf.IDuration|null);

                    /** TaskRetryPolicy maximumBackoff. */
                    public maximumBackoff?: (google.protobuf.IDuration|null);

                    /**
                     * Creates a new TaskRetryPolicy instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TaskRetryPolicy instance
                     */
                    public static create(properties?: google.cloud.managedkafka.v1.ITaskRetryPolicy): google.cloud.managedkafka.v1.TaskRetryPolicy;

                    /**
                     * Encodes the specified TaskRetryPolicy message. Does not implicitly {@link google.cloud.managedkafka.v1.TaskRetryPolicy.verify|verify} messages.
                     * @param message TaskRetryPolicy message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.managedkafka.v1.ITaskRetryPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TaskRetryPolicy message, length delimited. Does not implicitly {@link google.cloud.managedkafka.v1.TaskRetryPolicy.verify|verify} messages.
                     * @param message TaskRetryPolicy message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.managedkafka.v1.ITaskRetryPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TaskRetryPolicy message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TaskRetryPolicy
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.managedkafka.v1.TaskRetryPolicy;

                    /**
                     * Decodes a TaskRetryPolicy message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TaskRetryPolicy
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.managedkafka.v1.TaskRetryPolicy;

                    /**
                     * Verifies a TaskRetryPolicy message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TaskRetryPolicy message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TaskRetryPolicy
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.managedkafka.v1.TaskRetryPolicy;

                    /**
                     * Creates a plain object from a TaskRetryPolicy message. Also converts values to other types if specified.
                     * @param message TaskRetryPolicy
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.managedkafka.v1.TaskRetryPolicy, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TaskRetryPolicy to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for TaskRetryPolicy
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an Acl. */
                interface IAcl {

                    /** Acl name */
                    name?: (string|null);

                    /** Acl aclEntries */
                    aclEntries?: (google.cloud.managedkafka.v1.IAclEntry[]|null);

                    /** Acl etag */
                    etag?: (string|null);

                    /** Acl resourceType */
                    resourceType?: (string|null);

                    /** Acl resourceName */
                    resourceName?: (string|null);

                    /** Acl patternType */
                    patternType?: (string|null);
                }

                /** Represents an Acl. */
                class Acl implements IAcl {

                    /**
                     * Constructs a new Acl.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.managedkafka.v1.IAcl);

                    /** Acl name. */
                    public name: string;

                    /** Acl aclEntries. */
                    public aclEntries: google.cloud.managedkafka.v1.IAclEntry[];

                    /** Acl etag. */
                    public etag: string;

                    /** Acl resourceType. */
                    public resourceType: string;

                    /** Acl resourceName. */
                    public resourceName: string;

                    /** Acl patternType. */
                    public patternType: string;

                    /**
                     * Creates a new Acl instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Acl instance
                     */
                    public static create(properties?: google.cloud.managedkafka.v1.IAcl): google.cloud.managedkafka.v1.Acl;

                    /**
                     * Encodes the specified Acl message. Does not implicitly {@link google.cloud.managedkafka.v1.Acl.verify|verify} messages.
                     * @param message Acl message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.managedkafka.v1.IAcl, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Acl message, length delimited. Does not implicitly {@link google.cloud.managedkafka.v1.Acl.verify|verify} messages.
                     * @param message Acl message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.managedkafka.v1.IAcl, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an Acl message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Acl
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.managedkafka.v1.Acl;

                    /**
                     * Decodes an Acl message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Acl
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.managedkafka.v1.Acl;

                    /**
                     * Verifies an Acl message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an Acl message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Acl
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.managedkafka.v1.Acl;

                    /**
                     * Creates a plain object from an Acl message. Also converts values to other types if specified.
                     * @param message Acl
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.managedkafka.v1.Acl, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Acl to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Acl
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an AclEntry. */
                interface IAclEntry {

                    /** AclEntry principal */
                    principal?: (string|null);

                    /** AclEntry permissionType */
                    permissionType?: (string|null);

                    /** AclEntry operation */
                    operation?: (string|null);

                    /** AclEntry host */
                    host?: (string|null);
                }

                /** Represents an AclEntry. */
                class AclEntry implements IAclEntry {

                    /**
                     * Constructs a new AclEntry.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.managedkafka.v1.IAclEntry);

                    /** AclEntry principal. */
                    public principal: string;

                    /** AclEntry permissionType. */
                    public permissionType: string;

                    /** AclEntry operation. */
                    public operation: string;

                    /** AclEntry host. */
                    public host: string;

                    /**
                     * Creates a new AclEntry instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AclEntry instance
                     */
                    public static create(properties?: google.cloud.managedkafka.v1.IAclEntry): google.cloud.managedkafka.v1.AclEntry;

                    /**
                     * Encodes the specified AclEntry message. Does not implicitly {@link google.cloud.managedkafka.v1.AclEntry.verify|verify} messages.
                     * @param message AclEntry message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.managedkafka.v1.IAclEntry, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AclEntry message, length delimited. Does not implicitly {@link google.cloud.managedkafka.v1.AclEntry.verify|verify} messages.
                     * @param message AclEntry message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.managedkafka.v1.IAclEntry, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AclEntry message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AclEntry
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.managedkafka.v1.AclEntry;

                    /**
                     * Decodes an AclEntry message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AclEntry
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.managedkafka.v1.AclEntry;

                    /**
                     * Verifies an AclEntry message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AclEntry message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AclEntry
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.managedkafka.v1.AclEntry;

                    /**
                     * Creates a plain object from an AclEntry message. Also converts values to other types if specified.
                     * @param message AclEntry
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.managedkafka.v1.AclEntry, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AclEntry to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for AclEntry
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Represents a ManagedKafkaConnect */
                class ManagedKafkaConnect extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new ManagedKafkaConnect service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new ManagedKafkaConnect service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): ManagedKafkaConnect;

                    /**
                     * Calls ListConnectClusters.
                     * @param request ListConnectClustersRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListConnectClustersResponse
                     */
                    public listConnectClusters(request: google.cloud.managedkafka.v1.IListConnectClustersRequest, callback: google.cloud.managedkafka.v1.ManagedKafkaConnect.ListConnectClustersCallback): void;

                    /**
                     * Calls ListConnectClusters.
                     * @param request ListConnectClustersRequest message or plain object
                     * @returns Promise
                     */
                    public listConnectClusters(request: google.cloud.managedkafka.v1.IListConnectClustersRequest): Promise<google.cloud.managedkafka.v1.ListConnectClustersResponse>;

                    /**
                     * Calls GetConnectCluster.
                     * @param request GetConnectClusterRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ConnectCluster
                     */
                    public getConnectCluster(request: google.cloud.managedkafka.v1.IGetConnectClusterRequest, callback: google.cloud.managedkafka.v1.ManagedKafkaConnect.GetConnectClusterCallback): void;

                    /**
                     * Calls GetConnectCluster.
                     * @param request GetConnectClusterRequest message or plain object
                     * @returns Promise
                     */
                    public getConnectCluster(request: google.cloud.managedkafka.v1.IGetConnectClusterRequest): Promise<google.cloud.managedkafka.v1.ConnectCluster>;

                    /**
                     * Calls CreateConnectCluster.
                     * @param request CreateConnectClusterRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createConnectCluster(request: google.cloud.managedkafka.v1.ICreateConnectClusterRequest, callback: google.cloud.managedkafka.v1.ManagedKafkaConnect.CreateConnectClusterCallback): void;

                    /**
                     * Calls CreateConnectCluster.
                     * @param request CreateConnectClusterRequest message or plain object
                     * @returns Promise
                     */
                    public createConnectCluster(request: google.cloud.managedkafka.v1.ICreateConnectClusterRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls UpdateConnectCluster.
                     * @param request UpdateConnectClusterRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public updateConnectCluster(request: google.cloud.managedkafka.v1.IUpdateConnectClusterRequest, callback: google.cloud.managedkafka.v1.ManagedKafkaConnect.UpdateConnectClusterCallback): void;

                    /**
                     * Calls UpdateConnectCluster.
                     * @param request UpdateConnectClusterRequest message or plain object
                     * @returns Promise
                     */
                    public updateConnectCluster(request: google.cloud.managedkafka.v1.IUpdateConnectClusterRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls DeleteConnectCluster.
                     * @param request DeleteConnectClusterRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deleteConnectCluster(request: google.cloud.managedkafka.v1.IDeleteConnectClusterRequest, callback: google.cloud.managedkafka.v1.ManagedKafkaConnect.DeleteConnectClusterCallback): void;

                    /**
                     * Calls DeleteConnectCluster.
                     * @param request DeleteConnectClusterRequest message or plain object
                     * @returns Promise
                     */
                    public deleteConnectCluster(request: google.cloud.managedkafka.v1.IDeleteConnectClusterRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ListConnectors.
                     * @param request ListConnectorsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListConnectorsResponse
                     */
                    public listConnectors(request: google.cloud.managedkafka.v1.IListConnectorsRequest, callback: google.cloud.managedkafka.v1.ManagedKafkaConnect.ListConnectorsCallback): void;

                    /**
                     * Calls ListConnectors.
                     * @param request ListConnectorsRequest message or plain object
                     * @returns Promise
                     */
                    public listConnectors(request: google.cloud.managedkafka.v1.IListConnectorsRequest): Promise<google.cloud.managedkafka.v1.ListConnectorsResponse>;

                    /**
                     * Calls GetConnector.
                     * @param request GetConnectorRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Connector
                     */
                    public getConnector(request: google.cloud.managedkafka.v1.IGetConnectorRequest, callback: google.cloud.managedkafka.v1.ManagedKafkaConnect.GetConnectorCallback): void;

                    /**
                     * Calls GetConnector.
                     * @param request GetConnectorRequest message or plain object
                     * @returns Promise
                     */
                    public getConnector(request: google.cloud.managedkafka.v1.IGetConnectorRequest): Promise<google.cloud.managedkafka.v1.Connector>;

                    /**
                     * Calls CreateConnector.
                     * @param request CreateConnectorRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Connector
                     */
                    public createConnector(request: google.cloud.managedkafka.v1.ICreateConnectorRequest, callback: google.cloud.managedkafka.v1.ManagedKafkaConnect.CreateConnectorCallback): void;

                    /**
                     * Calls CreateConnector.
                     * @param request CreateConnectorRequest message or plain object
                     * @returns Promise
                     */
                    public createConnector(request: google.cloud.managedkafka.v1.ICreateConnectorRequest): Promise<google.cloud.managedkafka.v1.Connector>;

                    /**
                     * Calls UpdateConnector.
                     * @param request UpdateConnectorRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Connector
                     */
                    public updateConnector(request: google.cloud.managedkafka.v1.IUpdateConnectorRequest, callback: google.cloud.managedkafka.v1.ManagedKafkaConnect.UpdateConnectorCallback): void;

                    /**
                     * Calls UpdateConnector.
                     * @param request UpdateConnectorRequest message or plain object
                     * @returns Promise
                     */
                    public updateConnector(request: google.cloud.managedkafka.v1.IUpdateConnectorRequest): Promise<google.cloud.managedkafka.v1.Connector>;

                    /**
                     * Calls DeleteConnector.
                     * @param request DeleteConnectorRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Empty
                     */
                    public deleteConnector(request: google.cloud.managedkafka.v1.IDeleteConnectorRequest, callback: google.cloud.managedkafka.v1.ManagedKafkaConnect.DeleteConnectorCallback): void;

                    /**
                     * Calls DeleteConnector.
                     * @param request DeleteConnectorRequest message or plain object
                     * @returns Promise
                     */
                    public deleteConnector(request: google.cloud.managedkafka.v1.IDeleteConnectorRequest): Promise<google.protobuf.Empty>;

                    /**
                     * Calls PauseConnector.
                     * @param request PauseConnectorRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and PauseConnectorResponse
                     */
                    public pauseConnector(request: google.cloud.managedkafka.v1.IPauseConnectorRequest, callback: google.cloud.managedkafka.v1.ManagedKafkaConnect.PauseConnectorCallback): void;

                    /**
                     * Calls PauseConnector.
                     * @param request PauseConnectorRequest message or plain object
                     * @returns Promise
                     */
                    public pauseConnector(request: google.cloud.managedkafka.v1.IPauseConnectorRequest): Promise<google.cloud.managedkafka.v1.PauseConnectorResponse>;

                    /**
                     * Calls ResumeConnector.
                     * @param request ResumeConnectorRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ResumeConnectorResponse
                     */
                    public resumeConnector(request: google.cloud.managedkafka.v1.IResumeConnectorRequest, callback: google.cloud.managedkafka.v1.ManagedKafkaConnect.ResumeConnectorCallback): void;

                    /**
                     * Calls ResumeConnector.
                     * @param request ResumeConnectorRequest message or plain object
                     * @returns Promise
                     */
                    public resumeConnector(request: google.cloud.managedkafka.v1.IResumeConnectorRequest): Promise<google.cloud.managedkafka.v1.ResumeConnectorResponse>;

                    /**
                     * Calls RestartConnector.
                     * @param request RestartConnectorRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and RestartConnectorResponse
                     */
                    public restartConnector(request: google.cloud.managedkafka.v1.IRestartConnectorRequest, callback: google.cloud.managedkafka.v1.ManagedKafkaConnect.RestartConnectorCallback): void;

                    /**
                     * Calls RestartConnector.
                     * @param request RestartConnectorRequest message or plain object
                     * @returns Promise
                     */
                    public restartConnector(request: google.cloud.managedkafka.v1.IRestartConnectorRequest): Promise<google.cloud.managedkafka.v1.RestartConnectorResponse>;

                    /**
                     * Calls StopConnector.
                     * @param request StopConnectorRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and StopConnectorResponse
                     */
                    public stopConnector(request: google.cloud.managedkafka.v1.IStopConnectorRequest, callback: google.cloud.managedkafka.v1.ManagedKafkaConnect.StopConnectorCallback): void;

                    /**
                     * Calls StopConnector.
                     * @param request StopConnectorRequest message or plain object
                     * @returns Promise
                     */
                    public stopConnector(request: google.cloud.managedkafka.v1.IStopConnectorRequest): Promise<google.cloud.managedkafka.v1.StopConnectorResponse>;
                }

                namespace ManagedKafkaConnect {

                    /**
                     * Callback as used by {@link google.cloud.managedkafka.v1.ManagedKafkaConnect|listConnectClusters}.
                     * @param error Error, if any
                     * @param [response] ListConnectClustersResponse
                     */
                    type ListConnectClustersCallback = (error: (Error|null), response?: google.cloud.managedkafka.v1.ListConnectClustersResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.managedkafka.v1.ManagedKafkaConnect|getConnectCluster}.
                     * @param error Error, if any
                     * @param [response] ConnectCluster
                     */
                    type GetConnectClusterCallback = (error: (Error|null), response?: google.cloud.managedkafka.v1.ConnectCluster) => void;

                    /**
                     * Callback as used by {@link google.cloud.managedkafka.v1.ManagedKafkaConnect|createConnectCluster}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateConnectClusterCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.managedkafka.v1.ManagedKafkaConnect|updateConnectCluster}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type UpdateConnectClusterCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.managedkafka.v1.ManagedKafkaConnect|deleteConnectCluster}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeleteConnectClusterCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.managedkafka.v1.ManagedKafkaConnect|listConnectors}.
                     * @param error Error, if any
                     * @param [response] ListConnectorsResponse
                     */
                    type ListConnectorsCallback = (error: (Error|null), response?: google.cloud.managedkafka.v1.ListConnectorsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.managedkafka.v1.ManagedKafkaConnect|getConnector}.
                     * @param error Error, if any
                     * @param [response] Connector
                     */
                    type GetConnectorCallback = (error: (Error|null), response?: google.cloud.managedkafka.v1.Connector) => void;

                    /**
                     * Callback as used by {@link google.cloud.managedkafka.v1.ManagedKafkaConnect|createConnector}.
                     * @param error Error, if any
                     * @param [response] Connector
                     */
                    type CreateConnectorCallback = (error: (Error|null), response?: google.cloud.managedkafka.v1.Connector) => void;

                    /**
                     * Callback as used by {@link google.cloud.managedkafka.v1.ManagedKafkaConnect|updateConnector}.
                     * @param error Error, if any
                     * @param [response] Connector
                     */
                    type UpdateConnectorCallback = (error: (Error|null), response?: google.cloud.managedkafka.v1.Connector) => void;

                    /**
                     * Callback as used by {@link google.cloud.managedkafka.v1.ManagedKafkaConnect|deleteConnector}.
                     * @param error Error, if any
                     * @param [response] Empty
                     */
                    type DeleteConnectorCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                    /**
                     * Callback as used by {@link google.cloud.managedkafka.v1.ManagedKafkaConnect|pauseConnector}.
                     * @param error Error, if any
                     * @param [response] PauseConnectorResponse
                     */
                    type PauseConnectorCallback = (error: (Error|null), response?: google.cloud.managedkafka.v1.PauseConnectorResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.managedkafka.v1.ManagedKafkaConnect|resumeConnector}.
                     * @param error Error, if any
                     * @param [response] ResumeConnectorResponse
                     */
                    type ResumeConnectorCallback = (error: (Error|null), response?: google.cloud.managedkafka.v1.ResumeConnectorResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.managedkafka.v1.ManagedKafkaConnect|restartConnector}.
                     * @param error Error, if any
                     * @param [response] RestartConnectorResponse
                     */
                    type RestartConnectorCallback = (error: (Error|null), response?: google.cloud.managedkafka.v1.RestartConnectorResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.managedkafka.v1.ManagedKafkaConnect|stopConnector}.
                     * @param error Error, if any
                     * @param [response] StopConnectorResponse
                     */
                    type StopConnectorCallback = (error: (Error|null), response?: google.cloud.managedkafka.v1.StopConnectorResponse) => void;
                }

                /** Properties of a GetConnectClusterRequest. */
                interface IGetConnectClusterRequest {

                    /** GetConnectClusterRequest name */
                    name?: (string|null);
                }

                /** Represents a GetConnectClusterRequest. */
                class GetConnectClusterRequest implements IGetConnectClusterRequest {

                    /**
                     * Constructs a new GetConnectClusterRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.managedkafka.v1.IGetConnectClusterRequest);

                    /** GetConnectClusterRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetConnectClusterRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetConnectClusterRequest instance
                     */
                    public static create(properties?: google.cloud.managedkafka.v1.IGetConnectClusterRequest): google.cloud.managedkafka.v1.GetConnectClusterRequest;

                    /**
                     * Encodes the specified GetConnectClusterRequest message. Does not implicitly {@link google.cloud.managedkafka.v1.GetConnectClusterRequest.verify|verify} messages.
                     * @param message GetConnectClusterRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.managedkafka.v1.IGetConnectClusterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetConnectClusterRequest message, length delimited. Does not implicitly {@link google.cloud.managedkafka.v1.GetConnectClusterRequest.verify|verify} messages.
                     * @param message GetConnectClusterRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.managedkafka.v1.IGetConnectClusterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetConnectClusterRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetConnectClusterRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.managedkafka.v1.GetConnectClusterRequest;

                    /**
                     * Decodes a GetConnectClusterRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetConnectClusterRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.managedkafka.v1.GetConnectClusterRequest;

                    /**
                     * Verifies a GetConnectClusterRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetConnectClusterRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetConnectClusterRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.managedkafka.v1.GetConnectClusterRequest;

                    /**
                     * Creates a plain object from a GetConnectClusterRequest message. Also converts values to other types if specified.
                     * @param message GetConnectClusterRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.managedkafka.v1.GetConnectClusterRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetConnectClusterRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetConnectClusterRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CreateConnectClusterRequest. */
                interface ICreateConnectClusterRequest {

                    /** CreateConnectClusterRequest parent */
                    parent?: (string|null);

                    /** CreateConnectClusterRequest connectClusterId */
                    connectClusterId?: (string|null);

                    /** CreateConnectClusterRequest connectCluster */
                    connectCluster?: (google.cloud.managedkafka.v1.IConnectCluster|null);

                    /** CreateConnectClusterRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents a CreateConnectClusterRequest. */
                class CreateConnectClusterRequest implements ICreateConnectClusterRequest {

                    /**
                     * Constructs a new CreateConnectClusterRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.managedkafka.v1.ICreateConnectClusterRequest);

                    /** CreateConnectClusterRequest parent. */
                    public parent: string;

                    /** CreateConnectClusterRequest connectClusterId. */
                    public connectClusterId: string;

                    /** CreateConnectClusterRequest connectCluster. */
                    public connectCluster?: (google.cloud.managedkafka.v1.IConnectCluster|null);

                    /** CreateConnectClusterRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new CreateConnectClusterRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateConnectClusterRequest instance
                     */
                    public static create(properties?: google.cloud.managedkafka.v1.ICreateConnectClusterRequest): google.cloud.managedkafka.v1.CreateConnectClusterRequest;

                    /**
                     * Encodes the specified CreateConnectClusterRequest message. Does not implicitly {@link google.cloud.managedkafka.v1.CreateConnectClusterRequest.verify|verify} messages.
                     * @param message CreateConnectClusterRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.managedkafka.v1.ICreateConnectClusterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateConnectClusterRequest message, length delimited. Does not implicitly {@link google.cloud.managedkafka.v1.CreateConnectClusterRequest.verify|verify} messages.
                     * @param message CreateConnectClusterRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.managedkafka.v1.ICreateConnectClusterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateConnectClusterRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateConnectClusterRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.managedkafka.v1.CreateConnectClusterRequest;

                    /**
                     * Decodes a CreateConnectClusterRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateConnectClusterRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.managedkafka.v1.CreateConnectClusterRequest;

                    /**
                     * Verifies a CreateConnectClusterRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateConnectClusterRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateConnectClusterRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.managedkafka.v1.CreateConnectClusterRequest;

                    /**
                     * Creates a plain object from a CreateConnectClusterRequest message. Also converts values to other types if specified.
                     * @param message CreateConnectClusterRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.managedkafka.v1.CreateConnectClusterRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateConnectClusterRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateConnectClusterRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpdateConnectClusterRequest. */
                interface IUpdateConnectClusterRequest {

                    /** UpdateConnectClusterRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateConnectClusterRequest connectCluster */
                    connectCluster?: (google.cloud.managedkafka.v1.IConnectCluster|null);

                    /** UpdateConnectClusterRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents an UpdateConnectClusterRequest. */
                class UpdateConnectClusterRequest implements IUpdateConnectClusterRequest {

                    /**
                     * Constructs a new UpdateConnectClusterRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.managedkafka.v1.IUpdateConnectClusterRequest);

                    /** UpdateConnectClusterRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateConnectClusterRequest connectCluster. */
                    public connectCluster?: (google.cloud.managedkafka.v1.IConnectCluster|null);

                    /** UpdateConnectClusterRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new UpdateConnectClusterRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateConnectClusterRequest instance
                     */
                    public static create(properties?: google.cloud.managedkafka.v1.IUpdateConnectClusterRequest): google.cloud.managedkafka.v1.UpdateConnectClusterRequest;

                    /**
                     * Encodes the specified UpdateConnectClusterRequest message. Does not implicitly {@link google.cloud.managedkafka.v1.UpdateConnectClusterRequest.verify|verify} messages.
                     * @param message UpdateConnectClusterRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.managedkafka.v1.IUpdateConnectClusterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateConnectClusterRequest message, length delimited. Does not implicitly {@link google.cloud.managedkafka.v1.UpdateConnectClusterRequest.verify|verify} messages.
                     * @param message UpdateConnectClusterRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.managedkafka.v1.IUpdateConnectClusterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateConnectClusterRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateConnectClusterRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.managedkafka.v1.UpdateConnectClusterRequest;

                    /**
                     * Decodes an UpdateConnectClusterRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateConnectClusterRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.managedkafka.v1.UpdateConnectClusterRequest;

                    /**
                     * Verifies an UpdateConnectClusterRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateConnectClusterRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateConnectClusterRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.managedkafka.v1.UpdateConnectClusterRequest;

                    /**
                     * Creates a plain object from an UpdateConnectClusterRequest message. Also converts values to other types if specified.
                     * @param message UpdateConnectClusterRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.managedkafka.v1.UpdateConnectClusterRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateConnectClusterRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdateConnectClusterRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeleteConnectClusterRequest. */
                interface IDeleteConnectClusterRequest {

                    /** DeleteConnectClusterRequest name */
                    name?: (string|null);

                    /** DeleteConnectClusterRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents a DeleteConnectClusterRequest. */
                class DeleteConnectClusterRequest implements IDeleteConnectClusterRequest {

                    /**
                     * Constructs a new DeleteConnectClusterRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.managedkafka.v1.IDeleteConnectClusterRequest);

                    /** DeleteConnectClusterRequest name. */
                    public name: string;

                    /** DeleteConnectClusterRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new DeleteConnectClusterRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteConnectClusterRequest instance
                     */
                    public static create(properties?: google.cloud.managedkafka.v1.IDeleteConnectClusterRequest): google.cloud.managedkafka.v1.DeleteConnectClusterRequest;

                    /**
                     * Encodes the specified DeleteConnectClusterRequest message. Does not implicitly {@link google.cloud.managedkafka.v1.DeleteConnectClusterRequest.verify|verify} messages.
                     * @param message DeleteConnectClusterRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.managedkafka.v1.IDeleteConnectClusterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteConnectClusterRequest message, length delimited. Does not implicitly {@link google.cloud.managedkafka.v1.DeleteConnectClusterRequest.verify|verify} messages.
                     * @param message DeleteConnectClusterRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.managedkafka.v1.IDeleteConnectClusterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteConnectClusterRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteConnectClusterRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.managedkafka.v1.DeleteConnectClusterRequest;

                    /**
                     * Decodes a DeleteConnectClusterRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteConnectClusterRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.managedkafka.v1.DeleteConnectClusterRequest;

                    /**
                     * Verifies a DeleteConnectClusterRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteConnectClusterRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteConnectClusterRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.managedkafka.v1.DeleteConnectClusterRequest;

                    /**
                     * Creates a plain object from a DeleteConnectClusterRequest message. Also converts values to other types if specified.
                     * @param message DeleteConnectClusterRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.managedkafka.v1.DeleteConnectClusterRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteConnectClusterRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeleteConnectClusterRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListConnectClustersRequest. */
                interface IListConnectClustersRequest {

                    /** ListConnectClustersRequest parent */
                    parent?: (string|null);

                    /** ListConnectClustersRequest pageSize */
                    pageSize?: (number|null);

                    /** ListConnectClustersRequest pageToken */
                    pageToken?: (string|null);

                    /** ListConnectClustersRequest filter */
                    filter?: (string|null);

                    /** ListConnectClustersRequest orderBy */
                    orderBy?: (string|null);
                }

                /** Represents a ListConnectClustersRequest. */
                class ListConnectClustersRequest implements IListConnectClustersRequest {

                    /**
                     * Constructs a new ListConnectClustersRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.managedkafka.v1.IListConnectClustersRequest);

                    /** ListConnectClustersRequest parent. */
                    public parent: string;

                    /** ListConnectClustersRequest pageSize. */
                    public pageSize: number;

                    /** ListConnectClustersRequest pageToken. */
                    public pageToken: string;

                    /** ListConnectClustersRequest filter. */
                    public filter: string;

                    /** ListConnectClustersRequest orderBy. */
                    public orderBy: string;

                    /**
                     * Creates a new ListConnectClustersRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListConnectClustersRequest instance
                     */
                    public static create(properties?: google.cloud.managedkafka.v1.IListConnectClustersRequest): google.cloud.managedkafka.v1.ListConnectClustersRequest;

                    /**
                     * Encodes the specified ListConnectClustersRequest message. Does not implicitly {@link google.cloud.managedkafka.v1.ListConnectClustersRequest.verify|verify} messages.
                     * @param message ListConnectClustersRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.managedkafka.v1.IListConnectClustersRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListConnectClustersRequest message, length delimited. Does not implicitly {@link google.cloud.managedkafka.v1.ListConnectClustersRequest.verify|verify} messages.
                     * @param message ListConnectClustersRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.managedkafka.v1.IListConnectClustersRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListConnectClustersRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListConnectClustersRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.managedkafka.v1.ListConnectClustersRequest;

                    /**
                     * Decodes a ListConnectClustersRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListConnectClustersRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.managedkafka.v1.ListConnectClustersRequest;

                    /**
                     * Verifies a ListConnectClustersRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListConnectClustersRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListConnectClustersRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.managedkafka.v1.ListConnectClustersRequest;

                    /**
                     * Creates a plain object from a ListConnectClustersRequest message. Also converts values to other types if specified.
                     * @param message ListConnectClustersRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.managedkafka.v1.ListConnectClustersRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListConnectClustersRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListConnectClustersRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListConnectClustersResponse. */
                interface IListConnectClustersResponse {

                    /** ListConnectClustersResponse connectClusters */
                    connectClusters?: (google.cloud.managedkafka.v1.IConnectCluster[]|null);

                    /** ListConnectClustersResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListConnectClustersResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a ListConnectClustersResponse. */
                class ListConnectClustersResponse implements IListConnectClustersResponse {

                    /**
                     * Constructs a new ListConnectClustersResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.managedkafka.v1.IListConnectClustersResponse);

                    /** ListConnectClustersResponse connectClusters. */
                    public connectClusters: google.cloud.managedkafka.v1.IConnectCluster[];

                    /** ListConnectClustersResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListConnectClustersResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListConnectClustersResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListConnectClustersResponse instance
                     */
                    public static create(properties?: google.cloud.managedkafka.v1.IListConnectClustersResponse): google.cloud.managedkafka.v1.ListConnectClustersResponse;

                    /**
                     * Encodes the specified ListConnectClustersResponse message. Does not implicitly {@link google.cloud.managedkafka.v1.ListConnectClustersResponse.verify|verify} messages.
                     * @param message ListConnectClustersResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.managedkafka.v1.IListConnectClustersResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListConnectClustersResponse message, length delimited. Does not implicitly {@link google.cloud.managedkafka.v1.ListConnectClustersResponse.verify|verify} messages.
                     * @param message ListConnectClustersResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.managedkafka.v1.IListConnectClustersResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListConnectClustersResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListConnectClustersResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.managedkafka.v1.ListConnectClustersResponse;

                    /**
                     * Decodes a ListConnectClustersResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListConnectClustersResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.managedkafka.v1.ListConnectClustersResponse;

                    /**
                     * Verifies a ListConnectClustersResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListConnectClustersResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListConnectClustersResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.managedkafka.v1.ListConnectClustersResponse;

                    /**
                     * Creates a plain object from a ListConnectClustersResponse message. Also converts values to other types if specified.
                     * @param message ListConnectClustersResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.managedkafka.v1.ListConnectClustersResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListConnectClustersResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListConnectClustersResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetConnectorRequest. */
                interface IGetConnectorRequest {

                    /** GetConnectorRequest name */
                    name?: (string|null);
                }

                /** Represents a GetConnectorRequest. */
                class GetConnectorRequest implements IGetConnectorRequest {

                    /**
                     * Constructs a new GetConnectorRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.managedkafka.v1.IGetConnectorRequest);

                    /** GetConnectorRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetConnectorRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetConnectorRequest instance
                     */
                    public static create(properties?: google.cloud.managedkafka.v1.IGetConnectorRequest): google.cloud.managedkafka.v1.GetConnectorRequest;

                    /**
                     * Encodes the specified GetConnectorRequest message. Does not implicitly {@link google.cloud.managedkafka.v1.GetConnectorRequest.verify|verify} messages.
                     * @param message GetConnectorRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.managedkafka.v1.IGetConnectorRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetConnectorRequest message, length delimited. Does not implicitly {@link google.cloud.managedkafka.v1.GetConnectorRequest.verify|verify} messages.
                     * @param message GetConnectorRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.managedkafka.v1.IGetConnectorRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetConnectorRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetConnectorRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.managedkafka.v1.GetConnectorRequest;

                    /**
                     * Decodes a GetConnectorRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetConnectorRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.managedkafka.v1.GetConnectorRequest;

                    /**
                     * Verifies a GetConnectorRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetConnectorRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetConnectorRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.managedkafka.v1.GetConnectorRequest;

                    /**
                     * Creates a plain object from a GetConnectorRequest message. Also converts values to other types if specified.
                     * @param message GetConnectorRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.managedkafka.v1.GetConnectorRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetConnectorRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetConnectorRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CreateConnectorRequest. */
                interface ICreateConnectorRequest {

                    /** CreateConnectorRequest parent */
                    parent?: (string|null);

                    /** CreateConnectorRequest connectorId */
                    connectorId?: (string|null);

                    /** CreateConnectorRequest connector */
                    connector?: (google.cloud.managedkafka.v1.IConnector|null);
                }

                /** Represents a CreateConnectorRequest. */
                class CreateConnectorRequest implements ICreateConnectorRequest {

                    /**
                     * Constructs a new CreateConnectorRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.managedkafka.v1.ICreateConnectorRequest);

                    /** CreateConnectorRequest parent. */
                    public parent: string;

                    /** CreateConnectorRequest connectorId. */
                    public connectorId: string;

                    /** CreateConnectorRequest connector. */
                    public connector?: (google.cloud.managedkafka.v1.IConnector|null);

                    /**
                     * Creates a new CreateConnectorRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateConnectorRequest instance
                     */
                    public static create(properties?: google.cloud.managedkafka.v1.ICreateConnectorRequest): google.cloud.managedkafka.v1.CreateConnectorRequest;

                    /**
                     * Encodes the specified CreateConnectorRequest message. Does not implicitly {@link google.cloud.managedkafka.v1.CreateConnectorRequest.verify|verify} messages.
                     * @param message CreateConnectorRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.managedkafka.v1.ICreateConnectorRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateConnectorRequest message, length delimited. Does not implicitly {@link google.cloud.managedkafka.v1.CreateConnectorRequest.verify|verify} messages.
                     * @param message CreateConnectorRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.managedkafka.v1.ICreateConnectorRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateConnectorRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateConnectorRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.managedkafka.v1.CreateConnectorRequest;

                    /**
                     * Decodes a CreateConnectorRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateConnectorRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.managedkafka.v1.CreateConnectorRequest;

                    /**
                     * Verifies a CreateConnectorRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateConnectorRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateConnectorRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.managedkafka.v1.CreateConnectorRequest;

                    /**
                     * Creates a plain object from a CreateConnectorRequest message. Also converts values to other types if specified.
                     * @param message CreateConnectorRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.managedkafka.v1.CreateConnectorRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateConnectorRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateConnectorRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpdateConnectorRequest. */
                interface IUpdateConnectorRequest {

                    /** UpdateConnectorRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateConnectorRequest connector */
                    connector?: (google.cloud.managedkafka.v1.IConnector|null);
                }

                /** Represents an UpdateConnectorRequest. */
                class UpdateConnectorRequest implements IUpdateConnectorRequest {

                    /**
                     * Constructs a new UpdateConnectorRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.managedkafka.v1.IUpdateConnectorRequest);

                    /** UpdateConnectorRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateConnectorRequest connector. */
                    public connector?: (google.cloud.managedkafka.v1.IConnector|null);

                    /**
                     * Creates a new UpdateConnectorRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateConnectorRequest instance
                     */
                    public static create(properties?: google.cloud.managedkafka.v1.IUpdateConnectorRequest): google.cloud.managedkafka.v1.UpdateConnectorRequest;

                    /**
                     * Encodes the specified UpdateConnectorRequest message. Does not implicitly {@link google.cloud.managedkafka.v1.UpdateConnectorRequest.verify|verify} messages.
                     * @param message UpdateConnectorRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.managedkafka.v1.IUpdateConnectorRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateConnectorRequest message, length delimited. Does not implicitly {@link google.cloud.managedkafka.v1.UpdateConnectorRequest.verify|verify} messages.
                     * @param message UpdateConnectorRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.managedkafka.v1.IUpdateConnectorRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateConnectorRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateConnectorRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.managedkafka.v1.UpdateConnectorRequest;

                    /**
                     * Decodes an UpdateConnectorRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateConnectorRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.managedkafka.v1.UpdateConnectorRequest;

                    /**
                     * Verifies an UpdateConnectorRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateConnectorRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateConnectorRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.managedkafka.v1.UpdateConnectorRequest;

                    /**
                     * Creates a plain object from an UpdateConnectorRequest message. Also converts values to other types if specified.
                     * @param message UpdateConnectorRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.managedkafka.v1.UpdateConnectorRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateConnectorRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdateConnectorRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeleteConnectorRequest. */
                interface IDeleteConnectorRequest {

                    /** DeleteConnectorRequest name */
                    name?: (string|null);
                }

                /** Represents a DeleteConnectorRequest. */
                class DeleteConnectorRequest implements IDeleteConnectorRequest {

                    /**
                     * Constructs a new DeleteConnectorRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.managedkafka.v1.IDeleteConnectorRequest);

                    /** DeleteConnectorRequest name. */
                    public name: string;

                    /**
                     * Creates a new DeleteConnectorRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteConnectorRequest instance
                     */
                    public static create(properties?: google.cloud.managedkafka.v1.IDeleteConnectorRequest): google.cloud.managedkafka.v1.DeleteConnectorRequest;

                    /**
                     * Encodes the specified DeleteConnectorRequest message. Does not implicitly {@link google.cloud.managedkafka.v1.DeleteConnectorRequest.verify|verify} messages.
                     * @param message DeleteConnectorRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.managedkafka.v1.IDeleteConnectorRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteConnectorRequest message, length delimited. Does not implicitly {@link google.cloud.managedkafka.v1.DeleteConnectorRequest.verify|verify} messages.
                     * @param message DeleteConnectorRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.managedkafka.v1.IDeleteConnectorRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteConnectorRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteConnectorRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.managedkafka.v1.DeleteConnectorRequest;

                    /**
                     * Decodes a DeleteConnectorRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteConnectorRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.managedkafka.v1.DeleteConnectorRequest;

                    /**
                     * Verifies a DeleteConnectorRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteConnectorRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteConnectorRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.managedkafka.v1.DeleteConnectorRequest;

                    /**
                     * Creates a plain object from a DeleteConnectorRequest message. Also converts values to other types if specified.
                     * @param message DeleteConnectorRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.managedkafka.v1.DeleteConnectorRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteConnectorRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeleteConnectorRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListConnectorsRequest. */
                interface IListConnectorsRequest {

                    /** ListConnectorsRequest parent */
                    parent?: (string|null);

                    /** ListConnectorsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListConnectorsRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListConnectorsRequest. */
                class ListConnectorsRequest implements IListConnectorsRequest {

                    /**
                     * Constructs a new ListConnectorsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.managedkafka.v1.IListConnectorsRequest);

                    /** ListConnectorsRequest parent. */
                    public parent: string;

                    /** ListConnectorsRequest pageSize. */
                    public pageSize: number;

                    /** ListConnectorsRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListConnectorsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListConnectorsRequest instance
                     */
                    public static create(properties?: google.cloud.managedkafka.v1.IListConnectorsRequest): google.cloud.managedkafka.v1.ListConnectorsRequest;

                    /**
                     * Encodes the specified ListConnectorsRequest message. Does not implicitly {@link google.cloud.managedkafka.v1.ListConnectorsRequest.verify|verify} messages.
                     * @param message ListConnectorsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.managedkafka.v1.IListConnectorsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListConnectorsRequest message, length delimited. Does not implicitly {@link google.cloud.managedkafka.v1.ListConnectorsRequest.verify|verify} messages.
                     * @param message ListConnectorsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.managedkafka.v1.IListConnectorsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListConnectorsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListConnectorsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.managedkafka.v1.ListConnectorsRequest;

                    /**
                     * Decodes a ListConnectorsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListConnectorsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.managedkafka.v1.ListConnectorsRequest;

                    /**
                     * Verifies a ListConnectorsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListConnectorsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListConnectorsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.managedkafka.v1.ListConnectorsRequest;

                    /**
                     * Creates a plain object from a ListConnectorsRequest message. Also converts values to other types if specified.
                     * @param message ListConnectorsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.managedkafka.v1.ListConnectorsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListConnectorsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListConnectorsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListConnectorsResponse. */
                interface IListConnectorsResponse {

                    /** ListConnectorsResponse connectors */
                    connectors?: (google.cloud.managedkafka.v1.IConnector[]|null);

                    /** ListConnectorsResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListConnectorsResponse. */
                class ListConnectorsResponse implements IListConnectorsResponse {

                    /**
                     * Constructs a new ListConnectorsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.managedkafka.v1.IListConnectorsResponse);

                    /** ListConnectorsResponse connectors. */
                    public connectors: google.cloud.managedkafka.v1.IConnector[];

                    /** ListConnectorsResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListConnectorsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListConnectorsResponse instance
                     */
                    public static create(properties?: google.cloud.managedkafka.v1.IListConnectorsResponse): google.cloud.managedkafka.v1.ListConnectorsResponse;

                    /**
                     * Encodes the specified ListConnectorsResponse message. Does not implicitly {@link google.cloud.managedkafka.v1.ListConnectorsResponse.verify|verify} messages.
                     * @param message ListConnectorsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.managedkafka.v1.IListConnectorsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListConnectorsResponse message, length delimited. Does not implicitly {@link google.cloud.managedkafka.v1.ListConnectorsResponse.verify|verify} messages.
                     * @param message ListConnectorsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.managedkafka.v1.IListConnectorsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListConnectorsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListConnectorsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.managedkafka.v1.ListConnectorsResponse;

                    /**
                     * Decodes a ListConnectorsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListConnectorsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.managedkafka.v1.ListConnectorsResponse;

                    /**
                     * Verifies a ListConnectorsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListConnectorsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListConnectorsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.managedkafka.v1.ListConnectorsResponse;

                    /**
                     * Creates a plain object from a ListConnectorsResponse message. Also converts values to other types if specified.
                     * @param message ListConnectorsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.managedkafka.v1.ListConnectorsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListConnectorsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListConnectorsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a PauseConnectorRequest. */
                interface IPauseConnectorRequest {

                    /** PauseConnectorRequest name */
                    name?: (string|null);
                }

                /** Represents a PauseConnectorRequest. */
                class PauseConnectorRequest implements IPauseConnectorRequest {

                    /**
                     * Constructs a new PauseConnectorRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.managedkafka.v1.IPauseConnectorRequest);

                    /** PauseConnectorRequest name. */
                    public name: string;

                    /**
                     * Creates a new PauseConnectorRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PauseConnectorRequest instance
                     */
                    public static create(properties?: google.cloud.managedkafka.v1.IPauseConnectorRequest): google.cloud.managedkafka.v1.PauseConnectorRequest;

                    /**
                     * Encodes the specified PauseConnectorRequest message. Does not implicitly {@link google.cloud.managedkafka.v1.PauseConnectorRequest.verify|verify} messages.
                     * @param message PauseConnectorRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.managedkafka.v1.IPauseConnectorRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PauseConnectorRequest message, length delimited. Does not implicitly {@link google.cloud.managedkafka.v1.PauseConnectorRequest.verify|verify} messages.
                     * @param message PauseConnectorRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.managedkafka.v1.IPauseConnectorRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PauseConnectorRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PauseConnectorRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.managedkafka.v1.PauseConnectorRequest;

                    /**
                     * Decodes a PauseConnectorRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PauseConnectorRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.managedkafka.v1.PauseConnectorRequest;

                    /**
                     * Verifies a PauseConnectorRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PauseConnectorRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PauseConnectorRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.managedkafka.v1.PauseConnectorRequest;

                    /**
                     * Creates a plain object from a PauseConnectorRequest message. Also converts values to other types if specified.
                     * @param message PauseConnectorRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.managedkafka.v1.PauseConnectorRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PauseConnectorRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for PauseConnectorRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a PauseConnectorResponse. */
                interface IPauseConnectorResponse {
                }

                /** Represents a PauseConnectorResponse. */
                class PauseConnectorResponse implements IPauseConnectorResponse {

                    /**
                     * Constructs a new PauseConnectorResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.managedkafka.v1.IPauseConnectorResponse);

                    /**
                     * Creates a new PauseConnectorResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PauseConnectorResponse instance
                     */
                    public static create(properties?: google.cloud.managedkafka.v1.IPauseConnectorResponse): google.cloud.managedkafka.v1.PauseConnectorResponse;

                    /**
                     * Encodes the specified PauseConnectorResponse message. Does not implicitly {@link google.cloud.managedkafka.v1.PauseConnectorResponse.verify|verify} messages.
                     * @param message PauseConnectorResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.managedkafka.v1.IPauseConnectorResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PauseConnectorResponse message, length delimited. Does not implicitly {@link google.cloud.managedkafka.v1.PauseConnectorResponse.verify|verify} messages.
                     * @param message PauseConnectorResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.managedkafka.v1.IPauseConnectorResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PauseConnectorResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PauseConnectorResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.managedkafka.v1.PauseConnectorResponse;

                    /**
                     * Decodes a PauseConnectorResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PauseConnectorResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.managedkafka.v1.PauseConnectorResponse;

                    /**
                     * Verifies a PauseConnectorResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PauseConnectorResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PauseConnectorResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.managedkafka.v1.PauseConnectorResponse;

                    /**
                     * Creates a plain object from a PauseConnectorResponse message. Also converts values to other types if specified.
                     * @param message PauseConnectorResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.managedkafka.v1.PauseConnectorResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PauseConnectorResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for PauseConnectorResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ResumeConnectorRequest. */
                interface IResumeConnectorRequest {

                    /** ResumeConnectorRequest name */
                    name?: (string|null);
                }

                /** Represents a ResumeConnectorRequest. */
                class ResumeConnectorRequest implements IResumeConnectorRequest {

                    /**
                     * Constructs a new ResumeConnectorRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.managedkafka.v1.IResumeConnectorRequest);

                    /** ResumeConnectorRequest name. */
                    public name: string;

                    /**
                     * Creates a new ResumeConnectorRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ResumeConnectorRequest instance
                     */
                    public static create(properties?: google.cloud.managedkafka.v1.IResumeConnectorRequest): google.cloud.managedkafka.v1.ResumeConnectorRequest;

                    /**
                     * Encodes the specified ResumeConnectorRequest message. Does not implicitly {@link google.cloud.managedkafka.v1.ResumeConnectorRequest.verify|verify} messages.
                     * @param message ResumeConnectorRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.managedkafka.v1.IResumeConnectorRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ResumeConnectorRequest message, length delimited. Does not implicitly {@link google.cloud.managedkafka.v1.ResumeConnectorRequest.verify|verify} messages.
                     * @param message ResumeConnectorRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.managedkafka.v1.IResumeConnectorRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ResumeConnectorRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ResumeConnectorRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.managedkafka.v1.ResumeConnectorRequest;

                    /**
                     * Decodes a ResumeConnectorRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ResumeConnectorRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.managedkafka.v1.ResumeConnectorRequest;

                    /**
                     * Verifies a ResumeConnectorRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ResumeConnectorRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ResumeConnectorRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.managedkafka.v1.ResumeConnectorRequest;

                    /**
                     * Creates a plain object from a ResumeConnectorRequest message. Also converts values to other types if specified.
                     * @param message ResumeConnectorRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.managedkafka.v1.ResumeConnectorRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ResumeConnectorRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ResumeConnectorRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ResumeConnectorResponse. */
                interface IResumeConnectorResponse {
                }

                /** Represents a ResumeConnectorResponse. */
                class ResumeConnectorResponse implements IResumeConnectorResponse {

                    /**
                     * Constructs a new ResumeConnectorResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.managedkafka.v1.IResumeConnectorResponse);

                    /**
                     * Creates a new ResumeConnectorResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ResumeConnectorResponse instance
                     */
                    public static create(properties?: google.cloud.managedkafka.v1.IResumeConnectorResponse): google.cloud.managedkafka.v1.ResumeConnectorResponse;

                    /**
                     * Encodes the specified ResumeConnectorResponse message. Does not implicitly {@link google.cloud.managedkafka.v1.ResumeConnectorResponse.verify|verify} messages.
                     * @param message ResumeConnectorResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.managedkafka.v1.IResumeConnectorResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ResumeConnectorResponse message, length delimited. Does not implicitly {@link google.cloud.managedkafka.v1.ResumeConnectorResponse.verify|verify} messages.
                     * @param message ResumeConnectorResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.managedkafka.v1.IResumeConnectorResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ResumeConnectorResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ResumeConnectorResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.managedkafka.v1.ResumeConnectorResponse;

                    /**
                     * Decodes a ResumeConnectorResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ResumeConnectorResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.managedkafka.v1.ResumeConnectorResponse;

                    /**
                     * Verifies a ResumeConnectorResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ResumeConnectorResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ResumeConnectorResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.managedkafka.v1.ResumeConnectorResponse;

                    /**
                     * Creates a plain object from a ResumeConnectorResponse message. Also converts values to other types if specified.
                     * @param message ResumeConnectorResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.managedkafka.v1.ResumeConnectorResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ResumeConnectorResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ResumeConnectorResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a RestartConnectorRequest. */
                interface IRestartConnectorRequest {

                    /** RestartConnectorRequest name */
                    name?: (string|null);
                }

                /** Represents a RestartConnectorRequest. */
                class RestartConnectorRequest implements IRestartConnectorRequest {

                    /**
                     * Constructs a new RestartConnectorRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.managedkafka.v1.IRestartConnectorRequest);

                    /** RestartConnectorRequest name. */
                    public name: string;

                    /**
                     * Creates a new RestartConnectorRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RestartConnectorRequest instance
                     */
                    public static create(properties?: google.cloud.managedkafka.v1.IRestartConnectorRequest): google.cloud.managedkafka.v1.RestartConnectorRequest;

                    /**
                     * Encodes the specified RestartConnectorRequest message. Does not implicitly {@link google.cloud.managedkafka.v1.RestartConnectorRequest.verify|verify} messages.
                     * @param message RestartConnectorRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.managedkafka.v1.IRestartConnectorRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RestartConnectorRequest message, length delimited. Does not implicitly {@link google.cloud.managedkafka.v1.RestartConnectorRequest.verify|verify} messages.
                     * @param message RestartConnectorRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.managedkafka.v1.IRestartConnectorRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RestartConnectorRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RestartConnectorRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.managedkafka.v1.RestartConnectorRequest;

                    /**
                     * Decodes a RestartConnectorRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RestartConnectorRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.managedkafka.v1.RestartConnectorRequest;

                    /**
                     * Verifies a RestartConnectorRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RestartConnectorRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RestartConnectorRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.managedkafka.v1.RestartConnectorRequest;

                    /**
                     * Creates a plain object from a RestartConnectorRequest message. Also converts values to other types if specified.
                     * @param message RestartConnectorRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.managedkafka.v1.RestartConnectorRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RestartConnectorRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for RestartConnectorRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a RestartConnectorResponse. */
                interface IRestartConnectorResponse {
                }

                /** Represents a RestartConnectorResponse. */
                class RestartConnectorResponse implements IRestartConnectorResponse {

                    /**
                     * Constructs a new RestartConnectorResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.managedkafka.v1.IRestartConnectorResponse);

                    /**
                     * Creates a new RestartConnectorResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RestartConnectorResponse instance
                     */
                    public static create(properties?: google.cloud.managedkafka.v1.IRestartConnectorResponse): google.cloud.managedkafka.v1.RestartConnectorResponse;

                    /**
                     * Encodes the specified RestartConnectorResponse message. Does not implicitly {@link google.cloud.managedkafka.v1.RestartConnectorResponse.verify|verify} messages.
                     * @param message RestartConnectorResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.managedkafka.v1.IRestartConnectorResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RestartConnectorResponse message, length delimited. Does not implicitly {@link google.cloud.managedkafka.v1.RestartConnectorResponse.verify|verify} messages.
                     * @param message RestartConnectorResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.managedkafka.v1.IRestartConnectorResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RestartConnectorResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RestartConnectorResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.managedkafka.v1.RestartConnectorResponse;

                    /**
                     * Decodes a RestartConnectorResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RestartConnectorResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.managedkafka.v1.RestartConnectorResponse;

                    /**
                     * Verifies a RestartConnectorResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RestartConnectorResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RestartConnectorResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.managedkafka.v1.RestartConnectorResponse;

                    /**
                     * Creates a plain object from a RestartConnectorResponse message. Also converts values to other types if specified.
                     * @param message RestartConnectorResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.managedkafka.v1.RestartConnectorResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RestartConnectorResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for RestartConnectorResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a StopConnectorRequest. */
                interface IStopConnectorRequest {

                    /** StopConnectorRequest name */
                    name?: (string|null);
                }

                /** Represents a StopConnectorRequest. */
                class StopConnectorRequest implements IStopConnectorRequest {

                    /**
                     * Constructs a new StopConnectorRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.managedkafka.v1.IStopConnectorRequest);

                    /** StopConnectorRequest name. */
                    public name: string;

                    /**
                     * Creates a new StopConnectorRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns StopConnectorRequest instance
                     */
                    public static create(properties?: google.cloud.managedkafka.v1.IStopConnectorRequest): google.cloud.managedkafka.v1.StopConnectorRequest;

                    /**
                     * Encodes the specified StopConnectorRequest message. Does not implicitly {@link google.cloud.managedkafka.v1.StopConnectorRequest.verify|verify} messages.
                     * @param message StopConnectorRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.managedkafka.v1.IStopConnectorRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified StopConnectorRequest message, length delimited. Does not implicitly {@link google.cloud.managedkafka.v1.StopConnectorRequest.verify|verify} messages.
                     * @param message StopConnectorRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.managedkafka.v1.IStopConnectorRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a StopConnectorRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns StopConnectorRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.managedkafka.v1.StopConnectorRequest;

                    /**
                     * Decodes a StopConnectorRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns StopConnectorRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.managedkafka.v1.StopConnectorRequest;

                    /**
                     * Verifies a StopConnectorRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a StopConnectorRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns StopConnectorRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.managedkafka.v1.StopConnectorRequest;

                    /**
                     * Creates a plain object from a StopConnectorRequest message. Also converts values to other types if specified.
                     * @param message StopConnectorRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.managedkafka.v1.StopConnectorRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this StopConnectorRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for StopConnectorRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a StopConnectorResponse. */
                interface IStopConnectorResponse {
                }

                /** Represents a StopConnectorResponse. */
                class StopConnectorResponse implements IStopConnectorResponse {

                    /**
                     * Constructs a new StopConnectorResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.managedkafka.v1.IStopConnectorResponse);

                    /**
                     * Creates a new StopConnectorResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns StopConnectorResponse instance
                     */
                    public static create(properties?: google.cloud.managedkafka.v1.IStopConnectorResponse): google.cloud.managedkafka.v1.StopConnectorResponse;

                    /**
                     * Encodes the specified StopConnectorResponse message. Does not implicitly {@link google.cloud.managedkafka.v1.StopConnectorResponse.verify|verify} messages.
                     * @param message StopConnectorResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.managedkafka.v1.IStopConnectorResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified StopConnectorResponse message, length delimited. Does not implicitly {@link google.cloud.managedkafka.v1.StopConnectorResponse.verify|verify} messages.
                     * @param message StopConnectorResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.managedkafka.v1.IStopConnectorResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a StopConnectorResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns StopConnectorResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.managedkafka.v1.StopConnectorResponse;

                    /**
                     * Decodes a StopConnectorResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns StopConnectorResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.managedkafka.v1.StopConnectorResponse;

                    /**
                     * Verifies a StopConnectorResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a StopConnectorResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns StopConnectorResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.managedkafka.v1.StopConnectorResponse;

                    /**
                     * Creates a plain object from a StopConnectorResponse message. Also converts values to other types if specified.
                     * @param message StopConnectorResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.managedkafka.v1.StopConnectorResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this StopConnectorResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for StopConnectorResponse
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

        /** Properties of a FieldInfo. */
        interface IFieldInfo {

            /** FieldInfo format */
            format?: (google.api.FieldInfo.Format|keyof typeof google.api.FieldInfo.Format|null);
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

            /** FieldOptions .google.api.fieldInfo */
            ".google.api.fieldInfo"?: (google.api.IFieldInfo|null);

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
